---
name: video-studio
description: Produces Mastering English Library YouTube videos from code in any of 19 animated styles (plus Sketch to Motion Shorts), narrated by the free Kokoro Isabella voice and exported in 4K. Use when the user asks to make a video, a Short, a documentary, a lesson video, a "video in the X style", or says "سوي فيديو", "فيديو وثائقي", "شورتس", or names a style such as anime, painted history, whiteboard, map reveal.
---

# Video Studio: Mastering English Library

This skill is the front door to the plugin. It picks the style, writes the scenes, voices them and renders the video. Each style has its own skill in this plugin (same folder name), with its templates, props and art rules.

For a full YouTube video from topic to upload (script, fact check, subtitles, thumbnail, YouTube text), use the `youtube-agent` skill in this plugin: it is the main workflow. This skill is the quick renderer for a ready scene list.

## Channel rules (always)

- **Shorts** (9:16, 15 to 60 s): about words only, such as vocabulary, phrases and mistakes. Best formats: Sketch to Motion ("Name it before I do!"), anime dialogue, pictogram rules, stick-figure.
- **Long videos** (16:9, 8 minutes to 1 hour): any topic around English, such as history, wars, word origins, stories and grammar explained. Mix styles inside one video.
- **Hook first.** The first scene teases the biggest moment and never gives the ending away.
- **Voice:** Kokoro `bf_isabella`, speed 0.92 (free, offline). Do not use paid voice credits unless asked.
- **Export in 4K** (3840x2160 or 2160x3840). `make_video.py` does it.
- **Facts:** check every date, number, word origin and quote. Never invent a quote or attribute one to a real person. Drop what cannot be confirmed.
- **Visual accuracy:** the armies, flags and weapons must fit the era. For example, no cannons or modern flags before gunpowder. Check a contact sheet before delivering.
- Replies to the user are in Arabic, neatly ordered, with English terms kept on their own lines.

## Publishing

- Buffer (the user's scheduler) posts YouTube Shorts only: vertical and under 3 minutes. Long 16:9 videos are uploaded by hand in YouTube Studio.
- For Instagram, TikTok and Shorts, use 9:16 versions with English subtitles and the Arabic translation burned in (`yt/social/2026-11/make_social.py` in the channel repo shows the layout). Keep music out: voice and sound effects only.
- Arabic subtitles burned with ffmpeg/libass: start every Arabic line with the character U+202B (right-to-left embedding) and use Encoding -1 in the ASS style. Without it, any Arabic line that contains an English word is laid out in the wrong order. Check a full-size crop of a mixed line before delivering.
- Link Buffer videos with commit-pinned raw GitHub URLs (`.../<commit-sha>/path`); branch links can serve a stale copy, which Buffer rejects.
- The queue lives in `yt/social/2026-11/publish-queue.json`; a daily scheduled task refills Buffer from it (free plan: 10 scheduled posts at most).

## Stay monetized (YouTube's "inauthentic content" policy)

- Never produce a batch of near-identical videos. Each video gets its own topic, angle, research, title pattern and thumbnail layout, and differs clearly from the last ten.
- Keep a topic log (`yt/topics-log.md` in the channel repo) and check it before planning, so no topic repeats.
- The user reads every script and watches every finished video in full before it is published. Present the video for review; do not publish automatically.
- Copy a successful channel's format (length, structure, pacing, title shapes) but never its script, footage, voice or thumbnails.
- Uploads over 15 minutes need a verified YouTube account. Remind the user before the first long upload.
- The styles are clearly animated, so the "altered or synthetic content" label is generally not needed. Check YouTube Studio's current rules before each upload.

## Which style for which video

| Topic | Styles (folder names) |
|---|---|
| History of English, wars, empires | painted-history, chibi-history, archival-doc, map-reveal |
| Word origins, dictionaries, documents | archival-doc, stopmotion-paper, founder-story |
| Where English is spoken, journeys | map-reveal, city-timelapse |
| Grammar and vocabulary teaching | whiteboard-hand, flat-vector, isometric, cartoon |
| Dialogues, mistakes, phrasal verbs | anime, comic-book, cartoon, stick-figure |
| Stories for learners | storybook, comic-book, anime, doodle-world |
| Study habits, motivation, levels | pixel-quest, ink-anatomy, pictogram, doodle-world |
| Shorts that show one word | sketch-to-motion, pictogram, anime |

## Workflow

1. **Brief:** topic, length, Short or long, styles.
2. **Outline:** for anything over 3 minutes, plan chapters first, each with 3 to 8 key points, then scenes per chapter. About 15 narration characters equal 1 second.
3. **Scenes:** for each scene, open the style's skill, read `reference/templates.json` and the matching `examples/template-<id>.props.json`, and fill in props using only enum values from the schema. Never use the same template twice in a row. Each scene's narration is 6 to 20 seconds.
4. **Render:**
   ```bash
   python3 <this skill>/scripts/make_video.py scenes.json --styles <plugin>/skills --out out/<slug>
   ```
   The script voices every scene, renders it, joins the scenes, writes English subtitles (`.en.srt`) and makes the 4K file. Finished scenes are reused, so rerun after a fix.
5. **Known traps:** write `date` props as plain numbers ("43 - 410", "1066", "Today"). A date such as "55 BC to AD 410" froze the archival-doc chapter title. In founder-story, `company` and `year` print as "<company> founded <year>", so never put a person's name there. Very short narration (under 6 s) cuts off hand-drawn styles such as whiteboard-hand before the drawing finishes.
6. **Check:** make a contact sheet (`ffmpeg -i x_1080p.mp4 -vf "fps=1/5,scale=384:-1,tile=5x2" -frames:v 1 sheet.png`), look at it, and fix overlaps, empty panels and anachronisms. Delete only the bad scene's `sNNN.mp4` and rerun.
7. **Deliver:** the chat refuses files over 400 MB. If the 4K file is bigger (grainy styles such as archival-doc and painted-history inflate it), re-encode a send copy with `-vf hqdn3d=3:3:6:6,scale=3840:2160 -crf 27`, which gives about 120 MB for a 3-minute video. Send the 4K file and the subtitles, and add Arabic subtitles if the user wants them.
8. **Long videos:** render chapter by chapter (each chapter is its own scenes file), then join with `ffmpeg -f concat -c copy`.

## Setup (once per machine)

```bash
pip install kokoro-onnx soundfile numpy
mkdir -p ~/tts && cd ~/tts
curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx
curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin
npm i -g playwright && npx playwright install chromium
```

Render speed on a 2-core machine is about 3 seconds of work per second of video for each scene. For an hour-long documentary, render chapters in the background and check each one.

## Reference

- `references/war-documentary-outline.md`: the 10-chapter plan for "How War Made English" (about 60 minutes).
- `references/ch01-example.json` and `references/ch02-example.json`: complete mixed-style scene lists to copy from.
- `references/style-samples-1.json` and `style-samples-2.json`: working 3 to 4 scene English-learning videos for every style. Copy one as a starting point.
