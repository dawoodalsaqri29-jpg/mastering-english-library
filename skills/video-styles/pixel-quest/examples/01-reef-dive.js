/* @example
visualIntent: The hero explores the underwater reef, swims past a labelled jellyfish-like enemy and grabs three facts about coral as power-ups, with the mentor narrating in a dialog box.
narration: Coral reefs cover less than one percent of the ocean floor, yet they shelter a quarter of all marine species. Warming water causes bleaching.
*/
const g = S.game(root, { world: "underwater", length: 900 });
g.hud({ level: "WORLD 6-1 CORAL" });
const boxH = g.portrait ? 76 : 52;
g.groundY = g.portrait ? Math.round(g.H * 0.6) : g.H - boxH - 13;
const kit = g.actor("kit", { x: 40 });
const bolt = g.actor("bolt", { x: 14, z: 19 });
kit.walkTo(40 + V.duration * 34, 0, V.duration);
bolt.walkTo(14 + V.duration * 34, 0, V.duration);
g.follow(kit, { lead: 0.35, max: 1e9 });
const facts = [["one percent", "crystal", "1% of the sea floor"], ["quarter", "star", "25% of sea species"], ["bleaching", "bomb", "Heat = bleaching"]];
facts.forEach(([word, icon, label]) => {
  const t = V.at(word);
  kit.jump(t - 0.27, { h: 18, dur: 0.54 });
  g.item(icon, { x: 40 + t * 34, y: g.groundY - 34, at: t, label });
});
g.enemy("ghost", { x: 40 + V.at("warming") * 34 + 40, label: "WARM WATER", patrol: 6 });
g.narrate({ who: "orla", y: g.H - boxH - 5, h: boxH });
