// Renders one scene page to one MP4, frame by frame. It seeks the page to each frame's time,
// takes a screenshot and pipes it to ffmpeg, so a slow machine still gets every frame.
//
//   node core/render-scene.mjs --html scenes/001.html --audio scenes/001.mp3 \
//     --duration 12.4 --out scenes/001.mp4
//
// No --audio gives a silent track. Every scene gets the same codec settings, so the assemble
// step can join them without encoding the video again.
import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { parseArgs } from 'node:util';
import { chromium } from 'playwright';

const { values: a } = parseArgs({
  options: {
    html: { type: 'string' },
    audio: { type: 'string' },
    out: { type: 'string' },
    duration: { type: 'string' },
    width: { type: 'string', default: '1920' },
    height: { type: 'string', default: '1080' },
    fps: { type: 'string', default: '30' },
    crf: { type: 'string', default: '20' },
    preset: { type: 'string', default: 'veryfast' },
  },
});
if (!a.html || !a.out || !a.duration) {
  console.error('Need --html, --out and --duration');
  process.exit(1);
}

const fps = Number(a.fps);
const width = Number(a.width);
const height = Number(a.height);
// Rounds up to the next whole frame, so the end of the voice is never cut.
const frames = Math.max(1, Math.ceil(Number(a.duration) * fps - 1e-6));
const seconds = (frames / fps).toFixed(6);
const samples = Math.round((frames / fps) * 48000);

const audioIn = a.audio ? ['-i', a.audio] : ['-f', 'lavfi', '-i', 'anullsrc=r=48000:cl=stereo'];
const audioFilter = a.audio
  ? `[1:a]aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo,apad=whole_len=${samples},atrim=end_sample=${samples},asetpts=N/SR/TB[a]`
  : `[1:a]atrim=end_sample=${samples},asetpts=N/SR/TB[a]`;

const ffmpeg = spawn('ffmpeg', [
  '-hide_banner', '-loglevel', 'error', '-y',
  '-f', 'image2pipe', '-c:v', 'mjpeg', '-framerate', String(fps), '-i', 'pipe:0',
  ...audioIn,
  '-filter_complex', audioFilter,
  '-map', '0:v', '-map', '[a]',
  '-c:v', 'libx264', '-preset', a.preset, '-crf', a.crf, '-profile:v', 'high', '-pix_fmt', 'yuv420p',
  '-r', String(fps), '-g', String(fps * 2), '-video_track_timescale', '90000',
  '-c:a', 'aac', '-b:a', '192k', '-ar', '48000', '-ac', '2',
  '-t', seconds, '-movflags', '+faststart',
  a.out,
], { stdio: ['pipe', 'inherit', 'inherit'] });
const encoderDone = new Promise((resolve, reject) => {
  ffmpeg.on('error', reject);
  ffmpeg.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg exited with ${code}`))));
});

const browser = await chromium.launch();
try {
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
  // A scene may not touch the network. Anything it asks for is blocked and reported.
  await context.route('**/*', (route) => {
    console.warn(`blocked: ${route.request().url().slice(0, 120)}`);
    return route.abort('blockedbyclient');
  });
  const page = await context.newPage();
  page.on('pageerror', (e) => console.warn(`page error: ${e.message}`));
  await page.setContent(readFileSync(a.html, 'utf8'), { waitUntil: 'load' });
  await page.evaluate(() => window.__scene.ready);
  const cdp = await context.newCDPSession(page);

  for (let i = 0; i < frames; i++) {
    const r = await cdp.send('Runtime.evaluate', { expression: `window.__scene.seek(${i / fps})` });
    if (r.exceptionDetails) throw new Error(`seek(${i / fps}) failed: ${r.exceptionDetails.text}`);
    const shot = await cdp.send('Page.captureScreenshot', { format: 'jpeg', quality: 90, fromSurface: true, optimizeForSpeed: true });
    const jpg = Buffer.from(shot.data, 'base64');
    if (!ffmpeg.stdin.write(jpg)) await new Promise((res) => ffmpeg.stdin.once('drain', res));
  }
  const errors = await page.evaluate(() => window.__scene.errors || []);
  if (errors.length) console.warn(`scene errors: ${JSON.stringify(errors).slice(0, 800)}`);
} finally {
  ffmpeg.stdin.end();
  await browser.close();
}
await encoderDone;
console.log(`rendered ${a.out}: ${frames} frames, ${seconds} s`);
