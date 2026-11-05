// Learner's dictionary.
// data/dict/index.json lists every headword: [word, part of speech, level, Arabic].
// data/dict/<letter>.json holds the full entries, loaded only when needed.
// Words outside the list fall back to the Free Dictionary API (Wiktionary).
(function () {
  "use strict";

  var API = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  var LIST_KEY = "me-wordlist";
  var RECENT_KEY = "me-recent";
  var LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

  var main = document.getElementById("dictMain");
  var form = document.getElementById("dictForm");
  var input = document.getElementById("dictQ");
  var sug = document.getElementById("dictSuggest");

  var index = [];        // [{w, pos, l, ar}]
  var byKey = {};        // search key -> index item
  var shards = {};       // letter -> Promise<{word -> entry}>
  var audioCache = {};
  var current = "";

  // ---------- helpers ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function norm(s) {
    return String(s || "").toLowerCase().trim().replace(/[’']/g, "'").replace(/\s+/g, " ");
  }
  function bare(w) { return norm(w).replace(/^(a|an|the|to) /, ""); }
  function store(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v || fallback; } catch (e) { return fallback; }
  }
  function save(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* private mode */ }
  }
  function href(word) { return "dictionary.html?q=" + encodeURIComponent(word); }
  function letterOf(w) { var c = norm(w).charAt(0); return /[a-z]/.test(c) ? c : "other"; }
  function lev(a, b) {
    if (Math.abs(a.length - b.length) > 3) return 9;
    var m = a.length, n = b.length, prev = [], cur, i, j;
    for (j = 0; j <= n; j++) prev[j] = j;
    for (i = 1; i <= m; i++) {
      cur = [i];
      for (j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  // Prefix matches first, then words containing the query, then near spellings.
  function closest(q, limit) {
    q = norm(q);
    limit = limit || 6;
    if (!q) return [];
    var pre = [], mid = [], near = [];
    var maxD = q.length < 5 ? 1 : 2;
    for (var i = 0; i < index.length; i++) {
      var it = index[i], w = it.k;
      if (w.indexOf(q) === 0 || it.b.indexOf(q) === 0) pre.push(it);
      else if (q.length > 2 && w.indexOf(q) > -1) mid.push(it);
      else if (q.length > 3) { var d = lev(q, it.b); if (d <= maxD) near.push({ it: it, d: d }); }
    }
    pre.sort(function (a, b) { return a.w.length - b.w.length || a.w.localeCompare(b.w); });
    near.sort(function (a, b) { return a.d - b.d; });
    return pre.concat(mid, near.map(function (x) { return x.it; })).slice(0, limit);
  }
  function loadShard(letter) {
    if (!shards[letter]) {
      shards[letter] = fetch("data/dict/" + letter + ".json")
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (d) { var map = {}; d.entries.forEach(function (e) { map[norm(e.word)] = e; }); return map; })
        .catch(function (err) { delete shards[letter]; throw err; });
    }
    return shards[letter];
  }
  function getEntry(word) {
    var it = byKey[norm(word)];
    if (!it) return Promise.resolve(null);
    return loadShard(letterOf(it.w)).then(function (map) { return map[norm(it.w)] || null; });
  }

  // ---------- pronunciation ----------
  var SPEAKER = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>';

  function apiAudio(word) {
    if (audioCache[word]) return audioCache[word];
    audioCache[word] = fetch(API + encodeURIComponent(word))
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (data) {
        var out = {};
        (data || []).forEach(function (d) {
          (d.phonetics || []).forEach(function (p) {
            if (!p.audio) return;
            if (/-uk\.mp3$/.test(p.audio) && !out.uk) out.uk = p.audio;
            else if (/-us\.mp3$/.test(p.audio) && !out.us) out.us = p.audio;
          });
        });
        return out;
      })
      .catch(function () { return {}; });
    return audioCache[word];
  }
  function speak(word, accent) {
    if (!("speechSynthesis" in window)) return Promise.resolve();
    return new Promise(function (resolve) {
      var u = new SpeechSynthesisUtterance(word);
      u.lang = accent === "uk" ? "en-GB" : "en-US";
      var voices = speechSynthesis.getVoices();
      var v = voices.find(function (x) { return x.lang === u.lang; }) ||
              voices.find(function (x) { return x.lang && x.lang.indexOf(u.lang.slice(0, 2)) === 0; });
      if (v) u.voice = v;
      u.rate = 0.9;
      u.onend = u.onerror = resolve;
      speechSynthesis.cancel();
      speechSynthesis.speak(u);
    });
  }
  function play(btn) {
    var word = btn.getAttribute("data-say");
    var accent = btn.getAttribute("data-accent");
    btn.classList.add("playing");
    var done = function () { btn.classList.remove("playing"); };
    var single = word.indexOf(" ") === -1;
    (single ? apiAudio(word) : Promise.resolve({})).then(function (a) {
      if (a[accent]) {
        var au = new Audio(a[accent]);
        au.onended = done;
        au.play().catch(function () { speak(word, accent).then(done); });
      } else {
        speak(word, accent).then(done);
      }
    });
  }
  function pronHTML(word, uk, us) {
    var h = "";
    [["uk", uk], ["us", us]].forEach(function (p) {
      h += '<span class="pron"><span class="reg">' + p[0].toUpperCase() + "</span>" +
        '<button class="say ' + p[0] + '" type="button" data-say="' + esc(word) + '" data-accent="' + p[0] + '" aria-label="Listen to the ' + (p[0] === "uk" ? "British" : "American") + ' pronunciation">' + SPEAKER + "</button>" +
        (p[1] ? '<span class="ipa">/' + esc(p[1]) + "/</span>" : "") + "</span>";
    });
    return '<div class="prons">' + h + "</div>";
  }

  // ---------- word list & recent ----------
  function inList(word) { return store(LIST_KEY, []).indexOf(word) > -1; }
  function toggleList(word) {
    var list = store(LIST_KEY, []);
    var i = list.indexOf(word);
    if (i > -1) list.splice(i, 1); else list.unshift(word);
    save(LIST_KEY, list);
    renderSide();
    return i === -1;
  }
  function pushRecent(word) {
    var r = store(RECENT_KEY, []).filter(function (w) { return w !== word; });
    r.unshift(word);
    save(RECENT_KEY, r.slice(0, 12));
  }
  function starHTML(word) {
    var on = inList(word);
    return '<button class="star" type="button" data-star="' + esc(word) + '" aria-pressed="' + on + '">' + (on ? "★ Saved" : "☆ Save") + "</button>";
  }

  // ---------- rendering: entry from our list ----------
  function senseHTML(s, i, total) {
    var exs = s.ex || [];
    var lis = exs.map(function (x, k) { return '<li class="' + (k > 1 ? "more" : "") + '">' + esc(x) + "</li>"; }).join("");
    return '<div class="sense">' +
      (s.guide ? '<span class="guide">' + esc(s.guide) + (total > 1 ? " <em>(" + (i + 1) + ")</em>" : "") + "</span>" : "") +
      '<div class="def-row">' + (s.level ? '<span class="lvl ' + esc(s.level) + '" title="CEFR level">' + esc(s.level) + "</span>" : "") +
      '<p class="def">' + (s.gram ? '<span class="gram">' + esc(s.gram) + "</span> " : "") + esc(s.def) + "</p></div>" +
      (s.ar ? '<p class="ar" lang="ar" dir="rtl">' + esc(s.ar) + "</p>" : "") +
      (lis ? '<ul class="exs">' + lis + "</ul>" + (exs.length > 2 ? '<button class="more-btn" type="button" data-more>More examples (' + (exs.length - 2) + ")</button>" : "") : "") +
      "</div>";
  }
  function chips(list, cls) {
    return '<div class="chips ' + (cls || "") + '">' + list.map(function (w) {
      var clean = w.replace(/\s*\(.*\)$/, "");
      return '<a href="' + href(clean) + '">' + esc(w) + "</a>";
    }).join("") + "</div>";
  }
  function renderEntry(e) {
    var first = e.blocks[0];
    var head = '<div class="entry-head"><div class="hw-row"><h1 class="hw">' + esc(e.word) + "</h1>" + starHTML(e.word) + "</div>" +
      '<p class="posline"><span class="pos">' + esc(first.pos) + "</span>" + (first.gram ? '<span class="gram">' + esc(first.gram) + "</span>" : "") + "</p>" +
      pronHTML(e.word, first.uk || e.uk, first.us || e.us) + "</div>";
    var body = e.blocks.map(function (b, k) {
      var label = k === 0 ? "" : '<h2 class="pos-label">' + esc(e.word) + ' <span class="pos" style="font-style:italic;font-weight:400">' + esc(b.pos) + "</span>" +
        (b.gram ? ' <span class="gram">' + esc(b.gram) + "</span>" : "") + "</h2>" +
        (b.uk && b.uk !== (first.uk || e.uk) ? pronHTML(e.word, b.uk, b.us || b.uk) : "");
      return '<div class="pos-block">' + label + b.senses.map(function (s, i) { return senseHTML(s, i, b.senses.length); }).join("") + "</div>";
    }).join("");
    var panels = "";
    if (e.syn && e.syn.length) panels += '<div class="panel"><h3>Synonyms</h3>' + chips(e.syn) + "</div>";
    if (e.ant && e.ant.length) panels += '<div class="panel"><h3>Opposites</h3>' + chips(e.ant, "ant") + "</div>";
    if (e.coll && e.coll.length) panels += '<div class="panel"><h3>Collocations</h3><div class="chips">' + e.coll.map(function (c) { return "<span>" + esc(c) + "</span>"; }).join("") + "</div></div>";
    if (e.family && e.family.length) panels += '<div class="panel"><h3>Word family</h3>' + chips(e.family) + "</div>";
    if (e.mistake) {
      panels += '<div class="mistake"><h3 style="margin:0 0 .3rem;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;color:var(--c2)">Common mistake · Arabic speakers</h3>' +
        '<p class="bad">' + esc(e.mistake.wrong) + '</p><p class="good">' + esc(e.mistake.right) + '</p><p class="why">' + esc(e.mistake.note) + "</p></div>";
    }
    if (e.lesson) panels += '<p class="learn-link"><a href="' + esc(e.lesson) + '">Learn and practise this word in its lesson →</a></p>';
    return '<article class="entry">' + head + body + (panels ? '<div class="panels">' + panels + "</div>" : "") + "</article>";
  }

  // ---------- rendering: API entry ----------
  function renderApi(data, word) {
    var first = data[0] || {};
    var ipa = first.phonetic || ((first.phonetics || []).find(function (p) { return p.text; }) || {}).text || "";
    ipa = ipa.replace(/^\/|\/$/g, "");
    var syn = {}, ant = {};
    var blocks = data.map(function (d) {
      return (d.meanings || []).map(function (m) {
        (m.synonyms || []).forEach(function (s) { syn[s] = 1; });
        (m.antonyms || []).forEach(function (s) { ant[s] = 1; });
        var senses = (m.definitions || []).slice(0, 6).map(function (df) {
          (df.synonyms || []).forEach(function (s) { syn[s] = 1; });
          (df.antonyms || []).forEach(function (s) { ant[s] = 1; });
          return '<div class="sense"><div class="def-row"><p class="def">' + esc(df.definition) + "</p></div>" +
            (df.example ? '<ul class="exs"><li>' + esc(df.example) + "</li></ul>" : "") + "</div>";
        }).join("");
        return '<div class="pos-block"><h2 class="pos-label"><span class="pos" style="font-style:italic">' + esc(m.partOfSpeech) + "</span></h2>" + senses + "</div>";
      }).join("");
    }).join("");
    var synL = Object.keys(syn).slice(0, 12), antL = Object.keys(ant).slice(0, 8);
    var panels = "";
    if (synL.length) panels += '<div class="panel"><h3>Synonyms</h3>' + chips(synL) + "</div>";
    if (antL.length) panels += '<div class="panel"><h3>Opposites</h3>' + chips(antL, "ant") + "</div>";
    var src = (first.sourceUrls || [])[0];
    return '<article class="entry"><div class="entry-head"><div class="hw-row"><h1 class="hw">' + esc(first.word || word) + "</h1>" + starHTML(first.word || word) + "</div>" +
      pronHTML(first.word || word, ipa, ipa) + "</div>" + blocks +
      (panels ? '<div class="panels">' + panels + "</div>" : "") +
      '<p class="source">This word is not in our learner list yet, so it has no level or Arabic translation. Source: Free Dictionary API, Wiktionary' +
      (src ? ' (<a href="' + esc(src) + '" rel="noopener" target="_blank">page</a>)' : "") +
      ', <a href="https://creativecommons.org/licenses/by-sa/3.0/" rel="noopener" target="_blank">CC BY-SA</a>.</p></article>';
  }

  // ---------- views ----------
  function dym(list) {
    return list.length ? '<div class="dym">' + list.map(function (it) { return '<a href="' + href(it.w) + '">' + esc(it.w) + "</a>"; }).join("") + "</div>" : "";
  }
  function show(word, push) {
    word = norm(word);
    if (!word) { home(push); return; }
    current = word;
    input.value = word;
    document.title = word + " | English Dictionary | Mastering English Library";
    if (push) history.pushState({ q: word }, "", href(word));
    var hit = byKey[word];
    main.innerHTML = '<div class="skeleton" aria-label="Loading"></div>';
    if (hit) {
      getEntry(hit.w).then(function (e) {
        if (current !== word) return;
        if (!e) { apiLookup(word); return; }
        main.innerHTML = renderEntry(e);
        pushRecent(e.word);
        renderSide();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }).catch(function () {
        main.innerHTML = '<div class="notice"><h2>Couldn\'t load this entry</h2><p>Check your connection and try again.</p></div>';
      });
      return;
    }
    apiLookup(word);
  }
  function apiLookup(word) {
    fetch(API + encodeURIComponent(word))
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (current !== word) return;
        var near = closest(word, 6);
        if (data && data.length) {
          main.innerHTML = renderApi(data, word) +
            (near.length ? '<div class="notice"><strong>In our learner list:</strong>' + dym(near) + "</div>" : "");
          pushRecent(word);
          renderSide();
        } else {
          main.innerHTML = '<div class="notice"><h2>No entry for “' + esc(word) + '”</h2>' +
            "<p>Check the spelling, or try the base form (for example <em>go</em>, not <em>went</em>).</p>" +
            (near.length ? "<p><strong>Did you mean:</strong></p>" + dym(near) : "") + "</div>";
        }
      })
      .catch(function () {
        if (current !== word) return;
        var near = closest(word, 6);
        main.innerHTML = '<div class="notice"><h2>“' + esc(word) + '” isn\'t in our learner list yet</h2><p>The online dictionary we use for other words isn\'t responding (or you are offline). Try again in a minute.</p>' +
          (near.length ? "<p><strong>Did you mean:</strong></p>" + dym(near) : "") + "</div>";
      });
  }
  function home(push) {
    current = "";
    input.value = "";
    document.title = "English Dictionary with Arabic | Mastering English Library";
    if (push) history.pushState({}, "", "dictionary.html");
    var counts = {};
    index.forEach(function (it) { counts[it.l] = (counts[it.l] || 0) + 1; });
    var day = Math.floor(Date.now() / 86400000);
    var groups = LEVELS.map(function (lv) {
      var words = index.filter(function (it) { return it.l === lv; });
      if (!words.length) return "";
      var sample = [];
      for (var i = 0; i < 14 && i < words.length; i++) sample.push(words[(day * 7 + i * 37) % words.length].w);
      return '<div class="level-group"><h3><span class="lvl ' + lv + '">' + lv + "</span> " + words.length.toLocaleString("en") + ' words <button type="button" class="see-level" data-level="' + lv + '">See all →</button></h3>' + chips(sample) + "</div>";
    }).join("");
    main.innerHTML = '<section class="home-hero"><h2>' + index.length.toLocaleString("en") + " words, built for Arabic speakers</h2>" +
      "<p>Every word in our list comes with:</p>" +
      '<div class="feature-grid">' +
      '<div class="feature"><strong>🔊 UK and US</strong><span>IPA and audio for both accents.</span></div>' +
      '<div class="feature"><strong>CEFR levels</strong><span>A level for every meaning, so you learn the right meaning first.</span></div>' +
      '<div class="feature"><strong lang="ar">عربي</strong><span>An Arabic translation for each meaning.</span></div>' +
      '<div class="feature"><strong>✗ → ✓</strong><span>The mistakes Arabic speakers make, and the fix.</span></div>' +
      '<div class="feature"><strong>Thesaurus</strong><span>Synonyms and opposites one click away.</span></div>' +
      '<div class="feature"><strong>☆ Word list</strong><span>Save words and test yourself on them.</span></div>' +
      "</div></section>" +
      '<section class="home-hero"><h2>Browse by level</h2><div class="level-groups">' + groups + "</div></section>";
  }
  function listView(title, items) {
    main.innerHTML = '<section class="home-hero"><h2>' + esc(title) + ' <span class="side-muted">(' + items.length.toLocaleString("en") + ")</span></h2>" +
      '<ul class="word-cols">' + items.map(function (it) {
        return '<li><a href="' + href(it.w) + '">' + esc(it.w) + '</a> <span class="lvl ' + it.l + '">' + it.l + '</span> <span class="wc-ar" lang="ar" dir="rtl">' + esc(it.ar) + "</span></li>";
      }).join("") + "</ul></section>";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- sidebar ----------
  function renderSide() {
    var list = store(LIST_KEY, []);
    var lc = document.getElementById("listCount");
    var ml = document.getElementById("myList");
    lc.textContent = list.length ? list.length + " saved word" + (list.length > 1 ? "s" : "") : "No saved words yet. Press ☆ on any entry.";
    ml.innerHTML = list.map(function (w) { return '<li><a href="' + href(w) + '">' + esc(w) + "</a></li>"; }).join("");
    document.getElementById("testBtn").hidden = list.filter(function (w) { return byKey[norm(w)]; }).length < 1;
    var rec = store(RECENT_KEY, []);
    document.getElementById("recent").innerHTML = rec.length ? rec.map(function (w) { return '<li><a href="' + href(w) + '">' + esc(w) + "</a></li>"; }).join("") : '<li class="side-muted">Nothing yet.</li>';
  }
  function renderWotd() {
    // Word of the day comes from B1 to C1: useful, not too easy.
    var pool = index.filter(function (it) { return it.l === "B1" || it.l === "B2" || it.l === "C1"; });
    if (!pool.length) pool = index;
    var day = Math.floor(Date.now() / 86400000);
    var it = pool[(day * 2654435761 >>> 0) % pool.length];
    var box = document.getElementById("wotd");
    box.innerHTML = "<h2>Word of the day</h2>" + '<a class="w" href="' + href(it.w) + '">' + esc(it.w) + "</a>" +
      '<p><span class="lvl ' + it.l + '">' + it.l + "</span> <em>" + esc(it.pos) + "</em></p>" +
      '<p class="ar" lang="ar" dir="rtl">' + esc(it.ar) + "</p>";
    getEntry(it.w).then(function (e) {
      if (!e) return;
      var p = box.querySelectorAll("p")[0];
      p.innerHTML += " " + esc(e.blocks[0].senses[0].def);
    }).catch(function () {});
  }
  function renderAZ() {
    var have = {};
    index.forEach(function (it) { have[it.b.charAt(0)] = 1; });
    document.getElementById("az").innerHTML = "abcdefghijklmnopqrstuvwxyz".split("").map(function (l) {
      return '<button type="button" data-az="' + l + '"' + (have[l] ? "" : " disabled") + ">" + l.toUpperCase() + "</button>";
    }).join("");
  }

  // ---------- word-list test ----------
  function test() {
    var dlg = document.getElementById("quizDlg");
    var box = document.getElementById("quizInner");
    var saved = store(LIST_KEY, []).filter(function (w) { return byKey[norm(w)]; });
    var picked = saved.sort(function () { return Math.random() - 0.5; }).slice(0, 10);
    box.innerHTML = "<p>Loading your words…</p>";
    dlg.showModal();
    Promise.all(picked.map(getEntry)).then(function (list) {
      var qs = list.filter(Boolean);
      var i = 0, score = 0;
      function ask() {
        if (i >= qs.length) {
          var pct = Math.round(score / qs.length * 100);
          box.innerHTML = "<h2>" + (pct >= 80 ? "Well done!" : "Keep practising") + "</h2><p>You scored <strong>" + score + " / " + qs.length + "</strong> (" + pct + "%).</p>" +
            (pct < 80 ? "<p>⚠️ Below 80% means these words are not yet active vocabulary. Read each entry again, say the examples out loud, then retake the test tomorrow.</p>" : "<p>Now use each word in a sentence of your own. Recognising a word is not the same as using it.</p>") +
            '<div class="qrow"><button class="side-btn" value="close">Close</button></div>';
          return;
        }
        var e = qs[i], s = e.blocks[0].senses[0], it = byKey[norm(e.word)];
        var pool = index.filter(function (x) { return x !== it && x.pos === it.pos && x.l === it.l; });
        if (pool.length < 3) pool = index.filter(function (x) { return x !== it; });
        var opts = [];
        while (opts.length < 3) { var c = pool[Math.floor(Math.random() * pool.length)]; if (opts.indexOf(c) === -1) opts.push(c); }
        opts = opts.map(function (x) { return x.w; }).concat([e.word]).sort(function () { return Math.random() - 0.5; });
        box.innerHTML = '<div class="qbar"><span style="width:' + (i / qs.length * 100) + '%"></span></div>' +
          '<p class="side-muted">Question ' + (i + 1) + " of " + qs.length + "</p>" +
          '<h2>Which word means…</h2><p class="def">' + esc(s.def) + "</p>" +
          '<div class="qopts">' + opts.map(function (o) { return '<button type="button" data-w="' + esc(o) + '">' + esc(o) + "</button>"; }).join("") + "</div>" +
          '<div class="qrow"><span class="side-muted" id="qfb"></span><button type="button" class="side-btn" id="qnext" style="width:auto;padding:.6rem 1.4rem" hidden>Next</button></div>';
        box.querySelectorAll(".qopts button").forEach(function (b) {
          b.addEventListener("click", function () {
            var right = b.getAttribute("data-w") === e.word;
            box.querySelectorAll(".qopts button").forEach(function (x) {
              x.disabled = true;
              if (x.getAttribute("data-w") === e.word) x.classList.add("ok");
            });
            if (!right) b.classList.add("no"); else score++;
            document.getElementById("qfb").innerHTML = right ? "✓ Correct" : "✗ It's <strong>" + esc(e.word) + "</strong> (" + esc(s.ar) + ")";
            var n = document.getElementById("qnext");
            n.hidden = false;
            n.focus();
            n.onclick = function () { i++; ask(); };
          });
        });
      }
      ask();
    }).catch(function () { box.innerHTML = '<p>Couldn\'t load your words. Check your connection.</p><button class="side-btn" value="close">Close</button>'; });
  }

  // ---------- autocomplete ----------
  var active = -1;
  function suggest() {
    var q = norm(input.value);
    var list = q ? closest(q, 8) : [];
    if (!list.length) { sug.hidden = true; input.setAttribute("aria-expanded", "false"); return; }
    active = -1;
    sug.innerHTML = list.map(function (it, i) {
      return '<li role="option" id="sg' + i + '" data-w="' + esc(it.w) + '"><span>' + esc(it.w) + '</span><span class="s-pos">' + esc(it.pos) + " · " + esc(it.l) + "</span></li>";
    }).join("");
    sug.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }
  function pick(w) { sug.hidden = true; input.setAttribute("aria-expanded", "false"); show(w, true); }
  input.addEventListener("input", suggest);
  input.addEventListener("keydown", function (ev) {
    var items = sug.querySelectorAll("li");
    if (sug.hidden || !items.length) return;
    if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
      ev.preventDefault();
      active = (active + (ev.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
      items.forEach(function (li, i) { li.setAttribute("aria-selected", i === active); });
      input.setAttribute("aria-activedescendant", "sg" + active);
    } else if (ev.key === "Enter" && active > -1) {
      ev.preventDefault();
      pick(items[active].getAttribute("data-w"));
    } else if (ev.key === "Escape") {
      sug.hidden = true;
    }
  });
  sug.addEventListener("mousedown", function (ev) {
    var li = ev.target.closest("li");
    if (li) { ev.preventDefault(); pick(li.getAttribute("data-w")); }
  });
  input.addEventListener("blur", function () { setTimeout(function () { sug.hidden = true; }, 120); });
  form.addEventListener("submit", function (ev) { ev.preventDefault(); pick(input.value); });

  // ---------- delegated clicks ----------
  document.addEventListener("click", function (ev) {
    var t = ev.target;
    var say = t.closest("[data-say]");
    if (say) { play(say); return; }
    var star = t.closest("[data-star]");
    if (star) {
      var on = toggleList(star.getAttribute("data-star"));
      star.setAttribute("aria-pressed", on);
      star.textContent = on ? "★ Saved" : "☆ Save";
      return;
    }
    var more = t.closest("[data-more]");
    if (more) {
      var ul = more.previousElementSibling;
      var open = ul.classList.toggle("open");
      more.textContent = open ? "Fewer examples" : "More examples";
      return;
    }
    var az = t.closest("[data-az]");
    if (az) {
      var l = az.getAttribute("data-az");
      listView("Words starting with " + l.toUpperCase(), index.filter(function (it) { return it.b.charAt(0) === l; }));
      return;
    }
    var lv = t.closest("[data-level]");
    if (lv) {
      var L = lv.getAttribute("data-level");
      listView(L + " words", index.filter(function (it) { return it.l === L; }));
      return;
    }
    var a = t.closest("a[href^='dictionary.html?q=']");
    if (a && !ev.metaKey && !ev.ctrlKey) {
      ev.preventDefault();
      show(decodeURIComponent(a.getAttribute("href").split("q=")[1]), true);
    }
  });
  document.getElementById("testBtn").addEventListener("click", test);
  window.addEventListener("popstate", function () {
    show(new URLSearchParams(location.search).get("q") || "", false);
  });

  // ---------- boot ----------
  fetch("data/dict/index.json")
    .then(function (r) { return r.json(); })
    .then(function (data) {
      index = data.words.map(function (r) { return { w: r[0], pos: r[1], l: r[2], ar: r[3], k: norm(r[0]), b: bare(r[0]) }; });
      index.forEach(function (it) {
        if (!byKey[it.k]) byKey[it.k] = it;
        if (!byKey[it.b]) byKey[it.b] = it;
      });
      renderWotd();
      renderAZ();
      renderSide();
      show(new URLSearchParams(location.search).get("q") || "", false);
    })
    .catch(function () {
      main.innerHTML = '<div class="notice"><h2>Could not load the dictionary</h2><p>Open the site through a web server (for example GitHub Pages), not as a local file.</p></div>';
    });
})();
