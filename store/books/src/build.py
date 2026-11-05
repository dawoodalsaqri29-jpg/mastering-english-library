import html, asyncio, sys
from content import *
from playwright.async_api import async_playwright

NM = '/home/claude/reels/build/node_modules/@fontsource/'
E = html.escape
def br(s): return '<br>'.join(E(x) for x in s.split('\n'))

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
.p{{font-size:12.6pt;line-height:1.6;margin-bottom:3mm;text-align:justify}}
.pa{{font-size:12pt;line-height:1.9;margin-bottom:3mm;color:#333b55}}
.wb{{background:#fff;border-radius:3mm;padding:3mm 4mm;border-left:1.5mm solid #E3B53A;margin-top:2mm}}
.wb .row{{display:flex;justify-content:space-between;font-size:10pt;padding:1mm 0;border-bottom:.2mm solid #eee6d3}}
.wb .row:last-child{{border:0}}
.wb b{{font-family:Poppins;font-weight:700}}
.cover{{background:#1F2A4D;color:#F6F3EA;padding:0}}
.lvl{{display:inline-block;font-family:Poppins;font-weight:700;font-size:9pt;padding:1.2mm 3.5mm;border-radius:10mm;margin-right:2mm}}
"""

def foot(n, lv): return f'<div class="ft"><span>Mia and the Glowing Map · {lv}</span><span>{n}</span></div>'

pages = []; n = [0]
def add(body, lv='', cls=''):
    n[0] += 1
    pages.append(f'<section class="pg {cls}">{body}{foot(n[0], lv) if lv else ""}</section>')

# cover
add(f'''<img src="img/g2_04.jpg" style="width:100%;height:128mm;object-fit:cover;object-position:50% 30%">
<div style="padding:7mm 12mm">
 <div class="tag" style="color:#E3B53A">English Story with Pictures</div>
 <div style="font-weight:700;font-size:27pt;line-height:1.08;margin:2mm 0 3mm">Mia and the<br><span style="color:#E3B53A">Glowing Map</span></div>
 <div class="ar" style="font-weight:700;font-size:13pt;color:#F6F3EA">قصة إنجليزية مصوّرة مع الترجمة العربية</div>
 <div style="margin-top:4mm"><span class="lvl" style="background:#E3B53A;color:#1F2A4D">A1 Beginner</span><span class="lvl" style="background:#23876B;color:#fff">B1 Intermediate</span></div>
 <div style="position:absolute;bottom:7mm;left:12mm;font-family:Poppins;font-size:8pt;color:#aab0c4">Mastering English · Dawood Alsaqri</div>
</div>''', cls='cover')

# how to use
add('''<div class="tag">How to use this book</div>
<div class="ar" style="margin-top:4mm">
<h2 style="font-size:17pt;margin-bottom:4mm">كيف تستخدم هذا الكتاب؟</h2>
<p style="font-size:11.5pt;line-height:1.95">نفس القصة مكتوبة <b>بمستويين</b>:</p>
<div class="wb" style="border-left:0;border-right:1.5mm solid #E3B53A;margin:3mm 0"><p style="font-size:11.5pt;line-height:1.9"><b>الجزء الأول — A1 (مبتدئ):</b> جمل قصيرة وسهلة، كل صفحة صورة + جملتين بالإنجليزي + الترجمة تحتها.</p></div>
<div class="wb" style="border-left:0;border-right:1.5mm solid #23876B;margin:3mm 0"><p style="font-size:11.5pt;line-height:1.9"><b>الجزء الثاني — B1 (متوسط):</b> نفس الأحداث بتفاصيل أكثر، خمسة فصول، كل فصل فيه النص الإنجليزي ثم الترجمة وكلمات مهمة.</p></div>
<p style="font-size:11.5pt;line-height:1.95;margin-top:4mm"><b>الطريقة الأفضل:</b></p>
<p style="font-size:11.5pt;line-height:2">١. اقرأ النص الإنجليزي أولًا بدون ما تشوف الترجمة.<br>٢. خمّن معنى الكلمات من الصورة.<br>٣. بعدين تأكد من الترجمة.<br>٤. اقرأ القصة بصوت عالي مرة ثانية.<br>٥. حل الأسئلة في آخر كل جزء، والإجابات في آخر الكتاب.</p>
<p style="font-size:11.5pt;line-height:1.95;margin-top:4mm">لو أنت مبتدئ ابدأ بـ A1. لو قريتها بسهولة، انتقل لـ B1 💪</p>
</div>''', 'Guide')

# A1 divider
add('''<div style="height:100%;display:flex;flex-direction:column;justify-content:center;text-align:center">
<div class="lvl" style="background:#E3B53A;color:#1F2A4D;align-self:center;font-size:12pt">Part 1 · A1</div>
<div style="font-weight:700;font-size:24pt;margin:5mm 0">Beginner Story</div>
<div class="ar" style="text-align:center;font-weight:700;font-size:14pt;color:#23876B">الجزء الأول: القصة للمبتدئين</div>
<img src="img/g1_01.jpg" class="pic" style="width:70mm;height:88mm;margin:8mm auto 0">
</div>''', 'A1')

for img, en, ar in A1:
    add(f'''<img src="img/{img}.jpg" class="pic" style="height:112mm">
<div class="en">{br(en)}</div><div class="ar arT">{br(ar)}</div>''', 'A1')

rows = ''.join(f'<div class="row"><b>{E(w)}</b><span class="ar">{E(a)}</span></div>' for w, a in A1_WORDS)
add(f'''<div class="tag">A1 · New words</div><h1>12 words from the story<small>١٢ كلمة من القصة</small></h1>
<div class="wb">{rows}</div>''', 'A1')
q = ''.join(f'<div class="row"><span>{i+1}. {E(s)}</span><b>True / False</b></div>' for i, (s, t) in enumerate(A1_QUIZ))
add(f'''<div class="tag">A1 · Quiz</div><h1>True or False?<small>صح أو خطأ؟</small></h1>
<div class="wb" style="border-color:#23876B">{q}</div>
<div class="ar" style="margin-top:6mm;font-size:11pt;line-height:1.9;color:#4a5370">اقرأ كل جملة واختر <b>True</b> (صح) أو <b>False</b> (خطأ). الإجابات في آخر صفحة.</div>
<img src="img/g4_10.jpg" class="pic" style="width:62mm;height:78mm;margin:7mm auto 0">''', 'A1')

# B1 divider
add('''<div style="height:100%;display:flex;flex-direction:column;justify-content:center;text-align:center">
<div class="lvl" style="background:#23876B;color:#fff;align-self:center;font-size:12pt">Part 2 · B1</div>
<div style="font-weight:700;font-size:24pt;margin:5mm 0">Intermediate Story</div>
<div class="ar" style="text-align:center;font-weight:700;font-size:14pt;color:#23876B">الجزء الثاني: القصة للمستوى المتوسط</div>
<img src="img/g3_04.jpg" class="pic" style="width:70mm;height:88mm;margin:8mm auto 0">
</div>''', 'B1')

for t, tar, imgs, ens, ars, words in B1:
    add(f'''<div class="tag">B1</div><h1>{E(t)}</h1><div class="ar" style="font-weight:700;font-size:11pt;color:#23876B;margin:-3mm 0 3mm">{E(tar)}</div>
<img src="img/{imgs[0]}.jpg" class="pic" style="height:84mm;object-position:50% 35%;margin-bottom:4mm">
<p class="p">{E(ens[0])}</p>''', 'B1')
    add(f'''<img src="img/{imgs[1]}.jpg" class="pic" style="height:{80 if len(imgs)>2 else 92}mm;object-position:50% 35%;margin-bottom:4mm">
<p class="p">{E(ens[1])}</p>''', 'B1')
    rows = ''.join(f'<div class="row"><b>{E(w)}</b><span class="ar">{E(a)}</span></div>' for w, a in words)
    extra = f'<img src="img/{imgs[2]}.jpg" class="pic" style="height:46mm;object-position:50% 40%;margin-top:3mm">' if len(imgs) > 2 else ''
    add(f'''<div class="tag">B1 · الترجمة</div>
<div class="ar" style="margin-top:3mm">{''.join(f'<p class="pa">{E(a)}</p>' for a in ars)}</div>
<div class="wb">{rows}</div>{extra}''', 'B1')

q = ''
for i, (s, opts, a) in enumerate(B1_QUIZ):
    q += f'<div style="margin-bottom:3.5mm"><div style="font-weight:700;font-size:10.8pt">{i+1}. {E(s)}</div><div style="font-family:Poppins;font-size:9.5pt;margin-top:1mm">' + ' &nbsp; '.join(f'{"abc"[j]}) {E(o)}' for j, o in enumerate(opts)) + '</div></div>'
add(f'''<div class="tag">B1 · Quiz</div><h1>Check your understanding<small>اختبر فهمك</small></h1>
<div class="wb" style="border-color:#23876B">{q}</div>
<div class="tag" style="margin-top:6mm">Talk about it</div>
<p class="p" style="margin-top:2mm">If you could leave one treasure in a box for the next brave child, what would it be? Why? Write three sentences.</p>
<p class="ar pa">لو تقدر تترك كنز واحد في الصندوق للطفل الشجاع اللي بعدك، وش بيكون؟ ليش؟ اكتب ثلاث جمل بالإنجليزي.</p>''', 'B1')

ans1 = ' · '.join(f'{i+1}) {"True" if t else "False"}' for i, (s, t) in enumerate(A1_QUIZ))
ans2 = ' · '.join(f'{i+1}) {"abc"[a]}' for i, (s, o, a) in enumerate(B1_QUIZ))
add(f'''<div class="tag">Answers</div><h1>Answer key<small>الإجابات</small></h1>
<div class="wb"><div class="row"><b>A1</b><span style="font-family:Poppins;font-size:9.5pt">{ans1}</span></div>
<div class="row"><b>B1</b><span style="font-family:Poppins;font-size:9.5pt">{ans2}</span></div></div>
<img src="img/g8_21.jpg" class="pic" style="height:70mm;margin-top:8mm">
<div class="ar" style="margin-top:6mm;text-align:center;font-size:12pt;line-height:1.9">
<b>عاشت يدك! خلّصت القصة كاملة 👏</b><br>تبي قصص ودروس أكثر؟ تابعنا على إنستغرام</div>
<div style="text-align:center;font-family:Poppins;font-weight:700;font-size:11pt;margin-top:1mm">@dawood_alsaqri</div>''', 'Answers')

doc = f'<!doctype html><html><head><meta charset="utf-8"><style>{css}</style></head><body>{"".join(pages)}</body></html>'
open('/home/claude/book/book.html', 'w').write(doc)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(); pg = await b.new_page()
        await pg.goto('file:///home/claude/book/book.html'); await pg.wait_for_timeout(800)
        await pg.pdf(path='/home/claude/book/Mia-and-the-Glowing-Map-A1-B1.pdf', width='148mm', height='210mm', print_background=True)
        await b.close()
asyncio.run(main()); print('pages', n[0])
