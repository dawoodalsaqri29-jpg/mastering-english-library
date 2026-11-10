/* @example
visualIntent: Rook and Brick in a tug-of-war on a black page; the rope strains, speed lines build, and on "moves" Brick stumbles with an impact frame, a red force arrow and a slammed "TENDONS WIN".
narration: Everyone bets on the big guy. Then the rope moves, and the lean climber drags him across the line, because tendons transfer force and mass just sits there.
*/
const tMove = V.at("moves");
const st = S.scene({ bg: "black" });
const P = V.isPortrait;
const fl = st.frame(P ? 0.26 : 0.27, "pair"), fb = st.frame(P ? 0.74 : 0.73, "pair");
const rook = S.figure("rook", { x: fl.x, y: fl.y, scale: fl.scale, facing: "right", expression: "focus" });
const brick = S.figure("brick", { x: fb.x, y: fb.y, scale: fb.scale * 1.06, facing: "left", expression: "scowl" });
rook.exercise("tug", 0, { period: 1.1 });
brick.exercise("tug", 0.15, { period: 1.3 });
S.prop("rope", { a: rook, b: brick, length: 1500 });
S.floor(st.Ww / 2, fl.y, st.Ww * 0.9, { shadow: false });
rook.highlight("tendons", Math.max(0.2, tMove - 1.0), { pulse: false }).pulse(tMove).sweat(0.5);
brick.sweat(0.3);
st.cam.rumble(Math.max(0, tMove - 1.6), tMove, 5);
st.speedLines(Math.max(0, tMove - 0.8), tMove, { dir: "left", layer: "under", opacity: 0.35, count: 24 });
brick.pose("fall", tMove, 0.35).expression("shock", tMove).shake(tMove, 0.5, 14);
rook.pose("tug-b", tMove, 0.2).pose("cheer", Math.min(V.duration - 0.3, tMove + 0.9), 0.4).expression("proud", tMove + 0.5);
st.impact(tMove, { x: brick.x0, y: brick.y0 - 300 * brick.s, shake: 18 });
st.forceArrow(rook.x0 + 150 * rook.s, rook.y0 - 330 * rook.s, rook.x0 - 260 * rook.s, rook.y0 - 330 * rook.s, { at: tMove, until: tMove + 1.2, label: "pull" });
st.cam.punch(tMove + 0.6, 1.14, rook.x0, rook.y0 - 300 * rook.s, 0.4);
S.tag("LEAN", 0.2, { x: P ? 0.26 : 0.27, y: P ? 0.36 : 0.76, color: "#E8232A" });
S.tag("BIG", 0.35, { x: P ? 0.74 : 0.73, y: P ? 0.36 : 0.76 });
S.thumbText("*Tendons* win", tMove + 0.1, { pos: "top", size: "lg" });
