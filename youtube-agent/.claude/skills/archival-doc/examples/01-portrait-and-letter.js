/* @example
visualIntent: A sepia studio portrait develops on the desk while the camera pushes toward the face; a handwritten letter slides in beside it and is written as the quote is read, ending on a lower-third.
narration: Clara Barton was forty when the war began. She wrote to her cousin: I may be compelled to face danger, but never fear it.
*/
S.desk(root, { surface: "wood" });
const W = V.width, H = V.height, P = V.isPortrait;
const t1 = V.at("Clara"), t2 = V.at("wrote", t1), t3 = V.at("danger", t2);
const ph = S.photo({ subject: "portrait-woman", tone: "sepia", cx: P ? W * 0.5 : W * 0.33, cy: P ? H * 0.3 : H * 0.5, w: P ? W * 0.62 : H * 0.6, rot: -2, caption: "Clara, 1861" });
S.place(ph, 0.1, "develop", { dur: 2 });
const lt = S.letter({ text: "I may be compelled to face danger, but never fear it.", salutation: "Dear cousin,", signature: "Clara", date: "1861", cx: P ? W * 0.5 : W * 0.72, cy: P ? H * 0.72 : H * 0.5, w: P ? W * 0.74 : H * 0.62, h: P ? W * 0.74 * 0.9 : H * 0.62 * 1.15, rot: 2, writeAt: t2 + 0.6 });
S.place(lt, t2 - 0.6, "slide", { from: P ? "bottom" : "right" });
S.camera.focus(ph, 0, 0.01, { fill: 0.8 });
S.camera.kenBurns({ rect: ph.imgRect() }, 0.6, Math.max(1, t2 - 1.2), { cut: false, from: { fx: 0.5, fy: 0.5 }, to: { fx: 0.5, fy: 0.4, zoom: 1.25 } });
S.camera.focus(lt, t2 - 0.4, 1.6, { fill: 0.9 });
S.camera.wide(Math.max(t3 + 0.8, V.duration - 2), 1.8, { fill: 0.96 });
S.lowerThird("Clara Barton", { sub: "Nurse, Union Army", at: t1 - 0.2, end: t2 - 0.5 });
