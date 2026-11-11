// Loads the .env file next to this project (the folder you unzipped) into process.env.
// Your keys stay on your computer: every tool reads them from here and sends each key only
// to the service it belongs to.
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export function loadEnv() {
  for (const dir of [process.cwd(), ROOT]) {
    const f = join(dir, '.env');
    if (!existsSync(f)) continue;
    for (const line of readFileSync(f, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (!m || process.env[m[1]]) continue;
      process.env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, '$2');
    }
  }
}

export function need(name, hint = '') {
  const v = process.env[name];
  if (!v) {
    console.error(`Missing ${name} in .env${hint ? ` (${hint})` : ''}. Copy .env.example to .env and fill it in.`);
    process.exit(1);
  }
  return v;
}

export async function getJson(url, init = {}, label = url) {
  const res = await fetch(url, init);
  const text = await res.text();
  if (!res.ok) throw new Error(`${label}: HTTP ${res.status} ${text.slice(0, 400)}`);
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`${label}: not JSON: ${text.slice(0, 200)}`);
  }
}

/** Pull the first JSON object or array out of a model reply (bare, or inside a ```json block). */
export function parseJsonReply(text) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const body = fenced ? fenced[1] : text;
  const start = body.search(/[[{]/);
  if (start < 0) throw new Error(`no JSON in reply: ${text.slice(0, 200)}`);
  const open = body[start];
  const close = open === '{' ? '}' : ']';
  const end = body.lastIndexOf(close);
  return JSON.parse(body.slice(start, end + 1));
}

loadEnv();
