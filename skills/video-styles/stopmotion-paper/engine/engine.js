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
/* Scene engine: stopmotion-paper — "Paper Stop-Motion".
 * Handmade cut-paper stop-motion: motion is quantised to a fixed step rate (default 10 fps,
 * i.e. "on threes" at 30 fps) while the video renders at full fps; every held pose boils with
 * tiny seeded jitter (seeded by step index, so any seek is deterministic). Paper pieces have
 * procedural fibre texture, scissor-cut or torn edges and shadows that lift when a piece moves.
 * Runs after browser/components.js; replaces S.render / S.fallback and adds the paper API.
 */
(function () {
  "use strict";
  var V = window.V;
  var S = window.SceneStyle;
  if (!V || !S) return;
  var el = V.el;

  S.init({
    id: "stopmotion-paper",
    kind: "paper",
    enter: "pop",
    drift: 0,
    series: ["#D9472B", "#2F8C8A", "#F2B630", "#3C6FB4", "#7A4E9A", "#5E9E4A"],
  });

  // ───────────────────────── basics ─────────────────────────
  function u(n) { return n * V.unit; }
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function num(v, d) { v = Number(v); return isFinite(v) ? v : d; }
  function h01(a, b) {
    var x = Math.sin(a * 127.1 + (b || 0) * 311.7 + 74.7) * 43758.5453;
    return x - Math.floor(x);
  }
  function hs(s) { return S.hash(str(s)) % 100000; }
  function R(seed) { return V.makeRand(((seed >>> 0) % 2147483647) || 7); }
  function f1(n) { return (Math.round(n * 10) / 10).toString(); }
  function plain(t) { return S.plain(t); }
  function esc(t) { return str(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  var DUR = function () { return Math.max(0.5, V.duration); };
  function lastT() { return Math.max(0.05, V.duration - 0.35); }
  function ct(t) { return clamp(num(t, 0), 0, lastT()); }

  // Design units: the short side of the frame is 1080 units; all art is drawn in these units.
  var DW = V.width / V.unit, DH = V.height / V.unit;
  var LAND = V.isLandscape, PORT = V.isPortrait;

  // ───────────────────────── stop-motion clock ─────────────────────────
  var FPS = 10;
  function stepI(t) { return Math.floor(t * FPS + 1e-3); }
  function stepT(t) { return stepI(t) / FPS; }
  /** S.step(fps?) → sets/returns the stop-motion step rate (6–15, default 10 = "on threes" at 30 fps). */
  S.step = function (fps) { if (fps != null && isFinite(fps)) FPS = clamp(Math.round(fps), 6, 15); return FPS; };
  S.stepTime = function (t) { return stepT(t); };
  S.stepIndex = function (t) { return stepI(t); };

  // ───────────────────────── palette ─────────────────────────
  var C = {
    kraft: "#C7A06E", kraftLt: "#D9BC8C", kraftDk: "#A57E4E", card: "#B88D5B", cardDk: "#8E6A3F",
    cream: "#F4EBD8", white: "#FBF7EE", ink: "#2A211C", inkSoft: "#4A3D33",
    red: "#D9472B", tomato: "#E8603C", orange: "#EE8A2E", yellow: "#F2C230", mustard: "#DDA52A",
    lime: "#9CC55A", green: "#5E9E4A", leaf: "#3E7D3A", forest: "#2E5E35", teal: "#2F8C8A",
    sky: "#9DCDE6", skyLt: "#C4E2EF", blue: "#3C6FB4", navy: "#22335A", night: "#1B2340",
    purple: "#7A4E9A", lilac: "#B79BD0", pink: "#EE9BB0", rose: "#D9677F", brown: "#7B4F2C",
    wood: "#A8713F", woodLt: "#C48B55", grey: "#9A968E", greyLt: "#C9C4BA", slate: "#5B6670",
    sand: "#E6CF9C", cork: "#B9824E", felt: "#4F7F57", chalk: "#2F4A3E",
  };
  S.colors = C;
  var SKINS = ["#F3CDA5", "#E2A979", "#C08154", "#8D5A3A", "#6B4128"];
  var NOTE_COLORS = ["#FBE38A", "#F7B9C8", "#B9E0D2", "#BFD7F2", "#F8C99A", "#D9F0A3", "#FBF7EE"];

  // ───────────────────────── procedural textures ─────────────────────────
  var TEX = null;
  function canvasTex(N, draw) {
    try {
      var c = document.createElement("canvas");
      c.width = c.height = N;
      var g = c.getContext("2d");
      draw(g, N);
      return c.toDataURL("image/png");
    } catch (e) { return ""; }
  }
  function fibre(g, N, rnd, n, light, dark, wmin, wmax, lmin, lmax) {
    for (var i = 0; i < n; i++) {
      var x = rnd() * N, y = rnd() * N, a = rnd() * Math.PI * 2, L = lmin + rnd() * (lmax - lmin);
      var cx = x + Math.cos(a) * L * 0.5 + (rnd() - 0.5) * L * 0.6, cy = y + Math.sin(a) * L * 0.5 + (rnd() - 0.5) * L * 0.6;
      var ex = x + Math.cos(a) * L, ey = y + Math.sin(a) * L;
      g.strokeStyle = rnd() < 0.62 ? light : dark;
      g.lineWidth = wmin + rnd() * (wmax - wmin);
      for (var ox = -1; ox <= 1; ox++) for (var oy = -1; oy <= 1; oy++) {
        g.beginPath();
        g.moveTo(x + ox * N, y + oy * N);
        g.quadraticCurveTo(cx + ox * N, cy + oy * N, ex + ox * N, ey + oy * N);
        g.stroke();
      }
    }
  }
  function grain(g, N, rnd, amt, dark, light) {
    var img = g.getImageData(0, 0, N, N), d = img.data;
    for (var i = 0; i < d.length; i += 4) {
      var v = rnd();
      if (v < amt) { d[i] = dark[0]; d[i + 1] = dark[1]; d[i + 2] = dark[2]; d[i + 3] = Math.max(d[i + 3], dark[3] * (0.4 + rnd() * 0.6)); }
      else if (v > 1 - amt) { d[i] = light[0]; d[i + 1] = light[1]; d[i + 2] = light[2]; d[i + 3] = Math.max(d[i + 3], light[3] * (0.4 + rnd() * 0.6)); }
    }
    g.putImageData(img, 0, 0);
  }
  function textures() {
    if (TEX) return TEX;
    TEX = {};
    // fibrous paper: soft mottling + light & dark fibres + fine grain (transparent PNG, overlays any colour)
    TEX.paper = canvasTex(256, function (g, N) {
      var rnd = R(9173);
      for (var i = 0; i < 26; i++) {
        var x = rnd() * N, y = rnd() * N, r = 20 + rnd() * 60;
        for (var ox = -1; ox <= 1; ox++) for (var oy = -1; oy <= 1; oy++) {
          var gr = g.createRadialGradient(x + ox * N, y + oy * N, 0, x + ox * N, y + oy * N, r);
          var lt = rnd() < 0.5;
          gr.addColorStop(0, lt ? "rgba(255,255,255,0.035)" : "rgba(90,60,30,0.028)");
          gr.addColorStop(1, "rgba(0,0,0,0)");
          g.fillStyle = gr;
          g.fillRect(x + ox * N - r, y + oy * N - r, r * 2, r * 2);
        }
      }
      fibre(g, N, rnd, 120, "rgba(255,255,255,0.22)", "rgba(80,52,24,0.11)", 0.5, 1.1, 5, 18);
      grain(g, N, rnd, 0.07, [70, 46, 22, 22], [255, 255, 255, 18]);
    });
    TEX.cork = canvasTex(200, function (g, N) {
      var rnd = R(311);
      for (var i = 0; i < 1500; i++) {
        var x = rnd() * N, y = rnd() * N, r = 0.6 + rnd() * 2.2;
        g.fillStyle = rnd() < 0.55 ? "rgba(90,50,20," + (0.12 + rnd() * 0.2) + ")" : "rgba(240,205,160," + (0.12 + rnd() * 0.2) + ")";
        g.beginPath(); g.ellipse(x, y, r, r * (0.5 + rnd() * 0.6), rnd() * 3, 0, Math.PI * 2); g.fill();
      }
    });
    TEX.felt = canvasTex(160, function (g, N) {
      var rnd = R(77);
      fibre(g, N, rnd, 1100, "rgba(255,255,255,0.16)", "rgba(0,0,0,0.14)", 0.4, 0.9, 2, 7);
    });
    TEX.card = canvasTex(256, function (g, N) {
      var rnd = R(4242);
      fibre(g, N, rnd, 260, "rgba(255,235,200,0.22)", "rgba(60,36,14,0.2)", 0.5, 1.4, 4, 16);
      grain(g, N, rnd, 0.14, [60, 36, 14, 40], [255, 236, 200, 30]);
    });
    return TEX;
  }
  S.textures = textures;

  /** Inject the shared SVG <defs> (patterns, gradients) and CSS texture vars into root. */
  function ensureDefs(root) {
    var T = textures();
    var host = document.documentElement;
    host.style.setProperty("--pp-tex", T.paper ? "url(" + T.paper + ")" : "none");
    host.style.setProperty("--pp-cork", T.cork ? "url(" + T.cork + ")" : "none");
    host.style.setProperty("--pp-felt", T.felt ? "url(" + T.felt + ")" : "none");
    host.style.setProperty("--pp-card", T.card ? "url(" + T.card + ")" : "none");
    if (document.getElementById("ppTex")) return;
    var svg = el("svg.pp-defs", { parent: root, width: 0, height: 0, "aria-hidden": "true" });
    svg.innerHTML =
      "<defs>" +
      '<pattern id="ppTex" patternUnits="userSpaceOnUse" width="256" height="256"><image href="' + T.paper + '" width="256" height="256"/></pattern>' +
      '<pattern id="ppCork" patternUnits="userSpaceOnUse" width="200" height="200"><image href="' + T.cork + '" width="200" height="200"/></pattern>' +
      '<pattern id="ppFelt" patternUnits="userSpaceOnUse" width="160" height="160"><image href="' + T.felt + '" width="160" height="160"/></pattern>' +
      '<pattern id="ppCard" patternUnits="userSpaceOnUse" width="256" height="256"><image href="' + T.card + '" width="256" height="256"/></pattern>' +
      '<pattern id="ppCorr" patternUnits="userSpaceOnUse" width="16" height="20"><rect width="16" height="20" fill="#D8B784"/><path d="M0 10 Q4 2 8 10 T16 10" fill="none" stroke="#A9814C" stroke-width="2.4"/></pattern>' +
      '<pattern id="ppLines" patternUnits="userSpaceOnUse" width="40" height="34"><line x1="0" y1="33" x2="40" y2="33" stroke="#9DB8D8" stroke-width="1.6"/></pattern>' +
      '<pattern id="ppGrid" patternUnits="userSpaceOnUse" width="36" height="36"><path d="M36 0V36H0" fill="none" stroke="#8FB3C9" stroke-width="1.2" opacity="0.7"/></pattern>' +
      '<pattern id="ppDots" patternUnits="userSpaceOnUse" width="22" height="22"><circle cx="11" cy="11" r="3.4" fill="rgba(255,255,255,0.55)"/></pattern>' +
      '<pattern id="ppStripe" patternUnits="userSpaceOnUse" width="60" height="60"><rect width="30" height="60" fill="rgba(255,255,255,0.22)"/></pattern>' +
      '<pattern id="ppCheck" patternUnits="userSpaceOnUse" width="80" height="80"><rect width="40" height="40" fill="rgba(255,255,255,0.5)"/><rect x="40" y="40" width="40" height="40" fill="rgba(255,255,255,0.5)"/></pattern>' +
      '<linearGradient id="ppShade" x1="0" y1="0" x2="0.85" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0.2"/><stop offset="0.45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#3a2410" stop-opacity="0.16"/></linearGradient>' +
      '<radialGradient id="ppBall" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stop-color="#fff" stop-opacity="0.55"/><stop offset="0.35" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.25"/></radialGradient>' +
      '<filter id="ppSoft" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="1.5" dy="2.5" stdDeviation="2" flood-color="#2a1806" flood-opacity="0.35"/></filter>' +
      "</defs>";
  }

  // ───────────────────────── cut-paper geometry ─────────────────────────
  /** Jitter a closed polygon into a scissor-cut ("cut"), torn ("torn") or clean outline. */
  function jitterPoly(pts, edge, rnd, k) {
    k = k || 1;
    var out = [];
    var n = pts.length;
    var wander = 0, wv = 0;
    for (var i = 0; i < n; i++) {
      var eg = Array.isArray(edge) ? edge[i % edge.length] : edge;
      var seg = eg === "torn" ? 6 : eg === "zig" ? 4 : eg === "clean" ? 1e9 : 30;
      var amp = (eg === "torn" ? 2.3 : eg === "zig" ? 2.2 : eg === "clean" ? 0 : 0.9) * k;
      var a = pts[i], b = pts[(i + 1) % n];
      var dx = b[0] - a[0], dy = b[1] - a[1], len = Math.sqrt(dx * dx + dy * dy) || 1;
      var nx = -dy / len, ny = dx / len;
      out.push([a[0] + (rnd() - 0.5) * amp * 1.4, a[1] + (rnd() - 0.5) * amp * 1.4]);
      var m = Math.max(1, Math.round(len / (seg * k)));
      for (var j = 1; j < m; j++) {
        var t = (j + (rnd() - 0.5) * 0.4) / m;
        var off = eg === "zig" ? (j % 2 ? amp : -amp) * (0.6 + rnd() * 0.5) : (rnd() - 0.5) * 2 * amp;
        if (eg === "torn") {
          wv += (rnd() - 0.5) * 0.9; wv *= 0.85; wander = clamp(wander + wv, -3 * k, 3 * k);
          off += wander;
          if (rnd() < 0.08) off += amp * 1.6;
        }
        out.push([a[0] + dx * t + nx * off, a[1] + dy * t + ny * off]);
      }
    }
    return out;
  }
  function dPoly(pts) {
    var s = "M";
    for (var i = 0; i < pts.length; i++) s += (i ? "L" : "") + f1(pts[i][0]) + " " + f1(pts[i][1]);
    return s + "Z";
  }
  function centroid(pts) {
    var x = 0, y = 0;
    pts.forEach(function (p) { x += p[0]; y += p[1]; });
    return [x / pts.length, y / pts.length];
  }
  function expand(pts, by) {
    var c = centroid(pts);
    return pts.map(function (p) {
      var dx = p[0] - c[0], dy = p[1] - c[1], l = Math.sqrt(dx * dx + dy * dy) || 1;
      return [p[0] + (dx / l) * by, p[1] + (dy / l) * by];
    });
  }
  function ellipsePts(cx, cy, rx, ry, n, rnd, wob) {
    var pts = [];
    n = n || clamp(Math.round((rx + ry) * 0.24), 12, 60);
    var ph = rnd ? rnd() * 6.28 : 0;
    for (var i = 0; i < n; i++) {
      var a = (i / n) * Math.PI * 2 + ph;
      var w = 1 + (rnd ? (rnd() - 0.5) * (wob || 0.025) : 0);
      pts.push([cx + Math.cos(a) * rx * w, cy + Math.sin(a) * ry * w]);
    }
    return pts;
  }
  /** Outline points for a named shape in a w×h box (origin top-left). */
  function shapePts(kind, w, h, rnd, o) {
    o = o || {};
    var i, n, a, pts = [];
    switch (kind) {
      case "circle":
      case "ellipse":
        return ellipsePts(w / 2, h / 2, w / 2, h / 2, o.n, rnd, 0.03);
      case "blob":
        n = 44;
        var p1 = rnd() * 6, p2 = rnd() * 6;
        for (i = 0; i < n; i++) {
          a = (i / n) * Math.PI * 2;
          var r = 1 + 0.09 * Math.sin(2 * a + p1) + 0.06 * Math.sin(3 * a + p2);
          pts.push([w / 2 + Math.cos(a) * (w / 2) * r * 0.94, h / 2 + Math.sin(a) * (h / 2) * r * 0.94]);
        }
        return pts;
      case "cloud": {
        var circles = [[0.22, 0.62, 0.22], [0.42, 0.42, 0.28], [0.64, 0.46, 0.24], [0.8, 0.64, 0.19], [0.5, 0.7, 0.26]];
        n = 64;
        var cx = 0.5, cy = 0.62;
        for (i = 0; i < n; i++) {
          a = (i / n) * Math.PI * 2;
          var ux = Math.cos(a), uy = Math.sin(a), best = 0;
          circles.forEach(function (c) {
            var dx = c[0] - cx, dy = (c[1] - cy) * (h / w), rr = c[2];
            var b = dx * ux + dy * uy, disc = b * b - (dx * dx + dy * dy - rr * rr);
            if (disc >= 0) best = Math.max(best, b + Math.sqrt(disc));
          });
          var y = cy * h + uy * best * w;
          pts.push([cx * w + ux * best * w, Math.min(h * 0.92, y)]);
        }
        return pts;
      }
      case "star":
      case "burst": {
        n = kind === "star" ? o.points || 5 : o.points || 14;
        var inner = kind === "star" ? 0.46 : 0.78;
        for (i = 0; i < n * 2; i++) {
          a = -Math.PI / 2 + (i / (n * 2)) * Math.PI * 2;
          var rr2 = i % 2 ? inner : 1;
          pts.push([w / 2 + Math.cos(a) * (w / 2) * rr2, h / 2 + Math.sin(a) * (h / 2) * rr2 * (kind === "star" ? 1.05 : 1)]);
        }
        return pts;
      }
      case "tri": return [[w / 2, 0], [w, h], [0, h]];
      case "heart":
        for (i = 0; i < 40; i++) {
          var t = (i / 40) * Math.PI * 2;
          var x = 16 * Math.pow(Math.sin(t), 3), y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
          pts.push([w / 2 + (x / 17) * (w / 2), h * 0.42 - (y / 17) * (h / 1.75)]);
        }
        return pts;
      case "tag": return [[h * 0.42, 0], [w, 0], [w, h], [h * 0.42, h], [0, h / 2]];
      case "banner": return [[0, 0], [w, 0], [w - h * 0.32, h / 2], [w, h], [0, h], [h * 0.32, h / 2]];
      case "arrow": return [[0, h * 0.3], [w * 0.62, h * 0.3], [w * 0.62, 0], [w, h / 2], [w * 0.62, h], [w * 0.62, h * 0.7], [0, h * 0.7]];
      case "leaf":
        for (i = 0; i <= 12; i++) { t = i / 12; pts.push([w * t, h / 2 - Math.sin(t * Math.PI) * h / 2]); }
        for (i = 11; i > 0; i--) { t = i / 12; pts.push([w * t, h / 2 + Math.sin(t * Math.PI) * h / 2]); }
        return pts;
      case "drop":
        for (i = 0; i < 28; i++) {
          a = (i / 28) * Math.PI * 2;
          pts.push([w / 2 + Math.sin(a) * w * 0.5 * (0.5 - 0.5 * Math.cos(a)) * 1.25, h * 0.62 - Math.cos(a) * h * 0.38 - (Math.cos(a) > 0 ? Math.cos(a) * h * 0.24 : 0)]);
        }
        return pts;
      case "arch": {
        pts.push([0, h]);
        for (i = 0; i <= 20; i++) { a = Math.PI + (i / 20) * Math.PI; pts.push([w / 2 + Math.cos(a) * w / 2, h * 0.5 + Math.sin(a) * h * 0.5]); }
        pts.push([w, h]);
        return pts;
      }
      case "hill": {
        n = 26;
        pts.push([0, h]);
        var ph2 = rnd() * 6;
        for (i = 0; i <= n; i++) {
          t = i / n;
          pts.push([w * t, h - Math.sin(t * Math.PI) * h * (0.86 + 0.08 * Math.sin(t * 9 + ph2))]);
        }
        pts.push([w, h]);
        return pts;
      }
      case "wave": {
        var waves = o.waves || 4, amp = o.amp != null ? o.amp : Math.min(h * 0.25, 26);
        n = Math.max(16, waves * 10);
        for (i = 0; i <= n; i++) {
          t = i / n;
          pts.push([w * t, amp + Math.sin(t * Math.PI * 2 * waves + (o.phase || 0)) * amp]);
        }
        pts.push([w, h]); pts.push([0, h]);
        return pts;
      }
      case "ridge": {
        n = o.n || 9;
        pts.push([0, h]);
        for (i = 0; i <= n; i++) pts.push([(i / n) * w, (i % 2 ? 0.05 + rnd() * 0.3 : 0.45 + rnd() * 0.4) * h]);
        pts.push([w, h]);
        return pts;
      }
      case "round": {
        var rr3 = Math.min(w, h) * (o.radius != null ? o.radius : 0.18);
        var q = 5;
        [[w - rr3, rr3, -Math.PI / 2], [w - rr3, h - rr3, 0], [rr3, h - rr3, Math.PI / 2], [rr3, rr3, Math.PI]].forEach(function (c) {
          for (var k = 0; k <= q; k++) {
            var aa = c[2] + (k / q) * (Math.PI / 2);
            pts.push([c[0] + Math.cos(aa) * rr3, c[1] + Math.sin(aa) * rr3]);
          }
        });
        return pts;
      }
      default:
        return [[0, 0], [w, 0], [w, h], [0, h]];
    }
  }

  /**
   * SVG markup for one paper piece (in design units).
   * o: { x, y (top-left), r (deg, about centre), edge: "cut"|"torn"|"clean", seed, sh (hard shadow, default true),
   *      tex: "paper"|"card"|"cork"|"felt"|false, shade, inner (extra markup on top, local coords), back (torn core colour),
   *      pattern: "dots"|"stripe"|"check"|"lines"|"grid", opacity, cls, id, scale }
   */
  function paperMk(shape, w, h, fill, o) {
    o = o || {};
    var rnd = R(o.seed != null ? o.seed : hs(shape + w + h + fill));
    var edge = o.edge || "cut";
    var pts = typeof shape === "string" ? shapePts(shape, w, h, rnd, o) : shape;
    var jp = jitterPoly(pts, edge, rnd, o.k);
    var d = dPoly(jp);
    var tr = "";
    if (o.x != null || o.y != null || o.r) {
      tr = "translate(" + f1(o.x || 0) + " " + f1(o.y || 0) + ")";
      if (o.r) tr += " rotate(" + f1(o.r) + " " + f1(w / 2) + " " + f1(h / 2) + ")";
      if (o.scale) tr += " scale(" + o.scale + ")";
    }
    var s = "<g" + (tr ? ' transform="' + tr + '"' : "") + (o.cls ? ' class="' + o.cls + '"' : "") + (o.id ? ' id="' + o.id + '"' : "") + (o.opacity != null ? ' opacity="' + o.opacity + '"' : "") + ">";
    var sh = o.sh === false ? 0 : o.sh != null && o.sh !== true ? o.sh : 3;
    if (sh) s += '<path d="' + d + '" transform="translate(' + f1(sh * 0.7) + " " + f1(sh) + ')" fill="rgba(48,28,10,' + (o.shA || 0.24) + ')"/>';
    if (edge === "torn" && o.back !== false) s += '<path d="' + dPoly(jitterPoly(expand(pts, 2.6), "torn", rnd)) + '" fill="' + (o.back || "#F7F0E1") + '"/>';
    s += '<path d="' + d + '" fill="' + fill + '"/>';
    if (o.pattern) s += '<path d="' + d + '" fill="url(#pp' + o.pattern.charAt(0).toUpperCase() + o.pattern.slice(1) + ')"/>';
    var tex = o.tex === undefined ? "paper" : o.tex;
    if (tex) s += '<path d="' + d + '" fill="url(#pp' + tex.charAt(0).toUpperCase() + tex.slice(1) + ')"/>';
    if (o.shade !== false) s += '<path d="' + d + '" fill="url(#ppShade)"/>';
    if (o.inner) s += o.inner;
    return s + "</g>";
  }
  S.paperMarkup = paperMk;
  S.shapePoints = shapePts;
  S.cutPath = function (pts, edge, seed) { return dPoly(jitterPoly(pts, edge || "cut", R(seed || 1))); };

  /** Thin paper strip / line (e.g. string, stitch). */
  function lineMk(x1, y1, x2, y2, color, w, o) {
    o = o || {};
    return '<line x1="' + f1(x1) + '" y1="' + f1(y1) + '" x2="' + f1(x2) + '" y2="' + f1(y2) + '" stroke="' + color + '" stroke-width="' + w + '" stroke-linecap="round"' + (o.dash ? ' stroke-dasharray="' + o.dash + '"' : "") + (o.opacity != null ? ' opacity="' + o.opacity + '"' : "") + "/>";
  }
  function circleMk(cx, cy, r, fill, o) {
    o = o || {};
    return paperMk("circle", r * 2, r * 2, fill, { x: cx - r, y: cy - r, seed: o.seed, sh: o.sh != null ? o.sh : Math.min(3, r * 0.18), tex: o.tex, shade: o.shade, edge: o.edge, inner: o.inner, cls: o.cls });
  }
  /** Brass split-pin (paper fastener) head. */
  function pinMk(cx, cy, r) {
    r = r || 7;
    return '<g><circle cx="' + f1(cx + 1) + '" cy="' + f1(cy + 1.6) + '" r="' + r + '" fill="rgba(40,24,8,0.35)"/>' +
      '<circle cx="' + f1(cx) + '" cy="' + f1(cy) + '" r="' + r + '" fill="#C9A24A"/>' +
      '<circle cx="' + f1(cx) + '" cy="' + f1(cy) + '" r="' + r + '" fill="url(#ppBall)"/>' +
      '<circle cx="' + f1(cx - r * 0.3) + '" cy="' + f1(cy - r * 0.35) + '" r="' + f1(r * 0.28) + '" fill="#FFF3C4" opacity="0.8"/></g>';
  }
  /** Googly eye: white disc + loose black pupil (pupil offset given). */
  function googlyMk(cx, cy, r, px, py, cls) {
    return '<g' + (cls ? ' class="' + cls + '"' : "") + '><circle cx="' + f1(cx + 1.2) + '" cy="' + f1(cy + 2) + '" r="' + r + '" fill="rgba(40,24,8,0.3)"/>' +
      '<circle cx="' + f1(cx) + '" cy="' + f1(cy) + '" r="' + r + '" fill="#FDFDFB" stroke="#D9D6CF" stroke-width="1.2"/>' +
      '<circle class="pp-pupil" cx="' + f1(cx + px) + '" cy="' + f1(cy + py) + '" r="' + f1(r * 0.52) + '" fill="#141414"/>' +
      '<ellipse cx="' + f1(cx - r * 0.35) + '" cy="' + f1(cy - r * 0.42) + '" rx="' + f1(r * 0.28) + '" ry="' + f1(r * 0.16) + '" fill="#fff" opacity="0.9" transform="rotate(-30 ' + f1(cx - r * 0.35) + " " + f1(cy - r * 0.42) + ')"/></g>';
  }
  S.pinMarkup = pinMk;
  S.googlyMarkup = googlyMk;

  /** Create an <svg> sized in design units (w×h) at px scale `scale` (default V.unit). */
  function svgBox(w, h, opts) {
    opts = opts || {};
    var k = opts.scale != null ? opts.scale : V.unit;
    var pad = opts.pad || 0;
    var s = el("svg", { viewBox: f1(-pad) + " " + f1(-pad) + " " + f1(w + pad * 2) + " " + f1(h + pad * 2), width: f1((w + pad * 2) * k), height: f1((h + pad * 2) * k), style: "overflow:visible;display:block" });
    if (opts.html) s.innerHTML = opts.html;
    if (opts.parent) opts.parent.appendChild(s);
    return s;
  }
  S.svgBox = svgBox;

  // ───────────────────────── world: layers, master clock ─────────────────────────
  var WORLD = null;
  var BOIL = 1;
  /** S.boil(k) → global boil amount multiplier (0 = locked-off, 1 = default, 2 = very handmade). */
  S.boil = function (k) { if (k != null && isFinite(k)) BOIL = clamp(k, 0, 3); return BOIL; };

  function newWorld(root, opts) {
    opts = opts || {};
    root = root || V.root();
    ensureDefs(root);
    root.classList.add("pp-root");
    var cam = el("div.pp-cam", { parent: root });
    var w = {
      root: root, cam: cam, pieces: [], anims: [], clips: [],
      bg: el("div.pp-layer.pp-bg", { parent: cam }),
      back: el("div.pp-layer.pp-back", { parent: cam }),
      mid: el("div.pp-layer.pp-mid", { parent: cam }),
      front: el("div.pp-layer.pp-front", { parent: cam }),
      top: el("div.pp-layer.pp-top", { parent: cam }),
      push: opts.push != null ? opts.push : 0.03,
    };
    el("div.pp-light", { parent: root });
    el("div.pp-vig", { parent: root });
    w.flick = el("div.pp-flick", { parent: root });
    WORLD = w;
    V.onFrame(function (t) { tick(w, t); });
    return w;
  }
  function world() { return WORLD || newWorld(V.root()); }
  S.world = function () { return world(); };

  function tick(w, t) {
    var ts = stepT(t), si = stepI(t);
    w.ts = ts; w.si = si;
    var i;
    for (i = 0; i < w.anims.length; i++) {
      try { w.anims[i](ts, si, t); } catch (e) { V.error("paper anim: " + (e && e.message)); }
    }
    for (i = 0; i < w.pieces.length; i++) updatePiece(w.pieces[i], ts, si);
    // stop-motion camera: a slow push-in that also moves in steps, plus exposure flicker per frame step
    var p = clamp(ts / DUR(), 0, 1);
    var sc = 1 + w.push * (p * p * (3 - 2 * p));
    var tf = "scale(" + sc.toFixed(4) + ")";
    if (tf !== w._tf) { w.cam.style.transform = tf; w._tf = tf; }
    w.flick.style.opacity = (0.25 + 0.75 * h01(si, 91)).toFixed(3);
  }
  /** Register fn(ts, stepIndex, t) — called every frame with the stepped time (stop-motion animation). */
  S.onStep = function (fn) { if (typeof fn === "function") world().anims.push(fn); };

  // ───────────────────────── pieces & stepped motion ─────────────────────────
  var KEYS = ["x", "y", "r", "s", "sx", "sy", "o"];
  function E(e) {
    if (typeof e === "function") return e;
    return (V.ease && V.ease[e]) || V.ease.outCubic;
  }
  // a "hand press": overshoot then settle (reads well when stepped)
  function settle(p) { var c = 2.2; return 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2); }
  function dropEase(p) {
    // fall, then two small bounces — chunky when stepped
    if (p < 0.55) { var q = p / 0.55; return q * q; }
    if (p < 0.82) { var r = (p - 0.685) / 0.135; return 1 - 0.09 * (1 - r * r); }
    var r2 = (p - 0.91) / 0.09; return 1 - 0.025 * Math.max(0, 1 - r2 * r2);
  }
  S.eases = { settle: settle, drop: dropEase };

  /**
   * Register an element as a stop-motion piece.
   * opts: { x, y (px; absolute anchor position in its parent — omit for in-flow elements), ax, ay (anchor 0..1),
   *         w, h (px; for absolute content), r (deg), s, boil (1), shadow (1; 0 = none), z, origin }
   */
  function makePiece(content, opts) {
    opts = opts || {};
    var w = world();
    var flow = opts.x == null && opts.y == null;
    var outer = el("div.pp-piece" + (flow ? ".pp-flow" : ""));
    var inner = el("div.pp-boil", { parent: outer });
    if (content) inner.appendChild(content);
    if (!flow) {
      outer.style.left = f1(opts.x) + "px";
      outer.style.top = f1(opts.y) + "px";
      if (opts.w != null) {
        inner.style.position = "absolute";
        inner.style.left = f1(-opts.w * (opts.ax != null ? opts.ax : 0.5)) + "px";
        inner.style.top = f1(-opts.h * (opts.ay != null ? opts.ay : 0.5)) + "px";
        inner.style.width = f1(opts.w) + "px";
        inner.style.height = f1(opts.h) + "px";
        inner.style.transformOrigin = f1(opts.w * (opts.ax != null ? opts.ax : 0.5)) + "px " + f1(opts.h * (opts.ay != null ? opts.ay : 0.5)) + "px";
      }
    } else if (opts.origin) outer.style.transformOrigin = opts.origin;
    if (opts.z != null) outer.style.zIndex = opts.z;
    if (opts.parent) opts.parent.appendChild(outer);
    var pc = new Piece(outer, inner, opts);
    w.pieces.push(pc);
    return pc;
  }
  function Piece(outer, inner, opts) {
    this.el = outer;
    this.inner = inner;
    this.seed = opts.seed != null ? opts.seed : (world().pieces.length + 1) * 7.31 + (V.seed || 0) * 0.37;
    this.boil = opts.boil != null ? opts.boil : 1;
    this.shadow = opts.shadow != null ? opts.shadow : 1;
    this.base = { x: 0, y: 0, r: opts.r || 0, s: opts.s != null ? opts.s : 1, sx: 1, sy: 1, o: 1 };
    this.moves = [];
    this.anchorX = opts.x; this.anchorY = opts.y;
    this.h = opts.h || 0;
  }
  var PP = Piece.prototype;
  PP._add = function (m) {
    m.at = num(m.at, 0);
    m.dur = Math.max(0, num(m.dur, 0.5));
    m.ease = E(m.ease || "outCubic");
    var i = this.moves.length;
    while (i > 0 && this.moves[i - 1].at > m.at) i--;
    this.moves.splice(i, 0, m);
    return this;
  };
  /** Move to props (x, y offsets in px from the base position; r deg; s; sx; sy; o) over dur. */
  PP.move = function (at, dur, to, o) {
    o = o || {};
    return this._add({ at: at, dur: dur, to: to || {}, ease: o.ease || "inOutCubic", lift: o.lift != null ? o.lift : 0.6, arc: o.arc, hops: o.hops, osc: o.osc });
  };
  PP.to = PP.move;
  /** Instant change at time `at` (one step, like re-placing the piece). */
  PP.set = function (at, props) { return this._add({ at: at, dur: 0, to: props || {}, ease: "linear", lift: 0 }); };
  /** Entrance from props to the base pose. */
  PP.from = function (at, dur, from, o) {
    o = o || {};
    return this._add({ at: at, dur: dur, from: from || {}, to: o.to || {}, ease: o.ease || "outCubic", lift: o.lift != null ? o.lift : 1, enter: true, arc: o.arc, hops: o.hops, osc: o.osc, oFast: o.oFast, hide: o.hide !== false });
  };
  function pieceTop(pc) {
    if (pc.anchorY != null) {
      var pr = pc.el.parentNode && pc.el.parentNode.getBoundingClientRect ? pc.el.parentNode.getBoundingClientRect().top : 0;
      return pr + pc.anchorY;
    }
    try { return pc.el.getBoundingClientRect().top; } catch (e) { return V.height / 2; }
  }
  /**
   * Hand-animated entrance. how: "hand" (default: slides in lifted from nearby and presses down),
   * "drop" (falls from above the frame and bounces), "pop" (grows out, stop-motion style),
   * "slide-left" | "slide-right" | "slide-up" | "slide-down" (from off-frame), "flip" (unfolds), "stamp".
   */
  PP.place = function (at, how, o) {
    o = o || {};
    at = num(at, 0);
    var sd = h01(this.seed, 5) - 0.5;
    var r0 = this.base.r;
    switch (how || "hand") {
      case "drop": {
        var dy = -(pieceTop(this) + (this.h || u(200)) + u(120));
        return this.from(at, o.dur || 0.75, { y: dy, r: r0 + sd * 40 }, { ease: dropEase, lift: 1.2 });
      }
      case "pop":
        return this.from(at, o.dur || 0.5, { s: 0.05, r: r0 + sd * 30 }, { ease: "outBack", lift: 0.8 });
      case "stamp":
        return this.from(at, o.dur || 0.4, { s: 1.5, o: 0 }, { ease: settle, lift: 1 });
      case "flip":
        return this.from(at, o.dur || 0.5, { sy: 0.02 }, { ease: settle, lift: 0.9 });
      case "slide-left": return this.from(at, o.dur || 0.8, { x: -V.width * 0.8, r: r0 - 10 }, { ease: settle, lift: 1 });
      case "slide-right": return this.from(at, o.dur || 0.8, { x: V.width * 0.8, r: r0 + 10 }, { ease: settle, lift: 1 });
      case "slide-up": return this.from(at, o.dur || 0.8, { y: V.height * 0.85, r: r0 + sd * 20 }, { ease: settle, lift: 1 });
      case "slide-down": return this.from(at, o.dur || 0.8, { y: -V.height * 0.85, r: r0 + sd * 20 }, { ease: settle, lift: 1 });
      default:
        return this.from(at, o.dur || 0.55, { x: u(90) * (sd > 0 ? 1 : -1), y: -u(70), r: r0 + sd * 26, s: 1.08 }, { ease: settle, lift: 1.1 });
    }
  };
  /** Hand-moved hops by (dx, dy) px: o = { hops: 2, height: px, dur: per-hop seconds }. */
  PP.hop = function (at, dx, dy, o) {
    o = o || {};
    var n = Math.max(1, Math.round(num(o.hops, 2)));
    var d = num(o.dur, 0.5) * n;
    var cur = this.poseAt(at);
    return this._add({ at: at, dur: d, to: { x: cur.x + (dx || 0), y: cur.y + (dy || 0) }, ease: "linear", lift: 0.8, arc: num(o.height, u(60)), hops: n });
  };
  /** Wiggle (rotate back and forth) for dur seconds. */
  PP.wiggle = function (at, dur, amt) {
    return this._add({ at: at, dur: dur || 0.8, to: {}, ease: "linear", lift: 0.3, osc: { r: amt || 6, n: 3 } });
  };
  /** Exit: "drop" (falls away), "slide-left/right/up/down", "pop" (shrinks), "lift" (picked up off the top). */
  PP.out = function (at, how, o) {
    o = o || {};
    var cur = this.poseAt(at);
    var to;
    switch (how || "lift") {
      case "slide-left": to = { x: cur.x - V.width * 0.9, r: cur.r - 8 }; break;
      case "slide-right": to = { x: cur.x + V.width * 0.9, r: cur.r + 8 }; break;
      case "slide-down":
      case "drop": to = { y: cur.y + V.height * 1.1, r: cur.r + 25 }; break;
      case "pop": to = { s: 0.02 }; break;
      default: to = { y: cur.y - V.height * 1.1, r: cur.r - 12 }; break;
    }
    var d = o.dur || 0.6;
    this._add({ at: at, dur: d, to: to, ease: "inCubic", lift: 1 });
    return this._add({ at: at + d + 0.01, dur: 0, to: { o: 0 }, ease: "linear", lift: 0 });
  };
  /** Paper flip about the horizontal (axis "y" → sy) or vertical axis (axis "x" → sx). */
  PP.flip = function (at, dur, axis) {
    var k = axis === "x" ? "sx" : "sy";
    var a = {}, b = {};
    a[k] = 0.02; b[k] = 1;
    this._add({ at: at, dur: (dur || 0.6) / 2, to: a, ease: "inQuad", lift: 1 });
    return this._add({ at: at + (dur || 0.6) / 2, dur: (dur || 0.6) / 2, to: b, ease: "outQuad", lift: 1 });
  };
  PP.poseAt = function (ts) { return evalPose(this, ts).pose; };

  function evalPose(pc, ts) {
    var P = {};
    var k, i;
    for (i = 0; i < KEYS.length; i++) P[KEYS[i]] = pc.base[KEYS[i]];
    var lift = 0, moving = 0, started = false;
    for (var mi = 0; mi < pc.moves.length; mi++) {
      var m = pc.moves[mi];
      if (ts < m.at - 1e-6) {
        if (!started && m.from) for (k in m.from) P[k] = m.from[k];
        if (!started && m.hide) P.o = 0;
        break;
      }
      started = true;
      var p = m.dur > 0 ? clamp((ts - m.at) / m.dur, 0, 1) : 1;
      var e = p >= 1 ? 1 : m.ease(p);
      var A = {};
      for (i = 0; i < KEYS.length; i++) A[KEYS[i]] = P[KEYS[i]];
      if (m.from) for (k in m.from) A[k] = m.from[k];
      var B = {};
      for (i = 0; i < KEYS.length; i++) B[KEYS[i]] = m.enter ? pc.base[KEYS[i]] : A[KEYS[i]];
      for (k in m.to) B[k] = m.to[k];
      for (i = 0; i < KEYS.length; i++) {
        k = KEYS[i];
        if (k === "o") P.o = A.o + (B.o - A.o) * clamp(m.oFast ? p * 3 : p * 1.6, 0, 1);
        else P[k] = A[k] + (B[k] - A[k]) * e;
      }
      if (m.arc && p < 1) P.y -= m.arc * Math.abs(Math.sin(Math.PI * p * (m.hops || 1)));
      if (m.osc && p < 1) for (k in m.osc) if (k !== "n") P[k] += m.osc[k] * Math.sin(Math.PI * 2 * (m.osc.n || 3) * p) * (1 - p);
      if (p > 0 && p < 1) {
        moving = 1;
        lift = Math.max(lift, (m.lift || 0) * (m.enter ? Math.pow(1 - p, 0.7) : Math.sin(Math.PI * p)));
      }
    }
    return { pose: P, lift: lift, moving: moving };
  }

  function updatePiece(pc, ts, si) {
    var r = evalPose(pc, ts);
    var P = r.pose, lift = r.lift;
    var vis = P.o > 0.02;
    if (vis !== pc._vis) { pc.el.style.visibility = vis ? "" : "hidden"; pc._vis = vis; }
    if (!vis) return;
    var ls = 1 + 0.04 * lift;
    var tf = "translate(" + f1(P.x) + "px," + f1(P.y) + "px) rotate(" + P.r.toFixed(2) + "deg) scale(" + (P.s * P.sx * ls).toFixed(4) + "," + (P.s * P.sy * ls).toFixed(4) + ")";
    if (tf !== pc._tf) { pc.el.style.transform = tf; pc._tf = tf; }
    var op = P.o >= 0.999 ? "" : P.o.toFixed(3);
    if (op !== pc._op) { pc.el.style.opacity = op; pc._op = op; }
    // boil: every step the piece is "re-placed" by hand — tiny seeded jitter, bigger while moving
    var b = BOIL * pc.boil * (1 + 1.6 * r.moving);
    var bt = "";
    if (b > 0) {
      var jx = (h01(pc.seed, si) - 0.5) * 2 * u(1.1) * b;
      var jy = (h01(pc.seed + 17.3, si) - 0.5) * 2 * u(1.1) * b;
      var jr = (h01(pc.seed + 41.9, si) - 0.5) * 2 * 0.45 * b;
      bt = "translate(" + jx.toFixed(2) + "px," + jy.toFixed(2) + "px) rotate(" + jr.toFixed(3) + "deg)";
    }
    if (bt !== pc._bt) { pc.inner.style.transform = bt; pc._bt = bt; }
    if (pc.shadow) {
      var L = Math.round(lift * 12) / 12;
      if (L !== pc._L) {
        pc._L = L;
        var sh = pc.shadow;
        var off = u(3 + 22 * L) * sh, blur = u(3 + 16 * L) * sh;
        pc.inner.style.filter = "drop-shadow(" + f1(off * 0.55) + "px " + f1(off) + "px " + f1(blur) + "px rgba(42,26,10," + (0.34 - 0.1 * L).toFixed(3) + "))";
      }
    }
  }
  S.piece = function (elem, opts) { return makePiece(elem, opts); };

  // ───────────────────────── stepped timeline (custom mode) ─────────────────────────
  /** S.tl(): a V.timeline() whose tweens advance in stop-motion steps (same API: to/from/fromTo/set/call). */
  S.tl = function () {
    var tl = V.timeline();
    function wrap(opts, base) {
      if (typeof opts === "number") opts = { at: opts };
      opts = opts || {};
      var o = {};
      for (var k in opts) o[k] = opts[k];
      var at = o.at != null ? num(o.at, 0) : tl.duration();
      at += base || 0;
      var dur = o.dur != null ? Math.max(0.0001, num(o.dur, 0.6)) : 0.6;
      var e = E(o.ease || "outCubic");
      o.at = at; o.dur = dur; o.stagger = 0;
      o.ease = function (p) {
        if (p >= 1) return e(1);
        var q = (stepT(at + p * dur + 1e-6) - at) / dur;
        return e(clamp(q, 0, 1));
      };
      return o;
    }
    function many(target) {
      if (typeof target === "string") return V.$$(target);
      if (target && typeof target.length === "number" && !target.nodeType) return [].slice.call(target);
      return [target];
    }
    var api = {
      raw: tl,
      to: function (t, p, o) { var s = (o && o.stagger) || 0; many(t).forEach(function (e, i) { tl.to(e, p, wrap(o, s * i)); }); return api; },
      from: function (t, p, o) { var s = (o && o.stagger) || 0; many(t).forEach(function (e, i) { tl.from(e, p, wrap(o, s * i)); }); return api; },
      fromTo: function (t, a, b, o) { var s = (o && o.stagger) || 0; many(t).forEach(function (e, i) { tl.fromTo(e, a, b, wrap(o, s * i)); }); return api; },
      set: function (t, p, at) { tl.set(t, p, at); return api; },
      call: function (fn, at) { tl.call(fn, at); return api; },
      duration: function () { return tl.duration(); },
    };
    return api;
  };

  // ───────────────────────── HTML paper sheets (tags, notes, strips) ─────────────────────────
  /**
   * A div made of paper: colour + fibre texture, cut/torn outline (clip-path computed after layout).
   * opts: { parent, color, shape: "rect"|"tag"|"banner"|"round"|"cloud"|"ellipse", edge: "cut"|"torn"|"zig"|[per side],
   *         tex: "paper"|"card"|"cork"|"felt", pattern: css background, cls, seed, core (torn white core, default for torn) }
   * Returns the sheet; put content in sheet.content.
   */
  function sheet(parent, opts) {
    opts = opts || {};
    var s = el("div.pp-sheet" + (opts.cls ? "." + opts.cls.split(" ").join(".") : ""), { parent: parent });
    var tornAny = opts.edge === "torn" || (Array.isArray(opts.edge) && opts.edge.indexOf("torn") >= 0);
    var core = (opts.core != null ? opts.core : tornAny) ? el("div.pp-core", { parent: s }) : null;
    var face = el("div.pp-face", { parent: s });
    var tex = opts.tex || "paper";
    face.style.backgroundColor = opts.color || C.cream;
    face.style.backgroundImage = (opts.pattern ? opts.pattern + ", " : "") + "var(--pp-" + (tex === "paper" ? "tex" : tex) + "), linear-gradient(160deg, rgba(255,255,255,0.2), rgba(255,255,255,0) 45%, rgba(60,36,12,0.13))";
    if (opts.pattern) face.style.backgroundSize = (opts.patternSize || "auto") + ", " + u(tex === "cork" ? 200 : 256) + "px, 100% 100%";
    else face.style.backgroundSize = u(tex === "cork" ? 200 : 256) + "px, 100% 100%";
    s.content = el("div.pp-content", { parent: s });
    world().clips.push({ s: s, face: face, core: core, shape: opts.shape || "rect", edge: opts.edge || "cut", seed: opts.seed != null ? opts.seed : world().clips.length * 13 + 5 });
    return s;
  }
  S.sheet = sheet;
  function polyCss(pts) {
    return "polygon(" + pts.map(function (p) { return f1(p[0]) + "px " + f1(p[1]) + "px"; }).join(",") + ")";
  }
  function finishClips() {
    var w = WORLD;
    if (!w) return;
    w.clips.forEach(function (c) {
      if (c.done) return;
      var W0 = c.s.offsetWidth, H0 = c.s.offsetHeight;
      if (!W0 || !H0) return;
      c.done = true;
      var rnd = R(c.seed + 1);
      var pts = shapePts(c.shape, W0, H0, rnd, {});
      var edge = c.edge;
      if (Array.isArray(edge) && c.shape === "rect") edge = edge.slice(0, 4);
      c.face.style.clipPath = polyCss(jitterPoly(pts, edge, rnd, V.unit));
      if (c.core) {
        var cp = shapePts(c.shape, W0 + u(5), H0 + u(5), rnd, {}).map(function (p) { return [p[0] - u(2.5), p[1] - u(2.5)]; });
        c.core.style.clipPath = polyCss(jitterPoly(cp, edge, rnd, V.unit));
      }
    });
  }
  var sharedFlush = S.flush;
  S.flush = function () {
    try { if (typeof sharedFlush === "function") sharedFlush(); } catch (e) {}
    finishClips();
  };

  // ───────────────────────── craft details ─────────────────────────
  var TAPES = [
    { c: "rgba(242,211,140,0.82)", p: "" },
    { c: "rgba(238,155,176,0.8)", p: "repeating-linear-gradient(90deg, rgba(255,255,255,0.45) 0 6px, transparent 6px 14px)" },
    { c: "rgba(157,205,230,0.8)", p: "radial-gradient(circle, rgba(255,255,255,0.7) 22%, transparent 26%)" },
    { c: "rgba(156,197,90,0.78)", p: "repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0 5px, transparent 5px 12px)" },
    { c: "rgba(236,232,220,0.78)", p: "" },
  ];
  /**
   * Washi / masking tape strip. opts: { parent, x, y (px, centre), w, h (px), r (deg), kind: 0..4 | "masking"|"pink"|"blue"|"green"|"clear" }
   * Returns the element (absolutely positioned).
   */
  S.tape = function (opts) {
    opts = opts || {};
    var names = { masking: 0, pink: 1, blue: 2, green: 3, clear: 4 };
    var k = typeof opts.kind === "string" ? names[opts.kind] || 0 : opts.kind != null ? opts.kind % TAPES.length : 0;
    var T = TAPES[k];
    var w = opts.w || u(150), h = opts.h || u(44);
    var t = el("div.pp-tape", { parent: opts.parent || world().top });
    t.style.width = w + "px"; t.style.height = h + "px";
    t.style.left = f1((opts.x || 0) - w / 2) + "px"; t.style.top = f1((opts.y || 0) - h / 2) + "px";
    t.style.transform = "rotate(" + (opts.r || 0) + "deg)";
    t.style.backgroundColor = T.c;
    var bgi = (T.p ? T.p + ", " : "") + "var(--pp-tex)";
    t.style.backgroundImage = bgi;
    t.style.backgroundSize = (T.p ? (k === 2 ? u(16) + "px " + u(16) + "px, " : "auto, ") : "") + u(256) + "px";
    var rnd = R(opts.seed || hs(w + "t" + (opts.x || 0)));
    t.style.clipPath = polyCss(jitterPoly([[0, 0], [w, 0], [w, h], [0, h]], ["clean", "zig", "clean", "zig"], rnd, V.unit * 0.8));
    return t;
  };
  /** Push pin (plastic head). opts: { parent, x, y, color, size } */
  S.pin = function (opts) {
    opts = opts || {};
    var sz = opts.size || u(40);
    var col = opts.color || C.red;
    var s = svgBox(40, 40, { scale: sz / 40 });
    s.innerHTML = '<ellipse cx="25" cy="29" rx="13" ry="7" fill="rgba(40,22,6,0.35)"/>' +
      '<circle cx="20" cy="20" r="15" fill="' + col + '"/><circle cx="20" cy="20" r="15" fill="url(#ppBall)"/>' +
      '<circle cx="20" cy="20" r="9" fill="' + col + '" stroke="rgba(0,0,0,0.15)" stroke-width="1.5"/><ellipse cx="15" cy="14" rx="4.5" ry="3" fill="#fff" opacity="0.75"/>';
    s.classList.add("pp-pin");
    s.style.left = f1((opts.x || 0) - sz / 2) + "px";
    s.style.top = f1((opts.y || 0) - sz / 2) + "px";
    (opts.parent || world().top).appendChild(s);
    return s;
  };
  /** Stitched line (dashed thread) as SVG markup, design units. */
  function stitchMk(x1, y1, x2, y2, color) {
    return lineMk(x1, y1, x2, y2, color || "rgba(255,255,255,0.85)", 2.6, { dash: "9 7" });
  }
  S.stitchMarkup = stitchMk;

  /**
   * A paper piece as a stop-motion piece. shape: circle|ellipse|rect|round|blob|cloud|star|burst|tri|heart|tag|banner|arrow|leaf|drop|hill|wave|ridge
   * opts: { parent, x, y (px centre), w, h (px), color, edge, tex, pattern, r, inner (SVG markup in a 0..w/u × 0..h/u box), boil, shadow, z }
   */
  S.paper = function (shape, opts) {
    opts = opts || {};
    var w = opts.w || u(200), h = opts.h || w;
    var dw = w / V.unit, dh = h / V.unit;
    var s = svgBox(dw, dh);
    s.innerHTML = paperMk(shape || "rect", dw, dh, opts.color || C.red, { edge: opts.edge, tex: opts.tex, pattern: opts.pattern, inner: opts.inner, seed: opts.seed, sh: opts.sh != null ? opts.sh : false });
    var pc = makePiece(s, { parent: opts.parent || world().mid, x: opts.x != null ? opts.x : V.width / 2, y: opts.y != null ? opts.y : V.height / 2, w: w, h: h, ax: opts.ax, ay: opts.ay, r: opts.r, boil: opts.boil, shadow: opts.shadow, z: opts.z });
    return pc;
  };

  // ───────────────────────── prop library (cut-paper objects) ─────────────────────────
  // Each returns { w, h, mk, ground } in design units; `ground` props stand on their bottom edge.
  function P(shape, x, y, w, h, fill, o) { o = o || {}; o.x = x; o.y = y; if (o.seed == null) o.seed = Math.round(x * 3 + y * 7 + w + h); return paperMk(shape, w, h, fill, o); }
  function ring(cx, cy, rx, ry, t, fill, half) {
    var pts = [], n = 22, i, a;
    var a0 = half ? 0 : 0, a1 = half ? Math.PI : Math.PI * 2;
    for (i = 0; i <= n; i++) { a = a0 + (i / n) * (a1 - a0); pts.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]); }
    for (i = n; i >= 0; i--) { a = a0 + (i / n) * (a1 - a0); pts.push([cx + Math.cos(a) * (rx - t), cy + Math.sin(a) * (ry - t * 0.5)]); }
    return paperMk(pts, 0, 0, fill, { seed: Math.round(cx + cy), sh: 2 });
  }
  function svgText(x, y, txt, size, fill, o) {
    o = o || {};
    return '<text x="' + f1(x) + '" y="' + f1(y) + '" font-size="' + size + '" fill="' + fill + '" text-anchor="' + (o.anchor || "middle") + '" font-family="' + (o.font || "Arial Black, Archivo Black, Noto Sans, Inter, sans-serif") + '" font-weight="900"' + (o.rotate ? ' transform="rotate(' + o.rotate + " " + x + " " + y + ')"' : "") + ">" + esc(txt) + "</text>";
  }
  function face(cx, cy, s, col) {
    col = col || C.ink;
    return '<circle cx="' + f1(cx - 14 * s) + '" cy="' + f1(cy - 4 * s) + '" r="' + f1(5 * s) + '" fill="' + col + '"/><circle cx="' + f1(cx + 14 * s) + '" cy="' + f1(cy - 4 * s) + '" r="' + f1(5 * s) + '" fill="' + col + '"/>' +
      '<path d="M' + f1(cx - 12 * s) + " " + f1(cy + 8 * s) + " Q" + f1(cx) + " " + f1(cy + 20 * s) + " " + f1(cx + 12 * s) + " " + f1(cy + 8 * s) + '" fill="none" stroke="' + col + '" stroke-width="' + f1(4 * s) + '" stroke-linecap="round"/>' +
      '<circle cx="' + f1(cx - 24 * s) + '" cy="' + f1(cy + 8 * s) + '" r="' + f1(6 * s) + '" fill="#F08A8A" opacity="0.7"/><circle cx="' + f1(cx + 24 * s) + '" cy="' + f1(cy + 8 * s) + '" r="' + f1(6 * s) + '" fill="#F08A8A" opacity="0.7"/>';
  }
  var PROPS = {
    tree: function () { return { w: 190, h: 250, ground: 1, mk: P("rect", 80, 140, 30, 110, C.brown) + P("blob", 0, 0, 190, 170, C.green) + P("blob", 26, 14, 110, 86, C.lime, { sh: 1.5 }) + P("circle", 120, 90, 22, 22, C.red, { sh: 1.5 }) + P("circle", 50, 104, 20, 20, C.red, { sh: 1.5 }) }; },
    pine: function () { return { w: 150, h: 250, ground: 1, mk: P("rect", 62, 200, 26, 50, C.brown) + P("tri", 0, 120, 150, 100, C.forest) + P("tri", 14, 62, 122, 92, C.leaf) + P("tri", 30, 0, 90, 84, C.green) }; },
    house: function (o) {
      var c = (o && o.color) || C.yellow;
      return { w: 210, h: 240, ground: 1, mk: P("rect", 140, 22, 28, 60, C.brown) + P("rect", 18, 108, 174, 132, c) + P("tri", 0, 26, 210, 100, C.red) + P("round", 86, 168, 40, 72, C.brown, { radius: 0.5 }) +
        P("rect", 34, 132, 38, 38, C.skyLt, { inner: lineMk(19, 0, 19, 38, C.white, 3) + lineMk(0, 19, 38, 19, C.white, 3) }) + P("rect", 140, 132, 38, 38, C.skyLt, { inner: lineMk(19, 0, 19, 38, C.white, 3) + lineMk(0, 19, 38, 19, C.white, 3) }) + '<circle cx="118" cy="206" r="3.5" fill="#E9C46A"/>' };
    },
    sun: function () { return { w: 220, h: 220, mk: P("burst", 0, 0, 220, 220, C.orange, { points: 12 }) + P("circle", 40, 40, 140, 140, C.yellow, { inner: face(70, 70, 1.3) }) }; },
    cloud: function () { return { w: 240, h: 140, mk: P("cloud", 0, 0, 240, 140, C.white, { sh: 2 }) }; },
    moon: function () { return { w: 180, h: 180, mk: P("circle", 0, 0, 180, 180, "#F1E6C4", { inner: P("circle", 40, 50, 34, 34, "#D9CBA3", { sh: false }) + P("circle", 100, 96, 46, 46, "#D9CBA3", { sh: false }) + P("circle", 110, 34, 22, 22, "#D9CBA3", { sh: false }) }) }; },
    star: function () { return { w: 170, h: 170, mk: P("star", 0, 0, 170, 170, C.yellow, { inner: '<g transform="translate(85 92)">' + face(0, 0, 0.8) + "</g>" }) }; },
    planet: function () { return { w: 250, h: 190, mk: ring(125, 100, 122, 34, 16, C.mustard) + P("circle", 50, 20, 150, 150, C.purple, { inner: P("ellipse", 10, 40, 120, 22, C.lilac, { sh: false }) + P("ellipse", 30, 92, 96, 18, C.lilac, { sh: false }) }) + ring(125, 100, 122, 34, 16, C.yellow, true) }; },
    rocket: function () {
      return { w: 140, h: 260, mk: P("drop", 50, 196, 40, 64, C.orange, { r: 180 }) + P([[0, 200], [30, 130], [30, 210]], 0, 0, 0, 0, C.red) + P([[140, 200], [110, 130], [110, 210]], 0, 0, 0, 0, C.red) +
        P([[70, 0], [110, 70], [110, 210], [30, 210], [30, 70]], 0, 0, 0, 0, C.white) + P("tri", 30, 0, 80, 72, C.red) + P("circle", 46, 92, 48, 48, C.cream, { inner: P("circle", 7, 7, 34, 34, C.sky, { sh: false }) }) + P("rect", 64, 150, 12, 60, C.red, { sh: 1 }) };
    },
    car: function (o) {
      var c = (o && o.color) || C.red;
      return { w: 240, h: 150, ground: 1, mk: P("round", 50, 10, 130, 70, c, { radius: 0.35 }) + P("round", 66, 22, 44, 40, C.skyLt, { radius: 0.2 }) + P("round", 120, 22, 44, 40, C.skyLt, { radius: 0.2 }) + P("round", 0, 60, 240, 62, c, { radius: 0.4 }) +
        P("rect", 200, 74, 26, 14, C.yellow) + P("circle", 30, 92, 58, 58, "#33302C", { inner: P("circle", 17, 17, 24, 24, C.greyLt, { sh: false }) }) + P("circle", 152, 92, 58, 58, "#33302C", { inner: P("circle", 17, 17, 24, 24, C.greyLt, { sh: false }) }) };
    },
    boat: function () { return { w: 230, h: 230, ground: 1, mk: P("rect", 108, 20, 10, 150, C.brown) + P([[118, 24], [214, 150], [118, 150]], 0, 0, 0, 0, C.white) + P([[104, 40], [104, 150], [30, 150]], 0, 0, 0, 0, C.cream) + P("tag", 118, 6, 44, 24, C.red, { r: 180 }) + P([[0, 160], [230, 160], [196, 230], [34, 230]], 0, 0, 0, 0, C.red, { inner: lineMk(10, 182, 220, 182, C.white, 5) }) }; },
    plane: function () { return { w: 260, h: 150, mk: P([[150, 70], [190, 0], [214, 0], [196, 76]], 0, 0, 0, 0, C.blue) + P("ellipse", 0, 50, 250, 60, C.white) + P([[20, 60], [50, 6], [70, 6], [64, 66]], 0, 0, 0, 0, C.red) + P([[100, 84], [180, 150], [200, 150], [160, 80]], 0, 0, 0, 0, C.blue) + P("circle", 196, 62, 22, 22, C.sky, { sh: 1 }) + P("circle", 160, 64, 16, 16, C.sky, { sh: 1 }) + P("circle", 132, 64, 16, 16, C.sky, { sh: 1 }) }; },
    apple: function () { return { w: 170, h: 190, ground: 1, mk: P("rect", 80, 0, 12, 40, C.brown) + P("leaf", 92, 10, 60, 30, C.green, { r: -20 }) + P("blob", 0, 26, 170, 164, C.red, { inner: P("ellipse", 30, 30, 34, 50, "#F07C6A", { sh: false, r: 20 }) }) }; },
    book: function (o) { var c = (o && o.color) || C.blue; return { w: 200, h: 230, ground: 1, mk: P("rect", 14, 6, 186, 224, C.cream) + P("rect", 0, 0, 180, 224, c, { inner: P("rect", 30, 50, 120, 46, C.cream, { sh: 1.5 }) + lineMk(14, 0, 14, 224, "rgba(0,0,0,0.18)", 4) }) }; },
    lightbulb: function () { return { w: 170, h: 240, mk: P("circle", 0, 0, 170, 170, "#FFF3B0", { inner: '<path d="M60 130 Q70 90 85 110 Q100 90 110 130" fill="none" stroke="#E8A33A" stroke-width="5" stroke-linecap="round"/>' }) + P([[45, 150], [125, 150], [115, 190], [55, 190]], 0, 0, 0, 0, "#FFF3B0", { sh: false }) + P("round", 52, 184, 66, 44, C.grey, { radius: 0.2, inner: lineMk(4, 14, 62, 14, "#6F6A62", 3) + lineMk(4, 28, 62, 28, "#6F6A62", 3) }) + P("rect", 70, 226, 30, 14, "#555") }; },
    coin: function () { return { w: 180, h: 180, mk: P("circle", 0, 0, 180, 180, "#E8B23A", { inner: P("circle", 20, 20, 140, 140, "#F5CB5C", { sh: 1.5 }) + svgText(90, 122, "$", 104, "#B07A12") }) }; },
    money: function () { return { w: 190, h: 220, ground: 1, mk: P("blob", 0, 50, 190, 170, "#9CC55A", { inner: svgText(95, 128, "$", 96, "#3E7D3A") }) + P("tri", 60, 0, 70, 66, "#9CC55A") + P("rect", 56, 52, 78, 18, C.brown) }; },
    heart: function () { return { w: 190, h: 170, mk: P("heart", 0, 0, 190, 170, C.red, { inner: P("ellipse", 36, 30, 40, 26, "#F07C6A", { sh: false, r: -30 }) }) }; },
    flower: function () { var s = P("rect", 82, 110, 12, 130, C.leaf) + P("leaf", 92, 160, 60, 28, C.green, { r: -25 }) + P("leaf", 26, 180, 60, 28, C.green, { r: 25 }); for (var i = 0; i < 6; i++) { var a = (i / 6) * Math.PI * 2; s += P("circle", 88 + Math.cos(a) * 46 - 32, 70 + Math.sin(a) * 46 - 32, 64, 64, C.pink); } return { w: 176, h: 240, ground: 1, mk: s + P("circle", 58, 40, 60, 60, C.yellow) }; },
    mountain: function () { return { w: 280, h: 200, ground: 1, mk: P("tri", 0, 0, 280, 200, C.slate) + P([[110, 30], [140, 0], [170, 30], [158, 44], [140, 32], [124, 46]], 0, 0, 0, 0, C.white, { sh: 1.5 }) }; },
    fish: function () { return { w: 230, h: 140, mk: P("tri", 0, 20, 70, 100, C.orange, { r: -90 }) + P("ellipse", 40, 10, 180, 120, C.orange, { inner: P("rect", 60, 6, 18, 108, C.white, { sh: false }) + P("rect", 100, 4, 16, 112, C.white, { sh: false }) }) + googlyMk(180, 56, 16, 3, 2) }; },
    cup: function () { return { w: 200, h: 220, ground: 1, mk: '<path d="M70 60 Q50 30 72 6 M110 60 Q90 30 112 6" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" opacity="0.85"/>' + ring(160, 140, 44, 44, 18, C.teal) + P("round", 20, 70, 150, 150, C.teal, { radius: 0.15, inner: P("heart", 50, 46, 50, 46, C.cream, { sh: 1 }) }) }; },
    clock: function () { return { w: 200, h: 200, mk: P("circle", 0, 0, 200, 200, C.red, { inner: P("circle", 18, 18, 164, 164, C.cream, { sh: 1.5 }) + lineMk(100, 100, 100, 46, C.ink, 9) + lineMk(100, 100, 140, 116, C.ink, 7) + '<circle cx="100" cy="100" r="8" fill="' + C.ink + '"/>' }) }; },
    globe: function () { return { w: 200, h: 240, ground: 1, mk: P("rect", 90, 190, 20, 30, C.brown) + P("ellipse", 40, 214, 120, 26, C.brown) + P("circle", 10, 0, 180, 180, C.blue, { inner: P("blob", 30, 30, 70, 60, C.green, { sh: 1 }) + P("blob", 96, 80, 60, 70, C.green, { sh: 1 }) + P("blob", 40, 120, 40, 30, C.green, { sh: 1 }) }) }; },
    gift: function () { return { w: 200, h: 210, ground: 1, mk: P("rect", 10, 70, 180, 140, C.purple, { inner: P("rect", 74, 0, 32, 140, C.yellow, { sh: 1 }) }) + P("rect", 0, 50, 200, 40, C.lilac, { inner: P("rect", 84, 0, 32, 40, C.yellow, { sh: 1 }) }) + P("ellipse", 46, 10, 60, 44, C.yellow, { r: 20 }) + P("ellipse", 94, 10, 60, 44, C.yellow, { r: -20 }) }; },
    trophy: function () { return { w: 200, h: 230, ground: 1, mk: ring(40, 70, 36, 40, 14, "#E8B23A") + ring(160, 70, 36, 40, 14, "#E8B23A") + P([[30, 10], [170, 10], [150, 110], [100, 140], [50, 110]], 0, 0, 0, 0, "#F2C230", { inner: P("star", 70, 30, 60, 60, C.white, { sh: 1 }) }) + P("rect", 86, 130, 28, 50, "#E8B23A") + P("rect", 40, 176, 120, 54, C.brown, { inner: P("rect", 20, 14, 80, 24, "#F2C230", { sh: 1 }) }) }; },
    cake: function () { return { w: 220, h: 230, ground: 1, mk: P("rect", 104, 10, 12, 50, C.blue) + P("drop", 98, -18, 24, 34, C.orange) + P("round", 20, 60, 180, 70, C.pink, { radius: 0.2, inner: P("wave", 0, 0, 180, 30, C.white, { sh: 1, waves: 5, amp: 7 }) }) + P("round", 0, 120, 220, 110, C.rose, { radius: 0.15, inner: P("wave", 0, 0, 220, 34, C.white, { sh: 1, waves: 6, amp: 8 }) }) }; },
    laptop: function () { return { w: 260, h: 190, ground: 1, mk: P("round", 30, 0, 200, 140, C.slate, { radius: 0.08, inner: P("rect", 14, 14, 172, 112, C.sky, { sh: 1 }) + lineMk(40, 50, 140, 50, C.white, 7) + lineMk(40, 74, 120, 74, C.white, 7) }) + P([[10, 150], [250, 150], [260, 190], [0, 190]], 0, 0, 0, 0, C.greyLt) }; },
    drop: function () { return { w: 140, h: 200, mk: P("drop", 0, 0, 140, 200, C.blue, { inner: P("ellipse", 34, 100, 22, 40, C.skyLt, { sh: false, r: 15 }) }) }; },
    leaf: function () { return { w: 220, h: 110, mk: P("leaf", 0, 0, 220, 110, C.green, { r: -15, inner: lineMk(10, 55, 210, 55, C.leaf, 4) }) }; },
    flame: function () { return { w: 160, h: 230, ground: 1, mk: P("drop", 0, 0, 160, 230, C.orange) + P("drop", 36, 80, 88, 150, C.yellow, { sh: 1 }) }; },
    bolt: function () { return { w: 150, h: 230, mk: P([[90, 0], [10, 130], [70, 130], [50, 230], [140, 90], [80, 90], [110, 0]], 0, 0, 0, 0, C.yellow) }; },
    bread: function () { return { w: 230, h: 150, ground: 1, mk: P("round", 0, 20, 230, 130, C.woodLt, { radius: 0.45, inner: '<path d="M50 30 l20 30 M100 26 l20 30 M150 30 l20 30" stroke="#8E5A2E" stroke-width="7" stroke-linecap="round"/>' }) }; },
    carrot: function () { return { w: 120, h: 240, mk: P("leaf", 30, 0, 60, 30, C.green, { r: -70 }) + P("leaf", 40, 0, 60, 30, C.leaf, { r: -110 }) + P([[10, 50], [110, 50], [64, 240]], 0, 0, 0, 0, C.orange, { inner: lineMk(30, 90, 56, 92, "#C2621E", 4) + lineMk(64, 130, 86, 128, "#C2621E", 4) }) }; },
    pizza: function () { return { w: 220, h: 220, mk: P([[0, 20], [220, 20], [110, 220]], 0, 0, 0, 0, C.yellow, { inner: P("circle", 70, 40, 34, 34, C.red, { sh: 1 }) + P("circle", 120, 60, 30, 30, C.red, { sh: 1 }) + P("circle", 96, 110, 26, 26, C.red, { sh: 1 }) }) + P("round", 0, 0, 220, 40, C.woodLt, { radius: 0.5 }) }; },
    battery: function () { return { w: 140, h: 240, ground: 1, mk: P("rect", 46, 0, 48, 24, C.grey) + P("round", 0, 20, 140, 220, C.ink, { radius: 0.15, inner: P("rect", 20, 120, 100, 80, C.lime, { sh: 1 }) + P("rect", 20, 30, 100, 80, C.lime, { sh: 1 }) }) }; },
    magnet: function () { return { w: 200, h: 200, mk: ring(100, 90, 90, 90, 50, C.red, true) + P("rect", 10, 50, 50, 40, C.red) + P("rect", 140, 50, 50, 40, C.red) + P("rect", 10, 20, 50, 34, C.greyLt) + P("rect", 140, 20, 50, 34, C.greyLt) }; },
    phone: function () { return { w: 130, h: 230, ground: 1, mk: P("round", 0, 0, 130, 230, C.ink, { radius: 0.15, inner: P("rect", 10, 22, 110, 170, C.sky, { sh: 1 }) + '<circle cx="65" cy="210" r="8" fill="#666"/>' }) }; },
    tooth: function () { return { w: 160, h: 190, mk: P([[10, 30], [40, 0], [80, 16], [120, 0], [150, 30], [140, 100], [120, 190], [96, 120], [64, 120], [40, 190], [20, 100]], 0, 0, 0, 0, C.white) }; },
  };
  var PROP_ALIAS = { idea: "lightbulb", bulb: "lightbulb", light: "lightbulb", money: "money", dollar: "coin", cash: "money", coins: "coin", tree: "tree", forest: "pine", home: "house", building: "house", water: "drop", rain: "drop", fire: "flame", energy: "bolt", power: "bolt", electricity: "bolt", love: "heart", health: "heart", time: "clock", world: "globe", earth: "globe", present: "gift", award: "trophy", win: "trophy", prize: "trophy", food: "apple", fruit: "apple", coffee: "cup", tea: "cup", mug: "cup", computer: "laptop", tech: "laptop", space: "rocket", travel: "plane", ship: "boat", ocean: "fish", sea: "fish", plant: "flower", nature: "leaf", night: "moon", sky: "cloud", weather: "cloud", birthday: "cake", mobile: "phone", vegetable: "carrot", hill: "mountain", mountains: "mountain" };
  S.propNames = Object.keys(PROPS);

  function iconSticker(name) {
    var ic = S.icon(name, { size: 24 });
    var body = ic ? ic.innerHTML : "";
    return { w: 190, h: 190, mk: P("circle", 0, 0, 190, 190, C.white, { inner: P("circle", 14, 14, 162, 162, C.yellow, { sh: 1 }) + '<g transform="translate(37 37) scale(4.83)" fill="none" stroke="' + C.ink + '" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">' + body + "</g>" }) };
  }
  function propDef(name, o) {
    var key = str(name).toLowerCase().trim().replace(/\s+/g, "-");
    var fn = PROPS[key] || PROPS[PROP_ALIAS[key]];
    if (!fn && key.slice(-1) === "s") fn = PROPS[key.slice(0, -1)];
    return fn ? fn(o || {}) : iconSticker(key);
  }
  S.propMarkup = function (name, o) { return propDef(name, o); };
  /**
   * A cut-paper prop as a stop-motion piece. name: see S.propNames (unknown names → icon sticker).
   * opts: { parent, x, y (px; bottom-centre for standing props, centre for floating), size (px height), color, r, z, boil }
   */
  S.prop = function (name, opts) {
    opts = opts || {};
    var d = propDef(name, opts);
    var size = opts.size || u(220);
    var k = size / d.h;
    var s = svgBox(d.w, d.h, { scale: k, pad: 6 });
    s.innerHTML = d.mk;
    var ay = opts.ay != null ? opts.ay : d.ground || opts.ground ? (d.h + 6) / (d.h + 12) : 0.5;
    var pc = makePiece(s, { parent: opts.parent || world().mid, x: opts.x != null ? opts.x : V.width / 2, y: opts.y != null ? opts.y : V.height / 2, w: (d.w + 12) * k, h: (d.h + 12) * k, ax: 0.5, ay: ay, r: opts.r, boil: opts.boil, z: opts.z, shadow: opts.shadow });
    pc.width = d.w * k; pc.height = d.h * k; pc.h = d.h * k;
    return pc;
  };

  // ───────────────────────── cut-paper typography ─────────────────────────
  var FONTS = {
    block: '"Arial Black", "Archivo Black", "Noto Sans", Inter, system-ui, sans-serif',
    serif: 'Georgia, "Noto Serif", "Times New Roman", serif',
    type: '"Courier New", "Noto Sans Mono", "DejaVu Sans Mono", monospace',
    round: '"Trebuchet MS", "Verdana", "Noto Sans", sans-serif',
    tall: 'Impact, "Haettenschweiler", "Arial Narrow", "Noto Sans", sans-serif',
  };
  S.fonts = FONTS;
  var RANSOM = [
    { bg: C.white, fg: C.ink, f: "block" }, { bg: C.ink, fg: C.white, f: "serif" }, { bg: C.yellow, fg: C.ink, f: "tall" },
    { bg: C.red, fg: C.white, f: "block" }, { bg: C.cream, fg: C.red, f: "serif" }, { bg: C.skyLt, fg: C.navy, f: "type" },
    { bg: "#F7B9C8", fg: C.ink, f: "round" }, { bg: C.teal, fg: C.white, f: "tall" }, { bg: "#FBE38A", fg: C.blue, f: "serif" },
  ];
  var STRIP_COLORS = [C.white, C.cream, "#FBE38A", C.white, "#F4E2C6"];

  /** Shrink a cut-text box until it fits maxWidth / maxLines / maxHeight (rows counted from laid-out pieces). */
  function fitCut(box, opts, size) {
    var maxW = opts.maxWidth || (box.parentNode && box.parentNode.clientWidth) || V.width * 0.86;
    var maxL = opts.maxLines || 3;
    function rows(fs) {
      var tops = [].map.call(box.children, function (c) { return c.offsetTop + c.offsetHeight / 2; }).sort(function (a, b) { return a - b; });
      var n = tops.length ? 1 : 0;
      for (var i = 1; i < tops.length; i++) if (tops[i] - tops[i - 1] > fs * 0.55) n++;
      return n;
    }
    function fits(fs) {
      box.style.fontSize = fs + "px";
      if (box.scrollWidth > maxW + 1) return false;
      var kids = box.children;
      for (var i = 0; i < kids.length; i++) if (kids[i].offsetWidth > maxW + 1) return false;
      if (rows(fs) > maxL) return false;
      if (opts.maxHeight && box.offsetHeight > opts.maxHeight) return false;
      return true;
    }
    if (fits(size)) return;
    var lo = Math.min(size, u(16)), hi = size, best = lo;
    for (var k = 0; k < 11 && hi - lo > 0.5; k++) {
      var mid = (lo + hi) / 2;
      if (fits(mid)) { best = mid; lo = mid; } else hi = mid;
    }
    box.style.fontSize = (best * 0.98).toFixed(2) + "px";
  }
  S.fitText = fitCut;

  /**
   * Cut-paper text. mode:
   *  "strip"   — each word on its own scissor-cut paper strip (default; *emphasis* words on accent strips)
   *  "ransom"  — ransom-note collage: every letter on its own scrap, mixed fonts & colours
   *  "letters" — big letters cut from coloured paper
   *  "label"   — one typewriter label strip
   *  "stencil" — stencilled label on a kraft tag with string hole
   * opts: { parent, size (px font size), color, maxLines, maxWidth (px), align ("center"|"left"), seed }
   * Returns { el, pieces, place(at, { how, stagger, sync }) }.
   */
  S.cutText = function (text, opts) {
    opts = opts || {};
    var mode = opts.mode || "strip";
    var parent = opts.parent || world().top;
    var size = opts.size || u(64);
    var seed = opts.seed != null ? opts.seed : hs(text) + 3;
    var rnd = R(seed);
    var box = el("div.pp-text.pp-text-" + mode, { parent: parent });
    box.style.fontSize = f1(size) + "px";
    if (opts.maxWidth) box.style.maxWidth = f1(opts.maxWidth) + "px";
    if (opts.align === "left") box.classList.add("pp-left");
    var pieces = [];
    var raw = str(text).trim();
    var words = [];
    raw.replace(/\*([^*]+)\*|(\S+)/g, function (m0, em, w) {
      if (em) em.split(/\s+/).forEach(function (x) { if (x) words.push({ t: x, em: true }); });
      else words.push({ t: w, em: false });
      return "";
    });
    if (!words.length) words.push({ t: " ", em: false });
    var accent = opts.color || C.red;
    if (mode === "label" || mode === "stencil") {
      var tagEl = el("div.pp-flowwrap", { parent: box });
      var sh = sheet(null, { color: mode === "stencil" ? C.kraftLt : opts.paper || C.white, shape: mode === "stencil" ? "tag" : "rect", edge: "cut", tex: mode === "stencil" ? "card" : "paper", seed: seed });
      sh.classList.add(mode === "stencil" ? "pp-stencil" : "pp-label");
      if (mode === "stencil") el("div.pp-hole", { parent: sh });
      sh.content.textContent = plain(raw);
      if (opts.ink) sh.content.style.color = opts.ink;
      var pc = makePiece(sh, { parent: tagEl, r: opts.r != null ? opts.r : (rnd() - 0.5) * 4 });
      pieces.push(pc);
    } else if (mode === "ransom") {
      words.forEach(function (w, wi) {
        var wEl = el("span.pp-rw", { parent: box });
        Array.prototype.forEach.call(w.t, function (ch, ci) {
          var st = RANSOM[Math.floor(rnd() * RANSOM.length)];
          if (w.em && rnd() < 0.6) st = { bg: accent, fg: C.white, f: "block" };
          var sh2 = sheet(null, { color: st.bg, shape: "rect", edge: rnd() < 0.3 ? "torn" : "cut", seed: seed + wi * 31 + ci, core: false });
          sh2.classList.add("pp-rl");
          sh2.content.textContent = ch;
          sh2.content.style.color = st.fg;
          sh2.content.style.fontFamily = FONTS[st.f];
          sh2.content.style.fontSize = (0.82 + rnd() * 0.36).toFixed(2) + "em";
          if (rnd() < 0.3) sh2.content.style.fontStyle = "italic";
          var pc2 = makePiece(sh2, { parent: wEl, r: (rnd() - 0.5) * 14, boil: 0.8 });
          pc2.el.style.marginTop = f1((rnd() - 0.5) * size * 0.16) + "px";
          pc2.word = wi;
          pieces.push(pc2);
        });
      });
    } else if (mode === "letters") {
      var cols = opts.colors || [C.red, C.blue, C.yellow, C.teal, C.orange, C.purple, C.green];
      words.forEach(function (w, wi) {
        var wEl = el("span.pp-rw", { parent: box });
        Array.prototype.forEach.call(w.t, function (ch, ci) {
          var g = el("span.pp-glyph", { text: ch });
          var col = w.em ? accent : opts.color ? opts.color : cols[(wi * 3 + ci) % cols.length];
          g.style.backgroundColor = col;
          var pc3 = makePiece(g, { parent: wEl, r: (rnd() - 0.5) * 10, boil: 0.8 });
          pc3.word = wi;
          pieces.push(pc3);
        });
      });
    } else {
      words.forEach(function (w, wi) {
        var col = w.em ? accent : opts.paper || STRIP_COLORS[Math.floor(rnd() * STRIP_COLORS.length)];
        var sh3 = sheet(null, { color: col, shape: "rect", edge: rnd() < 0.25 ? ["cut", "torn", "cut", "cut"] : "cut", seed: seed + wi * 17, core: false });
        sh3.classList.add("pp-strip");
        sh3.content.textContent = w.t;
        if (w.em) sh3.content.style.color = C.white;
        else if (opts.ink) sh3.content.style.color = opts.ink;
        var pc4 = makePiece(sh3, { parent: box, r: (rnd() - 0.5) * 5, boil: 0.8 });
        pc4.el.style.marginTop = f1((rnd() - 0.5) * size * 0.12) + "px";
        pc4.word = wi;
        pieces.push(pc4);
      });
    }
    if (opts.fit !== false) {
      try { fitCut(box, opts, size); } catch (e) { V.error("cutText fit: " + e.message); }
    }
    var api = {
      el: box,
      pieces: pieces,
      words: words,
      /** Place pieces from `at`: how = "hand"|"drop"|"pop"|"stamp"; stagger seconds; sync: true → each word lands as it is spoken. */
      place: function (at, o) {
        o = o || {};
        at = num(at, 0);
        var how = o.how || (mode === "ransom" || mode === "letters" ? "pop" : "hand");
        var stg = o.stagger != null ? o.stagger : mode === "ransom" || mode === "letters" ? 0.07 : 0.16;
        var times = null;
        if (o.sync) times = S.syncTimes(words.map(function (w) { return plain(w.t); }), { start: at, lead: 0.1 });
        pieces.forEach(function (pc, i) {
          var t = times && pc.word != null ? times[pc.word] + (mode === "ransom" || mode === "letters" ? (i % 6) * 0.05 : 0) : at + i * stg;
          pc.place(ct(t), how, o);
        });
        return api;
      },
    };
    return api;
  };

  // ───────────────────────── paper puppets (split-pin joints) ─────────────────────────
  var CAST = {
    mo: { name: "Mo", kind: "human", desc: "curious kid, orange hoodie, curly black hair", skin: SKINS[3], hair: "curly", hairCol: "#221A16", top: C.orange, outfit: "hoodie", legs: "#3D5A86", shoes: C.white, scale: 0.84 },
    pip: { name: "Pip", kind: "human", desc: "bright girl, yellow dress, red pigtails, freckles", skin: SKINS[0], hair: "pigtails", hairCol: "#C4532A", top: C.yellow, outfit: "dress", legs: "#3C6FB4", shoes: C.red, scale: 0.82, freckles: true },
    otto: { name: "Otto", kind: "human", desc: "grandpa, green cardigan, flat cap, moustache, glasses", skin: SKINS[1], hair: "side", hairCol: "#E2DDD3", top: "#5E8E5A", outfit: "cardigan", legs: "#6B5B4B", shoes: "#3A2A20", scale: 1, hat: "cap", hatCol: "#8C7A5C", glasses: true, moustache: true },
    ada: { name: "Dr. Ada", kind: "human", desc: "scientist, white lab coat, purple hair bun, glasses", skin: SKINS[4], hair: "bun", hairCol: "#5B3A8C", top: C.white, inner: C.teal, outfit: "labcoat", legs: "#2E3A4A", shoes: C.ink, scale: 0.98, glasses: true },
    leo: { name: "Leo", kind: "human", desc: "chef, white chef jacket, tall chef hat, beard", skin: SKINS[2], hair: "short", hairCol: "#3A281C", top: C.white, outfit: "chef", legs: "#3A3A3A", shoes: C.ink, scale: 1, hat: "chef", beard: true },
    biscuit: { name: "Biscuit", kind: "dog", desc: "tan dog with floppy ears and a wagging tail", col: "#D9A35F", col2: "#F3DDB5", ear: "#8E5A2E", scale: 1 },
    mittens: { name: "Mittens", kind: "cat", desc: "grey striped cat with white paws", col: "#8E939A", col2: "#F1EEE8", ear: "#6E737A", scale: 1 },
    hoot: { name: "Hoot", kind: "owl", desc: "wise brown owl with big googly eyes", col: "#9A6A3E", col2: "#E9D2A8", scale: 1 },
  };
  S.cast = Object.keys(CAST);
  S.castInfo = CAST;

  function G(cls, inner, extra) { return '<g class="' + cls + '"' + (extra || "") + ">" + inner + "</g>"; }
  function mouthSet(cx, cy, s, lip) {
    lip = lip || "#5A1F1A";
    function grp(n, mk) { return '<g class="m-' + n + '" transform="translate(' + cx + " " + cy + ") scale(" + s + ')">' + mk + "</g>"; }
    var smile = '<path d="M-26 -6 Q0 18 26 -6 Q0 30 -26 -6Z" fill="' + lip + '"/>';
    var small = paperMk("ellipse", 34, 22, lip, { x: -17, y: -10, sh: 1, tex: false, shade: false, inner: P("ellipse", 8, 11, 18, 10, "#E07A7A", { sh: false, tex: false }) });
    var open = paperMk("ellipse", 52, 40, lip, { x: -26, y: -16, sh: 1.5, tex: false, shade: false, inner: P("rect", 8, 2, 36, 8, "#fff", { sh: false, tex: false, shade: false }) + P("ellipse", 12, 24, 28, 14, "#E07A7A", { sh: false, tex: false }) });
    var wide = paperMk("round", 66, 32, lip, { x: -33, y: -12, radius: 0.45, sh: 1.5, tex: false, shade: false, inner: P("rect", 8, 2, 50, 9, "#fff", { sh: false, tex: false, shade: false }) + P("ellipse", 20, 18, 26, 12, "#E07A7A", { sh: false, tex: false }) });
    var oh = paperMk("ellipse", 26, 34, lip, { x: -13, y: -14, sh: 1, tex: false, shade: false });
    return grp("rest", smile) + grp("small", small) + grp("open", open) + grp("wide", wide) + grp("o", oh);
  }
  function humanMk(c) {
    var sk = c.skin, skD = "rgba(120,60,30,0.22)";
    var top = c.top, i;
    var s = "";
    // upper body group
    var torso = "";
    torso += P("rect", -20, -478, 40, 40, sk, { sh: 1.5, seed: 21 });
    if (c.outfit === "dress") {
      torso += P([[-68, -458], [68, -458], [118, -186], [-118, -186]], 0, 0, 0, 0, top, { seed: 22, inner: P("ellipse", -46, -462, 44, 26, C.white, { sh: 1.5, r: 10 }) + P("ellipse", 2, -462, 44, 26, C.white, { sh: 1.5, r: -10 }) });
      for (i = 0; i < 3; i++) torso += '<circle cx="0" cy="' + (-405 + i * 50) + '" r="7" fill="' + C.red + '"/>';
      torso += stitchMk(-112, -200, 112, -200, "rgba(255,255,255,0.8)");
    } else if (c.outfit === "labcoat") {
      torso += P([[-46, -458], [46, -458], [40, -230], [-40, -230]], 0, 0, 0, 0, c.inner, { seed: 23 });
      torso += P([[-76, -458], [-14, -458], [6, -330], [-8, -166], [-96, -166]], 0, 0, 0, 0, top, { seed: 24 });
      torso += P([[76, -458], [14, -458], [-2, -330], [10, -166], [96, -166]], 0, 0, 0, 0, top, { seed: 25 });
      torso += P("rect", 30, -330, 44, 50, "#EDE8DC", { sh: 1.5, seed: 26 }) + lineMk(40, -342, 40, -312, C.blue, 5) + lineMk(52, -346, 52, -314, C.red, 5);
    } else if (c.outfit === "chef") {
      torso += P([[-76, -458], [76, -458], [84, -214], [-84, -214]], 0, 0, 0, 0, top, { seed: 27 });
      torso += P("tri", -34, -470, 68, 46, C.red, { r: 180, seed: 28 });
      for (i = 0; i < 3; i++) torso += '<circle cx="-24" cy="' + (-390 + i * 50) + '" r="7" fill="#B9B2A4"/><circle cx="24" cy="' + (-390 + i * 50) + '" r="7" fill="#B9B2A4"/>';
    } else if (c.outfit === "cardigan") {
      torso += P([[-74, -458], [74, -458], [86, -214], [-86, -214]], 0, 0, 0, 0, top, { seed: 29 });
      torso += P("tri", -34, -458, 68, 92, C.cream, { r: 180, seed: 30, sh: 1.5 });
      for (i = 0; i < 4; i++) torso += '<circle cx="0" cy="' + (-350 + i * 36) + '" r="7" fill="' + C.brown + '"/>';
      torso += stitchMk(-80, -232, 80, -232, "rgba(255,255,255,0.55)");
    } else {
      torso += P([[-76, -458], [76, -458], [88, -214], [-88, -214]], 0, 0, 0, 0, top, { seed: 31 });
      torso += P("round", -52, -320, 104, 50, "rgba(0,0,0,0.12)", { radius: 0.3, sh: false, seed: 32 });
      torso += lineMk(-16, -452, -20, -396, C.white, 5) + lineMk(16, -452, 20, -396, C.white, 5);
      torso += stitchMk(-84, -234, 84, -234, "rgba(255,255,255,0.6)");
    }
    // head
    var head = "";
    var hc = c.hairCol;
    if (c.hair === "curly") for (i = 0; i < 11; i++) { var a = Math.PI + (i / 10) * Math.PI; head += P("circle", Math.cos(a) * 104 - 38, -560 + Math.sin(a) * 100 - 38, 76, 76, hc, { seed: 40 + i, sh: 1.5 }); }
    if (c.hair === "pigtails") {
      head += P("blob", -178, -560, 76, 120, hc, { seed: 41, r: 20 }) + P("blob", 102, -560, 76, 120, hc, { seed: 42, r: -20 });
      head += P("tri", -140, -585, 46, 44, C.teal, { r: 90, seed: 43 }) + P("tri", 94, -585, 46, 44, C.teal, { r: -90, seed: 44 });
    }
    if (c.hair === "bun") head += P("circle", -50, -762, 100, 100, hc, { seed: 45 });
    head += P("circle", -132, -582, 46, 50, sk, { seed: 46, sh: 1.5 }) + P("circle", 86, -582, 46, 50, sk, { seed: 47, sh: 1.5 });
    head += P("circle", -112, -672, 224, 224, sk, { seed: 48, n: 30 });
    head += '<circle cx="-62" cy="-525" r="15" fill="#F0857A" opacity="0.45"/><circle cx="62" cy="-525" r="15" fill="#F0857A" opacity="0.45"/>';
    if (c.freckles) for (i = 0; i < 6; i++) head += '<circle cx="' + ((i < 3 ? -1 : 1) * (52 + (i % 3) * 10)) + '" cy="' + (-540 + (i % 2) * 8) + '" r="3" fill="#B0603A"/>';
    // hair front
    if (c.hair === "curly") for (i = 0; i < 6; i++) head += P("circle", -92 + i * 30, -684 + (i % 2) * 10, 60, 56, hc, { seed: 52 + i, sh: 2 });
    if (c.hair === "pigtails") head += P([[-108, -600], [-96, -650], [-50, -682], [0, -690], [50, -682], [96, -650], [108, -600], [80, -616], [50, -604], [20, -620], [-14, -604], [-48, -620], [-80, -606]], 0, 0, 0, 0, hc, { seed: 60 });
    if (c.hair === "bun") head += P([[-112, -585], [-100, -640], [-56, -676], [0, -686], [56, -676], [100, -640], [112, -585], [86, -612], [30, -640], [-30, -636], [-84, -612]], 0, 0, 0, 0, hc, { seed: 61 });
    if (c.hair === "short") head += P([[-110, -600], [-96, -650], [-50, -680], [0, -688], [50, -680], [96, -650], [110, -600], [70, -630], [0, -642], [-70, -630]], 0, 0, 0, 0, hc, { seed: 62 });
    if (c.hair === "side") head += P("blob", -122, -612, 44, 70, hc, { seed: 63 }) + P("blob", 78, -612, 44, 70, hc, { seed: 64 });
    // eyes (open / closed), brows, nose
    var eyes = "";
    [-40, 40].forEach(function (x, k) {
      eyes += paperMk("ellipse", 42, 50, "#FDFBF6", { x: x - 21, y: -598, seed: 70 + k, sh: 1.5, tex: false });
      eyes += '<circle class="pp-pupil" cx="' + x + '" cy="-570" r="11" fill="#1A1412"/><circle cx="' + (x - 4) + '" cy="-575" r="3.5" fill="#fff"/>';
    });
    var closed = '<path d="M-58 -572 Q-40 -560 -22 -572 M22 -572 Q40 -560 58 -572" fill="none" stroke="#2A1A14" stroke-width="7" stroke-linecap="round"/>';
    head += G("e-open", eyes) + G("e-closed", closed, ' display="none"');
    head += P("rect", -60, -626, 40, 10, c.hair === "side" ? "#9A948A" : hc === "#E2DDD3" ? "#9A948A" : hc, { r: -6, sh: 1, seed: 74 }) + P("rect", 20, -626, 40, 10, c.hair === "side" ? "#9A948A" : hc, { r: 6, sh: 1, seed: 75 });
    head += P("ellipse", -13, -552, 26, 30, sk, { sh: 2, shA: 0.3, seed: 76 });
    if (c.glasses) head += ring(-40, -572, 32, 32, 6, C.ink) + ring(40, -572, 32, 32, 6, C.ink) + lineMk(-10, -574, 10, -574, C.ink, 5);
    if (c.beard) head += P([[-104, -560], [-80, -500], [-40, -462], [0, -452], [40, -462], [80, -500], [104, -560], [74, -510], [34, -482], [0, -478], [-34, -482], [-74, -510]], 0, 0, 0, 0, c.hairCol, { seed: 77 });
    head += G("j-mouth", mouthSet(0, -500, 1));
    if (c.moustache) head += P([[-48, -520], [-20, -534], [0, -526], [20, -534], [48, -520], [30, -512], [0, -518], [-30, -512]], 0, 0, 0, 0, "#E8E3DA", { seed: 78, sh: 2 });
    if (c.hat === "cap") head += P([[-118, -620], [-104, -680], [-40, -712], [40, -712], [104, -680], [118, -620]], 0, 0, 0, 0, c.hatCol, { seed: 79 }) + P("round", -40, -632, 186, 30, "#6E5E44", { radius: 0.5, seed: 80 });
    if (c.hat === "chef") head += P("cloud", -110, -840, 220, 170, C.white, { seed: 81 }) + P("rect", -96, -700, 192, 60, C.white, { seed: 82, inner: stitchMk(0, 46, 192, 46, "rgba(0,0,0,0.15)") });
    var arm = function (side) {
      var sx = side * 82, sy = -432;
      var sleeve = c.outfit === "dress" ? c.skin : c.outfit === "labcoat" || c.outfit === "chef" ? top : top;
      var fore = c.outfit === "dress" ? c.skin : sleeve;
      return G("j-arm" + (side < 0 ? "L" : "R"),
        P("round", sx - 20, sy - 14, 40, 132, sleeve, { radius: 0.5, seed: 90 + side }) +
        G("j-fore" + (side < 0 ? "L" : "R"),
          P("round", sx - 18, sy + 96, 36, 112, fore, { radius: 0.5, seed: 92 + side }) +
          P("circle", sx - 24, sy + 186, 48, 48, c.skin, { seed: 94 + side }) +
          pinMk(sx, sy + 108, 6)) +
        pinMk(sx, sy, 7));
    };
    var upper = G("j-torso", torso) + G("j-head", head + pinMk(0, -452, 6)) + arm(-1) + arm(1);
    return { w: 440, h: 900, x0: -220, y0: -860, mk: G("j-upper", upper) + "" , joints: "human", legsFirst: true };
  }
  function dogMk(c, cat) {
    var s = "", i;
    var col = c.col, col2 = c.col2;
    // tail (pivot -120,-190)
    s += G("j-tail", cat
      ? P([[-120, -190], [-150, -260], [-176, -330], [-160, -350], [-140, -330], [-120, -270], [-104, -196]], 0, 0, 0, 0, col, { seed: 201 })
      : P("leaf", -210, -230, 110, 40, col, { r: 30, seed: 201 }));
    function leg(x, back) { return G("j-leg" + (back ? "B" : "F") + (x < 0 ? "1" : "2"), P("round", x - 20, -150, 40, 150, back ? (cat ? "#7A7F86" : "#C48E4E") : col, { radius: 0.45, seed: 210 + x }) + P("ellipse", x - 26, -20, 54, 24, cat ? col2 : col, { seed: 220 + x }) + pinMk(x, -136, 5)); }
    s += leg(-80, true) + leg(64, true);
    s += P("ellipse", -150, -250, 290, 150, col, { seed: 230, inner: cat ? '<path d="M70 20 l10 40 M110 10 l8 40 M150 10 l6 40 M190 18 l-2 40" stroke="#6E737A" stroke-width="12" stroke-linecap="round"/>' : P("blob", 150, 30, 80, 60, col2, { sh: false, seed: 231 }) });
    s += leg(-100, false) + leg(44, false);
    // head (pivot 80,-230)
    var head = "";
    if (cat) head += P("tri", 54, -390, 50, 60, col, { r: -12, seed: 240 }) + P("tri", 128, -392, 50, 60, col, { r: 14, seed: 241 }) + P("tri", 66, -372, 26, 34, "#F2A7B4", { r: -12, seed: 242, sh: 1 }) + P("tri", 140, -374, 26, 34, "#F2A7B4", { r: 14, seed: 243, sh: 1 });
    head += P("circle", 40, -380, 160, 150, col, { seed: 244 });
    head += G("j-jaw", P("ellipse", 120, -276, 70, 34, cat ? col2 : "#C48E4E", { seed: 245, inner: P("ellipse", 16, 6, 40, 16, "#B2443E", { sh: false, tex: false }) }), "");
    head += P("ellipse", 112, -312, 92, 60, col2, { seed: 246 });
    head += P("ellipse", 176, -322, 30, 22, "#2A1D18", { seed: 247, sh: 1.5 });
    head += '<path d="M190 -300 q-10 10 -26 6" fill="none" stroke="#2A1D18" stroke-width="5" stroke-linecap="round"/>';
    if (cat) head += lineMk(150, -298, 230, -310, "#fff", 3) + lineMk(150, -292, 232, -286, "#fff", 3) + lineMk(110, -298, 40, -310, "#fff", 3);
    head += G("e-open", googlyMk(108, -336, 20, 6, 2) + googlyMk(156, -342, 17, 5, 2));
    head += G("e-closed", '<path d="M88 -336 q20 12 40 0 M140 -342 q16 10 32 0" fill="none" stroke="#2A1D18" stroke-width="6" stroke-linecap="round"/>', ' display="none"');
    if (!cat) head += G("j-ear", P("leaf", 22, -380, 120, 56, c.ear, { r: 70, seed: 248 }) + pinMk(70, -360, 5));
    s += G("j-head", head + pinMk(80, -258, 6));
    return { w: 480, h: 460, x0: -240, y0: -440, mk: s, joints: "quad" };
  }
  function owlMk(c) {
    var s = "";
    s += P("ellipse", -40, -26, 34, 26, C.orange, { seed: 301 }) + P("ellipse", 6, -26, 34, 26, C.orange, { seed: 302 });
    s += G("j-wingL", P("leaf", -150, -260, 70, 170, "#7D522C", { seed: 303, r: 12 }) + pinMk(-100, -230, 6));
    s += G("j-wingR", P("leaf", 80, -260, 70, 170, "#7D522C", { seed: 304, r: -12 }) + pinMk(100, -230, 6));
    var body = P("ellipse", -110, -330, 220, 316, c.col, { seed: 305, inner: P("ellipse", 46, 120, 128, 180, c.col2, { sh: 1.5, seed: 306 }) });
    for (var i = 0; i < 6; i++) body += '<path d="M' + (-40 + (i % 3) * 30) + " " + (-180 + Math.floor(i / 3) * 40) + ' q12 14 24 0" fill="none" stroke="#B28A58" stroke-width="5" stroke-linecap="round"/>';
    s += body;
    var head = P("tri", -96, -380, 46, 60, "#7D522C", { seed: 307, r: -18 }) + P("tri", 50, -380, 46, 60, "#7D522C", { seed: 308, r: 18 });
    head += P("circle", -88, -310, 80, 80, c.col2, { seed: 309, sh: 1.5 }) + P("circle", 8, -310, 80, 80, c.col2, { seed: 310, sh: 1.5 });
    head += G("e-open", googlyMk(-48, -270, 30, 4, 4) + googlyMk(48, -270, 30, -4, 4));
    head += G("e-closed", '<path d="M-70 -268 q22 14 44 0 M26 -268 q22 14 44 0" fill="none" stroke="#2A1D18" stroke-width="7" stroke-linecap="round"/>', ' display="none"');
    head += G("m-rest", P("tri", -14, -246, 28, 34, C.orange, { r: 180, seed: 311 }));
    head += G("m-open", P("tri", -14, -258, 28, 26, C.orange, { r: 180, seed: 312 }) + P("tri", -12, -222, 24, 20, "#D96A1E", { seed: 313 }), ' display="none"');
    s += G("j-head", head);
    return { w: 420, h: 440, x0: -210, y0: -420, mk: s, joints: "owl" };
  }

  var REST = { ar: -10, fr: -6, al: 10, fl: 6, head: 0, hy: 0, lean: 0, bob: 0 };
  var GESTURES = {
    wave: { dur: 1.6, keys: [[0, {}], [0.16, { ar: -150, fr: -22 }], [0.32, { ar: -150, fr: 22 }], [0.48, { ar: -150, fr: -22 }], [0.64, { ar: -150, fr: 22 }], [0.8, { ar: -150, fr: -10 }], [1, {}]] },
    point: { dur: 1.8, keys: [[0, {}], [0.18, { ar: -92, fr: -4, head: 5, lean: 3 }], [0.85, { ar: -92, fr: -4, head: 5, lean: 3 }], [1, {}]] },
    cheer: { dur: 1.4, keys: [[0, {}], [0.2, { ar: -160, fr: -15, al: 160, fl: 15, bob: -22 }], [0.4, { ar: -148, fr: 5, al: 148, fl: -5, bob: 0 }], [0.6, { ar: -165, fr: -15, al: 165, fl: 15, bob: -22 }], [0.8, { ar: -148, al: 148, bob: 0 }], [1, {}]] },
    shrug: { dur: 1.5, keys: [[0, {}], [0.25, { ar: -45, fr: -85, al: 45, fl: 85, head: -8, bob: -6 }], [0.8, { ar: -45, fr: -85, al: 45, fl: 85, head: -8, bob: -6 }], [1, {}]] },
    think: { dur: 2.2, keys: [[0, {}], [0.25, { ar: -28, fr: -142, head: 8 }], [0.85, { ar: -28, fr: -142, head: 8 }], [1, {}]] },
    present: { dur: 1.6, keys: [[0, {}], [0.25, { ar: -72, fr: -28, al: 72, fl: 28, bob: -6 }], [0.85, { ar: -72, fr: -28, al: 72, fl: 28 }], [1, {}]] },
    nod: { dur: 1, keys: [[0, {}], [0.2, { hy: 14, head: 2 }], [0.4, {}], [0.6, { hy: 14, head: -2 }], [0.8, {}], [1, {}]] },
    shock: { dur: 1.4, keys: [[0, {}], [0.15, { ar: -120, fr: -40, al: 120, fl: 40, bob: -16, hy: -10 }], [0.8, { ar: -115, fr: -40, al: 115, fl: 40 }], [1, {}]] },
  };
  S.gestures = Object.keys(GESTURES);

  function lerpPose(a, b, p) { var o = {}; for (var k in REST) o[k] = lerp(a[k] != null ? a[k] : REST[k], b[k] != null ? b[k] : REST[k], p); return o; }
  function gesturePose(g, p) {
    var ks = g.keys;
    for (var i = 1; i < ks.length; i++) {
      if (p <= ks[i][0]) {
        var q = (p - ks[i - 1][0]) / Math.max(1e-6, ks[i][0] - ks[i - 1][0]);
        q = q * q * (3 - 2 * q);
        return lerpPose(ks[i - 1][1], ks[i][1], q);
      }
    }
    return lerpPose({}, {}, 0);
  }

  /** Spoken word index at stepped time ts (−1 when silent). */
  function wordAt(ts) {
    var W = V.words || [];
    for (var i = 0; i < W.length; i++) {
      if (ts >= W[i].start - 0.03 && ts < W[i].end) return i;
      if (W[i].start > ts) break;
    }
    return -1;
  }
  S.wordAt = wordAt;

  /**
   * A recurring cast puppet. name: mo | pip | otto | ada | leo (people), biscuit (dog), mittens (cat), hoot (owl).
   * opts: { parent, x, y (px; feet position), height (px for a full adult; kids/animals are relatively smaller),
   *         face: 1 (looks right) | -1 (mirrored, looks left), z }
   * Returns a puppet with .piece and methods talk / gesture / hopTo / enter / exit / look / place.
   */
  S.puppet = function (name, opts) {
    opts = opts || {};
    var key = str(name).toLowerCase().replace(/[^a-z]/g, "");
    if (key === "dradav" || key === "drada") key = "ada";
    var c = CAST[key] || CAST.mo;
    var def = c.kind === "human" ? humanMk(c) : c.kind === "owl" ? owlMk(c) : dogMk(c, c.kind === "cat");
    var Hpx = opts.height || u(520);
    var k = (Hpx / 690) * (c.scale || 1) * (c.kind === "human" ? 1 : 0.9);
    var svg = svgBox(def.w, def.h, { scale: k });
    svg.setAttribute("viewBox", def.x0 + " " + def.y0 + " " + def.w + " " + def.h);
    svg.innerHTML = c.kind === "human" ? humanLegs(c) + def.mk : def.mk;
    var face = opts.face === -1 ? -1 : 1;
    var wrap = el("div.pp-puppet");
    wrap.appendChild(svg);
    if (face < 0) svg.style.transform = "scaleX(-1)";
    var pc = makePiece(wrap, { parent: opts.parent || world().front, x: opts.x != null ? opts.x : V.width / 2, y: opts.y != null ? opts.y : V.height * 0.85, w: def.w * k, h: def.h * k, ax: -def.x0 / def.w, ay: -def.y0 / def.h, boil: 0.5, z: opts.z, shadow: 1.1 });
    pc.h = (c.kind === "human" ? 690 : 420) * k;
    var J = {};
    ["j-legL", "j-legR", "j-upper", "j-torso", "j-head", "j-armL", "j-armR", "j-foreL", "j-foreR", "j-tail", "j-jaw", "j-ear", "j-wingL", "j-wingR", "j-legB1", "j-legB2", "j-legF1", "j-legF2"].forEach(function (cls) { J[cls] = svg.querySelector("." + cls); });
    var mouths = {};
    ["rest", "small", "open", "wide", "o"].forEach(function (m) { mouths[m] = svg.querySelector(".m-" + m); });
    var eOpen = svg.querySelector(".e-open"), eClosed = svg.querySelector(".e-closed");
    var pupils = [].slice.call(svg.querySelectorAll(".pp-pupil"));
    var pupil0 = pupils.map(function (p) { return [Number(p.getAttribute("cx")), Number(p.getAttribute("cy"))]; });
    var talkRanges = [], gestures = [], looks = [];
    var seed = hs(key) + (opts.seed || 0) + world().pieces.length * 3;
    var blinkSeed = seed % 97;
    var last = {};
    function setT(node, val, id) { if (node && last[id] !== val) { node.setAttribute("transform", val); last[id] = val; } }
    function rot(a, x, y) { return "rotate(" + a.toFixed(2) + " " + x + " " + y + ")"; }
    function show(node, on, id) { if (node && last[id] !== on) { node.setAttribute("display", on ? "inline" : "none"); last[id] = on; } }

    var api = {
      name: key, info: c, piece: pc, el: pc.el, svg: svg,
      /** Talk (mouth replacement synced to V.words) between from and to (default: whole scene). */
      talk: function (from, to) { talkRanges.push([from != null ? from : -1, to != null ? to : 1e9]); return api; },
      gesture: function (at, kind, dur) { var g = GESTURES[kind] || GESTURES.point; gestures.push({ at: num(at, 0), dur: dur || g.dur, g: g }); return api; },
      /** Look direction for the eyes: -1 (left) … 1 (right), 0 = at camera. */
      look: function (at, dir) { looks.push({ at: num(at, 0), d: clamp(num(dir, 0), -1, 1) }); looks.sort(function (a, b) { return a.at - b.at; }); return api; },
      place: function (at, how, o) { pc.place(at, how, o); return api; },
      /** Hop (hand-moved, no walk cycle) to absolute x (and optional y) px. */
      hopTo: function (at, x, y, o) {
        o = o || {};
        var cur = pc.poseAt(at);
        var dx = x - (pc.anchorX + cur.x), dy = y != null ? y - (pc.anchorY + cur.y) : 0;
        var n = o.hops || Math.max(1, Math.round(Math.abs(dx) / u(170)));
        pc.hop(at, dx, dy, { hops: n, height: o.height || u(70), dur: o.dur || 0.45 });
        return api;
      },
      /** Enter by hopping in from "left" | "right", or "drop" | "pop" | "slide-up". */
      enter: function (at, from, o) {
        o = o || {};
        at = num(at, 0);
        if (from === "drop" || from === "pop" || from === "slide-up" || from === "hand") { pc.place(at, from); return api; }
        var dir = from === "right" ? 1 : -1;
        var dist = (dir > 0 ? V.width - pc.anchorX : pc.anchorX) + u(260);
        var n = o.hops || 3;
        pc._add({ at: at, dur: 0.42 * n, from: { x: dir * dist }, to: {}, ease: "linear", lift: 0.7, enter: true, arc: u(80), hops: n });
        return api;
      },
      exit: function (at, to, o) {
        o = o || {};
        var dir = to === "left" ? -1 : 1;
        var cur = pc.poseAt(at);
        var dist = (dir > 0 ? V.width - pc.anchorX : pc.anchorX) + u(300);
        var n = o.hops || 3;
        pc._add({ at: at, dur: 0.42 * n, to: { x: cur.x + dir * dist }, ease: "linear", lift: 0.7, arc: u(80), hops: n });
        return api;
      },
    };

    world().anims.push(function (ts, si) {
      // talking?
      var talking = false, wi = -1;
      if (talkRanges.length) {
        wi = wordAt(ts);
        if (wi >= 0) for (var i = 0; i < talkRanges.length; i++) if (ts >= talkRanges[i][0] && ts <= talkRanges[i][1]) talking = true;
      }
      // gesture pose
      var pose = lerpPose({}, {}, 0);
      for (var g = 0; g < gestures.length; g++) {
        var G0 = gestures[g];
        if (ts >= G0.at && ts <= G0.at + G0.dur) pose = gesturePose(G0.g, (ts - G0.at) / G0.dur);
      }
      // idle sway, in steps
      var sw = h01(seed, Math.floor(si / 3));
      pose.head += (sw - 0.5) * 3 + (talking ? (h01(seed + 5, si) - 0.5) * 7 : 0);
      pose.ar += (h01(seed + 9, Math.floor(si / 4)) - 0.5) * 4;
      pose.al += (h01(seed + 11, Math.floor(si / 4)) - 0.5) * 4;
      // airborne during hops: spread legs, arms up a little
      var pr = evalPose(pc, ts);
      var air = pr.moving ? clamp(pr.lift, 0, 1) : 0;
      if (c.kind === "human") {
        setT(J["j-legL"], rot(8 * air + (h01(seed + 2, si) - 0.5) * 1.2, -32, -240), "lL");
        setT(J["j-legR"], rot(-8 * air + (h01(seed + 3, si) - 0.5) * 1.2, 32, -240), "lR");
        setT(J["j-upper"], "translate(0 " + f1(pose.bob) + ") " + rot(pose.lean, 0, -240), "up");
        setT(J["j-head"], "translate(0 " + f1(pose.hy) + ") " + rot(pose.head, 0, -452), "hd");
        setT(J["j-armR"], rot(pose.ar - 18 * air, 82, -432), "aR");
        setT(J["j-armL"], rot(pose.al + 18 * air, -82, -432), "aL");
        setT(J["j-foreR"], rot(pose.fr, 82, -324), "fR");
        setT(J["j-foreL"], rot(pose.fl, -82, -324), "fL");
      } else if (c.kind === "owl") {
        var flap = air > 0.05 || pose.ar < -60 ? Math.sin(si * 2.2) * 30 : (h01(seed, Math.floor(si / 3)) - 0.5) * 6;
        setT(J["j-wingL"], rot(-flap - (pose.al - 10) * 0.4, -100, -230), "wL");
        setT(J["j-wingR"], rot(flap + (pose.ar + 10) * -0.4 * -1, 100, -230), "wR");
        setT(J["j-head"], rot(pose.head * 1.5, 0, -200), "hd");
      } else {
        var wagFast = talking || pose.ar < -60;
        setT(J["j-tail"], rot((wagFast ? (si % 2 ? 18 : -14) : (h01(seed, Math.floor(si / 2)) - 0.5) * 16), -120, -200), "tl");
        setT(J["j-head"], rot(pose.head * 1.4 - (pose.ar < -60 ? 8 : 0), 80, -258), "hd");
        setT(J["j-legF1"], rot(14 * air, -100, -136), "f1");
        setT(J["j-legF2"], rot(18 * air, 44, -136), "f2");
        setT(J["j-legB1"], rot(-16 * air, -80, -136), "b1");
        setT(J["j-legB2"], rot(-12 * air, 64, -136), "b2");
        if (J["j-ear"]) setT(J["j-ear"], rot((h01(seed + 7, si) - 0.5) * 10 - 20 * air, 70, -360), "er");
      }
      // mouth replacement
      var m = "rest";
      if (talking) {
        var r = h01(seed + wi * 1.7, si);
        var W0 = V.words[wi];
        var nearEnd = ts > W0.end - 0.07;
        m = nearEnd ? "small" : r < 0.34 ? "open" : r < 0.6 ? "wide" : r < 0.8 ? "o" : "small";
      }
      if (c.kind === "human") for (var mk in mouths) show(mouths[mk], mk === m, "m" + mk);
      else if (c.kind === "owl") {
        show(svg.querySelector(".m-rest"), m === "rest" || m === "small", "mr");
        show(svg.querySelector(".m-open"), !(m === "rest" || m === "small"), "mo");
      } else setT(J["j-jaw"], rot(m === "rest" ? 0 : m === "small" ? 8 : m === "o" ? 14 : 22, 126, -270), "jw");
      // blink: one or two steps every few seconds (seeded)
      var period = 3.1 + (blinkSeed % 10) * 0.13;
      var phase = (ts + (blinkSeed % 7) * 0.37) % period;
      var blink = phase < 0.15 || (Math.floor((ts + (blinkSeed % 7) * 0.37) / period) % 4 === 2 && phase > 0.35 && phase < 0.45);
      show(eOpen, !blink, "eo");
      show(eClosed, blink, "ec");
      // pupils: look direction + tiny boil
      var ld = 0;
      for (var li = 0; li < looks.length; li++) if (ts >= looks[li].at) ld = looks[li].d;
      for (var pi = 0; pi < pupils.length; pi++) {
        var px = pupil0[pi][0] + ld * 6 * face + (h01(seed + pi, si) - 0.5) * 2.4, py = pupil0[pi][1] + (h01(seed + pi + 9, si) - 0.5) * 2.4;
        var key2 = "p" + pi, val = f1(px) + "," + f1(py);
        if (last[key2] !== val) { pupils[pi].setAttribute("cx", f1(px)); pupils[pi].setAttribute("cy", f1(py)); last[key2] = val; }
      }
    });
    return api;
  };
  function humanLegs(c) {
    function leg(side) {
      var x = side * 32;
      return G("j-leg" + (side < 0 ? "L" : "R"),
        P("rect", x - 22, -258, 44, 228, c.legs, { seed: 11 + side }) +
        P("round", x - 32 + side * 12, -44, 64, 42, c.shoes, { radius: 0.5, seed: 13 + side }) +
        pinMk(x, -244, 6));
    }
    return leg(-1) + leg(1);
  }

  // ───────────────────────── backdrops & diorama sets ─────────────────────────
  function layerSvg(parent, depth) {
    var s = el("svg.pp-lsvg", { parent: parent, viewBox: "0 0 " + f1(DW) + " " + f1(DH), preserveAspectRatio: "none" });
    if (depth) {
      var off = u(2 + depth * 3), bl = u(3 + depth * 5);
      s.style.filter = "drop-shadow(" + f1(off * 0.5) + "px " + f1(off) + "px " + f1(bl) + "px rgba(42,26,10," + (0.2 + depth * 0.04).toFixed(2) + "))";
    }
    return s;
  }
  function q(svg, cls) { return svg.querySelector("." + cls); }
  function sheetBg(fill, o) {
    o = o || {};
    return '<rect x="-20" y="-20" width="' + f1(DW + 40) + '" height="' + f1(DH + 40) + '" fill="' + fill + '"/>' +
      (o.pattern ? '<rect x="-20" y="-20" width="' + f1(DW + 40) + '" height="' + f1(DH + 40) + '" fill="url(#pp' + o.pattern + ')"' + (o.patOp ? ' opacity="' + o.patOp + '"' : "") + "/>" : "") +
      '<rect x="-20" y="-20" width="' + f1(DW + 40) + '" height="' + f1(DH + 40) + '" fill="url(#pp' + (o.tex || "Tex") + ')"/>';
  }
  function creases(n, seed) {
    var rnd = R(seed), s = "";
    for (var i = 0; i < n; i++) {
      var vertical = i % 2 === 0;
      var p = (0.25 + rnd() * 0.5);
      if (vertical) s += lineMk(DW * p, -10, DW * p + (rnd() - 0.5) * 40, DH + 10, "rgba(255,255,255,0.16)", 3) + lineMk(DW * p + 3, -10, DW * p + 3 + (rnd() - 0.5) * 40, DH + 10, "rgba(60,36,12,0.1)", 2);
      else s += lineMk(-10, DH * p, DW + 10, DH * p + (rnd() - 0.5) * 40, "rgba(255,255,255,0.16)", 3) + lineMk(-10, DH * p + 3, DW + 10, DH * p + 3 + (rnd() - 0.5) * 40, "rgba(60,36,12,0.1)", 2);
    }
    return s;
  }
  /**
   * Plain craft backdrops: "kraft" | "cardboard" | "cork" | "felt" | "mat" (green cutting mat) | "night" | "paper:<css colour>".
   */
  function backdrop(w, kind) {
    var s = layerSvg(w.bg, 0);
    var mk = "";
    kind = kind || "kraft";
    if (kind === "cardboard") {
      mk = sheetBg("#C69C64", { tex: "Card" });
      for (var i = 0; i < DW / 16; i++) mk += '<rect x="' + i * 16 + '" y="-20" width="7" height="' + f1(DH + 40) + '" fill="rgba(255,240,210,0.06)"/>';
      mk += creases(2, 5);
    } else if (kind === "cork") mk = sheetBg(C.cork, { tex: "Cork" }) + sheetBg2("Tex", 0.6);
    else if (kind === "felt") mk = sheetBg(C.felt, { tex: "Felt" });
    else if (kind === "mat") {
      mk = sheetBg("#3E7D62", { tex: "Tex" });
      var g = 36;
      for (var x = 0; x < DW; x += g) mk += lineMk(x, 0, x, DH, x % (g * 5) === 0 ? "rgba(255,255,255,0.32)" : "rgba(255,255,255,0.12)", x % (g * 5) === 0 ? 2.2 : 1.2);
      for (var y = 0; y < DH; y += g) mk += lineMk(0, y, DW, y, y % (g * 5) === 0 ? "rgba(255,255,255,0.32)" : "rgba(255,255,255,0.12)", y % (g * 5) === 0 ? 2.2 : 1.2);
      mk += lineMk(0, DH * 0.5 - 30, DW, DH * 0.5 - 30 + DW * 0.27, "rgba(242,194,48,0.35)", 2.5);
    } else if (kind === "night") mk = sheetBg(C.night) + starField(60, 3);
    else if (kind.indexOf("paper:") === 0) mk = sheetBg(kind.slice(6)) + creases(2, 9);
    else mk = sheetBg(C.kraft) + creases(3, 2);
    s.innerHTML = mk;
    return s;
  }
  function sheetBg2(tex, op) { return '<rect x="-20" y="-20" width="' + f1(DW + 40) + '" height="' + f1(DH + 40) + '" fill="url(#pp' + tex + ')" opacity="' + op + '"/>'; }
  function starField(n, seed) {
    var rnd = R(seed), s = "";
    for (var i = 0; i < n; i++) {
      var x = rnd() * DW, y = rnd() * DH * 0.85, r = 1.5 + rnd() * 3;
      s += '<circle cx="' + f1(x) + '" cy="' + f1(y) + '" r="' + f1(r) + '" fill="#FFF6D8" opacity="' + (0.4 + rnd() * 0.5).toFixed(2) + '"/>';
    }
    return s;
  }
  S.backdrop = function (kind) { return backdrop(world(), kind); };

  // spots: evenly spread x positions on the ground for props
  function groundY() { return DH * (PORT ? 0.8 : 0.84); }
  function spread(n, i, m) { m = m == null ? 0.12 : m; return DW * (m + (1 - 2 * m) * (n <= 1 ? 0.5 : i / (n - 1))); }

  function skyBits(w, s, o) {
    o = o || {};
    var mk = "";
    var sunX = o.sunX != null ? o.sunX : DW * (PORT ? 0.78 : 0.84), sunY = o.sunY != null ? o.sunY : DH * (PORT ? 0.1 : 0.16);
    var sr = PORT ? 110 : 120;
    if (o.sun !== false) mk += '<g class="a-sun" transform="translate(' + f1(sunX) + " " + f1(sunY) + ')">' + '<g class="a-rays">' + paperMk("burst", sr * 2, sr * 2, C.orange, { x: -sr, y: -sr, points: 12, seed: 501 }) + "</g>" + paperMk("circle", sr * 1.3, sr * 1.3, C.yellow, { x: -sr * 0.65, y: -sr * 0.65, seed: 502 }) + "</g>";
    var clouds = [];
    var nC = o.clouds != null ? o.clouds : 3;
    for (var i = 0; i < nC; i++) {
      var cw = 240 + (i % 2) * 80, cy = DH * (0.08 + i * 0.09) + (PORT ? 40 : 0);
      mk += '<g class="a-cloud' + i + '">' + paperMk("cloud", cw, cw * 0.55, C.white, { x: 0, y: cy, seed: 510 + i, sh: 2 }) + "</g>";
      clouds.push({ i: i, w: cw, sp: 9 + i * 5, x0: DW * (0.1 + i * 0.33) });
    }
    return {
      mk: mk, init: function (svg) {
        var sun = q(svg, "a-rays"), cl = clouds.map(function (c) { return { c: c, g: q(svg, "a-cloud" + c.i) }; });
        w.anims.push(function (ts) {
          if (sun) sun.setAttribute("transform", "rotate(" + (ts * 8).toFixed(1) + ")");
          cl.forEach(function (o2) {
            var span = DW + o2.c.w + 200;
            var x = ((o2.c.x0 + ts * o2.c.sp) % span) - o2.c.w - 100;
            o2.g.setAttribute("transform", "translate(" + f1(x) + " 0)");
          });
        });
      },
    };
  }
  function grassStrip(y, h, col, seed) {
    return paperMk("wave", DW + 80, h, col, { x: -40, y: y, waves: Math.round(DW / 90), amp: 9, edge: ["torn"], seed: seed, sh: 4 });
  }
  function bush(x, y, s, col, seed) { return paperMk("cloud", 180 * s, 110 * s, col || C.leaf, { x: x - 90 * s, y: y - 100 * s, seed: seed, sh: 3 }); }
  function propAt(name, x, yBottom, size, o) {
    var d = propDef(name, o);
    var k = size / d.h;
    return '<g transform="translate(' + f1(x - (d.w * k) / 2) + " " + f1(yBottom - d.h * k) + ") scale(" + k.toFixed(4) + ')">' + d.mk + "</g>";
  }

  var SETS = {};
  SETS.town = function (w) {
    var gy = groundY();
    var bg = layerSvg(w.bg, 0), back = layerSvg(w.back, 1), mid = layerSvg(w.mid, 2), front = layerSvg(w.front, 3);
    var sky = skyBits(w, bg);
    bg.innerHTML = sheetBg("#A8D4EA") + sky.mk;
    sky.init(bg);
    var mk = "", rnd = R(601), x = -40;
    while (x < DW + 40) {
      var bw = 90 + rnd() * 90, bh = 180 + rnd() * 260;
      mk += paperMk("rect", bw, bh, rnd() < 0.5 ? "#8CAEC2" : "#7C9DB3", { x: x, y: gy - 120 - bh, seed: 610 + x, sh: 2, inner: (function () { var s2 = ""; for (var r = 0; r < bh / 50 - 1; r++) for (var c = 0; c < bw / 40 - 1; c++) if (rnd() < 0.55) s2 += '<rect x="' + (14 + c * 40) + '" y="' + (18 + r * 50) + '" width="16" height="22" fill="rgba(255,248,220,0.55)"/>'; return s2; })() });
      x += bw + 6;
    }
    back.innerHTML = mk;
    var cols = [C.yellow, "#F7B9C8", C.skyLt, "#F8C99A", C.lime, C.lilac];
    var n = Math.max(2, Math.round(DW / 420));
    var m2 = "";
    for (var i = 0; i < n; i++) {
      var hx = spread(n, i, PORT ? 0.18 : 0.1);
      m2 += propAt("house", hx, gy - 60, PORT ? 300 : 330, { color: cols[i % cols.length] });
      if (i < n - 1) m2 += propAt(i % 2 ? "pine" : "tree", (hx + spread(n, i + 1, PORT ? 0.18 : 0.1)) / 2, gy - 50, 260);
    }
    m2 += paperMk("rect", DW + 80, DH - gy + 80, "#7A7570", { x: -40, y: gy - 70, seed: 650, sh: 3, inner: (function () { var s3 = ""; for (var xx = 30; xx < DW + 80; xx += 140) s3 += '<rect x="' + xx + '" y="' + f1((DH - gy + 80) * 0.45) + '" width="70" height="12" fill="#F4EBD8" opacity="0.9"/>'; return s3; })() });
    mid.innerHTML = m2;
    front.innerHTML = grassStrip(DH - (PORT ? 90 : 70), 200, C.green, 660) + bush(DW * 0.04, DH - 40, 1.1, C.leaf, 661) + bush(DW * 0.97, DH - 30, 1.3, C.forest, 662);
    return { ground: gy * V.unit, name: "town" };
  };
  SETS.countryside = function (w) {
    var gy = groundY();
    var bg = layerSvg(w.bg, 0), back = layerSvg(w.back, 1), mid = layerSvg(w.mid, 2), front = layerSvg(w.front, 3);
    var sky = skyBits(w, bg, { sunX: DW * 0.2 });
    bg.innerHTML = sheetBg("#BFE0EC") + sky.mk;
    sky.init(bg);
    back.innerHTML = paperMk("ridge", DW + 200, 420, "#8FA9B8", { x: -100, y: gy - 560, n: Math.round(DW / 160), seed: 701, edge: "cut" }) +
      paperMk("hill", DW * 0.8, 300, "#8DBF6A", { x: -DW * 0.15, y: gy - 330, seed: 702, edge: "torn", back: "#E8F0D0" }) +
      paperMk("hill", DW * 0.9, 260, "#79B05A", { x: DW * 0.35, y: gy - 280, seed: 703, edge: "torn", back: "#E8F0D0" });
    var m = paperMk("hill", DW * 1.3, 240, C.green, { x: -DW * 0.15, y: gy - 170, seed: 704, edge: "torn", back: "#E8F0D0" });
    var bx = DW * (PORT ? 0.62 : 0.72);
    m += '<g transform="translate(' + f1(bx) + " " + f1(gy - 330) + ')">' + paperMk("rect", 220, 170, C.red, { y: 90, seed: 705, inner: paperMk("rect", 70, 100, "#8E2A1A", { x: 75, y: 70, seed: 706, sh: 1, inner: lineMk(0, 0, 70, 100, C.white, 6) + lineMk(70, 0, 0, 100, C.white, 6) }) }) + paperMk("tri", 260, 110, "#5A3A2A", { x: -20, y: 0, seed: 707 }) + "</g>";
    var fx = -20;
    while (fx < DW + 20) { m += paperMk("rect", 16, 80, C.woodLt, { x: fx, y: gy - 40, seed: 710 + fx, sh: 2 }); fx += 60; }
    m += paperMk("rect", DW + 60, 14, C.woodLt, { x: -30, y: gy - 20, seed: 720, sh: 2 }) + paperMk("rect", DW + 60, 14, C.woodLt, { x: -30, y: gy + 10, seed: 721, sh: 2 });
    m += propAt("tree", DW * (PORT ? 0.18 : 0.1), gy - 30, 300);
    // sheep
    var sx = DW * (PORT ? 0.3 : 0.42);
    m += '<g class="a-sheep" transform="translate(' + f1(sx) + " " + f1(gy - 150) + ')">' + paperMk("cloud", 150, 96, C.white, { seed: 730 }) + paperMk("ellipse", 46, 56, C.ink, { x: 126, y: 18, seed: 731, inner: '<circle cx="30" cy="20" r="5" fill="#fff"/>' }) + paperMk("rect", 12, 40, C.ink, { x: 30, y: 82, seed: 732 }) + paperMk("rect", 12, 40, C.ink, { x: 100, y: 82, seed: 733 }) + "</g>";
    mid.innerHTML = m;
    var sheep = q(mid, "a-sheep");
    w.anims.push(function (ts, si) { var hop = Math.floor(ts / 2.4) % 3 === 1 && (ts % 2.4) < 0.4 ? -18 : 0; sheep.setAttribute("transform", "translate(" + f1(sx + Math.floor(ts / 2.4) * 6) + " " + f1(gy - 150 + hop) + ")"); });
    var f = grassStrip(DH - (PORT ? 100 : 80), 220, C.leaf, 740);
    for (var i = 0; i < 6; i++) f += propAt("flower", DW * (0.06 + i * 0.18), DH + 20, 120 + (i % 3) * 20);
    front.innerHTML = f;
    return { ground: gy * V.unit, name: "countryside" };
  };
  SETS.kitchen = function (w) {
    var gy = groundY();
    var bg = layerSvg(w.bg, 0), back = layerSvg(w.back, 1), mid = layerSvg(w.mid, 2), front = layerSvg(w.front, 3);
    bg.innerHTML = sheetBg("#F2E2C2", { pattern: "Stripe", patOp: 0.6 });
    var wx = DW * (PORT ? 0.5 : 0.5) - 180, wy = DH * (PORT ? 0.12 : 0.08);
    var b = paperMk("rect", 360, 300, C.white, { x: wx - 20, y: wy - 20, seed: 801, inner: paperMk("rect", 320, 260, "#A8D4EA", { x: 20, y: 20, seed: 802, sh: 1.5, inner: lineMk(160, 0, 160, 260, C.white, 12) + lineMk(0, 130, 320, 130, C.white, 12) + paperMk("cloud", 120, 60, C.white, { x: 30, y: 30, seed: 803, sh: 1 }) }) });
    b += paperMk([[0, 0], [90, 0], [60, 330], [0, 350]], 0, 0, C.red, { x: wx - 70, y: wy - 40, seed: 804, pattern: "dots" }) + paperMk([[0, 0], [90, 0], [90, 350], [30, 330]], 0, 0, C.red, { x: wx + 300, y: wy - 40, seed: 805, pattern: "dots" });
    b += paperMk("rect", DW * 0.3, 18, C.wood, { x: DW * 0.04, y: wy + 110, seed: 806 }) + paperMk("rect", DW * 0.3, 18, C.wood, { x: DW * 0.66, y: wy + 110, seed: 807 });
    var jars = ["#E8603C", "#F2C230", "#5E9E4A", "#3C6FB4"];
    for (var i = 0; i < 4; i++) {
      var jx = (i < 2 ? DW * 0.06 : DW * 0.68) + (i % 2) * 120 + 20;
      b += paperMk("round", 80, 100, "rgba(230,240,240,0.9)", { x: jx, y: wy + 12, seed: 810 + i, radius: 0.2, inner: paperMk("rect", 60, 54, jars[i], { x: 10, y: 38, seed: 820 + i, sh: false }) }) + paperMk("rect", 84, 18, C.brown, { x: jx - 2, y: wy + 2, seed: 830 + i });
    }
    b += propAt("clock", DW * (PORT ? 0.82 : 0.86), DH * (PORT ? 0.36 : 0.5), 150);
    back.innerHTML = b;
    var ct2 = gy - 300;
    var m = paperMk("rect", DW + 60, 40, C.woodLt, { x: -30, y: ct2, seed: 840 }) + paperMk("rect", DW + 60, 280, "#6FA3A0", { x: -30, y: ct2 + 36, seed: 841 });
    var nd = Math.max(3, Math.round(DW / 260));
    for (i = 0; i < nd; i++) { var dx = (DW / nd) * i + 20; m += paperMk("rect", DW / nd - 40, 220, "#7FB5B1", { x: dx, y: ct2 + 64, seed: 850 + i, sh: 2, inner: '<circle cx="' + f1((DW / nd - 40) / 2) + '" cy="28" r="9" fill="#E8B23A"/>' }); }
    m += propAt("cup", DW * 0.12, ct2 + 4, 120) + '<g class="a-pot">' + propAt("cake", DW * (PORT ? 0.82 : 0.88), ct2 + 4, 150) + "</g>";
    mid.innerHTML = m;
    var fl = paperMk("rect", DW + 60, DH - gy + 60, "#E9E0CE", { x: -30, y: gy - 20, seed: 860, pattern: "check" });
    front.innerHTML = fl;
    return { ground: gy * V.unit, name: "kitchen" };
  };
  SETS.classroom = function (w) {
    var gy = groundY();
    var bg = layerSvg(w.bg, 0), back = layerSvg(w.back, 1), mid = layerSvg(w.mid, 2), front = layerSvg(w.front, 3);
    bg.innerHTML = sheetBg("#E7DDB8") + paperMk("rect", DW + 40, 120, "#B9A27A", { x: -20, y: gy - 230, seed: 901, sh: 2 });
    var bw = Math.min(DW * 0.62, 900), bh = Math.min(DH * 0.38, 420), bx = (DW - bw) / 2, by = DH * (PORT ? 0.14 : 0.13);
    var chalk = '<g fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="5" stroke-linecap="round"><path d="M40 60 l30 -40 l30 40 M52 44 h36"/><path d="M130 20 v40 M130 20 q30 0 30 10 q0 10 -30 10 q34 0 34 10 q0 10 -34 10"/><path d="M220 24 q-30 -6 -30 16 q0 22 30 16"/>' +
      '<path d="M' + f1(bw - 220) + ' 60 h40 M' + f1(bw - 200) + ' 40 v40 M' + f1(bw - 150) + ' 60 h40 M' + f1(bw - 90) + ' 50 h30 M' + f1(bw - 90) + ' 70 h30"/><circle cx="' + f1(bw * 0.5) + '" cy="' + f1(bh * 0.6) + '" r="50"/><path d="M' + f1(bw * 0.5 - 70) + " " + f1(bh * 0.6) + " h140 M" + f1(bw * 0.5) + " " + f1(bh * 0.6 - 70) + ' v140"/></g>';
    var b = paperMk("rect", bw + 40, bh + 40, C.wood, { x: bx - 20, y: by - 20, seed: 902, inner: paperMk("rect", bw, bh, C.chalk, { x: 20, y: 20, seed: 903, sh: 1.5, inner: chalk }) });
    // bunting with letters on a string
    var nb = Math.max(5, Math.round(DW / 130)), letters = "ABCDEFGHIJKLMN";
    b += '<path d="M-10 ' + f1(by - 70) + " Q" + f1(DW / 2) + " " + f1(by - 10) + " " + f1(DW + 10) + " " + f1(by - 70) + '" fill="none" stroke="#6E5A40" stroke-width="3"/>';
    for (var i = 0; i < nb; i++) {
      var t = (i + 0.5) / nb, fx = -10 + t * (DW + 20), fy = (1 - t) * (1 - t) * (by - 70) + 2 * t * (1 - t) * (by - 10) + t * t * (by - 70);
      b += paperMk("tri", 70, 80, [C.red, C.yellow, C.teal, C.blue, C.orange][i % 5], { x: fx - 35, y: fy - 4, r: 180, seed: 910 + i, inner: svgText(35, 48, letters[i % letters.length], 36, C.white) });
    }
    back.innerHTML = b;
    var m = "";
    var dx = DW * (PORT ? 0.62 : 0.74);
    m += paperMk("rect", 330, 170, C.woodLt, { x: dx, y: gy - 190, seed: 920, inner: paperMk("rect", 330, 24, C.wood, { seed: 921, sh: 1.5 }) });
    m += propAt("book", dx + 70, gy - 190, 110, { color: C.red }) + propAt("apple", dx + 250, gy - 190, 80) + propAt("globe", dx + 170, gy - 190, 150);
    m += paperMk("rect", 140, 220, C.wood, { x: DW * 0.04, y: gy - 230, seed: 930, inner: paperMk("rect", 120, 14, C.brown, { x: 10, y: 100, seed: 931, sh: 1 }) + paperMk("rect", 22, 80, C.blue, { x: 16, y: 18, seed: 932 }) + paperMk("rect", 22, 70, C.red, { x: 42, y: 28, seed: 933 }) + paperMk("rect", 22, 84, C.yellow, { x: 68, y: 14, seed: 934 }) + paperMk("rect", 22, 74, C.green, { x: 20, y: 122, seed: 935 }) + paperMk("rect", 22, 80, C.purple, { x: 46, y: 116, seed: 936 }) });
    mid.innerHTML = m;
    var f = paperMk("rect", DW + 60, DH - gy + 60, C.woodLt, { x: -30, y: gy - 20, seed: 940, inner: (function () { var s2 = ""; for (var yy = 40; yy < DH - gy + 60; yy += 48) s2 += lineMk(0, yy, DW + 60, yy, "rgba(90,50,20,0.25)", 3); return s2; })() });
    front.innerHTML = f;
    return { ground: gy * V.unit, name: "classroom" };
  };
  SETS.ocean = function (w) {
    var gy = groundY();
    var bg = layerSvg(w.bg, 0), back = layerSvg(w.back, 1), mid = layerSvg(w.mid, 2), front = layerSvg(w.front, 3);
    var sky = skyBits(w, bg, { clouds: 2 });
    bg.innerHTML = sheetBg("#BFE3EE") + sky.mk;
    sky.init(bg);
    var hz = DH * (PORT ? 0.42 : 0.4);
    var waves = [
      { y: hz, c: "#5FA8C8", amp: 10, n: 7, cls: "a-w0", sp: 0.7 },
      { y: hz + (gy - hz) * 0.3, c: "#3F8DB8", amp: 14, n: 6, cls: "a-w1", sp: 1 },
      { y: hz + (gy - hz) * 0.6, c: "#2F6FA0", amp: 16, n: 5, cls: "a-w2", sp: 1.3 },
    ];
    var b = '<g class="a-boat">' + propAt("boat", DW * 0.7, hz + 30, 170) + "</g>";
    waves.forEach(function (wv, i) {
      b += '<g class="' + wv.cls + '">' + paperMk("wave", DW + 240, DH - wv.y + 40, wv.c, { x: -120, y: wv.y, waves: wv.n + Math.round(DW / 500), amp: wv.amp, seed: 1001 + i, sh: 3 }) + "</g>";
      if (i === 1) b += '<g class="a-fish">' + propAt("fish", 0, 0, 80) + "</g>";
    });
    back.innerHTML = b;
    var gs = waves.map(function (wv) { return q(back, wv.cls); });
    var boat = q(back, "a-boat"), fish = q(back, "a-fish");
    w.anims.push(function (ts, si) {
      gs.forEach(function (g, i) { g.setAttribute("transform", "translate(" + f1(Math.sin(ts * waves[i].sp + i) * 40) + " " + f1(Math.cos(ts * 1.4 + i) * 5) + ")"); });
      boat.setAttribute("transform", "translate(" + f1(-ts * 6) + " " + f1(Math.sin(ts * 1.4) * 6) + ") rotate(" + (Math.sin(ts * 1.4 + 1) * 4).toFixed(1) + " " + f1(DW * 0.7) + " " + f1(hz) + ")");
      // a fish leaps out of the water every few seconds
      var per = 3.6, ph = (ts % per) / 1.1, cyc = Math.floor(ts / per);
      if (ph <= 1) {
        var fx = DW * (0.15 + h01(cyc, 3) * 0.5) + ph * 220, fy = waves[1].y + 30 - Math.sin(ph * Math.PI) * 170;
        fish.setAttribute("transform", "translate(" + f1(fx) + " " + f1(fy) + ") rotate(" + f1(-40 + ph * 80) + ")");
        fish.setAttribute("display", "inline");
      } else fish.setAttribute("display", "none");
    });
    var m = paperMk("wave", DW + 100, DH - gy + 120, C.sand, { x: -50, y: gy - 50, waves: Math.round(DW / 300), amp: 12, seed: 1010, edge: ["torn"] });
    m += paperMk("star", 70, 70, C.tomato, { x: DW * 0.12, y: DH - 90, seed: 1011, r: 12 }) + paperMk("drop", 50, 60, "#F3C8B0", { x: DW * 0.86, y: DH - 80, r: -40, seed: 1012 });
    mid.innerHTML = m;
    front.innerHTML = "";
    return { ground: gy * V.unit, name: "ocean" };
  };
  SETS.underwater = function (w) {
    var gy = groundY();
    var bg = layerSvg(w.bg, 0), back = layerSvg(w.back, 1), mid = layerSvg(w.mid, 2), front = layerSvg(w.front, 3);
    bg.innerHTML = sheetBg("#2F7FA6") + '<rect x="-20" y="-20" width="' + f1(DW + 40) + '" height="' + f1(DH * 0.5) + '" fill="#4F9FC2" opacity="0.5"/>' + paperMk("wave", DW + 80, 120, "#7CC0DA", { x: -40, y: -40, waves: 8, amp: 14, seed: 1101, r: 180 });
    var b = "";
    for (var i = 0; i < 3; i++) b += '<g class="a-f' + i + '">' + propAt("fish", 0, 0, 70 + i * 15) + "</g>";
    back.innerHTML = b;
    var fish = [0, 1, 2].map(function (i) { return q(back, "a-f" + i); });
    var m = paperMk("wave", DW + 100, DH - gy + 120, C.sand, { x: -50, y: gy - 40, waves: Math.round(DW / 260), amp: 14, seed: 1110 });
    var weeds = [];
    var nw = Math.max(3, Math.round(DW / 260));
    for (i = 0; i < nw; i++) {
      var wx = spread(nw, i, 0.06);
      m += '<g class="a-weed' + i + '">' + paperMk("leaf", 60, 300, i % 2 ? C.green : C.leaf, { x: wx - 30, y: gy - 300, seed: 1120 + i }) + paperMk("leaf", 46, 220, C.lime, { x: wx - 6, y: gy - 220, seed: 1130 + i, r: 12 }) + "</g>";
      weeds.push(wx);
    }
    m += paperMk("star", 80, 80, C.tomato, { x: DW * 0.3, y: gy + 20, seed: 1140 }) + paperMk("blob", 120, 70, "#F7B9C8", { x: DW * 0.58, y: gy + 10, seed: 1141 });
    for (i = 0; i < 6; i++) m += '<circle class="a-bub' + i + '" r="' + (8 + (i % 3) * 5) + '" fill="rgba(255,255,255,0.35)" stroke="rgba(255,255,255,0.8)" stroke-width="3"/>';
    mid.innerHTML = m;
    var wg = weeds.map(function (x, i) { return q(mid, "a-weed" + i); });
    var bubs = [0, 1, 2, 3, 4, 5].map(function (i) { return q(mid, "a-bub" + i); });
    w.anims.push(function (ts) {
      wg.forEach(function (g, i) { g.setAttribute("transform", "rotate(" + (Math.sin(ts * 1.3 + i) * 7).toFixed(1) + " " + f1(weeds[i]) + " " + f1(gy) + ")"); });
      fish.forEach(function (g, i) {
        var sp = 70 + i * 35, span = DW + 400, dir = i % 2 ? -1 : 1;
        var x = ((ts * sp + i * 500) % span) - 200;
        if (dir < 0) x = DW - x;
        g.setAttribute("transform", "translate(" + f1(x) + " " + f1(DH * (0.22 + i * 0.16) + Math.sin(ts * 2 + i) * 14) + ") scale(" + dir + " 1)");
      });
      bubs.forEach(function (b2, i) {
        var per = 4 + i * 0.7, ph = ((ts + i * 1.3) % per) / per;
        b2.setAttribute("cx", f1(DW * (0.1 + i * 0.16) + Math.sin(ph * 12) * 12));
        b2.setAttribute("cy", f1(gy - ph * gy));
      });
    });
    front.innerHTML = "";
    return { ground: gy * V.unit, name: "underwater" };
  };
  SETS.space = function (w) {
    var gy = groundY();
    var bg = layerSvg(w.bg, 0), back = layerSvg(w.back, 1), mid = layerSvg(w.mid, 2), front = layerSvg(w.front, 3);
    bg.innerHTML = sheetBg(C.night) + starField(90, 1201);
    var b = "", rnd = R(1202), ns = Math.round(DW * DH / 90000);
    for (var i = 0; i < ns; i++) {
      var sx = rnd() * DW, sy = rnd() * gy * 0.85, ss = 26 + rnd() * 30;
      b += '<g class="a-st' + i + '" transform="translate(' + f1(sx) + " " + f1(sy) + ')">' + paperMk("star", ss, ss, rnd() < 0.7 ? "#FFE58A" : C.white, { x: -ss / 2, y: -ss / 2, seed: 1210 + i, sh: 1.5 }) + "</g>";
    }
    b += propAt("planet", DW * (PORT ? 0.72 : 0.78), DH * (PORT ? 0.26 : 0.34), PORT ? 230 : 260);
    b += propAt("moon", DW * (PORT ? 0.22 : 0.16), DH * (PORT ? 0.2 : 0.3), 170);
    b += '<g class="a-comet">' + paperMk("drop", 70, 200, "#FFE58A", { x: -35, y: -200, seed: 1230, r: 0, sh: 1.5 }) + paperMk("circle", 50, 50, C.white, { x: -25, y: -40, seed: 1231 }) + "</g>";
    back.innerHTML = b;
    var stars = [];
    for (i = 0; i < ns; i++) stars.push(q(back, "a-st" + i));
    var stBase = stars.map(function (g) { return g.getAttribute("transform"); });
    var comet = q(back, "a-comet");
    var rx = DW * (PORT ? 0.5 : 0.56);
    var m = '<line x1="' + f1(rx) + '" y1="-10" x2="' + f1(rx) + '" y2="' + f1(DH * 0.12) + '" stroke="#ddd" stroke-width="2" class="a-string"/><g class="a-rocket">' + propAt("rocket", rx, DH * 0.12 + 200, 200) + "</g>";
    m += paperMk("wave", DW + 200, (DH - gy) + 160, "#B9B4AC", { x: -100, y: gy - 50, waves: 2, amp: 16, seed: 1240, inner: paperMk("ellipse", 120, 36, "#9A958C", { x: DW * 0.3, y: 160, seed: 1241, sh: -2 }) + paperMk("ellipse", 80, 26, "#9A958C", { x: DW * 0.75, y: 200, seed: 1242, sh: -2 }) + paperMk("ellipse", 60, 20, "#9A958C", { x: DW * 0.95, y: 140, seed: 1243, sh: -2 }) });
    mid.innerHTML = m;
    var rocket = q(mid, "a-rocket"), string = q(mid, "a-string");
    w.anims.push(function (ts, si) {
      stars.forEach(function (g, i) { var tw = h01(i, Math.floor(si / 2)) < 0.15; g.setAttribute("transform", stBase[i] + (tw ? " scale(0.6) rotate(20)" : "")); });
      var a = Math.sin(ts * 1.6) * 7;
      rocket.setAttribute("transform", "rotate(" + a.toFixed(1) + " " + f1(rx) + " 0)");
      string.setAttribute("transform", "rotate(" + a.toFixed(1) + " " + f1(rx) + " 0)");
      var cp = (ts % 7) / 2.2;
      if (cp <= 1) { comet.setAttribute("display", "inline"); comet.setAttribute("transform", "translate(" + f1(DW * (0.1 + cp * 0.6)) + " " + f1(DH * (0.05 + cp * 0.2)) + ") rotate(-60)"); } else comet.setAttribute("display", "none");
    });
    return { ground: gy * V.unit, name: "space" };
  };
  SETS.desk = function (w) {
    backdrop(w, "cardboard");
    return { ground: groundY() * V.unit, name: "desk" };
  };
  S.setNames = ["town", "countryside", "kitchen", "classroom", "ocean", "underwater", "space"];

  /**
   * Build a layered diorama set (or a plain craft backdrop) into the world.
   * name: town | countryside | kitchen | classroom | ocean | underwater | space  — or a backdrop: kraft | cardboard | cork | felt | mat | night
   * Returns { name, ground (px y of the floor line), back, mid, front, top } — add your pieces into these layers.
   */
  S.set = function (name, opts) {
    var w = world();
    var key = str(name).toLowerCase();
    var info;
    if (SETS[key]) info = SETS[key](w, opts || {});
    else { backdrop(w, key || "kraft"); info = { ground: groundY() * V.unit, name: key || "kraft" }; }
    info.back = w.back; info.mid = w.mid; info.front = w.front; info.top = w.top; info.bg = w.bg;
    w.set = info;
    return info;
  };

  // ───────────────────────── scene entry (custom mode) ─────────────────────────
  /**
   * S.scene(root, { set?: name, backdrop?: kind, push?: 0.03 }) → { root, set, ground, back, mid, front, top, W, H }
   * Creates the stop-motion world (layers, stepped clock, lighting) — call once at the top of a custom scene.
   */
  S.scene = function (root, opts) {
    opts = opts || {};
    var w = newWorld(root || V.root(), opts);
    var info = S.set(opts.set || opts.backdrop || "kraft");
    return { root: w.root, set: info.name, ground: info.ground, bg: w.bg, back: w.back, mid: w.mid, front: w.front, top: w.top, W: V.width, H: V.height, world: w };
  };
  // shared-layout compatibility: S.stage gives a paper world + a padded flex stage in the top layer
  S.stage = function (root, opts) {
    opts = opts || {};
    var w = WORLD && WORLD.root === (root || V.root()) ? WORLD : newWorld(root || V.root());
    if (!w.set && opts.background !== false) S.set(opts.set || "kraft");
    var stage = el("div.v-stage.pp-stage", { parent: w.top });
    if (opts.align === "top") stage.classList.add("v-top");
    if (opts.cls) w.root.classList.add(opts.cls);
    return stage;
  };

  // ───────────────────────── template helpers ─────────────────────────
  var PADX = function () { return V.width * (PORT ? 0.08 : 0.07); };
  var PADY = function () { return V.height * (PORT ? 0.07 : 0.08); };
  function abs(parent, x, y, w, h, cls) {
    var d = el("div.pp-abs" + (cls ? "." + cls : ""), { parent: parent });
    d.style.left = f1(x) + "px"; d.style.top = f1(y) + "px";
    if (w != null) d.style.width = f1(w) + "px";
    if (h != null) d.style.height = f1(h) + "px";
    return d;
  }
  function headline(w, text, at, o) {
    o = o || {};
    if (!str(text).trim()) return null;
    var box = abs(w.top, PADX(), o.y != null ? o.y : PADY() * 0.85, V.width - PADX() * 2, null, "pp-headbox");
    var ct2 = S.cutText(text, { parent: box, mode: o.mode || "strip", size: o.size || u(PORT ? 66 : 70), maxLines: o.maxLines || 2, maxWidth: V.width - PADX() * 2, paper: o.paper });
    ct2.place(at, { stagger: 0.12 });
    return ct2;
  }
  function keyTimes(list, getKey, opts) {
    return S.syncTimes(list.map(function (it) { var k = getKey(it); return k ? str(k) : null; }), opts || {});
  }
  function keyOf(it, fields) {
    if (!it) return null;
    if (it.keyword) return it.keyword;
    for (var i = 0; i < fields.length; i++) if (it[fields[i]]) return S.autoKey(plain(it[fields[i]]));
    return null;
  }
  function castOk(n) { return n && n !== "none" && CAST[str(n).toLowerCase()] ? str(n).toLowerCase() : null; }
  function puppetH() { return V.height * (PORT ? 0.34 : 0.56); }

  var T = {};

  // 1 ─ puppet-talks: a puppet narrates on a diorama set, speech bubble words land as spoken
  T["puppet-talks"] = function (w, p) {
    var info = S.set(p.set || "town");
    var gy = info.ground;
    var sp = castOk(p.speaker) || "mo", li = castOk(p.listener);
    var H0 = PORT ? V.height * 0.4 : puppetH();
    var spX = li ? V.width * (PORT ? 0.3 : 0.24) : V.width * (PORT ? 0.5 : 0.26);
    var A = S.puppet(sp, { parent: w.front, x: spX, y: gy + u(20), height: H0, face: 1 });
    A.enter(0.05, "left", { hops: 2 }).talk();
    var B = null;
    if (li) {
      B = S.puppet(li, { parent: w.front, x: V.width * (PORT ? 0.74 : 0.8), y: gy + u(26), height: H0 * 0.94, face: -1 });
      B.place(0, "hand").look(0, 1);
    }
    A.look(0, li ? 1 : 0);
    // speech bubble
    var bw = PORT ? V.width * 0.84 : V.width * 0.46;
    var bx = PORT ? (V.width - bw) / 2 : Math.min(V.width - bw - PADX(), spX + u(120));
    var by = PORT ? V.height * 0.1 : V.height * 0.1;
    var holder = abs(w.top, bx, by, bw, null, "pp-bubblebox");
    var bub = sheet(null, { color: C.white, shape: "round", edge: "cut", seed: 41 });
    bub.classList.add("pp-bubble");
    var bpc = makePiece(bub, { parent: holder, r: -1.5 });
    bpc.place(0.35, "pop");
    var txt = S.cutText(p.bubble || "Hello!", { parent: bub.content, mode: "strip", size: u(PORT ? 58 : 60), maxLines: 4, maxWidth: bw - u(80), paper: C.cream });
    txt.place(0.6, { sync: true });
    // bubble tail (paper triangle pointing down at the speaker)
    var bubH = bub.offsetHeight || u(200);
    var tailX = PORT ? Math.max(u(60), Math.min(bw * 0.5, spX - bx)) : Math.max(u(60), Math.min(bw - u(60), spX - bx + u(30)));
    var ts0 = svgBox(80, 100, { html: paperMk([[0, 0], [64, 0], [10, 100]], 0, 0, C.white, { seed: 44, sh: 3 }) });
    var tp = makePiece(ts0, { parent: holder, x: tailX, y: bubH - u(6), w: u(80), h: u(100), ax: 0.2, ay: 0, z: -1 });
    tp.place(0.35, "pop");
    // tags (stencil labels) pinned along the bottom of the bubble
    var tags = arr(p.tags).slice(0, 3);
    if (tags.length) {
      var row = el("div.pp-tagrow", { parent: holder });
      var tt = keyTimes(tags, function (t) { return S.autoKey(plain(t)); }, { start: 1.2 });
      tags.forEach(function (t, i) {
        var tg = S.cutText(t, { parent: row, mode: "stencil", size: u(PORT ? 40 : 38), fit: false, r: (i % 2 ? 3 : -3) });
        tg.place(tt[i], { how: "hand" });
        A.gesture(tt[i] - 0.1, i % 2 ? "present" : "point");
      });
    } else A.gesture(Math.min(V.duration * 0.45, 2.2), "present");
    if (B) {
      B.gesture(V.duration * 0.35, "nod");
      B.gesture(Math.max(1, V.duration - 2.2), V.duration > 7 ? "cheer" : "nod");
    }
    if (p.title) headline(w, p.title, 0.2, { y: PORT ? V.height * 0.03 : null });
  };

  // 2 ─ diorama-scene: items drop into a set on their key words; a puppet points at each
  T["diorama-scene"] = function (w, p) {
    var info = S.set(p.set || "countryside");
    var gy = info.ground;
    var items = arr(p.items).slice(0, 5);
    if (!items.length) items = [{ prop: "tree" }];
    var who = castOk(p.character);
    var x0 = who ? (PORT ? 0.16 : 0.32) : 0.14, x1 = PORT ? 0.86 : 0.88;
    var n = items.length;
    var times = keyTimes(items, function (it) { return keyOf(it, ["label", "prop"]); }, { start: 0.6 });
    var size = V.height * (PORT ? 0.15 : 0.27) * (n > 3 ? 0.85 : 1);
    var pup = null;
    if (who) {
      pup = S.puppet(who, { parent: w.front, x: V.width * (PORT ? 0.22 : 0.15), y: gy + u(30), height: puppetH() * (PORT ? 0.9 : 1), face: 1 });
      pup.place(0, "hand").talk().look(0, 1);
    }
    items.forEach(function (it, i) {
      var fx = n === 1 ? (x0 + x1) / 2 : x0 + (x1 - x0) * (i / (n - 1));
      var row = PORT && n > 2 ? i % 2 : 0;
      var y = gy - u(10) - (PORT ? (row ? V.height * 0.2 : V.height * 0.04) : 0);
      if (PORT && who) fx = 0.36 + 0.5 * (n === 1 ? 0.5 : i / (n - 1));
      var pr = S.prop(it.prop || "star", { parent: row ? w.mid : w.front, x: V.width * fx, y: y, size: size * (row ? 0.85 : 1), r: (h01(i, 4) - 0.5) * 8, ground: true });
      pr.place(ct(times[i]), "drop");
      if (it.label) {
        var lb = abs(w.top, clamp(V.width * fx - u(200), u(10), V.width - u(410)), y - pr.height - u(PORT ? 92 : 96), u(400), null, "pp-center");
        var tg = S.cutText(it.label, { parent: lb, mode: "stencil", size: u(PORT ? 36 : 40), fit: false });
        tg.place(ct(times[i] + 0.45), { how: "pop" });
      }
      if (pup) pup.gesture(times[i] - 0.05, i === n - 1 ? "present" : "point");
    });
    if (p.title) headline(w, p.title, 0.15);
  };

  // 3 ─ paper-list: notes pinned to a corkboard one by one
  T["paper-list"] = function (w, p) {
    S.set(p.board === "felt" ? "felt" : p.board === "kraft" ? "kraft" : "cardboard");
    var items = arr(p.items).slice(0, 6);
    var n = Math.max(1, items.length);
    var bx = PADX() * 0.6, by = PADY() * 0.6, bw = V.width - bx * 2, bh = V.height - by * 2;
    var board = el("div.pp-board", { parent: w.mid });
    board.style.cssText += ";left:" + bx + "px;top:" + by + "px;width:" + bw + "px;height:" + bh + "px";
    var frame = sheet(board, { color: C.wood, edge: "cut", tex: "card", seed: 3 });
    frame.classList.add("pp-fill");
    var cork = sheet(frame.content, { color: p.board === "felt" ? C.felt : p.board === "kraft" ? C.kraftLt : C.cork, tex: p.board === "felt" ? "felt" : p.board === "kraft" ? "paper" : "cork", edge: "clean", seed: 4 });
    cork.classList.add("pp-fill", "pp-corkface");
    var inner = cork.content;
    inner.classList.add("pp-boardin");
    var head = el("div.pp-boardhead", { parent: inner });
    if (p.title) S.cutText(p.title, { parent: head, mode: "strip", size: u(PORT ? 62 : 64), maxLines: 2, maxWidth: bw * 0.86 }).place(0.15);
    var cols = PORT ? 1 : V.isSquare ? (n >= 4 ? 2 : 1) : n <= 3 ? n : n === 4 ? 2 : 3;
    var grid = el("div.pp-notes", { parent: inner });
    grid.style.gridTemplateColumns = "repeat(" + cols + ", 1fr)";
    var times = keyTimes(items, function (it) { return keyOf(it, ["text"]); }, { start: p.title ? 0.9 : 0.4 });
    var rows = Math.ceil(n / cols);
    var cellW = (bw - u(52) - u(72) - (cols - 1) * u(40)) / cols;
    var gridH = bh - u(52) - u(60) - (p.title ? u(PORT ? 190 : 120) : 0) - (rows - 1) * u(34) - u(30);
    var noteH = Math.max(u(140), Math.min(gridH / rows, Math.min(cellW, u(560)) * 0.78));
    items.forEach(function (it, i) {
      var cell = el("div.pp-cell", { parent: grid });
      var nt = sheet(null, { color: NOTE_COLORS[i % NOTE_COLORS.length], edge: ["torn", "cut", "cut", "cut"], seed: 60 + i, core: true });
      nt.classList.add("pp-note");
      nt.style.height = f1(noteH * 0.94) + "px";
      var num0 = el("div.pp-notenum", { parent: nt.content, text: String(i + 1) });
      var tx = el("div.pp-notetext", { parent: nt.content });
      tx.appendChild(S.rich(it.text || ""));
      tx.style.fontSize = u(PORT ? (n > 4 ? 46 : 54) : rows > 1 ? 50 : 58) + "px";
      var pc = makePiece(nt, { parent: cell, r: (h01(i, 8) - 0.5) * 7 });
      pc.place(ct(times[i]), "hand");
      var pin = el("div.pp-pinwrap", { parent: cell });
      var pp = makePiece(S.pin({ parent: null, x: 0, y: 0, color: [C.red, C.blue, C.yellow, C.teal][i % 4], size: u(46) }), {});
      pin.appendChild(pp.el);
      pp.place(ct(times[i] + 0.4), "stamp");
      V.fit(tx, { maxHeight: noteH * 0.94 - u(80), min: u(22) });
    });
  };

  // 4 ─ cut-out-chart: bars built from stacked paper strips dropped one by one
  T["cut-out-chart"] = function (w, p) {
    S.set("kraft");
    var bars = arr(p.bars).slice(0, 6).map(function (b) { return { label: str(b && b.label), value: Math.max(0, num(b && b.value, 0)), keyword: b && b.keyword }; });
    if (!bars.length) bars = [{ label: "A", value: 1 }];
    var max = Math.max.apply(null, bars.map(function (b) { return b.value; })) || 1;
    // graph-paper sheet taped to the kraft
    var gx = PADX() * 0.7, gyy = PADY() * (p.title ? 2.2 : 0.8), gw = V.width - gx * 2, gh = V.height - gyy - PADY() * 0.7;
    var gp = sheet(w.back, { color: "#FBF8EF", edge: ["cut", "cut", "torn", "cut"], seed: 77, pattern: "linear-gradient(rgba(120,170,200,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(120,170,200,0.28) 1px, transparent 1px)", patternSize: u(36) + "px " + u(36) + "px" });
    gp.classList.add("pp-absfill");
    gp.style.cssText += ";left:" + gx + "px;top:" + gyy + "px;width:" + gw + "px;height:" + gh + "px";
    S.tape({ parent: w.top, x: gx + u(40), y: gyy + u(6), w: u(150), h: u(42), r: -32, kind: 0 });
    S.tape({ parent: w.top, x: gx + gw - u(40), y: gyy + u(6), w: u(150), h: u(42), r: 30, kind: 1 });
    if (p.title) headline(w, p.title, 0.15, { y: PADY() * 0.6, maxLines: 1 });
    var n = bars.length;
    var cx0 = gx + gw * 0.08, cw = gw * 0.84;
    var baseY = gyy + gh - u(PORT ? 140 : 120);
    var topY = gyy + u(PORT ? 150 : 120);
    var colW = cw / n, barW = Math.min(colW * 0.62, u(220));
    var SL = 10, stripH = (baseY - topY) / (SL + 0.6);
    // ruler baseline
    var rs = svgBox(cw / V.unit, 34);
    var rmk = paperMk("rect", cw / V.unit, 34, C.yellow, { seed: 88 });
    for (var tk = 0; tk < cw / V.unit; tk += 18) rmk += lineMk(tk, 0, tk, tk % 90 === 0 ? 18 : 10, C.ink, 2);
    rs.innerHTML = rmk;
    var ruler = makePiece(rs, { parent: w.mid, x: cx0 + cw / 2, y: baseY + u(17), w: cw, h: u(34) });
    ruler.place(0.2, "slide-left");
    var times = keyTimes(bars, function (b) { return b.keyword || S.autoKey(b.label); }, { start: 0.9 });
    var fmt = function (v) { return str(p.prefix || "") + V.format(v, Math.abs(v) < 10 && v % 1 ? 1 : 0) + str(p.suffix || ""); };
    bars.forEach(function (b, i) {
      var x = cx0 + colW * (i + 0.5);
      var count = Math.max(1, Math.round((b.value / max) * SL));
      var hl = p.highlight != null && isFinite(Number(p.highlight)) ? Number(p.highlight) : null;
      var col = hl == null ? S.color(i) : hl === i ? C.red : [C.teal, C.blue, C.mustard, C.purple, C.green][i % 5];
      var rnd = R(500 + i);
      var t0 = times[i];
      var stepDur = Math.min(0.12, Math.max(0.06, 1.2 / count));
      for (var j = 0; j < count; j++) {
        var sw = barW * (0.92 + rnd() * 0.12);
        var s = svgBox(sw / V.unit, stripH / V.unit - 4);
        s.innerHTML = paperMk("rect", sw / V.unit, stripH / V.unit - 4, col, { seed: i * 40 + j, sh: 2.5, edge: rnd() < 0.3 ? "torn" : "cut" });
        var pc = makePiece(s, { parent: w.mid, x: x + (rnd() - 0.5) * u(10), y: baseY - stripH * (j + 0.5), w: sw, h: stripH, r: (rnd() - 0.5) * 3, shadow: 0, boil: 0.6 });
        pc.from(ct(t0 + j * stepDur), 0.3, { y: -u(140), r: (rnd() - 0.5) * 30, o: 0 }, { ease: dropEase, lift: 1, oFast: true });
      }
      var vt = abs(w.top, x - u(160), baseY - stripH * count - u(PORT ? 96 : 92), u(320), null, "pp-center");
      S.cutText(fmt(b.value), { parent: vt, mode: "label", size: u(PORT ? 46 : 54), fit: false }).place(ct(t0 + count * stepDur + 0.1), { how: "stamp" });
      var lt = abs(w.top, x - colW / 2, baseY + u(48), colW, null, "pp-center");
      S.cutText(b.label, { parent: lt, mode: "strip", size: u(PORT ? 36 : 42), maxLines: 2, maxWidth: colW * 0.98, paper: C.white }).place(ct(t0 - 0.1), { stagger: 0.05 });
    });
  };

  // 5 ─ pop-up-book: the cover flips open and paper layers fold up off the pages
  var POP_THEMES = {
    town: { back: ["house", "house"], front: "#5E9E4A", sky: "#A8D4EA" },
    countryside: { back: ["mountain", "tree"], front: "#5E9E4A", sky: "#BFE0EC" },
    ocean: { back: ["boat", "sun"], front: "#3F8DB8", sky: "#BFE3EE" },
    underwater: { back: ["fish", "fish"], front: "#E6CF9C", sky: "#2F7FA6" },
    space: { back: ["planet", "moon"], front: "#B9B4AC", sky: "#1B2340" },
    kitchen: { back: ["cup", "clock"], front: "#C48B55", sky: "#F2E2C2" },
    classroom: { back: ["globe", "book"], front: "#C48B55", sky: "#E7DDB8" },
  };
  T["pop-up-book"] = function (w, p) {
    S.set("cardboard");
    var th = POP_THEMES[p.set] || POP_THEMES.countryside;
    var bw = Math.min(V.width * 0.94, V.height * (PORT ? 0.62 : V.isSquare ? 1.0 : 1.22)), bh = bw * (PORT ? 0.74 : V.isSquare ? 0.66 : 0.58);
    var cx = V.width / 2, by = V.height * (PORT ? 0.66 : 0.6) - bh / 2;
    var pw = bw / 2;
    // pages (open book, seen from the front)
    var pages = svgBox(bw / V.unit + 40, bh / V.unit + 30);
    var PW = bw / V.unit, PH = bh / V.unit;
    pages.innerHTML = paperMk("rect", PW + 40, PH + 30, "#7B2F2A", { seed: 120, tex: "card" }) +
      paperMk("rect", PW / 2, PH, "#FBF4E4", { x: 18, y: 10, seed: 121, inner: '<rect width="' + f1(PW / 2) + '" height="' + f1(PH) + '" fill="url(#ppLines)" opacity="0.35"/>' }) +
      paperMk("rect", PW / 2, PH, "#FBF4E4", { x: 22 + PW / 2, y: 10, seed: 122 }) +
      '<rect x="' + f1(PW / 2 + 6) + '" y="10" width="28" height="' + f1(PH) + '" fill="url(#ppShade)" opacity="0.8"/>' + lineMk(PW / 2 + 20, 10, PW / 2 + 20, PH + 10, "rgba(60,30,10,0.35)", 3);
    var pg = makePiece(pages, { parent: w.back, x: cx, y: by + bh / 2, w: bw + u(40), h: bh + u(30), boil: 0.4 });
    pg.place(0, "hand");
    // pop-up scene on the right page, standing on its bottom edge
    var popBase = by + bh * 0.92;
    var rx = cx + pw / 2;
    var skyW = pw * 0.86, skyH = bh * 0.78;
    var SW = skyW / V.unit, SH = skyH / V.unit;
    var sky = S.paper("arch", { parent: w.mid, x: rx, y: popBase, w: skyW, h: skyH, color: th.sky, ay: 1, edge: "cut", seed: 130,
      inner: paperMk("circle", SW * 0.16, SW * 0.16, C.yellow, { x: SW * 0.7, y: SH * 0.14, seed: 131 }) + paperMk("cloud", SW * 0.3, SW * 0.16, C.white, { x: SW * 0.14, y: SH * 0.22, seed: 132 }) + paperMk("hill", SW, SH * 0.3, th.front, { y: SH * 0.7, seed: 133, opacity: 0.6, sh: false }) });
    var openAt = 0.5, popAt = openAt + 0.7;
    sky.place(popAt, "flip");
    sky.inner.style.transformOrigin = "50% 100%";
    var items = arr(p.items).slice(0, 3);
    var backs = items.length ? items : th.back;
    var times = keyTimes(backs.map(function (b) { return { k: b }; }), function (o) { return o.k; }, { start: popAt + 0.5 });
    backs.forEach(function (name, i) {
      var nB = backs.length;
      var fx = rx - skyW * 0.32 + (nB === 1 ? skyW * 0.32 : (skyW * 0.64 * i) / (nB - 1));
      var pr = S.prop(name, { parent: w.mid, x: fx, y: popBase - u(8), size: skyH * (0.42 - i * 0.04), ground: true });
      pr.inner.style.transformOrigin = "50% 100%";
      pr.place(ct(Math.max(popAt + 0.3 + i * 0.25, times[i])), "flip");
    });
    var grass = S.paper("wave", { parent: w.front, x: rx, y: popBase + u(4), w: pw * 0.94, h: bh * 0.18, color: th.front, ay: 1, edge: ["torn"], seed: 140 });
    grass.inner.style.transformOrigin = "50% 100%";
    grass.place(popAt + 0.15, "flip");
    // left page: title & caption
    var lp = abs(w.mid, cx - pw + u(30), by + u(30), pw - u(70), bh - u(60), "pp-pagecol");
    if (PORT) {
      var tb = abs(w.top, PADX(), V.height * 0.1, V.width - PADX() * 2, by - V.height * 0.13, "pp-titlebox");
      S.cutText(p.title || "Once upon a time", { parent: tb, mode: "ransom", size: u(110), maxLines: 3, maxWidth: V.width - PADX() * 2, maxHeight: by - V.height * 0.15 }).place(0.3);
    } else S.cutText(p.title || "Once upon a time", { parent: lp, mode: "ransom", size: u(V.isSquare ? 56 : 66), maxLines: 3, maxWidth: pw - u(80) }).place(popAt + 0.2);
    if (p.caption) S.cutText(p.caption, { parent: lp, mode: "label", size: u(PORT ? 26 : 32), maxLines: 1, maxWidth: pw - u(90), r: -2 }).place(popAt + 1.2, { how: "hand" });
    // the cover: hinged on the spine, flips from closed (over the right page) to open (left)
    var cv = svgBox(pw / V.unit + 10, bh / V.unit + 24);
    var CW = pw / V.unit + 10, CH = bh / V.unit + 24;
    cv.innerHTML = '<g class="pp-cover-front">' + paperMk("rect", CW, CH, "#8E3A2E", { seed: 150, tex: "card", inner: paperMk("rect", CW * 0.7, CH * 0.3, "#E8C77A", { x: CW * 0.15, y: CH * 0.2, seed: 151, sh: 2 }) + stitchMk(14, 14, CW - 14, 14, "rgba(255,230,180,0.6)") + stitchMk(14, CH - 14, CW - 14, CH - 14, "rgba(255,230,180,0.6)") }) + "</g>" +
      '<g class="pp-cover-back" display="none">' + paperMk("rect", CW, CH, "#E9D7B4", { seed: 152, pattern: "dots" }) + "</g>";
    var cover = makePiece(cv, { parent: w.top, x: cx, y: by + bh / 2, w: pw + u(10), h: bh + u(24), ax: 0, ay: 0.5, boil: 0.4 });
    cover._add({ at: openAt, dur: 0.8, to: { sx: -1 }, ease: "inOutSine", lift: 1 });
    var fr = cv.querySelector(".pp-cover-front"), bk = cv.querySelector(".pp-cover-back");
    w.anims.push(function (ts) {
      var sx = cover.poseAt(ts).sx;
      fr.setAttribute("display", sx >= 0 ? "inline" : "none");
      bk.setAttribute("display", sx < 0 ? "inline" : "none");
      var hide = ts > openAt + 0.8;
      cover.el.style.display = hide ? "none" : "";
    });
  };

  // 6 ─ collage-title: ransom-note title assembled on scraps, a puppet peeks in
  T["collage-title"] = function (w, p) {
    S.set(p.backdrop === "cork" ? "cork" : p.backdrop === "night" ? "night" : "kraft");
    var rnd = R(hs(p.title) + 9);
    var scr = [C.teal, C.yellow, C.pink, C.blue, C.cream, C.orange];
    for (var i = 0; i < 6; i++) {
      var mn = Math.min(V.width, V.height), sw = mn * (0.34 + rnd() * 0.22), sh2 = mn * (0.26 + rnd() * 0.2);
      var a = (i / 6) * Math.PI * 2 + rnd();
      var x = V.width / 2 + Math.cos(a) * V.width * 0.36, y = V.height / 2 + Math.sin(a) * V.height * 0.34;
      var sc = S.paper(rnd() < 0.5 ? "rect" : "blob", { parent: w.back, x: x, y: y, w: sw, h: sh2, color: scr[i], edge: "torn", r: (rnd() - 0.5) * 30, pattern: i % 3 === 0 ? "dots" : i % 3 === 1 ? "stripe" : null, seed: 200 + i });
      sc.place(0.05 + i * 0.07, "hand");
    }
    var tsW = V.width * (PORT ? 0.94 : 0.84), tsH = V.height * (PORT ? 0.36 : 0.46);
    var tsY = V.height * (PORT ? 0.48 : 0.47);
    var tsheet = S.paper("rect", { parent: w.mid, x: V.width / 2, y: tsY, w: tsW, h: tsH, color: C.cream, edge: "torn", r: -1.5, seed: 260, boil: 0.4 });
    tsheet.place(0.25, "hand");
    var star = S.paper("star", { parent: w.mid, x: V.width * (PORT ? 0.8 : 0.84), y: V.height * (PORT ? 0.2 : 0.22), w: u(150), h: u(150), color: C.yellow, r: 12 });
    star.place(1.1, "pop").wiggle(1.7, 1.2, 10);
    var box = abs(w.top, (V.width - tsW) / 2 + u(40), tsY - tsH / 2 + u(20), tsW - u(80), tsH - u(40), "pp-titlebox");
    if (p.kicker) S.cutText(p.kicker, { parent: box, mode: "label", size: u(34), fit: false, r: -2 }).place(0.3, { how: "stamp" });
    var tt = S.cutText(p.title || "Title", { parent: box, mode: "ransom", size: u(PORT ? 104 : 124), maxLines: PORT ? 4 : 2, maxWidth: tsW - u(100), maxHeight: tsH * 0.62 });
    tt.place(0.4, { stagger: Math.min(0.08, 2 / Math.max(1, tt.pieces.length)) });
    if (p.subtitle) {
      var sub = S.cutText(p.subtitle, { parent: box, mode: "stencil", size: u(PORT ? 40 : 42), fit: false, r: 2 });
      sub.place(Math.min(V.duration * 0.6, 0.6 + tt.pieces.length * 0.08 + 0.3), { how: "hand" });
    }
    S.tape({ parent: w.top, x: V.width / 2 - tsW / 2 + u(30), y: tsY - tsH / 2 + u(16), w: u(170), h: u(46), r: -38, kind: 1 });
    S.tape({ parent: w.top, x: V.width / 2 + tsW / 2 - u(30), y: tsY + tsH / 2 - u(16), w: u(170), h: u(46), r: -38, kind: 2 });
    var who = castOk(p.character);
    if (who) {
      var pp = S.puppet(who, { parent: w.front, x: V.width * (PORT ? 0.78 : 0.86), y: V.height + puppetH() * 0.42, height: puppetH() * 1.05, face: -1 });
      pp.piece.from(1.2, 0.8, { y: puppetH() * 0.7 }, { ease: settle, lift: 0.8 });
      pp.talk().gesture(2.1, "wave").look(0, -1);
    }
  };

  // 7 ─ before-after-flip: a taped paper flap flips over on the key word
  T["before-after-flip"] = function (w, p) {
    S.set(p.set || "kraft");
    var who = castOk(p.character);
    var cw = PORT ? V.width * 0.84 : V.width * (who ? 0.54 : 0.62), ch = PORT ? V.height * 0.46 : V.height * 0.7;
    var cx = PORT ? V.width / 2 : who ? V.width * 0.62 : V.width / 2, cy = PORT ? V.height * 0.36 : V.height * 0.52;
    var flipT = p.keyword ? V.find(p.keyword) : null;
    flipT = ct(flipT != null ? flipT - 0.3 : V.duration * 0.48);
    var holder = abs(w.mid, cx - cw / 2, cy - ch / 2, cw, ch, "pp-flipbox");
    function faceEl(side, col, label) {
      var s = sheet(null, { color: col, edge: "cut", seed: side === "b" ? 300 : 301, tex: "paper" });
      s.classList.add("pp-card", "pp-fill");
      var lb = el("div.pp-cardlabel", { parent: s.content });
      S.cutText(label, { parent: lb, mode: "stencil", size: u(PORT ? 36 : 40), fit: false });
      var d = side === "b" ? p.before || {} : p.after || {};
      var art = el("div.pp-cardart", { parent: s.content });
      var pn = d.prop || (side === "b" ? "cloud" : "sun");
      var dd = propDef(pn, {});
      var asz = Math.min(ch * 0.4, cw * 0.4);
      svgBox(dd.w, dd.h, { parent: art, scale: asz / dd.h, html: dd.mk, pad: 6 });
      var tx = el("div.pp-cardtext", { parent: s.content });
      tx.appendChild(S.rich(d.text || ""));
      return { s: s, tx: tx };
    }
    var fb = faceEl("b", "#DCE3E8", (p.before && p.before.label) || "Before");
    var fa = faceEl("a", "#FFF1C9", (p.after && p.after.label) || "After");
    var card = el("div.pp-cardwrap.pp-fill");
    card.appendChild(fb.s); card.appendChild(fa.s);
    var pc = makePiece(card, { parent: holder, origin: "50% 0%" });
    pc.el.classList.add("pp-fill");
    pc.place(0.1, "hand");
    pc._add({ at: flipT, dur: 0.35, to: { sy: 0.02 }, ease: "inQuad", lift: 1 });
    pc._add({ at: flipT + 0.35, dur: 0.45, to: { sy: 1 }, ease: settle, lift: 1 });
    w.anims.push(function (ts) {
      var after = ts >= flipT + 0.35;
      fb.s.style.display = after ? "none" : "";
      fa.s.style.display = after ? "" : "none";
    });
    S.tape({ parent: holder, x: cw * 0.5, y: -u(4), w: u(200), h: u(48), r: -2, kind: 0 });
    [fb.tx, fa.tx].forEach(function (t) { V.fit(t, { maxLines: 3, min: u(22) }); });
    if (p.title) headline(w, p.title, 0.1, { y: PORT ? V.height * 0.04 : PADY() * 0.35, size: u(PORT ? 56 : 56) });
    if (who) {
      var pp = S.puppet(who, { parent: w.front, x: PORT ? V.width * 0.5 : V.width * 0.17, y: V.height * (PORT ? 0.98 : 0.95), height: puppetH() * (PORT ? 0.95 : 1), face: 1 });
      pp.place(0, "hand").talk().look(0, 1);
      pp.gesture(Math.min(flipT - 1.5, V.duration * 0.25), "shrug");
      pp.gesture(flipT + 0.4, "cheer");
    }
  };

  // 8 ─ map-journey: a token hops stop to stop along a dotted path on a paper map
  T["map-journey"] = function (w, p) {
    S.set("cork");
    var stops = arr(p.stops).slice(0, 6);
    if (stops.length < 2) stops = stops.concat([{ name: "Start" }, { name: "Finish" }]).slice(0, 2);
    var n = stops.length;
    var mx = PADX() * 0.5, my = PADY() * 0.5, mw = V.width - mx * 2, mh = V.height - my * 2;
    var MW = mw / V.unit, MH = mh / V.unit;
    var rnd = R(321);
    var mk = paperMk("rect", MW, MH, "#F2E6C8", { seed: 400, edge: "torn", back: "#FBF6EA" });
    // lakes, forests, mountains
    mk += paperMk("blob", MW * 0.22, MH * 0.2, "#9DCDE6", { x: MW * 0.06, y: MH * 0.62, seed: 401, sh: 1.5 }) + paperMk("blob", MW * 0.18, MH * 0.16, "#9DCDE6", { x: MW * 0.72, y: MH * 0.08, seed: 402, sh: 1.5 });
    for (var i = 0; i < 7; i++) mk += paperMk("cloud", 90, 60, i % 2 ? "#8DBF6A" : "#79B05A", { x: MW * (0.05 + rnd() * 0.9), y: MH * (0.05 + rnd() * 0.85), seed: 410 + i, sh: 1.5, opacity: 0.85 });
    for (i = 0; i < 4; i++) mk += paperMk("tri", 70, 56, "#B8AFA0", { x: MW * (0.1 + rnd() * 0.8), y: MH * (0.1 + rnd() * 0.8), seed: 420 + i, sh: 1.5 });
    // fold creases
    mk += lineMk(MW / 3, 0, MW / 3, MH, "rgba(120,90,50,0.22)", 3) + lineMk((MW * 2) / 3, 0, (MW * 2) / 3, MH, "rgba(255,255,255,0.4)", 3) + lineMk(0, MH / 2, MW, MH / 2, "rgba(120,90,50,0.18)", 3);
    // compass
    mk += '<g transform="translate(' + f1(MW - 110) + " " + f1(MH - 120) + ')">' + paperMk("star", 120, 120, C.red, { x: -60, y: -60, points: 4, seed: 430 }) + paperMk("circle", 30, 30, C.cream, { x: -15, y: -15, seed: 431 }) + svgText(0, -70, "N", 30, C.ink) + "</g>";
    var ms = svgBox(MW, MH);
    ms.innerHTML = mk;
    var mapPc = makePiece(ms, { parent: w.back, x: V.width / 2, y: V.height / 2, w: mw, h: mh, boil: 0.3, r: -0.6 });
    mapPc.place(0, "hand");
    // stop positions (zig-zag), in px
    var pts = stops.map(function (s, i) {
      var t = n === 1 ? 0.5 : i / (n - 1);
      if (PORT) return [V.width * (i % 2 ? 0.7 : 0.3), V.height * (0.2 + 0.62 * t)];
      return [V.width * (0.13 + 0.74 * t), V.height * (i % 2 ? 0.34 : 0.66) + (p.title ? u(30) : 0)];
    });
    var times = keyTimes(stops, function (s) { return keyOf(s, ["name"]); }, { start: 0.9 });
    // dashes (paper bits) along straight legs, revealed as the token travels
    var dashLayer = svgBox(DW, DH);
    dashLayer.classList.add("pp-full");
    w.mid.appendChild(dashLayer);
    var dashes = [], dm = "";
    for (var leg = 0; leg < n - 1; leg++) {
      var a = pts[leg], b = pts[leg + 1];
      var dx = (b[0] - a[0]) / V.unit, dy = (b[1] - a[1]) / V.unit, L = Math.sqrt(dx * dx + dy * dy);
      var nd = Math.floor(L / 34);
      var ang = (Math.atan2(dy, dx) * 180) / Math.PI;
      for (var k = 1; k < nd; k++) {
        var tt = k / nd;
        var x = a[0] / V.unit + dx * tt, y = a[1] / V.unit + dy * tt - Math.sin(tt * Math.PI) * 30;
        dm += '<g class="pp-dash" display="none">' + paperMk("rect", 18, 8, C.red, { x: x - 9, y: y - 4, r: ang + (rnd() - 0.5) * 20, seed: 440 + dashes.length, sh: 1.5, tex: false }) + "</g>";
        dashes.push({ leg: leg, tt: tt });
      }
    }
    dashLayer.innerHTML = dm;
    var dEls = [].slice.call(dashLayer.querySelectorAll(".pp-dash"));
    // markers + name tags
    stops.forEach(function (s, i) {
      var pin = makePiece(S.pin({ parent: null, x: 0, y: 0, color: i === n - 1 ? C.red : C.blue, size: u(56) }), { parent: w.mid, x: pts[i][0], y: pts[i][1], w: u(56), h: u(56) });
      pin.place(ct(i === 0 ? 0.4 : times[i] - 0.1), "stamp");
      var below = true;
      var lb = abs(w.top, pts[i][0] - u(170), pts[i][1] + (below ? u(44) : -u(118)), u(340), null, "pp-center");
      S.cutText(s.name || "", { parent: lb, mode: "label", size: u(PORT ? 34 : 36), fit: false, r: (h01(i, 2) - 0.5) * 6 }).place(ct(i === 0 ? 0.5 : times[i] + 0.1), { how: "hand" });
    });
    // traveller
    var trav = str(p.traveller || "car").toLowerCase();
    var tok, isPup = !!castOk(trav);
    if (isPup) {
      tok = S.puppet(trav, { parent: w.top, x: pts[0][0], y: pts[0][1] - u(10), height: V.height * (PORT ? 0.13 : 0.2), face: pts[1][0] >= pts[0][0] ? 1 : -1 });
      tok.place(0.3, "drop").talk();
    } else {
      tok = S.prop(PROPS[trav] ? trav : "car", { parent: w.top, x: pts[0][0], y: pts[0][1] - u(6), size: u(PORT ? 90 : 100), ay: 0.9 });
      tok.place(0.3, "drop");
    }
    var tp = isPup ? tok.piece : tok;
    var legStart = [];
    for (leg = 0; leg < n - 1; leg++) {
      var arrive = Math.max(times[leg + 1] - 0.1, (legStart.length ? legStart[leg - 1] + 0.6 : 0.9) + 0.3);
      var hops = Math.max(2, Math.round(Math.sqrt(Math.pow(pts[leg + 1][0] - pts[leg][0], 2) + Math.pow(pts[leg + 1][1] - pts[leg][1], 2)) / u(140)));
      var dur = Math.min(hops * 0.4, Math.max(0.8, arrive - (leg === 0 ? 0.9 : legStart[leg - 1] + 0.5)));
      var st = ct(arrive - dur);
      legStart.push(st + dur);
      tp.hop(st, pts[leg + 1][0] - pts[leg][0], pts[leg + 1][1] - pts[leg][1], { hops: hops, dur: dur / hops, height: u(50) });
      dashes.forEach(function (d) { if (d.leg === leg) d.at = st + d.tt * dur; });
    }
    w.anims.push(function (ts) {
      for (var i2 = 0; i2 < dEls.length; i2++) {
        var on = dashes[i2].at != null && ts >= dashes[i2].at;
        if (dEls[i2]._on !== on) { dEls[i2].setAttribute("display", on ? "inline" : "none"); dEls[i2]._on = on; }
      }
    });
    if (p.title) headline(w, p.title, 0.15, { y: PADY() * 0.7, size: u(PORT ? 56 : 58) });
  };

  // 9 ─ stack-of-facts: index cards dropped onto a growing pile
  T["stack-of-facts"] = function (w, p) {
    S.set("mat");
    var facts = arr(p.facts).slice(0, 5);
    if (!facts.length) facts = [{ text: "" }];
    var n = facts.length;
    var cw = PORT ? V.width * 0.82 : V.width * 0.56, ch = PORT ? V.height * 0.4 : V.height * 0.6;
    var cx = V.width / 2, cy = V.height * (PORT ? 0.55 : 0.56);
    var times = keyTimes(facts, function (f) { return keyOf(f, ["big", "text"]); }, { start: 0.5, minGap: 1.0 });
    facts.forEach(function (f, i) {
      var holder = abs(w.mid, cx - cw / 2 + (h01(i, 3) - 0.5) * u(60), cy - ch / 2 + (h01(i, 5) - 0.5) * u(40), cw, ch, "pp-flipbox");
      holder.style.zIndex = 10 + i;
      var s = sheet(null, { color: C.white, edge: "cut", seed: 600 + i, pattern: "linear-gradient(transparent " + u(70) + "px, rgba(217,71,43,0.5) " + u(70) + "px, rgba(217,71,43,0.5) " + u(73) + "px, transparent " + u(73) + "px), repeating-linear-gradient(transparent 0 " + u(46) + "px, rgba(80,130,190,0.32) " + u(46) + "px " + u(48) + "px)", patternSize: "100% 100%" });
      s.classList.add("pp-index", "pp-fill");
      var num0 = el("div.pp-indexnum", { parent: s.content, text: "#" + (i + 1) });
      if (f.big) {
        var bg = el("div.pp-indexbig", { parent: s.content });
        S.cutText(f.big, { parent: bg, mode: "letters", size: u(PORT ? 110 : 130), maxLines: 1, maxWidth: cw * 0.9 }).place(ct(times[i] + 0.35), { stagger: 0.05 });
      }
      var txo = el("div.pp-indextext", { parent: s.content });
      var tx = el("div", { parent: txo });
      tx.appendChild(S.rich(f.text || ""));
      tx.style.fontSize = u(f.big ? (PORT ? 48 : 54) : PORT ? 58 : 66) + "px";
      var pc = makePiece(s, { parent: holder, r: (h01(i, 7) - 0.5) * 9 });
      pc.el.classList.add("pp-fill");
      pc.place(ct(times[i]), i % 2 ? "slide-right" : "slide-left", { dur: 0.7 });
      V.fit(tx, { maxHeight: ch - u(f.big ? 330 : 150), min: u(22) });
      if (i === 0) S.tape({ parent: holder, x: cw * 0.12, y: u(10), w: u(140), h: u(42), r: -35, kind: 3 });
    });
    if (p.title) {
      var tb = abs(w.top, PADX() * 0.6, PADY() * 0.5, V.width - PADX() * 1.2, null, "pp-left");
      S.cutText(p.title, { parent: tb, mode: "label", size: u(PORT ? 46 : 52), maxLines: 2, fit: false, r: -1.5 }).place(0.1, { how: "stamp" });
    }
  };

  // 10 ─ paper-quote: quote on a torn note, taped down, words appear as spoken
  T["paper-quote"] = function (w, p) {
    S.set(p.backdrop === "kraft" ? "kraft" : "cork");
    var nw = PORT ? V.width * 0.86 : V.width * 0.66, nh = PORT ? V.height * 0.56 : V.height * 0.72;
    var nx = (V.width - nw) / 2, ny = (V.height - nh) / 2 - (PORT ? V.height * 0.04 : 0);
    var holder = abs(w.mid, nx, ny, nw, nh, "pp-flipbox");
    var s = sheet(null, { color: "#FBF8EE", edge: ["torn", "cut", "cut", "cut"], seed: 700, pattern: "linear-gradient(90deg, transparent " + u(96) + "px, rgba(217,71,43,0.45) " + u(96) + "px, rgba(217,71,43,0.45) " + u(99) + "px, transparent " + u(99) + "px), repeating-linear-gradient(transparent 0 " + u(58) + "px, rgba(80,130,190,0.3) " + u(58) + "px " + u(60) + "px)", patternSize: "100% 100%" });
    s.classList.add("pp-fill", "pp-quotenote");
    var pc = makePiece(s, { parent: holder, r: -1.8 });
    pc.el.classList.add("pp-fill");
    pc.place(0.05, "hand");
    S.tape({ parent: holder, x: u(30), y: u(20), w: u(170), h: u(46), r: -38, kind: 1 });
    S.tape({ parent: holder, x: nw - u(30), y: u(20), w: u(170), h: u(46), r: 36, kind: 2 });
    var qb = abs(w.top, nx + u(PORT ? 20 : 40), ny - u(PORT ? 40 : 50), u(300), null, "pp-left");
    S.cutText("\u201C", { parent: qb, mode: "letters", size: u(PORT ? 220 : 260), color: C.red, fit: false }).place(0.4, { how: "pop" });
    var qt = el("div.pp-quotetext", { parent: s.content });
    var words = [];
    str(p.quote || "").replace(/\*([^*]+)\*|(\S+)/g, function (m0, em, wd) { (em || wd).split(/\s+/).forEach(function (x) { if (x) words.push({ t: x, em: !!em }); }); return ""; });
    var kw = p.keyword ? str(p.keyword).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "") : null;
    var pieces = [];
    words.forEach(function (wd, i) {
      var sp = el("span.pp-qw", { text: wd.t });
      var k = wd.t.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");
      if (wd.em || (kw && k === kw)) sp.classList.add("pp-qem");
      var wp = makePiece(sp, { parent: qt, boil: 0.35, shadow: 0 });
      pieces.push(wp);
    });
    qt.style.fontSize = u(PORT ? 70 : 80) + "px";
    V.fit(qt, { maxHeight: nh - u(250), min: u(24) });
    var tms = S.syncTimes(words.map(function (x) { return plain(x.t); }), { start: 0.7, lead: 0.05, minGap: 0.05 });
    pieces.forEach(function (wp, i) { wp.place(ct(tms[i]), "stamp", { dur: 0.25 }); });
    if (p.author) {
      var ab = abs(w.top, nx + nw * 0.3, ny + nh - u(PORT ? 30 : 20), nw * 0.72, null, "pp-right");
      var at = S.cutText("— " + p.author + (p.role ? ", " + p.role : ""), { parent: ab, mode: "stencil", size: u(PORT ? 34 : 38), fit: false, r: -3 });
      at.place(ct(Math.max(tms[tms.length - 1] + 0.4, V.duration * 0.55)), { how: "hand" });
    }
  };

  // 11 ─ clothesline-timeline: cards hung on a string with clothes pegs, swinging as they land
  T["clothesline-timeline"] = function (w, p) {
    S.set(p.set || "countryside");
    var ev = arr(p.events).slice(0, 6);
    if (!ev.length) ev = [{ when: "", text: "" }];
    var n = ev.length;
    var rows = PORT ? (n > 3 ? 2 : 1) : n > 4 && !LAND ? 2 : 1;
    var per = Math.ceil(n / rows);
    var times = keyTimes(ev, function (e) { return keyOf(e, ["when", "text"]); }, { start: 0.6 });
    var top0 = p.title ? V.height * (PORT ? 0.2 : 0.26) : V.height * 0.16;
    var rowH = (V.height * (PORT ? 0.88 : 0.86) - top0) / rows;
    var lineSvg = svgBox(DW, DH);
    lineSvg.classList.add("pp-full");
    w.mid.appendChild(lineSvg);
    var lm = "";
    var cards = 0;
    for (var r = 0; r < rows; r++) {
      var y0 = top0 + r * rowH;
      var Y = y0 / V.unit, sag = 40;
      lm += '<path d="M-10 ' + f1(Y) + " Q" + f1(DW / 2) + " " + f1(Y + sag * 2) + " " + f1(DW + 10) + " " + f1(Y) + '" fill="none" stroke="#F7F1E3" stroke-width="4"/>' + '<path d="M-10 ' + f1(Y + 5) + " Q" + f1(DW / 2) + " " + f1(Y + sag * 2 + 5) + " " + f1(DW + 10) + " " + f1(Y + 5) + '" fill="none" stroke="rgba(40,24,8,0.2)" stroke-width="4"/>';
      var m = Math.min(per, n - r * per);
      var cw = Math.min((V.width * 0.9) / per - u(24), u(PORT ? 440 : 400)), chh = Math.min(rowH * 0.78, cw * 1.1);
      for (var j = 0; j < m; j++) {
        var i = r * per + j;
        var tt = (j + 0.5) / per + (per - m) / per / 2;
        var cx = V.width * (0.05 + 0.9 * tt);
        var ly = y0 + (4 * (sag * V.unit) * tt * (1 - tt)) * 1.0;
        var e = ev[i];
        var hold = abs(w.mid, cx - cw / 2, ly - u(8), cw, null, "pp-hang");
        var card = sheet(null, { color: NOTE_COLORS[(i + 2) % NOTE_COLORS.length], edge: "cut", seed: 800 + i });
        card.classList.add("pp-hangcard");
        card.style.minHeight = f1(chh * 0.7) + "px";
        var wh = el("div.pp-when", { parent: card.content, text: e.when || "" });
        wh.style.fontSize = u(PORT ? 54 : 60) + "px";
        var tx = el("div.pp-hangtext", { parent: card.content });
        tx.appendChild(S.rich(e.text || ""));
        tx.style.fontSize = u(PORT ? 34 : 36) + "px";
        var pc = makePiece(card, { parent: hold, origin: "50% 0%", r: (h01(i, 3) - 0.5) * 6 });
        pc.place(ct(times[i]), "slide-down", { dur: 0.6 });
        pc.wiggle(ct(times[i] + 0.6), 1.6, 7);
        var peg = svgBox(26, 70);
        peg.innerHTML = paperMk("round", 26, 70, C.woodLt, { radius: 0.4, seed: 820 + i }) + lineMk(13, 6, 13, 64, "rgba(80,40,10,0.4)", 2) + '<circle cx="13" cy="40" r="4" fill="#9A9A9A"/>';
        var pg = makePiece(peg, { parent: hold, x: cw / 2, y: -u(4), w: u(26), h: u(70) });
        pg.place(ct(times[i] + 0.15), "pop");
        V.fit(wh, { maxLines: 1, min: u(24) });
        V.fit(tx, { maxLines: 4, min: u(18) });
        cards++;
      }
    }
    lineSvg.innerHTML = lm;
    if (p.title) headline(w, p.title, 0.1, { y: PADY() * 0.5 });
  };

  // ───────────────────────── render / fallback ─────────────────────────
  function freshRoot(root) {
    root = root || V.root();
    root.innerHTML = "";
    root.className = "";
    root.removeAttribute("style");
    WORLD = null;
    return root;
  }
  S.templateIds = Object.keys(T);
  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = freshRoot(root);
    var w = newWorld(root);
    fn(w, props || {});
    S.flush();
    return w.root;
  };

  /** Fallback: a paper puppet narrator; the narration's words land on cut-paper tags as spoken. */
  S.fallback = function (root, narration) {
    try {
      root = freshRoot(root);
      var w = newWorld(root);
      S.set(["town", "countryside", "classroom", "kitchen", "ocean", "space"][(V.seed >>> 0) % 6] || "town");
      var who = ["mo", "pip", "otto", "ada", "leo"][(V.seed >>> 0) % 5] || "mo";
      var pup = S.puppet(who, { parent: w.front, x: V.width * (PORT ? 0.24 : 0.17), y: w.set.ground + u(30), height: puppetH() * (PORT ? 0.85 : 1), face: 1 });
      pup.place(0, "hand").talk().look(0, 1);
      var toks = V.words && V.words.length ? V.words.slice() : null;
      if (!toks) {
        var tx = str(narration || V.narration || "").split(/\s+/).filter(Boolean).slice(0, 400);
        var D = DUR();
        toks = tx.map(function (wd, i) { return { word: wd, start: (i / Math.max(1, tx.length)) * D * 0.9, end: ((i + 1) / Math.max(1, tx.length)) * D * 0.9 }; });
      }
      // phrases of up to 5 words, broken at punctuation
      var phrases = [], cur = [], maxW = PORT ? 4 : 6;
      function flushSentence() {
        if (!cur.length) return;
        var k = Math.ceil(cur.length / maxW), per = Math.ceil(cur.length / k);
        for (var a = 0; a < cur.length; a += per) phrases.push(cur.slice(a, a + per));
        cur = [];
      }
      toks.forEach(function (t, i) {
        cur.push(t);
        if (/[.!?;:]$/.test(t.word) || (/,$/.test(t.word) && cur.length >= 3) || i === toks.length - 1) flushSentence();
      });
      phrases = phrases.slice(0, 160);
      var bx = PORT ? PADX() : V.width * 0.34, bw = PORT ? V.width - PADX() * 2 : V.width * 0.6;
      var by = PORT ? V.height * 0.12 : V.height * 0.16, bh = PORT ? V.height * 0.36 : V.height * 0.46;
      phrases.forEach(function (ph, pi) {
        var box = abs(w.top, bx, by, bw, bh, "pp-phrase");
        var txt = S.cutText(ph.map(function (t) { return t.word; }).join(" "), { parent: box, mode: pi % 3 === 2 ? "label" : "strip", size: u(PORT ? 70 : 76), maxLines: 3, maxWidth: bw, seed: pi * 7 + 1 });
        var start = ph[0].start, end = pi + 1 < phrases.length ? phrases[pi + 1][0].start : DUR() + 1;
        txt.pieces.forEach(function (pc, k) {
          var t = txt.pieces.length === ph.length ? ph[k].start - 0.08 : start + k * 0.1;
          pc.place(Math.max(0, t), "hand", { dur: 0.35 });
          if (end < DUR() + 0.5) pc.out(Math.max(t + 0.3, end - 0.25), k % 2 ? "slide-right" : "lift", { dur: 0.3 });
        });
        if (pi % 4 === 1) pup.gesture(start, ["point", "present", "shrug", "think"][(pi >> 2) % 4]);
      });
      S.flush();
      return root;
    } catch (e) {
      V.error("fallback: " + (e && e.message));
      try {
        V.reset();
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "8%", fontSize: u(64) + "px", fontWeight: "900", textAlign: "center", color: C.ink, background: C.kraft, fontFamily: FONTS.block } });
        t.textContent = str(narration || V.narration).split(/\s+/).slice(0, 12).join(" ");
      } catch (e2) {}
    }
  };
})();
