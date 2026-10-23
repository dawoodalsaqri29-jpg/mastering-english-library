from kokoro_onnx import Kokoro
import soundfile as sf, numpy as np, json
k = Kokoro("/home/claude/models/kokoro/kokoro-v1.0.onnx", "/home/claude/models/kokoro/voices-v1.0.bin")
def build(name, parts, sp=0.92):
    out=[]; marks=[]; sr=24000; t=0.12; out.append(np.zeros(int(0.12*sr)))
    for text,pause in parts:
        a, sr = k.create(text, voice="bf_lily", speed=sp, lang="en-gb")
        nz=np.where(np.abs(a)>0.01)[0]; a=a[max(nz[0]-200,0):nz[-1]+400]
        marks.append({"text":text,"t":round(t,3),"end":round(t+len(a)/sr,3)}); out.append(a); t+=len(a)/sr
        out.append(np.zeros(int(pause*sr))); t+=pause
    sf.write(f"{name}_base.wav", np.concatenate(out), sr); return marks
M={}
M["l2"]=build("l2",[("Look! Sheep!",0.45),("One,",0.3),("two,",0.3),("three sheep!",0.3)])
M["l4"]=build("l4",[("It's going down.",0.4),("It's a sunset!",0.35),("So beautiful.",0.35)],0.9)
json.dump(M,open("marks.json","w"),indent=1); print(M)
