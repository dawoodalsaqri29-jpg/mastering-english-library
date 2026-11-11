#!/usr/bin/env python3
# Synth bed + SFX, timed to the same beats as scene.js. usage: make_audio.py out.wav
import sys, wave, numpy as np
SR=44100; D=10.0; N=int(SR*D); T=np.arange(N)/SR; rng=np.random.default_rng(7)
mix=np.zeros((N,2))
def add(sig,at,g=1.0,pan=0.0):
    i=int(at*SR); sig=sig[:max(0,N-i)]
    mix[i:i+len(sig),0]+=sig*g*(1-pan*.6); mix[i:i+len(sig),1]+=sig*g*(1+pan*.6)
def lp(x,k):  # one-pole via exponential kernel
    h=np.exp(-np.arange(int(5/k))*k); h/=h.sum(); return np.convolve(x,h,mode='same')
def tick(f=3200,dur=.035):
    t=np.arange(int(dur*SR))/SR; return (np.sin(2*np.pi*f*t)+.6*np.sin(2*np.pi*f*1.51*t)+.5*rng.standard_normal(len(t)))*np.exp(-t*170)
def whoosh(dur=.45):
    n=int(dur*SR); x=rng.standard_normal(n); e=np.sin(np.pi*np.linspace(0,1,n))**2
    return (x-lp(x,.05))*e*.5+lp(x,.05)*e*2
def slam(f=62,dur=.7):
    t=np.arange(int(dur*SR))/SR; ch=rng.standard_normal(len(t))*np.exp(-t*55)
    m=sum(a*np.sin(2*np.pi*fr*t)*np.exp(-t*d) for fr,a,d in [(1180,.28,13),(1890,.2,19),(2740,.14,26),(4310,.1,34)])
    return np.sin(2*np.pi*f*t*np.exp(-t*1.3))*np.exp(-t*7)*1.5+ch*.5+m
def pad(fs,at,dur,g):
    t=np.arange(int(dur*SR))/SR; e=np.minimum(t/.06,1)*np.minimum((dur-t)/.25,1)
    x=sum(np.sin(2*np.pi*f*t)+.35*np.sin(4*np.pi*f*t)+.14*np.sin(6*np.pi*f*t) for f in fs)/len(fs)
    add(x*e,at,g)
# Chords: rise with the build, resolve on the title.
C=[(0,1.4,[55,110,164.8,220]),(1.4,1.4,[65.4,130.8,196,261.6]),(2.8,1.6,[73.4,146.8,220,293.7]),(4.4,1.2,[82.4,164.8,247,329.6]),
   (5.6,1.4,[55,110,220,329.6]),(7,1.4,[43.65,87.3,174.6,349.2]),(8.4,1.6,[55,110,220,277.2,329.6,440])]
for at,d,f in C: pad(f,at,d,.11)
# Ticks: 4 per second, louder when the watch is alive.
for k in range(40):
    add(tick(3200 if k%2 else 2500),k*.25,.16 if k/4<7 else .24,.25 if k%2 else -.25)
for b in [1.4,2.8,4.4,5.6,7.0,8.4]: add(whoosh(),b-.28,.3)
add(slam(70,.5),0,.5)                       # gear lands
for k,at in enumerate([1.4,1.5]): add(slam(150+60*k,.25),at,.35)
for k,at in enumerate([2.86,2.94,3.02,3.1]): add(tick(1700+300*k,.09),at,.5)
for k,at in enumerate([5.75,5.98,6.2,6.42,6.64]): add(slam(58+6*k),at,.62)
add(slam(44,1.1),7.25,.95)                  # dial
for k in range(14): add(tick(4200,.018),7.3+(k/14)**1.6*.95,.22)  # hands whip
add(slam(90,.3),8.25,.45)
t=np.arange(int(1.6*SR))/SR                 # title shimmer
add(sum(np.sin(2*np.pi*f*t)*np.exp(-t*(1.6+i*.5)) for i,f in enumerate([880,1320,1760,2640]))*.1,8.7,1)
# Simple room: two short echoes.
for dly,g in [(.031,.22),(.083,.13),(.149,.07)]:
    i=int(dly*SR); wet=np.zeros_like(mix); wet[i:]=mix[:-i]; mix=mix+wet*g
mix[-int(.2*SR):]*=np.linspace(1,0,int(.2*SR))[:,None]
mix/=np.abs(mix).max()*1.12
w=wave.open(sys.argv[1],'wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((mix*32767).astype('<i2').tobytes()); w.close()
print('audio ok')
