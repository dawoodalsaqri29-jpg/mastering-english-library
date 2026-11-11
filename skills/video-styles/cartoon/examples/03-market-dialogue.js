/* @example
visualIntent: At a street market, Sam and Maya haggle in a quick dialogue about inflation; a board-free comic exchange with bubbles, reactions and a money prop.
narration: Why does this apple cost two dollars now? Prices rise when money loses value. That's inflation. So my money buys less? Exactly. Same money, smaller basket.
*/
S.scene("market");
const sc = S.currentScene();
const xs = sc.slots(2);
const sam = S.character("sam", { x: xs[0], facing: "right", expression: "skeptical" });
const maya = S.character("maya", { x: xs[1], facing: "left", expression: "happy" });

sam.hold("money", 0.2);
const win = S.dialogue([sam, maya], [
  { speaker: 0, text: "Why does this apple cost two dollars now?", expression: "angry", mark: "anger" },
  { speaker: 1, text: "Prices rise when money loses value. That's inflation.", pose: "explain" },
  { speaker: 0, text: "So my money buys less?", expression: "worried", pose: "shrug", mark: "sweat" },
  { speaker: 1, text: "Exactly. Same money, smaller basket.", pose: "point-viewer", expression: "smug" },
]);
S.prop("coin", { x: xs[0] + 40, y: sc.G - 520, size: 0.7, at: win[2].start, until: win[3].end, float: true });
S.sticker("*Inflation*", win[1].start + 0.6, { x: 0.5, y: 0.12, size: "md", icon: "chart" });
S.camera().set({ zoom: 1.05 });
S.camera().shake(win[0].start + 0.3, 6, 0.3);
