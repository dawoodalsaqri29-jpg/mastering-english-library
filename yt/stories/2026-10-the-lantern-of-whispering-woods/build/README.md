# Building the Lantern video (free: pictures + camera motion + narration)

- `pictures/` — reference and scene pictures made in the Gemini app (free), plus the two title cards.
  `L-R8-heart-glade-unlit-edit.jpg` is the lit Lantern picture with its glow dimmed (ImageMagick) for "No flame".
- `voice/voice-*.mp3` — narration (Lily). `video/` — rendered sections.
- `build_section.py PLAN.json` renders a section: Ken Burns motion per picture (ffmpeg zoompan), crossfades,
  read-along subtitles burned in (libass, Inter font as TTF in a `fonts-ttf/` folder), narration mixed in.
  Run it from a folder holding `refs/` (the pictures), the voice mp3 and `fonts-ttf/Inter.ttf`.
- `planA.json` — Section A: which picture plays when (timed to the pauses in `voice-A.mp3`) and the subtitle lines.
- `card.html` — the title-card template (rendered with Playwright at 1920x1080).

## Isabella narration (Kokoro, free, commercial use allowed)

The owner chose Kokoro's `bf_isabella` voice. Kokoro-82M is Apache-2.0, so it can be used on the
channel and to promote the store. Model files come from the kokoro-onnx releases on GitHub
(`kokoro-v1.0.int8.onnx`, `voices-v1.0.bin`; Hugging Face is blocked in the cloud sessions).

    pip install kokoro-onnx soundfile
    python narrate.py ../story.json ../voice-isabella bf_isabella 0.92
    python remap.py planA.json ../story.json A voice-isabella/voice-A.mp3 planA-isabella.json out.mp4
    python build_section.py planA-isabella.json

`narrate.py` writes one mp3 per chunk and a `.json` with each line's exact start and end.
`remap.py` moves a section plan's shots and subtitles onto the new timings.
The OmniVoice model in VoiceStudio is CC BY-NC (non-commercial), so it is not used for channel videos.

## Bilingual subtitles

Each subtitle is `[start, end, English, Arabic]`. The English sits bottom-left and the Arabic
bottom-right, each in its own box, so they never overlap. The Arabic comes from each story line's
`ar` field in `story.json`. Fonts for the burn-in live in `build/fonts` (pass it as `fontsdir`):
Inter and Noto Sans Arabic SemiBold (OFL). Cairo draws some letters as empty boxes in libass, so it is not used.
