/* @example
visualIntent: Rival Vex challenges Kit in Neon City; a custom scoreboard window compares two strategies while each character cheers when their point is made.
narration: Vex says speed wins every race. But Kit knows that steady practice beats talent when talent doesn't practice.
*/
const g = S.game(root, { world: "city", intro: "wipe" });
const boxH = g.portrait ? 70 : 48;
g.groundY = g.H - boxH - 14;
const kit = g.actor("kit", { x: Math.round(g.W * 0.25), scale: 2 });
const vex = g.actor("vex", { x: Math.round(g.W * 0.75), face: -1, scale: 2 });
const tV = V.at("speed"), tK = V.at("steady");
vex.cheer(tV, 0.8);
kit.cheer(V.at("practice", tK), 1.2);
g.shake(tK, 2, 0.3);
g.window(Math.round(g.W / 2) - 60, 18, 120, 36, {
  at: 0.3, style: "dark", title: "VS",
  draw(ctx, t, x, y, w) {
    S.pixel.text(ctx, "SPEED", x + 10, y + 8, { color: t >= tV ? S.palette.red : S.palette.grey2 });
    S.pixel.text(ctx, "PRACTICE", x + w - 10, y + 20, { align: "right", color: t >= tK ? S.palette.lime : S.palette.grey2 });
  },
});
g.dialog([
  { who: "vex", text: "Speed wins every race.", at: V.at("vex") - 0.1, end: tK - 0.2 },
  { who: "kit", text: "Steady practice beats talent when talent doesn't practice.", at: tK - 0.1 },
], { y: g.H - boxH - 5, h: boxH });
