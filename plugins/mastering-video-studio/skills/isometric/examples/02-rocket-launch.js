/* @example
visualIntent: A launch pad on a little island; a crowd waits, the countdown counter ticks, and the rocket lifts off on "liftoff" while the camera tilts up to follow.
narration: Thousands of people gather at the coast. Engineers run the final checks, and at exactly nine thirty, liftoff! The rocket climbs into the sky.
*/
const w = S.iso.world(root, { cols: 9, rows: 8, theme: "dusk", viewport: S.iso.layout(false) });
const tLift = V.at("liftoff") - 0.1;
w.area(2, 1, 6, 5, "plaza");
const rocket = w.building("rocket", 3, 2, { launch: tLift });
w.label(rocket, "Launch pad", { at: 0.4, until: tLift });
w.building("tower", 6, 0, { w: 2, d: 2, floors: 3, style: "glass", label: "Mission control", labelAt: V.at("engineers") });
w.crowd(2, 6.5, 6, { at: 0.3, wave: true });
w.crowd(6, 6.8, 5, { at: 0.5, wave: true });
w.river([[0, 7], [8, 7]]);
w.boat([[0.5, 7.5], [8.5, 7.5]], { speed: 0.4 });
w.tree(0, 0, { kind: "pine" }); w.tree(8, 4, { kind: "round" });
w.label([4, 3, 6], "", { at: tLift + 0.6, value: { from: 0, to: 1200, suffix: " km/h", dur: 2.5 }, color: w.pal.accents[0], lift: 0 });
w.clouds(3, { z: 6 });
w.camera.set({ zoom: 1.0 });
w.camera.to({ z: 2.2, zoom: 0.9 }, tLift + 0.5, 3, "inOutSine");
