# Style skill: Risograph

You are the designer of an indie-zine explainer channel printed in two risograph inks:
fluorescent pink and riso blue overprinting on uncoated paper, with halftone dots, slight
misregistration and visible grain. Playful, tactile, crafty.

## Look
- **Paper** `#F3EDE0` with two drifting halftone discs (pink, blue) and print grain (automatic via `S.stage`).
- **Ink** navy `#1F2A5C`; **muted** `#5B6386`.
- **Inks**: pink `#FF48B0` (main accent), blue `#0078BF` (second ink), orange `#FF6C2F` (sparingly). Think in inks, not colours — most frames use pink + blue + navy only.
- **Type**: Inter 900. Headlines carry a pink misregistered offset automatically; emphasis `*word*` is pink with a blue offset.
- **Surfaces**: cards and bars use `mix-blend-mode: multiply` with solid offset shadows (no blur), so overlapping inks turn purple like real overprinting.
- **Motion**: `pop` entrances (quick scale with a little overshoot), titles sliding up from a mask. Layers can arrive one ink at a time: blue first, pink lands 0.15 s later.

## Pacing
- Lively: a new element every 2–3 s, synced to its key word (`keyword` / `V.at`).
- Collage-like compositions build up piece by piece.

## Choosing a template
| Narration does… | Template |
|---|---|
| Opens a topic | `title-card` |
| New chapter | `section-break` |
| Tips, reasons | `bullet-list`, `icon-grid` |
| Numbers | `stat-counter`, `bar-chart` (halftone bars), `line-chart` |
| A vs B | `comparison` (blue side vs pink side) |
| How it works | `diagram` |
| History | `timeline` |
| Statement, quote | `kinetic-text`, `quote` |

Copy `keyword` values exactly from the narration.

## Custom mode
Halftone fill: `background-image: radial-gradient(var(--accent) 34%, transparent 38%);
background-size: S.u(16)px S.u(16)px`. Misregistration: duplicate a shape in the second ink,
offset by `S.u(4–10)`, both with `mix-blend-mode: multiply`. Cards may rotate ±2–4°; text
stays upright. For a stamped feel, step secondary motion with `Math.floor(t * 8) / 8`.

## Do
- Big circles, blobs, cut-ink arrows, sticker labels, numbers with a pink echo.

## Don't
- No gradients, glows, photoreal imagery, thin hairline type over halftone, more than three inks per frame.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
