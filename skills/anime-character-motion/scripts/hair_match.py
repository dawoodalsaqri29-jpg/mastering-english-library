"""Make a side-view sprite's hair match the front reference: Lab colour transfer on the hair + volume/curls by stamping
real curl patches cut from the reference hair edge along the side hair's silhouette (behind the original hair).
Writes the new frame and a mask of the added hair (so the rig keeps it on the head piece)."""
import numpy as np, cv2, math, json
from PIL import Image
rng = np.random.default_rng(4)
PAD = 44
side = np.asarray(Image.open('frames/f00_1300.png').convert('RGBA')).astype(np.float32)
side = np.pad(side, ((PAD, 0), (0, 0), (0, 0)))
H, W = side.shape[:2]; a = side[..., 3] / 255
hair = np.pad(np.asarray(Image.open('side_hair_mask.png')) > 128, ((PAD, 0), (0, 0)))
ms, ss, mr, sr = np.load('hair_stats.npy')
# 1) colour transfer on the hair (soft mask), 80 %
lab = cv2.cvtColor(np.clip(side[..., :3], 0, 255).astype(np.uint8), cv2.COLOR_RGB2LAB).astype(np.float32)
lab2 = (lab - ms) / ss * sr + mr
rgb2 = cv2.cvtColor(np.clip(lab2, 0, 255).astype(np.uint8), cv2.COLOR_LAB2RGB).astype(np.float32)
hm = cv2.GaussianBlur(hair.astype(np.float32), (0, 0), 2.5)[..., None] * 0.8
out = side.copy(); out[..., :3] = side[..., :3] * (1 - hm) + rgb2 * hm
# 2) curl patches from the reference
ref = np.asarray(Image.open('/home/claude/work/rig2/bust_cut.png').convert('RGBA')).astype(np.float32)
P = [((450, 330), 180), ((430, 440), 180), ((420, 540), 180), ((470, 640), 180),
     ((1250, 350), 0), ((1270, 470), 0), ((1230, 580), 0), ((700, 160), -90), ((900, 130), -90), ((1050, 170), -90)]
S = 150; patches = []
for (cx, cy), ang in P:
    p = ref[cy - S // 2: cy + S // 2, cx - S // 2: cx + S // 2].copy()
    # keep only hair-coloured pixels (no face/collar in the patch)
    hsv = cv2.cvtColor(np.clip(p[..., :3], 0, 255).astype(np.uint8), cv2.COLOR_RGB2HSV).astype(np.float32)
    keep = (hsv[..., 0] * 2 < 36) & (hsv[..., 1] > 70) & (hsv[..., 2] < 215)
    p[..., 3] *= cv2.GaussianBlur(keep.astype(np.float32), (0, 0), 1.5)
    # fade the patch's inner side so it blends under the original hair
    yy, xx = np.mgrid[0:S, 0:S].astype(np.float32) - S / 2
    d = np.hypot(xx, yy); p[..., 3] *= np.clip((S / 2 - d) / 20, 0, 1)
    patches.append((p, ang))
# 3) silhouette points of the side hair (edge facing transparency), away from the face
cnts, _ = cv2.findContours(hair.astype(np.uint8), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
cnt = max(cnts, key=len)[:, 0, :].astype(np.float32)
stamps = np.zeros_like(side); added = np.zeros((H, W), np.float32)
sc = 0.74; step = 24; i = 0; placed = 0
L = len(cnt)
while i < L:
    x, y = cnt[i]; pa, pb = cnt[(i - 6) % L], cnt[(i + 6) % L]
    tx, ty = pb - pa; nx, ny = ty, -tx; nn = math.hypot(nx, ny) + 1e-6; nx, ny = nx / nn, ny / nn
    # make the normal point to transparency
    px, py = int(np.clip(x + nx * 12, 0, W - 1)), int(np.clip(y + ny * 12, 0, H - 1))
    if a[py, px] > 0.5: nx, ny = -nx, -ny
    px, py = int(np.clip(x + nx * 12, 0, W - 1)), int(np.clip(y + ny * 12, 0, H - 1))
    face_side = x > 300 and y > 110 + PAD                       # don't touch the face / front of the ear
    if a[py, px] < 0.2 and not face_side and y < 370 + PAD:
        p, pang = patches[rng.integers(len(patches))]
        tang = math.degrees(math.atan2(ny, nx))
        rot = tang - pang + rng.uniform(-20, 20)
        s = sc * rng.uniform(0.85, 1.1)
        cxp, cyp = x + nx * 4 * s, y + ny * 4 * s
        M = cv2.getRotationMatrix2D((S / 2, S / 2), -rot, s); M[0, 2] += cxp - S / 2; M[1, 2] += cyp - S / 2
        w = cv2.warpAffine(p, M, (W, H), flags=cv2.INTER_LINEAR)
        al = w[..., 3:4] / 255
        stamps[..., :3] = w[..., :3] * al + stamps[..., :3] * (1 - al); stamps[..., 3:4] = 255 * (al + stamps[..., 3:4] / 255 * (1 - al))
        placed += 1
    i += step
# luminance match: stamps a little darker than the recoloured hair (depth), same chroma
lab_o = cv2.cvtColor(np.clip(out[..., :3], 0, 255).astype(np.uint8), cv2.COLOR_RGB2LAB).astype(np.float32)
target = lab_o[hair].mean(0)
sm = stamps[..., 3] > 60
lab_s = cv2.cvtColor(np.clip(stamps[..., :3], 0, 255).astype(np.uint8), cv2.COLOR_RGB2LAB).astype(np.float32)
cur = lab_s[sm].mean(0); lab_s[..., 0] += (target[0] - 4 - cur[0]); lab_s[..., 1:] += (target[1:] - cur[1:]) * 0.6
stamps[..., :3] = cv2.cvtColor(np.clip(lab_s, 0, 255).astype(np.uint8), cv2.COLOR_LAB2RGB).astype(np.float32)
# front layer: curly ends along the bottom of the hair (normal pointing down), drawn OVER the bob ends
front = np.zeros_like(side); i = 0
while i < L:
    x, y = cnt[i]; pa, pb = cnt[(i - 6) % L], cnt[(i + 6) % L]
    tx, ty = pb - pa; nx, ny = ty, -tx; nn = math.hypot(nx, ny) + 1e-6; nx, ny = nx / nn, ny / nn
    px, py = int(np.clip(x + nx * 12, 0, W - 1)), int(np.clip(y + ny * 12, 0, H - 1))
    if a[py, px] > 0.5: nx, ny = -nx, -ny
    if ny > 0.45 and x < 290 and 200 + PAD < y < 370 + PAD:
        p, pang = patches[rng.integers(len(patches))]
        tang = math.degrees(math.atan2(ny, nx)); rot = tang - pang + rng.uniform(-15, 15); s = 0.55 * rng.uniform(0.9, 1.1)
        M = cv2.getRotationMatrix2D((S / 2, S / 2), -rot, s); M[0, 2] += x - nx * 6 - S / 2; M[1, 2] += y - ny * 6 - S / 2
        w = cv2.warpAffine(p, M, (W, H), flags=cv2.INTER_LINEAR); al = w[..., 3:4] / 255 * 0.85
        front[..., :3] = w[..., :3] * al + front[..., :3] * (1 - al); front[..., 3:4] = 255 * (al + front[..., 3:4] / 255 * (1 - al))
    i += 30
fm = front[..., 3] > 30
if fm.any():
    lab_f = cv2.cvtColor(np.clip(front[..., :3], 0, 255).astype(np.uint8), cv2.COLOR_RGB2LAB).astype(np.float32)
    cf = lab_f[fm].mean(0); lab_f[..., 0] += (target[0] - 2 - cf[0]); lab_f[..., 1:] += (target[1:] - cf[1:]) * 0.6
    front[..., :3] = cv2.cvtColor(np.clip(lab_f, 0, 255).astype(np.uint8), cv2.COLOR_LAB2RGB).astype(np.float32)
# 4) stamps go BEHIND the original sprite
sa = stamps[..., 3:4] / 255; oa = out[..., 3:4] / 255
comp_a = oa + sa * (1 - oa)
comp_rgb = (out[..., :3] * oa + stamps[..., :3] * sa * (1 - oa)) / np.maximum(comp_a, 1e-4)
res = np.dstack([comp_rgb, comp_a * 255])
fa = front[..., 3:4] / 255 * (res[..., 3:4] > 100)                          # curly ends only over existing pixels
res[..., :3] = front[..., :3] * fa + res[..., :3] * (1 - fa)
added = np.clip(sa[..., 0] * (1 - oa[..., 0]) + fa[..., 0], 0, 1)
Image.fromarray(np.clip(res, 0, 255).astype(np.uint8)).save('frames/f00_1300_curly.png')
Image.fromarray((np.clip(added, 0, 1) * 255).astype(np.uint8)).save('hair_added_mask.png')
print('stamps', placed)
