#!/usr/bin/env node
// TikTok lesson reel: branded CreatorMotion checklist + narration + EN/AR subtitles, 9:16 4K.
// Usage: node .claude/skills/tiktok-lesson-reel/build.js <reel.json> <out-dir> [--res 4k|1080p]
'use strict';
const fs = require('fs'), path = require('path'), cp = require('child_process');
const [cfgPath, outArg] = process.argv.slice(2).filter(a => !a.startsWith('--'));
const RES = (process.argv.find(a => a.startsWith('--res=')) || '--res=4k').split('=')[1];
if (!cfgPath || !outArg) { console.error('usage: build.js <reel.json> <out-dir> [--res=4k|1080p]'); process.exit(1); }
const ROOT = path.resolve(__dirname, '../../..');
const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
const OUT = path.resolve(outArg); fs.mkdirSync(path.join(OUT, 'vo'), { recursive: true }); fs.mkdirSync(path.join(OUT, 'cards'), { recursive: true });
const sh = (cmd, args, opt = {}) => cp.execFileSync(cmd, args, { stdio: ['ignore', 'pipe', 'inherit'], ...opt }).toString();
const dur = f => parseFloat(sh('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]));
const step = m => console.log(`\n== ${m}`);
if (cfg.lines.length !== 5 || cfg.tasks.length !== 3) throw new Error('reel.json needs 5 lines (intro, 3 steps, outro) and 3 tasks');

// 1. Fonts: site fonts + Cairo for Arabic (npm, no Google Fonts host needed).
step('fonts');
const FONTS = path.join(OUT, 'fonts'); fs.mkdirSync(FONTS, { recursive: true });
for (const f of ['fraunces-latin.woff2', 'inter-latin.woff2']) fs.copyFileSync(path.join(ROOT, 'assets/fonts', f), path.join(FONTS, f));
if (!fs.existsSync(path.join(FONTS, 'cairo-arabic-700-normal.woff2'))) {
  sh('npm', ['pack', '@fontsource/cairo@5.1.0', '-q', '--pack-destination', FONTS]);
  sh('tar', ['xzf', path.join(FONTS, 'fontsource-cairo-5.1.0.tgz'), '-C', FONTS]);
  for (const f of ['cairo-arabic-700-normal.woff2', 'cairo-latin-700-normal.woff2']) fs.copyFileSync(path.join(FONTS, 'package/files', f), path.join(FONTS, f));
}

// 2. Narration: Kokoro bf_isabella (standing decision), Gemini TTS only as a fallback.
step('narration');
const kokoro = (text, wav) => sh('python3', ['-c', `import sys,soundfile as sf,numpy as np
from kokoro import KPipeline
p=KPipeline(lang_code='b');a=[x for _,_,x in p(sys.argv[1],voice='bf_isabella',speed=0.92)]
sf.write(sys.argv[2],np.concatenate(a),24000)`, text, wav]);
const gemini = (text, wav) => sh('python3', ['-I', path.join(__dirname, 'gemini_tts.py'), text, wav]);
let voice = cfg.voice || 'kokoro';
const VOICE_LOG = path.join(OUT, 'vo/voice.txt');
const cached = fs.existsSync(path.join(OUT, 'vo/l0.wav'));
cfg.lines.forEach((l, i) => {
  const raw = path.join(OUT, `vo/l${i}.wav`), trimmed = path.join(OUT, `vo/t${i}.wav`);
  if (!fs.existsSync(raw)) {
    if (voice === 'kokoro') { try { kokoro(l.en, raw); } catch (e) { console.warn('Kokoro unavailable, falling back to Gemini TTS'); voice = 'gemini'; } }
    if (voice === 'gemini') gemini(l.en, raw);
  }
  sh('ffmpeg', ['-loglevel', 'error', '-y', '-i', raw, '-af', 'silenceremove=start_periods=1:start_threshold=-40dB,areverse,silenceremove=start_periods=1:start_threshold=-40dB,areverse,aresample=48000', '-ac', '2', trimmed]);
});
if (cached) voice = fs.existsSync(VOICE_LOG) ? fs.readFileSync(VOICE_LOG, 'utf8').trim() : 'unknown (narration files were supplied)';
else fs.writeFileSync(VOICE_LOG, voice + '\n');
const T = cfg.lines.map((_, i) => dur(path.join(OUT, `vo/t${i}.wav`)));
console.log('voice', voice, 'durations', T.map(x => x.toFixed(2)).join(' '));

// 3. Phone screenshot of the lesson.
step('lesson screenshot');
const { chromium } = require('playwright');
const shot = path.join(OUT, 'lesson-phone.png');

// 4. Checklist effect (Skillry CreatorMotion, bundled in the film-studio plugin skill), in the library's colours.
const effectDir = () => {
  const base = path.join(process.env.HOME, '.claude/plugins');
  const hit = sh('bash', ['-c', `ls -d ${base}/*/*/mastering-video-studio*/skills/film-studio/extras/bs-creatormotion-cards-action-checklist ${base}/*/mastering-video-studio*/skills/film-studio/extras/bs-creatormotion-cards-action-checklist 2>/dev/null | head -1`]).trim();
  if (!hit) throw new Error('bs-creatormotion-cards-action-checklist not found: install the mastering-video-studio plugin');
  return hit;
};

// 5. Cards: intro, outro and subtitles. English and Arabic subtitles sit in separate boxes (standing decision).
const css = `@font-face{font-family:Fraunces;src:url(fonts/fraunces-latin.woff2)}@font-face{font-family:Inter;src:url(fonts/inter-latin.woff2)}
@font-face{font-family:Cairo;font-weight:700;src:url(fonts/cairo-arabic-700-normal.woff2);unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}
@font-face{font-family:Cairo;font-weight:700;src:url(fonts/cairo-latin-700-normal.woff2);unicode-range:U+0000-00FF,U+2000-206F}
*{box-sizing:border-box;margin:0}html,body{width:1080px;height:1920px;background:transparent;font-family:Inter,sans-serif;color:#16163a}
.bg{position:absolute;inset:0;background:linear-gradient(90deg,rgba(22,22,58,.075) 1.5px,transparent 1.5px) center/240px 240px,linear-gradient(rgba(22,22,58,.075) 1.5px,transparent 1.5px) center/240px 240px,linear-gradient(90deg,rgba(22,22,58,.045) 1px,transparent 1px) center/60px 60px,linear-gradient(rgba(22,22,58,.045) 1px,transparent 1px) center/60px 60px,#f7f6f2}
.logo{position:absolute;left:84px;top:200px;display:flex;align-items:center;gap:22px;font:600 40px Inter}.logo b{background:#3b3b98;color:#fff;border-radius:18px;width:84px;height:84px;display:grid;place-items:center;font-size:34px}
.wrap{position:absolute;left:84px;right:150px;top:470px}.chips{display:flex;gap:16px;margin-bottom:44px}.chip{font:600 34px Inter;padding:10px 26px;border-radius:40px;border:2px solid #e4e2da;background:#fff}.chip.lv{background:#0b6e70;color:#fff;border-color:#0b6e70}
h1{font:400 120px/1.04 Fraunces;letter-spacing:-.02em}.arl{font:700 44px/1.6 Cairo;direction:rtl;text-align:right;margin-top:50px;color:#4a4a6a}
.amber{display:inline-block;background:#e8a33d;color:#16163a;font:600 50px Inter;padding:30px 56px;border-radius:70px;margin-top:60px}
.e{white-space:nowrap;unicode-bidi:isolate}
.subs{position:absolute;left:60px;right:150px;top:1440px;display:flex;flex-direction:column;gap:16px}
.box{background:rgba(22,22,58,.92);border-radius:30px;padding:22px 34px;text-align:center}
.box.en{color:#fff;font:600 40px/1.3 Inter}.box.ar{color:#f6d79b;font:700 42px/1.55 Cairo;direction:rtl}`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const ltr = s => esc(s).replace(/([A-Za-z][A-Za-z0-9'’ .+-]*[A-Za-z0-9])|([A-Za-z])/g, m => `<span class=e dir=ltr>${m}</span>`);
const logo = `<div class=bg></div><div class=logo><b>ME</b>Mastering English</div>`;
const pages = {
  intro_bg: logo, outro_bg: logo,
  intro_fg: `<div class=wrap><div class=chips><span class="chip lv">${esc(cfg.level)}</span><span class=chip>${esc(cfg.skill)}</span></div><h1>${esc(cfg.title)}</h1><p class=arl dir=rtl>${ltr(cfg.arTitle)}</p></div>`,
  outro_fg: `<div class=wrap><div class=chips><span class="chip lv">${esc(cfg.level)}</span><span class=chip>Free lesson</span></div><h1>Free lesson + PDF</h1><p style="font:400 46px/1.4 Inter;color:#4a4a6a;margin-top:34px">${esc(cfg.title)}</p><span class=amber>${esc(cfg.cta || 'Link in bio')}</span><p class=arl dir=rtl>${ltr(cfg.arCta || 'الدرس وملف PDF مجاناً، الرابط في البايو')}</p></div>`,
};
cfg.lines.forEach((l, i) => { pages['sub' + i] = `<div class=subs><p class="box en">${esc(l.en)}</p><p class="box ar" dir=rtl>${ltr(l.ar)}</p></div>`; });

(async () => {
  step('screenshot + cards');
  const b = await chromium.launch();
  const ph = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3 });
  await ph.goto('file://' + path.join(ROOT, cfg.lesson)); await ph.waitForTimeout(800); await ph.screenshot({ path: shot });
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: RES === '4k' ? 2 : 1 });
  for (const [n, h] of Object.entries(pages)) {
    fs.writeFileSync(path.join(OUT, 'card.html'), `<!doctype html><meta charset=utf-8><style>${css}</style>${h}`);
    await p.goto('file://' + path.join(OUT, 'card.html')); await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(OUT, `cards/${n}.png`), omitBackground: true });
  }
  await b.close();

  step('checklist effect');
  const brand = { bg: '#f7f6f2', surface: '#ffffff', ink: '#16163a', muted: '#4a4a6a', accent: '#e8a33d', 'accent-ink': '#16163a', rule: '#e4e2da', grid: 'rgba(22,22,58,.045)', 'grid-major': 'rgba(22,22,58,.075)', 'glass-edge': 'rgba(22,22,58,.07)', 'glass-shadow': '0 30px 70px -28px rgba(22,22,58,.25)' };
  fs.writeFileSync(path.join(OUT, 'brand.json'), JSON.stringify(brand));
  fs.writeFileSync(path.join(OUT, 'content.json'), JSON.stringify({ tasks: cfg.tasks.map((label, i) => ({ label, at: [1.4, 3.1, 4.8][i] })), screenTitle: cfg.title, presenter: false, screenMediaKey: 'screen-recording' }));
  fs.writeFileSync(path.join(OUT, 'images.json'), JSON.stringify({ 'screen-recording': 'lesson-phone.png' }));
  sh('node', ['scripts/create.mjs', '--out', path.join(OUT, 'effect'), '--style', 'white-yellow', '--overrides', path.join(OUT, 'brand.json'), '--font', path.join(FONTS, 'fraunces-latin.woff2'), '--data', path.join(OUT, 'content.json'), '--images', path.join(OUT, 'images.json'), '--aspect', '9:16', '--resolution', RES], { cwd: effectDir() });
  const E = path.join(OUT, 'effect.mp4');
  sh('npx', ['--yes', 'hyperframes@0.8.30', 'render', path.join(OUT, 'effect'), '--fps', '30', '--quality', 'high', '--strict', '--output', E]);

  step('segments');
  const FR = 'fps=30,format=yuv420p,setsar=1', X = ['-c:v', 'libx264', '-crf', '16', '-preset', 'medium'];
  const card = (name, len, out) => sh('ffmpeg', ['-loglevel', 'error', '-y', '-loop', '1', '-t', len, '-i', `cards/${name}_bg.png`, '-loop', '1', '-t', len, '-i', `cards/${name}_fg.png`, '-filter_complex', `[1]format=rgba,fade=in:st=0.15:d=0.5:alpha=1[f];[0][f]overlay=x=0:y='if(lt(t,0.15),140,max(0,140*(1-(t-0.15)/0.55)))',${FR}`, ...X, out], { cwd: OUT });
  const seg = (a, z, freeze, out) => sh('ffmpeg', ['-loglevel', 'error', '-y', '-ss', a, '-to', z, '-i', E, '-vf', `tpad=stop_mode=clone:stop_duration=${Math.max(0, freeze).toFixed(3)},${FR}`, '-an', ...X, out], { cwd: OUT });
  card('intro', (0.4 + T[0] + 0.6).toFixed(3), 's0.mp4');
  seg('0', '1.4', 0.3 + T[1] + 0.25 - 1.4, 's1.mp4');   // ticks land as each line ends
  seg('1.4', '3.1', 0.5 + T[2] + 0.3 - 1.7, 's2.mp4');
  seg('3.1', '4.8', 0.5 + T[3] + 0.3 - 1.7, 's3.mp4');
  seg('4.8', '6.8', 0, 's4.mp4');
  card('outro', (0.3 + T[4] + 1.4).toFixed(3), 's5.mp4');
  fs.writeFileSync(path.join(OUT, 'list.txt'), [0, 1, 2, 3, 4, 5].map(i => `file 's${i}.mp4'`).join('\n'));
  sh('ffmpeg', ['-loglevel', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', 'list.txt', '-c', 'copy', 'body.mp4'], { cwd: OUT });

  step('subtitles + audio');
  const st = [0]; for (let i = 0; i < 5; i++) st.push(st[i] + dur(path.join(OUT, `s${i}.mp4`)));
  const VO = [0.4, st[1] + 0.3, st[2] + 0.5, st[3] + 0.5, st[5] + 0.3];
  let fc = ''; VO.forEach((v, i) => { fc += `[${i + 1}:v]format=rgba,fade=in:st=${v.toFixed(3)}:d=0.15:alpha=1,fade=out:st=${(v + T[i] + 0.25).toFixed(3)}:d=0.15:alpha=1[u${i}];`; });
  fc += '[0:v][u0]overlay[v0];[v0][u1]overlay[v1];[v1][u2]overlay[v2];[v2][u3]overlay[v3];[v3][u4]overlay,format=yuv420p[v];';
  VO.forEach((v, i) => { const ms = Math.round(v * 1000); fc += `[${i + 6}:a]adelay=${ms}|${ms}[a${i}];`; });
  fc += '[a0][a1][a2][a3][a4]amix=inputs=5:normalize=0,loudnorm=I=-16:TP=-1.5:LRA=11,aresample=48000,apad[a]';
  const total = dur(path.join(OUT, 'body.mp4')).toFixed(3);
  const ins = []; for (let i = 0; i < 5; i++) ins.push('-loop', '1', '-t', total, '-i', `cards/sub${i}.png`);
  for (let i = 0; i < 5; i++) ins.push('-i', `vo/t${i}.wav`);
  const final = path.join(OUT, `${cfg.slug}-tiktok-${RES}.mp4`);
  sh('ffmpeg', ['-loglevel', 'error', '-y', '-i', 'body.mp4', ...ins, '-filter_complex', fc, '-map', '[v]', '-map', '[a]', '-t', total, '-c:v', 'libx264', '-crf', '18', '-preset', 'slow', '-profile:v', 'high', '-r', '30', '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart', final], { cwd: OUT });
  for (const [i, t] of [2.5, VO[1] + 2, VO[2] + 2, VO[3] + 2, st[4] + 1, st[5] + 2].entries())
    sh('ffmpeg', ['-loglevel', 'error', '-y', '-ss', t.toFixed(2), '-i', final, '-frames:v', '1', '-vf', 'scale=300:-1', `qa${i}.png`], { cwd: OUT });
  sh('ffmpeg', ['-loglevel', 'error', '-y', ...[0, 1, 2, 3, 4, 5].flatMap(i => ['-i', `qa${i}.png`]), '-filter_complex', 'hstack=6', 'qa.png'], { cwd: OUT });
  console.log(`\nDONE ${final} (${total}s, voice: ${voice})\nQA strip: ${path.join(OUT, 'qa.png')}`);
})().catch(e => { console.error(e); process.exit(1); });
