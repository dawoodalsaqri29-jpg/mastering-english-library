/* @example
visualIntent: Dr. Ada explains orbits on the space set while Hoot the owl watches; a paper moon circles a paper planet in stop-motion steps; the key idea lands as cut-out word strips.
narration: The Moon is always falling towards Earth, but it moves sideways so fast that it keeps missing. That is an orbit.
*/
const sc = S.scene(root, { set: "space" });
const P = V.isPortrait;
const ada = S.puppet("ada", { parent: sc.front, x: V.width * (P ? 0.26 : 0.16), y: sc.ground + V.s(30), height: V.height * (P ? 0.36 : 0.56) });
ada.place(0, "drop").talk().look(0, 1);
const hoot = S.puppet("hoot", { parent: sc.front, x: V.width * (P ? 0.78 : 0.88), y: sc.ground + V.s(20), height: V.height * (P ? 0.36 : 0.56), face: -1 });
hoot.place(0.4, "pop").look(0, -1);

// planet + orbiting moon, positioned with the stepped clock
const cx = V.width * (P ? 0.5 : 0.52), cy = V.height * (P ? 0.42 : 0.42);
const earth = S.prop("globe", { parent: sc.mid, x: cx, y: cy, size: V.s(P ? 220 : 240) });
earth.place(0.2, "pop");
const moon = S.prop("moon", { parent: sc.mid, x: cx, y: cy, size: V.s(90) });
moon.place(0.6, "pop");
const R = V.s(P ? 260 : 300);
S.onStep((ts) => {
  const a = ts * 1.1;
  moon.el.style.left = cx + Math.cos(a) * R + "px";
  moon.el.style.top = cy + Math.sin(a) * R * 0.45 + "px";
  moon.el.style.zIndex = Math.sin(a) > 0 ? 2 : 0;
});
const tFall = V.at("falling") - 0.2;
ada.gesture(tFall, "point");
hoot.gesture(V.at("missing") - 0.1, "shock");
const box = V.el("div", { parent: sc.top, style: { position: "absolute", left: "8%", right: "8%", top: (P ? 8 : 8) + "%", display: "flex", justifyContent: "center" } });
S.cutText("That is an *orbit*", { parent: box, mode: "strip", size: V.s(P ? 80 : 88), maxLines: 2 }).place(V.at("orbit") - 0.6, { stagger: 0.12 });
ada.gesture(V.at("orbit"), "cheer");
