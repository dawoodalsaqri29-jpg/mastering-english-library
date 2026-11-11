# Comic Book engine — custom-mode API (`S`)

The scene is a comic page inside a motion-comic camera. Coordinates: **page px** (the page is
exactly `V.width × V.height`; at camera zoom 1 page px = screen px). Panel-relative positions are
fractions `0..1` of the panel's bounding box. All `at` values are seconds (use `V.at("word")`).

## Skeleton

```js
const pg = S.page(3, { kind: "feature" });         // 3 panels, first one big
const [A, B, C] = pg.panels;
const t1 = V.at("ocean"), t2 = V.at("clouds", t1), t3 = V.at("fall", t2);
S.scene(A, "sky");  S.scene(B, "city", { mood: "dusk" });  S.scene(C, "street", { mood: "night" });
S.revealPanel(A, 0.1, "pop"); S.revealPanel(B, t2 - 0.1); S.revealPanel(C, t3 - 0.1);
const pip = S.character("pip", { panel: A, shot: "mid", x: 0.7, pose: "point", facing: "left" });
S.caption("Water evaporates...", { panel: A, pos: "tl", at: 0.3 });
const nova = S.character("nova", { panel: B, shot: "mid", x: 0.3, pose: "explain" });
S.balloon("It condenses around dust!", { speaker: nova, at: t2 });
nova.talk(t2, S.phraseEnd("It condenses around dust!", t2));
S.sfx("SPLASH!", { panel: C, x: 0.5, y: 0.6, at: t3, burst: true, palette: "ice" });
S.camera.focus(A, 0, 0.01); S.camera.focus(B, t2 - 0.5, 0.7); S.camera.focus(C, t3 - 0.5, 0.7);
S.camera.page(V.duration - 1.4, 1);
```

## Page & panels

| Call | Does |
|---|---|
| `S.comic(root?, { print: "clean"\|"aged"\|"misprint" })` | (Optional) start the comic with a print finish. Called automatically by `S.page`. |
| `S.page(layout, opts?)` | New page. `layout`: 1–6 or `"splash"`, `"duo"`, `"trio"`, `"feature"`, `"quad"`, `"five"`, `"six"`, `"strip"`. opts: `kind` (`grid`/`feature`/`strip`), `slant` (0–2, gutter tilt), `weights` (relative panel sizes), `gutter`, `margin`, `polys` (custom quads in page px), `inset: { panel, corner: "tr"\|"tl"\|"br"\|"bl", size }` (extra small inset panel, last index), `borderless: [i]`, `seed`. Portrait automatically stacks panels vertically. A second `S.page` call stacks the new page **under** the first (see `S.pageTurn`). Returns `{ el, panels, over }`. |
| `S.panel(i)` / `S.panels()` | Panel objects of the current page: `{ i, bbox:{x,y,w,h}, poly, w, h, el, world, fg, bg (SVG in panel px) }`. |
| `S.revealPanel(panel, at, style?)` | Panel stays blank until `at`, then the border inks in and the art appears. style: `wipe` (default), `pop`, `drop`, `flash`, `none`. Panels never revealed are visible from the start. |
| `S.scene(panel, name, { mood, palette, cx, cy, horizon })` | Paint a backdrop: `city`, `street`, `lab`, `space`, `interior`, `sky`, `action` (rotating sunburst), `explosion`, `halftone`, `focus`, `speed`, `plain`. mood `day`/`dusk`/`night`; palette `red`/`blue`/`yellow`/`purple`/`green`/`pink`. |
| `S.focusLines(panel, { at, cx, cy, clear })` | Radial comic focus lines (appear at `at`). |
| `S.speedLines(panel, { at, color, opacity })` | Moving horizontal speed lines. |
| `S.pageTurn(at, dur?)` | 2D page curl: the top page peels away revealing the next page. |

## Characters

`S.character(name, opts)` — `name`: `sam`, `nova`, `pip`, `vex`, `bolt`, `ace` (`S.cast`, `S.castInfo()`).
opts: `panel`, `x` (centre 0..1), `y` (bottom 0..1), `shot`: `full` | `mid` (waist up) | `close` (head & shoulders) |
`xclose` (eyes–mouth) | `silhouette`, `pose`, `expression`, `facing`: `right` | `left`, `scale`, `maxW` (fraction of panel width),
`silhouette: true`, `at` + `enter` (`pop`/`slide`/`drop`/`fade`).

Returns `ch`:

| Method | Does |
|---|---|
| `ch.pose(name, at)` | Blend to a pose (~0.3 s): stand, point, explain, present, wave (animated), think, cheer, shock, fist, hips, shrug, crossed, run, fight. |
| `ch.expr(name, at)` | Snap expression: neutral, happy, grin, shock, angry, sad, smirk, think, determined, scared (sweat drops, anger vein, blush included). |
| `ch.talk(from, to)` | Mouth moves with `V.words` syllables between the times (robot: equaliser mouth). Characters also blink and breathe. |
| `ch.anchor("mouth"\|"head"\|"eyes"\|"chest"\|"feet")` | Page-px point (for balloon tails, camera targets). |
| `ch.enter(at, style)` | Entrance. |

## Lettering

| Call | Does |
|---|---|
| `S.balloon(text, { speaker, panel, kind, x, y, at, end, maxWidth, size, tail, sync })` | Speech balloon; tail points at `speaker`'s mouth (or `tail: {x,y}` page px, `"none"`). kind: `speech`, `thought` (cloud + bubbles), `shout` (jagged), `whisper` (dashed), `radio` (electronic). Auto-placed above the speaker; words appear as spoken. Returns `{ el, x, y, rx, ry, at, end }`. |
| `S.caption(text, { panel, pos, x, y, at, tone, label, maxWidth, size, tilt, screen, sync })` | Rectangular narration box at a panel corner (`tl`,`tr`,`bl`,`br`,`top`,`bottom`) or `x,y` (0..1 top-left). tone `yellow`/`white`/`dark`/`red`; `label` = small red heading ("MEANWHILE..."); `screen: true` pins it to the screen so camera moves don't crop it. |
| `S.sfx(text, { panel, x, y, at, size, palette, rotate, burst, shake, ramp, cameraShake, hold })` | Animated 3D SFX: letters pop in staggered, then jitter. palette: `fire`, `pow`, `zap`, `ice`, `slime`, `pink`, `red`, `gold`. `burst: true\|"#color"` adds a jagged burst behind. Without `panel`, x/y are page px. |
| `S.logo(text, { x, y, maxW, maxH, at, palette, arc, slam, shake })` | Big title in extruded 3D lettering (1–2 lines), letters slam in. Returns `{ el, at, land }` (`land` = time the last letter lands). |
| `S.lettering(parent, text, opts)` | Static 3D lettering block (low level). |
| `S.burst({ panel, x, y, r, spikes, fill, fill2, at, aspect })` | Jagged impact burst. |
| `S.phraseEnd(text, at)` | When a spoken phrase ends (for `talk`). |

`*word*` in balloon / caption text = emphasised (bold-italic red).

## Camera (motion comic)

| Call | Does |
|---|---|
| `S.camera.focus(panelOrRect, at, dur?, { zoom, anchor:[fx,fy], ease })` | Glide/zoom so the panel fills the frame (`zoom` multiplies; `<1` = looser). `dur: 0.01` = cut. |
| `S.camera.page(at, dur?)` | Pull back to the whole page. |
| `S.camera.to(cx, cy, zoom, at, dur, ease)` | Free move in page px (zoom ≥ 1). |
| `S.camera.shake(at, amp?, dur?)` | Impact shake. |
| `S.camera.flash(at, strength?)` | White flash. |
| `S.camera.drift(amount)` | Breathing zoom amount (default 0.012). |

The camera starts at the full page unless a move starts at 0. Moves are evaluated purely from time.

## Helpers
`S.pattern(kind, color, size, { bg, r, angle })` → `url(#id)` fill (`dots` Ben-Day, `hatch`, `cross`, `lines`) for SVG you draw
yourself; `S.halftone(svgParent, { x, y, w, h, color, angle, radial, maxR, step })` → graduated dot shading path;
`S.svg(tag, attrs, parent)` SVG element; `S.colors` palette; `S.bumpy(cx,cy,rx,ry,n,rand)` cloud path.
