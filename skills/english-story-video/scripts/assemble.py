#!/usr/bin/env python3
"""Assemble an English story video from story.json + Dawood's clips/images + ElevenLabs voice chunks.

usage:
  assemble.py story.json --clips DIR --voice DIR --out DIR [--xfade 0.35] [--music bed.mp3] [--no-subs]

Inputs
  clips DIR : S01.mp4 / S01.png|jpg … (video clips or still images; stills get a slow Ken-Burns move)
              R1.png … reference pictures are also used as fallbacks / slide backgrounds.
              If names don't match shot ids but the count matches, files are taken in name order.
  voice DIR : voice-A.mp3, voice-B.mp3 … (or any .mp3 files, taken in name order, one per chunk)

Outputs (in --out)
  story.mp4        1920x1080, 30 fps, H.264 + AAC, English+Arabic subtitles burned in on story lines
  story.srt        English subtitles (all lines)   story.ar.srt  Arabic subtitles (lines with "ar")
  thumbnail.jpg    1280x720            timeline.json   line + segment times
  check/           frames at line starts, to compare picture vs narration
"""
import argparse, glob, json, os, re, shutil, subprocess, sys, html
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import align as AL  # noqa

W, H, FPS = 1920, 1080, 30
AR = 44100
FONTS = os.path.join(HERE, "..", "assets", "fonts")


def run(cmd, **kw):
    r = subprocess.run(cmd, capture_output=True, text=True, **kw)
    if r.returncode:
        sys.exit("command failed:\n" + " ".join(cmd)[:600] + "\n" + r.stderr[-2500:])
    return r


def probe_dur(p):
    r = run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", p])
    return float(r.stdout.strip())


def load_audio(path):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", path, "-ac", "1", "-ar", str(AR), "-f", "s16le", "-"],
                         capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.int16).astype(np.float32) / 32768


# ---------------------------------------------------------------- file matching
def match_files(ids, folder, exts, label):
    files = sorted(f for f in glob.glob(os.path.join(folder, "*")) if f.lower().endswith(exts))
    out, miss = {}, []
    for i in ids:
        m = re.match(r"([A-Za-z]+)0*(\d+)$", i)
        pat = rf"(^|[^A-Za-z0-9]){m.group(1)}0*{m.group(2)}([^0-9]|$)" if m else rf"(^|[^A-Za-z0-9]){re.escape(i)}([^0-9]|$)"
        hit = [f for f in files if re.search(pat, os.path.basename(f), re.I)]
        if hit:
            out[i] = hit[0]
        else:
            miss.append(i)
    if miss and len(files) == len(ids) and not out:
        print(f"note: {label} names don't match ids; using name order", file=sys.stderr)
        return dict(zip(ids, files)), []
    return out, miss


# ---------------------------------------------------------------- html → png
CSS_FONTS = f"""
@font-face{{font-family:Cairo;src:url(file://{FONTS}/cairo-arabic-700-normal.woff2);font-weight:700}}
@font-face{{font-family:Cairo;src:url(file://{FONTS}/cairo-arabic-800-normal.woff2);font-weight:800}}
@font-face{{font-family:Play;src:url(file://{FONTS}/playfair-display-latin-700-normal.woff2);font-weight:700}}
*{{margin:0;padding:0;box-sizing:border-box}}
html,body{{width:{W}px;height:{H}px;background:transparent;font-family:Poppins,sans-serif}}
.ar{{font-family:Cairo,sans-serif;direction:rtl;unicode-bidi:isolate}}
"""


def render_pngs(items):
    """items: list of (html_body, extra_css, out_path)"""
    from playwright.sync_api import sync_playwright
    exe = (glob.glob("/opt/pw-browsers/chromium-*/chrome-linux*/chrome") or [None])[0]
    with sync_playwright() as p:
        b = p.chromium.launch(executable_path=exe) if exe else p.chromium.launch()
        pg = b.new_page(viewport={"width": W, "height": H})
        for body, css, out in items:
            hp = out + ".html"  # load from file:// so local images and fonts are allowed
            open(hp, "w").write(f"<!doctype html><html><head><meta charset='utf-8'><style>{CSS_FONTS}{css}</style></head><body>{body}</body></html>")
            pg.goto("file://" + os.path.abspath(hp))
            pg.evaluate("document.fonts.ready")
            pg.wait_for_timeout(60)
            pg.screenshot(path=out, omit_background=True)
        b.close()


def esc(t):
    return html.escape(t)


def sub_html(en, ar):
    css = """.box{position:absolute;left:0;right:0;margin:0 auto;width:fit-content;bottom:56px;max-width:1560px;
    background:rgba(8,12,26,.62);border-radius:22px;padding:18px 40px 20px;text-align:center}
    .en{color:#fff;font-size:44px;font-weight:600;line-height:1.32;text-shadow:0 2px 6px rgba(0,0,0,.5)}
    .ar{color:#f6d38a;font-size:40px;font-weight:700;line-height:1.5;margin-top:6px}"""
    body = f'<div class="box"><div class="en">{esc(en)}</div>' + (f'<div class="ar">{esc(ar)}</div>' if ar else "") + "</div>"
    return body, css


SLIDE_CSS = """
.bg{position:absolute;inset:0;background-size:cover;background-position:center;filter:blur(14px) brightness(.55) saturate(1.1);transform:scale(1.08)}
.veil{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,16,34,.55),rgba(10,16,34,.82))}
.wrap{position:absolute;inset:0;padding:70px 110px;color:#fff;display:flex;flex-direction:column}
.top{display:flex;justify-content:space-between;font-size:24px;letter-spacing:.3em;color:#e9d3a0;font-weight:600}
.pill{display:inline-block;background:rgba(246,211,138,.16);border:2px solid rgba(246,211,138,.6);color:#f6d38a;border-radius:999px;padding:10px 30px;font-size:30px;font-weight:600}
.word{font-family:Play,serif;font-size:150px;line-height:1.05;color:#fff}
.ipa{font-size:40px;color:#cfd6e6}
.mean{font-size:48px;line-height:1.45;color:#fff;font-weight:500}
.arbig{font-size:64px;color:#f6d38a;font-weight:800}
.ex{font-size:44px;line-height:1.5;color:#e8ecf4;font-style:italic;border-left:6px solid #f6d38a;padding-left:30px}
.ex b{color:#f6d38a;font-style:normal}
.chips{display:flex;flex-wrap:wrap;gap:22px}
.chip{background:rgba(255,255,255,.1);border:2px solid rgba(246,211,138,.5);border-radius:999px;padding:16px 36px;font-size:44px;font-weight:600}
.opt{font-size:50px;padding:22px 36px;border-radius:22px;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.25);margin-top:22px}
.opt.ok{background:rgba(46,160,96,.35);border-color:#5fd18e}
.foot{margin-top:auto;display:flex;justify-content:space-between;font-size:24px;color:#cfd6e6}
"""


def slide_html(sid, story, bg):
    vocab = {v["word"].lower(): v for v in story.get("vocab", [])}
    quiz = {q["id"]: q for q in story.get("quiz", [])}
    title = story["title"]
    head = f'<div class="bg" style="background-image:url(file://{bg})"></div><div class="veil"></div><div class="wrap"><div class="top"><span>MASTERING ENGLISH</span><span>ENGLISH STORY · {esc(story.get("level","B1–C1"))}</span></div>'
    foot = f'<div class="foot"><span>{esc(title)}</span><span>Dawood Al-Saqri</span></div></div>'
    if sid == "title":
        mid = f'<div style="margin-top:auto"><div class="pill">An English story</div><div class="word" style="margin-top:30px;font-size:130px">{esc(title)}</div><div class="mean" style="margin-top:24px;color:#e9d3a0">Listen, read, and learn {len(story.get("vocab", []))} new words</div></div>'
    elif sid.startswith("chapter-"):
        ch = {str(c["n"]): c for c in story.get("chapters", [])}.get(sid[8:])
        if not ch:
            sys.exit(f"slide {sid}: chapter not in story['chapters']")
        mid = f'<div style="margin:auto 0;text-align:center"><div class="pill">Chapter {esc(str(ch["n"]))}</div><div class="word" style="margin-top:30px;font-size:120px">{esc(ch["title"])}</div>' + (f'<div class="ar arbig" style="margin-top:20px">{esc(ch["ar"])}</div>' if ch.get("ar") else "") + '</div>'
    elif sid == "words-intro":
        chips = "".join(f'<div class="chip">{esc(v["word"])}</div>' for v in story.get("vocab", []))
        mid = f'<div style="margin-top:90px"><div class="pill">Words from the story</div><div class="word" style="font-size:96px;margin:36px 0 50px">{len(story.get("vocab", []))} words to keep</div><div class="chips">{chips}</div></div>'
    elif sid.startswith("word-"):
        v = vocab.get(sid[5:].lower())
        if not v:
            sys.exit(f"slide {sid}: word not in vocab")
        ex = esc(v.get("example", ""))
        ex = re.sub(rf"(?i)\b({re.escape(v['word'])}\w*)", r"<b>\1</b>", ex)
        mid = f'''<div style="margin-top:70px"><div class="pill">{esc(v.get("pos",""))}</div>
        <div style="display:flex;align-items:baseline;gap:40px;margin-top:26px"><div class="word">{esc(v["word"])}</div><div class="ipa">{esc(v.get("ipa",""))}</div></div>
        <div class="ar arbig" style="margin-top:10px">{esc(v.get("ar",""))}</div>
        <div class="mean" style="margin-top:26px">{esc(v.get("meaning",""))}</div>
        <div class="ex" style="margin-top:40px">{ex}</div></div>'''
    elif sid.startswith("quiz-"):
        qid = sid[5:].replace("-answer", "")
        q = quiz.get(qid)
        if not q:
            sys.exit(f"slide {sid}: quiz id not found")
        show = sid.endswith("-answer")
        opts = "".join(f'<div class="opt{" ok" if show and i == q["answer"] else ""}">{"abc"[i]})&nbsp; {esc(o)}{" ✓" if show and i == q["answer"] else ""}</div>' for i, o in enumerate(q["options"]))
        mid = f'<div style="margin-top:80px"><div class="pill">Quick check</div><div class="mean" style="font-size:58px;font-weight:600;margin:34px 0 20px">{esc(q["q"])}</div>{opts}</div>'
    elif sid == "outro":
        mid = f'<div style="margin:auto 0;text-align:center"><div class="word" style="font-size:110px">Thank you for listening</div><div class="mean" style="margin-top:30px;color:#e9d3a0">{esc(story.get("outro",{}).get("text",""))}</div><div class="chip" style="display:inline-block;margin-top:50px">Subscribe · @dawood_alsaqri</div></div>'
    else:
        sys.exit(f"unknown slide id {sid}")
    return head + mid + foot, SLIDE_CSS


# ---------------------------------------------------------------- main
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("story")
    ap.add_argument("--clips", required=True)
    ap.add_argument("--voice", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--xfade", type=float, default=0.35)
    ap.add_argument("--music")
    ap.add_argument("--no-subs", action="store_true")
    ap.add_argument("--preset", default="veryfast")
    a = ap.parse_args()
    story = json.load(open(a.story))
    os.makedirs(a.out, exist_ok=True)
    tmp = os.path.abspath(os.path.join(a.out, "_tmp"))
    shutil.rmtree(tmp, ignore_errors=True)
    os.makedirs(tmp)
    lines = story["lines"]

    # ---- voice: align each chunk
    chunks = list(dict.fromkeys(l["chunk"] for l in lines))
    vfiles, vmiss = match_files([f"voice-{c}" for c in chunks], a.voice, (".mp3", ".wav", ".m4a"), "voice")
    if vmiss:
        sys.exit(f"missing voice files: {vmiss}")
    pieces, t = [], 0.6  # lead-in
    timeline = []
    for ci, c in enumerate(chunks):
        cl = [l for l in lines if l["chunk"] == c]
        spans, rep = AL.align([l["text"] for l in cl], vfiles[f"voice-{c}"])
        if not rep["ok"]:
            print(f"warning: chunk {c}: lines {[cl[i]['id'] for i in rep['outliers']]} have odd durations — check sync", file=sys.stderr)
        audio = load_audio(vfiles[f"voice-{c}"])
        for k, (l, (s, e)) in enumerate(zip(cl, spans)):
            prev_end = spans[k - 1][1] if k else 0
            nxt = spans[k + 1][0] if k + 1 < len(spans) else len(audio) / AR
            cs = max(prev_end, s - 0.10, (s + prev_end) / 2 if k else 0)
            ce = min(nxt, e + 0.15)
            seg = audio[int(cs * AR): int(ce * AR)]
            start = t
            timeline.append({"id": l["id"], "speech": [round(t + (s - cs), 3), round(t + (e - cs), 3)], "start": round(start, 3)})
            pieces.append((t, seg))
            t += len(seg) / AR
            if k + 1 < len(cl):
                gap = min(max(spans[k + 1][0] - e - 0.25, 0.25), 0.9)
                nl = cl[k + 1]
                if nl.get("section") != l.get("section"):
                    gap += 0.8
            else:
                gap = 1.0
            t += gap + float(l.get("pause", 0))
    total = t + 1.2
    buf = np.zeros(int(total * AR) + AR, np.float32)
    for st, seg in pieces:
        i = int(st * AR)
        buf[i:i + len(seg)] += seg
    peak = np.abs(buf).max() or 1
    buf = buf / peak * 0.89
    wav = os.path.join(tmp, "voice.wav")
    p = subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "f32le", "-ar", str(AR), "-ac", "1", "-i", "-", wav],
                       input=buf[: int(total * AR)].tobytes(), capture_output=True)
    if p.returncode:
        sys.exit(p.stderr.decode())

    # ---- visual segments
    for i, tl in enumerate(timeline):
        tl["end"] = timeline[i + 1]["start"] if i + 1 < len(timeline) else total
    segs = []
    for l, tl in zip(lines, timeline):
        vis = l.get("shots") or ([("slide", l["slide"])] if l.get("slide") else [])
        vis = [v if isinstance(v, tuple) else ("shot", v) for v in vis]
        if not vis:
            vis = [segs[-1][:2]] if segs else [("slide", "title")]
        span = (tl["end"] - tl["start"]) / len(vis)
        for j, v in enumerate(vis):
            s0 = 0.0 if not segs else tl["start"] + j * span
            if segs and segs[-1][:2] == v:
                segs[-1][3] = tl["start"] + (j + 1) * span
            else:
                segs.append([v[0], v[1], s0, tl["start"] + (j + 1) * span])
    segs[-1][3] = total

    shot_ids = [s["id"] for s in story["shots"]]
    ref_ids = [r["id"] for r in story.get("references", [])]
    media, miss = match_files(shot_ids + ref_ids, a.clips, (".mp4", ".mov", ".webm", ".png", ".jpg", ".jpeg", ".webp"), "clips")
    miss = [m for m in miss if m in shot_ids]
    used = {s[1] for s in segs if s[0] == "shot"}
    if [m for m in miss if m in used]:
        print(f"WARNING missing shots (previous picture held instead): {[m for m in miss if m in used]}", file=sys.stderr)

    # background still for slides: middle shot frame
    bg = os.path.join(tmp, "bg.jpg")
    vids = [media[s] for s in shot_ids if s in media]
    if vids:
        src = vids[len(vids) // 2]
        if src.lower().endswith((".mp4", ".mov", ".webm")):
            run(["ffmpeg", "-v", "error", "-y", "-ss", "1", "-i", src, "-frames:v", "1", bg])
        else:
            run(["ffmpeg", "-v", "error", "-y", "-i", src, bg])
    else:
        run(["ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i", f"color=c=0x1b2a4a:s={W}x{H}", "-frames:v", "1", bg])

    # ---- render slides + subtitle pngs
    items = []
    slide_ids = sorted({s[1] for s in segs if s[0] == "slide"})
    for sid in slide_ids:
        body, css = slide_html(sid, story, bg)
        items.append((body, css, os.path.join(tmp, f"slide_{sid}.png")))
    subs = []
    if not a.no_subs:
        for l, tl in zip(lines, timeline):
            if l.get("section", "story") == "story":
                fn = os.path.join(tmp, f"sub_{l['id']:04d}.png")
                body, css = sub_html(l["text"], l.get("ar", ""))
                items.append((body, css, fn))
                subs.append((tl["speech"][0] - 0.15, tl["speech"][1] + 0.35, fn))
    print(f"rendering {len(items)} slides/subtitles…", file=sys.stderr)
    render_pngs(items)

    # ---- render each segment
    xf = a.xfade
    last_media = None
    seg_files = []
    vf_cover = f"scale={W}:{H}:force_original_aspect_ratio=increase:flags=lanczos,crop={W}:{H},setsar=1"
    for n, (kind, sid, s0, s1) in enumerate(segs):
        dur = s1 - s0 + (xf if n + 1 < len(segs) else 0)
        out = os.path.join(tmp, f"seg_{n:04d}.mp4")
        enc = ["-an", "-c:v", "libx264", "-preset", a.preset, "-crf", "18", "-pix_fmt", "yuv420p", "-r", str(FPS), out]
        frames = max(int(round(dur * FPS)), 1)
        src = media.get(sid) if kind == "shot" else None
        if kind == "shot" and src is None:
            src = last_media
            print(f"  {sid}: missing → holding previous picture", file=sys.stderr)
        if kind == "slide":
            png = os.path.join(tmp, f"slide_{sid}.png")
            run(["ffmpeg", "-v", "error", "-y", "-loop", "1", "-t", f"{dur:.3f}", "-i", png, "-vf", f"fps={FPS},format=yuv420p"] + enc)
        elif src and src.lower().endswith((".mp4", ".mov", ".webm")):
            L = probe_dur(src)
            if L >= dur:
                vf = f"trim=0:{dur:.3f},setpts=PTS-STARTPTS,{vf_cover},fps={FPS}"
            else:
                f = max(L / dur, 0.75)
                hold = max(dur - L / f, 0)
                if hold > 1.5:
                    print(f"  {sid}: clip {L:.1f}s for {dur:.1f}s of narration — held {hold:.1f}s; a longer clip would look better", file=sys.stderr)
                vf = f"setpts=PTS/{f:.4f},{vf_cover},fps={FPS},tpad=stop_mode=clone:stop_duration={hold + 0.1:.3f},trim=0:{dur:.3f}"
            run(["ffmpeg", "-v", "error", "-y", "-i", src, "-vf", vf] + enc)
            last_media = src
        else:  # still image (or nothing at all) → Ken Burns
            img = src or bg
            z0, z1 = (1.0, 1.12) if n % 2 == 0 else (1.12, 1.0)
            dx = ["iw/2-(iw/zoom/2)", "(iw-iw/zoom)*on/{F}", "(iw-iw/zoom)*(1-on/{F})"][n % 3].format(F=frames)
            zexpr = f"{z0}+({z1}-{z0})*on/{frames}"
            vf = (f"scale=3840:2160:force_original_aspect_ratio=increase,crop=3840:2160,"
                  f"zoompan=z='{zexpr}':x='{dx}':y='ih/2-(ih/zoom/2)':d={frames}:s={W}x{H}:fps={FPS},setsar=1")
            run(["ffmpeg", "-v", "error", "-y", "-loop", "1", "-i", img, "-vf", vf, "-frames:v", str(frames)] + enc)
            if src:
                last_media = src
        seg_files.append(out)
        print(f"  seg {n+1}/{len(segs)} {kind} {sid} {dur:.1f}s", file=sys.stderr)

    # ---- join with crossfades (in batches to keep filter graphs small)
    def xjoin(files, starts, out):
        if len(files) == 1:
            shutil.copy(files[0], out)
            return
        inp = []
        for f in files:
            inp += ["-i", f]
        fc, last = [], "[0:v]"
        for i in range(1, len(files)):
            off = starts[i] - starts[0]
            lab = f"[x{i}]"
            fc.append(f"{last}[{i}:v]xfade=transition=fade:duration={xf}:offset={off:.3f}{lab}")
            last = lab
        run(["ffmpeg", "-v", "error", "-y"] + inp + ["-filter_complex", ";".join(fc), "-map", last,
             "-c:v", "libx264", "-preset", a.preset, "-crf", "18", "-pix_fmt", "yuv420p", "-r", str(FPS), out])

    starts = [s[2] for s in segs]
    B = 25
    parts, pstarts = [], []
    for i in range(0, len(seg_files), B):
        fs, ss = seg_files[i:i + B], starts[i:i + B]
        # every batch but the last keeps its trailing xf overlap (last seg of batch was rendered with +xf)
        out = os.path.join(tmp, f"part_{i // B:03d}.mp4")
        xjoin(fs, ss, out)
        parts.append(out)
        pstarts.append(ss[0])
    joined = os.path.join(tmp, "joined.mp4")
    xjoin(parts, pstarts, joined) if xf > 0 else None
    if xf <= 0:
        lst = os.path.join(tmp, "list.txt")
        open(lst, "w").write("".join(f"file '{os.path.abspath(f)}'\n" for f in seg_files))
        run(["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", lst, "-c", "copy", joined])

    # ---- subtitles track (one overlay input built from a png sequence)
    vchain = "[0:v]"
    inputs = ["-i", joined, "-i", wav]
    fc = []
    if subs:
        blank = os.path.join(tmp, "blank.png")
        run(["ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i", f"color=c=black@0.0:s={W}x{H},format=rgba", "-frames:v", "1", blank])
        lst, cur = [], 0.0
        for s, e, fn in subs:
            s = max(s, cur)
            if s - cur > 0.01:
                lst.append((blank, s - cur))
            if e - s > 0.05:
                lst.append((fn, e - s))
                cur = e
        lst.append((blank, max(total - cur, 0.1)))
        lst.append((blank, 0.1))
        sl = os.path.join(tmp, "subs.txt")
        with open(sl, "w") as f:
            for fn, d in lst:
                f.write(f"file '{os.path.abspath(fn)}'\nduration {d:.3f}\n")
            f.write(f"file '{os.path.abspath(lst[-1][0])}'\n")
        inputs += ["-f", "concat", "-safe", "0", "-i", sl]
        fc.append(f"[2:v]fps={FPS},format=rgba[subs];[0:v][subs]overlay=0:0:format=auto:shortest=0[v1]")
        vchain = "[v1]"
    fc.append(f"{vchain}fade=t=in:st=0:d=0.6,fade=t=out:st={total - 1.0:.3f}:d=1.0,format=yuv420p[v]")
    achain = "[1:a]"
    if a.music:
        inputs += ["-stream_loop", "-1", "-i", a.music]
        mi = 3 if subs else 2
        fc.append(f"[{mi}:a]volume=0.10,atrim=0:{total:.3f}[m];[1:a][m]amix=inputs=2:duration=first:normalize=0[am]")
        achain = "[am]"
    fc.append(f"{achain}afade=t=in:st=0:d=0.4,afade=t=out:st={total - 1.0:.3f}:d=1.0[a]")
    final = os.path.join(a.out, "story.mp4")
    run(["ffmpeg", "-v", "error", "-y"] + inputs + ["-filter_complex", ";".join(fc), "-map", "[v]", "-map", "[a]",
         "-t", f"{total:.3f}", "-c:v", "libx264", "-preset", a.preset, "-crf", "19", "-tune", "film",
         "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", final])

    # ---- srt files, timeline, checks, thumbnail
    def ts(x):
        ms = int(round(x * 1000))
        return f"{ms//3600000:02d}:{ms//60000%60:02d}:{ms//1000%60:02d},{ms%1000:03d}"
    with open(os.path.join(a.out, "story.srt"), "w") as f, open(os.path.join(a.out, "story.ar.srt"), "w") as g:
        k = 0
        for n, (l, tl) in enumerate(zip(lines, timeline), 1):
            s, e = tl["speech"][0], tl["speech"][1] + 0.3
            f.write(f"{n}\n{ts(s)} --> {ts(e)}\n{l['text']}\n\n")
            if l.get("ar"):
                k += 1
                g.write(f"{k}\n{ts(s)} --> {ts(e)}\n{l['ar']}\n\n")
    json.dump({"duration": total, "lines": timeline, "segments": segs}, open(os.path.join(a.out, "timeline.json"), "w"), indent=1)
    chk = os.path.join(a.out, "check")
    os.makedirs(chk, exist_ok=True)
    picks = np.linspace(0, len(timeline) - 1, min(8, len(timeline))).astype(int)
    for i in picks:
        tl = timeline[i]
        run(["ffmpeg", "-v", "error", "-y", "-ss", f"{tl['speech'][0] + 0.6:.2f}", "-i", final, "-frames:v", "1", "-vf", "scale=960:-1",
             os.path.join(chk, f"line{lines[i]['id']:03d}.jpg")])
    # thumbnail: frame from the shot named in story["thumb_shot"] (or the 3rd shot) + title
    tshot = story.get("thumb_shot") or (shot_ids[2] if len(shot_ids) > 2 else shot_ids[0])
    tseg = next((s for s in segs if s[1] == tshot), segs[0])
    tframe = os.path.join(tmp, "thumb_bg.jpg")
    run(["ffmpeg", "-v", "error", "-y", "-ss", f"{(tseg[2] + tseg[3]) / 2:.2f}", "-i", joined, "-frames:v", "1", tframe])
    words = story.get("thumb_text") or story["title"].upper()
    body = f'''<div style="position:absolute;inset:0;background:url(file://{tframe}) center/cover"></div>
    <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,12,26,.82) 0%,rgba(8,12,26,.35) 55%,rgba(8,12,26,0) 75%)"></div>
    <div style="position:absolute;left:90px;top:0;bottom:0;width:980px;display:flex;flex-direction:column;justify-content:center;color:#fff">
    <div style="font-size:40px;font-weight:700;color:#f6d38a;letter-spacing:.08em">ENGLISH STORY · {esc(story.get("level","B1–C1"))}</div>
    <div style="font-family:Poppins;font-weight:800;font-size:132px;line-height:1.02;margin-top:18px;text-shadow:0 6px 24px rgba(0,0,0,.6)">{esc(words)}</div>
    <div class="ar" style="font-size:54px;color:#f6d38a;margin-top:26px">{esc(story.get("thumb_ar","قصة بالإنجليزي مع ترجمة عربية"))}</div></div>'''
    tp = os.path.join(tmp, "thumb.png")
    render_pngs([(body, "", tp)])
    run(["ffmpeg", "-v", "error", "-y", "-i", tp, "-vf", "scale=1280:720", "-q:v", "2", os.path.join(a.out, "thumbnail.jpg")])
    print(json.dumps({"video": final, "duration_s": round(total, 1), "segments": len(segs), "subtitle_lines": len(subs),
                      "missing_shots": [m for m in miss if m in used]}, indent=1))


if __name__ == "__main__":
    main()
