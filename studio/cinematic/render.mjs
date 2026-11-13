// Render one cinematic scene to a silent 1920x1080 MP4.
// usage: node render.mjs --scene scene.json --out clip.mp4 [--fps 30] [--preview 2.5 --png still.png]
// scene.json: {"type": "rain|fog|typewriter|globe|map|word|quiz", "duration": 8, ...params}; see README.md.
import { createRequire } from 'module';
import { readFileSync } from 'fs';
// require() also honours NODE_PATH, where cloud sessions keep Playwright; a plain import does not.
const { chromium } = createRequire(import.meta.url)('playwright');
import { spawn } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const here = dirname(fileURLToPath(import.meta.url));
const arg = k => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : undefined; };
const params = JSON.parse(readFileSync(arg('scene'), 'utf8'));
const fps = Number(arg('fps') ?? 30);
const out = arg('out');
const needsLand = ['globe', 'map'].includes(params.type);
const land = needsLand ? JSON.parse(readFileSync(join(here, 'land.json'), 'utf8')) : [];
const engine = readFileSync(join(here, 'engine.js'), 'utf8');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;background:#000}canvas{display:block}
.f{position:absolute;opacity:0}</style></head><body><canvas id="c"></canvas>
<span class="f" style="font:700 20px Caladea">a</span><span class="f" style="font:italic 400 20px Caladea">a</span>
<span class="f" style="font:600 20px Inter">a</span><span class="f" style="font:800 20px Inter">a</span>
<span class="f" style="font:500 20px 'Courier 10 Pitch'">a</span><span class="f" style="font:400 20px 'DejaVu Sans'">a</span>
<script>${engine}</script></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.setContent(html);
await page.evaluate(async () => { await document.fonts.ready; for (const f of ['700 20px Caladea', 'italic 400 20px Caladea', '600 20px Inter', '800 20px Inter', "500 20px 'Courier 10 Pitch'"]) await document.fonts.load(f); });
await page.evaluate(([p, l]) => window.setup(p, l), [params, land]);

if (arg('preview')) {
  await page.evaluate(t => window.frame(t), Number(arg('preview')));
  await page.screenshot({ path: arg('png') });
  await browser.close(); process.exit(0);
}

const n = Math.round(params.duration * fps);
const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
  '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '17', '-pix_fmt', 'yuv420p', '-r', String(fps), '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
for (let i = 0; i < n; i++) {
  await page.evaluate(t => window.frame(t), i / fps);
  const buf = await page.screenshot({ type: 'jpeg', quality: 93 });
  if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
}
ff.stdin.end();
await new Promise((res, rej) => ff.on('close', c => c === 0 ? res() : rej(new Error('ffmpeg ' + c))));
await browser.close();
console.log('rendered', out, n, 'frames');
