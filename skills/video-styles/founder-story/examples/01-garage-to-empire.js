/* @example
visualIntent: The founder narrates over a small auto empire that pops up building by building as the camera rises; the plate slides in, a headline lands on "forty", a revenue stat counts up on "billion" and he fist-pumps.
narration: Nobody believed it would work. But from one garage, Northwind grew into forty factories, and today it makes forty eight billion dollars a year.
*/
const sc = S.scene({ empire: "auto", sky: "day", growth: 0.2 });
const boss = S.figure("founder", { x: sc.heroX("left"), facing: "right", expression: "confident", pose: "arms-crossed" });
S.narrate(boss);
S.plate("Northwind Motors", "1937 – 2026", { kicker: "THE ENTIRE HISTORY OF" });

const tNobody = V.at("nobody");
const tForty = V.at("forty", tNobody);
const tBillion = V.at("billion", tForty);

boss.pose("shrug", tNobody - 0.1, 0.4).expression("skeptical", tNobody).emote("question", tNobody + 0.2, 1.4);
boss.pose("arms-crossed", tNobody + 1.6, 0.5).expression("confident", tNobody + 1.6);

S.headline("One garage to *forty* factories", tForty - 0.1, { pos: sc.portrait ? { x: 0.5, y: 0.32 } : "right", size: "lg" });
boss.pose(sc.portrait ? "point-up" : "point", tForty - 0.2, 0.45).lookAt(sc.portrait ? "up" : "right", tForty - 0.2);
S.grow(tForty, V.duration - 1);

S.stat("$48B", "a year in revenue", tBillion - 0.1, { pos: sc.portrait ? { x: 0.5, y: 0.5 } : { x: 0.67, y: 0.8 } });
boss.pose("fist-pump", tBillion, 0.4).expression("excited", tBillion).emote("dollar", tBillion + 0.2, 1.8);
boss.pose("arms-crossed", Math.min(V.duration - 0.5, tBillion + 2.2), 0.6).lookAt("camera", tBillion + 2.2);

S.camera().rise(0, V.duration * 0.9, { fromY: 560, toY: 470, fromZoom: 1.12, toZoom: 0.98 });
S.camera().shake(tBillion + 0.05, 8, 0.35);
