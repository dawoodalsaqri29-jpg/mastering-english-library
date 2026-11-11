#!/usr/bin/env node
// Step 1 of the flowchart: find topics that are already proven in your niche.
// Searches YouTube for long videos in the niche, then scores each one against its channel's
// usual views. A video with 5x its channel's average is an "outlier": a topic people want.
//
//   node tools/find-topics.mjs --niche "space disasters" [--months 12] [--max 50] [--out topics.json]
//
// Key: YOUTUBE_API_KEY (Google Cloud console > APIs > YouTube Data API v3 > Credentials).
// Cost: about 100 quota units per search page + 1 per videos/channels call; the free daily
// quota is 10,000 units.
import { writeFileSync } from 'node:fs';
import { parseArgs } from 'node:util';
import { getJson, need } from './env.mjs';

const { values: a } = parseArgs({
  options: {
    niche: { type: 'string' },
    months: { type: 'string', default: '12' },
    max: { type: 'string', default: '50' },
    duration: { type: 'string', default: 'long' }, // long = over 20 min, medium = 4-20 min, any
    out: { type: 'string', default: 'topics.json' },
  },
});
if (!a.niche) {
  console.error('Usage: node tools/find-topics.mjs --niche "your niche" [--months 12] [--max 50]');
  process.exit(1);
}
const key = need('YOUTUBE_API_KEY');
const API = 'https://www.googleapis.com/youtube/v3';
const after = new Date(Date.now() - Number(a.months) * 30.4 * 86400e3).toISOString();

const ids = [];
let pageToken = '';
while (ids.length < Number(a.max)) {
  const q = new URLSearchParams({
    part: 'id', type: 'video', q: a.niche, order: 'viewCount', maxResults: '50',
    publishedAfter: after, relevanceLanguage: 'en', key,
  });
  if (a.duration !== 'any') q.set('videoDuration', a.duration);
  if (pageToken) q.set('pageToken', pageToken);
  const r = await getJson(`${API}/search?${q}`, {}, 'YouTube search');
  ids.push(...r.items.map((i) => i.id.videoId).filter(Boolean));
  if (!r.nextPageToken) break;
  pageToken = r.nextPageToken;
}
const videoIds = [...new Set(ids)].slice(0, Number(a.max));
if (!videoIds.length) {
  console.error('No videos found. Try a broader niche or --duration any.');
  process.exit(1);
}

const videos = [];
for (let i = 0; i < videoIds.length; i += 50) {
  const q = new URLSearchParams({ part: 'snippet,statistics,contentDetails', id: videoIds.slice(i, i + 50).join(','), key });
  videos.push(...(await getJson(`${API}/videos?${q}`, {}, 'YouTube videos')).items);
}
const channelIds = [...new Set(videos.map((v) => v.snippet.channelId))];
const channels = {};
for (let i = 0; i < channelIds.length; i += 50) {
  const q = new URLSearchParams({ part: 'snippet,statistics', id: channelIds.slice(i, i + 50).join(','), key });
  for (const c of (await getJson(`${API}/channels?${q}`, {}, 'YouTube channels')).items) channels[c.id] = c;
}

const topics = videos
  .map((v) => {
    const c = channels[v.snippet.channelId];
    const views = Number(v.statistics.viewCount || 0);
    const chViews = Number(c?.statistics?.viewCount || 0);
    const chVideos = Math.max(1, Number(c?.statistics?.videoCount || 1));
    const average = chViews / chVideos;
    return {
      title: v.snippet.title,
      url: `https://www.youtube.com/watch?v=${v.id}`,
      channel: v.snippet.channelTitle,
      subscribers: Number(c?.statistics?.subscriberCount || 0),
      views,
      channelAverage: Math.round(average),
      outlier: average > 0 ? Number((views / average).toFixed(1)) : 0,
      published: v.snippet.publishedAt.slice(0, 10),
      duration: v.contentDetails.duration,
    };
  })
  .sort((x, y) => y.outlier - x.outlier);

writeFileSync(a.out, JSON.stringify({ niche: a.niche, searchedAt: new Date().toISOString(), topics }, null, 2));
console.log(`\nTop outliers for "${a.niche}" (views / channel average):\n`);
for (const t of topics.slice(0, 10)) console.log(`  ${String(t.outlier).padStart(5)}x  ${t.title}  (${t.channel}, ${t.views.toLocaleString()} views)`);
console.log(`\nAll ${topics.length} saved to ${a.out}. Do not copy a title: take the idea and make your own angle.`);
