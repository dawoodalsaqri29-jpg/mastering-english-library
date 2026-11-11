/* @example
visualIntent: Micro-world: three cute bacteria swim in from the left; on "doubles" each one splits into two with an elastic pop; a counter shows the population growing; Zib reacts.
narration: A single bacterium can split in two every twenty minutes, so its population doubles again and again.
*/
const ctx = S.scene(root, { world: "micro" });
const W = ctx.W, H = ctx.H;
const tSplit = S.when("doubles", 0.45);
const tTitle = S.when("bacterium", 0.1);

S.say(ctx, "Every *20 minutes*", { x: W / 2, y: H * 0.13, at: tTitle, size: V.isPortrait ? 80 : 84 });

const rows = V.isPortrait ? [0.36, 0.52, 0.68] : [0.38, 0.55, 0.72];
rows.forEach((r, i) => {
  const y = H * r;
  const a = S.illus("bacteria", { size: 220, face: true, seed: i, color: ["#7BD65A", "#3DDC97", "#FFC93C"][i] });
  a.at(-200, y).to(0.3 + i * 0.2, { x: W * 0.42 }, 1.3, "outCubic").float(10, 3 + i * 0.4, 4);
  // the split: original slides up, a twin pops out below
  a.to(tSplit + i * 0.15, { x: W * 0.36, y: y - 40, s: 0.9 }, 0.6, "outBack");
  const twin = S.illus("bacteria", { size: 200, face: true, seed: i + 9, color: ["#7BD65A", "#3DDC97", "#FFC93C"][i] });
  twin.at(W * 0.42, y).to(tSplit + i * 0.15, { x: W * 0.56, y: y + 40 }, 0.6, "outBack").enter(tSplit + i * 0.15, "pop").float(10, 3.3, 4);
  S.burst(ctx, W * 0.46, y, tSplit + i * 0.15, { radius: 120, count: 10, size: 9 });
});

const n = S.bigNumber(ctx, { value: 6, from: 3, at: tSplit, x: V.isPortrait ? W / 2 : W * 0.82, y: V.isPortrait ? H * 0.84 : H * 0.5, size: 200, color: "#FFD43B" });
n.float(6, 4, 1);

const zib = S.creature("zib", { x: V.isPortrait ? W * 0.16 : W * 0.1, y: V.isPortrait ? H * 0.86 : H * 0.8, size: 200, look: [1, -0.5] });
zib.enter(0.2, "pop").float(14, 3.8, 4).feel("wow", tSplit + 0.3).feel("excited", tSplit + 1.2);
