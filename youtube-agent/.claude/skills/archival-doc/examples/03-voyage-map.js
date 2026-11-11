/* @example
visualIntent: A parchment map of a coastline; Lisbon, the Cape and Calicut ink in as they are named while a dotted sea route with a little ship draws between them and the camera follows it, ending wide with a lower-third.
narration: In 1497 Vasco da Gama sailed from Lisbon, rounded the Cape and ten months later reached Calicut.
*/
S.desk(root, { surface: "wood" });
const W = V.width, H = V.height;
const places = [{ name: "Lisbon", date: "1497" }, { name: "The Cape" }, { name: "Calicut", date: "1498" }];
const mw = V.isLandscape ? Math.min(W * 0.9, H * 0.88 / 0.62) : W * 0.92, mh = V.isLandscape ? mw * 0.62 : Math.min(H * 0.75, mw * 1.3);
const map = S.map({ title: "The Route to the Indies", terrain: "coast", places, cx: W / 2, cy: H / 2, w: mw, h: mh, rot: -1 });
S.place(map, 0, "fade");
const times = S.syncTimes(["Lisbon", "Cape", "Calicut"], { start: 0.8, lead: 0.25, minGap: 0.8 });
map.drawPlaces(times);
const route = map.route(times, { style: "sea" });
S.camera.focus(map, 0, 0.01, { fill: 0.94 });
S.camera.track((t) => { const p = route.head(t); return { x: p.x, y: p.y, zoom: 1.5 }; }, times[0] - 0.3, 1.2);
const tOut = Math.min(V.duration - 1.5, times[2] + 0.9);
S.camera.focus(map, tOut, 1.5, { fill: 0.94 });
S.lowerThird("Vasco da Gama", { sub: "Lisbon to Calicut, 1497 – 1498", at: tOut });
