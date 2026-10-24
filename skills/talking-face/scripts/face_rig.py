#!/usr/bin/env python3
"""Front-view talking close-up rig (Live2D-style, 2D anime), built from ONE still portrait.

Why: SadTalker warps the whole 256-px face crop (background included) -> blurry face, hazy halo of
background around the hair, smeared teeth, rubbery nose/jaw. This rig never re-synthesises pixels:
  * the original painting is moved by smooth skinning weights (head / neck blend / body / hair tips),
    so identity, nose, eyes, line work and shading stay exactly the drawing's;
  * the hair cut-out is matted ONCE from the still (stable edge, no flicker) over a clean background plate;
  * the mouth uses drawn viseme shapes driven by PHONEME timings (forced alignment), with jaw drop,
    cheek raise and coarticulation smoothing; silence returns to the drawn rest mouth;
  * blinks/brows/gaze/head/shoulders follow a per-line performance plan (keys), with lagged hair tips
    and delayed shoulders, breathing, and deliberate stillness.

usage: face_rig.py rig.json perf.json out.mp4 [--debug-frame T]
"""
import sys, json, math, os, subprocess, numpy as np, cv2
from PIL import Image

def ease(u): u = min(max(u, 0.0), 1.0); return u * u * (3 - 2 * u)

def keyed(keys, t, default=0.0):
    if not keys: return default
    k = sorted(keys, key=lambda z: z[0])
    if t <= k[0][0]: return k[0][1]
    for a, b in zip(k, k[1:]):
        if t <= b[0]: return a[1] + (b[1] - a[1]) * ease((t - a[0]) / max(b[0] - a[0], 1e-6))
    return k[-1][1]

def bump(t, t0, dur, amp):          # smooth up-and-back gesture
    u = (t - t0) / dur
    return amp * math.sin(math.pi * u) ** 2 if 0 <= u <= 1 else 0.0

# ---------------------------------------------------------------- visemes (ARPAbet -> mouth parameters)
#            open(px @1760)  width(frac)  round  teeth  tongue  smile
V = {"A":   (29, 0.80, 0.25, 0.30, 0.45, 0.2),
     "E":   (14, 0.92, 0.00, 0.65, 0.10, 0.6),
     "I":   (10,  0.88, 0.00, 0.75, 0.05, 0.7),
     "O":   (25, 0.52, 0.85, 0.15, 0.20, 0.0),
     "U":   (13, 0.40, 1.00, 0.05, 0.05, 0.0),
     "R":   (13, 0.60, 0.60, 0.30, 0.15, 0.1),
     "F":   (4,  0.80, 0.00, 1.00, 0.00, 0.3),
     "L":   (17, 0.78, 0.10, 0.45, 0.70, 0.3),
     "S":   (5,  0.86, 0.00, 0.95, 0.00, 0.5),
     "K":   (16, 0.74, 0.10, 0.35, 0.35, 0.2),
     "M":   (0,  0.95, 0.00, 0.00, 0.00, 0.2),
     "rest": (0, 1.00, 0.00, 0.00, 0.00, 0.3)}
PH = {"AA": "A", "AE": "A", "AH": "A", "AY": "A", "AW": "A", "EH": "E", "EY": "E", "IH": "I", "IY": "I", "Y": "I",
      "AO": "O", "OW": "O", "OY": "O", "UW": "U", "UH": "U", "W": "U", "ER": "R", "R": "R", "M": "M", "B": "M", "P": "M",
      "F": "F", "V": "F", "TH": "L", "DH": "L", "L": "L", "N": "L", "T": "L", "D": "L", "S": "S", "Z": "S", "SH": "S",
      "ZH": "S", "CH": "S", "JH": "S", "K": "K", "G": "K", "NG": "K", "HH": "K"}

def viseme_track(phones, fps, n, offset=0.0, lead=0.035, tau=0.045):
    """Per-frame mouth parameters: target shape per phone (lips lead the sound slightly), smoothed by a
    critically-damped follow (coarticulation), rest in silence."""
    tgt = []
    for i in range(n):
        t = i / fps - offset + lead; v = "rest"
        for p in phones:
            if p["t0"] <= t < p["t1"]: v = PH.get(p["p"], "K"); break
        tgt.append(np.array(V[v], float))
    out = []; cur = np.array(V["rest"], float); vel = np.zeros_like(cur); dt = 1 / fps; w = 1 / tau
    for g in tgt:                                   # critically damped spring toward the target shape
        acc = w * w * (g - cur) - 2 * w * vel; vel += acc * dt; cur = cur + vel * dt
        out.append(np.clip(cur, [0, 0.3, 0, 0, 0, 0], [40, 1.1, 1, 1, 1, 1]))
    return out

# ---------------------------------------------------------------- rig
class FaceRig:
    def __init__(self, path):
        R = json.load(open(path)); base = os.path.dirname(os.path.abspath(path)); self.R = R
        im = np.asarray(Image.open(os.path.join(base, R["image"])).convert("RGBA")).astype(np.float32)
        self.img = im; H, W = im.shape[:2]; self.H, self.W = H, W
        yy, xx = np.mgrid[0:H, 0:W].astype(np.float32); self.xx, self.yy = xx, yy
        a = im[..., 3] / 255
        # hair mask (colour) limited to the head zone; cardigan/dress excluded by height + hue
        hsv = cv2.cvtColor(np.clip(im[..., :3], 0, 255).astype(np.uint8), cv2.COLOR_RGB2HSV).astype(np.float32)
        hue, sat, val = hsv[..., 0] * 2, hsv[..., 1] / 255, hsv[..., 2] / 255
        hy = R["hair_until"]
        hair = (hue < 36) & (sat > 0.3) & (val < 0.8) & (a > 0.4) & ((yy < hy - 80) | ((yy < hy) & (hue < 31) & (val < 0.7)))
        hair = cv2.morphologyEx(hair.astype(np.uint8), cv2.MORPH_CLOSE, np.ones((15, 15))).astype(np.float32)
        self.hair = cv2.GaussianBlur(hair, (0, 0), 6)
        # head weight: everything above the chin line; below it, the neck column fades into the body; hair stays head
        nx, nh = R["neck_x"], R["neck_half"]; f0, f1 = R["neck_fade"]
        col = np.clip((np.abs(xx - nx) - nh) / 40, 0, 1)                       # 0 inside the neck column
        neck_w = np.clip((f1 - yy) / (f1 - f0), 0, 1) * (1 - col)
        above = np.clip((R["chin_y"] + 10 - yy) / 20, 0, 1)
        self.w_head = np.clip(np.maximum(np.maximum(above, neck_w), self.hair * (yy >= R["chin_y"])), 0, 1)
        self.w_head = cv2.GaussianBlur(self.w_head, (0, 0), 8)
        # hair tips: hair far from the head centre (outer curls, ends on the shoulders)
        hc = np.array(R["head_center"], np.float32)
        dist = np.hypot(xx - hc[0], (yy - hc[1]) * 0.9)
        self.w_tip = cv2.GaussianBlur(self.hair * np.clip((dist - R.get("tip_r0", 230)) / 160, 0, 1), (0, 0), 10)
        # local deformers
        def gauss(c, rx, ry): return np.exp(-(((xx - c[0]) / rx) ** 2 + ((yy - c[1]) / ry) ** 2))
        J = R["jaw"]; m = R["mouth"]
        below = np.clip((yy - (m["c"][1] + 6)) / 14, 0, 1)                      # only under the mouth line
        self.w_jaw = gauss(J["c"], J["rx"], J["ry"]) * below
        self.w_cheek = sum(gauss(c, 55, 40) for c in R["cheeks"])
        self.w_brow = sum(gauss(c, 75, 32) for c in R["brows"])
        self.w_brow_l, self.w_brow_r = gauss(R["brows"][0], 75, 32), gauss(R["brows"][1], 75, 32)
        mc, mw, ma = m["c"], m["w"], math.radians(m["angle"])
        c1 = (mc[0] - mw / 2 * math.cos(ma), mc[1] - mw / 2 * math.sin(ma)); c2 = (mc[0] + mw / 2 * math.cos(ma), mc[1] + mw / 2 * math.sin(ma))
        self.w_corner = gauss(c1, 20, 16) + gauss(c2, 20, 16)                  # mouth corners (smile lift)
        nose = R.get("nose", [875, 440])                                        # protrusion for the head turn
        self.depth = 1.0 * gauss(nose, 45, 55) + 0.35 * gauss(mc, 60, 40) + 0.15 * sum(gauss(e["c"], 55, 40) for e in R["eyes"])
        self.head_axis = R["head_center"][0]; self.Rh = R.get("head_radius", 380); self.Rb = R.get("body_radius", 560)
        # colours sampled from the drawing
        def sample(x0, y0, x1, y1): return np.median(im[y0:y1, x0:x1, :3].reshape(-1, 3), 0)
        self.skin = []
        for e in R["eyes"]:                   # lid colour = median skin in a ring around the eye (no lashes, brows, blush)
            cx, cy, rx, ry = e["c"][0], e["c"][1], e["rx"], e["ry"]
            x0, y0, x1, y1 = int(cx - rx - 30), int(cy - ry - 30), int(cx + rx + 30), int(cy + ry + 30)
            reg = im[y0:y1, x0:x1, :3].reshape(-1, 3); gy, gx = np.mgrid[y0:y1, x0:x1]
            d = (((gx - cx) / (rx + 8)) ** 2 + ((gy - cy) / (ry + 8)) ** 2).reshape(-1)
            ring = (d > 1.0) & (d < 2.2) & (reg.mean(1) > 140)
            px = reg[ring]; lum = px.mean(1); px = px[lum >= np.percentile(lum, 40)]     # skin, not lashes/brows/hair
            self.skin.append(np.median(px, 0) * 0.97)
        self.lip = np.array(m.get("lip", [205, 115, 105]), np.float32)

    # ---- drawing on the source (before the warp, so everything rides with the head)
    def draw_eyes(self, src, blink, gaze):
        for e, skin in zip(self.R["eyes"], self.skin):
            cx, cy = e["c"]; rx, ry = e["rx"], e["ry"]; tilt = e.get("tilt", 0)
            if abs(gaze[0]) + abs(gaze[1]) > 0.3:
                x0, y0, x1, y1 = int(cx - rx - 8), int(cy - ry - 8), int(cx + rx + 8), int(cy + ry + 8)
                patch = src[y0:y1, x0:x1].copy()
                M = np.float32([[1, 0, gaze[0]], [0, 1, gaze[1]]])
                sh = cv2.warpAffine(patch, M, (x1 - x0, y1 - y0), borderMode=cv2.BORDER_REPLICATE)
                mk = np.zeros(patch.shape[:2], np.float32)
                cv2.ellipse(mk, (int(cx - x0), int(cy - y0)), (int(rx * 0.72), int(ry * 0.78)), tilt, 0, 360, 1, -1)
                mk = cv2.GaussianBlur(mk, (0, 0), 2.5)[..., None]
                src[y0:y1, x0:x1] = sh * mk + patch * (1 - mk)
            if blink > 0.02:
                self._blink(src, e, blink)

    def _blink(self, src, e, c):
        """Close the PAINTED lid: the band of skin above the eye, including its drawn upper lashes, is stretched
        down over the eye to the lid edge y_e = top + c*(bottom-top). Texture, shading and lashes stay the drawing's."""
        cx, cy = e["c"]; rx, ry = e["rx"] + 6, e["ry"]; t = math.radians(e.get("tilt", 0)); band = e.get("lid_band", 20)
        ct, st = math.cos(t), math.sin(t)
        x0, y0, x1, y1 = int(cx - rx - 12), int(cy - ry - 60), int(cx + rx + 12), int(cy + ry + 14)
        Y, X = np.mgrid[y0:y1, x0:x1].astype(np.float32)
        U = (X - cx) * ct + (Y - cy) * st; Vv = -(X - cx) * st + (Y - cy) * ct
        q = np.sqrt(np.clip(1 - (U / rx) ** 2, 0, 1))
        top = -(ry + 3) * q; bot = (ry + 4) * q
        ye = top + c * (bot - top)
        lo = top - band
        Lh = e.get("lash_h", 20); Sb = e.get("skin_band", 18)                   # lash cluster height, clean-skin band above it
        lo = top - Lh - Sb
        zone = (Vv >= lo) & (Vv <= ye) & (q > 0)
        skin_zone = Vv < ye - Lh
        sv_skin = lo + (Vv - lo) * Sb / np.maximum(ye - Lh - lo, 1e-3)          # clean skin stretched over the eye
        sv_lash = Vv - (ye - top)                                               # lashes slide down unchanged
        sv = np.where(zone, np.where(skin_zone, sv_skin, sv_lash), Vv)
        fade = np.clip((rx - np.abs(U)) / 8, 0, 1)                              # soft at the eye corners
        sv = Vv + (sv - Vv) * fade
        SX = cx + U * ct - sv * st - x0; SY = cy + U * st + sv * ct - y0
        reg = src[y0:y1, x0:x1].copy()
        src[y0:y1, x0:x1] = cv2.remap(reg, SX.astype(np.float32), SY.astype(np.float32), cv2.INTER_CUBIC, borderMode=cv2.BORDER_REFLECT)

    def draw_mouth(self, src, p):
        """Open the PAINTED mouth: everything below the lip line (lower lip, chin) is displaced down along the
        mouth axis by the viseme's opening profile; corners pucker inward for round shapes; the upper lip lifts a
        little for teeth. Only the revealed gap is painted (interior, upper teeth, tongue), so the lips stay the
        drawing's own pixels."""
        o, wf, rnd, teeth, tongue, smile = p
        if o < 0.8: return
        m = self.R["mouth"]; cx, cy = m["c"]; W0 = m["w"]; ang = math.radians(m["angle"])
        ca, sa = math.cos(ang), math.sin(ang)
        x0, x1 = int(cx - W0 * 0.95), int(cx + W0 * 0.95); y0, y1 = int(cy - 40), int(cy + 150)
        reg = src[y0:y1, x0:x1].copy()
        SS = 3                                                                  # supersample: clean anti-aliased edges
        X, Y = np.meshgrid(np.arange(x0, x1, 1 / SS, dtype=np.float32), np.arange(y0, y1, 1 / SS, dtype=np.float32))
        U = (X - cx) * ca + (Y - cy) * sa; Vv = -(X - cx) * sa + (Y - cy) * ca + m.get("line_curve", 2.0) * (1 - (2 * U / W0) ** 2).clip(0)
        Wm = W0 * wf; pw = 2.0 + 3.0 * (1 - rnd)
        prof = np.clip(1 - np.abs(2 * U / Wm) ** pw, 0, 1) ** (0.55 + 0.35 * rnd)
        openv = o * prof
        g = np.where(Vv < 16, 1.0, np.clip(1 - (Vv - 16) / 130 * 0.85, 0.15, 1.0))     # lower lip moves fully, chin ~0.6
        side = np.clip(1 - (np.abs(U) - W0 * 0.5) / (W0 * 0.45), 0, 1)                  # fade out beyond the corners
        d = openv * g * side + 0.55 * o * np.exp(-(U / (W0 * 0.7)) ** 2) * (Vv > 0) * np.clip(Vv / 40, 0, 1) * (1 - prof) * side
        lift = 2.2 * teeth * np.clip(1 - (2 * U / W0) ** 2, 0, 1) * (Vv < 0) * np.clip(1 + Vv / 14, 0, 1) * (o > 4)
        pucker = rnd * 0.22 * np.exp(-(Vv / 30) ** 2) * side
        su = U * (1 + pucker); sv = np.where(Vv >= 0, Vv - d, Vv + lift)
        inside = (Vv >= 0) & (sv < 0) & (np.abs(U) < Wm / 2)
        if o < 2.5: inside &= False
        # back to image coords (relative to the region)
        SX = cx + su * ca - (sv - m.get("line_curve", 2.0) * (1 - (2 * su / W0) ** 2).clip(0)) * sa - x0
        SY = cy + su * sa + (sv - m.get("line_curve", 2.0) * (1 - (2 * su / W0) ** 2).clip(0)) * ca - y0
        moved = cv2.remap(reg, SX.astype(np.float32), SY.astype(np.float32), cv2.INTER_CUBIC, borderMode=cv2.BORDER_REFLECT)
        # mouth interior: depth = how far into the gap (0 at the upper lip line, 1 at the lower lip)
        depth = np.clip(Vv / np.maximum(openv, 1e-3), 0, 1)
        inter = np.zeros(U.shape + (3,), np.float32) + np.array([72, 26, 32], np.float32)
        inter += (1 - np.abs(2 * U / Wm)).clip(0)[..., None] * np.array([18, 6, 6], np.float32)        # a little light in the middle
        th = min(2.0 + 8.0 * teeth, o * 0.55)
        tw = Wm * 0.36
        tooth = (Vv >= 0) & (Vv < th * (1 - (U / tw) ** 4).clip(0)) & (np.abs(U) < tw)
        tcol = np.array([242, 233, 217], np.float32) * (0.93 + 0.07 * np.clip(Vv / max(th, 1), 0, 1))[..., None] * (1 - 0.15 * (U / tw) ** 2)[..., None]
        if teeth > 0.05: inter = np.where(tooth[..., None], tcol, inter)
        if tongue > 0.05 and o > 7:
            tg = ((U / (Wm * 0.30)) ** 2 + ((Vv - openv * 0.95) / max(o * 0.45 * tongue + 1, 1)) ** 2) < 1
            inter = np.where((tg & ~tooth)[..., None], np.array([186, 92, 94], np.float32), inter)
        im = cv2.GaussianBlur(inside.astype(np.float32), (0, 0), 0.8 * SS)[..., None]
        inter = cv2.GaussianBlur(inter, (0, 0), 0.6 * SS)
        out = moved.copy(); out[..., :3] = moved[..., :3] * (1 - im) + inter * im
        sh = (np.exp(-(Vv / 3.0) ** 2) * inside)[..., None]                      # soft shadow under the upper lip
        out[..., :3] *= (1 - 0.35 * sh)
        src[y0:y1, x0:x1] = cv2.resize(out, (x1 - x0, y1 - y0), interpolation=cv2.INTER_AREA)

    # ---- skinning warp (inverse map)
    def warp(self, src, head, head_lag, body, jaw, cheek, brow, corner=0.0, brow_lr=(1.0, 1.0)):
        """Inverse map: destination -> source. Each transform T = (roll_deg, dx, dy, pivot, sy, yaw_deg).
        Yaw = turn on a cylinder around the head axis (near side widens, far side narrows) + nose/mouth protrusion."""
        def inv(T, radius, axis, protrude):
            ang, dx, dy, (px, py), sy, yaw = T
            c, s_ = math.cos(math.radians(-ang)), math.sin(math.radians(-ang))
            X = self.xx - px - dx; Y = (self.yy - py - dy) / sy
            xl = c * X - s_ * Y; yl = s_ * X + c * Y
            if abs(yaw) > 0.05:
                th = math.radians(yaw); ax = axis - px
                u = np.clip((xl - ax) / radius, -0.999, 0.999)
                us = np.sin(np.arcsin(u) - th)
                xs = ax + radius * us + (xl - ax - radius * u)                      # (residual beyond the cylinder)
                if protrude:
                    d = cv2.remap(self.depth, (xl + px).astype(np.float32), (yl + py).astype(np.float32), cv2.INTER_LINEAR)
                    xs = xs - d * radius * 0.20 * math.sin(th)
                xl = xs
            return xl + px, yl + py
        hx, hy = inv(head, self.Rh, self.head_axis, True); lx, ly = inv(head_lag, self.Rh, self.head_axis, False)
        bx, by = inv(body, self.Rb, self.head_axis, False)
        wt = self.w_tip; wh = self.w_head
        Hx = hx * (1 - wt) + lx * wt; Hy = hy * (1 - wt) + ly * wt
        mx = Hx * wh + bx * (1 - wh); my = Hy * wh + by * (1 - wh)
        my = my - jaw * self.w_jaw + cheek * self.w_cheek + brow * (brow_lr[0] * self.w_brow_l + brow_lr[1] * self.w_brow_r) + corner * self.w_corner
        mx, my = mx.astype(np.float32), my.astype(np.float32)
        out = cv2.remap(src, mx, my, cv2.INTER_CUBIC, borderMode=cv2.BORDER_CONSTANT)
        whd = cv2.remap(self.w_head, mx, my, cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT)
        return out, whd

    def light(self, img, whd, head, body, L):
        """Directional key light (sun side) + cool fill, on cylinder normals in DESTINATION space (so shading stays
        with the light while the features move under it), + contact shadow of head/hair onto neck, collar, shoulders."""
        if not L: return img
        lx = L.get("dir_x", 1.0); k = L.get("key", 0.10); f = L.get("fill_cool", 0.04)
        ang, dx, dy, (px, py), sy, yaw = head
        hcx = self.head_axis + dx; hcy = self.R["head_center"][1] + dy
        nh = np.clip((self.xx - hcx) / self.Rh, -1, 1)
        nv = np.clip((self.yy - hcy) / (self.Rh * 1.1), -1, 1)
        nb = np.clip((self.xx - (self.head_axis + body[1])) / self.Rb, -1, 1)
        n = nh * whd + nb * (1 - whd)
        lam = np.clip(n * lx * 0.8 - nv * 0.25 * whd, -1, 1)                   # light from the side and a little above
        warm = np.array(L.get("warm", [1.05, 1.0, 0.93]), np.float32); cool = np.array(L.get("cool", [0.95, 0.97, 1.03]), np.float32)
        gain = 1 + k * lam
        tint = np.where(lam[..., None] > 0, 1 + (warm - 1) * lam[..., None], 1 + (cool - 1) * (-lam[..., None]) * (f / 0.04))
        a = img[..., 3:4] / 255
        out = img.copy(); out[..., :3] = img[..., :3] * (gain[..., None] * tint * a + (1 - a))
        # contact shadow: the head (face + hair) shadow falls away from the light onto the body
        caster = (whd > 0.85).astype(np.float32) * a[..., 0]
        sh = np.roll(np.roll(caster, int(L.get("shadow_dy", 16)), 0), int(-lx * L.get("shadow_dx", 10)), 1)
        sh = cv2.GaussianBlur(sh, (0, 0), L.get("shadow_blur", 9)) * np.clip(1 - whd / 0.7, 0, 1) * a[..., 0]
        out[..., :3] *= (1 - L.get("shadow", 0.32) * sh)[..., None]
        return out

# ---------------------------------------------------------------- render
def render(rig_path, perf_path, out, debug_t=None):
    P = json.load(open(perf_path)); base = os.path.dirname(os.path.abspath(perf_path))
    rig = FaceRig(rig_path); R = rig.R
    W, H = P.get("size", [1920, 1080]); fps = P.get("fps", 30); dur = P["seconds"]; N = int(dur * fps)
    phones = json.load(open(os.path.join(base, P["phones"]))); voff = P.get("voice_at", 0.0)
    track = viseme_track(phones, fps, N, offset=voff)
    # background plate: painting crop, upscaled, gently defocused
    bgimg = cv2.cvtColor(cv2.imread(os.path.join(base, P["background"])), cv2.COLOR_BGR2RGB)
    bx0, by0, bx1, by1 = P["bg_crop"]; crop = bgimg[by0:by1, bx0:bx1]
    sr = cv2.dnn_superres.DnnSuperResImpl_create(); sr.readModel('/root/srmodels/FSRCNN_x4.pb'); sr.setModel('fsrcnn', 4)
    plate = sr.upsample(crop[:, :, ::-1])[:, :, ::-1]
    plate = cv2.resize(plate, (int(W * 1.1), int(H * 1.1)), interpolation=cv2.INTER_AREA).astype(np.float32)
    plate = cv2.GaussianBlur(plate, (0, 0), P.get("bg_blur", 2.5))
    sc = P["char_scale"]; cx_out, top_out = P["char_pos"]                      # bust scale and where its top-left lands
    pivot = R["pivot"]; body_pivot = [R["neck_x"], rig.H]
    rim = P.get("rim", {"strength": 0.35, "dx": 6, "dy": -2})
    ff = None
    if debug_t is None:
        ff = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(fps), "-i", "-",
                               "-c:v", "libx264", "-crf", "16", "-preset", "medium", "-pix_fmt", "yuv420p", out + ".v.mp4"], stdin=subprocess.PIPE)
    frames = [int(debug_t * fps)] if debug_t is not None else range(N)
    def head_T(t):
        roll = keyed(P.get("roll", []), t) + sum(bump(t, g["t"], g.get("d", 0.45), g.get("roll", 0)) for g in P.get("gestures", []))
        nod = keyed(P.get("nod", []), t) + sum(bump(t, g["t"], g.get("d", 0.45), g.get("nod", 0)) for g in P.get("gestures", []))
        dxh = keyed(P.get("head_dx", []), t)
        yaw = keyed(P.get("yaw", []), t) + sum(bump(t, g["t"], g.get("d", 0.45), g.get("yaw", 0)) for g in P.get("gestures", []))
        return (roll, dxh + 0.9 * yaw, nod, pivot, 1.0 - 0.0015 * nod, yaw)
    for i in frames:
        t = i / fps
        hT = head_T(t); lag = head_T(t - P.get("hair_lag", 0.14))
        sway = 1.6 * math.sin(2 * math.pi * t * 0.37)                           # breeze on the curls
        lagT = (lag[0], lag[1] + sway, lag[2], lag[3], lag[4], lag[5])
        breath = 0.5 + 0.5 * math.sin(2 * math.pi * t / P.get("breath_period", 3.4))
        inhale = sum(bump(t, b, 0.5, 1.0) for b in P.get("inhales", []))
        hd = head_T(t - 0.22)
        sh_roll = 0.22 * hd[0]                                                  # shoulders answer the head, later and smaller
        bT = (sh_roll, 0.25 * hd[1], -1.2 * breath - 2.5 * inhale, body_pivot, 1.0 + 0.0025 * breath + 0.004 * inhale, 0.25 * hd[5])
        mp = track[min(i, len(track) - 1)]
        bl = 0.0
        for b in P.get("blinks", []):
            k = int(round((t - b) * fps))
            if 0 <= k < 4: bl = [0.5, 1.0, 1.0, 0.5][k]
        gaze = (keyed(P.get("gaze_x", []), t), keyed(P.get("gaze_y", []), t))
        brow = keyed(P.get("brow", []), t) + sum(bump(t, g["t"], g.get("d", 0.6), g.get("brow", 0)) for g in P.get("gestures", []))
        cheek = keyed(P.get("cheek", []), t) + 3.0 * mp[5] * min(mp[0] / 10, 1)
        src = rig.img.copy()
        rig.draw_eyes(src, bl, gaze)
        rig.draw_mouth(src, mp)
        corner = keyed(P.get("smile", []), t) + sum(bump(t, g["t"], g.get("d", 0.6), g.get("smile", 0)) for g in P.get("gestures", []))
        asym = keyed(P.get("brow_asym", []), t, 0.0)                            # + = left brow higher
        warped, whd = rig.warp(src, hT, lagT, bT, jaw=0.0, cheek=cheek, brow=brow, corner=corner,
                               brow_lr=(1.0 + 0.25 * asym, 1.0 - 0.25 * asym))
        warped = rig.light(warped, whd, hT, bT, P.get("light"))
        # composite: camera push-in on the plate and character together
        zoom = 1.0 + P.get("push", 0.03) * ease(t / dur)
        small = cv2.resize(warped, (int(rig.W * sc * zoom), int(rig.H * sc * zoom)), interpolation=cv2.INTER_AREA)
        if rim:
            al = small[..., 3] / 255; sh_a = np.roll(np.roll(al, -rim["dx"], 1), -rim["dy"], 0)
            edge = cv2.GaussianBlur(np.clip(al - sh_a, 0, 1), (5, 5), 0) * al
            small[..., :3] += edge[..., None] * np.array([255, 200, 130], np.float32) * rim["strength"]
        pw, ph_ = plate.shape[1], plate.shape[0]
        fx0 = int((pw - W) / 2 + (zoom - 1) * W * 0.3); fy0 = int((ph_ - H) / 2)
        pz = cv2.resize(plate, (int(pw * zoom), int(ph_ * zoom)), interpolation=cv2.INTER_LINEAR)
        frame = pz[fy0:fy0 + H, fx0:fx0 + W].copy()
        ox = int(cx_out * W - small.shape[1] / 2); oy = int(top_out * H - (zoom - 1) * H * 0.35)
        X0, Y0 = max(ox, 0), max(oy, 0); X1, Y1 = min(ox + small.shape[1], W), min(oy + small.shape[0], H)
        pc = small[Y0 - oy:Y1 - oy, X0 - ox:X1 - ox]; a = pc[..., 3:4] / 255
        frame[Y0:Y1, X0:X1] = pc[..., :3] * np.array(P.get("grade", [1.03, 1.0, 0.96]), np.float32) * a + frame[Y0:Y1, X0:X1] * (1 - a)
        img = np.clip(frame, 0, 255).astype(np.uint8)
        if debug_t is not None:
            Image.fromarray(img).save(out); return
        ff.stdin.write(img.tobytes())
    ff.stdin.close(); ff.wait()
    voice = os.path.join(base, P["voice"])
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", out + ".v.mp4", "-itsoffset", str(voff), "-i", voice,
                    "-map", "0:v", "-map", "1:a", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-af", f"apad=whole_dur={dur}", "-t", str(dur), out], check=True)
    os.remove(out + ".v.mp4"); print("wrote", out, N, "frames")

if __name__ == "__main__":
    dbg = None
    if "--debug-frame" in sys.argv: dbg = float(sys.argv[sys.argv.index("--debug-frame") + 1])
    render(sys.argv[1], sys.argv[2], sys.argv[3], dbg)
