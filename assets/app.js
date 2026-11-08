// Shared behaviour for the mastering-english-library static site.
(function () {
  "use strict";

  // Mark the current page in the header navigation.
  var here = location.pathname.replace(/\/index\.html$/, "/");
  document.querySelectorAll("header.site nav a").forEach(function (a) {
    var target = new URL(a.getAttribute("href"), location.href).pathname.replace(/\/index\.html$/, "/");
    if (target === here) a.setAttribute("aria-current", "page");
  });

  // Vocabulary quiz mode: hide definitions until a word is clicked.
  var toggle = document.querySelector("[data-quiz-toggle]");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var on = document.body.classList.toggle("quiz-mode");
      toggle.textContent = on ? "Show all definitions" : "Quiz me: hide definitions";
      document.querySelectorAll(".vocab li").forEach(function (li) { li.classList.remove("revealed"); });
    });
    document.querySelectorAll(".vocab li").forEach(function (li) {
      li.addEventListener("click", function () {
        if (document.body.classList.contains("quiz-mode")) li.classList.toggle("revealed");
      });
    });
  }

  // Progress: learners can mark lessons as done. Stored only in this browser (localStorage);
  // if storage is blocked, the button still toggles for this visit.
  var DONE_KEY = "mel-done-lessons";
  var memoryDone = [];
  function readDone() {
    try { var v = JSON.parse(localStorage.getItem(DONE_KEY) || "[]"); return Array.isArray(v) ? v : []; }
    catch (e) { return memoryDone; }
  }
  function writeDone(list) {
    memoryDone = list;
    try { localStorage.setItem(DONE_KEY, JSON.stringify(list)); } catch (e) { /* private mode: keep in memory */ }
  }
  function slugFromPath(path) { var m = /([a-z0-9-]+)\.html$/.exec(path || ""); return m ? m[1] : ""; }

  var lessonHead = document.querySelector("article .lesson-head");
  var pager = document.querySelector("nav.pager");
  if (lessonHead && pager && /\/lessons\//.test(location.pathname)) {
    var slug = slugFromPath(location.pathname);
    var row = document.createElement("p");
    row.className = "done-row no-print";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "toggle secondary";
    var paint = function () {
      var on = readDone().indexOf(slug) !== -1;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.textContent = on ? "\u2713 Done. Mark as not done" : "Mark this lesson as done";
    };
    btn.addEventListener("click", function () {
      var list = readDone().filter(function (s) { return s !== slug; });
      if (btn.getAttribute("aria-pressed") !== "true") list.push(slug);
      writeDone(list);
      paint();
    });
    paint();
    row.appendChild(btn);
    var related = document.querySelector("aside.related");
    (related || pager).parentNode.insertBefore(row, related || pager);
  }

  // Library catalogue: load data/library.json and filter it.
  var catalog = document.querySelector("[data-catalog]");
  if (!catalog) return;

  var base = catalog.getAttribute("data-base") || "";
  var items = [];
  var q = document.getElementById("f-search");
  var level = document.getElementById("f-level");
  var skill = document.getElementById("f-skill");
  var count = document.getElementById("f-count");
  var hideDone = document.getElementById("f-hide-done");
  var LEVELS = /^(B1|B2|C1|C2)$/;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // Library entries may only point to a lesson or PDF inside this site; anything else becomes a dead "#" link.
  function link(p) { return /^(lessons|pdfs\/(b1|b2|c1|c2))\/[a-z0-9-]+\.(html|pdf)$/.test(p) ? base + p : "#"; }

  // Filters live in the address (?level=B2&skill=Speaking&q=essay) so a filtered list can be shared.
  // The older library.html#B2 form still works.
  function readUrl() {
    var u = new URLSearchParams(location.search);
    var h = location.hash.replace("#", "").toUpperCase();
    var lv = (u.get("level") || (LEVELS.test(h) ? h : "")).toUpperCase();
    if (LEVELS.test(lv)) level.value = lv;
    var sk = u.get("skill") || "";
    for (var i = 0; i < skill.options.length; i++) {
      if (skill.options[i].value.toLowerCase() === sk.toLowerCase()) skill.value = skill.options[i].value;
    }
    if (u.get("q")) q.value = u.get("q");
    if (hideDone && u.get("done") === "hide") hideDone.checked = true;
  }
  function writeUrl() {
    var u = new URLSearchParams();
    if (level.value) u.set("level", level.value);
    if (skill.value) u.set("skill", skill.value);
    if (q.value.trim()) u.set("q", q.value.trim());
    if (hideDone && hideDone.checked) u.set("done", "hide");
    var s = u.toString();
    history.replaceState(null, "", location.pathname + (s ? "?" + s : ""));
  }

  // Each web lesson and its PDF share a title and level: show them as one card.
  function group(resources) {
    var pdfs = {};
    resources.forEach(function (r) { if (r.type === "pdf") pdfs[r.level + "|" + r.title] = r; });
    var used = {};
    var out = [];
    resources.forEach(function (r) {
      if (r.type !== "lesson") return;
      var key = r.level + "|" + r.title;
      var pdf = pdfs[key];
      if (pdf) used[key] = true;
      out.push({ title: r.title, level: r.level, skill: r.skill, description: r.description, tags: r.tags,
        lesson: r.path, pdf: pdf ? pdf.path : null });
    });
    resources.forEach(function (r) {
      if (r.type === "pdf" && !used[r.level + "|" + r.title]) {
        out.push({ title: r.title, level: r.level, skill: r.skill, description: r.description, tags: r.tags, lesson: null, pdf: r.path });
      }
    });
    return out;
  }

  function render() {
    var text = (q.value || "").trim().toLowerCase();
    var done = readDone();
    // The "Hide finished" option only appears once the learner has finished a lesson.
    if (hideDone) hideDone.parentNode.hidden = !done.length;
    var out = items.filter(function (it) {
      if (hideDone && hideDone.checked && it.lesson && done.indexOf(slugFromPath(it.lesson)) !== -1) return false;
      if (level.value && it.level !== level.value) return false;
      if (skill.value && it.skill !== skill.value) return false;
      if (text) {
        var hay = (it.title + " " + it.description + " " + (it.tags || []).join(" ")).toLowerCase();
        if (hay.indexOf(text) === -1) return false;
      }
      return true;
    });
    var doneCount = items.filter(function (it) { return it.lesson && done.indexOf(slugFromPath(it.lesson)) !== -1; }).length;
    count.textContent = out.length + " of " + items.length + " lessons" + (doneCount ? " \u00b7 " + doneCount + " done" : "");
    if (!out.length) {
      catalog.innerHTML = '<p class="empty">Nothing matches those filters yet.</p>';
      return;
    }
    catalog.innerHTML = "<ul class=\"list\">" + out.map(function (it) {
      var main = it.lesson || it.pdf;
      var isDone = it.lesson && done.indexOf(slugFromPath(it.lesson)) !== -1;
      var pdf = it.lesson && it.pdf ? '<a class="pdf" href="' + esc(link(it.pdf)) + '" download aria-label="Download PDF: ' + esc(it.title) + '">PDF</a>' : "";
      return "<li>" +
        '<div class="meta"><span class="badge ' + esc(it.level.toLowerCase()) + '">' + esc(it.level) + "</span>" +
        '<span class="badge type">' + esc(it.skill) + "</span>" + (it.lesson ? "" : ' <span class="badge type">PDF</span>') + (isDone ? ' <span class="badge done">\u2713 Done</span>' : "") + pdf + "</div>" +
        '<a class="title" href="' + esc(link(main)) + '">' + esc(it.title) + "</a>" +
        "<p>" + esc(it.description) + "</p></li>";
    }).join("") + "</ul>";
  }

  fetch(base + "data/library.json")
    .then(function (r) {
      if (!r.ok) throw new Error("library.json: HTTP " + r.status);
      return r.json();
    })
    .then(function (data) {
      if (!data || !Array.isArray(data.resources) || !data.resources.length) throw new Error("library.json: no resources");
      items = group(data.resources);
      var order = { B1: 1, B2: 2, C1: 3, C2: 4 };
      var rank = function (lv) { return order[lv] || 99; };
      items.sort(function (a, b) { return (rank(a.level) - rank(b.level)) || a.title.localeCompare(b.title); });
      readUrl();
      [q, level, skill, hideDone].forEach(function (el) { if (el) el.addEventListener("input", function () { writeUrl(); render(); }); });
      render();
    })
    .catch(function (err) {
      console.error("Free lessons list failed to load:", err);
      catalog.innerHTML = '<p class="empty">The lesson list could not load. Please reload the page in a moment.</p>';
    });
})();
