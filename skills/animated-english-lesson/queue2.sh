set -e
cd /home/claude/work/lessons
until grep -q "^PC 4K" queue.log 2>/dev/null; do sleep 30; if grep -q "failed" queue.log; then exit 1; fi; done
for L in "$@"; do
  name=$(python3 -c "import json;print('_'.join(w.capitalize() for w in json.load(open('$L/lesson.json'))['id'].split('-')))")
  python3 make_face_clips.py $L/lesson.json > $L/clips.log 2>&1
  echo "$L clips $(date)"
  [ -f $L/${name}_lesson_1080p.mp4 ] || python3 engine/lesson_engine.py $L/lesson.json $L/${name}_lesson_1080p.mp4 > $L/full_build.log 2>&1
  echo "$L built $(date)"
  [ -f $L/${name}_lesson_4K.mp4 ] || ffmpeg -y -loglevel error -i $L/${name}_lesson_1080p.mp4 -vf "scale=3840:2160:flags=lanczos,unsharp=5:5:0.4" -c:v libx264 -crf 19 -preset medium -c:a copy -movflags +faststart $L/${name}_lesson_4K.mp4
  echo "$L 4K $(date)"
done
