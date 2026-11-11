#!/usr/bin/env bash
# Joins every scene MP4 into one video, adds optional music under the voice,
# and brings the loudness to -14 LUFS for YouTube.
#
#   bash core/assemble.sh scenes final.mp4
#   bash core/assemble.sh scenes final.mp4 music.mp3 0.18
#
# Scene files must sort in play order: 001.mp4, 002.mp4, ...
set -euo pipefail
dir="$1"; out="$2"; music="${3:-}"; vol="${4:-0.18}"
list="$(mktemp)"; joined="$(mktemp "${TMPDIR:-/tmp}/joined.XXXXXX").mp4"
trap 'rm -f "$list" "$joined"' EXIT

for f in "$dir"/*.mp4; do printf "file '%s'\n" "$(cd "$(dirname "$f")" && pwd)/$(basename "$f")" >> "$list"; done

# 1. Join without encoding the video again. This is what makes very long videos practical.
ffmpeg -hide_banner -loglevel error -y -f concat -safe 0 -i "$list" -c copy "$joined"

norm="loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo"
if [ -n "$music" ]; then
  # 2. Loop the music and duck it whenever the voice speaks.
  ffmpeg -hide_banner -loglevel error -y -i "$joined" -stream_loop -1 -i "$music" -filter_complex \
    "[0:a]aresample=48000,asplit=2[voice][sc];[1:a]aresample=48000,volume=$vol[music];[music][sc]sidechaincompress=threshold=0.03:ratio=6:attack=15:release=350:makeup=1[ducked];[voice][ducked]amix=inputs=2:duration=first:dropout_transition=0:normalize=0,$norm[a]" \
    -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -movflags +faststart "$out"
else
  ffmpeg -hide_banner -loglevel error -y -i "$joined" -af "$norm" -c:v copy -c:a aac -b:a 192k -movflags +faststart "$out"
fi
echo "assembled $out"
