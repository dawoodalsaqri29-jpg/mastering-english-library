// "Name it before I do" — deterministic: window.renderAt(t) sets the whole picture for time t.
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
const eo = (x) => 1 - Math.pow(1 - x, 3);
const back = (x) => { const c = 1.9; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); };
const lerp = (a, b, k) => a + (b - a) * k;

export const WORDS = [
  { en: 'Book', ar: 'كتاب' }, { en: 'Pencil', ar: 'قلم رصاص' }, { en: 'Apple', ar: 'تفاحة' },
  { en: 'Clock', ar: 'ساعة حائط' }, { en: 'Globe', ar: 'كرة أرضية' }, { en: 'Cup', ar: 'كوب' },
];
export const INTRO = 1.2, STEP = 2.2, SAY = 1.0;
export const END = INTRO + STEP * WORDS.length; // outro starts
window.TIMING = { INTRO, STEP, SAY, END, WORDS };

// ---------- renderer ----------
const renderer = new THREE.WebGLRenderer({ canvas: $('gl'), antialias: true, preserveDrawingBuffer: true });
renderer.setSize(1140, 2026, false);
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, 570 / 1013, 0.1, 100); camera.position.set(0, 0.4, 13);
{
  const c = document.createElement('canvas'); c.width = 285; c.height = 506;
  const g = c.getContext('2d'), r = g.createRadialGradient(142, 230, 10, 142, 230, 380);
  r.addColorStop(0, '#2c3d58'); r.addColorStop(0.55, '#141c2b'); r.addColorStop(1, '#05070c');
  g.fillStyle = r; g.fillRect(0, 0, 285, 506);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; scene.background = tex;
}
{
  const env = new THREE.Scene(); env.background = new THREE.Color(0x080808);
  const box = (w, h, x, y, z, i, col = 0xffffff) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(i), side: THREE.DoubleSide }));
    m.position.set(x, y, z); m.lookAt(0, 0, 0); env.add(m);
  };
  box(10, 3, 0, 9, 3, 10); box(26, 26, 0, 11, -2, 2.2, 0xfff4e6); box(2, 12, -9, 1, 3, 8, 0xfff0dd); box(2, 12, 9, -2, 2, 6, 0xdde8ff);
  const pm = new THREE.PMREMGenerator(renderer); scene.environment = pm.fromScene(env, 0.02).texture;
}
scene.environmentIntensity = 0.8;
const key = new THREE.SpotLight(0xfff1dd, 220, 60, 0.6, 0.6, 1.4);
key.position.set(-6, 9, 13); key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0006;
scene.add(key, key.target, new THREE.AmbientLight(0xffffff, 0.25));
const rim = new THREE.DirectionalLight(0x9fc4ff, 1.6); rim.position.set(6, 3, -6); scene.add(rim);
// floor shadow catcher
const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.ShadowMaterial({ opacity: 0.45 }));
floor.rotation.x = -Math.PI / 2; floor.position.y = -2.3; floor.receiveShadow = true; scene.add(floor);

const P = (color, o = {}) => new THREE.MeshPhysicalMaterial({ color, roughness: 0.45, metalness: 0, clearcoat: 0.3, ...o });
const shadow = (o) => { o.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } }); return o; };

// ---------- objects ----------
function makeBook() {
  const g = new THREE.Group();
  const coverM = P(0x1f4fa8, { roughness: 0.5 }), pageM = P(0xf6f1e4, { roughness: 0.85, clearcoat: 0 }), goldM = new THREE.MeshPhysicalMaterial({ color: 0xe9bb5a, metalness: 1, roughness: 0.25 });
  const backC = new THREE.Mesh(new RoundedBoxGeometry(2.2, 3.0, 0.1, 3, 0.04), coverM); backC.position.set(0, 0, -0.2);
  const pages = new THREE.Mesh(new THREE.BoxGeometry(2.08, 2.9, 0.32), pageM); pages.position.set(0.02, 0, 0);
  const spine = new THREE.Mesh(new RoundedBoxGeometry(0.14, 3.0, 0.5, 3, 0.05), coverM); spine.position.set(-1.1, 0, 0);
  const hinge = new THREE.Group(); hinge.position.set(-1.1, 0, 0.2);
  const front = new THREE.Mesh(new RoundedBoxGeometry(2.2, 3.0, 0.1, 3, 0.04), coverM); front.position.set(1.1, 0, 0);
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.12, 0.02), goldM); stripe.position.set(1.15, 0.7, 0.06);
  const stripe2 = stripe.clone(); stripe2.position.y = 0.45; stripe2.scale.x = 0.7;
  hinge.add(front, stripe, stripe2);
  g.add(backC, pages, spine, hinge); g.userData.hinge = hinge;
  return shadow(g);
}
function makePencil() {
  const g = new THREE.Group(), body = new THREE.Group();
  const yel = P(0xf5b81c, { roughness: 0.35, clearcoat: 0.8 });
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 3.4, 6), yel);
  const wood = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.22, 0.6, 6), P(0xe4b47e, { roughness: 0.8, clearcoat: 0 })); wood.position.y = -2.0; wood.rotation.x = Math.PI;
  wood.rotation.x = 0; wood.geometry = new THREE.CylinderGeometry(0.22, 0.02, 0.6, 6); wood.position.y = -2.0;
  const lead = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.2, 12), P(0x2a2a2a, { roughness: 0.3 })); lead.rotation.x = Math.PI; lead.position.y = -2.36;
  const band = new THREE.Mesh(new THREE.CylinderGeometry(0.235, 0.235, 0.32, 24), new THREE.MeshPhysicalMaterial({ color: 0xc9ccd2, metalness: 1, roughness: 0.25 })); band.position.y = 1.86;
  const eraser = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.38, 24), P(0xf08aa0, { roughness: 0.7, clearcoat: 0 })); eraser.position.y = 2.2;
  body.add(shaft, wood, lead, band, eraser); g.add(body); g.userData.body = body;
  return shadow(g);
}
function makeApple() {
  const g = new THREE.Group(), pts = [];
  for (let i = 0; i <= 40; i++) {
    const a = -Math.PI / 2 + i / 40 * Math.PI, r = Math.cos(a) * 1.25 * (1 + 0.08 * Math.sin(a)), y = Math.sin(a) * 1.15;
    pts.push(new THREE.Vector2(Math.max(0.001, r - (i > 34 ? (i - 34) * 0.03 : 0)), y - (i > 37 ? 0.12 : 0)));
  }
  const body = new THREE.Mesh(new THREE.LatheGeometry(pts, 64), P(0xd2202c, { roughness: 0.28, clearcoat: 1 }));
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.6, 10), P(0x5a3a1c, { roughness: 0.8 })); stem.position.y = 1.25; stem.rotation.z = -0.25;
  const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.4, 24, 12), P(0x3c9a3a, { roughness: 0.5 })); leaf.scale.set(1, 0.12, 0.45); leaf.position.set(0.42, 1.38, 0); leaf.rotation.z = 0.5;
  g.add(body, stem, leaf); return shadow(g);
}
function makeClock() {
  const g = new THREE.Group();
  const face = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.45, 0.16, 64), P(0xfbfaf6, { roughness: 0.6 })); face.rotation.x = Math.PI / 2;
  const rimM = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.13, 20, 80), P(0xd23a35, { roughness: 0.3, clearcoat: 1 }));
  g.add(face, rimM);
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * Math.PI * 2, t = new THREE.Mesh(new THREE.BoxGeometry(i % 3 ? 0.06 : 0.1, i % 3 ? 0.18 : 0.3, 0.03), P(0x222222));
    t.position.set(Math.sin(a) * 1.2, Math.cos(a) * 1.2, 0.1); t.rotation.z = -a; g.add(t);
  }
  const hand = (len, w, col) => { const p = new THREE.Group(), m = new THREE.Mesh(new THREE.BoxGeometry(w, len, 0.04), P(col)); m.position.y = len / 2 - 0.12; p.add(m); p.position.z = 0.14; return p; };
  const hH = hand(0.75, 0.11, 0x1a1a1a), hM = hand(1.08, 0.07, 0x1a1a1a), hS = hand(1.15, 0.025, 0xd23a35);
  hS.position.z = 0.17;
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.1, 20), P(0xd23a35)); cap.rotation.x = Math.PI / 2; cap.position.z = 0.18;
  g.add(hH, hM, hS, cap); g.userData = { hH, hM, hS };
  return shadow(g);
}
function makeGlobe() {
  const g = new THREE.Group(), spin = new THREE.Group();
  const c = document.createElement('canvas'); c.width = 1024; c.height = 512; const x = c.getContext('2d');
  x.fillStyle = '#1f6fc4'; x.fillRect(0, 0, 1024, 512);
  let s = 7; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  x.fillStyle = '#4fae4a';
  for (let k = 0; k < 9; k++) { const cx = r() * 1024, cy = 90 + r() * 330; for (let j = 0; j < 14; j++) { x.beginPath(); x.ellipse(cx + (r() - 0.5) * 160, cy + (r() - 0.5) * 110, 20 + r() * 60, 15 + r() * 45, r() * 3, 0, 6.3); x.fill(); } }
  x.fillStyle = '#f2f5f8'; x.fillRect(0, 0, 1024, 28); x.fillRect(0, 488, 1024, 24);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const ball = new THREE.Mesh(new THREE.SphereGeometry(1.35, 64, 32), P(0xffffff, { map: tex, roughness: 0.4, clearcoat: 0.6 }));
  spin.add(ball); spin.rotation.z = 0.41;
  const metal = new THREE.MeshPhysicalMaterial({ color: 0xd9b26a, metalness: 1, roughness: 0.3 });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.04, 12, 80, Math.PI * 1.2), metal); ring.rotation.z = -Math.PI * 0.1 + 0.41 - Math.PI / 2 + Math.PI * 0.4;
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.7, 16), metal); stem.position.y = -1.85;
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.85, 0.18, 40), P(0x3a2a1f, { roughness: 0.4, clearcoat: 0.8 })); base.position.y = -2.2;
  g.add(spin, ring, stem, base); g.userData.spin = spin; g.position.y = 0.3;
  return shadow(g);
}
function makeCup() {
  const g = new THREE.Group(), pts = [];
  const prof = [[0.001, -1.0], [0.95, -1.0], [1.02, -0.9], [1.12, 1.0], [1.04, 1.0], [0.95, -0.85], [0.001, -0.85]];
  for (const [r, y] of prof) pts.push(new THREE.Vector2(r, y));
  const mugM = P(0x2bb39a, { roughness: 0.25, clearcoat: 1, side: THREE.DoubleSide });
  const body = new THREE.Mesh(new THREE.LatheGeometry(pts, 64), mugM);
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.11, 16, 40, Math.PI * 1.25), mugM); handle.position.set(1.15, 0.0, 0); handle.rotation.z = -Math.PI * 0.62;
  const coffee = new THREE.Mesh(new THREE.CircleGeometry(1.02, 48), P(0x4a2a16, { roughness: 0.2, clearcoat: 1 })); coffee.rotation.x = -Math.PI / 2; coffee.position.y = 0.75;
  g.add(body, handle, coffee);
  const steamM = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, depthWrite: false });
  const steam = [];
  for (let i = 0; i < 3; i++) {
    const cp = []; for (let k = 0; k <= 20; k++) cp.push(new THREE.Vector3((i - 1) * 0.35 + Math.sin(k * 0.6 + i) * 0.12, 0.9 + k * 0.06, 0));
    const m = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(cp), 40, 0.035, 6), steamM); g.add(m); steam.push(m);
  }
  g.userData.steam = steam;
  shadow(g); steam.forEach((m) => (m.castShadow = false));
  return g;
}
const OBJ = [makeBook(), makePencil(), makeApple(), makeClock(), makeGlobe(), makeCup()];
OBJ.forEach((o) => { o.visible = false; scene.add(o); });

// ---------- post ----------
const rt = new THREE.WebGLRenderTarget(1140, 2026, { type: THREE.HalfFloatType, samples: 4 });
const composer = new EffectComposer(renderer, rt); composer.setSize(1140, 2026);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass(new THREE.Vector2(570, 1013), 0.08, 0.35, 1.5));
composer.addPass(new OutputPass());

const sk = $('sketch').getContext('2d');

window.renderAt = function (t) {
  // which card: 0 = intro, 1..6 = words, last word holds through the outro
  const b = t < INTRO ? 0 : Math.min(WORDS.length, 1 + Math.floor((t - INTRO) / STEP));
  const start = b === 0 ? 0 : INTRO + (b - 1) * STEP, tb = t - start;
  drawSketch(sk, b, eo(seg(tb, 0, 0.55)));
  const sc = lerp(0.93, 1, back(seg(tb, 0, 0.2)));
  $('sketchWrap').style.transform = `scale(${sc}) rotate(${(b % 2 ? 0.6 : -0.6) * (1 - seg(tb, 0, 0.2))}deg)`;

  OBJ.forEach((o, i) => (o.visible = false));
  if (b > 0) {
    const i = b - 1, o = OBJ[i]; o.visible = true;
    const pin = back(seg(tb, 0.1, 0.5));
    const out = i < WORDS.length - 1 ? seg(tb, STEP - 0.18, STEP) : 0;
    const s = Math.max(0.001, pin * (1 - out));
    o.scale.setScalar(s * (1 - 0.3 * eo(seg(t, END, END + 0.5))));
    const baseY = o === OBJ[4] ? 0.3 : 0.2;
    o.position.y = baseY + Math.sin(t * 2.2) * 0.08 + (1 - eo(seg(tb, 0.1, 0.5))) * 1.2;
    o.rotation.set(0, 0, 0);
    const ot = eo(seg(t, END, END + 0.5));
    const tt = Math.max(0, tb - 0.1);
    if (i === 0) { o.rotation.set(-0.2, 0.55 - tt * 0.25, 0.04); o.userData.hinge.rotation.y = -2.1 * eo(seg(tb, 0.7, 1.3)); }
    if (i === 1) { o.rotation.set(0.15, 0, -0.62 + Math.sin(tt * 3) * 0.05); o.userData.body.rotation.y = tt * 3.2; }
    if (i === 2) { o.rotation.set(0.12, tt * 1.6, 0); o.position.y = baseY + Math.abs(Math.sin(tt * 4.2)) * 0.5 * Math.exp(-tt * 1.2); }
    if (i === 3) {
      o.rotation.set(-0.1, Math.sin(tt * 1.2) * 0.35, 0);
      const land = eo(seg(tb, 0.3, 1.3)), u = o.userData;
      u.hM.rotation.z = -(10 / 60 * 6.283 + (1 - land) * 6.283 * 3); u.hH.rotation.z = -((10 + 10 / 60) / 12 * 6.283 + (1 - land) * 6.283 * 0.5);
      u.hS.rotation.z = -t * 6.283 / 2;
    }
    if (i === 4) { o.rotation.set(0.1, -0.3, 0); o.userData.spin.rotation.y = tt * 2.4; }
    if (i === 5) {
      o.rotation.set(0.32, -0.5 + tt * 0.35, 0); o.position.y -= 1.5 * ot;
      o.userData.steam.forEach((m, k) => { m.material.opacity = 0.25 + 0.12 * Math.sin(t * 3 + k); m.position.y = (t * 0.3 + k * 0.2) % 0.4; m.scale.y = 1 + 0.15 * Math.sin(t * 2 + k); });
    }
  }
  key.position.set(-6 + Math.sin(t * 0.8) * 2, 9, 13);
  scene.environmentRotation.set(0.15 * Math.sin(t * 0.9), t * 0.5, 0);
  composer.render();

  // text
  const hk = 1 - seg(t, INTRO - 0.2, INTRO + 0.1);
  $('hook').style.opacity = Math.max(hk, 0.0) * 0 + 1; // hook stays all video as the frame title
  $('count').textContent = b === 0 ? 'GET READY' : `WORD ${b} / ${WORDS.length}`;
  $('topUi').style.opacity = t > END ? 1 - seg(t, END, END + 0.3) : 1;
  const w = b > 0 ? WORDS[b - 1] : null, rev = b > 0 ? back(seg(tb, SAY, SAY + 0.25)) : 0;
  $('en').textContent = w ? w.en : ''; $('ar').textContent = w ? w.ar : '';
  const fade = t > END ? 1 - seg(t, END, END + 0.3) : 1;
  $('word').style.opacity = clamp01(rev) * fade; $('word').style.transform = `scale(${lerp(0.7, 1, clamp01(rev))})`;
  const ti = eo(seg(t, END + 0.2, END + 0.6));
  $('title').style.opacity = ti; $('title').style.transform = `translateY(${(1 - ti) * 30}px)`;
  let fl = 0; for (let k = 1; k <= WORDS.length; k++) { const f = INTRO + (k - 1) * STEP + SAY; if (t >= f) fl = Math.max(fl, Math.exp(-(t - f) * 14) * 0.3); }
  $('flash').style.opacity = fl;
  const q = back(seg(t, 0.15, 0.5)) * (1 - seg(t, INTRO - 0.15, INTRO));
  $('qmark').style.opacity = clamp01(q); $('qmark').style.transform = `scale(${lerp(0.5, 1, clamp01(q))}) rotate(${Math.sin(t * 5) * 6}deg)`;
};
window.ready = true;
