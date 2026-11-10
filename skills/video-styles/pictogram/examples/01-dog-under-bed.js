/* @example
visualIntent: A bedroom at 2 AM: the dog bolts under the bed as the word is spoken, the figure sits up and looks, the lights flicker, then a huge stamp slams in on "with" and a red arrow points at the bed.
narration: If your dog ever hides under your bed at two in the morning, do not call for it. Get under there with it.
*/
const W = V.width, H = V.height, P = V.isPortrait;
const sc = S.pictogram(root, { mode: "light" });
const room = S.setting("bedroom");
const you = S.figure("you", { x: W * room.bedSlot, y: sc.floor - room.objs.bed.size * 0.26, h: P ? Math.min(W, H) * 0.4 : H * 0.44, facing: "left", pose: "sit-bed", at: 0.1 });
const dog = S.figure("dog", { x: W * room.slots[0], y: sc.floor, h: P ? Math.min(W, H) * 0.2 : H * 0.22, facing: "left", pose: "stand", at: 0.25 });
S.clockStamp("2:00 AM", 0.4, { pos: P ? "top-right" : "bottom-left", y: P ? 0.22 : 0.93, size: "sm" });
const tHide = V.at("hides") - 0.4;
dog.runTo(room.objs.bed.x + room.objs.bed.size * 0.05, tHide, 0.6).pose("hide", tHide + 0.6);
dog.tremble(tHide + 0.6, 4, 1);
you.pose("look", tHide + 0.3);
S.flicker(V.at("morning") - 0.1, 0.9, 0.4);
const tStamp = V.at("with") - 0.1;
you.pose("point-down", tStamp);
S.stamp("GET UNDER THERE *WITH* IT", tStamp, { pos: "top", y: P ? 0.13 : 0.12, size: P ? "lg" : "xl", maxWidth: 0.92, lines: P ? 2 : 1 });
S.arrowTo(room.objs.bed, tStamp + 0.3, { from: "top" });
S.cameraTo({ cx: room.objs.bed.x, cy: sc.floor - H * 0.2, z: 1.08 }, tStamp, 0.3, "outCubic");
