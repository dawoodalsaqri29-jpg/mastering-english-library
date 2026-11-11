# Paper Stop-Motion engine — custom-mode API (`S`)

Everything is cut paper on a craft table, animated **stop-motion style**: motion advances in
steps (default 10 steps/s = "on threes" at 30 fps) and every held piece "boils" (tiny seeded
jitter per step, like hand-placed paper). All S.* sizes and positions are **px** (use `V.s(n)`
/ `S.u(n)`; frame = `V.width` × `V.height`). Do not use `V.timeline()` directly for paper
pieces — use the piece methods below (or `S.tl()` for DOM you build yourself), otherwise the
motion is smooth video motion, not stop-motion.

## Skeleton

```js
const sc = S.scene(root, { set: "kitchen" });       // world + diorama set; returns layers + ground y
const leo = S.puppet("leo", { parent: sc.front, x: V.width * 0.25, y: sc.ground + V.s(20), height: V.height * 0.56 });
leo.enter(0.1, "left").talk();                      // hops in, mouth syncs to V.words
const t = V.at("bread") - 0.15;
S.prop("bread", { parent: sc.front, x: V.width * 0.62, y: sc.ground, size: V.s(220), ground: true }).place(t, "drop");
leo.gesture(t, "point");
S.cutText("Fresh *bread*", { parent: sc.top, mode: "ransom", size: V.s(90) }).place(0.5);  // in-flow: wrap in a positioned box
S.flush();                                          // finish paper edges (called automatically in custom mode)
```

## World & sets

| Call | Does |
|---|---|
| `S.scene(root, { set?, push? })` | Creates the stop-motion world (layers `bg/back/mid/front/top`, lamp light, vignette, exposure flicker, stepped camera push-in `push`=0.03). `set`: a diorama or backdrop name. Returns `{ ground, bg, back, mid, front, top, W, H }`. Call once, first. |
| `S.set(name)` | Adds a diorama/backdrop to the current world. Dioramas: `town`, `countryside`, `kitchen`, `classroom`, `ocean`, `underwater`, `space` (layered paper, with stepped ambient life: drifting clouds, turning sun, bobbing waves, leaping fish, swaying weed, twinkling stars, swinging rocket…). Backdrops: `kraft`, `cardboard`, `cork`, `felt`, `mat` (green cutting mat), `night`, `paper:#hex`. Returns `{ name, ground }`. |
| `S.setNames`, `S.cast`, `S.propNames`, `S.gestures` | Lists of valid names. |
| `S.stage(root)` | Compatibility: paper world + a padded flex column in the top layer (shared helpers then work, but prefer paper pieces). |

Layers: put scenery in `back`/`mid`, characters & hero props in `front`, labels/text in `top`.
`sc.ground` is the floor line (px) of the set — stand puppets and grounded props on it.

## Pieces (everything that moves)

`S.paper`, `S.prop`, puppets' `.piece`, cut-text pieces and `S.piece(el)` all return a **piece**:

| Method | Motion (all stepped, shadow lifts while moving) |
|---|---|
| `.place(at, how?, {dur}?)` | Entrance. `how`: `"hand"` (default: slides in lifted and presses down), `"drop"` (falls from above the frame, bounces), `"pop"` (grows out), `"stamp"`, `"flip"` (unfolds from its bottom/top), `"slide-left"|"slide-right"|"slide-up"|"slide-down"` (from off-frame). Hidden before `at`. |
| `.move(at, dur, {x, y, r, s, sx, sy, o}, {ease, lift, arc, hops}?)` | Move to offsets (px from its base position, deg, scale). |
| `.hop(at, dx, dy, {hops=2, height, dur=0.5 per hop})` | Hand-moved hops (no walk cycles in this style). |
| `.wiggle(at, dur, deg)` | Rock back and forth (e.g. a swinging card). |
| `.flip(at, dur, axis "y"|"x")` | Paper flip (squash to an edge and back). |
| `.set(at, props)` | Instant re-placement. |
| `.out(at, how?)` | Exit: `"lift"` (default, picked up out of frame), `"drop"`, `"slide-left/right"`, `"pop"`; hidden afterwards. |
| `.poseAt(t)` | Evaluated pose `{x,y,r,s,sx,sy,o}`. |
| `.el`, `.inner` | Outer element (transform) / inner element (boil + shadow). |

`S.piece(el, { parent?, x?, y?, w?, h?, ax?, ay?, r?, boil?, shadow?, z? })` turns any element into a
piece. With `x, y` it is absolutely positioned at that anchor (`ax, ay` 0…1 of `w × h`, default
centre); without, it stays in flow (flex/inline) and moves relative to where layout put it.

## Paper

| Call | Returns |
|---|---|
| `S.paper(shape, { parent, x, y, w, h, color, edge?, tex?, pattern?, r?, ax?, ay?, inner? })` | A cut-paper shape piece centred on `x, y`. `shape`: `rect round circle ellipse blob cloud star burst tri heart tag banner arrow leaf drop hill arch wave ridge` (or an array of `[x,y]` points in design units). `edge`: `"cut"` (scissors, default), `"torn"` (white fibrous core), `"zig"`, `"clean"` or one per side `["torn","cut","cut","cut"]`. `tex`: `"paper"|"card"|"cork"|"felt"`. `pattern`: `"dots"|"stripe"|"check"|"lines"|"grid"`. `inner`: extra SVG markup in design units (box `w/V.unit × h/V.unit`). |
| `S.prop(name, { parent, x, y, size, ground?, r?, color? })` | A paper object (`size` = px height). `ground: true` → `y` is its bottom. Names: `tree pine house sun cloud moon star planet rocket car boat plane apple book lightbulb coin money heart flower mountain fish cup clock globe gift trophy cake laptop drop leaf flame bolt bread carrot pizza battery magnet phone tooth` (+ aliases like idea, water, fire, time, world). Unknown names become a round paper **sticker** of the matching icon (`S.iconNames`). |
| `S.sheet(parent, { color, shape?, edge?, tex?, pattern? (CSS), cls? })` | An HTML `div` made of paper (texture + cut/torn outline computed after layout); put content in `sheet.content`. Wrap it with `S.piece(sheet, …)` to animate. |
| `S.tape({ parent, x, y, w?, h?, r?, kind? })` | Washi/masking tape strip with torn ends (`kind`: `"masking"|"pink"|"blue"|"green"|"clear"`). |
| `S.pin({ parent, x, y, color?, size? })` | Plastic push pin. |
| `S.paperMarkup(shape, w, h, fill, opts)`, `S.pinMarkup(cx, cy, r)`, `S.googlyMarkup(cx, cy, r, px, py)`, `S.stitchMarkup(x1,y1,x2,y2)`, `S.propMarkup(name)` | Raw SVG strings (design units) for building your own SVG art; wrap the `<svg>` with `S.svgBox(w, h, { html, scale })` and `S.piece`. |
| `S.colors` | Craft palette: `kraft cream white ink red tomato orange yellow mustard lime green leaf forest teal sky navy night purple lilac pink rose brown wood grey slate sand cork felt chalk`. |

## Cut-paper type

`S.cutText(text, { parent, mode?, size?, maxLines?, maxWidth?, maxHeight?, color?, paper?, ink?, fit? })`
returns `{ el, pieces, place(at, { how?, stagger?, sync? }) }`. `*word*` = emphasis (red strip / accent letters).

| mode | Look |
|---|---|
| `"strip"` (default) | Each word on its own scissor-cut strip (magazine cut-outs). |
| `"ransom"` | Ransom-note collage — every letter on its own scrap, mixed fonts/colours. Titles. |
| `"letters"` | Big letters cut from coloured paper (`color` forces one colour). Numbers/stats. |
| `"label"` | One typewriter label strip. Captions, values. |
| `"stencil"` | Stencilled kraft tag with a punched hole. Short labels. |

`place(at, { sync: true })` lands each word as it is spoken. Text auto-shrinks to `maxLines`
(default 3) and `maxWidth`. The text element flows — put it inside a positioned box
(e.g. a `div` with `position:absolute; left/top/width`) in `sc.top`.

## Puppets (recurring cast)

`S.puppet(name, { parent, x, y (feet), height (px of an adult), face: 1 | -1 })` — paper puppets with
split-pin joints. People: `mo` (kid, orange hoodie), `pip` (girl, yellow dress, pigtails),
`otto` (grandpa, flat cap, moustache), `ada` (scientist, lab coat, purple bun), `leo` (chef).
Animals: `biscuit` (dog), `mittens` (cat), `hoot` (owl, googly eyes). Same `height` for everyone
keeps their relative sizes (kids/animals are smaller).

| Method | Does |
|---|---|
| `.talk(from?, to?)` | Mouth replacement (5 cut-out mouths / jaw / beak) on every spoken word in the range (default whole scene) + head bob. |
| `.gesture(at, kind, dur?)` | `wave point cheer shrug think present nod shock` (limbs rotate on their pins; faces right unless `face: -1`). |
| `.look(at, dir)` | Eyes: −1 left … 1 right. Blinks automatically. |
| `.enter(at, "left"|"right"|"drop"|"pop"|"slide-up")`, `.exit(at, "left"|"right")` | Hop in / out (3 hand-moved hops). |
| `.hopTo(at, x, y?, { hops?, height? })` | Hop to an absolute position. |
| `.place(at, how)` | Same as piece entrances. |
| `.piece`, `.el`, `.svg` | Underlying piece / element. |

## Stop-motion clock

| Call | Does |
|---|---|
| `S.step(fps?)` | Get/set the step rate (6–15, default 10). Set it before building. |
| `S.stepTime(t)`, `S.stepIndex(t)` | Quantise a time. |
| `S.onStep(fn(ts, stepIndex, t))` | Per-frame callback with the stepped time — use for your own continuous motion (`ts` only changes 10×/s). |
| `S.tl()` | A `V.timeline()` whose tweens advance in steps (same `to/from/fromTo/set/call` API). |
| `S.boil(k)` | Global boil amount (0 = locked, 1 default, 2 = very handmade). |
| `S.wordAt(t)` | Index of the word being spoken at `t` (−1 when silent). |
