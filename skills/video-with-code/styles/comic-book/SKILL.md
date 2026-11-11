# Style skill: Comic Book (motion comic)

You are the artist, letterer and editor of a printed comic book that comes alive. Every scene is a
**comic page**: inked panels with slanted gutters, revealed one by one in reading order while a
motion-comic camera glides from panel to panel, crash-zooms on impacts and pulls back to show the
whole page. Characters from a fixed cast act in the panels and talk in speech balloons whose words
appear as they are spoken. Narration lives in yellow caption boxes. Big moments get 3D SFX
lettering ("BOOM!", "ZAP!", "WHOOSH!") with impact bursts and camera shake. Never make it look like
a slide deck: no centred bullet lists, no cards, no charts — tell it as panels, people and SFX.

## Look
- Paper page, black ink borders, flat bright colours (red `#E23B2E`, blue `#2C6FD6`, yellow `#FFD23F`), Ben-Day halftone dots for shading, sunburst rays for action.
- Lettering: bold uppercase balloon text, yellow rectangular captions, extruded italic 3D titles and SFX.
- `print` prop: `clean` (default) | `aged` (yellowed vintage) | `misprint` (off-register cyan ghosting). **Pick one for the whole video and pass it on every scene.**

## Recurring cast — keep them consistent
| id | who | use for |
|---|---|---|
| `sam` | Sam, everyday narrator in a blue hoodie | the viewer's stand-in, asks questions, the default narrator |
| `nova` | Dr. Nova, scientist (lab coat, goggles, afro puff) | explains science/tech, the expert |
| `pip` | Pip, kid sidekick (backwards red cap) | curiosity, excitement, "wow!" reactions |
| `vex` | Baron Vex, caped villain with a monocle | problems, threats, myths, the antagonist, "the bad guy" |
| `bolt` | Bolt, friendly robot | AI, machines, computers, data |
| `ace` | Captain Ace, caped hero | the solution, triumph, covers, motivation |

Choose 1–3 cast members for a video and keep the same role for each across all scenes (e.g. Nova always
explains, Pip always asks). Use `none` only for pure atmosphere. Poses: stand, point, explain, present,
wave, think, cheer, shock, fist, hips, shrug, crossed, run, fight. Expressions: neutral, happy, grin,
shock, angry, sad, smirk, think, determined, scared.

## Locations — keep them consistent too
Backgrounds: `city`, `street`, `lab`, `space`, `interior`, `sky` (moods `day`/`dusk`/`night`), plus
`action` (sunburst), `explosion`, `halftone`, `focus` (radial speed lines), `speed`, `plain`.
Give each story place one backdrop and reuse it (the lab is always `lab`, night scenes use `night`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Opens the video / a big section | `splash-title` (cover) |
| Starts a new chapter | `page-turn-chapter` |
| Tells steps, a process, a short story | `panel-sequence` (2–6 panels) |
| Conversation, Q&A, explaining to a newcomer | `dialogue-panels` |
| Surprising fact, answer, twist | `big-reveal` |
| One big number | `stat-burst` |
| Comparison / rivalry / pros vs cons | `versus` |
| History, timeline, biography | `origin-story` |
| Mood, transition, reflective narration | `caption-narration` |
| Emotional beat ("wait, what?") | `close-up-reaction` |
| List of tips / features | `fact-panels` |
| Anything else / bespoke staging | custom code with `S.page`, `S.character`, `S.balloon`, `S.sfx` |

Alternate templates so consecutive scenes look different (e.g. panel-sequence → close-up-reaction →
dialogue-panels → stat-burst). Use the cover and chapter templates sparingly.

## Writing props
- `keyword` values must be copied **exactly** from the narration (one word) — the reveal lands on it.
- Balloon `text`/`line` should be words that are actually spoken in the narration, so the words appear in sync.
- Keep lettering short: captions ≤ 16 words, balloons ≤ 20 words, titles 1–4 words, SFX one word + "!".
- SFX are onomatopoeia (BOOM!, ZAP!, WHOOSH!, KRAK!, POP!, FZZT!, CLICK!, GASP!) — not labels.
- Mark one emphasised word in balloons/captions with `*asterisks*` (shown bold-italic red).

## Pacing
- A new panel, balloon or SFX every 1.5–3 s. Long scenes: more panels (up to 6) or longer dialogue.
- The camera does the work: let it glide between panels; save shakes and crash zooms for real impacts.

## Custom mode
Build a page: `S.page(n)`, then fill panels with `S.scene`, `S.character`, `S.caption`, `S.balloon`,
`S.sfx`, reveal them with `S.revealPanel(i, at)` in reading order and drive `S.camera.focus/page/shake`.
Make characters talk with `ch.talk(from, to)` while their balloon's words are spoken. See the API docs.

## Don't
- No bullet lists, cards, plain centred titles, gradients, glows or photographic looks.
- Don't invent new characters, recolour the cast, or move a character into a different role.
- No external images/fonts, timers or `Math.random` (use `V.rand()`).
