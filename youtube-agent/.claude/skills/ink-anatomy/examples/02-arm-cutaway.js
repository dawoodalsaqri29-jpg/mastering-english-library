/* @example
visualIntent: A big x-ray cut-away of an arm; the muscle turns red on "muscle", the tendon band on "tendon" with handwritten arrows, then on "cable" the tendon pulses, the camera punches in and a thumbnail title slams in.
narration: Look inside the arm. The muscle is the engine, and it grows fast. The tendon is the cable that connects it to bone, and it grows slow. Thicken the cable and the whole system gets stronger.
*/
const tM = V.at("muscle");
const tT = V.at("tendon", tM);
const tC = V.at("cable", tT);
const st = S.scene({ bg: "white" });
const P = V.isPortrait;
const art = st.anatomyLimb({ limb: "arm", x: st.Ww / 2, y: P ? 520 : 540, scale: P ? 0.5 : 0.8 });
art.reveal("skin", 0.1).reveal("muscle", 0.35).reveal("tendon", 0.6).reveal("bone", 0.85);
const aM = art.anchor("muscle"), aT = art.anchor("tendon");
art.focus("muscle", tM);
st.annotate("engine (grows fast)", { x: aM.x, y: aM.y, lx: P ? st.Ww * 0.1 : aM.x - 120, ly: P ? 200 : 180, align: "start", at: tM, size: 40 });
st.cam.punch(tM, 1.12, aM.x, aM.y, 0.3);
art.focus("tendon", tT);
st.annotate("cable (grows slow)", { x: aT.x, y: aT.y, lx: P ? st.Ww * 0.9 : aT.x + 160, ly: P ? 860 : 860, align: "end", at: tT, size: 40 });
st.cam.punch(tT, 1.14, aT.x, aT.y, 0.3);
art.focus("tendon", tC);
st.shake(tC, 8, 0.3);
st.cam.to({ x: st.Ww / 2, y: 500, zoom: 1.0 }, Math.min(V.duration - 0.4, tC + 1.2), 0.6);
S.thumbText("Thicken the *cable*", tC, { pos: P ? "top" : "bottom", size: "md" });
