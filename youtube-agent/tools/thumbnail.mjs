#!/usr/bin/env node
// Step 10 of the flowchart: three thumbnail candidates with GPT Image 2.5.
// Each candidate is a different concept. The tool asks for a 16:9 image (2048x1152), then saves a
// 1280x720 JPG under YouTube's 2 MB limit, plus a 160 px wide copy so you can judge it at phone size.
//
//   node tools/thumbnail.mjs --title "The Day the Sky Fell" --subject "a burning meteor over a small town" \
//     --text "IT HIT HERE" --out runs/x/thumbnails [--count 3]
//   node tools/thumbnail.mjs --prompt "your own full prompt" --out thumbs/
//
// Key: OPENAI_API_KEY (platform.openai.com > API keys). Model: OPENAI_IMAGE_MODEL
// (default gpt-image-2.5-sunburst; gpt-image-2.5-flare is the cheaper small one).
// Needs ffmpeg for the resize.
import { spawnSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseArgs } from 'node:util';
import { getJson, need } from './env.mjs';

const { values: a } = parseArgs({
  options: {
    title: { type: 'string', default: '' },
    subject: { type: 'string', default: '' },
    text: { type: 'string', default: '' },
    prompt: { type: 'string' },
    style: { type: 'string', default: '' },
    count: { type: 'string', default: '3' },
    quality: { type: 'string', default: 'high' },
    out: { type: 'string', default: 'thumbnails' },
  },
});
if (!a.prompt && !a.title && !a.subject) {
  console.error('Usage: node tools/thumbnail.mjs --title "..." --subject "..." [--text "3-4 WORDS"] --out dir');
  process.exit(1);
}
const key = need('OPENAI_API_KEY');
const model = process.env.OPENAI_IMAGE_MODEL || 'gpt-image-2.5-sunburst';

const subject = a.subject || a.title;
const words = a.text ? `Large bold title text "${a.text}" in the left third, thick white letters with a dark outline, spelled exactly like that.` : 'Leave the left third empty for a title. No text, letters, numbers, logos or watermarks anywhere.';
const look = a.style ? ` Art style: ${a.style}.` : '';
const concepts = [
  `One face showing a strong, clear emotion reacting to ${subject}, close to the camera in the right third.`,
  `${subject} as a single object close up, dramatic, filling the right half of the frame.`,
  `A split image: the left half shows the calm before, the right half shows ${subject} after. One clear divide down the middle.`,
  `${subject} seen small against a huge, empty, dramatic background, to show scale.`,
];
const prompts = a.prompt
  ? Array.from({ length: Number(a.count) }, () => a.prompt)
  : concepts.slice(0, Number(a.count)).map((c) => `A 16:9 YouTube thumbnail for a video titled "${a.title}". ${c} High contrast, saturated colours, sharp focus on the subject, simple background, no clutter.${look} ${words}`);

mkdirSync(join(a.out, 'raw'), { recursive: true });
const saved = [];
for (const [i, prompt] of prompts.entries()) {
  const n = i + 1;
  process.stdout.write(`thumbnail ${n}/${prompts.length}… `);
  const r = await getJson('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, prompt, size: '2048x1152', quality: a.quality, n: 1 }),
  }, 'OpenAI images');
  const b64 = r.data?.[0]?.b64_json;
  if (!b64) throw new Error(`no image in reply: ${JSON.stringify(r).slice(0, 300)}`);
  const raw = join(a.out, 'raw', `v${n}.png`);
  writeFileSync(raw, Buffer.from(b64, 'base64'));
  const jpg = join(a.out, `v${n}.jpg`);
  const small = join(a.out, `v${n}-phone.jpg`);
  for (const [w, file] of [[1280, jpg], [160, small]]) {
    const f = spawnSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-i', raw, '-vf', `scale=${w}:-2:flags=lanczos`, '-q:v', '3', file]);
    if (f.status !== 0) throw new Error(`ffmpeg resize failed: ${f.stderr}`);
  }
  writeFileSync(join(a.out, `v${n}.prompt.txt`), prompt);
  saved.push(jpg);
  console.log(jpg);
}
console.log(`\nOpen the -phone.jpg files: if you cannot read the words or see the subject at that size, regenerate.${a.text ? ' Check the spelling on each one.' : ''}`);
