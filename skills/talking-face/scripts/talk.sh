#!/usr/bin/env bash
# talk.sh portrait.png line.wav out_dir [size=256] [preprocess=crop|full]
# env: EXPR=1.4 (expression strength), POSE=12 (head-motion style 0-45), STILL=--still (calm head; needed with preprocess=full)
# ~22 min per 5 s of audio at size 256 on 2 CPUs (face renderer ~12 s/frame at 25 fps); 512 is ~4x slower.
set -e
ROOT=${SADTALKER_ROOT:-/home/claude/sadtalker}
IMG=$1; AUD=$2; OUT=$3; SIZE=${4:-256}; PRE=${5:-crop}; EXPR=${EXPR:-1.4}; POSE=${POSE:-12}; STILL=${STILL:-}
cd "$ROOT/repo" && . ../venv311/bin/activate
python inference.py --driven_audio "$AUD" --source_image "$IMG" --result_dir "$OUT" --cpu --size "$SIZE" \
  --preprocess "$PRE" $STILL --expression_scale "$EXPR" --pose_style "$POSE" --batch_size 1 2>&1 | grep -v -i "warn\|deprecat" | tr '\r' '\n' | grep -E "Renderer|generated|Error" | tail -5
ls -t "$OUT"/*.mp4 | head -1
