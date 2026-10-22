---
name: english-story-video
description: Make Dawood Al-Saqri's long illustrated English story videos for his YouTube channel — a ~15-minute fairy-tale story in a painterly storybook style (pictures and Seedance clips Dawood generates in ElevenLabs from Claude's prompts), narrated by his ElevenLabs voice Lily, with English + Arabic subtitles, then a short "words from the story" lesson and quiz. Use this skill whenever Dawood asks for a story video, "قصة" or "قصص" for YouTube, an animated / AI / fairy-tale English story, image or video prompts for ElevenLabs/Seedance, a storyboard or shot list, or sends AI-generated clips or pictures and wants them turned into a finished video — even if he only says "سوّ لي فيديو زي كذا" or pastes one image prompt.
---

# English story video (ElevenLabs pictures/clips + Lily + Arabic subtitles)

**The product:** a ~15-minute 16:9 YouTube video for Arabic-speaking learners (B1–C1):
~12–13 minutes of an illustrated English fairy tale with **English subtitles and the Arabic
translation underneath**, then ~2 minutes "Words from the story" (8 words) and a 3-question quiz.

**Who does what:** Claude writes the story, the character bible, every picture/video prompt, the
narration chunks and the Arabic translation, then assembles the video. Dawood generates the
pictures, clips and voice in his ElevenLabs account and sends the files back.

## Work with Dawood step by step

He asked explicitly to be guided "خطوة بخطوة". He is not technical and works mostly from his phone.
So: talk in colloquial Gulf/Omani Arabic, give **one step at a time**, say exactly what to tap or
paste, and wait for his files before moving on. Everything that appears in the video is English
(plus the Arabic subtitle line and Arabic glosses).

The steps you lead him through:

1. **Idea** — offer 2–3 one-line story ideas (or take his). Agree title + characters.
2. **Story + plan** — write `story.json` (story lines with Arabic translation, characters,
   shots, vocab, quiz). Show him the story summary and the 8 words; adjust if he wants.
3. **Reference pictures** — send `pictures-pack.md` part 1: one prompt per character + the main
   place. He generates them in ElevenLabs Image, picks the best of each, sends them to you.
4. **Shots** — send the shot prompts in batches of ~10 (a whole pack at once is overwhelming).
   He generates each with the matching reference picture as the start/reference image and sends
   them back named S01, S02 … (or in order).
5. **Voice** — send the voice chunk files (`voice-A.txt` …); he generates them with Lily and
   sends the MP3s.
6. **Assemble** — run the assembler, check the frames, send him the video + thumbnail + title,
   description, chapters and tags.

Save the project (story.json, packs, everything he sends, outputs) to the `instagram-assets`
branch of `dawoodalsaqri29-jpg/mastering-english-library` under `yt/stories/<YYYY-MM>-<slug>/`
after each step, because sessions get reclaimed and a project spans days. Big MP4s over ~50 MB:
keep the source clips, not the final render.

## 1. The story

- **Length**: about 1,500–1,700 words of story narration (≈ 12–13 min with Lily at ~0.85 speed)
  plus ~250 words for words + quiz → ≈ 15 min total. If Dawood wants shorter, scale down.
- **Level**: B1–C1. Rich but clear: vivid description, some dialogue, varied tenses. 8 target
  words a C1 learner should own (e.g. *brittle, faded, determined, glimmer, reluctant, venture,
  astonished, cherish*); each used naturally at least once, ideally twice.
- **Shape**: ordinary world → discovery → journey with 2–3 small challenges → clever solution →
  warm ending with a gentle lesson. Small fixed cast (a child + an animal companion + at most one
  more). Chapters help a 12-minute story: 4–5 named chapters (shown on a title card each).
- Invented characters only — no real people, brands or well-known characters.
- **Lines**: one narration line = one sentence or two short ones (max ~25 words) — that is one
  subtitle. Every story line gets an Arabic translation in `ar`: natural Modern Standard Arabic,
  faithful, not word-for-word, short enough for two subtitle rows.

## 2. Character bible — consistency makes or breaks it

Dawood's first test clips showed the classic failure: the cat was ginger in one clip and tabby in
another, and the girl's clothes changed. So:

- Write a fixed description block (25–45 words) per character and main location with concrete
  attributes: age, hair, eye colour, exact clothes and colours, one signature item; for animals:
  build, coat colour and pattern, eye colour, collar. Example from his own prompt:
  > Whiskers, a sleek, slender jet-black cat with piercing emerald-green eyes, a thin red collar
  > with a tiny brass bell, and a faint silvery arcane shimmer along his fur.
- Paste the block **word for word** into every prompt where the character appears — never
  shorten it to "her cat", or the model invents a new cat.
- **Reference pictures first** (step 3) and use them as the start/reference image for every shot.
  The reference image does more for consistency than any wording.

## 3. Prompts

**Style block** — Dawood's own look; keep it identical in every prompt unless he changes it:
> A storybook illustration in a rich, impasto painterly style, reminiscent of classic fairy tale
> art, vibrant colors and a soft, diffused atmosphere

Build each prompt as one paragraph in this order (this mirrors his own prompt, which worked):
style block → shot type + camera move → character block(s) verbatim → one simple visible action →
location block + light (e.g. "bathed in golden hour light") → mood → `no text, no letters, no
subtitles, no watermark, consistent character design`.

- **Pictures vs clips.** A 12-minute story needs ~130–150 visuals if each shows ~5 s. That is too
  many clips to generate by hand, so mix: **~40–50 video clips** (Seedance, 5 or 10 s) for the
  moments with movement (discoveries, magic, running, reactions), and **~60–80 still pictures**
  for calmer narration — the assembler animates stills with a slow Ken-Burns zoom/pan, which looks
  cinematic. Mark each shot `"type": "image"` or `"type": "video"`. Tell Dawood the counts up front.
- Vary shot sizes like a film (wide → medium → close-up → insert on an object); one camera move per
  clip (slow push-in, gentle pan, slow orbit, tilt up); never three wides in a row.
- One action per clip — 5 s is short ("unrolls the map and gasps", not a whole scene).
- In the pack, show the narration line(s) above each prompt so he knows what it's for.

## 4. Voice — Lily

- Voice: **Lily**, Dawood's chosen ElevenLabs voice, ID `3XD5qTvPWht0mpTnYXY0`. If he can't find it
  in his list, he can search that ID in the ElevenLabs voice library. (Not the premade "Lily –
  Velvety Actress" `pFZP5JQG7iQjIQuC4Bku` — fall back to that only if his is unavailable, and say so.)
- Settings to tell him: Eleven Multilingual v2, speed ~0.85, stability ~50%, similarity ~75%,
  style 0–15%, speaker boost on — identical for every chunk.
- Chunks under **2,000 characters**, cut at paragraph/chapter boundaries, one narration line per
  paragraph with a blank line between — those pauses are how `align.py` finds every line, so tell
  him to paste the text exactly as given. A 15-minute video ≈ 7–8 chunks.
- Vocabulary part: Lily says the English word, a one-line meaning and the story sentence; the
  Arabic gloss is on screen only.

## 4b. No ElevenLabs credits? Narrate here for free

Dawood's ElevenLabs credits can run out (pictures use them too). Then don't stop the project:
`scripts/narrate.py story.json voice/ --voice bf_lily --speed 0.85` makes all chunk MP3s with
Kokoro, an open-source neural voice that runs in this workspace (setup steps in the script header).
`bf_lily` is a warm British female voice — the closest free match to his ElevenLabs "Lily"; he
asked for speed 0.85 like his ElevenLabs settings. Send him a 10-second sample first if he hasn't
heard it, and say plainly it is a free voice, not his ElevenLabs one. Never copy an ElevenLabs
"audio effect" such as "Bright Phone" from his screenshots — it makes the voice sound like a phone call.

## 5. story.json and the packs

Format and example: `references/story_schema.md`. Then:

```bash
python3 scripts/make_packs.py story.json packs/
```

writes `pictures-pack.md` (reference prompts + numbered shot prompts with their lines) and
`voice-A.txt …`. Send them with SendUserFile (batch the shot prompts as in step 4).

## 5b. When Dawood sends storyboard grids

He sometimes generates a whole chapter as one picture with many panels (a comic grid, often with
chapter banners, caption boxes or speech bubbles). His rule: **every panel is its own full-screen
frame — never show the neighbouring panels; put a blurred copy of the panel behind it.**

1. `python3 scripts/grid_panels.py split grid1.png grid2.png … --out work/` → look at
   `work/sheet.jpg`. Irregular layouts (inset panels, speech bubbles spanning gutters) may need
   manual boxes — crop them with PIL by pixel box.
2. He usually sends 3–4 variants of the same chapter. For every narration line pick the cleanest
   panel that shows exactly that moment; vary between variants so nothing repeats back to back.
3. Trim baked-in text (chapter banners, captions, speech bubbles) with `grid_panels.py trim`;
   skip panels whose text can't be cropped away. In-world text that matches the narration (e.g. the
   letter being read aloud) is fine.
4. `grid_panels.py finish work/sel/*.png --out clips/` (fast 4× AI upscale + blurred-background
   16:9 composition), then map line → panel id in `lines[].shots`. Panels are small (~250 px), so
   say honestly that full-size ElevenLabs pictures will look sharper than upscaled panels.
5. For the 8–12 most magical moments, make `animate-story-picture`'s `magic_motion.py` clips
   (sparkles / dust / fireflies) and save them as `<id>.mp4` next to the PNG — the assembler
   prefers the MP4.
6. Until Lily's MP3s arrive, render a **silent preview** with placeholder voice files (bursts of
   noise sized to each line) and strip the audio; re-run with the real MP3s for the final.

## 6. Assemble

Uploads land in `/root/.claude/uploads/<session>/`; copy them into `clips/` (pictures and clips,
named by shot id or in order) and `voice/`.

```bash
python3 scripts/assemble.py story.json --clips clips/ --voice voice/ --out out/ [--music bed.mp3]
```

It aligns every line in the voice files, gives each shot the time of its lines (clips slowed to
≥0.75× or held; stills get Ken Burns), renders title / word / quiz / outro slides on a blurred
frame of the story, crossfades everything, burns English + Arabic subtitles on the story lines,
and writes `story.mp4`, `story.srt`, `story.ar.srt`, `thumbnail.jpg`, `timeline.json` and
`check/` frames. Rendering takes ~2 min per minute of video with `--preset veryfast`; use
`--preset ultrafast` for quick previews. It warns about missing shots (holds the previous picture)
and about lines whose timing looks wrong — tell Dawood which shot numbers are missing instead of
shipping a gap.

## 7. Check before delivering

- Look at the `check/` frames: does the picture match what Lily says? Same characters?
- Subtitles readable, Arabic line correct (RTL, no broken punctuation).
- Thumbnail: pick `thumb_shot` with the character on the right half (text sits on the left) and a
  3–5 word `thumb_text`; look at it.

## 8. Deliver

The MP4 and thumbnail (SendUserFile), then in the reply: 3 title options (e.g. "Learn English
Through Story ✨ The Map That Glowed (B1–C1) | Arabic Subtitles"), the description (2-line hook,
the 8 words with Arabic, chapters from `timeline.json`, comment question, "📸 تابعني على انستغرام |
Follow me on Instagram: @dawood_alsaqri", hashtags), and comma-separated tags (English + Arabic).
Commit the project folder to the repo.
