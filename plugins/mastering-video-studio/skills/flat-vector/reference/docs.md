# Flat Vector Explainer — engine API (`S` in custom mode)

A rich flat-vector illustration engine: procedural SVG worlds, illustrations, round bird
mascots, liquid shape morphs, particles and zooms through scales. Everything moves; every
property is a pure function of time. **Use `S.scene()` — not `S.stage()` — in this style.**

## Coordinates

All engine sizes and positions are **design units (du)**: the short side of the frame is
1080 du. `ctx.W × ctx.H` is 1920×1080 (16:9), 1080×1920 (9:16) or 1080×1080 (1:1).
(0,0) is the top-left. You never multiply by `V.unit` for engine calls — the engine does.
Keep text inside `ctx.safe = { x, y, w, h, r, b }`.

## Skeleton

```js
const ctx = S.scene(root, { world: "space" });   // backdrop + camera + layers + text layer
const t1 = S.when("planet", 0.3);                 // time a word is spoken (−0.15 s), or 30 % of the scene
const p = S.illus("saturn", { x: ctx.W * 0.6, y: ctx.H / 2, size: 420 });
p.pop(t1).float(12, 4, 3);                        // elastic entrance, then gentle bobbing
S.say(ctx, "Rings of *ice*", { x: ctx.W / 2, y: ctx.H * 0.14, at: t1 + 0.2 });
const pip = S.creature("pip", { x: ctx.W * 0.18, y: ctx.H * 0.68, size: 260, look: [1, -0.3] });
pip.enter(0.2, "drop").feel("wow", t1);
```

No `S.guard` needed. Never use CSS transitions, timers or `Math.random` — use `V.makeRand`.

## `S.scene(root, { world })` → ctx

| world | look |
|---|---|
| `space` | deep violet cosmos, nebula glows, twinkling stars, dust |
| `sky` | bright day: gradient sky, rotating sun, drifting clouds, layered hills with trees (has ground) |
| `dusk` | purple→peach sunset, big low sun, mountain silhouettes (has ground) |
| `night` | indigo night, glowing moon, stars, lit city skylines |
| `micro` | teal liquid, out-of-focus cells, rising bubbles |
| `body` | warm red interior, drifting blood cells |
| `ocean` | underwater blue, swaying light rays, bubbles, sandy floor |
| `studio` | indigo stage with slowly turning rings — data and numbers |
| `none` | nothing (e.g. for `S.zoomThrough`, which paints its own worlds) |

ctx fields: `W, H, cx, cy, safe, portrait, square, landscape, tone ("light"|"dark")`,
`horizon`, `groundY(x)` (only sky/dusk — y of the hill surface at x),
layers (SVG `<g>`): `bg` (static), `far` (parallax 0.25), `mid` (0.6), `world` (1, default parent),
`front` (1.15), `fx` (particles); `ui` (HTML text layer, no camera), `defs`, `svg`, and
`cam` — the camera:

```js
ctx.cam.to(t, { x, y, z }, dur = 1.2, ease = "inOut"); // pan/zoom (zoom interpolates in log space)
ctx.cam.push = 0.035;   // slow push-in across the scene (default); ctx.cam.breathe = 0.014
```
Camera x/y are the world point at the frame centre (default `W/2, H/2`), z = zoom (1).

## Actors (everything returned by illus / creature / morph / say / tag / bigNumber)

Chainable; times in seconds; all motion composes.

| Method | Effect |
|---|---|
| `.at(x, y)` `.size(s)` `.rot(deg)` `.alpha(o)` | Base placement (`size` is a scale factor; illus are 200 du at 1) |
| `.enter(t, kind?, dur?)` | `pop` (elastic overshoot, default) `grow` `rise` `drop` (bounces in from above) `slide-left` `slide-right` `spin` `fade` |
| `.pop(t)` | Same as `.enter(t, "pop")` |
| `.exit(t, kind?, dur?)` | `shrink` (default) or `fade` |
| `.float(amp=10, period=3.4, rotAmp=2)` | Organic bob + sway. Give *everything* a float. |
| `.spin(degPerSec)` `.pulse(amt, period)` | Continuous rotation / breathing scale |
| `.to(t, { x, y, s, r, o }, dur=0.8, ease="inOut")` | Keyframed move (s = scale). Eases: `pop outBack outCubic inOut inCubic outExpo bounce linear` |
| `.hook(fn(t, state))` | Extra per-frame logic (pure in t) |
| `.radius()` | Current radius in du (illus/creature) |

`S.actor(node)` wraps any SVG element you drew (draw it centred on 0,0) into an actor;
`S.actor(el, true)` for an HTML element in `ctx.ui`.

## Illustrations — `S.illus(name, opts)`

opts: `{ x, y, size (diameter du, default 200), color, color2, parent (default ctx.world),
shadow: "glow"|"long"|"ground"|"none" (auto by world), seed, face (bacteria/virus/drop/sun) }`.
Each illustration is animated on its own (earth rotates, galaxy spins, DNA twists, flames flicker,
clocks tick, neurons fire, smoke rises…). List: `S.illusNames()`.

- **Cosmos:** `planet` (opts `ring`, `color`, `color2`), `saturn`, `gasgiant`, `mars`, `earth`, `moon`, `sun`, `star`, `galaxy`, `blackhole`, `rocket`, `satellite`
- **Micro & life:** `cell`, `bacteria`, `virus`, `dna`, `molecule` (opts `atoms` 2–6), `atom`, `neuron`, `body` (opts `highlight`: brain|heart|lungs|stomach|gut), `brain`, `heart`, `pill`, `tree` (`fruit`), `sprout`, `flower`, `fish`, `people`
- **World & things:** `city`, `house`, `factory`, `mountain`, `cloud` (`rain`), `wave`, `drop`, `flame`, `bolt`, `bulb`, `gear`, `clock` (`speed`), `blast`, `coin` (`symbol`), `cash`, `book`, `laptop`, `chip`, `magnet`, `trophy`
- Unknown names (any shared icon name, e.g. `"shield"`) render as a shaded colour orb with the icon.

`S.defineIllus(name, (g, o) => { …draw into g centred at 0,0, radius ≈ 100…; return { r: 100 } })`
registers your own. Building blocks: `S.svgEl(tag, attrs, parent)`, `S.ball(parent, r, color)`
(shaded sphere), `S.fvGrad(color)` (lit gradient fill), `S.fvGlow(color, alpha)` (radial glow fill),
`S.shade(c, p)` / `S.tint(c, p)` / `S.mix(a, b, p)`, `S.smoothPath(points)`, `S.sparkleD(r)`,
`S.heartD(scale)`, `S.starD(r1, r2, n)`, `S.cloudD(w)`, `S.cuteFace(g, x, y, s)`.

## Recurring cast — `S.creature(name, opts)`

Round bird mascots, identical in every scene: **`pip`** (sunny yellow chick, curly tuft),
**`nova`** (teal bird, pink crest, tail feathers), **`momo`** (violet owl, ear tufts, big eyes),
**`zib`** (mint jelly blob with a glowing antenna — the micro-world guide).
opts: `{ x, y, size (default 200 ≈ body diameter), parent, mood, look: [dx, dy] (−1…1), talk: true|false|[from, to], color }`.

They blink, breathe, bob, flutter their wings and **talk automatically while words are spoken**
(beak opens with the voice). Methods (plus all actor methods):

| Method | Effect |
|---|---|
| `.feel(expr, t)` | `neutral` `happy` (^ ^ eyes) `wow` (big eyes, open beak, raised brows) `think` (looks up, one brow, head tilt) `sad` `excited` (happy + bouncing + flapping) |
| `.look(dx, dy, t)` | Pupils glance (−1…1) |
| `.wave(t, dur=1.6)` | Waves a wing |
| `.hop(t, n=1)` | Hops n times |
| `.talk(false)` | Silence (e.g. a second creature that listens) |

`S.mini(parent, color, variant)` draws a cheap static mini creature (crowds); returns a `<g>` of radius ≈ 40.

## Morphing — `S.morph(steps, opts)`

`steps: [{ shape, color, at }]` — the silhouette liquid-morphs (matched 120-point outlines,
aligned start, slight swirl, colour blend, squash on arrival) to each shape at its `at` time.
opts: `{ x, y, size (default 300), dur (0.75), face }`. Shapes (`S.shapes`): `circle blob star sparkle
heart drop leaf cloud hexagon triangle square bolt moon flower gear house arrow person tree bulb
planet rocket brain virus cell shield crown fish`. `S.shapePath(name, scale)` → static path `d`.
**Match-cut:** morph from a shape matching the outgoing illustration (e.g. `circle` for a planet)
while `illus.exit()` hides it, then pop the next illustration as the morph lands.

## Zoom through scales — `S.zoomThrough(ctx, levels, opts)`

`levels: [{ illus, label, world, color, size (fraction of short side, 0.52), focus: [x, y] }]`,
outermost first. Each next world opens as a wobbly liquid portal inside the previous hero while
the camera keeps zooming (log-scale, nested so every level stays crisp). `focus` is the point
(in the hero's 200-du units) the camera dives into (default centre).
opts: `{ times: [start of each transition], dur (1.6), K (scale step, 7) }`. Use `ctx` with
`world: "none"`. Returns `{ z(t), levels: [{ g, inner, hero }] }`. Put labels/creatures on
`ctx.front` / `ctx.ui`.

## Particles & effects

- `S.particles(ctx, { kind, count, colors, speed, size, dir (deg), area: {x,y,w,h}, parent, opacity })` —
  kinds `dust stars bubbles sparks snow cells confetti`; stream endlessly (wrap-around).
- `S.burst(ctx, x, y, t, { radius, count, size, colors, parent })` — ring + sparkles exploding outward.
- `S.connector(ctx, x1, y1, x2, y2, { at, dur, bend, color, width, dash })` — curved dotted line that
  draws itself; returns `{ path, mid, point(q) }` (use `point` to move something along it).

## Friendly type (HTML layer, design-unit positions, centre-anchored)

- `S.say(ctx, text, { x, y, at, size (96), maxWidth, maxLines (3), em, color, shadow, stagger, sync })` —
  heavy white headline, words pop in with elastic overshoot; `*word*` turns yellow. `sync: true`
  pops each word when it is spoken.
- `S.tag(ctx, text, { x, y, at, color, size (40), maxWidth, tone: "solid", float })` — rounded label pill with a colour dot.
- `S.bigNumber(ctx, { value, from, prefix, suffix, decimals, at, dur, size (260), x, y, color })` — giant counting number.

All return actors (move with `.to`, hide with `.exit`).

## Helpers

`S.when(phrase, fracFallback, after)` → seconds; `S.syncTimes(keys)` (shared);
`S.onT(fn(t))` per-frame function registered with the scene; `S.palette` (`ink night deep violet lilac
pink rose coral orange sun cream mint green leaf teal aqua sky blue navy white brown sand grey red gold`)
— palette names work anywhere a colour is accepted; `S.cast`, `S.worlds`, `S.illusNames()`, `S.worldFor(illusName)`.
