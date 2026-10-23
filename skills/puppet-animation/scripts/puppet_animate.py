#!/usr/bin/env python3
"""Cut-out (Live2D-style) animation of storybook characters — runs here, free, no video model.

A character cutout (RGBA, background removed) is split into parts (head / upper body / lower body,
or head / body / tail for a cat), each part pivots a little, the whole figure walks (bob + sway +
travel + approach), breathes, blinks, and talks with a mouth that opens to the loudness of a voice
file. Actors are composed on a painted background with a slow camera move and floating particles.

usage:  puppet_animate.py scene.json out.mp4 [--debug-frame T]

scene.json:
{
 "size": [1920, 1080], "fps": 30, "seconds": 10,
 "background": "village.png", "camera": {"move": "in", "amount": 0.06}, "fx": "dust",
 "ground": 0.95,                                  # y (fraction of H) where feet stand
 "audio": [{"file": "line.wav", "at": 5.0}],      # extra tracks mixed into the output
 "actors": [
   {"id": "mia", "image": "mia_cut.png", "kind": "human",
    "height": 0.80,                               # figure height as fraction of H at scale 1
    "path": [{"t": 0, "x": 0.60, "scale": 0.72}, {"t": 6, "x": 0.52, "scale": 1.0}],
    "walk": {"until": 6, "bob": 0.012, "sway": 2.5, "steps": 1.7},
    "lean": [{"t": 6.5, "a": 0}, {"t": 7.5, "a": -9}],   # upper-body lean (deg, - = to the left)
    "head": [{"t": 6.5, "a": 0}, {"t": 7.5, "a": -8}],   # head tilt on top of the lean
    "talk": {"audio": "line.wav", "at": 7.2},
    "blink": true, "face": {"eyes": [[96, 90], [132, 90]], "mouth": [118, 126]}   # optional overrides
   },
   {"id": "whiskers", "image": "cat_cut.png", "kind": "cat", "height": 0.34,
    "path": [{"t": 0, "x": 0.44, "scale": 0.72}, {"t": 6, "x": 0.40, "scale": 1.0}],
    "walk": {"until": 6, "bob": 0.01, "sway": 2, "steps": 2.4}, "tail": {"amp": 9, "hz": 0.5},
    "flip": false}
 ]
}
"""
import argparse, json, math, os, subprocess, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

AR = 44100


# ----------------------------------------------------------------------------- helpers
def ease(t):
    return t * t * (3 - 2 * t)


def keyed(keys, t, name="a", default=0.0):
    """Piecewise-linear (eased) interpolation of a list of {t, name} keys."""
    if not keys:
        return default
    keys = sorted(keys, key=lambda k: k["t"])
    if t <= keys[0]["t"]:
        return keys[0].get(name, default)
    for a, b in zip(keys, keys[1:]):
        if a["t"] <= t <= b["t"]:
            u = (t - a["t"]) / max(b["t"] - a["t"], 1e-6)
            return a.get(name, default) + (b.get(name, default) - a.get(name, default)) * ease(u)
    return keys[-1].get(name, default)


def envelope(path, fps, smooth=3):
    """Per-frame loudness 0..1 of an audio file (for mouth opening)."""
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", path, "-ac", "1", "-ar", "16000", "-f", "s16le", "-"],
                         capture_output=True, check=True).stdout
    x = np.frombuffer(raw, np.int16).astype(np.float32) / 32768
    hop = int(16000 / fps)
    n = len(x) // hop
    e = np.sqrt((x[: n * hop].reshape(n, hop) ** 2).mean(1))
    e = np.convolve(e, np.ones(smooth) / smooth, "same")
    p = np.percentile(e[e > 0.01], 90) if (e > 0.01).any() else 1
    return np.clip(e / max(p, 1e-6), 0, 1)


def audio_len(path):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", path],
                       capture_output=True, text=True)
    return float(r.stdout.strip())


def rotate_about(layer, angle, pivot):
    """Rotate an RGBA layer (full canvas) about pivot (x, y) in canvas coords."""
    if abs(angle) < 0.01:
        return layer
    return layer.rotate(angle, resample=Image.BICUBIC, center=pivot)


def alpha_bbox_rows(a, y0, y1):
    rows = a[y0:y1]
    cols = np.where(rows.max(0) > 40)[0]
    return (cols.min(), cols.max()) if len(cols) else (0, a.shape[1] - 1)


# ----------------------------------------------------------------------------- actor
class Actor:
    def __init__(self, spec, base, H):
        self.s = spec
        im = Image.open(os.path.join(base, spec["image"])).convert("RGBA")
        im = im.crop(im.getbbox())
        # work at a resolution close to the final on-screen size (keeps rotations crisp)
        target_h = int(spec.get("height", 0.8) * H * 1.05)
        r = target_h / im.height
        fig = im.resize((max(1, int(im.width * r)), target_h), Image.LANCZOS)
        # pad the canvas so rotated heads / tails are never clipped (feet stay on the bottom edge)
        self.w0, self.h0 = fig.size
        self.padx, self.pady = int(self.w0 * 0.35), int(self.h0 * 0.12)
        self.im = Image.new("RGBA", (self.w0 + 2 * self.padx, self.h0 + self.pady), (0, 0, 0, 0))
        self.im.alpha_composite(fig, (self.padx, self.pady))
        self.w, self.h = self.im.size
        self.a = np.asarray(self.im)[..., 3]
        self.kind = spec.get("kind", "human")
        self.flip = spec.get("flip", False)
        if self.flip:
            self.im = self.im.transpose(Image.FLIP_LEFT_RIGHT)
            self.a = self.a[:, ::-1]
        self.rig()
        self.talk_env = None
        if "talk" in spec:
            self.talk_env = envelope(os.path.join(base, spec["talk"]["audio"]), spec["_fps"])
            self.talk_at = spec["talk"].get("at", 0)
        self.blinks = []
        if spec.get("blink", True) and self.kind == "human":
            rng = np.random.default_rng(int(sum(map(ord, spec["id"]))))
            t = 1.0 + rng.uniform(0, 1.5)
            while t < spec["_seconds"]:
                self.blinks.append(t)
                t += rng.uniform(2.2, 4.5)

    # ---- rig: find parts, pivots, face
    def rig(self):
        h, w, a = self.h, self.w, self.a
        f = self.s.get("face", {})
        if self.kind == "cat":
            # tail: in the top 55% rows, columns left (or right) of the first alpha gap
            top = a[: int(h * 0.55)]
            colmask = top.max(0) > 40
            gaps = np.where(~colmask)[0]
            x0, x1 = alpha_bbox_rows(a, 0, int(h * 0.55))
            P = lambda q: (q[0] * self.w0 + self.padx, q[1] * self.h0 + self.pady)
            inner = gaps[(gaps > x0 + 10) & (gaps < x1 - 10)]
            self.tail_cols = None
            if len(inner):
                gap = int(inner.min()) if inner.min() - x0 < x1 - inner.max() else int(inner.max())
                side = "left" if inner.min() - x0 < x1 - inner.max() else "right"
                self.tail_cols = (0, gap) if side == "left" else (gap, w)
                self.tail_rows = (0, int(h * 0.6))
                self.tail_pivot = ((self.tail_cols[0] + self.tail_cols[1]) / 2 if side == "left" else (self.tail_cols[0] + self.tail_cols[1]) / 2,
                                   int(h * 0.58))
            hx0, hx1 = alpha_bbox_rows(a, self.pady, int(self.h0 * 0.12) + self.pady)
            self.face_c = ((hx0 + hx1) / 2, int(self.h0 * 0.18) + self.pady)
            self.mouth = P(f["mouth"]) if "mouth" in f else (self.face_c[0], int(self.h0 * 0.27) + self.pady)
            self.mouth_w = int(self.w0 * 0.05)
            self.neck_y = int(h * 0.36)
            self.waist_y = None
            self.eyes = None
        else:
            # overrides are FRACTIONS of the cutout (x/w, y/h), so they survive resizing
            w0, h0, px_, py_ = self.w0, self.h0, self.padx, self.pady
            P = lambda q: (q[0] * w0 + px_, q[1] * h0 + py_)
            self.neck_y = int(P(f["neck"])[1]) if "neck" in f else int(h0 * 0.235 + py_)
            self.waist_y = int(P(f["waist"])[1]) if "waist" in f else int(h0 * 0.48 + py_)
            hx0, hx1 = alpha_bbox_rows(a, int(h0 * 0.08 + py_), int(h0 * 0.18 + py_))
            cx = (hx0 + hx1) / 2
            self.eyes = [P(e) for e in f["eyes"]] if "eyes" in f else [(cx - w0 * 0.07, h0 * 0.13 + py_), (cx + w0 * 0.07, h0 * 0.13 + py_)]
            self.mouth = P(f["mouth"]) if "mouth" in f else (cx, h0 * 0.185 + py_)
            self.mouth_w = int(w0 * 0.05)
            self.neck_x = P(f["neck"])[0] if "neck" in f else None
            self.waist_x = P(f["waist"])[0] if "waist" in f else None
            # skin colour for eyelids: sample just above the eyes
            px = np.asarray(self.im)[..., :3]
            ys, xs = int(self.eyes[0][1] - h * 0.018), int((self.eyes[0][0] + self.eyes[1][0]) / 2)   # bridge of the nose / forehead
            patch = px[max(ys - 3, 0): ys + 3, max(xs - 5, 0): xs + 5].reshape(-1, 3)
            self.skin = tuple(int(v) for v in np.median(patch, 0))
        # neck pivot x = centre of alpha at neck row
        nx0, nx1 = alpha_bbox_rows(a, self.neck_y - 3, self.neck_y + 3)
        self.neck_pivot = (getattr(self, "neck_x", None) or (nx0 + nx1) / 2, self.neck_y)
        if self.waist_y:
            wx0, wx1 = alpha_bbox_rows(a, self.waist_y - 3, self.waist_y + 3)
            self.waist_pivot = (getattr(self, "waist_x", None) or (wx0 + wx1) / 2, self.waist_y)

    def part(self, y0, y1, x0=None, x1=None, feather=6):
        """RGBA layer (canvas-sized) holding only rows y0..y1 (and cols x0..x1), soft edges."""
        m = np.zeros((self.h, self.w), np.float32)
        m[max(y0, 0): min(y1, self.h), (x0 or 0): (x1 or self.w)] = 1
        if feather:
            m = np.asarray(Image.fromarray((m * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(feather))) / 255
        arr = np.asarray(self.im).astype(np.float32).copy()
        arr[..., 3] *= m
        return Image.fromarray(arr.astype(np.uint8), "RGBA")

    # ---- draw one frame of the character in its own canvas (unscaled)
    def render(self, t, fi):
        s = self.s
        head_a = keyed(s.get("head", []), t) + 1.2 * math.sin(2 * math.pi * 0.35 * t)   # idle nod
        lean_a = keyed(s.get("lean", []), t)
        breath = 1 + 0.006 * math.sin(2 * math.pi * 0.3 * t)
        mouth_open = 0.0
        if self.talk_env is not None:
            k = fi - int(self.talk_at * s["_fps"])
            if 0 <= k < len(self.talk_env):
                mouth_open = 0.85 * float(self.talk_env[k]) ** 1.5
        blinking = any(0 <= t - b < 0.10 for b in self.blinks)

        if self.kind == "cat":
            body = self.part(0, self.h, feather=0)
            tail_layer = None
            if self.tail_cols:
                tx0, tx1 = self.tail_cols
                # remove the tail region from the body, keep it as its own layer
                tail_layer = self.part(self.tail_rows[0], self.tail_rows[1], tx0, tx1, feather=4)
                arr = np.asarray(body).astype(np.float32).copy()
                ta = np.asarray(tail_layer)[..., 3].astype(np.float32) / 255
                arr[..., 3] *= (1 - ta)
                body = Image.fromarray(arr.astype(np.uint8), "RGBA")
                tail = s.get("tail", {"amp": 8, "hz": 0.5})
                ang = tail["amp"] * math.sin(2 * math.pi * tail["hz"] * t + 0.7)
                tail_layer = rotate_about(tail_layer, ang, self.tail_pivot)
            # mouth (cat talks rarely); gentle head bob via whole-body handled outside
            canvas = Image.new("RGBA", (self.w, self.h), (0, 0, 0, 0))
            if tail_layer is not None:
                canvas.alpha_composite(tail_layer)
            canvas.alpha_composite(body)
            if mouth_open > 0.05:
                self.draw_mouth(canvas, mouth_open, dark=(25, 15, 15))
            return canvas

        # human: lower / upper / head
        lower = self.part(self.waist_y - 4, self.h)
        upper = self.part(self.neck_y - 4, self.waist_y + 4)
        head = self.part(0, self.neck_y + 4)
        if blinking:
            lid = Image.new("RGBA", head.size, (0, 0, 0, 0)); d = ImageDraw.Draw(lid)
            for (ex, ey) in self.eyes:
                rw, rh = self.w * 0.060, self.h * 0.012
                box = (ex - rw, ey - rh * 0.9, ex + rw, ey + rh * 1.4)
                d.ellipse(box, fill=self.skin + (245,))
                d.arc(box, 10, 170, fill=(90, 50, 40, 170), width=2)  # closed-lid lash line along the lower edge
            head.alpha_composite(lid.filter(ImageFilter.GaussianBlur(1.0)))
        if mouth_open > 0.05:
            self.draw_mouth(head, mouth_open, dark=(72, 30, 26))
        # upper body + head lean about the waist; head adds its own tilt about the neck
        head = rotate_about(head, head_a, self.neck_pivot)
        head_upper = Image.alpha_composite(upper, head)
        head_upper = rotate_about(head_upper, lean_a, self.waist_pivot)
        canvas = Image.alpha_composite(lower, head_upper)
        if abs(breath - 1) > 1e-4:
            nw, nh = int(self.w * breath), self.h
            canvas = canvas.resize((nw, nh), Image.BILINEAR)
            pad = Image.new("RGBA", (self.w, self.h), (0, 0, 0, 0))
            pad.alpha_composite(canvas, (int((self.w - nw) / 2), 0))
            canvas = pad
        return canvas

    def draw_mouth(self, layer, amt, dark):
        mx, my = self.mouth
        d = ImageDraw.Draw(layer)
        rw = self.mouth_w * (0.55 + 0.25 * amt)
        rh = self.mouth_w * (0.15 + 0.80 * amt)
        # mouth opening: dark inside, soft edge, a hint of tongue when wide open
        m = Image.new("RGBA", layer.size, (0, 0, 0, 0)); dm = ImageDraw.Draw(m)
        dm.ellipse((mx - rw, my - rh * 0.15, mx + rw, my + rh), fill=dark + (215,))
        if amt > 0.5:
            dm.ellipse((mx - rw * 0.5, my + rh * 0.3, mx + rw * 0.5, my + rh * 0.95), fill=(190, 95, 105, 150))
        layer.alpha_composite(m.filter(ImageFilter.GaussianBlur(0.8)))


# ----------------------------------------------------------------------------- scene
def particles(W, H, n, rng):
    return dict(x=rng.uniform(0, W, n), y=rng.uniform(0, H, n), r=rng.uniform(1.2, 3.2, n),
                vx=rng.uniform(-6, 6, n), vy=rng.uniform(-14, -3, n), ph=rng.uniform(0, 6.28, n))


def draw_particles(frame, P, t, fx):
    ov = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)
    W, H = frame.size
    col = {"dust": (255, 225, 160), "sparkles": (255, 250, 220), "fireflies": (200, 255, 120)}.get(fx, (255, 225, 160))
    for i in range(len(P["x"])):
        x = (P["x"][i] + P["vx"][i] * t + 12 * math.sin(t * 0.8 + P["ph"][i])) % W
        y = (P["y"][i] + P["vy"][i] * t) % H
        a = int(140 * (0.5 + 0.5 * math.sin(t * 2.0 + P["ph"][i])))
        r = P["r"][i] * (1.6 if fx == "sparkles" else 1)
        d.ellipse((x - r, y - r, x + r, y + r), fill=col + (a,))
    ov = ov.filter(ImageFilter.GaussianBlur(1.2))
    return Image.alpha_composite(frame.convert("RGBA"), ov).convert("RGB")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("scene"); ap.add_argument("out")
    ap.add_argument("--debug-frame", type=float, default=None, help="render one PNG at time T instead of a video")
    a = ap.parse_args()
    sc = json.load(open(a.scene))
    base = os.path.dirname(os.path.abspath(a.scene))
    W, H = sc.get("size", [1920, 1080]); fps = sc.get("fps", 30); secs = sc["seconds"]
    ground = sc.get("ground", 0.95) * H
    # background, oversized for the camera move
    cam = sc.get("camera", {"move": "in", "amount": 0.06}); amt = cam.get("amount", 0.06)
    bg = Image.open(os.path.join(base, sc["background"])).convert("RGB")
    r = max(W / bg.width, H / bg.height)
    bg = bg.resize((int(bg.width * r) + 1, int(bg.height * r) + 1), Image.LANCZOS)
    bg = bg.crop(((bg.width - W) // 2, (bg.height - H) // 2, (bg.width - W) // 2 + W, (bg.height - H) // 2 + H))
    actors = []
    for spec in sc["actors"]:
        spec["_fps"] = fps; spec["_seconds"] = secs
        actors.append(Actor(spec, base, H))
    rng = np.random.default_rng(5)
    P = particles(W, H, 70, rng)
    vig = None

    def frame_at(t, fi):
        fr = bg.copy()
        # subtle light breathing on the background
        fr = ImageEnhance.Brightness(fr).enhance(1 + 0.03 * math.sin(2 * math.pi * 0.2 * t))
        fr = fr.convert("RGBA")
        # draw far-to-near: smaller scale first
        order = sorted(actors, key=lambda ac: keyed(ac.s["path"], t, "scale", 1.0))
        for ac in order:
            s = ac.s
            x = keyed(s["path"], t, "x", 0.5) * W
            scale = keyed(s["path"], t, "scale", 1.0)
            yoff = 0; sway = 0
            wk = s.get("walk")
            if wk and t < wk.get("until", 1e9):
                ph = 2 * math.pi * wk.get("steps", 1.8) * t
                yoff = -wk.get("bob", 0.012) * H * abs(math.sin(ph / 2))
                sway = wk.get("sway", 2.0) * math.sin(ph / 2)
            # whole-body tilt about the feet: keyed "tilt" + periodic "wiggle" (a cat rubbing, a sway of joy)
            sway += keyed(s.get("tilt", []), t)
            wg = s.get("wiggle")
            if wg and wg.get("from", 0) <= t <= wg.get("to", 1e9):
                fade = min(1, (t - wg.get("from", 0)) / 0.6, (wg.get("to", 1e9) - t) / 0.6)
                sway += wg.get("amp", 5) * fade * math.sin(2 * math.pi * wg.get("hz", 0.8) * t)
            layer = ac.render(t, fi)
            if abs(sway) > 0.01:
                layer = rotate_about(layer, sway, (ac.w / 2, ac.h))
            th = int(ac.h * scale / 1.05); tw = int(ac.w * scale / 1.05)   # canvas incl. padding; figure = height*H*scale
            layer = layer.resize((max(tw, 1), max(th, 1)), Image.LANCZOS)
            gy = ground + s.get("ground_offset", 0) * H
            # contact shadow first, then the figure on top of it
            sh = Image.new("RGBA", fr.size, (0, 0, 0, 0)); d = ImageDraw.Draw(sh)
            fw = ac.w0 * scale / 1.05
            d.ellipse((x - fw * 0.42, gy - th * 0.022, x + fw * 0.42, gy + th * 0.022), fill=(0, 0, 0, 90))
            fr.alpha_composite(sh.filter(ImageFilter.GaussianBlur(12)))
            fr.alpha_composite(layer, (int(x - tw / 2), int(gy - th + yoff)))
            if a.debug_frame is not None:  # rig markers
                d = ImageDraw.Draw(fr); k = scale / 1.05; ox, oy = x - tw / 2, gy - th + yoff
                pts = [ac.mouth, ac.neck_pivot] + (list(ac.eyes) if ac.eyes else []) + ([ac.waist_pivot] if ac.waist_y else [])
                for (px_, py_) in pts:
                    d.ellipse((ox + px_ * k - 5, oy + py_ * k - 5, ox + px_ * k + 5, oy + py_ * k + 5), outline=(255, 0, 0), width=2)
        fr = fr.convert("RGB")
        fr = draw_particles(fr, P, t, sc.get("fx", "dust"))
        # camera: eased push-in / out / pan
        u = ease(min(t / secs, 1))
        z = 1 + amt * (u if cam.get("move", "in") == "in" else (1 - u) if cam.get("move") == "out" else 0.5)
        cw, ch = int(W / z), int(H / z)
        cx = (W - cw) // 2 + (int((W - cw) * (u - 0.5)) if cam.get("move") in ("left", "right") else 0)
        fr = fr.crop((cx, (H - ch) // 2, cx + cw, (H - ch) // 2 + ch)).resize((W, H), Image.LANCZOS)
        return fr

    if a.debug_frame is not None:
        f = frame_at(a.debug_frame, int(a.debug_frame * fps))
        # mark rig points
        d = ImageDraw.Draw(f)
        f.save(a.out); print("debug frame ->", a.out); return

    # ---- audio: silence + mixed tracks
    n = int(secs * AR); mix = np.zeros(n, np.float32)
    tracks = list(sc.get("audio", []))
    for ac in actors:
        if "talk" in ac.s:
            tracks.append({"file": ac.s["talk"]["audio"], "at": ac.s["talk"].get("at", 0)})
    for tr in tracks:
        raw = subprocess.run(["ffmpeg", "-v", "error", "-i", os.path.join(base, tr["file"]), "-ac", "1", "-ar", str(AR), "-f", "f32le", "-"],
                             capture_output=True, check=True).stdout
        x = np.frombuffer(raw, np.float32) * tr.get("gain", 1.0)
        i = int(tr["at"] * AR); L = min(len(x), n - i)
        if L > 0:
            mix[i:i + L] += x[:L]
    mix = np.clip(mix, -1, 1)
    wav = a.out + ".wav"
    import soundfile as sf
    sf.write(wav, mix, AR)

    total = int(secs * fps)
    cmd = ["ffmpeg", "-y", "-v", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(fps), "-i", "-",
           "-i", wav, "-c:v", "libx264", "-preset", "veryfast", "-crf", "16", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k", "-shortest", a.out]
    p = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    for fi in range(total):
        p.stdin.write(frame_at(fi / fps, fi).tobytes())
        if fi % (fps * 2) == 0:
            print(f"  {fi}/{total}", flush=True)
    p.stdin.close(); p.wait()
    os.remove(wav)
    print("->", a.out)


if __name__ == "__main__":
    main()
