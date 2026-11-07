# Vertical (9:16) version of a section for Reels, TikTok and Shorts.
# Same plan file as build_section.py. Layout on 1080x1920:
#   top: story title in English and Arabic; middle: the picture (4:3 crop, Ken Burns) over a blurred copy
#   of itself; below: English subtitle box, then the Arabic subtitle box under it (kept above the
#   bottom 300px, where TikTok and Reels put their own buttons and captions).
# Usage: python3 build_vertical.py plan.json [out.mp4]
import subprocess, json, sys
plan = json.load(open(sys.argv[1])); FPS = 30
out_file = sys.argv[2] if len(sys.argv) > 2 else plan["out"].replace(".mp4", "-vertical.mp4")
TITLE_EN, TITLE_AR = plan.get("title_en", "The Lantern of Whispering Woods"), plan.get("title_ar", "فانوس الغابة الهامسة")
W, H, PW, PH, PY = 1080, 1920, 1080, 810, 330          # picture box size and top position
moves = {"in": ("1.0+0.10*on/{n}", "iw/2-(iw/zoom/2)", "ih/2-(ih/zoom/2)"),
         "in-up": ("1.0+0.10*on/{n}", "iw/2-(iw/zoom/2)", "ih*0.38-(ih/zoom/2)"),
         "out": ("1.12-0.10*on/{n}", "iw/2-(iw/zoom/2)", "ih/2-(ih/zoom/2)"),
         "pan-r": ("1.12", "(iw-iw/zoom)*on/{n}", "ih/2-(ih/zoom/2)"),
         "pan-l": ("1.12", "(iw-iw/zoom)*(1-on/{n})", "ih/2-(ih/zoom/2)"),
         "card": ("1.0+0.03*on/{n}", "iw/2-(iw/zoom/2)", "ih/2-(ih/zoom/2)")}
shots = plan["shots"]; files = []
for i, s in enumerate(shots):
    nxt = shots[i+1]["fade"] if i < len(shots) - 1 else 0
    d = (s["end"] - s["start"]) + nxt; n = int(round(d * FPS)); z, x, y = [m.format(n=n) for m in moves[s["move"]]]
    out = f"_v{i}.mp4"; files.append(out)
    fg = (f"scale=2880:2160:force_original_aspect_ratio=increase,crop=2880:2160,"
          f"zoompan=z='{z}':x='{x}':y='{y}':d={n}:s={PW}x{PH}:fps={FPS}")
    bg = f"scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H},gblur=sigma=40,eq=brightness=-0.18"
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-loop", "1", "-i", f"refs/{s['img']}", "-filter_complex",
        f"[0:v]split[a][b];[a]{bg},fps={FPS}[bg];[b]{fg}[fg];[bg][fg]overlay=0:{PY},format=yuv420p",
        "-t", f"{d:.3f}", "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", out], check=True)
fc = []; prev = "0:v"
for i in range(1, len(files)):
    fc.append(f"[{prev}][{i}:v]xfade=transition=fade:duration={shots[i]['fade']}:offset={shots[i]['start']:.3f}[x{i}]"); prev = f"x{i}"
total = plan["total"]
def ts(t): return f"{int(t//3600)}:{int(t%3600//60):02d}:{t%60:05.2f}"
box = "&H00F0F4F6,&H000000FF,&H00101A1F,&H8C0B1418,0,0,0,0,100,100,0,0,4,16,0"
ass = ["[Script Info]", "ScriptType: v4.00+", f"PlayResX: {W}", f"PlayResY: {H}", "WrapStyle: 0", "",
 "[V4+ Styles]", "Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding",
 "Style: TEn,Inter,50,&H00D8F0F6,&H000000FF,&H00101A1F,&H00000000,1,0,0,0,100,100,0,0,1,0,3,8,60,60,110,1",
 "Style: TAr,Noto Sans Arabic SemBd,58,&H009FD8E8,&H000000FF,&H00101A1F,&H00000000,0,0,0,0,100,100,0,0,1,0,3,8,60,60,190,1",
 f"Style: En,Inter,50,{box},8,60,60,{PY+PH+50},1",
 f"Style: Ar,Noto Sans Arabic SemBd,58,&H009FD8E8,&H000000FF,&H00101A1F,&H8C0B1418,0,0,0,0,100,100,0,0,4,16,0,8,60,60,{PY+PH+300},1", "",
 "[Events]", "Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text",
 f"Dialogue: 0,{ts(0)},{ts(total)},TEn,,0,0,0,,{TITLE_EN}",
 f"Dialogue: 0,{ts(0)},{ts(total)},TAr,,0,0,0,,{TITLE_AR}"]
for sub in plan["subs"]:
    st, en, tx = sub[:3]; ar = sub[3] if len(sub) > 3 else ""
    ass.append(f"Dialogue: 0,{ts(st)},{ts(en)},En,,0,0,0,,{{\\fad(180,180)}}{tx}")
    if ar: ass.append(f"Dialogue: 0,{ts(st)},{ts(en)},Ar,,0,0,0,,{{\\fad(180,180)}}{ar}")
open("_vsubs.ass", "w").write("\n".join(ass) + "\n")
fc.append(f"[{prev}]subtitles=_vsubs.ass:fontsdir=fonts-ttf,fade=t=in:st=0:d=0.8,fade=t=out:st={total-1:.2f}:d=1[v]")
dl = int(plan.get("audio_delay", 0) * 1000)
fc.append(f"[{len(files)}:a]adelay={dl}|{dl},apad,afade=t=out:st={total-1:.2f}:d=0.9[a]")
ins = []; [ins.extend(["-i", f]) for f in files]
subprocess.run(["ffmpeg", "-y", "-v", "error", *ins, "-i", plan["audio"], "-filter_complex", ";".join(fc), "-map", "[v]", "-map", "[a]",
  "-t", f"{total}", "-c:v", "libx264", "-preset", "medium", "-crf", "21", "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", out_file], check=True)
subprocess.run("rm -f _v[0-9]*.mp4", shell=True); print("ok", out_file)
