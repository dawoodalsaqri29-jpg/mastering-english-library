// teachers.html: course map from data/library.json; paid packs and contact links from assets/catalog.js.
(function () {
  "use strict";
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var site = window.SITE || {};
  var email = /^[^@\s"<>]+@[^@\s"<>]+\.[a-z]{2,}$/i.test(site.contactEmail || "") && !/^your@/i.test(site.contactEmail) ? site.contactEmail : "";
  var wa = /^[1-9]\d{7,14}$/.test(String(site.whatsapp || "")) ? String(site.whatsapp) : ""; // international digits, e.g. 96890000000

  // ?ref=ifi on an outreach link. Kept in this browser for 30 days, so it still counts when the teacher opens a
  // lesson and comes back to this page later from the menu. It goes into the message and onto the store links.
  var KEY = "mel-ref", DAYS30 = 30 * 24 * 3600 * 1000;
  var clean = function (s) { return String(s || "").replace(/[^a-z0-9-]/gi, "").slice(0, 30); };
  var ref = clean(new URLSearchParams(location.search).get("ref"));
  try {
    if (ref) localStorage.setItem(KEY, JSON.stringify({ ref: ref, t: Date.now() }));
    else {
      var kept = JSON.parse(localStorage.getItem(KEY) || "null");
      if (kept && Date.now() - kept.t < DAYS30) ref = clean(kept.ref); else localStorage.removeItem(KEY);
    }
  } catch (e) { /* storage blocked: use only the tag in this page's address */ }
  var tagged = function (s) { return s + (ref ? " [" + ref + "]" : ""); };
  // Store links always carry UTM tags (Wix analytics then shows sales from this page); an institute ?ref= tag wins.
  var tag = function (url) { return url + (url.indexOf("?") < 0 ? "?" : "&") + (ref ? "utm_source=" + ref + "&utm_medium=referral&utm_campaign=institutes" : "utm_source=library-site&utm_medium=referral&utm_campaign=teachers"); };
  var isStore = function (url) { return /^https:\/\/www\.masteringenglishlibrary\.com\//.test(url || ""); };

  // Paid packs, each linking to its own store page.
  var packs = document.getElementById("packs");
  (window.BOOKS || []).filter(function (b) { return b.category !== "Free"; }).forEach(function (b) {
    var li = document.createElement("li");
    var name = "<strong>" + esc(b.title) + "</strong>";
    li.innerHTML = (isStore(b.link) ? '<a data-store href="' + esc(b.link) + '" target="_blank" rel="noopener">' + name + "</a>" : name) +
      " (" + esc(b.level) + "): store price " + esc(b.price);
    packs.appendChild(li);
  });
  if (!packs.children.length) packs.outerHTML = '<p class="empty">The pack list could not load. Please see the online store below.</p>';

  // Contact: email and/or WhatsApp, whichever the owner has set and tested. The site checker fails if neither is set.
  var form = "Institute or school:\nCity and country:\nPack(s):\nNumber of learners:\nLevel(s):\nStart date:\n";
  var ways = [];
  if (email) {
    var mail = "mailto:" + esc(email) + "?subject=" + encodeURIComponent(tagged("Class set request"));
    ways.push('<a class="toggle" href="' + mail + "&body=" + encodeURIComponent(form) + '">Ask for a class set by email</a> (' +
      '<a href="' + mail + '">' + esc(email) + "</a>)");
  }
  if (wa) ways.push('<a class="toggle" href="https://wa.me/' + wa + "?text=" + encodeURIComponent(tagged("Class set request") + "\n" + form) +
    '" target="_blank" rel="noopener">Ask for a class set on WhatsApp</a>');
  var ask = document.getElementById("ask");
  ask.innerHTML = ways.length ? ways.join(" or ") : "Contact details are not set yet.";
  var report = document.getElementById("report");
  if (email) report.innerHTML = 'Found a mistake? Email <a href="mailto:' + esc(email) + "?subject=" +
    encodeURIComponent(tagged("Mistake in a lesson")) + '">' + esc(email) + "</a> with the lesson name.";
  else if (wa) report.innerHTML = 'Found a mistake? <a href="https://wa.me/' + wa + "?text=" +
    encodeURIComponent(tagged("Mistake in a lesson")) + '" target="_blank" rel="noopener">Send us a WhatsApp message</a> with the lesson name.';

  // Tag the store links last, after every one of them exists.
  document.querySelectorAll("a[data-store]").forEach(function (a) { a.href = tag(a.href); });

  // Course map, built from the same data as the library page.
  var map = document.getElementById("course-map");
  var LEVELS = ["B1", "B2", "C1", "C2"];
  var SKILLS = ["Grammar", "Vocabulary", "Reading", "Writing", "Listening", "Speaking"];
  var SAFE = /^(lessons|pdfs\/(b1|b2|c1|c2))\/[a-z0-9-]+\.(html|pdf)$/;
  fetch("data/library.json")
    .then(function (r) { if (!r.ok) throw new Error("library.json: HTTP " + r.status); return r.json(); })
    .then(function (data) {
      var all = (data.resources || []).filter(function (r) { return SAFE.test(r.path); });
      var pdfOf = {};
      all.forEach(function (r) { if (r.type === "pdf") pdfOf[r.path.replace(/^.*\//, "").replace(/\.pdf$/, "")] = r.path; });
      map.innerHTML = LEVELS.map(function (lv) {
        var rows = SKILLS.map(function (sk) {
          var items = all.filter(function (r) { return r.type === "lesson" && r.level === lv && r.skill === sk; });
          if (!items.length) return "";
          return "<li><strong>" + sk + ":</strong> " + items.map(function (r) {
            var slug = r.path.replace(/^.*\//, "").replace(/\.html$/, "");
            var pdf = pdfOf[slug] ? ' (<a href="' + esc(pdfOf[slug]) + '" download aria-label="Download PDF: ' + esc(r.title) + '">PDF</a>)' : "";
            return '<a class="map-lesson" href="' + esc(r.path) + '">' + esc(r.title) + "</a>" + pdf;
          }).join("; ") + "</li>";
        }).join("");
        return '<h3><span class="badge ' + lv.toLowerCase() + '">' + lv + "</span></h3><ul>" + rows + "</ul>";
      }).join("");
    })
    .catch(function (err) {
      console.error("Course map failed to load:", err);
      map.innerHTML = '<p class="empty">The course map could not load. Use the <a href="library.html">lesson list</a> instead.</p>';
    });
})();
