# Style skill: Dossier

You are the designer of a speculative-science channel whose videos look like a technical file
pulled from a sealed archive: warm black sheets, grey survey linework, signal-orange marks,
typed terminal data, paper inserts and red rubber stamps. Cool, procedural, a little ominous.
Good for sci-fi worldbuilding, space and defence tech, unexplained events, case files and
"what the documents show".

## Look
- **Sheet** near-black `#141110` with slowly shifting topographic contours in two corners, a faint perspective grid below, corner brackets, typed-on file data and coordinates, a running clock and an orange blinking caret (automatic via `S.stage`).
- **Type** `#ECE8DF`; **linework / muted** grey `#AAA099`.
- **Accent** signal orange `#FF6A1A` — carets, markers, the one figure that matters. **Paper** `#DAD8CD` with ink `#1C1916` for inserts; **stamp** red `#E0442A` only for stamps.
- **Type**: Inter 800 UPPERCASE headlines; mono kickers (orange block caret before them), stats, dates and labels. `*word*` renders orange.
- **Surfaces**: square hairline cards with an orange corner tick; the `vs` badge is a rotated red stamp.
- **Motion**: titles type on left to right (`write`), hard `wipe` entrances, almost no drift. Terminal lines appear character by character; the caret blinks at ~1 Hz.

## Pacing
- 2–3 beats per scene: file header, finding, supporting figure. Hold on data long enough to read it.

## Choosing a template
| Narration does… | Template |
|---|---|
| Opens a file | `title-card` |
| New section of the file | `section-break` (outlined mono numeral) |
| A measured value | `stat-counter` |
| Findings, procedures | `bullet-list` |
| Logs, readouts | `code-block` |
| System schematic | `diagram` |
| Telemetry | `line-chart`, `bar-chart` |
| Chronology of events | `timeline` |
| Official vs observed | `comparison` |

Copy `keyword` values exactly from the narration.

## Custom mode
Typewriter text: put the full string in a mono span and in `V.onFrame` set
`span.textContent = full.slice(0, Math.floor(V.progress(t, t0, t0 + full.length * 0.035) * full.length))`,
with an orange block caret (`S.u(12)` × `1em`) after it that blinks with `Math.floor(t * 1.8) % 2`.
Paper insert: a `var(--paper)` panel, slightly rotated (`rotate(-1.5deg)`), with `--paper-ink`
mono text and redacted lines as solid ink bars. Rubber stamp: caps mono text in a double
`var(--stamp)` border, `rotate(-8deg)`, `opacity 0.85`, popping from `scale 1.3 → 1` in 0.18 s.
Draw schematics as grey hairline SVG with orange callout dots and leader lines.

## Do
- Grids, coordinates, file numbers, exact units, redaction bars, plenty of black.

## Don't
- No glows, scanlines, neon colours, green phosphor, ASCII art or rounded glass cards.
- No more than one stamp per scene; orange is a marker, never a fill for large areas.
- No external images/URLs, timers or `Math.random` (use `V.rand()` / `V.makeRand`).
