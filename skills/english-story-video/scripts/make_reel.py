#!/usr/bin/env python3
"""Turn a rendered 16:9 hook (or any section rendered with --no-subs) into a vertical 1080x1920 Reel/Short.

usage: make_reel.py story.json RENDER_DIR OUT.mp4 [--title "THE MAP THAT GLOWED"] [--cta "..."]
RENDER_DIR is an assemble.py --no-subs output folder (story.mp4 + timeline.json).
The picture is scaled to fill the height and centre-cropped (panels are centred, so the subject
stays in frame); English + Arabic subtitles, a title at the top and a call-to-action are drawn for
the vertical frame, all inside the safe zone (y 250–1600) so Instagram/YouTube buttons don't cover them.
"""
import argparse, glob, html, json, os, subprocess, sys

W, H = 1080, 1920
HERE = os.path.dirname(os.path.abspath(__file__))
FONTS = os.path.join(HERE, "..", "assets", "fonts")
CSS = f"""
@font-face{{font-family:Cairo;src:url(file://{FONTS}/cairo-arabic-700-normal.woff2);font-weight:700}}
@font-face{{font-family:Cairo;src:url(file://{FONTS}/cairo-arabic-800-normal.woff2);font-weight:800}}
*{{margin:0;padding:0;box-sizing:border-box}} html,body{{width:{W}px;height:{H}px;background:transparent;font-family:Poppins,sans-serif}}
.top{{position:absolute;top:270px;left:0;right:0;text-align:center;color:#fff}}
.kick{{display:inline-block;font-size:30px;font-weight:700;letter-spacing:.12em;color:#f6d38a;background:rgba(8,12,26,.55);padding:10px 26px;border-radius:999px}}
.title{{font-size:74px;font-weight:800;line-height:1.05;margin-top:18px;text-shadow:0 4px 20px rgba(0,0,0,.75)}}
.sub{{position:absolute;left:60px;right:60px;bottom:440px;background:rgba(8,12,26,.66);border-radius:26px;padding:24px 30px;text-align:center}}
.en{{color:#fff;font-size:46px;font-weight:600;line-height:1.3}}
.ar{{font-family:Cairo;direction:rtl;color:#f6d38a;font-size:42px;font-weight:700;line-height:1.5;margin-top:8px}}
.cta{{position:absolute;top:1520px;left:0;right:0;text-align:center}}
.cta span{{font-family:Cairo;direction:rtl;display:inline-block;background:#f6d38a;color:#14213a;font-size:38px;font-weight:800;padding:12px 34px;border-radius:999px}}
"""


def esc(t):
    return html.escape(t)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("story"); ap.add_argument("render"); ap.add_argument("out")
    ap.add_argument("--title"); ap.add_argument("--kicker", default="ENGLISH STORY · B1–C1")
    ap.add_argument("--cta", default="القصة كاملة على يوتيوب ▶")
    a = ap.parse_args()
    story = json.load(open(a.story))
    tl = json.load(open(os.path.join(a.render, "timeline.json")))
    title = a.title or story["title"].upper()
    tmp = os.path.join(os.path.dirname(os.path.abspath(a.out)), "_reel_tmp")
    os.makedirs(tmp, exist_ok=True)
    items = []
    base = f'<div class="top"><div class="kick">{esc(a.kicker)}</div><div class="title">{esc(title)}</div></div><div class="cta"><span>{esc(a.cta)}</span></div>'
    items.append((base, os.path.join(tmp, "base.png")))
    subs = []
    for l, t in zip(story["lines"], tl["lines"]):
        fn = os.path.join(tmp, f"s{l['id']}.png")
        body = base + f'<div class="sub"><div class="en">{esc(l["text"])}</div>' + (f'<div class="ar">{esc(l["ar"])}</div>' if l.get("ar") else "") + "</div>"
        items.append((body, fn)); subs.append((t["speech"][0] - 0.15, t["speech"][1] + 0.35, fn))
    from playwright.sync_api import sync_playwright
    exe = (glob.glob("/opt/pw-browsers/chromium-*/chrome-linux*/chrome") or [None])[0]
    with sync_playwright() as p:
        b = p.chromium.launch(executable_path=exe) if exe else p.chromium.launch()
        pg = b.new_page(viewport={"width": W, "height": H})
        for body, out in items:
            hp = out + ".html"
            open(hp, "w").write(f"<!doctype html><html><head><meta charset='utf-8'><style>{CSS}</style></head><body>{body}</body></html>")
            pg.goto("file://" + hp); pg.evaluate("document.fonts.ready"); pg.wait_for_timeout(50)
            pg.screenshot(path=out, omit_background=True)
        b.close()
    total = tl["duration"]
    lst, cur = [], 0.0
    for s, e, fn in subs:
        s = max(s, cur)
        if s - cur > 0.01:
            lst.append((items[0][1], s - cur))
        lst.append((fn, e - s)); cur = e
    lst.append((items[0][1], max(total - cur, 0.1)))
    cl = os.path.join(tmp, "overlay.txt")
    with open(cl, "w") as f:
        for fn, d in lst:
            f.write(f"file '{fn}'\nduration {d:.3f}\n")
        f.write(f"file '{lst[-1][0]}'\n")
    vid = os.path.join(a.render, "story.mp4")
    fc = (f"[0:v]scale=-2:{H}:flags=lanczos,crop={W}:{H},setsar=1[v0];"
          f"[1:v]fps=30,format=rgba[o];[v0][o]overlay=0:0:format=auto,format=yuv420p[v]")
    r = subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", vid, "-f", "concat", "-safe", "0", "-i", cl,
                        "-filter_complex", fc, "-map", "[v]", "-map", "0:a", "-t", f"{total:.3f}",
                        "-c:v", "libx264", "-preset", "veryfast", "-crf", "19", "-c:a", "aac", "-b:a", "160k",
                        "-movflags", "+faststart", a.out], capture_output=True, text=True)
    if r.returncode:
        sys.exit(r.stderr[-2000:])
    print(a.out)


if __name__ == "__main__":
    main()
