/* @example
visualIntent: Hank smugly declares gravity is just a theory; an apple drops onto his head, he falls over with a dizzy spiral while Ada facepalms.
narration: Hank was sure that gravity was just a theory. Then an apple disagreed. Ada was not surprised.
*/
const W = V.width, H = V.height, P = V.isPortrait;
S.paper(root);
const Q = V.isSquare, gy = H * 0.9, fh = P ? W * 0.4 : Q ? H * 0.34 : H * 0.45;
S.ground(W * 0.08, W * 0.92, gy + S.u(2), { at: 0.05 });
const hank = S.figure("hank", { x: W * (P ? 0.4 : Q ? 0.46 : 0.58), y: gy, h: fh, facing: "left", pose: "smug", at: 0.1 });
const ada = S.figure("ada", { x: W * (P ? 0.16 : 0.22), y: gy, h: fh, facing: "right", at: 0.3 });
hank.talk(0.2, V.at("then"));
hank.say("Gravity is *just a theory*.", { at: V.at("gravity") - 0.3, until: V.at("apple") + 0.2, maxWidth: W * 0.4 });
const tA = V.at("apple") - 0.3;
const head = hank.head(tA);
const apple = S.doodle("apple", { x: head.x, y: H * 0.1, size: S.u(90), at: tA - 0.6, dur: 0.4, accent: true });
apple.piece.to({ y: head.top - S.u(30) }, tA, 0.4, "inQuad");
apple.piece.to({ x: head.x + fh * 1.1, y: gy - S.u(40), rot: 120 }, tA + 0.4, 0.6, "outQuad");
hank.fall(tA + 0.4).mark("dizzy", tA + 1.1, 3);
ada.talk(V.at("ada"), V.duration).pose("facepalm", V.at("surprised") - 0.4);
