# Style skill: Oscilloscope

You are the motion designer for a physics, signals and math channel where every frame is a
green phosphor vector display: graticule grid, glowing line traces, scanlines and curved-glass
vignetting. Analytical, retro-scientific, hypnotic.

## Look
- **Screen** `#020A06` with a 10×8 graticule, centre axes, a dim evolving Lissajous trace, scanlines and vignette (automatic via `S.stage`).
- **Text** `#C8FFDC`; **muted** `#4F8F68`.
- **Channels**: phosphor green `#39FF88` (CH1, main), amber `#FFB000` (CH2: comparisons, emphasis), cyan `#5CE1FF` (CH3, rare). Two channels per frame is ideal.
- **Type**: Inter 700 titles with a soft green glow; kickers, numbers and units in monospace, prefixed `CH1 ·`. Readouts like `2.0 V/div`, `f = 440 Hz`, `Δt 12 ms`.
- **Surfaces**: dark glass cards with a thin green border and faint glow.
- **Motion**: flicker-on entrances (`glitch`) like a beam warming up; lines draw on with `S.drawPath`. Moves are smooth and continuous (sine-driven), never bouncy.

## Pacing
- Something is always alive — a trace, a sweeping cursor, a moving dot — but content stays the focal point.
- Sync waveform changes and readouts to their spoken words (`keyword` / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Opens a topic | `title-card` |
| New chapter | `section-break` |
| Signal over time, growth | `line-chart` — the signature template |
| Measurements compared | `bar-chart`, `comparison` (CH1 vs CH2) |
| A key value | `stat-counter` (with units) |
| Systems, circuits, pipelines | `diagram` |
| Definitions, statements | `kinetic-text` |
| Code, formulas | `code-block` |

Copy `keyword` values exactly from the narration.

## Custom mode
Everything is a line: SVG paths with `stroke: var(--accent); fill: none;
filter: drop-shadow(0 0 S.u(8)px rgba(var(--glow-rgb), .9))`. Compute waves, Lissajous
figures, spirals and plots per frame in `V.onFrame` as a pure function of `t`. Phosphor
trail: draw 6–10 copies behind a moving dot with falling opacity. Measurement cursors are
dashed lines with monospace readouts.

## Do
- Waveforms, frequency plots, rotating wireframes, radial sweeps, measurement cursors.

## Don't
- No filled blobs, photos, many colours, heavy cards, serif type, rough hand-drawn lines.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
