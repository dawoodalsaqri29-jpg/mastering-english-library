// Hand-drawn left panel: one drawing per word, plus a "?" intro card.
import { Pen, W, H } from './pen.js';

function intro() {
  const p = new Pen(5);
  p.ell(162, 250, 105, 105, { w: 2.4 });
  p.note('?', 128, 300, 150);
  p.note('guess!', 95, 470, 46);
  return p.items;
}
function book() {
  const p = new Pen(11);
  p.line(55, 150, 270, 150, { w: 2.2 }); p.line(270, 150, 270, 400, { w: 2.2 });
  p.line(270, 400, 55, 400, { w: 2.2 }); p.line(55, 400, 55, 150, { w: 2.2 });
  p.line(75, 150, 75, 400, { w: 1.6 });
  p.line(110, 210, 240, 210, { w: 1.4 }); p.line(110, 235, 220, 235, { w: 1.4 });
  p.line(270, 160, 282, 165, { w: 1.2 }); p.line(282, 165, 282, 408, { w: 1.2 }); p.line(282, 408, 62, 408, { w: 1.2 });
  p.hatch(200, 330, 255, 385, 6, 8, -8);
  p.note('?', 140, 500, 64);
  return p.items;
}
function pencil() {
  const p = new Pen(23);
  p.line(85, 440, 240, 160, { w: 2.2 }); p.line(115, 455, 270, 175, { w: 2.2 });
  p.line(240, 160, 270, 175, { w: 2 });
  p.line(85, 440, 72, 495, { w: 2 }); p.line(115, 455, 72, 495, { w: 2 });
  p.line(240, 160, 252, 130, { w: 1.8 }); p.line(270, 175, 280, 146, { w: 1.8 }); p.ell(266, 138, 16, 10, { w: 1.6 });
  p.line(222, 192, 252, 207, { w: 1.4 }); p.line(100, 447, 255, 168, { w: 1, a: 0.6 });
  p.note('?', 200, 420, 64);
  return p.items;
}
function apple() {
  const p = new Pen(31);
  const pts = []; for (let i = 0; i <= 60; i++) { const a = i / 60 * 6.283; const r = 105 * (1 - 0.18 * Math.pow(Math.cos((a + 1.571) / 2), 8)); pts.push([162 + Math.cos(a) * r * 1.02, 280 + Math.sin(a) * r]); }
  p.stroke(pts, { w: 2.4 });
  p.line(162, 182, 170, 135, { w: 2.4 });
  p.ell(200, 150, 32, 13, { w: 1.6 });
  p.hatch(200, 330, 240, 360, 5, 8, -8);
  p.ell(125, 240, 16, 26, { w: 1.2, a: 0.6 });
  p.note('?', 140, 500, 64);
  return p.items;
}
function clock() {
  const p = new Pen(41), c = [162, 270];
  p.ell(c[0], c[1], 118, 118, { w: 2.6 }); p.ell(c[0], c[1], 102, 102, { w: 1.2 });
  for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; p.line(c[0] + Math.cos(a) * 86, c[1] + Math.sin(a) * 86, c[0] + Math.cos(a) * 97, c[1] + Math.sin(a) * 97, { w: 1.6 }); }
  p.line(c[0], c[1], c[0], c[1] - 72, { w: 2.6 }); p.line(c[0], c[1], c[0] + 48, c[1] + 18, { w: 3 });
  p.arcArrow(c[0], c[1], 140, -1.2, 0.2);
  p.note('?', 140, 500, 64);
  return p.items;
}
function globe() {
  const p = new Pen(53), c = [162, 245];
  p.ell(c[0], c[1], 105, 105, { w: 2.4 });
  p.ell(c[0], c[1], 45, 105, { w: 1.2 }); p.ell(c[0], c[1], 105, 32, { w: 1.2 });
  p.ell(c[0], c[1], 122, 122, { w: 1.6 }, -1.9, 1.9);
  p.line(c[0], c[1] + 122, c[0], 400, { w: 2 }); p.ell(c[0], 410, 60, 14, { w: 2 });
  p.hatch(110, 200, 150, 230, 5, 7, -7);
  p.note('?', 140, 505, 64);
  return p.items;
}
function cup() {
  const p = new Pen(61);
  p.ell(150, 210, 85, 22, { w: 2.2 });
  p.line(65, 210, 82, 400, { w: 2.2 }); p.line(235, 210, 218, 400, { w: 2.2 });
  p.ell(150, 400, 68, 16, { w: 2 }, 0, 3.14);
  p.ell(250, 300, 42, 55, { w: 2.2 }, -1.5, 1.5);
  p.stroke([[120, 180], [110, 150], [126, 120], [114, 90]], { w: 1.4 }); p.stroke([[170, 180], [160, 150], [176, 120], [164, 90]], { w: 1.4 });
  p.hatch(180, 300, 205, 380, 5, 8, -8);
  p.note('?', 135, 505, 64);
  return p.items;
}

const DRAWINGS = [intro(), book(), pencil(), apple(), clock(), globe(), cup()];
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
      ctx.font = `italic 600 ${it.size}px "Bradley Hand","Noteworthy","FreeSerif",cursive`;
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
