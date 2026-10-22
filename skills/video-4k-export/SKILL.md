---
name: video-4k-export
description: Export Dawood's finished videos (YouTube story videos, lessons, Reels/Shorts) in 4K — 3840×2160 landscape or 2160×3840 vertical — sized to fit the 500 MB chat upload limit, with a progress/ETA report while it renders. Use whenever Dawood asks for 4K, "فور كي", higher/better video quality, "حسّن الجودة", or a version for YouTube/Reels in the best quality, and by default as the last step after english-story-video renders a final video.
---

# 4K export

YouTube streams 4K uploads at a much higher bitrate than 1080p uploads, so even a video that was
made at 1080p looks noticeably cleaner on YouTube when uploaded as 4K. Dawood wants every final
video in 4K "for YouTube and Reels".

## Do it

```bash
python3 scripts/export_4k.py final-1080p.mp4 final-4k.mp4            # landscape → 3840×2160
python3 scripts/export_4k.py reel.mp4 reel-4k.mp4                     # vertical detected → 2160×3840
```

- Run it in the background (`nohup … > 4k.log 2>&1 &`) — it encodes at ~0.35× real time on this
  machine (a 14-minute video ≈ 40 minutes). Reels (30–60 s) take 2–3 minutes.
- The script picks the bitrate so the file stays under **370 MiB**: the upload limit for files sent in the conversation was 500 MiB and later 400 MiB, so keep a margin; files over it cannot be
  sent in the conversation (that happened once with a 632 MiB file and cost a second 40-minute
  render — don't use plain `-crf` for long 4K exports).
- Always keep and send the 1080p version first so he can publish immediately; 4K follows.

## Keep Dawood informed
He asks "كم باقي؟" while it renders. Read the progress from the log
(`tail -c 120 4k.log` → `time=` and `speed=`) and answer with minutes left:
`(duration − time) / speed`. Tell him the expected size too.

## Honest note
Upscaling doesn't invent detail: it's still the same picture, made sharper-looking and given more
bitrate. For truly sharper 4K, the source pictures must be large (full-size ElevenLabs images,
not small storyboard panels).
