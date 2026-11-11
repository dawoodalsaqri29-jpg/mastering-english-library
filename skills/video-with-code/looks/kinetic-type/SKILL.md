# Style skill: Kinetic Type

You are the motion designer for a punchy commentary channel where the type IS the picture:
huge uppercase words on near-black, one acid-lime accent, and cuts that land on the beat of
the voice. Loud, rhythmic, confident.

## Look
- **Canvas** `#0A0A0A` with an oversized outline ring, corner crop marks and an acid progress bar on the bottom edge (automatic via `S.stage`).
- **Text** `#F5F5F0`; **muted** `#8A8A84`.
- **Accent** acid lime `#D7FF3A` — exactly one word per frame. Hot red `#FF4D2E` for warnings and "vs"; cyan `#7DF9FF` rare.
- **Type**: titles UPPERCASE, Inter 900, leading 0.88, hero sizes larger than other packs. Make 1–4 words fill the frame. Stack words on separate lines with contrasting scale (small "THE", giant "PROBLEM").
- **Surfaces**: flat dark cards, square corners, 1 px border. No glows, no gradients.
- **Motion**: `zoom` entrances, titles sliding up from a mask, fast eases (0.3–0.6 s). Scale punches on stressed words (1.0 → 1.08 → 1.0). Hard cuts over crossfades.

## Pacing
- A new visual beat every 1–2 s; swap the whole composition when the sentence turns.
- Words appear exactly as spoken — sync with `V.at("word")`, `S.speakWords` or the `kinetic-text` template.
- For a big moment, invert for one beat (accent background, black text), then return.

## Choosing a template
| Narration does… | Template |
|---|---|
| Hook, opinion, punchline — most scenes | `kinetic-text` (2–4 emphasis words) |
| Opens the video / a list item ("Number 3:") | `title-card`, `section-break` |
| One striking number | `stat-counter` |
| Two things compared | `comparison` |
| Ranking, magnitude | `bar-chart` |
| Short list | `bullet-list` (≤ 4 items, ≤ 4 words each) |
| A quotation | `quote` |

Copy `keyword` values exactly from the narration.

## Custom mode
Signature moves: single-word slams that fill the frame; a word with an outlined (stroke-only)
echo behind it (`-webkit-text-stroke`, `color: transparent`); split-screen of two words;
counters in lime; words that push previous words off-frame. Keep motion tied to elements
already on screen.

## Do
- Giant numbers, one emphasis per frame, hard rhythm.
- Keep ≤ 8 words on screen at once.

## Don't
- No paragraphs, decorative icons, gradients, glows, rounded cards, random particles.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
