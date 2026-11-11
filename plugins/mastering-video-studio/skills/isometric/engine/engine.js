/* Scene built-in icon set — 24×24 stroke icons (stroke = currentColor). */
(function () {
  window.SceneIcons = {
    check: '<path d="M4.5 12.5l5 5L19.5 7"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    "arrow-right": '<path d="M4 12h15M13 6l6 6-6 6"/>',
    "arrow-up": '<path d="M12 20V5M6 11l6-6 6 6"/>',
    "arrow-down": '<path d="M12 4v15M6 13l6 6 6-6"/>',
    "trending-up": '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    "trending-down": '<path d="M3 7l6 6 4-4 8 8"/><path d="M15 17h6v-6"/>',
    star: '<path d="M12 3.2l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.2l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    heart: '<path d="M12 20s-7.5-4.6-9-9.4C1.9 7 4.2 4 7.4 4c2 0 3.6 1.1 4.6 2.7C13 5.1 14.6 4 16.6 4c3.2 0 5.5 3 4.4 6.6C19.5 15.4 12 20 12 20z"/>',
    bolt: '<path d="M13 2.5L4.5 13.5H11l-1 8 8.5-11H12z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 3.9 5.6 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.6-3.9-9S9.4 5.6 12 3z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c.8-4.2 4-6.5 8-6.5s7.2 2.3 8 6.5"/>',
    users: '<circle cx="9" cy="8.5" r="3.5"/><path d="M2.5 20c.6-3.6 3.2-5.6 6.5-5.6s5.9 2 6.5 5.6"/><path d="M15.5 5.2a3.4 3.4 0 010 6.6M18 14.6c2 .7 3.2 2.6 3.5 5.4"/>',
    chart: '<path d="M4 20V4"/><path d="M4 20h16"/><rect x="7" y="11" width="3" height="6" rx=".6"/><rect x="12" y="7" width="3" height="10" rx=".6"/><rect x="17" y="13" width="3" height="4" rx=".6"/>',
    pie: '<path d="M12 3a9 9 0 109 9h-9z"/><path d="M15 3.5A9 9 0 0120.5 9H15z"/>',
    dollar: '<path d="M12 2.5v19"/><path d="M17 6.5c-1-1.3-2.8-2-5-2-2.9 0-4.8 1.4-4.8 3.6 0 5 10 2.6 10 7.8 0 2.3-2.1 3.6-5.2 3.6-2.4 0-4.3-.8-5.4-2.3"/>',
    lightbulb: '<path d="M9 18h6M10 21.5h4"/><path d="M12 2.5a6.5 6.5 0 00-3.8 11.8c.6.5.8 1.1.8 1.8V16h6v-.1c0-.7.3-1.3.8-1.8A6.5 6.5 0 0012 2.5z"/>',
    rocket: '<path d="M14.5 4.5c2.5-1.5 5-1.8 6.5-1.5.3 1.5 0 4-1.5 6.5L13 16l-5-5z"/><path d="M8 11l-4.5.5L6 8.5h4M13 16l-.5 4.5 3-2.5v-4"/><circle cx="16" cy="8" r="1.5"/><path d="M6.5 15.5c-2 .5-3 2.5-3 5 2.5 0 4.5-1 5-3"/>',
    shield: '<path d="M12 2.8l8 3v6.1c0 4.8-3.3 8.3-8 9.6-4.7-1.3-8-4.8-8-9.6V5.8z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="10.5" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 018 0v3"/><path d="M12 15v2"/>',
    cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx=".8"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/>',
    code: '<path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5M13.5 4.5l-3 15"/>',
    database: '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    cloud: '<path d="M7 19a4.5 4.5 0 01-.6-9A6 6 0 0118 8.5a5.3 5.3 0 01-.5 10.5z"/>',
    leaf: '<path d="M5 19C4 11 9 4.5 20 4c.5 10.5-5.5 16-13 15.5z"/><path d="M5 19c2.5-4.5 6-7.5 10-9.5"/>',
    flame: '<path d="M12 21.5c-4 0-7-2.8-7-6.6 0-3.4 2.4-5.4 3.7-8 .6 1.6 1.4 2.6 2.6 3.1C11.6 6.6 13 4 15.5 2.5c-.4 3.4 3.5 6 3.5 11.4 0 4.3-3 7.6-7 7.6z"/><path d="M12 21.5c-1.7 0-3-1.2-3-3 0-2 1.6-3 3-5 1.4 2 3 3 3 5 0 1.8-1.3 3-3 3z"/>',
    droplet: '<path d="M12 2.8s-6.5 7.1-6.5 11.7a6.5 6.5 0 0013 0C18.5 9.9 12 2.8 12 2.8z"/>',
    sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 019.5 4 8.5 8.5 0 1020 14.5z"/>',
    book: '<path d="M4 4.5A1.5 1.5 0 015.5 3H20v15.5H5.5A1.5 1.5 0 004 20z"/><path d="M4 20a1.5 1.5 0 001.5 1.5H20v-3"/><path d="M8.5 7.5h7"/>',
    brain: '<path d="M9.5 3.5A3 3 0 006.6 6 3 3 0 004 9.5a3 3 0 00.6 4.8A3.3 3.3 0 007.5 19a2.6 2.6 0 004.5 1.2V5.3A2.7 2.7 0 009.5 3.5z"/><path d="M14.5 3.5A3 3 0 0117.4 6 3 3 0 0120 9.5a3 3 0 01-.6 4.8 3.3 3.3 0 01-2.9 4.7 2.6 2.6 0 01-4.5 1.2"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    flag: '<path d="M5 21.5V3.5"/><path d="M5 4h12.5l-2.5 4.5 2.5 4.5H5"/>',
    "map-pin": '<path d="M12 21.5s-7-6.2-7-12a7 7 0 0114 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9.5" r="2.6"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5l5 5"/>',
    settings: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5l1.6 2.6 3-.6.6 3 2.6 1.6-1.3 2.9 1.3 2.9-2.6 1.6-.6 3-3-.6L12 21.5l-1.6-2.6-3 .6-.6-3-2.6-1.6 1.3-2.9-1.3-2.9 2.6-1.6.6-3 3 .6z"/>',
    message: '<path d="M4 5.5A2.5 2.5 0 016.5 3h11A2.5 2.5 0 0120 5.5v8a2.5 2.5 0 01-2.5 2.5H10l-5 4.5V16A2.5 2.5 0 014 13.5z"/>',
    camera: '<path d="M3.5 8.5A2 2 0 015.5 6.5h2l1.5-2.5h6l1.5 2.5h2a2 2 0 012 2V18a2 2 0 01-2 2h-13a2 2 0 01-2-2z"/><circle cx="12" cy="13" r="3.8"/>',
    music: '<path d="M9 18V5.5l11-2.5v12.5"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/>',
    home: '<path d="M3.5 11L12 3.5l8.5 7.5"/><path d="M5.5 9.5V20.5h13V9.5"/><path d="M10 20.5v-6h4v6"/>',
    building: '<rect x="5" y="2.5" width="14" height="19" rx="1.5"/><path d="M9 6.5h2M13 6.5h2M9 10.5h2M13 10.5h2M9 14.5h2M13 14.5h2M10.5 21.5v-3h3v3"/>',
    car: '<path d="M4 16.5v-4l2-5.2A2 2 0 017.9 6h8.2a2 2 0 011.9 1.3l2 5.2v4"/><path d="M2.5 12.5h19v4.5h-19z"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    plane: '<path d="M21 15.5l-8-4.5V5a1.5 1.5 0 00-3 0v6l-8 4.5V17l8-2.2v4l-2.5 1.7V22l4-1 4 1v-1.5L13 18.8v-4l8 2.2z"/>',
    atom: '<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
    dna: '<path d="M7 2.5c0 6.3 10 6.7 10 13s-10 2.7-10 6"/><path d="M17 2.5c0 6.3-10 6.7-10 13s10 2.7 10 6"/><path d="M8.5 6h7M8.5 18h7M10 12h4"/>',
    warning: '<path d="M12 3.5L2.5 20h19z"/><path d="M12 10v4.5M12 17.2v.3"/>',
    question: '<circle cx="12" cy="12" r="9"/><path d="M9.3 9.2a2.8 2.8 0 015.4 1c0 1.9-2.7 2.4-2.7 4.2M12 17.3v.2"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.3v.2"/>',
    play: '<path d="M7 4.5v15l12.5-7.5z"/>',
    "thumbs-up": '<path d="M7.5 10.5v10h-4v-10z"/><path d="M7.5 10.5l4-7.5c1.6 0 2.7 1.2 2.4 2.8l-.7 3.7h5.6a2 2 0 012 2.4l-1.5 7a2 2 0 01-2 1.6H7.5"/>',
    gift: '<rect x="3.5" y="8" width="17" height="4.5" rx="1"/><path d="M5 12.5v8.5h14v-8.5M12 8v13"/><path d="M12 8C10.5 4 6.5 4 6.5 6.3 6.5 8 9.5 8 12 8zM12 8c1.5-4 5.5-4 5.5-1.7C17.5 8 14.5 8 12 8z"/>',
    layers: '<path d="M12 3l9 4.8-9 4.8-9-4.8z"/><path d="M3 12l9 4.8 9-4.8M3 16.2L12 21l9-4.8"/>',
    link: '<path d="M10 14a4.5 4.5 0 006.4 0l3-3a4.5 4.5 0 00-6.4-6.4l-1.3 1.3"/><path d="M14 10a4.5 4.5 0 00-6.4 0l-3 3a4.5 4.5 0 006.4 6.4l1.3-1.3"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    wifi: '<path d="M2.5 9a14 14 0 0119 0M5.5 12.5a9.5 9.5 0 0113 0M8.8 16a4.8 4.8 0 016.4 0"/><circle cx="12" cy="19.3" r=".9"/>',
    battery: '<rect x="2.5" y="7" width="17" height="10" rx="2"/><path d="M22 10.5v3"/><path d="M5.5 10v4M8.5 10v4M11.5 10v4"/>',
    mountain: '<path d="M2.5 20.5l7-12 4.5 7.5 2.5-3.5 5 8z"/><path d="M7.3 12.3l2.2 1.7 2-1.6"/>',
    tree: '<path d="M12 2.5l-6 8h3.5L5 16.5h14L14.5 10.5H18z"/><path d="M12 16.5v5"/>',
    factory: '<path d="M2.5 21V11l6 3.5V11l6 3.5V7l3-2v16z"/><path d="M2.5 21h19M18 5h3.5v16"/>',
    scale: '<path d="M12 3v18M6 21h12M4 7h16"/><path d="M4 7l-2.5 6a3 3 0 005 0zM20 7l-2.5 6a3 3 0 005 0z"/>',
    trophy: '<path d="M7 3.5h10v5a5 5 0 01-10 0z"/><path d="M7 5.5H3.5c0 3 1.5 4.5 3.8 4.8M17 5.5h3.5c0 3-1.5 4.5-3.8 4.8M12 13.5v4M8 21h8M9.5 17.5h5V21h-5z"/>',
    sparkles: '<path d="M10 3l1.8 5.2L17 10l-5.2 1.8L10 17l-1.8-5.2L3 10l5.2-1.8z"/><path d="M18 14l.9 2.1 2.1.9-2.1.9L18 20l-.9-2.1L15 17l2.1-.9z"/>',
  };
})();

;
/* Scene style components — window.SceneStyle (the `S` argument in custom scenes).
 * Shared by every style pack; a pack calls SceneStyle.init({...}) to set its look.
 * Requires the scene runtime (window.V) and window.SceneIcons.
 */
(function () {
  "use strict";
  var V = window.V;
  var S = (window.SceneStyle = window.SceneStyle || {});
  var el = V.el;

  var cfg = {
    id: "base",
    kind: "minimal", // minimal | documentary | neon | whiteboard
    enter: "rise",
    titleReveal: "mask",
    drift: 0.025,
    series: ["#2F6BFF", "#FF6B4A", "#16B88A", "#9B5CFF", "#F5B700", "#00A6C8"],
  };
  S.theme = cfg;
  S.init = function (c) {
    for (var k in c) if (Object.prototype.hasOwnProperty.call(c, k)) cfg[k] = c[k];
    return S;
  };

  // ───────────────────────── basics ─────────────────────────
  function u(n) { return n * V.unit; }
  S.u = u;
  function lastT() { return Math.max(0.05, V.duration - 0.05); }
  function clampT(t) { return Math.max(0, Math.min(lastT(), t)); }
  S.clampT = clampT;
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function hashStr(s) {
    s = str(s);
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function hash01(n) {
    var x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  }
  S.hash = hashStr;
  S.color = function (i) { return cfg.series[((i % cfg.series.length) + cfg.series.length) % cfg.series.length]; };
  S.css = function (name) {
    try { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); } catch (e) { return ""; }
  };

  var STOP = { the: 1, a: 1, an: 1, and: 1, or: 1, of: 1, to: 1, in: 1, on: 1, for: 1, with: 1, is: 1, are: 1, was: 1, it: 1, its: 1, that: 1, this: 1, by: 1, as: 1, at: 1, be: 1, from: 1, your: 1, you: 1, we: 1, our: 1, their: 1, they: 1 };
  /** Pick the most distinctive word of a label to sync on (longest non-stopword). */
  function autoKey(text) {
    var best = "";
    str(text).replace(/[*_]/g, "").split(/\s+/).forEach(function (w) {
      var c = w.replace(/[^\p{L}\p{N}]+/gu, "");
      if (!c || STOP[c.toLowerCase()]) return;
      if (c.length > best.length) best = c;
    });
    return best || null;
  }
  S.autoKey = autoKey;

  /**
   * Resolve times for an ordered list of sync keys (word/phrase or null).
   * Found keys keep narration order; missing ones are spread evenly between neighbours.
   * opts: { start=0.35, end, lead=0.15, minGap=0.2 }
   */
  S.syncTimes = function (keys, opts) {
    opts = opts || {};
    var n = keys.length;
    var D = V.duration;
    var start = opts.start != null ? opts.start : Math.min(0.35, D * 0.1);
    var end = opts.end != null ? opts.end : Math.max(start, Math.min(D * 0.72, D - 1.2));
    var lead = opts.lead != null ? opts.lead : 0.15;
    var times = new Array(n);
    var after = Math.max(0, start - 0.5);
    for (var i = 0; i < n; i++) {
      var k = keys[i];
      var t = null;
      if (k) {
        t = V.find(k, after);
        if (t != null) after = t + 0.01;
      }
      times[i] = t != null ? Math.max(0, t - lead) : null;
    }
    // fill gaps
    var i0 = 0;
    while (i0 < n) {
      if (times[i0] != null) { i0++; continue; }
      var j = i0;
      while (j < n && times[j] == null) j++;
      var a = i0 > 0 ? times[i0 - 1] : null;
      var b = j < n ? times[j] : null;
      var count = j - i0;
      var lo, hi, k2;
      if (a == null && b == null) {
        for (k2 = 0; k2 < count; k2++) times[i0 + k2] = count === 1 ? start : start + ((end - start) * k2) / (count - 1);
      } else if (a == null) {
        lo = Math.min(start, b); hi = b;
        for (k2 = 0; k2 < count; k2++) times[i0 + k2] = lo + ((hi - lo) * k2) / count;
      } else if (b == null) {
        var step = Math.max(0.35, Math.min(1.2, (Math.max(end, a + 0.4 * count) - a) / count));
        for (k2 = 0; k2 < count; k2++) times[i0 + k2] = a + step * (k2 + 1);
      } else {
        for (k2 = 0; k2 < count; k2++) times[i0 + k2] = a + ((b - a) * (k2 + 1)) / (count + 1);
      }
      i0 = j;
    }
    var minGap = opts.minGap != null ? opts.minGap : 0.12;
    for (i = 0; i < n; i++) {
      if (i > 0 && times[i] < times[i - 1] + minGap) times[i] = times[i - 1] + minGap;
      times[i] = Math.max(0, Math.min(times[i], Math.max(0.05, D - 0.6)));
    }
    return times;
  };

  /** Rich text: "*word*" → accent emphasis span. Returns a DocumentFragment (text nodes only, no HTML). */
  S.rich = function (text) {
    var frag = document.createDocumentFragment();
    var parts = str(text).split(/(\*[^*]+\*)/g);
    parts.forEach(function (p) {
      if (!p) return;
      if (p.length > 2 && p[0] === "*" && p[p.length - 1] === "*") frag.appendChild(el("span.v-em", { text: p.slice(1, -1) }));
      else frag.appendChild(document.createTextNode(p));
    });
    return frag;
  };
  function plain(text) { return str(text).replace(/\*([^*]+)\*/g, "$1"); }
  S.plain = plain;

  /** Split an element's text nodes into word spans (keeps nested emphasis spans). Returns spans. */
  S.splitWords = function (node, opts) {
    opts = opts || {};
    var spans = [];
    function walk(n) {
      var kids = [].slice.call(n.childNodes);
      kids.forEach(function (c) {
        if (c.nodeType === 3) {
          var frag = document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach(function (piece) {
            if (!piece) return;
            if (/^\s+$/.test(piece)) { frag.appendChild(document.createTextNode(" ")); return; }
            var w = el("span.v-word", { text: piece });
            if (opts.mask) {
              var m = el("span.v-mask", null, w);
              frag.appendChild(m);
            } else frag.appendChild(w);
            spans.push(w);
          });
          n.replaceChild(frag, c);
        } else if (c.nodeType === 1 && !c.classList.contains("v-word")) walk(c);
      });
    }
    walk(node);
    return spans;
  };

  S.fit = function (node, opts) { V.fit(node, opts); return node; };

  // ───────────────────────── icons ─────────────────────────
  S.iconNames = Object.keys(window.SceneIcons || {});
  S.icon = function (name, opts) {
    opts = opts || {};
    var icons = window.SceneIcons || {};
    var key = str(name).toLowerCase().trim();
    var body = icons[key] || icons[ICON_ALIASES[key]] || icons.sparkles;
    var size = opts.size != null ? opts.size : u(56);
    var svg = el("svg.v-icon", { viewBox: "0 0 24 24", width: size, height: size, fill: "none", stroke: opts.color || "currentColor", "stroke-width": opts.stroke || (cfg.kind === "whiteboard" ? 2.2 : 2), "stroke-linecap": "round", "stroke-linejoin": "round" });
    svg.innerHTML = body;
    if (opts.parent) opts.parent.appendChild(svg);
    return svg;
  };
  var ICON_ALIASES = { money: "dollar", cash: "dollar", price: "dollar", time: "clock", idea: "lightbulb", growth: "trending-up", up: "trending-up", down: "trending-down", decline: "trending-down", world: "globe", earth: "globe", person: "user", people: "users", team: "users", security: "shield", secure: "shield", ai: "cpu", chip: "cpu", computer: "cpu", data: "database", fire: "flame", water: "droplet", energy: "bolt", power: "bolt", lightning: "bolt", science: "atom", health: "heart", love: "heart", goal: "target", location: "map-pin", pin: "map-pin", place: "map-pin", gear: "settings", chat: "message", city: "building", company: "building", warning: "warning", alert: "warning", nature: "leaf", plant: "leaf", award: "trophy", win: "trophy", magic: "sparkles", new: "sparkles", speed: "rocket", launch: "rocket", stack: "layers", balance: "scale", law: "scale", industry: "factory", learn: "book", education: "book", mind: "brain", think: "brain", yes: "check", no: "x", travel: "plane", transport: "car" };
  S.badge = function (name, parent, opts) {
    var b = el("div.v-icon-badge", { parent: parent });
    S.icon(name, { parent: b, size: (opts && opts.size) || u(48) });
    return b;
  };

  // ───────────────────────── entrances ─────────────────────────
  function flicker(p) {
    if (p >= 1) return 1;
    var on = hash01(Math.floor(p * 16) + 3) > 0.42 || p > 0.75;
    return (on ? 1 : 0.12) * Math.min(1, p * 1.8);
  }
  S.ease = { flicker: flicker };

  /**
   * Animate an element in. style: rise | fade | pop | slide-left | slide-right | blur | zoom | wipe | write | glitch | drop
   */
  S.enter = function (tl, target, at, opts) {
    opts = opts || {};
    var style = opts.style || cfg.enter;
    var d = opts.dur;
    var dist = opts.distance != null ? opts.distance : u(46);
    var o = { at: clampT(at), stagger: opts.stagger || 0 };
    function O(dur, ease) { return { at: o.at, dur: d != null ? d : dur, ease: opts.ease || ease, stagger: o.stagger }; }
    switch (style) {
      case "fade":
        tl.fromTo(target, { opacity: 0 }, { opacity: 1 }, O(0.7, "outCubic"));
        break;
      case "pop":
        tl.fromTo(target, { opacity: 0 }, { opacity: 1 }, { at: o.at, dur: 0.25, ease: "outQuad", stagger: o.stagger });
        tl.fromTo(target, { scale: 0.55 }, { scale: 1 }, O(0.65, "outBack"));
        break;
      case "slide-left":
        tl.fromTo(target, { opacity: 0, x: -dist * 1.6 }, { opacity: 1, x: 0 }, O(0.75, "outCubic"));
        break;
      case "slide-right":
        tl.fromTo(target, { opacity: 0, x: dist * 1.6 }, { opacity: 1, x: 0 }, O(0.75, "outCubic"));
        break;
      case "drop":
        tl.fromTo(target, { opacity: 0, y: -dist }, { opacity: 1, y: 0 }, O(0.75, "outBack"));
        break;
      case "blur":
        tl.fromTo(target, { opacity: 0, filter: "blur(18px)", scale: 1.06 }, { opacity: 1, filter: "blur(0px)", scale: 1 }, O(1.1, "outCubic"));
        tl.set(target, { filter: "none" }, { at: o.at + (d != null ? d : 1.1) + 0.01 + o.stagger * 20 });
        break;
      case "zoom":
        tl.fromTo(target, { opacity: 0, scale: 1.3 }, { opacity: 1, scale: 1 }, O(0.9, "outExpo"));
        break;
      case "wipe":
      case "write": {
        var len = typeof target === "object" && target && target.textContent ? target.textContent.length : 20;
        var wd = d != null ? d : style === "write" ? Math.min(1.8, 0.35 + len * 0.028) : 0.8;
        tl.fromTo(target, { opacity: 1, clipPath: "inset(0% 100% 0% 0%)" }, { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }, { at: o.at, dur: wd, ease: style === "write" ? "inOutSine" : "inOutCubic", stagger: o.stagger });
        tl.set(target, { clipPath: "none" }, { at: o.at + wd + 0.01 });
        break;
      }
      case "glitch":
        tl.fromTo(target, { opacity: 0 }, { opacity: 1 }, { at: o.at, dur: d != null ? d : 0.5, ease: flicker, stagger: o.stagger });
        tl.fromTo(target, { x: -u(28), skewX: -14 }, { x: 0, skewX: 0 }, O(0.5, "outExpo"));
        break;
      case "rise":
      default:
        tl.fromTo(target, { opacity: 0, y: dist }, { opacity: 1, y: 0 }, O(0.8, "outCubic"));
    }
    return tl;
  };

  S.exit = function (tl, target, at, opts) {
    opts = opts || {};
    tl.to(target, { opacity: 0, y: opts.y != null ? opts.y : -u(24) }, { at: clampT(at), dur: opts.dur || 0.45, ease: "inCubic" });
    return tl;
  };

  /** Reveal a title/heading word by word in the pack's signature way. */
  S.reveal = function (tl, node, at, opts) {
    opts = opts || {};
    var mode = opts.mode || cfg.titleReveal;
    at = clampT(at);
    if (mode === "write") { S.enter(tl, node, at, { style: "write", dur: opts.dur }); return tl; }
    if (mode === "fade") { S.enter(tl, node, at, { style: "fade" }); return tl; }
    var spans = S.splitWords(node, { mask: mode === "mask" });
    var n = spans.length || 1;
    var stagger = opts.stagger != null ? opts.stagger : Math.max(0.025, Math.min(0.09, 0.9 / n));
    if (mode === "mask") tl.fromTo(spans, { yPercent: 115, rotate: 4 }, { yPercent: 0, rotate: 0 }, { at: at, dur: 0.85, ease: "outExpo", stagger: stagger });
    else if (mode === "blur") {
      tl.fromTo(spans, { opacity: 0, filter: "blur(14px)", y: u(10) }, { opacity: 1, filter: "blur(0px)", y: 0 }, { at: at, dur: 1.0, ease: "outCubic", stagger: stagger * 1.3 });
      tl.set(spans, { filter: "none" }, { at: at + 1.05 + stagger * 1.3 * n });
    } else if (mode === "glitch") {
      tl.fromTo(spans, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.45, ease: flicker, stagger: stagger });
      tl.fromTo(spans, { y: u(24), skewX: -10 }, { y: 0, skewX: 0 }, { at: at, dur: 0.55, ease: "outExpo", stagger: stagger });
    } else tl.fromTo(spans, { opacity: 0, y: u(30) }, { opacity: 1, y: 0 }, { at: at, dur: 0.7, ease: "outCubic", stagger: stagger });
    return tl;
  };

  /** Fade words in exactly as they are spoken (karaoke). words: span list; text tokens aligned to V.words. */
  S.speakWords = function (tl, spans, opts) {
    opts = opts || {};
    var keys = spans.map(function (s) { return s.textContent; });
    var start = opts.start != null ? opts.start : 0.3;
    var times = S.syncTimes(keys, { start: start, end: opts.end != null ? opts.end : Math.min(V.duration * 0.85, start + spans.length * 0.32), lead: 0.08, minGap: 0.03 });
    spans.forEach(function (s, i) {
      tl.fromTo(s, { opacity: opts.dim != null ? opts.dim : 0.18 }, { opacity: 1 }, { at: times[i], dur: 0.25, ease: "outQuad" });
    });
    return times;
  };

  // ───────────────────────── emphasis / sketches ─────────────────────────
  function relRect(node, ref) {
    var a = node.getBoundingClientRect(), b = ref.getBoundingClientRect();
    return { x: a.left - b.left, y: a.top - b.top, w: a.width, h: a.height };
  }
  S.rect = relRect;
  function rr(rnd, amt) { return (rnd() - 0.5) * 2 * amt; }
  /** Hand-drawn style line path (two slightly offset strokes for a marker feel). */
  function roughLine(x1, y1, x2, y2, rnd, wob) {
    wob = wob == null ? u(3) : wob;
    var mx = (x1 + x2) / 2 + rr(rnd, wob * 2), my = (y1 + y2) / 2 + rr(rnd, wob * 2);
    return "M" + (x1 + rr(rnd, wob)).toFixed(1) + " " + (y1 + rr(rnd, wob)).toFixed(1) + " Q" + mx.toFixed(1) + " " + my.toFixed(1) + " " + (x2 + rr(rnd, wob)).toFixed(1) + " " + (y2 + rr(rnd, wob)).toFixed(1);
  }
  function roughRectPath(x, y, w, h, rnd) {
    var o = u(6);
    var p = [];
    p.push(roughLine(x - o, y, x + w + o, y + rr(rnd, u(2)), rnd));
    p.push(roughLine(x + w, y - o, x + w + rr(rnd, u(2)), y + h + o, rnd));
    p.push(roughLine(x + w + o, y + h, x - o, y + h + rr(rnd, u(2)), rnd));
    p.push(roughLine(x, y + h + o, x + rr(rnd, u(2)), y - o, rnd));
    return p.join(" ");
  }
  function roughEllipsePath(cx, cy, rx, ry, rnd) {
    var pts = [];
    var a0 = -Math.PI * 0.6 + rr(rnd, 0.2);
    var steps = 26;
    for (var i = 0; i <= steps + 3; i++) {
      var a = a0 + (i / steps) * Math.PI * 2;
      var k = 1 + rr(rnd, 0.035) + (i / steps) * 0.06;
      pts.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
    }
    var d = "M" + pts[0][0].toFixed(1) + " " + pts[0][1].toFixed(1);
    for (i = 1; i < pts.length - 1; i++) {
      var xc = (pts[i][0] + pts[i + 1][0]) / 2, yc = (pts[i][1] + pts[i + 1][1]) / 2;
      d += " Q" + pts[i][0].toFixed(1) + " " + pts[i][1].toFixed(1) + " " + xc.toFixed(1) + " " + yc.toFixed(1);
    }
    return d;
  }
  S.roughLine = roughLine;
  S.roughRect = roughRectPath;
  S.roughEllipse = roughEllipsePath;

  function overlaySvg(container) {
    var svg = el("svg.v-sketch", { parent: container });
    var w = container.clientWidth || V.width, h = container.clientHeight || V.height;
    svg.setAttribute("viewBox", "0 0 " + w + " " + h);
    svg.setAttribute("width", w);
    svg.setAttribute("height", h);
    svg.style.zIndex = 5;
    return svg;
  }
  /** Draw an SVG path (stroke) inside `container` over time. Returns the path. */
  S.drawPath = function (tl, container, d, at, opts) {
    opts = opts || {};
    var svg = opts.svg || overlaySvg(container);
    var path = el("path", { parent: svg, d: d, fill: "none", stroke: opts.color || "var(--accent)", "stroke-width": opts.width || u(cfg.kind === "whiteboard" ? 5 : 4), "stroke-linecap": "round", "stroke-linejoin": "round" });
    if (opts.opacity != null) path.setAttribute("opacity", opts.opacity);
    tl.fromTo(path, { draw: 0 }, { draw: 1 }, { at: clampT(at), dur: opts.dur || 0.6, ease: opts.ease || "inOutCubic" });
    return path;
  };

  /**
   * Emphasise a word/element at time `at`: underline (minimal/documentary), glow (neon),
   * hand-drawn underline (whiteboard), or circle (opts.shape = "circle").
   * `container` must be a positioned ancestor (e.g. the stage).
   */
  S.highlight = function (tl, target, at, opts) {
    opts = opts || {};
    var container = opts.container || target.closest(".v-stage") || target.parentNode;
    at = clampT(at);
    var r = relRect(target, container);
    var rnd = V.makeRand(hashStr(target.textContent) + 7);
    if (opts.shape === "circle") {
      S.drawPath(tl, container, roughEllipsePath(r.x + r.w / 2, r.y + r.h / 2, r.w / 2 + u(28), r.h / 2 + u(18), rnd), at, { color: opts.color || "var(--accent-2, var(--accent))", dur: 0.7 });
      return tl;
    }
    if (cfg.kind === "neon") {
      var glow = S.css("--glow-rgb") || "34,211,238";
      tl.fromTo(target, { textShadow: "0 0 0px rgba(" + glow + ",0)" }, { textShadow: "0 0 " + u(28).toFixed(1) + "px rgba(" + glow + ",0.95)" }, { at: at, dur: 0.4, ease: "outQuad" });
      tl.to(target, { color: opts.color || "#ffffff" }, { at: at, dur: 0.3 });
      return tl;
    }
    if (cfg.kind === "whiteboard") {
      var y = r.y + r.h * 0.96;
      S.drawPath(tl, container, roughLine(r.x - u(6), y, r.x + r.w + u(6), y + rr(rnd, u(4)), rnd, u(2.5)) + " " + roughLine(r.x + u(10), y + u(9), r.x + r.w - u(4), y + u(7), rnd, u(2)), at, { color: opts.color || "var(--accent-2, var(--accent))", dur: 0.55, width: u(6) });
      return tl;
    }
    // minimal / documentary: marker bar behind each line box of the text
    var cr = container.getBoundingClientRect();
    var rects = [].slice.call(target.getClientRects()).filter(function (q) { return q.width > 2; });
    if (!rects.length) rects = [target.getBoundingClientRect()];
    // merge rects on the same line (word spans)
    var lines = [];
    rects.forEach(function (q) {
      var L = lines.length ? lines[lines.length - 1] : null;
      if (L && Math.abs(L.top - q.top) < q.height * 0.5) { L.left = Math.min(L.left, q.left); L.right = Math.max(L.right, q.right); L.bottom = Math.max(L.bottom, q.bottom); }
      else lines.push({ left: q.left, right: q.right, top: q.top, bottom: q.bottom, height: q.height });
    });
    lines.forEach(function (q, i) {
      var h = q.bottom - q.top;
      var bar = el("span", { parent: container, style: { position: "absolute", left: q.left - cr.left - u(6) + "px", top: q.top - cr.top + h * (cfg.kind === "documentary" ? 0.96 : 0.6) + "px", width: q.right - q.left + u(12) + "px", height: (cfg.kind === "documentary" ? u(4) : h * 0.32) + "px", background: opts.color || (cfg.kind === "documentary" ? "var(--accent)" : "var(--hl, rgba(47,107,255,0.22))"), transformOrigin: "0 50%", zIndex: -1, borderRadius: u(4) + "px" } });
      tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1 }, { at: at + i * 0.25, dur: 0.45, ease: "inOutCubic" });
    });
    return tl;
  };

  // ───────────────────────── backgrounds ─────────────────────────
  function grainDataUrl(size, seed, alpha) {
    try {
      var c = document.createElement("canvas");
      c.width = c.height = size;
      var ctx = c.getContext("2d");
      var img = ctx.createImageData(size, size);
      var rnd = V.makeRand(seed);
      for (var i = 0; i < img.data.length; i += 4) {
        var v = Math.floor(rnd() * 255);
        img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
        img.data[i + 3] = alpha;
      }
      ctx.putImageData(img, 0, 0);
      return c.toDataURL("image/png");
    } catch (e) { return ""; }
  }

  S.background = function (root, opts) {
    opts = opts || {};
    var bg = el("div.v-bg", { parent: root });
    var kind = opts.kind || cfg.kind;
    var W = V.width, H = V.height, M = Math.max(W, H);
    // A pack may paint its own backdrop: SceneStyle.init({ background: function (bg, root, kit) {...} }).
    if (typeof cfg.background === "function" && !opts.kind) {
      cfg.background(bg, root, { el: el, u: u, W: W, H: H, M: M, hash01: hash01, grain: grainDataUrl });
      return bg;
    }
    if (kind === "minimal") {
      var dots = el("div", { parent: bg, style: { inset: "0", backgroundImage: "radial-gradient(var(--dot, rgba(17,17,17,0.10)) " + u(1.6) + "px, transparent " + u(2) + "px)", backgroundSize: u(38) + "px " + u(38) + "px", opacity: 0.55 } });
      var b1 = el("div", { parent: bg, style: { width: M * 0.75 + "px", height: M * 0.75 + "px", borderRadius: "50%", background: "radial-gradient(circle, var(--blob-1, rgba(47,107,255,0.16)) 0%, transparent 65%)", left: W * 0.62 + "px", top: -M * 0.25 + "px" } });
      var b2 = el("div", { parent: bg, style: { width: M * 0.6 + "px", height: M * 0.6 + "px", borderRadius: "50%", background: "radial-gradient(circle, var(--blob-2, rgba(255,107,74,0.12)) 0%, transparent 65%)", left: -M * 0.22 + "px", top: H * 0.55 + "px" } });
      V.onFrame(function (t) {
        b1.style.transform = "translate(" + (Math.sin(t * 0.25) * u(60)).toFixed(1) + "px," + (Math.cos(t * 0.2) * u(40)).toFixed(1) + "px)";
        b2.style.transform = "translate(" + (Math.cos(t * 0.22) * u(50)).toFixed(1) + "px," + (Math.sin(t * 0.18) * u(50)).toFixed(1) + "px)";
        dots.style.backgroundPosition = "0px " + (-(t * u(6)) % u(38)).toFixed(2) + "px";
      });
    } else if (kind === "documentary") {
      el("div", { parent: bg, style: { inset: "0", background: "radial-gradient(ellipse at 50% 45%, var(--bg-center, #1d1915) 0%, var(--bg) 70%)" } });
      var leak = el("div", { parent: bg, style: { width: M * 0.9 + "px", height: M * 0.9 + "px", borderRadius: "50%", background: "radial-gradient(circle, rgba(232,176,75,0.13) 0%, transparent 60%)", left: W * 0.45 + "px", top: -M * 0.4 + "px" } });
      el("div.v-overlay", { parent: root, style: { background: "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)" } });
      var url = grainDataUrl(160, V.seed + 11, 34);
      var grain = el("div.v-overlay", { parent: root, style: { inset: -u(160) + "px", backgroundImage: url ? "url(" + url + ")" : "none", backgroundSize: u(160) * 1.4 + "px", opacity: 0.55, mixBlendMode: "overlay", zIndex: 51 } });
      V.onFrame(function (t) {
        leak.style.transform = "translate(" + (Math.sin(t * 0.15) * u(120)).toFixed(1) + "px," + (Math.cos(t * 0.12) * u(60)).toFixed(1) + "px)";
        var f = Math.floor(t * 12);
        grain.style.transform = "translate(" + Math.round(hash01(f) * u(150)) + "px," + Math.round(hash01(f + 99) * u(150)) + "px)";
      });
    } else if (kind === "neon") {
      el("div", { parent: bg, style: { inset: "0", background: "radial-gradient(ellipse at 50% 120%, rgba(232,121,249,0.22) 0%, transparent 55%), radial-gradient(ellipse at 50% -20%, rgba(34,211,238,0.16) 0%, transparent 55%), var(--bg)" } });
      var floorWrap = el("div", { parent: bg, style: { left: "-50%", right: "-50%", bottom: "0", height: "48%", perspective: u(500) + "px", perspectiveOrigin: "50% 0%", overflow: "hidden", maskImage: "linear-gradient(to top, black 10%, transparent 95%)", webkitMaskImage: "linear-gradient(to top, black 10%, transparent 95%)" } });
      var cell = u(90);
      var floor = el("div", { parent: floorWrap, style: { position: "absolute", left: "0", right: "0", top: "0", height: "300%", transformOrigin: "50% 0%", transform: "rotateX(72deg)", backgroundImage: "linear-gradient(rgba(34,211,238,0.35) " + u(2) + "px, transparent " + u(2) + "px), linear-gradient(90deg, rgba(34,211,238,0.35) " + u(2) + "px, transparent " + u(2) + "px)", backgroundSize: cell + "px " + cell + "px" } });
      el("div", { parent: bg, style: { left: "0", right: "0", top: "52%", height: u(2) + "px", background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.7), transparent)", boxShadow: "0 0 " + u(30) + "px rgba(34,211,238,0.6)" } });
      var parts = [];
      var rnd = V.makeRand(V.seed + 5);
      for (var i = 0; i < 26; i++) {
        var sz = u(2 + rnd() * 4);
        parts.push({ e: el("div", { parent: bg, style: { width: sz + "px", height: sz + "px", borderRadius: "50%", background: rnd() > 0.5 ? "#22D3EE" : "#E879F9", boxShadow: "0 0 " + sz * 3 + "px currentColor", opacity: 0.25 + rnd() * 0.5, left: "0", top: "0" } }), x: rnd() * W, y: rnd() * H, s: 10 + rnd() * 30, ph: rnd() * 6 });
      }
      el("div.v-overlay", { parent: root, style: { backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.16) 0px, rgba(0,0,0,0.16) " + Math.max(1, u(2)) + "px, transparent " + Math.max(1, u(2)) + "px, transparent " + Math.max(2, u(5)) + "px)", opacity: 0.6 } });
      el("div.v-overlay", { parent: root, style: { background: "radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(0,0,0,0.5) 100%)" } });
      V.onFrame(function (t) {
        floor.style.backgroundPosition = "0px " + ((t * u(60)) % cell).toFixed(2) + "px";
        for (var k = 0; k < parts.length; k++) {
          var p = parts[k];
          var y = (((p.y - t * u(p.s)) % H) + H) % H;
          p.e.style.transform = "translate(" + (p.x + Math.sin(t * 0.6 + p.ph) * u(20)).toFixed(1) + "px," + y.toFixed(1) + "px)";
        }
      });
    } else if (kind === "whiteboard") {
      el("div", { parent: bg, style: { inset: "0", backgroundImage: "linear-gradient(var(--grid, rgba(59,130,246,0.07)) " + Math.max(1, u(1.5)) + "px, transparent " + Math.max(1, u(1.5)) + "px), linear-gradient(90deg, var(--grid, rgba(59,130,246,0.07)) " + Math.max(1, u(1.5)) + "px, transparent " + Math.max(1, u(1.5)) + "px)", backgroundSize: u(54) + "px " + u(54) + "px", backgroundPosition: "center center" } });
      el("div.v-overlay", { parent: root, style: { background: "radial-gradient(ellipse at 50% 45%, transparent 60%, rgba(120,100,60,0.10) 100%)" } });
    }
    return bg;
  };

  /** Slow "camera" drift on an element (Ken Burns). amount = scale increase over the scene. */
  S.camera = function (node, amount) {
    var a = amount != null ? amount : cfg.drift;
    if (!a) return;
    V.onFrame(function (t) {
      var p = V.progress(t, 0, V.duration, "inOutSine");
      node.style.transform = "scale(" + (1 + a * p).toFixed(5) + ") translate(" + (-a * 300 * p * V.unit * 0.3).toFixed(2) + "px, 0px)";
    });
  };

  /** Create background + drifting camera + padded flex stage. Returns the stage element. */
  S.stage = function (root, opts) {
    opts = opts || {};
    root = root || V.root();
    root.classList.add("pack-" + cfg.id, "kind-" + cfg.kind);
    if (opts.cls) root.classList.add(opts.cls);
    if (opts.background !== false) S.background(root);
    var cam = el("div.v-camera", { parent: root });
    var stage = el("div.v-stage", { parent: cam });
    if (opts.align === "top") stage.classList.add("v-top");
    S.camera(cam, opts.drift);
    return stage;
  };

  /** If stage content overflows, scale it down to fit (call after building). */
  S.guard = function (stage) {
    S.flush();
    try {
      var sr = stage.getBoundingClientRect();
      var cs = getComputedStyle(stage);
      var top = sr.top + parseFloat(cs.paddingTop), bottom = sr.bottom - parseFloat(cs.paddingBottom);
      var left = sr.left + parseFloat(cs.paddingLeft), right = sr.right - parseFloat(cs.paddingRight);
      var minT = Infinity, maxB = -Infinity, minL = Infinity, maxR = -Infinity;
      [].forEach.call(stage.children, function (c) {
        if (c.classList.contains("v-sketch") || c.classList.contains("v-wipe")) return;
        var r = c.getBoundingClientRect();
        if (!r.width && !r.height) return;
        minT = Math.min(minT, r.top); maxB = Math.max(maxB, r.bottom); minL = Math.min(minL, r.left); maxR = Math.max(maxR, r.right);
      });
      if (!isFinite(minT)) return;
      var needH = maxB - minT, availH = bottom - top, needW = maxR - minL, availW = right - left;
      var s = Math.min(1, availH / Math.max(1, needH), availW / Math.max(1, needW));
      if (s < 0.995) {
        stage.style.transform = "scale(" + Math.max(0.4, s * 0.98).toFixed(4) + ")";
        stage.style.transformOrigin = "50% " + (((top + bottom) / 2 - sr.top) / sr.height * 100).toFixed(2) + "%";
      }
    } catch (e) { V.error("guard: " + e.message); }
  };

  // ───────────────────────── building blocks ─────────────────────────
  S.title = function (parent, text, opts) {
    opts = opts || {};
    var h = el("h1.v-title", { parent: parent });
    if (opts.size) h.classList.add("v-" + opts.size);
    if (opts.center) h.classList.add("v-center");
    h.appendChild(S.rich(text));
    if (opts.fit !== false) V.fit(h, { maxLines: opts.maxLines || 3, min: u(28) });
    return h;
  };
  S.text = function (parent, text, opts) {
    opts = opts || {};
    var p = el((opts.tag || "p") + ".v-text", { parent: parent });
    if (opts.muted) p.classList.add("v-muted");
    if (opts.cls) p.className += " " + opts.cls;
    if (opts.center) p.style.textAlign = "center";
    p.appendChild(S.rich(text));
    if (opts.maxLines) V.fit(p, { maxLines: opts.maxLines, min: u(18) });
    return p;
  };
  S.kicker = function (parent, text) { return el("div.v-kicker", { parent: parent, text: plain(text) }); };
  S.card = function (parent, opts) {
    opts = opts || {};
    var c = el("div.v-card", { parent: parent });
    if (opts.cls) c.className += " " + opts.cls;
    return c;
  };
  /** Pack-specific card entrance: whiteboard draws a sketchy border; others rise/pop. */
  S.cardIn = function (tl, card, at, opts) {
    opts = opts || {};
    at = clampT(at);
    if (cfg.kind === "whiteboard") {
      // drawn after layout is final (S.flush, called by S.guard)
      pending.push(function () { sketchCard(tl, card, at, opts); });
      return tl;
    }
    S.enter(tl, card, at, { style: opts.style || (cfg.kind === "neon" ? "glitch" : cfg.kind === "documentary" ? "fade" : "rise") });
    return tl;
  };
  var pending = [];
  /** Run deferred layout-dependent drawing (whiteboard sketches). Called automatically by S.guard. */
  S.flush = function () {
    var q = pending;
    pending = [];
    q.forEach(function (f) { try { f(); } catch (e) { V.error("flush: " + e.message); } });
  };
  function sketchCard(tl, card, at, opts) {
    {
      var r = { x: 0, y: 0, w: card.offsetWidth, h: card.offsetHeight };
      var svg = el("svg.v-sketch", { parent: card, viewBox: "0 0 " + r.w + " " + r.h, width: r.w, height: r.h });
      var rnd = V.makeRand(hashStr(card.textContent) + 3);
      S.drawPath(tl, card, roughRectPath(u(4), u(4), r.w - u(8), r.h - u(8), rnd), at, { svg: svg, color: opts.color || "var(--ink)", dur: 0.7, width: u(4) });
      var kids = [].filter.call(card.children, function (c) { return c !== svg; });
      tl.fromTo(kids, { opacity: 0 }, { opacity: 1 }, { at: at + 0.25, dur: 0.5, ease: "outQuad" });
    }
  }
  S.counter = function (tl, node, opts) {
    var to = Number(opts.to) || 0;
    var from = Number(opts.from) || 0;
    tl.fromTo(node, { text: from }, { text: to, decimals: opts.decimals || 0, prefix: opts.prefix || "", suffix: opts.suffix || "", separator: opts.separator !== false }, { at: clampT(opts.at || 0), dur: opts.dur || 1.6, ease: opts.ease || "outExpo" });
    return tl;
  };
  S.formatValue = function (v, f) {
    f = f || {};
    var n = Number(v);
    if (!isFinite(n)) return str(v);
    return (f.prefix || "") + V.format(n, f.decimals != null ? f.decimals : n % 1 ? 1 : 0, true) + (f.suffix || "");
  };
  /** Straight arrow (SVG) from (x1,y1) to (x2,y2) inside svg; drawn at `at`. Returns {line, head}. */
  S.arrow = function (tl, svg, x1, y1, x2, y2, at, opts) {
    opts = opts || {};
    var ang = Math.atan2(y2 - y1, x2 - x1);
    var d = opts.curve
      ? "M" + x1 + " " + y1 + " Q" + ((x1 + x2) / 2 - Math.sin(ang) * opts.curve) + " " + ((y1 + y2) / 2 + Math.cos(ang) * opts.curve) + " " + x2 + " " + y2
      : cfg.kind === "whiteboard" ? roughLine(x1, y1, x2, y2, V.makeRand(Math.round(x1 + y2)), u(2)) : "M" + x1 + " " + y1 + " L" + x2 + " " + y2;
    var line = el("path.v-edge", { parent: svg, d: d });
    var hs = opts.head || u(18);
    if (opts.curve) ang = Math.atan2(y2 - ((y1 + y2) / 2 + Math.cos(ang) * opts.curve), x2 - ((x1 + x2) / 2 - Math.sin(ang) * opts.curve));
    var hx1 = x2 - Math.cos(ang - 0.45) * hs, hy1 = y2 - Math.sin(ang - 0.45) * hs;
    var hx2 = x2 - Math.cos(ang + 0.45) * hs, hy2 = y2 - Math.sin(ang + 0.45) * hs;
    var head = el("path.v-head", { parent: svg, d: "M" + x2 + " " + y2 + " L" + hx1 + " " + hy1 + " L" + hx2 + " " + hy2 + " Z" });
    at = clampT(at);
    var dur = opts.dur || 0.55;
    tl.fromTo(line, { draw: 0 }, { draw: 1 }, { at: at, dur: dur, ease: "inOutCubic" });
    tl.fromTo(head, { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1 }, { at: at + dur * 0.8, dur: 0.25, ease: "outBack" });
    head.style.transformOrigin = x2 + "px " + y2 + "px";
    head.style.transformBox = "view-box";
    return { line: line, head: head };
  };

  // ───────────────────────── kinetic typography engine ─────────────────────────
  var NUMLIKE = /\d/;
  /**
   * Kinetic captions: phrases appear one at a time, words pop in exactly when spoken.
   * opts: { tokens?: [{word,start,end}], text?, emphasis?: string[], progress?: bool, maxChars?, maxWords? }
   */
  S.kinetic = function (stage, opts) {
    opts = opts || {};
    var D = V.duration;
    var toks = [];
    if (opts.tokens && opts.tokens.length) {
      toks = opts.tokens.map(function (w) { return { word: str(w.word), start: +w.start || 0, end: +w.end || (+w.start || 0) + 0.3 }; });
    } else if (opts.text) {
      var raw = str(opts.text).split(/\s+/).filter(Boolean).slice(0, 4000);
      var times = S.syncTimes(raw.map(function (w) { return w.replace(/[*_]/g, ""); }), { start: 0.25, end: Math.max(0.3, Math.min(D - 0.6, 0.25 + raw.length * 0.38)), lead: 0, minGap: 0.02 });
      toks = raw.map(function (w, i) { return { word: w, start: times[i], end: i + 1 < raw.length ? times[i + 1] : times[i] + 0.4 }; });
    }
    var root = el("div.v-kin", { parent: stage });
    if (!toks.length) return root;
    var emph = {};
    arr(opts.emphasis).forEach(function (w) { str(w).toLowerCase().split(/\s+/).forEach(function (x) { var c = x.replace(/[^\p{L}\p{N}]+/gu, ""); if (c) emph[c] = 1; }); });
    var maxChars = opts.maxChars || (V.isPortrait ? 24 : V.isSquare ? 30 : 40);
    var maxWords = opts.maxWords || (V.isPortrait ? 5 : 7);
    var phrases = [];
    var cur = null;
    toks.forEach(function (tk, i) {
      var w = tk.word;
      var starred = /^\*.*\*[^\p{L}\p{N}]*$/u.test(w) || /^\*/.test(w);
      w = w.replace(/\*/g, "");
      if (!w) return;
      var prev = i > 0 ? toks[i - 1] : null;
      var gap = prev ? tk.start - prev.end : 0;
      var brk = !cur || cur.chars + w.length + 1 > maxChars || cur.words.length >= maxWords || (prev && /[.!?;:]["')\]]*$/.test(prev.word)) || (prev && /,$/.test(prev.word) && cur.words.length >= 3) || gap > 0.65;
      if (brk) { cur = { words: [], chars: 0 }; phrases.push(cur); }
      var clean = w.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");
      cur.words.push({ word: w, start: tk.start, end: tk.end, em: starred || !!emph[clean] || NUMLIKE.test(w) });
      cur.chars += w.length + 1;
    });
    // merge orphan phrases (1 short word) into the previous phrase of the same sentence
    for (var pi0 = phrases.length - 1; pi0 > 0; pi0--) {
      var a = phrases[pi0 - 1], b = phrases[pi0];
      var lastW = a.words[a.words.length - 1].word;
      if (b.words.length <= 1 && !/[.!?;:]["')\]]*$/.test(lastW) && a.chars + b.chars <= maxChars * 1.45 && b.words[0].start - a.words[a.words.length - 1].end < 0.65) {
        a.words = a.words.concat(b.words);
        a.chars += b.chars;
        phrases.splice(pi0, 1);
      }
    }
    phrases.forEach(function (ph, pi) {
      ph.start =Math.max(0, ph.words[0].start - 0.18);
      ph.node = el("div.v-phrase", { parent: root });
      ph.words.forEach(function (wd, wi) {
        wd.node = el("span.v-kw", { parent: ph.node, text: wd.word });
        if (wd.em) wd.node.classList.add("is-em");
        if (wi < ph.words.length - 1) ph.node.appendChild(document.createTextNode(" "));
      });
      if (pi > 0) phrases[pi - 1].end = ph.start;
    });
    phrases[phrases.length - 1].end = Infinity;
    // fit each phrase (only those that overflow)
    var maxH = Math.max(u(100), stage.clientHeight - parseFloat(getComputedStyle(stage).paddingTop) - parseFloat(getComputedStyle(stage).paddingBottom));
    phrases.forEach(function (ph) {
      ph.node.classList.add("is-on");
      if (ph.node.scrollHeight > maxH * 0.9 || ph.node.scrollWidth > ph.node.clientWidth + 1) V.fit(ph.node, { maxHeight: maxH * 0.9, min: u(30) });
      ph.node.classList.remove("is-on");
    });
    var starts = phrases.map(function (p) { return p.start; });
    var on = -1;
    var prog = null;
    if (opts.progress) { prog = el("div.v-kprog", { parent: stage }); prog = el("i", { parent: prog }); }
    var style = opts.style || cfg.kind;
    V.onFrame(function (t) {
      // binary search active phrase
      var lo = 0, hi = starts.length - 1, idx = 0;
      if (t < starts[0]) idx = 0;
      else {
        while (lo <= hi) { var mid = (lo + hi) >> 1; if (starts[mid] <= t) { idx = mid; lo = mid + 1; } else hi = mid - 1; }
      }
      if (on !== idx) {
        if (on >= 0 && phrases[on]) phrases[on].node.classList.remove("is-on");
        phrases[idx].node.classList.add("is-on");
        on = idx;
      }
      var ph = phrases[idx];
      var pin = V.progress(t, ph.start, ph.start + 0.35, "outCubic");
      ph.node.style.opacity = String(Math.max(0, Math.min(1, pin * 1.2)));
      var pout = isFinite(ph.end) ? V.progress(t, ph.end - 0.12, ph.end, "inQuad") : 0;
      ph.node.style.transform = "translateY(calc(-50% + " + ((1 - pin) * u(26) - pout * u(18)).toFixed(2) + "px))";
      for (var i = 0; i < ph.words.length; i++) {
        var wd = ph.words[i];
        var p = V.progress(t, wd.start - 0.1, wd.start + 0.22);
        var e = V.ease.outBack(p);
        var n = wd.node;
        if (style === "whiteboard") {
          n.style.opacity = p > 0 ? "1" : "0";
          n.style.clipPath = p >= 1 ? "none" : "inset(0% " + ((1 - V.ease.inOutSine(p)) * 100).toFixed(1) + "% 0% 0%)";
        } else if (style === "documentary") {
          n.style.opacity = (V.ease.outCubic(p) * 1).toFixed(3);
          n.style.filter = p >= 1 ? "none" : "blur(" + ((1 - p) * u(10)).toFixed(2) + "px)";
        } else if (style === "neon") {
          n.style.opacity = flicker(p).toFixed(3);
          n.style.transform = "translateX(" + ((1 - V.ease.outExpo(p)) * -u(14)).toFixed(2) + "px)";
        } else {
          n.style.opacity = Math.min(1, p * 2).toFixed(3);
          n.style.transform = "translateY(" + ((1 - e) * 0.42).toFixed(3) + "em) scale(" + (0.9 + 0.1 * e).toFixed(4) + ")";
        }
      }
      if (prog) prog.style.transform = "scaleX(" + V.progress(t, 0, D).toFixed(4) + ")";
      ph.node.style.setProperty("--p", pin.toFixed(3));
    });
    return root;
  };

  // ───────────────────────── templates ─────────────────────────
  var T = (S.templates = {});

  function header(stage, tl, p, opts) {
    opts = opts || {};
    if (!p.title && !p.kicker) return null;
    var h = el("div.v-header", { parent: stage });
    if (opts.center) h.classList.add("v-center");
    var k = p.kicker ? S.kicker(h, p.kicker) : null;
    var title = p.title ? S.title(h, p.title, { size: opts.size || "lg", maxLines: opts.maxLines || 2, center: opts.center }) : null;
    var t0 = opts.at != null ? opts.at : 0.15;
    if (k) S.enter(tl, k, t0, { style: cfg.kind === "whiteboard" ? "write" : "fade" });
    if (title) S.reveal(tl, title, t0 + 0.1);
    return { el: h, title: title, kicker: k };
  }

  T["title-card"] = function (stage, p, tl) {
    var wrap = el("div.v-header.v-center", { parent: stage, style: { maxWidth: V.isLandscape ? "88%" : "100%" } });
    var k = p.kicker ? S.kicker(wrap, p.kicker) : null;
    var title = S.title(wrap, p.title || "", { size: "hero", center: true, maxLines: V.isPortrait ? 5 : 3 });
    var line = cfg.kind === "whiteboard" ? null : el("i.v-line.v-center", { parent: wrap, style: { marginTop: u(18) + "px" } });
    var sub = p.subtitle ? S.text(wrap, p.subtitle, { muted: true, center: true, maxLines: 3 }) : null;
    if (sub) { sub.style.maxWidth = V.isLandscape ? "75%" : "100%"; sub.style.margin = "0 auto"; sub.style.fontSize = "var(--fs-md)"; sub.style.fontWeight = "500"; V.fit(sub, { maxLines: 3 }); }
    var t0 = 0.2;
    if (k) S.enter(tl, k, t0, { style: cfg.kind === "neon" ? "glitch" : cfg.kind === "whiteboard" ? "write" : "fade" });
    var em = title.querySelector(".v-em");
    S.reveal(tl, title, t0 + 0.12);
    if (line) tl.fromTo(line, { scaleX: 0 }, { scaleX: 1 }, { at: t0 + 0.65, dur: 0.8, ease: "inOutCubic" });
    var tSub = sub ? Math.max(t0 + 0.8, (V.find(autoKey(p.subtitle) || "", 0.5) || 0) - 0.2) : 0;
    if (sub) S.enter(tl, sub, Math.min(tSub, t0 + 2.2), { style: cfg.kind === "whiteboard" ? "write" : cfg.kind === "documentary" ? "blur" : "rise" });
    var kw = p.keyword || (em ? em.textContent : null);
    if (kw && em) S.highlight(tl, em, Math.max(t0 + 1, V.at(kw, 0.3) - 0.1), { container: stage });
    if (cfg.kind === "whiteboard") {
      var r = relRect(title, stage);
      var rnd = V.makeRand(hashStr(p.title));
      var y = r.y + r.h + u(14);
      S.drawPath(tl, stage, roughLine(r.x + r.w * 0.2, y, r.x + r.w * 0.8, y + u(6), rnd, u(3)), t0 + 0.9, { color: "var(--accent)", width: u(7), dur: 0.6 });
    }
    if (cfg.kind === "neon" || cfg.kind === "minimal") {
      // corner brackets / accent dots
      var c = el("div", { parent: stage, style: { position: "absolute", left: "var(--pad-x)", top: "var(--pad-y)", width: u(70) + "px", height: u(70) + "px", borderLeft: u(5) + "px solid var(--accent)", borderTop: u(5) + "px solid var(--accent)", opacity: 0.9 } });
      var c2 = el("div", { parent: stage, style: { position: "absolute", right: "var(--pad-x)", bottom: "var(--pad-bottom)", width: u(70) + "px", height: u(70) + "px", borderRight: u(5) + "px solid var(--accent-2, var(--accent))", borderBottom: u(5) + "px solid var(--accent-2, var(--accent))", opacity: 0.9 } });
      tl.fromTo([c, c2], { opacity: 0, scale: 0.5 }, { opacity: 0.9, scale: 1 }, { at: t0 + 0.4, dur: 0.7, ease: "outBack" });
    }
  };

  T["kinetic-text"] = function (stage, p, tl) {
    stage.parentNode.parentNode.classList.add("t-kinetic");
    var text = str(p.text);
    // If the template text matches the narration, use real timings directly.
    S.kinetic(stage, { text: text, emphasis: p.emphasis });
  };

  T["bullet-list"] = function (stage, p, tl) {
    stage.classList.add("v-top");
    var h = header(stage, tl, p, { size: "lg" });
    var items = arr(p.items).slice(0, 7).map(function (it) { return typeof it === "string" ? { text: it } : it || {}; });
    var list = el("div.v-list", { parent: stage });
    if (items.length >= 5) list.style.setProperty("--item-fs", "calc(var(--u) * " + (items.length >= 6 ? 50 : 56) + ")");
    var nodes = items.map(function (it, i) {
      var row = el("div.v-item", { parent: list });
      var mark;
      if (it.icon) mark = S.badge(it.icon, row);
      else if (p.numbered === false) mark = S.badge("check", row);
      else mark = el("div.v-num", { parent: row, text: String(i + 1) });
      var tx = S.text(row, it.text || "", {});
      return { row: row, mark: mark, text: tx };
    });
    var avail = list.clientHeight;
    if (list.scrollHeight > avail + 1) nodes.forEach(function (n) { V.fit(n.text, { maxLines: 2, min: u(24) }); });
    nodes.forEach(function (n) { V.fit(n.text, { maxLines: 3, min: u(24) }); });
    var times = S.syncTimes(items.map(function (it) { return it.keyword || autoKey(it.text); }), { start: h ? 0.9 : 0.3 });
    nodes.forEach(function (n, i) {
      var at = times[i];
      if (cfg.kind === "whiteboard") {
        S.enter(tl, n.mark, at, { style: "pop" });
        S.enter(tl, n.text, at + 0.1, { style: "write" });
      } else {
        S.enter(tl, n.mark, at, { style: "pop" });
        S.enter(tl, n.text, at + 0.06, { style: cfg.kind === "neon" ? "glitch" : cfg.kind === "documentary" ? "blur" : "slide-left", distance: u(30) });
      }
      // dim previous item slightly when the next appears
      if (i > 0 && p.focus !== false) {
        tl.to(nodes[i - 1].row, { opacity: 0.55 }, { at: at, dur: 0.4, ease: "outQuad" });
      }
    });
    if (nodes.length > 1 && p.focus !== false) {
      // restore all at the end for a final overview
      var tEnd = Math.max(times[times.length - 1] + 1.4, V.duration - 1.2);
      if (tEnd < V.duration - 0.3) tl.to(nodes.slice(0, -1).map(function (n) { return n.row; }), { opacity: 1 }, { at: tEnd, dur: 0.5 });
    }
  };

  T["bar-chart"] = function (stage, p, tl) {
    stage.classList.add("v-top");
    var root = stage.parentNode.parentNode;
    var horizontal = p.orientation === "horizontal" || (p.orientation !== "vertical" && V.isPortrait);
    root.classList.add("t-bars");
    if (horizontal) root.classList.add("is-h");
    var h = header(stage, tl, p, { size: "lg" });
    var bars = arr(p.bars).slice(0, horizontal ? 8 : 10).map(function (b) { return b || {}; });
    var max = 0;
    bars.forEach(function (b) { max = Math.max(max, Math.abs(Number(b.value) || 0)); });
    max = max || 1;
    var hasHi = bars.some(function (b) { return b.highlight; });
    var fmt = p.valueFormat || {};
    var decimals = fmt.decimals != null ? fmt.decimals : bars.some(function (b) { return Number(b.value) % 1; }) ? 1 : 0;
    var chart = el("div.v-chart", { parent: stage });
    var times = S.syncTimes(bars.map(function (b) { return b.keyword || autoKey(b.label); }), { start: h ? 0.9 : 0.4, minGap: 0.15 });
    if (!horizontal) {
      chart.style.flexDirection = "column";
      chart.style.alignItems = "stretch";
      var row = el("div", { parent: chart, style: { flex: "1 1 auto", display: "flex", alignItems: "stretch", justifyContent: "center", gap: u(36) + "px", minHeight: "0" } });
      var axis = el("div", { parent: chart, style: { height: u(3) + "px", background: "var(--line)", flex: "none", transformOrigin: "0 50%" } });
      var labels = el("div", { parent: chart, style: { display: "flex", justifyContent: "center", gap: u(36) + "px", flex: "none", paddingTop: u(16) + "px" } });
      tl.fromTo(axis, { scaleX: 0 }, { scaleX: 1 }, { at: Math.max(0.1, times[0] - 0.5), dur: 0.7, ease: "inOutCubic" });
      bars.forEach(function (b, i) {
        var v = Number(b.value) || 0;
        var col = el("div.v-barcol", { parent: row });
        var area = el("div.v-bararea", { parent: col });
        var hi = hasHi ? !!b.highlight : v === max;
        var bar = el("div.v-bar", { parent: area, style: { height: (Math.abs(v) / max) * 100 + "%" } });
        if (hi) bar.classList.add("is-hi");
        else bar.style.setProperty("--bar", b.color || "var(--bar-muted, var(--muted))");
        var val = el("div.v-val", { parent: bar, text: S.formatValue(v, { prefix: fmt.prefix, suffix: fmt.suffix, decimals: decimals }) });
        if (hi) val.style.color = "var(--accent)";
        var lab = el("div.v-label", { parent: labels, text: plain(b.label), style: { flex: "1 1 0", maxWidth: u(220) + "px" } });
        if (cfg.kind === "whiteboard") { bar.style.border = u(4) + "px solid var(--ink)"; }
        var at = times[i];
        tl.fromTo(bar, { height: "0%" }, { height: (Math.abs(v) / max) * 100 + "%" }, { at: at, dur: 0.9, ease: "outCubic" });
        tl.fromTo(val, { text: 0, opacity: 0 }, { text: v, opacity: 1, decimals: decimals, prefix: fmt.prefix || "", suffix: fmt.suffix || "" }, { at: at, dur: 0.9, ease: "outCubic" });
        S.enter(tl, lab, at, { style: "fade" });
      });
      // fit labels
      V.fit(V.$$(".v-label", labels), { min: u(16) });
    } else {
      bars.forEach(function (b, i) {
        var v = Number(b.value) || 0;
        var hi = hasHi ? !!b.highlight : v === max;
        var r = el("div.v-hrow", { parent: chart });
        var head = el("div.v-hhead", { parent: r });
        var lab = el("div.v-label", { parent: head, text: plain(b.label) });
        var val = el("div.v-hval", { parent: head, text: S.formatValue(v, { prefix: fmt.prefix, suffix: fmt.suffix, decimals: decimals }) });
        if (hi) val.style.color = "var(--accent)";
        var track = el("div.v-track", { parent: r });
        var w = (Math.abs(v) / max) * 100;
        var bar = el("div.v-bar", { parent: track, style: { width: w + "%" } });
        if (hi) bar.classList.add("is-hi");
        else bar.style.setProperty("--bar", b.color || "var(--bar-muted, var(--muted))");
        var at = times[i];
        S.enter(tl, r, at - 0.1, { style: "fade", dur: 0.4 });
        tl.fromTo(bar, { width: "0%" }, { width: w + "%" }, { at: at, dur: 0.9, ease: "outCubic" });
        tl.fromTo(val, { text: 0 }, { text: v, decimals: decimals, prefix: fmt.prefix || "", suffix: fmt.suffix || "" }, { at: at, dur: 0.9, ease: "outCubic" });
      });
    }
    if (p.source) {
      var src = el("div.v-text.v-muted", { parent: stage, text: plain(p.source), style: { fontSize: "var(--fs-label)", alignSelf: "flex-start", flex: "none" } });
      S.enter(tl, src, times[times.length - 1] + 0.6 || 1.5, { style: "fade" });
    }
  };

  T["stat-counter"] = function (stage, p, tl) {
    stage.parentNode.parentNode.classList.add("t-stat");
    stage.style.gap = u(24) + "px";
    var halo = el("div", { parent: stage, style: { position: "absolute", left: "50%", top: "46%", width: Math.min(V.width, V.height) * 0.75 + "px", height: Math.min(V.width, V.height) * 0.75 + "px", marginLeft: -Math.min(V.width, V.height) * 0.375 + "px", marginTop: -Math.min(V.width, V.height) * 0.375 + "px", borderRadius: "50%", background: "radial-gradient(circle, var(--halo, rgba(47,107,255,0.14)) 0%, transparent 62%)", zIndex: 0 } });
    var k = p.kicker ? S.kicker(stage, p.kicker) : null;
    var value = Number(p.value) || 0;
    var decimals = p.decimals != null ? p.decimals : value % 1 ? 1 : 0;
    var num = el("div.v-statnum", { parent: stage, text: (p.prefix || "") + V.format(value, decimals, true) + (p.suffix || "") });
    num.style.width = "100%";
    num.style.position = "relative";
    V.fit(num, { min: u(60) });
    var label = el("div.v-statlabel", { parent: stage });
    label.appendChild(S.rich(p.label || ""));
    V.fit(label, { maxLines: 2, min: u(28) });
    var sub = p.sublabel ? S.text(stage, p.sublabel, { muted: true, center: true, cls: "v-statsub", maxLines: 2 }) : null;
    // The number is on screen almost immediately and lands (finishes counting) on its spoken keyword.
    var kwT = p.keyword ? V.find(p.keyword, 0) : null;
    var tNum = Math.min(0.35, V.duration * 0.1);
    var countDur = Math.max(1.2, Math.min(kwT != null ? kwT - tNum + 0.3 : 1.8, 3.2, V.duration * 0.6));
    if (k) S.enter(tl, k, Math.max(0.1, tNum - 0.3), { style: "fade" });
    tl.fromTo(halo, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1 }, { at: tNum, dur: 1.4, ease: "outCubic" });
    S.enter(tl, num, tNum, { style: cfg.kind === "neon" ? "glitch" : cfg.kind === "documentary" ? "blur" : cfg.kind === "whiteboard" ? "fade" : "zoom" });
    S.counter(tl, num, { from: p.from || 0, to: value, decimals: decimals, prefix: p.prefix, suffix: p.suffix, at: tNum, dur: countDur });
    var tLab = Math.max(tNum + 0.5, Math.min(tNum + countDur - 0.2, (V.find(autoKey(p.label) || "", 0) || 0) - 0.15));
    S.enter(tl, label, tLab, { style: cfg.kind === "whiteboard" ? "write" : "rise" });
    var tSub = sub ? Math.max(tLab + 0.5, (V.find(autoKey(p.sublabel) || "", tLab) || 0) - 0.15) : 0;
    if (sub) S.enter(tl, sub, tSub, { style: "fade" });
    if (cfg.kind === "whiteboard") {
      var rg = document.createRange();
      rg.selectNodeContents(num);
      var tr = rg.getBoundingClientRect(), sr = stage.getBoundingClientRect();
      var rnd = V.makeRand(7);
      S.drawPath(tl, stage, roughEllipsePath(tr.left - sr.left + tr.width / 2, tr.top - sr.top + tr.height / 2, tr.width / 2 + u(46), tr.height * 0.42, rnd), tNum + countDur, { color: "var(--accent-2)", width: u(6), dur: 0.8 });
    }
  };

  T.quote = function (stage, p, tl) {
    stage.parentNode.parentNode.classList.add("t-quote");
    var wrap = el("div.v-col", { parent: stage, style: { alignItems: V.isPortrait ? "flex-start" : "center", gap: u(36) + "px", width: "100%" } });
    var qm = el("svg.v-qmark", { parent: wrap, viewBox: "0 0 48 48", fill: "currentColor" });
    qm.innerHTML = '<path d="M20 10C11.7 12.3 6 18.8 6 27.5V38h14V24h-7c.4-4.9 3.4-8.4 8.3-9.8zM42 10c-8.3 2.3-14 8.8-14 17.5V38h14V24h-7c.4-4.9 3.4-8.4 8.3-9.8z"/>';
    var q = el("blockquote.v-quote", { parent: wrap, style: { textAlign: V.isPortrait ? "left" : "center" } });
    q.appendChild(S.rich(p.quote || ""));
    V.fit(q, { maxLines: V.isPortrait ? 8 : 5, min: u(30) });
    var by = null;
    if (p.author) {
      by = el("div.v-col", { parent: wrap, style: { gap: u(6) + "px", alignItems: V.isPortrait ? "flex-start" : "center" } });
      el("div.v-author", { parent: by, text: "— " + plain(p.author) });
      if (p.role) el("div.v-role", { parent: by, text: plain(p.role) });
    }
    S.enter(tl, qm, 0.15, { style: cfg.kind === "whiteboard" ? "pop" : "drop" });
    var spans = S.splitWords(q);
    var times = S.speakWords(tl, spans, { start: 0.45 });
    if (by) S.enter(tl, by, Math.min(V.duration - 0.8, times[times.length - 1] + 0.35), { style: "fade" });
    var em = q.querySelector(".v-em");
    if (em) S.highlight(tl, em, (times[spans.indexOf(em.querySelector(".v-word"))] || 1) + 0.25, { container: stage });
  };

  T.timeline = function (stage, p, tl) {
    stage.classList.add("v-top");
    stage.parentNode.parentNode.classList.add("t-timeline");
    var h = header(stage, tl, p, { size: "lg" });
    var evs = arr(p.events).slice(0, 7).map(function (e) { return e || {}; });
    var n = Math.max(1, evs.length);
    var box = el("div.v-tl", { parent: stage });
    var times = S.syncTimes(evs.map(function (e) { return e.keyword || autoKey(e.date) || autoKey(e.label); }), { start: h ? 0.9 : 0.4, minGap: 0.3 });
    var vertical = !V.isLandscape;
    var line, prog, pos = [];
    if (!vertical) {
      var pad = 100 / n / 2;
      line = el("div.v-tl-line", { parent: box, style: { left: pad + "%", right: pad + "%", top: "50%", height: u(6) + "px", marginTop: -u(3) + "px" } });
      prog = el("div.v-tl-prog", { parent: box, style: { left: pad + "%", width: "0%", top: "50%", height: u(6) + "px", marginTop: -u(3) + "px" } });
      evs.forEach(function (e, i) {
        var x = pad + (i * (100 - 2 * pad)) / Math.max(1, n - 1);
        if (n === 1) x = 50;
        pos.push(x);
        var ev = el("div.v-ev", { parent: box, style: { left: x + "%", top: "0", bottom: "0", width: 100 / n - 1.5 + "%", transform: "translateX(-50%)", display: "grid", gridTemplateRows: "1fr auto 1fr", gap: u(22) + "px", justifyItems: "center" } });
        var date = el("div.v-date", { parent: ev, text: plain(e.date), style: { alignSelf: "end" } });
        var dot = el("div.v-dot", { parent: ev });
        var lab = el("div.v-evlabel", { parent: ev, text: plain(e.label), style: { alignSelf: "start" } });
        V.fit(date, { min: u(22) });
        V.fit(lab, { maxLines: 3, min: u(18) });
        e._n = { ev: ev, date: date, dot: dot, lab: lab };
      });
      tl.fromTo(line, { scaleX: 0 }, { scaleX: 1 }, { at: Math.max(0.1, times[0] - 0.6), dur: 0.8, ease: "inOutCubic" });
      line.style.transformOrigin = "0 50%";
    } else {
      var lx = u(22);
      line = el("div.v-tl-line", { parent: box, style: { left: lx - u(3) + "px", width: u(6) + "px", top: "4%", bottom: "4%" } });
      prog = el("div.v-tl-prog", { parent: box, style: { left: lx - u(3) + "px", width: u(6) + "px", top: "4%", height: "0%" } });
      evs.forEach(function (e, i) {
        var y = 4 + ((i + 0.5) * 92) / n;
        pos.push(y);
        var ev = el("div.v-ev", { parent: box, style: { left: "0", right: "0", top: y + "%", transform: "translateY(-50%)", flexDirection: "row", alignItems: "center", textAlign: "left", gap: u(34) + "px" } });
        var dot = el("div.v-dot", { parent: ev, style: { marginLeft: lx - u(17) + "px" } });
        var col = el("div", { parent: ev, style: { display: "flex", flexDirection: "column", gap: u(4) + "px", minWidth: "0", flex: "1 1 auto" } });
        var date = el("div.v-date", { parent: col, text: plain(e.date) });
        var lab = el("div.v-evlabel", { parent: col, text: plain(e.label) });
        V.fit(lab, { maxLines: 2, min: u(18) });
        e._n = { ev: ev, date: date, dot: dot, lab: lab };
      });
      line.style.transformOrigin = "50% 0";
      tl.fromTo(line, { scaleY: 0 }, { scaleY: 1 }, { at: Math.max(0.1, times[0] - 0.6), dur: 0.8, ease: "inOutCubic" });
    }
    evs.forEach(function (e, i) {
      var at = times[i];
      var nn = e._n;
      tl.fromTo(nn.dot, { scale: 0 }, { scale: 1 }, { at: at, dur: 0.5, ease: "outBack" });
      S.enter(tl, nn.date, at + 0.05, { style: cfg.kind === "whiteboard" ? "write" : cfg.kind === "neon" ? "glitch" : "rise", distance: u(24) });
      S.enter(tl, nn.lab, at + 0.15, { style: "fade" });
      if (i > 0) {
        if (!vertical) tl.to(prog, { width: pos[i] - pos[0] + "%" }, { at: at - 0.45, dur: 0.5, ease: "inOutCubic" });
        else tl.to(prog, { height: pos[i] - 4 + "%" }, { at: at - 0.45, dur: 0.5, ease: "inOutCubic" });
      } else if (vertical) tl.to(prog, { height: pos[0] - 4 + "%" }, { at: at - 0.3, dur: 0.3 });
      tl.to(nn.dot, { backgroundColor: S.css("--accent") || "#2F6BFF" }, { at: at + 0.3, dur: 0.3 });
    });
  };

  T.comparison = function (stage, p, tl) {
    stage.parentNode.parentNode.classList.add("t-compare");
    var h = header(stage, tl, p, { size: "lg", center: !V.isPortrait });
    var cmp = el("div.v-cmp", { parent: stage });
    var sides = [p.left || {}, p.right || {}];
    var keys = [];
    sides.forEach(function (s) {
      keys.push(s.keyword || autoKey(s.title));
      arr(s.points).slice(0, 5).forEach(function (pt) { keys.push((pt && pt.keyword) || autoKey(typeof pt === "string" ? pt : pt && pt.text)); });
    });
    var times = S.syncTimes(keys, { start: h ? 0.8 : 0.3, minGap: 0.2 });
    var ti = 0;
    sides.forEach(function (s, si) {
      var card = S.card(cmp, { cls: "v-side" + (si ? " is-right" : " is-left") });
      var head = el("div.v-side-head", { parent: card });
      if (s.icon) S.badge(s.icon, head);
      var st = el("div.v-side-title", { parent: head });
      st.appendChild(S.rich(s.title || (si ? "After" : "Before")));
      V.fit(st, { maxLines: 2, min: u(24) });
      var pts = arr(s.points).slice(0, 5).map(function (pt) {
        var txt = typeof pt === "string" ? pt : (pt && pt.text) || "";
        var row = el("div.v-pt", { parent: card });
        S.icon(si === 0 && p.leftNegative !== false && p.style !== "neutral" ? "x" : "check", { parent: row, size: u(40), color: si === 0 && p.leftNegative !== false && p.style !== "neutral" ? "var(--neg, #E5484D)" : "var(--pos, #16B88A)" });
        var tx = el("span", { parent: row });
        tx.appendChild(S.rich(txt));
        return row;
      });
      var tCard = times[ti++];
      S.cardIn(tl, card, tCard, { style: cfg.kind === "neon" ? "glitch" : si ? "slide-right" : "slide-left" });
      pts.forEach(function (row) { S.enter(tl, row, Math.max(tCard + 0.3, times[ti++]), { style: "rise", distance: u(20) }); });
      if (si === 1 && p.vs !== false && p.vs !== "") {
        var vs = el("div.v-vs", { parent: cmp, text: p.vs || "VS" });
        tl.fromTo(vs, { scale: 0, rotate: -40 }, { scale: 1, rotate: 0 }, { at: Math.max(0.2, tCard - 0.25), dur: 0.6, ease: "outBack" });
      }
    });
    // shrink texts if overflowing
    V.$$(".v-side", cmp).forEach(function (c) {
      if (c.scrollHeight > c.clientHeight + 1) V.$$(".v-pt", c).forEach(function (r) { r.style.fontSize = "calc(var(--fs-body) * " + Math.max(0.6, c.clientHeight / c.scrollHeight).toFixed(3) + ")"; });
    });
  };

  T["icon-grid"] = function (stage, p, tl) {
    stage.parentNode.parentNode.classList.add("t-grid");
    var h = header(stage, tl, p, { size: "lg", center: true });
    var items = arr(p.items).slice(0, 9).map(function (it) { return it || {}; });
    var n = items.length || 1;
    var cols = V.isLandscape ? (n <= 4 ? n : n <= 6 ? 3 : 4) : V.isSquare ? (n <= 3 ? n : n === 4 ? 2 : 3) : n <= 3 ? 1 : 2;
    if (!V.isLandscape && n <= 3) cols = V.isSquare ? n : 1;
    var grid = el("div.v-grid", { parent: stage, style: { gridTemplateColumns: "repeat(" + cols + ", minmax(0, 1fr))" } });
    var times = S.syncTimes(items.map(function (it) { return it.keyword || autoKey(it.label); }), { start: h ? 0.8 : 0.3, minGap: 0.12 });
    items.forEach(function (it, i) {
      var cell = S.card(grid, { cls: "v-cell" });
      if (cols === 1) { cell.style.flexDirection = "row"; cell.style.justifyContent = "flex-start"; cell.style.textAlign = "left"; }
      var b = S.badge(it.icon || "sparkles", cell, { size: u(72) });
      b.style.color = cfg.kind === "minimal" || cfg.kind === "whiteboard" ? S.color(i) : "";
      if (cfg.kind === "minimal") b.style.background = "color-mix(in srgb, " + S.color(i) + " 13%, transparent)";
      var tx = S.text(cell, it.label || "", { maxLines: 2 });
      if (it.sublabel) { var s2 = S.text(cell, it.sublabel, { muted: true, maxLines: 2 }); s2.style.fontSize = "var(--fs-label)"; s2.style.fontWeight = "500"; }
      S.cardIn(tl, cell, times[i], { style: "pop" });
    });
  };

  var KW = /\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|class|extends|new|this|import|from|export|default|async|await|try|catch|finally|throw|typeof|instanceof|in|of|def|lambda|elif|pass|yield|with|as|and|or|not|is|None|True|False|true|false|null|undefined|print|fn|pub|struct|impl|use|mut|match|SELECT|FROM|WHERE|INSERT|UPDATE|JOIN|GROUP|BY|ORDER|interface|type|enum|public|private|static|void|int|string|bool)\b/;
  function highlightCode(line) {
    var frag = document.createDocumentFragment();
    var re = /(\/\/.*$|#.*$|--.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)(?=\s*\()|([A-Za-z_$][\w$]*)/g;
    var last = 0, m;
    while ((m = re.exec(line))) {
      if (m.index > last) frag.appendChild(document.createTextNode(line.slice(last, m.index)));
      var cls = m[1] ? "tk-c" : m[2] ? "tk-s" : m[3] ? "tk-n" : m[4] ? (KW.test(m[4]) ? "tk-k" : "tk-f") : KW.test(m[5]) && m[5].match(KW)[0] === m[5] ? "tk-k" : null;
      if (cls) frag.appendChild(el("span." + cls, { text: m[0] }));
      else frag.appendChild(document.createTextNode(m[0]));
      last = m.index + m[0].length;
      if (m[1]) break;
    }
    if (last < line.length) frag.appendChild(document.createTextNode(line.slice(last)));
    return frag;
  }
  S.highlightCode = highlightCode;

  T["code-block"] = function (stage, p, tl) {
    stage.parentNode.parentNode.classList.add("t-code");
    var h = header(stage, tl, p, { size: "md", center: true });
    var lines = str(p.code).replace(/\t/g, "  ").replace(/\s+$/, "").split("\n").slice(0, 24);
    var ed = el("div.v-editor", { parent: stage });
    var chrome = el("div.v-chrome", { parent: ed });
    ["#FF5F57", "#FEBC2E", "#28C840"].forEach(function (c) { el("i", { parent: chrome, style: { background: c } }); });
    el("span", { parent: chrome, text: p.filename || (p.language ? "main." + ({ javascript: "js", typescript: "ts", python: "py", rust: "rs", go: "go", sql: "sql", bash: "sh", html: "html", css: "css", java: "java" }[str(p.language).toLowerCase()] || str(p.language).toLowerCase()) : "code") });
    var pre = el("pre", { parent: ed, style: { flex: "1 1 auto", minHeight: "0" } });
    var hi = {};
    arr(p.highlightLines).forEach(function (n) { hi[n] = 1; });
    var rows = lines.map(function (ln, i) {
      var row = el("span.v-cl", { parent: pre });
      if (hi[i + 1]) row.classList.add("is-hi");
      el("span.v-ln", { parent: row, text: String(i + 1) });
      var typed = el("span", { parent: row, style: { display: "inline-block", overflow: "hidden", verticalAlign: "top", whiteSpace: "pre" } });
      typed.appendChild(highlightCode(ln));
      var cur = el("span.v-cursor", { parent: row });
      cur.style.display = "none";
      return { row: row, typed: typed, cur: cur, len: ln.length };
    });
    V.fit(pre, { min: u(14) });
    var t0 = h ? 0.9 : 0.4;
    S.enter(tl, ed, t0 - 0.3, { style: cfg.kind === "neon" ? "glitch" : "rise" });
    var total = 0;
    rows.forEach(function (r) { total += Math.max(4, r.len); });
    var span = Math.max(0.6, Math.min(V.duration * 0.72 - t0, total * 0.035));
    var t = t0;
    var marks = [];
    rows.forEach(function (r) {
      var d = (Math.max(4, r.len) / total) * span;
      var n = Math.max(1, r.len);
      tl.fromTo(r.typed, { width: "0ch" }, { width: r.len + "ch" }, { at: t, dur: Math.max(0.01, d * 0.9), ease: function (x) { return Math.floor(x * n) / n; } });
      marks.push({ a: t, b: t + d });
      t += d;
    });
    var tDone = t;
    rows.forEach(function (r, i) {
      if (r.row.classList.contains("is-hi")) {
        var kwT = p.highlightKeyword ? V.find(p.highlightKeyword, 0) : null;
        tl.fromTo(r.row, { "--hi": 0 }, { "--hi": 1 }, { at: Math.max(tDone + 0.2, kwT != null ? kwT - 0.1 : tDone + 0.4), dur: 0.4 });
      }
    });
    V.onFrame(function (tt) {
      var active = rows.length - 1;
      for (var i = 0; i < marks.length; i++) if (tt < marks[i].b) { active = i; break; }
      for (var j = 0; j < rows.length; j++) {
        var show = j === active && tt >= t0 - 0.3;
        var blinkOn = tt < tDone ? true : Math.floor(tt * 2.2) % 2 === 0;
        rows[j].cur.style.display = show && blinkOn ? "inline-block" : "none";
      }
    });
  };

  T["section-break"] = function (stage, p, tl) {
    var root = stage.parentNode.parentNode;
    root.classList.add("t-section");
    var wrap = el("div.v-header.v-center", { parent: stage, style: { gap: u(20) + "px" } });
    var num = p.number != null && p.number !== "" ? el("div.v-secnum", { parent: wrap, text: typeof p.number === "number" ? (p.number < 10 ? "0" : "") + p.number : plain(p.number) }) : null;
    var k = p.kicker ? S.kicker(wrap, p.kicker) : null;
    var title = S.title(wrap, p.title || "", { size: "xl", center: true, maxLines: 3 });
    var sub = p.subtitle ? S.text(wrap, p.subtitle, { muted: true, center: true, maxLines: 2 }) : null;
    var wipe = el("div.v-wipe", { parent: root });
    tl.fromTo(wipe, { xPercent: -101 }, { xPercent: 0 }, { at: 0, dur: 0.45, ease: "inOutCubic" });
    tl.to(wipe, { xPercent: 101 }, { at: 0.5, dur: 0.55, ease: "inOutCubic" });
    var t0 = 0.6;
    if (num) S.enter(tl, num, t0, { style: cfg.kind === "neon" ? "glitch" : cfg.kind === "whiteboard" ? "write" : "zoom" });
    if (k) S.enter(tl, k, t0 + 0.2, { style: "fade" });
    S.reveal(tl, title, t0 + 0.3);
    if (sub) S.enter(tl, sub, t0 + 0.9, { style: "fade" });
  };

  T.diagram = function (stage, p, tl) {
    stage.classList.add("v-top");
    stage.parentNode.parentNode.classList.add("t-diagram");
    var h = header(stage, tl, p, { size: "lg", center: true });
    var nodes = arr(p.nodes).slice(0, 8).map(function (n, i) { n = n || {}; return { id: str(n.id || "n" + i), label: n.label || n.id || "", icon: n.icon, keyword: n.keyword }; });
    var n = nodes.length;
    var layout = p.layout || "flow";
    var box = el("div.v-dg", { parent: stage });
    var W = box.clientWidth || V.width * 0.8, H = box.clientHeight || V.height * 0.6;
    var pos = [];
    if (layout === "cycle" || layout === "hub") {
      var ring = layout === "hub" ? nodes.slice(1) : nodes;
      var r = Math.min(W, H) * 0.36;
      var rx = Math.min(W * 0.4, r * (V.isLandscape ? 1.5 : 1)), ry = V.isPortrait ? Math.min(H * 0.36, W * 0.62) : r;
      if (layout === "hub") pos[0] = { x: W / 2, y: H / 2 };
      ring.forEach(function (nd, i) {
        var a = -Math.PI / 2 + (i / ring.length) * Math.PI * 2;
        pos[layout === "hub" ? i + 1 : i] = { x: W / 2 + Math.cos(a) * rx, y: H / 2 + Math.sin(a) * ry };
      });
    } else {
      var horiz = V.isLandscape || (V.isSquare && n <= 3);
      nodes.forEach(function (nd, i) {
        pos[i] = horiz ? { x: (W * (i + 0.5)) / n, y: H / 2 } : { x: W / 2, y: (H * (i + 0.5)) / n };
      });
    }
    var maxW = layout === "flow" && V.isLandscape ? W / n - u(70) : Math.min(u(340), W * 0.42);
    var els = nodes.map(function (nd, i) {
      var c = S.card(box, { cls: "v-node" });
      c.style.left = pos[i].x + "px";
      c.style.top = pos[i].y + "px";
      c.style.maxWidth = maxW + "px";
      if (nd.icon) S.badge(nd.icon, c, { size: u(54) });
      var tx = S.text(c, nd.label, { maxLines: 2 });
      tx.style.maxWidth = maxW - u(60) + "px";
      V.fit(tx, { maxLines: 2, min: u(18) });
      if (layout === "hub" && i === 0) { c.classList.add("is-hub"); c.style.background = "var(--accent)"; c.style.color = "var(--on-accent, #fff)"; tx.style.color = "inherit"; }
      return c;
    });
    var times = S.syncTimes(nodes.map(function (nd) { return nd.keyword || autoKey(nd.label); }), { start: h ? 0.8 : 0.3, minGap: 0.35 });
    var edges = arr(p.edges);
    var idIdx = {};
    nodes.forEach(function (nd, i) { idIdx[nd.id] = i; });
    if (!edges.length) {
      if (layout === "hub") for (var e = 1; e < n; e++) edges.push({ from: nodes[0].id, to: nodes[e].id });
      else for (e = 0; e < n - 1; e++) edges.push({ from: nodes[e].id, to: nodes[e + 1].id });
      if (layout === "cycle" && n > 2) edges.push({ from: nodes[n - 1].id, to: nodes[0].id });
    }
    var svg = el("svg.v-edges", { parent: box, viewBox: "0 0 " + W + " " + H });
    els.forEach(function (c, i) { S.cardIn(tl, c, times[i], { style: "pop" }); });
    edges.forEach(function (ed) {
      var a = idIdx[str(ed.from)], b = idIdx[str(ed.to)];
      if (a == null || b == null || a === b) return;
      var ra = { w: els[a].offsetWidth, h: els[a].offsetHeight }, rb = { w: els[b].offsetWidth, h: els[b].offsetHeight };
      var A = pos[a], B = pos[b];
      var dx = B.x - A.x, dy = B.y - A.y;
      var len = Math.sqrt(dx * dx + dy * dy) || 1;
      function trim(r) {
        var tx = Math.abs(dx) > 0.01 ? r.w / 2 / Math.abs(dx) : Infinity;
        var ty = Math.abs(dy) > 0.01 ? r.h / 2 / Math.abs(dy) : Infinity;
        return Math.min(tx, ty) * len + u(16);
      }
      var sa = trim(ra), sb = trim(rb);
      if (sa + sb >= len - u(10)) return;
      var x1 = A.x + (dx / len) * sa, y1 = A.y + (dy / len) * sa, x2 = B.x - (dx / len) * sb, y2 = B.y - (dy / len) * sb;
      var tA = times[a], tB = times[b];
      var at = tB > tA ? Math.max(tA + 0.3, tB - 0.5) : Math.max(tA, tB) + 0.4;
      S.arrow(tl, svg, x1, y1, x2, y2, at, { dur: 0.5, curve: layout === "cycle" ? len * 0.12 : 0 });
      if (ed.label) {
        var lab = el("div.v-elabel", { parent: box, text: plain(ed.label), style: { left: (x1 + x2) / 2 + "px", top: (y1 + y2) / 2 + "px" } });
        S.enter(tl, lab, at + 0.3, { style: "fade" });
      }
    });
  };

  T["line-chart"] = function (stage, p, tl) {
    stage.classList.add("v-top");
    stage.parentNode.parentNode.classList.add("t-line");
    var h = header(stage, tl, p, { size: "lg" });
    var pts = arr(p.points).slice(0, 40).map(function (q) { return { x: str(q && q.x), y: Number(q && q.y) || 0 }; });
    if (pts.length < 2) pts = [{ x: "", y: 0 }, { x: "", y: 1 }];
    var fmt = p.valueFormat || {};
    var box = el("div.v-lc", { parent: stage, style: { marginLeft: u(130) + "px", width: "calc(100% - " + u(130) + "px)", marginBottom: u(60) + "px" } });
    var W = box.clientWidth || 800, H = box.clientHeight || 400;
    var minY = Math.min.apply(null, pts.map(function (q) { return q.y; })), maxY = Math.max.apply(null, pts.map(function (q) { return q.y; }));
    if (p.zeroBased !== false && minY > 0) minY = 0;
    if (maxY === minY) maxY = minY + 1;
    var padTop = (maxY - minY) * 0.12;
    maxY += padTop;
    function X(i) { return (i / (pts.length - 1)) * W; }
    function Y(v) { return H - ((v - minY) / (maxY - minY)) * H; }
    var svg = el("svg", { parent: box, viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "none" });
    var defs = el("defs", { parent: svg });
    var gid = "lg" + V.seed;
    var grad = el("linearGradient", { parent: defs, id: gid, x1: "0", y1: "0", x2: "0", y2: "1" });
    el("stop", { parent: grad, offset: "0%", "stop-color": "var(--accent)", "stop-opacity": "0.32" });
    el("stop", { parent: grad, offset: "100%", "stop-color": "var(--accent)", "stop-opacity": "0" });
    for (var g = 0; g <= 4; g++) {
      var gy = (g / 4) * H;
      el("line.v-lc-grid", { parent: svg, x1: 0, x2: W, y1: gy, y2: gy });
      var val = maxY - (g / 4) * (maxY - minY);
      el("div.v-lc-y", { parent: box, text: S.formatValue(val, { prefix: fmt.prefix, suffix: fmt.suffix, decimals: fmt.decimals != null ? fmt.decimals : Math.abs(maxY - minY) < 10 ? 1 : 0 }), style: { top: gy + "px" } });
    }
    var d = "";
    pts.forEach(function (q, i) { d += (i ? " L" : "M") + X(i).toFixed(1) + " " + Y(q.y).toFixed(1); });
    var area = el("path.v-lc-area", { parent: svg, d: d + " L" + W + " " + H + " L0 " + H + " Z", fill: "url(#" + gid + ")" });
    var line = el("path.v-lc-line", { parent: svg, d: d });
    var every = Math.ceil(pts.length / (V.isLandscape ? 10 : 5));
    pts.forEach(function (q, i) {
      if (q.x && (i % every === 0 || i === pts.length - 1)) el("div.v-lc-x", { parent: box, text: q.x, style: { left: X(i) + "px", top: H + u(14) + "px" } });
    });
    var hiIdx = p.highlight && p.highlight.index != null ? Math.max(0, Math.min(pts.length - 1, p.highlight.index)) : pts.length - 1;
    var t0 = h ? 0.9 : 0.4;
    var kwT = p.highlight && p.highlight.keyword ? V.find(p.highlight.keyword, t0) : null;
    var t1 = Math.min(V.duration * 0.8, Math.max(t0 + 1.2, kwT != null ? kwT : t0 + Math.min(3, V.duration * 0.45)));
    tl.fromTo(line, { draw: 0 }, { draw: 1 }, { at: t0, dur: t1 - t0, ease: "inOutSine" });
    tl.fromTo(area, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" }, { at: t0, dur: t1 - t0, ease: "inOutSine" });
    var dot = el("div.v-lc-dot", { parent: box, style: { left: X(hiIdx) + "px", top: Y(pts[hiIdx].y) + "px" } });
    var tHi = t0 + (t1 - t0) * (hiIdx / (pts.length - 1));
    tl.fromTo(dot, { scale: 0 }, { scale: 1 }, { at: tHi, dur: 0.45, ease: "outBack" });
    var call = el("div.v-lc-call", { parent: box, text: (p.highlight && p.highlight.label) || S.formatValue(pts[hiIdx].y, fmt), style: { left: Math.max(u(80), Math.min(W - u(80), X(hiIdx))) + "px", top: Y(pts[hiIdx].y) + "px" } });
    S.enter(tl, call, tHi + 0.15, { style: "pop" });
  };

  // ───────────────────────── render entry points ─────────────────────────
  var TPL_CLASS = { "title-card": "t-title", "kinetic-text": "t-kinetic", "bullet-list": "t-bullets", "bar-chart": "t-bars", "stat-counter": "t-stat", quote: "t-quote", timeline: "t-timeline", comparison: "t-compare", "icon-grid": "t-grid", "code-block": "t-code", "section-break": "t-section", diagram: "t-diagram", "line-chart": "t-line" };
  S.templateIds = Object.keys(T);

  /** Render a template into root. Throws on unknown id (caller falls back). */
  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = root || V.root();
    var stage = S.stage(root, { cls: TPL_CLASS[id] });
    var tl = V.timeline();
    fn(stage, props || {}, tl, root);
    S.guard(stage);
    return stage;
  };

  /** Fallback: kinetic captions of the narration. Never throws. */
  S.fallback = function (root, narration) {
    try {
      root = root || V.root();
      root.innerHTML = "";
      root.className = "";
      root.removeAttribute("style");
      var stage = S.stage(root, { cls: "t-kinetic" });
      var toks = V.words && V.words.length ? V.words : null;
      S.kinetic(stage, { tokens: toks, text: toks ? null : narration || V.narration || "", progress: true });
      return stage;
    } catch (e) {
      V.error("fallback: " + (e && e.message));
      try {
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "8%", fontSize: u(64) + "px", fontWeight: "800", textAlign: "center", color: "var(--fg, #111)", background: "var(--bg, #fff)", fontFamily: "Inter, system-ui, sans-serif" } });
        t.textContent = str(narration || V.narration).split(/\s+/).slice(0, 12).join(" ");
      } catch (e2) {}
    }
  };
})();

;
/* Isometric World engine for Scene — 2.5D isometric dioramas.
 * One <canvas> per world, redrawn from scratch on every seek (pure function of t).
 * Exposes S.iso (see docs.md) and replaces S.render / S.fallback.
 */
(function () {
  "use strict";
  var V = window.V;
  var S = window.SceneStyle;
  if (!V || !S) return;
  var el = V.el;

  S.init({ id: "isometric", kind: "minimal", enter: "rise", drift: 0, series: ["#FF6F59", "#3E7BFA", "#22B8A6", "#FFB020", "#8C6CF2", "#F2588A"] });

  var ISO = (S.iso = {});
  var HS = 0.866; // screen height of one world unit of z, relative to zoom (2:1 dimetric)
  var FONT = '"Nunito","Poppins","Segoe UI Rounded",Inter,"Noto Sans","Segoe UI",system-ui,sans-serif';
  ISO.font = FONT;

  // ───────────────────────── small utils ─────────────────────────
  function u(n) { return n * V.unit; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function num(v, d) { var n = typeof v === "number" ? v : parseFloat(v); return isFinite(n) ? n : d; }
  function h01(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function frac(x) { return x - Math.floor(x); }
  function ez(e) { return typeof e === "function" ? e : (V.ease[e] || V.ease.outCubic); }
  function prog(t, a, dur, e) {
    if (!(dur > 0)) return t >= a ? 1 : 0;
    var p = clamp((t - a) / dur, 0, 1);
    return e ? ez(e)(p) : p;
  }
  function lastT() { return Math.max(0.05, V.duration - 0.05); }
  function clampT(t) { return clamp(num(t, 0), 0, Math.max(0.05, V.duration - 0.4)); }
  ISO.clampT = clampT;
  ISO.prog = prog;
  ISO.hash = h01;
  function plain(s) { return str(s).replace(/\*([^*]+)\*/g, "$1"); }

  // ───────────────────────── colour ─────────────────────────
  var RGBC = {};
  function rgb(c) {
    var r = RGBC[c];
    if (r) return r;
    var h = str(c).trim(), m;
    if (h[0] === "#") {
      h = h.slice(1);
      if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
      var n = parseInt(h.slice(0, 6), 16);
      r = isNaN(n) ? [140, 140, 150] : [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    } else if ((m = /rgba?\(([^)]+)\)/.exec(h))) {
      var p = m[1].split(",").map(parseFloat);
      r = [p[0] | 0, p[1] | 0, p[2] | 0];
    } else r = [140, 140, 150];
    RGBC[c] = r;
    return r;
  }
  function hex(r) {
    return "#" + ((1 << 24) | (clamp(Math.round(r[0]), 0, 255) << 16) | (clamp(Math.round(r[1]), 0, 255) << 8) | clamp(Math.round(r[2]), 0, 255)).toString(16).slice(1);
  }
  var MIXC = {};
  function mix(a, b, p) {
    var k = a + b + p;
    var s = MIXC[k];
    if (s) return s;
    var A = rgb(a), B = rgb(b);
    s = hex([A[0] + (B[0] - A[0]) * p, A[1] + (B[1] - A[1]) * p, A[2] + (B[2] - A[2]) * p]);
    MIXC[k] = s;
    return s;
  }
  function rgba(c, a) { var r = rgb(c); return "rgba(" + r[0] + "," + r[1] + "," + r[2] + "," + a + ")"; }
  var curInk = "#2E3566", curLight = "#FFFDF4";
  function shade(c, f) {
    var q = Math.round(f * 40) / 40;
    if (q === 1) return c;
    return q > 1 ? mix(c, curLight, Math.min(1, (q - 1) * 1.7)) : mix(c, curInk, Math.min(1, (1 - q) * 1.05));
  }
  ISO.mix = mix;
  ISO.shade = shade;
  ISO.rgba = rgba;

  // ───────────────────────── palettes ─────────────────────────
  var PALS = {
    day: {
      name: "day", sky1: "#F4F7F1", sky2: "#D3E7EE", dots: "rgba(52,84,128,0.09)",
      grass: "#A9DA8E", grass2: "#A0D485", park: "#8FCB7A", lip: "#86C26C", soil: "#D7A06B", rock: "#A9836B",
      road: "#6E7591", curb: "#E6E8EF", mark: "#FFF6E0", water: "#71C9EC", water2: "#55B4E2", foam: "#E3F7FD",
      sand: "#EEDCAA", field: "#EBC867", field2: "#D3AE4D", crop: "#8DC56B", plaza: "#F1E9DA", plaza2: "#E4D8C2", dirt: "#D9B48A",
      ink: "#283050", inkSoft: "#5B6488", shadow: "rgba(40,48,104,0.17)", shadeInk: "#2E3566", light: "#FFFDF4",
      card: "#FFFFFF", glass: "#92D3F5", win: "#A3D9F5", winLit: "#FFE28A", dark: "#3A4166", metal: "#C9CFDD",
      walls: ["#F8F0E4", "#FFFFFF", "#FFC4A0", "#A7CFFF", "#ABE2CF", "#FFDD92", "#D2C4FF", "#F7AFAF"],
      roofs: ["#EE6A5B", "#5160A0", "#35A889", "#F2A541", "#7C66D9"],
      accents: ["#FF6F59", "#3E7BFA", "#1FB5A3", "#FFAE1F", "#8C6CF2", "#F2588A"],
      skin: ["#F2C6A0", "#D9A27A", "#A86E4C", "#F7D9BF", "#8A583B"],
      shirts: ["#FF6F59", "#3E7BFA", "#1FB5A3", "#FFAE1F", "#8C6CF2", "#F2588A", "#2B3150", "#FFFFFF"],
      cars: ["#FF6F59", "#3E7BFA", "#FFC233", "#FFFFFF", "#1FB5A3", "#8C6CF2"],
      night: false, cloud: "#FFFFFF",
    },
    dusk: {
      name: "dusk", sky1: "#FFE7CF", sky2: "#E9B9C9", dots: "rgba(120,60,90,0.10)",
      grass: "#B5CF86", grass2: "#AAC77C", park: "#96BB72", lip: "#8DB067", soil: "#D1906A", rock: "#9C7064",
      road: "#6F6585", curb: "#EADCE0", mark: "#FFF0D6", water: "#8BB8E6", water2: "#6FA0D6", foam: "#F4E5F2",
      sand: "#F0D3A6", field: "#EDBE6A", field2: "#D59F4F", crop: "#A3BF6B", plaza: "#F3E2D6", plaza2: "#E6D0C0", dirt: "#D7A784",
      ink: "#3A2849", inkSoft: "#715A7E", shadow: "rgba(90,40,90,0.18)", shadeInk: "#4A2C5E", light: "#FFF6E8",
      card: "#FFFBF5", glass: "#B4C9F2", win: "#C5D2F2", winLit: "#FFD27A", dark: "#4A3B5E", metal: "#D4C8D6",
      walls: ["#FFF1E2", "#FFFFFF", "#FFB89A", "#BFC8FF", "#C5E3C9", "#FFD48C", "#E4C2F2", "#F7A8B0"],
      roofs: ["#E2595F", "#5B4E9A", "#3B9E8C", "#EE9A3F", "#9A5FC9"],
      accents: ["#F25C54", "#5B6CF0", "#18A999", "#F7A21B", "#A15CE0", "#E8508A"],
      skin: ["#F2C6A0", "#D9A27A", "#A86E4C", "#F7D9BF", "#8A583B"],
      shirts: ["#F25C54", "#5B6CF0", "#18A999", "#F7A21B", "#A15CE0", "#3A2849", "#FFFFFF"],
      cars: ["#F25C54", "#5B6CF0", "#F7C043", "#FFFFFF", "#18A999"],
      night: false, cloud: "#FFF4F0",
    },
    night: {
      name: "night", sky1: "#26305E", sky2: "#121838", dots: "rgba(180,200,255,0.08)",
      grass: "#3F7A6C", grass2: "#3A7366", park: "#336858", lip: "#2F6457", soil: "#6A5068", rock: "#4D3D57",
      road: "#353C5E", curb: "#59618A", mark: "#F7E7A6", water: "#2D5E92", water2: "#24507F", foam: "#6E9CD0",
      sand: "#8C7F7A", field: "#8C7A4C", field2: "#776641", crop: "#4E7A55", plaza: "#5A5C7E", plaza2: "#4E5072", dirt: "#6E5C60",
      ink: "#1B2142", inkSoft: "#C9D0F5", shadow: "rgba(5,8,30,0.30)", shadeInk: "#0D1230", light: "#E8ECFF",
      card: "#FFFFFF", glass: "#5170B3", win: "#3F4E86", winLit: "#FFD970", dark: "#232946", metal: "#7C84AE",
      walls: ["#8E93BF", "#A7AED6", "#B88CA6", "#6F89C9", "#6FA5A0", "#B9A27A", "#9A88C9", "#B27F8D"],
      roofs: ["#C25563", "#3C467E", "#2F7F72", "#C98A3D", "#6A54B0"],
      accents: ["#FF7A66", "#6E9BFF", "#3FE0C8", "#FFC23D", "#B394FF", "#FF6FA6"],
      skin: ["#E8B994", "#C89170", "#93603F", "#EBCDB2", "#7A4D33"],
      shirts: ["#FF7A66", "#6E9BFF", "#3FE0C8", "#FFC23D", "#B394FF", "#FFFFFF"],
      cars: ["#FF7A66", "#6E9BFF", "#FFC23D", "#E8ECFF", "#3FE0C8"],
      night: true, cloud: "#6C77AE",
    },
    mint: {
      name: "mint", sky1: "#F2FBF7", sky2: "#CDEEE4", dots: "rgba(30,110,100,0.09)",
      grass: "#B6E3A5", grass2: "#ACDC9A", park: "#98D18A", lip: "#90C982", soil: "#E3B07E", rock: "#B99079",
      road: "#6A8095", curb: "#E5EEF0", mark: "#FFF8E3", water: "#6FD3E0", water2: "#4FBCD0", foam: "#E3FBFD",
      sand: "#F2E2B4", field: "#EECF73", field2: "#D8B456", crop: "#93CC77", plaza: "#F2EDDF", plaza2: "#E3DCC6", dirt: "#DDBA92",
      ink: "#1F3A44", inkSoft: "#4F6E78", shadow: "rgba(20,70,80,0.16)", shadeInk: "#24485A", light: "#FFFEF6",
      card: "#FFFFFF", glass: "#9ADCEB", win: "#A8E0EE", winLit: "#FFE28A", dark: "#2F4F5E", metal: "#C9D8DD",
      walls: ["#FBF4E6", "#FFFFFF", "#FFC9A8", "#A9D8F5", "#B3EBD3", "#FFE29A", "#CFD3FF", "#F9B6B0"],
      roofs: ["#F0705F", "#3E7D9A", "#2DAE8E", "#F5A945", "#6D7BD9"],
      accents: ["#F0705F", "#2F8FE0", "#14B39A", "#F5A20F", "#7C6CF0", "#EC5A8C"],
      skin: ["#F2C6A0", "#D9A27A", "#A86E4C", "#F7D9BF", "#8A583B"],
      shirts: ["#F0705F", "#2F8FE0", "#14B39A", "#F5A20F", "#7C6CF0", "#1F3A44", "#FFFFFF"],
      cars: ["#F0705F", "#2F8FE0", "#F5C23A", "#FFFFFF", "#14B39A"],
      night: false, cloud: "#FFFFFF",
    },
  };
  ISO.palettes = PALS;
  ISO.themes = Object.keys(PALS);
  function pal(theme) { return PALS[theme] || PALS.day; }
  ISO.palette = pal;

  // ───────────────────────── sprites (built once) ─────────────────────────
  var GLOW = {};
  function glowSprite(color) {
    if (GLOW[color]) return GLOW[color];
    var c = document.createElement("canvas");
    c.width = c.height = 64;
    var g = c.getContext("2d");
    var gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, rgba(color, 0.95));
    gr.addColorStop(0.25, rgba(color, 0.55));
    gr.addColorStop(1, rgba(color, 0));
    g.fillStyle = gr;
    g.fillRect(0, 0, 64, 64);
    GLOW[color] = c;
    return c;
  }
  var SOFT = null;
  function softShadow() {
    if (SOFT) return SOFT;
    var c = document.createElement("canvas");
    c.width = 256; c.height = 128;
    var g = c.getContext("2d");
    g.translate(128, 64);
    g.scale(1, 0.5);
    var gr = g.createRadialGradient(0, 0, 0, 0, 0, 128);
    gr.addColorStop(0, "rgba(30,36,80,0.30)");
    gr.addColorStop(0.55, "rgba(30,36,80,0.14)");
    gr.addColorStop(1, "rgba(30,36,80,0)");
    g.fillStyle = gr;
    g.beginPath();
    g.arc(0, 0, 128, 0, Math.PI * 2);
    g.fill();
    SOFT = c;
    return c;
  }

  // ───────────────────────── backdrop ─────────────────────────
  /** Static backdrop canvas (sky gradient, faint iso dot grid, soft sun). Painted once. */
  ISO.backdrop = function (root, theme) {
    root = root || V.root();
    if (root.__isoBg) return root.__isoBg;
    var P = pal(theme);
    root.classList.add("iso-root", "iso-theme-" + P.name);
    var W = Math.round(V.width), H = Math.round(V.height);
    var c = el("canvas.iso-bg", { parent: root, width: W, height: H });
    var g = c.getContext("2d");
    var gr = g.createLinearGradient(0, 0, 0, H);
    gr.addColorStop(0, P.sky1);
    gr.addColorStop(1, P.sky2);
    g.fillStyle = gr;
    g.fillRect(0, 0, W, H);
    var rg = g.createRadialGradient(W * 0.5, H * 0.55, 0, W * 0.5, H * 0.55, Math.max(W, H) * 0.7);
    rg.addColorStop(0, rgba(P.light, P.night ? 0.06 : 0.55));
    rg.addColorStop(1, rgba(P.light, 0));
    g.fillStyle = rg;
    g.fillRect(0, 0, W, H);
    // faint isometric dot lattice
    var step = u(46);
    g.fillStyle = P.dots;
    for (var j = -1, row = 0; j * step * 0.5 < H + step; j++, row++) {
      for (var i = -1; i * step < W + step; i++) {
        var x = i * step + (row % 2 ? step / 2 : 0), y = j * step * 0.5;
        g.beginPath();
        g.arc(x, y, Math.max(1, u(2.2)), 0, 6.283);
        g.fill();
      }
    }
    if (P.night) {
      var rnd = V.makeRand(77);
      for (var s = 0; s < 70; s++) {
        g.fillStyle = "rgba(255,255,255," + (0.25 + rnd() * 0.55).toFixed(2) + ")";
        g.beginPath();
        g.arc(rnd() * W, rnd() * H * 0.75, Math.max(0.8, u(1 + rnd() * 2)), 0, 6.283);
        g.fill();
      }
    }
    root.__isoBg = c;
    return c;
  };

  // ───────────────────────── paths for movers ─────────────────────────
  function Path(pts, closed) {
    var p = [];
    arr(pts).forEach(function (q) { if (q && q.length >= 2) p.push([num(q[0], 0), num(q[1], 0), num(q[2], 0)]); });
    if (!p.length) p.push([0, 0, 0]);
    if (closed && p.length > 1) p.push(p[0].slice());
    this.p = p;
    this.cum = [0];
    for (var i = 1; i < p.length; i++) {
      var dx = p[i][0] - p[i - 1][0], dy = p[i][1] - p[i - 1][1], dz = p[i][2] - p[i - 1][2];
      this.cum.push(this.cum[i - 1] + Math.sqrt(dx * dx + dy * dy + dz * dz));
    }
    this.L = this.cum[this.cum.length - 1];
  }
  Path.prototype.at = function (s) {
    var p = this.p, c = this.cum;
    if (p.length === 1 || this.L <= 0) return { x: p[0][0], y: p[0][1], z: p[0][2], dx: 1, dy: 0 };
    s = clamp(s, 0, this.L);
    var i = 1;
    while (i < c.length - 1 && c[i] < s) i++;
    var a = p[i - 1], b = p[i], seg = c[i] - c[i - 1] || 1, f = (s - c[i - 1]) / seg;
    var dx = b[0] - a[0], dy = b[1] - a[1], dl = Math.sqrt(dx * dx + dy * dy) || 1;
    return { x: a[0] + dx * f, y: a[1] + dy * f, z: a[2] + (b[2] - a[2]) * f, dx: dx / dl, dy: dy / dl };
  };
  /** distance along path for time t. mode: loop | pingpong | once */
  Path.prototype.dist = function (t, speed, phase, mode) {
    var L = this.L || 1;
    var s = t * speed + (phase || 0) * L;
    if (mode === "once") return clamp(s, 0, L);
    if (mode === "pingpong") { var m = ((s % (2 * L)) + 2 * L) % (2 * L); return m > L ? 2 * L - m : m; }
    return ((s % L) + L) % L;
  };
  ISO.Path = Path;

  // ───────────────────────── World ─────────────────────────
  function World(root, o) {
    o = o || {};
    var W = this;
    root = root || V.root();
    W.root = root;
    W.o = o;
    W.theme = PALS[o.theme] ? o.theme : "day";
    W.pal = pal(W.theme);
    if (o.backdrop !== false) ISO.backdrop(root, W.theme);
    W.cols = clamp(Math.round(num(o.cols, o.size ? o.size[0] : 12)), 1, 120);
    W.rows = clamp(Math.round(num(o.rows, o.size ? o.size[1] : 10)), 1, 120);
    W.ox0 = num(o.x, 0); W.oy0 = num(o.y, 0); // island origin
    W.island = o.island !== false;
    W.thick = num(o.thickness, 0.85);
    W.headroom = num(o.headroom, 0.6);
    W.fill = num(o.fill, 0.97);
    W.cells = {};
    W.cellList = [];
    W.objs = [];
    W.ground = []; // fn(W, ctx, t) drawn after cells, before shadows/objects
    W.over = []; // fn(W, ctx, t) drawn after objects
    W.labels = [];
    W.extra = []; // extra islands/slabs: {x,y,w,d,thick,top}
    var vp = o.viewport || { x: 0, y: 0, w: 1, h: 1 };
    W.vp = { x: num(vp.x, 0) * V.width, y: num(vp.y, 0) * V.height, w: num(vp.w, 1) * V.width, h: num(vp.h, 1) * V.height };
    W.cam = { base: { yaw: num(o.yaw, 45), zoom: num(o.zoom, 1) }, keys: [], dirty: true };
    W._f = null;
    W.fitted = false;
    var cv = el("canvas.iso-canvas", { parent: root, width: Math.round(V.width), height: Math.round(V.height) });
    W.canvas = cv;
    W.ctx = cv.getContext("2d");
    W.t = 0;
    W.camera = new Camera(W);
    V.onFrame(function (t) {
      try { W.render(t); } catch (e) { V.error("iso render: " + (e && e.message)); }
    });
  }
  ISO.World = World;
  ISO.world = function (root, o) { return new World(root, o); };

  // ─── camera ───
  function Camera(W) { this.W = W; }
  /** Set base camera values {yaw, zoom, x, y, z}. */
  Camera.prototype.set = function (p) {
    var b = this.W.cam.base;
    for (var k in p) if (p[k] != null) b[k] = num(p[k], b[k]);
    this.W.cam.dirty = true;
    return this;
  };
  /** Animate to {yaw, zoom, x, y, z} starting at time `at` over `dur` seconds. */
  Camera.prototype.to = function (p, at, dur, ease) {
    var to = {};
    for (var k in p) if (p[k] != null && isFinite(num(p[k], NaN))) to[k] = num(p[k], 0);
    this.W.cam.keys.push({ to: to, at: num(at, 0), dur: Math.max(0.01, num(dur, 1.2)), ease: ease || "inOutCubic", i: this.W.cam.keys.length });
    this.W.cam.dirty = true;
    return this;
  };
  /** Rotate to one of the 4 iso angles: quarter = 0..3 (yaw 45 + 90*q), or relative {by: +1}. */
  Camera.prototype.rotate = function (quarter, at, dur) {
    return this.to({ yaw: 45 + 90 * num(quarter, 0) }, at, dur || 1.6, "inOutCubic");
  };
  /** Focus on a point (or object) with a zoom multiplier. */
  Camera.prototype.focus = function (target, zoom, at, dur, ease) {
    var x, y, z;
    if (target && target.footprint) { x = target.x + target.w / 2; y = target.y + target.d / 2; z = (target.z || 0) + (target.h || 0) * 0.5; }
    else { x = num(target && target[0], 0); y = num(target && target[1], 0); z = num(target && target[2], 0); }
    return this.to({ x: x, y: y, z: z, zoom: zoom }, at, dur, ease);
  };
  Camera.prototype.drift = function (amount) {
    // gentle slow push-in across the whole scene
    return this.to({ zoom: (this.W.cam.base.zoom || 1) * (1 + num(amount, 0.06)) }, 0, V.duration, "inOutSine");
  };

  World.prototype.camState = function (t) {
    var cam = this.cam;
    if (cam.dirty) {
      cam.keys.sort(function (a, b) { return a.at - b.at || a.i - b.i; });
      for (var i = 0; i < cam.keys.length; i++) cam.keys[i].from = this._evalCam(cam.keys[i].at, i);
      cam.dirty = false;
    }
    return this._evalCam(t, cam.keys.length);
  };
  World.prototype._evalCam = function (t, upto) {
    var b = this.cam.base, st = {};
    for (var k in b) st[k] = b[k];
    for (var i = 0; i < upto; i++) {
      var kf = this.cam.keys[i];
      if (t + 1e-9 < kf.at) break;
      var p = prog(t, kf.at, kf.dur, kf.ease);
      for (var q in kf.to) {
        var from = kf.from && kf.from[q] != null ? kf.from[q] : st[q];
        st[q] = lerp(from, kf.to[q], p);
      }
    }
    return st;
  };

  /** Compute the fitting zoom + vertical centring (called lazily before first render). */
  World.prototype.fit = function () {
    var W = this;
    var maxH = 0;
    W.objs.forEach(function (o) { maxH = Math.max(maxH, (o.z || 0) + (o.fitH != null ? o.fitH : o.h || 0)); });
    var b = W.o.bounds || [W.ox0, W.oy0, W.ox0 + W.cols, W.oy0 + W.rows];
    W.bounds = b;
    var zTop = Math.min(maxH, num(W.o.maxFitH, 4.5)) + W.headroom, zBot = W.island || W.extra.length ? -W.thick : 0;
    var pts = W.o.fitPoints || [[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]]];
    if (W.o.fitPoints) {
      var fx = pts.map(function (q) { return q[0]; }), fy = pts.map(function (q) { return q[1]; });
      b = [Math.min.apply(null, fx), Math.min.apply(null, fy), Math.max.apply(null, fx), Math.max.apply(null, fy)];
    }
    var cx = (b[0] + b[2]) / 2, cy = (b[1] + b[3]) / 2;
    var base = W.cam.base;
    var a = (num(base.yaw, 45) * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a);
    var minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
    pts.forEach(function (q) {
      var dx = q[0] - cx, dy = q[1] - cy;
      var X = dx * c - dy * s, Y = (dx * s + dy * c) * 0.5;
      minX = Math.min(minX, X); maxX = Math.max(maxX, X);
      minY = Math.min(minY, Y - zTop * HS, Y - zBot * HS); maxY = Math.max(maxY, Y - zTop * HS, Y - zBot * HS);
    });
    var bw = Math.max(0.5, maxX - minX), bh = Math.max(0.5, maxY - minY);
    var crop = W.o.crop != null ? num(W.o.crop, 1) : V.isPortrait ? 1.16 : 1;
    W.fitK = Math.min((W.vp.w * W.fill * crop) / bw, (W.vp.h * W.fill) / bh);
    if (W.o.maxK) W.fitK = Math.min(W.fitK, u(W.o.maxK));
    if (base.x == null) base.x = cx;
    if (base.y == null) base.y = cy;
    if (base.z == null) base.z = -((minY + maxY) / 2) / HS;
    W.cam.dirty = true;
    W.fitted = true;
  };

  World.prototype.prep = function (t) {
    if (!this.fitted) this.fit();
    var st = this.camState(t);
    this.yaw = st.yaw;
    var a = (st.yaw * Math.PI) / 180;
    this.c = Math.cos(a);
    this.s = Math.sin(a);
    this.k = this.fitK * st.zoom;
    this.fx = st.x; this.fy = st.y; this.fz = st.z;
    this.ox = this.vp.x + this.vp.w / 2;
    this.oy = this.vp.y + this.vp.h / 2;
    this.vx = HS * this.s; this.vy = HS * this.c; this.vz = 0.5;
    // shadow direction: camera-fixed, falls to screen right / slightly back
    var xr = 0.62, yr = -0.34;
    this.shx = xr * this.c + yr * this.s;
    this.shy = -xr * this.s + yr * this.c;
    // text axes for ground text: pick world axis that reads left→right
    var cand = [[1, 0], [0, 1], [-1, 0], [0, -1]], best = cand[0], bv = -9;
    for (var i = 0; i < 4; i++) { var sx = cand[i][0] * this.c - cand[i][1] * this.s; if (sx > bv + 1e-6) { bv = sx; best = cand[i]; } }
    var perp = [-best[1], best[0]];
    if (perp[0] * this.s + perp[1] * this.c < 0) perp = [best[1], -best[0]];
    this.tax = best; this.tay = perp;
  };

  /** Project world (x,y,z) → screen [x,y]. Honors the current per-object transform. */
  World.prototype.P = function (x, y, z) {
    var f = this._f;
    if (f) { x = f.cx + (x - f.cx) * f.s; y = f.cy + (y - f.cy) * f.s; z = f.zb + (z - f.zb) * f.zs + f.zo; }
    var dx = x - this.fx, dy = y - this.fy;
    return [this.ox + (dx * this.c - dy * this.s) * this.k, this.oy + ((dx * this.s + dy * this.c) * 0.5 - (z - this.fz) * HS) * this.k];
  };
  /** Screen size of `n` world units (honors object scale). */
  World.prototype.K = function (n) { return n * this.k * (this._f ? this._f.s : 1); };
  World.prototype.depthOf = function (x, y, z) { return (x - this.fx) * this.s + (y - this.fy) * this.c + (z || 0) * 0.3; };
  World.prototype.visN = function (nx, ny, nz) { return nx * this.vx + ny * this.vy + nz * this.vz > 1e-4; };
  World.prototype.lightF = function (nx, ny, nz) { var nxr = nx * this.c - ny * this.s; return 0.82 + 0.26 * nz - 0.12 * nxr; };
  World.prototype.lit = function (col, nx, ny, nz) { return shade(col, this.lightF(nx, ny, nz)); };

  // ─── drawing primitives ───
  function fillPoly(ctx, pts, fill) {
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (var i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
  }
  function pathPoly(ctx, pts) {
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (var i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.closePath();
  }
  ISO.fillPoly = fillPoly;

  /** Draw one planar face (world points) if it faces the camera. n = normal. */
  World.prototype.face = function (pts3, n, col, force) {
    if (!force && !this.visN(n[0], n[1], n[2])) return false;
    var W = this, sp = pts3.map(function (q) { return W.P(q[0], q[1], q[2]); });
    fillPoly(this.ctx, sp, this.lit(col, n[0], n[1], n[2]));
    return sp;
  };

  /**
   * Extruded axis-aligned box. o: { top, side, win:{rows,cols,color,lit,faces,inset}, stripe, door:{face,color}, edge }
   */
  World.prototype.box = function (x, y, z, w, d, h, col, o) {
    o = o || {};
    var W = this, ctx = W.ctx;
    if (h < 0.001) h = 0.001;
    var z1 = z + h;
    var A = W.P(x, y, z), B = W.P(x + w, y, z), C = W.P(x + w, y + d, z), D = W.P(x, y + d, z);
    var A1 = W.P(x, y, z1), B1 = W.P(x + w, y, z1), C1 = W.P(x + w, y + d, z1), D1 = W.P(x, y + d, z1);
    var side = o.side || col;
    if (W.vy < 0) fillPoly(ctx, [A, B, B1, A1], W.lit(side, 0, -1, 0));
    if (W.vx > 0) fillPoly(ctx, [B, C, C1, B1], W.lit(side, 1, 0, 0));
    if (W.vy > 0) fillPoly(ctx, [C, D, D1, C1], W.lit(side, 0, 1, 0));
    if (W.vx < 0) fillPoly(ctx, [D, A, A1, D1], W.lit(side, -1, 0, 0));
    if (o.noTop !== true) fillPoly(ctx, [A1, B1, C1, D1], W.lit(o.top || col, 0, 0, 1));
    if (o.edge !== false && W.K(1) > 8) {
      // crisp highlight on the top rim
      ctx.beginPath();
      pathPoly(ctx, [A1, B1, C1, D1]);
      ctx.strokeStyle = rgba(curLight, 0.35);
      ctx.lineWidth = Math.max(0.6, W.K(0.02));
      ctx.stroke();
    }
    if (o.win) W.windows(x, y, z, w, d, h, o.win);
    if (o.stripes) W.bands(x, y, z, w, d, h, o.stripes);
    return { A: A, B: B, C: C, D: D, A1: A1, B1: B1, C1: C1, D1: D1 };
  };

  /** Point on a box side: face 0=N(-y) 1=E(+x) 2=S(+y) 3=W(-x); u 0..1 along, v 0..1 up. */
  function faceGeom(x, y, w, d, f) {
    // returns [x0,y0,x1,y1, nx, ny]
    if (f === 0) return [x + w, y, x, y, 0, -1];
    if (f === 1) return [x + w, y + d, x + w, y, 1, 0];
    if (f === 2) return [x, y + d, x + w, y + d, 0, 1];
    return [x, y, x, y + d, -1, 0];
  }
  World.prototype.faceVisible = function (f) {
    return f === 0 ? this.vy < 0 : f === 1 ? this.vx > 0 : f === 2 ? this.vy > 0 : this.vx < 0;
  };
  /** Quad on a box face in (u,v) space, returns screen points (no visibility test). */
  World.prototype.faceQuad = function (x, y, z, w, d, h, f, u0, u1, v0, v1, off) {
    var g = faceGeom(x, y, w, d, f), e = off || 0.004;
    var ox = g[4] * e, oy = g[5] * e;
    var ax = lerp(g[0], g[2], u0) + ox, ay = lerp(g[1], g[3], u0) + oy, bx = lerp(g[0], g[2], u1) + ox, by = lerp(g[1], g[3], u1) + oy;
    return [this.P(ax, ay, z + h * v0), this.P(bx, by, z + h * v0), this.P(bx, by, z + h * v1), this.P(ax, ay, z + h * v1)];
  };

  /** Window grid on the visible faces of a box. o: {rows, cols (per unit), color, lit (0..1 ratio), faces:[...], inset, seed, blink} */
  World.prototype.windows = function (x, y, z, w, d, h, o) {
    var W = this, ctx = W.ctx, P = W.pal;
    var rows = Math.max(1, Math.round(num(o.rows, Math.max(1, Math.round(h / 0.42)))));
    var per = num(o.cols, 1.6);
    var faces = o.faces || [0, 1, 2, 3];
    var col = o.color || P.win;
    var litC = P.winLit;
    var vpad = num(o.vpad, 0.14), hpad = num(o.hpad, 0.12), seed = num(o.seed, x * 7 + y * 13);
    var litRatio = o.lit != null ? o.lit : P.night ? 0.62 : 0;
    var ribbon = !!o.ribbon;
    for (var fi = 0; fi < faces.length; fi++) {
      var f = faces[fi];
      if (!W.faceVisible(f)) continue;
      var len = f % 2 === 0 ? w : d;
      var cols = ribbon ? 1 : Math.max(1, Math.round(len * per));
      var g = faceGeom(x, y, w, d, f);
      var shadeF = W.lightF(g[4], g[5], 0);
      var base = shade(col, shadeF + 0.06);
      var lit = shade(litC, 1.02);
      var pathDark = new Path2D(), pathLit = new Path2D(), any = [false, false];
      for (var r = 0; r < rows; r++) {
        var v0 = (r + vpad) / rows, v1 = (r + 1 - vpad * (ribbon ? 0.9 : 1.25)) / rows;
        for (var cc = 0; cc < cols; cc++) {
          var u0 = (cc + hpad) / cols, u1 = (cc + 1 - hpad) / cols;
          if (ribbon) { u0 = 0.05; u1 = 0.95; }
          var q = W.faceQuad(x, y, z, w, d, h, f, u0, u1, v0, v1);
          var isLit = litRatio > 0 && h01(seed + f * 31 + r * 7.3 + cc * 3.1) < litRatio;
          var pth = isLit ? pathLit : pathDark;
          pth.moveTo(q[0][0], q[0][1]); pth.lineTo(q[1][0], q[1][1]); pth.lineTo(q[2][0], q[2][1]); pth.lineTo(q[3][0], q[3][1]); pth.closePath();
          any[isLit ? 1 : 0] = true;
        }
      }
      if (any[0]) { ctx.fillStyle = base; ctx.fill(pathDark); }
      if (any[1]) { ctx.fillStyle = lit; ctx.fill(pathLit); }
    }
  };
  /** Horizontal colour bands around a box (e.g. chimney stripes): {n, color} */
  World.prototype.bands = function (x, y, z, w, d, h, o) {
    var W = this, n = Math.max(1, o.n || 2);
    for (var f = 0; f < 4; f++) {
      if (!W.faceVisible(f)) continue;
      var g = faceGeom(x, y, w, d, f);
      for (var i = 0; i < n; i++) {
        var v0 = (i * 2 + 1) / (n * 2 + 1), v1 = (i * 2 + 2) / (n * 2 + 1);
        fillPoly(W.ctx, W.faceQuad(x, y, z, w, d, h, f, 0, 1, v0, v1), W.lit(o.color, g[4], g[5], 0));
      }
    }
  };

  /** Gable roof over [x,x+w]×[y,y+d] at z, ridge height rh, ridge along "x" or "y". */
  World.prototype.gable = function (x, y, z, w, d, rh, col, axis, endCol) {
    var W = this, z1 = z + rh;
    endCol = endCol || null;
    if (axis === "y") {
      var xm = x + w / 2, l = Math.sqrt(rh * rh + (w / 2) * (w / 2));
      var faces = [
        { p: [[x, y, z], [x, y + d, z], [xm, y + d, z1], [xm, y, z1]], n: [-rh / l, 0, w / 2 / l], c: col },
        { p: [[x + w, y + d, z], [x + w, y, z], [xm, y, z1], [xm, y + d, z1]], n: [rh / l, 0, w / 2 / l], c: col },
        { p: [[x, y, z], [x + w, y, z], [xm, y, z1]], n: [0, -1, 0], c: endCol },
        { p: [[x + w, y + d, z], [x, y + d, z], [xm, y + d, z1]], n: [0, 1, 0], c: endCol },
      ];
    } else {
      var ym = y + d / 2, l2 = Math.sqrt(rh * rh + (d / 2) * (d / 2));
      faces = [
        { p: [[x + w, y, z], [x, y, z], [x, ym, z1], [x + w, ym, z1]], n: [0, -rh / l2, d / 2 / l2], c: col },
        { p: [[x, y + d, z], [x + w, y + d, z], [x + w, ym, z1], [x, ym, z1]], n: [0, rh / l2, d / 2 / l2], c: col },
        { p: [[x, y + d, z], [x, y, z], [x, ym, z1]], n: [-1, 0, 0], c: endCol },
        { p: [[x + w, y, z], [x + w, y + d, z], [x + w, ym, z1]], n: [1, 0, 0], c: endCol },
      ];
    }
    for (var i = 0; i < 4; i++) {
      var fc = faces[i];
      if (!W.visN(fc.n[0], fc.n[1], fc.n[2])) continue;
      W.face(fc.p, fc.n, fc.c || col, true);
    }
  };
  /** Pyramid roof. */
  World.prototype.pyramid = function (x, y, z, w, d, rh, col) {
    var W = this, ax = x + w / 2, ay = y + d / 2, apex = [ax, ay, z + rh];
    var lx = Math.sqrt(rh * rh + (w / 2) * (w / 2)), ly = Math.sqrt(rh * rh + (d / 2) * (d / 2));
    var faces = [
      { p: [[x + w, y, z], [x, y, z], apex], n: [0, -rh / ly, d / 2 / ly] },
      { p: [[x + w, y + d, z], [x + w, y, z], apex], n: [rh / lx, 0, w / 2 / lx] },
      { p: [[x, y + d, z], [x + w, y + d, z], apex], n: [0, rh / ly, d / 2 / ly] },
      { p: [[x, y, z], [x, y + d, z], apex], n: [-rh / lx, 0, w / 2 / lx] },
    ];
    faces.forEach(function (fc) { W.face(fc.p, fc.n, col); });
  };
  /** Extruded polygon (ground points [[x,y],...]) from z0 to z1. Works for convex & mildly concave shapes. */
  World.prototype.prism = function (pts, z0, z1, col, o) {
    o = o || {};
    var W = this, n = pts.length, sides = [];
    // orientation (shoelace in world) to get outward normals
    var area = 0;
    for (var i = 0; i < n; i++) { var a = pts[i], b = pts[(i + 1) % n]; area += a[0] * b[1] - b[0] * a[1]; }
    var sgn = area > 0 ? 1 : -1;
    for (i = 0; i < n; i++) {
      a = pts[i]; b = pts[(i + 1) % n];
      var ex = b[0] - a[0], ey = b[1] - a[1], l = Math.sqrt(ex * ex + ey * ey) || 1;
      var nx = (ey / l) * sgn, ny = (-ex / l) * sgn;
      if (!W.visN(nx, ny, 0)) continue;
      sides.push({ a: a, b: b, nx: nx, ny: ny, dep: W.depthOf((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, 0) });
    }
    sides.sort(function (p, q) { return p.dep - q.dep; });
    var sc = o.side || col;
    var ctx = W.ctx;
    ctx.lineWidth = 1;
    ctx.lineJoin = "round";
    sides.forEach(function (sd) {
      var f = W.lit(sc, sd.nx, sd.ny, 0);
      fillPoly(ctx, [W.P(sd.a[0], sd.a[1], z0), W.P(sd.b[0], sd.b[1], z0), W.P(sd.b[0], sd.b[1], z1), W.P(sd.a[0], sd.a[1], z1)], f);
      if (n > 6) { ctx.strokeStyle = f; ctx.stroke(); }
    });
    if (o.noTop) return;
    fillPoly(W.ctx, pts.map(function (q) { return W.P(q[0], q[1], z1); }), W.lit(o.top || col, 0, 0, 1));
  };

  /** Vertical cylinder centred at (cx,cy) radius r from z0 to z1. o: {top, bands:{n,color}} */
  World.prototype.cyl = function (cx, cy, z0, z1, r, col, o) {
    o = o || {};
    var W = this, ctx = W.ctx;
    var T = W.P(cx, cy, z1), B = W.P(cx, cy, z0), rx = W.K(r), ry = rx * 0.5;
    if (rx < 0.3) return;
    var g = ctx.createLinearGradient(B[0] - rx, 0, B[0] + rx, 0);
    g.addColorStop(0, shade(col, 0.95));
    g.addColorStop(0.45, shade(col, 0.86));
    g.addColorStop(1, shade(col, 0.68));
    ctx.beginPath();
    ctx.moveTo(T[0] - rx, T[1]);
    ctx.lineTo(B[0] - rx, B[1]);
    ctx.ellipse(B[0], B[1], rx, ry, 0, Math.PI, 0, true);
    ctx.lineTo(T[0] + rx, T[1]);
    ctx.closePath();
    ctx.fillStyle = g;
    ctx.fill();
    if (o.bands) {
      var n = o.bands.n || 2;
      for (var i = 0; i < n; i++) {
        var za = z0 + ((z1 - z0) * (i * 2 + 1)) / (n * 2 + 1), zb = z0 + ((z1 - z0) * (i * 2 + 2)) / (n * 2 + 1);
        var Pa = W.P(cx, cy, za), Pb = W.P(cx, cy, zb);
        var g2 = ctx.createLinearGradient(Pa[0] - rx, 0, Pa[0] + rx, 0);
        g2.addColorStop(0, shade(o.bands.color, 0.97)); g2.addColorStop(1, shade(o.bands.color, 0.7));
        ctx.beginPath();
        ctx.moveTo(Pb[0] - rx, Pb[1]);
        ctx.lineTo(Pa[0] - rx, Pa[1]);
        ctx.ellipse(Pa[0], Pa[1], rx, ry, 0, Math.PI, 0, true);
        ctx.lineTo(Pb[0] + rx, Pb[1]);
        ctx.ellipse(Pb[0], Pb[1], rx, ry, 0, 0, Math.PI, false);
        ctx.closePath();
        ctx.fillStyle = g2;
        ctx.fill();
      }
    }
    if (o.noTop) return;
    ctx.beginPath();
    ctx.ellipse(T[0], T[1], rx, ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = shade(o.top || col, 1.08);
    ctx.fill();
    if (o.rim) {
      ctx.beginPath();
      ctx.ellipse(T[0], T[1], rx * 0.78, ry * 0.78, 0, 0, Math.PI * 2);
      ctx.fillStyle = shade(o.rim, 0.9);
      ctx.fill();
    }
  };
  /** Ball (tree crown, dome-ish) centred at (cx,cy,cz) radius r — three-tone. */
  World.prototype.ball = function (cx, cy, cz, r, col) {
    var ctx = this.ctx, C = this.P(cx, cy, cz), R = this.K(r);
    if (R < 0.3) return;
    ctx.fillStyle = shade(col, 0.74);
    ctx.beginPath(); ctx.arc(C[0], C[1], R, 0, 6.2832); ctx.fill();
    ctx.fillStyle = col;
    ctx.beginPath(); ctx.arc(C[0] - R * 0.1, C[1] - R * 0.1, R * 0.88, 0, 6.2832); ctx.fill();
    ctx.fillStyle = shade(col, 1.14);
    ctx.beginPath(); ctx.arc(C[0] - R * 0.3, C[1] - R * 0.32, R * 0.42, 0, 6.2832); ctx.fill();
  };
  /** Dome (half sphere) on top of z. */
  World.prototype.dome = function (cx, cy, z, r, col) {
    var ctx = this.ctx, C = this.P(cx, cy, z), R = this.K(r);
    if (R < 0.3) return;
    ctx.beginPath();
    ctx.ellipse(C[0], C[1], R, R * 0.5, 0, 0, Math.PI, false);
    ctx.arc(C[0], C[1], R, Math.PI, 0, false);
    ctx.closePath();
    var g = ctx.createLinearGradient(C[0] - R, C[1] - R, C[0] + R, C[1]);
    g.addColorStop(0, shade(col, 1.12)); g.addColorStop(0.5, col); g.addColorStop(1, shade(col, 0.72));
    ctx.fillStyle = g;
    ctx.fill();
  };
  /** Low-poly cone (pine tree, nose cone): two-tone split. */
  World.prototype.cone = function (cx, cy, z0, z1, r, col) {
    var ctx = this.ctx, A = this.P(cx, cy, z1), B = this.P(cx, cy, z0), rx = this.K(r), ry = rx * 0.5;
    if (rx < 0.3) return;
    ctx.beginPath();
    ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0] - rx, B[1]);
    ctx.ellipse(B[0], B[1], rx, ry, 0, Math.PI, Math.PI / 2, true);
    ctx.closePath();
    ctx.fillStyle = shade(col, 1.04); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1] + ry);
    ctx.ellipse(B[0], B[1], rx, ry, 0, Math.PI / 2, 0, true);
    ctx.closePath();
    ctx.fillStyle = shade(col, 0.78); ctx.fill();
  };
  /** 3D polyline (screen-space stroke). */
  World.prototype.line3 = function (pts, color, width, o) {
    var W = this, ctx = W.ctx;
    if (pts.length < 2) return;
    ctx.beginPath();
    for (var i = 0; i < pts.length; i++) { var p = W.P(pts[i][0], pts[i][1], pts[i][2] || 0); if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); }
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = (o && o.cap) || "round";
    ctx.lineJoin = "round";
    if (o && o.dash) ctx.setLineDash(o.dash); else ctx.setLineDash([]);
    if (o && o.dashOffset) ctx.lineDashOffset = o.dashOffset;
    ctx.stroke();
    ctx.setLineDash([]);
  };
  /** Ground-plane polygon (flat, z) */
  World.prototype.flat = function (pts, z, fill) {
    var W = this;
    fillPoly(W.ctx, pts.map(function (q) { return W.P(q[0], q[1], z || 0); }), fill);
  };
  /** Flat ellipse on the ground (circle in world). */
  World.prototype.disc = function (cx, cy, z, r, fill) {
    var C = this.P(cx, cy, z), R = this.K(r), ctx = this.ctx;
    ctx.beginPath(); ctx.ellipse(C[0], C[1], R, R * 0.5, 0, 0, 6.2832); ctx.fillStyle = fill; ctx.fill();
  };
  World.prototype.glow = function (x, y, z, r, color, alpha) {
    var C = this.P(x, y, z), R = Math.max(1, this.K(r)), ctx = this.ctx;
    var a0 = ctx.globalAlpha;
    ctx.globalAlpha = a0 * (alpha == null ? 1 : alpha);
    ctx.drawImage(glowSprite(color), C[0] - R, C[1] - R, R * 2, R * 2);
    ctx.globalAlpha = a0;
  };

  // ───────────────────────── ground cells ─────────────────────────
  World.prototype.cell = function (x, y) { return this.cells[x + "," + y]; };
  /** Paint ground tiles. type: road | water | field | plaza | sand | park | dirt | crop. at = appear time. */
  World.prototype.tile = function (x, y, type, at) {
    x = Math.round(x); y = Math.round(y);
    var key = x + "," + y, c = this.cells[key];
    if (!c) { c = { x: x, y: y }; this.cells[key] = c; this.cellList.push(c); }
    c.type = type || "plaza";
    c.at = at != null ? num(at, 0) : c.at != null ? c.at : -1;
    return c;
  };
  World.prototype.area = function (x0, y0, x1, y1, type, at) {
    for (var x = Math.min(x0, x1); x < Math.max(x0, x1); x++) for (var y = Math.min(y0, y1); y < Math.max(y0, y1); y++) this.tile(x, y, type, at);
    return this;
  };
  /** Road along grid points (cell coords, axis-aligned legs). Returns centre-line path points [x+.5,y+.5]. */
  World.prototype.road = function (pts, o) {
    o = o || {};
    var W = this, cells = [];
    pts = arr(pts);
    for (var i = 0; i < pts.length; i++) {
      var a = pts[i], b = pts[i + 1] || pts[i];
      var x = Math.round(a[0]), y = Math.round(a[1]), bx = Math.round(b[0]), by = Math.round(b[1]);
      var guard = 0;
      while (guard++ < 400) {
        cells.push([x, y]);
        if (x === bx && y === by) break;
        if (x !== bx) x += bx > x ? 1 : -1; else y += by > y ? 1 : -1;
      }
    }
    var at = o.at != null ? num(o.at, 0) : -1, dur = num(o.dur, 0.8);
    cells.forEach(function (c, k) { W.tile(c[0], c[1], o.type || "road", at < 0 ? -1 : at + (dur * k) / Math.max(1, cells.length)); });
    return pts.map(function (q) { return [Math.round(q[0]) + 0.5, Math.round(q[1]) + 0.5, 0]; });
  };
  World.prototype.river = function (pts, o) { o = o || {}; o.type = "water"; return this.road(pts, o); };

  World.prototype.drawIsland = function () {
    var W = this, ctx = W.ctx, P = W.pal;
    var slabs = [];
    if (W.island) slabs.push({ x: W.ox0, y: W.oy0, w: W.cols, d: W.rows, thick: W.thick, top: P.grass, checker: true });
    W.extra.forEach(function (s) { if (!s.at || W.t >= s.at) slabs.push(s); });
    slabs.forEach(function (s) {
      var zo = 0, a = 1;
      if (s.at != null && s.at >= 0) {
        var p = prog(W.t, s.at, 0.9, "outBack");
        zo = (1 - p) * -2.2; a = prog(W.t, s.at, 0.35);
      }
      ctx.globalAlpha = a;
      W.slab(s, zo);
      ctx.globalAlpha = 1;
    });
  };
  /** Floating ground slab (island) with soil sides and a soft shadow. s: {x,y,w,d,thick,top,shape?} */
  World.prototype.slab = function (s, zo) {
    var W = this, ctx = W.ctx, P = W.pal;
    zo = zo || 0;
    var th = s.thick != null ? s.thick : W.thick;
    var x = s.x, y = s.y, w = s.w, d = s.d;
    // soft drop shadow far below
    var C = W.P(x + w / 2, y + d / 2, -th - 1.4 + zo);
    var sw = W.K((w + d) * 0.82), sh = sw * 0.5;
    ctx.drawImage(softShadow(), C[0] - sw / 2, C[1] - sh / 2 + W.K(0.4), sw, sh);
    var shape = s.shape || [[x, y], [x + w, y], [x + w, y + d], [x, y + d]];
    var lip = Math.min(0.16, th * 0.25);
    W.prism(shape, -th + zo, -lip + zo, P.soil, { noTop: true });
    // strata line
    W.prism(shape, -th + zo, -th * 0.55 + zo, P.rock, { noTop: true });
    W.prism(shape, -lip + zo, zo, P.lip, { top: s.top || P.grass });
    if (s.checker && !s.shape && W.K(1) > 6) {
      var path = new Path2D();
      for (var i = 0; i < w; i++) for (var j = 0; j < d; j++) {
        if ((i + j) % 2) continue;
        var a = W.P(x + i, y + j, zo), b = W.P(x + i + 1, y + j, zo), c = W.P(x + i + 1, y + j + 1, zo), e = W.P(x + i, y + j + 1, zo);
        path.moveTo(a[0], a[1]); path.lineTo(b[0], b[1]); path.lineTo(c[0], c[1]); path.lineTo(e[0], e[1]); path.closePath();
      }
      ctx.fillStyle = P.grass2;
      ctx.fill(path);
    }
  };
  ISO.blob = function (cx, cy, r, n, seed, squash) {
    var pts = [];
    n = n || 12;
    for (var i = 0; i < n; i++) {
      var a = (i / n) * Math.PI * 2, rr = r * (0.82 + 0.3 * h01(seed + i * 1.7));
      pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * (squash || 1)]);
    }
    return pts;
  };
  /** Extra floating island. o: {x,y,w,d} or {shape:[[x,y]...]}, thick, top colour, at (rise-in time) */
  World.prototype.slabAdd = function (o) {
    o = o || {};
    if (o.shape) {
      var xs = o.shape.map(function (q) { return q[0]; }), ys = o.shape.map(function (q) { return q[1]; });
      o.x = Math.min.apply(null, xs); o.y = Math.min.apply(null, ys);
      o.w = Math.max.apply(null, xs) - o.x; o.d = Math.max.apply(null, ys) - o.y;
    }
    o.thick = o.thick != null ? o.thick : this.thick;
    this.extra.push(o);
    return o;
  };

  /** Sink everything standing between the camera and `target` (for dives / interiors). */
  World.prototype.cutaway = function (target, at, dur) {
    var W = this, a = (num(W.cam.base.yaw, 45) * Math.PI) / 180, s = Math.sin(a), c = Math.cos(a);
    var tx = target.x + target.w / 2, ty = target.y + target.d / 2, td = tx * s + ty * c, tsx = tx * c - ty * s;
    var reach = (target.w + target.d) * 0.6 + 1.2;
    W.objs.forEach(function (o) {
      if (o === target || o.update) return;
      var ox = o.x + o.w / 2, oy = o.y + o.d / 2, d = ox * s + oy * c, sx = ox * c - oy * s;
      if (d > td + 0.4 && d - td < 10 && Math.abs(sx - tsx) < reach + (o.w + o.d) * 0.4) o.sink = { at: num(at, 0), dur: num(dur, 1) };
    });
    return W;
  };

  World.prototype.drawCells = function (t) {
    var W = this, ctx = W.ctx, P = W.pal;
    if (!W.cellList.length) return;
    var groups = {}, fading = [];
    W.cellList.forEach(function (c) {
      if (c.at >= 0 && t < c.at) return;
      if (c.at >= 0 && t < c.at + 0.3) { fading.push(c); return; }
      (groups[c.type] = groups[c.type] || []).push(c);
    });
    var order = ["sand", "dirt", "plaza", "park", "field", "crop", "water", "road", "rail"];
    order.forEach(function (ty) { if (groups[ty]) W.drawCellGroup(ty, groups[ty], t); });
    fading.forEach(function (c) {
      ctx.globalAlpha = prog(t, c.at, 0.3);
      W.drawCellGroup(c.type, [c], t);
      ctx.globalAlpha = 1;
    });
  };
  function cellPath(W, path, x, y, z, i0, i1, j0, j1) {
    var a = W.P(x + i0, y + j0, z), b = W.P(x + i1, y + j0, z), c = W.P(x + i1, y + j1, z), d = W.P(x + i0, y + j1, z);
    path.moveTo(a[0], a[1]); path.lineTo(b[0], b[1]); path.lineTo(c[0], c[1]); path.lineTo(d[0], d[1]); path.closePath();
  }
  World.prototype.isType = function (x, y, ty) { var c = this.cells[x + "," + y]; return !!(c && c.type === ty && (c.at < 0 || this.t >= c.at)); };
  World.prototype.drawCellGroup = function (ty, list, t) {
    var W = this, ctx = W.ctx, P = W.pal, base = new Path2D(), extra = new Path2D(), extra2 = new Path2D();
    var z = ty === "water" ? -0.12 : 0.005;
    var fills = { sand: P.sand, dirt: P.dirt, plaza: P.plaza, park: P.park, field: P.field, crop: P.crop, water: P.water, road: P.road, rail: P.dirt };
    list.forEach(function (c) { cellPath(W, base, c.x, c.y, z, 0, 1, 0, 1); });
    ctx.fillStyle = fills[ty] || P.plaza;
    ctx.fill(base);
    if (ty === "plaza") {
      list.forEach(function (c) { if ((c.x + c.y) % 2 === 0) cellPath(W, extra, c.x, c.y, z, 0.06, 0.94, 0.06, 0.94); });
      ctx.fillStyle = P.plaza2; ctx.fill(extra);
    } else if (ty === "field" || ty === "crop") {
      list.forEach(function (c) {
        for (var r = 0; r < 4; r++) cellPath(W, extra, c.x, c.y, z, 0.08, 0.92, 0.1 + r * 0.22, 0.2 + r * 0.22);
      });
      ctx.fillStyle = ty === "field" ? P.field2 : shade(P.crop, 0.85);
      ctx.fill(extra);
    } else if (ty === "water") {
      // banks: inner walls where water meets land
      list.forEach(function (c) {
        var nb = [[0, -1, 0, -1], [1, 0, 1, 0], [0, 1, 0, 1], [-1, 0, -1, 0]];
        for (var f = 0; f < 4; f++) {
          if (W.isType(c.x + nb[f][0], c.y + nb[f][1], "water")) continue;
          // wall normal points into the water cell (opposite of neighbour direction)
          var nx = -nb[f][0], ny = -nb[f][1];
          if (!W.visN(nx, ny, 0)) continue;
          var g = faceGeom(c.x, c.y, 1, 1, f);
          fillPoly(ctx, [W.P(g[0], g[1], -0.12), W.P(g[2], g[3], -0.12), W.P(g[2], g[3], 0.005), W.P(g[0], g[1], 0.005)], W.lit(P.soil, nx, ny, 0));
        }
      });
      // shimmer
      ctx.strokeStyle = rgba(P.foam, 0.8);
      ctx.lineWidth = Math.max(1, W.K(0.035));
      ctx.lineCap = "round";
      ctx.beginPath();
      list.forEach(function (c) {
        var hsh = h01(c.x * 3.7 + c.y * 11.3);
        if (hsh > 0.55) return;
        var ph = frac(t * 0.35 + hsh * 3);
        var cx = c.x + 0.2 + 0.6 * ph, cy = c.y + 0.25 + 0.5 * hsh;
        var a = W.P(cx - 0.14, cy, -0.12), b = W.P(cx + 0.14, cy, -0.12);
        ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]);
      });
      ctx.globalAlpha *= 1;
      ctx.stroke();
    } else if (ty === "road") {
      var dash = new Path2D();
      list.forEach(function (c) {
        var n = W.isType(c.x, c.y - 1, "road"), e = W.isType(c.x + 1, c.y, "road"), s = W.isType(c.x, c.y + 1, "road"), w = W.isType(c.x - 1, c.y, "road");
        var cw = 0.1;
        if (!n) cellPath(W, extra, c.x, c.y, z + 0.003, 0, 1, 0, cw);
        if (!s) cellPath(W, extra, c.x, c.y, z + 0.003, 0, 1, 1 - cw, 1);
        if (!w) cellPath(W, extra, c.x, c.y, z + 0.003, 0, cw, 0, 1);
        if (!e) cellPath(W, extra, c.x, c.y, z + 0.003, 1 - cw, 1, 0, 1);
        var cnt = n + e + s + w;
        if (cnt <= 2) {
          var dd = 0.045;
          if (n) cellPath(W, dash, c.x, c.y, z + 0.004, 0.5 - dd / 2, 0.5 + dd / 2, 0.02, 0.24);
          if (s) cellPath(W, dash, c.x, c.y, z + 0.004, 0.5 - dd / 2, 0.5 + dd / 2, 0.76, 0.98);
          if (w) cellPath(W, dash, c.x, c.y, z + 0.004, 0.02, 0.24, 0.5 - dd / 2, 0.5 + dd / 2);
          if (e) cellPath(W, dash, c.x, c.y, z + 0.004, 0.76, 0.98, 0.5 - dd / 2, 0.5 + dd / 2);
          if ((n && s && !e && !w) || (e && w && !n && !s)) {
            if (n) cellPath(W, dash, c.x, c.y, z + 0.004, 0.5 - dd / 2, 0.5 + dd / 2, 0.38, 0.62);
            else cellPath(W, dash, c.x, c.y, z + 0.004, 0.38, 0.62, 0.5 - dd / 2, 0.5 + dd / 2);
          }
        } else {
          // crossing stripes
          for (var k = 0; k < 4; k++) {
            if (n) cellPath(W, extra2, c.x, c.y, z + 0.004, 0.18 + k * 0.18, 0.27 + k * 0.18, 0.04, 0.16);
            if (s) cellPath(W, extra2, c.x, c.y, z + 0.004, 0.18 + k * 0.18, 0.27 + k * 0.18, 0.84, 0.96);
          }
        }
      });
      ctx.fillStyle = P.curb; ctx.fill(extra);
      ctx.fillStyle = P.mark; ctx.fill(dash);
      ctx.fillStyle = rgba(P.mark, 0.85); ctx.fill(extra2);
    } else if (ty === "rail") {
      list.forEach(function (c) { for (var r = 0; r < 4; r++) cellPath(W, extra, c.x, c.y, z + 0.003, 0.1 + r * 0.24, 0.2 + r * 0.24, 0.18, 0.82); });
      ctx.fillStyle = shade(P.dirt, 0.7); ctx.fill(extra);
    }
  };

  // ───────────────────────── objects ─────────────────────────
  /**
   * Add a generic object. o: { x, y, w, d, z, h, draw(W,ctx,t,o), update(t,W,o), appear:{at,dur,style}, shadow, color, ... }
   * appear.style: rise | drop | pop | fade | none
   */
  World.prototype.add = function (o) {
    o.footprint = true;
    o.x = num(o.x, 0); o.y = num(o.y, 0); o.w = num(o.w, 1); o.d = num(o.d, 1); o.z = num(o.z, 0); o.h = num(o.h, 1);
    o.id = this.objs.length;
    this.objs.push(o);
    return o;
  };
  /** Schedule an entrance on any object. style: rise | drop | pop | fade. */
  ISO.appear = function (o, at, style, dur) {
    o.appear = { at: num(at, 0), style: style || "rise", dur: num(dur, style === "drop" ? 0.9 : 0.75) };
    return o;
  };
  ISO.leave = function (o, at, dur) { o.leave = { at: num(at, 0), dur: num(dur, 0.5) }; return o; };

  World.prototype.animState = function (o, t) {
    var zs = 1, zo = 0, s = 1, a = 1;
    var ap = o.appear;
    if (ap) {
      if (t < ap.at) return null;
      var p = clamp((t - ap.at) / ap.dur, 0, 1);
      if (ap.style === "rise") { zs = p >= 1 ? 1 : Math.max(0.001, V.ease.outBack(p)); a = Math.min(1, p * 6); }
      else if (ap.style === "drop") { zo = (1 - V.ease.outBounce(p)) * 7; a = Math.min(1, p * 4); }
      else if (ap.style === "pop") { s = Math.max(0.001, V.ease.outBack(p)); zs = s; }
      else if (ap.style === "fade") a = p;
      else if (ap.style === "grow") { zs = Math.max(0.001, V.ease.outCubic(p)); }
    }
    if (o.sink && t >= o.sink.at) {
      var sp = prog(t, o.sink.at, o.sink.dur, "inOutCubic");
      zs *= 1 - 0.86 * sp;
      a *= 1 - 0.25 * sp;
    }
    if (o.leave && t >= o.leave.at) {
      var q = clamp((t - o.leave.at) / o.leave.dur, 0, 1);
      if (q >= 1) return null;
      a *= 1 - q; s *= 1 - 0.3 * q;
    }
    if (o.alpha != null) a *= o.alpha;
    return { zs: zs, zo: zo, s: s, a: a };
  };

  World.prototype.sortObjs = function (list) {
    var W = this, n = list.length, i, j;
    var vx = W.s, vy = W.c, c = W.c, s = W.s;
    for (i = 0; i < n; i++) {
      var o = list[i];
      var xs = [o.x * c - o.y * s, (o.x + o.w) * c - o.y * s, (o.x + o.w) * c - (o.y + o.d) * s, o.x * c - (o.y + o.d) * s];
      o._sx0 = Math.min(xs[0], xs[1], xs[2], xs[3]); o._sx1 = Math.max(xs[0], xs[1], xs[2], xs[3]);
      o._dep = (o.x + o.w / 2) * s + (o.y + o.d / 2) * c + o._z0 * 0.01;
      o._in = 0; o._out = [];
    }
    var eps = 1e-4;
    function cmp(a, b) {
      if (a.x + a.w <= b.x + eps && Math.abs(vx) > 1e-6) return vx > 0 ? -1 : 1;
      if (b.x + b.w <= a.x + eps && Math.abs(vx) > 1e-6) return vx > 0 ? 1 : -1;
      if (a.y + a.d <= b.y + eps && Math.abs(vy) > 1e-6) return vy > 0 ? -1 : 1;
      if (b.y + b.d <= a.y + eps && Math.abs(vy) > 1e-6) return vy > 0 ? 1 : -1;
      if (a._z1 <= b._z0 + eps) return -1;
      if (b._z1 <= a._z0 + eps) return 1;
      if (a.layer != null || b.layer != null) return (a.layer || 0) - (b.layer || 0) || (a._dep < b._dep ? -1 : 1);
      return a._dep < b._dep ? -1 : 1;
    }
    for (i = 0; i < n; i++) {
      var A = list[i];
      for (j = i + 1; j < n; j++) {
        var B = list[j];
        if (A._sx1 <= B._sx0 + eps || B._sx1 <= A._sx0 + eps) continue;
        var r = cmp(A, B);
        if (r < 0) { A._out.push(B); B._in++; } else if (r > 0) { B._out.push(A); A._in++; }
      }
    }
    // Kahn with depth priority (cycles broken by smallest depth)
    var out = [], done = 0, used = new Array(n);
    var idx = list.map(function (o, k) { o._k = k; return k; });
    idx.sort(function (p, q) { return list[p]._dep - list[q]._dep; });
    while (done < n) {
      var pick = -1;
      for (i = 0; i < n; i++) { var k = idx[i]; if (!used[k] && list[k]._in <= 0) { pick = k; break; } }
      if (pick < 0) { for (i = 0; i < n; i++) { if (!used[idx[i]]) { pick = idx[i]; break; } } }
      used[pick] = true; done++;
      var ob = list[pick];
      out.push(ob);
      for (j = 0; j < ob._out.length; j++) ob._out[j]._in--;
    }
    return out;
  };

  World.prototype.drawShadows = function (vis) {
    var W = this, ctx = W.ctx, path = new Path2D(), any = false;
    vis.forEach(function (o) {
      if (o.shadow === false || o._a < 0.05) return;
      var st = o._st;
      var h = (o.shadowH != null ? o.shadowH : o.h) * st.zs + Math.max(0, o.z + st.zo) * 0.6;
      if (o.shadow === "round" || o.shadow === "soft") {
        var r = (o.shadowR || Math.min(o.w, o.d) * 0.42) * st.s;
        var cx = o.x + o.w / 2 + W.shx * h * 0.35, cy = o.y + o.d / 2 + W.shy * h * 0.35;
        var C = W.P(cx, cy, 0), R = W.K(r);
        path.moveTo(C[0] + R, C[1]);
        path.ellipse(C[0], C[1], R, R * 0.5, 0, 0, 6.2832);
        any = true;
        return;
      }
      var ins = o.shadowInset != null ? o.shadowInset : 0.08;
      var fx0 = o.x + ins, fy0 = o.y + ins, fx1 = o.x + o.w - ins, fy1 = o.y + o.d - ins;
      if (st.s !== 1) {
        var mx = (fx0 + fx1) / 2, my = (fy0 + fy1) / 2;
        fx0 = mx + (fx0 - mx) * st.s; fx1 = mx + (fx1 - mx) * st.s; fy0 = my + (fy0 - my) * st.s; fy1 = my + (fy1 - my) * st.s;
      }
      var L = h * 0.55, ox = W.shx * L, oy = W.shy * L;
      var pts = [[fx0, fy0], [fx1, fy0], [fx1, fy1], [fx0, fy1], [fx0 + ox, fy0 + oy], [fx1 + ox, fy0 + oy], [fx1 + ox, fy1 + oy], [fx0 + ox, fy1 + oy]];
      var sp = hull(pts.map(function (q) { return W.P(q[0], q[1], 0.01); }));
      if (sp.length < 3) return;
      path.moveTo(sp[0][0], sp[0][1]);
      for (var i = 1; i < sp.length; i++) path.lineTo(sp[i][0], sp[i][1]);
      path.closePath();
      any = true;
    });
    if (!any) return;
    ctx.fillStyle = W.pal.shadow;
    ctx.fill(path, "nonzero");
  };
  // convex hull (monotone chain) → clockwise on screen (y down)
  function hull(P) {
    P = P.slice().sort(function (a, b) { return a[0] - b[0] || a[1] - b[1]; });
    if (P.length < 3) return P;
    function cross(o, a, b) { return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]); }
    var lo = [], up = [], i;
    for (i = 0; i < P.length; i++) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], P[i]) <= 0) lo.pop(); lo.push(P[i]); }
    for (i = P.length - 1; i >= 0; i--) { while (up.length >= 2 && cross(up[up.length - 2], up[up.length - 1], P[i]) <= 0) up.pop(); up.push(P[i]); }
    up.pop(); lo.pop();
    return lo.concat(up);
  }

  World.prototype.render = function (t) {
    var W = this, ctx = W.ctx;
    W.t = t;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, W.canvas.width, W.canvas.height);
    curInk = W.pal.shadeInk; curLight = W.pal.light;
    W.prep(t);
    W._f = null;
    if (W.o.preDraw) W.o.preDraw(W, ctx, t);
    W.drawIsland();
    W.drawCells(t);
    var i;
    for (i = 0; i < W.ground.length; i++) { W._f = null; ctx.globalAlpha = 1; W.ground[i](W, ctx, t); }
    // objects
    var vis = [];
    for (i = 0; i < W.objs.length; i++) {
      var o = W.objs[i];
      if (o.update) o.update(t, W, o);
      if (o.hidden) continue;
      var st = W.animState(o, t);
      if (!st || st.a <= 0.003) continue;
      o._st = st; o._a = st.a;
      o._z0 = o.z + st.zo; o._z1 = o._z0 + Math.max(0.001, o.h * st.zs);
      vis.push(o);
    }
    W._f = null;
    ctx.globalAlpha = 1;
    W.drawShadows(vis);
    var sorted = W.sortObjs(vis);
    for (i = 0; i < sorted.length; i++) {
      o = sorted[i];
      st = o._st;
      W._f = st.zs !== 1 || st.zo !== 0 || st.s !== 1 ? { cx: o.x + o.w / 2, cy: o.y + o.d / 2, zb: o.z, zs: st.zs, zo: st.zo, s: st.s } : null;
      ctx.globalAlpha = st.a;
      o.draw(W, ctx, t, o);
      if (o.appear && o.appear.style === "drop" && !o.noDust) W._dust(o, t);
    }
    W._f = null;
    ctx.globalAlpha = 1;
    for (i = 0; i < W.over.length; i++) { W._f = null; ctx.globalAlpha = 1; W.over[i](W, ctx, t); }
    W._f = null;
    ctx.globalAlpha = 1;
    W.drawLabels(t);
    if (W.o.postDraw) W.o.postDraw(W, ctx, t);
  };
  World.prototype._dust = function (o, t) {
    var ap = o.appear, land = ap.at + ap.dur * 0.36, p = (t - land) / 0.7;
    if (p < 0 || p > 1) return;
    var W = this, ctx = W.ctx;
    W._f = null;
    ctx.globalAlpha = (1 - p) * 0.8;
    ctx.fillStyle = W.pal.light;
    for (var i = 0; i < 6; i++) {
      var a = (i / 6) * Math.PI * 2 + 0.4, r = 0.35 + p * 0.6;
      var cx = o.x + o.w / 2 + Math.cos(a) * (o.w / 2 + r * 0.4), cy = o.y + o.d / 2 + Math.sin(a) * (o.d / 2 + r * 0.4);
      var C = W.P(cx, cy, 0.1 + p * 0.25);
      ctx.beginPath(); ctx.arc(C[0], C[1], W.K(0.12 + p * 0.12), 0, 6.2832); ctx.fill();
    }
    ctx.globalAlpha = 1;
  };

  // ───────────────────────── building kit ─────────────────────────
  var TREES = { day: ["#5DBE6A", "#48AC64", "#7FCB61", "#3E9E5E"], dusk: ["#6DAF66", "#589C5E", "#8FBF5E", "#4E8F58"], night: ["#2F7A5E", "#286B55", "#3E8A60", "#235F4C"], mint: ["#59C27A", "#43AE70", "#7CD06A", "#3BA068"] };
  function pick(list, seed) { return list[Math.floor(h01(seed) * list.length) % list.length]; }
  function inset(o, m) { return { x: o.x + m, y: o.y + m, w: Math.max(0.2, o.w - 2 * m), d: Math.max(0.2, o.d - 2 * m) }; }
  function seedOf(o) { return o.x * 3.17 + o.y * 7.31 + (o.seed || 0); }

  /** Door / sign quad on face f if visible. */
  function faceRect(W, b, z, h, f, u0, u1, v0, v1, col) {
    if (!W.faceVisible(f)) return;
    var g = faceGeom(b.x, b.y, b.w, b.d, f);
    fillPoly(W.ctx, W.faceQuad(b.x, b.y, z, b.w, b.d, h, f, u0, u1, v0, v1, 0.006), W.lit(col, g[4], g[5], 0));
  }
  /** Circle drawn on a box face (clock, logo). */
  function faceCircle(W, b, z, h, f, uc, vc, r, col) {
    if (!W.faceVisible(f)) return;
    var g = faceGeom(b.x, b.y, b.w, b.d, f), len = f % 2 === 0 ? b.w : b.d, pts = [];
    for (var i = 0; i < 16; i++) {
      var a = (i / 16) * Math.PI * 2;
      var uu = uc + (Math.cos(a) * r) / len, vv = vc + (Math.sin(a) * r) / h;
      var px = lerp(g[0], g[2], uu) + g[4] * 0.008, py = lerp(g[1], g[3], uu) + g[5] * 0.008;
      pts.push(W.P(px, py, z + h * vv));
    }
    fillPoly(W.ctx, pts, W.lit(col, g[4], g[5], 0));
  }
  ISO.faceRect = faceRect;
  /** Striped awning sloping out from face f. */
  function awning(W, b, f, zTop, depth, drop, colA, colB, n) {
    if (!W.faceVisible(f)) return;
    var g = faceGeom(b.x, b.y, b.w, b.d, f);
    n = n || 6;
    var nx = g[4], ny = g[5];
    var slopeN = [nx * drop, ny * drop, depth];
    var l = Math.sqrt(slopeN[0] * slopeN[0] + slopeN[1] * slopeN[1] + slopeN[2] * slopeN[2]);
    for (var i = 0; i < n; i++) {
      var u0 = 0.04 + (0.92 * i) / n, u1 = 0.04 + (0.92 * (i + 1)) / n;
      var ax = lerp(g[0], g[2], u0), ay = lerp(g[1], g[3], u0), bx = lerp(g[0], g[2], u1), by = lerp(g[1], g[3], u1);
      var pts = [[ax, ay, zTop], [bx, by, zTop], [bx + nx * depth, by + ny * depth, zTop - drop], [ax + nx * depth, ay + ny * depth, zTop - drop]];
      W.face(pts, [slopeN[0] / l, slopeN[1] / l, slopeN[2] / l], i % 2 ? colB : colA, true);
    }
  }
  function smoke(W, x, y, z, t, o) {
    o = o || {};
    var ctx = W.ctx, n = o.n || 6, rate = o.rate || 0.32, rise = o.rise || 2.2, col = o.color || (W.pal.night ? "#9AA3C9" : "#FFFFFF");
    var a0 = ctx.globalAlpha;
    for (var i = 0; i < n; i++) {
      var ph = frac(t * rate + i / n + (o.seed || 0));
      var cx = x + W.shx * 0.25 * ph * rise + Math.sin(ph * 5 + i) * 0.06, cy = y + W.shy * 0.25 * ph * rise;
      var C = W.P(cx, cy, z + ph * rise);
      var R = W.K((o.size || 0.16) + ph * (o.grow || 0.32));
      ctx.globalAlpha = a0 * Math.min(1, ph * 8) * (1 - ph) * 0.85;
      ctx.fillStyle = shade(col, 0.9);
      ctx.beginPath(); ctx.arc(C[0] + R * 0.12, C[1] + R * 0.12, R, 0, 6.2832); ctx.fill();
      ctx.fillStyle = col;
      ctx.beginPath(); ctx.arc(C[0], C[1], R * 0.92, 0, 6.2832); ctx.fill();
    }
    ctx.globalAlpha = a0;
  }
  ISO.smoke = smoke;
  function blink(t, seed, rate) { return h01(Math.floor(t * (rate || 3) + seed * 13.7) + seed) > 0.45; }

  var KIT = {};
  ISO.kit = KIT;
  ISO.buildingTypes = function () { return Object.keys(KIT); };

  KIT.house = {
    size: [2, 2], h: function (o) { return 0.85 + 0.75; },
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.2), wh = 0.85, sd = seedOf(o);
      var col = o.color || pick(W.pal.walls, sd), roof = o.roof || pick(W.pal.roofs, sd + 1);
      var axis = b.w >= b.d ? "x" : "y";
      W.box(b.x, b.y, 0, b.w, b.d, wh, col, { win: { rows: 1, cols: 1.1, vpad: 0.3, hpad: 0.22 } });
      faceRect(W, b, 0, wh, 2, 0.4, 0.6, 0, 0.62, shade(roof, 0.8));
      var ov = 0.09;
      // chimney (behind ridge, drawn first)
      var chx = axis === "x" ? b.x + b.w * 0.72 : b.x + b.w * 0.2, chy = axis === "x" ? b.y + b.d * 0.2 : b.y + b.d * 0.72;
      W.box(chx, chy, wh, 0.2, 0.2, 0.75, W.pal.walls[2] === col ? "#C9806A" : "#B97862");
      W.gable(b.x - ov, b.y - ov, wh, b.w + 2 * ov, b.d + 2 * ov, 0.62, roof, axis, col);
      if (o.smoke) smoke(W, chx + 0.1, chy + 0.1, wh + 0.8, t, { size: 0.08, grow: 0.16, rise: 1.2, seed: sd });
    },
  };
  KIT.cottage = {
    size: [1, 1], h: function () { return 1.2; },
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.14), sd = seedOf(o), col = o.color || pick(W.pal.walls, sd), roof = o.roof || pick(W.pal.roofs, sd + 2);
      W.box(b.x, b.y, 0, b.w, b.d, 0.6, col, { win: { rows: 1, cols: 1.2, vpad: 0.3, hpad: 0.3, faces: [1, 3] } });
      faceRect(W, b, 0, 0.6, 2, 0.38, 0.62, 0, 0.65, shade(roof, 0.75));
      W.pyramid(b.x - 0.06, b.y - 0.06, 0.6, b.w + 0.12, b.d + 0.12, 0.55, roof);
    },
  };
  KIT.tower = {
    size: [2, 2], h: function (o) { return 0.42 * (o.floors || 7) + 0.25; },
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.2), fl = o.floors || 7, H = 0.42 * fl, sd = seedOf(o);
      var glass = o.style === "glass" || (o.style == null && h01(sd + 5) > 0.5);
      var col = o.color || (glass ? W.pal.glass : pick(W.pal.walls, sd));
      W.box(b.x, b.y, 0, b.w, b.d, 0.22, shade(col, 0.82));
      if (glass) {
        W.box(b.x + 0.04, b.y + 0.04, 0.22, b.w - 0.08, b.d - 0.08, H - 0.22, col, { win: { rows: fl, ribbon: true, color: shade(col, 1.15), vpad: 0.32 } });
      } else {
        W.box(b.x + 0.04, b.y + 0.04, 0.22, b.w - 0.08, b.d - 0.08, H - 0.22, col, { win: { rows: fl - 1, cols: 1.8 } });
      }
      var rb = { x: b.x + b.w * 0.25, y: b.y + b.d * 0.25, w: b.w * 0.5, d: b.d * 0.5 };
      W.box(rb.x, rb.y, H, rb.w, rb.d, 0.25, W.pal.metal);
      var top = W.P(b.x + b.w / 2, b.y + b.d / 2, H + 0.25), tip = W.P(b.x + b.w / 2, b.y + b.d / 2, H + 0.95);
      ctx.strokeStyle = W.pal.dark; ctx.lineWidth = Math.max(1, W.K(0.04));
      ctx.beginPath(); ctx.moveTo(top[0], top[1]); ctx.lineTo(tip[0], tip[1]); ctx.stroke();
      if (blink(t, sd, 1.2)) { var a0 = ctx.globalAlpha; W.glow(b.x + b.w / 2, b.y + b.d / 2, H + 0.95, 0.22, "#FF4D4D", 0.9); ctx.globalAlpha = a0; }
    },
  };
  KIT.skyscraper = KIT.tower;
  KIT.office = {
    size: [2, 2], h: function (o) { return 0.45 * (o.floors || 4) + 0.12; },
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.18), fl = o.floors || 4, H = 0.45 * fl, sd = seedOf(o);
      var col = o.color || pick(W.pal.walls, sd + 3);
      W.box(b.x, b.y, 0, b.w, b.d, H, col, { win: { rows: fl, ribbon: true, vpad: 0.26 } });
      W.box(b.x + 0.06, b.y + 0.06, H, b.w - 0.12, b.d - 0.12, 0.12, shade(col, 0.92));
      W.box(b.x + b.w * 0.55, b.y + b.d * 0.2, H + 0.12, 0.35, 0.35, 0.22, W.pal.metal);
    },
  };
  KIT.shop = {
    size: [2, 2], h: function () { return 1.35; },
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.2), H = 1.0, sd = seedOf(o);
      var col = o.color || pick(W.pal.walls, sd + 4), acc = o.accent || pick(W.pal.accents, sd);
      W.box(b.x, b.y, 0, b.w, b.d, H, col, { win: { rows: 1, cols: 1.2, vpad: 0.55, hpad: 0.2, faces: [0, 1, 3] } });
      // shop window + door on S
      faceRect(W, b, 0, H, 2, 0.1, 0.62, 0.1, 0.58, W.pal.glass);
      faceRect(W, b, 0, H, 2, 0.7, 0.88, 0, 0.6, shade(acc, 0.7));
      awning(W, b, 2, 0.7, 0.32, 0.18, acc, "#FFFFFF", 7);
      awning(W, b, 1, 0.7, 0.32, 0.18, acc, "#FFFFFF", 7);
      W.box(b.x + 0.06, b.y + 0.06, H, b.w - 0.12, b.d - 0.12, 0.08, shade(col, 0.9));
      // rooftop sign
      W.box(b.x + b.w * 0.2, b.y + b.d * 0.55, H + 0.08, b.w * 0.6, 0.1, 0.32, acc);
    },
  };
  KIT.factory = {
    size: [3, 2], h: function () { return 1.45; }, fitH: 3.2,
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.18), H = 1.0, sd = seedOf(o);
      var col = o.color || (W.pal.night ? "#8E93BF" : "#E9E1D6"), roof = o.roof || pick(W.pal.roofs, sd + 1);
      var chx = b.x + b.w - 0.38, chy = b.y + 0.36;
      var drawChim = function () {
        W.cyl(chx, chy, 0, H + 1.5, 0.18, "#E6E1DC", { bands: { n: 2, color: "#E8584F" } });
        if (o.smoke !== false) smoke(W, chx, chy, H + 1.55, t, { seed: sd });
      };
      var chimBehind = W.depthOf(chx, chy, 0) < W.depthOf(b.x + b.w / 2, b.y + b.d / 2, 0);
      if (chimBehind) drawChim();
      W.box(b.x, b.y, 0, b.w, b.d, H, col, { win: { rows: 1, cols: 1.3, vpad: 0.3 } });
      faceRect(W, b, 0, H, 2, 0.12, 0.38, 0, 0.7, shade(W.pal.dark, 1.1));
      // sawtooth roof (teeth along x)
      var n = Math.max(2, Math.round(b.w / 0.62)), tw = b.w / n, rh = 0.38;
      var idx = [];
      for (var i = 0; i < n; i++) idx.push(i);
      if (W.vx < 0) idx.reverse();
      idx.forEach(function (i) {
        var tx = b.x + i * tw, z1 = H, l = Math.sqrt(rh * rh + tw * tw);
        W.face([[tx, b.y, z1], [tx, b.y + b.d, z1], [tx + tw, b.y + b.d, z1 + rh], [tx + tw, b.y, z1 + rh]], [-rh / l, 0, tw / l], roof);
        W.face([[tx + tw, b.y, z1], [tx + tw, b.y, z1 + rh], [tx + tw, b.y + b.d, z1 + rh], [tx + tw, b.y + b.d, z1]], [1, 0, 0], W.pal.glass);
        W.face([[tx, b.y, z1], [tx + tw, b.y, z1 + rh], [tx + tw, b.y, z1]], [0, -1, 0], shade(col, 0.95));
        W.face([[tx, b.y + b.d, z1], [tx + tw, b.y + b.d, z1], [tx + tw, b.y + b.d, z1 + rh]], [0, 1, 0], shade(col, 0.95));
      });
      if (!chimBehind) drawChim();
    },
  };
  KIT.hospital = {
    size: [3, 2], h: function () { return 1.75; },
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.18), H = 1.6, col = o.color || "#FFFFFF";
      W.box(b.x, b.y, 0, b.w, b.d, H, col, { win: { rows: 3, cols: 1.6, color: W.pal.glass } });
      faceRect(W, b, 0, H, 2, 0.38, 0.62, 0, 0.26, W.pal.glass);
      var cw = { x: b.x + b.w * 0.35, y: b.y + b.d + 0.0, w: b.w * 0.3, d: 0.3 };
      W.box(cw.x, b.y + b.d - 0.02, 0.42, cw.w, 0.32, 0.08, "#E8584F");
      // roof: helipad + red cross block
      W.box(b.x + 0.05, b.y + 0.05, H, b.w - 0.1, b.d - 0.1, 0.06, "#EEF0F4");
      W.disc(b.x + b.w * 0.32, b.y + b.d / 2, H + 0.065, 0.42, shade("#5B6488", 1.0));
      var hp = W.P(b.x + b.w * 0.32, b.y + b.d / 2, H + 0.07);
      ctx.fillStyle = "#FFFFFF"; ctx.font = "800 " + W.K(0.4).toFixed(1) + "px " + FONT; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.save(); ctx.translate(hp[0], hp[1]); ctx.scale(1, 0.55); ctx.fillText("H", 0, 0); ctx.restore();
      var cx = b.x + b.w * 0.74, cy = b.y + b.d / 2, z = H + 0.06;
      W.box(cx - 0.3, cy - 0.1, z, 0.6, 0.2, 0.18, "#EF4B4B");
      W.box(cx - 0.1, cy - 0.3, z, 0.2, 0.6, 0.18, "#EF4B4B");
    },
  };
  KIT.school = {
    size: [3, 2], h: function () { return 2.1; },
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.18), H = 0.95, sd = seedOf(o), col = o.color || "#FFD9A0", roof = o.roof || "#E8665A";
      var tb = { x: b.x + b.w / 2 - 0.32, y: b.y + b.d / 2 - 0.32, w: 0.64, d: 0.64 };
      W.box(b.x, b.y, 0, b.w, b.d, H, col, { win: { rows: 1, cols: 1.5, vpad: 0.28 } });
      W.gable(b.x - 0.08, b.y - 0.08, H, b.w + 0.16, b.d + 0.16, 0.55, roof, "x", col);
      W.box(tb.x, tb.y, H, tb.w, tb.d, 0.95, shade(col, 1.03));
      faceCircle(W, tb, H, 0.95, 2, 0.5, 0.55, 0.2, "#FFFFFF");
      faceCircle(W, tb, H, 0.95, 1, 0.5, 0.55, 0.2, "#FFFFFF");
      W.pyramid(tb.x - 0.06, tb.y - 0.06, H + 0.95, tb.w + 0.12, tb.d + 0.12, 0.5, roof);
      faceRect(W, b, 0, H, 2, 0.43, 0.57, 0, 0.6, shade(roof, 0.7));
      // flag
      var fx = b.x + 0.15, fy = b.y + b.d + 0.12, p0 = W.P(fx, fy, 0), p1 = W.P(fx, fy, 1.9);
      ctx.strokeStyle = W.pal.dark; ctx.lineWidth = Math.max(1, W.K(0.03));
      ctx.beginPath(); ctx.moveTo(p0[0], p0[1]); ctx.lineTo(p1[0], p1[1]); ctx.stroke();
      var pts = [];
      for (var i = 0; i <= 6; i++) { var uu = i / 6, wv = Math.sin(t * 5 - uu * 4) * 0.05 * uu; pts.push(W.P(fx + uu * 0.55, fy + wv, 1.88 - wv)); }
      for (i = 6; i >= 0; i--) { uu = i / 6; wv = Math.sin(t * 5 - uu * 4) * 0.05 * uu; pts.push(W.P(fx + uu * 0.55, fy + wv, 1.58 - wv)); }
      fillPoly(ctx, pts, o.accent || pick(W.pal.accents, sd + 2));
    },
  };
  KIT.bank = {
    size: [3, 2], h: function () { return 1.75; },
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.15), col = o.color || "#F4EEE2";
      W.box(b.x, b.y, 0, b.w, b.d, 0.18, "#D9DCE6");
      var body = { x: b.x + 0.2, y: b.y + 0.15, w: b.w - 0.4, d: b.d - 0.6 };
      W.box(body.x, body.y, 0.18, body.w, body.d, 1.05, col, { win: { rows: 1, cols: 1.2, faces: [0, 1, 3], vpad: 0.25 } });
      faceRect(W, body, 0.18, 1.05, 2, 0.4, 0.6, 0, 0.6, "#8A6A3C");
      var n = 5, cy = b.y + b.d - 0.38;
      var cols = [];
      for (var i = 0; i < n; i++) cols.push(i);
      if (W.vx < 0) cols.reverse();
      cols.forEach(function (i) { var cx = body.x + 0.1 + (i * (body.w - 0.3)) / (n - 1); W.box(cx, cy, 0.18, 0.13, 0.13, 1.05, "#FFFFFF", { edge: false }); });
      W.box(b.x + 0.1, b.y + 0.08, 1.23, b.w - 0.2, b.d - 0.16, 0.12, "#FFFFFF");
      W.gable(b.x + 0.1, b.y + 0.08, 1.35, b.w - 0.2, b.d - 0.16, 0.4, "#E9E3D4", "y", "#FFFFFF");
      var gp = { x: b.x + b.w / 2 - 0.2, y: b.y + b.d - 0.1, w: 0.4, d: 0.02 };
      W.disc(b.x + b.w / 2, b.y + b.d / 2, 1.36, 0.0001, "#000");
      if (W.faceVisible(2)) {
        var C = W.P(b.x + b.w / 2, b.y + b.d - 0.06, 1.5), R = W.K(0.14);
        ctx.fillStyle = "#F2B33D"; ctx.beginPath(); ctx.arc(C[0], C[1], R, 0, 6.2832); ctx.fill();
        ctx.fillStyle = "#8A6A3C"; ctx.font = "900 " + (R * 1.4).toFixed(1) + "px " + FONT; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText("$", C[0], C[1] + R * 0.05);
      }
    },
  };
  KIT.datacenter = {
    size: [3, 2], h: function () { return 1.05; },
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.18), H = 0.9, sd = seedOf(o), col = o.color || "#525C86";
      W.box(b.x, b.y, 0, b.w, b.d, H, col);
      // LED rows
      var leds = ["#3FE0A0", "#4FB3FF", "#FFD24D"];
      for (var f = 0; f < 4; f++) {
        if (!W.faceVisible(f)) continue;
        var len = f % 2 === 0 ? b.w : b.d, nC = Math.round(len * 3);
        for (var r = 0; r < 3; r++) for (var c = 0; c < nC; c++) {
          var on = h01(Math.floor(t * 4 + c * 1.3 + r * 2.1) + sd + f * 9 + c * 17 + r * 5) > 0.35;
          var lc = on ? leds[(c + r) % 3] : shade(col, 0.8);
          faceRect(W, b, 0, H, f, (c + 0.25) / nC, (c + 0.75) / nC, 0.2 + r * 0.24, 0.3 + r * 0.24, lc);
        }
      }
      // roof fans
      for (var i = 0; i < 2; i++) {
        var fx = b.x + b.w * (0.3 + 0.4 * i), fy = b.y + b.d / 2;
        W.cyl(fx, fy, H, H + 0.14, 0.32, W.pal.metal, { rim: "#3A4166" });
        var Cc = W.P(fx, fy, H + 0.145), R = W.K(0.24);
        ctx.strokeStyle = "#AEB6CC"; ctx.lineWidth = Math.max(1, W.K(0.05));
        ctx.beginPath();
        for (var k = 0; k < 3; k++) { var a = t * 6 + (k * Math.PI * 2) / 3 + i; ctx.moveTo(Cc[0], Cc[1]); ctx.lineTo(Cc[0] + Math.cos(a) * R, Cc[1] + Math.sin(a) * R * 0.5); }
        ctx.stroke();
      }
    },
  };
  KIT.server = {
    size: [1, 1], h: function () { return 1.45; },
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.2), H = 1.4, sd = seedOf(o), col = o.color || "#3E4670";
      W.box(b.x, b.y, 0, b.w, b.d, H, col);
      for (var f = 0; f < 4; f++) {
        if (!W.faceVisible(f)) continue;
        for (var r = 0; r < 6; r++) {
          faceRect(W, b, 0, H, f, 0.12, 0.88, 0.08 + r * 0.15, 0.17 + r * 0.15, shade(col, 1.18));
          var on = h01(Math.floor(t * 5 + r * 1.7) + sd + r * 3 + f) > 0.4;
          faceRect(W, b, 0, H, f, 0.7, 0.8, 0.1 + r * 0.15, 0.15 + r * 0.15, on ? "#3FE0A0" : "#2A3050");
        }
      }
    },
  };
  KIT.rack = KIT.server;
  KIT.warehouse = {
    size: [3, 2], h: function () { return 1.4; },
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.18), H = 1.0, sd = seedOf(o), col = o.color || "#B9C6DE", roof = o.roof || "#5160A0";
      W.box(b.x, b.y, 0, b.w, b.d, H, col);
      for (var i = 0; i < 2; i++) {
        faceRect(W, b, 0, H, 2, 0.12 + i * 0.42, 0.46 + i * 0.42, 0, 0.72, shade(col, 0.8));
        for (var k = 1; k < 5; k++) faceRect(W, b, 0, H, 2, 0.12 + i * 0.42, 0.46 + i * 0.42, k * 0.14, k * 0.14 + 0.02, shade(col, 0.68));
      }
      faceRect(W, b, 0, H, 1, 0.2, 0.8, 0.5, 0.7, W.pal.glass);
      W.gable(b.x - 0.06, b.y - 0.06, H, b.w + 0.12, b.d + 0.12, 0.36, roof, "x", col);
    },
  };
  KIT.turbine = {
    size: [1, 1], h: function () { return 2.7; }, fitH: 3.6, shadowH: 1.6,
    draw: function (W, ctx, t, o) {
      var cx = o.x + 0.5, cy = o.y + 0.5, H = 2.6, sd = seedOf(o);
      W.cyl(cx, cy, 0, H, 0.07, "#F4F6FA");
      W.box(cx - 0.12, cy - 0.16, H - 0.06, 0.24, 0.36, 0.16, "#E6E9F0");
      var hub = [cx, cy + 0.22, H + 0.02], R = 1.0, spin = t * (o.speed || 2.2) + sd;
      var front = W.vy > 0;
      ctx.fillStyle = W.pal.night ? "#C9D0F5" : "#FFFFFF";
      for (var k = 0; k < 3; k++) {
        var a = spin + (k * Math.PI * 2) / 3, ca = Math.cos(a), sa = Math.sin(a);
        var tip = W.P(hub[0] + ca * R, hub[1], hub[2] + sa * R);
        var p1 = W.P(hub[0] - sa * 0.07, hub[1], hub[2] + ca * 0.07), p2 = W.P(hub[0] + sa * 0.07, hub[1], hub[2] - ca * 0.07);
        ctx.beginPath(); ctx.moveTo(p1[0], p1[1]); ctx.lineTo(tip[0], tip[1]); ctx.lineTo(p2[0], p2[1]); ctx.closePath();
        ctx.fillStyle = k === 0 ? "#FFFFFF" : "#F1F3F8"; ctx.fill();
        ctx.strokeStyle = "rgba(60,70,110,0.25)"; ctx.lineWidth = 1; ctx.stroke();
      }
      var hc = W.P(hub[0], hub[1], hub[2]);
      ctx.fillStyle = "#D9DEEA"; ctx.beginPath(); ctx.arc(hc[0], hc[1], W.K(0.08), 0, 6.2832); ctx.fill();
      void front;
    },
  };
  KIT.solar = {
    size: [2, 2], h: function () { return 0.6; },
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.12), rows = Math.max(1, Math.round(b.d / 0.62));
      var order = [];
      for (var r = 0; r < rows; r++) order.push(r);
      if (W.vy < 0) order.reverse();
      order.forEach(function (r) {
        var y0 = b.y + (r + 0.15) * (b.d / rows), y1 = b.y + (r + 0.85) * (b.d / rows);
        var pts = [[b.x, y1, 0.14], [b.x + b.w, y1, 0.14], [b.x + b.w, y0, 0.52], [b.x, y0, 0.52]];
        var dy = y1 - y0, dz = 0.38, l = Math.sqrt(dy * dy + dz * dz);
        var n = [0, dz / l, dy / l];
        var sp = W.face(pts, n, "#2F56B0", true);
        // grid + glint
        ctx.strokeStyle = "rgba(190,215,255,0.55)"; ctx.lineWidth = Math.max(0.7, W.K(0.015));
        ctx.beginPath();
        for (var c = 1; c < 4; c++) { var a = W.P(b.x + (b.w * c) / 4, y1, 0.14), e = W.P(b.x + (b.w * c) / 4, y0, 0.52); ctx.moveTo(a[0], a[1]); ctx.lineTo(e[0], e[1]); }
        var m1 = W.P(b.x, (y0 + y1) / 2, 0.33), m2 = W.P(b.x + b.w, (y0 + y1) / 2, 0.33);
        ctx.moveTo(m1[0], m1[1]); ctx.lineTo(m2[0], m2[1]);
        ctx.stroke();
        var g = frac(t * 0.25 + r * 0.2) * 1.6 - 0.3;
        if (g > 0 && g < 1) {
          var a0 = ctx.globalAlpha; ctx.globalAlpha = a0 * 0.5 * Math.sin(g * Math.PI);
          var gx = b.x + b.w * g;
          fillPoly(ctx, [W.P(gx - 0.1, y1, 0.141), W.P(gx + 0.12, y1, 0.141), W.P(gx + 0.28, y0, 0.521), W.P(gx + 0.06, y0, 0.521)], "#FFFFFF");
          ctx.globalAlpha = a0;
        }
        void sp;
      });
    },
  };
  KIT.tree = {
    size: [1, 1], h: function (o) { return o.kind === "pine" ? 1.5 : o.kind === "bush" ? 0.5 : 1.3; }, shadow: "round",
    draw: function (W, ctx, t, o) {
      var cx = o.x + 0.5 + (o.ox || 0), cy = o.y + 0.5 + (o.oy || 0), sd = seedOf(o), sc = o.scale || 1;
      var greens = TREES[W.theme] || TREES.day, col = o.color || pick(greens, sd);
      var sw = Math.sin(t * 1.4 + sd) * 0.025;
      if (o.kind === "pine") {
        W.cyl(cx, cy, 0, 0.3 * sc, 0.06 * sc, "#9A6B4F", { noTop: true });
        W.cone(cx, cy, 0.2 * sc, 1.0 * sc, 0.36 * sc, col);
        W.cone(cx + sw, cy, 0.62 * sc, 1.5 * sc, 0.27 * sc, shade(col, 1.06));
      } else if (o.kind === "bush") {
        W.ball(cx, cy, 0.22 * sc, 0.26 * sc, col);
      } else {
        W.cyl(cx, cy, 0, 0.55 * sc, 0.06 * sc, "#9A6B4F", { noTop: true });
        W.ball(cx + sw, cy, 0.85 * sc, 0.36 * sc, col);
      }
    },
  };
  KIT.barn = {
    size: [2, 2], h: function () { return 1.5; },
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.22), H = 0.85, col = o.color || "#D9534F";
      W.box(b.x, b.y, 0, b.w, b.d, H, col);
      faceRect(W, b, 0, H, 2, 0.3, 0.7, 0, 0.75, "#FFFFFF");
      faceRect(W, b, 0, H, 2, 0.34, 0.66, 0.05, 0.7, shade(col, 0.85));
      W.gable(b.x - 0.07, b.y - 0.07, H, b.w + 0.14, b.d + 0.14, 0.6, "#6B4F45", "y", col);
    },
  };
  KIT.silo = {
    size: [1, 1], h: function () { return 2.1; },
    draw: function (W, ctx, t, o) {
      W.cyl(o.x + 0.5, o.y + 0.5, 0, 1.7, 0.36, o.color || "#E6E9F0", { bands: { n: 3, color: "#CDD3E0" }, noTop: true });
      W.dome(o.x + 0.5, o.y + 0.5, 1.7, 0.36, "#9AA6C4");
    },
  };
  KIT.tank = {
    size: [1, 1], h: function () { return 1.0; },
    draw: function (W, ctx, t, o) { W.cyl(o.x + 0.5, o.y + 0.5, 0, 0.9, 0.38, o.color || "#E9EEF5", { rim: "#C8CFDD" }); },
  };
  KIT.crane = {
    size: [1, 1], h: function () { return 3.3; }, fitH: 3.4, shadowH: 1.4,
    draw: function (W, ctx, t, o) {
      var cx = o.x + 0.5, cy = o.y + 0.5, H = 3.1, yel = "#FFC233", sd = seedOf(o);
      W.box(cx - 0.11, cy - 0.11, 0, 0.22, 0.22, H, yel, { edge: false });
      // lattice zigzag
      ctx.strokeStyle = shade(yel, 0.7); ctx.lineWidth = Math.max(0.6, W.K(0.02));
      ctx.beginPath();
      for (var i = 0; i < 9; i++) {
        var a = W.P(cx - 0.11, cy + 0.11, (i * H) / 9), b2 = W.P(cx + 0.11, cy + 0.11, ((i + 1) * H) / 9);
        ctx.moveTo(a[0], a[1]); ctx.lineTo(b2[0], b2[1]);
      }
      ctx.stroke();
      var ang = 0.9 * Math.sin(t * 0.45 + sd) + (o.angle || 0.6), ca = Math.cos(ang), sa = Math.sin(ang);
      var tipF = [cx + ca * 2.4, cy + sa * 2.4, H + 0.1], tipB = [cx - ca * 0.8, cy - sa * 0.8, H + 0.1];
      W.line3([tipB, [cx, cy, H + 0.1], tipF], yel, Math.max(1.5, W.K(0.1)), { cap: "butt" });
      W.line3([[cx, cy, H + 0.55], tipF], shade(yel, 0.7), Math.max(0.6, W.K(0.02)));
      W.line3([[cx, cy, H + 0.55], tipB], shade(yel, 0.7), Math.max(0.6, W.K(0.02)));
      W.box(tipB[0] - 0.15, tipB[1] - 0.15, H - 0.05, 0.3, 0.3, 0.22, "#8A92B2");
      W.box(cx - 0.16, cy - 0.16, H - 0.25, 0.32, 0.32, 0.3, "#FFFFFF");
      var tr = 1.2 + 0.6 * Math.sin(t * 0.7 + sd), hx = cx + ca * tr, hy = cy + sa * tr, hz = H - 0.8 - 0.4 * Math.sin(t * 0.9);
      W.line3([[hx, hy, H + 0.1], [hx, hy, hz]], W.pal.dark, Math.max(0.6, W.K(0.02)));
      W.box(hx - 0.12, hy - 0.12, hz - 0.22, 0.24, 0.24, 0.2, o.cargo || "#FF6F59");
    },
  };
  KIT.containers = {
    size: [2, 1], h: function () { return 0.9; },
    draw: function (W, ctx, t, o) {
      var sd = seedOf(o), cols = ["#E8584F", "#3E7BFA", "#1FB5A3", "#FFAE1F", "#8C6CF2"];
      var b = inset(o, 0.1);
      for (var lv = 0; lv < 2; lv++) {
        var n = lv ? 1 : 2;
        for (var i = 0; i < n; i++) {
          var c = cols[Math.floor(h01(sd + lv * 3 + i) * cols.length)];
          var bx = lv ? b.x + b.w * 0.25 : b.x + (i * b.w) / 2;
          W.box(bx + 0.02, b.y, lv * 0.42, b.w / 2 - 0.04, b.d, 0.4, c, { stripes: { n: 3, color: shade(c, 0.88) } });
        }
      }
    },
  };
  KIT.dockcrane = {
    size: [2, 2], h: function () { return 2.6; },
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.15), c = "#E8584F", H = 2.0;
      W.box(b.x, b.y, 0, 0.16, 0.16, H, c, { edge: false });
      W.box(b.x + b.w - 0.16, b.y, 0, 0.16, 0.16, H, c, { edge: false });
      W.box(b.x, b.y + b.d - 0.16, 0, 0.16, 0.16, H, c, { edge: false });
      W.box(b.x + b.w - 0.16, b.y + b.d - 0.16, 0, 0.16, 0.16, H, c, { edge: false });
      W.box(b.x - 0.05, b.y - 0.6, H, b.w + 0.1, b.d + 2.0, 0.22, shade(c, 1.05));
      W.box(b.x + b.w * 0.3, b.y + 0.2, H + 0.22, b.w * 0.4, 0.5, 0.3, "#FFFFFF");
      var ty = b.y + 0.4 + (Math.sin(t * 0.6) * 0.5 + 0.5) * (b.d + 0.6);
      W.line3([[b.x + b.w / 2, ty, H], [b.x + b.w / 2, ty, 0.9]], W.pal.dark, Math.max(0.6, W.K(0.025)));
      W.box(b.x + b.w / 2 - 0.25, ty - 0.12, 0.6, 0.5, 0.24, 0.28, "#3E7BFA");
    },
  };
  KIT.rocket = {
    size: [2, 2], h: function () { return 3.3; }, fitH: 3.6, shadowH: 1.0,
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.1), cx = o.x + o.w / 2, cy = o.y + o.d / 2;
      W.box(b.x, b.y, 0, b.w, b.d, 0.2, "#9AA3BF", { stripes: null });
      W.box(b.x + 0.1, b.y + 0.1, 0, 0.3, 0.3, 3.1, "#E8584F", { stripes: { n: 4, color: "#FFFFFF" }, edge: false });
      var L = o.launch != null ? o.launch : 1e9, up = t > L ? Math.pow(t - L, 2) * 1.6 : 0;
      var z0 = 0.25 + up;
      if (t > L) {
        smoke(W, cx, cy, 0.2, t, { n: 8, rate: 0.9, rise: 0.9, size: 0.3, grow: 0.7, color: "#FFFFFF", seed: 2 });
        var fl = 0.5 + 0.15 * Math.sin(t * 40);
        var f0 = W.P(cx - 0.18, cy, z0), f1 = W.P(cx + 0.18, cy, z0), f2 = W.P(cx, cy, z0 - fl * 1.6);
        ctx.fillStyle = "#FFB020"; ctx.beginPath(); ctx.moveTo(f0[0], f0[1]); ctx.lineTo(f2[0], f2[1]); ctx.lineTo(f1[0], f1[1]); ctx.fill();
        W.glow(cx, cy, z0 - 0.3, 0.8, "#FF8A3D", 0.9);
      }
      W.cyl(cx, cy, z0, z0 + 2.2, 0.3, "#F7F8FB", { bands: { n: 1, color: o.accent || "#3E7BFA" }, noTop: true });
      W.cone(cx, cy, z0 + 2.2, z0 + 3.0, 0.3, o.accent || "#E8584F");
      // fins
      var fins = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      fins.forEach(function (f) {
        var p = [[cx + f[0] * 0.28, cy + f[1] * 0.28, z0 + 0.7], [cx + f[0] * 0.62, cy + f[1] * 0.62, z0], [cx + f[0] * 0.28, cy + f[1] * 0.28, z0]];
        var sp = p.map(function (q) { return W.P(q[0], q[1], q[2]); });
        fillPoly(ctx, sp, W.lit(o.accent || "#E8584F", f[1], -f[0], 0) );
      });
      var wnd = W.P(cx + W.s * 0.29, cy + W.c * 0.29, z0 + 1.6);
      ctx.fillStyle = "#5EB3E6"; ctx.strokeStyle = "#FFFFFF"; ctx.lineWidth = Math.max(1, W.K(0.04));
      ctx.beginPath(); ctx.arc(wnd[0], wnd[1], W.K(0.1), 0, 6.2832); ctx.fill(); ctx.stroke();
    },
  };
  KIT.cloud = {
    size: [2, 2], h: function () { return 0.9; }, z: 2.8, shadow: "round", fitH: 1.3,
    draw: function (W, ctx, t, o) {
      var cx = o.x + o.w / 2, cy = o.y + o.d / 2, z = o.z + 0.05 * Math.sin(t * 1.1 + o.x);
      var col = o.color || (W.pal.night ? "#8B96CC" : "#FFFFFF"), sc = o.w / 2;
      var puffs = [[-0.55, 0.1, 0.0, 0.42], [0.5, 0.15, 0.0, 0.44], [0, 0.2, 0.1, 0.5], [-0.15, -0.3, 0.25, 0.48], [0.3, -0.2, 0.3, 0.42]];
      puffs.sort(function (a, b) { return a[1] * W.c + a[0] * W.s - (b[1] * W.c + b[0] * W.s); });
      puffs.forEach(function (p) { W.ball(cx + p[0] * sc, cy + p[1] * sc, z + 0.35 + p[2], p[3] * sc, col); });
      if (o.glyph) {
        var C = W.P(cx, cy, z + 0.6);
        ctx.fillStyle = o.glyphColor || "#3E7BFA"; ctx.font = "900 " + W.K(0.5).toFixed(1) + "px " + FONT; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(o.glyph, C[0], C[1]);
      }
    },
  };
  KIT.phone = {
    size: [2, 1], h: function () { return 2.4; },
    draw: function (W, ctx, t, o) {
      var bw = Math.min(1.3, o.w - 0.4), x0 = o.x + (o.w - bw) / 2, y0 = o.y + o.d / 2 - 0.12, H = 2.3, acc = o.accent || W.pal.accents[1];
      var b = { x: x0, y: y0, w: bw, d: 0.24 };
      W.box(x0, y0, 0.02, bw, 0.24, H, "#2B3150");
      if (W.faceVisible(2)) {
        faceRect(W, b, 0.02, H, 2, 0.06, 0.94, 0.04, 0.96, "#EEF5FF");
        faceRect(W, b, 0.02, H, 2, 0.06, 0.94, 0.84, 0.96, acc);
        for (var r = 0; r < 4; r++) {
          faceRect(W, b, 0.02, H, 2, 0.14, 0.3, 0.66 - r * 0.15, 0.76 - r * 0.15, W.pal.accents[(r + 2) % 6]);
          faceRect(W, b, 0.02, H, 2, 0.36, 0.86, 0.7 - r * 0.15, 0.74 - r * 0.15, "#C9D3E6");
        }
        var bub = frac(t * 0.35);
        if (bub < 0.7) {
          var a0 = ctx.globalAlpha; ctx.globalAlpha = a0 * Math.min(1, bub * 6) * (1 - Math.max(0, bub - 0.55) / 0.15);
          var C = W.P(x0 + bw * 0.85, y0 + 0.24, 0.02 + H * 0.92 + bub * 0.5);
          ctx.fillStyle = "#FF4D4D"; ctx.beginPath(); ctx.arc(C[0], C[1], W.K(0.16), 0, 6.2832); ctx.fill();
          ctx.globalAlpha = a0;
        }
      } else faceRect(W, b, 0.02, H, 0, 0.35, 0.65, 0.8, 0.9, "#555E86");
    },
  };
  KIT.laptop = {
    size: [2, 2], h: function () { return 1.3; },
    draw: function (W, ctx, t, o) {
      var b = inset(o, 0.15), acc = o.accent || W.pal.accents[2];
      W.box(b.x, b.y + 0.3, 0, b.w, b.d - 0.3, 0.08, "#C9CFDD");
      W.flat([[b.x + 0.12, b.y + 0.4], [b.x + b.w - 0.12, b.y + 0.4], [b.x + b.w - 0.12, b.y + b.d - 0.5], [b.x + 0.12, b.y + b.d - 0.5]], 0.081, "#9AA3BF");
      var y0 = b.y + 0.32, top = 1.25, back = 0.28;
      var scr = [[b.x, y0, 0.08], [b.x + b.w, y0, 0.08], [b.x + b.w, y0 - back, top], [b.x, y0 - back, top]];
      var l = Math.sqrt(back * back + (top - 0.08) * (top - 0.08)), n = [0, (top - 0.08) / l, back / l];
      if (W.visN(n[0], n[1], n[2])) {
        W.face(scr, n, "#2B3150", true);
        var ins = function (u0, u1, v0, v1) {
          return [[b.x + b.w * u0, y0 - back * v0, 0.08 + (top - 0.08) * v0], [b.x + b.w * u1, y0 - back * v0, 0.08 + (top - 0.08) * v0], [b.x + b.w * u1, y0 - back * v1, 0.08 + (top - 0.08) * v1], [b.x + b.w * u0, y0 - back * v1, 0.08 + (top - 0.08) * v1]];
        };
        fillPoly(ctx, ins(0.05, 0.95, 0.08, 0.92).map(function (q) { return W.P(q[0], q[1] + 0.01, q[2]); }), "#EEF5FF");
        fillPoly(ctx, ins(0.05, 0.95, 0.8, 0.92).map(function (q) { return W.P(q[0], q[1] + 0.012, q[2]); }), acc);
        // tiny bar chart on the screen
        for (var i = 0; i < 4; i++) {
          var hh = 0.15 + 0.4 * (0.5 + 0.5 * Math.sin(t * 1.5 + i * 1.3));
          fillPoly(ctx, ins(0.15 + i * 0.18, 0.27 + i * 0.18, 0.16, 0.16 + hh).map(function (q) { return W.P(q[0], q[1] + 0.014, q[2]); }), W.pal.accents[i % 6]);
        }
      } else W.face(scr, [0, -n[1], -n[2]], "#C9CFDD", true);
    },
  };
  KIT.fountain = {
    size: [2, 2], h: function () { return 0.5; }, shadow: false,
    draw: function (W, ctx, t, o) {
      var cx = o.x + o.w / 2, cy = o.y + o.d / 2;
      W.cyl(cx, cy, 0, 0.22, 0.75, "#E6E1D8", { rim: W.pal.water });
      W.cyl(cx, cy, 0.22, 0.6, 0.08, "#E6E1D8");
      ctx.fillStyle = W.pal.foam;
      for (var i = 0; i < 14; i++) {
        var ph = frac(t * 0.8 + i / 14), a = (i / 14) * Math.PI * 2;
        var r = ph * 0.55, z = 0.6 + ph * 0.9 - ph * ph * 1.3;
        var C = W.P(cx + Math.cos(a) * r, cy + Math.sin(a) * r, Math.max(0.2, z));
        ctx.beginPath(); ctx.arc(C[0], C[1], W.K(0.04), 0, 6.2832); ctx.fill();
      }
    },
  };
  KIT.lamp = {
    size: [1, 1], h: function () { return 1.0; }, shadow: "round", shadowR: 0.06,
    draw: function (W, ctx, t, o) {
      var cx = o.x + 0.5 + (o.ox || 0), cy = o.y + 0.5 + (o.oy || 0);
      W.line3([[cx, cy, 0], [cx, cy, 0.95]], W.pal.dark, Math.max(1, W.K(0.04)));
      W.ball(cx, cy, 0.98, 0.07, W.pal.night ? "#FFE28A" : "#F4F6FA");
      if (W.pal.night) W.glow(cx, cy, 0.98, 0.6, "#FFD970", 0.7);
    },
  };
  KIT.bench = {
    size: [1, 1], h: function () { return 0.3; },
    draw: function (W, ctx, t, o) { W.box(o.x + 0.2, o.y + 0.38, 0.12, 0.6, 0.24, 0.06, "#B57C55"); W.box(o.x + 0.2, o.y + 0.38, 0.18, 0.6, 0.05, 0.16, "#B57C55"); },
  };
  KIT.block = {
    size: [1, 1], h: function (o) { return o.height != null ? o.height : 1; },
    draw: function (W, ctx, t, o) { W.box(o.x + (o.pad || 0), o.y + (o.pad || 0), o.z, o.w - 2 * (o.pad || 0), o.d - 2 * (o.pad || 0), o.h, o.color || W.pal.accents[0], { top: o.top, win: o.win }); },
  };

  /** Place a building. type: see ISO.buildingTypes(). o: {w,d,floors,color,roof,accent,style,at,anim,label,...} */
  World.prototype.building = function (type, x, y, o) {
    o = o || {};
    var K = KIT[type] || KIT.house;
    var ob = {};
    for (var k in o) ob[k] = o[k];
    ob.type = KIT[type] ? type : "house";
    ob.x = num(x, 0); ob.y = num(y, 0);
    ob.w = num(o.w, K.size[0]); ob.d = num(o.d, K.size[1]);
    ob.z = num(o.z, K.z || 0);
    ob.h = K.h(ob);
    if (K.fitH) ob.fitH = K.fitH;
    if (K.shadowH) ob.shadowH = K.shadowH;
    if (K.shadow != null && o.shadow == null) ob.shadow = K.shadow;
    if (K.shadowR) ob.shadowR = K.shadowR;
    ob.draw = K.draw;
    this.add(ob);
    if (o.at != null) ISO.appear(ob, o.at, o.anim || "rise", o.dur);
    if (o.label) this.label(ob, o.label, { at: o.labelAt != null ? o.labelAt : (o.at || 0) + 0.35, color: o.labelColor, value: o.value });
    return ob;
  };
  World.prototype.tree = function (x, y, o) { o = o || {}; return this.building("tree", x, y, o); };
  /** Extruded block (generic box object). o: {w,d,h,z,color,top,at,anim} */
  World.prototype.block = function (x, y, o) {
    o = o || {};
    var ob = this.add({ x: x, y: y, w: num(o.w, 1), d: num(o.d, 1), z: num(o.z, 0), h: num(o.h, 1), color: o.color, top: o.top, pad: o.pad || 0, win: o.win, draw: KIT.block.draw, shadow: o.shadow });
    if (o.at != null) ISO.appear(ob, o.at, o.anim || "rise", o.dur);
    return ob;
  };

  // ───────────────────────── life: people, vehicles, flows ─────────────────────────
  function drawPerson(W, ctx, t, x, y, z, o, moving, dirScreen) {
    var B = W.P(x, y, z), H = clamp(W.K(0.56) * HS, u(9), u(58)), sd = o.seed || 0;
    var shirt = o.color || pick(W.pal.shirts, sd), skin = pick(W.pal.skin, sd + 3), pants = W.pal.night ? "#2A3050" : "#3A4166";
    var ph = t * (o.cadence || 9) + sd * 3;
    var sw = moving ? Math.sin(ph) : 0, bob = moving ? Math.abs(Math.cos(ph)) * H * 0.03 : 0;
    var by = B[1] - bob, flip = dirScreen < 0 ? -1 : 1;
    ctx.lineCap = "round";
    ctx.strokeStyle = pants; ctx.lineWidth = Math.max(1.4, H * 0.11);
    ctx.beginPath();
    ctx.moveTo(B[0], by - H * 0.42); ctx.lineTo(B[0] + sw * H * 0.13, B[1]);
    ctx.moveTo(B[0], by - H * 0.42); ctx.lineTo(B[0] - sw * H * 0.13, B[1]);
    ctx.stroke();
    // arms
    ctx.strokeStyle = shade(shirt, 0.85); ctx.lineWidth = Math.max(1.2, H * 0.08);
    ctx.beginPath();
    if (o.wave) {
      var wv = Math.sin(t * 7 + sd) * 0.4;
      ctx.moveTo(B[0] + flip * H * 0.08, by - H * 0.72); ctx.lineTo(B[0] + flip * H * (0.22 + wv * 0.1), by - H * 1.0);
    } else {
      ctx.moveTo(B[0], by - H * 0.72); ctx.lineTo(B[0] - sw * H * 0.12, by - H * 0.46);
    }
    ctx.stroke();
    // body
    var bw = H * 0.28, top = by - H * 0.8, bh = H * 0.42;
    ctx.fillStyle = shirt;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(B[0] - bw / 2, top, bw, bh, bw * 0.45); else ctx.rect(B[0] - bw / 2, top, bw, bh);
    ctx.fill();
    ctx.fillStyle = skin;
    ctx.beginPath(); ctx.arc(B[0], by - H * 0.9, H * 0.13, 0, 6.2832); ctx.fill();
    if (o.hair !== false) {
      ctx.fillStyle = pick(["#3A2A22", "#6B4532", "#2B2B3A", "#C98B4A"], sd + 5);
      ctx.beginPath(); ctx.arc(B[0], by - H * 0.93, H * 0.13, Math.PI * 1.05, Math.PI * 1.95); ctx.fill();
    }
    if (!moving && !o.wave) {
      ctx.strokeStyle = shade(shirt, 0.85); ctx.lineWidth = Math.max(1.2, H * 0.08);
      ctx.beginPath(); ctx.moveTo(B[0], by - H * 0.72); ctx.lineTo(B[0] + H * 0.12, by - H * 0.48); ctx.stroke();
    }
  }
  ISO.drawPerson = drawPerson;

  /** A person walking along a path of [x,y] points. o: {speed, phase, mode:loop|pingpong|once, color, at, closed, wave} */
  World.prototype.walker = function (pts, o) {
    o = o || {};
    var W = this, path = new Path(pts, o.closed);
    var speed = num(o.speed, 0.42), phase = num(o.phase, h01(W.objs.length * 1.7)), mode = o.mode || (o.closed ? "loop" : "pingpong");
    var seed = o.seed != null ? o.seed : W.objs.length * 2.3;
    var ob = W.add({ w: 0.22, d: 0.22, h: 0.55, shadow: "round", shadowR: 0.1, layer: 1, color: o.color, seed: seed, wave: o.wave });
    ob.update = function (t) {
      var tt = Math.max(0, t - (o.at || 0));
      var p = path.at(path.dist(tt, speed, phase, mode));
      ob.px = p.x; ob.py = p.y; ob.pz = p.z;
      ob.x = p.x - 0.11; ob.y = p.y - 0.11; ob.z = p.z;
      var prev = path.at(path.dist(Math.max(0, tt - 0.05), speed, phase, mode));
      ob.sdir = (p.x - prev.x) * W.c - (p.y - prev.y) * W.s;
      ob.moving = path.L > 0.01 && mode !== "still" && !(mode === "once" && tt * speed >= path.L);
    };
    ob.draw = function (W2, ctx, t) { drawPerson(W2, ctx, t, ob.px, ob.py, ob.pz, ob, ob.moving, ob.sdir || 1); };
    if (o.at != null) ISO.appear(ob, o.at, "pop", 0.4);
    return ob;
  };
  /** A small crowd of standing/idle people around (x,y). */
  World.prototype.crowd = function (x, y, n, o) {
    o = o || {};
    var out = [];
    for (var i = 0; i < (n || 4); i++) {
      var a = h01(x * 3 + y * 5 + i) * 6.28, r = 0.25 + h01(i * 7 + x) * (o.spread || 0.6);
      var px = x + Math.cos(a) * r, py = y + Math.sin(a) * r;
      out.push(this.walker([[px, py], [px + Math.cos(a + 1.5) * 0.4, py + Math.sin(a + 1.5) * 0.4]], { speed: o.speed != null ? o.speed : 0.12, at: o.at != null ? o.at + i * 0.08 : undefined, wave: o.wave && i % 2 === 0, seed: x * 11 + y * 3 + i }));
    }
    return out;
  };

  /** Vehicle along a path (usually road centre-line points). o: {kind: car|truck|bus|van|boat|ship, speed, phase, color, lane, mode, at, cargo} */
  World.prototype.vehicle = function (pts, o) {
    o = o || {};
    var W = this, path = new Path(pts, o.closed);
    var kind = o.kind || "car";
    var dims = { car: [0.6, 0.32, 0.3], van: [0.7, 0.34, 0.36], truck: [0.95, 0.36, 0.42], bus: [1.15, 0.38, 0.42], boat: [0.9, 0.42, 0.3], ship: [2.4, 0.8, 0.8] }[kind] || [0.6, 0.32, 0.3];
    var speed = num(o.speed, kind === "ship" ? 0.35 : kind === "boat" ? 0.5 : 1.1), phase = num(o.phase, h01(W.objs.length * 3.3)), mode = o.mode || (o.closed ? "loop" : "pingpong");
    var lane = num(o.lane, kind === "ship" || kind === "boat" ? 0 : 0.2);
    var color = o.color || pick(W.pal.cars, W.objs.length * 1.9);
    var ob = W.add({ w: dims[0], d: dims[1], h: dims[2], layer: 1, kind: kind, color: color, shadowInset: 0.02 });
    ob.update = function (t) {
      var tt = Math.max(0, t - (o.at || 0));
      var p = path.at(path.dist(tt, speed, phase, mode));
      var ahead = path.at(path.dist(tt + 0.04, speed, phase, mode));
      var dx = ahead.x - p.x, dy = ahead.y - p.y;
      if (Math.abs(dx) + Math.abs(dy) < 1e-6) { dx = p.dx; dy = p.dy; if (mode === "pingpong" && path.dist(tt + 0.04, speed, phase, mode) < path.dist(tt, speed, phase, mode)) { dx = -dx; dy = -dy; } }
      var l = Math.sqrt(dx * dx + dy * dy) || 1; dx /= l; dy /= l;
      var cx = p.x - dy * lane, cy = p.y + dx * lane;
      var alongX = Math.abs(dx) >= Math.abs(dy);
      ob.dir = alongX ? (dx > 0 ? 0 : 2) : dy > 0 ? 1 : 3;
      ob.w = alongX ? dims[0] : dims[1]; ob.d = alongX ? dims[1] : dims[0];
      ob.x = cx - ob.w / 2; ob.y = cy - ob.d / 2; ob.z = p.z || 0;
    };
    ob.draw = drawVehicle;
    if (o.at != null) ISO.appear(ob, o.at, "pop", 0.4);
    if (o.cargo) ob.cargo = o.cargo;
    return ob;
  };
  World.prototype.car = function (pts, o) { o = o || {}; o.kind = o.kind || "car"; return this.vehicle(pts, o); };
  World.prototype.truck = function (pts, o) { o = o || {}; o.kind = "truck"; return this.vehicle(pts, o); };
  World.prototype.boat = function (pts, o) { o = o || {}; o.kind = o.kind || "boat"; return this.vehicle(pts, o); };

  /** local box in vehicle space: along = 0..1 front→back fraction, across 0..1 */
  function vbox(W, o, a0, a1, c0, c1, z, h, col, opt) {
    var x, y, w, d, L = o.dir % 2 === 0 ? o.w : o.d, Wd = o.dir % 2 === 0 ? o.d : o.w;
    var f0 = a0 * L, f1 = a1 * L, s0 = c0 * Wd, s1 = c1 * Wd;
    if (o.dir === 0) { x = o.x + o.w - f1; w = f1 - f0; y = o.y + s0; d = s1 - s0; }
    else if (o.dir === 2) { x = o.x + f0; w = f1 - f0; y = o.y + o.d - s1; d = s1 - s0; }
    else if (o.dir === 1) { y = o.y + o.d - f1; d = f1 - f0; x = o.x + o.w - s1; w = s1 - s0; }
    else { y = o.y + f0; d = f1 - f0; x = o.x + s0; w = s1 - s0; }
    return W.box(x, y, o.z + z, w, d, h, col, opt);
  }
  function vpoint(o, a, c) {
    var L = o.dir % 2 === 0 ? o.w : o.d, Wd = o.dir % 2 === 0 ? o.d : o.w, f = a * L, s = c * Wd;
    if (o.dir === 0) return [o.x + o.w - f, o.y + s];
    if (o.dir === 2) return [o.x + f, o.y + o.d - s];
    if (o.dir === 1) return [o.x + o.w - s, o.y + o.d - f];
    return [o.x + s, o.y + f];
  }
  function drawVehicle(W, ctx, t, o) {
    var col = o.color, glass = W.pal.night ? "#FFE9A8" : "#BFE6FA", k = o.kind;
    if (k === "boat" || k === "ship") {
      var pts = [vpoint(o, 0, 0.5), vpoint(o, 0.22, 0), vpoint(o, 1, 0.08), vpoint(o, 1, 0.92), vpoint(o, 0.22, 1)];
      // wake
      var a0 = ctx.globalAlpha;
      ctx.globalAlpha = a0 * 0.7;
      var wk = [vpoint(o, 1, 0.1), vpoint(o, 1.6 + 0.1 * Math.sin(t * 3), -0.4), vpoint(o, 1.6 + 0.1 * Math.sin(t * 3), 1.4), vpoint(o, 1, 0.9)];
      fillPoly(ctx, wk.map(function (q) { return W.P(q[0], q[1], -0.1); }), W.pal.foam);
      ctx.globalAlpha = a0;
      var hullC = k === "ship" ? "#3A4166" : "#FFFFFF";
      W.prism(pts, o.z - 0.1, o.z + (k === "ship" ? 0.3 : 0.16), hullC, { top: k === "ship" ? "#C9CFDD" : "#E9C9A0" });
      if (k === "ship") {
        var cc = ["#E8584F", "#3E7BFA", "#1FB5A3", "#FFAE1F"];
        for (var i = 0; i < 4; i++) vbox(W, o, 0.25 + i * 0.13, 0.37 + i * 0.13, 0.15, 0.85, 0.3, 0.26 + (i % 2) * 0.22, cc[i]);
        vbox(W, o, 0.82, 0.96, 0.2, 0.8, 0.3, 0.5, "#FFFFFF", { win: { rows: 1, cols: 3, faces: [0, 1, 2, 3] } });
      } else {
        vbox(W, o, 0.45, 0.8, 0.2, 0.8, 0.16, 0.18, "#FFFFFF");
        vbox(W, o, 0.47, 0.7, 0.25, 0.75, 0.34, 0.06, col);
      }
      return;
    }
    if (k === "truck") {
      vbox(W, o, 0, 0.3, 0.06, 0.94, 0.04, 0.3, col, { edge: false });
      vbox(W, o, 0.02, 0.18, 0.1, 0.9, 0.2, 0.1, glass, { edge: false });
      vbox(W, o, 0.33, 1, 0, 1, 0.04, 0.4, o.cargo || "#F4F6FA", { edge: false });
    } else if (k === "bus") {
      vbox(W, o, 0, 1, 0, 1, 0.04, 0.38, col, { edge: false, win: { rows: 1, ribbon: true, color: glass, vpad: 0.3 } });
    } else {
      vbox(W, o, 0, 1, 0, 1, 0.04, 0.15, col, { edge: false });
      vbox(W, o, 0.25, 0.78, 0.08, 0.92, 0.19, 0.12, glass, { edge: false, top: col });
    }
    if (W.pal.night) { var hp = vpoint(o, -0.15, 0.5); W.glow(hp[0], hp[1], o.z + 0.1, 0.45, "#FFE9A8", 0.8); }
  }

  /** Data packets / goods flowing along a 3D polyline. o: {color, speed, count, at, width, pipe, size, overlay, grow} */
  World.prototype.flow = function (pts, o) {
    o = o || {};
    var path = new Path(pts.map(function (q) { return [q[0], q[1], q[2] || 0]; }));
    var color = o.color || this.pal.accents[1];
    var at = num(o.at, 0), grow = num(o.grow, 0.7), speed = num(o.speed, 1.6), count = Math.max(1, Math.round(num(o.count, Math.max(2, path.L / 1.2))));
    var elevated = o.overlay != null ? o.overlay : pts.some(function (q) { return (q[2] || 0) > 0.05; });
    var fn = function (W, ctx, t) {
      if (t < at) return;
      var g = prog(t, at, grow, "inOutCubic"), Lg = path.L * g;
      if (o.pipe !== false) {
        var pp = [], steps = Math.max(2, Math.ceil(pts.length * 1.0));
        for (var i = 0; i < path.p.length; i++) if (path.cum[i] <= Lg) pp.push(path.p[i]);
        var e = path.at(Lg); pp.push([e.x, e.y, e.z]);
        void steps;
        W.line3(pp, rgba(o.pipeColor || shade(color, 0.7), elevated ? 0.5 : 0.35), Math.max(2, W.K(num(o.width, 0.16))));
        W.line3(pp, rgba(color, elevated ? 0.6 : 0.5), Math.max(1, W.K(num(o.width, 0.16) * 0.35)));
      }
      if (g < 1 && o.pipe !== false) return;
      var a0 = ctx.globalAlpha;
      for (var k = 0; k < count; k++) {
        var s = frac(((t - at) * speed) / path.L + k / count) * path.L;
        var p = path.at(s), fade = Math.min(1, s / 0.4, (path.L - s) / 0.4);
        ctx.globalAlpha = a0 * clamp(fade, 0, 1);
        if (o.goods) {
          W._f = null;
          W.box(p.x - 0.14, p.y - 0.14, p.z + 0.05, 0.28, 0.28, 0.24, o.goods === true ? "#E9B872" : o.goods, { edge: false });
        } else {
          W.glow(p.x, p.y, p.z + 0.08, num(o.size, 0.32), color, 1);
          var C = W.P(p.x, p.y, p.z + 0.08);
          ctx.fillStyle = "#FFFFFF";
          ctx.beginPath(); ctx.arc(C[0], C[1], Math.max(1.5, W.K(num(o.size, 0.32) * 0.22)), 0, 6.2832); ctx.fill();
        }
      }
      ctx.globalAlpha = a0;
    };
    (elevated ? this.over : this.ground).push(fn);
    return { path: path, draw: fn };
  };
  /** Elevated arc between two ground points (data in the air). */
  World.prototype.arc = function (a, b, o) {
    o = o || {};
    var hgt = num(o.height, 2.2), za = num(a[2], 0), zb = num(b[2], 0), pts = [];
    for (var i = 0; i <= 16; i++) { var f = i / 16; pts.push([lerp(a[0], b[0], f), lerp(a[1], b[1], f), lerp(za, zb, f) + Math.sin(f * Math.PI) * hgt]); }
    o.overlay = true;
    return this.flow(pts, o);
  };

  /** Drifting clouds above the world with ground shadows. */
  World.prototype.clouds = function (n, o) {
    o = o || {};
    var W = this, list = [];
    for (var i = 0; i < (n || 3); i++) list.push({ x0: h01(i * 5.1 + 2) , y: W.oy0 + W.rows * (0.15 + 0.7 * h01(i * 3.3 + 1)), z: num(o.z, 5) + h01(i) * 1.2, s: 0.7 + h01(i * 9.1) * 0.6, sp: 0.12 + h01(i * 2.2) * 0.08 });
    function pos(c, t) { var span = W.cols + 8; return W.ox0 - 4 + frac(c.x0 + (t * c.sp) / span) * span; }
    W.ground.push(function (W2, ctx, t) {
      if (!W2.island) return;
      ctx.fillStyle = W2.pal.shadow;
      list.forEach(function (c) {
        var x = pos(c, t), sx = x + W2.shx * 1.2, sy = c.y + W2.shy * 1.2, C = W2.P(sx, sy, 0), R = W2.K(1.1 * c.s);
        var inside = clamp(Math.min(sx - W2.ox0, W2.ox0 + W2.cols - sx, sy - W2.oy0, W2.oy0 + W2.rows - sy) / 1.6, 0, 1);
        if (inside <= 0) return;
        var a0 = ctx.globalAlpha; ctx.globalAlpha = a0 * 0.45 * edgeFade(x) * inside;
        ctx.beginPath(); ctx.ellipse(C[0], C[1], R, R * 0.45, 0, 0, 6.2832); ctx.fill();
        ctx.globalAlpha = a0;
      });
    });
    function edgeFade(x) { return clamp(Math.min(x - (W.ox0 - 3), W.ox0 + W.cols + 3 - x) / 2.5, 0, 1); }
    W.over.push(function (W2, ctx, t) {
      list.forEach(function (c) {
        var x = pos(c, t), col = W2.pal.cloud;
        var a0 = ctx.globalAlpha; ctx.globalAlpha = a0 * 0.92 * edgeFade(x);
        var parts = [[-0.6, 0, 0.45], [0, -0.1, 0.62], [0.6, 0.05, 0.42], [0.25, 0.25, 0.4]];
        parts.forEach(function (q) {
          var C = W2.P(x + q[0] * c.s, c.y + q[1] * c.s, c.z), R = W2.K(q[2] * c.s);
          ctx.fillStyle = shade(col, 0.9); ctx.beginPath(); ctx.arc(C[0] + R * 0.06, C[1] + R * 0.1, R, 0, 6.2832); ctx.fill();
        });
        parts.forEach(function (q) {
          var C = W2.P(x + q[0] * c.s, c.y + q[1] * c.s, c.z), R = W2.K(q[2] * c.s);
          ctx.fillStyle = col; ctx.beginPath(); ctx.arc(C[0], C[1], R * 0.94, 0, 6.2832); ctx.fill();
        });
        ctx.globalAlpha = a0;
      });
    });
    return W;
  };
  /** Plane flying a loop above the world. */
  World.prototype.plane = function (pts, o) {
    o = o || {};
    var W = this, path = new Path(pts.map(function (q) { return [q[0], q[1], num(q[2], 5.5)]; }), o.closed !== false);
    var speed = num(o.speed, 1.6), phase = num(o.phase, 0);
    function st(t) { var s = path.dist(t, speed, phase, "loop"), p = path.at(s); return p; }
    W.ground.push(function (W2, ctx, t) {
      var p = st(t), C = W2.P(p.x + W2.shx * 2, p.y + W2.shy * 2, 0);
      ctx.fillStyle = W2.pal.shadow; ctx.beginPath(); ctx.ellipse(C[0], C[1], W2.K(0.4), W2.K(0.14), 0, 0, 6.2832); ctx.fill();
    });
    W.over.push(function (W2, ctx, t) {
      var p = st(t), nose = W2.P(p.x + p.dx * 0.45, p.y + p.dy * 0.45, p.z), tail = W2.P(p.x - p.dx * 0.45, p.y - p.dy * 0.45, p.z);
      var wl = W2.P(p.x - p.dy * 0.55, p.y + p.dx * 0.55, p.z), wr = W2.P(p.x + p.dy * 0.55, p.y - p.dx * 0.55, p.z), c = W2.P(p.x, p.y, p.z);
      ctx.fillStyle = "#E3E8F2";
      ctx.beginPath(); ctx.moveTo(wl[0], wl[1]); ctx.lineTo(c[0], c[1]); ctx.lineTo(wr[0], wr[1]); ctx.lineTo(tail[0] * 0.3 + c[0] * 0.7, tail[1] * 0.3 + c[1] * 0.7); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = "#FFFFFF"; ctx.lineCap = "round"; ctx.lineWidth = Math.max(2, W2.K(0.16));
      ctx.beginPath(); ctx.moveTo(tail[0], tail[1]); ctx.lineTo(nose[0], nose[1]); ctx.stroke();
      ctx.fillStyle = o.color || W2.pal.accents[0];
      ctx.beginPath(); ctx.arc(tail[0], tail[1] - W2.K(0.08), Math.max(1.5, W2.K(0.07)), 0, 6.2832); ctx.fill();
    });
  };
  /** Expanding ground ring(s) at (x,y) — "this one!" highlight. */
  World.prototype.ping = function (x, y, o) {
    o = o || {};
    var at = num(o.at, 0), color = o.color || this.pal.accents[0], n = o.repeat || 2, r = num(o.radius, 1.2);
    this.ground.push(function (W, ctx, t) {
      if (t < at) return;
      for (var i = 0; i < n; i++) {
        var p = (t - at - i * 0.45) / 1.3;
        if (o.loop) p = frac((t - at) / 1.6 + i / n);
        if (p < 0 || p > 1) continue;
        var C = W.P(x, y, 0.02), R = W.K(r * (0.3 + p));
        ctx.strokeStyle = rgba(color, (1 - p) * 0.9);
        ctx.lineWidth = Math.max(1.5, W.K(0.07));
        ctx.beginPath(); ctx.ellipse(C[0], C[1], R, R * 0.5, 0, 0, 6.2832); ctx.stroke();
      }
    });
  };
  /** Text painted flat on the ground plane (reads left→right whatever the camera angle). o: {size (world units), color, at, weight, align} */
  World.prototype.groundText = function (x, y, text, o) {
    o = o || {};
    var at = num(o.at, 0), size = num(o.size, 0.7), txt = plain(text), color = o.color || this.pal.ink;
    this.ground.push(function (W, ctx, t) {
      if (t < at) return;
      var p = prog(t, at, 0.5, "outCubic");
      var P0 = W.P(x, y, 0.02), ex = W.P(x + W.tax[0], y + W.tax[1], 0.02), ey = W.P(x + W.tay[0], y + W.tay[1], 0.02);
      var sc = (size / 100) * (0.6 + 0.4 * p);
      ctx.save();
      ctx.globalAlpha *= p;
      ctx.setTransform((ex[0] - P0[0]) * sc, (ex[1] - P0[1]) * sc, (ey[0] - P0[0]) * sc, (ey[1] - P0[1]) * sc, P0[0], P0[1]);
      ctx.font = (o.weight || 900) + " 100px " + FONT;
      ctx.textAlign = o.align || "center"; ctx.textBaseline = "middle";
      ctx.fillStyle = rgba(color, 0.92);
      ctx.fillText(txt, 0, 0);
      ctx.restore();
    });
  };

  // ───────────────────────── labels (floating callouts) ─────────────────────────
  var MEAS = {};
  function measure(ctx, font, s) { var k = font + "|" + s, m = MEAS[k]; if (m == null) { ctx.font = font; m = MEAS[k] = ctx.measureText(s).width; } return m; }
  function wrap(ctx, font, text, maxW, maxLines) {
    var words = str(text).split(/\s+/).filter(Boolean), lines = [], cur = "";
    for (var i = 0; i < words.length; i++) {
      var tryS = cur ? cur + " " + words[i] : words[i];
      if (measure(ctx, font, tryS) <= maxW || !cur) cur = tryS;
      else { lines.push(cur); cur = words[i]; }
    }
    if (cur) lines.push(cur);
    if (lines.length > maxLines) { lines = lines.slice(0, maxLines); lines[maxLines - 1] = lines[maxLines - 1].replace(/\s*\S*$/, "") + "…"; }
    return lines;
  }
  function rrect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
    else { ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
  }
  ISO.rrect = rrect;
  function fmtVal(v, o) {
    o = o || {};
    var d = o.decimals != null ? o.decimals : Math.abs(v) < 10 && Math.round(v) !== v ? 1 : 0;
    return str(o.prefix) + V.format(v, d) + str(o.suffix);
  }
  ISO.formatValue = fmtVal;

  /**
   * Floating callout with a leader line. anchor: object | [x,y,z] | function(t)->[x,y,z].
   * o: {at, until, color, sub, value:{from,to,prefix,suffix,decimals,dur}, lift (px@1080), size, side:-1|0|1, icon}
   */
  World.prototype.label = function (anchor, text, o) {
    o = o || {};
    var L = { anchor: anchor, text: plain(text), o: o, at: num(o.at, 0), lay: null };
    this.labels.push(L);
    return L;
  };
  World.prototype.anchorPos = function (a) {
    if (typeof a === "function") return a(this.t);
    if (a && a.footprint) {
      var st = a._st || { zs: 1, zo: 0 };
      var hh = a.labelH != null ? a.labelH : a.fitH != null ? Math.min(a.fitH, a.h + 0.6) : a.h;
      return [a.x + a.w / 2, a.y + a.d / 2, a.z + st.zo + hh * st.zs];
    }
    return [num(a && a[0], 0), num(a && a[1], 0), num(a && a[2], 0)];
  };
  World.prototype.drawLabels = function (t) {
    var W = this, ctx = W.ctx, P = W.pal;
    var list = W.labels.filter(function (L) { return t >= L.at && !(L.o.until != null && t > L.o.until + 0.4); });
    var m = u(18), items = [], topM = Math.max(m, W.o.labelTop != null ? W.o.labelTop * V.height : W.vp.y * 0.92);
    list.forEach(function (L) {
      var o = L.o, sz = num(o.size, 1);
      var fs = u(27 * sz), vfs = u(42 * sz), pad = u(14 * sz);
      var font = "800 " + fs.toFixed(1) + "px " + FONT, vfont = "900 " + vfs.toFixed(1) + "px " + FONT;
      if (!L.lay) {
        var maxW = u(o.maxWidth || (V.isPortrait ? 300 : 340)) * sz;
        var lines = L.text ? wrap(ctx, font, L.text, maxW, 2) : [];
        var tw = 0;
        lines.forEach(function (s) { tw = Math.max(tw, measure(ctx, font, s)); });
        var vw = 0;
        if (o.big != null && !o.value) {
          o.big = plain(o.big);
          while (measure(ctx, vfont, o.big) > maxW * 1.15 && vfs > u(18)) { vfs *= 0.9; vfont = "900 " + vfs.toFixed(1) + "px " + FONT; }
          vw = measure(ctx, vfont, o.big) * 1.04;
        }
        if (o.value) { var big = fmtVal(Math.max(Math.abs(num(o.value.to, 0)), Math.abs(num(o.value.from, 0))) * (num(o.value.to, 0) < 0 ? -1 : 1), o.value); vw = measure(ctx, vfont, big) * 1.04; }
        var hasBig = !!(o.value || o.big != null);
        var dot = lines.length && !hasBig ? fs * 0.75 : 0;
        L.lay = { lines: lines, w: Math.max(tw + dot, vw) + pad * 2, h: pad * 1.6 + lines.length * fs * 1.18 + (hasBig ? vfs * 1.05 : 0), dot: dot, vfs: vfs, vfont: vfont, hasBig: hasBig, fs: fs, font: font, pad: pad };
      }
      var lay = L.lay;
      var p = prog(t, L.at, 0.6), pLine = clamp(p / 0.45, 0, 1), pCard = prog(t, L.at + 0.18, 0.5, "outBack");
      var out = 1;
      if (o.until != null && t > o.until) out = 1 - clamp((t - o.until) / 0.4, 0, 1);
      var a3 = W.anchorPos(L.anchor), A = W.P(a3[0], a3[1], a3[2]);
      var bobY = Math.sin(t * 1.6 + L.at * 3) * u(3);
      var lift = u(num(o.lift, 70)) * pLine;
      var cx = A[0] + (o.side || 0) * u(40), cy = A[1] - lift + bobY;
      items.push({ L: L, lay: lay, A: A, cx: cx, x: clamp(cx - lay.w / 2, m, V.width - m - lay.w), y: clamp(cy - lay.h, topM, V.height - m - lay.h), pCard: pCard, out: out, wgt: o.plain ? 0 : clamp(pCard, 0, 1) * out });
    });
    // relax overlapping cards (continuous: push scaled by how "present" both cards are)
    var gap = u(10);
    for (var it = 0; it < 6; it++) {
      for (var i = 0; i < items.length; i++) for (var j = i + 1; j < items.length; j++) {
        var A1 = items[i], B1 = items[j], w = Math.min(A1.wgt, B1.wgt);
        if (w <= 0) continue;
        var ox = Math.min(A1.x + A1.lay.w, B1.x + B1.lay.w) + gap - Math.max(A1.x, B1.x);
        var oy = Math.min(A1.y + A1.lay.h, B1.y + B1.lay.h) + gap - Math.max(A1.y, B1.y);
        if (ox <= 0 || oy <= 0) continue;
        if (ox < oy * 1.4) {
          var dx = (ox / 2) * w * (A1.x + A1.lay.w / 2 <= B1.x + B1.lay.w / 2 ? 1 : -1);
          A1.x -= dx; B1.x += dx;
        } else {
          var dy = (oy / 2) * w * (A1.y + A1.lay.h / 2 <= B1.y + B1.lay.h / 2 ? 1 : -1);
          A1.y -= dy; B1.y += dy;
        }
      }
      items.forEach(function (q) { q.x = clamp(q.x, m, V.width - m - q.lay.w); q.y = clamp(q.y, topM, V.height - m - q.lay.h); });
    }
    items.forEach(function (q) {
      var L = q.L, o = L.o, lay = q.lay, A = q.A, x1 = q.x, y1 = q.y, pCard = q.pCard, fs = lay.fs, pad = lay.pad;
      var a0 = ctx.globalAlpha;
      ctx.globalAlpha = a0 * q.out;
      var col = o.color || P.accents[0];
      var lx = clamp(q.cx, x1 + u(16), x1 + lay.w - u(16)), ly = y1 + lay.h;
      ctx.strokeStyle = rgba(P.night ? "#FFFFFF" : P.ink, 0.55);
      ctx.lineWidth = Math.max(1.2, u(2.4));
      ctx.lineCap = "round";
      if (o.plain) {
        ctx.font = lay.font; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.globalAlpha = a0 * q.out * clamp(pCard, 0, 1);
        ctx.lineWidth = u(7); ctx.strokeStyle = rgba(P.card, 0.85); ctx.lineJoin = "round";
        lay.lines.forEach(function (ln, i) { var yy = A[1] + (i - (lay.lines.length - 1) / 2) * fs * 1.1; ctx.strokeText(ln, A[0], yy); ctx.fillStyle = o.color || P.ink; ctx.fillText(ln, A[0], yy); });
        ctx.globalAlpha = a0;
        return;
      }
      if (ly < A[1] - u(4)) { ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(lx, ly - u(2)); ctx.stroke(); }
      ctx.fillStyle = "#FFFFFF"; ctx.beginPath(); ctx.arc(A[0], A[1], u(6.5), 0, 6.2832); ctx.fill();
      ctx.fillStyle = col; ctx.beginPath(); ctx.arc(A[0], A[1], u(4), 0, 6.2832); ctx.fill();
      if (pCard > 0.001) {
        var s = Math.max(0.001, pCard);
        ctx.save();
        ctx.translate(lx, ly); ctx.scale(s, s); ctx.translate(-lx, -ly);
        ctx.fillStyle = rgba(P.night ? "#000010" : P.shadeInk, 0.16);
        rrect(ctx, x1 + u(4), y1 + u(6), lay.w, lay.h, u(14)); ctx.fill();
        ctx.fillStyle = P.card;
        rrect(ctx, x1, y1, lay.w, lay.h, u(14)); ctx.fill();
        ctx.fillStyle = col;
        rrect(ctx, x1, y1 + lay.h - u(6), lay.w, u(6), [0, 0, u(14), u(14)]); ctx.fill();
        var ty = y1 + pad * 0.8;
        ctx.textBaseline = "top";
        if (lay.hasBig) {
          var vtxt = o.value ? fmtVal(lerp(num(o.value.from, 0), num(o.value.to, 0), prog(t, L.at + 0.15, num(o.value.dur, 1.2), "outCubic")), o.value) : o.big;
          ctx.font = lay.vfont; ctx.fillStyle = col; ctx.textAlign = "center";
          ctx.fillText(vtxt, x1 + lay.w / 2, ty);
          ty += lay.vfs * 1.05;
        }
        ctx.font = lay.font; ctx.fillStyle = "#283050"; ctx.textAlign = lay.hasBig ? "center" : "left";
        lay.lines.forEach(function (ln, i) {
          var tx = lay.hasBig ? x1 + lay.w / 2 : x1 + pad + lay.dot;
          ctx.fillText(ln, tx, ty + i * fs * 1.18);
        });
        if (lay.dot) { ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x1 + pad + lay.dot * 0.35, ty + fs * 0.55, fs * 0.22, 0, 6.2832); ctx.fill(); }
        ctx.restore();
      }
      ctx.globalAlpha = a0;
    });
  };

  // ───────────────────────── block font (3D letters) ─────────────────────────
  var GLYPHS = {
    A: "01110100011000111111100011000110001", B: "11110100011000111110100011000111110", C: "01110100011000010000100001000101110", D: "11110100011000110001100011000111110",
    E: "11111100001000011110100001000011111", F: "11111100001000011110100001000010000", G: "01110100011000010111100011000101111", H: "10001100011000111111100011000110001",
    I: "01110001000010000100001000010001110", J: "00111000100001000010000101001001100", K: "10001100101010011000101001001010001", L: "10000100001000010000100001000011111",
    M: "10001110111010110101100011000110001", N: "10001100011100110101100111000110001", O: "01110100011000110001100011000101110", P: "11110100011000111110100001000010000",
    Q: "01110100011000110001101011001001101", R: "11110100011000111110101001001010001", S: "01111100001000001110000010000111110", T: "11111001000010000100001000010000100",
    U: "10001100011000110001100011000101110", V: "10001100011000110001100010101000100", W: "10001100011000110101101011010101010", X: "10001100010101000100010101000110001",
    Y: "10001100010101000100001000010000100", Z: "11111000010001000100010001000011111",
    "0": "01110100011001110101110011000101110", "1": "00100011000010000100001000010001110", "2": "01110100010000100010001000100011111", "3": "11111000100010000010000011000101110",
    "4": "00010001100101010010111110001000010", "5": "11111100001111000001000011000101110", "6": "00110010001000011110100011000101110", "7": "11111000010001000100010000100001000",
    "8": "01110100011000101110100011000101110", "9": "01110100011000101111000010001001100",
    "!": "00100001000010000100001000000000100", "?": "01110100010000100010001000000000100", ".": "00000000000000000000000000110001100", "-": "00000000000000011111000000000000000",
    "+": "00000001000010011111001000010000000", "%": "11000110010001000100010001001100011", $: "00100011111010001110001011111000100", "&": "01100100101010001000101011001001101",
    "'": "00100001000100000000000000000000000", ",": "00000000000000000000011000010001000", ":": "00000011000110000000011000110000000",
  };
  ISO.blockGlyphs = GLYPHS;
  function glyphRows(ch) {
    var g = GLYPHS[ch];
    if (!g) return null;
    var rows = [];
    for (var r = 0; r < 7; r++) rows.push(g.slice(r * 5, r * 5 + 5));
    return rows;
  }
  function cleanBlockText(s) {
    s = str(s);
    try { s = s.normalize("NFD").replace(/[̀-ͯ]/g, ""); } catch (e) {}
    return s.toUpperCase().replace(/[^A-Z0-9!?.\-+%$&',: ]/g, "").replace(/\s+/g, " ").trim();
  }
  ISO.cleanBlockText = cleanBlockText;
  /** Width in cells of block text. */
  ISO.blockTextWidth = function (text) {
    var s = cleanBlockText(text), w = 0;
    for (var i = 0; i < s.length; i++) w += (s[i] === " " ? 3 : 5) + (i < s.length - 1 ? 1 : 0);
    return w;
  };
  /**
   * Standing 3D block letters along +x, starting at (x,y). o: {depth, at, stagger, colors[], unit (cell size), z}
   * Returns letter objects.
   */
  World.prototype.blockText = function (text, x, y, o) {
    o = o || {};
    var W = this, s = cleanBlockText(text), cx = x, cell = num(o.unit, 1), depth = num(o.depth, 1.1) * cell;
    var at = num(o.at, 0.2), stagger = num(o.stagger, 0.12), colors = o.colors || W.pal.accents, out = [];
    var li = 0;
    for (var i = 0; i < s.length; i++) {
      var ch = s[i];
      if (ch === " ") { cx += 4 * cell; continue; }
      var rows = glyphRows(ch);
      if (!rows) continue;
      var col = colors[li % colors.length], tAt = at + li * stagger;
      for (var r = 0; r < 7; r++) {
        var c = 0;
        while (c < 5) {
          if (rows[r][c] !== "1") { c++; continue; }
          var c0 = c;
          while (c < 5 && rows[r][c] === "1") c++;
          var ob = W.block(cx + c0 * cell, y, { z: num(o.z, 0) + (6 - r) * cell, w: (c - c0) * cell, d: depth, h: cell, color: col, shadow: r === 6 ? undefined : false });
          ob.fitH = 7 * cell;
          ISO.appear(ob, tAt + (6 - r) * 0.012, o.anim || "drop", 0.95);
          ob.noDust = r !== 6;
          out.push(ob);
        }
      }
      li++;
      cx += 6 * cell;
    }
    return out;
  };

  // ───────────────────────── DOM overlay: headline / caption ─────────────────────────
  /** Scene-level framing: viewport (fractions) for the world, leaving room for a headline. */
  ISO.layout = function (hasHead, pos) {
    if (!hasHead) return { x: 0.02, y: 0.04, w: 0.96, h: 0.92 };
    if (pos === "bottom") {
      if (V.isPortrait) return { x: 0.02, y: 0.12, w: 0.96, h: 0.62 };
      return { x: 0.03, y: 0.03, w: 0.94, h: 0.72 };
    }
    if (V.isPortrait) return { x: 0.02, y: 0.21, w: 0.96, h: 0.66 };
    if (V.isSquare) return { x: 0.03, y: 0.2, w: 0.94, h: 0.77 };
    return { x: 0.02, y: 0.1, w: 0.96, h: 0.88 };
  };
  /** Headline block: {kicker, title, sub, at, pos: top|bottom}. Returns the element. */
  ISO.head = function (root, o, tl) {
    o = o || {};
    if (!o.title && !o.kicker && !o.sub) return null;
    tl = tl || V.timeline();
    var at = num(o.at, 0.1);
    var h = el("div.iso-head" + (o.pos === "bottom" ? ".is-bottom" : ""), { parent: root });
    if (o.kicker) { var k = el("div.iso-kicker", { parent: h }); el("span.iso-cube", { parent: k }); el("span", { parent: k, text: plain(o.kicker) }); }
    var ti = null, sb = null;
    if (o.title) { ti = el("div.iso-title", { parent: h }); ti.appendChild(S.rich(o.title)); }
    if (o.sub) sb = el("div.iso-sub", { parent: h, text: plain(o.sub) });
    try {
      if (ti) V.fit(ti, { maxLines: o.maxLines || 2, min: u(30) });
      if (sb) V.fit(sb, { maxLines: 2, min: u(20) });
    } catch (e) {}
    var kids = [].slice.call(h.children);
    tl.fromTo(kids, { opacity: 0, y: u(26) }, { opacity: 1, y: 0 }, { at: clampT(at), dur: 0.7, stagger: 0.12, ease: "outCubic" });
    return h;
  };
  /** Bottom caption chip (keyword / takeaway). */
  ISO.caption = function (root, text, at, tl, o) {
    o = o || {};
    if (!text) return null;
    tl = tl || V.timeline();
    var c = el("div.iso-caption", { parent: root });
    c.appendChild(S.rich(text));
    try { V.fit(c, { maxLines: 2, min: u(22) }); } catch (e) {}
    tl.fromTo(c, { opacity: 0, y: u(30), scale: 0.92 }, { opacity: 1, y: 0, scale: 1 }, { at: clampT(at), dur: 0.6, ease: "outBack" });
    if (o.until != null) tl.to(c, { opacity: 0 }, { at: o.until, dur: 0.4 });
    return c;
  };

  /** Gentle living camera: slow orbit (±deg) + push-in. */
  ISO.breathe = function (W, o) {
    o = o || {};
    var b = W.cam.base, y0 = num(b.yaw, 45), sway = num(o.sway, 6);
    W.camera.set({ yaw: y0 - sway / 2 });
    W.camera.to({ yaw: y0 + sway / 2 }, 0, V.duration, "inOutSine");
    if (o.zoom !== 0) W.camera.to({ zoom: num(b.zoom, 1) * (1 + num(o.zoom, 0.05)) }, num(o.zoomAt, 0), num(o.zoomDur, V.duration), "inOutSine");
    return W;
  };

  // ───────────────────────── town generator ─────────────────────────
  /** Grid town layout: cross roads + 2×2 lots + edge strips. */
  ISO.townLayout = function (cols, rows, o) {
    o = o || {};
    var rx = o.rx != null ? o.rx : Math.floor(cols / 2), ry = o.ry != null ? o.ry : Math.floor(rows / 2);
    var lots = [], used = {}, strips = [];
    function q(x0, x1, y0, y1, dx, dy, qi) {
      // fill from the road side outward
      var xs = [], ys = [], x, y;
      if (dx < 0) for (x = x1 - 2; x >= x0; x -= 2) xs.push(x); else for (x = x0; x + 2 <= x1; x += 2) xs.push(x);
      if (dy < 0) for (y = y1 - 2; y >= y0; y -= 2) ys.push(y); else for (y = y0; y + 2 <= y1; y += 2) ys.push(y);
      ys.forEach(function (yy) { xs.forEach(function (xx) {
        lots.push({ x: xx, y: yy, w: 2, d: 2, q: qi, dist: Math.abs(xx + 1 - rx - 0.5) + Math.abs(yy + 1 - ry - 0.5) });
        for (var i = 0; i < 2; i++) for (var j = 0; j < 2; j++) used[(xx + i) + "," + (yy + j)] = 1;
      }); });
    }
    var hasV = o.vertical !== false, hasH = o.horizontal !== false;
    var ex = hasV ? rx : cols, ey = hasH ? ry : rows;
    q(0, ex, 0, ey, -1, -1, 0);
    if (hasV) q(rx + 1, cols, 0, ey, 1, -1, 1);
    if (hasH) q(0, ex, ry + 1, rows, -1, 1, 2);
    if (hasV && hasH) q(rx + 1, cols, ry + 1, rows, 1, 1, 3);
    for (var x = 0; x < cols; x++) for (var y = 0; y < rows; y++) {
      if (used[x + "," + y] || (hasV && x === rx) || (hasH && y === ry)) continue;
      strips.push({ x: x, y: y });
    }
    lots.sort(function (a, b) { return a.dist - b.dist || a.y - b.y || a.x - b.x; });
    var roads = [];
    if (hasH) roads.push([[0, ry], [cols - 1, ry]]);
    if (hasV) roads.push([[rx, 0], [rx, rows - 1]]);
    return { rx: rx, ry: ry, lots: lots, strips: strips, roads: roads };
  };
  var MIX = {
    homes: ["house", "house", "trees", "house", "cottages"],
    shops: ["shop", "house", "shop", "park"],
    downtown: ["tower", "office", "tower", "shop"],
    towers: ["tower", "tower", "office", "tower"],
    industry: ["factory", "warehouse", "tanks", "factory"],
    tech: ["datacenter", "office", "servers", "solar"],
    green: ["solar", "turbines", "park", "trees"],
    farm: ["farm", "barnyard", "farm", "trees"],
    civic: ["school", "hospital", "bank", "park"],
    village: ["cottages", "trees", "house", "cottages"],
    port: ["portyard", "warehouse", "containers", "portyard"],
  };
  ISO.districts = Object.keys(MIX);
  /** Fill a 2×2 lot with a kind (building type or a group like trees/park/farm). Returns the main object (for labels). */
  ISO.fillLot = function (W, lot, kind, o) {
    o = o || {};
    var at = o.at, x = lot.x, y = lot.y, sd = x * 7 + y * 13, main = null, i;
    function ap(ob, dt) { if (at != null) ISO.appear(ob, at + (dt || 0), o.anim || "rise", o.dur); return ob; }
    function tr(px, py, kd, dt, sc) { return ap(W.tree(px, py, { kind: kd, ox: (h01(sd + px * 3 + py) - 0.5) * 0.3, oy: (h01(sd + py * 5 + px) - 0.5) * 0.3, scale: sc }), dt); }
    switch (kind) {
      case "trees":
        for (i = 0; i < 4; i++) main = tr(x + (i % 2), y + Math.floor(i / 2), h01(sd + i) > 0.55 ? "pine" : "round", i * 0.06);
        break;
      case "park":
        W.area(x, y, x + 2, y + 2, "park", at);
        main = ap(W.building("fountain", x, y, {}));
        break;
      case "cottages":
        main = ap(W.building("cottage", x, y, {}));
        ap(W.building("cottage", x + 1, y + 1, {}), 0.1);
        tr(x + 1, y, "round", 0.15, 0.8);
        tr(x, y + 1, "bush", 0.2);
        break;
      case "turbines":
        main = ap(W.building("turbine", x, y, { speed: 2 + h01(sd) }));
        ap(W.building("turbine", x + 1, y + 1, { speed: 2.4 }), 0.15);
        break;
      case "farm":
        W.area(x, y, x + 2, y + 2, h01(sd) > 0.5 ? "field" : "crop", at);
        main = ap(W.add({ x: x, y: y, w: 2, d: 2, h: 0.05, shadow: false, draw: function () {} }));
        break;
      case "barnyard":
        main = ap(W.building("barn", x, y, {}));
        break;
      case "tanks":
        main = ap(W.building("tank", x, y, {}));
        ap(W.building("tank", x + 1, y, {}), 0.1);
        ap(W.building("silo", x + 1, y + 1, {}), 0.2);
        tr(x, y + 1, "bush", 0.25);
        break;
      case "servers":
        for (i = 0; i < 4; i++) { var sv = ap(W.building("server", x + (i % 2), y + Math.floor(i / 2), {}), i * 0.08); if (!main) main = sv; }
        break;
      case "containers":
        main = ap(W.building("containers", x, y, {}));
        ap(W.building("containers", x, y + 1, {}), 0.12);
        break;
      case "portyard":
        main = ap(W.building("dockcrane", x, y, {}));
        break;
      default:
        main = ap(W.building(KIT[kind] ? kind : "house", x, y, { w: 2, d: 2, floors: kind === "tower" ? 5 + Math.floor(h01(sd) * 5) : kind === "office" ? 3 + Math.floor(h01(sd + 1) * 2) : undefined, smoke: kind === "house" && h01(sd) > 0.6 }));
    }
    return main;
  };
  /** Cars on every road + walkers on the sidewalks. */
  ISO.townLife = function (W, lay, o) {
    o = o || {};
    var cars = num(o.cars, 2), walkers = num(o.walkers, 4), k = 0;
    lay.roads.forEach(function (r, ri) {
      var pts = W.road(r, { at: o.roadAt });
      for (var i = 0; i < cars; i++) W.car(pts, { phase: h01(ri * 7 + i * 3), speed: 0.9 + h01(i + ri) * 0.6, kind: i === 1 && ri === 0 && o.bus !== false ? "bus" : i === 2 ? "truck" : "car", at: o.carAt });
      for (i = 0; i < walkers / Math.max(1, lay.roads.length); i++) {
        var side = i % 2 ? 0.44 : -0.44;
        var wp = pts.map(function (q) { return ri === 0 ? [q[0], q[1] + side] : [q[0] + side, q[1]]; });
        W.walker(wp, { phase: h01(ri * 5 + i * 1.3 + 0.5), speed: 0.35 + h01(i * 2.2) * 0.2, seed: k++ * 3 + 1, at: o.walkAt });
      }
    });
  };

  // ───────────────────────── templates ─────────────────────────
  var T = (ISO.templates = {});
  function themeOf(p, d) { return PALS[p && p.theme] ? p.theme : d || "day"; }
  function keyOf(it) { return it && it.keyword ? str(it.keyword) : S.autoKey(plain(it && (it.label || it.text || ""))); }
  function syncList(items, o) { return S.syncTimes(items.map(keyOf), o); }
  function headFor(root, p, tl, o) {
    o = o || {};
    return ISO.head(root, { kicker: p.kicker, title: p.title, sub: p.subtitle, at: o.at != null ? o.at : 0.1, pos: o.pos }, tl);
  }
  function accent(W, i) { return W.pal.accents[((i % W.pal.accents.length) + W.pal.accents.length) % W.pal.accents.length]; }

  // ── iso-title: a word built from falling 3D blocks on a little street
  T["iso-title"] = function (root, p, tl) {
    var theme = themeOf(p);
    var maxC = V.isPortrait ? 7 : V.isSquare ? 8 : 11;
    var bt = cleanBlockText(p.blockText || "");
    function fromWords(s) {
      var ws = cleanBlockText(s).split(" ").filter(Boolean), out = "";
      for (var i = 0; i < ws.length; i++) { var nx = out ? out + " " + ws[i] : ws[i]; if (nx.length <= maxC) out = nx; else break; }
      if (out) return out;
      var best = "";
      ws.forEach(function (w) { if (w.length <= maxC && w.length > best.length) best = w; });
      return best || (ws[0] || "").slice(0, maxC);
    }
    if (!bt || bt.length > maxC) bt = fromWords(bt || p.title || "") || fromWords(p.title || "") || "HELLO";
    var tw = Math.max(5, ISO.blockTextWidth(bt));
    var cols = tw + 4, rows = 8;
    var hasHead = !!(p.title || p.subtitle);
    var W = ISO.world(root, { theme: theme, cols: cols, rows: rows, viewport: ISO.layout(hasHead, "bottom"), headroom: 0.3, fill: 0.95, maxFitH: 99, crop: 1 });
    var n = bt.replace(/ /g, "").length;
    W.blockText(bt, 2, 1.1, { at: 0.3, stagger: Math.min(0.14, 1.6 / Math.max(1, n)) });
    var road = W.road([[0, 4], [cols - 1, 4]]);
    W.car(road, { phase: 0.1 });
    W.car(road, { kind: "bus", phase: 0.6, speed: 0.8 });
    if (cols > 18) W.car(road, { kind: "truck", phase: 0.35, speed: 0.9 });
    for (var x = 1; x < cols - 1; x += 3) {
      W.building("lamp", x, 3, { oy: 0.25 });
      if (h01(x) > 0.35) W.tree(x + 1, 6, { kind: h01(x * 3) > 0.5 ? "round" : "pine" });
      else W.building("bench", x + 1, 5, {});
    }
    W.tree(0, 6, { kind: "pine" });
    W.tree(cols - 1, 5, { kind: "round" });
    for (var i = 0; i < Math.min(6, Math.round(cols / 4)); i++) W.walker([[1 + i * 3.3, 5.5], [cols - 1.5, 5.5]], { phase: h01(i * 3.7), speed: 0.4 + 0.15 * h01(i) });
    W.clouds(3, { z: 8.5 });
    W.camera.set({ zoom: 1.0, yaw: 26 });
    ISO.breathe(W, { sway: 7, zoom: 0.04 });
    if (p.kicker) ISO.head(root, { kicker: p.kicker, at: 0.15 }, tl);
    if (hasHead) ISO.head(root, { title: p.title, sub: p.subtitle, at: Math.min(0.5 + n * 0.12, V.duration * 0.45), pos: "bottom" }, tl);
  };

  // ── city-grows: districts rise as the narration moves through milestones
  T["city-grows"] = function (root, p, tl) {
    var theme = themeOf(p);
    var ms = arr(p.milestones).slice(0, 6).filter(function (m) { return m && (m.label || m.keyword); });
    if (!ms.length) ms = [{ label: "Village" }, { label: "Town" }, { label: "City" }];
    var cols = 14, rows = 12;
    var W = ISO.world(root, { theme: theme, cols: cols, rows: rows, viewport: ISO.layout(!!p.title), headroom: 1.4 });
    var lay = ISO.townLayout(cols, rows);
    var times = syncList(ms, { start: 0.6 });
    var defaultKinds = ["homes", "shops", "downtown", "industry", "tech", "green"];
    // lots → groups (inner lots first)
    var lots = lay.lots.slice(), per = Math.max(1, Math.floor(lots.length / ms.length));
    var labelled = [];
    ms.forEach(function (m, i) {
      var kind = MIX[m.kind] ? m.kind : defaultKinds[i % defaultKinds.length];
      var group = lots.slice(i * per, i === ms.length - 1 ? lots.length : (i + 1) * per);
      var t0 = times[i], best = null, bestH = -1;
      group.forEach(function (lot, j) {
        var mix = MIX[kind], kd = mix[(j + i) % mix.length];
        var ob = ISO.fillLot(W, lot, kd, { at: t0 + j * Math.min(0.12, 0.9 / group.length) });
        if (ob && ob.h > bestH && ob.type !== "tree") { best = ob; bestH = ob.h; }
      });
      if (best) {
        var nxt = times[i + 1];
        labelled.push(W.label(best, m.label, { at: t0 + 0.35, color: accent(W, i), big: m.year != null ? m.year : undefined, until: ms.length > 4 && nxt != null ? nxt + 1.4 : undefined, lift: 60 + (i % 2) * 40 }));
        W.ping(best.x + best.w / 2, best.y + best.d / 2, { at: t0, color: accent(W, i), radius: 1.6 });
      }
    });
    lay.strips.forEach(function (c, k) { if (h01(c.x * 3 + c.y * 7) > 0.35) W.tree(c.x, c.y, { kind: h01(k) > 0.6 ? "pine" : h01(k + 3) > 0.5 ? "round" : "bush" }); });
    lay.roads.forEach(function (r, ri) { W.road(r, { at: 0.15 + ri * 0.3, dur: 0.9 }); });
    ISO.townLife(W, lay, { cars: 2, walkers: 6, carAt: times[0], walkAt: times[0] });
    // a construction crane hovers where the next district will rise
    if (ms.length > 1 && lots.length > per) {
      var cl = lots[Math.min(lots.length - 1, per)];
      var crane = W.building("crane", cl.x + 1, cl.y, { at: times[0] + 0.3, anim: "rise" });
      ISO.leave(crane, times[Math.min(ms.length - 1, 1)] - 0.2, 0.5);
    }
    W.clouds(2);
    var last = times[times.length - 1];
    W.camera.set({ zoom: 1.32, yaw: 41 });
    W.camera.to({ zoom: 1.0, yaw: 49 }, 0.2, Math.max(1.5, last + 0.8), "inOutSine");
    W.camera.to({ yaw: 52 }, last + 1, Math.max(0.5, V.duration - last - 1), "inOutSine");
    headFor(root, p, tl);
  };

  // ── iso-bar-chart: columns (or buildings / stacked cubes) rise on their key words
  T["iso-bar-chart"] = function (root, p, tl) {
    var theme = themeOf(p);
    var bars = arr(p.bars).slice(0, 7).map(function (b) { return { label: plain(b && b.label), value: num(b && b.value, 0), keyword: b && b.keyword }; });
    if (bars.length < 1) bars = [{ label: "A", value: 3 }, { label: "B", value: 5 }];
    var n = bars.length, style = p.style === "buildings" || p.style === "stacks" ? p.style : "columns";
    var gap = 2.4, cols = Math.ceil(n * gap + 1.4), rows = 5;
    var maxV = Math.max.apply(null, bars.map(function (b) { return Math.abs(b.value); })) || 1;
    var Hmax = V.isPortrait ? 5.2 : 4.6;
    var W = ISO.world(root, { theme: theme, cols: cols, rows: rows, viewport: ISO.layout(!!p.title), headroom: 1.3, fill: 0.95, maxFitH: 99 });
    var times = syncList(bars, { start: 0.7 });
    var hi = p.highlight != null ? clamp(Math.round(num(p.highlight, -1)), -1, n - 1) : -1;
    var fmt = p.valueFormat || {};
    W.area(0, 3, cols, 4, "road");
    var rp = W.road([[0, 3], [cols - 1, 3]]);
    W.car(rp, { phase: 0.2, kind: "truck" });
    W.car(rp, { phase: 0.7 });
    bars.forEach(function (b, i) {
      var x = 1 + i * gap, y = 0.7, h = Math.max(0.1, (Math.abs(b.value) / maxV) * Hmax), col = i === hi || hi < 0 ? accent(W, i) : mix(accent(W, i), "#C9CFDD", 0.55);
      var t0 = times[i], ob;
      W.area(Math.floor(x) - 0, 0, Math.floor(x) + 2, 3, "plaza");
      if (style === "stacks") {
        var cubes = Math.max(1, Math.round(h / 0.5)), ch = h / cubes;
        for (var c = 0; c < cubes; c++) {
          var cb = W.block(x, y, { w: 1.4, d: 1.4, z: c * ch, h: ch - 0.04, color: c % 2 ? shade(col, 0.94) : col });
          ISO.appear(cb, t0 + c * Math.min(0.09, 0.8 / cubes), "drop", 0.7);
          cb.noDust = c > 0;
          ob = cb;
        }
        ob = { footprint: true, x: x, y: y, w: 1.4, d: 1.4, z: 0, h: h };
      } else if (style === "buildings") {
        ob = W.add({ x: x, y: y, w: 1.4, d: 1.4, h: h, color: col, draw: function (Wd, ctx, t, o) {
          var fl = Math.max(1, Math.round(o.h / 0.42));
          Wd.box(o.x, o.y, 0, o.w, o.d, o.h, o.color, { win: { rows: fl, cols: 2, color: shade(o.color, 1.25) } });
          Wd.box(o.x + 0.3, o.y + 0.3, o.h, o.w - 0.6, o.d - 0.6, 0.12, Wd.pal.metal);
        } });
        ISO.appear(ob, t0, "rise", 0.9);
      } else {
        ob = W.add({ x: x, y: y, w: 1.4, d: 1.4, h: h, color: col, draw: function (Wd, ctx, t, o) {
          Wd.box(o.x, o.y, 0, o.w, o.d, 0.12, shade(o.color, 0.8));
          Wd.box(o.x + 0.08, o.y + 0.08, 0.12, o.w - 0.16, o.d - 0.16, Math.max(0.01, o.h - 0.12), o.color, { stripes: o.h > 1.2 ? { n: Math.max(1, Math.round(o.h / 1.1)), color: shade(o.color, 1.06) } : null });
        } });
        ISO.appear(ob, t0, "rise", 1.0);
      }
      ob.labelH = h;
      W.label(ob, b.label, { at: t0 + 0.25, color: accent(W, i), value: { from: 0, to: b.value, prefix: fmt.prefix, suffix: fmt.suffix, decimals: fmt.decimals, dur: 0.9 }, lift: 34, size: n > 5 ? 0.85 : 1 });
      if (i === hi) W.ping(x + 0.7, y + 0.7, { at: t0 + 0.4, color: col, radius: 1.7, loop: true, repeat: 2 });
      W.walker([[x - 0.2, 2.4], [x + 1.6, 2.4]], { phase: h01(i * 2.1), speed: 0.3, at: t0 + 0.3 });
    });
    W.walker([[0.5, 4.5], [cols - 0.5, 4.5]], { speed: 0.5, phase: 0.3 });
    W.tree(0, 4, { kind: "round" });
    W.tree(cols - 1, 4, { kind: "pine" });
    W.camera.set({ zoom: 1.0 });
    ISO.breathe(W, { sway: 6, zoom: 0.04 });
    headFor(root, p, tl);
  };

  // ── stat-tower: a skyscraper builds floor by floor while the number counts up
  T["stat-tower"] = function (root, p, tl) {
    var theme = themeOf(p);
    var value = num(p.value, 0), cmp = p.compare && p.compare.value != null ? p.compare : null;
    var cols = 9, rows = 8;
    var hasHead = !!(p.title || p.context);
    var W = ISO.world(root, { theme: theme, cols: cols, rows: rows, viewport: ISO.layout(hasHead), headroom: 1.4, fill: 0.95, maxFitH: 99 });
    var key = p.keyword ? V.find(p.keyword) : null;
    var t0 = 0.5, t1 = Math.max(t0 + 1.4, Math.min(V.duration * 0.7, key != null ? key + 0.4 : t0 + Math.min(3.2, V.duration * 0.55)));
    var floors = 11, fh = 0.46, tx = 3, ty = 2.2, col = p.color && /^#/.test(p.color) ? p.color : accent(W, 1);
    W.area(2, 1, 7, 6, "plaza");
    W.building("lamp", 2, 5, {});
    W.building("lamp", 6, 1, {});
    var built = W.add({ x: tx, y: ty, w: 2.4, d: 2.4, h: floors * fh + 0.3, draw: function (Wd, ctx, t, o) {
      var pr = prog(t, t0, t1 - t0, "linear"), nf = pr * floors, full = Math.floor(nf), part = nf - full;
      Wd.box(o.x - 0.1, o.y - 0.1, 0, o.w + 0.2, o.d + 0.2, 0.18, shade(col, 0.75));
      if (full > 0) Wd.box(o.x, o.y, 0.18, o.w, o.d, full * fh, col, { win: { rows: full, cols: 2.2, color: shade(col, 1.3) } });
      if (part > 0.02 && full < floors) {
        var z = 0.18 + full * fh, dz = (1 - V.ease.outBounce(clamp(part * 1.25, 0, 1))) * 2.2;
        Wd.box(o.x, o.y, z + dz, o.w, o.d, fh, shade(col, 1.04), { win: { rows: 1, cols: 2.2, color: shade(col, 1.3) } });
      }
      if (pr >= 1) {
        Wd.box(o.x + 0.5, o.y + 0.5, 0.18 + floors * fh, o.w - 1, o.d - 1, 0.3, Wd.pal.metal);
        var a = prog(t, t1, 0.6), tip = 0.18 + floors * fh + 0.3;
        Wd.line3([[o.x + o.w / 2, o.y + o.d / 2, tip], [o.x + o.w / 2, o.y + o.d / 2, tip + 1.2 * a]], Wd.pal.dark, Math.max(1, Wd.K(0.05)));
        if (a >= 1 && blink(t, 3, 1.5)) Wd.glow(o.x + o.w / 2, o.y + o.d / 2, tip + 1.2, 0.3, "#FF4D4D", 1);
      }
    } });
    built.fitH = floors * fh + 1.6;
    built.labelH = floors * fh + 0.5;
    var crane = W.building("crane", 5.6, 1.4, { angle: 2.4, at: 0.1, anim: "rise" });
    ISO.leave(crane, t1 + 0.4, 0.6);
    W.label(built, p.label || "", { at: t0, color: col, value: { from: 0, to: value, prefix: p.prefix, suffix: p.suffix, decimals: p.decimals, dur: t1 - t0 }, size: 1.35, lift: 50, maxWidth: 380 });
    if (cmp) {
      var cv = num(cmp.value, 0), cf = Math.max(1, Math.min(floors, Math.round((Math.abs(cv) / (Math.abs(value) || 1)) * floors)));
      var other = W.add({ x: 6.2, y: 4.6, w: 1.6, d: 1.6, h: cf * fh + 0.18, draw: function (Wd, ctx, t, o) {
        Wd.box(o.x, o.y, 0, o.w, o.d, o.h, Wd.pal.walls[0] === "#8E93BF" ? "#7C84AE" : "#C9CFDD", { win: { rows: cf, cols: 2 } });
      } });
      var tc = Math.min(V.duration - 0.6, t1 + 0.4);
      ISO.appear(other, tc, "rise", 0.9);
      W.label(other, cmp.label || "", { at: tc + 0.3, color: W.pal.inkSoft, value: { from: 0, to: cv, prefix: p.prefix, suffix: p.suffix, decimals: p.decimals, dur: 0.8 }, size: 0.85, lift: 30 });
    }
    W.crowd(2.6, 5.6, 4, { at: 0.3, spread: 0.7 });
    W.walker([[0.5, 7.4], [8.5, 7.4]], { speed: 0.45 });
    W.walker([[1.4, 0.5], [1.4, 7.5]], { speed: 0.35, phase: 0.4 });
    [[0, 0], [8, 0], [0, 7], [8, 6], [7, 7], [1, 1]].forEach(function (c, i) { W.tree(c[0], c[1], { kind: i % 2 ? "pine" : "round" }); });
    W.clouds(2, { z: 7.5 });
    W.camera.set({ zoom: 1.0, z: null });
    ISO.breathe(W, { sway: 10, zoom: 0.05 });
    headFor(root, { title: p.title, subtitle: p.context }, tl);
  };

  // ── process-line: stations joined by conveyor belts with goods moving
  var STATION = { factory: "factory", warehouse: "warehouse", farm: "barn", shop: "shop", office: "office", lab: "datacenter", datacenter: "datacenter", server: "server", home: "house", house: "house", port: "warehouse", hospital: "hospital", school: "school", bank: "bank", mine: "tank", energy: "turbine", solar: "solar", phone: "phone", laptop: "laptop", cloud: "cloud", rocket: "rocket", tower: "tower" };
  ISO.stationKinds = Object.keys(STATION);
  T["process-line"] = function (root, p, tl) {
    var theme = themeOf(p);
    var steps = arr(p.steps).slice(0, 6).filter(Boolean);
    if (steps.length < 2) steps = [{ label: "Input" }, { label: "Output" }];
    var n = steps.length, twoRows = n > 3 && !V.isLandscape;
    var perRow = twoRows ? Math.ceil(n / 2) : n, sp = 4.6;
    var cols = perRow * sp + 1, rows = twoRows ? 11 : 6;
    var W = ISO.world(root, { theme: theme, cols: cols, rows: rows, viewport: ISO.layout(!!p.title), headroom: 1.6 });
    var times = syncList(steps, { start: 0.5 });
    var kinds = ["barn", "factory", "warehouse", "shop", "house", "office"];
    var pos = steps.map(function (s, i) {
      var r = twoRows && i >= perRow ? 1 : 0, c = r ? perRow - 1 - (i - perRow) : i;
      return { x: 1 + c * sp, y: r ? 6.6 : 1.4, r: r };
    });
    var itemC = { box: "#E9B872", crate: "#C98B55", data: null, leaf: "#7FCB61", parcel: "#E9B872", coin: "#F2B33D" }[p.item || "box"];
    steps.forEach(function (s, i) {
      var q = pos[i], k = STATION[s.kind] || kinds[i % kinds.length];
      W.area(q.x - 0.5, q.y - 0.4, q.x + 3, q.y + 3, "plaza");
      var b = W.building(k, q.x, q.y, { w: 2.4, d: 2.4, at: times[i], anim: i % 2 ? "drop" : "rise", accent: accent(W, i) });
      if (k === "turbine" || k === "server" || k === "cloud") b.w = b.d = 1.6;
      W.label(b, s.label, { at: times[i] + 0.3, color: accent(W, i), lift: 46 });
      W.ping(q.x + 1.2, q.y + 1.2, { at: times[i], color: accent(W, i), radius: 1.6 });
      if (i === 0) return;
      // conveyor from previous station
      var a = pos[i - 1], pts;
      var ay = a.y + 1.2, by = q.y + 1.2;
      if (a.r === q.r) pts = [[a.x + (q.x > a.x ? 2.3 : 0.1), ay, 0.32], [q.x + (q.x > a.x ? 0.1 : 2.3), by, 0.32]];
      else pts = [[a.x + 1.2, a.y + 2.3, 0.32], [a.x + 1.2, q.y + 0.1, 0.32]];
      var tb = times[i - 1] + 0.4;
      W.ground.push(function (Wd, ctx, t) {
        if (t < tb) return;
        var g = prog(t, tb, 0.7, "inOutCubic");
        var x0 = Math.min(pts[0][0], pts[1][0]) - 0.3, x1 = Math.max(pts[0][0], pts[1][0]) + 0.3, y0 = Math.min(pts[0][1], pts[1][1]) - 0.3, y1 = Math.max(pts[0][1], pts[1][1]) + 0.3;
        var alongX = Math.abs(pts[1][0] - pts[0][0]) > Math.abs(pts[1][1] - pts[0][1]);
        if (alongX) { var mx = pts[0][0] < pts[1][0] ? x0 + (x1 - x0) * g : x1 - (x1 - x0) * g; if (pts[0][0] < pts[1][0]) x1 = mx; else x0 = mx; }
        else { var my = pts[0][1] < pts[1][1] ? y0 + (y1 - y0) * g : y1 - (y1 - y0) * g; if (pts[0][1] < pts[1][1]) y1 = my; else y0 = my; }
        Wd.box(x0, y0, 0.0, x1 - x0, y1 - y0, 0.28, "#7C84A8", { top: "#3E4568", edge: false });
        // moving rollers
        ctx.strokeStyle = "rgba(255,255,255,0.22)"; ctx.lineWidth = Math.max(1, Wd.K(0.03));
        ctx.beginPath();
        var L = alongX ? x1 - x0 : y1 - y0, off = frac(t * 1.2) * 0.4;
        for (var s2 = off; s2 < L; s2 += 0.4) {
          var e1 = alongX ? Wd.P(x0 + s2, y0 + 0.05, 0.285) : Wd.P(x0 + 0.05, y0 + s2, 0.285), e2 = alongX ? Wd.P(x0 + s2, y1 - 0.05, 0.285) : Wd.P(x1 - 0.05, y0 + s2, 0.285);
          ctx.moveTo(e1[0], e1[1]); ctx.lineTo(e2[0], e2[1]);
        }
        ctx.stroke();
      });
      var fl = W.flow(pts, { at: tb + 0.5, speed: 1.0, count: Math.max(2, Math.round(sp / 1.1)), goods: itemC || false, pipe: false, color: accent(W, i), overlay: false });
      void fl;
    });
    // workers
    pos.forEach(function (q, i) { W.walker([[q.x - 0.3, q.y + 2.8], [q.x + 2.6, q.y + 2.8]], { phase: h01(i * 3.1), speed: 0.3, at: times[i] + 0.2 }); });
    for (var x = 0; x < cols; x += 2) if (h01(x * 1.7) > 0.4) W.tree(x, rows - 1, { kind: h01(x) > 0.5 ? "pine" : "round" });
    W.clouds(2);
    W.camera.set({ zoom: 1.0 });
    ISO.breathe(W, { sway: 6, zoom: 0.05 });
    headFor(root, p, tl);
  };

  // ── network: devices around a hub with glowing data packets on the cables
  var NODE = { server: "server", datacenter: "datacenter", phone: "phone", laptop: "laptop", cloud: "cloud", house: "house", home: "house", office: "office", tower: "tower", factory: "factory", shop: "shop", bank: "bank", hospital: "hospital", school: "school", user: "people", people: "people", satellite: "turbine", rocket: "rocket", warehouse: "warehouse" };
  ISO.nodeKinds = Object.keys(NODE);
  T["network"] = function (root, p, tl) {
    var theme = themeOf(p, "night");
    var nodes = arr(p.nodes).slice(0, 8).filter(Boolean);
    if (nodes.length < 2) nodes = [{ label: "Phone", kind: "phone" }, { label: "Laptop", kind: "laptop" }];
    var hub = p.hub || { label: "Server", kind: "datacenter" };
    var cols = 15, rows = 13, cx = 7.5, cy = 6.5;
    var W = ISO.world(root, { theme: theme, cols: cols, rows: rows, viewport: ISO.layout(!!p.title), headroom: 1.2, fill: 0.95 });
    var hk = NODE[hub.kind] || "datacenter", cloudHub = hk === "cloud";
    var hubAt = 0.35;
    var hb;
    if (cloudHub) hb = W.building("cloud", cx - 2, cy - 2, { w: 4, d: 4, z: 2.6, at: hubAt, anim: "pop" });
    else if (hk === "people") { hb = W.add({ x: cx - 1, y: cy - 1, w: 2, d: 2, h: 0.6, draw: function () {} }); W.crowd(cx, cy, 5, { at: hubAt }); }
    else hb = W.building(hk, cx - 1.5, cy - 1, { w: 3, d: 2, at: hubAt, anim: "rise" });
    W.area(Math.floor(cx - 2), Math.floor(cy - 2), Math.ceil(cx + 2), Math.ceil(cy + 2), "plaza");
    W.label(hb, hub.label || "Hub", { at: hubAt + 0.3, color: accent(W, 1), lift: cloudHub ? 30 : 56, size: 1.1 });
    var times = syncList(nodes, { start: 0.9 });
    var n = nodes.length;
    nodes.forEach(function (nd, i) {
      var a = -Math.PI * 0.75 + ((i + 0.5) / n) * Math.PI * 2;
      var rx = 5.3, ry = 4.6;
      var gx = Math.round(cx + Math.cos(a) * rx - 1), gy = Math.round(cy + Math.sin(a) * ry - 1);
      gx = clamp(gx, 0, cols - 2); gy = clamp(gy, 0, rows - 2);
      var k = NODE[nd.kind] || ["phone", "laptop", "house", "office", "server", "tower"][i % 6], ob;
      var t0 = times[i], col = accent(W, i + 2);
      if (k === "people") { ob = W.add({ x: gx, y: gy, w: 2, d: 2, h: 0.6, draw: function () {} }); W.crowd(gx + 1, gy + 1, 3, { at: t0, wave: true }); }
      else if (k === "cloud") ob = W.building("cloud", gx, gy, { w: 2, d: 2, z: 2.6, at: t0, anim: "pop" });
      else ob = W.building(k, gx, gy, { w: 2, d: 2, at: t0, anim: k === "phone" || k === "laptop" ? "pop" : "rise", accent: col });
      W.area(gx, gy, gx + 2, gy + 2, "plaza", t0);
      W.label(ob, nd.label, { at: t0 + 0.3, color: col, lift: 40, size: n > 6 ? 0.85 : 0.95 });
      var sx = gx + 1, sy = gy + 1;
      if (cloudHub || k === "cloud") {
        W.arc([sx, sy, k === "cloud" ? 2.8 : 1.0], [cx, cy, cloudHub ? 3.4 : 0.8], { at: t0 + 0.15, color: col, height: 1.4, speed: 2.2, count: 3 });
      } else {
        var mid = Math.abs(sx - cx) > Math.abs(sy - cy) ? [[sx, sy], [cx, sy], [cx, cy]] : [[sx, sy], [sx, cy], [cx, cy]];
        W.flow(mid.map(function (q) { return [q[0], q[1], 0.05]; }), { at: t0 + 0.15, color: col, speed: 2.4, width: 0.2 });
        W.flow(mid.slice().reverse().map(function (q) { return [q[0] + 0.25, q[1] + 0.25, 0.05]; }), { at: t0 + 0.9, color: shade(col, 1.2), speed: 1.8, pipe: false, size: 0.24 });
      }
    });
    for (var i = 0; i < 9; i++) { var tx = Math.floor(h01(i * 4.1) * cols), ty = Math.floor(h01(i * 2.7 + 1) * rows); if (Math.abs(tx - cx) > 3 || Math.abs(ty - cy) > 3) W.tree(tx, ty, { kind: "bush" }); }
    W.walker([[0.5, rows - 0.5], [cols - 0.5, rows - 0.5]], { speed: 0.4 });
    W.camera.set({ zoom: 1.0 });
    ISO.breathe(W, { sway: 8, zoom: 0.05 });
    headFor(root, p, tl);
  };

  // ── island-map: regions as floating islands, linked by routes
  var REGION = ["city", "farm", "forest", "industry", "port", "tech", "energy", "village"];
  ISO.regionKinds = REGION;
  function regionContent(W, kind, ox, oy, at, seed) {
    var main = null;
    function ap(ob, dt) { ISO.appear(ob, at + 0.5 + (dt || 0), "rise", 0.7); return ob; }
    function tr(x, y, kd, dt) { return ap(W.tree(x, y, { kind: kd }), dt); }
    switch (kind) {
      case "farm":
        W.area(ox, oy + 1, ox + 2, oy + 3, "field", at + 0.5);
        W.area(ox + 2, oy + 2, ox + 3, oy + 3, "crop", at + 0.5);
        main = ap(W.building("barn", ox + 2, oy, {}));
        ap(W.building("silo", ox + 1, oy, {}), 0.1);
        tr(ox + 3, oy + 1, "round", 0.2);
        break;
      case "forest":
        for (var i = 0; i < 7; i++) { var tt = tr(ox + (i % 3) + (i > 5 ? 0.5 : 0), oy + Math.floor(i / 3), h01(seed + i) > 0.3 ? "pine" : "round", i * 0.05); if (!main) main = tt; }
        main = ap(W.building("cottage", ox + 2, oy + 2, {}), 0.3);
        break;
      case "industry":
        main = ap(W.building("factory", ox, oy, { w: 3, d: 2 }));
        ap(W.building("tank", ox, oy + 2, {}), 0.1);
        ap(W.building("tank", ox + 1, oy + 2, {}), 0.15);
        break;
      case "port":
        W.area(ox, oy + 2, ox + 4, oy + 3, "water", at + 0.5);
        main = ap(W.building("dockcrane", ox + 1, oy, { w: 2, d: 2 }));
        ap(W.building("containers", ox, oy, {}), 0.1);
        ap(W.building("containers", ox + 3, oy + 1, { w: 1, d: 1 }), 0.15);
        W.boat([[ox + 0.3, oy + 2.5], [ox + 3.7, oy + 2.5]], { at: at + 0.6, speed: 0.4 });
        break;
      case "tech":
        main = ap(W.building("datacenter", ox, oy, { w: 3, d: 2 }));
        ap(W.building("server", ox, oy + 2, {}), 0.1);
        ap(W.building("server", ox + 1, oy + 2, {}), 0.15);
        ap(W.building("office", ox + 2, oy + 2, { w: 1.4, d: 1.2, floors: 3 }), 0.2);
        break;
      case "energy":
        main = ap(W.building("turbine", ox + 2, oy, {}));
        ap(W.building("turbine", ox + 3, oy + 1, {}), 0.1);
        ap(W.building("solar", ox, oy + 1, {}), 0.15);
        break;
      case "village":
        main = ap(W.building("house", ox, oy, {}));
        ap(W.building("cottage", ox + 2, oy, {}), 0.1);
        ap(W.building("cottage", ox + 2, oy + 2, {}), 0.15);
        tr(ox + 3, oy + 1, "round", 0.2);
        tr(ox, oy + 2, "pine", 0.25);
        break;
      default: // city
        main = ap(W.building("tower", ox + 1, oy, { floors: 7 }));
        ap(W.building("office", ox, oy + 2, { w: 2, d: 1.4, floors: 3 }), 0.1);
        ap(W.building("tower", ox + 2.5, oy + 1.5, { w: 1.4, d: 1.4, floors: 4 }), 0.15);
        ap(W.building("shop", ox, oy, { w: 1.2, d: 2 }), 0.2);
    }
    return main;
  }
  T["island-map"] = function (root, p, tl) {
    var theme = themeOf(p);
    var regs = arr(p.regions).slice(0, 6).filter(Boolean);
    if (regs.length < 1) regs = [{ label: "North", kind: "city" }, { label: "South", kind: "farm" }];
    var n = regs.length, port = V.isPortrait;
    // lay islands out in *screen* space (zig-zag), then un-project to the grid (yaw 45)
    var scr = [];
    for (var ii = 0; ii < n; ii++) {
      if (port) scr.push([(ii % 2 ? 2.3 : -2.3) * (n > 1 ? 1 : 0), (ii - (n - 1) / 2) * 3.9]);
      else if (V.isSquare && n > 2) scr.push([((ii % 2) - 0.5) * 6.6, (Math.floor(ii / 2) - (Math.ceil(n / 2) - 1) / 2) * 4.6 + (ii % 2 ? 0.9 : -0.9)]);
      else scr.push([(ii - (n - 1) / 2) * 6.6, ii % 2 ? 1.5 : -1.5]);
    }
    var L = scr.map(function (q) { return [q[0] / 1.414 + q[1] / 0.707 + 10, q[1] / 0.707 - q[0] / 1.414 + 10]; });
    var xs = L.map(function (q) { return q[0]; }), ys = L.map(function (q) { return q[1]; });
    var bx0 = Math.min.apply(null, xs) - 3.2, by0 = Math.min.apply(null, ys) - 3.2, bx1 = Math.max.apply(null, xs) + 3.2, by1 = Math.max.apply(null, ys) + 3.2;
    var fitPts = [];
    L.forEach(function (c) { for (var k = 0; k < 8; k++) { var a = (k / 8) * Math.PI * 2; fitPts.push([c[0] + Math.cos(a) * 3.1, c[1] + Math.sin(a) * 3.1]); } });
    var W = ISO.world(root, { theme: theme, island: false, bounds: [bx0, by0, bx1, by1], fitPoints: fitPts, viewport: ISO.layout(!!p.title), headroom: 0.4, thickness: 1.3, fill: 0.96 });
    W.thick = 1.1;
    var times = syncList(regs, { start: 0.4 });
    var cen = [];
    regs.forEach(function (r, i) {
      var c = L[i], kind = REGION.indexOf(r.kind) >= 0 ? r.kind : REGION[i % REGION.length];
      var ox = Math.round(c[0] - 2), oy = Math.round(c[1] - 1.5);
      var shape = ISO.blob(ox + 2, oy + 1.5, 2.85, 14, i * 7 + 3, 0.92);
      W.slabAdd({ shape: shape, at: times[i], thick: 1.0 + h01(i) * 0.5, top: kind === "farm" ? W.pal.grass : kind === "industry" ? mix(W.pal.grass, W.pal.dirt, 0.4) : W.pal.grass });
      var main = regionContent(W, kind, ox, oy, times[i], i * 5);
      cen.push([ox + 2, oy + 1.5]);
      if (main) W.label(main, r.label, { at: times[i] + 0.7, color: accent(W, i), big: r.value ? str(r.value) : undefined, lift: 44 });
    });
    if (p.connect !== "none") {
      for (var i = 1; i < n; i++) {
        var a = cen[i - 1], b = cen[i];
        W.arc([a[0], a[1], 0.3], [b[0], b[1], 0.3], { at: times[i] + 0.5, color: accent(W, i), height: 2.4, speed: 2, count: 2, width: 0.1 });
      }
      if (n > 1) W.plane([[cen[0][0], cen[0][1], 6], [cen[n - 1][0], cen[n - 1][1], 6.5]], { speed: 1.4 });
    }
    W.clouds(3, { z: 6 });
    W.camera.set({ zoom: 1.0 });
    ISO.breathe(W, { sway: 8, zoom: 0.05 });
    headFor(root, p, tl);
  };

  // ── zoom-into: dive into a building that opens up to show what happens inside
  var ROOMS = ["desk", "server", "bed", "machine", "vault", "shelf", "people", "plant", "lab"];
  ISO.roomKinds = ROOMS;
  function drawRoomItem(W, ctx, t, kind, x, y, seed) {
    // x,y = room cell origin (1.6 × 1.6 usable)
    var acc = W.pal.accents[seed % 6];
    if (kind === "server") {
      for (var i = 0; i < 2; i++) {
        var bx = x + 0.3 + i * 0.6, b = { x: bx, y: y + 0.4, w: 0.45, d: 0.45 };
        W.box(bx, y + 0.4, 0, 0.45, 0.45, 1.0, "#3E4670");
        for (var r = 0; r < 5; r++) faceRect(W, b, 0, 1.0, 2, 0.6, 0.85, 0.1 + r * 0.17, 0.16 + r * 0.17, h01(Math.floor(t * 5) + r + i * 7 + seed) > 0.4 ? "#3FE0A0" : "#2A3050");
      }
    } else if (kind === "bed") {
      W.box(x + 0.3, y + 0.3, 0, 0.8, 1.1, 0.28, "#FFFFFF");
      W.box(x + 0.32, y + 0.62, 0.28, 0.76, 0.76, 0.06, acc);
      W.box(x + 0.4, y + 0.34, 0.28, 0.6, 0.22, 0.1, "#F4F6FA");
      W.box(x + 1.2, y + 0.3, 0, 0.3, 0.3, 0.45, "#C9CFDD");
    } else if (kind === "machine") {
      W.box(x + 0.3, y + 0.3, 0, 1.0, 0.8, 0.7, "#8E99BF");
      var mb = { x: x + 0.3, y: y + 0.3, w: 1.0, d: 0.8 };
      faceCircle(W, mb, 0, 0.7, 2, 0.3, 0.6, 0.12, "#FFFFFF");
      faceRect(W, mb, 0, 0.7, 2, 0.55, 0.85, 0.45, 0.75, blink(t, seed, 2) ? "#3FE0A0" : "#FFC233");
      smoke(W, x + 1.1, y + 0.5, 0.75, t, { size: 0.06, grow: 0.1, rise: 0.8, seed: seed });
    } else if (kind === "vault") {
      W.box(x + 0.2, y + 0.3, 0, 1.2, 0.9, 1.0, "#9AA3BF");
      faceCircle(W, { x: x + 0.2, y: y + 0.3, w: 1.2, d: 0.9 }, 0, 1.0, 2, 0.5, 0.5, 0.36, "#C9CFDD");
      faceCircle(W, { x: x + 0.2, y: y + 0.3, w: 1.2, d: 0.9 }, 0, 1.0, 2, 0.5, 0.5, 0.12, "#F2B33D");
      for (var g = 0; g < 3; g++) W.box(x + 0.3 + g * 0.32, y + 1.3, 0, 0.28, 0.16, 0.12, "#F2B33D");
    } else if (kind === "shelf") {
      for (i = 0; i < 2; i++) {
        W.box(x + 0.2 + i * 0.7, y + 0.3, 0, 0.55, 0.3, 1.0, "#C98B55");
        for (r = 0; r < 3; r++) W.box(x + 0.25 + i * 0.7, y + 0.42, 0.1 + r * 0.32, 0.45, 0.2, 0.18, W.pal.accents[(r + i + seed) % 6], { edge: false });
      }
    } else if (kind === "people") {
      for (i = 0; i < 3; i++) drawPerson(W, ctx, t, x + 0.4 + (i % 2) * 0.6, y + 0.5 + i * 0.35, 0, { seed: seed * 3 + i, wave: i === 1 }, false, 1);
    } else if (kind === "plant") {
      W.ball(x + 0.5, y + 0.5, 0.5, 0.35, TREES.day[seed % 4]);
      W.cyl(x + 1.1, y + 1.0, 0, 0.3, 0.2, "#C98B55");
      W.ball(x + 1.1, y + 1.0, 0.55, 0.28, TREES.day[(seed + 1) % 4]);
    } else if (kind === "lab") {
      W.box(x + 0.2, y + 0.4, 0, 1.2, 0.5, 0.45, "#FFFFFF");
      for (i = 0; i < 3; i++) { W.cyl(x + 0.4 + i * 0.4, y + 0.65, 0.45, 0.75, 0.08, ["#7FE0FF", "#FF8FB1", "#B4F07C"][i]); }
      drawPerson(W, ctx, t, x + 0.8, y + 1.3, 0, { seed: seed + 9, color: "#FFFFFF" }, false, 1);
    } else { // desk
      W.box(x + 0.3, y + 0.4, 0, 1.0, 0.55, 0.36, "#C98B55");
      W.box(x + 0.6, y + 0.45, 0.36, 0.42, 0.06, 0.3, "#2B3150");
      W.box(x + 0.62, y + 0.455, 0.39, 0.38, 0.05, 0.24, h01(Math.floor(t * 2) + seed) > 0.5 ? "#9AD7FF" : "#BFE6FA", { edge: false });
      drawPerson(W, ctx, t, x + 0.8, y + 1.2, 0, { seed: seed + 4 }, false, 1);
    }
  }
  ISO.drawRoomItem = drawRoomItem;
  T["zoom-into"] = function (root, p, tl) {
    var theme = themeOf(p);
    var bType = KIT[p.building] && p.building !== "tree" ? p.building : "office";
    var rooms = arr(p.rooms).slice(0, 4).filter(Boolean);
    if (!rooms.length) rooms = [{ label: "Inside", kind: "desk" }];
    var cols = 12, rows = 12;
    var W = ISO.world(root, { theme: theme, cols: cols, rows: rows, viewport: ISO.layout(!!p.title), headroom: 1.0 });
    var lay = ISO.townLayout(cols, rows, { rx: 7, ry: 7 });
    // target 4×4 lot in the top-left block, right by the crossroads
    var tx = 3, ty = 3, TW = 4;
    var reserved = function (l) { return l.x + l.w > tx && l.x < tx + TW && l.y + l.d > ty && l.y < ty + TW; };
    var kinds = ["house", "tower", "shop", "trees", "office", "park", "house", "tower"];
    lay.lots.filter(function (l) { return !reserved(l); }).forEach(function (l, i) { ISO.fillLot(W, l, kinds[i % kinds.length]); });
    lay.strips.forEach(function (c) { if (!(c.x >= tx && c.x < tx + TW && c.y >= ty && c.y < ty + TW) && h01(c.x * 5 + c.y) > 0.3) W.tree(c.x, c.y, { kind: "round" }); });
    ISO.townLife(W, lay, { cars: 2, walkers: 4 });
    var times = syncList(rooms, { start: Math.min(2.2, V.duration * 0.38) });
    var tDive = Math.max(0.5, Math.min(times[0] - 1.5, V.duration * 0.18));
    var tOpen = tDive + 0.5;
    var wallC = bType === "hospital" ? "#FFFFFF" : bType === "bank" ? "#F4EEE2" : bType === "datacenter" ? "#525C86" : bType === "factory" ? "#E9E1D6" : W.pal.walls[3];
    var roofC = bType === "datacenter" ? "#3A4166" : W.pal.roofs[1];
    var H = 1.5, gable = bType === "house" || bType === "school" || bType === "barn" || bType === "warehouse";
    var slots = [[0, 0], [1, 0], [0, 1], [1, 1]];
    var shell = W.add({ x: tx, y: ty, w: TW, d: TW, h: H + (gable ? 1 : 0.2), draw: function (Wd, ctx, t, o) {
      var pr = prog(t, tOpen, 1.2, "inOutCubic"), b = inset(o, 0.2), a0 = ctx.globalAlpha;
      var roofUp = V.ease.inCubic(clamp(pr * 1.6, 0, 1)), wallsDown = clamp((pr - 0.25) / 0.75, 0, 1);
      var wh = H * (1 - 0.82 * wallsDown);
      if (pr <= 0) {
        Wd.box(b.x, b.y, 0, b.w, b.d, H, wallC, { win: { rows: 3, cols: 1.4 } });
        faceRect(Wd, b, 0, H, 2, 0.42, 0.58, 0, 0.35, shade(roofC, 0.8));
      } else {
        // floor
        Wd.box(b.x, b.y, 0, b.w, b.d, 0.06, "#F3EDE2", { edge: false });
        var path = new Path2D();
        for (var i = 0; i < 6; i++) for (var j = 0; j < 6; j++) { if ((i + j) % 2) continue; var q = [Wd.P(b.x + i * b.w / 6, b.y + j * b.d / 6, 0.061), Wd.P(b.x + (i + 1) * b.w / 6, b.y + j * b.d / 6, 0.061), Wd.P(b.x + (i + 1) * b.w / 6, b.y + (j + 1) * b.d / 6, 0.061), Wd.P(b.x + i * b.w / 6, b.y + (j + 1) * b.d / 6, 0.061)]; path.moveTo(q[0][0], q[0][1]); for (var k = 1; k < 4; k++) path.lineTo(q[k][0], q[k][1]); path.closePath(); }
        ctx.fillStyle = "#E8DFD0"; ctx.fill(path);
        // back walls (full height), facing the viewer
        var th = 0.1;
        if (Wd.vy > 0) Wd.box(b.x, b.y, 0, b.w, th, H, wallC); else Wd.box(b.x, b.y + b.d - th, 0, b.w, th, H, wallC);
        if (Wd.vx > 0) Wd.box(b.x, b.y, 0, th, b.d, H, wallC); else Wd.box(b.x + b.w - th, b.y, 0, th, b.d, H, wallC);
        // room dividers
        Wd.box(b.x + b.w / 2 - 0.04, b.y, 0, 0.08, b.d, 0.35, shade(wallC, 0.95));
        Wd.box(b.x, b.y + b.d / 2 - 0.04, 0, b.w, 0.08, 0.35, shade(wallC, 0.95));
        // items, back to front
        var order = rooms.map(function (r, ri) { var s = slots[ri]; return { r: r, ri: ri, x: b.x + s[0] * b.w / 2, y: b.y + s[1] * b.d / 2 }; });
        order.sort(function (m, n2) { return Wd.depthOf(m.x, m.y, 0) - Wd.depthOf(n2.x, n2.y, 0); });
        order.forEach(function (it) {
          var tr = times[it.ri];
          if (t < tr) return;
          var pp = prog(t, tr, 0.5, "outBack");
          var sv = Wd._f;
          Wd._f = { cx: it.x + 0.9, cy: it.y + 0.9, zb: 0, zs: Math.max(0.001, pp), zo: 0, s: Math.max(0.001, pp) };
          drawRoomItem(Wd, ctx, t, ROOMS.indexOf(it.r.kind) >= 0 ? it.r.kind : ROOMS[it.ri % ROOMS.length], it.x, it.y, it.ri + 1);
          Wd._f = sv;
        });
        // front walls, lowering
        if (Wd.vy > 0) Wd.box(b.x, b.y + b.d - th, 0, b.w, th, wh, wallC); else Wd.box(b.x, b.y, 0, b.w, th, wh, wallC);
        if (Wd.vx > 0) Wd.box(b.x + b.w - th, b.y, 0, th, b.d, wh, wallC); else Wd.box(b.x, b.y, 0, th, b.d, wh, wallC);
      }
      // roof flies off
      if (roofUp < 1) {
        ctx.globalAlpha = a0 * (1 - roofUp);
        var rz = H + roofUp * 4;
        if (gable) Wd.gable(b.x - 0.1, b.y - 0.1, rz, b.w + 0.2, b.d + 0.2, 0.9, roofC, "x", wallC);
        else { Wd.box(b.x - 0.05, b.y - 0.05, rz, b.w + 0.1, b.d + 0.1, 0.18, roofC); Wd.box(b.x + 0.8, b.y + 0.8, rz + 0.18, 0.8, 0.8, 0.25, Wd.pal.metal); }
        ctx.globalAlpha = a0;
      }
    } });
    shell.labelH = H + 0.6;
    W.cutaway(shell, tDive + 0.2, 1.2);
    if (p.label) W.label(shell, p.label, { at: 0.35, color: accent(W, 0), until: tDive + 0.3, size: 1.05 });
    rooms.forEach(function (r, i) {
      var s = slots[i];
      W.label([tx + 0.2 + s[0] * 1.8 + 0.9, ty + 0.2 + s[1] * 1.8 + 0.9, 1.0], r.label, { at: times[i] + 0.25, color: accent(W, i + 1), lift: 70 + (i % 2) * 40, size: 0.95 });
    });
    W.clouds(2);
    W.camera.set({ zoom: 1.0, yaw: 43 });
    W.camera.to({ yaw: 47 }, 0, tDive, "inOutSine");
    W.camera.to({ x: tx + TW / 2, y: ty + TW / 2, z: 0.8, zoom: V.isLandscape ? 2.15 : 2.5 }, tDive, 1.6, "inOutCubic");
    W.camera.to({ yaw: 60 }, tDive + 1.6, Math.max(0.5, V.duration - tDive - 1.6), "inOutSine");
    headFor(root, p, tl);
  };

  // ── compare-worlds: two little worlds side by side
  var WORLDKIND = ["city", "green", "industrial", "village", "tech", "farm"];
  ISO.worldKinds = WORLDKIND;
  function buildMini(W, kind, at) {
    var lay = ISO.townLayout(8, 8, { rx: 4, ry: 4 });
    var mixes = { city: ["tower", "office", "tower", "shop", "house", "tower", "office", "shop", "tower"], green: ["park", "solar", "turbines", "trees", "house", "park", "solar", "trees", "turbines"], industrial: ["factory", "warehouse", "tanks", "factory", "warehouse", "factory", "tanks", "factory", "warehouse"], village: ["cottages", "house", "trees", "cottages", "house", "trees", "cottages", "park", "house"], tech: ["datacenter", "servers", "office", "datacenter", "servers", "office", "solar", "datacenter", "servers"], farm: ["farm", "barnyard", "farm", "trees", "farm", "farm", "barnyard", "trees", "farm"] };
    var m = mixes[kind] || mixes.city;
    lay.lots.forEach(function (l, i) { ISO.fillLot(W, l, m[i % m.length], { at: at + 0.2 + i * 0.07 }); });
    lay.strips.forEach(function (c, i) { if (h01(c.x * 3 + c.y * 5 + 1) > 0.45) ISO.appear(W.tree(c.x, c.y, { kind: kind === "farm" || kind === "village" ? "pine" : "round" }), at + 0.5 + i * 0.02, "pop", 0.4); });
    var rd = ISO.townLife;
    if (kind === "industrial") { rd(W, lay, { cars: 2, walkers: 1, bus: false, carAt: at + 0.4 }); W.objs.forEach(function (o) { if (o.kind === "car") o.kind = "truck"; }); }
    else if (kind === "farm" || kind === "village") rd(W, lay, { cars: 1, walkers: 3, bus: false, carAt: at + 0.4, walkAt: at + 0.4 });
    else rd(W, lay, { cars: kind === "green" ? 1 : 3, walkers: kind === "green" ? 6 : 4, carAt: at + 0.4, walkAt: at + 0.4 });
    if (kind === "tech") {
      W.flow([[1, 4.5, 0.05], [7, 4.5, 0.05]], { at: at + 0.6, color: W.pal.accents[1], speed: 2 });
      W.flow([[4.5, 1, 0.05], [4.5, 7, 0.05]], { at: at + 0.8, color: W.pal.accents[2], speed: 2 });
    }
    if (kind === "industrial") W.ground.push(function (Wd, ctx) { ctx.fillStyle = "rgba(120,110,100,0.06)"; ctx.fillRect(0, 0, V.width, V.height); });
  }
  T["compare-worlds"] = function (root, p, tl) {
    var theme = themeOf(p);
    var Lp = p.left || {}, Rp = p.right || {};
    var hasHead = !!p.title, side = V.isPortrait;
    var top = hasHead ? (side ? 0.17 : 0.17) : 0.04, foot = 0.0;
    var vpL = side ? { x: 0.04, y: top + 0.07, w: 0.92, h: (0.96 - top) / 2 - 0.08 } : { x: 0.02, y: top + 0.1, w: 0.47, h: 0.86 - top - foot };
    var vpR = side ? { x: 0.04, y: top + (0.96 - top) / 2 + 0.07, w: 0.92, h: (0.96 - top) / 2 - 0.08 } : { x: 0.51, y: top + 0.1, w: 0.47, h: 0.86 - top - foot };
    var tL = 0.35, kR = Rp.keyword ? V.find(Rp.keyword) : Rp.label ? V.find(S.autoKey(Rp.label) || "") : null;
    var tR = kR != null ? Math.max(tL + 0.6, kR - 0.2) : Math.min(V.duration * 0.42, tL + 1.6);
    ISO.backdrop(root, theme);
    [[Lp, vpL, tL, -1], [Rp, vpR, tR, 1]].forEach(function (s) {
      var sp = s[0], kind = WORLDKIND.indexOf(sp.kind) >= 0 ? sp.kind : s[3] < 0 ? "industrial" : "green";
      var W = ISO.world(root, { theme: theme, cols: 8, rows: 8, viewport: s[1], headroom: 1.2, fill: 0.96 });
      var slab = W.island;
      void slab;
      buildMini(W, kind, s[2]);
      W.camera.set({ zoom: 1.0, yaw: 45 });
      W.camera.to({ yaw: 45 + s[3] * 6 }, 0, V.duration, "inOutSine");
      // tag
      var tag = el("div.iso-tag" + (s[3] < 0 ? ".is-left" : ".is-right"), { parent: root, style: { left: (s[1].x + s[1].w / 2) * 100 + "%", top: (s[1].y - (side ? 0.055 : 0.07)) * 100 + "%" } });
      if (sp.stat) el("div.iso-tag-stat", { parent: tag, text: plain(sp.stat) });
      el("div.iso-tag-label", { parent: tag, text: plain(sp.label || kind) });
      tag.style.setProperty("--tag", W.pal.accents[s[3] < 0 ? 0 : 2]);
      tl.fromTo(tag, { opacity: 0, y: u(24), scale: 0.9 }, { opacity: 1, y: 0, scale: 1 }, { at: clampT(s[2] + 0.25), dur: 0.6, ease: "outBack" });
    });
    var vs = el("div.iso-vs", { parent: root, text: p.vsText ? plain(p.vsText).slice(0, 6) : "VS", style: side ? { left: "12%", top: (top + (0.96 - top) / 2 + 0.02) * 100 + "%" } : { left: "50%", top: (top + 0.1 + (0.86 - top) / 2) * 100 + "%" } });
    tl.fromTo(vs, { opacity: 0, scale: 0.3 }, { opacity: 1, scale: 1 }, { at: clampT(tR - 0.1), dur: 0.5, ease: "outBack" });
    headFor(root, p, tl);
  };

  // ── supply-chain: a winding road with trucks hauling goods between stops
  var STOPS = { farm: "barn", mine: "tanks", factory: "factory", warehouse: "warehouse", port: "port", shop: "shop", home: "house", office: "office", hospital: "hospital", datacenter: "datacenter", bank: "bank", school: "school" };
  ISO.stopKinds = Object.keys(STOPS);
  T["supply-chain"] = function (root, p, tl) {
    var theme = themeOf(p);
    var stops = arr(p.stops).slice(0, 6).filter(Boolean);
    if (stops.length < 2) stops = [{ label: "Farm", kind: "farm" }, { label: "Factory", kind: "factory" }, { label: "Shop", kind: "shop" }];
    var n = stops.length, perRow = n <= 3 ? n : Math.ceil(n / 2), twoRows = n > 3;
    var sp = 5, cols = perRow * sp + 1, rows = twoRows ? 12 : 7;
    var W = ISO.world(root, { theme: theme, cols: cols, rows: rows, viewport: ISO.layout(!!p.title), headroom: 1.6 });
    var times = syncList(stops, { start: 0.4 });
    var pos = stops.map(function (s, i) { var r = twoRows && i >= perRow ? 1 : 0, c = r ? perRow - 1 - (i - perRow) : i; return { x: 1 + c * sp, y: r ? 8 : 1, r: r }; });
    var roadY = [4, 7];
    var legs = [];
    stops.forEach(function (s, i) {
      var q = pos[i], kind = STOPS[s.kind] ? s.kind : ["farm", "factory", "warehouse", "shop", "home", "office"][i % 6], k = STOPS[kind], ob;
      if (k === "port") {
        W.area(q.x - 1, q.y - 1, q.x + 4, q.y, "water");
        ob = W.building("dockcrane", q.x, q.y, { at: times[i] });
        ISO.appear(W.building("containers", q.x + 2, q.y, {}), times[i] + 0.15, "drop");
        ISO.appear(W.building("containers", q.x + 2, q.y + 1, {}), times[i] + 0.25, "drop");
        W.boat([[q.x - 0.5, q.y - 0.5], [q.x + 3.5, q.y - 0.5]], { kind: "boat", at: times[i] + 0.3, speed: 0.5 });
      } else if (k === "tanks") {
        ob = W.building("tank", q.x, q.y, { at: times[i] });
        ISO.appear(W.building("silo", q.x + 1, q.y, {}), times[i] + 0.1, "rise");
        ISO.appear(W.building("crane", q.x + 2, q.y + 1, {}), times[i] + 0.15, "rise");
      } else ob = W.building(k, q.x, q.y, { w: 3, d: 2.4, at: times[i] });
      if (k === "barn") { W.area(q.x + 2, q.y, q.x + 4, q.y + 2, "crop", times[i]); ob.w = 2.4; }
      W.label(ob, s.label, { at: times[i] + 0.3, color: accent(W, i), lift: 46 });
      W.ping(q.x + 1.3, q.y + 1.2, { at: times[i], color: accent(W, i), radius: 1.6 });
      // driveway to the road
      var ry = roadY[q.r] - (q.r ? 0 : 0);
      var dw = q.r ? [[q.x + 1, q.y - 1], [q.x + 1, ry]] : [[q.x + 1, q.y + 2.4], [q.x + 1, ry]];
      W.road(dw.map(function (z) { return [Math.round(z[0]), Math.round(z[1])]; }), { at: times[i] + 0.1, dur: 0.3 });
      if (i > 0) {
        var a = pos[i - 1], ar = roadY[a.r], br = roadY[q.r], pts;
        if (a.r === q.r) pts = [[a.x + 1, ar], [q.x + 1, br]];
        else { var ex = a.x + 3; pts = [[a.x + 1, ar], [ex, ar], [ex, br], [q.x + 1, br]]; }
        var rp = W.road(pts, { at: times[i - 1] + 0.3, dur: Math.max(0.4, times[i] - times[i - 1] - 0.2) });
        legs.push({ pts: rp, at: times[i] });
      }
    });
    legs.forEach(function (lg, i) {
      W.truck(lg.pts, { at: lg.at, speed: 1.3, phase: 0, cargo: ["#F4F6FA", "#FFC233", "#9AD7FF"][i % 3] });
      if (lg.pts.length > 1) W.car(lg.pts, { at: lg.at + 0.6, phase: 0.5, speed: 1.0 });
    });
    for (var x = 0; x < cols; x++) { if (h01(x * 3.3) > 0.55) W.tree(x, twoRows ? 5 : rows - 1, { kind: h01(x) > 0.5 ? "pine" : "round" }); }
    W.walker([[0.5, roadY[0] + 0.45], [cols - 0.5, roadY[0] + 0.45]], { speed: 0.4 });
    W.clouds(2);
    W.plane([[0, 0, 7], [cols, rows, 7]], { speed: 2 });
    W.camera.set({ zoom: 1.0 });
    ISO.breathe(W, { sway: 6, zoom: 0.04 });
    headFor(root, p, tl);
  };

  // ── iso-donut: extruded pie / donut whose slices rise on their key words
  T["iso-donut"] = function (root, p, tl) {
    var theme = themeOf(p);
    var sl = arr(p.slices).slice(0, 6).map(function (s) { return { label: plain(s && s.label), value: Math.max(0, num(s && s.value, 0)), keyword: s && s.keyword }; }).filter(function (s) { return s.value > 0; });
    if (!sl.length) sl = [{ label: "A", value: 60 }, { label: "B", value: 40 }];
    var total = sl.reduce(function (a, s) { return a + s.value; }, 0) || 1;
    var cols = 10, rows = 10, cx = 5, cy = 5, R = 3.6, r0 = p.donut === false ? 0 : 1.7;
    var W = ISO.world(root, { theme: theme, cols: cols, rows: rows, viewport: ISO.layout(!!p.title), headroom: 1.6, fill: 0.92 });
    var times = syncList(sl, { start: 0.6 });
    var fmt = p.valueFormat || { suffix: "%", decimals: 0 };
    var asPct = !p.valueFormat;
    var hi = 0;
    sl.forEach(function (s, i) { if (s.value > sl[hi].value) hi = i; });
    var a0 = -Math.PI * 0.5;
    W.ground.push(function (Wd) { Wd.disc(cx, cy, 0.01, R + 0.55, rgba(Wd.pal.ink, 0.06)); });
    sl.forEach(function (s, i) {
      var span = (s.value / total) * Math.PI * 2, a1 = a0 + span, am = (a0 + a1) / 2;
      var pts = [], steps = Math.max(3, Math.ceil(span / 0.18));
      for (var k = 0; k <= steps; k++) { var a = a0 + (span * k) / steps; pts.push([cx + Math.cos(a) * R, cy + Math.sin(a) * R]); }
      if (r0 > 0) for (k = steps; k >= 0; k--) { a = a0 + (span * k) / steps; pts.push([cx + Math.cos(a) * r0, cy + Math.sin(a) * r0]); }
      else pts.push([cx, cy]);
      var xs = pts.map(function (q) { return q[0]; }), ys = pts.map(function (q) { return q[1]; });
      var col = accent(W, i), hgt = 0.9 + (i === hi ? 0.5 : 0);
      var ob = W.add({ x: Math.min.apply(null, xs), y: Math.min.apply(null, ys), w: Math.max(0.2, Math.max.apply(null, xs) - Math.min.apply(null, xs)), d: Math.max(0.2, Math.max.apply(null, ys) - Math.min.apply(null, ys)), h: hgt, shadow: false, draw: function (Wd, ctx, t) {
        var push = i === hi ? prog(t, times[i] + 0.6, 0.6, "outBack") * 0.45 : 0;
        var dx = Math.cos(am) * push, dy = Math.sin(am) * push;
        Wd.prism(pts.map(function (q) { return [q[0] + dx, q[1] + dy]; }), 0, hgt, col, {});
      } });
      ob._dep2 = Math.sin(am);
      ISO.appear(ob, times[i], "rise", 0.8);
      var lr = R + 0.4;
      var anc = [cx + Math.cos(am) * (R * 0.78 + (r0 ? r0 * 0.2 : 0)), cy + Math.sin(am) * (R * 0.78), hgt];
      var pct = (s.value / total) * 100;
      W.label(anc, s.label, { at: times[i] + 0.3, color: col, value: asPct ? { from: 0, to: pct, suffix: "%", decimals: pct < 10 ? 1 : 0 } : { from: 0, to: s.value, prefix: fmt.prefix, suffix: fmt.suffix, decimals: fmt.decimals }, lift: 60 + (Math.sin(am) < 0 ? 40 : 0), side: Math.cos(am) > 0.3 ? 1 : Math.cos(am) < -0.3 ? -1 : 0, size: sl.length > 4 ? 0.85 : 0.95 });
      void lr;
      a0 = a1;
    });
    if (p.centerLabel) W.label([cx, cy, 0.95], p.centerLabel, { at: 0.5, plain: true, lift: 0, color: W.pal.ink, size: 1.1 });
    var ring = [];
    for (var k = 0; k <= 24; k++) { var a = (k / 24) * Math.PI * 2; ring.push([cx + Math.cos(a) * (R + 0.95), cy + Math.sin(a) * (R + 0.95)]); }
    for (var i = 0; i < 4; i++) W.walker(ring, { closed: false, mode: "loop", speed: 0.4, phase: i / 4 });
    [[0, 0], [9, 0], [0, 9], [9, 9]].forEach(function (c, i) { W.tree(c[0], c[1], { kind: i % 2 ? "pine" : "round" }); });
    W.camera.set({ zoom: 1.0 });
    ISO.breathe(W, { sway: 10, zoom: 0.05 });
    headFor(root, p, tl);
  };

  // ── town-signs: a calm living town with floating signs on the key words
  function calmTown(root, theme, o) {
    o = o || {};
    var cols = 12, rows = 11;
    var W = ISO.world(root, { theme: theme, cols: cols, rows: rows, viewport: o.viewport || ISO.layout(!!o.head), headroom: 1.3 });
    var lay = ISO.townLayout(cols, rows);
    var kinds = ["house", "shop", "tower", "park", "office", "house", "trees", "school", "shop", "house", "tower", "cottages"];
    var mains = [];
    lay.lots.forEach(function (l, i) { var m = ISO.fillLot(W, l, kinds[i % kinds.length]); if (m && m.type !== "tree" && m.h > 0.5) mains.push(m); });
    lay.strips.forEach(function (c, i) { if (h01(c.x * 7 + c.y * 3) > 0.3) W.tree(c.x, c.y, { kind: h01(i * 1.3) > 0.6 ? "pine" : "round" }); });
    ISO.townLife(W, lay, { cars: 2, walkers: 6 });
    W.clouds(3);
    W.plane([[-2, 3, 7], [cols + 2, rows - 2, 7.5]], { speed: 1.5 });
    W.camera.set({ zoom: 1.0 });
    ISO.breathe(W, { sway: 10, zoom: 0.06 });
    return { W: W, mains: mains };
  }
  ISO.calmTown = calmTown;
  function showSigns(town, signs) {
    var W = town.W, mains = town.mains.slice();
    // spread anchors: prefer distinct buildings far apart
    mains.sort(function (a, b) { return h01(a.x * 3 + a.y) - h01(b.x * 3 + b.y); });
    signs.forEach(function (s, i) {
      var anc = mains[i % Math.max(1, mains.length)] || [6, 5, 1];
      var nxt = signs[i + 1];
      W.label(anc, s.text, { at: s.at, until: nxt ? Math.max(s.at + 1.6, nxt.at + 1.2) : undefined, color: accent(W, i), size: 1.1, lift: 60 + (i % 2) * 30 });
      if (anc.footprint) W.ping(anc.x + anc.w / 2, anc.y + anc.d / 2, { at: s.at, color: accent(W, i), radius: 1.4 });
    });
  }
  T["town-signs"] = function (root, p, tl) {
    var theme = themeOf(p);
    var signs = arr(p.signs).slice(0, 5).filter(function (s) { return s && s.text; });
    var town = calmTown(root, theme, { head: !!p.title });
    var times = S.syncTimes(signs.map(function (s) { return s.keyword || S.autoKey(s.text); }), { start: 0.5 });
    showSigns(town, signs.map(function (s, i) { return { text: plain(s.text), at: times[i] }; }));
    headFor(root, p, tl);
  };

  // ───────────────────────── entry points ─────────────────────────
  var baseRender = S.render, baseFallback = S.fallback;
  void baseRender;
  S.templateIds = Object.keys(T);
  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = root || V.root();
    root.classList.add("iso-root", "t-" + id);
    var tl = V.timeline();
    fn(root, props || {}, tl);
    return root;
  };
  ISO.STOP = { the: 1, a: 1, an: 1, and: 1, or: 1, of: 1, to: 1, in: 1, on: 1, for: 1, with: 1, is: 1, are: 1, was: 1, were: 1, it: 1, its: 1, that: 1, this: 1, by: 1, as: 1, at: 1, be: 1, from: 1, your: 1, you: 1, we: 1, our: 1, their: 1, they: 1, there: 1, these: 1, those: 1, which: 1, while: 1, about: 1, every: 1, would: 1, could: 1, should: 1, because: 1, after: 1, before: 1, takes: 1, minutes: 1 };
  /** Pick up to n distinctive spoken keywords spread over the scene: [{text, at}] */
  ISO.keywords = function (n, narration) {
    n = n || 4;
    var D = V.duration, words = V.words && V.words.length ? V.words : null, out = [];
    if (!words) {
      var toks = str(narration || V.narration).split(/\s+/).filter(Boolean);
      words = toks.map(function (w, i) { return { word: w, start: (i / Math.max(1, toks.length)) * D * 0.85 + 0.2 }; });
    }
    if (!words.length) return out;
    var slots = Math.max(1, Math.min(n, Math.floor(D / 1.6)));
    for (var sIdx = 0; sIdx < slots; sIdx++) {
      var a = (sIdx / slots) * D, b = ((sIdx + 1) / slots) * D, best = null;
      words.forEach(function (w) {
        if (w.start < a || w.start >= b) return;
        var c = str(w.word).replace(/[^\p{L}\p{N}%$.-]+/gu, "").replace(/^[.-]+|[.-]+$/g, "");
        if (c.length < 4 || ISO.STOP[c.toLowerCase()]) return;
        var score = c.length + (/\d/.test(c) ? 4 : 0) + (/^[A-Z]/.test(c) ? 1.5 : 0);
        if (!best || score > best.score) best = { text: c.length > 22 ? c.slice(0, 21) + "…" : c, at: Math.max(0.1, w.start - 0.15), score: score };
      });
      if (best && !out.some(function (o) { return o.text.toLowerCase() === best.text.toLowerCase(); })) out.push(best);
    }
    return out;
  };
  S.fallback = function (root, narration) {
    try {
      root = root || V.root();
      root.innerHTML = "";
      root.className = "iso-root t-fallback";
      root.removeAttribute("style");
      root.__isoBg = null;
      var town = calmTown(root, "day", {});
      showSigns(town, ISO.keywords(4, narration));
      return root;
    } catch (e) {
      V.error("iso fallback: " + (e && e.message));
      try { V.reset(); } catch (e2) {}
      return baseFallback(root, narration);
    }
  };
})();
