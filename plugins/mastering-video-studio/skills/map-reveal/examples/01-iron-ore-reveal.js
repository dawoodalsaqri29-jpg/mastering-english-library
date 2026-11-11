/* @example
visualIntent: Australia from above; a red arrow sweeps into the Pilbara, a target ring pulses, the camera dives in and an underground cross-section unfolds showing a glowing iron deposit while a stat badge counts to 55 billion tons.
narration: In the far north-west of Australia, under the red dust of the Pilbara, geologists found a single body of iron ore so big it holds fifty-five billion tons.
*/
const m = S.map(root, { region: "australia" });
const tP = V.at("Pilbara"), tFound = V.at("found", tP), tTons = V.at("billion", tFound);
S.kicker("DISCOVERY", { at: 0.2 });
S.zone("pilbara", { at: tP - 0.7, r: 0.09, color: "red" });
S.ring("pilbara", { at: tP - 0.4, r: 0.055 });
S.arrow("auto", "pilbara", { at: tP - 0.9 });
S.label("pilbara", "The Pilbara", { at: tP - 0.05, box: true, sub: "WESTERN AUSTRALIA", pos: V.isPortrait ? "below" : "above", dy: V.isPortrait ? 40 : -24 });
S.headline("WHAT THEY FOUND *UNDERNEATH*", { at: tFound - 0.1, pos: "top", end: V.isLandscape ? null : tFound + 1.2 });
S.camera.push(1.06, 0, Math.max(0.8, tP - 0.9));
S.camera.fly("pilbara", 2.4, tP - 0.8, 1.8);
const sp = S.pt("pilbara");
S.camera.to(V.isPortrait ? sp.x : sp.x + V.width * 0.14, V.isPortrait ? sp.y + V.height * 0.12 : sp.y, 3.2, tFound + 0.4, 1.2);
const xs = S.crossSection({ at: tFound + 0.9, kind: "iron", label: "55 BILLION TONS", depth: "1 KM", title: "CROSS-SECTION" });
S.flash(xs.reveal, 0.35);
S.stat({ at: Math.max(xs.reveal + 0.3, tTons - 0.1), value: 55, suffix: " BN TONS", caption: "iron ore", pos: V.isPortrait ? "tr" : "bl", color: "orange" });
