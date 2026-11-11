/* @example
visualIntent: Pip floats in space beside a spinning Earth; on "atmosphere" a glowing ring pops around the planet, and on "breathe" the Earth shape morphs into a heart while sparkles burst.
narration: Our planet is wrapped in a thin atmosphere, a blanket of air that lets every living thing breathe.
*/
const ctx = S.scene(root, { world: "space" });
const portrait = V.isPortrait;
const ex = portrait ? ctx.W / 2 : ctx.W * 0.6, ey = portrait ? ctx.H * 0.38 : ctx.H * 0.48;
const size = Math.min(ctx.W, ctx.H) * 0.5;

const earth = S.illus("earth", { x: ex, y: ey, size: size });
earth.pop(0.2).float(12, 4.5, 2);

// atmosphere ring that pops in on its word
const tAtm = S.when("atmosphere", 0.35);
const ring = S.svgEl("circle", { r: size * 0.62, fill: "none", stroke: "#8FE3FF", "stroke-width": 18, opacity: 0.6 }, ctx.world);
S.actor(ring).at(ex, ey).enter(tAtm, "grow").pulse(0.03, 1.8);
S.tag(ctx, "Atmosphere", { x: ex, y: ey + size * 0.72, at: tAtm + 0.1, color: "sky" });

// on "breathe" the planet hands over to a morphing heart
const tB = S.when("breathe", 0.75);
earth.exit(tB, "shrink", 0.35);
const heart = S.morph([
  { shape: "circle", color: "#2F86F6", at: 0 },
  { shape: "heart", color: "#FF5E7E", at: tB },
], { x: ex, y: ey, size: size * 0.95, face: true });
heart.enter(tB - 0.05, "pop", 0.5).float(10, 3.6, 3);
S.burst(ctx, ex, ey, tB + 0.3, { radius: size * 0.8, count: 18 });

const pip = S.creature("pip", { x: portrait ? ctx.W * 0.22 : ctx.W * 0.18, y: portrait ? ctx.H * 0.78 : ctx.H * 0.66, size: 260, look: [1, -0.3] });
pip.enter(0.1, "drop").float(10, 3.4, 3).wave(0.9, 1.4);
pip.feel("wow", tAtm).feel("happy", tB + 0.2);

S.particles(ctx, { kind: "sparks", count: 16, colors: ["#FFD43B", "#FFFFFF"], speed: 40 });
