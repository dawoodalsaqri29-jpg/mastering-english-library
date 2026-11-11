/* @example
visualIntent: A classified memo is typed onto a green felt desk with a pinned photograph of a factory; a redaction bar crosses the location and a red DENIED stamp lands on the key word.
narration: The request reached Washington in March. The answer came back in a single line, and it was denied.
*/
S.desk(root, { surface: "felt" });
const W = V.width, H = V.height, P = V.isPortrait;
const tDen = V.at("denied");
const dh = P ? Math.min(H * 0.72, W * 0.86 * 1.3) : H * 0.9, dw = dh / 1.3;
const pic = S.photo({ subject: "factory", tone: "silver", cx: W / 2 + dw * 0.48, cy: H / 2 - dh * 0.28, w: dw * 0.5, rot: 8, mounts: false });
const doc = S.document({ header: "War Production Board", title: "Memorandum", date: "March 3, 1943", subject: "Plant conversion request", body: "Request to convert the Willow Run plant is acknowledged. After review the Board finds no materials available for this purpose. Request is returned without action.", redact: ["Willow Run"], classification: "Confidential", cx: W / 2 - (P ? 0 : dw * 0.08), cy: H / 2, w: dw, h: dh, rot: -1, typeAt: 0.8, typeEnd: Math.max(1.6, tDen - 0.8), clip: true });
S.place(pic, 0.05, "drop");
S.place(doc, 0.2, "slide", { from: "bottom" });
S.stamp(doc, "Denied", { at: tDen, fx: 0.58, fy: 0.66, color: "red" });
S.camera.focus(doc, 0, 0.01, { fill: 0.94 });
S.camera.focus(doc, 0.9, Math.max(0.8, tDen - 1.6), { fill: 0.94, zoom: 1.35, anchor: [0.5, 0.45], ease: "inOutSine" });
S.camera.focus(doc, tDen - 0.6, 0.5, { fill: 0.94 });
S.dateStamp("March 1943", { sub: "Washington, D.C.", at: 0.4 });
