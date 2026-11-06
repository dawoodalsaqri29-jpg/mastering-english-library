#!/usr/bin/env python3
"""OpenWhispr's local speech engine, headless: the same sherpa-onnx models the desktop app downloads
(Whisper, Silero VAD, pyannote segmentation + 3D-Speaker embeddings), driven from the command line.

  setup                         download the models into ~/stt (GitHub releases, ~400 MB)
  transcribe FILE [--lang en|ar|auto] [--out DIR]   -> FILE.txt, FILE.srt, FILE.vtt, FILE.json
  diarize FILE [--speakers N] [--lang ..] [--out DIR] -> FILE.meeting.md (who said what, timestamps)
  captions VIDEO [--lang en] [--burn] [--out DIR]   -> SRT and, with --burn, VIDEO.captioned.mp4 in brand style

Any audio or video ffmpeg can read works (mp4, mov, m4a, wav, ogg, webm...). Nothing leaves the machine.
"""
import argparse, json, os, subprocess, sys, urllib.request, tarfile
import numpy as np

HOME = os.path.expanduser(os.environ.get("STT_HOME", "~/stt"))
REL = "https://github.com/k2-fsa/sherpa-onnx/releases/download/"
MODELS = {
    "whisper": ("asr-models/sherpa-onnx-whisper-small.tar.bz2", "sherpa-onnx-whisper-small"),
    "vad": ("asr-models/silero_vad.onnx", "silero_vad.onnx"),
    "seg": ("speaker-segmentation-models/sherpa-onnx-pyannote-segmentation-3-0.tar.bz2",
            "sherpa-onnx-pyannote-segmentation-3-0"),
    "emb": ("speaker-recongition-models/3dspeaker_speech_campplus_sv_en_voxceleb_16k.onnx",
            "3dspeaker_speech_campplus_sv_en_voxceleb_16k.onnx"),
}
SR = 16000


def setup():
    os.makedirs(HOME, exist_ok=True)
    for key, (url, name) in MODELS.items():
        dest = os.path.join(HOME, name)
        if os.path.exists(dest):
            continue
        tmp = os.path.join(HOME, os.path.basename(url))
        print("downloading", key, file=sys.stderr)
        urllib.request.urlretrieve(REL + url, tmp)
        if tmp.endswith(".tar.bz2"):
            with tarfile.open(tmp) as t:
                t.extractall(HOME)
            os.remove(tmp)
    w = os.path.join(HOME, MODELS["whisper"][1])
    for f in ("small-encoder.onnx", "small-decoder.onnx"):  # keep the int8 copies only
        p = os.path.join(w, f)
        if os.path.exists(p):
            os.remove(p)
    print("models ready in", HOME)


def load_audio(path):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", path, "-ac", "1", "-ar", str(SR), "-f", "f32le", "-"],
                         check=True, capture_output=True).stdout
    return np.frombuffer(raw, np.float32).copy()


def recognizer(lang):
    import sherpa_onnx
    w = os.path.join(HOME, MODELS["whisper"][1])
    return sherpa_onnx.OfflineRecognizer.from_whisper(
        encoder=f"{w}/small-encoder.int8.onnx", decoder=f"{w}/small-decoder.int8.onnx",
        tokens=f"{w}/small-tokens.txt", language="" if lang == "auto" else lang, task="transcribe",
        num_threads=os.cpu_count() or 2)


def vad_segments(a):
    """Split speech into chunks of at most ~20 s (Whisper's sweet spot)."""
    import sherpa_onnx
    cfg = sherpa_onnx.VadModelConfig()
    cfg.silero_vad.model = os.path.join(HOME, MODELS["vad"][1])
    cfg.silero_vad.min_silence_duration = 0.35
    cfg.silero_vad.min_speech_duration = 0.2
    cfg.silero_vad.max_speech_duration = 20
    cfg.sample_rate = SR
    vad = sherpa_onnx.VoiceActivityDetector(cfg, buffer_size_in_seconds=600)
    out, win = [], cfg.silero_vad.window_size
    for i in range(0, len(a), win):
        vad.accept_waveform(a[i:i + win])
        while not vad.empty():
            out.append((vad.front.start / SR, np.array(vad.front.samples, np.float32)))
            vad.pop()
    vad.flush()
    while not vad.empty():
        out.append((vad.front.start / SR, np.array(vad.front.samples, np.float32)))
        vad.pop()
    return out


def run_asr(rec, chunk):
    s = rec.create_stream()
    s.accept_waveform(SR, chunk)
    rec.decode_stream(s)
    return s.result.text.strip()


def ts(t, sep=","):
    h, m = divmod(int(t), 3600)
    m, s = divmod(m, 60)
    return f"{h:02d}:{m:02d}:{s:02d}{sep}{int(round((t % 1) * 1000)) % 1000:03d}"


def split_cues(segs, max_chars=42):
    """Break long segments into caption-sized cues, timing spread by character count."""
    cues = []
    for s in segs:
        words = s["text"].split()
        n = max(1, -(-len(s["text"]) // max_chars))  # balanced lines instead of a long one + a stub
        per = -(-len(words) // n)
        lines = [" ".join(words[i:i + per]) for i in range(0, len(words), per)]
        total = sum(len(l) for l in lines) or 1
        t = s["start"]
        for l in lines:
            d = (s["end"] - s["start"]) * len(l) / total
            cues.append({"start": t, "end": t + d, "text": l})
            t += d
    return cues


def write_subs(cues, base):
    with open(base + ".srt", "w", encoding="utf-8") as f:
        for i, c in enumerate(cues, 1):
            f.write(f"{i}\n{ts(c['start'])} --> {ts(c['end'])}\n{c['text']}\n\n")
    with open(base + ".vtt", "w", encoding="utf-8") as f:
        f.write("WEBVTT\n\n")
        for c in cues:
            f.write(f"{ts(c['start'], '.')} --> {ts(c['end'], '.')}\n{c['text']}\n\n")


def transcribe(path, lang, out):
    a = load_audio(path)
    rec = recognizer(lang)
    segs = []
    for start, chunk in vad_segments(a):
        text = run_asr(rec, chunk)
        if text:
            segs.append({"start": round(start, 2), "end": round(start + len(chunk) / SR, 2), "text": text})
    base = os.path.join(out, os.path.splitext(os.path.basename(path))[0])
    os.makedirs(out, exist_ok=True)
    with open(base + ".txt", "w", encoding="utf-8") as f:
        f.write("\n".join(s["text"] for s in segs) + "\n")
    json.dump({"file": path, "duration": round(len(a) / SR, 2), "segments": segs},
              open(base + ".json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    write_subs(split_cues(segs), base)
    print(base + ".txt\n" + base + ".srt\n" + base + ".vtt\n" + base + ".json")
    return base, segs


def diarize(path, speakers, lang, out):
    import sherpa_onnx
    a = load_audio(path)
    cfg = sherpa_onnx.OfflineSpeakerDiarizationConfig(
        segmentation=sherpa_onnx.OfflineSpeakerSegmentationModelConfig(
            pyannote=sherpa_onnx.OfflineSpeakerSegmentationPyannoteModelConfig(
                model=os.path.join(HOME, MODELS["seg"][1], "model.int8.onnx"))),
        embedding=sherpa_onnx.SpeakerEmbeddingExtractorConfig(model=os.path.join(HOME, MODELS["emb"][1])),
        clustering=sherpa_onnx.FastClusteringConfig(num_clusters=speakers or -1, threshold=0.75),
        min_duration_on=0.3, min_duration_off=0.5)
    sd = sherpa_onnx.OfflineSpeakerDiarization(cfg)
    turns = sd.process(a).sort_by_start_time()
    rec = recognizer(lang)
    rows, last = [], None
    for t in turns:
        chunk = a[int(t.start * SR): int(t.end * SR)]
        if len(chunk) < SR * 0.3:
            continue
        text = run_asr(rec, chunk)
        if not text:
            continue
        spk = f"Speaker {t.speaker + 1}"
        if rows and rows[-1]["speaker"] == spk and t.start - rows[-1]["end"] < 1.5:
            rows[-1]["text"] += " " + text
            rows[-1]["end"] = t.end
        else:
            rows.append({"speaker": spk, "start": t.start, "end": t.end, "text": text})
    os.makedirs(out, exist_ok=True)
    base = os.path.join(out, os.path.splitext(os.path.basename(path))[0])
    with open(base + ".meeting.md", "w", encoding="utf-8") as f:
        f.write(f"# Transcript: {os.path.basename(path)}\n\n")
        for r in rows:
            f.write(f"**{r['speaker']}** [{ts(r['start'], '.')[:8]}]: {r['text']}\n\n")
    json.dump(rows, open(base + ".meeting.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(base + ".meeting.md\n" + base + ".meeting.json")


def captions(path, lang, burn, out):
    base, _ = transcribe(path, lang, out)
    if not burn:
        return
    srt = base + ".srt"
    # Brand style: white Poppins-like bold text, navy box, lower third (works for 9:16 and 16:9).
    style = ("FontName=Poppins,FontSize=12,Bold=1,PrimaryColour=&H00FFFFFF,OutlineColour=&H004D291F,BackColour=&H004D291F,"
             "BorderStyle=3,Outline=6,Shadow=0,Alignment=2,MarginV=22")
    dst = base + ".captioned.mp4"
    esc = srt.replace("\\", "\\\\").replace(":", "\\:").replace("'", "\\'")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", path, "-vf", f"subtitles='{esc}':force_style='{style}'",
                    "-c:v", "libx264", "-crf", "20", "-preset", "medium", "-c:a", "copy", dst], check=True)
    print(dst)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("setup")
    for name in ("transcribe", "diarize", "captions"):
        p = sub.add_parser(name)
        p.add_argument("file")
        p.add_argument("--lang", default="auto", help="en, ar, ... or auto (default)")
        p.add_argument("--out", default=None)
        if name == "diarize":
            p.add_argument("--speakers", type=int, default=0, help="number of speakers if known")
        if name == "captions":
            p.add_argument("--burn", action="store_true")
    a = ap.parse_args()
    if a.cmd == "setup":
        return setup()
    missing = [k for k, (_, n) in MODELS.items() if not os.path.exists(os.path.join(HOME, n))]
    if missing:
        setup()
    out = a.out or os.path.dirname(os.path.abspath(a.file))
    if a.cmd == "transcribe":
        transcribe(a.file, a.lang, out)
    elif a.cmd == "diarize":
        diarize(a.file, a.speakers, a.lang, out)
    else:
        captions(a.file, a.lang, a.burn, out)


if __name__ == "__main__":
    main()
