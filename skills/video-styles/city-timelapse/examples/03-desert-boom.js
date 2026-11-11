/* @example
visualIntent: A desert town explodes into a boomtown: the year races from 1905 to 1990, an obelisk-style monument rises on "monument", the Railtown district is highlighted on "railway", and the camera flies over.
narration: The railway came first, and a tent camp by the tracks became a town. Then water, then the highway, and by nineteen ninety a monument marked the spot where it all began.
*/
const W = S.city.world(root, { city: "Dry Springs", preset: "desert", style: "desert", seed: 21, yearFrom: 1880, yearTo: 1990, keyDates: { settlement: 1905, village: 1912, town: 1925, grid: 1935, industry: 1945, skyscraper: 1965, modern: 1985 }, viewport: S.city.layout() });
const tRail = V.at("railway") - 0.2, tWater = V.at("water") - 0.2, tMon = V.at("monument") - 0.2;
W.yearSchedule([[0.3, 1880], [tRail, 1905], [tWater, 1935], [tMon, 1975], [V.duration - 0.7, 1990]]);
S.city.applyCamera(W, "flyover");
S.city.vignette(root);
S.city.tag(root, "Dry Springs", "desert grid");
S.city.yearCounter(root, W, { population: true });
const D = S.city.district(W.M, "Railtown", 2);
W.focus = { key: D.key, color: "#F2A33A", kFn: (t) => 0.5 * S.city.prog(t, tRail + 0.3, 0.6) * (1 - S.city.prog(t, tWater, 0.6)), glowFn: (t) => 0.5 };
W.label(D.cx, D.cy, D.z + 0.2, "RAILTOWN", { at: tRail + 0.5, until: tWater, color: "#F2A33A", big: true, dot: false, lift: 80 });
const mon = S.city.addLandmark(W.M, "obelisk", "Founders' monument", { minD: 0.5, maxD: 4 });
if (mon) { mon.qFn = (t) => S.city.prog(t, tMon, 1.8, "outCubic"); W.label(mon.x, mon.y, mon.z0 + 2.2, "Founders' monument", { at: tMon + 1.2, color: "#FFFFFF" }); }
S.city.lowerThird(root, [
  { at: tRail, title: "Railtown", sub: "A tent camp beside the tracks" },
  { at: tWater, title: "Water and the grid", sub: "Canals, lawns and straight streets" },
  { at: tMon, title: "Boomtown", sub: "Glass towers where the camp stood" },
]);
