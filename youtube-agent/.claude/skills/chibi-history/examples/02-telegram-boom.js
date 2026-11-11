/* @example
visualIntent: In the war room a British general reads a telegram on the word "telegram", slams it on the table with a cartoon BOOM and a TOP SECRET stamp, then a split-screen two-sides: the German officer on the right sweats while the general on the left grins — each side's flag waving.
narration: Then the telegram arrived. Top secret, it said, which was a strange thing to write on a telegram. On one side, a general who could not stop smiling. On the other, an officer who had started to sweat.
*/
const tTele = V.at("telegram");
const tSecret = V.at("top secret");
const tSplit = V.at("on one side");
const P = V.isPortrait;

const s1 = S.shot("war-room", 0, tSplit - 0.05, { nation: "britain" });
const f1 = s1.frame("medium", "center");
const general = s1.character({ role: "general", nation: "britain" }, { x: f1.x, y: s1.groundY - 278 * f1.scale, scale: f1.scale, expression: "serious", gesture: "rest" });
S.narrate(general, 0, tSplit);
general.prop("telegram", tTele - 0.2).gesture("hold-up", tTele - 0.2).expression("surprised", tTele).hop(tTele, 30);
general.gesture("hold", tSecret).expression("proud", tSecret + 0.1).prop(null, tSecret + 0.3).gesture("fist", tSecret + 0.3);
s1.cam.push(1.1, 0, Math.max(0.5, tSplit));
S.boom(tSecret + 0.25, { x: P ? 0.5 : 0.68, y: P ? 0.3 : 0.4, r: 170, text: "BOOM" });
S.stamp("Top secret", tSecret + 0.5, { x: 0.5, y: P ? 0.2 : 0.22, color: "#2F5BB7", until: tSplit - 0.1 });
S.dateTag("MAY 1940", 0.2, { x: P ? 0.5 : 0.12, y: 0.09, size: "sm" });

const s2 = S.shot("plain", tSplit - 0.05, 1e9, { enter: "slide-left", color: "#2B2A33" });
s2.cam.drift = 0;
const L = S.half(s2, "left"), R = S.half(s2, "right");
S.LOCATIONS["war-room"](L, { nation: "britain" });
S.LOCATIONS.trench(R, { night: true });
const sc = P ? 0.78 : 1.15;
const ga = L.character({ role: "general", nation: "britain" }, { x: s2.Ww / 2 + 30, y: L.groundY - 278 * sc, scale: sc, facing: "right", expression: "happy", gesture: "cheer" });
const of = R.character({ role: "officer", nation: "germany" }, { x: s2.Ww / 2 - 30, y: R.groundY - 278 * sc, scale: sc, facing: "left", expression: "nervous", gesture: "hands-head" });
L.flag("britain", { x: s2.Ww / 2 + 250 * sc, y: L.groundY - 278 * sc - 190 * sc, w: 150, h: 98, pole: 470, layer: "near" });
R.flag("germany", { x: s2.Ww / 2 - 250 * sc, y: R.groundY - 278 * sc - 190 * sc, w: 150, h: 98, pole: 470, layer: "near" });
S.narrate(ga, tSplit, V.at("on the other") - 0.1);
S.narrate(of, V.at("on the other"), V.duration);
ga.hop(V.at("smiling"), 40);
of.expression("scared", V.at("sweat")).shake(V.at("sweat"), 0.6, 6);
const jag = S.jaggedD(s2.Ww, P, "left");
V.el("path", { parent: s2.over, d: jag.line, fill: "none", stroke: "#2B2A33", "stroke-width": 26, "stroke-linejoin": "round" });
V.el("path", { parent: s2.over, d: jag.line, fill: "none", stroke: "#FFFFFF", "stroke-width": 8, "stroke-linejoin": "round" });
S.tag("Britain", tSplit + 0.2, { x: P ? 0.5 : 0.25, y: P ? 0.46 : 0.1, color: "#C8102E" });
S.tag("Germany", tSplit + 0.3, { x: P ? 0.5 : 0.75, y: P ? 0.96 : 0.1, color: "#444A44" });
