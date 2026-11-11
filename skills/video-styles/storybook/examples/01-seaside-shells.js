/* @example
visualIntent: On the seaside page, Wren walks in along the beach and talks; three painted shells, a fish and a boat paint themselves onto the sand as she names them; the page text inks in beside the painting.
narration: Down by the sea, Wren found a pink shell, a silver fish in a rock pool, and a little red boat that had washed ashore.
*/
const b = S.book(root);
const P = !V.isLandscape;
const pr = P ? { x: 0, y: V.height * 0.03, w: V.width, h: V.height * 0.6 } : { x: V.width * 0.03, y: V.height * 0.04, w: V.width * 0.6, h: V.height * 0.92 };
const pt = S.painting({ location: "seaside", time: "day", x: pr.x, y: pr.y, w: pr.w, h: pr.h, edge: P ? "b" : "soft" });
const wren = S.character("wren", { x: pr.x + pr.w * 0.26, y: pt.ground(0.26), height: pr.h * 0.62 });
wren.enter(0.3, "walk-left").talk();
const finds = [["shell", "shell"], ["fish", "fish"], ["boat", "boat"]];
finds.forEach(([obj, word], i) => {
  const t = Math.min(V.at(word) - 0.2, V.duration - 1);
  const x = pr.x + pr.w * (0.5 + i * 0.16);
  S.object(obj, { x, y: pt.ground(0.5) - V.s(40), size: V.s(P ? 110 : 120) }).paintOn(t, 1);
  wren.gesture(t - 0.1, i === 2 ? "open" : "point", 1.4);
});
const tb = P ? { x: V.width * 0.09, y: V.height * 0.66, w: V.width * 0.82, h: V.height * 0.27 } : { x: V.width * 0.655, y: V.height * 0.18, w: V.width * 0.3, h: V.height * 0.64 };
S.pageText("Down by the sea, Wren found a *pink shell*, a silver fish in a rock pool, and a little red boat that had washed ashore.", { ...tb, size: V.s(P ? 46 : 44), dropCap: !P })
  .show(0.4)
  .speak(0.3);
