"""HTML slide states for lesson videos, rendered with Playwright (Chromium) at 1920x1080.
Each layout returns a list of 'items'; a state = how many items are visible (+ which one is new)."""
import html, re

FONT_DIR = "/home/claude/work/assets/fonts"

def v(s):  # <v>verb</v> -> highlighted verb
    return re.sub(r"<v>(.*?)</v>", r'<span class="v">\1</span>', s)

def css(T):
    return f"""
@font-face {{ font-family: 'Playfair'; src: url('file://{FONT_DIR}/playfair-display-latin-700-normal.ttf'); }}
@font-face {{ font-family: 'Cairo'; src: url('file://{FONT_DIR}/cairo-arabic-800-normal.ttf'); }}
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
html, body {{ width: 1920px; height: 1080px; overflow: hidden; }}
body {{ font-family: 'Inter', 'DejaVu Sans', sans-serif; color: {T['text']};
  background: radial-gradient(1200px 800px at 85% 10%, {T['bg2']} 0%, {T['bg']} 60%) , {T['bg']}; position: relative; }}
.grain {{ position: absolute; inset: 0; opacity: .06; background-image: repeating-radial-gradient(circle at 30% 40%, #000 0 1px, transparent 1px 3px); }}
.frame {{ position: absolute; inset: 70px 110px; }}
.badge {{ position: absolute; top: 46px; right: 110px; font: 600 26px Inter; color: {T['accent2']};
  border: 2px solid {T['accent2']}; border-radius: 40px; padding: 6px 22px; }}
.brand {{ position: absolute; bottom: 38px; left: 110px; font: 600 24px Inter; color: {T['text']}; opacity: .55; letter-spacing: .5px; }}
h1 {{ font: 700 84px 'Playfair', serif; color: {T['text']}; line-height: 1.05; }}
h2 {{ font: 700 66px 'Playfair', serif; color: {T['text']}; margin-bottom: 34px; }}
h2 .u {{ display:block; width: 120px; height: 8px; background: {T['accent']}; border-radius: 6px; margin-top: 14px; }}
.v {{ color: {T['accent']}; font-weight: 800; }}
.rule {{ display: inline-block; font: 700 46px Inter; background: {T['accent2']}; color: #fff; padding: 18px 34px; border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,.12); margin-bottom: 36px; }}
.item {{ opacity: 0; transform: translateY(14px); }}
.item.on {{ opacity: 1; transform: none; }}
.item.new {{ animation: none; }}
.ex {{ font: 500 50px Inter; margin: 18px 0; padding: 10px 24px; border-left: 10px solid transparent; border-radius: 10px; }}
.ex.new {{ border-left-color: {T['accent']}; background: rgba(255,255,255,.55); }}
.note {{ margin-top: 30px; font: 600 36px Inter; color: {T['accent2']}; background: rgba(46,110,142,.10); padding: 18px 26px; border-radius: 14px; }}
table {{ border-collapse: separate; border-spacing: 0 12px; width: 100%; }}
th {{ text-align: left; font: 700 30px Inter; color: {T['accent2']}; padding: 0 22px 6px; text-transform: uppercase; letter-spacing: 1px; }}
td {{ font: 500 42px Inter; padding: 14px 22px; background: rgba(255,255,255,.55); }}
td:first-child {{ border-radius: 14px 0 0 14px; }} td:last-child {{ border-radius: 0 14px 14px 0; }}
tr.new td {{ background: #fff; box-shadow: 0 6px 18px rgba(0,0,0,.08); }}
.cols {{ display: flex; gap: 40px; }}
.col {{ flex: 1; background: rgba(255,255,255,.6); border-radius: 26px; padding: 30px 36px; }}
.col h3 {{ font: 800 70px Inter; color: {T['accent']}; margin-bottom: 18px; }}
.col p {{ font: 500 44px Inter; margin: 12px 0; }}
.col.new {{ background: #fff; box-shadow: 0 10px 30px rgba(0,0,0,.10); }}
.tip {{ margin-top: 34px; font: 700 38px Inter; color: {T['accent2']}; }}
.qa {{ display: flex; justify-content: space-between; align-items: center; margin: 16px 0; padding: 18px 28px; background: rgba(255,255,255,.55); border-radius: 16px; }}
.qa .q {{ font: 600 46px Inter; }} .qa .a {{ font: 500 40px Inter; color: {T['good']}; }}
.qa.new {{ background: #fff; box-shadow: 0 6px 18px rgba(0,0,0,.08); }}
.chips {{ display: flex; flex-wrap: wrap; gap: 22px; }}
.chip {{ font: 600 46px Inter; padding: 18px 34px; border-radius: 60px; background: #fff; border: 3px solid {T['accent2']}; color: {T['accent2']}; }}
.chip.new {{ background: {T['accent2']}; color: #fff; }}
.cmp {{ display: flex; gap: 30px; margin: 14px 0; }}
.cmp div {{ flex: 1; font: 500 40px Inter; padding: 16px 26px; border-radius: 14px; }}
.bad {{ background: rgba(192,57,43,.10); color: {T['bad']}; text-decoration: line-through; text-decoration-thickness: 3px; }}
.bad::before {{ content: "✗  "; text-decoration: none; display: inline-block; }}
.good {{ background: rgba(47,143,78,.12); color: {T['good']}; font-weight: 700 !important; }}
.good::before {{ content: "✓  "; }}
.check {{ font: 600 46px Inter; margin: 20px 0; }} .check::before {{ content: "✔"; color: {T['good']}; margin-right: 24px; }}
.center {{ position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }}
.sub {{ font: 500 44px Inter; margin-top: 26px; color: {T['accent2']}; }}
.quizq {{ font: 700 64px Inter; margin: 30px 0 50px; }}
.opts {{ display: flex; gap: 40px; }}
.opt {{ font: 700 54px Inter; padding: 26px 60px; border-radius: 22px; background: #fff; border: 4px solid rgba(0,0,0,.08); }}
.opt.right {{ background: {T['good']}; color: #fff; border-color: {T['good']}; }}
.opt.dim {{ opacity: .35; }}
.timer {{ position: absolute; right: 120px; top: 300px; width: 170px; height: 170px; border-radius: 50%; border: 10px solid {T['accent']};
  display: flex; align-items: center; justify-content: center; font: 800 86px Inter; color: {T['accent']}; background: #fff; }}
.tl {{ position: relative; height: 240px; margin: 10px 0 30px; }}
.tl .line {{ position: absolute; top: 120px; left: 0; right: 0; height: 8px; background: {T['text']}; opacity: .7; border-radius: 4px; }}
.tl .now {{ position: absolute; top: 70px; right: 0; font: 800 36px Inter; color: {T['accent2']}; }}
.tl .nowdot {{ position: absolute; top: 106px; right: 0; width: 36px; height: 36px; border-radius: 50%; background: {T['accent2']}; }}
.tl .x {{ position: absolute; top: 88px; left: 34%; font: 900 72px Inter; color: {T['accent']}; }}
.tl .xl {{ position: absolute; top: 170px; left: 30%; font: 700 36px Inter; color: {T['accent']}; }}
.tl .done {{ position: absolute; top: 112px; left: 26%; width: 22%; height: 24px; background: {T['accent']}; opacity: .25; border-radius: 12px; }}
.pts p {{ font: 600 46px Inter; margin: 16px 0; }} .pts p::before {{ content: "●"; color: {T['accent']}; margin-right: 20px; }}
.repeat {{ font: 700 72px Inter; margin: 22px 0; color: {T['text']}; opacity: .25; }}
.repeat.cur {{ opacity: 1; }}
.turn {{ margin-top: 40px; font: 800 52px Inter; color: #fff; background: {T['accent']}; padding: 16px 40px; border-radius: 60px; display: inline-block; }}
.img {{ position: absolute; right: 110px; bottom: 120px; width: 620px; height: 420px; border-radius: 28px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,.18); }}
.img img {{ width: 100%; height: 100%; object-fit: cover; }}
"""

import base64, os
_HERE = os.path.dirname(os.path.abspath(__file__))
def data_uri(path):
    ext = os.path.splitext(path)[1].lower().strip(".").replace("jpg", "jpeg")
    return f"data:image/{ext};base64," + base64.b64encode(open(path, "rb").read()).decode()
_BG = None; _AV = None
def page(T, body, badge, brand, avatar=True, bg_img=None, avatar_img=None):
    global _BG, _AV
    bgu = data_uri(bg_img or os.path.join(_HERE, "bg_soft.jpg"))
    avu = data_uri(avatar_img or os.path.join(_HERE, "mia_avatar.png"))
    av = f'<img src="{avu}" style="position:absolute;right:90px;bottom:60px;width:230px;height:230px;border-radius:50%;box-shadow:0 12px 30px rgba(0,0,0,.18);border:6px solid #fff">' if avatar else ""
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{css(T)}</style></head>
<body><div style="position:absolute;inset:0;background:url('{bgu}') center/cover;opacity:.22"></div><div class="grain"></div>
<div class="badge">{html.escape(badge)}</div><div class="brand">{html.escape(brand)}</div>{body}{av}</body></html>"""

def build(layout, d, title, sub, n_on, cur=None, extra=None):
    """Return (body_html, n_items). n_on = number of visible items; the last visible one is marked 'new'."""
    def cls(i, base):
        c = base + " item"
        if i < n_on: c += " on"
        if i == n_on - 1: c += " new"
        return c
    if layout == "title":
        img = f'<div class="img"><img src="{data_uri(extra)}"></div>' if extra else ""
        b = f'<div class="frame" style="top:300px"><h1>{html.escape(title)}</h1><div class="sub" style="text-align:left">{html.escape(sub)}</div></div>{img}'
        return b, 0
    if layout == "title2":
        return f'<div class="center"><h1>{html.escape(d["heading"])}</h1><div class="sub">{html.escape(d.get("sub",""))}</div></div>', 0
    head = f'<h2>{v(d["heading"])}<span class="u"></span></h2>'
    if layout == "timeline":
        pts = "".join(f'<p class="{cls(i,"")}">{v(p)}</p>' for i, p in enumerate(d["points"]))
        tl = f'<div class="tl"><div class="line"></div><div class="done"></div><div class="x">✕</div><div class="xl">{html.escape(d.get("mark",""))}</div><div class="nowdot"></div><div class="now" style="right:50px">NOW</div></div>'
        return f'<div class="frame">{head}{tl}<div class="pts">{pts}</div></div>', len(d["points"])
    if layout == "rule":
        items = [f'<div class="{cls(i,"ex")}">{v(e)}</div>' for i, e in enumerate(d["examples"])]
        if d.get("note"): items.append(f'<div class="{cls(len(items),"note")}">{v(d["note"])}</div>')
        return f'<div class="frame">{head}<div class="rule">{v(d["rule"])}</div>{"".join(items)}</div>', len(items)
    if layout == "table":
        ths = "".join(f"<th>{html.escape(c)}</th>" for c in d["cols"])
        trs = "".join(f'<tr class="{cls(i,"")}">' + "".join(f"<td>{v(c)}</td>" for c in r) + "</tr>" for i, r in enumerate(d["rows"]))
        fs = 42 if len(d["rows"]) <= 5 else 36
        return f'<div class="frame">{head}<table style="font-size:{fs}px"><tr>{ths}</tr>{trs}</table></div>'.replace("font: 500 42px", f"font: 500 {fs}px"), len(d["rows"])
    if layout == "pron":
        cols = "".join(f'<div class="{cls(i,"col")}"><h3>{html.escape(c[0])}</h3>' + "".join(f"<p>{html.escape(w)}</p>" for w in c[1]) + "</div>" for i, c in enumerate(d["cols"]))
        tip = f'<div class="{cls(len(d["cols"]),"tip")}">{html.escape(d.get("tip",""))}</div>'
        return f'<div class="frame">{head}<div class="cols">{cols}</div>{tip}</div>', len(d["cols"]) + 1
    if layout == "qa":
        rows = "".join(f'<div class="{cls(i,"qa")}"><span class="q">{v(p[0])}</span><span class="a">{v(p[1])}</span></div>' for i, p in enumerate(d["pairs"]))
        return f'<div class="frame">{head}<div class="rule">{v(d["rule"])}</div>{rows}</div>', len(d["pairs"])
    if layout == "chips":
        ch = "".join(f'<span class="{cls(i,"chip")}">{html.escape(c)}</span>' for i, c in enumerate(d["chips"]))
        return f'<div class="frame">{head}<div class="chips">{ch}</div></div>', len(d["chips"])
    if layout == "compare":
        rows = "".join(f'<div class="{cls(i,"cmp")}"><div class="bad">{html.escape(r[0])}</div><div class="good">{html.escape(r[1])}</div></div>' for i, r in enumerate(d["rows"]))
        return f'<div class="frame">{head}{rows}</div>', len(d["rows"])
    if layout == "checklist":
        it = "".join(f'<div class="{cls(i,"check")}">{v(x)}</div>' for i, x in enumerate(d["items"]))
        return f'<div class="frame">{head}{it}</div>', len(d["items"])
    if layout == "end":
        b = (f'<div class="center"><h1>{html.escape(d["heading"])}</h1>'
             f'<div class="{cls(0,"sub")}" style="font-size:52px;color:inherit;margin-top:40px">{v(d["task"])}</div>'
             f'<div class="{cls(1,"turn")}">{html.escape(d["next"])}</div></div>')
        return b, 2
    if layout == "repeat":
        lines = "".join(f'<div class="repeat{" cur" if i == cur else ""}">{v(x)}</div>' for i, x in enumerate(d["lines"]))
        turn = '<div class="turn">🎤 Your turn!</div>' if extra == "turn" else ""
        return f'<div class="frame">{head}{lines}{turn}</div>', 0
    if layout == "quiz":
        opts = ""
        for i, o in enumerate(d["options"]):
            c = "opt"
            if extra == "answer": c += " right" if i == d["answer"] else " dim"
            opts += f'<div class="{c}">{chr(65+i)}. {html.escape(o)}</div>'
        q = d["q"]
        if extra == "answer":
            q = q.replace("___", f'<span class="v">{html.escape(d["options"][d["answer"]])}</span>')
        else:
            q = html.escape(q)
        timer = f'<div class="timer">{cur}</div>' if isinstance(cur, int) else ""
        return f'<div class="frame">{head}<div class="quizq">{q}</div><div class="opts">{opts}</div>{timer}</div>', 0
    raise ValueError(layout)
