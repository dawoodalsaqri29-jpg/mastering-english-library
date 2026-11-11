/* @example
visualIntent: Inside a campaign tent two commanders stand over a candle-lit map table; the emperor speaks and points at the map while the marshal nods; on "dawn" the banner "ATTACK AT DAWN" slams in and the camera pushes down onto the map.
narration: The marshal wanted to wait for the guns, but the emperor had decided: the army would attack at dawn.
*/
const w = S.scene(root, { bare: true, dust: false });
S.interior({ kind: "tent" });
const W = V.width, H = V.height, P = V.isPortrait;
const tb = S.table({ x: W / 2, y: H * (P ? 0.82 : 0.9), w: W * (P ? 0.96 : 0.72), candles: 2, faction: "bluecoat" });
const size = Math.min(W, H) * (P ? 0.46 : 0.52);
const emperor = S.general({ x: W * 0.3, y: tb.top + H * 0.02, size, faction: "bluecoat", facing: 1, seed: "emperor" });
const marshal = S.general({ x: W * 0.72, y: tb.top + H * 0.02, size: size * 0.94, faction: "bluecoat", facing: -1, seed: "marshal" });
[emperor, marshal].forEach((g) => g.el.parentNode.insertBefore(g.el, tb.el));
const tWait = V.at("wait"), tDawn = V.at("dawn", tWait);
marshal.speak(0.2, tWait + 1.2).point(0.4, tWait + 1.2);
emperor.speak(tWait + 1.2, V.duration).point(tWait + 1.0, V.duration);
marshal.nod(tDawn + 0.7);
S.camera.kenBurns(0, Math.max(1, tDawn - 0.3), { from: { fx: 0.5, fy: 0.5, zoom: 1.0 }, to: { fx: 0.5, fy: 0.54, zoom: 1.12 } });
S.camera.to(tb.x, tb.y - tb.d * 0.5, P ? 1.6 : 1.9, tDawn + 1.0, 1.6, { ease: "inOutCubic" });
S.banner("Attack at dawn", { at: tDawn + 0.1, end: Math.min(V.duration - 0.2, tDawn + 4.5) });
S.lowerThird("Imperial headquarters", { sub: "The night before", at: 0.6, end: tDawn - 0.2 });
