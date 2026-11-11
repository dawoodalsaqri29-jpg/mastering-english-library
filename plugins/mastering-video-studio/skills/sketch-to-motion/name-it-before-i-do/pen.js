// Hand-drawn panel: every drawing is a list of pen strokes, revealed in order.
export const W = 325, H = 575;
let seed = 1;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

export class Pen {
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

