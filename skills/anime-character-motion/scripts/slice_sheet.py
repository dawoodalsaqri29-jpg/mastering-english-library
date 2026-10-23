"""Slice a sprite sheet (frames on a flat background) into clean RGBA frames.
usage: slice_sheet.py sheet.png out_dir [--rows 2 --cols 6]"""
import sys, os, numpy as np, cv2
from PIL import Image
from rembg import remove, new_session
src, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
im = np.asarray(Image.open(src).convert('RGB'))
H, W = im.shape[:2]
border = np.concatenate([im[:4].reshape(-1,3), im[-4:].reshape(-1,3), im[:, :4].reshape(-1,3), im[:, -4:].reshape(-1,3)])
bg = np.median(border, 0)
d = np.abs(im.astype(int) - bg).sum(2); fg = d > 30
def bands(v, thr=2, gap=5, minw=20):
    on = v > thr; out=[]; s=None
    for i,o in enumerate(on):
        if o and s is None: s=i
        if not o and s is not None: out.append((s,i)); s=None
    if s is not None: out.append((s,len(v)))
    m=[]
    for b in out:
        if m and b[0]-m[-1][1] < gap: m[-1]=(m[-1][0], b[1])
        else: m.append(b)
    return [b for b in m if b[1]-b[0] > minw]
sr = cv2.dnn_superres.DnnSuperResImpl_create(); sr.readModel('/root/srmodels/FSRCNN_x4.pb'); sr.setModel('fsrcnn', 4)
sess = new_session('isnet-general-use')
k = 0; boxes = []
for r0, r1 in bands(fg.sum(1)):
    for c0, c1 in bands(fg[r0:r1].sum(0)):
        m = 14
        y0, y1, x0, x1 = max(r0-m,0), min(r1+m,H), max(c0-m,0), min(c1+m,W)
        cell = im[y0:y1, x0:x1]
        up = sr.upsample(cell[:, :, ::-1])[:, :, ::-1]           # x4
        up = cv2.bilateralFilter(up, 5, 18, 5)                    # soften upscale ringing
        a_net = np.asarray(remove(Image.fromarray(up), session=sess, only_mask=True)).astype(np.float32)/255
        # colour-key alpha (flat bg): sharp for hair wisps; net alpha: semantic (cream socks, collar)
        dd = np.abs(up.astype(np.float32) - bg).sum(2)
        a_key = np.clip((dd - 14) / 40, 0, 1)
        # net alpha only (key alpha let the light upscale ringing in = white halo); choke ~2 px at x4
        # darker-than-background key fills hair locks the net misses (light ringing is excluded)
        dark = np.clip(((bg - up.astype(np.float32)).sum(2) - 25) / 45, 0, 1)
        near = cv2.dilate((a_net > 0.5).astype(np.uint8), np.ones((25,25))) > 0
        a = np.where(a_key < 0.15, 0, np.maximum(a_net, dark * near))
        a = cv2.erode(a, np.ones((7,7), np.float32))
        a = cv2.GaussianBlur(a, (5,5), 0)
        # keep largest component
        n, lab, st, _ = cv2.connectedComponentsWithStats((a > 0.3).astype(np.uint8))
        if n > 1:
            big = 1 + np.argmax(st[1:, cv2.CC_STAT_AREA]); a *= cv2.dilate((lab == big).astype(np.uint8), np.ones((5,5)))
        # decontaminate: remove the grey bg from semi-transparent edge pixels
        af = np.clip(a, 1e-3, 1)[..., None]
        col = (up.astype(np.float32) - (1 - af) * bg) / af
        col = np.where(af > 0.05, col, up)
        # edge recolour: replace the outer 6 px band with colours pulled from 10 px inside
        inner = (a > 0.98).astype(np.uint8)
        band = (a > 0.01) & (cv2.erode(inner, np.ones((13,13))) == 0)
        blur_c = cv2.blur(col * (a > 0.98)[..., None], (21,21)); blur_w = cv2.blur((a > 0.98).astype(np.float32), (21,21))
        fill = blur_c / np.maximum(blur_w, 1e-3)[..., None]
        mix = np.clip(1 - cv2.distanceTransform(inner ^ 1, cv2.DIST_L2, 3) / 6, 0, 1)[..., None] * 0 + 0.5
        col = np.where(band[..., None] & (blur_w[..., None] > 0.05), col * (1 - mix) + fill * mix, col)
        rgba = np.dstack([np.clip(col,0,255), a*255]).astype(np.uint8)
        ys, xs = np.where(a > 0.05)
        rgba = rgba[ys.min():ys.max()+1, xs.min():xs.max()+1]
        Image.fromarray(rgba).save(f'{out}/f{k:02d}.png'); boxes.append((x0,y0,x1,y1)); k += 1
print(k, 'frames', boxes)
