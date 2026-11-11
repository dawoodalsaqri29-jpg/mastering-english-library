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
/* Scene animation engine: ARCHIVAL DOCUMENTARY — the prestige history-documentary look.
 * A dark archive desk under a lamp; procedurally drawn archival materials (sepia photographs with
 * corner mounts, typewritten memos with redactions and stamps, newspaper front pages, parchment maps
 * with animated routes, index cards with red string, timelines, letters, ledgers, film strips)
 * that a slow, weighty Ken Burns camera drifts across. Elegant serif lower-thirds and typed date
 * stamps; lamp flicker, dust motes, film grain, gate weave and vignette. Pure function of time.
 */
(function () {
  "use strict";
  var V = window.V;
  var S = window.SceneStyle;
  if (!V || !S) return;
  var el = V.el;
  var NS = "http://www.w3.org/2000/svg";

  S.init({
    id: "archival-doc",
    kind: "documentary",
    enter: "fade",
    titleReveal: "fade",
    drift: 0.02,
    series: ["#C8963E", "#8C7F6A", "#A3352A", "#6E8B8A", "#D9C29A", "#5C4A36"],
    background: function (bg) { paintDeskBg(bg); },
  });

  // ───────────────────────── basics ─────────────────────────
  var C = {
    bg: "#15110D", fg: "#EDE3D0", accent: "#C8963E", muted: "#8C7F6A", soft: "#BFB29A",
    paper: "#E8DDC4", paper2: "#DCCDAA", news: "#E2D8C0", card: "#F1EADA", manila: "#D9C08E",
    parchment: "#E2CFA2", ink: "#2A2118", ink2: "#3B3226", blueInk: "#27304A", red: "#9E2B22",
    stamp: "#A8322A", stampBlue: "#2F4C78", string: "#B0261E", cork: "#8E6A43",
  };
  S.colors = C;
  var SERIF = 'Georgia, "Times New Roman", Times, serif';
  var TIMES = '"Times New Roman", Times, Georgia, serif';
  var TYPE = '"Courier New", Courier, monospace';
  S.fonts = { serif: SERIF, times: TIMES, type: TYPE };
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
  function nid(p) { uid++; return "ad" + (p || "") + uid + "_" + V.seed; }
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
  function px(n) { return f1(n) + "px"; }
  function hexRgb(h) {
    h = str(h).replace("#", "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16) || 0;
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function mixHex(a, b, p) {
    var A = hexRgb(a), B = hexRgb(b);
    return "rgb(" + Math.round(lerp(A[0], B[0], p)) + "," + Math.round(lerp(A[1], B[1], p)) + "," + Math.round(lerp(A[2], B[2], p)) + ")";
  }
  function rgba(h, a) { var c = hexRgb(h); return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")"; }
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
  function grainTex() {
    return canvasUrl("grain", 160, 160, function (g, w, h, r) {
      var img = g.createImageData(w, h);
      for (var i = 0; i < img.data.length; i += 4) {
        var v = Math.floor(r() * 255);
        img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
        img.data[i + 3] = 46;
      }
      g.putImageData(img, 0, 0);
    });
  }
  /** Paper fibres, specks and foxing (transparent, dark marks only). */
  function paperTex() {
    return canvasUrl("paper", 256, 256, function (g, w, h, r) {
      var i;
      for (i = 0; i < 2600; i++) {
        g.fillStyle = "rgba(70,48,24," + (0.02 + r() * 0.07).toFixed(3) + ")";
        g.fillRect(r() * w, r() * h, 1 + r() * 1.4, 1 + r() * 1.4);
      }
      g.lineWidth = 0.6;
      for (i = 0; i < 70; i++) {
        var x = r() * w, y = r() * h, a = r() * Math.PI;
        g.strokeStyle = "rgba(90,64,30," + (0.05 + r() * 0.08).toFixed(3) + ")";
        g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + Math.cos(a) * 6 + r() * 4, y + Math.sin(a) * 6, x + Math.cos(a) * 12, y + Math.sin(a) * 12); g.stroke();
      }
      for (i = 0; i < 7; i++) {
        var fx = r() * w, fy = r() * h, fr = 2 + r() * 7;
        var gr = g.createRadialGradient(fx, fy, 0, fx, fy, fr);
        gr.addColorStop(0, "rgba(120,72,28,0.22)"); gr.addColorStop(1, "rgba(120,72,28,0)");
        g.fillStyle = gr; g.beginPath(); g.arc(fx, fy, fr, 0, 7); g.fill();
      }
    });
  }
  function woodTex() {
    return canvasUrl("wood", 512, 512, function (g, w, h, r) {
      g.fillStyle = "#24190F"; g.fillRect(0, 0, w, h);
      // planks
      for (var p = 0; p < 4; p++) {
        var y0 = (p * h) / 4;
        g.fillStyle = "rgba(" + (40 + Math.floor(r() * 14)) + "," + (27 + Math.floor(r() * 10)) + "," + (16 + Math.floor(r() * 6)) + ",1)";
        g.fillRect(0, y0, w, h / 4);
        for (var l = 0; l < 46; l++) {
          var yy = y0 + r() * (h / 4), amp = 1 + r() * 5, ph = r() * 6, fr = 0.004 + r() * 0.01;
          g.strokeStyle = r() > 0.5 ? "rgba(12,8,4," + (0.12 + r() * 0.22).toFixed(2) + ")" : "rgba(92,64,38," + (0.06 + r() * 0.12).toFixed(2) + ")";
          g.lineWidth = 0.5 + r() * 1.6;
          g.beginPath();
          for (var x = 0; x <= w; x += 16) {
            var yv = yy + Math.sin(x * fr + ph) * amp + Math.sin(x * fr * 3.1 + ph * 2) * amp * 0.3;
            if (x === 0) g.moveTo(x, yv); else g.lineTo(x, yv);
          }
          g.stroke();
        }
        g.fillStyle = "rgba(0,0,0,0.55)"; g.fillRect(0, y0, w, 2);
        g.fillStyle = "rgba(120,90,55,0.10)"; g.fillRect(0, y0 + 2, w, 1);
      }
      for (var k = 0; k < 3; k++) { // knots
        var kx = r() * w, ky = r() * h;
        g.strokeStyle = "rgba(10,6,3,0.35)";
        for (var q = 1; q < 6; q++) { g.lineWidth = 0.8; g.beginPath(); g.ellipse(kx, ky, q * 3.2, q * 1.5, 0, 0, 7); g.stroke(); }
      }
    });
  }
  function corkTex() {
    return canvasUrl("cork", 256, 256, function (g, w, h, r) {
      g.fillStyle = C.cork; g.fillRect(0, 0, w, h);
      for (var i = 0; i < 5200; i++) {
        var v = r();
        g.fillStyle = v < 0.45 ? "rgba(60,38,18," + (0.25 + r() * 0.4).toFixed(2) + ")" : v < 0.8 ? "rgba(178,138,88," + (0.25 + r() * 0.4).toFixed(2) + ")" : "rgba(30,18,8,0.5)";
        var s = 0.8 + r() * 2.6;
        g.beginPath(); g.ellipse(r() * w, r() * h, s, s * (0.5 + r() * 0.6), r() * 3, 0, 7); g.fill();
      }
    });
  }
  function feltTex() {
    return canvasUrl("felt", 200, 200, function (g, w, h, r) {
      g.fillStyle = "#1C2119"; g.fillRect(0, 0, w, h);
      for (var i = 0; i < 3000; i++) {
        g.fillStyle = r() > 0.5 ? "rgba(255,255,240,0.025)" : "rgba(0,0,0,0.08)";
        g.fillRect(r() * w, r() * h, 1 + r() * 2, 1);
      }
    });
  }
  S.textures = { grain: grainTex, paper: paperTex, wood: woodTex, cork: corkTex, felt: feltTex };

  /** CSS background for an aged sheet of paper of colour `color`. */
  function paperBg(color, edge) {
    var t = paperTex();
    var e = edge != null ? edge : 0.3;
    return {
      backgroundColor: color,
      backgroundImage: (t ? "url(" + t + ")," : "") + "radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 52%, rgba(105,70,28," + e + ") 100%)",
      backgroundSize: (t ? u(260) + "px " + u(260) + "px," : "") + "100% 100%",
    };
  }
  S.paperBg = paperBg;
  function applyStyle(node, st) { for (var k in st) node.style[k] = st[k]; return node; }

  // ───────────────────────── photographic tones ─────────────────────────
  var TONES = {
    sepia: ["#22160C", "#7E5C3E", "#EFDFBD"],
    silver: ["#121212", "#6E6B66", "#ECE9E2"],
    cyanotype: ["#0D2738", "#3D6B86", "#DCE7E4"],
    faded: ["#5A4936", "#A28B6C", "#F1E6CC"],
    modern: ["#0B0B0C", "#6A6C70", "#F4F4F2"],
  };
  S.tones = Object.keys(TONES);
  function toneFn(name) {
    var t = TONES[name] || TONES.sepia;
    var a = hexRgb(t[0]), b = hexRgb(t[1]), c = hexRgb(t[2]);
    var cache = {};
    var fn = function (v) {
      v = clamp(v, 0, 1);
      var k = Math.round(v * 100);
      if (cache[k]) return cache[k];
      var p = k / 100, x, y, q;
      if (p < 0.5) { x = a; y = b; q = p * 2; } else { x = b; y = c; q = (p - 0.5) * 2; }
      cache[k] = "rgb(" + Math.round(lerp(x[0], y[0], q)) + "," + Math.round(lerp(x[1], y[1], q)) + "," + Math.round(lerp(x[2], y[2], q)) + ")";
      return cache[k];
    };
    fn.name_ = name;
    return fn;
  }
  S.tone = toneFn;

  // ───────────────────────── desk world + camera ─────────────────────────
  var A = null; // current archive desk
  function cur() { if (!A) S.desk(); return A; }

  function paintSurface(node, kind, W, H) {
    var M = Math.max(W, H);
    if (kind === "cork") {
      var ct = corkTex();
      applyStyle(node, { backgroundColor: C.cork, backgroundImage: ct ? "url(" + ct + ")" : "none", backgroundSize: u(300) + "px " + u(300) + "px" });
    } else if (kind === "felt") {
      var ft = feltTex();
      applyStyle(node, { backgroundColor: "#1C2119", backgroundImage: ft ? "url(" + ft + ")" : "none", backgroundSize: u(240) + "px " + u(240) + "px" });
    } else if (kind === "lightbox") {
      applyStyle(node, { backgroundColor: "#0E0B08" });
    } else if (kind === "black") {
      applyStyle(node, { backgroundColor: "#0B0907" });
    } else if (kind === "leather") {
      applyStyle(node, { backgroundColor: "#2B1712", backgroundImage: "radial-gradient(ellipse at 50% 50%, #3A2019 0%, #1E0F0B 100%)" });
    } else {
      var wt = woodTex();
      applyStyle(node, { backgroundColor: "#24190F", backgroundImage: wt ? "url(" + wt + ")" : "none", backgroundSize: f1(M * 0.62) + "px " + f1(M * 0.62) + "px" });
    }
  }
  /** Backdrop used by the shared S.background (custom code that calls S.stage first). */
  function paintDeskBg(bg) {
    var W = V.width, H = V.height;
    var s = el("div", { parent: bg, style: { position: "absolute", inset: "0" } });
    paintSurface(s, "wood", W, H);
    el("div", { parent: bg, style: { position: "absolute", inset: "0", background: "radial-gradient(ellipse at 42% 38%, rgba(255,196,120,0.22) 0%, rgba(0,0,0,0) 46%, rgba(0,0,0,0.6) 100%)" } });
  }

  /**
   * Create the archive desk. opts: surface (wood|cork|felt|leather|lightbox|black), width/height (world px,
   * default frame size), lamp:{x,y,r} (world px), camera:{x,y,zoom}, drift (0..2), grain, flicker, dust,
   * scratches, vignette (booleans), tint.
   */
  S.desk = function (root, opts) {
    opts = opts || {};
    root = root || V.root();
    root.classList.add("pack-archival-doc", "kind-documentary");
    var W = V.width, H = V.height;
    var ww = opts.width || W, wh = opts.height || H;
    var frame = el("div.ad-frame", { parent: root });
    var cam = el("div.ad-cam", { parent: frame });
    var surfKind = opts.surface || "wood";
    var table = el("div.ad-table", { parent: cam, style: { left: px(-ww * 0.7), top: px(-wh * 0.7), width: px(ww * 2.4), height: px(wh * 2.4) } });
    paintSurface(table, surfKind, W, H);
    var lamp = opts.lamp || {};
    var lx = lamp.x != null ? lamp.x : ww * 0.46, ly = lamp.y != null ? lamp.y : wh * 0.42;
    var lr = lamp.r != null ? lamp.r : Math.max(ww, wh) * 0.75;
    var pool = el("div.ad-pool", { parent: cam, style: { left: px(lx - lr), top: px(ly - lr), width: px(lr * 2), height: px(lr * 2) } });
    if (surfKind === "lightbox") pool.classList.add("ad-pool-box");
    var items = el("div.ad-items", { parent: cam, style: { width: px(ww), height: px(wh) } });
    var strings = sv("svg", { class: "ad-strings", width: f1(ww), height: f1(wh), viewBox: "0 0 " + f1(ww) + " " + f1(wh) }, cam);
    var hud = el("div.ad-hud", { parent: frame });
    var fx = el("div.ad-fx", { parent: frame });
    var defsSvg = sv("svg", { class: "ad-defs", width: 0, height: 0 }, frame);
    var defs = sv("defs", null, defsSvg);
    A = {
      root: root, frame: frame, cam: cam, table: table, pool: pool, items: items, strings: strings, hud: hud, fx: fx, defs: defs,
      W: W, H: H, ww: ww, wh: wh, surface: surfKind, moves: [], shakes: [], list: [], dirty: true,
      drift: opts.drift != null ? opts.drift : 1, tl: V.timeline(), flickerAmt: opts.flicker === false ? 0 : opts.flicker != null ? +opts.flicker : 1,
    };
    var z0 = Math.min(W / ww, H / wh);
    var c0 = opts.camera || {};
    A.cam0 = { x: c0.x != null ? c0.x : ww / 2, y: c0.y != null ? c0.y : wh / 2, z: c0.zoom != null ? c0.zoom : z0, r: c0.rot || 0 };
    buildFx(A, opts);
    V.onFrame(frameUpdate);
    return A;
  };
  S.world = function () { return cur(); };

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
  function camState(t) {
    camPrepare();
    return camUpTo(A.moves.length, t);
  }
  function addMove(m) {
    var a = cur();
    m.i = a.moves.length;
    m.at = cT(m.at || 0);
    m.dur = Math.max(0.01, m.dur != null ? m.dur : 1.6);
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
    return (cover ? Math.max(zx, zy) : Math.min(zx, zy)) * (fill || 0.86);
  }
  var sharedCamera = S.camera;
  var camApi = function (node, amount) { if (typeof sharedCamera === "function") return sharedCamera(node, amount); };
  /** Glide the camera to world point (x,y) at `zoom` (1 = world px = screen px). */
  camApi.to = function (x, y, zoom, at, dur, opts) {
    opts = opts || {};
    addMove({ to: { x: x, y: y, z: Math.max(0.05, zoom || 1), r: opts.rot }, at: at, dur: dur, ease: opts.ease });
    return camApi;
  };
  /** Frame an item / rect. opts: zoom (multiplier), fill (0..1 of frame, default .86), cover (fill the frame,
   *  cropping), anchor [fx,fy] (point of the rect to centre), rot, ease. */
  camApi.focus = function (target, at, dur, opts) {
    opts = opts || {};
    var r = rectOf(target);
    var z = fitZoom(r, opts.fill, opts.cover) * (opts.zoom || 1);
    var an = opts.anchor || [0.5, 0.5];
    var pt = target && target.point ? target.point(an[0], an[1]) : { x: r.x + r.w * an[0], y: r.y + r.h * an[1] };
    addMove({ to: { x: pt.x, y: pt.y, z: z, r: opts.rot }, at: at, dur: dur, ease: opts.ease });
    return camApi;
  };
  /** Show the whole world (or opts.fill of it). */
  camApi.wide = function (at, dur, opts) {
    opts = opts || {};
    var a = cur();
    addMove({ to: { x: a.ww / 2, y: a.wh / 2, z: Math.min(a.W / a.ww, a.H / a.wh) * (opts.fill || 1), r: opts.rot || 0 }, at: at, dur: dur, ease: opts.ease });
    return camApi;
  };
  /** Ken Burns on an item: cut to `from` at `at`, then drift to `to` over `dur`.
   *  from/to: { fx, fy, zoom } — fx/fy are fractions of the item, zoom multiplies the "cover" zoom. */
  camApi.kenBurns = function (target, at, dur, opts) {
    opts = opts || {};
    var r = rectOf(target);
    var base = opts.cover === false ? fitZoom(r, opts.fill || 1, false) : Math.min(fitZoom(r, opts.fill || 1, true), fitZoom(r, opts.fill || 1, false) * 1.3);
    var from = opts.from || { fx: 0.5, fy: 0.5, zoom: 1 };
    var to = opts.to || { fx: 0.5, fy: 0.5, zoom: 1.15 };
    function P(o) { return target && target.point ? target.point(o.fx, o.fy) : { x: r.x + r.w * o.fx, y: r.y + r.h * o.fy }; }
    var a = P(from), b = P(to);
    if (opts.cut !== false) addMove({ to: { x: a.x, y: a.y, z: base * (from.zoom || 1), r: from.rot }, at: at, dur: 0.01 });
    addMove({ to: { x: b.x, y: b.y, z: base * (to.zoom || 1), r: to.rot }, at: at + 0.011, dur: dur || 4, ease: opts.ease || "inOutSine" });
    return camApi;
  };
  /** Follow a moving target: fn(t) → {x,y,zoom}. The camera blends into it over `blend` seconds. */
  camApi.track = function (fn, at, blend, opts) {
    opts = opts || {};
    addMove({ track: function (t) { var p = fn(t); return { x: p.x, y: p.y, z: p.zoom || p.z || 1, r: p.rot }; }, at: at, dur: blend || 0.8, ease: opts.ease || "inOutSine" });
    return camApi;
  };
  /** Thump the table (stamp, slam). amp in px. */
  camApi.shake = function (at, amp, dur) { cur().shakes.push({ at: cT(at), amp: amp != null ? amp : u(9), dur: dur || 0.45 }); return camApi; };
  /** Handheld drift amount (0 = locked off, 1 = default, 2 = restless). */
  camApi.drift = function (amount) { cur().drift = amount; return camApi; };
  /** Camera state {x,y,z,r} at time t (world px). */
  camApi.state = function (t) { cur(); return camState(t == null ? V.time() : t); };
  /** Screen position of a world point at time t. */
  camApi.toScreen = function (x, y, t) { cur(); return worldToScreen(camState(t == null ? V.time() : t), x, y); };
  S.camera = camApi;

  function worldToScreen(c, x, y) {
    var a = A, rr = (c.r * Math.PI) / 180, cs = Math.cos(rr), sn = Math.sin(rr);
    var dx = (x - c.x) * c.z, dy = (y - c.y) * c.z;
    return { x: a.W / 2 + dx * cs - dy * sn, y: a.H / 2 + dx * sn + dy * cs };
  }

  function frameUpdate(t) {
    var a = A;
    if (!a) return;
    var c = camState(t);
    var d = a.drift;
    var x = c.x, y = c.y, z = c.z, r = c.r;
    if (d) {
      x += (Math.sin(t * 0.21 + 0.7) * u(7) + Math.sin(t * 0.53) * u(2.2)) * d / z;
      y += (Math.cos(t * 0.17 + 1.3) * u(5) + Math.sin(t * 0.47 + 2) * u(1.6)) * d / z;
      z *= 1 + 0.006 * d * Math.sin(t * 0.13 + 0.4);
      r += 0.12 * d * Math.sin(t * 0.11 + 2.1);
    }
    // gate weave (film projector) + shakes, in screen px
    var fr = Math.floor(t * 24);
    var ox = (hash01(fr * 1.3) - 0.5) * u(1.1), oy = (hash01(fr * 2.7 + 5) - 0.5) * u(1.4);
    for (var i = 0; i < a.shakes.length; i++) {
      var s = a.shakes[i], k = t - s.at;
      if (k >= 0 && k < s.dur) {
        var dec = Math.pow(1 - k / s.dur, 2);
        ox += Math.sin(k * 47) * s.amp * dec;
        oy += Math.cos(k * 39) * s.amp * dec * 0.8;
      }
    }
    a.cam.style.transform = "translate(" + f2(a.W / 2 + ox) + "px," + f2(a.H / 2 + oy) + "px) rotate(" + r.toFixed(3) + "deg) scale(" + z.toFixed(4) + ") translate(" + f2(-x) + "px," + f2(-y) + "px)";
    // cull items that are fully off-screen (cheaper frames, no stray text outside the frame)
    var cc = { x: x, y: y, z: z, r: r };
    for (var j = 0; j < a.list.length; j++) {
      var it = a.list[j];
      if (it.cull === false) continue;
      var R = it.rect, m = Math.max(R.w, R.h) * 0.12 + (it.cullPad || 0);
      var p1 = worldToScreen(cc, R.x - m, R.y - m), p2 = worldToScreen(cc, R.x + R.w + m, R.y + R.h + m);
      var p3 = worldToScreen(cc, R.x - m, R.y + R.h + m), p4 = worldToScreen(cc, R.x + R.w + m, R.y - m);
      var minX = Math.min(p1.x, p2.x, p3.x, p4.x), maxX = Math.max(p1.x, p2.x, p3.x, p4.x);
      var minY = Math.min(p1.y, p2.y, p3.y, p4.y), maxY = Math.max(p1.y, p2.y, p3.y, p4.y);
      var off = maxX < 0 || minX > a.W || maxY < 0 || minY > a.H;
      if (off !== it._off) { it._off = off; it.el.style.visibility = off ? "hidden" : ""; }
    }
    // lamp flicker
    if (a.flick) {
      var n = vnoise(t * 7, 3) * 0.6 + vnoise(t * 19, 9) * 0.4;
      var dip = hash01(Math.floor(t * 3) + 17) > 0.93 ? 0.5 : 0;
      a.flick.style.opacity = (a.flickerAmt * (0.03 + n * 0.07 + dip * 0.06)).toFixed(3);
      if (a.poolGlow) a.poolGlow.style.opacity = (0.86 + (1 - n) * 0.14 - dip * 0.08).toFixed(3);
    }
    if (a.grain) a.grain.style.transform = "translate(" + Math.round(hash01(fr) * u(150)) + "px," + Math.round(hash01(fr + 99) * u(150)) + "px)";
    if (a.scratch) {
      for (var q = 0; q < a.scratch.length; q++) {
        var sc = a.scratch[q], hv = hash01(fr * 3.1 + q * 17.3);
        if (hv > 0.82) {
          sc.style.display = "";
          sc.style.transform = "translateX(" + f1(hash01(fr + q * 7) * a.W) + "px)";
          sc.style.opacity = (0.15 + hash01(fr + q) * 0.3).toFixed(2);
        } else sc.style.display = "none";
      }
    }
    if (a.specks) {
      for (var w = 0; w < a.specks.length; w++) {
        var sp = a.specks[w], hv2 = hash01(fr * 5.7 + w * 31.1);
        if (hv2 > 0.88) {
          sp.style.display = "";
          sp.style.transform = "translate(" + f1(hash01(fr * 1.7 + w) * a.W) + "px," + f1(hash01(fr * 2.3 + w * 3) * a.H) + "px) rotate(" + Math.round(hash01(fr + w * 9) * 180) + "deg)";
        } else sp.style.display = "none";
      }
    }
    if (a.dust) {
      for (var k2 = 0; k2 < a.dust.length; k2++) {
        var D = a.dust[k2];
        var yy = ((D.y - t * D.v) % 1 + 1) % 1;
        var xx = D.x + Math.sin(t * D.f + D.ph) * 0.03;
        var tw = 0.35 + 0.65 * vnoise(t * 0.8 + D.ph * 3, k2);
        D.e.style.transform = "translate(" + f1(xx * a.W) + "px," + f1(yy * a.H) + "px)";
        D.e.style.opacity = (D.o * tw).toFixed(3);
      }
    }
  }

  function buildFx(a, opts) {
    var fx = a.fx, W = a.W, H = a.H;
    // lamp glow in the world (moves with the camera)
    a.poolGlow = a.pool;
    if (opts.dust !== false) {
      a.dust = [];
      var r = V.makeRand(V.seed * 7 + 3);
      for (var i = 0; i < 22; i++) {
        var s = u(1.2 + r() * 3.4);
        var e = el("i.ad-mote", { parent: fx, style: { width: px(s), height: px(s), filter: s > u(3.6) ? "blur(" + f1(s * 0.35) + "px)" : "none" } });
        a.dust.push({ e: e, x: 0.08 + r() * 0.84, y: r(), v: 0.006 + r() * 0.02, f: 0.2 + r() * 0.5, ph: r() * 6, o: 0.25 + r() * 0.5 });
      }
    }
    el("div.ad-vignette", { parent: fx });
    a.flick = el("div.ad-flicker", { parent: fx });
    if (opts.scratches !== false) {
      a.scratch = [];
      for (var k = 0; k < 2; k++) a.scratch.push(el("i.ad-scratch", { parent: fx, style: { display: "none", height: px(H), width: px(Math.max(1, u(1.4))) } }));
      a.specks = [];
      for (var j = 0; j < 4; j++) a.specks.push(el("i.ad-speck", { parent: fx, style: { display: "none", width: px(u(3 + j * 2)), height: px(u(2 + (j % 2) * 3)) } }));
    }
    if (opts.grain !== false) {
      var g = grainTex();
      if (g) a.grain = el("div.ad-grain", { parent: fx, style: { inset: px(-u(160)), backgroundImage: "url(" + g + ")", backgroundSize: px(u(220)) + " " + px(u(220)) } });
    }
    if (opts.letterbox) {
      var lb = V.isLandscape ? H * 0.06 : 0;
      if (lb) { el("div.ad-bar", { parent: fx, style: { top: "0", height: px(lb) } }); el("div.ad-bar", { parent: fx, style: { bottom: "0", height: px(lb) } }); }
    }
  }
  /** Add an item (any element placed on the desk) so the camera can frame it and it is culled off-screen. */
  function register(item) { cur().list.push(item); return item; }

  // ───────────────────────── items on the desk ─────────────────────────
  /**
   * Base item: a positioned, rotated element on the desk. x,y = top-left in world px; w,h size; rot deg.
   * Returns { el, x, y, w, h, rot, rect, point(fx,fy) }.
   */
  function makeItem(kind, o) {
    var a = cur();
    var w = o.w, h = o.h;
    var x = o.x != null ? o.x : o.cx != null ? o.cx - w / 2 : (a.ww - w) / 2;
    var y = o.y != null ? o.y : o.cy != null ? o.cy - h / 2 : (a.wh - h) / 2;
    var rot = o.rot || 0;
    var node = el("div.ad-item.ad-" + kind, { parent: o.parent || a.items, style: { left: px(x), top: px(y), width: px(w), height: px(h), transform: "rotate(" + f2(rot) + "deg)", zIndex: o.z != null ? o.z : "" } });
    var it = {
      el: node, kind: kind, x: x, y: y, w: w, h: h, rot: rot, rect: { x: x, y: y, w: w, h: h }, cull: o.cull,
      point: function (fx, fy) {
        var ra = (rot * Math.PI) / 180, dx = (fx - 0.5) * w, dy = (fy - 0.5) * h;
        return { x: x + w / 2 + dx * Math.cos(ra) - dy * Math.sin(ra), y: y + h / 2 + dx * Math.sin(ra) + dy * Math.cos(ra) };
      },
    };
    if (!o.parent) register(it);
    if (o.at != null || o.enter) S.place(it, o.at != null ? o.at : 0, o.enter || "slide", o);
    return it;
  }
  S.item = function (kind, opts) { return makeItem(kind || "custom", opts || { w: u(400), h: u(300) }); };

  /**
   * Bring an item onto the desk at `at`. style: slide (pushed in from the side, settles), drop (lowered
   * onto the table), spin (newspaper spin), develop (photo develops from white), fade, none.
   * opts.from: "left" | "right" | "top" | "bottom" for slide.
   */
  S.place = function (item, at, style, opts) {
    opts = opts || {};
    var tl = cur().tl, n = item.el || item;
    at = cT(at);
    var dir = opts.from || (item.x != null && item.x + (item.w || 0) / 2 < cur().ww / 2 ? "left" : "right");
    var dist = Math.max(cur().W, cur().H) * 0.5;
    switch (style) {
      case "none": break;
      case "fade":
        tl.fromTo(n, { opacity: 0 }, { opacity: 1 }, { at: at, dur: opts.dur || 1.2, ease: "inOutSine" });
        break;
      case "drop":
        tl.fromTo(n, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.35, ease: "outQuad" });
        tl.fromTo(n, { scale: 1.14, y: -u(30) }, { scale: 1, y: 0 }, { at: at, dur: opts.dur || 0.95, ease: "outCubic" });
        break;
      case "spin":
        tl.fromTo(n, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.25, ease: "outQuad" });
        tl.fromTo(n, { scale: 0.04, rotate: -1080 }, { scale: 1, rotate: 0 }, { at: at, dur: opts.dur || 1.5, ease: "outCubic" });
        break;
      case "develop":
        tl.fromTo(n, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.5, ease: "outQuad" });
        if (item.dev) tl.fromTo(item.dev, { opacity: 1 }, { opacity: 0 }, { at: at + 0.2, dur: opts.dur || 2.2, ease: "inOutSine" });
        break;
      default: {
        var dx = dir === "left" ? -dist : dir === "right" ? dist : 0, dy = dir === "top" ? -dist : dir === "bottom" ? dist : u(50);
        tl.fromTo(n, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.3, ease: "outQuad" });
        tl.fromTo(n, { x: dx, y: dy, rotate: dir === "left" ? -9 : 9 }, { x: 0, y: 0, rotate: 0 }, { at: at, dur: opts.dur || 1.25, ease: "outCubic" });
      }
    }
    return item;
  };
  S.removeItem = function (item, at, opts) {
    opts = opts || {};
    var n = item.el || item;
    cur().tl.to(n, { opacity: 0, x: opts.x || 0, y: opts.y != null ? opts.y : -u(20) }, { at: cT(at), dur: opts.dur || 0.8, ease: "inCubic" });
    return item;
  };

  // ───────────────────────── HUD: lower-thirds, date stamps, subtitles ─────────────────────────
  function hudShade(where) {
    var a = cur();
    if (a["shade_" + where]) return;
    a["shade_" + where] = el("div.ad-shade.ad-shade-" + where, { parent: a.hud });
  }
  /** Character-by-character typing of `node` from `t0` at `cps` chars/second (keeps layout stable). */
  function typeInto(node, text, t0, cps, opts) {
    opts = opts || {};
    text = str(text);
    var on = el("span.ad-on", { parent: node }), off = el("span.ad-off", { parent: node, text: text });
    var caret = opts.caret ? el("span.ad-caret", { parent: node, text: opts.caret === true ? "▌" : opts.caret }) : null;
    var last = -1;
    var dur = text.length / (cps || 18);
    V.onFrame(function (t) {
      var n = t < t0 ? 0 : Math.min(text.length, Math.floor((t - t0) * (cps || 18)) + 1);
      if (n !== last) { last = n; on.textContent = text.slice(0, n); off.textContent = text.slice(n); }
      if (caret) caret.style.opacity = t < t0 - 0.4 ? 0 : n < text.length ? 1 : (Math.floor(t * 2) % 2 ? 1 : 0) * (t > t0 + dur + 1.6 ? 0 : 1);
    });
    return t0 + dur;
  }
  S.typeInto = typeInto;

  /** Elegant serif lower-third. opts: sub, at, end, align ("left"|"center"), kicker. */
  S.lowerThird = function (title, opts) {
    opts = opts || {};
    var a = cur(), tl = a.tl;
    hudShade("bottom");
    var at = cT(opts.at != null ? opts.at : 0.6);
    var center = opts.align === "center" || V.isPortrait;
    var box = el("div.ad-lt" + (center ? ".ad-lt-c" : ""), { parent: a.hud });
    var kick = opts.kicker ? el("div.ad-lt-kick", { parent: box, text: plain(opts.kicker) }) : null;
    var rule = el("i.ad-lt-rule", { parent: box });
    var ti = el("div.ad-lt-title", { parent: box });
    ti.appendChild(S.rich(title));
    var sub = opts.sub ? el("div.ad-lt-sub", { parent: box, text: plain(opts.sub) }) : null;
    V.fit(ti, { maxLines: 2, min: u(26) });
    if (sub) V.fit(sub, { maxLines: 2, min: u(18) });
    tl.fromTo(rule, { scaleX: 0 }, { scaleX: 1 }, { at: at, dur: 0.9, ease: "inOutCubic" });
    if (kick) tl.fromTo(kick, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.8, ease: "inOutSine" });
    tl.fromTo(ti, { opacity: 0, letterSpacing: "0.16em", y: u(8) }, { opacity: 1, letterSpacing: "0.04em", y: 0 }, { at: at + 0.25, dur: 1.4, ease: "outCubic" });
    if (sub) tl.fromTo(sub, { opacity: 0, y: u(10) }, { opacity: 1, y: 0 }, { at: at + 0.7, dur: 1.1, ease: "outCubic" });
    if (opts.end != null && opts.end < V.duration - 0.3) tl.to(box, { opacity: 0 }, { at: cT(opts.end), dur: 0.6, ease: "inOutSine" });
    return { el: box, title: ti, sub: sub, at: at };
  };

  /** Typed date stamp in a corner. opts: sub (place), at, end, pos: tl | tr | bl | br, cps. */
  S.dateStamp = function (text, opts) {
    opts = opts || {};
    var a = cur(), tl = a.tl;
    var at = cT(opts.at != null ? opts.at : 0.3);
    var pos = opts.pos || "tl";
    var box = el("div.ad-date.ad-pos-" + pos, { parent: a.hud });
    hudShade(pos[0] === "t" ? "top" : "bottom");
    var line = el("div.ad-date-main", { parent: box });
    var end = typeInto(line, plain(text).toUpperCase(), at, opts.cps || 16, { caret: true });
    var rule = el("i.ad-date-rule", { parent: box });
    tl.fromTo(rule, { scaleX: 0 }, { scaleX: 1 }, { at: end, dur: 0.6, ease: "outCubic" });
    var sub = null;
    if (opts.sub) {
      sub = el("div.ad-date-sub", { parent: box, text: plain(opts.sub) });
      tl.fromTo(sub, { opacity: 0 }, { opacity: 1 }, { at: end + 0.15, dur: 0.9, ease: "inOutSine" });
    }
    if (opts.end != null && opts.end < V.duration - 0.3) tl.to(box, { opacity: 0 }, { at: cT(opts.end), dur: 0.6 });
    return { el: box, at: at, typed: end };
  };

  /** Centred italic subtitle (documentary caption). opts: at, end, size. */
  S.subtitle = function (text, opts) {
    opts = opts || {};
    var a = cur(), tl = a.tl;
    hudShade("bottom");
    var at = cT(opts.at != null ? opts.at : 0.3);
    var box = el("div.ad-subtitle", { parent: a.hud });
    box.appendChild(S.rich(text));
    if (opts.size) box.style.fontSize = px(opts.size);
    V.fit(box, { maxLines: V.isPortrait ? 4 : 3, min: u(22) });
    tl.fromTo(box, { opacity: 0, y: u(8) }, { opacity: 1, y: 0 }, { at: at, dur: 0.6, ease: "outCubic" });
    if (opts.end != null && opts.end < V.duration - 0.2) tl.to(box, { opacity: 0 }, { at: cT(opts.end), dur: 0.35, ease: "inQuad" });
    return { el: box, at: at };
  };

  /** Big centred title card text (HUD). opts: kicker, sub, date, at, size. Returns { el, title, land }. */
  S.titleCard = function (title, opts) {
    opts = opts || {};
    var a = cur(), tl = a.tl;
    var at = cT(opts.at != null ? opts.at : 0.4);
    var box = el("div.ad-tc", { parent: a.hud });
    var kick = opts.kicker ? el("div.ad-tc-kick", { parent: box, text: plain(opts.kicker) }) : null;
    var r1 = el("i.ad-tc-rule", { parent: box });
    var ti = el("div.ad-tc-title", { parent: box });
    ti.appendChild(S.rich(title));
    if (opts.size) ti.style.fontSize = px(opts.size);
    V.fit(ti, { maxLines: V.isPortrait ? 4 : 3, min: u(40) });
    var r2 = el("i.ad-tc-rule", { parent: box });
    var sub = opts.sub ? el("div.ad-tc-sub", { parent: box, text: plain(opts.sub) }) : null;
    if (sub) V.fit(sub, { maxLines: 2, min: u(20) });
    var date = opts.date ? el("div.ad-tc-date", { parent: box }) : null;
    if (kick) tl.fromTo(kick, { opacity: 0, letterSpacing: "0.6em" }, { opacity: 1, letterSpacing: "0.38em" }, { at: at, dur: 1.6, ease: "outCubic" });
    tl.fromTo([r1, r2], { scaleX: 0 }, { scaleX: 1 }, { at: at + 0.3, dur: 1.2, ease: "inOutCubic" });
    var tt = opts.titleAt != null ? Math.max(at + 0.3, opts.titleAt) : at + 0.5;
    tl.fromTo(ti, { opacity: 0, letterSpacing: "0.14em", filter: "blur(" + f1(u(8)) + "px)" }, { opacity: 1, letterSpacing: "0.02em", filter: "blur(0px)" }, { at: tt, dur: 1.8, ease: "outCubic" });
    tl.set(ti, { filter: "none" }, { at: tt + 1.85 });
    if (sub) tl.fromTo(sub, { opacity: 0, y: u(10) }, { opacity: 1, y: 0 }, { at: tt + 0.9, dur: 1.2, ease: "outCubic" });
    var land = tt + 1.2;
    if (date) land = typeInto(date, plain(opts.date).toUpperCase(), tt + 1.4, 14, { caret: false });
    return { el: box, title: ti, land: land };
  };

  /** Fade the whole frame from/to black. */
  S.fadeIn = function (at, dur) {
    var a = cur();
    var b = el("div.ad-black", { parent: a.fx });
    a.tl.fromTo(b, { opacity: 1 }, { opacity: 0 }, { at: cT(at || 0), dur: dur || 1.2, ease: "inOutSine" });
    return b;
  };
  S.fadeOut = function (at, dur) {
    var a = cur();
    var b = el("div.ad-black", { parent: a.fx });
    a.tl.fromTo(b, { opacity: 0 }, { opacity: 1 }, { at: cT(at), dur: dur || 1, ease: "inOutSine" });
    return b;
  };

  /** Compatibility with the shared helpers: desk + a padded flex column on top of it (screen space). */
  S.stage = function (root, opts) {
    opts = opts || {};
    if (!A || (root && A.root !== root)) S.desk(root || V.root(), { surface: opts.surface });
    var st = el("div.v-stage.ad-stage", { parent: cur().hud });
    if (opts.align === "top") st.classList.add("v-top");
    return st;
  };

  // ───────────────────────── canvas text (print on paper: crisp under camera zoom) ─────────────────────────
  var mctx = null;
  function mc() { if (!mctx) { try { mctx = document.createElement("canvas").getContext("2d"); } catch (e) { mctx = null; } } return mctx; }
  function fontStr(o, size) { return (o.style || "normal") + " " + (o.weight || "normal") + " " + f2(size) + "px " + (o.font || SERIF); }
  function setLS(g, o, size) { try { if ("letterSpacing" in g) g.letterSpacing = o.letterSpacing ? f2(o.letterSpacing * size) + "px" : "0px"; } catch (e) {} }
  function measure(text, o, size) {
    var g = mc();
    if (!g) return text.length * size * 0.55;
    g.font = fontStr(o, size); setLS(g, o, size);
    var w = g.measureText(text).width;
    if (o.letterSpacing && !("letterSpacing" in g)) w += text.length * o.letterSpacing * size;
    return w;
  }
  function wrapMeasured(text, o, size, width) {
    if (!width || o.wrap === false) return text.split("\n");
    var out = [];
    text.split("\n").forEach(function (para) {
      var words = para.split(/\s+/).filter(Boolean), line = "";
      if (!words.length) { out.push(""); return; }
      words.forEach(function (wd) {
        var tryL = line ? line + " " + wd : wd;
        if (!line || measure(tryL, o, size) <= width) line = tryL;
        else { out.push(line); line = wd; }
      });
      out.push(line);
    });
    return out;
  }
  /**
   * Render text into a <canvas> element (printed matter on the desk). opts: size, min, font, weight, style,
   * color, width (wrap/box width), maxWidth (single line shrink), maxLines, maxHeight, align (left|center|right),
   * lineHeight, letterSpacing (em), upper, res, cls, css (style object), parent.
   * Returns { el, w, h, size, lines, lh, set(text) }.
   */
  function textCanvas(parent, text, o) {
    o = o || {};
    text = plain(text);
    if (o.upper) text = text.toUpperCase();
    var size = o.size || u(30), min = o.min || Math.max(4, size * 0.3);
    var lhF = o.lineHeight || 1.2;
    var lines, maxW;
    for (var it = 0; it < 30; it++) {
      lines = wrapMeasured(text, o, size, o.width);
      maxW = 0;
      for (var i = 0; i < lines.length; i++) maxW = Math.max(maxW, measure(lines[i], o, size));
      var ok = (!o.maxLines || lines.length <= o.maxLines) && (!o.maxHeight || lines.length * size * lhF <= o.maxHeight) && (!o.maxWidth || maxW <= o.maxWidth) && (!o.width || maxW <= o.width + 0.5);
      if (ok || size <= min) break;
      size = Math.max(min, size * 0.93);
    }
    if (o.maxLines && lines.length > o.maxLines) { lines = lines.slice(0, o.maxLines); lines[o.maxLines - 1] = lines[o.maxLines - 1].replace(/\s*\S*$/, "") + "…"; }
    var lh = size * lhF;
    var cw = Math.max(2, o.width || Math.min(o.maxWidth || 1e9, maxW + size * 0.15));
    var ch = Math.max(2, lines.length * lh + size * 0.12);
    var k = o.res || 2.2;
    while (cw * ch * k * k > 5e6 && k > 1) k -= 0.2;
    var cv = document.createElement("canvas");
    cv.className = "ad-tx" + (o.cls ? " " + o.cls : "");
    cv.width = Math.ceil(cw * k); cv.height = Math.ceil(ch * k);
    cv.style.width = px(cw); cv.style.height = px(ch);
    if (o.css) applyStyle(cv, o.css);
    var res = { el: cv, w: cw, h: ch, size: size, lines: lines, lh: lh };
    function draw(ls) {
      var g;
      try { g = cv.getContext("2d"); } catch (e) { return; }
      if (!g) return;
      g.setTransform(k, 0, 0, k, 0, 0);
      g.clearRect(0, 0, cw, ch);
      g.font = fontStr(o, size); setLS(g, o, size);
      g.fillStyle = o.color || C.ink;
      g.textBaseline = "alphabetic";
      if (o.shadow) { g.shadowColor = o.shadow; g.shadowBlur = size * 0.1; }
      for (var j = 0; j < ls.length; j++) {
        var lw = measure(ls[j], o, size);
        var x = o.align === "center" ? (cw - lw) / 2 : o.align === "right" ? cw - lw - size * 0.05 : 0;
        if (o.justify && j < ls.length - 1 && lw > cw * 0.75) {
          var wds = ls[j].split(" "), tot = 0;
          wds.forEach(function (wd) { tot += measure(wd, o, size); });
          var gap = wds.length > 1 ? (cw - tot) / (wds.length - 1) : 0, xx = 0;
          wds.forEach(function (wd) { g.fillText(wd, xx, j * lh + (lh - size) / 2 + size * 0.82); xx += measure(wd, o, size) + gap; });
        } else g.fillText(ls[j], x, j * lh + (lh - size) / 2 + size * 0.82);
      }
    }
    draw(lines);
    res.set = function (t2) { draw([plain(t2)]); };
    if (parent) parent.appendChild(cv);
    return res;
  }
  S.textCanvas = textCanvas;
  function charW(font, size) { return measure("0000000000", { font: font }, size) / 10; }
  /** Count a canvas number up from 0 to num between at and at+dur. */
  function countCanvas(tc, num, fmt, at, dur, ease) {
    var last = null, e = E(ease || "outCubic");
    V.onFrame(function (t) {
      var p = clamp((t - at) / Math.max(0.01, dur), 0, 1);
      var s = fmt(p >= 1 ? num : num * e(p));
      if (s !== last) { last = s; tc.set(s); }
    });
  }
  S.countCanvas = countCanvas;

  // ───────────────────────── archival photograph subjects (procedural SVG) ─────────────────────────
  // Each subject draws a stylised period photograph in tonal values T(v) (0 = shadow, 1 = highlight)
  // so the same drawing prints as sepia, silver gelatin, cyanotype or faded.
  function P(g, d, fill, extra) { var a = { d: d, fill: fill || "none" }; if (extra) for (var k in extra) a[k] = extra[k]; return sv("path", a, g); }
  function R(g, x, y, w, h, fill, extra) { var a = { x: f1(x), y: f1(y), width: f1(Math.max(0, w)), height: f1(Math.max(0, h)), fill: fill }; if (extra) for (var k in extra) a[k] = extra[k]; return sv("rect", a, g); }
  function Ci(g, cx, cy, r, fill, extra) { var a = { cx: f1(cx), cy: f1(cy), r: f1(r), fill: fill }; if (extra) for (var k in extra) a[k] = extra[k]; return sv("circle", a, g); }
  function El(g, cx, cy, rx, ry, fill, extra) { var a = { cx: f1(cx), cy: f1(cy), rx: f1(rx), ry: f1(ry), fill: fill }; if (extra) for (var k in extra) a[k] = extra[k]; return sv("ellipse", a, g); }
  function Ln(g, x1, y1, x2, y2, stroke, w, extra) { var a = { x1: f1(x1), y1: f1(y1), x2: f1(x2), y2: f1(y2), stroke: stroke, "stroke-width": w || 1 }; if (extra) for (var k in extra) a[k] = extra[k]; return sv("line", a, g); }
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
  /** Ridge line from x0 to x1 around baseline y, closed to `bottom`. */
  function ridge(x0, x1, y, amp, r, steps, bottom, rough) {
    var pts = [], n = steps || 10;
    var ph = r() * 10, ph2 = r() * 10;
    for (var i = 0; i <= n; i++) {
      var x = lerp(x0, x1, i / n);
      var yy = y - Math.abs(Math.sin(i * 0.9 + ph)) * amp * 0.7 - Math.sin(i * 2.3 + ph2) * amp * 0.25 - (rough ? (r() - 0.5) * amp * 0.3 : 0);
      pts.push([x, yy]);
    }
    return smoothPath(pts) + " L" + f1(x1) + " " + f1(bottom) + " L" + f1(x0) + " " + f1(bottom) + " Z";
  }
  function skyRect(g, defs, T, w, h, top, bottom) {
    R(g, 0, 0, w, h, lgrad(defs, [[0, T(top)], [1, T(bottom)]]));
  }
  function clouds(g, T, r, n, w, y0, y1, v) {
    for (var i = 0; i < n; i++) {
      var cx = r() * w, cy = lerp(y0, y1, r()), s = 14 + r() * 26;
      var cg = sv("g", { opacity: (0.35 + r() * 0.4).toFixed(2) }, g);
      for (var k = 0; k < 5; k++) El(cg, cx + (k - 2) * s * 0.55 + r() * 6, cy - Math.sin((k / 4) * Math.PI) * s * 0.35, s * (0.5 + r() * 0.4), s * (0.32 + r() * 0.2), T(v != null ? v : 0.93));
    }
  }
  /** Billowing smoke trail from (x,y) drifting along (dx,dy). */
  function smoke(g, T, r, x, y, dx, dy, n, size, v, op) {
    var sg = sv("g", { opacity: op != null ? op : 0.85 }, g);
    for (var i = 0; i < n; i++) {
      var p = i / n;
      var rr = size * (0.5 + p * 1.9) * (0.8 + r() * 0.4);
      El(sg, x + dx * p + (r() - 0.5) * size * p, y + dy * p + (r() - 0.5) * size * 0.6 * p, rr, rr * 0.8, T(clamp((v != null ? v : 0.3) + p * 0.45, 0, 1)), { opacity: (1 - p * 0.75).toFixed(2) });
    }
  }
  /** Standing figure silhouette, feet at (x, footY), height h. opts: hat (bowler|cap|top|boater|none), skirt. */
  function figure(g, T, x, footY, h, v, r, opts) {
    opts = opts || {};
    var c = T(v), top = footY - h;
    var hr = h * 0.068, hy = top + hr * 1.2, sw = h * 0.13;
    var neck = hy + hr * 0.95, hip = footY - h * 0.47;
    var d;
    if (opts.skirt) {
      d = "M" + f1(x - sw * 0.85) + " " + f1(neck + h * 0.03) + " Q" + f1(x) + " " + f1(neck - h * 0.02) + " " + f1(x + sw * 0.85) + " " + f1(neck + h * 0.03) +
        " L" + f1(x + sw * 0.7) + " " + f1(hip - h * 0.05) + " L" + f1(x + sw * 1.4) + " " + f1(footY) + " L" + f1(x - sw * 1.4) + " " + f1(footY) + " L" + f1(x - sw * 0.7) + " " + f1(hip - h * 0.05) + " Z";
    } else {
      var leg = sw * 0.42, coat = opts.coat !== false;
      d = "M" + f1(x - sw) + " " + f1(neck + h * 0.035) + " Q" + f1(x) + " " + f1(neck - h * 0.02) + " " + f1(x + sw) + " " + f1(neck + h * 0.035) +
        " L" + f1(x + sw * 1.05) + " " + f1(coat ? footY - h * 0.27 : hip) + " L" + f1(x + leg * 1.25) + " " + f1(coat ? footY - h * 0.27 : hip) +
        " L" + f1(x + leg * 1.2) + " " + f1(footY) + " L" + f1(x + leg * 0.1) + " " + f1(footY) + " L" + f1(x) + " " + f1(hip + h * 0.05) + " L" + f1(x - leg * 0.1) + " " + f1(footY) + " L" + f1(x - leg * 1.2) + " " + f1(footY) +
        " L" + f1(x - leg * 1.25) + " " + f1(coat ? footY - h * 0.27 : hip) + " L" + f1(x - sw * 1.05) + " " + f1(coat ? footY - h * 0.27 : hip) + " Z";
    }
    P(g, d, c);
    Ci(g, x, hy, hr, c);
    var hat = opts.hat || "none";
    if (hat === "bowler") { El(g, x, hy - hr * 0.5, hr * 1.5, hr * 0.32, c); El(g, x, hy - hr * 0.85, hr * 0.95, hr * 0.8, c); }
    else if (hat === "top") { El(g, x, hy - hr * 0.55, hr * 1.5, hr * 0.3, c); R(g, x - hr * 0.85, hy - hr * 2.4, hr * 1.7, hr * 1.9, c); }
    else if (hat === "cap") { El(g, x + hr * 0.3, hy - hr * 0.6, hr * 1.35, hr * 0.55, c); }
    else if (hat === "boater") { El(g, x, hy - hr * 0.5, hr * 1.7, hr * 0.28, c); R(g, x - hr * 0.95, hy - hr * 1.35, hr * 1.9, hr * 0.85, c); }
  }
  var HATS = ["bowler", "cap", "top", "boater", "none", "bowler", "cap"];

  /** Detailed vintage portrait bust (300×400 space). */
  function portraitBust(g, defs, T, r, female, clipId) {
    var skin = rgrad(defs, [[0, T(0.86)], [0.55, T(0.62)], [1, T(0.36)]], 0.4, 0.38, 0.75, 0.36, 0.3);
    var hairV = 0.06 + r() * 0.16;
    if (!female) {
      P(g, "M-10 400 C0 334 58 300 104 292 L196 292 C242 300 300 334 310 400 Z", T(0.12));
      P(g, "M104 292 L136 296 L150 372 L118 336 Z", T(0.2));
      P(g, "M196 292 L164 296 L150 372 L182 336 Z", T(0.17));
      P(g, "M130 280 L150 336 L170 280 L162 270 L138 270 Z", T(0.88));
      if (r() > 0.4) P(g, "M145 292 L155 292 L159 342 L150 354 L141 342 Z", T(0.08));
      else P(g, "M136 286 L150 294 L164 286 L164 300 L150 294 L136 300 Z", T(0.08));
    } else {
      P(g, "M-6 400 C6 340 64 310 108 300 L192 300 C236 310 294 340 306 400 Z", T(0.2));
      P(g, "M120 300 Q150 318 180 300 L188 344 Q150 360 112 344 Z", T(0.3), { opacity: 0.6 });
      R(g, 126, 244, 48, 58, T(0.78));
      for (var sc = 0; sc < 7; sc++) Ci(g, 128 + sc * 7.3, 246, 4, T(0.88));
      Ci(g, 150, 304, 7, T(0.9), { stroke: T(0.25), "stroke-width": 1.5 });
    }
    P(g, female ? "M134 236 L166 236 L166 262 L150 268 L134 262 Z" : "M128 232 L172 232 L170 284 L150 292 L130 284 Z", T(0.5));
    El(g, 150, female ? 238 : 244, female ? 22 : 26, 8, T(0.32), { opacity: 0.7 });
    var hx = 150, hy = female ? 182 : 186, rx = female ? 44 : 50, ry = female ? 58 : 64;
    if (female) {
      P(g, "M92 196 C78 122 118 96 152 98 C192 98 226 124 210 198 C204 160 190 142 150 140 C112 142 100 162 98 200 Z", T(hairV));
      El(g, 150, 98, 34, 20, T(hairV));
    }
    El(g, hx - rx + 2, hy + 6, 8, 15, T(0.55));
    El(g, hx + rx - 2, hy + 6, 8, 15, T(0.42));
    El(g, hx, hy, rx, ry, skin);
    var fg = sv("g", { "clip-path": "url(#" + clipId + ")" }, g);
    sv("clipPath", { id: clipId }, defs).appendChild(sv("ellipse", { cx: hx, cy: hy, rx: rx, ry: ry }));
    P(fg, "M" + (hx + rx * 0.35) + " " + (hy - ry) + " Q" + (hx + rx * 1.1) + " " + hy + " " + (hx + rx * 0.3) + " " + (hy + ry) + " L" + (hx + rx + 4) + " " + (hy + ry) + " L" + (hx + rx + 4) + " " + (hy - ry) + " Z", T(0.24), { opacity: 0.45 });
    // eyes, brows, nose, mouth
    var ey = hy - 4;
    [-1, 1].forEach(function (s) {
      El(fg, hx + s * 19, ey, 12, 7, T(0.42), { opacity: 0.55 });
      El(fg, hx + s * 19, ey + 1, 6.5, 3.2, T(0.85));
      Ci(fg, hx + s * 19, ey + 1, 3.2, T(0.1));
      P(fg, "M" + (hx + s * 8) + " " + (ey - 11) + " Q" + (hx + s * 19) + " " + (ey - (female ? 17 : 15)) + " " + (hx + s * 31) + " " + (ey - 10), "none", { stroke: T(female ? 0.22 : 0.12), "stroke-width": female ? 2 : 3.4, "stroke-linecap": "round" });
    });
    P(fg, "M" + (hx - 2) + " " + (ey + 6) + " L" + (hx - 7) + " " + (ey + 30) + " Q" + hx + " " + (ey + 35) + " " + (hx + 8) + " " + (ey + 30), "none", { stroke: T(0.34), "stroke-width": 2, "stroke-linecap": "round" });
    El(fg, hx + 5, ey + 27, 9, 5, T(0.4), { opacity: 0.5 });
    var my = ey + 47;
    if (!female) {
      var st = Math.floor(r() * 4);
      if (st === 1) P(fg, "M" + (hx - 22) + " " + (my - 2) + " Q" + (hx - 10) + " " + (my - 12) + " " + hx + " " + (my - 8) + " Q" + (hx + 10) + " " + (my - 12) + " " + (hx + 22) + " " + (my - 2) + " Q" + (hx + 10) + " " + (my - 4) + " " + hx + " " + (my - 2) + " Q" + (hx - 10) + " " + (my - 4) + " " + (hx - 22) + " " + (my - 2) + " Z", T(hairV + 0.04));
      else if (st === 2) P(fg, "M" + (hx - 34) + " " + (my - 18) + " Q" + (hx - 30) + " " + (my + 30) + " " + hx + " " + (my + 34) + " Q" + (hx + 30) + " " + (my + 30) + " " + (hx + 34) + " " + (my - 18) + " Q" + (hx + 18) + " " + (my + 6) + " " + hx + " " + (my - 6) + " Q" + (hx - 18) + " " + (my + 6) + " " + (hx - 34) + " " + (my - 18) + " Z", T(hairV + 0.06));
      else if (st === 3) P(fg, "M" + (hx - 30) + " " + (my + 2) + " Q" + (hx - 16) + " " + (my - 12) + " " + hx + " " + (my - 8) + " Q" + (hx + 16) + " " + (my - 12) + " " + (hx + 30) + " " + (my + 2) + " Q" + (hx + 14) + " " + (my - 3) + " " + hx + " " + (my - 2) + " Q" + (hx - 14) + " " + (my - 3) + " " + (hx - 30) + " " + (my + 2) + " Z", T(hairV + 0.04));
      P(fg, "M" + (hx - 11) + " " + (my + 2) + " Q" + hx + " " + (my + 5) + " " + (hx + 11) + " " + (my + 2), "none", { stroke: T(0.28), "stroke-width": 2.2, "stroke-linecap": "round" });
    } else {
      P(fg, "M" + (hx - 11) + " " + my + " Q" + hx + " " + (my - 4) + " " + (hx + 11) + " " + my + " Q" + hx + " " + (my + 7) + " " + (hx - 11) + " " + my + " Z", T(0.36));
    }
    // hair over the head
    if (!female) {
      var part = r() > 0.5 ? 1 : -1;
      P(g, "M" + (hx - rx - 2) + " " + (hy - 8) + " C" + (hx - rx - 6) + " " + (hy - ry - 10) + " " + (hx - 18) + " " + (hy - ry - 14) + " " + hx + " " + (hy - ry - 12) + " C" + (hx + 30) + " " + (hy - ry - 12) + " " + (hx + rx + 6) + " " + (hy - ry + 6) + " " + (hx + rx + 2) + " " + (hy - 6) +
        " C" + (hx + rx - 6) + " " + (hy - ry + 22) + " " + (hx + part * 12) + " " + (hy - ry + 12) + " " + (hx + part * 14) + " " + (hy - ry + 6) + " C" + (hx - 20) + " " + (hy - ry + 18) + " " + (hx - rx + 4) + " " + (hy - ry + 26) + " " + (hx - rx - 2) + " " + (hy - 8) + " Z", T(hairV));
      if (r() > 0.6) { // spectacles
        [-1, 1].forEach(function (s) { Ci(g, hx + s * 19, ey + 1, 11, "none", { stroke: T(0.15), "stroke-width": 1.8 }); });
        P(g, "M" + (hx - 8) + " " + ey + " Q" + hx + " " + (ey - 4) + " " + (hx + 8) + " " + ey, "none", { stroke: T(0.15), "stroke-width": 1.8 });
      }
    } else {
      P(g, "M" + (hx - rx - 4) + " " + (hy + 6) + " C" + (hx - rx - 10) + " " + (hy - ry) + " " + (hx - 10) + " " + (hy - ry - 12) + " " + (hx + 6) + " " + (hy - ry - 8) + " C" + (hx + rx + 10) + " " + (hy - ry) + " " + (hx + rx + 8) + " " + (hy - 6) + " " + (hx + rx + 2) + " " + (hy + 8) +
        " C" + (hx + rx - 8) + " " + (hy - ry + 30) + " " + (hx + 6) + " " + (hy - ry + 12) + " " + (hx - 4) + " " + (hy - ry + 14) + " C" + (hx - 26) + " " + (hy - ry + 20) + " " + (hx - rx + 2) + " " + (hy - ry + 34) + " " + (hx - rx - 4) + " " + (hy + 6) + " Z", T(hairV));
      Ci(g, hx - rx + 2, hy + 26, 3, T(0.92));
      Ci(g, hx + rx - 2, hy + 26, 3, T(0.92));
    }
  }

  var SUBJECTS = {};
  S.subjects = SUBJECTS;
  SUBJECTS.portrait = { vb: [300, 400], focus: [0.5, 0.42], draw: function (g, defs, T, r) {
    R(g, 0, 0, 300, 400, rgrad(defs, [[0, T(0.66)], [0.6, T(0.4)], [1, T(0.16)]], 0.42, 0.4, 0.75));
    portraitBust(g, defs, T, r, false, nid("c"));
  } };
  SUBJECTS["portrait-woman"] = { vb: [300, 400], focus: [0.5, 0.42], draw: function (g, defs, T, r) {
    R(g, 0, 0, 300, 400, rgrad(defs, [[0, T(0.7)], [0.6, T(0.44)], [1, T(0.18)]], 0.55, 0.4, 0.75));
    P(g, "M0 260 Q60 230 90 300 L0 400 Z", T(0.3), { opacity: 0.6 });
    portraitBust(g, defs, T, r, true, nid("c"));
  } };
  SUBJECTS.group = { vb: [400, 300], focus: [0.5, 0.42], draw: function (g, defs, T, r) {
    R(g, 0, 0, 400, 300, lgrad(defs, [[0, T(0.7)], [0.75, T(0.55)], [1, T(0.4)]]));
    P(g, "M0 0 Q90 140 60 300 L0 300 Z", T(0.5), { opacity: 0.4 });
    P(g, "M400 0 Q300 120 350 300 L400 300 Z", T(0.48), { opacity: 0.4 });
    R(g, 0, 236, 400, 64, T(0.42));
    function person(x, hy, s, front) {
      var suit = T(0.08 + r() * 0.12);
      P(g, "M" + (x - 26 * s) + " " + (hy + 70 * s) + " Q" + (x - 24 * s) + " " + (hy + 24 * s) + " " + x + " " + (hy + 20 * s) + " Q" + (x + 24 * s) + " " + (hy + 24 * s) + " " + (x + 26 * s) + " " + (hy + 70 * s) + " L" + (x + 26 * s) + " " + (front ? 300 : hy + 130 * s) + " L" + (x - 26 * s) + " " + (front ? 300 : hy + 130 * s) + " Z", suit);
      P(g, "M" + (x - 6 * s) + " " + (hy + 20 * s) + " L" + x + " " + (hy + 38 * s) + " L" + (x + 6 * s) + " " + (hy + 20 * s) + " Z", T(0.9));
      El(g, x, hy, 10 * s, 13 * s, T(0.72));
      El(g, x + 3 * s, hy + 1, 6 * s, 12 * s, T(0.45), { opacity: 0.35 });
      var hv = T(0.06 + r() * 0.2);
      P(g, "M" + (x - 10.5 * s) + " " + (hy - 1) + " Q" + (x - 11 * s) + " " + (hy - 15 * s) + " " + x + " " + (hy - 14 * s) + " Q" + (x + 11 * s) + " " + (hy - 15 * s) + " " + (x + 10.5 * s) + " " + (hy - 1) + " Q" + x + " " + (hy - 9 * s) + " " + (x - 10.5 * s) + " " + (hy - 1) + " Z", hv);
      Ci(g, x - 3.6 * s, hy, 1.2 * s, T(0.15)); Ci(g, x + 3.6 * s, hy, 1.2 * s, T(0.15));
      if (r() > 0.55) P(g, "M" + (x - 5 * s) + " " + (hy + 6 * s) + " Q" + x + " " + (hy + 3 * s) + " " + (x + 5 * s) + " " + (hy + 6 * s), "none", { stroke: hv, "stroke-width": 2 * s });
    }
    var back = 5 + Math.floor(r() * 2), i;
    for (i = 0; i < back; i++) person(60 + (i * 280) / (back - 1), 92 + r() * 6, 1.05);
    var front = back - 1;
    for (i = 0; i < front; i++) person(85 + (i * 230) / Math.max(1, front - 1), 150 + r() * 4, 1.15, true);
    R(g, 0, 270, 400, 30, T(0.3), { opacity: 0.5 });
  } };
  SUBJECTS.crowd = { vb: [400, 300], focus: [0.5, 0.6], draw: function (g, defs, T, r) {
    skyRect(g, defs, T, 400, 300, 0.86, 0.72);
    for (var b = 0; b < 9; b++) {
      var bx = b * 46 - 10 + r() * 10, bh = 70 + r() * 80, bw = 40 + r() * 20;
      R(g, bx, 170 - bh, bw, bh + 60, T(0.6 + r() * 0.08));
      for (var wy = 170 - bh + 8; wy < 170; wy += 12) for (var wx = bx + 5; wx < bx + bw - 6; wx += 9) R(g, wx, wy, 4, 6, T(0.5), { opacity: 0.6 });
    }
    var rows = 9;
    for (var j = 0; j < rows; j++) {
      var p = j / (rows - 1), y = 150 + p * 150, s = 4 + p * 14, v = 0.48 - p * 0.42;
      R(g, 0, y + s * 0.8, 400, 300 - y, T(v));
      var n = Math.ceil(400 / (s * 2.2)) + 2;
      for (var k = 0; k < n; k++) {
        var x = (k + (j % 2) * 0.5) * s * 2.2 - s + (r() - 0.5) * s * 0.8;
        var hy = y + (r() - 0.5) * s * 0.5;
        El(g, x, hy + s * 0.9, s * 1.05, s * 0.8, T(v));
        Ci(g, x, hy, s * 0.62, T(clamp(v + 0.25, 0, 1)));
        var hat = r();
        if (hat < 0.45) { El(g, x, hy - s * 0.35, s * 0.95, s * 0.2, T(v * 0.6)); El(g, x, hy - s * 0.55, s * 0.6, s * 0.42, T(v * 0.6)); }
        else if (hat < 0.75) El(g, x + s * 0.15, hy - s * 0.4, s * 0.78, s * 0.33, T(v * 0.7));
      }
      if (j === 4 || j === 6) for (var q = 0; q < 2; q++) {
        var px0 = 40 + r() * 320, pw = 34 + r() * 30, ph = 20 + r() * 8, py = y - 40 - r() * 20;
        Ln(g, px0 + pw / 2, py + ph, px0 + pw / 2, y + 10, T(0.25), 2);
        R(g, px0, py, pw, ph, T(0.9), { stroke: T(0.3), "stroke-width": 1 });
        for (var tl = 0; tl < 2; tl++) R(g, px0 + 4, py + 5 + tl * 7, pw - 8 - r() * 10, 3, T(0.22));
      }
    }
  } };
  SUBJECTS.city = { vb: [400, 300], focus: [0.55, 0.45], draw: function (g, defs, T, r) {
    skyRect(g, defs, T, 400, 300, 0.85, 0.66);
    clouds(g, T, r, 4, 400, 30, 80, 0.92);
    var x = -5;
    while (x < 405) { var w = 14 + r() * 26, h = 40 + r() * 70; R(g, x, 200 - h, w, h + 20, T(0.62)); if (r() > 0.8) P(g, "M" + (x + w / 2 - 3) + " " + (200 - h) + " L" + (x + w / 2) + " " + (200 - h - 26) + " L" + (x + w / 2 + 3) + " " + (200 - h) + " Z", T(0.62)); x += w - 2; }
    x = -10;
    while (x < 410) {
      var w2 = 26 + r() * 34, h2 = 60 + r() * 110;
      if (r() > 0.75) h2 += 40;
      R(g, x, 230 - h2, w2, h2 + 10, T(0.36 + r() * 0.08));
      for (var wy = 230 - h2 + 8; wy < 222; wy += 9) for (var wx = x + 4; wx < x + w2 - 5; wx += 7) if (r() > 0.25) R(g, wx, wy, 3, 4, T(0.5 + r() * 0.12));
      if (r() > 0.7) { R(g, x + w2 * 0.3, 230 - h2 - 14, w2 * 0.4, 14, T(0.36)); P(g, "M" + (x + w2 * 0.5) + " " + (230 - h2 - 40) + " L" + (x + w2 * 0.5) + " " + (230 - h2 - 14), "none", { stroke: T(0.36), "stroke-width": 2 }); }
      x += w2 + r() * 4;
    }
    R(g, 0, 26, 30, 260, T(0.16)); for (var a = 30; a < 280; a += 12) R(g, 6, a, 4, 6, T(0.3));
    R(g, 350, 40, 50, 250, T(0.18)); for (var b = 46; b < 280; b += 12) { R(g, 358, b, 5, 6, T(0.32)); R(g, 378, b, 5, 6, T(0.32)); }
    var wt = 362; R(g, wt, 26, 22, 14, T(0.16)); P(g, "M" + wt + " 26 L" + (wt + 11) + " 16 L" + (wt + 22) + " 26 Z", T(0.16));
    smoke(g, T, r, 120, 120, 120, -60, 9, 6, 0.55, 0.6);
    R(g, 0, 230, 400, 70, lgrad(defs, [[0, T(0.42)], [1, T(0.28)]]));
    for (var k = 0; k < 18; k++) R(g, r() * 400, 236 + r() * 60, 10 + r() * 40, 1.5, T(0.6), { opacity: 0.5 });
  } };
  SUBJECTS.street = { vb: [400, 300], focus: [0.5, 0.55], draw: function (g, defs, T, r) {
    var vx = 200, vy = 150;
    skyRect(g, defs, T, 400, 300, 0.88, 0.76);
    R(g, 165, 70, 70, 110, T(0.64));
    for (var fw = 0; fw < 5; fw++) R(g, 170 + fw * 13, 80, 6, 90, T(0.6), { opacity: 0.5 });
    function wall(side) {
      var s = side, x0 = s < 0 ? 0 : 400, x1 = s < 0 ? 168 : 232;
      P(g, "M" + x0 + " 0 L" + x1 + " 108 L" + x1 + " 180 L" + x0 + " 272 Z", T(s < 0 ? 0.3 : 0.44));
      for (var i = 0; i < 9; i++) {
        var d0 = i / 9, d1 = (i + 0.6) / 9;
        var e0 = 1 - Math.pow(1 - d0, 1.6), e1 = 1 - Math.pow(1 - d1, 1.6);
        var xa = lerp(x0, x1, e0), xb = lerp(x0, x1, e1);
        for (var fl = 0; fl < 4; fl++) {
          var ta = lerp(0, 108, e0), ba = lerp(272, 180, e0), tb = lerp(0, 108, e1), bb = lerp(272, 180, e1);
          var f0 = 0.12 + fl * 0.18, f1_ = f0 + 0.1;
          P(g, "M" + f1(xa) + " " + f1(lerp(ta, ba, f0)) + " L" + f1(xb) + " " + f1(lerp(tb, bb, f0)) + " L" + f1(xb) + " " + f1(lerp(tb, bb, f1_)) + " L" + f1(xa) + " " + f1(lerp(ta, ba, f1_)) + " Z", T(s < 0 ? 0.16 : 0.24));
        }
        if (i % 3 === 1) { var aw = lerp(272, 180, e0) - (lerp(272, 180, e0) - lerp(0, 108, e0)) * 0.2; P(g, "M" + f1(xa) + " " + f1(aw) + " L" + f1(xb) + " " + f1(lerp(272, 180, e1) - (lerp(272, 180, e1) - lerp(0, 108, e1)) * 0.2) + " L" + f1(xb) + " " + f1(lerp(272, 180, e1) - (lerp(272, 180, e1) - lerp(0, 108, e1)) * 0.14) + " L" + f1(xa + s * -6) + " " + f1(aw + 10) + " Z", T(0.7)); }
      }
    }
    wall(-1); wall(1);
    P(g, "M0 272 L168 180 L232 180 L400 272 L400 300 L0 300 Z", lgrad(defs, [[0, T(0.62)], [1, T(0.46)]]));
    [-36, -12, 12, 36].forEach(function (o) { Ln(g, vx + o * 0.12, 180, vx + o * 4.2, 300, T(0.36), 1.3); });
    [0.25, 0.55, 0.8].forEach(function (d, i) {
      [-1, 1].forEach(function (s) {
        var x = vx + s * lerp(26, 170, d), fy = lerp(184, 290, d), h = lerp(16, 110, d);
        Ln(g, x, fy, x, fy - h, T(0.12), lerp(0.8, 3, d));
        El(g, x, fy - h, lerp(1.6, 6, d), lerp(2.2, 8, d), T(0.12));
      });
    });
    var figs = 9;
    for (var k = 0; k < figs; k++) {
      var d = r(), side = r() > 0.5 ? 1 : -1;
      var fy2 = lerp(186, 292, d * d), h2 = lerp(10, 70, d * d), x2 = vx + side * lerp(10, 120, d * d) * (0.4 + r() * 0.8);
      figure(g, T, x2, fy2, h2, 0.08 + (1 - d) * 0.35, r, { hat: HATS[Math.floor(r() * HATS.length)], skirt: r() > 0.72 });
    }
    // motor car
    var cx = 236, cy = 236, s2 = 0.9;
    P(g, "M" + (cx - 38 * s2) + " " + cy + " L" + (cx - 36 * s2) + " " + (cy - 16 * s2) + " L" + (cx - 14 * s2) + " " + (cy - 18 * s2) + " L" + (cx - 10 * s2) + " " + (cy - 36 * s2) + " L" + (cx + 18 * s2) + " " + (cy - 36 * s2) + " L" + (cx + 20 * s2) + " " + (cy - 18 * s2) + " L" + (cx + 40 * s2) + " " + (cy - 14 * s2) + " L" + (cx + 40 * s2) + " " + cy + " Z", T(0.1));
    R(g, cx - 6 * s2, cy - 32 * s2, 20 * s2, 12 * s2, T(0.55));
    Ci(g, cx - 24 * s2, cy + 2, 9 * s2, T(0.06)); Ci(g, cx + 26 * s2, cy + 2, 9 * s2, T(0.06));
    Ci(g, cx - 24 * s2, cy + 2, 3.5 * s2, T(0.5)); Ci(g, cx + 26 * s2, cy + 2, 3.5 * s2, T(0.5));
  } };
  SUBJECTS.building = { vb: [400, 300], focus: [0.5, 0.4], draw: function (g, defs, T, r) {
    skyRect(g, defs, T, 400, 300, 0.84, 0.68);
    clouds(g, T, r, 5, 400, 20, 90, 0.94);
    R(g, 0, 246, 400, 54, lgrad(defs, [[0, T(0.58)], [1, T(0.45)]]));
    R(g, 56, 158, 288, 90, T(0.74));
    R(g, 56, 152, 288, 8, T(0.82));
    for (var wx = 64; wx < 336; wx += 14) if (wx < 140 || wx > 252) { R(g, wx, 170, 7, 18, T(0.4)); R(g, wx, 202, 7, 18, T(0.42)); R(g, wx, 230, 7, 12, T(0.44)); }
    R(g, 138, 132, 124, 12, T(0.84));
    P(g, "M134 132 L200 100 L266 132 Z", T(0.78));
    P(g, "M150 128 L200 106 L250 128 Z", T(0.66));
    R(g, 140, 144, 120, 92, T(0.38));
    for (var c = 0; c < 8; c++) { var x = 144 + c * 15.4; R(g, x, 144, 8, 92, T(0.88)); R(g, x + 6, 144, 2, 92, T(0.62)); }
    R(g, 162, 70, 76, 32, T(0.76));
    for (var dc = 0; dc < 9; dc++) R(g, 165 + dc * 8.3, 74, 3.4, 26, T(0.5));
    P(g, "M156 72 C158 26 242 26 244 72 Z", lgrad(defs, [[0, T(0.86)], [1, T(0.58)]], 0, 0, 1, 0));
    for (var rb = 0; rb < 5; rb++) P(g, "M" + (176 + rb * 12) + " 72 Q" + (184 + rb * 8) + " 36 200 30", "none", { stroke: T(0.5), "stroke-width": 0.8, opacity: 0.6 });
    R(g, 192, 14, 16, 18, T(0.8)); P(g, "M190 14 Q200 2 210 14 Z", T(0.7));
    Ln(g, 200, 2, 200, -14, T(0.2), 1); P(g, "M200 -14 L214 -10 L200 -6 Z", T(0.3));
    for (var s = 0; s < 4; s++) R(g, 128 - s * 6, 236 + s * 3.5, 144 + s * 12, 4, T(0.86 - s * 0.05));
    for (var tr = 0; tr < 7; tr++) {
      var tx = tr < 4 ? 6 + tr * 14 : 340 + (tr - 4) * 20, ty = 250;
      for (var b = 0; b < 4; b++) El(g, tx + (r() - 0.5) * 16, ty - 26 - r() * 26, 14 + r() * 8, 18 + r() * 8, T(0.15 + r() * 0.08));
    }
    for (var f = 0; f < 7; f++) figure(g, T, 150 + r() * 100, 252 + r() * 30, 14 + r() * 10, 0.12, r, { hat: HATS[Math.floor(r() * 7)], skirt: r() > 0.7 });
  } };
  SUBJECTS.ship = { vb: [400, 300], focus: [0.55, 0.5], draw: function (g, defs, T, r) {
    skyRect(g, defs, T, 400, 300, 0.86, 0.7);
    clouds(g, T, r, 6, 400, 20, 120, 0.93);
    R(g, 0, 196, 400, 104, lgrad(defs, [[0, T(0.52)], [1, T(0.3)]]));
    P(g, "M0 196 Q40 190 80 194 L110 196 Z", T(0.58), { opacity: 0.8 });
    smoke(g, T, r, 136, 74, -150, -36, 12, 8, 0.25, 0.75);
    smoke(g, T, r, 176, 74, -150, -26, 12, 8, 0.28, 0.7);
    smoke(g, T, r, 216, 74, -150, -18, 12, 8, 0.3, 0.6);
    Ln(g, 74, 150, 78, 36, T(0.18), 2); Ln(g, 316, 150, 312, 40, T(0.18), 2);
    P(g, "M78 40 L136 76 M78 40 L40 150 M312 40 L260 80 M312 40 L362 150 M78 60 L312 60", "none", { stroke: T(0.25), "stroke-width": 0.7 });
    R(g, 92, 126, 214, 34, T(0.82));
    R(g, 120, 110, 158, 18, T(0.86));
    for (var w = 96; w < 300; w += 8) R(g, w, 132, 4, 5, T(0.36));
    for (var w2 = 124; w2 < 274; w2 += 8) R(g, w2, 115, 4, 5, T(0.4));
    for (var lb = 0; lb < 6; lb++) El(g, 112 + lb * 32, 124, 10, 3.5, T(0.92));
    [124, 164, 204, 244].forEach(function (fx) {
      P(g, "M" + fx + " 112 L" + (fx + 4) + " 70 L" + (fx + 26) + " 70 L" + (fx + 24) + " 112 Z", T(0.42));
      P(g, "M" + (fx + 4) + " 70 L" + (fx + 26) + " 70 L" + (fx + 25.4) + " 82 L" + (fx + 3.6) + " 82 Z", T(0.08));
      R(g, fx + 18, 72, 3, 40, T(0.3), { opacity: 0.6 });
    });
    P(g, "M36 158 L344 158 L378 148 L356 206 L64 206 Q44 190 36 158 Z", T(0.1));
    P(g, "M36 158 L344 158 L378 148 L376 154 L346 164 L40 164 Z", T(0.85));
    for (var p = 60; p < 340; p += 10) Ci(g, p, 176, 1.6, T(0.6));
    R(g, 40, 196, 320, 3, T(0.4), { opacity: 0.6 });
    for (var k = 0; k < 40; k++) { var yy = 210 + r() * 90; R(g, r() * 400, yy, 8 + r() * 30 * (yy / 200), 1.4, T(r() > 0.5 ? 0.66 : 0.2), { opacity: 0.6 }); }
    for (var rf = 0; rf < 10; rf++) R(g, 60 + r() * 290, 208 + rf * 3, 10 + r() * 40, 1.6, T(0.08), { opacity: 0.4 });
    P(g, "M10 214 L44 214 L50 206 L22 206 L20 200 L30 200 L30 196 L18 196 Z", T(0.12));
  } };
  SUBJECTS.train = { vb: [400, 300], focus: [0.62, 0.55], draw: function (g, defs, T, r) {
    skyRect(g, defs, T, 400, 300, 0.86, 0.7);
    P(g, ridge(0, 400, 200, 40, r, 8, 300), T(0.66));
    R(g, 0, 226, 400, 74, lgrad(defs, [[0, T(0.48)], [1, T(0.34)]]));
    for (var tp = 0; tp < 5; tp++) { var px0 = 20 + tp * 92; Ln(g, px0, 226, px0, 140, T(0.2), 2); Ln(g, px0 - 8, 146, px0 + 8, 146, T(0.2), 1.6); }
    P(g, "M20 147 Q66 158 112 147 Q158 158 204 147 Q250 158 296 147 Q342 158 388 147", "none", { stroke: T(0.25), "stroke-width": 0.7 });
    smoke(g, T, r, 304, 112, -260, -70, 16, 11, 0.55, 0.9);
    for (var t = 0; t < 40; t++) R(g, t * 10.5, 238, 6, 5, T(0.22));
    R(g, 0, 236, 400, 2.4, T(0.7)); R(g, 0, 243, 400, 2.4, T(0.7));
    R(g, -10, 140, 76, 64, T(0.3)); P(g, "M-10 140 Q28 128 66 140 Z", T(0.24));
    for (var cw = 0; cw < 4; cw++) R(g, -4 + cw * 18, 150, 10, 16, T(0.65));
    Ci(g, 10, 214, 10, T(0.1)); Ci(g, 48, 214, 10, T(0.1));
    R(g, 72, 160, 70, 50, T(0.14)); P(g, "M74 160 Q90 146 106 152 Q122 144 140 160 Z", T(0.06));
    Ci(g, 90, 214, 10, T(0.08)); Ci(g, 124, 214, 10, T(0.08));
    R(g, 142, 120, 52, 80, T(0.12)); R(g, 138, 116, 60, 8, T(0.08)); R(g, 152, 130, 14, 18, T(0.6)); R(g, 172, 130, 14, 18, T(0.6));
    R(g, 192, 148, 128, 46, lgrad(defs, [[0, T(0.32)], [0.4, T(0.18)], [1, T(0.06)]]));
    R(g, 312, 144, 16, 54, T(0.08));
    P(g, "M296 148 L298 118 L292 108 L318 108 L312 118 L314 148 Z", T(0.08));
    El(g, 254, 146, 12, 9, T(0.14)); El(g, 222, 147, 9, 7, T(0.14));
    Ln(g, 196, 158, 312, 158, T(0.5), 1); Ln(g, 196, 180, 312, 180, T(0.4), 1);
    P(g, "M328 200 L352 222 L328 222 Z", T(0.1));
    [208, 248, 288].forEach(function (wx) {
      Ci(g, wx, 210, 17, T(0.06)); Ci(g, wx, 210, 13, T(0.22));
      for (var sp = 0; sp < 8; sp++) { var a = (sp / 8) * Math.PI; Ln(g, wx - Math.cos(a) * 13, 210 - Math.sin(a) * 13, wx + Math.cos(a) * 13, 210 + Math.sin(a) * 13, T(0.08), 1.6); }
      Ci(g, wx, 210, 3, T(0.5));
    });
    Ci(g, 324, 220, 8, T(0.08));
    Ln(g, 208, 216, 288, 216, T(0.55), 3);
    El(g, 330, 150, 4, 6, T(0.9));
  } };
  SUBJECTS.factory = { vb: [400, 300], focus: [0.5, 0.45], draw: function (g, defs, T, r) {
    skyRect(g, defs, T, 400, 300, 0.78, 0.58);
    [[60, 40, 18], [118, 22, 16], [250, 30, 20], [318, 52, 14]].forEach(function (c, i) {
      smoke(g, T, r, c[0] + c[2] / 2, c[1], 180 - i * 20, -40 - i * 6, 14, 10, 0.22 + i * 0.05, 0.85);
    });
    for (var b = 0; b < 6; b++) R(g, b * 70 - 10, 150 - r() * 30, 60, 100, T(0.6));
    [[60, 40, 18], [118, 22, 16], [250, 30, 20], [318, 52, 14]].forEach(function (c) {
      P(g, "M" + c[0] + " 200 L" + (c[0] + c[2] * 0.2) + " " + c[1] + " L" + (c[0] + c[2] * 0.8) + " " + c[1] + " L" + (c[0] + c[2]) + " 200 Z", T(0.2));
      R(g, c[0] + c[2] * 0.12, c[1] + 6, c[2] * 0.76, 3, T(0.4));
      R(g, c[0] + c[2] * 0.15, c[1] + 22, c[2] * 0.7, 3, T(0.38));
    });
    var d = "M0 260 L0 180";
    for (var s = 0; s < 10; s++) d += " L" + (s * 40 + 30) + " 156 L" + (s * 40 + 40) + " 180";
    d += " L400 260 Z";
    P(g, d, T(0.3));
    for (var s2 = 0; s2 < 10; s2++) P(g, "M" + (s2 * 40 + 30) + " 156 L" + (s2 * 40 + 40) + " 180 L" + (s2 * 40 + 38) + " 180 L" + (s2 * 40 + 29) + " 160 Z", T(0.62));
    for (var wy = 192; wy < 250; wy += 18) for (var wx = 8; wx < 400; wx += 16) R(g, wx, wy, 9, 11, T(0.52 + r() * 0.1));
    var tx = 196; Ln(g, tx, 156, tx - 6, 116, T(0.15), 2); Ln(g, tx + 24, 156, tx + 30, 116, T(0.15), 2);
    El(g, tx + 12, 112, 22, 6, T(0.15)); R(g, tx - 10, 92, 44, 20, T(0.15)); P(g, "M" + (tx - 12) + " 92 L" + (tx + 12) + " 80 L" + (tx + 36) + " 92 Z", T(0.12));
    R(g, 0, 260, 400, 40, T(0.36));
    for (var f = 0; f < 40; f++) Ln(g, f * 10 + 3, 258, f * 10 + 3, 280, T(0.15), 1.4);
    Ln(g, 0, 262, 400, 262, T(0.15), 1.2); Ln(g, 0, 272, 400, 272, T(0.15), 1.2);
    R(g, 250, 268, 110, 22, T(0.15)); Ci(g, 268, 292, 6, T(0.08)); Ci(g, 342, 292, 6, T(0.08));
    for (var wk = 0; wk < 5; wk++) figure(g, T, 40 + wk * 34 + r() * 10, 296, 30 + r() * 6, 0.1, r, { hat: "cap" });
  } };
  SUBJECTS.landscape = { vb: [400, 300], focus: [0.5, 0.55], draw: function (g, defs, T, r) {
    skyRect(g, defs, T, 400, 300, 0.9, 0.72);
    clouds(g, T, r, 7, 400, 20, 100, 0.96);
    P(g, ridge(-10, 410, 150, 60, r, 9, 300, true), T(0.7));
    P(g, ridge(-10, 410, 190, 34, r, 7, 300), T(0.54));
    P(g, ridge(-10, 410, 222, 22, r, 6, 300), T(0.42));
    for (var f = 0; f < 9; f++) P(g, "M" + (f * 50 - 60) + " 300 L" + (200 + (f - 4) * 12) + " 222 L" + (206 + (f - 4) * 12) + " 222 L" + (f * 50 - 40) + " 300 Z", T(0.36), { opacity: 0.6 });
    P(g, "M180 300 Q200 260 230 236 Q246 226 252 220 L258 221 Q250 232 238 244 Q214 270 214 300 Z", T(0.74));
    var hx = 262, hy = 220;
    R(g, hx, hy - 16, 26, 16, T(0.86)); P(g, "M" + (hx - 3) + " " + (hy - 16) + " L" + (hx + 13) + " " + (hy - 28) + " L" + (hx + 29) + " " + (hy - 16) + " Z", T(0.2));
    R(g, hx + 30, hy - 22, 26, 22, T(0.3)); P(g, "M" + (hx + 28) + " " + (hy - 22) + " L" + (hx + 43) + " " + (hy - 34) + " L" + (hx + 58) + " " + (hy - 22) + " Z", T(0.16));
    var mx = 120, my = 206;
    P(g, "M" + (mx - 4) + " " + my + " L" + (mx - 2) + " " + (my - 36) + " L" + (mx + 2) + " " + (my - 36) + " L" + (mx + 4) + " " + my + " Z", T(0.22));
    for (var bl = 0; bl < 4; bl++) { var a = bl * 1.57 + 0.4; Ln(g, mx, my - 36, mx + Math.cos(a) * 18, my - 36 + Math.sin(a) * 18, T(0.25), 2.4); }
    for (var tr = 0; tr < 14; tr++) {
      var tx = r() * 400, ty = 200 + r() * 30, ts = 6 + r() * 10;
      El(g, tx, ty - ts, ts * 0.8, ts * 1.1, T(0.14 + r() * 0.12));
      Ln(g, tx, ty, tx, ty - ts * 0.4, T(0.12), 1.4);
    }
    for (var fp = 0; fp < 9; fp++) { var fx = 10 + fp * 45, fy = 290 - fp * 2; R(g, fx, fy - 30, 4, 30, T(0.16)); }
    P(g, "M0 268 Q200 252 400 254 M0 278 Q200 262 400 264", "none", { stroke: T(0.16), "stroke-width": 1.6 });
  } };
  SUBJECTS.aircraft = { vb: [400, 300], focus: [0.5, 0.45], draw: function (g, defs, T, r) {
    skyRect(g, defs, T, 400, 300, 0.9, 0.62);
    clouds(g, T, r, 9, 400, 60, 280, 0.95);
    P(g, ridge(-10, 410, 286, 10, r, 8, 300), T(0.5));
    var pg = sv("g", { transform: "rotate(-8 200 140)" }, g);
    P(pg, "M110 140 L300 132 Q318 134 322 142 Q318 150 300 152 L120 150 Z", T(0.22));
    P(pg, "M110 140 L84 118 L96 116 L124 136 Z", T(0.18));
    P(pg, "M104 146 L76 154 L84 158 L118 150 Z", T(0.2));
    R(pg, 170, 104, 120, 10, T(0.3)); R(pg, 170, 104, 120, 3, T(0.5));
    for (var rb = 0; rb < 8; rb++) Ln(pg, 176 + rb * 15, 104, 176 + rb * 15, 114, T(0.22), 0.8);
    R(pg, 176, 150, 110, 9, T(0.26));
    [190, 214, 254, 276].forEach(function (sx) { Ln(pg, sx, 114, sx + 2, 150, T(0.12), 1.4); });
    Ln(pg, 190, 114, 214, 150, T(0.2), 0.6); Ln(pg, 254, 114, 276, 150, T(0.2), 0.6);
    R(pg, 228, 128, 18, 6, T(0.1));
    El(pg, 326, 142, 6, 34, T(0.85), { opacity: 0.35 });
    El(pg, 324, 142, 4, 5, T(0.1));
    Ln(pg, 240, 152, 232, 172, T(0.12), 1.4); Ln(pg, 256, 152, 262, 172, T(0.12), 1.4);
    Ci(pg, 232, 174, 6, T(0.08)); Ci(pg, 262, 174, 6, T(0.08));
    var p2 = sv("g", { transform: "translate(64 214) scale(0.28) rotate(6 200 140)", opacity: 0.8 }, g);
    P(p2, "M110 140 L300 132 Q318 134 322 142 Q318 150 300 152 L120 150 Z", T(0.32));
    R(p2, 170, 104, 120, 10, T(0.36)); R(p2, 176, 150, 110, 9, T(0.36));
  } };
  SUBJECTS.bridge = { vb: [400, 300], focus: [0.5, 0.5], draw: function (g, defs, T, r) {
    skyRect(g, defs, T, 400, 300, 0.88, 0.7);
    clouds(g, T, r, 4, 400, 20, 80, 0.94);
    P(g, ridge(-10, 410, 196, 26, r, 7, 300), T(0.64));
    R(g, 0, 206, 400, 94, lgrad(defs, [[0, T(0.56)], [1, T(0.34)]]));
    var dy = 176;
    P(g, "M-10 120 Q60 " + (dy - 4) + " 116 64 Q210 " + (dy + 2) + " 304 64 Q350 " + (dy - 6) + " 410 116", "none", { stroke: T(0.18), "stroke-width": 2.2 });
    for (var sx = 0; sx < 400; sx += 9) {
      var cy;
      if (sx < 116) { var p = sx / 116; cy = lerp(120, 64, p) + Math.sin(p * Math.PI) * 30; }
      else if (sx < 304) { var p2 = (sx - 116) / 188; cy = 64 + Math.sin(p2 * Math.PI) * 104; }
      else { var p3 = (sx - 304) / 106; cy = lerp(64, 116, p3) + Math.sin(p3 * Math.PI) * 28; }
      if (cy < dy - 2) Ln(g, sx, cy, sx, dy, T(0.22), 0.6);
    }
    R(g, -10, dy, 420, 7, T(0.16)); R(g, -10, dy + 7, 420, 3, T(0.4));
    [116, 304].forEach(function (tx) {
      R(g, tx - 8, 52, 5, 160, T(0.2)); R(g, tx + 3, 52, 5, 160, T(0.24));
      for (var cb = 0; cb < 4; cb++) R(g, tx - 8, 66 + cb * 34, 16, 4, T(0.2));
      R(g, tx - 10, 206, 20, 10, T(0.25));
    });
    for (var k = 0; k < 30; k++) R(g, r() * 400, 214 + r() * 86, 8 + r() * 30, 1.3, T(r() > 0.5 ? 0.7 : 0.22), { opacity: 0.5 });
    for (var rf = 0; rf < 2; rf++) { var tx2 = rf ? 304 : 116; R(g, tx2 - 6, 220, 12, 60, T(0.25), { opacity: 0.25 }); }
    P(g, "M250 252 L290 252 L284 260 L256 260 Z", T(0.12)); Ln(g, 270, 252, 270, 228, T(0.15), 1.2); P(g, "M271 230 L286 248 L271 248 Z", T(0.85));
  } };
  var SUBJECT_IDS = Object.keys(SUBJECTS);
  S.subjectIds = SUBJECT_IDS;

  /** Pick a photograph subject from free text (narration / labels). */
  S.guessSubject = function (text) {
    var s = " " + str(text).toLowerCase() + " ";
    var rules = [
      [/ship|sea|ocean|navy|voyage|sail|liner|harbou?r|port|titanic|fleet|atlantic/, "ship"],
      [/train|rail|locomotive|steam|station|track/, "train"],
      [/factory|industr|worker|labou?r|steel|mill|mine|coal|strike|manufactur/, "factory"],
      [/plane|flight|aviat|air|pilot|wright|fly|flew|sky/, "aircraft"],
      [/bridge|river crossing|span/, "bridge"],
      [/crowd|protest|march|rally|people|riot|vote|election|celebrat|revolution/, "crowd"],
      [/capitol|government|congress|parliament|senate|court|law|treaty|museum|palace|bank/, "building"],
      [/street|town|shop|market|avenue|village|neighbou?r/, "street"],
      [/city|skyline|new york|london|paris|chicago|urban|skyscraper|metropolis/, "city"],
      [/family|team|group|members|crew|class|band|brothers|founders|soldiers|regiment/, "group"],
      [/farm|land|field|valley|mountain|frontier|west|prairie|harvest|countryside|dust/, "landscape"],
      [/ she | her | woman|women|queen|mother|wife|daughter|lady|suffrag|actress/, "portrait-woman"],
    ];
    for (var i = 0; i < rules.length; i++) if (rules[i][0].test(s)) return rules[i][1];
    return "portrait";
  };

  /** Draw a subject into a new <svg> (fills its parent, cropped like a print). */
  function drawSubject(parent, subject, tone, seed, opts) {
    opts = opts || {};
    var sub = SUBJECTS[subject] || SUBJECTS[S.guessSubject(subject)] || SUBJECTS.portrait;
    var vb = sub.vb;
    var svg = sv("svg", { class: "ad-scene", viewBox: "0 0 " + vb[0] + " " + vb[1], preserveAspectRatio: opts.fit || "xMidYMid slice" }, parent);
    var defs = sv("defs", null, svg);
    var g = sv("g", null, svg);
    var T = typeof tone === "function" ? tone : toneFn(tone || "sepia");
    try { sub.draw(g, defs, T, V.makeRand((hs(subject + ":" + (seed || 0)) ^ 0x9e37) >>> 0 || 3)); } catch (e) { V.error("archival subject " + subject + ": " + e.message); }
    return { svg: svg, focus: sub.focus, vb: vb };
  }
  S.drawSubject = drawSubject;

  // ───────────────────────── photographs ─────────────────────────
  var BORDERS = { white: "#EEE8DA", cream: "#E4D7BA", black: "#1A1714", none: "transparent" };
  function distressTex() {
    return canvasUrl("distress", 200, 200, function (g, w, h, r) {
      g.fillStyle = "#000"; g.fillRect(0, 0, w, h);
      g.globalCompositeOperation = "destination-out";
      for (var i = 0; i < 900; i++) { g.fillStyle = "rgba(0,0,0," + (0.3 + r() * 0.7).toFixed(2) + ")"; g.beginPath(); g.arc(r() * w, r() * h, 0.4 + r() * 1.8, 0, 7); g.fill(); }
      for (var j = 0; j < 14; j++) { g.fillStyle = "rgba(0,0,0,0.5)"; g.beginPath(); g.ellipse(r() * w, r() * h, 3 + r() * 12, 1 + r() * 3, r() * 3, 0, 7); g.fill(); }
    });
  }
  /**
   * An archival photograph print. opts: subject (S.subjectIds or free text), tone (sepia|silver|cyanotype|faded|modern),
   * x,y | cx,cy (world px), w (print width), aspect (image w/h), rot, border (white|cream|black|none), caption
   * (handwritten on the bottom border), mounts (corner mounts, default true), tape, damage (0..1), seed,
   * at + enter (slide|drop|develop|fade|none), parent.
   * Returns item + { img, focus:[fx,fy] (subject's point of interest, item fractions), imgPoint(fx,fy) }.
   */
  S.photo = function (opts) {
    opts = opts || {};
    var a = cur();
    var subject = SUBJECTS[opts.subject] ? opts.subject : S.guessSubject(opts.subject || V.narration);
    var sub = SUBJECTS[subject];
    var asp = opts.aspect || sub.vb[0] / sub.vb[1];
    var w = opts.w || Math.min(a.ww, a.wh) * 0.6;
    var bk = opts.border || "white";
    var b = bk === "none" ? 0 : opts.borderW != null ? opts.borderW : w * 0.045;
    var capH = opts.caption && bk !== "none" ? Math.max(b * 1.6, w * 0.1) : b;
    var imgW = w - 2 * b, imgH = imgW / asp, h = imgH + b + capH;
    var it = makeItem("photo", { x: opts.x, y: opts.y, cx: opts.cx, cy: opts.cy, w: w, h: h, rot: opts.rot, parent: opts.parent, z: opts.z, cull: opts.cull });
    var n = it.el;
    if (bk !== "none") applyStyle(n, paperBg(BORDERS[bk] || bk, bk === "black" ? 0 : 0.22));
    if (opts.shadow === false) n.classList.add("ad-noshadow");
    var img = el("div.ad-ph-img", { parent: n, style: { left: px(b), top: px(b), width: px(imgW), height: px(imgH) } });
    var T = toneFn(opts.tone || "sepia");
    img.style.backgroundColor = T(0.5);
    var ds = drawSubject(img, subject, T, opts.seed != null ? opts.seed : hs(str(opts.caption) + subject) % 997);
    var gt = grainTex();
    if (gt) el("div.ad-ph-grain", { parent: img, style: { backgroundImage: "url(" + gt + ")", backgroundSize: px(u(140)) + " " + px(u(140)) } });
    var dmg = opts.damage != null ? opts.damage : opts.tone === "modern" ? 0.1 : 0.55;
    el("div.ad-ph-vig", { parent: img, style: { opacity: (0.45 + dmg * 0.55).toFixed(2) } });
    if (dmg > 0.05) {
      var r = rng("dmg" + subject + (opts.seed || 0) + f1(w));
      var ds2 = sv("svg", { class: "ad-ph-dmg", viewBox: "0 0 100 100", preserveAspectRatio: "none" }, img);
      var nS = Math.round(2 + dmg * 6);
      for (var i = 0; i < nS; i++) {
        var x0 = r() * 100, y0 = r() * 100, ln = 6 + r() * 22, ang = -1.2 + r() * 0.5;
        sv("path", { d: "M" + f1(x0) + " " + f1(y0) + " q" + f1(Math.cos(ang) * ln * 0.5 + r() * 4) + " " + f1(Math.sin(ang) * ln * 0.5) + " " + f1(Math.cos(ang) * ln) + " " + f1(Math.sin(ang) * ln), fill: "none", stroke: r() > 0.3 ? "rgba(255,248,230,0.32)" : "rgba(20,12,4,0.3)", "stroke-width": f2(0.08 + r() * 0.14), "vector-effect": "none" }, ds2);
      }
      if (dmg > 0.4) sv("path", { d: "M" + f1(r() * 30) + " -2 L" + f1(60 + r() * 40) + " 102", stroke: "rgba(255,250,235,0.16)", "stroke-width": 0.3, fill: "none" }, ds2);
      for (var k = 0; k < Math.round(dmg * 10); k++) sv("circle", { cx: f1(r() * 100), cy: f1(r() * 100), r: f2(0.2 + r() * 0.6), fill: r() > 0.5 ? "rgba(250,244,228,0.7)" : "rgba(20,12,4,0.5)" }, ds2);
    }
    it.dev = el("div.ad-ph-dev", { parent: img, style: { background: T(0.94) } });
    if (opts.caption && bk !== "none") {
      var cap = textCanvas(n, opts.caption, { font: SERIF, style: "italic", size: capH * 0.46, min: capH * 0.2, maxWidth: imgW * 0.96, color: bk === "black" ? "#E8DFC9" : C.blueInk, cls: "ad-ph-cap" });
      cap.el.style.left = px(b + (imgW - cap.w) / 2);
      cap.el.style.top = px(b + imgH + (capH - cap.h) / 2);
      it.cap = cap.el;
    }
    if (opts.mounts !== false && bk !== "none") ["tl", "tr", "bl", "br"].forEach(function (c) { el("i.ad-mount.ad-m-" + c, { parent: n, style: { width: px(w * 0.09), height: px(w * 0.09) } }); });
    if (opts.tape) S.tape(it, 0.5, 0, { w: w * 0.3 });
    // subject focus in item fractions (accounting for the "slice" crop)
    var sc = Math.max(imgW / ds.vb[0], imgH / ds.vb[1]);
    var ox = (imgW - ds.vb[0] * sc) / 2, oy = (imgH - ds.vb[1] * sc) / 2;
    it.focus = [(b + ox + ds.focus[0] * ds.vb[0] * sc) / w, (b + oy + ds.focus[1] * ds.vb[1] * sc) / h];
    it.imgBox = { x0: b / w, y0: b / h, x1: (b + imgW) / w, y1: (b + imgH) / h };
    it.imgRect = function () { var p0 = it.point(it.imgBox.x0, it.imgBox.y0); return { x: p0.x, y: p0.y, w: imgW, h: imgH }; };
    it.subject = subject;
    it.img = img;
    if (opts.at != null || opts.enter) S.place(it, opts.at != null ? opts.at : 0, opts.enter || "slide", opts);
    return it;
  };

  /** A strip of masking tape on an item at (fx, fy). */
  S.tape = function (item, fx, fy, opts) {
    opts = opts || {};
    var w = opts.w || item.w * 0.28;
    return el("i.ad-tape", { parent: item.el, style: { left: px(item.w * fx - w / 2), top: px(item.h * fy - w * 0.14), width: px(w), height: px(w * 0.28), transform: "rotate(" + (opts.rot != null ? opts.rot : -4 + (hs(item.w + "" + fx) % 9)) + "deg)" } });
  };
  /** A push-pin on an item at (fx, fy). Returns world point { x, y }. */
  S.pin = function (item, fx, fy, opts) {
    opts = opts || {};
    var s = opts.size || u(26);
    var p = el("i.ad-pin", { parent: item.el, style: { left: px(item.w * fx - s / 2), top: px(item.h * fy - s / 2), width: px(s), height: px(s) } });
    if (opts.color) p.style.background = "radial-gradient(circle at 35% 30%, #fff8 0%, " + opts.color + " 35%, " + mixHex(opts.color, "#000000", 0.5) + " 100%)";
    return item.point(fx, fy);
  };
  /** Red investigation string between world points p1 → p2, drawn at `at`. opts: color, sag, width, dur. */
  S.string = function (p1, p2, opts) {
    opts = opts || {};
    var a = cur();
    var mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2 + (opts.sag != null ? opts.sag : Math.hypot(p2.x - p1.x, p2.y - p1.y) * 0.08);
    var g = sv("g", null, a.strings);
    sv("path", { d: "M" + f1(p1.x + u(4)) + " " + f1(p1.y + u(6)) + " Q" + f1(mx + u(4)) + " " + f1(my + u(10)) + " " + f1(p2.x + u(4)) + " " + f1(p2.y + u(6)), fill: "none", stroke: "rgba(0,0,0,0.35)", "stroke-width": f1(opts.width || u(4)), "stroke-linecap": "round", class: "ad-str-sh" }, g);
    var path = sv("path", { d: "M" + f1(p1.x) + " " + f1(p1.y) + " Q" + f1(mx) + " " + f1(my) + " " + f1(p2.x) + " " + f1(p2.y), fill: "none", stroke: opts.color || C.string, "stroke-width": f1(opts.width || u(4)), "stroke-linecap": "round" }, g);
    if (opts.at != null) a.tl.fromTo(g.childNodes, { draw: 0 }, { draw: 1 }, { at: cT(opts.at), dur: opts.dur || 0.8, ease: "inOutCubic" });
    return path;
  };

  /** Rubber stamp on an item. opts: at, color, fx, fy (centre, item fractions), rot, size (font px), box, shake. */
  S.stamp = function (item, text, opts) {
    opts = opts || {};
    var a = cur();
    var col = opts.color === "blue" ? C.stampBlue : opts.color === "black" ? "#2A2622" : opts.color && opts.color[0] === "#" ? opts.color : C.stamp;
    var fs = opts.size || item.w * 0.075;
    var s = el("div.ad-stamp", { parent: item.el, style: { borderColor: col, borderWidth: px(fs * 0.14), padding: px(fs * 0.22) + " " + px(fs * 0.4), left: px(item.w * (opts.fx != null ? opts.fx : 0.6)), top: px(item.h * (opts.fy != null ? opts.fy : 0.28)), transform: "translate(-50%,-50%) rotate(" + (opts.rot != null ? opts.rot : -11) + "deg)" } });
    var stx = textCanvas(s, text, { font: TYPE, weight: "bold", size: fs, maxWidth: item.w * 0.72, maxLines: 1, upper: true, color: col, letterSpacing: 0.08 });
    stx.el.style.display = "block";
    var dt = distressTex();
    if (dt) { s.style.webkitMaskImage = "url(" + dt + ")"; s.style.maskImage = "url(" + dt + ")"; s.style.webkitMaskSize = s.style.maskSize = px(u(170)); }
    if (opts.at != null) {
      var at = cT(opts.at);
      a.tl.fromTo(s, { opacity: 0, scale: 1.9 }, { opacity: 0.86, scale: 1 }, { at: at, dur: 0.17, ease: "inQuad" });
      if (opts.shake !== false) S.camera.shake(at + 0.16, u(7), 0.4);
    }
    return s;
  };

  /** Paper clip on an item edge at fx (top edge). */
  S.paperclip = function (item, fx, opts) {
    opts = opts || {};
    var s = opts.size || item.w * 0.07;
    var svg = sv("svg", { class: "ad-clip", viewBox: "0 0 20 60", width: f1(s), height: f1(s * 3), style: { left: px(item.w * fx - s / 2), top: px(-s * 0.9) } }, item.el);
    sv("path", { d: "M6 40 L6 10 Q6 3 11 3 Q16 3 16 10 L16 48 Q16 57 10 57 Q3 57 3 48 L3 16", fill: "none", stroke: "#9A9890", "stroke-width": 2.2, "stroke-linecap": "round" }, svg);
    sv("path", { d: "M6 40 L6 10 Q6 3 11 3", fill: "none", stroke: "#E8E6DF", "stroke-width": 0.8, "stroke-linecap": "round" }, svg);
    return svg;
  };

  // ───────────────────────── typewritten documents ─────────────────────────
  function wrapText(text, cpl) {
    var words = str(text).replace(/\s+/g, " ").trim().split(" "), lines = [], line = "";
    words.forEach(function (w) {
      while (w.length > cpl) { if (line) { lines.push(line); line = ""; } lines.push(w.slice(0, cpl)); w = w.slice(cpl); }
      if (!w) return;
      if (!line) line = w;
      else if (line.length + 1 + w.length <= cpl) line += " " + w;
      else { lines.push(line); line = w; }
    });
    if (line) lines.push(line);
    return lines;
  }
  S.wrapText = wrapText;
  /**
   * A typewritten document. opts: x,y|cx,cy, w, h, rot, header (letterhead), title, date, ref, subject,
   * body, redact: [phrases], classification (e.g. "TOP SECRET"), from/to, typeAt, typeEnd (typing window),
   * paper (#hex), clip, holes, at + enter.
   * Returns item + { lines:[{el,text,start,end}], typedEnd, wordTime(word) }.
   */
  S.document = function (opts) {
    opts = opts || {};
    var a = cur();
    var w = opts.w || Math.min(a.ww * 0.62, a.wh * 0.66);
    var h = opts.h || w * 1.3;
    var it = makeItem("doc", { x: opts.x, y: opts.y, cx: opts.cx, cy: opts.cy, w: w, h: h, rot: opts.rot, parent: opts.parent, z: opts.z });
    applyStyle(it.el, paperBg(opts.paper || C.paper, 0.26));
    var pad = w * 0.085, inner = w - pad * 2;
    var pageEl = el("div.ad-doc-page", { parent: it.el, style: { left: px(pad), top: px(pad * 0.8), width: px(inner), height: px(h - pad * 1.6) } });
    var classTxt = opts.classification ? plain(opts.classification).toUpperCase() : "";
    var metaRows = [];
    if (opts.date) metaRows.push(["DATE:", plain(opts.date)]);
    if (opts.to) metaRows.push(["TO:", plain(opts.to)]);
    if (opts.from) metaRows.push(["FROM:", plain(opts.from)]);
    if (opts.subject) metaRows.push(["SUBJECT:", plain(opts.subject)]);
    if (opts.ref) metaRows.push(["REF:", plain(opts.ref)]);
    var body = plain(opts.body || "");
    // choose characters-per-line so everything fits the page
    var lh = 1.42, cpl = 40, fs, lines, avail = h - pad * 1.6;
    for (cpl = 38; cpl <= 78; cpl += 4) {
      fs = inner / (cpl * 0.6);
      lines = wrapText(body, cpl);
      var metaLines = metaRows.reduce(function (s, m) { return s + wrapText(m[1], cpl - 10).length; }, 0);
      var need = fs * lh * (lines.length + metaLines + (opts.header ? 2.6 : 0) + (opts.title ? 2.2 : 0) + (classTxt ? 3 : 0) + 2.4);
      if (need <= avail) break;
    }
    if (cpl > 78) cpl = 78;
    var cwid = charW(TYPE, fs);
    if (cwid * cpl > inner) { fs *= inner / (cwid * cpl); cwid = charW(TYPE, fs); }
    var LH = fs * lh, y = 0, queue = [];
    function block(text, o2) {
      o2.font = o2.font || TYPE; o2.size = o2.size || fs; o2.color = o2.color || C.ink2; o2.maxWidth = o2.maxWidth || inner;
      var tc = textCanvas(pageEl, text, o2);
      tc.el.style.left = px(o2.align === "center" ? (inner - tc.w) / 2 : 0);
      tc.el.style.top = px(y);
      y += tc.h + (o2.after != null ? o2.after : fs * 0.3);
      return tc;
    }
    if (classTxt) block(classTxt, { weight: "bold", align: "center", color: C.stamp, letterSpacing: 0.3, maxLines: 1, after: fs * 0.6 });
    if (opts.header) {
      block(opts.header, { weight: "bold", align: "center", upper: true, letterSpacing: 0.12, maxLines: 2, width: inner, after: fs * 0.25 });
      el("i.ad-doc-rule", { parent: pageEl, style: { top: px(y) } });
      y += fs * 0.9;
    }
    if (opts.title) block(opts.title, { weight: "bold", align: "center", upper: true, size: fs * 1.25, letterSpacing: 0.2, maxLines: 1, after: fs * 0.8 });
    function typedLine(text) {
      var row = el("div.ad-line", { parent: pageEl, style: { top: px(y), height: px(LH), width: px(inner) } });
      var clip = el("div.ad-lclip", { parent: row, style: { width: "0px", height: px(LH) } });
      if (text.trim()) { var tc = textCanvas(clip, text, { font: TYPE, size: fs, color: C.ink2, lineHeight: lh, res: 2.4 }); tc.el.style.display = "block"; }
      var q = { el: row, clip: clip, text: text, y: y };
      y += LH;
      return q;
    }
    metaRows.forEach(function (m) {
      var ls = wrapText(m[1], cpl - 10);
      ls.forEach(function (l, i) {
        var lab = (i === 0 ? m[0] : "") + "          ".slice(0, 10 - (i === 0 ? m[0].length : 0));
        queue.push(typedLine(lab + l));
      });
    });
    if (metaRows.length) y += LH * 0.7;
    var redact = arr(opts.redact).map(function (x) { return plain(x).toLowerCase().trim(); }).filter(Boolean);
    var bodyStart = queue.length;
    lines.forEach(function (l) { var q = typedLine(l); q.body = true; queue.push(q); });
    if (classTxt) { var cb = textCanvas(it.el, classTxt, { font: TYPE, weight: "bold", size: fs, color: C.stamp, letterSpacing: 0.3, maxLines: 1 }); cb.el.style.left = px((w - cb.w) / 2); cb.el.style.bottom = px(pad * 0.4); }
    // typing schedule
    var total = queue.reduce(function (s, q) { return s + q.text.length; }, 0) || 1;
    var t0 = cT(opts.typeAt != null ? opts.typeAt : 0.6);
    var t1 = Math.max(t0 + 0.5, Math.min(opts.typeEnd != null ? opts.typeEnd : t0 + total / 22, V.duration - 0.4));
    var cps = total / (t1 - t0), acc = 0;
    queue.forEach(function (q) {
      q.start = t0 + acc / cps;
      q.end = q.start + q.text.length / cps;
      acc += q.text.length;
    });
    function typedCount(q, t) { return t < q.start ? 0 : Math.min(q.text.length, Math.floor((t - q.start) * cps) + 1); }
    // redaction bars (monospace: positions in characters)
    var bars = [];
    queue.slice(bodyStart).forEach(function (q) {
      var low = q.text.toLowerCase();
      redact.forEach(function (rw) {
        var idx = low.indexOf(rw);
        while (idx >= 0) {
          var bar = el("i.ad-redact", { parent: q.el, style: { left: px(idx * cwid - fs * 0.08), width: px(rw.length * cwid + fs * 0.16), top: px(LH * 0.14), height: px(LH * 0.78) } });
          var bt = q.start + (idx + rw.length) / cps + 0.25;
          a.tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1 }, { at: cT(bt), dur: 0.35, ease: "inOutCubic" });
          bars.push({ el: bar, at: bt, word: rw });
          idx = low.indexOf(rw, idx + rw.length);
        }
      });
    });
    // the typewriter: characters strike in; a caret follows the line being typed
    var caret = el("i.ad-doc-caret", { parent: pageEl, style: { width: px(cwid), height: px(fs * 0.12) } });
    V.onFrame(function (t) {
      var cq = null;
      for (var i = 0; i < queue.length; i++) {
        var q = queue[i], n = typedCount(q, t);
        if (n !== q._n) { q._n = n; q.clip.style.width = px(n * cwid + (n >= q.text.length ? fs : 0)); }
        if (t >= q.start - 0.05 && t <= q.end + 0.25) cq = q;
      }
      if (!cq || t > t1 + 0.6) { caret.style.opacity = 0; return; }
      caret.style.opacity = Math.floor(t * 3) % 2 && t > cq.end ? 0 : 0.8;
      caret.style.transform = "translate(" + f1(typedCount(cq, t) * cwid) + "px," + f1(cq.y + LH * 0.86) + "px)";
    });
    if (opts.clip) S.paperclip(it, 0.12);
    if (opts.holes !== false) [0.22, 0.78].forEach(function (fy) { el("i.ad-hole", { parent: it.el, style: { left: px(w * 0.03), top: px(h * fy), width: px(w * 0.035), height: px(w * 0.035) } }); });
    it.lines = queue;
    it.lineFy = function (q) { return (pad * 0.8 + q.y + LH / 2) / h; };
    it.LH = LH;
    it.bars = bars;
    it.typedEnd = t1;
    it.typeStart = t0;
    it.fs = fs;
    if (opts.at != null || opts.enter) S.place(it, opts.at != null ? opts.at : 0, opts.enter || "slide", opts);
    return it;
  };

  // ───────────────────────── newspaper front page ─────────────────────────
  var NEWS_WORDS = "the of and to in a was that for on by with as at from his it were which had been an this their are have who would they not but its upon all said we one has more when after into other there no than will city government men new last first two years three state national great public between under during day morning night upon officials report people since toward against before nation week where without while house members large about matter morning according committee called today".split(" ");
  function newsTextUrl(key, cw, ch, fsPx) {
    var sc = 2;
    return canvasUrl("news" + key + "_" + Math.round(cw) + "x" + Math.round(ch), Math.max(8, Math.round(cw * sc)), Math.max(8, Math.round(ch * sc)), function (g, w, h, r) {
      var fs = fsPx * sc, lh = fs * 1.22;
      g.fillStyle = "rgba(34,28,20,0.82)";
      var y = fs, para = 0;
      while (y < h) {
        if (r() < 0.06) { // small heading
          g.font = "bold " + f1(fs * 1.05) + "px " + TIMES;
          var hw = NEWS_WORDS[Math.floor(r() * NEWS_WORDS.length)].toUpperCase() + " " + NEWS_WORDS[Math.floor(r() * NEWS_WORDS.length)].toUpperCase();
          var tw = g.measureText(hw).width;
          g.fillText(hw, (w - tw) / 2, y + fs * 0.3);
          y += lh * 1.5; continue;
        }
        g.font = f1(fs) + "px " + TIMES;
        var x = para === 0 ? fs * 1.2 : 0, words = [];
        var lineW = 0;
        while (true) {
          var wd = NEWS_WORDS[Math.floor(r() * NEWS_WORDS.length)];
          var ww = g.measureText(wd + " ").width;
          if (x + lineW + ww > w) break;
          words.push(wd); lineW += ww;
        }
        var gap = words.length > 1 ? (w - x - lineW) / (words.length - 1) : 0;
        var endPara = r() < 0.12;
        for (var i = 0; i < words.length; i++) { g.fillText(words[i], x, y); x += g.measureText(words[i] + " ").width + (endPara ? 0 : gap); if (endPara && i > words.length * 0.6) break; }
        para = endPara ? 0 : 1;
        y += lh;
      }
    });
  }
  /**
   * Newspaper front page. opts: name (masthead), date, headline, subhead, kicker, subject (front-page photo),
   * caption (photo caption), tone, price, volume, edition, x,y|cx,cy, w, h, rot, at + enter (spin by default).
   * Returns item + { headline, photo (rect fractions) }.
   */
  S.newspaper = function (opts) {
    opts = opts || {};
    var a = cur();
    var w = opts.w || Math.min(a.ww * 0.7, a.wh * 0.78);
    var h = opts.h || w * 1.28;
    var it = makeItem("news", { x: opts.x, y: opts.y, cx: opts.cx, cy: opts.cy, w: w, h: h, rot: opts.rot, parent: opts.parent, z: opts.z });
    applyStyle(it.el, paperBg(opts.paper || C.news, 0.34));
    var pad = w * 0.04, PW = w - pad * 2, PH = h - pad * 2;
    var pg = el("div.ad-news-page", { parent: it.el, style: { left: px(pad), top: px(pad), width: px(PW), height: px(PH) } });
    var INKN = "#1C1813";
    function put(tc, align, top) { tc.el.style.left = px(align === "center" ? (PW - tc.w) / 2 : align === "right" ? PW - tc.w : 0); tc.el.style.top = px(top); return tc; }
    var earW = PW * 0.16;
    var mast = textCanvas(pg, opts.name || "The Daily Chronicle", { font: TIMES, weight: "bold", size: w * 0.072, min: w * 0.03, maxWidth: PW - earW * 2 - PW * 0.05, maxLines: 1, color: INKN, res: 2.4 });
    put(mast, "center", 0);
    [[opts.edition || "LATE CITY EDITION", 0], [opts.ear || "WEATHER: Fair and cooler tonight", 1]].forEach(function (e) {
      var box = el("div.ad-news-ear", { parent: pg, style: { width: px(earW), left: e[1] ? px(PW - earW) : "0px" } });
      var tc = textCanvas(box, e[0], { font: TIMES, size: w * 0.0125, width: earW * 0.84, maxLines: 3, align: "center", color: INKN, lineHeight: 1.15, upper: true });
      tc.el.style.display = "block"; tc.el.style.margin = "0 auto";
      box.style.top = px(Math.max(0, (mast.h - tc.h - w * 0.012) / 2));
    });
    var y = mast.h + w * 0.006;
    el("i.ad-news-rule2", { parent: pg, style: { top: px(y) } });
    y += w * 0.012;
    var dlS = w * 0.0155, dlW = PW * 0.32;
    put(textCanvas(pg, opts.volume || "VOL. LXXXVII — No. 29,514", { font: TIMES, size: dlS, maxWidth: dlW, maxLines: 1, color: INKN, upper: true }), "left", y);
    put(textCanvas(pg, opts.date || "", { font: TIMES, size: dlS, maxWidth: dlW, maxLines: 1, color: INKN, upper: true, letterSpacing: 0.06 }), "center", y);
    put(textCanvas(pg, opts.price || "TWO CENTS", { font: TIMES, size: dlS, maxWidth: dlW, maxLines: 1, color: INKN, upper: true }), "right", y);
    y += dlS * 1.45;
    el("i.ad-news-rule", { parent: pg, style: { top: px(y) } });
    y += w * 0.016;
    if (opts.kicker) { var kk = put(textCanvas(pg, opts.kicker, { font: TIMES, weight: "bold", size: w * 0.022, maxWidth: PW, maxLines: 1, upper: true, letterSpacing: 0.18, color: "#3A3128" }), "center", y); y += kk.h + w * 0.006; }
    var hl = put(textCanvas(pg, opts.headline || "EXTRA", { font: TIMES, weight: "bold", size: w * 0.1, min: w * 0.034, width: PW, maxLines: 3, align: "center", upper: true, lineHeight: 1.02, letterSpacing: -0.01, color: "#14110D", res: 2.4 }), "left", y);
    var hlTop = y;
    y += hl.h + w * 0.008;
    if (opts.subhead) { var dk = put(textCanvas(pg, opts.subhead, { font: SERIF, style: "italic", size: w * 0.028, min: w * 0.016, width: PW * 0.92, maxLines: 2, align: "center", color: "#2B251E" }), "center", y); y += dk.h + w * 0.01; }
    el("i.ad-news-rule", { parent: pg, style: { top: px(y) } });
    y += w * 0.016;
    var bodyTop = y, bodyH = Math.max(w * 0.2, PH - bodyTop);
    var bodyEl = el("div.ad-news-body", { parent: pg, style: { top: px(bodyTop), height: px(bodyH) } });
    var cols = 4, gap = w * 0.018, cw = (PW - gap * (cols - 1)) / cols;
    var fsT = w * 0.0125;
    var tex = newsTextUrl(hs(plain(opts.headline)) % 13, cw, bodyH, fsT);
    var photoCols = 3, phW = cw * photoCols + gap * (photoCols - 1), phH = Math.min(bodyH * 0.68, phW * 0.62);
    var ph = el("div.ad-news-photo", { parent: bodyEl, style: { left: "0", top: "0", width: px(phW), height: px(phH) } });
    var T = toneFn(opts.tone || "silver");
    ph.style.background = T(0.5);
    var subj = SUBJECTS[opts.subject] ? opts.subject : S.guessSubject(opts.subject || opts.headline || "");
    drawSubject(ph, subj, T, 3);
    var gt = grainTex();
    if (gt) el("div.ad-ph-grain", { parent: ph, style: { backgroundImage: "url(" + gt + ")", backgroundSize: px(u(90)) + " " + px(u(90)), opacity: 0.9 } });
    el("div.ad-news-halftone", { parent: ph });
    var capH = fsT * 3;
    if (opts.caption) { var pc = textCanvas(bodyEl, opts.caption, { font: TIMES, style: "italic", size: fsT * 1.1, width: phW, maxLines: 2, color: INKN, align: "center" }); pc.el.style.left = "0px"; pc.el.style.top = px(phH + fsT * 0.4); capH = Math.max(capH, pc.h + fsT * 0.6); }
    for (var c = 0; c < cols; c++) {
      var x = c * (cw + gap);
      var y0 = c < photoCols ? phH + capH + fsT * 0.6 : 0;
      var col = el("div.ad-news-col", { parent: bodyEl, style: { left: px(x), top: px(y0), width: px(cw), height: px(Math.max(0, bodyH - y0)) } });
      if (tex) { col.style.backgroundImage = "url(" + tex + ")"; col.style.backgroundSize = px(cw) + " " + px(bodyH); col.style.backgroundPosition = "0px " + px(-((c * 137) % (bodyH * 0.5))); }
      if (c > 0) el("i.ad-news-vrule", { parent: bodyEl, style: { left: px(x - gap / 2), top: px(y0), height: px(Math.max(0, bodyH - y0)) } });
    }
    el("i.ad-news-fold", { parent: it.el });
    it.headline = hl.el;
    it.headlineAt = [0.5, (pad + hlTop + hl.h / 2) / h];
    it.headlineRect = { fy0: (pad + hlTop) / h, fy1: (pad + hlTop + hl.h) / h };
    it.photoAt = [(pad + phW / 2) / w, (pad + bodyTop + phH / 2) / h];
    it.photoSize = { w: phW / w, h: phH / h };
    if (opts.at != null || opts.enter) S.place(it, opts.at != null ? opts.at : 0, opts.enter || "spin", opts);
    return it;
  };

  // ───────────────────────── parchment maps ─────────────────────────
  function blob(cx, cy, R, r, n, irr) {
    var harm = [];
    for (var k = 2; k <= 7; k++) harm.push([k, (irr || 0.22) * (0.9 / k) * (0.6 + r()), r() * 6.28]);
    function rad(th) { var v = 1; harm.forEach(function (h) { v += h[1] * Math.sin(h[0] * th + h[2]); }); return R * v; }
    var pts = [];
    for (var i = 0; i < n; i++) { var th = (i / n) * Math.PI * 2, rr = rad(th) * (1 + (r() - 0.5) * 0.05); pts.push([cx + Math.cos(th) * rr, cy + Math.sin(th) * rr * 0.86]); }
    return { d: smoothPath(pts, true), inside: function (x, y) { var dx = x - cx, dy = (y - cy) / 0.86; return Math.hypot(dx, dy) < rad(Math.atan2(dy, dx)) * 0.94; } };
  }
  function compassRose(g, cx, cy, R, ink) {
    sv("circle", { cx: f1(cx), cy: f1(cy), r: f1(R * 0.78), fill: "none", stroke: ink, "stroke-width": f2(R * 0.012) }, g);
    sv("circle", { cx: f1(cx), cy: f1(cy), r: f1(R * 0.7), fill: "none", stroke: ink, "stroke-width": f2(R * 0.008) }, g);
    for (var t = 0; t < 32; t++) { var a = (t / 32) * Math.PI * 2; sv("line", { x1: f1(cx + Math.cos(a) * R * 0.7), y1: f1(cy + Math.sin(a) * R * 0.7), x2: f1(cx + Math.cos(a) * R * (t % 4 ? 0.74 : 0.78)), y2: f1(cy + Math.sin(a) * R * (t % 4 ? 0.74 : 0.78)), stroke: ink, "stroke-width": f2(R * 0.008) }, g); }
    function star(len, wd, rot0, dark, light) {
      for (var i = 0; i < 4; i++) {
        var a = rot0 + (i * Math.PI) / 2, tip = [cx + Math.cos(a) * len, cy + Math.sin(a) * len];
        var l = [cx + Math.cos(a - Math.PI / 4) * wd, cy + Math.sin(a - Math.PI / 4) * wd], rr = [cx + Math.cos(a + Math.PI / 4) * wd, cy + Math.sin(a + Math.PI / 4) * wd];
        sv("path", { d: "M" + f1(cx) + " " + f1(cy) + " L" + f1(tip[0]) + " " + f1(tip[1]) + " L" + f1(l[0]) + " " + f1(l[1]) + " Z", fill: dark, stroke: ink, "stroke-width": f2(R * 0.01) }, g);
        sv("path", { d: "M" + f1(cx) + " " + f1(cy) + " L" + f1(tip[0]) + " " + f1(tip[1]) + " L" + f1(rr[0]) + " " + f1(rr[1]) + " Z", fill: light, stroke: ink, "stroke-width": f2(R * 0.01) }, g);
      }
    }
    star(R * 0.62, R * 0.12, Math.PI / 4, "#5B4630", "#EAD9B0");
    star(R * 0.95, R * 0.16, -Math.PI / 2, ink, "#F0E2BE");
    sv("circle", { cx: f1(cx), cy: f1(cy), r: f1(R * 0.05), fill: C.red }, g);
    var nh = R * 0.2, nx = cx - nh * 0.38, ny = cy - R * 1.04;
    sv("path", { d: "M" + f1(nx) + " " + f1(ny) + " L" + f1(nx) + " " + f1(ny - nh) + " L" + f1(nx + nh * 0.76) + " " + f1(ny) + " L" + f1(nx + nh * 0.76) + " " + f1(ny - nh), fill: "none", stroke: ink, "stroke-width": f2(R * 0.035), "stroke-linejoin": "miter" }, g);
  }
  /**
   * Antique parchment map. opts: title, terrain (continent|coast|islands|inland), places: [{ name, x, y, date }]
   * (x/y 0..1; omitted → laid out automatically), x,y|cx,cy, w, h, rot, seed, compass (true), at + enter.
   * Returns item + { svg, placeAt(i) world point, mapPt(i) map px, drawPlaces(times), route(times, opts) }.
   */
  S.map = function (opts) {
    opts = opts || {};
    var a = cur();
    var w = opts.w || a.ww * 0.86, h = opts.h || w * (V.isPortrait ? 1.35 : 0.68);
    var it = makeItem("map", { x: opts.x, y: opts.y, cx: opts.cx, cy: opts.cy, w: w, h: h, rot: opts.rot, parent: opts.parent, z: opts.z });
    applyStyle(it.el, paperBg(C.parchment, 0.55));
    var r = rng("map" + (opts.seed || "") + str(opts.title));
    var svg = sv("svg", { class: "ad-map-svg", viewBox: "0 0 " + f1(w) + " " + f1(h), width: f1(w), height: f1(h) }, it.el);
    var ink = "#3A2A18", m = Math.min(w, h);
    var gLand = sv("g", null, svg), gDeco = sv("g", null, svg), gRoute = sv("g", null, svg), gPlaces = sv("g", null, svg);
    // rhumb lines from a hidden centre (portolan style)
    var rc = [w * (0.3 + r() * 0.4), h * (0.35 + r() * 0.3)];
    for (var k = 0; k < 16; k++) { var an = (k / 16) * Math.PI * 2; sv("line", { x1: f1(rc[0]), y1: f1(rc[1]), x2: f1(rc[0] + Math.cos(an) * w * 1.5), y2: f1(rc[1] + Math.sin(an) * w * 1.5), stroke: k % 2 ? "rgba(120,60,30,0.16)" : "rgba(58,42,24,0.16)", "stroke-width": f2(m * 0.0012) }, gLand); }
    // graticule
    for (var gx = 1; gx < 6; gx++) sv("line", { x1: f1((gx * w) / 6), y1: 0, x2: f1((gx * w) / 6), y2: f1(h), stroke: "rgba(58,42,24,0.18)", "stroke-width": f2(m * 0.0014), "stroke-dasharray": f1(m * 0.006) + " " + f1(m * 0.008) }, gLand);
    for (var gy = 1; gy < 5; gy++) sv("line", { x1: 0, y1: f1((gy * h) / 5), x2: f1(w), y2: f1((gy * h) / 5), stroke: "rgba(58,42,24,0.18)", "stroke-width": f2(m * 0.0014), "stroke-dasharray": f1(m * 0.006) + " " + f1(m * 0.008) }, gLand);
    var terrain = opts.terrain || "continent";
    var lands = [];
    if (terrain === "islands") {
      var ni = 4;
      for (var i = 0; i < ni; i++) lands.push(blob(w * (0.18 + (i % 2) * 0.5 + r() * 0.15), h * (0.25 + Math.floor(i / 2) * 0.45 + r() * 0.1), m * (0.13 + r() * 0.08), r, 44, 0.3));
    } else if (terrain === "coast") {
      lands.push(blob(-w * 0.25, h * 0.5, Math.max(w, h) * 0.75, r, 64, 0.12));
      lands.push(blob(w * 0.84, h * 0.22, m * 0.08, r, 30, 0.3));
    } else if (terrain === "inland") {
      lands.push(blob(w * 0.5, h * 0.5, Math.max(w, h) * 0.9, r, 64, 0.06));
    } else {
      lands.push(blob(w * 0.48, h * 0.52, m * 0.46 * (w > h ? 1.25 : 1), r, 60, 0.2));
      lands.push(blob(w * 0.9, h * 0.15, m * 0.07, r, 28, 0.3));
    }
    var landD = lands.map(function (l) { return l.d; }).join(" ");
    sv("path", { d: landD, fill: "none", stroke: "rgba(58,42,24,0.28)", "stroke-width": f1(m * 0.03), "stroke-dasharray": f2(m * 0.002) + " " + f2(m * 0.006), "stroke-linejoin": "round" }, gLand);
    sv("path", { d: landD, fill: "none", stroke: "rgba(58,42,24,0.18)", "stroke-width": f1(m * 0.055), "stroke-dasharray": f2(m * 0.002) + " " + f2(m * 0.009), "stroke-linejoin": "round" }, gLand);
    sv("path", { d: landD, fill: "#D4BC86", stroke: ink, "stroke-width": f2(m * 0.0035), "stroke-linejoin": "round" }, gLand);
    var cid = nid("lc");
    sv("clipPath", { id: cid }, a.defs).appendChild(sv("path", { d: landD }));
    // hand-coloured border wash inside the land
    sv("path", { d: landD, fill: "none", stroke: "rgba(110,130,70,0.35)", "stroke-width": f1(m * 0.03), "clip-path": "url(#" + cid + ")" }, gLand);
    function onLand(x, y) { for (var q = 0; q < lands.length; q++) if (lands[q].inside(x, y)) return true; return false; }
    it.onLand = onLand;
    // mountains, forests, rivers
    var placesIn = arr(opts.places).slice(0, 8);
    var ppts = autoPlaces(placesIn, w, h, onLand, r);
    function nearPlace(x, y) { for (var q = 0; q < ppts.length; q++) if (Math.hypot(ppts[q][0] - x, ppts[q][1] - y) < m * 0.12) return true; return false; }
    var mt = 0, tries = 0;
    while (mt < 16 && tries < 200) {
      tries++;
      var mx = w * (0.06 + r() * 0.88), my = h * (0.08 + r() * 0.84);
      if (!onLand(mx, my) || nearPlace(mx, my)) continue;
      var ms = m * (0.025 + r() * 0.02);
      sv("path", { d: "M" + f1(mx - ms) + " " + f1(my) + " L" + f1(mx) + " " + f1(my - ms * 1.1) + " L" + f1(mx + ms) + " " + f1(my), fill: "#E4CF9C", stroke: ink, "stroke-width": f2(m * 0.0022), "stroke-linejoin": "round" }, gDeco);
      sv("path", { d: "M" + f1(mx) + " " + f1(my - ms * 1.1) + " L" + f1(mx + ms * 0.2) + " " + f1(my) + " L" + f1(mx + ms) + " " + f1(my) + " Z", fill: "rgba(58,42,24,0.35)" }, gDeco);
      mt++;
    }
    var ft = 0; tries = 0;
    while (ft < 10 && tries < 150) {
      tries++;
      var fx = w * (0.06 + r() * 0.88), fy = h * (0.08 + r() * 0.84);
      if (!onLand(fx, fy) || nearPlace(fx, fy)) continue;
      for (var tc = 0; tc < 5; tc++) { var tx = fx + (r() - 0.5) * m * 0.06, ty = fy + (r() - 0.5) * m * 0.03, tr = m * 0.008; sv("circle", { cx: f1(tx), cy: f1(ty), r: f1(tr), fill: "rgba(80,96,52,0.55)", stroke: ink, "stroke-width": f2(m * 0.0012) }, gDeco); sv("line", { x1: f1(tx), y1: f1(ty + tr), x2: f1(tx), y2: f1(ty + tr * 1.8), stroke: ink, "stroke-width": f2(m * 0.0012) }, gDeco); }
      ft++;
    }
    for (var rv = 0; rv < (terrain === "islands" ? 0 : 2); rv++) {
      var sx = w * (0.3 + r() * 0.4), sy = h * (0.3 + r() * 0.4);
      if (!onLand(sx, sy)) continue;
      var pts = [[sx, sy]], dir = r() * 6.28;
      for (var st = 0; st < 14; st++) { dir += (r() - 0.5) * 0.9; var lp = pts[pts.length - 1]; var np = [lp[0] + Math.cos(dir) * m * 0.05, lp[1] + Math.sin(dir) * m * 0.05]; pts.push(np); if (!onLand(np[0], np[1])) break; }
      sv("path", { d: smoothPath(pts), fill: "none", stroke: "#4A6A80", "stroke-width": f2(m * 0.004), "stroke-linecap": "round", opacity: 0.75 }, gDeco);
    }
    // border with chequered degree ticks
    var bi = m * 0.025;
    sv("rect", { x: f1(bi), y: f1(bi), width: f1(w - bi * 2), height: f1(h - bi * 2), fill: "none", stroke: ink, "stroke-width": f2(m * 0.004) }, gDeco);
    sv("rect", { x: f1(bi * 1.6), y: f1(bi * 1.6), width: f1(w - bi * 3.2), height: f1(h - bi * 3.2), fill: "none", stroke: ink, "stroke-width": f2(m * 0.002) }, gDeco);
    var seg = m * 0.04, dd = "";
    for (var sx2 = bi; sx2 < w - bi - seg; sx2 += seg * 2) dd += "M" + f1(sx2) + " " + f1(bi * 1.3) + " h" + f1(seg) + " M" + f1(sx2) + " " + f1(h - bi * 1.3) + " h" + f1(seg) + " ";
    for (var sy2 = bi; sy2 < h - bi - seg; sy2 += seg * 2) dd += "M" + f1(bi * 1.3) + " " + f1(sy2) + " v" + f1(seg) + " M" + f1(w - bi * 1.3) + " " + f1(sy2) + " v" + f1(seg) + " ";
    sv("path", { d: dd, stroke: ink, "stroke-width": f2(bi * 0.55), fill: "none" }, gDeco);
    // compass rose in a corner away from places
    if (opts.compass !== false) {
      var corners = [[0.86, 0.8], [0.14, 0.8], [0.86, 0.2], [0.14, 0.2]], best = corners[0], bd = -1;
      corners.forEach(function (c) { var dmin = 1e9; ppts.forEach(function (p) { dmin = Math.min(dmin, Math.hypot(p[0] - c[0] * w, p[1] - c[1] * h)); }); if (dmin > bd) { bd = dmin; best = c; } });
      compassRose(gDeco, best[0] * w, best[1] * h, m * 0.1, ink);
      it.compassAt = best;
    }
    // title cartouche
    if (opts.title) {
      var cw2 = Math.min(w * 0.42, m * 0.62), chh = m * 0.1;
      var cc = it.compassAt || [0.86, 0.8];
      var cx = cc[0] > 0.5 ? bi * 2.6 : w - bi * 2.6 - cw2, cy = cc[1] > 0.5 ? bi * 2.6 : h - bi * 2.6 - chh;
      var ct = el("div.ad-cartouche", { parent: it.el, style: { left: px(cx), top: px(cy), width: px(cw2), height: px(chh) } });
      var ctt = textCanvas(ct, opts.title, { font: SERIF, style: "italic", weight: "bold", size: chh * 0.4, min: chh * 0.14, width: cw2 * 0.86, maxLines: 2, maxHeight: chh * 0.8, align: "center", color: ink, lineHeight: 1.05 });
      ctt.el.style.left = px((cw2 - ctt.w) / 2); ctt.el.style.top = px((chh - ctt.h) / 2);
      it.cartouche = ct;
    }
    it.svg = svg; it.gRoute = gRoute; it.gPlaces = gPlaces; it.ink = ink; it.m = m;
    it.pts = ppts;
    it.places = placesIn;
    it.mapPt = function (i) { return ppts[clamp(i, 0, ppts.length - 1)]; };
    it.placeAt = function (i) { var p = it.mapPt(i); return it.point(p[0] / w, p[1] / h); };
    /** Ink the place markers + labels in at times[i]. */
    it.drawPlaces = function (times, o2) {
      o2 = o2 || {};
      placesIn.forEach(function (pl, i) {
        var p = ppts[i], g = sv("g", { class: "ad-place" }, gPlaces);
        var rr = m * 0.012;
        sv("circle", { cx: f1(p[0]), cy: f1(p[1]), r: f1(rr * 2), fill: "none", stroke: ink, "stroke-width": f2(m * 0.0025) }, g);
        sv("circle", { cx: f1(p[0]), cy: f1(p[1]), r: f1(rr), fill: i === 0 || i === placesIn.length - 1 ? C.red : ink }, g);
        var right = p[0] < w * 0.72;
        for (var oq = 0; oq < ppts.length; oq++) { if (oq === i) continue; var o4 = ppts[oq]; if (Math.abs(o4[1] - p[1]) < h * 0.09 && o4[0] > p[0] && o4[0] - p[0] < w * 0.3) right = false; if (Math.abs(o4[1] - p[1]) < h * 0.09 && o4[0] < p[0] && p[0] - o4[0] < w * 0.3 && !right) right = true; }
        var fsz = m * (V.isPortrait ? 0.042 : 0.036);
        var lb = el("div.ad-place-lab", { parent: it.el });
        var lt = textCanvas(lb, pl.name || pl.label || "", { font: SERIF, style: "italic", weight: "bold", size: fsz, maxWidth: w * 0.4, maxLines: 1, color: ink });
        lt.el.style.display = "block";
        var lw = lt.w, lhh = lt.h;
        if (pl.date) { var ld = textCanvas(lb, pl.date, { font: TYPE, weight: "bold", size: fsz * 0.6, maxWidth: w * 0.3, maxLines: 1, color: "#7A4A26" }); ld.el.style.display = "block"; if (!right) ld.el.style.marginLeft = px(lw - ld.w); lhh += ld.h; lw = Math.max(lw, ld.w); }
        if (right && p[0] + rr * 3 + lw > w * 0.95) right = false; else if (!right && p[0] - rr * 3 - lw < w * 0.05) right = true;
        lb.style.left = px(right ? p[0] + rr * 3 : p[0] - rr * 3 - lw);
        lb.style.top = px(p[1] - lt.h * 0.8);
        g.__lab = lb;
        var at = times && times[i] != null ? times[i] : 0.3 + i * 0.4;
        a.tl.fromTo([g, g.__lab], { opacity: 0 }, { opacity: 1 }, { at: cT(at), dur: 0.6, ease: "inOutSine" });
        a.tl.fromTo(g.firstChild, { "attr:r": rr * 6 }, { "attr:r": rr * 2 }, { at: cT(at), dur: 0.7, ease: "outCubic" });
      });
    };
    /** Animated route through the places, arriving at place i at times[i]. opts: style (land|sea|air|rail), color, marker. */
    it.route = function (times, o3) {
      o3 = o3 || {};
      var style = o3.style || "land";
      var pts2 = ppts.slice(0, Math.max(2, placesIn.length));
      if (pts2.length < 2) return null;
      var segs = [], cum = [0];
      var d = "M" + f1(pts2[0][0]) + " " + f1(pts2[0][1]);
      for (var i = 1; i < pts2.length; i++) {
        var p0 = pts2[i - 1], p1 = pts2[i];
        var dx = p1[0] - p0[0], dy = p1[1] - p0[1], L = Math.hypot(dx, dy);
        var bend = (style === "air" ? 0.28 : 0.14) * (i % 2 ? 1 : -1);
        var cx3 = (p0[0] + p1[0]) / 2 - dy * bend, cy3 = (p0[1] + p1[1]) / 2 + dx * bend;
        var sd = " Q" + f1(cx3) + " " + f1(cy3) + " " + f1(p1[0]) + " " + f1(p1[1]);
        d += sd;
        var tmp = sv("path", { d: "M" + f1(p0[0]) + " " + f1(p0[1]) + sd, fill: "none" }, gRoute);
        var segL = 0;
        try { segL = tmp.getTotalLength(); } catch (e) { segL = L; }
        if (!segL) segL = L;
        gRoute.removeChild(tmp);
        cum.push(cum[cum.length - 1] + segL);
        segs.push(segL);
      }
      var total = cum[cum.length - 1] || 1;
      var col = o3.color || C.red;
      var mid = nid("rm");
      var mask = sv("mask", { id: mid, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: f1(w), height: f1(h) }, a.defs);
      var mpath = sv("path", { d: d, fill: "none", stroke: "#fff", "stroke-width": f1(m * 0.03), "stroke-linecap": "round", "stroke-dasharray": f1(total) + " " + f1(total + 10), "stroke-dashoffset": f1(total) }, mask);
      var dash = style === "sea" ? f1(m * 0.004) + " " + f1(m * 0.014) : style === "air" ? f1(m * 0.02) + " " + f1(m * 0.012) : style === "rail" ? "none" : f1(m * 0.018) + " " + f1(m * 0.01);
      var rp = sv("path", { d: d, fill: "none", stroke: col, "stroke-width": f2(m * (style === "sea" ? 0.007 : 0.0055)), "stroke-linecap": "round", "stroke-dasharray": dash, mask: "url(#" + mid + ")" }, gRoute);
      if (style === "rail") sv("path", { d: d, fill: "none", stroke: col, "stroke-width": f2(m * 0.016), "stroke-dasharray": f2(m * 0.002) + " " + f2(m * 0.01), mask: "url(#" + mid + ")" }, gRoute);
      void rp;
      var mk = sv("g", { class: "ad-route-mk" }, gRoute);
      var ms = m * 0.028;
      if (style === "sea") {
        sv("path", { d: "M" + f1(-ms) + " 0 L" + f1(ms) + " 0 L" + f1(ms * 0.7) + " " + f1(ms * 0.45) + " L" + f1(-ms * 0.75) + " " + f1(ms * 0.45) + " Z", fill: ink }, mk);
        sv("path", { d: "M0 " + f1(-ms * 1.3) + " L0 0 M0 " + f1(-ms * 1.2) + " L" + f1(ms * 0.8) + " " + f1(-ms * 0.2) + " L0 " + f1(-ms * 0.2) + " Z", fill: "#F1E4C2", stroke: ink, "stroke-width": f2(m * 0.002) }, mk);
      } else if (style === "air") {
        sv("path", { d: "M" + f1(ms) + " 0 L" + f1(-ms * 0.8) + " " + f1(-ms * 0.18) + " L" + f1(-ms * 0.8) + " " + f1(ms * 0.18) + " Z M" + f1(ms * 0.1) + " " + f1(-ms) + " L" + f1(-ms * 0.2) + " " + f1(ms) + " L" + f1(ms * 0.3) + " " + f1(ms) + " L" + f1(ms * 0.45) + " " + f1(-ms) + " Z", fill: ink }, mk);
      } else {
        sv("circle", { r: f1(ms * 0.55), fill: col, stroke: "#F1E4C2", "stroke-width": f2(m * 0.004) }, mk);
      }
      var tm = times || pts2.map(function (_, i) { return 0.5 + i; });
      function progressAt(t) {
        if (t <= tm[0]) return 0;
        for (var i = 1; i < pts2.length; i++) {
          var ta = tm[i - 1] + 0.15, tb = Math.max(ta + 0.3, tm[i]);
          if (t < tb) return t < ta ? cum[i - 1] : cum[i - 1] + segs[i - 1] * V.ease.inOutSine((t - ta) / (tb - ta));
        }
        return total;
      }
      var lastL = -1, lastP = { x: pts2[0][0], y: pts2[0][1], a: 0 };
      function posAt(t) {
        var Lh = progressAt(t);
        if (Math.abs(Lh - lastL) < 0.01) return lastP;
        var p = rp.getPointAtLength(Lh), q = rp.getPointAtLength(Math.min(total, Lh + 2)), q0 = rp.getPointAtLength(Math.max(0, Lh - 2));
        lastL = Lh; lastP = { x: p.x, y: p.y, a: Math.atan2(q.y - q0.y, q.x - q0.x), L: Lh };
        return lastP;
      }
      V.onFrame(function (t) {
        var p = posAt(t);
        mpath.setAttribute("stroke-dashoffset", f1(total - progressAt(t)));
        var flip = style === "sea" && Math.cos(p.a) < 0 ? -1 : 1;
        mk.setAttribute("transform", "translate(" + f1(p.x) + " " + f1(p.y) + ")" + (style === "air" ? " rotate(" + f1((p.a * 180) / Math.PI) + ")" : " scale(" + flip + " 1)"));
        mk.style.opacity = t < tm[0] - 0.3 ? 0 : 1;
      });
      return {
        path: rp, total: total,
        /** world point of the route head at time t */
        head: function (t) { var p = posAt(t); return it.point(p.x / w, p.y / h); },
      };
    };
    if (opts.at != null || opts.enter) S.place(it, opts.at != null ? opts.at : 0, opts.enter || "drop", opts);
    return it;
  };
  function autoPlaces(places, w, h, onLand, r) {
    var n = places.length;
    var out = [];
    for (var i = 0; i < n; i++) {
      var pl = places[i] || {};
      if (pl.x != null && pl.y != null) { out.push([clamp(+pl.x, 0.08, 0.92) * w, clamp(+pl.y, 0.1, 0.9) * h]); continue; }
      var p = n === 1 ? 0.5 : i / (n - 1);
      var x, y;
      if (w >= h) { x = lerp(0.16, 0.8, p) * w; y = (0.5 + Math.sin(p * Math.PI * 1.6 + 0.6) * 0.24 + (i % 2 ? 0.05 : -0.05)) * h; }
      else { y = lerp(0.14, 0.84, p) * h; x = (0.5 + Math.sin(p * Math.PI * 1.6 + 0.6) * 0.24) * w; }
      var best = [x, y], mm = Math.min(w, h) * 0.26;
      var farOk = function (px2, py2) { for (var q = 0; q < out.length; q++) if (Math.hypot(out[q][0] - px2, out[q][1] - py2) < mm) return false; return true; };
      if (!onLand(x, y)) for (var k = 0; k < 40; k++) { var tx = x + (r() - 0.5) * w * 0.2, ty = y + (r() - 0.5) * h * 0.2; if (onLand(tx, ty) && farOk(tx, ty)) { best = [tx, ty]; break; } }
      out.push(best);
    }
    return out;
  }

  // ───────────────────────── index cards ─────────────────────────
  /** Ruled index card. opts: title, lines ([text] or text), color (white|manila|pink|blue), w, h, rot, typed (Courier) | hand (italic), at + enter. */
  S.indexCard = function (opts) {
    opts = opts || {};
    var a = cur();
    var w = opts.w || Math.min(a.ww, a.wh) * 0.34, h = opts.h || w * 0.62;
    var it = makeItem("card", { x: opts.x, y: opts.y, cx: opts.cx, cy: opts.cy, w: w, h: h, rot: opts.rot, parent: opts.parent, z: opts.z });
    var col = { white: C.card, manila: C.manila, pink: "#EBCFC4", blue: "#CBD6DA" }[opts.color || "white"] || opts.color;
    applyStyle(it.el, paperBg(col, 0.18));
    var lh = h * 0.12;
    el("div.ad-card-rules", { parent: it.el, style: { top: px(h * 0.26), backgroundSize: "100% " + px(lh), backgroundImage: "linear-gradient(to bottom, transparent " + px(lh - Math.max(1, u(1.4))) + ", rgba(70,110,150,0.35) " + px(lh - Math.max(1, u(1.4))) + ")" } });
    el("i.ad-card-red", { parent: it.el, style: { top: px(h * 0.24) } });
    var ti = textCanvas(it.el, opts.title || "", { font: TYPE, weight: "bold", size: h * 0.105, min: h * 0.05, maxWidth: w * 0.86, maxLines: 1, upper: true, color: C.ink, letterSpacing: 0.04 });
    ti.el.style.left = px(w * 0.07); ti.el.style.top = px(h * 0.22 - ti.h);
    var bsz = lh * (opts.typed ? 0.6 : 0.74);
    var body = textCanvas(it.el, arr(opts.lines).map(plain).join(" "), { font: opts.typed ? TYPE : SERIF, style: opts.typed ? "normal" : "italic", size: bsz, min: bsz * 0.45, width: w * 0.86, maxLines: Math.max(1, Math.floor((h * 0.72) / lh)), lineHeight: lh / bsz, color: opts.typed ? C.ink2 : C.blueInk });
    body.el.style.left = px(w * 0.07); body.el.style.top = px(h * 0.26 + lh * 0.12);
    it.title = ti; it.body = body;
    if (opts.at != null || opts.enter) S.place(it, opts.at != null ? opts.at : 0, opts.enter || "drop", opts);
    return it;
  };

  // ───────────────────────── handwritten letters ─────────────────────────
  /**
   * Handwritten letter. opts: text (body), salutation, signoff, signature, date, place, w, h, rot, ink, at + enter,
   * writeAt / writeEnd (or sync: true → each line is written while its words are spoken).
   * Returns item + { lines:[{el,start,end}], end }.
   */
  S.letter = function (opts) {
    opts = opts || {};
    var a = cur();
    var w = opts.w || Math.min(a.ww * 0.6, a.wh * 0.62), h = opts.h || w * 1.25;
    var it = makeItem("letter", { x: opts.x, y: opts.y, cx: opts.cx, cy: opts.cy, w: w, h: h, rot: opts.rot, parent: opts.parent, z: opts.z });
    applyStyle(it.el, paperBg(opts.paper || "#EADFC6", 0.3));
    el("i.ad-fold", { parent: it.el, style: { top: "33.3%" } });
    el("i.ad-fold", { parent: it.el, style: { top: "66.6%" } });
    var pad = w * 0.1;
    var IW = w - pad * 2, IH = h - pad * 1.6;
    var ink = opts.ink || C.blueInk;
    var pg = el("div.ad-letter-page", { parent: it.el, style: { left: px(pad), top: px(pad * 0.8), width: px(IW), height: px(IH) } });
    var words = plain(opts.text || "").split(/\s+/).filter(Boolean);
    var hand = { font: SERIF, style: "italic", color: ink };
    var hasHead = !!(opts.date || opts.place);
    var fs = w * 0.062, lineStrs = [];
    for (var tries = 0; tries < 24; tries++) {
      lineStrs = wrapMeasured(words.join(" "), hand, fs, IW);
      var need = (lineStrs.length * 1.5 + (opts.salutation ? 1.6 : 0) + (hasHead ? 1.3 : 0) + (opts.signoff ? 1.6 : 0) + (opts.signature ? 2.2 : 0)) * fs;
      if (need <= IH || fs < w * 0.022) break;
      fs *= 0.93;
    }
    var y = 0;
    function hw(text, o2) {
      var o3 = { font: SERIF, style: "italic", color: ink, size: fs, maxWidth: IW, maxLines: 1, lineHeight: 1.5 };
      for (var k in o2) o3[k] = o2[k];
      var tc = textCanvas(pg, text, o3);
      tc.el.style.top = px(y);
      tc.el.style.left = px(o2.right ? IW - tc.w : o2.indent || 0);
      return tc;
    }
    var head = null, sal = null;
    if (hasHead) { head = hw([plain(opts.place), plain(opts.date)].filter(Boolean).join(", "), { size: fs * 0.74, right: true }); y += head.h + fs * 0.4; head = head.el; }
    if (opts.salutation) { sal = hw(opts.salutation, { size: fs * 1.04 }); y += sal.h + fs * 0.1; sal = sal.el; }
    var wi = 0;
    var lines = lineStrs.map(function (ls) {
      var n = ls.split(/\s+/).filter(Boolean).length, idx = [];
      for (var q = 0; q < n; q++) idx.push(Math.min(words.length - 1, wi + q));
      wi += n;
      var tc = hw(ls, { maxLines: null, maxWidth: IW * 1.02, indent: 0 });
      var L = { el: tc.el, idx: idx.length ? idx : [0], y: y, h: tc.h };
      y += fs * 1.5;
      return L;
    });
    var so = null, sig = null;
    if (opts.signoff) { y += fs * 0.3; so = hw(opts.signoff, { indent: IW * 0.42, maxWidth: IW * 0.58 }).el; y += fs * 1.4; }
    if (opts.signature) { sig = hw(opts.signature, { indent: IW * 0.42, maxWidth: IW * 0.58, size: fs * 1.55, weight: "bold" }).el; }
    // timing
    var t0 = cT(opts.writeAt != null ? opts.writeAt : 0.5);
    var t1 = opts.writeEnd != null ? opts.writeEnd : Math.min(V.duration - 0.8, t0 + words.length * 0.32);
    var wt;
    if (opts.sync !== false) wt = S.syncTimes(words, { start: t0, end: t1, lead: 0.05, minGap: 0.02 });
    else wt = words.map(function (_, i) { return lerp(t0, t1, i / Math.max(1, words.length)); });
    var tl = a.tl;
    if (head) tl.fromTo(head, { opacity: 0 }, { opacity: 1 }, { at: Math.max(0, t0 - 0.5), dur: 0.8 });
    if (sal) tl.fromTo(sal, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" }, { at: Math.max(0, t0 - 0.4), dur: 0.6, ease: "inOutSine" });
    var end = t0;
    lines.forEach(function (L) {
      var s0 = wt[L.idx[0]], last = L.idx[L.idx.length - 1];
      var s1 = Math.max(s0 + 0.35, (wt[last + 1] != null ? wt[last + 1] : wt[last] + 0.35) - 0.02);
      L.start = s0; L.end = s1;
      tl.fromTo(L.el, { clipPath: "inset(-20% 100% -20% 0%)" }, { clipPath: "inset(-20% 0% -20% 0%)" }, { at: cT(s0), dur: Math.max(0.2, s1 - s0), ease: "linear" });
      end = Math.max(end, s1);
    });
    if (so) { tl.fromTo(so, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" }, { at: cT(end + 0.1), dur: 0.6, ease: "inOutSine" }); end += 0.7; }
    if (sig) { tl.fromTo(sig, { clipPath: "inset(-30% 100% -30% 0%)" }, { clipPath: "inset(-30% 0% -30% 0%)" }, { at: cT(end + 0.1), dur: 1.0, ease: "inOutSine" }); end += 1.1; }
    it.lines = lines;
    it.end = end;
    it.page = pg;
    it.lineCenter = function (i) { var L = lines[clamp(i, 0, lines.length - 1)]; if (!L) return it.point(0.5, 0.5); return it.point(0.5, (pad * 0.8 + L.y + L.h / 2) / h); };
    if (opts.at != null || opts.enter) S.place(it, opts.at != null ? opts.at : 0, opts.enter || "slide", opts);
    return it;
  };

  // ───────────────────────── ledger page ─────────────────────────
  /** Ledger sheet with ruled lines and red money columns. opts: title, year, w, h, rot, lines (count), at + enter.
   *  Returns item + { line(i) → y px, lh, row(label, value, at, opts), hero(value, at, opts) }. */
  S.ledger = function (opts) {
    opts = opts || {};
    var a = cur();
    var w = opts.w || Math.min(a.ww * 0.66, a.wh * 0.8), h = opts.h || w * (V.isPortrait ? 1.35 : 0.9);
    var it = makeItem("ledger", { x: opts.x, y: opts.y, cx: opts.cx, cy: opts.cy, w: w, h: h, rot: opts.rot, parent: opts.parent, z: opts.z });
    applyStyle(it.el, paperBg("#E6E0C6", 0.26));
    var nL = opts.lines || 16, top = h * 0.14, lh = (h - top - h * 0.05) / nL;
    el("div.ad-ledger-rules", { parent: it.el, style: { top: px(top), backgroundSize: "100% " + px(lh), backgroundImage: "linear-gradient(to bottom, transparent " + px(lh - Math.max(1, u(1.3))) + ", rgba(60,110,140,0.4) " + px(lh - Math.max(1, u(1.3))) + ")" } });
    var colX = w * 0.68;
    [w * 0.1, colX, colX + w * 0.012, w * 0.9].forEach(function (x, i) { el("i.ad-ledger-v", { parent: it.el, style: { left: px(x), top: px(top * 0.7), background: i === 0 || i === 3 ? "rgba(170,50,40,0.55)" : "rgba(170,50,40,0.75)" } }); });
    var hd = textCanvas(it.el, opts.title || "Ledger", { font: SERIF, weight: "bold", size: top * 0.36, min: top * 0.14, maxWidth: w * (opts.year ? 0.6 : 0.8), maxLines: 1, upper: true, letterSpacing: 0.12, color: "#3B2E22" });
    hd.el.style.left = px(w * 0.1); hd.el.style.top = px(top * 0.62 - hd.h);
    if (opts.year) { var yr = textCanvas(it.el, opts.year, { font: SERIF, style: "italic", size: top * 0.4, maxWidth: w * 0.2, maxLines: 1, color: C.red }); yr.el.style.left = px(w * 0.9 - yr.w); yr.el.style.top = px(top * 0.66 - yr.h); }
    it.lh = lh; it.top = top; it.colX = colX;
    it.line = function (i) { return top + lh * i; };
    /** A written entry on line i: label left, value right of the red rule (counts up). */
    it.row = function (i, label, value, at, o) {
      o = o || {};
      var y = it.line(i);
      var lab = textCanvas(it.el, label, { font: SERIF, style: "italic", size: lh * 0.6, min: lh * 0.28, maxWidth: colX - w * 0.15, maxLines: 1, color: C.blueInk, lineHeight: 1 });
      lab.el.style.left = px(w * 0.12); lab.el.style.top = px(y + lh * 0.98 - lab.h);
      var dec = o.decimals || 0, num = +value;
      var fmt = function (n) { return (o.prefix || "") + V.format(n, dec, true) + (o.suffix || ""); };
      var vw = w * 0.9 - colX - w * 0.035;
      var val = textCanvas(it.el, isFinite(num) && str(value) !== "" ? fmt(num) : value, { font: SERIF, style: "italic", size: lh * 0.62, min: lh * 0.24, width: vw, maxLines: 1, align: "right", color: C.ink, lineHeight: 1 });
      val.el.style.left = px(colX + w * 0.02); val.el.style.top = px(y + lh * 0.98 - val.h);
      at = cT(at);
      a.tl.fromTo(lab.el, { clipPath: "inset(-20% 100% -20% 0%)" }, { clipPath: "inset(-20% 0% -20% 0%)" }, { at: at, dur: 0.7, ease: "inOutSine" });
      a.tl.fromTo(val.el, { opacity: 0 }, { opacity: 1 }, { at: at + 0.3, dur: 0.3 });
      if (isFinite(num) && str(value) !== "") countCanvas(val, num, fmt, at + 0.3, 1.1);
      if (o.total) { var rl = el("i.ad-ledger-total", { parent: it.el, style: { left: px(colX + w * 0.015), width: px(w * 0.9 - colX - w * 0.02), top: px(y + lh * 0.92) } }); a.tl.fromTo(rl, { scaleX: 0 }, { scaleX: 1 }, { at: at + 1.2, dur: 0.5 }); }
      return { lab: lab.el, val: val.el, y: y };
    };
    if (opts.at != null || opts.enter) S.place(it, opts.at != null ? opts.at : 0, opts.enter || "slide", opts);
    return it;
  };

  /** Hand-inked ellipse around an item region (fractions), drawn at `at`. */
  S.inkCircle = function (item, fx, fy, fw, fh, at, opts) {
    opts = opts || {};
    var svg = sv("svg", { class: "ad-ink", viewBox: "0 0 " + f1(item.w) + " " + f1(item.h), width: f1(item.w), height: f1(item.h) }, item.el);
    var rnd = rng("ink" + fx + fy);
    var d = S.roughEllipse(item.w * fx, item.h * fy, (item.w * fw) / 2, (item.h * fh) / 2, rnd);
    var p = sv("path", { d: d, fill: "none", stroke: opts.color || C.red, "stroke-width": f1(opts.width || item.w * 0.006), "stroke-linecap": "round", opacity: 0.85 }, svg);
    cur().tl.fromTo(p, { draw: 0 }, { draw: 1 }, { at: cT(at), dur: opts.dur || 0.8, ease: "inOutSine" });
    return p;
  };

  // ───────────────────────── film strip ─────────────────────────
  /**
   * 35mm film strip of photograph frames. opts: frames: [{ subject, tone }], frameW (px), x, y, tone, label, at + enter.
   * Returns item + { frameAt(i) → item fraction centre, frameRect(i) }.
   */
  S.filmstrip = function (opts) {
    opts = opts || {};
    var a = cur();
    var frames = arr(opts.frames).slice(0, 8);
    if (!frames.length) frames = [{ subject: "portrait" }];
    var fw = opts.frameW || Math.min(a.W, a.H) * 0.5, fh = fw * 0.7, gap = fw * 0.08;
    var band = fh * 0.2;
    var w = frames.length * (fw + gap) + gap * 3, h = fh + band * 2;
    var it = makeItem("film", { x: opts.x, y: opts.y, cx: opts.cx, cy: opts.cy, w: w, h: h, rot: opts.rot, parent: opts.parent, z: opts.z, cull: false });
    var hole = band * 0.42, step = band * 0.9;
    var holes = "repeating-linear-gradient(90deg, transparent 0px, transparent " + px(step * 0.3) + ", rgba(240,226,196,0.85) " + px(step * 0.3) + ", rgba(240,226,196,0.85) " + px(step * 0.3 + hole) + ", transparent " + px(step * 0.3 + hole) + ", transparent " + px(step) + ")";
    el("i.ad-film-holes", { parent: it.el, style: { top: px(band * 0.29), height: px(band * 0.42), backgroundImage: holes } });
    el("i.ad-film-holes", { parent: it.el, style: { bottom: px(band * 0.29), height: px(band * 0.42), backgroundImage: holes } });
    var rects = [];
    frames.forEach(function (f, i) {
      var x = gap * 1.5 + i * (fw + gap);
      var fr = el("div.ad-film-frame", { parent: it.el, style: { left: px(x), top: px(band), width: px(fw), height: px(fh) } });
      var T = toneFn(f.tone || opts.tone || "silver");
      fr.style.background = T(0.5);
      drawSubject(fr, SUBJECTS[f.subject] ? f.subject : S.guessSubject(f.subject || f.caption || ""), T, i + 1);
      var gt = grainTex();
      if (gt) el("div.ad-ph-grain", { parent: fr, style: { backgroundImage: "url(" + gt + ")", backgroundSize: px(u(120)) + " " + px(u(120)) } });
      el("div.ad-ph-vig", { parent: fr });
      var fn = textCanvas(it.el, (12 + i) + "  ▸  " + (12 + i) + "A", { font: TYPE, weight: "bold", size: band * 0.22, color: "#E39A3A", cls: "ad-film-num" });
      fn.el.style.left = px(x + fw * 0.05); fn.el.style.top = px(band * 0.02);
      if (i % 2 === 0) { var fl = textCanvas(it.el, opts.label || "SAFETY FILM 5063", { font: TYPE, weight: "bold", size: band * 0.22, color: "#E39A3A", cls: "ad-film-num", upper: true }); fl.el.style.left = px(x + fw * 0.4); fl.el.style.bottom = px(band * 0.02); }
      rects.push({ x: x, y: band, w: fw, h: fh });
    });
    it.frameRect = function (i) { return rects[clamp(i, 0, rects.length - 1)]; };
    it.frameAt = function (i) { var r = it.frameRect(i); return [(r.x + r.w / 2) / w, (r.y + r.h / 2) / h]; };
    it.frameW = fw; it.frameH = fh; it.count = frames.length;
    if (opts.at != null || opts.enter) S.place(it, opts.at != null ? opts.at : 0, opts.enter || "slide", opts);
    return it;
  };

  // ───────────────────────── desk props (no text) ─────────────────────────
  /** Envelope with stamp and postmark. */
  S.envelope = function (opts) {
    opts = opts || {};
    var w = opts.w || u(420), h = w * 0.58;
    var it = makeItem("envelope", { x: opts.x, y: opts.y, cx: opts.cx, cy: opts.cy, w: w, h: h, rot: opts.rot, z: opts.z });
    applyStyle(it.el, paperBg("#D8C7A2", 0.3));
    var svg = sv("svg", { class: "ad-fill", viewBox: "0 0 100 58", preserveAspectRatio: "none" }, it.el);
    sv("path", { d: "M0 0 L50 32 L100 0", fill: "none", stroke: "rgba(80,56,28,0.35)", "stroke-width": 0.5 }, svg);
    sv("path", { d: "M0 58 L40 26 M100 58 L60 26", fill: "none", stroke: "rgba(80,56,28,0.2)", "stroke-width": 0.4 }, svg);
    var st = sv("g", { transform: "translate(80 6)" }, svg);
    sv("rect", { x: 0, y: 0, width: 13, height: 15, fill: "#B44C3A", stroke: "#EFE3C6", "stroke-width": 1, "stroke-dasharray": "1 0.6" }, st);
    sv("circle", { cx: 6.5, cy: 7, r: 3.6, fill: "#E9C9A0", opacity: 0.8 }, st);
    sv("circle", { cx: 74, cy: 13, r: 7.5, fill: "none", stroke: "rgba(40,30,60,0.55)", "stroke-width": 0.6 }, svg);
    for (var i = 0; i < 4; i++) sv("path", { d: "M58 " + (8 + i * 2.6) + " q4 -1.4 8 0 t8 0 t8 0 t8 0", fill: "none", stroke: "rgba(40,30,60,0.45)", "stroke-width": 0.5 }, svg);
    for (var k = 0; k < 3; k++) sv("path", { d: "M30 " + (34 + k * 6) + " q12 -2 26 0", fill: "none", stroke: "rgba(40,40,80,0.45)", "stroke-width": 0.9, "stroke-linecap": "round" }, svg);
    if (opts.at != null) S.place(it, opts.at, opts.enter || "slide", opts);
    return it;
  };
  /** Brass magnifying loupe resting on the desk. */
  S.loupe = function (opts) {
    opts = opts || {};
    var r = opts.r || u(120);
    var it = makeItem("loupe", { cx: opts.cx, cy: opts.cy, x: opts.x, y: opts.y, w: r * 2, h: r * 2, rot: opts.rot || 0, z: opts.z != null ? opts.z : 5 });
    var svg = sv("svg", { class: "ad-fill", viewBox: "-60 -60 120 120", style: { overflow: "visible" } }, it.el);
    var gid = nid("lp"), defs = sv("defs", null, svg);
    var lg = sv("radialGradient", { id: gid, cx: 0.35, cy: 0.3, r: 0.8 }, defs);
    sv("stop", { offset: 0, "stop-color": "#FFFFFF", "stop-opacity": 0.28 }, lg); sv("stop", { offset: 0.6, "stop-color": "#FFF6E0", "stop-opacity": 0.04 }, lg); sv("stop", { offset: 1, "stop-color": "#000", "stop-opacity": 0.12 }, lg);
    sv("path", { d: "M40 40 L86 86", stroke: "#1F1610", "stroke-width": 16, "stroke-linecap": "round" }, svg);
    sv("path", { d: "M40 40 L86 86", stroke: "#4A3322", "stroke-width": 11, "stroke-linecap": "round" }, svg);
    sv("circle", { r: 54, fill: "url(#" + gid + ")" }, svg);
    sv("circle", { r: 54, fill: "none", stroke: "#8A6A32", "stroke-width": 7 }, svg);
    sv("circle", { r: 54, fill: "none", stroke: "#D9B56A", "stroke-width": 2, opacity: 0.8 }, svg);
    sv("path", { d: "M-34 -30 Q-20 -44 0 -46", fill: "none", stroke: "#fff", "stroke-width": 3, opacity: 0.45, "stroke-linecap": "round" }, svg);
    if (opts.at != null) S.place(it, opts.at, opts.enter || "slide", opts);
    return it;
  };
  /** Fountain pen lying on the desk. */
  S.pen = function (opts) {
    opts = opts || {};
    var l = opts.length || u(520);
    var it = makeItem("pen", { cx: opts.cx, cy: opts.cy, w: l, h: l * 0.07, rot: opts.rot != null ? opts.rot : -32, z: opts.z });
    var svg = sv("svg", { class: "ad-fill", viewBox: "0 0 200 14", preserveAspectRatio: "none" }, it.el);
    sv("path", { d: "M0 7 L22 2.5 L24 11.5 Z", fill: "#C9A24E" }, svg);
    sv("path", { d: "M2 7 L18 7", stroke: "#5A4420", "stroke-width": 0.6 }, svg);
    sv("rect", { x: 22, y: 1.5, width: 110, height: 11, rx: 5, fill: "#16110D" }, svg);
    sv("rect", { x: 132, y: 1, width: 66, height: 12, rx: 6, fill: "#221812" }, svg);
    sv("rect", { x: 130, y: 0.6, width: 4, height: 12.8, fill: "#C9A24E" }, svg);
    sv("rect", { x: 140, y: 2, width: 46, height: 2, rx: 1, fill: "#C9A24E" }, svg);
    sv("rect", { x: 24, y: 3, width: 106, height: 2, rx: 1, fill: "#fff", opacity: 0.12 }, svg);
    return it;
  };
  /** Faint coffee-cup ring stain. */
  S.stain = function (opts) {
    opts = opts || {};
    var r = opts.r || u(110);
    var it = makeItem("stain", { cx: opts.cx, cy: opts.cy, w: r * 2, h: r * 2, rot: 0, z: opts.z, cull: false });
    it.el.style.borderRadius = "50%";
    it.el.style.boxShadow = "inset 0 0 0 " + px(r * 0.07) + " rgba(60,30,8,0.32), inset 0 0 " + px(r * 0.2) + " rgba(60,30,8,0.18)";
    return it;
  };
  /** A blank sheet / old photo pile for desk clutter. kind: sheet | print | news | card */
  function clutterSheet(kind, cx, cy, w, rot, r) {
    if (kind === "print") return S.photo({ subject: SUBJECT_IDS[Math.floor(r() * SUBJECT_IDS.length)], cx: cx, cy: cy, w: w, rot: rot, tone: r() > 0.5 ? "sepia" : "silver", mounts: false, damage: 0.8 });
    var h = kind === "card" ? w * 0.6 : w * 1.3;
    var it = makeItem("sheet", { cx: cx, cy: cy, w: w, h: h, rot: rot });
    applyStyle(it.el, paperBg(kind === "news" ? C.news : kind === "card" ? C.manila : C.paper2, 0.4));
    if (kind === "news") { var t = newsTextUrl(7, w * 0.3, h, w * 0.016); if (t) { var c = el("div.ad-fill", { parent: it.el, style: { left: "6%", right: "6%", top: "8%", bottom: "6%", backgroundImage: "url(" + t + ")", backgroundSize: px(w * 0.3) + " " + px(h), opacity: 0.85 } }); void c; } }
    else if (kind === "sheet") el("div.ad-fill.ad-sheet-lines", { parent: it.el, style: { left: "12%", right: "12%", top: "14%", bottom: "12%" } });
    return it;
  }
  /** Scatter period clutter around a central rect (world px) so the desk feels lived in. */
  S.clutter = function (center, opts) {
    opts = opts || {};
    var a = cur(), r = rng("clutter" + (opts.seed || "") + a.ww);
    var c = center || { x: a.ww * 0.3, y: a.wh * 0.3, w: a.ww * 0.4, h: a.wh * 0.4 };
    var kinds = opts.kinds || ["print", "sheet", "news", "card"];
    var spots = [
      [c.x - c.w * 0.05, c.y + c.h * 0.85], [c.x + c.w * 1.05, c.y + c.h * 0.1], [c.x + c.w * 0.95, c.y + c.h * 1.02], [c.x + c.w * 0.05, c.y - c.h * 0.02],
    ];
    var n = opts.count != null ? opts.count : 3;
    for (var i = 0; i < n; i++) {
      var sp = spots[i % spots.length];
      var cs = clutterSheet(kinds[i % kinds.length], sp[0], sp[1], Math.min(a.W, a.H) * (0.3 + r() * 0.14), (r() - 0.5) * 24, r);
      a.items.insertBefore(cs.el, a.items.firstChild);
    }
    if (opts.stain !== false) S.stain({ cx: c.x + c.w * (r() > 0.5 ? 1.08 : -0.08), cy: c.y + c.h * (0.2 + r() * 0.6), r: Math.min(a.W, a.H) * 0.1 });
    if (opts.pen) S.pen({ cx: c.x + c.w * 1.06, cy: c.y + c.h * 0.72, length: Math.min(a.W, a.H) * 0.42, rot: -58 + r() * 20 });
  };

  // ───────────────────────── templates ─────────────────────────
  var T = {};
  function D() { return V.duration; }
  function keyT(word, frac, after) {
    var t = word ? V.find(plain(word), after || 0) : null;
    if (t == null && word) { var k = S.autoKey(word); if (k) t = V.find(k, after || 0); }
    return t != null ? t : D() * frac;
  }
  function focusFor(ph, mode) {
    var bx = ph.imgBox;
    var fx = (ph.focus[0] - bx.x0) / (bx.x1 - bx.x0), fy = (ph.focus[1] - bx.y0) / (bx.y1 - bx.y0);
    var M = { left: [0.3, 0.5], right: [0.7, 0.5], top: [0.5, 0.3], bottom: [0.5, 0.7], center: [0.5, 0.5] };
    return M[mode] || [clamp(fx, 0.15, 0.85), clamp(fy, 0.15, 0.85)];
  }
  function photoTarget(ph) { return { rect: ph.imgRect() }; }
  function subjOf(s, extra) { return SUBJECTS[s] ? s : S.guessSubject(str(s) + " " + str(extra)); }
  function printW(subject, maxW, maxH, capped) {
    var vb = SUBJECTS[subject].vb, asp = vb[0] / vb[1];
    return Math.min(maxW, maxH / (1 / asp + (capped ? 0.15 : 0.09)));
  }

  /** photo-pan — the workhorse: one archival print, slow Ken Burns, lower-third + date stamp. */
  T["photo-pan"] = function (p, root) {
    var a = S.desk(root, { surface: p.surface || "wood" });
    var W = a.W, H = a.H, Ld = V.isLandscape;
    var subject = subjOf(p.subject, (p.title || "") + " " + V.narration);
    var pw = printW(subject, W * (Ld ? 0.6 : 0.86), H * (Ld ? 0.84 : V.isPortrait ? 0.6 : 0.8), !!p.caption);
    var ph = S.photo({ subject: subject, tone: p.tone, cx: W * 0.5, cy: H * (V.isPortrait ? 0.46 : 0.5), w: pw, rot: -1.4, caption: p.caption, damage: p.damage != null ? p.damage : 0.55, seed: p.seed });
    S.clutter(ph.rect, { count: 3, pen: Ld });
    S.place(ph, 0.05, "develop", { dur: 2.2 });
    var fp = focusFor(ph, p.focus);
    var tgt = photoTarget(ph), d = D(), move = p.move || "push-in";
    if (move === "pull-out") {
      S.camera.kenBurns(tgt, 0, d * 0.62, { from: { fx: fp[0], fy: fp[1], zoom: 1.7 }, to: { fx: 0.5, fy: 0.5, zoom: 1.0 } });
      S.camera.focus(ph, d * 0.62 + 0.02, d * 0.38, { fill: 0.84, ease: "inOutSine" });
    } else if (move === "pan-left" || move === "pan-right") {
      var l2r = move === "pan-right";
      S.camera.kenBurns(tgt, 0, d, { from: { fx: l2r ? 0.35 : 0.65, fy: fp[1], zoom: 1.12 }, to: { fx: l2r ? 0.65 : 0.35, fy: fp[1], zoom: 1.18 } });
    } else {
      S.camera.focus(ph, 0, 0.01, { fill: 0.86 });
      S.camera.kenBurns(tgt, 0.7, Math.max(1, d - 0.7), { cut: false, from: { fx: 0.5, fy: 0.5 }, to: { fx: fp[0], fy: fp[1], zoom: p.zoom || 1.42 } });
    }
    if (p.date || p.place) S.dateStamp(p.date || p.place, { sub: p.date ? p.place : null, at: 0.5 });
    if (p.title) S.lowerThird(p.title, { sub: p.subtitle, at: Math.max(0.8, keyT(p.keyword || p.title, 0.3) - 0.3) });
  };

  /** newspaper-headline — a front page spins onto the desk, the camera reads the headline. */
  T["newspaper-headline"] = function (p, root) {
    var a = S.desk(root, { surface: "wood" });
    var W = a.W, H = a.H, Ld = V.isLandscape, d = D();
    var nw = Ld ? H * 0.68 : V.isPortrait ? W * 0.86 : W * 0.66;
    var cx = W * 0.5, cy = H * 0.5;
    clutterSheet("news", cx - nw * 0.3, cy + nw * 0.1, nw * 0.95, -9, rng("n1"));
    clutterSheet("news", cx + nw * 0.35, cy - nw * 0.05, nw * 0.9, 7, rng("n2"));
    var tLand = Math.max(1.4, keyT(p.keyword || p.headline, 0.22) + 0.05);
    var np = S.newspaper({ name: p.paper, date: p.date, headline: p.headline, subhead: p.subhead, kicker: p.kicker, subject: subjOf(p.subject, p.headline), caption: p.caption, tone: p.tone, price: p.price, cx: cx, cy: cy, w: nw, rot: 2.2, z: 3 });
    S.place(np, Math.max(0.05, tLand - 1.5), p.spin === false ? "drop" : "spin", { dur: 1.5 });
    S.camera.shake(tLand, u(6), 0.4);
    S.camera.wide(0, 0.01, { fill: 1.02 });
    var hr = np.headlineRect, hlRect = { x: np.x, y: np.y + np.h * hr.fy0 - np.h * 0.03, w: np.w, h: np.h * (hr.fy1 - hr.fy0) + np.h * 0.06 };
    var zH = Math.min(2.1, fitZoom(hlRect, 0.94));
    var tHead = tLand + 0.35;
    if (tHead < d - 1) S.camera.to(np.point(0.5, np.headlineAt[1]).x, np.point(0.5, np.headlineAt[1]).y, zH, tHead, 1.8, { ease: "inOutCubic" });
    var tPh = Math.max(tHead + 2.6, d * 0.42);
    if (d < 9) tPh = d;
    if (tPh < d - 2.5) {
      var pp = np.point(np.photoAt[0], np.photoAt[1]);
      S.camera.to(pp.x, pp.y, Math.min(zH * 0.9, fitZoom({ w: np.w * np.photoSize.w, h: np.h * np.photoSize.h }, 0.95)), tPh, 2.4, { ease: "inOutSine" });
    }
    var tOut = Math.max(Math.min(tPh + 2.6, d), tHead + 2.2, d - 2.4);
    if (tOut > d - 1.2) tOut = Math.max(tHead + 1.9, d - 1.6);
    S.camera.focus(np, tOut, Math.max(0.8, Math.min(2.2, d - tOut)), { fill: 0.94 });
  };

  /** map-route — parchment map; places ink in as they are named and a route draws between them. */
  T["map-route"] = function (p, root) {
    var a = S.desk(root, { surface: "wood" });
    var W = a.W, H = a.H, d = D();
    var places = arr(p.places).slice(0, 7);
    if (places.length < 2) places = places.concat([{ name: "Departure" }, { name: "Arrival" }]).slice(0, Math.max(2, places.length));
    var mw, mh;
    if (V.isLandscape) { mw = Math.min(W * 0.9, (H * 0.88) / 0.62); mh = mw * 0.62; }
    else if (V.isPortrait) { mw = W * 0.92; mh = Math.min(H * 0.78, mw * 1.42); }
    else { mw = W * 0.9; mh = mw * 0.82; }
    S.clutter({ x: (W - mw) / 2, y: (H - mh) / 2, w: mw, h: mh }, { count: 2, kinds: ["sheet", "print"], stain: true });
    var map = S.map({ title: p.title, terrain: p.terrain, places: places, cx: W / 2, cy: H / 2, w: mw, h: mh, rot: -0.8, seed: p.title, z: 2 });
    S.place(map, 0.02, "fade", { dur: 0.9 });
    var times = S.syncTimes(places.map(function (pl) { return S.autoKey(pl.name || ""); }), { start: 0.9, end: Math.max(1.6, d * 0.74), lead: 0.25, minGap: 0.7 });
    map.drawPlaces(times);
    var rt = map.route(times, { style: p.route || "land" });
    var zW = fitZoom(map, 0.94);
    var zT = zW * (p.zoom || (V.isPortrait ? 1.35 : 1.55));
    S.camera.focus(map, 0, 0.01, { fill: 0.94 });
    var p0 = map.placeAt(0);
    S.camera.to(p0.x, p0.y, zT, Math.max(0.1, times[0] - 0.7), 1.2, { ease: "inOutSine" });
    var lastT2 = times[times.length - 1];
    if (rt) S.camera.track(function (t) { var hp = rt.head(t); return { x: hp.x, y: hp.y, zoom: zT }; }, times[0] + 0.5, 0.9);
    var tOut = Math.min(d - 1.6, lastT2 + 1.0);
    if (tOut > times[0] + 1) S.camera.focus(map, tOut, Math.min(2, d - tOut), { fill: 0.94 });
    if (p.subtitle) S.lowerThird(p.subtitle, { at: Math.max(0.6, tOut - 0.2), sub: p.date });
    else if (p.date) S.dateStamp(p.date, { at: 0.5 });
  };

  /** document-reveal — a typed memo: text strikes onto the page, redactions sweep across, a stamp lands. */
  T["document-reveal"] = function (p, root) {
    var a = S.desk(root, { surface: p.surface || "felt" });
    var W = a.W, H = a.H, d = D();
    var dw, dh;
    if (V.isPortrait) { dw = W * 0.86; dh = Math.min(H * 0.8, dw * 1.3); } else { dh = H * 0.92; dw = dh / 1.3; }
    var tS = p.stamp ? Math.max(2.2, keyT(p.keyword || p.stamp, 0.82)) : d;
    var typeAt = 1.0, typeEnd = p.stamp ? Math.max(typeAt + 1.2, Math.min(tS - 0.9, d * 0.8)) : d * 0.82;
    S.clutter({ x: (W - dw) / 2, y: (H - dh) / 2, w: dw, h: dh }, { count: 2, kinds: ["print", "card"], pen: V.isLandscape });
    var doc = S.document({ header: p.header, title: p.title, date: p.date, ref: p.ref, subject: p.subject, from: p.from, to: p.to, body: p.body, redact: p.redact, classification: p.classification, cx: W / 2, cy: H / 2, w: dw, h: dh, rot: 0.8, typeAt: typeAt, typeEnd: typeEnd, clip: true, z: 2 });
    S.place(doc, 0.05, "slide", { from: "bottom", dur: 1.1 });
    if (p.stamp) S.stamp(doc, p.stamp, { at: tS, color: p.stampColor, fx: 0.6, fy: 0.62, rot: -13 });
    var zW = fitZoom(doc, 0.94), zT = zW * (V.isPortrait ? 1.3 : 1.62);
    var visH = H / zT;
    S.camera.focus(doc, 0, 0.01, { fill: 0.94 });
    var qs = doc.lines;
    function lineY(t) {
      if (!qs.length) return doc.point(0.5, 0.5).y;
      var i = 0;
      while (i < qs.length - 1 && t >= qs[i + 1].start) i++;
      var q = qs[i], nx = qs[i + 1];
      var y0 = doc.lineFy(q) * doc.h, y1 = nx ? doc.lineFy(nx) * doc.h : y0;
      var pr = clamp((t - q.start) / Math.max(0.05, (nx ? nx.start : q.end) - q.start), 0, 1);
      return lerp(y0, y1, pr);
    }
    var trackEnd = p.stamp ? tS - 1.0 : typeEnd + 0.4;
    if (trackEnd > typeAt + 1) {
      S.camera.track(function (t) {
        var yy = clamp(lineY(Math.min(t, trackEnd)), visH * 0.42, doc.h - visH * 0.42);
        var pt = doc.point(0.5, yy / doc.h);
        return { x: pt.x, y: pt.y, zoom: zT };
      }, typeAt - 0.2, 1.2);
      S.camera.focus(doc, trackEnd, 0.9, { fill: 0.94 });
    }
    if (!p.stamp && d - trackEnd > 2) S.camera.focus(doc, trackEnd + 1, d - trackEnd - 1, { fill: 0.94, zoom: 1.06 });
  };

  /** timeline-ribbon — a paper tape of dates across the desk; tags and prints arrive as the years are spoken. */
  T["timeline-ribbon"] = function (p, root) {
    var ev = arr(p.events).slice(0, 6);
    if (ev.length < 2) ev = ev.concat([{ date: "Then", label: "" }, { date: "Now", label: "" }]).slice(0, Math.max(2, ev.length));
    var n = ev.length, W0 = V.width, H0 = V.height, Pt = V.isPortrait, d = D();
    var sp = Pt ? H0 * 0.3 : W0 * (V.isLandscape ? 0.36 : 0.5);
    var ww = Pt ? W0 : W0 + sp * (n - 1), wh = Pt ? H0 + sp * (n - 1) : H0;
    var a = S.desk(root, { surface: "wood", width: ww, height: wh, lamp: { x: ww / 2, y: wh / 2, r: Math.max(ww, wh) * 0.7 } });
    var W = a.W, H = a.H, m = Math.min(W, H);
    var rib, rx, ry, thick = m * 0.075;
    if (Pt) { rx = W * 0.2; rib = makeItem("ribbon", { x: rx - thick / 2, y: H * 0.18, w: thick, h: wh - H * 0.36, cull: false }); }
    else { ry = H * 0.6; rib = makeItem("ribbon", { x: W * 0.22, y: ry - thick / 2, w: ww - W * 0.44, h: thick, cull: false }); }
    applyStyle(rib.el, paperBg("#D8C69C", 0.2));
    rib.el.classList.add(Pt ? "ad-ribbon-v" : "ad-ribbon-h");
    var times = S.syncTimes(ev.map(function (e) { return S.autoKey(e.date) || S.autoKey(e.label); }), { start: 0.5, end: Math.max(1.5, d * 0.72), lead: 0.3, minGap: 0.8 });
    var tl = a.tl, pts = [];
    ev.forEach(function (e, i) {
      var cx = Pt ? rx : W * 0.5 + i * sp, cy = Pt ? H * 0.5 + i * sp : ry;
      pts.push([cx, cy]);
      var at = times[i];
      var pinEl = el("i.ad-rib-pin", { parent: a.items, style: { left: px(cx - m * 0.018), top: px(cy - m * 0.018), width: px(m * 0.036), height: px(m * 0.036), zIndex: 4 } });
      tl.fromTo(pinEl, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }, { at: cT(at), dur: 0.4, ease: "outBack" });
      var up = i % 2 === 0;
      var tw = Pt ? W * 0.56 : Math.min(sp * 0.7, m * 0.56), th = tw * 0.56;
      var tx = Pt ? W * 0.62 : cx, ty = Pt ? cy - th * 0.15 : up ? cy - thick - th * 0.62 : cy + thick + th * 0.62;
      var tag = makeItem("tag", { cx: tx, cy: ty, w: tw, h: th, rot: (i % 2 ? 2.4 : -2.2), z: 3 });
      applyStyle(tag.el, paperBg(C.manila, 0.3));
      el("i.ad-tag-hole", { parent: tag.el, style: { left: px(tw * 0.06), top: px(th * 0.42), width: px(th * 0.14), height: px(th * 0.14) } });
      var dt = textCanvas(tag.el, e.date || "", { font: SERIF, weight: "bold", size: th * 0.34, min: th * 0.14, maxWidth: tw * 0.74, maxLines: 1, color: C.ink });
      dt.el.style.left = px(tw * 0.17); dt.el.style.top = px(th * 0.1);
      if (e.label) { var lb = textCanvas(tag.el, e.label, { font: SERIF, style: "italic", size: th * 0.15, min: th * 0.07, width: tw * 0.76, maxLines: 3, maxHeight: th * 0.46, color: C.blueInk, lineHeight: 1.15 }); lb.el.style.left = px(tw * 0.17); lb.el.style.top = px(th * 0.12 + dt.h + th * 0.02); }
      S.place(tag, at, "drop");
      var anchor = Pt ? tag.point(0.06, 0.5) : tag.point(0.5, up ? 1 : 0);
      S.string({ x: cx, y: cy }, anchor, { at: at + 0.35, dur: 0.6, sag: m * 0.02, width: m * 0.003, color: "#6B5233" });
      if (e.subject) {
        var pw = Pt ? W * 0.3 : Math.min(sp * 0.5, m * 0.34);
        var ph = S.photo({ subject: subjOf(e.subject, e.label), cx: Pt ? W * 0.5 : cx + sp * 0.06, cy: Pt ? cy + th * 0.78 : up ? cy + thick + pw * 0.55 : cy - thick - pw * 0.55, w: pw, rot: (i % 2 ? -4 : 3.5), tone: p.tone, mounts: false, damage: 0.6, z: 2 });
        S.place(ph, at + 0.25, "slide", { from: Pt ? "left" : up ? "bottom" : "top", dur: 1.1 });
      }
    });
    // camera walks the ribbon
    var z1 = 1;
    function evPt(i) { var q = pts[i]; return Pt ? { x: W * 0.5, y: q[1] + sp * 0.1 } : { x: q[0], y: H * 0.5 }; }
    var e0 = evPt(0);
    S.camera.to(e0.x, e0.y, z1, 0, 0.01);
    for (var i = 1; i < n; i++) { var e = evPt(i); S.camera.to(e.x, e.y, z1, Math.max(0.2, times[i] - 0.8), 1.3, { ease: "inOutCubic" }); }
    var tOut = Math.min(d - 1.4, times[n - 1] + 1.6);
    tOut = Math.max(tOut, times[n - 1] + 0.7);
    var bx0 = Math.min.apply(null, pts.map(function (q) { return q[0]; })), bx1 = Math.max.apply(null, pts.map(function (q) { return q[0]; }));
    var by0 = Math.min.apply(null, pts.map(function (q) { return q[1]; })), by1 = Math.max.apply(null, pts.map(function (q) { return q[1]; }));
    var allR = Pt ? { x: 0, y: by0 - sp * 0.5, w: W, h: by1 - by0 + sp * 1.2 } : { x: bx0 - sp * 0.55, y: H * 0.12, w: bx1 - bx0 + sp * 1.1, h: H * 0.8 };
    S.camera.focus(allR, tOut, Math.max(0.8, Math.min(2, d - tOut)), { fill: 0.98 });
    if (p.title) S.lowerThird(p.title, { at: Math.max(0.6, tOut), sub: p.subtitle });
  };

  /** evidence-board — cork board: cards and prints pinned up, red string connects them. */
  T["evidence-board"] = function (p, root) {
    var a = S.desk(root, { surface: "cork", lamp: { r: Math.max(V.width, V.height) * 0.62 } });
    var W = a.W, H = a.H, d = D(), Pt = V.isPortrait;
    var items = arr(p.items).slice(0, 6);
    if (items.length < 2) items = items.concat([{ label: "Suspect" }, { label: "Evidence" }]).slice(0, Math.max(2, items.length));
    var n = items.length;
    var cols = Pt ? (n <= 2 ? 1 : 2) : n <= 3 ? n : Math.ceil(n / 2), rows = Math.ceil(n / cols);
    var top = H * (Pt ? 0.14 : 0.16), cellW = (W * 0.88) / cols, cellH = (H * (Pt ? 0.74 : 0.74)) / rows;
    var r = rng("board" + n);
    // title strip
    var strip = null;
    if (p.title) {
      strip = makeItem("strip", { cx: W / 2, cy: top * 0.55, w: Math.min(W * 0.6, m0() * 0.9), h: top * 0.5, rot: -1, z: 4 });
      applyStyle(strip.el, paperBg(C.card, 0.2));
      var st = textCanvas(strip.el, p.title, { font: TYPE, weight: "bold", size: strip.h * 0.48, min: strip.h * 0.2, maxWidth: strip.w * 0.9, maxLines: 1, upper: true, letterSpacing: 0.1, color: C.ink });
      st.el.style.left = px((strip.w - st.w) / 2); st.el.style.top = px((strip.h - st.h) / 2);
      S.tape(strip, 0.08, 0.1, { w: strip.h * 1.2, rot: -30 }); S.tape(strip, 0.92, 0.1, { w: strip.h * 1.2, rot: 30 });
    }
    function m0() { return Math.min(W, H); }
    var times = S.syncTimes(items.map(function (it) { return S.autoKey(it.label); }), { start: 0.6, end: Math.max(1.5, d * 0.66), lead: 0.25, minGap: 0.6 });
    var made = [], pins = [];
    items.forEach(function (itm, i) {
      var c = i % cols, rr = Math.floor(i / cols);
      var inRow = Math.min(cols, n - rr * cols);
      var cx = W / 2 + (c - (inRow - 1) / 2) * cellW + (r() - 0.5) * cellW * 0.1;
      var cy = top + cellH * (rr + 0.5) + (r() - 0.5) * cellH * 0.1 + H * 0.02;
      var rot = (r() - 0.5) * 9, obj;
      var cw = Math.min(cellW * 0.8, (cellH * 0.8) / 0.62);
      if (itm.subject) {
        var subj = subjOf(itm.subject, itm.label);
        var pw = printW(subj, cellW * 0.72, cellH * 0.82, true);
        obj = S.photo({ subject: subj, cx: cx, cy: cy, w: pw, rot: rot, caption: itm.label, mounts: false, tone: p.tone, damage: 0.6, z: 2 });
        if (itm.note) { var nc = S.indexCard({ title: itm.note, lines: [], cx: cx + pw * 0.38, cy: cy + obj.h * 0.42, w: pw * 0.62, h: pw * 0.2, rot: -rot * 0.8 + 3, z: 3 }); S.place(nc, times[i] + 0.4, "drop"); }
      } else {
        obj = S.indexCard({ title: itm.label, lines: itm.note ? [itm.note] : [], cx: cx, cy: cy, w: cw, h: cw * 0.62, rot: rot, color: i % 3 === 2 ? "manila" : "white", z: 2 });
      }
      S.place(obj, times[i], "drop", { dur: 0.8 });
      pins.push(S.pin(obj, 0.5, 0.06, { color: i % 2 ? "#2E6A9A" : "#B8261C" }));
      made.push(obj);
    });
    var links = arr(p.links).filter(function (l) { return l && l.from != null && l.to != null && l.from !== l.to && l.from < n && l.to < n && l.from >= 0 && l.to >= 0; });
    if (!links.length) { for (var k = 0; k < n - 1; k++) links.push({ from: k, to: k + 1 }); if (n >= 4) links.push({ from: 0, to: n - 1 }); }
    links.slice(0, 10).forEach(function (l) {
      var at = Math.max(times[l.from], times[l.to]) + 0.55;
      S.string(pins[l.from], pins[l.to], { at: at, dur: 0.7 });
    });
    S.camera.wide(0, 0.01, { fill: 1.0 });
    made.forEach(function (obj, i) { if (i === 0) S.camera.focus(obj, 0.01, 0.01, { fill: 0.55 }); else S.camera.focus(obj, Math.max(0.3, times[i] - 0.55), 1.0, { fill: 0.55, ease: "inOutCubic" }); });
    var tOut = Math.max(times[n - 1] + 0.45, Math.min(d - 1.4, times[n - 1] + 1.3));
    S.camera.wide(tOut, Math.max(0.8, Math.min(1.8, d - tOut)), { fill: 1.0 });
  };

  /** letter-excerpt — a handwritten letter is written line by line as it is read aloud. */
  T["letter-excerpt"] = function (p, root) {
    var a = S.desk(root, { surface: "wood" });
    var W = a.W, H = a.H, d = D();
    var lw, lh;
    if (V.isPortrait) { lw = W * 0.86; lh = Math.min(H * 0.74, lw * 1.25); } else { lh = H * 0.9; lw = lh / 1.25; }
    var cx = W / 2, cy = H / 2;
    S.envelope({ cx: cx + lw * 0.42, cy: cy + lh * 0.32, w: lw * 0.78, rot: 9 });
    if (V.isLandscape) S.pen({ cx: cx + lw * 0.85, cy: cy - lh * 0.1, length: lh * 0.6, rot: -70 });
    S.stain({ cx: cx - lw * 0.7, cy: cy - lh * 0.25, r: lh * 0.12 });
    var writeAt = 0.9, writeEnd = Math.max(writeAt + 1, d * 0.84 - (p.signature || p.author ? 1.2 : 0));
    var lt = S.letter({ text: p.quote, salutation: p.salutation, signoff: p.signoff, signature: p.signature || p.author, date: p.date, place: p.place, cx: cx, cy: cy, w: lw, h: lh, rot: -1.2, writeAt: writeAt, writeEnd: writeEnd, z: 2 });
    S.place(lt, 0.05, "slide", { from: "left", dur: 1.1 });
    var zW = fitZoom(lt, 0.94), zT = zW * (V.isPortrait ? 1.22 : 1.5);
    var visH = H / zT;
    S.camera.focus(lt, 0, 0.01, { fill: 0.94 });
    var Ls = lt.lines;
    function lineY(t) {
      if (!Ls.length) return lt.h / 2;
      var i = 0;
      while (i < Ls.length - 1 && t >= Ls[i + 1].start) i++;
      var y0 = lt.lineCenter(i), y1 = lt.lineCenter(Math.min(Ls.length - 1, i + 1));
      var pr = clamp((t - Ls[i].start) / Math.max(0.05, Ls[i].end - Ls[i].start), 0, 1);
      return { x: lerp(y0.x, y1.x, pr), y: lerp(y0.y, y1.y, pr) };
    }
    var tEnd = Math.min(d - 1.6, lt.end + 0.2);
    if (Ls.length && tEnd > writeAt + 1) {
      S.camera.track(function (t) {
        var q = lineY(Math.min(t, tEnd));
        var c0 = lt.point(0.5, 0.5);
        var dy = clamp(q.y - c0.y, -(lt.h - visH * 0.84) / 2, (lt.h - visH * 0.84) / 2);
        return { x: c0.x, y: c0.y + dy, zoom: zT };
      }, writeAt - 0.3, 1.4);
      S.camera.focus(lt, tEnd, Math.min(1.8, d - tEnd), { fill: 0.94 });
    }
    if (p.author) S.lowerThird(p.author, { sub: p.role || [plain(p.place), plain(p.date)].filter(Boolean).join(", "), at: Math.max(1.2, Math.min(d - 2.2, tEnd)) });
  };

  /** stat-ledger — big numbers inked into an old ledger, the headline figure circled in red. */
  T["stat-ledger"] = function (p, root) {
    var a = S.desk(root, { surface: "wood" });
    var W = a.W, H = a.H, d = D();
    var stats = arr(p.stats).filter(Boolean).slice(0, 4);
    if (!stats.length) stats = [{ value: 0, label: "" }];
    var lw, lh;
    if (V.isLandscape) { lh = H * 0.9; lw = Math.min(W * 0.64, lh * 1.12); } else if (V.isPortrait) { lw = W * 0.9; lh = Math.min(H * 0.7, lw * 1.3); } else { lw = W * 0.86; lh = lw * 0.94; }
    S.clutter({ x: (W - lw) / 2, y: (H - lh) / 2, w: lw, h: lh }, { count: 2, kinds: ["sheet", "card"], pen: true });
    var lg = S.ledger({ title: p.title, year: p.year, cx: W / 2, cy: H / 2, w: lw, h: lh, rot: -0.8, lines: 14, z: 2 });
    S.place(lg, 0.02, "fade", { dur: 0.7 });
    var hero = stats[0], rest = stats.slice(1);
    var tHero = Math.max(0.8, keyT(p.keyword || hero.label, 0.2) - 0.2);
    var dec = hero.decimals || 0, num = +hero.value || 0;
    var fmt = function (n) { return (hero.prefix || "") + V.format(n, dec, true) + (hero.suffix || ""); };
    var hy = lg.line(0.6), hh = lg.lh * 3.6;
    var big = textCanvas(lg.el, fmt(num), { font: SERIF, weight: "bold", size: hh * 0.82, min: hh * 0.3, width: lw * 0.76, maxLines: 1, align: "center", color: "#2B2016", lineHeight: 1, res: 2.6 });
    big.el.style.left = px(lw * 0.12); big.el.style.top = px(hy + (hh - big.h) / 2);
    a.tl.fromTo(big.el, { opacity: 0 }, { opacity: 1 }, { at: cT(tHero), dur: 0.4 });
    var cdur = Math.min(2.2, Math.max(1.2, d * 0.18));
    countCanvas(big, num, fmt, tHero, cdur, "outExpo");
    var hlab = textCanvas(lg.el, hero.label || "", { font: SERIF, style: "italic", size: lg.lh * 0.66, min: lg.lh * 0.28, width: lw * 0.76, maxLines: 1, align: "center", color: C.blueInk, lineHeight: 1 });
    hlab.el.style.left = px(lw * 0.12); hlab.el.style.top = px(lg.line(4.4) + lg.lh * 0.9 - hlab.h);
    a.tl.fromTo(hlab.el, { clipPath: "inset(-20% 100% -20% 0%)" }, { clipPath: "inset(-20% 0% -20% 0%)" }, { at: cT(tHero + 0.6), dur: 0.9, ease: "inOutSine" });
    var bw = Math.min(lw * 0.82, big.w * 0.0 + measure(fmt(num), { font: SERIF, weight: "bold" }, big.size) + lw * 0.1);
    S.inkCircle(lg, 0.5, (hy + hh / 2) / lh, bw / lw, (hh * 1.05) / lh, tHero + cdur + 0.1, { width: lw * 0.006 });
    var rt = S.syncTimes(rest.map(function (s) { return S.autoKey(s.label); }), { start: tHero + cdur + 0.6, end: Math.max(tHero + cdur + 1.2, d * 0.75), lead: 0.2, minGap: 0.7 });
    rest.forEach(function (s, i) { lg.row(6 + i * 1.6, s.label || "", s.value, rt[i], { prefix: s.prefix, suffix: s.suffix, decimals: s.decimals }); });
    if (p.source) { var src = textCanvas(lg.el, "Source: " + plain(p.source), { font: SERIF, style: "italic", size: lg.lh * 0.42, maxWidth: lw * 0.74, maxLines: 1, color: "#5B4A38" }); src.el.style.left = px(lw * 0.12); src.el.style.top = px(lg.line(13) + lg.lh * 0.92 - src.h); a.tl.fromTo(src.el, { opacity: 0 }, { opacity: 0.9 }, { at: cT((rt.length ? rt[rt.length - 1] : tHero + cdur) + 1), dur: 0.8 }); }
    var heroRect = { x: lg.x + lw * 0.08, y: lg.y + hy - lg.lh * 0.6, w: lw * 0.84, h: hh + lg.lh * 2.2 };
    S.camera.focus(heroRect, 0, 0.01, { fill: 0.92 });
    var tOut = Math.max(tHero + cdur + 1.1, rest.length ? rt[0] - 0.9 : d * 0.62);
    if (tOut < d - 0.8) S.camera.focus(lg, tOut, Math.min(1.8, d - tOut), { fill: 0.94 });
  };

  /** chapter-title — a dim print under the lamp, the chapter title resolves in serif capitals. */
  T["chapter-title"] = function (p, root) {
    var a = S.desk(root, { surface: "black", drift: 0.6, lamp: { r: Math.max(V.width, V.height) * 0.5 } });
    var W = a.W, H = a.H, d = D();
    var subject = subjOf(p.subject, (p.title || "") + " " + V.narration);
    var pw = printW(subject, W * (V.isLandscape ? 0.66 : 0.92), H * (V.isLandscape ? 0.86 : 0.6), false);
    var ph = S.photo({ subject: subject, tone: p.tone || "sepia", cx: W / 2, cy: H / 2, w: pw, rot: -1.5, damage: 0.7, mounts: false });
    var fp = focusFor(ph, "auto");
    S.camera.kenBurns(photoTarget(ph), 0, d, { from: { fx: 0.5, fy: 0.5, zoom: 1.05 }, to: { fx: fp[0], fy: fp[1], zoom: 1.25 } });
    el("div.ad-dim", { parent: a.hud });
    S.fadeIn(0, 1.4);
    var tt = Math.max(0.9, keyT(p.keyword || p.title, 0.15) - 0.4);
    var dateLine = [plain(p.date), plain(p.place)].filter(Boolean).join("  —  ");
    S.titleCard(p.title || "", { kicker: p.chapter, sub: p.subtitle, date: dateLine || null, at: 0.5, titleAt: tt });
  };

  /** then-vs-now — an old print and its modern counterpart, side by side. */
  T["then-vs-now"] = function (p, root) {
    var a = S.desk(root, { surface: "wood" });
    var W = a.W, H = a.H, d = D(), Pt = V.isPortrait;
    var th = p.then || {}, nw = p.now || {};
    var sA = subjOf(th.subject, th.label), sB = subjOf(nw.subject || th.subject, nw.label);
    var pw = Pt ? printW(sA, W * 0.8, H * 0.4, true) : printW(sA, W * (V.isLandscape ? 0.41 : 0.46), H * 0.74, true);
    var pwB = Pt ? printW(sB, W * 0.8, H * 0.4, true) : printW(sB, W * (V.isLandscape ? 0.41 : 0.46), H * 0.74, true);
    var ca = Pt ? [W * 0.5, H * 0.28] : [W * 0.28, H * 0.5], cb = Pt ? [W * 0.5, H * 0.71] : [W * 0.72, H * 0.5];
    var capA = [plain(th.year), plain(th.label)].filter(Boolean).join(" — "), capB = [plain(nw.year), plain(nw.label)].filter(Boolean).join(" — ");
    var A2 = S.photo({ subject: sA, tone: th.tone || "sepia", cx: ca[0], cy: ca[1], w: pw, rot: -2.4, caption: capA || null, border: "cream", damage: 0.75, z: 2 });
    var B2 = S.photo({ subject: sB, tone: nw.tone || "modern", cx: cb[0], cy: cb[1], w: pwB, rot: 1.8, caption: capB || null, border: "white", mounts: false, damage: 0.05, z: 3, seed: 11 });
    S.stain({ cx: Pt ? W * 0.8 : W * 0.5, cy: Pt ? H * 0.5 : H * 0.15, r: Math.min(W, H) * 0.09 });
    var tSw = Math.max(1.8, keyT(p.keyword || nw.year || nw.label, 0.45) - 0.3);
    S.place(B2, tSw - 0.4, "slide", { from: Pt ? "bottom" : "right", dur: 1.2 });
    var fa = focusFor(A2, "auto"), fb = focusFor(B2, "auto");
    S.camera.kenBurns(photoTarget(A2), 0, Math.max(0.5, tSw - 0.2), { from: { fx: 0.5, fy: 0.5, zoom: 1.0 }, to: { fx: fa[0], fy: fa[1], zoom: 1.22 } });
    var tWide = Math.min(d - 1.8, Math.max(tSw + 2.6, d * 0.58));
    S.camera.kenBurns(photoTarget(B2), tSw + 0.5, Math.max(0.6, tWide - tSw - 0.5), { cut: false, from: { fx: 0.5, fy: 0.5 }, to: { fx: fb[0], fy: fb[1], zoom: 1.12 } });
    if (tWide > tSw + 1) S.camera.wide(tWide, Math.min(2, d - tWide), { fill: 0.98 });
    if (th.year) S.dateStamp(th.year, { sub: th.label, at: 0.4, end: tSw - 0.2 });
    if (nw.year) S.dateStamp(nw.year, { sub: nw.label, at: tSw + 0.6, pos: Pt ? "tl" : "tr", end: tWide - 0.1 });
    if (p.title) S.lowerThird(p.title, { at: tWide + 0.4, sub: p.subtitle });
  };

  /** film-reel — a strip of negatives slides across a light box, one frame at a time. */
  T["film-reel"] = function (p, root) {
    var a = S.desk(root, { surface: "lightbox", drift: 0.5 });
    var W = a.W, H = a.H, d = D();
    var frames = arr(p.frames).slice(0, 6);
    if (frames.length < 2) frames = frames.concat([{ subject: "city" }, { subject: "crowd" }]).slice(0, Math.max(2, frames.length));
    var n = frames.length;
    var fw = V.isLandscape ? H * 0.62 : W * 0.66;
    var box = makeItem("lightbox", { cx: W / 2, cy: H / 2, w: W * 1.4, h: fw * 0.7 * 1.8, cull: false });
    box.el.classList.add("ad-lightpanel");
    var probe = S.filmstrip({ frames: frames, frameW: fw, x: 0, y: 0, tone: p.tone, z: 3 });
    var fr0 = probe.frameRect(0);
    var x0 = W / 2 - (fr0.x + fr0.w / 2), y0 = H / 2 - probe.h / 2;
    probe.el.style.left = px(x0); probe.el.style.top = px(y0);
    var times = S.syncTimes(frames.map(function (f) { return S.autoKey(f.caption); }), { start: 0.6, end: Math.max(1.5, d * 0.78), lead: 0.3, minGap: 1.0 });
    var tl = a.tl;
    tl.fromTo(probe.el, { x: W * 0.8 }, { x: 0 }, { at: 0, dur: Math.max(0.6, Math.min(1.6, times[0] - 0.1)), ease: "outCubic" });
    for (var i = 1; i < n; i++) {
      var fr = probe.frameRect(i);
      tl.to(probe.el, { x: -(fr.x - fr0.x) }, { at: Math.max(0.3, times[i] - 0.7), dur: 0.9, ease: "inOutCubic" });
    }
    var lp = S.loupe({ cx: W / 2 + fw * 0.05, cy: H / 2 - fw * 0.02, r: fw * 0.42, z: 6 });
    S.place(lp, Math.max(0.2, times[0] - 0.5), "fade", { dur: 0.8 });
    S.camera.to(W / 2, H / 2, 1, 0, 0.01);
    S.camera.to(W / 2, H / 2, 1.08, 0.02, d, { ease: "inOutSine" });
    frames.forEach(function (f, i) {
      if (!f.caption) return;
      var end = i + 1 < n ? times[i + 1] - 0.8 : d;
      S.subtitle(f.caption, { at: times[i] + 0.2, end: end });
    });
    if (p.title) S.dateStamp(p.title, { at: 0.3, sub: p.subtitle });
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
  /** Fallback: an archival print on the desk, slow push-in, narration as documentary subtitles. Never throws. */
  S.fallback = function (root, narration) {
    root = root || V.root();
    var text = narration != null ? narration : V.narration;
    try {
      A = null;
      root.innerHTML = "";
      var a = S.desk(root, { surface: "wood" });
      var W = a.W, H = a.H;
      var subject = S.guessSubject(text);
      var pw = printW(subject, W * (V.isLandscape ? 0.56 : 0.84), H * (V.isLandscape ? 0.8 : 0.52), false);
      var ph = S.photo({ subject: subject, cx: W / 2, cy: H * (V.isPortrait ? 0.42 : 0.47), w: pw, rot: -1.2, damage: 0.55 });
      S.clutter(ph.rect, { count: 2, pen: false });
      S.place(ph, 0.05, "develop", { dur: 2 });
      var fp = focusFor(ph, "auto");
      S.camera.focus(ph, 0, 0.01, { fill: 0.9 });
      S.camera.kenBurns(photoTarget(ph), 0.5, Math.max(1, V.duration - 0.5), { cut: false, from: { fx: 0.5, fy: 0.5 }, to: { fx: fp[0], fy: fp[1], zoom: 1.16 } });
      chunkNarration(text).forEach(function (c, i, all) {
        var nx = all[i + 1];
        S.subtitle(c.text, { at: Math.max(0.05, c.at - 0.1), end: nx ? Math.max(c.at + 0.4, nx.at - 0.15) : V.duration + 1 });
      });
    } catch (e) {
      V.error("archival fallback: " + (e && e.message));
      try {
        V.reset();
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "10%", fontSize: u(54) + "px", fontStyle: "italic", textAlign: "center", color: C.fg, background: C.bg, fontFamily: SERIF, lineHeight: "1.3" } });
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
      V.error("[archival-doc:" + id + "] " + (e && e.message ? e.message : String(e)));
      try { V.reset(); } catch (e2) {}
      S.fallback(root, V.narration);
    }
    return root;
  };
})();
