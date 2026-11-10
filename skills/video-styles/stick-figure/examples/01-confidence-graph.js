/* @example
visualIntent: Juno walks in beside a hand-drawn graph of confidence against knowledge, points as the line crashes, a "you are here" marker lands on the peak and she shrugs with sweat drops.
narration: When you learn a little about something, your confidence shoots up. Learn a bit more, and it crashes. Most of us are right here, at the peak. Sorry.
*/
const W = V.width, H = V.height, P = V.isPortrait;
S.paper(root);
const g = S.graph({
  x: W * 0.07, y: H * (P ? 0.07 : 0.09), w: W * (P ? 0.86 : 0.64), h: H * (P ? 0.5 : 0.8),
  type: "line", values: [1, 8, 3, 2, 4, 6], xLabel: "HOW MUCH I KNOW", yLabel: "CONFIDENCE",
  at: 0.2, dataAt: V.at("confidence") - 0.3, dataDur: 2.2, caps: true,
});
const juno = S.figure("juno", { x: P ? W * 0.3 : W * 0.97, y: H * 0.92, h: H * (P ? 0.26 : 0.46), facing: P ? "right" : "left", at: 0.1 });
if (!P) juno.walkTo(W * 0.84, 0.3, 1.3);
juno.talk(0, V.duration);
juno.pose("point", V.at("crashes") - 0.2);
const peak = g.pts[1];
S.youAreHere(peak.x, peak.y, { at: V.at("right here") - 0.3, dx: 1, dy: -0.3 });
juno.pose("shrug", V.at("sorry") - 0.3).mark("sweat", V.at("sorry"), 1.5);
