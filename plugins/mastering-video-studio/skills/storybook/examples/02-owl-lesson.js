/* @example
visualIntent: At night in the forest, Sage the owl explains to Pippin why owls hunt at night; each line appears in a painted speech cloud above the speaker, and a lantern and the moon paint on at their words.
narration: Why are you awake, Sage? Owls see best in the dark, little one. The moon is my lantern.
*/
const b = S.book(root);
const P = V.isPortrait;
const top = P ? V.height * 0.36 : V.height * 0.26;
const pt = S.painting({ location: "forest", time: "night", x: 0, y: top, w: V.width, h: V.height - top });
const pip = S.character("pippin", { x: V.width * 0.28, y: pt.ground(0.28), height: pt.h * 0.68, face: 1 });
const owl = S.character("sage", { x: V.width * 0.72, y: pt.ground(0.72), height: pt.h * 0.68, face: -1 });
pip.enter(0.2).look(0, 0.8);
owl.enter(0.4, "paint").look(0, -0.8);
const lines = ["Why are you awake, Sage?", "Owls see best in the dark, little one.", "The moon is my *lantern*."];
const who = [pip, owl, owl];
const wins = S.lineWindows(lines);
lines.forEach((line, i) => {
  const A = who[i];
  const next = wins[i + 1];
  A.talk(wins[i].start - 0.05, wins[i].end + 0.1);
  const h = A.headTop();
  S.bubble(line, { cx: A === pip ? V.width * 0.38 : V.width * 0.62, bottom: Math.min(h.y - V.s(24), top + V.s(60)), maxW: V.width * (P ? 0.84 : 0.42), tail: { x: h.x, y: h.y - V.s(6) }, from: wins[i].start, to: next ? Math.max(wins[i].start + 0.6, next.start - 0.42) : null, size: V.s(P ? 44 : 40) });
});
owl.gesture(V.at("dark") - 0.2, "present", 1.6);
pip.gesture(V.at("lantern") - 0.3, "wonder", 1.8);
S.object("lantern", { x: V.width * 0.5, y: pt.ground(0.5) - V.s(70), size: V.s(120) }).paintOn(V.at("lantern") - 0.3, 1).bob(V.s(5));
