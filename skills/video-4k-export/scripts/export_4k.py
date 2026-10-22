#!/usr/bin/env python3
"""Export a finished video as 4K that still fits the chat upload limit.

usage: export_4k.py IN.mp4 OUT.mp4 [--max-mib 480] [--vertical] [--preset veryfast]

- Landscape → 3840x2160, vertical (Reels/Shorts) → 2160x3840; aspect kept, Lanczos upscale + light sharpening.
- Picks the video bitrate so the file stays under --max-mib (default 370 MiB, under the 400 MiB
  limit for sending files in the conversation), capped at 16 Mbps (more is wasted on YouTube).
- Audio is copied untouched. Prints progress; runs ~0.35x real time on 2 CPUs (14 min video ≈ 40 min),
  so start it in the background for long videos.
"""
import argparse, json, subprocess, sys

ap = argparse.ArgumentParser()
ap.add_argument("inp"); ap.add_argument("out")
ap.add_argument("--max-mib", type=float, default=370)
ap.add_argument("--vertical", action="store_true")
ap.add_argument("--preset", default="veryfast")
a = ap.parse_args()
info = json.loads(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration:stream=codec_type,bit_rate,width,height",
                                  "-of", "json", a.inp], capture_output=True, text=True, check=True).stdout)
dur = float(info["format"]["duration"])
abr = sum(int(s.get("bit_rate") or 0) for s in info["streams"] if s["codec_type"] == "audio") or 160_000
v = next(s for s in info["streams"] if s["codec_type"] == "video")
vertical = a.vertical or int(v["height"]) > int(v["width"])
W, H = (2160, 3840) if vertical else (3840, 2160)
budget = a.max_mib * 1024 * 1024 * 8 * 0.97 / dur - abr          # bits per second for video
kbps = int(min(budget / 1000, 16000))
if kbps < 2500:
    print(f"warning: only {kbps} kbps fits — consider a shorter video or a larger --max-mib", file=sys.stderr)
print(f"{W}x{H}, {dur:.0f}s, video {kbps} kbps → ≈{(kbps*1000+abr)*dur/8/1048576:.0f} MiB", flush=True)
vf = (f"scale={W}:{H}:force_original_aspect_ratio=decrease:flags=lanczos,"
      f"pad={W}:{H}:(ow-iw)/2:(oh-ih)/2,unsharp=5:5:0.5,format=yuv420p")
subprocess.run(["ffmpeg", "-v", "error", "-stats", "-y", "-i", a.inp, "-vf", vf, "-c:v", "libx264", "-preset", a.preset,
                "-b:v", f"{kbps}k", "-maxrate", f"{int(kbps*1.5)}k", "-bufsize", f"{kbps*3}k",
                "-c:a", "copy", "-movflags", "+faststart", a.out], check=True)
