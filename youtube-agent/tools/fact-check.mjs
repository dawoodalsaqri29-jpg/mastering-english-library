#!/usr/bin/env node
// Step 3 of the flowchart: check every name, date and number in the script on the web.
// Sends the script to Perplexity in small batches. Each line comes back as ok, wrong or unclear,
// with a corrected line and the sources. --apply writes the corrected lines into a new script.
//
//   node tools/fact-check.mjs --script runs/my-video/script.json [--apply] [--out report.json]
//   node tools/fact-check.mjs --text my-script.txt              (plain text: one paragraph = one line)
//
// Key: PERPLEXITY_API_KEY (perplexity.ai > Settings > API). Model: PERPLEXITY_MODEL (default sonar-pro).
// A person still reads the report. The tool only removes the easy mistakes.
import { readFileSync, writeFileSync } from 'node:fs';
import { parseArgs } from 'node:util';
import { getJson, need, parseJsonReply } from './env.mjs';

const { values: a } = parseArgs({
  options: {
    script: { type: 'string' },
    text: { type: 'string' },
    apply: { type: 'boolean', default: false },
    out: { type: 'string' },
    batch: { type: 'string', default: '8' },
  },
});
if (!a.script && !a.text) {
  console.error('Usage: node tools/fact-check.mjs --script script.json [--apply]  or  --text script.txt');
  process.exit(1);
}
const key = need('PERPLEXITY_API_KEY');
const model = process.env.PERPLEXITY_MODEL || 'sonar-pro';

// Lines: [{ id, text }]. A script.json has chapters[].scenes[].narration (the pipeline's format)
// or scenes[].narration (the Claude Code route's format).
let script = null;
let lines;
if (a.script) {
  script = JSON.parse(readFileSync(a.script, 'utf8'));
  const scenes = script.chapters ? script.chapters.flatMap((c) => c.scenes) : script.scenes || [];
  lines = scenes.map((s, i) => ({ id: s.id || `line-${i + 1}`, text: s.narration, ref: s }));
} else {
  lines = readFileSync(a.text, 'utf8').split(/\n\s*\n/).map((t, i) => ({ id: `line-${i + 1}`, text: t.trim() })).filter((l) => l.text);
}
// Only lines that state something checkable: a number, a date, or a proper name mid-sentence.
const checkable = lines.filter((l) => /\d/.test(l.text) || /\s[A-Z][a-z]+/.test(l.text));
console.log(`${lines.length} lines, ${checkable.length} with names, dates or numbers. Checking with ${model}…`);

const results = [];
const size = Number(a.batch);
for (let i = 0; i < checkable.length; i += size) {
  const chunk = checkable.slice(i, i + size);
  const body = {
    model,
    temperature: 0,
    messages: [
      {
        role: 'system',
        content: 'You are a fact-checker for a YouTube documentary script. Check every factual claim (names, dates, numbers, places, quotes) against reliable sources. Reply with JSON only.',
      },
      {
        role: 'user',
        content: `Check these script lines. For each, reply with an object: {"id", "verdict": "ok" | "wrong" | "unclear", "issue": "what is wrong or unclear, empty if ok", "fixed": "the line rewritten to be correct, in the same voice and length; same as the original if ok", "sources": ["url", ...]}.\nReply with a JSON array only.\n\n${chunk.map((l) => `[${l.id}] ${l.text}`).join('\n')}`,
      },
    ],
  };
  const r = await getJson('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }, 'Perplexity');
  let parsed;
  try {
    parsed = parseJsonReply(r.choices[0].message.content);
  } catch (e) {
    console.warn(`  batch ${i / size + 1}: could not read the reply (${e.message}); marking as unclear`);
    parsed = chunk.map((l) => ({ id: l.id, verdict: 'unclear', issue: 'checker reply unreadable', fixed: l.text, sources: [] }));
  }
  for (const p of parsed) {
    const line = chunk.find((l) => l.id === p.id);
    if (!line) continue;
    results.push({ id: p.id, verdict: p.verdict, original: line.text, issue: p.issue || '', fixed: p.fixed || line.text, sources: p.sources?.length ? p.sources : r.citations || [] });
  }
  process.stdout.write(`  ${Math.min(i + size, checkable.length)}/${checkable.length}\r`);
}

const wrong = results.filter((r) => r.verdict === 'wrong');
const unclear = results.filter((r) => r.verdict === 'unclear');
const out = a.out || (a.script ? a.script.replace(/\.json$/, '.factcheck.json') : 'factcheck.json');
writeFileSync(out, JSON.stringify({ model, checkedAt: new Date().toISOString(), results }, null, 2));
console.log(`\n${results.length} checked: ${wrong.length} wrong, ${unclear.length} unclear. Report: ${out}`);
for (const r of [...wrong, ...unclear]) console.log(`\n  [${r.verdict}] ${r.id}: ${r.issue}\n    was: ${r.original}\n    fix: ${r.fixed}`);

if (a.apply && script) {
  for (const r of wrong) {
    const line = lines.find((l) => l.id === r.id);
    if (line?.ref && r.fixed) line.ref.narration = r.fixed;
  }
  const fixedPath = a.script.replace(/\.json$/, '.checked.json');
  writeFileSync(fixedPath, JSON.stringify(script, null, 2));
  console.log(`\nWrote ${fixedPath} with ${wrong.length} corrected line(s). Unclear lines are unchanged: read them yourself.`);
}
