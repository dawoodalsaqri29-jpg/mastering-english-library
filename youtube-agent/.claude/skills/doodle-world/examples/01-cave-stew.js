/* @example
visualIntent: Night in the cave. Og stirs a pot deadpan while Ug waits hungrily; a wolf wanders in and sits down on "wolf". Headline NO MENU slams on "menu", Ug drools on "stew", Og shrugs on "same".
narration: Dinner time in the stone age. There was no menu. It was stew. It was always stew. Even the wolf showed up for the stew. Same stew, every single night.
*/
const sc = S.scene("cave");
const og = S.character("og", { x: sc.Ww * 0.36, facing: "right", pose: "stir", expression: "deadpan" });
og.hold("stick", 0, null, { size: 0.9 });
const ug = S.character("ug", { x: sc.Ww * 0.66, facing: "left", pose: "sit", expression: "hungry" });
S.setpiece("pot", { x: sc.Ww * 0.5, y: sc.G + 4, scale: 0.8 });
S.narrate(og);

const tMenu = V.at("menu");
const tStew = V.at("stew", tMenu);
const tWolf = V.at("wolf", tStew);
const tSame = V.at("same", tWolf);

S.headline("NO *MENU*", tMenu, { pos: "top", color: "yellow", kicker: "stone age" });
og.lookAt("camera", tMenu).mark("...", tMenu + 0.2, 1.4);
ug.mark("drool", tStew, 1.6).expression("excited", tStew);
S.callout("stew", { get anchor() { return og.anchor; } }, tStew, { anchor: "handR", until: tWolf - 0.2, side: "left" });

const wolf = S.animal("wolf", { x: sc.Ww + 200, facing: "left", scale: 0.9 });
wolf.moveTo(sc.Ww * 0.88, tWolf - 0.9, 1.3);
wolf.mark("heart", tWolf + 0.5, 1.4);
ug.lookAt(wolf, tWolf);

og.pose("shrug", tSame, 0.35).expression("deadpan", tSame).mark("...", tSame + 0.2, 1.6);
og.pose("stir", Math.min(V.duration - 0.3, tSame + 1.8), 0.5);
S.headline("SAME STEW", tSame, { pos: "bottom", color: "white", size: "md" });

const cam = S.camera();
cam.set({ zoom: 1.04 });
cam.to({ zoom: 1.12, x: sc.Ww * 0.5 }, 0.2, Math.max(1, tMenu - 0.3), "inOutSine");
cam.to({ zoom: 1.0, x: sc.Ww * 0.55 }, tWolf - 0.6, 0.8);
cam.shake(tSame, 8, 0.3);
