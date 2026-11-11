/* @example
visualIntent: In the science lab, Priya explains to Bolt how vaccines train the immune system; Bolt gets it on "practice" and celebrates.
narration: A vaccine is like a training session for your immune system. It shows your body a harmless copy of the virus. So when the real thing shows up, your body has already had practice.
*/
const sc = S.scene("lab");
const xs = sc.slots(2);
const priya = S.character("priya", { x: xs[0], facing: "right", expression: "happy" });
const bolt = S.character("bolt", { x: xs[1], facing: "left", expression: "thinking", pose: "think" });

// Priya narrates the whole scene, gesturing on her own
S.narrate(priya);
const tTrain = V.at("training");
const tCopy = V.at("copy", tTrain);
const tPractice = V.at("practice", tCopy);

priya.pose("explain", tTrain - 0.2).lookAt(bolt, tTrain);
S.sticker("Vaccine = *training*", tTrain - 0.1, { x: 0.5, y: V.isPortrait ? 0.15 : 0.17, icon: "shield", size: "md" });
priya.hold("water", tCopy - 0.2, tPractice - 0.2).pose("hold-up", tCopy - 0.2);
bolt.emote("question", tCopy, 1.4).lookAt(priya, tCopy);

// Bolt gets it
bolt.pose("jump", tPractice, 0.2).expression("excited", tPractice).emote("idea", tPractice + 0.1, 2);
bolt.pose("celebrate", tPractice + 0.7, 0.3);
priya.pose("present", tPractice + 0.3).expression("excited", tPractice + 0.3);

const cam = S.camera();
cam.set({ zoom: 1.05 });
cam.focus(priya, tTrain - 0.3, 1.0, 1.3, { dx: V.isPortrait ? 0 : 140 });
cam.to({ zoom: 1.0, x: sc.Ww / 2, y: 500 }, tCopy - 0.4, 0.8);
cam.shake(tPractice + 0.05, 10, 0.4);
