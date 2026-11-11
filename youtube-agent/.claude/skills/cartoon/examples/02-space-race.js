/* @example
visualIntent: On the moon, Kai runs in shouting about the space race while Leo, holding a rocket, explains that it took twelve years; a camera follow then a punchy push-in.
narration: The space race was on! In nineteen fifty seven, Sputnik reached orbit. Just twelve years later, humans walked on the moon.
*/
const sc = S.scene("space", { span: 1.6 });
const kai = S.character("kai", { x: sc.Ww * 0.25, facing: "right", expression: "excited" });
const leo = S.character("leo", { x: sc.Ww * 0.72, facing: "left", expression: "happy" });

const tOn = V.at("on");
const tSput = V.at("sputnik");
const tTwelve = V.at("twelve", tSput);
const tMoon = V.at("moon", tTwelve);

// Kai runs in from the left with speed lines, shouting
kai.enter("left", 0.05, 0.9, sc.Ww * 0.32);
S.motionLines(kai, 0.05, 0.9);
S.shout(kai, "The space race was on!", 0.15, tSput - 0.3);
kai.pose("fist-pump", 1.0);

// Leo answers with props
leo.lookAt(kai, 0.3);
S.bubble(leo, "1957: Sputnik reached orbit.", tSput - 0.1, tTwelve - 0.3);
leo.hold("rocket", tSput, tMoon).pose("hold-up", tSput);
kai.expression("surprised", tTwelve).emote("exclaim", tTwelve, 1.2);
S.narrate(leo, tTwelve - 0.1, V.duration);
S.sticker("12 years → the *Moon*", tMoon - 0.1, { x: 0.5, y: 0.16, icon: "flag", size: "lg" });
leo.pose("celebrate", tMoon).expression("excited", tMoon);
kai.pose("jump", tMoon + 0.1).emote("sparkle", tMoon + 0.3, 2);

const cam = S.camera();
cam.set({ zoom: 1.15, x: sc.Ww * 0.3 });
cam.to({ zoom: 1.0, x: sc.Ww / 2 }, 0.9, 1.2);
cam.focus(leo, tTwelve - 0.2, 0.6, 1.35);
cam.to({ zoom: 1.0, x: sc.Ww / 2, y: 500 }, tMoon - 0.15, 0.3, "outBack");
cam.shake(tMoon, 12, 0.5);
