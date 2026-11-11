#!/usr/bin/env node
// Renders a project into one finished MP4: every scene in the chosen style with its voice-over,
// stock clips where the script asks for them, the music bed under the voice, -14 LUFS for YouTube.
//
//   node tools/render.mjs --project projects/my-video            full quality
//   node tools/render.mjs --project projects/my-video --preview  quick low-res check
//   node tools/render.mjs --project projects/my-video --only 004 one scene again
//
// Reads projects/<x>/script.json (see CLAUDE.md for the format) and voice/<id>.mp3 + .words.json.
// Writes scenes/<id>.html and .mp4, then final.mp4 (or preview.mp4).
import { spawn, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { cpus } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { values: a } = parseArgs({
  options: {
    project: { type: 'string' },
    preview: { type: 'boolean', default: false },
    only: { type: 'string' },
    jobs: { type: 'string', default: String(Math.max(1, Math.min(4, Math.floor(cpus().length / 2)))) },
    'no-assemble': { type: 'boolean', default: false },
    keep: { type: 'boolean', default: false },
  },
});
if (!a.project) {
  console.error('Usage: node tools/render.mjs --project projects/<name> [--preview] [--only <scene id>]');
  process.exit(1);
}
const P = resolve(a.project);
const script = JSON.parse(readFileSync(join(P, 'script.json'), 'utf8'));
const style = script.style;
// Styles live in .claude/skills/<style>/engine (this folder), or beside this agent when it runs
// inside the plugin (skills/<style>/engine), or wherever YTA_STYLES points.
const STYLE_ROOTS = [process.env.YTA_STYLES, join(ROOT, '.claude', 'skills'), resolve(ROOT, '..', '..'), resolve(ROOT, '..')].filter(Boolean);
const styleDirOf = (name) => {
  for (const r of STYLE_ROOTS) if (existsSync(join(r, name, 'engine', 'engine.js'))) return join(r, name, 'engine');
  throw new Error(`Unknown style "${name}". Styles live in .claude/skills/<style>/engine.`);
};
// One style for the whole video; a scene may name its own with "style" (long films mix styles).
for (const s of script.scenes) if (!s.stock) styleDirOf(s.style || style);

const SIZES = { '16:9': [1920, 1080], '9:16': [1080, 1920], '1:1': [1080, 1080] };
let [W, H] = SIZES[script.aspect || '16:9'] || SIZES['16:9'];
if (a.preview) [W, H] = [W / 2, H / 2];
const FPS = a.preview ? 24 : 30;
const sceneDir = join(P, a.preview ? 'preview-scenes' : 'scenes');
mkdirSync(sceneDir, { recursive: true });

const duration = (f) => Number(spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f], { encoding: 'utf8' }).stdout.trim());
const run = (cmd, args, timeoutMs = 0) => new Promise((ok, bad) => {
  const p = spawn(cmd, args, { stdio: ['ignore', 'ignore', 'pipe'], detached: true });
  let err = '';
  // A scene render can freeze in the browser: stop it after a time limit so it can be tried again.
  const timer = timeoutMs ? setTimeout(() => { try { process.kill(-p.pid, 'SIGKILL'); } catch {} bad(new Error(`${args[0]} timed out`)); }, timeoutMs) : null;
  p.stderr.on('data', (d) => (err += d));
  p.on('close', (c) => { if (timer) clearTimeout(timer); c === 0 ? ok() : bad(new Error(`${args[0]} failed: ${err.slice(-800)}`)); });
});

async function renderOne(s, i) {
  const id = s.id;
  const audio = join(P, 'voice', `${id}.mp3`);
  const words = join(P, 'voice', `${id}.words.json`);
  const hasAudio = existsSync(audio);
  // The scene lasts as long as its voice-over plus a short breath, or what the script says.
  const dur = (s.duration || (hasAudio ? duration(audio) + 0.35 : 4)).toFixed(2);
  const out = join(sceneDir, `${String(i + 1).padStart(3, '0')}-${id}.mp4`);
  if (a.keep && existsSync(out)) return console.log(`  ${id} kept`);
  const styleDir = s.stock ? '' : styleDirOf(s.style || style);
  if (s.stock) {
    await run('node', [join(ROOT, 'tools', 'stock-scene.mjs'), '--clip', resolve(P, s.stock), ...(hasAudio ? ['--audio', audio] : []), '--duration', dur, '--width', String(W), '--height', String(H), '--fps', String(FPS), '--out', out]);
  } else {
    const html = join(sceneDir, `${id}.html`);
    const build = ['--style', styleDir, '--duration', dur, '--width', String(W), '--height', String(H), '--narration', s.narration || '', '--out', html, '--seed', String(i + 1)];
    if (existsSync(words)) build.push('--words', words);
    if (s.template) {
      const props = join(sceneDir, `${id}.props.json`);
      writeFileSync(props, JSON.stringify(s.props || {}));
      build.push('--template', s.template, '--props', props);
    } else if (s.code) build.push('--code', resolve(P, s.code));
    else throw new Error(`Scene ${id} needs "template" + "props", "code" or "stock".`);
    await run('node', [join(ROOT, 'core', 'build-scene.mjs'), ...build]);
    const rargs = [join(ROOT, 'core', 'render-scene.mjs'), '--html', html, ...(hasAudio ? ['--audio', audio] : []), '--duration', dur, '--width', String(W), '--height', String(H), '--fps', String(FPS), '--out', out];
    for (let attempt = 1; ; attempt++) {
      try { await run('node', rargs, (90 + Number(dur) * 30) * 1000); break; } catch (e) {
        if (existsSync(out)) rmSync(out);
        if (attempt >= 3) throw e;
        console.log(`  ${id} retry ${attempt} (${e.message.slice(0, 60)})`);
      }
    }
  }
  console.log(`  ${id} ${s.stock ? 'stock' : `${s.style || style}/${s.template || 'custom'}`} ${dur}s`);
}

const scenes = script.scenes.map((s, i) => ({ s, i })).filter(({ s }) => !a.only || s.id === a.only);
if (!a.only && !a.keep) for (const f of spawnSync('ls', [sceneDir], { encoding: 'utf8' }).stdout.split('\n')) if (f.endsWith('.mp4')) rmSync(join(sceneDir, f));
console.log(`Rendering ${scenes.length} scene(s) in "${style}" at ${W}x${H} ${FPS}fps, ${a.jobs} at a time…`);
let next = 0;
const failed = [];
await Promise.all(Array.from({ length: Number(a.jobs) }, async () => {
  while (next < scenes.length) {
    const { s, i } = scenes[next++];
    await renderOne(s, i).catch((e) => failed.push(`${s.id}: ${e.message}`));
  }
}));
if (failed.length) {
  console.error(`\n${failed.length} scene(s) failed:\n${failed.join('\n')}`);
  process.exit(1);
}
if (a['no-assemble'] || a.only) process.exit(0);

const out = join(P, a.preview ? 'preview.mp4' : 'final.mp4');
const music = script.music ? resolve(P, script.music) : '';
const args = [join(ROOT, 'core', 'assemble.sh'), sceneDir, out];
if (music && existsSync(music)) args.push(music, String(script.musicVolume ?? 0.15));
const r = spawnSync('bash', args, { stdio: 'inherit' });
if (r.status !== 0) process.exit(r.status || 1);

// Chapter times for the description, from the scenes that start a chapter.
let t = 0;
const chapters = [];
for (const [i, s] of script.scenes.entries()) {
  if (s.chapter) chapters.push(`${new Date(Math.round(t) * 1000).toISOString().slice(t >= 3600 ? 11 : 14, 19)} ${s.chapter}`);
  t += duration(join(sceneDir, `${String(i + 1).padStart(3, '0')}-${s.id}.mp4`));
}
if (chapters.length) writeFileSync(join(P, 'chapters.txt'), chapters.join('\n') + '\n');
console.log(`\n${out}  ${duration(out).toFixed(1)}s${chapters.length ? `\nchapters.txt has ${chapters.length} chapter times for the description.` : ''}`);
