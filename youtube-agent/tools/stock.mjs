#!/usr/bin/env node
// Step 6 of the flowchart: stock footage for the scenes Claude should not draw.
// Searches Pexels and Pixabay (whichever keys you set) and downloads the best landscape clip.
// Every download is written to stock-log.json with its source page and author, so you can show
// where each clip came from if YouTube ever asks.
//
//   node tools/stock.mjs --query "rocket launch at night" --out clips/          one search
//   node tools/stock.mjs --plan runs/x/stock-plan.json --out runs/x/clips/      one clip per scene
//
// stock-plan.json: [{ "sceneId": "s004", "query": "..." }, ...]. Writes stock-map.json beside it:
// { "s004": "runs/x/clips/s004.mp4" }, which the render step uses in place of that scene's animation.
//
// Keys: PEXELS_API_KEY (pexels.com/api) and/or PIXABAY_API_KEY (pixabay.com/api/docs). Both free.
// Envato Elements has no download API: download those clips by hand into the same folder and add
// them to stock-map.json yourself.
import { createWriteStream, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { parseArgs } from 'node:util';
import { getJson } from './env.mjs';

const { values: a } = parseArgs({
  options: {
    query: { type: 'string' },
    plan: { type: 'string' },
    out: { type: 'string', default: 'clips' },
    orientation: { type: 'string', default: 'landscape' }, // landscape for 16:9, portrait for Shorts
    'min-seconds': { type: 'string', default: '4' },
  },
});
const PEXELS = process.env.PEXELS_API_KEY;
const PIXABAY = process.env.PIXABAY_API_KEY;
if (!PEXELS && !PIXABAY) {
  console.error('Set PEXELS_API_KEY and/or PIXABAY_API_KEY in .env (both are free).');
  process.exit(1);
}
if (!a.query && !a.plan) {
  console.error('Usage: node tools/stock.mjs --query "..." --out clips/   or   --plan stock-plan.json --out clips/');
  process.exit(1);
}
const portrait = a.orientation === 'portrait';
const minS = Number(a['min-seconds']);
const fits = (w, h) => (portrait ? h > w : w >= h);

async function searchPexels(q) {
  if (!PEXELS) return [];
  const p = new URLSearchParams({ query: q, orientation: a.orientation, per_page: '15', size: 'medium' });
  const r = await getJson(`https://api.pexels.com/videos/search?${p}`, { headers: { Authorization: PEXELS } }, 'Pexels');
  return r.videos.filter((v) => v.duration >= minS).map((v) => {
    const files = v.video_files.filter((f) => f.file_type === 'video/mp4' && fits(f.width, f.height) && Math.max(f.width, f.height) <= 1920);
    const f = files.sort((x, y) => y.width * y.height - x.width * x.height)[0];
    return f && { source: 'pexels', page: v.url, author: v.user?.name || '', licence: 'Pexels licence (free to use, no attribution required)', url: f.link, width: f.width, height: f.height, duration: v.duration };
  }).filter(Boolean);
}

async function searchPixabay(q) {
  if (!PIXABAY) return [];
  const p = new URLSearchParams({ key: PIXABAY, q, per_page: '15', safesearch: 'true' });
  const r = await getJson(`https://pixabay.com/api/videos/?${p}`, {}, 'Pixabay');
  return r.hits.filter((h) => h.duration >= minS).map((h) => {
    const f = ['large', 'medium', 'small'].map((k) => h.videos[k]).find((v) => v?.url && fits(v.width, v.height) && Math.max(v.width, v.height) <= 1920);
    return f && { source: 'pixabay', page: h.pageURL, author: h.user || '', licence: 'Pixabay Content License', url: f.url, width: f.width, height: f.height, duration: h.duration };
  }).filter(Boolean);
}

async function download(url, file) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${res.status} ${url}`);
  mkdirSync(dirname(file), { recursive: true });
  await pipeline(Readable.fromWeb(res.body), createWriteStream(file));
}

async function best(q) {
  const [px, pb] = await Promise.all([searchPexels(q).catch((e) => (console.warn(`  ${e.message}`), [])), searchPixabay(q).catch((e) => (console.warn(`  ${e.message}`), []))]);
  // Alternate the two libraries so neither always wins, largest file first within each.
  const all = [];
  for (let i = 0; i < Math.max(px.length, pb.length); i++) {
    if (px[i]) all.push(px[i]);
    if (pb[i]) all.push(pb[i]);
  }
  return all;
}

const outDir = resolve(a.out);
mkdirSync(outDir, { recursive: true });
const logFile = join(outDir, 'stock-log.json');
const log = existsSync(logFile) ? JSON.parse(readFileSync(logFile, 'utf8')) : [];

const jobs = a.plan
  ? JSON.parse(readFileSync(a.plan, 'utf8')).map((j) => ({ name: j.sceneId, query: j.query }))
  : [{ name: a.query.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40), query: a.query }];
const map = {};
for (const j of jobs) {
  const hits = await best(j.query);
  if (!hits.length) {
    console.warn(`  ${j.name}: nothing for "${j.query}". That scene stays animated.`);
    continue;
  }
  const h = hits[0];
  const file = join(outDir, `${j.name}.mp4`);
  await download(h.url, file);
  map[j.name] = file;
  log.push({ file, query: j.query, ...h, downloadedAt: new Date().toISOString() });
  console.log(`  ${j.name}: ${h.source} ${h.width}x${h.height} ${h.duration}s  ${h.page}`);
}
writeFileSync(logFile, JSON.stringify(log, null, 2));
if (a.plan) {
  const mapFile = join(dirname(resolve(a.plan)), 'stock-map.json');
  writeFileSync(mapFile, JSON.stringify(map, null, 2));
  console.log(`${Object.keys(map).length}/${jobs.length} scenes got a clip. Map: ${mapFile}`);
}
