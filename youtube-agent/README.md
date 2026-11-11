# Mastering English Library: YouTube Agent

Your own YouTube agent, built on the two "YouTube Agent" packages (the Claude Code route and the
full pipeline). Give it a title, a topic or a script: it writes, checks the facts, animates every
scene in one of 19 styles, voices it, adds English and Arabic subtitles, exports 4K, makes the
thumbnail and the YouTube text, and publishes only when you say so.

It needs no paid keys. Paid services are optional extras (see `.env.example`).

## Use it

Open this folder in Claude Code and type:

    /make-video "Why is the K in knight silent?" whiteboard-hand 1

In Claude (chat), install the `mastering-video-studio` plugin and say: "make a video about ...".

## Set up once

    npm install && npx playwright install chromium
    pip install kokoro-onnx soundfile numpy
    mkdir -p ~/tts && cd ~/tts
    curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx
    curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin
    node tools/doctor.mjs

## The 11 steps (what the agent does)

| # | Step | Tool |
|---|---|---|
| 1 | Find the topic (outliers) | web search, or `tools/find-topics.mjs` |
| 2 | Plan and write the script | the agent (rules in `CLAUDE.md`) |
| 3 | Fact check | web search, or `tools/fact-check.mjs` |
| 4 | Scenes: animate | `.claude/skills/<style>` + `tools/check-script.mjs` |
| 5 | Can it be animated? | at most 1 stock scene in 5 |
| 6 | Stock | `tools/stock.mjs` (optional) |
| 7 | Voice | `tools/voice-kokoro.py` (free) or `tools/voice.mjs` |
| 8 | Build | `tools/render.mjs` (`--preview`, `--only`, `--keep`) |
| 9 | Final encode + subtitles + 4K | `core/assemble.sh`, `tools/subtitles.py` |
| 10 | YouTube text and thumbnail | `tools/youtube-meta.mjs`, `tools/thumbnail-frame.py` |
| 11 | Post (only on your word) | Buffer for Shorts, you upload long videos, or `tools/post-youtube.mjs` |

## What is in a project folder

`projects/<slug>/`: `script.json`, `factcheck.md`, `voice/`, `scenes/`, `preview.mp4`, `final.mp4`,
`final-4k.mp4` (upload this), `captions.en.srt`, `captions.ar.srt`, `chapters.txt`, `youtube.json`,
`thumbnails/`.

`examples/silent-k/` is a finished one-minute example to copy from.
