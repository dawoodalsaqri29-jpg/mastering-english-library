---
name: tiktok-lesson-reel
description: Turns one free lesson into a 30–40 s TikTok video (9:16, 4K) with the Skillry CreatorMotion checklist effect in the library's colours, Isabella narration and English + Arabic subtitles. TikTok only. Use when the owner says "تيك توك لدرس", "سوي تيك توك", "TikTok reel for <lesson>", or asks for this checklist video format.
---

# TikTok lesson reel (TikTok only)

Owner's decision (2026-11-13): this format is for **TikTok only**. YouTube keeps the `youtube-agent` way; Instagram keeps
the usual carousels and videos. Do not post this format to YouTube or Instagram.

## What it makes
Intro card (level, skill, title, Arabic line) → checklist effect beside a phone screenshot of the lesson, each box ticked
as the narration finishes that step → outro card ("Free lesson + PDF", "Link in bio"). About 34 s. English and Arabic
subtitles sit in two separate boxes in the bottom band, kept clear of TikTok's right-hand buttons (150 px margin).

## Run
1. Copy `example.json`, fill it from the lesson page: 3 short `tasks` (the checklist rows) and 5 `lines`
   (intro, step 1, step 2, step 3, outro), each with `en` and `ar`. Use only facts the lesson states.
2. `node .claude/skills/tiktok-lesson-reel/build.js my-reel.json <out-dir>` (add `--res=1080p` for a fast draft).
3. Look at `<out-dir>/qa.png` (6 frames). Check ticks, subtitles inside their boxes, nothing under the caption band.
4. Send the MP4 to the owner. Nothing is posted without the owner's yes.

Outputs stay outside the repo (the scratchpad or the owner's computer). Do not commit videos.

## Needs
Node 22, ffmpeg, Playwright Chromium, npm registry (Cairo font, HyperFrames 0.8.30), and the `mastering-video-studio`
plugin (it bundles the free `bs-creatormotion-cards-action-checklist` effect from Skillry).

Voice: Kokoro `bf_isabella`, speed 0.92 (standing decision); needs `pip install kokoro soundfile` and Hugging Face access.
If Kokoro cannot load, the script falls back to Gemini TTS (voice Aoede, British) and writes the voice used to
`vo/voice.txt`. Tell the owner when the fallback was used. Narration files are cached in `<out-dir>/vo`, so re-runs do
not spend TTS quota.
