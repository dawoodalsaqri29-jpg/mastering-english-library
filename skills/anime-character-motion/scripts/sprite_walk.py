#!/usr/bin/env python3
"""Side-view skeletal walk from ONE side-view drawing (anime / cut-out studio style).

The drawing is split into pieces: body (head+torso+skirt+near arm), far arm, thigh, shin(+sock), boot.
Legs are driven by a real walk cycle (heel strike -> flat -> heel rise -> toe-off -> swing) and
2-bone IK; planted feet are fixed in world space, so feet never slide. Hip dips at contact and rises
at passing, the far arm swings opposite to the near leg, eyes blink, the mouth opens to a voice.

usage: sprite_walk.py rig.json scene.json out.mp4      (scene format in SKILL.md)
       sprite_walk.py rig.json --poses strip.png        (debug: 8 phases of one cycle)
"""
import sys, json, math, os, subprocess, numpy as np, cv2
from PIL import Image

def poly_mask(shape, pts):
    m = np.zeros(shape[:2], np.uint8); cv2.fillPoly(m, [np.int32(pts)], 1); return m.astype(bool)

def interp_line(pts, xs):
    p = np.array(pts, float); return np.interp(xs, p[:, 0], p[:, 1])

def rot_mat(theta, pivot_src, pivot_dst, scale=1.0):
    c, s = math.cos(theta) * scale, math.sin(theta) * scale
    px, py = pivot_src; qx, qy = pivot_dst
    return np.array([[c, -s, qx - (c * px - s * py)], [s, c, qy - (s * px + c * py)]], np.float32)

class Rig:
    def __init__(self, path):
        R = json.load(open(path)); base = os.path.dirname(os.path.abspath(path)); self.R = R
        img = np.asarray(Image.open(os.path.join(base, R["frame"])).convert("RGBA")).astype(np.float32)
        H, W = img.shape[:2]; self.H, self.W = H, W
        a = img[..., 3] / 255.0
        yy, xx = np.mgrid[0:H, 0:W]
        hem = interp_line(R["hem"], np.arange(W))
        below_hem = yy > hem[None, :] + 1
        # ---- far arm: right of the cut line inside arm_y band; overlap band near the shoulder only
        cut = interp_line([(p[1], p[0]) for p in R["arm_cut"]], np.arange(H))       # x of cut per row
        y0, y1 = R["arm_y"]
        band = (yy >= y0) & (yy <= y1)
        right = xx > cut[:, None]
        ext = np.clip((620 - yy) / 60.0, 0, 1) * 40                                  # 40 px under-lap, fades out by y=620
        arm_m = band & (xx > cut[:, None] - ext) & (a > 0)
        body_a = a * ~(band & right) * ~below_hem
        self.body = np.dstack([img[..., :3], body_a * 255])
        arm = np.dstack([img[..., :3], a * arm_m * 255])
        self.arm = self._crop(arm); self.shoulder = np.array(R["shoulder"], float) - self.arm_off
        # ---- shin: straighten the leg axis to vertical
        (tx, ty), (ax, ay) = R["leg_axis"]
        ang = math.atan2(ax - tx, ay - ty)                       # lean of the axis from vertical
        M = rot_mat(ang, (ax, ay), (ax, ay))                     # rotates the axis onto vertical
        leg_m = poly_mask(img.shape, R["leg_poly"]) & ~poly_mask(img.shape, R["boot_poly"]) & below_hem
        leg = np.dstack([img[..., :3], a * leg_m * 255])
        legs = cv2.warpAffine(leg, M, (W, H), flags=cv2.INTER_CUBIC)
        top = M @ np.array([tx, ty, 1]); length = ay - top[1]
        half = 62; xa = int(round(ax))
        strip = legs[int(top[1]) - 4: int(ay) + 2, xa - half: xa + half].copy()
        al = strip[..., 3]
        rows = np.where((al > 200).sum(1) > 30)[0]
        r0, r1 = rows[0] + 10, rows[-1]                          # first clean row under the hem, last sock row
        clean = strip[r0:r1 + 1]
        L2, L1 = R["L2"], R["L1"]
        cap = 46
        # shin texture: [cap rows replicated from the top row] + clean rows stretched to L2 + 30 rows tucked into the boot
        shin_body = cv2.resize(clean, (2 * half, int(L2 + 6)), interpolation=cv2.INTER_CUBIC)
        topr = np.repeat(shin_body[:1], cap, 0); botr = np.repeat(shin_body[-1:], 30, 0)
        shin = np.concatenate([topr, shin_body, botr]).astype(np.float32)
        self.shin = self._round(shin, cap, top=True); self.shin_pivot = np.array([half, cap], float)  # knee
        # thigh: the top clean row widened 8 %, replicated (hidden under the skirt most of the time)
        row = cv2.resize(clean[:6].mean(0, keepdims=True), (int(2 * half * 1.08), 1))
        thigh = np.repeat(row, int(L1 + 2 * cap), 0).astype(np.float32)
        self.thigh = self._round(self._round(thigh, cap, top=True), cap, top=False)
        self.thigh_pivot = np.array([thigh.shape[1] / 2, cap], float)                            # hip
        # ---- boot: rotate so the sole is flat, crop around the boot polygon
        (hx, hy), (ox, oy) = R["heel"], R["toe"]
        sole = math.atan2(oy - hy, ox - hx)
        Mb = rot_mat(-sole, R["ankle"], R["ankle"])
        boot = np.dstack([img[..., :3], a * poly_mask(img.shape, R["boot_poly"]) * 255])
        bw = cv2.warpAffine(boot, Mb, (W + 200, H + 100), flags=cv2.INTER_CUBIC)
        self.boot = self._crop(bw)
        self.ankle_b = np.array(R["ankle"], float) - self.arm_off   # _crop stores offset in arm_off
        heel = Mb @ np.array([hx, hy, 1]); toe = Mb @ np.array([ox, oy, 1])
        self.heel_b = heel - self.arm_off; self.toe_b = toe - self.arm_off
        self.sole_y = float(np.where(self.boot[..., 3] > 128)[0].max()) - 2   # true sole line (lowest boot pixel)
        self.ball_b = np.array([self.heel_b[0] + 0.80 * (self.toe_b[0] - self.heel_b[0]), self.sole_y])
        self.heel_b = np.array([self.heel_b[0] + 8, self.sole_y])
        self.ankle_h = self.sole_y - self.ankle_b[1]              # ankle height above the sole
        self.hip = np.array(R["hip"], float)
        self.ground = H

    def _crop(self, rgba):
        ys, xs = np.where(rgba[..., 3] > 2)
        y0, y1, x0, x1 = max(ys.min() - 4, 0), ys.max() + 5, max(xs.min() - 4, 0), xs.max() + 5
        self.arm_off = np.array([x0, y0], float)
        return rgba[y0:y1, x0:x1].copy()

    @staticmethod
    def _round(t, cap, top=True):
        h, w = t.shape[:2]; r = w / 2
        ys = np.arange(cap)[:, None]; xs = np.arange(w)[None, :]
        if top: d = np.hypot(xs - r + 0.5, (cap - ys) * (r / cap) * 1.0); sl = slice(0, cap)
        else: d = np.hypot(xs - r + 0.5, (ys + 1) * (r / cap)); sl = slice(h - cap, h)
        m = np.clip(r - d, 0, 1.5) / 1.5
        t = t.copy(); t[sl, :, 3] *= m; return t

# ---------------------------------------------------------------- compositing helpers
def paste(canvas, piece, M, tint=None):
    """Affine-warp an RGBA float piece into the float RGBA canvas (premultiplied over)."""
    H, W = canvas.shape[:2]
    h, w = piece.shape[:2]
    corners = np.array([[0, 0, 1], [w, 0, 1], [0, h, 1], [w, h, 1]], np.float32) @ M.T
    x0, y0 = np.floor(corners.min(0)).astype(int) - 2; x1, y1 = np.ceil(corners.max(0)).astype(int) + 2
    x0, y0, x1, y1 = max(x0, 0), max(y0, 0), min(x1, W), min(y1, H)
    if x1 <= x0 or y1 <= y0: return
    Ml = M.copy(); Ml[0, 2] -= x0; Ml[1, 2] -= y0
    pm = piece.copy(); pm[..., :3] *= pm[..., 3:4] / 255.0
    if tint is not None: pm[..., :3] *= np.array(tint, np.float32)
    out = cv2.warpAffine(pm, Ml, (x1 - x0, y1 - y0), flags=cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT)
    roi = canvas[y0:y1, x0:x1]; aa = out[..., 3:4] / 255.0
    roi[..., :3] = out[..., :3] + roi[..., :3] * (1 - aa)
    roi[..., 3:4] = out[..., 3:4] + roi[..., 3:4] * (1 - aa)

def ease(u): u = np.clip(u, 0, 1); return u * u * (3 - 2 * u)

# ---------------------------------------------------------------- walk cycle
class Walker:
    """Foot trajectories in character pixels; x forward (+), y down, ground = rig.ground."""
    def __init__(self, rig, stride=600, period=1.0, bob=16, lift=70, hs=14, to=22, stance=0.62, lean=2.5, arm=20):
        self.r = rig; self.S = stride; self.T = period; self.v = stride / period
        self.bob, self.lift, self.hs, self.to, self.st = bob, lift, math.radians(hs), math.radians(to), stance
        self.lean, self.arm_amp = math.radians(lean), math.radians(arm)
        self.mid = 0.27                                            # stance phase where the hip is over the ankle
        b = rig
        self.a_from_heel = np.array([b.ankle_b[0] - b.heel_b[0], b.ankle_b[1] - b.sole_y])   # ankle rel. heel (flat)
        self.a_from_ball = np.array([b.ankle_b[0] - b.ball_b[0], b.ankle_b[1] - b.sole_y])

    def foot(self, phi, xplant):
        """phi in [0,1): 0 = heel strike. Returns ankle (x,y) and foot angle (rad, + = toe up)."""
        g = self.r.ground; st = self.st
        def rot(v, a):  # visual rotation, a>0 = toe up (counter-clockwise on screen)
            c, s = math.cos(a), math.sin(a); return np.array([c * v[0] + s * v[1], -s * v[0] + c * v[1]])
        heel0 = np.array([xplant, g])
        if phi < 0.12:                                  # heel rocker: toe comes down
            a = self.hs * (1 - ease(phi / 0.12)); return heel0 + rot(self.a_from_heel, a), a
        if phi < 0.45:
            return heel0 + self.a_from_heel, 0.0
        ball = heel0 + np.array([self.r.ball_b[0] - self.r.heel_b[0], 0])
        if phi < st:                                    # heel rise about the ball
            a = -self.to * ease((phi - 0.45) / (st - 0.45)); return ball + rot(self.a_from_ball, a), a
        u = (phi - st) / (1 - st)                       # swing
        a_start = -self.to; a_end = self.hs
        start = ball + rot(self.a_from_ball, a_start)
        end_heel = np.array([xplant + self.S, g]); end = end_heel + rot(self.a_from_heel, a_end)
        k = ease(u)
        pos = start * (1 - k) + end * k
        pos[1] -= self.lift * math.sin(math.pi * min(u * 1.15, 1)) ** 1.3 * (1 - 0.25 * u)
        a = a_start + (a_end - a_start) * ease(u * 1.1)
        return pos, a

    def set_stop(self, at, close=0.55):
        """Stop at the first near-leg heel strike after `at` s, then bring the back foot beside it in `close` s."""
        k = math.ceil(at / self.T); self.t_stop = k * self.T + 0.04 * self.T; self.close = close

    def pose(self, t):
        ts = getattr(self, "t_stop", None)
        if ts is not None and t > ts:
            hip0, legs0, lean0, arm0 = self._pose(ts)
            u = ease((t - ts) / self.close)
            (aA, fA), (aB, fB) = legs0
            # A: finish the heel rocker (flat); B: closing step to stand beside A
            ankA = np.array([aA[0], self.r.ground + self.a_from_heel[1]]) if True else aA
            heelA_x = aA[0] - self.a_from_heel[0]
            target = np.array([heelA_x - 26 + self.a_from_heel[0], self.r.ground + self.a_from_heel[1]])
            pB = aB * (1 - u) + target * u; pB[1] -= self.lift * 0.6 * math.sin(math.pi * u)
            faB = fB * (1 - u); faA = fA * (1 - ease(min((t - ts) / 0.15, 1)))
            hip = np.array([hip0[0] * (1 - u) + (heelA_x + self.a_from_heel[0] - 13) * u, hip0[1] * (1 - u) + (self.r.hip[1] - self.bob * 0.3) * u])
            settle = math.exp(-(t - ts - self.close) * 4) * math.sin((t - ts - self.close) * 9) * 0.6 if t - ts > self.close else 0
            return hip, [(ankA if (t - ts) > 0.15 else aA, faA), (pB, faB)], lean0 * (1 - u) + math.radians(settle), arm0 * (1 - u)
        return self._pose(t)

    def _pose(self, t):
        """Returns hip (x,y), leg list [(ankle, angle)], body lean, far-arm angle; world x."""
        res = []
        for off in (0.0, 0.5):                          # leg A (near), leg B (far)
            tl = t / self.T - off
            k = math.floor(tl); phi = tl - k
            # plant: the hip is over the ankle at phi = mid during stance of cycle k
            t_mid = (k + off + self.mid) * self.T
            xplant = self.v * t_mid - self.a_from_heel[0]
            res.append(self.foot(phi, xplant))
        phiA = (t / self.T) % 1
        hip_y = self.r.hip[1] + self.bob * math.cos(4 * math.pi * (phiA - self.mid) + math.pi) * -1
        hip = np.array([self.v * t, hip_y])
        arm = -self.arm_amp * math.cos(2 * math.pi * (phiA - 0.06))       # far arm forward when near leg forward
        sway = math.radians(1.2) * math.sin(4 * math.pi * (phiA - self.mid))
        return hip, res, self.lean + sway, arm

def ik(hip, ankle, L1, L2):
    d = ankle - hip; dist = np.linalg.norm(d); dist = min(dist, (L1 + L2) * 0.999); dist = max(dist, abs(L1 - L2) + 1)
    base = math.atan2(d[1], d[0])
    a1 = math.acos(np.clip((L1 * L1 + dist * dist - L2 * L2) / (2 * L1 * dist), -1, 1))
    # knee forward (+x): for a mostly-downward leg, subtracting a1 from base turns toward +x
    cands = [hip + L1 * np.array([math.cos(base + s * a1), math.sin(base + s * a1)]) for s in (1, -1)]
    knee = max(cands, key=lambda k: k[0] - (hip[0] + ankle[0]) / 2)
    end = knee + L2 * (ankle - knee) / max(np.linalg.norm(ankle - knee), 1e-6)
    return knee, end

def axis_theta(u):   # rotation that maps texture axis (0,1) onto direction u
    return math.atan2(-u[0], u[1])

def draw_character(r, w, t, cw=1100, ch=1500, mouth_open=0.0, blink=0.0, far_tint=(0.80, 0.80, 0.86)):
    """Character layer (RGBA float) with the hip anchored at a fixed canvas point. Returns canvas, hip canvas pos."""
    hip_w, legs, lean, arm = w.pose(t)
    can = np.zeros((ch, cw, 4), np.float32)
    anchor = np.array([cw * 0.42, r.hip[1] + 60])
    hip_c = anchor + np.array([0, hip_w[1] - r.hip[1]])
    def to_c(p_world):  # world (x rel. to hip x) -> canvas
        return np.array([anchor[0] + (p_world[0] - hip_w[0]), p_world[1] + 60])
    # body transform: rotate about the hip by lean (forward lean = clockwise on screen? forward = top toward +x)
    th_body = lean            # positive lean -> top moves +x : screen rotation by +lean (x' = x c - y s) with y up-negative
    Mbody = rot_mat(th_body, r.hip, hip_c)
    # far arm (behind everything)
    sh_c = Mbody @ np.array([r.R["shoulder"][0], r.R["shoulder"][1], 1])
    Marm = rot_mat(th_body + arm, r.shoulder, sh_c)
    paste(can, r.arm, Marm, tint=(0.93, 0.93, 0.95))
    # legs: far (B) first, then near (A)
    for idx in (1, 0):
        ankle_w, fa = legs[idx]
        hip_pt = hip_c + np.array([(-6 if idx == 1 else 6), 0])
        ankle_c = to_c(ankle_w)
        knee, ankle_c2 = ik(hip_pt, ankle_c, r.R["L1"], r.R["L2"])
        tint = far_tint if idx == 1 else None
        paste(can, r.thigh, rot_mat(axis_theta(knee - hip_pt), r.thigh_pivot, hip_pt), tint)
        paste(can, r.shin, rot_mat(axis_theta(ankle_c2 - knee), r.shin_pivot, knee), tint)
        paste(can, r.boot, rot_mat(-fa, r.ankle_b, ankle_c2), tint)
    body = r.body
    if mouth_open > 0.02 or blink > 0.02:
        body = face_overlay(r, body, mouth_open, blink)
    paste(can, body, Mbody)
    return can, hip_c, hip_w, legs

def face_overlay(r, body, mo, bl):
    b = body.copy(); R = r.R
    if bl > 0.02:
        ex, ey, rx, ry = R["eye"]
        y0, y1, x0, x1 = int(ey - ry * 2.5), int(ey + ry * 2.5), int(ex - rx * 2.5), int(ex + rx * 2.5)
        reg = b[y0:y1, x0:x1]; yy, xx = np.mgrid[y0:y1, x0:x1]
        ring = (((xx - ex) / (rx + 6)) ** 2 + ((yy - ey) / (ry + 6)) ** 2 > 1.3) & (reg[..., 3] > 250)
        px = reg[..., :3][ring]; lum = px.mean(1)
        skin = np.median(px[(lum > np.percentile(lum, 60)) & (px[:, 0] > px[:, 2] + 30)], 0)
        lid = np.zeros(b.shape[:2], np.float32)
        h = (ry * 2 + 6) * bl
        top = ey - ry - 3
        h = (ry * 2 + 3) * bl; top = ey - ry - 1
        cv2.ellipse(lid, (int(ex), int(top + h / 2)), (int(rx + 2), max(int(h / 2), 1)), 0, 0, 360, 1.0, -1)
        lid = cv2.GaussianBlur(lid, (9, 9), 0) * (b[..., 3] > 128)
        b[..., :3] = b[..., :3] * (1 - lid[..., None]) + skin * lid[..., None]
        if bl > 0.7:   # closed: a soft downward lash arc
            cv2.ellipse(b, (int(ex - 2), int(ey - 1)), (int(rx), 5), 0, 15, 165, (85, 48, 38, 255), 2, cv2.LINE_AA)
        elif bl > 0.25:  # half: dark lid edge
            cv2.ellipse(b, (int(ex), int(top + h / 2)), (int(rx + 1), max(int(h / 2), 1)), 0, 20, 160, (95, 55, 45, 255), 2, cv2.LINE_AA)
    if mo > 0.02:
        (x0, y0), (x1, y1) = R["mouth"]
        xs = x0 + 4; open_px = 4 + 11 * mo
        up, lo = [], []
        for k in np.linspace(0, 1, 14):
            x = xs + (x1 - xs) * k; y = y0 + (y1 - y0) * k
            d = open_px * math.sin(math.pi * min(k * 0.8 + 0.12, 1.0)) ** 0.9
            up.append((x, y - 0.5)); lo.append((x - 1.5 * mo, y + d))
        m = np.zeros(b.shape[:2], np.float32); cv2.fillPoly(m, [np.int32(np.round(up + lo[::-1]))], 1.0, lineType=cv2.LINE_AA)
        lip = np.zeros_like(m); cv2.polylines(lip, [np.int32(np.round(lo))], False, 1.0, 3, cv2.LINE_AA)
        m = cv2.GaussianBlur(m, (3, 3), 0); lip = cv2.GaussianBlur(lip, (3, 3), 0) * (1 - m)
        b[..., :3] = b[..., :3] * (1 - lip[..., None]) + np.array([214, 128, 116], np.float32) * lip[..., None]
        b[..., :3] = b[..., :3] * (1 - m[..., None]) + np.array([112, 44, 46], np.float32) * m[..., None]
    return b

# ---------------------------------------------------------------- debug strip
def poses_strip(rig_path, out, n=8, div=3, crop=None):
    r = Rig(rig_path); w = Walker(r)
    tiles = []
    for i in range(n):
        can, hip_c, hip_w, legs = draw_character(r, w, w.T * i / n)
        if crop: can = can[crop[1]:crop[3], crop[0]:crop[2]]
        bg = np.zeros_like(can); bg[..., :3] = (0, 140, 60); bg[..., 3] = 255
        a = can[..., 3:4] / 255; img = can[..., :3] + bg[..., :3] * (1 - a)
        gy = r.ground + 60 - (crop[1] if crop else 0)
        cv2.line(img, (0, gy), (img.shape[1], gy), (255, 255, 0), 2)
        tiles.append(cv2.resize(img, (img.shape[1] // div, img.shape[0] // div)))
    Image.fromarray(np.clip(np.concatenate(tiles, 1), 0, 255).astype(np.uint8)).save(out)

# ---------------------------------------------------------------- scene
def envelope(wav, fps):
    raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", wav, "-f", "s16le", "-ac", "1", "-ar", "16000", "-"], capture_output=True).stdout
    x = np.frombuffer(raw, np.int16).astype(np.float32) / 32768; hop = 16000 / fps
    e = np.array([np.sqrt(np.mean(x[int(i * hop):int((i + 1) * hop)] ** 2) + 1e-9) for i in range(int(len(x) / hop))])
    e = e / (np.percentile(e, 95) + 1e-6); return np.clip((e - 0.12) / 0.75, 0, 1), len(x) / 16000

def footstep(sr=24000, seed=0):
    rng = np.random.default_rng(seed); n = int(0.09 * sr)
    x = rng.standard_normal(n).astype(np.float32) * np.exp(-np.arange(n) / (0.018 * sr))
    k = np.ones(9, np.float32) / 9; x = np.convolve(x, k, "same")          # soft grass/earth step
    return x * 0.18

def render_scene(rig_path, scene_path, out):
    S = json.load(open(scene_path)); base = os.path.dirname(os.path.abspath(scene_path))
    r = Rig(rig_path); wk = S.get("walk", {})
    w = Walker(r, stride=wk.get("stride", 600), period=wk.get("period", 1.0), bob=wk.get("bob", 16), lift=wk.get("lift", 70),
               lean=wk.get("lean", 2.5), arm=wk.get("arm", 20))
    if wk.get("stop") is not None: w.set_stop(wk["stop"], wk.get("close", 0.55))
    face = S.get("facing", 1)                                             # 1 = walks right, -1 = walks left (mirrored)
    W, H = S.get("size", [1920, 1080]); fps = S.get("fps", 30); N = int(S["seconds"] * fps)
    bg = Image.open(os.path.join(base, S["background"])).convert("RGB")
    zoom = S.get("bg_zoom", 1.35); bw, bh = int(W * zoom), int(H * zoom)
    bg = np.asarray(bg.resize((bw, bh), Image.LANCZOS)).astype(np.float32)
    sc = S.get("char_height", 0.6) * H / r.ground                       # character px -> screen px
    ground_y = S.get("ground_y", 0.93) * H
    x0 = S.get("start_x", -0.08) * W
    bg_y = S.get("bg_y", 0.5) * (bh - H)
    # camera: follows the walker, eased, clamped to the painting
    def cam_x(t):
        hx = x0 + face * w.pose(t)[0][0] * sc                          # hip screen x with the camera at 0
        fx = S.get("frame_x", 0.42) if face == 1 else 1 - S.get("frame_x", 0.42)
        c0 = S.get("cam_start", 0.0 if face == 1 else 1.0) * (bw - W)
        return float(np.clip(c0 + S.get("follow", 0.55) * (hx - fx * W - c0), 0, bw - W))
    cams = np.array([cam_x(i / fps) for i in range(N)]); cams = np.convolve(np.pad(cams, 15, mode="edge"), np.ones(31) / 31, "valid")
    talk = S.get("talk"); env = None
    if talk: env, _ = envelope(os.path.join(base, talk["audio"]), fps)
    rng = np.random.default_rng(3); blinks = []; tb = 0.8
    while tb < S["seconds"]: blinks.append(tb); tb += rng.uniform(2.2, 4.0)
    grade = np.array(S.get("grade", [1.03, 1.0, 0.95]), np.float32)
    ff = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(fps), "-i", "-",
                           "-c:v", "libx264", "-preset", "medium", "-crf", "16", "-pix_fmt", "yuv420p", out + ".video.mp4"], stdin=subprocess.PIPE)
    steps = []
    yy, xx = np.mgrid[0:H, 0:W]; vign = 1 - 0.22 * (((xx - W / 2) / (W * 0.7)) ** 2 + ((yy - H / 2) / (H * 0.75)) ** 2)
    for i in range(N):
        t = i / fps; cx = cams[i]
        frame = bg[int(bg_y):int(bg_y) + H, int(cx):int(cx) + W].copy()
        mo = 0.0
        if env is not None:
            k = i - int(talk["at"] * fps)
            if 0 <= k < len(env):
                kk = k - (k % 2)                                            # mouth on twos (anime timing)
                v = env[kk]; mo = 0.0 if v < 0.15 else (0.45 if v < 0.55 else 0.9)
        bl = 0.0
        for b in blinks:
            d = t - b
            if 0 <= d < 0.17: bl = [1, 1, 0.6, 0.25, 0][min(int(d * fps), 4)] if fps >= 24 else 1
        can, hip_c, hip_w, legs = draw_character(r, w, t, mouth_open=mo, blink=bl)
        small = cv2.resize(can, (int(can.shape[1] * sc), int(can.shape[0] * sc)), interpolation=cv2.INTER_AREA)
        rim = S.get("rim")
        if rim:   # warm back-light edge on the side facing the light
            al = small[..., 3] / 255; dx, dy = int(rim.get("dx", 5)), int(rim.get("dy", -3))
            sh_a = np.roll(np.roll(al, -dx, 1), -dy, 0)
            edge = np.clip(al - sh_a, 0, 1); edge = cv2.GaussianBlur(edge, (5, 5), 0) * al
            small[..., :3] += edge[..., None] * np.array(rim.get("color", [255, 196, 120]), np.float32) * rim.get("strength", 0.55)
        # screen position: the hip's world x -> screen
        hx = x0 + face * hip_w[0] * sc - cx; gy_can = (r.ground + 60) * sc
        if face == -1: small = small[:, ::-1].copy(); hcx = small.shape[1] - hip_c[0] * sc
        else: hcx = hip_c[0] * sc
        ox = int(round(hx - hcx)); oy = int(round(ground_y - gy_can))
        # contact shadows (feet + soft body shadow)
        sh = np.zeros((H, W), np.float32)
        cv2.ellipse(sh, (int(hx), int(ground_y)), (int(150 * sc), int(22 * sc)), 0, 0, 360, 0.35, -1)
        for (ank, fa) in legs:
            fx = x0 + face * (ank[0] + 40) * sc - cx; hgt = max(0.0, r.ground - r.ankle_h - ank[1])
            cv2.ellipse(sh, (int(fx), int(ground_y)), (int(115 * sc), int(17 * sc)), 0, 0, 360, float(0.45 * np.exp(-hgt / 40)), -1)
        sh = cv2.GaussianBlur(sh, (0, 0), 9 * sc * 2)
        frame *= (1 - sh[..., None])
        # composite character
        h2, w2 = small.shape[:2]
        X0, Y0 = max(ox, 0), max(oy, 0); X1, Y1 = min(ox + w2, W), min(oy + h2, H)
        if X1 > X0 and Y1 > Y0:
            pc = small[Y0 - oy:Y1 - oy, X0 - ox:X1 - ox]; a = pc[..., 3:4] / 255
            frame[Y0:Y1, X0:X1] = pc[..., :3] * grade + frame[Y0:Y1, X0:X1] * (1 - a)
        frame *= vign[..., None]
        ff.stdin.write(np.clip(frame, 0, 255).astype(np.uint8).tobytes())
        # footstep times: heel strikes
        ts_ = getattr(w, "t_stop", None)
        for off in (0.0, 0.5):
            ph_prev = ((t - 1 / fps) / w.T - off) % 1; ph = (t / w.T - off) % 1
            if ph < ph_prev and t > 0 and (ts_ is None or t <= ts_ + 0.01): steps.append(t)
        if ts_ is not None and abs(t - (ts_ + w.close)) < 0.5 / fps: steps.append(t)
    ff.stdin.close(); ff.wait()
    # audio: footsteps + optional ambience + line
    sr = 24000; dur = S["seconds"]; mix = np.zeros(int(dur * sr) + sr, np.float32)
    for j, ts in enumerate(steps):
        fs = footstep(sr, j); a0 = int(ts * sr); mix[a0:a0 + len(fs)] += fs[:len(mix) - a0] * (0.8 + 0.2 * (j % 2))
    rng = np.random.default_rng(1); amb = np.convolve(rng.standard_normal(len(mix)).astype(np.float32), np.ones(60) / 60, "same") * 0.05
    mix += amb * S.get("ambience", 1.0)
    if talk:
        raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", os.path.join(base, talk["audio"]), "-f", "f32le", "-ac", "1", "-ar", str(sr), "-"], capture_output=True).stdout
        v = np.frombuffer(raw, np.float32); a0 = int(talk["at"] * sr); n = min(len(v), len(mix) - a0); mix[a0:a0 + n] += v[:n]
    mix = mix[:int(dur * sr)]; mix /= max(1.0, np.abs(mix).max() / 0.95)
    import soundfile as sf; sf.write(out + ".wav", mix, sr)
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", out + ".video.mp4", "-i", out + ".wav", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-shortest", out], check=True)
    os.remove(out + ".video.mp4"); print("wrote", out, N, "frames, steps", len(steps))

if __name__ == "__main__":
    if len(sys.argv) == 4 and sys.argv[2].endswith(".json"): render_scene(sys.argv[1], sys.argv[2], sys.argv[3])
    if sys.argv[2] == "--poses": poses_strip(sys.argv[1], sys.argv[3])
    if sys.argv[2] == "--legs": poses_strip(sys.argv[1], sys.argv[3], n=6, div=2, crop=(150, 850, 1000, 1400))
