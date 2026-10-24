---
name: animated-english-lesson
description: Produce a long (8-15 min) animated English grammar or vocabulary lesson video for Dawood's YouTube: a narrator explains with slides that reveal in sync, Mia (face-rig close-ups and anime walk shots) acts the examples, plus quizzes with countdown, repeat-after-me, subscribe pop-up with bell, music bed, subtitles, thumbnail, chapters, 4K. Use for "درس past simple / present perfect / ..." and any lesson series.
---

# Animated English lesson v1.1

Built 24 Oct 2026 (Past Simple; then Past Continuous, Present Simple, Present Perfect, Future). Repo: `dawoodalsaqri29-jpg/mastering-english-library`, branch `instagram-assets`, `skills/animated-english-lesson/` (`engine/lesson_engine.py`, `engine/slides.py`, `engine/thumbnail.py`, `make_face_clips.py`, `queue2.sh`, `lessons/<id>/lesson.json`).

It uses the other skills:
- talking-face v5.1 (face rig: phoneme-synced mouth, blinks, turns, light);
- anime-character-motion (walk shots in the grass);
- anime-shot-director (sound design, voice EQ, ducking);
- video-4k-export.

## Standing preferences (Dawood)
- English throughout. Narrator voices vary between lessons (male/female: `bm_george`, `bf_emma`, `bm_lewis`, `bf_isabella`, ...). Mia keeps the child voice (`bf_lily` + rubberband pitch 1.26, shifted formants).
- A different background or theme colour per lesson (vanilla, white, blue, brown, ...).
- A mid-video subscribe/comment pop-up with a bell, NOT spoken. A spoken subscribe line only at the end.
- A strong hook first (Mia using the grammar in the scene), then the title.
- Explain everything (meaning, form, spelling, pronunciation, negatives, questions, time words, mistakes Arabic speakers make), with practice (repeat-after-me, quiz) and homework in the comments.
- 4K for YouTube; thumbnail, titles, description with chapters.

## lesson.json
- `theme` {bg, bg2, accent, accent2, text, good, bad}, `narrator` {voice, speed}, `child` {voice, speed, pitch}, `level`, `title`, `subtitle`.
- `beats`, in order, each with an optional `chapter` title:
  - `slide` with a `layout` and `data`, plus `say` [chunks]. Each chunk reveals the next item, and the newest item is highlighted. Layouts:
    - `title`, `title2`;
    - `timeline` (heading, points, mark);
    - `rule` (heading, rule, examples, note);
    - `table` (heading, cols, rows);
    - `pron` (heading, cols [[sound, words]], tip);
    - `qa` (heading, rule, pairs);
    - `chips` (heading, chips; each chip appears when its word is spoken);
    - `compare` (heading, rows [wrong, right]);
    - `checklist` (heading, items);
    - `end` (heading, task, next);
    - `repeat` (heading, lines, plus `repeat` [{text, gap}]).
  - `clip`: the `clip` id from `clips`, plus a `caption` (`<v>verb</v>` is highlighted).
    - Face clips play with Mia's own voice.
    - Video clips can be `mute: true`, with narrator `say` over them and `seconds`.
  - `quiz` with `data` {q with ___, options, answer} and `say_answer`. The engine reads the question, runs a 5-second countdown with ticks, then turns the answer green with a ding.
  - `popup`: the subscribe pill slides in at that moment, with a bell.
- `clips`:
  - `{"kind": "face", "text", "mood", "look_x", "look_y"}`, made by `make_face_clips.py`;
  - `{"kind": "image", "file", "move": "in"|"pan"}`: a story panel (1920×1080) with a slow Ken Burns push or pan; the beat's `say` is narrated over it, `seconds` is the minimum. Use panels where Mia matches the face rig (curly red hair: g1–g4 series), not the g5–g8 brown-hair art.
  - `{"kind": "video", "file", "in", "amb_audio", "amb_in"}`, for walk shots. `amb_audio` must be a voice-free footsteps/ambience stem (sound_design.py with no voices), never the shot's own track, which has Mia's present-tense lines.

Chips reveal when the chip's spoken words appear as a whole phrase in a chunk (words before any symbol or number note; years spelled out: `in 2020` = "in twenty twenty"). Don't name the chips in the intro chunk, or they all pop at once. Check with a quick simulation before building.

Reveal rule: chunks = items → item i on chunk i; chunks = items+1 → chunk 0 shows only the heading/rule; chunks = items+2 → an extra closing chunk (a tip). Write the `say` chunks to match.

## Steps
1. Write `lesson.json`: about 850–1000 narration words gives about 10–11 min. Hook (1–2 face clips) → title → meaning → form → spelling and pronunciation → walk clip with narration → irregulars or lists → popup → negatives → clip → questions → clip → time words → common mistakes (Arabic-speaker errors) → repeat-after-me → story (walk + face clips) → quiz (5) → recap → homework/end.
2. `python3 make_face_clips.py lesson.json`: TTS phrase by phrase with real pauses, alignment, performance plan, face rig. About 3 min each, run in the background.
3. `python3 engine/lesson_engine.py lesson.json Lesson_1080p.mp4`: renders slides (Playwright), TTS (cached), video, audio mix, `.en.srt`, `.build.json` (duration, chapters). About 30–40 min for 10 min.
4. Check: contact sheet every 20 s, a frame at each quiz answer, loudness ≈ −14 LUFS, voice clearly above the music. Listening isn't possible here: say so.
5. Thumbnail: add `"thumb": {t1, t2, t2_size, sub, pairs [[a,b],[a,b]], image, img_x, img_w}` to lesson.json and run `engine/thumbnail.py lesson.json thumb.png` (1280×720; title colour = theme accent, pairs = accent2). Pick a panel where Mia's face is visible.
6. 4K: `scale=3840:2160:flags=lanczos,unsharp=5:5:0.4`, crf 19. Thumbnail 1280×720 (Playwright HTML: Mia bust + 2-word title + 2 example pairs + level). Title, description with chapters from `.build.json` (YouTube needs the first chapter at 0:00 and each ≥ 10 s), tags.
7. Long runs: 2 CPUs, so render one thing at a time. `queue2.sh lessonA lessonB ...` runs clips → build → 4K for each, skipping finished files (resumable).
8. Save the lesson folder to the repo (`yt/lessons/<id>/`), excluding the build cache.

## Sound-effects layer (sfx_layer.py)
1. `LESSON_AUDIO_ONLY=1 python3 engine/lesson_engine.py lesson.json Lesson_1080p.mp4` re-runs the plan without re-rendering video and writes `<name>.stems/` (voice.wav, music.wav, sfx.wav, cues.json: every transition, text reveal, tick, quiz answer, pop-up).
2. `python3 engine/sfx_layer.py <stems> <library_folder> mix.wav --lufs -16 --tp -4 --video Lesson_1080p.mp4 Lesson_1080p_SFX.mp4`.
   - Library first: files are sorted by filename into whoosh, riser, hit, pop, tick, bell and ambience. A designed sound is used only when a category is empty, and the report lists which categories were missing.
   - Strong hits only on key moments (title, quiz start, quiz answers), each with a riser building into it. Elsewhere: soft whooshes on slide changes (at most one per 1.2 s), quiet pops when text appears, ticks on the countdown, a bell on the pop-up.
   - Hierarchy: voice, then effects (ducked 4 dB under speech), then music (ducked 10 dB). Two-pass loudnorm plus a limiter.
   - Outputs `_cuesheet.md` and `_report.json`.
3. Give the user 5 timestamps to check on headphones: title hit, a slide with text pops, the pop-up bell, a quiz countdown into its answer, and a transition into a clip.

## Limits to say
Mia only says the lines written for her (clips), with no live improvisation. The music bed is a soft synthetic piano. The face rig can't turn her head beyond about ±10°.
