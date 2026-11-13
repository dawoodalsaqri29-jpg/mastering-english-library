#!/usr/bin/env python3
"""Voices with emotion for Mastering English Library films.

speak(text, role, emotion) -> (samples float32, sample_rate)

Roles live in voices.json (who speaks): Isabella on Kokoro, Gemini voices, the owner's Voice Studio
voices, the children's voices and the epic narrator. Emotions (how they speak): neutral, calm, joy,
excited, sad, fear, whisper, suspense, anger, surprise, tender, epic.

- Gemini roles act the emotion: the text goes with a spoken-style direction (see EMOTIONS below).
- Kokoro roles (Isabella) cannot act, so the emotion is shaped after the voice is made: pace,
  pitch, brightness, a tremble for fear, a hall echo for epic. It is an approximation, not acting.

Every result is cached on disk by role, emotion and text, so a rerun costs nothing.
"""
import base64, hashlib, json, os, subprocess, tempfile, time, urllib.error, urllib.request, wave
import numpy as np
import soundfile as sf

HERE = os.path.dirname(os.path.abspath(__file__))
KOKORO = os.environ.get('KOKORO_DIR', os.path.expanduser('~/tts'))
CACHE = os.environ.get('VOICE_CACHE', os.path.expanduser('~/.cache/mel-voices'))
# Newest first. Each model has its own free daily allowance; when one is used up the next one speaks.
GEMINI_TTS = os.environ.get('GEMINI_TTS_MODELS', 'gemini-3.8-flash-tts,gemini-3.1-flash-tts-preview,gemini-3.8-flash-lite-tts,gemini-2.5-flash-preview-tts').split(',')
CAST = json.load(open(os.path.join(HERE, 'voices.json'), encoding='utf-8'))

# How a Gemini voice should act each emotion (said before the line, never read aloud).
EMOTIONS = {
    'neutral':  'Clear and natural, like a friendly teacher telling a story.',
    'calm':     'Calm, warm and unhurried.',
    'joy':      'Happy and warm, smiling while speaking, light and bright.',
    'excited':  'Bursting with excitement and surprise, energetic, faster.',
    'sad':      'Quiet, heartbroken and tender, slow, with a soft breaking voice.',
    'fear':     'Terrified and breathless, almost whispering, slow, as if something is right behind you.',
    'whisper':  'A soft, close whisper, slow and secretive.',
    'suspense': 'Low, slow and tense, holding back a secret, with dramatic pauses.',
    'anger':    'Angry and sharp, firm, controlled fury.',
    'surprise': 'Shocked and amazed, gasping at the start.',
    'tender':   'Gentle and loving, soft and close, like talking to a child at bedtime.',
    'epic':     'Grand and powerful, slow, deep and resonant, like the narrator of a legend or a great battle.',
}

# Kokoro (Isabella) shaping per emotion: speed, pitch in semitones, extra ffmpeg filters.
SHAPES = {
    'neutral':  (0.92, 0.0, ''),
    'calm':     (0.88, -0.3, ''),
    'joy':      (1.00, 1.0, 'treble=g=3'),
    'excited':  (1.06, 1.6, 'treble=g=4'),
    'sad':      (0.80, -1.0, 'lowpass=f=5000,volume=0.85'),
    'fear':     (0.84, 0.3, 'tremolo=f=7:d=0.25,lowpass=f=6000,volume=0.8'),
    'whisper':  (0.84, 0.0, 'lowpass=f=5500,volume=0.75'),
    'suspense': (0.84, -0.6, 'lowpass=f=6500'),
    'anger':    (0.98, -0.6, 'volume=1.15,treble=g=2'),
    'surprise': (1.02, 1.4, 'treble=g=3'),
    'tender':   (0.86, -0.2, 'lowpass=f=7000,volume=0.9'),
    'epic':     (0.84, -1.5, 'aecho=0.8:0.6:60|120:0.3|0.2,volume=1.1'),
}


def _trim(y, sr):
    nz = np.where(np.abs(y) > 0.01)[0]
    return y[max(nz[0] - int(sr * 0.05), 0):nz[-1] + int(sr * 0.1)] if len(nz) else y


def _kokoro(text, voice, lang, emotion):
    from kokoro_onnx import Kokoro
    speed, semis, extra = SHAPES.get(emotion, SHAPES['neutral'])
    k = Kokoro(f'{KOKORO}/kokoro-v1.0.onnx', f'{KOKORO}/voices-v1.0.bin')
    y, sr = k.create(text, voice=voice, speed=speed, lang=lang)
    if not semis and not extra:
        return y, sr
    # pitch shift that keeps the pace: play faster or slower, then stretch back to the same length
    r = 2 ** (semis / 12)
    chain = [f'asetrate={int(sr * r)}', f'aresample={sr}', f'atempo={1 / r:.5f}'] if semis else []
    if extra:
        chain.append(extra)
    with tempfile.TemporaryDirectory() as td:
        a, b = os.path.join(td, 'a.wav'), os.path.join(td, 'b.wav')
        sf.write(a, y, sr)
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', a, '-af', ','.join(chain), '-ar', str(sr), b], check=True)
        y, _ = sf.read(b, dtype='float32')
    return y, sr


def _gemini(text, voice, accent, persona, emotion):
    direction = ' '.join(x for x in (persona, accent, EMOTIONS.get(emotion, EMOTIONS['neutral'])) if x)
    # A bracketed direction is how these models take acting notes; written as a sentence they may read it aloud.
    prompt = f'[{direction}] {text}'
    body = {'contents': [{'parts': [{'text': prompt}]}],
            'generationConfig': {'responseModalities': ['AUDIO'],
                                 'speechConfig': {'voiceConfig': {'prebuiltVoiceConfig': {'voiceName': voice}}}}}
    last = ''
    for model in GEMINI_TTS:
        url = f'https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent'
        for attempt in range(4):
            try:
                req = urllib.request.Request(url, data=json.dumps(body).encode(), headers={
                    'Content-Type': 'application/json',
                    # the session's network proxy puts the real key in; a placeholder keeps the request well-formed
                    'x-goog-api-key': os.environ.get('GEMINI_API_KEY', 'set-by-proxy')})
                d = json.loads(urllib.request.urlopen(req, timeout=180).read())
                pcm = base64.b64decode(d['candidates'][0]['content']['parts'][0]['inlineData']['data'])
                secs = len(pcm) / 48000
                if secs > 3 + len(text) / 5:   # far longer than the line: a repeated or rambling take
                    last = f'{model}: take of {secs:.0f} s for {len(text)} characters'
                    if attempt < 3:
                        continue
                    break
                return np.frombuffer(pcm, dtype='<i2').astype('float32') / 32768, 24000
            except urllib.error.HTTPError as e:
                last = f'{model} {e.code}: {e.read()[:200]!r}'
                if e.code == 429 and 'PerDay' in last:
                    break                      # this model's daily allowance is used up: try the next model
                if e.code in (429, 500, 503) and attempt < 3:
                    time.sleep(20 * (attempt + 1)); continue
                break
            except (KeyError, IndexError):
                last = f'{model}: no audio returned'
                if attempt < 3:
                    time.sleep(5); continue
                break
    raise RuntimeError(f'Gemini TTS failed on every model; last: {last}')


# Longest silence kept inside a line. Dramatic styles may linger a little; nothing drags.
MAX_PAUSE = {'epic': 1.0, 'suspense': 1.0, 'fear': 0.9, 'sad': 0.9, 'whisper': 0.9}


def _shorten_pauses(y, sr, max_gap):
    """Cut every silence longer than max_gap seconds down to max_gap (with a short fade so it never clicks)."""
    win = int(sr * 0.02); n = len(y) // win
    if n < 3:
        return y
    loud = np.array([np.abs(y[i * win:(i + 1) * win]).max() > 0.012 for i in range(n)])
    keep, i, out = int(max_gap * sr / win), 0, []
    while i < n:
        j = i
        while j < n and loud[j] == loud[i]:
            j += 1
        seg = y[i * win:j * win]
        if not loud[i] and (j - i) > keep:
            half = keep * win // 2
            seg = np.concatenate([seg[:half] * np.linspace(1, 0, half), seg[-half:] * np.linspace(0, 1, half)])
        out.append(seg); i = j
    out.append(y[n * win:])
    return np.concatenate(out).astype('float32')


def speak(text, role='isabella', emotion='neutral'):
    if role not in CAST:
        raise KeyError(f'unknown voice role "{role}"; roles: {", ".join(CAST)}')
    if emotion not in EMOTIONS:
        raise KeyError(f'unknown emotion "{emotion}"; emotions: {", ".join(EMOTIONS)}')
    c = CAST[role]
    key = hashlib.sha1(json.dumps([c, emotion, text, GEMINI_TTS], sort_keys=True).encode()).hexdigest()[:16]
    path = os.path.join(CACHE, f'{role}_{emotion}_{key}.wav')
    if os.path.exists(path):
        y, sr = sf.read(path, dtype='float32')
        return y, sr
    if c['engine'] == 'kokoro':
        y, sr = _kokoro(text, c['voice'], c.get('lang', 'en-gb'), emotion)
    else:
        y, sr = _gemini(text, c['voice'], c.get('accent', ''), c.get('persona', ''), emotion)
    y = _trim(np.asarray(y, dtype='float32'), sr)
    y = _shorten_pauses(y, sr, MAX_PAUSE.get(emotion, 0.8))
    peak = float(np.abs(y).max() or 1)
    y = y * min(1.0, 0.95 / peak)
    os.makedirs(CACHE, exist_ok=True)
    sf.write(path + '.part.wav', y, sr); os.replace(path + '.part.wav', path)
    return y, sr


if __name__ == '__main__':
    import sys
    if len(sys.argv) < 4:
        sys.exit('usage: voice.py <role> <emotion> "text" [out.wav]')
    y, sr = speak(sys.argv[3], sys.argv[1], sys.argv[2])
    out = sys.argv[4] if len(sys.argv) > 4 else 'voice.wav'
    sf.write(out, y, sr); print(out, round(len(y) / sr, 2), 's')
