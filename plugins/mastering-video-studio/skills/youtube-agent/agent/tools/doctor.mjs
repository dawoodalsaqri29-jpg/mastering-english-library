#!/usr/bin/env node
// Checks this computer has what the YouTube Agent needs, and which of your keys are set.
// It never prints a key: only whether it is there.
//
//   node tools/doctor.mjs
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './env.mjs';

let bad = 0;
const ok = (m) => console.log(`  ok    ${m}`);
const no = (m, fix) => (bad++, console.log(`  MISSING ${m}\n          ${fix}`));
const opt = (m, fix) => console.log(`  -     ${m} (optional) ${fix}`);

console.log('\nSoftware');
const major = Number(process.versions.node.split('.')[0]);
major >= 22 ? ok(`Node.js ${process.versions.node}`) : no(`Node.js 22 or newer (you have ${process.versions.node})`, 'Install from nodejs.org');
for (const bin of ['ffmpeg', 'ffprobe']) {
  spawnSync(bin, ['-version']).status === 0 ? ok(bin) : no(bin, 'Mac: brew install ffmpeg · Windows: winget install ffmpeg · Linux: apt install ffmpeg');
}
const isPipeline = existsSync(join(ROOT, 'pnpm-workspace.yaml'));
const pwHome = isPipeline ? join(ROOT, 'containers', 'renderer') : ROOT;
if (!existsSync(join(pwHome, 'node_modules', 'playwright'))) no('packages', isPipeline ? 'Run: pnpm install' : 'Run: npm install');
else {
  const r = spawnSync(process.execPath, ['-e', "const p=require('playwright');console.log(require('fs').existsSync(p.chromium.executablePath()))"], { cwd: pwHome, encoding: 'utf8' });
  r.stdout.trim() === 'true' ? ok('Chromium for rendering') : no('Chromium for rendering', 'Run: npx playwright install chromium   (Linux servers: npx playwright install --with-deps chromium)');
}

console.log('\nFree voice (Kokoro, Isabella)');
{
  const py = spawnSync('python3', ['-c', 'import kokoro_onnx, soundfile, numpy'], { encoding: 'utf8' });
  py.status === 0 ? ok('python3 with kokoro-onnx, soundfile, numpy') : no('kokoro-onnx', 'Run: pip install kokoro-onnx soundfile numpy');
  const dirs = [process.env.KOKORO_DIR, join(process.env.HOME || '', 'tts'), '/home/claude/tts'].filter(Boolean);
  dirs.some((d) => existsSync(join(d, 'kokoro-v1.0.onnx')) && existsSync(join(d, 'voices-v1.0.bin'))) ? ok('Kokoro model files') : no('Kokoro model files', 'Download kokoro-v1.0.onnx and voices-v1.0.bin into ~/tts (links in README.md)');
  const fc = spawnSync('fc-list', [':lang=ar'], { encoding: 'utf8' });
  (fc.stdout || '').trim() ? ok('a font with Arabic letters (for the burned-in subtitles)') : no('Arabic font', 'Install DejaVu Sans or Noto Sans Arabic');
}

console.log('\nKeys in .env (your own accounts, all optional)');
if (!existsSync(join(ROOT, '.env'))) opt('.env file', 'Only needed for the paid extras: copy .env.example to .env and fill in your own keys');
const has = (k) => !!process.env[k];
const groups = [
  ['ANTHROPIC_API_KEY', 'pipeline route only: Claude writes the script and the scenes', 'route1'],
  ['ELEVENLABS_API_KEY', 'paid voice. Not needed: the free Kokoro voice (Isabella) is the default', 'opt'],
  ['OPENAI_API_KEY', 'GPT Image 2.5 thumbnails (free way: tools/thumbnail-frame.py), and word timing for your own recording', 'opt'],
  ['ZERNIO_API_KEY', 'posting long videos to YouTube. Without it: Shorts go through Buffer, long videos are uploaded by hand', 'opt'],
  ['PEXELS_API_KEY', 'stock footage', 'opt'],
  ['PIXABAY_API_KEY', 'stock footage', 'opt'],
  ['PERPLEXITY_API_KEY', 'fact check', 'opt'],
  ['YOUTUBE_API_KEY', 'topic finder', 'opt'],
];
for (const [k, why, kind] of groups) {
  if (kind === 'route1' && !isPipeline) continue;
  if (has(k)) ok(`${k}  ${why}`);
  else if (kind === 'need' || (kind === 'route1' && !has('SIRAY_API_KEY'))) no(k, why);
  else if (kind === 'voice') opt(k, why);
  else opt(k, why);
}
console.log(bad ? `\n${bad} thing(s) to fix before the first video.\n` : '\nAll set.\n');
process.exit(bad ? 1 : 0);
