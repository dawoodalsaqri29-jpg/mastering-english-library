/* @example
visualIntent: Og on the savanna watches as a year counter races into the future and the sun in the sky swells into a red giant on "bigger"; the world tints red, embers fall, the thermometer climbs on "hotter" and Og's face goes from curious to deadpan sweating.
narration: Give it a billion years and the sun gets bigger. Then hotter. By the end, there is nowhere left to stand, and honestly, nobody left to complain.
*/
const sc = S.scene("savanna");
const og = S.character("og", { x: sc.portrait ? sc.Ww * 0.5 : sc.Ww * 0.3, facing: "right", expression: "thinking", pose: "look-around" });
S.narrate(og);
const tBig = V.at("bigger");
const tHot = V.at("hotter", tBig);
const tEnd = V.at("nowhere", tHot);

S.yearCounter({ from: 2025, to: 1000000000, at: 0.3, dur: Math.max(1.5, tBig - 0.3), x: 0.5, y: 0.13 });

// a sun that swells in the sky layer
const sunX = sc.Ww * 0.72, sunY = 470;
const sun = V.el("circle", { cx: sunX, cy: sunY, r: 120, fill: "#FFE27A", parent: sc.layers.sky.g });
const halo = V.el("circle", { cx: sunX, cy: sunY, r: 150, fill: "#FF6A2A", opacity: 0.25, parent: sc.layers.sky.g });
sc.layers.sky.g.insertBefore(halo, sun);
sc.onFrame((t) => {
  const p = V.progress(t, tBig - 0.2, tEnd + 1, "inOutSine");
  const r = 120 + p * 560 + Math.sin(t * 2) * 6;
  sun.setAttribute("r", r); halo.setAttribute("r", r * 1.25);
  sun.setAttribute("fill", p < 0.5 ? "#FFE27A" : "#FF8A3A");
});
S.tint("#FF5A1A", 0.4, tBig, 2.5);
S.weather("embers", { count: 30, at: tHot });
S.indicator("hot", tHot - 0.2, { label: "100 C", level: 1 });

S.headline("THE SUN *GROWS*", tBig, { pos: "top", y: 0.3, x: sc.portrait ? 0.5 : 0.62, size: "md", color: "yellow", until: tEnd });
og.expression("shocked", tBig, 0.15).mark("?!", tBig + 0.1, 1.5).pose("point-up", tBig, 0.3);
og.expression("hot", tHot, 0.2).pose("fan", tHot, 0.4).sweatOn(tHot);
og.hold("fan", tHot, null, { size: 0.9 });
og.expression("deadpan", tEnd, 0.2).mark("...", tEnd + 0.1, 2).pose("shrug", tEnd, 0.4);
S.headline("NOBODY LEFT", tEnd, { pos: "bottom", color: "white", size: "md" });

const cam = S.camera();
cam.set({ zoom: 1.0, y: 520 });
cam.to({ zoom: 1.08, x: sc.Ww * 0.5, y: 480 }, 0.3, Math.max(1, tBig), "inOutSine");
cam.to({ actor: og, zoom: 1.3, focusY: 220 }, tEnd - 0.2, 0.8);
