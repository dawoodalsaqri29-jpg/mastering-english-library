# Pixel Quest — custom-mode API (`S` additions)

Everything is drawn on ONE low-res canvas. Coordinates are **logical pixels** (not CSS px):
`g.W × g.H` is about 320×180 (16:9), 180×320 (9:16) or 180×180 (1:1). Use `g.W`, `g.H`,
`g.groundY` for layout; never `V.width`. All drawing is a pure function of time — schedule
behaviour with times (`V.at("word")`), never mutate state inside draw callbacks.

## Game

```js
const g = S.game(root, { world: "cave", hud: null, intro: "iris" });
g.hud({ level: "WORLD 2-1 DEEP ROCK" });     // hearts, score, level name, XP bar (= narration progress)
```

`S.game(root, opts)` → game. opts: `world` (`grassland|cave|city|castle|space|underwater`),
`groundY` (default 80 % of H, 62 % in portrait), `length` (level length for decorations),
`intro` (`iris|dither|wipe|none`), `background:false` (plain `bgColor`), `deco:false`,
`hearts`, `maxHearts`, `score`.

| Member | Does |
|---|---|
| `g.W, g.H, g.groundY, g.portrait, g.square, g.landscape` | layout |
| `g.follow(actor, {lead})` | camera follows an actor (side-scroll) |
| `g.camera([[t, x], …])` / `g.camFn = t => x` | scripted camera |
| `g.platform(x, y, w)` / `g.gap(x, w)` | floating platform / pit in the ground (world coords) |
| `g.item(icon, {x, y, at, label, value, appear, toast, title})` | collectible floating until `at`, then pops with +value, sparkle, and an ITEM GET! toast showing `label` |
| `g.enemy(type, {x, y, appear, defeat, label, patrol, tint})` | `slime bat spike ghost bugbot`; `label` shows a red tag; `defeat` squashes it (+200) |
| `g.dialog([{who, text, at, end, name}], {y, h, style})` | RPG box with portrait + typewriter synced to the voice; the speaker's mouth moves |
| `g.narrate({who:"orla", y, h})` | the whole narration in a paged dialog box |
| `g.toast(label, at, {icon, title, style, dur, pos:"top"|"bottom"})` | slide-in notification window |
| `g.banner(text, at, {scale, y, dur, color})` | big bouncing pixel headline (STAGE CLEAR!) |
| `g.window(x, y, w, h, {at, until, style, title, text, draw(gg,t,x,y,w,h)})` | RPG window (`blue dark red green gold paper`) |
| `g.label(text, x, y, {at, until, color, scale, align})` | pixel text on the UI layer |
| `g.burst(x, y, at, {n, colors, speed, life, gravity, screen})` | particles |
| `g.explode(x, y, at, {big})` · `g.sparkle(x, y, at)` · `g.popup("+1", x, y, at)` | game juice |
| `g.shake(at, power, dur)` · `g.flash(at, color, dur)` | screen shake / flash |
| `g.score(at, value)` · `g.loseHeart(at)` · `g.gainHeart(at)` | HUD counters |
| `g.draw((ctx, t, camX) => …, z)` | custom world-layer drawing (subtract `camX` from world x) |
| `g.overlay((ctx, t) => …, z)` | custom UI-layer drawing (screen coords) |

## Actors (the cast)

```js
const kit = g.actor("kit", { x: 40 });       // kit | orla | bolt | vex | mo   (S.cast)
kit.walkTo(220, V.at("forest"));              // walk (speed 55 px/s) — or walkTo(x, at, dur)
kit.runTo(400, V.at("hurry"));
kit.jump(V.at("leap"), { h: 20, dur: 0.55, to: g.groundY - 30, dx: 0 });  // to = new floor (land on a platform)
kit.cheer(V.at("yes"), 1.2);  kit.hurt(V.at("ouch"));  kit.pose("think", 1, 2);
kit.face(-1, 2.5);  kit.talk(t0, t1);  kit.hide(t);  kit.show(t);
```
Options: `x, y (floor), face, scale (1|2), z, shadow`. Poses (`S.poses`): idle0/1, walk0–3,
run0–3, jump, cheer0/1, hurt, attack, talk, point, think. Mouths open on spoken words
automatically while the actor has a dialog line.

## Art & helpers

- `S.sprite(name, {pose, frame, tint})` → canvas: cast frames, items (`S.items`: coin gem heart star key scroll potion book sword shield bulb trophy chest crystal clock bag gear flag bomb leaf zap chip map), enemies (`S.enemies`), bosses (`S.bosses`: blob golem eye), decorations.
- `S.portrait(id, {talking})` → 16×16 bust canvas.
- `S.pixel.text(ctx, str, x, y, {color, scale, outline, shadow, align, n, wave, top})` — bitmap font (11 px line height); `n` = visible chars (typewriter).
- `S.pixel.measure(str, scale)`, `S.pixel.wrap(str, maxW, scale)`, `S.pixel.window(ctx, x, y, w, h, {style, open})`, `S.pixel.dither(ctx, x, y, w, h, color, coverage)`, `S.pixel.gradient(ctx, x, y, w, h, colors)`, `S.pixel.textClock(text, t0, t1)` → `{n(t), speaking(t)}`.
- `S.palette` — named colours (`ink white yellow red blue green …`).
- `S.render(templateId, root, props)` also works inside custom code.

Sizes: hero sprite ≈ 24×28 px, items 10–12 px, font cap height 7 px. Keep 4 px margins.
