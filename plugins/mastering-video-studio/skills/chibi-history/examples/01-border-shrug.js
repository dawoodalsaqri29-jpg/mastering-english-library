/* @example
visualIntent: A German officer at the snowy alpine border post peers through binoculars at the mountains, then the cut goes to the map: Germany colours in, an arrow pokes toward Switzerland and stops, question marks sprout and a chunky "WHY NOT?" slams in while he shrugs.
narration: The officer stood at the border and looked up. Mountains, tunnels, and a very annoying plan. On the map it was simple: Germany here, Switzerland right there. So why not?
*/
const tMap = V.at("map");
const tWhy = V.at("why");
const P = V.isPortrait;

const s1 = S.shot("alps", 0, tMap - 0.05, { sign: "GRENZE" });
const f1 = s1.frame("medium", P ? "center" : "left");
const officer = s1.character({ role: "officer", nation: "germany" }, { x: f1.x, y: s1.groundY - 278 * f1.scale, scale: f1.scale, facing: "right", expression: "thinking", gesture: "binoculars", prop: "binoculars" });
S.narrate(officer, 0, tMap);
officer.lookAt("up", 0.2).gesture("hold", V.at("mountains")).expression("worried", V.at("annoying")).hop(V.at("annoying"), 26);
s1.cam.push(1.1, 0, Math.max(0.5, tMap));
S.dateTag("1940", 0.2, { x: P ? 0.5 : 0.86, y: 0.09, size: "sm" });

const s2 = S.shot("map", tMap - 0.05, 1e9, { enter: "zoom", mapShift: P ? 0 : 0.1 });
const M = s2.map0;
M.region("germany", "germany", V.at("Germany")).region("austria", "germany", V.at("Germany") + 0.15);
M.region("switzerland", "switzerland", V.at("Switzerland"));
M.flag("switzerland", "switzerland");
M.label("Switzerland", "switzerland", { at: V.at("Switzerland"), size: 30, dy: 70 });
const a = M.world("germany"), b = M.world("switzerland");
M.arrow({ x: a.x, y: a.y }, { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }, tWhy - 0.6, { color: "#444A44", curve: 0.1 });
M.qmarks("switzerland", tWhy, 1e9, { count: 3 });
s2.cam.set({ zoom: 1.05 }).to({ x: (s2.Ww / 2 + b.x) / 2, y: (500 + b.y) / 2, zoom: P ? 1.5 : 1.7 }, tMap, 1.4);
const pos = P ? { x: s2.Ww * 0.5, y: 1000 - 278 * 0.8 - 20, s: 0.8 } : { x: s2.Ww * 0.17, y: 1000 - 278 * 1.1 - 10, s: 1.1 };
const shrugger = s2.character({ role: "officer", nation: "germany" }, { x: pos.x, y: pos.y, scale: pos.s, facing: P ? 0 : 0.6, expression: "thinking", gesture: "think", parent: s2.over });
S.narrate(shrugger, tMap, V.duration);
shrugger.expression("confused", tWhy).gesture("shrug", tWhy).hop(tWhy, 34);
S.flash(tWhy, "#FFFFFF", 0.18);
S.thumb("Why *not*?", tWhy, { x: 0.5, y: 0.12, width: P ? 0.9 : 0.6, size: "lg" });
