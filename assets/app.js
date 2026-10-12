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
  var type = document.getElementById("f-type");
  var count = document.getElementById("f-count");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function render() {
    var text = (q.value || "").trim().toLowerCase();
    var out = items.filter(function (it) {
      if (level.value && it.level !== level.value) return false;
      if (skill.value && it.skill !== skill.value) return false;
      if (type.value && it.type !== type.value) return false;
      if (text) {
        var hay = (it.title + " " + it.description + " " + (it.tags || []).join(" ")).toLowerCase();
        if (hay.indexOf(text) === -1) return false;
      }
      return true;
    });
    count.textContent = out.length + " of " + items.length + " resources";
    if (!out.length) {
      catalog.innerHTML = '<p class="empty">Nothing matches those filters yet.</p>';
      return;
    }
    catalog.innerHTML = "<ul class=\"list\">" + out.map(function (it) {
      var href = /^https?:/.test(it.path) ? it.path : base + it.path;
      var ext = it.type === "pdf" ? ' <span class="badge type">PDF</span>' : ' <span class="badge type">Web lesson</span>';
      return "<li>" +
        '<div class="meta"><span class="badge ' + esc(it.level.toLowerCase()) + '">' + esc(it.level) + "</span>" +
        '<span class="badge type">' + esc(it.skill) + "</span>" + ext + "</div>" +
        '<a class="title" href="' + esc(href) + '">' + esc(it.title) + "</a>" +
        "<p>" + esc(it.description) + "</p></li>";
    }).join("") + "</ul>";
  }

  fetch(base + "data/library.json")
    .then(function (r) { return r.json(); })
    .then(function (data) {
      items = data.resources || [];
      var order = { B1: 1, B2: 2, C1: 3, C2: 4 };
      items.sort(function (a, b) { return (order[a.level] - order[b.level]) || a.title.localeCompare(b.title); });
      [q, level, skill, type].forEach(function (el) { el.addEventListener("input", render); });
      render();
    })
    .catch(function () {
      catalog.innerHTML = '<p class="empty">Could not load the catalogue. If you opened this file directly, serve the folder over HTTP instead.</p>';
    });
})();
