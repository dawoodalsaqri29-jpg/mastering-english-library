/* @example
visualIntent: A golden field; a French column marches toward a thin British line while a cannon fires; on "fire" the redcoats present and volley with rolling flashes and smoke, the camera pushes into the line, and a cream banner "HOLD THE LINE" slams in.
narration: The column came on through the smoke, drums beating, until the order rang out: fire.
*/
const w = S.scene(root, { sky: "golden", terrain: "fields" });
S.haze({ n: 5, opacity: 0.25 });
const W = V.width, H = V.height, P = V.isPortrait;
const size = Math.min(W, H) * (P ? 0.07 : 0.08), gy = w.horizon + H * 0.23;
const brit = S.army({ faction: "redcoat", x: W * 0.27, y: gy, count: P ? 40 : 64, ranks: P ? 4 : 3, size, facing: 1, flags: 1 });
const fr = S.army({ faction: "bluecoat", x: W * 0.76, y: gy, count: P ? 40 : 64, ranks: P ? 4 : 3, size, facing: -1, pose: "march", drummer: !P });
const gun = S.cannon({ x: W * 0.07, y: gy - size * 0.9, size: size * 0.8, facing: 1, faction: "redcoat" });
const tFire = V.at("fire");
fr.march(0.2, Math.max(1, tFire - 0.6), -size * 1.6, 0);
S.smoke({ x: fr.x, y: gy, n: 10, size: size * 0.5, life: 3, color: "#D9C9A6", color2: "#B8A684", opacity: 0.5, dir: [V.s(10), -V.s(8)], spread: 6 });
brit.volley(tFire);
gun.fire(tFire + 0.5);
if (tFire + 2.4 < V.duration - 0.5) brit.volley(tFire + 2.4);
S.camera.kenBurns(0, Math.max(1, tFire - 0.4), { from: { fx: 0.5, fy: 0.5, zoom: 1.02 }, to: { fx: 0.55, fy: 0.56, zoom: 1.16 } });
S.camera.to(brit.x + brit.w * 0.3, gy - size * 0.6, P ? 1.35 : 1.5, tFire - 0.4, 0.8, { ease: "inOutCubic" });
if (V.duration - 2 > tFire + 1.5) S.camera.wide(Math.max(tFire + 1.6, V.duration - 2.4), 1.8);
S.banner("Hold the line", { at: tFire + 0.25, end: Math.min(V.duration - 0.2, tFire + 4.5) });
S.lowerThird("Waterloo", { sub: "18 June 1815", at: 0.6, end: tFire - 0.2 });
