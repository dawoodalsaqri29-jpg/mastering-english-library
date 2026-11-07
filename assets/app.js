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

  // Library catalogue: load data/library.json and filter it.
  var catalog = document.querySelector("[data-catalog]");
  if (!catalog) return;

  var base = catalog.getAttribute("data-base") || "";
  var items = [];
  var q = document.getElementById("f-search");
  var level = document.getElementById("f-level");
  var skill = document.getElementById("f-skill");
  var count = document.getElementById("f-count");
  var LEVELS = /^(B1|B2|C1|C2)$/;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function link(p) { return /^https?:/.test(p) ? p : base + p; }

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
  }
  function writeUrl() {
    var u = new URLSearchParams();
    if (level.value) u.set("level", level.value);
    if (skill.value) u.set("skill", skill.value);
    if (q.value.trim()) u.set("q", q.value.trim());
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
    var out = items.filter(function (it) {
      if (level.value && it.level !== level.value) return false;
      if (skill.value && it.skill !== skill.value) return false;
      if (text) {
        var hay = (it.title + " " + it.description + " " + (it.tags || []).join(" ")).toLowerCase();
        if (hay.indexOf(text) === -1) return false;
      }
      return true;
    });
    count.textContent = out.length + " of " + items.length + " lessons";
    if (!out.length) {
      catalog.innerHTML = '<p class="empty">Nothing matches those filters yet.</p>';
      return;
    }
    catalog.innerHTML = "<ul class=\"list\">" + out.map(function (it) {
      var main = it.lesson || it.pdf;
      var pdf = it.lesson && it.pdf ? '<a class="pdf" href="' + esc(link(it.pdf)) + '" download aria-label="Download PDF: ' + esc(it.title) + '">PDF</a>' : "";
      return "<li>" +
        '<div class="meta"><span class="badge ' + esc(it.level.toLowerCase()) + '">' + esc(it.level) + "</span>" +
        '<span class="badge type">' + esc(it.skill) + "</span>" + (it.lesson ? "" : ' <span class="badge type">PDF</span>') + pdf + "</div>" +
        '<a class="title" href="' + esc(link(main)) + '">' + esc(it.title) + "</a>" +
        "<p>" + esc(it.description) + "</p></li>";
    }).join("") + "</ul>";
  }

  fetch(base + "data/library.json")
    .then(function (r) { return r.json(); })
    .then(function (data) {
      items = group(data.resources || []);
      var order = { B1: 1, B2: 2, C1: 3, C2: 4 };
      items.sort(function (a, b) { return (order[a.level] - order[b.level]) || a.title.localeCompare(b.title); });
      readUrl();
      [q, level, skill].forEach(function (el) { el.addEventListener("input", function () { writeUrl(); render(); }); });
      render();
    })
    .catch(function () {
      catalog.innerHTML = '<p class="empty">Could not load the catalogue. If you opened this file directly, serve the folder over HTTP instead.</p>';
    });
})();
