/* @example
visualIntent: A retail empire at sunset: the retailer narrates holding a tablet; pins spread across Europe on each city, then a blueprint product card for a new drink bottle draws on "bottle" and the retailer presents it with sparkles.
narration: By nineteen ninety they had stores in London, Paris, Berlin and Madrid. And in every one of them, a brand new bottle on the shelf.
*/
const sc = S.scene({ empire: "retail", sky: "sunset", growth: 0.5 });
const owner = S.figure("retailer", { x: sc.heroX("left"), facing: "right", expression: "happy" });
S.narrate(owner);
S.plate("Bramble & Co", "1990", { kicker: "GOING GLOBAL" });

const tLondon = V.at("London");
const tBottle = V.at("bottle", tLondon);

owner.pose("tablet", 0.3, 0.6).lookAt("down", 0.3);
const mapCard = S.map({ region: "europe", title: "EUROPE", counterLabel: "stores", at: tLondon - 0.7,
  pins: [{ place: "London" }, { place: "Paris" }, { place: "Berlin" }, { place: "Madrid" }],
  pos: sc.portrait ? { x: 0.5, y: 0.34 } : sc.square ? { x: 0.7, y: 0.5 } : { x: 0.68, y: 0.52 },
  w: sc.portrait ? sc.W * 0.84 : sc.square ? sc.W * 0.5 : sc.W * 0.42, until: tBottle - 0.3 });
owner.pose("point", tLondon, 0.45).lookAt(sc.portrait ? "up" : "right", tLondon);
S.grow(tLondon, tBottle);

S.productCard({ kind: "bottle", name: "Bramble *Fizz*", year: "1990", specs: [{ text: "new bottle", word: "bottle" }, { text: "on every shelf", word: "shelf" }],
  at: tBottle - 0.3, pos: sc.portrait ? { x: 0.5, y: 0.34 } : sc.square ? { x: 0.7, y: 0.5 } : { x: 0.68, y: 0.52 },
  w: sc.portrait ? sc.W * 0.84 : sc.square ? sc.W * 0.5 : sc.W * 0.42 });
owner.pose("present", tBottle - 0.2, 0.5).expression("excited", tBottle).emote("sparkle", tBottle + 0.3, 2);
owner.pose("thumbs-up", Math.min(V.duration - 0.6, tBottle + 2.4), 0.5);

S.camera().rise(0, V.duration * 0.85, { fromY: 540, toY: 488, fromZoom: 1.06, toZoom: 1.0 });
