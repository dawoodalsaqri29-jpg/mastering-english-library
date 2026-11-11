/* @example
visualIntent: Chef Leo in the kitchen set lists three bread ingredients; each paper prop drops onto the counter on its word with a stencil tag, title in ransom letters.
narration: To bake bread you only need three things: flour, water and a pinch of yeast.
*/
const sc = S.scene(root, { set: "kitchen" });
const P = V.isPortrait;
const leo = S.puppet("leo", { parent: sc.front, x: V.width * (P ? 0.24 : 0.2), y: sc.ground + V.s(24), height: V.height * (P ? 0.38 : 0.6) });
leo.enter(0.1, "left").talk().look(0, 1);

const head = V.el("div", { parent: sc.top, style: { position: "absolute", left: "8%", right: "8%", top: (P ? 6 : 7) + "%", display: "flex", justifyContent: "center" } });
S.cutText("Bread = *3 things*", { parent: head, mode: "ransom", size: V.s(P ? 84 : 96), maxLines: 2 }).place(0.3);

const items = [["bread", "Flour", "flour"], ["drop", "Water", "water"], ["star", "Yeast", "yeast"]];
items.forEach(([prop, label, word], i) => {
  const t = Math.min(V.at(word) - 0.15, V.duration - 1);
  const x = V.width * (P ? 0.5 + (i - 1) * 0.28 : 0.46 + i * 0.18);
  const y = sc.ground - (P ? V.height * 0.02 : 0);
  const pr = S.prop(prop, { parent: sc.front, x, y, size: V.height * (P ? 0.12 : 0.22), ground: true, r: (i - 1) * 6 });
  pr.place(t, "drop");
  const box = V.el("div", { parent: sc.top, style: { position: "absolute", left: x - V.s(150) + "px", width: V.s(300) + "px", top: y - pr.height - V.s(90) + "px", display: "flex", justifyContent: "center" } });
  S.cutText(label, { parent: box, mode: "stencil", size: V.s(40), fit: false }).place(t + 0.4, { how: "pop" });
  leo.gesture(t - 0.05, i === 2 ? "present" : "point");
});
