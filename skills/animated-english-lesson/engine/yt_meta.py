"""YouTube title / description (with chapters) / tags for a built lesson.
usage: yt_meta.py lesson.json Lesson_1080p.mp4  -> writes Lesson_youtube.txt next to the video"""
import json, sys, os
L = json.load(open(sys.argv[1])); vid = sys.argv[2]
B = json.load(open(os.path.splitext(vid)[0] + ".build.json"))
def ts(t):
    t = int(t); return f"{t // 60}:{t % 60:02d}" if t < 3600 else f"{t // 3600}:{t % 3600 // 60:02d}:{t % 60:02d}"
ch = [(0.0, B["chapters"][0][1])] + [tuple(c) for c in B["chapters"][1:]]
clean = []
for t, name in ch:                       # YouTube: first at 0:00, each chapter >= 10 s
    if clean and t - clean[-1][0] < 10: clean[-1] = (clean[-1][0], clean[-1][1]); continue
    clean.append((t, name))
topic = L["title"].replace("The ", "")
title = L.get("yt_title") or f"{topic} in English | Full Animated Lesson with Mia ({L['level'].replace(' - ', '-')})"
quiz = [b for b in L["beats"] if b["type"] == "quiz"]
end = [b for b in L["beats"] if b.get("layout") == "end"][0]["data"]
desc = f"""Learn {L.get('yt_topic', L['title'][0].lower() + L['title'][1:])} the easy way, with Mia and her cat Whiskers! {L['subtitle']}.

In this animated lesson:
✅ when to use it, with clear examples
✅ the form, spelling and pronunciation
✅ negatives and questions
✅ the most common mistakes Arabic speakers make
✅ repeat-after-me speaking practice
✅ a short story and a {len(quiz)}-question quiz

📝 Homework: {end['task']} I'll reply to your answers!

⏱ Chapters
""" + "\n".join(f"{ts(t)} {n}" for t, n in clean) + f"""

🔔 Subscribe to Mastering English for a new lesson every week.
➡️ {end['next']}
📷 Instagram: @dawood_alsaqri

#learnenglish #englishgrammar #{topic.replace(' ', '').replace(':', '').replace('&', '').lower()} #esl #englishlesson"""
tags = ["learn english", "english grammar", topic.lower(), f"{topic.lower()} tense", "english lesson", "esl", "english for beginners",
        "animated english lesson", "english for arabic speakers", "تعلم اللغة الانجليزية", "قواعد اللغة الانجليزية", "grammar quiz", L["level"].replace(" - ", " ")]
out = os.path.splitext(vid)[0].replace("_1080p", "") + "_youtube.txt"
open(out, "w").write(f"TITLE\n{title}\n\nDESCRIPTION\n{desc}\n\nTAGS\n{', '.join(tags)}\n\nDURATION {ts(B.get('duration', 0))}\n")
print(out); print(open(out).read())
