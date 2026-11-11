/* @example
visualIntent: Africa; a cyan dotted route with a ship head draws north from Lake Victoria through Khartoum and Aswan to Cairo while the camera follows, then pulls wide for a headline and a 6,650 km stat.
narration: The Nile starts at Lake Victoria, pushes north through Khartoum, squeezes past Aswan and finally reaches the sea at Cairo, six thousand six hundred and fifty kilometres later.
*/
const m = S.map(root, { region: "africa" });
const t0 = V.at("starts"), tEnd = V.at("Cairo", t0 + 1);
S.kicker("THE LONGEST RIVER", { at: 0.2 });
const r = S.route(["lake-victoria", "khartoum", "aswan", "cairo"], { at: t0, dur: Math.max(2, tEnd - t0), style: "dotted", head: "ship", color: "cyan" });
["Lake Victoria", "Khartoum", "Aswan", "Cairo"].forEach((name, i) => S.label(["lake-victoria", "khartoum", "aswan", "cairo"][i], name, { at: r.times[i] - 0.1, pos: i % 2 ? "below" : "above", box: true, bar: "cyan", size: 28 }));
S.ring("cairo", { at: r.times[3] - 0.2, r: 0.035, rings: 2 });
S.camera.track((t) => { const h = r.head(t); return { x: h.x, y: h.y, zoom: 1.6 }; }, Math.max(0.2, t0 - 0.6), 1);
S.camera.wide(tEnd + 0.3, 1.6, { fill: 1 });
S.headline("6,650 KM *NORTH*", { at: tEnd + 0.4, pos: V.isPortrait ? "bottom" : "top" });
S.stat({ at: tEnd + 0.9, value: 6650, suffix: " KM", caption: "source to sea", pos: V.isPortrait ? "tr" : "br", color: "cyan" });
