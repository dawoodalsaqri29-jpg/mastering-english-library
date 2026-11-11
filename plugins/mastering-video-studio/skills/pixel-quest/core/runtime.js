/* Scene scene runtime — deterministic, seekable-by-time animation engine.
 * Injected inline into every scene <head>. No dependencies, no network.
 * Exposes window.V (authoring API) and window.__scene (renderer contract).
 */
(function () {
  "use strict";
  if (window.__scene && window.V) return; // injected twice — keep first

  var VERSION = "__RUNTIME_VERSION__";
  var w = window;
  var doc = document;
  var html = doc.documentElement;

  // ─────────────────────────── input ───────────────────────────
  var input = w.__SCENE_INPUT__ || {};
  function num(v, d) {
    var n = typeof v === "number" ? v : parseFloat(v);
    return isFinite(n) ? n : d;
  }
  var DURATION = Math.max(0.1, num(input.duration, num(html.getAttribute("data-duration"), 5)));
  var WIDTH = Math.max(1, num(input.width, num(html.getAttribute("data-width"), w.innerWidth || 1920)));
  var HEIGHT = Math.max(1, num(input.height, num(html.getAttribute("data-height"), w.innerHeight || 1080)));
  var SEED = Math.floor(num(input.seed, num(html.getAttribute("data-seed"), 1))) >>> 0;
  var NARRATION = typeof input.narration === "string" ? input.narration : "";

  // ─────────────────────────── errors ───────────────────────────
  var errors = [];
  var errorSeen = {};
  function pushError(msg) {
    msg = String(msg == null ? "Unknown error" : msg).slice(0, 2000);
    if (errorSeen[msg]) return;
    errorSeen[msg] = 1;
    if (errors.length < 200) errors.push(msg);
  }
  function errText(e, where) {
    var m = e && e.message ? e.message : String(e);
    if (e && e.stack) {
      var line = String(e.stack).split("\n")[1];
      if (line) m += " @ " + line.trim();
    }
    return (where ? "[" + where + "] " : "") + (e && e.name && e.name !== "Error" ? e.name + ": " : "") + m;
  }
  w.addEventListener("error", function (ev) {
    pushError(errText(ev.error || ev.message || "Script error", "window"));
  });
  w.addEventListener("unhandledrejection", function (ev) {
    pushError(errText(ev.reason, "promise"));
  });
  if (Array.isArray(input.buildErrors)) input.buildErrors.forEach(pushError);

  // ─────────────────────────── seeded random ───────────────────────────
  function mulberry32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  var rand = mulberry32(SEED || 1);
  Math.random = mulberry32((SEED ^ 0x9e3779b9) >>> 0);

  // ─────────────────────────── virtual time ───────────────────────────
  var realSetTimeout = w.setTimeout.bind(w);
  var realClearTimeout = w.clearTimeout.bind(w);
  var EPOCH = Date.UTC(2025, 0, 1, 12, 0, 0);
  var now = 0; // virtual seconds
  var RealDate = Date;
  function vnowMs() {
    return EPOCH + Math.round(now * 1000);
  }
  function VDate() {
    var a = arguments;
    if (!(this instanceof VDate)) return new RealDate(vnowMs()).toString();
    if (a.length === 0) return new RealDate(vnowMs());
    var args = [null];
    for (var i = 0; i < a.length; i++) args.push(a[i]);
    return new (Function.prototype.bind.apply(RealDate, args))();
  }
  VDate.prototype = RealDate.prototype;
  VDate.now = vnowMs;
  VDate.UTC = RealDate.UTC;
  VDate.parse = RealDate.parse;
  try {
    w.Date = VDate;
  } catch (e) {}
  try {
    var perf = w.performance;
    Object.defineProperty(perf, "now", { value: function () { return now * 1000; }, configurable: true });
  } catch (e) {}

  // Virtual timers: fire (in order) during seek() when virtual time passes their due time.
  var timers = [];
  var timerId = 1;
  function addTimer(fn, ms, repeat, args) {
    if (typeof fn !== "function") return 0;
    var id = timerId++;
    ms = Math.max(repeat ? 16 : 0, num(ms, 0));
    timers.push({ id: id, fn: fn, due: now * 1000 + ms, ms: ms, repeat: repeat, args: args });
    return id;
  }
  function clearTimer(id) {
    for (var i = 0; i < timers.length; i++) if (timers[i].id === id) { timers.splice(i, 1); return; }
  }
  w.setTimeout = function (fn, ms) { return addTimer(fn, ms, false, [].slice.call(arguments, 2)); };
  w.setInterval = function (fn, ms) { return addTimer(fn, ms, true, [].slice.call(arguments, 2)); };
  w.clearTimeout = clearTimer;
  w.clearInterval = clearTimer;
  function runTimers() {
    var nowMs = now * 1000;
    var guard = 0;
    while (guard++ < 1000) {
      var best = -1;
      for (var i = 0; i < timers.length; i++) {
        if (timers[i].due <= nowMs + 1e-6 && (best < 0 || timers[i].due < timers[best].due)) best = i;
      }
      if (best < 0) break;
      var tm = timers[best];
      if (tm.repeat) tm.due += tm.ms;
      else timers.splice(best, 1);
      try { tm.fn.apply(w, tm.args); } catch (e) { pushError(errText(e, "timer")); }
    }
  }

  // requestAnimationFrame: callbacks run once on the next seek() (forward-only, best effort).
  var rafQ = [];
  var rafId = 1;
  w.requestAnimationFrame = function (fn) {
    var id = rafId++;
    rafQ.push({ id: id, fn: fn });
    return id;
  };
  w.cancelAnimationFrame = function (id) {
    for (var i = 0; i < rafQ.length; i++) if (rafQ[i].id === id) { rafQ.splice(i, 1); return; }
  };
  function runRaf() {
    var q = rafQ;
    rafQ = [];
    for (var i = 0; i < q.length; i++) {
      try { q[i].fn(now * 1000); } catch (e) { pushError(errText(e, "requestAnimationFrame")); }
    }
  }

  // No network.
  try {
    w.fetch = function () {
      pushError("Network access is disabled in scenes (fetch)");
      return Promise.reject(new Error("Network disabled"));
    };
  } catch (e) {}

  // ─────────────────────────── easing ───────────────────────────
  var c1 = 1.70158, c3 = c1 + 1, c4 = (2 * Math.PI) / 3;
  function outBounce(x) {
    var n1 = 7.5625, d1 = 2.75;
    if (x < 1 / d1) return n1 * x * x;
    if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75;
    if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375;
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
  var ease = {
    linear: function (x) { return x; },
    inQuad: function (x) { return x * x; },
    outQuad: function (x) { return 1 - (1 - x) * (1 - x); },
    inOutQuad: function (x) { return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; },
    inCubic: function (x) { return x * x * x; },
    outCubic: function (x) { return 1 - Math.pow(1 - x, 3); },
    inOutCubic: function (x) { return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; },
    inQuart: function (x) { return x * x * x * x; },
    outQuart: function (x) { return 1 - Math.pow(1 - x, 4); },
    inOutQuart: function (x) { return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2; },
    outQuint: function (x) { return 1 - Math.pow(1 - x, 5); },
    inOutQuint: function (x) { return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2; },
    inExpo: function (x) { return x === 0 ? 0 : Math.pow(2, 10 * x - 10); },
    outExpo: function (x) { return x === 1 ? 1 : 1 - Math.pow(2, -10 * x); },
    inOutExpo: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2;
    },
    inSine: function (x) { return 1 - Math.cos((x * Math.PI) / 2); },
    outSine: function (x) { return Math.sin((x * Math.PI) / 2); },
    inOutSine: function (x) { return -(Math.cos(Math.PI * x) - 1) / 2; },
    inCirc: function (x) { return 1 - Math.sqrt(1 - x * x); },
    outCirc: function (x) { return Math.sqrt(1 - Math.pow(x - 1, 2)); },
    inBack: function (x) { return c3 * x * x * x - c1 * x * x; },
    outBack: function (x) { return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); },
    inOutBack: function (x) {
      var c2 = c1 * 1.525;
      return x < 0.5
        ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    outElastic: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
    },
    outBounce: outBounce,
    /** Smooth spring-ish settle with slight overshoot. */
    spring: function (x) { return x >= 1 ? 1 : 1 - Math.cos(x * Math.PI * 2.5) * Math.exp(-6 * x); },
  };
  ease.out = ease.outCubic;
  ease["in"] = ease.inCubic;
  ease.inOut = ease.inOutCubic;
  function getEase(e) {
    if (typeof e === "function") return e;
    if (typeof e === "string" && ease[e]) return ease[e];
    return ease.outCubic;
  }

  // ─────────────────────────── value parsing ───────────────────────────
  var TRANSFORM_PROPS = { x: "px", y: "px", z: "px", xPercent: "%", yPercent: "%", scale: "", scaleX: "", scaleY: "", rotate: "deg", rotateX: "deg", rotateY: "deg", skewX: "deg", skewY: "deg" };
  var TRANSFORM_DEFAULTS = { x: 0, y: 0, z: 0, xPercent: 0, yPercent: 0, scale: 1, scaleX: 1, scaleY: 1, rotate: 0, rotateX: 0, rotateY: 0, skewX: 0, skewY: 0 };
  var UNITLESS = { opacity: 1, zIndex: 1, fontWeight: 1, lineHeight: 1, flexGrow: 1, flexShrink: 1, order: 1, fillOpacity: 1, strokeOpacity: 1, scale: 1 };
  var COLOR_PROPS = { color: 1, backgroundColor: 1, borderColor: 1, borderTopColor: 1, borderBottomColor: 1, borderLeftColor: 1, borderRightColor: 1, fill: 1, stroke: 1, outlineColor: 1, textDecorationColor: 1, stopColor: 1 };

  var colorCanvasCtx = null;
  var colorCache = {};
  function parseColor(s) {
    if (Array.isArray(s)) return s;
    s = String(s).trim();
    if (colorCache[s]) return colorCache[s];
    var m, out = null;
    if ((m = /^#([0-9a-f]{3,8})$/i.exec(s))) {
      var h = m[1];
      if (h.length === 3 || h.length === 4) h = h.replace(/./g, function (c) { return c + c; });
      out = [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16), h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1];
    } else if ((m = /^rgba?\(([^)]+)\)$/i.exec(s))) {
      var p = m[1].split(/[\s,\/]+/).filter(Boolean).map(parseFloat);
      out = [p[0] || 0, p[1] || 0, p[2] || 0, p.length > 3 ? p[3] : 1];
    } else if (s === "transparent") {
      out = [0, 0, 0, 0];
    } else {
      try {
        if (!colorCanvasCtx) colorCanvasCtx = doc.createElement("canvas").getContext("2d");
        colorCanvasCtx.fillStyle = "#000";
        colorCanvasCtx.fillStyle = s;
        var f = colorCanvasCtx.fillStyle;
        if (f !== s) out = parseColor(f);
      } catch (e) {}
    }
    if (out) colorCache[s] = out;
    return out;
  }
  function isColorString(v) {
    return typeof v === "string" && (/^#[0-9a-f]{3,8}$/i.test(v.trim()) || /^(rgb|hsl)a?\(/i.test(v.trim()) || v.trim() === "transparent");
  }
  var NUM_RE = /-?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/gi;
  function parseComplex(s) {
    s = String(s);
    var nums = [];
    var parts = s.split(NUM_RE);
    s.replace(NUM_RE, function (m) { nums.push(parseFloat(m)); return m; });
    return { nums: nums, parts: parts };
  }
  function kebab(p) {
    if (p.indexOf("--") === 0) return p;
    return p.replace(/[A-Z]/g, function (c) { return "-" + c.toLowerCase(); });
  }

  // ─────────────────────────── DOM targets ───────────────────────────
  function resolve(target) {
    if (!target) return [];
    if (typeof target === "string") {
      try { return [].slice.call(doc.querySelectorAll(target)); } catch (e) { pushError("Bad selector: " + target); return []; }
    }
    if (target.nodeType === 1) return [target];
    if (typeof target.length === "number") {
      var out = [];
      for (var i = 0; i < target.length; i++) out = out.concat(resolve(target[i]));
      return out;
    }
    return [];
  }

  // Per-element state
  var stateMap = new WeakMap();
  function stateOf(el) {
    var s = stateMap.get(el);
    if (!s) {
      s = { base: {}, tf: null, baseTransform: null, touchedTf: false };
      stateMap.set(el, s);
    }
    return s;
  }

  function readBase(el, prop) {
    var st = stateOf(el);
    if (prop in st.base) return st.base[prop];
    var v;
    if (prop in TRANSFORM_PROPS) v = TRANSFORM_DEFAULTS[prop];
    else if (prop === "text") v = parseFloat(String(el.textContent).replace(/[^0-9.\-]/g, "")) || 0;
    else if (prop === "draw") v = 1;
    else if (prop.indexOf("attr:") === 0) v = el.getAttribute(prop.slice(5));
    else {
      var cs = null;
      var inline = prop.indexOf("--") === 0 ? el.style.getPropertyValue(prop) : el.style[prop];
      if (inline !== undefined && inline !== null && inline !== "") v = inline;
      else {
        try { cs = getComputedStyle(el); } catch (e) {}
        v = cs ? (prop.indexOf("--") === 0 ? cs.getPropertyValue(prop) : cs[prop]) : "";
      }
      if (prop === "opacity" && (v === "" || v == null)) v = 1;
    }
    st.base[prop] = v;
    return v;
  }

  // Interpolate between two raw values for a prop. Returns raw value (number or string).
  function interp(prop, a, b, p) {
    if (typeof a === "number" && typeof b === "number") return a + (b - a) * p;
    if (COLOR_PROPS[prop] || isColorString(a) || isColorString(b)) {
      var ca = parseColor(a == null || a === "" ? b : a), cb = parseColor(b);
      if (ca && cb) {
        return "rgba(" + Math.round(ca[0] + (cb[0] - ca[0]) * p) + "," + Math.round(ca[1] + (cb[1] - ca[1]) * p) + "," + Math.round(ca[2] + (cb[2] - ca[2]) * p) + "," + +(ca[3] + (cb[3] - ca[3]) * p).toFixed(4) + ")";
      }
    }
    var pa = parseComplex(a == null ? "" : a), pb = parseComplex(b == null ? "" : b);
    if (typeof a === "number" && pb.nums.length === 1) {
      return pb.parts[0] + (a + (pb.nums[0] - a) * p) + (pb.parts[1] || "");
    }
    if (typeof b === "number" && pa.nums.length === 1) {
      return pa.parts[0] + (pa.nums[0] + (b - pa.nums[0]) * p) + (pa.parts[1] || "");
    }
    if (pa.nums.length && pa.nums.length === pb.nums.length) {
      var out = pb.parts[0];
      for (var i = 0; i < pb.nums.length; i++) out += (pa.nums[i] + (pb.nums[i] - pa.nums[i]) * p) + pb.parts[i + 1];
      return out;
    }
    return p < 1 ? a : b;
  }

  function toNumber(v, d) {
    if (typeof v === "number") return v;
    var n = parseFloat(v);
    return isFinite(n) ? n : d;
  }

  function applyValue(el, prop, v, seg) {
    var st = stateOf(el);
    if (prop in TRANSFORM_PROPS) {
      if (!st.tf) st.tf = {};
      st.tf[prop] = toNumber(v, TRANSFORM_DEFAULTS[prop]);
      st.touchedTf = true;
      return;
    }
    if (prop === "text") {
      var n = toNumber(v, 0);
      var fmt = seg && seg.format;
      var s;
      if (typeof fmt === "function") {
        try { s = fmt(n); } catch (e) { s = String(Math.round(n)); }
      } else {
        var dec = seg && seg.decimals != null ? seg.decimals : 0;
        s = (seg && seg.prefix ? seg.prefix : "") + formatNumber(n, dec, seg && seg.separator !== false) + (seg && seg.suffix ? seg.suffix : "");
      }
      if (el.textContent !== s) el.textContent = s;
      return;
    }
    if (prop === "draw") {
      var len = st.pathLen;
      if (len == null) {
        try { len = el.getTotalLength ? el.getTotalLength() : 0; } catch (e) { len = 0; }
        st.pathLen = len;
      }
      var d = Math.max(0, Math.min(1, toNumber(v, 1)));
      el.style.strokeDasharray = len + " " + len;
      el.style.strokeDashoffset = String(len * (1 - d));
      return;
    }
    if (prop.indexOf("attr:") === 0) {
      el.setAttribute(prop.slice(5), typeof v === "number" ? String(+v.toFixed(4)) : String(v));
      return;
    }
    var out = v;
    if (typeof v === "number") {
      if (UNITLESS[prop] || prop.indexOf("--") === 0) out = String(+v.toFixed(5));
      else out = +v.toFixed(4) + "px";
    }
    if (prop.indexOf("--") === 0) el.style.setProperty(prop, out);
    else el.style[prop] = out;
  }

  function formatNumber(n, decimals, sep) {
    var s = Math.abs(n).toFixed(decimals);
    if (sep) {
      var parts = s.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      s = parts.join(".");
    }
    return (n < 0 && +s.replace(/,/g, "") !== 0 ? "-" : "") + s;
  }

  function commitTransform(el) {
    var st = stateOf(el);
    if (!st.touchedTf) return;
    if (st.baseTransform == null) {
      // Preserve any transform the element already had (inline or from a stylesheet, e.g. translate(-50%,-50%)).
      var bt = el.style.transform && el.style.transform !== "none" ? el.style.transform : "";
      if (!bt) {
        try {
          var ct = getComputedStyle(el).transform;
          if (ct && ct !== "none") {
            // snap pure translations to whole pixels (crisper text, stable rasterization)
            var mm = /^matrix\(1, 0, 0, 1, (-?[\d.e-]+), (-?[\d.e-]+)\)$/.exec(ct);
            bt = mm ? "translate(" + Math.round(+mm[1]) + "px," + Math.round(+mm[2]) + "px)" : ct;
          }
        } catch (e) {}
      }
      st.baseTransform = bt;
    }
    var t = st.tf || {};
    function g(k) { return k in t ? t[k] : TRANSFORM_DEFAULTS[k]; }
    var parts = [];
    if (st.baseTransform) parts.push(st.baseTransform);
    var xp = g("xPercent"), yp = g("yPercent");
    if (xp || yp) parts.push("translate(" + xp + "%," + yp + "%)");
    var x = g("x"), y = g("y"), z = g("z");
    if (z) parts.push("translate3d(" + +x.toFixed(3) + "px," + +y.toFixed(3) + "px," + +z.toFixed(3) + "px)");
    else if (x || y) parts.push("translate(" + +x.toFixed(3) + "px," + +y.toFixed(3) + "px)");
    var r = g("rotate"); if (r) parts.push("rotate(" + +r.toFixed(3) + "deg)");
    var rx = g("rotateX"); if (rx) parts.push("rotateX(" + +rx.toFixed(3) + "deg)");
    var ry = g("rotateY"); if (ry) parts.push("rotateY(" + +ry.toFixed(3) + "deg)");
    var kx = g("skewX"), ky = g("skewY"); if (kx || ky) parts.push("skew(" + kx + "deg," + ky + "deg)");
    var s = g("scale"), sx = g("scaleX") * s, sy = g("scaleY") * s;
    if (sx !== 1 || sy !== 1) parts.push("scale(" + +sx.toFixed(5) + "," + +sy.toFixed(5) + ")");
    el.style.transform = parts.join(" ") || "none";
  }

  // ─────────────────────────── timeline ───────────────────────────
  // A "track" = (element, prop) with ordered segments. Value at time t is a pure function of t.
  var timelines = [];
  var tracks = []; // compiled list
  var trackIndex = new Map(); // el -> {prop -> track}
  var dirty = true;
  var segCounter = 0;

  function Timeline() {
    this._segs = [];
    this._calls = [];
    this._end = 0;
    timelines.push(this);
  }
  function normOpts(opts, fallbackAt) {
    if (typeof opts === "number") opts = { at: opts };
    opts = opts || {};
    var at = num(opts.at, fallbackAt);
    var dur = Math.max(0, num(opts.dur != null ? opts.dur : opts.duration, 0.6));
    return { at: Math.max(0, at), dur: dur, ease: getEase(opts.ease), stagger: num(opts.stagger, 0), opts: opts };
  }
  Timeline.prototype._add = function (target, from, to, o, kind) {
    var els = resolve(target);
    if (!els.length) {
      if (typeof target === "string") pushError("Timeline target not found: " + target);
      return this;
    }
    var self = this;
    var meta = {};
    if (to) {
      ["format", "decimals", "prefix", "suffix", "separator"].forEach(function (k) {
        if (k in to) { meta[k] = to[k]; }
      });
    }
    els.forEach(function (el, i) {
      var at = o.at + i * o.stagger;
      var keys = Object.keys(to || from || {});
      keys.forEach(function (prop) {
        if (prop in meta) return;
        var seg = {
          id: segCounter++,
          el: el,
          prop: prop,
          at: at,
          dur: kind === "set" ? 0 : o.dur,
          ease: o.ease,
          from: from && prop in from ? from[prop] : undefined,
          hasFrom: !!(from && prop in from),
          to: to && prop in to ? to[prop] : undefined,
          hasTo: !!(to && prop in to),
          kind: kind,
          format: meta.format,
          decimals: meta.decimals,
          prefix: meta.prefix,
          suffix: meta.suffix,
          separator: meta.separator,
        };
        self._segs.push(seg);
      });
      self._end = Math.max(self._end, at + (kind === "set" ? 0 : o.dur));
    });
    dirty = true;
    return this;
  };
  Timeline.prototype.to = function (target, props, opts) {
    return this._add(target, null, props || {}, normOpts(opts, this._end), "to");
  };
  Timeline.prototype.from = function (target, props, opts) {
    return this._add(target, props || {}, null, normOpts(opts, this._end), "from");
  };
  Timeline.prototype.fromTo = function (target, from, to, opts) {
    return this._add(target, from || {}, to || {}, normOpts(opts, this._end), "fromTo");
  };
  Timeline.prototype.set = function (target, props, at) {
    var o = normOpts(typeof at === "object" ? at : { at: at }, this._end);
    o.dur = 0;
    return this._add(target, null, props || {}, o, "set");
  };
  Timeline.prototype.call = function (fn, at) {
    if (typeof fn === "function") this._calls.push({ fn: fn, at: Math.max(0, num(at, 0)) });
    return this;
  };
  Timeline.prototype.duration = function () { return this._end; };
  Timeline.prototype.end = Timeline.prototype.duration;
  Timeline.prototype.clear = function () {
    this._segs = []; this._calls = []; this._end = 0; dirty = true; return this;
  };
  Timeline.prototype.kill = function () {
    this.clear();
    var i = timelines.indexOf(this);
    if (i >= 0) timelines.splice(i, 1);
  };

  function compile() {
    var map = new Map();
    var list = [];
    timelines.forEach(function (tl) {
      tl._segs.forEach(function (seg) {
        var byProp = map.get(seg.el);
        if (!byProp) { byProp = {}; map.set(seg.el, byProp); }
        var tr = byProp[seg.prop];
        if (!tr) { tr = { el: seg.el, prop: seg.prop, segs: [] }; byProp[seg.prop] = tr; list.push(tr); }
        tr.segs.push(seg);
      });
    });
    list.forEach(function (tr) {
      tr.segs.sort(function (a, b) { return a.at - b.at || a.id - b.id; });
      var base = readBase(tr.el, tr.prop);
      tr.base = base;
      var prev = base;
      // Resolve implicit from/to values (chain), so evaluation is a pure function of t.
      tr.segs.forEach(function (seg) {
        seg.fromV = seg.hasFrom ? seg.from : prev;
        seg.toV = seg.hasTo ? seg.to : seg.kind === "from" ? base : prev;
        prev = seg.toV;
      });
    });
    tracks = list;
    trackIndex = map;
    dirty = false;
  }

  function evalTrack(tr, t) {
    var segs = tr.segs;
    var active = null;
    for (var i = segs.length - 1; i >= 0; i--) {
      if (segs[i].at <= t + 1e-9) { active = segs[i]; break; }
    }
    if (!active) {
      var first = segs[0];
      // immediateRender: fromTo/from show their start state before they begin
      if (first.kind === "fromTo" || first.kind === "from") return { v: first.fromV, seg: first };
      return { v: tr.base, seg: first, isBase: true };
    }
    if (active.dur <= 0 || t >= active.at + active.dur) return { v: active.toV, seg: active };
    var p = (t - active.at) / active.dur;
    var e = active.ease(Math.max(0, Math.min(1, p)));
    return { v: interp(tr.prop, active.fromV, active.toV, e), seg: active };
  }

  // ─────────────────────────── word timings ───────────────────────────
  function normWord(s) {
    return String(s == null ? "" : s)
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^\p{L}\p{N}]+/gu, "");
  }
  var words = [];
  (Array.isArray(input.words) ? input.words : []).forEach(function (wd) {
    if (!wd || typeof wd.word !== "string") return;
    var s = num(wd.start, NaN), e = num(wd.end, NaN);
    if (!isFinite(s)) return;
    if (!isFinite(e) || e < s) e = s + 0.25;
    words.push({ word: wd.word, start: s, end: e });
  });
  words.sort(function (a, b) { return a.start - b.start; });
  var normWords = words.map(function (wd) { return normWord(wd.word); });

  function findIndex(phrase, after) {
    after = num(after, 0);
    var toks = String(phrase == null ? "" : phrase).split(/\s+/).map(normWord).filter(Boolean);
    if (!toks.length || !words.length) return -1;
    var pass, i, j;
    for (pass = 0; pass < 2; pass++) {
      for (i = 0; i < words.length; i++) {
        if (words[i].start < after - 1e-6) continue;
        var ok = true;
        for (j = 0; j < toks.length; j++) {
          var wn = normWords[i + j];
          if (wn == null) { ok = false; break; }
          if (pass === 0 ? wn !== toks[j] : !(toks[j].length >= 3 && wn.length >= 3 && (wn.indexOf(toks[j]) === 0 || toks[j].indexOf(wn) === 0))) { ok = false; break; }
        }
        if (ok) return i;
      }
    }
    return -1;
  }
  function find(phrase, after) {
    var i = findIndex(phrase, after);
    return i < 0 ? null : words[i].start;
  }
  function findEnd(phrase, after) {
    var i = findIndex(phrase, after);
    if (i < 0) return null;
    var n = String(phrase).split(/\s+/).map(normWord).filter(Boolean).length;
    return words[Math.min(words.length - 1, i + n - 1)].end;
  }
  function at(phrase, after) {
    var t = find(phrase, after);
    if (t != null) return t;
    after = Math.max(0, num(after, 0));
    // Proportional estimate from narration text position.
    var key = normWord(String(phrase).split(/\s+/)[0] || "");
    if (NARRATION && key) {
      var toks = NARRATION.split(/\s+/);
      var total = toks.length;
      for (var i = 0; i < total; i++) {
        var est = (i / Math.max(1, total)) * DURATION * 0.95;
        if (est >= after - 1e-6 && normWord(toks[i]) === key) return est;
      }
    }
    return Math.min(after, DURATION);
  }

  // ─────────────────────────── DOM helper ───────────────────────────
  var SVG_NS = "http://www.w3.org/2000/svg";
  var SVG_TAGS = { svg: 1, path: 1, circle: 1, rect: 1, line: 1, polyline: 1, polygon: 1, g: 1, ellipse: 1, text: 1, tspan: 1, defs: 1, linearGradient: 1, radialGradient: 1, stop: 1, clipPath: 1, mask: 1, pattern: 1, use: 1, filter: 1, feGaussianBlur: 1, feMerge: 1, feMergeNode: 1, feTurbulence: 1, feColorMatrix: 1, marker: 1 };
  function el(tag, attrs) {
    var parts = String(tag || "div").split(/(?=[.#])/);
    var name = parts[0] || "div";
    var isSvg = SVG_TAGS[name] === 1 || (attrs && attrs.svg === true);
    var node = isSvg ? doc.createElementNS(SVG_NS, name) : doc.createElement(name);
    for (var p = 1; p < parts.length; p++) {
      if (parts[p][0] === ".") node.classList.add(parts[p].slice(1));
      else if (parts[p][0] === "#") node.id = parts[p].slice(1);
    }
    if (attrs && typeof attrs === "object" && !attrs.nodeType && !Array.isArray(attrs)) {
      for (var k in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
        var v = attrs[k];
        if (v == null || v === false || k === "svg") continue;
        if (k === "class" || k === "className") {
          if (isSvg) node.setAttribute("class", ((node.getAttribute("class") || "") + " " + v).trim());
          else node.className = (node.className ? node.className + " " : "") + v;
        } else if (k === "style" && typeof v === "object") {
          for (var sk in v) {
            if (sk.indexOf("--") === 0) node.style.setProperty(sk, v[sk]);
            else node.style[sk] = typeof v[sk] === "number" && !UNITLESS[sk] ? v[sk] + "px" : v[sk];
          }
        } else if (k === "style") node.setAttribute("style", v);
        else if (k === "text") node.textContent = v;
        else if (k === "html") node.innerHTML = v;
        else if (k === "parent") { /* handled below */ }
        else if (k.indexOf("on") === 0 && typeof v === "function") { /* no events in renders */ }
        else node.setAttribute(k, v === true ? "" : v);
      }
    } else if (attrs != null) {
      appendKids(node, [attrs]);
    }
    appendKids(node, [].slice.call(arguments, 2));
    if (attrs && attrs.parent && attrs.parent.appendChild) attrs.parent.appendChild(node);
    return node;
  }
  function appendKids(node, kids) {
    kids.forEach(function (c) {
      if (c == null || c === false) return;
      if (Array.isArray(c)) appendKids(node, c);
      else if (c.nodeType) node.appendChild(c);
      else node.appendChild(doc.createTextNode(String(c)));
    });
  }

  // ─────────────────────────── text fitting ───────────────────────────
  /** Shrink font-size of el until its content fits its own box (and optional maxLines). */
  function fit(node, opts) {
    var els = resolve(node);
    opts = opts || {};
    els.forEach(function (e) {
      try {
        var cs = getComputedStyle(e);
        var size = parseFloat(cs.fontSize) || 16;
        var min = num(opts.min, Math.max(8, size * 0.35));
        var maxW = num(opts.maxWidth, 0), maxH = num(opts.maxHeight, 0);
        var lh = parseFloat(cs.lineHeight);
        var lhRatio = isFinite(lh) ? lh / size : 1.2;
        function fits() {
          var w0 = maxW || e.clientWidth, h0 = maxH || e.clientHeight;
          var fsNow = parseFloat(e.style.fontSize) || size;
          if (e.scrollWidth > w0) return false;
          if (maxH) {
            if (e.scrollHeight > h0 + 1) return false;
          } else if (e.clientHeight && e.scrollHeight > e.clientHeight + Math.max(2, fsNow * 0.3)) {
            return false; // real overflow of a fixed-height box (ignore glyph ink overflow)
          }
          if (opts.maxLines) {
            var lines = e.getBoundingClientRect().height / (fsNow * lhRatio);
            if (lines > opts.maxLines + 0.3) return false;
          }
          return true;
        }
        // Measure with normal wrapping so long words shrink the font instead of breaking mid-word.
        var ow = e.style.overflowWrap, wb = e.style.wordBreak;
        e.style.overflowWrap = "normal";
        e.style.wordBreak = "normal";
        if (!fits()) {
          var lo = min, hi = size, best = min;
          for (var i = 0; i < 12 && hi - lo > 0.5; i++) {
            var mid = (lo + hi) / 2;
            e.style.fontSize = mid + "px";
            if (fits()) { best = mid; lo = mid; } else hi = mid;
          }
          e.style.fontSize = best * 0.98 + "px"; // sub-pixel safety margin
        }
        e.style.overflowWrap = ow;
        e.style.wordBreak = wb;
      } catch (err) {
        pushError(errText(err, "fit"));
      }
    });
  }

  // ─────────────────────────── frame loop ───────────────────────────
  var frameFns = [];
  var builders = [];
  var built = false;
  var lastT = -1;
  var touchedEls = [];

  function seek(t) {
    t = num(t, 0);
    if (t < 0) t = 0;
    now = t;
    try {
      if (dirty) compile();
      var tfEls = [];
      for (var i = 0; i < tracks.length; i++) {
        var tr = tracks[i];
        try {
          var r = evalTrack(tr, t);
          applyValue(tr.el, tr.prop, r.v, r.seg);
          if (tr.prop in TRANSFORM_PROPS) tfEls.push(tr.el);
        } catch (e) {
          pushError(errText(e, "tween " + tr.prop));
        }
      }
      for (var j = 0; j < tfEls.length; j++) commitTransform(tfEls[j]);
      timelines.forEach(function (tl) {
        tl._calls.forEach(function (c) {
          if (t + 1e-9 >= c.at) {
            try { c.fn(t); } catch (e) { pushError(errText(e, "timeline.call")); }
          }
        });
      });
    } catch (e) {
      pushError(errText(e, "seek"));
    }
    for (var k = 0; k < frameFns.length; k++) {
      try { frameFns[k](t); } catch (e) { pushError(errText(e, "onFrame")); }
    }
    // CSS animations / Web Animations: pause and pin to virtual time.
    try {
      if (doc.getAnimations) {
        var anims = doc.getAnimations();
        for (var a = 0; a < anims.length; a++) {
          try { anims[a].pause(); anims[a].currentTime = t * 1000; } catch (e) {}
        }
      }
    } catch (e) {}
    if (t >= lastT) runTimers();
    runRaf();
    lastT = t;
  }

  // ─────────────────────────── ready ───────────────────────────
  var resolveReady;
  var ready = new Promise(function (r) { resolveReady = r; });

  function build(fn) {
    if (typeof fn !== "function") return;
    if (built) {
      try { fn(V, w.SceneStyle, rootEl()); } catch (e) { pushError(errText(e, "build")); }
      dirty = true;
      return;
    }
    builders.push(fn);
  }
  function rootEl() {
    var r = doc.getElementById("scene-root");
    if (!r) {
      r = doc.createElement("div");
      r.id = "scene-root";
      (doc.body || html).appendChild(r);
    }
    return r;
  }

  function start() {
    var fontsReady = Promise.resolve();
    try { if (doc.fonts && doc.fonts.ready) fontsReady = doc.fonts.ready; } catch (e) {}
    var timeout = new Promise(function (r) { realSetTimeout(r, 2500); });
    Promise.race([fontsReady, timeout]).then(function () {
      var root = rootEl();
      for (var i = 0; i < builders.length; i++) {
        try { builders[i](V, w.SceneStyle, root); } catch (e) { pushError(errText(e, "build")); }
      }
      built = true;
      var again = Promise.resolve();
      try { if (doc.fonts && doc.fonts.ready) again = doc.fonts.ready; } catch (e) {}
      var timeout2 = new Promise(function (r) { realSetTimeout(r, 1500); });
      return Promise.race([again, timeout2]).then(function () {
        try { seek(0); } catch (e) { pushError(errText(e, "seek")); }
        resolveReady();
      });
    }).catch(function (e) { pushError(errText(e, "start")); built = true; resolveReady(); });
  }

  // Root sizing variables available to CSS before build.
  var UNIT = Math.min(WIDTH, HEIGHT) / 1080;
  var ASPECT = WIDTH / HEIGHT;
  var ORIENT = ASPECT > 1.15 ? "landscape" : ASPECT < 0.87 ? "portrait" : "square";
  try {
    html.style.setProperty("--u", UNIT + "px");
    html.style.setProperty("--w", WIDTH + "px");
    html.style.setProperty("--h", HEIGHT + "px");
    html.classList.add("is-" + ORIENT);
    html.setAttribute("data-orientation", ORIENT);
  } catch (e) {}

  // ─────────────────────────── public API ───────────────────────────
  var V = {
    version: VERSION,
    timeline: function () { return new Timeline(); },
    ease: ease,
    words: words,
    narration: NARRATION,
    duration: DURATION,
    width: WIDTH,
    height: HEIGHT,
    unit: UNIT,
    orientation: ORIENT,
    isPortrait: ORIENT === "portrait",
    isLandscape: ORIENT === "landscape",
    isSquare: ORIENT === "square",
    seed: SEED,
    at: at,
    find: find,
    findEnd: findEnd,
    wordIndex: findIndex,
    onFrame: function (f) { if (typeof f === "function") frameFns.push(f); },
    el: el,
    $: function (sel, ctx) { return (ctx || doc).querySelector(sel); },
    $$: function (sel, ctx) { return [].slice.call((ctx || doc).querySelectorAll(sel)); },
    rand: rand,
    random: function (min, max) { return min + rand() * (max - min); },
    randInt: function (min, max) { return Math.floor(min + rand() * (max - min + 1)); },
    pick: function (arr) { return arr[Math.floor(rand() * arr.length)]; },
    makeRand: function (seed) { return mulberry32((num(seed, 1) >>> 0) || 1); },
    s: function (px) { return px * UNIT; },
    clamp: function (v, a, b) { return Math.max(a, Math.min(b, v)); },
    lerp: function (a, b, p) { return a + (b - a) * p; },
    /** 0..1 progress of t between a and b, optionally eased */
    progress: function (t, a, b, e) {
      var p = b > a ? Math.max(0, Math.min(1, (t - a) / (b - a))) : t >= b ? 1 : 0;
      return e ? getEase(e)(p) : p;
    },
    map: function (v, a, b, c, d) { return c + ((v - a) / (b - a || 1)) * (d - c); },
    fit: fit,
    format: function (n, decimals, separators) { return formatNumber(Number(n) || 0, decimals || 0, separators !== false); },
    build: build,
    root: rootEl,
    time: function () { return now; },
    error: pushError,
    /** Remove all timelines, frame functions and timers (used before rendering a fallback). */
    reset: function () {
      timelines.slice().forEach(function (tl) { tl.kill(); });
      frameFns.length = 0;
      timers.length = 0;
      rafQ.length = 0;
      dirty = true;
    },
  };

  w.V = V;
  w.__scene = {
    version: VERSION,
    ready: ready,
    duration: DURATION,
    seek: seek,
    errors: errors,
  };

  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", start);
  else realSetTimeout(start, 0);
})();
