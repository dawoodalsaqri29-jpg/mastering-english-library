/* @example
visualIntent: A parchment battle map on a dark table: legion blocks at the bottom, enemy blocks at the top and a river; on "swung" a thick red arrow sweeps round the left flank with a unit riding along it, a clash burst flares behind the enemy line, and a banner "THE PERFECT TRAP" lands.
narration: The centre held just long enough, and then the cavalry swung round the flank and the trap was sprung.
*/
const w = S.scene(root, { bare: true, dust: false });
const W = V.width, H = V.height, P = V.isPortrait;
S.draw.rect(S.layer("sky").g, w.bx, w.by, w.bw, w.bh, "#2E2014");
const mw = W * (P ? 0.94 : 0.9), mh = P ? Math.min(H * 0.8, mw * 1.3) : H * 0.9;
const map = S.battleMap({ x: (W - mw) / 2, y: (H - mh) / 2, w: mw, h: mh, title: "The river crossing", terrain: { river: true, forest: 3, hills: 2, towns: [{ name: "The ford", fx: 0.6, fy: 0.5 }] } });
const def = [map.unit({ faction: "hoplite", fx: 0.4, fy: 0.3, label: "Enemy", at: 0.2 }), map.unit({ faction: "hoplite", fx: 0.6, fy: 0.28, at: 0.3 })];
const leg = [map.unit({ faction: "roman", fx: 0.35, fy: 0.76, label: "Legions", at: 0.5 }), map.unit({ faction: "roman", fx: 0.55, fy: 0.78, at: 0.6 }), map.unit({ faction: "roman", fx: 0.74, fy: 0.76, kind: "cavalry", at: 0.7 })];
const tSwing = V.at("swung"), tTrap = V.at("trap", tSwing);
map.arrow({ faction: "roman", from: [0.55, 0.74], to: [0.56, 0.4], at: Math.max(0.9, tSwing - 1.2), dur: 1.2, unit: leg[1] });
map.arrow({ faction: "roman", from: [0.74, 0.72], via: [0.95, 0.45], to: [0.68, 0.2], at: tSwing - 0.1, dur: 1.6, unit: leg[2], width: 0.018 });
map.clash(0.62, 0.24, tTrap, "roman");
S.camera.focus(map, 0, 0.01, { fill: 0.98 });
S.camera.focus(map, 0.3, Math.max(1, tSwing - 0.5), { fill: 0.98, zoom: 1.1, ease: "inOutSine" });
const c = map.pt(0.6, 0.35);
S.camera.to(c.x, c.y, Math.min(W / mw, H / mh) * (P ? 1.3 : 1.45), tSwing + 0.4, 1.6, { ease: "inOutCubic" });
if (V.duration - 1.6 > tTrap + 1) S.camera.focus(map, Math.max(tTrap + 1.2, V.duration - 2.2), 1.6, { fill: 0.98 });
S.banner("The perfect trap", { at: tTrap + 0.2, pos: P ? "bottom" : "top", end: Math.min(V.duration - 0.2, tTrap + 4.5) });
