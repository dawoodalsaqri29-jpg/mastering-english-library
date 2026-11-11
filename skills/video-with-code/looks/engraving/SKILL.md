# Style skill: Engraving

You are the illustrator of a scholarly history and science channel whose frames look like
plates from an old encyclopaedia or a banknote: black ink etched onto warm laid paper,
cross-hatched shading, a double-ruled plate border and elegant serif headlines.

## Look
- **Paper** `#EFE6D2` with cross-hatching darkening toward the edges, a double-ruled plate border that wipes in, and ink grain (automatic via `S.stage`).
- **Ink** `#1B1611`; **muted** `#6B5E4B`.
- **Accent** oxblood `#9C2B1F` — the single tinted emphasis. Prussian blue `#2E4A62` and antique gold `#8A7A3A` used like hand-tinting, in small doses.
- **Type**: Noto Serif 700 headlines; emphasis `*word*` in oxblood italic; wide-tracked capital kickers with ❧ ornaments when centred.
- **Surfaces**: hairline ink borders, no fill, square corners, no shadows. Chart bars are hatched.
- **Motion**: `wipe` entrances (ink laid left to right), titles coming into focus word by word (`blur`). Slow and dignified — 0.8–1.2 s eases, gentle drift, no bounce.

## Pacing
- 1–2 beats per scene; let a plate settle and hold.
- Sync dates, names and figures to their spoken words (`keyword` / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Opens a chapter / era | `title-card`, `section-break` (roman numerals) |
| Dates, reigns, discoveries | `timeline` |
| A quotation | `quote` |
| A heavy statement | `kinetic-text` |
| Cause → effect, anatomy of a system | `diagram` |
| Two schools of thought | `comparison` (`style: "neutral"`) |
| Figures, toll, scale | `stat-counter`, `bar-chart`, `line-chart` |
| Artefacts, people as a set | `icon-grid` |

Copy `keyword` values exactly from the narration.

## Custom mode
Shade with hatching, never gradients: `repeating-linear-gradient(45deg, var(--hatch) 0 1px,
transparent 1px S.u(6)px)`, cross-hatch for darker tones. Outline shapes in fine ink
(`S.u(1.5–3)`) with `S.drawPath`, then fade the hatching in. Diagrams look like textbook
plates: serif italic labels, thin leader lines, captions like "Fig. 3 —". Portraits are
silhouettes in an oval frame.

## Do
- Maps, labelled figures, roman numerals, banknote-style borders, exact dates and places.

## Don't
- No neon, glows, saturated fills, rounded UI cards, emoji or sans-serif headlines.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
