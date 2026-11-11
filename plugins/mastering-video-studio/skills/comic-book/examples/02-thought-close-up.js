/* @example
visualIntent: Pip in an extreme close-up thinks about a question in a thought cloud; on "idea" his expression flips to a grin, the camera punches in and a POP! lands.
narration: Pip stared at the stars and wondered how far away they really are. Then he had an idea.
*/
S.page(1);
const P = S.panel(0);
S.scene(P, "space");
const pip = S.character("pip", { panel: P, shot: "close", x: V.isPortrait ? 0.5 : 0.68, expression: "think", facing: "left" });
const tq = V.at("wondered"), ti = V.at("idea", tq);
S.balloon("How far away are the stars, really?", { speaker: pip, kind: "thought", at: tq - 0.2, x: V.isPortrait ? 0.5 : 0.27, y: 0.3, maxWidth: P.w * 0.4 });
pip.expr("grin", ti).pose("cheer", ti);
S.focusLines(P, { at: ti, cx: V.isPortrait ? 0.5 : 0.68 });
S.sfx("POP!", { panel: P, x: V.isPortrait ? 0.5 : 0.22, y: 0.78, at: ti, palette: "gold", burst: true });
const e = pip.anchor("eyes");
S.camera.page(0, 0.01);
S.camera.to((e.x + V.width / 2) / 2, e.y, 1.15, ti - 0.05, 0.25, "outExpo");
S.camera.shake(ti + 0.05, S.u(10), 0.35);
