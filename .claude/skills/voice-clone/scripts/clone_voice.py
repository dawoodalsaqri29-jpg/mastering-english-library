#!/usr/bin/env python3
"""Free, local voice cloning (zero-shot): 5-15 s of someone's clean speech -> new English speech in that voice.

Engine: Kyutai Pocket TTS (ONNX export, int8) through sherpa-onnx. CPU only, ~3 s per sentence. English text.

  clone_voice.py setup                                          download the model to ~/stt (~200 MB)
  clone_voice.py enroll NAME REF_AUDIO [--start 0 --dur 12]     save a voice profile from any audio/video
  clone_voice.py say NAME "text" OUT.wav [--speed 1.0] [--final] speak; --final adds the brand polish + -16 LUFS
  clone_voice.py say NAME --file script.txt OUT.wav             one paragraph per line
  clone_voice.py list
Profiles live in ~/stt/voices/NAME.wav. Only clone voices you own or have written permission to use.
"""
import argparse, os, re, subprocess, sys, urllib.request, tarfile
import numpy as np, soundfile as sf

HOME = os.path.expanduser(os.environ.get("STT_HOME", "~/stt"))
NAME = "sherpa-onnx-pocket-tts-int8-2026-01-26"
URL = f"https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/{NAME}.tar.bz2"
VOICES = os.path.join(HOME, "voices")
POLISH = ("highpass=f=70,equalizer=f=180:t=q:w=1:g=2,equalizer=f=6500:t=q:w=1.5:g=-1.5,"
          "acompressor=threshold=-20dB:ratio=2.5:attack=10:release=150,loudnorm=I=-16:TP=-1.5:LRA=9")


def setup():
    os.makedirs(HOME, exist_ok=True)
    if not os.path.isdir(os.path.join(HOME, NAME)):
        tmp = os.path.join(HOME, NAME + ".tar.bz2")
        print("downloading Pocket TTS...", file=sys.stderr)
        urllib.request.urlretrieve(URL, tmp)
        with tarfile.open(tmp) as t:
            t.extractall(HOME)
        os.remove(tmp)
    print("voice cloning ready in", HOME)


def engine():
    import sherpa_onnx as s
    d = os.path.join(HOME, NAME)
    return s.OfflineTts(s.OfflineTtsConfig(model=s.OfflineTtsModelConfig(
        pocket=s.OfflineTtsPocketModelConfig(
            lm_flow=f"{d}/lm_flow.int8.onnx", lm_main=f"{d}/lm_main.int8.onnx", encoder=f"{d}/encoder.onnx",
            decoder=f"{d}/decoder.int8.onnx", text_conditioner=f"{d}/text_conditioner.onnx",
            vocab_json=f"{d}/vocab.json", token_scores_json=f"{d}/token_scores.json"),
        num_threads=os.cpu_count() or 2)))


def enroll(name, ref, start, dur):
    os.makedirs(VOICES, exist_ok=True)
    wav = os.path.join(VOICES, name + ".wav")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", str(start), "-t", str(dur), "-i", ref,
                    "-af", "highpass=f=70,afftdn=nf=-25,loudnorm=I=-18:TP=-2", "-ac", "1", "-ar", "24000", wav],
                   check=True)
    print(f"voice '{name}' saved ({wav})")


def say(name, text, out, speed, final):
    import sherpa_onnx as s
    wav = os.path.join(VOICES, name + ".wav")
    if not os.path.exists(wav):
        sys.exit(f"no voice '{name}'. Run: enroll {name} REF_AUDIO")
    ref, sr = sf.read(wav, dtype="float32")
    tts = engine()
    g = s.GenerationConfig()
    g.reference_audio, g.reference_sample_rate, g.speed = ref.tolist(), sr, speed
    chunks, rate = [], 24000
    for para in [p for p in text.split("\n") if p.strip()]:
        for sent in re.split(r"(?<=[.!?])\s+", para.strip()):  # sentence by sentence keeps the voice stable
            if sent:
                a = tts.generate(sent, g)
                rate = a.sample_rate
                chunks += [np.array(a.samples, np.float32), np.zeros(int(rate * 0.22), np.float32)]
        chunks.append(np.zeros(int(rate * 0.35), np.float32))
    raw = out + ".raw.wav" if final else out
    sf.write(raw, np.concatenate(chunks), rate)
    if final:
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", raw, "-af", POLISH, "-ar", "44100", "-ac", "2", out],
                       check=True)
        os.remove(raw)
    print(out)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sp = ap.add_subparsers(dest="cmd", required=True)
    sp.add_parser("setup"); sp.add_parser("list")
    p = sp.add_parser("enroll"); p.add_argument("name"); p.add_argument("ref")
    p.add_argument("--start", type=float, default=0); p.add_argument("--dur", type=float, default=12)
    p = sp.add_parser("say"); p.add_argument("name"); p.add_argument("text", nargs="?"); p.add_argument("out")
    p.add_argument("--file"); p.add_argument("--speed", type=float, default=1.0)
    p.add_argument("--final", action="store_true")
    a = ap.parse_args()
    if a.cmd == "setup":
        return setup()
    if a.cmd == "list":
        os.makedirs(VOICES, exist_ok=True)
        return print("\n".join(sorted(f[:-4] for f in os.listdir(VOICES) if f.endswith(".wav"))) or "(no voices)")
    if not os.path.isdir(os.path.join(HOME, NAME)):
        setup()
    if a.cmd == "enroll":
        enroll(a.name, a.ref, a.start, a.dur)
    else:
        text = open(a.file, encoding="utf-8").read() if a.file else a.text
        if not text:
            sys.exit("give the text or --file")
        say(a.name, text, a.out, a.speed, a.final)


if __name__ == "__main__":
    main()
