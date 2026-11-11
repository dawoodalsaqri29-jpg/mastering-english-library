/* @example
visualIntent: A night street with a lamppost; the figure walks up to a LOST poster on the lamppost, a red ring lands on the poster, callouts point at the face and the date, and a red stamp slams in on "date".
narration: One day you will see a lost dog poster with your dog on it. Walk up to it. Look at the date. If it is tomorrow, check the date again, and go home.
*/
const W = V.width, H = V.height, P = V.isPortrait;
const sc = S.pictogram(root, { mode: "dark", push: 0.05 });
const room = S.setting("street");
const post = room.objs.lamppost;
const poster = S.object("poster", { x: post.x, y: sc.floor - post.size * 0.36, size: Math.min(W, H) * (P ? 0.26 : 0.24), at: V.at("poster") - 0.3, layer: "front" });
const you = S.figure("you", { x: W * -0.1, y: sc.floor, h: P ? Math.min(W, H) * 0.4 : H * 0.44, facing: "right", at: 0 });
you.walkTo(post.x - poster.size * 0.9, V.at("walk") - 0.2, 1.6);
you.pose("look", V.at("look") - 0.1);
S.ring(poster, V.at("poster") + 0.1, { pad: S.u(12) });
S.label("YOUR *DOG*", { x: poster.x, y: poster.y - poster.size * 0.48, w: 2, h: 2 }, V.at("dog", V.at("poster")) - 0.1, { x: P ? 0.5 : 0.72, y: P ? 0.2 : 0.3, from: P ? "top" : "left" });
S.label("THE *DATE*", { x: poster.x, y: poster.y - poster.size * 0.14, w: 2, h: 2 }, V.at("date") - 0.1, { x: P ? 0.5 : 0.72, y: P ? 0.34 : 0.52, from: P ? "top" : "left" });
S.flicker(V.at("tomorrow") - 0.1, 0.6, 0.4);
S.stamp("CHECK THE *DATE*", V.at("check") - 0.1, { pos: "bottom", size: P ? "lg" : "xl", color: "red" });
you.runTo(W * -0.2, V.at("home") - 0.2, 1);
