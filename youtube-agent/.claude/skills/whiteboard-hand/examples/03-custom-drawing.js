/* @example
visualIntent: The hand draws a custom pie chart with S.path, scribbles colour into two slices with S.fill, labels them and circles the big slice.
narration: Here's where your monthly paycheck really goes. Housing alone eats about half of it. Everything else, food, transport and fun, has to share the other half.
*/
const W = V.width, H = V.height, P = !V.isLandscape;
S.board(root, { hand: "tan" });
const cx = W * (P ? 0.5 : 0.36), cy = H * (V.isSquare ? 0.52 : P ? 0.42 : 0.52), r = Math.min(W, H) * (V.isSquare ? 0.24 : P ? 0.32 : 0.3);

const title = S.write("Where your paycheck goes", { x: W / 2, y: H * 0.1, size: S.u(64), at: 0.2 });
S.underline(title, { color: "blue" });

// the pie: a circle and two radii, drawn by hand
const ring = `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx - 0.01} ${cy - r}`;
S.path(ring, { width: S.u(6), at: V.at("paycheck") - 0.3, dur: 0.9 });
S.path(`M ${cx} ${cy - r} L ${cx} ${cy} L ${cx} ${cy + r}`, { width: S.u(6), dur: 0.4 });

// colour the halves
const half = `M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx} ${cy + r} Z`;
const other = `M ${cx} ${cy + r} A ${r} ${r} 0 0 1 ${cx} ${cy - r} Z`;
S.fill(half, "red", { at: V.at("housing") - 0.3, dur: 0.8 });
const house = S.doodle("house", { x: cx + r * 0.45, y: cy, size: r * 0.55, at: V.at("half") - 0.4, fill: false });
S.fill(other, "yellow", { at: V.at("everything") - 0.2, dur: 0.8 });
const lx = P ? W / 2 : W * 0.78, ly = P ? cy + r + S.u(90) : H * 0.42;
const l1 = S.write("Housing ~50%", { x: lx, y: ly, size: S.u(58), color: "red", at: house.t1 + 0.05 });
S.write("food, transport, fun", { x: lx, y: ly + S.u(80), size: S.u(46), maxLines: 1, maxWidth: P ? W * 0.8 : W * 0.36, at: V.at("food") - 0.2 });
S.circle(house, { at: V.duration - 1.4, dur: 0.6, pad: S.u(30) });
