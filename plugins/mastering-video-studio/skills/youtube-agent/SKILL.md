---
name: youtube-agent
description: Runs the full Mastering English Library YouTube agent, end to end, in 11 steps (find topic, outline, script, fact check, animated scenes in 19 styles, free Isabella voice, English + Arabic subtitles, 4K, thumbnail, YouTube title/description/chapters/tags, publish on approval). Use when the user asks to make a YouTube video, a documentary, a long video, a Short, "make-video", "سوي فيديو", "فيديو يوتيوب", "وثائقي", "اليوتيوب ايجنت", or to find a video topic for the channel.
---

# YouTube Agent: Mastering English Library

The whole agent lives in `agent/` next to this file. It is the user's own version of the two
"YouTube Agent" packages (Claude Code route + full pipeline), with the channel's rules built in.

## Start

1. Copy the agent to a working folder and point it at this plugin's styles (once per machine):
   ```bash
   cp -r "<this skill>/agent" ~/mastering-youtube-agent && cd ~/mastering-youtube-agent
   export YTA_STYLES="<this plugin>/skills"      # the 19 style folders are the sibling skills
   npm install && npx playwright install chromium
   pip install kokoro-onnx soundfile numpy        # free voice; model files: see agent/README.md
   node tools/doctor.mjs
   ```
2. **Read `agent/CLAUDE.md` in full and follow it step by step.** It is the instruction file: the
   channel rules, the 11 steps, the script.json format, every tool and the publishing rules.
3. Before writing scenes in a style, read that style's skill in this plugin (`skills/<style>/SKILL.md`,
   `reference/templates.json`, `examples/`).

## The steps in one glance

| # | Step | Command |
|---|---|---|
| 1 | Topic (outliers) | web search, or `node tools/find-topics.mjs --niche "..."` |
| 2 | Outline + script | you write `outline.json`, then `script.json` |
| 3 | Fact check | web search → `factcheck.md` (or `node tools/fact-check.mjs`) |
| 4 | Scenes | fill templates → `node tools/check-script.mjs --project projects/<slug>` |
| 5–6 | Stock only if a drawing cannot sell it | `node tools/stock.mjs` |
| 7 | Voice | `python3 tools/voice-kokoro.py --project projects/<slug>` |
| 8 | Build | `node tools/render.mjs --project projects/<slug> --preview`, check frames, then without `--preview` |
| 9 | Subtitles + 4K | `python3 tools/subtitles.py --project projects/<slug>` |
| 10 | YouTube text + thumbnail | `node tools/youtube-meta.mjs ...`, `python3 tools/thumbnail-frame.py ...` |
| 11 | Post | only on the user's word: Buffer for Shorts, the user uploads long videos |

## Never

- Never post, schedule or delete anything public without the user's go-ahead in the conversation.
- Never ask for a key in chat, and never print, log or commit `.env`.
- Never state a fact that was not checked, and never invent a quote.
- Never mass-produce near-identical videos.

`agent/examples/silent-k/` is a finished example (script.json, fact check, captions, YouTube text).
