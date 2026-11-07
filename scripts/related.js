// Adds a "More <skill> lessons" box to every lesson page, built from data/library.json.
// Run from the repo root after adding lessons: node scripts/related.js
// It is safe to run again: it replaces the box it wrote before.
const fs = require("fs");
const lib = JSON.parse(fs.readFileSync("data/library.json", "utf8"));
const lessons = lib.resources.filter((r) => r.type === "lesson");
const ORDER = ["B1", "B2", "C1", "C2"];
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const href = (r) => r.path.replace(/^lessons\//, "");
const BOX = /\n?<aside class="related"[\s\S]*?<\/aside>\n?/;

let changed = 0;
for (const L of lessons) {
  const same = lessons.filter((r) => r !== L && r.level === L.level && r.skill === L.skill);
  const i = ORDER.indexOf(L.level);
  const near = [ORDER[i - 1], ORDER[i + 1]].filter(Boolean)
    .map((lv) => lessons.find((r) => r.level === lv && r.skill === L.skill)).filter(Boolean);
  const item = (r, note) => `<li><a href="${href(r)}">${esc(r.title)}</a> <span class="badge ${r.level.toLowerCase()}">${r.level}</span>${note ? ` <small>${note}</small>` : ""}</li>`;
  const items = [...same.map((r) => item(r)), ...near.map((r) => item(r, ORDER.indexOf(r.level) < i ? "easier" : "harder"))];
  if (!items.length) continue;
  const box = `\n<aside class="related" aria-labelledby="related-h">
<h2 id="related-h">More ${esc(L.skill.toLowerCase())} lessons</h2>
<ul>${items.join("")}</ul>
<p><a href="../library.html?skill=${encodeURIComponent(L.skill)}">All ${esc(L.skill.toLowerCase())} lessons &rarr;</a></p>
</aside>\n`;
  const f = L.path;
  let s = fs.readFileSync(f, "utf8");
  const before = s;
  s = s.replace(BOX, "\n");
  s = s.replace(/\n*<nav class="pager"/, () => box + `\n<nav class="pager"`);
  if (s !== before) { fs.writeFileSync(f, s); changed++; }
}
console.log("related boxes written:", changed, "of", lessons.length);
