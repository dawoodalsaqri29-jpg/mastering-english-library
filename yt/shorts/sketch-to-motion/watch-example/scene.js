// Deterministic: window.renderAt(t) fully sets the picture for time t (seconds).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { drawSketch } from './sketch.js';

const $ = (id) => document.getElementById(id);
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const seg = (t, a, b) => clamp01((t - a) / (b - a));
const eio = (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
const eo = (x) => 1 - Math.pow(1 - x, 3);
const back = (x) => { const c = 1.9; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); };
const lerp = (a, b, k) => a + (b - a) * k;

// Beat table: drawings swap at these times. Slams match the audio script.
export const BEATS = [0, 1.4, 2.8, 4.4, 5.6, 7.0, 8.4];
const SLAMS = [5.75, 5.98, 6.2, 6.42, 6.64, 7.25];
const FLASHES = [2.8, 7.25];

// ---------- renderer ----------
const canvas = $('gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
renderer.setSize(1140, 2026, false);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, 570 / 1013, 0.1, 100);
camera.position.set(0, 0, 10);

// Backdrop: warm charcoal glow.
{
  const c = document.createElement('canvas'); c.width = 285; c.height = 506;
  const g = c.getContext('2d'), r = g.createRadialGradient(142, 240, 10, 142, 240, 370);
  r.addColorStop(0, '#3a2a1c'); r.addColorStop(0.5, '#1a130d'); r.addColorStop(1, '#070504');
  g.fillStyle = r; g.fillRect(0, 0, 285, 506);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  scene.background = tex;
}

// Studio reflections: dark room, bright softboxes. Metal lives on this.
{
  const env = new THREE.Scene();
  env.background = new THREE.Color(0x050505);
  const box = (w, h, x, y, z, i, col = 0xffffff) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(i), side: THREE.DoubleSide }));
    m.position.set(x, y, z); m.lookAt(0, 0, 0); env.add(m);
  };
  box(10, 3, 0, 9, 3, 16);
  box(26, 26, 0, 11, -2, 2.6, 0xfff4e6);
  box(2, 12, -9, 1, 3, 11, 0xfff0dd);
  box(2, 12, 9, -2, 2, 8, 0xdde8ff);
  box(7, 1.2, 2, -8, 5, 7);
  box(4, 4, 0, 1, 11, 2.2);
  box(1, 9, 5, 4, -8, 6);
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(env, 0.012).texture;
}
scene.environmentIntensity = 0.95;

const key = new THREE.SpotLight(0xfff1dd, 170, 60, 0.55, 0.6, 1.4);
key.position.set(-6, 9, 13); key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0006;
key.shadow.camera.near = 4; key.shadow.camera.far = 40;
scene.add(key, key.target);

// ---------- materials ----------
const M = (color, rough, extra = {}) => new THREE.MeshPhysicalMaterial({ color, metalness: 1, roughness: rough, ...extra });
const gold = M(0xe6b65c, 0.24), rose = M(0xe0a07c, 0.26), steel = M(0xcfd4db, 0.22), darkSteel = M(0x5b616b, 0.36);
const blued = M(0x2f58c4, 0.2), caseGold = M(0xeec06a, 0.17, { clearcoat: 0.4 });
const ruby = new THREE.MeshPhysicalMaterial({ color: 0xc4102c, metalness: 0, roughness: 0.08, clearcoat: 1, emissive: 0x5a0614, emissiveIntensity: 0.9 });
const leather = new THREE.MeshStandardMaterial({ color: 0x20110a, roughness: 0.72, metalness: 0 });
const stitch = new THREE.MeshStandardMaterial({ color: 0xe0c896, roughness: 0.7 });
const redHand = M(0xd83a2c, 0.28);

// Perlage (overlapping circular polish) on the base plate.
const perlage = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const g = c.getContext('2d'); g.fillStyle = '#888'; g.fillRect(0, 0, 512, 512);
  for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) {
    const cx = x * 64 + 32, cy = y * 64 + 32, r = g.createRadialGradient(cx, cy, 2, cx, cy, 42);
    r.addColorStop(0, '#d8d8d8'); r.addColorStop(0.65, '#747474'); r.addColorStop(1, '#a2a2a2');
    g.fillStyle = r; g.beginPath(); g.arc(cx, cy, 42, 0, 6.3); g.fill();
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(0.8, 0.8); t.anisotropy = 8;
  return t;
})();
const plateMat = M(0xd2d5da, 0.34, { metalness: 0.9, roughnessMap: perlage, map: perlage });

const shadow = (o) => { o.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } }); return o; };

// ---------- geometry ----------
function gearMesh(N, mat, { spokes = 5, depth = 0.09, rimK = 0.76, hubK = 0.24, axle = 0.05 } = {}) {
  const m = 2 / 60, r = N * m / 2, ra = r + m * 0.95, rd = r - m * 1.15, s = new THREE.Shape();
  for (let i = 0; i < N; i++) {
    const a = i / N * Math.PI * 2, w = Math.PI * 2 / N;
    const pts = [[-0.5, rd], [-0.26, rd], [-0.15, ra], [0.15, ra], [0.26, rd]];
    pts.forEach(([da, rr], j) => {
      const x = Math.cos(a + da * w) * rr, y = Math.sin(a + da * w) * rr;
      (i === 0 && j === 0) ? s.moveTo(x, y) : s.lineTo(x, y);
    });
  }
  s.closePath();
  if (spokes) {
    const ri = r * rimK, rh = Math.max(r * hubK, 0.05), gap = 0.28 * r > 0.08 ? 0.09 / ri : 0.3;
    for (let i = 0; i < spokes; i++) {
      const a0 = i / spokes * Math.PI * 2 + gap, a1 = (i + 1) / spokes * Math.PI * 2 - gap;
      const h = new THREE.Path();
      h.absarc(0, 0, ri, a0, a1, false);
      h.lineTo(Math.cos(a1 - 0.07) * rh * 1.45, Math.sin(a1 - 0.07) * rh * 1.45);
      h.absarc(0, 0, rh * 1.45, a1 - 0.07, a0 + 0.07, true);
      h.closePath();
      s.holes.push(h);
    }
  }
  const ax = new THREE.Path(); ax.absarc(0, 0, axle, 0, 6.2832, true); s.holes.push(ax);
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 2, curveSegments: 18 });
  g.translate(0, 0, -depth / 2);
  const group = new THREE.Group();
  group.add(new THREE.Mesh(g, mat));
  const jew = new THREE.Mesh(new THREE.CylinderGeometry(axle * 1.5, axle * 1.5, depth * 1.4, 28), ruby); jew.rotation.x = Math.PI / 2;
  group.add(jew);
  return shadow(group);
}
function spiralTube(r0, r1, turns, rad, mat, z = 0) {
  const pts = [], n = Math.ceil(turns * 60);
  for (let i = 0; i <= n; i++) {
    const k = i / n, a = k * turns * Math.PI * 2, r = lerp(r0, r1, k);
    pts.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, z));
  }
  return new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), n, rad, 6, false), mat);
}
const ringMesh = (r, tube, mat) => new THREE.Mesh(new THREE.TorusGeometry(r, tube, 16, 96), mat);
function lathe(profile, mat) {
  const g = new THREE.LatheGeometry(profile.map(([r, z]) => new THREE.Vector2(r, z)), 128);
  g.rotateX(Math.PI / 2);
  return new THREE.Mesh(g, mat);
}
function capsule(a, b, w, depth, mat) {
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]), s = new THREE.Shape();
  s.absarc(a[0], a[1], w, ang + Math.PI / 2, ang - Math.PI / 2, false);
  s.absarc(b[0], b[1], w * 0.82, ang - Math.PI / 2, ang + Math.PI / 2, false);
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelSize: 0.022, bevelThickness: 0.022, bevelSegments: 3, curveSegments: 24 });
  return new THREE.Mesh(g, mat);
}

// ---------- watch ----------
const W = new THREE.Group(); W.rotation.order = 'XYZ'; scene.add(W);

const P1 = [-0.5, 0.7];
const phi12 = THREE.MathUtils.degToRad(-25), phi23 = THREE.MathUtils.degToRad(-70);
const P2 = [P1[0] + 1.5 * Math.cos(phi12), P1[1] + 1.5 * Math.sin(phi12)];
const P3 = [P2[0] + (5 / 6) * Math.cos(phi23), P2[1] + (5 / 6) * Math.sin(phi23)];
const PB = [1.1, 1.14], PC = [-0.6, -1.25];

const LEVEL = { plate: 1.2, gears: 2.4, barrel: 3.5, cage: 4.5, bridge: 5.6 };
const REST = { plate: -0.28, gears: 0, barrel: 0.0, cage: 0.0, bridge: 0.16 };

const lPlate = new THREE.Group(), lGears = new THREE.Group(), lBarrel = new THREE.Group(), lCage = new THREE.Group(), lBridge = new THREE.Group();
W.add(lPlate, lGears, lBarrel, lCage, lBridge);

// plate
{
  const s = new THREE.Shape(); s.absarc(0, 0, 2.14, 0, Math.PI * 2, false);
  const h = new THREE.Path(); h.absarc(PC[0], PC[1], 0.64, 0, 6.2832, true); s.holes.push(h);
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.12, bevelEnabled: true, bevelSize: 0.015, bevelThickness: 0.015, bevelSegments: 2, curveSegments: 64 });
  lPlate.add(shadow(new THREE.Mesh(g, plateMat)));
}
// gears
const G1 = gearMesh(60, gold), G2 = gearMesh(30, rose, { spokes: 5 }), G3 = gearMesh(20, steel, { spokes: 4, rimK: 0.72 });
G1.position.set(P1[0], P1[1], 0); G2.position.set(P2[0], P2[1], 0); G3.position.set(P3[0], P3[1], 0);
lGears.add(G1, G2, G3);
// barrel + mainspring
const barrel = new THREE.Group(); barrel.position.set(PB[0], PB[1], 0);
{
  barrel.add(lathe([[0.54, -0.1], [0.58, -0.08], [0.58, 0.08], [0.54, 0.1], [0.5, 0.1], [0.5, -0.1], [0.54, -0.1]], gold));
  const back_ = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 0.02, 64), darkSteel); back_.rotation.x = Math.PI / 2; back_.position.z = -0.08; barrel.add(back_);
  const sp = spiralTube(0.09, 0.47, 6.5, 0.011, blued, 0.02); sp.name = 'spring'; barrel.add(sp);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.17, 32), steel); hub.rotation.x = Math.PI / 2; barrel.add(hub);
}
lBarrel.add(shadow(barrel));
// tourbillon
const cage = new THREE.Group(), balance = new THREE.Group(), cageWrap = new THREE.Group();
cageWrap.position.set(PC[0], PC[1], 0);
{
  for (const z of [-0.14, 0.17]) {
    const r = ringMesh(0.55, 0.024, z > 0 ? steel : gold); r.position.z = z; cage.add(r);
    for (let i = 0; i < 3; i++) {
      const a = i / 3 * 6.283 + 0.4, bar = new THREE.Mesh(new RoundedBoxGeometry(1.08, 0.055, 0.03, 2, 0.012), z > 0 ? steel : gold);
      bar.position.set(Math.cos(a) * 0.27, Math.sin(a) * 0.27, z); bar.scale.x = 0.5; bar.rotation.z = a; cage.add(bar);
    }
  }
  for (let i = 0; i < 3; i++) {
    const a = i / 3 * 6.283 + 0.4 + 1.047;
    const pil = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.31, 12), steel); pil.rotation.x = Math.PI / 2;
    pil.position.set(Math.cos(a) * 0.55, Math.sin(a) * 0.55, 0.015); cage.add(pil);
    const sc = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.02, 8), blued); sc.rotation.x = Math.PI / 2;
    sc.position.set(Math.cos(a) * 0.55, Math.sin(a) * 0.55, 0.19); cage.add(sc);
  }
  const wheel = ringMesh(0.37, 0.022, gold); balance.add(wheel);
  for (let i = 0; i < 2; i++) {
    const a = new THREE.Mesh(new RoundedBoxGeometry(0.74, 0.03, 0.02, 1, 0.008), gold); a.rotation.z = i * Math.PI / 2; balance.add(a);
  }
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * 6.283, s = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.04, 8), steel); s.rotation.x = Math.PI / 2;
    s.position.set(Math.cos(a) * 0.375, Math.sin(a) * 0.375, 0.01); balance.add(s);
  }
  balance.add(spiralTube(0.03, 0.25, 5, 0.0055, blued, 0.03));
  const pivot = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.34, 18), ruby); pivot.rotation.x = Math.PI / 2; pivot.position.z = 0.015; balance.add(pivot);
  cage.add(balance);
  cageWrap.add(cage);
  const collar = gearMesh(36, gold, { spokes: 0, axle: 0.56, depth: 0.04 }); collar.scale.setScalar(1.08); collar.remove(collar.children[1]); collar.position.z = -0.1;
  cageWrap.add(collar);
}
lCage.add(shadow(cageWrap));
// bridges with jewels and blued screws
{
  const a = capsule(P1, P2, 0.17, 0.05, caseGold), b = capsule(P2, P3, 0.13, 0.05, caseGold), c = capsule(PB, [P2[0] + 0.1, P2[1] + 0.2], 0.12, 0.05, steel);
  lBridge.add(a, b, c);
  for (const p of [P1, P2, P3, PB]) {
    const j = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.03, 28), ruby); j.rotation.x = Math.PI / 2; j.position.set(p[0], p[1], 0.085); lBridge.add(j);
    const r = ringMesh(0.075, 0.012, steel); r.position.set(p[0], p[1], 0.085); lBridge.add(r);
  }
  for (const k of [0.3, 0.65]) {
    const s = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.025, 16), blued); s.rotation.x = Math.PI / 2;
    s.position.set(lerp(P1[0], P2[0], k), lerp(P1[1], P2[1], k), 0.085); lBridge.add(s);
  }
}
shadow(lBridge);

// case, strap, crown
const lCase = new THREE.Group(); W.add(lCase);
{
  lCase.add(lathe([[2.14, -0.55], [2.3, -0.52], [2.42, -0.34], [2.46, 0.0], [2.42, 0.28], [2.3, 0.42], [2.24, 0.42], [2.17, 0.3], [2.17, -0.55], [2.14, -0.55]], caseGold));
  const back_ = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 0.05, 96), darkSteel); back_.rotation.x = Math.PI / 2; back_.position.z = -0.46; lCase.add(back_);
  const crown = new THREE.Group(); crown.position.set(2.62, 0, 0);
  const cy = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.28, 24), caseGold); cy.rotation.z = Math.PI / 2; crown.add(cy);
  for (let i = 0; i < 18; i++) {
    const a = i / 18 * 6.283, kn = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.022, 0.022), caseGold); kn.position.set(0, Math.cos(a) * 0.205, Math.sin(a) * 0.205); crown.add(kn);
  }
  lCase.add(crown);
  for (const sy of [1, -1]) for (const sx of [1, -1]) {
    const lug = new THREE.Mesh(new RoundedBoxGeometry(0.28, 0.9, 0.3, 3, 0.09), caseGold);
    lug.position.set(sx * 1.12, sy * 2.28, -0.12); lug.rotation.x = sy * 0.16; lCase.add(lug);
  }
  shadow(lCase);
}
const strapGroup = new THREE.Group(); W.add(strapGroup);
function makeStrap(sign) {
  const g = new THREE.Group();
  const geo = new RoundedBoxGeometry(1.94, 5.6, 0.14, 2, 0.05); // subdivide along length
  const body = new THREE.BoxGeometry(1.94, 5.6, 0.14, 8, 60, 1);
  geo.dispose();
  const bend = (y0) => { const y = y0 + 2.8; return { y: y - 0.0035 * y * y * y * 0 , z: -0.03 * y * y }; };
  const pos = body.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const b = bend(pos.getY(i));
    pos.setY(i, sign * (2.45 + b.y)); pos.setZ(i, pos.getZ(i) - 0.2 + b.z);
    pos.setX(i, pos.getX(i) * (1 - 0.018 * (pos.getY(i) * sign - 2.45)));
  }
  body.computeVertexNormals();
  g.add(new THREE.Mesh(body, leather));
  const st = new THREE.CapsuleGeometry(0.012, 0.075, 3, 6);
  for (const x of [-0.84, 0.84]) for (let k = 0; k < 28; k++) {
    const y = k * 0.2 + 0.1, b = bend(y - 2.8), s = new THREE.Mesh(st, stitch);
    s.position.set(x * (1 - 0.018 * y), sign * (2.45 + b.y), -0.125 + b.z);
    g.add(s);
  }
  return shadow(g);
}
strapGroup.add(makeStrap(1), makeStrap(-1));

// dial and hands
const lDial = new THREE.Group(); W.add(lDial);
{
  const s = new THREE.Shape(); s.absarc(0, 0, 2.17, 0, Math.PI * 2, false);
  const h = new THREE.Path(); h.absarc(0, 0, 1.72, 0, 6.2832, true); s.holes.push(h);
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.035, bevelEnabled: false, curveSegments: 96 });
  lDial.add(new THREE.Mesh(g, new THREE.MeshPhysicalMaterial({ color: 0x0c0c0e, metalness: 0.7, roughness: 0.32 })));
  for (let i = 0; i < 60; i++) {
    const a = i / 60 * 6.2832, big = i % 5 === 0, q = i % 15 === 0;
    const m = new THREE.Mesh(new THREE.BoxGeometry(q ? 0.11 : big ? 0.07 : 0.018, q ? 0.36 : big ? 0.29 : 0.09, big ? 0.05 : 0.012), big ? gold : steel);
    const r = big ? 1.93 : 2.07;
    m.position.set(Math.sin(a) * r, Math.cos(a) * r, 0.05); m.rotation.z = -a; lDial.add(m);
  }
  shadow(lDial);
}
function handShape(len, w, tail = 0.25) {
  const s = new THREE.Shape();
  s.moveTo(-w * 0.45, -tail); s.lineTo(-w, len * 0.12); s.lineTo(-w * 0.75, len * 0.82); s.lineTo(0, len); s.lineTo(w * 0.75, len * 0.82); s.lineTo(w, len * 0.12); s.lineTo(w * 0.45, -tail); s.closePath();
  return new THREE.ExtrudeGeometry(s, { depth: 0.02, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 2 });
}
const hH = new THREE.Mesh(handShape(1.18, 0.075), gold), hM = new THREE.Mesh(handShape(1.82, 0.055), gold), hS = new THREE.Mesh(handShape(1.98, 0.012, 0.42), redHand);
hH.position.z = 0.15; hM.position.z = 0.19; hS.position.z = 0.23;
const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.18, 32), gold); hub.rotation.x = Math.PI / 2; hub.position.z = 0.17;
const lHands = new THREE.Group(); lHands.add(hH, hM, hS, hub); shadow(lHands); hS.castShadow = true; W.add(lHands);
// Sapphire crystal
const crystal = new THREE.Mesh(new THREE.SphereGeometry(5.2, 96, 24, 0, 6.2832, 0, 0.452),
  new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 0, roughness: 0.02, transparent: true, opacity: 0.1, envMapIntensity: 1.6, side: THREE.FrontSide, depthWrite: false }));
crystal.rotation.x = Math.PI / 2; crystal.position.z = 0.34 - 5.2 + 0.52; W.add(crystal);

// ---------- post ----------
const rt = new THREE.WebGLRenderTarget(1140, 2026, { type: THREE.HalfFloatType, samples: 4 });
const composer = new EffectComposer(renderer, rt);
composer.setSize(1140, 2026);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass(new THREE.Vector2(570, 1013), 0.07, 0.35, 1.6));
composer.addPass(new OutputPass());

// ---------- camera path (pose of W; the camera itself never moves except dolly) ----------
const K = [
  // t, rx, ry, rz, d, tx, ty, tz
  [0.0, -0.32, 0.38, 0.9, 13, P1[0], P1[1], 2.4],
  [0.55, -0.06, 0.08, 0.0, 8.4, P1[0], P1[1], 2.4],
  [1.32, -0.12, 0.14, -0.08, 7.8, P1[0], P1[1], 2.4],
  [1.75, -0.36, 0.24, -0.87, 9.6, 0.32, 0.0, 2.4],
  [2.72, -0.44, 0.32, -0.98, 8.9, 0.32, 0.0, 2.4],
  [3.22, -0.98, 0.0, -1.7, 14.6, 0, 0, 3.0],
  [4.32, -0.9, 0.0, -2.35, 13.8, 0, 0, 3.0],
  [4.78, -0.55, 0.45, -2.65, 4.5, PC[0], PC[1], 4.5],
  [5.52, -0.66, 0.55, -2.85, 3.9, PC[0], PC[1], 4.5],
  [5.98, -1.02, 0.2, -3.2, 13.5, 0, 0, 1.7],
  [6.74, -0.92, 0.3, -3.4, 13.2, 0, 0, 0.5],
  [7.22, 0, 0, -6.2832, 17.6, 0, 0, 0.1],
  [8.34, -0.03, 0.05, -6.2832, 16, 0, 0, 0.1],
  [8.86, -0.62, 0.66, -6.05, 18.4, 0, -1.5, 0],
  [10.0, -0.5, 0.46, -5.82, 17, 0, -1.4, 0],
];
function pose(t) {
  let i = 0; while (i < K.length - 2 && t > K[i + 1][0]) i++;
  const a = K[i], b = K[i + 1], k = seg(t, a[0], b[0]);
  // Moves between beats whip; holds drift linearly.
  const span = b[0] - a[0], e = span < 0.62 ? eio(k) : k;
  return a.slice(1).map((v, j) => lerp(v, b[j + 1], e));
}

// Each landing layer falls fast and lands exactly on its slam.
function landed(t, slam, dur = 0.2) { const x = seg(t, slam - dur, slam); return x * x * x; }
function shake(t) {
  let s = 0;
  for (const h of SLAMS) if (t >= h) s += Math.exp(-(t - h) * 16) * 0.075;
  return s;
}
const pop = (t, at, d = 0.32) => back(seg(t, at, at + d));

// Text per beat
const UI = [
  { n: '1', l: 'part' }, { n: '3', l: 'gears meshed' }, { n: null, l: 'parts' },
  { n: '60 s', l: 'one full turn' }, { n: null, l: 'parts' }, { n: '10:10', l: 'set' }, { n: '', l: '' },
];
const sk = $('sketch').getContext('2d');
{
  let s = '';
  for (let i = 0; i < 12; i++) { const a = i * 30, r = i % 2 ? 40 : 46; s += `<line x1="0" y1="-11" x2="0" y2="${-r}" transform="rotate(${a})"/>`; }
  $('burst').innerHTML = s;
}
const v3 = new THREE.Vector3();

window.renderAt = function (t) {
  // Beat
  let b = 0; for (let i = 0; i < BEATS.length; i++) if (t >= BEATS[i]) b = i;
  const tb = t - BEATS[b];

  // Drawing panel: pop in, self-draw fast.
  drawSketch(sk, b, eo(seg(tb, 0, 0.42)));
  const sc = lerp(0.93, 1, back(seg(tb, 0, 0.2)));
  $('sketchWrap').style.transform = `scale(${sc}) rotate(${(b % 2 ? 0.5 : -0.5) * (1 - seg(tb, 0, 0.2))}deg)`;

  // Layers
  const showLate = t >= 2.8, cue = (at) => pop(t, at);
  const z = (name, slam) => lerp(LEVEL[name], REST[name], landed(t, slam));
  lPlate.position.z = z('plate', SLAMS[0]);
  lGears.position.z = z('gears', SLAMS[1]);
  lBarrel.position.z = z('barrel', SLAMS[2]);
  lCage.position.z = z('cage', SLAMS[3]);
  lBridge.position.z = z('bridge', SLAMS[4]);
  lPlate.visible = lBarrel.visible = lCage.visible = lBridge.visible = showLate;
  lPlate.scale.setScalar(Math.max(.001, cue(2.86)));
  lBarrel.scale.setScalar(Math.max(.001, cue(2.94)));
  lCage.scale.setScalar(Math.max(.001, cue(3.02)));
  lBridge.scale.setScalar(Math.max(.001, cue(3.1)));
  G2.visible = t >= 1.4; G3.visible = t >= 1.5;
  const g2s = pop(t, 1.4), g3s = pop(t, 1.5);
  G2.scale.setScalar(Math.max(.001, g2s)); G3.scale.setScalar(Math.max(.001, g3s));
  G1.scale.setScalar(Math.max(.001, back(seg(t, 0, 0.3))));

  // Gears: exact tooth mesh.
  const th1 = -(0.8 * t + 3.2 * (1 - Math.exp(-2.6 * t)));
  const th2 = phi12 + Math.PI - Math.PI / 30 + 60 * (phi12 - th1) / 30;
  const th3 = phi23 + Math.PI - Math.PI / 20 + 30 * (phi23 - th2) / 20;
  G1.rotation.z = th1; G2.rotation.z = th2; G3.rotation.z = th3;
  barrel.getObjectByName('spring').rotation.z = t * 0.5;
  cage.rotation.z = t * 1.9;
  balance.rotation.z = Math.sin(t * Math.PI * 4) * 1.75;

  // Case arrives under the falling stack. Strap and dial finish the job.
  const caseIn = eo(seg(t, 5.55, 5.8));
  lCase.visible = t >= 5.55;
  lCase.position.z = lerp(-5, 0, caseIn);
  strapGroup.visible = t >= 7.15;
  strapGroup.position.z = lerp(-6, 0, eo(seg(t, 7.15, 7.5)));
  lDial.visible = t >= 7.0;
  lDial.position.z = lerp(9, 0.34, Math.pow(seg(t, 7.0, 7.25), 3));
  lHands.visible = t >= 7.12;
  lHands.position.z = lerp(9, 0.34, Math.pow(seg(t, 7.12, 7.3), 2));
  crystal.visible = t >= 8.35;
  crystal.material.opacity = 0.035 * seg(t, 8.35, 8.6);

  // Hands whip and land on 10:10 with a little overshoot.
  const wk = seg(t, 7.3, 8.25), whip = 1 - (1 - wk) ** 3;
  const settle = t > 8.25 ? Math.exp(-(t - 8.25) * 9) * Math.sin((t - 8.25) * 26) * 0.03 : 0;
  const mA = (10 / 60) * 6.2832 - (1 - whip) * 6.2832 * 8 + settle;
  const hA = ((10 + 10 / 60) / 12) * 6.2832 - (1 - whip) * 6.2832 * 2;
  hM.rotation.z = -mA; hH.rotation.z = -hA;
  hS.rotation.z = -(t * 6.2832 / 4) - (1 - whip) * 30; // ticks 4x a second, fast enough to read

  // Pose
  const [rx, ry, rz, d, tx, ty, tz] = pose(t);
  const sh = shake(t);
  W.rotation.set(rx + Math.sin(t * 71) * sh * 0.25, ry + Math.cos(t * 83) * sh * 0.25, rz);
  W.updateMatrixWorld();
  v3.set(tx, ty, tz).applyEuler(W.rotation);
  W.position.set(-v3.x + Math.sin(t * 97) * sh * 2, -v3.y + Math.cos(t * 89) * sh * 2, -v3.z);
  camera.position.set(0, 0, d);
  key.target.position.set(0, 0, 0);
  key.position.set(-6 + Math.sin(t * 0.8) * 2, 9, 13);
  scene.environmentRotation.set(0.2 * Math.sin(t * 0.9), t * 0.55, 0);
  composer.render();

  // Panel text
  const u = UI[b], pip = back(seg(tb, 0, 0.18));
  let n = u.n;
  if (b === 2) n = String(Math.round(lerp(3, 84, eo(seg(tb, 0.1, 1.1)))));
  if (b === 4) n = String(Math.round(lerp(84, 214, seg(t, SLAMS[0] - 0.05, SLAMS[4]))));
  $('num').textContent = n; $('lab').textContent = u.l;
  $('botUi').style.transform = `scale(${lerp(0.82, 1, pip)})`;
  $('botUi').style.opacity = b === 6 ? 0 : seg(tb, 0, 0.08);
  const ti = eo(seg(t, 8.7, 9.15));
  $('title').style.opacity = ti; $('title').style.transform = `translateY(${(1 - ti) * 26}px)`;
  $('topUi').style.opacity = 1 - seg(t, 8.4, 8.7);
  let fl = 0; for (const f of FLASHES) if (t >= f) fl = Math.max(fl, Math.exp(-(t - f) * 14) * 0.45);
  $('flash').style.opacity = fl;
};
window.ready = true;
