---
description: Make a full Mastering English Library video (script, fact check, scenes, Isabella voice, English + Arabic subtitles, 4K, thumbnail, YouTube text) and publish it only when I say so
argument-hint: "<title, topic, niche or path to a script>" [style] [minutes]
---

Make a YouTube video with the YouTube Agent, following CLAUDE.md step by step (all 11 steps).

Input: $ARGUMENTS

- If the input is a path to a text file, that is the finished script: keep its words.
- If it is an audio file, that is my own recording: transcribe it and use my words.
- If it is a niche ("find me a topic about ..."), find an outlier topic first and tell me which.
- Otherwise it is the title or topic: research it and write the script.
- If no style is named, pick the best fit yourself and tell me which.
- If no length is given, aim for 8 to 10 minutes. A Short is 15 to 60 seconds, 9:16, about one word.

Run `node tools/doctor.mjs` first. Check the preview yourself before the final render. Send me the
4K file, the subtitles, the thumbnail and the YouTube text, and ask me before posting anything.
