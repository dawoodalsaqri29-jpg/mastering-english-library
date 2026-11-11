/* @example
visualIntent: A little town gets electricity — a power plant rises, glowing current flows along cables to the homes, then the camera turns to show wind turbines taking over.
narration: The power plant burns fuel to make electricity. Cables carry it to every home in town. Meanwhile, out on the hills, wind turbines are quietly taking over.
*/
const w = S.iso.world(root, { cols: 12, rows: 10, viewport: S.iso.layout(true) });
S.iso.head(root, { title: "Where your *power* comes from" });
const tPlant = V.at("plant") - 0.15, tCable = V.at("cables"), tWind = V.at("wind");
const road = w.road([[0, 5], [11, 5]]);
w.car(road); w.car(road, { kind: "truck", phase: 0.5 });
w.walker([[0.5, 5.45], [11.5, 5.45]], { speed: 0.4 });
const plant = w.building("factory", 1, 1, { w: 3, d: 2, at: tPlant });
w.label(plant, "Power plant", { at: tPlant + 0.4 });
[[6, 1], [8, 1], [6, 7], [8, 7]].forEach(([x, y], i) => w.building("house", x, y, { at: tCable + 0.3 + i * 0.15, anim: "drop" }));
w.flow([[2.5, 3, 0.05], [2.5, 4.4, 0.05], [9, 4.4, 0.05]], { at: tCable, color: "#FFB020", speed: 2.4 });
w.flow([[7, 5.6, 0.05], [7, 6.8, 0.05]], { at: tCable + 0.6, color: "#FFB020" });
[[1, 7], [2, 8], [3, 7]].forEach(([x, y], i) => w.building("turbine", x, y, { at: tWind + i * 0.12 }));
w.label([2.5, 8, 3], "Wind farm", { at: tWind + 0.5, color: w.pal.accents[2] });
w.tree(10, 8, { kind: "pine" }); w.tree(11, 0, { kind: "round" });
w.clouds(2);
S.iso.breathe(w, { sway: 4 });
w.camera.to({ yaw: 135, zoom: 0.98 }, tWind - 0.6, 1.8, "inOutCubic");
