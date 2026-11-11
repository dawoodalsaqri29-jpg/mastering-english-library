/* @example
visualIntent: A two-panel page about the old way turns away like a real page to reveal a splash page where Captain Ace stands under the 3D title "The Fix".
narration: For years, everyone did it the hard way. But then came the fix.
*/
const old = S.page(2);
S.scene(old.panels[0], "interior");
S.scene(old.panels[1], "street", { mood: "dusk" });
S.character("sam", { panel: old.panels[0], shot: "mid", x: 0.5, expression: "sad", pose: "shrug" });
S.caption("For years, everyone did it the hard way.", { panel: old.panels[1], pos: "tl", at: 0.2 });
const next = S.page(1);
S.scene(next.panels[0], "action", { palette: "blue" });
S.character("ace", { panel: next.panels[0], shot: "full", x: V.isLandscape ? 0.76 : 0.5, pose: "hips", expression: "grin", scale: V.isLandscape ? 0.9 : 0.55 });
const tTurn = Math.max(0.6, V.at("then") - 0.6);
S.pageTurn(tTurn, 1);
S.logo("The Fix", { x: V.isLandscape ? V.width * 0.38 : V.width / 2, y: V.height * 0.3, maxW: V.width * 0.55, maxH: V.height * 0.28, at: Math.max(tTurn + 1, V.at("fix") - 0.2), palette: "ice" });
