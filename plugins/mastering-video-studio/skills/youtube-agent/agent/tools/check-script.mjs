#!/usr/bin/env node
// Checks projects/<x>/script.json before any voice or render time is spent.
// Errors stop the video; warnings are for you to read and decide.
//
//   node tools/check-script.mjs --project projects/my-video
//
// It checks: every scene has an id, narration and one of template+props / code / stock; props match
// the template's schema exactly; custom scene code uses no forbidden API (timers, network, eval...);
// no template three times in a row; scene length 4 to 12 seconds; the hook; chapters; Arabic lines
// ("ar") when subtitles are on; and the total length against the plan for that length.
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { values: a } = parseArgs({ options: { project: { type: 'string' } } });
if (!a.project) { console.error('Usage: node tools/check-script.mjs --project projects/<name>'); process.exit(1); }
const P = resolve(a.project);
const script = JSON.parse(readFileSync(join(P, 'script.json'), 'utf8'));
const errors = [], warns = [];
const CPS = 15; // about 15 narration characters a second

const STYLE_ROOTS = [process.env.YTA_STYLES, join(ROOT, '.claude', 'skills'), resolve(ROOT, '..', '..'), resolve(ROOT, '..')].filter(Boolean);
const cache = {};
function templates(style) {
  if (cache[style] !== undefined) return cache[style];
  for (const r of STYLE_ROOTS) {
    const f = join(r, style, 'reference', 'templates.json');
    if (existsSync(f)) return (cache[style] = Object.fromEntries(JSON.parse(readFileSync(f, 'utf8')).map((t) => [t.id, t])));
  }
  return (cache[style] = null);
}
function validate(v, s, path, out) {
  if (!s) return;
  const t = s.type;
  const is = (x) => x === 'array' ? Array.isArray(v) : x === 'integer' ? Number.isInteger(v) : x === 'number' ? typeof v === 'number' : x === 'object' ? v && typeof v === 'object' && !Array.isArray(v) : x === 'null' ? v === null : typeof v === x;
  if (t && !(Array.isArray(t) ? t.some(is) : is(t))) return out.push(`${path || 'props'}: must be ${t}`);
  if (s.enum && !s.enum.includes(v)) out.push(`${path}: "${v}" is not allowed. Use one of: ${s.enum.join(', ')}`);
  if (s.properties && v && typeof v === 'object' && !Array.isArray(v)) {
    for (const k of s.required || []) if (!(k in v)) out.push(`${path ? path + '.' : ''}${k}: missing (required)`);
    for (const [k, val] of Object.entries(v)) {
      if (s.properties[k]) validate(val, s.properties[k], `${path ? path + '.' : ''}${k}`, out);
      else if (s.additionalProperties === false) out.push(`${path ? path + '.' : ''}${k}: not a prop of this template`);
    }
  }
  if (s.items && Array.isArray(v)) v.forEach((x, i) => validate(x, s.items, `${path}[${i}]`, out));
}
const FORBIDDEN = [
  [/\bfetch\s*\(|\bXMLHttpRequest\b|\bWebSocket\b|\bEventSource\b|\bsendBeacon\b/, 'network access'],
  [/\bimport\s*\(|(^|[;{}\s])import\b\s*[\w{*"'`]|\brequire\s*\(/, 'imports'],
  [/\bsetTimeout\b|\bsetInterval\b|\brequestAnimationFrame\b|\bqueueMicrotask\b/, 'timers (use V.timeline() or V.onFrame)'],
  [/\beval\s*\(|\bnew\s+Function\b/, 'eval / Function'],
  [/\bDate\.now\b|\bnew\s+Date\b|\bperformance\.now\b/, 'the real clock'],
  [/\bMath\.random\b/, 'Math.random (use V.rand())'],
  [/\b(localStorage|sessionStorage|indexedDB)\b|document\s*\.\s*cookie/, 'storage'],
  [/<\s*(script|iframe|object|embed|link)\b/i, 'script/iframe/link elements'],
  [/url\(\s*['"]?\s*(https?:)?\/\//i, 'external url(...)'],
  [/\b(src|href)\s*=\s*['"]?\s*(https?:)?\/\//i, 'external src/href'],
  [/\bwhile\s*\(\s*(true|1)\s*\)|\bfor\s*\(\s*;\s*;\s*\)/, 'unbounded loops'],
];

if (!script.title) errors.push('script.json needs "title"');
if (!script.style) errors.push('script.json needs "style"');
if (!Array.isArray(script.scenes) || !script.scenes.length) { console.error('script.json needs "scenes"'); process.exit(1); }
const subs = script.subtitles !== false && (script.subtitles?.ar ?? true);
const ids = new Set();
let chars = 0, run = 0, prev = '', stock = 0;
const chapters = [];
script.scenes.forEach((s, i) => {
  const at = `scene ${s.id || i + 1}`;
  if (!s.id) errors.push(`${at}: needs "id"`);
  if (ids.has(s.id)) errors.push(`${at}: id used twice`);
  ids.add(s.id);
  const n = (s.narration || '').trim();
  if (!n) errors.push(`${at}: needs "narration"`);
  chars += n.length;
  const sec = n.length / CPS;
  if (n && sec < 3) warns.push(`${at}: about ${sec.toFixed(0)} s. Scenes work best at 4 to 12 seconds`);
  if (sec > 16) warns.push(`${at}: about ${sec.toFixed(0)} s. Split it (4 to 12 seconds a scene)`);
  if (/[<>{}\[\]*_#]|https?:/.test(n)) errors.push(`${at}: narration has symbols or a link. Only words the voice should say`);
  if (subs && !s.ar) errors.push(`${at}: needs "ar" (the Arabic subtitle for this scene)`);
  if (s.chapter) chapters.push({ title: s.chapter, at: chars - n.length });
  const style = s.style || script.style;
  const kinds = ['template', 'code', 'stock'].filter((k) => s[k]);
  if (kinds.length !== 1) errors.push(`${at}: needs exactly one of "template" + "props", "code" or "stock"`);
  if (s.stock) { stock++; if (!existsSync(resolve(P, s.stock))) errors.push(`${at}: stock clip not found: ${s.stock}`); }
  if (s.code) {
    const f = resolve(P, s.code);
    if (!existsSync(f)) errors.push(`${at}: code file not found: ${s.code}`);
    else {
      const src = readFileSync(f, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');
      for (const [re, what] of FORBIDDEN) if (re.test(src)) errors.push(`${at}: custom code uses ${what}. Everything must be a pure function of time`);
    }
  }
  if (s.template) {
    const T = templates(style);
    if (!T) errors.push(`${at}: unknown style "${style}"`);
    else if (!T[s.template]) errors.push(`${at}: style "${style}" has no template "${s.template}". It has: ${Object.keys(T).join(', ')}`);
    else { const out = []; validate(s.props || {}, T[s.template].propsSchema, '', out); out.forEach((e) => errors.push(`${at} (${style}/${s.template}): ${e}`)); }
  }
  const key = `${style}/${s.template || s.code || 'stock'}`;
  run = key === prev ? run + 1 : 1; prev = key;
  if (run === 3 && s.template) errors.push(`${at}: template "${s.template}" three times in a row. Change one`);
});
if (!script.scenes[0].chapter) errors.push('The first scene needs "chapter" (chapters start at 00:00)');
const total = chars / CPS;
const plan = total <= 60 ? [1, 1] : total <= 180 ? [2, 3] : total <= 600 ? [3, 5] : total <= 1800 ? [5, 8] : total <= 3600 ? [8, 12] : [Math.round(total / 540) - 1, Math.round(total / 540) + 2];
if (total > 180 && chapters.length < 3) warns.push(`${chapters.length} chapter(s). YouTube shows chapters only when there are 3 or more`);
if (chapters.length < plan[0] || chapters.length > plan[1]) warns.push(`${chapters.length} chapter(s) for about ${(total / 60).toFixed(1)} min. The plan for this length is ${plan[0]} to ${plan[1]}`);
for (let i = 1; i < chapters.length; i++) if ((chapters[i].at - chapters[i - 1].at) / CPS < 10) errors.push(`chapter "${chapters[i - 1].title}" is under 10 seconds. YouTube needs 10 or more`);
for (const c of chapters) { const w = c.title.trim().split(/\s+/).length; if (w > 6) warns.push(`chapter "${c.title}": keep titles to 2 to 6 words`); }
if (stock > script.scenes.length / 5) warns.push(`${stock} stock scenes of ${script.scenes.length}. Keep stock to at most 1 scene in 5`);
const hook = script.scenes.slice(0, 2).map((s) => s.narration || '').join(' ');
if (/^(hi|hello|hey|welcome|in this video|today we)/i.test(hook.trim())) warns.push('The opening greets or announces. Start on the hook: the strongest question, claim or moment');
if (hook.length / CPS > 20) warns.push('The first two scenes run over 20 seconds. The hook should land in the first 10');
if (script.music) warns.push('This channel uses sound effects only, no music bed. Remove "music" unless the user asked for it in this video');
if ((script.title || '').length > 60) warns.push(`Title is ${script.title.length} characters. Keep it under 60`);

console.log(`${script.scenes.length} scenes, about ${(total / 60).toFixed(1)} min, ${chapters.length} chapter(s), style ${script.style}`);
for (const w of warns) console.log(`  warning  ${w}`);
for (const e of errors) console.log(`  ERROR    ${e}`);
console.log(errors.length ? `\n${errors.length} error(s) to fix before the voice step.` : '\nScript is ready for the voice step.');
process.exit(errors.length ? 1 : 0);
