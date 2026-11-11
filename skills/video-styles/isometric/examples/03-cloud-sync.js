/* @example
visualIntent: Night city; a floating cloud above it, data arcs from phones, laptops and offices up to the cloud on each key word, a big counter of files synced.
narration: Every night your phone, your laptop and your office quietly sync with the cloud. Billions of files move while the city sleeps.
*/
const w = S.iso.world(root, { cols: 12, rows: 10, theme: "night", viewport: S.iso.layout(true) });
S.iso.head(root, { title: "While the city *sleeps*" });
const lay = S.iso.townLayout(12, 10);
const kinds = ["tower", "house", "office", "shop", "house", "tower", "park", "house", "office", "trees"];
lay.lots.forEach((l, i) => S.iso.fillLot(w, l, kinds[i % kinds.length]));
S.iso.townLife(w, lay, { cars: 1, walkers: 2 });
const cloud = w.building("cloud", 4, 3, { w: 4, d: 4, z: 4.2, at: 0.3, anim: "pop" });
w.label(cloud, "The cloud", { at: 0.6 });
[["phone", [1, 1]], ["laptop", [10, 2]], ["office", [9, 8]]].forEach(([word, p], i) => {
  const t = V.at(word);
  w.arc([p[0], p[1], 1.2], [6, 5, 4.6], { at: t, color: w.pal.accents[i + 1], height: 1.5, count: 3 });
  w.ping(p[0], p[1], { at: t, color: w.pal.accents[i + 1] });
});
w.label([6, 5, 6], "files synced", { at: V.at("billions") - 0.2, value: { from: 0, to: 2.4, suffix: "B", decimals: 1, dur: 2 }, color: w.pal.accents[3], lift: 20 });
S.iso.breathe(w, { sway: 10 });
