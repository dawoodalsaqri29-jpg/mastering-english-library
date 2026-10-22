import json,subprocess,sys,re,numpy as np
def load(path):
    raw=subprocess.run(['ffmpeg','-v','error','-i',path,'-ac','1','-ar','16000','-f','s16le','-'],capture_output=True).stdout
    return np.frombuffer(raw,np.int16).astype(np.float32)/32768
def frames_db(x,sr=16000,hop=160):
    n=len(x)//hop; f=x[:n*hop].reshape(n,hop); return 20*np.log10(np.sqrt((f**2).mean(1))+1e-9)
def gaps(db,min_gap=0.12):
    sp=db[db>-60]; thr=np.percentile(sp,90)-32
    sil=db<thr; out=[]; i=0;n=len(db)
    while i<n:
        if sil[i]:
            j=i
            while j<n and sil[j]: j+=1
            if (j-i)*0.01>=min_gap and i>0 and j<n: out.append(((i+j)/2*0.01,(j-i)*0.01))
            i=j
        else: i+=1
    return out,thr
def weight(t): return len(re.sub(r'[^A-Za-z]','',t))+3*len(re.findall(r'[.,?!:;]',t))
def align(lines,gl,total):
    W=np.array([weight(t) for t in lines],float); 
    # candidate boundaries = gap centres; choose len(lines)-1 of them
    C=[0.0]+[g[0] for g in gl]+[total]; S=[0]+[g[1] for g in gl]+[0]
    n=len(lines); m=len(C)
    rate=total/W.sum()
    INF=1e18; dp=np.full((n+1,m),INF); bk=np.zeros((n+1,m),int); dp[0,0]=0
    for k in range(1,n+1):
        for j in range(1,m):
            if k==n and j!=m-1: continue
            if k<n and j==m-1: continue
            exp=W[k-1]*rate; best=INF;bi=0
            for i in range(max(0,j-60),j):
                if dp[k-1,i]>=INF: continue
                d=C[j]-C[i]; c=dp[k-1,i]+((d-exp)/exp)**2-(0.3*min(S[j],1.5) if k<n else 0)
                if c<best: best=c;bi=i
            dp[k,j]=best;bk[k,j]=bi
    j=m-1;b=[]
    for k in range(n,0,-1): i=bk[k,j]; b.append((C[i],C[j])); j=i
    b=b[::-1]; return b,dp[n,m-1]
if __name__=='__main__':
    L=json.load(open(sys.argv[2])); ids=json.loads(sys.argv[3])
    lines=[l['text'] for l in L if l['id'] in ids]
    x=load(sys.argv[1]); db=frames_db(x); total=len(x)/16000
    gl,thr=gaps(db)
    b,cost=align(lines,gl,total)
    r=[(e-s)/weight(t) for (s,e),t in zip(b,lines)]
    print('cost',round(cost,2),'ratio min/max',round(min(r)/np.median(r),2),round(max(r)/np.median(r),2))
    if len(sys.argv)>4:
        for (s,e),t in zip(b,lines): print(f'{s:7.2f} {e:7.2f} {t[:60]}')
