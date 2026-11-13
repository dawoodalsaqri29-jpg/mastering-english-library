"""Fallback narration: Gemini TTS (British female, voice Aoede). Usage: gemini_tts.py "<text>" <out.wav>"""
import base64, json, subprocess, sys, time, urllib.error, urllib.request
text, out = sys.argv[1], sys.argv[2]
body = {"contents": [{"parts": [{"text": "Read this aloud as a warm, clear female English teacher with a British "
        "(Received Pronunciation) accent, at a steady pace for learners: " + text}]}],
        "generationConfig": {"responseModalities": ["AUDIO"], "speechConfig": {"voiceConfig":
        {"prebuiltVoiceConfig": {"voiceName": "Aoede"}}}}}
URL = "https://generativelanguage.googleapis.com/v1beta/models/{}:generateContent"
for attempt in range(6):
    for model in ("gemini-2.5-flash-preview-tts", "gemini-2.5-pro-preview-tts"):
        req = urllib.request.Request(URL.format(model), data=json.dumps(body).encode(),
              headers={"Content-Type": "application/json", "x-goog-api-key": "set-by-proxy"})
        try:
            r = json.load(urllib.request.urlopen(req, timeout=120))
            pcm = base64.b64decode(r["candidates"][0]["content"]["parts"][0]["inlineData"]["data"])
            open(out + ".pcm", "wb").write(pcm)
            subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "s16le", "-ar", "24000", "-ac", "1",
                            "-i", out + ".pcm", out], check=True)
            sys.exit(0)
        except urllib.error.HTTPError as e:
            print(f"{model}: HTTP {e.code}", file=sys.stderr)
    time.sleep(25)  # per-minute rate limit
sys.exit("Gemini TTS failed after retries")
