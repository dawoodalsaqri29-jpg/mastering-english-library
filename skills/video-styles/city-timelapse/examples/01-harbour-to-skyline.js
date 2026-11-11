/* @example
visualIntent: The island city grows from a fort to a glass skyline while the year ticks; a callout marks the old fort, then the first bridge; the camera pushes in and turns as the towers rise.
narration: A wooden fort at the tip of the island. Two hundred years later the first bridge crossed the river, and within another century the towers had taken over the skyline.
*/
const W = S.city.world(root, { city: "New Harbor", preset: "island", style: "american", seed: 7, yearFrom: 1609, yearTo: 2024, keyDates: { settlement: 1624, village: 1660, town: 1760, grid: 1811, industry: 1850, skyscraper: 1900, modern: 1960 }, viewport: S.city.layout() });
const tFort = V.at("fort") - 0.2, tBridge = V.at("bridge") - 0.2, tTowers = V.at("towers") - 0.2;
W.yearSchedule([[0.3, 1609], [tFort, 1626], [tBridge, 1883], [tTowers, 1960], [V.duration - 0.8, 2024]]);
W.camera.orbit(16, 0.86);
W.camera.to({ pitch: 38 }, tTowers, 3, "inOutSine");
S.city.vignette(root);
S.city.tag(root, "New Harbor", "island between two rivers");
S.city.yearCounter(root, W, { population: true, now: 2024 });
S.city.lowerThird(root, [
  { at: tFort, title: "A wooden fort", sub: "Thirty houses and a palisade" },
  { at: tBridge, title: "The first bridge", sub: "Steam, steel and the river crossed" },
  { at: tTowers, title: "The towers take over", sub: "Glass and steel at golden hour" },
]);
const fort = S.city.landmark(W.M, "fort");
if (fort) W.label(fort.x, fort.y, fort.z0 + 0.3, "The fort", { at: tFort + 0.4, until: tBridge, color: "#F2A33A" });
const B = W.M.bridges[0];
if (B) W.label((B.a[0] + B.b[0]) / 2, (B.a[1] + B.b[1]) / 2, 0.4, "First bridge", { at: tBridge + 0.6, until: tTowers, color: "#4FA3E0" });
