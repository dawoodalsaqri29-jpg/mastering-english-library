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
/* Scene engine: storybook — "Storybook Watercolor".
 * A painted children's picture-book. Locations are painted procedurally into canvases with a
 * layered translucent-polygon watercolor technique (soft bleeding edges, pigment pooling,
 * granulation), vignetted into deckled cream paper; characters are SVG pen-and-wash puppets with
 * wobbly pencil outlines, lip-sync and gentle gestures; text is set like a book page.
 * Everything is seeded and every frame is a pure function of time (V.onFrame / V.timeline only).
 * Runs after browser/components.js; replaces S.render / S.fallback and adds the storybook API.
 */
(function () {
  "use strict";
  var V = window.V;
  var S = window.SceneStyle;
  if (!V || !S) return;
  var el = V.el;

  S.init({
    id: "storybook",
    kind: "storybook",
    enter: "fade",
    titleReveal: "fade",
    drift: 0,
    series: ["#D9734E", "#7C8F6A", "#5F87A8", "#D9A74A", "#8A5A7A", "#5E9C96"],
  });

  // ───────────────────────── basics ─────────────────────────
  function u(n) { return n * V.unit; }
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function num(v, d) { v = Number(v); return isFinite(v) ? v : d; }
  function f1(n) { return (Math.round(n * 10) / 10).toString(); }
  function f2(n) { return (Math.round(n * 100) / 100).toString(); }
  function hs(s) { return S.hash(str(s)) % 100000; }
  function R(seed) { return V.makeRand(((Math.floor(seed) >>> 0) % 2147483647) || 7); }
  function h01(a, b) { var x = Math.sin(a * 127.1 + (b || 0) * 311.7 + 74.7) * 43758.5453; return x - Math.floor(x); }
  function plain(t) { return S.plain(t); }
  function sstep(p) { p = clamp(p, 0, 1); return p * p * (3 - 2 * p); }
  function prog(t, a, b) { return b > a ? clamp((t - a) / (b - a), 0, 1) : t >= b ? 1 : 0; }
  function eio(p) { p = clamp(p, 0, 1); return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }
  function eout(p) { p = clamp(p, 0, 1); return 1 - Math.pow(1 - p, 3); }
  function DUR() { return Math.max(0.5, V.duration); }
  function lastT() { return Math.max(0.05, V.duration - 0.3); }
  function ct(t) { return clamp(num(t, 0), 0, lastT()); }
  var W = V.width, H = V.height;
  var PORT = V.isPortrait, LAND = V.isLandscape, SQ = V.isSquare;
  var SERIF = '"Palatino Linotype", "Book Antiqua", Palatino, Georgia, "Times New Roman", serif';

  // ───────────────────────── palette ─────────────────────────
  var C = {
    paper: "#F4EAD5", paperDk: "#E6D5B4", paperLt: "#FAF4E6", cream: "#FBF3E2", white: "#FFFDF7",
    ink: "#3B2F2A", inkSoft: "#5B4A40", pencil: "#4A3C34",
    terracotta: "#D9734E", rust: "#B5502F", brick: "#A9563E", rose: "#D98A8A", blush: "#E9A8A0", pink: "#EDB8B0",
    ochre: "#D9A74A", honey: "#E8B65A", butter: "#F2D58A", gold: "#C9973A",
    sage: "#7C8F6A", moss: "#5E7A4A", leaf: "#86A35E", spring: "#A9C27A", forest: "#3F5E45", pine: "#2F4B3E",
    sky: "#A9C8D8", skyLt: "#D3E3E6", blue: "#5F87A8", sea: "#4F8DA8", teal: "#5E9C96", navy: "#2E3D5C",
    night: "#232B4A", indigo: "#3A3F6E", plum: "#8A5A7A", lilac: "#B4A3C8", violet: "#7D6E9E",
    brown: "#8A5A3C", bark: "#6E4B36", wood: "#A87650", woodLt: "#C49A6C", sand: "#E6CC98", stone: "#A39A8C",
    slate: "#6F7A85", snow: "#F4F6F4", fox: "#D9733A", bear: "#8B5E3C",
  };
  S.colors = C;

  function rgbOf(hex) {
    hex = str(hex).replace("#", "");
    if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    var n = parseInt(hex, 16);
    if (!isFinite(n)) return [128, 128, 128];
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function hexOf(c) {
    return "#" + c.map(function (v) { var s = clamp(Math.round(v), 0, 255).toString(16); return s.length < 2 ? "0" + s : s; }).join("");
  }
  function mix(a, b, p) { var x = rgbOf(a), y = rgbOf(b); return hexOf([lerp(x[0], y[0], p), lerp(x[1], y[1], p), lerp(x[2], y[2], p)]); }
  function dk(c, p) { return mix(c, "#2A1E18", p == null ? 0.3 : p); }
  function lt(c, p) { return mix(c, "#FFFDF7", p == null ? 0.3 : p); }
  function rgba(c, a) { var x = rgbOf(c); return "rgba(" + x[0] + "," + x[1] + "," + x[2] + "," + a + ")"; }
  S.mix = mix;

  // ───────────────────────── geometry ─────────────────────────
  /** Catmull-Rom spline through points → SVG path data. */
  function smooth(pts, closed) {
    var n = pts.length;
    if (n < 2) return "";
    var d = "M" + f1(pts[0][0]) + " " + f1(pts[0][1]);
    var N = closed ? n : n - 1;
    for (var i = 0; i < N; i++) {
      var p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      if (!closed) { if (i === 0) p0 = p1; if (i + 2 >= n) p3 = p2; }
      d += " C" + f1(p1[0] + (p2[0] - p0[0]) / 6) + " " + f1(p1[1] + (p2[1] - p0[1]) / 6) + " " +
        f1(p2[0] - (p3[0] - p1[0]) / 6) + " " + f1(p2[1] - (p3[1] - p1[1]) / 6) + " " + f1(p2[0]) + " " + f1(p2[1]);
    }
    return d + (closed ? "Z" : "");
  }
  function ellP(cx, cy, rx, ry, n, a0) {
    n = n || 14; a0 = a0 || 0;
    var out = [];
    for (var i = 0; i < n; i++) { var a = a0 + (i / n) * Math.PI * 2; out.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]); }
    return out;
  }
  function rectP(x, y, w, h, r) {
    r = Math.min(r == null ? Math.min(w, h) * 0.18 : r, w / 2, h / 2);
    var out = [], k = 0.29;
    out.push([x + r, y], [x + w / 2, y], [x + w - r, y], [x + w - r * k, y + r * k], [x + w, y + r], [x + w, y + h / 2], [x + w, y + h - r], [x + w - r * k, y + h - r * k],
      [x + w - r, y + h], [x + w / 2, y + h], [x + r, y + h], [x + r * k, y + h - r * k], [x, y + h - r], [x, y + h / 2], [x, y + r], [x + r * k, y + r * k]);
    return out;
  }
  function jit(pts, rnd, a) { return pts.map(function (p) { return [p[0] + (rnd() - 0.5) * 2 * a, p[1] + (rnd() - 0.5) * 2 * a]; }); }
  function cen(pts) { var x = 0, y = 0; pts.forEach(function (p) { x += p[0]; y += p[1]; }); return [x / pts.length, y / pts.length]; }
  function scl(pts, k, c) { c = c || cen(pts); return pts.map(function (p) { return [c[0] + (p[0] - c[0]) * k, c[1] + (p[1] - c[1]) * k]; }); }
  function mv(pts, dx, dy) { return pts.map(function (p) { return [p[0] + dx, p[1] + dy]; }); }
  /** Densify a polyline/polygon so jitter reads as a hand-drawn wobble. */
  function dens(pts, step, closed) {
    var out = [], n = pts.length, N = closed ? n : n - 1;
    for (var i = 0; i < N; i++) {
      var a = pts[i], b = pts[(i + 1) % n];
      var L = Math.sqrt((b[0] - a[0]) * (b[0] - a[0]) + (b[1] - a[1]) * (b[1] - a[1]));
      var k = Math.max(1, Math.round(L / step));
      for (var j = 0; j < k; j++) out.push([lerp(a[0], b[0], j / k), lerp(a[1], b[1], j / k)]);
    }
    if (!closed) out.push(pts[n - 1]);
    return out;
  }
  S.smoothPath = smooth;
  /** V.fit with sub-pixel-safe limits (scrollWidth is an integer; fractional limits never "fit"). */
  function fitBox(node, o) {
    o = o || {};
    var q = {};
    for (var k in o) q[k] = o[k];
    if (q.maxWidth) q.maxWidth = Math.ceil(q.maxWidth) + 1;
    if (q.maxHeight) q.maxHeight = Math.ceil(q.maxHeight) + 1;
    V.fit(node, q);
  }

  // ───────────────────────── SVG pen-and-wash markup ─────────────────────────
  var INK = C.pencil;
  /**
   * Watercolor shape as SVG markup: base wash, wet-edge layer with pooled pigment, soft highlight,
   * and a slightly mis-registered wobbly pencil outline. pts are design units.
   */
  function wc(pts, col, o) {
    o = o || {};
    var rnd = R(o.seed != null ? o.seed : 11);
    var j = o.j != null ? o.j : 1.2;
    var cls = o.cls ? ' class="' + o.cls + '"' : "";
    var s = "";
    var a = jit(pts, rnd, j * 0.5), b = jit(pts, rnd, j);
    s += '<path class="sb-fill" d="' + smooth(a, true) + '" fill="' + col + '" fill-opacity="' + (o.alpha != null ? o.alpha : 0.92) + '"/>';
    if (o.edge !== false) s += '<path class="sb-fill" d="' + smooth(b, true) + '" fill="' + col + '" fill-opacity="0.3" stroke="' + dk(col, 0.28) + '" stroke-opacity="' + (o.eo != null ? o.eo : 0.42) + '" stroke-width="' + (o.ew || 1.5) + '"/>';
    if (o.hl !== false) {
      var c = cen(pts);
      var hlp = mv(scl(jit(pts, rnd, j * 0.6), o.hlk || 0.55, c), -(o.hlx != null ? o.hlx : 0.12) * spanX(pts), -(o.hly != null ? o.hly : 0.14) * spanY(pts));
      s += '<path class="sb-fill" d="' + smooth(hlp, true) + '" fill="#FFFDF4" fill-opacity="' + (o.hla != null ? o.hla : 0.2) + '"/>';
    }
    if (o.line !== false) {
      var lp = jit(mv(pts, (rnd() - 0.5) * (o.mis != null ? o.mis : 1.6), (rnd() - 0.5) * (o.mis != null ? o.mis : 1.6)), rnd, j * 0.7);
      s += '<path class="sb-pen" d="' + smooth(lp, true) + '" fill="none" stroke="' + (o.lc || INK) + '" stroke-opacity="' + (o.lo != null ? o.lo : 0.72) + '" stroke-width="' + (o.lw || 1.6) + '" stroke-linejoin="round" stroke-linecap="round"/>';
    }
    return "<g" + cls + ">" + s + "</g>";
  }
  function spanX(p) { var a = Infinity, b = -Infinity; p.forEach(function (q) { a = Math.min(a, q[0]); b = Math.max(b, q[0]); }); return b - a; }
  function spanY(p) { var a = Infinity, b = -Infinity; p.forEach(function (q) { a = Math.min(a, q[1]); b = Math.max(b, q[1]); }); return b - a; }
  /** Open pencil stroke (design units). */
  function pen(pts, o) {
    o = o || {};
    var rnd = R(o.seed != null ? o.seed : 3);
    var p = o.j === 0 ? pts : jit(pts, rnd, o.j != null ? o.j : 0.7);
    return '<path class="sb-pen" d="' + smooth(p, !!o.closed) + '" fill="' + (o.fill || "none") + '" stroke="' + (o.c || INK) + '" stroke-opacity="' + (o.o != null ? o.o : 0.75) + '" stroke-width="' + (o.w || 1.6) + '" stroke-linecap="round" stroke-linejoin="round"/>';
  }
  function dot(cx, cy, r, col, a) { return '<circle class="sb-fill" cx="' + f1(cx) + '" cy="' + f1(cy) + '" r="' + f1(r) + '" fill="' + col + '"' + (a != null ? ' fill-opacity="' + a + '"' : "") + "/>"; }
  function ell(cx, cy, rx, ry, col, a) { return '<ellipse class="sb-fill" cx="' + f1(cx) + '" cy="' + f1(cy) + '" rx="' + f1(rx) + '" ry="' + f1(ry) + '" fill="' + col + '"' + (a != null ? ' fill-opacity="' + a + '"' : "") + "/>"; }
  S.washMarkup = wc;
  S.penMarkup = pen;

  // ───────────────────────── canvas watercolor painter ─────────────────────────
  function gauss(r) { return (r() + r() + r() + r() - 2) * 0.87; }
  /** Recursive midpoint deformation (the layered-polygon watercolor technique). */
  function deform(poly, depth, vari, r) {
    for (var d = 0; d < depth; d++) {
      var out = [], n = poly.length;
      for (var i = 0; i < n; i++) {
        var a = poly[i], b = poly[(i + 1) % n];
        out.push(a);
        var dx = b[0] - a[0], dy = b[1] - a[1], L = Math.sqrt(dx * dx + dy * dy);
        var v = (a[2] + b[2]) / 2;
        out.push([(a[0] + b[0]) / 2 + gauss(r) * L * vari * v, (a[1] + b[1]) / 2 + gauss(r) * L * vari * v, v * (0.75 + r() * 0.5)]);
      }
      poly = out;
    }
    return poly;
  }
  function trace(g, poly) {
    g.beginPath();
    g.moveTo(poly[0][0], poly[0][1]);
    for (var i = 1; i < poly.length; i++) g.lineTo(poly[i][0], poly[i][1]);
    g.closePath();
  }
  /**
   * Paint a watercolor wash on a 2D context: o.layers translucent deformed copies (soft bleeding
   * edge), o.edge pigment-pooling stroke, o.gran granulation speckles, o.bloom a cauliflower bloom.
   */
  function wash(g, pts, col, o) {
    o = o || {};
    if (!pts || pts.length < 3) return;
    var r = R(o.seed != null ? o.seed : 1);
    var layers = o.layers || 8, alpha = o.alpha != null ? o.alpha : 0.1, vari = o.vari != null ? o.vari : 0.32;
    var base = deform(pts.map(function (p) { return [p[0], p[1], o.v != null ? o.v : 0.55 + r() * 0.9]; }), o.depth != null ? o.depth : 2, vari * 0.55, r);
    g.save();
    g.fillStyle = col;
    for (var i = 0; i < layers; i++) {
      var p = deform(base, o.ldepth != null ? o.ldepth : 2, vari, r);
      g.globalAlpha = alpha * (0.75 + r() * 0.5);
      trace(g, p);
      g.fill();
    }
    if (o.solid) { g.globalAlpha = o.solid; trace(g, base); g.fill(); }
    if (o.edge !== false) {
      g.globalAlpha = o.edgeA != null ? o.edgeA : 0.16;
      g.strokeStyle = dk(col, 0.25);
      g.lineWidth = o.edgeW || u(1.6);
      trace(g, deform(base, 1, vari * 0.3, r));
      g.stroke();
    }
    if (o.gran) {
      trace(g, base);
      g.clip();
      var bx = bbox(base);
      var n = Math.min(1400, Math.round((bx.w * bx.h) / Math.pow(u(9), 2) * o.gran));
      g.fillStyle = dk(col, 0.35);
      for (var k = 0; k < n; k++) {
        g.globalAlpha = 0.05 + r() * 0.12;
        var rr = u(0.6 + r() * 1.4);
        g.fillRect(bx.x + r() * bx.w, bx.y + r() * bx.h, rr, rr);
      }
    }
    g.restore();
  }
  function bbox(p) {
    var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    p.forEach(function (q) { x0 = Math.min(x0, q[0]); y0 = Math.min(y0, q[1]); x1 = Math.max(x1, q[0]); y1 = Math.max(y1, q[1]); });
    return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
  }
  /** Wobbly pencil line on canvas (two light passes). */
  function pencilC(g, pts, o) {
    o = o || {};
    var r = R(o.seed != null ? o.seed : 5);
    g.save();
    g.strokeStyle = o.color || INK;
    g.lineCap = "round"; g.lineJoin = "round";
    var passes = o.passes || 2;
    for (var k = 0; k < passes; k++) {
      g.globalAlpha = (o.alpha != null ? o.alpha : 0.5) * (k ? 0.55 : 1);
      g.lineWidth = (o.w || u(1.5)) * (k ? 0.7 : 1);
      var p = jit(pts, r, o.j != null ? o.j : u(1.2));
      g.beginPath();
      g.moveTo(p[0][0], p[0][1]);
      if (p.length === 2) g.lineTo(p[1][0], p[1][1]);
      for (var i = 1; i < p.length - 1; i++) {
        var xc = (p[i][0] + p[i + 1][0]) / 2, yc = (p[i][1] + p[i + 1][1]) / 2;
        g.quadraticCurveTo(p[i][0], p[i][1], xc, yc);
      }
      if (p.length > 2) g.lineTo(p[p.length - 1][0], p[p.length - 1][1]);
      if (o.closed) g.closePath();
      g.stroke();
    }
    g.restore();
  }
  /** Soft radial glow (light) on canvas. */
  function glowC(g, x, y, r, col, a) {
    g.save();
    var gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, rgba(col, a));
    gr.addColorStop(1, rgba(col, 0));
    g.fillStyle = gr;
    g.fillRect(x - r, y - r, r * 2, r * 2);
    g.restore();
  }
  function canvasEl(w, h, k, cls) {
    var c = document.createElement("canvas");
    k = k || 0.7;
    c.width = Math.max(2, Math.round(w * k));
    c.height = Math.max(2, Math.round(h * k));
    c.className = cls || "sb-canvas";
    c.style.width = f1(w) + "px";
    c.style.height = f1(h) + "px";
    var g = c.getContext("2d");
    g.scale(c.width / w, c.height / h);
    return { c: c, g: g, w: w, h: h };
  }
  function canvasURL(N, draw) {
    try {
      var c = document.createElement("canvas");
      c.width = c.height = N;
      draw(c.getContext("2d"), N);
      return c.toDataURL("image/png");
    } catch (e) { return ""; }
  }
  // Resolution of painted layers relative to display px (watercolor is soft; the paper grain on
  // top keeps it crisp). Lower = faster build.
  var PK = clamp(900 / Math.max(W, H), 0.42, 0.62);
  S.painter = { wash: wash, pencil: pencilC, glow: glowC, deform: deform, canvas: canvasEl };

  // ───────────────────────── paper textures ─────────────────────────
  var TILE = null, WASHTEX = {};
  function paperTile() {
    if (TILE != null) return TILE;
    TILE = canvasURL(256, function (g, N) {
      var r = R(5101);
      for (var i = 0; i < 34; i++) {
        var x = r() * N, y = r() * N, rad = 18 + r() * 60, light = r() < 0.5;
        for (var ox = -1; ox <= 1; ox++) for (var oy = -1; oy <= 1; oy++) {
          var gr = g.createRadialGradient(x + ox * N, y + oy * N, 0, x + ox * N, y + oy * N, rad);
          gr.addColorStop(0, light ? "rgba(255,252,240,0.06)" : "rgba(170,125,70,0.014)");
          gr.addColorStop(1, light ? "rgba(255,252,240,0)" : "rgba(170,125,70,0)");
          g.fillStyle = gr;
          g.fillRect(x + ox * N - rad, y + oy * N - rad, rad * 2, rad * 2);
        }
      }
      for (i = 0; i < 140; i++) {
        var fx = r() * N, fy = r() * N, a = r() * Math.PI, L = 4 + r() * 14;
        g.strokeStyle = r() < 0.6 ? "rgba(255,255,250,0.35)" : "rgba(120,90,55,0.12)";
        g.lineWidth = 0.5 + r() * 0.7;
        g.beginPath(); g.moveTo(fx, fy);
        g.quadraticCurveTo(fx + Math.cos(a) * L * 0.5 + (r() - 0.5) * 5, fy + Math.sin(a) * L * 0.5 + (r() - 0.5) * 5, fx + Math.cos(a) * L, fy + Math.sin(a) * L);
        g.stroke();
      }
      var img = g.getImageData(0, 0, N, N), d = img.data;
      for (var k = 0; k < d.length; k += 4) {
        var v = r();
        if (v < 0.07) { d[k] = 125; d[k + 1] = 92; d[k + 2] = 58; d[k + 3] = Math.max(d[k + 3], 6 + r() * 16); }
        else if (v > 0.93) { d[k] = 255; d[k + 1] = 252; d[k + 2] = 242; d[k + 3] = Math.max(d[k + 3], 20 + r() * 30); }
      }
      g.putImageData(img, 0, 0);
    });
    return TILE;
  }
  /** A small seamless-ish watercolor wash texture (data URL) — used for painted text fills. */
  function washTex(col, seed) {
    var key = col + ":" + seed;
    if (WASHTEX[key] != null) return WASHTEX[key];
    WASHTEX[key] = canvasURL(256, function (g, N) {
      g.fillStyle = lt(col, 0.18);
      g.fillRect(0, 0, N, N);
      var r = R(seed || 3);
      for (var i = 0; i < 9; i++) {
        var cx = r() * N, cy = r() * N, rad = 40 + r() * 80;
        wash(g, ellP(cx, cy, rad, rad * (0.6 + r() * 0.5), 9), i % 3 === 0 ? dk(col, 0.18) : i % 3 === 1 ? lt(col, 0.25) : col, { seed: seed + i * 7, layers: 4, alpha: 0.16, edgeA: 0.25 });
      }
      for (i = 0; i < 260; i++) { g.fillStyle = rgba(dk(col, 0.4), 0.1 + r() * 0.12); g.fillRect(r() * N, r() * N, 1 + r() * 1.5, 1 + r() * 1.5); }
    });
    return WASHTEX[key];
  }
  S.washTexture = washTex;

  // ───────────────────────── book world ─────────────────────────
  var BOOK = null;
  function newBook(root, opts) {
    opts = opts || {};
    root.classList.add("sb-root");
    var b = { root: root, fns: [], W: W, H: H, tl: V.timeline() };
    BOOK = b;
    var tile = paperTile();
    var tileSz = f1(u(300));
    b.paper = el("div.sb-paper", { parent: root });
    if (tile) { b.paper.style.backgroundImage = "url(" + tile + ")"; b.paper.style.backgroundSize = tileSz + "px " + tileSz + "px"; }
    if (opts.tint) b.paper.style.backgroundColor = opts.tint;
    b.world = el("div.sb-world", { parent: root });
    b.back = el("div.sb-layer.sb-back", { parent: b.world });
    b.mid = el("div.sb-layer.sb-mid", { parent: b.world });
    b.cast = el("div.sb-layer.sb-cast", { parent: b.world });
    b.front = el("div.sb-layer.sb-front", { parent: b.world });
    b.text = el("div.sb-layer.sb-textl", { parent: root });
    b.fx = el("div.sb-layer.sb-fx", { parent: root });
    // paper grain on top of the paint (multiply) + aged, deckled page edges
    var grain = el("div.sb-grain", { parent: root });
    if (tile) { grain.style.backgroundImage = "url(" + tile + ")"; grain.style.backgroundSize = tileSz + "px " + tileSz + "px"; }
    pageEdges(root);
    b.top = el("div.sb-layer.sb-top", { parent: root });
    V.onFrame(function (t) {
      for (var i = 0; i < b.fns.length; i++) {
        try { b.fns[i](t); } catch (e) { V.error("storybook frame: " + (e && e.message)); }
      }
    });
    return b;
  }
  function book() { return BOOK || newBook(V.root()); }
  function onT(fn) { book().fns.push(fn); }
  S.onFrame = onT;
  S.tl = function () { return book().tl; };

  function pageEdges(root) {
    var k = 0.35;
    var cv = canvasEl(W, H, k, "sb-edges");
    var g = cv.g, r = R(77 + hs(V.width + "x" + V.height));
    var m = Math.min(W, H);
    // soft aged edge: washes hugging the border
    var e = m * 0.07;
    var sides = [
      [[-e, -e], [W + e, -e], [W + e, e * 0.6], [-e, e * 0.6]],
      [[-e, H - e * 0.6], [W + e, H - e * 0.6], [W + e, H + e], [-e, H + e]],
      [[-e, -e], [e * 0.6, -e], [e * 0.6, H + e], [-e, H + e]],
      [[W - e * 0.6, -e], [W + e, -e], [W + e, H + e], [W - e * 0.6, H + e]],
    ];
    sides.forEach(function (sd, i) { wash(g, sd, "#C8A774", { seed: 301 + i * 13, layers: 6, alpha: 0.07, vari: 0.2, depth: 3, edge: false }); });
    // corner stains & foxing
    for (var i = 0; i < 4; i++) {
      var cx = i % 2 ? W : 0, cy = i < 2 ? 0 : H;
      glowC(g, cx, cy, m * 0.32, "#B48C58", 0.12);
    }
    for (i = 0; i < 7; i++) {
      var fx = r() < 0.5 ? r() * W * 0.12 : W - r() * W * 0.12, fy = r() * H;
      if (i % 2) { fx = r() * W; fy = r() < 0.5 ? r() * H * 0.1 : H - r() * H * 0.1; }
      glowC(g, fx, fy, u(6 + r() * 14), "#A97E4A", 0.12);
    }
    root.appendChild(cv.c);
  }

  // ───────────────────────── page turn ─────────────────────────
  /**
   * S.pageTurn(at = 0, dur = 0.9): the previous (blank) page lifts from the right edge and turns
   * over to the left with a curling back and a cast shadow, revealing this page.
   */
  S.pageTurn = function (at, dur) {
    var b = book();
    at = num(at, 0); dur = Math.max(0.3, num(dur, Math.min(0.95, DUR() * 0.25)));
    var wrap = el("div.sb-turn", { parent: b.top });
    var hinge = el("div.sb-hinge", { parent: wrap });
    var flat = el("div.sb-tflat", { parent: hinge });
    var back = el("div.sb-tback", { parent: hinge });
    var shadow = el("div.sb-tshadow", { parent: hinge });
    var tile = paperTile();
    if (tile) { flat.style.backgroundImage = "url(" + tile + ")"; flat.style.backgroundSize = f1(u(300)) + "px " + f1(u(300)) + "px"; }
    var Hh = H * 3, last = "";
    flat.style.height = back.style.height = shadow.style.height = f1(Hh) + "px";
    flat.style.top = back.style.top = shadow.style.top = f1(-Hh / 2) + "px";
    flat.style.width = f1(W * 3) + "px"; flat.style.left = f1(-W * 3) + "px";
    var sw = Math.max(W, H) * 0.06;
    shadow.style.width = f1(sw) + "px"; shadow.style.left = "0px";
    onT(function (t) {
      var p = eio(prog(t, at, at + dur));
      if (p >= 1) { if (last !== "done") { wrap.style.display = "none"; last = "done"; } return; }
      if (last === "done") wrap.style.display = "";
      var slant = W * 0.22 * Math.sin(Math.PI * Math.min(1, p * 1.1)) + W * 0.04;
      var xt = lerp(W + slant * 0.6 + u(40), -W * 0.05, p);
      var xb = xt - slant;
      var mx = (xt + xb) / 2;
      var ang = Math.atan2(xt - xb, H) * 180 / Math.PI;
      var bw = Math.max(0, Math.min(mx, (W - mx) * 0.5 + u(10)));
      var key = f1(mx) + "|" + f2(ang) + "|" + f1(bw);
      if (key === last) return;
      last = key;
      hinge.style.transform = "translate(" + f1(mx) + "px," + f1(H / 2) + "px) rotate(" + f2(ang) + "deg)";
      back.style.width = f1(bw) + "px";
      back.style.left = f1(-bw) + "px";
      shadow.style.opacity = f2(clamp(1 - p * 0.6, 0, 1));
    });
    return wrap;
  };

  // ───────────────────────── book text ─────────────────────────
  var SYNC_MIN = 0.03;
  /**
   * S.pageText(text, { parent?, x, y, w, h, size?, align?, italic?, dropCap?, color?, valign?, dim? })
   * Book-set serif text block that auto-fits its box. Returns { el, inner, words, show(at), speak(from, to) }.
   */
  S.pageText = function (text, o) {
    o = o || {};
    var b = book();
    var box = el("div.sb-pt", { parent: o.parent || b.text });
    box.style.left = f1(num(o.x, W * 0.1)) + "px";
    box.style.top = f1(num(o.y, H * 0.1)) + "px";
    box.style.width = f1(num(o.w, W * 0.8)) + "px";
    var hh = num(o.h, H * 0.3);
    box.style.height = f1(hh) + "px";
    if (o.valign === "top") box.style.justifyContent = "flex-start";
    if (o.valign === "bottom") box.style.justifyContent = "flex-end";
    var inner = el("div.sb-ptin", { parent: box });
    inner.style.fontSize = f1(num(o.size, u(46))) + "px";
    if (o.align) inner.style.textAlign = o.align;
    if (o.italic) inner.classList.add("sb-italic");
    if (o.color) inner.style.color = o.color;
    if (o.cls) inner.className += " " + o.cls;
    var t = str(text).trim();
    var drop = null;
    if (o.dropCap) {
      var m = /^([\s"“'‘*]*)(\p{L}|\p{N})/u.exec(t);
      if (m) { drop = m[2]; t = t.slice(0, m.index) + m[1].replace(/\*/g, "") + t.slice(m.index + m[0].length); }
    }
    inner.appendChild(S.rich(t));
    var words = S.splitWords(inner);
    var dropEl = null;
    if (drop) {
      dropEl = el("span.sb-drop", { text: drop });
      inner.insertBefore(dropEl, inner.firstChild);
      if (o.dropCap === "illuminated") dropEl.classList.add("sb-drop-ill");
    }
    fitBox(inner, { maxHeight: hh, maxWidth: num(o.w, W * 0.8), min: o.min || u(16) });
    var api = { el: box, inner: inner, words: words, drop: dropEl };
    api.show = function (at, dur) {
      b.tl.fromTo(box, { opacity: 0 }, { opacity: 1 }, { at: ct(at), dur: dur || 0.9, ease: "outCubic" });
      return api;
    };
    api.speak = function (from, to, so) {
      so = so || {};
      from = num(from, 0.3);
      to = num(to, Math.min(DUR() * 0.9, from + words.length * 0.34));
      var times = S.syncTimes(words.map(function (s) { return s.textContent; }), { start: from, end: to, lead: 0.06, minGap: SYNC_MIN });
      var dim = so.dim != null ? so.dim : o.dim != null ? o.dim : 0.2;
      words.forEach(function (s, i) {
        b.tl.fromTo(s, { opacity: dim }, { opacity: 1 }, { at: ct(times[i]), dur: 0.35, ease: "outQuad" });
      });
      // a painted wash swipes under *emphasis* as it is spoken
      [].forEach.call(inner.querySelectorAll(".v-em"), function (em, k) {
        var first = words.indexOf(em.querySelector(".v-word"));
        var at = first >= 0 ? times[first] : from + k;
        emWash(b, inner, em, at, k);
      });
      if (dropEl) b.tl.fromTo(dropEl, { opacity: 0.25 }, { opacity: 1 }, { at: ct(from - 0.1), dur: 0.6 });
      api.times = times;
      return api;
    };
    return api;
  };
  function emWash(b, inner, em, at, k) {
    try {
      var ir = inner.getBoundingClientRect();
      var rects = [].slice.call(em.getClientRects()).filter(function (q) { return q.width > 2; });
      rects.forEach(function (q, i) {
        var sw = el("span.sb-emwash", { parent: inner });
        sw.style.left = f1(q.left - ir.left - q.height * 0.12) + "px";
        sw.style.top = f1(q.top - ir.top + q.height * 0.5) + "px";
        sw.style.width = f1(q.width + q.height * 0.24) + "px";
        sw.style.height = f1(q.height * 0.42) + "px";
        sw.style.borderRadius = ["40% 60% 55% 45% / 60% 45% 55% 40%", "55% 45% 40% 60% / 45% 60% 40% 55%"][(k + i) % 2];
        b.tl.fromTo(sw, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1 }, { at: ct(at + i * 0.2), dur: 0.5, ease: "outCubic" });
      });
    } catch (e) { V.error("emWash: " + e.message); }
  }

  /** Small-caps label (chapter lines, captions). */
  S.label = function (text, o) {
    o = o || {};
    var d = el("div.sb-label", { parent: o.parent || book().text, text: plain(text) });
    if (o.x != null) { d.style.left = f1(o.x) + "px"; d.style.top = f1(o.y) + "px"; }
    if (o.w != null) d.style.width = f1(o.w) + "px";
    if (o.size) d.style.fontSize = f1(o.size) + "px";
    if (o.align) d.style.textAlign = o.align;
    if (o.color) d.style.color = o.color;
    if (o.w != null) fitBox(d, { maxLines: o.maxLines || 2, maxWidth: o.w, min: u(14) });
    return d;
  };

  // ───────────────────────── SVG boxes, paint-on ─────────────────────────
  function svgEl(markup, vb, wpx, hpx, cls) {
    var s = el("svg." + (cls || "sb-svg"), { viewBox: vb.join(" "), width: f1(wpx), height: f1(hpx) });
    s.setAttribute("overflow", "visible");
    s.innerHTML = markup;
    return s;
  }
  /** Paint an SVG on: pencil lines draw, then the washes soak in. */
  function paintOn(tl, svg, at, dur) {
    dur = dur || 1.1;
    at = ct(at);
    var pens = [].slice.call(svg.querySelectorAll(".sb-pen"));
    var fills = [].slice.call(svg.querySelectorAll(".sb-fill"));
    if (pens.length) tl.fromTo(pens, { draw: 0 }, { draw: 1 }, { at: at, dur: dur * 0.75, ease: "inOutSine", stagger: Math.min(0.04, (dur * 0.3) / pens.length) });
    if (fills.length) tl.fromTo(fills, { opacity: 0 }, { opacity: 1 }, { at: at + dur * 0.25, dur: dur * 0.75, ease: "outQuad" });
  }
  S.paintOn = function (target, at, dur) {
    var svg = target && target.svg ? target.svg : target;
    if (svg && svg.querySelectorAll) paintOn(book().tl, svg, at, dur);
  };

  // ───────────────────────── painted object library (100×100 design box) ─────────────────────────
  function sub(f, tx, ty, s) { return '<g transform="translate(' + tx + "," + ty + ") scale(" + s + ')">' + f() + "</g>"; }
  var OBJ = {
    apple: function () { return wc([[50, 30], [68, 24], [84, 38], [82, 62], [70, 84], [50, 80], [30, 84], [18, 62], [16, 38], [32, 24]], C.terracotta, { seed: 3 }) + pen([[50, 30], [52, 14], [56, 8]], { w: 2.2 }) + wc([[54, 18], [66, 8], [76, 12], [66, 20]], C.leaf, { seed: 4, j: 0.6 }); },
    pear: function () { return wc([[50, 18], [60, 26], [62, 42], [76, 58], [74, 80], [50, 90], [26, 80], [24, 58], [38, 42], [40, 26]], C.spring, { seed: 5 }) + pen([[50, 18], [52, 6]], { w: 2.2 }); },
    acorn: function () { return wc([[30, 46], [70, 46], [68, 70], [50, 90], [32, 70]], C.ochre, { seed: 6 }) + wc([[24, 46], [26, 30], [50, 22], [74, 30], [76, 46], [50, 50]], C.brown, { seed: 7 }) + pen([[50, 22], [52, 10]], { w: 2.4 }) + pen([[34, 36], [44, 32], [56, 32], [66, 36]], { w: 1, o: 0.5 }); },
    mushroom: function () { return wc([[40, 54], [60, 54], [62, 88], [38, 88]], C.cream, { seed: 8 }) + wc([[12, 56], [20, 30], [50, 16], [80, 30], [88, 56], [50, 60]], C.terracotta, { seed: 9 }) + dot(34, 38, 5, C.white, 0.9) + dot(58, 30, 6, C.white, 0.9) + dot(72, 46, 4, C.white, 0.9) + dot(46, 50, 3.5, C.white, 0.9); },
    leaf: function () { return wc([[16, 84], [22, 50], [46, 22], [84, 14], [78, 50], [54, 76]], C.leaf, { seed: 10 }) + pen([[16, 84], [40, 58], [62, 36], [82, 16]], { w: 1.4 }) + pen([[40, 58], [36, 42]], { w: 1, o: 0.5 }) + pen([[56, 44], [66, 54]], { w: 1, o: 0.5 }); },
    flower: function () {
      var s = pen([[50, 54], [48, 74], [50, 96]], { w: 2.2, c: C.moss }) + wc([[50, 78], [66, 66], [74, 70], [60, 82]], C.leaf, { seed: 12, j: 0.6 });
      for (var i = 0; i < 6; i++) { var a = (i / 6) * Math.PI * 2; s += wc(ellP(50 + Math.cos(a) * 17, 38 + Math.sin(a) * 17, 12, 9, 10, a), C.rose, { seed: 20 + i, j: 0.6, hl: false, lw: 1.2 }); }
      return s + wc(ellP(50, 38, 10, 10, 10), C.honey, { seed: 13 });
    },
    tulip: function () { return pen([[50, 50], [50, 96]], { w: 2.4, c: C.moss }) + wc([[50, 90], [30, 66], [36, 62], [50, 80]], C.leaf, { seed: 14, j: 0.5 }) + wc([[30, 22], [40, 34], [50, 18], [60, 34], [70, 22], [70, 46], [50, 58], [30, 46]], C.terracotta, { seed: 15 }); },
    tree: function () { return wc([[44, 96], [46, 58], [54, 58], [56, 96]], C.bark, { seed: 16 }) + wc(ellP(50, 40, 34, 30, 14), C.leaf, { seed: 17, j: 2.2 }) + wc(ellP(36, 46, 18, 14, 10), C.moss, { seed: 18, j: 1.6, line: false }) + wc(ellP(62, 30, 16, 12, 10), C.spring, { seed: 19, j: 1.6, line: false }); },
    pine: function () { return wc([[46, 96], [46, 82], [54, 82], [54, 96]], C.bark, { seed: 21 }) + wc([[50, 6], [70, 40], [62, 40], [80, 66], [66, 66], [86, 86], [14, 86], [34, 66], [20, 66], [38, 40], [30, 40]], C.forest, { seed: 22 }); },
    forest: function () { return sub(OBJ.pine, -6, 18, 0.7) + sub(OBJ.tree, 34, 22, 0.66) + sub(OBJ.pine, 14, 2, 0.8); },
    house: function () { return wc([[22, 50], [78, 50], [78, 92], [22, 92]], C.cream, { seed: 23 }) + wc([[64, 30], [74, 30], [74, 44], [64, 40]], C.brick, { seed: 25, j: 0.5 }) + wc([[14, 54], [50, 18], [86, 54]], C.terracotta, { seed: 24 }) + wc([[44, 68], [56, 68], [56, 92], [44, 92]], C.wood, { seed: 26, j: 0.5 }) + wc([[28, 60], [38, 60], [38, 70], [28, 70]], C.butter, { seed: 27, j: 0.4, hl: false }) + wc([[62, 60], [72, 60], [72, 70], [62, 70]], C.butter, { seed: 28, j: 0.4, hl: false }); },
    castle: function () { return wc([[16, 40], [26, 40], [26, 34], [32, 34], [32, 40], [38, 40], [38, 52], [62, 52], [62, 40], [68, 40], [68, 34], [74, 34], [74, 40], [84, 40], [84, 92], [16, 92]], C.stone, { seed: 29, j: 0.5 }) + wc([[40, 32], [60, 32], [60, 52], [40, 52]], lt(C.stone, 0.2), { seed: 30 }) + wc([[38, 32], [50, 10], [62, 32]], C.indigo, { seed: 31 }) + wc([[42, 70], [58, 70], [58, 92], [42, 92]], C.bark, { seed: 32, j: 0.5 }) + pen([[50, 10], [50, 2]], { w: 1.4 }) + wc([[50, 2], [62, 5], [50, 8]], C.terracotta, { seed: 33, j: 0.3, hl: false }); },
    tower: function () { return wc([[34, 30], [66, 30], [70, 92], [30, 92]], C.stone, { seed: 34 }) + wc([[28, 32], [50, 4], [72, 32]], C.terracotta, { seed: 35 }) + wc([[44, 46], [56, 46], [56, 60], [44, 60]], C.butter, { seed: 36, j: 0.4 }); },
    lighthouse: function () { return wc([[40, 30], [60, 30], [66, 92], [34, 92]], C.white, { seed: 37 }) + wc([[38, 46], [62, 46], [63, 56], [37, 56]], C.terracotta, { seed: 38, j: 0.4, line: false }) + wc([[36, 70], [64, 70], [65, 80], [35, 80]], C.terracotta, { seed: 39, j: 0.4, line: false }) + wc([[42, 18], [58, 18], [58, 30], [42, 30]], C.butter, { seed: 40, j: 0.4 }) + wc([[38, 18], [50, 6], [62, 18]], C.navy, { seed: 41, j: 0.5 }); },
    windmill: function () { return wc([[38, 40], [62, 40], [68, 92], [32, 92]], C.cream, { seed: 42 }) + wc([[34, 42], [50, 26], [66, 42]], C.brick, { seed: 43 }) + '<g transform="translate(50,38)">' + [0, 90, 180, 270].map(function (a, i) { return '<g transform="rotate(' + (a + 20) + ')">' + wc([[-3, 0], [3, 0], [6, -34], [-6, -34]], C.wood, { seed: 44 + i, j: 0.4, hl: false }) + "</g>"; }).join("") + "</g>" + dot(50, 38, 3, C.ink); },
    bridge: function () { return wc([[0, 74], [100, 74], [100, 90], [0, 90]], C.sea, { seed: 49, alpha: 0.6, line: false }) + wc([[4, 58], [30, 50], [50, 48], [70, 50], [96, 58], [96, 72], [82, 72], [74, 64], [50, 58], [26, 64], [18, 72], [4, 72]], C.stone, { seed: 48 }) + pen([[4, 54], [30, 46], [50, 44], [70, 46], [96, 54]], { w: 1.4 }); },
    well: function () { return wc([[26, 60], [74, 60], [74, 90], [26, 90]], C.stone, { seed: 50 }) + pen([[30, 60], [30, 26]], { w: 3 }) + pen([[70, 60], [70, 26]], { w: 3 }) + wc([[20, 30], [50, 12], [80, 30]], C.brick, { seed: 51 }) + pen([[50, 30], [50, 46]], { w: 1.2 }) + wc([[44, 46], [56, 46], [55, 56], [45, 56]], C.wood, { seed: 52, j: 0.4 }); },
    mountain: function () { return wc([[4, 90], [38, 22], [52, 44], [64, 30], [96, 90]], C.slate, { seed: 53 }) + wc([[30, 38], [38, 22], [46, 34], [40, 40]], C.snow, { seed: 54, j: 0.5, line: false }) + wc([[58, 38], [64, 30], [70, 40]], C.snow, { seed: 55, j: 0.5, line: false }); },
    boat: function () { return wc([[12, 64], [88, 64], [76, 84], [24, 84]], C.terracotta, { seed: 56 }) + pen([[50, 64], [50, 10]], { w: 2.2 }) + wc([[52, 12], [80, 56], [52, 56]], C.cream, { seed: 57 }) + wc([[48, 20], [26, 56], [48, 56]], C.butter, { seed: 58 }); },
    star: function () { var p = []; for (var i = 0; i < 10; i++) { var a = -Math.PI / 2 + (i / 10) * Math.PI * 2, rr = i % 2 ? 18 : 42; p.push([50 + Math.cos(a) * rr, 52 + Math.sin(a) * rr]); } return wc(p, C.honey, { seed: 59, j: 0.8 }); },
    moon: function () { return wc([[62, 10], [40, 18], [28, 40], [32, 66], [52, 84], [78, 84], [60, 70], [50, 50], [52, 28]], C.butter, { seed: 60 }); },
    sun: function () { var s = ""; for (var i = 0; i < 10; i++) { var a = (i / 10) * Math.PI * 2; s += pen([[50 + Math.cos(a) * 30, 50 + Math.sin(a) * 30], [50 + Math.cos(a) * 44, 50 + Math.sin(a) * 44]], { w: 2.4, c: C.ochre, o: 0.9, seed: i }); } return s + wc(ellP(50, 50, 24, 24, 14), C.honey, { seed: 61 }); },
    cloud: function () { return wc([[16, 70], [14, 54], [28, 44], [36, 28], [56, 24], [68, 36], [82, 38], [90, 54], [84, 70]], C.white, { seed: 62, lc: C.slate }); },
    rainbow: function () { var cs = [C.terracotta, C.honey, C.spring, C.sky, C.lilac], s = ""; cs.forEach(function (c, i) { var r0 = 42 - i * 6; s += pen(ellP(50, 80, r0, r0, 24, Math.PI).slice(0, 13), { w: 5.5, c: c, o: 0.8, seed: i + 70, j: 0.3 }); }); return s + sub(OBJ.cloud, -6, 52, 0.35) + sub(OBJ.cloud, 70, 52, 0.35); },
    heart: function () { return wc([[50, 30], [62, 16], [80, 18], [88, 36], [76, 58], [50, 84], [24, 58], [12, 36], [20, 18], [38, 16]], C.rose, { seed: 63 }); },
    book: function () { return wc([[10, 30], [48, 26], [50, 80], [12, 84]], C.cream, { seed: 64 }) + wc([[52, 26], [90, 30], [88, 84], [50, 80]], C.cream, { seed: 65 }) + wc([[8, 82], [50, 78], [92, 82], [92, 88], [50, 86], [8, 88]], C.terracotta, { seed: 66, j: 0.5 }) + pen([[18, 40], [42, 37]], { w: 1, o: 0.5 }) + pen([[18, 50], [42, 47]], { w: 1, o: 0.5 }) + pen([[58, 37], [82, 40]], { w: 1, o: 0.5 }) + pen([[58, 47], [82, 50]], { w: 1, o: 0.5 }) + pen([[18, 60], [38, 58]], { w: 1, o: 0.5 }); },
    key: function () { return wc(ellP(30, 50, 16, 16, 12), C.gold, { seed: 67 }) + dot(30, 50, 6, C.paper) + wc([[44, 46], [90, 46], [90, 54], [44, 54]], C.gold, { seed: 68, j: 0.4 }) + wc([[74, 54], [80, 54], [80, 66], [74, 66]], C.gold, { seed: 69, j: 0.3, hl: false }) + wc([[84, 54], [90, 54], [90, 62], [84, 62]], C.gold, { seed: 70, j: 0.3, hl: false }); },
    lantern: function () { return '<circle class="sb-fill" cx="50" cy="56" r="40" fill="url(#sbglow)"/>' + pen([[50, 4], [50, 14]], { w: 1.4 }) + wc([[32, 22], [68, 22], [62, 30], [38, 30]], C.ink, { seed: 71, j: 0.4 }) + wc([[36, 30], [64, 30], [66, 80], [34, 80]], C.butter, { seed: 72, alpha: 0.85 }) + wc([[30, 80], [70, 80], [66, 88], [34, 88]], C.ink, { seed: 73, j: 0.4 }) + wc([[46, 44], [54, 44], [56, 62], [50, 70], [44, 62]], C.terracotta, { seed: 74, j: 0.4, line: false }); },
    candle: function () { return '<circle class="sb-fill" cx="50" cy="30" r="32" fill="url(#sbglow)"/>' + wc([[38, 40], [62, 40], [62, 88], [38, 88]], C.cream, { seed: 75 }) + wc([[46, 36], [50, 14], [56, 34], [50, 40]], C.honey, { seed: 76, j: 0.4 }) + wc([[26, 86], [74, 86], [70, 94], [30, 94]], C.terracotta, { seed: 77 }); },
    teacup: function () { return pen([[40, 26], [35, 18], [42, 10]], { w: 1.6, c: C.stone, o: 0.7 }) + pen([[54, 24], [49, 16], [56, 8]], { w: 1.6, c: C.stone, o: 0.7 }) + pen([[72, 44], [88, 44], [88, 58], [70, 64]], { w: 3 }) + wc([[18, 38], [74, 38], [70, 66], [56, 78], [36, 78], [22, 66]], C.white, { seed: 78 }) + wc([[22, 46], [70, 46], [68, 52], [24, 52]], C.rose, { seed: 79, j: 0.4, line: false }) + wc([[8, 80], [92, 80], [80, 88], [20, 88]], C.white, { seed: 80 }); },
    cake: function () { return wc([[16, 48], [84, 48], [84, 88], [16, 88]], C.butter, { seed: 81 }) + wc([[14, 44], [86, 44], [86, 58], [78, 64], [70, 56], [60, 64], [50, 56], [40, 64], [30, 56], [20, 64], [14, 56]], C.pink, { seed: 82, j: 0.6 }) + dot(50, 38, 8, C.terracotta) + pen([[50, 30], [50, 22]], { w: 1.4 }); },
    bread: function () { return wc([[10, 70], [12, 46], [30, 32], [70, 30], [90, 46], [90, 70], [50, 76]], C.honey, { seed: 83 }) + pen([[34, 40], [28, 56]], { w: 1.4, o: 0.6 }) + pen([[52, 38], [46, 56]], { w: 1.4, o: 0.6 }) + pen([[70, 40], [64, 56]], { w: 1.4, o: 0.6 }); },
    honey: function () { return wc([[26, 32], [74, 32], [80, 52], [76, 86], [24, 86], [20, 52]], C.honey, { seed: 84 }) + wc([[24, 22], [76, 22], [76, 34], [24, 34]], C.terracotta, { seed: 85, j: 0.4 }) + wc([[32, 48], [68, 48], [68, 68], [32, 68]], C.cream, { seed: 86, j: 0.4 }) + pen([[40, 58], [60, 58]], { w: 1.2, o: 0.6 }); },
    basket: function () { return pen(ellP(50, 46, 32, 30, 16, Math.PI).slice(0, 9), { w: 3, c: C.wood }) + dot(34, 42, 8, C.terracotta) + dot(52, 40, 8, C.rose) + dot(66, 44, 7, C.spring) + wc([[12, 46], [88, 46], [80, 88], [20, 88]], C.woodLt, { seed: 87 }) + pen([[16, 60], [84, 60]], { w: 1, o: 0.5 }) + pen([[18, 74], [82, 74]], { w: 1, o: 0.5 }); },
    umbrella: function () { return pen([[50, 46], [50, 82], [48, 88], [42, 88], [40, 84]], { w: 2.2 }) + wc([[8, 50], [20, 26], [50, 12], [80, 26], [92, 50], [76, 46], [64, 52], [50, 46], [36, 52], [24, 46]], C.terracotta, { seed: 88 }); },
    feather: function () { return wc([[30, 88], [26, 56], [40, 26], [66, 10], [72, 30], [62, 58], [40, 80]], C.sky, { seed: 89 }) + pen([[22, 96], [36, 70], [52, 40], [68, 12]], { w: 1.6 }); },
    shell: function () { var s = wc([[50, 16], [80, 36], [86, 66], [62, 84], [38, 84], [14, 66], [20, 36]], C.pink, { seed: 90 }); for (var i = 0; i < 5; i++) s += pen([[50, 18], [24 + i * 13, 82]], { w: 1, o: 0.55, seed: 91 + i }); return s; },
    fish: function () { return wc([[14, 50], [32, 34], [60, 32], [76, 46], [92, 30], [92, 70], [76, 54], [60, 68], [32, 66]], C.teal, { seed: 96 }) + dot(32, 46, 3.5, C.ink) + pen([[46, 40], [50, 50], [46, 60]], { w: 1.2, o: 0.6 }); },
    bird: function () { return wc([[16, 56], [30, 40], [52, 38], [70, 46], [86, 40], [78, 56], [62, 68], [36, 70]], C.blue, { seed: 97 }) + wc([[40, 50], [62, 30], [64, 50]], lt(C.blue, 0.2), { seed: 98, j: 0.5 }) + wc([[14, 54], [4, 52], [14, 58]], C.ochre, { seed: 99, j: 0.3, hl: false }) + dot(26, 48, 2.6, C.ink); },
    butterfly: function () { return wc([[50, 50], [30, 20], [12, 30], [20, 50]], C.ochre, { seed: 100 }) + wc([[50, 50], [70, 20], [88, 30], [80, 50]], C.ochre, { seed: 101 }) + wc([[50, 52], [22, 58], [26, 78], [44, 68]], C.terracotta, { seed: 102 }) + wc([[50, 52], [78, 58], [74, 78], [56, 68]], C.terracotta, { seed: 103 }) + wc([[47, 34], [53, 34], [53, 72], [47, 72]], C.ink, { seed: 104, j: 0.3, hl: false }) + pen([[49, 34], [42, 22]], { w: 1 }) + pen([[51, 34], [58, 22]], { w: 1 }); },
    crown: function () { return wc([[14, 76], [16, 30], [32, 52], [50, 22], [68, 52], [84, 30], [86, 76]], C.gold, { seed: 105, j: 0.6 }) + dot(50, 62, 5, C.terracotta) + dot(30, 64, 4, C.blue) + dot(70, 64, 4, C.spring); },
    gift: function () { return wc([[16, 40], [84, 40], [84, 88], [16, 88]], C.blue, { seed: 106 }) + wc([[12, 30], [88, 30], [88, 42], [12, 42]], lt(C.blue, 0.15), { seed: 107 }) + wc([[44, 30], [56, 30], [56, 88], [44, 88]], C.terracotta, { seed: 108, j: 0.4, line: false }) + wc([[50, 30], [34, 14], [28, 26]], C.terracotta, { seed: 109, j: 0.4 }) + wc([[50, 30], [66, 14], [72, 26]], C.terracotta, { seed: 110, j: 0.4 }); },
    clock: function () { return wc(ellP(50, 52, 36, 36, 16), C.cream, { seed: 111, lw: 2.2 }) + pen([[50, 52], [50, 30]], { w: 2.4 }) + pen([[50, 52], [64, 60]], { w: 2.4 }) + dot(50, 52, 3, C.ink) + [0, 1, 2, 3].map(function (i) { var a = (i * Math.PI) / 2; return dot(50 + Math.cos(a) * 28, 52 + Math.sin(a) * 28, 2, C.ink); }).join(""); },
    letter: function () { return wc([[10, 28], [90, 28], [90, 76], [10, 76]], C.cream, { seed: 112, j: 0.6 }) + pen([[10, 30], [50, 56], [90, 30]], { w: 1.6 }) + dot(50, 56, 6, C.terracotta); },
    map: function () { return wc([[10, 22], [36, 16], [64, 24], [90, 18], [90, 80], [64, 86], [36, 78], [10, 84]], C.sand, { seed: 113, j: 0.6 }) + pen([[36, 16], [36, 78]], { w: 1, o: 0.4 }) + pen([[64, 24], [64, 86]], { w: 1, o: 0.4 }) + '<path class="sb-fill" d="M20 66 Q34 40 50 56 T78 34" fill="none" stroke="' + C.terracotta + '" stroke-width="2" stroke-dasharray="3 4" stroke-linecap="round"/>' + pen([[74, 30], [82, 38]], { w: 2, c: C.terracotta }) + pen([[82, 30], [74, 38]], { w: 2, c: C.terracotta }); },
    compass: function () { return wc(ellP(50, 50, 38, 38, 16), C.cream, { seed: 114 }) + wc([[16, 50], [50, 44], [84, 50], [50, 56]], C.slate, { seed: 116, j: 0.3, alpha: 0.6 }) + wc([[50, 16], [58, 50], [50, 84], [42, 50]], C.terracotta, { seed: 115, j: 0.3 }) + dot(50, 50, 3, C.ink); },
    egg: function () { return wc([[50, 12], [70, 30], [76, 58], [66, 82], [50, 88], [34, 82], [24, 58], [30, 30]], C.cream, { seed: 117 }) + dot(40, 40, 3, C.sand) + dot(60, 54, 4, C.sand) + dot(46, 66, 2.5, C.sand); },
    carrot: function () { return wc([[44, 28], [40, 8], [50, 22], [60, 6], [58, 28]], C.leaf, { seed: 119, j: 0.5 }) + wc([[30, 30], [56, 26], [64, 36], [30, 92]], C.fox, { seed: 118 }) + pen([[40, 48], [50, 46]], { w: 1, o: 0.5 }) + pen([[38, 64], [46, 62]], { w: 1, o: 0.5 }); },
    berries: function () { return pen([[50, 10], [36, 40]], { w: 1.4 }) + pen([[50, 10], [64, 44]], { w: 1.4 }) + wc([[50, 10], [70, 8], [76, 20], [58, 18]], C.leaf, { seed: 120, j: 0.4 }) + wc(ellP(34, 52, 14, 14, 10), C.plum, { seed: 121 }) + wc(ellP(62, 56, 14, 14, 10), C.plum, { seed: 122 }) + wc(ellP(48, 74, 14, 14, 10), C.violet, { seed: 123 }); },
    seed: function () { return pen([[50, 86], [50, 50]], { w: 2.4, c: C.moss }) + wc([[50, 60], [26, 46], [24, 36], [44, 42]], C.leaf, { seed: 125, j: 0.5 }) + wc([[50, 52], [74, 32], [80, 22], [58, 30]], C.spring, { seed: 126, j: 0.5 }) + wc([[20, 86], [80, 86], [76, 94], [24, 94]], C.brown, { seed: 124, j: 0.5 }); },
    snowflake: function () { var s = ""; for (var i = 0; i < 6; i++) { var a = (i / 6) * Math.PI * 2, c = Math.cos(a), sn = Math.sin(a); s += pen([[50, 50], [50 + c * 40, 50 + sn * 40]], { w: 2.2, c: C.blue, seed: i }); s += pen([[50 + c * 24 - sn * 9, 50 + sn * 24 + c * 9], [50 + c * 32, 50 + sn * 32], [50 + c * 24 + sn * 9, 50 + sn * 24 - c * 9]], { w: 1.6, c: C.blue, seed: i + 9 }); } return s; },
    tent: function () { return wc([[10, 88], [50, 16], [90, 88]], C.ochre, { seed: 127 }) + wc([[40, 88], [50, 50], [60, 88]], C.bark, { seed: 128, j: 0.4 }); },
    cave: function () { return wc([[6, 90], [16, 44], [40, 20], [70, 24], [90, 52], [94, 90]], C.stone, { seed: 129 }) + wc([[32, 90], [36, 58], [50, 48], [64, 58], [68, 90]], C.ink, { seed: 130, alpha: 0.85, line: false }); },
    lake: function () { return wc([[8, 60], [24, 40], [60, 36], [90, 50], [86, 74], [50, 82], [16, 76]], C.sea, { seed: 131 }) + pen([[30, 56], [44, 56]], { w: 1.2, c: C.white, o: 0.8 }) + pen([[56, 66], [72, 66]], { w: 1.2, c: C.white, o: 0.8 }); },
    village: function () { return sub(OBJ.house, -6, 28, 0.6) + sub(OBJ.tower, 28, 4, 0.66) + sub(OBJ.house, 50, 36, 0.52); },
  };
  var OBJ_ALIAS = { home: "house", cottage: "house", town: "village", hill: "mountain", mountains: "mountain", hills: "mountain", woods: "forest", trees: "forest", oak: "tree", fir: "pine", ship: "boat", sea: "lake", pond: "lake", river: "lake", water: "lake", night: "moon", sleep: "moon", dream: "star", stars: "star", idea: "lantern", light: "lantern", lamp: "lantern", fire: "candle", flame: "candle", tea: "teacup", cup: "teacup", food: "bread", sweet: "honey", jar: "honey", love: "heart", kindness: "heart", friend: "heart", friendship: "heart", time: "clock", mail: "letter", message: "letter", note: "letter", journey: "map", treasure: "gift", present: "gift", king: "crown", queen: "crown", gold: "crown", plant: "seed", sprout: "seed", grow: "seed", growth: "seed", fruit: "apple", nut: "acorn", rain: "umbrella", weather: "cloud", winter: "snowflake", snow: "snowflake", spring: "flower", summer: "sun", autumn: "leaf", fall: "leaf", rose: "flower", bloom: "flower", direction: "compass", explore: "compass", camp: "tent", read: "book", story: "book", learn: "book", school: "book" };
  S.objectNames = Object.keys(OBJ);
  function objMarkup(name) {
    var k = str(name).toLowerCase().trim();
    var f = OBJ[k] || OBJ[OBJ_ALIAS[k]];
    if (f) return f();
    // unknown → the matching line icon, pencilled over a soft wash spot
    var icons = window.SceneIcons || {};
    var ik = icons[k] ? k : icons.sparkles ? "sparkles" : Object.keys(icons)[0];
    var body = ik ? icons[ik] : "";
    return wc(ellP(50, 50, 40, 38, 14), C.butter, { seed: hs(k) + 3, line: false, alpha: 0.75 }) +
      '<g transform="translate(20,20) scale(2.5)" fill="none" stroke="' + INK + '" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round">' + str(body).replace(/<(path|circle|rect|line|polyline|polygon|ellipse)\b/g, '<$1 class="sb-pen"') + "</g>";
  }
  var GLOWDEF = '<defs><radialGradient id="sbglow"><stop offset="0" stop-color="#FFE7A8" stop-opacity="0.95"/><stop offset="1" stop-color="#FFE7A8" stop-opacity="0"/></radialGradient></defs>';
  S.objectMarkup = objMarkup;
  /**
   * S.object(name, { parent?, x, y, size, ax?, ay?, rotate? }) → { el, svg, paintOn(at, dur), fadeIn(at), bob(), out(at) }
   * A painted object (pen & wash) centred at x, y (size = px of its 100-unit box).
   */
  S.object = function (name, o) {
    o = o || {};
    var b = book();
    var size = num(o.size, u(160));
    var wrap = el("div.sb-obj", { parent: o.parent || b.front });
    var svg = svgEl(GLOWDEF + objMarkup(name), [0, 0, 100, 100], size, size);
    wrap.appendChild(svg);
    wrap.style.width = wrap.style.height = f1(size) + "px";
    wrap.style.left = f1(num(o.x, W / 2) - size * num(o.ax, 0.5)) + "px";
    wrap.style.top = f1(num(o.y, H / 2) - size * num(o.ay, 0.5)) + "px";
    if (o.rotate) svg.style.transform = "rotate(" + o.rotate + "deg)";
    var api = { el: wrap, svg: svg, size: size };
    api.paintOn = function (at, dur) { paintOn(b.tl, svg, at, dur); return api; };
    api.fadeIn = function (at, dur) { b.tl.fromTo(wrap, { opacity: 0, y: u(14) }, { opacity: 1, y: 0 }, { at: ct(at), dur: dur || 0.9, ease: "outCubic" }); return api; };
    api.bob = function (amp, speed, ph) {
      amp = num(amp, u(6)); speed = num(speed, 1.3); ph = num(ph, hs(name) % 7);
      onT(function (t) { svg.style.transform = "translateY(" + f1(Math.sin(t * speed + ph) * amp) + "px) rotate(" + f2((o.rotate || 0) + Math.sin(t * speed * 0.7 + ph) * 3) + "deg)"; });
      return api;
    };
    api.out = function (at, dur) { b.tl.to(wrap, { opacity: 0 }, { at: ct(at), dur: dur || 0.5, ease: "inQuad" }); return api; };
    return api;
  };

  // ───────────────────────── loose washes ─────────────────────────
  function cloudPts(x, y, w, h, seed) {
    // scalloped cloud: n round bumps around an ellipse
    var r = R(seed), pts = [], n = 9, cx = x + w / 2, cy = y + h / 2;
    for (var i = 0; i < n; i++) {
      var a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2, bump = 0.07 + r() * 0.04;
      for (var k = 0; k < 4; k++) {
        var q = k / 4, a = lerp(a0, a1, q), out = 0.4 + Math.sin(q * Math.PI) * bump;
        pts.push([cx + Math.cos(a) * w * (out + 0.04), cy + Math.sin(a) * h * out]);
      }
    }
    return pts;
  }
  /**
   * S.wash({ parent?, x, y, w, h, color, shape: "blob"|"oval"|"rect"|"cloud", seed?, alpha?, layers?, pencil? })
   * A watercolor wash (canvas) as an element covering x, y, w, h. Returns { el, bloom(at, dur) }.
   */
  S.wash = function (o) {
    o = o || {};
    var b = book();
    var w = Math.max(u(10), num(o.w, u(300))), h = Math.max(u(10), num(o.h, u(200)));
    var pad = Math.min(w, h) * 0.18 + u(6);
    var cv = canvasEl(w + pad * 2, h + pad * 2, o.k || clamp(300 / Math.max(w, h), 0.3, 0.75), "sb-wash");
    var seed = o.seed != null ? o.seed : hs(str(o.color) + Math.round(w) + "x" + Math.round(h));
    var pts, sh = o.shape || "blob";
    if (sh === "rect") pts = rectP(pad, pad, w, h, Math.min(w, h) * 0.08);
    else if (sh === "oval") pts = ellP(pad + w / 2, pad + h / 2, w / 2, h / 2, 12);
    else if (sh === "cloud") pts = cloudPts(pad, pad, w, h, seed);
    else { var rr = R(seed); pts = ellP(pad + w / 2, pad + h / 2, w / 2, h / 2, 9).map(function (p) { return [p[0] + (rr() - 0.5) * w * 0.1, p[1] + (rr() - 0.5) * h * 0.1]; }); }
    var col = o.color || C.butter;
    wash(cv.g, pts, col, { seed: seed, layers: o.layers || 9, alpha: o.alpha != null ? o.alpha : 0.12, vari: o.vari != null ? o.vari : sh === 'cloud' ? 0.05 : 0.22, gran: o.gran != null ? o.gran : 0.25, edgeA: o.edgeA, solid: o.solid });
    if (o.inner !== false) wash(cv.g, scl(pts, 0.6, [pad + w * 0.45, pad + h * 0.45]), lt(col, 0.1), { seed: seed + 9, layers: 4, alpha: 0.08, vari: 0.3, edge: false });
    if (o.pencil) pencilC(cv.g, dens(pts, u(20), true).concat([pts[0]]), { seed: seed + 4, alpha: 0.5, w: u(1.6), j: u(1.4) });
    var e = cv.c;
    e.style.left = f1(num(o.x, 0) - pad) + "px";
    e.style.top = f1(num(o.y, 0) - pad) + "px";
    (o.parent || b.back).appendChild(e);
    var api = { el: e };
    api.bloom = function (at, dur) {
      b.tl.fromTo(e, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1 }, { at: ct(at), dur: dur || 1.1, ease: "outCubic" });
      return api;
    };
    return api;
  };

  // ───────────────────────── ambient life ─────────────────────────
  function region(o) { return { x: num(o.x, 0), y: num(o.y, 0), w: num(o.w, W), h: num(o.h, H) }; }
  /** S.fireflies({ parent?, x, y, w, h, n = 14, color? }) — glowing motes that wander and pulse. */
  S.fireflies = function (o) {
    o = o || {};
    var b = book(), rg = region(o), n = clamp(Math.round(num(o.n, 14)), 1, 40), r = R(num(o.seed, 900));
    var col = o.color || "#FFE58A";
    var ps = [];
    for (var i = 0; i < n; i++) {
      var sz = u(20 + r() * 18);
      var d = el("div.sb-firefly", { parent: o.parent || b.fx });
      d.style.width = d.style.height = f1(sz) + "px";
      d.style.background = "radial-gradient(circle, #FFF8D6 0%, " + rgba(col, 0.9) + " 16%, " + rgba(col, 0.28) + " 40%, " + rgba(col, 0) + " 70%)";
      ps.push({ e: d, x: rg.x + r() * rg.w, y: rg.y + r() * rg.h, ax: u(30 + r() * 60), ay: u(20 + r() * 40), f1: 0.2 + r() * 0.35, f2: 0.15 + r() * 0.3, ph: r() * 6.28, fp: 0.9 + r() * 1.6, sz: sz });
    }
    onT(function (t) {
      for (var k = 0; k < ps.length; k++) {
        var p = ps[k];
        var x = p.x + Math.sin(t * p.f1 + p.ph) * p.ax + Math.sin(t * p.f2 * 2.3 + p.ph * 2) * p.ax * 0.3;
        var y = p.y + Math.cos(t * p.f2 + p.ph) * p.ay - t * u(4);
        var a = 0.25 + 0.75 * Math.pow(Math.max(0, Math.sin(t * p.fp + p.ph)), 2);
        p.e.style.transform = "translate(" + f1(x - p.sz / 2) + "px," + f1(y - p.sz / 2) + "px)";
        p.e.style.opacity = f2(a * (o.opacity != null ? o.opacity : 1));
      }
    });
    return ps;
  };
  var LEAF_SHAPES = {
    leaf: function (c, s) { return wc([[2, 20], [6, 9], [14, 3], [22, 2], [19, 11], [11, 18]], c, { seed: s, j: 0.4, lw: 0.9, ew: 0.8, mis: 0.6 }) + pen([[2, 20], [18, 5]], { w: 0.7, j: 0.2 }); },
    petal: function (c, s) { return wc([[4, 12], [10, 4], [18, 6], [20, 12], [12, 18]], c, { seed: s, j: 0.3, line: false }); },
    seed: function (c, s) { return pen([[12, 20], [12, 9]], { w: 0.6, c: "#8a7a66", j: 0.1 }) + [0, 1, 2, 3, 4, 5, 6].map(function (i) { var a = -Math.PI / 2 + (i - 3) * 0.42; return pen([[12, 9], [12 + Math.cos(a) * 8, 9 + Math.sin(a) * 8]], { w: 0.5, c: "#9a8c7a", j: 0.1, seed: i }); }).join(""); },
    snow: function () { return dot(12, 12, 4, "#FFFFFF", 0.9); },
  };
  /** S.leaves({ parent?, x, y, w, h, n = 10, kind: "leaf"|"petal"|"seed"|"snow", colors?, wind? }) — things drifting down. */
  S.leaves = function (o) {
    o = o || {};
    var b = book(), rg = region(o), n = clamp(Math.round(num(o.n, 10)), 1, 40), r = R(num(o.seed, 700));
    var kind = LEAF_SHAPES[o.kind] ? o.kind : "leaf";
    var cols = arr(o.colors).length ? arr(o.colors) : kind === "petal" ? [C.pink, C.blush, C.white] : [C.ochre, C.terracotta, C.leaf, C.honey];
    var ps = [];
    var wind = num(o.wind, 1);
    for (var i = 0; i < n; i++) {
      var sz = u((kind === "snow" ? 16 : 30) + r() * 22);
      var d = el("div.sb-leaf", { parent: o.parent || b.fx });
      d.appendChild(svgEl(LEAF_SHAPES[kind](cols[i % cols.length], 500 + i), [0, 0, 24, 24], sz, sz));
      ps.push({ e: d, x: rg.x + r() * rg.w, y0: r(), sp: u(40 + r() * 50), sw: u(20 + r() * 40), f: 0.6 + r() * 0.9, ph: r() * 6.28, rot: r() * 360, rs: 30 + r() * 80, sz: sz });
    }
    var span = rg.h + u(120);
    onT(function (t) {
      for (var k = 0; k < ps.length; k++) {
        var p = ps[k];
        var yy = ((p.y0 * span + t * p.sp) % span) - u(60);
        var x = p.x + Math.sin(t * p.f + p.ph) * p.sw + t * u(10) * wind;
        var flip = Math.cos(t * p.f * 1.3 + p.ph);
        var fade = Math.min(1, Math.min(yy + u(60), span - u(60) - yy) / u(70));
        p.e.style.transform = "translate(" + f1(x - p.sz / 2) + "px," + f1(rg.y + yy - p.sz / 2) + "px) rotate(" + f1(p.rot + t * p.rs * (k % 2 ? 1 : -1)) + "deg) scaleX(" + f2(0.35 + 0.65 * Math.abs(flip)) + ")";
        p.e.style.opacity = f2(clamp(fade, 0, 1) * (o.opacity != null ? o.opacity : 1));
      }
    });
    return ps;
  };
  /** S.twinkles({ parent?, x, y, w, h, n, color? }) — little four-point stars that twinkle. */
  S.twinkles = function (o) {
    o = o || {};
    var b = book(), rg = region(o), n = clamp(Math.round(num(o.n, 12)), 1, 50), r = R(num(o.seed, 333));
    var ps = [];
    for (var i = 0; i < n; i++) {
      var sz = u(14 + r() * 22);
      var d = el("div.sb-twinkle", { parent: o.parent || b.fx });
      d.appendChild(svgEl('<path d="M12 0 C13 9 15 11 24 12 C15 13 13 15 12 24 C11 15 9 13 0 12 C9 11 11 9 12 0Z" fill="' + (o.color || "#FFF3C4") + '"/>', [0, 0, 24, 24], sz, sz));
      d.style.left = f1(rg.x + r() * rg.w - sz / 2) + "px";
      d.style.top = f1(rg.y + r() * rg.h - sz / 2) + "px";
      ps.push({ e: d, f: 0.8 + r() * 1.8, ph: r() * 6.28 });
    }
    onT(function (t) {
      for (var k = 0; k < ps.length; k++) {
        var p = ps[k], s = 0.5 + 0.5 * Math.sin(t * p.f + p.ph);
        p.e.style.opacity = f2(0.25 + s * 0.75);
        p.e.style.transform = "scale(" + f2(0.55 + s * 0.5) + ") rotate(" + f1(t * 12 + p.ph * 20) + "deg)";
      }
    });
    return ps;
  };

  // ───────────────────────── ornaments ─────────────────────────
  /** Fleuron divider markup in a 300×40 box. */
  function fleuronMk(col) {
    col = col || C.terracotta;
    var s = pen([[20, 20], [70, 18], [110, 21], [136, 20]], { w: 1.4, seed: 1 }) + pen([[164, 20], [190, 19], [230, 22], [280, 20]], { w: 1.4, seed: 2 });
    s += pen([[136, 20], [130, 12], [138, 8], [144, 14], [140, 20]], { w: 1.3, seed: 3 }) + pen([[164, 20], [170, 28], [162, 32], [156, 26], [160, 20]], { w: 1.3, seed: 4 });
    s += wc([[150, 8], [160, 20], [150, 32], [140, 20]], col, { seed: 5, j: 0.3, lw: 1.1 });
    s += wc([[96, 20], [104, 12], [114, 14], [106, 22]], C.sage, { seed: 6, j: 0.3, lw: 0.9, hl: false }) + wc([[204, 20], [196, 28], [186, 26], [194, 18]], C.sage, { seed: 7, j: 0.3, lw: 0.9, hl: false });
    s += dot(20, 20, 2.2, col) + dot(280, 20, 2.2, col);
    return s;
  }
  /** Corner flourish (vine with leaves and a berry) in a 120×120 box, top-left corner. */
  function cornerMk(seed) {
    var s = pen([[8, 112], [10, 60], [24, 28], [56, 12], [112, 8]], { w: 1.6, seed: seed });
    s += pen([[10, 60], [26, 58], [30, 46], [22, 42]], { w: 1.2, seed: seed + 1 }) + pen([[56, 12], [58, 28], [46, 32], [42, 24]], { w: 1.2, seed: seed + 2 });
    s += wc([[18, 86], [28, 74], [36, 78], [26, 90]], C.sage, { seed: seed + 3, j: 0.4, lw: 1, hl: false }) + wc([[84, 18], [96, 26], [92, 34], [80, 26]], C.sage, { seed: seed + 4, j: 0.4, lw: 1, hl: false });
    s += wc([[24, 28], [36, 18], [42, 28], [30, 36]], C.leaf, { seed: seed + 5, j: 0.4, lw: 1, hl: false });
    s += dot(30, 46, 4, C.terracotta, 0.85) + dot(46, 26, 3.5, C.rose, 0.85) + dot(112, 8, 2.5, C.terracotta) + dot(8, 112, 2.5, C.terracotta);
    return s;
  }
  S.ornament = function (kind, o) {
    o = o || {};
    var b = book();
    var wrap = el("div.sb-orn", { parent: o.parent || b.text });
    var w = num(o.w, u(300));
    var svg;
    if (kind === "corner") {
      svg = svgEl(cornerMk(num(o.seed, 40)), [0, 0, 120, 120], w, w);
      if (o.flip) svg.style.transform = o.flip;
    } else svg = svgEl(fleuronMk(o.color), [0, 0, 300, 40], w, (w * 40) / 300);
    wrap.appendChild(svg);
    wrap.style.left = f1(num(o.x, 0)) + "px";
    wrap.style.top = f1(num(o.y, 0)) + "px";
    var api = { el: wrap, svg: svg };
    api.paintOn = function (at, dur) { paintOn(b.tl, svg, at, dur || 1.2); return api; };
    return api;
  };

  // ───────────────────────── painted locations ─────────────────────────
  // A painting is 4 canvases (sky / far / mid / near) painted once at build time, plus sprite
  // layers for ambient life. Coordinates inside painters are region px (0..w, 0..h).
  function band(P, y, amp, waves, seed, bottom) {
    var r = R(seed), pts = [], N = 26, x0 = -P.pm * 1.6, x1 = P.w + P.pm * 1.6;
    var ph = r() * 6.28, ph2 = r() * 6.28;
    for (var i = 0; i <= N; i++) {
      var q = i / N;
      pts.push([lerp(x0, x1, q), y - amp * (0.5 + 0.5 * Math.sin(q * Math.PI * waves + ph)) * (0.75 + 0.25 * Math.sin(q * Math.PI * waves * 2.7 + ph2))]);
    }
    pts.push([x1, bottom], [x0, bottom]);
    return pts;
  }
  function peaks(P, y, hgt, n, seed, bottom) {
    var r = R(seed), pts = [], x0 = -P.pm * 1.6, x1 = P.w + P.pm * 1.6, tops = [];
    pts.push([x0, y - hgt * 0.2]);
    for (var i = 0; i < n; i++) {
      var cx = lerp(x0, x1, (i + 0.5) / n) + (r() - 0.5) * (x1 - x0) / n * 0.5;
      var ph = hgt * (0.55 + r() * 0.45);
      var hw = (x1 - x0) / n * (0.5 + r() * 0.2);
      pts.push([cx - hw * 0.55, y - ph * 0.35 - r() * hgt * 0.1], [cx - hw * 0.15, y - ph * 0.85], [cx, y - ph], [cx + hw * 0.2, y - ph * 0.8], [cx + hw * 0.55, y - ph * 0.3]);
      tops.push([cx, y - ph, hw, ph]);
    }
    pts.push([x1, y - hgt * 0.15], [x1, bottom], [x0, bottom]);
    return { pts: pts, tops: tops };
  }
  function treeline(P, y, rad, seed, bottom) {
    var r = R(seed), x0 = -P.pm * 1.6, x1 = P.w + P.pm * 1.6, trees = [];
    for (var x = x0; x < x1 + rad; x += rad * (0.7 + r() * 0.6)) trees.push([x, y - r() * rad * 0.6, rad * (0.7 + r() * 0.6)]);
    var pts = [], N = 48;
    for (var i = 0; i <= N; i++) {
      var px = lerp(x0, x1, i / N), best = y + rad;
      trees.forEach(function (t) { var dx = px - t[0]; if (Math.abs(dx) < t[2]) best = Math.min(best, t[1] - Math.sqrt(t[2] * t[2] - dx * dx)); });
      pts.push([px, best]);
    }
    pts.push([x1, bottom], [x0, bottom]);
    return pts;
  }
  function pineShape(x, yb, h, wd) {
    var pts = [[x, yb - h]], tiers = 4;
    for (var i = 1; i <= tiers; i++) {
      var yy = yb - h + (h * 0.88 * i) / tiers, ww = wd * (0.3 + (0.7 * i) / tiers);
      pts.push([x + ww / 2, yy], [x + ww / 2 * 0.55, yy - h * 0.05]);
    }
    var right = pts.slice(1);
    var left = right.map(function (p) { return [2 * x - p[0], p[1]]; }).reverse();
    return [pts[0]].concat(right, left);
  }
  function painterKit(P, layers) {
    var r = P.rnd;
    function S_(k) { return r() * 100000 + k; }
    P.wash = function (layer, pts, col, o) { o = o || {}; if (o.dens) pts = dens(pts, o.dens, true); if (o.seed == null) o.seed = S_(1); wash(layers[layer].g, pts, col, o); };
    P.pencil = function (layer, pts, o) { o = o || {}; if (o.seed == null) o.seed = S_(2); pencilC(layers[layer].g, pts, o); };
    P.glow = function (layer, x, y, rad, col, a) { glowC(layers[layer].g, x, y, rad, col, a); };
    P.g = function (layer) { return layers[layer].g; };
    P.sky = function (top, bot, o) {
      o = o || {};
      var g = layers.sky.g, w = P.w, h = P.h, pm = P.pm;
      var cols = P.night ? [o.nightTop || C.night, o.nightBot || C.indigo] : P.dusk ? [o.duskTop || "#B9A6C6", o.duskBot || "#F2C29A"] : [top, bot];
      var gr = g.createLinearGradient(0, -pm, 0, h * (o.span || 0.8));
      gr.addColorStop(0, rgba(cols[0], 0.9));
      gr.addColorStop(1, rgba(cols[1], 0.75));
      g.fillStyle = gr;
      g.fillRect(-pm * 2, -pm * 2, w + pm * 4, h + pm * 4);
      for (var i = 0; i < 6; i++) {
        var cx = r() * w, cy = r() * h * 0.6, rx = w * (0.25 + r() * 0.3), ry = h * (0.1 + r() * 0.12);
        P.wash("sky", ellP(cx, cy, rx, ry, 10), mix(cols[0], cols[1], r()), { layers: 5, alpha: 0.07, vari: 0.25, edgeA: 0.06 });
      }
      if (P.night) {
        var gg = layers.sky.g;
        for (i = 0; i < 70; i++) {
          gg.fillStyle = "rgba(255,248,220," + (0.35 + r() * 0.55) + ")";
          var sx = r() * w, sy = r() * h * 0.62, sr = u(0.8 + r() * 1.8);
          gg.beginPath(); gg.arc(sx, sy, sr, 0, Math.PI * 2); gg.fill();
        }
      }
      if (P.dusk) glowC(layers.sky.g, w * 0.7, h * 0.55, h * 0.5, "#FFD9A0", 0.35);
    };
    P.tree = function (layer, x, yb, size, o) {
      o = o || {};
      var cols = o.colors || [C.leaf, C.moss, C.spring];
      var tw = size * 0.09, th = size * (o.trunk || 0.55);
      P.wash(layer, [[x - tw, yb], [x - tw * 0.6, yb - th], [x + tw * 0.6, yb - th], [x + tw, yb]], o.bark || C.bark, { layers: 6, alpha: 0.16, vari: 0.08, gran: 0.4 });
      P.pencil(layer, [[x - tw, yb], [x - tw * 0.55, yb - th * 0.6], [x - tw * 0.6, yb - th]], { alpha: 0.45, w: u(1.4) });
      P.pencil(layer, [[x + tw, yb], [x + tw * 0.6, yb - th * 0.5], [x + tw * 0.6, yb - th]], { alpha: 0.45, w: u(1.4) });
      var cy = yb - th - size * 0.18;
      var blobs = [[0, 0, 0.42, 0.34], [-0.26, 0.08, 0.26, 0.22], [0.27, 0.06, 0.26, 0.22], [-0.08, -0.2, 0.28, 0.22], [0.14, -0.14, 0.22, 0.2]];
      blobs.forEach(function (bq, i) {
        P.wash(layer, ellP(x + bq[0] * size, cy + bq[1] * size, bq[2] * size, bq[3] * size, 9), cols[i % cols.length], { layers: 7, alpha: 0.12, vari: 0.32, gran: 0.3 });
      });
      if (o.fruit) for (var k = 0; k < 6; k++) { var g = layers[layer].g; g.fillStyle = rgba(o.fruit, 0.8); g.beginPath(); g.arc(x + (r() - 0.5) * size * 0.6, cy + (r() - 0.4) * size * 0.4, size * 0.025, 0, 6.3); g.fill(); }
      P.pencil(layer, ellP(x, cy, size * 0.44, size * 0.36, 16).slice(8, 15), { alpha: 0.3, w: u(1.2), j: u(4) });
    };
    P.pine = function (layer, x, yb, h, col, o) {
      o = o || {};
      P.wash(layer, pineShape(x, yb, h, h * (o.wr || 0.46)), col || C.forest, { layers: o.layers || 6, alpha: o.alpha || 0.16, vari: 0.12, gran: 0.2, edgeA: 0.25 });
      if (o.line !== false) P.pencil(layer, [[x, yb - h], [x - h * 0.16, yb - h * 0.55]], { alpha: 0.3, w: u(1.2) });
    };
    P.house = function (layer, x, yb, w, h, wall, roof, o) {
      o = o || {};
      var rh = h * 0.55;
      if (o.chimney !== false) P.wash(layer, [[x + w * 0.62, yb - h - rh * 0.55], [x + w * 0.76, yb - h - rh * 0.55], [x + w * 0.76, yb - h - rh * 0.1], [x + w * 0.62, yb - h - rh * 0.3]], C.brick, { layers: 5, alpha: 0.18, vari: 0.06 });
      P.wash(layer, [[x, yb], [x, yb - h], [x + w, yb - h], [x + w, yb]], wall, { layers: 6, alpha: 0.17, vari: 0.06, gran: 0.25, edgeA: 0.2 });
      P.wash(layer, [[x - w * 0.08, yb - h + u(2)], [x + w * 0.5, yb - h - rh], [x + w * 1.08, yb - h + u(2)]], roof, { layers: 6, alpha: 0.18, vari: 0.07, gran: 0.35, edgeA: 0.25 });
      var lit = P.night || P.dusk;
      var winCol = lit ? "#FFD27A" : C.butter;
      var wins = o.windows || 2;
      for (var i = 0; i < wins; i++) {
        var wx = x + w * (wins === 1 ? 0.18 : 0.12 + i * 0.52), wy = yb - h * 0.72, ww = w * 0.24, wh = h * 0.26;
        if (lit) P.glow(layer, wx + ww / 2, wy + wh / 2, w * 0.4, "#FFC966", 0.35);
        P.wash(layer, [[wx, wy], [wx + ww, wy], [wx + ww, wy + wh], [wx, wy + wh]], winCol, { layers: 3, alpha: 0.35, vari: 0.04, edgeA: 0.3 });
        P.pencil(layer, [[wx + ww / 2, wy], [wx + ww / 2, wy + wh]], { alpha: 0.4, w: u(1.1) });
        P.pencil(layer, [[wx, wy + wh / 2], [wx + ww, wy + wh / 2]], { alpha: 0.4, w: u(1.1) });
      }
      var dx = x + w * (wins === 1 ? 0.6 : 0.4), dw = w * 0.2;
      P.wash(layer, [[dx, yb], [dx, yb - h * 0.48], [dx + dw, yb - h * 0.48], [dx + dw, yb]], o.door || C.wood, { layers: 4, alpha: 0.25, vari: 0.05 });
      P.pencil(layer, [[x, yb], [x, yb - h], [x + w, yb - h], [x + w, yb]], { alpha: 0.5, w: u(1.4) });
      P.pencil(layer, [[x - w * 0.08, yb - h + u(2)], [x + w * 0.5, yb - h - rh], [x + w * 1.08, yb - h + u(2)]], { alpha: 0.5, w: u(1.4) });
      if (o.chimney !== false) P.chimneys.push([x + w * 0.69, yb - h - rh * 0.55]);
    };
    P.tufts = function (layer, n, x0, x1, y0, y1, col) {
      for (var i = 0; i < n; i++) {
        var x = lerp(x0, x1, r()), y = lerp(y0, y1, r()), hh = u(10 + r() * 16);
        for (var k = -1; k <= 1; k++) P.pencil(layer, [[x + k * u(3), y], [x + k * u(6) + (r() - 0.5) * u(4), y - hh * (1 - Math.abs(k) * 0.3)]], { alpha: 0.4, w: u(1.2), color: col || C.moss, passes: 1, j: u(0.6) });
      }
    };
    P.flowers = function (layer, n, x0, x1, y0, y1, cols) {
      var g = layers[layer].g;
      for (var i = 0; i < n; i++) {
        var x = lerp(x0, x1, r()), y = lerp(y0, y1, Math.pow(r(), 0.7)), rr = u(2.5 + r() * 4) * (0.5 + (y - y0) / Math.max(1, y1 - y0));
        g.globalAlpha = 0.55 + r() * 0.35;
        g.fillStyle = cols[i % cols.length];
        g.beginPath(); g.arc(x, y, rr, 0, 6.3); g.fill();
        g.globalAlpha = 0.3; g.fillStyle = C.ochre; g.beginPath(); g.arc(x, y, rr * 0.35, 0, 6.3); g.fill();
      }
      g.globalAlpha = 1;
    };
  }
  function cloudSprite(P, layerKey, x, y, w, h, seed, col) {
    return P.sprite(layerKey, x, y, w, h, function (g, cw, chh) {
      var pts = cloudPts(cw * 0.08, chh * 0.12, cw * 0.84, chh * 0.72, seed);
      wash(g, pts, col || "#FFFDF7", { seed: seed, layers: 7, alpha: 0.16, vari: 0.25, edgeA: 0.1 });
      wash(g, mv(scl(pts, 0.7), 0, chh * 0.1), "#C9D4DC", { seed: seed + 3, layers: 3, alpha: 0.07, vari: 0.3, edge: false });
    });
  }
  function drifting(P, el2, x0, speed, span) {
    P.on(function (t) {
      var x = ((x0 + t * speed) % span + span) % span - span * 0.15;
      el2.style.transform = "translateX(" + f1(x) + "px)";
      el2.style.opacity = f2(P.edgeFade(x + parseFloat(el2.style.width) / 2, parseFloat(el2.style.top)));
    });
  }
  function birdSprite(P, layerKey, seed) {
    var r = R(seed), w = P.w, h = P.h;
    var d = P.svgSprite(layerKey, pen([[0, 6], [6, 2], [10, 6], [14, 2], [20, 6]], { w: 1.6, j: 0.3, seed: seed }), [0, 0, 20, 10], 0, 0, u(28), u(14));
    var y0 = h * (0.12 + r() * 0.2), sp = u(40 + r() * 30), ph = r() * 6.28, span = w + u(200);
    P.on(function (t) {
      var x = ((t * sp + r0(seed) * span) % span) - u(100);
      var y = y0 + Math.sin(t * 0.8 + ph) * u(12);
      var flap = 0.6 + 0.4 * Math.abs(Math.sin(t * 6 + ph));
      d.style.transform = "translate(" + f1(x) + "px," + f1(y) + "px) scaleY(" + f2(flap) + ")";
      d.style.opacity = f2(P.edgeFade(x, y));
    });
    return d;
  }
  function r0(seed) { return h01(seed, 3); }

  var LOC = {};
  LOC.forest = {
    ground: 0.86,
    paint: function (P) {
      var w = P.w, h = P.h, r = P.rnd;
      P.sky("#DCE3B5", "#F3E6BC", { duskTop: "#C9A9B8", duskBot: "#F0C08E" });
      P.wash("far", treeline(P, h * 0.5, h * 0.11, 11, h * 1.2), P.night ? "#3E4F6A" : "#AFC3A2", { dens: u(50), layers: 7, alpha: 0.11, vari: 0.12, edgeA: 0.1 });
      for (var i = 0; i < 9; i++) { var tx = r() * w; P.wash("far", [[tx - u(5), h * 0.86], [tx - u(3), h * 0.42], [tx + u(3), h * 0.42], [tx + u(5), h * 0.86]], "#8E9E86", { layers: 3, alpha: 0.12, vari: 0.05, edge: false }); }
      P.wash("far", treeline(P, h * 0.62, h * 0.09, 12, h * 1.2), P.night ? "#33445E" : "#8FAA88", { dens: u(50), layers: 7, alpha: 0.12, vari: 0.12, gran: 0.2 });
      if (!P.night) for (i = 0; i < 4; i++) { var rx = w * (0.15 + i * 0.22 + r() * 0.08); P.wash("mid", [[rx, -h * 0.1], [rx + w * 0.07, -h * 0.1], [rx + w * 0.2, h * 0.9], [rx + w * 0.1, h * 0.9]], "#FFF3C2", { layers: 3, alpha: 0.07, vari: 0.04, edge: false }); }
      var xs = [0.06, 0.27, 0.74, 0.95];
      xs.forEach(function (fx, k) {
        var x = w * fx + (r() - 0.5) * w * 0.04, tw = w * (0.022 + r() * 0.012) + u(8);
        P.wash("mid", [[x - tw * 1.3, h * 0.84], [x - tw, h * 0.1], [x + tw, h * 0.1], [x + tw * 1.4, h * 0.84]], k % 2 ? C.bark : "#7A5A44", { layers: 6, alpha: 0.16, vari: 0.05, gran: 0.6, dens: u(40) });
        P.pencil("mid", dens([[x - tw * 1.3, h * 0.84], [x - tw, h * 0.1]], u(30)), { alpha: 0.45, w: u(1.5) });
        P.pencil("mid", dens([[x + tw * 1.4, h * 0.84], [x + tw, h * 0.1]], u(30)), { alpha: 0.45, w: u(1.5) });
        for (var q = 0; q < 3; q++) P.pencil("mid", [[x - tw * 0.4, h * (0.3 + q * 0.18)], [x + tw * 0.1, h * (0.33 + q * 0.18)]], { alpha: 0.25, w: u(1), passes: 1 });
        var cc = [[C.leaf, C.moss, C.spring], [C.moss, C.forest, C.leaf], [C.ochre, C.leaf, C.terracotta], [C.forest, C.moss, C.spring]][k];
        for (var b = 0; b < 4; b++) P.wash("mid", ellP(x + (r() - 0.5) * w * 0.2, h * (0.02 + r() * 0.14), w * (0.1 + r() * 0.07), h * (0.11 + r() * 0.06), 9), cc[b % 3], { layers: 7, alpha: 0.12, vari: 0.3, gran: 0.3 });
      });
      var gy = h * 0.8;
      P.wash("near", band(P, gy, h * 0.05, 3, 21, h * 1.3), P.night ? "#2F4A47" : "#93AE6E", { dens: u(40), layers: 8, alpha: 0.12, vari: 0.1, gran: 0.25 });
      P.wash("near", [[w * 0.42, gy + h * 0.01], [w * 0.52, gy + h * 0.01], [w * 0.78, h * 1.1], [w * 0.22, h * 1.1]], P.night ? "#4A5470" : C.sand, { dens: u(30), layers: 6, alpha: 0.13, vari: 0.12, gran: 0.4 });
      [[0.14, 0.9, 1], [0.86, 0.92, 0.8], [0.62, 0.86, 0.6]].forEach(function (m, k) {
        var mx = w * m[0], my = h * m[1], ms = u(26) * m[2] * Math.max(1, h / 700);
        P.wash("near", [[mx - ms * 0.25, my], [mx - ms * 0.2, my - ms * 0.8], [mx + ms * 0.2, my - ms * 0.8], [mx + ms * 0.25, my]], C.cream, { layers: 3, alpha: 0.3, vari: 0.05 });
        P.wash("near", [[mx - ms, my - ms * 0.7], [mx, my - ms * 1.35], [mx + ms, my - ms * 0.7]], C.terracotta, { layers: 4, alpha: 0.28, vari: 0.08 });
        P.pencil("near", [[mx - ms, my - ms * 0.7], [mx, my - ms * 1.35], [mx + ms, my - ms * 0.7], [mx - ms, my - ms * 0.7]], { alpha: 0.5, w: u(1.2) });
      });
      P.tufts("near", 30, 0, w, gy, h, P.night ? "#6F8FA0" : C.moss);
      for (i = 0; i < 6; i++) { var fx2 = r() < 0.5 ? r() * w * 0.25 : w - r() * w * 0.25, fy = h * (0.86 + r() * 0.1); for (var f = 0; f < 5; f++) { var a = -Math.PI / 2 + (f - 2) * 0.45; P.pencil("near", [[fx2, fy], [fx2 + Math.cos(a) * u(40), fy + Math.sin(a) * u(40)]], { alpha: 0.4, w: u(1.3), color: C.forest, passes: 1 }); } P.wash("near", ellP(fx2, fy - u(18), u(30), u(14), 8), C.leaf, { layers: 3, alpha: 0.15, vari: 0.2, edge: false }); }
    },
    ambient: function (P) {
      if (!P.night) S.leaves({ parent: P.spr.near, x: P.pm, y: P.pm, w: P.w, h: P.h * 0.9, n: PORT ? 7 : 9, seed: 41 });
      if (P.night || P.dusk) S.fireflies({ parent: P.spr.near, x: P.pm, y: P.pm + P.h * 0.3, w: P.w, h: P.h * 0.55, n: 12, seed: 42 });
      else S.fireflies({ parent: P.spr.mid, x: P.pm, y: P.pm + P.h * 0.2, w: P.w, h: P.h * 0.6, n: 7, seed: 43, color: "#FFF6D0", opacity: 0.5 });
    },
  };
  LOC.village = {
    ground: 0.87,
    paint: function (P) {
      var w = P.w, h = P.h, r = P.rnd;
      P.sky("#B9D2DE", "#F2E7CE");
      P.wash("far", band(P, h * 0.56, h * 0.1, 2.4, 31, h * 1.2), P.night ? "#3B4A66" : "#AFC1A0", { dens: u(50), layers: 7, alpha: 0.12, vari: 0.1 });
      var sx = w * 0.5 + (r() - 0.5) * w * 0.2;
      P.wash("far", [[sx - u(14), h * 0.6], [sx - u(14), h * 0.42], [sx, h * 0.3], [sx + u(14), h * 0.42], [sx + u(14), h * 0.6]], P.night ? "#4A5A78" : "#9AA5B0", { layers: 4, alpha: 0.18, vari: 0.04 });
      P.pencil("far", [[sx, h * 0.3], [sx, h * 0.26]], { alpha: 0.4, w: u(1.2) });
      P.wash("far", band(P, h * 0.64, h * 0.05, 3, 33, h * 1.2), P.night ? "#33405A" : "#9DB48A", { dens: u(50), layers: 6, alpha: 0.12, vari: 0.1 });
      var base = h * 0.76;
      var hs2 = PORT ? [[0.04, 0.3, 0.3], [0.62, 0.34, 0.34]] : [[0.02, 0.2, 0.26], [0.3, 0.16, 0.22], [0.66, 0.22, 0.28]];
      var walls = [C.cream, "#EBC9A0", "#E7D9C0"], roofs = [C.terracotta, C.slate, C.honey];
      hs2.forEach(function (hq, i) { P.house("mid", w * hq[0], base, w * hq[1], h * hq[2], walls[i % 3], roofs[i % 3], { windows: hq[1] > 0.19 ? 2 : 1 }); });
      P.tree("mid", w * (PORT ? 0.5 : 0.56), base, h * 0.32, {});
      if (!PORT) P.tree("mid", w * 0.97, base, h * 0.36, { colors: [C.moss, C.leaf, C.ochre] });
      var gy = h * 0.78;
      P.wash("near", band(P, gy, h * 0.025, 2, 35, h * 1.3), P.night ? "#3A4A52" : "#A9BB86", { dens: u(40), layers: 7, alpha: 0.12, vari: 0.1 });
      P.wash("near", [[-P.pm, gy + h * 0.06], [w + P.pm, gy + h * 0.04], [w + P.pm, h * 1.2], [-P.pm, h * 1.2]], P.night ? "#4D5670" : "#CDBBA0", { dens: u(40), layers: 7, alpha: 0.13, vari: 0.08, gran: 0.6 });
      for (var i = 0; i < 46; i++) {
        var cx = r() * w, cy = h * (0.86 + r() * 0.14), cr = u(8 + r() * 10) * (0.6 + (cy / h - 0.84) * 3);
        P.pencil("near", ellP(cx, cy, cr, cr * 0.5, 8).concat([[cx + cr, cy]]), { alpha: 0.18, w: u(1), passes: 1, j: u(1) });
      }
      for (i = 0; i < 7; i++) { var fx = w * (0.02 + i * 0.05); P.pencil("near", [[fx, gy + h * 0.06], [fx, gy - h * 0.02]], { alpha: 0.5, w: u(2.2) }); }
      P.pencil("near", [[w * 0.02, gy], [w * 0.32, gy + u(4)]], { alpha: 0.45, w: u(1.6) });
      P.pencil("near", [[w * 0.02, gy + h * 0.03], [w * 0.32, gy + h * 0.03 + u(3)]], { alpha: 0.45, w: u(1.6) });
      P.flowers("near", 24, w * 0.6, w, gy - h * 0.01, gy + h * 0.05, [C.rose, C.butter, C.white, C.terracotta]);
      P.tufts("near", 14, 0, w, gy, gy + h * 0.06, C.moss);
    },
    ambient: function (P) {
      P.chimneys.forEach(function (c, i) { smoke(P, c[0], c[1], 50 + i); });
      if (!P.night) {
        var cl = cloudSprite(P, "far", 0, P.h * 0.08, P.w * 0.22, P.h * 0.12, 61);
        drifting(P, cl, P.w * 0.2, u(8), P.w * 1.3);
        birdSprite(P, "far", 71); birdSprite(P, "far", 72);
      } else S.twinkles({ parent: P.spr.far, x: P.pm, y: P.pm, w: P.w, h: P.h * 0.4, n: 10, seed: 73 });
    },
  };
  function smoke(P, x, y, seed) {
    var puffs = [], r = R(seed);
    for (var i = 0; i < 5; i++) {
      var sz = u(26 + r() * 16);
      var e = P.sprite("mid", x - sz / 2, y - sz, sz, sz, function (g, cw, chh) { wash(g, ellP(cw / 2, chh / 2, cw * 0.36, chh * 0.32, 8), P.night ? "#8E96B0" : "#D8D3CC", { seed: seed + i, layers: 5, alpha: 0.16, vari: 0.3, edgeA: 0.08 }); });
      puffs.push({ e: e, ph: i / 5 });
    }
    P.on(function (t) {
      puffs.forEach(function (p) {
        var q = (t * 0.22 + p.ph) % 1;
        p.e.style.transform = "translate(" + f1(Math.sin(q * 4 + p.ph * 6) * u(10) + q * u(40)) + "px," + f1(-q * u(150)) + "px) scale(" + f2(0.6 + q * 1.4) + ")";
        p.e.style.opacity = f2(Math.sin(q * Math.PI) * 0.85);
      });
    });
  }
  LOC.meadow = {
    ground: 0.86,
    paint: function (P) {
      var w = P.w, h = P.h, r = P.rnd;
      P.sky("#B5D2E0", "#F3EAD0");
      P.wash("far", band(P, h * 0.56, h * 0.12, 2, 41, h * 1.2), P.night ? "#36486A" : "#B8CB9C", { dens: u(50), layers: 7, alpha: 0.12, vari: 0.1 });
      for (var i = 0; i < 10; i++) { var tx = r() * w, ty = h * (0.52 + r() * 0.08); P.wash("far", ellP(tx, ty, u(14), u(10), 7), "#7E9A72", { layers: 3, alpha: 0.2, vari: 0.2, edge: false }); }
      P.wash("far", band(P, h * 0.66, h * 0.08, 1.6, 43, h * 1.2), P.night ? "#2E3E58" : "#9DBA80", { dens: u(50), layers: 7, alpha: 0.12, vari: 0.1, gran: 0.15 });
      var tx2 = PORT ? w * 0.8 : w * 0.84;
      P.tree("mid", tx2, h * 0.76, h * 0.62, { colors: [C.leaf, C.moss, C.spring], fruit: P.night ? null : C.terracotta });
      if (!PORT) P.tree("mid", w * 0.08, h * 0.74, h * 0.36, { colors: [C.moss, C.leaf, C.forest] });
      var gy = h * 0.76;
      P.wash("near", band(P, gy, h * 0.04, 2.2, 45, h * 1.3), P.night ? "#2F4A48" : "#A3BE73", { dens: u(40), layers: 8, alpha: 0.12, vari: 0.1, gran: 0.2 });
      P.wash("near", band(P, gy + h * 0.1, h * 0.03, 3, 46, h * 1.3), P.night ? "#2A4240" : "#8FAE62", { dens: u(40), layers: 6, alpha: 0.1, vari: 0.1 });
      P.flowers("near", PORT ? 50 : 70, 0, w, gy, h, P.night ? ["#9AA6C8", "#C8C0D8", "#E8E2C8"] : [C.rose, C.butter, C.white, C.lilac, C.terracotta]);
      P.tufts("near", 36, 0, w, gy, h, P.night ? "#6F8FA0" : C.moss);
    },
    ambient: function (P) {
      var w = P.w, h = P.h;
      if (P.night) { S.twinkles({ parent: P.spr.far, x: P.pm, y: P.pm, w: w, h: h * 0.45, n: 12, seed: 81 }); S.fireflies({ parent: P.spr.near, x: P.pm, y: P.pm + h * 0.5, w: w, h: h * 0.4, n: 12, seed: 82 }); return; }
      var sun = P.sprite("sky", w * 0.12, h * 0.06, h * 0.26, h * 0.26, function (g, cw, chh) {
        glowC(g, cw / 2, chh / 2, cw / 2, "#FFE6A0", 0.55);
        wash(g, ellP(cw / 2, chh / 2, cw * 0.22, chh * 0.22, 10), P.dusk ? "#F2A66A" : "#F6D27A", { seed: 83, layers: 7, alpha: 0.2, vari: 0.12 });
      });
      P.on(function (t) { sun.style.transform = "scale(" + f2(1 + Math.sin(t * 0.8) * 0.03) + ")"; });
      var c1 = cloudSprite(P, "far", 0, h * 0.1, w * 0.24, h * 0.13, 84), c2 = cloudSprite(P, "far", 0, h * 0.24, w * 0.16, h * 0.09, 85);
      drifting(P, c1, w * 0.45, u(9), w * 1.3);
      drifting(P, c2, w * 0.95, u(6), w * 1.3);
      for (var i = 0; i < (PORT ? 2 : 3); i++) butterfly(P, 90 + i);
      S.leaves({ parent: P.spr.near, x: P.pm, y: P.pm, w: w, h: h * 0.9, n: 6, kind: "petal", seed: 95 });
    },
  };
  function butterfly(P, seed) {
    var r = R(seed), sz = u(34 + r() * 10);
    var col = [C.ochre, C.terracotta, C.lilac, C.sky][seed % 4];
    var mk = wc([[12, 12], [5, 3], [1, 6], [3, 12]], col, { seed: seed, j: 0.3, lw: 0.7, hl: false }) + wc([[12, 12], [19, 3], [23, 6], [21, 12]], col, { seed: seed + 1, j: 0.3, lw: 0.7, hl: false }) + wc([[12, 13], [5, 15], [6, 21], [11, 18]], dk(col, 0.1), { seed: seed + 2, j: 0.3, lw: 0.7, hl: false }) + wc([[12, 13], [19, 15], [18, 21], [13, 18]], dk(col, 0.1), { seed: seed + 3, j: 0.3, lw: 0.7, hl: false }) + '<rect x="11.3" y="7" width="1.4" height="12" rx="0.7" fill="' + C.ink + '"/>';
    var d = P.svgSprite("near", mk, [0, 0, 24, 24], 0, 0, sz, sz);
    var cx = P.w * (0.2 + r() * 0.6), cy = P.h * (0.5 + r() * 0.25), ax = P.w * (0.12 + r() * 0.1), ay = P.h * (0.06 + r() * 0.06), f = 0.25 + r() * 0.2, ph = r() * 6.28;
    var svg = d.firstChild;
    P.on(function (t) {
      var x = cx + Math.sin(t * f + ph) * ax, y = cy + Math.sin(t * f * 2.1 + ph) * ay + Math.sin(t * 3 + ph) * u(6);
      d.style.transform = "translate(" + f1(x - sz / 2) + "px," + f1(y - sz / 2) + "px) rotate(" + f1(Math.cos(t * f + ph) * 20) + "deg)";
      svg.style.transform = "scaleX(" + f2(0.25 + 0.75 * Math.abs(Math.sin(t * 9 + ph))) + ")";
    });
  }
  LOC.seaside = {
    ground: 0.88,
    paint: function (P) {
      var w = P.w, h = P.h, r = P.rnd;
      P.sky("#C9DFE8", "#F6E2C4", { span: 0.55 });
      var hz = h * 0.5;
      P.wash("far", [[-P.pm * 2, hz], [w + P.pm * 2, hz], [w + P.pm * 2, h * 1.2], [-P.pm * 2, h * 1.2]], P.night ? "#2C3F66" : "#7FB0C4", { dens: u(60), layers: 7, alpha: 0.13, vari: 0.04, gran: 0.2, edgeA: 0.1 });
      P.wash("far", [[-P.pm * 2, hz + h * 0.06], [w + P.pm * 2, hz + h * 0.05], [w + P.pm * 2, h * 1.2], [-P.pm * 2, h * 1.2]], P.night ? "#24365A" : C.sea, { dens: u(60), layers: 6, alpha: 0.1, vari: 0.04 });
      P.pencil("far", dens([[-P.pm, hz], [w + P.pm, hz + u(2)]], u(60)), { alpha: 0.35, w: u(1.3) });
      var cl = PORT ? -w * 0.1 : -w * 0.02;
      P.wash("far", [[cl, hz + u(4)], [cl, hz - h * 0.12], [cl + w * 0.12, hz - h * 0.14], [cl + w * 0.24, hz - h * 0.08], [cl + w * 0.3, hz + u(4)]], P.night ? "#3C4A60" : "#9C9C80", { layers: 6, alpha: 0.16, vari: 0.1, gran: 0.4 });
      var lx = cl + w * 0.13, ly = hz - h * 0.135, lh = h * 0.13, lw = u(18) * Math.max(1, h / 700);
      P.wash("far", [[lx - lw * 0.6, ly], [lx - lw * 0.4, ly - lh], [lx + lw * 0.4, ly - lh], [lx + lw * 0.6, ly]], C.white, { layers: 4, alpha: 0.35, vari: 0.03 });
      P.wash("far", [[lx - lw * 0.55, ly - lh * 0.3], [lx + lw * 0.55, ly - lh * 0.3], [lx + lw * 0.5, ly - lh * 0.48], [lx - lw * 0.5, ly - lh * 0.48]], C.terracotta, { layers: 3, alpha: 0.35, vari: 0.03, edge: false });
      P.wash("far", [[lx - lw * 0.5, ly - lh], [lx, ly - lh - lw * 0.8], [lx + lw * 0.5, ly - lh]], C.navy, { layers: 3, alpha: 0.35, vari: 0.03 });
      P.lamp = [lx, ly - lh * 0.95];
      for (var i = 0; i < 16; i++) { var wx = r() * w, wy = hz + h * (0.03 + r() * 0.17), wl = u(20 + r() * 40); P.pencil("mid", [[wx, wy], [wx + wl * 0.5, wy - u(3)], [wx + wl, wy]], { alpha: 0.3, w: u(1.2), color: P.night ? "#8FA8C8" : "#3F6E85", passes: 1 }); }
      var sh = h * 0.7;
      var shore = band(P, sh, h * 0.04, 1.4, 51, h * 1.3);
      P.wash("mid", shore.map(function (p) { return [p[0], p[1] - h * 0.015]; }), "#FFFFFF", { dens: u(40), layers: 4, alpha: 0.2, vari: 0.08, edge: false });
      P.wash("near", shore, P.night ? "#5A5E7A" : "#E3C995", { dens: u(40), layers: 8, alpha: 0.13, vari: 0.08, gran: 0.7 });
      P.wash("near", band(P, sh + h * 0.03, h * 0.03, 1.4, 52, sh + h * 0.07), P.night ? "#4C5270" : "#CDB07D", { dens: u(40), layers: 4, alpha: 0.12, vari: 0.08, edge: false });
      for (i = 0; i < 9; i++) { var sx = r() * w, sy = h * (0.82 + r() * 0.15), ss = u(6 + r() * 8); P.wash("near", ellP(sx, sy, ss, ss * 0.7, 7), [C.pink, C.cream, C.stone][i % 3], { layers: 3, alpha: 0.3, vari: 0.15 }); }
      var gx = PORT ? w * 0.85 : w * 0.92;
      for (i = 0; i < 12; i++) { var a = -Math.PI / 2 + (r() - 0.5) * 1.2; P.pencil("near", [[gx + (r() - 0.5) * u(60), h * 0.84], [gx + Math.cos(a) * u(70), h * 0.84 + Math.sin(a) * u(70)]], { alpha: 0.45, w: u(1.3), color: C.moss, passes: 1 }); }
      P.wash("near", ellP(w * 0.08, h * 0.9, u(46), u(26), 9), C.stone, { layers: 5, alpha: 0.2, vari: 0.15, gran: 0.6 });
    },
    ambient: function (P) {
      var w = P.w, h = P.h;
      var boatX = PORT ? w * 0.62 : w * 0.68, bs = h * 0.13;
      var bt = P.svgSprite("mid", OBJ.boat(), [0, 0, 100, 100], boatX, h * 0.52 - bs * 0.62, bs, bs);
      P.on(function (t) { bt.style.transform = "translate(" + f1(Math.sin(t * 0.18) * u(30)) + "px," + f1(Math.sin(t * 1.4) * u(3)) + "px) rotate(" + f2(Math.sin(t * 1.1) * 3) + "deg)"; });
      if (P.night) {
        S.twinkles({ parent: P.spr.far, x: P.pm, y: P.pm, w: w, h: h * 0.4, n: 12, seed: 101 });
        var beam = P.sprite("far", P.lamp[0] - h * 0.12, P.lamp[1] - h * 0.12, h * 0.24, h * 0.24, function (g, cw, chh) { glowC(g, cw / 2, chh / 2, cw / 2, "#FFE7A0", 0.7); });
        P.on(function (t) { beam.style.opacity = f2(0.5 + 0.5 * Math.abs(Math.sin(t * 0.9))); });
      } else { birdSprite(P, "far", 102); birdSprite(P, "far", 103); var c = cloudSprite(P, "sky", 0, h * 0.1, w * 0.2, h * 0.1, 104); drifting(P, c, w * 0.6, u(7), w * 1.3); }
      S.twinkles({ parent: P.spr.mid, x: P.pm, y: P.pm + h * 0.52, w: w, h: h * 0.14, n: 10, seed: 105, color: "#FFFFFF" });
    },
  };
  LOC["night-sky"] = {
    ground: 0.86, night: true,
    paint: function (P) {
      var w = P.w, h = P.h, r = P.rnd;
      P.sky(C.night, C.indigo, { span: 0.9 });
      P.wash("sky", ellP(w * 0.45, h * 0.35, w * 0.6, h * 0.1, 10).map(function (p) { return [p[0], p[1] + (p[0] - w * 0.45) * 0.25]; }), "#6A6FA0", { layers: 6, alpha: 0.06, vari: 0.3, edge: false });
      P.wash("sky", [[-P.pm * 2, h * 0.5], [w + P.pm * 2, h * 0.48], [w + P.pm * 2, h * 1.2], [-P.pm * 2, h * 1.2]], "#7D6E9E", { dens: u(60), layers: 5, alpha: 0.1, vari: 0.05, edge: false });
      P.wash("far", band(P, h * 0.62, h * 0.12, 1.8, 61, h * 1.2), "#2E3B60", { dens: u(50), layers: 7, alpha: 0.14, vari: 0.1 });
      var cx = PORT ? w * 0.18 : w * 0.12, cy = h * 0.74;
      for (var i = 0; i < 5; i++) P.pine("mid", w * (PORT ? 0.62 : 0.66) + i * w * 0.07 + (r() - 0.5) * u(20), h * (0.76 + r() * 0.02), h * (0.16 + r() * 0.1), "#1F2B48", { alpha: 0.2 });
      P.house("mid", cx, cy, w * (PORT ? 0.22 : 0.13), h * 0.12, "#3E4868", "#2A3352", { windows: 1 });
      var gy = h * 0.78;
      P.wash("near", band(P, gy, h * 0.05, 1.5, 63, h * 1.3), "#24314F", { dens: u(40), layers: 8, alpha: 0.14, vari: 0.1, gran: 0.2 });
      P.tufts("near", 26, 0, w, gy, h, "#7D8FB8");
    },
    ambient: function (P) {
      var w = P.w, h = P.h;
      var ms = h * (PORT ? 0.16 : 0.24), mx = PORT ? w * 0.68 : w * 0.76, my = h * 0.08;
      var moon = P.sprite("sky", mx - ms * 0.5, my - ms * 0.5, ms * 2, ms * 2, function (g, cw, chh) {
        glowC(g, cw / 2, chh / 2, cw / 2, "#FFF0C0", 0.32);
        wash(g, ellP(cw / 2, chh / 2, cw * 0.2, chh * 0.2, 12), "#FBEBC0", { seed: 111, layers: 8, alpha: 0.22, vari: 0.06, edgeA: 0.2 });
        wash(g, ellP(cw * 0.46, chh * 0.47, cw * 0.05, chh * 0.04, 7), "#D8C69A", { seed: 112, layers: 3, alpha: 0.2, vari: 0.2, edge: false });
        wash(g, ellP(cw * 0.56, chh * 0.56, cw * 0.035, chh * 0.03, 7), "#D8C69A", { seed: 113, layers: 3, alpha: 0.2, vari: 0.2, edge: false });
      });
      P.on(function (t) { moon.style.transform = "translateY(" + f1(Math.sin(t * 0.3) * u(4)) + "px)"; });
      S.twinkles({ parent: P.spr.sky, x: P.pm, y: P.pm, w: w, h: h * 0.55, n: PORT ? 14 : 18, seed: 114 });
      S.fireflies({ parent: P.spr.near, x: P.pm, y: P.pm + h * 0.55, w: w, h: h * 0.35, n: 10, seed: 115 });
      var ss = P.sprite("sky", 0, 0, u(160), u(8), function (g, cw, chh) {
        var gr = g.createLinearGradient(0, 0, cw, 0); gr.addColorStop(0, "rgba(255,248,220,0)"); gr.addColorStop(1, "rgba(255,248,220,0.95)");
        g.fillStyle = gr; g.fillRect(0, chh * 0.3, cw, chh * 0.4);
      });
      var t0 = Math.min(2.2, DUR() * 0.35);
      P.on(function (t) {
        var q = prog(t, t0, t0 + 1.1);
        ss.style.opacity = f2(q > 0 && q < 1 ? Math.sin(q * Math.PI) : 0);
        ss.style.transform = "translate(" + f1(w * 0.15 + q * w * 0.35) + "px," + f1(h * 0.12 + q * h * 0.14) + "px) rotate(22deg)";
      });
    },
  };
  LOC.cottage = {
    ground: 0.9, interior: true,
    paint: function (P) {
      var w = P.w, h = P.h, r = P.rnd, nt = P.night;
      var g = P.g("sky");
      g.fillStyle = rgba(nt ? "#B9946A" : "#EBD2A2", 0.8);
      g.fillRect(-P.pm * 2, -P.pm * 2, w + P.pm * 4, h + P.pm * 4);
      for (var i = 0; i < 6; i++) P.wash("sky", ellP(r() * w, r() * h * 0.7, w * 0.3, h * 0.2, 9), mix("#E2C08C", "#F1DDB4", r()), { layers: 4, alpha: 0.08, vari: 0.25, edge: false });
      for (var sx = 0; sx < w + P.pm; sx += u(44)) P.wash("sky", [[sx, -P.pm], [sx + u(10), -P.pm], [sx + u(10), h * 0.62], [sx, h * 0.62]], C.rose, { layers: 2, alpha: 0.06, vari: 0.02, edge: false });
      P.wash("sky", [[-P.pm * 2, h * 0.62], [w + P.pm * 2, h * 0.62], [w + P.pm * 2, h * 0.86], [-P.pm * 2, h * 0.86]], C.woodLt, { dens: u(60), layers: 5, alpha: 0.14, vari: 0.03, gran: 0.4 });
      P.pencil("sky", dens([[-P.pm, h * 0.62], [w + P.pm, h * 0.62]], u(60)), { alpha: 0.4, w: u(1.4) });
      // window
      var wx = w * (PORT ? 0.06 : 0.08), wy = h * 0.14, ww = w * (PORT ? 0.36 : 0.24), wh = h * 0.34;
      P.wash("far", [[wx, wy], [wx + ww, wy], [wx + ww, wy + wh], [wx, wy + wh]], nt ? C.night : "#B9D5E2", { layers: 5, alpha: 0.22, vari: 0.03 });
      if (!nt) P.wash("far", band({ w: ww, pm: 0 }, wy + wh * 0.72, wh * 0.14, 1.5, 121, wy + wh).map(function (p) { return [clamp(p[0] + wx, wx, wx + ww), p[1]]; }), "#9DBA80", { layers: 4, alpha: 0.22, vari: 0.05, edge: false });
      else P.wash("far", ellP(wx + ww * 0.7, wy + wh * 0.3, ww * 0.08, ww * 0.08, 9), "#FBEBC0", { layers: 4, alpha: 0.3, vari: 0.05 });
      P.wash("far", [[wx - u(8), wy - u(8)], [wx + ww + u(8), wy - u(8)], [wx + ww + u(8), wy], [wx - u(8), wy]], C.wood, { layers: 3, alpha: 0.3, vari: 0.02 });
      P.wash("far", [[wx - u(12), wy + wh], [wx + ww + u(12), wy + wh], [wx + ww + u(12), wy + wh + u(12)], [wx - u(12), wy + wh + u(12)]], C.wood, { layers: 3, alpha: 0.3, vari: 0.02 });
      P.pencil("far", [[wx + ww / 2, wy], [wx + ww / 2, wy + wh]], { alpha: 0.5, w: u(2.4) });
      P.pencil("far", [[wx, wy + wh / 2], [wx + ww, wy + wh / 2]], { alpha: 0.5, w: u(2.4) });
      P.pencil("far", [[wx, wy], [wx + ww, wy], [wx + ww, wy + wh], [wx, wy + wh], [wx, wy]], { alpha: 0.5, w: u(1.6) });
      P.wash("far", [[wx - u(30), wy - u(14)], [wx + ww * 0.18, wy - u(14)], [wx + ww * 0.1, wy + wh * 0.5], [wx + ww * 0.16, wy + wh + u(20)], [wx - u(34), wy + wh + u(20)]], C.rose, { layers: 5, alpha: 0.18, vari: 0.06, gran: 0.3 });
      P.wash("far", [[wx + ww * 0.82, wy - u(14)], [wx + ww + u(30), wy - u(14)], [wx + ww + u(34), wy + wh + u(20)], [wx + ww * 0.84, wy + wh + u(20)], [wx + ww * 0.9, wy + wh * 0.5]], C.rose, { layers: 5, alpha: 0.18, vari: 0.06, gran: 0.3 });
      // shelf with books
      if (!PORT) {
        var shx = w * 0.4, shy = h * 0.3, shw = w * 0.18;
        P.wash("far", [[shx, shy], [shx + shw, shy], [shx + shw, shy + u(10)], [shx, shy + u(10)]], C.wood, { layers: 3, alpha: 0.35, vari: 0.02 });
        var bx = shx + u(6), bcols = [C.terracotta, C.sage, C.blue, C.honey, C.plum, C.rust];
        for (i = 0; i < 6; i++) { var bw = u(12 + r() * 10), bh = u(40 + r() * 22); P.wash("far", [[bx, shy], [bx, shy - bh], [bx + bw, shy - bh], [bx + bw, shy]], bcols[i], { layers: 3, alpha: 0.3, vari: 0.03 }); bx += bw + u(2); }
        P.wash("far", ellP(bx + u(24), shy - u(18), u(16), u(18), 8), C.sky, { layers: 3, alpha: 0.3, vari: 0.08 });
      }
      // fireplace
      var fx = w * (PORT ? 0.56 : 0.66), fw = w * (PORT ? 0.4 : 0.26), fy = h * 0.4, fh = h * 0.48;
      P.wash("mid", [[fx, fy + fh], [fx, fy], [fx + fw, fy], [fx + fw, fy + fh]], C.stone, { layers: 7, alpha: 0.16, vari: 0.04, gran: 0.8 });
      for (i = 0; i < 18; i++) { var sx2 = fx + r() * fw, sy2 = fy + r() * fh; P.pencil("mid", ellP(sx2, sy2, u(14), u(8), 7).concat([[sx2 + u(14), sy2]]), { alpha: 0.18, w: u(1), passes: 1 }); }
      P.wash("mid", [[fx - u(16), fy], [fx + fw + u(16), fy], [fx + fw + u(16), fy + u(18)], [fx - u(16), fy + u(18)]], C.wood, { layers: 3, alpha: 0.35, vari: 0.02 });
      var ox = fx + fw * 0.2, ow = fw * 0.6, oy = fy + fh * 0.35;
      P.wash("mid", [[ox, fy + fh], [ox, oy + fw * 0.12], [ox + ow * 0.2, oy], [ox + ow * 0.8, oy], [ox + ow, oy + fw * 0.12], [ox + ow, fy + fh]], "#3A2A24", { layers: 6, alpha: 0.2, vari: 0.03 });
      P.glow("mid", ox + ow / 2, fy + fh * 0.85, ow * 0.7, "#FFB060", 0.4);
      P.fire = [ox + ow / 2, fy + fh, ow];
      P.mantle = [fx, fy, fw];
      // armchair
      var ax = w * (PORT ? 0.05 : 0.04), aw = w * (PORT ? 0.3 : 0.18), ay = h * 0.6, ah = h * 0.3;
      if (!PORT) {
        P.wash("mid", [[ax, ay + ah], [ax, ay + ah * 0.2], [ax + aw * 0.1, ay], [ax + aw * 0.9, ay], [ax + aw, ay + ah * 0.2], [ax + aw, ay + ah]], C.sage, { layers: 6, alpha: 0.18, vari: 0.05, gran: 0.4 });
        P.wash("mid", [[ax - u(10), ay + ah * 0.5], [ax + aw * 0.16, ay + ah * 0.46], [ax + aw * 0.16, ay + ah], [ax - u(10), ay + ah]], dk(C.sage, 0.1), { layers: 4, alpha: 0.2, vari: 0.05 });
        P.wash("mid", [[ax + aw * 0.84, ay + ah * 0.46], [ax + aw + u(10), ay + ah * 0.5], [ax + aw + u(10), ay + ah], [ax + aw * 0.84, ay + ah]], dk(C.sage, 0.1), { layers: 4, alpha: 0.2, vari: 0.05 });
        P.pencil("mid", [[ax, ay + ah], [ax, ay + ah * 0.2], [ax + aw * 0.1, ay], [ax + aw * 0.9, ay], [ax + aw, ay + ah * 0.2], [ax + aw, ay + ah]], { alpha: 0.4, w: u(1.4) });
      }
      // floor + rug
      var gy = h * 0.86;
      P.wash("near", [[-P.pm * 2, gy], [w + P.pm * 2, gy], [w + P.pm * 2, h * 1.2], [-P.pm * 2, h * 1.2]], C.wood, { dens: u(60), layers: 7, alpha: 0.14, vari: 0.03, gran: 0.5 });
      for (i = 0; i < 5; i++) P.pencil("near", dens([[-P.pm, gy + (h - gy) * (i / 4.2)], [w + P.pm, gy + (h - gy) * (i / 4.2) + u(2)]], u(60)), { alpha: 0.3, w: u(1.2), passes: 1 });
      P.wash("near", ellP(w * 0.48, h * 0.94, w * 0.28, h * 0.06, 14), C.terracotta, { layers: 6, alpha: 0.18, vari: 0.08, gran: 0.4 });
      P.pencil("near", ellP(w * 0.48, h * 0.94, w * 0.24, h * 0.045, 18).concat([[w * 0.48 + w * 0.24, h * 0.94]]), { alpha: 0.35, w: u(1.2), color: C.cream });
    },
    ambient: function (P) {
      var f = P.fire, fl = [];
      for (var i = 0; i < 3; i++) {
        var fw2 = f[2] * (0.42 - i * 0.1), fh2 = f[2] * (0.62 - i * 0.14);
        var col = [C.terracotta, C.honey, "#FFF0B0"][i];
        (function (fw2, fh2, col, i) {
          var e = P.sprite("mid", f[0] - fw2 / 2, f[1] - fh2 - u(6), fw2, fh2, function (g, cw, chh) {
            wash(g, [[cw * 0.1, chh], [cw * 0.25, chh * 0.4], [cw * 0.5, 0], [cw * 0.7, chh * 0.45], [cw * 0.9, chh]], col, { seed: 130 + i, layers: 6, alpha: 0.24, vari: 0.15, edgeA: 0.1 });
          });
          e.style.transformOrigin = "50% 100%";
          fl.push(e);
        })(fw2, fh2, col, i);
      }
      var glow = el("div.sb-glow", { parent: P.spr.mid });
      var gs = f[2] * 2.4;
      glow.style.left = f1(P.pm + f[0] - gs / 2) + "px"; glow.style.top = f1(P.pm + f[1] - gs * 0.65) + "px";
      glow.style.width = glow.style.height = f1(gs) + "px";
      P.on(function (t) {
        fl.forEach(function (e, k) { e.style.transform = "scale(" + f2(1 + Math.sin(t * (7 + k * 2.3) + k) * 0.08 + Math.sin(t * 13.1 + k * 2) * 0.04) + "," + f2(1 + Math.sin(t * (9 + k * 1.7) + k * 3) * 0.12) + ") skewX(" + f1(Math.sin(t * 5 + k) * 5) + "deg)"; });
        glow.style.opacity = f2(0.55 + Math.sin(t * 7.3) * 0.08 + Math.sin(t * 11.7) * 0.06);
      });
      var mt = P.mantle;
      P.svgSprite("mid", OBJ.candle(), [0, 0, 100, 100], mt[0] + mt[2] * 0.12, mt[1] - u(64), u(60), u(60));
      P.svgSprite("mid", OBJ.clock(), [0, 0, 100, 100], mt[0] + mt[2] * 0.6, mt[1] - u(76), u(72), u(72));
      S.twinkles({ parent: P.spr.near, x: P.pm, y: P.pm + P.h * 0.2, w: P.w, h: P.h * 0.5, n: 8, seed: 135, color: "#FFF6DA" }).forEach(function (p) { p.e.style.width = p.e.style.height = "auto"; p.e.firstChild.setAttribute("width", f1(u(9))); p.e.firstChild.setAttribute("height", f1(u(9))); });
    },
  };
  LOC.mountains = {
    ground: 0.88,
    paint: function (P) {
      var w = P.w, h = P.h, r = P.rnd;
      P.sky("#C3D7E4", "#EFE6DA");
      var a = peaks(P, h * 0.55, h * 0.36, PORT ? 3 : 4, 141, h * 1.2);
      P.wash("far", a.pts, P.night ? "#4A5478" : "#A7AECB", { dens: u(40), layers: 7, alpha: 0.13, vari: 0.08, gran: 0.25 });
      a.tops.forEach(function (tp, i) {
        var cx = tp[0], ty = tp[1], hw = tp[2], ph = tp[3];
        P.wash("far", [[cx, ty], [cx + hw * 0.2 * 0.6, ty + ph * 0.18], [cx + hw * 0.05, ty + ph * 0.26], [cx - hw * 0.08, ty + ph * 0.2], [cx - hw * 0.18, ty + ph * 0.28], [cx - hw * 0.15 * 0.9, ty + ph * 0.14]], P.night ? "#C8D0E8" : C.snow, { layers: 4, alpha: 0.35, vari: 0.08, edgeA: 0.1 });
        P.pencil("far", [[cx - hw * 0.15, ty + ph * 0.15], [cx, ty], [cx + hw * 0.2, ty + ph * 0.2]], { alpha: 0.35, w: u(1.3) });
      });
      var b = peaks(P, h * 0.68, h * 0.22, PORT ? 3 : 5, 142, h * 1.2);
      P.wash("far", b.pts, P.night ? "#34405E" : "#7F95A6", { dens: u(40), layers: 7, alpha: 0.13, vari: 0.08, gran: 0.25 });
      for (var x = -P.pm; x < w + P.pm; x += u(18) + r() * u(16)) P.pine("mid", x, h * (0.74 + r() * 0.03), h * (0.07 + r() * 0.05), P.night ? "#22324A" : "#4E6B5A", { layers: 3, alpha: 0.22, line: false, wr: 0.5 });
      var gy = h * 0.76;
      P.wash("near", band(P, gy, h * 0.03, 1.6, 145, h * 1.3), P.night ? "#2C4448" : "#A2B67E", { dens: u(40), layers: 8, alpha: 0.12, vari: 0.08, gran: 0.25 });
      var rv = [[w * 0.42, gy + u(2)], [w * 0.47, gy + u(2)], [w * 0.52, h * 0.86], [w * 0.7, h * 1.15], [w * 0.4, h * 1.15], [w * 0.44, h * 0.86]];
      P.wash("near", rv, P.night ? "#3A5070" : "#86B4C8", { dens: u(30), layers: 6, alpha: 0.18, vari: 0.08 });
      P.pencil("near", [[w * 0.46, h * 0.84], [w * 0.5, h * 0.84]], { alpha: 0.4, w: u(1.2), color: C.white });
      P.pencil("near", [[w * 0.5, h * 0.93], [w * 0.58, h * 0.93]], { alpha: 0.4, w: u(1.2), color: C.white });
      P.pine("near", w * 0.04, h * 0.98, h * 0.42, P.night ? "#1E2E40" : C.pine, { alpha: 0.18 });
      P.pine("near", w * 0.97, h * 0.99, h * 0.48, P.night ? "#1E2E40" : C.forest, { alpha: 0.18 });
      for (var i = 0; i < 5; i++) P.wash("near", ellP(w * (0.2 + r() * 0.6), h * (0.9 + r() * 0.08), u(20 + r() * 20), u(12 + r() * 8), 8), C.stone, { layers: 4, alpha: 0.2, vari: 0.15, gran: 0.6 });
      P.tufts("near", 24, 0, w, gy, h, C.moss);
    },
    ambient: function (P) {
      var w = P.w, h = P.h;
      if (P.night) { S.twinkles({ parent: P.spr.sky, x: P.pm, y: P.pm, w: w, h: h * 0.35, n: 14, seed: 151 }); return; }
      var c1 = cloudSprite(P, "far", 0, h * 0.18, w * 0.3, h * 0.12, 152), c2 = cloudSprite(P, "far", 0, h * 0.06, w * 0.2, h * 0.08, 153);
      drifting(P, c1, w * 0.3, u(10), w * 1.4);
      drifting(P, c2, w * 0.9, u(6), w * 1.4);
      birdSprite(P, "far", 154);
    },
  };
  var LOC_ALIAS = { woods: "forest", wood: "forest", town: "village", field: "meadow", garden: "meadow", countryside: "meadow", beach: "seaside", sea: "seaside", ocean: "seaside", coast: "seaside", night: "night-sky", sky: "night-sky", stars: "night-sky", home: "cottage", house: "cottage", interior: "cottage", kitchen: "cottage", mountain: "mountains", hills: "mountains", valley: "mountains" };
  S.locationNames = Object.keys(LOC);
  function locName(n) { var k = str(n).toLowerCase().trim(); return LOC[k] ? k : LOC_ALIAS[k] || "meadow"; }

  /**
   * S.painting({ location, x, y, w, h, time: "day"|"dusk"|"night", edge: "soft"|"none"|"tb"…, bloom: at|false, pan, seed, parent })
   * Paints a named location into the region and returns { el, x, y, w, h, groundY, ground(fx), bloom(at, dur) }.
   */
  S.painting = function (o) {
    o = o || {};
    var b = book();
    var name = locName(o.location);
    var L = LOC[name];
    var x = num(o.x, 0), y = num(o.y, 0), w = num(o.w, W), h = num(o.h, H);
    var pm = Math.round(Math.max(u(18), Math.min(w, h) * 0.04));
    var cw = w + pm * 2, chh = h + pm * 2;
    var wrap = el("div.sb-painting", { parent: o.parent || b.back });
    wrap.style.left = f1(x - pm) + "px"; wrap.style.top = f1(y - pm) + "px";
    wrap.style.width = f1(cw) + "px"; wrap.style.height = f1(chh) + "px";
    var inner = el("div.sb-pin", { parent: wrap });
    var layers = {}, spr = {}, order = ["sky", "far", "mid", "near"];
    var k = o.k || PK;
    order.forEach(function (ln) {
      var cv = canvasEl(cw, chh, k, "sb-player");
      cv.g.translate(pm, pm);
      inner.appendChild(cv.c);
      layers[ln] = cv;
      spr[ln] = el("div.sb-spr", { parent: inner });
    });
    var time = L.night ? "night" : o.time === "night" || o.time === "dusk" ? o.time : "day";
    var P = { w: w, h: h, pm: pm, x: x, y: y, rnd: R(hs(name) + num(o.seed, 0) * 31 + 5), night: time === "night", dusk: time === "dusk", time: time, chimneys: [], anims: [], spr: spr };
    P.on = function (fn) { P.anims.push(fn); };
    var fade = Math.min(w, h) * 0.08;
    var edge = o.edge || "soft";
    P.edgeFade = function (px, py) {
      if (edge === "none") return 1;
      var d = Math.min(px, w - px, py, h - py);
      return clamp((d + fade * 0.2) / (fade * 1.6), 0, 1);
    };
    P.sprite = function (ln, sx, sy, sw, sh, draw) {
      var cv = canvasEl(sw, sh, clamp(240 / Math.max(sw, sh), 0.35, 0.8), "sb-sprite");
      draw(cv.g, sw, sh);
      cv.c.style.left = f1(sx + pm) + "px"; cv.c.style.top = f1(sy + pm) + "px";
      spr[ln].appendChild(cv.c);
      return cv.c;
    };
    P.svgSprite = function (ln, mk, vb, sx, sy, sw, sh) {
      var d = el("div.sb-ssprite", { parent: spr[ln] });
      d.style.left = f1(sx + pm) + "px"; d.style.top = f1(sy + pm) + "px";
      d.style.width = f1(sw) + "px"; d.style.height = f1(sh) + "px";
      d.appendChild(svgEl(GLOWDEF + mk, vb, sw, sh));
      return d;
    };
    painterKit(P, layers);
    try { L.paint(P); } catch (e) { V.error("painting " + name + ": " + e.message); }
    if (P.night && name !== "night-sky" && !L.interior) ["far", "mid", "near"].forEach(function (ln) { tintLayer(layers[ln], "#1E2850", 0.35); });
    if (P.dusk) ["far", "mid", "near"].forEach(function (ln) { tintLayer(layers[ln], "#C46A5A", 0.1); });
    if (edge !== "none") vignette(layers, cw, chh, pm, w, h, edge, fade, hs(name) + 7);
    try { if (L.ambient && o.ambient !== false) L.ambient(P); } catch (e2) { V.error("ambient " + name + ": " + e2.message); }
    // parallax pan + bloom-in, evaluated per frame from t
    var pan = num(o.pan, u(PORT ? 22 : 30)) * (hs(name) % 2 ? 1 : -1);
    var depth = { sky: 0.12, far: 0.3, mid: 0.6, near: 1 };
    var bAt = o.bloom === false ? -10 : num(o.bloom, 0.05), bDur = num(o.bloomDur, 1.5);
    var lastMask = "";
    onT(function (t) {
      var p = eio(prog(t, 0, DUR())) - 0.5;
      order.forEach(function (ln, i) {
        var dx = f1(-pan * p * depth[ln]);
        var tf = "translateX(" + dx + "px)";
        layers[ln].c.style.transform = tf;
        spr[ln].style.transform = tf;
        var q = sstep(prog(t, bAt + i * bDur * 0.14, bAt + i * bDur * 0.14 + bDur * 0.55));
        layers[ln].c.style.opacity = spr[ln].style.opacity = f2(q);
      });
      var bq = prog(t, bAt, bAt + bDur);
      var m = bq >= 1 ? "none" : "radial-gradient(ellipse 75% 75% at 50% 62%, #000 " + f1(bq * 120 - 20) + "%, rgba(0,0,0,0) " + f1(bq * 120 + 12) + "%)";
      if (m !== lastMask) { inner.style.webkitMaskImage = m; inner.style.maskImage = m; lastMask = m; }
      for (var a = 0; a < P.anims.length; a++) P.anims[a](t);
    });
    var api = { el: wrap, inner: inner, name: name, time: time, x: x, y: y, w: w, h: h, groundY: y + h * L.ground, P: P, layers: layers };
    api.ground = function (fx) { return y + h * L.ground + (L.interior ? 0 : Math.sin(num(fx, 0.5) * 7 + hs(name)) * h * 0.006); };
    api.bloom = function (at, dur) { bAt = num(at, 0); bDur = num(dur, 1.5); return api; };
    return api;
  };
  function tintLayer(cv, col, a) {
    var g = cv.g;
    g.save();
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.globalCompositeOperation = "source-atop";
    g.globalAlpha = a;
    g.fillStyle = col;
    g.fillRect(0, 0, cv.c.width, cv.c.height);
    g.restore();
  }
  function vignette(layers, cw, chh, pm, w, h, edge, fade, seed) {
    var mk = 0.25;
    var mc = document.createElement("canvas");
    mc.width = Math.max(2, Math.round(cw * mk)); mc.height = Math.max(2, Math.round(chh * mk));
    var g = mc.getContext("2d");
    var soft = edge === "soft" ? "tblr" : edge;
    var t = soft.indexOf("t") >= 0 ? pm + fade : -pm, bo = soft.indexOf("b") >= 0 ? pm + h - fade : chh + pm;
    var l = soft.indexOf("l") >= 0 ? pm + fade : -pm, ri = soft.indexOf("r") >= 0 ? pm + w - fade : cw + pm;
    var poly = deform(dens([[l, t], [ri, t], [ri, bo], [l, bo]], fade * 1.2, true).map(function (p) { return [p[0] * mk, p[1] * mk, 1]; }), 3, 0.12, R(seed));
    try { g.filter = "blur(" + f1(fade * mk * 0.55) + "px)"; } catch (e) {}
    g.fillStyle = "#fff";
    trace(g, poly);
    g.fill();
    ["sky", "far", "mid", "near"].forEach(function (ln) {
      var cg = layers[ln].g;
      cg.save();
      cg.setTransform(1, 0, 0, 1, 0, 0);
      cg.globalCompositeOperation = "destination-in";
      cg.drawImage(mc, 0, 0, layers[ln].c.width, layers[ln].c.height);
      cg.restore();
    });
  }

  // ───────────────────────── the cast (pen-and-wash SVG puppets) ─────────────────────────
  var CAST = {
    wren: { kind: "human", name: "Wren", desc: "curious girl, mustard raincoat, red scarf, chestnut bob", dims: "child", skin: "#F2C9A8", hair: "#7A4A30", style: "bob", top: C.ochre, bottom: "#6F86A6", shoes: C.rust, scarf: C.terracotta, buttons: true },
    oli: { kind: "human", name: "Oli", desc: "cheerful boy, blue striped jumper, dark curls", dims: "child", skin: "#B98058", hair: "#2E2420", style: "curly", top: C.blue, bottom: "#8A6B4E", shoes: C.bark, stripes: C.cream },
    nana: { kind: "human", name: "Nana", desc: "kind grandmother, silver bun, round spectacles, sage shawl, plum dress", dims: "adult", skin: "#F0D0B4", hair: "#E6E1DA", style: "bun", top: C.plum, bottom: C.plum, shoes: C.bark, shawl: C.sage, glasses: true, skirt: true },
    rusty: { kind: "fox", name: "Rusty", desc: "clever fox, moss-green waistcoat, bushy white-tipped tail", dims: "fox", fur: C.fox, belly: C.cream, top: C.moss, bottom: C.fox, shoes: "#4A2E22" },
    bramble: { kind: "bear", name: "Bramble", desc: "big gentle bear, red knitted scarf", dims: "bear", fur: C.bear, belly: C.sand, top: C.bear, bottom: C.bear, shoes: "#5A3A28", scarf: C.terracotta },
    pippin: { kind: "rabbit", name: "Pippin", desc: "shy little rabbit, rose dungarees, long ears", dims: "rabbit", fur: "#CDB8A0", belly: C.cream, top: C.rose, bottom: C.rose, shoes: "#9C8670" },
    sage: { kind: "owl", name: "Sage", desc: "wise old owl with tufted ears and big amber eyes", dims: "owl", fur: "#A57C55", belly: C.cream },
  };
  var DIMS = {
    child: { legH: 58, torsoH: 74, topW: 46, botW: 64, rx: 40, ry: 38, armL: 56, limb: 13 },
    adult: { legH: 84, torsoH: 104, topW: 54, botW: 82, rx: 37, ry: 36, armL: 76, limb: 13 },
    fox: { legH: 60, torsoH: 78, topW: 44, botW: 56, rx: 38, ry: 34, armL: 58, limb: 12 },
    bear: { legH: 54, torsoH: 104, topW: 72, botW: 94, rx: 50, ry: 46, armL: 68, limb: 20 },
    rabbit: { legH: 50, torsoH: 68, topW: 40, botW: 54, rx: 34, ry: 32, armL: 50, limb: 11 },
    owl: { legH: 8, torsoH: 120, topW: 84, botW: 100, rx: 50, ry: 60, armL: 70, limb: 22 },
  };
  S.cast = Object.keys(CAST);
  S.castInfo = CAST;
  var MOUTH_DARK = "#5A2B2A";
  function G(cls, inner, tf) { return '<g class="' + cls + '"' + (tf ? ' transform="' + tf + '"' : "") + ">" + inner + "</g>"; }
  function capsule(x, y, wd, len, col, seed, o) { o = o || {}; o.seed = seed; o.j = o.j != null ? o.j : 0.5; o.hl = o.hl != null ? o.hl : false; o.lw = o.lw || 1.4; return wc(rectP(x - wd / 2, y - wd * 0.15, wd, len + wd * 0.3, wd / 2), col, o); }
  function mouthSet(mx, my, s, snout) {
    var m = [];
    m.push(snout ? pen([[mx - 6 * s, my - 1], [mx - 3 * s, my + 2.5 * s], [mx, my], [mx + 3 * s, my + 2.5 * s], [mx + 6 * s, my - 1]], { w: 1.6, j: 0.2, seed: 1 }) : pen([[mx - 7 * s, my - 1.5 * s], [mx, my + 3.5 * s], [mx + 7 * s, my - 1.5 * s]], { w: 1.8, j: 0.2, seed: 2 }));
    m.push(ell(mx, my + 1 * s, 4.2 * s, 2.6 * s, MOUTH_DARK));
    m.push(ell(mx, my + 1.5 * s, 5.6 * s, 4.6 * s, MOUTH_DARK) + ell(mx, my + 4 * s, 3.4 * s, 1.8 * s, C.rose));
    m.push('<path class="sb-fill" d="M' + f1(mx - 8 * s) + " " + f1(my) + " Q" + f1(mx) + " " + f1(my - 2 * s) + " " + f1(mx + 8 * s) + " " + f1(my) + " Q" + f1(mx + 6 * s) + " " + f1(my + 9 * s) + " " + f1(mx) + " " + f1(my + 9 * s) + " Q" + f1(mx - 6 * s) + " " + f1(my + 9 * s) + " " + f1(mx - 8 * s) + " " + f1(my) + 'Z" fill="' + MOUTH_DARK + '"/>' + ell(mx, my + 6 * s, 4.4 * s, 2.2 * s, C.rose));
    m.push(ell(mx, my + 1.5 * s, 3.4 * s, 4.6 * s, MOUTH_DARK));
    return m.map(function (g, i) { return '<g class="sb-m sb-m' + i + '"' + (i ? ' style="display:none"' : "") + ">" + g + "</g>"; }).join("");
  }
  function eyesMk(cx, cy, dx, r, o) {
    o = o || {};
    var s = "";
    [-1, 1].forEach(function (sd) {
      var x = cx + sd * dx;
      if (o.disc) s += wc(ellP(x, cy, o.disc, o.disc, 12), C.white, { seed: 30 + sd, j: 0.4, hl: false, lw: 1.3 }) + wc(ellP(x, cy, o.disc * 0.7, o.disc * 0.7, 12), C.honey, { seed: 32 + sd, j: 0.3, hl: false, line: false });
      s += '<g class="sb-pupil">' + ell(x, cy, r * 0.8, r, "#2A1E1A") + dot(x + r * 0.3, cy - r * 0.4, r * 0.32, "#FFFFFF", 0.95) + "</g>";
    });
    return s;
  }
  function charMarkup(c) {
    var D = DIMS[c.dims] || DIMS.child;
    if (c.kind === "owl") return owlMarkup(c, D);
    var hipY = -D.legH, neckY = hipY - D.torsoH, shY = neckY + 12, shX = D.topW / 2 - 3;
    var hcy = neckY - D.ry * 0.82, rx = D.rx, ry = D.ry;
    var skin = c.skin || c.fur, sk = 0;
    function sd() { return ++sk * 7 + 3; }
    var legX = D.botW * 0.2;
    var parts = {};
    // tail (animals)
    var tail = "";
    if (c.kind === "fox") tail = wc([[-D.botW * 0.2, hipY + 14], [-D.botW * 0.5, hipY + 6], [-D.botW * 0.5 - 40, hipY - 18], [-D.botW * 0.5 - 52, hipY - 62], [-D.botW * 0.5 - 30, hipY - 46], [-D.botW * 0.5 - 14, hipY - 20], [-D.botW * 0.3, hipY - 6]], c.fur, { seed: sd(), j: 1.2 }) + wc([[-D.botW * 0.5 - 40, hipY - 40], [-D.botW * 0.5 - 52, hipY - 62], [-D.botW * 0.5 - 30, hipY - 46]], C.cream, { seed: sd(), j: 0.6, hl: false });
    if (c.kind === "rabbit") tail = wc(ellP(-D.botW * 0.48, hipY + 10, 12, 11, 9), C.white, { seed: sd(), j: 1.4, hl: false });
    if (c.kind === "bear") tail = wc(ellP(-D.botW * 0.5, hipY + 14, 9, 8, 8), c.fur, { seed: sd(), j: 0.8, hl: false });
    parts.tail = G("sb-tail", tail);
    // legs
    function leg(side) {
      var lx = side * legX;
      var lg = capsule(lx, hipY + 4, D.limb * 1.15, D.legH - 8, c.bottom || skin, sd(), {});
      lg += wc(ellP(lx + 4, -4, D.limb * 0.95, 6.5, 10), c.shoes || C.bark, { seed: sd(), j: 0.4, hl: false, lw: 1.3 });
      return G("sb-leg" + (side < 0 ? "L" : "R"), lg);
    }
    parts.legL = leg(-1); parts.legR = leg(1);
    // torso
    var torso;
    if (c.skirt) torso = wc([[-D.topW / 2 + 6, neckY], [D.topW / 2 - 6, neckY], [D.topW / 2 + 2, neckY + 16], [D.botW / 2 + 6, hipY + 26], [0, hipY + 32], [-D.botW / 2 - 6, hipY + 26], [-D.topW / 2 - 2, neckY + 16]], c.top, { seed: sd(), j: 1 });
    else torso = wc([[-D.topW / 2 + 6, neckY], [D.topW / 2 - 6, neckY], [D.topW / 2 + 2, neckY + 16], [D.botW / 2, hipY + 8], [0, hipY + 12], [-D.botW / 2, hipY + 8], [-D.topW / 2 - 2, neckY + 16]], c.top, { seed: sd(), j: 1 });
    if (c.kind === "bear" || c.kind === "rabbit") torso += wc(ellP(0, (neckY + hipY) / 2 + 8, D.topW * 0.32, D.torsoH * 0.32, 12), c.belly, { seed: sd(), j: 0.8, hl: false, lw: 1.1, lo: 0.4 });
    if (c.kind === "rabbit") torso += pen([[-D.topW * 0.28, neckY + 4], [-D.topW * 0.2, hipY - 8]], { w: 2.4, c: dk(c.top, 0.2) }) + pen([[D.topW * 0.28, neckY + 4], [D.topW * 0.2, hipY - 8]], { w: 2.4, c: dk(c.top, 0.2) }) + dot(-D.topW * 0.25, neckY + 14, 2.6, C.butter) + dot(D.topW * 0.25, neckY + 14, 2.6, C.butter);
    if (c.kind === "fox") torso += wc([[-8, neckY + 2], [8, neckY + 2], [12, neckY + 30], [0, neckY + 46], [-12, neckY + 30]], C.cream, { seed: sd(), j: 0.5, hl: false, lw: 1 }) + dot(-D.topW * 0.2, neckY + 34, 2.2, C.butter) + dot(-D.topW * 0.2, neckY + 50, 2.2, C.butter);
    if (c.buttons) torso += [0, 1, 2].map(function (i) { return dot(3, neckY + 22 + i * 15, 2.4, dk(c.top, 0.35)); }).join("") + pen([[3, neckY + 10], [2, hipY + 8]], { w: 1.1, o: 0.5 }) + pen([[-D.botW * 0.34, hipY - 14], [-D.botW * 0.16, hipY - 14]], { w: 1.1, o: 0.5 });
    if (c.stripes) for (var i = 0; i < 3; i++) { var yy = neckY + 22 + i * 16; torso += pen([[-D.topW / 2 - 1 - i * 2, yy], [0, yy + 2], [D.topW / 2 + 1 + i * 2, yy]], { w: 3.2, c: c.stripes, o: 0.75, seed: 40 + i }); }
    if (c.shawl) torso += wc([[-D.topW / 2 - 6, neckY + 2], [D.topW / 2 + 6, neckY + 2], [D.topW / 2 + 10, neckY + 30], [0, neckY + 52], [-D.topW / 2 - 10, neckY + 30]], c.shawl, { seed: sd(), j: 0.8 }) + pen([[-D.topW / 2 - 8, neckY + 30], [0, neckY + 50], [D.topW / 2 + 8, neckY + 30]], { w: 1, o: 0.4, c: C.cream });
    parts.torso = G("sb-torso", torso);
    // arms (shoulder pivot; nested elbow group)
    function arm(side) {
      var sx = side * shX, half = D.armL / 2;
      var sleeve = c.shawl && side ? c.shawl : c.top;
      var up = capsule(sx, shY, D.limb, half, c.kind === "bear" ? c.fur : sleeve, sd(), {});
      var hand = c.kind === "human" ? skin : c.fur;
      var fore = capsule(sx, shY + half, D.limb * 0.95, half - 2, c.kind === "bear" || c.kind === "fox" ? (c.kind === "fox" ? c.fur : c.fur) : sleeve, sd(), {});
      fore += wc(ellP(sx, shY + D.armL + 1, D.limb * 0.62, D.limb * 0.66, 9), hand, { seed: sd(), j: 0.4, hl: false, lw: 1.2 });
      if (c.kind === "fox") fore += wc(ellP(sx, shY + D.armL + 1, D.limb * 0.6, D.limb * 0.5, 8), "#4A2E22", { seed: sd(), j: 0.3, hl: false, line: false });
      return '<g class="sb-arm' + (side < 0 ? "L" : "R") + '">' + up + '<g class="sb-fore' + (side < 0 ? "L" : "R") + '">' + fore + "</g></g>";
    }
    parts.armL = arm(-1); parts.armR = arm(1);
    parts.pivots = { shL: [-shX, shY], shR: [shX, shY], elL: [-shX, shY + D.armL / 2], elR: [shX, shY + D.armL / 2], hipL: [-legX, hipY], hipR: [legX, hipY], neck: [0, neckY + 4], tail: [-D.botW * 0.3, hipY + 6] };
    // neckwear
    var neck = "";
    if (c.scarf) neck = wc([[-D.topW / 2 - 2, neckY - 4], [D.topW / 2 + 2, neckY - 4], [D.topW / 2 + 4, neckY + 8], [-D.topW / 2 - 4, neckY + 8]], c.scarf, { seed: sd(), j: 0.8 }) + wc([[D.topW * 0.12, neckY + 4], [D.topW * 0.34, neckY + 4], [D.topW * 0.4, neckY + 34], [D.topW * 0.18, neckY + 36]], c.scarf, { seed: sd(), j: 0.6 }) + pen([[D.topW * 0.2, neckY + 30], [D.topW * 0.38, neckY + 29]], { w: 1, o: 0.5 });
    parts.neck = neck;
    // head
    var h = "";
    var earsBack = "";
    if (c.kind === "human") earsBack = wc(ellP(-rx * 0.98, hcy + 4, 7, 9, 8), skin, { seed: sd(), j: 0.3, hl: false, lw: 1.2 }) + wc(ellP(rx * 0.98, hcy + 4, 7, 9, 8), skin, { seed: sd(), j: 0.3, hl: false, lw: 1.2 });
    if (c.kind === "bear") [-1, 1].forEach(function (s2) { earsBack += wc(ellP(s2 * rx * 0.72, hcy - ry * 0.76, rx * 0.3, rx * 0.3, 10), c.fur, { seed: sd(), j: 0.6 }) + wc(ellP(s2 * rx * 0.72, hcy - ry * 0.74, rx * 0.16, rx * 0.16, 8), c.belly, { seed: sd(), j: 0.3, line: false, hl: false }); });
    if (c.kind === "fox") [-1, 1].forEach(function (s2) { earsBack += G("sb-ear" + (s2 < 0 ? "L" : "R"), wc([[s2 * rx * 0.2, hcy - ry * 0.7], [s2 * rx * 0.95, hcy - ry * 1.75], [s2 * rx * 0.95, hcy - ry * 0.3]], c.fur, { seed: sd(), j: 0.6 }) + wc([[s2 * rx * 0.62, hcy - ry * 1.3], [s2 * rx * 0.95, hcy - ry * 1.75], [s2 * rx * 0.92, hcy - ry * 1.2]], "#3A2A22", { seed: sd(), j: 0.3, hl: false, line: false }) + wc([[s2 * rx * 0.4, hcy - ry * 0.75], [s2 * rx * 0.85, hcy - ry * 1.45], [s2 * rx * 0.82, hcy - ry * 0.55]], C.cream, { seed: sd(), j: 0.3, hl: false, line: false })); });
    if (c.kind === "rabbit") [-1, 1].forEach(function (s2) {
      var ex = s2 * rx * 0.38, ey = hcy - ry * 0.8;
      earsBack += G("sb-ear" + (s2 < 0 ? "L" : "R"), wc(ellP(ex + s2 * 6, ey - 34, 11, 38, 12), c.fur, { seed: sd(), j: 0.6 }) + wc(ellP(ex + s2 * 6, ey - 32, 5.5, 28, 10), C.pink, { seed: sd(), j: 0.3, line: false, hl: false }));
    });
    h += earsBack;
    if (c.style === "bob") h += wc([[-rx * 1.12, hcy + ry * 0.6], [-rx * 1.18, hcy - ry * 0.2], [-rx * 0.8, hcy - ry * 1.0], [0, hcy - ry * 1.16], [rx * 0.8, hcy - ry * 1.0], [rx * 1.18, hcy - ry * 0.2], [rx * 1.12, hcy + ry * 0.6], [rx * 0.8, hcy + ry * 0.72], [-rx * 0.8, hcy + ry * 0.72]], c.hair, { seed: sd(), j: 1 });
    if (c.style === "bun") h += wc(ellP(0, hcy - ry * 1.12, rx * 0.42, ry * 0.36, 10), c.hair, { seed: sd(), j: 0.8 });
    var headPts;
    if (c.kind === "fox") headPts = [[-rx, hcy - ry * 0.2], [-rx * 0.75, hcy - ry * 0.85], [0, hcy - ry], [rx * 0.75, hcy - ry * 0.85], [rx, hcy - ry * 0.2], [rx * 0.92, hcy + ry * 0.5], [0, hcy + ry * 1.08], [-rx * 0.92, hcy + ry * 0.5]];
    else headPts = ellP(0, hcy, rx, ry, 16);
    h += wc(headPts, skin, { seed: sd(), j: 0.9, hlk: 0.5 });
    if (c.kind === "fox") h += wc([[-rx * 0.88, hcy + ry * 0.12], [-rx * 0.3, hcy + ry * 0.2], [0, hcy + ry * 0.02], [rx * 0.3, hcy + ry * 0.2], [rx * 0.88, hcy + ry * 0.12], [rx * 0.6, hcy + ry * 0.72], [0, hcy + ry * 1.08], [-rx * 0.6, hcy + ry * 0.72]], C.cream, { seed: sd(), j: 0.5, hl: false, lo: 0.4 });
    if (c.kind === "bear") h += wc(ellP(0, hcy + ry * 0.38, rx * 0.46, ry * 0.34, 12), c.belly, { seed: sd(), j: 0.5, hl: false, lo: 0.45 });
    if (c.kind === "rabbit") h += wc(ellP(0, hcy + ry * 0.36, rx * 0.5, ry * 0.32, 12), C.cream, { seed: sd(), j: 0.4, hl: false, line: false });
    // hair front
    if (c.style === "bob") h += wc([[-rx * 1.04, hcy - ry * 0.1], [-rx * 0.9, hcy - ry * 0.8], [-rx * 0.2, hcy - ry * 1.12], [rx * 0.7, hcy - ry * 0.95], [rx * 1.06, hcy - ry * 0.2], [rx * 0.8, hcy - ry * 0.42], [rx * 0.42, hcy - ry * 0.5], [rx * 0.1, hcy - ry * 0.36], [-rx * 0.3, hcy - ry * 0.48], [-rx * 0.72, hcy - ry * 0.4]], c.hair, { seed: sd(), j: 0.8 });
    if (c.style === "bun") h += wc([[-rx * 1.02, hcy - ry * 0.05], [-rx * 0.85, hcy - ry * 0.78], [0, hcy - ry * 1.05], [rx * 0.85, hcy - ry * 0.78], [rx * 1.02, hcy - ry * 0.05], [rx * 0.7, hcy - ry * 0.5], [0, hcy - ry * 0.62], [-rx * 0.7, hcy - ry * 0.5]], c.hair, { seed: sd(), j: 0.8 }) + pen([[-rx * 0.5, hcy - ry * 0.8], [0, hcy - ry * 0.62]], { w: 1, o: 0.4 }) + pen([[rx * 0.5, hcy - ry * 0.8], [0, hcy - ry * 0.62]], { w: 1, o: 0.4 });
    if (c.style === "curly") { var cr = R(77); for (var q = 0; q < 13; q++) { var a = Math.PI * (1.05 + (q / 12) * 0.9); h += wc(ellP(Math.cos(a) * rx * 0.92, hcy + Math.sin(a) * ry * 0.95 + 2, 10 + cr() * 3, 9 + cr() * 3, 8), c.hair, { seed: 60 + q, j: 0.6, hl: false, lw: 1.2 }); } }
    // face
    var eyY = c.kind === "human" ? hcy + 2 : hcy - ry * 0.05;
    var eyDX = rx * (c.kind === "bear" ? 0.32 : 0.36);
    var face = "";
    face += ell(-rx * 0.6, hcy + ry * 0.36, 7, 4.5, "#E88A80", 0.38) + ell(rx * 0.6, hcy + ry * 0.36, 7, 4.5, "#E88A80", 0.38);
    var eyes = '<g class="sb-eyes">' + eyesMk(0, eyY, eyDX, 4.6) + "</g>";
    var brows = pen([[-eyDX - 5, eyY - 11], [-eyDX + 4, eyY - 13]], { w: 1.4, o: 0.6, seed: 91 }) + pen([[eyDX - 4, eyY - 13], [eyDX + 5, eyY - 11]], { w: 1.4, o: 0.6, seed: 92 });
    var snout = c.kind !== "human";
    var noseY = c.kind === "human" ? hcy + ry * 0.2 : c.kind === "fox" ? hcy + ry * 0.58 : hcy + ry * 0.26;
    var nose = c.kind === "human" ? pen([[-1, noseY - 4], [2, noseY + 1], [-2, noseY + 2]], { w: 1.3, o: 0.55 }) : wc(ellP(0, noseY, c.kind === "rabbit" ? 4 : 6.5, c.kind === "rabbit" ? 3 : 4.6, 9), c.kind === "rabbit" ? "#E39A9A" : "#3A2A24", { seed: 93, j: 0.3, hl: false, lw: 1.1 });
    if (c.kind === "rabbit") nose += pen([[-6, noseY + 2], [-22, noseY - 1]], { w: 0.9, o: 0.45 }) + pen([[-6, noseY + 4], [-21, noseY + 6]], { w: 0.9, o: 0.45 }) + pen([[6, noseY + 2], [22, noseY - 1]], { w: 0.9, o: 0.45 }) + pen([[6, noseY + 4], [21, noseY + 6]], { w: 0.9, o: 0.45 });
    var mY = c.kind === "human" ? hcy + ry * 0.52 : noseY + (c.kind === "fox" ? 9 : 10);
    var mouth = '<g class="sb-mouth">' + mouthSet(0, mY, c.kind === "bear" ? 1.05 : 0.9, snout) + "</g>";
    var glasses = c.glasses ? pen(ellP(-eyDX, eyY, 9.5, 8.5, 12), { closed: true, w: 1.4, j: 0.2 }) + pen(ellP(eyDX, eyY, 9.5, 8.5, 12), { closed: true, w: 1.4, j: 0.2 }) + pen([[-eyDX + 9.5, eyY - 1], [eyDX - 9.5, eyY - 1]], { w: 1.3, j: 0.1 }) : "";
    h += face + eyes + brows + nose + mouth + glasses;
    parts.head = h;
    parts.eyeY = eyY;
    parts.headTop = hcy - ry * (c.kind === "rabbit" ? 3.4 : c.kind === "fox" ? 1.75 : 1.1);
    parts.headCY = hcy;
    parts.shadowW = D.botW * 0.75;
    return parts;
  }
  function owlMarkup(c, D) {
    var cy = -78, parts = {};
    parts.tail = G("sb-tail", wc([[-14, -14], [14, -14], [8, 8], [-8, 8]], dk(c.fur, 0.15), { seed: 5, j: 0.4, hl: false }));
    parts.legL = G("sb-legL", pen([[-14, -10], [-18, 0]], { w: 3, c: C.ochre }) + pen([[-14, -10], [-14, 0]], { w: 3, c: C.ochre }) + pen([[-14, -10], [-10, 0]], { w: 3, c: C.ochre }));
    parts.legR = G("sb-legR", pen([[14, -10], [10, 0]], { w: 3, c: C.ochre }) + pen([[14, -10], [14, 0]], { w: 3, c: C.ochre }) + pen([[14, -10], [18, 0]], { w: 3, c: C.ochre }));
    var body = wc([[0, cy - 72], [34, cy - 66], [52, cy - 30], [54, cy + 20], [40, cy + 60], [0, cy + 72], [-40, cy + 60], [-54, cy + 20], [-52, cy - 30], [-34, cy - 66]], c.fur, { seed: 7, j: 1.2 });
    body += wc(ellP(0, cy + 22, 34, 44, 14), c.belly, { seed: 8, j: 0.8, hl: false, lo: 0.4 });
    for (var i = 0; i < 9; i++) { var vx = -22 + (i % 3) * 22 + (Math.floor(i / 3) % 2) * 11, vy = cy + 2 + Math.floor(i / 3) * 16; body += pen([[vx - 5, vy], [vx, vy + 5], [vx + 5, vy]], { w: 1.2, o: 0.5, c: c.fur, seed: 20 + i }); }
    parts.torso = G("sb-torso", body);
    function wing(side) {
      var sx = side * 40, sy = cy - 22;
      return '<g class="sb-arm' + (side < 0 ? "L" : "R") + '"><g class="sb-fore' + (side < 0 ? "L" : "R") + '">' + wc([[sx, sy - 4], [sx + side * 16, sy + 10], [sx + side * 14, sy + 52], [sx + side * 2, sy + 74], [sx - side * 8, sy + 40]], dk(c.fur, 0.12), { seed: 40 + side, j: 0.8 }) + pen([[sx + side * 4, sy + 30], [sx + side * 10, sy + 46]], { w: 1, o: 0.4 }) + "</g></g>";
    }
    parts.armL = wing(-1); parts.armR = wing(1);
    parts.pivots = { shL: [-40, cy - 24], shR: [40, cy - 24], elL: [-40, cy - 24], elR: [40, cy - 24], hipL: [-14, -10], hipR: [14, -10], neck: [0, cy - 10], tail: [0, -14] };
    parts.neck = "";
    var eyY = cy - 36;
    var h = G("sb-earL", wc([[-30, cy - 62], [-44, cy - 92], [-14, cy - 68]], dk(c.fur, 0.2), { seed: 50, j: 0.5 })) + G("sb-earR", wc([[30, cy - 62], [44, cy - 92], [14, cy - 68]], dk(c.fur, 0.2), { seed: 51, j: 0.5 }));
    h += wc([[-46, eyY - 18], [-8, eyY - 20], [0, eyY - 10], [8, eyY - 20], [46, eyY - 18], [44, eyY + 18], [0, eyY + 24], [-44, eyY + 18]], lt(c.fur, 0.35), { seed: 52, j: 0.6, hl: false, lo: 0.35 });
    h += '<g class="sb-eyes">' + eyesMk(0, eyY, 20, 6, { disc: 15 }) + "</g>";
    var by = eyY + 12;
    var mk = [
      wc([[-7, by], [7, by], [0, by + 12]], C.ochre, { seed: 60, j: 0.2, hl: false, lw: 1.2 }),
      wc([[-7, by - 1], [7, by - 1], [0, by + 7]], C.ochre, { seed: 61, j: 0.2, hl: false, lw: 1.2 }) + ell(0, by + 8, 4, 2, MOUTH_DARK) + wc([[-5, by + 9], [5, by + 9], [0, by + 14]], C.ochre, { seed: 62, j: 0.2, hl: false, lw: 1 }),
      wc([[-7, by - 2], [7, by - 2], [0, by + 6]], C.ochre, { seed: 63, j: 0.2, hl: false, lw: 1.2 }) + ell(0, by + 8, 5, 3.4, MOUTH_DARK) + wc([[-5, by + 11], [5, by + 11], [0, by + 16]], C.ochre, { seed: 64, j: 0.2, hl: false, lw: 1 }),
      wc([[-8, by - 3], [8, by - 3], [0, by + 5]], C.ochre, { seed: 65, j: 0.2, hl: false, lw: 1.2 }) + ell(0, by + 9, 6, 4.4, MOUTH_DARK) + wc([[-5, by + 13], [5, by + 13], [0, by + 18]], C.ochre, { seed: 66, j: 0.2, hl: false, lw: 1 }),
      wc([[-6, by - 1], [6, by - 1], [0, by + 7]], C.ochre, { seed: 67, j: 0.2, hl: false, lw: 1.2 }) + ell(0, by + 9, 3.4, 4, MOUTH_DARK) + wc([[-4, by + 12], [4, by + 12], [0, by + 16]], C.ochre, { seed: 68, j: 0.2, hl: false, lw: 1 }),
    ];
    h += '<g class="sb-mouth">' + mk.map(function (g, i) { return '<g class="sb-m sb-m' + i + '"' + (i ? ' style="display:none"' : "") + ">" + g + "</g>"; }).join("") + "</g>";
    h += pen([[-34, eyY - 22], [-12, eyY - 16]], { w: 1.6, o: 0.6 }) + pen([[34, eyY - 22], [12, eyY - 16]], { w: 1.6, o: 0.6 });
    parts.head = h;
    parts.eyeY = eyY;
    parts.headTop = cy - 92;
    parts.headCY = eyY;
    parts.shadowW = 60;
    return parts;
  }

  // ── lip-sync & timing ──
  var TALKW = null;
  function talkWords() {
    if (TALKW) return TALKW;
    if (V.words && V.words.length) TALKW = V.words;
    else {
      var tx = str(V.narration).split(/\s+/).filter(Boolean).slice(0, 600), D = DUR() * 0.92;
      TALKW = tx.map(function (wd, i) { return { word: wd, start: 0.2 + (i / Math.max(1, tx.length)) * D, end: 0.2 + ((i + 0.8) / Math.max(1, tx.length)) * D }; });
    }
    return TALKW;
  }
  var VIS = [1, 2, 3, 2, 4, 1, 3, 2];
  function mouthAt(t, wins) {
    var ws = talkWords();
    var on = false;
    for (var k = 0; k < wins.length; k++) if (t >= wins[k][0] && t <= wins[k][1]) { on = true; break; }
    if (!on) return { m: 0, open: 0 };
    // binary search the word under t
    var lo = 0, hi = ws.length - 1, idx = -1;
    while (lo <= hi) { var mid = (lo + hi) >> 1; if (ws[mid].start <= t) { idx = mid; lo = mid + 1; } else hi = mid - 1; }
    if (idx < 0) return { m: 0, open: 0 };
    var w = ws[idx];
    if (t > w.end + 0.06) return { m: 0, open: 0 };
    var len = Math.max(0.08, w.end - w.start);
    var syl = Math.max(1, Math.round(plain(w.word).replace(/[^a-z]/gi, "").length / 3));
    var ph = clamp((t - w.start) / len, 0, 1) * syl;
    var open = Math.abs(Math.sin(ph * Math.PI));
    if (open < 0.18) return { m: 1, open: open };
    var v = VIS[(idx * 3 + Math.floor(ph)) % VIS.length];
    if (open < 0.5 && v === 3) v = 2;
    return { m: v, open: open };
  }
  var POSES = {
    rest: { rs: -6, re: -8, ls: 6, le: 8 },
    wave: { rs: -140, re: -40, ls: 6, le: 8, osc: "wave" },
    point: { rs: -84, re: -4, ls: 8, le: 10 },
    present: { rs: -50, re: -36, ls: 16, le: 18 },
    open: { rs: -112, re: -18, ls: 112, le: 18 },
    cheer: { rs: -164, re: -8, ls: 164, le: 8, osc: "cheer" },
    think: { rs: 14, re: 150, ls: 22, le: -76, tilt: 6 },
    shrug: { rs: -36, re: -74, ls: 36, le: 74, tilt: -4 },
    hold: { rs: -22, re: -68, ls: 8, le: 10 },
    heart: { rs: 26, re: 118, ls: -26, le: -118 },
    nod: { rs: -6, re: -8, ls: 6, le: 8, osc: "nod" },
    wonder: { rs: -30, re: -100, ls: 30, le: 100, look: -0.6 },
  };
  S.gestures = Object.keys(POSES);
  var BLINKS = null;
  function blinkAt(t, seed) {
    var r = R(seed), tt = 0.6 + r() * 2;
    while (tt < t + 0.2 && tt < 4000) { if (Math.abs(t - tt) < 0.08) return 1 - Math.abs(t - tt) / 0.08; tt += 2.2 + r() * 2.6; }
    return 0;
  }

  /**
   * S.character(name, { parent?, x, y (feet), height (px of a 300-unit adult), face: 1|-1 }) → actor
   */
  S.character = function (name, o) {
    o = o || {};
    var b = book();
    var id = CAST[str(name).toLowerCase()] ? str(name).toLowerCase() : "wren";
    var c = CAST[id];
    var parts = charMarkup(c);
    var sc = num(o.height, H * 0.5) / 300;
    var vb = [-150, -360, 300, 380];
    var wrap = el("div.sb-actor", { parent: o.parent || b.cast });
    var X = num(o.x, W / 2), Y = num(o.y, H * 0.85);
    wrap.style.left = f1(X + vb[0] * sc) + "px";
    wrap.style.top = f1(Y + vb[1] * sc) + "px";
    var pv = parts.pivots;
    var shadow = '<ellipse class="sb-fill" cx="0" cy="1" rx="' + f1(parts.shadowW) + '" ry="7" fill="' + C.ink + '" fill-opacity="0.13"/><ellipse class="sb-fill" cx="2" cy="1" rx="' + f1(parts.shadowW * 0.6) + '" ry="4.5" fill="' + C.ink + '" fill-opacity="0.1"/>';
    var mk = shadow + '<g class="sb-body">' + parts.tail + parts.legL + parts.legR + parts.armL + parts.torso + parts.neck + '<g class="sb-head">' + parts.head + "</g>" + parts.armR + "</g>";
    var svg = svgEl(mk, vb, vb[2] * sc, vb[3] * sc, "sb-csvg");
    var flip = el("div.sb-flip", { parent: wrap });
    flip.appendChild(svg);
    function q(cls) { return svg.querySelector("." + cls); }
    var g = { body: q("sb-body"), head: q("sb-head"), armL: q("sb-armL"), armR: q("sb-armR"), foreL: q("sb-foreL"), foreR: q("sb-foreR"), legL: q("sb-legL"), legR: q("sb-legR"), tail: q("sb-tail"), eyes: q("sb-eyes"), earL: q("sb-earL"), earR: q("sb-earR") };
    var pupils = [].slice.call(svg.querySelectorAll(".sb-pupil"));
    var mouths = [].slice.call(svg.querySelectorAll(".sb-m"));
    var A = { id: id, name: c.name, el: wrap, svg: svg, x: X, y: Y, scale: sc, face: o.face === -1 ? -1 : 1 };
    var talks = [], gests = [], holds = [], looks = [], walks = [], faces = [], vis = [];
    var seed = hs(id) + Math.round(X);
    var curM = 0, last = {};
    function setA(node, key, val) { if (!node) return; if (last[key] !== val) { node.setAttribute("transform", val); last[key] = val; } }
    function rot(a, p) { return "rotate(" + f1(a) + " " + f1(p[0]) + " " + f1(p[1]) + ")"; }
    function poseAt(t) {
      var base = POSES.rest, k;
      for (k = 0; k < holds.length; k++) if (t >= holds[k].at) base = blend(base, POSES[holds[k].kind] || POSES.rest, sstep(prog(t, holds[k].at, holds[k].at + 0.45)));
      var p = base, extra = null;
      for (k = 0; k < gests.length; k++) {
        var gg = gests[k];
        if (t < gg.at || t > gg.at + gg.dur) continue;
        var wgt = sstep(prog(t, gg.at, gg.at + 0.38)) * (1 - sstep(prog(t, gg.at + gg.dur - 0.4, gg.at + gg.dur)));
        var tp = POSES[gg.kind] || POSES.rest;
        p = blend(p, tp, wgt);
        extra = { kind: gg.kind, w: wgt, t0: gg.at };
      }
      return { p: p, extra: extra };
    }
    function blend(a, b2, w) { return { rs: lerp(a.rs, b2.rs, w), re: lerp(a.re, b2.re, w), ls: lerp(a.ls, b2.ls, w), le: lerp(a.le, b2.le, w), tilt: lerp(a.tilt || 0, b2.tilt || 0, w), look: lerp(a.look || 0, b2.look || 0, w) }; }
    function xAt(t) {
      var x = 0, walking = 0, wph = 0;
      for (var k = 0; k < walks.length; k++) {
        var wk = walks[k];
        if (t < wk.at) break;
        var p = prog(t, wk.at, wk.at + wk.dur);
        var from = x;
        x = lerp(wk.from != null ? wk.from : from, wk.to, eio(p));
        if (p > 0 && p < 1) { walking = Math.min(1, Math.min(p, 1 - p) * 8); wph = (t - wk.at) * 2.2 * Math.PI; }
      }
      return { x: x, walking: walking, ph: wph };
    }
    function faceAt(t) {
      var f = A.face;
      for (var k = 0; k < faces.length; k++) {
        if (t < faces[k].at) break;
        var p = prog(t, faces[k].at, faces[k].at + 0.3);
        f = p < 0.5 ? f * (1 - p * 2) : faces[k].dir * (p - 0.5) * 2;
      }
      return f;
    }
    function visAt(t) {
      var v = 1;
      for (var k = 0; k < vis.length; k++) {
        var e = vis[k];
        if (t < e.at) { if (k === 0 && e.type === "in") v = 0; break; }
        var p = prog(t, e.at, e.at + e.dur);
        v = e.type === "in" ? p : 1 - p;
      }
      return v;
    }
    onT(function (t) {
      var pz = poseAt(t), P0 = pz.p, ex = pz.extra;
      var mv0 = xAt(t);
      var face = faceAt(t);
      var v = visAt(t);
      var mo = mouthAt(t, talks);
      var osc = 0, nod = 0;
      if (ex && ex.kind === "wave") osc = Math.sin((t - ex.t0) * 9) * 24 * ex.w;
      if (ex && ex.kind === "cheer") osc = Math.sin((t - ex.t0) * 7) * 8 * ex.w;
      if (ex && ex.kind === "nod") nod = Math.sin((t - ex.t0) * 7) * 7 * ex.w;
      var talking = mo.m > 0 ? 1 : 0;
      var breathe = Math.sin(t * 1.7 + seed) * 0.9;
      var bob = mv0.walking ? -Math.abs(Math.sin(mv0.ph)) * 4 * mv0.walking : 0;
      var legA = mv0.walking ? Math.sin(mv0.ph) * 20 * mv0.walking : 0;
      var swing = mv0.walking ? Math.sin(mv0.ph) * 14 * mv0.walking : 0;
      setA(g.body, "body", "translate(0," + f1(breathe * 0.6 + bob) + ")");
      setA(g.legL, "legL", rot(legA, pv.hipL));
      setA(g.legR, "legR", rot(-legA, pv.hipR));
      setA(g.armR, "armR", rot(P0.rs + osc * (ex && ex.kind === "cheer" ? 1 : 0) - swing, pv.shR));
      setA(g.foreR, "foreR", rot(P0.re + (ex && ex.kind === "wave" ? osc : 0), pv.elR));
      setA(g.armL, "armL", rot(P0.ls - osc * (ex && ex.kind === "cheer" ? 1 : 0) + swing, pv.shL));
      setA(g.foreL, "foreL", rot(P0.le, pv.elL));
      var tilt = (P0.tilt || 0) + Math.sin(t * 3.1 + seed) * 2.4 * talking + Math.sin(t * 0.7 + seed) * 1.2;
      setA(g.head, "head", "translate(0," + f1(nod * 0.5 - mo.open * 1.2 + breathe * 0.3) + ") " + rot(tilt + nod * 0.4, pv.neck));
      if (g.tail) setA(g.tail, "tail", rot(Math.sin(t * 1.5 + seed) * 7, pv.tail));
      var tw = Math.max(0, Math.sin(t * 0.9 + seed) - 0.92) * 120;
      if (g.earL) setA(g.earL, "earL", rot(-tw, [0, parts.headCY]));
      if (g.earR) setA(g.earR, "earR", rot(tw * 0.6, [0, parts.headCY]));
      // eyes: blink + look
      var bl = blinkAt(t, seed);
      var ey = parts.eyeY;
      setA(g.eyes, "eyes", "translate(0," + f2(ey * (bl * 0.88)) + ") scale(1," + f2(1 - bl * 0.88) + ")");
      var lk = (P0.look || 0), lkUp = 0;
      for (var k2 = 0; k2 < looks.length; k2++) if (t >= looks[k2].at) { var lp = sstep(prog(t, looks[k2].at, looks[k2].at + 0.3)); lk = lerp(lk, looks[k2].dx, lp); lkUp = lerp(lkUp, looks[k2].dy, lp); }
      var pt = "translate(" + f1(lk * 3) + "," + f1(lkUp * 3) + ")";
      for (var pI = 0; pI < pupils.length; pI++) setA(pupils[pI], "pu" + pI, pt);
      if (mo.m !== curM) { mouths[curM].style.display = "none"; mouths[mo.m].style.display = ""; curM = mo.m; }
      var tfs = "translateX(" + f1(mv0.x) + "px)";
      if (last.wrap !== tfs) { wrap.style.transform = tfs; last.wrap = tfs; }
      var fs = "scaleX(" + f2(face) + ")";
      if (last.flip !== fs) { flip.style.transform = fs; last.flip = fs; }
      var op = f2(v);
      if (last.op !== op) { wrap.style.opacity = op; last.op = op; }
    });
    // ── public channels ──
    A.talk = function (from, to) { talks.push([num(from, 0), num(to, DUR() + 1)]); return A; };
    A.gesture = function (at, kind, dur) { gests.push({ at: num(at, 0), kind: POSES[kind] ? kind : "present", dur: Math.max(0.8, num(dur, kind === "wave" ? 1.8 : 1.6)) }); gests.sort(function (a, b2) { return a.at - b2.at; }); return A; };
    A.pose = function (at, kind) { holds.push({ at: num(at, 0), kind: POSES[kind] ? kind : "rest" }); holds.sort(function (a, b2) { return a.at - b2.at; }); return A; };
    A.look = function (at, dx, dy) { looks.push({ at: num(at, 0), dx: clamp(num(dx, 0), -1, 1), dy: clamp(num(dy, 0), -1, 1) }); looks.sort(function (a, b2) { return a.at - b2.at; }); return A; };
    A.walkTo = function (at, x, dur) { walks.push({ at: num(at, 0), to: num(x, X) - X, dur: Math.max(0.3, num(dur, 1.4)) }); walks.sort(function (a, b2) { return a.at - b2.at; }); return A; };
    A.turn = function (at, dir) { faces.push({ at: num(at, 0), dir: dir === -1 ? -1 : 1 }); faces.sort(function (a, b2) { return a.at - b2.at; }); return A; };
    /** enter(at, how): "fade" (default — paints in softly) | "paint" (pencil draws, washes soak in) | "walk-left" | "walk-right" */
    A.enter = function (at, how, dur) {
      at = num(at, 0);
      how = how || "fade";
      if (how === "walk-left" || how === "walk-right") {
        var off = (how === "walk-left" ? -1 : 1) * Math.max(W * 0.35, u(320));
        dur = num(dur, 1.6);
        walks.push({ at: -1, from: off, to: off, dur: 0.1 });
        walks.push({ at: at, from: off, to: 0, dur: dur });
        walks.sort(function (a, b2) { return a.at - b2.at; });
        vis.push({ at: at, dur: 0.35, type: "in" });
      } else if (how === "paint") {
        paintOn(b.tl, svg, at, num(dur, 1.4));
      } else {
        vis.push({ at: at, dur: num(dur, 0.8), type: "in" });
        b.tl.fromTo(flip, { y: u(10) }, { y: 0 }, { at: ct(at), dur: num(dur, 0.8), ease: "outCubic" });
      }
      return A;
    };
    A.exit = function (at, how, dur) {
      at = num(at, DUR() - 1);
      if (how === "walk-left" || how === "walk-right") {
        var off = (how === "walk-left" ? -1 : 1) * Math.max(W * 0.45, u(400));
        A.turn(at - 0.05, how === "walk-left" ? -1 : 1);
        walks.push({ at: at, to: off, dur: num(dur, 1.6) });
        walks.sort(function (a, b2) { return a.at - b2.at; });
      } else vis.push({ at: at, dur: num(dur, 0.6), type: "out" });
      return A;
    };
    A.headTop = function () { return { x: X, y: Y + parts.headTop * sc }; };
    A.headCenter = function () { return { x: X, y: Y + parts.headCY * sc }; };
    A.height = function () { return -parts.headTop * sc; };
    return A;
  };

  // ───────────────────────── painted speech & thought clouds ─────────────────────────
  /**
   * S.bubble(text, { parent?, cx, bottom, maxW, size?, tail: {x, y} | null, kind: "speech"|"thought", from, to, dark? })
   * A painted cloud with book-serif words that ink in as spoken between from…to.
   */
  S.bubble = function (text, o) {
    o = o || {};
    var b = book();
    var holder = el("div.sb-bubble", { parent: o.parent || b.top });
    var maxW = num(o.maxW, W * 0.4);
    holder.style.maxWidth = f1(maxW) + "px";
    var tx = el("div.sb-btext", { parent: holder });
    tx.style.fontSize = f1(num(o.size, u(40))) + "px";
    tx.appendChild(S.rich(text));
    var words = S.splitWords(tx);
    fitBox(tx, { maxLines: o.maxLines || 4, min: u(18), maxWidth: maxW - u(60) });
    var bw = holder.offsetWidth || maxW, bh = holder.offsetHeight || u(120);
    var cx = num(o.cx, W / 2), bottom = num(o.bottom, H * 0.4);
    var mx = W * 0.03;
    var left = clamp(cx - bw / 2, mx, Math.max(mx, W - mx - bw)), top = Math.max(H * 0.02, bottom - bh);
    holder.style.left = f1(left) + "px";
    holder.style.top = f1(top) + "px";
    var tail = o.tail ? [o.tail.x - left, o.tail.y - top] : null;
    if (tail && tail[1] < bh + u(10)) tail = null;
    var pad = u(26);
    var x0 = -pad, y0 = -pad, x1 = bw + pad, y1 = bh + pad;
    if (tail) { x0 = Math.min(x0, tail[0] - pad); x1 = Math.max(x1, tail[0] + pad); y1 = Math.max(y1, tail[1] + pad); }
    var cv = canvasEl(x1 - x0, y1 - y0, clamp(300 / Math.max(x1 - x0, y1 - y0), 0.35, 0.7), "sb-bcanvas");
    cv.c.style.left = f1(x0) + "px"; cv.c.style.top = f1(y0) + "px";
    holder.insertBefore(cv.c, tx);
    var g = cv.g;
    g.translate(-x0, -y0);
    var seed = hs(text) + 17;
    var thought = o.kind === "thought";
    var fill = o.fill || C.white;
    var shape = thought ? cloudPts(-u(10), -u(8), bw + u(20), bh + u(16), seed) : rectP(0, 0, bw, bh, Math.min(bw, bh) * 0.42);
    if (tail && !thought) {
      var bx = clamp(tail[0], bw * 0.18, bw * 0.82), tw2 = Math.min(u(26), bw * 0.12);
      var tp = [[bx - tw2, bh - u(10)], [bx + tw2, bh - u(10)], [lerp(bx, tail[0], 0.85), tail[1]]];
      wash(g, tp, fill, { seed: seed + 3, layers: 5, alpha: 0.2, solid: 0.75, vari: 0.08, edgeA: 0.12 });
      pencilC(g, [tp[0], [lerp(tp[0][0], tp[2][0], 0.5) - u(3), lerp(tp[0][1], tp[2][1], 0.5)], tp[2]], { seed: seed + 4, alpha: 0.55, w: u(1.6) });
      pencilC(g, [tp[1], [lerp(tp[1][0], tp[2][0], 0.5) + u(2), lerp(tp[1][1], tp[2][1], 0.5)], tp[2]], { seed: seed + 5, alpha: 0.55, w: u(1.6) });
    }
    wash(g, shape, fill, { seed: seed, layers: 6, alpha: 0.18, solid: 0.78, vari: 0.07, edgeA: 0.14, dens: 0 });
    pencilC(g, dens(shape, u(26), true).concat([shape[0]]), { seed: seed + 1, alpha: 0.55, w: u(1.6), j: u(1.2) });
    if (tail && thought) {
      for (var k = 0; k < 3; k++) {
        var q = (k + 1) / 4, px = lerp(bw * 0.5, tail[0], q), py = lerp(bh, tail[1], q), pr = u(16 - k * 4);
        wash(g, ellP(px, py, pr, pr * 0.85, 9), fill, { seed: seed + 9 + k, layers: 4, alpha: 0.2, solid: 0.8, vari: 0.1 });
        pencilC(g, ellP(px, py, pr, pr * 0.85, 10).concat([[px + pr, py]]), { seed: seed + 12 + k, alpha: 0.5, w: u(1.3) });
      }
    }
    var from = num(o.from, 0.3), to = o.to != null ? num(o.to, DUR()) : null;
    holder.style.transformOrigin = tail ? f1(tail[0]) + "px " + f1(Math.min(tail[1], bh)) + "px" : "50% 100%";
    b.tl.fromTo(holder, { opacity: 0, scale: 0.86 }, { opacity: 1, scale: 1 }, { at: ct(from - 0.05), dur: 0.5, ease: "outBack" });
    var wEnd = to != null ? to : Math.min(DUR() * 0.92, from + words.length * 0.4);
    var times = S.syncTimes(words.map(function (s) { return s.textContent; }), { start: from, end: Math.max(from + 0.3, wEnd - 0.2), lead: 0.06, minGap: SYNC_MIN });
    words.forEach(function (s, i) { b.tl.fromTo(s, { opacity: 0.22 }, { opacity: 1 }, { at: ct(times[i]), dur: 0.3, ease: "outQuad" }); });
    if (to != null && o.hold !== true && to < DUR() - 0.2) b.tl.to(holder, { opacity: 0, scale: 0.94 }, { at: ct(to), dur: 0.35, ease: "inQuad" });
    return { el: holder, words: words, w: bw, h: bh, left: left, top: top };
  };

  // ───────────────────────── template helpers ─────────────────────────
  function castOk(n) { var k = str(n).toLowerCase().trim(); return k && k !== "none" && CAST[k] ? k : null; }
  function keyOf(it, fields) {
    if (!it) return null;
    if (it.keyword) return str(it.keyword);
    for (var i = 0; i < fields.length; i++) if (it[fields[i]]) return S.autoKey(plain(it[fields[i]]));
    return null;
  }
  function keyTimes(list, fields, opts) { return S.syncTimes(list.map(function (it) { return keyOf(it, fields); }), opts || {}); }
  function findLine(text, after) {
    var ws = plain(text).split(/\s+/).filter(Boolean);
    if (!ws.length) return null;
    var probe = ws.slice(0, Math.min(3, ws.length)).join(" ");
    var t = V.find(probe, after);
    if (t == null && ws.length > 1) t = V.find(ws[0] + " " + ws[1], after);
    if (t == null) return null;
    var idx = V.wordIndex(probe, after);
    var endI = idx >= 0 ? Math.min(V.words.length - 1, idx + ws.length - 1) : -1;
    return { start: t, end: endI >= 0 ? V.words[endI].end : t + ws.length * 0.33 };
  }
  /** Timing windows for an ordered list of lines (narration-matched, else proportional). */
  function lineWindows(lines, opts) {
    opts = opts || {};
    var D = DUR(), n = lines.length, out = new Array(n), after = 0;
    var t0 = opts.start != null ? opts.start : Math.min(0.4, D * 0.08), t1 = opts.end != null ? opts.end : D - Math.min(0.5, D * 0.08);
    for (var i = 0; i < n; i++) {
      var f = V.words && V.words.length ? findLine(lines[i], after) : null;
      if (f && f.end > f.start) { out[i] = f; after = f.end - 0.01; }
    }
    var lens = lines.map(function (l) { return Math.max(1, plain(l).split(/\s+/).filter(Boolean).length) + 1.5; });
    var i0 = 0;
    while (i0 < n) {
      if (out[i0]) { i0++; continue; }
      var j = i0;
      while (j < n && !out[j]) j++;
      var a = i0 > 0 ? out[i0 - 1].end + 0.2 : t0, bb = j < n ? out[j].start - 0.2 : t1;
      if (bb - a < 0.5 * (j - i0)) bb = a + 0.9 * (j - i0);
      var tot = 0, k;
      for (k = i0; k < j; k++) tot += lens[k];
      var cur = a;
      for (k = i0; k < j; k++) { var L = ((bb - a) * lens[k]) / tot; out[k] = { start: cur, end: cur + L * 0.9 }; cur += L; }
      i0 = j;
    }
    out.forEach(function (o2) { o2.start = clamp(o2.start, 0, Math.max(0, D - 0.4)); o2.end = clamp(Math.max(o2.end, o2.start + 0.4), 0, D); });
    return out;
  }
  S.lineWindows = lineWindows;
  function heading(b, text, o) {
    if (!str(text).trim()) return null;
    var d = el("div.sb-heading", { parent: b.text });
    d.style.left = f1(o.x) + "px"; d.style.top = f1(o.y) + "px"; d.style.width = f1(o.w) + "px";
    d.style.fontSize = f1(o.size || u(64)) + "px";
    if (o.align) d.style.textAlign = o.align;
    d.appendChild(S.rich(text));
    fitBox(d, { maxLines: o.maxLines || 2, maxWidth: o.w, min: u(24) });
    var spans = S.splitWords(d);
    b.tl.fromTo(spans, { opacity: 0, y: u(10) }, { opacity: 1, y: 0 }, { at: ct(o.at || 0.4), dur: 0.8, ease: "outCubic", stagger: 0.12 });
    return d;
  }
  function chapterLine(b, text, o) {
    if (!str(text).trim()) return null;
    var d = S.label(text, { x: o.x, y: o.y, w: o.w, size: o.size || u(28), align: o.align || "center", maxLines: 1 });
    b.tl.fromTo(d, { opacity: 0, letterSpacing: "0.5em" }, { opacity: 1, letterSpacing: "0.22em" }, { at: ct(o.at || 0.3), dur: 1.1, ease: "outCubic" });
    return d;
  }
  function folio(b, n, o) {
    var d = el("div.sb-folio", { parent: b.text, text: "~ " + n + " ~" });
    d.style.left = f1(o.x) + "px"; d.style.top = f1(o.y) + "px"; d.style.width = f1(o.w) + "px";
    b.tl.fromTo(d, { opacity: 0 }, { opacity: 0.75 }, { at: 0.8, dur: 1 });
  }
  function pageNo() { return 3 + ((V.seed >>> 0) % 37); }
  function fullCanvas(parent, k) {
    var cv = canvasEl(W, H, k || PK, "sb-full");
    parent.appendChild(cv.c);
    return cv;
  }
  // dense Catmull-Rom path through stops (for walks & dotted trails)
  function crPt(p0, p1, p2, p3, t) {
    var t2 = t * t, t3 = t2 * t;
    return [0, 1].map(function (k) { return 0.5 * (2 * p1[k] + (-p0[k] + p2[k]) * t + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t2 + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * t3); });
  }
  function trail(pts, per) {
    per = per || 24;
    var out = [], idx = [], n = pts.length;
    for (var i = 0; i < n - 1; i++) {
      idx.push(out.length);
      for (var s = 0; s < per; s++) out.push(crPt(pts[Math.max(0, i - 1)], pts[i], pts[i + 1], pts[Math.min(n - 1, i + 2)], s / per));
    }
    idx.push(out.length);
    out.push(pts[n - 1]);
    var L = [0];
    for (i = 1; i < out.length; i++) L.push(L[i - 1] + Math.sqrt(Math.pow(out[i][0] - out[i - 1][0], 2) + Math.pow(out[i][1] - out[i - 1][1], 2)));
    return {
      pts: out, L: L, total: L[L.length - 1], stopS: idx.map(function (k) { return L[k]; }),
      at: function (s) {
        s = clamp(s, 0, L[L.length - 1]);
        var lo = 0, hi = L.length - 1;
        while (hi - lo > 1) { var m = (lo + hi) >> 1; if (L[m] <= s) lo = m; else hi = m; }
        var q = (s - L[lo]) / Math.max(1e-6, L[hi] - L[lo]);
        return [lerp(out[lo][0], out[hi][0], q), lerp(out[lo][1], out[hi][1], q)];
      },
      d: function () { return "M" + out.map(function (p) { return f1(p[0]) + " " + f1(p[1]); }).join(" L"); },
    };
  }
  var MASKN = 0;
  /** Dotted trail SVG revealed up to arc length sAt(t). */
  function dottedTrail(b, tr, sAt, o) {
    o = o || {};
    var id = "sbm" + ++MASKN;
    var svg = svgEl('<defs><mask id="' + id + '" maskUnits="userSpaceOnUse" x="0" y="0" width="' + W + '" height="' + H + '"><path class="sb-mpath" d="' + tr.d() + '" fill="none" stroke="#fff" stroke-width="' + f1(u(40)) + '" stroke-linecap="round"/></mask></defs><path d="' + tr.d() + '" fill="none" stroke="' + (o.color || C.terracotta) + '" stroke-width="' + f1(u(o.w || 7)) + '" stroke-linecap="round" stroke-dasharray="0.1 ' + f1(u(o.gap || 20)) + '" mask="url(#' + id + ')" opacity="0.85"/>', [0, 0, W, H], W, H, "sb-trail");
    (o.parent || b.mid).appendChild(svg);
    var mp = svg.querySelector(".sb-mpath");
    var Lm = tr.total + u(50);
    mp.setAttribute("stroke-dasharray", f1(Lm) + " " + f1(Lm));
    var last = "";
    onT(function (t) { var v = f1(Lm - clamp(sAt(t), 0, tr.total)); if (v !== last) { mp.setAttribute("stroke-dashoffset", v); last = v; } });
    return svg;
  }
  /** A character that walks along a trail, arriving at stop i at arrive[i]. */
  function trailWalker(b, tr, arrive, name, o) {
    var mover = el("div.sb-mover", { parent: o.parent || b.cast });
    var A = S.character(name, { parent: mover, x: 0, y: 0, height: o.height, face: 1 });
    var n = tr.stopS.length;
    var legs = [];
    for (var i = 1; i < n; i++) {
      var tA = arrive[i], dist = tr.stopS[i] - tr.stopS[i - 1];
      var travel = clamp(dist / u(260), 0.8, Math.max(0.8, Math.min(2.4, tA - arrive[i - 1] - 0.3)));
      legs.push({ s0: tr.stopS[i - 1], s1: tr.stopS[i], t0: tA - travel, t1: tA });
      A.walkTo(tA - travel, A.x, travel);
      var a0 = tr.at(tr.stopS[i - 1]), a1 = tr.at(tr.stopS[i]);
      A.turn(tA - travel - 0.15, a1[0] >= a0[0] ? 1 : -1);
    }
    function sAt(t) {
      var s = tr.stopS[0];
      for (var k = 0; k < legs.length; k++) { if (t < legs[k].t0) break; s = lerp(legs[k].s0, legs[k].s1, eio(prog(t, legs[k].t0, legs[k].t1))); }
      return s;
    }
    onT(function (t) { var p = tr.at(sAt(t)); mover.style.transform = "translate(" + f1(p[0]) + "px," + f1(p[1] + (o.dy || 0)) + "px)"; });
    A.sAt = sAt;
    return A;
  }

  var T = {};

  // 1 ─ story-page: the workhorse — painting + character(s) + book text inked as spoken
  T["story-page"] = function (b, p) {
    S.pageTurn(0);
    var pr, tb;
    if (LAND) { pr = { x: W * 0.03, y: H * 0.04, w: W * 0.6, h: H * 0.92 }; tb = { x: W * 0.655, y: H * 0.17, w: W * 0.3, h: H * 0.66 }; }
    else if (PORT) { pr = { x: -W * 0.02, y: H * 0.025, w: W * 1.04, h: H * 0.6 }; tb = { x: W * 0.09, y: H * 0.67, w: W * 0.82, h: H * 0.25 }; }
    else { pr = { x: W * 0.02, y: H * 0.02, w: W * 0.96, h: H * 0.6 }; tb = { x: W * 0.08, y: H * 0.655, w: W * 0.84, h: H * 0.28 }; }
    var pt = S.painting({ location: p.location, time: p.time, x: pr.x, y: pr.y, w: pr.w, h: pr.h, bloom: 0.15, edge: PORT ? "b" : "soft" });
    var main = castOk(p.character) || "wren", comp = castOk(p.companion);
    if (comp === main) comp = null;
    var ch = pr.h * (PORT ? 0.66 : SQ ? 0.64 : 0.6);
    var mx = pr.x + pr.w * (comp ? (PORT ? 0.3 : 0.32) : 0.42);
    var A = S.character(main, { x: mx, y: pt.ground(0.4), height: ch, face: 1 });
    A.enter(0.55, "fade").talk(0.2, DUR());
    var B = null;
    if (comp) {
      B = S.character(comp, { x: pr.x + pr.w * (PORT ? 0.72 : 0.7), y: pt.ground(0.7), height: ch, face: -1 });
      B.enter(0.85, "fade").look(0, -0.6);
      B.gesture(Math.max(1.5, DUR() * 0.55), "nod", 1.4);
    }
    A.look(0, comp ? 0.6 : 0.3);
    var gk = p.gesture && p.gesture !== "none" ? p.gesture : "present";
    var gt = p.gestureWord ? V.at(str(p.gestureWord)) - 0.25 : DUR() * 0.4;
    A.gesture(clamp(gt, 0.9, Math.max(0.9, DUR() - 1.6)), gk, 1.8);
    var hY = tb.y;
    if (str(p.heading).trim()) {
      chapterLine(b, p.heading, { x: tb.x, y: LAND ? H * 0.09 : tb.y - u(12), w: tb.w, size: u(PORT ? 26 : 24), at: 0.4 });
      if (!LAND) { tb.y += u(30); tb.h -= u(30); }
    }
    var txt = S.pageText(p.text || "", { x: tb.x, y: tb.y, w: tb.w, h: tb.h, size: u(LAND ? 44 : PORT ? 54 : 44), dropCap: LAND ? true : false, align: LAND ? "left" : "left" });
    txt.show(0.5, 1).speak(0.35, DUR() * 0.94);
    if (LAND) S.ornament("fleuron", { x: tb.x + tb.w * 0.2, y: tb.y + tb.h + u(16), w: tb.w * 0.6 }).paintOn(1.2, 1.2);
    folio(b, pageNo(), { x: LAND ? tb.x : 0, y: H * 0.935, w: LAND ? tb.w : W });
    return hY;
  };

  // 2 ─ title-page: book cover / chapter opener
  T["title-page"] = function (b, p) {
    S.pageTurn(0, 1.1);
    var pr, tt, ch, sub, fl;
    if (LAND) { pr = { x: W * 0.5, y: H * 0.07, w: W * 0.46, h: H * 0.86 }; ch = { x: W * 0.06, y: H * 0.2, w: W * 0.4 }; tt = { x: W * 0.06, y: H * 0.27, w: W * 0.4, h: H * 0.32 }; fl = H * 0.62; sub = { x: W * 0.08, y: H * 0.68, w: W * 0.36, h: H * 0.16 }; }
    else if (PORT) { ch = { x: W * 0.08, y: H * 0.055, w: W * 0.84 }; tt = { x: W * 0.07, y: H * 0.085, w: W * 0.86, h: H * 0.17 }; fl = H * 0.262; pr = { x: W * 0.02, y: H * 0.3, w: W * 0.96, h: H * 0.52 }; sub = { x: W * 0.1, y: H * 0.835, w: W * 0.8, h: H * 0.1 }; }
    else { ch = { x: W * 0.1, y: H * 0.045, w: W * 0.8 }; tt = { x: W * 0.08, y: H * 0.085, w: W * 0.84, h: H * 0.15 }; fl = H * 0.245; pr = { x: W * 0.06, y: H * 0.29, w: W * 0.88, h: H * 0.56 }; sub = { x: W * 0.1, y: H * 0.86, w: W * 0.8, h: H * 0.09 }; }
    var pt = S.painting({ location: p.location, time: p.time, x: pr.x, y: pr.y, w: pr.w, h: pr.h, bloom: 0.5, bloomDur: 1.8 });
    var who = arr(p.characters).map(castOk).filter(Boolean).slice(0, 2);
    who.forEach(function (n, i) {
      var cx = pr.x + pr.w * (who.length === 1 ? 0.45 : 0.32 + i * 0.36);
      var A = S.character(n, { x: cx, y: pt.ground(0.4 + i * 0.3), height: pr.h * 0.58, face: i ? -1 : 1 });
      A.enter(1 + i * 0.3, "paint", 1.4).gesture(1.9 + i * 0.4, i ? "open" : "wave", 2).look(0, i ? -0.5 : 0.5);
      if (i === 0) A.talk(0.2, DUR());
    });
    chapterLine(b, p.chapter, { x: ch.x, y: ch.y, w: ch.w, size: u(PORT ? 30 : 28), at: 0.5 });
    var title = el("div.sb-title", { parent: b.text });
    title.style.left = f1(tt.x) + "px"; title.style.top = f1(tt.y) + "px"; title.style.width = f1(tt.w) + "px"; title.style.height = f1(tt.h) + "px";
    var tin = el("div.sb-titlein", { parent: title });
    tin.style.fontSize = f1(u(LAND ? 104 : PORT ? 96 : 84)) + "px";
    tin.appendChild(S.rich(p.title || "Once Upon a Time"));
    fitBox(tin, { maxHeight: tt.h, maxWidth: tt.w, min: u(36) });
    var spans = S.splitWords(tin);
    b.tl.fromTo(spans, { opacity: 0, y: u(16) }, { opacity: 1, y: 0 }, { at: 0.7, dur: 1, ease: "outCubic", stagger: 0.16 });
    var tex = washTex(C.terracotta, 9);
    [].forEach.call(tin.querySelectorAll(".v-em"), function (e2) { if (tex) { e2.style.backgroundImage = "url(" + tex + ")"; e2.classList.add("sb-painted"); } });
    S.ornament("fleuron", { x: (LAND ? tt.x + tt.w * 0.15 : W * 0.3), y: fl, w: LAND ? tt.w * 0.7 : W * 0.4 }).paintOn(1.3, 1.4);
    if (str(p.subtitle).trim()) {
      var st = S.pageText(p.subtitle, { x: sub.x, y: sub.y, w: sub.w, h: sub.h, size: u(PORT ? 40 : 38), italic: true, align: "center", valign: "top" });
      st.show(1.6, 1).speak(1.6, DUR() * 0.9, { dim: 0.45 });
    }
    var cs = u(PORT ? 150 : 130);
    [[0, 0, ""], [W - cs, 0, "scaleX(-1)"], [0, H - cs, "scaleY(-1)"], [W - cs, H - cs, "scale(-1,-1)"]].forEach(function (cq, i) {
      S.ornament("corner", { x: cq[0] + (cq[0] ? -u(18) : u(18)), y: cq[1] + (cq[1] ? -u(18) : u(18)), w: cs, flip: cq[2], seed: 40 + i * 9, parent: b.top }).paintOn(0.6 + i * 0.15, 1.6);
    });
    S.leaves({ parent: b.fx, n: 6, kind: "petal", seed: 12 });
  };

  // 3 ─ character-dialogue: two characters talk; painted speech clouds per line
  T["character-dialogue"] = function (b, p) {
    S.pageTurn(0);
    var pr, area, bw;
    if (LAND) { pr = { x: W * 0.02, y: H * 0.26, w: W * 0.96, h: H * 0.72 }; area = H * 0.05; bw = W * 0.42; }
    else if (PORT) { pr = { x: -W * 0.02, y: H * 0.38, w: W * 1.04, h: H * 0.6 }; area = H * 0.06; bw = W * 0.84; }
    else { pr = { x: W * 0.02, y: H * 0.32, w: W * 0.96, h: H * 0.66 }; area = H * 0.04; bw = W * 0.7; }
    var pt = S.painting({ location: p.location, time: p.time, x: pr.x, y: pr.y, w: pr.w, h: pr.h, bloom: 0.1, edge: "soft" });
    var ln = castOk(p.left) || "wren", rn = castOk(p.right) || "nana";
    if (rn === ln) rn = ln === "nana" ? "wren" : "nana";
    var ch = pr.h * (PORT ? 0.64 : 0.7);
    var L = S.character(ln, { x: pr.x + pr.w * 0.27, y: pt.ground(0.27), height: ch, face: 1 });
    var Rr = S.character(rn, { x: pr.x + pr.w * 0.73, y: pt.ground(0.73), height: ch, face: -1 });
    L.enter(0.3, "fade"); Rr.enter(0.5, "fade");
    L.look(0, 0.7); Rr.look(0, -0.7);
    var lines = arr(p.lines).filter(function (l) { return l && str(l.text).trim(); }).slice(0, 5);
    if (!lines.length) lines = [{ speaker: "left", text: plain(V.narration || "Hello!") }];
    var wins = lineWindows(lines.map(function (l) { return l.text; }));
    var gs = ["present", "open", "point", "shrug", "heart"];
    lines.forEach(function (l, i) {
      var A = l.speaker === "right" ? Rr : L, Bq = A === L ? Rr : L;
      var w0 = wins[i], next = wins[i + 1];
      var to = next ? Math.max(w0.start + 0.6, next.start - 0.42) : null;
      A.talk(w0.start - 0.05, w0.end + 0.1);
      if (w0.end - w0.start > 1.2) A.gesture(w0.start + 0.2, gs[i % gs.length], Math.min(2.2, w0.end - w0.start));
      Bq.gesture(Math.min(w0.end - 0.2, w0.start + 0.8), i % 2 ? "nod" : "nod", 1.2);
      var ht = A.headTop();
      var limit = Math.max(area + u(120), ht.y - u(26));
      var cx = PORT || SQ ? (A === L ? W * 0.44 : W * 0.56) : A === L ? Math.max(W * 0.24, ht.x + u(60)) : Math.min(W * 0.76, ht.x - u(60));
      S.bubble(l.text, { cx: cx, bottom: Math.min(limit, pr.y + pr.h * 0.18), maxW: bw, size: u(PORT ? 44 : 40), tail: { x: ht.x + (A === L ? u(16) : -u(16)), y: ht.y - u(8) }, from: w0.start, to: to, maxLines: PORT ? 4 : 3 });
    });
  };

  // 4 ─ map-of-the-land: illustrated map, landmarks painted on, a dotted journey walked
  T["map-of-the-land"] = function (b, p) {
    S.pageTurn(0);
    var cv = fullCanvas(b.back);
    var g = cv.g, r = R(hs(p.title) + 3);
    wash(g, [[-u(40), -u(40)], [W + u(40), -u(40)], [W + u(40), H + u(40)], [-u(40), H + u(40)]], "#BFD8DC", { seed: 4, layers: 5, alpha: 0.12, vari: 0.04, dens: 0, edge: false });
    var cx0 = W / 2, cy0 = H * (PORT ? 0.54 : 0.55), rx0 = W * (PORT ? 0.44 : 0.43), ry0 = H * (PORT ? 0.4 : 0.37);
    var land = ellP(cx0, cy0, rx0, ry0, 48).map(function (q, i) { var a = (i / 48) * Math.PI * 2; var k = 1 + Math.sin(a * 3 + 1.3) * 0.07 + Math.sin(a * 5 + 0.4) * 0.05 + Math.sin(a * 9 + 2) * 0.025; return [cx0 + (q[0] - cx0) * k, cy0 + (q[1] - cy0) * k]; });
    wash(g, land, "#E2CF9E", { seed: 5, layers: 9, alpha: 0.13, vari: 0.14, gran: 0.4 });
    wash(g, scl(land, 0.82), "#B7C98F", { seed: 6, layers: 7, alpha: 0.11, vari: 0.22 });
    for (var i = 0; i < 6; i++) wash(g, ellP(cx0 + (r() - 0.5) * rx0 * 1.2, cy0 + (r() - 0.5) * ry0 * 1.1, rx0 * (0.12 + r() * 0.1), ry0 * (0.1 + r() * 0.08), 9), [C.leaf, C.sage, C.spring, C.moss][i % 4], { seed: 10 + i, layers: 5, alpha: 0.1, vari: 0.3 });
    pencilC(g, dens(land, u(30), true).concat([land[0]]), { seed: 7, alpha: 0.55, w: u(1.8), j: u(1.6) });
    pencilC(g, dens(scl(land, 1.05), u(30), true).concat([scl(land, 1.05)[0]]), { seed: 8, alpha: 0.2, w: u(1.2), j: u(2), passes: 1 });
    for (i = 0; i < 14; i++) { var wx = r() * W, wy = r() * H; var dxl = (wx - cx0) / rx0, dyl = (wy - cy0) / ry0; if (dxl * dxl + dyl * dyl < 1.3) continue; pencilC(g, [[wx, wy], [wx + u(14), wy - u(5)], [wx + u(28), wy]], { seed: 20 + i, alpha: 0.35, w: u(1.3), color: C.blue, passes: 1 }); }
    b.tl.fromTo(cv.c, { opacity: 0 }, { opacity: 1 }, { at: 0.15, dur: 1.2, ease: "outCubic" });
    var places = arr(p.places).filter(Boolean).slice(0, 6);
    if (places.length < 2) places = places.concat([{ name: "Home", landmark: "house" }, { name: "Far Away", landmark: "castle" }]).slice(0, Math.max(2, places.length));
    var n = places.length, pts = [];
    places.forEach(function (pl, i2) {
      var q = n === 1 ? 0.5 : i2 / (n - 1);
      if (PORT) pts.push([W * (i2 % 2 ? 0.68 : 0.32), H * lerp(0.3, 0.84, q)]);
      else pts.push([W * lerp(SQ ? 0.2 : 0.17, SQ ? 0.8 : 0.83, q), H * (i2 % 2 ? (SQ ? 0.72 : 0.72) : (SQ ? 0.46 : 0.44))]);
    });
    var tr = trail(pts, 26);
    var times = keyTimes(places, ["name"], { start: 1.2, end: DUR() * 0.86, minGap: 0.6 });
    var arrive = times.map(function (t, k) { return k === 0 ? Math.min(t, 1.2) : Math.max(t, times[k - 1] + 0.9); });
    var who = castOk(p.character);
    var sAtFn;
    var ls = u(PORT ? 150 : 140);
    places.forEach(function (pl, k) {
      var q = pts[k];
      var lx0 = who ? q[0] + ls * 0.5 : q[0];
      var ob = S.object(pl.landmark || pl.name || "house", { parent: b.mid, x: lx0, y: q[1] - ls * 0.42, size: ls });
      ob.paintOn(arrive[k] - 0.5, 1.1);
      var lab = el("div.sb-maplabel", { parent: b.text, text: plain(pl.name || "") });
      lab.style.left = f1(lx0 - u(170)) + "px"; lab.style.top = f1(q[1] + ls * 0.1) + "px"; lab.style.width = f1(u(340)) + "px";
      lab.style.fontSize = f1(u(PORT ? 36 : 34)) + "px";
      fitBox(lab, { maxLines: 2, maxWidth: u(340), min: u(18) });
      b.tl.fromTo(lab, { opacity: 0, y: u(8) }, { opacity: 1, y: 0 }, { at: ct(arrive[k] - 0.1), dur: 0.7, ease: "outCubic" });
    });
    if (who) {
      var A = trailWalker(b, tr, arrive, who, { height: H * (PORT ? 0.16 : 0.24), dy: -u(4), parent: b.front });
      A.talk(0.2, DUR());
      A.gesture(arrive[n - 1] + 0.1, "cheer", 1.6);
      sAtFn = A.sAt;
      b.tl.fromTo(A.el, { opacity: 0 }, { opacity: 1 }, { at: 0.6, dur: 0.6 });
    } else {
      sAtFn = function (t) { var s = tr.stopS[0]; for (var k = 1; k < n; k++) { if (t < arrive[k] - 1) break; s = lerp(tr.stopS[k - 1], tr.stopS[k], eio(prog(t, arrive[k] - 1, arrive[k]))); } return s; };
    }
    dottedTrail(b, tr, sAtFn, { parent: b.back });
    var cs = u(PORT ? 150 : 170);
    var comp = S.object("compass", { parent: b.mid, x: PORT ? W * 0.82 : W * 0.9, y: PORT ? H * 0.92 : H * 0.83, size: cs });
    comp.paintOn(0.6, 1.2);
    if (str(p.title).trim()) {
      var tw = Math.min(W * (PORT ? 0.82 : 0.5), u(900)), tx = (W - tw) / 2, ty = H * (PORT ? 0.04 : 0.04), th = u(PORT ? 120 : 110);
      S.wash({ parent: b.mid, x: tx, y: ty, w: tw, h: th, color: C.cream, shape: "rect", alpha: 0.2, solid: 0.6, pencil: true, gran: 0 }).bloom(0.3, 0.9);
      var tl2 = el("div.sb-cartouche", { parent: b.text, text: plain(p.title) });
      tl2.style.left = f1(tx + u(20)) + "px"; tl2.style.top = f1(ty) + "px"; tl2.style.width = f1(tw - u(40)) + "px"; tl2.style.height = f1(th) + "px";
      tl2.style.fontSize = f1(u(PORT ? 58 : 56)) + "px";
      fitBox(tl2, { maxWidth: tw - u(40), min: u(22) });
      b.tl.fromTo(tl2, { opacity: 0 }, { opacity: 1 }, { at: 0.5, dur: 0.9 });
    }
  };

  // 5 ─ list-of-things: painted vignettes with labels, landing on their key words
  T["list-of-things"] = function (b, p) {
    S.pageTurn(0);
    var items = arr(p.items).filter(Boolean).slice(0, 6);
    if (!items.length) items = [{ label: "Something", object: "star" }];
    var n = items.length;
    var who = castOk(p.character);
    var top = H * (PORT ? 0.2 : 0.24), bottom = H * (PORT ? (who ? 0.74 : 0.92) : 0.93);
    var left = W * (who && !PORT ? (SQ ? 0.26 : 0.24) : 0.05), right = W * 0.95;
    if (str(p.title).trim()) {
      heading(b, p.title, { x: W * 0.08, y: H * (PORT ? 0.05 : 0.06), w: W * 0.84, size: u(PORT ? 66 : 64), align: "center", at: 0.3 });
      S.ornament("fleuron", { x: W * 0.35, y: H * (PORT ? 0.15 : 0.17), w: W * 0.3 }).paintOn(0.7, 1.1);
    } else top = H * 0.08;
    var cols = PORT ? (n <= 3 ? 1 : 2) : n <= 4 ? n : 3;
    if (SQ) cols = n <= 2 ? n : n <= 4 ? 2 : 3;
    var rows = Math.ceil(n / cols);
    var cw = (right - left) / cols, chh = (bottom - top) / rows;
    var times = keyTimes(items, ["label"], { start: 0.9, end: DUR() * 0.8, minGap: 0.45 });
    var spots = [C.butter, C.blush, C.skyLt, C.spring, C.lilac, C.sand];
    items.forEach(function (it, i) {
      var c = i % cols, rI = Math.floor(i / cols);
      var inRow = rI === rows - 1 ? n - rI * cols : cols;
      var x0 = left + (right - left - inRow * cw) / 2 + c * cw;
      var cxm = x0 + cw / 2, cy = top + rI * chh;
      var horiz = PORT && cols === 1;
      var sz = Math.min(cw * (horiz ? 0.36 : 0.62), chh * (horiz ? 0.8 : 0.56));
      var labH = Math.min(chh - sz, u(PORT ? 170 : 150));
      var ox = horiz ? left + sz * 0.62 : cxm, oy = horiz ? cy + chh / 2 : cy + Math.max(chh * 0.03, (chh - sz - labH) / 2) + sz * 0.5;
      S.wash({ parent: b.back, x: ox - sz * 0.6, y: oy - sz * 0.5, w: sz * 1.2, h: sz, color: spots[i % spots.length], alpha: 0.13, seed: 300 + i }).bloom(times[i] - 0.3, 1);
      S.object(it.object || it.label, { parent: b.mid, x: ox, y: oy, size: sz * 0.82 }).paintOn(times[i] - 0.2, 1.1);
      var lx = horiz ? ox + sz * 0.75 : x0 + cw * 0.06, lw = horiz ? right - lx : cw * 0.88;
      var ly = horiz ? cy + chh * 0.18 : oy + sz * 0.52, lh = horiz ? chh * 0.64 : cy + chh - ly - u(6);
      var box = el("div.sb-item", { parent: b.text });
      box.style.left = f1(lx) + "px"; box.style.top = f1(ly) + "px"; box.style.width = f1(lw) + "px"; box.style.height = f1(Math.max(u(40), lh)) + "px";
      if (horiz) box.style.textAlign = "left", box.style.justifyContent = "center";
      var lab = el("div.sb-itemlabel", { parent: box });
      lab.style.fontSize = f1(u(PORT ? 46 : SQ ? 38 : 42)) + "px";
      lab.appendChild(S.rich(it.label || ""));
      if (str(it.note).trim()) { var nt = el("div.sb-itemnote", { parent: box, text: plain(it.note) }); nt.style.fontSize = f1(u(PORT ? 32 : SQ ? 28 : 30)) + "px"; }
      fitBox(box, { maxHeight: Math.max(u(40), lh), maxWidth: lw, min: u(16) });
      b.tl.fromTo(box, { opacity: 0, y: u(10) }, { opacity: 1, y: 0 }, { at: ct(times[i] + 0.25), dur: 0.7, ease: "outCubic" });
    });
    if (who) {
      var A;
      if (PORT) A = S.character(who, { x: W * 0.5, y: H * 0.975, height: H * 0.3, face: 1 });
      else A = S.character(who, { x: W * (SQ ? 0.13 : 0.12), y: H * 0.94, height: H * (SQ ? 0.5 : 0.62), face: 1 });
      S.wash({ parent: b.back, x: A.x - u(150), y: A.y - u(40), w: u(300), h: u(70), color: C.sage, alpha: 0.12, seed: 77 }).bloom(0.3, 1);
      A.enter(0.3, "fade").talk(0.2, DUR()).look(0, PORT ? 0 : 0.8, PORT ? -0.6 : 0);
      times.forEach(function (t, i) { if (i < 4) A.gesture(t - 0.3, i % 2 ? "present" : "point", 1.3); });
    }
  };

  // 6 ─ two-pages: a comparison spread, left page vs right page
  T["two-pages"] = function (b, p) {
    S.pageTurn(0);
    var Lp = p.left || {}, Rp = p.right || {};
    var pages;
    if (PORT) pages = [{ x: W * 0.06, y: H * 0.04, w: W * 0.88, h: H * 0.44 }, { x: W * 0.06, y: H * 0.52, w: W * 0.88, h: H * 0.44 }];
    else pages = [{ x: W * 0.05, y: H * 0.07, w: W * 0.43, h: H * 0.86 }, { x: W * 0.52, y: H * 0.07, w: W * 0.43, h: H * 0.86 }];
    var gut = el("div.sb-gutter" + (PORT ? ".sb-gutter-h" : ""), { parent: b.back });
    if (PORT) { gut.style.top = f1(H * 0.5 - u(40)) + "px"; gut.style.height = f1(u(80)) + "px"; }
    else { gut.style.left = f1(W * 0.5 - u(50)) + "px"; gut.style.width = f1(u(100)) + "px"; }
    var tR = p.keyword ? V.at(str(p.keyword)) - 0.3 : null;
    var tRight = clamp(tR != null ? tR : DUR() * 0.45, 1.2, Math.max(1.2, DUR() - 2));
    var starts = [0.5, tRight];
    [Lp, Rp].forEach(function (pg, i) {
      var r0 = pages[i], at = starts[i];
      var hd = el("div.sb-pagehead", { parent: b.text, text: plain(pg.heading || (i ? "After" : "Before")) });
      hd.style.left = f1(r0.x) + "px"; hd.style.top = f1(r0.y + (PORT ? u(4) : r0.h * 0.03)) + "px"; hd.style.width = f1(r0.w) + "px";
      hd.style.fontSize = f1(u(PORT ? 50 : 52)) + "px";
      fitBox(hd, { maxLines: 1, maxWidth: r0.w, min: u(20) });
      b.tl.fromTo(hd, { opacity: 0 }, { opacity: 1 }, { at: ct(at), dur: 0.8 });
      var osz = PORT ? r0.h * 0.5 : Math.min(r0.w * 0.5, r0.h * 0.36);
      var ox = PORT ? r0.x + r0.w * 0.22 : r0.x + r0.w / 2, oy = PORT ? r0.y + r0.h * 0.56 : r0.y + r0.h * 0.33;
      S.wash({ parent: b.back, x: ox - osz * 0.62, y: oy - osz * 0.5, w: osz * 1.24, h: osz, color: i ? C.skyLt : C.blush, alpha: 0.13, seed: 40 + i }).bloom(at + 0.1, 1.1);
      S.object(pg.object || (i ? "sun" : "cloud"), { parent: b.mid, x: ox, y: oy, size: osz * 0.86 }).paintOn(at + 0.25, 1.2);
      var pts2 = arr(pg.points).filter(Boolean).slice(0, 4);
      var tx = PORT ? r0.x + r0.w * 0.44 : r0.x + r0.w * 0.08, ty = PORT ? r0.y + r0.h * 0.2 : r0.y + r0.h * 0.56, tw = PORT ? r0.w * 0.56 : r0.w * 0.84, th = PORT ? r0.h * 0.76 : r0.h * 0.4;
      var box = el("div.sb-points", { parent: b.text });
      box.style.left = f1(tx) + "px"; box.style.top = f1(ty) + "px"; box.style.width = f1(tw) + "px"; box.style.height = f1(th) + "px";
      box.style.fontSize = f1(u(PORT ? 40 : 38)) + "px";
      var lis = pts2.map(function (pt2) { var li = el("div.sb-point", { parent: box }); li.appendChild(S.rich(pt2)); return li; });
      fitBox(box, { maxHeight: th, maxWidth: tw, min: u(16) });
      var tt = keyTimes(pts2.map(function (x) { return { label: x }; }), ["label"], { start: at + 0.6, end: i ? DUR() * 0.9 : Math.max(at + 1, tRight - 0.3), minGap: 0.3 });
      lis.forEach(function (li, k) { b.tl.fromTo(li, { opacity: 0, x: u(-10) }, { opacity: 1, x: 0 }, { at: ct(Math.max(at + 0.5 + k * 0.25, tt[k])), dur: 0.6, ease: "outCubic" }); });
    });
    var vs = el("div.sb-vs", { parent: b.top, text: plain(p.versus || "or") });
    var vsz = u(PORT ? 96 : 104);
    vs.style.width = vs.style.height = f1(vsz) + "px";
    vs.style.left = f1(W / 2 - vsz / 2) + "px"; vs.style.top = f1((PORT ? H * 0.5 : H * 0.5) - vsz / 2) + "px";
    vs.style.fontSize = f1(vsz * 0.4) + "px";
    var tex = washTex(C.butter, 21);
    if (tex) vs.style.backgroundImage = "url(" + tex + ")";
    b.tl.fromTo(vs, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1 }, { at: ct(tRight - 0.2), dur: 0.6, ease: "outBack" });
  };

  // 7 ─ number-painting: a big painted number counts up; small painted things tally it
  T["number-painting"] = function (b, p) {
    S.pageTurn(0);
    var who = castOk(p.character);
    var val = num(p.value, 0);
    var t0 = clamp(p.keyword ? V.at(str(p.keyword)) - 0.4 : 0.8, 0.5, Math.max(0.5, DUR() - 2.2));
    var cx = LAND ? (who ? W * 0.58 : W * 0.5) : SQ ? (who ? W * 0.6 : W * 0.5) : W * 0.5;
    var cy = H * (PORT ? 0.3 : LAND ? 0.38 : 0.36);
    var bw = LAND ? W * (who ? 0.6 : 0.8) : SQ ? W * (who ? 0.66 : 0.84) : W * 0.9;
    S.wash({ parent: b.back, x: cx - bw * 0.42, y: cy - H * (PORT ? 0.12 : 0.2), w: bw * 0.84, h: H * (PORT ? 0.24 : 0.4), color: C.butter, alpha: 0.12, seed: 61 }).bloom(0.2, 1.2);
    var numEl = el("div.sb-number", { parent: b.text });
    numEl.style.left = f1(cx - bw / 2) + "px"; numEl.style.width = f1(bw) + "px";
    var fs = u(PORT ? 230 : LAND ? 250 : 210);
    numEl.style.fontSize = f1(fs) + "px";
    numEl.style.top = f1(cy - fs * 0.62) + "px";
    var dec = Math.abs(val % 1) > 1e-9 ? Math.min(2, (str(val).split(".")[1] || "").length) : 0;
    var finalStr = str(p.prefix || "") + V.format(val, dec) + str(p.suffix || "");
    numEl.textContent = finalStr;
    fitBox(numEl, { maxLines: 1, maxWidth: bw, min: u(60) });
    var tex = washTex(C.terracotta, 31);
    if (tex) numEl.style.backgroundImage = "url(" + tex + ")";
    b.tl.fromTo(numEl, { text: 0 }, { text: val, decimals: dec, prefix: str(p.prefix || ""), suffix: str(p.suffix || "") }, { at: ct(t0), dur: 1.8, ease: "outCubic" });
    b.tl.fromTo(numEl, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1 }, { at: ct(t0 - 0.3), dur: 0.8, ease: "outCubic" });
    var lab = S.pageText(p.label || "", { x: cx - bw * 0.45, y: cy + fs * 0.42, w: bw * 0.9, h: H * (PORT ? 0.12 : 0.17), size: u(PORT ? 50 : 46), italic: true, align: "center", valign: "top" });
    lab.show(t0 + 0.3, 0.8).speak(t0 + 0.2, DUR() * 0.9, { dim: 0.4 });
    var obj = p.object || "star";
    var count = Math.round(val) === val && val >= 1 && val <= 12 ? val : 5;
    var rowY = PORT ? H * 0.6 : H * 0.84;
    var rowW = PORT ? W * 0.84 : bw * 0.92;
    var osz = Math.min(u(PORT ? 120 : 110), (rowW / count) * 0.9);
    for (var i = 0; i < count; i++) {
      var ox = cx - rowW / 2 + (rowW / count) * (i + 0.5);
      var at = t0 + (1.6 * (i + 1)) / count;
      S.object(obj, { parent: b.mid, x: ox, y: rowY + Math.sin(i * 1.7) * u(10), size: osz, rotate: (h01(i, 7) - 0.5) * 18 }).paintOn(at, 0.7);
    }
    if (who) {
      var A = PORT ? S.character(who, { x: W * 0.5, y: H * 0.975, height: H * 0.3, face: 1 }) : S.character(who, { x: W * (SQ ? 0.15 : 0.14), y: H * 0.94, height: H * (SQ ? 0.52 : 0.64), face: 1 });
      S.wash({ parent: b.back, x: A.x - u(150), y: A.y - u(40), w: u(300), h: u(70), color: C.sage, alpha: 0.12, seed: 78 }).bloom(0.3, 1);
      A.enter(0.3, "fade").talk(0.2, DUR()).look(0, PORT ? 0 : 0.8, PORT ? -0.8 : -0.3);
      A.gesture(t0 + 0.2, PORT ? "cheer" : "point", 1.8);
    }
    S.twinkles({ parent: b.fx, x: cx - bw * 0.4, y: cy - H * 0.16, w: bw * 0.8, h: H * 0.3, n: 7, seed: 9, color: C.honey });
  };

  // 8 ─ winding-path: a timeline as a winding path with stops; a character walks it
  T["winding-path"] = function (b, p) {
    S.pageTurn(0);
    var stops = arr(p.stops).filter(Boolean).slice(0, 6);
    if (stops.length < 2) stops = stops.concat([{ label: "Then", date: "" }, { label: "Now", date: "" }]).slice(0, Math.max(2, stops.length));
    var n = stops.length;
    var titleH = str(p.title).trim() ? H * (PORT ? 0.13 : 0.17) : H * 0.04;
    if (titleH > H * 0.05) heading(b, p.title, { x: W * 0.08, y: H * (PORT ? 0.04 : 0.05), w: W * 0.84, size: u(PORT ? 62 : 60), align: "center", at: 0.3 });
    var pts = [];
    stops.forEach(function (s, i) {
      var q = n === 1 ? 0.5 : i / (n - 1);
      if (PORT) pts.push([W * (i % 2 ? 0.66 : 0.34), lerp(titleH + H * 0.1, H * 0.86, q)]);
      else pts.push([lerp(W * 0.12, W * 0.88, q), H * (i % 2 ? 0.48 : 0.72) + (titleH - H * 0.17) * 0.3]);
    });
    var tr = trail(pts, 26);
    // painted ground: meadow washes and a sandy path ribbon
    var cv = fullCanvas(b.back);
    var g = cv.g;
    var rr = R(hs(p.title) + 1);
    for (var i = 0; i < 6; i++) wash(g, ellP(W * (0.1 + rr() * 0.8), H * (0.35 + rr() * 0.55), W * (0.18 + rr() * 0.12), H * (0.1 + rr() * 0.08), 9), [C.spring, C.leaf, C.butter][i % 3], { seed: 70 + i, layers: 5, alpha: 0.08, vari: 0.3, edge: false });
    var ribbonW = u(PORT ? 70 : 64);
    var side = [], side2 = [];
    for (var k = 0; k < tr.pts.length; k += 2) {
      var a0 = tr.pts[Math.max(0, k - 1)], a1 = tr.pts[Math.min(tr.pts.length - 1, k + 1)];
      var dx = a1[0] - a0[0], dy = a1[1] - a0[1], dl = Math.sqrt(dx * dx + dy * dy) || 1;
      var nx = -dy / dl, ny = dx / dl, ww = ribbonW * (0.8 + 0.2 * Math.sin(k * 0.3));
      side.push([tr.pts[k][0] + nx * ww / 2, tr.pts[k][1] + ny * ww / 2]);
      side2.push([tr.pts[k][0] - nx * ww / 2, tr.pts[k][1] - ny * ww / 2]);
    }
    wash(g, side.concat(side2.reverse()), C.sand, { seed: 71, layers: 6, alpha: 0.14, vari: 0.04, gran: 0.5, depth: 1, ldepth: 1 });
    pencilC(g, side, { seed: 72, alpha: 0.35, w: u(1.3) });
    pencilC(g, side2, { seed: 73, alpha: 0.35, w: u(1.3) });
    for (i = 0; i < 26; i++) { var tp = tr.pts[Math.floor(rr() * tr.pts.length)]; var ox2 = (rr() - 0.5) * u(220), oy2 = (rr() - 0.5) * u(160); if (Math.abs(ox2) < u(50) && Math.abs(oy2) < u(50)) continue; pencilC(g, [[tp[0] + ox2, tp[1] + oy2], [tp[0] + ox2 + u(3), tp[1] + oy2 - u(14)]], { seed: 80 + i, alpha: 0.35, w: u(1.2), color: C.moss, passes: 1 }); }
    b.tl.fromTo(cv.c, { opacity: 0 }, { opacity: 1 }, { at: 0.2, dur: 1.2 });
    var times = keyTimes(stops, ["label", "date"], { start: 1.1, end: DUR() * 0.86, minGap: 0.6 });
    var arrive = times.map(function (t, k2) { return k2 === 0 ? Math.min(t, 1.1) : Math.max(t, times[k2 - 1] + 0.9); });
    var who = castOk(p.character);
    var sAtFn;
    if (who) {
      var A = trailWalker(b, tr, arrive, who, { height: H * (PORT ? 0.15 : 0.26), dy: u(6), parent: b.front });
      A.talk(0.2, DUR());
      A.gesture(arrive[n - 1] + 0.1, "wave", 1.8);
      b.tl.fromTo(A.el, { opacity: 0 }, { opacity: 1 }, { at: 0.5, dur: 0.6 });
      sAtFn = A.sAt;
    } else sAtFn = function (t) { var s = tr.stopS[0]; for (var k3 = 1; k3 < n; k3++) { if (t < arrive[k3] - 1) break; s = lerp(tr.stopS[k3 - 1], tr.stopS[k3], eio(prog(t, arrive[k3] - 1, arrive[k3]))); } return s; };
    dottedTrail(b, tr, sAtFn, { parent: b.back, color: C.bark, w: 5, gap: 16 });
    stops.forEach(function (s, k4) {
      var q = pts[k4];
      var flag = svgEl(pen([[6, 60], [6, 4]], { w: 2.4, seed: k4 }) + wc([[7, 5], [40, 12], [7, 24]], [C.terracotta, C.blue, C.ochre, C.plum, C.moss, C.rose][k4 % 6], { seed: 400 + k4, j: 0.5 }), [0, 0, 44, 64], u(52), u(76));
      var fw = el("div.sb-flag", { parent: b.mid });
      fw.appendChild(flag);
      fw.style.left = f1(q[0] - u(6)) + "px"; fw.style.top = f1(q[1] - u(72)) + "px";
      paintOn(b.tl, flag, arrive[k4] - 0.4, 0.8);
      var stone = S.wash({ parent: b.back, x: q[0] - u(30), y: q[1] - u(14), w: u(60), h: u(28), color: C.stone, alpha: 0.2, seed: 500 + k4, inner: false });
      stone.bloom(arrive[k4] - 0.5, 0.6);
      var above = PORT ? false : k4 % 2 === 1;
      var lw = PORT ? W * 0.4 : Math.min(W * 0.26, (W * 0.8) / Math.max(2, n - 1) * 1.6);
      var box = el("div.sb-stop", { parent: b.text });
      var lx = PORT ? (k4 % 2 ? q[0] - lw - u(60) : q[0] + u(56)) : q[0] - lw / 2;
      box.style.left = f1(clamp(lx, W * 0.03, W * 0.97 - lw)) + "px"; box.style.width = f1(lw) + "px";
      var bh = PORT ? u(150) : H * 0.16;
      box.style.height = f1(bh) + "px";
      box.style.top = f1(PORT ? q[1] - bh * 0.6 : above ? q[1] - u(86) - bh : q[1] + u(30)) + "px";
      box.style.justifyContent = PORT ? "center" : above ? "flex-end" : "flex-start";
      if (PORT) box.style.textAlign = k4 % 2 ? "right" : "left";
      if (str(s.date).trim()) { var dt = el("div.sb-stopdate", { parent: box, text: plain(s.date) }); dt.style.fontSize = f1(u(PORT ? 30 : 28)) + "px"; }
      var lb = el("div.sb-stoplabel", { parent: box });
      lb.appendChild(S.rich(s.label || ""));
      lb.style.fontSize = f1(u(PORT ? 40 : 36)) + "px";
      fitBox(box, { maxHeight: bh, maxWidth: lw, min: u(16) });
      b.tl.fromTo(box, { opacity: 0, y: u(8) }, { opacity: 1, y: 0 }, { at: ct(arrive[k4] - 0.05), dur: 0.7, ease: "outCubic" });
    });
  };

  // 9 ─ quote-page: an illuminated drop cap and a quotation set like a book page
  T["quote-page"] = function (b, p) {
    S.pageTurn(0);
    var fr = el("div.sb-frame", { parent: b.back });
    var m = Math.min(W, H) * 0.05;
    fr.style.left = fr.style.top = f1(m) + "px"; fr.style.right = fr.style.bottom = f1(m) + "px";
    var fsvg = svgEl(pen(dens([[0, 0], [W - m * 2, 0], [W - m * 2, H - m * 2], [0, H - m * 2], [0, 0]], u(60), false), { w: u(1.6), j: u(1.4), o: 0.6, seed: 3 }) + pen(dens([[u(12), u(12)], [W - m * 2 - u(12), u(12)], [W - m * 2 - u(12), H - m * 2 - u(12)], [u(12), H - m * 2 - u(12)], [u(12), u(12)]], u(60), false), { w: u(1), j: u(1.2), o: 0.4, seed: 4 }), [0, 0, W - m * 2, H - m * 2], W - m * 2, H - m * 2);
    fr.appendChild(fsvg);
    paintOn(b.tl, fsvg, 0.3, 1.4);
    var cs = u(PORT ? 140 : 120);
    [[m, m, ""], [W - m - cs, m, "scaleX(-1)"], [m, H - m - cs, "scaleY(-1)"], [W - m - cs, H - m - cs, "scale(-1,-1)"]].forEach(function (cq, i) {
      S.ornament("corner", { x: cq[0], y: cq[1], w: cs, flip: cq[2], seed: 60 + i * 7, parent: b.top }).paintOn(0.5 + i * 0.12, 1.4);
    });
    var box = LAND ? { x: W * 0.16, y: H * 0.16, w: W * 0.68, h: H * 0.54 } : PORT ? { x: W * 0.12, y: H * 0.16, w: W * 0.76, h: H * 0.54 } : { x: W * 0.13, y: H * 0.14, w: W * 0.74, h: H * 0.56 };
    var q = S.pageText(p.quote || "", { x: box.x, y: box.y, w: box.w, h: box.h, size: u(PORT ? 60 : LAND ? 60 : 52), italic: true, dropCap: "illuminated", align: "left" });
    var tex = washTex(C.honey, 44);
    if (q.drop && tex) q.drop.style.backgroundImage = "url(" + tex + ")";
    q.show(0.4, 1).speak(0.45, DUR() * 0.86);
    var fy = box.y + box.h + u(PORT ? 30 : 22);
    S.ornament("fleuron", { x: W * 0.34, y: fy, w: W * 0.32 }).paintOn(DUR() * 0.6, 1.2);
    if (str(p.author).trim()) {
      var a = S.label("— " + plain(p.author), { x: W * 0.15, y: fy + u(PORT ? 70 : 60), w: W * 0.7, size: u(PORT ? 34 : 32), align: "center", maxLines: 2 });
      b.tl.fromTo(a, { opacity: 0 }, { opacity: 1 }, { at: ct(DUR() * 0.75), dur: 0.9 });
    }
    var orn = str(p.ornament || "vines");
    if (orn === "stars") S.twinkles({ parent: b.fx, x: m * 2, y: m * 2, w: W - m * 4, h: H - m * 4, n: 12, seed: 5, color: C.honey });
    else if (orn === "leaves") S.leaves({ parent: b.fx, n: 7, seed: 6 });
  };

  // 10 ─ dream-sequence: night sky, a dreamer, a thought cloud where dreams paint themselves in
  T["dream-sequence"] = function (b, p) {
    S.pageTurn(0);
    var pt = S.painting({ location: "night-sky", x: 0, y: 0, w: W, h: H, bloom: 0.05, bloomDur: 1.6, edge: "soft" });
    var who = castOk(p.character) || "wren";
    var cxp, feet, chh, cloud, tb;
    if (LAND) { cxp = W * 0.17; chh = H * 0.62; cloud = { cx: W * 0.6, cy: H * 0.34, w: W * 0.5, h: H * 0.44 }; tb = { x: W * 0.36, y: H * 0.68, w: W * 0.56, h: H * 0.24 }; }
    else if (PORT) { cxp = W * 0.26; chh = H * 0.32; cloud = { cx: W * 0.55, cy: H * 0.24, w: W * 0.84, h: H * 0.3 }; tb = { x: W * 0.1, y: H * 0.46, w: W * 0.8, h: H * 0.16 }; }
    else { cxp = W * 0.17; chh = H * 0.5; cloud = { cx: W * 0.6, cy: H * 0.3, w: W * 0.66, h: H * 0.42 }; tb = { x: W * 0.36, y: H * 0.64, w: W * 0.58, h: H * 0.28 }; }
    feet = pt.ground(0.2);
    var A = S.character(who, { x: cxp, y: feet, height: chh, face: 1 });
    A.enter(0.4, "fade").talk(0.2, DUR()).pose(0.2, "wonder").look(0.2, 0.6, -1);
    var dreams = arr(p.dreams).filter(Boolean).slice(0, 3);
    if (!dreams.length) dreams = [{ object: "star" }];
    var times = keyTimes(dreams, ["object"], { start: 1.4, end: DUR() * 0.8, minGap: 0.6 });
    var ht = A.headTop();
    var cl = S.wash({ parent: b.mid, x: cloud.cx - cloud.w / 2, y: cloud.cy - cloud.h / 2, w: cloud.w, h: cloud.h, color: "#F6EEDC", shape: "cloud", alpha: 0.16, solid: 0.55, gran: 0, pencil: true, seed: 81 });
    cl.bloom(0.9, 1.2);
    for (var i = 0; i < 3; i++) {
      var q = (i + 1) / 4, px = lerp(ht.x + u(30), cloud.cx - cloud.w * 0.3, q), py = lerp(ht.y - u(10), cloud.cy + cloud.h * 0.42, q), pr = u(14 + i * 9);
      S.wash({ parent: b.mid, x: px - pr, y: py - pr, w: pr * 2, h: pr * 1.7, color: "#F6EEDC", shape: "oval", alpha: 0.2, solid: 0.6, gran: 0, pencil: true, seed: 90 + i, inner: false }).bloom(0.5 + i * 0.15, 0.6);
    }
    var nd = dreams.length, osz = Math.min(cloud.h * 0.62, (cloud.w * 0.8) / nd);
    dreams.forEach(function (d, k) {
      var ox = cloud.cx - (cloud.w * 0.8) / 2 + ((cloud.w * 0.8) / nd) * (k + 0.5);
      S.object(d.object || "star", { parent: b.front, x: ox, y: cloud.cy, size: osz }).paintOn(times[k] - 0.2, 1).bob(u(6), 1.1, k * 2);
    });
    var txt = S.pageText(p.text || "", { x: tb.x, y: tb.y, w: tb.w, h: tb.h, size: u(PORT ? 44 : 42), italic: true, align: PORT ? "center" : "left", color: "#F7EFDC", cls: "sb-nighttext" });
    txt.show(0.8, 1).speak(0.5, DUR() * 0.92, { dim: 0.3 });
  };

  // 11 ─ the-end: the moral of the story and a closing flourish
  T["the-end"] = function (b, p) {
    S.pageTurn(0, 1);
    var pr, mo, fl, cl;
    if (LAND) { pr = { x: W * 0.04, y: H * 0.1, w: W * 0.46, h: H * 0.8 }; mo = { x: W * 0.54, y: H * 0.14, w: W * 0.4, h: H * 0.36 }; fl = H * 0.53; cl = { x: W * 0.52, y: H * 0.58, w: W * 0.44, h: H * 0.22 }; }
    else if (PORT) { mo = { x: W * 0.1, y: H * 0.05, w: W * 0.8, h: H * 0.19 }; fl = H * 0.245; pr = { x: W * 0.02, y: H * 0.27, w: W * 0.96, h: H * 0.48 }; cl = { x: W * 0.06, y: H * 0.77, w: W * 0.88, h: H * 0.14 }; }
    else { mo = { x: W * 0.1, y: H * 0.04, w: W * 0.8, h: H * 0.17 }; fl = H * 0.215; pr = { x: W * 0.08, y: H * 0.25, w: W * 0.84, h: H * 0.5 }; cl = { x: W * 0.08, y: H * 0.77, w: W * 0.84, h: H * 0.15 }; }
    var pt = S.painting({ location: p.location || "meadow", time: p.time || "dusk", x: pr.x, y: pr.y, w: pr.w, h: pr.h, bloom: 0.2, bloomDur: 1.8 });
    var who = arr(p.characters).map(castOk).filter(Boolean).slice(0, 3);
    if (!who.length) who = ["wren"];
    var nW = who.length;
    who.forEach(function (n, i) {
      var cx = pr.x + pr.w * (nW === 1 ? 0.5 : 0.24 + (0.52 * i) / (nW - 1));
      var A = S.character(n, { x: cx, y: pt.ground(cx / W), height: pr.h * (nW > 2 ? 0.52 : 0.58), face: i < nW / 2 ? 1 : -1 });
      A.enter(0.6 + i * 0.25, "fade").gesture(Math.max(1.4, DUR() * 0.62) + i * 0.2, "wave", 2.2);
      if (i === 0) A.talk(0.2, DUR());
    });
    var m = S.pageText(p.moral || "", { x: mo.x, y: mo.y, w: mo.w, h: mo.h, size: u(PORT ? 46 : 44), italic: true, align: "center", valign: LAND ? "bottom" : "center" });
    m.show(0.5, 1).speak(0.4, DUR() * 0.72, { dim: 0.25 });
    S.ornament("fleuron", { x: LAND ? W * 0.59 : W * 0.32, y: fl, w: LAND ? W * 0.3 : W * 0.36 }).paintOn(1, 1.2);
    var close = el("div.sb-theend", { parent: b.text, text: plain(p.closing || "The End") });
    close.style.left = f1(cl.x) + "px"; close.style.top = f1(cl.y) + "px"; close.style.width = f1(cl.w) + "px"; close.style.height = f1(cl.h) + "px";
    close.style.fontSize = f1(u(PORT ? 120 : 112)) + "px";
    fitBox(close, { maxWidth: cl.w, maxHeight: cl.h, min: u(30) });
    var tex = washTex(C.terracotta, 77);
    if (tex) close.style.backgroundImage = "url(" + tex + ")";
    var tEnd = clamp(DUR() * 0.6, 1.4, Math.max(1.4, DUR() - 1.6));
    b.tl.fromTo(close, { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }, { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }, { at: ct(tEnd), dur: 1.4, ease: "inOutSine" });
    S.fireflies({ parent: b.fx, n: 10, seed: 3, y: H * 0.2, h: H * 0.7 });
  };

  // ───────────────────────── render / fallback / custom-mode entry ─────────────────────────
  function freshRoot(root) {
    root = root || V.root();
    root.innerHTML = "";
    root.className = "";
    root.removeAttribute("style");
    BOOK = null;
    TALKW = null;
    return root;
  }
  S.templateIds = Object.keys(T);
  S.storyTemplates = T;
  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = freshRoot(root);
    var b = newBook(root);
    fn(b, props || {});
    return root;
  };
  /** S.book(root, { turn = true }) → the page world { root, back, mid, cast, front, text, fx, top, tl }. Call first in custom scenes. */
  S.book = function (root, o) {
    o = o || {};
    root = root || V.root();
    var b = BOOK && BOOK.root === root ? BOOK : newBook(root, o);
    if (o.turn !== false && !b.turned) { S.pageTurn(0); b.turned = true; }
    return b;
  };
  /** Compatibility: the book page + a padded flex column (shared helpers like S.title / S.text work in it). */
  S.stage = function (root, opts) {
    opts = opts || {};
    var b = S.book(root || V.root(), { turn: opts.turn });
    var stage = el("div.v-stage.sb-stage", { parent: b.text });
    if (opts.align === "top") stage.classList.add("v-top");
    if (opts.cls) b.root.classList.add(opts.cls);
    return stage;
  };
  S.guard = function () {};

  /** Fallback: a storyteller in a painted place; the narration is set as book pages, inked as spoken. */
  S.fallback = function (root, narration) {
    try {
      root = freshRoot(root);
      var b = newBook(root);
      S.pageTurn(0);
      var sd = V.seed >>> 0;
      var loc = ["meadow", "forest", "village", "seaside", "cottage", "mountains"][sd % 6];
      var who = ["nana", "wren", "oli", "bramble", "rusty", "pippin"][sd % 6];
      var pr, tb;
      if (LAND) { pr = { x: W * 0.03, y: H * 0.04, w: W * 0.56, h: H * 0.92 }; tb = { x: W * 0.62, y: H * 0.14, w: W * 0.33, h: H * 0.72 }; }
      else if (PORT) { pr = { x: -W * 0.02, y: H * 0.025, w: W * 1.04, h: H * 0.58 }; tb = { x: W * 0.09, y: H * 0.64, w: W * 0.82, h: H * 0.29 }; }
      else { pr = { x: W * 0.02, y: H * 0.02, w: W * 0.96, h: H * 0.58 }; tb = { x: W * 0.08, y: H * 0.63, w: W * 0.84, h: H * 0.32 }; }
      var pt = S.painting({ location: loc, x: pr.x, y: pr.y, w: pr.w, h: pr.h, bloom: 0.1, edge: PORT ? "b" : "soft" });
      var A = S.character(who, { x: pr.x + pr.w * 0.42, y: pt.ground(0.42), height: pr.h * 0.62, face: 1 });
      A.enter(0.4, "fade").talk(0, DUR() + 1).look(0, 0.4);
      var toks = talkWords();
      var pages = [], cur = [], maxW = LAND ? 26 : PORT ? 22 : 18;
      toks.forEach(function (t, i) {
        cur.push(t);
        var endS = /[.!?;:]$/.test(t.word);
        if ((endS && cur.length >= maxW * 0.5) || cur.length >= maxW || i === toks.length - 1) { pages.push(cur); cur = []; }
      });
      pages = pages.slice(0, 60);
      pages.forEach(function (pg, pi) {
        var start = pg[0].start, end = pi + 1 < pages.length ? pages[pi + 1][0].start : DUR() + 1;
        var txt = S.pageText(pg.map(function (t) { return t.word; }).join(" "), { x: tb.x, y: tb.y, w: tb.w, h: tb.h, size: u(LAND ? 44 : PORT ? 52 : 42), dropCap: pi === 0 && LAND });
        b.tl.fromTo(txt.el, { opacity: 0 }, { opacity: 1 }, { at: ct(Math.max(0, start - 0.45)), dur: 0.45 });
        if (end < DUR()) b.tl.to(txt.el, { opacity: 0 }, { at: ct(end - 0.35), dur: 0.3 });
        txt.words.forEach(function (s, k) {
          var tk = txt.words.length === pg.length ? pg[k].start : start + k * 0.25;
          b.tl.fromTo(s, { opacity: 0.2 }, { opacity: 1 }, { at: ct(Math.max(0, tk - 0.05)), dur: 0.3 });
        });
        if (pi % 3 === 1) A.gesture(start + 0.2, ["present", "open", "think"][(pi / 3 | 0) % 3], 1.6);
      });
      folio(b, pageNo(), { x: LAND ? tb.x : 0, y: H * 0.935, w: LAND ? tb.w : W });
      return root;
    } catch (e) {
      V.error("fallback: " + (e && e.message));
      try {
        V.reset();
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "10%", fontSize: u(60) + "px", fontStyle: "italic", textAlign: "center", color: C.ink, background: C.paper, fontFamily: SERIF } });
        t.textContent = str(narration || V.narration).split(/\s+/).slice(0, 14).join(" ");
      } catch (e2) {}
    }
  };
})();
