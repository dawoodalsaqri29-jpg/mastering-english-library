/* @example
visualIntent: A globe spins to Egypt and dives into the flat map; a dashed yellow blueprint canal draws from the Mediterranean into the Qattara Depression, water floods along it and a headline slams in.
narration: Somewhere in Egypt there is a hole below sea level. The plan: dig a canal from the Mediterranean and let the water flood in, creating a brand new sea in the Sahara.
*/
const m = S.map(root, { region: "egypt-nile" });
const tPlan = V.at("plan"), tFlood = V.at("flood", tPlan), tSea = V.at("sea", tFlood);
const gl = S.globe(root, { target: "cairo", at: 0, spinDur: Math.max(1.2, Math.min(2.6, tPlan - 1.8)), holdDur: 0.4, zoomDur: 1 });
S.grid();
S.kicker("THE PLAN", { at: gl.done });
S.zone("qattara", { at: gl.done + 0.2, rx: 0.12, ry: 0.07, color: "yellow" });
S.label("qattara", "Qattara Depression", { at: gl.done + 0.5, pos: "below", dy: 50, box: true, bar: "yellow", size: 28, sub: "-133 M BELOW SEA LEVEL" });
const r = S.route(["mediterranean", "qattara"], { at: tPlan, dur: Math.max(1.2, tFlood - tPlan), style: "dashed", head: "dot", color: "yellow", width: 14, hideHead: true });
const water = S.route(["mediterranean", "qattara"], { at: tFlood, dur: 1.2, style: "solid", head: "none", color: "cyan", width: 10, stops: false });
S.camera.to(m.cam0.x, m.cam0.y, 1.3, 0, 0.01);
S.camera.to(m.cam0.x, m.cam0.y, 1, gl.zoom, 1.2, { ease: "outCubic" });
S.camera.focus(r.rect || { x: S.pt("mediterranean").x - 200, y: S.pt("mediterranean").y - 100, w: 500, h: 500 }, tPlan - 0.4, 1.3, { fill: 0.6 });
S.camera.wide(tSea - 0.2, 1.4, { fill: 1 });
S.headline("A *NEW SEA* IN THE SAHARA", { at: tSea - 0.1, pos: V.isPortrait ? "bottom" : "top" });
S.camera.shake(tSea, V.s(8), 0.4);
