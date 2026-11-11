/* @example
visualIntent: Biscuit the dog hops across the beach set to three paper shells, each labelled; a typewriter label strip summarises; a taped note card flips over.
narration: Biscuit found three treasures on the beach today: a starfish, a shiny shell and an old message in a bottle.
*/
const sc = S.scene(root, { set: "ocean" });
const P = V.isPortrait;
const dog = S.puppet("biscuit", { parent: sc.front, x: V.width * 0.14, y: sc.ground + V.s(40), height: V.height * (P ? 0.4 : 0.62) });
dog.enter(0.05, "left", { hops: 2 }).talk();
const finds = [["star", "Starfish", "starfish"], ["heart", "Shiny shell", "shell"], ["drop", "Old message", "message"]];
finds.forEach(([prop, label, word], i) => {
  const t = Math.min(V.at(word) - 0.2, V.duration - 1.2);
  const x = V.width * (P ? 0.24 + i * 0.27 : 0.38 + i * 0.2);
  const pr = S.prop(prop, { parent: sc.front, x, y: sc.ground + V.s(30), size: V.s(P ? 110 : 130), ground: true });
  pr.place(t, "pop");
  dog.hopTo(t - 0.5, x - V.s(P ? 120 : 170), null, { hops: 1 });
  const box = V.el("div", { parent: sc.top, style: { position: "absolute", left: x - V.s(160) + "px", width: V.s(320) + "px", top: sc.ground - V.s(P ? 140 : 160) + "px", display: "flex", justifyContent: "center" } });
  S.cutText(label, { parent: box, mode: "label", size: V.s(P ? 28 : 34), maxLines: 1, maxWidth: V.width * (P ? 0.26 : 0.18) }).place(t + 0.3, { how: "stamp" });
});
// a taped card with the headline, flipped in by hand
const holder = V.el("div", { parent: sc.top, style: { position: "absolute", left: "10%", right: "10%", top: "7%", display: "flex", justifyContent: "center" } });
const card = S.sheet(holder, { color: S.colors.cream, edge: ["torn", "cut", "cut", "cut"] });
const piece = S.piece(card, { r: -2 });
holder.appendChild(piece.el);
S.cutText("Beach treasures", { parent: card.content, mode: "letters", size: V.s(P ? 78 : 92), maxLines: 2 });
card.content.style.padding = V.s(26) + "px " + V.s(40) + "px";
piece.place(0.2, "flip");
S.tape({ parent: holder, x: V.width * 0.4, y: V.s(4), r: -4, kind: "blue" });
