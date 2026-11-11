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
/* Scene animation engine: PAINTED HISTORY — military-history storytelling in painterly digital oils.
 * Wide history-book battle paintings (warm parchment and golden light, smoke and dust, brushy
 * procedural textures and canvas grain) built from parallax SVG layers: skies, rolling terrain,
 * forests, rivers, fortresses; armies of many small soldiers in era/faction presets (redcoats,
 * bluecoats, legionaries, knights, samurai, musketeers…) with looping march cycles, musket volleys
 * and cannon smoke; cavalry; generals at a candle-lit map table; tactical battle maps with sweeping
 * manoeuvre arrows. Signature overlays: cream title banners in big dark serif caps, troop-count
 * versus banners, place/date lower-thirds. Pure function of time (V.timeline / V.onFrame only).
 */
(function () {
  "use strict";
  var V = window.V;
  var S = window.SceneStyle;
  if (!V || !S) return;
  var el = V.el;
  var NS = "http://www.w3.org/2000/svg";

  S.init({
    id: "painted-history",
    kind: "documentary",
    enter: "fade",
    titleReveal: "fade",
    drift: 0.02,
    series: ["#B3271E", "#2A4F8C", "#C8963E", "#4E6B2F", "#6B4C2A", "#8C8C8C"],
    background: function (bg) { paintBg(bg); },
  });

  // ───────────────────────── basics ─────────────────────────
  var C = {
    bg: "#1E150D", fg: "#F3E6C8", accent: "#C8963E", muted: "#9A845F", cream: "#F1E4C4", parchment: "#E6D3A6",
    ink: "#2A1F14", ink2: "#4A3522", gold: "#D9B05A", gold2: "#8F6A22", umber: "#4A3320", ochre: "#B98A3E",
    smoke: "#D8CBB2", smoke2: "#8F826E", fire: "#FFB347", red: "#B3271E", blue: "#2A4F8C",
  };
  S.colors = C;
  var SERIF = 'Georgia, "Times New Roman", Times, serif';
  var DISPLAY = '"Times New Roman", Times, Georgia, serif';
  S.fonts = { serif: SERIF, display: DISPLAY };
  function u(n) { return n * V.unit; }
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function f1(n) { return Math.round(n * 10) / 10; }
  function f2(n) { return Math.round(n * 100) / 100; }
  function lastT() { return Math.max(0.05, V.duration - 0.05); }
  function cT(t) { return clamp(t, 0, lastT()); }
  function hash01(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function smooth(p) { return p * p * (3 - 2 * p); }
  function vnoise(x, k) { var i = Math.floor(x), f = x - i; return lerp(hash01(i + (k || 0) * 101.7), hash01(i + 1 + (k || 0) * 101.7), smooth(f)); }
  function hs(s) { return S.hash(s); }
  function rng(key) { return V.makeRand(((hs(str(key)) ^ Math.imul(V.seed | 0, 2654435761)) >>> 0) || 1); }
  function plain(t) { return str(t).replace(/\*([^*]+)\*/g, "$1"); }
  function E(name) { return typeof name === "function" ? name : V.ease[name] || V.ease.outCubic; }
  var uid = 0;
  function nid(p) { uid++; return "ph" + (p || "") + uid + "_" + V.seed; }
  function sv(tag, attrs, parent) {
    var n = document.createElementNS(NS, tag);
    if (attrs) for (var k in attrs) {
      if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
      var v = attrs[k];
      if (v == null) continue;
      if (k === "text") n.textContent = v;
      else if (k === "html") n.innerHTML = v;
      else if (k === "style" && typeof v === "object") { for (var s in v) n.style[s] = v[s]; }
      else n.setAttribute(k, String(v));
    }
    if (parent) parent.appendChild(n);
    return n;
  }
  S.svg = sv;
  function px(n) { return f1(n) + "px"; }
  function hexRgb(h) {
    h = str(h).replace("#", "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16) || 0;
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function mix(a, b, p) {
    var A = hexRgb(a), B = hexRgb(b);
    return "rgb(" + Math.round(lerp(A[0], B[0], p)) + "," + Math.round(lerp(A[1], B[1], p)) + "," + Math.round(lerp(A[2], B[2], p)) + ")";
  }
  function rgba(h, a) { var c = hexRgb(h); return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")"; }
  function shade(h, k) { return k < 0 ? mix(h, "#2A1A0E", -k) : mix(h, "#FFF2D0", k); }
  S.mix = mix; S.shade = shade; S.rgba = rgba;
  /** Smooth path through points (Catmull-Rom → cubic Bézier). */
  function smoothPath(p, closed) {
    if (!p.length) return "";
    if (p.length < 3 && !closed) return "M" + p.map(function (q) { return f1(q[0]) + " " + f1(q[1]); }).join(" L");
    var n = p.length, d = "M" + f1(p[0][0]) + " " + f1(p[0][1]);
    var last = closed ? n : n - 1;
    for (var i = 0; i < last; i++) {
      var p0 = p[closed ? (i - 1 + n) % n : Math.max(0, i - 1)], p1 = p[i], p2 = p[(i + 1) % n], p3 = p[closed ? (i + 2) % n : Math.min(n - 1, i + 2)];
      d += " C" + f1(p1[0] + (p2[0] - p0[0]) / 6) + " " + f1(p1[1] + (p2[1] - p0[1]) / 6) + " " + f1(p2[0] - (p3[0] - p1[0]) / 6) + " " + f1(p2[1] - (p3[1] - p1[1]) / 6) + " " + f1(p2[0]) + " " + f1(p2[1]);
    }
    return d + (closed ? " Z" : "");
  }
  S.smoothPath = smoothPath;
  function poly(pts, closed) { return "M" + pts.map(function (q) { return f1(q[0]) + " " + f1(q[1]); }).join(" L") + (closed === false ? "" : " Z"); }
  /** Jitter a polygon's edges (painterly, hand-cut look). */
  function rough(pts, amt, r, closed) {
    var out = [], n = pts.length;
    for (var i = 0; i < n; i++) {
      var a = pts[i], b = pts[(i + 1) % n];
      if (!closed && i === n - 1) { out.push(a); break; }
      var segs = Math.max(1, Math.round(Math.hypot(b[0] - a[0], b[1] - a[1]) / (amt * 4 + 1)));
      for (var k = 0; k < segs; k++) {
        var p = k / segs;
        out.push([lerp(a[0], b[0], p) + (r() - 0.5) * amt, lerp(a[1], b[1], p) + (r() - 0.5) * amt]);
      }
    }
    return out;
  }
  S.rough = rough;

  // ───────────────────────── procedural textures (canvas → data URL, cached) ─────────────────────────
  var texCache = {};
  function canvasUrl(key, w, h, draw) {
    if (texCache[key] != null) return texCache[key];
    var url = "";
    try {
      var c = document.createElement("canvas");
      c.width = w; c.height = h;
      var g = c.getContext("2d");
      draw(g, w, h, V.makeRand(hs(key) || 7));
      url = c.toDataURL("image/png");
    } catch (e) { url = ""; }
    texCache[key] = url;
    return url;
  }
  /** Fine canvas weave (multiply). */
  function weaveTex() {
    return canvasUrl("weave", 128, 128, function (g, w, h, r) {
      var img = g.createImageData(w, h);
      for (var y = 0; y < h; y++) for (var x = 0; x < w; x++) {
        var i = (y * w + x) * 4;
        var v = 200 + ((x % 3 === 0) ? -26 : 0) + ((y % 3 === 1) ? -20 : 0) + (r() - 0.5) * 36;
        img.data[i] = img.data[i + 1] = img.data[i + 2] = clamp(Math.round(v), 0, 255);
        img.data[i + 3] = 255;
      }
      g.putImageData(img, 0, 0);
    });
  }
  /** Layered translucent brush dabs in warm/cool hues (overlay). */
  function brushTex() {
    return canvasUrl("brush", 420, 420, function (g, w, h, r) {
      var hues = ["255,224,170", "224,170,110", "160,130,100", "255,244,220", "150,160,130", "220,150,100", "130,110,90"];
      for (var i = 0; i < 420; i++) {
        var x = r() * w, y = r() * h, L = 10 + r() * 30, T = 2 + r() * 6, a = (r() - 0.5) * 1.1 + (r() > 0.7 ? 1.4 : 0);
        g.save(); g.translate(x, y); g.rotate(a);
        g.fillStyle = "rgba(" + hues[Math.floor(r() * hues.length)] + "," + (0.03 + r() * 0.07).toFixed(3) + ")";
        g.beginPath(); g.ellipse(0, 0, L, T, 0, 0, 7); g.fill();
        // bristle streaks
        g.strokeStyle = "rgba(255,255,255," + (0.03 + r() * 0.05).toFixed(3) + ")"; g.lineWidth = 0.8;
        for (var k = -2; k <= 2; k++) { g.beginPath(); g.moveTo(-L, k * T * 0.35); g.lineTo(L, k * T * 0.35 + (r() - 0.5) * 2); g.stroke(); }
        g.restore();
      }
      // wrap seams: repeat a few dabs across edges
    });
  }
  /** Parchment fibres, foxing, specks (dark marks only, transparent). */
  function parchTex() {
    return canvasUrl("parch", 256, 256, function (g, w, h, r) {
      var i;
      for (i = 0; i < 2200; i++) { g.fillStyle = "rgba(90,60,28," + (0.02 + r() * 0.07).toFixed(3) + ")"; g.fillRect(r() * w, r() * h, 1 + r() * 1.6, 1 + r() * 1.3); }
      g.lineWidth = 0.6;
      for (i = 0; i < 60; i++) { var x = r() * w, y = r() * h, a = r() * Math.PI; g.strokeStyle = "rgba(110,78,36," + (0.05 + r() * 0.08).toFixed(3) + ")"; g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + Math.cos(a) * 6 + r() * 4, y + Math.sin(a) * 6, x + Math.cos(a) * 14, y + Math.sin(a) * 14); g.stroke(); }
      for (i = 0; i < 9; i++) { var fx = r() * w, fy = r() * h, fr = 3 + r() * 9; var gr = g.createRadialGradient(fx, fy, 0, fx, fy, fr); gr.addColorStop(0, "rgba(130,80,30,0.2)"); gr.addColorStop(1, "rgba(130,80,30,0)"); g.fillStyle = gr; g.beginPath(); g.arc(fx, fy, fr, 0, 7); g.fill(); }
    });
  }
  /** Soft dab pattern for terrain fills (painterly dappling, transparent). */
  function dappleTex(key, col, n, size) {
    return canvasUrl("dapple" + key, 200, 200, function (g, w, h, r) {
      for (var i = 0; i < n; i++) {
        g.save(); g.translate(r() * w, r() * h); g.rotate((r() - 0.5) * 0.9);
        g.fillStyle = rgba(col, 0.08 + r() * 0.18);
        g.beginPath(); g.ellipse(0, 0, size * (0.6 + r() * 0.9), size * (0.25 + r() * 0.35), 0, 0, 7); g.fill();
        g.restore();
      }
    });
  }
  S.textures = { weave: weaveTex, brush: brushTex, parchment: parchTex, dapple: dappleTex };
  function parchBg(color, edge) {
    var t = parchTex();
    var e = edge != null ? edge : 0.32;
    return {
      backgroundColor: color || C.parchment,
      backgroundImage: (t ? "url(" + t + ")," : "") + "radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 50%, rgba(110,70,20," + e + ") 100%)",
      backgroundSize: (t ? u(240) + "px " + u(240) + "px," : "") + "100% 100%",
    };
  }
  S.parchBg = parchBg;
  function applyStyle(node, st) { for (var k in st) node.style[k] = st[k]; return node; }

  // ───────────────────────── era / faction presets ─────────────────────────
  // coat, trim, trousers, skin, hat, weapon, flag {field, pattern, c1, c2}, horse colour, cannon colour
  var FACTIONS = {
    redcoat: { name: "Redcoats", era: "Napoleonic / 18th c. British line infantry", coat: "#B3271E", trim: "#F1E6C8", trousers: "#E8E0CC", hat: "shako", weapon: "musket", flag: { field: "#1F3C7A", pattern: "cross", c1: "#F1E6C8", c2: "#B3271E" }, cannon: "#2E2A24" },
    bluecoat: { name: "Bluecoats", era: "Napoleonic French line infantry", coat: "#2A4F8C", trim: "#F1E6C8", trousers: "#EFE6D2", hat: "shako", weapon: "musket", flag: { field: "#F1E6C8", pattern: "tricolour", c1: "#2A4F8C", c2: "#B3271E" }, cannon: "#3E5B2E" },
    whitecoat: { name: "Whitecoats", era: "18th c. French / Austrian line", coat: "#E9E2D0", trim: "#2A4F8C", trousers: "#E9E2D0", hat: "tricorne", weapon: "musket", flag: { field: "#F1E6C8", pattern: "fleur", c1: "#D9B05A", c2: "#2A4F8C" }, cannon: "#4A3A2A" },
    greencoat: { name: "Greencoats", era: "Russian / rifle regiments", coat: "#2F5A2E", trim: "#B3271E", trousers: "#1E2A3A", hat: "shako", weapon: "musket", flag: { field: "#2F5A2E", pattern: "saltire", c1: "#F1E6C8", c2: "#D9B05A" }, cannon: "#3A3A2E" },
    prussian: { name: "Prussians", era: "Prussian line, 18th–19th c.", coat: "#1E2A4A", trim: "#F1E6C8", trousers: "#CFC8B8", hat: "pickelhaube", weapon: "musket", flag: { field: "#F1E6C8", pattern: "bands", c1: "#1A1A1A", c2: "#F1E6C8" }, cannon: "#2A2A2A" },
    union: { name: "Union", era: "American Civil War, federal", coat: "#2C3E6B", trim: "#D9B05A", trousers: "#5B6E9E", hat: "kepi", weapon: "musket", flag: { field: "#B3271E", pattern: "stripes", c1: "#F1E6C8", c2: "#2C3E6B" }, cannon: "#2E2A24" },
    continental: { name: "Continentals", era: "American Revolution", coat: "#24396B", trim: "#D8C08A", trousers: "#D8C08A", hat: "tricorne", weapon: "musket", flag: { field: "#B3271E", pattern: "stripes", c1: "#F1E6C8", c2: "#24396B" }, cannon: "#3A3026" },
    musketeer: { name: "Musketeers", era: "17th c. pike and shot", coat: "#3A5A96", trim: "#F1E6C8", trousers: "#5A4030", hat: "cavalier", weapon: "musket", flag: { field: "#F1E6C8", pattern: "cross", c1: "#3A5A96", c2: "#D9B05A" }, cannon: "#4A3A2A" },
    roman: { name: "Legionaries", era: "Roman legion", coat: "#A8281E", trim: "#B9B2A6", trousers: "#C9A77A", hat: "galea", weapon: "scutum", flag: { field: "#A8281E", pattern: "eagle", c1: "#D9B05A", c2: "#D9B05A" }, cannon: "#4A3A2A" },
    hoplite: { name: "Hoplites", era: "Greek city-state phalanx", coat: "#B9893A", trim: "#2A2A2A", trousers: "#C9A77A", hat: "corinthian", weapon: "hoplon", flag: { field: "#2A4F8C", pattern: "sun", c1: "#F1E6C8", c2: "#D9B05A" }, cannon: "#4A3A2A" },
    knight: { name: "Knights", era: "High medieval men-at-arms", coat: "#8E9096", trim: "#B3271E", trousers: "#6E7076", hat: "greathelm", weapon: "sword", flag: { field: "#F1E6C8", pattern: "cross", c1: "#B3271E", c2: "#B3271E" }, cannon: "#4A3A2A" },
    samurai: { name: "Samurai", era: "Sengoku Japan", coat: "#2A2A30", trim: "#B3271E", trousers: "#2A2A30", hat: "kabuto", weapon: "yari", flag: { field: "#F1E6C8", pattern: "mon", c1: "#B3271E", c2: "#2A2A30" }, cannon: "#4A3A2A" },
    viking: { name: "Northmen", era: "Viking age shield wall", coat: "#6E5A3E", trim: "#C9A77A", trousers: "#3A2E22", hat: "nasal", weapon: "axe", flag: { field: "#2A2A2A", pattern: "raven", c1: "#F1E6C8", c2: "#B3271E" }, cannon: "#4A3A2A" },
    mongol: { name: "Horde", era: "Steppe horse archers", coat: "#3A5A96", trim: "#C9A77A", trousers: "#5A4030", hat: "furcap", weapon: "bow", flag: { field: "#2A4F8C", pattern: "tails", c1: "#F1E6C8", c2: "#D9B05A" }, cannon: "#4A3A2A" },
    ottoman: { name: "Janissaries", era: "Ottoman infantry", coat: "#B3271E", trim: "#D9B05A", trousers: "#2A4F8C", hat: "bork", weapon: "musket", flag: { field: "#B3271E", pattern: "crescent", c1: "#F1E6C8", c2: "#F1E6C8" }, cannon: "#5A4A2A" },
  };
  var SKINS = ["#D9A77A", "#C9956A", "#B98258", "#A06D48", "#E2B48C"];
  S.factions = Object.keys(FACTIONS);
  S.factionInfo = FACTIONS;
  function fac(id) { return FACTIONS[id] || FACTIONS[S.guessFaction(id)] || FACTIONS.redcoat; }
  S.faction = fac;
  // gunpowder only for musket-era factions (no cannons at Hastings)
  function hasGuns(f) { return fac(f).weapon === "musket"; }
  S.hasGuns = hasGuns;
  S.guessFaction = function (text) {
    var t = str(text).toLowerCase();
    var M = [["redcoat", /british|red ?coat|english|king's|royal/], ["bluecoat", /french|napoleon|blue ?coat|grande/], ["prussian", /prussia|german|hessian/], ["union", /union|federal|yankee|civil war/], ["continental", /continental|patriot|revolution|washington/],
      ["roman", /roman|legion|caesar|centur/], ["hoplite", /greek|spart|athen|hoplite|phalanx|macedon/], ["knight", /knight|crusad|medieval|norman|chivalr/], ["samurai", /samurai|japan|shogun|daimyo/], ["viking", /viking|norse|dane|saxon/],
      ["mongol", /mongol|horde|steppe|khan|hun/], ["ottoman", /ottoman|turk|janissar|sultan/], ["musketeer", /musketeer|pike|tercio|cavalier|roundhead|thirty/], ["whitecoat", /austria|bourbon|white ?coat|spanish/], ["greencoat", /russia|tsar|rifle|jäger|jager/]];
    for (var i = 0; i < M.length; i++) if (M[i][1].test(t)) return M[i][0];
    return "redcoat";
  };
  var ENEMY = { redcoat: "bluecoat", bluecoat: "redcoat", whitecoat: "prussian", greencoat: "bluecoat", prussian: "whitecoat", union: "greencoat", continental: "redcoat", musketeer: "whitecoat", roman: "viking", hoplite: "ottoman", knight: "ottoman", samurai: "mongol", viking: "knight", mongol: "samurai", ottoman: "knight" };
  S.enemyOf = function (id) { return ENEMY[id] || "bluecoat"; };

  // ───────────────────────── sky / time-of-day and terrain presets ─────────────────────────
  var SKIES = {
    golden: { top: "#C98A3E", mid: "#E7B86A", hor: "#F2D9A2", sun: [0.72, 0.3], sunCol: "#FFF0C0", cloud: "#F2DDB4", cloudSh: "#C9985A", haze: "rgba(240,200,140,0.22)", ground: 0 },
    dawn: { top: "#6F5B7A", mid: "#D2906A", hor: "#F3C98C", sun: [0.2, 0.52], sunCol: "#FFE4B0", cloud: "#EFC7A4", cloudSh: "#9A6E7A", haze: "rgba(230,180,160,0.2)", ground: -0.08 },
    dusk: { top: "#4A3356", mid: "#B4583A", hor: "#E9A85E", sun: [0.3, 0.5], sunCol: "#FFD79A", cloud: "#D98A62", cloudSh: "#5A3A4A", haze: "rgba(200,120,80,0.2)", ground: -0.18 },
    storm: { top: "#3A3C44", mid: "#6E6A66", hor: "#B9A98E", sun: [0.5, 0.2], sunCol: "#D8D2C4", cloud: "#8A847A", cloudSh: "#3E3A38", haze: "rgba(120,110,100,0.25)", ground: -0.25 },
    noon: { top: "#6F94B8", mid: "#B9CBD2", hor: "#E7DEC4", sun: [0.5, 0.12], sunCol: "#FFFFF0", cloud: "#F7F1E6", cloudSh: "#A9A398", haze: "rgba(220,220,200,0.18)", ground: 0.06 },
    night: { top: "#101828", mid: "#263650", hor: "#5A5A5A", sun: [0.78, 0.22], sunCol: "#E8E4D0", cloud: "#3A465A", cloudSh: "#141A28", haze: "rgba(40,50,80,0.3)", ground: -0.5, moon: true },
    winter: { top: "#8C96A4", mid: "#C9CCCB", hor: "#E9E4D8", sun: [0.6, 0.25], sunCol: "#FFF6E8", cloud: "#EEEDE8", cloudSh: "#8E9298", haze: "rgba(230,230,230,0.22)", ground: 0.1, snow: true },
  };
  S.skies = Object.keys(SKIES);
  var TERRAINS = ["fields", "hills", "forest", "river", "coast", "mountains", "desert", "snow", "plain"];
  S.terrains = TERRAINS;
  function terrainPal(kind, sky) {
    var sk = SKIES[sky] || SKIES.golden, k = sk.ground;
    var base;
    if (kind === "desert") base = { far: "#C9A46A", mid: "#C08E4E", near: "#A8703A", dark: "#6E4A22", tree: "#5A6A3A" };
    else if (kind === "snow" || sk.snow) base = { far: "#C9CED0", mid: "#DCE0E0", near: "#EDEDE8", dark: "#8A8E90", tree: "#2F3F30" };
    else if (kind === "mountains") base = { far: "#7A6E62", mid: "#6E6A4A", near: "#7E7A44", dark: "#3E3626", tree: "#2E4A2A" };
    else if (kind === "coast") base = { far: "#7A8A6A", mid: "#8E8A4E", near: "#B8A058", dark: "#5A4A2A", tree: "#3E5A32" };
    else base = { far: "#8A8A5A", mid: "#7E7A3E", near: "#8A7A38", dark: "#4A3A20", tree: "#3A5230" };
    var out = {};
    for (var key in base) out[key] = shade(base[key], k);
    return out;
  }
  S.terrainPal = terrainPal;

  // ───────────────────────── the painting world + camera ─────────────────────────
  var A = null;
  function cur() { if (!A) S.scene(); return A; }
  /** Backdrop for shared S.background (custom code that calls S.stage first). */
  function paintBg(bg) {
    el("div", { parent: bg, style: { position: "absolute", inset: "0", background: "linear-gradient(180deg, #C98A3E 0%, #E7B86A 45%, #8A7A38 56%, #5A4A28 100%)" } });
  }
  var LAYERS = [["sky", 0.1], ["far", 0.3], ["mid", 0.55], ["ground", 1], ["near", 1.12]];
  /**
   * Create the painting. opts: sky (golden|dawn|dusk|storm|noon|night|winter), terrain, width/height (world px),
   * bleed (extra painted margin, default 0.3), horizon (0..1 of height), camera {x,y,zoom}, drift (0..2),
   * grain/brush/vignette/dust (booleans), bare (no auto landscape).
   */
  S.scene = function (root, opts) {
    opts = opts || {};
    root = root || V.root();
    root.classList.add("pack-painted-history", "kind-documentary");
    var W = V.width, H = V.height;
    var ww = opts.width || W, wh = opts.height || H;
    var B = opts.bleed != null ? opts.bleed : 0.3;
    var frame = el("div.ph-frame", { parent: root });
    var layers = {};
    var bx = -ww * B, by = -wh * B, bw = ww * (1 + 2 * B), bh = wh * (1 + 2 * B);
    LAYERS.forEach(function (L) {
      var wrap = el("div.ph-layer.ph-layer-" + L[0], { parent: frame });
      var svg = sv("svg", { class: "ph-svg", width: f1(bw), height: f1(bh), viewBox: f1(bx) + " " + f1(by) + " " + f1(bw) + " " + f1(bh), style: { left: px(bx), top: px(by) } }, wrap);
      var defs = sv("defs", null, svg);
      var g = sv("g", { class: "ph-paint" }, svg);
      layers[L[0]] = { wrap: wrap, svg: svg, g: g, defs: defs, k: L[1] };
    });
    var hud = el("div.ph-hud", { parent: frame });
    var fx = el("div.ph-fx", { parent: frame });
    var sky = SKIES[opts.sky] || SKIES.golden;
    A = {
      root: root, frame: frame, layers: layers, hud: hud, fx: fx, W: W, H: H, ww: ww, wh: wh, bx: bx, by: by, bw: bw, bh: bh,
      skyId: SKIES[opts.sky] ? opts.sky : "golden", sky: sky, terrain: opts.terrain || "fields", pal: terrainPal(opts.terrain || "fields", SKIES[opts.sky] ? opts.sky : "golden"),
      horizon: (opts.horizon != null ? opts.horizon : 0.56) * wh, moves: [], shakes: [], anims: [], texts: [], dirty: true, tl: V.timeline(),
      drift: opts.drift != null ? opts.drift : 1, minZoom: opts.minZoom || 1, lightAmt: opts.light != null ? opts.light : 1,
    };
    var c0 = opts.camera || {};
    A.cam0 = { x: c0.x != null ? c0.x : ww / 2, y: c0.y != null ? c0.y : wh / 2, z: c0.zoom != null ? c0.zoom : Math.min(W / ww, H / wh), r: c0.rot || 0 };
    buildFx(A, opts);
    if (!opts.bare) S.landscape(opts);
    V.onFrame(frameUpdate);
    return A;
  };
  S.world = function () { return cur(); };
  S.layer = function (name) { return cur().layers[name] || cur().layers.ground; };
  S.onFrame = function (fn) { if (typeof fn === "function") cur().anims.push(fn); };
  /** SVG text in the painting: registered so it is hidden whenever any part of it would leave the frame. */
  function worldText(layerName, attrs, parent, cx, cy, w, h) {
    var a = cur(), L = a.layers[layerName] || a.layers.ground;
    var t = sv("text", attrs, parent);
    a.texts.push({ el: t, x: cx, y: cy, w: w, h: h, k: L.k });
    return t;
  }
  S.worldText = worldText;

  // camera ------------------------------------------------------------
  function camEvalMove(m, t) {
    var p = m.dur <= 0.011 ? (t >= m.at ? 1 : 0) : m.ease(clamp((t - m.at) / m.dur, 0, 1));
    var tg = m.track ? m.track(t) : m.to;
    var f = m.from;
    var z = Math.exp(lerp(Math.log(f.z), Math.log(tg.z), p));
    return { x: lerp(f.x, tg.x, p), y: lerp(f.y, tg.y, p), z: z, r: lerp(f.r, tg.r != null ? tg.r : f.r, p) };
  }
  function camPrepare() {
    if (!A.dirty) return;
    var M = A.moves;
    M.sort(function (a, b) { return a.at - b.at || a.i - b.i; });
    for (var i = 0; i < M.length; i++) M[i].from = camUpTo(i, M[i].at);
    A.dirty = false;
  }
  function camUpTo(i, t) {
    for (var j = i - 1; j >= 0; j--) if (t >= A.moves[j].at) return camEvalMove(A.moves[j], t);
    return A.cam0;
  }
  function camState(t) { camPrepare(); return camUpTo(A.moves.length, t); }
  function addMove(m) {
    var a = cur();
    m.i = a.moves.length;
    m.at = cT(m.at || 0);
    m.dur = Math.max(0.01, m.dur != null ? m.dur : 2);
    m.ease = E(m.ease || "inOutSine");
    a.moves.push(m);
    a.dirty = true;
    return m;
  }
  function rectOf(target) {
    if (!target) return { x: 0, y: 0, w: cur().ww, h: cur().wh };
    if (target.rect) return target.rect;
    return { x: target.x || 0, y: target.y || 0, w: target.w || 10, h: target.h || 10 };
  }
  function fitZoom(r, fill, cover) {
    var a = cur();
    var zx = a.W / Math.max(1, r.w), zy = a.H / Math.max(1, r.h);
    return (cover ? Math.max(zx, zy) : Math.min(zx, zy)) * (fill || 0.9);
  }
  var sharedCamera = S.camera;
  var camApi = function (node, amount) { if (typeof sharedCamera === "function") return sharedCamera(node, amount); };
  /** Glide to world point (x,y) at zoom (1 = world px = screen px). */
  camApi.to = function (x, y, zoom, at, dur, opts) {
    opts = opts || {};
    addMove({ to: { x: x, y: y, z: Math.max(0.05, zoom || 1), r: opts.rot }, at: at, dur: dur, ease: opts.ease });
    return camApi;
  };
  /** Frame a rect / item. opts: fill (0.9), zoom (multiplier), cover, anchor [fx,fy], ease. */
  camApi.focus = function (target, at, dur, opts) {
    opts = opts || {};
    var r = rectOf(target);
    var z = fitZoom(r, opts.fill, opts.cover) * (opts.zoom || 1);
    var an = opts.anchor || [0.5, 0.5];
    addMove({ to: { x: r.x + r.w * an[0], y: r.y + r.h * an[1], z: z, r: opts.rot }, at: at, dur: dur, ease: opts.ease });
    return camApi;
  };
  /** Show the whole painting (zoom 1 / fit). */
  camApi.wide = function (at, dur, opts) {
    opts = opts || {};
    var a = cur();
    addMove({ to: { x: a.ww / 2, y: a.wh / 2, z: Math.min(a.W / a.ww, a.H / a.wh) * (opts.fill || 1), r: opts.rot || 0 }, at: at, dur: dur, ease: opts.ease });
    return camApi;
  };
  /** Ken Burns: cut to `from` {fx,fy,zoom} at `at` then drift to `to` over dur. Fractions of the world. */
  camApi.kenBurns = function (at, dur, opts) {
    opts = opts || {};
    var a = cur();
    var from = opts.from || { fx: 0.5, fy: 0.5, zoom: 1 }, to = opts.to || { fx: 0.5, fy: 0.5, zoom: 1.12 };
    var base = Math.min(a.W / a.ww, a.H / a.wh);
    if (opts.cut !== false) addMove({ to: { x: a.ww * from.fx, y: a.wh * from.fy, z: base * (from.zoom || 1), r: from.rot }, at: at, dur: 0.01 });
    addMove({ to: { x: a.ww * to.fx, y: a.wh * to.fy, z: base * (to.zoom || 1), r: to.rot }, at: at + 0.011, dur: dur || 5, ease: opts.ease || "inOutSine" });
    return camApi;
  };
  /** Follow fn(t) → {x,y,zoom}; blends in over `blend` s. */
  camApi.track = function (fn, at, blend, opts) {
    opts = opts || {};
    addMove({ track: function (t) { var p = fn(t); return { x: p.x, y: p.y, z: p.zoom || p.z || 1, r: p.rot }; }, at: at, dur: blend || 0.8, ease: opts.ease || "inOutSine" });
    return camApi;
  };
  camApi.shake = function (at, amp, dur) { cur().shakes.push({ at: cT(at), amp: amp != null ? amp : u(10), dur: dur || 0.5 }); return camApi; };
  camApi.drift = function (amount) { cur().drift = amount; return camApi; };
  camApi.state = function (t) { cur(); return camState(t == null ? V.time() : t); };
  camApi.toScreen = function (x, y, t) { cur(); var c = camState(t == null ? V.time() : t); return { x: A.W / 2 + (x - c.x) * c.z, y: A.H / 2 + (y - c.y) * c.z }; };
  S.camera = camApi;

  function frameUpdate(t) {
    var a = A;
    if (!a) return;
    var c = camState(t);
    var d = a.drift;
    var x = c.x, y = c.y, z = Math.max(c.z, 0.05), r = c.r;
    if (d) {
      x += (Math.sin(t * 0.19 + 0.7) * u(6) + Math.sin(t * 0.47) * u(2)) * d / z;
      y += (Math.cos(t * 0.15 + 1.3) * u(4) + Math.sin(t * 0.41 + 2) * u(1.4)) * d / z;
      z *= 1 + 0.005 * d * Math.sin(t * 0.12 + 0.4);
    }
    var ox = 0, oy = 0;
    for (var i = 0; i < a.shakes.length; i++) {
      var s = a.shakes[i], k = t - s.at;
      if (k >= 0 && k < s.dur) { var dec = Math.pow(1 - k / s.dur, 2); ox += Math.sin(k * 51) * s.amp * dec; oy += Math.cos(k * 43) * s.amp * dec * 0.8; }
    }
    // parallax: each layer sees the camera offset from the world centre scaled by its depth factor
    var cx0 = a.ww / 2, cy0 = a.wh / 2;
    for (var name in a.layers) {
      var L = a.layers[name];
      var ex = cx0 + (x - cx0) * L.k, ey = cy0 + (y - cy0) * L.k;
      L.wrap.style.transform = "translate(" + f2(a.W / 2 + ox) + "px," + f2(a.H / 2 + oy) + "px) rotate(" + r.toFixed(3) + "deg) scale(" + z.toFixed(4) + ") translate(" + f2(-ex) + "px," + f2(-ey) + "px)";
    }
    a.camNow = { x: x, y: y, z: z, r: r };
    // cull world text that is outside the frame (no stray text beyond the viewport)
    for (var q = 0; q < a.texts.length; q++) {
      var tx = a.texts[q], kk = tx.k;
      var sx = a.W / 2 + (tx.x - (cx0 + (x - cx0) * kk)) * z, sy = a.H / 2 + (tx.y - (cy0 + (y - cy0) * kk)) * z;
      var hw = tx.w * z / 2 + u(4), hh = tx.h * z / 2 + u(4);
      var off = sx - hw < 0 || sx + hw > a.W || sy - hh < 0 || sy + hh > a.H;
      if (off !== tx._off) { tx._off = off; tx.el.style.visibility = off ? "hidden" : ""; }
    }
    // world animations (soldiers, flags, smoke…)
    for (var j = 0; j < a.anims.length; j++) { try { a.anims[j](t); } catch (e) { if (!a.animErr) { a.animErr = 1; V.error("anim: " + (e && e.message)); } } }
    // screen fx
    var fr = Math.floor(t * 24);
    if (a.grain) a.grain.style.transform = "translate(" + Math.round(hash01(fr) * u(120)) + "px," + Math.round(hash01(fr + 99) * u(120)) + "px)";
    if (a.light) { var n = vnoise(t * 1.4, 5) * 0.5 + vnoise(t * 5.2, 11) * 0.5; a.light.style.opacity = (a.lightAmt * (0.5 + n * 0.3)).toFixed(3); }
    if (a.dust) {
      for (var k2 = 0; k2 < a.dust.length; k2++) {
        var D = a.dust[k2];
        var yy = ((D.y - t * D.v) % 1 + 1) % 1, xx = ((D.x + t * D.vx) % 1 + 1) % 1 + Math.sin(t * D.f + D.ph) * 0.02;
        var tw = 0.35 + 0.65 * vnoise(t * 0.7 + D.ph * 3, k2);
        D.e.style.transform = "translate(" + f1(xx * a.W) + "px," + f1(yy * a.H) + "px)";
        D.e.style.opacity = (D.o * tw).toFixed(3);
      }
    }
  }

  function buildFx(a, opts) {
    var fx = a.fx, W = a.W, H = a.H;
    if (opts.dust !== false) {
      a.dust = [];
      var r = V.makeRand(V.seed * 7 + 3);
      for (var i = 0; i < 18; i++) {
        var s = u(1.4 + r() * 3.2);
        var e = el("i.ph-mote", { parent: fx, style: { width: px(s), height: px(s) } });
        a.dust.push({ e: e, x: r(), y: r(), v: 0.004 + r() * 0.012, vx: 0.004 + r() * 0.01, f: 0.2 + r() * 0.5, ph: r() * 6, o: 0.2 + r() * 0.4 });
      }
    }
    if (opts.brush !== false) { var b = brushTex(); if (b) el("div.ph-brush", { parent: fx, style: { backgroundImage: "url(" + b + ")", backgroundSize: px(u(520)) + " " + px(u(520)) } }); }
    if (opts.grain !== false) { var g = weaveTex(); if (g) a.grain = el("div.ph-grain", { parent: fx, style: { inset: px(-u(130)), backgroundImage: "url(" + g + ")", backgroundSize: px(u(96)) + " " + px(u(96)) } }); }
    a.light = el("div.ph-light", { parent: fx });
    var sk = a.sky;
    a.light.style.background = "radial-gradient(ellipse at " + Math.round(sk.sun[0] * 100) + "% " + Math.round(sk.sun[1] * 100) + "%, " + rgba(sk.sunCol === "#E8E4D0" ? "#AAB4D0" : "#FFD9A0", 0.28) + " 0%, rgba(0,0,0,0) 55%)";
    if (opts.vignette !== false) el("div.ph-vignette", { parent: fx });
    if (opts.letterbox && V.isLandscape) { var lb = H * 0.07; el("div.ph-bar", { parent: fx, style: { top: "0", height: px(lb) } }); el("div.ph-bar", { parent: fx, style: { bottom: "0", height: px(lb) } }); }
  }

  // ───────────────────────── HUD overlays (screen space) ─────────────────────────
  function hudShade(where) {
    var a = cur();
    if (a["shade_" + where]) return;
    a["shade_" + where] = el("div.ph-shade.ph-shade-" + where, { parent: a.hud });
  }
  /**
   * Cream title banner in big dark serif caps (thumbnail style). opts: at, end, pos (top|bottom|center),
   * sub (small line under), color (dark|red|blue), size, slam (camera thump, default true), rot.
   */
  S.banner = function (text, opts) {
    opts = opts || {};
    var a = cur(), tl = a.tl, W = a.W, H = a.H;
    var at = cT(opts.at != null ? opts.at : 0.5);
    var pos = opts.pos || "top";
    var box = el("div.ph-banner.ph-banner-" + pos, { parent: a.hud });
    applyStyle(box, parchBg(C.cream, 0.28));
    box.style.transform = (pos === "center" ? "translate(-50%,-50%) " : "translateX(-50%) ") + "rotate(" + f2(opts.rot != null ? opts.rot : (pos === "center" ? -1.2 : -0.8)) + "deg)";
    var inner = el("div.ph-banner-in", { parent: box });
    var ti = el("div.ph-banner-text", { parent: inner });
    if (opts.color === "red") ti.classList.add("ph-red"); else if (opts.color === "blue") ti.classList.add("ph-blue");
    ti.appendChild(S.rich(str(text).toUpperCase()));
    var maxLines = pos === "center" ? (V.isPortrait ? 4 : 3) : 2;
    V.fit(ti, { maxLines: maxLines, min: u(30) });
    var sub = opts.sub ? el("div.ph-banner-sub", { parent: inner, text: plain(opts.sub) }) : null;
    if (sub) V.fit(sub, { maxLines: 2, min: u(16) });
    el("i.ph-banner-rule.ph-r1", { parent: box }); el("i.ph-banner-rule.ph-r2", { parent: box });
    tl.fromTo(box, { opacity: 0, scale: 1.25, y: pos === "bottom" ? u(30) : -u(30) }, { opacity: 1, scale: 1, y: 0 }, { at: at, dur: 0.42, ease: "outCubic" });
    tl.fromTo(ti, { letterSpacing: "0.18em" }, { letterSpacing: "0.06em" }, { at: at, dur: 0.9, ease: "outCubic" });
    if (sub) tl.fromTo(sub, { opacity: 0 }, { opacity: 1 }, { at: at + 0.35, dur: 0.6 });
    if (opts.slam !== false) camApi.shake(at + 0.3, u(7), 0.45);
    if (opts.end != null && opts.end < V.duration - 0.3) tl.to(box, { opacity: 0, y: -u(16) }, { at: cT(opts.end), dur: 0.45, ease: "inCubic" });
    return { el: box, text: ti, at: at };
  };

  /** "50,000 VS 250,000" troop-count banners. a/b: { count, label, faction }. opts: at, end, pos (top|bottom|center), countDur. */
  S.versus = function (a0, b0, opts) {
    opts = opts || {};
    var a = cur(), tl = a.tl;
    var at = cT(opts.at != null ? opts.at : 0.5);
    var pos = opts.pos || "top";
    var row = el("div.ph-vs.ph-vs-" + pos, { parent: a.hud });
    var FA = fac(a0.faction || "redcoat"), FB = fac(b0.faction || "bluecoat");
    function side(spec, F, left) {
      var box = el("div.ph-vs-side" + (left ? ".ph-vs-l" : ".ph-vs-r"), { parent: row });
      applyStyle(box, parchBg(C.cream, 0.25));
      el("i.ph-vs-band", { parent: box, style: { background: F.coat } });
      var num = el("div.ph-vs-num", { parent: box });
      var n = typeof spec.count === "number" ? spec.count : parseFloat(str(spec.count).replace(/[^0-9.]/g, "")) || 0;
      var isText = typeof spec.count === "string" && !/^[\d,.\s]+$/.test(spec.count);
      num.textContent = isText ? str(spec.count).toUpperCase() : V.format(n, 0, true);
      var lab = el("div.ph-vs-label", { parent: box, text: plain(spec.label || F.name).toUpperCase() });
      V.fit(num, { maxLines: 1, min: u(22) }); V.fit(lab, { maxLines: 1, min: u(12) });
      tl.fromTo(box, { opacity: 0, x: (left ? -1 : 1) * u(80), scale: 1.15 }, { opacity: 1, x: 0, scale: 1 }, { at: at + (left ? 0 : 0.18), dur: 0.5, ease: "outCubic" });
      if (!isText && n > 0) tl.fromTo(num, { text: 0 }, { text: n, decimals: 0 }, { at: at + (left ? 0 : 0.18) + 0.1, dur: opts.countDur || 1.4, ease: "outExpo" });
      return box;
    }
    var L = side(a0, FA, true);
    var vs = el("div.ph-vs-mid", { parent: row, text: "VS" });
    var R = side(b0, FB, false);
    tl.fromTo(vs, { opacity: 0, scale: 2.2, rotate: -20 }, { opacity: 1, scale: 1, rotate: -8 }, { at: at + 0.32, dur: 0.45, ease: "outBack" });
    camApi.shake(at + 0.5, u(8), 0.45);
    if (opts.end != null && opts.end < V.duration - 0.3) tl.to(row, { opacity: 0 }, { at: cT(opts.end), dur: 0.45, ease: "inCubic" });
    return { el: row, left: L, right: R, at: at };
  };

  /** Place / date lower-third on a parchment strip. opts: sub, at, end, align (left|center). */
  S.lowerThird = function (title, opts) {
    opts = opts || {};
    var a = cur(), tl = a.tl;
    hudShade("bottom");
    var at = cT(opts.at != null ? opts.at : 0.6);
    var center = opts.align === "center" || V.isPortrait;
    var box = el("div.ph-lt" + (center ? ".ph-lt-c" : ""), { parent: a.hud });
    applyStyle(box, parchBg(C.cream, 0.22));
    var ti = el("div.ph-lt-title", { parent: box });
    ti.appendChild(S.rich(str(title).toUpperCase()));
    var rule = el("i.ph-lt-rule", { parent: box });
    var sub = opts.sub ? el("div.ph-lt-sub", { parent: box, text: plain(opts.sub) }) : null;
    V.fit(ti, { maxLines: 2, min: u(20) });
    if (sub) V.fit(sub, { maxLines: 2, min: u(14) });
    tl.fromTo(box, { opacity: 0, x: center ? 0 : -u(40), y: center ? u(20) : 0 }, { opacity: 1, x: 0, y: 0 }, { at: at, dur: 0.6, ease: "outCubic" });
    tl.fromTo(rule, { scaleX: 0 }, { scaleX: 1 }, { at: at + 0.2, dur: 0.8, ease: "inOutCubic" });
    if (sub) tl.fromTo(sub, { opacity: 0, y: u(8) }, { opacity: 1, y: 0 }, { at: at + 0.4, dur: 0.7, ease: "outCubic" });
    if (opts.end != null && opts.end < V.duration - 0.3) tl.to(box, { opacity: 0 }, { at: cT(opts.end), dur: 0.5, ease: "inOutSine" });
    return { el: box, title: ti, sub: sub, at: at };
  };

  /** Italic quotation plate. opts: author, at, end, size, pos (center|bottom). */
  S.quote = function (text, opts) {
    opts = opts || {};
    var a = cur(), tl = a.tl;
    var at = cT(opts.at != null ? opts.at : 0.5);
    var box = el("div.ph-quote.ph-quote-" + (opts.pos || "center"), { parent: a.hud });
    var mark = el("div.ph-quote-mark", { parent: box, text: "“" });
    var q = el("div.ph-quote-text", { parent: box });
    q.appendChild(S.rich(text));
    if (opts.size) q.style.fontSize = px(opts.size);
    V.fit(q, { maxLines: V.isPortrait ? 8 : 5, min: u(22) });
    var who = opts.author ? el("div.ph-quote-who", { parent: box, text: "— " + plain(opts.author) }) : null;
    if (who) V.fit(who, { maxLines: 2, min: u(14) });
    tl.fromTo(box, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.8, ease: "inOutSine" });
    tl.fromTo(mark, { opacity: 0, y: -u(20) }, { opacity: 0.8, y: 0 }, { at: at, dur: 0.8, ease: "outCubic" });
    // word-by-word reveal in sync with speech when the quote is spoken
    var spans = S.splitWords(q);
    if (spans.length) {
      var t0 = V.find(plain(text).split(/\s+/).slice(0, 2).join(" "));
      if (t0 == null) t0 = V.find(plain(text).split(/\s+/)[0]);
      if (t0 != null) {
        var tEnd = V.findEnd(plain(text).split(/\s+/).slice(-1)[0], t0);
        S.speakWords(tl, spans, { start: Math.max(at, t0 - 0.1), end: tEnd != null ? tEnd : Math.min(V.duration - 0.5, t0 + 0.36 * spans.length), dim: 0.12 });
      } else tl.fromTo(spans, { opacity: 0, y: u(6) }, { opacity: 1, y: 0 }, { at: at + 0.2, dur: 0.4, stagger: 0.06, ease: "outCubic" });
    }
    if (who) tl.fromTo(who, { opacity: 0, x: u(20) }, { opacity: 1, x: 0 }, { at: opts.authorAt != null ? cT(opts.authorAt) : at + 1.2 + spans.length * 0.06, dur: 0.8, ease: "outCubic" });
    if (opts.end != null && opts.end < V.duration - 0.3) tl.to(box, { opacity: 0 }, { at: cT(opts.end), dur: 0.5 });
    return { el: box, text: q, at: at };
  };

  /** Big centred chapter title with ornaments. opts: kicker, sub, date, at, titleAt. Returns { el, land }. */
  S.titleCard = function (title, opts) {
    opts = opts || {};
    var a = cur(), tl = a.tl;
    var at = cT(opts.at != null ? opts.at : 0.4);
    var box = el("div.ph-tc", { parent: a.hud });
    var kick = opts.kicker ? el("div.ph-tc-kick", { parent: box, text: plain(opts.kicker).toUpperCase() }) : null;
    var orn1 = el("div.ph-tc-orn", { parent: box, text: "❧ ———— ❦ ———— ❧" });
    var ti = el("div.ph-tc-title", { parent: box });
    applyStyle(ti, parchBg(C.cream, 0.26));
    var tin = el("div.ph-tc-title-in", { parent: ti });
    tin.appendChild(S.rich(str(title).toUpperCase()));
    V.fit(tin, { maxLines: V.isPortrait ? 4 : 3, min: u(34) });
    var orn2 = el("div.ph-tc-orn", { parent: box, text: "❧ ———— ❦ ———— ❧" });
    var sub = opts.sub ? el("div.ph-tc-sub", { parent: box, text: plain(opts.sub) }) : null;
    if (sub) V.fit(sub, { maxLines: 2, min: u(18) });
    var date = opts.date ? el("div.ph-tc-date", { parent: box, text: plain(opts.date).toUpperCase() }) : null;
    if (date) V.fit(date, { maxLines: 1, min: u(14) });
    var tt = opts.titleAt != null ? Math.max(at + 0.2, opts.titleAt) : at + 0.5;
    if (kick) tl.fromTo(kick, { opacity: 0, letterSpacing: "0.7em" }, { opacity: 1, letterSpacing: "0.4em" }, { at: at, dur: 1.4, ease: "outCubic" });
    tl.fromTo([orn1, orn2], { opacity: 0, scaleX: 0.2 }, { opacity: 0.9, scaleX: 1 }, { at: at + 0.2, dur: 1.1, ease: "outCubic" });
    tl.fromTo(ti, { opacity: 0, scale: 1.3, rotate: -3 }, { opacity: 1, scale: 1, rotate: -1 }, { at: tt, dur: 0.5, ease: "outCubic" });
    camApi.shake(tt + 0.35, u(8), 0.5);
    if (sub) tl.fromTo(sub, { opacity: 0, y: u(12) }, { opacity: 1, y: 0 }, { at: tt + 0.7, dur: 1, ease: "outCubic" });
    if (date) tl.fromTo(date, { opacity: 0 }, { opacity: 1 }, { at: tt + 1.1, dur: 0.9 });
    return { el: box, title: ti, land: tt + 0.5 };
  };

  /** Fade the frame from / to black (or warm parchment with { paper:true }). */
  S.fadeIn = function (at, dur, opts) {
    var a = cur();
    var b = el("div.ph-black" + (opts && opts.paper ? ".ph-paperfade" : ""), { parent: a.fx });
    a.tl.fromTo(b, { opacity: 1 }, { opacity: 0 }, { at: cT(at || 0), dur: dur || 1.2, ease: "inOutSine" });
    return b;
  };
  S.fadeOut = function (at, dur) {
    var a = cur();
    var b = el("div.ph-black", { parent: a.fx });
    a.tl.fromTo(b, { opacity: 0 }, { opacity: 1 }, { at: cT(at), dur: dur || 1, ease: "inOutSine" });
    return b;
  };
  /** Compatibility with the shared helpers: painting + a padded flex column on top (screen space). */
  S.stage = function (root, opts) {
    opts = opts || {};
    if (!A || (root && A.root !== root)) S.scene(root || V.root(), { sky: opts.sky, terrain: opts.terrain });
    var st = el("div.v-stage.ph-stage", { parent: cur().hud });
    if (opts.align === "top") st.classList.add("v-top");
    return st;
  };

  // ───────────────────────── painting primitives ─────────────────────────
  function P(g, d, fill, extra) { var a = { d: d, fill: fill || "none" }; if (extra) for (var k in extra) a[k] = extra[k]; return sv("path", a, g); }
  function R(g, x, y, w, h, fill, extra) { var a = { x: f1(x), y: f1(y), width: f1(Math.max(0, w)), height: f1(Math.max(0, h)), fill: fill }; if (extra) for (var k in extra) a[k] = extra[k]; return sv("rect", a, g); }
  function Ci(g, cx, cy, r, fill, extra) { var a = { cx: f1(cx), cy: f1(cy), r: f1(Math.max(0, r)), fill: fill }; if (extra) for (var k in extra) a[k] = extra[k]; return sv("circle", a, g); }
  function El(g, cx, cy, rx, ry, fill, extra) { var a = { cx: f1(cx), cy: f1(cy), rx: f1(Math.max(0, rx)), ry: f1(Math.max(0, ry)), fill: fill }; if (extra) for (var k in extra) a[k] = extra[k]; return sv("ellipse", a, g); }
  function Ln(g, x1, y1, x2, y2, stroke, w, extra) { var a = { x1: f1(x1), y1: f1(y1), x2: f1(x2), y2: f1(y2), stroke: stroke, "stroke-width": f2(w || 1), "stroke-linecap": "round" }; if (extra) for (var k in extra) a[k] = extra[k]; return sv("line", a, g); }
  function G(parent, attrs) { return sv("g", attrs || null, parent); }
  S.draw = { path: P, rect: R, circle: Ci, ellipse: El, line: Ln, group: G };
  function lgrad(defs, stops, x1, y1, x2, y2) {
    var id = nid("g");
    var gr = sv("linearGradient", { id: id, x1: x1 != null ? x1 : 0, y1: y1 != null ? y1 : 0, x2: x2 != null ? x2 : 0, y2: y2 != null ? y2 : 1 }, defs);
    stops.forEach(function (s) { sv("stop", { offset: s[0], "stop-color": s[1], "stop-opacity": s[2] != null ? s[2] : 1 }, gr); });
    return "url(#" + id + ")";
  }
  function rgrad(defs, stops, cx, cy, r, fx, fy) {
    var id = nid("r");
    var gr = sv("radialGradient", { id: id, cx: cx != null ? cx : 0.5, cy: cy != null ? cy : 0.5, r: r != null ? r : 0.5, fx: fx != null ? fx : cx, fy: fy != null ? fy : cy }, defs);
    stops.forEach(function (s) { sv("stop", { offset: s[0], "stop-color": s[1], "stop-opacity": s[2] != null ? s[2] : 1 }, gr); });
    return "url(#" + id + ")";
  }
  S.gradients = { linear: lgrad, radial: rgrad };

  /** Brushy dabs scattered inside a rect (painterly texture pass). */
  function dabs(g, x, y, w, h, cols, n, size, r, op) {
    var grp = G(g, { class: "ph-dabs" });
    for (var i = 0; i < n; i++) {
      var cx = x + r() * w, cy = y + r() * h, L = size * (0.5 + r()), T = L * (0.18 + r() * 0.22);
      El(grp, cx, cy, L, T, cols[Math.floor(r() * cols.length)], { opacity: ((op || 0.16) * (0.5 + r())).toFixed(3), transform: "rotate(" + f1((r() - 0.5) * 24) + " " + f1(cx) + " " + f1(cy) + ")" });
    }
    return grp;
  }
  S.dabs = dabs;
  /** Directional brush strokes (long thin dabs at `angle` degrees) scattered in a rect. */
  function strokes(g, x, y, w, h, cols, n, len, angle, r, op) {
    var grp = G(g, { class: "ph-strokes" });
    for (var i = 0; i < n; i++) {
      var cx = x + r() * w, cy = y + r() * h, L = len * (0.4 + r() * 1.2), T = L * (0.04 + r() * 0.05);
      El(grp, cx, cy, L, T, cols[Math.floor(r() * cols.length)], { opacity: ((op || 0.14) * (0.4 + r())).toFixed(3), transform: "rotate(" + f1(angle + (r() - 0.5) * 10) + " " + f1(cx) + " " + f1(cy) + ")" });
    }
    return grp;
  }
  S.strokes = strokes;
  /** A ridge polygon from x0..x1 around baseline y closed to `bottom`; amp = hill height. */
  function ridgePts(x0, x1, y, amp, r, steps, rough2) {
    var pts = [], n = steps || 14, ph = r() * 10, ph2 = r() * 10, ph3 = r() * 10;
    for (var i = 0; i <= n; i++) {
      var x = lerp(x0, x1, i / n);
      var yy = y - (Math.abs(Math.sin(i * 0.8 + ph)) * 0.7 + Math.sin(i * 2.1 + ph2) * 0.2 + Math.sin(i * 4.3 + ph3) * (rough2 || 0.08)) * amp;
      pts.push([x, yy]);
    }
    return pts;
  }
  function ridge(g, x0, x1, y, amp, bottom, fill, r, steps, extra) {
    var pts = ridgePts(x0, x1, y, amp, r, steps);
    var d = smoothPath(pts) + " L" + f1(x1) + " " + f1(bottom) + " L" + f1(x0) + " " + f1(bottom) + " Z";
    return P(g, d, fill, extra);
  }
  S.ridge = ridge;
  /** Jagged mountain range. */
  function mountains(g, x0, x1, y, amp, bottom, fill, snowCol, r, n) {
    var pts = [[x0, bottom]], peaks = [];
    var count = n || 7;
    for (var i = 0; i <= count; i++) {
      var x = lerp(x0, x1, i / count), h = amp * (0.45 + r() * 0.55);
      pts.push([x, y - h]);
      peaks.push([x, y - h, h]);
      if (i < count) pts.push([lerp(x0, x1, (i + 0.5) / count) + (r() - 0.5) * (x1 - x0) / count * 0.5, y - amp * (0.1 + r() * 0.3)]);
    }
    pts.push([x1, bottom]);
    P(g, poly(pts), fill);
    if (snowCol) peaks.forEach(function (p) { if (p[2] > amp * 0.6) P(g, poly([[p[0], p[1]], [p[0] + p[2] * 0.22, p[1] + p[2] * 0.3], [p[0] + p[2] * 0.05, p[1] + p[2] * 0.26], [p[0] - p[2] * 0.08, p[1] + p[2] * 0.34], [p[0] - p[2] * 0.2, p[1] + p[2] * 0.28]]), snowCol, { opacity: 0.85 }); });
  }

  /** Painterly tree. kind: round | conifer | poplar | bare | palm. */
  function tree(g, x, y, h, col, r, kind) {
    var grp = G(g, { class: "ph-tree" });
    var trunk = shade(col, -0.55), dark = shade(col, -0.3), lite = shade(col, 0.25);
    kind = kind || "round";
    if (kind === "conifer") {
      Ln(grp, x, y, x, y - h * 0.3, trunk, h * 0.06);
      for (var i = 0; i < 4; i++) { var ty = y - h * (0.15 + i * 0.22), tw = h * (0.34 - i * 0.07); P(grp, poly([[x - tw, ty], [x, ty - h * 0.3], [x + tw, ty]]), i % 2 ? dark : col); }
      P(grp, poly([[x - h * 0.05, y - h * 0.6], [x, y - h * 0.98], [x + h * 0.14, y - h * 0.55]]), lite, { opacity: 0.55 });
    } else if (kind === "poplar") {
      Ln(grp, x, y, x, y - h * 0.25, trunk, h * 0.05);
      El(grp, x, y - h * 0.6, h * 0.12, h * 0.42, dark);
      El(grp, x - h * 0.03, y - h * 0.62, h * 0.08, h * 0.36, col);
      El(grp, x + h * 0.03, y - h * 0.68, h * 0.04, h * 0.22, lite, { opacity: 0.6 });
    } else if (kind === "bare") {
      Ln(grp, x, y, x, y - h * 0.55, trunk, h * 0.06);
      for (var b = 0; b < 5; b++) { var by = y - h * (0.35 + r() * 0.3), ang = (r() - 0.5) * 1.6 - Math.PI / 2; Ln(grp, x, by, x + Math.cos(ang) * h * 0.35, by + Math.sin(ang) * h * 0.35, trunk, h * 0.03); }
    } else if (kind === "palm") {
      P(grp, "M" + f1(x) + " " + f1(y) + " Q" + f1(x + h * 0.1) + " " + f1(y - h * 0.5) + " " + f1(x + h * 0.05) + " " + f1(y - h * 0.9), "none", { stroke: trunk, "stroke-width": f1(h * 0.05) });
      for (var p = 0; p < 6; p++) { var pa = -Math.PI * 0.9 + p * 0.36; P(grp, "M" + f1(x + h * 0.05) + " " + f1(y - h * 0.9) + " q" + f1(Math.cos(pa) * h * 0.25) + " " + f1(Math.sin(pa) * h * 0.25) + " " + f1(Math.cos(pa) * h * 0.42) + " " + f1(Math.sin(pa) * h * 0.42 + h * 0.18), "none", { stroke: p % 2 ? col : dark, "stroke-width": f1(h * 0.045), "stroke-linecap": "round" }); }
    } else {
      Ln(grp, x, y, x + h * 0.02, y - h * 0.4, trunk, h * 0.07);
      var n = 4 + Math.floor(r() * 3);
      for (var k = 0; k < n; k++) { var cx = x + (r() - 0.5) * h * 0.5, cy = y - h * (0.5 + r() * 0.35); El(grp, cx, cy, h * (0.18 + r() * 0.14), h * (0.14 + r() * 0.12), k === 0 ? dark : k < n - 1 ? col : lite, { opacity: k === n - 1 ? 0.55 : 1 }); }
    }
    return grp;
  }
  S.tree = tree;
  /** Forest band along y (baseline) between x0..x1. */
  function forest(g, x0, x1, y, h, col, r, n, kind) {
    var grp = G(g, { class: "ph-forest" });
    El(grp, (x0 + x1) / 2, y - h * 0.3, (x1 - x0) / 2, h * 0.45, shade(col, -0.25));
    var count = n || Math.max(4, Math.round((x1 - x0) / (h * 0.5)));
    for (var i = 0; i < count; i++) tree(grp, lerp(x0, x1, (i + r() * 0.8) / count), y - r() * h * 0.2, h * (0.7 + r() * 0.6), i % 3 ? col : shade(col, 0.1), r, kind || (r() > 0.6 ? "conifer" : "round"));
    return grp;
  }
  S.forest = forest;

  /** Castle / fortress: curtain wall with crenellations, towers, gate, flag. Base-left at (x,y), width w, wall height h. */
  function fortress(g, x, y, w, h, opts, r) {
    opts = opts || {};
    var stone = opts.stone || "#A89880", dark = shade(stone, -0.35), lite = shade(stone, 0.18), roofC = opts.roof || "#7A3A2A";
    var grp = G(g, { class: "ph-fort" });
    var towers = opts.towers || 3, tw = w * 0.11, th = h * 1.55;
    // wall
    R(grp, x, y - h, w, h, stone);
    var m = h * 0.12;
    for (var cx = x; cx < x + w; cx += m * 2) R(grp, cx, y - h - m, m, m, stone);
    for (var s = 0; s < 40; s++) R(grp, x + r() * w, y - h + r() * h, w * 0.03, h * 0.05, s % 2 ? dark : lite, { opacity: 0.35 });
    R(grp, x, y - h * 0.3, w, h * 0.3, dark, { opacity: 0.3 });
    // gate
    if (opts.gate !== false) { var gw = h * 0.42, gx = x + w * 0.5 - gw / 2; P(grp, "M" + f1(gx) + " " + f1(y) + " v" + f1(-h * 0.45) + " a" + f1(gw / 2) + " " + f1(gw / 2) + " 0 0 1 " + f1(gw) + " 0 v" + f1(h * 0.45) + " Z", "#2A1F14"); for (var gi = 0; gi < 4; gi++) Ln(grp, gx + gw * (0.2 + gi * 0.2), y, gx + gw * (0.2 + gi * 0.2), y - h * 0.5, "#5A4A36", h * 0.02); }
    // towers
    for (var i = 0; i < towers; i++) {
      var tx = x + (w - tw) * (towers === 1 ? 0.5 : i / (towers - 1));
      R(grp, tx, y - th, tw, th, stone);
      R(grp, tx + tw * 0.7, y - th, tw * 0.3, th, dark, { opacity: 0.4 });
      for (var c = 0; c < 4; c++) R(grp, tx + tw * c * 0.27, y - th - m, tw * 0.14, m, stone);
      if (opts.roofs) P(grp, poly([[tx - tw * 0.1, y - th - m], [tx + tw / 2, y - th - m - tw * 1.1], [tx + tw * 1.1, y - th - m]]), roofC);
      R(grp, tx + tw * 0.4, y - th * 0.7, tw * 0.18, th * 0.16, "#1E150D");
    }
    if (opts.flag !== false) grp._flagAt = { x: x + w * 0.5, y: y - th - m };
    return grp;
  }
  S.fortress = fortress;
  /** Row of houses (town / village). */
  function town(g, x, y, w, h, opts, r) {
    opts = opts || {};
    var grp = G(g, { class: "ph-town" });
    var wall = opts.wall || "#CDBA95", roof = opts.roof || "#7A4A34", n = opts.count || Math.max(3, Math.round(w / (h * 0.9)));
    for (var i = 0; i < n; i++) {
      var hw = w / n * (0.7 + r() * 0.3), hx = x + (w / n) * i, hh = h * (0.5 + r() * 0.5);
      R(grp, hx, y - hh, hw, hh, i % 3 ? wall : shade(wall, -0.15));
      P(grp, poly([[hx - hw * 0.08, y - hh], [hx + hw / 2, y - hh - hh * 0.55], [hx + hw * 1.08, y - hh]]), i % 2 ? roof : shade(roof, -0.2));
      R(grp, hx + hw * 0.4, y - hh * 0.5, hw * 0.2, hh * 0.25, "#3A2A1A", { opacity: 0.8 });
    }
    if (opts.church !== false) { var sx = x + w * (0.3 + r() * 0.4), sh = h * 1.6; R(grp, sx, y - sh, h * 0.5, sh, shade(wall, -0.05)); P(grp, poly([[sx - h * 0.05, y - sh], [sx + h * 0.25, y - sh - h * 0.8], [sx + h * 0.55, y - sh]]), shade(roof, -0.3)); Ln(grp, sx + h * 0.25, y - sh - h * 0.8, sx + h * 0.25, y - sh - h * 1.0, "#3A2A1A", h * 0.03); Ln(grp, sx + h * 0.19, y - sh - h * 0.93, sx + h * 0.31, y - sh - h * 0.93, "#3A2A1A", h * 0.03); }
    return grp;
  }
  S.town = town;
  /** Military camp: rows of tents. */
  function camp(g, x, y, w, rows, size, col, r) {
    var grp = G(g, { class: "ph-camp" });
    for (var rr = 0; rr < rows; rr++) {
      var n = Math.max(2, Math.round(w / (size * 1.6))), ty = y - rr * size * 0.75, s = size * (1 - rr * 0.12);
      for (var i = 0; i < n; i++) { var tx = x + (i + (rr % 2) * 0.5) * (w / n) + (r() - 0.5) * s * 0.3; P(grp, poly([[tx - s * 0.7, ty], [tx, ty - s], [tx + s * 0.7, ty]]), rr % 2 ? col : shade(col, -0.12)); P(grp, poly([[tx - s * 0.15, ty], [tx, ty - s * 0.45], [tx + s * 0.15, ty]]), shade(col, -0.5)); }
    }
    return grp;
  }
  S.camp = camp;
  /** Windmill with turning sails. */
  function windmill(g, x, y, h, r) {
    var grp = G(g, { class: "ph-mill" });
    P(grp, poly([[x - h * 0.18, y], [x - h * 0.1, y - h * 0.7], [x + h * 0.1, y - h * 0.7], [x + h * 0.18, y]]), "#8A7456");
    P(grp, poly([[x - h * 0.14, y - h * 0.7], [x, y - h * 0.86], [x + h * 0.14, y - h * 0.7]]), "#4A3A2A");
    var sails = G(grp, { class: "ph-sails" });
    for (var i = 0; i < 4; i++) { var a = (i * Math.PI) / 2; Ln(sails, x, y - h * 0.72, x + Math.cos(a) * h * 0.42, y - h * 0.72 + Math.sin(a) * h * 0.42, "#3A2A1A", h * 0.02); P(sails, poly([[x + Math.cos(a) * h * 0.08, y - h * 0.72 + Math.sin(a) * h * 0.08], [x + Math.cos(a) * h * 0.4, y - h * 0.72 + Math.sin(a) * h * 0.4], [x + Math.cos(a) * h * 0.4 + Math.cos(a + Math.PI / 2) * h * 0.09, y - h * 0.72 + Math.sin(a) * h * 0.4 + Math.sin(a + Math.PI / 2) * h * 0.09], [x + Math.cos(a) * h * 0.08 + Math.cos(a + Math.PI / 2) * h * 0.09, y - h * 0.72 + Math.sin(a) * h * 0.08 + Math.sin(a + Math.PI / 2) * h * 0.09]]), "#E6D8B8", { opacity: 0.85 }); }
    cur().anims.push(function (t) { sails.setAttribute("transform", "rotate(" + f1(t * 22) + " " + f1(x) + " " + f1(y - h * 0.72) + ")"); });
    return grp;
  }
  S.windmill = windmill;

  // ───────────────────────── sky ─────────────────────────
  function paintSky(a, opts) {
    var L = a.layers.sky, g = L.g, defs = L.defs, sk = a.sky, r = rng("sky");
    var W = a.ww, H = a.wh, hz = a.horizon;
    R(g, a.bx, a.by, a.bw, a.bh, lgrad(defs, [[0, sk.top], [0.55, sk.mid], [1, sk.hor]], 0, 0, 0, 1));
    // sun / moon glow
    var sx = W * sk.sun[0], sy = H * sk.sun[1];
    if (sk.moon) { Ci(g, sx, sy, Math.min(W, H) * 0.045, "#EDE8D8"); Ci(g, sx, sy, Math.min(W, H) * 0.14, rgrad(defs, [[0, "#C8C8D8", 0.35], [1, "#C8C8D8", 0]])); }
    else { Ci(g, sx, sy, Math.max(W, H) * 0.55, rgrad(defs, [[0, sk.sunCol, 0.95], [0.18, mix(sk.sunCol, sk.mid, 0.3), 0.55], [0.5, sk.mid, 0.2], [1, sk.top, 0]])); Ci(g, sx, sy, Math.min(W, H) * 0.045, "#FFFBE8", { opacity: 0.95 }); }
    // god rays (painterly light streaks)
    if (!sk.moon && a.skyId !== "storm" && a.skyId !== "noon") {
      var rays = G(g, { opacity: 0.22 });
      for (var i = 0; i < 9; i++) { var ang = Math.PI * 0.35 + (i / 8) * Math.PI * 0.8 + (r() - 0.5) * 0.1, len = Math.max(W, H) * (0.9 + r() * 0.5), wdt = 0.02 + r() * 0.03; P(rays, poly([[sx, sy], [sx + Math.cos(ang - wdt) * len, sy + Math.sin(ang - wdt) * len], [sx + Math.cos(ang + wdt) * len, sy + Math.sin(ang + wdt) * len]]), sk.sunCol, { opacity: (0.3 + r() * 0.5).toFixed(2) }); }
    }
    // sky brushwork: long horizontal strokes + diagonal dabs toward the light
    strokes(g, a.bx, a.by, a.bw, hz - a.by, [sk.mid, sk.hor, mix(sk.mid, sk.sunCol, 0.5), sk.top], 220, Math.max(W, H) * 0.16, 0, r, 0.16);
    dabs(g, a.bx, a.by, a.bw, (hz - a.by) * 0.7, [sk.top, mix(sk.top, sk.cloudSh, 0.5), mix(sk.mid, sk.sunCol, 0.4)], 90, Math.max(W, H) * 0.07, r, 0.14);
    // dramatic backlit cloud masses
    a.clouds = [];
    var nC = a.skyId === "storm" ? 8 : a.skyId === "noon" ? 4 : 6;
    var litC = mix(sk.cloud, sk.sunCol, 0.6), shC = mix(sk.cloudSh, sk.top, 0.3);
    for (var c = 0; c < nC; c++) {
      var cx = a.bx + r() * a.bw, cy = a.by + (hz - a.by) * (0.06 + r() * 0.55), s = Math.min(W, H) * (0.1 + r() * 0.16);
      var toSun = sx > cx ? 1 : -1, cg = G(g, { class: "ph-cloud" });
      var pieces = 6 + Math.floor(r() * 5), pts = [];
      for (var k = 0; k < pieces; k++) { pts.push([cx + (k - pieces / 2) * s * 0.5 + (r() - 0.5) * s * 0.3, cy - Math.sin((k / (pieces - 1)) * Math.PI) * s * 0.55 + (r() - 0.5) * s * 0.2, s * (0.45 + r() * 0.5)]); }
      // shadowed underbelly
      pts.forEach(function (q) { El(cg, q[0], q[1] + q[2] * 0.3, q[2] * 1.15, q[2] * 0.38, shC, { opacity: 0.8 }); });
      // body
      pts.forEach(function (q) { El(cg, q[0], q[1], q[2] * 1.0, q[2] * 0.46, sk.cloud, { opacity: 0.88 }); });
      // lit rim toward the sun
      pts.forEach(function (q) { El(cg, q[0] + toSun * q[2] * 0.3, q[1] - q[2] * 0.14, q[2] * 0.7, q[2] * 0.2, litC, { opacity: 0.85 }); El(cg, q[0] - toSun * q[2] * 0.2, q[1] + q[2] * 0.1, q[2] * 0.5, q[2] * 0.16, shC, { opacity: 0.5 }); });
      // brushy texture inside the mass
      for (var dq = 0; dq < 14; dq++) { var q2 = pts[Math.floor(r() * pts.length)]; El(cg, q2[0] + (r() - 0.5) * q2[2], q2[1] + (r() - 0.5) * q2[2] * 0.6, q2[2] * (0.2 + r() * 0.3), q2[2] * 0.08, dq % 2 ? litC : shC, { opacity: 0.35, transform: "rotate(" + f1((r() - 0.5) * 30) + " " + f1(q2[0]) + " " + f1(q2[1]) + ")" }); }
      El(cg, cx, cy + s * 0.45, s * pieces * 0.3, s * 0.1, shC, { opacity: 0.5 });
      a.clouds.push({ el: cg, v: (0.4 + r() * 0.8) * (r() > 0.3 ? 1 : -1) * u(3) });
    }
    a.anims.push(function (t) { for (var i = 0; i < a.clouds.length; i++) a.clouds[i].el.setAttribute("transform", "translate(" + f1(a.clouds[i].v * t) + " 0)"); });
    // haze band at the horizon
    R(g, a.bx, hz - H * 0.12, a.bw, H * 0.22, lgrad(defs, [[0, sk.hor, 0], [0.6, sk.hor, 0.7], [1, sk.hor, 0.2]]));
  }

  // ───────────────────────── landscape (fills far/mid/ground/near layers) ─────────────────────────
  /** Paint the default landscape for the world's terrain + sky. opts: road, water, fort, town, camp, mill, treeline. */
  S.landscape = function (opts) {
    opts = opts || {};
    var a = cur(), r = rng("land" + a.terrain), pal = a.pal, sk = a.sky;
    var W = a.ww, H = a.wh, hz = a.horizon, M = Math.min(W, H);
    paintSky(a, opts);
    var far = a.layers.far.g, mid = a.layers.mid.g, gnd = a.layers.ground.g, near = a.layers.near.g, dG = a.layers.ground.defs, dF = a.layers.far.defs;
    var T = a.terrain, snow = T === "snow" || sk.snow;
    // far: distant range, hazy
    var farCol = mix(pal.far, sk.hor, 0.45), farCol2 = mix(pal.far, sk.hor, 0.25);
    if (T === "mountains" || T === "snow") {
      mountains(far, a.bx, a.bx + a.bw, hz + H * 0.01, H * 0.3, hz + H * 0.3, farCol, snow || T === "mountains" ? mix("#F2F2EE", sk.hor, 0.3) : null, r, 8);
      mountains(far, a.bx, a.bx + a.bw, hz + H * 0.03, H * 0.18, hz + H * 0.3, farCol2, null, r, 11);
    } else if (T === "desert") {
      ridge(far, a.bx, a.bx + a.bw, hz + H * 0.01, H * 0.06, hz + H * 0.3, farCol, r, 16);
    } else if (T === "coast") {
      R(far, a.bx, hz - H * 0.02, a.bw, H * 0.12, lgrad(dF, [[0, mix("#5C86A6", sk.hor, 0.5)], [1, "#3E6F92"]]));
      for (var wv = 0; wv < 26; wv++) Ln(far, a.bx + r() * a.bw, hz + r() * H * 0.09, a.bx + r() * a.bw, hz + r() * H * 0.09, sk.hor, M * 0.003, { opacity: 0.5 });
      ridge(far, a.bx, a.bx + a.bw * 0.45, hz + H * 0.005, H * 0.08, hz + H * 0.02, farCol, r, 8);
    } else {
      ridge(far, a.bx, a.bx + a.bw, hz + H * 0.01, H * (T === "hills" ? 0.17 : 0.09), hz + H * 0.3, farCol, r, 12);
      ridge(far, a.bx, a.bx + a.bw, hz + H * 0.025, H * (T === "hills" ? 0.1 : 0.05), hz + H * 0.3, farCol2, r, 18);
    }
    if (opts.town || T === "fields" && r() > 0.5) town(far, W * (0.55 + r() * 0.25), hz + H * 0.02, W * 0.16, H * 0.035, { wall: mix("#CDBA95", sk.hor, 0.3), roof: mix("#7A4A34", sk.hor, 0.3) }, r);
    if (opts.fort) { var fg = fortress(far, W * (opts.fortX != null ? opts.fortX : 0.62), hz + H * 0.03, W * 0.22, H * 0.06, { stone: mix("#A89880", sk.hor, 0.25), roofs: true }, r); a.fortFar = fg; }
    // mid: nearer hills + forest band + river / sea
    var midCol = mix(pal.mid, sk.hor, 0.15);
    if (T !== "desert" && T !== "coast") ridge(mid, a.bx, a.bx + a.bw, hz + H * 0.05, H * (T === "hills" || T === "mountains" ? 0.1 : 0.05), hz + H * 0.4, midCol, r, 16);
    else ridge(mid, a.bx, a.bx + a.bw, hz + H * 0.05, H * 0.025, hz + H * 0.4, midCol, r, 16);
    if (opts.treeline !== false && T !== "desert" && T !== "plain") {
      var tc = mix(pal.tree, sk.hor, 0.12);
      forest(mid, a.bx, a.bx + a.bw, hz + H * 0.075, H * (T === "forest" ? 0.11 : 0.06), tc, r, T === "forest" ? 42 : 22, T === "snow" || T === "mountains" ? "conifer" : null);
    }
    if (opts.mill || (T === "fields" && r() > 0.55)) windmill(mid, W * (0.12 + r() * 0.2), hz + H * 0.07, H * 0.11, r);
    if (opts.camp) camp(mid, W * (opts.campX != null ? opts.campX : 0.05), hz + H * 0.1, W * 0.3, 3, H * 0.03, "#E6DCC4", r);
    // ground plane
    var gTop = hz + H * 0.06;
    R(gnd, a.bx, gTop, a.bw, a.by + a.bh - gTop, lgrad(dG, [[0, mix(pal.mid, sk.hor, 0.1)], [0.35, pal.near], [1, shade(pal.near, -0.25)]]));
    if (T === "river" || opts.water) {
      var ry = gTop + H * 0.1, rpts = [];
      for (var i = 0; i <= 10; i++) rpts.push([lerp(a.bx, a.bx + a.bw, i / 10), ry + Math.sin(i * 1.3 + 1) * H * 0.02 + (i / 10) * H * 0.04]);
      var rd = smoothPath(rpts) + " L" + f1(a.bx + a.bw) + " " + f1(ry + H * 0.14) + " L" + f1(a.bx) + " " + f1(ry + H * 0.08) + " Z";
      P(gnd, rd, lgrad(dG, [[0, mix("#5C86A6", sk.hor, 0.45)], [1, "#3E6F92"]]));
      for (var rv = 0; rv < 30; rv++) { var rx = a.bx + r() * a.bw; Ln(gnd, rx, ry + H * 0.03 + r() * H * 0.07, rx + M * 0.03 + r() * M * 0.05, ry + H * 0.03 + r() * H * 0.07, sk.hor, M * 0.003, { opacity: 0.55 }); }
      a.riverY = ry;
    }
    // fields: strips of alternating crop colour and furrows, in perspective
    if (T === "fields" || T === "plain") {
      for (var f = 0; f < 7; f++) { var fy = gTop + H * (0.02 + f * 0.045), fh = H * (0.03 + f * 0.012); R(gnd, a.bx, fy, a.bw, fh, f % 2 ? shade(pal.near, 0.12) : shade(pal.mid, -0.05), { opacity: 0.35 }); }
    }
    if (T === "desert") for (var dn = 0; dn < 5; dn++) ridge(gnd, a.bx, a.bx + a.bw, gTop + H * (0.06 + dn * 0.08), H * 0.03, gTop + H * (0.1 + dn * 0.08), dn % 2 ? shade(pal.near, 0.1) : shade(pal.near, -0.08), r, 8);
    // painterly dapples + directional strokes on the ground (perspective)
    strokes(gnd, a.bx, gTop, a.bw, a.by + a.bh - gTop, [shade(pal.near, 0.25), shade(pal.near, -0.25), pal.dark, mix(pal.near, sk.sunCol, 0.35)], 240, M * 0.14, 0, r, 0.2);
    dabs(gnd, a.bx, gTop, a.bw, a.by + a.bh - gTop, [shade(pal.near, 0.2), shade(pal.near, -0.2), pal.dark, pal.mid, mix(pal.near, sk.hor, 0.4)], 200, M * 0.05, r, 0.22);
    R(gnd, a.bx, gTop, a.bw, H * 0.25, lgrad(dG, [[0, sk.hor, 0.55], [1, sk.hor, 0]]));
    // road
    if (opts.road) { var road = P(gnd, "M" + f1(W * 0.5) + " " + f1(gTop) + " C" + f1(W * 0.45) + " " + f1(gTop + H * 0.2) + " " + f1(W * 0.2) + " " + f1(H * 0.85) + " " + f1(W * 0.05) + " " + f1(H * 1.3), "none", { stroke: shade(pal.near, 0.25), "stroke-width": f1(M * 0.06), opacity: 0.7, "stroke-linecap": "round" }); a.road = road; }
    // scattered bushes / rocks on the field
    for (var b = 0; b < 10; b++) { var bx = a.bx + r() * a.bw, by = gTop + H * 0.08 + r() * H * 0.5; if (T === "desert") El(gnd, bx, by, M * 0.015, M * 0.008, pal.dark, { opacity: 0.6 }); else tree(gnd, bx, by, M * (0.03 + r() * 0.03), pal.tree, r, "round"); }
    // near: dark foreground framing (grass tufts / rocks / tree)
    var nearCol = shade(pal.dark, -0.2);
    ridge(near, a.bx, a.bx + a.bw, H * 1.02, H * 0.06, a.by + a.bh, nearCol, r, 18);
    for (var gt = 0; gt < 40; gt++) { var gx = a.bx + r() * a.bw, gy = H * (0.96 + r() * 0.08); Ln(near, gx, gy, gx + (r() - 0.5) * M * 0.02, gy - M * (0.02 + r() * 0.04), gt % 2 ? nearCol : shade(pal.near, -0.4), M * 0.004); }
    if (opts.frameTree === true && !V.isPortrait) { tree(near, r() > 0.5 ? W * -0.02 : W * 1.02, H * 1.05, H * 0.95, shade(pal.tree, -0.45), r, T === "desert" ? "palm" : "round"); }
    return a;
  };

  // ───────────────────────── smoke, dust and fire ─────────────────────────
  /**
   * Smoke system. opts: layer, x, y, n (puffs), size, dir [dx,dy] (world px/s), wind, life (s), color, color2,
   * at (start; continuous unless `burst`), burst (one-shot), rate (puffs/s for continuous), opacity, spread.
   */
  S.smoke = function (opts) {
    opts = opts || {};
    var a = cur(), L = a.layers[opts.layer || "ground"];
    var g = G(L.g, { class: "ph-smoke" });
    var n = clamp(opts.n || 12, 1, 60), size = opts.size || u(40), life = opts.life || 4, at = opts.at || 0;
    var dir = opts.dir || [u(10), -u(45)], wind = opts.wind != null ? opts.wind : u(14), col = opts.color || C.smoke, col2 = opts.color2 || C.smoke2;
    var r = rng("smoke" + (opts.seed || a.anims.length)), puffs = [], spread = opts.spread != null ? opts.spread : 1;
    for (var i = 0; i < n; i++) {
      var e = El(g, 0, 0, size, size * 0.8, i % 3 === 0 ? col2 : col, { opacity: 0 });
      puffs.push({ e: e, ph: opts.burst ? (i / n) * (opts.stagger || 0.6) : r(), ox: (r() - 0.5) * size * spread, vx: dir[0] * (0.6 + r() * 0.8) + (r() - 0.5) * size * 0.4, vy: dir[1] * (0.6 + r() * 0.8), s0: 0.35 + r() * 0.4, s1: 1.4 + r() * 1.6, k: r() * 7 });
    }
    var x = opts.x, y = opts.y, maxOp = opts.opacity != null ? opts.opacity : 0.75, burst = !!opts.burst;
    function update(t) {
      for (var i = 0; i < puffs.length; i++) {
        var p = puffs[i], age;
        if (burst) { age = t - at - p.ph; if (age < 0 || age > life) { p.e.setAttribute("opacity", "0"); continue; } }
        else { if (t < at) { p.e.setAttribute("opacity", "0"); continue; } age = (((t - at) / life + p.ph) % 1) * life; }
        var q = age / life;
        var sc = lerp(p.s0, p.s1, Math.sqrt(q));
        var px2 = x + p.ox + p.vx * age + wind * age * age * 0.25 + Math.sin(age * 1.3 + p.k) * size * 0.25, py2 = y + p.vy * age * (1 - q * 0.35);
        var op = maxOp * Math.min(1, q * 8) * Math.pow(1 - q, 1.4);
        p.e.setAttribute("transform", "translate(" + f1(px2) + " " + f1(py2) + ") scale(" + f2(sc) + ")");
        p.e.setAttribute("opacity", op.toFixed(3));
      }
    }
    a.anims.push(update);
    return { el: g, update: update };
  };
  /** Battlefield haze: slow translucent drifting bands across the ground (continuous). */
  S.haze = function (opts) {
    opts = opts || {};
    var a = cur(), L = a.layers[opts.layer || "mid"], W = a.ww, H = a.wh;
    var g = G(L.g, { class: "ph-haze" }), bands = [], r = rng("haze");
    var n = opts.n || 5, col = opts.color || C.smoke, y0 = opts.y != null ? opts.y : a.horizon + H * 0.03;
    for (var i = 0; i < n; i++) { var e = El(g, 0, 0, W * (0.2 + r() * 0.25), H * (0.02 + r() * 0.04), col, { opacity: 0 }); bands.push({ e: e, x: a.bx + r() * a.bw, y: y0 + r() * H * (opts.spread || 0.25), v: u(8 + r() * 12), ph: r() * 7, o: (opts.opacity || 0.28) * (0.5 + r() * 0.5) }); }
    a.anims.push(function (t) { for (var i = 0; i < bands.length; i++) { var b = bands[i]; var xx = a.bx + ((b.x - a.bx + b.v * t) % a.bw + a.bw) % a.bw; b.e.setAttribute("transform", "translate(" + f1(xx) + " " + f1(b.y + Math.sin(t * 0.3 + b.ph) * H * 0.01) + ")"); b.e.setAttribute("opacity", (b.o * (0.7 + 0.3 * Math.sin(t * 0.5 + b.ph))).toFixed(3)); } });
    return g;
  };
  /** Fire glow: flickering radial light + small flame tongues at (x,y). */
  S.fire = function (opts) {
    opts = opts || {};
    var a = cur(), L = a.layers[opts.layer || "ground"];
    var g = G(L.g, { class: "ph-fire" }), size = opts.size || u(60), x = opts.x, y = opts.y, at = opts.at || 0;
    var glow = Ci(g, x, y - size * 0.2, size * 2.2, rgrad(L.defs, [[0, "#FFB347", 0.55], [0.5, "#E0602A", 0.18], [1, "#E0602A", 0]]));
    var tongues = [], r = rng("fire" + x);
    for (var i = 0; i < 5; i++) tongues.push({ e: P(g, "M0 0 Q" + f1(-size * 0.25) + " " + f1(-size * 0.5) + " 0 " + f1(-size) + " Q" + f1(size * 0.25) + " " + f1(-size * 0.5) + " 0 0 Z", i % 2 ? "#FFD27A" : "#E86A2A", { opacity: 0.9 }), ox: (r() - 0.5) * size * 0.8, k: r() * 7, s: 0.5 + r() * 0.7 });
    S.smoke({ layer: opts.layer || "ground", x: x, y: y - size * 0.6, n: 10, size: size * 0.7, life: 5, at: at, color: "#5A4A3E", color2: "#3A302A", opacity: 0.55, dir: [u(6), -u(40)] });
    a.anims.push(function (t) {
      var on = t >= at; var fl = 0.8 + 0.2 * vnoise(t * 9, 3);
      glow.setAttribute("opacity", on ? (fl * (opts.glow != null ? opts.glow : 1)).toFixed(3) : "0");
      for (var i = 0; i < tongues.length; i++) { var q = tongues[i]; var sc = on ? q.s * (0.7 + 0.5 * vnoise(t * 7 + q.k, i)) : 0; q.e.setAttribute("transform", "translate(" + f1(x + q.ox + Math.sin(t * 5 + q.k) * size * 0.08) + " " + f1(y) + ") scale(" + f2(sc) + ")"); }
    });
    return g;
  };
  /** Falling snow or ash in screen space (fx). kind: snow | ash | rain. */
  S.weather = function (kind, opts) {
    opts = opts || {};
    var a = cur(), r = rng("weather"), n = opts.n || (kind === "rain" ? 70 : 50), parts = [];
    var g = sv("svg", { class: "ph-weather", width: a.W, height: a.H, viewBox: "0 0 " + a.W + " " + a.H }, a.fx);
    for (var i = 0; i < n; i++) {
      var e = kind === "rain" ? Ln(g, 0, 0, u(2), u(18), "rgba(220,225,230,0.5)", u(1.2)) : Ci(g, 0, 0, u(kind === "ash" ? 1.5 + r() * 2 : 2 + r() * 3), kind === "ash" ? "rgba(90,80,70,0.7)" : "rgba(255,255,255,0.85)");
      parts.push({ e: e, x: r(), y: r(), v: kind === "rain" ? 0.9 + r() * 0.4 : 0.05 + r() * 0.07, ph: r() * 7, dx: kind === "rain" ? 0.08 : 0.02 + r() * 0.03 });
    }
    a.anims.push(function (t) { for (var i = 0; i < parts.length; i++) { var p = parts[i]; var yy = ((p.y + t * p.v) % 1 + 1) % 1, xx = ((p.x + t * p.dx + (kind === "rain" ? 0 : Math.sin(t * 0.8 + p.ph) * 0.02)) % 1 + 1) % 1; p.e.setAttribute("transform", "translate(" + f1(xx * a.W) + " " + f1(yy * a.H) + ")"); } });
    return g;
  };

  // ───────────────────────── figures: hats, soldiers, horses (markup strings → cached <g> defs) ─────────────────────────
  var WOOD = "#4A2E1A", STEEL = "#C9CBCB", STEEL2 = "#8E9296", GOLD = "#D9B05A", DARK = "#1E1A18";
  function A2(x, y) { return f1(x) + " " + f1(y); }
  function mkPoly(pts, fill, extra) { return '<path d="' + poly(pts) + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function mkLine(x1, y1, x2, y2, col, w, extra) { return '<line x1="' + f1(x1) + '" y1="' + f1(y1) + '" x2="' + f1(x2) + '" y2="' + f1(y2) + '" stroke="' + col + '" stroke-width="' + f2(w) + '" stroke-linecap="round"' + (extra || "") + "/>"; }
  function mkEl(cx, cy, rx, ry, fill, extra) { return '<ellipse cx="' + f1(cx) + '" cy="' + f1(cy) + '" rx="' + f1(rx) + '" ry="' + f1(ry) + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function mkCi(cx, cy, r, fill, extra) { return '<circle cx="' + f1(cx) + '" cy="' + f1(cy) + '" r="' + f1(r) + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function mkRect(x, y, w, h, fill, extra) { return '<rect x="' + f1(x) + '" y="' + f1(y) + '" width="' + f1(w) + '" height="' + f1(h) + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  /** Headgear markup around a head centred at (hx,hy) radius hr, facing +x. */
  function hatMk(kind, hx, hy, hr, F) {
    var top = hy - hr, coat = F.coat, trim = F.trim, s = "";
    switch (kind) {
      case "shako": s += mkRect(hx - hr * 0.85, top - hr * 2.2, hr * 1.7, hr * 2.4, DARK) + mkRect(hx - hr * 0.85, top - hr * 0.2, hr * 1.7, hr * 0.35, shade(DARK, 0.25)) + mkCi(hx + hr * 0.3, top - hr * 1.2, hr * 0.3, GOLD) + mkLine(hx + hr * 0.3, top - hr * 2.2, hx + hr * 0.5, top - hr * 3.6, trim, hr * 0.5) + mkLine(hx - hr * 0.95, top + hr * 0.1, hx + hr * 1.15, top + hr * 0.1, DARK, hr * 0.3); break;
      case "tricorne": s += mkPoly([[hx - hr * 1.5, top + hr * 0.2], [hx - hr * 0.2, top - hr * 1.5], [hx + hr * 1.4, top + hr * 0.2]], DARK) + mkLine(hx - hr * 1.4, top + hr * 0.15, hx + hr * 1.35, top + hr * 0.15, shade(DARK, 0.3), hr * 0.3) + mkCi(hx + hr * 0.9, top - hr * 0.1, hr * 0.22, trim); break;
      case "pickelhaube": s += mkEl(hx, top + hr * 0.3, hr * 1.1, hr * 0.95, DARK) + mkLine(hx, top - hr * 0.5, hx, top - hr * 1.6, GOLD, hr * 0.35) + mkRect(hx - hr * 1.1, top + hr * 0.2, hr * 2.3, hr * 0.3, shade(DARK, 0.2)); break;
      case "kepi": s += mkRect(hx - hr * 0.85, top - hr * 0.9, hr * 1.7, hr * 1.1, shade(coat, -0.2)) + mkLine(hx - hr * 0.1, top + hr * 0.1, hx + hr * 1.3, top + hr * 0.15, DARK, hr * 0.35); break;
      case "cavalier": s += mkEl(hx, top + hr * 0.15, hr * 1.9, hr * 0.45, DARK) + mkRect(hx - hr * 0.8, top - hr * 1.3, hr * 1.6, hr * 1.5, DARK) + '<path d="M' + A2(hx - hr * 0.5, top - hr * 1.2) + " q" + A2(-hr * 1.4, -hr * 1.6) + " " + A2(-hr * 2.6, -hr * 0.6) + '" fill="none" stroke="' + trim + '" stroke-width="' + f2(hr * 0.35) + '" stroke-linecap="round"/>'; break;
      case "galea": s += mkEl(hx, top + hr * 0.35, hr * 1.1, hr * 1.0, STEEL) + mkRect(hx - hr * 0.3, top - hr * 1.9, hr * 0.6, hr * 2.2, F.coat) + mkRect(hx - hr * 1.1, top + hr * 0.3, hr * 0.45, hr * 1.3, STEEL2) + mkLine(hx + hr * 0.2, top + hr * 0.6, hx + hr * 1.2, top + hr * 0.5, STEEL2, hr * 0.3); break;
      case "corinthian": s += mkEl(hx, top + hr * 0.9, hr * 1.1, hr * 1.5, "#B8873E") + mkRect(hx + hr * 0.15, top + hr * 0.5, hr * 0.5, hr * 0.55, DARK) + '<path d="M' + A2(hx - hr * 0.8, top - hr * 0.4) + " q" + A2(hr * 0.8, -hr * 2.2) + " " + A2(hr * 2.2, -hr * 0.2) + '" fill="none" stroke="' + F.trim + '" stroke-width="' + f2(hr * 0.5) + '"/>'; break;
      case "greathelm": s += mkRect(hx - hr * 1.05, top - hr * 0.2, hr * 2.1, hr * 2.3, STEEL) + mkRect(hx - hr * 1.05, top - hr * 0.2, hr * 2.1, hr * 0.3, STEEL2) + mkLine(hx + hr * 0.1, top + hr * 0.8, hx + hr * 1.0, top + hr * 0.8, DARK, hr * 0.25) + mkLine(hx + hr * 0.6, top + hr * 0.2, hx + hr * 0.6, top + hr * 1.9, DARK, hr * 0.18); break;
      case "kabuto": s += mkEl(hx, top + hr * 0.35, hr * 1.15, hr * 0.9, DARK) + mkPoly([[hx - hr * 1.5, top + hr * 1.5], [hx - hr * 1.1, top + hr * 0.5], [hx + hr * 1.1, top + hr * 0.5], [hx + hr * 1.5, top + hr * 1.5]], shade(DARK, 0.15)) + mkPoly([[hx - hr * 0.2, top - hr * 0.3], [hx - hr * 1.0, top - hr * 1.9], [hx - hr * 0.3, top - hr * 0.8], [hx + hr * 0.3, top - hr * 0.8], [hx + hr * 1.0, top - hr * 1.9], [hx + hr * 0.2, top - hr * 0.3]], GOLD); break;
      case "nasal": s += mkEl(hx, top + hr * 0.4, hr * 1.1, hr * 1.0, STEEL) + mkLine(hx + hr * 0.7, top + hr * 0.5, hx + hr * 0.75, top + hr * 1.4, STEEL2, hr * 0.3) + mkRect(hx - hr * 1.1, top + hr * 0.3, hr * 2.2, hr * 0.25, STEEL2); break;
      case "furcap": s += mkEl(hx, top + hr * 0.3, hr * 1.25, hr * 0.9, "#6E5234") + mkEl(hx, top - hr * 0.1, hr * 0.7, hr * 0.45, "#2A4F8C"); break;
      case "bork": s += mkRect(hx - hr * 0.8, top - hr * 1.6, hr * 1.6, hr * 1.9, "#F1E6C8") + mkRect(hx - hr * 1.1, top - hr * 0.2, hr * 0.5, hr * 2.4, "#E6D8B8") + mkRect(hx - hr * 0.8, top - hr * 0.3, hr * 1.6, hr * 0.5, GOLD); break;
      case "bicorne": s += '<path d="M' + A2(hx - hr * 2.1, top + hr * 0.35) + " Q" + A2(hx - hr * 1.6, top - hr * 1.2) + " " + A2(hx - hr * 0.2, top - hr * 1.55) + " Q" + A2(hx + hr * 1.3, top - hr * 1.7) + " " + A2(hx + hr * 2.1, top + hr * 0.1) + " Q" + A2(hx + hr * 0.6, top - hr * 0.55) + " " + A2(hx - hr * 0.4, top - hr * 0.4) + " Q" + A2(hx - hr * 1.3, top - hr * 0.3) + " " + A2(hx - hr * 2.1, top + hr * 0.35) + ' Z" fill="' + DARK + '"/>' + '<path d="M' + A2(hx - hr * 2.05, top + hr * 0.3) + " Q" + A2(hx - hr * 1.5, top - hr * 1.1) + " " + A2(hx - hr * 0.2, top - hr * 1.45) + " Q" + A2(hx + hr * 1.2, top - hr * 1.6) + " " + A2(hx + hr * 2.05, top + hr * 0.05) + '" fill="none" stroke="' + GOLD + '" stroke-width="' + f2(hr * 0.12) + '" opacity="0.8"/>' + mkCi(hx - hr * 0.9, top - hr * 0.55, hr * 0.3, F.flag.c2 || "#B3271E") + mkCi(hx - hr * 0.9, top - hr * 0.55, hr * 0.14, "#F1E6C8") + mkLine(hx - hr * 2.0, top + hr * 0.3, hx + hr * 2.0, top + hr * 0.15, shade(DARK, 0.35), hr * 0.22); break;
      case "bearskin": s += mkRect(hx - hr * 1.0, top - hr * 2.6, hr * 2.0, hr * 2.9, "#2A221C") + mkRect(hx - hr * 1.0, top - hr * 2.6, hr * 2.0, hr * 2.9, "#1E1A18", ' opacity="0.3"') + mkLine(hx + hr * 0.9, top - hr * 1.5, hx + hr * 0.9, top - hr * 0.2, F.trim, hr * 0.3); break;
      case "plumed": s += mkEl(hx, top + hr * 0.35, hr * 1.1, hr * 0.95, STEEL) + '<path d="M' + A2(hx, top - hr * 0.5) + " q" + A2(-hr * 0.5, -hr * 2.0) + " " + A2(-hr * 2.2, -hr * 1.6) + '" fill="none" stroke="' + F.coat + '" stroke-width="' + f2(hr * 0.55) + '" stroke-linecap="round"/>'; break;
      case "none": break;
      default: s += mkEl(hx, top + hr * 0.3, hr * 1.1, hr * 0.5, "#3A2A1A");
    }
    return s;
  }
  S.hatMarkup = hatMk;
  function isArmour(F) { return F.weapon === "scutum" || F.weapon === "hoplon" || F.weapon === "sword" || F.weapon === "yari"; }
  /** Leg: hip → foot with knee bend; angle in radians (positive = forward). */
  function legMk(hx, hy, len, ang, lift, col, boot, w) {
    var kx = hx + Math.sin(ang) * len * 0.5 + lift * 6, ky = hy + Math.cos(ang) * len * 0.5 - lift * 4;
    var fx = hx + Math.sin(ang) * len, fy = hy + Math.cos(ang) * len - lift * 8;
    return mkLine(hx, hy, kx, ky, col, w) + mkLine(kx, ky, fx, fy, col, w) + mkLine(fx - 1, fy, fx + 4, fy, boot, w * 1.05);
  }
  function armMk(sx, sy, ex, ey, col, w) { return mkLine(sx, sy, ex, ey, col, w); }
  /**
   * Soldier markup (feet at 0,0; ~100 tall; facing +x). pose: stand | march | aim | fire | charge | officer | drummer.
   * phase 0..1 of the cycle. Returns inner SVG markup.
   */
  function soldierMk(F, pose, phase, skin) {
    var s = "", coat = F.coat, trim = F.trim, trous = F.trousers, sk = skin || SKINS[1];
    var hipY = -46, hipX = 0, legL = 46, legW = 6.5, armW = 5.5;
    var boot = "#1E1A18";
    var run = pose === "charge", walk = pose === "march" || run;
    var ph = phase * Math.PI * 2;
    var a = walk ? Math.sin(ph) * (run ? 0.75 : 0.45) : 0;
    var liftF = walk ? Math.max(0, Math.sin(ph + Math.PI / 2)) : 0, liftB = walk ? Math.max(0, -Math.sin(ph + Math.PI / 2)) : 0;
    var bodyLean = run ? -14 : pose === "aim" || pose === "fire" ? -4 : 0;
    var armour = isArmour(F);
    // back leg, back arm (drawn first)
    s += legMk(hipX - 2, hipY, legL, -a, liftB, shade(trous, -0.2), boot, legW);
    var shX = 0, shY = -82;
    var backArmSwing = walk ? Math.sin(ph) * 14 : 0;
    var hasMusket = F.weapon === "musket";
    var shoulderArms = (pose === "stand" || pose === "march") && hasMusket;
    if (!(pose === "aim" || pose === "fire" || run)) s += armMk(shX - 1, shY, shX - 4 - backArmSwing, shY + 30, shade(coat, -0.25), armW);
    // body
    var bodyG = '<g transform="rotate(' + bodyLean + " 0 " + hipY + ')">';
    var tails = !armour && F.hat !== "bork";
    bodyG += mkPoly([[-9, -86], [9, -86], [8, -52], [tails ? 10 : 8, tails ? -38 : -46], [tails ? -10 : -8, tails ? -38 : -46], [-8, -52]], coat);
    bodyG += mkPoly([[-9, -86], [-2, -86], [-3, -50], [-9, -50]], shade(coat, -0.22));
    if (armour) {
      if (F.weapon === "scutum") { for (var b = 0; b < 4; b++) bodyG += mkLine(-8, -80 + b * 7, 8, -80 + b * 7, STEEL2, 1.4); bodyG += mkRect(-9, -86, 18, 10, STEEL2, ' opacity="0.8"'); }
      else if (F.weapon === "yari") { for (var l2 = 0; l2 < 5; l2++) bodyG += mkLine(-8, -82 + l2 * 7, 8, -82 + l2 * 7, F.trim, 1.0, ' opacity="0.7"'); }
      else if (F.weapon === "hoplon") bodyG += mkRect(-8, -74, 16, 12, shade(coat, -0.18)) + mkLine(-8, -62, 8, -62, F.trim, 1.5);
      else bodyG += mkRect(-5, -82, 10, 26, F.trim, ' opacity="0.9"');
    } else {
      bodyG += mkLine(-7, -84, 6, -56, trim, 2.6) + (F.hat === "shako" || F.hat === "kepi" || F.hat === "tricorne" ? mkLine(7, -84, -6, -56, trim, 2.6) : "");
      for (var bt = 0; bt < 3; bt++) bodyG += mkCi(1, -78 + bt * 9, 1.1, GOLD);
      bodyG += mkRect(-9, -88, 18, 4, shade(coat, -0.35));
      if (pose === "officer") bodyG += mkCi(-8, -86, 3.2, GOLD) + mkCi(8, -86, 3.2, GOLD) + mkLine(-8, -84, 7, -54, GOLD, 3);
    }
    bodyG += mkLine(8.5, -86, 7.5, -54, "#FFE0A0", 1.3, ' opacity="0.55"');
    bodyG += "</g>";
    s += bodyG;
    // head
    var hx = run ? 4 : 0, hy = -93;
    s += mkCi(hx, hy, 7.2, sk) + mkCi(hx - 2, hy, 7.2, shade(sk, -0.25), ' opacity="0.35"');
    s += hatMk(pose === "officer" && (F.hat === "shako" || F.hat === "kepi" || F.hat === "tricorne") ? "bicorne" : F.hat, hx, hy, 7.2, F);
    // front leg
    s += legMk(hipX + 2, hipY, legL, a, liftF, trous, boot, legW);
    // weapon + front arm
    var armC = coat, frontArmSwing = walk ? -Math.sin(ph) * 14 : 0;
    var flash = pose === "fire";
    if (pose === "officer") {
      s += mkLine(2, -76, 22, -118, STEEL, 2.4) + mkCi(2, -76, 3, GOLD) + armMk(shX, shY, 4, -76, armC, armW);
    } else if (pose === "drummer") {
      s += mkEl(16, -58, 11, 9, F.coat) + mkEl(16, -66, 11, 3.5, "#F1E6C8") + mkLine(16, -49, 16, -67, F.trim, 1.2);
      var dk = Math.sin(ph * 2) * 6;
      s += armMk(shX, shY, 10, -74 + dk, armC, armW) + mkLine(10, -74 + dk, 16, -68, WOOD, 2) + armMk(shX, shY, 20, -74 - dk, armC, armW) + mkLine(20, -74 - dk, 18, -68, WOOD, 2);
    } else if (hasMusket) {
      if (shoulderArms) {
        s += mkLine(5, -50, 1, -140, WOOD, 3.2) + mkLine(1, -140, 0, -152, STEEL, 1.6) + mkLine(4, -70, 3, -100, STEEL2, 1.6) + mkCi(5, -50, 2.2, DARK);
        s += armMk(shX, shY, 8, -66, armC, armW) + mkLine(8, -66, 5, -58, sk, armW * 0.8);
      } else if (pose === "aim" || flash) {
        s += mkLine(-10, -78, 46, -82, WOOD, 3.4) + mkLine(14, -83, 50, -84, STEEL2, 1.8) + mkLine(46, -82, 58, -83, STEEL, 1.6);
        s += armMk(shX, shY, 16, -78, armC, armW) + armMk(shX, shY, 30, -80, armC, armW) + mkCi(30, -80, 2.6, sk) + mkCi(16, -78, 2.6, sk);
        if (flash) s += '<path d="' + poly([[56, -84], [66, -90], [62, -83], [74, -82], [62, -80], [66, -74], [56, -80], [52, -83]]) + '" fill="#FFF0A0"/>' + mkCi(60, -83, 4, "#FFD060", ' opacity="0.8"');
      } else { // charge: bayonet levelled low
        s += mkLine(-8, -62, 44, -72, WOOD, 3.4) + mkLine(44, -72, 60, -75, STEEL, 1.8);
        s += armMk(shX, shY, 12, -66, armC, armW) + armMk(shX, shY, 30, -70, armC, armW) + mkCi(30, -70, 2.6, sk);
      }
    } else if (F.weapon === "scutum" || F.weapon === "hoplon") {
      var thrust = pose === "aim" || flash || run;
      if (thrust) s += mkLine(-6, -72, 56, -78, WOOD, 2.6) + mkPoly([[56, -80], [68, -78], [56, -76]], STEEL);
      else s += mkLine(8, -10, 10, -150, WOOD, 2.6) + mkPoly([[9, -150], [12, -162], [15, -150]], STEEL);
      s += armMk(shX, shY, thrust ? 22 : 10, thrust ? -74 : -70, armC, armW);
      if (F.weapon === "scutum") s += mkRect(10, -84, 14, 40, F.coat, ' rx="4"') + mkRect(10, -84, 14, 40, "none", ' rx="4" stroke="' + GOLD + '" stroke-width="1.6"') + mkCi(17, -64, 3, GOLD);
      else s += mkCi(16, -66, 15, "#8E6A2A") + mkCi(16, -66, 11, F.trim === "#2A2A2A" ? "#B8873E" : F.trim) + mkCi(16, -66, 4, DARK);
    } else if (F.weapon === "sword" || F.weapon === "axe") {
      var up = pose === "aim" || flash || run;
      var shieldC = F.weapon === "axe" ? "#A8562A" : F.trim;
      s += mkCi(13, -64, F.weapon === "axe" ? 15 : 13, shieldC) + mkCi(13, -64, F.weapon === "axe" ? 15 : 13, "none", ' stroke="' + DARK + '" stroke-width="1.4"') + mkCi(13, -64, 3.2, STEEL2);
      if (F.weapon === "sword") s += (up ? mkLine(6, -84, 24, -128, STEEL, 2.6) + mkLine(2, -90, 12, -94, GOLD, 2) : mkLine(-4, -60, -2, -18, STEEL, 2.2));
      else s += (up ? mkLine(6, -84, 20, -124, WOOD, 2.6) + mkPoly([[18, -126], [30, -122], [26, -108], [16, -116]], STEEL) : mkLine(6, -70, 8, -20, WOOD, 2.6) + mkPoly([[6, -36], [16, -34], [12, -20], [5, -24]], STEEL));
      s += armMk(shX, shY, up ? 8 : 4, up ? -84 : -62, armC, armW);
    } else if (F.weapon === "yari") {
      var th2 = pose === "aim" || flash || run;
      if (th2) s += mkLine(-10, -70, 64, -76, WOOD, 2.4) + mkPoly([[64, -78], [78, -76], [64, -74]], STEEL);
      else s += mkLine(6, -10, 8, -160, WOOD, 2.4) + mkPoly([[7, -160], [9, -174], [11, -160]], STEEL);
      s += armMk(shX, shY, th2 ? 24 : 9, th2 ? -72 : -66, armC, armW);
      s += mkRect(-12, -92, 4, 46, F.trim, ' opacity="0.9"') + mkRect(-12, -92, 4, 46, "none", ' stroke="' + DARK + '" stroke-width="0.8"'); // sashimono back banner
    } else if (F.weapon === "bow") {
      var drawn = pose === "aim" || flash;
      s += '<path d="M' + A2(drawn ? 30 : 10, -104) + " q" + A2(drawn ? 16 : 10, 26) + " " + A2(0, 52) + '" fill="none" stroke="' + WOOD + '" stroke-width="2.4"/>';
      if (drawn) s += mkLine(30, -104, 8, -80, "#E6D8B8", 0.9) + mkLine(30, -52, 8, -80, "#E6D8B8", 0.9) + mkLine(8, -80, 34, -80, WOOD, 1.6) + armMk(shX, shY, 8, -80, armC, armW) + armMk(shX, shY, 28, -79, armC, armW);
      else s += armMk(shX, shY, 10, -80, armC, armW);
      s += mkRect(-12, -94, 6, 28, "#5A4030", ' rx="2"'); // quiver
    }
    return s;
  }
  var defsCache = {};
  function defsFor(layerName) {
    var a = cur(), L = a.layers[layerName] || a.layers.ground;
    return L.defs;
  }
  /** Cached <g> definition for (faction, pose, phase). Returns id. */
  function soldierDef(layerName, fid, pose, phaseIdx, phaseN, skinIdx) {
    var key = layerName + "|" + fid + "|" + pose + "|" + phaseIdx + "|" + skinIdx + "|" + V.seed;
    if (defsCache[key]) return defsCache[key];
    var F = fac(fid);
    var id = nid("s");
    var g = sv("g", { id: id }, defsFor(layerName));
    g.innerHTML = soldierMk(F, pose, phaseN ? phaseIdx / phaseN : 0, SKINS[skinIdx % SKINS.length]);
    defsCache[key] = id;
    return id;
  }
  S.soldierMarkup = soldierMk;
  var POSE_N = { stand: 1, march: 8, charge: 6, aim: 1, fire: 1, officer: 1, drummer: 8 };

  /** Horse (hooves at 0,0, ~100 tall, facing +x) with optional rider. phase = gallop cycle 0..1. */
  function horseMk(F, col, phase, rider, pose) {
    var s = "", dark = shade(col, -0.3), lite = shade(col, 0.2), ph = phase * Math.PI * 2;
    var gallop = pose !== "stand";
    var fa = gallop ? Math.sin(ph) * 0.8 : 0.1, ba = gallop ? Math.sin(ph + 2.6) * 0.8 : -0.1;
    function hleg(x, y, ang, w, c) { var kx = x + Math.sin(ang) * 20, ky = y + 24; return mkLine(x, y, kx, ky, c, w) + mkLine(kx, ky, kx + Math.sin(ang) * 10, 0, c, w * 0.85) + mkLine(kx + Math.sin(ang) * 10 - 2, 0, kx + Math.sin(ang) * 10 + 3, 0, DARK, w); }
    s += hleg(22, -48, fa * 0.8 - 0.1, 6, dark) + hleg(-24, -48, ba * 0.8 + 0.1, 6, dark);
    // body
    s += '<path d="M' + A2(-36, -70) + " C" + A2(-40, -40) + " " + A2(40, -40) + " " + A2(36, -70) + " C" + A2(30, -92) + " " + A2(-30, -92) + " " + A2(-36, -70) + ' Z" fill="' + col + '"/>';
    s += mkEl(-6, -56, 28, 8, lite, ' opacity="0.35"');
    // neck + head
    s += '<path d="M' + A2(24, -84) + " L" + A2(48, -116) + " L" + A2(58, -108) + " L" + A2(40, -70) + ' Z" fill="' + col + '"/>';
    s += '<path d="M' + A2(28, -88) + " Q" + A2(42, -112) + " " + A2(52, -118) + '" fill="none" stroke="' + dark + '" stroke-width="5"/>';
    s += mkEl(58, -112, 12, 6.5, col, ' transform="rotate(25 58 -112)"') + mkPoly([[50, -120], [53, -128], [56, -119]], dark) + mkCi(62, -114, 1.3, DARK) + mkLine(50, -110, 66, -106, DARK, 1.0);
    // tail
    s += '<path d="M' + A2(-36, -72) + " q" + A2(-14, 6) + " " + A2(-16, 34 + (gallop ? Math.sin(ph) * 8 : 0)) + '" fill="none" stroke="' + dark + '" stroke-width="5" stroke-linecap="round"/>';
    // near legs
    s += hleg(28, -50, fa, 6.5, col) + hleg(-20, -50, ba, 6.5, col);
    if (rider) {
      var coat = F.coat;
      s += mkRect(-14, -96, 30, 14, "#5A3A22", ' rx="4"'); // saddle
      s += mkLine(-4, -82, 10, -50, F.trousers, 6) + mkLine(10, -50, 12, -46, DARK, 6); // leg
      s += mkPoly([[-10, -130], [8, -130], [8, -94], [-10, -94]], coat) + mkLine(-8, -128, 6, -100, F.trim, 2.4);
      s += mkCi(-6, -128, 3, GOLD);
      var charge = pose === "charge";
      s += mkLine(-1, -124, charge ? 30 : 10, charge ? -140 : -128, coat, 5);
      if (F.weapon === "bow") s += '<path d="M' + A2(26, -160) + " q" + A2(14, 24) + " " + A2(0, 48) + '" fill="none" stroke="' + WOOD + '" stroke-width="2.4"/>';
      else if (charge) s += mkLine(28, -142, 46, -176, STEEL, 2.6);
      else s += mkLine(10, -128, 14, -200, WOOD, 2.2) + mkPoly([[14, -200], [11, -190], [20, -192]], F.flag.c2);
      s += mkCi(-1, -138, 7.2, SKINS[2]);
      s += hatMk(F.hat === "shako" ? "plumed" : F.hat === "tricorne" || F.hat === "kepi" ? "bicorne" : F.hat, -1, -138, 7.2, F);
    }
    return s;
  }
  var HORSES = ["#6B4423", "#8B5A2B", "#B8B4AC", "#2A2622", "#A0744A"];
  function horseDef(layerName, fid, phaseIdx, phaseN, colIdx, pose) {
    var key = "h|" + layerName + "|" + fid + "|" + phaseIdx + "|" + colIdx + "|" + pose + "|" + V.seed;
    if (defsCache[key]) return defsCache[key];
    var id = nid("h");
    var g = sv("g", { id: id }, defsFor(layerName));
    g.innerHTML = horseMk(fac(fid), HORSES[colIdx % HORSES.length], phaseIdx / phaseN, true, pose);
    defsCache[key] = id;
    return id;
  }
  S.horseMarkup = horseMk;

  // ───────────────────────── flags ─────────────────────────
  function flagPattern(g, fl, fw, fh) {
    var c1 = fl.c1, c2 = fl.c2, field = fl.field;
    R(g, 0, 0, fw, fh, field);
    switch (fl.pattern) {
      case "cross": Ln(g, 0, 0, fw, fh, c1, fh * 0.18); Ln(g, fw, 0, 0, fh, c1, fh * 0.18); R(g, 0, fh * 0.38, fw, fh * 0.24, c1); R(g, fw * 0.4, 0, fw * 0.2, fh, c1); R(g, 0, fh * 0.43, fw, fh * 0.14, c2); R(g, fw * 0.44, 0, fw * 0.12, fh, c2); break;
      case "tricolour": R(g, 0, 0, fw / 3, fh, c1); R(g, (fw * 2) / 3, 0, fw / 3, fh, c2); break;
      case "fleur": for (var f = 0; f < 3; f++) { var fx = fw * (0.3 + f * 0.2), fy = fh * (f === 1 ? 0.62 : 0.4); El(g, fx, fy, fw * 0.035, fh * 0.12, c1); El(g, fx - fw * 0.04, fy + fh * 0.02, fw * 0.03, fh * 0.07, c1, { transform: "rotate(-30 " + f1(fx - fw * 0.04) + " " + f1(fy) + ")" }); El(g, fx + fw * 0.04, fy + fh * 0.02, fw * 0.03, fh * 0.07, c1, { transform: "rotate(30 " + f1(fx + fw * 0.04) + " " + f1(fy) + ")" }); R(g, fx - fw * 0.05, fy + fh * 0.06, fw * 0.1, fh * 0.03, c1); } break;
      case "saltire": Ln(g, 0, 0, fw, fh, c1, fh * 0.16); Ln(g, fw, 0, 0, fh, c1, fh * 0.16); Ci(g, fw / 2, fh / 2, fh * 0.12, c2); break;
      case "bands": R(g, 0, 0, fw, fh / 2, c1); R(g, 0, fh / 2, fw, fh / 2, c2); Ci(g, fw * 0.5, fh * 0.5, fh * 0.14, field); break;
      case "stripes": for (var st = 0; st < 7; st++) if (st % 2) R(g, 0, (fh * st) / 7, fw, fh / 7, c1); R(g, 0, 0, fw * 0.42, fh * 0.52, c2); for (var sy = 0; sy < 3; sy++) for (var sx = 0; sx < 4; sx++) Ci(g, fw * (0.06 + sx * 0.1), fh * (0.1 + sy * 0.16), fh * 0.025, c1); break;
      case "eagle": R(g, fw * 0.08, fh * 0.08, fw * 0.84, fh * 0.84, "none", { stroke: c1, "stroke-width": f1(fh * 0.05) }); El(g, fw / 2, fh * 0.55, fw * 0.08, fh * 0.2, c1); P(g, poly([[fw * 0.5, fh * 0.45], [fw * 0.18, fh * 0.3], [fw * 0.42, fh * 0.52]]), c1); P(g, poly([[fw * 0.5, fh * 0.45], [fw * 0.82, fh * 0.3], [fw * 0.58, fh * 0.52]]), c1); Ci(g, fw / 2, fh * 0.32, fh * 0.07, c1); break;
      case "sun": Ci(g, fw / 2, fh / 2, fh * 0.2, c2); for (var ry = 0; ry < 12; ry++) { var an = (ry / 12) * Math.PI * 2; Ln(g, fw / 2 + Math.cos(an) * fh * 0.24, fh / 2 + Math.sin(an) * fh * 0.24, fw / 2 + Math.cos(an) * fh * 0.4, fh / 2 + Math.sin(an) * fh * 0.4, c2, fh * 0.04); } break;
      case "mon": Ci(g, fw / 2, fh / 2, fh * 0.26, c1); Ci(g, fw / 2, fh / 2, fh * 0.32, "none", { stroke: c2, "stroke-width": f1(fh * 0.03) }); break;
      case "raven": P(g, poly([[fw * 0.2, fh * 0.55], [fw * 0.45, fh * 0.3], [fw * 0.55, fh * 0.42], [fw * 0.8, fh * 0.28], [fw * 0.62, fh * 0.6], [fw * 0.5, fh * 0.75], [fw * 0.3, fh * 0.7]]), c1); Ci(g, fw * 0.74, fh * 0.32, fh * 0.03, c2); break;
      case "tails": for (var tl2 = 0; tl2 < 5; tl2++) Ln(g, fw * 0.1 + tl2 * fw * 0.06, fh * 0.2, fw * (0.6 + tl2 * 0.08), fh * (0.3 + tl2 * 0.14), c1, fh * 0.05); Ci(g, fw * 0.12, fh * 0.2, fh * 0.1, c2); break;
      case "crescent": Ci(g, fw * 0.45, fh / 2, fh * 0.28, c1); Ci(g, fw * 0.52, fh / 2, fh * 0.24, field); P(g, poly([[fw * 0.68, fh * 0.42], [fw * 0.71, fh * 0.5], [fw * 0.79, fh * 0.5], [fw * 0.73, fh * 0.55], [fw * 0.76, fh * 0.63], [fw * 0.68, fh * 0.58], [fw * 0.6, fh * 0.63], [fw * 0.63, fh * 0.55], [fw * 0.57, fh * 0.5], [fw * 0.65, fh * 0.5]]), c1); break;
      default: break;
    }
    // worn edge shading
    R(g, 0, 0, fw, fh, "url(#" + cur().flagShadeId + ")");
  }
  function ensureFlagShade(layerName) {
    var a = cur();
    if (a.flagShadeId) return;
    var id = nid("fs"), defs = defsFor(layerName);
    var gr = sv("linearGradient", { id: id, x1: 0, y1: 0, x2: 1, y2: 0 }, defs);
    sv("stop", { offset: 0, "stop-color": "#000", "stop-opacity": 0.28 }, gr); sv("stop", { offset: 0.3, "stop-color": "#000", "stop-opacity": 0 }, gr); sv("stop", { offset: 0.7, "stop-color": "#fff", "stop-opacity": 0.12 }, gr); sv("stop", { offset: 1, "stop-color": "#000", "stop-opacity": 0.2 }, gr);
    a.flagShadeId = id;
  }
  /**
   * Waving flag on a pole. opts: layer, x, y (pole foot), h (pole height), w (flag width), faction or flag spec,
   * facing (1 flies to +x), speed, parent (an svg group), amp.
   */
  S.flag = function (opts) {
    opts = opts || {};
    var a = cur(), lname = opts.layer || "ground", L = a.layers[lname];
    ensureFlagShade(lname);
    var parent = opts.parent || L.g;
    var g = G(parent, { class: "ph-flag" });
    var h = opts.h || u(120), fw = opts.w || h * 0.42, fh = fw * 0.66, facing = opts.facing || 1;
    var fl = opts.flag || fac(opts.faction || "redcoat").flag;
    Ln(g, 0, 0, 0, -h, "#3A2A1A", Math.max(1.2, h * 0.02));
    Ci(g, 0, -h, h * 0.025, GOLD);
    var cid = nid("fc");
    var cp = sv("clipPath", { id: cid }, L.defs);
    var cpath = sv("path", { d: "" }, cp);
    var fg = sv("g", { "clip-path": "url(#" + cid + ")", transform: "translate(0 " + f1(-h) + ") scale(" + facing + " 1)" }, g);
    flagPattern(fg, fl, fw, fh);
    var wave = sv("path", { d: "", fill: "none", stroke: "#000", "stroke-width": f2(fh * 0.02), opacity: 0.25, transform: "translate(0 " + f1(-h) + ") scale(" + facing + " 1)" }, g);
    var amp = opts.amp != null ? opts.amp : fh * 0.14, speed = opts.speed || 6, ph0 = (opts.phase || 0) * 7, n = 9;
    function shape(t) {
      var top = [], bot = [];
      for (var i = 0; i <= n; i++) {
        var q = i / n, x = q * fw, wv = Math.sin(q * 5.2 - t * speed + ph0) * amp * (0.15 + q * 0.85) + Math.sin(q * 11 - t * speed * 1.7 + ph0) * amp * 0.25 * q;
        top.push([x, wv - q * fh * 0.06]); bot.push([x, fh + wv * 0.9 + q * fh * 0.04]);
      }
      var d = smoothPath(top) + " L" + A2(bot[n][0], bot[n][1]);
      for (var k = n - 1; k >= 0; k--) d += " L" + A2(bot[k][0], bot[k][1]);
      return d + " Z";
    }
    a.anims.push(function (t) { var d = shape(t); cpath.setAttribute("d", d); wave.setAttribute("d", d); });
    var it = { el: g, x: opts.x || 0, y: opts.y || 0, h: h, w: fw };
    g.setAttribute("transform", "translate(" + A2(it.x, it.y) + ")");
    return it;
  };

  // ───────────────────────── armies (formations of many small soldiers) ─────────────────────────
  /**
   * A formation. opts: faction, x (centre), y (front-rank ground line), count (soldiers, ≤ 220), ranks, size
   * (soldier height in world px), facing (1 → right, -1 → left), pose (stand|march|aim|charge), spacing,
   * layer, flags (count), officer, drummer, cavalry (true → horses), seed.
   * Returns { el, x, y, w, h, rect, faction, setPose, march, charge, volley, moveTo, at(t) }.
   */
  S.army = function (opts) {
    opts = opts || {};
    var a = cur(), lname = opts.layer || "ground", L = a.layers[lname];
    var fid = FACTIONS[opts.faction] ? opts.faction : S.guessFaction(opts.faction);
    var F = fac(fid);
    var count = clamp(Math.round(opts.count || 60), 1, 220), ranks = clamp(opts.ranks || (count > 24 ? 3 : count > 8 ? 2 : 1), 1, 6);
    var size = opts.size || u(70), facing = opts.facing === -1 || opts.facing === "left" ? -1 : 1;
    var cav = !!opts.cavalry;
    var sp = (opts.spacing || (cav ? 1.05 : 0.46)) * size, rankGap = (cav ? 0.5 : 0.36) * size;
    var r = rng("army" + fid + (opts.seed || ""));
    var g = G(L.g, { class: "ph-army" });
    var cols = Math.ceil(count / ranks);
    var w = cols * sp, x0 = (opts.x != null ? opts.x : a.ww / 2) - w / 2, y0 = opts.y != null ? opts.y : a.horizon + a.wh * 0.22;
    var men = [], flags = [];
    var pose0 = opts.pose || "stand";
    var skinBase = Math.floor(r() * 5);
    // ranks back → front so the front rank paints on top
    var made = 0;
    for (var rk = ranks - 1; rk >= 0 && made < count; rk--) {
      var inRank = Math.min(cols, count - rk * cols);
      if (inRank <= 0) continue;
      var rowY = y0 - rk * rankGap, rowS = 1 - rk * 0.06, shadeK = -rk * 0.05;
      var rowG = G(g, { class: "ph-rank" });
      if (shadeK) rowG.setAttribute("opacity", (1 + shadeK * 2).toFixed(2));
      for (var c = 0; c < inRank; c++) {
        var mx = x0 + (c + 0.5 + (rk % 2) * 0.3) * sp + (r() - 0.5) * sp * 0.25, my = rowY + (r() - 0.5) * size * 0.04;
        var sc = (size / 100) * rowS * (0.96 + r() * 0.08);
        var use = sv("use", { class: "ph-man" }, rowG);
        var m = { el: use, x: mx, y: my, s: sc, ph: r(), skin: (skinBase + c) % 5, rank: rk, col: c, horse: Math.floor(r() * HORSES.length), href: "" };
        men.push(m);
        made++;
      }
      // ground shadow strip under the rank
      El(rowG, x0 + w / 2, rowY + size * 0.02, w / 2 + sp * 0.3, size * 0.06, "#1E150D", { opacity: 0.18 });
      rowG.insertBefore(rowG.lastChild, rowG.firstChild);
    }
    var nFlags = opts.flags != null ? clamp(opts.flags, 0, 4) : count >= 30 ? 2 : 1;
    for (var fI = 0; fI < nFlags; fI++) {
      var fx = x0 + w * ((fI + 1) / (nFlags + 1)), fy = y0 - Math.min(ranks - 1, 1) * rankGap;
      flags.push(S.flag({ layer: lname, parent: g, x: fx, y: fy, h: size * 1.75, w: size * 0.7, faction: fid, facing: -facing, phase: r(), speed: 5 + r() * 2 }));
    }
    var extras = [];
    if (opts.officer !== false && !cav && count >= 6) extras.push({ pose: "officer", x: x0 + w + size * 0.25 * facing + (facing > 0 ? 0 : -w - size * 0.5), y: y0 + size * 0.02 });
    if (opts.drummer && !cav) extras.push({ pose: "drummer", x: x0 - size * 0.3 * facing + (facing > 0 ? 0 : w + size * 0.6), y: y0 + size * 0.02 });
    extras.forEach(function (ex) { var use = sv("use", { class: "ph-man" }, g); men.push({ el: use, x: ex.x, y: ex.y, s: size / 100, ph: r(), skin: (skinBase + 2) % 5, rank: 0, col: -1, fixed: ex.pose, href: "" }); });
    var army = { el: g, faction: fid, F: F, x: x0 + w / 2, y: y0, w: w, h: size * (1.1 + ranks * 0.36), facing: facing, size: size, men: men, flags: flags, cavalry: cav };
    army.rect = { x: x0 - size * 0.4, y: y0 - size * (1.6 + (ranks - 1) * 0.36), w: w + size * 0.8, h: size * (1.7 + (ranks - 1) * 0.36) };
    var poses = [], moves = [], flashes = [], mover = opts.mover;
    /** Override the pose during [from, to]. */
    army.setPose = function (pose, from, to) { poses.push({ pose: pose, from: from != null ? from : 0, to: to != null ? to : 1e9 }); return army; };
    function poseAt(t) { var p = pose0; for (var i = 0; i < poses.length; i++) if (t >= poses[i].from && t < poses[i].to) p = poses[i].pose; return p; }
    /** Offset of the formation at t (world px). */
    army.at = function (t) {
      var dx = 0, dy = 0;
      for (var i = 0; i < moves.length; i++) { var m = moves[i]; var p = m.dur <= 0.01 ? (t >= m.at ? 1 : 0) : m.ease(clamp((t - m.at) / m.dur, 0, 1)); dx += m.dx * p; dy += m.dy * p; }
      return { x: army.x + dx, y: army.y + dy, dx: dx, dy: dy };
    };
    /** Walk the formation by (dx,dy) world px over dur from at. */
    army.march = function (at, dur, dx, dy, opts2) { opts2 = opts2 || {}; moves.push({ at: at, dur: Math.max(0.01, dur), dx: dx != null ? dx : size * 3 * facing, dy: dy || 0, ease: E(opts2.ease || "inOutSine") }); if (opts2.pose !== false) army.setPose(cav ? "gallop" : "march", at, at + dur); return army; };
    /** Bayonet charge: run forward `dist` px (default = 4 soldier heights). */
    army.charge = function (at, dur, dist) { dur = dur || 2.2; moves.push({ at: at, dur: dur, dx: (dist != null ? dist : size * 4) * facing, dy: 0, ease: E("inOutQuad") }); army.setPose("charge", at - 0.15, at + dur + 0.4); return army; };
    /** Musket volley at `at`: present → fire (rolling flashes along the front rank) → smoke. */
    army.volley = function (at, o) {
      o = o || {};
      army.setPose("aim", at - (o.lead || 0.9), at + 0.9);
      flashes.push({ at: at, roll: o.roll != null ? o.roll : 0.35 });
      var front = men.filter(function (m) { return m.rank === 0 && m.col >= 0; });
      var every = Math.max(1, Math.round(front.length / 7)), off0 = army.at(at);
      for (var i = 0; i < front.length; i += every) {
        var m = front[i];
        S.smoke({ layer: lname, x: m.x + off0.dx + facing * size * 0.55, y: m.y + off0.dy - size * 0.82, n: 7, size: size * 0.28, life: 3.2, at: at + (i / front.length) * (o.roll != null ? o.roll : 0.35), burst: true, stagger: 0.25, dir: [facing * u(22), -u(14)], wind: facing * u(10), opacity: 0.8, seed: "v" + i + at });
      }
      camApi.shake(at + 0.05, u(4), 0.35);
      return army;
    };
    var lastPoseKey = null;
    function update(t) {
      var pose = poseAt(t), off = army.at(t);
      var fl = null;
      for (var i = 0; i < flashes.length; i++) if (t >= flashes[i].at && t < flashes[i].at + flashes[i].roll + 0.14) fl = flashes[i];
      var moving = off.dx !== 0 || off.dy !== 0 || pose === "march" || pose === "charge" || pose === "gallop" || pose === "drummer";
      var key = pose + "|" + (fl ? "f" : "") + "|" + f1(off.dx) + "|" + f1(off.dy);
      var cyc = pose === "charge" ? 2.6 : pose === "gallop" ? 1.8 : 1.5;
      for (var j = 0; j < men.length; j++) {
        var m = men[j], p = m.fixed || pose, href, N, idx = 0, bob = 0;
        if (cav) {
          var hp = p === "stand" || p === "aim" ? "stand" : p === "charge" ? "charge" : "gallop";
          N = hp === "stand" ? 1 : 6; idx = N > 1 ? Math.floor((((t * cyc + m.ph) % 1) + 1) % 1 * N) % N : 0;
          href = "#" + horseDef(lname, fid, idx, N, m.horse, hp);
          if (hp !== "stand") bob = -Math.abs(Math.sin((t * cyc + m.ph) * Math.PI * 2)) * size * 0.05;
        } else {
          if (p === "gallop") p = "march";
          if (fl && p === "aim" && m.rank === 0) { var ft = fl.at + (m.col / Math.max(1, cols)) * fl.roll; if (t >= ft && t < ft + 0.14) p = "fire"; }
          N = POSE_N[p] || 1; idx = N > 1 ? Math.floor((((t * cyc + m.ph * 0.35) % 1) + 1) % 1 * N) % N : 0;
          href = "#" + soldierDef(lname, fid, p, idx, N, m.skin);
          if (p === "march" || p === "charge") bob = -Math.abs(Math.sin((t * cyc + m.ph * 0.35) * Math.PI * 2)) * size * 0.025;
        }
        if (href !== m.href) { m.href = href; m.el.setAttribute("href", href); }
        if (moving || key !== lastPoseKey || !m.tf) { m.tf = 1; m.el.setAttribute("transform", "translate(" + A2(m.x + off.dx, m.y + off.dy + bob) + ") scale(" + f2(m.s * facing) + " " + f2(m.s) + ")"); }
      }
      for (var k = 0; k < flags.length; k++) flags[k].el.setAttribute("transform", "translate(" + A2(flags[k].x + off.dx, flags[k].y + off.dy + (moving ? -Math.abs(Math.sin(t * cyc * Math.PI * 2 + k)) * size * 0.03 : 0)) + ")");
      if (mover) mover(off, t);
      lastPoseKey = key;
    }
    a.anims.push(update);
    return army;
  };

  // ───────────────────────── cannon ─────────────────────────
  /** Field gun with crew. opts: layer, x (wheel centre), y (ground), size (wheel diameter), facing, faction, crew. */
  S.cannon = function (opts) {
    opts = opts || {};
    var a = cur(), lname = opts.layer || "ground", L = a.layers[lname];
    var F = fac(opts.faction || "redcoat"), facing = opts.facing === -1 || opts.facing === "left" ? -1 : 1;
    var s = (opts.size || u(60)) / 60, x = opts.x != null ? opts.x : a.ww / 2, y = opts.y != null ? opts.y : a.horizon + a.wh * 0.25;
    var g = G(L.g, { class: "ph-cannon" });
    var body = G(g);
    var wood = opts.wood || "#5E7A3A", iron = "#2A2724";
    // carriage trail
    P(body, poly([[0, -22], [-70, -4], [-74, 2], [-66, 2], [2, -12]]), wood);
    P(body, poly([[-8, -34], [10, -34], [14, -12], [-12, -12]]), shade(wood, -0.15));
    // barrel
    var bar = G(body, { transform: "rotate(-9 0 -30)" });
    P(bar, poly([[-26, -36], [52, -33], [52, -27], [-26, -24]]), iron);
    P(bar, poly([[-26, -36], [52, -33], [52, -31], [-26, -33]]), shade(iron, 0.35), { opacity: 0.6 });
    R(bar, 48, -35, 8, 10, iron, { rx: 2 });
    Ci(bar, -28, -30, 5, iron);
    // wheel
    Ci(body, 0, -24, 24, "none", { stroke: shade(wood, -0.3), "stroke-width": 5 });
    for (var i = 0; i < 6; i++) { var an = (i / 6) * Math.PI; Ln(body, -Math.cos(an) * 22, -24 - Math.sin(an) * 22, Math.cos(an) * 22, -24 + Math.sin(an) * 22, shade(wood, -0.2), 3); }
    Ci(body, 0, -24, 5, iron);
    // crew
    var crew = opts.crew != null ? opts.crew : 2;
    var crewUses = [];
    for (var c = 0; c < crew; c++) { var use = sv("use", { href: "#" + soldierDef(lname, F === FACTIONS[opts.faction] ? opts.faction : S.guessFaction(opts.faction), "stand", 0, 1, c + 1), transform: "translate(" + A2(-60 - c * 26, 2) + ") scale(" + (0.92 - c * 0.08) + ")" }, g); crewUses.push(use); }
    var flash = P(body, poly([[56, -41], [84, -52], [70, -36], [96, -30], [70, -26], [80, -12], [56, -22]]), "#FFE28A", { opacity: 0, transform: "rotate(-9 0 -30)" });
    var fires = [];
    var it = { el: g, x: x, y: y, w: 110 * s, h: 60 * s, rect: { x: x - 80 * s, y: y - 60 * s, w: 150 * s, h: 64 * s }, facing: facing };
    it.fire = function (at, o) {
      o = o || {};
      fires.push(at);
      var mx = x + facing * 54 * s, my = y - 38 * s;
      S.smoke({ layer: lname, x: mx, y: my, n: 14, size: 22 * s, life: o.life || 4.5, at: at, burst: true, stagger: 0.3, dir: [facing * u(60), -u(26)], wind: facing * u(8), opacity: 0.9, seed: "c" + at + x });
      camApi.shake(at + 0.02, u(9), 0.45);
      return it;
    };
    a.anims.push(function (t) {
      var rec = 0, fo = 0;
      for (var i = 0; i < fires.length; i++) { var k = t - fires[i]; if (k >= 0 && k < 0.9) { rec = Math.max(rec, Math.sin(Math.min(1, k / 0.9) * Math.PI) * 14 * (1 - k)); } if (k >= 0 && k < 0.12) fo = 1 - k / 0.12; }
      body.setAttribute("transform", "translate(" + A2(-rec * facing, 0) + ")");
      flash.setAttribute("opacity", fo.toFixed(2));
    });
    g.setAttribute("transform", "translate(" + A2(x, y) + ") scale(" + f2(s * facing) + " " + f2(s) + ")");
    return it;
  };

  // ───────────────────────── generals at the map table ─────────────────────────
  /** Face features (eyes, brows, nose, mouth, hair, beard) in a head of radius hr at (hx,hy), facing +x-ish (3/4). */
  function faceMk(hx, hy, hr, sk, r, opts) {
    opts = opts || {};
    var s = "", hair = opts.hair || "#3A2A1A", eyeY = hy - hr * 0.1;
    s += mkCi(hx, hy, hr, sk) + mkEl(hx - hr * 0.3, hy + hr * 0.1, hr * 0.8, hr * 0.95, shade(sk, -0.22), ' opacity="0.35"');
    if (opts.paint) s += mkEl(hx + hr * 0.45, hy + hr * 0.25, hr * 0.3, hr * 0.22, mix(sk, "#FFD0A0", 0.5), ' opacity="0.45"') + mkEl(hx + hr * 0.55, hy - hr * 0.35, hr * 0.35, hr * 0.14, "#FFE2A8", ' opacity="0.35"') + mkEl(hx - hr * 0.1, hy + hr * 0.78, hr * 0.5, hr * 0.14, shade(sk, -0.4), ' opacity="0.35"') + mkEl(hx + hr * 0.3, hy + hr * 0.12, hr * 0.12, hr * 0.26, shade(sk, -0.38), ' opacity="0.35"');
    // hair
    var style = opts.hairStyle || "short";
    if (style !== "bald") s += '<path d="M' + A2(hx - hr * 1.02, hy - hr * 0.1) + " Q" + A2(hx - hr * 0.9, hy - hr * 1.25) + " " + A2(hx + hr * 0.2, hy - hr * 1.05) + " Q" + A2(hx + hr * 0.9, hy - hr * 1.0) + " " + A2(hx + hr * 1.0, hy - hr * 0.3) + " Q" + A2(hx + hr * 0.6, hy - hr * 0.55) + " " + A2(hx + hr * 0.1, hy - hr * 0.6) + " Q" + A2(hx - hr * 0.5, hy - hr * 0.6) + " " + A2(hx - hr * 0.8, hy - hr * 0.2) + ' Z" fill="' + hair + '"/>';
    if (style === "long") s += mkPoly([[hx - hr * 1.0, hy - hr * 0.2], [hx - hr * 1.1, hy + hr * 1.2], [hx - hr * 0.5, hy + hr * 1.1], [hx - hr * 0.6, hy + hr * 0.4]], hair);
    // brows, eyes
    var ex = opts.expr || "calm", bt = ex === "shout" || ex === "grit" ? hr * 0.1 : 0;
    s += mkLine(hx - hr * 0.15, eyeY - hr * 0.22 - bt * 0.6, hx + hr * 0.2, eyeY - hr * 0.26 + bt, shade(hair, -0.2), hr * 0.08) + mkLine(hx + hr * 0.4, eyeY - hr * 0.25 + bt, hx + hr * 0.7, eyeY - hr * 0.2 - bt * 0.6, shade(hair, -0.2), hr * 0.08);
    if (ex === "grit") s += mkLine(hx - hr * 0.2, eyeY - hr * 0.08, hx + hr * 0.2, eyeY - hr * 0.1, shade(sk, -0.3), hr * 0.08) + mkLine(hx + hr * 0.4, eyeY - hr * 0.1, hx + hr * 0.75, eyeY - hr * 0.08, shade(sk, -0.3), hr * 0.08);
    s += mkEl(hx + hr * 0.02, eyeY, hr * 0.13, hr * 0.08, "#F1E6D0") + mkCi(hx + hr * 0.05, eyeY, hr * 0.06, "#2A1F14") + mkEl(hx + hr * 0.55, eyeY, hr * 0.12, hr * 0.08, "#F1E6D0") + mkCi(hx + hr * 0.57, eyeY, hr * 0.06, "#2A1F14");
    // nose, mouth
    s += mkLine(hx + hr * 0.3, eyeY + hr * 0.02, hx + hr * 0.42, eyeY + hr * 0.4, shade(sk, -0.35), hr * 0.06) + mkLine(hx + hr * 0.3, eyeY + hr * 0.42, hx + hr * 0.42, eyeY + hr * 0.4, shade(sk, -0.35), hr * 0.06);
    if (ex === "shout") s += mkEl(hx + hr * 0.36, hy + hr * 0.58, hr * 0.22, hr * 0.24, "#3A1A12") + mkEl(hx + hr * 0.36, hy + hr * 0.46, hr * 0.17, hr * 0.06, "#F1E6D0") + mkEl(hx + hr * 0.36, hy + hr * 0.72, hr * 0.1, hr * 0.06, "#C0564A");
    if (opts.moustache) s += '<path d="M' + A2(hx + hr * 0.05, hy + hr * 0.42) + " q" + A2(hr * 0.3, -hr * 0.2) + " " + A2(hr * 0.65, hr * 0.02) + '" fill="none" stroke="' + hair + '" stroke-width="' + f2(hr * 0.1) + '" stroke-linecap="round"/>';
    else if (ex !== "shout") s += mkLine(hx + hr * 0.12, hy + hr * 0.5, hx + hr * 0.58, hy + hr * 0.5, shade(sk, -0.45), hr * 0.05);
    if (opts.beard) s += '<path d="M' + A2(hx - hr * 0.5, hy + hr * 0.3) + " Q" + A2(hx + hr * 0.1, hy + hr * 1.5) + " " + A2(hx + hr * 0.85, hy + hr * 0.35) + " Q" + A2(hx + hr * 0.2, hy + hr * 0.7) + " " + A2(hx - hr * 0.5, hy + hr * 0.3) + ' Z" fill="' + hair + '"/>';
    if (opts.sideburns) s += mkPoly([[hx - hr * 0.9, hy - hr * 0.2], [hx - hr * 0.6, hy - hr * 0.1], [hx - hr * 0.5, hy + hr * 0.5], [hx - hr * 0.85, hy + hr * 0.3]], hair);
    return s;
  }
  S.faceMarkup = faceMk;
  var HAIRC = ["#3A2A1A", "#1E1A18", "#8A6A3A", "#B8B0A0", "#5A3A22", "#E6DCC8"];
  /**
   * Commander (half-length figure, ~260 units tall at scale 1). opts: layer, parent, x, y (waist line), size (height),
   * faction, facing, seed, point (arm points at a target), hat (override), name.
   * Returns { el, speak(from,to), point(from,to), nod(at) }.
   */
  S.general = function (opts) {
    opts = opts || {};
    var a = cur(), lname = opts.layer || "ground", L = a.layers[lname];
    var F = fac(opts.faction || "redcoat"), facing = opts.facing === -1 || opts.facing === "left" ? -1 : 1;
    var r = rng("gen" + (opts.seed || opts.name || opts.faction));
    var g = G(opts.parent || L.g, { class: "ph-general" });
    var s = (opts.size || u(300)) / 260;
    var sk = SKINS[Math.floor(r() * SKINS.length)], hair = HAIRC[Math.floor(r() * HAIRC.length)];
    var coat = F.coat, trim = F.trim, G2 = facGrads(lname, F);
    var html = "";
    // torso (waist at y=0, shoulders at -150) with rounded painted shoulders
    html += '<path d="M-50 0 L54 0 L60 -118 Q58 -152 26 -158 L-16 -158 Q-52 -152 -56 -118 Z" fill="' + G2.coat + '"/>';
    for (var fd = 0; fd < 5; fd++) html += '<path d="M' + A2(-30 + fd * 14, -140) + " q" + A2((r() - 0.5) * 8, 60) + " " + A2(-4 + fd * 2, 130) + '" fill="none" stroke="' + shade(coat, -0.5) + '" stroke-width="2" opacity="0.4"/>';
    html += '<path d="M58 -118 Q56 -150 26 -156" fill="none" stroke="#FFE0A0" stroke-width="4" opacity="0.5"/>';
    html += mkPoly([[-8, -150], [30, -150], [14, -30], [-2, -30]], F.hat === "bork" ? GOLD : "#F1E6C8"); // waistcoat / breastplate
    html += mkLine(-20, -146, 20, -20, isArmour(F) ? GOLD : "#B3271E", 14, ' opacity="0.85"'); // sash
    html += '<path d="M-56 -150 Q-36 -162 -14 -152 L-18 -132 Q-38 -140 -58 -128 Z" fill="' + G2.gold + '"/>' + '<path d="M18 -152 Q40 -162 60 -150 L62 -128 Q42 -140 22 -132 Z" fill="' + G2.gold + '"/>'; // epaulettes
    for (var e = 0; e < 9; e++) html += mkLine(-58 + e * 2.2, -130 + e * 0.6, -60 + e * 2.2 + (r() - 0.5) * 3, -106 + (r() - 0.5) * 6, e % 2 ? "#B8862A" : "#F0D070", 2.2) + mkLine(62 - e * 2.2, -130 + e * 0.6, 64 - e * 2.2 + (r() - 0.5) * 3, -106 + (r() - 0.5) * 6, e % 2 ? "#B8862A" : "#F0D070", 2.2); // fringe
    html += mkCi(-36, -146, 6, "#F0D070") + mkCi(40, -146, 6, "#F0D070");
    html += mkLine(-6, -140, 2, -40, GOLD, 3); for (var b = 0; b < 6; b++) html += mkCi(-2, -130 + b * 16, 3.2, GOLD);
    html += mkPoly([[-16, -150], [-4, -168], [34, -168], [26, -150]], shade(coat, -0.3)) + mkRect(-4, -170, 36, 22, "#F1E6C8", ' opacity="0.9"'); // collar + stock
    var statics = sv("g", null, g); statics.innerHTML = html;
    // back arm (hand on hip)
    var backArm = sv("g", null, g); backArm.innerHTML = mkLine(-46, -138, -72, -80, shade(coat, -0.15), 20) + mkLine(-72, -80, -36, -46, shade(coat, -0.15), 18) + mkCi(-36, -46, 10, sk);
    // head
    var head = sv("g", { class: "ph-gen-head" }, g);
    var hr = 30, hx = 12, hy = -204;
    var hatKind = opts.hat || (F.hat === "shako" || F.hat === "kepi" || F.hat === "tricorne" || F.hat === "cavalier" ? "bicorne" : F.hat === "galea" ? "plumed" : F.hat === "bork" ? "bork" : F.hat);
    head.innerHTML = faceMk(hx, hy, hr, sk, r, { hair: hair, moustache: r() > 0.5, sideburns: r() > 0.5, beard: r() > 0.8, hairStyle: r() > 0.85 ? "long" : "short" }) + hatMk(hatKind, hx, hy, hr, F);
    // front arm (points / gestures)
    var arm = sv("g", { class: "ph-gen-arm" }, g);
    arm.innerHTML = mkLine(0, 0, 40, 56, coat, 20) + mkLine(40, 56, 96, 70, coat, 18) + mkCi(96, 70, 10, sk) + mkLine(96, 70, 114, 74, sk, 7);
    var armPivot = [44, -138];
    g.setAttribute("transform", "translate(" + A2(opts.x != null ? opts.x : a.ww / 2, opts.y != null ? opts.y : a.wh * 0.8) + ") scale(" + f2(s * facing) + " " + f2(s) + ")");
    var speaks = [], points = [], nods = [];
    var it = { el: g, x: opts.x, y: opts.y, s: s, facing: facing, F: F, head: head, arm: arm };
    it.speak = function (from, to) { speaks.push([from, to != null ? to : 1e9]); return it; };
    it.point = function (from, to) { points.push([from, to != null ? to : 1e9]); return it; };
    it.nod = function (at) { nods.push(at); return it; };
    var words = V.words || [], wi = 0;
    function speaking(t) {
      var inS = false; for (var i = 0; i < speaks.length; i++) if (t >= speaks[i][0] && t < speaks[i][1]) inS = true;
      if (!inS) return 0;
      if (!words.length) return 0.6 + 0.4 * vnoise(t * 5, 2);
      wi = clamp(wi, 0, words.length - 1);
      while (wi > 0 && words[wi].start > t) wi--;
      while (wi < words.length - 1 && words[wi + 1].start <= t) wi++;
      var w = words[wi];
      return t >= w.start - 0.05 && t <= w.end + 0.08 ? 1 : 0;
    }
    a.anims.push(function (t) {
      var sp = speaking(t), pt = 0;
      for (var i = 0; i < points.length; i++) if (t >= points[i][0] && t < points[i][1]) pt = Math.min(1, (t - points[i][0]) / 0.6);
      var nod = 0; for (var k = 0; k < nods.length; k++) { var q = t - nods[k]; if (q >= 0 && q < 0.8) nod = Math.sin(q / 0.8 * Math.PI) * 6; }
      var hrz = sp ? Math.sin(t * 9) * 2.2 + Math.sin(t * 3.1) * 1.2 : Math.sin(t * 0.8 + s) * 0.8;
      head.setAttribute("transform", "rotate(" + f2(hrz + nod) + " " + A2(hx, hy + hr) + ")");
      var base = pt ? -34 : -4, gest = sp ? Math.sin(t * 7.3) * 6 * (pt ? 0.5 : 1) : Math.sin(t * 0.7) * 1.5;
      arm.setAttribute("transform", "translate(" + A2(armPivot[0], armPivot[1]) + ") rotate(" + f2(base + gest) + ")");
    });
    return it;
  };
  /**
   * Candle-lit map table (world coords). opts: layer, x (centre), y (table front edge), w, candles, map (true), faction (map colours).
   * Returns { el, top (y of the table top), x, w, light(t) }.
   */
  S.table = function (opts) {
    opts = opts || {};
    var a = cur(), lname = opts.layer || "ground", L = a.layers[lname];
    var x = opts.x != null ? opts.x : a.ww / 2, y = opts.y != null ? opts.y : a.wh * 0.86, w = opts.w || a.ww * 0.7, d = w * 0.22;
    var g = G(L.g, { class: "ph-table" });
    var wood = "#4A2E1A";
    P(g, poly([[x - w / 2, y], [x + w / 2, y], [x + w * 0.42, y - d], [x - w * 0.42, y - d]]), shade(wood, 0.15));
    R(g, x - w / 2, y, w, d * 0.22, wood);
    R(g, x - w / 2, y, w, d * 0.04, shade(wood, 0.35), { opacity: 0.7 });
    Ln(g, x - w * 0.45, y + d * 0.22, x - w * 0.47, y + d * 1.1, shade(wood, -0.2), d * 0.12); Ln(g, x + w * 0.45, y + d * 0.22, x + w * 0.47, y + d * 1.1, shade(wood, -0.2), d * 0.12);
    // map on the table (perspective parallelogram)
    var mg = G(g, { class: "ph-table-map" });
    var m0 = [x - w * 0.34, y - d * 0.12], m1 = [x + w * 0.3, y - d * 0.1], m2 = [x + w * 0.27, y - d * 0.82], m3 = [x - w * 0.28, y - d * 0.84];
    P(mg, poly(rough([m0, m1, m2, m3], d * 0.02, rng("tmap"), true)), C.parchment);
    var mr = rng("tablemap");
    // rivers, roads, towns, unit blocks
    var riv = []; for (var i = 0; i <= 6; i++) riv.push([lerp(m3[0], m2[0], i / 6) + (mr() - 0.5) * w * 0.05, lerp(m3[1], m0[1], 0.3 + Math.sin(i * 1.4) * 0.2)]);
    P(mg, smoothPath(riv), "none", { stroke: "#5C86A6", "stroke-width": f1(d * 0.03), opacity: 0.8 });
    for (var k = 0; k < 4; k++) El(mg, lerp(m0[0], m1[0], 0.15 + k * 0.22), lerp(m0[1], m3[1], 0.25 + (k % 2) * 0.4), w * 0.03, d * 0.05, "#5A7A3A", { opacity: 0.6 });
    var FA = fac(opts.faction || "redcoat"), FB = fac(S.enemyOf(opts.faction || "redcoat"));
    for (var ub = 0; ub < 3; ub++) { R(mg, lerp(m0[0], m1[0], 0.2 + ub * 0.1), lerp(m0[1], m3[1], 0.62), w * 0.05, d * 0.06, FA.coat); R(mg, lerp(m0[0], m1[0], 0.5 + ub * 0.1), lerp(m0[1], m3[1], 0.3), w * 0.05, d * 0.06, FB.coat); }
    P(mg, "M" + A2(lerp(m0[0], m1[0], 0.3), lerp(m0[1], m3[1], 0.58)) + " Q" + A2(lerp(m0[0], m1[0], 0.45), lerp(m0[1], m3[1], 0.95)) + " " + A2(lerp(m0[0], m1[0], 0.62), lerp(m0[1], m3[1], 0.42)), "none", { stroke: FA.coat, "stroke-width": f1(d * 0.035), "stroke-dasharray": f1(d * 0.08) + " " + f1(d * 0.04) });
    // props: papers, dividers, goblet
    P(g, poly(rough([[x + w * 0.3, y - d * 0.2], [x + w * 0.44, y - d * 0.22], [x + w * 0.42, y - d * 0.5], [x + w * 0.29, y - d * 0.48]], d * 0.01, mr, true)), "#F1E6C8");
    for (var ln = 0; ln < 4; ln++) Ln(g, x + w * 0.32, y - d * (0.26 + ln * 0.05), x + w * 0.41, y - d * (0.27 + ln * 0.05), "#6A5A4A", d * 0.008);
    Ln(g, x - w * 0.36, y - d * 0.3, x - w * 0.31, y - d * 0.5, STEEL2, d * 0.02); Ln(g, x - w * 0.3, y - d * 0.3, x - w * 0.31, y - d * 0.5, STEEL2, d * 0.02);
    El(g, x - w * 0.4, y - d * 0.55, d * 0.06, d * 0.03, GOLD); R(g, x - w * 0.4 - d * 0.015, y - d * 0.72, d * 0.03, d * 0.17, GOLD); El(g, x - w * 0.4, y - d * 0.72, d * 0.07, d * 0.035, shade(GOLD, -0.2));
    // candles
    var nC = opts.candles != null ? opts.candles : 2, candles = [];
    for (var c = 0; c < nC; c++) {
      var cx = x + w * (nC === 1 ? 0.0 : c === 0 ? -0.12 : 0.36), cy = y - d * (c === 0 ? 0.62 : 0.3), ch = d * 0.55;
      var cg = G(g, { class: "ph-candle" });
      El(cg, cx, cy, d * 0.07, d * 0.03, "#8A7A5A"); R(cg, cx - d * 0.02, cy - ch, d * 0.04, ch, "#F1E6C8"); Ln(cg, cx, cy - ch, cx, cy - ch - d * 0.04, "#2A1F14", d * 0.008);
      var glow = Ci(cg, cx, cy - ch - d * 0.09, d * 0.9, rgrad(L.defs, [[0, "#FFD27A", 0.6], [0.4, "#FFB347", 0.18], [1, "#FFB347", 0]]));
      var flame = P(cg, "M0 0 Q" + A2(-d * 0.035, -d * 0.07) + " 0 " + f1(-d * 0.14) + " Q" + A2(d * 0.035, -d * 0.07) + " 0 0 Z", "#FFE28A");
      var flame2 = P(cg, "M0 0 Q" + A2(-d * 0.015, -d * 0.04) + " 0 " + f1(-d * 0.07) + " Q" + A2(d * 0.015, -d * 0.04) + " 0 0 Z", "#FFB347");
      candles.push({ flame: flame, flame2: flame2, glow: glow, x: cx, y: cy - ch - d * 0.04, k: c * 3.1 });
    }
    a.anims.push(function (t) { for (var i = 0; i < candles.length; i++) { var cd = candles[i], n = vnoise(t * 8 + cd.k, i), sx = 0.85 + n * 0.3, lean = Math.sin(t * 6 + cd.k) * 6 * n; cd.flame.setAttribute("transform", "translate(" + A2(cd.x, cd.y) + ") rotate(" + f1(lean) + ") scale(" + f2(sx) + " " + f2(0.9 + n * 0.3) + ")"); cd.flame2.setAttribute("transform", "translate(" + A2(cd.x, cd.y) + ") rotate(" + f1(lean) + ") scale(" + f2(sx) + ")"); cd.glow.setAttribute("opacity", (0.75 + n * 0.25).toFixed(2)); } });
    return { el: g, x: x, y: y, w: w, d: d, top: y - d, map: mg, rect: { x: x - w / 2, y: y - d * 1.2, w: w, h: d * 1.45 }, candles: candles };
  };
  /** Dark war-room interior for council scenes: tent canvas / stone wall, lamp pool. */
  S.interior = function (opts) {
    opts = opts || {};
    var a = cur(), kind = opts.kind || "tent", W = a.ww, H = a.wh;
    for (var n in a.layers) a.layers[n].g.innerHTML = "";
    var sky = a.layers.sky, mid = a.layers.mid, r = rng("interior");
    R(sky.g, a.bx, a.by, a.bw, a.bh, "#1E150D");
    if (kind === "tent") {
      for (var i = 0; i < 9; i++) { var x = a.bx + (i / 8) * a.bw; P(mid.g, poly([[x - a.bw * 0.08, a.by], [x + a.bw * 0.08, a.by], [x + a.bw * 0.11, H * 0.78], [x - a.bw * 0.11, H * 0.78]]), i % 2 ? "#4A3826" : "#3E2E1E"); }
      P(mid.g, poly([[a.bx, H * 0.78], [a.bx + a.bw, H * 0.78], [a.bx + a.bw, a.by + a.bh], [a.bx, a.by + a.bh]]), "#2A1E12");
      Ln(mid.g, W * 0.5, a.by, W * 0.5, H * 0.78, "#2A1E12", W * 0.012);
    } else {
      R(mid.g, a.bx, a.by, a.bw, a.bh, "#4A4034");
      for (var s = 0; s < 70; s++) R(mid.g, a.bx + r() * a.bw, a.by + r() * (H * 0.78 - a.by), W * (0.05 + r() * 0.05), H * 0.035, s % 2 ? "#3E3428" : "#56493C", { opacity: 0.7 });
      P(mid.g, poly([[a.bx, H * 0.78], [a.bx + a.bw, H * 0.78], [a.bx + a.bw, a.by + a.bh], [a.bx, a.by + a.bh]]), "#2A241E");
      // window with pale light
      R(mid.g, W * 0.72, H * 0.1, W * 0.1, H * 0.3, "#8A94A0", { opacity: 0.5 }); Ln(mid.g, W * 0.77, H * 0.1, W * 0.77, H * 0.4, "#2A241E", W * 0.006);
    }
    dabs(mid.g, a.bx, a.by, a.bw, a.bh, ["#5A4530", "#2A1E12", "#6E5A40"], 180, Math.max(W, H) * 0.05, r, 0.2);
    Ci(mid.g, W * 0.5, H * 0.55, Math.max(W, H) * 0.55, rgrad(mid.defs, [[0, "#FFC070", 0.35], [0.5, "#FFB347", 0.1], [1, "#000", 0.45]]));
    a.light.style.background = "radial-gradient(ellipse at 50% 60%, rgba(255,190,110,0.3) 0%, rgba(0,0,0,0) 60%)";
    return a;
  };

  // ───────────────────────── painted portrait bust in an oval gold frame ─────────────────────────
  /** opts: layer/parent, cx, cy, w, faction, seed, name, hat. Returns { el, rect }. */
  S.portrait = function (opts) {
    opts = opts || {};
    var a = cur(), lname = opts.layer || "ground", L = a.layers[lname];
    var F = fac(opts.faction || "redcoat"), r = rng("portrait" + (opts.seed || opts.name || ""));
    var cx = opts.cx != null ? opts.cx : a.ww / 2, cy = opts.cy != null ? opts.cy : a.wh / 2, w = opts.w || Math.min(a.ww, a.wh) * 0.6, h = w * 1.28;
    var g = G(opts.parent || L.g, { class: "ph-portrait" });
    var rx = w / 2, ry = h / 2;
    // frame
    El(g, cx, cy + ry * 0.03, rx * 1.1, ry * 1.08, "#1E150D", { opacity: 0.5 });
    El(g, cx, cy, rx * 1.08, ry * 1.06, lgrad(L.defs, [[0, "#F0D68A"], [0.5, "#8F6A22"], [1, "#E0BC62"]], 0, 0, 1, 1));
    El(g, cx, cy, rx * 1.02, ry * 1.01, lgrad(L.defs, [[0, "#6E4E12"], [0.5, "#E8C46A"], [1, "#6E4E12"]], 0, 0, 1, 1));
    for (var o = 0; o < 28; o++) { var an = (o / 28) * Math.PI * 2; Ci(g, cx + Math.cos(an) * rx * 1.05, cy + Math.sin(an) * ry * 1.035, w * 0.012, o % 2 ? "#F4E0A0" : "#8F6A22"); }
    var cid = nid("pc"); sv("clipPath", { id: cid }, L.defs).appendChild(sv("ellipse", { cx: f1(cx), cy: f1(cy), rx: f1(rx), ry: f1(ry) }));
    var inner = G(g, { "clip-path": "url(#" + cid + ")" });
    // painted background
    R(inner, cx - rx, cy - ry, w, h, rgrad(L.defs, [[0, "#6E4A2A"], [0.6, "#3A2616"], [1, "#1E150D"]], 0.4, 0.35, 0.8));
    dabs(inner, cx - rx, cy - ry, w, h, ["#8A5A32", "#2A1A10", "#B88A52", "#4A3020"], 120, w * 0.12, r, 0.22);
    if (opts.scene !== false) { ridge(inner, cx - rx, cx + rx, cy + ry * 0.35, ry * 0.12, cy + ry, "#4A3A28", r, 10, { opacity: 0.8 }); S.smokeStatic(inner, cx + rx * 0.5, cy + ry * 0.25, w * 0.08, r); }
    // bust
    var bust = G(inner);
    var html = "";
    var s = w / 370, bx = cx, by = cy + ry * 1.02;
    var G2 = facGrads(lname, F);
    html += '<path d="M-150 0 L150 0 L138 -96 Q120 -140 60 -150 L-60 -150 Q-120 -140 -138 -96 Z" fill="' + G2.coat + '"/>';
    for (var fd = 0; fd < 6; fd++) html += '<path d="M' + A2(-90 + fd * 36, -120) + " q" + A2((r() - 0.5) * 14, 60) + " " + A2(-6 + fd * 2, 118) + '" fill="none" stroke="' + shade(F.coat, -0.5) + '" stroke-width="3" opacity="0.35"/>';
    html += '<path d="M138 -96 Q122 -138 62 -148" fill="none" stroke="#FFE0A0" stroke-width="7" opacity="0.45"/>';
    if (isArmour(F)) { html += mkPoly([[-60, -150], [60, -150], [80, -40], [-80, -40]], STEEL2) + mkPoly([[-40, -150], [40, -150], [50, -60], [-50, -60]], STEEL, ' opacity="0.7"'); for (var ab = 0; ab < 4; ab++) html += mkLine(-70, -130 + ab * 22, 70, -130 + ab * 22, "#5A5A5E", 2); }
    else {
      html += mkPoly([[-40, -150], [40, -150], [30, -20], [-30, -20]], "#F1E6C8") + mkLine(-20, -140, 26, -20, "#B3271E", 24, ' opacity="0.85"');
      html += '<path d="M-136 -118 Q-100 -150 -54 -146 L-58 -108 Q-100 -112 -132 -88 Z" fill="' + G2.gold + '"/>' + '<path d="M136 -118 Q100 -150 54 -146 L58 -108 Q100 -112 132 -88 Z" fill="' + G2.gold + '"/>';
      for (var e = 0; e < 12; e++) html += mkLine(-134 + e * 6, -90 + e * 1.5, -138 + e * 6 + (r() - 0.5) * 6, -56 + (r() - 0.5) * 10, e % 2 ? "#B8862A" : "#F0D070", 4.5) + mkLine(134 - e * 6, -90 + e * 1.5, 138 - e * 6 + (r() - 0.5) * 6, -56 + (r() - 0.5) * 10, e % 2 ? "#B8862A" : "#F0D070", 4.5);
      html += mkCi(-96, -130, 9, "#F0D070") + mkCi(96, -130, 9, "#F0D070");
      for (var bt = 0; bt < 5; bt++) html += mkCi(-8, -120 + bt * 20, 5, GOLD) + mkCi(8, -120 + bt * 20, 5, GOLD);
      html += mkCi(-70, -90, 14, GOLD) + mkCi(-70, -90, 9, "#B3271E"); // medal
    }
    html += mkPoly([[-48, -150], [-36, -178], [46, -178], [50, -150]], shade(F.coat, -0.3)) + mkRect(-30, -182, 60, 30, "#F1E6C8", ' opacity="0.95"');
    html += mkRect(-14, -200, 28, 30, G2.skin); // neck
    var hr = 54, hx = 0, hy = -244;
    html += faceMk(hx, hy, hr, SKINS[Math.floor(r() * SKINS.length)], r, { hair: HAIRC[Math.floor(r() * HAIRC.length)], moustache: r() > 0.45, sideburns: r() > 0.4, beard: r() > 0.75, hairStyle: r() > 0.8 ? "long" : "short" });
    var hatKind = opts.hat || (F.hat === "shako" || F.hat === "kepi" || F.hat === "tricorne" ? "bicorne" : F.hat === "galea" ? "plumed" : F.hat);
    if (opts.hat !== "none") html += hatMk(hatKind, hx, hy, hr, F);
    bust.innerHTML = html;
    bust.setAttribute("transform", "translate(" + A2(bx, by) + ") scale(" + f2(s) + ")");
    // varnish highlight
    El(inner, cx - rx * 0.3, cy - ry * 0.5, rx * 0.6, ry * 0.3, "#FFF4D8", { opacity: 0.08 });
    var it = { el: g, cx: cx, cy: cy, w: w, h: h, rect: { x: cx - rx * 1.1, y: cy - ry * 1.08, w: rx * 2.2, h: ry * 2.16 } };
    return it;
  };
  /** Static smoke puffs (no animation) for painted backdrops. */
  S.smokeStatic = function (g, x, y, size, r) {
    for (var i = 0; i < 8; i++) El(g, x + i * size * 0.5 + (r() - 0.5) * size, y - i * size * 0.6, size * (0.6 + i * 0.25), size * (0.5 + i * 0.2), i % 2 ? C.smoke : C.smoke2, { opacity: (0.5 - i * 0.05).toFixed(2) });
  };

  // ───────────────────────── tactical battle map ─────────────────────────
  /**
   * Parchment top-down map. opts: layer, x, y, w, h, title, terrain { river, forest, hills, coast, towns:[{name,fx,fy}] }, seed.
   * Returns { el, x, y, w, h, rect, unit(spec), arrow(spec), move(unit, path, at, dur), pt(fx,fy) }.
   */
  S.battleMap = function (opts) {
    opts = opts || {};
    var a = cur(), lname = opts.layer || "ground", L = a.layers[lname];
    var x = opts.x != null ? opts.x : a.ww * 0.05, y = opts.y != null ? opts.y : a.wh * 0.08, w = opts.w || a.ww * 0.9, h = opts.h || a.wh * 0.84;
    var r = rng("bmap" + (opts.seed || "")), tr = opts.terrain || {};
    var g = G(L.g, { class: "ph-bmap" });
    var m = Math.min(w, h);
    P(g, poly(rough([[x + m * 0.01, y + m * 0.012], [x + w + m * 0.01, y + m * 0.012], [x + w + m * 0.01, y + h + m * 0.012], [x + m * 0.01, y + h + m * 0.012]], m * 0.01, r, true)), "#1E150D", { opacity: 0.45 });
    var sheet = P(g, poly(rough([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], m * 0.012, r, true)), C.parchment);
    var pt = parchTex(); if (pt) { var pid = nid("pp"); var pat = sv("pattern", { id: pid, patternUnits: "userSpaceOnUse", width: f1(u(240)), height: f1(u(240)) }, L.defs); sv("image", { href: pt, width: f1(u(240)), height: f1(u(240)) }, pat); P(g, sheet.getAttribute("d"), "url(#" + pid + ")"); }
    P(g, sheet.getAttribute("d"), rgrad(L.defs, [[0, "#000", 0], [0.7, "#6E4A14", 0.08], [1, "#6E4A14", 0.35]]));
    dabs(g, x, y, w, h, ["#C9A86A", "#F0E2C0", "#A88850"], 140, m * 0.05, r, 0.14);
    // terrain
    var terr = G(g, { class: "ph-bmap-terrain" });
    function pt2(fx, fy) { return { x: x + w * fx, y: y + h * fy }; }
    var inkG = "#5A7A3A", inkB = "#4E7FA8", inkH = "#8A6A3A";
    if (tr.coast) { var cpts = []; for (var i = 0; i <= 8; i++) cpts.push([x + w * (tr.coastSide === "right" ? 0.78 : 0.22) + Math.sin(i * 1.1 + r()) * w * 0.05, y + (h * i) / 8]); var cd = smoothPath(cpts) + " L" + A2(tr.coastSide === "right" ? x + w : x, y + h) + " L" + A2(tr.coastSide === "right" ? x + w : x, y) + " Z"; P(terr, cd, "#9EB8C8", { opacity: 0.7 }); for (var wv = 0; wv < 24; wv++) Ln(terr, x + w * (tr.coastSide === "right" ? 0.82 + r() * 0.15 : 0.03 + r() * 0.15), y + r() * h, x + w * (tr.coastSide === "right" ? 0.82 + r() * 0.15 : 0.03 + r() * 0.15) + m * 0.02, y + r() * h, inkB, m * 0.0025, { opacity: 0.6 }); }
    if (tr.river !== false) { var rp = []; var rx0 = tr.riverX != null ? tr.riverX : 0.55; for (var k = 0; k <= 7; k++) rp.push([x + w * (rx0 + Math.sin(k * 1.4 + 0.5) * 0.08 + (k / 7 - 0.5) * (tr.riverTilt || 0.1)), y + (h * k) / 7]); P(terr, smoothPath(rp), "none", { stroke: inkB, "stroke-width": f1(m * 0.012), opacity: 0.85, "stroke-linecap": "round" }); P(terr, smoothPath(rp), "none", { stroke: "#D8E6EE", "stroke-width": f1(m * 0.004), opacity: 0.6 }); }
    var nF = tr.forest != null ? tr.forest : 3;
    for (var f = 0; f < nF; f++) { var fx = x + w * (0.1 + r() * 0.8), fy = y + h * (0.1 + r() * 0.8), fs = m * (0.05 + r() * 0.06); for (var q = 0; q < 9; q++) { var qa = r() * 6.3, qd = r() * fs; Ci(terr, fx + Math.cos(qa) * qd, fy + Math.sin(qa) * qd * 0.7, fs * 0.22, q % 2 ? inkG : shade(inkG, -0.2), { opacity: 0.7 }); } }
    var nH = tr.hills != null ? tr.hills : 3;
    for (var hh = 0; hh < nH; hh++) { var hx = x + w * (0.1 + r() * 0.8), hy = y + h * (0.1 + r() * 0.8), hs2 = m * (0.04 + r() * 0.05); for (var cc = 0; cc < 4; cc++) P(terr, "M" + A2(hx - hs2 * (1 - cc * 0.22), hy + hs2 * 0.3) + " Q" + A2(hx, hy - hs2 * (0.6 - cc * 0.1)) + " " + A2(hx + hs2 * (1 - cc * 0.22), hy + hs2 * 0.3), "none", { stroke: inkH, "stroke-width": f1(m * 0.004), opacity: 0.7 }); }
    arr(tr.towns).slice(0, 6).forEach(function (tn) { var p = pt2(tn.fx != null ? tn.fx : r(), tn.fy != null ? tn.fy : r()); for (var b = 0; b < 4; b++) R(terr, p.x + (b % 2) * m * 0.016 - m * 0.016, p.y + Math.floor(b / 2) * m * 0.014 - m * 0.014, m * 0.013, m * 0.011, "#4A3522"); worldText(lname, { x: f1(p.x + m * 0.025), y: f1(p.y + m * 0.006), class: "ph-bmap-town", style: { fontSize: px(m * 0.03) }, text: plain(tn.name || "") }, terr, p.x + m * 0.025 + plain(tn.name || "").length * m * 0.008, p.y - m * 0.005, plain(tn.name || "").length * m * 0.016, m * 0.03); });
    // compass + title + scale bar
    var cx2 = x + w * 0.92, cy2 = y + h * 0.12, cr = m * 0.05;
    Ci(terr, cx2, cy2, cr, "none", { stroke: C.ink, "stroke-width": f1(m * 0.003) });
    P(terr, poly([[cx2, cy2 - cr * 1.4], [cx2 + cr * 0.25, cy2], [cx2, cy2 + cr * 0.6], [cx2 - cr * 0.25, cy2]]), C.ink);
    worldText(lname, { x: f1(cx2), y: f1(cy2 - cr * 1.55), class: "ph-bmap-town", "text-anchor": "middle", style: { fontSize: px(m * 0.035) }, text: "N" }, terr, cx2, cy2 - cr * 1.7, m * 0.03, m * 0.035);
    if (opts.title) worldText(lname, { x: f1(x + w * 0.04), y: f1(y + h * 0.09), class: "ph-bmap-title", style: { fontSize: px(m * 0.055) }, text: plain(opts.title).toUpperCase() }, terr, x + w * 0.04 + plain(opts.title).length * m * 0.02, y + h * 0.09 - m * 0.02, plain(opts.title).length * m * 0.04, m * 0.055);
    Ln(terr, x + w * 0.04, y + h * 0.95, x + w * 0.2, y + h * 0.95, C.ink, m * 0.004); for (var sb = 0; sb <= 4; sb++) Ln(terr, x + w * (0.04 + sb * 0.04), y + h * 0.94, x + w * (0.04 + sb * 0.04), y + h * 0.96, C.ink, m * 0.003);
    var units = G(g, { class: "ph-bmap-units" }), arrows = G(g, { class: "ph-bmap-arrows" });
    g.insertBefore(arrows, units);
    var map = { el: g, x: x, y: y, w: w, h: h, m: m, rect: { x: x, y: y, w: w, h: h }, pt: pt2, units: [], arrows: [] };
    /** Unit block. spec: faction, fx, fy, kind (infantry|cavalry|artillery), label, w (fraction), at (appear). */
    map.unit = function (spec) {
      var F = fac(spec.faction || "redcoat"), p = pt2(spec.fx, spec.fy), uw = (spec.w || 0.09) * w, uh = uw * 0.5;
      var ug = G(units, { class: "ph-bmap-unit" });
      var box = G(ug);
      R(box, -uw / 2 + uw * 0.03, -uh / 2 + uh * 0.08, uw, uh, "#1E150D", { opacity: 0.35 });
      R(box, -uw / 2, -uh / 2, uw, uh, F.coat, { stroke: C.cream, "stroke-width": f1(m * 0.004) });
      var kind = spec.kind || "infantry";
      if (kind === "infantry") { Ln(box, -uw / 2, -uh / 2, uw / 2, uh / 2, C.cream, m * 0.003); Ln(box, uw / 2, -uh / 2, -uw / 2, uh / 2, C.cream, m * 0.003); }
      else if (kind === "cavalry") Ln(box, -uw / 2, uh / 2, uw / 2, -uh / 2, C.cream, m * 0.004);
      else Ci(box, 0, 0, uh * 0.22, C.cream);
      var lab = spec.label ? sv("text", { x: 0, y: f1(uh * 0.95 + m * 0.01), class: "ph-bmap-label", "text-anchor": "middle", style: { fontSize: px(m * 0.028) }, text: plain(spec.label) }, ug) : null;
      if (lab) a.texts.push({ el: lab, x: p.x, y: p.y + uh * 0.95, w: plain(spec.label).length * m * 0.018, h: m * 0.03, k: L.k });
      var it = { el: ug, x: p.x, y: p.y, w: uw, h: uh, F: F, box: box, label: lab, path: null };
      ug.setAttribute("transform", "translate(" + A2(p.x, p.y) + ")");
      var at = spec.at != null ? cT(spec.at) : 0.2;
      a.tl.fromTo(ug, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.3, ease: "outCubic" });
      a.tl.fromTo(box, { scale: 1.6 }, { scale: 1 }, { at: at, dur: 0.45, ease: "outCubic" });
      map.units.push(it);
      return it;
    };
    /**
     * Manoeuvre arrow. spec: faction, from [fx,fy], via [fx,fy] (optional bend), to [fx,fy], at, dur, dashed (retreat), width, unit (moves along).
     */
    map.arrow = function (spec) {
      var F = fac(spec.faction || "redcoat"), p0 = pt2(spec.from[0], spec.from[1]), p2 = pt2(spec.to[0], spec.to[1]);
      var p1 = spec.via ? pt2(spec.via[0], spec.via[1]) : { x: (p0.x + p2.x) / 2 + (p2.y - p0.y) * 0.15, y: (p0.y + p2.y) / 2 - (p2.x - p0.x) * 0.15 };
      var d = "M" + A2(p0.x, p0.y) + " Q" + A2(p1.x, p1.y) + " " + A2(p2.x, p2.y);
      var ag = G(arrows, { class: "ph-bmap-arrow" });
      var wdt = (spec.width || 0.014) * m;
      var col = spec.color || F.coat;
      var under = P(ag, d, "none", { stroke: "#1E150D", "stroke-width": f1(wdt * 1.5), "stroke-linecap": "round", opacity: 0.35 });
      var line = P(ag, d, "none", { stroke: col, "stroke-width": f1(wdt), "stroke-linecap": "round", "stroke-dasharray": spec.dashed ? f1(wdt * 1.6) + " " + f1(wdt * 1.1) : null });
      var hi = P(ag, d, "none", { stroke: "#FFF2D0", "stroke-width": f1(wdt * 0.25), "stroke-linecap": "round", opacity: 0.45, "stroke-dasharray": spec.dashed ? f1(wdt * 1.6) + " " + f1(wdt * 1.1) : null });
      // arrowhead at the end, oriented along the curve
      var tx = p2.x - p1.x, ty = p2.y - p1.y, an = Math.atan2(ty, tx) * 180 / Math.PI;
      var headG = G(ag, { transform: "translate(" + A2(p2.x, p2.y) + ") rotate(" + f1(an) + ")" });
      var head = P(headG, poly([[0, 0], [-wdt * 2.4, -wdt * 1.9], [-wdt * 1.4, 0], [-wdt * 2.4, wdt * 1.9]]), col, { stroke: "#1E150D", "stroke-width": f1(wdt * 0.15), "stroke-opacity": 0.4 });
      var at = cT(spec.at != null ? spec.at : 0.5), dur = spec.dur || 1.2;
      a.tl.fromTo([under, line, hi], { draw: 0 }, { draw: 1 }, { at: at, dur: dur, ease: "inOutCubic" });
      a.tl.fromTo(head, { opacity: 0, scale: 0.2 }, { opacity: 1, scale: 1 }, { at: at + dur - 0.1, dur: 0.3, ease: "outBack" });
      var it = { el: ag, path: line, at: at, dur: dur, p0: p0, p1: p1, p2: p2, point: function (q) { q = clamp(q, 0, 1); var mt = 1 - q; return { x: mt * mt * p0.x + 2 * mt * q * p1.x + q * q * p2.x, y: mt * mt * p0.y + 2 * mt * q * p1.y + q * q * p2.y }; } };
      if (spec.unit) map.move(spec.unit, it, at + (spec.unitDelay != null ? spec.unitDelay : 0.3), spec.unitDur || dur * 1.3, spec.unitEnd);
      map.arrows.push(it);
      return it;
    };
    /** Move a unit block along an arrow between at and at+dur (ends at fraction `end`, default 0.85). */
    map.move = function (unit, arrow, at, dur, end) {
      var e = E("inOutSine"), endF = end != null ? end : 0.85;
      var reg = null; for (var ri = 0; ri < a.texts.length; ri++) if (a.texts[ri].el === unit.label) reg = a.texts[ri];
      if (unit.label) a.tl.to(unit.label, { opacity: 0 }, { at: cT(at), dur: 0.4, ease: "inQuad" });
      a.anims.push(function (t) { var p = e(clamp((t - at) / Math.max(0.01, dur), 0, 1)); var q = arrow.point(p * endF); unit.el.setAttribute("transform", "translate(" + A2(q.x, q.y) + ")"); if (reg) { reg.x = q.x; reg.y = q.y + unit.h * 0.95; } });
      return unit;
    };
    /** Flash a clash burst (crossed sabres / explosion) at a point. */
    map.clash = function (fx, fy, at, faction) {
      var p = pt2(fx, fy), cg = G(g, { class: "ph-bmap-clash" }), col = faction ? fac(faction).coat : "#B3271E";
      for (var i = 0; i < 8; i++) { var an = (i / 8) * Math.PI * 2; Ln(cg, p.x, p.y, p.x + Math.cos(an) * m * 0.05, p.y + Math.sin(an) * m * 0.05, col, m * 0.006); }
      Ci(cg, p.x, p.y, m * 0.02, "#FFE28A");
      a.tl.fromTo(cg, { opacity: 0, scale: 0.2 }, { opacity: 1, scale: 1 }, { at: cT(at), dur: 0.3, ease: "outBack" });
      a.tl.to(cg, { opacity: 0, scale: 1.6 }, { at: cT(at + 0.9), dur: 0.6, ease: "inQuad" });
      cg.style.transformOrigin = f1(p.x) + "px " + f1(p.y) + "px";
      return cg;
    };
    return map;
  };
  var MANOEUVRES = ["frontal", "flank-left", "flank-right", "pincer", "feigned-retreat", "envelopment", "defend", "breakthrough"];
  S.manoeuvres = MANOEUVRES;
  /** Standard manoeuvre on a battleMap: attacker (faction) from the bottom, defender at the top. Returns { units, arrows, clashAt }. */
  S.manoeuvre = function (map, kind, o) {
    o = o || {};
    var att = o.attacker || "bluecoat", def = o.defender || "redcoat", at = o.at != null ? o.at : 0.8, dur = o.dur || 1.4;
    var A0 = [], D0 = [], arrows = [];
    function U(f, fx, fy, k, label, t0) { return map.unit({ faction: f, fx: fx, fy: fy, kind: k || "infantry", label: label, at: t0 != null ? t0 : 0.2 }); }
    var aL = o.attackerLabel || fac(att).name, dL = o.defenderLabel || fac(def).name;
    D0.push(U(def, 0.38, 0.3, "infantry", dL, 0.2), U(def, 0.55, 0.28, "infantry", null, 0.3), U(def, 0.7, 0.32, "cavalry", null, 0.4));
    A0.push(U(att, 0.35, 0.76, "infantry", aL, 0.5), U(att, 0.52, 0.78, "infantry", null, 0.6), U(att, 0.7, 0.76, "cavalry", null, 0.7));
    var k = MANOEUVRES.indexOf(kind) >= 0 ? kind : "frontal";
    var t1 = at, t2 = at + dur + 0.4;
    if (k === "frontal") { arrows.push(map.arrow({ faction: att, from: [0.35, 0.72], to: [0.38, 0.38], at: t1, dur: dur, unit: A0[0] }), map.arrow({ faction: att, from: [0.52, 0.74], to: [0.55, 0.36], at: t1 + 0.1, dur: dur, unit: A0[1] }), map.arrow({ faction: att, from: [0.7, 0.72], to: [0.7, 0.4], at: t1 + 0.2, dur: dur, unit: A0[2] })); map.clash(0.5, 0.36, t2, att); }
    else if (k === "flank-left" || k === "flank-right") { var L2 = k === "flank-left"; arrows.push(map.arrow({ faction: att, from: [0.52, 0.74], to: [0.55, 0.4], at: t1, dur: dur, unit: A0[1] }), map.arrow({ faction: att, from: [L2 ? 0.35 : 0.7, 0.72], via: [L2 ? 0.1 : 0.92, 0.5], to: [L2 ? 0.3 : 0.78, 0.26], at: t1 + 0.15, dur: dur * 1.3, unit: L2 ? A0[0] : A0[2] })); map.clash(L2 ? 0.34 : 0.74, 0.28, t2 + 0.3, att); }
    else if (k === "pincer" || k === "envelopment") { arrows.push(map.arrow({ faction: att, from: [0.35, 0.72], via: [0.12, 0.45], to: [0.36, 0.22], at: t1, dur: dur * 1.3, unit: A0[0] }), map.arrow({ faction: att, from: [0.7, 0.72], via: [0.93, 0.45], to: [0.72, 0.22], at: t1, dur: dur * 1.3, unit: A0[2] })); if (k === "envelopment") arrows.push(map.arrow({ faction: att, from: [0.52, 0.74], to: [0.54, 0.44], at: t1 + 0.4, dur: dur, unit: A0[1] })); map.clash(0.38, 0.25, t2 + 0.3, att); map.clash(0.7, 0.25, t2 + 0.45, att); }
    else if (k === "feigned-retreat") { arrows.push(map.arrow({ faction: att, from: [0.52, 0.74], to: [0.52, 0.9], at: t1, dur: dur * 0.8, dashed: true, unit: A0[1], unitEnd: 0.9 }), map.arrow({ faction: def, from: [0.55, 0.34], to: [0.53, 0.72], at: t1 + 0.6, dur: dur, unit: D0[1] }), map.arrow({ faction: att, from: [0.35, 0.72], via: [0.3, 0.55], to: [0.48, 0.62], at: t1 + dur + 0.6, dur: dur * 0.8, unit: A0[0] }), map.arrow({ faction: att, from: [0.7, 0.72], via: [0.76, 0.55], to: [0.58, 0.62], at: t1 + dur + 0.6, dur: dur * 0.8, unit: A0[2] })); map.clash(0.53, 0.64, t1 + dur * 1.8 + 0.8, att); }
    else if (k === "defend") { arrows.push(map.arrow({ faction: def, from: [0.38, 0.34], to: [0.4, 0.6], at: t1, dur: dur, unit: D0[0] }), map.arrow({ faction: def, from: [0.7, 0.36], to: [0.68, 0.6], at: t1 + 0.2, dur: dur, unit: D0[2] })); map.clash(0.4, 0.66, t2, def); map.clash(0.68, 0.66, t2 + 0.2, def); }
    else { arrows.push(map.arrow({ faction: att, from: [0.52, 0.74], to: [0.54, 0.2], at: t1, dur: dur * 1.2, width: 0.022, unit: A0[1], unitEnd: 0.6 }), map.arrow({ faction: att, from: [0.35, 0.72], via: [0.42, 0.55], to: [0.5, 0.5], at: t1 + 0.3, dur: dur, unit: A0[0] }), map.arrow({ faction: att, from: [0.7, 0.72], via: [0.62, 0.55], to: [0.56, 0.5], at: t1 + 0.3, dur: dur, unit: A0[2] })); map.clash(0.54, 0.32, t2, att); }
    return { attackers: A0, defenders: D0, arrows: arrows, clashAt: t2 };
  };


  // ───────────────────────── foreground hero figures (large, painted, cached defs) ─────────────────────────
  var gradCache = {};
  /** Painted gradient ids for a faction in a layer (coat, skin, trousers, metal). */
  function facGrads(lname, F) {
    var key = lname + "|" + F.coat + "|" + F.trousers;
    if (gradCache[key]) return gradCache[key];
    var defs = defsFor(lname);
    var g = {
      coat: lgrad(defs, [[0, shade(F.coat, -0.42)], [0.45, F.coat], [0.8, shade(F.coat, 0.18)], [1, mix(F.coat, "#FFD9A0", 0.45)]], 0, 0, 1, 0),
      coatV: lgrad(defs, [[0, shade(F.coat, 0.12)], [1, shade(F.coat, -0.35)]], 0, 0, 0, 1),
      trous: lgrad(defs, [[0, shade(F.trousers, -0.35)], [0.5, F.trousers], [1, mix(F.trousers, "#FFD9A0", 0.3)]], 0, 0, 1, 0),
      trousD: lgrad(defs, [[0, shade(F.trousers, -0.55)], [0.6, shade(F.trousers, -0.25)], [1, shade(F.trousers, -0.1)]], 0, 0, 1, 0),
      skin: lgrad(defs, [[0, shade(SKINS[1], -0.3)], [0.55, SKINS[1]], [1, mix(SKINS[1], "#FFE2B0", 0.5)]], 0, 0, 1, 0),
      metal: lgrad(defs, [[0, "#6E7276"], [0.5, "#D9DCDC"], [1, "#8A8E92"]], 0, 0, 1, 0),
      wood: lgrad(defs, [[0, "#2E1A0E"], [0.6, "#5A3A22"], [1, "#8A5A34"]], 0, 0, 1, 0),
      gold: lgrad(defs, [[0, "#8F6A22"], [0.5, "#F0D070"], [1, "#B8862A"]], 0, 0, 1, 0),
    };
    gradCache[key] = g;
    return g;
  }
  /** Tapered filled ribbon around a polyline (a limb): pts [[x,y]…], ws widths at each point. */
  function ribbon(pts, ws, off) {
    var n = pts.length, L = [], Rr = [], i;
    off = off || 0;
    for (i = 0; i < n; i++) {
      var p0 = pts[Math.max(0, i - 1)], p1 = pts[Math.min(n - 1, i + 1)];
      var dx = p1[0] - p0[0], dy = p1[1] - p0[1], len = Math.hypot(dx, dy) || 1;
      var nx = -dy / len, ny = dx / len, w = ws[i] / 2;
      L.push([pts[i][0] + nx * (w + off), pts[i][1] + ny * (w + off)]);
      Rr.push([pts[i][0] - nx * (w - off), pts[i][1] - ny * (w - off)]);
    }
    var d = "M" + A2(L[0][0], L[0][1]);
    for (i = 1; i < n; i++) d += " Q" + A2((L[i - 1][0] + L[i][0]) / 2 + (L[i][0] - L[i - 1][0]) * 0.1, (L[i - 1][1] + L[i][1]) / 2 + (L[i][1] - L[i - 1][1]) * 0.1) + " " + A2(L[i][0], L[i][1]);
    // rounded end
    var e = pts[n - 1], pe = pts[n - 2] || pts[0], ex = e[0] - pe[0], ey = e[1] - pe[1], el2 = Math.hypot(ex, ey) || 1, cap = ws[n - 1] * 0.5;
    d += " Q" + A2(e[0] + (ex / el2) * cap, e[1] + (ey / el2) * cap) + " " + A2(Rr[n - 1][0], Rr[n - 1][1]);
    for (i = n - 2; i >= 0; i--) d += " Q" + A2((Rr[i + 1][0] + Rr[i][0]) / 2, (Rr[i + 1][1] + Rr[i][1]) / 2) + " " + A2(Rr[i][0], Rr[i][1]);
    var s0 = pts[0], s1 = pts[1] || pts[0], sx = s0[0] - s1[0], sy = s0[1] - s1[1], sl = Math.hypot(sx, sy) || 1, cap0 = ws[0] * 0.5;
    d += " Q" + A2(s0[0] + (sx / sl) * cap0, s0[1] + (sy / sl) * cap0) + " " + A2(L[0][0], L[0][1]) + " Z";
    return d;
  }
  S.ribbon = ribbon;
  /** Painted limb: base gradient, shadow on the back side, warm rim on the front edge, a fold stroke. */
  function paintedLimb(pts, ws, fill, dark, rim) {
    var s = '<path d="' + ribbon(pts, ws) + '" fill="' + fill + '"/>';
    s += '<path d="' + ribbon(pts, ws.map(function (w) { return w * 0.55; }), -ws[0] * 0.22) + '" fill="' + dark + '" opacity="0.38"/>';
    if (rim !== false) s += '<path d="' + ribbon(pts, ws.map(function (w) { return w * 0.16; }), ws[0] * 0.4) + '" fill="#FFE2A8" opacity="0.45"/>';
    var m = pts[Math.floor(pts.length / 2)];
    s += mkLine(m[0] - ws[1] * 0.2, m[1] - ws[1] * 0.3, m[0] + ws[1] * 0.1, m[1] + ws[1] * 0.5, dark, ws[1] * 0.08, ' opacity="0.5"');
    return s;
  }
  var D2R = Math.PI / 180;
  /** Joint chain from a root: angles in degrees from straight down, positive toward +x (forward). */
  function chain(root, angs, lens) {
    var pts = [root], x = root[0], y = root[1], a = 0;
    for (var i = 0; i < angs.length; i++) { a += angs[i]; x += Math.sin(a * D2R) * lens[i]; y += Math.cos(a * D2R) * lens[i]; pts.push([x, y]); }
    return pts;
  }
  // pose table: lean, legs [backThigh, backKnee, frontThigh, frontKnee], arms [backUpper, backElbow, frontUpper, frontElbow], weapon mode
  var HERO_POSES = {
    stand: { lean: 0, legs: [-6, 4, 8, 4], arms: [-10, -25, 30, -95], wpn: "shoulder" },
    march: { lean: -3, legs: [-28, 28, 32, 14], arms: [-30, -20, 34, -90], wpn: "shoulder" },
    aim: { lean: -6, legs: [-18, 6, 20, 10], arms: [15, 75, 70, -25], wpn: "level" },
    fire: { lean: -6, legs: [-18, 6, 20, 10], arms: [15, 75, 70, -25], wpn: "level", flash: true },
    charge: { lean: -18, legs: [-46, 34, 58, 62], arms: [10, 40, 60, -30], wpn: "low" },
    shout: { lean: -8, legs: [-22, 12, 26, 8], arms: [86, -8, 172, -24], wpn: "sword" },
    load: { lean: 2, legs: [-10, 6, 12, 6], arms: [20, -80, 150, -36], wpn: "vertical" },
    kneel: { lean: -4, legs: [-40, 118, 62, 90], arms: [15, 75, 70, -25], wpn: "level" },
  };
  /**
   * Large painted soldier (feet at 0,0; ~100 tall; facing +x), one coherent jointed silhouette.
   * pose: stand | march | aim | fire | charge | shout | load | kneel. Returns inner SVG markup.
   */
  function heroMk(F, pose, G2, r) {
    var P2 = HERO_POSES[pose] || HERO_POSES.stand;
    var coat = F.coat, trim = F.trim, dark = shade(coat, -0.5), tdark = shade(F.trousers, -0.45);
    var skin = SKINS[Math.floor(r() * SKINS.length)], hair = HAIRC[Math.floor(r() * HAIRC.length)];
    var armour = isArmour(F), hasMusket = F.weapon === "musket";
    var gaiter = F.hat === "shako" || F.hat === "tricorne" || F.hat === "kepi" || F.hat === "bork" ? "#E8E0CE" : shade(F.trousers, -0.1);
    // skeleton (proportions: hip -50, knee ~-27, ankle ~-4; shoulder -77, elbow -57, wrist -39)
    var hip = [0, -50], TH = 23, SH = 22, UA = 20, FA = 18;
    var back = chain([hip[0] - 2, hip[1]], [P2.legs[0], P2.legs[1]], [TH, SH]), front = chain([hip[0] + 2, hip[1]], [P2.legs[2], P2.legs[3]], [TH, SH]);
    var lowest = Math.max(back[2][1], front[2][1]);
    var dy = -lowest; // plant the lowest foot on the ground
    var sh = [0, -77];
    var barm = chain([sh[0] - 3, sh[1]], [P2.arms[0], P2.arms[1]], [UA, FA]), farm = chain([sh[0] + 3, sh[1]], [P2.arms[2], P2.arms[3]], [UA, FA]);
    var s = '<g transform="translate(0 ' + f1(dy) + ')">';
    function foot(a, backLeg) { // boot/gaiter at ankle a, toe forward
      var ax = a[0], ay = a[1];
      return '<path d="M' + A2(ax - 4, ay - 10) + " L" + A2(ax + 4, ay - 10) + " L" + A2(ax + 4.5, ay - 2) + " Q" + A2(ax + 9, ay - 2) + " " + A2(ax + 10, ay + 1) + " L" + A2(ax - 4.5, ay + 1) + ' Z" fill="' + (backLeg ? "#15110E" : "#1E1915") + '"/>' + mkLine(ax + 4, ay - 9, ax + 3.5, ay - 3, "#5A4A3A", 1.2, ' opacity="0.6"');
    }
    function leg(pts, backLeg) {
      var fill = backLeg ? G2.trousD || G2.trous : G2.trous;
      var out = paintedLimb([pts[0], pts[1], pts[2]], [13, 9.5, 6.5], fill, tdark, !backLeg);
      // gaiter from mid-shin down
      var mid = [(pts[1][0] + pts[2][0]) / 2, (pts[1][1] + pts[2][1]) / 2];
      out += '<path d="' + ribbon([mid, pts[2]], [7.5, 6.5]) + '" fill="' + (backLeg ? shade(gaiter, -0.3) : gaiter) + '"/>' + mkLine(mid[0] + 1, mid[1], pts[2][0] + 1, pts[2][1], shade(gaiter, -0.4), 0.8, ' opacity="0.6"');
      out += foot(pts[2], backLeg);
      return out;
    }
    function hand(w, prev) { var dx = w[0] - prev[0], dyy = w[1] - prev[1], l = Math.hypot(dx, dyy) || 1; return mkEl(w[0] + (dx / l) * 2.5, w[1] + (dyy / l) * 2.5, 4.2, 3, G2.skin, ' transform="rotate(' + f1(Math.atan2(dyy, dx) / D2R) + ' ' + A2(w[0] + (dx / l) * 2.5, w[1] + (dyy / l) * 2.5) + ')"') + mkCi(w[0] + (dx / l) * 4.5, w[1] + (dyy / l) * 4.5, 2.2, shade(skin, -0.25), ' opacity="0.5"'); }
    function arm(pts, backArm) {
      var fill = armour ? G2.metal : backArm ? G2.coatV : G2.coat;
      var out = paintedLimb([pts[0], pts[1], pts[2]], [11, 8.5, 6.5], fill, dark, !backArm);
      // cuff
      var w = pts[2], e = pts[1], dx = w[0] - e[0], dyy = w[1] - e[1], l = Math.hypot(dx, dyy) || 1;
      out += '<path d="' + ribbon([[w[0] - (dx / l) * 5, w[1] - (dyy / l) * 5], w], [7, 6.6]) + '" fill="' + trim + '"/>';
      out += hand(w, e);
      return out;
    }
    // ---- back leg, back arm
    s += leg(back, true);
    if (P2.wpn !== "sword" && !(hasMusket && P2.wpn === "level")) s += arm(barm, true);
    // ---- torso (rotated by lean about the hip)
    s += '<g transform="rotate(' + P2.lean + " 0 " + hip[1] + ')">';
    var tails = !armour && F.hat !== "bork";
    s += '<path d="M-12 -78 Q-13 -83 -5 -84 L5 -84 Q13 -83 12 -78 L10 -56 Q9 -52 10 -50 ' + (tails ? "L13 -32 Q8 -36 0 -34 Q-8 -36 -13 -32 " : "L9 -46 L-9 -46 ") + 'L-10 -50 Q-9 -52 -10 -56 Z" fill="' + G2.coat + '"/>';
    s += '<path d="M-12 -78 Q-13 -83 -5 -84 L-4 -84 L-4 -50 L-10 -50 Q-9 -52 -10 -56 Z" fill="' + dark + '" opacity="0.4"/>';
    s += '<path d="M12 -78 L10 -56 Q9 -52 10 -50" fill="none" stroke="#FFE2A8" stroke-width="2" opacity="0.55"/>';
    if (tails) s += '<path d="M-13 -32 Q-8 -36 -5 -34 L-7 -48 L-11 -50 Z" fill="' + trim + '" opacity="0.9"/>' + '<path d="M13 -32 Q8 -36 5 -34 L7 -48 L11 -50 Z" fill="' + trim + '" opacity="0.9"/>';
    for (var fo = 0; fo < 4; fo++) s += '<path d="M' + A2(-7 + fo * 4.5, -80) + " q" + A2((r() - 0.5) * 3, 14) + " " + A2(-1 + fo * 0.3, 28) + '" fill="none" stroke="' + dark + '" stroke-width="0.9" opacity="0.4"/>';
    if (armour) {
      s += '<path d="M-11 -80 Q0 -84 11 -80 L10 -52 Q0 -49 -10 -52 Z" fill="' + G2.metal + '" opacity="0.95"/>';
      for (var b = 0; b < 5; b++) s += '<path d="M' + A2(-10.5, -76 + b * 6) + " q" + A2(10.5, -2) + " " + A2(21, 0) + '" fill="none" stroke="#4A4E52" stroke-width="1" opacity="0.8"/>';
      s += '<path d="M-11 -80 L-10 -52" fill="none" stroke="#FFE2A8" stroke-width="1.4" opacity="0.5"/>';
    } else {
      s += mkLine(-9, -80, 8, -54, "#F3ECD8", 3.6) + mkLine(9, -80, -8, -54, "#F3ECD8", 3.6) + mkLine(-9, -80, 8, -54, "#B8AE98", 0.8, ' opacity="0.6"'); // crossbelts
      s += '<path d="M-11 -86 Q0 -90 11 -86 L11 -80 Q0 -83 -11 -80 Z" fill="' + shade(coat, -0.35) + '"/>' + '<path d="M-9 -86 Q0 -89 9 -86 L9 -84 Q0 -87 -9 -84 Z" fill="' + trim + '"/>'; // collar
      for (var bt = 0; bt < 4; bt++) s += mkCi(1.2, -76 + bt * 7, 1.4, "#F0D070") + mkCi(0.9, -76.3 + bt * 7, 0.6, "#FFF6D0");
      s += '<path d="M-13 -84 Q-7 -88 -2 -84 L-3 -79 Q-8 -82 -13 -79 Z" fill="' + G2.gold + '"/>' + '<path d="M13 -84 Q7 -88 2 -84 L3 -79 Q8 -82 13 -79 Z" fill="' + G2.gold + '"/>'; // shoulder straps / wings
      s += '<path d="M-13 -54 L-5 -54 L-4 -47 L-12 -46 Z" fill="#1E1A18"/>' + mkCi(-8.5, -50, 1.3, "#F0D070"); // cartridge box
    }
    s += "</g>";
    // ---- neck + head
    var hx = pose === "charge" ? 4 : 1, hy = -92, hr = 7.5;
    s += '<path d="M' + A2(hx - 3.5, hy + hr * 0.6) + " L" + A2(hx + 3.5, hy + hr * 0.6) + " L" + A2(4, -84) + " L" + A2(-4, -84) + ' Z" fill="' + shade(skin, -0.2) + '"/>';
    var expr = pose === "shout" || pose === "charge" ? "shout" : pose === "aim" || pose === "fire" || pose === "kneel" ? "grit" : "calm";
    s += faceMk(hx, hy, hr, skin, r, { hair: hair, moustache: r() > 0.5, sideburns: r() > 0.5, beard: r() > 0.85, paint: true, expr: expr });
    s += hatMk(pose === "shout" ? "bicorne" : F.hat, hx, hy, hr, F);
    // ---- front leg
    s += leg(front, false);
    // ---- weapon + front arm
    var fw = farm[2], bw = barm[2];
    if (P2.wpn === "sword") {
      s += arm(barm, true); // pointing arm (drawn as the lower arm)
      s += mkLine(-7, -84, 6, -52, "#B3271E", 4.5, ' opacity="0.85"'); // sash over the coat
      s += arm(farm, false);
      s += '<path d="' + ribbon([[fw[0] - 1, fw[1] + 2], [fw[0] + 6, fw[1] - 34]], [2.6, 1.2]) + '" fill="' + G2.metal + '"/>' + mkLine(fw[0] - 5, fw[1] - 4, fw[0] + 4, fw[1] - 6, G2.gold, 2.6);
    } else if (hasMusket) {
      if (P2.wpn === "level" || P2.wpn === "low") {
        var bx2 = bw[0], by2 = bw[1], ang = Math.atan2(fw[1] - by2, fw[0] - bx2);
        var mx0 = bx2 - Math.cos(ang) * 14, my0 = by2 - Math.sin(ang) * 14, mx1 = fw[0] + Math.cos(ang) * 30, my1 = fw[1] + Math.sin(ang) * 30;
        s += '<path d="' + ribbon([[mx0, my0], [bx2, by2], [mx1, my1]], [6.5, 4.6, 3.4]) + '" fill="' + G2.wood + '"/>'; // stock + fore-end
        s += mkLine(bx2 + Math.cos(ang) * 10, by2 + Math.sin(ang) * 10 - 1.6, mx1 + Math.cos(ang) * 4, my1 + Math.sin(ang) * 4 - 1.6, G2.metal, 2.2); // barrel
        s += mkLine(mx1, my1, mx1 + Math.cos(ang) * 16, my1 + Math.sin(ang) * 16, G2.metal, 1.8); // bayonet
        s += mkLine(bx2 + Math.cos(ang) * 2, by2 + Math.sin(ang) * 2 + 2, bx2 + Math.cos(ang) * 6, by2 + Math.sin(ang) * 6 + 5, "#2A2220", 2); // lock
        s += arm(barm, true) + arm(farm, false);
        if (P2.flash) { var fx2 = mx1 + Math.cos(ang) * 16, fy2 = my1 + Math.sin(ang) * 16; s += mkCi(fx2 + 4, fy2 - 1, 11, "#FFE8B0", ' opacity="0.35"') + '<path d="' + poly([[fx2, fy2 - 3], [fx2 + 14, fy2 - 12], [fx2 + 9, fy2 - 2], [fx2 + 26, fy2 - 1], [fx2 + 9, fy2 + 2], [fx2 + 14, fy2 + 10], [fx2, fy2 + 3], [fx2 - 4, fy2]]) + '" fill="#FFF0A0" opacity="0.95"/>' + mkCi(fx2 + 5, fy2, 4.5, "#FFD060", ' opacity="0.9"'); }
      } else if (P2.wpn === "vertical") {
        s += '<path d="' + ribbon([[fw[0] + 2, -6], [fw[0] + 1, -70], [fw[0], -150]], [6.5, 5, 3.4]) + '" fill="' + G2.wood + '"/>' + mkLine(fw[0] + 0.5, -64, fw[0] - 0.5, -124, G2.metal, 2.2);
        s += arm(farm, false) + mkLine(fw[0] + 1, fw[1] - 6, fw[0] + 1, fw[1] - 30, G2.metal, 1.4); // ramrod in the raised hand
      } else { // shoulder arms: musket rests on the front shoulder, hand at the butt
        s += '<path d="' + ribbon([[fw[0] + 2, fw[1] + 8], [6, -74], [2, -146]], [6.5, 5, 3.4]) + '" fill="' + G2.wood + '"/>' + mkLine(5, -84, 3, -120, G2.metal, 2.2) + mkLine(3, -146, 1, -162, G2.metal, 1.8) + mkCi(fw[0] + 2, fw[1] + 8, 3, "#1A1410");
        s += arm(farm, false);
      }
    } else if (F.weapon === "scutum" || F.weapon === "hoplon") {
      var thrust = P2.wpn === "level" || P2.wpn === "low";
      s += arm(farm, false);
      if (thrust) s += '<path d="' + ribbon([[fw[0] - 30, fw[1] + 3], [fw[0] + 40, fw[1] - 4]], [3.6, 3]) + '" fill="' + G2.wood + '"/>' + mkPoly([[fw[0] + 40, fw[1] - 7], [fw[0] + 58, fw[1] - 4], [fw[0] + 40, fw[1] - 1]], G2.metal);
      else s += '<path d="' + ribbon([[fw[0] + 1, -4], [fw[0], -160]], [3.6, 3]) + '" fill="' + G2.wood + '"/>' + mkPoly([[fw[0] - 1, -160], [fw[0] + 2, -176], [fw[0] + 5, -160]], G2.metal);
      if (F.weapon === "scutum") s += mkRect(bw[0] + 2, bw[1] - 30, 22, 54, G2.coat, ' rx="6"') + mkRect(bw[0] + 2, bw[1] - 30, 22, 54, "none", ' rx="6" stroke="' + GOLD + '" stroke-width="2.4"') + mkCi(bw[0] + 13, bw[1] - 3, 5, G2.gold) + mkLine(bw[0] + 13, bw[1] - 28, bw[0] + 13, bw[1] + 22, GOLD, 1.4);
      else s += mkCi(bw[0] + 10, bw[1] - 4, 22, "#8E6A2A") + mkCi(bw[0] + 10, bw[1] - 4, 17, "#C9A24A") + mkCi(bw[0] + 10, bw[1] - 4, 6, "#3A2A1A") + mkCi(bw[0] + 2, bw[1] - 14, 10, "#FFE0A0", ' opacity="0.25"');
    } else if (F.weapon === "sword" || F.weapon === "axe") {
      var up = P2.wpn === "level" || P2.wpn === "low" || P2.wpn === "sword";
      s += mkCi(bw[0] + 8, bw[1] - 2, 20, F.weapon === "axe" ? "#A8562A" : trim) + mkCi(bw[0] + 8, bw[1] - 2, 20, "none", ' stroke="' + DARK + '" stroke-width="2"') + mkCi(bw[0] + 8, bw[1] - 2, 5, G2.metal);
      s += arm(farm, false);
      s += up ? '<path d="' + ribbon([[fw[0], fw[1] + 2], [fw[0] + 16, fw[1] - 44]], [3.2, 1.4]) + '" fill="' + G2.metal + '"/>' + mkLine(fw[0] - 5, fw[1] - 3, fw[0] + 5, fw[1] - 5, G2.gold, 2.6) : '<path d="' + ribbon([[fw[0], fw[1]], [fw[0] + 2, fw[1] + 40]], [3, 1.4]) + '" fill="' + G2.metal + '"/>';
    } else if (F.weapon === "yari") {
      var th = P2.wpn === "level" || P2.wpn === "low";
      s += arm(farm, false);
      s += th ? '<path d="' + ribbon([[fw[0] - 36, fw[1] + 3], [fw[0] + 50, fw[1] - 5]], [3.4, 2.8]) + '" fill="' + G2.wood + '"/>' + mkPoly([[fw[0] + 50, fw[1] - 8], [fw[0] + 70, fw[1] - 5], [fw[0] + 50, fw[1] - 2]], G2.metal) : '<path d="' + ribbon([[fw[0], -4], [fw[0] - 1, -170]], [3.4, 2.8]) + '" fill="' + G2.wood + '"/>' + mkPoly([[fw[0] - 2, -170], [fw[0] + 1, -188], [fw[0] + 4, -170]], G2.metal);
      s += mkRect(-15, -98, 5, 52, trim) + mkRect(-15, -98, 5, 52, "none", ' stroke="' + DARK + '" stroke-width="1"');
    } else if (F.weapon === "bow") {
      var drawn = P2.wpn === "level";
      s += '<path d="M' + A2(fw[0] + 2, fw[1] - 32) + " q" + A2(drawn ? 24 : 12, 32) + " " + A2(0, 64) + '" fill="none" stroke="' + G2.wood + '" stroke-width="3.2"/>';
      if (drawn) s += mkLine(fw[0] + 2, fw[1] - 32, bw[0], bw[1], "#E6D8B8", 1.1) + mkLine(fw[0] + 2, fw[1] + 32, bw[0], bw[1], "#E6D8B8", 1.1) + mkLine(bw[0], bw[1], fw[0] + 8, fw[1], G2.wood, 2.2) + arm(barm, true);
      s += arm(farm, false);
    }
    s += "</g>";
    return s;
  }
  S.heroMarkup = heroMk;
  function heroDef(lname, fid, pose, seedKey) {
    var key = "hero|" + lname + "|" + fid + "|" + pose + "|" + seedKey + "|" + V.seed;
    if (defsCache[key]) return defsCache[key];
    var F = fac(fid), id = nid("H");
    var g = sv("g", { id: id }, defsFor(lname));
    g.innerHTML = heroMk(F, pose, facGrads(lname, F), rng("hero" + fid + seedKey));
    defsCache[key] = id;
    return id;
  }
  /**
   * Foreground heroes: a few large painted soldiers cropped by the frame edge. opts: faction, poses (array),
   * x (array of world x) or spread, y (feet line, default just below the frame), size (height), facing, layer (near).
   * Returns { el, heroes, volley(at), charge(at, dur, dist), step(at, dur, dx) }.
   */
  S.heroes = function (opts) {
    opts = opts || {};
    var a = cur(), lname = opts.layer || "near", L = a.layers[lname];
    var fid = FACTIONS[opts.faction] ? opts.faction : S.guessFaction(opts.faction);
    var facing = opts.facing === -1 || opts.facing === "left" ? -1 : 1;
    var size = opts.size || a.wh * 0.62, y = opts.y != null ? opts.y : a.wh * 1.04;
    var poses = arr(opts.poses).length ? arr(opts.poses) : ["aim", "shout"];
    var xs = arr(opts.x);
    var g = G(L.g, { class: "ph-heroes" });
    var heroes = [], r = rng("heroes" + fid + (opts.seed || ""));
    poses.forEach(function (pose, i) {
      var hx = xs[i] != null ? xs[i] : a.ww * (facing > 0 ? 0.1 + i * 0.22 : 0.9 - i * 0.22);
      var depth = 1 - i * 0.14, sc = (size / 100) * depth;
      var use = sv("use", { href: "#" + heroDef(lname, fid, pose, i) });
      var sh = El(g, 0, 0, size * 0.22 * depth, size * 0.035, "#1E150D", { opacity: 0.35 });
      if (i === 0 && opts.blur !== false) use.style.filter = "blur(" + f2(u(0.32)) + "px)";
      else if (i > 0) use.style.opacity = (1 - i * 0.06).toFixed(2);
      heroes.push({ el: use, shadow: sh, x: hx, y: y - i * size * 0.1, s: sc, pose: pose, idx: i, ph: r() * 7 });
    });
    for (var hi = heroes.length - 1; hi >= 0; hi--) { g.insertBefore(heroes[hi].shadow, g.firstChild); g.appendChild(heroes[hi].el); }
    var fires = [], moves = [], chargeAt = null;
    var it = { el: g, heroes: heroes, x: xs[0] != null ? xs[0] : 0, size: size, facing: facing };
    it.volley = function (at) {
      fires.push(at);
      heroes.forEach(function (h, i) { if (h.pose === "aim") { var mx = h.x + facing * h.s * 70, my = h.y - h.s * 85; S.smoke({ layer: lname, x: mx, y: my, n: 12, size: h.s * 22, life: 3.8, at: at + i * 0.12, burst: true, stagger: 0.3, dir: [facing * u(70), -u(22)], wind: facing * u(14), opacity: 0.92, seed: "hv" + i + at }); } });
      camApi.shake(at + 0.05, u(6), 0.4);
      return it;
    };
    it.charge = function (at, dur, dist) { moves.push({ at: at, dur: dur || 2.4, dx: (dist != null ? dist : size * 1.2) * facing, ease: E("inOutQuad") }); chargeAt = at; return it; };
    it.step = function (at, dur, dx) { moves.push({ at: at, dur: dur, dx: dx, ease: E("linear") }); return it; };
    a.anims.push(function (t) {
      var dx = 0; for (var m = 0; m < moves.length; m++) { var mv = moves[m]; dx += mv.dx * mv.ease(clamp((t - mv.at) / mv.dur, 0, 1)); }
      var running = false; for (var m2 = 0; m2 < moves.length; m2++) if (t >= moves[m2].at && t < moves[m2].at + moves[m2].dur) running = true;
      for (var i = 0; i < heroes.length; i++) {
        var h = heroes[i], rec = 0, firing = false;
        for (var k = 0; k < fires.length; k++) { var q = t - fires[k] - i * 0.12; if (q >= 0 && q < 0.16) firing = true; if (q >= 0 && q < 0.5) rec = Math.max(rec, Math.sin((q / 0.5) * Math.PI) * h.s * 5); }
        if (h.pose === "aim") { var href = "#" + heroDef(lname, fid, firing ? "fire" : "aim", i); if (h.href !== href) { h.href = href; h.el.setAttribute("href", href); } }
        var breathe = Math.sin(t * 1.6 + h.ph) * 0.006, bob = running ? -Math.abs(Math.sin(t * 2.6 * Math.PI + h.ph)) * h.s * 4 : 0;
        var sway = running ? Math.sin(t * 2.6 * Math.PI + h.ph) * 1.5 : Math.sin(t * 0.7 + h.ph) * 0.5;
        h.el.setAttribute("transform", "translate(" + A2(h.x + dx - rec * facing, h.y + bob) + ") rotate(" + f2(sway) + ") scale(" + f2(h.s * facing) + " " + f2(h.s * (1 + breathe)) + ")");
        h.shadow.setAttribute("transform", "translate(" + A2(h.x + dx, h.y) + ")");
      }
    });
    return it;
  };
  /** Rolling gunsmoke bank: big slow puffs drifting along a line between x0..x1 at y (ground layer). */
  S.smokeBank = function (opts) {
    opts = opts || {};
    var a = cur(), lname = opts.layer || "ground", L = a.layers[lname];
    var g = G(L.g, { class: "ph-smokebank" }), r = rng("bank" + (opts.seed || ""));
    var x0 = opts.x0 != null ? opts.x0 : a.ww * 0.2, x1 = opts.x1 != null ? opts.x1 : a.ww * 0.8, y = opts.y != null ? opts.y : a.horizon + a.wh * 0.2;
    var n = opts.n || 16, size = opts.size || a.wh * 0.09, at = opts.at || 0, puffs = [];
    for (var i = 0; i < n; i++) {
      var e = El(g, 0, 0, size * (0.8 + r() * 0.8), size * (0.5 + r() * 0.5), i % 3 === 0 ? mix(C.smoke, "#FFE0B0", 0.3) : i % 3 === 1 ? C.smoke : C.smoke2, { opacity: 0 });
      puffs.push({ e: e, x: lerp(x0, x1, r()), y: y - r() * size * 0.8, ph: r(), k: r() * 7, v: u(6 + r() * 10), rise: u(4 + r() * 8) });
    }
    var life = opts.life || 9, maxOp = opts.opacity != null ? opts.opacity : 0.55;
    a.anims.push(function (t) {
      for (var i = 0; i < puffs.length; i++) {
        var p = puffs[i];
        if (t < at) { p.e.setAttribute("opacity", "0"); continue; }
        var age = (((t - at) / life + p.ph) % 1) * life, q = age / life;
        var sc = 0.5 + q * 1.3, op = maxOp * Math.min(1, q * 5) * (1 - q);
        p.e.setAttribute("transform", "translate(" + A2(p.x + p.v * age + Math.sin(age * 0.6 + p.k) * size * 0.3, p.y - p.rise * age) + ") scale(" + f2(sc) + ")");
        p.e.setAttribute("opacity", op.toFixed(3));
      }
    });
    return g;
  };
  /** Light rays through the smoke (mid layer, screen-ish pale strokes from the sun). */
  S.lightRays = function (opts) {
    opts = opts || {};
    var a = cur(), L = a.layers[opts.layer || "mid"], sk = a.sky, r = rng("rays2");
    var g = G(L.g, { class: "ph-rays", opacity: opts.opacity != null ? opts.opacity : 0.3 });
    var sx = a.ww * sk.sun[0], sy = a.wh * sk.sun[1], n = opts.n || 7;
    var rays = [];
    for (var i = 0; i < n; i++) { var ang = Math.PI * 0.42 + (i / (n - 1)) * Math.PI * 0.5 + (r() - 0.5) * 0.08, len = Math.max(a.ww, a.wh) * 1.6, wd = 0.012 + r() * 0.02; rays.push({ e: P(g, poly([[sx, sy], [sx + Math.cos(ang - wd) * len, sy + Math.sin(ang - wd) * len], [sx + Math.cos(ang + wd) * len, sy + Math.sin(ang + wd) * len]]), mix(sk.sunCol, "#FFFFFF", 0.3), { opacity: 0.5 }), k: r() * 7 }); }
    a.anims.push(function (t) { for (var i = 0; i < rays.length; i++) rays[i].e.setAttribute("opacity", (0.25 + 0.45 * vnoise(t * 0.5 + rays[i].k, i)).toFixed(3)); });
    return g;
  };

  // ───────────────────────── captions (HUD) ─────────────────────────
  /** Italic documentary caption at the bottom. opts: at, end, size. */
  S.caption = function (text, opts) {
    opts = opts || {};
    var a = cur(), tl = a.tl;
    hudShade("bottom");
    var at = cT(opts.at != null ? opts.at : 0.3);
    var box = el("div.ph-caption", { parent: a.hud });
    box.appendChild(S.rich(text));
    if (opts.size) box.style.fontSize = px(opts.size);
    if (opts.raise) box.style.bottom = "24%";
    V.fit(box, { maxLines: V.isPortrait ? 4 : 3, min: u(22) });
    tl.fromTo(box, { opacity: 0, y: u(8) }, { opacity: 1, y: 0 }, { at: at, dur: 0.5, ease: "outCubic" });
    if (opts.end != null && opts.end < V.duration - 0.2) tl.to(box, { opacity: 0 }, { at: cT(opts.end), dur: 0.35, ease: "inQuad" });
    return { el: box, at: at };
  };

  // ───────────────────────── templates ─────────────────────────
  var T = {};
  function D() { return V.duration; }
  function keyT(word, frac, after) {
    var t = word ? V.find(plain(word), after || 0) : null;
    if (t == null && word) { var k = S.autoKey(word); if (k) t = V.find(k, after || 0); }
    return t != null ? t : D() * frac;
  }
  function sideSpec(side, fallback) {
    side = side || {};
    var f = FACTIONS[side.faction] ? side.faction : side.faction ? S.guessFaction(side.faction + " " + (side.name || "")) : fallback;
    return { faction: f, name: side.name || fac(f).name, count: side.count };
  }
  function soldierSize() { return Math.min(V.width, V.height) * (V.isPortrait ? 0.088 : 0.1); }
  /** Fit a formation into `availW`: returns { count, ranks }. */
  function fitArmy(count, size, availW, cav) {
    var sp = size * (cav ? 1.05 : 0.46);
    var cols = Math.max(3, Math.floor(availW / sp));
    var ranks = clamp(Math.ceil(count / cols), 1, cav ? 3 : 6);
    return { count: Math.min(count, cols * ranks), ranks: ranks };
  }
  function pickCount(n, def, max) { n = +n; return clamp(isFinite(n) && n > 0 ? n : def, 4, max || 110); }
  /** Two facing armies on the field. Returns { left, right, groundY }. */
  function twoArmies(a, o) {
    var W = a.ww, H = a.wh, Pt = V.isPortrait, size = soldierSize() * (o.scale || 1);
    var gy = a.horizon + H * (o.groundFrac != null ? o.groundFrac : Pt ? 0.22 : 0.26);
    var availW = W * (Pt ? 0.46 : 0.4);
    var fl = fitArmy(pickCount(o.left.count, 48, Pt ? 60 : 96), size, availW, o.leftCav), fr = fitArmy(pickCount(o.right.count, 48, Pt ? 60 : 96), size, availW, o.rightCav);
    var nearSide = o.near || "left", kL = nearSide === "left" ? 1 : 0.8, kR = nearSide === "left" ? 0.8 : 1;
    var right = S.army({ faction: o.right.faction, x: W * (Pt ? 0.74 : 0.72), y: gy - (1 - kR) * size * 2.2, count: fr.count, ranks: fr.ranks, size: size * kR, facing: -1, pose: o.pose || "stand", cavalry: o.rightCav, seed: "R", flags: Pt ? 1 : 2, officer: !Pt });
    var left = S.army({ faction: o.left.faction, x: W * (Pt ? 0.26 : 0.28), y: gy - (1 - kL) * size * 2.2, count: fl.count, ranks: fl.ranks, size: size * kL, facing: 1, pose: o.pose || "stand", cavalry: o.leftCav, seed: "L", flags: Pt ? 1 : 2, officer: !Pt });
    if (nearSide === "left") left.el.parentNode.appendChild(left.el); else right.el.parentNode.appendChild(right.el);
    return { left: left, right: right, groundY: gy, size: size };
  }
  function dustAt(army, at, dur, layer) {
    var a = cur();
    S.smoke({ layer: layer || "ground", x: army.x, y: army.y + army.size * 0.05, n: 10, size: army.size * 0.5, life: Math.max(2, dur), at: at, color: mix(a.pal.near, "#F1E6C8", 0.4), color2: mix(a.pal.near, "#F1E6C8", 0.2), opacity: 0.5, dir: [-army.facing * u(10), -u(8)], wind: 0, spread: army.w / army.size * 1.6 });
  }

  /** battle-scene — the workhorse: two armies in a landscape, the action lands on the key word. */
  T["battle-scene"] = function (p, root) {
    var left = sideSpec(p.left, "redcoat"), right = sideSpec(p.right, S.enemyOf(left.faction));
    var a = S.scene(root, { sky: p.sky, terrain: p.terrain, horizon: V.isPortrait ? 0.5 : 0.56 });
    var W = a.ww, H = a.wh, d = D(), Pt = V.isPortrait;
    S.haze({ n: 5, opacity: 0.25 });
    var action = p.action || "volley";
    var attacker = p.attacker === "right" ? "right" : "left";
    var cavSide = p.cavalry === "left" || p.cavalry === "right" ? p.cavalry : null;
    var arm = twoArmies(a, { left: left, right: right, leftCav: cavSide === "left", rightCav: cavSide === "right", pose: "stand", near: attacker });
    var att = attacker === "left" ? arm.left : arm.right, dfn = attacker === "left" ? arm.right : arm.left;
    var tKey = clamp(keyT(p.keyword, 0.45), 1.2, Math.max(1.2, d - 1.6));
    S.lightRays({ opacity: 0.28 });
    S.smokeBank({ x0: Math.min(att.x, dfn.x) - arm.size, x1: Math.max(att.x, dfn.x) + arm.size, y: arm.groundY - arm.size * 0.3, n: Pt ? 10 : 18, size: arm.size * 0.9, opacity: 0.42, at: Math.max(0, tKey - 2) });
    var hf = att.facing, heroSide = action === "stand" ? dfn : att, hfac = heroSide.facing;
    var hPoses = action === "charge" || action === "clash" ? ["charge", "shout", "charge"] : action === "advance" ? ["march", "shout", "march"] : action === "cannonade" ? ["aim", "shout"] : ["aim", "load", "shout"];
    if (Pt) hPoses = hPoses.slice(0, 2);
    var hx0 = hfac > 0 ? [W * 0.05, W * 0.24, W * 0.42] : [W * 0.95, W * 0.76, W * 0.58];
    var heroes = S.heroes({ faction: heroSide.faction, poses: hPoses, x: hx0, size: H * (Pt ? 0.4 : p.title ? 0.44 : 0.5), y: H * (p.title ? 1.12 : 1.06), facing: hfac, seed: action });
    var zPush = Pt ? 1.35 : p.title ? 1.3 : 1.55, zClash = Pt ? 1.6 : p.title ? 1.5 : 1.9;
    // guns behind each side
    var guns = [];
    if (action === "cannonade" || (p.cannons !== false && (hasGuns(left.faction) || hasGuns(right.faction)))) {
      var gy = arm.groundY - arm.size * 0.9, gs = arm.size * 0.75;
      var gL = S.cannon({ x: W * (Pt ? 0.08 : 0.07), y: gy, size: gs, facing: 1, faction: left.faction }), gR = S.cannon({ x: W * (Pt ? 0.92 : 0.93), y: gy, size: gs, facing: -1, faction: right.faction });
      guns.push(gL, gR);
      arm.left.el.parentNode.insertBefore(gL.el, arm.left.el); arm.right.el.parentNode.insertBefore(gR.el, arm.left.el);
    }
    // opening: slow advance of both sides
    var tAdv = Math.min(0.4, tKey - 0.6);
    arm.left.march(tAdv, Math.max(0.8, tKey - 0.9 - tAdv), arm.size * 0.9, 0);
    arm.right.march(tAdv, Math.max(0.8, tKey - 0.9 - tAdv), -arm.size * 0.9, 0);
    dustAt(arm.left, tAdv, tKey - tAdv); dustAt(arm.right, tAdv, tKey - tAdv);
    var tEnd = d;
    var clashPt = null;
    if (action === "charge" || action === "clash") {
      var gap = Math.abs(dfn.x - att.x) - (att.w + dfn.w) / 2 - arm.size * 0.9;
      att.charge(tKey, 2.4, Math.max(arm.size, gap));
      heroes.charge(tKey, 2.4, arm.size * 2.2);
      dustAt(att, tKey, 3);
      dfn.volley(tKey - 0.3);
      if (action === "clash") { dfn.charge(tKey + 0.9, 1.5, arm.size * 0.5); dustAt(dfn, tKey + 0.9, 2); }
      camApi.shake(tKey + 2.2, u(10), 0.6);
      clashPt = { x: dfn.x - dfn.facing * dfn.w * 0.5, y: arm.groundY - arm.size * 0.55 };
      S.smoke({ x: clashPt.x, y: clashPt.y + arm.size * 0.4, n: 14, size: arm.size * 0.6, life: 4, at: tKey + 2.0, burst: true, stagger: 0.5, color: mix(a.pal.near, "#F1E6C8", 0.45), color2: mix(a.pal.near, "#F1E6C8", 0.2), opacity: 0.6, dir: [0, -u(18)], wind: 0, spread: 4, seed: "clashdust" });
    } else if (action === "cannonade") {
      guns.forEach(function (gn, i) { gn.fire(tKey + i * 0.35); if (tKey + 3 < d - 0.5) gn.fire(tKey + 2.6 + i * 0.4); if (tKey + 5.5 < d - 0.5) gn.fire(tKey + 5.1 + i * 0.3); });
      att.setPose("aim", tKey + 1.6, 1e9);
      heroes.volley(tKey + 1.2);
    } else if (action === "advance") {
      att.march(tKey, Math.min(4, d - tKey), att.facing * arm.size * 2.2, 0);
      heroes.step(tKey, Math.min(4, d - tKey), hfac * arm.size * 1.5);
      dustAt(att, tKey, 4);
      if (tKey + 2.2 < d) dfn.volley(tKey + 2.2);
    } else if (action === "stand") {
      att.setPose("aim", tKey, 1e9);
      dfn.setPose("aim", tKey, 1e9);
    } else { // volley (default)
      att.volley(tKey); heroes.volley(tKey + 0.1);
      if (tKey + 1.8 < d - 0.5) dfn.volley(tKey + 1.8);
      if (tKey + 3.6 < d - 0.5) { att.volley(tKey + 3.6); heroes.volley(tKey + 3.7); }
      guns.forEach(function (gn, i) { if (tKey + 0.6 + i * 0.5 < d - 0.5) gn.fire(tKey + 0.6 + i * 0.5); });
    }
    // camera: wide → diagonal push toward the attacker → into the clash → settle
    var attC = { x: att.x + att.facing * att.w * 0.35, y: arm.groundY - arm.size * 0.7 };
    camApi.kenBurns(0, Math.max(1, tKey - 0.4), { from: { fx: 0.5, fy: 0.52, zoom: 1.04 }, to: { fx: 0.5 + (att.facing * 0.05), fy: 0.6, zoom: 1.18, rot: att.facing * 1.2 } });
    camApi.to(attC.x, attC.y, zPush, tKey - 0.4, 0.8, { ease: "inOutCubic", rot: att.facing * 2.4 });
    if (clashPt) { if (tKey + 2.0 < d - 0.8) camApi.to(clashPt.x, clashPt.y, zClash, tKey + 1.3, 1.1, { ease: "inOutCubic", rot: -att.facing * 1.5 }); }
    else { var tMid = { x: (att.x + dfn.x) / 2, y: arm.groundY - arm.size * 0.5 }; if (tKey + 3.2 < d - 1) camApi.to(tMid.x, tMid.y, 1.28, tKey + 2.0, 2.4, { ease: "inOutSine", rot: 0 }); }
    if (d - 1.6 > tKey + 3.2) camApi.wide(Math.max(tKey + 3.4, d - 2.4), 1.8, { fill: 1.0 });
    if (p.title) S.banner(p.title, { at: tKey + 0.25, pos: "top", end: p.titleEnd === "keep" ? null : Math.min(d - 0.2, tKey + 4.5) });
    if (p.place || p.date) S.lowerThird(p.place || p.date, { sub: p.place ? p.date : null, at: 0.6, end: p.title ? tKey - 0.2 : null });
  };

  /** general-council — commanders at a candle-lit map table; the decision lands as a banner. */
  T["general-council"] = function (p, root) {
    var a = S.scene(root, { sky: "night", terrain: "plain", bare: true, dust: false, horizon: 0.5 });
    var W = a.ww, H = a.wh, d = D(), Pt = V.isPortrait;
    S.interior({ kind: p.setting === "hall" ? "hall" : "tent" });
    var cmds = arr(p.commanders).slice(0, Pt ? 3 : 4);
    if (!cmds.length) cmds = [{ faction: p.faction || "redcoat" }];
    var mainF = FACTIONS[cmds[0].faction] ? cmds[0].faction : S.guessFaction(cmds[0].faction || p.faction || "");
    var tb = S.table({ x: W / 2, y: H * (Pt ? 0.82 : 0.9), w: W * (Pt ? 0.96 : 0.74), candles: 2, faction: mainF });
    var n = cmds.length, gens = [];
    var size = Math.min(W, H) * (Pt ? 0.46 : 0.52) * (n > 3 ? 0.9 : 1);
    var speaker = clamp(p.speaker != null ? +p.speaker : 0, 0, n - 1);
    cmds.forEach(function (c, i) {
      var fx = n === 1 ? 0.5 : 0.22 + (0.56 * i) / (n - 1);
      var facing = fx < 0.5 ? 1 : -1;
      var f = FACTIONS[c.faction] ? c.faction : S.guessFaction(c.faction || mainF);
      var gen = S.general({ x: W * fx, y: tb.top + H * 0.02, size: size * (i === speaker ? 1 : 0.94), faction: f, facing: facing, seed: c.name || i, hat: c.hat });
      gen.el.parentNode.insertBefore(gen.el, tb.el);
      gens.push(gen);
    });
    var tKey = clamp(keyT(p.keyword, 0.5), 1.0, Math.max(1.0, d - 1.2));
    gens[speaker].speak(0.2, d).point(Math.max(0.3, tKey - 2.2), d);
    gens.forEach(function (g, i) { if (i !== speaker) { g.nod(tKey + 0.6 + i * 0.4); if (tKey + 3 < d) g.nod(tKey + 3 + i * 0.5); } });
    // camera: slow push to the table, then to the map at the key word
    camApi.kenBurns(0, Math.max(1, tKey - 0.3), { from: { fx: 0.5, fy: 0.5, zoom: 1.0 }, to: { fx: 0.5, fy: 0.54, zoom: 1.12 } });
    var mapC = { x: tb.x, y: tb.y - tb.d * 0.5 };
    if (p.focus !== "commanders") camApi.to(mapC.x, mapC.y, Pt ? 1.6 : 1.9, tKey + 1.0, 1.6, { ease: "inOutCubic" });
    if (d - 2.2 > tKey + 3) camApi.kenBurns(Math.max(tKey + 3.4, d - 2.6), 2.4, { cut: false, to: { fx: 0.5, fy: 0.52, zoom: 1.06 } });
    if (p.decision) S.banner(p.decision, { at: tKey + 0.1, pos: Pt ? "top" : "top", end: p.decisionEnd === "keep" ? null : Math.min(d - 0.2, tKey + 4.5) });
    var names = cmds.map(function (c) { return plain(c.name || ""); }).filter(Boolean);
    if (p.place || p.date) S.lowerThird(p.place || p.date, { sub: p.place ? p.date : null, at: 0.6, end: p.decision ? tKey - 0.2 : null });
    else if (names.length) S.lowerThird(names[speaker] || names[0], { sub: p.date, at: 0.6, end: p.decision ? tKey - 0.2 : null });
  };

  /** battle-map — top-down tactical map; unit blocks and sweeping manoeuvre arrows on the key word. */
  T["battle-map"] = function (p, root) {
    var a = S.scene(root, { sky: "golden", terrain: "plain", bare: true, dust: false });
    var W = a.ww, H = a.wh, d = D(), Pt = V.isPortrait;
    // table-top backdrop
    R(a.layers.sky.g, a.bx, a.by, a.bw, a.bh, "#2E2014");
    dabs(a.layers.sky.g, a.bx, a.by, a.bw, a.bh, ["#4A3420", "#1E150D", "#5A4530"], 160, Math.max(W, H) * 0.06, rng("bmbg"), 0.3);
    var att = sideSpec(p.attacker, "bluecoat"), def = sideSpec(p.defender, S.enemyOf(att.faction));
    var mw = W * (Pt ? 0.94 : 0.9), mh = Pt ? Math.min(H * 0.8, mw * 1.3) : H * 0.9;
    var map = S.battleMap({ x: (W - mw) / 2, y: (H - mh) / 2, w: mw, h: mh, title: p.title, terrain: { river: p.river !== false, forest: 3, hills: 3, coast: !!p.coast, towns: arr(p.towns).map(function (t, i) { return typeof t === "string" ? { name: t, fx: [0.2, 0.75, 0.5, 0.3, 0.8][i % 5], fy: [0.15, 0.55, 0.5, 0.85, 0.2][i % 5] } : t; }) }, seed: p.title });
    var tKey = clamp(keyT(p.keyword, 0.4), 1.0, Math.max(1.0, d - 2.2));
    var mv = S.manoeuvre(map, p.manoeuvre || "flank-left", { attacker: att.faction, defender: def.faction, attackerLabel: att.name, defenderLabel: def.name, at: tKey, dur: Math.min(1.6, Math.max(0.9, (d - tKey) * 0.3)) });
    camApi.focus(map, 0, 0.01, { fill: 0.98 });
    camApi.focus(map, 0.3, Math.max(1, tKey - 0.6), { fill: 0.98, zoom: 1.12, anchor: [0.5, 0.52], ease: "inOutSine" });
    var cl = map.pt(0.52, 0.42);
    if (p.zoom !== false) camApi.to(cl.x, cl.y, fitZoom(map, 0.98) * (Pt ? 1.35 : 1.5), tKey + 0.6, 1.8, { ease: "inOutCubic" });
    if (d - 1.6 > mv.clashAt + 0.6) camApi.focus(map, Math.max(mv.clashAt + 0.8, d - 2.2), 1.6, { fill: 0.98 });
    if (p.banner) S.banner(p.banner, { at: mv.clashAt + 0.2, pos: Pt ? "bottom" : "top", end: p.bannerEnd === "keep" ? null : Math.min(d - 0.2, mv.clashAt + 4.5) });
    if (p.date || p.place) S.lowerThird(p.place || p.date, { sub: p.place ? p.date : null, at: 0.5, end: p.banner ? mv.clashAt : null });
  };

  /** versus-numbers — "50,000 VS 250,000": troop-count banners over the two armies drawn up. */
  T["versus-numbers"] = function (p, root) {
    var left = sideSpec(p.left, "redcoat"), right = sideSpec(p.right, S.enemyOf(left.faction));
    var a = S.scene(root, { sky: p.sky || "golden", terrain: p.terrain || "fields", horizon: V.isPortrait ? 0.52 : 0.58 });
    var W = a.ww, H = a.wh, d = D(), Pt = V.isPortrait;
    S.haze({ n: 4, opacity: 0.22 });
    var arm = twoArmies(a, { left: left, right: right, pose: "stand", groundFrac: Pt ? 0.26 : 0.26, scale: 0.92 });
    var tKey = clamp(keyT(p.keyword, 0.35), 0.8, Math.max(0.8, d - 2.2));
    S.smokeBank({ x0: arm.left.x, x1: arm.right.x, y: arm.groundY - arm.size * 0.3, n: 12, size: arm.size * 0.8, opacity: 0.35 });
    arm.left.march(0.2, Math.max(1, tKey - 0.4), arm.size * 0.6, 0); arm.right.march(0.2, Math.max(1, tKey - 0.4), -arm.size * 0.6, 0);
    dustAt(arm.left, 0.2, tKey); dustAt(arm.right, 0.2, tKey);
    arm.left.setPose("aim", tKey + 1.2, 1e9); arm.right.setPose("aim", tKey + 1.6, 1e9);
    camApi.kenBurns(0, d, { from: { fx: 0.5, fy: 0.55, zoom: 1.0 }, to: { fx: 0.5, fy: 0.6, zoom: 1.16 } });
    S.versus({ count: left.count != null ? left.count : 50000, label: left.name, faction: left.faction }, { count: right.count != null ? right.count : 250000, label: right.name, faction: right.faction }, { at: tKey, pos: Pt ? "top" : "top", countDur: 1.6 });
    S.heroes({ faction: left.faction, poses: Pt ? ["shout"] : ["shout", "aim"], x: [W * 0.08, W * 0.3], size: H * (Pt ? 0.36 : 0.46), facing: 1, seed: "vs" });
    S.lightRays({ opacity: 0.22 });
    if (p.title) S.banner(p.title, { at: tKey + 2.2, pos: "bottom", slam: false });
    if (p.place || p.date) S.lowerThird(p.place || p.date, { sub: p.place ? p.date : null, at: 0.5, end: p.title ? tKey + 2 : null });
  };

  /** march — a long column of troops crossing the land; the camera tracks alongside. */
  T["march"] = function (p, root) {
    var side = sideSpec(p.army || p.left, "bluecoat");
    var Pt = V.isPortrait, W0 = V.width, H0 = V.height;
    var ww = Pt ? W0 : W0 * 1.9;
    var a = S.scene(root, { sky: p.sky || "dusk", terrain: p.terrain || "hills", width: ww, height: H0, horizon: Pt ? 0.5 : 0.56, bleed: Pt ? 0.3 : 0.18 });
    var W = a.ww, H = a.wh, d = D();
    var dir = p.direction === "left" ? -1 : 1;
    S.haze({ n: 5, opacity: 0.2 });
    var size = soldierSize() * 1.05;
    var gy = a.horizon + H * (Pt ? 0.22 : 0.25);
    var total = Math.min(Pt ? 96 : 150, pickCount(side.count, 90, 150));
    var ranks = Pt ? 4 : 3;
    var startX = dir > 0 ? -W * 0.1 : W * 1.1;
    var col = S.army({ faction: side.faction, x: Pt ? W * 0.5 : startX + dir * W * 0.3, y: gy, count: total, ranks: ranks, size: size, facing: dir, pose: "march", spacing: 0.5, flags: 3, officer: true, drummer: true, seed: "col" });
    var cav = p.cavalry !== false ? S.army({ faction: side.faction, x: col.x + dir * (col.w / 2 + size * 2.2), y: gy - size * 0.6, count: Pt ? 4 : 7, ranks: 1, size: size * 0.95, facing: dir, pose: "march", cavalry: true, flags: 1, seed: "cav" }) : null;
    if (cav) { col.el.parentNode.insertBefore(cav.el, col.el); }
    var wagons = G(a.layers.ground.g);
    for (var wg = 0; wg < (Pt ? 1 : 2); wg++) { var wx = col.x - dir * (col.w / 2 + size * (1.4 + wg * 1.6)), wy = gy - size * 0.1; R(wagons, wx - size * 0.45, wy - size * 0.55, size * 0.9, size * 0.4, "#5A3A22", { rx: size * 0.05 }); P(wagons, "M" + A2(wx - size * 0.45, wy - size * 0.55) + " q" + A2(size * 0.45, -size * 0.35) + " " + A2(size * 0.9, 0) + " Z", "#E6DCC4"); Ci(wagons, wx - size * 0.28, wy - size * 0.12, size * 0.14, "none", { stroke: "#3A2A1A", "stroke-width": f1(size * 0.04) }); Ci(wagons, wx + size * 0.28, wy - size * 0.12, size * 0.14, "none", { stroke: "#3A2A1A", "stroke-width": f1(size * 0.04) }); }
    var travel = Pt ? W * 0.5 : W * 0.55;
    col.march(0, d, dir * travel, 0, { ease: "linear" });
    if (cav) cav.march(0, d, dir * travel * 1.08, 0, { ease: "linear" });
    cur().anims.push(function (t) { var o = col.at(t); wagons.setAttribute("transform", "translate(" + A2(o.dx * 0.97, o.dy) + ")"); });
    dustAt(col, 0, d);
    S.lightRays({ opacity: 0.2 });
    var hero = S.heroes({ faction: side.faction, poses: Pt ? ["march"] : ["march", "shout"], x: dir > 0 ? [W0 * 0.1, W0 * 0.34] : [W0 * 0.9, W0 * 0.66], size: H * (Pt ? 0.4 : 0.46), y: H * 1.1, facing: dir, seed: "march" });
    hero.heroes.forEach(function (h) { h.x += col.x - W0 * 0.5 - dir * W0 * 0.1; });
    hero.step(0, d, dir * travel * 1.3);
    if (p.weather === "snow") S.weather("snow"); else if (p.weather === "rain") S.weather("rain");
    var tKey = clamp(keyT(p.keyword, 0.5), 1.0, Math.max(1.0, d - 1.4));
    // camera tracks the column head, then pulls wide
    var z0 = Math.min(a.W / a.ww, a.H / a.wh);
    camApi.track(function (t) { var o = col.at(t); return { x: clamp(o.x + dir * col.w * 0.1, a.W / 2 / 1.25, a.ww - a.W / 2 / 1.25), y: gy - size * 0.9, zoom: Pt ? 1.25 : 1.28 }; }, 0, 0.01);
    camApi.track(function (t) { var o = col.at(t); return { x: clamp(o.x, a.W / 2 / 1.05, a.ww - a.W / 2 / 1.05), y: gy - size * 1.2, zoom: Pt ? 1.0 : 1.02 }; }, Math.max(0.5, tKey - 1.2), 2.2);
    if (p.title) S.banner(p.title, { at: tKey, pos: "top", end: Math.min(d - 0.2, tKey + 4.5) });
    if (p.place || p.date) S.lowerThird(p.place || p.date, { sub: p.place ? p.date : null, at: 0.6, end: p.title ? tKey - 0.2 : null });
  };

  /** siege — walls and towers under bombardment: defenders on the ramparts, attackers with guns and ladders. */
  T["siege"] = function (p, root) {
    var def = sideSpec(p.defender, "whitecoat"), att = sideSpec(p.attacker, S.enemyOf(def.faction));
    var Pt = V.isPortrait;
    var a = S.scene(root, { sky: p.sky || "dusk", terrain: p.terrain || "plain", horizon: Pt ? 0.5 : 0.55, treeline: false, frameTree: false });
    var W = a.ww, H = a.wh, d = D(), M = Math.min(W, H);
    S.haze({ n: 4, opacity: 0.2 });
    var side = p.side === "left" ? -1 : 1; // fortress on the right by default
    var size = soldierSize() * 0.95;
    var gy = a.horizon + H * (Pt ? 0.22 : 0.24);
    var fw = W * (Pt ? 0.62 : 0.44), fh = M * (Pt ? 0.14 : 0.17);
    var fx = side > 0 ? W - fw * 0.92 : -fw * 0.08;
    var fort = fortress(a.layers.ground.g, fx, gy - size * 0.1, fw, fh, { stone: p.stone || "#A89880", roofs: p.roofs !== false, towers: Pt ? 2 : 3 }, rng("siegefort"));
    S.flag({ x: fort._flagAt.x, y: fort._flagAt.y, h: size * 1.6, w: size * 0.65, faction: def.faction, facing: -side });
    // defenders on the wall
    var wallY = gy - size * 0.1 - fh - fh * 0.12;
    var dCount = Pt ? 8 : 14;
    var defs = S.army({ faction: def.faction, x: fx + fw * 0.5, y: wallY, count: dCount, ranks: 1, size: size * 0.78, facing: -side, pose: "aim", flags: 0, officer: false, seed: "wall" });
    // attackers: guns + assault party with ladders
    var ax = side > 0 ? W * (Pt ? 0.2 : 0.24) : W * (Pt ? 0.8 : 0.76);
    var fa = fitArmy(pickCount(att.count, 40, Pt ? 44 : 70), size, W * (Pt ? 0.42 : 0.36));
    var atts = S.army({ faction: att.faction, x: ax, y: gy, count: fa.count, ranks: fa.ranks, size: size, facing: side, pose: "stand", flags: Pt ? 1 : 2, seed: "assault" });
    var guns = [];
    for (var gi = 0; gi < (hasGuns(att.faction) ? (Pt ? 1 : 2) : 0); gi++) guns.push(S.cannon({ x: ax - side * (atts.w * 0.5 + size * (1.2 + gi * 1.5)), y: gy - size * (0.8 - gi * 0.3), size: size * 0.8, facing: side, faction: att.faction }));
    guns.forEach(function (gn) { atts.el.parentNode.insertBefore(gn.el, atts.el); });
    // ladders against the wall
    var lad = G(a.layers.ground.g);
    for (var li = 0; li < (Pt ? 2 : 3); li++) { var lx = fx + fw * (side > 0 ? 0.04 + li * 0.08 : 0.96 - li * 0.08), top = wallY - fh * 0.1, bot = gy + size * 0.05; var tilt = -side * fh * 0.4; Ln(lad, lx + tilt, bot, lx, top, WOOD, size * 0.05); Ln(lad, lx + tilt + size * 0.16, bot, lx + size * 0.16, top, WOOD, size * 0.05); for (var rr2 = 0; rr2 < 7; rr2++) { var q = rr2 / 7; Ln(lad, lx + tilt * (1 - q), lerp(bot, top, q), lx + tilt * (1 - q) + size * 0.16, lerp(bot, top, q), WOOD, size * 0.04); } }
    var tKey = clamp(keyT(p.keyword, 0.4), 1.2, Math.max(1.2, d - 1.6));
    guns.forEach(function (gn, i) { gn.fire(tKey + i * 0.4); if (tKey + 3.2 < d - 0.6) gn.fire(tKey + 2.9 + i * 0.5); if (tKey + 6 < d - 0.6) gn.fire(tKey + 5.6 + i * 0.4); });
    // hits on the wall: dust bursts + fire on a tower
    var hitX = fx + fw * (side > 0 ? 0.18 : 0.82), hitY = gy - size * 0.1 - fh * 0.5;
    S.smoke({ x: hitX, y: hitY, n: 12, size: size * 0.5, life: 3.5, at: tKey + 0.55, burst: true, stagger: 0.2, color: "#C9B89A", color2: "#7A6A52", dir: [-side * u(16), -u(40)], wind: u(6), opacity: 0.85, seed: "hit1" });
    if (tKey + 3.4 < d - 0.6) S.smoke({ x: fx + fw * (side > 0 ? 0.3 : 0.7), y: hitY - fh * 0.2, n: 12, size: size * 0.5, life: 3.5, at: tKey + 3.4, burst: true, stagger: 0.2, color: "#C9B89A", color2: "#7A6A52", dir: [-side * u(16), -u(40)], wind: u(6), opacity: 0.85, seed: "hit2" });
    S.fire({ x: fx + fw * (side > 0 ? 0.96 : 0.04), y: gy - size * 0.1 - fh * 1.55, size: size * 0.6, at: p.burning === false ? 1e9 : Math.max(0, tKey - 1.5), glow: 0.8 });
    defs.volley(tKey + 1.4);
    S.lightRays({ opacity: 0.22 });
    S.smokeBank({ x0: Math.min(ax, fx + fw / 2), x1: Math.max(ax, fx + fw / 2), y: gy - size * 0.3, n: 12, size: size * 0.8, opacity: 0.38, at: tKey });
    var sh = S.heroes({ faction: att.faction, poses: p.assault === false ? ["aim", "shout"] : ["charge", "shout", "charge"], x: side > 0 ? [W * 0.05, W * 0.24, W * 0.42] : [W * 0.95, W * 0.76, W * 0.58], size: H * (Pt ? 0.4 : 0.46), y: H * 1.1, facing: side, seed: "siege" });
    if (p.assault !== false) { atts.charge(tKey + 1.0, 2.6, Math.abs((fx + (side > 0 ? 0 : fw)) - (ax + side * atts.w / 2)) - size * 0.8); dustAt(atts, tKey + 1, 3); sh.charge(tKey + 1.0, 2.6, size * 2.5); } else sh.volley(tKey + 1.4);
    // camera
    camApi.kenBurns(0, Math.max(1, tKey - 0.3), { from: { fx: 0.5, fy: 0.5, zoom: 1.0 }, to: { fx: side > 0 ? 0.56 : 0.44, fy: 0.55, zoom: 1.12 } });
    camApi.to(fx + fw * 0.5, gy - size * 0.1 - fh * 0.8, Pt ? 1.3 : 1.5, tKey + 0.3, 1.2, { ease: "inOutCubic" });
    if (d - 2 > tKey + 3) camApi.wide(Math.max(tKey + 3.2, d - 2.6), 2.0, { fill: 1 });
    if (p.title) S.banner(p.title, { at: tKey + 0.3, pos: "top", end: Math.min(d - 0.2, tKey + 4.5) });
    if (p.place || p.date) S.lowerThird(p.place || p.date, { sub: p.place ? p.date : null, at: 0.6, end: p.title ? tKey : null });
  };

  /** title-banner — chapter opener: a wide painting under a big cream title banner. */
  T["title-banner"] = function (p, root) {
    var left = sideSpec(p.left, "redcoat"), right = sideSpec(p.right, S.enemyOf(left.faction));
    var a = S.scene(root, { sky: p.sky || "golden", terrain: p.terrain || "hills", horizon: V.isPortrait ? 0.5 : 0.58, letterbox: true });
    var W = a.ww, H = a.wh, d = D(), Pt = V.isPortrait;
    S.haze({ n: 6, opacity: 0.28 });
    var arm = twoArmies(a, { left: left, right: right, pose: "march", groundFrac: Pt ? 0.24 : 0.25, scale: 0.9 });
    arm.left.march(0, d, arm.size * 1.2, 0, { ease: "linear" }); arm.right.march(0, d, -arm.size * 1.2, 0, { ease: "linear" });
    dustAt(arm.left, 0, d); dustAt(arm.right, 0, d);
    for (var gi = 0; gi < 2; gi++) { if (!hasGuns(gi ? right.faction : left.faction)) continue; var gn = S.cannon({ x: W * (gi ? 0.9 : 0.1), y: arm.groundY - arm.size * 0.9, size: arm.size * 0.7, facing: gi ? -1 : 1, faction: gi ? right.faction : left.faction }); gn.fire(1.2 + gi * 1.4); if (d > 7) gn.fire(4.6 + gi * 1.1); arm.left.el.parentNode.insertBefore(gn.el, arm.left.el); }
    S.fadeIn(0, 1.4, { paper: true });
    S.lightRays({ opacity: 0.3 });
    S.smokeBank({ x0: arm.left.x, x1: arm.right.x, y: arm.groundY - arm.size * 0.3, n: 14, size: arm.size * 0.9, opacity: 0.4 });
    S.heroes({ faction: left.faction, poses: ["shout"], x: [W * (Pt ? 0.1 : 0.07)], size: H * (Pt ? 0.36 : 0.46), y: H * 1.1, facing: 1, seed: "title" });
    var tt = clamp(keyT(p.keyword || p.title, 0.2), 0.9, Math.max(0.9, d - 2));
    camApi.kenBurns(0, d, { from: { fx: 0.5, fy: 0.5, zoom: 1.08 }, to: { fx: 0.5, fy: 0.55, zoom: 1.0 } });
    el("div.ph-dim", { parent: a.hud });
    S.titleCard(p.title || "", { kicker: p.chapter, sub: p.subtitle, date: [plain(p.date), plain(p.place)].filter(Boolean).join("  ·  ") || null, at: 0.4, titleAt: tt });
  };

  /** portrait-of-commander — a painted bust in an oval gold frame with a name plate. */
  T["portrait-of-commander"] = function (p, root) {
    var f = FACTIONS[p.faction] ? p.faction : S.guessFaction((p.faction || "") + " " + (p.name || "") + " " + V.narration);
    var a = S.scene(root, { sky: p.sky || "dusk", terrain: p.terrain || "hills", horizon: V.isPortrait ? 0.5 : 0.56, frameTree: false, treeline: true });
    var W = a.ww, H = a.wh, d = D(), Pt = V.isPortrait, M = Math.min(W, H);
    S.haze({ n: 5, opacity: 0.3 });
    // a small army in the far distance behind the frame
    var size = soldierSize() * 0.6;
    S.army({ faction: f, x: W * 0.5, y: a.horizon + H * 0.14, count: Pt ? 30 : 48, ranks: 2, size: size, facing: 1, pose: "march", flags: 2, officer: false, seed: "bg" }).march(0, d, size * 1.5, 0, { ease: "linear" });
    el("div.ph-dim", { parent: a.hud }).style.opacity = "0.35";
    var pw = Pt ? W * 0.74 : Math.min(W * 0.42, H * 0.62);
    var pt = S.portrait({ cx: W * 0.5, cy: H * (Pt ? 0.42 : 0.46), w: pw, faction: f, seed: p.name, hat: p.hat, layer: "ground" });
    var tKey = clamp(keyT(p.keyword || p.name, 0.3), 0.8, Math.max(0.8, d - 1.6));
    a.tl.fromTo(pt.el, { opacity: 0 }, { opacity: 1 }, { at: 0.1, dur: 1.2, ease: "inOutSine" });
    // camera: push slowly into the face
    var face = { x: pt.cx, y: pt.cy - pt.h * 0.04 };
    camApi.kenBurns(0, d, { from: { fx: 0.5, fy: 0.5, zoom: 1.0 }, to: { fx: face.x / W, fy: face.y / H, zoom: Pt ? 1.18 : 1.24 } });
    S.lowerThird(p.name || fac(f).name, { sub: [plain(p.role), plain(p.dates)].filter(Boolean).join("  ·  "), at: tKey - 0.15, align: "center" });
    if (p.quote) S.caption("“" + plain(p.quote) + "”", { at: Math.min(d - 1.5, tKey + 2.2), size: u(30), raise: true });
  };

  /** aftermath — smoke over a quiet field, fallen banners, a few standing figures (never gory). */
  T["aftermath"] = function (p, root) {
    var side = sideSpec(p.army || p.left, "redcoat"), other = sideSpec(p.right, S.enemyOf(side.faction));
    var a = S.scene(root, { sky: p.sky || "storm", terrain: p.terrain || "plain", horizon: V.isPortrait ? 0.5 : 0.56 });
    var W = a.ww, H = a.wh, d = D(), Pt = V.isPortrait, M = Math.min(W, H), r = rng("aftermath");
    S.haze({ n: 8, opacity: 0.45, spread: 0.4 });
    var size = soldierSize();
    var gy = a.horizon + H * 0.22;
    var g = a.layers.ground.g;
    // smoke columns on the horizon
    for (var i = 0; i < (Pt ? 3 : 5); i++) S.smoke({ layer: "mid", x: W * (0.1 + i * 0.2 + r() * 0.1), y: a.horizon + H * 0.08, n: 14, size: M * 0.04, life: 7, color: "#7A6E62", color2: "#3E3630", opacity: 0.55, dir: [u(8), -u(30)], wind: u(10), seed: "col" + i });
    S.fire({ x: W * 0.78, y: a.horizon + H * 0.12, size: M * 0.03, glow: 0.6, layer: "mid" });
    // debris: wheel, drum, fallen flags, dropped muskets
    Ci(g, W * 0.2, gy + size * 0.1, size * 0.3, "none", { stroke: "#4A3A28", "stroke-width": f1(size * 0.06), transform: "rotate(70 " + A2(W * 0.2, gy + size * 0.1) + ")" });
    El(g, W * 0.62, gy + size * 0.3, size * 0.22, size * 0.1, "#5A3A22"); El(g, W * 0.62, gy + size * 0.25, size * 0.22, size * 0.08, "#E6DCC4");
    for (var m = 0; m < 6; m++) Ln(g, W * r(), gy + size * (0.1 + r() * 0.4), W * r(), gy + size * (0.1 + r() * 0.4), WOOD, size * 0.03);
    var fl1 = S.flag({ x: W * 0.36, y: gy + size * 0.35, h: size * 1.4, w: size * 0.6, faction: other.faction, facing: 1, speed: 1.5, amp: size * 0.03 });
    fl1.el.setAttribute("transform", "translate(" + A2(W * 0.36, gy + size * 0.35) + ") rotate(-78)");
    var fl2 = S.flag({ x: W * 0.8, y: gy + size * 0.2, h: size * 1.3, w: size * 0.55, faction: side.faction, facing: -1, speed: 1.8, amp: size * 0.03 });
    fl2.el.setAttribute("transform", "translate(" + A2(W * 0.8, gy + size * 0.2) + ") rotate(62)");
    a.anims.push(function () { fl1.el.setAttribute("transform", "translate(" + A2(W * 0.36, gy + size * 0.35) + ") rotate(-78)"); fl2.el.setAttribute("transform", "translate(" + A2(W * 0.8, gy + size * 0.2) + ") rotate(62)"); });
    // a few survivors standing, one officer, a riderless horse
    S.army({ faction: side.faction, x: W * 0.5, y: gy, count: Pt ? 4 : 7, ranks: 1, size: size * 1.2, facing: -1, pose: "stand", spacing: 1.2, flags: 1, officer: true, seed: "surv" });
    var hg = G(g); hg.innerHTML = horseMk(fac(other.faction), HORSES[2], 0, false, "stand"); hg.setAttribute("transform", "translate(" + A2(W * 0.12, gy - size * 0.1) + ") scale(" + f2(size / 100 * 1.15) + ")");
    // crows
    var crows = G(a.layers.mid.g), cl = [];
    for (var c = 0; c < 6; c++) cl.push({ e: P(crows, "M-6 0 Q-3 -3 0 0 Q3 -3 6 0", "none", { stroke: "#1E150D", "stroke-width": 1.6 }), x: W * r(), y: a.horizon - H * (0.05 + r() * 0.2), v: u(14 + r() * 10), k: r() * 7 });
    a.anims.push(function (t) { for (var i = 0; i < cl.length; i++) { var cw = cl[i]; var xx = a.bx + ((cw.x - a.bx + cw.v * t) % a.bw + a.bw) % a.bw; cw.e.setAttribute("transform", "translate(" + A2(xx, cw.y + Math.sin(t * 2 + cw.k) * u(6)) + ") scale(" + f2(M * 0.0025 * (0.8 + 0.4 * Math.abs(Math.sin(t * 7 + cw.k)))) + " " + f2(M * 0.0025) + ")"); } });
    if (p.weather === "rain") S.weather("rain"); else if (p.weather === "snow") S.weather("snow");
    S.heroes({ faction: side.faction, poses: ["stand"], x: [W * (Pt ? 0.86 : 0.9)], size: H * (Pt ? 0.38 : 0.46), y: H * 1.1, facing: -1, seed: "after" });
    S.lightRays({ opacity: 0.18 });
    var tKey = clamp(keyT(p.keyword, 0.5), 1.0, Math.max(1.0, d - 1.6));
    camApi.kenBurns(0, d, { from: { fx: 0.46, fy: 0.56, zoom: 1.18 }, to: { fx: 0.5, fy: 0.5, zoom: 1.0 } });
    if (p.title) S.banner(p.title, { at: tKey, pos: "top", color: "red", slam: false, end: p.titleEnd === "keep" ? null : Math.min(d - 0.2, tKey + 5) });
    if (p.stat) S.versus({ count: p.stat, label: p.statLabel || side.name, faction: side.faction }, { count: p.stat2 || "", label: p.stat2Label || other.name, faction: other.faction }, { at: tKey + (p.title ? 0.9 : 0), pos: "bottom", countDur: 1.8 });
    if (p.place || p.date) S.lowerThird(p.place || p.date, { sub: p.place ? p.date : null, at: 0.6, end: p.title ? tKey - 0.2 : null });
  };

  /** timeline-of-campaign — dated banners along a road through the land; the camera walks from one to the next. */
  T["timeline-of-campaign"] = function (p, root) {
    var ev = arr(p.events).slice(0, 6);
    if (ev.length < 2) ev = ev.concat([{ date: "Spring", label: "The campaign opens" }, { date: "Autumn", label: "The decisive battle" }]).slice(0, Math.max(2, ev.length));
    var n = ev.length, Pt = V.isPortrait, W0 = V.width, H0 = V.height, d = D();
    var side = sideSpec(p.army, "bluecoat");
    var sp = Pt ? W0 * 0.62 : W0 * 0.42;
    var ww = W0 + sp * (n - 1);
    var a = S.scene(root, { sky: p.sky || "golden", terrain: p.terrain || "fields", width: ww, height: H0, horizon: Pt ? 0.5 : 0.56, bleed: 0.12, frameTree: false });
    var W = a.ww, H = a.wh, M = Math.min(W0, H0);
    S.haze({ n: 6, opacity: 0.18 });
    // road across the whole world
    var g = a.layers.ground.g, gy = a.horizon + H * 0.22;
    var rp = []; for (var i = 0; i <= 12; i++) rp.push([a.bx + (a.bw * i) / 12, gy + H * 0.06 + Math.sin(i * 1.7) * H * 0.02]);
    P(g, smoothPath(rp), "none", { stroke: shade(a.pal.near, 0.28), "stroke-width": f1(M * 0.05), opacity: 0.75, "stroke-linecap": "round" });
    P(g, smoothPath(rp), "none", { stroke: shade(a.pal.near, -0.2), "stroke-width": f1(M * 0.006), opacity: 0.4, "stroke-dasharray": f1(M * 0.03) + " " + f1(M * 0.05) });
    var times = S.syncTimes(ev.map(function (e) { return S.autoKey(e.date) || S.autoKey(e.label); }), { start: 0.6, end: Math.max(1.5, d * 0.74), lead: 0.3, minGap: 0.9 });
    var size = soldierSize() * 0.9;
    var col = S.army({ faction: side.faction, x: W0 * 0.3, y: gy, count: Pt ? 24 : 36, ranks: Pt ? 3 : 2, size: size, facing: 1, pose: "march", flags: 1, officer: true, drummer: !Pt, seed: "tl" });
    col.march(0, d, ww - W0 * 0.6, 0, { ease: "linear" });
    dustAt(col, 0, d);
    var posts = [];
    ev.forEach(function (e, i) {
      var x = W0 * 0.5 + i * sp, y = gy - size * 0.2;
      var pg = G(a.layers.ground.g, { class: "ph-post" });
      var ph = M * (Pt ? 0.3 : 0.34), bw = M * (Pt ? 0.4 : 0.36), bh = bw * 0.46;
      Ln(pg, x, y + size * 0.6, x, y - ph, "#3A2A1A", M * 0.012);
      var board = G(pg);
      P(board, poly(rough([[x - bw / 2, y - ph], [x + bw / 2, y - ph], [x + bw / 2, y - ph + bh], [x - bw / 2, y - ph + bh]], M * 0.006, rng("post" + i), true)), C.cream, { stroke: "#5A4020", "stroke-width": f1(M * 0.004) });
      P(board, poly([[x - bw / 2 + bw * 0.04, y - ph + bh * 0.08], [x + bw / 2 - bw * 0.04, y - ph + bh * 0.08], [x + bw / 2 - bw * 0.04, y - ph + bh * 0.92], [x - bw / 2 + bw * 0.04, y - ph + bh * 0.92]]), "none", { stroke: "#8F6A22", "stroke-width": f1(M * 0.003) });
      var dt = worldText("ground", { x: f1(x), y: f1(y - ph + bh * 0.42), class: "ph-post-date", "text-anchor": "middle", style: { fontSize: px(bh * 0.3) }, text: plain(e.date || "").toUpperCase() }, board, x, y - ph + bh * 0.3, bw * 0.9, bh * 0.34);
      var lines = wrapWords(plain(e.label || ""), Pt ? 20 : 24).slice(0, 2);
      lines.forEach(function (ln, k) { worldText("ground", { x: f1(x), y: f1(y - ph + bh * (0.62 + k * 0.17)), class: "ph-post-label", "text-anchor": "middle", style: { fontSize: px(bh * 0.14) }, text: ln }, board, x, y - ph + bh * (0.57 + k * 0.17), bw * 0.9, bh * 0.16); });
      for (var nl = 0; nl < 2; nl++) Ci(board, x + (nl ? 1 : -1) * bw * 0.44, y - ph + bh * 0.1, M * 0.005, "#3A2A1A");
      board.style.transformOrigin = f1(x) + "px " + f1(y - ph) + "px";
      a.tl.fromTo(board, { opacity: 0, rotate: -14, scale: 0.7 }, { opacity: 1, rotate: 0, scale: 1 }, { at: cT(times[i]), dur: 0.55, ease: "outBack" });
      posts.push({ x: x, y: y - ph + bh * 0.4 });
    });
    // camera walks the road
    var z1 = Pt ? 1.0 : 1.06;
    camApi.to(posts[0].x, posts[0].y + M * 0.05, z1, 0, 0.01);
    for (var k = 1; k < n; k++) camApi.to(posts[k].x, posts[k].y + M * 0.05, z1, Math.max(0.2, times[k] - 0.9), 1.4, { ease: "inOutCubic" });
    var tOut = Math.min(d - 1.4, times[n - 1] + 1.8);
    if (tOut > times[n - 1] + 0.6 && !Pt) camApi.focus({ x: posts[0].x - sp * 0.5, y: 0, w: posts[n - 1].x - posts[0].x + sp, h: H }, tOut, Math.max(0.8, Math.min(2, d - tOut)), { fill: 1.0 });
    if (p.title) S.lowerThird(p.title, { sub: p.subtitle, at: Math.max(0.6, Math.min(tOut, d - 1.5)) });
  };
  function wrapWords(text, cpl) {
    var out = [], line = "";
    text.split(/\s+/).filter(Boolean).forEach(function (w) { if (!line) line = w; else if ((line + " " + w).length <= cpl) line += " " + w; else { out.push(line); line = w; } });
    if (line) out.push(line);
    return out;
  }

  /** quote-from-history — a spoken quotation over a dimmed painting, word by word as it is read. */
  T["quote-from-history"] = function (p, root) {
    var left = sideSpec(p.left, FACTIONS[p.faction] ? p.faction : S.guessFaction((p.faction || "") + " " + (p.author || ""))), right = sideSpec(p.right, S.enemyOf(left.faction));
    var a = S.scene(root, { sky: p.sky || "dusk", terrain: p.terrain || "hills", horizon: V.isPortrait ? 0.5 : 0.58 });
    var W = a.ww, H = a.wh, d = D(), Pt = V.isPortrait;
    S.haze({ n: 6, opacity: 0.3 });
    var arm = twoArmies(a, { left: left, right: right, pose: "stand", groundFrac: 0.26, scale: 0.9 });
    arm.left.march(0.2, d, arm.size * 0.6, 0); dustAt(arm.left, 0, d);
    S.lightRays({ opacity: 0.22 }); S.smokeBank({ x0: arm.left.x, x1: arm.right.x, y: arm.groundY - arm.size * 0.3, n: 12, size: arm.size * 0.8, opacity: 0.35 });
    if (d > 6) { arm.right.volley(d * 0.45); arm.left.volley(d * 0.7); }
    camApi.kenBurns(0, d, { from: { fx: 0.5, fy: 0.52, zoom: 1.0 }, to: { fx: 0.52, fy: 0.56, zoom: 1.15 } });
    el("div.ph-dim", { parent: a.hud }).style.opacity = "0.55";
    var tQ = clamp(keyT(p.keyword, 0.15), 0.4, Math.max(0.4, d - 2));
    S.quote(p.quote || "", { author: [plain(p.author), plain(p.date)].filter(Boolean).join(", "), at: tQ - 0.2, authorAt: p.authorKeyword ? keyT(p.authorKeyword, 0.8) : null });
  };

  // ───────────────────────── fallback ─────────────────────────
  function chunkNarration(text) {
    var ws = V.words && V.words.length ? V.words : null;
    var chunks = [];
    if (ws) {
      var curC = [];
      ws.forEach(function (w, i) {
        curC.push(w);
        if (/[.!?;:]$/.test(w.word) || curC.length >= 10 || i === ws.length - 1) { chunks.push({ text: curC.map(function (q) { return q.word; }).join(" "), at: curC[0].start, end: curC[curC.length - 1].end }); curC = []; }
      });
    } else {
      var words = str(text).split(/\s+/).filter(Boolean).slice(0, 600);
      var nC = Math.ceil(words.length / 10), span = V.duration / Math.max(1, nC);
      for (var k = 0; k < nC; k++) chunks.push({ text: words.slice(k * 10, k * 10 + 10).join(" "), at: k * span + 0.1, end: (k + 1) * span });
    }
    return chunks.slice(0, 80);
  }
  /** Fallback: two armies drawn up under a golden sky, slow drift, narration as captions. Never throws. */
  S.fallback = function (root, narration) {
    root = root || V.root();
    var text = narration != null ? narration : V.narration;
    try {
      A = null;
      root.innerHTML = "";
      var f = S.guessFaction(text);
      var a = S.scene(root, { sky: "golden", terrain: "fields", horizon: V.isPortrait ? 0.5 : 0.58 });
      S.haze({ n: 4, opacity: 0.22 });
      var arm = twoArmies(a, { left: { faction: f }, right: { faction: S.enemyOf(f) }, pose: "stand", groundFrac: 0.26, scale: 0.9 });
      var d = V.duration;
      arm.left.march(0.3, Math.max(1, d * 0.5), arm.size * 0.8, 0); dustAt(arm.left, 0.3, d * 0.5);
      S.lightRays({ opacity: 0.22 }); S.smokeBank({ x0: arm.left.x, x1: arm.right.x, y: arm.groundY - arm.size * 0.3, n: 12, size: arm.size * 0.8, opacity: 0.35 });
      var fh = S.heroes({ faction: f, poses: V.isPortrait ? ["aim"] : ["aim", "shout"], x: [a.ww * 0.08, a.ww * 0.3], size: a.wh * (V.isPortrait ? 0.36 : 0.46), facing: 1, seed: "fb" });
      if (d > 5) { arm.right.volley(Math.min(d - 1.5, d * 0.55)); fh.volley(Math.min(d - 1.2, d * 0.62)); }
      camApi.kenBurns(0, d, { from: { fx: 0.5, fy: 0.52, zoom: 1.0 }, to: { fx: 0.5, fy: 0.56, zoom: 1.14 } });
      chunkNarration(text).forEach(function (c, i, all) {
        var nx = all[i + 1];
        S.caption(c.text, { at: Math.max(0.05, c.at - 0.1), end: nx ? Math.max(c.at + 0.4, nx.at - 0.15) : V.duration + 1 });
      });
    } catch (e) {
      V.error("painted fallback: " + (e && e.message));
      try {
        V.reset();
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "10%", fontSize: u(54) + "px", fontStyle: "italic", textAlign: "center", color: C.fg, background: "#3A2A18", fontFamily: SERIF, lineHeight: "1.3" } });
        t.textContent = str(text).split(/\s+/).slice(0, 24).join(" ");
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
      A = null;
      root.innerHTML = "";
      fn(props, root);
    } catch (e) {
      V.error("[painted-history:" + id + "] " + (e && e.message ? e.message : String(e)));
      try { V.reset(); } catch (e2) {}
      S.fallback(root, V.narration);
    }
    return root;
  };
})();
