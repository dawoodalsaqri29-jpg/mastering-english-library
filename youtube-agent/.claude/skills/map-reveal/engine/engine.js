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
/* Scene animation engine: MAP REVEAL — the geography-discovery look.
 * A hyper-saturated satellite-style relief map (procedural terrain: ochre deserts, green coasts,
 * hillshaded ridges, glowing rivers, deep ocean with a depth gradient, a drop shadow lifting the land
 * off the sea) seen from above at a slight 3D tilt, with clouds drifting over it. Signature overlays:
 * bold red curved arrows, pulsing target rings, glowing zones, pins, dotted routes, numbered markers,
 * stat badges and huge thumbnail-style headlines (white/yellow condensed caps, heavy black stroke).
 * Camera: slow push-ins and fly-tos. A spinning globe for intros. Pure function of time.
 */
(function () {
  "use strict";
  var V = window.V;
  var S = window.SceneStyle;
  if (!V || !S) return;
  var el = V.el;
  var NS = "http://www.w3.org/2000/svg";

  S.init({
    id: "map-reveal",
    kind: "documentary",
    enter: "pop",
    titleReveal: "pop",
    drift: 0.03,
    series: ["#FF2A1A", "#FFE600", "#2BD4FF", "#4CFF6A", "#FF7A00", "#FFFFFF"],
    background: function (bg) { paintMapBg(bg); },
  });

  // ───────────────────────── basics ─────────────────────────
  var C = {
    bg: "#0A1E3F", deep: "#061634", ocean: "#0E3F7A", shallow: "#1E8FBF", shore: "#5ED3E8",
    red: "#FF2A1A", red2: "#C8130A", yellow: "#FFE600", white: "#FFFFFF", black: "#000000",
    cyan: "#2BD4FF", green: "#4CFF6A", orange: "#FF7A00", muted: "#9FB3CC",
  };
  S.colors = C;
  var HEAD = 'Impact, "Arial Narrow", "Helvetica Neue", Inter, "Noto Sans", Arial, sans-serif';
  var BODY = 'Inter, "Noto Sans", "Segoe UI", Arial, sans-serif';
  S.fonts = { head: HEAD, body: BODY };
  function u(n) { return n * V.unit; }
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function f1(n) { return Math.round(n * 10) / 10; }
  function f2(n) { return Math.round(n * 100) / 100; }
  function lastT() { return Math.max(0.05, V.duration - 0.05); }
  function cT(t) { return clamp(t, 0, lastT()); }
  function D() { return V.duration; }
  function smooth(p) { return p * p * (3 - 2 * p); }
  function hs(s) { return S.hash(s); }
  function rng(key) { return V.makeRand(((hs(str(key)) ^ Math.imul(V.seed | 0, 2654435761)) >>> 0) || 1); }
  function plain(t) { return str(t).replace(/\*([^*]+)\*/g, "$1"); }
  function E(name) { return typeof name === "function" ? name : V.ease[name] || V.ease.outCubic; }
  var uid = 0;
  function nid(p) { uid++; return "mr" + (p || "") + uid + "_" + (V.seed | 0); }
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
  function rgba(h, a) { var c = hexRgb(h); return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")"; }
  function applyStyle(node, st) { for (var k in st) node.style[k] = st[k]; return node; }
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
  function polyPath(p) {
    var d = "";
    for (var i = 0; i < p.length; i++) d += (i ? " L" : "M") + f1(p[i][0]) + " " + f1(p[i][1]);
    return d + " Z";
  }
  var measureCtx = null;
  function measure(text, font, size, weight) {
    try {
      if (!measureCtx) measureCtx = document.createElement("canvas").getContext("2d");
      measureCtx.font = (weight || 400) + " " + f2(size) + "px " + (font || BODY);
      return measureCtx.measureText(text).width;
    } catch (e) { return text.length * size * 0.55; }
  }

  // ───────────────────────── noise ─────────────────────────
  var PERM = (function () { var p = new Uint8Array(512), r = V.makeRand(1337), base = []; for (var i = 0; i < 256; i++) base[i] = i; for (i = 255; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = base[i]; base[i] = base[j]; base[j] = t; } for (i = 0; i < 512; i++) p[i] = base[i & 255]; return p; })();
  function hash2(x, y) { return PERM[(x & 255) + PERM[y & 255]] / 255; }
  /** Value noise in [0,1]. */
  function vnoise(x, y) {
    var xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    var sx = xf * xf * (3 - 2 * xf), sy = yf * yf * (3 - 2 * yf);
    var a = hash2(xi, yi), b = hash2(xi + 1, yi), c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
    return lerp(lerp(a, b, sx), lerp(c, d, sx), sy);
  }
  function fbm(x, y, oct, gain) {
    var v = 0, amp = 0.5, sum = 0, g = gain || 0.5;
    for (var i = 0; i < oct; i++) { v += amp * vnoise(x, y); sum += amp; amp *= g; x = x * 2.03 + 11.7; y = y * 2.01 + 7.3; }
    return v / sum;
  }
  /** Ridged multifractal in [0,1] (sharp crests). */
  function ridged(x, y, oct) {
    var v = 0, amp = 0.5, sum = 0;
    for (var i = 0; i < oct; i++) { var n = 1 - Math.abs(vnoise(x, y) * 2 - 1); v += amp * n * n; sum += amp; amp *= 0.5; x = x * 2.1 + 3.1; y = y * 2.1 + 9.2; }
    return v / sum;
  }
  S.noise = { value: vnoise, fbm: fbm, ridged: ridged };

  // ───────────────────────── geography (hand-authored, simplified but recognisable) ─────────────────────────
  // Regions use lon/lat (deg); "xy" regions use normalised 0..1 coordinates directly. Every region has
  // bbox [lon0, lat0, lon1, lat1] (or [0,0,1,1]), polys (land), isles (small islands), anchors (named
  // places), features (terrain hints), biome and kmW (approximate east-west width in km, for size comparison).
  var AU_MAIN = [[113.5,-22],[113.8,-26],[115,-30],[115,-34],[117.5,-35],[120,-34],[123.5,-33.5],[126,-32.2],[129,-31.6],[131.5,-31.5],[134,-32.5],[135.5,-34.8],[137.5,-33],[138,-35.5],[139.5,-37],[141,-38.3],[143.5,-38.8],[146,-39],[148,-37.8],[150,-37.5],[151.3,-33.8],[153,-31],[153.5,-28.5],[153,-25.5],[151,-23],[149,-21],[147,-19.2],[146,-17.5],[145.4,-15],[144,-14.3],[143,-12.5],[142.3,-10.8],[141.4,-13],[141.5,-15.5],[140.5,-17.5],[138,-17],[136.5,-15.5],[136,-13],[134,-12],[132,-11.3],[130,-12.5],[129,-15],[126.5,-14],[124,-16.3],[122,-18],[119.5,-20],[117,-20.7],[114.5,-21.8]];
  var AU_TAS = [[144.6,-40.7],[148.3,-40.9],[148,-43.2],[146,-43.6]];
  var NA = [[-166,68],[-150,71],[-128,70],[-110,73],[-95,74],[-82,70],[-75,62],[-64,60],[-56,52],[-66,45],[-70,42],[-76,36],[-81,31],[-80,26],[-83,29],[-89,30],[-97,27],[-97,21],[-90,20],[-87,21],[-87,16],[-83,10],[-79,8],[-83,8],[-85,11],[-92,15],[-95,16],[-105,20],[-110,24],[-115,30],[-120,34],[-124,40],[-124,48],[-130,54],[-140,60],[-150,60],[-155,58],[-165,60]];
  var GREENLAND = [[-73,78],[-60,82],[-30,83],[-20,80],[-22,70],[-42,60],[-50,62],[-55,67],[-60,76]];
  var SA = [[-77.5,8.5],[-75,11],[-71.5,12.4],[-68,10.8],[-64,10.6],[-60,8.5],[-58,6.8],[-54,5.5],[-51.5,4],[-50,0.5],[-48,-1],[-44,-2.5],[-41,-2.9],[-37.5,-4.5],[-35,-5.5],[-34.8,-8],[-37,-11],[-39,-14],[-39,-17.5],[-40,-20.5],[-42,-23],[-45.5,-23.7],[-48.5,-25.5],[-48.6,-28.5],[-52,-32],[-54,-34.5],[-57.5,-35.5],[-57,-38],[-62,-39],[-64.5,-41],[-65,-43],[-67.5,-46],[-66,-47.5],[-69,-50.5],[-68.5,-53],[-71,-54.5],[-74,-53],[-74.5,-48],[-73.5,-44],[-74,-40],[-73.5,-37],[-71.5,-32],[-71.5,-28],[-70.5,-23],[-70.3,-18],[-75.5,-14.5],[-78,-10],[-81,-6],[-81,-4],[-79.8,-1],[-78,1.5],[-77.5,4]];
  var EURASIA = [[-10,36],[-9,43],[-2,44],[-5,48],[-1,50],[2,51],[5,53],[9,54],[8,57],[11,58],[6,58],[5,62],[12,65],[18,70],[28,71],[40,67],[60,69],[70,73],[90,76],[110,74],[130,72],[150,70],[170,70],[180,66],[175,62],[163,60],[160,54],[155,51],[142,54],[135,45],[130,42],[128,38],[122,30],[120,24],[110,20],[108,12],[104,2],[101,5],[98,10],[95,16],[92,22],[88,21],[80,15],[77,8],[73,20],[68,24],[62,25],[57,26],[53,25],[57,21],[52,17],[44,13],[42,16],[40,21],[35,28],[32,31],[29,36],[27,37],[26,40],[23,37],[21,38],[19,41],[14,44],[18,40],[16,38],[12,42],[8,44],[4,43],[3,41],[0,38],[-2,37],[-6,36]];
  var AFRICA = [[-17,14.7],[-16.5,19],[-17,21],[-13,27.5],[-10,29.5],[-9.5,32],[-6.5,35],[-2,35.2],[0,36],[5,36.8],[10,37.3],[11,35],[10.2,33.7],[15,32.5],[19.5,30.5],[20,32.5],[25,32],[29.5,31],[32.3,31.3],[34,27.5],[35.5,24],[37,21.5],[38.5,18],[39.5,15.5],[43,12],[44,10.5],[47,11.3],[51.2,11.8],[50.5,9],[48.5,5],[46,2],[41.5,-1.8],[39,-7],[40.5,-11],[40.5,-15.5],[35.5,-20],[35.5,-24],[32.8,-26.8],[32,-29],[30,-31.5],[27.5,-33.8],[22,-34.2],[18.5,-34.5],[17.5,-30],[15,-27],[12,-18.5],[13.2,-12],[12,-5],[9,-1],[9.5,3.5],[5.5,4.8],[3,6.3],[-2,5],[-7.5,4.5],[-11,6.5],[-13,8.5],[-16.5,12.5]];
  var MADAG = [[44,-12],[50,-15],[48,-25],[44,-25]];
  var JP_HON = [[131,34],[132.5,34.3],[133.5,34.5],[135,33.5],[136,34.3],[137,34.6],[138.8,34.7],[139.7,35],[140.6,35.7],[140.9,36.9],[141,38.3],[141.5,39.5],[141.9,40.5],[141.2,41.4],[140.3,41.2],[139.9,40.3],[139.8,39],[138.5,38],[137.3,37],[136.6,36.3],[135.6,35.6],[133.5,35.5],[132,35.4],[131,34.5]];
  var JP_HOK = [[140,41.5],[141.5,42.5],[143.5,42],[145.8,43.3],[144,44],[142,45.4],[141.6,45],[140.5,43.3],[139.9,42]];
  var JP_KYU = [[130,31.1],[131.3,31.4],[132,32.9],[131.2,33.9],[130.4,33.9],[129.8,33.3]];
  var JP_SHI = [[132.3,33.3],[134.5,33.8],[134.3,34.3],[133,34.4]];
  var GB = [[-5.7,50.1],[-4.3,50.3],[-3.5,50.4],[-2,50.7],[-0.5,50.8],[1.4,51.2],[1.7,52.6],[0.4,53.2],[0.2,54.2],[-1.2,54.7],[-1.6,55.6],[-2.3,56.1],[-1.8,57.5],[-3.3,58.6],[-5.1,58.6],[-6.2,57.6],[-5.7,56.6],[-6.4,55.9],[-5,55.1],[-4.9,54.7],[-3.4,54.9],[-3.1,54],[-3.3,53.4],[-4.6,53.3],[-4.1,52.5],[-5.3,51.8],[-4.2,51.5],[-3,51.6],[-3.3,51.2],[-4.3,51.1]];
  var IRELAND = [[-10.4,51.6],[-8,51.6],[-6.1,52.2],[-6,53.4],[-5.5,54.5],[-7.3,55.4],[-8.5,55.1],[-10.1,54],[-9.5,53.2]];
  var ICELAND = [[-24,65.5],[-18,66.5],[-14,65.5],[-15,64],[-21,63.5],[-23,64.5]];
  var NZ = [[172.5,-34.5],[174.5,-36.5],[178,-37.8],[177,-39.5],[175,-41.3],[172.6,-40.5],[172.5,-41.5],[171,-42.5],[168,-46.5],[166.5,-45.5],[170.5,-42.5],[173.5,-40.5],[171.5,-36.5]];
  var BORNEO = [[109,1.5],[113,4.5],[117,7],[119,5],[118,1],[116,-3.5],[112,-3.5],[110,-1]];
  var SUMATRA = [[95.5,5.5],[98,3.5],[101.5,0],[104.5,-3],[106,-5.8],[104,-5.5],[101,-2.5],[98.5,1.5],[95,4.5]];
  var NEWGUINEA = [[131,-1],[135,-3],[138,-2],[141,-2.5],[147,-5.5],[150,-9],[149,-10.5],[145,-8],[141,-9],[138,-8],[135,-4.5],[132,-2.5]];
  var SRILANKA = [[80,9.8],[81.8,8.5],[81.3,6.2],[79.8,6.8]];
  var CUBA = [[-85,22],[-80,23],[-75,20.5],[-77,19.8],[-82,21.5]];
  var ANT = [[-60,-62],[-50,-72],[-30,-74],[-10,-70],[10,-70],[40,-68],[70,-68],[100,-66],[140,-66],[170,-72],[180,-78],[-150,-78],[-120,-74],[-100,-73],[-80,-73],[-70,-68]];

  var REGIONS = {};
  function region(id, def) { def.id = id; REGIONS[id] = def; return def; }

  region("world", {
    name: "World", bbox: [-180, -58, 180, 84], kmW: 40000, biome: "mixed",
    polys: [NA, GREENLAND, SA, EURASIA, AFRICA, AU_MAIN], isles: [MADAG, JP_HON, JP_HOK, GB, IRELAND, ICELAND, NZ, BORNEO, SUMATRA, NEWGUINEA, SRILANKA, CUBA, AU_TAS],
    anchors: { "north-america": [-100, 45], "south-america": [-60, -15], europe: [15, 50], africa: [20, 5], asia: [90, 45], australia: [134, -25], "middle-east": [45, 27], india: [79, 22], china: [105, 35], japan: [138, 37], russia: [100, 62], usa: [-98, 39], canada: [-105, 60], brazil: [-52, -10], "new-york": [-74, 40.7], london: [-0.1, 51.5], tokyo: [139.7, 35.7], sydney: [151.2, -33.9], cairo: [31.2, 30], dubai: [55.3, 25.2], moscow: [37.6, 55.8], beijing: [116.4, 39.9], "los-angeles": [-118.2, 34], "sao-paulo": [-46.6, -23.5], singapore: [103.8, 1.3], mumbai: [72.9, 19.1], lagos: [3.4, 6.5], "cape-town": [18.4, -33.9], pacific: [-150, 0], atlantic: [-30, 20], "indian-ocean": [75, -20], arctic: [0, 80], greenland: [-42, 72], sahara: [10, 23], amazon: [-62, -4], himalayas: [85, 29], siberia: [110, 65], alaska: [-150, 64], mexico: [-102, 24], indonesia: [115, -2], "uk": [-2, 54], antarctica: [0, -75] },
    features: [{ t: "desert", c: [10, 23], r: [18, 7] }, { t: "desert", c: [45, 22], r: [8, 5] }, { t: "desert", c: [130, -25], r: [12, 6] }, { t: "desert", c: [95, 42], r: [12, 4] }, { t: "desert", c: [-112, 33], r: [5, 4] }, { t: "forest", c: [-62, -4], r: [14, 8] }, { t: "forest", c: [20, 0], r: [12, 6] }, { t: "forest", c: [100, 60], r: [60, 8] }, { t: "forest", c: [-100, 55], r: [30, 7] }, { t: "mtn", pts: [[-120, 55], [-110, 44], [-106, 38]], r: 4 }, { t: "mtn", pts: [[-76, 8], [-78, -5], [-70, -18], [-70, -35], [-72, -50]], r: 3.5 }, { t: "mtn", pts: [[72, 36], [82, 31], [92, 28]], r: 5, h: 1.3 }, { t: "mtn", pts: [[6, 46], [12, 47]], r: 2 }, { t: "mtn", pts: [[58, 60], [60, 52]], r: 2 }, { t: "ice", c: [-42, 73], r: [16, 12] }, { t: "river", pts: [[32, 0], [31, 10], [32.5, 15.6], [31, 22], [31.2, 30]] }, { t: "river", pts: [[-76, -5], [-62, -3.5], [-50, -1]] }, { t: "river", pts: [[-93, 47], [-90, 38], [-90, 29.5]] }, { t: "river", pts: [[91, 33], [106, 29.5], [121.5, 31.5]] }],
  });
  region("australia", {
    name: "Australia", bbox: [111, -45, 156, -9], kmW: 4000, biome: "arid",
    polys: [AU_MAIN], isles: [AU_TAS],
    anchors: { sydney: [151.2, -33.9], melbourne: [145, -37.8], brisbane: [153, -27.5], perth: [115.9, -32], adelaide: [138.6, -34.9], darwin: [130.8, -12.4], canberra: [149.1, -35.3], hobart: [147.3, -42.9], cairns: [145.8, -16.9], "alice-springs": [133.9, -23.7], uluru: [131, -25.3], pilbara: [119, -22], kimberley: [126, -17], "great-barrier-reef": [148, -18.5], outback: [134, -26], nullarbor: [129, -31], tasmania: [146.5, -42], kalgoorlie: [121.5, -30.7], "gold-coast": [153.4, -28], "great-dividing-range": [148, -30], "simpson-desert": [137, -25], "gulf-of-carpentaria": [139, -14], "coral-sea": [152, -18], "western-australia": [122, -26], queensland: [144, -22], "northern-territory": [133, -19], "south-australia": [135, -30], victoria: [144, -37], "new-south-wales": [147, -32], "blue-mountains": [150.3, -33.7], "mount-isa": [139.5, -20.7], "broken-hill": [141.5, -32], "lake-eyre": [137.3, -28.4], "tasman-sea": [155, -38], "indian-ocean": [112, -30] },
    features: [{ t: "desert", c: [128, -25], r: [11, 6] }, { t: "desert", c: [137, -25], r: [4, 3] }, { t: "forest", c: [146, -15], r: [3, 3] }, { t: "forest", c: [116, -33], r: [2.5, 2] }, { t: "forest", c: [147, -37], r: [4, 2] }, { t: "forest", c: [152, -30], r: [1.5, 5] }, { t: "mtn", pts: [[145, -37.5], [148.5, -34], [150.5, -30], [152, -26], [148, -21], [146, -18]], r: 1.6, h: 0.8 }, { t: "mtn", pts: [[132, -23.5], [134.5, -23.5]], r: 0.8, h: 0.5 }, { t: "river", pts: [[149, -36], [146, -35], [143, -34.5], [141, -34.2], [139.6, -35.3]] }, { t: "river", pts: [[146.5, -30], [144, -32.5], [141.5, -34.2]] }, { t: "lake", c: [137.3, -28.4], r: [0.9, 0.6], dry: true }],
  });
  region("usa", {
    name: "United States", bbox: [-127, 23, -65, 51], kmW: 4500, biome: "temperate",
    polys: [[[-124.5,48.4],[-122.8,48.9],[-116,49],[-104,49],[-95,49],[-90,47.5],[-88,48.2],[-84.5,46.5],[-83,45.5],[-82.5,42.5],[-79,42.8],[-76,43.8],[-74.5,45],[-71,45],[-67.8,47.2],[-67,44.8],[-70,43.5],[-70.5,41.5],[-73.9,40.6],[-74.8,39],[-76,38],[-75.5,35.5],[-78,33.8],[-80.5,32],[-81.5,30.5],[-80.2,26.5],[-80.5,25.1],[-81.8,26],[-83,29],[-85,29.7],[-88,30.4],[-90,29.2],[-93.8,29.7],[-97.2,27.5],[-97.5,25.9],[-99.5,27.5],[-101.5,29.8],[-104,29.5],[-106.5,31.8],[-108.2,31.3],[-111,31.3],[-114.8,32.5],[-117.1,32.5],[-118.5,34],[-120.6,34.6],[-122,37],[-123.9,39.5],[-124.3,42],[-124.1,46]]],
    isles: [],
    anchors: { "new-york": [-74, 40.7], "los-angeles": [-118.2, 34], chicago: [-87.6, 41.9], houston: [-95.4, 29.8], miami: [-80.2, 25.8], seattle: [-122.3, 47.6], denver: [-105, 39.7], "las-vegas": [-115.1, 36.2], "san-francisco": [-122.4, 37.8], "washington-dc": [-77, 38.9], "new-orleans": [-90.1, 30], dallas: [-96.8, 32.8], phoenix: [-112.1, 33.4], atlanta: [-84.4, 33.7], boston: [-71.1, 42.4], detroit: [-83, 42.3], texas: [-99, 31.5], california: [-119.5, 37], florida: [-81.5, 28], alaska: [-124, 48], "great-lakes": [-85, 45], rockies: [-110, 42], appalachians: [-81, 37], "grand-canyon": [-112.1, 36.1], yellowstone: [-110.5, 44.5], midwest: [-95, 41], mississippi: [-90.5, 33], "death-valley": [-117, 36.5], nevada: [-116.5, 39.5], "great-plains": [-100, 42], "gulf-of-mexico": [-90, 26], "pacific": [-125, 38], "atlantic": [-70, 36], "mojave": [-116, 35], "sierra-nevada": [-119, 37.5], "salt-lake": [-112, 41], "yosemite": [-119.6, 37.8], "oklahoma": [-97.5, 35.5], "kansas": [-98.5, 38.5], "montana": [-110, 47], "silicon-valley": [-122, 37.4], "hawaii": [-124, 25], "west-coast": [-123, 42], "east-coast": [-75, 38] },
    features: [{ t: "mtn", pts: [[-116, 48.5], [-112, 45], [-108, 41], [-106, 38], [-105.5, 35]], r: 2.4, h: 0.75 }, { t: "mtn", pts: [[-122, 42], [-120, 39], [-118.5, 36.5]], r: 1.4, h: 0.9 }, { t: "mtn", pts: [[-121.5, 48.5], [-122, 45]], r: 1.2, h: 0.8 }, { t: "mtn", pts: [[-73, 44.5], [-78, 40.5], [-81, 37.5], [-84, 35]], r: 1.6, h: 0.5 }, { t: "desert", c: [-113, 35], r: [5, 3.5] }, { t: "desert", c: [-104, 31], r: [3, 3] }, { t: "plateau", c: [-100, 42], r: [6, 8], h: 0.25 }, { t: "forest", c: [-122, 46], r: [2, 3] }, { t: "forest", c: [-82, 36], r: [8, 7] }, { t: "forest", c: [-90, 46], r: [5, 3] }, { t: "forest", c: [-70, 45], r: [3, 2.5] }, { t: "river", pts: [[-93, 47], [-91, 43], [-90, 38], [-91, 33], [-90, 29.5]] }, { t: "river", pts: [[-110, 47], [-100, 46], [-96, 41], [-90, 38.5]] }, { t: "river", pts: [[-107, 40], [-110, 38], [-113, 36.5], [-114.6, 33]] }, { t: "river", pts: [[-104, 30], [-100, 28], [-97.5, 26]] }, { t: "lake", c: [-87.5, 47.7], r: [3.6, 1.1] }, { t: "lake", c: [-87, 43.5], r: [0.9, 2.3] }, { t: "lake", c: [-82.3, 45], r: [1.6, 1.4] }, { t: "lake", c: [-81, 42.2], r: [1.9, 0.6] }, { t: "lake", c: [-77.7, 43.6], r: [1.3, 0.45] }, { t: "lake", c: [-112.5, 41.2], r: [0.5, 0.6] }],
  });
  region("europe", {
    name: "Europe", bbox: [-12, 34, 48, 72], kmW: 4500, biome: "temperate",
    polys: [[[-9.5,43.2],[-9,38.5],[-6.5,36.9],[-5.5,36],[-2,36.7],[0,38.6],[0.5,40.5],[3.2,42],[4.5,43.4],[7,43.6],[9.5,44.2],[10.5,43],[12.5,41.5],[15.5,38],[16.2,38.4],[17,39],[18.5,40],[16,41.8],[13.5,43.5],[12.5,45.3],[13.8,45.5],[15,44.5],[18.5,42.2],[19.5,41.5],[19.4,40],[21.5,38],[22.5,36.5],[24,38],[23,40],[26,41],[28,41.3],[28,43.5],[29.7,45.3],[30.5,46.5],[33.5,46],[34,44.5],[36.5,45.3],[38,47],[40,47],[42,50],[45,52],[47,56],[47,60],[42,62],[40,66],[44,68.5],[41,67],[32,70],[28,71],[22,70],[18,69.5],[14,67.8],[11,64.5],[8,63],[5,61.5],[5.5,59],[7,58],[10.5,59],[11,57.5],[12.5,56],[14.5,56],[16.5,57],[18.5,59],[17.5,61],[19,63.5],[22,66],[25,65.5],[21,64],[21.5,62],[23,60],[30,60],[28,59.5],[24,59],[22,58],[21,57],[21,55.5],[19,54.5],[14,54],[11,54],[9.5,54.8],[8.5,56],[9.5,57.5],[8,57],[8,55.5],[8.5,53.5],[6.5,53.4],[4.5,52.2],[3.5,51.3],[1.5,50.9],[-1.5,49.5],[-4.5,48.5],[-1,46.2],[-1.5,43.8]]],
    isles: [GB, IRELAND, ICELAND, [[12.4,38.1],[15.6,38.3],[15.1,36.7],[12.5,37.6]], [[8.2,41],[9.7,41.2],[9.6,39.2],[8.4,39]], [[8.6,43],[9.5,42.9],[9.2,41.4],[8.7,41.6]], [[23.5,35.4],[26.3,35.2],[25.5,34.9],[23.6,35]], [[32.3,35.2],[34.6,35.6],[33.5,34.6]], [[2.4,39.6],[3.4,39.9],[3.1,39.3]]],
    anchors: { london: [-0.1, 51.5], paris: [2.35, 48.9], berlin: [13.4, 52.5], rome: [12.5, 41.9], madrid: [-3.7, 40.4], moscow: [37.6, 55.8], vienna: [16.4, 48.2], athens: [23.7, 38], istanbul: [29, 41], stockholm: [18, 59.3], oslo: [10.7, 59.9], warsaw: [21, 52.2], kyiv: [30.5, 50.4], lisbon: [-9.1, 38.7], dublin: [-6.3, 53.3], amsterdam: [4.9, 52.4], brussels: [4.4, 50.8], prague: [14.4, 50.1], budapest: [19, 47.5], copenhagen: [12.6, 55.7], helsinki: [25, 60.2], zurich: [8.5, 47.4], milan: [9.2, 45.5], barcelona: [2.2, 41.4], munich: [11.6, 48.1], reykjavik: [-21.9, 64.1], alps: [10, 46.5], scandinavia: [15, 63], iberia: [-4, 40], balkans: [21, 43], "black-sea": [34, 43], "north-sea": [3, 56], mediterranean: [15, 36], ukraine: [32, 49], switzerland: [8, 46.8], pyrenees: [0.5, 42.7], urals: [59, 58], baltic: [19, 58], carpathians: [24, 47], iceland: [-18, 65], sicily: [14, 37.5], crete: [25, 35.3], "channel": [-2, 50], "bay-of-biscay": [-5, 45], "adriatic": [16, 43], "aegean": [25, 38], "siberia": [47, 65], "russia": [42, 57], "germany": [10, 51], "france": [2.5, 47], "italy": [12.5, 43], "spain": [-3.5, 40], "poland": [19.5, 52], "turkey": [32, 39], "norway": [8, 61], "sweden": [15, 62], "finland": [26, 63], "greece": [22, 39], "netherlands": [5.5, 52.3], "belgium": [4.5, 50.6], "austria": [14, 47.5], "portugal": [-8, 39.5], "ireland": [-8, 53.3], "scotland": [-4.2, 56.8], "denmark": [9.5, 56], "cyprus": [33.2, 35.1] },
    features: [{ t: "mtn", pts: [[6, 45.5], [8.5, 46.3], [11, 46.8], [14, 47.2]], r: 1.2, h: 1 }, { t: "mtn", pts: [[-1, 42.8], [2.5, 42.6]], r: 0.7, h: 0.7 }, { t: "mtn", pts: [[22, 49], [25, 47.5], [25, 45.5], [22.5, 45.5]], r: 0.9, h: 0.7 }, { t: "mtn", pts: [[6, 61], [10, 63], [14, 66]], r: 1.3, h: 0.7 }, { t: "mtn", pts: [[58, 64], [59, 58], [58, 54]], r: 1.2, h: 0.5 }, { t: "mtn", pts: [[-4, 56.5], [-5, 57.5]], r: 0.7, h: 0.5 }, { t: "mtn", pts: [[13, 44], [15, 42]], r: 0.7, h: 0.6 }, { t: "mtn", pts: [[-5, 37], [-3, 37.3]], r: 0.5, h: 0.5 }, { t: "mtn", pts: [[37, 43.5], [44, 42.5]], r: 0.8, h: 0.9 }, { t: "mtn", pts: [[30, 38], [36, 37.5]], r: 0.8, h: 0.6 }, { t: "desert", c: [-3, 38.5], r: [2.5, 1.5] }, { t: "desert", c: [35, 38], r: [4, 1.8] }, { t: "forest", c: [25, 62], r: [10, 5] }, { t: "forest", c: [15, 52], r: [9, 4] }, { t: "forest", c: [38, 58], r: [8, 5] }, { t: "ice", c: [-18, 64.8], r: [2.5, 1.2] }, { t: "river", pts: [[10, 48.5], [16, 48], [19, 47.5], [21, 45], [28, 44.5], [29.5, 45.2]] }, { t: "river", pts: [[8.5, 47.5], [7.5, 50], [6, 52]] }, { t: "river", pts: [[32, 55], [30.5, 50.4], [33, 47.5]] }, { t: "river", pts: [[37, 58], [45, 54], [48, 49]] }, { t: "river", pts: [[2.5, 48.9], [0.5, 49.4]] }, { t: "lake", c: [27.5, 61.5], r: [1.6, 1] }, { t: "lake", c: [31.5, 61], r: [1.5, 0.8] }, { t: "lake", c: [13.5, 58.5], r: [0.6, 0.9] }, { t: "lake", c: [6.5, 46.4], r: [0.5, 0.2] }],
  });
  region("africa", {
    name: "Africa", bbox: [-20, -36, 54, 38], kmW: 7400, biome: "tropical",
    polys: [AFRICA], isles: [MADAG],
    anchors: { cairo: [31.2, 30], lagos: [3.4, 6.5], nairobi: [36.8, -1.3], johannesburg: [28, -26.2], "cape-town": [18.4, -33.9], kinshasa: [15.3, -4.3], "addis-ababa": [38.7, 9], casablanca: [-7.6, 33.6], khartoum: [32.5, 15.6], accra: [-0.2, 5.6], dakar: [-17.4, 14.7], algiers: [3, 36.8], tunis: [10.2, 36.8], tripoli: [13.2, 32.9], luanda: [13.2, -8.8], "dar-es-salaam": [39.3, -6.8], mogadishu: [45.3, 2], kampala: [32.6, 0.3], abuja: [7.5, 9.1], timbuktu: [-3, 16.8], sahara: [10, 24], congo: [22, -2], kalahari: [22, -24], namib: [15, -24], nile: [32, 25], "lake-victoria": [33, -1], kilimanjaro: [37.3, -3], "ethiopian-highlands": [39, 10], atlas: [-4, 32], "horn-of-africa": [47, 9], madagascar: [47, -19], sahel: [10, 15], "niger-delta": [6, 5], "red-sea": [38, 20], "rift-valley": [36, 2], serengeti: [35, -2.5], "victoria-falls": [25.9, -17.9], "gulf-of-guinea": [2, 2], "cape-of-good-hope": [18.5, -34.4], suez: [32.5, 30], "libya": [17, 27], "nigeria": [8, 9], "kenya": [37.5, 0.5], "ethiopia": [39, 8], "egypt": [30, 26], "south-africa": [25, -29], "morocco": [-6, 32], "algeria": [3, 28], "sudan": [30, 15], "tanzania": [35, -6], "mozambique": [36, -17], "angola": [18, -12], "drc": [23, -3], "ghana": [-1, 8], "mali": [-3, 18], "niger": [8, 17], "chad": [18, 15], "somalia": [46, 6], "zimbabwe": [30, -19], "namibia": [17, -22], "botswana": [24, -22], "senegal": [-15, 14.5], "ivory-coast": [-5.5, 7.5], "cameroon": [12.5, 5.5], "uganda": [32.5, 1.5], "zambia": [27.5, -14.5], "rwanda": [30, -2], "eritrea": [39, 15], "djibouti": [43, 11.5], "sinai": [33.8, 29.3] },
    features: [{ t: "desert", c: [10, 23], r: [22, 7.5] }, { t: "desert", c: [22, -24], r: [5, 4] }, { t: "desert", c: [15, -23], r: [1.6, 5] }, { t: "desert", c: [45, 6], r: [4, 4] }, { t: "forest", c: [20, -1], r: [10, 5] }, { t: "forest", c: [-4, 6], r: [7, 1.8] }, { t: "forest", c: [47, -19], r: [1.5, 5] }, { t: "plateau", c: [38, 9], r: [4, 4], h: 0.8 }, { t: "mtn", pts: [[-8, 31], [-4, 32.5], [1, 35]], r: 1.2, h: 0.8 }, { t: "mtn", pts: [[36, 12], [39, 9], [40, 6]], r: 1.6, h: 1 }, { t: "mtn", pts: [[36, 4], [35.5, -2], [37.3, -3], [34, -8]], r: 1.1, h: 0.9 }, { t: "mtn", pts: [[27, -29], [29.5, -30.5]], r: 1, h: 0.6 }, { t: "mtn", pts: [[28, -1], [30, 2]], r: 1, h: 0.8 }, { t: "mtn", pts: [[9, 22], [7, 25]], r: 1.3, h: 0.5 }, { t: "river", pts: [[32, 0], [31, 10], [32.5, 15.6], [31, 22], [31, 26], [31.2, 30], [31, 31.3]] }, { t: "river", pts: [[28, -1], [23, 2], [17, -1], [15.3, -4.3], [12.5, -6]] }, { t: "river", pts: [[-11, 10], [-4, 16], [2, 13], [5, 10], [6, 5]] }, { t: "river", pts: [[24, -16], [27, -17.5], [32, -16.5], [36, -18.5]] }, { t: "river", pts: [[-10, 13], [-15, 16]] }, { t: "lake", c: [33, -1.2], r: [1.6, 1.4] }, { t: "lake", c: [29.5, -6.5], r: [0.5, 2.8] }, { t: "lake", c: [34.7, -12], r: [0.5, 2] }, { t: "lake", c: [14.5, 13], r: [1, 0.8] }, { t: "lake", c: [36, 3], r: [0.5, 1.5] }],
  });
  region("south-america", {
    name: "South America", bbox: [-84, -57, -32, 14], kmW: 5000, biome: "tropical",
    polys: [SA], isles: [[[-61.5,10.8],[-60.9,10.8],[-61,10.1],[-61.9,10.1]]],
    anchors: { "sao-paulo": [-46.6, -23.5], rio: [-43.2, -22.9], "rio-de-janeiro": [-43.2, -22.9], "buenos-aires": [-58.4, -34.6], lima: [-77, -12], bogota: [-74.1, 4.7], santiago: [-70.7, -33.5], caracas: [-66.9, 10.5], quito: [-78.5, -0.2], "la-paz": [-68.1, -16.5], brasilia: [-47.9, -15.8], manaus: [-60, -3], montevideo: [-56.2, -34.9], medellin: [-75.6, 6.2], salvador: [-38.5, -13], recife: [-34.9, -8], cusco: [-72, -13.5], "machu-picchu": [-72.5, -13.2], amazon: [-62, -4], andes: [-70, -20], patagonia: [-70, -47], atacama: [-69.5, -24], pampas: [-62, -36], guiana: [-58, 5], "cape-horn": [-67, -55.5], titicaca: [-69.3, -15.8], "iguazu": [-54.4, -25.7], "galapagos": [-83, 0.5], "falklands": [-59, -51.7], "brazil": [-52, -10], "argentina": [-65, -35], "chile": [-71, -35], "peru": [-75, -10], "colombia": [-73, 4], "venezuela": [-65, 8], "bolivia": [-64, -17], "ecuador": [-78, -1.5], "paraguay": [-58, -23], "uruguay": [-56, -33], "cerrado": [-50, -15], "orinoco": [-66, 7], "amazon-river": [-58, -2.5], "pantanal": [-56.5, -18], "tierra-del-fuego": [-68, -54], "atlantic": [-38, -25], "pacific": [-80, -20], "caribbean": [-70, 13] },
    features: [{ t: "mtn", pts: [[-74, 8], [-78, 0], [-77, -10], [-70, -18], [-69, -30], [-71, -40], [-72, -50]], r: 2, h: 1.2 }, { t: "mtn", pts: [[-62, 5], [-66, 5.5]], r: 1.2, h: 0.5 }, { t: "mtn", pts: [[-44, -22], [-41, -20]], r: 1, h: 0.5 }, { t: "forest", c: [-62, -4], r: [14, 7] }, { t: "forest", c: [-50, -22], r: [5, 4] }, { t: "desert", c: [-69.5, -24], r: [1.3, 5] }, { t: "desert", c: [-68, -45], r: [3.5, 7] }, { t: "plateau", c: [-50, -14], r: [5, 5], h: 0.3 }, { t: "river", pts: [[-76, -5], [-70, -4], [-62, -3.5], [-55, -2.5], [-50, -1]] }, { t: "river", pts: [[-66, 6], [-67, 8.5], [-62, 8.5]] }, { t: "river", pts: [[-56, -17], [-58, -25], [-60, -33], [-58, -35]] }, { t: "lake", c: [-69.3, -15.8], r: [0.9, 0.7] }],
  });
  region("india", {
    name: "India", bbox: [66, 5, 99, 38], kmW: 3200, biome: "tropical",
    polys: [[[68.2,23.6],[70,22.5],[72.5,21.5],[72.8,19],[73.2,16],[74.5,13],[76,10],[77.5,8.1],[78.2,9.3],[79.8,10.3],[80.2,13],[80.1,15.5],[82.3,17],[85,19.5],[87,21.5],[89,22],[88.8,24.5],[89.9,26],[92,26.5],[94.5,27.5],[97,28],[95.5,26],[94,24],[92.5,22],[92,24.5],[91,25.5],[88.5,26.8],[88,27.5],[85,28.5],[81,30],[78.5,32.5],[76,34.5],[74,37],[72.5,35.5],[71,33],[69.5,30],[70.5,27],[68.5,25]]],
    isles: [SRILANKA],
    anchors: { delhi: [77.2, 28.6], "new-delhi": [77.2, 28.6], mumbai: [72.9, 19.1], bangalore: [77.6, 13], bengaluru: [77.6, 13], chennai: [80.3, 13.1], kolkata: [88.4, 22.6], hyderabad: [78.5, 17.4], jaipur: [75.8, 26.9], varanasi: [83, 25.3], ahmedabad: [72.6, 23], pune: [73.9, 18.5], lucknow: [80.9, 26.8], kochi: [76.3, 10], goa: [74, 15.4], agra: [78, 27.2], amritsar: [74.9, 31.6], bhopal: [77.4, 23.3], surat: [72.8, 21.2], himalayas: [82, 30], "thar-desert": [71.5, 27], thar: [71.5, 27], ganges: [82, 26], deccan: [77, 17], kerala: [76.5, 10], rajasthan: [73, 26.5], gujarat: [71.5, 22.5], kashmir: [75, 34], "sri-lanka": [80.7, 7.8], "bay-of-bengal": [87, 16], "arabian-sea": [70, 17], "western-ghats": [75, 14], punjab: [75.5, 31], "tamil-nadu": [78.5, 11], bengal: [88, 23.5], everest: [86.9, 27.9], ladakh: [77.5, 34.2], "indus": [71, 29], "brahmaputra": [92, 26.3], "andaman": [93, 12], "sundarbans": [89, 21.8], "karnataka": [76, 15], "maharashtra": [76, 19.5], "bihar": [85.5, 25.5], "odisha": [84.5, 20.5], "assam": [93, 26.3], "nepal": [84, 28.3], "bhutan": [90.5, 27.5], "bangladesh": [90, 23.8], "pakistan": [69.5, 29.5], "kanyakumari": [77.5, 8.1] },
    features: [{ t: "mtn", pts: [[73, 36], [76, 34], [79, 32], [82, 30], [85, 29], [88, 28], [92, 28.5], [95, 29]], r: 1.6, h: 1.4 }, { t: "mtn", pts: [[73, 20], [74, 16], [76, 12], [77, 9]], r: 0.7, h: 0.6 }, { t: "mtn", pts: [[85, 23], [82, 22]], r: 0.9, h: 0.3 }, { t: "mtn", pts: [[94, 25], [94, 22]], r: 0.8, h: 0.5 }, { t: "desert", c: [71.5, 27], r: [3.2, 2.8] }, { t: "plateau", c: [78, 18], r: [4, 4], h: 0.3 }, { t: "forest", c: [76, 11], r: [1.2, 3.5] }, { t: "forest", c: [93, 26], r: [2.5, 1.5] }, { t: "forest", c: [82, 21], r: [3, 2] }, { t: "ice", c: [80, 33], r: [6, 1.6] }, { t: "river", pts: [[79, 30], [81, 27.5], [83, 25.5], [86, 25.3], [88.8, 22.5]] }, { t: "river", pts: [[75, 34.5], [72, 32], [71, 29], [68.5, 25]] }, { t: "river", pts: [[94.5, 27.5], [91, 26.3], [89.5, 24.5]] }, { t: "river", pts: [[76, 22.5], [73, 21.7]] }, { t: "river", pts: [[73.5, 17.5], [78, 16.3], [81, 16]] }],
  });
  region("china", {
    name: "China", bbox: [72, 17, 137, 54], kmW: 5200, biome: "mixed",
    polys: [[[73.5,39.5],[76,41],[80,42.5],[83,47.5],[87,49],[90,47.8],[96,49.5],[102,51.5],[110,49.5],[117,47.5],[120,52.5],[126,52.5],[131,48],[135,48.5],[131,43.5],[130,42.5],[124,40],[121.5,39],[122,37],[119,35.5],[121,32],[122.5,30],[120,27.5],[118,24.5],[114,22.2],[110,20.5],[108,21.5],[105,23],[101.5,21.5],[98,24],[97.5,28.5],[92,28],[85,28.5],[79,32],[76,34.5],[74,37]]],
    isles: [[[108.6,20],[111,20],[110.5,18.2],[108.7,18.5]], [[121,25.3],[122,24.5],[120.8,22],[120.2,23.5]]],
    anchors: { beijing: [116.4, 39.9], shanghai: [121.5, 31.2], "hong-kong": [114.2, 22.3], shenzhen: [114.1, 22.5], chengdu: [104, 30.7], xian: [108.9, 34.3], "xi'an": [108.9, 34.3], wuhan: [114.3, 30.6], guangzhou: [113.3, 23.1], chongqing: [106.5, 29.6], harbin: [126.6, 45.8], lhasa: [91.1, 29.7], urumqi: [87.6, 43.8], kunming: [102.7, 25], nanjing: [118.8, 32], tianjin: [117.2, 39.1], hangzhou: [120.2, 30.3], tibet: [88, 31.5], gobi: [105, 43], xinjiang: [85, 41], taklamakan: [82, 39], "three-gorges": [111, 30.8], yangtze: [112, 30], "yellow-river": [108, 37], "great-wall": [115, 40.5], taiwan: [121, 23.7], hainan: [109.7, 19.2], mongolia: [104, 47], himalayas: [86, 28.5], everest: [86.9, 27.9], "inner-mongolia": [112, 42], manchuria: [126, 45], "pearl-river": [113.5, 22.8], "sichuan": [103, 30], "yunnan": [101.5, 25], "loess-plateau": [108, 37], "north-china-plain": [116, 36], "south-china-sea": [114, 18], "east-china-sea": [125, 29], "yellow-sea": [123, 35], "tian-shan": [84, 43], "qinghai": [96, 36], "tarim": [84, 40], "kashgar": [76, 39.5], "dunhuang": [94.7, 40.1], "macau": [113.5, 22.2], "korea": [127, 37], "pyongyang": [125.8, 39] },
    features: [{ t: "plateau", c: [88, 33], r: [10, 4.5], h: 1 }, { t: "mtn", pts: [[76, 35], [82, 30], [88, 28.5], [94, 29]], r: 1.8, h: 1.3 }, { t: "mtn", pts: [[76, 42], [82, 43], [88, 43.5]], r: 1.4, h: 1 }, { t: "mtn", pts: [[100, 30], [103, 27]], r: 1.4, h: 0.8 }, { t: "mtn", pts: [[108, 30], [110, 33]], r: 1, h: 0.5 }, { t: "mtn", pts: [[99, 36], [103, 38]], r: 1.2, h: 0.8 }, { t: "mtn", pts: [[88, 39], [94, 38]], r: 1.6, h: 1.1 }, { t: "mtn", pts: [[117, 41], [123, 42]], r: 1, h: 0.5 }, { t: "desert", c: [82, 39.5], r: [6, 2.5] }, { t: "desert", c: [105, 42.5], r: [10, 3] }, { t: "desert", c: [91, 44], r: [4, 1.5] }, { t: "forest", c: [128, 47], r: [5, 5] }, { t: "forest", c: [112, 26], r: [8, 4] }, { t: "forest", c: [101, 24], r: [3, 2.5] }, { t: "ice", c: [84, 30.5], r: [8, 1.2] }, { t: "river", pts: [[91, 33], [97, 31.5], [100, 30], [106, 29.5], [111, 30.5], [117, 31], [121.5, 31.5]] }, { t: "river", pts: [[96, 35], [102, 36], [106, 38], [111, 40], [111, 35], [115, 35], [119, 37.5]] }, { t: "river", pts: [[104, 24], [110, 23], [113.5, 23]] }, { t: "river", pts: [[122, 50], [127, 48], [132, 48]] }, { t: "lake", c: [100.2, 36.9], r: [0.6, 0.4] }, { t: "lake", c: [116.3, 29.2], r: [0.3, 0.6] }],
  });
  region("japan", {
    name: "Japan", bbox: [126, 29, 148, 47], kmW: 1800, biome: "temperate",
    polys: [JP_HON], isles: [JP_HOK, JP_KYU, JP_SHI, [[129.5,34.6],[129.8,34.8],[129.6,34.3]], [[138.2,34.6],[138.5,34.8],[138.3,34.3]]],
    anchors: { tokyo: [139.7, 35.7], osaka: [135.5, 34.7], kyoto: [135.8, 35], nagoya: [136.9, 35.2], sapporo: [141.3, 43.1], fukuoka: [130.4, 33.6], hiroshima: [132.5, 34.4], sendai: [140.9, 38.3], yokohama: [139.6, 35.4], kobe: [135.2, 34.7], nagasaki: [129.9, 32.7], fukushima: [140.5, 37.4], "mount-fuji": [138.7, 35.4], fuji: [138.7, 35.4], hokkaido: [143, 43.4], honshu: [138, 36.5], kyushu: [131, 32.5], shikoku: [133.5, 33.8], "japan-alps": [137.6, 36.2], okinawa: [127, 29.5], "sea-of-japan": [134, 39], pacific: [144, 35], "tokyo-bay": [139.9, 35.4], "osaka-bay": [135.3, 34.5], "mount-aso": [131.1, 32.9], "sakurajima": [130.7, 31.6], "niigata": [139, 37.9], "kanazawa": [136.6, 36.6], "nara": [135.8, 34.7], "hakone": [139.1, 35.2], "mt-fuji": [138.7, 35.4], "aomori": [140.7, 40.8], "nagano": [138.2, 36.6], "kamchatka": [147, 46.5], "ryukyu": [128, 29.8] },
    features: [{ t: "mtn", pts: [[131.5, 34.8], [134, 35.2], [136.5, 36.3], [138.3, 36.5], [139.5, 37.5], [140.8, 39.5], [141, 40.8]], r: 0.6, h: 1 }, { t: "mtn", pts: [[138.6, 35.3], [138.8, 35.5]], r: 0.35, h: 1.4 }, { t: "mtn", pts: [[142, 43], [143.5, 43.8]], r: 0.7, h: 0.8 }, { t: "mtn", pts: [[130.8, 32.5], [131.3, 33.2]], r: 0.5, h: 0.8 }, { t: "forest", c: [138, 37], r: [6, 4] }, { t: "forest", c: [143, 43.5], r: [3, 2] }, { t: "ice", c: [143.5, 43.8], r: [1.4, 0.5] }, { t: "river", pts: [[139.5, 36.7], [140.6, 35.7]] }, { t: "river", pts: [[137.5, 37.3], [138.9, 37.8]] }, { t: "lake", c: [136.1, 35.3], r: [0.22, 0.4] }],
  });
  region("uk", {
    name: "United Kingdom & Ireland", bbox: [-11.5, 49, 3, 59.5], kmW: 1000, biome: "temperate",
    polys: [GB], isles: [IRELAND, [[-4.8,54.1],[-4.3,54.4],[-4.4,54.05]], [[-1.5,50.6],[-1.1,50.7],[-1.2,50.55]], [[-7.5,57],[-6.2,58.4],[-6.3,57.6]]],
    anchors: { london: [-0.1, 51.5], manchester: [-2.2, 53.5], birmingham: [-1.9, 52.5], edinburgh: [-3.2, 55.95], glasgow: [-4.3, 55.9], cardiff: [-3.2, 51.5], belfast: [-5.9, 54.6], dublin: [-6.3, 53.3], liverpool: [-3, 53.4], scotland: [-4.2, 56.8], wales: [-3.8, 52.3], england: [-1.5, 52.5], ireland: [-8, 53.3], cornwall: [-4.9, 50.4], highlands: [-4.6, 57.3], "north-sea": [1.5, 55.5], oxford: [-1.3, 51.8], cambridge: [0.1, 52.2], newcastle: [-1.6, 55], leeds: [-1.5, 53.8], dover: [1.3, 51.1], "isle-of-man": [-4.5, 54.2], aberdeen: [-2.1, 57.1], inverness: [-4.2, 57.5], bristol: [-2.6, 51.5], plymouth: [-4.1, 50.4], york: [-1.1, 53.96], norwich: [1.3, 52.6], "lake-district": [-3.1, 54.5], "peak-district": [-1.8, 53.3], "loch-ness": [-4.4, 57.3], "ben-nevis": [-5, 56.8], snowdonia: [-4, 53], "english-channel": [-1.5, 50], "irish-sea": [-4.5, 53.8], "thames": [0.5, 51.5], "stonehenge": [-1.8, 51.2], "cork": [-8.5, 51.9], "galway": [-9, 53.3], "orkney": [-3, 59], "hebrides": [-7, 57.8], "shetland": [-1.3, 60], "channel-tunnel": [1.3, 51] },
    features: [{ t: "mtn", pts: [[-5.2, 56.5], [-4.6, 57.2], [-4, 57.5]], r: 0.45, h: 0.8 }, { t: "mtn", pts: [[-4.1, 52.8], [-3.6, 53.1]], r: 0.3, h: 0.6 }, { t: "mtn", pts: [[-3.1, 54.4], [-2.4, 54.7]], r: 0.3, h: 0.5 }, { t: "mtn", pts: [[-2, 54.8], [-1.8, 53.4]], r: 0.3, h: 0.35 }, { t: "mtn", pts: [[-9.5, 52], [-9.5, 53.5]], r: 0.3, h: 0.4 }, { t: "forest", c: [-1.5, 52.5], r: [2.5, 2] }, { t: "river", pts: [[-1.8, 51.7], [-0.5, 51.5], [0.8, 51.5]] }, { t: "river", pts: [[-2.4, 53.6], [-2.5, 52.9], [-2.2, 52.3], [-2.4, 51.6]] }, { t: "lake", c: [-4.4, 57.3], r: [0.18, 0.08] }, { t: "lake", c: [-6.4, 54.6], r: [0.25, 0.2] }],
  });
  region("egypt-nile", {
    name: "Egypt & the Nile", bbox: [24, 20, 38, 34], kmW: 1400, biome: "desert",
    polys: [[[24,32.2],[25.2,31.7],[27,31.3],[29,30.9],[30.2,31.4],[31,31.6],[32.3,31.3],[34.2,31.3],[34.9,32.5],[35.5,34],[38,34],[38,24.5],[36.6,27.3],[35.2,29.6],[34.9,29],[34.6,28.2],[34.3,27.8],[33.9,28.2],[33.6,29.2],[32.6,29.9],[33.3,28.5],[34.2,27],[35.6,23.8],[37,21.5],[37.3,20],[24,20]]],
    isles: [],
    anchors: { cairo: [31.2, 30], giza: [31.1, 30], alexandria: [29.9, 31.2], luxor: [32.6, 25.7], aswan: [32.9, 24.1], "nile-delta": [31, 31], suez: [32.5, 30], sinai: [33.8, 29.3], "red-sea": [35.5, 26], sahara: [27, 27], siwa: [25.5, 29.2], "abu-simbel": [31.6, 22.3], sharm: [34.3, 27.9], "sharm-el-sheikh": [34.3, 27.9], "western-desert": [27, 25], mediterranean: [30, 32.8], nile: [32.5, 26.5], "lake-nasser": [32.5, 23], "valley-of-the-kings": [32.6, 25.7], "pyramids": [31.1, 30], "port-said": [32.3, 31.3], "suez-canal": [32.4, 30.6], hurghada: [33.8, 27.2], "mount-sinai": [33.97, 28.5], "qattara": [27.5, 30], "eastern-desert": [33, 26], "nubia": [31.5, 21.5], "sudan": [32, 19], "libya": [23.5, 27], "israel": [35, 31.5], "saudi-arabia": [38, 25], "dead-sea": [35.5, 31.5], "gulf-of-suez": [33, 28.8], "gulf-of-aqaba": [34.7, 28.5], "fayoum": [30.8, 29.3], "new-capital": [31.7, 30] },
    features: [{ t: "desert", c: [31, 26], r: [12, 10] }, { t: "mtn", pts: [[34, 27.5], [33.5, 25], [34.5, 23]], r: 0.7, h: 0.6 }, { t: "mtn", pts: [[33.8, 28.3], [34.2, 28.8]], r: 0.4, h: 0.6 }, { t: "mtn", pts: [[37, 27], [38.5, 24]], r: 0.8, h: 0.5 }, { t: "valley", pts: [[32.5, 18], [33, 21], [32.9, 24.1], [32.6, 25.7], [31.2, 27.5], [31.2, 30], [31, 31.4]], r: 0.5 }, { t: "valley", pts: [[31, 30.3], [30.3, 31.4]], r: 0.5 }, { t: "valley", pts: [[31, 30.3], [31.8, 31.4]], r: 0.5 }, { t: "valley", pts: [[30.8, 29.3], [30.5, 29.5]], r: 0.35 }, { t: "river", pts: [[32.5, 18], [33, 21], [32.9, 24.1], [32.6, 25.7], [31.2, 27.5], [31.2, 30], [31, 30.5], [30.3, 31.4]] }, { t: "river", pts: [[31, 30.5], [31.8, 31.4]] }, { t: "lake", c: [32.6, 22.8], r: [0.35, 1.3] }, { t: "lake", c: [30.6, 29.5], r: [0.3, 0.2] }, { t: "lake", c: [35.5, 31.4], r: [0.15, 0.4] }],
  });
  region("middle-east", {
    name: "Middle East", bbox: [25, 12, 65, 42], kmW: 4000, biome: "desert",
    polys: [[[25,42],[65,42],[65,25.5],[61.5,25.2],[57,25.5],[54,26.5],[51.5,27.5],[50.5,30],[48,30],[48.5,28.5],[50,26.5],[51,25.5],[52,24.5],[55,25.5],[56.3,26.2],[57.5,24],[59.8,22.5],[58.5,22],[57,19],[54.5,17],[52,16.5],[48.5,14],[45,12.8],[43.3,13],[42.5,16.5],[41,19.5],[39.5,22],[38.3,24.5],[36.6,27.3],[34.9,29.5],[34.3,29.5],[34.3,31.3],[35.8,35.5],[36,36.5],[33,36],[29,36.5],[26.5,37],[26,40]], [[25,31.8],[30,31.3],[32.3,31.3],[32.6,29.9],[33.5,28.3],[34.2,27],[35.6,23.8],[37,21.5],[38.5,18],[39.5,15.5],[41,15.5],[43,12.5],[43,12],[25,12]]],
    isles: [[[32.3,35.2],[34.6,35.6],[33.5,34.6]], [[50.4,26.3],[50.7,26.2],[50.6,25.8]]],
    anchors: { dubai: [55.3, 25.2], riyadh: [46.7, 24.7], mecca: [39.8, 21.4], tehran: [51.4, 35.7], baghdad: [44.4, 33.3], jerusalem: [35.2, 31.8], istanbul: [29, 41], cairo: [31.2, 30], doha: [51.5, 25.3], muscat: [58.6, 23.6], "abu-dhabi": [54.4, 24.5], kuwait: [47.9, 29.4], "kuwait-city": [47.9, 29.4], sanaa: [44.2, 15.4], aden: [45, 12.8], medina: [39.6, 24.5], neom: [35.2, 28], ankara: [32.9, 39.9], damascus: [36.3, 33.5], beirut: [35.5, 33.9], amman: [36, 32], isfahan: [51.7, 32.6], basra: [47.8, 30.5], jeddah: [39.2, 21.5], manama: [50.6, 26.2], "tel-aviv": [34.8, 32.1], "persian-gulf": [51, 27], "red-sea": [38, 20], "arabian-desert": [45, 21], "empty-quarter": [50, 20], "rub-al-khali": [50, 20], suez: [32.5, 30], hormuz: [56.5, 26.5], "strait-of-hormuz": [56.5, 26.5], "arabian-sea": [60, 18], caspian: [51, 40], euphrates: [42, 35], tigris: [44, 34], zagros: [50, 32], levant: [36, 34], anatolia: [34, 39], "gulf-of-aden": [47, 12.5], "bab-el-mandeb": [43.4, 12.6], sinai: [33.8, 29.3], "dead-sea": [35.5, 31.5], mesopotamia: [44, 33], "saudi-arabia": [45, 24], iran: [54, 32], iraq: [43.5, 33], turkey: [34, 39], yemen: [47, 15.5], oman: [56, 21], uae: [54.5, 24], qatar: [51.2, 25.3], bahrain: [50.6, 26.1], jordan: [37, 31], syria: [38, 35], lebanon: [35.8, 34], israel: [35, 31.5], cyprus: [33.2, 35.1], "mediterranean": [30, 34], "the-line": [35.3, 28.2], "hejaz": [40, 24], "najd": [45, 25], "asir": [42.5, 19] },
    features: [{ t: "desert", c: [45, 23], r: [11, 8] }, { t: "desert", c: [30, 27], r: [10, 6] }, { t: "desert", c: [56, 32], r: [6, 4] }, { t: "desert", c: [40, 31], r: [5, 3] }, { t: "mtn", pts: [[44, 38], [47, 35], [50, 32], [53, 29], [56, 27]], r: 1.4, h: 1 }, { t: "mtn", pts: [[49, 37], [53, 36.5], [57, 36.5]], r: 1, h: 0.9 }, { t: "mtn", pts: [[30, 37.5], [34, 37.5], [37, 38], [41, 39.5], [44, 40]], r: 1.3, h: 0.8 }, { t: "mtn", pts: [[42, 19], [42.5, 16], [44, 14]], r: 0.9, h: 0.8 }, { t: "mtn", pts: [[56.5, 23.5], [58.5, 22.5]], r: 0.6, h: 0.6 }, { t: "mtn", pts: [[36, 34.5], [36, 33]], r: 0.5, h: 0.5 }, { t: "forest", c: [30, 41], r: [6, 1.5] }, { t: "forest", c: [51, 37], r: [4, 1] }, { t: "valley", pts: [[38, 38], [39, 36], [42, 34.5], [45, 32], [47.5, 30.5]], r: 0.6 }, { t: "valley", pts: [[31, 31.3], [31.2, 27]], r: 0.5 }, { t: "river", pts: [[38, 38], [39, 36], [42, 34.5], [45, 32], [47.5, 30.5]] }, { t: "river", pts: [[42, 37.5], [44.4, 33.3], [46, 31.5], [47.5, 30.5]] }, { t: "river", pts: [[31.2, 27], [31.2, 30], [31, 31.3]] }, { t: "lake", c: [51, 40.5], r: [2.2, 2.5] }, { t: "lake", c: [45.3, 38.5], r: [0.6, 0.6] }, { t: "lake", c: [35.5, 31.5], r: [0.15, 0.45] }, { t: "lake", c: [38.5, 38.8], r: [0.4, 0.3] }],
  });
  region("antarctica", {
    name: "Antarctica", proj: "xy", bbox: [0, 0, 1, 1], kmW: 5500, biome: "polar", aspect: 1,
    polys: [[[0.3,0.12],[0.27,0.06],[0.24,0.1],[0.27,0.2],[0.33,0.28],[0.3,0.34],[0.24,0.4],[0.19,0.48],[0.15,0.58],[0.18,0.68],[0.26,0.78],[0.36,0.86],[0.45,0.9],[0.49,0.82],[0.55,0.86],[0.65,0.88],[0.76,0.82],[0.84,0.72],[0.88,0.6],[0.87,0.46],[0.82,0.34],[0.75,0.26],[0.65,0.2],[0.56,0.17],[0.49,0.21],[0.43,0.3],[0.38,0.24],[0.34,0.17]]],
    isles: [[[0.1,0.3],[0.14,0.3],[0.13,0.34],[0.09,0.33]]],
    anchors: { "south-pole": [0.54, 0.52], "antarctic-peninsula": [0.27, 0.12], peninsula: [0.27, 0.12], "ross-ice-shelf": [0.5, 0.84], "ross-sea": [0.5, 0.95], "weddell-sea": [0.36, 0.3], mcmurdo: [0.52, 0.9], vostok: [0.68, 0.5], "lake-vostok": [0.68, 0.5], transantarctic: [0.5, 0.66], "east-antarctica": [0.72, 0.45], "west-antarctica": [0.36, 0.6], "mount-erebus": [0.54, 0.88], thwaites: [0.22, 0.62], "thwaites-glacier": [0.22, 0.62], "pine-island": [0.24, 0.66], "amundsen-sea": [0.12, 0.64], "dome-a": [0.7, 0.36], "queen-maud-land": [0.6, 0.2], "wilkes-land": [0.82, 0.68], "larsen": [0.3, 0.2], "drake-passage": [0.2, 0.05], "south-america": [0.1, 0.02], "ellsworth": [0.36, 0.5], "vinson": [0.36, 0.5], "mcmurdo-station": [0.52, 0.9], "scott-base": [0.53, 0.9], "halley": [0.42, 0.22], "casey": [0.86, 0.7], "dumont": [0.7, 0.9], "coast": [0.86, 0.6], "interior": [0.6, 0.5] },
    features: [{ t: "plateau", c: [0.65, 0.45], r: [0.2, 0.2], h: 0.9 }, { t: "mtn", pts: [[0.44, 0.78], [0.5, 0.66], [0.56, 0.54], [0.58, 0.4]], r: 0.03, h: 0.9 }, { t: "mtn", pts: [[0.28, 0.1], [0.3, 0.26]], r: 0.02, h: 0.7 }, { t: "mtn", pts: [[0.34, 0.48], [0.38, 0.52]], r: 0.02, h: 1 }, { t: "shelf", c: [0.49, 0.86], r: [0.08, 0.06] }, { t: "shelf", c: [0.34, 0.3], r: [0.06, 0.05] }],
  });
  region("mediterranean", {
    name: "Mediterranean", bbox: [-7, 29, 37, 47], kmW: 3900, biome: "mixed",
    polys: [[[-6,47],[37,47],[37,45.3],[33.5,46],[32,46.5],[30.5,46.5],[29.7,45.3],[28,43.5],[28.3,41.5],[29,41],[31,41.2],[35,42],[37,41.2],[37,36.7],[36,36.5],[33,36],[30.5,36.3],[29,36.5],[27.5,37],[26.5,38.5],[26,40],[26.5,40.7],[26,41],[23,40],[24,38],[22.5,36.5],[21.5,38],[19.4,40],[19.5,41.5],[18.5,42.2],[15,44.5],[13.8,45.5],[12.5,45.3],[13.5,43.5],[16,41.8],[18.5,40],[17,39],[16.2,38.4],[15.5,38],[12.5,41.5],[10.5,43],[9.5,44.2],[7,43.6],[4.5,43.4],[3.2,42],[0.5,40.5],[0,38.6],[-2,36.7],[-5.5,36],[-6,36.2]], [[-6,29],[-6,35],[-2,35.2],[0,36],[5,36.8],[8,37],[11,37.3],[10.2,34.5],[11,33.7],[15,32.5],[19.5,30.5],[20,32.5],[25,31.8],[30,31.3],[32.3,31.3],[32.6,29.9],[33.5,29],[34.3,29.5],[34.3,31.3],[35.3,33],[35.8,35.5],[36,36.5],[37,36.7],[37,29]]],
    isles: [[[12.4,38.1],[15.6,38.3],[15.1,36.7],[12.5,37.6]], [[8.2,41],[9.7,41.2],[9.6,39.2],[8.4,39]], [[8.6,43],[9.5,42.9],[9.2,41.4],[8.7,41.6]], [[23.5,35.4],[26.3,35.2],[25.5,34.9],[23.6,35]], [[32.3,35.2],[34.6,35.6],[33.5,34.6]], [[2.4,39.6],[3.4,39.9],[3.1,39.3]], [[14.2,36],[14.6,36],[14.4,35.8]], [[27.7,36.4],[28.2,36.4],[28,35.9]]],
    anchors: { rome: [12.5, 41.9], athens: [23.7, 38], istanbul: [29, 41], cairo: [31.2, 30], alexandria: [29.9, 31.2], barcelona: [2.2, 41.4], marseille: [5.4, 43.3], naples: [14.3, 40.8], venice: [12.3, 45.4], tunis: [10.2, 36.8], algiers: [3, 36.8], tripoli: [13.2, 32.9], "tel-aviv": [34.8, 32.1], jerusalem: [35.2, 31.8], beirut: [35.5, 33.9], cyprus: [33.2, 35.1], crete: [25, 35.3], sicily: [14, 37.5], sardinia: [9, 40], corsica: [9, 42.2], malta: [14.4, 35.9], gibraltar: [-5.3, 36.1], suez: [32.5, 30], aegean: [25, 38], adriatic: [16, 43], "black-sea": [33, 43.5], "nile-delta": [31, 31], libya: [17, 31], sahara: [10, 30], balkans: [21, 43], alps: [10, 46.5], "strait-of-gibraltar": [-5.6, 35.95], "strait-of-sicily": [12, 37], "ionian-sea": [19, 37.5], "tyrrhenian-sea": [12, 40], "levant": [35, 34], "bosphorus": [29, 41.1], "dardanelles": [26.4, 40.2], "nice": [7.3, 43.7], "valencia": [-0.4, 39.5], "genoa": [8.9, 44.4], "palermo": [13.4, 38.1], "dubrovnik": [18.1, 42.6], "izmir": [27.1, 38.4], "antalya": [30.7, 36.9], "benghazi": [20.1, 32.1], "rhodes": [28, 36.2], "santorini": [25.4, 36.4], "mallorca": [3, 39.6], "morocco": [-5, 33], "tunisia": [9.5, 34], "egypt": [29, 30], "spain": [-3, 40], "italy": [12.5, 43], "greece": [22, 39], "turkey": [32, 39], "france": [3, 45], "croatia": [16, 45], "dead-sea": [35.5, 31.5], "pyrenees": [0.5, 42.7], "atlas": [-4, 32] },
    features: [{ t: "desert", c: [12, 30.5], r: [18, 3.5] }, { t: "desert", c: [-3, 31], r: [4, 2.5] }, { t: "desert", c: [-3, 38.5], r: [2.2, 1.3] }, { t: "mtn", pts: [[6, 45.5], [8.5, 46.3], [11, 46.8], [14, 47]], r: 1.2, h: 1 }, { t: "mtn", pts: [[-1, 42.8], [2.5, 42.6]], r: 0.7, h: 0.7 }, { t: "mtn", pts: [[13, 44], [14.5, 42], [16, 40]], r: 0.6, h: 0.6 }, { t: "mtn", pts: [[15.5, 44.5], [19, 43], [21, 42]], r: 0.8, h: 0.6 }, { t: "mtn", pts: [[30, 37.3], [34, 37.3], [37, 38.5]], r: 0.8, h: 0.7 }, { t: "mtn", pts: [[-7, 31.5], [-4, 32.5], [0, 34.5], [5, 35.5]], r: 1, h: 0.8 }, { t: "mtn", pts: [[-5, 37], [-3, 37.3]], r: 0.5, h: 0.6 }, { t: "mtn", pts: [[21.5, 40.5], [22.5, 38.5]], r: 0.5, h: 0.5 }, { t: "forest", c: [20, 44.5], r: [8, 2] }, { t: "forest", c: [2, 45], r: [5, 2] }, { t: "forest", c: [32, 41], r: [5, 1] }, { t: "valley", pts: [[31.2, 29], [31.2, 30], [31, 31.3]], r: 0.5 }, { t: "river", pts: [[31.2, 29], [31.2, 30], [31, 30.5], [30.3, 31.4]] }, { t: "river", pts: [[7, 45], [11, 44.9], [12.5, 44.9]] }, { t: "river", pts: [[5, 45.5], [4.8, 43.4]] }, { t: "river", pts: [[0, 42], [0.8, 40.7]] }, { t: "river", pts: [[12.5, 43.4], [12.5, 41.9]] }, { t: "river", pts: [[28, 44.5], [29.6, 45.2]] }],
  });
  // Generic landmasses (normalised coordinates) for places that aren't real geography.
  region("island", {
    name: "Island", proj: "xy", bbox: [0, 0, 1, 1], kmW: 300, biome: "tropical", aspect: 1.3,
    polys: [[[0.2,0.3],[0.3,0.18],[0.45,0.15],[0.6,0.2],[0.72,0.18],[0.84,0.3],[0.86,0.45],[0.8,0.58],[0.82,0.7],[0.7,0.82],[0.55,0.8],[0.45,0.86],[0.3,0.8],[0.18,0.66],[0.14,0.5],[0.26,0.46],[0.2,0.38]]],
    isles: [[[0.08,0.78],[0.14,0.76],[0.13,0.84],[0.07,0.84]], [[0.9,0.16],[0.95,0.2],[0.92,0.26]]],
    anchors: { center: [0.5, 0.5], north: [0.5, 0.22], south: [0.5, 0.8], east: [0.8, 0.5], west: [0.22, 0.5], capital: [0.42, 0.62], harbor: [0.74, 0.62], harbour: [0.74, 0.62], bay: [0.18, 0.44], peak: [0.5, 0.42], coast: [0.82, 0.4], beach: [0.6, 0.8], "north-coast": [0.5, 0.18], "south-coast": [0.5, 0.84], lagoon: [0.3, 0.75], cape: [0.86, 0.45], islet: [0.11, 0.8], volcano: [0.5, 0.42], village: [0.3, 0.3], port: [0.74, 0.62], interior: [0.5, 0.5], reef: [0.92, 0.3] },
    features: [{ t: "mtn", pts: [[0.42, 0.38], [0.52, 0.42], [0.6, 0.5]], r: 0.05, h: 1.1 }, { t: "forest", c: [0.5, 0.5], r: [0.25, 0.2] }, { t: "river", pts: [[0.5, 0.42], [0.42, 0.56], [0.36, 0.72]] }],
  });
  region("archipelago", {
    name: "Archipelago", proj: "xy", bbox: [0, 0, 1, 1], kmW: 800, biome: "tropical", aspect: 1.5,
    polys: [[[0.1,0.3],[0.2,0.2],[0.32,0.24],[0.36,0.36],[0.3,0.46],[0.18,0.48],[0.1,0.42]]],
    isles: [[[0.4,0.55],[0.5,0.5],[0.6,0.56],[0.58,0.68],[0.46,0.7],[0.38,0.64]], [[0.62,0.2],[0.72,0.16],[0.82,0.24],[0.8,0.34],[0.68,0.36],[0.6,0.3]], [[0.74,0.7],[0.86,0.66],[0.92,0.76],[0.84,0.86],[0.72,0.82]], [[0.2,0.72],[0.28,0.7],[0.3,0.8],[0.22,0.84]], [[0.46,0.34],[0.52,0.32],[0.52,0.4]]],
    anchors: { center: [0.5, 0.5], "main-island": [0.22, 0.34], north: [0.72, 0.26], south: [0.82, 0.76], east: [0.82, 0.5], west: [0.14, 0.5], capital: [0.24, 0.36], harbor: [0.5, 0.6], harbour: [0.5, 0.6], "second-island": [0.5, 0.6], "third-island": [0.72, 0.26], "fourth-island": [0.82, 0.76], islet: [0.5, 0.36], strait: [0.4, 0.44], lagoon: [0.6, 0.45], reef: [0.9, 0.5], volcano: [0.72, 0.26], port: [0.3, 0.44], channel: [0.65, 0.55], atoll: [0.24, 0.78], "open-sea": [0.5, 0.9] },
    features: [{ t: "mtn", pts: [[0.2, 0.3], [0.28, 0.36]], r: 0.03, h: 0.8 }, { t: "mtn", pts: [[0.7, 0.26], [0.74, 0.28]], r: 0.025, h: 1 }, { t: "forest", c: [0.5, 0.5], r: [0.5, 0.5] }],
  });
  region("continent", {
    name: "Continent", proj: "xy", bbox: [0, 0, 1, 1], kmW: 6000, biome: "mixed", aspect: 1.25,
    polys: [[[0.12,0.36],[0.18,0.2],[0.3,0.12],[0.46,0.1],[0.58,0.16],[0.7,0.12],[0.84,0.2],[0.9,0.34],[0.86,0.48],[0.9,0.6],[0.82,0.74],[0.7,0.8],[0.62,0.9],[0.5,0.86],[0.4,0.9],[0.3,0.82],[0.18,0.74],[0.1,0.6],[0.16,0.5]]],
    isles: [[[0.92,0.78],[0.97,0.8],[0.95,0.88],[0.9,0.86]], [[0.04,0.24],[0.1,0.22],[0.08,0.3]]],
    anchors: { center: [0.5, 0.5], north: [0.5, 0.18], south: [0.5, 0.82], east: [0.84, 0.5], west: [0.16, 0.5], northeast: [0.78, 0.24], northwest: [0.24, 0.22], southeast: [0.76, 0.76], southwest: [0.24, 0.76], capital: [0.56, 0.6], coast: [0.86, 0.4], "west-coast": [0.14, 0.5], "east-coast": [0.86, 0.5], "north-coast": [0.5, 0.14], "south-coast": [0.5, 0.86], interior: [0.5, 0.45], desert: [0.4, 0.4], mountains: [0.62, 0.42], plains: [0.74, 0.56], forest: [0.3, 0.66], river: [0.6, 0.66], delta: [0.66, 0.86], lake: [0.36, 0.5], peninsula: [0.62, 0.9], bay: [0.86, 0.6], gulf: [0.12, 0.64], cape: [0.9, 0.34], "port": [0.82, 0.74], highlands: [0.62, 0.42], "border": [0.5, 0.5] },
    features: [{ t: "desert", c: [0.4, 0.4], r: [0.16, 0.12] }, { t: "mtn", pts: [[0.56, 0.3], [0.62, 0.42], [0.66, 0.56]], r: 0.04, h: 1.1 }, { t: "mtn", pts: [[0.2, 0.3], [0.28, 0.22]], r: 0.03, h: 0.6 }, { t: "forest", c: [0.3, 0.66], r: [0.14, 0.1] }, { t: "forest", c: [0.76, 0.3], r: [0.1, 0.08] }, { t: "river", pts: [[0.62, 0.46], [0.6, 0.6], [0.64, 0.74], [0.66, 0.86]] }, { t: "river", pts: [[0.28, 0.3], [0.36, 0.5], [0.3, 0.62]] }, { t: "lake", c: [0.36, 0.5], r: [0.04, 0.03] }],
  });
  region("peninsula", {
    name: "Peninsula", proj: "xy", bbox: [0, 0, 1, 1], kmW: 1200, biome: "temperate", aspect: 1,
    polys: [[[0,0],[1,0],[1,0.2],[0.8,0.26],[0.72,0.4],[0.74,0.56],[0.66,0.7],[0.58,0.86],[0.5,0.96],[0.42,0.88],[0.36,0.72],[0.3,0.56],[0.34,0.42],[0.24,0.3],[0,0.22]]],
    isles: [[[0.84,0.7],[0.92,0.68],[0.94,0.78],[0.86,0.8]], [[0.14,0.6],[0.2,0.58],[0.2,0.66]]],
    anchors: { center: [0.52, 0.5], north: [0.5, 0.14], south: [0.5, 0.9], tip: [0.5, 0.94], east: [0.72, 0.5], west: [0.34, 0.5], capital: [0.52, 0.36], "east-coast": [0.72, 0.5], "west-coast": [0.32, 0.5], mainland: [0.5, 0.08], island: [0.88, 0.74], islet: [0.17, 0.62], port: [0.62, 0.74], bay: [0.3, 0.66], strait: [0.8, 0.8], mountains: [0.52, 0.5], coast: [0.68, 0.64], interior: [0.52, 0.44], border: [0.5, 0.22], peak: [0.52, 0.52], "north-coast": [0.5, 0.22], "south-coast": [0.5, 0.9] },
    features: [{ t: "mtn", pts: [[0.5, 0.3], [0.52, 0.5], [0.5, 0.7]], r: 0.04, h: 1 }, { t: "forest", c: [0.5, 0.15], r: [0.4, 0.1] }, { t: "forest", c: [0.42, 0.6], r: [0.08, 0.12] }, { t: "river", pts: [[0.52, 0.5], [0.62, 0.62], [0.66, 0.72]] }],
  });
  S.regions = REGIONS;
  S.regionIds = Object.keys(REGIONS);

  /** Resolve a region by id (aliases accepted, falls back to `world`). */
  function getRegion(id) {
    var k = str(id).toLowerCase().trim().replace(/[\s_]+/g, "-");
    var ALIAS = { us: "usa", "united-states": "usa", america: "usa", "north-america": "usa", "united-kingdom": "uk", britain: "uk", "great-britain": "uk", england: "uk", earth: "world", globe: "world", global: "world", egypt: "egypt-nile", nile: "egypt-nile", arabia: "middle-east", "gulf": "middle-east", "south-america": "south-america", "latin-america": "south-america", brazil: "south-america", "eu": "europe", med: "mediterranean", "antarctic": "antarctica", "south-pole": "antarctica", "prc": "china", "east-asia": "china", "nippon": "japan", "oceania": "australia", "aus": "australia", "generic": "continent", "landmass": "continent", "country": "continent", isle: "island", islands: "archipelago" };
    if (ALIAS[k]) k = ALIAS[k];
    return REGIONS[k] || REGIONS.world;
  }
  S.region = getRegion;

  // ───────────────────────── region frames (lon/lat → normalised → world px) ─────────────────────────
  function regionAspect(R) {
    if (R.proj === "xy") return R.aspect || 1;
    var b = R.bbox, mid = ((b[1] + b[3]) / 2) * Math.PI / 180;
    return ((b[2] - b[0]) * Math.cos(mid)) / (b[3] - b[1]);
  }
  function toN(R, p) {
    var b = R.bbox;
    if (R.proj === "xy") return [p[0], p[1]];
    return [(p[0] - b[0]) / (b[2] - b[0]), (b[3] - p[1]) / (b[3] - b[1])];
  }
  function degPx(R, box, d) { return R.proj === "xy" ? d * box.h : (d / (R.bbox[3] - R.bbox[1])) * box.h; }
  function normKey(s) { return str(s).toLowerCase().trim().replace(/['’.]/g, "").replace(/[\s_]+/g, "-"); }
  /** Find an anchor by name: exact, then prefix / contains. Returns [lon,lat] (or xy) or null. */
  function findAnchor(R, name) {
    var k = normKey(name);
    if (!k) return null;
    var A = R.anchors || {};
    if (A[k]) return A[k];
    var keys = Object.keys(A), i;
    for (i = 0; i < keys.length; i++) if (keys[i].indexOf(k) === 0) return A[keys[i]];
    for (i = 0; i < keys.length; i++) if (k.indexOf(keys[i]) >= 0 || keys[i].indexOf(k) >= 0) return A[keys[i]];
    return null;
  }
  /** Midpoint-displacement fractal coastline (deterministic). pts in px; returns new pts. */
  function fractalize(pts, r, rough, minLen) {
    var out = [];
    var n = pts.length;
    for (var i = 0; i < n; i++) {
      var a = pts[i], b = pts[(i + 1) % n];
      subdiv(a, b, rough, 0);
    }
    function subdiv(a, b, amp, depth) {
      var dx = b[0] - a[0], dy = b[1] - a[1], len = Math.sqrt(dx * dx + dy * dy);
      if (len < minLen || depth > 6) { out.push(a); return; }
      var mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
      var off = (r() * 2 - 1) * len * amp;
      var m = [mx - (dy / len) * off, my + (dx / len) * off];
      subdiv(a, m, amp * 0.72, depth + 1);
      subdiv(m, b, amp * 0.72, depth + 1);
    }
    return out;
  }
  function polyBounds(polys) {
    var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    polys.forEach(function (p) { p.forEach(function (q) { if (q[0] < x0) x0 = q[0]; if (q[0] > x1) x1 = q[0]; if (q[1] < y0) y0 = q[1]; if (q[1] > y1) y1 = q[1]; }); });
    return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
  }
  function segDist(px_, py_, a, b) {
    var dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy;
    var t = l2 ? clamp(((px_ - a[0]) * dx + (py_ - a[1]) * dy) / l2, 0, 1) : 0;
    var x = a[0] + dx * t - px_, y = a[1] + dy * t - py_;
    return Math.sqrt(x * x + y * y);
  }

  // ───────────────────────── colour ramps ─────────────────────────
  function rampLUT(stops) {
    var lut = new Uint8ClampedArray(256 * 3);
    for (var i = 0; i < 256; i++) {
      var p = i / 255, j = 0;
      while (j < stops.length - 2 && stops[j + 1][0] < p) j++;
      var a = stops[j], b = stops[j + 1];
      var q = clamp((p - a[0]) / Math.max(1e-6, b[0] - a[0]), 0, 1);
      var ca = hexRgb(a[1]), cb = hexRgb(b[1]);
      lut[i * 3] = lerp(ca[0], cb[0], q); lut[i * 3 + 1] = lerp(ca[1], cb[1], q); lut[i * 3 + 2] = lerp(ca[2], cb[2], q);
    }
    return lut;
  }
  var LAND_LUT = rampLUT([[0, "#C8632A"], [0.14, "#D9A55A"], [0.32, "#B9A64C"], [0.48, "#86A63A"], [0.66, "#3F8E2C"], [0.84, "#236F27"], [1, "#154F1E"]]);
  var OCEAN_LUT = rampLUT([[0, "#5FD6E6"], [0.08, "#2FB1D6"], [0.25, "#1877B8"], [0.55, "#0E4A8E"], [1, "#071F4C"]]);
  var POLAR_LUT = rampLUT([[0, "#C9DCEA"], [0.5, "#EAF2F8"], [1, "#FFFFFF"]]);
  var POLAR_OCEAN_LUT = rampLUT([[0, "#8CC7E0"], [0.1, "#4A96C4"], [0.4, "#1D4F86"], [1, "#0A2248"]]);

  // ───────────────────────── terrain renderer (canvas, built once) ─────────────────────────
  /**
   * Render the satellite-style relief map of region R. box = region bbox in world px; WA = canvas area
   * in world px (ocean bleed). Returns { canvas, shadow, WA, k, polys (world px, fractal), bounds, elev(x,y) }.
   */
  function renderTerrain(R, box, WA, opts) {
    opts = opts || {};
    var k = opts.k || 0.7;
    var cw = Math.max(8, Math.ceil(WA.w * k)), ch = Math.max(8, Math.ceil(WA.h * k));
    var biome = opts.biome || R.biome || "mixed";
    var polar = biome === "polar";
    var r = rng("coast:" + R.id);
    var rough = opts.roughness != null ? opts.roughness : R.proj === "xy" ? 0.12 : 0.1;
    // world px polygons (fractalised)
    function toW(p) { var n = toN(R, p); return [box.x + n[0] * box.w, box.y + n[1] * box.h]; }
    var polysW = [];
    arr(R.polys).concat(arr(R.isles)).forEach(function (poly, pi) {
      var pts = poly.map(toW);
      var isIsle = pi >= arr(R.polys).length;
      polysW.push(fractalize(pts, r, isIsle ? rough * 0.8 : rough, 5 * V.unit));
    });
    var bounds = polyBounds(polysW);
    // 1. crisp land mask at full res
    var mc = document.createElement("canvas");
    mc.width = cw; mc.height = ch;
    var mg = mc.getContext("2d");
    mg.fillStyle = "#000"; mg.fillRect(0, 0, cw, ch);
    mg.fillStyle = "#fff";
    mg.setTransform(k, 0, 0, k, -WA.x * k, -WA.y * k);
    polysW.forEach(function (p) {
      mg.beginPath();
      p.forEach(function (q, i) { if (i) mg.lineTo(q[0], q[1]); else mg.moveTo(q[0], q[1]); });
      mg.closePath(); mg.fill();
    });
    mg.setTransform(1, 0, 0, 1, 0, 0);
    var mask = mg.getImageData(0, 0, cw, ch).data;
    // 2. coarse grid: distance fields, elevation, moisture
    var G = 4, gw = Math.ceil(cw / G) + 1, gh = Math.ceil(ch / G) + 1, N = gw * gh;
    var land = new Uint8Array(N), dIn = new Float32Array(N), dOut = new Float32Array(N);
    var EL = new Float32Array(N), MO = new Float32Array(N), ICE = new Float32Array(N), LOW = new Float32Array(N);
    var i, j, x, y, idx;
    for (j = 0; j < gh; j++) for (i = 0; i < gw; i++) {
      var sx = Math.min(cw - 1, i * G), sy = Math.min(ch - 1, j * G);
      land[j * gw + i] = mask[(sy * cw + sx) * 4] > 127 ? 1 : 0;
    }
    var BIG = 1e6;
    for (idx = 0; idx < N; idx++) { dIn[idx] = land[idx] ? BIG : 0; dOut[idx] = land[idx] ? 0 : BIG; }
    function chamfer(d) {
      var w = gw, h = gh, v;
      for (j = 0; j < h; j++) for (i = 0; i < w; i++) {
        v = d[j * w + i]; if (v === 0) continue;
        if (i > 0) v = Math.min(v, d[j * w + i - 1] + 1);
        if (j > 0) { v = Math.min(v, d[(j - 1) * w + i] + 1); if (i > 0) v = Math.min(v, d[(j - 1) * w + i - 1] + 1.414); if (i < w - 1) v = Math.min(v, d[(j - 1) * w + i + 1] + 1.414); }
        d[j * w + i] = v;
      }
      for (j = h - 1; j >= 0; j--) for (i = w - 1; i >= 0; i--) {
        v = d[j * w + i]; if (v === 0) continue;
        if (i < w - 1) v = Math.min(v, d[j * w + i + 1] + 1);
        if (j < h - 1) { v = Math.min(v, d[(j + 1) * w + i] + 1); if (i < w - 1) v = Math.min(v, d[(j + 1) * w + i + 1] + 1.414); if (i > 0) v = Math.min(v, d[(j + 1) * w + i - 1] + 1.414); }
        d[j * w + i] = v;
      }
    }
    chamfer(dIn); chamfer(dOut);
    // features in canvas-grid units
    var regW = Math.max(40, box.w * k), regH = Math.max(40, box.h * k);
    var regScale = Math.min(regW, regH);
    function toG(p) { var w = toW(p); return [((w[0] - WA.x) * k) / G, ((w[1] - WA.y) * k) / G]; }
    var pxLon = R.proj === "xy" ? box.w : box.w / (R.bbox[2] - R.bbox[0]), pxLat = R.proj === "xy" ? box.h : box.h / (R.bbox[3] - R.bbox[1]);
    function rGx(d) { return (d * pxLon * k) / G; }
    function rGy(d) { return (d * pxLat * k) / G; }
    var feats = arr(R.features).concat(arr(opts.features)).map(function (f) {
      var o = { t: f.t, h: f.h != null ? f.h : 1 };
      if (f.pts) o.pts = f.pts.map(toG);
      if (f.c) o.c = toG(f.c);
      if (f.r != null) { var rr = Array.isArray(f.r) ? f.r : [f.r, f.r]; o.rx = Math.max(0.5, rGx(rr[0])); o.ry = Math.max(0.5, rGy(rr[1])); }
      if (f.pts) o.rx = o.ry = Math.max(0.6, f.r != null ? rGy(Array.isArray(f.r) ? f.r[0] : f.r) : regScale / G * 0.004);
      if (f.t === "river") o.rx = o.ry = Math.max(0.6, f.r != null ? rGy(f.r) : regScale / G * 0.006);
      return o;
    });
    var fq = 2.6 / (regScale / G); // base noise frequency: ~2.6 cells across the region
    var coastFall = Math.max(1.5, regScale / G * 0.07);
    var baseM = { arid: 0.16, temperate: 0.6, tropical: 0.74, desert: 0.06, mixed: 0.46, polar: 0.1 }[biome] || 0.5;
    var coastM = { arid: 0.62, temperate: 0.18, tropical: 0.12, desert: 0.12, mixed: 0.3, polar: 0 }[biome] || 0.2;
    var coastW = Math.max(2, regScale / G * (biome === "arid" ? 0.1 : 0.06));
    for (j = 0; j < gh; j++) for (i = 0; i < gw; i++) {
      idx = j * gw + i;
      var nx = i * fq, ny = j * fq;
      var e = fbm(nx * 1.0 + 3.1, ny * 1.0 + 7.7, 5) ;
      e = (e - 0.3) * 0.8; if (e < 0) e *= 0.3;
      var din = dIn[idx];
      var cf = smooth(clamp(din / coastFall, 0, 1));
      e = e * (0.15 + 0.85 * cf) + 0.02 * cf;
      var m = baseM + coastM * Math.exp(-din / coastW) + 0.28 * (fbm(nx * 0.8 + 50.2, ny * 0.8 + 9.9, 3) - 0.5);
      var ice = polar ? 1 : 0, low = 0;
      for (var fi = 0; fi < feats.length; fi++) {
        var f = feats[fi], wgt = 0, dd;
        if (f.pts) {
          dd = BIG;
          for (var s = 0; s < f.pts.length - 1; s++) dd = Math.min(dd, segDist(i, j, f.pts[s], f.pts[s + 1]));
          if (f.pts.length === 1) dd = segDist(i, j, f.pts[0], f.pts[0]);
          var rr0 = f.t === "mtn" ? f.rx * (0.7 + 0.6 * fbm(nx * 3 + 1, ny * 3 + 2, 2)) : f.rx;
          wgt = Math.exp(-(dd * dd) / (2 * rr0 * rr0));
        } else if (f.c) {
          var ex = (i - f.c[0]) / f.rx, ey = (j - f.c[1]) / f.ry;
          var dn = Math.sqrt(ex * ex + ey * ey) * (0.85 + 0.3 * fbm(nx * 2.5 + 9, ny * 2.5 + 4, 2));
          wgt = 1 - smooth(clamp(dn - 0.3, 0, 1));
        }
        if (wgt < 0.002) continue;
        if (f.t === "mtn") { e += f.h * 0.78 * wgt * (0.45 + 0.55 * ridged(nx * 5 + 2.2, ny * 5 + 8.1, 3)) * (0.3 + 0.7 * cf); m -= 0.12 * wgt; }
        else if (f.t === "plateau") { e += f.h * 0.55 * wgt * (0.8 + 0.2 * fbm(nx * 4, ny * 4, 2)); m -= 0.15 * wgt; }
        else if (f.t === "desert") m -= 0.75 * wgt;
        else if (f.t === "forest") m += 0.55 * wgt;
        else if (f.t === "valley") { m += 0.95 * wgt; low += wgt; }
        else if (f.t === "river") { m += 0.3 * wgt; low += 0.5 * wgt; }
        else if (f.t === "ice") ice += wgt;
        else if (f.t === "shelf") low += wgt;
        else if (f.t === "lake") low += wgt;
      }
      e = e * (1 - 0.6 * clamp(low, 0, 1));
      EL[idx] = clamp(e, -0.2, 1.6); MO[idx] = clamp(m, 0, 1); ICE[idx] = clamp(ice, 0, 1); LOW[idx] = clamp(low, 0, 1);
    }
    // 2b. micro-relief grid (ridges/gullies + dune streaks), world-space so tiles match the base map
    var G2 = 2, gw2 = Math.ceil(cw / G2) + 1, gh2 = Math.ceil(ch / G2) + 1;
    var MIC = new Float32Array(gw2 * gh2), DUN = new Float32Array(gw2 * gh2);
    var uu = V.unit;
    for (j = 0; j < gh2; j++) for (i = 0; i < gw2; i++) {
      var wx2 = ((i * G2) / k + WA.x) / uu, wy2 = ((j * G2) / k + WA.y) / uu;
      MIC[j * gw2 + i] = ridged(wx2 * 0.05 + 3.3, wy2 * 0.05 + 1.1, 3) * 0.7 + fbm(wx2 * 0.11 + 9.1, wy2 * 0.11 + 4.4, 2) * 0.3;
      DUN[j * gw2 + i] = vnoise(wx2 * 0.016 + 2.2, wy2 * 0.12 + 7.7) * 0.7 + vnoise(wx2 * 0.03 + 5.5, wy2 * 0.24 + 1.3) * 0.3;
    }
    var microAmp = opts.microAmp != null ? opts.microAmp : 1;
    // 3. full-res shading
    var out = mg.createImageData(cw, ch), d = out.data;
    var relief = (opts.relief != null ? opts.relief : 1) * 3.2;
    var Lx = -0.58, Ly = -0.62, Lz = 0.53;
    var shoreCells = Math.max(1, regScale / G * 0.012);
    var sandCells = Math.max(0.8, regScale / G * 0.01);
    var deepCells = Math.max(6, regScale / G * 0.22);
    var ox = WA.x * k, oy = WA.y * k;
    var landLut = polar ? POLAR_LUT : LAND_LUT, oceanLut = polar ? POLAR_OCEAN_LUT : OCEAN_LUT;
    for (y = 0; y < ch; y++) {
      var gy = Math.min(gh - 2, y / G), j0 = Math.floor(gy), fy = gy - j0;
      for (x = 0; x < cw; x++) {
        var gx = Math.min(gw - 2, x / G), i0 = Math.floor(gx), fx = gx - i0;
        var a00 = j0 * gw + i0, a10 = a00 + 1, a01 = a00 + gw, a11 = a01 + 1;
        var w00 = (1 - fx) * (1 - fy), w10 = fx * (1 - fy), w01 = (1 - fx) * fy, w11 = fx * fy;
        var p = (y * cw + x) * 4;
        var ma = mask[p] / 255;
        var wxn = (x / k + WA.x) * 0.063 / V.unit, wyn = (y / k + WA.y) * 0.063 / V.unit;
        var det = (vnoise(wxn + 0.5, wyn + 0.5) + 0.5 * vnoise(wxn * 2.1 + 7.3, wyn * 2.1 + 2.9) + 0.25 * vnoise(wxn * 4.3 + 1.7, wyn * 4.3 + 5.1)) / 1.75;
        var det2 = vnoise(wxn * 0.23 + 9.5, wyn * 0.23 + 3.5);
        var fine = vnoise(wxn * 7.1 + 3.3, wyn * 7.1 + 8.8);
        var crkN = vnoise(wxn * 1.4 + 11.1, wyn * 1.4 + 6.6) * 0.65 + vnoise(wxn * 2.9 + 4.2, wyn * 2.9 + 9.3) * 0.35;
        var gx2 = Math.min(gw2 - 2, x / G2), i2 = Math.floor(gx2), fx2 = gx2 - i2;
        var gy2 = Math.min(gh2 - 2, y / G2), j2 = Math.floor(gy2), fy2 = gy2 - j2;
        var b00 = j2 * gw2 + i2, b10 = b00 + 1, b01 = b00 + gw2, b11 = b01 + 1;
        var mic = MIC[b00] * (1 - fx2) * (1 - fy2) + MIC[b10] * fx2 * (1 - fy2) + MIC[b01] * (1 - fx2) * fy2 + MIC[b11] * fx2 * fy2;
        var mgx = (MIC[b10] - MIC[b00]) * (1 - fy2) + (MIC[b11] - MIC[b01]) * fy2, mgy = (MIC[b01] - MIC[b00]) * (1 - fx2) + (MIC[b11] - MIC[b10]) * fx2;
        var dgx = (DUN[b10] - DUN[b00]) * (1 - fy2) + (DUN[b11] - DUN[b01]) * fy2, dgy = (DUN[b01] - DUN[b00]) * (1 - fx2) + (DUN[b11] - DUN[b10]) * fx2;
        var R_, G_, B_;
        // ocean
        var dout = dOut[a00] * w00 + dOut[a10] * w10 + dOut[a01] * w01 + dOut[a11] * w11;
        var depth = 1 - Math.exp(-dout / deepCells);
        depth = clamp(depth + (det2 - 0.5) * 0.12 + (det - 0.5) * 0.03, 0, 1);
        var oi = Math.floor(depth * 255) * 3;
        var oR = oceanLut[oi], oG = oceanLut[oi + 1], oB = oceanLut[oi + 2];
        if (dout < shoreCells * 2.2 && ma < 0.5) { var sh = 1 - dout / (shoreCells * 2.2); sh *= sh; oR += 90 * sh; oG += 70 * sh; oB += 40 * sh; }
        // shallow shelf ripple + surf line hugging the coast
        if (dout < deepCells * 0.5 && ma < 0.5) { var rip = (fine - 0.5) * 14 * (1 - dout / (deepCells * 0.5)); oR += rip; oG += rip; oB += rip * 0.5; }
        if (dout < shoreCells * 0.75 && ma < 0.5) { var surf = (1 - dout / (shoreCells * 0.75)) * (0.55 + 0.45 * det); oR += 120 * surf; oG += 120 * surf; oB += 110 * surf; }
        if (ma <= 0.004) { d[p] = oR; d[p + 1] = oG; d[p + 2] = oB; d[p + 3] = 255; continue; }
        // land
        var e = EL[a00] * w00 + EL[a10] * w10 + EL[a01] * w01 + EL[a11] * w11;
        var m = MO[a00] * w00 + MO[a10] * w10 + MO[a01] * w01 + MO[a11] * w11;
        var ice = ICE[a00] * w00 + ICE[a10] * w10 + ICE[a01] * w01 + ICE[a11] * w11;
        var low = LOW[a00] * w00 + LOW[a10] * w10 + LOW[a01] * w01 + LOW[a11] * w11;
        var din = dIn[a00] * w00 + dIn[a10] * w10 + dIn[a01] * w01 + dIn[a11] * w11;
        var dzx = ((EL[a10] - EL[a00]) * (1 - fy) + (EL[a11] - EL[a01]) * fy) * relief;
        var dzy = ((EL[a01] - EL[a00]) * (1 - fx) + (EL[a11] - EL[a10]) * fx) * relief;
        var mm = clamp(m + (det - 0.5) * 0.1 + (det2 - 0.5) * 0.08, 0, 1);
        var ec = clamp(e, 0, 1);
        var cf2 = clamp(din / (coastFall * 0.6), 0, 1);
        var ridgeAmp = microAmp * (0.55 + 2.2 * ec * ec) * (0.35 + 0.65 * cf2) * (polar ? 0.5 : 1);
        var duneAmp = !polar && mm < 0.32 ? microAmp * (1 - mm / 0.32) * 0.9 * (1 - ec) : 0;
        dzx += mgx * ridgeAmp + dgx * duneAmp + (det - 0.5) * 0.18 * (0.3 + e);
        dzy += mgy * ridgeAmp + dgy * duneAmp + (det2 - 0.5) * 0.12 * (0.3 + e);
        var nl = 1 / Math.sqrt(dzx * dzx + dzy * dzy + 1);
        var shade = clamp((-dzx * Lx - dzy * Ly + Lz) * nl, 0, 1);
        var li;
        if (polar) {
          li = Math.floor(clamp(0.35 + e * 0.9 + (det2 - 0.5) * 0.2, 0, 1) * 255) * 3;
          R_ = landLut[li]; G_ = landLut[li + 1]; B_ = landLut[li + 2];
          if (low > 0.05) { R_ = lerp(R_, 205, low * 0.6); G_ = lerp(G_, 228, low * 0.6); B_ = lerp(B_, 242, low * 0.6); }
          var ps = (0.62 + 0.5 * shade) * (1 + (mic - 0.5) * 0.1);
          R_ *= ps; G_ *= ps; B_ *= ps + 0.03;
        } else {
          li = Math.floor(mm * 255) * 3;
          R_ = landLut[li]; G_ = landLut[li + 1]; B_ = landLut[li + 2];
          if (e > 0.42) { var q = smooth(clamp((e - 0.42) / 0.3, 0, 1)) * 0.85; R_ = lerp(R_, 128, q); G_ = lerp(G_, 100, q); B_ = lerp(B_, 72, q); }
          if (e > 0.68) { var q2 = smooth(clamp((e - 0.68) / 0.2, 0, 1)); R_ = lerp(R_, 150, q2); G_ = lerp(G_, 146, q2); B_ = lerp(B_, 138, q2); }
          if (e > 0.92) { var q3 = smooth(clamp((e - 0.92 + (det - 0.5) * 0.08) / 0.16, 0, 1)); R_ = lerp(R_, 246, q3); G_ = lerp(G_, 248, q3); B_ = lerp(B_, 250, q3); }
          if (ice > 0.02) { R_ = lerp(R_, 236, ice); G_ = lerp(G_, 243, ice); B_ = lerp(B_, 250, ice); }
          if (din < sandCells * 1.6) { var sb = (1 - din / (sandCells * 1.6)) * 0.55; R_ = lerp(R_, 236, sb); G_ = lerp(G_, 220, sb); B_ = lerp(B_, 160, sb); }
          // dry creek / gully network in arid lowlands (thin pale channels), salt pans, scrub speckle
          if (mm < 0.42 && e < 0.5) {
            var crk = 1 - Math.abs(crkN * 2 - 1);
            if (crk > 0.9) { var cw_ = (crk - 0.9) / 0.1 * (1 - mm / 0.42) * 0.45; R_ = lerp(R_, 225, cw_); G_ = lerp(G_, 208, cw_); B_ = lerp(B_, 170, cw_); }
            if (mm < 0.2 && e < 0.12 && det2 > 0.7 && det > 0.52) { var salt = clamp((det2 - 0.7) / 0.1, 0, 1) * clamp((0.12 - e) / 0.08, 0, 1); R_ = lerp(R_, 246, salt); G_ = lerp(G_, 242, salt); B_ = lerp(B_, 230, salt); }
          }
          if (mm > 0.12 && mm < 0.55 && fine > 0.82) { var sp_ = (fine - 0.82) / 0.18 * 0.28; R_ *= 1 - sp_; G_ *= 1 - sp_ * 0.8; B_ *= 1 - sp_; }
          if (mm > 0.55 && fine > 0.86) { var sp2 = (fine - 0.86) / 0.14 * 0.18; R_ *= 1 - sp2; G_ *= 1 - sp2 * 0.6; B_ *= 1 - sp2; }
          var ls = 0.5 + 0.78 * shade;
          var tex = 0.9 + 0.2 * det;
          var crest = 1 + (mic - 0.5) * (0.12 + 0.25 * ec);
          R_ *= ls * tex * crest; G_ *= ls * tex * crest; B_ *= ls * (0.95 + 0.1 * det) * crest;
          // saturate
          var lum = R_ * 0.3 + G_ * 0.59 + B_ * 0.11;
          R_ = lum + (R_ - lum) * 1.25; G_ = lum + (G_ - lum) * 1.25; B_ = lum + (B_ - lum) * 1.2;
        }
        d[p] = lerp(oR, R_, ma); d[p + 1] = lerp(oG, G_, ma); d[p + 2] = lerp(oB, B_, ma); d[p + 3] = 255;
      }
    }
    var cv = document.createElement("canvas");
    cv.width = cw; cv.height = ch;
    var g = cv.getContext("2d");
    g.putImageData(out, 0, 0);
    // 4. rivers & lakes on top
    g.setTransform(k, 0, 0, k, -WA.x * k, -WA.y * k);
    var rw = Math.max(1.4 / k, Math.min(box.w, box.h) * 0.0035);
    feats.forEach(function (f, fi) {
      var src = arr(R.features).concat(arr(opts.features))[fi];
      if (f.t === "river" && src.pts) {
        var pts = src.pts.map(toW);
        var dpath = smoothPath(pts, false);
        var p2 = new Path2D(dpath);
        g.lineCap = "round"; g.lineJoin = "round";
        g.strokeStyle = polar ? "rgba(120,200,255,0.5)" : "rgba(70,190,255,0.45)"; g.lineWidth = rw * 2.6; g.stroke(p2);
        g.strokeStyle = polar ? "#9FDBFF" : "#4FCBFF"; g.lineWidth = rw; g.stroke(p2);
      } else if (f.t === "lake" && src.c) {
        var c = toW(src.c), rr = Array.isArray(src.r) ? src.r : [src.r, src.r];
        var rx = rr[0] * pxLon, ry = rr[1] * pxLat;
        g.beginPath(); g.ellipse(c[0], c[1], Math.max(rw, rx), Math.max(rw, ry), 0, 0, Math.PI * 2);
        if (src.dry) { g.fillStyle = "#EEDDB4"; g.fill(); }
        else { g.fillStyle = "#1E6FB5"; g.fill(); g.strokeStyle = "rgba(90,210,255,0.8)"; g.lineWidth = rw * 0.6; g.stroke(); }
      }
    });
    g.setTransform(1, 0, 0, 1, 0, 0);
    // 5. drop shadow (low res, blurred)
    var sk = k / 4, sw = Math.max(4, Math.ceil(WA.w * sk)), shh = Math.max(4, Math.ceil(WA.h * sk));
    var sc = document.createElement("canvas");
    sc.width = sw; sc.height = shh;
    var sg = sc.getContext("2d");
    try { sg.filter = "blur(" + Math.max(2, Math.round(Math.min(sw, shh) * 0.012)) + "px)"; } catch (e2) {}
    sg.fillStyle = "rgba(0,0,0,0.7)";
    sg.setTransform(sk, 0, 0, sk, -WA.x * sk, -WA.y * sk);
    polysW.forEach(function (p) {
      sg.beginPath();
      p.forEach(function (q, i) { if (i) sg.lineTo(q[0], q[1]); else sg.moveTo(q[0], q[1]); });
      sg.closePath(); sg.fill();
    });
    function elevAt(wx, wy) {
      var gx = clamp(((wx - WA.x) * k) / G, 0, gw - 1.001), gy = clamp(((wy - WA.y) * k) / G, 0, gh - 1.001);
      var i0 = Math.floor(gx), j0 = Math.floor(gy), fx = gx - i0, fy = gy - j0, a = j0 * gw + i0;
      return EL[a] * (1 - fx) * (1 - fy) + EL[a + 1] * fx * (1 - fy) + EL[a + gw] * (1 - fx) * fy + EL[a + gw + 1] * fx * fy;
    }
    function landAt(wx, wy) {
      var cx = Math.round((wx - WA.x) * k), cy = Math.round((wy - WA.y) * k);
      if (cx < 0 || cy < 0 || cx >= cw || cy >= ch) return false;
      return mask[(cy * cw + cx) * 4] > 127;
    }
    return { canvas: cv, shadow: sc, WA: WA, k: k, polys: polysW, bounds: bounds, elev: elevAt, land: landAt, biome: biome };
  }
  S.renderTerrain = renderTerrain;

  var texCache = {};
  function cloudTex(seed) {
    var key = "cloud" + seed;
    if (texCache[key]) return texCache[key];
    var url = "";
    try {
      var w = 512, h = 512, c = document.createElement("canvas");
      c.width = w; c.height = h;
      var g = c.getContext("2d"), img = g.createImageData(w, h), dd = img.data;
      var off = seed * 37.3;
      for (var y = 0; y < h; y++) for (var x = 0; x < w; x++) {
        // tileable by blending 4 corners
        var fx = x / w, fy = y / h;
        function n(px_, py_) { return fbm(px_ * 6 + off, py_ * 6 + off * 0.3, 5, 0.55); }
        var v = n(fx, fy) * (1 - fx) * (1 - fy) + n(fx - 1, fy) * fx * (1 - fy) + n(fx, fy - 1) * (1 - fx) * fy + n(fx - 1, fy - 1) * fx * fy;
        var a = smooth(clamp((v - 0.5) / 0.22, 0, 1));
        var p = (y * w + x) * 4;
        dd[p] = 255; dd[p + 1] = 255; dd[p + 2] = 255; dd[p + 3] = Math.floor(a * 235);
      }
      g.putImageData(img, 0, 0);
      url = c.toDataURL("image/png");
    } catch (e) { url = ""; }
    texCache[key] = url;
    return url;
  }

  // ───────────────────────── the map world + camera ─────────────────────────
  var M = null; // current map world
  function cur() { if (!M) S.map(); return M; }

  function paintMapBg(bg) {
    var W = V.width, H = V.height;
    applyStyle(bg, { background: "radial-gradient(ellipse at 50% 40%, #0E3F7A 0%, #0A2A5C 45%, #061634 100%)" });
    try {
      var R = REGIONS.world, asp = regionAspect(R);
      var bw = W * 0.9, bh = bw / asp; if (bh > H * 0.9) { bh = H * 0.9; bw = bh * asp; }
      var box = { x: (W - bw) / 2, y: (H - bh) / 2, w: bw, h: bh };
      var T = renderTerrain(R, box, { x: 0, y: 0, w: W, h: H }, { k: 0.3, microAmp: 0.3 });
      var cv = T.canvas; cv.className = "mr-terrain";
      applyStyle(cv, { position: "absolute", left: "0", top: "0", width: px(W), height: px(H), opacity: "0.55" });
      bg.appendChild(cv);
    } catch (e) {}
  }

  /**
   * Create the map world. opts: region (id), fit (0..1 of frame the land fills, default .8), tilt (deg),
   * biome override, features (extra terrain hints), clouds (0..1), vignette, drift (0..2), anchorY (0..1
   * vertical centre of the land in the frame), resolution (k multiplier).
   */
  S.map = function (root, opts) {
    opts = opts || {};
    root = root || V.root();
    root.classList.add("pack-map-reveal", "kind-documentary");
    var W = V.width, H = V.height;
    var R = getRegion(opts.region);
    var asp = regionAspect(R);
    // land bounds in normalised region coords (to fit the land, not the bbox)
    var nb = polyBounds(arr(R.polys).concat(arr(R.isles)).map(function (p) { return p.map(function (q) { return toN(R, q); }); }));
    var fit = opts.fit != null ? opts.fit : V.isPortrait ? 0.86 : 0.8;
    var availW = W * fit, availH = H * (V.isPortrait ? 0.62 : fit);
    // region box size such that the land fits avail
    var landAsp = (nb.w * asp) / Math.max(1e-6, nb.h);
    var lw = availW, lh = lw / landAsp;
    if (lh > availH) { lh = availH; lw = lh * landAsp; }
    var bw = lw / Math.max(1e-6, nb.w), bh = lh / Math.max(1e-6, nb.h);
    var cy = H * (opts.anchorY != null ? opts.anchorY : V.isPortrait ? 0.42 : 0.5);
    var box = { x: W / 2 - (nb.x + nb.w / 2) * bw, y: cy - (nb.y + nb.h / 2) * bh, w: bw, h: bh };
    var bleed = 0.35;
    var WA = { x: -W * bleed, y: -H * bleed, w: W * (1 + 2 * bleed), h: H * (1 + 2 * bleed) };
    var area = WA.w * WA.h, k = Math.min(1, Math.sqrt(1.5e6 / area)) * (opts.resolution || 1);
    var tOpts = { k: k, biome: opts.biome, features: opts.features, relief: opts.relief, microAmp: 0.6 };
    var T = renderTerrain(R, box, WA, tOpts);

    var frame = el("div.mr-frame", { parent: root });
    var tilt = el("div.mr-tilt", { parent: frame });
    var tiltDeg = opts.tilt != null ? opts.tilt : 9;
    tilt.style.transform = "perspective(" + px(Math.max(W, H) * 1.6) + ") rotateX(" + f1(tiltDeg) + "deg)";
    var cam = el("div.mr-cam", { parent: tilt });
    var sdx = W * 0.012, sdy = W * 0.02;
    var shadow = T.shadow; shadow.className = "mr-shadow";
    applyStyle(shadow, { position: "absolute", left: px(WA.x + sdx), top: px(WA.y + sdy), width: px(WA.w), height: px(WA.h) });
    cam.appendChild(shadow);
    var terr = T.canvas; terr.className = "mr-terrain";
    applyStyle(terr, { position: "absolute", left: px(WA.x), top: px(WA.y), width: px(WA.w), height: px(WA.h) });
    cam.appendChild(terr);
    // rim glow along the coast (SVG outline of the land, blurred-ish via multiple strokes)
    var rim = sv("svg", { class: "mr-rim", width: f1(WA.w), height: f1(WA.h), viewBox: f1(WA.x) + " " + f1(WA.y) + " " + f1(WA.w) + " " + f1(WA.h), style: { left: px(WA.x), top: px(WA.y) } }, cam);
    var rimD = T.polys.map(function (p) { return polyPath(p); }).join(" ");
    sv("path", { d: rimD, fill: "none", stroke: "rgba(140,240,255,0.22)", "stroke-width": f1(Math.min(W, H) * 0.004), "stroke-linejoin": "round" }, rim);
    sv("path", { d: rimD, fill: "none", stroke: "rgba(255,255,255,0.45)", "stroke-width": f1(Math.min(W, H) * 0.0012), "stroke-linejoin": "round" }, rim);
    var under = sv("svg", { class: "mr-under", width: f1(W), height: f1(H), viewBox: "0 0 " + f1(W) + " " + f1(H) }, cam);
    var cloudAmt = opts.clouds != null ? opts.clouds : 0.8;
    var clouds = [];
    if (cloudAmt > 0) {
      for (var ci = 0; ci < 2; ci++) {
        var tex = cloudTex(ci + 1);
        var cd = el("div.mr-clouds", { parent: cam, style: { left: px(WA.x - WA.w * 0.5), top: px(WA.y - WA.h * 0.5), width: px(WA.w * 2), height: px(WA.h * 2), opacity: f2((ci ? 0.22 : 0.38) * cloudAmt), backgroundImage: tex ? "url(" + tex + ")" : "none", backgroundSize: px(Math.max(W, H) * (ci ? 0.55 : 0.9)) + " " + px(Math.max(W, H) * (ci ? 0.55 : 0.9)) } });
        clouds.push({ el: cd, vx: (ci ? 9 : 5) * V.unit, vy: (ci ? 1.5 : 2.5) * V.unit, phase: ci * 1.7 });
      }
    }
    var over = sv("svg", { class: "mr-over", width: f1(W), height: f1(H), viewBox: "0 0 " + f1(W) + " " + f1(H) }, cam);
    var defs = sv("defs", null, over);
    var gZones = sv("g", { class: "mr-g-zones" }, over), gRoutes = sv("g", { class: "mr-g-routes" }, over), gArrows = sv("g", { class: "mr-g-arrows" }, over), gMarks = sv("g", { class: "mr-g-marks" }, over), gLabels = sv("g", { class: "mr-g-labels" }, over);
    var hud = el("div.mr-hud", { parent: frame });
    var fx = el("div.mr-fx", { parent: frame });
    if (opts.vignette !== false) el("div.mr-vignette", { parent: fx });
    el("div.mr-glint", { parent: fx });
    var land = T.bounds;
    M = {
      root: root, frame: frame, tilt: tilt, cam: cam, rim: rim, under: under, over: over, defs: defs, hud: hud, fx: fx, W: W, H: H, R: R, box: box, T: T, land: land, WA: WA,
      g: { zones: gZones, routes: gRoutes, arrows: gArrows, marks: gMarks, labels: gLabels }, clouds: clouds,
      moves: [], shakes: [], items: [], dirty: true, tl: V.timeline(), drift: opts.drift != null ? opts.drift : 1, hudItems: [],
      tOpts: tOpts, tile: null, tileDone: false, detail: opts.detail || null,
    };
    M.cam0 = { x: W / 2, y: H / 2, z: 1 };
    if (opts.fill) M.cam0 = { x: land.x + land.w / 2, y: land.y + land.h / 2, z: fitZoom(land, opts.fill) };
    if (opts.camera) M.cam0 = { x: opts.camera.x != null ? opts.camera.x : M.cam0.x, y: opts.camera.y != null ? opts.camera.y : M.cam0.y, z: opts.camera.zoom || M.cam0.z };
    V.onFrame(frameUpdate);
    return M;
  };
  S.world = function () { return cur(); };

  /** Resolve a place to world px. p: anchor name | [lon,lat] | [nx,ny] | {x,y} | {lon,lat} | {at}. */
  function pt(p, R, box) {
    var m = cur();
    R = R || m.R; box = box || m.box;
    var n = null, src = p;
    if (p == null) n = [0.5, 0.5];
    else if (typeof p === "string" && /^\s*-?[\d.]+\s*,\s*-?[\d.]+\s*$/.test(p)) {
      var nums = p.split(",").map(parseFloat);
      return pt([nums[0], nums[1]], R, box);
    } else if (typeof p === "string") {
      var a = findAnchor(R, p);
      n = a ? toN(R, a) : [0.5, 0.5];
      if (!a) {
        // try other named regions
        var g2 = REGIONS.world, a2 = findAnchor(g2, p);
        if (a2 && R.id !== "world" && R.proj !== "xy") n = toN(R, a2);
      }
    } else if (Array.isArray(p)) {
      if (R.proj !== "xy" && (Math.abs(p[0]) > 1.5 || Math.abs(p[1]) > 1.5)) n = toN(R, p); else n = [p[0], p[1]];
    } else if (typeof p === "object") {
      if (p.lon != null && p.lat != null && R.proj !== "xy") n = toN(R, [p.lon, p.lat]);
      else if (p.x != null && p.y != null) n = (R.proj !== "xy" && (Math.abs(p.x) > 1.5 || Math.abs(p.y) > 1.5)) ? toN(R, [p.x, p.y]) : [+p.x, +p.y];
      else if (p.at != null || p.place != null || p.name != null) return pt(p.at != null ? p.at : p.place != null ? p.place : p.name, R, box);
      else n = [0.5, 0.5];
    }
    n = [clamp(+n[0] || 0, -0.5, 1.5), clamp(+n[1] || 0, -0.5, 1.5)];
    return { x: box.x + n[0] * box.w, y: box.y + n[1] * box.h, nx: n[0], ny: n[1], src: src };
  }
  S.pt = pt;
  /** Length in world px of a "radius" given as fraction of the region's smaller side (0..1) or px. */
  function rad(r, dflt) {
    var m = cur();
    var base = Math.min(m.box.w, m.box.h);
    if (r == null) return base * (dflt || 0.08);
    r = +r;
    if (r <= 1.5) return base * r;
    return r * V.unit;
  }
  S.rad = rad;

  // camera ------------------------------------------------------------
  function camEvalMove(mv, t) {
    var p = mv.dur <= 0.011 ? (t >= mv.at ? 1 : 0) : mv.ease(clamp((t - mv.at) / mv.dur, 0, 1));
    var tg = mv.track ? mv.track(t) : mv.to;
    var f = mv.from;
    var z = Math.exp(lerp(Math.log(f.z), Math.log(tg.z), p));
    return { x: lerp(f.x, tg.x, p), y: lerp(f.y, tg.y, p), z: z };
  }
  function camPrepare() {
    if (!M.dirty) return;
    var mv = M.moves;
    mv.sort(function (a, b) { return a.at - b.at || a.i - b.i; });
    for (var i = 0; i < mv.length; i++) mv[i].from = camUpTo(i, mv[i].at);
    M.dirty = false;
  }
  function camUpTo(i, t) {
    for (var j = i - 1; j >= 0; j--) if (t >= M.moves[j].at) return camEvalMove(M.moves[j], t);
    return M.cam0;
  }
  function camState(t) { camPrepare(); return camUpTo(M.moves.length, t); }
  function addMove(mv) {
    var m = cur();
    mv.i = m.moves.length;
    mv.at = cT(mv.at || 0);
    mv.dur = Math.max(0.01, mv.dur != null ? mv.dur : 1.6);
    mv.ease = E(mv.ease || "inOutCubic");
    m.moves.push(mv);
    m.dirty = true;
    return mv;
  }
  function fitZoom(r, fill) {
    var m = cur();
    return Math.min(m.W / Math.max(1, r.w), m.H / Math.max(1, r.h)) * (fill || 0.86);
  }
  function rectOf(target) {
    if (!target) return cur().land;
    if (target.rect) return target.rect;
    if (target.w != null && target.h != null) return target;
    var p = pt(target);
    var rr = rad(0.12);
    return { x: p.x - rr, y: p.y - rr, w: rr * 2, h: rr * 2 };
  }
  var sharedCamera = S.camera;
  var camApi = function (node, amount) { if (typeof sharedCamera === "function") return sharedCamera(node, amount); };
  /** Glide to world (x,y) at zoom. */
  camApi.to = function (x, y, zoom, at, dur, opts) {
    opts = opts || {};
    addMove({ to: { x: x, y: y, z: Math.max(0.05, zoom || 1) }, at: at, dur: dur, ease: opts.ease });
    return camApi;
  };
  /** Fly to a place (anchor / coords) at `zoom` (multiplier of the whole-map zoom; 1 = the whole region). */
  camApi.fly = function (place, zoom, at, dur, opts) {
    opts = opts || {};
    var m = cur(), p = pt(place);
    addMove({ to: { x: p.x, y: p.y, z: m.cam0.z * Math.max(0.2, zoom || 2) }, at: at, dur: dur != null ? dur : 2, ease: opts.ease || "inOutCubic" });
    return camApi;
  };
  /** Frame a rect / item / place. opts: fill (0..1), zoom (multiplier), ease. */
  camApi.focus = function (target, at, dur, opts) {
    opts = opts || {};
    var r = rectOf(target);
    var z = fitZoom(r, opts.fill || 0.7) * (opts.zoom || 1);
    addMove({ to: { x: r.x + r.w / 2, y: r.y + r.h / 2, z: z }, at: at, dur: dur, ease: opts.ease });
    return camApi;
  };
  /** Show the whole region (fill of the frame). */
  camApi.wide = function (at, dur, opts) {
    opts = opts || {};
    var m = cur();
    addMove({ to: { x: m.cam0.x, y: m.cam0.y, z: m.cam0.z * (opts.fill || 1) }, at: at, dur: dur, ease: opts.ease });
    return camApi;
  };
  /** Slow push-in: multiply the zoom by `mul` from `at` over `dur` (keeps the centre). */
  camApi.push = function (mul, at, dur, opts) {
    opts = opts || {};
    var m = cur();
    camPrepare();
    var s = camState(cT(at || 0));
    addMove({ to: { x: opts.x != null ? opts.x : s.x, y: opts.y != null ? opts.y : s.y, z: s.z * (mul || 1.15) }, at: at, dur: dur != null ? dur : Math.max(1, D() - (at || 0)), ease: opts.ease || "inOutSine" });
    return camApi;
  };
  /** Follow fn(t) → {x,y,zoom}. */
  camApi.track = function (fn, at, blend, opts) {
    opts = opts || {};
    addMove({ track: function (t) { var p = fn(t); return { x: p.x, y: p.y, z: p.zoom || p.z || cur().cam0.z }; }, at: at, dur: blend || 0.8, ease: opts.ease || "inOutSine" });
    return camApi;
  };
  camApi.shake = function (at, amp, dur) { cur().shakes.push({ at: cT(at), amp: amp != null ? amp : u(10), dur: dur || 0.5 }); return camApi; };
  camApi.drift = function (amount) { cur().drift = amount; return camApi; };
  camApi.state = function (t) { cur(); return camState(t); };
  S.camera = camApi;

  /** Bake a crisp high-res terrain tile around the camera's closest shot (once). */
  function bakeDetail(m) {
    m.tileDone = true;
    try {
      var best = null;
      if (m.detail) { var dp = pt(m.detail.place); best = { x: dp.x, y: dp.y, z: m.cam0.z * (m.detail.zoom || 2) }; }
      camPrepare();
      for (var i = 0; i < m.moves.length; i++) {
        var mv = m.moves[i];
        var tg = mv.track ? mv.track(mv.at + mv.dur) : mv.to;
        if (tg && (!best || tg.z > best.z)) best = { x: tg.x, y: tg.y, z: tg.z };
      }
      if (!best || best.z < 1.3) return;
      var W = m.W, H = m.H, z = best.z * 1.06;
      var vw = (W / z) * 1.35, vh = (H / z) * 1.35;
      var WA2 = { x: best.x - vw / 2, y: best.y - vh / 2, w: vw, h: vh };
      var k = Math.min(z, Math.sqrt(2.2e6 / (vw * vh)));
      if (k <= m.T.k * 1.4) return;
      var o = { k: k, biome: m.tOpts.biome, features: m.tOpts.features, relief: m.tOpts.relief };
      var T2 = renderTerrain(m.R, m.box, WA2, o);
      var cv = T2.canvas; cv.className = "mr-terrain mr-tile";
      applyStyle(cv, { position: "absolute", left: px(WA2.x), top: px(WA2.y), width: px(WA2.w), height: px(WA2.h), opacity: "0" });
      m.cam.insertBefore(cv, m.rim);
      m.tile = { el: cv, z0: Math.max(1.15, best.z * 0.55), z1: Math.max(1.3, best.z * 0.8) };
    } catch (e) { V.error("map tile: " + (e && e.message)); }
  }
  function frameUpdate(t) {
    var m = M; if (!m) return;
    if (!m.tileDone) bakeDetail(m);
    var s = camState(t);
    var W = m.W, H = m.H;
    var z = s.z, x = s.x, y = s.y;
    if (m.drift) {
      var p = V.progress(t, 0, D(), "inOutSine");
      z *= 1 + 0.05 * m.drift * p;
      x += Math.sin(t * 0.21) * u(6) * m.drift; y += Math.cos(t * 0.17) * u(4) * m.drift;
    }
    for (var i = 0; i < m.shakes.length; i++) {
      var sh = m.shakes[i], q = (t - sh.at) / sh.dur;
      if (q >= 0 && q < 1) { var dmp = (1 - q) * (1 - q); x += Math.sin(q * 41) * sh.amp * dmp / z; y += Math.cos(q * 33) * sh.amp * 0.7 * dmp / z; }
    }
    m.cam.style.transform = "translate(" + f2(W / 2 - x * z) + "px," + f2(H / 2 - y * z) + "px) scale(" + z.toFixed(5) + ")";
    m.z = z;
    if (m.tile) m.tile.el.style.opacity = clamp((z - m.tile.z0) / (m.tile.z1 - m.tile.z0), 0, 1).toFixed(3);
    for (var c = 0; c < m.clouds.length; c++) {
      var cl = m.clouds[c];
      cl.el.style.transform = "translate(" + f1((t * cl.vx + cl.phase * 40) % (W * 0.6)) + "px," + f1((t * cl.vy) % (H * 0.4)) + "px)";
    }
    var inv = 1 / z;
    for (var k = 0; k < m.items.length; k++) {
      var it = m.items[k];
      var vis = t >= it.at - 0.001 && (it.end == null || t < it.end + (it.outDur || 0.4));
      if (!vis) { if (it.shown !== false) { it.g.setAttribute("visibility", "hidden"); it.shown = false; } continue; }
      if (it.shown === false || it.shown == null) { it.g.setAttribute("visibility", "visible"); it.shown = true; }
      var pe = it.dur > 0 ? E(it.ease || "outBack")(clamp((t - it.at) / it.dur, 0, 1)) : 1;
      var po = 1;
      if (it.end != null && t >= it.end) po = 1 - clamp((t - it.end) / (it.outDur || 0.4), 0, 1);
      var cs = it.cs ? Math.pow(inv, it.cs) * (it.csBase || 1) : 1;
      if (it.csMax) cs = Math.min(cs, it.csMax);
      var sc = cs, dy = 0, op = Math.min(1, po);
      if (it.enter === "pop") { sc *= pe; op *= Math.min(1, pe * 2); }
      else if (it.enter === "drop") { dy = -(1 - pe) * u(140) * cs; op *= Math.min(1, pe * 3); }
      else if (it.enter === "fade") { op *= pe; }
      else if (it.enter === "rise") { dy = (1 - pe) * u(40) * cs; op *= Math.min(1, pe * 2); }
      it.g.setAttribute("transform", "translate(" + f2(it.x) + " " + f2(it.y + dy) + ") scale(" + sc.toFixed(4) + ")");
      it.g.setAttribute("opacity", op.toFixed(3));
      if (it.cs) {
        // hide labelled items whose text would leave the frame (keeps zoomed-in shots clean)
        if (it.tb === undefined) { it.tb = null; try { var tx = it.g.querySelectorAll("text"); if (tx.length) { var bb = null; for (var q = 0; q < tx.length; q++) { var b = tx[q].getBBox(); if (!bb) bb = { x: b.x, y: b.y, r: b.x + b.width, b: b.y + b.height }; else { bb.x = Math.min(bb.x, b.x); bb.y = Math.min(bb.y, b.y); bb.r = Math.max(bb.r, b.x + b.width); bb.b = Math.max(bb.b, b.y + b.height); } } it.tb = bb; } } catch (e) { it.tb = null; } }
        if (it.tb) {
          var sxl = W / 2 + (it.x - x) * z + it.tb.x * sc * z, sxr = W / 2 + (it.x - x) * z + it.tb.r * sc * z;
          var syt = H / 2 + (it.y + dy - y) * z + it.tb.y * sc * z, syb = H / 2 + (it.y + dy - y) * z + it.tb.b * sc * z;
          if (sxl < W * 0.015 || sxr > W * 0.985 || syt < H * 0.015 || syb > H * 0.985) { it.g.setAttribute("visibility", "hidden"); it.shown = false; continue; }
        }
      }
      if (it.update) it.update(t, pe, cs);
    }
    for (var h = 0; h < m.hudItems.length; h++) m.hudItems[h](t);
  }
  /** Register a world overlay item (counter-scaled group). */
  function addItem(parent, o) {
    var m = cur();
    var g = sv("g", { class: "mr-item" + (o.cls ? " " + o.cls : ""), visibility: "hidden" }, parent);
    var it = { g: g, x: o.x, y: o.y, at: cT(o.at != null ? o.at : 0), dur: o.dur != null ? o.dur : 0.5, ease: o.ease, enter: o.enter || "pop", end: o.end != null ? cT(o.end) : null, outDur: o.outDur, cs: o.cs != null ? o.cs : 0.55, csBase: o.csBase, csMax: o.csMax, update: o.update };
    m.items.push(it);
    return it;
  }
  S.addItem = addItem;

  // ───────────────────────── overlay colours ─────────────────────────
  var COLORS = { red: C.red, yellow: C.yellow, cyan: C.cyan, green: C.green, orange: C.orange, white: C.white, blue: "#2B6BFF", purple: "#B14BFF", pink: "#FF4FA3" };
  function col(c, d) { if (!c) return d || C.red; return COLORS[str(c).toLowerCase()] || (/^#|^rgb/.test(c) ? c : d || C.red); }
  S.col = col;
  function glowFilter(color, blur) {
    var m = cur();
    var id = nid("gl");
    var f = sv("filter", { id: id, x: "-60%", y: "-60%", width: "220%", height: "220%" }, m.defs);
    sv("feGaussianBlur", { stdDeviation: f1(blur), result: "b" }, f);
    var fm = sv("feMerge", null, f);
    sv("feMergeNode", { in: "b" }, fm); sv("feMergeNode", { in: "b" }, fm); sv("feMergeNode", { in: "SourceGraphic" }, fm);
    return "url(#" + id + ")";
  }
  function radial(color, a0, a1) {
    var m = cur(), id = nid("rg");
    var g = sv("radialGradient", { id: id }, m.defs);
    sv("stop", { offset: "0%", "stop-color": color, "stop-opacity": a0 != null ? a0 : 0.7 }, g);
    sv("stop", { offset: "60%", "stop-color": color, "stop-opacity": (a0 != null ? a0 : 0.7) * 0.45 }, g);
    sv("stop", { offset: "100%", "stop-color": color, "stop-opacity": a1 != null ? a1 : 0 }, g);
    return "url(#" + id + ")";
  }
  /** Outlined caps text (SVG) — thick black stroke under white/yellow fill. */
  function svgText(parent, text, o) {
    o = o || {};
    var size = o.size || u(34);
    var t = sv("text", { x: o.x || 0, y: o.y || 0, "font-family": o.font || HEAD, "font-size": f1(size), "font-weight": o.weight || 900, fill: o.color || C.white, stroke: o.stroke || C.black, "stroke-width": f1(size * (o.strokeW != null ? o.strokeW : 0.16)), "stroke-linejoin": "round", "paint-order": "stroke", "text-anchor": o.anchor || "middle", "dominant-baseline": o.baseline || "middle", "letter-spacing": o.tracking != null ? o.tracking : f1(size * 0.02), text: o.upper === false ? plain(text) : plain(text).toUpperCase(), style: { textTransform: o.upper === false ? "none" : "uppercase" } }, parent);
    return t;
  }
  function textW(text, size, font, weight) { return measure(plain(text).toUpperCase(), font || HEAD, size, weight || 900) * 1.04 + size * 0.06; }
  /** Pick a size so text fits maxW. */
  function fitSize(text, size, maxW, min) {
    var w = textW(text, size);
    if (w <= maxW) return size;
    return Math.max(min || size * 0.4, size * (maxW / w));
  }

  // ───────────────────────── overlays (world coordinates) ─────────────────────────
  function edgePoint(side, target) {
    var m = cur(), W = m.W, H = m.H, p = pt(target);
    var L = m.land;
    if (side === "auto" || side == null) {
      // come from the farther horizontal side so the arrow sweeps across the map
      side = p.x > W / 2 ? "left" : "right";
      if (V.isPortrait) side = p.y > H / 2 ? "top" : "bottom";
    }
    var off = Math.min(W, H) * 0.08;
    if (side === "left") return { x: Math.max(-W * 0.2, L.x - off * 2), y: clamp(p.y + (p.y > H / 2 ? -1 : 1) * H * 0.12, H * 0.1, H * 0.9) };
    if (side === "right") return { x: Math.min(W * 1.2, L.x + L.w + off * 2), y: clamp(p.y + (p.y > H / 2 ? -1 : 1) * H * 0.12, H * 0.1, H * 0.9) };
    if (side === "top") return { x: clamp(p.x + (p.x > W / 2 ? -1 : 1) * W * 0.12, W * 0.1, W * 0.9), y: Math.max(-H * 0.2, L.y - off * 2) };
    return { x: clamp(p.x + (p.x > W / 2 ? -1 : 1) * W * 0.12, W * 0.1, W * 0.9), y: Math.min(H * 1.2, L.y + L.h + off * 2) };
  }
  /**
   * Bold curved arrow sweeping from `from` (place | side: left|right|top|bottom|auto) to `to` (place).
   * opts: at, dur, color, width (px), bend (-1..1), end, outline.
   */
  S.arrow = function (from, to, opts) {
    opts = opts || {};
    var m = cur();
    var b = pt(to);
    var a = typeof from === "string" && /^(left|right|top|bottom|auto)$/.test(from) ? edgePoint(from, to) : pt(from);
    var dx = b.x - a.x, dy = b.y - a.y, dist = Math.sqrt(dx * dx + dy * dy) || 1;
    var bend = opts.bend != null ? +opts.bend : (a.x < b.x ? -0.32 : 0.32) * (a.y < b.y ? 1 : -1) * (Math.abs(dx) > Math.abs(dy) ? 1 : -1);
    var mx = (a.x + b.x) / 2 - (dy / dist) * dist * bend, my = (a.y + b.y) / 2 + (dx / dist) * dist * bend;
    var w = opts.width != null ? +opts.width * V.unit : clamp(dist * 0.055, u(14), u(44));
    // shorten so the head tip lands on the target
    var headL = w * 2.1;
    var d = "M" + f1(a.x) + " " + f1(a.y) + " Q" + f1(mx) + " " + f1(my) + " " + f1(b.x) + " " + f1(b.y);
    var color = col(opts.color);
    var it = addItem(m.g.arrows, { x: 0, y: 0, at: opts.at, dur: 0, enter: "fade", end: opts.end, cs: 0, cls: "mr-arrow" });
    var g = it.g;
    var hd = "M0 0 L" + f1(-headL) + " " + f1(-w * 1.35) + " L" + f1(-headL * 0.62) + " 0 L" + f1(-headL) + " " + f1(w * 1.35) + " Z";
    var noOut = opts.outline === false;
    var shadow = sv("path", { d: d, fill: "none", stroke: "rgba(0,0,0,0.45)", "stroke-width": f1(w * 1.9), "stroke-linecap": "butt", transform: "translate(" + f1(w * 0.25) + " " + f1(w * 0.45) + ")" }, g);
    var hgS = sv("g", null, g);
    sv("path", { d: hd, fill: "rgba(0,0,0,0.45)", stroke: "rgba(0,0,0,0.45)", "stroke-width": f1(w * 0.75), "stroke-linejoin": "round", transform: "translate(" + f1(w * 0.25) + " " + f1(w * 0.45) + ")" }, hgS);
    var outline = sv("path", { d: d, fill: "none", stroke: noOut ? "none" : C.white, "stroke-width": f1(w * 1.75), "stroke-linecap": "butt" }, g);
    var hgO = sv("g", null, g);
    sv("path", { d: hd, fill: noOut ? "none" : C.white, stroke: noOut ? "none" : C.white, "stroke-width": f1(w * 0.75), "stroke-linejoin": "round" }, hgO);
    var main = sv("path", { d: d, fill: "none", stroke: color, "stroke-width": f1(w), "stroke-linecap": "butt" }, g);
    var hg = sv("g", null, g);
    sv("path", { d: hd, fill: color, stroke: color, "stroke-width": f1(w * 0.05) }, hg);
    var L = 1;
    try { L = main.getTotalLength() || 1; } catch (e) { L = dist * 1.2; }
    [shadow, outline, main].forEach(function (p) { p.setAttribute("stroke-dasharray", f1(L) + " " + f1(L + 10)); });
    var dur = opts.dur != null ? opts.dur : clamp(dist / u(900), 0.5, 1.1);
    var t0 = it.at;
    function tangent(p) {
      // quadratic bezier tangent at p
      var tx = 2 * (1 - p) * (mx - a.x) + 2 * p * (b.x - mx), ty = 2 * (1 - p) * (my - a.y) + 2 * p * (b.y - my);
      return Math.atan2(ty, tx) * 180 / Math.PI;
    }
    function bez(p) { var q = 1 - p; return { x: q * q * a.x + 2 * q * p * mx + p * p * b.x, y: q * q * a.y + 2 * q * p * my + p * p * b.y }; }
    var pts = [];
    for (var si = 0; si <= 64; si++) pts.push(bez(si / 64));
    var cumL = [0];
    for (si = 1; si < pts.length; si++) { var ddx = pts[si].x - pts[si - 1].x, ddy = pts[si].y - pts[si - 1].y; cumL.push(cumL[si - 1] + Math.sqrt(ddx * ddx + ddy * ddy)); }
    L = cumL[64] || L;
    [shadow, outline, main].forEach(function (p) { p.setAttribute("stroke-dasharray", f1(L) + " " + f1(L + 10)); });
    function atLen(len) {
      len = clamp(len, 0, L);
      var lo = 0, hi = 64;
      while (hi - lo > 1) { var mid = (lo + hi) >> 1; if (cumL[mid] <= len) lo = mid; else hi = mid; }
      var seg = cumL[hi] - cumL[lo] || 1, q = (len - cumL[lo]) / seg;
      return { x: pts[lo].x + (pts[hi].x - pts[lo].x) * q, y: pts[lo].y + (pts[hi].y - pts[lo].y) * q };
    }
    it.update = function (t) {
      var p = V.progress(t, t0, t0 + dur, "inOutCubic");
      var tipLen = L * p;
      // shaft stops inside the head so the join is hidden under it
      var cut = Math.max(0, tipLen - headL * 0.72);
      var off = L - cut;
      shadow.style.strokeDashoffset = outline.style.strokeDashoffset = main.style.strokeDashoffset = off + "px";
      var hp = p > 0.001 ? V.ease.outBack(clamp((p - 0.5) / 0.5, 0, 1)) : 0;
      var tip = atLen(tipLen), base = atLen(Math.max(0, tipLen - headL));
      var ang = Math.atan2(tip.y - base.y, tip.x - base.x) * 180 / Math.PI;
      if (tipLen < headL * 0.3) ang = tangent(Math.max(0.02, p));
      var tr = "translate(" + f1(tip.x) + " " + f1(tip.y) + ") rotate(" + f1(ang) + ") scale(" + hp.toFixed(3) + ")";
      hg.setAttribute("transform", tr); hgO.setAttribute("transform", tr); hgS.setAttribute("transform", tr);
    };
    it.tip = b; it.start = a; it.end_ = t0 + dur;
    return it;
  };

  /** Pulsing red target rings on a place. opts: at, r (fraction of region or px), color, rings, end, cs. */
  S.ring = function (place, opts) {
    opts = opts || {};
    var m = cur(), p = pt(place);
    var r = rad(opts.r, 0.05);
    var color = col(opts.color);
    var it = addItem(m.g.marks, { x: p.x, y: p.y, at: opts.at, dur: 0.55, enter: "pop", end: opts.end, cs: opts.cs != null ? opts.cs : 0.5, cls: "mr-ring" });
    var g = it.g;
    sv("circle", { r: f1(r * 1.02), fill: "none", stroke: "rgba(0,0,0,0.45)", "stroke-width": f1(r * 0.2), transform: "translate(" + f1(r * 0.06) + " " + f1(r * 0.1) + ")" }, g);
    var rip = [];
    for (var i = 0; i < (opts.rings || 3); i++) rip.push(sv("circle", { r: f1(r), fill: "none", stroke: color, "stroke-width": f1(r * 0.07) }, g));
    var ring = sv("circle", { r: f1(r), fill: radial(color, 0.35, 0), stroke: color, "stroke-width": f1(r * 0.16) }, g);
    sv("circle", { r: f1(r), fill: "none", stroke: C.white, "stroke-width": f1(r * 0.04) }, g);
    sv("circle", { r: f1(r * 0.42), fill: "none", stroke: color, "stroke-width": f1(r * 0.08) }, g);
    sv("circle", { r: f1(r * 0.12), fill: color, stroke: C.white, "stroke-width": f1(r * 0.03) }, g);
    var cross = sv("g", { stroke: C.white, "stroke-width": f1(r * 0.05), "stroke-linecap": "round" }, g);
    [[-1.25, 0, -0.55, 0], [0.55, 0, 1.25, 0], [0, -1.25, 0, -0.55], [0, 0.55, 0, 1.25]].forEach(function (l) { sv("line", { x1: f1(l[0] * r), y1: f1(l[1] * r), x2: f1(l[2] * r), y2: f1(l[3] * r) }, cross); });
    var n = rip.length;
    it.update = function (t) {
      var tt = Math.max(0, t - it.at);
      for (var i = 0; i < n; i++) {
        var ph = ((tt * 0.55 + i / n) % 1);
        rip[i].setAttribute("r", f1(r * (1 + ph * 1.6)));
        rip[i].setAttribute("opacity", ((1 - ph) * 0.8).toFixed(3));
      }
      ring.setAttribute("stroke-width", f1(r * (0.14 + 0.05 * Math.sin(tt * 6))));
      cross.setAttribute("transform", "rotate(" + f1(tt * 25) + ")");
    };
    it.p = p; it.r = r;
    return it;
  };

  /** Glowing highlight zone. place: a point (ellipse) or opts.pts (polygon of places). opts: at, r, rx, ry, color, lava, pulse, end, label. */
  S.zone = function (place, opts) {
    opts = opts || {};
    var m = cur();
    var color = col(opts.color, opts.lava ? C.orange : C.red);
    var pts = null, cx, cy;
    if (opts.pts && opts.pts.length > 2) {
      pts = opts.pts.map(function (q) { var w = pt(q); return [w.x, w.y]; });
      var bb = polyBounds([pts]); cx = bb.x + bb.w / 2; cy = bb.y + bb.h / 2;
    } else { var p = pt(place); cx = p.x; cy = p.y; }
    var it = addItem(m.g.zones, { x: cx, y: cy, at: opts.at, dur: 0.7, enter: "pop", ease: "outCubic", end: opts.end, cs: 0, cls: "mr-zone" });
    var g = it.g;
    var blur = u(opts.lava ? 22 : 16);
    var gl = sv("g", { filter: glowFilter(color, blur) }, g);
    var shape;
    if (pts) {
      var local = pts.map(function (q) { return [q[0] - cx, q[1] - cy]; });
      var d = smoothPath(local, true);
      shape = sv("path", { d: d, fill: color, "fill-opacity": 0.32, stroke: color, "stroke-width": f1(u(5)), "stroke-linejoin": "round" }, gl);
      sv("path", { d: d, fill: "none", stroke: C.white, "stroke-opacity": 0.6, "stroke-width": f1(u(1.6)) }, g);
      it.rect = polyBounds([pts]);
    } else {
      var rx = opts.rx != null ? rad(opts.rx) : rad(opts.r, 0.1), ry = opts.ry != null ? rad(opts.ry) : rx;
      shape = sv("ellipse", { rx: f1(rx), ry: f1(ry), fill: radial(color, opts.lava ? 0.95 : 0.7, 0.05), stroke: color, "stroke-width": f1(u(4)) }, gl);
      if (opts.lava) sv("ellipse", { rx: f1(rx * 0.5), ry: f1(ry * 0.5), fill: radial(C.yellow, 0.9, 0) }, gl);
      sv("ellipse", { rx: f1(rx), ry: f1(ry), fill: "none", stroke: C.white, "stroke-opacity": 0.55, "stroke-width": f1(u(1.5)), "stroke-dasharray": f1(u(10)) + " " + f1(u(7)) }, g);
      it.rect = { x: cx - rx, y: cy - ry, w: rx * 2, h: ry * 2 };
    }
    var pulse = opts.pulse !== false;
    it.update = function (t) {
      if (!pulse) return;
      var tt = t - it.at;
      var o = 0.78 + 0.22 * Math.sin(tt * (opts.lava ? 7 : 3.4));
      gl.setAttribute("opacity", o.toFixed(3));
    };
    it.color = color;
    return it;
  };

  /** Location pin. opts: at, color, size, label, end. */
  S.pin = function (place, opts) {
    opts = opts || {};
    var m = cur(), p = pt(place);
    var s = opts.size != null ? +opts.size * V.unit : u(54);
    var color = col(opts.color);
    var it = addItem(m.g.marks, { x: p.x, y: p.y, at: opts.at, dur: 0.6, enter: "drop", ease: "outBounce", end: opts.end, cs: 0.6, cls: "mr-pin" });
    var g = it.g;
    sv("ellipse", { cx: f1(s * 0.08), cy: f1(s * 0.06), rx: f1(s * 0.3), ry: f1(s * 0.12), fill: "rgba(0,0,0,0.45)" }, g);
    var d = "M0 0 C" + f1(-s * 0.22) + " " + f1(-s * 0.38) + " " + f1(-s * 0.5) + " " + f1(-s * 0.62) + " " + f1(-s * 0.5) + " " + f1(-s * 0.95) + " A" + f1(s * 0.5) + " " + f1(s * 0.5) + " 0 1 1 " + f1(s * 0.5) + " " + f1(-s * 0.95) + " C" + f1(s * 0.5) + " " + f1(-s * 0.62) + " " + f1(s * 0.22) + " " + f1(-s * 0.38) + " 0 0 Z";
    sv("path", { d: d, fill: color, stroke: C.white, "stroke-width": f1(s * 0.08), "stroke-linejoin": "round", "paint-order": "stroke" }, g);
    sv("circle", { cy: f1(-s * 0.95), r: f1(s * 0.2), fill: C.white }, g);
    it.p = p;
    if (opts.label) S.label(place, opts.label, { at: it.at + 0.35, pos: opts.labelPos || "right", dy: -s * 0.95, end: opts.end, color: opts.labelColor, size: opts.labelSize, box: opts.box });
    return it;
  };

  /**
   * Thick outlined caps label on the map. opts: at, size, color, pos (above|below|left|right|center),
   * dx, dy, box (dark box behind), bar (coloured left bar), end, maxWidth, sub.
   */
  S.label = function (place, text, opts) {
    opts = opts || {};
    var m = cur(), p = pt(place);
    var size = opts.size != null ? +opts.size * V.unit : u(34);
    var maxW = opts.maxWidth != null ? +opts.maxWidth * V.unit : m.W * 0.42;
    size = fitSize(text, size, maxW, u(16));
    var tw = textW(text, size);
    var pad = size * 0.32;
    var pos = opts.pos || "above";
    var gap = size * 0.9;
    var ox = opts.dx != null ? +opts.dx * V.unit : 0, oy = opts.dy != null ? +opts.dy * V.unit : 0;
    var ax = 0, ay = 0;
    if (pos === "above") ay = -gap; else if (pos === "below") ay = gap; else if (pos === "left") ax = -gap; else if (pos === "right") ax = gap;
    var anchor = pos === "left" ? "end" : pos === "right" ? "start" : "middle";
    var it = addItem(m.g.labels, { x: p.x + ox, y: p.y + oy, at: opts.at, dur: 0.45, enter: opts.enter || "pop", end: opts.end, cs: opts.cs != null ? opts.cs : 0.6, cls: "mr-label" });
    var g = it.g;
    var bx = anchor === "end" ? ax - tw - pad : anchor === "start" ? ax - pad * 0.6 : ax - tw / 2 - pad;
    var hasSub = !!opts.sub;
    var subSize = size * 0.5;
    var bh = size * 1.3 + (hasSub ? subSize * 1.2 : 0);
    if (opts.box) {
      sv("rect", { x: f1(bx + size * 0.08), y: f1(ay - size * 0.65 + size * 0.12), width: f1(tw + pad * 2 - pad * 0.4), height: f1(bh), rx: f1(size * 0.12), fill: "rgba(0,0,0,0.5)" }, g);
      sv("rect", { x: f1(bx), y: f1(ay - size * 0.65), width: f1(tw + pad * 2 - pad * 0.4), height: f1(bh), rx: f1(size * 0.12), fill: "rgba(8,10,16,0.82)", stroke: col(opts.color, C.white), "stroke-width": f1(size * 0.05) }, g);
      if (opts.bar !== false) sv("rect", { x: f1(bx), y: f1(ay - size * 0.65), width: f1(size * 0.18), height: f1(bh), rx: f1(size * 0.05), fill: col(opts.bar || opts.color || "red") }, g);
    }
    var tx = anchor === "end" ? ax - pad * 0.2 : anchor === "start" ? ax + pad * 0.5 : ax;
    svgText(g, text, { x: tx, y: ay, size: size, color: col(opts.color, C.white), anchor: anchor, strokeW: opts.box ? 0.1 : 0.17 });
    if (hasSub) svgText(g, opts.sub, { x: tx, y: ay + size * 0.95, size: subSize, color: C.muted, anchor: anchor, strokeW: 0.14, font: BODY, weight: 800 });
    it.p = p; it.w = tw;
    return it;
  };

  /** Numbered marker (red disc with a number) + optional label. opts: at, color, size, label, pos, end. */
  S.marker = function (place, n, opts) {
    opts = opts || {};
    var m = cur(), p = pt(place);
    var s = opts.size != null ? +opts.size * V.unit : u(30);
    var color = col(opts.color);
    var it = addItem(m.g.marks, { x: p.x, y: p.y, at: opts.at, dur: 0.5, enter: "pop", ease: "outBack", end: opts.end, cs: 0.6, cls: "mr-marker" });
    var g = it.g;
    sv("circle", { cx: f1(s * 0.1), cy: f1(s * 0.14), r: f1(s), fill: "rgba(0,0,0,0.45)" }, g);
    var halo = sv("circle", { r: f1(s * 1.35), fill: "none", stroke: color, "stroke-width": f1(s * 0.1), opacity: 0.6 }, g);
    sv("circle", { r: f1(s), fill: color, stroke: C.white, "stroke-width": f1(s * 0.13) }, g);
    svgText(g, str(n), { size: s * 1.25, color: C.white, strokeW: 0.1, y: s * 0.04 });
    it.update = function (t) { var tt = t - it.at; halo.setAttribute("r", f1(s * (1.3 + 0.18 * Math.sin(tt * 4)))); };
    if (opts.label) S.label(place, opts.label, { at: it.at + 0.2, pos: opts.pos || (p.x > m.W / 2 ? "left" : "right"), dx: 0, box: opts.box !== false, bar: color, size: opts.labelSize, end: opts.end, sub: opts.sub });
    it.p = p;
    return it;
  };

  /**
   * Route through places. opts: at, dur, style (dotted|dashed|solid), color, width, head (dot|plane|ship|car|none),
   * stops (true → dots at each place), end. Returns item with .head(t) → {x,y} and .times (arrival at each stop).
   */
  S.route = function (places, opts) {
    opts = opts || {};
    var m = cur();
    var P = arr(places).map(function (q) { var w = pt(q); return [w.x, w.y]; });
    if (P.length < 2) P.push([P[0][0] + u(100), P[0][1]]);
    var d = smoothPath(P, false);
    var color = col(opts.color, C.yellow);
    var w = opts.width != null ? +opts.width * V.unit : u(10);
    var it = addItem(m.g.routes, { x: 0, y: 0, at: opts.at, dur: 0, enter: "fade", end: opts.end, cs: 0, cls: "mr-route" });
    var g = it.g;
    var maskId = nid("rm");
    var mask = sv("mask", { id: maskId, maskUnits: "userSpaceOnUse", x: "-100%", y: "-100%", width: "300%", height: "300%" }, m.defs);
    var mp = sv("path", { d: d, fill: "none", stroke: "#fff", "stroke-width": f1(w * 4), "stroke-linecap": "round" }, mask);
    var L = 1;
    try { L = mp.getTotalLength() || 1; } catch (e) { L = 1000; }
    mp.setAttribute("stroke-dasharray", f1(L) + " " + f1(L + 10));
    var mg = sv("g", { mask: "url(#" + maskId + ")" }, g);
    var dash = opts.style === "solid" ? null : opts.style === "dashed" ? f1(w * 2.4) + " " + f1(w * 1.4) : "0 " + f1(w * 2);
    sv("path", { d: d, fill: "none", stroke: "rgba(0,0,0,0.5)", "stroke-width": f1(w * 1.6), "stroke-linecap": "round", "stroke-dasharray": dash, transform: "translate(" + f1(w * 0.3) + " " + f1(w * 0.4) + ")" }, mg);
    sv("path", { d: d, fill: "none", stroke: C.white, "stroke-width": f1(w * 1.5), "stroke-linecap": "round", "stroke-dasharray": dash }, mg);
    sv("path", { d: d, fill: "none", stroke: color, "stroke-width": f1(w), "stroke-linecap": "round", "stroke-dasharray": dash }, mg);
    var dur = opts.dur != null ? opts.dur : clamp(L / u(500), 1.2, 4);
    var t0 = it.at;
    // stop dots
    var stops = [];
    if (opts.stops !== false) P.forEach(function (q) {
      var sg = sv("g", { transform: "translate(" + f1(q[0]) + " " + f1(q[1]) + ")" }, g);
      sv("circle", { r: f1(w * 1.1), fill: C.white, stroke: C.black, "stroke-width": f1(w * 0.25) }, sg);
      sv("circle", { r: f1(w * 0.5), fill: color }, sg);
      stops.push(sg);
    });
    // arrival times (by arc length fraction)
    var cum = [0], tot = 0;
    for (var i = 1; i < P.length; i++) { var dx = P[i][0] - P[i - 1][0], dy = P[i][1] - P[i - 1][1]; tot += Math.sqrt(dx * dx + dy * dy); cum.push(tot); }
    var times = cum.map(function (c) { return t0 + (tot ? c / tot : 0) * dur; });
    var headKind = opts.head || "dot";
    var hg = sv("g", null, g);
    if (headKind !== "none") {
      sv("circle", { r: f1(w * 2.2), fill: radial(color, 0.6, 0) }, hg);
      if (headKind === "plane") sv("path", { d: "M" + f1(w * 2.2) + " 0 L" + f1(-w * 0.4) + " " + f1(-w * 0.5) + " L" + f1(-w * 0.8) + " " + f1(-w * 2.2) + " L" + f1(-w * 1.6) + " " + f1(-w * 2.2) + " L" + f1(-w * 1.5) + " " + f1(-w * 0.5) + " L" + f1(-w * 2.4) + " " + f1(-w * 0.3) + " L" + f1(-w * 2.9) + " " + f1(-w * 1) + " L" + f1(-w * 3.3) + " " + f1(-w * 1) + " L" + f1(-w * 3.1) + " 0 L" + f1(-w * 3.3) + " " + f1(w * 1) + " L" + f1(-w * 2.9) + " " + f1(w * 1) + " L" + f1(-w * 2.4) + " " + f1(w * 0.3) + " L" + f1(-w * 1.5) + " " + f1(w * 0.5) + " L" + f1(-w * 1.6) + " " + f1(w * 2.2) + " L" + f1(-w * 0.8) + " " + f1(w * 2.2) + " L" + f1(-w * 0.4) + " " + f1(w * 0.5) + " Z", fill: C.white, stroke: C.black, "stroke-width": f1(w * 0.3), "stroke-linejoin": "round", "paint-order": "stroke" }, hg);
      else if (headKind === "ship") sv("path", { d: "M" + f1(w * 2.4) + " 0 L" + f1(w * 1) + " " + f1(w * 1.2) + " L" + f1(-w * 2.2) + " " + f1(w * 1.2) + " L" + f1(-w * 2.4) + " 0 L" + f1(-w * 2.2) + " " + f1(-w * 1.2) + " L" + f1(-w * 0.2) + " " + f1(-w * 1.2) + " L" + f1(-w * 0.2) + " " + f1(-w * 2.2) + " L" + f1(w * 1) + " " + f1(-w * 2.2) + " L" + f1(w * 1) + " " + f1(-w * 1.2) + " Z", fill: C.white, stroke: C.black, "stroke-width": f1(w * 0.3), "stroke-linejoin": "round", "paint-order": "stroke" }, hg);
      else if (headKind === "car") sv("path", { d: "M" + f1(-w * 2.2) + " " + f1(w * 0.9) + " L" + f1(-w * 2.2) + " " + f1(-w * 0.3) + " L" + f1(-w * 1.2) + " " + f1(-w * 0.4) + " L" + f1(-w * 0.5) + " " + f1(-w * 1.4) + " L" + f1(w * 1.1) + " " + f1(-w * 1.4) + " L" + f1(w * 2) + " " + f1(-w * 0.4) + " L" + f1(w * 2.3) + " " + f1(w * 0.9) + " Z", fill: C.white, stroke: C.black, "stroke-width": f1(w * 0.3), "stroke-linejoin": "round", "paint-order": "stroke" }, hg);
      else { sv("circle", { r: f1(w * 1.3), fill: color, stroke: C.white, "stroke-width": f1(w * 0.35) }, hg); }
    }
    var mainPath = mp;
    function headAt(t) {
      var p = V.progress(t, t0, t0 + dur, opts.ease || "inOutSine");
      var len = L * p, q, ang = 0;
      try { q = mainPath.getPointAtLength(Math.max(0, Math.min(L, len))); var q2 = mainPath.getPointAtLength(Math.max(0, Math.min(L, len + 2))); ang = Math.atan2(q2.y - q.y, q2.x - q.x) * 180 / Math.PI; } catch (e) { q = { x: P[0][0], y: P[0][1] }; }
      return { x: q.x, y: q.y, ang: ang, p: p };
    }
    it.update = function (t) {
      var p = V.progress(t, t0, t0 + dur, opts.ease || "inOutSine");
      mp.style.strokeDashoffset = (L * (1 - p)) + "px";
      var h = headAt(t);
      var bob = Math.sin(t * 5) * w * 0.15;
      hg.setAttribute("transform", "translate(" + f1(h.x) + " " + f1(h.y + (headKind === "ship" ? bob : 0)) + ") rotate(" + f1(headKind === "dot" ? 0 : h.ang) + ")");
      hg.setAttribute("opacity", p >= 1 && opts.hideHead ? "0" : "1");
      for (var i = 0; i < stops.length; i++) {
        var sp = V.ease.outBack(clamp((t - (times[i] - 0.15)) / 0.35, 0, 1));
        stops[i].setAttribute("transform", "translate(" + f1(P[i][0]) + " " + f1(P[i][1]) + ") scale(" + sp.toFixed(3) + ")");
      }
    };
    it.head = headAt; it.times = times; it.pts = P; it.dur = dur; it.end_ = t0 + dur;
    return it;
  };

  /**
   * Stat badge pinned to a place: big number (counts up) + caption. opts: at, value, prefix, suffix, decimals,
   * caption, color, pos (above|below|left|right), end, size.
   */
  S.badge = function (place, opts) {
    opts = opts || {};
    var m = cur(), p = pt(place);
    var size = opts.size != null ? +opts.size * V.unit : u(64);
    var color = col(opts.color, C.yellow);
    var val = opts.value, isNum = typeof val === "number" || (/^[\d.,]+$/.test(str(val)) && str(val) !== "");
    var num = isNum ? parseFloat(str(val).replace(/,/g, "")) : 0;
    var fmtNum = function (n) { return (opts.prefix || "") + V.format(n, opts.decimals != null ? opts.decimals : (Math.abs(num) < 10 && num % 1 ? 1 : 0)) + (opts.suffix || ""); };
    var full = isNum ? fmtNum(num) : (opts.prefix || "") + str(val) + (opts.suffix || "");
    var cap = opts.caption || "";
    var maxW = m.W * (V.isPortrait ? 0.7 : 0.4);
    size = fitSize(full, size, maxW, u(22));
    var capSize = Math.min(size * 0.38, u(26));
    var tw = Math.max(textW(full, size), cap ? textW(cap, capSize) : 0);
    var pad = size * 0.3;
    var bw = tw + pad * 2, bh = size * 1.15 + (cap ? capSize * 1.45 : 0) + pad * 0.6;
    var pos = opts.pos || (p.y < m.H * 0.5 ? "below" : "above");
    var gap = u(40);
    var bx = -bw / 2, by = pos === "above" ? -gap - bh : pos === "below" ? gap : -bh / 2;
    if (pos === "left") bx = -gap - bw; else if (pos === "right") bx = gap;
    var it = addItem(m.g.labels, { x: p.x, y: p.y, at: opts.at, dur: 0.5, enter: "pop", ease: "outBack", end: opts.end, cs: 0.65, cls: "mr-badge" });
    var g = it.g;
    // stem + point
    sv("line", { x1: 0, y1: 0, x2: f1(bx + bw / 2), y2: f1(by + bh / 2), stroke: C.white, "stroke-width": f1(u(4)), "stroke-dasharray": f1(u(8)) + " " + f1(u(6)) }, g);
    sv("circle", { r: f1(u(11)), fill: color, stroke: C.black, "stroke-width": f1(u(3)) }, g);
    sv("rect", { x: f1(bx + u(8)), y: f1(by + u(10)), width: f1(bw), height: f1(bh), rx: f1(u(12)), fill: "rgba(0,0,0,0.5)" }, g);
    sv("rect", { x: f1(bx), y: f1(by), width: f1(bw), height: f1(bh), rx: f1(u(12)), fill: "rgba(10,12,20,0.9)", stroke: color, "stroke-width": f1(u(4)) }, g);
    sv("rect", { x: f1(bx), y: f1(by), width: f1(bw), height: f1(u(8)), rx: f1(u(3)), fill: color }, g);
    var numT = svgText(g, full, { x: bx + bw / 2, y: by + pad * 0.4 + size * 0.62, size: size, color: color, strokeW: 0.08 });
    if (cap) svgText(g, cap, { x: bx + bw / 2, y: by + pad * 0.4 + size * 1.2 + capSize * 0.7, size: capSize, color: C.white, strokeW: 0.1, font: BODY, weight: 800, tracking: f1(capSize * 0.08) });
    var last = null;
    if (isNum) it.update = function (t) {
      var pp = V.ease.outExpo(clamp((t - it.at) / (opts.countDur || 1.4), 0, 1));
      var s = fmtNum(num * pp);
      if (s !== last) { last = s; numT.textContent = s.toUpperCase(); }
    };
    it.p = p; it.rect = { x: p.x + bx, y: p.y + by, w: bw, h: bh };
    return it;
  };

  /** Silhouette of another region at true relative size, centred on a place. opts: at, color, label, end, scale, rot. */
  S.silhouette = function (regionId, place, opts) {
    opts = opts || {};
    var m = cur(), R2 = getRegion(regionId), p = pt(place);
    var pxPerKm = m.box.w / Math.max(1, m.R.kmW);
    var asp2 = regionAspect(R2);
    var nb = polyBounds(arr(R2.polys).concat(arr(R2.isles)).map(function (q) { return q.map(function (z) { return toN(R2, z); }); }));
    var wpx = R2.kmW * pxPerKm * (opts.scale || 1);
    var bw = wpx / Math.max(1e-6, nb.w), bh = bw / asp2;
    var color = col(opts.color, C.yellow);
    var it = addItem(m.g.zones, { x: p.x, y: p.y, at: opts.at, dur: 0.8, enter: opts.enter || "drop", ease: "outCubic", end: opts.end, cs: 0, cls: "mr-sil" });
    var g = it.g;
    var r = rng("sil:" + R2.id);
    var polys = arr(R2.polys).concat(arr(R2.isles)).map(function (poly) {
      var pts = poly.map(function (z) { var n = toN(R2, z); return [(n[0] - nb.x - nb.w / 2) * bw, (n[1] - nb.y - nb.h / 2) * bh]; });
      return fractalize(pts, r, 0.08, 6);
    });
    var d = polys.map(polyPath).join(" ");
    var gg = sv("g", { transform: "rotate(" + f1(opts.rot || 0) + ")" }, g);
    sv("path", { d: d, fill: "rgba(0,0,0,0.45)", transform: "translate(" + f1(u(8)) + " " + f1(u(12)) + ")" }, gg);
    sv("path", { d: d, fill: color, "fill-opacity": 0.55, stroke: C.black, "stroke-width": f1(u(6)), "stroke-linejoin": "round" }, gg);
    sv("path", { d: d, fill: "none", stroke: color, "stroke-width": f1(u(3)), "stroke-linejoin": "round", "stroke-dasharray": f1(u(14)) + " " + f1(u(8)) }, gg);
    it.w = wpx; it.h = bh * nb.h; it.rect = { x: p.x - wpx / 2, y: p.y - it.h / 2, w: wpx, h: it.h }; it.p = p;
    if (opts.label) S.label(place, opts.label, { at: it.at + 0.5, pos: "center", box: true, bar: color, color: color, size: opts.labelSize || 40, end: opts.end, cs: 0.5 });
    return it;
  };

  /** Lat/lon style grid over the map (subtle). */
  S.grid = function (opts) {
    opts = opts || {};
    var m = cur(), W = m.W, H = m.H, step = opts.step || Math.min(W, H) / 8;
    var g = sv("g", { class: "mr-grid", stroke: "rgba(255,255,255,0.08)", "stroke-width": f1(u(1.2)) }, m.under);
    for (var x = -W; x <= W * 2; x += step) sv("line", { x1: f1(x), y1: f1(-H), x2: f1(x), y2: f1(H * 2) }, g);
    for (var y = -H; y <= H * 2; y += step) sv("line", { x1: f1(-W), y1: f1(y), x2: f1(W * 2), y2: f1(y) }, g);
    return g;
  };

  // ───────────────────────── HUD (screen overlays) ─────────────────────────
  function hudTL() { return cur().tl; }
  /**
   * Huge thumbnail-style headline. opts: at, pos (top|bottom|center), color (white|yellow), em (colour for *emphasis*),
   * size, maxLines, end, stagger, align, sync (true: each word lands on its narration time).
   */
  S.headline = function (text, opts) {
    opts = opts || {};
    var m = cur(), tl = hudTL(), W = m.W, H = m.H;
    var at = cT(opts.at != null ? opts.at : 0.4);
    var pos = opts.pos || (V.isPortrait ? "bottom" : "top");
    var box = el("div.mr-headline.mr-pos-" + pos, { parent: m.hud });
    if (opts.align) box.style.textAlign = opts.align;
    if (opts.color === "yellow") box.classList.add("mr-yellow");
    if (opts.size) box.style.fontSize = px(+opts.size * V.unit);
    var em = col(opts.em, C.yellow);
    var words = str(text).split(/\s+/).filter(Boolean);
    var spans = [], emOn = false;
    words.forEach(function (w) {
      var starts = /^\*/.test(w), ends = /\*$/.test(w) || /\*[^\w]*$/.test(w);
      var clean = w.replace(/\*/g, "");
      var isEm = emOn || starts;
      var sp = el("span.mr-hw", { parent: box, text: clean });
      if (isEm) { sp.classList.add("mr-em"); sp.style.color = em; }
      if (starts) emOn = true;
      if (ends) emOn = false;
      spans.push(sp);
      box.appendChild(document.createTextNode(" "));
    });
    V.fit(box, { maxLines: opts.maxLines || (V.isPortrait ? 3 : 2), min: u(34) });
    var stagger = opts.stagger != null ? opts.stagger : 0.07;
    var times = [];
    if (opts.sync && V.words && V.words.length) {
      var after = at - 0.3;
      words.forEach(function (w) { var tt = V.find(w.replace(/\*/g, ""), after); if (tt == null) tt = (times.length ? times[times.length - 1] : at) + stagger; times.push(Math.max(at, tt - 0.12)); after = tt; });
    } else words.forEach(function (w, i) { times.push(at + i * stagger); });
    spans.forEach(function (sp, i) {
      tl.fromTo(sp, { opacity: 0, scale: 2.2, rotate: -4 + ((i * 7) % 9) }, { opacity: 1, scale: 1, rotate: 0 }, { at: cT(times[i]), dur: 0.32, ease: "outBack" });
    });
    if (opts.end != null && opts.end < D() - 0.2) tl.to(box, { opacity: 0, scale: 1.08 }, { at: cT(opts.end), dur: 0.3, ease: "inCubic" });
    var endT = times[times.length - 1] + 0.32;
    if (opts.bump !== false) tl.fromTo(box, { scale: 1.06 }, { scale: 1 }, { at: endT, dur: 0.4, ease: "outCubic" });
    return { el: box, at: at, land: endT, spans: spans };
  };

  /** Small red kicker tag (top-left), e.g. "GEOGRAPHY FACT #7". opts: at, end, color, pos (tl|tr). */
  S.kicker = function (text, opts) {
    opts = opts || {};
    var m = cur(), tl = hudTL();
    var at = cT(opts.at != null ? opts.at : 0.2);
    var box = el("div.mr-kicker.mr-pos-" + (opts.pos || "tl"), { parent: m.hud });
    box.style.background = col(opts.color);
    el("span", { parent: box, text: plain(text).toUpperCase() });
    V.fit(box, { maxLines: 1, min: u(14) });
    tl.fromTo(box, { opacity: 0, x: -u(60), skewX: -12 }, { opacity: 1, x: 0, skewX: -12 }, { at: at, dur: 0.4, ease: "outCubic" });
    if (opts.end != null && opts.end < D() - 0.2) tl.to(box, { opacity: 0 }, { at: cT(opts.end), dur: 0.3 });
    return { el: box, at: at };
  };

  /** Bottom banner strip (lower third): bold white caps on red. opts: at, end, color, sub. */
  S.banner = function (text, opts) {
    opts = opts || {};
    var m = cur(), tl = hudTL();
    var at = cT(opts.at != null ? opts.at : 0.5);
    var box = el("div.mr-banner", { parent: m.hud });
    var strip = el("div.mr-banner-strip", { parent: box, style: { background: col(opts.color) } });
    var tx = el("div.mr-banner-text", { parent: strip });
    tx.appendChild(S.rich(plain(text).toUpperCase()));
    V.fit(tx, { maxLines: 2, min: u(20) });
    var sub = opts.sub ? el("div.mr-banner-sub", { parent: box, text: plain(opts.sub) }) : null;
    if (sub) V.fit(sub, { maxLines: 1, min: u(16) });
    tl.fromTo(strip, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" }, { at: at, dur: 0.5, ease: "outCubic" });
    if (sub) tl.fromTo(sub, { opacity: 0, y: u(14) }, { opacity: 1, y: 0 }, { at: at + 0.3, dur: 0.4, ease: "outCubic" });
    if (opts.end != null && opts.end < D() - 0.2) tl.to(box, { opacity: 0 }, { at: cT(opts.end), dur: 0.3 });
    return { el: box, at: at };
  };

  /** Outlined caption at the bottom (fallback / subtitles). opts: at, end. */
  S.caption = function (text, opts) {
    opts = opts || {};
    var m = cur(), tl = hudTL();
    var at = cT(opts.at != null ? opts.at : 0.3);
    var box = el("div.mr-caption", { parent: m.hud });
    box.appendChild(S.rich(text));
    V.fit(box, { maxLines: V.isPortrait ? 4 : 3, min: u(22) });
    tl.fromTo(box, { opacity: 0, y: u(10) }, { opacity: 1, y: 0 }, { at: at, dur: 0.3, ease: "outCubic" });
    if (opts.end != null && opts.end < D() - 0.15) tl.to(box, { opacity: 0 }, { at: cT(opts.end), dur: 0.25, ease: "inQuad" });
    return { el: box, at: at };
  };

  /** Big HUD stat card: counts up. opts: at, value, prefix, suffix, decimals, caption, color, pos (tl|tr|bl|br|center), end. */
  S.stat = function (opts) {
    opts = opts || {};
    var m = cur(), tl = hudTL();
    var at = cT(opts.at != null ? opts.at : 0.5);
    var pos = opts.pos || (V.isPortrait ? "tr" : "br");
    var box = el("div.mr-stat.mr-pos-" + pos, { parent: m.hud });
    if ((pos === "tl" || pos === "tr") && m.hud.querySelector(".mr-headline.mr-pos-top")) box.style.top = (V.isPortrait ? 22 : 24) + "%";
    if ((pos === "bl" || pos === "br") && m.hud.querySelector(".mr-headline.mr-pos-bottom")) box.style.bottom = (V.isPortrait ? 24 : 26) + "%";
    var color = col(opts.color, C.yellow);
    box.style.borderColor = color;
    var top = el("div.mr-stat-top", { parent: box, style: { background: color } });
    var num = el("div.mr-stat-num", { parent: box, style: { color: color } });
    var val = opts.value, isNum = typeof val === "number" || (/^[\d.,]+$/.test(str(val)) && str(val) !== "");
    var n = isNum ? parseFloat(str(val).replace(/,/g, "")) : 0;
    var dec = opts.decimals != null ? opts.decimals : (Math.abs(n) < 10 && n % 1 ? 1 : 0);
    num.textContent = isNum ? (opts.prefix || "") + V.format(n, dec) + (opts.suffix || "") : (opts.prefix || "") + str(val) + (opts.suffix || "");
    var cap = opts.caption ? el("div.mr-stat-cap", { parent: box, text: plain(opts.caption).toUpperCase() }) : null;
    V.fit(num, { maxLines: 1, min: u(30) });
    if (cap) V.fit(cap, { maxLines: 2, min: u(14) });
    tl.fromTo(box, { opacity: 0, scale: 0.4, rotate: -6 }, { opacity: 1, scale: 1, rotate: 0 }, { at: at, dur: 0.45, ease: "outBack" });
    if (isNum) tl.fromTo(num, { text: 0, decimals: dec, prefix: opts.prefix || "", suffix: opts.suffix || "" }, { text: n, decimals: dec, prefix: opts.prefix || "", suffix: opts.suffix || "" }, { at: at + 0.1, dur: opts.countDur || 1.4, ease: "outExpo" });
    if (opts.end != null && opts.end < D() - 0.2) tl.to(box, { opacity: 0 }, { at: cT(opts.end), dur: 0.3 });
    void top;
    return { el: box, at: at };
  };

  /** Legend box for heat zones. items: [{label, color}]. opts: at, pos, title, end. */
  S.legend = function (items, opts) {
    opts = opts || {};
    var m = cur(), tl = hudTL();
    var at = cT(opts.at != null ? opts.at : 0.5);
    var box = el("div.mr-legend.mr-pos-" + (opts.pos || (V.isPortrait ? "tl" : "bl")), { parent: m.hud });
    if (opts.title) el("div.mr-legend-title", { parent: box, text: plain(opts.title).toUpperCase() });
    arr(items).slice(0, 6).forEach(function (it) {
      var row = el("div.mr-legend-row", { parent: box });
      el("i", { parent: row, style: { background: col(it.color) } });
      el("span", { parent: row, text: plain(it.label) });
    });
    V.fit(box, { maxLines: 8, min: u(14) });
    tl.fromTo(box, { opacity: 0, x: -u(40) }, { opacity: 1, x: 0 }, { at: at, dur: 0.4, ease: "outCubic" });
    if (opts.end != null && opts.end < D() - 0.2) tl.to(box, { opacity: 0 }, { at: cT(opts.end), dur: 0.3 });
    return { el: box, at: at };
  };

  /** VS divider between two zones (HUD). opts: at, text. */
  S.versus = function (opts) {
    opts = opts || {};
    var m = cur(), tl = hudTL();
    var at = cT(opts.at != null ? opts.at : 1);
    var box = el("div.mr-vs", { parent: m.hud, text: plain(opts.text || "VS") });
    tl.fromTo(box, { opacity: 0, scale: 3, rotate: -12 }, { opacity: 1, scale: 1, rotate: -6 }, { at: at, dur: 0.35, ease: "outBack" });
    if (opts.end != null && opts.end < D() - 0.2) tl.to(box, { opacity: 0 }, { at: cT(opts.end), dur: 0.3 });
    return { el: box, at: at };
  };

  S.fadeIn = function (at, dur) { var m = cur(), f = el("div.mr-fade", { parent: m.fx }); m.tl.fromTo(f, { opacity: 1 }, { opacity: 0 }, { at: cT(at || 0), dur: dur || 0.8, ease: "inOutSine" }); return f; };
  S.fadeOut = function (at, dur) { var m = cur(), f = el("div.mr-fade", { parent: m.fx }); m.tl.fromTo(f, { opacity: 0 }, { opacity: 1 }, { at: cT(at), dur: dur || 0.8, ease: "inOutSine" }); return f; };
  /** White flash (impact). */
  S.flash = function (at, dur) { var m = cur(), f = el("div.mr-flash", { parent: m.fx }); m.tl.fromTo(f, { opacity: 0.9 }, { opacity: 0 }, { at: cT(at), dur: dur || 0.45, ease: "outCubic" }); return f; };

  /**
   * Underground cross-section panel (HUD). opts: at, kind (gold|oil|water|lava|crystal|gas|diamond|fossil|cave|ore|iron|lithium|copper|uranium),
   * label, depth (text e.g. "2 KM"), pos (bottom|right), end, size.
   */
  S.crossSection = function (opts) {
    opts = opts || {};
    var m = cur(), tl = hudTL(), W = m.W, H = m.H;
    var at = cT(opts.at != null ? opts.at : 1);
    var pos = opts.pos || (V.isPortrait ? "bottom" : "right");
    var pw = pos === "bottom" ? W * 0.86 : W * 0.4, ph = pos === "bottom" ? H * (V.isPortrait ? 0.34 : 0.42) : H * 0.62;
    var box = el("div.mr-xs.mr-xs-" + pos, { parent: m.hud, style: { width: px(pw), height: px(ph) } });
    var svg = sv("svg", { width: f1(pw), height: f1(ph), viewBox: "0 0 " + f1(pw) + " " + f1(ph), class: "mr-xs-svg" }, box);
    var defs = sv("defs", null, svg);
    var kind = str(opts.kind || "gold").toLowerCase();
    var KINDS = { gold: ["#FFD23F", "#FF9A00"], oil: ["#2B2B2B", "#6A4A2A"], water: ["#4FD8FF", "#1B6FD8"], lava: ["#FF6A00", "#FF1A1A"], crystal: ["#B9F1FF", "#5CC9FF"], gas: ["#C9FFB0", "#4FD36C"], diamond: ["#E8FBFF", "#8FD9FF"], fossil: ["#E8DCC0", "#B49A6E"], cave: ["#0A0D14", "#2A3242"], ore: ["#FF8A3C", "#B2451E"], iron: ["#FF7A4A", "#8C3B22"], lithium: ["#E6FFFF", "#7CE7F0"], copper: ["#FFB266", "#C8651A"], uranium: ["#C6FF4A", "#58B800"], coal: ["#1C1C1C", "#3A3A3A"], salt: ["#FFFFFF", "#DDE7EE"], aquifer: ["#4FD8FF", "#1B6FD8"], magma: ["#FF6A00", "#FF1A1A"] };
    var kc = KINDS[kind] || KINDS.gold;
    var r = rng("xs:" + kind);
    var skyH = ph * 0.14, surfY = skyH;
    // sky
    sv("rect", { width: f1(pw), height: f1(skyH), fill: "#8FD3FF" }, svg);
    // strata
    var layers = [["#7A9A3A", "#5E7C2C"], ["#B98A4A", "#9C6E34"], ["#8D6A44", "#6E5033"], ["#6B5A4B", "#524338"], ["#5A5560", "#3E3A44"], ["#3C3842", "#26232B"]];
    var ys = [];
    for (var i = 0; i <= layers.length; i++) ys.push(surfY + ((ph - surfY) * i) / layers.length);
    function wavy(y0, amp, seed) {
      var pts = [];
      for (var x = 0; x <= pw + 1; x += pw / 24) pts.push([x, y0 + (fbm(x / pw * 3 + seed, seed * 2, 3) - 0.5) * amp]);
      return pts;
    }
    var surf = wavy(surfY, ph * 0.06, 1.3);
    for (i = 0; i < layers.length; i++) {
      var top = i === 0 ? surf : wavy(ys[i], ph * 0.05, i + 2.1), bot = wavy(ys[i + 1], ph * 0.05, i + 3.1);
      var d = "M" + top.map(function (q) { return f1(q[0]) + " " + f1(q[1]); }).join(" L") + " L" + f1(pw) + " " + f1(ph) + " L0 " + f1(ph) + " Z";
      var gid = nid("xl");
      var lg = sv("linearGradient", { id: gid, x1: 0, y1: 0, x2: 0, y2: 1 }, defs);
      sv("stop", { offset: "0%", "stop-color": layers[i][0] }, lg); sv("stop", { offset: "100%", "stop-color": layers[i][1] }, lg);
      sv("path", { d: d, fill: "url(#" + gid + ")" }, svg);
      void bot;
    }
    // speckles
    for (i = 0; i < 160; i++) sv("circle", { cx: f1(r() * pw), cy: f1(surfY + r() * (ph - surfY)), r: f1(u(1.2) + r() * u(2)), fill: "rgba(0,0,0," + (0.12 + r() * 0.2).toFixed(2) + ")" }, svg);
    // surface grass & a tiny scale figure
    sv("path", { d: "M" + surf.map(function (q) { return f1(q[0]) + " " + f1(q[1]); }).join(" L"), fill: "none", stroke: "#8FE05A", "stroke-width": f1(u(5)) }, svg);
    // deposit
    var dx = pw * (0.38 + 0.24 * r()), dy = surfY + (ph - surfY) * (opts.depthFrac || 0.66), drx = pw * 0.17, dry = ph * 0.12;
    var gl = sv("g", null, svg);
    var fid = nid("xf");
    var f = sv("filter", { id: fid, x: "-50%", y: "-50%", width: "200%", height: "200%" }, defs);
    sv("feGaussianBlur", { stdDeviation: f1(u(14)) }, f);
    var glow = sv("ellipse", { cx: f1(dx), cy: f1(dy), rx: f1(drx * 1.3), ry: f1(dry * 1.5), fill: kc[0], opacity: 0.7, filter: "url(#" + fid + ")" }, gl);
    var blobPts = [];
    for (i = 0; i < 14; i++) { var a = (i / 14) * Math.PI * 2, rr = 0.75 + 0.35 * r(); blobPts.push([dx + Math.cos(a) * drx * rr, dy + Math.sin(a) * dry * rr]); }
    var rg = nid("xr"), rgr = sv("radialGradient", { id: rg }, defs);
    sv("stop", { offset: "0%", "stop-color": kc[0] }, rgr); sv("stop", { offset: "100%", "stop-color": kc[1] }, rgr);
    var blob = sv("path", { d: smoothPath(blobPts, true), fill: "url(#" + rg + ")", stroke: kind === "cave" ? "#55627A" : C.white, "stroke-width": f1(u(2.5)), "stroke-opacity": 0.7 }, gl);
    if (kind === "crystal" || kind === "diamond" || kind === "lithium") for (i = 0; i < 9; i++) { var cx = dx + (r() - 0.5) * drx * 1.3, cyy = dy + (r() - 0.5) * dry * 1.3, s = u(6) + r() * u(12); sv("path", { d: "M" + f1(cx) + " " + f1(cyy - s) + " L" + f1(cx + s * 0.6) + " " + f1(cyy) + " L" + f1(cx) + " " + f1(cyy + s) + " L" + f1(cx - s * 0.6) + " " + f1(cyy) + " Z", fill: "#FFFFFF", opacity: 0.8 }, gl); }
    if (kind === "gold" || kind === "ore" || kind === "copper" || kind === "iron" || kind === "uranium") for (i = 0; i < 26; i++) sv("circle", { cx: f1(dx + (r() - 0.5) * drx * 1.5), cy: f1(dy + (r() - 0.5) * dry * 1.5), r: f1(u(2) + r() * u(4)), fill: kc[0], opacity: 0.9 }, gl);
    if (kind === "fossil") { sv("path", { d: "M" + f1(dx - drx * 0.6) + " " + f1(dy) + " Q" + f1(dx) + " " + f1(dy - dry * 0.9) + " " + f1(dx + drx * 0.6) + " " + f1(dy), fill: "none", stroke: "#5A4630", "stroke-width": f1(u(5)) }, gl); for (i = 0; i < 7; i++) sv("line", { x1: f1(dx - drx * 0.5 + i * drx / 6), y1: f1(dy - dry * (0.4 + 0.3 * Math.sin(i))), x2: f1(dx - drx * 0.5 + i * drx / 6), y2: f1(dy + dry * 0.5), stroke: "#5A4630", "stroke-width": f1(u(4)) }, gl); }
    // drill line from the surface
    var drill = sv("line", { x1: f1(dx), y1: f1(surfY - skyH * 0.2), x2: f1(dx), y2: f1(dy - dry * 0.6), stroke: C.white, "stroke-width": f1(u(3)), "stroke-dasharray": f1(u(10)) + " " + f1(u(6)) }, svg);
    // depth ticks
    var tg = sv("g", { fill: C.white, "font-family": HEAD, "font-size": f1(u(20)), "font-weight": 900 }, svg);
    var nT = 4;
    for (i = 0; i <= nT; i++) {
      var ty = surfY + ((ph - surfY) * i) / nT;
      sv("line", { x1: 0, y1: f1(ty), x2: f1(u(16)), y2: f1(ty), stroke: C.white, "stroke-width": f1(u(2)) }, tg);
      if (i) sv("text", { x: f1(u(22)), y: f1(ty - u(4)), text: opts.depth ? (i === nT ? plain(opts.depth).toUpperCase() : "") : "", stroke: C.black, "stroke-width": f1(u(3)), "paint-order": "stroke" }, tg);
    }
    // label
    var lab = opts.label ? svgText(svg, opts.label, { x: pw / 2, y: dy + dry * 1.75 + u(10), size: fitSize(opts.label, u(40), pw * 0.9, u(18)), color: kc[0], strokeW: 0.14 }) : null;
    var scan = el("div.mr-xs-scan", { parent: box });
    var title = el("div.mr-xs-title", { parent: box, text: plain(opts.title || "UNDERGROUND").toUpperCase() });
    // animation
    tl.fromTo(box, { opacity: 0, scaleY: 0.05 }, { opacity: 1, scaleY: 1 }, { at: at, dur: 0.5, ease: "outCubic" });
    tl.fromTo(scan, { top: "0%", opacity: 1 }, { top: "100%", opacity: 1 }, { at: at + 0.4, dur: 1.1, ease: "inOutSine" });
    tl.to(scan, { opacity: 0 }, { at: at + 1.5, dur: 0.2 });
    var revealAt = at + 0.4 + 1.1 * (opts.depthFrac || 0.66) * 0.9;
    tl.fromTo(gl, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1 }, { at: revealAt, dur: 0.5, ease: "outBack" });
    gl.style.transformBox = "fill-box"; gl.style.transformOrigin = "50% 50%";
    tl.fromTo(drill, { draw: 0 }, { draw: 1 }, { at: at + 0.5, dur: Math.max(0.3, revealAt - at - 0.5), ease: "inOutSine" });
    if (lab) { tl.fromTo(lab, { opacity: 0 }, { opacity: 1 }, { at: revealAt + 0.3, dur: 0.3 }); }
    tl.fromTo(title, { opacity: 0 }, { opacity: 1 }, { at: at + 0.2, dur: 0.3 });
    if (opts.end != null && opts.end < D() - 0.2) tl.to(box, { opacity: 0 }, { at: cT(opts.end), dur: 0.3 });
    m.hudItems.push(function (t) { if (t < revealAt) return; var o = 0.55 + 0.35 * Math.sin((t - revealAt) * 5); glow.setAttribute("opacity", o.toFixed(3)); });
    void blob;
    return { el: box, at: at, reveal: revealAt };
  };

  // ───────────────────────── globe (canvas, drawn per frame) ─────────────────────────
  /**
   * Spinning globe that rotates to `target` (anchor name of the world region, or [lon,lat]) and zooms in,
   * revealing whatever is underneath (build the flat map first). opts: at, spinDur, holdDur, zoomDur, color, label.
   */
  S.globe = function (root, opts) {
    opts = opts || {};
    root = root || V.root();
    var W = V.width, H = V.height;
    var wrap = el("div.mr-globe", { parent: root });
    var stars = el("div.mr-stars", { parent: wrap });
    var cv = el("canvas.mr-globe-cv", { parent: wrap });
    cv.width = W; cv.height = H;
    cv.style.width = px(W); cv.style.height = px(H);
    var g = cv.getContext("2d");
    var R = REGIONS.world;
    var tgt = typeof opts.target === "string" ? (findAnchor(R, opts.target) || [0, 20]) : Array.isArray(opts.target) ? opts.target : [0, 20];
    var at = cT(opts.at || 0), spinDur = opts.spinDur != null ? opts.spinDur : 2.4, hold = opts.holdDur != null ? opts.holdDur : 0.6, zoomDur = opts.zoomDur != null ? opts.zoomDur : 1.1;
    var tArrive = at + spinDur, tZoom = tArrive + hold, tDone = tZoom + zoomDur;
    var r0 = Math.min(W, H) * (V.isPortrait ? 0.42 : 0.4);
    var lonStart = tgt[0] - 170, latStart = 10;
    var polys = arr(R.polys).concat(arr(R.isles));
    var stA = [];
    var rr = rng("stars");
    for (var i = 0; i < 160; i++) stA.push([rr() * W, rr() * H, 0.4 + rr() * 1.4, rr()]);
    var color = col(opts.color);
    function draw(t) {
      var ps = V.progress(t, at, tArrive, "inOutCubic");
      var lon0 = lerp(lonStart, tgt[0], ps), lat0 = lerp(latStart, clamp(tgt[1], -60, 65), ps);
      var zp = V.progress(t, tZoom, tDone, "inCubic");
      var cx = W / 2, cy = H * (V.isPortrait ? 0.45 : 0.5), rad_ = r0;
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.clearRect(0, 0, W, H);
      // space
      g.fillStyle = "#03060F"; g.fillRect(0, 0, W, H);
      for (var s = 0; s < stA.length; s++) { var st = stA[s]; g.globalAlpha = 0.4 + 0.6 * Math.abs(Math.sin(t * 2 + st[3] * 9)); g.fillStyle = "#fff"; g.beginPath(); g.arc(st[0], st[1], st[2] * V.unit, 0, 7); g.fill(); }
      g.globalAlpha = 1;
      // zoom: scale about the target's screen position
      var tp = project(tgt[0], tgt[1], lon0, lat0, rad_);
      var zs = 1 + zp * 7;
      g.translate(cx + tp.x, cy + tp.y); g.scale(zs, zs); g.translate(-(cx + tp.x), -(cy + tp.y));
      // atmosphere
      var ag = g.createRadialGradient(cx, cy, rad_ * 0.95, cx, cy, rad_ * 1.18);
      ag.addColorStop(0, "rgba(90,180,255,0.55)"); ag.addColorStop(0.5, "rgba(60,140,255,0.18)"); ag.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = ag; g.beginPath(); g.arc(cx, cy, rad_ * 1.18, 0, 7); g.fill();
      // ocean
      var og = g.createRadialGradient(cx - rad_ * 0.35, cy - rad_ * 0.35, rad_ * 0.1, cx, cy, rad_);
      og.addColorStop(0, "#2E8FD8"); og.addColorStop(0.6, "#0E4A8E"); og.addColorStop(1, "#061C3F");
      g.fillStyle = og; g.beginPath(); g.arc(cx, cy, rad_, 0, 7); g.fill();
      g.save(); g.beginPath(); g.arc(cx, cy, rad_, 0, 7); g.clip();
      // graticule
      g.strokeStyle = "rgba(255,255,255,0.08)"; g.lineWidth = 1 * V.unit;
      for (var la = -60; la <= 60; la += 30) { g.beginPath(); for (var lo = -180; lo <= 180; lo += 6) { var q = project(lo, la, lon0, lat0, rad_); if (!q.v) { continue; } g.lineTo(cx + q.x, cy + q.y); } g.stroke(); }
      for (lo = -180; lo < 180; lo += 30) { g.beginPath(); for (la = -90; la <= 90; la += 5) { q = project(lo, la, lon0, lat0, rad_); if (!q.v) continue; g.lineTo(cx + q.x, cy + q.y); } g.stroke(); }
      // land
      for (var pi = 0; pi < polys.length; pi++) {
        var poly = polys[pi], any = false;
        g.beginPath();
        for (var k = 0; k < poly.length; k++) {
          var pq = project(poly[k][0], poly[k][1], lon0, lat0, rad_);
          if (pq.v) any = true;
          var px_ = pq.x, py_ = pq.y;
          if (!pq.v) { var l = Math.sqrt(px_ * px_ + py_ * py_) || 1; px_ = (px_ / l) * rad_ * 1.02; py_ = (py_ / l) * rad_ * 1.02; }
          if (k) g.lineTo(cx + px_, cy + py_); else g.moveTo(cx + px_, cy + py_);
        }
        g.closePath();
        if (!any) continue;
        var lg = g.createLinearGradient(cx, cy - rad_, cx, cy + rad_);
        lg.addColorStop(0, "#DDE9DD"); lg.addColorStop(0.3, "#5E9A3A"); lg.addColorStop(0.5, "#C9A356"); lg.addColorStop(0.7, "#4F8A2E"); lg.addColorStop(1, "#E8F0F4");
        g.fillStyle = lg; g.fill();
        g.strokeStyle = "rgba(0,0,0,0.35)"; g.lineWidth = 1.2 * V.unit; g.stroke();
      }
      // terminator shading
      var sg = g.createRadialGradient(cx - rad_ * 0.4, cy - rad_ * 0.4, rad_ * 0.2, cx, cy, rad_ * 1.05);
      sg.addColorStop(0, "rgba(255,255,255,0.12)"); sg.addColorStop(0.55, "rgba(0,0,0,0)"); sg.addColorStop(1, "rgba(0,0,20,0.75)");
      g.fillStyle = sg; g.fillRect(cx - rad_, cy - rad_, rad_ * 2, rad_ * 2);
      g.restore();
      // target marker
      var tq = project(tgt[0], tgt[1], lon0, lat0, rad_);
      if (tq.v && t > at + spinDur * 0.5) {
        var mp = V.progress(t, at + spinDur * 0.5, at + spinDur * 0.8, "outBack");
        var mr = rad_ * 0.07 * mp;
        g.lineWidth = mr * 0.3; g.strokeStyle = color;
        for (var rp = 0; rp < 3; rp++) { var ph = ((t * 0.8 + rp / 3) % 1); g.globalAlpha = (1 - ph) * 0.9; g.beginPath(); g.arc(cx + tq.x, cy + tq.y, mr * (1 + ph * 2), 0, 7); g.stroke(); }
        g.globalAlpha = 1; g.fillStyle = color; g.beginPath(); g.arc(cx + tq.x, cy + tq.y, mr * 0.5, 0, 7); g.fill();
        g.lineWidth = mr * 0.18; g.strokeStyle = "#fff"; g.beginPath(); g.arc(cx + tq.x, cy + tq.y, mr * 0.5, 0, 7); g.stroke();
      }
      // fade out at the end of the zoom
      var fo = V.progress(t, tZoom + zoomDur * 0.45, tDone, "inOutSine");
      wrap.style.opacity = (1 - fo).toFixed(3);
      wrap.style.visibility = t >= tDone ? "hidden" : "visible";
    }
    function project(lon, lat, lon0, lat0, rad_) {
      var la = lat * Math.PI / 180, lo = (lon - lon0) * Math.PI / 180, la0 = lat0 * Math.PI / 180;
      var cosc = Math.sin(la0) * Math.sin(la) + Math.cos(la0) * Math.cos(la) * Math.cos(lo);
      return { x: rad_ * Math.cos(la) * Math.sin(lo), y: -rad_ * (Math.cos(la0) * Math.sin(la) - Math.sin(la0) * Math.cos(la) * Math.cos(lo)), v: cosc > 0 };
    }
    V.onFrame(function (t) { if (t >= tDone + 0.05) { if (wrap.style.visibility !== "hidden") wrap.style.visibility = "hidden"; return; } draw(t); });
    return { el: wrap, at: at, arrive: tArrive, zoom: tZoom, done: tDone };
  };

  // ───────────────────────── templates ─────────────────────────
  var T = {};
  function keyT(word, frac, after) {
    var t = word ? V.find(plain(word), after || 0) : null;
    if (t == null) t = Math.max(after || 0, D() * (frac != null ? frac : 0.4));
    return cT(t);
  }
  function endSlot(t, next) { return next != null ? Math.max(t + 0.5, next - 0.2) : null; }
  function placeOr(p, dflt) { return p != null && p !== "" ? p : dflt; }
  function firstAnchor(R) { var ks = Object.keys(R.anchors || {}); return ks.length ? ks[0] : [0.5, 0.5]; }

  /** map-focus — the workhorse: region, glowing zone + target ring on a place, bold arrow sweeps in, label, headline on the key word. */
  T["map-focus"] = function (p, root) {
    var m = S.map(root, { region: p.region });
    var place = placeOr(p.place, firstAnchor(m.R));
    var d = D();
    var tKey = keyT(p.keyword || p.headline, 0.42);
    var tArrow = Math.max(0.5, tKey - 1.1), tZone = Math.max(0.3, tKey - 1.4), tLabel = tKey - 0.1;
    var color = p.color || "red";
    if (p.kicker) S.kicker(p.kicker, { at: 0.15 });
    S.zone(place, { at: tZone, r: p.zoneRadius != null ? +p.zoneRadius : 0.1, color: color, lava: p.lava });
    S.ring(place, { at: tZone + 0.3, r: p.zoneRadius != null ? +p.zoneRadius * 0.7 : 0.07, color: color });
    S.arrow(p.arrowFrom || "auto", place, { at: tArrow, color: color });
    if (p.label) S.label(place, p.label, { at: tLabel, pos: V.isPortrait ? "below" : "above", dy: V.isPortrait ? 40 : -20, box: true, bar: color, sub: p.sub });
    if (p.headline) S.headline(p.headline, { at: tKey - 0.05, pos: V.isPortrait ? "bottom" : "top", color: p.headlineColor || "white" });
    if (p.stat) S.stat({ at: tKey + 0.8, value: p.stat, suffix: p.statSuffix, prefix: p.statPrefix, caption: p.statCaption, pos: V.isPortrait ? "tr" : "br" });
    var zoom = p.zoom != null ? clamp(+p.zoom, 1, 4) : 1.7;
    S.camera.push(1.06, 0, Math.max(1, tArrow));
    S.camera.fly(place, zoom, tArrow - 0.2, Math.min(2.2, Math.max(1.2, tKey - tArrow + 0.9)));
    if (d > tKey + 3.5) S.camera.push(1.12, tKey + 1.2, d - tKey - 1.2);
  };

  /** hidden-discovery — zoom from the whole region into a glowing site, then the underground cross-section unfolds. */
  T["hidden-discovery"] = function (p, root) {
    var m = S.map(root, { region: p.region });
    var site = placeOr(p.site, firstAnchor(m.R));
    var d = D();
    var tKey = keyT(p.keyword || p.headline, 0.35);
    var tReveal = keyT(p.revealKeyword, 0.62, tKey + 0.8);
    var kind = p.kind || "gold";
    var kc = { gold: "yellow", oil: "white", water: "cyan", lava: "orange", crystal: "cyan", gas: "green", diamond: "white", fossil: "white", cave: "white", ore: "orange", iron: "orange", lithium: "cyan", copper: "orange", uranium: "green", coal: "white", salt: "white", aquifer: "cyan", magma: "orange" }[kind] || "yellow";
    if (p.kicker) S.kicker(p.kicker, { at: 0.15 });
    S.zone(site, { at: Math.max(0.3, tKey - 1.2), r: 0.07, color: kc, lava: kind === "lava" || kind === "magma" });
    S.ring(site, { at: Math.max(0.5, tKey - 0.9), r: 0.05, color: "red" });
    S.arrow("auto", site, { at: Math.max(0.4, tKey - 1.1), color: "red" });
    if (p.label) S.label(site, p.label, { at: tKey - 0.1, pos: "above", dy: -30, box: true, bar: "red" });
    if (p.headline) S.headline(p.headline, { at: tKey, pos: "top", end: V.isLandscape ? null : tReveal - 0.2 });
    S.camera.push(1.05, 0, Math.max(1, tKey - 1.2));
    S.camera.fly(site, 2.6, Math.max(0.3, tKey - 1.3), Math.max(1.4, Math.min(2.6, tReveal - tKey + 0.6)));
    // keep the site visible on the left/top while the panel takes the other side
    var sp = pt(site);
    var off = V.isPortrait ? { x: sp.x, y: sp.y + m.H * 0.12 } : { x: sp.x + m.W * 0.14, y: sp.y };
    S.camera.to(off.x, off.y, m.cam0.z * 3.2, tReveal - 0.4, 1.2);
    var xs = S.crossSection({ at: tReveal, kind: kind, label: p.discoveryLabel || p.label, depth: p.depth, title: p.panelTitle || "CROSS-SECTION" });
    if (p.stat) S.stat({ at: xs.reveal + 0.6, value: p.stat, suffix: p.statSuffix, prefix: p.statPrefix, caption: p.statCaption, pos: V.isPortrait ? "tr" : "bl", color: kc });
    S.flash(xs.reveal, 0.35);
    void d;
  };

  /** fact-countdown — numbered markers pop across the map, one per fact, each with a label; the camera hops along. */
  T["fact-countdown"] = function (p, root) {
    var m = S.map(root, { region: p.region });
    var facts = arr(p.facts).slice(0, 8);
    if (!facts.length) facts = [{ place: firstAnchor(m.R), label: "Fact" }];
    var n = facts.length, d = D();
    var times = S.syncTimes(facts.map(function (f) { return f.keyword || S.autoKey(f.label); }), { start: 0.9, end: Math.max(1.5, d * 0.82), lead: 0.15, minGap: 0.9 });
    if (p.title) S.kicker(p.title, { at: 0.15 });
    if (p.headline) S.headline(p.headline, { at: 0.35, pos: V.isPortrait ? "bottom" : "top", end: times[0] - 0.3 });
    var desc = p.countdown !== false;
    facts.forEach(function (f, i) {
      var num = desc ? n - i : i + 1;
      var place = placeOr(f.place, firstAnchor(m.R));
      var t = times[i], end = i + 1 < n ? times[i + 1] + 0.3 : null;
      var color = f.color || (i % 2 ? "yellow" : "red");
      S.zone(place, { at: t - 0.35, r: 0.06, color: color, end: end != null ? end + 1.5 : null });
      S.marker(place, num, { at: t - 0.15, color: color, label: f.label, sub: f.sub, labelSize: 30 });
      if (f.stat) S.badge(place, { at: t + 0.4, value: f.stat, suffix: f.statSuffix, prefix: f.statPrefix, caption: f.statCaption, color: color, end: end });
      S.camera.fly(place, 1.7, t - 0.6, Math.min(1.3, Math.max(0.7, (i ? t - times[i - 1] : t) * 0.6)));
      S.camera.shake(t - 0.15, u(6), 0.3);
    });
    if (d > times[n - 1] + 1.6) S.camera.wide(times[n - 1] + 1.1, Math.min(1.8, d - times[n - 1] - 1.1), { fill: 1 });
  };

  /** route-journey — a dotted route draws itself across the region through named stops; a vehicle head leads it. */
  T["route-journey"] = function (p, root) {
    var m = S.map(root, { region: p.region });
    var stops = arr(p.stops).slice(0, 8);
    if (stops.length < 2) { var ks = Object.keys(m.R.anchors || {}); stops = [{ place: ks[0] || [0.3, 0.5], label: "Start" }, { place: ks[1] || [0.7, 0.5], label: "End" }]; }
    var d = D();
    var tStart = keyT(p.keyword || (stops[0] && stops[0].keyword), 0.18);
    var tEnd = keyT(stops[stops.length - 1].keyword, 0.78, tStart + 1.5);
    var dur = clamp(tEnd - tStart, 1.5, Math.max(1.5, d * 0.7));
    if (p.title) S.kicker(p.title, { at: 0.15 });
    var style = p.style || "dotted";
    var head = p.vehicle || "dot";
    var r = S.route(stops.map(function (s) { return s.place; }), { at: tStart, dur: dur, style: style, head: head, color: p.color || "yellow" });
    stops.forEach(function (s, i) {
      if (!s.label) return;
      var place = s.place;
      S.label(place, s.label, { at: r.times[i] - 0.1, pos: i % 2 ? "below" : "above", box: true, bar: p.color || "yellow", size: 28, sub: s.sub });
      if (i === 0 || i === stops.length - 1) S.ring(place, { at: r.times[i] - 0.2, r: 0.035, color: i ? "red" : "yellow", rings: 2 });
    });
    if (p.headline) S.headline(p.headline, { at: tEnd + 0.1, pos: V.isPortrait ? "bottom" : "top" });
    if (p.stat) S.stat({ at: tEnd + 0.6, value: p.stat, suffix: p.statSuffix, prefix: p.statPrefix, caption: p.statCaption, pos: V.isPortrait ? "tr" : "br" });
    // camera: follow the head, then pull wide to show the whole route
    var zoomF = p.follow === false ? 1 : 1.6;
    if (p.follow !== false) {
      S.camera.track(function (t) { var h = r.head(t); return { x: h.x, y: h.y, zoom: m.cam0.z * zoomF }; }, Math.max(0.2, tStart - 0.6), 1.0);
      S.camera.wide(tEnd + 0.3, 1.6, { fill: 1 });
    } else S.camera.push(1.08, 0, d);
  };

  /** compare-size — one region's silhouette drops onto another at true relative size ("X fits N times"). */
  T["compare-size"] = function (p, root) {
    var m = S.map(root, { region: p.region });
    var over = p.overlay || (m.R.id === "uk" ? "japan" : "uk");
    var place = placeOr(p.place, m.R.proj === "xy" ? "center" : firstAnchor(m.R));
    var d = D();
    var tDrop = keyT(p.keyword || p.overlayName, 0.35);
    var tCount = keyT(p.countKeyword, 0.62, tDrop + 0.8);
    if (p.kicker) S.kicker(p.kicker, { at: 0.15 });
    var R2 = getRegion(over);
    var sil = S.silhouette(over, place, { at: tDrop, color: p.color || "yellow", label: p.overlayName || R2.name, rot: p.rotate || 0 });
    S.camera.shake(tDrop + 0.5, u(8), 0.4);
    S.flash(tDrop + 0.45, 0.3);
    var times = p.times != null ? +p.times : Math.round((m.R.kmW * m.R.kmW) / Math.max(1, R2.kmW * R2.kmW) * 0.8);
    times = Math.max(1, Math.round(times * 10) / 10);
    // extra ghost copies to sell the "fits N times"
    var copies = clamp(Math.min(times, p.ghosts != null ? +p.ghosts : 5) - 1, 0, 7);
    var sp = pt(place), L = m.land;
    for (var i = 0; i < copies; i++) {
      var ang = (i / Math.max(1, copies)) * Math.PI * 2 + 0.6;
      var gx = clamp(sp.x + Math.cos(ang) * sil.w * 1.15, L.x + sil.w * 0.5, L.x + L.w - sil.w * 0.5), gy = clamp(sp.y + Math.sin(ang) * sil.h * 1.15, L.y + sil.h * 0.5, L.y + L.h - sil.h * 0.5);
      if (Math.abs(gx - sp.x) < sil.w * 0.5 && Math.abs(gy - sp.y) < sil.h * 0.5) continue;
      S.silhouette(over, { x: (gx - m.box.x) / m.box.w, y: (gy - m.box.y) / m.box.h }, { at: tCount + 0.15 + i * 0.12, color: p.color || "yellow", enter: "pop" }).g.setAttribute("class", "mr-item mr-sil mr-ghost");
    }
    if (p.headline) S.headline(p.headline, { at: tCount, pos: V.isPortrait ? "bottom" : "top" });
    S.stat({ at: tCount + 0.1, value: times, suffix: "×", caption: p.caption || (plain(p.overlayName || R2.name) + " fits inside"), pos: V.isPortrait ? "tr" : "br", color: p.color || "yellow" });
    S.camera.push(1.05, 0, Math.max(1, tDrop));
    S.camera.focus(sil.rect, tDrop - 0.3, 1.2, { fill: 0.55 });
    S.camera.wide(tCount - 0.2, 1.2, { fill: 1 });
    void d;
  };

  /** stat-on-map — a huge number badge pinned to a place (counts up), with target ring, arrow and headline. */
  T["stat-on-map"] = function (p, root) {
    var m = S.map(root, { region: p.region });
    var place = placeOr(p.place, firstAnchor(m.R));
    var d = D();
    var tKey = keyT(p.keyword || p.caption, 0.4);
    var color = p.color || "yellow";
    if (p.kicker) S.kicker(p.kicker, { at: 0.15 });
    S.zone(place, { at: Math.max(0.3, tKey - 1), r: 0.08, color: "red" });
    S.ring(place, { at: Math.max(0.4, tKey - 0.8), r: 0.05, color: "red" });
    S.arrow(p.arrowFrom || "auto", place, { at: Math.max(0.4, tKey - 1.1), color: "red" });
    var sp0 = pt(place);
    var bpos = p.badgePos || (sp0.y < m.H * 0.5 ? "below" : "above");
    S.badge(place, { at: tKey - 0.05, value: p.value, prefix: p.prefix, suffix: p.suffix, decimals: p.decimals, caption: p.caption, color: color, pos: bpos });
    var lpos = { below: "above", above: "below", left: "right", right: "left" }[bpos];
    if (p.label) S.label(place, p.label, { at: tKey + 0.5, pos: lpos, dy: lpos === "above" ? -30 : lpos === "below" ? 30 : 0, box: true, bar: "red", size: 28 });
    if (p.headline) S.headline(p.headline, { at: tKey + 0.9, pos: V.isPortrait ? "bottom" : "top" });
    S.camera.push(1.05, 0, Math.max(1, tKey - 1));
    S.camera.fly(place, p.zoom != null ? clamp(+p.zoom, 1, 4) : 1.6, Math.max(0.3, tKey - 1.2), 1.6);
    if (d > tKey + 3) S.camera.push(1.1, tKey + 1, d - tKey - 1);
  };

  /** headline-title — thumbnail-style title card over a slowly pushing map: kicker, giant headline landing word by word, sub line. */
  T["headline-title"] = function (p, root) {
    var m = S.map(root, { region: p.region, fit: V.isPortrait ? 0.95 : 0.9 });
    var d = D();
    var tKey = keyT(p.keyword, 0.3);
    if (p.kicker) S.kicker(p.kicker, { at: 0.2, pos: V.isPortrait ? "tl" : "tl" });
    if (p.place) {
      S.zone(p.place, { at: Math.max(0.2, tKey - 0.6), r: 0.1, color: p.color || "red", lava: p.lava });
      S.ring(p.place, { at: Math.max(0.3, tKey - 0.4), r: 0.06, color: p.color || "red" });
    }
    var h = S.headline(p.headline || "GEOGRAPHY", { at: Math.max(0.3, tKey - 0.4), pos: "center", sync: p.sync !== false, size: V.isPortrait ? 112 : 128, maxLines: 3, color: p.headlineColor || "white" });
    if (p.sub) S.banner(p.sub, { at: h.land + 0.2, color: p.color || "red" });
    S.flash(h.land, 0.3);
    S.camera.shake(h.land, u(10), 0.4);
    S.camera.push(1.18, 0, d);
    if (p.place) S.camera.fly(p.place, 1.25, 0.1, Math.max(1.5, d * 0.9), { ease: "inOutSine" });
  };

  /** region-split — two zones in contrasting colours with labels and a VS, e.g. north vs south, wet vs dry. */
  T["region-split"] = function (p, root) {
    var m = S.map(root, { region: p.region });
    var d = D();
    var A = p.left || {}, B = p.right || {};
    var tA = keyT(A.keyword || A.label, 0.28), tB = keyT(B.keyword || B.label, 0.55, tA + 0.6);
    if (p.kicker) S.kicker(p.kicker, { at: 0.15 });
    function side(z, t, dflt, colorD, i) {
      var color = z.color || colorD;
      var zone;
      if (z.places && z.places.length > 2) zone = S.zone(null, { at: t - 0.3, pts: z.places, color: color });
      else zone = S.zone(placeOr(z.place, dflt), { at: t - 0.3, rx: z.radius != null ? +z.radius : 0.2, ry: z.radius != null ? +z.radius * 0.8 : 0.18, color: color });
      var c = { x: zone.rect.x + zone.rect.w / 2, y: zone.rect.y + zone.rect.h / 2 };
      var cp = { x: (c.x - m.box.x) / m.box.w, y: (c.y - m.box.y) / m.box.h };
      if (z.label) S.label(cp, z.label, { at: t - 0.05, pos: "center", box: true, bar: color, color: color, size: 40, sub: z.sub, maxWidth: V.isPortrait ? 440 : 560 });
      if (z.stat) S.badge({ x: cp.x, y: cp.y + (u(70) / m.box.h) }, { at: t + 0.5, value: z.stat, suffix: z.statSuffix, prefix: z.statPrefix, caption: z.statCaption, color: color, pos: "below", size: 50 });
      zone.c = c;
      return zone;
    }
    var za = side(A, tA, V.isPortrait ? [0.5, 0.3] : [0.3, 0.5], "cyan", 0);
    var zb = side(B, tB, V.isPortrait ? [0.5, 0.7] : [0.7, 0.5], "red", 1);
    if (p.vs !== false) {
      var vs = S.versus({ at: tB + 0.2, text: p.vsText || "VS" });
      var vx = clamp(((za.c.x + zb.c.x) / 2) / m.W, 0.15, 0.85), vy = clamp(((za.c.y + zb.c.y) / 2) / m.H, 0.12, 0.88);
      vs.el.style.left = (vx * 100).toFixed(2) + "%"; vs.el.style.top = (vy * 100).toFixed(2) + "%";
    }
    if (p.headline) S.headline(p.headline, { at: tB + 0.6, pos: V.isPortrait ? "bottom" : "top" });
    S.camera.focus(za.rect, tA - 0.5, 1.2, { fill: 0.5 });
    S.camera.focus(zb.rect, tB - 0.5, 1.2, { fill: 0.5 });
    S.camera.wide(tB + 0.5, 1.4, { fill: 1 });
    if (d > tB + 3) S.camera.push(1.06, tB + 2, d - tB - 2);
  };

  /** plan-blueprint — a proposed megaproject (canal, railway, inland sea…) draws itself in dashed yellow; seas flood blue. */
  T["plan-blueprint"] = function (p, root) {
    var m = S.map(root, { region: p.region });
    var d = D();
    var path = arr(p.path).slice(0, 10);
    if (path.length < 2) { var ks = Object.keys(m.R.anchors || {}); path = [ks[0] || [0.3, 0.5], ks[1] || [0.7, 0.5]]; }
    var kind = p.kind || "canal";
    var tDraw = keyT(p.keyword || p.label, 0.3);
    var tDone = keyT(p.doneKeyword, 0.68, tDraw + 1.2);
    var dur = clamp(tDone - tDraw, 1.2, 4);
    var color = p.color || "yellow";
    if (p.kicker) S.kicker(p.kicker, { at: 0.15 });
    S.grid();
    var isArea = kind === "sea" || kind === "lake" || kind === "city" || kind === "reservoir" || kind === "farm";
    var r = null;
    if (isArea && path.length > 2) {
      var zone = S.zone(null, { at: tDraw, pts: path, color: kind === "city" ? "yellow" : "cyan", pulse: false });
      zone.g.setAttribute("class", "mr-item mr-zone mr-plan-area");
      r = { rect: zone.rect, times: [tDraw, tDone], end_: tDraw + 0.7 };
      // outline draws in dashed
      var pts = path.map(function (q) { var w = pt(q); return [w.x, w.y]; });
      var dd = smoothPath(pts, true);
      var it = addItem(m.g.routes, { x: 0, y: 0, at: tDraw, dur: 0, enter: "fade", cs: 0 });
      var pl = sv("path", { d: dd, fill: "none", stroke: C.black, "stroke-width": f1(u(12)), "stroke-linejoin": "round", "stroke-dasharray": f1(u(26)) + " " + f1(u(16)), opacity: 0.5 }, it.g);
      var pl2 = sv("path", { d: dd, fill: "none", stroke: col(color), "stroke-width": f1(u(7)), "stroke-linejoin": "round", "stroke-dasharray": f1(u(26)) + " " + f1(u(16)) }, it.g);
      m.tl.fromTo([pl, pl2], { opacity: 0 }, { opacity: 1 }, { at: tDraw, dur: 0.4 });
      m.hudItems.push(function (t) { var o = -((t - tDraw) * u(60)) % u(42); pl.style.strokeDashoffset = o + "px"; pl2.style.strokeDashoffset = o + "px"; });
    } else {
      r = S.route(path, { at: tDraw, dur: dur, style: kind === "railway" ? "dashed" : "dashed", head: kind === "railway" ? "car" : kind === "highway" ? "car" : "dot", color: color, width: kind === "canal" || kind === "river" ? 14 : 9, hideHead: true });
      if (kind === "canal" || kind === "river" || kind === "pipeline") {
        // water fills after the plan is drawn
        var pts2 = path.map(function (q) { var w = pt(q); return [w.x, w.y]; });
        var wd = smoothPath(pts2, false);
        var wit = addItem(m.g.routes, { x: 0, y: 0, at: tDone, dur: 0, enter: "fade", cs: 0 });
        var wp = sv("path", { d: wd, fill: "none", stroke: kind === "pipeline" ? "#B8C2CC" : "#3FC6FF", "stroke-width": f1(u(kind === "pipeline" ? 7 : 11)), "stroke-linecap": "round" }, wit.g);
        var wg = sv("path", { d: wd, fill: "none", stroke: kind === "pipeline" ? "#FFFFFF" : "#BFF0FF", "stroke-width": f1(u(3)), "stroke-linecap": "round", "stroke-dasharray": f1(u(20)) + " " + f1(u(30)) }, wit.g);
        var LL = 1; try { LL = wp.getTotalLength() || 1; } catch (e) {}
        wp.setAttribute("stroke-dasharray", f1(LL) + " " + f1(LL + 5));
        wit.update = function (t) { var q = V.progress(t, tDone, tDone + 1.2, "inOutSine"); wp.style.strokeDashoffset = (LL * (1 - q)) + "px"; wg.style.strokeDashoffset = (-(t - tDone) * u(80)) + "px"; wg.setAttribute("opacity", q.toFixed(2)); };
      }
    }
    path.forEach(function (q, i) {
      var lab = p.labels && p.labels[i];
      if (lab) S.label(q, lab, { at: (r.times && r.times[Math.min(i, r.times.length - 1)]) - 0.1, pos: i % 2 ? "below" : "above", box: true, bar: color, size: 26 });
    });
    if (p.label) S.label(path[Math.floor(path.length / 2)], p.label, { at: tDone + 0.1, pos: "below", dy: 60, box: true, bar: color, color: color, size: 40 });
    if (p.headline) S.headline(p.headline, { at: tDone + 0.4, pos: V.isPortrait ? "bottom" : "top" });
    if (p.stat) S.stat({ at: tDone + 0.9, value: p.stat, suffix: p.statSuffix, prefix: p.statPrefix, caption: p.statCaption, pos: V.isPortrait ? "tr" : "br", color: color });
    var rect = r.rect || polyBounds([path.map(function (q) { var w = pt(q); return [w.x, w.y]; })]);
    S.camera.push(1.05, 0, Math.max(1, tDraw - 0.5));
    S.camera.focus(rect, tDraw - 0.5, 1.4, { fill: 0.5 });
    if (d > tDone + 2.5) S.camera.wide(tDone + 1.6, 1.6, { fill: 1 });
  };

  /** heat-zones — several glowing areas coloured by intensity, popping in one by one, with a legend. */
  T["heat-zones"] = function (p, root) {
    var m = S.map(root, { region: p.region });
    var zones = arr(p.zones).slice(0, 10);
    if (!zones.length) zones = [{ place: firstAnchor(m.R), label: "Zone", intensity: "high" }];
    var d = D();
    var times = S.syncTimes(zones.map(function (z) { return z.keyword || S.autoKey(z.label); }), { start: 0.8, end: Math.max(1.4, d * 0.78), lead: 0.2, minGap: 0.5 });
    var INT = { low: "yellow", medium: "orange", high: "red", extreme: "#FF00AA", cold: "cyan", green: "green" };
    if (p.title) S.kicker(p.title, { at: 0.15 });
    zones.forEach(function (z, i) {
      var color = z.color || INT[str(z.intensity || "high").toLowerCase()] || "red";
      var rr = z.radius != null ? +z.radius : { low: 0.07, medium: 0.09, high: 0.11, extreme: 0.14 }[str(z.intensity).toLowerCase()] || 0.09;
      var place = placeOr(z.place, firstAnchor(m.R));
      S.zone(place, { at: times[i], r: rr, color: color, lava: str(z.intensity).toLowerCase() === "extreme" });
      if (z.label) S.label(place, z.label, { at: times[i] + 0.15, pos: i % 2 ? "below" : "above", box: true, bar: color, size: 26, sub: z.value });
      S.camera.shake(times[i], u(4), 0.25);
    });
    var leg = [];
    var used = {};
    zones.forEach(function (z) { var k = str(z.intensity || "high").toLowerCase(); if (!used[k]) { used[k] = 1; leg.push({ label: p.legend && p.legend[k] ? p.legend[k] : k.charAt(0).toUpperCase() + k.slice(1), color: z.color || INT[k] || "red" }); } });
    S.legend(leg, { at: times[0] + 0.3, title: p.legendTitle || "INTENSITY" });
    if (p.headline) S.headline(p.headline, { at: times[zones.length - 1] + 0.5, pos: V.isPortrait ? "bottom" : "top" });
    S.camera.push(1.12, 0, d);
  };

  /** globe-spin — a 3D globe spins to the target, zooms in and dissolves into the flat satellite map with a headline. */
  T["globe-spin"] = function (p, root) {
    var region = p.region || "world";
    var m = S.map(root, { region: region });
    var d = D();
    var tKey = keyT(p.keyword || p.headline, 0.5);
    var spin = clamp(tKey - 1.6, 1.2, 3.4);
    var gl = S.globe(root, { target: p.target || region, at: 0, spinDur: spin, holdDur: 0.5, zoomDur: 1.0, color: p.color || "red" });
    var place = p.place;
    if (p.kicker) S.kicker(p.kicker, { at: gl.done - 0.2 });
    if (place) {
      S.zone(place, { at: gl.done - 0.2, r: 0.1, color: p.color || "red" });
      S.ring(place, { at: gl.done, r: 0.06, color: p.color || "red" });
      S.arrow("auto", place, { at: gl.done + 0.2, color: p.color || "red" });
      if (p.label) S.label(place, p.label, { at: gl.done + 0.9, pos: "above", dy: -30, box: true, bar: p.color || "red" });
    }
    var hAt = Math.max(gl.done + 0.3, tKey - 0.1);
    if (p.headline) S.headline(p.headline, { at: hAt, pos: "top", sync: false });
    if (p.sub) S.banner(p.sub, { at: hAt + 0.8, color: p.color || "red" });
    S.camera.to(m.cam0.x, m.cam0.y, 1.35, 0, 0.01);
    S.camera.to(m.cam0.x, m.cam0.y, 1, gl.zoom, gl.done - gl.zoom + 0.6, { ease: "outCubic" });
    if (place) S.camera.fly(place, 1.5, gl.done + 0.2, Math.max(1.2, Math.min(2.5, d - gl.done - 0.5)));
    else S.camera.push(1.1, gl.done + 0.6, Math.max(1, d - gl.done - 0.6));
  };

  // ───────────────────────── fallback ─────────────────────────
  function chunkNarration(text) {
    var ws = V.words && V.words.length ? V.words : null;
    var chunks = [];
    if (ws) {
      var curC = [];
      ws.forEach(function (w, i) {
        curC.push(w);
        if (/[.!?;:]$/.test(w.word) || curC.length >= 9 || i === ws.length - 1) { chunks.push({ text: curC.map(function (q) { return q.word; }).join(" "), at: curC[0].start, end: curC[curC.length - 1].end }); curC = []; }
      });
    } else {
      var words = str(text).split(/\s+/).filter(Boolean).slice(0, 600);
      var nC = Math.ceil(words.length / 9), span = V.duration / Math.max(1, nC);
      for (var k = 0; k < nC; k++) chunks.push({ text: words.slice(k * 9, k * 9 + 9).join(" "), at: k * span + 0.1, end: (k + 1) * span });
    }
    return chunks.slice(0, 80);
  }
  /** Guess a region and a place from narration text. */
  function guessGeo(text) {
    var t = " " + str(text).toLowerCase().replace(/[^a-z\s'-]/g, " ").replace(/\s+/g, " ") + " ";
    var ids = Object.keys(REGIONS), best = "world", bestI = 1e9;
    ids.forEach(function (id) {
      var R = REGIONS[id];
      var names = [id, str(R.name).toLowerCase()].concat(id === "usa" ? ["america", "united states", "u s"] : id === "uk" ? ["britain", "england"] : id === "egypt-nile" ? ["egypt", "nile"] : id === "middle-east" ? ["arabia", "saudi", "gulf"] : id === "south-america" ? ["brazil", "amazon"] : id === "antarctica" ? ["antarctic"] : []);
      names.forEach(function (n) { var i = t.indexOf(" " + n.replace(/-/g, " ") + " "); if (i >= 0 && i < bestI) { bestI = i; best = id; } });
    });
    if (best === "island" || best === "archipelago" || best === "continent" || best === "peninsula") best = "world";
    var R = REGIONS[best], place = null, pi = 1e9;
    Object.keys(R.anchors || {}).forEach(function (k) { if (k.length < 4) return; var i = t.indexOf(" " + k.replace(/-/g, " ") + " "); if (i >= 0 && i < pi) { pi = i; place = k; } });
    return { region: best, place: place };
  }
  S.guessGeo = guessGeo;
  /** Fallback: a slowly pushing satellite map of the region the narration mentions, with outlined captions. Never throws. */
  S.fallback = function (root, narration) {
    root = root || V.root();
    var text = narration != null ? narration : V.narration;
    try {
      M = null;
      root.innerHTML = "";
      var geo = guessGeo(text);
      var m = S.map(root, { region: geo.region });
      var d = V.duration;
      if (geo.place) {
        var tP = Math.max(0.6, V.at(geo.place.replace(/-/g, " ")) - 0.2);
        S.zone(geo.place, { at: tP, r: 0.08, color: "red" });
        S.ring(geo.place, { at: tP + 0.2, r: 0.05, color: "red" });
        S.arrow("auto", geo.place, { at: tP + 0.1 });
        S.label(geo.place, geo.place.replace(/-/g, " "), { at: tP + 0.6, pos: "above", dy: -20, box: true });
        S.camera.fly(geo.place, 1.5, tP - 0.2, 1.8);
      } else S.camera.push(1.14, 0, d);
      chunkNarration(text).forEach(function (c, i, all) {
        var nx = all[i + 1];
        S.caption(c.text, { at: Math.max(0.05, c.at - 0.1), end: nx ? Math.max(c.at + 0.4, nx.at - 0.12) : d + 1 });
      });
    } catch (e) {
      V.error("map fallback: " + (e && e.message));
      try {
        V.reset();
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "10%", fontSize: u(60) + "px", fontWeight: "900", textTransform: "uppercase", textAlign: "center", color: C.white, background: C.bg, fontFamily: HEAD, lineHeight: "1.1", textShadow: "0 " + u(4) + "px 0 #000, 0 0 " + u(20) + "px rgba(0,0,0,0.8)" } });
        t.textContent = str(text).split(/\s+/).slice(0, 18).join(" ");
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
      M = null;
      root.innerHTML = "";
      fn(props, root);
    } catch (e) {
      V.error("[map-reveal:" + id + "] " + (e && e.message ? e.message : String(e)));
      try { V.reset(); } catch (e2) {}
      S.fallback(root, V.narration);
    }
    return root;
  };
})();
