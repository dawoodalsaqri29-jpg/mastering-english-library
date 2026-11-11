/* @example
visualIntent: A lightbulb is drawn and labelled, an arrow is drawn while the camera pans right to a rocket, then the camera pulls back to show the whole board.
narration: Every business starts as a tiny idea. But an idea is worth nothing until you act on it. Take the first step, and that idea can launch into something huge.
*/
const W = V.width, H = V.height;
S.board(root, { hand: "light" });
const big = Math.min(W, H);

// 1. the idea
const bulb = S.doodle("lightbulb", { x: W * 0.3, y: H * 0.42, size: big * 0.42, at: Math.max(0.2, V.at("idea") - 0.9) });
const label = S.write("a tiny *idea*", { x: bulb.cx, y: bulb.y + bulb.h + S.u(60), size: S.u(64), at: bulb.t1 + 0.05 });

// 2. "worth nothing" — write it and cross it out
const worth = S.write("= $0 ?", { x: W * 0.72, y: H * 0.4, size: S.u(110), color: "red", at: V.at("nothing") - 0.3 });
S.circle(worth, { at: worth.t1 + 0.1, color: "blue" });

// 3. travel right to fresh board while the hand draws the connecting arrow
const tPan = V.at("step") - 0.4;
S.panTo(W * 1.5, H * 0.5, { at: tPan, dur: 1.2 });
const rocket = S.doodle("rocket", { x: W * 1.72, y: H * 0.45, size: big * 0.46, at: V.at("launch") - 0.6 });
S.arrow(worth, rocket, { at: tPan + 0.1, dur: 1.0, color: "blue", bend: -0.25 });
const huge = S.write("something *huge*", { x: rocket.cx, y: rocket.y + rocket.h + S.u(60), size: S.u(70), at: rocket.t1 + 0.05 });
S.underline(huge, { double: true });

// 4. pull back to reveal the whole board
S.view({ x: bulb.x - S.u(80), y: H * 0.08, w: rocket.x + rocket.w - bulb.x + S.u(160), h: H * 0.84 }, { at: Math.min(V.duration - 1.6, huge.t1 + 0.6), dur: 1.2 });
