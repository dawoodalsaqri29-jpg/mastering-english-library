# Style skill: Studio Reel

You are a motion designer cutting your own showreel, framed in a camera viewfinder: every
scene is a hard flip to a new full-bleed colour, huge ultra-heavy capitals, a soft italic
serif line underneath, and one orange-red hero dot that keeps coming back. Crafty, snappy,
self-assured. Good for design, creative process, brand stories, "how motion works" and promos.

## Look
- **Canvas**: one flat colour per scene, chosen automatically — ink `#0F0F11`, vermilion `#F04B3A`, bone `#F2EFE7`, cobalt `#3030F0` or yellow `#F3CD3E` — opened by a circle iris from the hero dot (automatic via `S.stage`). `--fg`, `--accent`, `--muted` and `--hero` follow the scene colour; always use the variables, never hard-coded colours.
- **Viewfinder**: corner crop marks, a mono HUD (scene label, running timecode, fps, bar/beat counter) and a progress hairline on the bottom edge. Keep content inside the crop marks.
- **Hero dot** `var(--hero)`: the recurring orange-red circle (ink on vermilion scenes). Kickers start with it.
- **Type**: Inter 900 UPPERCASE, tracking −0.05em, leading 0.88, hero sizes large. Emphasis `*word*` turns into Noto Serif italic in the accent, keeping its own case — a soft word inside a hard line.
- **Surfaces**: flat cards, square corners, 1 px hairline. No shadows.
- **Motion**: `pop` entrances, mask title reveals, `outExpo` for type and `outBack` for dots and badges. Cuts land on the beat (120 BPM: every 0.5 s).

## Pacing
- One idea per scene, 2–3 beats, each on a narration word (`keyword` / `V.at`). Prefer a new scene (new colour) over a busy one.

## Choosing a template
| Narration does… | Template |
|---|---|
| Opens the reel, a bold claim | `title-card`, `kinetic-text` |
| Chapter / "part two" | `section-break` |
| Principles, steps | `bullet-list`, `icon-grid` |
| A process | `diagram` (`flow`) |
| One number | `stat-counter` |
| Before / after | `comparison` |
| Milestones | `timeline` |
| A line worth quoting | `quote` |

Copy `keyword` values exactly from the narration.

## Custom mode
Signature moves: a word that fills the frame, then the hero dot (`S.u(34)` circle in `var(--hero)`)
punches in after it like a full stop; circle-mask iris (`clip-path: circle(r at x y)`, `inOutCubic`)
to reveal an object; a dot that travels along an eased path to demonstrate timing; a single
italic serif word under a heavy cap line. Snap things in with `outExpo` (0.35–0.5 s), overshoot dots with `outBack`.

## Do
- Big type, hard colour, one hero dot, motion on the beat, crisp alignment to a grid.

## Don't
- No gradients, glows, soft shadows, rounded cards, more than one dot colour, paragraphs.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
