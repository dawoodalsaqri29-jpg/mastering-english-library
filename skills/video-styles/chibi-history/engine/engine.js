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
/* Scene engine: chibi-history — "Chibi History".
 * Original soft 2D cartoon history channel: round-headed chibi archetypes (officer, soldier, sailor,
 * pilot, diplomat, general, civilian, nurse, historian) in generic national uniforms, real flags,
 * a stylised Europe map with fronts / arrows / targets, letters that never get a reply, split-screen
 * "two sides" framing, chunky thumbnail lettering and date tags.
 * Pure function of time: all DOM/SVG is built once; V.onFrame(t) updates transforms/attributes.
 * No likenesses of real people — archetypes are defined only by uniform, hat and colours.
 */
(function () {
  "use strict";
  var V = window.V;
  var S = (window.SceneStyle = window.SceneStyle || {});
  var el = V.el;
  var SVGNS = "http://www.w3.org/2000/svg";

  S.init({
    id: "chibi-history",
    kind: "minimal",
    enter: "pop",
    titleReveal: "mask",
    drift: 0,
    series: ["#D7263D", "#2F5BB7", "#F2B134", "#3A9D5D", "#7A4E9E", "#E07A2F"],
  });

  // ───────────────────────── utils ─────────────────────────
  var INK = "#2B2A33", PAPER = "#F3EAD6", RED = "#D7263D", BLUE = "#2F5BB7", GOLD = "#F2B134", CREAM = "#FFF6E3", SKYC = "#BFE3F5", MUTED = "#6B6878";
  var LW = 5; // character outline weight (character units)
  var PI = Math.PI, D2R = PI / 180;
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function num(v, d) { v = Number(v); return isFinite(v) ? v : d; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function sm(p) { p = clamp(p, 0, 1); return p * p * (3 - 2 * p); }
  function fx(n) { return Math.round(n * 10) / 10; }
  function hash01(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function noise(x, seed) {
    var i = Math.floor(x), f = x - i;
    var a = hash01(i * 1.7 + (seed || 0) * 13.13), b = hash01((i + 1) * 1.7 + (seed || 0) * 13.13);
    return (lerp(a, b, f * f * (3 - 2 * f)) - 0.5) * 2;
  }
  function svgEl(tag, attrs, parent) {
    var n = document.createElementNS(SVGNS, tag);
    if (attrs) for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function g(parent, attrs) { return svgEl("g", attrs, parent); }
  function plain(t) { return str(t).replace(/\*([^*]+)\*/g, "$1"); }
  function u(n) { return n * V.unit; }
  function D() { return V.duration; }
  function lastT() { return Math.max(0.05, V.duration - 0.05); }
  function clampT(t) { return clamp(num(t, 0), 0, lastT()); }
  function hex2rgb(hex) {
    var h = str(hex).replace("#", "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16);
    if (isNaN(n)) return [128, 128, 128];
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function rgb2hex(r, gg, b) { return "#" + ((1 << 24) | (Math.round(r) << 16) | (Math.round(gg) << 8) | Math.round(b)).toString(16).slice(1); }
  function mix(a, b, p) { var x = hex2rgb(a), y = hex2rgb(b); return rgb2hex(lerp(x[0], y[0], p), lerp(x[1], y[1], p), lerp(x[2], y[2], p)); }
  function shade(hex, amt) { return amt < 0 ? mix(hex, "#000000", -amt) : mix(hex, "#FFFFFF", amt); }
  function rgba(hex, a) { var c = hex2rgb(hex); return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")"; }
  function setA(n, k, v) {
    var c = n._c || (n._c = {});
    if (c[k] === v) return;
    c[k] = v;
    n.setAttribute(k, v);
  }
  function setD(n, v) { setA(n, "display", v ? "inline" : "none"); }
  function setS(n, k, v) {
    var c = n._s || (n._s = {});
    if (c[k] === v) return;
    c[k] = v;
    n.style[k] = v;
  }
  var uid = 0;
  function nid(p) { uid++; return "ch" + (p || "") + uid + "_" + (V.seed || 0); }
  function P2(x, y) { return fx(x) + "," + fx(y); }
  function R(x, y, w, h, fill, extra) { return '<rect x="' + fx(x) + '" y="' + fx(y) + '" width="' + fx(Math.max(0, w)) + '" height="' + fx(Math.max(0, h)) + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function C(cx, cy, r, fill, extra) { return '<circle cx="' + fx(cx) + '" cy="' + fx(cy) + '" r="' + fx(r) + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function El(cx, cy, rx, ry, fill, extra) { return '<ellipse cx="' + fx(cx) + '" cy="' + fx(cy) + '" rx="' + fx(rx) + '" ry="' + fx(ry) + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function Pa(d, fill, extra) { return '<path d="' + d + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function inkA(w) { return ' stroke="' + INK + '" stroke-width="' + fx(w || LW) + '" stroke-linejoin="round" stroke-linecap="round"'; }

  var EASE = {
    pop: function (p) { p = clamp(p, 0, 1); var q = p - 1, s = 1.7; return q * q * ((s + 1) * q + s) + 1; },
    boing: function (p) { p = clamp(p, 0, 1); var q = p - 1, s = 2.6; return q * q * ((s + 1) * q + s) + 1; },
    whip: function (p) { p = clamp(p, 0, 1); return 1 - Math.pow(1 - p, 4); },
    smear: function (p) { p = clamp(p, 0, 1); return p < 0.5 ? 16 * p * p * p * p * p : 1 - Math.pow(-2 * p + 2, 5) / 2; },
  };
  function easeFn(e) {
    if (typeof e === "function") return e;
    if (EASE[e]) return EASE[e];
    if (e && V.ease[e]) return V.ease[e];
    return V.ease.inOutCubic;
  }
  S.chibiEase = EASE;

  // ───────────────────────── word timing ─────────────────────────
  function words() { return V.words || []; }
  function normW(w) { return str(w).toLowerCase().replace(/[^\p{L}\p{N}']+/gu, ""); }
  function syncAt(word, after, fallback, lead) {
    if (word) {
      var t = V.find(str(word), after || 0);
      if (t != null) return clampT(t - (lead == null ? 0.12 : lead));
    }
    return clampT(fallback);
  }
  function findLine(text, after) {
    var ws = plain(text).split(/\s+/).map(normW).filter(Boolean);
    var W = words();
    if (!ws.length || !W.length) return null;
    var s = V.find(ws.slice(0, Math.min(3, ws.length)).join(" "), after);
    if (s == null && ws.length > 1) s = V.find(ws[0] + " " + ws[1], after);
    if (s == null) s = V.find(ws[0], after);
    if (s == null) return null;
    var idx = -1;
    for (var i = 0; i < W.length; i++) if (W[i].start >= s - 1e-3) { idx = i; break; }
    if (idx < 0) return null;
    var endIdx = Math.min(W.length - 1, idx + ws.length - 1);
    var last = ws[ws.length - 1];
    for (var j = idx + ws.length - 1; j >= idx && j < Math.min(W.length, idx + ws.length + 3); j++) if (normW(W[j].word) === last) { endIdx = j; break; }
    return { start: W[idx].start, end: W[endIdx].end, found: true };
  }
  /** timing windows [{start,end,found}] for ordered lines of narration text */
  function lineWindows(lines, opts) {
    opts = opts || {};
    var Dd = D();
    var t0 = opts.start != null ? opts.start : Math.min(0.4, Dd * 0.08);
    var t1 = opts.end != null ? opts.end : Math.max(t0 + 0.5, Dd - Math.min(0.5, Dd * 0.08));
    var n = lines.length, out = new Array(n), after = 0;
    for (var i = 0; i < n; i++) {
      var w = findLine(lines[i], after);
      if (w && w.end > w.start) { out[i] = w; after = w.end - 0.01; }
    }
    var lens = lines.map(function (l) { return Math.max(1, plain(l).split(/\s+/).filter(Boolean).length); });
    var i0 = 0;
    while (i0 < n) {
      if (out[i0]) { i0++; continue; }
      var j = i0;
      while (j < n && !out[j]) j++;
      var a = i0 > 0 ? out[i0 - 1].end + 0.2 : t0;
      var b = j < n ? out[j].start - 0.2 : t1;
      if (b - a < 0.5 * (j - i0)) b = a + 0.9 * (j - i0);
      var tot = 0, k;
      for (k = i0; k < j; k++) tot += lens[k] + 1.2;
      var cur = a;
      for (k = i0; k < j; k++) {
        var len = ((b - a) * (lens[k] + 1.2)) / tot;
        out[k] = { start: cur, end: cur + len * 0.85, found: false };
        cur += len;
      }
      i0 = j;
    }
    for (i = 0; i < n; i++) {
      out[i].start = clamp(out[i].start, 0, Math.max(0, Dd - 0.3));
      out[i].end = clamp(Math.max(out[i].end, out[i].start + 0.3), 0, Dd);
    }
    return out;
  }
  /** narration phrases in [from,to]: [{s,e,text,words}] */
  function phrases(from, to, maxWords) {
    var W = words(), out = [], cur = null;
    from = from == null ? 0 : from; to = to == null ? D() : to;
    maxWords = maxWords || 7;
    for (var i = 0; i < W.length; i++) {
      var w = W[i];
      if (w.start < from - 0.01 || w.start > to) continue;
      if (cur && (w.start - cur.e > 0.35 || cur.n >= maxWords)) { out.push(cur); cur = null; }
      if (!cur) cur = { s: w.start, e: w.end, text: "", n: 0, words: [] };
      cur.text += (cur.n ? " " : "") + w.word;
      cur.words.push(w);
      cur.e = w.end; cur.n++;
      if (/[.!?;:]$/.test(w.word)) { out.push(cur); cur = null; }
    }
    if (cur) out.push(cur);
    return out;
  }
  function syllables(word) {
    var w = str(word).toLowerCase().replace(/[^a-zà-ɏ]/g, "");
    var m = w.match(/[aeiouyàáâäãåèéêëìíîïòóôöõùúûü]+/g);
    return Math.max(1, Math.min(5, m ? m.length : 1));
  }
  S.lines = lineWindows;
  S.syncAt = syncAt;
  S.phrases = phrases;

  // ───────────────────────── nations (flags + uniform colours) ─────────────────────────
  // Flags of real countries are allowed and are a key visual. Uniform colours are generic period palettes.
  var NATIONS = {
    germany: { name: "Germany", uni: "#6F7A68", uniD: "#4E5747", cap: "#5E6858", band: "#2C332A", helmet: "#5B625A", flag: { kind: "h3", c: ["#111111", "#DD0000", "#FFCE00"] }, accent: "#444A44" },
    britain: { name: "Britain", uni: "#8A7D4E", uniD: "#665C36", cap: "#7A6E42", band: "#3E3822", helmet: "#6E6A48", helmetKind: "brodie", flag: { kind: "uk" }, accent: "#C8102E" },
    usa: { name: "USA", uni: "#6B6F46", uniD: "#4C4F30", cap: "#5E6240", band: "#2F3120", helmet: "#5F6342", flag: { kind: "usa" }, accent: "#3C3B6E" },
    ussr: { name: "USSR", uni: "#7B6A3F", uniD: "#574A2B", cap: "#6B5C36", band: "#B5121B", helmet: "#6E6440", flag: { kind: "ussr" }, accent: "#CC0000" },
    france: { name: "France", uni: "#7D8FB0", uniD: "#56688A", cap: "#B5121B", band: "#2E3E6A", helmet: "#6C7C9E", helmetKind: "adrian", flag: { kind: "v3", c: ["#0055A4", "#FFFFFF", "#EF4135"] }, accent: "#0055A4" },
    italy: { name: "Italy", uni: "#7E8A6C", uniD: "#59644A", cap: "#6E7A5E", band: "#3A4232", helmet: "#6D7860", flag: { kind: "v3", c: ["#009246", "#FFFFFF", "#CE2B37"] }, accent: "#009246" },
    japan: { name: "Japan", uni: "#8B7A4E", uniD: "#625536", cap: "#7A6B44", band: "#B5121B", helmet: "#7A6E48", flag: { kind: "disc" }, accent: "#BC002D" },
    switzerland: { name: "Switzerland", uni: "#5E6B7A", uniD: "#434D5A", cap: "#515D6B", band: "#2A3139", helmet: "#55606D", flag: { kind: "swiss" }, accent: "#DA291C" },
    sweden: { name: "Sweden", uni: "#5F6C86", uniD: "#434D62", cap: "#54607A", band: "#2B3140", helmet: "#56627A", flag: { kind: "cross", bg: "#006AA7", cross: "#FECC02" }, accent: "#006AA7" },
    poland: { name: "Poland", uni: "#7A7560", uniD: "#575342", cap: "#6A6552", band: "#2E2C24", helmet: "#6A6552", flag: { kind: "h2", c: ["#FFFFFF", "#DC143C"] }, accent: "#DC143C" },
    austria: { name: "Austria", uni: "#7C8078", uniD: "#575A54", cap: "#6C706A", band: "#2E302C", helmet: "#6A6E66", flag: { kind: "h3", c: ["#ED2939", "#FFFFFF", "#ED2939"] }, accent: "#ED2939" },
    finland: { name: "Finland", uni: "#6E7678", uniD: "#4C5355", cap: "#5F6769", band: "#2A2F30", helmet: "#60686A", flag: { kind: "cross", bg: "#FFFFFF", cross: "#003580" }, accent: "#003580" },
    netherlands: { name: "Netherlands", uni: "#6F7F6A", uniD: "#4E5A4A", cap: "#607060", band: "#2C332A", helmet: "#5E6E5A", flag: { kind: "h3", c: ["#AE1C28", "#FFFFFF", "#21468B"] }, accent: "#FF7A00" },
    belgium: { name: "Belgium", uni: "#7A8370", uniD: "#575E4E", cap: "#6A7360", band: "#2C302A", helmet: "#6A7360", flag: { kind: "v3", c: ["#111111", "#FAE042", "#ED2939"] }, accent: "#ED2939" },
    spain: { name: "Spain", uni: "#8B8260", uniD: "#625B40", cap: "#7A7252", band: "#3A3626", helmet: "#746C50", flag: { kind: "h3", c: ["#AA151B", "#F1BF00", "#AA151B"], w: [0.25, 0.5, 0.25] }, accent: "#AA151B" },
    norway: { name: "Norway", uni: "#66707C", uniD: "#474F59", cap: "#59636E", band: "#282D33", helmet: "#59636E", flag: { kind: "cross", bg: "#BA0C2F", cross: "#FFFFFF", inner: "#00205B" }, accent: "#BA0C2F" },
    neutral: { name: "Neutral", uni: "#8A8A8A", uniD: "#616161", cap: "#7A7A7A", band: "#3A3A3A", helmet: "#777777", flag: { kind: "white" }, accent: "#8A8A8A" },
  };
  var NATION_ALIASES = { german: "germany", reich: "germany", wehrmacht: "germany", uk: "britain", british: "britain", england: "britain", "great-britain": "britain", "united-kingdom": "britain", america: "usa", american: "usa", "united-states": "usa", us: "usa", soviet: "ussr", russia: "ussr", russian: "ussr", soviets: "ussr", french: "france", italian: "italy", japanese: "japan", swiss: "switzerland", swedish: "sweden", polish: "poland", austrian: "austria", finnish: "finland", dutch: "netherlands", holland: "netherlands", belgian: "belgium", spanish: "spain", norwegian: "norway", none: "neutral", unknown: "neutral" };
  function nationId(n) { n = str(n).toLowerCase().trim().replace(/\s+/g, "-"); if (NATIONS[n]) return n; return NATION_ALIASES[n] || "neutral"; }
  S.NATIONS = NATIONS;
  S.nationId = nationId;

  /** SVG markup of a flag's face inside 0..w × 0..h */
  function flagArt(nation, w, h) {
    var N = NATIONS[nationId(nation)], f = N.flag, s = "", i, n;
    switch (f.kind) {
      case "h3": {
        var ws = f.w || [1 / 3, 1 / 3, 1 / 3], y = 0;
        for (i = 0; i < 3; i++) { s += R(0, y, w, h * ws[i] + 0.6, f.c[i]); y += h * ws[i]; }
        break;
      }
      case "h2": s += R(0, 0, w, h / 2 + 0.6, f.c[0]) + R(0, h / 2, w, h / 2, f.c[1]); break;
      case "v3": for (i = 0; i < 3; i++) s += R((w * i) / 3, 0, w / 3 + 0.6, h, f.c[i]); break;
      case "cross": {
        s += R(0, 0, w, h, f.bg);
        var cx = w * 0.36, cw = h * 0.16;
        s += R(cx - cw / 2, 0, cw, h, f.cross) + R(0, h / 2 - cw / 2, w, cw, f.cross);
        if (f.inner) s += R(cx - cw / 4, 0, cw / 2, h, f.inner) + R(0, h / 2 - cw / 4, w, cw / 2, f.inner);
        break;
      }
      case "disc": s += R(0, 0, w, h, "#FFFFFF") + C(w / 2, h / 2, h * 0.3, "#BC002D"); break;
      case "swiss": {
        s += R(0, 0, w, h, "#DA291C");
        var a = Math.min(w, h) * 0.62, t = a * 0.3, mx = w / 2, my = h / 2;
        s += R(mx - t / 2, my - a / 2, t, a, "#FFFFFF") + R(mx - a / 2, my - t / 2, a, t, "#FFFFFF");
        break;
      }
      case "uk": {
        s += R(0, 0, w, h, "#012169");
        var sw = h * 0.2;
        s += '<path d="M0,0 L' + fx(w) + "," + fx(h) + " M" + fx(w) + ",0 L0," + fx(h) + '" stroke="#FFFFFF" stroke-width="' + fx(sw) + '"/>';
        s += '<path d="M0,0 L' + fx(w) + "," + fx(h) + " M" + fx(w) + ",0 L0," + fx(h) + '" stroke="#C8102E" stroke-width="' + fx(sw * 0.34) + '"/>';
        s += R(w / 2 - sw * 0.85, 0, sw * 1.7, h, "#FFFFFF") + R(0, h / 2 - sw * 0.85, w, sw * 1.7, "#FFFFFF");
        s += R(w / 2 - sw * 0.5, 0, sw, h, "#C8102E") + R(0, h / 2 - sw * 0.5, w, sw, "#C8102E");
        break;
      }
      case "usa": {
        n = 13;
        for (i = 0; i < n; i++) s += R(0, (h * i) / n, w, h / n + 0.6, i % 2 ? "#FFFFFF" : "#B22234");
        var cw2 = w * 0.42, ch2 = h * (7 / 13);
        s += R(0, 0, cw2, ch2, "#3C3B6E");
        for (var r = 0; r < 5; r++) for (var c = 0; c < 6; c++) s += C(cw2 * (0.12 + c * 0.152), ch2 * (0.14 + r * 0.18), Math.min(w, h) * 0.028, "#FFFFFF");
        break;
      }
      case "ussr": {
        s += R(0, 0, w, h, "#CC0000");
        var sx = w * 0.2, sy = h * 0.22, sr = h * 0.08;
        s += Pa(starD(sx, sy, sr), "#FFD700");
        // simplified hammer and sickle
        var hx = w * 0.19, hy = h * 0.5, hr = h * 0.17;
        s += '<path d="M' + P2(hx + hr * 0.2, hy - hr) + " A" + fx(hr) + "," + fx(hr) + " 0 1 0 " + P2(hx + hr * 0.9, hy + hr * 0.55) + '" fill="none" stroke="#FFD700" stroke-width="' + fx(hr * 0.26) + '" stroke-linecap="round"/>';
        s += '<path d="M' + P2(hx - hr * 0.7, hy + hr * 0.75) + " L" + P2(hx + hr * 0.35, hy - hr * 0.35) + '" stroke="#FFD700" stroke-width="' + fx(hr * 0.26) + '" stroke-linecap="round"/>';
        s += '<path d="M' + P2(hx + hr * 0.1, hy - hr * 0.75) + " L" + P2(hx + hr * 0.7, hy - hr * 0.15) + '" stroke="#FFD700" stroke-width="' + fx(hr * 0.42) + '" stroke-linecap="round"/>';
        break;
      }
      default: s += R(0, 0, w, h, "#FFFFFF");
    }
    return s;
  }
  function starD(cx, cy, r) {
    var d = "";
    for (var i = 0; i < 10; i++) {
      var a = -PI / 2 + (i * PI) / 5, rr = i % 2 ? r * 0.42 : r;
      d += (i ? " L" : "M") + P2(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
    }
    return d + "Z";
  }
  S.flagArt = flagArt;

  // ───────────────────────── roles (uniform / hat archetypes) ─────────────────────────
  var ROLES = {
    officer: { name: "Officer", hat: "peaked", desc: "field officer — peaked cap, belted tunic, shoulder boards" },
    general: { name: "General", hat: "peaked", braid: true, medals: true, desc: "general — gold-braid peaked cap, red band, medals" },
    soldier: { name: "Soldier", hat: "helmet", desc: "infantry soldier — steel helmet, plain tunic, pack straps" },
    sailor: { name: "Sailor", hat: "sailor", desc: "navy sailor — white cap with ribbon, blue collar flap" },
    pilot: { name: "Pilot", hat: "pilot", desc: "pilot — leather flying cap, goggles on forehead, fur-collar jacket" },
    diplomat: { name: "Diplomat", hat: "none", glasses: true, desc: "diplomat — dark suit, white shirt, tie, round spectacles" },
    civilian: { name: "Civilian", hat: "flatcap", desc: "civilian — flat cap, brown jacket over a vest" },
    nurse: { name: "Nurse", hat: "nurse", desc: "nurse — white cap with red cross, white apron over a blue dress" },
    historian: { name: "Historian", hat: "none", glasses: true, bowtie: true, desc: "host / historian — tweed jacket, bow tie, round glasses (no nation)" },
  };
  var ROLE_ALIASES = { commander: "officer", captain: "officer", lieutenant: "officer", colonel: "officer", staff: "officer", marshal: "general", fieldmarshal: "general", admiral: "general", infantry: "soldier", trooper: "soldier", private: "soldier", grunt: "soldier", tommy: "soldier", navy: "sailor", seaman: "sailor", airman: "pilot", ace: "pilot", flyer: "pilot", ambassador: "diplomat", minister: "diplomat", envoy: "diplomat", politician: "diplomat", banker: "diplomat", worker: "civilian", farmer: "civilian", citizen: "civilian", refugee: "civilian", villager: "civilian", medic: "nurse", doctor: "nurse", narrator: "historian", host: "historian", professor: "historian", teacher: "historian" };
  function roleId(n) { n = str(n).toLowerCase().trim().replace(/[\s_]+/g, ""); if (ROLES[n]) return n; return ROLE_ALIASES[n] || "soldier"; }
  S.ROLES = ROLES;
  S.roleId = roleId;
  S.cast = Object.keys(ROLES);
  S.castInfo = function () { var o = {}; S.cast.forEach(function (k) { o[k] = ROLES[k].desc; }); return o; };
  var HAIRS = ["#5A3A22", "#2B2320", "#8C5A2B", "#C98A3B", "#3E2A1E", "#6E4A2F", "#A8A09A"];
  var SKINS = ["#FFE0C4", "#F8D3B4", "#F2C9A6", "#E9B98E", "#D9A06E"];

  // ───────────────────────── expressions ─────────────────────────
  // eyes: bean | happy | closed | shock | spin | cross | wide ; lid 0..1 (half-closed), by brow raise, ba brow angle (+ worried, − angry)
  var EBASE = { eyes: "bean", lid: 0, by: 0, ba: 0, bs: 0, mouth: "smile", mo: 0, blush: 0.6, marks: [], tilt: 0, look: null, eyeS: 1 };
  var EXPR = {
    neutral: { mouth: "line" },
    smile: { mouth: "smile", by: -1 },
    happy: { eyes: "happy", by: -6, ba: 0.2, mouth: "open", mo: 0.5, blush: 0.9, tilt: 3 },
    excited: { eyes: "wide", by: -9, ba: 0.2, mouth: "open", mo: 0.7, blush: 0.9, marks: ["sparkle"], eyeS: 1.1 },
    proud: { lid: 0.25, by: -2, ba: -0.2, mouth: "smile", blush: 0.7, tilt: -3 },
    smug: { lid: 0.45, by: 0, ba: -0.15, bs: 1, mouth: "smirk", blush: 0.6 },
    worried: { by: -4, ba: 0.8, mouth: "wobbly", marks: ["sweat"], blush: 0.5, look: [0.4, 0] },
    nervous: { by: -5, ba: 0.9, mouth: "wobbly", marks: ["sweat", "sweat2"], blush: 0.5, look: [-0.4, 0.2] },
    angry: { lid: 0.2, by: 6, ba: -1, mouth: "shout", mo: 0.35, marks: ["anger"], blush: 0.3 },
    furious: { lid: 0.25, by: 8, ba: -1, mouth: "shout", mo: 0.7, marks: ["anger", "steam"], blush: 0.2, eyeS: 1.05 },
    shocked: { eyes: "shock", by: -14, ba: 0.3, mouth: "o", mo: 1, marks: ["bang"], blush: 0.1, tilt: -2 },
    surprised: { eyes: "wide", by: -12, ba: 0.3, mouth: "o", mo: 0.6, marks: ["bang"], blush: 0.3 },
    sad: { by: -3, ba: 1, mouth: "frown", marks: ["tears"], blush: 0.3, look: [0, 0.5], tilt: 2 },
    gloomy: { lid: 0.3, by: -2, ba: 0.9, mouth: "frown", marks: ["gloom"], blush: 0.2, look: [0, 0.4], tilt: 3 },
    confused: { by: -6, ba: 0.4, bs: 1, mouth: "hmm", marks: ["question"], look: [0.6, -0.4] },
    thinking: { lid: 0.15, by: -3, ba: 0.1, bs: 1, mouth: "hmm", look: [0.6, -0.6] },
    determined: { lid: 0.12, by: 4, ba: -0.8, mouth: "grit", blush: 0.4 },
    serious: { lid: 0.12, by: 2, ba: -0.4, mouth: "line", blush: 0.3 },
    scared: { eyes: "wide", by: -10, ba: 0.9, mouth: "wail", mo: 0.6, marks: ["sweat", "sweat2"], blush: 0.2, eyeS: 1.05 },
    dizzy: { eyes: "spin", by: -4, ba: 0.6, mouth: "wobbly", marks: ["stars"], tilt: 6 },
    tired: { lid: 0.55, by: -2, ba: 0.5, mouth: "line", marks: ["zzz"], blush: 0.3 },
    sleepy: { eyes: "closed", by: 2, mouth: "o", mo: 0.15, marks: ["zzz"] },
    calm: { lid: 0.3, mouth: "smile", blush: 0.4 },
    embarrassed: { by: -4, ba: 0.6, mouth: "wobbly", blush: 1, marks: ["sweat"], look: [-0.5, 0.3] },
  };
  var EXPR_ALIASES = { joy: "happy", glad: "happy", laugh: "happy", cheer: "happy", grin: "happy", hype: "excited", wow: "surprised", amazed: "surprised", shock: "shocked", stunned: "shocked", sweat: "worried", anxious: "nervous", awkward: "nervous", panic: "scared", afraid: "scared", fear: "scared", mad: "angry", rage: "furious", cry: "sad", crying: "sad", upset: "sad", depressed: "gloomy", down: "gloomy", puzzled: "confused", question: "confused", why: "confused", think: "thinking", curious: "thinking", focused: "determined", resolve: "determined", stern: "serious", cool: "calm", confident: "proud", exhausted: "tired", blush: "embarrassed", shy: "embarrassed", dazed: "dizzy" };
  function exprName(n) { n = str(n).toLowerCase().trim(); if (EXPR[n]) return n; return EXPR_ALIASES[n] || "neutral"; }
  function E(name) { var e = {}, src = EXPR[exprName(name)] || {}; for (var k in EBASE) e[k] = src[k] != null ? src[k] : EBASE[k]; return e; }
  S.EXPRESSIONS = EXPR;
  S.expressions = Object.keys(EXPR);

  // ───────────────────────── gestures (stubby arm angles, deg from straight down, + = outward/up) ─────────────────────────
  // [L, R, Lhand, Rhand] hand kinds: open | fist | point | salute | palm
  var GEST = {
    rest: [12, 12, "open", "open"],
    point: [12, 100, "open", "point"],
    "point-up": [12, 165, "open", "point"],
    "point-left": [100, 12, "point", "open"],
    "point-down": [12, 50, "open", "point"],
    salute: [12, 150, "open", "salute"],
    shrug: [75, 75, "palm", "palm"],
    "arms-up": [165, 165, "open", "open"],
    cheer: [160, 160, "fist", "fist"],
    fist: [12, 120, "open", "fist"],
    "fist-up": [12, 165, "open", "fist"],
    facepalm: [12, 168, "open", "palm"],
    think: [12, 140, "open", "fist"],
    hold: [12, 85, "open", "fist"],
    "hold-up": [12, 120, "open", "fist"],
    "hold-both": [70, 70, "fist", "fist"],
    wave: [12, 155, "open", "open"],
    present: [60, 60, "palm", "palm"],
    cross: [38, 38, "fist", "fist"],
    hips: [45, 45, "fist", "fist"],
    stop: [12, 95, "open", "palm"],
    "hands-head": [160, 160, "palm", "palm"],
    binoculars: [120, 120, "fist", "fist"],
    march: [25, 25, "fist", "fist"],
  };
  var GEST_ALIASES = { idle: "rest", none: "rest", pointing: "point", "point-right": "point", up: "point-up", "raise": "fist-up", pump: "fist", determined: "fist", "hands-up": "arms-up", celebrate: "cheer", yay: "cheer", victory: "cheer", dunno: "shrug", "what": "shrug", "hands-on-hips": "hips", "arms-crossed": "cross", crossed: "cross", explain: "present", "open-palm": "present", welcome: "present", chin: "think", thinking: "think", hello: "wave", hi: "wave", halt: "stop", "hands-on-head": "hands-head", panic: "hands-head", look: "binoculars", scan: "binoculars", carry: "hold", letter: "hold", paper: "hold", "hold-letter": "hold-up" };
  function gestName(n) { n = str(n).toLowerCase().trim(); if (GEST[n]) return n; return GEST_ALIASES[n] || "rest"; }
  S.GESTURES = GEST;
  S.gestures = Object.keys(GEST);

  // ───────────────────────── props held in a hand (prop units: wrist at origin) ─────────────────────────
  var PROPS = {
    letter: function () { return R(-34, -24, 68, 48, "#FFFBEF", inkA(3.2)) + '<path d="M-34,-24 L0,4 L34,-24" fill="none"' + inkA(3) + "/>" + C(0, 2, 7, RED); },
    telegram: function () { return R(-40, -26, 80, 52, "#F7E7B3", inkA(3.2)) + '<path d="M-28,-10 L-2,-10 M-28,0 L18,0 M-28,10 L8,10" fill="none"' + inkA(3) + "/>" + R(14, -20, 20, 8, RED); },
    map: function () { return Pa("M-44,-30 L-14,-22 L14,-30 L44,-22 L44,30 L14,22 L-14,30 L-44,22 Z", "#F1E3C0", inkA(3.2)) + '<path d="M-14,-22 L-14,30 M14,-30 L14,22" fill="none"' + inkA(2.4) + ' opacity=".5"/>' + Pa("M-30,-6 L-18,8 L-2,-2 L18,10 L32,0", "none", ' stroke="' + RED + '" stroke-width="3" stroke-dasharray="5 4"'); },
    binoculars: function () { return R(-34, -14, 26, 36, INK, ' rx="7"') + R(8, -14, 26, 36, INK, ' rx="7"') + R(-10, -8, 20, 14, "#3A3A44") + C(-21, 20, 11, "#2B4C7E", inkA(3)) + C(21, 20, 11, "#2B4C7E", inkA(3)); },
    phone: function () { return Pa("M-28,-30 C-36,-30 -36,-14 -28,-14 L-14,-14 L-8,20 L8,20 L14,-14 L28,-14 C36,-14 36,-30 28,-30 Z", INK) + R(-16, 18, 32, 14, INK, ' rx="6"'); },
    flag: function (nation) { return '<path d="M0,-70 L0,30" ' + inkA(5) + "/>" + '<g transform="translate(3,-68)">' + flagArt(nation || "neutral", 70, 44) + '<rect width="70" height="44" fill="none"' + inkA(3) + "/></g>"; },
    pointer: function () { return '<path d="M-40,-30 L34,26"' + inkA(7) + "/>" + C(36, 28, 6, RED, inkA(2.5)); },
    mug: function () { return R(-18, -20, 36, 40, "#FFFFFF", inkA(3.2) + ' rx="6"') + '<path d="M18,-8 C34,-8 34,16 18,16" fill="none"' + inkA(3.2) + "/>" + '<path d="M-6,-32 Q-2,-40 2,-32 M6,-34 Q10,-42 14,-34" fill="none" stroke="#9A9A9A" stroke-width="3" stroke-linecap="round"/>'; },
    hat: function () { return ""; },
    sign: function (text) { return '<path d="M0,-10 L0,60"' + inkA(6) + "/>" + R(-70, -58, 140, 56, "#FFFFFF", inkA(4) + ' rx="6"') + '<text x="0" y="-18" text-anchor="middle" font-size="30" font-weight="900" fill="' + INK + '" font-family="Arial Black, Arial, sans-serif">' + str(text).replace(/[<>&]/g, "").slice(0, 10) + "</text>"; },
  };
  S.PROPS = Object.keys(PROPS);

  // ───────────────────────── Actor (chibi character) ─────────────────────────
  // Character-local units: origin = centre of the head (r = 100), y down. Body hangs below: shoulders
  // y ≈ 112, belt y ≈ 170, feet y ≈ 278. Hats are oversized and sit on top (y −135 … −40).
  var SHX = 58, SHY = 112, ARM = 78, FEET = 278;
  function facingVal(f, d) {
    if (f == null || f === "") return d;
    if (typeof f === "number") return clamp(f, -1, 1);
    var s = str(f).toLowerCase();
    return s === "left" ? -0.6 : s === "right" ? 0.6 : s === "front" || s === "camera" ? 0 : clamp(num(f, d), -1, 1);
  }
  var actorN = 0;
  function Actor(shot, spec, opts) {
    opts = opts || {};
    if (typeof spec === "string") spec = parseSpec(spec);
    spec = spec || {};
    this.shot = shot;
    this.role = roleId(spec.role || opts.role || "soldier");
    this.nation = nationId(spec.nation || opts.nation || (this.role === "historian" ? "neutral" : "neutral"));
    this.R = ROLES[this.role];
    this.N = NATIONS[this.nation];
    this.n = actorN++;
    this.seed = (S.hash(this.role + ":" + this.nation + ":" + (spec.variant || opts.variant || 0)) % 997) + this.n * 7;
    var vr = V.makeRand(this.seed * 13 + 1);
    this.hair = spec.hair || opts.hair || HAIRS[Math.floor(vr() * HAIRS.length)];
    this.skin = spec.skin || opts.skin || SKINS[Math.floor(vr() * SKINS.length)];
    this.x0 = num(opts.x, shot.Ww / 2);
    this.y0 = num(opts.y, 470);
    this.s = num(opts.scale, 1.3);
    this.mirror = !!opts.mirror;
    this.exprs = [{ t: -1, name: exprName(opts.expression || spec.expression || "smile") }];
    this.gests = [{ t: -1, name: gestName(opts.gesture || spec.gesture || "rest"), dur: 0.01 }];
    this.turns = [{ t: -1, v: facingVal(opts.facing, 0), dur: 0.01 }];
    this.looks = []; this.talks = []; this.moves = []; this.hops = []; this.shakes = []; this.vis = []; this.props = []; this.walks = []; this.hatOff = [];
    this.propName = opts.prop || spec.prop || null;
    this.propArg = opts.propArg || opts.nation || this.nation;
    this.dirty = true;
    this.parent = opts.parent || shot.chars;
    this.build();
    shot.actors.push(this);
  }
  S.Actor = Actor;
  var AP = Actor.prototype;
  /** "germany officer", "officer:germany", "british soldier" → { role, nation } */
  function parseSpec(s) {
    var parts = str(s).toLowerCase().split(/[\s:/,-]+/).filter(Boolean), out = {};
    parts.forEach(function (p) {
      if (ROLES[p] || ROLE_ALIASES[p]) out.role = roleId(p);
      else if (NATIONS[p] || NATION_ALIASES[p]) out.nation = nationId(p);
    });
    return out;
  }
  S.parseSpec = parseSpec;

  function hatArt(role, N, hair) {
    var R0 = ROLES[role], s = "";
    switch (R0.hat) {
      case "peaked": {
        var band = R0.braid ? "#B5121B" : N.band, cap = N.cap;
        s += Pa("M-104,-62 C-108,-128 -58,-146 0,-146 C58,-146 108,-128 104,-62 Z", cap, inkA());
        s += Pa("M-104,-62 C-70,-74 70,-74 104,-62 L100,-34 C60,-46 -60,-46 -100,-34 Z", band, inkA());
        s += Pa("M-78,-36 C-50,-20 50,-20 78,-36 C60,-10 -60,-10 -78,-36 Z", shade(cap, -0.45), inkA(4));
        if (R0.braid) s += '<path d="M-60,-30 C-30,-18 30,-18 60,-30" fill="none" stroke="' + GOLD + '" stroke-width="6" stroke-linecap="round"/>';
        s += C(0, -84, 13, GOLD, inkA(3.5)) + C(0, -84, 5, "#FFF3C4");
        if (R0.braid) s += Pa("M-26,-84 L-12,-92 L-12,-76 Z M26,-84 L12,-92 L12,-76 Z", GOLD, inkA(2.5));
        break;
      }
      case "helmet": {
        var hc = N.helmet || N.cap;
        if (N.helmetKind === "brodie") {
          s += Pa("M-92,-58 C-88,-118 -40,-128 0,-128 C40,-128 88,-118 92,-58 Z", hc, inkA());
          s += El(0, -56, 126, 16, shade(hc, -0.12), inkA());
        } else if (N.helmetKind === "adrian") {
          s += Pa("M-104,-44 C-104,-122 -50,-136 0,-136 C50,-136 104,-122 104,-44 Z", hc, inkA());
          s += Pa("M-8,-150 L8,-150 L12,-100 L-12,-100 Z", shade(hc, 0.1), inkA(3.5));
          s += El(0, -44, 118, 16, shade(hc, -0.12), inkA());
        } else {
          s += Pa("M-110,-36 C-110,-132 -56,-146 0,-146 C56,-146 110,-132 110,-36 L116,-24 C70,-6 -70,-6 -116,-24 Z", hc, inkA());
          s += '<path d="M-78,-116 C-40,-130 40,-130 78,-116" fill="none" stroke="' + shade(hc, 0.18) + '" stroke-width="8" stroke-linecap="round" opacity=".8"/>';
        }
        break;
      }
      case "sailor": {
        s += Pa("M-96,-78 C-96,-114 96,-114 96,-78 L104,-56 C60,-38 -60,-38 -104,-56 Z", "#FFFFFF", inkA());
        s += Pa("M-104,-56 C-60,-74 60,-74 104,-56 L104,-44 C60,-28 -60,-28 -104,-44 Z", "#1E2F5C", inkA(4));
        s += Pa("M60,-46 L92,-18 L80,-10 L54,-40 Z M66,-48 L104,-30 L98,-18 L62,-40 Z", "#1E2F5C", inkA(3));
        s += C(0, -58, 9, GOLD, inkA(3));
        break;
      }
      case "pilot": {
        s += Pa("M-100,-10 C-100,-120 -60,-150 0,-150 C60,-150 100,-120 100,-10 L100,40 C92,56 70,54 66,36 L66,-10 C60,-70 -60,-70 -66,-10 L-66,36 C-70,54 -92,56 -100,40 Z", "#5A3A22", inkA());
        s += Pa("M-88,-70 C-60,-54 60,-54 88,-70 L88,-56 C60,-40 -60,-40 -88,-56 Z", INK);
        s += C(-36, -62, 24, "#9FD8F0", inkA(4.5)) + C(36, -62, 24, "#9FD8F0", inkA(4.5));
        s += R(-10, -68, 20, 12, INK, ' rx="4"');
        s += Pa("M-46,-74 C-40,-80 -30,-80 -26,-76 Z", "#FFFFFF") + Pa("M26,-74 C32,-80 42,-80 46,-76 Z", "#FFFFFF");
        break;
      }
      case "flatcap": {
        s += Pa("M-102,-58 C-96,-124 -50,-140 0,-140 C50,-140 96,-124 102,-58 Z", "#7A5A3A", inkA());
        s += Pa("M-102,-58 C-40,-70 40,-70 102,-58 C80,-36 -80,-36 -102,-58 Z", "#5E4428", inkA(4));
        s += '<path d="M-40,-110 L40,-114 M-60,-88 L60,-90" fill="none" stroke="' + shade("#7A5A3A", -0.25) + '" stroke-width="4" stroke-linecap="round" opacity=".7"/>';
        break;
      }
      case "nurse": {
        s += Pa("M-72,-146 L72,-146 L96,-74 L-96,-74 Z", "#FFFFFF", inkA());
        s += R(-7, -132, 14, 40, RED) + R(-20, -119, 40, 14, RED);
        break;
      }
      default: break;
    }
    return s;
  }
  function hairArt(role, hair, seed) {
    var h = ROLES[role].hat;
    if (h === "none") {
      var v = Math.floor(hash01(seed) * 3);
      if (v === 0) return Pa("M-100,-10 C-104,-70 -60,-108 0,-108 C60,-108 104,-70 100,-10 L100,-34 L86,-26 L60,-58 L30,-46 L0,-66 L-30,-48 L-62,-62 L-86,-36 Z", hair, inkA(4));
      if (v === 1) return Pa("M-102,-20 C-102,-84 -60,-110 0,-110 C64,-110 104,-80 100,-20 L92,-40 C60,-78 -20,-80 -78,-44 L-96,-26 Z", hair, inkA(4)) + Pa("M30,-104 C60,-120 100,-100 104,-60 C90,-82 60,-92 28,-90 Z", shade(hair, -0.2), inkA(3));
      return Pa("M-100,-20 C-100,-80 -60,-106 0,-106 C60,-106 100,-80 100,-20 L100,-40 L70,-40 L50,-66 L20,-50 L-10,-70 L-40,-52 L-70,-64 L-100,-40 Z", hair, inkA(4));
    }
    // under a hat: just the sideburns / fringe peeking out
    return Pa("M-100,-20 C-100,-70 -60,-96 0,-96 C60,-96 100,-70 100,-20 L100,-46 C60,-60 -60,-60 -100,-46 Z", hair, inkA(3.5));
  }
  function torsoArt(role, N, skin) {
    var uni = N.uni, dk = N.uniD, s = "";
    var body = "M-64,98 C-64,84 -40,80 0,80 C40,80 64,84 64,98 L70,208 C72,226 -72,226 -70,208 Z";
    switch (role) {
      case "officer":
      case "general":
        s += Pa(body, uni, inkA());
        s += Pa("M-64,98 L-22,98 L0,150 L22,98 L64,98 L64,118 L0,176 L-64,118 Z", dk, inkA(3.5));
        s += Pa("M-14,96 L0,120 L14,96 Z", skin, inkA(3));
        s += R(-66, 166, 132, 16, INK) + R(-10, 164, 20, 20, GOLD, inkA(3) + ' rx="3"');
        s += R(-62, 88, 28, 12, dk, inkA(3) + ' rx="3"') + R(34, 88, 28, 12, dk, inkA(3) + ' rx="3"');
        s += C(0, 140, 4, GOLD) + C(0, 156, 4, GOLD) + C(0, 196, 4, GOLD);
        if (ROLES[role].medals) {
          [[-46, 128, RED], [-32, 130, GOLD], [-18, 132, BLUE]].forEach(function (m) { s += R(m[0] - 5, m[1] - 10, 10, 14, m[2]) + C(m[0], m[1] + 10, 7, GOLD, inkA(2.5)); });
          s += '<path d="M-64,98 L-56,206 M64,98 L56,206" fill="none" stroke="' + GOLD + '" stroke-width="4" opacity=".8"/>';
        }
        break;
      case "soldier":
        s += Pa(body, uni, inkA());
        s += '<path d="M-44,96 L-30,208 M44,96 L30,208" fill="none" stroke="' + dk + '" stroke-width="12" stroke-linecap="round"/>';
        s += R(-66, 166, 132, 16, dk) + R(-9, 165, 18, 18, "#8C8C8C", inkA(2.5) + ' rx="3"');
        s += R(-40, 120, 24, 22, shade(uni, -0.1), inkA(2.5) + ' rx="4"') + R(16, 120, 24, 22, shade(uni, -0.1), inkA(2.5) + ' rx="4"');
        s += Pa("M-14,96 L0,116 L14,96 Z", skin, inkA(3));
        break;
      case "sailor":
        s += Pa(body, "#FFFFFF", inkA());
        s += Pa("M-64,98 L-18,98 L0,150 L18,98 L64,98 L68,124 L0,184 L-68,124 Z", "#1E2F5C", inkA(3.5));
        s += '<path d="M-58,106 L0,170 L58,106" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".9"/>';
        s += Pa("M-14,100 L0,128 L14,100 Z", skin, inkA(3));
        s += Pa("M-8,150 L8,150 L4,180 L-4,180 Z", INK);
        s += R(-70, 196, 140, 30, "#1E2F5C");
        break;
      case "pilot":
        s += Pa(body, "#6B4425", inkA());
        s += Pa("M-64,98 C-40,82 40,82 64,98 L64,122 C40,106 -40,106 -64,122 Z", "#D9C5A0", inkA(3.5));
        s += '<path d="M-56,110 Q-40,104 -24,112 M24,112 Q40,104 56,110" fill="none" stroke="#B49C74" stroke-width="3"/>';
        s += '<path d="M-6,120 L-2,208" fill="none" stroke="' + shade("#6B4425", -0.3) + '" stroke-width="5"/>';
        s += R(-50, 180, 100, 12, INK) + R(-12, 174, 24, 16, "#8C8C8C", inkA(2.5) + ' rx="3"');
        s += Pa("M-12,100 L0,118 L12,100 Z", skin, inkA(3));
        break;
      case "diplomat":
        s += Pa(body, "#2A2D3E", inkA());
        s += Pa("M-30,96 L0,160 L30,96 Z", "#FFFFFF", inkA(3));
        s += Pa("M-30,96 L-6,160 L-26,196 L-62,110 Z M30,96 L6,160 L26,196 L62,110 Z", "#1F2230", inkA(3));
        s += Pa("M-8,104 L8,104 L5,150 L0,160 L-5,150 Z", RED, inkA(2.5));
        s += Pa("M-10,100 L0,110 L10,100 Z", skin, inkA(2.5));
        s += C(20, 130, 4, "#FFFFFF") + R(28, 118, 22, 8, "#FFFFFF", ' rx="2"');
        break;
      case "civilian":
        s += Pa(body, "#7A5A3A", inkA());
        s += Pa("M-32,96 L-8,208 L8,208 L32,96 Z", "#B48A58", inkA(3));
        s += Pa("M-32,96 L0,150 L-6,200 L-26,196 L-60,112 Z M32,96 L0,150 L6,200 L26,196 L60,112 Z", "#634728", inkA(3));
        s += Pa("M-14,96 L0,122 L14,96 Z", skin, inkA(3));
        s += C(0, 150, 4, INK) + C(0, 172, 4, INK) + C(0, 194, 4, INK);
        break;
      case "nurse":
        s += Pa(body, "#6E8CC0", inkA());
        s += Pa("M-44,98 L44,98 L52,208 C52,222 -52,222 -52,208 Z", "#FFFFFF", inkA(3.5));
        s += R(-7, 120, 14, 40, RED) + R(-20, 133, 40, 14, RED);
        s += Pa("M-14,96 L0,118 L14,96 Z", skin, inkA(3));
        s += '<path d="M-44,98 L-30,112 M44,98 L30,112" fill="none"' + inkA(3) + "/>";
        break;
      default: // historian: tweed + bow tie
        s += Pa(body, "#8A6D4C", inkA());
        s += Pa("M-30,96 L-10,180 L10,180 L30,96 Z", "#F5F0E6", inkA(3));
        s += Pa("M-30,96 L0,146 L-8,200 L-30,196 L-62,112 Z M30,96 L0,146 L8,200 L30,196 L62,112 Z", "#6E5438", inkA(3));
        s += Pa("M-26,104 L-4,114 L-26,124 Z M26,104 L4,114 L26,124 Z", RED, inkA(3)) + R(-5, 108, 10, 12, shade(RED, -0.3), inkA(2));
        s += Pa("M-12,98 L0,108 L12,98 Z", skin, inkA(2.5));
        s += '<path d="M-54,120 L-50,200 M-50,140 L-30,140 M-50,160 L-32,160 M-50,180 L-34,180" fill="none" stroke="' + shade("#8A6D4C", -0.35) + '" stroke-width="2.5" opacity=".7"/>';
        break;
    }
    return s;
  }
  function handArt(kind, skin, glove) {
    var col = glove || skin, st = inkA(LW * 0.8);
    switch (kind) {
      case "fist": return C(0, 2, 17, col, st) + '<path d="M-9,8 L9,8" fill="none"' + inkA(2.6) + ' opacity=".55"/>';
      case "point": return C(0, 0, 15, col, st) + R(-6, 8, 12, 32, col, st + ' rx="6"');
      case "salute": return Pa("M-16,-6 L16,-6 L16,24 C8,32 -8,32 -16,24 Z", col, st) + '<path d="M-6,-4 L-6,22 M6,-4 L6,22" fill="none"' + inkA(2.4) + ' opacity=".5"/>';
      case "palm": return C(0, 2, 16, col, st) + C(-14, -10, 6, col, st) + C(0, -14, 6, col, st) + C(14, -10, 6, col, st);
      default: return C(0, 2, 16, col, st);
    }
  }
  function propArt(name, arg) {
    var fn = PROPS[str(name).toLowerCase()];
    return fn ? fn(arg) : "";
  }

  function makeEye(parent, side, actor) {
    var E0 = { side: side, ex: side * 36, ey: 6 };
    E0.g = g(parent, { transform: "translate(" + E0.ex + "," + E0.ey + ")" });
    function Q(x, y) { return P2(x * side, y); }
    var N = (E0.n = g(E0.g));
    svgEl("ellipse", { cx: 0, cy: 0, rx: 10, ry: 15, fill: INK }, N);
    svgEl("circle", { cx: -3.5 * side, cy: -6, r: 3.8, fill: "#FFFFFF" }, N);
    svgEl("circle", { cx: 3 * side, cy: 6, r: 1.6, fill: "#FFFFFF", opacity: 0.8 }, N);
    E0.lid = svgEl("rect", { x: -16, y: -34, width: 32, height: 20, fill: actor.skin, display: "none" }, E0.g);
    E0.lidLine = svgEl("path", { fill: "none", stroke: INK, "stroke-width": 4, "stroke-linecap": "round", display: "none" }, E0.g);
    var lineA = { fill: "none", stroke: INK, "stroke-linecap": "round", "stroke-linejoin": "round", display: "none" };
    E0.happy = svgEl("path", Object.assign({ d: "M" + Q(-14, 6) + " Q" + Q(0, -12) + " " + Q(14, 6), "stroke-width": 5 }, lineA), E0.g);
    E0.closed = svgEl("path", Object.assign({ d: "M" + Q(-13, 4) + " Q" + Q(0, 12) + " " + Q(14, 2), "stroke-width": 4.5 }, lineA), E0.g);
    E0.shock = g(E0.g, { display: "none" });
    svgEl("circle", { cx: 0, cy: 0, r: 19, fill: "#FFFFFF", stroke: INK, "stroke-width": 3.4 }, E0.shock);
    svgEl("circle", { cx: 0, cy: 1, r: 4.5, fill: INK }, E0.shock);
    E0.wide = g(E0.g, { display: "none" });
    svgEl("circle", { cx: 0, cy: 0, r: 17, fill: "#FFFFFF", stroke: INK, "stroke-width": 3.4 }, E0.wide);
    svgEl("circle", { cx: 0, cy: 2, r: 9.5, fill: INK }, E0.wide);
    svgEl("circle", { cx: -3 * side, cy: -2, r: 3.4, fill: "#FFFFFF" }, E0.wide);
    E0.spin = svgEl("path", Object.assign({ d: spiralD(0, 0, 15, 2.4), "stroke-width": 3.2 }, lineA), E0.g);
    E0.cross = svgEl("path", Object.assign({ d: "M" + Q(-11, -11) + " L" + Q(11, 11) + " M" + Q(11, -11) + " L" + Q(-11, 11), "stroke-width": 5 }, lineA), E0.g);
    return E0;
  }
  function spiralD(cx, cy, r, turns) {
    var d = "", n = 36;
    for (var i = 0; i <= n; i++) {
      var p = i / n, a = p * turns * 2 * PI, rr = r * p;
      d += (i ? " L" : "M") + P2(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
    }
    return d;
  }
  function updateEye(E0, v, open, look, scaleX, scaleY, lid, t) {
    var bean = v === "bean";
    var showN = bean && open > 0.15;
    setD(E0.n, showN);
    setD(E0.closed, v === "closed" || (bean && !showN));
    setD(E0.happy, v === "happy");
    setD(E0.shock, v === "shock");
    setD(E0.wide, v === "wide");
    setD(E0.spin, v === "spin");
    setD(E0.cross, v === "cross");
    var lx = look ? look[0] : 0, ly = look ? look[1] : 0;
    setA(E0.g, "transform", "translate(" + fx(E0.ex + lx * 7) + "," + fx(E0.ey + ly * 5) + ") scale(" + fx(scaleX * 100) / 100 + "," + fx(scaleY * 100) / 100 + ")");
    if (v === "spin") setA(E0.spin, "transform", "rotate(" + fx((t * 400 * E0.side) % 360) + ")");
    if (v === "shock") setA(E0.shock, "transform", "translate(" + fx(Math.sin(t * 50) * 1.2) + ",0)");
    if (showN) setA(E0.n, "transform", open > 0.98 ? "" : "scale(1," + fx(open * 100) / 100 + ")");
    var on = showN && lid > 0.03;
    setD(E0.lid, on); setD(E0.lidLine, on);
    if (on) {
      var y = -34 + lid * 40;
      setA(E0.lid, "height", fx(y + 34));
      setA(E0.lidLine, "d", "M" + P2(-12, y) + " Q0," + fx(y + 2) + " " + P2(12, y));
    }
  }
  function mouthShape(type, o) {
    var r = { fill: null, line: null, teeth: null, tongue: null }, hw, h;
    switch (type) {
      case "smile": r.line = "M-13,-3 Q0,8 13,-3"; break;
      case "smirk": r.line = "M-10,2 Q4,6 14,-6"; break;
      case "hmm": r.line = "M-8,2 Q0,-3 9,1"; break;
      case "frown": r.line = "M-12,5 Q0,-5 12,5"; break;
      case "wobbly": r.line = "M-14,1 Q-10,-4 -7,0 Q-3,4 0,0 Q3,-4 7,0 Q10,4 14,0"; break;
      case "line": r.line = "M-9,0 L9,0"; break;
      case "grit": r.teeth = "M-14,-4 L14,-4 Q16,4 12,7 L-12,7 Q-16,4 -14,-4Z"; r.line = "M-12,1.5 L12,1.5"; break;
      case "open":
        hw = 10 + o * 5; h = 5 + o * 16;
        r.fill = "M" + P2(-hw, 0) + " Q0,2 " + P2(hw, 0) + " Q0," + fx(h * 1.7) + " " + P2(-hw, 0) + "Z";
        r.tongue = [0, h * 0.6, hw * 0.5, h * 0.22];
        break;
      case "o":
        hw = 5 + o * 4; h = 6 + o * 8;
        r.fill = "M0," + fx(-h * 0.55) + " C" + P2(hw * 1.3, -h * 0.55) + " " + P2(hw * 1.3, h * 1.1) + " 0," + fx(h * 1.1) + " C" + P2(-hw * 1.3, h * 1.1) + " " + P2(-hw * 1.3, -h * 0.55) + " 0," + fx(-h * 0.55) + "Z";
        break;
      case "shout":
        hw = 14; h = 6 + o * 16;
        r.fill = "M" + P2(-hw * 1.1, -4) + " L" + P2(hw * 1.1, -5) + " L" + P2(hw * 0.7, h) + " L" + P2(-hw * 0.7, h) + "Z";
        r.teeth = "M" + P2(-hw, -3.5) + " L" + P2(hw, -4.5) + " L" + P2(hw * 0.9, 1) + " L" + P2(-hw * 0.9, 1.5) + "Z";
        break;
      case "wail":
        h = 8 + o * 16;
        r.fill = "M-16,0 Q-8,-6 0,-1 Q8,-6 16,0 Q13," + fx(h * 1.3) + " 0," + fx(h * 1.35) + " Q-13," + fx(h * 1.3) + " -16,0Z";
        r.tongue = [0, h * 0.95, 7, h * 0.2];
        break;
      default: r.line = "M-9,0 Q0,3 9,0";
    }
    return r;
  }

  AP.build = function () {
    var self = this, Rl = this.R, N = this.N;
    var root = (this.root = g(this.parent, { class: "ch-actor ch-" + this.role }));
    svgEl("ellipse", { cx: 0, cy: FEET + 6, rx: 86, ry: 14, fill: INK, opacity: 0.16 }, root);
    var body = (this.bodyG = g(root));
    // legs
    this.legs = [-1, 1].map(function (sd) {
      var lg = g(body);
      var trousers = self.role === "sailor" ? "#1E2F5C" : self.role === "nurse" ? "#6E8CC0" : self.role === "diplomat" ? "#2A2D3E" : self.role === "civilian" ? "#5A4634" : self.role === "historian" ? "#5E4A3A" : self.role === "pilot" ? "#5A4330" : N.uniD;
      svgEl("path", { d: "M" + P2(sd * 28, 200) + " L" + P2(sd * 28, 252), stroke: INK, "stroke-width": 30 + LW * 1.6, "stroke-linecap": "round" }, lg);
      svgEl("path", { d: "M" + P2(sd * 28, 200) + " L" + P2(sd * 28, 252), stroke: trousers, "stroke-width": 30, "stroke-linecap": "round" }, lg);
      var boot = self.role === "nurse" || self.role === "sailor" ? "#1A1A22" : "#3A2A1E";
      svgEl("path", { d: "M" + P2(sd * 28 - 22, 250) + " L" + P2(sd * 28 + 22, 250) + " L" + P2(sd * 28 + 26 + sd * 6, FEET) + " L" + P2(sd * 28 - 26 + sd * 6, FEET) + "Z", fill: boot, stroke: INK, "stroke-width": LW * 0.8, "stroke-linejoin": "round" }, lg);
      return lg;
    });
    // torso
    this.torso = g(body);
    this.torso.innerHTML = torsoArt(this.role, N, this.skin);
    // arms
    this.arms = {};
    ["L", "R"].forEach(function (k) {
      var sd = k === "L" ? -1 : 1;
      var ag = g(body, { transform: "translate(" + sd * SHX + "," + SHY + ")" });
      var sleeve = self.role === "sailor" ? "#FFFFFF" : self.role === "pilot" ? "#6B4425" : self.role === "diplomat" ? "#2A2D3E" : self.role === "civilian" ? "#7A5A3A" : self.role === "nurse" ? "#6E8CC0" : self.role === "historian" ? "#8A6D4C" : N.uni;
      svgEl("path", { d: "M0,0 L0," + ARM, stroke: INK, "stroke-width": 26 + LW * 1.6, "stroke-linecap": "round" }, ag);
      svgEl("path", { d: "M0,0 L0," + ARM, stroke: sleeve, "stroke-width": 26, "stroke-linecap": "round" }, ag);
      var cuffC = self.role === "sailor" ? "#1E2F5C" : self.role === "general" ? GOLD : self.role === "pilot" ? "#D9C5A0" : self.role === "nurse" ? "#FFFFFF" : self.role === "diplomat" || self.role === "historian" ? "#FFFFFF" : N.uniD;
      svgEl("path", { d: "M0," + (ARM - 18) + " L0," + (ARM - 6), stroke: cuffC, "stroke-width": 24 }, ag);
      var hand = g(ag, { transform: "translate(0," + (ARM + 10) + ")" });
      var glove = self.role === "pilot" ? "#4A3020" : null;
      var prop = g(hand, { class: "ch-prop" });
      self.arms[k] = { g: ag, hand: hand, prop: prop, kind: "", sd: sd, glove: glove, propKey: "" };
    });
    // head
    var head = (this.headG = g(root));
    this.headInner = g(head);
    svgEl("circle", { cx: 0, cy: 0, r: 100, fill: INK }, this.headInner);
    svgEl("circle", { cx: 0, cy: 0, r: 100 - LW, fill: this.skin }, this.headInner);
    var cid = nid("hd");
    var cp = svgEl("clipPath", { id: cid }, this.headInner);
    svgEl("circle", { cx: 0, cy: 0, r: 100 - LW + 1 }, cp);
    var inHead = g(this.headInner, { "clip-path": "url(#" + cid + ")" });
    svgEl("path", { d: "M-100,40 C-60,120 60,120 100,40 L100,110 L-100,110Z", fill: shade(this.skin, -0.12), opacity: 0.5 }, inHead);
    var hairG = g(inHead);
    hairG.innerHTML = hairArt(this.role, this.hair, this.seed);
    // ears
    [-1, 1].forEach(function (sd) {
      svgEl("ellipse", { cx: sd * 96, cy: 14, rx: 12, ry: 16, fill: self.skin, stroke: INK, "stroke-width": LW * 0.8 }, head);
    });
    var feat = (this.feat = g(head));
    this.blush = g(feat);
    svgEl("ellipse", { cx: -58, cy: 32, rx: 17, ry: 9, fill: "#F48FA0" }, this.blush);
    svgEl("ellipse", { cx: 58, cy: 32, rx: 17, ry: 9, fill: "#F48FA0" }, this.blush);
    this.hatch = g(feat, { display: "none" });
    [-1, 1].forEach(function (sd) {
      for (var k = 0; k < 3; k++) svgEl("path", { d: "M" + P2(sd * (46 + k * 10), 26) + " L" + P2(sd * (46 + k * 10) - 5, 40), stroke: "#E0607A", "stroke-width": 2.6, "stroke-linecap": "round" }, self.hatch);
    });
    this.eyes = [makeEye(feat, -1, this), makeEye(feat, 1, this)];
    this.tears = g(feat, { display: "none" });
    [-1, 1].forEach(function (sd) {
      svgEl("path", { d: "M" + P2(sd * 38, 22) + " C" + P2(sd * 34, 46) + " " + P2(sd * 42, 70) + " " + P2(sd * 38, 92) + " L" + P2(sd * 50, 92) + " C" + P2(sd * 54, 70) + " " + P2(sd * 46, 46) + " " + P2(sd * 50, 22) + "Z", fill: "#9FD8FF", opacity: 0.85 }, self.tears);
    });
    this.brows = [-1, 1].map(function (sd) {
      return { s: sd, b: svgEl("path", { fill: "none", stroke: INK, "stroke-width": 4.6, "stroke-linecap": "round" }, feat) };
    });
    this.mouthG = g(feat, { transform: "translate(0,50)" });
    this.mFill = svgEl("path", { fill: "#7A2E3A", stroke: INK, "stroke-width": 2.6, "stroke-linejoin": "round" }, this.mouthG);
    this.mTongue = svgEl("ellipse", { fill: "#F07A8E" }, this.mouthG);
    this.mTeeth = svgEl("path", { fill: "#FFFFFF", stroke: INK, "stroke-width": 2.2, "stroke-linejoin": "round" }, this.mouthG);
    this.mLine = svgEl("path", { fill: "none", stroke: INK, "stroke-width": 3.4, "stroke-linecap": "round", "stroke-linejoin": "round" }, this.mouthG);
    if (Rl.glasses) {
      var gl = g(feat);
      gl.innerHTML = C(-36, 6, 24, "rgba(220,235,255,0.25)", inkA(3.6)) + C(36, 6, 24, "rgba(220,235,255,0.25)", inkA(3.6)) + '<path d="M-12,4 Q0,-2 12,4 M-60,2 L-92,-4 M60,2 L92,-4" fill="none"' + inkA(3.4) + "/>" + '<path d="M-50,-6 L-44,-10 M22,-6 L28,-10" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity=".8"/>';
    }
    this.hat = g(head);
    this.hat.innerHTML = hatArt(this.role, N, this.hair);
    this.hatArtStr = this.hat.innerHTML;
    this.buildMarks();
    // per-actor blink schedule (deterministic)
    var rnd = V.makeRand(this.seed * 31 + 7);
    var blinks = [], t = 0.6 + rnd() * 1.4;
    while (t < V.duration + 1) { blinks.push(t); if (rnd() < 0.2) blinks.push(t + 0.24); t += 2.0 + rnd() * 2.8; }
    this.blinks = blinks;
  };
  AP.buildMarks = function () {
    var M = (this.marks = {}), head = this.headG;
    M.sweat = g(head, { display: "none" });
    svgEl("path", { d: "M0,-28 C11,-8 18,2 18,12 C18,23 10,30 0,30 C-10,30 -18,23 -18,12 C-18,2 -11,-8 0,-28Z", fill: "#BFE7FF", stroke: INK, "stroke-width": 2.8 }, M.sweat);
    svgEl("ellipse", { cx: -5, cy: 12, rx: 3.5, ry: 6, fill: "#FFFFFF" }, M.sweat);
    M.sweat2 = g(head, { display: "none" });
    svgEl("path", { d: "M0,-20 C8,-6 13,1 13,8 C13,16 7,21 0,21 C-7,21 -13,16 -13,8 C-13,1 -8,-6 0,-20Z", fill: "#BFE7FF", stroke: INK, "stroke-width": 2.6 }, M.sweat2);
    M.anger = g(head, { display: "none" });
    svgEl("path", { d: "M-15,-4 Q-6,-6 -4,-15 M4,-15 Q6,-6 15,-4 M15,4 Q6,6 4,15 M-4,15 Q-6,6 -15,4", fill: "none", stroke: "#E8344E", "stroke-width": 5.5, "stroke-linecap": "round" }, M.anger);
    M.bang = g(head, { display: "none" });
    svgEl("path", { d: "M-9,-44 L9,-44 L4,4 L-4,4 Z", fill: GOLD, stroke: INK, "stroke-width": 3, "stroke-linejoin": "round" }, M.bang);
    svgEl("circle", { cx: 0, cy: 16, r: 7, fill: GOLD, stroke: INK, "stroke-width": 3 }, M.bang);
    M.question = g(head, { display: "none" });
    this.qList = [[100, -112, 1], [132, -154, 0.78], [82, -182, 0.62]].map(function (p) {
      var q = g(M.question);
      svgEl("text", { x: 0, y: 0, "text-anchor": "middle", "font-size": 68, "font-weight": 900, "font-family": "Arial Black, Arial, sans-serif", fill: "#FFFFFF", stroke: INK, "stroke-width": 6, "paint-order": "stroke" }, q).textContent = "?";
      return { g: q, x: p[0], y: p[1], s: p[2] };
    });
    M.sparkle = g(head, { display: "none" });
    this.sparkList = [[-128, -92, 18], [124, -36, 14], [102, -150, 11], [-108, 36, 9]].map(function (p) {
      var s = g(M.sparkle);
      svgEl("path", { d: star4D(0, 0, p[2]), fill: "#FFFFFF", stroke: GOLD, "stroke-width": 2.4, "stroke-linejoin": "round" }, s);
      return { g: s, x: p[0], y: p[1] };
    });
    M.stars = g(head, { display: "none" });
    this.starList = [0, 1, 2].map(function (i) {
      var s = g(M.stars);
      svgEl("path", { d: starD(0, 0, 13), fill: GOLD, stroke: INK, "stroke-width": 2.6, "stroke-linejoin": "round" }, s);
      return s;
    });
    M.zzz = g(head, { display: "none" });
    this.zList = [0, 1, 2].map(function (i) {
      var z = svgEl("text", { x: 0, y: 0, "font-size": 34 + i * 10, "font-weight": 900, "font-family": "Arial Black, Arial, sans-serif", fill: "#FFFFFF", stroke: INK, "stroke-width": 4, "paint-order": "stroke" }, M.zzz);
      z.textContent = "z";
      return z;
    });
    M.gloom = g(head, { display: "none", opacity: 0.5 });
    for (var i = 0; i < 7; i++) svgEl("path", { d: "M" + P2(-54 + i * 18, -108) + " L" + P2(-54 + i * 18, -62 + (i % 2) * 12), stroke: "#4A4A66", "stroke-width": 3.2, "stroke-linecap": "round" }, M.gloom);
    M.steam = g(head, { display: "none" });
    this.steamList = [-1, 1].map(function (sd) {
      var s = g(M.steam);
      svgEl("path", { d: "M0,0 C-14,-4 -16,-24 -2,-26 C0,-40 22,-40 24,-26 C38,-24 36,-4 22,0 Z", fill: "#FFFFFF", stroke: INK, "stroke-width": 2.6, "stroke-linejoin": "round" }, s);
      return { g: s, sd: sd };
    });
  };
  function star4D(cx, cy, r) {
    var t = r * 0.24;
    return "M" + P2(cx, cy - r) + " Q" + P2(cx + t, cy - t) + " " + P2(cx + r, cy) + " Q" + P2(cx + t, cy + t) + " " + P2(cx, cy + r) + " Q" + P2(cx - t, cy + t) + " " + P2(cx - r, cy) + " Q" + P2(cx - t, cy - t) + " " + P2(cx, cy - r) + "Z";
  }
  S.star4 = star4D;

  // ── channels (public API, chainable; `at` in seconds) ──
  function ord(list) { list.sort(function (a, b) { return a.t - b.t; }); }
  AP.expression = function (name, at) { this.exprs.push({ t: clampT(at == null ? 0 : at), name: exprName(name) }); this.dirty = true; return this; };
  AP.expr = AP.expression;
  AP.gesture = function (name, at, dur) { this.gests.push({ t: clampT(at == null ? 0 : at), name: gestName(name), dur: num(dur, 0.22) }); this.dirty = true; return this; };
  AP.pose = AP.gesture;
  AP.face = function (dir, at, dur) { this.turns.push({ t: clampT(at == null ? 0 : at), v: facingVal(dir, 0), dur: num(dur, 0.2) }); this.dirty = true; return this; };
  AP.look = function (x, y, at) { this.looks.push({ t: clampT(at == null ? 0 : at), x: clamp(num(x, 0), -1, 1), y: clamp(num(y, 0), -1, 1) }); this.dirty = true; return this; };
  AP.lookAt = function (target, at) {
    var x = 0, y = 0;
    if (target === "left") x = -1; else if (target === "right") x = 1; else if (target === "up") y = -1; else if (target === "down") y = 1;
    else if (target && target.x0 != null) x = target.x0 < this.x0 ? -1 : 1;
    else if (target && target.x != null) { x = clamp((target.x - this.x0) / 300, -1, 1); y = clamp(((target.y || this.y0) - this.y0) / 300, -1, 1); }
    if (this.mirror) x = -x;
    return this.look(x, y, at);
  };
  AP.say = function (from, to) { from = clampT(from); to = Math.max(from + 0.1, num(to, from + 1)); this.talks.push({ s: from, e: to }); this.dirty = true; return this; };
  AP.talk = AP.say;
  AP.moveTo = function (x, y, at, dur, ease) {
    this.moves.push({ t: clampT(at == null ? 0 : at), x: x == null ? null : num(x, 0), y: y == null ? null : num(y, 0), dur: Math.max(0.01, num(dur, 0.5)), ease: ease || "inOutCubic" });
    this.dirty = true; return this;
  };
  /** walk to a point (legs swing, body bobs, faces the direction) */
  AP.walkTo = function (x, y, at, dur) {
    at = clampT(at == null ? 0 : at); dur = Math.max(0.2, num(dur, 1.2));
    this.walks.push({ t: at, e: at + dur });
    return this.moveTo(x, y, at, dur, "inOutSine");
  };
  AP.slideIn = function (side, at, dur) {
    var sw = this.shot.Ww, tx = this.x0, ty = this.y0;
    this.x0 = side === "right" ? sw + 300 * this.s : side === "bottom" ? tx : -300 * this.s;
    if (side === "bottom") this.y0 = ty + 800;
    return this.moveTo(tx, ty, at, dur == null ? 0.4 : dur, "boing");
  };
  AP.hop = function (at, h, dur) { this.hops.push({ t: clampT(at), h: num(h, 40), d: num(dur, 0.34) }); return this; };
  AP.shake = function (at, dur, amp) { this.shakes.push({ t: clampT(at), d: num(dur, 0.5), a: num(amp, 8) }); return this; };
  AP.show = function (at) { this.vis.push({ t: clampT(at), on: true }); this.dirty = true; return this; };
  AP.hide = function (at) { this.vis.push({ t: clampT(at), on: false }); this.dirty = true; return this; };
  /** hold a prop in the right hand from `at` (null = drop). Props: letter, telegram, map, binoculars, phone, flag, pointer, mug, sign */
  AP.prop = function (name, at, arg) { this.props.push({ t: clampT(at == null ? 0 : at), name: name ? str(name).toLowerCase() : null, arg: arg }); this.dirty = true; return this; };
  /** take the hat off (held in the right hand) from `at`; `on` = false puts it back */
  AP.hatInHand = function (at, on) { this.hatOff.push({ t: clampT(at == null ? 0 : at), on: on !== false }); this.dirty = true; return this; };
  AP.beats = function (list, opts) {
    opts = opts || {};
    var after = opts.after || 0, last = opts.start || 0.3, step = opts.step || 1.4, self = this;
    arr(list).forEach(function (b, i) {
      if (!b) return;
      var t = b.at != null ? clampT(b.at) : syncAt(b.word, after, last + (i ? step : 0), 0.15);
      if (b.word && V.find(b.word, after) != null) after = t + 0.05;
      last = t;
      if (b.expression) self.expression(b.expression, t);
      if (b.gesture) self.gesture(b.gesture, t);
      if (b.look) self.lookAt(b.look, t);
      if (b.face) self.face(b.face, t);
      if (b.hop) self.hop(t, 40);
      if (b.prop !== undefined) self.prop(b.prop, t);
    });
    return this;
  };

  AP.compile = function () {
    ord(this.exprs); ord(this.gests); ord(this.turns); ord(this.looks); ord(this.moves); ord(this.vis); ord(this.props); ord(this.hatOff);
    this.talks.sort(function (a, b) { return a.s - b.s; });
    this.gSnap = [];
    for (var i = 0; i < this.gests.length; i++) this.gSnap[i] = i === 0 ? this.gTarget(0, 0) : this.gEval(this.gests[i].t, i - 1);
    this.tSnap = [];
    for (i = 0; i < this.turns.length; i++) this.tSnap[i] = i === 0 ? this.turns[0].v : this.turnEval(this.turns[i].t, i - 1);
    for (i = 0; i < this.moves.length; i++) { var m = this.moves[i], p = this.posEval(m.t, i - 1); m.fx = p.x; m.fy = p.y; }
    var W = words(), tw = [];
    this.talks.forEach(function (tk, ti) {
      var any = false;
      for (var j = 0; j < W.length; j++) {
        var w = W[j];
        if (w.start >= tk.s - 0.05 && w.start < tk.e) { tw.push({ s: w.start, e: Math.min(w.end, tk.e + 0.1), n: syllables(w.word), k: 0.6 + 0.4 * hash01(j + 3) }); any = true; }
      }
      if (!any) {
        var t = tk.s, k = 0;
        while (t < tk.e - 0.1) { var d = 0.2 + hash01(ti * 31 + k) * 0.22; tw.push({ s: t, e: Math.min(tk.e, t + d), n: 1 + (k % 3 === 0 ? 1 : 0), k: 0.7 + 0.3 * hash01(k + 9) }); t += d + 0.06 + (k % 6 === 5 ? 0.2 : 0); k++; }
      }
    });
    tw.sort(function (a, b) { return a.s - b.s; });
    this.tw = tw;
    this.dirty = false;
  };
  AP.gTarget = function (i, lt) {
    var gd = this.gests[i], a = GEST[gd.name] || GEST.rest;
    var L = a[0], R0 = a[1];
    if (gd.name === "wave") R0 += Math.sin(lt * 14) * 18;
    else if (gd.name === "cheer" || gd.name === "arms-up") { var b = Math.abs(Math.sin(lt * 8)) * 10; L += b; R0 += b; }
    else if (gd.name === "shrug") { var q = lt < 0.4 ? Math.sin((lt / 0.4) * PI) * 14 : 0; L += q; R0 += q; }
    else if (gd.name === "point" || gd.name === "point-left" || gd.name === "point-up") { var k = lt < 0.3 ? Math.sin((lt / 0.3) * PI) * 12 : 0; if (gd.name === "point-left") L += k; else R0 += k; }
    else if (gd.name === "fist" || gd.name === "fist-up") R0 += lt < 0.5 ? Math.sin(lt * 20) * 6 : 0;
    else if (gd.name === "hands-head") { L += Math.sin(lt * 24) * 4; R0 -= Math.sin(lt * 24) * 4; }
    else if (gd.name === "march") { var sw = Math.sin(lt * 9) * 22; L += sw; R0 -= sw; }
    return { L: L, R: R0, hL: a[2], hR: a[3], name: gd.name };
  };
  AP.gEval = function (t, lim) {
    var n = lim == null ? this.gests.length - 1 : lim, idx = 0;
    for (var i = 0; i <= n; i++) if (this.gests[i].t <= t) idx = i;
    var gd = this.gests[idx], tgt = this.gTarget(idx, Math.max(0, t - gd.t));
    if (idx === 0) return tgt;
    var from = this.gSnap[idx], p = clamp((t - gd.t) / gd.dur, 0, 1), e = EASE.pop(p);
    return { L: lerp(from.L, tgt.L, e), R: lerp(from.R, tgt.R, e), hL: p < 0.4 ? from.hL : tgt.hL, hR: p < 0.4 ? from.hR : tgt.hR, name: p < 0.5 ? from.name : tgt.name };
  };
  AP.turnEval = function (t, lim) {
    var n = lim == null ? this.turns.length - 1 : lim, idx = 0;
    for (var i = 0; i <= n; i++) if (this.turns[i].t <= t) idx = i;
    if (idx === 0) return this.turns[0].v;
    var k = this.turns[idx];
    return lerp(this.tSnap[idx], k.v, sm((t - k.t) / k.dur));
  };
  AP.posEval = function (t, lim) {
    var x = this.x0, y = this.y0, n = lim == null ? this.moves.length - 1 : lim;
    for (var i = 0; i <= n; i++) {
      var m = this.moves[i];
      if (m.t > t) break;
      var p = easeFn(m.ease)(clamp((t - m.t) / m.dur, 0, 1));
      var fx0 = m.fx != null ? m.fx : x, fy0 = m.fy != null ? m.fy : y;
      x = m.x == null ? fx0 : lerp(fx0, m.x, p);
      y = m.y == null ? fy0 : lerp(fy0, m.y, p);
    }
    return { x: x, y: y };
  };
  AP.exprAt = function (t) {
    var idx = 0;
    for (var i = 0; i < this.exprs.length; i++) if (this.exprs[i].t <= t) idx = i;
    return { e: E(this.exprs[idx].name), t0: this.exprs[idx].t, name: this.exprs[idx].name };
  };
  AP.mouthOpen = function (t) {
    var W = this.tw;
    if (!W || !W.length) return 0;
    var lo = 0, hi = W.length - 1, idx = -1;
    while (lo <= hi) { var mid = (lo + hi) >> 1; if (W[mid].s <= t) { idx = mid; lo = mid + 1; } else hi = mid - 1; }
    if (idx < 0) return 0;
    var w = W[idx];
    if (t > w.e + 0.07) return 0;
    var len = Math.max(0.06, w.e - w.s), p = clamp((t - w.s) / len, 0, 1);
    var a = Math.pow(Math.abs(Math.sin(p * w.n * PI)), 0.7) * w.k;
    if (t > w.e) a *= 1 - (t - w.e) / 0.07;
    return a;
  };
  AP.isTalking = function (t) { for (var i = 0; i < this.talks.length; i++) if (t >= this.talks[i].s && t <= this.talks[i].e + 0.1) return true; return false; };
  AP.visibleAt = function (t) {
    var on = true;
    for (var i = 0; i < this.vis.length; i++) { if (this.vis[i].t > t) break; on = this.vis[i].on; }
    if (this.vis.length && this.vis[0].on && t < this.vis[0].t) on = false;
    return on;
  };
  AP.walkingAt = function (t) { for (var i = 0; i < this.walks.length; i++) if (t >= this.walks[i].t && t <= this.walks[i].e) return this.walks[i]; return null; };
  AP.propAt = function (t) {
    var p = this.propName ? { name: this.propName, arg: this.propArg } : null;
    for (var i = 0; i < this.props.length; i++) { if (this.props[i].t > t) break; p = this.props[i].name ? this.props[i] : null; }
    return p;
  };
  AP.headAt = function (t) { if (this.dirty) this.compile(); var p = this.posEval(t); return { x: p.x, y: p.y }; };

  AP.update = function (t) {
    if (this.dirty) this.compile();
    var vis = this.visibleAt(t);
    setD(this.root, vis);
    if (!vis) return;
    var ex = this.exprAt(t), e = ex.e, since = t - ex.t0;
    var pos = this.posEval(t);
    var x = pos.x, y = pos.y, k;
    var hopP = 0, land = 0;
    for (k = 0; k < this.hops.length; k++) {
      var h = this.hops[k], lp = (t - h.t) / h.d;
      if (lp >= 0 && lp <= 1) { y -= Math.sin(lp * PI) * h.h; hopP = Math.sin(lp * PI); }
      var lq = (t - h.t - h.d) / 0.18;
      if (lq >= 0 && lq <= 1) land = Math.max(land, Math.sin(lq * PI) * Math.min(1, h.h / 60));
      var la = (t - h.t + 0.1) / 0.1;
      if (la >= 0 && la < 1) land = Math.max(land, Math.sin(la * PI) * 0.6 * Math.min(1, h.h / 60));
    }
    for (k = 0; k < this.shakes.length; k++) { var sh = this.shakes[k], ls = t - sh.t; if (ls >= 0 && ls <= sh.d) x += noise(ls * 40, 3 + k) * sh.a * (1 - ls / sh.d); }
    if (e.eyes === "spin" || ex.name === "scared") x += Math.sin(t * 46) * 2;
    var walk = this.walkingAt(t), wp = walk ? Math.sin((t - walk.t) * 14) : 0;
    if (walk) y -= Math.abs(wp) * 10;
    var talking = this.isTalking(t);
    var open = this.mouthOpen(t);
    var bob = talking ? noise(t * 3.4, this.seed) * 2.6 : 0;
    var breath = Math.sin(t * 2.2 + this.seed) * 0.012;
    var sc = this.s;
    var sqx = 1 + breath + land * 0.12 - hopP * 0.06, sqy = 1 - breath - land * 0.14 + hopP * 0.08;
    setA(this.root, "transform", "translate(" + fx(x) + "," + fx(y) + ") scale(" + fx(sc * (this.mirror ? -1 : 1) * 1000) / 1000 + "," + fx(sc * 1000) / 1000 + ")");
    setA(this.bodyG, "transform", "translate(0," + FEET + ") scale(" + fx(sqx * 1000) / 1000 + "," + fx(sqy * 1000) / 1000 + ") translate(0," + -FEET + ")");
    var pop = since >= 0 && since < 0.16 ? 1 + 0.05 * Math.sin((since / 0.16) * PI) : 1;
    var tilt = e.tilt + bob + Math.sin(t * 1.3 + this.seed) * 1.2 + (walk ? wp * 2 : 0);
    var hy = FEET - (FEET) * sqy; // keep the head sitting on the squashed body
    setA(this.headG, "transform", "translate(0," + fx(hy + (talking ? Math.abs(Math.sin(t * 11)) * -2 : 0)) + ") rotate(" + fx(tilt) + " 0 60) scale(" + fx(pop * 1000) / 1000 + ")");
    var turn = this.turnEval(t);
    var fo = fx(turn * 22);
    setA(this.feat, "transform", "translate(" + fo + ",0)");
    setA(this.hat, "transform", "translate(" + fx(turn * 6) + ",0)");
    // eyes
    var bl = 1;
    for (k = 0; k < this.blinks.length; k++) { var bt = t - this.blinks[k]; if (bt >= 0 && bt < 0.13) { bl = Math.abs(bt - 0.065) / 0.065; break; } if (this.blinks[k] > t) break; }
    if (since >= 0 && since < 0.08 && e.eyes === "bean") bl = Math.min(bl, 0.5 + since * 6);
    var look = e.look;
    if (!look) {
      var lk = null;
      for (k = 0; k < this.looks.length; k++) if (this.looks[k].t <= t) lk = this.looks[k];
      look = lk ? [lk.x, lk.y] : [turn * 0.4, 0];
    }
    for (k = 0; k < 2; k++) {
      var E2 = this.eyes[k], far = E2.side * turn > 0;
      var sx = e.eyeS * (far ? 1 - 0.2 * Math.abs(turn) : 1 + 0.04 * Math.abs(turn));
      updateEye(E2, e.eyes, bl, look, sx, e.eyeS, e.lid, t);
    }
    // brows
    for (k = 0; k < 2; k++) {
      var B = this.brows[k], sd = B.s;
      var asym = e.bs ? (sd > 0 ? -9 : 2) : 0;
      var yi = -28 + e.by - e.ba * 8 + asym, yo = -30 + e.by + e.ba * 4 + asym;
      if (e.eyes === "shock" || e.eyes === "wide") { yi -= 6; yo -= 6; }
      setA(B.b, "d", "M" + P2(sd * 20, yi) + " Q" + P2(sd * 36, Math.min(yi, yo) - 6) + " " + P2(sd * 54, yo));
    }
    // mouth
    var mt = e.mouth, mo = e.mo;
    if (talking && open > 0.06) {
      if (mt === "line" || mt === "smile" || mt === "hmm" || mt === "frown" || mt === "smirk" || mt === "wobbly" || mt === "grit") { mt = "open"; mo = open * 0.85; }
      else mo = Math.max(mo * 0.6, open) * (mt === "open" ? 1 : 0.9);
    } else if (mt === "open" || mt === "o" || mt === "wail" || mt === "shout") mo = mo * (talking ? 0.45 : 1);
    if (mt === "wail") mo += Math.sin(t * 20) * 0.08;
    var key = mt + ":" + Math.round(mo * 40);
    if (this._mk !== key) {
      this._mk = key;
      var ms = mouthShape(mt, clamp(mo, 0, 1.1));
      setD(this.mFill, !!ms.fill); if (ms.fill) setA(this.mFill, "d", ms.fill);
      setD(this.mLine, !!ms.line); if (ms.line) setA(this.mLine, "d", ms.line);
      setD(this.mTeeth, !!ms.teeth); if (ms.teeth) setA(this.mTeeth, "d", ms.teeth);
      setD(this.mTongue, !!ms.tongue);
      if (ms.tongue) { setA(this.mTongue, "cx", fx(ms.tongue[0])); setA(this.mTongue, "cy", fx(ms.tongue[1])); setA(this.mTongue, "rx", fx(ms.tongue[2])); setA(this.mTongue, "ry", fx(ms.tongue[3])); }
    }
    setA(this.blush, "opacity", fx(clamp(e.blush, 0, 1) * 0.8 * 100) / 100);
    var mk = {};
    e.marks.forEach(function (m) { mk[m] = true; });
    setD(this.hatch, e.blush >= 1);
    setD(this.tears, !!mk.tears);
    if (mk.tears) setA(this.tears, "opacity", fx((0.7 + 0.3 * Math.sin(t * 8)) * 100) / 100);
    var M = this.marks;
    setD(M.sweat, !!mk.sweat);
    if (mk.sweat) setA(M.sweat, "transform", "translate(" + fx(96 - turn * 6) + "," + fx(-70 + Math.min(1, since * 1.5) * 18) + ") scale(" + fx((1 + 0.06 * Math.sin(t * 6)) * 100) / 100 + ")");
    setD(M.sweat2, !!mk.sweat2);
    if (mk.sweat2) setA(M.sweat2, "transform", "translate(-100," + fx(-40 + Math.min(1, since * 1.2) * 22) + ")");
    setD(M.anger, !!mk.anger);
    if (mk.anger) setA(M.anger, "transform", "translate(-82,-104) scale(" + fx((1 + 0.18 * Math.abs(Math.sin(t * 7))) * 100) / 100 + ")");
    setD(M.bang, !!mk.bang && since < 1.3);
    if (mk.bang) setA(M.bang, "transform", "translate(124,-118) rotate(12) scale(" + fx((0.6 + 0.6 * EASE.boing(clamp(since / 0.25, 0, 1))) * 100) / 100 + ")");
    setD(M.question, !!mk.question);
    if (mk.question) this.qList.forEach(function (q, i) {
      var p = clamp((since - i * 0.18) / 0.3, 0, 1);
      setA(q.g, "transform", "translate(" + fx(q.x) + "," + fx(q.y + Math.sin(t * 3 + i) * 6) + ") rotate(" + fx(Math.sin(t * 2.4 + i) * 10) + ") scale(" + fx(q.s * EASE.boing(p) * 100) / 100 + ")");
    });
    setD(M.sparkle, !!mk.sparkle);
    if (mk.sparkle) this.sparkList.forEach(function (sp, i) {
      var tw = 0.55 + 0.45 * Math.sin(t * 7 + i * 1.9);
      setA(sp.g, "transform", "translate(" + sp.x + "," + sp.y + ") scale(" + fx(tw * 100) / 100 + ") rotate(" + fx(t * 40 + i * 20) + ")");
    });
    setD(M.stars, !!mk.stars);
    if (mk.stars) this.starList.forEach(function (s, i) {
      var a = t * 4 + (i * 2 * PI) / 3;
      setA(s, "transform", "translate(" + fx(Math.cos(a) * 92) + "," + fx(-128 + Math.sin(a) * 22) + ") rotate(" + fx(t * 90) + ")");
    });
    setD(M.zzz, !!mk.zzz);
    if (mk.zzz) this.zList.forEach(function (z, i) {
      var p = ((t * 0.5 + i * 0.33) % 1);
      setA(z, "transform", "translate(" + fx(96 + p * 50) + "," + fx(-84 - p * 70) + ")");
      setA(z, "opacity", fx((1 - p) * 100) / 100);
    });
    setD(M.gloom, !!mk.gloom);
    setD(M.steam, !!mk.steam);
    if (mk.steam) this.steamList.forEach(function (s, i) {
      var p = ((t * 1.2 + i * 0.5) % 1);
      setA(s.g, "transform", "translate(" + fx(s.sd * 108 - 12) + "," + fx(-120 - p * 50) + ") scale(" + fx((0.6 + p * 0.7) * 100) / 100 + ")");
      setA(s.g, "opacity", fx((1 - p) * 100) / 100);
    });
    // hat on / off
    var hatOff = false;
    for (k = 0; k < this.hatOff.length; k++) { if (this.hatOff[k].t > t) break; hatOff = this.hatOff[k].on; }
    setD(this.hat, !hatOff);
    // arms + legs
    var gs = this.gEval(t);
    var prop = hatOff ? { name: "__hat" } : this.propAt(t);
    var self = this;
    ["L", "R"].forEach(function (kk) {
      var A = self.arms[kk], ang = kk === "L" ? gs.L : gs.R, hk = kk === "L" ? gs.hL : gs.hR;
      if (walk) ang += (kk === "L" ? 1 : -1) * wp * 22;
      var rot = -A.sd * ang;
      setA(A.g, "transform", "translate(" + fx(A.sd * SHX) + "," + SHY + ") rotate(" + fx(rot) + ")");
      var hasProp = kk === "R" && prop;
      var hkind = hasProp ? "fist" : hk;
      if (A.kind !== hkind) {
        A.kind = hkind;
        // rebuild hand art, keep the prop group
        var old = A.hand.querySelectorAll(":scope > :not(.ch-prop)");
        for (var q = 0; q < old.length; q++) A.hand.removeChild(old[q]);
        var tmp = g(null);
        tmp.innerHTML = handArt(hkind, self.skin, A.glove);
        while (tmp.firstChild) A.hand.insertBefore(tmp.firstChild, A.prop);
      }
      if (kk === "R") {
        var pk = hasProp ? prop.name + ":" + str(prop.arg) : "";
        if (A.propKey !== pk) {
          A.propKey = pk;
          A.prop.innerHTML = !hasProp ? "" : prop.name === "__hat" ? '<g transform="translate(0,70) scale(0.9)">' + self.hatArtStr + "</g>" : propArt(prop.name, prop.arg);
        }
        if (hasProp) setA(A.prop, "transform", "rotate(" + fx(-rot) + ") translate(" + fx(prop.name === "__hat" ? 0 : 10) + "," + fx(prop.name === "__hat" ? 20 : 14) + ")");
      }
      setD(A.prop, !!hasProp);
    });
    this.legs.forEach(function (lg, i) {
      var sd = i ? 1 : -1;
      var sw = walk ? sd * wp * 26 : 0;
      setA(lg, "transform", sw ? "rotate(" + fx(sw) + " " + fx(sd * 28) + " 200)" : "");
    });
  };

  // ───────────────────────── film (cut list) ─────────────────────────
  var film = null;
  function Film(root) {
    root = root || V.root();
    root.classList.add("ch-root");
    this.root = root;
    var W = V.width, H = V.height;
    this.W = W; this.H = H; this.k = H / 1000; this.Ww = (1000 * W) / H;
    this.portrait = V.isPortrait; this.square = V.isSquare; this.landscape = !V.isPortrait && !V.isSquare;
    this.view = el("div.ch-view", { parent: root });
    this.svg = svgEl("svg", { class: "ch-svg", viewBox: "0 0 " + fx(this.Ww) + " 1000", width: W, height: H, preserveAspectRatio: "none" });
    this.view.appendChild(this.svg);
    this.defs = svgEl("defs", null, this.svg);
    this.shotsG = g(this.svg);
    this.htmlLayer = el("div.ch-hl", { parent: this.view });
    this.ui = el("div.ch-ui", { parent: root });
    this.top = el("div.ch-top", { parent: root });
    this.topSvg = svgEl("svg", { class: "ch-svg", viewBox: "0 0 " + fx(this.Ww) + " 1000", width: W, height: H, preserveAspectRatio: "none" });
    this.top.appendChild(this.topSvg);
    this.flashEl = el("div.ch-flash", { parent: this.top });
    this.vig = el("div.ch-vignette", { parent: this.top });
    this.shots = []; this.flashes = []; this.shakes = []; this.filters = []; this.fns = []; this.vigs = [];
    film = this;
    var self = this;
    V.onFrame(function (t) { self.update(t); });
  }
  S.Film = Film;
  var FP = Film.prototype;
  FP.shot = function (loc, from, to, opts) { return new Shot(this, loc, from, to, opts); };
  FP.onFrame = function (f) { this.fns.push(f); };
  FP.wx = function (x) { return x / this.Ww; };
  FP.wy = function (y) { return y / 1000; };
  FP.activeShot = function (t) {
    var act = null, first = null, i, s;
    for (i = 0; i < this.shots.length; i++) {
      s = this.shots[i];
      if (!first || s.from < first.from) first = s;
      if (t >= s.from && t < s.to) act = s;
    }
    if (!act) {
      var best = null;
      for (i = 0; i < this.shots.length; i++) { s = this.shots[i]; if (s.from <= t && (!best || s.to >= best.to)) best = s; }
      act = best || first;
    }
    return act;
  };
  FP.update = function (t) {
    var act = this.activeShot(t), i;
    for (i = 0; i < this.shots.length; i++) this.shots[i].setVisible(this.shots[i] === act);
    if (act) act.update(t);
    var ox = 0, oy = 0;
    for (i = 0; i < this.shakes.length; i++) {
      var s = this.shakes[i], ls = t - s.t;
      if (ls < 0 || ls > s.d) continue;
      var amp = s.a * Math.pow(1 - ls / s.d, 1.5);
      ox += noise(ls * 34, 3 + i) * amp; oy += noise(ls * 37, 9 + i) * amp;
    }
    setS(this.view, "transform", ox || oy ? "translate(" + fx(ox * this.k) + "px," + fx(oy * this.k) + "px)" : "");
    var filt = "", flash = 0, fcol = "#FFFFFF", vg = 0;
    for (i = 0; i < this.filters.length; i++) { var f = this.filters[i]; if (t >= f.from && t < f.to) filt = f.filter; }
    for (i = 0; i < this.flashes.length; i++) {
      var fl = this.flashes[i], lf = t - fl.t;
      if (lf >= 0 && lf < fl.d) { var a = 1 - lf / fl.d; if (a * fl.a > flash) { flash = a * fl.a; fcol = fl.c; } }
    }
    for (i = 0; i < this.vigs.length; i++) { var vv = this.vigs[i]; if (t >= vv.from && t < vv.to) vg = Math.max(vg, vv.a * Math.min(1, (t - vv.from) / 0.8)); }
    setS(this.view, "filter", filt);
    setS(this.flashEl, "opacity", flash > 0.001 ? String(fx(flash * 100) / 100) : "0");
    setS(this.flashEl, "background", fcol);
    setS(this.vig, "opacity", String(fx(vg * 100) / 100));
    for (i = 0; i < this.fns.length; i++) this.fns[i](t);
  };
  FP.shake = function (at, amp, dur) { this.shakes.push({ t: clampT(at), a: num(amp, 14), d: num(dur, 0.4) }); return this; };
  FP.flash = function (at, color, dur, alpha) { this.flashes.push({ t: clampT(at), c: color || "#FFFFFF", d: num(dur, 0.3), a: num(alpha, 1) }); return this; };
  FP.filter = function (from, to, css) { this.filters.push({ from: from, to: to, filter: css }); return this; };
  FP.vignette = function (from, to, amount) { this.vigs.push({ from: num(from, 0), to: to == null ? 1e9 : to, a: num(amount, 0.8) }); return this; };
  /** cartoon "BOOM" star burst (non-graphic) + shake at a frame point (0–1 fractions) */
  FP.boom = function (at, opts) {
    opts = opts || {};
    at = clampT(at);
    var Ww = this.Ww, cx = num(opts.x, 0.5) * Ww, cy = num(opts.y, 0.5) * 1000, r = num(opts.r, 180);
    var gB = g(this.topSvg, { display: "none" });
    var rnd = V.makeRand(Math.round(at * 1000) + 31), d = "";
    for (var i = 0; i < 14; i++) {
      var a0 = (i / 14) * 2 * PI, a1 = a0 + PI / 14, rr = r * (0.75 + rnd() * 0.5);
      d += (i ? " L" : "M") + P2(cx + Math.cos(a0) * rr, cy + Math.sin(a0) * rr) + " L" + P2(cx + Math.cos(a1) * rr * 0.5, cy + Math.sin(a1) * rr * 0.5);
    }
    svgEl("path", { d: d + "Z", fill: opts.color || GOLD, stroke: INK, "stroke-width": 8, "stroke-linejoin": "round" }, gB);
    svgEl("path", { d: d + "Z", fill: "#FFFFFF", transform: "translate(" + fx(cx) + "," + fx(cy) + ") scale(0.55) translate(" + fx(-cx) + "," + fx(-cy) + ")", opacity: 0.8 }, gB);
    if (opts.text !== false) {
      var tx = svgEl("text", { x: cx, y: cy + 22, "text-anchor": "middle", "font-size": r * 0.45, "font-weight": 900, "font-family": "Arial Black, Arial, sans-serif", fill: RED, stroke: INK, "stroke-width": 5, "paint-order": "stroke", transform: "rotate(-8 " + fx(cx) + " " + fx(cy) + ")" }, gB);
      tx.textContent = opts.text || "BOOM";
    }
    this.shake(at, num(opts.shake, 16), 0.45);
    this.flash(at, "#FFFFFF", 0.18, 0.5);
    this.fns.push(function (t) {
      var lt = t - at, on = lt >= 0 && lt < num(opts.dur, 0.7);
      setD(gB, on);
      if (on) setA(gB, "transform", "translate(" + fx(cx) + "," + fx(cy) + ") scale(" + fx((0.4 + 0.7 * EASE.boing(clamp(lt / 0.22, 0, 1))) * 100) / 100 + ") rotate(" + fx(lt * 30) + ") translate(" + fx(-cx) + "," + fx(-cy) + ")");
    });
    return this;
  };
  /** rubber stamp slamming onto the frame: "NO REPLY", "DENIED", "TOP SECRET" */
  FP.stamp = function (text, at, opts) {
    opts = opts || {};
    at = clampT(at);
    var f = this, tl = V.timeline();
    var st = el("div.ch-stamp", { parent: f.ui });
    st.style.left = pct(num(opts.x, 0.5)); st.style.top = pct(num(opts.y, 0.5));
    st.style.color = opts.color || RED; st.style.borderColor = opts.color || RED;
    st.style.setProperty("--rot", "0deg");
    var inn = el("div.ch-stamp-in", { parent: st });
    inn.appendChild(S.rich(text || ""));
    fitText(inn, { min: 18 });
    st.style.setProperty("--rot", fx(num(opts.rotate, -12)) + "deg");
    windowed(st, at, opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    tl.fromTo(st, { opacity: 0, scale: 2.6 }, { opacity: 0.92, scale: 1 }, { at: at, dur: 0.18, ease: "inCubic" });
    if (opts.until != null) tl.to(st, { opacity: 0 }, { at: clampT(opts.until), dur: 0.2 });
    this.shake(at + 0.16, 10, 0.3);
    return st;
  };

  // ───────────────────────── shot ─────────────────────────
  function Shot(film, loc, from, to, opts) {
    opts = opts || {};
    this.film = film; this.opts = opts;
    this.Ww = film.Ww; this.k = film.k; this.portrait = film.portrait; this.square = film.square; this.landscape = film.landscape;
    this.from = from == null || from <= 0 ? -1 : from;
    this.to = to == null ? 1e9 : to;
    this.g = g(film.shotsG, { display: "none", class: "ch-shot" });
    this.far = g(this.g);
    this.under = g(this.g);
    this.world = g(this.g);
    this.near = g(this.world);
    this.chars = g(this.world);
    this.wfx = g(this.world);
    this.over = g(this.g);
    this.html = el("div.ch-shtml", { parent: film.htmlLayer });
    this.html.style.display = "none";
    this.actors = []; this.fns = [];
    this.cam = new Cam(this);
    this.enter = opts.enter || "cut";
    this.location = locName(loc);
    this.vis = null;
    this.groundY = 760;
    drawLocation(this, this.location, opts);
    film.shots.push(this);
  }
  S.Shot = Shot;
  var SP = Shot.prototype;
  SP.character = function (spec, opts) { return new Actor(this, spec, opts); };
  SP.onFrame = function (f) { this.fns.push(f); return this; };
  SP.setVisible = function (v) {
    if (this.vis === v) return;
    this.vis = v;
    this.g.setAttribute("display", v ? "inline" : "none");
    this.html.style.display = v ? "block" : "none";
  };
  /** standard framings → { x, y, scale } (head centre, world units). kind: wide | medium | close | small ; side: left|center|right|0–1 */
  SP.frame = function (kind, side) {
    var Ww = this.Ww, P = this.portrait, Q = this.square;
    var sx = side === "left" ? (P ? 0.5 : Q ? 0.28 : 0.26) : side === "right" ? (P ? 0.5 : Q ? 0.72 : 0.74) : 0.5;
    if (typeof side === "number") sx = side;
    var f;
    switch (kind) {
      case "wide": f = { y: P ? 640 : 560, scale: P ? 0.78 : 0.82 }; break;
      case "close": f = { y: P ? 620 : 540, scale: P ? 1.7 : Q ? 1.8 : 2.0 }; break;
      case "small": f = { y: P ? 700 : 600, scale: P ? 0.62 : 0.66 }; break;
      default: f = { y: P ? 560 : 470, scale: P ? 1.1 : Q ? 1.22 : 1.3 };
    }
    f.x = Ww * sx;
    return f;
  };
  SP.update = function (t) {
    var c = this.cam.eval(t), Ww = this.Ww, i;
    setA(this.world, "transform", "translate(" + fx(Ww / 2 + c.ox) + "," + fx(500 + c.oy) + ") scale(" + fx(c.z * 1000) / 1000 + ") translate(" + fx(-c.x) + "," + fx(-c.y) + ")");
    var p = 0.3, zf = 1 + (c.z - 1) * p, xf = Ww / 2 + (c.x - Ww / 2) * p, yf = 500 + (c.y - 500) * p;
    setA(this.far, "transform", "translate(" + fx(Ww / 2 + c.ox) + "," + fx(500 + c.oy) + ") scale(" + fx(zf * 1000) / 1000 + ") translate(" + fx(-xf) + "," + fx(-yf) + ")");
    setA(this.over, "transform", c.ox || c.oy ? "translate(" + fx(c.ox * 0.5) + "," + fx(c.oy * 0.5) + ")" : "");
    var k = this.k;
    setS(this.html, "transform", "translate(" + fx((Ww / 2 + c.ox) * k) + "px," + fx((500 + c.oy) * k) + "px) scale(" + fx(c.z * 1000) / 1000 + ") translate(" + fx(-c.x * k) + "px," + fx(-c.y * k) + "px)");
    for (i = 0; i < this.actors.length; i++) this.actors[i].update(t);
    for (i = 0; i < this.fns.length; i++) this.fns[i](t);
  };

  // ───────────────────────── camera ─────────────────────────
  function Cam(shot) { this.sh = shot; this.base = { x: shot.Ww / 2, y: 500, z: 1 }; this.kf = []; this.shakes = []; this.drift = 1; this.dirty = true; }
  S.Cam = Cam;
  var CP = Cam.prototype;
  CP.set = function (o) { o = o || {}; if (o.x != null) this.base.x = num(o.x, this.base.x); if (o.y != null) this.base.y = num(o.y, this.base.y); if (o.zoom != null) this.base.z = num(o.zoom, 1); this.dirty = true; return this; };
  CP.to = function (o, at, dur, ease) { o = o || {}; this.kf.push({ t: clampT(at == null ? 0 : at), d: Math.max(0, num(dur, 0.8)), e: ease || "inOutCubic", x: o.x, y: o.y, z: o.zoom != null ? o.zoom : o.z }); this.dirty = true; return this; };
  CP.cut = function (o, at) { return this.to(o, at, 0); };
  CP.push = function (zoom, at, dur, o) { o = o || {}; o.zoom = zoom; return this.to(o, at, dur == null ? 2 : dur, "inOutSine"); };
  CP.focus = function (actor, at, dur, zoom, dy) { return this.to({ x: actor.x0, y: actor.y0 + num(dy, 80), zoom: zoom == null ? 1.4 : zoom }, at, dur == null ? 0.35 : dur, "boing"); };
  CP.shake = function (at, amp, dur) { this.shakes.push({ t: clampT(at), a: num(amp, 12), d: num(dur, 0.4) }); return this; };
  CP.compile = function () {
    this.kf.sort(function (a, b) { return a.t - b.t; });
    this.from = [];
    var c = { x: this.base.x, y: this.base.y, z: this.base.z };
    for (var i = 0; i < this.kf.length; i++) { this.from[i] = c; c = this.target(i, c); }
    this.dirty = false;
  };
  CP.target = function (i, c) { var k = this.kf[i]; return { x: k.x != null ? num(k.x, c.x) : c.x, y: k.y != null ? num(k.y, c.y) : c.y, z: k.z != null ? num(k.z, c.z) : c.z }; };
  CP.eval = function (t) {
    if (this.dirty) this.compile();
    var c = { x: this.base.x, y: this.base.y, z: this.base.z };
    for (var i = 0; i < this.kf.length; i++) {
      var k = this.kf[i];
      if (k.t > t) break;
      var f = this.from[i], tg = this.target(i, f), p = k.d <= 0 ? 1 : easeFn(k.e)(clamp((t - k.t) / k.d, 0, 1));
      c = { x: lerp(f.x, tg.x, p), y: lerp(f.y, tg.y, p), z: lerp(f.z, tg.z, p) };
    }
    var ox = 0, oy = 0;
    c.x += noise(t * 0.3, 11) * 2 * this.drift; c.y += noise(t * 0.26, 23) * 1.5 * this.drift;
    for (i = 0; i < this.shakes.length; i++) {
      var s = this.shakes[i], ls = t - s.t;
      if (ls < 0 || ls > s.d) continue;
      var amp = s.a * Math.pow(1 - ls / s.d, 1.4);
      ox += noise(ls * 30, 3 + i) * amp; oy += noise(ls * 33, 7 + i) * amp;
    }
    var sh = this.sh, le = t - sh.from;
    if (sh.from > 0 && le >= 0 && le < 0.35) {
      var en = sh.enter;
      if (en === "slide-left" || en === "slide-right") { var pw = EASE.whip(clamp(le / 0.28, 0, 1)); ox += (en === "slide-left" ? 1 : -1) * (1 - pw) * sh.Ww * 0.6; }
      else if (en === "zoom") c.z *= 1 + 0.3 * (1 - EASE.whip(clamp(le / 0.28, 0, 1)));
      else if (en === "drop") oy -= (1 - EASE.boing(clamp(le / 0.32, 0, 1))) * 260;
      else if (en === "rise") oy += (1 - EASE.whip(clamp(le / 0.28, 0, 1))) * 300;
    }
    c.ox = ox; c.oy = oy;
    return c;
  };

  // ───────────────────────── scenery helpers ─────────────────────────
  function rectFull(Ww, fill, extra) { return R(-80, -80, Ww + 160, 1160, fill, extra); }
  function gradDef(f, id, stops, x2, y2) {
    var lg = svgEl("linearGradient", { id: id, x1: 0, y1: 0, x2: x2 == null ? 0 : x2, y2: y2 == null ? 1 : y2 }, f.defs);
    stops.forEach(function (s) { svgEl("stop", { offset: s[0], "stop-color": s[1], "stop-opacity": s[2] == null ? 1 : s[2] }, lg); });
    return "url(#" + id + ")";
  }
  function cloud(x, y, s, col) {
    col = col || "#FFFFFF";
    return El(x, y, 70 * s, 32 * s, col) + C(x - 34 * s, y - 10 * s, 30 * s, col) + C(x + 4 * s, y - 24 * s, 38 * s, col) + C(x + 44 * s, y - 8 * s, 28 * s, col);
  }
  function cloudInk(x, y, s, col) {
    var d = "M" + P2(x - 70 * s, y + 10 * s) + " C" + P2(x - 80 * s, y - 30 * s) + " " + P2(x - 40 * s, y - 40 * s) + " " + P2(x - 30 * s, y - 24 * s) + " C" + P2(x - 20 * s, y - 70 * s) + " " + P2(x + 40 * s, y - 70 * s) + " " + P2(x + 44 * s, y - 30 * s) + " C" + P2(x + 80 * s, y - 36 * s) + " " + P2(x + 90 * s, y + 10 * s) + " " + P2(x + 60 * s, y + 14 * s) + " Z";
    return Pa(d, col || "#FFFFFF", inkA(4.5));
  }
  function skyline(x0, x1, base, col, seed, hMin, hMax, win) {
    var rnd = V.makeRand(seed), s = "", x = x0;
    while (x < x1) {
      var w = 50 + rnd() * 90, h = hMin + rnd() * (hMax - hMin);
      s += R(x, base - h, w, h + 40, col);
      if (rnd() < 0.3) s += R(x + w * 0.3, base - h - 26, w * 0.4, 28, col);
      if (win) for (var yy = base - h + 18; yy < base - 20; yy += 26) for (var xx = x + 10; xx < x + w - 14; xx += 22) if (rnd() < 0.5) s += R(xx, yy, 10, 14, win);
      x += w + 6 + rnd() * 18;
    }
    return s;
  }
  function mountains(x0, x1, base, col, snow, seed, hMin, hMax) {
    var rnd = V.makeRand(seed), s = "", x = x0 - 100, pts = [];
    while (x < x1 + 200) { var w = 180 + rnd() * 220, h = hMin + rnd() * (hMax - hMin); pts.push([x, w, h]); x += w * 0.9; }
    pts.forEach(function (p) {
      s += Pa("M" + P2(p[0] - p[1] / 2, base + 60) + " L" + P2(p[0], base - p[2]) + " L" + P2(p[0] + p[1] / 2, base + 60) + "Z", col, inkA(4));
      if (snow) s += Pa("M" + P2(p[0] - p[1] * 0.18, base - p[2] * 0.64) + " L" + P2(p[0], base - p[2]) + " L" + P2(p[0] + p[1] * 0.18, base - p[2] * 0.64) + " L" + P2(p[0] + p[1] * 0.08, base - p[2] * 0.56) + " L" + P2(p[0], base - p[2] * 0.62) + " L" + P2(p[0] - p[1] * 0.08, base - p[2] * 0.56) + "Z", snow);
    });
    return s;
  }
  function pine(x, y, s, col) {
    return Pa("M" + P2(x - 36 * s, y) + " L" + P2(x, y - 90 * s) + " L" + P2(x + 36 * s, y) + "Z M" + P2(x - 28 * s, y - 36 * s) + " L" + P2(x, y - 110 * s) + " L" + P2(x + 28 * s, y - 36 * s) + "Z", col, inkA(3.5)) + R(x - 6 * s, y, 12 * s, 20 * s, "#5A3A22", inkA(3));
  }
  function planeArt(kind, col) {
    col = col || "#3A3A44";
    if (kind === "bomber") return Pa("M-90,0 L-40,-10 L60,-8 L96,0 L60,8 L-40,10 Z", col, inkA(3.5)) + Pa("M-10,-6 L10,-70 L40,-70 L30,-6 Z M-10,6 L10,70 L40,70 L30,6 Z", col, inkA(3.5)) + Pa("M-80,-4 L-96,-34 L-72,-34 L-60,-6 Z", col, inkA(3)) + C(22, -70, 10, INK) + C(22, 70, 10, INK);
    return Pa("M-56,0 L-20,-9 L52,-7 L70,0 L52,7 L-20,9 Z", col, inkA(3.5)) + Pa("M0,-4 L22,-56 L40,-56 L26,-4 Z M0,4 L22,56 L40,56 L26,4 Z", col, inkA(3.5)) + Pa("M-50,-3 L-64,-28 L-44,-28 L-34,-4 Z", col, inkA(3)) + C(70, 0, 9, INK);
  }
  function shipArt(col, big) {
    col = col || "#4A4A58";
    var s = Pa("M-140,0 L-120,46 L120,46 L150,0 Z", col, inkA(4)) + R(-70, -36, 110, 38, shade(col, 0.15), inkA(3.5)) + R(-30, -66, 40, 32, shade(col, 0.25), inkA(3.5)) + R(-10, -100, 14, 36, INK);
    if (big) s += R(60, -24, 40, 26, shade(col, 0.15), inkA(3)) + Pa("M70,-12 L130,-12", "none", inkA(5));
    return s;
  }
  function tankArt(col) {
    col = col || "#5E6B4A";
    return Pa("M-80,20 L-60,40 L60,40 L80,20 L80,0 L-80,0 Z", shade(col, -0.25), inkA(3.5)) + R(-66, -22, 132, 26, col, inkA(3.5) + ' rx="4"') + R(-30, -48, 60, 30, shade(col, 0.1), inkA(3.5) + ' rx="6"') + Pa("M20,-36 L100,-40", "none", inkA(7)) + C(-56, 20, 11, INK) + C(-28, 24, 11, INK) + C(0, 24, 11, INK) + C(28, 24, 11, INK) + C(56, 20, 11, INK);
  }
  function soldierIcon(col) { return C(0, -34, 20, col, inkA(3)) + Pa("M-24,-30 C-24,-52 24,-52 24,-30 Z", INK) + Pa("M-18,-10 L18,-10 L22,34 L-22,34 Z", col, inkA(3)); }

  var LOCATIONS = {};
  function L(name, fn) { LOCATIONS[name] = fn; }
  function sky(f, Ww, under, top, bottom, id) {
    under.innerHTML += rectFull(Ww, gradDef(f, nid(id || "sk"), [[0, top], [1, bottom]]));
  }
  function ground(Ww, y, col, extra) { return R(-80, y, Ww + 160, 1100 - y, col) + (extra || ""); }
  function addAnim(sh, fn) { sh.fns.push(fn); }
  function wavyPath(y, Ww, amp, t, n) {
    var d = "M-80," + fx(y + Math.sin(t) * amp);
    for (var x = -80; x <= Ww + 80; x += 40) d += " L" + P2(x, y + Math.sin(t + x / 60) * amp);
    return d + " L" + fx(Ww + 80) + ",1100 L-80,1100 Z";
  }

  L("war-room", function (sh, o) {
    var f = sh.film, Ww = sh.Ww, P = sh.portrait;
    var s = rectFull(Ww, "#6B4A2E");
    for (var x = -40; x < Ww + 60; x += 140) s += R(x, -40, 120, 1100, "#7A5636") + R(x + 6, -40, 4, 1100, "#5A3A20", ' opacity=".5"');
    s += R(-80, 560, Ww + 160, 30, "#4A2E18") + R(-80, 580, Ww + 160, 520, "#3D2A1B");
    // wall map
    var mw = P ? Ww * 0.9 : Math.min(Ww * 0.52, 900), mx = P ? Ww * 0.05 : Ww * 0.5 - mw / 2 + (o.mapSide === "left" ? -Ww * 0.2 : o.mapSide === "right" ? Ww * 0.2 : 0), my = P ? 90 : 70, mh = mw * 0.68;
    s += R(mx - 14, my - 14, mw + 28, mh + 28, "#3A2A1B", inkA(4));
    sh.under.innerHTML = s;
    var mapG = g(sh.under);
    sh.wallMap = new MapView(sh, mapG, { x: mx, y: my, w: mw, h: mh, muted: true });
    // lamp cone
    var s2 = Pa("M" + P2(Ww / 2, -40) + " L" + P2(Ww / 2 - Ww * 0.55, 1000) + " L" + P2(Ww / 2 + Ww * 0.55, 1000) + "Z", "#FFE9B0", ' opacity=".10"');
    s2 += Pa("M" + P2(Ww / 2 - 70, 0) + " L" + P2(Ww / 2 + 70, 0) + " L" + P2(Ww / 2 + 40, -60) + " L" + P2(Ww / 2 - 40, -60) + "Z", "#2E7A5A", inkA(4));
    // map table (foreground)
    var ty = P ? 820 : 760;
    s2 += Pa("M" + P2(-80, ty + 40) + " L" + P2(Ww + 80, ty + 40) + " L" + P2(Ww + 80, 1100) + " L" + P2(-80, 1100) + "Z", "#5A3A20");
    s2 += Pa("M" + P2(-80, ty) + " L" + P2(Ww + 80, ty) + " L" + P2(Ww + 80, ty + 46) + " L" + P2(-80, ty + 46) + "Z", "#7A5636", inkA(4));
    s2 += Pa("M" + P2(Ww * 0.1, ty + 4) + " L" + P2(Ww * 0.9, ty + 4) + " L" + P2(Ww * 0.97, ty + 44) + " L" + P2(Ww * 0.03, ty + 44) + "Z", "#E7D8B0", inkA(3));
    s2 += Pa("M" + P2(Ww * 0.2, ty + 10) + " L" + P2(Ww * 0.4, ty + 40) + " M" + P2(Ww * 0.5, ty + 8) + " L" + P2(Ww * 0.7, ty + 40), "none", ' stroke="' + RED + '" stroke-width="4" stroke-dasharray="8 6"');
    for (var i = 0; i < 5; i++) s2 += Pa("M" + P2(Ww * (0.15 + i * 0.17), ty + 22) + " l-10,-6 l0,12 Z", i % 2 ? RED : BLUE, inkA(2.5));
    sh.near.innerHTML = s2;
    sh.groundY = ty;
    // flags in stands
    if (o.nation && !P) { sh.flag(o.nation, { x: Ww * 0.08, y: 560, w: 150, h: 100, pole: 380 }); sh.flag(o.nation2 || o.nation, { x: Ww * 0.92, y: 560, w: 150, h: 100, pole: 380 }); }
  });
  L("trench", function (sh, o) {
    var f = sh.film, Ww = sh.Ww, P = sh.portrait;
    sky(f, Ww, sh.far, o.night ? "#1F2740" : "#C9D9E8", o.night ? "#3A4260" : "#EAE3D0");
    var s = "";
    [[0.1, 160, 1.1], [0.5, 110, 0.8], [0.85, 190, 1.3]].forEach(function (c) { s += cloudInk(Ww * c[0], c[1], c[2], o.night ? "#5A6280" : "#FFFFFF"); });
    s += Pa("M-80,560 Q" + P2(Ww * 0.2, 500) + " " + P2(Ww * 0.45, 540) + " T" + P2(Ww + 80, 530) + " L" + P2(Ww + 80, 1100) + " L-80,1100Z", o.night ? "#3B3A3A" : "#8E8C7A");
    s += Pa("M-80,620 Q" + P2(Ww * 0.3, 580) + " " + P2(Ww * 0.6, 610) + " T" + P2(Ww + 80, 600) + " L" + P2(Ww + 80, 1100) + " L-80,1100Z", o.night ? "#2E2C2A" : "#75715C");
    // far posts + wire
    for (var x = Ww * 0.05; x < Ww; x += Ww * 0.18) s += Pa("M" + P2(x, 600) + " L" + P2(x + 8, 540), "none", inkA(6));
    s += Pa("M-80,556 Q" + P2(Ww * 0.25, 575) + " " + P2(Ww * 0.5, 552) + " T" + P2(Ww + 80, 556), "none", inkA(3));
    sh.far.innerHTML += s;
    var ty = P ? 800 : 740;
    var s2 = Pa("M-80," + ty + " Q" + P2(Ww * 0.2, ty - 30) + " " + P2(Ww * 0.45, ty + 10) + " T" + P2(Ww + 80, ty) + " L" + P2(Ww + 80, 1100) + " L-80,1100Z", "#6E4A2C", inkA(5));
    // sandbags
    var rnd = V.makeRand(5);
    for (var row = 0; row < 2; row++) for (var bx = -60 + row * 60; bx < Ww + 80; bx += 118) s2 += Pa("M" + P2(bx, ty + 10 - row * 34) + " C" + P2(bx + 10, ty - 30 - row * 34) + " " + P2(bx + 110, ty - 30 - row * 34) + " " + P2(bx + 120, ty + 10 - row * 34) + " Z", rnd() < 0.5 ? "#A58C5E" : "#B59A6A", inkA(4));
    // planks
    for (var px = 20; px < Ww; px += 160) s2 += R(px, ty + 60, 26, 300, "#5A3A20", inkA(3));
    sh.near.innerHTML = s2;
    sh.groundY = ty + 20;
    sh.smoke(0, 1e9, { count: 4, y: 520 });
  });
  L("airfield", function (sh, o) {
    var f = sh.film, Ww = sh.Ww, P = sh.portrait;
    sky(f, Ww, sh.far, "#5FA8E0", "#C8E8F8");
    var s = "";
    [[0.12, 150, 1.2], [0.45, 90, 0.8], [0.78, 180, 1.4], [0.95, 70, 0.7]].forEach(function (c) { s += cloudInk(Ww * c[0], c[1], c[2]); });
    s += R(-80, 560, Ww + 160, 600, "#7DB36A");
    s += Pa("M" + P2(Ww * 0.55, 560) + " L" + P2(Ww * 0.55 + 240, 560) + " L" + P2(Ww * 0.55 + 240, 470) + " Q" + P2(Ww * 0.55 + 120, 400) + " " + P2(Ww * 0.55, 470) + " Z", "#8A8F8A", inkA(4));
    s += R(Ww * 0.55 + 80, 500, 80, 60, "#4A4F4A", inkA(3));
    s += Pa("M" + P2(Ww * 0.2, 560) + " L" + P2(Ww * 0.2, 430), "none", inkA(5)) + Pa("M" + P2(Ww * 0.2, 434) + " L" + P2(Ww * 0.2 + 90, 448) + " L" + P2(Ww * 0.2 + 80, 470) + " L" + P2(Ww * 0.2, 462) + " Z", "#F2B134", inkA(3));
    sh.far.innerHTML += s;
    var ty = P ? 820 : 760;
    var s2 = Pa("M" + P2(-80, ty) + " L" + P2(Ww + 80, ty) + " L" + P2(Ww + 80, 1100) + " L" + P2(-80, 1100) + "Z", "#6E6E6E");
    for (var x = -40; x < Ww + 80; x += 160) s2 += R(x, ty + 70, 90, 16, "#FFFFFF", ' opacity=".9"');
    s2 += R(-80, ty - 6, Ww + 160, 12, "#5A5A5A");
    sh.near.innerHTML = s2;
    sh.groundY = ty + 10;
    sh.planes(0, 1e9, { count: o.planes != null ? o.planes : 3, y: 150, kind: "fighter", speed: 260, layer: "far" });
  });
  L("city", function (sh, o) {
    var f = sh.film, Ww = sh.Ww, P = sh.portrait;
    var night = o.night !== false;
    sky(f, Ww, sh.far, night ? "#1A2140" : "#D7E7F2", night ? "#4A3A66" : "#F3E6D2");
    var s = "";
    if (night) { var rnd = V.makeRand(9); for (var i = 0; i < 40; i++) s += C(rnd() * Ww, rnd() * 420, 2 + rnd() * 2, "#FFFFFF", ' opacity=".8"'); s += C(Ww * 0.8, 120, 46, "#FFF4C8", inkA(3)); }
    else s += C(Ww * 0.8, 130, 56, "#FFE89A", inkA(3));
    s += skyline(-60, Ww + 60, 600, night ? "#2B2A3E" : "#9AA3B5", 11, 160, 380, night ? "#FFD98A" : null);
    s += skyline(-60, Ww + 60, 640, night ? "#1C1B2B" : "#6E7788", 17, 100, 260, night ? "#FFE3A5" : null);
    sh.far.innerHTML += s;
    if (night) {
      var beams = [0.22, 0.68].map(function (px, i) { return { p: svgEl("path", { fill: "#FFFFFF", opacity: 0.16 }, sh.far), x: px * Ww, i: i }; });
      addAnim(sh, function (t) { beams.forEach(function (b) { var a = Math.sin(t * 0.5 + b.i * 1.7) * 0.5; setA(b.p, "d", "M" + P2(b.x, 650) + " L" + P2(b.x + Math.sin(a - 0.08) * 1400, 650 - Math.cos(a - 0.08) * 1400) + " L" + P2(b.x + Math.sin(a + 0.08) * 1400, 650 - Math.cos(a + 0.08) * 1400) + "Z"); }); });
    }
    var ty = P ? 820 : 760;
    var s2 = R(-80, ty, Ww + 160, 500, night ? "#2A2733" : "#8E8E96") + R(-80, ty - 8, Ww + 160, 14, night ? "#3A3744" : "#6E6E78");
    for (var x = -40; x < Ww + 80; x += 130) s2 += R(x, ty + 40, 70, 10, night ? "#4A4756" : "#D6D6DC");
    sh.near.innerHTML = s2;
    sh.groundY = ty + 10;
    if (o.planes !== false) sh.planes(0, 1e9, { count: 3, y: 120, kind: "bomber", speed: 150, layer: "far", color: night ? "#0E0E18" : "#3A3A44" });
  });
  L("office", function (sh, o) {
    var f = sh.film, Ww = sh.Ww, P = sh.portrait;
    var s = rectFull(Ww, "#B9C7A8");
    for (var x = -80; x < Ww + 80; x += 60) s += R(x, -40, 24, 1100, "#AEBD9D");
    s += R(-80, 560, Ww + 160, 24, "#5A3A20") + R(-80, 580, Ww + 160, 520, "#8A5A34");
    // window
    var wx = P ? Ww * 0.12 : Ww * 0.34, ww = P ? Ww * 0.76 : Ww * 0.32, wy = 60, wh = 400;
    s += R(wx - 16, wy - 16, ww + 32, wh + 32, "#F3EAD6", inkA(4)) + R(wx, wy, ww, wh, "#BFE3F5");
    s += cloud(wx + ww * 0.3, wy + 110, 0.8) + cloud(wx + ww * 0.75, wy + 220, 0.6);
    s += R(wx + ww / 2 - 6, wy, 12, wh, "#F3EAD6") + R(wx, wy + wh / 2 - 6, ww, 12, "#F3EAD6");
    s += Pa("M" + P2(wx - 30, wy - 30) + " Q" + P2(wx + 60, wy + wh / 2) + " " + P2(wx - 10, wy + wh + 10) + " L" + P2(wx - 50, wy + wh + 10) + " L" + P2(wx - 50, wy - 30) + "Z", "#8E2E3A", inkA(4));
    s += Pa("M" + P2(wx + ww + 30, wy - 30) + " Q" + P2(wx + ww - 60, wy + wh / 2) + " " + P2(wx + ww + 10, wy + wh + 10) + " L" + P2(wx + ww + 50, wy + wh + 10) + " L" + P2(wx + ww + 50, wy - 30) + "Z", "#8E2E3A", inkA(4));
    sh.under.innerHTML = s;
    if (!P) {
      sh.flag(o.nation || "neutral", { x: Ww * 0.1, y: 560, w: 140, h: 92, pole: 360 });
      if (o.nation2) sh.flag(o.nation2, { x: Ww * 0.9, y: 560, w: 140, h: 92, pole: 360 });
    }
    var ty = P ? 820 : 740;
    var s2 = Pa("M" + P2(-80, ty) + " L" + P2(Ww + 80, ty) + " L" + P2(Ww + 80, ty + 50) + " L" + P2(-80, ty + 50) + "Z", "#5A3A20", inkA(4)) + R(-80, ty + 50, Ww + 160, 500, "#3E2814");
    // desk clutter: papers, inkwell, telegram
    s2 += Pa("M" + P2(Ww * 0.12, ty + 8) + " L" + P2(Ww * 0.12 + 150, ty + 2) + " L" + P2(Ww * 0.12 + 160, ty + 40) + " L" + P2(Ww * 0.12 + 10, ty + 46) + "Z", "#FFFBEF", inkA(3));
    s2 += Pa("M" + P2(Ww * 0.14, ty + 18) + " L" + P2(Ww * 0.14 + 90, ty + 14), "none", inkA(2.5) + ' opacity=".5"');
    s2 += Pa("M" + P2(Ww * 0.72, ty + 10) + " L" + P2(Ww * 0.72 + 140, ty + 6) + " L" + P2(Ww * 0.72 + 150, ty + 44) + " L" + P2(Ww * 0.72 + 12, ty + 48) + "Z", "#F7E7B3", inkA(3)) + R(Ww * 0.72 + 100, ty + 14, 30, 10, RED);
    s2 += R(Ww * 0.5 - 20, ty - 20, 40, 34, INK, ' rx="6"') + Pa("M" + P2(Ww * 0.5 + 10, ty - 24) + " L" + P2(Ww * 0.5 + 60, ty - 70), "none", inkA(4));
    sh.near.innerHTML = s2;
    sh.groundY = ty;
  });
  L("alps", function (sh, o) {
    var f = sh.film, Ww = sh.Ww, P = sh.portrait;
    sky(f, Ww, sh.far, "#A8CFEF", "#EAF2F8");
    var s = mountains(0, Ww, 560, "#8FA7C2", "#FFFFFF", 21, 260, 460) + mountains(0, Ww, 600, "#6F86A3", "#FFFFFF", 33, 180, 320);
    s += R(-80, 600, Ww + 160, 600, "#F4F7FA");
    var rnd = V.makeRand(3);
    for (var x = -20; x < Ww + 40; x += 90 + rnd() * 80) s += pine(x, 640 + rnd() * 30, 0.7 + rnd() * 0.4, "#2E6B4A");
    sh.far.innerHTML += s;
    var ty = P ? 820 : 760;
    var s2 = Pa("M-80," + ty + " Q" + P2(Ww * 0.3, ty - 30) + " " + P2(Ww * 0.6, ty + 6) + " T" + P2(Ww + 80, ty - 10) + " L" + P2(Ww + 80, 1100) + " L-80,1100Z", "#FFFFFF", inkA(4));
    // border barrier
    var bx = P ? Ww * 0.5 : Ww * 0.5, by = ty - 10;
    s2 += Pa("M" + P2(bx - 170, by) + " L" + P2(bx - 170, by - 110), "none", inkA(6)) + Pa("M" + P2(bx + 170, by) + " L" + P2(bx + 170, by - 110), "none", inkA(6));
    for (var i = 0; i < 8; i++) s2 += R(bx - 170 + i * 42.5, by - 96, 42.5, 22, i % 2 ? "#FFFFFF" : RED);
    s2 += R(bx - 170, by - 96, 340, 22, "none", inkA(4));
    s2 += Pa("M" + P2(bx, by - 150) + " L" + P2(bx, by - 100), "none", inkA(5)) + R(bx - 70, by - 200, 140, 52, "#FFFFFF", inkA(4) + ' rx="6"');
    var tx = svgEl("text", { x: bx, y: by - 162, "text-anchor": "middle", "font-size": 30, "font-weight": 900, "font-family": "Arial Black, Arial, sans-serif", fill: INK }, sh.near);
    sh.near.innerHTML = s2;
    tx.textContent = (o.sign || "BORDER").toUpperCase().slice(0, 10);
    sh.near.appendChild(tx);
    sh.groundY = ty;
    sh.snow(0, 1e9, { count: P ? 22 : 36 });
  });
  L("sea", function (sh, o) {
    var f = sh.film, Ww = sh.Ww, P = sh.portrait;
    sky(f, Ww, sh.far, "#7FBBE6", "#DDEFF9");
    var s = cloudInk(Ww * 0.2, 150, 1.1) + cloudInk(Ww * 0.7, 110, 0.9) + C(Ww * 0.82, 160, 50, "#FFE89A", inkA(3));
    s += R(-80, 520, Ww + 160, 600, "#2F6FA8");
    sh.far.innerHTML += s;
    var shipG = g(sh.far);
    var ships = [0.25, 0.7].map(function (px, i) { var gg = g(shipG, { transform: "translate(" + fx(px * Ww) + ",520) scale(0.9)" }); gg.innerHTML = shipArt(i ? "#3A3A48" : "#5A5A68", i === 0); return { g: gg, x: px * Ww, i: i }; });
    var waves = [0, 1, 2].map(function (i) { return svgEl("path", { fill: i === 2 ? "#1F5A8E" : i === 1 ? "#2F6FA8" : "#3F82BD", stroke: "#FFFFFF", "stroke-width": 3, "stroke-opacity": 0.5 }, sh.near); });
    sh.groundY = P ? 820 : 760;
    addAnim(sh, function (t) {
      ships.forEach(function (sp) { setA(sp.g, "transform", "translate(" + fx(sp.x + Math.sin(t * 0.3 + sp.i) * 30) + "," + fx(520 + Math.sin(t * 1.4 + sp.i * 2) * 6) + ") rotate(" + fx(Math.sin(t * 1.2 + sp.i) * 2) + ") scale(0.9)"); });
      waves.forEach(function (w, i) { setA(w, "d", wavyPath(640 + i * 90 + (i === 2 ? 60 : 0), Ww, 10 + i * 4, t * (1.2 + i * 0.3) + i)); });
    });
    sh.birds(0, 1e9, { y: 220, count: 3 });
  });
  L("map", function (sh, o) {
    var Ww = sh.Ww;
    sh.under.innerHTML = rectFull(Ww, "#E9DCBB");
    var P = sh.portrait, mw, mh, mx, my;
    if (P) { mw = Ww * 1.05; mh = mw * 0.76; mx = -Ww * 0.025; my = 500 - mh / 2 + 40; }
    else { mh = 1000 * 1.02; mw = mh / 0.76; mx = Ww / 2 - mw / 2 + (o.mapShift || 0) * Ww; my = -10; }
    var mg = g(sh.under);
    sh.map0 = new MapView(sh, mg, { x: mx, y: my, w: mw, h: mh, grid: true });
    sh.groundY = 900;
  });
  L("plain", function (sh, o) {
    var Ww = sh.Ww, col = o.color || CREAM;
    var s = rectFull(Ww, col);
    if (o.nation) {
      var N = NATIONS[nationId(o.nation)], cols = N.flag.c || [N.accent, "#FFFFFF", N.accent];
      if (N.flag.kind === "disc" || N.flag.kind === "swiss" || N.flag.kind === "white") cols = [N.accent, "#FFFFFF", N.accent];
      if (N.flag.kind === "uk") cols = ["#012169", "#FFFFFF", "#C8102E"];
      if (N.flag.kind === "usa") cols = ["#B22234", "#FFFFFF", "#3C3B6E"];
      if (N.flag.kind === "ussr") cols = ["#CC0000", "#FFD700", "#CC0000"];
      if (N.flag.kind === "cross") cols = [N.flag.bg, N.flag.cross, N.flag.bg];
      var k = 0;
      for (var x = -1200; x < Ww + 400; x += 120) { s += Pa("M" + P2(x, -80) + " L" + P2(x + 120, -80) + " L" + P2(x + 120 + 500, 1100) + " L" + P2(x + 500, 1100) + "Z", cols[k % 3], ' opacity=".14"'); k++; }
    } else {
      var rnd = V.makeRand(4), dots = "";
      for (var yy = 20; yy < 1000; yy += 44) for (var xx = 20 + (yy % 88 ? 22 : 0); xx < Ww; xx += 44) dots += C(xx, yy, 4, INK);
      s += '<g opacity=".06">' + dots + "</g>";
    }
    sh.under.innerHTML = s;
    sh.groundY = sh.portrait ? 860 : 820;
  });
  L("parade", function (sh, o) {
    var f = sh.film, Ww = sh.Ww, P = sh.portrait;
    sky(f, Ww, sh.far, "#9ED0F0", "#E8F3FA");
    var s = cloudInk(Ww * 0.3, 120, 1) + cloudInk(Ww * 0.8, 90, 0.8);
    var rnd = V.makeRand(8), x = -60;
    while (x < Ww + 80) {
      var w = 160 + rnd() * 140, h = 300 + rnd() * 200, col = ["#D9B38C", "#C98E6E", "#E8C9A0", "#B7A78C"][Math.floor(rnd() * 4)];
      s += R(x, 620 - h, w, h + 20, col, inkA(4));
      s += Pa("M" + P2(x - 8, 620 - h) + " L" + P2(x + w / 2, 620 - h - 50) + " L" + P2(x + w + 8, 620 - h) + "Z", "#8E4A3A", inkA(4));
      for (var yy = 640 - h + 30; yy < 590; yy += 70) for (var xx = x + 24; xx < x + w - 40; xx += 60) s += R(xx, yy, 30, 40, "#7FB0D8", inkA(3));
      x += w + 10;
    }
    s += R(-80, 620, Ww + 160, 600, "#9A9AA2");
    sh.far.innerHTML += s;
    // bunting
    var bunt = g(sh.under);
    var d = "", flags = "";
    for (var k = 0; k < 2; k++) {
      var y0 = 140 + k * 120, sag = 80;
      d += "M-80," + y0 + " Q" + P2(Ww / 2, y0 + sag) + " " + P2(Ww + 80, y0);
      for (var q = 0.04; q < 1; q += 0.075) {
        var px = -80 + q * (Ww + 160), py = (1 - q) * (1 - q) * y0 + 2 * (1 - q) * q * (y0 + sag) + q * q * y0;
        flags += Pa("M" + P2(px - 16, py) + " L" + P2(px + 16, py) + " L" + P2(px, py + 36) + "Z", [RED, "#FFFFFF", BLUE, GOLD][Math.floor(q * 40) % 4], inkA(2.5));
      }
    }
    bunt.innerHTML = Pa(d, "none", inkA(3)) + flags;
    var ty = P ? 820 : 760;
    sh.near.innerHTML = R(-80, ty, Ww + 160, 500, "#7E7E86") + R(-80, ty - 10, Ww + 160, 16, "#D6D6DC", inkA(3));
    sh.groundY = ty + 10;
  });
  L("field", function (sh, o) {
    var f = sh.film, Ww = sh.Ww, P = sh.portrait;
    sky(f, Ww, sh.far, "#F2A86A", "#FBE3C4");
    var s = C(Ww * 0.62, 400, 90, "#FFE1A0", inkA(0)) + cloudInk(Ww * 0.2, 180, 1.2, "#FFD9C0") + cloudInk(Ww * 0.85, 240, 0.9, "#FFD9C0");
    s += Pa("M-80,540 Q" + P2(Ww * 0.25, 470) + " " + P2(Ww * 0.5, 520) + " T" + P2(Ww + 80, 500) + " L" + P2(Ww + 80, 1100) + " L-80,1100Z", "#9BB16A");
    s += Pa("M-80,620 Q" + P2(Ww * 0.35, 560) + " " + P2(Ww * 0.7, 610) + " T" + P2(Ww + 80, 590) + " L" + P2(Ww + 80, 1100) + " L-80,1100Z", "#7E9A52");
    // lone tree
    var tx = P ? Ww * 0.78 : Ww * 0.8;
    s += Pa("M" + P2(tx - 14, 600) + " L" + P2(tx - 6, 470) + " L" + P2(tx + 6, 470) + " L" + P2(tx + 14, 600) + "Z", "#5A3A22", inkA(3.5));
    s += C(tx, 440, 70, "#5E8C45", inkA(4)) + C(tx - 50, 470, 44, "#5E8C45", inkA(4)) + C(tx + 52, 468, 46, "#5E8C45", inkA(4)) + C(tx + 10, 400, 46, "#6E9C50", inkA(4));
    sh.far.innerHTML += s;
    var ty = P ? 820 : 760;
    var s2 = Pa("M-80," + ty + " Q" + P2(Ww * 0.3, ty - 24) + " " + P2(Ww * 0.6, ty + 4) + " T" + P2(Ww + 80, ty - 6) + " L" + P2(Ww + 80, 1100) + " L-80,1100Z", "#6E8A48");
    var rnd = V.makeRand(12);
    for (var i = 0; i < 26; i++) { var px = rnd() * Ww, py = ty + 20 + rnd() * 200; s2 += Pa("M" + P2(px, py) + " L" + P2(px, py - 40), "none", ' stroke="#4E6A30" stroke-width="3"') + C(px, py - 44, 9, RED, inkA(2.5)) + C(px, py - 44, 3, INK); }
    sh.near.innerHTML = s2;
    sh.groundY = ty;
    sh.birds(0, 1e9, { y: 260, count: 4 });
  });
  var LOC_ALIASES = { hq: "war-room", bunker: "war-room", "map-room": "war-room", warroom: "war-room", command: "war-room", front: "trench", trenches: "trench", battlefield: "trench", "no-mans-land": "trench", airbase: "airfield", runway: "airfield", sky: "airfield", "air": "airfield", town: "city", skyline: "city", bombing: "city", "night-city": "city", embassy: "office", desk: "office", ministry: "office", "diplomatic-office": "office", palace: "office", mountains: "alps", border: "alps", snow: "alps", switzerland: "alps", ocean: "sea", navy: "sea", harbour: "sea", harbor: "sea", atlantic: "sea", channel: "sea", europe: "map", parchment: "map", studio: "plain", blank: "plain", flat: "plain", street: "parade", square: "parade", celebration: "parade", victory: "parade", meadow: "field", sunset: "field", poppies: "field", aftermath: "field", memorial: "field" };
  function locName(n) { n = str(n).toLowerCase().trim(); if (LOCATIONS[n]) return n; return LOC_ALIASES[n] || "plain"; }
  S.LOCATIONS = LOCATIONS;
  S.locations = Object.keys(LOCATIONS);
  function drawLocation(sh, name, opts) {
    try { LOCATIONS[name](sh, opts || {}); }
    catch (e) { V.error("chibi-history location " + name + ": " + (e && e.message)); try { sh.under.innerHTML = rectFull(sh.Ww, CREAM); } catch (e2) {} }
  }

  // ───────────────────────── world props & effects ─────────────────────────
  /** waving flag. opts: { x, y (top of pole / flag corner), w, h, pole (length, 0 = none), layer, wave } */
  SP.flag = function (nation, opts) {
    opts = opts || {};
    var lay = opts.layer === "far" ? this.far : opts.layer === "near" ? this.near : opts.layer === "over" ? this.over : this.under;
    var x = num(opts.x, this.Ww / 2), y = num(opts.y, 300), w = num(opts.w, 160), h = num(opts.h, 104), pole = num(opts.pole, 0);
    var G = g(lay, { transform: "translate(" + fx(x) + "," + fx(y) + ")" });
    if (pole) {
      svgEl("path", { d: "M0,0 L0," + fx(pole), stroke: INK, "stroke-width": 10, "stroke-linecap": "round" }, G);
      svgEl("path", { d: "M0,0 L0," + fx(pole), stroke: "#9A8A6A", "stroke-width": 5, "stroke-linecap": "round" }, G);
      svgEl("circle", { cx: 0, cy: -4, r: 9, fill: GOLD, stroke: INK, "stroke-width": 3 }, G);
      if (opts.base !== false) svgEl("path", { d: "M-34," + fx(pole) + " L34," + fx(pole) + " L22," + fx(pole - 14) + " L-22," + fx(pole - 14) + "Z", fill: INK }, G);
    }
    var fg = g(G, { transform: "translate(4,2)" });
    var cid = nid("fl");
    var cp = svgEl("clipPath", { id: cid }, fg);
    var clip = svgEl("path", { d: "M0,0 L" + w + ",0 L" + w + "," + h + " L0," + h + "Z" }, cp);
    var art = g(fg, { "clip-path": "url(#" + cid + ")" });
    art.innerHTML = flagArt(nation, w + 14, h + 10);
    svgEl("path", { d: "M0,0 L" + w + ",0 L" + w + "," + h + " L0," + h + "Z", fill: "none" }, art);
    var outline = svgEl("path", { fill: "none", stroke: INK, "stroke-width": 4, "stroke-linejoin": "round" }, fg);
    var shadeP = svgEl("path", { fill: INK, opacity: 0.12 }, fg);
    var amp = num(opts.wave, 1) * h * 0.06, ph = (x + y) * 0.01, self = this;
    this.fns.push(function (t) {
      var d = "M0,0", n = 5, i, px, py, tt = t * 5 + ph;
      for (i = 1; i <= n; i++) { px = (w * i) / n; py = Math.sin(tt + i * 1.1) * amp * (i / n); d += " L" + P2(px, py); }
      for (i = n; i >= 0; i--) { px = (w * i) / n; py = h + Math.sin(tt + i * 1.1 + 0.6) * amp * (i / n); d += " L" + P2(px, py); }
      d += "Z";
      setA(clip, "d", d); setA(outline, "d", d);
      var sd = "M" + P2(w * 0.4, Math.sin(tt + 2.2) * amp * 0.4) + " L" + P2(w * 0.6, Math.sin(tt + 3.3) * amp * 0.6) + " L" + P2(w * 0.6, h + Math.sin(tt + 3.9) * amp * 0.6) + " L" + P2(w * 0.4, h + Math.sin(tt + 2.8) * amp * 0.4) + "Z";
      setA(shadeP, "d", sd);
    });
    return G;
  };
  /** planes crossing the frame. opts: { count, y, kind: fighter|bomber, speed (units/s), dir: 1|-1, layer, color, scale } */
  SP.planes = function (from, to, opts) {
    opts = opts || {};
    var lay = opts.layer === "far" ? this.far : opts.layer === "over" ? this.over : this.wfx;
    var Ww = this.Ww, n = clamp(Math.round(num(opts.count, 3)), 1, 12), dir = opts.dir === -1 || opts.dir === "left" ? -1 : 1, sp = num(opts.speed, 240), sc = num(opts.scale, opts.kind === "bomber" ? 0.8 : 0.7);
    var rnd = V.makeRand(num(opts.seed, 77) + n);
    var list = [];
    for (var i = 0; i < n; i++) {
      var G = g(lay, { display: "none" });
      var body = g(G);
      body.innerHTML = planeArt(opts.kind, opts.color);
      var prop = svgEl("ellipse", { cx: opts.kind === "bomber" ? 22 : 70, cy: 0, rx: 4, ry: 34, fill: INK, opacity: 0.5 }, body);
      list.push({ g: G, prop: prop, y: num(opts.y, 160) + (rnd() - 0.5) * 120, off: rnd() * (Ww + 400), s: sc * (0.8 + rnd() * 0.4), ph: rnd() * 6 });
    }
    from = from == null ? 0 : from; to = to == null ? 1e9 : to;
    this.fns.push(function (t) {
      var on = t >= from && t < to;
      list.forEach(function (p, i) {
        setD(p.g, on);
        if (!on) return;
        var span = Ww + 500, x = ((t * sp + p.off) % span) - 250;
        if (dir < 0) x = Ww - x;
        setA(p.g, "transform", "translate(" + fx(x) + "," + fx(p.y + Math.sin(t * 1.6 + p.ph) * 10) + ") scale(" + fx(dir * p.s * 100) / 100 + "," + fx(p.s * 100) / 100 + ") rotate(" + fx(Math.sin(t * 1.1 + p.ph) * 3) + ")");
        setA(p.prop, "transform", "scale(1," + fx((0.2 + Math.abs(Math.sin(t * 40 + i)) * 0.8) * 100) / 100 + ")");
      });
    });
    return this;
  };
  /** a flying letter / telegram from a → b (world coords). opts: { dur, kind: letter|telegram, until, stamp: "no reply" } */
  SP.letter = function (a, b, at, opts) {
    opts = opts || {};
    at = clampT(at);
    var dur = Math.max(0.2, num(opts.dur, 0.8)), until = opts.until != null ? opts.until : at + dur + num(opts.hold, 1.2);
    var G = g(this.wfx, { display: "none" });
    G.innerHTML = propArt(opts.kind || "letter");
    var sc = num(opts.scale, 1.2);
    this.fns.push(function (t) {
      var lt = t - at, on = lt >= 0 && t < until;
      setD(G, on);
      if (!on) return;
      var p = clamp(lt / dur, 0, 1), e = sm(p);
      var x = lerp(a.x, b.x, e), y = lerp(a.y, b.y, e) - Math.sin(p * PI) * num(opts.arc, 220);
      var rot = p < 1 ? Math.sin(p * PI) * 30 * (b.x > a.x ? 1 : -1) : Math.sin((lt - dur) * 12) * 4 * Math.max(0, 1 - (lt - dur) * 2);
      var s2 = sc * (p < 1 ? 1 : 1 + 0.15 * Math.max(0, Math.sin((lt - dur) * 10)) * Math.max(0, 1 - (lt - dur) * 3));
      setA(G, "transform", "translate(" + fx(x) + "," + fx(y) + ") rotate(" + fx(rot) + ") scale(" + fx(s2 * 100) / 100 + ")");
    });
    return G;
  };
  /** floating question marks in world space */
  SP.qmarks = function (x, y, from, to, opts) {
    opts = opts || {};
    var G = g(this.wfx, { display: "none" }), n = clamp(Math.round(num(opts.count, 3)), 1, 6), list = [];
    for (var i = 0; i < n; i++) {
      var q = svgEl("text", { x: 0, y: 0, "text-anchor": "middle", "font-size": num(opts.size, 90), "font-weight": 900, "font-family": "Arial Black, Arial, sans-serif", fill: opts.color || "#FFFFFF", stroke: INK, "stroke-width": 8, "paint-order": "stroke" }, G);
      q.textContent = opts.text || "?";
      list.push({ q: q, dx: (i - (n - 1) / 2) * 70, dy: -(i % 2) * 50, ph: i * 1.3 });
    }
    from = clampT(from == null ? 0 : from); to = to == null ? 1e9 : to;
    this.fns.push(function (t) {
      var on = t >= from && t < to, lt = t - from;
      setD(G, on);
      if (!on) return;
      list.forEach(function (it, i) {
        var p = clamp((lt - i * 0.15) / 0.3, 0, 1);
        setA(it.q, "transform", "translate(" + fx(x + it.dx) + "," + fx(y + it.dy + Math.sin(t * 2.4 + it.ph) * 10) + ") rotate(" + fx(Math.sin(t * 2 + it.ph) * 12) + ") scale(" + fx(EASE.boing(p) * 100) / 100 + ")");
      });
    });
    return G;
  };
  /** chunky world-space arrow a → b (draws on). opts: { color, width, at, dur, curve } */
  SP.arrow = function (a, b, at, opts) {
    opts = opts || {};
    at = clampT(at == null ? 0 : at);
    var col = opts.color || RED, w = num(opts.width, 26), dur = Math.max(0.1, num(opts.dur, 0.6)), curve = num(opts.curve, 0.18);
    var G = g(opts.layer === "over" ? this.over : this.wfx, { display: "none" });
    var o = svgEl("path", { fill: "none", stroke: INK, "stroke-width": w + 8, "stroke-linecap": "round", "stroke-linejoin": "round" }, G);
    var p = svgEl("path", { fill: "none", stroke: col, "stroke-width": w, "stroke-linecap": "round", "stroke-linejoin": "round" }, G);
    var head = svgEl("path", { fill: col, stroke: INK, "stroke-width": 4, "stroke-linejoin": "round" }, G);
    var dx = b.x - a.x, dy = b.y - a.y, len = Math.sqrt(dx * dx + dy * dy) || 1, nx = -dy / len, ny = dx / len;
    var cx = (a.x + b.x) / 2 + nx * len * curve, cy = (a.y + b.y) / 2 + ny * len * curve;
    function pt(q) { var i = 1 - q; return [i * i * a.x + 2 * i * q * cx + q * q * b.x, i * i * a.y + 2 * i * q * cy + q * q * b.y]; }
    var until = opts.until != null ? opts.until : 1e9;
    this.fns.push(function (t) {
      var lt = t - at, on = lt >= 0 && t < until;
      setD(G, on);
      if (!on) return;
      var pr = EASE.whip(clamp(lt / dur, 0, 1)), d = "", n = 12;
      for (var i = 0; i <= n; i++) { var q = pt((i / n) * pr * 0.92); d += (i ? " L" : "M") + P2(q[0], q[1]); }
      setA(o, "d", d); setA(p, "d", d);
      var tip = pt(pr), back = pt(Math.max(0, pr - 0.08)), ang = Math.atan2(tip[1] - back[1], tip[0] - back[0]);
      var hs = w * 1.9, bob = 1 + (lt > dur ? Math.sin((lt - dur) * 6) * 0.04 : 0);
      setA(head, "transform", "translate(" + P2(tip[0], tip[1]) + ") rotate(" + fx((ang * 180) / PI) + ") scale(" + fx(bob * pr * 100) / 100 + ")");
      setA(head, "d", "M" + P2(hs * 0.4, 0) + " L" + P2(-hs * 0.9, -hs) + " L" + P2(-hs * 0.5, 0) + " L" + P2(-hs * 0.9, hs) + "Z");
    });
    return G;
  };
  /** red target circle with crosshair zooming in on a point */
  SP.target = function (x, y, at, opts) {
    opts = opts || {};
    at = clampT(at == null ? 0 : at);
    var r = num(opts.r, 70), col = opts.color || RED;
    var G = g(opts.layer === "over" ? this.over : this.wfx, { display: "none" });
    svgEl("circle", { cx: 0, cy: 0, r: r, fill: "none", stroke: col, "stroke-width": 10 }, G);
    svgEl("circle", { cx: 0, cy: 0, r: r * 0.5, fill: "none", stroke: col, "stroke-width": 7 }, G);
    svgEl("path", { d: "M" + fx(-r * 1.3) + ",0 L" + fx(-r * 0.7) + ",0 M" + fx(r * 0.7) + ",0 L" + fx(r * 1.3) + ",0 M0," + fx(-r * 1.3) + " L0," + fx(-r * 0.7) + " M0," + fx(r * 0.7) + " L0," + fx(r * 1.3), stroke: col, "stroke-width": 8, "stroke-linecap": "round" }, G);
    svgEl("circle", { cx: 0, cy: 0, r: r * 0.12, fill: col }, G);
    var until = opts.until != null ? opts.until : 1e9;
    this.fns.push(function (t) {
      var lt = t - at, on = lt >= 0 && t < until;
      setD(G, on);
      if (!on) return;
      var p = clamp(lt / 0.35, 0, 1), s = lerp(3.2, 1, EASE.whip(p)) * (1 + 0.05 * Math.sin(t * 6));
      setA(G, "transform", "translate(" + P2(x, y) + ") scale(" + fx(s * 100) / 100 + ") rotate(" + fx(lt * 25) + ")");
      setA(G, "opacity", fx(Math.min(1, p * 2) * 100) / 100);
    });
    return G;
  };
  /** cartoon smoke puffs (non-graphic). opts: { count, x, y, w } */
  SP.smoke = function (from, to, opts) {
    opts = opts || {};
    var Ww = this.Ww, n = clamp(Math.round(num(opts.count, 4)), 1, 12), rnd = V.makeRand(23), G = g(this.far), list = [];
    for (var i = 0; i < n; i++) {
      var p = svgEl("path", { d: "M0,0 C-20,-6 -24,-36 -4,-40 C0,-62 36,-62 40,-40 C62,-36 58,-6 36,0 Z", fill: opts.color || "#D8D4CC", stroke: INK, "stroke-width": 3 }, G);
      list.push({ p: p, x: num(opts.x, rnd() * Ww), y: num(opts.y, 500), ph: rnd() * 10, sp: 0.4 + rnd() * 0.4, sc: 1 + rnd() * 0.8 });
    }
    from = from == null ? 0 : from; to = to == null ? 1e9 : to;
    this.fns.push(function (t) {
      list.forEach(function (it) {
        var on = t >= from && t < to; setD(it.p, on); if (!on) return;
        var q = (t * it.sp + it.ph) % 3 / 3;
        setA(it.p, "transform", "translate(" + fx(it.x + Math.sin(t + it.ph) * 20) + "," + fx(it.y - q * 160) + ") scale(" + fx(it.sc * (0.5 + q) * 100) / 100 + ")");
        setA(it.p, "opacity", fx((1 - q) * 0.8 * 100) / 100);
      });
    });
    return this;
  };
  SP.snow = function (from, to, opts) {
    opts = opts || {};
    var Ww = this.Ww, n = clamp(Math.round(num(opts.count, 30)), 1, 120), rnd = V.makeRand(41), G = g(this.over), list = [];
    for (var i = 0; i < n; i++) list.push({ c: svgEl("circle", { r: 4 + rnd() * 6, fill: "#FFFFFF", stroke: INK, "stroke-width": 1.5, opacity: 0.9 }, G), x: rnd() * Ww, sp: 60 + rnd() * 80, ph: rnd() * 1000, w: rnd() * 2 });
    from = from == null ? 0 : from; to = to == null ? 1e9 : to;
    this.fns.push(function (t) {
      var on = t >= from && t < to; setD(G, on); if (!on) return;
      list.forEach(function (it) { var y = (t * it.sp + it.ph) % 1100 - 50; setA(it.c, "transform", "translate(" + fx(it.x + Math.sin(t * it.w + it.ph) * 30) + "," + fx(y) + ")"); });
    });
    return this;
  };
  SP.birds = function (from, to, opts) {
    opts = opts || {};
    var Ww = this.Ww, n = clamp(Math.round(num(opts.count, 3)), 1, 10), rnd = V.makeRand(51), G = g(this.far), list = [];
    for (var i = 0; i < n; i++) list.push({ p: svgEl("path", { fill: "none", stroke: INK, "stroke-width": 3.5, "stroke-linecap": "round" }, G), x: rnd() * Ww, y: num(opts.y, 220) + rnd() * 80, sp: 40 + rnd() * 40, ph: rnd() * 10 });
    from = from == null ? 0 : from; to = to == null ? 1e9 : to;
    this.fns.push(function (t) {
      var on = t >= from && t < to; setD(G, on); if (!on) return;
      list.forEach(function (b) { var x = (b.x + t * b.sp) % (Ww + 200) - 100, f = Math.sin(t * 9 + b.ph) * 8; setA(b.p, "d", "M" + P2(x - 18, b.y + f) + " Q" + P2(x - 9, b.y - 6) + " " + P2(x, b.y) + " Q" + P2(x + 9, b.y - 6) + " " + P2(x + 18, b.y + f)); });
    });
    return this;
  };
  SP.sparkles = function (from, to, opts) {
    opts = opts || {};
    var Ww = this.Ww, n = clamp(Math.round(num(opts.count, 10)), 1, 40), rnd = V.makeRand(num(opts.seed, 61)), G = g(this.over), list = [];
    var area = opts.area || { x: 0, y: 0, w: Ww, h: 1000 };
    for (var i = 0; i < n; i++) list.push({ p: svgEl("path", { d: star4D(0, 0, num(opts.size, 18) * (0.6 + rnd() * 0.8)), fill: opts.color || "#FFFFFF", stroke: opts.stroke || GOLD, "stroke-width": 2.4 }, G), x: area.x + rnd() * area.w, y: area.y + rnd() * area.h, ph: rnd() * 10, sp: 0.6 + rnd() * 0.8 });
    from = from == null ? 0 : from; to = to == null ? 1e9 : to;
    this.fns.push(function (t) {
      var on = t >= from && t < to; setD(G, on); if (!on) return;
      list.forEach(function (s) { var q = Math.max(0, Math.sin(t * 5 * s.sp + s.ph)); setA(s.p, "transform", "translate(" + P2(s.x, s.y - ((t * 30 * s.sp + s.ph * 40) % 200)) + ") scale(" + fx(q * 100) / 100 + ") rotate(" + fx(t * 60) + ")"); });
    });
    return this;
  };
  /** radial focus lines (comic shock) around a point */
  SP.focusLines = function (from, to, opts) {
    opts = opts || {};
    var Ww = this.Ww, cx = num(opts.x, Ww / 2), cy = num(opts.y, 470), lay = opts.layer === "under" ? this.under : this.over;
    var G = g(lay, { display: "none" });
    if (opts.bg) svgEl("rect", { x: -80, y: -80, width: Ww + 160, height: 1160, fill: opts.bg }, G);
    var rnd = V.makeRand(num(opts.seed, 3)), inner = num(opts.inner, 330), Rr = Math.max(Ww, 1000) * 1.2, d = "";
    for (var i = 0; i < 48; i++) { var a = (i / 48) * 2 * PI + rnd() * 0.1, w = 0.012 + rnd() * 0.02, r0 = inner * (0.8 + rnd() * 0.5); d += "M" + P2(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0) + " L" + P2(cx + Math.cos(a - w) * Rr, cy + Math.sin(a - w) * Rr) + " L" + P2(cx + Math.cos(a + w) * Rr, cy + Math.sin(a + w) * Rr) + "Z"; }
    var p = svgEl("path", { d: d, fill: opts.color || INK, opacity: num(opts.opacity, 0.7) }, G);
    from = from == null ? 0 : from; to = to == null ? 1e9 : to;
    this.fns.push(function (t) { var on = t >= from && t < to; setD(G, on); if (on) setA(p, "transform", "rotate(" + fx((Math.floor(t * 10) % 3) * 2.5) + " " + fx(cx) + " " + fx(cy) + ")"); });
    return this;
  };
  /** crowd of small chibis. opts: { x, y, w, rows, roles, nation, scale, march (dir), cheer } → actors */
  SP.crowd = function (n, opts) {
    opts = opts || {};
    n = clamp(Math.round(num(n, 12)), 1, 40);
    var Ww = this.Ww, rows = clamp(Math.round(num(opts.rows, Math.ceil(n / 8))), 1, 5), per = Math.ceil(n / rows);
    var x0 = num(opts.x, Ww * 0.1), w = num(opts.w, Ww * 0.8), y0 = num(opts.y, 600), sc = num(opts.scale, 0.55), rnd = V.makeRand(num(opts.seed, 19));
    var roles = arr(opts.roles).length ? arr(opts.roles) : [opts.role || "soldier"];
    var nations = arr(opts.nations).length ? arr(opts.nations) : [opts.nation || "neutral"];
    var out = [], self = this, k = 0;
    for (var r = 0; r < rows; r++) {
      var ry = y0 - (rows - 1 - r) * 120 * sc * 1.4, rs = sc * (0.82 + (r / Math.max(1, rows - 1)) * 0.18 * (rows > 1 ? 1 : 0));
      for (var i = 0; i < per && k < n; i++, k++) {
        var px = x0 + ((i + 0.5 + (r % 2) * 0.5) / (per + 0.5)) * w + (rnd() - 0.5) * 20;
        var a = new Actor(self, { role: roles[(k + r) % roles.length], nation: nations[k % nations.length], variant: k }, { x: px, y: ry, scale: rs * (0.95 + rnd() * 0.1), expression: opts.expression || (rnd() < 0.3 ? "happy" : "smile"), gesture: opts.march ? "march" : rnd() < 0.3 ? "cheer" : "rest", facing: opts.march ? (opts.march === "left" ? "left" : "right") : 0 });
        if (opts.march) { var dx = (opts.march === "left" ? -1 : 1) * num(opts.distance, Ww * 0.5); a.walks.push({ t: 0, e: 1e9 }); a.moveTo(px + dx, null, 0, num(opts.dur, D()), "linear"); }
        else if (opts.cheer !== false) { var ht = rnd() * 1.5; while (ht < D()) { a.hop(ht, 20 + rnd() * 30, 0.3); ht += 0.8 + rnd() * 1.6; } }
        out.push(a);
      }
    }
    return out;
  };

  // ───────────────────────── stylised Europe map ─────────────────────────
  // Map space 1000 × 760. Coarse, deliberately cartoonish continent shapes.
  var MAP_LAND = {
    iberia: "M250,470 L330,440 L420,430 L470,470 L480,540 L440,600 L370,640 L300,630 L250,580 L235,520 Z",
    france: "M420,330 L480,320 L520,350 L560,370 L575,420 L560,470 L520,490 L470,470 L420,430 L400,380 Z",
    britain: "M330,120 L370,110 L385,160 L370,200 L395,250 L385,300 L350,330 L310,325 L290,290 L305,250 L285,210 L310,170 Z",
    ireland: "M230,230 L270,215 L285,250 L270,300 L235,305 L215,270 Z",
    germany: "M520,300 L580,280 L640,270 L690,300 L700,370 L660,410 L600,420 L575,420 L560,370 L520,350 Z",
    switzerland: "M560,420 L600,415 L612,440 L590,458 L560,452 Z",
    italy: "M560,458 L600,445 L640,480 L680,530 L720,590 L730,640 L700,650 L680,610 L640,570 L600,540 L575,500 Z",
    sicily: "M650,640 L690,650 L680,675 L645,665 Z",
    scandinavia: "M560,30 L620,10 L690,40 L720,120 L700,200 L670,250 L630,260 L600,220 L590,160 L560,110 Z",
    denmark: "M600,255 L630,250 L640,285 L610,295 Z",
    poland: "M690,300 L760,290 L800,330 L790,390 L740,420 L700,410 L700,370 Z",
    balkans: "M640,480 L700,440 L740,420 L790,440 L820,500 L800,560 L760,590 L720,590 L680,530 Z",
    ussr: "M700,30 L1010,0 L1010,520 L900,540 L820,500 L790,440 L790,390 L800,330 L760,290 L720,200 L720,120 Z",
    turkey: "M820,500 L900,540 L1010,520 L1010,600 L880,610 L820,560 Z",
    africa: "M230,660 L1010,620 L1010,770 L230,770 Z",
  };
  var MAP_PTS = { britain: [345, 230], london: [355, 285], ireland: [250, 260], france: [490, 410], paris: [470, 370], spain: [360, 540], madrid: [360, 540], portugal: [280, 560], germany: [610, 345], berlin: [640, 320], switzerland: [585, 437], bern: [585, 437], alps: [590, 445], italy: [640, 520], rome: [640, 545], sicily: [665, 655], scandinavia: [640, 150], sweden: [660, 170], stockholm: [665, 180], norway: [600, 110], denmark: [620, 272], poland: [745, 355], warsaw: [750, 345], ussr: [880, 240], russia: [880, 240], moscow: [900, 220], balkans: [730, 510], greece: [760, 570], austria: [655, 415], vienna: [660, 415], netherlands: [545, 318], belgium: [530, 345], finland: [730, 100], baltic: [690, 240], "north-sea": [450, 220], mediterranean: [600, 620], atlantic: [180, 420], channel: [400, 330], turkey: [920, 560], africa: [600, 700], egypt: [900, 690], "north-africa": [500, 700] };
  function MapView(shot, parent, o) {
    o = o || {};
    this.sh = shot; this.x = o.x; this.y = o.y; this.w = o.w; this.h = o.h;
    this.k = Math.min(this.w / 1000, this.h / 760);
    this.g = g(parent, { transform: "translate(" + fx(this.x) + "," + fx(this.y) + ") scale(" + fx(this.k * 1000) / 1000 + ")" });
    var muted = !!o.muted;
    var sea = muted ? "#A9C4BC" : "#86BBDC", land = muted ? "#DDCFA4" : "#EEDCA6";
    this.seaC = sea; this.landC = land;
    var W0 = this.w / this.k, H0 = this.h / this.k;
    svgEl("rect", { x: 0, y: 0, width: W0, height: H0, fill: sea }, this.g);
    if (o.grid) { var gd = ""; for (var gx = 0; gx <= W0; gx += 100) gd += "M" + fx(gx) + ",0 L" + fx(gx) + "," + fx(H0) + " "; for (var gy = 0; gy <= H0; gy += 100) gd += "M0," + fx(gy) + " L" + fx(W0) + "," + fx(gy) + " "; svgEl("path", { d: gd, stroke: INK, "stroke-width": 1.5, opacity: 0.12 }, this.g); }
    var cid = nid("mp");
    var cp = svgEl("clipPath", { id: cid }, this.g);
    svgEl("rect", { x: 0, y: 0, width: W0, height: H0 }, cp);
    var inner = (this.inner = g(this.g, { "clip-path": "url(#" + cid + ")" }));
    this.regions = {};
    var self = this;
    Object.keys(MAP_LAND).forEach(function (nm) {
      var fill = nm === "africa" ? (muted ? "#CDBF96" : "#E9D9A8") : land;
      var p = svgEl("path", { d: MAP_LAND[nm], fill: fill, stroke: INK, "stroke-width": 4, "stroke-linejoin": "round" }, inner);
      self.regions[nm] = { p: p, fills: [{ t: -1, c: fill }], base: fill };
    });
    this.fx = g(this.g);
    svgEl("rect", { x: 0, y: 0, width: W0, height: H0, fill: "none", stroke: INK, "stroke-width": 6 }, this.g);
    this.labels = [];
    shot.fns.push(function (t) { self.update(t); });
  }
  S.MapView = MapView;
  var MP = MapView.prototype;
  /** map-space point for a name or {x,y} (0–1 fractions of the map, or raw map units if > 1) */
  MP.pt = function (p) {
    if (p && p.x != null) { var x = num(p.x, 0.5), y = num(p.y, 0.5); return x <= 1 && y <= 1 ? [x * 1000, y * 760] : [x, y]; }
    var k = str(p).toLowerCase().trim();
    k = { uk: "britain", england: "britain", "great-britain": "britain", scotland: "britain", deutschland: "germany", reich: "germany", soviet: "ussr", "soviet-union": "ussr", russia: "ussr", swiss: "switzerland", helvetia: "switzerland", iberia: "spain", scandinavia: "sweden", "low-countries": "netherlands", holland: "netherlands", austria: "austria", hungary: "austria", yugoslavia: "balkans", serbia: "balkans", romania: "balkans", bulgaria: "balkans", med: "mediterranean", sea: "mediterranean", "english-channel": "channel", libya: "north-africa", algeria: "north-africa", tunisia: "north-africa", morocco: "north-africa" }[k] || k;
    return MAP_PTS[k] || MAP_PTS.germany;
  };
  /** world coords of a map point */
  MP.world = function (p) { var q = this.pt(p); return { x: this.x + q[0] * this.k, y: this.y + q[1] * this.k }; };
  var REGION_FOR = { spain: "iberia", portugal: "iberia", madrid: "iberia", paris: "france", london: "britain", uk: "britain", england: "britain", berlin: "germany", austria: "germany", vienna: "germany", netherlands: "germany", belgium: "germany", bern: "switzerland", alps: "switzerland", rome: "italy", sweden: "scandinavia", norway: "scandinavia", finland: "scandinavia", stockholm: "scandinavia", warsaw: "poland", russia: "ussr", moscow: "ussr", soviet: "ussr", greece: "balkans", yugoslavia: "balkans", egypt: "africa", "north-africa": "africa", libya: "africa" };
  MP.regionName = function (name) { var k = str(name).toLowerCase().trim(); if (MAP_LAND[k]) return k; return REGION_FOR[k] || null; };
  /** colour a region from `at` (nation id → its accent, or a colour) */
  MP.region = function (name, color, at) {
    var rn = this.regionName(name);
    if (!rn) return this;
    var col = color && color[0] === "#" ? color : NATIONS[nationId(color)] ? mix(NATIONS[nationId(color)].accent, "#FFFFFF", 0.35) : mix(RED, "#FFFFFF", 0.35);
    this.regions[rn].fills.push({ t: clampT(at == null ? 0 : at), c: col });
    this.regions[rn].fills.sort(function (a, b) { return a.t - b.t; });
    return this;
  };
  MP.update = function (t) {
    var self = this;
    Object.keys(this.regions).forEach(function (nm) {
      var r = self.regions[nm], c = r.base, t0 = -1;
      for (var i = 0; i < r.fills.length; i++) { if (r.fills[i].t > t) break; c = r.fills[i].c; t0 = r.fills[i].t; }
      setA(r.p, "fill", c);
      var since = t - t0;
      var popS = t0 >= 0 && since < 0.3 ? 1 + 0.06 * Math.sin((since / 0.3) * PI) : 1;
      if (popS !== 1) { var q = self.pt(nm === "iberia" ? "spain" : nm === "scandinavia" ? "sweden" : nm); setA(r.p, "transform", "translate(" + P2(q[0], q[1]) + ") scale(" + fx(popS * 100) / 100 + ") translate(" + P2(-q[0], -q[1]) + ")"); }
      else setA(r.p, "transform", "");
    });
  };
  /** label text on the map (map coords). opts: { at, until, size, color, box } */
  MP.label = function (text, p, opts) {
    opts = opts || {};
    var q = this.pt(p), G = g(this.fx, { display: "none" }), size = num(opts.size, 34);
    var tx = svgEl("text", { x: 0, y: 0, "text-anchor": "middle", "font-size": size, "font-weight": 900, "font-family": "Arial Black, Arial, sans-serif", fill: opts.color || "#FFFFFF", stroke: INK, "stroke-width": size * 0.22, "paint-order": "stroke", "letter-spacing": 1 }, G);
    tx.textContent = plain(text).toUpperCase();
    var at = clampT(num(opts.at, 0)), until = opts.until != null ? opts.until : 1e9, dy = num(opts.dy, 12);
    this.sh.fns.push(function (t) { var lt = t - at, on = lt >= 0 && t < until; setD(G, on); if (on) setA(G, "transform", "translate(" + P2(q[0], q[1] + dy) + ") scale(" + fx(EASE.boing(clamp(lt / 0.3, 0, 1)) * 100) / 100 + ")"); });
    return G;
  };
  MP.arrow = function (a, b, at, opts) { opts = opts || {}; var A = this.world(a), B = this.world(b); opts.width = num(opts.width, 22 * this.k * 1.6); return this.sh.arrow(A, B, at, opts); };
  MP.target = function (p, at, opts) { opts = opts || {}; var q = this.world(p); opts.r = num(opts.r, 60 * this.k * 1.6); return this.sh.target(q.x, q.y, at, opts); };
  MP.qmarks = function (p, from, to, opts) { opts = opts || {}; var q = this.world(p); opts.size = num(opts.size, 90 * this.k * 1.6); return this.sh.qmarks(q.x, q.y - 40 * this.k, from, to, opts); };
  MP.flag = function (p, nation, opts) { opts = opts || {}; var q = this.world(p); var w = num(opts.w, 70 * this.k * 1.6); return this.sh.flag(nation, { x: q.x, y: q.y - w * 1.1, w: w, h: w * 0.66, pole: w * 1.1, base: false, layer: opts.layer || "under" }); };
  /** jagged front line through map points, drawing on from `at`. opts: { color, at, dur, ticks } */
  MP.front = function (pts, at, opts) {
    opts = opts || {};
    at = clampT(at == null ? 0 : at);
    var self = this, P = arr(pts).map(function (p) { return self.pt(p); }), col = opts.color || RED, dur = Math.max(0.1, num(opts.dur, 1));
    var G = g(this.fx, { display: "none" });
    var o = svgEl("path", { fill: "none", stroke: INK, "stroke-width": 14, "stroke-linejoin": "round", "stroke-linecap": "round" }, G);
    var p = svgEl("path", { fill: "none", stroke: col, "stroke-width": 8, "stroke-linejoin": "round", "stroke-linecap": "round" }, G);
    var tk = svgEl("path", { fill: "none", stroke: col, "stroke-width": 6, "stroke-linecap": "round" }, G);
    var rnd = V.makeRand(7), jag = [];
    for (var i = 0; i < P.length - 1; i++) for (var j = 0; j < 6; j++) jag.push([lerp(P[i][0], P[i + 1][0], j / 6) + (rnd() - 0.5) * 24, lerp(P[i][1], P[i + 1][1], j / 6) + (rnd() - 0.5) * 24]);
    jag.push(P[P.length - 1]);
    var until = opts.until != null ? opts.until : 1e9;
    this.sh.fns.push(function (t) {
      var lt = t - at, on = lt >= 0 && t < until; setD(G, on); if (!on) return;
      var pr = sm(clamp(lt / dur, 0, 1)), n = Math.max(1, Math.floor(pr * (jag.length - 1))), d = "", td = "";
      for (var i = 0; i <= n; i++) {
        var q = jag[i]; d += (i ? " L" : "M") + P2(q[0], q[1]);
        if (i && i % 2 === 0) { var a = jag[i - 1], dx = q[0] - a[0], dy = q[1] - a[1], ln = Math.sqrt(dx * dx + dy * dy) || 1; td += "M" + P2(q[0], q[1]) + " L" + P2(q[0] - (dy / ln) * 16, q[1] + (dx / ln) * 16); }
      }
      setA(o, "d", d); setA(p, "d", d); setA(tk, "d", td);
    });
    return G;
  };
  /** small "pow" burst on the map (non-graphic) */
  MP.burst = function (p, at, opts) {
    opts = opts || {};
    at = clampT(at == null ? 0 : at);
    var q = this.pt(p), G = g(this.fx, { display: "none" }), r = num(opts.r, 44), d = "";
    for (var i = 0; i < 12; i++) { var a0 = (i / 12) * 2 * PI, a1 = a0 + PI / 12; d += (i ? " L" : "M") + P2(Math.cos(a0) * r, Math.sin(a0) * r) + " L" + P2(Math.cos(a1) * r * 0.5, Math.sin(a1) * r * 0.5); }
    svgEl("path", { d: d + "Z", fill: opts.color || GOLD, stroke: INK, "stroke-width": 4, "stroke-linejoin": "round" }, G);
    svgEl("circle", { cx: 0, cy: 0, r: r * 0.25, fill: "#FFFFFF" }, G);
    var until = opts.until != null ? opts.until : at + num(opts.dur, 1.2);
    this.sh.fns.push(function (t) { var lt = t - at, on = lt >= 0 && t < until; setD(G, on); if (on) setA(G, "transform", "translate(" + P2(q[0], q[1]) + ") scale(" + fx((0.3 + 0.7 * EASE.boing(clamp(lt / 0.25, 0, 1))) * (1 + 0.06 * Math.sin(t * 20)) * 100) / 100 + ") rotate(" + fx(lt * 40) + ")"); });
    return G;
  };
  SP.map = function (opts) { opts = opts || {}; var Ww = this.Ww; return new MapView(this, opts.layer === "near" ? this.near : this.under, { x: num(opts.x, Ww * 0.05), y: num(opts.y, 60), w: num(opts.w, Ww * 0.9), h: num(opts.h, 700), muted: opts.muted, grid: opts.grid !== false }); };
  S.mapPoints = Object.keys(MAP_PTS);

  // ───────────────────────── lettering (HTML overlays) ─────────────────────────
  function F0() { return film || new Film(V.root()); }
  function pct(v) { return fx(v * 100) + "%"; }
  function windowed(node, from, to) {
    var f = F0();
    f.onFrame(function (t) { setS(node, "visibility", t >= from - 0.001 && t < to ? "visible" : "hidden"); });
  }
  function fitText(node, opts) { try { V.fit(node, opts || {}); } catch (e) {} }
  /**
   * Chunky thumbnail lettering. opts: { x, y (0–1 centre), width (0–1), size: "xl"|"lg"|"md"|"sm", color,
   * rotate, until, align, shadow (colour), kicker }
   */
  S.thumb = function (text, at, opts) {
    opts = opts || {};
    var f = F0(), tl = V.timeline();
    at = clampT(at == null ? 0.3 : at);
    var wrap = el("div.ch-thumb.ch-size-" + (opts.size || "xl"), { parent: f.ui });
    wrap.style.left = pct(num(opts.x, 0.5)); wrap.style.top = pct(num(opts.y, 0.5));
    wrap.style.width = pct(num(opts.width, f.portrait ? 0.9 : 0.6));
    if (opts.align) wrap.style.textAlign = opts.align;
    wrap.style.setProperty("--rot", "0deg");
    if (opts.kicker) el("div.ch-thumb-kick", { parent: wrap, text: plain(opts.kicker) });
    var inn = el("div.ch-thumb-in", { parent: wrap });
    inn.appendChild(S.rich(text || ""));
    if (opts.color) inn.style.color = opts.color;
    if (opts.shadow) inn.style.setProperty("--shadow", opts.shadow);
    if (opts.size === "xl" || !opts.size) inn.style.fontSize = u(f.portrait ? 120 : f.square ? 118 : 150) + "px";
    fitText(inn, { maxLines: opts.maxLines || 3, min: 18 });
    wrap.style.setProperty("--rot", fx(num(opts.rotate, -4)) + "deg"); // rotate only after fitting (rect-based fit)
    windowed(wrap, at, opts.until != null ? clampT(opts.until) + 0.25 : 1e9);
    tl.fromTo(inn, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.05 });
    tl.fromTo(inn, { scale: 2.4, rotate: 8 }, { scale: 1, rotate: 0 }, { at: at, dur: 0.3, ease: EASE.boing });
    if (opts.until != null) tl.to(inn, { opacity: 0, scale: 1.3 }, { at: clampT(opts.until), dur: 0.2, ease: "inCubic" });
    f.shake(at + 0.12, 7, 0.25);
    return wrap;
  };
  /** Date tag box "OCT 1945". opts: { x, y (0–1 centre), color, until, size: "lg"|"md"|"sm", rotate } */
  S.dateTag = function (text, at, opts) {
    opts = opts || {};
    var f = F0(), tl = V.timeline();
    at = clampT(at == null ? 0.2 : at);
    var tag = el("div.ch-date.ch-date-" + (opts.size || "md"), { parent: f.ui, text: plain(text || "").toUpperCase() });
    tag.style.left = pct(num(opts.x, f.portrait ? 0.5 : 0.12)); tag.style.top = pct(num(opts.y, 0.09));
    if (opts.color) tag.style.background = opts.color;
    tag.style.setProperty("--rot", fx(num(opts.rotate, -3)) + "deg");
    windowed(tag, at, opts.until != null ? clampT(opts.until) + 0.25 : 1e9);
    tl.fromTo(tag, { opacity: 0, scale: 0.2, rotate: -20 }, { opacity: 1, scale: 1, rotate: 0 }, { at: at, dur: 0.32, ease: EASE.boing });
    if (opts.until != null) tl.to(tag, { opacity: 0, y: -u(30) }, { at: clampT(opts.until), dur: 0.2, ease: "inCubic" });
    return tag;
  };
  /** small label chip (e.g. a nation under a character). opts: { x, y, color, until, dark } */
  S.tag = function (text, at, opts) {
    opts = opts || {};
    var f = F0(), tl = V.timeline();
    at = clampT(at == null ? 0.2 : at);
    var tag = el("div.ch-tag" + (opts.dark ? ".ch-tag-dark" : ""), { parent: f.ui, text: plain(text || "").toUpperCase() });
    tag.style.left = pct(num(opts.x, 0.5)); tag.style.top = pct(num(opts.y, 0.8));
    if (opts.color) { tag.style.background = opts.color; tag.style.color = "#FFFFFF"; }
    windowed(tag, at, opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    tl.fromTo(tag, { opacity: 0, scale: 0.4, y: u(16) }, { opacity: 1, scale: 1, y: 0 }, { at: at, dur: 0.28, ease: EASE.boing });
    if (opts.until != null) tl.to(tag, { opacity: 0 }, { at: clampT(opts.until), dur: 0.2 });
    return tag;
  };
  /** label chip under an actor (uses the actor's resting position) */
  S.nameplate = function (actor, text, at, opts) {
    opts = opts || {};
    var f = F0();
    var x = f.wx(actor.x0), y = f.wy(actor.y0 + (FEET + 34) * actor.s);
    return S.tag(text != null ? text : actor.N.name, at, { x: clamp(x, 0.08, 0.92), y: clamp(y, 0.1, 0.95), color: opts.color || actor.N.accent, until: opts.until });
  };
  /** bottom caption strip (short key sentence). opts: { until, y, color } */
  S.caption = function (text, at, opts) {
    opts = opts || {};
    var f = F0(), tl = V.timeline();
    at = clampT(at == null ? 0.3 : at);
    var cap = el("div.ch-cap", { parent: f.ui });
    if (opts.y != null) { cap.style.bottom = "auto"; cap.style.top = pct(opts.y); }
    var inn = el("div.ch-cap-in", { parent: cap });
    if (opts.color) inn.style.borderLeftColor = opts.color;
    inn.appendChild(S.rich(text || ""));
    fitText(inn, { maxLines: 2, min: 16 });
    windowed(cap, at, opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    tl.fromTo(inn, { opacity: 0, y: u(40) }, { opacity: 1, y: 0 }, { at: at, dur: 0.3, ease: "outBack" });
    if (opts.until != null) tl.to(inn, { opacity: 0, y: u(30) }, { at: clampT(opts.until), dur: 0.2, ease: "inCubic" });
    return cap;
  };
  /** word-synced captions built from V.words (or the narration text). opts: { from, to, top, text, lines } */
  S.captions = function (opts) {
    opts = opts || {};
    var f = F0();
    var list = opts.lines;
    if (!list) {
      var ph = phrases(opts.from, opts.to, opts.maxWords || (f.portrait ? 5 : 8));
      if (ph.length) list = ph.map(function (p) { return { text: p.text, start: p.s, end: p.e, words: p.words }; });
      else {
        var txt = plain(opts.text != null ? opts.text : V.narration || "").split(/\s+/).filter(Boolean);
        var chunks = [];
        for (var i = 0; i < txt.length && chunks.length < 40; i += 7) chunks.push(txt.slice(i, i + 7).join(" "));
        var a = 0.3, b = Math.max(a + 0.5, D() - 0.3), step = (b - a) / Math.max(1, chunks.length);
        list = chunks.map(function (c, k) { return { text: c, start: a + k * step, end: a + (k + 1) * step - 0.1 }; });
      }
    }
    var wrap = el("div.ch-subs" + (opts.top ? ".ch-subs-top" : ""), { parent: f.ui });
    var tl = V.timeline();
    list.forEach(function (Ln, k) {
      var line = el("div.ch-sub", { parent: wrap });
      var body = el("span.ch-sub-body", { parent: line });
      body.appendChild(S.rich(Ln.text));
      var spans = S.splitWords(body);
      var next = list[k + 1] ? list[k + 1].start : 1e9;
      var to = Math.min(next - 0.02, Ln.end + 0.9);
      windowed(line, Ln.start - 0.08, Math.max(Ln.start + 0.3, to));
      if (Ln.words && Ln.words.length === spans.length) spans.forEach(function (s, j) { tl.fromTo(s, { opacity: 0.5 }, { opacity: 1 }, { at: Math.max(0, Ln.words[j].start - 0.05), dur: 0.1 }); });
      else spans.forEach(function (s, j) { tl.fromTo(s, { opacity: 0.5 }, { opacity: 1 }, { at: Ln.start + ((Ln.end - Ln.start) * j) / Math.max(1, spans.length), dur: 0.1 }); });
      fitText(line, { maxLines: 2, min: 14 });
    });
    return wrap;
  };
  /** counting number. opts: { prefix, suffix, decimals, label, x, y, width, color, dur, until } */
  S.stat = function (value, at, opts) {
    opts = opts || {};
    var f = F0(), tl = V.timeline();
    at = clampT(at);
    var box = el("div.ch-stat", { parent: f.ui });
    box.style.left = pct(num(opts.x, 0.5)); box.style.top = pct(num(opts.y, 0.4));
    box.style.width = pct(num(opts.width, f.portrait ? 0.86 : 0.44));
    if (opts.color) box.style.setProperty("--ch-stat", opts.color);
    var n = el("div.ch-stat-num", { parent: box, text: "0" });
    if (opts.size) n.style.fontSize = u(opts.size) + "px";
    if (opts.align) box.style.textAlign = opts.align;
    var lab = opts.label ? el("div.ch-stat-label", { parent: box, text: plain(opts.label) }) : null;
    windowed(box, at, opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    tl.fromTo(n, { text: 0 }, { text: num(value, 0), prefix: opts.prefix || "", suffix: opts.suffix || "", decimals: num(opts.decimals, 0) }, { at: at, dur: num(opts.dur, 1.1), ease: "outExpo" });
    tl.fromTo(n, { scale: 1.8, opacity: 0 }, { scale: 1, opacity: 1 }, { at: at, dur: 0.3, ease: EASE.boing });
    if (lab) { tl.fromTo(lab, { opacity: 0, y: u(16) }, { opacity: 1, y: 0 }, { at: at + 0.25, dur: 0.3, ease: "outCubic" }); fitText(lab, { maxLines: 2, min: 14 }); }
    fitText(n, { maxLines: 1, min: 24 });
    if (opts.until != null) tl.to(box, { opacity: 0 }, { at: clampT(opts.until), dur: 0.2 });
    return box;
  };
  /** speech bubble. opts: { x, y (0–1 centre), width, tail: left|right|down|up, until } */
  S.bubble = function (text, from, to, opts) {
    opts = opts || {};
    var f = F0(), tl = V.timeline();
    from = clampT(from == null ? 0.3 : from);
    var b = el("div.ch-bubble.ch-tail-" + (opts.tail || "left"), { parent: f.ui });
    b.style.left = pct(num(opts.x, 0.6)); b.style.top = pct(num(opts.y, 0.3));
    b.style.width = pct(num(opts.width, f.portrait ? 0.8 : 0.42));
    var inn = el("div.ch-bubble-in", { parent: b });
    inn.appendChild(S.rich(text || ""));
    fitText(inn, { maxLines: 4, min: 16 });
    windowed(b, from, to == null ? 1e9 : to + 0.2);
    tl.fromTo(b, { opacity: 0, scale: 0.3 }, { opacity: 1, scale: 1 }, { at: from, dur: 0.3, ease: EASE.boing });
    if (to != null) tl.to(b, { opacity: 0, scale: 0.6 }, { at: clampT(to), dur: 0.18, ease: "inCubic" });
    return b;
  };
  /** full-width ribbon band. opts: { y (0–1), color, until, rotate } */
  S.banner = function (text, at, opts) {
    opts = opts || {};
    var f = F0(), tl = V.timeline();
    at = clampT(at == null ? 0.3 : at);
    var band = el("div.ch-banner", { parent: f.ui });
    band.style.top = pct(num(opts.y, 0.5));
    if (opts.color) band.style.background = opts.color;
    band.style.setProperty("--rot", "0deg");
    var inn = el("div.ch-banner-in", { parent: band });
    inn.appendChild(S.rich(text || ""));
    fitText(inn, { min: 18 });
    band.style.setProperty("--rot", fx(num(opts.rotate, -3)) + "deg");
    windowed(band, at, opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    tl.fromTo(band, { x: -V.width * 1.2 }, { x: 0 }, { at: at, dur: 0.35, ease: EASE.whip });
    tl.fromTo(inn, { opacity: 0 }, { opacity: 1 }, { at: at + 0.2, dur: 0.15 });
    if (opts.until != null) tl.to(band, { x: V.width * 1.2 }, { at: clampT(opts.until), dur: 0.3, ease: "inCubic" });
    return band;
  };
  /** "VS" badge */
  S.vsBadge = function (at, opts) {
    opts = opts || {};
    var f = F0(), tl = V.timeline();
    var vs = el("div.ch-vs", { parent: f.ui, text: opts.text || "VS" });
    vs.style.left = pct(num(opts.x, 0.5)); vs.style.top = pct(num(opts.y, 0.5));
    tl.fromTo(vs, { scale: 3, opacity: 0, rotate: -30 }, { scale: 1, opacity: 1, rotate: -8 }, { at: clampT(at), dur: 0.26, ease: EASE.smear });
    return vs;
  };

  // ───────────────────────── acting helpers ─────────────────────────
  function narrate(actor, from, to) {
    var W = words();
    from = from == null ? 0 : from; to = to == null ? D() : to;
    if (to - from < 0.15) return actor;
    if (W.length) {
      var s = null, e = null;
      for (var i = 0; i < W.length; i++) {
        var w = W[i];
        if (w.start < from - 0.01 || w.start > to) continue;
        if (s == null) { s = w.start; e = w.end; continue; }
        if (w.start - e > 0.35) { actor.say(s, Math.min(e, to)); s = w.start; }
        e = w.end;
      }
      if (s != null) actor.say(s, Math.min(e, to + 0.05));
    } else {
      var a = Math.max(from, 0.25), b = Math.min(to, D() - 0.3), k = 0, t = a;
      while (t < b - 0.2) { var e2 = Math.min(b, t + 1.5 + ((k * 7) % 5) * 0.2); actor.say(t, e2); t = e2 + 0.3; k++; }
    }
    return actor;
  }
  S.narrate = narrate;
  /** light idle acting: tiny hops and gesture swaps on phrase starts */
  function liven(actor, from, to, gestures) {
    var ph = phrases(from, to), gl = gestures || ["present", "point", "rest", "explain", "hold"];
    ph.forEach(function (q, i) { if (i < 12 && i % 2 === 1) { actor.gesture(gl[i % gl.length], q.s); } if (i < 12 && i % 3 === 0) actor.hop(q.s, 14, 0.26); });
    if (!ph.length) for (var h = from + 0.5, k = 0; h < to - 0.5; h += 1.6, k++) { actor.hop(h, 14, 0.26); if (k % 2) actor.gesture(gl[k % gl.length], h); }
    return actor;
  }
  S.liven = liven;
  function T0() { return Math.min(0.3, D() * 0.08); }
  function castOf(p, dRole, dNation) { return { role: roleId(p.role || dRole || "officer"), nation: nationId(p.nation || dNation || "neutral") }; }
  function sideOf(p) { return p.side === "right" ? "right" : "left"; }
  function oppX(f, side) { return f.portrait ? 0.5 : side === "right" ? 0.3 : 0.7; }
  /** half-screen sub-shot (two-sides): a light shot-like object whose layers sit in a clipped group */
  function makeHalf(sh, which) {
    var f = sh.film, Ww = sh.Ww, P = f.portrait;
    var cid = nid("hf");
    var cp = svgEl("clipPath", { id: cid }, f.defs);
    var jag = jaggedD(Ww, P, which);
    svgEl("path", { d: jag.clip }, cp);
    var outer = g(sh.world, { "clip-path": "url(#" + cid + ")" });
    var tx = P ? 0 : which === "left" ? -Ww * 0.25 : Ww * 0.25, ty = P ? (which === "left" ? -330 : 170) : 0;
    var G = g(outer, { transform: "translate(" + fx(tx) + "," + fx(ty) + ")" });
    var half = Object.create(SP);
    half.film = f; half.Ww = Ww; half.k = sh.k; half.portrait = P; half.square = f.square; half.landscape = f.landscape;
    half.far = g(G); half.under = g(G); half.world = g(G); half.near = g(half.world); half.chars = g(half.world); half.wfx = g(half.world); half.over = g(G);
    half.fns = sh.fns; half.actors = sh.actors; half.cam = sh.cam; half.from = sh.from; half.to = sh.to; half.g = G; half.outer = outer; half.groundY = 760;
    half.dim = svgEl("rect", { x: -Ww, y: -1000, width: Ww * 3, height: 3000, fill: INK, opacity: 0 }, G);
    half.tx = tx; half.ty = ty; half.which = which;
    return half;
  }
  function jaggedD(Ww, P, which) {
    var rnd = V.makeRand(99), pts = [], n = 14, i, d;
    if (P) { for (i = 0; i <= n; i++) pts.push([(-80 + ((Ww + 160) * i) / n), 500 + (i % 2 ? 22 : -22) + (rnd() - 0.5) * 10]); }
    else { for (i = 0; i <= n; i++) pts.push([Ww / 2 + (i % 2 ? 26 : -26) + (rnd() - 0.5) * 10, -80 + ((1160 * i) / n)]); }
    var line = pts.map(function (p, i) { return (i ? " L" : "M") + P2(p[0], p[1]); }).join("");
    if (P) d = line + (which === "left" ? " L" + fx(Ww + 80) + ",-80 L-80,-80 Z" : " L" + fx(Ww + 80) + ",1100 L-80,1100 Z");
    else d = line + (which === "left" ? " L-80,1100 L-80,-80 Z" : " L" + fx(Ww + 80) + ",1100 L" + fx(Ww + 80) + ",-80 Z");
    return { clip: d, line: line };
  }
  S.jaggedD = jaggedD;

  // ───────────────────────── templates ─────────────────────────
  var T = {};

  T["character-talks"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww;
    var c = castOf(p, "officer", "neutral"), loc = p.location || "war-room";
    var side = sideOf(p), stack = f.portrait, hasText = !!p.text;
    var tKey = syncAt(p.keyword || S.autoKey(p.text), 0, Dd * 0.42);
    var close = p.closeUp !== false && Dd > 4.5;
    var tCut = close ? clamp(Math.max(tKey + 1.4, Dd * 0.58), 1.5, Dd - 1.2) : 1e9;
    var keyG = p.gesture || (c.role === "general" ? "salute" : c.role === "diplomat" ? "shrug" : c.role === "pilot" ? "point-up" : "point");
    var faceV = stack || !hasText ? 0 : side === "left" ? 0.4 : -0.4;
    function act(a, from, to) {
      narrate(a, from, to);
      liven(a, from, to, p.prop ? ["hold", "hold-up", "hold"] : null);
      a.beats(p.beats || [], { start: Dd * 0.3, step: Dd * 0.2 });
      a.gesture(keyG, tKey - 0.05).gesture(p.prop ? "hold" : "rest", Math.min(Dd - 0.1, tKey + 1.6));
      if (p.keyExpression) a.expression(p.keyExpression, tKey);
      a.hop(tKey, 30, 0.3);
      return a;
    }
    var s1 = f.shot(loc, 0, tCut, { nation: c.nation !== "neutral" ? c.nation : null });
    var fr = s1.frame("medium", stack ? "center" : hasText ? side : "center");
    fr.y = s1.groundY - FEET * fr.scale;
    if (f.square && hasText) { fr.scale *= 0.92; fr.y = s1.groundY - FEET * fr.scale; }
    var a = act(s1.character(c, { x: fr.x, y: fr.y, scale: fr.scale, facing: faceV, expression: p.expression || "smile", prop: p.prop }), 0, Math.min(tCut, Dd));
    s1.cam.set({ zoom: 1 }).push(1.07, 0.1, Math.max(1, Math.min(tCut, Dd) - 0.2));
    if (p.flag !== false && c.nation !== "neutral" && (loc === "plain" || loc === "field" || loc === "parade" || loc === "map")) s1.flag(c.nation, { x: fr.x + (side === "left" ? 1 : -1) * 240 * fr.scale * (stack ? 0.8 : 1), y: fr.y - 200 * fr.scale, w: 170, h: 110, pole: 560, layer: "near" });
    if (close) {
      var s2 = f.shot(loc, tCut, 1e9, { enter: "zoom", nation: c.nation !== "neutral" ? c.nation : null });
      var fr2 = s2.frame("close", stack ? "center" : hasText ? side : "center");
      if (stack) fr2.y += 60;
      if (f.square) fr2.scale *= 0.9;
      var b = act(s2.character(c, { x: fr2.x, y: fr2.y, scale: fr2.scale, facing: faceV, expression: p.closeExpression || p.expression || "smile", prop: p.prop }), tCut, Dd);
      s2.cam.set({ zoom: 1 }).push(1.05, tCut, Dd - tCut);
    }
    if (hasText) {
      if (stack) S.thumb(p.text, tKey, { x: 0.5, y: p.date ? 0.2 : 0.16, width: 0.9, size: "lg", kicker: p.kicker });
      else S.thumb(p.text, tKey, { x: oppX(f, side), y: f.square ? 0.26 : 0.4, width: f.square ? 0.46 : 0.42, size: f.square ? "md" : "lg", kicker: p.kicker });
    }
    if (p.date) S.dateTag(p.date, T0(), { x: stack ? 0.5 : hasText ? (side === "left" ? (f.square ? 0.18 : 0.12) : (f.square ? 0.82 : 0.88)) : (f.square ? 0.18 : 0.12), y: stack ? 0.05 : 0.09, size: f.square ? "sm" : "md" });
    if (p.label) S.nameplate(a, p.label, 0.4, { until: tCut - 0.05 });
    if (p.captions) S.captions({});
  };

  T["two-sides"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww, P = f.portrait;
    var Lp = p.left || {}, Rp = p.right || {};
    var A = castOf(Lp, "officer", "britain"), B = castOf(Rp, "officer", "germany");
    var lines = arr(p.lines).filter(function (l) { return l && l.text; }).slice(0, 8);
    if (!lines.length) lines = [{ side: "left", text: "We hold." }, { side: "right", text: "We attack." }];
    var win = lineWindows(lines.map(function (l) { return str(l.text); }));
    var s = f.shot("plain", 0, 1e9, { color: INK });
    s.cam.drift = 0;
    var halves = { left: makeHalf(s, "left"), right: makeHalf(s, "right") };
    drawLocation(halves.left, locName(Lp.location || p.location || "trench"), { nation: A.nation });
    drawLocation(halves.right, locName(Rp.location || p.location || "trench"), { nation: B.nation, night: !!Rp.night });
    var sc = P ? 0.78 : f.square ? 1.0 : 1.15;
    var actors = {};
    [["left", A, halves.left, Lp], ["right", B, halves.right, Rp]].forEach(function (q) {
      var h = q[2], gy = h.groundY;
      var y = P ? gy - FEET * sc - (q[0] === "left" ? 0 : 0) : gy - FEET * sc;
      var x = Ww / 2 + (P ? 0 : q[0] === "left" ? 30 : -30);
      var a = h.character(q[1], { x: x, y: y, scale: sc, facing: q[0] === "left" ? 0.5 : -0.5, expression: q[3].expression || "serious", gesture: q[3].gesture || "rest" });
      actors[q[0]] = a;
      h.flag(q[1].nation, { x: x + (q[0] === "left" ? 1 : -1) * 250 * sc, y: y - 190 * sc, w: 150, h: 98, pole: 470, layer: "near" });
      a.slideIn(q[0], 0.05, 0.4);
    });
    // divider
    var jag = jaggedD(Ww, P, "left");
    svgEl("path", { d: jag.line, fill: "none", stroke: INK, "stroke-width": 26, "stroke-linejoin": "round" }, s.over);
    svgEl("path", { d: jag.line, fill: "none", stroke: "#FFFFFF", "stroke-width": 8, "stroke-linejoin": "round" }, s.over);
    // acting per line
    var spk = lines.map(function (l, i) { return l.side === "right" ? "right" : l.side === "left" ? "left" : i % 2 ? "right" : "left"; });
    lines.forEach(function (l, i) {
      var w = win[i], who = spk[i], other = who === "left" ? "right" : "left";
      actors[who].say(w.start, w.end).expression(l.expression || "determined", w.start - 0.1).gesture(l.gesture || (i % 2 ? "point" : "fist"), w.start).hop(w.start, 24, 0.28);
      actors[who].gesture("rest", w.end + 0.3);
      actors[other].expression(l.reaction || "worried", w.start + 0.2).lookAt(other === "left" ? "right" : "left", w.start);
    });
    // focus dimming
    s.onFrame(function (t) {
      var cur = null;
      for (var i = 0; i < lines.length; i++) if (t >= win[i].start - 0.1 && t < win[i].end + 0.5) cur = spk[i];
      setA(halves.left.dim, "opacity", cur === "right" ? "0.28" : "0");
      setA(halves.right.dim, "opacity", cur === "left" ? "0.28" : "0");
    });
    // labels + bubbles
    var tl = V.timeline();
    [["left", A, Lp], ["right", B, Rp]].forEach(function (q) {
      var lab = el("div.ch-vlab.ch-vlab-" + q[0], { parent: f.ui });
      el("div.ch-vlab-n", { parent: lab, text: (q[2].label || q[1] && NATIONS[q[1].nation].name || "").toUpperCase() });
      lab.style.setProperty("--chip", NATIONS[q[1].nation].accent);
      tl.fromTo(lab, { opacity: 0, x: (q[0] === "right" ? 1 : -1) * u(200) }, { opacity: 1, x: 0 }, { at: 0.25, dur: 0.3, ease: EASE.whip });
    });
    lines.forEach(function (l, i) {
      var w = win[i], who = spk[i], nx = win[i + 1] ? win[i + 1].start - 0.05 : 1e9;
      var pos = P ? { x: 0.5, y: who === "left" ? 0.1 : 0.6, w: 0.84, tail: "down" } : { x: who === "left" ? 0.25 : 0.75, y: f.square ? 0.16 : 0.2, w: 0.42, tail: "down" };
      S.bubble(l.text, w.start - 0.05, Math.min(nx, w.end + 1.0), { x: pos.x, y: pos.y, width: pos.w, tail: pos.tail });
    });
    if (p.title) S.thumb(p.title, T0(), { x: 0.5, y: P ? 0.5 : 0.88, width: P ? 0.8 : 0.5, size: "md", until: win[0].start - 0.1 });
    if (p.date) S.dateTag(p.date, T0(), { x: 0.5, y: P ? 0.04 : 0.07, size: "sm" });
  };

  T["war-map"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww, P = f.portrait;
    var s = f.shot("map", 0, 1e9, { mapShift: P ? 0 : 0.03 });
    var M = s.map0;
    var regions = arr(p.regions).filter(function (r) { return r && r.name; }).slice(0, 12);
    var arrows = arr(p.arrows).filter(function (a) { return a && a.from && a.to; }).slice(0, 8);
    var targets = arr(p.targets).filter(function (t) { return t && t.at; }).slice(0, 6);
    var fronts = arr(p.fronts).filter(function (fr) { return fr && arr(fr.points).length > 1; }).slice(0, 3);
    var labels = arr(p.labels).filter(function (l) { return l && l.text && l.at; }).slice(0, 8);
    var items = [];
    regions.forEach(function (r) { items.push({ k: "r", o: r, w: r.word || r.name }); });
    fronts.forEach(function (fr) { items.push({ k: "f", o: fr, w: fr.word }); });
    arrows.forEach(function (a) { items.push({ k: "a", o: a, w: a.word || a.to }); });
    targets.forEach(function (t) { items.push({ k: "t", o: t, w: t.word || t.at }); });
    labels.forEach(function (l) { items.push({ k: "l", o: l, w: l.word || l.text }); });
    var times = S.syncTimes(items.map(function (it) { return it.w; }), { start: Math.min(0.8, Dd * 0.15), end: Dd * 0.85, lead: 0.15, minGap: 0.35 });
    items.forEach(function (it, i) {
      var t = times[i], o = it.o;
      if (it.k === "r") { M.region(o.name, o.nation || o.color || "red", t); if (o.flag !== false && o.nation) M.flag(o.name, o.nation, { layer: "under" }); if (o.label !== false) M.label(o.label || NATIONS[nationId(o.nation || "neutral")].name, o.name, { at: t, size: 30, dy: 56 }); }
      else if (it.k === "f") M.front(arr(o.points), t, { color: o.color || RED });
      else if (it.k === "a") M.arrow(o.from, o.to, t, { color: o.color || (o.nation ? NATIONS[nationId(o.nation)].accent : RED), curve: num(o.curve, 0.15) });
      else if (it.k === "t") { M.target(o.at, t, { color: o.color || RED }); if (o.boom) M.burst(o.at, t + 0.35); if (o.label) M.label(o.label, o.at, { at: t + 0.1, size: 30, dy: -70, color: "#FFE8A0" }); }
      else if (it.k === "l") M.label(o.text, o.at, { at: t, size: num(o.size, 34), color: o.color });
    });
    var z0 = P ? 1.0 : 1.02;
    s.cam.set({ zoom: z0 }).push(z0 + 0.1, 0.2, Dd);
    if (arrows.length && p.focus !== false) { var fo = M.world(arrows[0].to); s.cam.to({ x: lerp(Ww / 2, fo.x, 0.4), y: lerp(500, fo.y, 0.4), zoom: z0 + 0.14 }, times[regions.length + fronts.length] || Dd * 0.4, 1.4, "inOutCubic"); }
    // narrator in the corner
    if (p.narrator !== false) {
      var c = castOf(p.narrator || {}, "general", p.nation || "neutral");
      var pos = P ? { x: Ww * 0.2, y: 880, s: 0.6 } : f.square ? { x: Ww * 0.12, y: 860, s: 0.62 } : { x: Ww * 0.09, y: 840, s: 0.7 };
      var a = s.character(c, { x: pos.x, y: pos.y, scale: pos.s, facing: 0.5, expression: (p.narrator && p.narrator.expression) || "serious", gesture: "point", parent: s.over });
      narrate(a); liven(a, 0, Dd, ["point", "present", "point-up", "rest"]);
      items.forEach(function (it, i) { a.gesture("point", times[i] - 0.1).hop(times[i], 20, 0.26); a.expression(it.k === "t" ? "shocked" : it.k === "a" ? "determined" : "serious", times[i]); });
    }
    if (p.title) S.thumb(p.title, T0(), { x: 0.5, y: P ? 0.08 : 0.11, width: P ? 0.9 : f.square ? 0.56 : 0.6, size: f.square ? "sm" : "md", kicker: p.kicker, rotate: -2 });
    if (p.date) S.dateTag(p.date, T0() + 0.15, { x: P ? 0.5 : f.square ? 0.84 : 0.88, y: P ? 0.16 : 0.09, size: f.square ? "sm" : "md" });
    if (p.caption) S.caption(p.caption, syncAt(p.captionWord || S.autoKey(p.caption), 0, Dd * 0.55));
  };

  T["diplomacy-desk"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww, P = f.portrait;
    var A = castOf(p.sender || {}, "diplomat", "britain"), B = castOf(p.receiver || {}, "diplomat", "germany");
    var n = clamp(Math.round(num(p.letters, 4)), 1, 8);
    var s = f.shot("office", 0, 1e9, { nation: A.nation, nation2: B.nation });
    var sc = P ? 0.78 : f.square ? 0.95 : 1.1;
    var gy = s.groundY;
    var ax = P ? Ww * 0.25 : Ww * 0.24, bx = P ? Ww * 0.76 : Ww * 0.76, y = gy - FEET * sc;
    var a = s.character(A, { x: ax, y: y, scale: sc, facing: 0.5, expression: "smile", gesture: "hold", prop: p.kind === "telegram" ? "telegram" : "letter" });
    var b = s.character(B, { x: bx, y: y, scale: sc, facing: -0.5, expression: p.receiverMood || "calm", gesture: p.receiverGesture || "cross" });
    var wordsL = arr(p.words).map(str).filter(Boolean);
    var times = S.syncTimes(wordsL.length ? wordsL.slice(0, n).concat(new Array(Math.max(0, n - wordsL.length)).fill(null)) : new Array(n).fill(null), { start: Math.min(1.0, Dd * 0.15), end: Dd * (p.reply ? 0.6 : 0.72), lead: 0.2, minGap: 0.5 });
    narrate(a, 0, Dd);
    var pileX = bx - 150 * sc, pileY = y + 150 * sc;
    times.forEach(function (t, i) {
      a.gesture("hold-up", t - 0.3).gesture("hold", t + 0.25).hop(t - 0.05, 26, 0.3).expression(i < n - 1 ? "smile" : "worried", t - 0.3);
      s.letter({ x: ax + 90 * sc, y: y + 40 * sc }, { x: pileX + (i % 3) * 14, y: pileY - i * 8 }, t, { kind: p.kind === "telegram" ? "telegram" : "letter", dur: 0.7, until: 1e9, scale: sc * 1.1 });
      b.expression(i % 2 ? "calm" : "sleepy", t + 0.5).lookAt("left", t + 0.4).look(0, 0, t + 1.2);
      if (i === n - 1) a.prop(null, t + 0.05);
    });
    var tEnd = Math.min(Dd - 0.6, times[n - 1] + 1.1);
    var counter = el("div.ch-counter", { parent: f.ui });
    counter.style.left = pct(P ? 0.5 : 0.5); counter.style.top = pct(P ? 0.3 : f.square ? 0.14 : 0.16);
    var cn = el("span.ch-counter-n", { parent: counter, text: "0" }), cl = el("span.ch-counter-l", { parent: counter, text: " " + plain(p.counterLabel || (p.kind === "telegram" ? "telegrams" : "letters")).toUpperCase() });
    var tl = V.timeline();
    tl.fromTo(counter, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1 }, { at: times[0] + 0.5, dur: 0.3, ease: EASE.boing });
    times.forEach(function (t, i) { tl.set(cn, { text: i + 1 }, { at: t + 0.6 }); tl.fromTo(cn, { scale: 1.5 }, { scale: 1 }, { at: t + 0.6, dur: 0.25, ease: EASE.boing }); });
    if (p.reply) {
      var tR = clamp(syncAt(p.replyWord, times[n - 1], Dd * 0.78), times[n - 1] + 1.2, Dd - 0.8);
      b.gesture("hold-up", tR - 0.4).prop("letter", tR - 0.4).prop(null, tR + 0.05).gesture("rest", tR + 0.3).expression("smug", tR - 0.4);
      s.letter({ x: bx - 90 * sc, y: y + 40 * sc }, { x: ax + 60 * sc, y: y + 90 * sc }, tR, { dur: 0.7, until: 1e9, scale: sc * 1.1 });
      a.expression(p.senderReaction || "happy", tR + 0.75).gesture("hold-up", tR + 0.7).prop("letter", tR + 0.7).hop(tR + 0.75, 40, 0.35);
      if (p.stamp) f.stamp(p.stamp, tR + 1.0, { x: 0.5, y: P ? 0.5 : 0.45, color: p.stampColor || BLUE });
    } else {
      a.expression(p.senderReaction || "angry", tEnd).gesture("hands-head", tEnd).shake(tEnd, 0.6, 6);
      b.expression("smug", tEnd + 0.2).gesture("shrug", tEnd + 0.2);
      s.qmarks(ax, y - 160 * sc, tEnd - 0.4, tEnd + 2.4, { count: 2, size: 70 });
      f.stamp(p.stamp || "NO REPLY", Math.min(Dd - 0.4, tEnd + 0.5), { x: 0.5, y: P ? 0.5 : 0.45, color: p.stampColor || RED });
    }
    if (p.title) S.thumb(p.title, T0(), { x: 0.5, y: P ? 0.1 : 0.08, width: P ? 0.9 : 0.6, size: "md", until: times[0] + 0.3 });
    if (p.date) S.dateTag(p.date, T0() + 0.1, { x: P ? 0.5 : 0.12, y: P ? 0.2 : 0.09, size: "sm" });
    S.nameplate(a, NATIONS[A.nation].name, 0.5); S.nameplate(b, NATIONS[B.nation].name, 0.6);
  };

  T["headline-thumb"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww, P = f.portrait;
    var c = castOf(p, "officer", p.nation || "germany");
    var side = sideOf(p);
    var tHit = syncAt(p.word || S.autoKey(p.title), 0, Dd * 0.35, 0.05);
    tHit = clamp(tHit, 0.5, Dd - 1);
    var s = f.shot("plain", 0, 1e9, { nation: c.nation !== "neutral" ? c.nation : null, color: p.color || "#F6E6C8" });
    var fr = s.frame(P ? "medium" : "close", P ? "center" : side);
    if (P) fr.y += 220; else fr.y += f.square ? 180 : 140;
    if (f.square) fr.scale *= 0.85;
    var a = s.character(c, { x: fr.x, y: fr.y, scale: fr.scale, facing: P ? 0 : side === "left" ? 0.4 : -0.4, expression: p.expression || "worried", gesture: "rest" });
    narrate(a, 0, Dd);
    a.expression(p.reaction || "shocked", tHit).gesture(p.gesture || "hands-head", tHit).hop(tHit, 50, 0.36).shake(tHit + 0.1, 0.6, 7);
    a.expression(p.afterExpression || p.expression || "worried", Math.min(Dd - 0.3, tHit + 2.2)).gesture("rest", Math.min(Dd - 0.3, tHit + 2.2));
    s.focusLines(tHit, tHit + 1.0, { layer: "under", x: fr.x, y: fr.y, inner: 320, color: INK, opacity: 0.18 });
    s.sparkles(tHit, 1e9, { count: 8, size: 16, area: { x: fr.x - 300, y: fr.y - 350, w: 600, h: 400 } });
    if (p.target) s.target(fr.x, fr.y - 20, tHit - 0.1, { r: 150 * fr.scale, layer: "over" });
    s.cam.set({ zoom: 1 }).push(1.06, 0, Dd);
    f.flash(tHit, "#FFFFFF", 0.22, 0.6);
    var tx = P ? 0.5 : side === "left" ? 0.7 : 0.3;
    S.thumb(p.title || "WHY?", tHit, { x: f.square ? (side === "left" ? 0.66 : 0.34) : tx, y: P ? 0.2 : f.square ? 0.24 : 0.4, width: P ? 0.92 : f.square ? 0.56 : 0.52, size: P ? "lg" : f.square ? "md" : "xl", color: p.titleColor, kicker: p.kicker, maxLines: 3 });
    if (p.sub) S.caption(p.sub, Math.min(Dd - 0.5, tHit + 0.6), { color: NATIONS[c.nation].accent });
    if (p.date) S.dateTag(p.date, T0(), { x: P ? 0.5 : side === "left" ? (f.square ? 0.8 : 0.86) : (f.square ? 0.2 : 0.14), y: P ? 0.07 : 0.09, size: f.square ? "sm" : "md" });
    if (p.flag !== false && c.nation !== "neutral") s.flag(c.nation, { x: fr.x + (side === "left" ? -1 : 1) * 220 * fr.scale * (P ? 0.9 : 1), y: fr.y - 240 * fr.scale, w: 160, h: 104, pole: 620, layer: "near" });
  };

  T["date-card"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww, P = f.portrait;
    var nation = nationId(p.nation || "neutral");
    var s = f.shot("plain", 0, 1e9, { nation: nation !== "neutral" ? nation : null, color: p.color || "#F3E4C2" });
    var tD = Math.min(0.35, Dd * 0.1), tT = syncAt(p.word || S.autoKey(p.title), tD + 0.2, Math.min(1.2, Dd * 0.35));
    S.dateTag(p.date || "1939", tD, { x: 0.5, y: P ? 0.3 : 0.32, size: "lg", rotate: -4 });
    if (p.title) S.thumb(p.title, tT, { x: 0.5, y: P ? 0.5 : 0.56, width: P ? 0.92 : 0.74, size: P ? "lg" : "xl", kicker: p.chapter });
    if (p.place) S.tag(p.place, tT + 0.35, { x: 0.5, y: P ? 0.66 : 0.78, dark: true });
    s.planes(0, 1e9, { count: 2, y: 120, kind: p.planes === "bomber" ? "bomber" : "fighter", speed: 200, layer: "far", scale: 0.6 });
    // chibi peeks up from the bottom corner and waves
    var c = castOf(p, "soldier", nation);
    var px = P ? Ww * 0.5 : Ww * 0.84, py = P ? 1000 : 1000, sc = P ? 0.8 : 0.9;
    var a = s.character(c, { x: px, y: py + 320, scale: sc, expression: "happy", gesture: "wave" });
    a.moveTo(px, (P ? 1000 : 1000) - 60 * sc, tD + 0.3, 0.5, "boing");
    narrate(a, tD + 0.6, Dd); a.gesture("rest", Math.min(Dd - 0.2, tD + 2.0)).gesture("point-up", tT).gesture("rest", Math.min(Dd - 0.2, tT + 1.2));
    if (nation !== "neutral") s.flag(nation, { x: P ? Ww * 0.12 : Ww * 0.08, y: 560, w: 150, h: 98, pole: 480, layer: "near" });
    s.cam.set({ zoom: 1.04 }).push(1.0, 0, Dd);
    f.flash(tD, "#FFFFFF", 0.2, 0.5);
  };

  T["versus-forces"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww, P = f.portrait;
    var Lp = p.left || {}, Rp = p.right || {};
    var A = nationId(Lp.nation || "britain"), B = nationId(Rp.nation || "germany");
    var rows = arr(p.rows).filter(function (r) { return r && r.label; }).slice(0, 4);
    if (!rows.length) rows = [{ label: "Soldiers", left: 100, right: 150, icon: "soldier" }];
    var s = f.shot("plain", 0, 1e9, { color: "#F6EBD2" });
    s.cam.drift = 0;
    // halves
    var jag = jaggedD(Ww, P, "left");
    var cL = mix(NATIONS[A].accent, "#FFFFFF", 0.78), cR = mix(NATIONS[B].accent, "#FFFFFF", 0.78);
    svgEl("path", { d: jaggedD(Ww, P, "left").clip, fill: cL }, s.under);
    svgEl("path", { d: jaggedD(Ww, P, "right").clip, fill: cR }, s.under);
    svgEl("path", { d: jag.line, fill: "none", stroke: INK, "stroke-width": 22, "stroke-linejoin": "round" }, s.over);
    svgEl("path", { d: jag.line, fill: "none", stroke: "#FFFFFF", "stroke-width": 7, "stroke-linejoin": "round" }, s.over);
    var fw = P ? 150 : 200, fh = fw * 0.65;
    s.flag(A, { x: P ? Ww * 0.5 - fw / 2 : Ww * 0.25 - fw / 2, y: P ? 70 : 60, w: fw, h: fh, layer: "under" });
    s.flag(B, { x: P ? Ww * 0.5 - fw / 2 : Ww * 0.75 - fw / 2, y: P ? 560 : 60, w: fw, h: fh, layer: "under" });
    var times = S.syncTimes(rows.map(function (r) { return r.word || S.autoKey(r.label); }), { start: Math.min(1.0, Dd * 0.18), end: Dd * 0.8, lead: 0.2, minGap: 0.7 });
    var ICON = { soldier: soldierIcon, tank: tankArt, plane: function (c) { return planeArt("fighter", c); }, bomber: function (c) { return planeArt("bomber", c); }, ship: function (c) { return shipArt(c, false); } };
    var tl = V.timeline();
    rows.forEach(function (r, i) {
      var t = times[i], lv = Math.max(0, num(r.left, 0)), rv = Math.max(0, num(r.right, 0)), mx = Math.max(lv, rv, 1);
      var icon = ICON[str(r.icon).toLowerCase()] || ICON.soldier;
      [[A, lv, "left"], [B, rv, "right"]].forEach(function (q) {
        var count = Math.max(1, Math.round((q[1] / mx) * (P ? 6 : 8))), G = g(s.wfx, { display: "none" });
        var rowY = P ? (q[2] === "left" ? 190 : 680) + i * 80 : 250 + i * 140;
        var x0 = P ? Ww * 0.06 : q[2] === "left" ? Ww * 0.12 : Ww * 0.56, span = P ? Ww * 0.56 : Ww * 0.22;
        var isc = P ? 0.3 : 0.36, step = Math.min(span / (P ? 6 : 8), 170 * isc);
        var cells = [];
        for (var k = 0; k < count; k++) { var c = g(G, { transform: "translate(" + fx(x0 + 40 + k * step) + "," + fx(rowY) + ") scale(" + isc + ")" }); c.innerHTML = icon(NATIONS[q[0]].uni); cells.push(c); }
        s.fns.push(function (tt) {
          var on = tt >= t; setD(G, on); if (!on) return;
          cells.forEach(function (c, k) { var pp = EASE.boing(clamp((tt - t - k * 0.06) / 0.3, 0, 1)); setA(c, "transform", "translate(" + fx(x0 + 40 + k * step) + "," + fx(rowY) + ") scale(" + fx(isc * pp * 100) / 100 + ")"); });
        });
        var nx = P ? 0.82 : q[2] === "left" ? 0.42 : 0.86, ny = P ? (rowY - 10) / 1000 : (rowY - 6) / 1000;
        S.stat(q[1], t, { x: nx, y: ny, width: P ? 0.3 : 0.14, size: P ? 56 : 62, color: NATIONS[q[0]].accent, suffix: r.suffix || "", dur: 0.9 });
      });
      var lab = el("div.ch-rowlab", { parent: f.ui, text: plain(r.label).toUpperCase() });
      lab.style.top = pct(P ? (190 + i * 80 - 70) / 1000 : (250 + i * 140 - 96) / 1000); lab.style.left = pct(P ? 0.06 : 0.5);
      if (!P) lab.style.transform = "translate(-50%,0)";
      windowed(lab, t - 0.1, 1e9);
      tl.fromTo(lab, { opacity: 0, y: u(14) }, { opacity: 1, y: 0 }, { at: Math.max(0, t - 0.1), dur: 0.25, ease: "outCubic" });
      if (P) { var lab2 = el("div.ch-rowlab", { parent: f.ui, text: plain(r.label).toUpperCase() }); lab2.style.top = pct((680 + i * 80 - 70) / 1000); lab2.style.left = pct(0.06); windowed(lab2, t - 0.1, 1e9); tl.fromTo(lab2, { opacity: 0, y: u(14) }, { opacity: 1, y: 0 }, { at: Math.max(0, t - 0.1), dur: 0.25, ease: "outCubic" }); }
    });
    S.vsBadge(0.3, { x: 0.5, y: P ? 0.5 : 0.86 });
    // reacting chibis
    var totL = rows.reduce(function (acc, r) { return acc + num(r.left, 0); }, 0), totR = rows.reduce(function (acc, r) { return acc + num(r.right, 0); }, 0);
    var sc = P ? 0.55 : f.square ? 0.62 : 0.72;
    var ca = s.character({ role: Lp.role || "general", nation: A }, { x: P ? Ww * 0.14 : Ww * 0.07, y: (P ? 500 : 1000) - FEET * sc - (P ? -10 : 10), scale: sc, facing: 0.5, expression: totL >= totR ? "proud" : "worried", gesture: "cross", parent: s.over });
    var cb = s.character({ role: Rp.role || "general", nation: B }, { x: P ? Ww * 0.86 : Ww * 0.93, y: 1000 - FEET * sc - 10, scale: sc, facing: -0.5, expression: totR >= totL ? "proud" : "worried", gesture: "cross", parent: s.over });
    narrate(totL >= totR ? ca : cb, 0, Dd);
    rows.forEach(function (r, i) { var t = times[i], lw = num(r.left, 0) >= num(r.right, 0); (lw ? ca : cb).expression("proud", t + 0.3).gesture("fist", t + 0.3).hop(t + 0.3, 30, 0.3); (lw ? cb : ca).expression("worried", t + 0.3).gesture("shrug", t + 0.3); });
    if (p.title) S.thumb(p.title, T0(), { x: 0.5, y: P ? 0.04 : 0.07, width: P ? 0.8 : 0.4, size: "sm", kicker: p.kicker, rotate: 0 });
    var labY = P ? [0.075, 0.565] : [0.1, 0.1];
    S.tag(Lp.label || NATIONS[A].name, 0.25, { x: P ? 0.5 : 0.25, y: P ? labY[0] + 0.1 : 0.2, color: NATIONS[A].accent });
    S.tag(Rp.label || NATIONS[B].name, 0.35, { x: P ? 0.5 : 0.75, y: P ? labY[1] + 0.1 : 0.2, color: NATIONS[B].accent });
  };

  T["neutral-question"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww, P = f.portrait;
    var country = str(p.country || "switzerland"), cn = nationId(p.countryNation || country);
    var agg = nationId(p.aggressor || "germany");
    var c = castOf(p, "officer", agg);
    var s = f.shot("map", 0, 1e9, { mapShift: P ? 0 : 0.1 });
    var M = s.map0;
    var tQ = syncAt(p.word || S.autoKey(p.question), 0, Dd * 0.45, 0.1);
    tQ = clamp(tQ, 0.9, Dd - 0.9);
    var around = arr(p.aggressorRegions).length ? arr(p.aggressorRegions) : [agg === "germany" ? "germany" : agg];
    around.forEach(function (r, i) { M.region(r, agg, 0.2 + i * 0.15); });
    M.region(country, mix(NATIONS[cn].accent, "#FFFFFF", 0.55), 0.6);
    M.flag(country, cn, {});
    M.label(NATIONS[cn].name, country, { at: 0.7, size: 30, dy: 70 });
    var tgt = M.world(country), src = M.world(around[0]);
    arr(p.arrows !== false ? [1] : []).forEach(function () {
      M.arrow({ x: lerp(src.x, tgt.x, 0.15) / 1, y: lerp(src.y, tgt.y, 0.15) }, { x: lerp(src.x, tgt.x, 0.62), y: lerp(src.y, tgt.y, 0.62) }, Math.max(0.3, tQ - 0.9), { color: NATIONS[agg].accent, curve: 0.1 });
    });
    M.qmarks(country, tQ - 0.1, 1e9, { count: 3 });
    // zoom the camera toward the country
    s.cam.set({ zoom: 1.05 }).to({ x: lerp(Ww / 2, tgt.x, P ? 0.5 : 0.55), y: lerp(500, tgt.y, 0.5), zoom: P ? 1.5 : 1.7 }, 0.2, 1.6, "inOutCubic");
    // the officer stands on the side, puzzled
    var pos = P ? { x: Ww * 0.5, y: 1000 - FEET * 0.8 - 20, s: 0.8 } : f.square ? { x: Ww * 0.16, y: 1000 - FEET * 0.95 - 20, s: 0.95 } : { x: Ww * 0.17, y: 1000 - FEET * 1.1 - 10, s: 1.1 };
    var a = s.character(c, { x: pos.x, y: pos.y, scale: pos.s, facing: P ? 0 : 0.6, expression: p.expression || "thinking", gesture: "think", prop: p.prop || "map", parent: s.over });
    narrate(a, 0, Dd);
    a.lookAt("right", 0.2).expression("confused", tQ).gesture("shrug", tQ).prop(null, tQ).hop(tQ, 34, 0.32);
    a.expression(p.afterExpression || "nervous", Math.min(Dd - 0.3, tQ + 2)).gesture("think", Math.min(Dd - 0.3, tQ + 2));
    f.flash(tQ, "#FFFFFF", 0.18, 0.4);
    S.thumb(p.question || "WHY NOT?", tQ, { x: 0.5, y: P ? 0.1 : f.square ? 0.13 : 0.12, width: P ? 0.9 : f.square ? 0.7 : 0.6, size: f.square ? "md" : "lg", kicker: p.kicker });
    if (p.date) S.dateTag(p.date, T0(), { x: P ? 0.5 : 0.1, y: P ? 0.22 : 0.09, size: "sm" });
    if (p.caption) S.caption(p.caption, Math.min(Dd - 0.5, tQ + 1.2));
  };

  T["timeline-war"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww, P = f.portrait;
    var evs = arr(p.events).filter(function (e) { return e && (e.label || e.date); }).slice(0, 6);
    if (!evs.length) evs = [{ date: "1914", label: "War begins" }, { date: "1918", label: "Armistice" }];
    var s = f.shot("plain", 0, 1e9, { color: p.color || "#F3E6CC" });
    var times = S.syncTimes(evs.map(function (e) { return e.word || S.autoKey(e.label) || e.date; }), { start: Math.min(1.0, Dd * 0.15), end: Dd * 0.82, lead: 0.2, minGap: 0.6 });
    var n = evs.length;
    var line = g(s.under), pts = [];
    if (P) { var y0 = 190, y1 = 800; for (var i = 0; i < n; i++) pts.push({ x: Ww * 0.5, y: y0 + ((y1 - y0) * i) / Math.max(1, n - 1) }); }
    else { var x0 = Ww * (f.square ? 0.17 : 0.14), x1 = Ww * (f.square ? 0.83 : 0.86); for (i = 0; i < n; i++) pts.push({ x: x0 + ((x1 - x0) * i) / Math.max(1, n - 1), y: f.square ? 520 : 540 }); }
    var road = svgEl("path", { d: P ? "M" + P2(Ww / 2, 100) + " L" + P2(Ww / 2, 900) : "M" + P2(Ww * 0.04, pts[0].y) + " L" + P2(Ww * 0.96, pts[0].y), stroke: INK, "stroke-width": 26, "stroke-linecap": "round" }, line);
    svgEl("path", { d: road.getAttribute("d"), stroke: "#FFFFFF", "stroke-width": 8, "stroke-dasharray": "40 30", "stroke-linecap": "round" }, line);
    var dotsG = g(s.wfx);
    var tl = V.timeline();
    evs.forEach(function (e, i) {
      var t = times[i], q = pts[i];
      var dot = svgEl("circle", { cx: q.x, cy: q.y, r: 26, fill: e.nation ? NATIONS[nationId(e.nation)].accent : RED, stroke: INK, "stroke-width": 6 }, dotsG);
      s.fns.push(function (tt) { var pp = EASE.boing(clamp((tt - t) / 0.3, 0, 1)); setA(dot, "transform", "translate(" + P2(q.x, q.y) + ") scale(" + fx(pp * 100) / 100 + ") translate(" + P2(-q.x, -q.y) + ")"); });
      var up = P ? i % 2 === 0 : i % 2 === 0;
      var lx = P ? (up ? 0.25 : 0.75) : q.x / Ww, ly = P ? q.y / 1000 : (up ? q.y - 150 : q.y + 150) / 1000;
      if (e.date) S.dateTag(e.date, t, { x: lx, y: P ? ly - 0.045 : ly - (up ? 0.085 : -0.085) * -1 + (up ? -0.05 : 0.05) - (up ? 0 : 0.0), size: "sm", rotate: i % 2 ? 3 : -3 });
      var lab = el("div.ch-tl-label", { parent: f.ui });
      lab.style.left = pct(lx); lab.style.top = pct(P ? ly + 0.03 : ly + (up ? -0.0 : 0.03));
      lab.style.width = pct(P ? 0.42 : Math.min(0.26, 0.9 / n + 0.06));
      var inn = el("div.ch-tl-in", { parent: lab }); inn.appendChild(S.rich(e.label || ""));
      fitText(inn, { maxLines: 3, min: 14 });
      windowed(lab, t, 1e9);
      tl.fromTo(lab, { opacity: 0, y: u(up ? -20 : 20) }, { opacity: 1, y: 0 }, { at: t + 0.1, dur: 0.3, ease: "outBack" });
      if (e.nation) s.flag(e.nation, { x: q.x + (P ? -120 : 36), y: q.y - (P ? 150 : 140), w: 70, h: 46, pole: 110, layer: "near", base: false });
    });
    // little marcher walks the road
    var c = castOf(p, "soldier", p.nation || "neutral");
    var sc = P ? 0.5 : 0.6;
    var a = s.character(c, { x: pts[0].x - (P ? 0 : 120), y: pts[0].y - FEET * sc - 6 + (P ? 0 : 0), scale: sc, facing: "right", expression: "smile", gesture: "march" });
    narrate(a, 0, Dd);
    evs.forEach(function (e, i) {
      var q = pts[i], prev = i ? pts[i - 1] : { x: pts[0].x - (P ? 0 : 120), y: pts[0].y };
      var from = i ? times[i - 1] + 0.4 : 0.1, dur = Math.max(0.4, times[i] - 0.15 - from);
      a.walkTo(q.x - (P ? 110 : 0), q.y - FEET * sc - 6 - (P ? 0 : 0), from, dur);
      a.gesture("march", from).gesture(i % 2 ? "point-up" : "cheer", times[i]).hop(times[i], 30, 0.3).expression(e.expression || (i % 2 ? "surprised" : "happy"), times[i]);
    });
    if (P) a.face("front", 0);
    s.cam.set({ zoom: 1 }).push(1.05, 0, Dd);
    if (p.title) S.thumb(p.title, T0(), { x: 0.5, y: P ? 0.06 : 0.1, width: P ? 0.9 : 0.6, size: "sm", kicker: p.kicker });
  };

  T["crowd-scene"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww, P = f.portrait;
    var loc = p.location || "parade", mood = str(p.mood || "cheer").toLowerCase();
    var s = f.shot(loc, 0, 1e9, { nation: p.nation, planes: mood === "march" ? 0 : undefined });
    var n = clamp(Math.round(num(p.count, 14)), 3, 30);
    var roles = arr(p.roles).length ? arr(p.roles) : mood === "march" ? ["soldier"] : ["civilian", "nurse", "civilian", "soldier"];
    var gy = s.groundY;
    var rows = P ? 3 : 2, sc = P ? 0.42 : f.square ? 0.5 : 0.56;
    var crowd = s.crowd(n, { x: P ? -Ww * 0.05 : Ww * 0.02, w: P ? Ww * 1.1 : Ww * 0.96, y: gy - FEET * sc + 10, rows: rows, roles: roles, nation: p.nation || "neutral", scale: sc, march: mood === "march" ? (p.direction === "left" ? "left" : "right") : false, cheer: mood !== "wait", expression: mood === "wait" ? "worried" : mood === "march" ? "determined" : "happy", distance: Ww * 0.45, dur: Dd });
    var tKey = syncAt(p.word || S.autoKey(p.text), 0, Dd * 0.45);
    crowd.forEach(function (a, i) {
      if (mood !== "march") { a.hop(tKey + (i % 5) * 0.05, 40, 0.34); a.gesture(mood === "wait" ? "hands-head" : "cheer", tKey); a.expression(mood === "wait" ? "shocked" : "excited", tKey); }
      if (i % 4 === 0 && mood === "cheer") a.prop("flag", 0, p.nation || "neutral");
    });
    // one speaking leader in front
    var lc = castOf(p.leader || {}, mood === "march" ? "officer" : "civilian", p.nation || "neutral");
    var ls = sc * 1.6, lx = P ? Ww * 0.5 : Ww * 0.78;
    var lead = s.character(lc, { x: lx, y: gy + 60 - FEET * ls, scale: ls, facing: -0.3, expression: "smile", gesture: mood === "march" ? "salute" : "present", parent: s.over });
    narrate(lead, 0, Dd); liven(lead, 0, Dd, ["present", "point-left", "rest"]);
    lead.expression(mood === "wait" ? "worried" : "excited", tKey).gesture(mood === "wait" ? "shrug" : "cheer", tKey).hop(tKey, 36, 0.3);
    s.cam.set({ zoom: 1.03 }).push(1.0, 0, Dd * 0.5).push(1.05, Dd * 0.5, Dd * 0.5);
    if (p.text) S.thumb(p.text, tKey, { x: P ? 0.5 : 0.36, y: P ? 0.12 : 0.18, width: P ? 0.9 : 0.6, size: P ? "lg" : "lg" });
    if (p.date) S.dateTag(p.date, T0(), { x: P ? 0.5 : 0.12, y: P ? 0.04 : 0.09, size: "sm" });
    if (p.caption) S.caption(p.caption, Math.min(Dd - 0.5, tKey + 1.0));
  };

  T["aftermath-reflection"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww, P = f.portrait;
    var c = castOf(p, "soldier", "neutral"), loc = p.location || "field";
    var s = f.shot(loc, 0, 1e9, { night: loc === "city" });
    s.cam.drift = 0.4;
    var fr = s.frame(P ? "medium" : "medium", P ? "center" : sideOf(p));
    fr.scale *= P ? 0.9 : 0.86; fr.y = s.groundY - FEET * fr.scale;
    if (P) fr.y += 40;
    var a = s.character(c, { x: fr.x, y: fr.y, scale: fr.scale, facing: P ? 0.3 : sideOf(p) === "left" ? 0.5 : -0.5, expression: p.expression || "gloomy", gesture: "rest" });
    if (p.hatOff !== false && ROLES[c.role].hat !== "none") a.hatInHand(0.01);
    a.lookAt("down", 0).lookAt(P ? "right" : sideOf(p) === "left" ? "right" : "left", Math.min(Dd * 0.4, 2.5));
    narrate(a, 0, Dd);
    a.expression(p.endExpression || "calm", Math.max(1, Dd * 0.7));
    var lines = arr(p.lines).filter(Boolean).slice(0, 4).map(str);
    if (lines.length) {
      var win = lineWindows(lines, { start: Math.min(0.6, Dd * 0.1), end: Dd - 0.5 });
      var box = el("div.ch-poem", { parent: f.ui });
      if (!P) { box.style.left = sideOf(p) === "left" ? "50%" : "7%"; box.style.width = f.square ? "46%" : "44%"; box.style.textAlign = "left"; }
      var tl = V.timeline();
      lines.forEach(function (l, i) {
        var row = el("div.ch-poem-l", { parent: box });
        row.appendChild(S.rich(l));
        tl.fromTo(row, { opacity: 0, y: u(22) }, { opacity: 1, y: 0 }, { at: clampT(win[i].start - 0.1), dur: 0.9, ease: "outCubic" });
      });
      fitText(box, { maxLines: 8, min: 14 });
    }
    s.cam.set({ zoom: 1.12, x: Ww * 0.5 + (P ? 0 : (sideOf(p) === "left" ? -1 : 1) * Ww * 0.06) }).to({ zoom: 1.0, x: Ww * 0.5 }, 0, Dd, "inOutSine");
    f.vignette(0, 1e9, 0.7);
    f.filter(0, 1e9, "saturate(0.8) sepia(0.12)");
    if (p.title) S.thumb(p.title, Math.max(Dd - 2.2, Dd * 0.75), { x: P ? 0.5 : sideOf(p) === "left" ? 0.72 : 0.28, y: P ? 0.9 : 0.84, width: P ? 0.9 : 0.4, size: "md", color: "#FFF4DC", rotate: 0 });
    if (p.date) S.dateTag(p.date, T0(), { x: P ? 0.5 : 0.12, y: P ? 0.06 : 0.09, size: "sm", color: "#4A4A58" });
  };

  // ───────────────────────── public API ─────────────────────────
  S.film = function (root) { return film || new Film(root || V.root()); };
  S.scene = function (location, opts) {
    opts = opts || {};
    if (location && typeof location === "object") { opts = location; location = opts.location; }
    return S.film(opts.root).shot(location || "war-room", 0, 1e9, opts);
  };
  S.shot = function (location, from, to, opts) { return S.film().shot(location, from, to, opts); };
  S.currentShot = function () { var f = S.film(); return f.shots[f.shots.length - 1] || f.shot("plain", 0, 1e9); };
  S.character = function (spec, opts) { return S.currentShot().character(spec, opts); };
  S.flash = function (at, color, dur) { return S.film().flash(at, color, dur); };
  S.shakeFrame = function (at, amp, dur) { return S.film().shake(at, amp, dur); };
  S.boom = function (at, opts) { return S.film().boom(at, opts); };
  S.stamp = function (text, at, opts) { return S.film().stamp(text, at, opts); };
  S.vignette = function (from, to, a) { return S.film().vignette(from, to, a); };
  S.half = makeHalf;
  S.chibiTemplates = T;
  S.templateIds = Object.keys(T);

  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = root || V.root();
    try {
      film = null;
      fn(root, props || {});
    } catch (e) {
      V.error("chibi-history template " + id + ": " + (e && e.message));
      try { V.reset(); } catch (e2) {}
      film = null;
      S.fallback(root, V.narration);
    }
    return root;
  };

  /** Fallback: the historian host in the war room talking the narration with captions. Never throws. */
  S.fallback = function (root, narration) {
    try {
      root = root || V.root();
      root.innerHTML = "";
      root.className = "";
      root.removeAttribute("style");
      film = null;
      var f = new Film(root), Dd = D();
      var s = f.shot("war-room", 0, 1e9);
      var fr = s.frame("medium", "center");
      fr.y = s.groundY - FEET * fr.scale;
      var a = s.character({ role: "historian", nation: "neutral" }, { x: fr.x, y: fr.y, scale: fr.scale, expression: "smile", prop: "pointer" });
      narrate(a, 0, Dd);
      liven(a, 0, Dd, ["hold", "point", "hold"]);
      a.gesture("wave", 0.15).gesture("hold", Math.min(Dd - 0.1, 1.3));
      s.cam.set({ zoom: 1 }).push(1.08, 0, Dd);
      S.captions({ text: narration != null ? narration : V.narration });
      return root;
    } catch (e) {
      V.error("chibi-history fallback: " + (e && e.message));
      try {
        V.reset();
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "8%", fontSize: u(64) + "px", fontWeight: "900", textAlign: "center", color: INK, background: PAPER, fontFamily: "Arial Black, Arial, sans-serif" } });
        t.textContent = str(narration || V.narration).split(/\s+/).slice(0, 12).join(" ");
      } catch (e2) {}
    }
  };
})();
