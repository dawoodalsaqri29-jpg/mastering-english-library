import subprocess, sys
FPS=30; X=0.6  # crossfade seconds
# (image, start, end, zoom expr kind)
shots=[("L-R5-whispering-woods.jpg",0.0,3.6,"in"),("L-R4-cottage.jpg",3.6,8.3,"in"),
       ("L-R1-noor.jpg",8.3,9.6,"out"),("L-R2-ember.jpg",9.6,11.2,"pan"),
       ("L-R3-elder-oak.jpg",11.2,14.9,"up"),("L-R6-misty-river.jpg",14.9,19.4,"pan"),
       ("L-R7-dark-hollow.jpg",19.4,24.1,"in"),("L-R8-heart-glade-unlit-edit.jpg",24.1,30.6,"slowin"),
       ("L-R8-heart-glade-lit.jpg",30.6,34.8,"slowin2")]
moves={"in":("1.0+0.10*on/{n}","iw/2-(iw/zoom/2)","ih/2-(ih/zoom/2)"),
       "out":("1.12-0.08*on/{n}","iw/2-(iw/zoom/2)","ih/3-(ih/zoom/3)"),
       "pan":("1.12","(iw-iw/zoom)*on/{n}","ih/2-(ih/zoom/2)"),
       "up":("1.08","iw/2-(iw/zoom/2)","(ih-ih/zoom)*(1-on/{n})"),
       "slowin":("1.0+0.08*on/{n}","iw/2-(iw/zoom/2)","ih*0.42-(ih/zoom/2)"),
       "slowin2":("1.08+0.04*on/{n}","iw/2-(iw/zoom/2)","ih*0.42-(ih/zoom/2)")}
files=[]
for i,(img,s,e,mv) in enumerate(shots):
    d=(e-s)+(X if i<len(shots)-1 else 0); n=int(round(d*FPS)); z,x,y=[m.format(n=n) for m in moves[mv]]
    out=f"h{i}.mp4"; files.append((out,d))
    subprocess.run(["ffmpeg","-y","-v","error","-loop","1","-i",f"refs/{img}","-vf",
      f"scale=3840:-2,zoompan=z='{z}':x='{x}':y='{y}':d={n}:s=1920x1080:fps={FPS},format=yuv420p",
      "-t",f"{d:.3f}","-c:v","libx264","-preset","veryfast","-crf","18",out],check=True)
inputs=[]; [inputs.extend(["-i",f]) for f,_ in files]
fc=[]; prev="0:v"; t=0
for i in range(1,len(files)):
    t+=files[i-1][1]-X
    lab=f"v{i}"; tr="fade" if i!=len(files)-1 else "fade"
    fc.append(f"[{prev}][{i}:v]xfade=transition={tr}:duration={X if i!=len(files)-1 else 1.6}:offset={t:.3f}[{lab}]"); prev=lab
total=shots[-1][2]
fc.append(f"[{prev}]fade=t=in:st=0:d=0.8,fade=t=out:st={total-1:.2f}:d=1[v]")
na=len(files)
fc.append(f"[{na}:a]adelay=600|600,apad,afade=t=out:st={total-1:.2f}:d=0.9[a]")
subprocess.run(["ffmpeg","-y","-v","error",*inputs,"-i","voice-HOOK.mp3","-filter_complex",";".join(fc),
  "-map","[v]","-map","[a]","-t",f"{total}","-c:v","libx264","-preset","medium","-crf","20","-c:a","aac","-b:a","192k",
  "-movflags","+faststart","lantern-hook.mp4"],check=True)
print("ok")
