"""YouTube thumbnail 1280x720 for a lesson: big 2-line title left, painting of Mia right (faded in),
two example pairs and a level pill. usage: thumbnail.py lesson.json out.png
lesson.json "thumb": {"t1","t2","sub","pairs":[[a,b],...],"image","img_x"(0-1 crop centre),"img_w"(px of source width to show)}"""
import json, sys, os
from playwright.sync_api import sync_playwright
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slides import data_uri, FONT_DIR

L = json.load(open(sys.argv[1])); out = sys.argv[2]; T = L["theme"]; th = L["thumb"]
# right-hand picture: crop a 16:9-ish window of the source around img_x, saved as jpg
src = Image.open(th.get("image", os.path.join(os.path.dirname(os.path.abspath(__file__)), "title_img.jpg"))).convert("RGB")
sw, sh = src.size; cw = int(th.get("img_w", sw)); cx = th.get("img_x", 0.5) * sw
x0 = int(min(max(cx - cw / 2, 0), sw - cw)); pic = src.crop((x0, 0, x0 + cw, sh))
pic = pic.resize((int(720 * cw / sh), 720), Image.LANCZOS); tmp = out + ".pic.jpg"; pic.save(tmp, quality=93)
pw_ = pic.size[0]
pairs = "".join(f'<div><div class="p">{a} <span class="ar">&rarr;</span> <span class="y">{b}</span></div></div>' for a, b in th["pairs"])
html = f"""<html><head><style>
@font-face {{ font-family: 'Playfair'; src: url('file://{FONT_DIR}/playfair-display-latin-700-normal.ttf'); }}
* {{ margin:0; padding:0; box-sizing:border-box; }}
body {{ width:1280px; height:720px; overflow:hidden; background:{T['bg']}; font-family:Inter, 'DejaVu Sans', sans-serif; position:relative; }}
.pic {{ position:absolute; right:0; top:0; height:720px; width:{pw_}px; background:url('{data_uri(tmp)}') center/cover;
  -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 {min(260, pw_ // 3)}px); }}
.wash {{ position:absolute; inset:0; background: linear-gradient(90deg, {T['bg']} 0, {T['bg']}ee 38%, transparent 62%); }}
.txt {{ position:absolute; left:60px; top:0; height:720px; width:720px; display:flex; flex-direction:column; justify-content:center; align-items:flex-start; }}
.t {{ font: 900 128px/0.95 Inter; color:{T['accent']}; letter-spacing:-3px; text-transform:uppercase; text-shadow: 0 4px 0 rgba(0,0,0,.06); }}
.t.s {{ font-size:{th.get('t2_size', 128)}px; }}
.sub {{ font: 800 44px Inter; color:{T['text']}; margin:22px 0 22px; white-space:nowrap; }}
.p {{ display:inline-block; font: 800 46px Inter; color:#fff; background:{T['accent2']}; border-radius:14px; padding:10px 26px; margin:0 0 14px; white-space:nowrap;
  box-shadow: 0 6px 18px rgba(0,0,0,.15); }}
.y {{ color:#FFD45C; }} .ar {{ opacity:.85; }}
.lvl {{ display:inline-block; margin-top:6px; font: 800 30px Inter; color:{T['accent']}; border:4px solid {T['accent']}; border-radius:40px; padding:6px 24px; background:#fff; }}
</style></head><body><div class="pic"></div><div class="wash"></div>
<div class="txt"><div class="t">{th['t1']}</div><div class="t s">{th['t2']}</div><div class="sub">{th['sub']}</div>
{pairs}
<div class="lvl">{L['level'].replace(' - ', ' – ')} · FULL LESSON</div></div></body></html>"""
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={"width": 1280, "height": 720})
    pg.set_content(html); pg.wait_for_timeout(300); pg.screenshot(path=out); b.close()
os.remove(tmp); print(out)
