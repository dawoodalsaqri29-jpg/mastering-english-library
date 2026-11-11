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
/* Scene animation engine: COMIC BOOK — the video is a living comic page.
 * Panels with slanted gutters revealed in reading order, a motion-comic camera, inked SVG
 * characters with mouth-synced talking, speech balloons, caption boxes, 3D SFX lettering,
 * Ben-Day halftone shading and page-turn transitions. Pure function of time.
 */
(function () {
  "use strict";
  var V = window.V;
  var S = window.SceneStyle;
  if (!V || !S) return;
  var el = V.el;
  var NS = "http://www.w3.org/2000/svg";

  S.init({
    id: "comic-book",
    kind: "comic",
    enter: "pop",
    titleReveal: "pop",
    drift: 0,
    series: ["#E23B2E", "#2C6FD6", "#FFC93C", "#3DAA5B", "#8E44AD", "#F68B1F"],
  });

  // ───────────────────────── basics ─────────────────────────
  var INK = "#15110E";
  var C = {
    ink: INK, paper: "#FBF5E6", aged: "#F0E0B8", white: "#FFFFFF",
    red: "#E23B2E", red2: "#A8201A", yellow: "#FFD23F", yellow2: "#F6A21E", orange: "#F68B1F",
    blue: "#2C6FD6", blue2: "#1B3F8F", cyan: "#27B5E6", sky: "#86CDF2", sky2: "#C9ECFB",
    green: "#3DAA5B", green2: "#23703A", purple: "#7B3FA0", purple2: "#4A2066", pink: "#F06BA8",
    navy: "#151B44", grey: "#9AA3AD", grey2: "#5E6670", cream: "#FFF3D1", caption: "#FFE45C",
  };
  S.colors = C;
  function u(n) { return n * V.unit; }
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function f1(n) { return Math.round(n * 10) / 10; }
  function D() { return V.duration; }
  function lastT() { return Math.max(0.05, V.duration - 0.05); }
  function cT(t) { return clamp(t, 0, lastT()); }
  function hash01(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function hs(s) { return S.hash(s); }
  function rng(key) { return V.makeRand(((hs(str(key)) ^ (V.seed * 2654435761)) >>> 0) || 1); }
  function plain(t) { return str(t).replace(/\*([^*]+)\*/g, "$1"); }
  var uid = 0;
  function nid(p) { uid++; return "cb" + (p || "") + uid + "_" + V.seed; }
  function sv(tag, attrs, parent) {
    var n = document.createElementNS(NS, tag);
    if (attrs) for (var k in attrs) {
      if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
      var v = attrs[k];
      if (v == null) continue;
      if (k === "text") n.textContent = v;
      else if (k === "style" && typeof v === "object") { for (var s in v) n.style[s] = v[s]; }
      else n.setAttribute(k, String(v));
    }
    if (parent) parent.appendChild(n);
    return n;
  }
  S.svg = sv;
  function pts(list) { return list.map(function (p) { return f1(p[0]) + "," + f1(p[1]); }).join(" "); }
  function polyD(list) { return "M" + list.map(function (p) { return f1(p[0]) + " " + f1(p[1]); }).join(" L") + " Z"; }
  var FONT = 'Inter, "Noto Sans", "Segoe UI", system-ui, sans-serif';

  // ───────────────────────── module state ─────────────────────────
  var comic = null; // current comic (frame, camera, pages)
  function cur() { if (!comic) S.comic(); return comic; }
  function curPage() { var c = cur(); if (!c.page) S.page(1); return c.page; }

  // ───────────────────────── patterns (Ben-Day dots, hatching) ─────────────────────────
  var patCache = {};
  function defs() { return cur().defs; }
  /** url(#id) of a fill pattern. kind: dots | hatch | cross | lines. size in user units of the referencing SVG. */
  S.pattern = function (kind, color, size, opts) {
    opts = opts || {};
    size = size || u(12);
    var r = opts.r != null ? opts.r : 0.32;
    var key = [kind, color, f1(size), r, opts.angle || 0, opts.bg || "", opts.w || ""].join("|");
    if (patCache[key]) return patCache[key];
    var id = nid("p");
    var ang = opts.angle != null ? opts.angle : kind === "dots" ? 45 : 0;
    var p = sv("pattern", { id: id, patternUnits: "userSpaceOnUse", width: f1(size), height: f1(size), patternTransform: "rotate(" + ang + ")" }, defs());
    if (opts.bg) sv("rect", { width: size, height: size, fill: opts.bg }, p);
    var lw = opts.w || size * 0.16;
    if (kind === "dots") {
      sv("circle", { cx: size / 2, cy: size / 2, r: f1(size * r * 100) / 100, fill: color }, p);
    } else if (kind === "hatch") {
      sv("path", { d: "M0 " + size / 2 + " H" + size, stroke: color, "stroke-width": lw }, p);
      p.setAttribute("patternTransform", "rotate(" + (opts.angle != null ? opts.angle : -45) + ")");
    } else if (kind === "cross") {
      sv("path", { d: "M0 " + size / 2 + " H" + size + " M" + size / 2 + " 0 V" + size, stroke: color, "stroke-width": lw }, p);
      p.setAttribute("patternTransform", "rotate(" + (opts.angle != null ? opts.angle : 45) + ")");
    } else {
      sv("path", { d: "M0 " + size / 2 + " H" + size, stroke: color, "stroke-width": lw }, p);
    }
    patCache[key] = "url(#" + id + ")";
    return patCache[key];
  };

  /** Graduated Ben-Day halftone: a single <path> of dots whose radius ramps along a direction or radially.
   *  opts: x,y,w,h, step, maxR, minR, color, angle (deg, direction of growth) | radial:{cx,cy,r0,r1}, invert, ease */
  S.halftone = function (parent, opts) {
    opts = opts || {};
    var x0 = opts.x || 0, y0 = opts.y || 0, w = opts.w || 100, h = opts.h || 100;
    var step = opts.step || u(16);
    var n = (w / step) * (h / step);
    if (n > 2600) step *= Math.sqrt(n / 2600);
    var maxR = opts.maxR != null ? opts.maxR : step * 0.46;
    var minR = opts.minR != null ? opts.minR : 0;
    var a = ((opts.angle != null ? opts.angle : 90) * Math.PI) / 180;
    var dx = Math.cos(a), dy = Math.sin(a);
    var corners = [[0, 0], [w, 0], [0, h], [w, h]].map(function (c) { return c[0] * dx + c[1] * dy; });
    var pmin = Math.min.apply(null, corners), pmax = Math.max.apply(null, corners);
    var from = opts.from != null ? opts.from : 0, to = opts.to != null ? opts.to : 1;
    var d = [];
    var row = 0;
    for (var yy = step / 2; yy < h + step; yy += step * 0.866, row++) {
      for (var xx = (row % 2 ? step / 2 : 0); xx < w + step; xx += step) {
        var p;
        if (opts.radial) {
          var R = opts.radial;
          var dd = Math.sqrt((xx - R.cx) * (xx - R.cx) + (yy - R.cy) * (yy - R.cy));
          p = clamp((dd - R.r0) / Math.max(1, R.r1 - R.r0), 0, 1);
        } else {
          p = ((xx * dx + yy * dy) - pmin) / Math.max(1, pmax - pmin);
        }
        p = clamp((p - from) / Math.max(0.001, to - from), 0, 1);
        if (opts.invert) p = 1 - p;
        var r = minR + (maxR - minR) * (opts.ease === "in" ? p * p : p);
        if (r < 0.5) continue;
        var cx = x0 + xx, cy = y0 + yy;
        d.push("M" + f1(cx - r) + " " + f1(cy) + "a" + f1(r) + " " + f1(r) + " 0 1 0 " + f1(2 * r) + " 0a" + f1(r) + " " + f1(r) + " 0 1 0 " + f1(-2 * r) + " 0");
      }
    }
    return sv("path", { d: d.join("") || "M0 0", fill: opts.color || INK, opacity: opts.opacity != null ? opts.opacity : 1, class: "cb-halftone" }, parent);
  };

  // ───────────────────────── paper ─────────────────────────
  var paperCache = {};
  function paperUrl(kind) {
    if (paperCache[kind] != null) return paperCache[kind];
    var url = "";
    try {
      var N = 240;
      var cv = document.createElement("canvas");
      cv.width = N; cv.height = N;
      var g = cv.getContext("2d");
      var r = V.makeRand(kind === "aged" ? 77 : 33);
      var count = kind === "aged" ? 1500 : 900;
      for (var i = 0; i < count; i++) {
        var a = (kind === "aged" ? 0.05 : 0.035) + r() * 0.07;
        g.fillStyle = r() > 0.5 ? "rgba(90,60,20," + a + ")" : "rgba(255,255,255," + a * 1.4 + ")";
        var s = 0.6 + r() * 1.6;
        g.fillRect(r() * N, r() * N, s, s);
      }
      g.strokeStyle = "rgba(110,80,40,0.06)";
      g.lineWidth = 0.7;
      for (i = 0; i < 40; i++) {
        var x = r() * N, y = r() * N, l = 4 + r() * 14, an = r() * 6.28;
        g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(an) * l, y + Math.sin(an) * l); g.stroke();
      }
      url = cv.toDataURL("image/png");
    } catch (e) { url = ""; }
    paperCache[kind] = url;
    return url;
  }

  // ───────────────────────── comic (frame + camera) ─────────────────────────
  /** Create the comic frame. opts: { print: "clean"|"aged"|"misprint" }. Clears root. */
  S.comic = function (root, opts) {
    opts = opts || {};
    root = root || V.root();
    root.innerHTML = "";
    root.classList.add("pack-comic-book", "kind-comic");
    patCache = {};
    var W = V.width, H = V.height;
    var print = opts.print || "clean";
    var frame = el("div.cb-frame.cb-print-" + print, { parent: root });
    var defsSvg = sv("svg", { class: "cb-defs", width: 0, height: 0 }, frame);
    var df = sv("defs", null, defsSvg);
    var cam = el("div.cb-cam", { parent: frame, style: { width: W + "px", height: H + "px" } });
    var flapSvg = sv("svg", { class: "cb-flap", width: W, height: H, viewBox: "0 0 " + W + " " + H }, cam);
    var fx = el("div.cb-fx", { parent: frame });
    comic = {
      root: root, frame: frame, cam: cam, defs: df, fx: fx, flapSvg: flapSvg, W: W, H: H, print: print,
      pages: [], page: null, moves: [], shakes: [], compiled: null, tl: V.timeline(), drift: opts.drift != null ? opts.drift : 0.012,
    };
    if (print === "aged") el("div.cb-vignette", { parent: frame });
    var flash = el("div.cb-flash", { parent: frame });
    comic.flashEl = flash;
    V.onFrame(function (t) { camFrame(t); });
    return comic;
  };

  // ───────────────────────── layouts ─────────────────────────
  function isect(a1, a2, b1, b2) {
    var x1 = a1[0], y1 = a1[1], x2 = a2[0], y2 = a2[1], x3 = b1[0], y3 = b1[1], x4 = b2[0], y4 = b2[1];
    var den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (Math.abs(den) < 1e-6) return [x1, y1];
    var tt = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    return [x1 + tt * (x2 - x1), y1 + tt * (y2 - y1)];
  }
  function rowsFor(n, kind) {
    var o = V.orientation;
    if (kind === "strip") return o === "portrait" ? fill1(n) : [n];
    if (kind === "feature") {
      if (n <= 1) return [1];
      if (o === "portrait") return n === 2 ? [1, 1] : n === 3 ? [1, 2] : n === 4 ? [1, 1, 2] : n === 5 ? [1, 2, 2] : [1, 2, 3];
      if (o === "square") return n === 2 ? [1, 1] : n === 3 ? [1, 2] : n === 4 ? [1, 3] : n === 5 ? [1, 2, 2] : [1, 2, 3];
      return n === 2 ? [2] : n === 3 ? [1, 2] : n === 4 ? [1, 3] : n === 5 ? [2, 3] : [1, 2, 3];
    }
    if (o === "portrait") return [[1], [1, 1], [1, 1, 1], [1, 2, 1], [1, 2, 2], [2, 2, 2]][clamp(n, 1, 6) - 1];
    if (o === "square") return [[1], [1, 1], [1, 2], [2, 2], [2, 3], [3, 3]][clamp(n, 1, 6) - 1];
    return [[1], [2], [3], [2, 2], [2, 3], [3, 3]][clamp(n, 1, 6) - 1];
  }
  function fill1(n) { var a = []; for (var i = 0; i < n; i++) a.push(1); return a; }

  /** Compute panel polygons. Returns [{poly:[[x,y]x4], bbox}] in page px. */
  function computeLayout(n, opts) {
    var W = V.width, H = V.height;
    var m = opts.margin != null ? opts.margin : u(30);
    var g = opts.gutter != null ? opts.gutter : u(20);
    var slant = opts.slant != null ? opts.slant : 1;
    var r = rng("layout" + (opts.seed || 0) + n);
    var rows = opts.rows || rowsFor(n, opts.kind);
    var nr = rows.length;
    var W8 = opts.weights;
    var firstIdx = [], fi = 0;
    rows.forEach(function (c) { firstIdx.push(fi); fi += c; });
    var weightsR = rows.map(function (c, i) { return W8 && c === 1 && W8[firstIdx[i]] ? W8[firstIdx[i]] : (opts.kind === "feature" && i === 0 && nr > 1 ? 1.35 : 1) * (0.9 + r() * 0.2); });
    var tot = weightsR.reduce(function (a, b) { return a + b; }, 0);
    var hLines = [];
    var acc = 0;
    var L = m, R = W - m, T = m, B = H - m;
    hLines.push([[L - 10, T], [R + 10, T]]);
    for (var i = 0; i < nr - 1; i++) {
      acc += weightsR[i];
      var y = T + ((B - T) * acc) / tot;
      var s = (r() > 0.5 ? 1 : -1) * (0.012 + r() * 0.02) * H * slant;
      hLines.push([[L - 10, y - s], [R + 10, y + s]]);
    }
    hLines.push([[L - 10, B], [R + 10, B]]);
    var out = [];
    for (i = 0; i < nr; i++) {
      var cnt = rows[i];
      var top = hLines[i], bot = hLines[i + 1];
      var wts = [];
      for (var j = 0; j < cnt; j++) wts.push(W8 && W8[firstIdx[i] + j] ? W8[firstIdx[i] + j] : (opts.kind === "feature" && i === 0 && j === 0 && cnt > 1 ? 1.4 : 1) * (0.82 + r() * 0.36));
      var wt = wts.reduce(function (a, b) { return a + b; }, 0);
      var vLines = [[[L, T - 10], [L, B + 10]]];
      var ax = 0;
      for (j = 0; j < cnt - 1; j++) {
        ax += wts[j];
        var x = L + ((R - L) * ax) / wt;
        var sx = (r() > 0.5 ? 1 : -1) * (0.015 + r() * 0.025) * W * slant;
        vLines.push([[x + sx, T - 10], [x - sx, B + 10]]);
      }
      vLines.push([[R, T - 10], [R, B + 10]]);
      for (j = 0; j < cnt; j++) {
        var lft = vLines[j], rgt = vLines[j + 1];
        var gl = j === 0 ? 0 : g / 2, gr = j === cnt - 1 ? 0 : g / 2, gt = i === 0 ? 0 : g / 2, gb = i === nr - 1 ? 0 : g / 2;
        function sh(line, dx, dy) { return [[line[0][0] + dx, line[0][1] + dy], [line[1][0] + dx, line[1][1] + dy]]; }
        var lt = sh(top, 0, gt), lb = sh(bot, 0, -gb), ll = sh(lft, gl, 0), lr = sh(rgt, -gr, 0);
        var poly = [isect(lt[0], lt[1], ll[0], ll[1]), isect(lt[0], lt[1], lr[0], lr[1]), isect(lb[0], lb[1], lr[0], lr[1]), isect(lb[0], lb[1], ll[0], ll[1])];
        out.push({ poly: poly, row: i, col: j });
      }
    }
    return out;
  }
  function bboxOf(poly) {
    var xs = poly.map(function (p) { return p[0]; }), ys = poly.map(function (p) { return p[1]; });
    var x = Math.min.apply(null, xs), y = Math.min.apply(null, ys);
    return { x: x, y: y, w: Math.max.apply(null, xs) - x, h: Math.max.apply(null, ys) - y };
  }

  var LAYOUT_N = { splash: 1, single: 1, duo: 2, trio: 3, feature: 3, quad: 4, grid: 4, five: 5, six: 6, strip: 3 };
  /**
   * Create a comic page with panels. layout: number 1–6 | "splash" | "duo" | "trio" | "feature" | "quad" | "five" | "six" | "strip"
   * opts: { n, kind: "grid"|"feature"|"strip", slant: 0..2, gutter, margin, polys: [[[x,y]...]] (custom, page px),
   *         inset: { panel, corner: "tr"|"tl"|"br"|"bl", size: 0.36 }, borderless: [i], seed, paper }
   * A second call stacks the new page *under* the current one (use S.pageTurn to flip to it).
   */
  S.page = function (layout, opts) {
    opts = opts || {};
    var c = cur();
    var n = typeof layout === "number" ? layout : opts.n || LAYOUT_N[layout] || 3;
    n = clamp(Math.round(n) || 1, 1, 6);
    var kind = opts.kind || (layout === "feature" ? "feature" : layout === "strip" ? "strip" : "grid");
    var specs = opts.polys ? opts.polys.map(function (p) { return { poly: p }; }) : computeLayout(n, { kind: kind, slant: opts.slant, gutter: opts.gutter, margin: opts.margin, seed: opts.seed, rows: opts.rows, weights: opts.weights });
    var pageEl = el("div.cb-page", { style: { width: V.width + "px", height: V.height + "px" } });
    var paper = c.print === "aged" ? "aged" : "clean";
    var url = paperUrl(paper);
    pageEl.style.backgroundColor = opts.paper || (paper === "aged" ? C.aged : C.paper);
    if (url) { pageEl.style.backgroundImage = "url(" + url + ")"; pageEl.style.backgroundSize = u(240) + "px"; }
    // new pages stack under existing ones
    if (c.pages.length) c.cam.insertBefore(pageEl, c.pages[c.pages.length - 1].el);
    else c.cam.insertBefore(pageEl, c.flapSvg);
    var panelsLayer = el("div.cb-panels", { parent: pageEl });
    var borders = sv("svg", { class: "cb-borders", width: V.width, height: V.height, viewBox: "0 0 " + V.width + " " + V.height }, pageEl);
    var over = el("div.cb-over", { parent: pageEl });
    var pg = { el: pageEl, panelsLayer: panelsLayer, borders: borders, over: over, panels: [], index: c.pages.length, turn: null };
    c.pages.push(pg);
    c.page = pg;
    var bl = {};
    arr(opts.borderless).forEach(function (i) { bl[i] = 1; });
    specs.forEach(function (sp, i) { makePanel(pg, sp.poly, { borderless: !!bl[i] || (n === 1 && opts.bleed) }); });
    if (opts.inset) {
      var ins = opts.inset;
      var host = pg.panels[clamp(ins.panel || 0, 0, pg.panels.length - 1)];
      var b = host.bbox;
      var sz = ins.size || 0.36;
      var iw = b.w * sz, ih = Math.min(b.h * 0.62, iw * (V.isPortrait ? 0.9 : 0.75));
      var pad = u(26);
      var corner = ins.corner || "tr";
      var ix = corner.indexOf("r") >= 0 ? b.x + b.w - iw - pad : b.x + pad;
      var iy = corner.indexOf("b") >= 0 ? b.y + b.h - ih - pad : b.y + pad;
      var tilt = (corner === "tr" || corner === "bl" ? 1 : -1) * u(10);
      makePanel(pg, [[ix, iy + tilt], [ix + iw, iy - tilt], [ix + iw, iy + ih - tilt * 0.4], [ix, iy + ih + tilt * 0.4]], { inset: true });
    }
    return pg;
  };

  function makePanel(pg, poly, o) {
    var bb = bboxOf(poly);
    var i = pg.panels.length;
    var p = { i: i, page: pg, poly: poly, bbox: bb, w: bb.w, h: bb.h, inset: !!o.inset, borderless: !!o.borderless, chars: [], revealAt: 0, depth: 0 };
    var local = poly.map(function (q) { return [q[0] - bb.x, q[1] - bb.y]; });
    if (o.inset) {
      // white keyline behind an inset panel
      var kl = sv("path", { d: polyD(poly), fill: "#fff", stroke: "#fff", "stroke-width": u(26), "stroke-linejoin": "miter", class: "cb-keyline" });
      var holder = el("div.cb-keyhold", { parent: pg.panelsLayer });
      var ks = sv("svg", { width: V.width, height: V.height, style: { position: "absolute", left: "0", top: "0", overflow: "visible" } }, holder);
      ks.appendChild(kl);
      p.keyline = holder;
    }
    var pe = el("div.cb-panel", { parent: pg.panelsLayer, style: { left: bb.x + "px", top: bb.y + "px", width: bb.w + "px", height: bb.h + "px" } });
    if (!o.borderless) pe.style.clipPath = "polygon(" + local.map(function (q) { return f1(q[0]) + "px " + f1(q[1]) + "px"; }).join(",") + ")";
    var rv = el("div.cb-reveal", { parent: pe });
    var world = el("div.cb-world", { parent: rv });
    var bg = sv("svg", { class: "cb-bg", width: bb.w, height: bb.h, viewBox: "0 0 " + f1(bb.w) + " " + f1(bb.h), preserveAspectRatio: "none" }, world);
    sv("rect", { width: bb.w, height: bb.h, fill: "#fff" }, bg);
    var fg = el("div.cb-fg", { parent: world });
    p.el = pe; p.revealEl = rv; p.world = world; p.bg = bg; p.fg = fg;
    if (!o.borderless) {
      p.border = sv("path", { d: polyD(poly), class: "cb-border", "stroke-width": f1(u(o.inset ? 6.5 : 5.5)) }, pg.borders);
      if (cur().print === "misprint") p.border2 = sv("path", { d: polyD(poly), class: "cb-border cb-mis", "stroke-width": f1(u(4)), transform: "translate(" + f1(u(3)) + "," + f1(u(2)) + ")" }, pg.borders);
    }
    p.overEl = pg.over;
    pg.panels.push(p);
    // slow push-in inside the panel for life
    V.onFrame(function (t) {
      var pr = V.progress(t, p.revealAt, Math.max(p.revealAt + 1, V.duration), "linear");
      var s = 1 + (p.push != null ? p.push : 0.035) * pr;
      world.style.transform = "scale(" + s.toFixed(4) + ")";
    });
    return p;
  }

  function getPanel(x) {
    if (x && x.world) return x;
    var pg = curPage();
    var i = x == null ? 0 : +x || 0;
    return pg.panels[clamp(i, 0, pg.panels.length - 1)];
  }
  /** Panel i of the current page (object with el, world, fg, bg (svg), bbox, poly). */
  S.panel = function (i) { return getPanel(i); };
  S.panels = function () { return curPage().panels.slice(); };

  /** Reveal a panel at time `at`. style: "wipe" (default) | "pop" | "flash" | "drop" | "none". Panels are hidden until revealed. */
  S.revealPanel = function (panel, at, style) {
    var p = getPanel(panel);
    var tl = cur().tl;
    at = cT(at || 0);
    p.revealAt = at;
    style = style || "wipe";
    if (style === "none" || at <= 0.02) return p;
    if (p.border) tl.fromTo(p.border, { draw: 0 }, { draw: 1 }, { at: Math.max(0, at - 0.12), dur: 0.4, ease: "outCubic" });
    if (p.border2) tl.fromTo(p.border2, { opacity: 0 }, { opacity: 0.85 }, { at: at, dur: 0.3 });
    if (p.keyline) tl.fromTo(p.keyline, { opacity: 0 }, { opacity: 1 }, { at: at - 0.05, dur: 0.2 });
    if (style === "wipe") {
      tl.fromTo(p.revealEl, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" }, { at: at, dur: 0.42, ease: "outCubic" });
      tl.fromTo(p.fg, { x: u(40), opacity: 0.4 }, { x: 0, opacity: 1 }, { at: at, dur: 0.5, ease: "outCubic" });
    } else if (style === "drop") {
      tl.fromTo(p.revealEl, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" }, { at: at, dur: 0.4, ease: "outCubic" });
      tl.fromTo(p.fg, { y: -u(50) }, { y: 0 }, { at: at, dur: 0.55, ease: "outBack" });
    } else if (style === "flash") {
      tl.fromTo(p.revealEl, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.12 });
      var fl = el("div.cb-pflash", { parent: p.el });
      tl.fromTo(fl, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.05 });
      tl.to(fl, { opacity: 0 }, { at: at + 0.08, dur: 0.35, ease: "outCubic" });
    } else {
      tl.fromTo(p.revealEl, { opacity: 0, scale: 1.12 }, { opacity: 1, scale: 1 }, { at: at, dur: 0.4, ease: "outBack" });
    }
    return p;
  };

  // ───────────────────────── camera ─────────────────────────
  function camRect(target) {
    if (target == null) return { x: 0, y: 0, w: V.width, h: V.height };
    if (target.bbox) return target.bbox;
    if (typeof target === "number") return getPanel(target).bbox;
    return target;
  }
  function camState(rect, zoomMul, anchor) {
    var W = V.width, H = V.height;
    var pad = u(10);
    var z = Math.min(W / (rect.w + pad * 2), H / (rect.h + pad * 2)) * (zoomMul || 1);
    z = clamp(z, 1, 3.4);
    var cx = rect.x + rect.w / 2, cy = rect.y + rect.h / 2;
    if (anchor) { cx = rect.x + rect.w * anchor[0]; cy = rect.y + rect.h * anchor[1]; }
    return { cx: cx, cy: cy, z: z };
  }
  function clampCam(s) {
    var W = V.width, H = V.height;
    var hw = W / (2 * s.z), hh = H / (2 * s.z);
    return { cx: clamp(s.cx, hw, W - hw), cy: clamp(s.cy, hh, H - hh), z: s.z };
  }
  function addMove(state, at, dur, ease) {
    var c = cur();
    c.moves.push({ at: Math.max(0, at), dur: Math.max(0.01, dur), to: clampCam(state), ease: ease || "inOutCubic", seq: c.moves.length });
    c.compiled = null;
  }
  function compileMoves() {
    var c = comic;
    var ms = c.moves.slice().sort(function (a, b) { return a.at - b.at || a.seq - b.seq; });
    var base = { cx: V.width / 2, cy: V.height / 2, z: 1 };
    var st = base;
    for (var i = 0; i < ms.length; i++) {
      ms[i].from = i === 0 ? base : evalMoves(ms.slice(0, i), base, ms[i].at);
      if (i === 0 && ms[i].at <= 0.001) ms[i].from = ms[i].to;
    }
    c.compiled = { ms: ms, base: base };
    return c.compiled;
  }
  function lerpCam(a, b, p) {
    return { cx: lerp(a.cx, b.cx, p), cy: lerp(a.cy, b.cy, p), z: Math.exp(lerp(Math.log(a.z), Math.log(b.z), p)) };
  }
  function evalMoves(ms, base, t) {
    var s = base;
    for (var i = ms.length - 1; i >= 0; i--) {
      if (t >= ms[i].at) {
        var m = ms[i];
        var from = m.from || (i === 0 ? base : evalMoves(ms.slice(0, i), base, m.at));
        var p = V.progress(t, m.at, m.at + m.dur, m.ease);
        return lerpCam(from, m.to, p);
      }
    }
    return s;
  }
  function camFrame(t) {
    var c = comic;
    if (!c) return;
    var comp = c.compiled || compileMoves();
    var s = evalMoves(comp.ms, comp.base, t);
    var W = V.width, H = V.height;
    var z = s.z * (1 + c.drift * Math.sin(t * 0.35));
    var sh = clampCam({ cx: s.cx, cy: s.cy, z: z });
    var ox = 0, oy = 0, rot = 0;
    for (var i = 0; i < c.shakes.length; i++) {
      var k = c.shakes[i];
      if (t < k.at || t > k.at + k.dur) continue;
      var q = 1 - (t - k.at) / k.dur;
      var f = Math.floor((t - k.at) * 30);
      ox += (hash01(f + k.seed) - 0.5) * 2 * k.amp * q;
      oy += (hash01(f + k.seed + 50) - 0.5) * 2 * k.amp * q;
      rot += (hash01(f + k.seed + 90) - 0.5) * k.amp * 0.02 * q;
    }
    var tx = W / 2 - sh.cx * sh.z + ox, ty = H / 2 - sh.cy * sh.z + oy;
    c.cam.style.transform = "translate(" + tx.toFixed(2) + "px," + ty.toFixed(2) + "px) scale(" + sh.z.toFixed(5) + ")" + (rot ? " rotate(" + rot.toFixed(3) + "deg)" : "");
  }
  // keep the shared S.camera(node, amount) function working; add motion-comic methods on it
  var sharedCamera = S.camera;
  var camApi = function (node, amount) { return sharedCamera ? sharedCamera(node, amount) : undefined; };
  /** Glide the camera to a panel (or {x,y,w,h} page rect) at `at` over `dur`. opts: { zoom: multiplier, anchor:[fx,fy], ease } */
  camApi.focus = function (target, at, dur, opts) {
    opts = opts || {};
    addMove(camState(camRect(target), opts.zoom, opts.anchor), at || 0, dur != null ? dur : 0.8, opts.ease);
  };
  /** Pull back to the whole page. */
  camApi.page = function (at, dur, opts) {
    addMove({ cx: V.width / 2, cy: V.height / 2, z: 1 }, at || 0, dur != null ? dur : 0.9, opts && opts.ease);
  };
  /** Free camera: center (page px) and zoom. */
  camApi.to = function (cx, cy, zoom, at, dur, ease) { addMove({ cx: cx, cy: cy, z: Math.max(1, zoom || 1) }, at || 0, dur != null ? dur : 0.8, ease); };
  /** Impact shake. amp in px (default S.u(14)). */
  camApi.shake = function (at, amp, dur) {
    var c = cur();
    c.shakes.push({ at: Math.max(0, at), amp: amp != null ? amp : u(14), dur: dur || 0.45, seed: c.shakes.length * 17 + 3 });
  };
  /** White flash over the whole frame (impacts). */
  camApi.flash = function (at, strength) {
    var c = cur();
    c.tl.fromTo(c.flashEl, { opacity: 0 }, { opacity: strength || 0.85 }, { at: Math.max(0, at), dur: 0.04 });
    c.tl.to(c.flashEl, { opacity: 0 }, { at: Math.max(0, at) + 0.06, dur: 0.3, ease: "outCubic" });
  };
  camApi.drift = function (amount) { cur().drift = amount; };
  S.camera = camApi;

  /** Turn the top page away (2D page curl) to reveal the page under it. */
  S.pageTurn = function (at, dur, opts) {
    opts = opts || {};
    var c = cur();
    if (c.pages.length < 2) return;
    var top = null;
    for (var i = 0; i < c.pages.length; i++) if (!c.pages[i].turn) { top = c.pages[i]; break; }
    if (!top) return;
    at = cT(at); dur = dur || 1.1;
    top.turn = { at: at, dur: dur };
    var W = V.width, H = V.height;
    var g = sv("g", null, c.flapSvg);
    var gid = nid("g");
    var lg = sv("linearGradient", { id: gid, gradientUnits: "userSpaceOnUse" }, c.defs);
    sv("stop", { offset: "0", "stop-color": "#fffdf6" }, lg);
    sv("stop", { offset: "0.55", "stop-color": "#efe3c6" }, lg);
    sv("stop", { offset: "1", "stop-color": "#c9b78f" }, lg);
    var shadow = sv("polygon", { fill: "rgba(0,0,0,0.28)" }, g);
    var flap = sv("polygon", { fill: "url(#" + gid + ")", stroke: "rgba(60,40,10,0.35)", "stroke-width": u(1.5) }, g);
    var corner = [W, H];
    var target = [-W * 1.05, -H * 0.35];
    function clipHalf(poly, P0, n, keepNeg) {
      var out = [];
      for (var k = 0; k < poly.length; k++) {
        var a = poly[k], b = poly[(k + 1) % poly.length];
        var da = (a[0] - P0[0]) * n[0] + (a[1] - P0[1]) * n[1], db = (b[0] - P0[0]) * n[0] + (b[1] - P0[1]) * n[1];
        if (keepNeg) { da = -da; db = -db; }
        if (da >= 0) out.push(a);
        if ((da >= 0) !== (db >= 0)) { var tt = da / (da - db); out.push([a[0] + (b[0] - a[0]) * tt, a[1] + (b[1] - a[1]) * tt]); }
      }
      return out;
    }
    V.onFrame(function (t) {
      var p = V.progress(t, at, at + dur, "inOutCubic");
      if (p <= 0) { top.el.style.clipPath = ""; top.el.style.visibility = ""; g.style.display = "none"; return; }
      if (p >= 1) { top.el.style.visibility = "hidden"; g.style.display = "none"; return; }
      top.el.style.visibility = "";
      g.style.display = "";
      var M = [lerp(corner[0], target[0], p), lerp(corner[1], target[1], p * p * 0.6 + p * 0.4)];
      var mid = [(corner[0] + M[0]) / 2, (corner[1] + M[1]) / 2];
      var n = [corner[0] - M[0], corner[1] - M[1]];
      var nl = Math.sqrt(n[0] * n[0] + n[1] * n[1]) || 1;
      n = [n[0] / nl, n[1] / nl];
      var rect = [[0, 0], [W, 0], [W, H], [0, H]];
      var keep = clipHalf(rect, mid, n, true); // side away from the corner stays
      var gone = clipHalf(rect, mid, n, false);
      top.el.style.clipPath = keep.length ? "polygon(" + keep.map(function (q) { return f1(q[0]) + "px " + f1(q[1]) + "px"; }).join(",") + ")" : "inset(50%)";
      var refl = gone.map(function (q) {
        var d = (q[0] - mid[0]) * n[0] + (q[1] - mid[1]) * n[1];
        return [q[0] - 2 * d * n[0], q[1] - 2 * d * n[1]];
      });
      flap.setAttribute("points", pts(refl));
      shadow.setAttribute("points", pts(refl.map(function (q) { return [q[0] - n[0] * u(18), q[1] - n[1] * u(18)]; })));
      lg.setAttribute("x1", f1(mid[0])); lg.setAttribute("y1", f1(mid[1]));
      lg.setAttribute("x2", f1(M[0])); lg.setAttribute("y2", f1(M[1]));
    });
    return top;
  };

  // ───────────────────────── backgrounds ─────────────────────────
  var MOODS = {
    day: { sky: C.sky, sky2: C.sky2, dots: "#5DB4E8", far: "#A9C9DE", near: ["#E8C07A", "#D9826B", "#8FB0C9", "#C9A8D6", "#9CC79A"], win: "#FFF6C8", sun: "#FFE45C" },
    dusk: { sky: "#F7A35C", sky2: "#FFD98A", dots: "#E0603A", far: "#B5739A", near: ["#6E4A8E", "#8A4F7D", "#4F4A8C", "#A05A6E", "#5C6F9E"], win: "#FFD23F", sun: "#FFF0A8" },
    night: { sky: "#1C2257", sky2: "#2E3A7A", dots: "#3D4C9E", far: "#2A2F63", near: ["#3A3F7A", "#2F3466", "#463E78", "#33406E", "#3D3560"], win: "#FFD23F", sun: "#FFF6D8" },
  };
  function ink(w) { return { stroke: INK, "stroke-width": f1(w), "stroke-linejoin": "round", "stroke-linecap": "round" }; }
  function A(base, extra) { var o = {}; var k; for (k in base) o[k] = base[k]; for (k in extra) o[k] = extra[k]; return o; }
  function skyFill(g, w, h, m, y1) {
    sv("rect", { width: w, height: h, fill: m.sky }, g);
    S.halftone(g, { w: w, h: y1, color: m.sky2, step: u(15), angle: 90, maxR: u(7.5), from: 0.15 });
  }
  function cloud(g, cx, cy, s, fill) {
    var d = "M" + f1(cx - 60 * s) + " " + f1(cy + 10 * s) +
      " a" + f1(22 * s) + " " + f1(22 * s) + " 0 0 1 " + f1(20 * s) + " " + f1(-30 * s) +
      " a" + f1(30 * s) + " " + f1(30 * s) + " 0 0 1 " + f1(52 * s) + " " + f1(-12 * s) +
      " a" + f1(26 * s) + " " + f1(26 * s) + " 0 0 1 " + f1(44 * s) + " " + f1(18 * s) +
      " a" + f1(18 * s) + " " + f1(18 * s) + " 0 0 1 " + f1(4 * s) + " " + f1(34 * s) + " Z";
    sv("path", A(ink(u(3)), { d: d, fill: fill || "#fff" }), g);
  }
  var BG = {};
  BG.city = function (g, w, h, r, o) {
    var m = MOODS[o.mood] || MOODS.day;
    var hz = h * (o.horizon || 0.62);
    skyFill(g, w, h, m, hz);
    var sunR = Math.min(w, h) * 0.13;
    sv("circle", A(ink(u(3)), { cx: w * (0.25 + r() * 0.5), cy: hz * 0.42, r: sunR, fill: m.sun }), g);
    if (o.mood === "night") for (var s = 0; s < 40; s++) sv("circle", { cx: r() * w, cy: r() * hz * 0.8, r: u(1.2 + r() * 2), fill: "#fff" }, g);
    else { cloud(g, w * 0.2, hz * 0.3, u(1.1), "#fff"); cloud(g, w * 0.78, hz * 0.18, u(0.8), "#fff"); }
    // far skyline (flat, no ink)
    var x = -u(10), far = "", farWin = "";
    while (x < w) {
      var bw = w * (0.05 + r() * 0.07), bh = h * (0.18 + r() * 0.3);
      far += "M" + f1(x) + " " + f1(hz + u(30)) + " V" + f1(hz - bh) + " H" + f1(x + bw) + " V" + f1(hz + u(30)) + " Z";
      if (r() > 0.6) far += "M" + f1(x + bw * 0.45) + " " + f1(hz - bh) + " V" + f1(hz - bh - u(40)) + " h" + f1(u(4)) + " V" + f1(hz - bh) + " Z";
      x += bw - u(2);
    }
    sv("path", { d: far, fill: m.far }, g);
    // near buildings with ink + windows
    x = -u(20);
    var winD = "", winDark = "";
    while (x < w + u(20)) {
      var bw2 = w * (0.08 + r() * 0.1), bh2 = h * (0.14 + r() * 0.36);
      var top = hz + u(40) - bh2;
      var col = m.near[Math.floor(r() * m.near.length)];
      sv("rect", A(ink(u(3.5)), { x: f1(x), y: f1(top), width: f1(bw2), height: f1(h - top + u(10)), fill: col }), g);
      sv("rect", { x: f1(x + bw2 * 0.7), y: f1(top + u(2)), width: f1(bw2 * 0.3 - u(2)), height: f1(h - top), fill: "rgba(0,0,0,0.16)" }, g);
      if (r() > 0.55) sv("rect", A(ink(u(3)), { x: f1(x + bw2 * 0.15), y: f1(top - u(22)), width: f1(bw2 * 0.3), height: f1(u(22)), fill: col }), g);
      var ww = Math.max(u(8), bw2 * 0.12), wh = ww * 1.4, gx = ww * 0.9;
      for (var wy = top + u(18); wy < h; wy += wh + u(14)) {
        for (var wx = x + gx; wx < x + bw2 - ww - u(4); wx += ww + gx) {
          if (r() > 0.45) winD += "M" + f1(wx) + " " + f1(wy) + "h" + f1(ww) + "v" + f1(wh) + "h" + f1(-ww) + "Z";
          else winDark += "M" + f1(wx) + " " + f1(wy) + "h" + f1(ww) + "v" + f1(wh) + "h" + f1(-ww) + "Z";
        }
      }
      x += bw2 + u(6) + r() * u(30);
    }
    sv("path", { d: winD, fill: m.win, stroke: INK, "stroke-width": u(1.5) }, g);
    sv("path", { d: winDark, fill: "rgba(0,0,0,0.25)" }, g);
    S.halftone(g, { y: h * 0.7, w: w, h: h * 0.3, color: "rgba(0,0,0,0.35)", step: u(13), angle: 90, maxR: u(5.5) });
  };
  BG.street = function (g, w, h, r, o) {
    var m = MOODS[o.mood] || MOODS.day;
    var vx = w * (0.4 + r() * 0.2), vy = h * 0.42;
    skyFill(g, w, h, m, vy);
    // buildings left/right as perspective quads
    function side(sign) {
      var xEdge = sign < 0 ? 0 : w;
      var near = sign < 0 ? w * 0.22 : w * 0.78;
      var cols = [m.near[0], m.near[1], m.near[2]];
      var steps = 4;
      for (var i = 0; i < steps; i++) {
        var t0 = i / steps, t1 = (i + 1) / steps;
        var x0 = lerp(xEdge, vx + sign * w * 0.03, t0 * 0.85), x1 = lerp(xEdge, vx + sign * w * 0.03, t1 * 0.85);
        var top0 = lerp(-h * 0.2, vy - h * 0.12, t0 * 0.85), top1 = lerp(-h * 0.2, vy - h * 0.12, t1 * 0.85);
        var bot0 = lerp(h * 0.92, vy + h * 0.06, t0 * 0.85), bot1 = lerp(h * 0.92, vy + h * 0.06, t1 * 0.85);
        top0 += r() * h * 0.1; top1 += 0;
        sv("path", A(ink(u(3)), { d: polyD([[x0, top0], [x1, top1], [x1, bot1], [x0, bot0]]), fill: cols[i % 3] }), g);
        // windows rows
        var wd = "";
        for (var k = 1; k < 5; k++) {
          var fy = k / 5;
          var ya = lerp(top0, bot0, fy), yb = lerp(top1, bot1, fy);
          var xa = lerp(x0, x1, 0.2), xb = lerp(x0, x1, 0.75);
          var ha = (bot0 - top0) * 0.08, hb = (bot1 - top1) * 0.08;
          wd += polyD([[xa, lerp(ya, yb, 0.2)], [xb, lerp(ya, yb, 0.75)], [xb, lerp(ya, yb, 0.75) + hb], [xa, lerp(ya, yb, 0.2) + ha]]);
        }
        sv("path", { d: wd, fill: m.win, stroke: INK, "stroke-width": u(1.5) }, g);
      }
      void near;
    }
    side(-1); side(1);
    // road + sidewalks
    sv("path", A(ink(u(3)), { d: polyD([[-w * 0.2, h], [vx - w * 0.02, vy + h * 0.06], [vx + w * 0.02, vy + h * 0.06], [w * 1.2, h]]), fill: "#7D858F" }), g);
    sv("path", { d: polyD([[w * 0.0, h], [vx - w * 0.015, vy + h * 0.06], [vx - w * 0.01, vy + h * 0.06], [w * 0.16, h]]), fill: "#B8BEC6" }, g);
    sv("path", { d: polyD([[w * 0.84, h], [vx + w * 0.01, vy + h * 0.06], [vx + w * 0.015, vy + h * 0.06], [w * 1.0, h]]), fill: "#B8BEC6" }, g);
    // dashed centre line
    var dl = "";
    for (var i = 0; i < 6; i++) {
      var a = Math.pow(i / 6, 1.6), b = Math.pow((i + 0.5) / 6, 1.6);
      var ya = lerp(vy + h * 0.06, h, a), yb = lerp(vy + h * 0.06, h, b);
      var wa = lerp(u(1), u(10), a), wb = lerp(u(1), u(10), b);
      dl += polyD([[vx - wa, ya], [vx + wa, ya], [vx + wb, yb], [vx - wb, yb]]);
    }
    sv("path", { d: dl, fill: "#FFE45C" }, g);
    S.halftone(g, { y: h * 0.6, w: w, h: h * 0.4, color: "rgba(0,0,0,0.3)", step: u(12), angle: 90, maxR: u(5) });
    // lamp post
    var lx = w * (r() > 0.5 ? 0.12 : 0.88);
    sv("path", A(ink(u(3)), { d: "M" + f1(lx - u(5)) + " " + f1(h) + " V" + f1(h * 0.28) + " h" + f1(u(10)) + " V" + f1(h) + " Z", fill: "#3B4050" }), g);
    sv("path", A(ink(u(3)), { d: "M" + f1(lx - u(22)) + " " + f1(h * 0.28) + " h" + f1(u(44)) + " l" + f1(-u(8)) + " " + f1(-u(24)) + " h" + f1(-u(28)) + " Z", fill: o.mood === "night" ? C.yellow : "#3B4050" }), g);
  };
  BG.lab = function (g, w, h, r, o) {
    var floor = h * 0.74;
    sv("rect", { width: w, height: h, fill: "#CFE6EA" }, g);
    sv("rect", { width: w, height: h, fill: S.pattern("cross", "rgba(40,90,110,0.18)", u(46), { angle: 0, w: u(2) }) }, g);
    // pipes across top
    sv("rect", A(ink(u(3)), { x: -u(10), y: h * 0.08, width: w + u(20), height: u(22), fill: "#9FB4BC" }), g);
    sv("rect", A(ink(u(3)), { x: -u(10), y: h * 0.08 + u(34), width: w + u(20), height: u(12), fill: "#E3A04A" }), g);
    // big machine
    var mx = r() > 0.5 ? w * 0.06 : w * 0.66, mw = w * 0.28, mt = h * 0.24;
    sv("rect", A(ink(u(4)), { x: mx, y: mt, width: mw, height: floor - mt, fill: "#7FA4B8", rx: u(8) }), g);
    sv("rect", A(ink(u(3)), { x: mx + mw * 0.1, y: mt + u(20), width: mw * 0.8, height: (floor - mt) * 0.32, fill: "#173A4A", rx: u(6) }), g);
    var wave = "M" + f1(mx + mw * 0.14) + " " + f1(mt + u(20) + (floor - mt) * 0.16);
    for (var k = 1; k <= 12; k++) wave += " L" + f1(mx + mw * 0.14 + (mw * 0.72 * k) / 12) + " " + f1(mt + u(20) + (floor - mt) * 0.16 + Math.sin(k * 1.7) * (floor - mt) * 0.08);
    sv("path", { d: wave, fill: "none", stroke: "#5CF2B6", "stroke-width": u(3.5) }, g);
    for (k = 0; k < 4; k++) {
      sv("circle", A(ink(u(3)), { cx: mx + mw * (0.2 + k * 0.2), cy: mt + (floor - mt) * 0.58, r: Math.min(u(16), mw * 0.07), fill: [C.red, C.yellow, C.green, C.cyan][k] }), g);
    }
    sv("rect", { x: mx + mw * 0.72, y: mt, width: mw * 0.28, height: floor - mt, fill: "rgba(0,0,0,0.15)" }, g);
    // shelf with flasks
    var sx = mx < w * 0.5 ? w * 0.45 : w * 0.08, sw = w * 0.42, sy = h * 0.42;
    sv("rect", A(ink(u(3)), { x: sx, y: sy, width: sw, height: u(12), fill: "#B07A45" }), g);
    var fx = sx + u(20);
    var cols = [C.green, C.pink, C.cyan, C.yellow, C.purple];
    while (fx < sx + sw - u(40)) {
      var fr = u(16 + r() * 12);
      var col = cols[Math.floor(r() * cols.length)];
      if (r() > 0.5) {
        sv("path", A(ink(u(3)), { d: "M" + f1(fx - fr * 0.35) + " " + f1(sy - fr * 2.2) + " v" + f1(fr * 0.9) + " l" + f1(-fr * 0.65) + " " + f1(fr * 1.3) + " h" + f1(fr * 2) + " l" + f1(-fr * 0.65) + " " + f1(-fr * 1.3) + " v" + f1(-fr * 0.9) + " Z", fill: "#EAF7FA" }), g);
        sv("path", A(ink(u(2)), { d: "M" + f1(fx - fr * 0.75) + " " + f1(sy - fr * 0.55) + " l" + f1(-fr * 0.25) + " " + f1(fr * 0.55) + " h" + f1(fr * 2) + " l" + f1(-fr * 0.25) + " " + f1(-fr * 0.55) + " Z", fill: col }), g);
      } else {
        sv("rect", A(ink(u(3)), { x: fx - fr * 0.45, y: sy - fr * 2.4, width: fr * 0.9, height: fr * 2.4, fill: "#EAF7FA", rx: u(4) }), g);
        sv("rect", { x: fx - fr * 0.45 + u(2), y: sy - fr * 1.2, width: fr * 0.9 - u(4), height: fr * 1.2 - u(2), fill: col }, g);
      }
      fx += fr * 2.4;
    }
    // floor
    sv("rect", A(ink(u(3)), { x: -u(10), y: floor, width: w + u(20), height: h - floor + u(10), fill: "#8FA3AE" }), g);
    S.halftone(g, { y: floor, w: w, h: h - floor, color: "rgba(20,40,50,0.4)", step: u(12), angle: 90, maxR: u(5) });
    S.halftone(g, { w: w, h: floor, color: "rgba(20,60,80,0.18)", step: u(16), radial: { cx: w / 2, cy: h * 0.4, r0: Math.max(w, h) * 0.35, r1: Math.max(w, h) * 0.75 }, maxR: u(7) });
  };
  BG.space = function (g, w, h, r, o) {
    sv("rect", { width: w, height: h, fill: C.navy }, g);
    S.halftone(g, { w: w, h: h, color: "#3A2F7A", step: u(18), radial: { cx: w * 0.3, cy: h * 0.6, r0: 0, r1: Math.max(w, h) * 0.7 }, invert: true, maxR: u(8) });
    var st = "";
    for (var i = 0; i < 90; i++) {
      var x = r() * w, y = r() * h, s = u(0.8 + r() * 2.2);
      st += "M" + f1(x - s) + " " + f1(y) + "a" + f1(s) + " " + f1(s) + " 0 1 0 " + f1(2 * s) + " 0a" + f1(s) + " " + f1(s) + " 0 1 0 " + f1(-2 * s) + " 0";
    }
    sv("path", { d: st, fill: "#fff" }, g);
    for (i = 0; i < 5; i++) {
      var sx = r() * w, sy = r() * h, ss = u(8 + r() * 10);
      sv("path", { d: "M" + f1(sx) + " " + f1(sy - ss) + " Q" + f1(sx) + " " + f1(sy) + " " + f1(sx + ss) + " " + f1(sy) + " Q" + f1(sx) + " " + f1(sy) + " " + f1(sx) + " " + f1(sy + ss) + " Q" + f1(sx) + " " + f1(sy) + " " + f1(sx - ss) + " " + f1(sy) + " Q" + f1(sx) + " " + f1(sy) + " " + f1(sx) + " " + f1(sy - ss) + " Z", fill: "#FFF3B0" }, g);
    }
    var pr = Math.min(w, h) * 0.32;
    var px = w * (r() > 0.5 ? 0.78 : 0.22), py = h * 0.62;
    var pid = nid("cl");
    var cp = sv("clipPath", { id: pid }, g);
    sv("circle", { cx: px, cy: py, r: pr }, cp);
    sv("ellipse", A(ink(u(4)), { cx: px, cy: py, rx: pr * 1.7, ry: pr * 0.3, fill: "none", stroke: "#F3C85A", "stroke-width": u(10), transform: "rotate(-14 " + f1(px) + " " + f1(py) + ")" }), g);
    sv("circle", A(ink(u(4)), { cx: px, cy: py, r: pr, fill: "#E2734A" }), g);
    var pg = sv("g", { "clip-path": "url(#" + pid + ")" }, g);
    sv("path", { d: "M" + f1(px - pr) + " " + f1(py - pr * 0.3) + " Q" + f1(px) + " " + f1(py - pr * 0.1) + " " + f1(px + pr) + " " + f1(py - pr * 0.4) + " V" + f1(py - pr * 0.18) + " Q" + f1(px) + " " + f1(py + pr * 0.1) + " " + f1(px - pr) + " " + f1(py - pr * 0.08) + " Z", fill: "#F4A261" }, pg);
    S.halftone(pg, { x: px - pr, y: py - pr, w: pr * 2, h: pr * 2, color: "#7A2E1E", step: u(11), angle: 35, maxR: u(5.5), from: 0.35 });
    sv("path", { d: "M" + f1(px - pr * 1.7) + " " + f1(py) + " A" + f1(pr * 1.7) + " " + f1(pr * 0.3) + " 0 0 0 " + f1(px + pr * 1.7) + " " + f1(py), fill: "none", stroke: "#F3C85A", "stroke-width": u(10), transform: "rotate(-14 " + f1(px) + " " + f1(py) + ")" }, g);
    sv("circle", A(ink(u(3)), { cx: w - px * 0.8, cy: h * 0.2, r: pr * 0.18, fill: "#C9CED6" }), g);
  };
  BG.interior = function (g, w, h, r, o) {
    var floor = h * 0.76;
    sv("rect", { width: w, height: h, fill: "#F3D9A8" }, g);
    sv("rect", { width: w, height: floor, fill: S.pattern("lines", "rgba(180,110,60,0.18)", u(40), { angle: 90, w: u(10) }) }, g);
    // window
    var wx = w * (0.12 + r() * 0.5), wy = h * 0.14, ww = Math.min(w * 0.3, h * 0.5), wh = h * 0.42;
    var mood = MOODS[o.mood] || MOODS.day;
    sv("rect", A(ink(u(4)), { x: wx, y: wy, width: ww, height: wh, fill: mood.sky }), g);
    S.halftone(g, { x: wx, y: wy, w: ww, h: wh, color: mood.sky2, step: u(12), angle: 90, maxR: u(5) });
    cloud(g, wx + ww * 0.45, wy + wh * 0.4, u(0.55), "#fff");
    sv("path", { d: "M" + f1(wx + ww / 2) + " " + f1(wy) + " V" + f1(wy + wh) + " M" + f1(wx) + " " + f1(wy + wh / 2) + " H" + f1(wx + ww), stroke: INK, "stroke-width": u(6) }, g);
    sv("rect", A(ink(u(4)), { x: wx - u(14), y: wy + wh, width: ww + u(28), height: u(14), fill: "#FFF7E8" }), g);
    // picture frame
    var fx = wx + ww + w * 0.08 < w * 0.85 ? wx + ww + w * 0.08 : w * 0.06;
    sv("rect", A(ink(u(4)), { x: fx, y: h * 0.2, width: w * 0.12, height: h * 0.2, fill: "#C0392B" }), g);
    sv("rect", A(ink(u(2)), { x: fx + u(10), y: h * 0.2 + u(10), width: w * 0.12 - u(20), height: h * 0.2 - u(20), fill: "#FFE7A8" }), g);
    sv("circle", { cx: fx + w * 0.06, cy: h * 0.3, r: Math.min(w * 0.03, h * 0.05), fill: C.orange, stroke: INK, "stroke-width": u(2) }, g);
    // floor + baseboard
    sv("rect", A(ink(u(3)), { x: -u(10), y: floor, width: w + u(20), height: h - floor + u(10), fill: "#A9693B" }), g);
    sv("rect", A(ink(u(3)), { x: -u(10), y: floor - u(16), width: w + u(20), height: u(16), fill: "#FFF7E8" }), g);
    var fl = "";
    for (var i = 1; i < 10; i++) fl += "M" + f1((w * i) / 10 + (i % 2) * u(20)) + " " + f1(floor) + " l" + f1((i - 5) * u(30)) + " " + f1(h - floor);
    sv("path", { d: fl, stroke: "rgba(0,0,0,0.35)", "stroke-width": u(2.5), fill: "none" }, g);
    // plant
    var px = w * (fx < w * 0.5 ? 0.86 : 0.1);
    for (var k = 0; k < 5; k++) {
      var an = -60 + k * 30;
      sv("path", A(ink(u(2.5)), { d: "M" + f1(px) + " " + f1(floor - h * 0.1) + " q" + f1(Math.sin((an * Math.PI) / 180) * h * 0.1) + " " + f1(-h * 0.12) + " " + f1(Math.sin((an * Math.PI) / 180) * h * 0.16) + " " + f1(-h * 0.2 + Math.abs(an) * h * 0.001) + " q" + f1(-u(12)) + " " + f1(h * 0.08) + " " + f1(-Math.sin((an * Math.PI) / 180) * h * 0.16) + " " + f1(h * 0.2) + " Z", fill: C.green }), g);
    }
    sv("path", A(ink(u(3)), { d: "M" + f1(px - h * 0.06) + " " + f1(floor - h * 0.1) + " h" + f1(h * 0.12) + " l" + f1(-h * 0.015) + " " + f1(h * 0.1) + " h" + f1(-h * 0.09) + " Z", fill: "#D35400" }), g);
    S.halftone(g, { w: w, h: h, color: "rgba(120,60,20,0.22)", step: u(16), angle: 0, maxR: u(6), from: 0.55 });
  };
  function rays(g, w, h, cx, cy, n, c1, c2, rot) {
    var R = Math.sqrt(w * w + h * h);
    sv("rect", { width: w, height: h, fill: c1 }, g);
    var d = "";
    for (var i = 0; i < n; i++) {
      var a0 = ((i * 2) / (n * 2)) * Math.PI * 2 + (rot || 0), a1 = ((i * 2 + 1) / (n * 2)) * Math.PI * 2 + (rot || 0);
      d += "M" + f1(cx) + " " + f1(cy) + " L" + f1(cx + Math.cos(a0) * R) + " " + f1(cy + Math.sin(a0) * R) + " L" + f1(cx + Math.cos(a1) * R) + " " + f1(cy + Math.sin(a1) * R) + " Z";
    }
    return sv("path", { d: d, fill: c2 }, g);
  }
  BG.action = function (g, w, h, r, o) {
    var pal = o.palette === "blue" ? [C.cyan, C.blue] : o.palette === "purple" ? [C.pink, C.purple] : o.palette === "green" ? [C.yellow, C.green] : [C.yellow, C.orange];
    var cx = w * (o.cx != null ? o.cx : 0.5), cy = h * (o.cy != null ? o.cy : 0.5);
    var rg = sv("g", { class: "cb-spin" }, g);
    rays(rg, w, h, cx, cy, 16, pal[0], pal[1], r() * 0.4);
    rg.firstChild.setAttribute("x", -w); rg.firstChild.setAttribute("y", -h); rg.firstChild.setAttribute("width", w * 3); rg.firstChild.setAttribute("height", h * 3);
    S.halftone(g, { w: w, h: h, color: "rgba(180,40,10,0.35)", step: u(16), radial: { cx: cx, cy: cy, r0: Math.min(w, h) * 0.2, r1: Math.max(w, h) * 0.7 }, maxR: u(7) });
    V.onFrame(function (t) { rg.setAttribute("transform", "rotate(" + (t * 4).toFixed(2) + " " + f1(cx) + " " + f1(cy) + ")"); });
  };
  function bumpy(cx, cy, rx, ry, n, r, amp) {
    var d = "";
    var pts0 = [];
    for (var i = 0; i < n; i++) {
      var a = (i / n) * Math.PI * 2;
      var k = 1 + (r() - 0.5) * (amp || 0.25);
      pts0.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
    }
    d = "M" + f1(pts0[0][0]) + " " + f1(pts0[0][1]);
    for (i = 0; i < n; i++) {
      var p = pts0[(i + 1) % n];
      var q = pts0[i];
      var ch = Math.sqrt((p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]));
      d += " A" + f1(ch * 0.62) + " " + f1(ch * 0.62) + " 0 0 1 " + f1(p[0]) + " " + f1(p[1]);
    }
    return d + " Z";
  }
  S.bumpy = bumpy;
  BG.explosion = function (g, w, h, r, o) {
    var cx = w * 0.5, cy = h * 0.62;
    rays(g, w, h, cx, cy, 14, C.red, "#F25C2E", 0);
    var M = Math.max(w, h);
    [[0.62, "#F68B1F"], [0.45, C.yellow], [0.28, "#FFF6B8"]].forEach(function (L, i) {
      sv("path", A(ink(u(4)), { d: bumpy(cx, cy, M * L[0] * 0.75, M * L[0] * 0.55, 13 - i * 2, r, 0.3), fill: L[1] }), g);
    });
    S.halftone(g, { w: w, h: h, color: "rgba(150,20,10,0.4)", step: u(15), radial: { cx: cx, cy: cy, r0: M * 0.25, r1: M * 0.7 }, maxR: u(7) });
    // debris
    for (var i = 0; i < 9; i++) {
      var a = r() * Math.PI * 2, dist = M * (0.3 + r() * 0.3), s = u(10 + r() * 18);
      var x = cx + Math.cos(a) * dist, y = cy + Math.sin(a) * dist * 0.7;
      sv("path", A(ink(u(2.5)), { d: polyD([[x - s, y - s * 0.4], [x + s * 0.6, y - s], [x + s, y + s * 0.5], [x - s * 0.3, y + s * 0.8]]), fill: "#5E3A22" }), g);
    }
  };
  BG.halftone = function (g, w, h, r, o) {
    var pal = { red: [C.red, "#FF8A6A"], blue: [C.blue, "#7FB2F5"], yellow: [C.yellow, "#FFF0A8"], purple: [C.purple, "#C79BE0"], green: [C.green, "#A9E2B8"], pink: [C.pink, "#FFD0E4"] }[o.palette || "yellow"] || [C.yellow, "#FFF0A8"];
    sv("rect", { width: w, height: h, fill: pal[1] }, g);
    S.halftone(g, { w: w, h: h, color: pal[0], step: u(20), angle: o.angle != null ? o.angle : 30, maxR: u(11.5), from: 0.0 });
  };
  BG.focus = function (g, w, h, r, o) {
    sv("rect", { width: w, height: h, fill: o.fill || "#fff" }, g);
    focusLinesInto(g, w, h, w * (o.cx != null ? o.cx : 0.5), h * (o.cy != null ? o.cy : 0.45), r, 0.32);
  };
  BG.speed = function (g, w, h, r, o) {
    sv("rect", { width: w, height: h, fill: o.fill || "#FFF3D1" }, g);
    var ln = sv("g", null, g);
    speedLinesInto(ln, w, h, r, INK, 0);
    V.onFrame(function (t) { ln.setAttribute("transform", "translate(" + f1(-((t * w * 0.9) % w)) + ",0)"); });
  };
  BG.sky = function (g, w, h, r, o) {
    var m = MOODS[o.mood] || MOODS.day;
    skyFill(g, w, h, m, h);
    for (var i = 0; i < 4; i++) cloud(g, w * (0.1 + r() * 0.8), h * (0.15 + r() * 0.65), u(0.7 + r() * 0.9), "#fff");
  };
  BG.plain = function (g, w, h, r, o) { sv("rect", { width: w, height: h, fill: o.fill || C.paper }, g); };
  S.backgrounds = Object.keys(BG);

  function focusLinesInto(g, w, h, cx, cy, r, clear) {
    var R = Math.sqrt(w * w + h * h);
    var d = "";
    var n = 90;
    for (var i = 0; i < n; i++) {
      var a = (i / n) * Math.PI * 2 + r() * 0.05;
      var wdt = 0.006 + r() * 0.018;
      var r0 = Math.min(w, h) * (clear + r() * 0.18);
      var ex = Math.cos(a) * r0 * (w / Math.max(w, h)) * 1.3, ey = Math.sin(a) * r0;
      d += "M" + f1(cx + ex) + " " + f1(cy + ey) + " L" + f1(cx + Math.cos(a - wdt) * R) + " " + f1(cy + Math.sin(a - wdt) * R) + " L" + f1(cx + Math.cos(a + wdt) * R) + " " + f1(cy + Math.sin(a + wdt) * R) + " Z";
    }
    return sv("path", { d: d, fill: INK }, g);
  }
  function speedLinesInto(g, w, h, r, color, lean) {
    var d = "";
    for (var k = 0; k < 2; k++) {
      for (var i = 0; i < 34; i++) {
        var y = r() * h, len = w * (0.2 + r() * 0.5), x = r() * w + k * w, th = u(1.5 + r() * 5);
        d += "M" + f1(x) + " " + f1(y) + " L" + f1(x + len) + " " + f1(y - th / 2 + lean * len) + " L" + f1(x + len) + " " + f1(y + th / 2 + lean * len) + " Z";
      }
    }
    return sv("path", { d: d, fill: color }, g);
  }

  /** Paint a background into a panel. name: city | street | lab | space | interior | action | explosion | halftone | focus | speed | sky | plain.
   *  opts: { mood: "day"|"dusk"|"night", palette, seed } */
  S.scene = function (panel, name, opts) {
    var p = getPanel(panel);
    opts = opts || {};
    var fn = BG[name] || BG.halftone;
    var g = sv("g", { class: "cb-scene" }, p.bg);
    try { fn(g, p.w, p.h, rng((opts.seed || "") + name + p.i + p.page.index), opts); } catch (e) { V.error("scene " + name + ": " + e.message); }
    return g;
  };
  S.background = function () { return null; };

  /** Radial focus (zoom) lines over a panel's background. opts: { at, cx, cy, clear } */
  S.focusLines = function (panel, opts) {
    var p = getPanel(panel);
    opts = opts || {};
    var g = sv("g", { class: "cb-focus" }, p.bg);
    focusLinesInto(g, p.w, p.h, p.w * (opts.cx != null ? opts.cx : 0.5), p.h * (opts.cy != null ? opts.cy : 0.45), rng("fl" + p.i), opts.clear != null ? opts.clear : 0.3);
    if (opts.at != null) cur().tl.fromTo(g, { opacity: 0, scale: 1.4 }, { opacity: 1, scale: 1 }, { at: cT(opts.at), dur: 0.25, ease: "outCubic" });
    g.style.transformOrigin = f1(p.w * (opts.cx != null ? opts.cx : 0.5)) + "px " + f1(p.h * (opts.cy != null ? opts.cy : 0.45)) + "px";
    return g;
  };
  /** Moving speed lines over a panel. opts: { at, color, opacity } */
  S.speedLines = function (panel, opts) {
    var p = getPanel(panel);
    opts = opts || {};
    var g = sv("g", { class: "cb-speed", opacity: opts.opacity != null ? opts.opacity : 0.85 }, p.bg);
    var inner = sv("g", null, g);
    speedLinesInto(inner, p.w, p.h, rng("sl" + p.i), opts.color || "#fff", 0);
    V.onFrame(function (t) { inner.setAttribute("transform", "translate(" + f1(-((t * p.w * 1.2) % p.w)) + ",0)"); });
    if (opts.at != null) cur().tl.fromTo(g, { opacity: 0 }, { opacity: opts.opacity != null ? opts.opacity : 0.85 }, { at: cT(opts.at), dur: 0.2 });
    return g;
  };

  // ───────────────────────── bursts ─────────────────────────
  function burstD(cx, cy, ro, ri, n, r, jit) {
    var d = "";
    for (var i = 0; i < n * 2; i++) {
      var a = (i / (n * 2)) * Math.PI * 2 + (r() - 0.5) * (jit || 0.12);
      var rr = i % 2 ? ri : ro * (0.85 + r() * 0.3);
      d += (i ? " L" : "M") + f1(cx + Math.cos(a) * rr) + " " + f1(cy + Math.sin(a) * rr);
    }
    return d + " Z";
  }
  S.burstPath = burstD;
  /** Jagged impact burst in the page overlay (or a panel). opts: { panel, x, y (0..1 of panel, or page px when no panel), r, spikes, fill, fill2, at, rotate } */
  S.burst = function (opts) {
    opts = opts || {};
    var c = cur(), pg = curPage();
    var cx, cy, R;
    if (opts.panel != null) {
      var p = getPanel(opts.panel);
      cx = p.bbox.x + p.w * (opts.x != null ? opts.x : 0.5); cy = p.bbox.y + p.h * (opts.y != null ? opts.y : 0.5);
      R = opts.r || Math.min(p.w, p.h) * 0.4;
    } else { cx = opts.x != null ? opts.x : V.width / 2; cy = opts.y != null ? opts.y : V.height / 2; R = opts.r || Math.min(V.width, V.height) * 0.3; }
    var holder = el("div.cb-burst", { parent: pg.over, style: { left: f1(cx) + "px", top: f1(cy) + "px" } });
    var s = sv("svg", { width: 2, height: 2, style: { overflow: "visible", position: "absolute", left: "0", top: "0" } }, holder);
    var r = rng("burst" + cx + cy);
    var n = opts.spikes || 14;
    var ar = opts.aspect || 1.25;
    var g = sv("g", { transform: "scale(" + ar + ",1)" }, s);
    sv("path", { d: burstD(0, 0, R * 1.08 / ar * 1.15, R * 0.72 / ar * 1.15, n, r, 0.1), fill: INK, transform: "translate(" + f1(u(8) / ar) + "," + f1(u(8)) + ")" }, g);
    sv("path", { d: burstD(0, 0, R / ar * 1.15, R * 0.68 / ar * 1.15, n, r, 0.1), fill: opts.fill || C.yellow, stroke: INK, "stroke-width": f1(u(6)), "stroke-linejoin": "miter" }, g);
    if (opts.fill2 !== false) sv("path", { d: burstD(0, 0, R * 0.74 / ar * 1.15, R * 0.5 / ar * 1.15, n, r, 0.1), fill: opts.fill2 || "#fff", opacity: 0.9 }, g);
    if (opts.at != null) {
      var at = cT(opts.at);
      c.tl.fromTo(holder, { scale: 0, rotate: -25 + (opts.rotate || 0) }, { scale: 1, rotate: opts.rotate || 0 }, { at: at, dur: 0.38, ease: "outBack" });
    } else if (opts.rotate) holder.style.transform = "rotate(" + opts.rotate + "deg)";
    return { el: holder, svg: s, r: R, x: cx, y: cy };
  };

  // ───────────────────────── 3D comic lettering (titles + SFX) ─────────────────────────
  var SFX_PAL = {
    fire: ["#FFE45C", "#F68B1F", "#B3261E"],
    pow: ["#FFFFFF", "#FFD23F", "#C0392B"],
    zap: ["#E8FBFF", "#3FD0F5", "#1B3F8F"],
    ice: ["#FFFFFF", "#9FE3FF", "#2C6FD6"],
    slime: ["#E9FF8A", "#6CCB3E", "#1F6B2A"],
    pink: ["#FFE1F0", "#F06BA8", "#7B1F57"],
    red: ["#FF8A6A", "#E23B2E", "#5E0F0B"],
    gold: ["#FFF6B0", "#FFC93C", "#9A5B12"],
  };
  S.sfxPalettes = Object.keys(SFX_PAL);
  var widthCache = {};
  function glyphW(ch, size, svgHost, tnum) {
    var key = ch + "|" + Math.round(size) + (tnum ? "t" : "");
    if (widthCache[key] != null) return widthCache[key];
    var t = sv("text", { "font-size": size, style: { fontFamily: FONT, fontWeight: "900", fontStyle: "italic", fontVariantNumeric: tnum ? "tabular-nums" : "normal" }, text: ch }, svgHost);
    var w = 0;
    try { w = t.getComputedTextLength(); } catch (e) { w = 0; }
    if (!w) w = size * (ch === " " ? 0.3 : 0.7);
    svgHost.removeChild(t);
    widthCache[key] = w;
    return w;
  }
  /**
   * Build extruded 3D lettering. Returns { el (div holder centred at 0,0), letters: [g], width, height }.
   * o: size (px), palette name or [face1, face2, extrude], depth (px), angle (extrude direction deg, default 50),
   *    condense (0.6–1), tracking, arc (px bow), ramp [s0,s1] (letter scale from first to last), jitter (deg), dots (bool halftone on face)
   */
  function lettering(parent, text, o) {
    o = o || {};
    var holder = el("div.cb-letters", { parent: parent });
    var s = sv("svg", { width: 2, height: 2, style: { overflow: "visible", position: "absolute", left: "0", top: "0" } }, holder);
    var size = o.size || u(140);
    var pal = Array.isArray(o.palette) ? o.palette : SFX_PAL[o.palette || "fire"] || SFX_PAL.fire;
    var depth = o.depth != null ? o.depth : size * 0.11;
    var ang = ((o.angle != null ? o.angle : 55) * Math.PI) / 180;
    var cond = o.condense || 0.86;
    var gid = nid("lg");
    var lg = sv("linearGradient", { id: gid, x1: "0", y1: "0", x2: "0", y2: "1" }, s);
    sv("stop", { offset: "0", "stop-color": pal[0] }, lg);
    sv("stop", { offset: "0.42", "stop-color": pal[0] }, lg);
    sv("stop", { offset: "0.62", "stop-color": pal[1] }, lg);
    sv("stop", { offset: "1", "stop-color": pal[1] }, lg);
    var chars = str(text).toUpperCase().split("");
    var n = chars.length;
    var ramp = o.ramp || [1, 1];
    var widths = chars.map(function (ch, i) {
      var sc = n > 1 ? lerp(ramp[0], ramp[1], i / (n - 1)) : 1;
      return glyphW(ch, size, s, o.tnum) * cond * sc + (o.tracking != null ? o.tracking : -size * 0.01);
    });
    var total = widths.reduce(function (a, b) { return a + b; }, 0);
    var x = -total / 2;
    var letters = [];
    var byIndex = [];
    var r = rng("let" + text);
    var sw = o.stroke != null ? o.stroke : Math.max(u(3), size * 0.045);
    var steps = Math.max(3, Math.min(10, Math.round(depth / Math.max(1, size * 0.012))));
    var dx = Math.cos(ang) * depth, dy = Math.sin(ang) * depth;
    var dotsUrl = o.dots ? S.pattern("dots", "rgba(0,0,0,0.22)", Math.max(4, size * 0.07), { r: 0.3 }) : null;
    chars.forEach(function (ch, i) {
      var w = widths[i];
      if (ch === " ") { x += w; byIndex.push(null); return; }
      var sc = n > 1 ? lerp(ramp[0], ramp[1], i / (n - 1)) : 1;
      var nx = total > 0 ? (x + w / 2) / (total / 2) : 0;
      var ay = o.arc ? -o.arc * (1 - nx * nx) : 0;
      var rot = (o.arc ? (Math.atan(2 * o.arc * nx / (total / 2 || 1)) * 180) / Math.PI : 0) + (o.jitter ? (r() - 0.5) * 2 * o.jitter : 0);
      var jy = o.jitter ? (r() - 0.5) * size * 0.08 : 0;
      var cx = x + w / 2, cy = ay + jy;
      var lgp = sv("g", { class: "cb-letter", style: { transformOrigin: f1(cx) + "px " + f1(cy) + "px" } }, s);
      var inner = sv("g", { transform: "translate(" + f1(cx) + "," + f1(cy) + ") rotate(" + f1(rot) + ") scale(" + f1(cond * sc * 1000) / 1000 + "," + f1(sc * 1000) / 1000 + ")" }, lgp);
      var base = { "font-size": f1(size), "text-anchor": "middle", y: f1(size * 0.36), style: { fontFamily: FONT, fontWeight: "900", fontStyle: "italic", fontVariantNumeric: o.tnum ? "tabular-nums" : "normal" }, text: ch };
      var k;
      for (k = steps; k >= 0; k--) sv("text", A(base, { x: f1((dx * k) / steps / cond / sc), y: f1(size * 0.36 + (dy * k) / steps / sc), fill: INK, stroke: INK, "stroke-width": f1((sw * 2.1) / sc), "stroke-linejoin": "round" }), inner);
      for (k = steps; k >= 1; k--) sv("text", A(base, { x: f1((dx * k) / steps / cond / sc), y: f1(size * 0.36 + (dy * k) / steps / sc), fill: pal[2] }), inner);
      sv("text", A(base, { fill: "url(#" + gid + ")", stroke: INK, "stroke-width": f1(sw / sc), "paint-order": "stroke", "stroke-linejoin": "round" }), inner);
      if (dotsUrl) sv("text", A(base, { fill: dotsUrl }), inner);
      letters.push(lgp);
      byIndex.push(lgp);
      x += w;
    });
    function setChar(i, c2) {
      var lg = byIndex[i];
      if (!lg) return;
      if (lg._c === c2) return;
      lg._c = c2;
      lg.style.visibility = c2 ? "" : "hidden";
      if (c2) [].forEach.call(lg.querySelectorAll("text"), function (tn) { tn.textContent = c2; });
    }
    return { el: holder, svg: s, letters: letters, setChar: setChar, width: total + dx, height: size * 0.75 + dy + (o.arc || 0) };
  }
  S.lettering = function (parent, text, o) { return lettering(parent || curPage().over, text, o); };

  /** Animated SFX ("BOOM!", "ZAP!"). opts: { panel, x, y (0..1 of panel; page px if no panel), size, palette, rotate, at,
   *  burst: true|color, shake: true, ramp, cameraShake: bool, hold } */
  S.sfx = function (text, opts) {
    opts = opts || {};
    var c = cur(), pg = curPage();
    var cx, cy, maxW;
    if (opts.panel != null) {
      var p = getPanel(opts.panel);
      cx = p.bbox.x + p.w * (opts.x != null ? opts.x : 0.5); cy = p.bbox.y + p.h * (opts.y != null ? opts.y : 0.5);
      maxW = p.w * 0.95;
    } else { cx = opts.x != null ? opts.x : V.width / 2; cy = opts.y != null ? opts.y : V.height / 2; maxW = V.width * 0.85; }
    var size = opts.size || Math.min(u(170), (opts.panel != null ? getPanel(opts.panel).h : V.height) * 0.3);
    var wrap = el("div.cb-sfx", { parent: pg.over, style: { left: f1(cx) + "px", top: f1(cy) + "px" } });
    var at = cT(opts.at != null ? opts.at : 0.5);
    var b = null;
    var L = lettering(wrap, plain(text) || "POW!", { size: size, palette: opts.palette || "fire", jitter: opts.jitter != null ? opts.jitter : 7, ramp: opts.ramp || [0.9, 1.12], condense: 0.8, depth: size * 0.12 });
    var fit = Math.min(1, maxW / Math.max(1, L.width));
    if (fit < 1) { L.el.style.transform = "scale(" + fit.toFixed(3) + ")"; }
    if (opts.burst) {
      var bs = sv("svg", { width: 2, height: 2, style: { overflow: "visible", position: "absolute", left: "0", top: "0" } });
      wrap.insertBefore(bs, wrap.firstChild);
      var rr = rng("sfxb" + text);
      var R = Math.max(L.width * fit * 0.62, size * 0.9);
      b = sv("path", { d: burstD(0, 0, R, R * 0.62, 16, rr, 0.14), fill: typeof opts.burst === "string" ? opts.burst : "#fff", stroke: INK, "stroke-width": f1(u(5)), transform: "scale(1,0.62) translate(0," + f1(size * 0.12) + ")" }, bs);
      c.tl.fromTo(bs, { scale: 0, rotate: -30 }, { scale: 1, rotate: 0 }, { at: at - 0.04, dur: 0.32, ease: "outBack" });
    }
    var rot = opts.rotate != null ? opts.rotate : -8;
    wrap.style.transform = "rotate(" + rot + "deg)";
    L.letters.forEach(function (lg, i) {
      c.tl.fromTo(lg, { scale: 0, rotate: -35 + (i % 2) * 70, opacity: 0 }, { scale: 1, rotate: 0, opacity: 1 }, { at: at + i * 0.045, dur: 0.34, ease: "outBack" });
    });
    if (opts.shake !== false) {
      var seed = hs(text) % 97;
      V.onFrame(function (t) {
        var dt = t - (at + L.letters.length * 0.045);
        if (dt < 0 || dt > 0.5) { L.svg.style.transform = ""; return; }
        var q = 1 - dt / 0.5;
        var f = Math.floor(dt * 40);
        L.svg.style.transform = "translate(" + f1((hash01(f + seed) - 0.5) * u(14) * q) + "px," + f1((hash01(f + seed + 9) - 0.5) * u(14) * q) + "px)";
      });
    }
    if (opts.cameraShake) S.camera.shake(at + 0.05, u(12), 0.4);
    if (opts.hold != null) c.tl.to(wrap, { opacity: 0, scale: 1.2 }, { at: cT(at + opts.hold), dur: 0.3, ease: "inCubic" });
    return { el: wrap, letters: L.letters, at: at };
  };

  // ───────────────────────── characters ─────────────────────────
  var RIG = {
    adult: { hx: 120, hy: 70, hs: 1, sy: 134, shw: 44, wy: 252, ww: 31, fy: 470, legW: 14, l1: 82, l2: 74, hand: 12, slv: 11.5, frm: 9.5, neckW: 10.5, legX: 16 },
    hero: { hx: 120, hy: 66, hs: 0.98, sy: 128, shw: 54, wy: 250, ww: 30, fy: 470, legW: 15, l1: 84, l2: 76, hand: 13, slv: 13.5, frm: 11, neckW: 13, legX: 17 },
    kid: { hx: 120, hy: 236, hs: 1.12, sy: 296, shw: 31, wy: 374, ww: 25, fy: 470, legW: 11.5, l1: 52, l2: 46, hand: 10.5, slv: 9.5, frm: 7.8, neckW: 8.5, legX: 12 },
    robot: { hx: 120, hy: 70, hs: 1.05, sy: 140, shw: 50, wy: 262, ww: 36, fy: 470, legW: 12, l1: 80, l2: 72, hand: 13, slv: 10, frm: 9, neckW: 9, legX: 20 },
  };
  // pose: [leftOut, leftElbow, rightOut, rightElbow, leftLeg, rightLeg] (deg; + = away from body)
  var POSES = {
    stand: [7, -4, 7, -4, 2, 2],
    point: [7, -4, 88, -4, 3, 3],
    explain: [8, -5, 24, 112, 2, 2],
    present: [34, 46, 34, 46, 4, 4],
    wave: [7, -4, 140, 30, 2, 2],
    think: [8, -5, -26, -150, 1, 1],
    cheer: [158, 8, 158, 8, 6, 6],
    shock: [48, 104, 48, 104, 7, 7],
    fist: [8, -6, 36, 128, 4, 4],
    hips: [38, -88, 38, -88, 9, 9],
    shrug: [26, 92, 26, 92, 3, 3],
    crossed: [-16, -118, -22, -110, 3, 3],
    run: [-40, -80, 50, 70, 18, -14],
    fight: [-6, -128, 30, -150, 10, 10],
  };
  var EXPR = {
    neutral: { ang: 0, by: 0, eye: 1, pup: 1, mw: 8, mo: 0, mc: 2 },
    happy: { ang: -4, by: -2, eye: 0.82, pup: 1, mw: 11, mo: 5, mc: 6, teeth: 1, blush: 1 },
    grin: { ang: 9, by: 0, eye: 0.78, pup: 1, mw: 12, mo: 4, mc: 5, teeth: 1 },
    shock: { ang: -12, by: -6, eye: 1.32, pup: 0.55, mw: 6, mo: 12, mc: 0, round: 1, sweat: 1 },
    angry: { ang: 20, by: 2, eye: 0.74, pup: 0.85, mw: 11, mo: 5, mc: -4, teeth: 1, vein: 1 },
    sad: { ang: -17, by: -1, eye: 0.88, pup: 1.05, mw: 8, mo: 0, mc: -5, tilt: -4 },
    smirk: { ang: 8, by: 0, eye: 0.78, pup: 1, mw: 9, mo: 0, mc: 3, ma: -3.5, browUp: 1 },
    think: { ang: -6, by: -1, eye: 0.9, pup: 0.95, mw: 6, mo: 0, mc: -1, ma: 2, look: [2.2, -2.4], browUp: 1, tilt: 5 },
    determined: { ang: 13, by: 1.5, eye: 0.84, pup: 0.95, mw: 9, mo: 0, mc: -1 },
    scared: { ang: -19, by: -5, eye: 1.22, pup: 0.55, mw: 10, mo: 5, mc: -4, teeth: 1, sweat: 1 },
  };
  S.poses = Object.keys(POSES);
  S.expressions = Object.keys(EXPR);

  function capsule(x, y, len, r1, r2) {
    return "M" + f1(x - r1) + " " + f1(y) + " L" + f1(x - r2) + " " + f1(y + len) + " A" + f1(r2) + " " + f1(r2) + " 0 0 0 " + f1(x + r2) + " " + f1(y + len) + " L" + f1(x + r1) + " " + f1(y) + " A" + f1(r1) + " " + f1(r1) + " 0 0 0 " + f1(x - r1) + " " + f1(y) + " Z";
  }
  var LW = 1, DOTU = 5.5; // per-character line-weight factor and dot size (viewBox units), set from the shot scale
  // shape with an overridable fill (outline pass) and inherited ink weight
  function F(parent, tag, attrs, fill, sw) {
    var n = sv(tag, attrs, parent);
    n.setAttribute("style", "fill:var(--of," + (fill || "none") + ");stroke:var(--os," + INK + ");stroke-width:var(--osw," + f1((sw != null ? sw : 2.4) * LW * 100) / 100 + ");stroke-linejoin:round;stroke-linecap:round");
    return n;
  }
  function Fn(parent, tag, attrs, fill) { // fill only, no ink
    var n = sv(tag, attrs, parent);
    n.setAttribute("style", "fill:var(--of," + fill + ");stroke:var(--os,none);stroke-width:var(--osw,0)");
    return n;
  }
  function Ln(parent, d, w, color) { // ink line (no fill)
    var n = sv("path", { d: d }, parent);
    n.setAttribute("style", "fill:none;stroke:var(--os," + (color || INK) + ");stroke-width:var(--osw," + f1((w || 2) * LW * 100) / 100 + ");stroke-linecap:round;stroke-linejoin:round");
    return n;
  }

  var HEADS = {
    oval: "M -31 -6 C -32 -50, 32 -50, 31 -6 C 31 18, 19 39, 0 40 C -19 39, -31 18, -31 -6 Z",
    square: "M -32 -8 C -33 -50, 33 -50, 32 -8 L 31 16 C 29 31, 17 42, 0 42 C -17 42, -29 31, -31 16 Z",
    long: "M -28 -12 C -30 -54, 30 -54, 28 -12 L 26 14 C 22 32, 10 48, 0 49 C -10 48, -22 32, -26 14 Z",
    round: "M -34 -4 C -35 -50, 35 -50, 34 -4 C 34 24, 20 40, 0 40 C -20 40, -34 24, -34 -4 Z",
  };

  // ── cast definitions ──
  var CAST = {};
  CAST.sam = {
    name: "Sam", role: "everyday narrator", rig: "adult", head: "oval",
    skin: "#F4C79B", shade: "#D99A68", hair: "#6B3A1E", top: "#2F6FD6", topShade: "#1C4B9E", sleeve: "#2F6FD6", fore: "#2F6FD6", cuff: "#1C4B9E",
    pants: "#3D5583", pantsShade: "#283A5E", shoes: "#E23B2E", sole: "#fff", defaultPose: "explain",
    hairBack: function (g) { F(g, "path", { d: "M -34 4 C -44 -40, 30 -62, 37 -4 L 31 2 C 26 -20, -24 -22, -29 6 Z" }, this.hair); },
    hairFront: function (g) {
      F(g, "path", { d: "M -35 2 C -42 -30, -30 -56, 2 -58 C 22 -59, 40 -46, 44 -30 C 40 -34, 36 -35, 32 -34 C 38 -26, 37 -16, 34 -6 C 30 -16, 24 -22, 16 -24 C 18 -18, 16 -14, 12 -12 C 8 -20, 0 -24, -8 -24 C -4 -20, -4 -16, -6 -12 C -12 -20, -20 -22, -26 -18 C -28 -10, -32 -4, -35 2 Z" }, this.hair);
      Ln(g, "M -14 -46 C -4 -50, 10 -46, 18 -38 M 2 -40 C 10 -38, 18 -34, 22 -28 M -24 -36 C -18 -40, -10 -40, -4 -36", 1.5);
      Fn(g, "path", { d: "M -20 -50 C -10 -55, 8 -55, 18 -48 C 8 -50, -6 -50, -18 -46 Z" }, "rgba(255,255,255,0.28)");
    },
    torso: function (g, P) { hoodie(g, P, this); },
  };
  CAST.nova = {
    name: "Dr. Nova", role: "scientist", rig: "adult", head: "oval",
    skin: "#A0623A", shade: "#77401F", hair: "#1E1412", top: "#1FA39A", topShade: "#137068", sleeve: "#F7F7F2", fore: "#F7F7F2", cuff: "#DCE3E6",
    pants: "#2C2F4C", pantsShade: "#1C1E33", shoes: "#2A1A12", sole: "#2A1A12", defaultPose: "explain", lips: "#6E2A1E",
    hairBack: function (g) {
      F(g, "circle", { cx: 0, cy: -52, r: 21 }, this.hair);
      F(g, "path", { d: "M -38 2 C -48 -40, 48 -40, 38 2 C 36 14, 30 18, 26 14 L -26 14 C -30 18, -36 14, -38 2 Z" }, this.hair);
      Ln(g, "M -8 -60 q 6 -4 10 2 M 4 -48 q 6 -2 8 4", 1.6, "#4a3530");
    },
    hairFront: function (g) {
      F(g, "path", { d: "M -34 -2 C -38 -42, 38 -42, 34 -2 C 31 -14, 24 -20, 16 -18 C 12 -24, 4 -24, 0 -20 C -4 -24, -12 -24, -16 -18 C -24 -20, -31 -14, -34 -2 Z" }, this.hair);
      // goggles on the forehead
      F(g, "path", { d: "M -34 -24 C -20 -30, 20 -30, 34 -24 L 34 -18 C 20 -24, -20 -24, -34 -18 Z" }, "#3A3A3A", 1.8);
      F(g, "circle", { cx: -12, cy: -26, r: 8.5 }, "#5A5A5A", 2.2);
      F(g, "circle", { cx: 12, cy: -26, r: 8.5 }, "#5A5A5A", 2.2);
      Fn(g, "circle", { cx: -12, cy: -26, r: 5.8 }, "#F68B1F");
      Fn(g, "circle", { cx: 12, cy: -26, r: 5.8 }, "#F68B1F");
      Fn(g, "path", { d: "M -15 -29 a 3 3 0 0 1 4 -1 M 9 -29 a 3 3 0 0 1 4 -1" }, "#fff");
      Ln(g, "M -15 -28.5 q 2 -2 4.5 -1.2 M 9 -28.5 q 2 -2 4.5 -1.2", 1.6, "#FFE9B0");
      F(g, "circle", { cx: -31, cy: 16, r: 3 }, C.yellow, 1.2);
      F(g, "circle", { cx: 31, cy: 16, r: 3 }, C.yellow, 1.2);
    },
    torso: function (g, P) { labcoat(g, P, this); },
  };
  CAST.vex = {
    name: "Baron Vex", role: "villain", rig: "adult", head: "long", eyes: "narrow",
    skin: "#C7D0B2", shade: "#97A283", hair: "#17131F", top: "#2A2236", topShade: "#17121F", sleeve: "#2A2236", fore: "#2A2236", cuff: "#fff",
    pants: "#221C2C", pantsShade: "#120F18", shoes: "#0F0C12", sole: "#0F0C12", defaultPose: "crossed", glove: "#3B2F4D",
    back: function (g, P) {
      F(g, "path", { d: "M " + (P.hx - P.shw - 2) + " " + (P.sy - 4) + " C " + (P.hx - P.shw - 30) + " 300, 30 420, 22 462 Q 120 478 218 462 C 210 420, " + (P.hx + P.shw + 30) + " 300, " + (P.hx + P.shw + 2) + " " + (P.sy - 4) + " Z" }, "#5A1F7A", 2.6);
      F(g, "path", { d: "M 60 462 C 70 360, 80 260, " + (P.hx - P.shw + 6) + " " + (P.sy + 10) + " L " + (P.hx + P.shw - 6) + " " + (P.sy + 10) + " C 160 260, 170 360, 180 462 Q 120 472 60 462 Z" }, "#B3182E", 2);
      // tall collar spikes behind the head
      F(g, "path", { d: "M " + (P.hx - 22) + " " + (P.sy - 4) + " L " + (P.hx - 64) + " " + (P.sy - 74) + " L " + (P.hx - 40) + " " + (P.sy - 6) + " Z" }, "#B3182E", 2.4);
      F(g, "path", { d: "M " + (P.hx + 22) + " " + (P.sy - 4) + " L " + (P.hx + 64) + " " + (P.sy - 74) + " L " + (P.hx + 40) + " " + (P.sy - 6) + " Z" }, "#B3182E", 2.4);
    },
    hairFront: function (g) {
      F(g, "path", { d: "M -30 -10 C -34 -54, 34 -54, 30 -10 C 28 -24, 20 -32, 10 -32 L 0 -20 L -10 -32 C -20 -32, -28 -24, -30 -10 Z" }, this.hair);
      Fn(g, "path", { d: "M 12 -44 C 20 -42, 26 -34, 28 -22 C 24 -30, 18 -36, 10 -38 Z" }, "#8C8899");
    },
    face: function (g) {
      // moustache + monocle + cheekbone lines
      F(g, "path", { d: "M 0 15 C -6 11, -14 12, -19 18 C -21 14, -18 9, -12 9 C -6 9, -2 11, 0 13 C 2 11, 6 9, 12 9 C 18 9, 21 14, 19 18 C 14 12, 6 11, 0 15 Z" }, this.hair, 1.4);
      Ln(g, "M -22 10 q 3 8 9 14 M 22 10 q -3 8 -9 14", 1.2);
      F(g, "circle", { cx: 13, cy: -1, r: 10 }, "none", 2.6).style.stroke = "#D4A017";
      Ln(g, "M 22 4 C 30 18, 28 34, 22 46", 1.2, "#D4A017");
    },
    torso: function (g, P) { suit(g, P, this); },
  };
  CAST.pip = {
    name: "Pip", role: "kid sidekick", rig: "kid", head: "round", eyes: "big",
    skin: "#EDB47E", shade: "#C9844E", hair: "#E0662B", top: "#FFC93C", topShade: "#E0A01A", sleeve: "#FFC93C", fore: null, cuff: null,
    pants: "#3DAA5B", pantsShade: "#23703A", shoes: "#2C6FD6", sole: "#fff", shorts: true, defaultPose: "cheer", freckles: true,
    hairBack: function (g) { F(g, "path", { d: "M -36 4 L -44 -6 L -36 -12 L -42 -22 L -32 -26 Z M 36 4 L 44 -6 L 36 -12 L 42 -22 L 32 -26 Z" }, this.hair); },
    hairFront: function (g) {
      // backwards cap
      F(g, "path", { d: "M -36 -10 C -37 -54, 37 -54, 36 -10 C 20 -18, -20 -18, -36 -10 Z" }, "#E23B2E", 2.6);
      F(g, "path", { d: "M 30 -14 C 44 -16, 52 -10, 54 -4 C 46 -6, 38 -6, 32 -6 Z" }, "#B5221A", 2.4);
      Fn(g, "path", { d: "M -26 -38 C -14 -46, 4 -46, 12 -42 C 0 -42, -14 -40, -24 -34 Z" }, "rgba(255,255,255,0.45)");
      F(g, "path", { d: "M -32 -14 L -28 -8 L -24 -15 L -19 -9 L -15 -16 Z M 18 -16 L 22 -9 L 26 -15 L 29 -9 L 33 -14 Z" }, this.hair, 1.6);
    },
    torso: function (g, P) { tee(g, P, this); },
  };
  CAST.bolt = {
    name: "Bolt", role: "robot", rig: "robot", robot: true,
    skin: "#BAC6D1", shade: "#8797A6", hair: "#BAC6D1", top: "#BAC6D1", topShade: "#8797A6", sleeve: "#9EADBB", fore: "#BAC6D1", cuff: "#5E6B78",
    pants: "#8C9AA8", pantsShade: "#6A7886", shoes: "#5E6B78", sole: "#3E4954", glove: "#5E6B78", defaultPose: "wave",
    torso: function (g, P) { robotBody(g, P, this); },
  };
  CAST.ace = {
    name: "Captain Ace", role: "hero", rig: "hero", head: "square",
    skin: "#F0B98A", shade: "#C98A57", hair: "#16121A", top: "#2C5CC5", topShade: "#1A3C8C", sleeve: "#2C5CC5", fore: "#2C5CC5", cuff: null,
    pants: "#2C5CC5", pantsShade: "#1A3C8C", shoes: "#D62828", sole: "#8E1414", boots: true, glove: "#D62828", defaultPose: "hips",
    back: function (g, P) {
      F(g, "path", { d: "M " + (P.hx - P.shw + 6) + " " + (P.sy - 2) + " C 40 260, 20 380, 14 456 L 70 448 L 120 464 L 170 448 L 226 456 C 220 380, 200 260, " + (P.hx + P.shw - 6) + " " + (P.sy - 2) + " Z" }, "#D62828", 2.6);
      Fn(g, "path", { d: "M 150 200 C 190 280, 204 380, 214 452 L 226 456 C 220 380, 200 260, 168 140 Z" }, "#9E1A1A");
    },
    hairFront: function (g) {
      F(g, "path", { d: "M -33 -6 C -38 -50, 36 -52, 33 -8 C 30 -22, 24 -30, 12 -30 C 4 -34, -8 -32, -14 -28 C -22 -28, -30 -20, -33 -6 Z" }, this.hair);
      F(g, "path", { d: "M -4 -30 C -10 -24, -6 -16, 2 -18 C -4 -20, -6 -24, -2 -28 Z" }, this.hair, 1.4);
    },
    face: function (g) {
      F(g, "path", { d: "M -28 -8 C -20 -14, -6 -10, 0 -6 C 6 -10, 20 -14, 28 -8 L 26 6 C 18 8, 8 6, 0 2 C -8 6, -18 8, -26 6 Z" }, "#D62828", 2);
      Ln(g, "M -8 32 q 8 4 16 0", 1.4);
    },
    torso: function (g, P) { heroSuit(g, P, this); },
  };
  S.cast = Object.keys(CAST);
  S.castInfo = function () { var o = {}; for (var k in CAST) o[k] = CAST[k].name + " — " + CAST[k].role; return o; };

  // ── outfits ──
  function torsoD(P, flare) {
    var x = P.hx, s = P.shw, w = P.ww + (flare || 0);
    return "M " + (x - s + 6) + " " + (P.sy - 8) + " Q " + x + " " + (P.sy - 16) + " " + (x + s - 6) + " " + (P.sy - 8) +
      " Q " + (x + s + 6) + " " + (P.sy - 4) + " " + (x + s + 3) + " " + (P.sy + 22) + " L " + (x + w + 2) + " " + (P.wy + 6) +
      " L " + (x - w - 2) + " " + (P.wy + 6) + " L " + (x - s - 3) + " " + (P.sy + 22) + " Q " + (x - s - 6) + " " + (P.sy - 4) + " " + (x - s + 6) + " " + (P.sy - 8) + " Z";
  }
  function sideShade(g, P, fill, flare) {
    var x = P.hx, s = P.shw, w = P.ww + (flare || 0);
    Fn(g, "path", { d: "M " + (x + s - 8) + " " + (P.sy - 6) + " Q " + (x + s + 5) + " " + (P.sy - 2) + " " + (x + s + 2) + " " + (P.sy + 22) + " L " + (x + w + 1) + " " + (P.wy + 5) + " L " + (x + w - 12) + " " + (P.wy + 5) + " L " + (x + s - 14) + " " + (P.sy + 26) + " Z" }, fill);
  }
  function hoodie(g, P, d) {
    F(g, "path", { d: torsoD(P, 3) }, d.top, 2.6);
    sideShade(g, P, dotsFill(d.topShade, d.top), 3);
    // hood around the neck
    F(g, "path", { d: "M " + (P.hx - 28) + " " + (P.sy - 10) + " C " + (P.hx - 30) + " " + (P.sy + 14) + ", " + (P.hx + 30) + " " + (P.sy + 14) + ", " + (P.hx + 28) + " " + (P.sy - 10) + " C " + (P.hx + 16) + " " + (P.sy + 2) + ", " + (P.hx - 16) + " " + (P.sy + 2) + ", " + (P.hx - 28) + " " + (P.sy - 10) + " Z" }, d.topShade, 2.2);
    Ln(g, "M " + (P.hx - 7) + " " + (P.sy + 6) + " l -2 30 M " + (P.hx + 7) + " " + (P.sy + 6) + " l 2 30", 1.8, "#fff");
    F(g, "path", { d: "M " + (P.hx - 26) + " " + (P.wy - 44) + " L " + (P.hx + 26) + " " + (P.wy - 44) + " L " + (P.hx + 32) + " " + (P.wy - 8) + " L " + (P.hx - 32) + " " + (P.wy - 8) + " Z" }, d.top, 1.8);
    F(g, "rect", { x: P.hx - P.ww - 5, y: P.wy - 8, width: (P.ww + 5) * 2, height: 14, rx: 4 }, d.topShade, 2.2);
  }
  function labcoat(g, P, d) {
    // inner shirt
    F(g, "path", { d: torsoD(P, 0) }, d.top, 2.4);
    // coat panels (long)
    var x = P.hx;
    F(g, "path", { d: "M " + (x - P.shw + 4) + " " + (P.sy - 8) + " Q " + (x - P.shw - 8) + " " + (P.sy) + " " + (x - P.shw - 4) + " " + (P.sy + 26) + " L " + (x - P.ww - 16) + " " + (P.wy + 110) + " L " + (x - 6) + " " + (P.wy + 112) + " L " + (x - 8) + " " + (P.sy + 50) + " L " + (x - 18) + " " + (P.sy - 10) + " Z" }, d.sleeve, 2.6);
    F(g, "path", { d: "M " + (x + P.shw - 4) + " " + (P.sy - 8) + " Q " + (x + P.shw + 8) + " " + (P.sy) + " " + (x + P.shw + 4) + " " + (P.sy + 26) + " L " + (x + P.ww + 16) + " " + (P.wy + 110) + " L " + (x + 6) + " " + (P.wy + 112) + " L " + (x + 8) + " " + (P.sy + 50) + " L " + (x + 18) + " " + (P.sy - 10) + " Z" }, d.sleeve, 2.6);
    Fn(g, "path", { d: "M " + (x + P.shw - 2) + " " + (P.sy) + " L " + (x + P.ww + 14) + " " + (P.wy + 108) + " L " + (x + P.ww + 2) + " " + (P.wy + 108) + " L " + (x + P.shw - 12) + " " + (P.sy + 20) + " Z" }, dotsFill("#AFC0C6", d.sleeve));
    // lapels
    F(g, "path", { d: "M " + (x - 18) + " " + (P.sy - 10) + " L " + (x - 8) + " " + (P.sy + 50) + " L " + (x - 20) + " " + (P.sy + 18) + " L " + (x - 28) + " " + (P.sy + 12) + " Z" }, "#E6EBEC", 1.8);
    F(g, "path", { d: "M " + (x + 18) + " " + (P.sy - 10) + " L " + (x + 8) + " " + (P.sy + 50) + " L " + (x + 20) + " " + (P.sy + 18) + " L " + (x + 28) + " " + (P.sy + 12) + " Z" }, "#E6EBEC", 1.8);
    // pocket + pens
    F(g, "rect", { x: x - P.shw + 10, y: P.sy + 40, width: 20, height: 18, rx: 2 }, d.sleeve, 1.6);
    Fn(g, "rect", { x: x - P.shw + 14, y: P.sy + 32, width: 3.5, height: 12 }, C.red);
    Fn(g, "rect", { x: x - P.shw + 20, y: P.sy + 34, width: 3.5, height: 10 }, C.blue);
    // ID badge
    F(g, "rect", { x: x + P.shw - 30, y: P.sy + 44, width: 16, height: 20, rx: 2 }, "#fff", 1.4);
    Fn(g, "rect", { x: x + P.shw - 28, y: P.sy + 46, width: 12, height: 5 }, C.cyan);
  }
  function suit(g, P, d) {
    F(g, "path", { d: torsoD(P, 1) }, d.top, 2.6);
    sideShade(g, P, dotsFill(d.topShade, d.top, 0.45), 1);
    var x = P.hx;
    F(g, "path", { d: "M " + (x - 16) + " " + (P.sy - 10) + " L " + x + " " + (P.sy + 60) + " L " + (x + 16) + " " + (P.sy - 10) + " Z" }, "#F2F0F4", 1.8);
    F(g, "path", { d: "M " + (x - 8) + " " + (P.sy - 4) + " L " + (x + 8) + " " + (P.sy - 4) + " L " + (x + 4) + " " + (P.sy + 14) + " L " + x + " " + (P.sy + 34) + " L " + (x - 4) + " " + (P.sy + 14) + " Z" }, C.red, 1.6);
    F(g, "path", { d: "M " + (x - 16) + " " + (P.sy - 10) + " L " + (x - 2) + " " + (P.sy + 70) + " L " + (x - 26) + " " + (P.sy + 26) + " Z" }, "#3A2F4C", 1.8);
    F(g, "path", { d: "M " + (x + 16) + " " + (P.sy - 10) + " L " + (x + 2) + " " + (P.sy + 70) + " L " + (x + 26) + " " + (P.sy + 26) + " Z" }, "#3A2F4C", 1.8);
    F(g, "circle", { cx: x, cy: P.sy + 84, r: 3 }, "#D4A017", 1.2);
    F(g, "circle", { cx: x, cy: P.sy + 100, r: 3 }, "#D4A017", 1.2);
  }
  function tee(g, P, d) {
    F(g, "path", { d: torsoD(P, 2) }, d.top, 2.4);
    sideShade(g, P, dotsFill(d.topShade, d.top), 2);
    Ln(g, "M " + (P.hx - 12) + " " + (P.sy - 12) + " Q " + P.hx + " " + (P.sy) + " " + (P.hx + 12) + " " + (P.sy - 12), 2);
    var cx = P.hx, cy = P.sy + 34, R = 13, sp = "";
    for (var i = 0; i < 10; i++) { var a = (i / 10) * Math.PI * 2 - Math.PI / 2, rr = i % 2 ? R * 0.45 : R; sp += (i ? " L " : "M ") + f1(cx + Math.cos(a) * rr) + " " + f1(cy + Math.sin(a) * rr); }
    F(g, "path", { d: sp + " Z" }, C.red, 1.6);
  }
  function heroSuit(g, P, d) {
    F(g, "path", { d: torsoD(P, 0) }, d.top, 2.6);
    sideShade(g, P, dotsFill(d.topShade, d.top), 0);
    var x = P.hx;
    // pecs / abs lines
    Ln(g, "M " + (x - 30) + " " + (P.sy + 46) + " Q " + (x - 14) + " " + (P.sy + 56) + " " + x + " " + (P.sy + 44) + " Q " + (x + 14) + " " + (P.sy + 56) + " " + (x + 30) + " " + (P.sy + 46), 1.6);
    Ln(g, "M " + x + " " + (P.sy + 60) + " V " + (P.wy - 12) + " M " + (x - 12) + " " + (P.sy + 80) + " h 24 M " + (x - 11) + " " + (P.sy + 98) + " h 22", 1.3);
    // emblem
    F(g, "circle", { cx: x, cy: P.sy + 26, r: 17 }, C.yellow, 2.2);
    F(g, "path", { d: "M " + (x + 3) + " " + (P.sy + 12) + " L " + (x - 8) + " " + (P.sy + 29) + " L " + (x - 1) + " " + (P.sy + 29) + " L " + (x - 4) + " " + (P.sy + 41) + " L " + (x + 9) + " " + (P.sy + 22) + " L " + (x + 2) + " " + (P.sy + 22) + " Z" }, "#D62828", 1.4);
    F(g, "rect", { x: x - P.ww - 4, y: P.wy - 10, width: (P.ww + 4) * 2, height: 14, rx: 3 }, C.yellow, 2.2);
    F(g, "rect", { x: x - 8, y: P.wy - 12, width: 16, height: 18, rx: 3 }, "#F6A21E", 2);
  }
  function robotBody(g, P, d) {
    var x = P.hx;
    F(g, "rect", { x: x - 9, y: P.sy - 24, width: 18, height: 26 }, "#5E6B78", 2.2);
    Ln(g, "M " + (x - 9) + " " + (P.sy - 16) + " h 18 M " + (x - 9) + " " + (P.sy - 8) + " h 18", 1.4);
    F(g, "path", { d: "M " + (x - P.shw) + " " + (P.sy - 6) + " Q " + x + " " + (P.sy - 18) + " " + (x + P.shw) + " " + (P.sy - 6) + " L " + (x + P.shw - 6) + " " + (P.wy - 20) + " Q " + x + " " + (P.wy - 6) + " " + (x - P.shw + 6) + " " + (P.wy - 20) + " Z" }, d.top, 2.8);
    Fn(g, "path", { d: "M " + (x + P.shw - 16) + " " + (P.sy - 8) + " L " + (x + P.shw) + " " + (P.sy - 6) + " L " + (x + P.shw - 6) + " " + (P.wy - 20) + " L " + (x + P.shw - 20) + " " + (P.wy - 16) + " Z" }, dotsFill(d.topShade, d.top));
    F(g, "rect", { x: x - 26, y: P.sy + 14, width: 52, height: 40, rx: 5 }, "#F2C230", 2.2);
    F(g, "circle", { cx: x - 13, cy: P.sy + 34, r: 6, class: "cb-led" }, C.red, 1.6);
    F(g, "circle", { cx: x, cy: P.sy + 34, r: 6, class: "cb-led" }, "#5CF2B6", 1.6);
    F(g, "circle", { cx: x + 13, cy: P.sy + 34, r: 6, class: "cb-led" }, C.cyan, 1.6);
    Ln(g, "M " + (x - 30) + " " + (P.sy + 72) + " h 60 M " + (x - 28) + " " + (P.sy + 86) + " h 56", 1.6);
    F(g, "rect", { x: x - P.ww, y: P.wy - 22, width: P.ww * 2, height: 34, rx: 6 }, "#9EADBB", 2.4);
    for (var i = 0; i < 4; i++) F(g, "circle", { cx: x - P.shw + 6 + i * ((P.shw * 2 - 12) / 3), cy: P.sy - 2, r: 2.2 }, "#5E6B78", 1);
  }
  function dotsFill(shade, base, r) {
    return S.pattern("dots", shade, DOTU, { bg: base, r: r || 0.42 });
  }

  // ── robot face ──
  var ROBO_EYES = {
    neutral: "M -6 -7 h 12 v 13 h -12 Z", happy: "M -7 4 Q 0 -10 7 4 L 4 4 Q 0 -4 -4 4 Z", grin: "M -7 4 Q 0 -10 7 4 L 4 4 Q 0 -4 -4 4 Z",
    shock: "M -8 0 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0 Z M -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0 Z", scared: "M -8 0 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0 Z M -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0 Z",
    angry: "M -7 -6 L 7 0 L 7 7 L -7 7 Z", determined: "M -7 -4 L 7 -1 L 7 6 L -7 6 Z", sad: "M -7 -2 L 7 -6 L 7 6 L -7 6 Z",
    smirk: "M -7 -1 h 14 v 6 h -14 Z", think: "M -6 -7 h 12 v 13 h -12 Z",
  };

  // ── build ──
  var charCount = 0;
  /**
   * Place a cast member in a panel. name: nova | sam | vex | pip | bolt | ace
   * opts: { panel, x (0..1 centre), y (0..1 bottom), shot: "full"|"mid"|"close"|"xclose", pose, expression, facing: "right"|"left",
   *         silhouette, scale, at (entrance time), enter: "pop"|"slide"|"drop"|"fade"|"none" }
   * Returns { el, pose(name, at), expr(name, at), talk(from, to), anchor("mouth"|"head"|"top"), name }.
   */
  S.character = function (name, opts) {
    opts = opts || {};
    var key = str(name).toLowerCase();
    var d = CAST[key] || CAST.sam;
    var P = RIG[d.rig] || RIG.adult;
    var p = getPanel(opts.panel);
    var shot = opts.shot || "full";
    var sil = !!opts.silhouette || shot === "silhouette";
    if (shot === "silhouette") shot = "full";
    var facing = opts.facing === "left" ? -1 : 1;
    var id = nid("ch");
    charCount++;
    // viewBox per shot
    var vb;
    if (shot === "mid") { var t0 = P.hy - 58 * P.hs, b0 = P.wy + 26; var hh = b0 - t0; vb = [P.hx - hh * 0.46, t0, hh * 0.92, hh]; }
    else if (shot === "close") { var t1 = P.hy - 58 * P.hs, b1 = P.hy + 80 * P.hs; var h1 = b1 - t1; vb = [P.hx - h1 * 0.52, t1, h1 * 1.04, h1]; }
    else if (shot === "xclose") { var t2 = P.hy - 36 * P.hs, b2 = P.hy + 40 * P.hs; var h2 = b2 - t2; vb = [P.hx - h2 * 0.68, t2, h2 * 1.36, h2]; }
    else vb = [0, 0, 240, 480];
    var pw = p.w, ph = p.h;
    var kH = { full: 0.9, mid: 1.0, close: 0.98, xclose: 1.15 }[shot] * (opts.scale || 1);
    var bh = ph * kH, bw = (bh * vb[2]) / vb[3];
    var maxW = pw * (opts.maxW || (shot === "full" ? 0.6 : 0.95));
    if (bw > maxW && shot !== "xclose") { var k = maxW / bw; bw *= k; bh *= k; }
    var cx = pw * (opts.x != null ? opts.x : 0.5);
    var bottom = ph * (opts.y != null ? opts.y : shot === "full" ? 0.97 : shot === "xclose" ? 0.5 + kH / 2 : 1.01);
    var left = cx - bw / 2, top = bottom - bh;
    var s = sv("svg", { class: "cb-char", viewBox: vb.map(f1).join(" "), width: f1(bw), height: f1(bh), style: { left: f1(left) + "px", top: f1(top) + "px" } }, null);
    p.fg.appendChild(s);
    var scale = bw / vb[2];
    LW = clamp(2.0 / scale, 0.42, 1);
    DOTU = clamp(u(7.5) / scale, 2, 6.5);
    var root = sv("g", { transform: facing < 0 ? "translate(" + f1(P.hx * 2) + ",0) scale(-1,1)" : null }, s);
    var mainId = id + "m";
    if (cur().print === "misprint") sv("use", { href: "#" + mainId, style: { "--of": "#22B8E8", "--os": "#22B8E8", "--osw": "8", opacity: "0.55", mixBlendMode: "multiply" }, transform: "translate(3,2)" }, root);
    var outline = sv("use", { href: "#" + mainId, class: "cb-ol" }, root);
    var oswV = sil ? 1 : 2.6 * LW + (2 * u(shot === "close" || shot === "xclose" ? 6.5 : 4.6)) / Math.max(0.2, scale);
    outline.setAttribute("style", "--of:" + INK + ";--os:" + INK + ";--osw:" + f1(oswV * 100) / 100);
    var main = sv("g", { id: mainId }, root);
    var body = sv("g", null, main);
    if (sil) main.setAttribute("style", "--of:" + INK + ";--os:" + INK);
    var parts = { arms: [], legs: [] };
    // back layer
    if (d.back) d.back.call(d, body, P);
    // legs
    [-1, 1].forEach(function (side) {
      var hipX = P.hx + side * P.legX, hipY = P.wy + 8;
      var lg = sv("g", null, body);
      var ank = P.fy - 18;
      var len = ank - hipY;
      if (d.shorts) {
        F(lg, "path", { d: capsule(hipX, hipY, len, P.legW * 0.82, P.legW * 0.7) }, d.skin, 2.4);
        F(lg, "rect", { x: hipX - P.legW * 0.75, y: ank - 26, width: P.legW * 1.5, height: 20 }, "#fff", 2);
        F(lg, "path", { d: capsule(hipX, hipY - 6, len * 0.42, P.legW * 1.25, P.legW * 1.15) }, d.pants, 2.4);
      } else {
        F(lg, "path", { d: capsule(hipX, hipY, len, P.legW, P.legW * 0.82) }, d.pants, 2.6);
        Fn(lg, "path", { d: capsule(hipX + side * P.legW * 0.45, hipY + 6, len - 10, P.legW * 0.42, P.legW * 0.32) }, d.pantsShade);
      }
      if (d.boots) F(lg, "path", { d: capsule(hipX, ank - 70, 62, P.legW * 1.02, P.legW * 0.95) }, d.shoes, 2.4);
      if (d.robot) { F(lg, "circle", { cx: hipX, cy: hipY + len * 0.5, r: P.legW * 1.15 }, "#5E6B78", 2.2); }
      var toe = side * 1;
      F(lg, "path", { d: "M " + (hipX - toe * 12) + " " + (ank - 4) + " L " + (hipX - toe * 12) + " " + (ank + 13) + " L " + (hipX + toe * 26) + " " + (ank + 13) + " Q " + (hipX + toe * 30) + " " + (ank + 2) + " " + (hipX + toe * 10) + " " + (ank - 6) + " Z" }, d.shoes, 2.4);
      F(lg, "path", { d: "M " + (hipX - toe * 13) + " " + (ank + 10) + " L " + (hipX + toe * 29) + " " + (ank + 10) + " L " + (hipX + toe * 28) + " " + (ank + 15) + " L " + (hipX - toe * 13) + " " + (ank + 15) + " Z" }, d.sole, 1.8);
      parts.legs.push({ g: lg, x: hipX, y: hipY, side: side });
    });
    // hips
    if (!d.robot) F(body, "path", { d: "M " + (P.hx - P.ww - 3) + " " + (P.wy - 6) + " H " + (P.hx + P.ww + 3) + " L " + (P.hx + P.ww + 4) + " " + (P.wy + 34) + " L " + (P.hx - P.ww - 4) + " " + (P.wy + 34) + " Z" }, d.shorts ? d.pants : d.pants, 2.4);
    // neck
    var neckTop = P.hy + 30 * P.hs;
    if (!d.robot) {
      F(body, "path", { d: "M " + (P.hx - P.neckW) + " " + neckTop + " L " + (P.hx - P.neckW) + " " + (P.sy + 2) + " L " + (P.hx + P.neckW) + " " + (P.sy + 2) + " L " + (P.hx + P.neckW) + " " + neckTop + " Z" }, d.skin, 2.2);
      Fn(body, "path", { d: "M " + (P.hx - P.neckW) + " " + neckTop + " L " + (P.hx + P.neckW) + " " + neckTop + " L " + (P.hx + P.neckW) + " " + (neckTop + 14 * P.hs) + " Q " + P.hx + " " + (neckTop + 6) + " " + (P.hx - P.neckW) + " " + (neckTop + 14 * P.hs) + " Z" }, dotsFill(d.shade, d.skin));
    }
    // torso
    d.torso.call(d, body, P);
    // arms
    [-1, 1].forEach(function (side) {
      var px = P.hx + side * (P.shw - 9), py = P.sy + 6;
      var up = sv("g", null, body);
      F(up, "path", { d: capsule(px, py, P.l1, P.slv, P.slv * 0.9) }, d.sleeve, 2.6);
      if (d.robot) F(up, "circle", { cx: px, cy: py, r: P.slv * 1.3 }, "#5E6B78", 2.2);
      var fo = sv("g", null, up);
      var foreCol = d.fore || d.skin;
      F(fo, "path", { d: capsule(px, py + P.l1, P.l2, P.frm * (d.fore ? 1.08 : 0.95), P.frm * 0.85) }, foreCol, 2.4);
      if (d.robot) F(fo, "circle", { cx: px, cy: py + P.l1, r: P.frm * 1.2 }, "#5E6B78", 2);
      if (d.cuff) F(fo, "rect", { x: px - P.frm * 0.95, y: py + P.l1 + P.l2 - 8, width: P.frm * 1.9, height: 8, rx: 2 }, d.cuff, 1.8);
      if (d.glove && !d.robot) F(fo, "path", { d: capsule(px, py + P.l1 + P.l2 - 26, 22, P.frm * 1.25, P.frm * 1.05) }, d.glove, 2.2);
      var hy = py + P.l1 + P.l2 + P.hand * 0.55;
      var hc = d.glove || d.skin;
      F(fo, "ellipse", { cx: px - side * P.hand * 0.55, cy: hy - P.hand * 0.25, rx: P.hand * 0.42, ry: P.hand * 0.62, transform: "rotate(" + side * 30 + " " + f1(px - side * P.hand * 0.55) + " " + f1(hy - P.hand * 0.25) + ")" }, hc, 2);
      F(fo, "circle", { cx: px, cy: hy, r: P.hand }, hc, 2.4);
      Ln(fo, "M " + f1(px - P.hand * 0.5) + " " + f1(hy + P.hand * 0.35) + " h " + f1(P.hand), 1.2);
      parts.arms.push({ up: up, fo: fo, px: px, py: py, side: side });
    });
    // head
    var head = sv("g", null, body);
    var hl = sv("g", null, head);
    var face = {};
    if (d.robot) {
      F(hl, "path", { d: "M 0 -42 V -60" }, "none", 3);
      face.bulb = F(hl, "circle", { cx: 0, cy: -63, r: 6 }, C.red, 2);
      F(hl, "circle", { cx: -37, cy: 0, r: 8 }, "#5E6B78", 2.2);
      F(hl, "circle", { cx: 37, cy: 0, r: 8 }, "#5E6B78", 2.2);
      F(hl, "rect", { x: -34, y: -42, width: 68, height: 78, rx: 12 }, d.skin, 2.8);
      Fn(hl, "path", { d: "M 22 -40 L 30 -40 Q 34 -40 34 -34 L 34 30 Q 34 36 28 36 L 22 36 Z" }, dotsFill(d.shade, d.skin));
      F(hl, "rect", { x: -27, y: -32, width: 54, height: 54, rx: 8 }, "#10263A", 2.2);
      Fn(hl, "path", { d: "M -22 -28 L -8 -28 L -22 -14 Z" }, "rgba(255,255,255,0.18)");
      face.eyes = [-1, 1].map(function (sd) {
        var eg = sv("g", { transform: "translate(" + sd * 11 + ",-8)" }, hl);
        var ep = sv("path", { d: ROBO_EYES.neutral, fill: "#5CF2FF" }, eg);
        return { g: eg, path: ep, x: sd * 11, y: -8, side: sd };
      });
      face.bars = [];
      for (var bi = 0; bi < 5; bi++) face.bars.push(sv("rect", { x: -13 + bi * 5.6, y: 10, width: 3.6, height: 2, fill: "#5CF2FF", rx: 1 }, hl));
      face.rline = sv("path", { d: "M -10 12 Q 0 16 10 12", fill: "none", stroke: "#5CF2FF", "stroke-width": 2.6, "stroke-linecap": "round" }, hl);
    } else {
      if (d.hairBack) d.hairBack.call(d, hl);
      F(hl, "ellipse", { cx: -31, cy: 4, rx: 6.5, ry: 9 }, d.skin, 2.2);
      F(hl, "ellipse", { cx: 31, cy: 4, rx: 6.5, ry: 9 }, d.skin, 2.2);
      Ln(hl, "M -32 0 q -3 4 0 8 M 32 0 q 3 4 0 8", 1.2);
      F(hl, "path", { d: HEADS[d.head] || HEADS.oval }, d.skin, 2.6);
      Fn(hl, "path", { d: "M 14 -36 C 32 -26, 34 6, 26 22 C 20 34, 10 40, 2 40 C 14 30, 22 16, 22 -2 C 22 -16, 20 -28, 14 -36 Z" }, dotsFill(d.shade, d.skin));
      if (d.freckles) Fn(hl, "path", { d: "M -22 10 a1.2 1.2 0 1 0 0.1 0 M -18 13 a1.2 1.2 0 1 0 0.1 0 M -25 14 a1.2 1.2 0 1 0 0.1 0 M 22 10 a1.2 1.2 0 1 0 0.1 0 M 18 13 a1.2 1.2 0 1 0 0.1 0 M 25 14 a1.2 1.2 0 1 0 0.1 0" }, "#A0522D").setAttribute("style", "fill:none;stroke:#A0522D;stroke-width:2.2;stroke-linecap:round");
      face.blush = sv("g", { style: { display: "none" } }, hl);
      Fn(face.blush, "ellipse", { cx: -20, cy: 12, rx: 6, ry: 3 }, "rgba(240,90,110,0.55)");
      Fn(face.blush, "ellipse", { cx: 20, cy: 12, rx: 6, ry: 3 }, "rgba(240,90,110,0.55)");
      var big = d.eyes === "big", narrow = d.eyes === "narrow";
      face.eyes = [-1, 1].map(function (sd) {
        var ex = sd * (big ? 14 : 13), ey = big ? 0 : -1;
        var eg = sv("g", { transform: "translate(" + ex + "," + ey + ")" }, hl);
        var inner = sv("g", null, eg);
        if (big) F(inner, "ellipse", { cx: 0, cy: 0, rx: 8.5, ry: 10 }, "#fff", 2);
        else F(inner, "path", { d: narrow ? "M -9 1 Q -1 -5.5 9 -1 Q 1 4.5 -9 1 Z" : "M -8.5 0.5 Q -1 -8 8.5 -0.5 Q 1 7 -8.5 0.5 Z" }, "#fff", 1.6);
        var pup = sv("g", null, inner);
        Fn(pup, "circle", { cx: 0, cy: 0, r: big ? 5.2 : narrow ? 2.6 : 3.4 }, narrow ? "#B3182E" : INK);
        Fn(pup, "circle", { cx: big ? -1.8 : -1, cy: big ? -2 : -1.2, r: big ? 1.8 : 1 }, "#fff");
        Ln(inner, big ? "M -9 -3 Q 0 -13 9 -3" : narrow ? "M -10 1.5 Q -1 -7 10 -1.5" : "M -9.5 1 Q -1 -9.5 9.5 -1", big ? 2.6 : 2.8);
        return { g: eg, inner: inner, pup: pup, x: ex, y: ey, side: sd };
      });
      face.brows = [-1, 1].map(function (sd) {
        var bg = sv("g", null, hl);
        var w = d.brow || 1;
        Fn(bg, "path", { d: "M -9 " + f1(1.6 * w) + " Q -1 " + f1(-3.8 * w) + " 9.5 -1 L 9 " + f1(1.4 * w) + " Q -1 " + f1(-0.6 * w) + " -9 " + f1(3.8 * w) + " Z" }, d.robot ? INK : d.browC || (d.hair === "#E0662B" ? "#A8441A" : INK));
        return { g: bg, side: sd };
      });
      Ln(hl, "M 1 2 Q 5 9 0 11", 1.8);
      if (d.lips) {} // reserved
      face.mOpen = sv("path", { d: "M0 0", fill: "#5B1414", stroke: INK, "stroke-width": f1(2.2 * LW * 100) / 100, "stroke-linejoin": "round" }, hl);
      face.mTongue = sv("path", { d: "M0 0", fill: "#E0556A" }, hl);
      face.mTeeth = sv("path", { d: "M0 0", fill: "#fff" }, hl);
      face.mLine = sv("path", { d: "M0 0", fill: "none", stroke: INK, "stroke-width": f1(2.6 * LW * 100) / 100, "stroke-linecap": "round" }, hl);
      if (sil) [face.mOpen, face.mTongue, face.mTeeth, face.mLine].forEach(function (q) { q.style.display = "none"; });
      if (d.face) d.face.call(d, hl);
      if (d.hairFront) d.hairFront.call(d, hl);
      face.sweat = sv("g", { style: { display: "none" } }, hl);
      F(face.sweat, "path", { d: "M 34 -30 C 30 -22, 30 -16, 35 -15 C 40 -16, 40 -22, 34 -30 Z" }, "#BFE8FF", 1.6);
      F(face.sweat, "path", { d: "M -36 -18 C -39 -12, -39 -8, -35 -7 C -31 -8, -32 -12, -36 -18 Z" }, "#BFE8FF", 1.4);
      face.vein = sv("g", { style: { display: "none" } }, hl);
      Ln(face.vein, "M 18 -40 q 4 4 8 0 M 18 -32 q 4 -4 8 0 M 16 -38 q 4 2 0 6 M 28 -38 q -4 2 0 6", 2.2, "#D62828");
    }
    var inst = {
      el: s, name: key, def: d, panel: p, P: P, shot: shot, facing: facing, vb: vb, box: { left: left, top: top, w: bw, h: bh },
      poseKeys: [{ at: 0, name: opts.pose && POSES[opts.pose] ? opts.pose : d.defaultPose || "stand" }],
      exprKeys: [{ at: 0, name: opts.expression && EXPR[opts.expression] ? opts.expression : "neutral" }],
      talks: [], seed: (hs(key) % 1000) + charCount * 7,
    };
    /** Switch pose at time `at` (blends over ~0.3 s). */
    inst.pose = function (name, at) { if (POSES[name]) inst.poseKeys.push({ at: Math.max(0, at || 0), name: name }); inst.poseKeys.sort(function (a, b) { return a.at - b.at; }); return inst; };
    /** Switch facial expression at time `at` (snaps, with a little head pop). */
    inst.expr = function (name, at) { if (EXPR[name]) inst.exprKeys.push({ at: Math.max(0, at || 0), name: name }); inst.exprKeys.sort(function (a, b) { return a.at - b.at; }); return inst; };
    inst.expression = inst.expr;
    /** Mouth moves in sync with V.words between from and to (seconds). */
    inst.talk = function (from, to) { inst.talks.push([Math.max(0, from || 0), to != null ? to : V.duration]); return inst; };
    /** Page-space point: "mouth" | "head" (top of head) | "eyes" | "chest" | "feet". */
    inst.anchor = function (which) {
      var vx = P.hx, vy;
      if (which === "head" || which === "top") vy = P.hy - 44 * P.hs;
      else if (which === "eyes") vy = P.hy;
      else if (which === "chest") vy = P.sy + 40;
      else if (which === "feet") vy = P.fy;
      else vy = P.hy + 21 * P.hs;
      var sx = (vx - vb[0]) * scale, sy = (vy - vb[1]) * scale;
      if (facing < 0) sx = bw - sx;
      return { x: p.bbox.x + left + sx, y: p.bbox.y + top + sy };
    };
    inst.enter = function (at, style) {
      var tl = cur().tl;
      at = cT(at);
      style = style || "pop";
      if (style === "slide") tl.fromTo(s, { x: -facing * bw * 0.6, opacity: 0 }, { x: 0, opacity: 1 }, { at: at, dur: 0.55, ease: "outCubic" });
      else if (style === "drop") tl.fromTo(s, { y: -bh * 0.5, opacity: 0 }, { y: 0, opacity: 1 }, { at: at, dur: 0.5, ease: "outBounce" });
      else if (style === "fade") tl.fromTo(s, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.5 });
      else if (style !== "none") tl.fromTo(s, { scale: 0.7, y: bh * 0.15, opacity: 0 }, { scale: 1, y: 0, opacity: 1 }, { at: at, dur: 0.45, ease: "outBack" });
      return inst;
    };
    if (opts.at != null && opts.enter !== "none") inst.enter(opts.at, opts.enter);
    s.style.transformOrigin = "50% 100%";
    p.chars.push(inst);
    // ── per-frame animation ──
    var lastMouth = "", lastExpr = "";
    function poseAt(t) {
      var ks = inst.poseKeys, i = 0;
      for (var j = 0; j < ks.length; j++) if (ks[j].at <= t) i = j;
      var to = POSES[ks[i].name], from = i > 0 ? POSES[ks[i - 1].name] : to;
      var pr = i > 0 ? V.progress(t, ks[i].at, ks[i].at + 0.32, "outBack") : 1;
      var a = [];
      for (var q = 0; q < 6; q++) a.push(lerp(from[q], to[q], pr));
      a.wave = ks[i].name === "wave";
      return a;
    }
    function exprAt(t) {
      var ks = inst.exprKeys, i = 0;
      for (var j = 0; j < ks.length; j++) if (ks[j].at <= t) i = j;
      return { e: EXPR[ks[i].name], name: ks[i].name, since: ks[i].at, idx: i };
    }
    function talkAmt(t) {
      var on = false;
      for (var i = 0; i < inst.talks.length; i++) if (t >= inst.talks[i][0] && t < inst.talks[i][1]) { on = true; break; }
      if (!on) return 0;
      var W = V.words;
      if (W && W.length) {
        for (var k = 0; k < W.length; k++) {
          var w = W[k];
          if (t < w.start) return 0;
          if (t < w.end) {
            var ph = (t - w.start) / Math.max(0.05, w.end - w.start);
            var syl = Math.max(1, Math.round(str(w.word).length / 3.4));
            return Math.abs(Math.sin(Math.PI * ph * syl)) * (0.55 + 0.45 * hash01(k + inst.seed));
          }
        }
        return 0;
      }
      return Math.abs(Math.sin(t * 9.5)) * (hash01(Math.floor(t * 3) + inst.seed) > 0.2 ? 0.8 : 0.1);
    }
    V.onFrame(function (t) {
      var a = poseAt(t);
      var wave = a.wave ? Math.sin(t * 9) * 22 : 0;
      parts.arms.forEach(function (ar) {
        var out = ar.side < 0 ? a[0] : a[2], elb = ar.side < 0 ? a[1] : a[3];
        if (ar.side > 0) elb += wave;
        var sgn = ar.side < 0 ? 1 : -1;
        ar.up.setAttribute("transform", "rotate(" + f1(sgn * out) + " " + ar.px + " " + ar.py + ")");
        ar.fo.setAttribute("transform", "rotate(" + f1(sgn * elb) + " " + ar.px + " " + (ar.py + P.l1) + ")");
      });
      parts.legs.forEach(function (lg) {
        var out = lg.side < 0 ? a[4] : a[5];
        lg.g.setAttribute("transform", "rotate(" + f1((lg.side < 0 ? 1 : -1) * out) + " " + lg.x + " " + lg.y + ")");
      });
      var ex = exprAt(t);
      var e = ex.e;
      var o = talkAmt(t);
      var breath = Math.sin(t * 2.1 + inst.seed) * 1.1;
      body.setAttribute("transform", "translate(0," + f1(breath * 0.6) + ")");
      var tilt = (e.tilt || 0) + (o > 0 || talkAmt(t - 0.15) > 0 ? Math.sin(t * 4.3 + inst.seed) * 2.2 : Math.sin(t * 1.1 + inst.seed) * 0.8);
      var pop = 1 + 0.07 * (1 - V.progress(t, ex.since, ex.since + 0.25, "outCubic")) * (ex.idx > 0 ? 1 : 0);
      head.setAttribute("transform", "translate(" + P.hx + "," + f1(P.hy + breath * 0.3) + ") rotate(" + f1(tilt) + ") scale(" + f1(P.hs * pop * 1000) / 1000 + ")");
      // blink
      var per = 3.2 + hash01(inst.seed) * 1.7;
      var bt = (t + hash01(inst.seed + 3) * per) % per;
      var blink = bt < 0.14 ? Math.max(0.08, Math.abs(bt - 0.07) / 0.07) : 1;
      var look = e.look || [1.6, 0];
      if (d.robot) {
        if (ex.name !== lastExpr) face.eyes.forEach(function (ey) { ey.path.setAttribute("d", ROBO_EYES[ex.name] || ROBO_EYES.neutral); });
        face.eyes.forEach(function (ey) { ey.g.setAttribute("transform", "translate(" + (ey.x + look[0] * 0.6) + "," + ey.y + ") scale(1," + f1(blink * 100) / 100 + ")" + (ey.side > 0 && (ex.name === "angry" || ex.name === "determined" || ex.name === "sad") ? " scale(-1,1)" : "")); });
        var talking = o > 0.02;
        face.rline.style.display = talking ? "none" : "";
        face.bars.forEach(function (b, bi) {
          b.style.display = talking ? "" : "none";
          if (talking) { var hgt = 2 + o * 14 * (0.4 + 0.6 * hash01(bi + Math.floor(t * 14) * 5)); b.setAttribute("height", f1(hgt)); b.setAttribute("y", f1(14 - hgt / 2)); }
        });
        if (ex.name !== lastExpr) face.rline.setAttribute("d", "M -10 " + f1(13 - e.mc * 0.3) + " Q 0 " + f1(13 + e.mc * 0.9) + " 10 " + f1(13 - e.mc * 0.3));
        face.bulb.style.opacity = Math.sin(t * 5) > 0 ? "1" : "0.45";
        lastExpr = ex.name;
        return;
      }
      face.eyes.forEach(function (ey) {
        ey.inner.setAttribute("transform", "scale(" + (e.eye > 1 ? f1(e.eye * 100) / 100 : 1) + "," + f1(e.eye * blink * 100) / 100 + ")");
        ey.pup.setAttribute("transform", "translate(" + f1(look[0]) + "," + f1(look[1]) + ") scale(" + e.pup + ")");
      });
      face.brows.forEach(function (bw2) {
        var sd = bw2.side;
        var by = -13 + e.by * (1 + 0.12 * Math.sin(t * 3)) - (e.browUp && sd > 0 ? 4 : 0);
        bw2.g.setAttribute("transform", "translate(" + sd * 13 + "," + f1(by) + ") rotate(" + f1(sd < 0 ? e.ang : -e.ang) + ")" + (sd > 0 ? " scale(-1,1)" : ""));
      });
      if (ex.name !== lastExpr) {
        face.sweat.style.display = e.sweat ? "" : "none";
        face.vein.style.display = e.vein ? "" : "none";
        face.blush.style.display = e.blush ? "" : "none";
        lastExpr = ex.name;
      }
      var md = mouthShapes(e, o);
      var mk = md.line + "|" + md.open;
      if (mk !== lastMouth) {
        lastMouth = mk;
        face.mLine.setAttribute("d", md.line || "M0 0");
        face.mOpen.setAttribute("d", md.open || "M0 0");
        face.mTeeth.setAttribute("d", md.teeth || "M0 0");
        face.mTongue.setAttribute("d", md.tongue || "M0 0");
      }
    });
    return inst;
  };
  function mouthShapes(e, o) {
    var w = e.mw, c = e.mc, a = e.ma || 0, my = 21;
    var open = Math.max(e.mo, o * 11);
    if (o > 0.05 && e.mo === 0) w = Math.max(w, 7.5);
    var Ly = my - c * 0.6 + a, Ry = my - c * 0.6 - a;
    if (open < 1.2) return { line: "M " + f1(-w) + " " + f1(Ly) + " Q 0 " + f1(my + c * 0.6) + " " + f1(w) + " " + f1(Ry) };
    if (e.round) {
      var rx = Math.max(4.5, w * (0.7 + o * 0.2)), ry = open * 0.62, cy = my + open * 0.2;
      return { open: "M " + f1(-rx) + " " + f1(cy) + " A " + f1(rx) + " " + f1(ry) + " 0 1 0 " + f1(rx) + " " + f1(cy) + " A " + f1(rx) + " " + f1(ry) + " 0 1 0 " + f1(-rx) + " " + f1(cy) + " Z", tongue: "M " + f1(-rx * 0.6) + " " + f1(cy + ry * 0.6) + " Q 0 " + f1(cy + ry * 0.1) + " " + f1(rx * 0.6) + " " + f1(cy + ry * 0.6) + " Q 0 " + f1(cy + ry) + " " + f1(-rx * 0.6) + " " + f1(cy + ry * 0.6) + " Z" };
    }
    var topY = my + c * 0.3 - open * 0.3, botY = my + c * 0.3 + open * 1.35;
    var res = { open: "M " + f1(-w) + " " + f1(Ly) + " Q 0 " + f1(topY) + " " + f1(w) + " " + f1(Ry) + " Q 0 " + f1(botY) + " " + f1(-w) + " " + f1(Ly) + " Z" };
    res.tongue = "M " + f1(-w * 0.55) + " " + f1((Ly + botY) / 2 + open * 0.3) + " Q 0 " + f1(botY - open * 0.55) + " " + f1(w * 0.55) + " " + f1((Ry + botY) / 2 + open * 0.3) + " Q 0 " + f1(botY - 0.5) + " " + f1(-w * 0.55) + " " + f1((Ly + botY) / 2 + open * 0.3) + " Z";
    if (e.teeth) res.teeth = "M " + f1(-w * 0.86) + " " + f1(Ly + 0.4) + " Q 0 " + f1(topY + 0.6) + " " + f1(w * 0.86) + " " + f1(Ry + 0.4) + " L " + f1(w * 0.78) + " " + f1(Ry + 3.4) + " Q 0 " + f1(topY + 4.4) + " " + f1(-w * 0.78) + " " + f1(Ly + 3.4) + " Z";
    return res;
  }

  // ───────────────────────── lettering: balloons & captions ─────────────────────────
  function superD(rx, ry, n, N, jag, r) {
    var d = "";
    N = N || 96;
    for (var i = 0; i < N; i++) {
      var a = (i / N) * Math.PI * 2;
      var c = Math.cos(a), s = Math.sin(a);
      var x = rx * Math.sign(c) * Math.pow(Math.abs(c), 2 / n), y = ry * Math.sign(s) * Math.pow(Math.abs(s), 2 / n);
      if (jag) { var k = i % 2 ? 1 : 1 + jag * (0.75 + r() * 0.5); x *= k; y *= k; }
      d += (i ? " L" : "M") + f1(x) + " " + f1(y);
    }
    return d + " Z";
  }
  function superR(rx, ry, n, a) {
    var c = Math.abs(Math.cos(a)), s = Math.abs(Math.sin(a));
    return 1 / Math.pow(Math.pow(c / rx, n) + Math.pow(s / ry, n), 1 / n);
  }
  function wordSync(spans, at, opts) {
    opts = opts || {};
    if (!spans.length) return [];
    var tl = cur().tl;
    var keys = spans.map(function (s) { return s.textContent.replace(/[^\p{L}\p{N}']+/gu, ""); });
    var est = Math.max(at + 0.3, Math.min(V.duration - 0.4, at + spans.length * 0.32));
    var times = S.syncTimes(keys, { start: at, end: opts.end != null ? opts.end : est, lead: 0.06, minGap: 0.03 });
    times = times.map(function (t2) { return Math.max(at, t2); });
    spans.forEach(function (s, i) { tl.fromTo(s, { opacity: 0 }, { opacity: 1 }, { at: cT(times[i]), dur: 0.07 }); });
    return times;
  }
  /** End time (s) of a spoken phrase that starts around `at` (fallback: ~0.32 s per word). */
  function phraseEnd(text, at) {
    var ws = plain(text).split(/\s+/).filter(Boolean);
    if (!ws.length) return at + 0.5;
    var last = ws[ws.length - 1].replace(/[^\p{L}\p{N}']+/gu, "");
    var e = last ? V.findEnd(last, Math.max(0, at - 0.2)) : null;
    var guess = at + ws.length * 0.33;
    if (e == null || e > guess + 4) e = guess;
    return Math.min(V.duration, e + 0.1);
  }
  S.phraseEnd = phraseEnd;

  /**
   * Speech balloon. opts: { panel, speaker (character), kind: "speech"|"thought"|"shout"|"whisper"|"radio",
   *   x, y (0..1 of panel: balloon centre; auto above the speaker), tail: {x,y} page px | "none", at, size, maxWidth, sync (default true) }
   */
  S.balloon = function (text, opts) {
    opts = opts || {};
    var c = cur(), pg = curPage();
    var sp = opts.speaker || null;
    var p = getPanel(opts.panel != null ? opts.panel : sp ? sp.panel : 0);
    var kind = opts.kind || "speech";
    var fs = opts.size || u(V.isPortrait ? 34 : 31) * (kind === "shout" ? 1.18 : kind === "whisper" ? 0.92 : 1);
    var maxW = opts.maxWidth || clamp(p.w * (V.isPortrait ? 0.62 : 0.5), u(230), u(600));
    var wrap = el("div.cb-balloon.cb-k-" + kind, { parent: pg.over });
    var txt = el("div.cb-btext", { parent: wrap });
    txt.appendChild(S.rich(text));
    txt.style.fontSize = f1(fs) + "px";
    txt.style.maxWidth = f1(maxW) + "px";
    var maxH = opts.maxHeight || p.h * 0.42;
    V.fit(txt, { maxWidth: maxW, maxHeight: maxH, min: u(16) });
    var tw = txt.offsetWidth, th = txt.offsetHeight;
    var n = kind === "thought" ? 2.2 : 2.7;
    var rx = tw * 0.5 * 1.22 + u(20), ry = th * 0.5 * 1.24 + u(18);
    if (kind === "shout") { rx *= 1.06; ry *= 1.08; }
    if (kind === "thought") { rx *= 1.12; ry *= 1.15; }
    // position
    var cx, cy;
    var m = sp ? sp.anchor("mouth") : null;
    var b = p.bbox;
    if (opts.x != null) cx = b.x + b.w * opts.x;
    else if (m) cx = m.x + (sp.facing || 1) * Math.min(rx * 0.5, b.w * 0.12);
    else cx = b.x + b.w * 0.5;
    if (opts.y != null) cy = b.y + b.h * opts.y;
    else if (m) {
      var headTop = sp.anchor("head").y;
      cy = Math.max(headTop - ry - u(26), b.y + ry + u(14));
      if (opts.x == null && cy + ry > headTop + u(10)) cx = m.x + (sp.facing || 1) * (rx * 0.9 + u(70));
    }
    else cy = b.y + ry + u(20);
    cx = clamp(cx, Math.max(rx + u(12), b.x + rx * 0.8), Math.min(V.width - rx - u(12), b.x + b.w - rx * 0.8));
    cy = clamp(cy, ry + u(12), V.height - ry - u(12));
    wrap.style.left = f1(cx) + "px";
    wrap.style.top = f1(cy) + "px";
    txt.style.left = f1(-tw / 2) + "px";
    txt.style.top = f1(-th / 2) + "px";
    var s = sv("svg", { width: 2, height: 2, class: "cb-bsvg" });
    wrap.insertBefore(s, txt);
    var r = rng("bal" + text);
    var sw = u(kind === "shout" ? 5 : 4);
    var shape = kind === "shout" ? superD(rx * 0.9, ry * 0.9, 2.2, 30, 0.2, r) : kind === "thought" ? bumpy(0, 0, rx, ry, Math.max(9, Math.round((rx + ry) / u(34))), r, 0.1) : kind === "radio" ? superD(rx, ry, 5, 64) : superD(rx, ry, n);
    var tail = "";
    var tip = opts.tail && opts.tail !== "none" ? opts.tail : m;
    var tailBubbles = [];
    if (tip && opts.tail !== "none") {
      var dx = tip.x - cx, dy = tip.y - cy;
      var dist = Math.sqrt(dx * dx + dy * dy) || 1;
      var a = Math.atan2(dy, dx);
      var edge = superR(rx, ry, n, a);
      var reach = Math.max(edge + u(30), Math.min(dist - u(26), edge + Math.max(u(60), (dist - edge) * 0.78)));
      var tx = Math.cos(a) * reach, ty = Math.sin(a) * reach;
      if (kind === "thought") {
        for (var k = 0; k < 3; k++) {
          var q = edge + (reach - edge) * (0.25 + k * 0.33);
          var rr = u(14 - k * 4);
          tailBubbles.push([Math.cos(a) * q, Math.sin(a) * q, rr]);
        }
      } else {
        var da = kind === "shout" ? 0.16 : 0.2;
        var b1 = superR(rx, ry, n, a - da) * 0.86, b2 = superR(rx, ry, n, a + da) * 0.86;
        var p1 = [Math.cos(a - da) * b1, Math.sin(a - da) * b1], p2 = [Math.cos(a + da) * b2, Math.sin(a + da) * b2];
        var bend = (a > -Math.PI / 2 && a < Math.PI / 2 ? 1 : -1) * u(16);
        var mx = (p1[0] + tx) / 2 - Math.sin(a) * bend, my = (p1[1] + ty) / 2 + Math.cos(a) * bend;
        if (kind === "radio" || kind === "shout") {
          var z1 = [lerp(p1[0], tx, 0.45) + Math.cos(a + 1.57) * u(14), lerp(p1[1], ty, 0.45) + Math.sin(a + 1.57) * u(14)];
          var z2 = [lerp(p2[0], tx, 0.5) - Math.cos(a + 1.57) * u(6), lerp(p2[1], ty, 0.5) - Math.sin(a + 1.57) * u(6)];
          tail = "M" + f1(p1[0]) + " " + f1(p1[1]) + " L" + f1(z1[0]) + " " + f1(z1[1]) + " L" + f1(z2[0] - Math.cos(a) * u(8)) + " " + f1(z2[1] - Math.sin(a) * u(8)) + " L" + f1(tx) + " " + f1(ty) + " L" + f1(z2[0]) + " " + f1(z2[1]) + " L" + f1(p2[0]) + " " + f1(p2[1]) + " Z";
        } else {
          tail = "M" + f1(p1[0]) + " " + f1(p1[1]) + " Q" + f1(mx) + " " + f1(my) + " " + f1(tx) + " " + f1(ty) + " Q" + f1((p2[0] + tx) / 2 - Math.sin(a) * bend * 0.6) + " " + f1((p2[1] + ty) / 2 + Math.cos(a) * bend * 0.6) + " " + f1(p2[0]) + " " + f1(p2[1]) + " Z";
        }
      }
    }
    var dash = kind === "whisper" ? f1(u(12)) + " " + f1(u(9)) : null;
    if (kind === "whisper") {
      if (tail) sv("path", { d: tail, fill: "#fff", stroke: INK, "stroke-width": f1(sw * 0.8), "stroke-dasharray": dash }, s);
      sv("path", { d: shape, fill: "#fff", stroke: INK, "stroke-width": f1(sw * 0.8), "stroke-dasharray": dash }, s);
    } else {
      var olw = f1(sw * 2);
      var shapeFill = kind === "radio" ? "#EFFBFF" : kind === "shout" ? "#FFFDF2" : "#fff";
      sv("path", { d: shape, fill: INK, stroke: INK, "stroke-width": olw, "stroke-linejoin": "round", transform: "translate(" + f1(u(5)) + "," + f1(u(6)) + ")", opacity: 0.22 }, s);
      sv("path", { d: shape, fill: INK, stroke: INK, "stroke-width": olw, "stroke-linejoin": "round" }, s);
      if (tail) sv("path", { d: tail, fill: INK, stroke: INK, "stroke-width": olw, "stroke-linejoin": "round" }, s);
      sv("path", { d: shape, fill: shapeFill }, s);
      if (tail) sv("path", { d: tail, fill: shapeFill }, s);
      tailBubbles.forEach(function (tb) { sv("circle", { cx: f1(tb[0]), cy: f1(tb[1]), r: f1(tb[2]), fill: "#fff", stroke: INK, "stroke-width": f1(sw) }, s); });
    }
    var at = cT(opts.at != null ? opts.at : 0.3);
    var spans = S.splitWords(txt);
    c.tl.fromTo(wrap, { scale: 0.2, opacity: 0 }, { scale: 1, opacity: 1 }, { at: at, dur: 0.32, ease: "outBack" });
    var times = opts.sync === false ? [] : wordSync(spans, at + 0.05, { end: opts.end });
    if (opts.sync === false) spans.forEach(function (sp2) { sp2.style.opacity = 1; });
    var end = times.length ? times[times.length - 1] + 0.35 : at + 1;
    return { el: wrap, x: cx, y: cy, rx: rx, ry: ry, at: at, end: end };
  };

  /** Rectangular narration caption. opts: { panel, pos: "tl"|"tr"|"bl"|"br"|"top"|"bottom", tone: "yellow"|"white"|"dark"|"red",
   *  label (small heading e.g. "MEANWHILE..."), at, maxWidth (px), size, x,y (0..1 of panel: top-left corner), sync,
   *  screen (true = pinned to the screen, unaffected by the camera) } */
  S.caption = function (text, opts) {
    opts = opts || {};
    var c = cur(), pg = curPage();
    var p = getPanel(opts.panel);
    var tone = opts.tone || "yellow";
    var box = el("div.cb-caption.cb-tone-" + tone, { parent: opts.screen ? c.fx : pg.over });
    if (opts.label) el("div.cb-clabel", { parent: box, text: plain(opts.label) });
    var tx = el("div.cb-ctext", { parent: box });
    tx.appendChild(S.rich(text));
    var fs = opts.size || u(V.isPortrait ? 32 : 29);
    tx.style.fontSize = f1(fs) + "px";
    var maxW = opts.maxWidth || Math.min(p.w * (V.isPortrait ? 0.86 : 0.6), u(760));
    box.style.maxWidth = f1(maxW) + "px";
    V.fit(tx, { maxWidth: maxW - u(30), maxHeight: opts.maxHeight || p.h * 0.36, min: u(15) });
    var bw = box.offsetWidth, bh = box.offsetHeight;
    var pos = opts.pos || "tl";
    var P0 = p.poly;
    var ins = u(10);
    var x, y;
    if (opts.x != null || opts.y != null) { x = p.bbox.x + p.w * (opts.x || 0); y = p.bbox.y + p.h * (opts.y || 0); }
    else if (pos === "tr") { x = Math.min(P0[1][0], P0[2][0]) - bw - ins; y = Math.max(P0[0][1], P0[1][1]) + ins; }
    else if (pos === "bl") { x = Math.max(P0[0][0], P0[3][0]) + ins; y = Math.min(P0[2][1], P0[3][1]) - bh - ins; }
    else if (pos === "br") { x = Math.min(P0[1][0], P0[2][0]) - bw - ins; y = Math.min(P0[2][1], P0[3][1]) - bh - ins; }
    else if (pos === "top") { x = p.bbox.x + (p.w - bw) / 2; y = Math.max(P0[0][1], P0[1][1]) + ins; }
    else if (pos === "bottom") { x = p.bbox.x + (p.w - bw) / 2; y = Math.min(P0[2][1], P0[3][1]) - bh - ins; }
    else { x = Math.max(P0[0][0], P0[3][0]) + ins; y = Math.max(P0[0][1], P0[1][1]) + ins; }
    x = clamp(x, u(8), V.width - bw - u(8));
    y = clamp(y, u(8), V.height - bh - u(8));
    box.style.left = f1(x) + "px";
    box.style.top = f1(y) + "px";
    var tilt = opts.tilt != null ? opts.tilt : 0;
    box.style.transformOrigin = pos.indexOf("r") >= 0 ? "100% 0%" : "0% 0%";
    var at = cT(opts.at != null ? opts.at : 0.3);
    c.tl.fromTo(box, { scaleX: 0.05, opacity: 0, rotate: tilt - 4 }, { scaleX: 1, opacity: 1, rotate: tilt }, { at: at, dur: 0.3, ease: "outCubic" });
    var spans = S.splitWords(tx);
    var times = opts.sync === false ? [] : wordSync(spans, at + 0.08, { end: opts.end });
    return { el: box, x: x, y: y, w: bw, h: bh, at: at, end: times.length ? times[times.length - 1] + 0.3 : at + 1 };
  };

  /** A comic title / logo: one or two lines of 3D lettering centred at (x,y) page px, fitted to maxW x maxH.
   *  opts: { at, palette, arc, stagger, slam (letters drop in big), shake, burst } */
  S.logo = function (text, opts) {
    opts = opts || {};
    var c = cur(), pg = curPage();
    var words = plain(text).toUpperCase().split(/\s+/).filter(Boolean);
    if (!words.length) words = [""];
    var lines = [words.join(" ")];
    var maxW = opts.maxW || V.width * 0.8, maxH = opts.maxH || V.height * 0.3;
    if (words.length > 1 && (lines[0].length > 11 || opts.lines === 2)) {
      var best = 1, bestD = 1e9;
      for (var i = 1; i < words.length; i++) {
        var a = words.slice(0, i).join(" ").length, b = words.slice(i).join(" ").length;
        if (Math.abs(a - b) < bestD) { bestD = Math.abs(a - b); best = i; }
      }
      lines = [words.slice(0, best).join(" "), words.slice(best).join(" ")];
    }
    var holder = el("div.cb-logo", { parent: pg.over, style: { left: f1(opts.x != null ? opts.x : V.width / 2) + "px", top: f1(opts.y != null ? opts.y : V.height * 0.3) + "px" } });
    var size0 = u(200);
    var blocks = [];
    var lineH = maxH / lines.length;
    lines.forEach(function (ln, li) {
      var probe = lettering(holder, ln, { size: size0, palette: opts.palette || "fire", depth: size0 * 0.13, condense: 0.82, arc: 0, dots: true });
      var k = Math.min(maxW / Math.max(1, probe.width), (lineH * 0.98) / Math.max(1, probe.height));
      holder.removeChild(probe.el);
      var sz = size0 * k;
      var L = lettering(holder, ln, { size: sz, palette: opts.palette || "fire", depth: sz * 0.13, condense: 0.82, arc: opts.arc != null ? opts.arc * sz : sz * 0.12, dots: true, jitter: 1.5 });
      L.el.style.top = f1((li - (lines.length - 1) / 2) * lineH * 0.98) + "px";
      blocks.push(L);
    });
    var at = cT(opts.at != null ? opts.at : 0.4);
    var all = [];
    blocks.forEach(function (L) { all = all.concat(L.letters); });
    var stg = opts.stagger != null ? opts.stagger : Math.min(0.06, 0.9 / Math.max(1, all.length));
    all.forEach(function (lg, i) {
      if (opts.slam !== false) c.tl.fromTo(lg, { scale: 2.8, opacity: 0, rotate: (i % 2 ? 12 : -12) }, { scale: 1, opacity: 1, rotate: 0 }, { at: at + i * stg, dur: 0.3, ease: "outBack" });
      else c.tl.fromTo(lg, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }, { at: at + i * stg, dur: 0.35, ease: "outBack" });
    });
    var land = at + all.length * stg + 0.25;
    if (opts.shake !== false) { S.camera.shake(land - 0.1, u(10), 0.35); }
    return { el: holder, at: at, land: land, blocks: blocks };
  };

  // ───────────────────────── templates ─────────────────────────
  var T = (S.comicTemplates = {});
  function charOk(n) { return n && n !== "none" && CAST[str(n).toLowerCase()]; }
  function keyOf(o, fields) {
    for (var i = 0; i < fields.length; i++) { var v = o && o[fields[i]]; if (v) return fields[i] === "keyword" ? str(v) : S.autoKey(v); }
    return null;
  }
  function firstWords(t, n) { return plain(t).split(/\s+/).filter(Boolean).slice(0, n || 1).join(" ").replace(/[^\p{L}\p{N}' ]+/gu, ""); }
  function followCam(panels, times, opts) {
    opts = opts || {};
    panels.forEach(function (pn, i) {
      if (i === 0) S.camera.focus(pn, 0, 0.01, { zoom: opts.zoom });
      else S.camera.focus(pn, Math.max(0.05, times[i] - 0.5), 0.65, { zoom: opts.zoom });
    });
    var tLast = times[times.length - 1];
    var outAt = Math.max(tLast + (opts.hold || 2.2), V.duration - 1.6);
    if (outAt < V.duration - 0.5 && panels.length > 1) S.camera.page(outAt, 1.1);
  }
  function sideOf(i) { return i % 2 ? 0.3 : 0.7; }

  T["splash-title"] = function (p) {
    var pg = S.page(1, { margin: u(26) });
    var P0 = pg.panels[0];
    S.scene(P0, p.background || "action", { mood: p.mood, palette: p.palette || "red" });
    var L = V.isLandscape;
    var ch = null;
    if (charOk(p.character)) {
      ch = S.character(p.character, { panel: P0, shot: "full", x: L ? 0.74 : 0.5, y: 1.0, scale: L ? 0.98 : V.isPortrait ? 0.62 : 0.66, pose: p.pose || "hips", expression: p.expression || "grin", maxW: 0.9 });
      ch.enter(0.15, "pop");
    }
    var tTitle = p.keyword ? V.find(p.keyword) : null;
    if (tTitle == null) tTitle = Math.min(0.5, V.duration * 0.15);
    tTitle = Math.max(0.25, tTitle - 0.2);
    var lx = L ? (ch ? V.width * 0.37 : V.width * 0.5) : V.width * 0.5;
    var ly = L ? V.height * 0.38 : V.isPortrait ? V.height * 0.22 : V.height * 0.27;
    var lw = L ? (ch ? V.width * 0.6 : V.width * 0.82) : V.width * 0.86;
    var lh = L ? V.height * 0.42 : V.isPortrait ? V.height * 0.24 : V.height * 0.32;
    var bst = S.burst({ x: lx, y: ly, r: Math.min(lw, lh * 1.6) * 0.62, aspect: 1.5, spikes: 18, fill: "#fff", fill2: false, at: tTitle - 0.08 });
    bst.el.style.opacity = "0.95";
    var logo = S.logo(p.title || "The Story", { x: lx, y: ly, maxW: lw * 0.92, maxH: lh, at: tTitle, palette: p.palette === "blue" ? "ice" : p.palette === "purple" ? "pink" : p.palette === "green" ? "slime" : "fire" });
    S.camera.flash(logo.land - 0.12, 0.6);
    // issue box + price corner
    var issue = el("div.cb-issue", { parent: pg.over });
    el("div.cb-issue-no", { parent: issue, text: plain(p.issue || "No. 1") });
    el("div.cb-issue-price", { parent: issue, text: "25¢" });
    cur().tl.fromTo(issue, { scale: 0, rotate: -40 }, { scale: 1, rotate: -6 }, { at: 0.2, dur: 0.4, ease: "outBack" });
    if (p.subtitle) {
      S.caption(p.subtitle, { panel: P0, pos: L ? "bl" : "bottom", at: Math.max(logo.land + 0.1, V.find(firstWords(p.subtitle, 2), logo.at) != null ? V.find(firstWords(p.subtitle, 2), logo.at) - 0.15 : logo.land + 0.3), maxWidth: L ? V.width * 0.5 : V.width * 0.84, size: u(V.isPortrait ? 36 : 32), tilt: -1.5 });
    }
    if (p.sfx) S.sfx(p.sfx, { panel: P0, x: L ? (ch ? 0.5 : 0.75) : V.isPortrait ? 0.26 : 0.8, y: L ? 0.78 : V.isPortrait ? 0.42 : 0.62, size: Math.min(P0.h * 0.16, u(150)), at: Math.min(V.duration - 0.8, logo.land + 0.9), burst: C.yellow, palette: "pow", rotate: -10 });
    if (ch) S.camera.focus({ x: P0.bbox.x + P0.w * (L ? 0.55 : 0.2), y: P0.bbox.y + P0.h * (L ? 0.25 : 0.45), w: P0.w * 0.45, h: P0.h * 0.45 }, 0, 0.01, { zoom: 0.62 });
    else S.camera.to(V.width / 2, V.height / 2, 1.25, 0, 0.01);
    S.camera.page(Math.max(0.05, tTitle - 0.35), 0.55, { ease: "outCubic" });
  };

  T["panel-sequence"] = function (p) {
    var items = arr(p.panels).slice(0, 6).map(function (x) { return x || {}; });
    if (!items.length) items = [{ caption: "" }];
    var pg = S.page(items.length, { kind: p.layout === "feature" ? "feature" : p.layout === "strip" ? "strip" : "grid" });
    var panels = pg.panels;
    var times = S.syncTimes(items.map(function (it) { return keyOf(it, ["keyword", "caption", "line"]); }), { start: 0.15, minGap: 0.5 });
    times[0] = Math.min(times[0], 0.25);
    items.forEach(function (it, i) {
      var pn = panels[i];
      var at = times[i];
      S.scene(pn, it.background || ["city", "lab", "street", "space", "interior", "sky"][i % 6], { mood: it.mood || p.mood });
      S.revealPanel(pn, Math.max(0.06, at - 0.1), i === 0 ? "pop" : "wipe");
      var x = it.x != null ? it.x : sideOf(i);
      var ch = null;
      if (charOk(it.character)) {
        ch = S.character(it.character, { panel: pn, shot: it.shot || (pn.h > pn.w * 1.1 ? "full" : "mid"), x: x, pose: it.pose, expression: it.expression || "neutral", facing: x > 0.5 ? "left" : "right" });
        ch.enter(at, "pop");
      }
      if (it.effect === "focus") S.focusLines(pn, { at: at + 0.1 });
      else if (it.effect === "speed") S.speedLines(pn, { at: at + 0.1 });
      var capEnd = at;
      if (it.caption) { var cp = S.caption(it.caption, { panel: pn, pos: x > 0.5 ? "tl" : "tr", at: at + 0.15 }); capEnd = cp.end; }
      if (it.line && ch) {
        var tl0 = V.find(firstWords(it.line, 2), at - 0.2);
        var lt = tl0 != null ? tl0 - 0.15 : capEnd + 0.1;
        var bl = S.balloon(it.line, { speaker: ch, kind: it.kind || "speech", at: lt, y: it.caption ? (V.isPortrait ? 0.48 : 0.5) : null });
        ch.talk(lt + 0.05, phraseEnd(it.line, lt));
        void bl;
      }
      if (it.sfx) S.sfx(it.sfx, { panel: pn, x: V.isPortrait ? 0.4 : x > 0.5 ? 0.3 : 0.7, y: V.isPortrait ? 0.7 : 0.62, at: at + 0.35, burst: it.sfxBurst === false ? false : C.yellow, palette: it.sfxColor || "fire", size: Math.min(pn.h * 0.24, pn.w * 0.16, u(150)) });
    });
    if (p.camera === "page") S.camera.page(0, 0.01);
    else followCam(panels, times);
  };

  T["dialogue-panels"] = function (p) {
    var lines = arr(p.lines).slice(0, 6).map(function (x) { return x || {}; });
    if (!lines.length) lines = [{ speaker: "left", text: "" }];
    var Lc = charOk(p.left) ? p.left : "sam", Rc = charOk(p.right) ? p.right : "nova";
    var groups = [];
    if (lines.length <= 4) lines.forEach(function (l, i) { groups.push([i]); });
    else for (var i = 0; i < lines.length; i += 2) groups.push(i + 1 < lines.length ? [i, i + 1] : [i]);
    var pg = S.page(groups.length, { kind: "grid" });
    var keys = lines.map(function (l) { return firstWords(l.text, 2) || null; });
    var times = S.syncTimes(keys, { start: 0.2, minGap: 0.6, lead: 0.2 });
    var gTimes = [];
    groups.forEach(function (g, gi) {
      var pn = pg.panels[gi];
      var t0 = times[g[0]];
      gTimes.push(t0);
      var single = g.length === 1 ? lines[g[0]] : null;
      var who = single ? (single.speaker === "right" || single.speaker === Rc ? "R" : "L") : null;
      var close = single && gi > 0 && gi < groups.length - 1 && groups.length > 2;
      var shout = single && single.kind === "shout";
      S.scene(pn, close && shout ? "action" : close ? "halftone" : p.setting || "interior", { mood: p.mood, palette: who === "R" ? "blue" : "yellow", angle: who === "R" ? 150 : 30 });
      S.revealPanel(pn, Math.max(0.06, t0 - 0.15), gi === 0 ? "pop" : "wipe");
      var chars = {};
      if (close) {
        var name = who === "R" ? Rc : Lc;
        chars[who] = S.character(name, { panel: pn, shot: "close", x: who === "R" ? 0.66 : 0.34, facing: who === "R" ? "left" : "right", expression: single.expression || "neutral" });
        if (shout) S.focusLines(pn, { at: t0, cx: who === "R" ? 0.66 : 0.34 });
      } else {
        var sh = pn.h > pn.w * 1.05 ? "full" : "mid";
        chars.L = S.character(Lc, { panel: pn, shot: sh, x: 0.25, facing: "right", maxW: 0.48, expression: "neutral" });
        chars.R = S.character(Rc, { panel: pn, shot: sh, x: 0.75, facing: "left", maxW: 0.48, expression: "neutral" });
      }
      g.forEach(function (li, k) {
        var ln = lines[li];
        var w = ln.speaker === "right" || ln.speaker === Rc ? "R" : "L";
        var ch = chars[w] || chars.L || chars.R;
        var at = times[li];
        var nextT = li + 1 < lines.length ? times[li + 1] : V.duration;
        var end = Math.min(nextT, phraseEnd(ln.text, at));
        if (ln.expression) ch.expr(ln.expression, at - 0.1);
        ch.pose(ln.kind === "shout" ? "fist" : ln.pose || (k % 2 ? "explain" : "point"), at - 0.1);
        ch.pose("stand", end + 0.2);
        ch.talk(at, end);
        var other = w === "R" ? chars.L : chars.R;
        if (other && ln.reaction) other.expr(ln.reaction, at + 0.4);
        var y = g.length === 2 ? (k === 0 ? null : 0.42) : null;
        S.balloon(ln.text, { speaker: ch, kind: ln.kind || "speech", at: at, end: end, y: y, x: close ? (w === "R" ? 0.3 : 0.7) : null, maxWidth: close ? pn.w * (V.isPortrait ? 0.56 : 0.42) : null });
        if (ln.kind === "shout") S.camera.shake(at + 0.1, u(8), 0.35);
      });
    });
    followCam(pg.panels, gTimes, { hold: 2.5 });
  };

  T["big-reveal"] = function (p) {
    var L = !V.isPortrait;
    var pg = S.page(2, { kind: "strip", weights: [0.8, 1.35], inset: charOk(p.character) ? { panel: 1, corner: L ? "bl" : "br", size: L ? 0.3 : 0.38 } : null });
    var A = pg.panels[0], B = pg.panels[1], I = pg.panels[2];
    var tk = p.keyword ? V.find(p.keyword) : null;
    if (tk == null) tk = Math.max(1.2, V.duration * 0.45);
    tk = Math.max(0.8, tk - 0.12);
    S.scene(A, p.background || "lab", { mood: p.mood });
    var ch = null;
    if (charOk(p.character)) {
      ch = S.character(p.character, { panel: A, shot: "mid", x: 0.5, expression: "neutral", pose: "think", facing: L ? "right" : "right" });
      ch.expr("shock", tk + 0.05).pose("shock", tk + 0.05);
    }
    if (p.setup) S.caption(p.setup, { panel: A, pos: "tl", at: 0.3, maxWidth: A.w * 0.8 });
    S.scene(B, p.revealBackground || "focus", { palette: p.palette || "red", fill: "#FFF6D8" });
    S.revealPanel(B, tk, "flash");
    var bb = B.bbox;
    var bx = bb.x + bb.w * 0.5, by = bb.y + bb.h * (I ? 0.4 : 0.48);
    S.burst({ x: bx, y: by, r: Math.min(bb.w * 0.46, bb.h * 0.55), aspect: 1.45, spikes: 20, fill: C.yellow, fill2: "#fff", at: tk + 0.02 });
    var logo = S.logo(p.reveal || "The Answer", { x: bx, y: by, maxW: bb.w * 0.72, maxH: bb.h * 0.42, at: tk + 0.08, palette: p.palette === "blue" ? "zap" : "fire", stagger: 0.04 });
    S.camera.flash(tk, 0.9);
    if (p.sfx) S.sfx(p.sfx, { panel: B, x: 0.78, y: I ? 0.82 : 0.84, size: Math.min(bb.h * 0.15, u(120)), at: logo.land + 0.1, palette: "pow", rotate: 10 });
    if (I) {
      S.scene(I, "halftone", { palette: "pink" });
      S.revealPanel(I, tk + 0.7, "pop");
      var ci = S.character(p.character, { panel: I, shot: "close", x: 0.5, expression: "shock", facing: "right" });
      void ci;
    }
    S.camera.focus(A, 0, 0.01, { zoom: 0.9 });
    S.camera.focus(B, tk - 0.08, 0.32, { ease: "outExpo" });
    S.camera.shake(tk + 0.15, u(16), 0.5);
    if (tk + 3 < V.duration) S.camera.page(Math.max(tk + 2.6, V.duration - 1.4), 1);
  };

  T.versus = function (p) {
    var W = V.width, H = V.height, m = u(26), g = u(22);
    var polys;
    if (V.isPortrait) polys = [[[m, m], [W - m, m], [W - m, H * 0.42], [m, H * 0.54]], [[m, H * 0.54 + g], [W - m, H * 0.42 + g], [W - m, H - m], [m, H - m]]];
    else polys = [[[m, m], [W * 0.56, m], [W * 0.44, H - m], [m, H - m]], [[W * 0.56 + g, m], [W - m, m], [W - m, H - m], [W * 0.44 + g, H - m]]];
    var pg = S.page(2, { polys: polys });
    var sides = [p.left || {}, p.right || {}];
    var tR = V.find(firstWords(sides[1].name, 1) || "versus", 0.6);
    if (tR == null) tR = V.duration * 0.42;
    var tStart = [0.1, Math.max(1.2, tR - 0.25)];
    var tVs = p.keyword ? V.find(p.keyword) : null;
    if (tVs == null) tVs = Math.min(V.duration - 1.2, tStart[1] + Math.max(1.6, V.duration * 0.25));
    tVs = Math.max(tStart[1] + 0.8, tVs);
    sides.forEach(function (sd, i) {
      var pn = pg.panels[i];
      S.scene(pn, "action", { palette: sd.palette || (i ? "blue" : "red"), cx: i ? 0.65 : 0.35 });
      S.speedLines(pn, { opacity: 0.35, color: "#fff" });
      S.revealPanel(pn, tStart[i], i ? "wipe" : "pop");
      var ch = null;
      if (charOk(sd.character)) {
        ch = S.character(sd.character, { panel: pn, shot: "mid", x: V.isPortrait ? (i ? 0.72 : 0.28) : i ? 0.4 : 0.6, facing: V.isPortrait ? (i ? "left" : "right") : i ? "left" : "right", pose: sd.pose || (i ? "fight" : "fist"), expression: sd.expression || "determined", maxW: 0.55 });
        ch.enter(tStart[i] + 0.1, "slide");
      }
      var nb = pn.bbox;
      var nx = V.isPortrait ? nb.x + nb.w * (i ? 0.3 : 0.7) : nb.x + nb.w * (i ? 0.62 : 0.38);
      var ny = V.isPortrait ? nb.y + nb.h * (i ? 0.62 : 0.2) : nb.y + nb.h * 0.13;
      var nameLogo = S.logo(sd.name || (i ? "Them" : "Us"), { x: nx, y: ny, maxW: nb.w * (V.isPortrait ? 0.5 : 0.62), maxH: nb.h * 0.17, at: tStart[i] + 0.2, palette: i ? "ice" : "fire", shake: false, arc: 0.05 });
      var pts0 = arr(sd.points).slice(0, 3);
      var ptimes = S.syncTimes(pts0.map(function (x) { return S.autoKey(x); }), { start: tStart[i] + 0.6, end: i ? tVs - 0.2 : tStart[1] - 0.2, minGap: 0.35 });
      pts0.forEach(function (pt, k) {
        var cap = S.caption(pt, {
          panel: pn, tone: "white", at: ptimes[k], size: u(V.isPortrait ? 28 : 26), maxWidth: nb.w * (V.isPortrait ? 0.44 : V.isSquare ? 0.46 : 0.36),
          x: V.isPortrait ? (i ? 0.06 : 0.5) : i ? 0.62 : 0.04, y: V.isPortrait ? (i ? 0.1 + k * 0.17 : 0.36 + k * 0.17) : 0.3 + k * 0.14,
        });
        void cap;
      });
      void nameLogo; void ch;
    });
    var cx = V.isPortrait ? W / 2 : W * 0.5 + g / 2, cy = V.isPortrait ? H * 0.48 + g / 2 : H / 2;
    var vb = S.burst({ x: cx, y: cy, r: Math.min(W, H) * 0.13, aspect: 1.1, spikes: 14, fill: C.yellow, fill2: "#fff", at: tVs });
    var vs = el("div.cb-vs", { parent: pg.over, style: { left: f1(cx) + "px", top: f1(cy) + "px" } });
    var VL = lettering(vs, p.vs || "VS", { size: Math.min(W, H) * 0.14, palette: "red", depth: Math.min(W, H) * 0.02, condense: 0.85 });
    VL.letters.forEach(function (lg, k) { cur().tl.fromTo(lg, { scale: 3, opacity: 0 }, { scale: 1, opacity: 1 }, { at: tVs + 0.05 + k * 0.06, dur: 0.3, ease: "outBack" }); });
    S.camera.shake(tVs + 0.2, u(16), 0.5);
    S.camera.flash(tVs + 0.05, 0.7);
    if (p.sfx) S.sfx(p.sfx, { x: cx, y: cy + Math.min(W, H) * 0.2, size: Math.min(W, H) * 0.12, at: tVs + 0.5, palette: "pow", rotate: -6 });
    void vb;
    S.camera.focus(pg.panels[0], 0, 0.01, { zoom: 0.8 });
    S.camera.focus(pg.panels[1], tStart[1] - 0.2, 0.7, { zoom: 0.8 });
    S.camera.page(tVs - 0.25, 0.4, { ease: "outCubic" });
  };

  T["caption-narration"] = function (p) {
    var pg = S.page(1, { margin: u(26) });
    var P0 = pg.panels[0];
    var L = V.isLandscape;
    S.scene(P0, p.background || "city", { mood: p.mood || "night" });
    var ch = null;
    if (charOk(p.character)) {
      var shot = p.shot || "silhouette";
      ch = S.character(p.character, { panel: P0, shot: shot === "silhouette" ? "full" : shot, silhouette: shot === "silhouette", x: L ? 0.76 : 0.5, y: shot === "full" || shot === "silhouette" ? 0.98 : null, scale: shot === "full" || shot === "silhouette" ? (L ? 0.85 : 0.5) : V.isPortrait ? 0.55 : 0.75, pose: p.pose || "stand", expression: p.expression || "neutral", facing: L ? "left" : "right" });
    }
    if (p.weather === "rain" || p.weather === "snow") weather(P0, p.weather);
    var caps = arr(p.captions).slice(0, 5).map(function (x) { return typeof x === "string" ? { text: x } : x || {}; });
    var times = S.syncTimes(caps.map(function (c0) { return c0.keyword || firstWords(c0.text, 2) || null; }), { start: 0.3, minGap: 0.5, lead: 0.2 });
    var b = P0.bbox;
    var colW = L ? b.w * 0.5 : b.w * 0.84;
    var availH = (L ? b.h * 0.86 : b.h * (ch ? 0.48 : 0.8)) / Math.max(1, caps.length);
    var y = b.y + u(30);
    caps.forEach(function (c0, i) {
      var xoff = L ? (i % 2 ? b.w * 0.06 : 0) : (i % 2 ? b.w * 0.06 : 0);
      var cp = S.caption(c0.text, { panel: P0, x: (u(34) + xoff) / b.w, y: (y - b.y) / b.h, maxWidth: colW, maxHeight: availH - u(20), at: times[i], label: i === 0 ? p.label : null, tone: c0.tone || "yellow", size: u(V.isPortrait ? 34 : 31), tilt: i % 2 ? 0.8 : -0.8, screen: true });
      y += cp.h + u(22);
    });
    var tgt = ch ? ch.anchor("eyes") : { x: V.width / 2, y: V.height / 2 };
    S.camera.page(0, 0.01);
    S.camera.to(lerp(V.width / 2, tgt.x, 0.5), lerp(V.height / 2, tgt.y, 0.5), 1.16, 0.2, Math.max(1, V.duration - 0.4), "inOutSine");
  };
  function weather(pn, kind) {
    var g = sv("svg", { class: "cb-weather", width: pn.w, height: pn.h, viewBox: "0 0 " + f1(pn.w) + " " + f1(pn.h) }, null);
    pn.fg.appendChild(g);
    var inner = sv("g", null, g);
    var r = rng("wx" + pn.i);
    var d = "";
    for (var k = 0; k < 2; k++) for (var i = 0; i < 70; i++) {
      var x = r() * pn.w * 1.3, y = r() * pn.h - k * pn.h;
      if (kind === "snow") { var s0 = u(2 + r() * 4); d += "M" + f1(x - s0) + " " + f1(y) + "a" + f1(s0) + " " + f1(s0) + " 0 1 0 " + f1(2 * s0) + " 0a" + f1(s0) + " " + f1(s0) + " 0 1 0 " + f1(-2 * s0) + " 0"; }
      else d += "M" + f1(x) + " " + f1(y) + " l" + f1(-u(14)) + " " + f1(u(46)) + " ";
    }
    sv("path", { d: d, stroke: kind === "snow" ? "none" : "rgba(220,235,255,0.75)", "stroke-width": u(2.5), fill: kind === "snow" ? "#fff" : "none", "stroke-linecap": "round" }, inner);
    V.onFrame(function (t) {
      var sp = kind === "snow" ? 0.12 : 1.1;
      var yy = (t * pn.h * sp) % pn.h, xx = kind === "snow" ? Math.sin(t) * u(10) : -yy * 0.3;
      inner.setAttribute("transform", "translate(" + f1(xx) + "," + f1(yy) + ")");
    });
  }

  T["stat-burst"] = function (p) {
    var L = V.isLandscape;
    var hasCh = charOk(p.character);
    var pg = S.page(1, { margin: u(26), inset: hasCh ? { panel: 0, corner: L ? "br" : "br", size: L ? 0.26 : 0.4 } : null });
    var P0 = pg.panels[0], I = pg.panels[1];
    S.scene(P0, p.background || "action", { palette: p.palette || "red" });
    var tk = p.keyword ? V.find(p.keyword) : null;
    if (tk == null) tk = Math.min(0.9, V.duration * 0.2);
    tk = Math.max(0.3, tk - 0.15);
    var b = P0.bbox;
    var cx = b.x + b.w * (L && hasCh ? 0.44 : 0.5), cy = b.y + b.h * (L ? 0.42 : 0.36);
    var R = Math.min(b.w * (L ? 0.36 : 0.46), b.h * (L ? 0.42 : 0.26));
    S.burst({ x: cx, y: cy, r: R, aspect: 1.35, spikes: 22, fill: C.yellow, fill2: "#fff", at: tk - 0.1 });
    var value = Number(p.value) || 0;
    var dec = p.decimals != null ? Math.max(0, Math.min(3, p.decimals | 0)) : value % 1 ? 1 : 0;
    var fmt = function (v) { return V.format(v, dec); };
    var finalNum = fmt(value);
    var pre = plain(p.prefix || ""), suf = plain(p.suffix || "");
    var full = pre + finalNum + suf;
    var holder = el("div.cb-stat", { parent: pg.over, style: { left: f1(cx) + "px", top: f1(cy) + "px" } });
    var size0 = u(220);
    var probe = lettering(holder, full, { size: size0, palette: p.palette === "blue" ? "zap" : "fire", depth: size0 * 0.12, condense: 0.84, tnum: true });
    var k = Math.min(Math.min(R * 2.3, b.w * 0.84) / Math.max(1, probe.width), (R * 0.95) / Math.max(1, probe.height));
    holder.removeChild(probe.el);
    var sz = size0 * k;
    var NL = lettering(holder, full, { size: sz, palette: p.palette === "blue" ? "zap" : "fire", depth: sz * 0.12, condense: 0.84, tnum: true, dots: true });
    var tl = cur().tl;
    NL.letters.forEach(function (lg, i) { tl.fromTo(lg, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }, { at: tk + i * 0.03, dur: 0.3, ease: "outBack" }); });
    var cDur = Math.min(1.8, Math.max(0.8, V.duration * 0.3));
    var numStart = pre.length, numLen = finalNum.length;
    var lastS = "";
    V.onFrame(function (t) {
      var pr = V.progress(t, tk, tk + cDur, "outExpo");
      var s = pr >= 1 ? finalNum : fmt(value * pr);
      if (s === lastS) return;
      lastS = s;
      var pad = numLen - s.length;
      for (var i = 0; i < numLen; i++) {
        var ch2 = i - pad >= 0 ? s.charAt(i - pad) : "";
        NL.setChar(numStart + i, ch2);
      }
    });
    if (p.label) S.caption(p.label, { panel: P0, x: L ? 0.06 : 0.07, y: L ? 0.76 : 0.6, maxWidth: b.w * (L ? (hasCh ? 0.55 : 0.6) : 0.86), at: tk + cDur * 0.6, size: u(V.isPortrait ? 38 : 34), tilt: -1 });
    S.camera.shake(tk + cDur, u(12), 0.4);
    if (p.sfx) S.sfx(p.sfx, { panel: P0, x: L ? 0.78 : 0.5, y: L ? 0.16 : 0.08, size: Math.min(b.h * 0.13, u(120)), at: tk + cDur - 0.05, palette: "pow", rotate: 8 });
    if (I) {
      S.scene(I, "halftone", { palette: "blue" });
      S.revealPanel(I, tk + cDur * 0.5, "pop");
      S.character(p.character, { panel: I, shot: "close", x: 0.5, expression: p.expression || "shock", facing: "left" });
    }
    S.camera.to(cx, cy, 1.4, 0, 0.01);
    S.camera.page(tk + 0.1, 0.9, { ease: "outCubic" });
  };

  T["origin-story"] = function (p) {
    var evs = arr(p.events).slice(0, 6).map(function (x) { return x || {}; });
    if (!evs.length) evs = [{ date: "", text: "" }];
    var pg = S.page(evs.length, { kind: "grid", slant: 1.2 });
    var times = S.syncTimes(evs.map(function (e) { return e.keyword ? e.keyword : S.autoKey(e.date) || firstWords(e.text, 2); }), { start: 0.15, minGap: 0.6, lead: 0.25 });
    times[0] = Math.min(times[0], 0.3);
    var bgs = ["city", "lab", "street", "space", "interior", "sky"];
    evs.forEach(function (e, i) {
      var pn = pg.panels[i];
      var at = times[i];
      S.scene(pn, e.background || bgs[i % bgs.length], { mood: e.mood || (i === 0 ? "dusk" : "day") });
      S.revealPanel(pn, Math.max(0.06, at - 0.1), i === 0 ? "pop" : "wipe");
      if (charOk(e.character)) {
        var x = sideOf(i);
        S.character(e.character, { panel: pn, shot: pn.h > pn.w ? "full" : "mid", x: x, pose: e.pose || "stand", expression: e.expression || "neutral", facing: x > 0.5 ? "left" : "right", scale: 0.9 }).enter(at + 0.1, "pop");
      }
      var tab = S.caption(e.date || "", { panel: pn, pos: "tl", tone: "dark", at: at, size: u(V.isPortrait ? 34 : 30), sync: false });
      void tab;
      if (e.text) S.caption(e.text, { panel: pn, pos: "bl", at: at + 0.25, maxWidth: pn.w * 0.8, size: u(V.isPortrait ? 29 : 26) });
    });
    if (p.title) S.caption(p.title, { panel: pg.panels[0], pos: "tr", tone: "red", at: 0.2, sync: false, size: u(26) });
    followCam(pg.panels, times, { hold: 2.4 });
  };

  T["close-up-reaction"] = function (p) {
    var pg = S.page(1, { margin: u(26) });
    var P0 = pg.panels[0];
    var L = V.isLandscape;
    S.scene(P0, p.background || "halftone", { palette: p.palette || "pink", angle: 25 });
    var tk = p.keyword ? V.find(p.keyword) : null;
    if (tk == null) tk = Math.max(0.8, V.duration * 0.5);
    tk = Math.max(0.5, tk - 0.1);
    var name = charOk(p.character) ? p.character : "sam";
    var ch = S.character(name, { panel: P0, shot: "close", x: L ? 0.66 : 0.5, expression: p.from || "neutral", facing: L ? "left" : "right", scale: V.isPortrait ? 0.62 : 1 });
    ch.expr(p.expression || "shock", tk);
    var fl = S.focusLines(P0, { at: tk, cx: L ? 0.66 : 0.5, cy: V.isPortrait ? 0.7 : 0.45 });
    void fl;
    var bal = null;
    if (p.line) {
      var t0 = V.find(firstWords(p.line, 2));
      var lt = t0 != null ? Math.max(0.2, t0 - 0.15) : 0.3;
      bal = S.balloon(p.line, { speaker: ch, kind: p.kind || "speech", at: lt, x: L ? 0.27 : 0.5, y: L ? 0.3 : 0.2, maxWidth: L ? P0.w * 0.4 : P0.w * 0.8 });
      ch.talk(lt, phraseEnd(p.line, lt));
    }
    if (p.sfx) S.sfx(p.sfx, { panel: P0, x: L ? 0.24 : V.isPortrait ? 0.5 : 0.2, y: L ? 0.76 : V.isPortrait ? 0.42 : 0.8, at: tk + 0.05, size: Math.min(P0.h * 0.2, u(160)), palette: "pow", rotate: -10, cameraShake: false });
    var eyes = ch.anchor("eyes");
    var fx = bal ? (eyes.x + bal.x) / 2 : eyes.x, fy = bal ? (eyes.y * 0.6 + bal.y * 0.4) : eyes.y;
    S.camera.page(0, 0.01);
    S.camera.to(fx, fy, 1.3, tk - 0.05, 0.22, "outExpo");
    S.camera.to(fx, fy, 1.1, tk + 0.6, Math.max(0.5, Math.min(2.5, V.duration - tk - 0.8)), "inOutSine");
    S.camera.shake(tk + 0.05, u(12), 0.45);
  };

  T["page-turn-chapter"] = function (p) {
    // page A: the end of the previous chapter
    var pa = S.page(3, { kind: "feature", seed: 3 });
    var bgs = [p.previousBackground || "street", "city", "interior"];
    pa.panels.forEach(function (pn, i) {
      S.scene(pn, bgs[i], { mood: i === 0 ? "dusk" : "night" });
      if (i === 0 && charOk(p.character)) S.character(p.character, { panel: pn, shot: "full", silhouette: true, x: 0.6, scale: 0.8, pose: "stand" });
    });
    S.caption(p.endCaption || "To be continued...", { panel: pa.panels[2], pos: "br", tone: "yellow", at: 0.01, sync: false, size: u(26) });
    // page B (under): chapter splash
    var pb = S.page(1, { margin: u(26) });
    var P0 = pb.panels[0];
    S.scene(P0, p.background || "sky", { mood: p.mood || "dusk", palette: p.palette });
    var L = V.isLandscape;
    var ch = null;
    if (charOk(p.character)) ch = S.character(p.character, { panel: P0, shot: "full", x: L ? 0.76 : 0.5, scale: L ? 0.9 : 0.52, pose: p.pose || "wave", expression: "happy" });
    var tTurn = Math.min(0.7, V.duration * 0.15);
    var turnDur = Math.min(1.1, Math.max(0.6, V.duration * 0.2));
    S.pageTurn(tTurn, turnDur);
    var after = tTurn + turnDur;
    var lx = L ? (ch ? V.width * 0.38 : V.width / 2) : V.width / 2, ly = L ? V.height * 0.42 : V.height * 0.3;
    var band = el("div.cb-chapter", { parent: pb.over, text: plain(p.chapter || "Chapter 1"), style: { left: f1(lx) + "px", top: f1(ly - (L ? V.height * 0.2 : V.height * 0.12)) + "px" } });
    cur().tl.fromTo(band, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1 }, { at: after - 0.1, dur: 0.4, ease: "outBack" });
    var tTitle = V.find(firstWords(p.title, 1), after - 0.5);
    S.logo(p.title || "A New Beginning", { x: lx, y: ly, maxW: L ? (ch ? V.width * 0.6 : V.width * 0.8) : V.width * 0.86, maxH: L ? V.height * 0.3 : V.height * 0.18, at: Math.max(after, tTitle != null ? tTitle - 0.15 : after), palette: p.palette === "blue" ? "ice" : "gold" });
    if (p.subtitle) S.caption(p.subtitle, { panel: P0, pos: L ? "bl" : "bottom", at: after + 0.9, maxWidth: L ? V.width * 0.5 : V.width * 0.84, size: u(V.isPortrait ? 34 : 30), tilt: -1 });
    S.camera.page(0, 0.01);
    S.camera.to(V.width / 2, V.height / 2, 1.06, after, Math.max(0.5, V.duration - after - 0.1), "inOutSine");
  };

  T["fact-panels"] = function (p) {
    var facts = arr(p.facts).slice(0, 6).map(function (x) { return typeof x === "string" ? { label: x } : x || {}; });
    if (!facts.length) facts = [{ label: "" }];
    var pg = S.page(facts.length, { kind: "grid", slant: 0.8 });
    var times = S.syncTimes(facts.map(function (f) { return f.keyword || S.autoKey(f.label); }), { start: p.title ? 0.8 : 0.2, minGap: 0.4 });
    var pals = ["yellow", "blue", "red", "green", "purple", "pink"];
    var cols = [C.red, C.yellow, C.blue, C.purple, C.orange, C.green];
    facts.forEach(function (f, i) {
      var pn = pg.panels[i];
      var at = times[i];
      S.scene(pn, "halftone", { palette: pals[i % pals.length], angle: 20 + i * 40 });
      S.revealPanel(pn, Math.max(0.06, at - 0.1), "pop");
      var size = Math.min(pn.w, pn.h) * 0.46;
      var wrap = el("div.cb-iconwrap", { parent: pn.fg, style: { left: f1(pn.w / 2) + "px", top: f1(pn.h * 0.42) + "px" } });
      var bs = sv("svg", { width: 2, height: 2, style: { overflow: "visible", position: "absolute", left: "0", top: "0" } }, wrap);
      sv("path", { d: burstD(0, 0, size * 0.72, size * 0.56, 12, rng("ib" + i), 0.1), fill: "#fff", stroke: INK, "stroke-width": f1(u(5)) }, bs);
      var back = S.icon(f.icon || "sparkles", { size: size, color: cols[i % cols.length], stroke: 3.4 });
      var front = S.icon(f.icon || "sparkles", { size: size, color: INK, stroke: 1.9 });
      back.classList.add("cb-icon"); front.classList.add("cb-icon");
      back.style.left = f1(-size / 2 + u(7)) + "px"; back.style.top = f1(-size / 2 + u(7)) + "px";
      front.style.left = f1(-size / 2) + "px"; front.style.top = f1(-size / 2) + "px";
      wrap.appendChild(back); wrap.appendChild(front);
      cur().tl.fromTo(wrap, { scale: 0, rotate: -20 }, { scale: 1, rotate: 0 }, { at: at + 0.05, dur: 0.45, ease: "outBack" });
      var num = el("div.cb-num", { parent: pg.over, text: String(i + 1), style: { left: f1(pn.poly[0][0] + u(8)) + "px", top: f1(pn.poly[0][1] + u(8)) + "px" } });
      cur().tl.fromTo(num, { scale: 0 }, { scale: 1 }, { at: at, dur: 0.3, ease: "outBack" });
      if (f.label) S.caption(f.label, { panel: pn, pos: "bottom", at: at + 0.15, maxWidth: pn.w * 0.88, size: u(V.isPortrait ? 30 : 28), tone: "white" });
    });
    if (p.title) S.caption(p.title, { panel: pg.panels[0], x: 0.5, y: 0, tone: "red", at: 0.15, sync: true, size: u(30), screen: true, tilt: -2 });
    S.camera.page(0, 0.01);
    pg.panels.forEach(function (pn, i) { S.camera.focus(pn, Math.max(0.05, times[i] - 0.3), 0.6, { zoom: 0.55 }); });
    S.camera.page(Math.max(times[times.length - 1] + 1.4, V.duration - 1.5), 0.9);
  };

  // ───────────────────────── fallback ─────────────────────────
  function chunkNarration(narr) {
    var toks;
    var W = V.words && V.words.length ? V.words : null;
    if (W) toks = W.map(function (w) { return { word: str(w.word), start: w.start }; });
    else {
      var raw = str(narr).split(/\s+/).filter(Boolean).slice(0, 400);
      var span = Math.max(0.5, V.duration - 0.8);
      toks = raw.map(function (w, i) { return { word: w, start: 0.3 + (span * i) / Math.max(1, raw.length) }; });
    }
    var chunks = [], curC = [];
    toks.forEach(function (tk, i) {
      curC.push(tk);
      var end = /[.!?;:]$/.test(tk.word) && curC.length >= 4;
      if (end || curC.length >= 13 || i === toks.length - 1) { chunks.push(curC); curC = []; }
    });
    return chunks;
  }
  /** Fallback: one panel, the narrator (Sam) explaining, narration in caption boxes. Never throws. */
  S.fallback = function (root, narration) {
    root = root || V.root();
    try {
      comic = null;
      S.comic(root, {});
      var pg = S.page(1, { margin: u(26) });
      var P0 = pg.panels[0];
      var L = V.isLandscape;
      S.scene(P0, "city", { mood: "dusk", horizon: L ? 0.7 : 0.62 });
      var ch = S.character("sam", { panel: P0, shot: "mid", x: L ? 0.76 : 0.5, pose: "explain", expression: "happy", facing: L ? "left" : "right", scale: L ? 0.92 : V.isPortrait ? 0.5 : 0.62, maxW: L ? 0.5 : 0.9 });
      var chunks = chunkNarration(narration != null ? narration : V.narration);
      ch.talk(0, V.duration);
      var b = P0.bbox;
      var colW = L ? b.w * 0.56 : b.w * 0.88;
      var maxH = L ? b.h * 0.5 : b.h * (V.isPortrait ? 0.4 : 0.38);
      var tl = cur().tl;
      chunks.slice(0, 80).forEach(function (cnk, i) {
        var at = Math.max(0.05, cnk[0].start - 0.15);
        var nextAt = i + 1 < chunks.length ? Math.max(at + 0.4, chunks[i + 1][0].start - 0.2) : V.duration + 1;
        var cp = S.caption(cnk.map(function (w) { return w.word; }).join(" "), { panel: P0, pos: "tl", x: 0.03, y: 0.04, maxWidth: colW, maxHeight: maxH, at: at, size: u(V.isPortrait ? 40 : 36), tilt: i % 2 ? 0.7 : -0.7, end: nextAt - 0.25, screen: true });
        if (nextAt < V.duration) tl.to(cp.el, { opacity: 0, y: -u(20) }, { at: nextAt - 0.05, dur: 0.2, ease: "inCubic" });
        var ex = ["happy", "neutral", "grin", "think"][i % 4];
        ch.expr(ex, at);
        ch.pose(["explain", "present", "point", "explain"][i % 4], at);
      });
      // motion-comic camera: alternate wide and close on each new caption
      S.camera.page(0, 0.01);
      var face = ch.anchor("eyes");
      chunks.slice(0, 80).forEach(function (cnk, i) {
        var at = Math.max(0.05, cnk[0].start - 0.3);
        if (i % 2) S.camera.to(lerp(V.width / 2, face.x, 0.7), lerp(V.height / 2, face.y, 0.5), 1.22, at, 0.8);
        else if (i) S.camera.page(at, 0.8);
      });
    } catch (e) {
      V.error("comic fallback: " + (e && e.message));
      try {
        V.reset();
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "8%", fontSize: u(60) + "px", fontWeight: "900", fontStyle: "italic", textTransform: "uppercase", textAlign: "center", color: INK, background: C.caption, fontFamily: FONT, border: u(10) + "px solid " + INK } });
        t.textContent = str(narration || V.narration).split(/\s+/).slice(0, 14).join(" ");
      } catch (e2) {}
    }
  };

  // ───────────────────────── render ─────────────────────────
  S.templateIds = Object.keys(T);
  /** Render a template. Throws on unknown id (boot falls back); template errors fall back here. */
  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = root || V.root();
    props = props || {};
    try {
      comic = null;
      S.comic(root, { print: props.print });
      fn(props);
    } catch (e) {
      V.error("[comic-book:" + id + "] " + (e && e.message ? e.message : String(e)));
      try { V.reset(); } catch (e2) {}
      S.fallback(root, V.narration);
    }
    return root;
  };
})();
