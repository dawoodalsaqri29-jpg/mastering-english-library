/* @example
visualIntent: The finished modern city at night — lit windows, stars, boats and traffic — while a counter of nightly commuters climbs; a custom drawable adds a glowing beacon on the tallest tower on "beacon".
narration: When the sun goes down the city does not stop. Four million people cross its bridges every night, and the beacon on the tower blinks until dawn.
*/
const W = S.city.world(root, { city: "Bayhaven", preset: "bay", style: "asian", seed: 3, year: 2024, light: "night", viewport: S.city.layout("full") });
W.camera.set({ pitch: 26 });
W.camera.orbit(12, 0.82);
S.city.vignette(root);
S.city.tag(root, "Bayhaven", "bay with hills");
S.city.head(root, { kicker: "Chapter 9", title: "The city that never *sleeps*", at: 0.3, until: V.at("beacon") });
const tower = S.city.landmark(W.M, "supertall");
const tBeacon = V.at("beacon") - 0.2;
if (tower) W.extras.push({
  depth: (w) => 0,
  draw: (w, ctx, t) => {
    const q = S.city.prog(t, tBeacon, 0.6);
    if (q <= 0) return;
    const s = S.city.proj(w.P, tower.x, tower.y, tower.z0 + tower.h * tower._q * 1.1);
    if (!s) return;
    const blink = 0.5 + 0.5 * Math.sin(t * 6);
    const R = V.s(18) * q * (0.7 + 0.5 * blink);
    const g = ctx.createRadialGradient(s[0], s[1], 0, s[0], s[1], R);
    g.addColorStop(0, "rgba(255,80,60,0.95)"); g.addColorStop(1, "rgba(255,80,60,0)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(s[0], s[1], R, 0, 6.2832); ctx.fill();
  },
});
const stat = V.el("div.ct-stat", { parent: root });
const sv = V.el("div.ct-stat-v", { parent: stat, text: "0" });
V.el("div.ct-stat-l", { parent: stat, text: "commuters every night" });
const tl = V.timeline();
tl.fromTo(stat, { opacity: 0, y: V.s(16) }, { opacity: 1, y: 0 }, { at: V.at("million") - 0.3, dur: 0.5 });
tl.fromTo(sv, { text: 0 }, { text: 4000000, decimals: 0 }, { at: V.at("million") - 0.2, dur: 2.2, ease: "outCubic" });
S.city.lowerThird(root, [{ at: V.at("bridges") - 0.2, title: "Night traffic", sub: "Bridges, ferries and the last trains" }]);
