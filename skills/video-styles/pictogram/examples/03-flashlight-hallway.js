/* @example
visualIntent: Pitch-black hallway; the figure's flashlight cone sweeps from the picture frame to the far door, which creaks open as it is lit; the beam swings back and finds two white eyes and a smile; hard cut to the visitor's face with a red flash and the stamp RUN.
narration: Sweep the hallway. The picture. The door at the end. If the door is open, do not go closer. Because something is already looking back. Run.
*/
const W = V.width, H = V.height, P = V.isPortrait;
const sc = S.pictogram(root, { mode: "dark", push: 0.08 });
const room = S.setting("hallway");
const you = S.figure("you", { x: W * (P ? 0.22 : 0.16), y: sc.floor, h: P ? Math.min(W, H) * 0.4 : H * 0.44, facing: "right", pose: "flashlight", at: 0.05, layer: "front" });
you.hold("flashlight");
const cone = S.cone(you, { angle: -6, spread: P ? 26 : 22, ambient: 0.06, flicker: true });
S.clockStamp("3:12 AM", 0.3, { pos: "top-right", size: "sm" });
const frame = room.objs.frame, door = room.objs.door;
const hand = you.hand(0.5);
const ang = (o) => Math.atan2(o.box(0).cy - hand.y, o.box(0).cx - hand.x) / Math.PI * 180;
cone.aim(ang(frame), V.at("picture") - 0.6, 0.6);
S.label("STILL *STRAIGHT*", frame, V.at("picture"), { x: P ? 0.5 : 0.5, y: P ? 0.14 : 0.14, from: P ? "top" : "left" });
cone.aim(ang(door), V.at("door") - 0.6, 0.7);
door.open(V.at("open") - 0.4, 60, 1.4);
S.label("*OPEN*", door, V.at("open"), { x: P ? 0.5 : 0.76, y: P ? 0.26 : 0.16, from: "top" });
you.pose("stop", V.at("closer") - 0.2);
const tEyes = V.at("looking") - 0.3;
const vis = S.figure("visitor", { x: door.x + S.u(10), y: sc.floor, h: P ? Math.min(W, H) * 0.42 : H * 0.46, facing: "left", layer: "glow", color: "transparent" });
vis.hide(0).show(tEyes);
cone.sweep(ang(door) - 18, ang(door) + 2, tEyes + 0.1, 0.35);
you.pose("scared", tEyes + 0.4).tremble(tEyes + 0.4, 2, 0.8);
S.shake(tEyes + 0.4, 0.3, S.u(12));
S.stinger(V.at("run") - 0.15, { pos: "face", stamp: "*RUN*", stampDelay: 0.3 });
