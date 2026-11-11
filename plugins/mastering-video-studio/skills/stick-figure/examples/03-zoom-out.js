/* @example
visualIntent: Remy stands on a little hill with a "you are here" marker; the camera pulls back to reveal the Earth, then again to reveal the galaxy, each drawn and labelled as it is named.
narration: This is you, standing on a hill. Zoom out, and the hill is a speck on the Earth. Zoom out again, and the Earth vanishes inside the galaxy.
*/
const W = V.width, H = V.height;
S.paper(root, { drift: 0 });
const cx = W / 2, cy = H * 0.6, h = Math.min(W, H) * 0.32;
const E = h * 9, G = E * 9;             // world sizes of the Earth and the galaxy
const ey = cy + E * 0.4;                // Earth centre: its top is under Remy's feet
S.scribble([[cx - h * 0.9, cy + S.u(4)], [cx - h * 0.3, cy - S.u(8)], [cx + h * 0.4, cy - S.u(6)], [cx + h * 0.9, cy + S.u(4)]], { at: 0.1 });
const remy = S.figure("remy", { x: cx, y: cy - S.u(6), h: h, facing: "front", at: 0.2 });
remy.talk(0.3, V.duration).pose("wave", 0.6);
S.youAreHere(cx + h * 0.2, cy - h * 1.05, { at: V.at("you") + 0.4, dx: 1, dy: -0.4 });
const t1 = V.at("zoom") - 0.2;
S.cameraTo({ cx: cx, cy: ey, z: Math.min(W, H) / (E * 1.35) }, t1, 1.6);
const earth = S.doodle("globe", { x: cx, y: ey, size: E, at: t1 + 0.15, ws: (E * 1.35) / Math.min(W, H) });
S.write("the Earth", { x: cx, y: ey + E * 0.5, size: E * 0.07, maxWidth: E, at: Math.max(earth.t1, t1 + 1.7) });
const t2 = V.at("again") - 0.2;
S.cameraTo({ cx: cx, cy: ey, z: Math.min(W, H) / (G * 1.1) }, t2, 1.6);
const gal = S.doodle("galaxy", { x: cx, y: ey, size: G, at: t2 + 0.3, dur: 1.2, ws: (G * 1.1) / Math.min(W, H), accent: true });
S.write("the galaxy", { x: cx, y: ey + G * 0.4, size: G * 0.05, maxWidth: G, at: gal.t1 });
