#!/usr/bin/env node
// Turns a stock clip into a scene file the assemble step can join: the clip fills the frame
// (scaled and cropped, never stretched), loops if it is shorter than the narration, and carries
// the scene's voice-over. Same codec settings as the animated scenes, so nothing is re-encoded later.
//
//   node tools/stock-scene.mjs --clip clips/s004.mp4 --audio scenes/s004.mp3 --duration 7.2 --out scenes/s004.mp4
import { spawnSync } from 'node:child_process';
import { parseArgs } from 'node:util';

const { values: a } = parseArgs({
  options: {
    clip: { type: 'string' },
    audio: { type: 'string' },
    duration: { type: 'string' },
    out: { type: 'string' },
    width: { type: 'string', default: '1920' },
    height: { type: 'string', default: '1080' },
    fps: { type: 'string', default: '30' },
    crf: { type: 'string', default: '20' },
    preset: { type: 'string', default: 'veryfast' },
  },
});
if (!a.clip || !a.duration || !a.out) {
  console.error('Need --clip, --duration and --out (and usually --audio)');
  process.exit(1);
}
const w = Number(a.width);
const h = Number(a.height);
const fps = Number(a.fps);
const samples = Math.round(Number(a.duration) * 48000);
const audioIn = a.audio ? ['-i', a.audio] : ['-f', 'lavfi', '-i', 'anullsrc=r=48000:cl=stereo'];
const af = a.audio
  ? `[1:a]aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo,apad=whole_len=${samples},atrim=end_sample=${samples},asetpts=N/SR/TB[a]`
  : `[1:a]atrim=end_sample=${samples},asetpts=N/SR/TB[a]`;
const vf = `[0:v]scale=${w}:${h}:force_original_aspect_ratio=increase,crop=${w}:${h},setsar=1,fps=${fps},format=yuv420p[v]`;
const r = spawnSync('ffmpeg', [
  '-hide_banner', '-loglevel', 'error', '-y',
  '-stream_loop', '-1', '-i', a.clip, ...audioIn,
  '-filter_complex', `${vf};${af}`,
  '-map', '[v]', '-map', '[a]',
  '-c:v', 'libx264', '-preset', a.preset, '-crf', a.crf, '-profile:v', 'high', '-pix_fmt', 'yuv420p',
  '-r', String(fps), '-g', String(fps * 2), '-video_track_timescale', '90000',
  '-c:a', 'aac', '-b:a', '192k', '-ar', '48000', '-ac', '2',
  '-t', a.duration, '-movflags', '+faststart', a.out,
], { stdio: 'inherit' });
if (r.status !== 0) process.exit(r.status || 1);
console.log(`stock scene ${a.out}`);
