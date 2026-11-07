# Builds a story section video: Ken Burns shots synced to narration, crossfades, burned-in read-along subtitles.
import subprocess, json, sys
plan=json.load(open(sys.argv[1])); FPS=30
moves={"in":("1.0+0.10*on/{n}","iw/2-(iw/zoom/2)","ih/2-(ih/zoom/2)"),
       "in-up":("1.0+0.10*on/{n}","iw/2-(iw/zoom/2)","ih*0.38-(ih/zoom/2)"),
       "out":("1.12-0.10*on/{n}","iw/2-(iw/zoom/2)","ih/2-(ih/zoom/2)"),
       "pan-r":("1.12","(iw-iw/zoom)*on/{n}","ih/2-(ih/zoom/2)"),
       "pan-l":("1.12","(iw-iw/zoom)*(1-on/{n})","ih/2-(ih/zoom/2)"),
       "card":("1.0+0.03*on/{n}","iw/2-(iw/zoom/2)","ih/2-(ih/zoom/2)")}
shots=plan["shots"]; files=[]
for i,s in enumerate(shots):
    nxt=shots[i+1]["fade"] if i<len(shots)-1 else 0
    d=(s["end"]-s["start"])+nxt; n=int(round(d*FPS)); z,x,y=[m.format(n=n) for m in moves[s["move"]]]
    out=f"_s{i}.mp4"; files.append((out,d))
    subprocess.run(["ffmpeg","-y","-v","error","-loop","1","-i",f"refs/{s['img']}","-vf",
      f"scale=3840:2160:force_original_aspect_ratio=increase,crop=3840:2160,zoompan=z='{z}':x='{x}':y='{y}':d={n}:s=1920x1080:fps={FPS},format=yuv420p",
      "-t",f"{d:.3f}","-c:v","libx264","-preset","veryfast","-crf","18",out],check=True)
fc=[]; prev="0:v"
for i in range(1,len(files)):
    off=shots[i]["start"]
    fc.append(f"[{prev}][{i}:v]xfade=transition=fade:duration={shots[i]['fade']}:offset={off:.3f}[x{i}]"); prev=f"x{i}"
total=plan["total"]
# subtitles (ASS)
def ts(t): h=int(t//3600); m=int(t%3600//60); s=t%60; return f"{h}:{m:02d}:{s:05.2f}"
ass=["[Script Info]","ScriptType: v4.00+","PlayResX: 1920","PlayResY: 1080","WrapStyle: 0","",
 "[V4+ Styles]","Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding",
 "Style: Read,Inter,46,&H00F0F4F6,&H000000FF,&H00101A1F,&H8C0B1418,0,0,0,0,100,100,0,0,4,14,0,2,260,260,58,1","",
 "[Events]","Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text"]
for st,en,tx in plan["subs"]:
    ass.append(f"Dialogue: 0,{ts(st)},{ts(en)},Read,,0,0,0,,{{\\fad(180,180)}}{tx}")
open("_subs.ass","w").write("\n".join(ass)+"\n")
fc.append(f"[{prev}]subtitles=_subs.ass:fontsdir=fonts-ttf,fade=t=in:st=0:d=0.8,fade=t=out:st={total-1:.2f}:d=1[v]")
na=len(files)
fc.append(f"[{na}:a]adelay={int(plan.get('audio_delay',0)*1000)}|{int(plan.get('audio_delay',0)*1000)},apad,afade=t=out:st={total-1:.2f}:d=0.9[a]")
ins=[]; [ins.extend(["-i",f]) for f,_ in files]
subprocess.run(["ffmpeg","-y","-v","error",*ins,"-i",plan["audio"],"-filter_complex",";".join(fc),"-map","[v]","-map","[a]",
  "-t",f"{total}","-c:v","libx264","-preset","medium","-crf","20","-c:a","aac","-b:a","192k","-movflags","+faststart",plan["out"]],check=True)
subprocess.run("rm -f _s*.mp4",shell=True); print("ok", plan["out"])
