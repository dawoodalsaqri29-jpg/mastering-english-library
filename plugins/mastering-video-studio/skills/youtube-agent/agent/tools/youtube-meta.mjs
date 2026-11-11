#!/usr/bin/env node
// Checks (and tidies) projects/<x>/youtube.json against YouTube's rules before upload.
//
//   node tools/youtube-meta.mjs --project projects/my-video
//
// Title: under 60 characters (hard limit 100), no < or >, no ALL-CAPS words. Description: 2 to 3
// sentences, then chapters.txt as is (first chapter 00:00, each 10 s or longer, 3 or more to show).
// Tags: 8 to 15 short phrases, 500 characters in total at most. Writes the tidied file back.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parseArgs } from 'node:util';

const { values: a } = parseArgs({ options: { project: { type: 'string' } } });
if (!a.project) { console.error('Usage: node tools/youtube-meta.mjs --project projects/<name>'); process.exit(1); }
const P = resolve(a.project);
const f = join(P, 'youtube.json');
if (!existsSync(f)) { console.error('Write youtube.json first: { "title", "description", "tags": [] }'); process.exit(1); }
const m = JSON.parse(readFileSync(f, 'utf8'));
const problems = [], notes = [];
const clean = (s) => String(s || '').replace(/[<>]/g, '');
m.title = clean(m.title).replace(/\s+/g, ' ').trim();
m.description = clean(m.description).trim();
if (!m.title) problems.push('no title');
if (m.title.length > 100) problems.push(`title is ${m.title.length} characters (limit 100)`);
else if (m.title.length > 60) notes.push(`title is ${m.title.length} characters: it will be cut off on phones (aim under 60)`);
if (/\b[A-Z]{4,}\b/.test(m.title)) notes.push('title has an ALL-CAPS word');

const toS = (x) => x.split(':').map(Number).reduce((s, v) => s * 60 + v, 0);
const ch = existsSync(join(P, 'chapters.txt')) ? readFileSync(join(P, 'chapters.txt'), 'utf8').trim().split('\n').filter(Boolean) : [];
if (ch.length) {
  const kept = [];
  for (const line of ch) {
    const [t, ...rest] = line.split(' ');
    if (kept.length && toS(t) - toS(kept[kept.length - 1].t) < 10) continue; // too short: merged into the one before
    kept.push({ t: kept.length ? t : t.replace(/\d/g, '0'), title: clean(rest.join(' ')) });
  }
  const block = kept.map((k) => `${k.t} ${k.title}`).join('\n');
  const body = m.description.replace(/\n*(Chapters:\n)?(\d{1,2}:)?\d{1,2}:\d{2} [\s\S]*$/, '').trim();
  if (kept.length >= 3) { m.description = `${body}\n\nChapters:\n${block}`; m.chapters = kept.map((k) => `${k.t} ${k.title}`); }
  else { m.description = body; notes.push(`${kept.length} chapter(s): YouTube needs 3 or more, so they are left out of the description`); }
}
if (m.description.length > 5000) problems.push(`description is ${m.description.length} characters (limit 5000)`);
const sentences = m.description.split('\n\n')[0].split(/[.?!]\s/).length;
if (sentences > 5) notes.push('the opening of the description is long: 2 to 3 sentences is enough');

const tags = [];
let total = 0;
for (const raw of m.tags || []) {
  const t = clean(raw).replace(/[",#]/g, '').trim().toLowerCase();
  if (!t || t.length > 60 || tags.includes(t)) continue;
  const cost = t.length + (t.includes(' ') ? 2 : 0) + (tags.length ? 1 : 0);
  if (total + cost > 500 || tags.length >= 30) break;
  tags.push(t); total += cost;
}
m.tags = tags;
if (tags.length < 8) notes.push(`${tags.length} tags: aim for 8 to 15`);
if (tags.length > 15) notes.push(`${tags.length} tags: 8 to 15 is enough`);
writeFileSync(f, JSON.stringify(m, null, 2) + '\n');
console.log(`title (${m.title.length}): ${m.title}\ntags: ${tags.length} (${total} characters)${m.chapters ? `\nchapters: ${m.chapters.length}` : ''}`);
for (const n of notes) console.log(`  note     ${n}`);
for (const p of problems) console.log(`  PROBLEM  ${p}`);
process.exit(problems.length ? 1 : 0);
