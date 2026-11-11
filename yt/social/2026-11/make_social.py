# Build 9:16 4K social versions with burned English + Arabic subtitles, plus .en.srt / .ar.srt files.
# usage: python3 make_social.py [style ...]
import json, subprocess, os, sys
D = '/home/claude/demo'
V = {**json.load(open(f'{D}/videos.json')), **json.load(open(f'{D}/videos2.json'))}
TITLES = {
 'anime': ('Stop saying "I\'m fine"', 'قل شيئًا أفضل من: أنا بخير'),
 'archival-doc': ('How English got its dictionaries', 'كيف حصلت الإنجليزية على قواميسها'),
 'ink-anatomy': ('Train your English like a muscle', 'درّب إنجليزيتك كأنها عضلة'),
 'map-reveal': ('Where English lives', 'أين تعيش اللغة الإنجليزية'),
 'painted-history': ('The battle that changed English', 'المعركة التي غيّرت الإنجليزية'),
 'pictogram': ('Afraid to speak English?', 'تخاف أن تتكلم الإنجليزية؟'),
 'stick-figure': ('What if you thought in English?', 'ماذا لو فكّرت بالإنجليزية؟'),
 'cartoon': ('Make or Do?', 'الفرق بين الفعلين في دقيقة'),
 'chibi-history': ('Words born in war', 'كلمات وُلدت في الحرب'),
 'city-timelapse': ('Hamlet, village, town, city', 'من النجع إلى المدينة'),
 'comic-book': ('Never give up', 'لا تستسلم أبدًا'),
 'doodle-world': ('Practise English every day', 'تدرّب على الإنجليزية كل يوم'),
 'flat-vector': ('How many words do you need?', 'كم كلمة تحتاج فعلًا؟'),
 'founder-story': ('Why Americans spell it "color"', 'قصة التهجئة الأمريكية'),
 'isometric': ('How a word enters the dictionary', 'كيف تدخل الكلمة إلى القاموس'),
 'pixel-quest': ('Level up your English', 'ارتقِ بمستواك في الإنجليزية'),
 'stopmotion-paper': ('English words from Arabic', 'كلمات إنجليزية أصلها عربي'),
 'storybook': ('The Lost Word: a short story', 'قصة قصيرة: الكلمة الضائعة'),
 'whiteboard-hand': ('Remember any word', 'كيف تتذكّر أي كلمة'),
}
AR = {}; cur = None
for line in open(f'{D}/ar_lines.txt', encoding='utf-8'):
    line = line.rstrip('\n')
    if line.startswith('## '): cur = line[3:].strip(); AR[cur] = []
    elif line.strip(): AR[cur].append(line.strip())

def split(s): return [x.strip() for x in s.replace('? ', '?|').replace('. ', '.|').replace('! ', '!|').split('|') if x.strip()]
def dur(p): return float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', p], capture_output=True, text=True).stdout)
def ts_srt(x): h=int(x//3600); m=int(x%3600//60); s=x%60; return f"{h:02}:{m:02}:{int(s):02},{int((s%1)*1000):03}"
def ts_ass(x): h=int(x//3600); m=int(x%3600//60); s=x%60; return f"{h}:{m:02}:{s:05.2f}"
def esc(t): return t.replace('{', '(').replace('}', ')')

os.makedirs(f'{D}/social', exist_ok=True)
for st in (sys.argv[1:] or list(TITLES)):
    scenes = V[st]; ar = AR[st]; k = 0; t_acc = 0.0; cues = []
    for i, sc in enumerate(scenes, 1):
        d = dur(f'{D}/v_{st}/s{i}.mp4'); sents = split(sc['say'])
        span0, span1 = t_acc + 0.4, t_acc + d - 0.8; L = sum(len(s) for s in sents); t = span0
        for s in sents:
            dd = (span1 - span0) * len(s) / L
            cues.append((t, t + dd, s, ar[k])); k += 1; t += dd
        t_acc += d
    assert k == len(ar), (st, k, len(ar))
    open(f'{D}/social/{st}.en.srt', 'w').write(''.join(f"{n}\n{ts_srt(a)} --> {ts_srt(b)}\n{e}\n\n" for n, (a, b, e, r) in enumerate(cues, 1)))
    open(f'{D}/social/{st}.ar.srt', 'w', encoding='utf-8').write(''.join(f"{n}\n{ts_srt(a)} --> {ts_srt(b)}\n{r}\n\n" for n, (a, b, e, r) in enumerate(cues, 1)))
    te, ta = TITLES[st]
    ass = f"""[Script Info]
ScriptType: v4.00+
PlayResX: 2160
PlayResY: 3840
WrapStyle: 0

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Sub,DejaVu Sans,92,&H00FFFFFF,&H00FFFFFF,&H00000000,&H96000000,1,0,0,0,100,100,0,0,1,7,3,8,150,150,2400,1
Style: Title,DejaVu Sans,128,&H00FFFFFF,&H00FFFFFF,&H00000000,&H96000000,1,0,0,0,100,100,0,0,1,8,4,8,120,120,360,1
Style: Brand,DejaVu Sans,64,&H00FFFFFF,&H00FFFFFF,&H00000000,&H96000000,1,0,0,0,100,100,0,0,1,4,2,2,100,100,170,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,0:00:00.00,{ts_ass(t_acc)},Title,,0,0,0,,{esc(te)}\\N{{\\c&H5ACFFF&\\fs112}}{esc(ta)}
Dialogue: 0,0:00:00.00,{ts_ass(t_acc)},Brand,,0,0,0,,Mastering English Library {{\\c&H5ACFFF&}}@dawood_alsaqri
"""
    for a, b, e, r in cues:
        ass += f"Dialogue: 0,{ts_ass(a)},{ts_ass(b)},Sub,,0,0,0,,{esc(e)}\\N{{\\c&H5ACFFF&\\fs88}}{esc(r)}\n"
    open(f'{D}/social/{st}.ass', 'w', encoding='utf-8').write(ass)
    src = f'{D}/out/{st}_1080p.mp4'
    fc = (f"[0:v]scale=2160:3840:force_original_aspect_ratio=increase,crop=2160:3840,boxblur=30:3,eq=brightness=-0.18[bg];"
          f"[0:v]scale=2160:-2:flags=lanczos[fg];[bg][fg]overlay=0:1020,ass={D}/social/{st}.ass")
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', src, '-filter_complex', fc, '-c:v', 'libx264', '-preset', 'veryfast',
                    '-crf', '24', '-threads', '2', '-pix_fmt', 'yuv420p', '-r', '30', '-c:a', 'aac', '-b:a', '160k',
                    '-movflags', '+faststart', f'{D}/social/{st}_vertical_4K.mp4'], check=True)
    print('ok', st, round(t_acc, 1), 's', f"{os.path.getsize(f'{D}/social/{st}_vertical_4K.mp4')/1e6:.0f}MB", flush=True)
