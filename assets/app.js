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

// Double-click any word in a lesson to see its dictionary entry in a popup.
(function () {
  "use strict";
  var scope = document.querySelector("article");
  if (!scope || document.getElementById("dictMain")) return;
  var BASE = new URL("../", document.currentScript.src).href;
  var dict = null, pop = null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function close() { if (pop) { pop.remove(); pop = null; } }
  function loadDict() {
    if (!dict) dict = fetch(BASE + "data/dictionary.json").then(function (r) { return r.json(); }).then(function (d) {
      var map = {};
      d.entries.forEach(function (e) {
        var k = e.word.toLowerCase();
        map[k] = e;
        map[k.replace(/^(a|an|the|to) /, "")] = e;
      });
      return map;
    }).catch(function () { return {}; });
    return dict;
  }
  function show(word, rect) {
    close();
    pop = document.createElement("div");
    pop.className = "lookup-pop";
    pop.setAttribute("role", "dialog");
    pop.setAttribute("aria-label", "Dictionary: " + word);
    pop.innerHTML = '<button class="lp-x" type="button" aria-label="Close">×</button><span class="lp-w">' + esc(word) + "</span><p>Looking up…</p>";
    document.body.appendChild(pop);
    var left = Math.min(window.scrollX + rect.left, window.scrollX + document.documentElement.clientWidth - pop.offsetWidth - 12);
    pop.style.left = Math.max(window.scrollX + 12, left) + "px";
    pop.style.top = (window.scrollY + rect.bottom + 8) + "px";
    pop.querySelector(".lp-x").addEventListener("click", close);
    var link = '<a class="lp-more" href="' + BASE + "dictionary.html?q=" + encodeURIComponent(word) + '">Full entry: pronunciation, examples, mistakes →</a>';
    var linkFor = function (w) { return link.replace(encodeURIComponent(word), encodeURIComponent(w)); };
    var mine = pop;
    loadDict().then(function (map) {
      if (mine !== pop) return;
      // A phrase such as "meet a deadline" falls back to its longest listed word.
      var e = map[word] || word.split(" ").sort(function (a, b) { return b.length - a.length; })
        .map(function (w) { return map[w]; }).filter(Boolean)[0];
      if (e) {
        var s = e.senses[0];
        pop.querySelector(".lp-w").textContent = e.word;
        pop.querySelector("p").outerHTML = '<span class="lp-pos">' + esc(e.pos) + "</span>" +
          '<p><strong style="color:var(--accent)">' + esc(s.level) + "</strong> " + esc(s.def) + "</p>" +
          '<p dir="rtl" lang="ar" style="text-align:right">' + esc(s.ar) + "</p>" + linkFor(e.word);
        return;
      }
      fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(word))
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) {
          if (mine !== pop) return;
          var m = d && d[0] && d[0].meanings && d[0].meanings[0];
          pop.querySelector("p").outerHTML = m ?
            '<span class="lp-pos">' + esc(m.partOfSpeech) + "</span><p>" + esc(m.definitions[0].definition) + "</p>" + link :
            "<p>No entry found.</p>" + link;
        })
        .catch(function () { if (mine === pop) pop.querySelector("p").textContent = "Not in our learner list, and the online dictionary isn't responding right now."; });
    });
  }
  scope.addEventListener("dblclick", function (ev) {
    var sel = window.getSelection();
    var head = ev.target.closest(".vocab .word");
    var raw = head ? head.textContent : String(sel).trim().split(/\s+/)[0] || "";
    var word = raw.toLowerCase().replace(/[^a-z' -]/g, "").replace(/\s+/g, " ").trim();
    if (!word || word.length < 2) return;
    var rect = head ? head.getBoundingClientRect() : sel.rangeCount ? sel.getRangeAt(0).getBoundingClientRect() : ev.target.getBoundingClientRect();
    show(word, rect);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  document.addEventListener("click", function (e) { if (pop && !pop.contains(e.target)) close(); });
})();
