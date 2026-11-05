// Graded challenges for lessons, and the Courses dashboard.
// Progress is kept in this browser only (localStorage).
(function () {
  "use strict";

  var script = document.currentScript;
  var BASE = new URL("../", script.src).href;
  var PROG_KEY = "me-course";
  var DAYS_KEY = "me-days";
  var NAME_KEY = "me-name";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function get(key, fb) { try { return JSON.parse(localStorage.getItem(key)) || fb; } catch (e) { return fb; } }
  function put(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) { /* storage off */ } }
  function norm(s) {
    return String(s || "").toLowerCase().replace(/[’‘`]/g, "'").replace(/[“”]/g, '"')
      .replace(/,/g, "").replace(/\s+/g, " ").trim().replace(/[.!?]+$/, "").trim();
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function today() { return new Date().toISOString().slice(0, 10); }
  function markDay() {
    var d = get(DAYS_KEY, []);
    if (d.indexOf(today()) === -1) { d.push(today()); put(DAYS_KEY, d.slice(-400)); }
  }
  function streak() {
    var d = get(DAYS_KEY, []);
    var n = 0, day = new Date();
    if (d.indexOf(today()) === -1) day.setDate(day.getDate() - 1);
    while (d.indexOf(day.toISOString().slice(0, 10)) > -1) { n++; day.setDate(day.getDate() - 1); }
    return n;
  }
  function fmt(sec) { var m = Math.floor(sec / 60), s = sec % 60; return m + ":" + (s < 10 ? "0" : "") + s; }

  function load() { return fetch(BASE + "data/quizzes.json").then(function (r) { return r.json(); }); }

  function locate(data, slug) {
    for (var c = 0; c < data.courses.length; c++) {
      var i = data.courses[c].lessons.indexOf(slug);
      if (i > -1) return { course: data.courses[c], index: i };
    }
    return null;
  }

  // =====================================================================
  // Lesson page: graded challenge
  // =====================================================================
  function lessonPage(data) {
    var slug = location.pathname.split("/").pop().replace(/\.html$/, "");
    var L = data.lessons[slug];
    var article = document.querySelector("article");
    if (!L || !article) return;
    var where = locate(data, slug);
    var prog = get(PROG_KEY, {});
    var pass = data.passMark;

    // 1. Recommended-order warning.
    if (where && where.index > 0) {
      var prevSlug = where.course.lessons[where.index - 1];
      if (!(prog[prevSlug] && prog[prevSlug].passed)) {
        var w = document.createElement("div");
        w.className = "c-alert warn";
        w.innerHTML = "<strong>⚠️ Recommended order.</strong> You haven't passed <a href=\"" + prevSlug + ".html\">" + esc(data.lessons[prevSlug].title) +
          "</a> yet. You can continue, but skipping lessons is how gaps start. Pass it with " + pass + "% or more first.";
        article.insertBefore(w, article.firstChild);
      }
    }

    // 2. Status chip in the header.
    var head = article.querySelector(".lesson-head .meta");
    if (head && prog[slug]) {
      var chip = document.createElement("span");
      chip.className = "c-chip " + (prog[slug].passed ? "ok" : "no");
      chip.textContent = prog[slug].passed ? "✓ Passed · best " + prog[slug].best + "%" : "Not passed yet · best " + prog[slug].best + "%";
      head.appendChild(chip);
    }

    // 3. Lock the practice answers until the learner has tried the challenge.
    article.querySelectorAll(".exercise details").forEach(function (d) {
      var sum = d.querySelector("summary");
      sum.addEventListener("click", function (ev) {
        if (get(PROG_KEY, {})[slug]) return;
        ev.preventDefault();
        if (!d.querySelector(".c-lock")) {
          var p = document.createElement("p");
          p.className = "c-lock";
          p.innerHTML = "🔒 Write your own answers first, then take the graded challenge below. The answers unlock after your first attempt. Looking first trains recognition, not recall.";
          sum.insertAdjacentElement("afterend", p);
          d.open = true;
        }
      });
    });

    // 4. The challenge section.
    var sec = document.createElement("section");
    sec.className = "challenge";
    sec.id = "challenge";
    var pager = article.querySelector(".pager");
    article.insertBefore(sec, pager);

    function intro() {
      var p = get(PROG_KEY, {})[slug];
      sec.innerHTML = '<div class="c-head"><span class="c-eyebrow">Graded challenge</span><h2>Prove it: ' + L.questions.length + " questions, pass mark " + pass + "%</h2></div>" +
        '<div class="dd"><div class="dd-col do"><h3>✓ Do</h3><ul>' + L.do.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
        '<div class="dd-col dont"><h3>✗ Don\'t</h3><ul>' + L.dont.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div></div>" +
        '<ul class="c-rules"><li><strong>2 tries</strong> per question. Right first time = 1 point, second try = ½ point.</li>' +
        "<li>Questions and options are <strong>shuffled</strong> every attempt, so you can't memorise positions.</li>" +
        "<li>Typed answers must be exact. Spelling counts, just like in an exam.</li></ul>" +
        (p ? '<p class="c-best">Your best: <strong>' + p.best + "%</strong> after " + p.attempts + " attempt" + (p.attempts > 1 ? "s" : "") + (p.passed ? " ✓" : "") + "</p>" : "") +
        '<button type="button" class="c-btn" id="cStart">' + (p ? "Retake the challenge" : "Start the challenge") + "</button>";
      sec.querySelector("#cStart").addEventListener("click", run);
    }

    function run() {
      var qs = shuffle(L.questions);
      var i = 0, score = 0, tries = 0, mistakes = [], t0 = Date.now();
      var timer = setInterval(function () {
        var el = sec.querySelector(".c-time");
        if (el) el.textContent = "⏱ " + fmt(Math.floor((Date.now() - t0) / 1000));
      }, 1000);

      function render() {
        var q = qs[i];
        tries = 0;
        var body;
        if (q.t === "mc") {
          var order = shuffle(q.opts.map(function (o, k) { return k; }));
          body = '<div class="c-opts" role="radiogroup">' + order.map(function (k) {
            return '<button type="button" role="radio" aria-checked="false" data-k="' + k + '">' + esc(q.opts[k]) + "</button>";
          }).join("") + "</div>";
        } else {
          body = '<input class="c-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Your answer" placeholder="' +
            (q.t === "fix" ? "Write the whole corrected sentence" : "Type your answer") + '">';
        }
        var label = q.t === "mc" ? "Choose one" : q.t === "gap" ? "Fill the gap" : "Correct the mistake";
        sec.innerHTML = '<div class="c-top"><span>Question ' + (i + 1) + " of " + qs.length + '</span><span class="c-time">⏱ 0:00</span><span>Score ' + score + "</span></div>" +
          '<div class="c-bar"><span style="width:' + (i / qs.length * 100) + '%"></span></div>' +
          '<p class="c-type">' + label + '</p><p class="c-q">' + esc(q.q) + "</p>" + body +
          '<div class="c-fb" aria-live="polite"></div>' +
          '<div class="c-actions"><button type="button" class="c-btn" id="cCheck">Check</button></div>';
        var check = sec.querySelector("#cCheck");
        var chosen = null;
        if (q.t === "mc") {
          sec.querySelectorAll(".c-opts button").forEach(function (b) {
            b.addEventListener("click", function () {
              if (b.disabled) return;
              sec.querySelectorAll(".c-opts button").forEach(function (x) { x.setAttribute("aria-checked", "false"); });
              b.setAttribute("aria-checked", "true");
              chosen = +b.getAttribute("data-k");
            });
          });
        } else {
          var inp = sec.querySelector(".c-input");
          inp.focus({ preventScroll: true });
          inp.addEventListener("keydown", function (ev) { if (ev.key === "Enter") { ev.preventDefault(); check.click(); } });
        }
        sec.scrollIntoView({ behavior: "smooth", block: "start" });

        check.addEventListener("click", function () {
          var fb = sec.querySelector(".c-fb");
          var given, ok, trap = "";
          if (q.t === "mc") {
            if (chosen === null) { fb.innerHTML = '<p class="c-note">Choose an answer first.</p>'; return; }
            given = q.opts[chosen];
            ok = chosen === q.a;
            trap = (q.traps || {})[String(chosen)] || "";
          } else {
            given = sec.querySelector(".c-input").value;
            if (!norm(given)) { fb.innerHTML = '<p class="c-note">Type an answer first.</p>'; return; }
            ok = q.a.some(function (a) { return norm(a) === norm(given); });
            // Longest trap first, so "would have called" is not caught by "called".
            if (!ok) (q.traps || []).slice().sort(function (x, y) { return y.m.length - x.m.length; }).some(function (t) { if (norm(given).indexOf(norm(t.m)) > -1) { trap = t.msg; return true; } return false; });
          }
          var right = q.t === "mc" ? q.opts[q.a] : q.a[0];
          if (ok) {
            var pts = tries === 0 ? 1 : 0.5;
            score += pts;
            fb.innerHTML = '<div class="c-ok"><strong>✓ Correct' + (pts < 1 ? " on the second try (½ point)" : "") + ".</strong> <span class=\"c-do\">Do:</span> " + esc(q.why) + "</div>";
            finishQ();
          } else if (tries === 0) {
            tries = 1;
            fb.innerHTML = '<div class="c-no"><strong>✗ Not yet. One more try for ½ point.</strong>' +
              (trap ? '<p><span class="c-dont">Don\'t:</span> ' + esc(trap) + "</p>" : "<p>Read the question again. Check the time words, the grammar after the gap, and your spelling.</p>") + "</div>";
            if (q.t === "mc") {
              var b = sec.querySelector('.c-opts button[data-k="' + chosen + '"]');
              b.disabled = true; b.classList.add("no"); b.setAttribute("aria-checked", "false");
              chosen = null;
            } else {
              sec.querySelector(".c-input").select();
            }
          } else {
            mistakes.push({ q: q.q, given: given, right: right, why: q.why, trap: trap });
            fb.innerHTML = '<div class="c-no"><strong>✗ The answer is: ' + esc(right) + "</strong>" +
              (trap ? '<p><span class="c-dont">Don\'t:</span> ' + esc(trap) + "</p>" : "") +
              '<p><span class="c-do">Do:</span> ' + esc(q.why) + "</p></div>";
            finishQ();
          }
          function finishQ() {
            if (q.t === "mc") {
              sec.querySelectorAll(".c-opts button").forEach(function (x) {
                x.disabled = true;
                if (+x.getAttribute("data-k") === q.a) x.classList.add("ok");
              });
            } else {
              sec.querySelector(".c-input").disabled = true;
            }
            check.textContent = i === qs.length - 1 ? "See my result" : "Next question";
            check.replaceWith(check.cloneNode(true));
            var nx = sec.querySelector("#cCheck");
            nx.focus({ preventScroll: true });
            nx.addEventListener("click", function () { i++; if (i < qs.length) render(); else results(); });
          }
        });
      }

      function results() {
        clearInterval(timer);
        var secs = Math.floor((Date.now() - t0) / 1000);
        var pct = Math.round(score / qs.length * 100);
        var passed = pct >= pass;
        var all = get(PROG_KEY, {});
        var prev = all[slug] || { best: 0, attempts: 0, passed: false };
        all[slug] = { best: Math.max(prev.best, pct), attempts: prev.attempts + 1, passed: prev.passed || passed, last: pct, at: Date.now() };
        put(PROG_KEY, all);
        markDay();
        var next = where && where.course.lessons[where.index + 1];
        var nextLink = next ? '<a class="c-btn" href="' + next + '.html">Next lesson: ' + esc(data.lessons[next].title) + " →</a>" :
          '<a class="c-btn" href="' + BASE + 'courses.html">Back to your courses →</a>';
        var review = mistakes.length ? "<h3>Review your mistakes</h3><ol class=\"c-review\">" + mistakes.map(function (m) {
          return "<li><p class=\"c-q\">" + esc(m.q) + "</p><p class=\"bad\">You: " + esc(m.given) + "</p><p class=\"good\">Correct: " + esc(m.right) + "</p>" +
            (m.trap ? '<p><span class="c-dont">Don\'t:</span> ' + esc(m.trap) + "</p>" : "") + '<p><span class="c-do">Do:</span> ' + esc(m.why) + "</p></li>";
        }).join("") + "</ol>" : "";
        sec.innerHTML = '<div class="c-result ' + (passed ? "pass" : "fail") + '">' +
          '<div class="c-ring" style="--p:' + pct + '"><span>' + pct + "%</span></div>" +
          "<div><h2>" + (passed ? (pct === 100 ? "Perfect score! 🏆" : "Passed ✓") : "Not passed yet") + "</h2>" +
          "<p>" + score + " / " + qs.length + " points in " + fmt(secs) + ". Pass mark: " + pass + "%.</p></div></div>" +
          (passed ? (mistakes.length ? '<div class="c-alert tip"><strong>Good work. Read your mistakes below before you move on.</strong> Even after a pass, these are the mistakes you are most likely to make again.</div>' : "") :
            '<div class="c-alert warn"><strong>⚠️ Don\'t move on yet.</strong> Below ' + pass + "% means the rule isn't automatic for you yet. Do this now:" +
            "<ol><li>Read each mistake below and say the correct sentence out loud.</li><li>Re-read the lesson table and the ✓ Do / ✗ Don't box.</li><li>Retake the challenge. The questions come in a new order.</li></ol></div>") +
          review +
          '<div class="c-actions"><button type="button" class="c-btn ghost" id="cRetry">Retake</button>' + (passed ? nextLink : "") + "</div>";
        sec.querySelector("#cRetry").addEventListener("click", run);
        sec.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      render();
    }

    intro();
  }

  // =====================================================================
  // Courses dashboard
  // =====================================================================
  function dashboard(data, root) {
    var prog = get(PROG_KEY, {});
    var meta = {};
    return fetch(BASE + "data/library.json").then(function (r) { return r.json(); }).then(function (lib) {
      (lib.resources || []).forEach(function (r) {
        if (r.type === "lesson") meta[r.path.replace(/^lessons\/|\.html$/g, "")] = r;
      });
      var total = 0, passedN = 0, sum = 0, tried = 0;
      var html = data.courses.map(function (c) {
        var done = 0;
        var rows = c.lessons.map(function (s, i) {
          var p = prog[s], L = data.lessons[s];
          total++;
          if (p) { tried++; sum += p.best; }
          if (p && p.passed) { done++; passedN++; }
          var prevOk = i === 0 || (prog[c.lessons[i - 1]] && prog[c.lessons[i - 1]].passed);
          var state = p && p.passed ? "passed" : p ? "tried" : prevOk ? "ready" : "early";
          var icon = { passed: "✓", tried: "↻", ready: (i + 1), early: "!" }[state];
          var note = { passed: "Passed · best " + (p && p.best) + "%", tried: "Best " + (p && p.best) + "%: needs " + data.passMark + "%", ready: "Ready to start", early: "Pass the lesson before this one first" }[state];
          return '<li class="m-row ' + state + '"><span class="m-ic">' + icon + "</span>" +
            '<div class="m-txt"><a href="lessons/' + s + '.html#challenge">' + esc(L.title) + "</a>" +
            '<span class="m-sub">' + esc(L.skill) + " · " + L.questions.length + " questions · " + note + "</span></div>" +
            '<a class="m-go" href="lessons/' + s + '.html">' + (state === "passed" ? "Review" : state === "tried" ? "Retake" : "Start") + "</a></li>";
        }).join("");
        var pct = Math.round(done / c.lessons.length * 100);
        var complete = done === c.lessons.length;
        return '<article class="course ' + c.level.toLowerCase() + '">' +
          '<header class="course-head"><div class="ring" style="--p:' + pct + '"><span>' + c.level + "</span></div>" +
          "<div><h2>" + esc(c.title) + "</h2><p>" + done + " of " + c.lessons.length + " modules passed</p></div></header>" +
          '<ol class="modules">' + rows + "</ol>" +
          '<footer class="course-foot">' + (complete ?
            '<button type="button" class="c-btn" data-cert="' + c.level + '">🎓 Get your ' + c.level + " certificate</button>" :
            '<span class="lock">🎓 Certificate unlocks when all ' + c.lessons.length + " modules are passed</span>") + "</footer></article>";
      }).join("");
      var avg = tried ? Math.round(sum / tried) : 0;
      root.innerHTML = '<div class="stats">' +
        '<div class="stat"><strong>' + passedN + "/" + total + "</strong><span>modules passed</span></div>" +
        '<div class="stat"><strong>' + avg + "%</strong><span>average best score</span></div>" +
        '<div class="stat"><strong>' + streak() + " 🔥</strong><span>day streak</span></div>" +
        '<div class="stat"><strong>' + data.passMark + "%</strong><span>pass mark</span></div></div>" +
        '<div class="courses">' + html + "</div>";
      root.querySelectorAll("[data-cert]").forEach(function (b) {
        b.addEventListener("click", function () { cert(data, b.getAttribute("data-cert")); });
      });
    });
  }

  function cert(data, level) {
    var c = data.courses.filter(function (x) { return x.level === level; })[0];
    var prog = get(PROG_KEY, {});
    var avg = Math.round(c.lessons.reduce(function (s, l) { return s + (prog[l] ? prog[l].best : 0); }, 0) / c.lessons.length);
    var dlg = document.getElementById("certDlg");
    var name = get(NAME_KEY, "");
    dlg.innerHTML = '<form method="dialog" class="cert-wrap">' +
      '<label class="cert-name">Your full name, as it should appear <input id="certName" value="' + esc(name) + '" placeholder="Your name"></label>' +
      '<div class="cert" id="certPaper"><div class="cert-in">' +
      '<p class="cert-k">Certificate of completion</p><p class="cert-small">This certifies that</p>' +
      '<p class="cert-n" id="certN">' + esc(name || "Your name") + "</p>" +
      '<p class="cert-small">has passed every graded challenge in</p><p class="cert-c">' + esc(c.title) + " · Mastering English Library</p>" +
      '<ul class="cert-l">' + c.lessons.map(function (l) { return "<li>" + esc(data.lessons[l].title) + " · " + (prog[l] ? prog[l].best : 0) + "%</li>"; }).join("") + "</ul>" +
      '<p class="cert-small">Average score ' + avg + "% · " + new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) + "</p>" +
      '<p class="cert-fine">Self-study record kept in the learner\'s browser. It is not an official CEFR exam result.</p></div></div>' +
      '<div class="c-actions"><button type="button" class="c-btn" id="certPrint">Print or save as PDF</button><button class="c-btn ghost" value="close">Close</button></div></form>';
    var input = dlg.querySelector("#certName");
    input.addEventListener("input", function () {
      dlg.querySelector("#certN").textContent = input.value || "Your name";
      put(NAME_KEY, input.value);
    });
    dlg.querySelector("#certPrint").addEventListener("click", function () {
      document.body.classList.add("printing-cert");
      window.print();
      setTimeout(function () { document.body.classList.remove("printing-cert"); }, 500);
    });
    dlg.showModal();
  }

  // ---------- boot ----------
  var root = document.querySelector("[data-courses]");
  load().then(function (data) {
    if (root) dashboard(data, root);
    else lessonPage(data);
  }).catch(function () {
    if (root) root.innerHTML = '<p class="empty">Could not load the courses. Open the site through a web server, for example GitHub Pages.</p>';
  });
})();
