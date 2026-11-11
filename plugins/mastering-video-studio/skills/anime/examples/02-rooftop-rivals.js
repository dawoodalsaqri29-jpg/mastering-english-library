/* @example
visualIntent: On the school rooftop Kaito challenges Hikari, who powers up with a pink aura; quick cuts, speed lines and an impact frame when she accepts, ending on a slanted "Challenge accepted" title.
narration: Kaito bet that nobody could read a book every week for a year. Hikari just smiled. Challenge accepted.
*/
const tSmile = V.at("smiled");
const tAcc = V.at("challenge", tSmile);
const W = V.isPortrait ? "center" : null;

const s1 = S.shot("rooftop", 0, tSmile - 0.1);
const f1 = s1.frame("medium", W || "right");
const kaito = s1.character("kaito", { x: f1.x, y: f1.y, scale: f1.scale, facing: V.isPortrait ? 0 : -0.35, expression: "smug", gesture: "cross" });
S.narrate(kaito, 0, tSmile - 0.1);
kaito.expression("excited", V.at("nobody")).gesture("point-left", V.at("nobody"));
s1.speedLines(0, 0.4, { dir: "h", layer: "over" });

const s2 = S.shot("rooftop", tSmile - 0.1, tAcc - 0.08, { enter: "whip-left" });
const f2 = s2.frame("close", W || "left");
const hikari = s2.character("hikari", { x: f2.x, y: V.isPortrait ? f2.y + 150 : f2.y, scale: f2.scale, facing: V.isPortrait ? 0 : 0.3, expression: "smug" });
hikari.wind(1);
s2.cam.push(1.08, tSmile, 1.2);

const s3 = S.shot("rooftop", tAcc - 0.08, 1e9, { enter: "zoom" });
const f3 = s3.frame("low", W || "left");
const hero = s3.character("hikari", { x: f3.x, y: V.isPortrait ? f3.y + 120 : f3.y, scale: f3.scale, facing: V.isPortrait ? 0 : 0.25, expression: "determined", gesture: "fist-up" });
S.narrate(hero, tAcc - 0.3, V.duration);
s3.speedLines(tAcc - 0.08, 1e9, { dir: "up", bg: "#5A1F3E", color: "#FFC1D9", lineOpacity: 0.5 });
s3.aura(hero, tAcc - 0.08, 1e9, { color: "#FF4F8B", color2: "#FFC1D9" });
s3.cam.set({ zoom: 1.15 }).to({ zoom: 1 }, tAcc, 0.3, "outBack");
S.impact(tAcc);
S.titleCard("Challenge *accepted*", tAcc + 0.1, { pos: V.isPortrait ? "top" : "right", size: "lg", maxWidth: V.isPortrait ? 0.9 : 0.5, y: V.isPortrait ? 0.08 : null });
