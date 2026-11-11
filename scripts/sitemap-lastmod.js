// Writes <lastmod> for every URL in sitemap.xml: the date of the last commit that changed the page,
// or today for a page with uncommitted changes. Run it after changing pages: node scripts/sitemap-lastmod.js
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const SITE = "https://dawoodalsaqri29-jpg.github.io/mastering-english-library/";
const git = (...args) => execFileSync("git", args, { cwd: ROOT, encoding: "utf8" }).trim();
const today = new Date().toISOString().slice(0, 10);

function lastmod(file) {
  if (git("status", "--porcelain", "--", file)) return today;
  return git("log", "-1", "--format=%cs", "--", file) || today;
}

const file = path.join(ROOT, "sitemap.xml");
const xml = fs.readFileSync(file, "utf8").replace(/\s*<lastmod>[^<]*<\/lastmod>/g, "");
const out = xml.replace(/(<loc>([^<]+)<\/loc>)/g, (all, loc, url) => {
  if (!url.startsWith(SITE)) throw new Error("sitemap URL outside the site: " + url);
  const page = url === SITE ? "index.html" : url.slice(SITE.length);
  if (!/^[a-z0-9][a-z0-9/._-]*\.html$/.test(page) || !fs.existsSync(path.join(ROOT, page))) throw new Error("no file for " + url);
  return loc + "<lastmod>" + lastmod(page) + "</lastmod>";
});
fs.writeFileSync(file, out);
console.log("sitemap.xml: lastmod written for " + (out.match(/<lastmod>/g) || []).length + " URLs");
