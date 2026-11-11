/* @example
visualIntent: Storm over a finance city: the executive narrates, an investor walks in from the right and points; a falling share-price chart draws on "crashed"; both react; a red headline lands on "fired".
narration: Then the stock crashed. It lost sixty percent in a single week, and by Friday the board had fired her.
*/
const sc = S.scene({ empire: "finance", sky: "storm", growth: 1 });
const ceo = S.figure("executive", { x: sc.portrait ? sc.Ww * 0.3 : sc.heroX("left"), facing: "right", expression: "worried" });
const banker = S.figure("investor", { x: sc.portrait ? sc.Ww * 0.76 : sc.Ww * 0.78, facing: "left", expression: "angry", index: 1 });
S.narrate(ceo);

const tCrash = V.at("crashed");
const tSixty = V.at("sixty", tCrash);
const tFired = V.at("fired", tSixty);

// the plate leaves before the chart and the banker could cover it (plate + faces are never covered)
S.plate("Harbor Trust", "2008", { kicker: "CRISIS", color: S.colors.red, until: tCrash - 0.5 });
banker.enter("right", Math.max(0.1, tCrash - 0.2), 1.2, sc.portrait ? sc.Ww * 0.76 : sc.Ww * 0.78);
banker.lookAt(ceo, 0);
ceo.pose("worried", 0.3, 0.6).emote("sweat", 0.6, 2);

S.chart({ title: "SHARE PRICE", prefix: "$", falling: true, color: S.colors.red, at: tCrash - 0.4,
  points: [{ label: "Mon", value: 92 }, { label: "Wed", value: 58, word: "sixty" }, { label: "Fri", value: 37, note: "-60%", word: "week" }],
  pos: sc.portrait ? { x: 0.5, y: 0.34 } : { x: 0.5, y: 0.4 }, w: sc.portrait ? sc.W * 0.82 : sc.square ? sc.W * 0.5 : sc.W * 0.36 });
S.camera().shake(tCrash, 16, 0.6);
ceo.expression("shocked", tCrash).pose("facepalm", tCrash + 0.8, 0.5);
banker.pose("point", tSixty - 0.2, 0.4).emote("anger", tSixty, 1.4);

S.headline("*Fired* by Friday", tFired - 0.1, { pos: sc.portrait ? { x: 0.5, y: 0.62 } : { x: 0.5, y: 0.84 }, size: "md", color: S.colors.red });
ceo.pose("sad", tFired, 0.6).expression("sad", tFired).lookAt("down", tFired);
banker.pose("arms-crossed", tFired + 0.3, 0.5).expression("smug", tFired + 0.3);

const cam = S.camera();
cam.set({ x: sc.Ww / 2, y: 530, zoom: 1.04 });
cam.to({ x: sc.Ww / 2, y: 500, zoom: 1.08 }, tFired - 0.2, 0.6, "inOutCubic");
