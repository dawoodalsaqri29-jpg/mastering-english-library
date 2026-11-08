// Writes the full lesson list into library.html as plain HTML, so search engines and visitors without JavaScript
// see all lessons and links. assets/app.js replaces it with the filtered list once data/library.json loads, using
// the same markup. Run after changing data/library.json: node scripts/static-catalog.js
// The site check runs it with --check and fails when library.html is out of date.
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const PAGE = path.join(ROOT, "library.html");
const START = "<!-- catalog:start (written by scripts/static-catalog.js) -->";
const END = "<!-- catalog:end -->";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Same grouping and order as assets/app.js: a lesson and its PDF are one card, B1 to C2, then by title.
function items(resources) {
  const pdfs = {};
  resources.forEach((r) => { if (r.type === "pdf") pdfs[r.level + "|" + r.title] = r; });
  const used = {};
  const out = [];
  resources.forEach((r) => {
    if (r.type !== "lesson") return;
    const pdf = pdfs[r.level + "|" + r.title];
    if (pdf) used[r.level + "|" + r.title] = true;
    out.push({ title: r.title, level: r.level, skill: r.skill, description: r.description, lesson: r.path, pdf: pdf ? pdf.path : null });
  });
  resources.forEach((r) => {
    if (r.type === "pdf" && !used[r.level + "|" + r.title]) out.push({ title: r.title, level: r.level, skill: r.skill, description: r.description, lesson: null, pdf: r.path });
  });
  const rank = (lv) => ({ B1: 1, B2: 2, C1: 3, C2: 4 }[lv] || 99);
  return out.sort((a, b) => (rank(a.level) - rank(b.level)) || a.title.localeCompare(b.title));
}

function listHtml(resources) {
  return '<ul class="list">' + items(resources).map((it) => {
    const pdf = it.lesson && it.pdf ? '<a class="pdf" href="' + esc(it.pdf) + '" download aria-label="Download PDF: ' + esc(it.title) + '">PDF</a>' : "";
    return "<li>" +
      '<div class="meta"><span class="badge ' + esc(it.level.toLowerCase()) + '">' + esc(it.level) + "</span>" +
      '<span class="badge type">' + esc(it.skill) + "</span>" + (it.lesson ? "" : ' <span class="badge type">PDF</span>') + pdf + "</div>" +
      '<a class="title" href="' + esc(it.lesson || it.pdf) + '">' + esc(it.title) + "</a>" +
      "<p>" + esc(it.description) + "</p></li>";
  }).join("\n") + "</ul>";
}

function build() {
  const lib = JSON.parse(fs.readFileSync(path.join(ROOT, "data/library.json"), "utf8"));
  const page = fs.readFileSync(PAGE, "utf8");
  const block = START + "\n" + listHtml(lib.resources) + "\n" + END;
  const re = new RegExp(START.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "[\\s\\S]*?" + END);
  let next;
  if (re.test(page)) next = page.replace(re, () => block);
  else next = page.replace(/(<div data-catalog data-base="">)<p class="empty">Loading&hellip;<\/p>(<\/div>)/, (m, a, b) => a + "\n" + block + "\n" + b);
  if (next === page && !re.test(page)) throw new Error("library.html: no catalogue placeholder found");
  return { page, next };
}

module.exports = { build };
if (require.main === module) {
  const { page, next } = build();
  if (process.argv.includes("--check")) {
    console.log(next === page ? "library.html lesson list is up to date" : "library.html lesson list is out of date: run node scripts/static-catalog.js");
    process.exit(next === page ? 0 : 1);
  }
  if (next !== page) fs.writeFileSync(PAGE, next);
  console.log(next !== page ? "library.html lesson list written" : "library.html lesson list already up to date");
}
