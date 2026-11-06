---
name: open-generative-ai
description: Generate images, videos, voice, lip sync, motion transfer and video edits with Open Generative AI (MuAPI engine, 638 models such as Nano Banana, Flux, Seedream, Kling, Veo, Sora, Wan, Hailuo, Infinite Talk, LTX lipsync). Dawood's replacement for Higgsfield: use this first whenever he asks for an AI image, AI video, animated picture, talking photo, lip sync, voice/music, or any generative media for Instagram, TikTok, YouTube or the site. Triggers include "سو صورة", "سو فيديو", "حرّك الصورة", "خلها تتكلم", "generate an image/video", "image to video", "lipsync".
---

# Open Generative AI (Higgsfield replacement)

Open Generative AI is an open-source studio (github.com/Anil-matcha/Open-Generative-AI, MIT). Its cloud
generation runs on **MuAPI** (`https://api.muapi.ai`). This skill drives that same API directly with
`scripts/muapi.py`, using the app's own catalogue of 638 models (`references/models.json`).

## Before the first job in a session

1. `curl -s -o /dev/null -w "%{http_code}" https://api.muapi.ai/` must not fail with a proxy refusal.
   If the proxy refuses `api.muapi.ai`, or a call returns 401/403, the key is not set up: ask for it
   with the `request_credential` tool (host `api.muapi.ai`, header `x-api-key`, no prefix). Never ask
   Dawood to paste the key in chat.
2. Generations cost MuAPI credits. Say which model you picked and roughly what the job is (one image,
   one 5 s clip…) before long or many generations. Never re-submit the same job to "retry": poll the
   returned `request_id` again instead.

## Pick a model

```bash
S=.claude/skills/open-generative-ai/scripts/muapi.py
python3 $S models --kind t2i              # text-to-image   (90)
python3 $S models --kind i2i              # image edit      (93)
python3 $S models --kind t2v              # text-to-video   (118)
python3 $S models --kind i2v              # image-to-video  (194)
python3 $S models --kind v2v              # video tools     (78)
python3 $S models --kind lipsync          # audio-driven talking video (16)
python3 $S models --kind imageLipSync     # talking photo   (10)
python3 $S models --kind audio            # voice / music   (26)
python3 $S models --search kling          # by name
python3 $S show MODEL_ID                  # exact input names, enums, defaults
```

Always `show` the model before calling it and send only the inputs it lists, with the exact names
(some models want `image_url`, others `images_list`, `video_url`, `audio_url`).

Good defaults for Dawood's brand (Mastering English Library, Instagram/TikTok/YouTube 9:16):
- Still images / covers: `nano-banana` or a Seedream/Flux model, `aspect_ratio: "9:16"` (or `4:5` feed).
- Animate a picture (e.g. Mia): an i2v model such as Kling or Wan, 5 s, 9:16.
- Talking Mia / talking photo: an `imageLipSync` or `lipsync` model with an uploaded image + voice audio.

## Run a job

```bash
python3 $S upload path/to/mia.png          # -> hosted URL for image/video/audio inputs
python3 $S run nano-banana --json '{"prompt":"…","aspect_ratio":"9:16"}' --out content/generated
python3 $S run MODEL_ID --json '{"prompt":"…","image_url":"https://…"}' --out content/generated --timeout 1200
```

`run` submits, polls `/api/v1/predictions/{id}/result` every 3 s, and downloads every output into
`--out`. It prints the saved file paths, and the `request_id` on stderr. If it times out, the job is
still running on MuAPI: poll later rather than submitting again.

## Rules

- Look at every generated image or frame before using it (wrong text, extra fingers, off-brand colours).
- Keep Dawood's brand: cream `#F5F3E8`, navy `#1F294D`, green `#1E8A5F`, red `#E0645A`, yellow `#E9B949`.
- Never generate real people's likeness, logos of other brands, or anything that imitates a real person.
- Voice for reels stays Lily (Kokoro `bf_lily`, free) unless Dawood asks for a MuAPI voice.
- Local mode (sd.cpp / Wan2GP) only exists in the desktop app on Dawood's own computer; this skill
  uses the cloud API.
