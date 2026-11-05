// Course player: slides with knowledge checks, a curriculum sidebar, and the graded challenge.
// Rules: a knowledge check must be answered correctly before you can move on; the graded challenge
// unlocks after every slide has been seen; the next module unlocks after you pass this one.
(function () {
  "use strict";

  var SLIDES_KEY = "me-slides";
  var NOTES_KEY = "me-notes";

  var stage = document.getElementById("stage");
  var dotsEl = document.getElementById("dots");
  var countEl = document.getElementById("count");
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var listenBtn = document.getElementById("listenBtn");
  var side = document.getElementById("plSide");
  var tabPanel = document.getElementById("tabPanel");

  var data, slides, course, slug, L, mod, idx = 0, dir = 1, tab = "overview";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function get(k, fb) { try { return JSON.parse(localStorage.getItem(k)) || fb; } catch (e) { return fb; } }
  function put(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage off */ } }
  function state(s) {
    var all = get(SLIDES_KEY, {});
    return all[s] || { seen: [], last: 0 };
  }
  function saveState(s, st) { var all = get(SLIDES_KEY, {}); all[s] = st; put(SLIDES_KEY, all); }
  function passed(s) { var p = MECourse.progress()[s]; return !!(p && p.passed); }
  function unlocked(s) {
    var i = course.lessons.indexOf(s);
    return i <= 0 || passed(course.lessons[i - 1]);
  }
  function deck(s) { return (slides[s] || []).concat([{ t: "challenge" }]); }
  function titleOf(sl) {
    return { cover: "Introduction", check: "Knowledge check", summary: "Key takeaways", challenge: "Graded challenge" }[sl.t] || sl.h || "Slide";
  }
  function kindOf(sl) {
    return { cover: "Intro", text: "Concept", table: "Reference", example: "Before → after", dodont: "Do and don't", check: "Quiz · required", summary: "Summary", challenge: L.questions.length + " questions · pass " + data.passMark + "%" }[sl.t];
  }
  function allSeen(s) {
    var st = state(s), n = (slides[s] || []).length;
    for (var i = 0; i < n; i++) if (st.seen.indexOf(i) === -1) return false;
    return true;
  }

  // ---------- slide rendering ----------
  function bullets(list) { return '<ul class="s-bullets">' + list.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>"; }
  function renderSlide(sl, i) {
    var h = sl.h ? '<h2 class="s-h">' + esc(sl.h) + "</h2>" : "";
    switch (sl.t) {
      case "cover":
        return '<span class="s-kicker">' + esc(sl.kicker) + '</span><h1 class="s-h s-title">' + esc(sl.title) + '</h1><p class="s-sub">' + esc(sl.sub) + "</p>" +
          '<button class="s-cta" type="button" data-go="next">Start the module →</button><span class="s-num">' + String(course.lessons.indexOf(slug) + 1).padStart(2, "0") + "</span>";
      case "text":
        return h + (sl.p ? '<p class="s-p">' + esc(sl.p) + "</p>" : "") + (sl.big ? '<p class="s-big">' + esc(sl.big) + "</p>" : "") +
          (sl.quote ? '<p class="s-quote">' + esc(sl.quote) + "</p>" : "") + (sl.bullets ? bullets(sl.bullets) : "") + (sl.note ? '<p class="s-note">' + esc(sl.note) + "</p>" : "");
      case "table":
        return h + '<table class="s-table"><thead><tr>' + sl.head.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          sl.rows.map(function (r, k) { return '<tr style="animation-delay:' + (k * 0.05) + 's">' + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table>" +
          (sl.note ? '<p class="s-note">' + esc(sl.note) + "</p>" : "");
      case "example":
        return h + '<div class="s-pairs">' + sl.pairs.map(function (p) {
          return '<div class="s-pair"><span class="s-bad">' + esc(p.bad) + '</span><span class="s-arrow" aria-hidden="true">→</span><span class="s-good">' + esc(p.good) + "</span>" +
            (p.note ? '<span class="s-why">' + esc(p.note) + "</span>" : "") + "</div>";
        }).join("") + "</div>";
      case "dodont":
        return h + '<div class="s-dd"><div class="do"><h3>✓ Do</h3><ul>' + sl.do.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") +
          '</ul></div><div class="dont"><h3>✗ Don\'t</h3><ul>' + sl.dont.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div></div>";
      case "check":
        var done = state(slug).seen.indexOf(i) > -1;
        return '<span class="s-badge">⚡ Knowledge check · answer to continue</span><h2 class="s-h">' + esc(sl.q) + "</h2>" +
          '<div class="s-opts">' + sl.opts.map(function (o, k) {
            return '<button type="button" data-opt="' + k + '"' + (done ? " disabled" + (k === sl.a ? ' class="ok"' : "") : "") + ">" + esc(o) + "</button>";
          }).join("") + "</div>" +
          '<p class="s-fb" aria-live="polite">' + (done ? "✓ " + esc(sl.why) : "") + "</p>";
      case "summary":
        return h + '<ul class="s-sum">' + sl.points.map(function (p) { return '<li><span class="tick">✓</span>' + esc(p) + "</li>"; }).join("") + "</ul>" +
          '<p class="s-note">Next: the graded challenge. ' + L.questions.length + " questions, " + data.passMark + "% to pass.</p>";
    }
    return "";
  }

  function show(i, d) {
    stopSpeech();
    var list = deck(slug);
    idx = Math.max(0, Math.min(list.length - 1, i));
    dir = d || 1;
    var sl = list[idx];
    var st = state(slug);
    st.last = idx;

    if (sl.t === "challenge") {
      stage.className = "stage flow";
      stage.removeAttribute("data-level");
      if (!allSeen(slug)) {
        var left = (slides[slug] || []).length - st.seen.length;
        stage.innerHTML = '<div class="lock-box"><span class="big-ic">🔒</span><h2>Finish the slides first</h2><p>You have ' + left + " slide" + (left > 1 ? "s" : "") +
          " left, including any knowledge checks. The graded challenge unlocks when you have seen every slide.</p>" +
          '<button class="c-btn" type="button" data-go="first-unseen">Go to the next unseen slide</button></div>';
      } else {
        stage.innerHTML = "";
        MECourse.mount(stage, data, slug, {
          where: { course: course, index: course.lessons.indexOf(slug) },
          link: function (s) { return "course.html?l=" + s; },
          onResult: function (pct, ok) { refresh(); if (ok) confetti(); }
        });
      }
    } else {
      stage.className = "stage";
      stage.setAttribute("data-level", course.level.toLowerCase());
      if (sl.t !== "check" && st.seen.indexOf(idx) === -1) st.seen.push(idx);
      stage.innerHTML = '<div class="slide' + (dir < 0 ? " back" : "") + '">' + renderSlide(sl, idx) + "</div>";
      fit();
    }
    saveState(slug, st);
    refresh();
  }

  // Long slides (big tables) grow instead of overflowing the 16:9 frame.
  function fit() {
    stage.classList.remove("tall");
    var el = stage.querySelector(".slide");
    if (el && el.scrollHeight > stage.clientHeight + 2) stage.classList.add("tall");
  }
  window.addEventListener("resize", function () { if (!stage.classList.contains("flow")) fit(); });

  // ---------- chrome: dots, buttons, outline, progress ----------
  function refresh() {
    var list = deck(slug), st = state(slug), sl = list[idx];
    dotsEl.innerHTML = list.map(function (s, k) {
      var cls = (st.seen.indexOf(k) > -1 ? "seen " : "") + (s.t === "check" ? "chk" : "");
      return '<button type="button" role="tab" class="' + cls + '" aria-selected="' + (k === idx) + '" aria-label="' + esc(titleOf(s)) + '" data-dot="' + k + '"></button>';
    }).join("");
    countEl.textContent = (idx + 1) + " / " + list.length;
    prevBtn.disabled = idx === 0;
    var blocked = sl.t === "check" && st.seen.indexOf(idx) === -1;
    var last = idx === list.length - 1;
    nextBtn.disabled = blocked || (last && !passed(slug));
    nextBtn.classList.toggle("wait", blocked);
    nextBtn.querySelector("span").textContent = blocked ? "Answer to continue" : last ? "Next module" : idx === list.length - 2 ? "Go to challenge" : "Next";
    nextBtn.title = blocked ? "Answer the knowledge check correctly to continue" : "";
    outline();
    progress();
  }
  function outline() {
    document.getElementById("plOutline").innerHTML = course.lessons.map(function (s, m) {
      var lk = !unlocked(s), st = state(s), list = deck(s), open = s === slug;
      var seenN = st.seen.length, tot = (slides[s] || []).length;
      var head = '<button class="ol-head" type="button" data-mod="' + s + '"><strong>Module ' + (m + 1) + ": " + esc(data.lessons[s].title) + "</strong>" +
        "<small>" + (lk ? "🔒 Locked" : passed(s) ? "✓ Passed · " + MECourse.progress()[s].best + "%" : seenN + " / " + tot + " slides") + " · " + esc(data.lessons[s].skill) + '</small><span class="chev">▾</span></button>';
      var items = list.map(function (sl, k) {
        var isCh = sl.t === "challenge";
        var seen = isCh ? passed(s) : st.seen.indexOf(k) > -1;
        var cur = open && k === idx;
        var cls = "ol-item" + (cur ? " current" : "") + (seen ? (isCh ? " passed" : " seen") : "") + (lk ? " locked" : "");
        return '<li><a class="' + cls + '" href="course.html?l=' + s + "&s=" + k + '" data-jump="' + s + ":" + k + '"' + (cur ? ' aria-current="step"' : "") + '><span class="ol-tick">' + (seen ? "✓" : "") + "</span><span>" +
          esc(titleOf(sl)) + '<span class="ol-kind">' + esc(kindOfFor(s, sl)) + "</span></span></a></li>";
      }).join("");
      return '<section class="ol-mod' + (open ? " open" : "") + (lk ? " locked" : "") + '">' + head + '<ul class="ol-list">' + items + "</ul></section>";
    }).join("");
  }
  function kindOfFor(s, sl) {
    if (sl.t === "challenge") return data.lessons[s].questions.length + " questions · pass " + data.passMark + "%";
    return kindOf(sl);
  }
  function progress() {
    var total = 0, done = 0;
    course.lessons.forEach(function (s) {
      total += (slides[s] || []).length + 1;
      done += Math.min(state(s).seen.length, (slides[s] || []).length) + (passed(s) ? 1 : 0);
    });
    var pct = Math.round(done / total * 100);
    document.getElementById("plRing").style.setProperty("--p", pct);
    document.getElementById("plPct").textContent = pct + "%";
  }

  // ---------- knowledge checks ----------
  function answer(btn) {
    var sl = deck(slug)[idx];
    var k = +btn.getAttribute("data-opt");
    var fb = stage.querySelector(".s-fb");
    if (k === sl.a) {
      btn.classList.add("ok");
      stage.querySelectorAll("[data-opt]").forEach(function (b) { b.disabled = true; });
      fb.textContent = "✓ " + sl.why;
      var st = state(slug);
      if (st.seen.indexOf(idx) === -1) st.seen.push(idx);
      saveState(slug, st);
      refresh();
      nextBtn.focus();
    } else {
      btn.classList.add("no");
      btn.disabled = true;
      fb.textContent = "✗ Not quite. Read the slide before this one again, then try another answer.";
    }
  }

  // ---------- listen ----------
  function stopSpeech() {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    listenBtn.setAttribute("aria-pressed", "false");
  }
  function listen() {
    if (!("speechSynthesis" in window)) return;
    if (listenBtn.getAttribute("aria-pressed") === "true") { stopSpeech(); return; }
    var text = Array.prototype.map.call(stage.querySelectorAll(".s-kicker, .s-h, .s-sub, .s-p, .s-big, .s-quote, li, td, .s-good, .s-opts button, .s-note"), function (el) {
      return el.textContent.replace(/[✓✗→⚡]/g, "");
    }).join(". ");
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "en-GB";
    u.rate = 0.95;
    var v = speechSynthesis.getVoices().find(function (x) { return x.lang === "en-GB"; });
    if (v) u.voice = v;
    u.onend = stopSpeech;
    listenBtn.setAttribute("aria-pressed", "true");
    speechSynthesis.speak(u);
  }

  // ---------- tabs ----------
  function renderTab() {
    document.querySelectorAll("[data-tab]").forEach(function (b) { b.setAttribute("aria-selected", b.getAttribute("data-tab") === tab); });
    var p = MECourse.progress()[slug];
    if (tab === "overview") {
      tabPanel.innerHTML = "<h2>" + esc(L.title) + "</h2>" +
        '<div class="ov-stats"><span><strong>' + (slides[slug] || []).length + "</strong> slides</span><span><strong>" +
        (slides[slug] || []).filter(function (s) { return s.t === "check"; }).length + "</strong> knowledge checks</span><span><strong>" + L.questions.length +
        "</strong> challenge questions</span><span>Pass mark <strong>" + data.passMark + "%</strong></span>" + (p ? "<span>Your best <strong>" + p.best + "%</strong></span>" : "") + "</div>" +
        '<div class="dd"><div class="dd-col do"><h3>✓ Do</h3><ul>' + L.do.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
        '<div class="dd-col dont"><h3>✗ Don\'t</h3><ul>' + L.dont.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div></div>" +
        '<p class="c-note" style="margin-top:1rem">How this module works: knowledge checks must be answered correctly before you continue. The graded challenge unlocks after every slide, and the next module unlocks when you score ' + data.passMark + "% or more.</p>";
    } else if (tab === "notes") {
      var notes = get(NOTES_KEY, {});
      tabPanel.innerHTML = '<label for="notesArea"><strong>Notes for this module</strong></label>' +
        '<textarea id="notesArea" class="notes-area" placeholder="Write the rules in your own words, your mistakes, and example sentences of your own.">' + esc(notes[slug] || "") + "</textarea>" +
        '<p class="notes-meta" id="notesMeta">Saved in this browser.</p>';
      var ta = document.getElementById("notesArea"), t;
      ta.addEventListener("input", function () {
        clearTimeout(t);
        t = setTimeout(function () {
          var n = get(NOTES_KEY, {}); n[slug] = ta.value; put(NOTES_KEY, n);
          document.getElementById("notesMeta").textContent = "Saved ✓";
        }, 400);
      });
    } else if (tab === "resources") {
      var lv = course.level.toLowerCase();
      tabPanel.innerHTML = '<ul class="res-list">' +
        '<li><a href="lessons/' + slug + '.html">📄 Read the full lesson page</a></li>' +
        '<li><a href="pdfs/' + lv + "/" + slug + '.pdf" download>⬇️ Download the printable PDF</a></li>' +
        '<li><a href="dictionary.html">📖 Look up words in the dictionary</a></li>' +
        '<li><a href="courses.html">🎓 All courses and certificates</a></li></ul>';
    } else {
      tabPanel.innerHTML = '<div class="keys">' + "<kbd>→</kbd><span>Next slide</span><kbd>←</kbd><span>Previous slide</span><kbd>1–4</kbd><span>Choose an answer in a knowledge check</span><kbd>L</kbd><span>Listen to the slide</span><kbd>F</kbd><span>Full screen</span>" + "</div>";
    }
  }

  // ---------- confetti ----------
  function confetti() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var c = document.getElementById("confetti"), ctx = c.getContext("2d");
    c.width = innerWidth; c.height = innerHeight;
    var colors = ["#e8a33d", "#0f8b8d", "#3b3b98", "#6a4cc0", "#a0522d", "#ffffff"];
    var ps = [];
    for (var i = 0; i < 160; i++) ps.push({ x: innerWidth / 2, y: innerHeight / 3, vx: (Math.random() - .5) * 14, vy: Math.random() * -12 - 4, r: Math.random() * 6 + 4, c: colors[i % colors.length], a: Math.random() * 6 });
    var t0 = performance.now();
    (function frame(t) {
      ctx.clearRect(0, 0, c.width, c.height);
      ps.forEach(function (p) {
        p.vy += .35; p.x += p.vx; p.y += p.vy; p.a += .1;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * .6); ctx.restore();
      });
      if (t - t0 < 2600) requestAnimationFrame(frame); else ctx.clearRect(0, 0, c.width, c.height);
    })(t0);
  }

  // ---------- module switching ----------
  function openModule(s, at) {
    if (!data.lessons[s]) s = course.lessons[0];
    slug = s;
    L = data.lessons[s];
    history.replaceState(null, "", "course.html?l=" + s);
    document.getElementById("plCourse").textContent = course.title;
    document.getElementById("plModule").textContent = "Module " + (course.lessons.indexOf(s) + 1) + " of " + course.lessons.length + " · " + L.title;
    document.title = L.title + " | " + course.title + " | Mastering English Library";
    if (!unlocked(s)) {
      var prev = course.lessons[course.lessons.indexOf(s) - 1];
      stage.className = "stage flow";
      stage.innerHTML = '<div class="lock-box"><span class="big-ic">🔒</span><h2>This module is locked</h2><p>Pass <strong>' + esc(data.lessons[prev].title) +
        "</strong> with " + data.passMark + "% or more to unlock it. Building on a weak base is how gaps start.</p>" +
        '<a class="c-btn" href="course.html?l=' + prev + '">Go to ' + esc(data.lessons[prev].title) + "</a></div>";
      dotsEl.innerHTML = ""; countEl.textContent = ""; prevBtn.disabled = true; nextBtn.disabled = true;
      outline(); progress(); renderTab();
      return;
    }
    var st = state(s);
    show(typeof at === "number" ? at : st.last || 0, 1);
    renderTab();
  }

  // ---------- events ----------
  prevBtn.addEventListener("click", function () { show(idx - 1, -1); });
  nextBtn.addEventListener("click", function () {
    var list = deck(slug);
    if (idx < list.length - 1) { show(idx + 1, 1); return; }
    var n = course.lessons[course.lessons.indexOf(slug) + 1];
    location.href = n ? "course.html?l=" + n : "courses.html";
  });
  listenBtn.addEventListener("click", listen);
  document.getElementById("fsBtn").addEventListener("click", toggleFs);
  function toggleFs() {
    var w = document.querySelector(".stage-wrap");
    if (document.fullscreenElement) document.exitFullscreen();
    else if (w.requestFullscreen) w.requestFullscreen();
  }
  document.addEventListener("click", function (ev) {
    var t = ev.target;
    var opt = t.closest("[data-opt]");
    if (opt && !opt.disabled) { answer(opt); return; }
    var dot = t.closest("[data-dot]");
    if (dot) { var k = +dot.getAttribute("data-dot"); show(k, k < idx ? -1 : 1); return; }
    var go = t.closest("[data-go]");
    if (go) {
      if (go.getAttribute("data-go") === "next") show(idx + 1, 1);
      else { var st = state(slug), n = (slides[slug] || []).length; for (var i = 0; i < n; i++) if (st.seen.indexOf(i) === -1) { show(i, -1); break; } }
      return;
    }
    var mh = t.closest("[data-mod]");
    if (mh) { mh.parentElement.classList.toggle("open"); return; }
    var j = t.closest("[data-jump]");
    if (j) {
      ev.preventDefault();
      var parts = j.getAttribute("data-jump").split(":");
      if (j.classList.contains("locked")) return;
      side.classList.remove("open");
      if (parts[0] !== slug) openModule(parts[0], +parts[1]); else show(+parts[1], +parts[1] < idx ? -1 : 1);
      return;
    }
    var tb = t.closest("[data-tab]");
    if (tb) { tab = tb.getAttribute("data-tab"); renderTab(); }
  });
  document.addEventListener("keydown", function (ev) {
    if (/input|textarea/i.test(ev.target.tagName)) return;
    if (ev.key === "ArrowRight" && !nextBtn.disabled) nextBtn.click();
    else if (ev.key === "ArrowLeft" && !prevBtn.disabled) prevBtn.click();
    else if (ev.key === "l" || ev.key === "L") listen();
    else if (ev.key === "f" || ev.key === "F") toggleFs();
    else if (/^[1-4]$/.test(ev.key)) { var b = stage.querySelector('[data-opt="' + (+ev.key - 1) + '"]'); if (b && !b.disabled) answer(b); }
  });
  var menu = document.getElementById("plMenu");
  menu.addEventListener("click", function () { var o = side.classList.toggle("open"); menu.setAttribute("aria-expanded", o); });
  document.getElementById("plClose").addEventListener("click", function () { side.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); });

  // ---------- boot ----------
  Promise.all([MECourse.load(), fetch("data/slides.json").then(function (r) { return r.json(); })]).then(function (res) {
    data = res[0]; slides = res[1];
    var q = new URLSearchParams(location.search);
    var s = q.get("l") || data.courses[0].lessons[0];
    var where = MECourse.locate(data, s) || { course: data.courses[0] };
    course = where.course;
    var at = q.get("s");
    openModule(s, at === null ? undefined : +at);
  }).catch(function () {
    stage.className = "stage flow";
    stage.innerHTML = '<div class="lock-box"><h2>Couldn\'t load the course</h2><p>Open the site through a web server, for example GitHub Pages.</p></div>';
  });
})();
