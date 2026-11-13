// Cinematic scene engine for Mastering English Library films.
// Runs in a browser page. Every frame is a pure function of time t (seconds): no timers, no randomness
// except the seeded generator below, so a scene renders the same way every time.
// window.setup(params, landRings) once, then window.frame(t) for each frame.
(() => {
  const W = 1920, H = 1080;
  const cv = document.getElementById('c'); const ctx = cv.getContext('2d');
  cv.width = W; cv.height = H;
  let P = {}, LAND = [], S = {};

  // ---------- helpers ----------
  function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const ease = x => { x = clamp(x); return x * x * (3 - 2 * x); };
  const lerp = (a, b, x) => a + (b - a) * x;
  const fadeIO = (t, a, b, f = 0.6) => ease((t - a) / f) * (1 - ease((t - (b - f)) / f));
  function mk(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
  function noise1(x, seed = 1) { const i = Math.floor(x), f = x - i; const h = n => { const r = rng(seed * 9973 + n * 7919)(); return r; }; return lerp(h(i), h(i + 1), ease(f)); }
  function hexA(hex, a) { let h = hex.replace('#', ''); if (h.length === 3) h = h.split('').map(c => c + c).join(''); const n = parseInt(h, 16); return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`; }
  function vignette(strength = 0.75) {
    const g = ctx.createRadialGradient(W / 2, H / 2, H * 0.35, W / 2, H / 2, H * 0.95);
    g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, `rgba(0,0,0,${strength})`); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  }
  function grain(t, amount = 0.05) {
    if (!S.grain) { S.grain = []; for (let k = 0; k < 6; k++) { const c = mk(480, 270), x = c.getContext('2d'), d = x.createImageData(480, 270), r = rng(77 + k);
      for (let i = 0; i < d.data.length; i += 4) { const v = r() * 255; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; } x.putImageData(d, 0, 0); S.grain.push(c); } }
    ctx.save(); ctx.globalAlpha = amount; ctx.globalCompositeOperation = 'overlay'; ctx.drawImage(S.grain[Math.floor(t * 24) % 6], 0, 0, W, H); ctx.restore();
  }
  function wrapText(text, font, maxW) {
    ctx.font = font; const words = String(text).split(/\s+/); const lines = []; let cur = '';
    for (const w of words) { const tst = cur ? cur + ' ' + w : w; if (ctx.measureText(tst).width > maxW && cur) { lines.push(cur); cur = w; } else cur = tst; }
    if (cur) lines.push(cur); return lines;
  }
  // Title text block: P.title (big), P.subtitle (small, above), P.caption (below). Fades in at P.textAt.
  function titleBlock(t, opt = {}) {
    const a0 = P.textAt ?? 0.8, end = P.duration;
    const al = fadeIO(t, a0, end + 1, 1.0);
    if (!P.title && !P.subtitle && !P.caption) return;
    const y0 = opt.y ?? H * 0.5, col = opt.color ?? '#f4ead8', acc = opt.accent ?? P.accent ?? '#e6b94f';
    ctx.save(); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.85)'; ctx.shadowBlur = 30;
    if (P.subtitle) { ctx.globalAlpha = al * 0.95; ctx.fillStyle = acc; ctx.font = '600 34px Inter'; ctx.letterSpacing = '10px'; ctx.fillText(P.subtitle.toUpperCase(), W / 2, y0 - 110); ctx.letterSpacing = '0px'; }
    if (P.title) {
      const lines = wrapText(P.title, `700 ${opt.size ?? 96}px Caladea`, W * 0.78); const lh = (opt.size ?? 96) * 1.12;
      lines.forEach((ln, i) => { const rise = (1 - ease((t - a0 - i * 0.25) / 1.2)) * 24; ctx.globalAlpha = al * ease((t - a0 - i * 0.25) / 1.0);
        ctx.fillStyle = col; ctx.font = `700 ${opt.size ?? 96}px Caladea`; ctx.fillText(ln, W / 2, y0 + (i - (lines.length - 1) / 2) * lh + rise); });
    }
    if (P.caption) { ctx.globalAlpha = al * ease((t - a0 - 0.8) / 1.0) * 0.9; ctx.fillStyle = '#d9d2c3'; ctx.font = 'italic 400 40px Caladea'; ctx.fillText(P.caption, W / 2, y0 + 120); }
    ctx.restore();
  }

  // ---------- land (Natural Earth via world-atlas) ----------
  function landCanvas(w, h, fill) { const c = mk(w, h), x = c.getContext('2d'); x.fillStyle = fill;
    for (const r of LAND) { x.beginPath(); for (let i = 0; i < r.length; i += 2) { const px = (r[i] + 180) / 360 * w, py = (90 - r[i + 1]) / 180 * h; i ? x.lineTo(px, py) : x.moveTo(px, py); } x.closePath(); x.fill(); } return c; }

  // ---------- backgrounds ----------
  function bokehLayer(seed, n, cols, blur, w = W, h = H) { const c = mk(w, h), x = c.getContext('2d'), r = rng(seed); x.filter = `blur(${blur}px)`;
    for (let i = 0; i < n; i++) { const R = 40 + r() * 150; const g = x.createRadialGradient(0, 0, 0, 0, 0, R); const col = cols[Math.floor(r() * cols.length)];
      g.addColorStop(0, hexA(col, 0.9)); g.addColorStop(0.6, hexA(col, 0.45)); g.addColorStop(1, hexA(col, 0)); x.save(); x.translate(r() * w, r() * h); x.fillStyle = g; x.beginPath(); x.arc(0, 0, R, 0, 7); x.fill(); x.restore(); }
    return c; }
  function fogLayers(seed, tint) { const L = []; for (let k = 0; k < 3; k++) { const lw = 96, lh = 54, c = mk(lw, lh), x = c.getContext('2d'), d = x.createImageData(lw, lh), r = rng(seed + k * 31);
      const g = []; for (let i = 0; i < 13 * 8; i++) g.push(r());
      for (let j = 0; j < lh; j++) for (let i = 0; i < lw; i++) { const fx = i / lw * 12, fy = j / lh * 7, ix = Math.floor(fx), iy = Math.floor(fy), ax = ease(fx - ix), ay = ease(fy - iy);
        const v = lerp(lerp(g[iy * 13 + ix], g[iy * 13 + ix + 1], ax), lerp(g[(iy + 1) * 13 + ix], g[(iy + 1) * 13 + ix + 1], ax), ay); const o = (j * lw + i) * 4;
        d.data[o] = tint[0]; d.data[o + 1] = tint[1]; d.data[o + 2] = tint[2]; d.data[o + 3] = Math.pow(v, 1.6) * 255; }
      x.putImageData(d, 0, 0); const big = mk(W * 1.5, H * 1.2), bx = big.getContext('2d'); bx.filter = 'blur(28px)'; bx.drawImage(c, 0, 0, big.width, big.height); L.push(big); } return L; }
  // Fog layers drift left and repeat seamlessly: the layer is drawn twice, mirrored, so the seam never shows.
  function drawFog(t, layers, alpha = 0.55, speed = 18) { layers.forEach((L, k) => { const lw = L.width; const dx = -((t * speed * (k + 1) * 0.6) % (lw * 2)); const y = -H * 0.1 + Math.sin(t * 0.2 + k) * 20;
    ctx.save(); ctx.globalAlpha = alpha * (0.5 + 0.25 * k);
    for (const ox of [dx, dx + lw * 2]) { ctx.drawImage(L, ox, y); ctx.save(); ctx.translate(ox + lw * 2, y); ctx.scale(-1, 1); ctx.drawImage(L, 0, 0); ctx.restore(); }
    ctx.restore(); }); }

  // ---------- scenes ----------
  const SC = {};

  // Rain on a window at night, warm street lamps behind (horror, stories, calm outros)
  SC.rain = {
    setup() { const r = rng(P.seed ?? 3); const cols = P.colors ?? ['#ffd27a', '#ffb347', '#7a1f1f', '#1f4d2a', '#ffe9b0'];
      S.bg = bokehLayer(P.seed ?? 3, 26, cols, 26, W * 1.2, H * 1.2);
      S.bgSharp = mk(W, H);
      S.drops = []; for (let i = 0; i < (P.drops ?? 520); i++) S.drops.push({ x: r() * W, y: r() * H, r: 3 + Math.pow(r(), 2) * 22, slide: r() < 0.12, sp: 60 + r() * 220, st: r() * 20, ph: r() });
      S.lamp = P.lamp ?? true; },
    frame(t) { ctx.fillStyle = '#050403'; ctx.fillRect(0, 0, W, H);
      const dx = Math.sin(t * 0.07) * 40, dy = Math.cos(t * 0.05) * 20;
      if (S.lamp) { const fl = 0.85 + 0.15 * noise1(t * 3, 5); const g = ctx.createRadialGradient(W * 0.48, H * 0.45, 0, W * 0.48, H * 0.45, 260); g.addColorStop(0, `rgba(255,236,190,${fl})`); g.addColorStop(0.35, `rgba(255,200,120,${0.6 * fl})`); g.addColorStop(1, 'rgba(255,160,60,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); }
      ctx.globalAlpha = 0.85; ctx.drawImage(S.bg, -W * 0.1 + dx, -H * 0.1 + dy); ctx.globalAlpha = 1;
      // snapshot of the background for refraction
      const bx = S.bgSharp.getContext('2d'); bx.clearRect(0, 0, W, H); bx.drawImage(cv, 0, 0);
      for (const d of S.drops) { let y = d.y, x = d.x;
        if (d.slide) { const cyc = (t + d.st) % 9; if (cyc > 3) { const k = cyc - 3; y = (d.y + k * d.sp * Math.min(1, k)) % (H + 40); x += Math.sin(k * 3 + d.ph * 6) * 3;
          ctx.strokeStyle = 'rgba(255,240,210,0.10)'; ctx.lineWidth = d.r * 0.5; ctx.beginPath(); ctx.moveTo(x, Math.max(0, y - 120)); ctx.lineTo(x, y); ctx.stroke(); } }
        const R = d.r; ctx.save(); ctx.beginPath(); ctx.ellipse(x, y, R, R * 1.08, 0, 0, 7); ctx.clip();
        ctx.translate(x, y); ctx.scale(-1.0, -1.0); ctx.drawImage(S.bgSharp, x - R * 5, y - R * 5, R * 10, R * 10, -R * 1.1, -R * 1.1, R * 2.2, R * 2.2); ctx.restore();
        ctx.strokeStyle = 'rgba(0,0,0,0.45)'; ctx.lineWidth = Math.max(1, R * 0.16); ctx.beginPath(); ctx.ellipse(x, y, R, R * 1.08, 0, 0, 7); ctx.stroke();
        ctx.fillStyle = 'rgba(255,248,230,0.55)'; ctx.beginPath(); ctx.arc(x - R * 0.35, y - R * 0.4, Math.max(0.8, R * 0.18), 0, 7); ctx.fill(); }
      titleBlock(t); vignette(0.8); grain(t, 0.06); }
  };

  // Drifting fog with a flickering lamp or candle (horror)
  SC.fog = {
    setup() { const tint = P.tint ?? [150, 160, 170]; S.fog = fogLayers(P.seed ?? 9, tint); },
    frame(t) { const base = P.base ?? ['#05070a', '#0e1418'];
      const g0 = ctx.createLinearGradient(0, 0, 0, H); g0.addColorStop(0, base[1]); g0.addColorStop(1, base[0]); ctx.fillStyle = g0; ctx.fillRect(0, 0, W, H);
      const lx = W * (P.lightX ?? 0.72), ly = H * (P.lightY ?? 0.42); const fl = 0.7 + 0.3 * noise1(t * 6, 2) * noise1(t * 1.3, 4); const lc = P.lightColor ?? '#ffcf80';
      const g = ctx.createRadialGradient(lx, ly, 0, lx, ly, 520); g.addColorStop(0, hexA(lc, 0.95 * fl)); g.addColorStop(0.08, hexA(lc, 0.55 * fl)); g.addColorStop(0.5, hexA(lc, 0.10 * fl)); g.addColorStop(1, hexA(lc, 0));
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      if (P.silhouette !== false) { // bare trees and a lamp post
        ctx.fillStyle = '#020304'; const r = rng((P.seed ?? 9) + 41); for (let k = 0; k < 5; k++) { const x0 = r() * W, h0 = H * (0.45 + r() * 0.35); ctx.save(); ctx.globalAlpha = 0.55 + 0.4 * (k / 5);
          (function br(x, y, a, len, w, d) { if (d > 6) return; const x2 = x + Math.cos(a) * len, y2 = y + Math.sin(a) * len; ctx.lineWidth = w; ctx.strokeStyle = '#020304'; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x2, y2); ctx.stroke(); br(x2, y2, a - 0.35 - r() * 0.3, len * 0.72, w * 0.68, d + 1); br(x2, y2, a + 0.35 + r() * 0.3, len * 0.72, w * 0.68, d + 1); })(x0, H, -Math.PI / 2 + (r() - 0.5) * 0.2, h0 * 0.35, 22, 0); ctx.restore(); }
        ctx.fillRect(lx - 7, ly + 30, 14, H - ly); ctx.fillRect(lx - 34, ly + 10, 68, 22);
      }
      drawFog(t, S.fog, P.fogAlpha ?? 0.6, P.fogSpeed ?? 22);
      titleBlock(t, { color: P.textColor ?? '#e9e4da', accent: P.accent ?? '#b3241f' }); vignette(0.9); grain(t, 0.08); }
  };

  // Typewriter close-up typing a line on paper (stories, writers, quotes, word origins)
  SC.typewriter = {
    setup() { const r = rng(P.seed ?? 5); S.paper = mk(W, H); const x = S.paper.getContext('2d'); x.fillStyle = '#efe9dc'; x.fillRect(0, 0, W, H);
      for (let i = 0; i < 9000; i++) { x.fillStyle = `rgba(90,70,40,${r() * 0.05})`; x.fillRect(r() * W, r() * H, 1 + r() * 2, 1 + r() * 2); }
      S.text = String(P.text ?? 'Writer: paints in the imagination with words.'); S.cps = P.cps ?? 11; S.start = P.typeAt ?? 0.6;
      // wrap the whole text once, so a word never jumps to the next line while it is being typed
      S.full = []; let cur = ''; for (const word of S.text.split(' ')) { if ((cur + ' ' + word).trim().length > 38) { S.full.push(cur); cur = word; } else cur = (cur ? cur + ' ' : '') + word; } S.full.push(cur); },
    frame(t) { const n = Math.floor(clamp((t - S.start) * S.cps, 0, S.text.length));
      ctx.font = '500 58px "Courier 10 Pitch", "Liberation Mono", monospace'; const cw = ctx.measureText('M').width;
      const lines = []; let left = n; for (const ln of S.full) { if (left <= 0 && lines.length) break; lines.push(ln.slice(0, Math.max(0, left))); left -= ln.length + 1; }
      const li = lines.length - 1; const curLen = lines[li].length;
      // camera: paper scrolls up per line, carriage moves left per char
      const carX = W * 0.5 - curLen * cw; const lineY = H * 0.46; const scrollY = li * 84;
      ctx.fillStyle = '#16120d'; ctx.fillRect(0, 0, W, H);
      ctx.save(); ctx.translate(carX - W * 0.06, -scrollY); ctx.drawImage(S.paper, -W * 0.1, -H * 0.4, W * 2.2, H * 2.2);
      ctx.font = '500 58px "Courier 10 Pitch", "Liberation Mono", monospace';
      lines.forEach((ln, i) => { ctx.filter = i < li ? `blur(${Math.min(3, (li - i) * 1.2)}px)` : 'none'; for (let c = 0; c < ln.length; c++) { const jr = rng(i * 131 + c * 7 + 1); ctx.fillStyle = `rgba(24,20,17,${0.72 + jr() * 0.28})`; ctx.fillText(ln[c], W * 0.06 + c * cw + (jr() - 0.5) * 1.5, lineY + i * 84 + (jr() - 0.5) * 2); } });
      ctx.restore(); ctx.filter = 'none';
      // warm desk light falling off toward the edges, and the metal paper bail across the top
      const lg = ctx.createRadialGradient(W * 0.5, H * 0.45, H * 0.15, W * 0.5, H * 0.5, H * 0.9); lg.addColorStop(0, 'rgba(255,214,150,0.10)'); lg.addColorStop(1, 'rgba(25,15,5,0.65)'); ctx.fillStyle = lg; ctx.fillRect(0, 0, W, H);
      const bail = ctx.createLinearGradient(0, H * 0.17, 0, H * 0.2); bail.addColorStop(0, '#d9d6d0'); bail.addColorStop(0.5, '#8d8a85'); bail.addColorStop(1, '#3c3a37'); ctx.fillStyle = bail; ctx.fillRect(0, H * 0.17, W, 22);
      for (const rx of [0.18, 0.82]) { ctx.fillStyle = '#1c1b1a'; ctx.beginPath(); ctx.roundRect(W * rx - 34, H * 0.155, 68, 50, 10); ctx.fill(); }
      // the type guide at the printing point; a type bar flicks up on each keystroke (soft, out of focus)
      const ph = ((t - S.start) * S.cps) % 1; const strike = n > 0 && n < S.text.length && ph < 0.3 && S.text[n - 1] !== ' ';
      ctx.save(); ctx.filter = 'blur(2px)'; const gx = W * 0.5 + 4, gy = lineY - scrollY + li * 84 + 12;
      ctx.strokeStyle = '#c7c3bc'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(gx - 46, H); ctx.lineTo(gx - 22, gy + 40); ctx.lineTo(gx + 22, gy + 40); ctx.lineTo(gx + 46, H); ctx.stroke();
      ctx.fillStyle = 'rgba(184,53,46,0.85)'; ctx.fillRect(gx - 60, gy + 34, 120, 8);
      if (strike) { ctx.filter = 'blur(6px)'; ctx.fillStyle = 'rgba(70,66,60,0.9)'; ctx.fillRect(gx - 8, gy - 30 + ph * 200, 16, H); }
      ctx.restore();
      vignette(0.8); grain(t, 0.06); }
  };

  // Rotating dotted globe with real continents (history, English around the world)
  SC.globe = {
    setup() { const lc = landCanvas(1440, 720, '#fff'); const d = lc.getContext('2d').getImageData(0, 0, 1440, 720).data; S.pts = [];
      const N = P.points ?? 26000; for (let i = 0; i < N; i++) { const y = 1 - (i + 0.5) / N * 2, rr = Math.sqrt(1 - y * y), th = i * 2.399963229728653; const lat = Math.asin(y), lon = Math.atan2(Math.sin(th) * rr, Math.cos(th) * rr);
        const px = Math.floor((lon / Math.PI + 1) / 2 * 1439), py = Math.floor((0.5 - lat / Math.PI) * 719); const land = d[(py * 1440 + px) * 4 + 3] > 128; if (land || i % 9 === 0) S.pts.push([lat, lon, land]); }
      S.fog = fogLayers(P.seed ?? 12, P.fogTint ?? [40, 140, 130]); S.markers = P.markers ?? []; },
    frame(t) { const tc = P.color ?? '#7fe0d0'; const bg = ctx.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, P.bgTop ?? '#0f3b38'); bg.addColorStop(1, '#020807'); ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
      drawFog(t, S.fog, 0.35, 10);
      const cx = W / 2, cy = H * 0.5, R = H * (P.radius ?? 0.40); const rot = -(P.lon0 ?? 0) * Math.PI / 180 + t * (P.speed ?? 0.18); /* lon0 = longitude facing the camera at t = 0, east positive */ const tilt = (P.tilt ?? 18) * Math.PI / 180;
      const at = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.25); at.addColorStop(0, hexA(tc, 0.18)); at.addColorStop(1, hexA(tc, 0)); ctx.fillStyle = at; ctx.fillRect(0, 0, W, H);
      const proj = (lat, lon) => { const x = Math.cos(lat) * Math.sin(lon + rot), y0 = Math.sin(lat), z0 = Math.cos(lat) * Math.cos(lon + rot); const y = y0 * Math.cos(tilt) - z0 * Math.sin(tilt), z = y0 * Math.sin(tilt) + z0 * Math.cos(tilt); return [cx + x * R, cy - y * R, z]; };
      for (const [lat, lon, land] of S.pts) { const [x, y, z] = proj(lat, lon); if (z < -0.05) continue; const a = (land ? 0.35 + 0.65 * z : 0.12 * z); ctx.fillStyle = land ? hexA(tc, a) : hexA('#9fd', a); const s = land ? 2.3 : 1.4; ctx.fillRect(x - s / 2, y - s / 2, s, s); }
      ctx.strokeStyle = hexA(tc, 0.35); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.stroke();
      // orbit light trails
      for (let k = 0; k < 2; k++) { const ph = t * (0.5 + k * 0.23) + k * 2; ctx.save(); ctx.translate(cx, cy); ctx.rotate(-0.4 + k * 0.9); const rx = R * 1.18, ry = R * 0.22;
        for (let s = 0; s < 40; s++) { const a = ph - s * 0.03; const x = Math.cos(a) * rx, y = Math.sin(a) * ry; if (Math.sin(a) < 0 && Math.hypot(x, y) < R) continue; ctx.fillStyle = hexA('#d8fff8', (1 - s / 40) * 0.9); ctx.beginPath(); ctx.arc(x, y, 3 * (1 - s / 40) + 0.6, 0, 7); ctx.fill(); } ctx.restore(); }
      // markers: [{lat, lon, label, at}]
      for (const m of S.markers) { const [x, y, z] = proj(m.lat * Math.PI / 180, m.lon * Math.PI / 180); if (z < 0.05) continue; const a = ease((t - (m.at ?? 1)) / 0.6) * z; if (a <= 0) continue;
        const pulse = 10 + ((t * 30) % 40); ctx.strokeStyle = hexA('#ffe9a8', a * (1 - pulse / 50)); ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, pulse, 0, 7); ctx.stroke(); ctx.fillStyle = hexA('#ffe9a8', a); ctx.beginPath(); ctx.arc(x, y, 7, 0, 7); ctx.fill();
        if (m.label) { ctx.globalAlpha = a; ctx.fillStyle = '#fff6dc'; ctx.font = '600 36px Inter'; ctx.textAlign = 'left'; ctx.shadowColor = '#000'; ctx.shadowBlur = 12; ctx.fillText(m.label, x + 20, y - 16); ctx.shadowBlur = 0; ctx.globalAlpha = 1; } }
      titleBlock(t, { y: H * 0.14, size: 72 }); vignette(0.7); grain(t, 0.05); }
  };

  // Glowing world map with light streaks, slow camera and optional routes (wars, empires, trade, borrowed words)
  SC.map = {
    setup() { S.land = landCanvas(3600, 1800, '#fff'); S.glow = mk(1800, 900); const g = S.glow.getContext('2d'); g.filter = 'blur(14px)'; g.drawImage(S.land, 0, 0, 1800, 900);
      const col = P.color ?? '#ff7a1a'; S.tint = mk(3600, 1800); const x = S.tint.getContext('2d'); x.drawImage(S.land, 0, 0); x.globalCompositeOperation = 'source-in';
      const gr = x.createLinearGradient(0, 0, 3600, 1800); gr.addColorStop(0, P.color2 ?? '#ffd27a'); gr.addColorStop(0.5, col); gr.addColorStop(1, P.color2 ?? '#ffd27a'); x.fillStyle = gr; x.fillRect(0, 0, 3600, 1800);
      S.gt = mk(1800, 900); const y = S.gt.getContext('2d'); y.drawImage(S.glow, 0, 0); y.globalCompositeOperation = 'source-in'; y.fillStyle = col; y.fillRect(0, 0, 1800, 900);
      const r = rng(P.seed ?? 21); S.streaks = []; for (let i = 0; i < 14; i++) S.streaks.push({ y: r(), sp: 0.2 + r() * 0.8, a: 0.15 + r() * 0.5, w: 1 + r() * 3 }); },
    frame(t) { const col = P.color ?? '#ff7a1a'; ctx.fillStyle = P.bg ?? '#140502'; ctx.fillRect(0, 0, W, H);
      const c0 = P.from ?? { lon: 0, lat: 15, zoom: 1.0 }, c1 = P.to ?? { lon: 30, lat: 20, zoom: 1.25 }; const k = ease(t / P.duration);
      const lon = lerp(c0.lon, c1.lon, k), lat = lerp(c0.lat, c1.lat, k), zoom = lerp(c0.zoom, c1.zoom, k);
      const mw = W * zoom, mh = mw / 2; const ox = W / 2 - (lon + 180) / 360 * mw, oy = H / 2 - (90 - lat) / 180 * mh;
      const toXY = (lo, la) => [ox + (lo + 180) / 360 * mw, oy + (90 - la) / 180 * mh];
      ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.9 + 0.1 * Math.sin(t * 2); ctx.drawImage(S.gt, ox, oy, mw, mh); ctx.drawImage(S.gt, ox, oy, mw, mh); ctx.restore();
      ctx.globalAlpha = 0.92; ctx.drawImage(S.tint, ox, oy, mw, mh); ctx.globalAlpha = 1;
      for (const s of S.streaks) { const y = s.y * H, x = ((t * s.sp * 900 + s.y * 3000) % (W * 1.6)) - W * 0.3; const g = ctx.createLinearGradient(x - 500, 0, x + 500, 0); g.addColorStop(0, hexA(col, 0)); g.addColorStop(0.5, hexA('#ffe0b0', s.a)); g.addColorStop(1, hexA(col, 0)); ctx.fillStyle = g; ctx.fillRect(x - 500, y, 1000, s.w); }
      // routes: [{from:[lon,lat], to:[lon,lat], at, dur, label}]
      for (const rt of (P.routes ?? [])) { const p = ease((t - (rt.at ?? 1)) / (rt.dur ?? 2.5)); if (p <= 0) continue; const [x1, y1] = toXY(...rt.from), [x2, y2] = toXY(...rt.to); const mx = (x1 + x2) / 2, my = Math.min(y1, y2) - Math.hypot(x2 - x1, y2 - y1) * 0.3;
        const pt = u => [(1 - u) * (1 - u) * x1 + 2 * (1 - u) * u * mx + u * u * x2, (1 - u) * (1 - u) * y1 + 2 * (1 - u) * u * my + u * u * y2];
        ctx.save(); ctx.strokeStyle = '#fff3d6'; ctx.lineWidth = 4; ctx.shadowColor = '#ffd27a'; ctx.shadowBlur = 18; ctx.setLineDash([14, 10]); ctx.beginPath(); for (let u = 0; u <= p; u += 0.01) { const [x, y] = pt(u); u ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); ctx.setLineDash([]);
        const [hx, hy] = pt(p); ctx.fillStyle = '#fffbe9'; ctx.beginPath(); ctx.arc(hx, hy, 9, 0, 7); ctx.fill(); ctx.beginPath(); ctx.arc(x1, y1, 7, 0, 7); ctx.fill();
        if (rt.label && p > 0.98) { ctx.shadowBlur = 14; ctx.shadowColor = '#000'; ctx.font = '600 38px Inter'; ctx.textAlign = 'center'; ctx.fillText(rt.label, x2, y2 - 26); } ctx.restore(); }
      for (const m of (P.labels ?? [])) { const a = ease((t - (m.at ?? 1)) / 0.6); if (a <= 0) continue; const [x, y] = toXY(m.lon, m.lat); ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = '#fff6dc'; ctx.shadowColor = '#000'; ctx.shadowBlur = 14; ctx.beginPath(); ctx.arc(x, y, 8, 0, 7); ctx.fill(); ctx.font = '600 38px Inter'; ctx.textAlign = 'center'; ctx.fillText(m.label, x, y - 24); ctx.restore(); }
      titleBlock(t, { y: H * 0.14, size: 76 }); vignette(0.85); grain(t, 0.05); }
  };

  // Cinematic word card (vocabulary, nature words, topic words). P.word, P.kind, P.ipa, P.meaning (English), P.mood: night|nature|gold|fog
  SC.word = {
    setup() { const mood = P.mood ?? 'night'; const cols = { night: ['#2b4a8a', '#7a5cff', '#f2c46d', '#1f6f8b'], nature: ['#9be15d', '#3e8e41', '#f6e27f', '#2f6b4f'], gold: ['#ffcf6b', '#ff9a3c', '#fff1c1', '#a35d1b'], fog: ['#8fa3b0', '#55606a', '#c9d3db', '#30383f'] }[mood] ?? ['#f2c46d'];
      S.b1 = bokehLayer(P.seed ?? 31, 22, cols, 30, W * 1.3, H * 1.3); S.b2 = bokehLayer((P.seed ?? 31) + 1, 14, cols, 8, W * 1.3, H * 1.3); S.bgc = { night: '#05070f', nature: '#06120a', gold: '#120a03', fog: '#0a0d10' }[mood] ?? '#050505'; S.acc = P.accent ?? cols[2]; },
    frame(t) { ctx.fillStyle = S.bgc; ctx.fillRect(0, 0, W, H);
      ctx.globalAlpha = 0.75; ctx.drawImage(S.b1, -W * 0.15 + Math.sin(t * 0.1) * 60, -H * 0.15 + Math.cos(t * 0.08) * 30); ctx.globalAlpha = 0.35; ctx.drawImage(S.b2, -W * 0.15 - t * 14, -H * 0.15); ctx.globalAlpha = 1;
      const a0 = P.textAt ?? 0.5; const a = ease((t - a0) / 0.9); const sc = 1.06 - 0.06 * ease((t - a0) / 3);
      ctx.save(); ctx.translate(W / 2, H * 0.47); ctx.scale(sc, sc); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      if (P.kind) { ctx.globalAlpha = a; ctx.fillStyle = S.acc; ctx.font = '600 34px Inter'; ctx.letterSpacing = '12px'; ctx.fillText(P.kind.toUpperCase(), 0, -150); ctx.letterSpacing = '0px'; }
      const size = Math.min(190, 1500 / Math.max(4, String(P.word).length) * 1.6); ctx.font = `700 ${size}px Caladea`; ctx.globalAlpha = a; ctx.shadowColor = 'rgba(0,0,0,0.8)'; ctx.shadowBlur = 40; ctx.fillStyle = '#fbf6ea'; ctx.fillText(P.word, 0, 0);
      // light sweep across the letters only: drawn on its own canvas, clipped to the glyphs there
      const sw = ((t - a0 - 0.6) / 1.6); if (sw > 0 && sw < 1) { if (!S.sweep) S.sweep = mk(W, H); const o = S.sweep.getContext('2d'); o.setTransform(1, 0, 0, 1, 0, 0); o.clearRect(0, 0, W, H); o.translate(W / 2, H / 2);
        o.font = ctx.font; o.textAlign = 'center'; o.textBaseline = 'middle'; o.fillStyle = '#fff'; o.fillText(P.word, 0, 0); const wdt = o.measureText(P.word).width; const sx = -wdt / 2 + sw * wdt * 1.4 - wdt * 0.2;
        o.globalCompositeOperation = 'source-in'; const g = o.createLinearGradient(sx - 120, 0, sx + 120, 0); g.addColorStop(0, 'rgba(255,240,200,0)'); g.addColorStop(0.5, 'rgba(255,240,200,0.9)'); g.addColorStop(1, 'rgba(255,240,200,0)'); o.fillStyle = g; o.fillRect(-W / 2, -H / 2, W, H); o.globalCompositeOperation = 'source-over';
        ctx.save(); ctx.shadowBlur = 0; ctx.globalAlpha = a; ctx.drawImage(S.sweep, -W / 2, -H / 2); ctx.restore(); }
      ctx.shadowBlur = 20; const b = ease((t - a0 - 0.9) / 0.8);
      if (P.ipa) { ctx.globalAlpha = b; ctx.fillStyle = '#d6cfc0'; ctx.font = '400 44px "DejaVu Sans"'; ctx.fillText(P.ipa, 0, size * 0.62); }
      if (P.meaning) { ctx.globalAlpha = ease((t - a0 - 1.4) / 0.8); ctx.fillStyle = S.acc; ctx.font = 'italic 400 50px Caladea'; wrapText(P.meaning, 'italic 400 50px Caladea', W * 0.7).forEach((ln, i) => ctx.fillText(ln, 0, size * 0.62 + 80 + i * 60)); }
      ctx.restore(); vignette(0.75); grain(t, 0.05); }
  };

  // Quiz / exam / game: question, options, countdown, then the answer lights up
  SC.quiz = {
    setup() { S.b = bokehLayer(P.seed ?? 51, 16, ['#3a2a8a', '#1f6f8b', '#e6b94f'], 40, W * 1.2, H * 1.2); },
    frame(t) { ctx.fillStyle = '#060814'; ctx.fillRect(0, 0, W, H); ctx.globalAlpha = 0.6; ctx.drawImage(S.b, -W * 0.1 + Math.sin(t * 0.2) * 30, -H * 0.1); ctx.globalAlpha = 1;
      const opts = P.options ?? []; const ans = P.answer ?? 0; const rev = P.revealAt ?? (P.duration - 2.2); const cd = P.countFrom ?? 5; const cdStart = rev - cd;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      if (P.kicker) { ctx.globalAlpha = ease(t / 0.6); ctx.fillStyle = '#e6b94f'; ctx.font = '700 32px Inter'; ctx.letterSpacing = '8px'; ctx.fillText(P.kicker.toUpperCase(), W / 2, 110); ctx.letterSpacing = '0px'; }
      ctx.globalAlpha = ease((t - 0.2) / 0.7); ctx.fillStyle = '#fff'; const ql = wrapText(P.question ?? '', '700 64px Inter', W * 0.8); ql.forEach((ln, i) => { ctx.font = '700 64px Inter'; ctx.fillText(ln, W / 2, 210 + i * 76); });
      const top = 210 + ql.length * 76 + 60; const cols = opts.length > 2 ? 2 : opts.length; const bw = 760, bh = 120, gap = 40;
      opts.forEach((o, i) => { const r = Math.floor(i / cols), c = i % cols; const x = W / 2 + (c - (cols - 1) / 2) * (bw + gap), y = top + r * (bh + gap) + bh / 2; const ap = ease((t - 0.6 - i * 0.18) / 0.5);
        const isA = i === ans, shown = t >= rev; ctx.save(); ctx.globalAlpha = ap * (shown && !isA ? 0.35 : 1); ctx.translate(x, y + (1 - ap) * 20);
        ctx.fillStyle = shown && isA ? '#1f8a4c' : 'rgba(255,255,255,0.08)'; ctx.strokeStyle = shown && isA ? '#7dffb0' : 'rgba(255,255,255,0.35)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.roundRect(-bw / 2, -bh / 2, bw, bh, 26); ctx.fill(); ctx.stroke();
        if (shown && isA) { ctx.shadowColor = '#7dffb0'; ctx.shadowBlur = 40 * (0.6 + 0.4 * Math.sin(t * 6)); ctx.stroke(); ctx.shadowBlur = 0; }
        ctx.fillStyle = '#e6b94f'; ctx.font = '800 46px Inter'; ctx.fillText('ABCD'[i], -bw / 2 + 60, 2); ctx.fillStyle = '#fff'; ctx.font = '600 50px Inter'; ctx.fillText(o, 30, 2); ctx.restore(); });
      // countdown ring
      if (t >= cdStart && t < rev) { const left = rev - t; const x = W - 170, y = H - 150; ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 14; ctx.beginPath(); ctx.arc(x, y, 80, 0, 7); ctx.stroke();
        ctx.strokeStyle = left < 2 ? '#ff5a4f' : '#e6b94f'; ctx.beginPath(); ctx.arc(x, y, 80, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (left / cd)); ctx.stroke(); ctx.fillStyle = '#fff'; ctx.font = '800 72px Inter'; ctx.fillText(String(Math.ceil(left)), x, y + 4); }
      if (t >= rev && P.explain) { ctx.globalAlpha = ease((t - rev - 0.3) / 0.6); ctx.fillStyle = '#d7f9e4'; ctx.font = 'italic 400 46px Caladea'; ctx.fillText(P.explain, W / 2, H - 90); ctx.globalAlpha = 1; }
      ctx.globalAlpha = 1; vignette(0.6); grain(t, 0.04); }
  };

  window.setup = (params, land) => { P = params; LAND = land || []; S = {}; ctx.letterSpacing = '0px';
    if (!SC[P.type]) throw new Error(`unknown scene type "${P.type}"; use one of: ${Object.keys(SC).join(', ')}`); SC[P.type].setup(); };
  window.frame = t => { ctx.save(); ctx.globalAlpha = 1; ctx.filter = 'none'; ctx.globalCompositeOperation = 'source-over'; SC[P.type].frame(t); ctx.restore();
    const fi = P.fadeIn ?? 0.4, fo = P.fadeOut ?? 0.4; const k = Math.min(ease(t / fi), 1 - ease((t - (P.duration - fo)) / fo)); if (k < 1) { ctx.fillStyle = `rgba(0,0,0,${1 - k})`; ctx.fillRect(0, 0, W, H); } };
  window.SCENES = Object.keys(SC);
})();
