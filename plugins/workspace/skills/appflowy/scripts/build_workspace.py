#!/usr/bin/env python3
"""Build an AppFlowy import pack from this repo: CSV databases + Markdown pages.

AppFlowy imports exactly these formats (flowy-folder ImportType: Markdown, CSV, AFDatabase, history files):
Sidebar "+" -> Import -> "CSV" (becomes a Grid/Board database) or "Text & Markdown" (becomes a document).

  build_workspace.py [--out content/appflowy-workspace]
"""
import argparse, csv, glob, json, os, shutil

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))))
CH = {"6ac96c3b6a5c39ccb668ecb3": "Instagram", "6add2bd2778b240e2fb5c61e": "TikTok", "6ac969956a5c39ccb668ad96": "YouTube"}


def w(path, rows, cols):
    with open(path, "w", newline="", encoding="utf-8-sig") as f:  # BOM so Arabic opens right everywhere
        wr = csv.DictWriter(f, fieldnames=cols); wr.writeheader(); wr.writerows(rows)
    print(path, len(rows), "rows")


def main():
    ap = argparse.ArgumentParser(); ap.add_argument("--out", default=os.path.join(ROOT, "content", "appflowy-workspace"))
    out = ap.parse_args().out
    os.makedirs(out, exist_ok=True)

    # 1. Content calendar (Board by Status, Calendar by Date)
    rows = []
    for plan in sorted(glob.glob(os.path.join(ROOT, "content", "*", "plan.json"))):
        camp = os.path.basename(os.path.dirname(plan))
        for p in json.load(open(plan, encoding="utf-8"))["posts"]:
            k = p["key"]
            kind = "Reel" if "reel" in k else "Story quiz" if "quiz" in k else "Story answer" if "answer" in k else "Post"
            rows.append({"Post": k, "Campaign": camp, "Platform": CH.get(p.get("channelId"), "?"), "Type": kind,
                         "Date": p["dueAt"][:16].replace("T", " "), "Status": "Scheduled", "Video": p.get("video", ""),
                         "Caption": p.get("text", "")})
    w(os.path.join(out, "Content calendar.csv"), rows,
      ["Post", "Campaign", "Platform", "Type", "Date", "Status", "Video", "Caption"])

    # 2. Courses and lessons
    q = json.load(open(os.path.join(ROOT, "data", "quizzes.json"), encoding="utf-8"))
    rows = []
    for c in q["courses"]:
        for i, slug in enumerate(c["lessons"], 1):
            L = q["lessons"].get(slug, {})
            rows.append({"Lesson": L.get("title", slug), "Level": c["level"], "Course": c["title"], "Module": i,
                         "Skill": L.get("skill", ""), "Do": " | ".join(L.get("do", [])), "Don't": " | ".join(L.get("dont", [])),
                         "Link": f"https://dawoodalsaqri29-jpg.github.io/mastering-english-library/course.html?l={slug}", "Status": "Live"})
    w(os.path.join(out, "Courses.csv"), rows, ["Lesson", "Level", "Course", "Module", "Skill", "Do", "Don't", "Link", "Status"])

    # 3. Dictionary (5,000 words) as a filterable database
    idx = json.load(open(os.path.join(ROOT, "data", "dict", "index.json"), encoding="utf-8"))["words"]
    w(os.path.join(out, "Dictionary.csv"),
      [{"Word": a, "Part of speech": b, "Level": c, "Arabic": d} for a, b, c, d in idx],
      ["Word", "Part of speech", "Level", "Arabic"])

    # 4. Documents (Markdown)
    docs = os.path.join(out, "Pages"); os.makedirs(docs, exist_ok=True)
    for src in glob.glob(os.path.join(ROOT, "content", "*", "*.md")):
        camp = os.path.basename(os.path.dirname(src))
        shutil.copy(src, os.path.join(docs, f"{camp} - {os.path.basename(src)}"))
    open(os.path.join(docs, "Brand kit.md"), "w", encoding="utf-8").write("""# Brand kit: Mastering English Library

## Colours
- Cream `#F5F3E8` (backgrounds)
- Navy `#1F294D` (text, dark slides)
- Green `#1E8A5F` (correct, highlights)
- Red `#E0645A` (mistakes)
- Yellow `#E9B949` (accents)

## Fonts
Lora (English headings and examples), Poppins (numbers, labels), Noto Kufi Arabic (Arabic).

## Voice
- Reels and stories: Lily (Kokoro `bf_lily`), 10% slower, no music, -16 LUFS.
- Captions: Gulf Arabic, one mistake + the fix, ask for a comment.

## Channels
Instagram @dawood_alsaqri · TikTok @omani_citizen · YouTube "Matering English Quickly" · PDF store on Wix.
""")
    open(os.path.join(docs, "AI tools - how to ask Claude.md"), "w", encoding="utf-8").write("""# AI tools: what to ask Claude

| You want | Say | Skill |
|---|---|---|
| Image / video / talking photo | "سو صورة…" / "حرّك الصورة" | open-generative-ai |
| Voice-over or your cloned voice | "سو صوت…" / "خلها بصوتي" | voice-clone |
| Subtitles, transcripts, meeting notes | "فرّغ هذا" / "حط ترجمة" | openwhispr-local |
| SEO: keywords, competitors, audit | "سيو للموقع" | openseo |
| Update this AppFlowy workspace | "حدّث AppFlowy" | appflowy |
""")
    print("pack ready:", out)


if __name__ == "__main__":
    main()
