/* @example
visualIntent: A stressed stick figure surrounded by bills is drawn; the hand wipes the board clean with an eraser, then slides in a piggy bank and draws a happy figure next to it.
narration: Most people live paycheck to paycheck, buried in bills and worry. So let's wipe the slate clean. Start with a simple savings habit, and watch how quickly things change.
*/
const W = V.width, H = V.height, P = V.isPortrait;
S.board(root, { hand: "brown", sleeve: "#5B6B4A" });
const fig = Math.min(H * 0.45, W * 0.5);

// scene A: the problem
const sad = S.figure("worried", { x: W * (P ? 0.5 : 0.36), y: H * 0.5, size: fig, at: 0.2 });
S.doodle("document", { x: sad.x - S.u(P ? 40 : 90), y: H * 0.3, size: S.u(150), rot: -14, at: V.at("bills") - 0.5 });
S.doodle("envelope", { x: sad.x + sad.w + S.u(P ? 40 : 90), y: H * 0.34, size: S.u(150), rot: 10 });
S.write("bills & *worry*", { x: W * (P ? 0.5 : 0.7), y: H * (P ? 0.82 : 0.62), size: S.u(70), at: V.at("worry") - 0.4 });

// wipe it all away
const wipe = S.erase({ at: V.at("wipe") - 0.2, dur: 1.2 });

// scene B: the fix — a finished drawing is dragged in, then the hand draws the rest
const pig = S.dragIn("piggybank", { x: W * (P ? 0.5 : 0.3), y: H * (P ? 0.3 : 0.45), size: Math.min(W, H) * 0.42, at: wipe.t1 + 0.1, from: "right" });
const happy = S.figure("cheer", { x: W * (P ? 0.5 : 0.68), y: H * (P ? 0.66 : 0.48), size: fig * 0.9, at: V.at("watch") - 0.6 });
const habit = S.write("save a little, *every* month", { x: W / 2, y: H * (P ? 0.9 : 0.86), size: S.u(56), maxWidth: W * 0.84, at: V.at("habit") - 0.2 });
S.arrow(pig, happy, { bend: 0.3, color: "green", at: happy.t1 + 0.05 });
S.underline(habit, { color: "green" });
