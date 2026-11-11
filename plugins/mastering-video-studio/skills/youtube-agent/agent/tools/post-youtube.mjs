#!/usr/bin/env node
// Step 11 of the flowchart: post the finished video to YouTube through Zernio.
// Uploads the video and the thumbnail to Zernio's storage, then creates one YouTube post with the
// title, description (with chapters), tags and visibility. Private by default: watch it in
// YouTube Studio, then make it public there.
//
//   node tools/post-youtube.mjs --video runs/x/final.mp4 --thumbnail runs/x/thumbnails/v1.jpg \
//     --meta runs/x/youtube.json [--visibility private|unlisted|public] [--schedule 2026-11-20T14:00:00Z] [--dry-run]
//
// youtube.json: { "title", "description", "tags": [] }  (the pipeline writes it; in the Claude Code
// route Claude writes it). --title / --description override the file.
//
// One-time setup: make a Zernio account (zernio.com), connect your YouTube channel in its dashboard,
// create an API key and put it in .env as ZERNIO_API_KEY. If you connected more than one channel, set
// ZERNIO_YOUTUBE_ACCOUNT_ID too (node tools/post-youtube.mjs --accounts lists them).
import { readFileSync, statSync } from 'node:fs';
import { basename, extname } from 'node:path';
import { parseArgs } from 'node:util';
import { getJson, need } from './env.mjs';

const { values: a } = parseArgs({
  options: {
    video: { type: 'string' },
    thumbnail: { type: 'string' },
    meta: { type: 'string' },
    title: { type: 'string' },
    description: { type: 'string' },
    visibility: { type: 'string', default: 'private' },
    schedule: { type: 'string' },
    'made-for-kids': { type: 'boolean', default: false },
    accounts: { type: 'boolean', default: false },
    'dry-run': { type: 'boolean', default: false },
  },
});
const BASE = (process.env.ZERNIO_API_BASE || 'https://zernio.com/api').replace(/\/$/, '');
const dry = a['dry-run'];
const key = dry ? process.env.ZERNIO_API_KEY || 'dry-run' : need('ZERNIO_API_KEY');
const auth = { Authorization: `Bearer ${key}` };

async function youtubeAccount() {
  if (process.env.ZERNIO_YOUTUBE_ACCOUNT_ID) return process.env.ZERNIO_YOUTUBE_ACCOUNT_ID;
  const r = await getJson(`${BASE}/v1/accounts`, { headers: auth }, 'Zernio accounts');
  const list = (r.accounts || r.data || r).filter((x) => x.platform === 'youtube' && x.isActive !== false);
  if (a.accounts) return list;
  if (!list.length) throw new Error('No connected YouTube channel in Zernio. Connect one in the Zernio dashboard first.');
  if (list.length > 1) throw new Error(`You have ${list.length} YouTube channels in Zernio. Set ZERNIO_YOUTUBE_ACCOUNT_ID in .env (see --accounts).`);
  return list[0]._id || list[0].id;
}

if (a.accounts) {
  const list = await youtubeAccount();
  for (const x of Array.isArray(list) ? list : [{ _id: list }]) console.log(`${x._id || x.id}  ${x.username || x.name || x.displayName || ''}`);
  process.exit(0);
}
if (!a.video) {
  console.error('Usage: node tools/post-youtube.mjs --video final.mp4 --meta youtube.json [--thumbnail t.jpg] [--visibility private]');
  process.exit(1);
}

const meta = a.meta ? JSON.parse(readFileSync(a.meta, 'utf8')) : {};
const title = (a.title || meta.title || '').slice(0, 100);
const description = (a.description || meta.description || '').slice(0, 5000);
if (!title) throw new Error('No title: pass --title or a --meta file with "title".');
const tags = (meta.tags || []).filter((t) => t.length <= 100).reduce((acc, t) => (acc.join(',').length + t.length < 480 ? [...acc, t] : acc), []);

const TYPES = { '.mp4': 'video/mp4', '.mov': 'video/quicktime', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png' };
async function upload(file) {
  const contentType = TYPES[extname(file).toLowerCase()];
  if (!contentType) throw new Error(`Unsupported file type: ${file}`);
  const size = statSync(file).size;
  if (dry) return `https://example.invalid/${basename(file)}`;
  const p = await getJson(`${BASE}/v1/media/presign`, {
    method: 'POST',
    headers: { ...auth, 'Content-Type': 'application/json' },
    body: JSON.stringify({ filename: basename(file), contentType, size }),
  }, 'Zernio presign');
  console.log(`uploading ${basename(file)} (${(size / 1e6).toFixed(1)} MB)…`);
  const put = await fetch(p.uploadUrl, { method: 'PUT', headers: { 'Content-Type': contentType }, body: readFileSync(file) });
  if (!put.ok) throw new Error(`upload failed: HTTP ${put.status} ${await put.text()}`);
  return p.publicUrl;
}

if (a.thumbnail && statSync(a.thumbnail).size > 2e6) throw new Error('Thumbnail is over 2 MB. Re-save it as a smaller JPG.');
const accountId = dry && !process.env.ZERNIO_API_KEY ? 'YOUR_YOUTUBE_ACCOUNT_ID' : await youtubeAccount();
const videoUrl = await upload(a.video);
const thumbUrl = a.thumbnail ? await upload(a.thumbnail) : undefined;

const body = {
  content: description || title,
  tags,
  mediaItems: [{ type: 'video', url: videoUrl, ...(thumbUrl ? { thumbnail: thumbUrl } : {}) }],
  platforms: [{
    platform: 'youtube',
    accountId,
    platformSpecificData: { title, visibility: a.visibility, madeForKids: a['made-for-kids'] },
  }],
  ...(a.schedule ? { scheduledFor: a.schedule } : { publishNow: true }),
};

if (dry) {
  console.log('Dry run. This is the request that would be sent to POST /v1/posts:\n');
  console.log(JSON.stringify(body, null, 2));
  process.exit(0);
}
const r = await getJson(`${BASE}/v1/posts`, {
  method: 'POST',
  headers: { ...auth, 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
}, 'Zernio post');
const post = r.post || r;
console.log(`Posted: ${post._id || post.id} status ${post.status || 'created'}`);
const url = post.platforms?.find((p) => p.platform === 'youtube')?.platformPostUrl || post.platformPostUrl;
if (url) console.log(`YouTube: ${url}`);
console.log(a.visibility === 'private' ? 'It is private. Watch it in YouTube Studio, set the AI disclosure if it applies, then make it public.' : '');
