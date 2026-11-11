/* @example
visualIntent: In the cosy cottage by the fire, Nana tells Oli her secret recipe; flour, honey and berries paint on as watercolor vignettes along the top of the page with labels; a fleuron and a small-caps heading frame it.
narration: Nana's secret recipe needs only three things: soft bread, golden honey and a handful of berries.
*/
const b = S.book(root);
const P = V.isPortrait;
const pr = P ? { x: 0, y: V.height * 0.4, w: V.width, h: V.height * 0.58 } : { x: V.width * 0.02, y: V.height * 0.3, w: V.width * 0.96, h: V.height * 0.68 };
const pt = S.painting({ location: "cottage", time: "dusk", x: pr.x, y: pr.y, w: pr.w, h: pr.h });
const nana = S.character("nana", { x: pr.x + pr.w * 0.3, y: pt.ground(0.3), height: pr.h * 0.64 });
const oli = S.character("oli", { x: pr.x + pr.w * 0.62, y: pt.ground(0.62), height: pr.h * 0.64, face: -1 });
nana.enter(0.3).talk().look(0, 0.6);
oli.enter(0.6).look(0, -0.6);
const head = S.label("Nana's secret recipe", { x: V.width * 0.1, y: V.height * 0.04, w: V.width * 0.8, size: V.s(P ? 34 : 30), align: "center" });
b.tl.fromTo(head, { opacity: 0 }, { opacity: 1 }, { at: 0.3, dur: 1 });
S.ornament("fleuron", { x: V.width * 0.35, y: V.height * 0.09, w: V.width * 0.3 }).paintOn(0.6);
[["bread", "soft bread", "bread"], ["honey", "golden honey", "honey"], ["berries", "berries", "berries"]].forEach(([obj, label, word], i) => {
  const t = Math.min(V.at(word) - 0.25, V.duration - 1);
  const x = V.width * (0.26 + i * 0.24), y = V.height * (P ? 0.2 : 0.17), sz = V.s(P ? 130 : 110);
  S.wash({ x: x - sz * 0.6, y: y - sz * 0.45, w: sz * 1.2, h: sz * 0.9, color: [S.colors.butter, S.colors.blush, S.colors.lilac][i] }).bloom(t - 0.2);
  S.object(obj, { x, y, size: sz * 0.8 }).paintOn(t, 1);
  const lab = S.label(label, { x: x - V.s(150), y: y + sz * 0.5, w: V.s(300), size: V.s(P ? 30 : 26), align: "center" });
  b.tl.fromTo(lab, { opacity: 0 }, { opacity: 1 }, { at: t + 0.3, dur: 0.7 });
  nana.gesture(t - 0.1, i === 1 ? "heart" : "present", 1.3);
});
oli.gesture(V.duration - 1.8, "cheer", 1.5);
