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
        # fill small enclosed holes (hair gaps the matte missed)
        fg = (a > 0.5).astype(np.uint8); ff = fg.copy(); msk = np.zeros((H + 2, W + 2), np.uint8)
        cv2.floodFill(ff, msk, (0, 0), 2); holes = (ff == 0)
        n, lab, st, _ = cv2.connectedComponentsWithStats(holes.astype(np.uint8))
        small = np.isin(lab, [i for i in range(1, n) if st[i, 4] < 600])
        if small.any():
            rgb8 = np.clip(img[..., :3], 0, 255).astype(np.uint8)
            img[..., :3] = np.where(small[..., None], cv2.inpaint(rgb8, small.astype(np.uint8), 5, cv2.INPAINT_TELEA), img[..., :3])
            a = np.where(small, 1.0, a)
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
        if "head_cut" in R:   # head piece (with 30 px under-lap tucked behind the torso) + torso piece
            hc = interp_line(R["head_cut"], np.arange(W))
            self.head = np.dstack([img[..., :3], body_a * (yy < hc[None, :] + 30) * 255])
            self.torso = np.dstack([img[..., :3], body_a * (yy >= hc[None, :]) * 255])
            self.neck = np.array(R["neck"], float)
        else:
            self.head = None
        # secondary motion: skirt rows and hair weight map
        self.skirt_top = R.get("skirt", {}).get("top", None)
        self.hem_mid = float(np.median(hem))
        hb = R.get("hair", None)
        if hb:
            x0h, y0h, x1h, y1h = hb["box"]; fx = hb.get("face_x", x1h)
            wx = np.clip((fx - xx) / 70.0, 0, 1)
            wy = np.clip((yy - y0h) / max(y1h - y0h, 1), 0, 1) ** 1.3
            inside = (xx >= x0h - 40) & (xx <= x1h) & (yy >= y0h) & (yy <= y1h + 40)
            self.hair_w = (wx * wy * inside).astype(np.float32)
            self.hair_w = cv2.GaussianBlur(self.hair_w, (0, 0), 12)
        else:
            self.hair_w = None
        self.gx, self.gy = np.meshgrid(np.arange(W, dtype=np.float32), np.arange(H, dtype=np.float32))
        # under-lap pixels (left of the cut) take the sleeve's own colours, mirrored across the cut
        cutx = np.clip(cut, 0, W - 1)[:, None]
        mx = np.clip((2 * cutx - xx + 4).astype(int), 0, W - 1)
        mir = img[yy, mx, :3]
        ok = a[yy, mx] > 0.9
        sleeve = np.median(img[..., :3][arm_m & (xx > cutx + 6) & (yy < 620) & (a > 0.95)], 0)
        mir = np.where(ok[..., None], mir, sleeve)
        rgb_arm = np.where(((xx <= cutx) & arm_m)[..., None], mir, img[..., :3])
        arm = np.dstack([rgb_arm, a * arm_m * 255])
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

def draw_character(r, w, t, cw=1100, ch=1500, mouth_open=0.0, blink=0.0, far_tint=(0.80, 0.80, 0.86),
                   head_a=0.0, arm_ov=None):
    """Character layer (RGBA float) with the hip anchored at a fixed canvas point.
    head_a: degrees, + = look up.  arm_ov: (deg forward/up, weight) overrides the far-arm swing."""
    hip_w, legs, lean, arm = w.pose(t)
    if arm_ov is not None:
        arm = arm * (1 - arm_ov[1]) - math.radians(arm_ov[0]) * arm_ov[1]
    can = np.zeros((ch, cw, 4), np.float32)
    anchor = np.array([cw * 0.42, r.hip[1] + 60])
    hip_c = anchor + np.array([0, hip_w[1] - r.hip[1]])
    def to_c(p_world):
        return np.array([anchor[0] + (p_world[0] - hip_w[0]), p_world[1] + 60])
    th_body = lean
    Mbody = rot_mat(th_body, r.hip, hip_c)
    sh_c = Mbody @ np.array([r.R["shoulder"][0], r.R["shoulder"][1], 1])
    Marm = rot_mat(th_body + arm, r.shoulder, sh_c)
    paste(can, r.arm, Marm, tint=(0.93, 0.93, 0.95))
    for idx in (1, 0):
        ankle_w, fa = legs[idx]
        hip_pt = hip_c + np.array([(-6 if idx == 1 else 6), 0])
        ankle_c = to_c(ankle_w)
        knee, ankle_c2 = ik(hip_pt, ankle_c, r.R["L1"], r.R["L2"])
        tint = far_tint if idx == 1 else None
        paste(can, r.thigh, rot_mat(axis_theta(knee - hip_pt), r.thigh_pivot, hip_pt), tint)
        paste(can, r.shin, rot_mat(axis_theta(ankle_c2 - knee), r.shin_pivot, knee), tint)
        paste(can, r.boot, rot_mat(-fa, r.ankle_b, ankle_c2), tint)
    sec = secondary(r, w, t)
    if r.head is not None:
        head = r.head
        if mouth_open > 0.02 or blink > 0.02: head = face_overlay(r, head, mouth_open, blink)
        if r.hair_w is not None and (abs(sec["hair_dy"]) > 0.05 or abs(sec["hair_dx"]) > 0.05):
            mx = r.gx + r.hair_w * sec["hair_dx"]; my = r.gy + r.hair_w * sec["hair_dy"]
            head = cv2.remap(head, mx, my, cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT)
        neck_c = Mbody @ np.array([r.neck[0], r.neck[1], 1])
        paste(can, head, rot_mat(th_body - math.radians(head_a), r.neck, neck_c))
        torso = r.torso
        if r.skirt_top is not None and abs(sec["skirt_dx"]) > 0.05:
            top = r.skirt_top; span = max(r.hem_mid - top, 1)
            prof = np.clip((r.gy[:, :1] - top) / span, 0, 1.2) ** 1.6          # 0 at the waist -> 1 at the hem
            mx = r.gx + prof * sec["skirt_dx"]                                  # sample from behind = cloth trails
            torso = cv2.remap(torso, mx, r.gy, cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT)
        paste(can, torso, Mbody)
    else:
        body = r.body
        if mouth_open > 0.02 or blink > 0.02: body = face_overlay(r, body, mouth_open, blink)
        paste(can, body, Mbody)
    return can, hip_c, hip_w, legs

def secondary(r, w, t):
    """Follow-through: skirt trails and swings with each step, hair lags the body bob; both settle after a stop."""
    R = r.R; sk = R.get("skirt", {}); hr = R.get("hair", {})
    def hip(tt): return w.pose(max(tt, 0.0))[0]
    h0, h1 = hip(t - 0.10), hip(t)
    sp = float(np.clip((h1[0] - h0[0]) / (w.v * 0.10), 0, 1))                  # 1 = full walking speed
    ph = (t - sk.get("lag", 0.08)) / w.T
    swing = sk.get("amp", 7) * math.sin(4 * math.pi * ph + 0.6)
    skirt = sp * (sk.get("drag", 4) + swing)
    ts = getattr(w, "t_stop", None)
    if ts is not None and t > ts + w.close * 0.6:                               # settle after the stop
        u = t - ts - w.close * 0.6; skirt += sk.get("amp", 7) * 0.8 * math.exp(-u * 2.6) * math.sin(u * 8.5)
    # hair: lags the vertical bob (velocity of the hip a few frames ago), trails backwards with speed
    a, b = hip(t - 0.16), hip(t - 0.08)
    vy = (b[1] - a[1]) / 0.08                                                   # px/s, + = moving down
    hair_dy = float(np.clip(vy * hr.get("amp", 0.035), -9, 9))
    hair_dx = sp * hr.get("drag", 3.0)
    if ts is not None and t > ts + w.close * 0.6:
        u = t - ts - w.close * 0.6; hair_dy += 3.5 * math.exp(-u * 3) * math.sin(u * 10)
    return {"skirt_dx": skirt, "hair_dy": hair_dy, "hair_dx": hair_dx}

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

def _bp_noise(n, sr, lo, hi, rng):
    x = rng.standard_normal(n); X = np.fft.rfft(x); f = np.fft.rfftfreq(n, 1 / sr)
    X *= ((f > lo) & (f < hi)) * (1 + 0 * f); return np.fft.irfft(X, n).astype(np.float32)

def footstep(sr=24000, seed=0, kind="grass"):
    """Grass step: crunchy swish (bandpassed noise, two quick grains) over a soft low thump."""
    rng = np.random.default_rng(seed); n = int(0.22 * sr); t = np.arange(n) / sr
    sw = _bp_noise(n, sr, 1800, 7000, rng); sw /= np.abs(sw).max() + 1e-6
    env = np.exp(-t / 0.045) * (1 - np.exp(-t / 0.004)) + 0.5 * np.exp(-np.clip(t - 0.03, 0, None) / 0.06) * (t > 0.03)
    grains = (rng.random(n) < 0.004).astype(np.float32); grains = np.convolve(grains, np.hanning(40), "same")
    thump = np.sin(2 * np.pi * 85 * t) * np.exp(-t / 0.03)
    x = sw * env * (0.6 + 0.8 * grains) * 0.55 + thump * 0.22
    return x.astype(np.float32) * 0.5

def brush(sr=24000, seed=0):
    """Soft grass brushing during the swing."""
    rng = np.random.default_rng(seed + 99); n = int(0.25 * sr); t = np.arange(n) / sr
    x = _bp_noise(n, sr, 2500, 9000, rng); x /= np.abs(x).max() + 1e-6
    return (x * np.sin(np.pi * t / t[-1]) ** 2 * 0.08).astype(np.float32)

def bleat(sr=24000, seed=0, f0=380, dur=0.95):
    """Synthetic sheep 'baa': buzzy pulse source, fast tremolo (the a-a-a), vowel formants, breathy onset."""
    from scipy.signal import lfilter
    rng = np.random.default_rng(seed); n = int(dur * sr); t = np.arange(n) / sr
    f = f0 * (1 + 0.10 * np.sin(np.pi * t / dur) - 0.06 * t / dur) * (1 + 0.012 * np.sin(2 * np.pi * 6 * t))
    ph = np.cumsum(f) / sr; src = 2 * (ph % 1) - 1                          # sawtooth
    src += 0.25 * rng.standard_normal(n)
    out = np.zeros(n)
    for fc, bw, g in [(750, 130, 1.0), (1250, 160, 0.7), (2600, 260, 0.35), (3400, 300, 0.2)]:
        r = math.exp(-math.pi * bw / sr); th = 2 * math.pi * fc / sr
        out += g * lfilter([1 - r], [1, -2 * r * math.cos(th), r * r], src)
    trem = 0.55 + 0.45 * np.sin(2 * np.pi * 21 * t) ** 2
    env = np.clip(t / 0.06, 0, 1) * np.clip((dur - t) / 0.25, 0, 1) ** 1.5
    x = out * trem * env; return (x / (np.abs(x).max() + 1e-6) * 0.35).astype(np.float32)

def keyed(keys, t, default=0.0):
    """keys: [[t, v], ...] or [[t, v, w], ...] -> eased interpolation (returns tuple if 3 columns)."""
    if not keys: return default
    k = sorted(keys, key=lambda z: z[0])
    if t <= k[0][0]: return k[0][1:] if len(k[0]) > 2 else k[0][1]
    for a, b in zip(k, k[1:]):
        if t <= b[0]:
            u = ease((t - a[0]) / max(b[0] - a[0], 1e-6))
            v = [x + (y - x) * u for x, y in zip(a[1:], b[1:])]
            return tuple(v) if len(v) > 1 else v[0]
    return k[-1][1:] if len(k[-1]) > 2 else k[-1][1]

def render_scene(rig_path, scene_path, out):
    S = json.load(open(scene_path)); base = os.path.dirname(os.path.abspath(scene_path))
    r = Rig(rig_path); wk = S.get("walk", {})
    w = Walker(r, stride=wk.get("stride", 600), period=wk.get("period", 1.0), bob=wk.get("bob", 16), lift=wk.get("lift", 70),
               lean=wk.get("lean", 2.5), arm=wk.get("arm", 20))
    if wk.get("stop") is not None: w.set_stop(wk["stop"], wk.get("close", 0.55))
    face = S.get("facing", 1)
    W, H = S.get("size", [1920, 1080]); fps = S.get("fps", 30); N = int(S["seconds"] * fps)
    bg0 = Image.open(os.path.join(base, S["background"])).convert("RGB"); ow, oh = bg0.size
    zoom = S.get("bg_zoom", 1.35); bw, bh = int(W * zoom), int(H * zoom); zf = bw / ow
    bg = np.asarray(bg0.resize((bw, bh), Image.LANCZOS)).astype(np.float32)
    sc = S.get("char_height", 0.6) * H / r.ground
    ground_y = S.get("ground_y", 0.93) * H
    x0 = S.get("start_x", -0.08) * W
    bg_y = S.get("bg_y", 0.5) * (bh - H)
    def cam_x(t):
        hx = x0 + face * w.pose(t)[0][0] * sc
        fx = S.get("frame_x", 0.42) if face == 1 else 1 - S.get("frame_x", 0.42)
        c0 = S.get("cam_start", 0.0 if face == 1 else 1.0) * (bw - W)
        return float(np.clip(c0 + S.get("follow", 0.55) * (hx - fx * W - c0), 0, bw - W))
    cams = np.array([cam_x(i / fps) for i in range(N)]); cams = np.convolve(np.pad(cams, 15, mode="edge"), np.ones(31) / 31, "valid")
    # voice lines -> one mouth envelope
    lines = S.get("lines", []) + ([S["talk"]] if S.get("talk") else [])
    env_all = np.zeros(N + 2)
    for L in lines:
        e, _ = envelope(os.path.join(base, L["audio"]), fps); k0 = int(L["at"] * fps)
        n = min(len(e), N + 2 - k0)
        if n > 0: env_all[k0:k0 + n] = np.maximum(env_all[k0:k0 + n], e[:n])
    rng = np.random.default_rng(3); blinks = S.get("blinks")
    if blinks is None:
        blinks = []; tb = 0.8
        while tb < S["seconds"]: blinks.append(tb); tb += rng.uniform(2.2, 4.0)
    grade = np.array(S.get("grade", [1.03, 1.0, 0.95]), np.float32)
    # grass blades fixed in the painting (bg coords), drawn in front of the feet near the walker
    G = S.get("grass", {}); blades = []
    if G:
        gr = np.random.default_rng(11); step = G.get("spacing", 5)
        # palette = the painting's own grass greens (bottom third, green-dominant pixels)
        low = bg[int(bh * 0.6):, :, :].reshape(-1, 3); low = low[gr.choice(len(low), 60000)]
        gm = (low[:, 1] > low[:, 0] * 0.95) & (low[:, 1] > low[:, 2] * 1.25) & (low.sum(1) < 520)
        pal = low[gm]
        for bx in np.arange(0, bw, step):
            for row in range(G.get("rows", 3)):
                x = bx + gr.uniform(-step, step); by = gr.uniform(4, 30) + row * 5
                h = gr.uniform(*G.get("height", [34, 78])) * sc / 0.5
                col = pal[gr.integers(len(pal))] * gr.uniform(0.62, 0.95) * (0.85 + 0.05 * row)
                blades.append([x, by, h, gr.uniform(-14, 14), gr.uniform(0, 6.28), col, gr.random() < G.get("flowers", 0.04),
                               gr.uniform(0.6, 1.4)])
    parts = []                                                     # kicked grass bits
    anims = S.get("bg_anim", [])
    yy, xx = np.mgrid[0:H, 0:W]; vign = 1 - 0.22 * (((xx - W / 2) / (W * 0.7)) ** 2 + ((yy - H / 2) / (H * 0.75)) ** 2)
    ff = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(fps), "-i", "-",
                           "-c:v", "libx264", "-preset", "medium", "-crf", "16", "-pix_fmt", "yuv420p", out + ".video.mp4"], stdin=subprocess.PIPE)
    steps, brushes = [], []
    prev_phi = [None, None]
    for i in range(N):
        t = i / fps; cx = cams[i]
        dy = keyed(S.get("cam_tilt", []), t, 0.0)                  # + = camera tilts up (more sky)
        by0 = float(np.clip(bg_y - dy, 0, bh - H)); dy = bg_y - by0
        frame = bg[int(by0):int(by0) + H, int(cx):int(cx) + W].copy()
        # living background: grazing heads etc. (rotate a feathered patch about a pivot)
        for an in anims:
            ang = an.get("amp", 4) * math.sin(2 * math.pi * t / an.get("period", 3) + an.get("phase", 0)) + keyed(an.get("lift", []), t, 0.0)
            chew = an.get("chew", 0.8) * math.sin(2 * math.pi * 3.2 * t + an.get("phase", 0))
            px, py = [v * zf for v in an["pivot"]]; x0b, y0b, x1b, y1b = [v * zf for v in an["box"]]
            pad = 30; X0, Y0, X1, Y1 = int(x0b - pad), int(y0b - pad), int(x1b + pad), int(y1b + pad)
            patch = bg[Y0:Y1, X0:X1]
            M = cv2.getRotationMatrix2D((px - X0, py - Y0), ang + chew * 0.3, 1.0); M[1, 2] += chew * 0.6
            rot = cv2.warpAffine(patch, M, (X1 - X0, Y1 - Y0), borderMode=cv2.BORDER_REFLECT)
            m = np.zeros(patch.shape[:2], np.float32)
            cv2.ellipse(m, (int((x0b + x1b) / 2 - X0), int((y0b + y1b) / 2 - Y0)), (int((x1b - x0b) / 2), int((y1b - y0b) / 2)), 0, 0, 360, 1, -1)
            m = cv2.GaussianBlur(m, (0, 0), 6)[..., None]
            sx, sy = X0 - int(cx), Y0 - int(by0)
            if sx + patch.shape[1] > 0 and sx < W and sy + patch.shape[0] > 0 and sy < H:
                ax0, ay0 = max(sx, 0), max(sy, 0); ax1, ay1 = min(sx + patch.shape[1], W), min(sy + patch.shape[0], H)
                sub = (slice(ay0 - sy, ay1 - sy), slice(ax0 - sx, ax1 - sx))
                frame[ay0:ay1, ax0:ax1] = rot[sub] * m[sub] + frame[ay0:ay1, ax0:ax1] * (1 - m[sub])
        mo = 0.0
        kk = i - (i % 2); v = env_all[kk] if kk < len(env_all) else 0
        mo = 0.0 if v < 0.15 else (0.45 if v < 0.55 else 0.9)
        bl = 0.0
        for b in blinks:
            d = t - b
            if 0 <= d < 0.17: bl = [1, 1, 0.6, 0.25, 0][min(int(d * fps), 4)]
        head_a = keyed(S.get("head", []), t, 0.0)
        for tn in S.get("nods", []):
            u = (t - tn) / 0.32
            if 0 <= u <= 1: head_a -= S.get("nod_deg", 4) * math.sin(math.pi * u)
        head_a += 1.5 * v * (1 if (i // 4) % 2 else -0.5)                     # tiny speech accents
        arm_ov = keyed(S.get("arm", []), t, None) if S.get("arm") else None
        can, hip_c, hip_w, legs = draw_character(r, w, t, mouth_open=mo, blink=bl, head_a=head_a, arm_ov=arm_ov)
        small = cv2.resize(can, (int(can.shape[1] * sc), int(can.shape[0] * sc)), interpolation=cv2.INTER_AREA)
        rim = S.get("rim")
        if rim:
            al = small[..., 3] / 255; ddx, ddy = int(rim.get("dx", 5)), int(rim.get("dy", -3))
            sh_a = np.roll(np.roll(al, -ddx, 1), -ddy, 0)
            edge = np.clip(al - sh_a, 0, 1); edge = cv2.GaussianBlur(edge, (5, 5), 0) * al
            small[..., :3] += edge[..., None] * np.array(rim.get("color", [255, 196, 120]), np.float32) * rim.get("strength", 0.55)
        gy = ground_y + dy
        hx = x0 + face * hip_w[0] * sc - cx; gy_can = (r.ground + 60) * sc
        if face == -1: small = small[:, ::-1].copy(); hcx = small.shape[1] - hip_c[0] * sc
        else: hcx = hip_c[0] * sc
        ox = int(round(hx - hcx)); oy = int(round(gy - gy_can))
        sh = np.zeros((H, W), np.float32)
        cv2.ellipse(sh, (int(hx), int(gy)), (int(150 * sc), int(22 * sc)), 0, 0, 360, 0.35, -1)
        feet = []
        for (ank, fa) in legs:
            fx = x0 + face * (ank[0] + 40) * sc - cx; hgt = max(0.0, r.ground - r.ankle_h - ank[1])
            feet.append((fx, hgt))
            cv2.ellipse(sh, (int(fx), int(gy)), (int(115 * sc), int(17 * sc)), 0, 0, 360, float(0.45 * np.exp(-hgt / 40)), -1)
        sh = cv2.GaussianBlur(sh, (0, 0), 9 * sc * 2)
        frame *= (1 - sh[..., None])
        h2, w2 = small.shape[:2]
        X0, Y0 = max(ox, 0), max(oy, 0); X1, Y1 = min(ox + w2, W), min(oy + h2, H)
        if X1 > X0 and Y1 > Y0:
            pc = small[Y0 - oy:Y1 - oy, X0 - ox:X1 - ox]; a = pc[..., 3:4] / 255
            frame[Y0:Y1, X0:X1] = pc[..., :3] * grade + frame[Y0:Y1, X0:X1] * (1 - a)
        # ---- grass in front of the feet
        if len(blades):
            win = G.get("window", 330) * sc / 0.5
            lay = np.zeros((H, W, 3), np.float32); la = np.zeros((H, W), np.float32)
            for (bx, byo, h, lean0, ph, colb, flw, thk) in blades:
                sx = bx - cx
                d = abs(sx - hx)
                if d > win or sx < -10 or sx > W + 10: continue
                fade = 1 - (d / win) ** 2
                by = gy + byo * sc / 0.5
                push = 0.0; squash = 1.0
                for (fx, hgt) in feet:
                    q = max(0.0, 1 - abs(sx - fx) / (75 * sc / 0.5)) * math.exp(-hgt / 45)
                    push += math.copysign(q * 22 * sc / 0.5, sx - fx); squash = min(squash, 1 - 0.5 * q)
                sway = 4 * math.sin(1.6 * t + ph + bx * 0.01) * sc / 0.5
                hh = h * squash
                tipx = sx + lean0 * sc / 0.5 + sway + push; tipy = by - hh
                midx = sx + 0.25 * (tipx - sx); midy = by - hh * 0.55
                c = tuple(float(x) * fade for x in colb); c2 = tuple(min(float(x) * 1.18, 255) * fade for x in colb)
                th = max(1, int(round(thk * 3.2 * sc / 0.5)))
                cv2.line(lay, (int(sx), int(by)), (int(midx), int(midy)), c, th + 1, cv2.LINE_AA)
                cv2.line(la, (int(sx), int(by)), (int(midx), int(midy)), fade, th + 1, cv2.LINE_AA)
                cv2.line(lay, (int(midx), int(midy)), (int(tipx), int(tipy)), c2, max(1, th - 1), cv2.LINE_AA)
                cv2.line(la, (int(midx), int(midy)), (int(tipx), int(tipy)), fade, max(1, th - 1), cv2.LINE_AA)
                if flw:
                    fc = tuple(v * fade for v in ((232, 228, 210) if ph > 2.5 else (196, 48, 36)))
                    rr = max(2, int(5 * sc / 0.5))
                    cv2.circle(lay, (int(tipx), int(tipy)), rr, fc, -1, cv2.LINE_AA); cv2.circle(la, (int(tipx), int(tipy)), rr, fade, -1, cv2.LINE_AA)
            lay = cv2.GaussianBlur(lay, (3, 3), 0); la = np.clip(cv2.GaussianBlur(la, (3, 3), 0), 0, 1)[..., None]
            frame = frame * (1 - la) + lay
        # ---- kicked grass bits at toe-off, footstep / brush sound marks
        ts_ = getattr(w, "t_stop", None)
        walking = ts_ is None or t <= ts_ + 0.01
        for li, off in enumerate((0.0, 0.5)):
            ph = (t / w.T - off) % 1
            if prev_phi[li] is not None and walking:
                if ph < prev_phi[li] and t > 0: steps.append(t)
                if prev_phi[li] < 0.6 <= ph:
                    brushes.append(t)
                    fx, hgt = feet[li]
                    for _ in range(G.get("kick", 6) if G else 0):
                        parts.append([fx + face * 30 * sc, gy - 4, -face * rng.uniform(30, 110) * sc / 0.5, -rng.uniform(90, 210) * sc / 0.5,
                                      0.0, rng.uniform(0.5, 0.9), rng.random()])
            prev_phi[li] = ph
        if ts_ is not None and abs(t - (ts_ + w.close)) < 0.5 / fps: steps.append(t)
        alive = []
        for p in parts:
            p[4] += 1 / fps
            if p[4] > p[5]: continue
            p[0] += p[2] / fps; p[1] += p[3] / fps; p[3] += 520 * sc / 0.5 / fps
            if p[1] > gy + 6: continue
            al_ = 1 - p[4] / p[5]
            col = np.array([95, 140, 45]) if p[6] < 0.7 else (np.array([215, 60, 45]) if p[6] < 0.85 else np.array([240, 236, 220]))
            xi, yi = int(p[0]), int(p[1])
            if 0 <= xi < W and 0 <= yi < H:
                rr = max(1, int(2.5 * sc / 0.5))
                y0_, y1_, x0_, x1_ = max(yi - rr, 0), min(yi + rr + 1, H), max(xi - rr, 0), min(xi + rr + 1, W)
                frame[y0_:y1_, x0_:x1_] = frame[y0_:y1_, x0_:x1_] * (1 - al_) + col * al_
            alive.append(p)
        parts = alive
        frame *= vign[..., None]
        ff.stdin.write(np.clip(frame, 0, 255).astype(np.uint8).tobytes())
    ff.stdin.close(); ff.wait()
    # ---- audio
    sr = 24000; dur = S["seconds"]; mix = np.zeros(int(dur * sr) + sr, np.float32)
    for j, ts in enumerate(steps):
        fs = footstep(sr, j); a0 = int(ts * sr); mix[a0:a0 + len(fs)] += fs[:len(mix) - a0] * (0.85 + 0.15 * (j % 2))
    for j, ts in enumerate(brushes):
        bsnd = brush(sr, j); a0 = int(ts * sr); mix[a0:a0 + len(bsnd)] += bsnd[:len(mix) - a0]
    arng = np.random.default_rng(1)
    wind = _bp_noise(len(mix), sr, 150, 1200, arng); wind /= np.abs(wind).max() + 1e-6
    tt = np.arange(len(mix)) / sr; mix += wind * 0.035 * (0.7 + 0.3 * np.sin(2 * np.pi * tt / 5.3)) * S.get("ambience", 1.0)
    for L in lines:
        raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", os.path.join(base, L["audio"]), "-f", "f32le", "-ac", "1", "-ar", str(sr), "-"], capture_output=True).stdout
        v = np.frombuffer(raw, np.float32); a0 = int(L["at"] * sr); n = min(len(v), len(mix) - a0)
        if n > 0: mix[a0:a0 + n] += v[:n] * L.get("gain", 1.0)
    for fx_ in S.get("sfx", []):
        if fx_.get("synth") == "bleat": v = bleat(sr, int(fx_["t"] * 10), fx_.get("f0", 380), fx_.get("dur", 0.95))
        else:
            raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", os.path.join(base, fx_["file"]), "-f", "f32le", "-ac", "1", "-ar", str(sr), "-"], capture_output=True).stdout
            v = np.frombuffer(raw, np.float32)
        a0 = int(fx_["t"] * sr); n = min(len(v), len(mix) - a0)
        if n > 0: mix[a0:a0 + n] += v[:n] * fx_.get("gain", 1.0)
    mix = mix[:int(dur * sr)]; mix /= max(1.0, np.abs(mix).max() / 0.95)
    import soundfile as sf; sf.write(out + ".wav", mix, sr)
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", out + ".video.mp4", "-i", out + ".wav", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-shortest", out], check=True)
    os.remove(out + ".video.mp4"); print("wrote", out, N, "frames, steps", len(steps))

if __name__ == "__main__":
    if len(sys.argv) == 4 and sys.argv[2].endswith(".json"): render_scene(sys.argv[1], sys.argv[2], sys.argv[3])
    if sys.argv[2] == "--poses": poses_strip(sys.argv[1], sys.argv[3])
    if sys.argv[2] == "--legs": poses_strip(sys.argv[1], sys.argv[3], n=6, div=2, crop=(150, 850, 1000, 1400))
