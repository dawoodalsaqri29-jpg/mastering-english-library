#!/usr/bin/env node
// Voice for every scene of a project, with the time of every word (so visuals land on the word).
//
// Two ways:
//   ElevenLabs (default): one voice-over per scene from your ElevenLabs key.
//     node tools/voice.mjs --project projects/my-video
//   Your own recording: one audio file of you reading the whole script.
//     node tools/voice.mjs --project projects/my-video --audio my-voice.mp3
//     It is transcribed with word times (OpenAI, your OPENAI_API_KEY), then cut into one piece per
//     scene by matching the words of each scene's narration in order.
//     --transcribe-only writes transcript.json and stops, so Claude can write the scenes from what
//     you actually said.
//
// Writes projects/<x>/voice/<id>.mp3 and <id>.words.json ([{ word, start, end }] in seconds).
// Keys: ELEVENLABS_API_KEY (+ optional ELEVENLABS_VOICE_ID, ELEVENLABS_MODEL_ID), or OPENAI_API_KEY for --audio.
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseArgs } from 'node:util';
import { getJson, need } from './env.mjs';

const { values: a } = parseArgs({
  options: {
    project: { type: 'string' },
    audio: { type: 'string' },
    'transcribe-only': { type: 'boolean', default: false },
    only: { type: 'string' },
    force: { type: 'boolean', default: false },
  },
});
if (!a.project) {
  console.error('Usage: node tools/voice.mjs --project projects/<name> [--audio my-voice.mp3]');
  process.exit(1);
}
const P = a.project;
const voiceDir = join(P, 'voice');
mkdirSync(voiceDir, { recursive: true });
const script = existsSync(join(P, 'script.json')) ? JSON.parse(readFileSync(join(P, 'script.json'), 'utf8')) : null;
const ownAudio = a.audio || (script?.voice?.mode === 'own' ? join(P, script.voice.audio) : null);

const norm = (w) => w.toLowerCase().replace(/[^a-z0-9']/g, '');
const tokens = (t) => t.replace(/\[[^\]]*\]/g, ' ').split(/\s+/).filter((w) => norm(w));

function ffprobeDuration(file) {
  const r = spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file], { encoding: 'utf8' });
  return Number(r.stdout.trim());
}

/** ElevenLabs gives one time per character; join them into words. */
function charsToWords(al) {
  const words = [];
  let cur = null;
  al.characters.forEach((ch, i) => {
    if (/\s/.test(ch)) {
      if (cur) words.push(cur);
      cur = null;
      return;
    }
    if (!cur) cur = { word: '', start: al.character_start_times_seconds[i], end: 0 };
    cur.word += ch;
    cur.end = al.character_end_times_seconds[i];
  });
  if (cur) words.push(cur);
  // Drop emotion tags like [calm] that are not spoken.
  return words.filter((w) => !/^\[.*\]$/.test(w.word)).map((w) => ({ ...w, start: +w.start.toFixed(3), end: +w.end.toFixed(3) }));
}

async function elevenLabs() {
  const key = need('ELEVENLABS_API_KEY', 'or use --audio with your own recording');
  const voice = script?.voice?.voiceId || process.env.ELEVENLABS_VOICE_ID || 'JBFqnCBsd6RMkjVDRZzb';
  const model = script?.voice?.model || process.env.ELEVENLABS_MODEL_ID || 'eleven_multilingual_v2';
  const scenes = script.scenes;
  for (const [i, s] of scenes.entries()) {
    if (a.only && s.id !== a.only) continue;
    const mp3 = join(voiceDir, `${s.id}.mp3`);
    if (existsSync(mp3) && !a.force) continue;
    const body = { text: s.narration, model_id: model };
    // Only v2 models take the neighbouring lines, which keeps the tone even across scenes.
    if (/v2/.test(model)) Object.assign(body, { previous_text: scenes[i - 1]?.narration, next_text: scenes[i + 1]?.narration });
    const r = await getJson(`https://api.elevenlabs.io/v1/text-to-speech/${voice}/with-timestamps?output_format=mp3_44100_128`, {
      method: 'POST',
      headers: { 'xi-api-key': key, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }, `ElevenLabs ${s.id}`);
    writeFileSync(mp3, Buffer.from(r.audio_base64, 'base64'));
    writeFileSync(join(voiceDir, `${s.id}.words.json`), JSON.stringify(charsToWords(r.alignment || r.normalized_alignment)));
    console.log(`  ${s.id} ${ffprobeDuration(mp3).toFixed(1)}s`);
  }
}

async function transcribe(file) {
  const key = need('OPENAI_API_KEY', 'used to time the words of your recording');
  const form = new FormData();
  form.append('file', new Blob([readFileSync(file)]), file.split('/').pop());
  form.append('model', process.env.OPENAI_TRANSCRIBE_MODEL || 'whisper-1');
  form.append('response_format', 'verbose_json');
  form.append('timestamp_granularities[]', 'word');
  const r = await getJson('https://api.openai.com/v1/audio/transcriptions', { method: 'POST', headers: { Authorization: `Bearer ${key}` }, body: form }, 'OpenAI transcription');
  return { text: r.text, words: (r.words || []).map((w) => ({ word: w.word, start: w.start, end: w.end })) };
}

async function own() {
  if (!existsSync(ownAudio)) throw new Error(`No audio at ${ownAudio}`);
  const tFile = join(P, 'transcript.json');
  let t;
  if (existsSync(tFile) && !a.force) t = JSON.parse(readFileSync(tFile, 'utf8'));
  else {
    console.log('Transcribing your recording…');
    // The transcription API takes files up to 25 MB: send a small mono copy.
    const small = join(P, 'transcribe.mp3');
    spawnSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-i', ownAudio, '-ac', '1', '-ar', '16000', '-b:a', '48k', small]);
    t = await transcribe(small);
    writeFileSync(tFile, JSON.stringify(t, null, 2));
    console.log(`  ${t.words.length} words. Transcript: ${tFile}`);
  }
  if (a['transcribe-only'] || !script) return;

  // Walk the transcript in order; each scene takes as many words as its narration has.
  let k = 0;
  const total = ffprobeDuration(ownAudio);
  for (const [i, s] of script.scenes.entries()) {
    const n = tokens(s.narration).length;
    const mine = t.words.slice(k, k + n);
    if (!mine.length) throw new Error(`Scene ${s.id}: ran out of recorded words. Does the script match the recording?`);
    k += n;
    const start = i === 0 ? 0 : Math.max(0, mine[0].start - 0.05);
    const next = t.words[k];
    const end = next ? Math.max(mine[mine.length - 1].end, next.start - 0.05) : total;
    const mp3 = join(voiceDir, `${s.id}.mp3`);
    spawnSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-ss', start.toFixed(3), '-to', end.toFixed(3), '-i', ownAudio, '-c:a', 'libmp3lame', '-b:a', '192k', mp3]);
    writeFileSync(join(voiceDir, `${s.id}.words.json`), JSON.stringify(mine.map((w) => ({ word: w.word, start: +(w.start - start).toFixed(3), end: +(w.end - start).toFixed(3) }))));
    console.log(`  ${s.id} ${(end - start).toFixed(1)}s`);
  }
  if (k < t.words.length - 3) console.warn(`  ${t.words.length - k} recorded words were not in any scene (they are cut). Check the last scene.`);
}

if (ownAudio) await own();
else {
  if (!script) throw new Error(`No ${join(P, 'script.json')}`);
  await elevenLabs();
}
console.log('voice done');
