// usage: node render.mjs <out.mp4> [--frames 0.5,3.5,...] [--dir <pngdir>]
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const FPS = 30, DUR = Number(process.env.DUR || 10);
const out = process.argv[2];
const fi = process.argv.indexOf('--frames');
const stills = fi > 0 ? process.argv[fi + 1].split(',').map(Number) : null;
const di = process.argv.indexOf('--dir');
const stillDir = di > 0 ? process.argv[di + 1] : '.';

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]) === '/' ? 'index.html' : decodeURIComponent(req.url.split('?')[0]));
  fs.readFile(p, (e, b) => { if (e) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'content-type': MIME[path.extname(p)] || 'application/octet-stream' }); res.end(b); } });
}).listen(0, '127.0.0.1');
await new Promise((r) => server.once('listening', r));

const CHROME = process.env.CHROME_PATH || { darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', linux: '/usr/bin/google-chrome', win32: 'C:/Program Files/Google/Chrome/Application/chrome.exe' }[process.platform];
const GL = process.platform === 'darwin' ? ['--use-angle=metal', '--enable-gpu'] : process.platform === 'linux' ? ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] : ['--enable-gpu'];
const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: [...GL, '--ignore-gpu-blocklist', '--enable-webgl', '--hide-scrollbars'] });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
const errs = [];
page.on('pageerror', (e) => errs.push(String(e))); page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
await page.goto(`http://127.0.0.1:${server.address().port}/`);
try { await page.waitForFunction('window.ready===true', { timeout: 60000 }); }
catch (e) { console.log('NOT READY', errs.slice(0, 5).join('\n')); process.exit(1); }
const gl = await page.evaluate(() => { const c = document.createElement('canvas').getContext('webgl2'); const d = c.getExtension('WEBGL_debug_renderer_info'); return d ? c.getParameter(d.UNMASKED_RENDERER_WEBGL) : 'unknown'; });
console.log('GL:', gl);

if (stills) {
  for (const t of stills) {
    const s = Date.now();
    await page.evaluate((x) => window.renderAt(x), t);
    await page.screenshot({ path: path.join(stillDir, `t${t.toFixed(2)}.jpg`), type: 'jpeg', quality: 88 });
    console.log('t', t, Date.now() - s, 'ms');
  }
} else {
  const ff = spawn('ffmpeg', ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '17', '-pix_fmt', 'yuv420p', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const N = FPS * DUR, t0 = Date.now();
  for (let f = 0; f < N; f++) {
    await page.evaluate((x) => window.renderAt(x), f / FPS);
    const buf = await page.screenshot({ type: 'jpeg', quality: 96 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
    if (f % 60 === 0) console.log(f, '/', N, Math.round((Date.now() - t0) / 1000) + 's');
  }
  ff.stdin.end();
  await new Promise((r) => ff.on('close', r));
  console.log('DONE', N, 'frames', Math.round((Date.now() - t0) / 1000) + 's');
}
if (errs.length) console.log('PAGE ERRORS:', errs.slice(0, 5).join('\n'));
await browser.close(); server.close();
