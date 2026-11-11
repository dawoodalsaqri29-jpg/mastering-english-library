/* @example
visualIntent: In the classroom Yuki wonders why the moon doesn't fall; an eyes-only cut-in of Ren, then a crash zoom on Ren with focus lines and a giant "Gravity!" as he answers.
narration: Why doesn't the moon just fall down? It does, actually. It is always falling, but it moves sideways so fast that it keeps missing the Earth. That is gravity.
*/
const tAns = V.at("actually");
const tGrav = V.at("that is", tAns + 0.5);
const s1 = S.shot("classroom", 0, tAns - 0.05);
const f1 = s1.frame("medium", V.isPortrait ? "center" : "left");
const yuki = s1.character("yuki", { x: f1.x, y: f1.y, scale: f1.scale, facing: V.isPortrait ? 0 : 0.35, expression: "thinking", gesture: "think" });
S.narrate(yuki, 0, tAns - 0.05);
s1.cam.push(1.1, 0, Math.max(0.5, tAns));

S.cutIn("ren", tAns - 0.5, tAns - 0.05, { expression: "serious" });

const s2 = S.shot("classroom", tAns - 0.05, 1e9, { enter: "zoom" });
const f2 = s2.frame("close", V.isPortrait ? "center" : "right");
const ren = s2.character("ren", { x: f2.x, y: V.isPortrait ? f2.y + 140 : f2.y, scale: f2.scale, facing: V.isPortrait ? 0 : -0.3, expression: "calm", gesture: "glasses" });
ren.glint(tAns + 0.1).gesture("rest", tAns + 0.8);
S.narrate(ren, tAns, V.duration);
ren.expression("smug", tGrav).gesture("point-up", tGrav);
s2.focusLines(tAns, tAns + 1, { opacity: 0.5 });
s2.focusLines(tGrav, 1e9, { layer: "under", bg: "#FFFFFF" });
s2.cam.set({ zoom: 1.05 }).push(1.0, tAns, 1.5);
S.impact(tGrav);
S.bigWord("*Gravity!*", tGrav + 0.05, { x: V.isPortrait ? 0.5 : 0.3, y: V.isPortrait ? 0.2 : 0.42, width: V.isPortrait ? 0.9 : 0.5 });
S.subtitles({ to: tGrav - 0.1 });
