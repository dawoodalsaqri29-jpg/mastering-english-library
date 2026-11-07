# Building the Lantern video (free: pictures + camera motion + narration)

- `pictures/` — reference and scene pictures made in the Gemini app (free), plus the two title cards.
  `L-R8-heart-glade-unlit-edit.jpg` is the lit Lantern picture with its glow dimmed (ImageMagick) for "No flame".
- `voice/voice-*.mp3` — narration (Lily). `video/` — rendered sections.
- `build_section.py PLAN.json` renders a section: Ken Burns motion per picture (ffmpeg zoompan), crossfades,
  read-along subtitles burned in (libass, Inter font as TTF in a `fonts-ttf/` folder), narration mixed in.
  Run it from a folder holding `refs/` (the pictures), the voice mp3 and `fonts-ttf/Inter.ttf`.
- `planA.json` — Section A: which picture plays when (timed to the pauses in `voice-A.mp3`) and the subtitle lines.
- `card.html` — the title-card template (rendered with Playwright at 1920x1080).
