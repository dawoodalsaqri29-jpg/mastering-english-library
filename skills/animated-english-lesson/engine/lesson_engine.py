#!/usr/bin/env python3
"""Animated English lesson video engine.
lesson.json (beats) -> narrator TTS per chunk (Kokoro) -> HTML slide states (Playwright) revealed in sync with the
narration -> animated character clips (face rig / walk shots) with highlighted captions -> quizzes with countdown,
repeat-after-me with pauses, mid-video subscribe pop-up with a bell -> sound design (voice EQ, music bed ducked under
speech, ticks, dings, whooshes) -> subtitles (.srt) -> 1080p master.  usage: lesson_engine.py lesson.json out.mp4"""
import sys, os, json, math, re, subprocess, hashlib, numpy as np, soundfile as sf, cv2
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import slides as S

W, H, FPS, SR = 1920, 1080, 30, 48000
VF = ("highpass=f=80,equalizer=f=250:t=q:w=1:g=-2,equalizer=f=3200:t=q:w=1.2:g=2.5,acompressor=threshold=-22dB:ratio=3:"
      "attack=5:release=90:makeup=2,deesser=i=0.35,loudnorm=I=-16:TP=-1.5")

def run(cmd): subprocess.run(cmd, check=True)

def load_audio(path, filt=None):
    af = ["-af", filt] if filt else []
    raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", path, *af, "-f", "f32le", "-ac", "1", "-ar", str(SR), "-"], capture_output=True).stdout
    return np.frombuffer(raw, np.float32).astype(np.float64)

def dur_of(path):
    return float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", path], capture_output=True, text=True).stdout)

class TTS:
    def __init__(self, cache):
        from kokoro_onnx import Kokoro
        self.k = Kokoro("/home/claude/models/kokoro/kokoro-v1.0.onnx", "/home/claude/models/kokoro/voices-v1.0.bin")
        self.cache = cache; os.makedirs(cache, exist_ok=True)
    def say(self, text, voice, speed, pitch=None):
        key = hashlib.md5(f"{text}|{voice}|{speed}|{pitch}".encode()).hexdigest()[:12]
        out = f"{self.cache}/{key}.wav"
        if not os.path.exists(out):
            a, sr = self.k.create(text, voice=voice, speed=speed, lang="en-gb")
            nz = np.where(np.abs(a) > 0.008)[0]; a = a[max(nz[0] - 300, 0): nz[-1] + 600]
            sf.write(out + ".raw.wav", a, sr)
            filt = VF if not pitch else f"rubberband=pitch={pitch}:formant=shifted:pitchq=quality," + VF
            run(["ffmpeg", "-y", "-loglevel", "error", "-i", out + ".raw.wav", "-af", filt, "-ar", str(SR), out]); os.remove(out + ".raw.wav")
        return out, dur_of(out)

# ---------------------------------------------------------------- sound helpers
def bp(x, lo, hi):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR); X *= (f > lo) & (f < hi); return np.fft.irfft(X, len(x))
def tone(freqs, d, decay, amp):
    t = np.arange(int(d * SR)) / SR; x = sum(np.sin(2 * np.pi * f * t) * (0.6 ** i) for i, f in enumerate(freqs))
    return x * np.exp(-t / decay) * np.clip(t / 0.004, 0, 1) * amp
SFX = {
    "tick": lambda: tone([1800, 3600], 0.06, 0.012, 0.18),
    "ding": lambda: tone([1318.5, 1975.5, 2637], 1.2, 0.35, 0.16),
    "ting": lambda: tone([1568, 2349, 3136], 0.7, 0.2, 0.08),
    "bell": lambda: _bell(),
    "whoosh": lambda: bp(np.random.default_rng(1).standard_normal(int(0.35 * SR)), 300, 5000) * np.sin(np.linspace(0, np.pi, int(0.35 * SR))) ** 2 * 0.035,
    "pop": lambda: tone([880, 1760], 0.12, 0.03, 0.12),
}
SFX_DIR = "/home/claude/work/sfx"   # real recordings override the synthetic ones: <name>.wav (tick, ding, ting, bell, whoosh, pop)
SFX_PEAK = {"tick": 0.18, "ding": 0.16, "ting": 0.08, "bell": 0.16, "whoosh": 0.05, "pop": 0.12}
SFX_MAXLEN = {"tick": 0.5, "ding": 1.6, "ting": 1.0, "bell": 2.2, "whoosh": 0.9, "pop": 0.4}
def _real(name):
    a = load_audio(os.path.join(SFX_DIR, name + ".wav"))
    nz = np.where(np.abs(a) > np.abs(a).max() * 0.02)[0]; a = a[nz[0]: nz[0] + int(SFX_MAXLEN[name] * SR)]
    fade = min(len(a), int(0.08 * SR)); a[-fade:] *= np.linspace(1, 0, fade)
    return a / (np.abs(a).max() + 1e-9) * SFX_PEAK[name]
for _n in list(SFX):
    if os.path.exists(os.path.join(SFX_DIR, _n + ".wav")):
        SFX[_n] = (lambda n=_n: _real(n))
def _bell():
    out = np.zeros(int(1.9 * SR)); b = tone([2093, 2637, 3136, 4186], 1.6, 0.45, 0.12)
    for k in range(2):
        a0 = int(k * 0.11 * SR); out[a0:a0 + len(b)] += b[:len(out) - a0]
    return out
def piano_note(f, d, vel, r):
    n = int(d * SR); t = np.arange(n) / SR; x = np.zeros(n)
    for k in range(1, 8):
        fk = f * k * math.sqrt(1 + 0.0004 * k * k)
        if fk > 10000: break
        x += np.sin(2 * np.pi * fk * t + r.uniform(0, 6.28)) / k ** 1.3 * np.exp(-t * (0.9 + 0.55 * k))
    return x * vel * np.clip(t / 0.003, 0, 1)
def music_bed(n, seed=5, bpm=70, prog=None):
    r = np.random.default_rng(seed); L = np.zeros(n + SR * 4); beat = 60 / bpm
    prog = prog or [[60, 64, 67, 72], [55, 59, 62, 67], [57, 60, 64, 69], [53, 57, 60, 65]]       # C - G - Am - F
    mf = lambda m: 440 * 2 ** ((m - 69) / 12); tpos = 0.0; bar = 0
    while tpos < n / SR:
        ch = prog[bar % 4]
        for i, idx in enumerate([0, 2, 1, 3, 2, 1, 3, 2]):
            tt = tpos + i * beat / 2
            x = piano_note(mf(ch[idx] + 12), 2.4, 0.13 * r.uniform(0.75, 1.0), r); a0 = int(tt * SR); L[a0:a0 + len(x)] += x[:len(L) - a0]
        x = piano_note(mf(ch[0] - 12), 3.5, 0.15, r); a0 = int(tpos * SR); L[a0:a0 + len(x)] += x[:len(L) - a0]
        tpos += 4 * beat; bar += 1
    ir = np.random.default_rng(2).standard_normal(int(1.8 * SR)) * np.exp(-np.arange(int(1.8 * SR)) / SR / 0.5)
    wet = np.fft.irfft(np.fft.rfft(L, len(L) + len(ir)) * np.fft.rfft(ir, len(L) + len(ir)))[:len(L)]
    L = L + wet / (np.abs(wet).max() + 1e-9) * np.abs(L).max() * 0.4
    return L[:n] / (np.abs(L).max() + 1e-9)

# ---------------------------------------------------------------- build
def build(lesson_path, out):
    L = json.load(open(lesson_path)); base = os.path.dirname(os.path.abspath(lesson_path))
    work = os.path.join(base, "build"); os.makedirs(work, exist_ok=True)
    T = L["theme"]; nar = L["narrator"]; tts = TTS(os.path.join(work, "tts"))
    brand = L.get("brand", "Mastering English")
    from playwright.sync_api import sync_playwright
    pw = sync_playwright().start(); br = pw.chromium.launch(); pg = br.new_page(viewport={"width": W, "height": H})
    def shot(body, name, avatar=True, transparent=False):
        path = os.path.join(work, name)
        if transparent:
            pg.set_content(f'<!doctype html><html><head><meta charset="utf-8"><style>{S.css(T)} html,body{{background:transparent!important}}</style></head><body>{body}</body></html>')
        else:
            pg.set_content(S.page(T, body, L.get("level", ""), brand, avatar=avatar))
        pg.wait_for_timeout(60); pg.screenshot(path=path, omit_background=transparent); return path
    def caption_png(text, name):
        body = (f'<div style="position:absolute;left:50%;bottom:70px;transform:translateX(-50%);max-width:1640px;padding:22px 44px;'
                f'border-radius:22px;background:rgba(20,16,12,.72);color:#fff;font:600 50px Inter;text-align:center;line-height:1.3">'
                + S.v(text).replace('class="v"', 'style="color:#FFC857;font-weight:800"') + "</div>")
        return shot(body, name, transparent=True)
    popup = shot('<div style="position:absolute;right:60px;bottom:150px;display:flex;align-items:center;gap:22px;background:#E62117;color:#fff;'
                 'font:800 48px Inter;padding:22px 40px;border-radius:70px;box-shadow:0 14px 40px rgba(0,0,0,.35)">'
                 '<svg width="56" height="56" viewBox="0 0 24 24" fill="#fff"><path d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22zm7-6V11a7 7 0 0 0-5.5-6.84V3a1.5 1.5 0 0 0-3 0v1.16A7 7 0 0 0 5 11v5l-2 2v1h18v-1z"/></svg>'
                 'SUBSCRIBE  ·  COMMENT</div>', "popup.png", transparent=True)

    segs = []          # visual segments: ("img", path, dur) | ("clip", path, t_in, dur, caption_png|None)
    aud = []           # (array, start_time, kind)
    subs = []          # (t0, t1, text)
    popups = []
    cues = []          # (time, kind, label): the sound-design cue list (sfx_layer.py reads it)
    def cue(tt, kind, label=""): cues.append((round(tt, 3), kind, label))
    t = 0.0
    def add_say(text, t0, voice=None, speed=None, pitch=None):
        p, d = tts.say(text, voice or nar["voice"], speed or nar["speed"], pitch)
        aud.append((load_audio(p), t0, "voice")); subs.append((t0, t0 + d, text)); return d
    NUM2 = {"00": "hundred", "10": "ten", "19": "nineteen", "20": "twenty", "21": "twenty one", "22": "twenty two", "23": "twenty three", "24": "twenty four", "25": "twenty five", "26": "twenty six"}
    def reveal_plan(n_chunks, n_items):
        if n_items == 0: return [0] * n_chunks
        if n_chunks == n_items: return [i + 1 for i in range(n_chunks)]
        if n_chunks == n_items + 1: return [i for i in range(n_chunks)]
        if n_chunks == n_items + 2: return [0] + [min(i, n_items) for i in range(1, n_chunks)]
        return [round(n_items * (i + 1) / n_chunks) for i in range(n_chunks)]
    clips = L["clips"]; img_title = os.path.join(os.path.dirname(os.path.abspath(__file__)), "title_img.jpg")
    chapters = []
    for bi, b in enumerate(L["beats"]):
        typ = b["type"]
        if b.get("chapter"): chapters.append((round(t, 1), b["chapter"]))
        if typ == "popup":
            popups.append(t + 0.5); cue(t + 0.5, "popup", "subscribe"); continue
        aud.append((SFX["whoosh"](), max(t - 0.1, 0), "sfx"))
        cue(t, {"slide": "slide_" + b.get("layout", ""), "quiz": "question", "clip": "clip_" + clips.get(b.get("clip"), {}).get("kind", "")}.get(typ, typ), b["id"] + ("|chapter:" + b["chapter"] if b.get("chapter") else ""))
        if typ == "slide":
            lay = b["layout"]; d = b.get("data", {}); says = b.get("say", [])
            _, n_items = S.build(lay, d, L["title"], L.get("subtitle", ""), 0)
            plan = reveal_plan(len(says), n_items)
            if lay == "chips":   # reveal chips when they are spoken
                plan = []; shown = 0
                def chip_key(c):   # spoken form of a chip: words before any symbol/number note, years spelled out
                    c = re.sub(r"\b(19|20)(\d\d)\b", lambda m: ("nineteen " if m.group(1) == "19" else "twenty ") + NUM2.get(m.group(2), m.group(2)), c.split(" (")[0].lower())
                    ws = []
                    for w in c.split():
                        w = w.strip("!?.,;:")
                        if not re.fullmatch(r"[a-z']+", w): break
                        ws.append(w)
                    return " ".join(ws)
                for s_ in says:
                    low = " " + re.sub(r"[^a-z' ]", " ", s_.lower()) + " "
                    low = re.sub(r"\s+", " ", low)
                    for ci, c in enumerate(d["chips"]):
                        k_ = chip_key(c)
                        if k_ and f" {k_} " in low and ci + 1 > shown: shown = ci + 1
                    plan.append(max(shown, plan[-1] if plan else 0))
            for ci, s_ in enumerate(says):
                body, _ = S.build(lay, d, L["title"], L.get("subtitle", ""), plan[ci], extra=img_title if lay == "title" else None)
                png = shot(body, f"b{bi:02d}_{ci}.png", avatar=lay not in ("title", "title2", "end"))
                dd = add_say(s_, t + 0.25)
                if ci > 0 and plan[ci] != plan[ci - 1]: aud.append((SFX["pop"](), t + 0.05, "sfx")); cue(t + 0.05, "reveal", f"{b['id']}:{plan[ci]}")
                seg_d = dd + 0.25 + (0.35 if ci < len(says) - 1 else 0.7)
                segs.append(("img", png, seg_d)); t += seg_d
            if not says:
                body, _ = S.build(lay, d, L["title"], L.get("subtitle", ""), n_items); segs.append(("img", shot(body, f"b{bi:02d}.png"), 3.0)); t += 3.0
            if lay == "repeat":
                for ri, r in enumerate(b["repeat"]):
                    body, _ = S.build(lay, d, L["title"], "", 0, cur=ri)
                    png = shot(body, f"b{bi:02d}_r{ri}.png")
                    dd = add_say(r["text"], t + 0.2); segs.append(("img", png, dd + 0.4)); t += dd + 0.4
                    body, _ = S.build(lay, d, L["title"], "", 0, cur=ri, extra="turn")
                    png = shot(body, f"b{bi:02d}_r{ri}t.png"); aud.append((SFX["ting"](), t, "sfx")); cue(t, "your_turn", b["id"])
                    segs.append(("img", png, r.get("gap", 2.6))); t += r.get("gap", 2.6)
        elif typ == "quiz":
            d = dict(b["data"]); d["heading"] = d.get("heading", f"Question {b['id'][1:]}")
            qtext = f"Number {b['id'][1:]}. " + d["q"].replace("___", "blank").replace('"', "")
            body, _ = S.build("quiz", d, "", "", 0); png = shot(body, f"b{bi:02d}_q.png")
            dd = add_say(qtext, t + 0.25); segs.append(("img", png, dd + 0.6)); t += dd + 0.6
            for k in range(5, 0, -1):
                body, _ = S.build("quiz", d, "", "", 0, cur=k); png = shot(body, f"b{bi:02d}_c{k}.png")
                aud.append((SFX["tick"](), t, "sfx")); cue(t, "tick", f"{b['id']}:{k}"); segs.append(("img", png, 1.0)); t += 1.0
            body, _ = S.build("quiz", d, "", "", 0, extra="answer"); png = shot(body, f"b{bi:02d}_a.png")
            aud.append((SFX["ding"](), t, "sfx")); cue(t, "answer", b["id"]); dd = add_say(b["say_answer"], t + 0.45)
            segs.append(("img", png, dd + 1.1)); t += dd + 1.1
        elif typ == "clip":
            c = clips[b["clip"]]; cap = caption_png(b["caption"], f"cap_{bi:02d}.png") if b.get("caption") else None
            if c["kind"] == "image":
                say_t = t + 0.4; tot = 0.0
                for s_ in b.get("say", []):
                    dd = add_say(s_, say_t); say_t += dd + 0.3; tot += dd + 0.3
                seg_d = max(b.get("seconds", 4.0), tot + 0.8)
                segs.append(("kb", c["file"], c.get("move", "in"), seg_d, cap)); t += seg_d
                continue
            if c["kind"] == "face":
                f = os.path.join(base, "clips", f"{b['clip']}.mp4"); dd = dur_of(f)
                segs.append(("clip", f, 0.0, dd, cap)); aud.append((load_audio(f), t, "child"))
                subs.append((t + 0.2, t + dd - 0.2, c["text"])); t += dd
            else:
                f = c["file"]; t_in = c.get("in", 0.0); say_t = t + 0.4; tot = 0.0
                for s_ in b.get("say", []):
                    dd = add_say(s_, say_t); say_t += dd + 0.3; tot += dd + 0.3
                seg_d = min(max(b.get("seconds", 5.0), tot + 0.8), dur_of(f) - t_in)
                if not b.get("mute"):
                    a_ = load_audio(f); a0 = int(t_in * SR); aud.append((a_[a0:a0 + int(seg_d * SR)], t, "child"))
                elif c.get("amb_audio"):   # a voice-free ambience/footsteps stem, quietly under the narration
                    a_ = load_audio(c["amb_audio"]); a0 = int(c.get("amb_in", t_in) * SR); aud.append((a_[a0:a0 + int(seg_d * SR)] * 0.6, t, "amb"))
                segs.append(("clip", f, t_in, seg_d, cap)); t += seg_d
    br.close(); pw.stop()
    total = t + 0.5
    # ---------------------------------------------------------------- video
    AUDIO_ONLY = bool(os.environ.get("LESSON_AUDIO_ONLY"))   # re-mix sound only: stems + cue list, video untouched
    if AUDIO_ONLY:
        fi = sum(int(round((sg[2] if sg[0] == "img" else sg[3]) * FPS)) for sg in segs)
    else:
        enc = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
                                "-c:v", "libx264", "-crf", "17", "-preset", "medium", "-pix_fmt", "yuv420p", out + ".v.mp4"], stdin=subprocess.PIPE)
        pop = np.asarray(Image.open(popup).convert("RGBA")).astype(np.float32)
        prev = None; fi = 0; XF = int(0.25 * FPS)
        def emit(fr):
            nonlocal fi
            tt = fi / FPS
            for p0 in popups:
                u = tt - p0
                if 0 <= u <= 4.2:
                    k = min(u / 0.35, 1.0) * min((4.2 - u) / 0.35, 1.0); k = k * k * (3 - 2 * k)
                    shift = int((1 - k) * 700); a = pop[..., 3:4] / 255 * k
                    sh = np.roll(pop[..., :3], shift, 1); sa = np.roll(a, shift, 1)
                    fr = fr * (1 - sa) + sh * sa
            enc.stdin.write(np.clip(fr, 0, 255).astype(np.uint8).tobytes()); fi += 1
        for sg in segs:
            if sg[0] == "img":
                img = np.asarray(Image.open(sg[1]).convert("RGB")).astype(np.float32); n = int(round(sg[2] * FPS))
                for k in range(n):
                    fr = img
                    if prev is not None and k < XF: a = (k + 1) / (XF + 1); fr = prev * (1 - a) + img * a
                    emit(fr)
                prev = img
            elif sg[0] == "kb":
                _, f, move, d, cap = sg; n = int(round(d * FPS))
                src = np.asarray(Image.open(f).convert("RGB")).astype(np.float32); sh, sw = src.shape[:2]
                capi = np.asarray(Image.open(cap).convert("RGBA")).astype(np.float32) if cap else None
                base_s = max(W / sw, H / sh)
                for k in range(n):
                    u = k / max(n - 1, 1); e = u * u * (3 - 2 * u)
                    z = 1.0 + 0.10 * (e if move == "in" else 1 - e); px = (0.5 + (0.06 * (e - 0.5) if move == "pan" else 0))
                    sc_ = base_s * z; cw, chh = W / sc_, H / sc_
                    x0 = (sw - cw) * px; y0 = (sh - chh) * 0.45
                    M = np.float32([[sc_, 0, -x0 * sc_], [0, sc_, -y0 * sc_]])
                    fr = cv2.warpAffine(src, M, (W, H), flags=cv2.INTER_LINEAR, borderMode=cv2.BORDER_REFLECT)
                    if capi is not None:
                        uu = k / FPS; a = capi[..., 3:4] / 255 * min(max((uu - 0.3) / 0.3, 0), 1) * min(max((d - uu) / 0.3, 0), 1)
                        fr = fr * (1 - a) + capi[..., :3] * a
                    if prev is not None and k < XF: al = (k + 1) / (XF + 1); fr = prev * (1 - al) + fr * al
                    emit(fr)
                prev = fr
            else:
                _, f, t_in, d, cap = sg; n = int(round(d * FPS))
                dec = subprocess.Popen(["ffmpeg", "-loglevel", "error", "-ss", str(t_in), "-i", f, "-t", str(d + 0.2), "-vf", f"scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H},fps={FPS}",
                                        "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
                capi = np.asarray(Image.open(cap).convert("RGBA")).astype(np.float32) if cap else None
                last = None
                for k in range(n):
                    buf = dec.stdout.read(W * H * 3)
                    fr = np.frombuffer(buf, np.uint8).reshape(H, W, 3).astype(np.float32) if len(buf) == W * H * 3 else last
                    last = fr
                    if capi is not None:
                        u = k / FPS; a = capi[..., 3:4] / 255 * min(max((u - 0.3) / 0.3, 0), 1) * min(max((d - u) / 0.3, 0), 1)
                        fr = fr * (1 - a) + capi[..., :3] * a
                    if prev is not None and k < XF: al = (k + 1) / (XF + 1); fr = prev * (1 - al) + fr * al
                    emit(fr)
                dec.stdout.close(); dec.wait(); prev = last
        enc.stdin.close(); enc.wait()
    total = fi / FPS
    # ---------------------------------------------------------------- audio
    N = int(total * SR) + SR; mix = np.zeros(N); voice_env = np.zeros(N)
    stems = {k: np.zeros(N) for k in ("voice", "sfx", "music")}
    for a, t0, kind in aud:
        a0 = int(t0 * SR); n = min(len(a), N - a0)
        if n <= 0: continue
        g = {"voice": 1.0, "child": 1.0, "sfx": 1.0, "amb": 1.0}[kind]
        mix[a0:a0 + n] += a[:n] * g
        stems["voice" if kind in ("voice", "child") else "sfx"][a0:a0 + n] += a[:n] * g
        if kind in ("voice", "child"): voice_env[a0:a0 + n] = 1.0
    for p0 in popups:
        s = SFX["bell"](); a0 = int(p0 * SR); mix[a0:a0 + len(s)] += s[:N - a0]; stems["sfx"][a0:a0 + len(s)] += s[:N - a0]
    k_ = int(0.3 * SR); env = np.convolve(voice_env, np.ones(k_) / k_, "same")
    mus = music_bed(N, seed=L.get("music_seed", 5)) * L.get("music", 0.055)
    fade = np.clip(np.arange(N) / SR / 2.0, 0, 1) * np.clip((total - np.arange(N) / SR) / 3.0, 0, 1)
    mix += mus * (1 - 0.55 * env) * fade
    stems["music"] += mus * fade   # un-ducked bed; the mixer ducks it
    sd = os.path.splitext(out)[0] + ".stems"; os.makedirs(sd, exist_ok=True)
    for k, v_ in stems.items(): sf.write(f"{sd}/{k}.wav", v_[:int(total * SR)].astype(np.float32), SR)
    json.dump({"duration": total, "cues": cues, "chapters": chapters}, open(f"{sd}/cues.json", "w"), ensure_ascii=False, indent=0)
    if AUDIO_ONLY:
        print("stems", sd, len(cues), "cues"); return
    mix = mix[:int(total * SR)]; mix /= max(1.0, np.abs(mix).max() / 0.95)
    sf.write(out + ".pre.wav", mix.astype(np.float32), SR)
    run(["ffmpeg", "-y", "-loglevel", "error", "-i", out + ".pre.wav", "-af", "loudnorm=I=-14:TP=-1:LRA=9", "-ar", str(SR), out + ".wav"])
    run(["ffmpeg", "-y", "-loglevel", "error", "-i", out + ".v.mp4", "-i", out + ".wav", "-map", "0:v", "-map", "1:a", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k",
         "-shortest", "-movflags", "+faststart", out])
    os.remove(out + ".v.mp4"); os.remove(out + ".pre.wav")
    # ---------------------------------------------------------------- subtitles
    def ts(x): h = int(x // 3600); m = int(x % 3600 // 60); s_ = x % 60; return f"{h:02d}:{m:02d}:{int(s_):02d},{int((s_ % 1) * 1000):03d}"
    with open(os.path.splitext(out)[0] + ".en.srt", "w") as fsrt:
        for i, (a, b_, txt) in enumerate(sorted(subs)):
            fsrt.write(f"{i + 1}\n{ts(a)} --> {ts(b_)}\n{txt}\n\n")
    json.dump({"duration": total, "popups": popups, "segments": len(segs), "chapters": chapters}, open(os.path.splitext(out)[0] + ".build.json", "w"))
    print("lesson", out, f"{total / 60:.1f} min", len(segs), "segments")

if __name__ == "__main__":
    build(sys.argv[1], sys.argv[2])
