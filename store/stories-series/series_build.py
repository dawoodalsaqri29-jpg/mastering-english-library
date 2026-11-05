"""Build one illustrated A1/B1 story book PDF from series/stories/NN-slug.json + series/img/NN/*.jpg
usage: python3 series_build.py series/stories/09-speckled-band.json"""
import html, asyncio, sys, json, os
from playwright.async_api import async_playwright

NM = '/home/claude/reels/build/node_modules/@fontsource/'
E = html.escape
def br(s): return '<br>'.join(E(x) for x in s.split('\n'))

PAL = {  # accent, deep (cover bg), soft
 'amber': ('#E3B53A', '#2a1f12', '#fbf3e0'), 'crimson': ('#E2675A', '#2a1216', '#fbeeee'),
 'indigo': ('#8EA2FF', '#151a3a', '#eef0fb'), 'teal': ('#3CC0A8', '#0f2a2b', '#e9f6f3'),
 'emerald': ('#4CC27F', '#10261b', '#ebf6ee'), 'violet': ('#B48CFF', '#1d1433', '#f2eefb'),
 'rose': ('#F28AA8', '#2b1420', '#fbeef2'), 'gold': ('#E8C255', '#231c0d', '#fbf5e4'),
 'ice': ('#8FD3F0', '#0f2130', '#ecf5fa'), 'jade': ('#5FC9A0', '#0e2622', '#eaf6f1'),
 'copper': ('#E09060', '#2a170e', '#fbf0e8'), 'midnight': ('#9FB0E8', '#0d1226', '#eef0f8'),
}

def build(path):
    S = json.load(open(path)); n = S['n']; nn = f'{n:02d}'
    acc, deep, soft = PAL.get(S.get('palette', 'amber'), PAL['amber'])
    imgdir = os.path.abspath(f'series/img/{nn}')
    def im(i): return f'file://{imgdir}/p{i}.jpg'
    cover_img = f'file://{imgdir}/cover.jpg'
    css = f"""
@font-face{{font-family:Lora;font-weight:600;src:url({NM}lora/files/lora-latin-600-normal.woff2)}}
@font-face{{font-family:Lora;font-weight:700;src:url({NM}lora/files/lora-latin-700-normal.woff2)}}
@font-face{{font-family:Poppins;font-weight:500;src:url({NM}poppins/files/poppins-latin-500-normal.woff2)}}
@font-face{{font-family:Poppins;font-weight:700;src:url({NM}poppins/files/poppins-latin-700-normal.woff2)}}
@font-face{{font-family:Tajawal;font-weight:500;src:url({NM}tajawal/files/tajawal-arabic-500-normal.woff2)}}
@font-face{{font-family:Tajawal;font-weight:700;src:url({NM}tajawal/files/tajawal-arabic-700-normal.woff2)}}
@page{{size:148mm 210mm;margin:0}}
*{{box-sizing:border-box;margin:0;padding:0}}
body{{font-family:Lora,serif;color:#1F2A4D}}
.pg{{width:148mm;height:210mm;background:#F6F3EA;position:relative;overflow:hidden;page-break-after:always;padding:11mm 12mm 14mm}}
.ar{{font-family:Tajawal,sans-serif;direction:rtl;text-align:right}}
.tag{{font-family:Poppins;font-weight:700;font-size:8pt;letter-spacing:.12em;color:#23876B;text-transform:uppercase}}
.ft{{position:absolute;bottom:6mm;left:12mm;right:12mm;display:flex;justify-content:space-between;font-family:Poppins;font-size:7pt;color:#8a8fa3}}
.pic{{width:100%;border-radius:4mm;object-fit:cover;display:block;box-shadow:0 1.5mm 4mm rgba(31,42,77,.18)}}
.en{{font-weight:600;font-size:15.5pt;line-height:1.42;margin-top:5mm}}
.arT{{font-weight:500;font-size:12.5pt;line-height:1.75;color:#4a5370;margin-top:3mm;border-top:.3mm dashed #c9c3b0;padding-top:2.5mm}}
h1{{font-weight:700;font-size:15pt;line-height:1.25;margin:1mm 0 4mm}}
h1 small{{display:block;font-family:Tajawal;font-weight:700;font-size:11pt;color:#23876B;direction:rtl;text-align:right;margin-top:-6mm}}
.p{{font-size:12pt;line-height:1.58;margin-bottom:3mm;text-align:justify}}
.pa{{font-size:11.6pt;line-height:1.9;margin-bottom:3mm;color:#333b55}}
.wb{{background:#fff;border-radius:3mm;padding:3mm 4mm;border-left:1.5mm solid #E3B53A;margin-top:2mm}}
.wb .row{{display:flex;justify-content:space-between;gap:3mm;font-size:10pt;padding:1mm 0;border-bottom:.2mm solid #eee6d3}}
.wb .row:last-child{{border:0}}
.wb b{{font-family:Poppins;font-weight:700}}
.lvl{{display:inline-block;font-family:Poppins;font-weight:700;font-size:9pt;padding:1.2mm 3.5mm;border-radius:10mm;margin-right:2mm}}
"""
    T = S['title']; pages = []; cnt = [0]
    def foot(lv): return f'<div class="ft"><span>{E(T)} · {lv}</span><span>{cnt[0]}</span></div>'
    def add(body, lv='', style=''):
        cnt[0] += 1
        pages.append(f'<section class="pg" style="{style}">{body}{foot(lv) if lv else ""}</section>')

    tagline = E(S.get('series_tag') or 'English Story with Pictures')
    add(f'''<img src="{cover_img}" style="width:100%;height:132mm;object-fit:cover;object-position:50% 35%;display:block">
<div style="position:absolute;top:118mm;left:0;right:0;height:16mm;background:linear-gradient(transparent,{deep})"></div>
<div style="padding:5mm 12mm 0">
 <div class="tag" style="color:{acc}">{tagline}</div>
 <div style="font-weight:700;font-size:{25 if len(T)<24 else 21}pt;line-height:1.08;margin:2mm 0 3mm;color:#F6F3EA">{E(T)}</div>
 <div class="ar" style="font-weight:700;font-size:12.5pt;color:#F6F3EA">{E(S.get('subtitle_ar',''))}</div>
 <div class="ar" style="font-size:10pt;color:#c6cad8;margin-top:1mm">قصة إنجليزية مصوّرة مع الترجمة العربية</div>
 <div style="margin-top:3.5mm"><span class="lvl" style="background:{acc};color:{deep}">A1 Beginner</span><span class="lvl" style="background:#23876B;color:#fff">B1 Intermediate</span></div>
 <div style="position:absolute;bottom:7mm;left:12mm;right:12mm;display:flex;justify-content:space-between;font-family:Poppins;font-size:7.5pt;color:#aab0c4"><span>Mastering English Library</span><span>FREE</span></div>
</div>''', style=f'background:{deep};padding:0')

    add(f'''<div class="tag">How to use this book</div>
<div class="ar" style="margin-top:4mm">
<h2 style="font-size:17pt;margin-bottom:4mm">كيف تستخدم هذا الكتاب؟</h2>
<p style="font-size:11.5pt;line-height:1.95">نفس القصة مكتوبة <b>بمستويين</b>:</p>
<div class="wb" style="border-left:0;border-right:1.5mm solid #E3B53A;margin:3mm 0"><p style="font-size:11.5pt;line-height:1.9"><b>الجزء الأول (مبتدئ A1):</b> جمل قصيرة وسهلة، كل صفحة فيها صورة وجملتين بالإنجليزي والترجمة تحتها.</p></div>
<div class="wb" style="border-left:0;border-right:1.5mm solid #23876B;margin:3mm 0"><p style="font-size:11.5pt;line-height:1.9"><b>الجزء الثاني (متوسط B1):</b> نفس الأحداث بتفاصيل أكثر، خمسة فصول، كل فصل فيه النص الإنجليزي ثم الترجمة وكلمات مهمة.</p></div>
<p style="font-size:11.5pt;line-height:1.95;margin-top:4mm"><b>الطريقة الأفضل:</b></p>
<p style="font-size:11.5pt;line-height:2">١. اقرأ النص الإنجليزي أولًا بدون ما تشوف الترجمة.<br>٢. خمّن معنى الكلمات من الصورة.<br>٣. بعدين تأكد من الترجمة.<br>٤. اقرأ القصة بصوت عالي مرة ثانية.<br>٥. حل الأسئلة في آخر كل جزء، والإجابات في آخر الكتاب.</p>
<p style="font-size:11.5pt;line-height:1.95;margin-top:4mm">لو أنت مبتدئ ابدأ بالجزء الأول. لو قريته بسهولة، انتقل للجزء الثاني 💪</p>
<p style="font-size:9.5pt;line-height:1.8;margin-top:5mm;color:#8a8fa3">{E(S.get('based_on',''))}</p>
</div>''', 'Guide')

    def divider(lv, title, ar, color, txtcol, img):
        add(f'''<div style="height:100%;display:flex;flex-direction:column;justify-content:center;text-align:center">
<div class="lvl" style="background:{color};color:{txtcol};align-self:center;font-size:12pt">{lv}</div>
<div style="font-weight:700;font-size:24pt;margin:5mm 0">{title}</div>
<div class="ar" style="text-align:center;font-weight:700;font-size:14pt;color:#23876B">{ar}</div>
<img src="{img}" class="pic" style="width:74mm;height:92mm;margin:8mm auto 0">
</div>''', lv.split()[-1])

    divider('Part 1 · A1', 'Beginner Story', 'الجزء الأول: القصة للمبتدئين', acc, deep, im(0))
    for i, p in enumerate(S['a1']):
        add(f'''<img src="{im(i)}" class="pic" style="height:112mm">
<div class="en">{br(p["en"])}</div><div class="ar arT">{br(p["ar"])}</div>''', 'A1')

    rows = ''.join(f'<div class="row"><b>{E(w)}</b><span class="ar">{E(a)}</span></div>' for w, a in S['a1_words'])
    add(f'''<div class="tag">A1 · New words</div><h1>12 words from the story<small>١٢ كلمة من القصة</small></h1>
<div class="wb">{rows}</div>''', 'A1')
    q = ''.join(f'<div class="row"><span>{i+1}. {E(s)}</span><b style="white-space:nowrap">True / False</b></div>' for i, (s, t) in enumerate(S['a1_quiz']))
    add(f'''<div class="tag">A1 · Quiz</div><h1>True or False?<small>صح أو خطأ؟</small></h1>
<div class="wb" style="border-color:#23876B">{q}</div>
<div class="ar" style="margin-top:6mm;font-size:11pt;line-height:1.9;color:#4a5370">اقرأ كل جملة واختر <b>صح</b> أو <b>خطأ</b>. الإجابات في آخر صفحة.</div>
<img src="{im(9)}" class="pic" style="width:66mm;height:82mm;margin:7mm auto 0">''', 'A1')

    divider('Part 2 · B1', 'Intermediate Story', 'الجزء الثاني: القصة للمستوى المتوسط', '#23876B', '#fff', 'file://' + imgdir + '/cover.jpg')
    for ch in S['b1']:
        a, b = ch['pics'][:2]
        add(f'''<div class="tag">B1</div><h1>{E(ch["title"])}</h1><div class="ar" style="font-weight:700;font-size:11pt;color:#23876B;margin:-3mm 0 3mm">{E(ch["title_ar"])}</div>
<img src="{im(a)}" class="pic" style="height:80mm;object-position:50% 35%;margin-bottom:4mm">
<p class="p">{E(ch["en"][0])}</p>''', 'B1')
        add(f'''<img src="{im(b)}" class="pic" style="height:90mm;object-position:50% 35%;margin-bottom:4mm">
<p class="p">{E(ch["en"][1])}</p>''', 'B1')
        rows = ''.join(f'<div class="row"><b>{E(w)}</b><span class="ar">{E(x)}</span></div>' for w, x in ch['words'])
        add(f'''<div class="tag">B1 · الترجمة</div>
<div class="ar" style="margin-top:3mm">{''.join(f'<p class="pa">{E(x)}</p>' for x in ch["ar"])}</div>
<div class="wb">{rows}</div>''', 'B1')

    q = ''
    for i, (s, opts, a) in enumerate(S['b1_quiz']):
        q += f'<div style="margin-bottom:3.5mm"><div style="font-weight:700;font-size:10.8pt">{i+1}. {E(s)}</div><div style="font-family:Poppins;font-size:9.5pt;margin-top:1mm">' + ' &nbsp; '.join(f'{"abc"[j]}) {E(o)}' for j, o in enumerate(opts)) + '</div></div>'
    add(f'''<div class="tag">B1 · Quiz</div><h1>Check your understanding<small>اختبر فهمك</small></h1>
<div class="wb" style="border-color:#23876B">{q}</div>
<div class="tag" style="margin-top:6mm">Talk about it</div>
<p class="p" style="margin-top:2mm">{E(S["talk_en"])}</p>
<p class="ar pa">{E(S["talk_ar"])}</p>''', 'B1')

    ans1 = ' · '.join(f'{i+1}) {"True" if t else "False"}' for i, (s, t) in enumerate(S['a1_quiz']))
    ans2 = ' · '.join(f'{i+1}) {"abc"[a]}' for i, (s, o, a) in enumerate(S['b1_quiz']))
    add(f'''<div class="tag">Answers</div><h1>Answer key<small>الإجابات</small></h1>
<div class="wb"><div class="row"><b>A1</b><span style="font-family:Poppins;font-size:9.5pt">{ans1}</span></div>
<div class="row"><b>B1</b><span style="font-family:Poppins;font-size:9.5pt">{ans2}</span></div></div>
<img src="{im(9)}" class="pic" style="height:70mm;margin-top:8mm">
<div class="ar" style="margin-top:6mm;text-align:center;font-size:12pt;line-height:1.9">
<b>عاشت يدك! خلّصت القصة كاملة 👏</b><br>فيه قصص مصوّرة مجانية ثانية في الموقع:</div>
<div style="text-align:center;font-family:Poppins;font-weight:700;font-size:10.5pt;margin-top:1mm">masteringenglishlibrary.com</div>
<div style="text-align:center;font-family:Poppins;font-size:9.5pt;margin-top:1mm;color:#4a5370">Instagram: @dawood_alsaqri</div>''', 'Answers')

    doc = f'<!doctype html><html><head><meta charset="utf-8"><style>{css}</style></head><body>{"".join(pages)}</body></html>'
    os.makedirs('series/out', exist_ok=True)
    hp = os.path.abspath(f'series/out/{nn}-{S["slug"]}.html'); open(hp, 'w').write(doc)
    pdf = os.path.abspath(f'series/out/{nn}-{S["slug"]}.pdf')
    async def main():
        async with async_playwright() as p:
            b = await p.chromium.launch(); pg = await b.new_page()
            await pg.goto('file://' + hp); await pg.wait_for_timeout(800)
            await pg.pdf(path=pdf, width='148mm', height='210mm', print_background=True)
            await b.close()
    asyncio.run(main())
    return pdf, cnt[0]

if __name__ == '__main__':
    for f in sys.argv[1:]: print(build(f))
