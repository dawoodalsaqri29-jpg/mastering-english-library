/* @example
visualIntent: Three-panel motion comic: Baron Vex lurks in a rainy night street, Sam confronts him in the lab, then a ZAP! impact as Bolt shuts the machine down.
narration: Late at night, Baron Vex crept toward the lab. Sam was waiting. "Not so fast, Vex!" Then Bolt hit the switch. Zap!
*/
const pg = S.page(3, { kind: "feature" });
const [A, B, C] = pg.panels;
const t1 = V.at("night"), t2 = V.at("waiting", t1), t3 = V.at("fast", t2), t4 = V.at("switch", t3), t5 = V.at("zap", t4);
S.scene(A, "street", { mood: "night" });
S.scene(B, "lab");
S.scene(C, "explosion");
S.revealPanel(A, 0.05, "pop");
S.revealPanel(B, t2 - 0.3);
S.revealPanel(C, t4 - 0.2, "flash");
const vex = S.character("vex", { panel: A, shot: "full", silhouette: true, x: 0.7, scale: 0.9 });
vex.enter(0.3, "slide");
S.caption("Late at night, Baron Vex crept toward the lab...", { panel: A, pos: "tl", at: 0.2, label: "Meanwhile..." });
const sam = S.character("sam", { panel: B, shot: "mid", x: 0.32, pose: "crossed", expression: "determined" });
S.caption("Sam was waiting.", { panel: B, pos: "br", at: t2 - 0.1 });
S.balloon("Not so fast, Vex!", { speaker: sam, kind: "shout", at: t3 - 0.2 });
sam.pose("point", t3 - 0.1).talk(t3 - 0.1, S.phraseEnd("Not so fast, Vex!", t3));
const bolt = S.character("bolt", { panel: C, shot: "mid", x: 0.3, pose: "fist", expression: "angry" });
S.sfx("ZAP!", { panel: C, x: 0.68, y: 0.5, at: t5 - 0.05, burst: true, palette: "zap", cameraShake: true });
S.focusLines(C, { at: t5, cx: 0.68 });
S.camera.focus(A, 0, 0.01);
S.camera.focus(B, t2 - 0.5, 0.7);
S.camera.focus(C, t4 - 0.3, 0.35, { ease: "outExpo" });
S.camera.page(Math.max(t5 + 1, V.duration - 1.3), 1);
