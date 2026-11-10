/* @example
visualIntent: Rook does slow pull-ups; on "tendons" the forearm tendons flash red with a handwritten "not muscle" arrow and a punch-in, then a second note "(at home)" and a rep counter.
narration: You do not need a gym for this. Every slow pull-up loads your tendons, not just muscle, and tendons are what let a lean body hold forces a big body cannot. You can do this at home.
*/
const tTend = V.at("tendons");
const tHome = V.at("home", tTend);
const st = S.scene({ bg: "white" });
const P = V.isPortrait;
const f = st.frame(P ? "center" : 0.3, "hero");
const rook = S.figure("rook", { x: f.x, y: f.y, scale: f.scale, facing: "right", expression: "focus" });
rook.exercise("pullup", 0, { period: 2.2 });
S.prop("bar", { x: f.x, y: rook.world("handN", 0).y, w: 420 * f.scale });
rook.highlight("forearms", tTend).sweat(tTend + 0.8);
rook.pulse(Math.min(V.duration - 0.3, tTend + 1.2), 0.6);
const mp = S.musclePoint(rook, "forearms", tTend);
st.annotate("not muscle", { x: mp.x, y: mp.y, lx: P ? st.Ww * 0.8 : mp.x + st.Ww * 0.2, ly: P ? mp.y + 260 : mp.y + 120, align: P ? "end" : "start", at: tTend + 0.05, size: 44, minY: 420 });
st.cam.set({ zoom: 1 }).push(1.06, 0, Math.max(0.8, tTend));
st.cam.punch(tTend, P ? 1.16 : 1.22, mp.x, mp.y, 0.14, 0.3);
st.cam.to({ x: st.Ww / 2, y: 500, zoom: 1.04 }, Math.min(V.duration - 0.4, tTend + 1.8), 0.7);
st.handText("(at home)", P ? st.Ww * 0.78 : st.Ww * 0.78, P ? 560 : 760, { at: tHome, size: 38, color: st.ink, rotate: 3 });
S.thumbText("Train your *tendons*", 0.2, { pos: P ? "top" : "top-right", size: "md", kicker: "No gym", maxWidth: P ? 0.9 : 0.5 });
S.repCounter(0.2, { period: 2.2, x: P ? 0.2 : 0.86, y: P ? 0.9 : 0.6 });
