// Hand-drawn panel: every drawing is a list of pen strokes, revealed in order.
const W = 325, H = 575;
let seed = 1;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

class Pen {
  constructor(s) { seed = s; this.items = []; }
  // A polyline gets a low-frequency wobble so it reads as a human line.
  stroke(pts, { w = 1.5, a = 0.9, wob = 1.1, dash = false } = {}) {
    const p1 = rnd() * 9, p2 = rnd() * 9, f1 = 0.018 + rnd() * 0.02, f2 = 0.05 + rnd() * 0.03;
    let len = 0;
    const out = pts.map((p, i) => {
      if (i) len += Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]);
      return [p[0] + Math.sin(len * f1 + p1) * wob + Math.sin(len * f2 + p2) * wob * 0.3,
              p[1] + Math.cos(len * f1 * 1.2 + p2) * wob + Math.cos(len * f2 + p1) * wob * 0.3];
    });
    this.items.push({ pts: out, w, a, dash, len });
    return this;
  }
  line(x0, y0, x1, y1, o) {
    const n = Math.max(2, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / 7)), pts = [];
    for (let i = 0; i <= n; i++) pts.push([x0 + (x1 - x0) * i / n, y0 + (y1 - y0) * i / n]);
    return this.stroke(pts, o);
  }
  ell(cx, cy, rx, ry, o = {}, a0 = 0, a1 = Math.PI * 2 + 0.12) {
    const n = Math.max(14, Math.ceil(Math.max(rx, ry) * Math.abs(a1 - a0) / 6)), pts = [];
    const s = o.start ?? rnd() * 6.28;
    for (let i = 0; i <= n; i++) { const t = s + a0 + (a1 - a0) * i / n; pts.push([cx + Math.cos(t) * rx, cy + Math.sin(t) * ry]); }
    return this.stroke(pts, o);
  }
  gear(cx, cy, r, teeth, o = {}, sy = 1) {
    const d = o.depth ?? Math.max(3.5, r * 0.09), pts = [], off = rnd();
    for (let i = 0; i < teeth; i++) {
      const a = (i + off) / teeth * Math.PI * 2, s = Math.PI * 2 / teeth;
      for (const [da, rr] of [[-0.3, r], [-0.18, r + d], [0.18, r + d], [0.3, r]]) {
        pts.push([cx + Math.cos(a + da * s) * rr, cy + Math.sin(a + da * s) * rr * sy]);
      }
    }
    pts.push(pts[0]);
    return this.stroke(pts, { ...o, wob: 0.55 });
  }
  arrow(x0, y0, x1, y1, o = {}) {
    this.line(x0, y0, x1, y1, { w: 2.5, a: 1, wob: 0.7, ...o });
    const a = Math.atan2(y1 - y0, x1 - x0), h = o.head ?? 15;
    this.line(x1, y1, x1 - Math.cos(a - 0.5) * h, y1 - Math.sin(a - 0.5) * h, { w: 2.5, a: 1, wob: 0.3 });
    return this.line(x1, y1, x1 - Math.cos(a + 0.5) * h, y1 - Math.sin(a + 0.5) * h, { w: 2.5, a: 1, wob: 0.3 });
  }
  arcArrow(cx, cy, r, a0, a1, o = {}) {
    this.ell(cx, cy, r, r * (o.sy ?? 1), { w: 2.2, a: 1, wob: 0.5, start: 0 }, a0, a1);
    const dir = Math.sign(a1 - a0), x = cx + Math.cos(a1) * r, y = cy + Math.sin(a1) * r * (o.sy ?? 1);
    const t = a1 + dir * Math.PI / 2, h = 13;
    this.line(x, y, x - Math.cos(t - 0.5) * h, y - Math.sin(t - 0.5) * h, { w: 2.2, a: 1, wob: 0.2 });
    return this.line(x, y, x - Math.cos(t + 0.5) * h, y - Math.sin(t + 0.5) * h, { w: 2.2, a: 1, wob: 0.2 });
  }
  hatch(x0, y0, x1, y1, n, dx = 9, dy = -9, o = {}) {
    for (let i = 0; i < n; i++) {
      const k = i / Math.max(1, n - 1), x = x0 + (x1 - x0) * k, y = y0 + (y1 - y0) * k;
      this.line(x, y, x + dx, y + dy, { w: 0.9, a: 0.55, wob: 0.3, ...o });
    }
    return this;
  }
  spokes(cx, cy, r0, r1, n, o = {}) {
    for (let i = 0; i < n; i++) {
      const a = i / n * 6.283 + 0.3;
      this.line(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0, cx + Math.cos(a) * r1, cy + Math.sin(a) * r1, { w: 1.4, a: 0.85, ...o });
    }
    return this;
  }
  spiral(cx, cy, r0, r1, turns, o = {}, sy = 1) {
    const pts = [], n = Math.ceil(turns * 40);
    for (let i = 0; i <= n; i++) {
      const k = i / n, a = k * turns * 6.283, r = r0 + (r1 - r0) * k;
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r * sy]);
    }
    return this.stroke(pts, { w: 1.1, wob: 0.3, ...o });
  }
  note(str, x, y, size = 42) { this.items.push({ text: str, x, y, size, len: 45 }); return this; }
}

function d1() { // one gear
  const p = new Pen(11), c = [162, 262], r = 118;
  p.ell(c[0], c[1], r * 0.82, r * 0.82, { w: 1 , a: 0.45, wob: 1.8});
  p.gear(c[0], c[1], r, 30, { w: 1.7 });
  p.ell(c[0], c[1], r * 0.8, r * 0.8, { w: 1.3 });
  p.ell(c[0], c[1], r * 0.26, r * 0.26, { w: 1.5 });
  p.ell(c[0], c[1], 9, 9, { w: 1.6 });
  p.spokes(c[0], c[1], r * 0.26, r * 0.8, 5);
  p.hatch(100, 330, 150, 355, 6, 8, -8);
  p.arcArrow(c[0], c[1], r + 27, -2.4, -0.8);
  p.note('1 part', 30, 500, 44);
  return p.items;
}
function d2() { // three gears down the page
  const p = new Pen(23);
  p.gear(130, 150, 92, 24, { w: 1.6 }); p.ell(130, 150, 70, 70, { w: 1.1 }); p.ell(130, 150, 18, 18, { w: 1.4 }); p.spokes(130, 150, 18, 70, 5);
  p.gear(205, 286, 60, 16, { w: 1.6 }); p.ell(205, 286, 44, 44, { w: 1.1 }); p.ell(205, 286, 12, 12, { w: 1.4 }); p.spokes(205, 286, 12, 44, 4);
  p.gear(162, 382, 40, 11, { w: 1.6 }); p.ell(162, 382, 9, 9, { w: 1.4 });
  p.arcArrow(130, 150, 108, 3.2, 4.5);
  p.arcArrow(205, 286, 80, -0.8, 0.6, {});
  p.arcArrow(162, 382, 56, 2.0, 3.3);
  p.note('3 gears', 30, 508, 44);
  return p.items;
}
function d3() { // exploded stack
  const p = new Pen(37), cx = 162;
  p.line(cx, 28, cx, 462, { w: 1, a: 0.65, dash: true, wob: 0.4 });
  p.ell(cx, 75, 74, 21, { w: 1.5 }); p.ell(cx, 73, 26, 7, { w: 1.1 }); p.note('bridge', 243, 66, 22);       // bridge
  p.ell(cx, 155, 48, 14, { w: 1.5 }); p.ell(cx, 149, 48, 14, { w: 1.2 }); p.spiral(cx, 150, 3, 40, 3.5, {}, 0.28); // spring
  p.gear(cx, 240, 96, 24, { w: 1.5 }, 0.3); p.ell(cx, 240, 76, 22, { w: 1 });                               // gears
  p.gear(cx + 30, 330, 72, 20, { w: 1.4 }, 0.3); p.ell(cx + 30, 330, 16, 5, { w: 1.1 });
  p.ell(cx, 423, 112, 33, { w: 1.7 }); p.ell(cx, 431, 112, 33, { w: 1.2 }, 0.1, 3.05); p.hatch(70, 450, 180, 468, 9, 7, -5);
  p.note('84 parts', 30, 530, 42);
  return p.items;
}
function d4() { // tourbillon cage
  const p = new Pen(47), cx = 162, top = 150, bot = 300;
  p.ell(cx, top, 118, 40, { w: 1.8 }); p.ell(cx, top, 104, 33, { w: 1.1 });
  p.ell(cx, bot, 118, 40, { w: 1.8 }); p.ell(cx, bot, 104, 33, { w: 1.1 });
  for (const a of [0.6, 2.6, 4.7]) {
    const x = cx + Math.cos(a) * 110, y = Math.sin(a) * 36;
    p.line(x, top + y, x, bot + y, { w: 2.2 }); p.line(x + 7, top + y, x + 7, bot + y, { w: 1 });
  }
  p.ell(cx, 225, 70, 23, { w: 2 }); p.ell(cx, 229, 70, 23, { w: 1.1 }, 0, 3.2);
  p.line(cx - 68, 225, cx + 68, 225, { w: 1.5 }); p.spiral(cx, 225, 4, 34, 3, {}, 0.33);
  p.ell(cx, 225, 7, 7, { w: 1.6 });
  p.line(cx, 110, cx, 340, { w: 1, a: 0.6 , dash: true});
  p.hatch(60, 330, 130, 343, 7, 6, -6);
  p.arcArrow(cx, 225, 142, 0.5, 2.6, { sy: 0.92 });
  p.note('60 s', 30, 505, 50);
  return p.items;
}
function d5() { // collapse into case
  const p = new Pen(53), cx = 162;
  p.ell(cx, 73, 62, 17, { w: 1.4 }); p.arrow(248, 58, 248, 110);
  p.gear(cx, 142, 70, 18, { w: 1.3 }, 0.28); p.arrow(68, 125, 68, 180);
  p.ell(cx, 218, 82, 23, { w: 1.4 }); p.arrow(262, 205, 262, 262);
  p.ell(cx, 345, 118, 40, { w: 2 }); p.ell(cx, 345, 105, 33, { w: 1.2 }); p.ell(cx, 360, 118, 40, { w: 1.7 }, 0.05, 3.1);
  p.line(cx - 118, 345, cx - 118, 362, { w: 1.6 }); p.line(cx + 118, 345, cx + 118, 362, { w: 1.6 });
  p.line(cx + 118, 352, cx + 134, 352, { w: 3 });
  p.hatch(60, 392, 170, 410, 9, 7, -6);
  p.note('slam!', 110, 470, 34);
  p.note('214', 30, 535, 54);
  return p.items;
}
function d6() { // front dial 10:10
  const p = new Pen(61), c = [162, 245], r = 110;
  p.line(c[0] - 62, c[1] - r - 2, c[0] - 54, 20, { w: 1.5 }); p.line(c[0] + 62, c[1] - r - 2, c[0] + 54, 20, { w: 1.5 });
  p.line(c[0] - 62, c[1] + r + 2, c[0] - 54, 470, { w: 1.5 }); p.line(c[0] + 62, c[1] + r + 2, c[0] + 54, 470, { w: 1.5 });
  p.ell(c[0], c[1], r, r, { w: 2.1 }); p.ell(c[0], c[1], r - 10, r - 10, { w: 1.1 });
  for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283, k = i % 3 == 0 ? 74 : 81;
    p.line(c[0] + Math.cos(a) * k, c[1] + Math.sin(a) * k, c[0] + Math.cos(a) * 92, c[1] + Math.sin(a) * 92, { w: i % 3 == 0 ? 2.4 : 1.4, wob: 0.2 }); }
  const hA = (10 + 10 / 60) / 12 * 6.283 - 1.571, mA = 10 / 60 * 6.283 - 1.571;
  p.line(c[0], c[1], c[0] + Math.cos(hA) * 50, c[1] + Math.sin(hA) * 50, { w: 3.2, wob: 0.3 });
  p.line(c[0], c[1], c[0] + Math.cos(mA) * 74, c[1] + Math.sin(mA) * 74, { w: 2.5, wob: 0.3 });
  p.ell(c[0], c[1], 6, 6, { w: 1.8 }); p.line(c[0] + r, c[1], c[0] + r + 15, c[1], { w: 4 });
  p.arcArrow(c[0], c[1], r - 28, 0.6, 2.5);
  p.note('10:10', 30, 530, 46);
  return p.items;
}
function d7() { // 3/4 finished watch
  const p = new Pen(71), cx = 165, cy = 225;
  const s = (x0, y0, x1, y1) => { p.line(x0, y0, x1, y1, { w: 1.5 }); };
  s(cx - 40, cy - 74, cx + 8, 22); s(cx + 40, cy - 60, cx + 72, 26); s(cx - 58, cy + 62, cx - 88, 410); s(cx + 22, cy + 76, cx - 12, 425);
  p.ell(cx, cy, 86, 100, { w: 2.1 }); p.ell(cx + 5, cy + 3, 86, 100, { w: 1.4 }, 0.8, 2.6); p.ell(cx, cy, 72, 86, { w: 1.1 });
  for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283;
    p.line(cx + Math.cos(a) * 60, cy + Math.sin(a) * 72, cx + Math.cos(a) * 68, cy + Math.sin(a) * 81, { w: 1.5, wob: 0.1 }); }
  p.line(cx, cy, cx - 34, cy - 24, { w: 3, wob: 0.2 }); p.line(cx, cy, cx + 44, cy - 42, { w: 2.2, wob: 0.2 });
  p.ell(cx - 12, cy + 42, 20, 22, { w: 1.2 }); p.line(cx + 88, cy, cx + 103, cy - 2, { w: 4 });
  p.line(cx + 52, cy - 104, cx + 72, cy - 130, { w: 1 }); p.line(cx + 66, cy - 94, cx + 92, cy - 108, { w: 1 }); p.line(cx + 40, cy - 112, cx + 45, cy - 138, { w: 1 });
  p.hatch(cx - 60, cy + 110, cx - 26, cy + 130, 7, 8, -8);
  p.note('every', 72, 494, 44); p.note('second', 62, 540, 44);
  return p.items;
}

const DRAWINGS = [d1(), d2(), d3(), d4(), d5(), d6(), d7()];
for (const d of DRAWINGS) d.total = d.reduce((s, i) => s + i.len, 0);

export function drawSketch(ctx, index, reveal) {
  const items = DRAWINGS[index];
  ctx.setTransform(2, 0, 0, 2, 0, 0);
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  let budget = reveal * items.total;
  for (const it of items) {
    if (budget <= 0) break;
    const k = Math.min(1, budget / it.len); budget -= it.len;
    if (it.text) {
      ctx.globalAlpha = k; ctx.fillStyle = '#111';
      ctx.font = `italic 600 ${it.size}px "Bradley Hand","Noteworthy",cursive`;
      ctx.fillText(it.text, it.x, it.y);
      ctx.globalAlpha = 1; continue;
    }
    ctx.strokeStyle = '#141414'; ctx.lineWidth = it.w; ctx.globalAlpha = it.a;
    ctx.setLineDash(it.dash ? [7, 7] : []);
    ctx.beginPath();
    const stop = Math.max(2, Math.ceil(it.pts.length * k));
    for (let i = 0; i < stop; i++) i ? ctx.lineTo(...it.pts[i]) : ctx.moveTo(...it.pts[i]);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
  ctx.setLineDash([]);
}
