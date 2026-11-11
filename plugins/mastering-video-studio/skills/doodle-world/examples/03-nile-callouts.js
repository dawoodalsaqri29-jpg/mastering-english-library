/* @example
visualIntent: On the Nile bank, Nia in linen demonstrates the ancient shade trick: callouts pop on "linen", "reeds" and "roof" pointing at her cloth, the reed mat set piece and the sky; the thermometer drops from hot to cold on "cooler" and Pip cheers.
narration: The Egyptians had a trick. Wet linen on the skin. A mat of reeds for shade. And at night, you sleep on the roof. Suddenly the day is ten degrees cooler.
*/
const sc = S.scene("nile");
const nia = S.character("nia", { x: sc.portrait ? sc.Ww * 0.4 : sc.Ww * 0.38, facing: "right", expression: "hot", pose: "hold-up" });
nia.hold("fan", 0.2, null, { size: 1 });
const pip = S.character("pip", { x: sc.portrait ? sc.Ww * 0.78 : sc.Ww * 0.66, facing: "left", expression: "tired", pose: "sit" });
const mat = S.setpiece("hay", { x: sc.Ww * (sc.portrait ? 0.86 : 0.84), y: sc.G + 10, scale: 0.6, at: 0.3 });
S.narrate(nia);

const tLinen = V.at("linen");
const tReeds = V.at("reeds", tLinen);
const tRoof = V.at("roof", tReeds);
const tCool = V.at("cooler", tRoof);

S.headline("ANCIENT *AC*", 0.4, { pos: "top", y: 0.11, size: "md", color: "yellow", kicker: "3,000 BC" });
S.indicator("hot", 0.5, { label: "45 C", level: 0.95, until: tCool - 0.1 });
S.indicator("cold", tCool, { label: "35 C", level: 0.5 });

S.callout("wet linen", { get anchor() { return nia.anchor; } }, tLinen, { anchor: "handR", until: tReeds + 0.6, side: "left" });
nia.pose("hold-up", tLinen, 0.3).lookAt("camera", tLinen);
S.callout("reed mat", { x: mat.x, y: mat.y - 90 }, tReeds, { until: tRoof + 0.6, side: "right" });
nia.pose("point", tReeds, 0.3).lookAt({ x: mat.x, y: mat.y - 60 }, tReeds);
S.callout("sleep on the roof", { sx: sc.portrait ? 0.5 : 0.55, sy: 0.28 }, tRoof, { until: tCool + 0.6, x: sc.portrait ? 0.5 : 0.55, y: 0.4 });
nia.pose("point-up", tRoof, 0.3).lookAt("up", tRoof);
pip.mark("zzz", tRoof + 0.2, 1.4).expression("sleepy", tRoof);

nia.expression("happy", tCool, 0.2).pose("cheer", tCool, 0.3).mark("idea", tCool + 0.1, 1.6);
pip.expression("excited", tCool + 0.1).pose("cheer", tCool + 0.15, 0.3).mark("!", tCool + 0.3, 1.2);
nia.pose("present", Math.min(V.duration - 0.3, tCool + 1.6), 0.5);

const cam = S.camera();
cam.set({ zoom: 1.04 });
cam.to({ zoom: 1.1, x: sc.Ww * 0.55 }, 0.3, Math.max(1, tReeds), "inOutSine");
cam.to({ zoom: 1.0, x: sc.Ww * 0.5 }, tCool - 0.2, 0.3, "outBack");
cam.shake(tCool, 8, 0.3);
