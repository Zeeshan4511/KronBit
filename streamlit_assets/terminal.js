function Fv(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var id = { exports: {} }, A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rs = Symbol.for("react.element"), Bv = Symbol.for("react.portal"), Vv = Symbol.for("react.fragment"), Iv = Symbol.for("react.strict_mode"), jv = Symbol.for("react.profiler"), Uv = Symbol.for("react.provider"), Wv = Symbol.for("react.context"), Hv = Symbol.for("react.forward_ref"), Kv = Symbol.for("react.suspense"), Xv = Symbol.for("react.memo"), qv = Symbol.for("react.lazy"), bh = Symbol.iterator;
function Qv(t) {
  return t === null || typeof t != "object" ? null : (t = bh && t[bh] || t["@@iterator"], typeof t == "function" ? t : null);
}
var sd = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, rd = Object.assign, ld = {};
function xi(t, e, n) {
  this.props = t, this.context = e, this.refs = ld, this.updater = n || sd;
}
xi.prototype.isReactComponent = {};
xi.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, e, "setState");
};
xi.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function od() {
}
od.prototype = xi.prototype;
function eu(t, e, n) {
  this.props = t, this.context = e, this.refs = ld, this.updater = n || sd;
}
var tu = eu.prototype = new od();
tu.constructor = eu;
rd(tu, xi.prototype);
tu.isPureReactComponent = !0;
var _h = Array.isArray, ad = Object.prototype.hasOwnProperty, nu = { current: null }, ud = { key: !0, ref: !0, __self: !0, __source: !0 };
function hd(t, e, n) {
  var i, s = {}, r = null, l = null;
  if (e != null) for (i in e.ref !== void 0 && (l = e.ref), e.key !== void 0 && (r = "" + e.key), e) ad.call(e, i) && !ud.hasOwnProperty(i) && (s[i] = e[i]);
  var o = arguments.length - 2;
  if (o === 1) s.children = n;
  else if (1 < o) {
    for (var a = Array(o), u = 0; u < o; u++) a[u] = arguments[u + 2];
    s.children = a;
  }
  if (t && t.defaultProps) for (i in o = t.defaultProps, o) s[i] === void 0 && (s[i] = o[i]);
  return { $$typeof: Rs, type: t, key: r, ref: l, props: s, _owner: nu.current };
}
function Jv(t, e) {
  return { $$typeof: Rs, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function iu(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Rs;
}
function Gv(t) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + t.replace(/[=:]/g, function(n) {
    return e[n];
  });
}
var kh = /\/+/g;
function Wl(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? Gv("" + t.key) : e.toString(36);
}
function Er(t, e, n, i, s) {
  var r = typeof t;
  (r === "undefined" || r === "boolean") && (t = null);
  var l = !1;
  if (t === null) l = !0;
  else switch (r) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (t.$$typeof) {
        case Rs:
        case Bv:
          l = !0;
      }
  }
  if (l) return l = t, s = s(l), t = i === "" ? "." + Wl(l, 0) : i, _h(s) ? (n = "", t != null && (n = t.replace(kh, "$&/") + "/"), Er(s, e, n, "", function(u) {
    return u;
  })) : s != null && (iu(s) && (s = Jv(s, n + (!s.key || l && l.key === s.key ? "" : ("" + s.key).replace(kh, "$&/") + "/") + t)), e.push(s)), 1;
  if (l = 0, i = i === "" ? "." : i + ":", _h(t)) for (var o = 0; o < t.length; o++) {
    r = t[o];
    var a = i + Wl(r, o);
    l += Er(r, e, n, a, s);
  }
  else if (a = Qv(t), typeof a == "function") for (t = a.call(t), o = 0; !(r = t.next()).done; ) r = r.value, a = i + Wl(r, o++), l += Er(r, e, n, a, s);
  else if (r === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Ws(t, e, n) {
  if (t == null) return t;
  var i = [], s = 0;
  return Er(t, i, "", "", function(r) {
    return e.call(n, r, s++);
  }), i;
}
function Yv(t) {
  if (t._status === -1) {
    var e = t._result;
    e = e(), e.then(function(n) {
      (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n);
    }, function(n) {
      (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n);
    }), t._status === -1 && (t._status = 0, t._result = e);
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Pe = { current: null }, br = { transition: null }, Zv = { ReactCurrentDispatcher: Pe, ReactCurrentBatchConfig: br, ReactCurrentOwner: nu };
function cd() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = { map: Ws, forEach: function(t, e, n) {
  Ws(t, function() {
    e.apply(this, arguments);
  }, n);
}, count: function(t) {
  var e = 0;
  return Ws(t, function() {
    e++;
  }), e;
}, toArray: function(t) {
  return Ws(t, function(e) {
    return e;
  }) || [];
}, only: function(t) {
  if (!iu(t)) throw Error("React.Children.only expected to receive a single React element child.");
  return t;
} };
A.Component = xi;
A.Fragment = Vv;
A.Profiler = jv;
A.PureComponent = eu;
A.StrictMode = Iv;
A.Suspense = Kv;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zv;
A.act = cd;
A.cloneElement = function(t, e, n) {
  if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
  var i = rd({}, t.props), s = t.key, r = t.ref, l = t._owner;
  if (e != null) {
    if (e.ref !== void 0 && (r = e.ref, l = nu.current), e.key !== void 0 && (s = "" + e.key), t.type && t.type.defaultProps) var o = t.type.defaultProps;
    for (a in e) ad.call(e, a) && !ud.hasOwnProperty(a) && (i[a] = e[a] === void 0 && o !== void 0 ? o[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    o = Array(a);
    for (var u = 0; u < a; u++) o[u] = arguments[u + 2];
    i.children = o;
  }
  return { $$typeof: Rs, type: t.type, key: s, ref: r, props: i, _owner: l };
};
A.createContext = function(t) {
  return t = { $$typeof: Wv, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: Uv, _context: t }, t.Consumer = t;
};
A.createElement = hd;
A.createFactory = function(t) {
  var e = hd.bind(null, t);
  return e.type = t, e;
};
A.createRef = function() {
  return { current: null };
};
A.forwardRef = function(t) {
  return { $$typeof: Hv, render: t };
};
A.isValidElement = iu;
A.lazy = function(t) {
  return { $$typeof: qv, _payload: { _status: -1, _result: t }, _init: Yv };
};
A.memo = function(t, e) {
  return { $$typeof: Xv, type: t, compare: e === void 0 ? null : e };
};
A.startTransition = function(t) {
  var e = br.transition;
  br.transition = {};
  try {
    t();
  } finally {
    br.transition = e;
  }
};
A.unstable_act = cd;
A.useCallback = function(t, e) {
  return Pe.current.useCallback(t, e);
};
A.useContext = function(t) {
  return Pe.current.useContext(t);
};
A.useDebugValue = function() {
};
A.useDeferredValue = function(t) {
  return Pe.current.useDeferredValue(t);
};
A.useEffect = function(t, e) {
  return Pe.current.useEffect(t, e);
};
A.useId = function() {
  return Pe.current.useId();
};
A.useImperativeHandle = function(t, e, n) {
  return Pe.current.useImperativeHandle(t, e, n);
};
A.useInsertionEffect = function(t, e) {
  return Pe.current.useInsertionEffect(t, e);
};
A.useLayoutEffect = function(t, e) {
  return Pe.current.useLayoutEffect(t, e);
};
A.useMemo = function(t, e) {
  return Pe.current.useMemo(t, e);
};
A.useReducer = function(t, e, n) {
  return Pe.current.useReducer(t, e, n);
};
A.useRef = function(t) {
  return Pe.current.useRef(t);
};
A.useState = function(t) {
  return Pe.current.useState(t);
};
A.useSyncExternalStore = function(t, e, n) {
  return Pe.current.useSyncExternalStore(t, e, n);
};
A.useTransition = function() {
  return Pe.current.useTransition();
};
A.version = "18.3.1";
id.exports = A;
var W = id.exports;
const d = /* @__PURE__ */ Fv(W);
var fd = { exports: {} }, Ke = {}, dd = { exports: {} }, pd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
  function e(R, L) {
    var D = R.length;
    R.push(L);
    e: for (; 0 < D; ) {
      var j = D - 1 >>> 1, se = R[j];
      if (0 < s(se, L)) R[j] = L, R[D] = se, D = j;
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function i(R) {
    if (R.length === 0) return null;
    var L = R[0], D = R.pop();
    if (D !== L) {
      R[0] = D;
      e: for (var j = 0, se = R.length, Ve = se >>> 1; j < Ve; ) {
        var X = 2 * (j + 1) - 1, rt = R[X], Me = X + 1, gt = R[Me];
        if (0 > s(rt, D)) Me < se && 0 > s(gt, rt) ? (R[j] = gt, R[Me] = D, j = Me) : (R[j] = rt, R[X] = D, j = X);
        else if (Me < se && 0 > s(gt, D)) R[j] = gt, R[Me] = D, j = Me;
        else break e;
      }
    }
    return L;
  }
  function s(R, L) {
    var D = R.sortIndex - L.sortIndex;
    return D !== 0 ? D : R.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var r = performance;
    t.unstable_now = function() {
      return r.now();
    };
  } else {
    var l = Date, o = l.now();
    t.unstable_now = function() {
      return l.now() - o;
    };
  }
  var a = [], u = [], h = 1, c = null, f = 3, m = !1, w = !1, y = !1, b = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(R) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) i(u);
      else if (L.startTime <= R) i(u), L.sortIndex = L.expirationTime, e(a, L);
      else break;
      L = n(u);
    }
  }
  function E(R) {
    if (y = !1, v(R), !w) if (n(a) !== null) w = !0, he(_);
    else {
      var L = n(u);
      L !== null && qe(E, L.startTime - R);
    }
  }
  function _(R, L) {
    w = !1, y && (y = !1, g(x), x = -1), m = !0;
    var D = f;
    try {
      for (v(L), c = n(a); c !== null && (!(c.expirationTime > L) || R && !F()); ) {
        var j = c.callback;
        if (typeof j == "function") {
          c.callback = null, f = c.priorityLevel;
          var se = j(c.expirationTime <= L);
          L = t.unstable_now(), typeof se == "function" ? c.callback = se : c === n(a) && i(a), v(L);
        } else i(a);
        c = n(a);
      }
      if (c !== null) var Ve = !0;
      else {
        var X = n(u);
        X !== null && qe(E, X.startTime - L), Ve = !1;
      }
      return Ve;
    } finally {
      c = null, f = D, m = !1;
    }
  }
  var k = !1, C = null, x = -1, T = 5, O = -1;
  function F() {
    return !(t.unstable_now() - O < T);
  }
  function K() {
    if (C !== null) {
      var R = t.unstable_now();
      O = R;
      var L = !0;
      try {
        L = C(!0, R);
      } finally {
        L ? ne() : (k = !1, C = null);
      }
    } else k = !1;
  }
  var ne;
  if (typeof p == "function") ne = function() {
    p(K);
  };
  else if (typeof MessageChannel < "u") {
    var st = new MessageChannel(), jt = st.port2;
    st.port1.onmessage = K, ne = function() {
      jt.postMessage(null);
    };
  } else ne = function() {
    b(K, 0);
  };
  function he(R) {
    C = R, k || (k = !0, ne());
  }
  function qe(R, L) {
    x = b(function() {
      R(t.unstable_now());
    }, L);
  }
  t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, t.unstable_continueExecution = function() {
    w || m || (w = !0, he(_));
  }, t.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < R ? Math.floor(1e3 / R) : 5;
  }, t.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, t.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, t.unstable_next = function(R) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = f;
    }
    var D = f;
    f = L;
    try {
      return R();
    } finally {
      f = D;
    }
  }, t.unstable_pauseExecution = function() {
  }, t.unstable_requestPaint = function() {
  }, t.unstable_runWithPriority = function(R, L) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var D = f;
    f = R;
    try {
      return L();
    } finally {
      f = D;
    }
  }, t.unstable_scheduleCallback = function(R, L, D) {
    var j = t.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? j + D : j) : D = j, R) {
      case 1:
        var se = -1;
        break;
      case 2:
        se = 250;
        break;
      case 5:
        se = 1073741823;
        break;
      case 4:
        se = 1e4;
        break;
      default:
        se = 5e3;
    }
    return se = D + se, R = { id: h++, callback: L, priorityLevel: R, startTime: D, expirationTime: se, sortIndex: -1 }, D > j ? (R.sortIndex = D, e(u, R), n(a) === null && R === n(u) && (y ? (g(x), x = -1) : y = !0, qe(E, D - j))) : (R.sortIndex = se, e(a, R), w || m || (w = !0, he(_))), R;
  }, t.unstable_shouldYield = F, t.unstable_wrapCallback = function(R) {
    var L = f;
    return function() {
      var D = f;
      f = L;
      try {
        return R.apply(this, arguments);
      } finally {
        f = D;
      }
    };
  };
})(pd);
dd.exports = pd;
var eg = dd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tg = W, He = eg;
function z(t) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var md = /* @__PURE__ */ new Set(), os = {};
function In(t, e) {
  vi(t, e), vi(t + "Capture", e);
}
function vi(t, e) {
  for (os[t] = e, t = 0; t < e.length; t++) md.add(e[t]);
}
var Dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xo = Object.prototype.hasOwnProperty, ng = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, xh = {}, Ch = {};
function ig(t) {
  return Xo.call(Ch, t) ? !0 : Xo.call(xh, t) ? !1 : ng.test(t) ? Ch[t] = !0 : (xh[t] = !0, !1);
}
function sg(t, e, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function rg(t, e, n, i) {
  if (e === null || typeof e > "u" || sg(t, e, n, i)) return !0;
  if (i) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !e;
    case 4:
      return e === !1;
    case 5:
      return isNaN(e);
    case 6:
      return isNaN(e) || 1 > e;
  }
  return !1;
}
function Oe(t, e, n, i, s, r, l) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = i, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = r, this.removeEmptyString = l;
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
  Se[t] = new Oe(t, 0, !1, t, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
  var e = t[0];
  Se[e] = new Oe(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
  Se[t] = new Oe(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
  Se[t] = new Oe(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
  Se[t] = new Oe(t, 3, !1, t.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
  Se[t] = new Oe(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function(t) {
  Se[t] = new Oe(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(t) {
  Se[t] = new Oe(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function(t) {
  Se[t] = new Oe(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var su = /[\-:]([a-z])/g;
function ru(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
  var e = t.replace(
    su,
    ru
  );
  Se[e] = new Oe(e, 1, !1, t, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
  var e = t.replace(su, ru);
  Se[e] = new Oe(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
  var e = t.replace(su, ru);
  Se[e] = new Oe(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(t) {
  Se[t] = new Oe(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
  Se[t] = new Oe(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function lu(t, e, n, i) {
  var s = Se.hasOwnProperty(e) ? Se[e] : null;
  (s !== null ? s.type !== 0 : i || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (rg(e, n, s, i) && (n = null), i || s === null ? ig(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : s.mustUseProperty ? t[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (e = s.attributeName, i = s.attributeNamespace, n === null ? t.removeAttribute(e) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))));
}
var It = tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Hs = Symbol.for("react.element"), Xn = Symbol.for("react.portal"), qn = Symbol.for("react.fragment"), ou = Symbol.for("react.strict_mode"), qo = Symbol.for("react.profiler"), vd = Symbol.for("react.provider"), gd = Symbol.for("react.context"), au = Symbol.for("react.forward_ref"), Qo = Symbol.for("react.suspense"), Jo = Symbol.for("react.suspense_list"), uu = Symbol.for("react.memo"), Kt = Symbol.for("react.lazy"), yd = Symbol.for("react.offscreen"), Mh = Symbol.iterator;
function Pi(t) {
  return t === null || typeof t != "object" ? null : (t = Mh && t[Mh] || t["@@iterator"], typeof t == "function" ? t : null);
}
var te = Object.assign, Hl;
function Wi(t) {
  if (Hl === void 0) try {
    throw Error();
  } catch (n) {
    var e = n.stack.trim().match(/\n( *(at )?)/);
    Hl = e && e[1] || "";
  }
  return `
` + Hl + t;
}
var Kl = !1;
function Xl(t, e) {
  if (!t || Kl) return "";
  Kl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e) if (e = function() {
      throw Error();
    }, Object.defineProperty(e.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(e, []);
      } catch (u) {
        var i = u;
      }
      Reflect.construct(t, [], e);
    } else {
      try {
        e.call();
      } catch (u) {
        i = u;
      }
      t.call(e.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        i = u;
      }
      t();
    }
  } catch (u) {
    if (u && i && typeof u.stack == "string") {
      for (var s = u.stack.split(`
`), r = i.stack.split(`
`), l = s.length - 1, o = r.length - 1; 1 <= l && 0 <= o && s[l] !== r[o]; ) o--;
      for (; 1 <= l && 0 <= o; l--, o--) if (s[l] !== r[o]) {
        if (l !== 1 || o !== 1)
          do
            if (l--, o--, 0 > o || s[l] !== r[o]) {
              var a = `
` + s[l].replace(" at new ", " at ");
              return t.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", t.displayName)), a;
            }
          while (1 <= l && 0 <= o);
        break;
      }
    }
  } finally {
    Kl = !1, Error.prepareStackTrace = n;
  }
  return (t = t ? t.displayName || t.name : "") ? Wi(t) : "";
}
function lg(t) {
  switch (t.tag) {
    case 5:
      return Wi(t.type);
    case 16:
      return Wi("Lazy");
    case 13:
      return Wi("Suspense");
    case 19:
      return Wi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return t = Xl(t.type, !1), t;
    case 11:
      return t = Xl(t.type.render, !1), t;
    case 1:
      return t = Xl(t.type, !0), t;
    default:
      return "";
  }
}
function Go(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case qn:
      return "Fragment";
    case Xn:
      return "Portal";
    case qo:
      return "Profiler";
    case ou:
      return "StrictMode";
    case Qo:
      return "Suspense";
    case Jo:
      return "SuspenseList";
  }
  if (typeof t == "object") switch (t.$$typeof) {
    case gd:
      return (t.displayName || "Context") + ".Consumer";
    case vd:
      return (t._context.displayName || "Context") + ".Provider";
    case au:
      var e = t.render;
      return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
    case uu:
      return e = t.displayName || null, e !== null ? e : Go(t.type) || "Memo";
    case Kt:
      e = t._payload, t = t._init;
      try {
        return Go(t(e));
      } catch {
      }
  }
  return null;
}
function og(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Go(e);
    case 8:
      return e === ou ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function hn(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function wd(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function ag(t) {
  var e = wd(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), i = "" + t[e];
  if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var s = n.get, r = n.set;
    return Object.defineProperty(t, e, { configurable: !0, get: function() {
      return s.call(this);
    }, set: function(l) {
      i = "" + l, r.call(this, l);
    } }), Object.defineProperty(t, e, { enumerable: n.enumerable }), { getValue: function() {
      return i;
    }, setValue: function(l) {
      i = "" + l;
    }, stopTracking: function() {
      t._valueTracker = null, delete t[e];
    } };
  }
}
function Ks(t) {
  t._valueTracker || (t._valueTracker = ag(t));
}
function Sd(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(), i = "";
  return t && (i = wd(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), !0) : !1;
}
function Br(t) {
  if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Yo(t, e) {
  var n = e.checked;
  return te({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? t._wrapperState.initialChecked });
}
function zh(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue, i = e.checked != null ? e.checked : e.defaultChecked;
  n = hn(e.value != null ? e.value : n), t._wrapperState = { initialChecked: i, initialValue: n, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function Ed(t, e) {
  e = e.checked, e != null && lu(t, "checked", e, !1);
}
function Zo(t, e) {
  Ed(t, e);
  var n = hn(e.value), i = e.type;
  if (n != null) i === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
  else if (i === "submit" || i === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? ea(t, e.type, n) : e.hasOwnProperty("defaultValue") && ea(t, e.type, hn(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function Nh(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var i = e.type;
    if (!(i !== "submit" && i !== "reset" || e.value !== void 0 && e.value !== null)) return;
    e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e;
  }
  n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n);
}
function ea(t, e, n) {
  (e !== "number" || Br(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Hi = Array.isArray;
function ai(t, e, n, i) {
  if (t = t.options, e) {
    e = {};
    for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
    for (n = 0; n < t.length; n++) s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && i && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + hn(n), e = null, s = 0; s < t.length; s++) {
      if (t[s].value === n) {
        t[s].selected = !0, i && (t[s].defaultSelected = !0);
        return;
      }
      e !== null || t[s].disabled || (e = t[s]);
    }
    e !== null && (e.selected = !0);
  }
}
function ta(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(z(91));
  return te({}, e, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
}
function Rh(t, e) {
  var n = e.value;
  if (n == null) {
    if (n = e.children, e = e.defaultValue, n != null) {
      if (e != null) throw Error(z(92));
      if (Hi(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), n = e;
  }
  t._wrapperState = { initialValue: hn(n) };
}
function bd(t, e) {
  var n = hn(e.value), i = hn(e.defaultValue);
  n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), i != null && (t.defaultValue = "" + i);
}
function Ph(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function _d(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function na(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml" ? _d(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
}
var Xs, kd = function(t) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, i, s) {
    MSApp.execUnsafeLocalFunction(function() {
      return t(e, n, i, s);
    });
  } : t;
}(function(t, e) {
  if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
  else {
    for (Xs = Xs || document.createElement("div"), Xs.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Xs.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
    for (; e.firstChild; ) t.appendChild(e.firstChild);
  }
});
function as(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var qi = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, ug = ["Webkit", "ms", "Moz", "O"];
Object.keys(qi).forEach(function(t) {
  ug.forEach(function(e) {
    e = e + t.charAt(0).toUpperCase() + t.substring(1), qi[e] = qi[t];
  });
});
function xd(t, e, n) {
  return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || qi.hasOwnProperty(t) && qi[t] ? ("" + e).trim() : e + "px";
}
function Cd(t, e) {
  t = t.style;
  for (var n in e) if (e.hasOwnProperty(n)) {
    var i = n.indexOf("--") === 0, s = xd(n, e[n], i);
    n === "float" && (n = "cssFloat"), i ? t.setProperty(n, s) : t[n] = s;
  }
}
var hg = te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ia(t, e) {
  if (e) {
    if (hg[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(z(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(z(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(z(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(z(62));
  }
}
function sa(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ra = null;
function hu(t) {
  return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
}
var la = null, ui = null, hi = null;
function Oh(t) {
  if (t = Ts(t)) {
    if (typeof la != "function") throw Error(z(280));
    var e = t.stateNode;
    e && (e = wl(e), la(t.stateNode, t.type, e));
  }
}
function Md(t) {
  ui ? hi ? hi.push(t) : hi = [t] : ui = t;
}
function zd() {
  if (ui) {
    var t = ui, e = hi;
    if (hi = ui = null, Oh(t), e) for (t = 0; t < e.length; t++) Oh(e[t]);
  }
}
function Nd(t, e) {
  return t(e);
}
function Rd() {
}
var ql = !1;
function Pd(t, e, n) {
  if (ql) return t(e, n);
  ql = !0;
  try {
    return Nd(t, e, n);
  } finally {
    ql = !1, (ui !== null || hi !== null) && (Rd(), zd());
  }
}
function us(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var i = wl(n);
  if (i === null) return null;
  n = i[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(z(231, e, typeof n));
  return n;
}
var oa = !1;
if (Dt) try {
  var Oi = {};
  Object.defineProperty(Oi, "passive", { get: function() {
    oa = !0;
  } }), window.addEventListener("test", Oi, Oi), window.removeEventListener("test", Oi, Oi);
} catch {
  oa = !1;
}
function cg(t, e, n, i, s, r, l, o, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (h) {
    this.onError(h);
  }
}
var Qi = !1, Vr = null, Ir = !1, aa = null, fg = { onError: function(t) {
  Qi = !0, Vr = t;
} };
function dg(t, e, n, i, s, r, l, o, a) {
  Qi = !1, Vr = null, cg.apply(fg, arguments);
}
function pg(t, e, n, i, s, r, l, o, a) {
  if (dg.apply(this, arguments), Qi) {
    if (Qi) {
      var u = Vr;
      Qi = !1, Vr = null;
    } else throw Error(z(198));
    Ir || (Ir = !0, aa = u);
  }
}
function jn(t) {
  var e = t, n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do
      e = t, e.flags & 4098 && (n = e.return), t = e.return;
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function Od(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
  }
  return null;
}
function Th(t) {
  if (jn(t) !== t) throw Error(z(188));
}
function mg(t) {
  var e = t.alternate;
  if (!e) {
    if (e = jn(t), e === null) throw Error(z(188));
    return e !== t ? null : t;
  }
  for (var n = t, i = e; ; ) {
    var s = n.return;
    if (s === null) break;
    var r = s.alternate;
    if (r === null) {
      if (i = s.return, i !== null) {
        n = i;
        continue;
      }
      break;
    }
    if (s.child === r.child) {
      for (r = s.child; r; ) {
        if (r === n) return Th(s), t;
        if (r === i) return Th(s), e;
        r = r.sibling;
      }
      throw Error(z(188));
    }
    if (n.return !== i.return) n = s, i = r;
    else {
      for (var l = !1, o = s.child; o; ) {
        if (o === n) {
          l = !0, n = s, i = r;
          break;
        }
        if (o === i) {
          l = !0, i = s, n = r;
          break;
        }
        o = o.sibling;
      }
      if (!l) {
        for (o = r.child; o; ) {
          if (o === n) {
            l = !0, n = r, i = s;
            break;
          }
          if (o === i) {
            l = !0, i = r, n = s;
            break;
          }
          o = o.sibling;
        }
        if (!l) throw Error(z(189));
      }
    }
    if (n.alternate !== i) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? t : e;
}
function Td(t) {
  return t = mg(t), t !== null ? Ld(t) : null;
}
function Ld(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Ld(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Dd = He.unstable_scheduleCallback, Lh = He.unstable_cancelCallback, vg = He.unstable_shouldYield, gg = He.unstable_requestPaint, re = He.unstable_now, yg = He.unstable_getCurrentPriorityLevel, cu = He.unstable_ImmediatePriority, $d = He.unstable_UserBlockingPriority, jr = He.unstable_NormalPriority, wg = He.unstable_LowPriority, Ad = He.unstable_IdlePriority, ml = null, _t = null;
function Sg(t) {
  if (_t && typeof _t.onCommitFiberRoot == "function") try {
    _t.onCommitFiberRoot(ml, t, void 0, (t.current.flags & 128) === 128);
  } catch {
  }
}
var ct = Math.clz32 ? Math.clz32 : _g, Eg = Math.log, bg = Math.LN2;
function _g(t) {
  return t >>>= 0, t === 0 ? 32 : 31 - (Eg(t) / bg | 0) | 0;
}
var qs = 64, Qs = 4194304;
function Ki(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Ur(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var i = 0, s = t.suspendedLanes, r = t.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var o = l & ~s;
    o !== 0 ? i = Ki(o) : (r &= l, r !== 0 && (i = Ki(r)));
  } else l = n & ~s, l !== 0 ? i = Ki(l) : r !== 0 && (i = Ki(r));
  if (i === 0) return 0;
  if (e !== 0 && e !== i && !(e & s) && (s = i & -i, r = e & -e, s >= r || s === 16 && (r & 4194240) !== 0)) return e;
  if (i & 4 && (i |= n & 16), e = t.entangledLanes, e !== 0) for (t = t.entanglements, e &= i; 0 < e; ) n = 31 - ct(e), s = 1 << n, i |= t[n], e &= ~s;
  return i;
}
function kg(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function xg(t, e) {
  for (var n = t.suspendedLanes, i = t.pingedLanes, s = t.expirationTimes, r = t.pendingLanes; 0 < r; ) {
    var l = 31 - ct(r), o = 1 << l, a = s[l];
    a === -1 ? (!(o & n) || o & i) && (s[l] = kg(o, e)) : a <= e && (t.expiredLanes |= o), r &= ~o;
  }
}
function ua(t) {
  return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function Fd() {
  var t = qs;
  return qs <<= 1, !(qs & 4194240) && (qs = 64), t;
}
function Ql(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Ps(t, e, n) {
  t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - ct(e), t[e] = n;
}
function Cg(t, e) {
  var n = t.pendingLanes & ~e;
  t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
  var i = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var s = 31 - ct(n), r = 1 << s;
    e[s] = 0, i[s] = -1, t[s] = -1, n &= ~r;
  }
}
function fu(t, e) {
  var n = t.entangledLanes |= e;
  for (t = t.entanglements; n; ) {
    var i = 31 - ct(n), s = 1 << i;
    s & e | t[i] & e && (t[i] |= e), n &= ~s;
  }
}
var I = 0;
function Bd(t) {
  return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Vd, du, Id, jd, Ud, ha = !1, Js = [], en = null, tn = null, nn = null, hs = /* @__PURE__ */ new Map(), cs = /* @__PURE__ */ new Map(), qt = [], Mg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Dh(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      nn = null;
      break;
    case "pointerover":
    case "pointerout":
      hs.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      cs.delete(e.pointerId);
  }
}
function Ti(t, e, n, i, s, r) {
  return t === null || t.nativeEvent !== r ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: i, nativeEvent: r, targetContainers: [s] }, e !== null && (e = Ts(e), e !== null && du(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t);
}
function zg(t, e, n, i, s) {
  switch (e) {
    case "focusin":
      return en = Ti(en, t, e, n, i, s), !0;
    case "dragenter":
      return tn = Ti(tn, t, e, n, i, s), !0;
    case "mouseover":
      return nn = Ti(nn, t, e, n, i, s), !0;
    case "pointerover":
      var r = s.pointerId;
      return hs.set(r, Ti(hs.get(r) || null, t, e, n, i, s)), !0;
    case "gotpointercapture":
      return r = s.pointerId, cs.set(r, Ti(cs.get(r) || null, t, e, n, i, s)), !0;
  }
  return !1;
}
function Wd(t) {
  var e = En(t.target);
  if (e !== null) {
    var n = jn(e);
    if (n !== null) {
      if (e = n.tag, e === 13) {
        if (e = Od(n), e !== null) {
          t.blockedOn = e, Ud(t.priority, function() {
            Id(n);
          });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function _r(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = ca(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var i = new n.constructor(n.type, n);
      ra = i, n.target.dispatchEvent(i), ra = null;
    } else return e = Ts(n), e !== null && du(e), t.blockedOn = n, !1;
    e.shift();
  }
  return !0;
}
function $h(t, e, n) {
  _r(t) && n.delete(e);
}
function Ng() {
  ha = !1, en !== null && _r(en) && (en = null), tn !== null && _r(tn) && (tn = null), nn !== null && _r(nn) && (nn = null), hs.forEach($h), cs.forEach($h);
}
function Li(t, e) {
  t.blockedOn === e && (t.blockedOn = null, ha || (ha = !0, He.unstable_scheduleCallback(He.unstable_NormalPriority, Ng)));
}
function fs(t) {
  function e(s) {
    return Li(s, t);
  }
  if (0 < Js.length) {
    Li(Js[0], t);
    for (var n = 1; n < Js.length; n++) {
      var i = Js[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
  }
  for (en !== null && Li(en, t), tn !== null && Li(tn, t), nn !== null && Li(nn, t), hs.forEach(e), cs.forEach(e), n = 0; n < qt.length; n++) i = qt[n], i.blockedOn === t && (i.blockedOn = null);
  for (; 0 < qt.length && (n = qt[0], n.blockedOn === null); ) Wd(n), n.blockedOn === null && qt.shift();
}
var ci = It.ReactCurrentBatchConfig, Wr = !0;
function Rg(t, e, n, i) {
  var s = I, r = ci.transition;
  ci.transition = null;
  try {
    I = 1, pu(t, e, n, i);
  } finally {
    I = s, ci.transition = r;
  }
}
function Pg(t, e, n, i) {
  var s = I, r = ci.transition;
  ci.transition = null;
  try {
    I = 4, pu(t, e, n, i);
  } finally {
    I = s, ci.transition = r;
  }
}
function pu(t, e, n, i) {
  if (Wr) {
    var s = ca(t, e, n, i);
    if (s === null) ro(t, e, i, Hr, n), Dh(t, i);
    else if (zg(s, t, e, n, i)) i.stopPropagation();
    else if (Dh(t, i), e & 4 && -1 < Mg.indexOf(t)) {
      for (; s !== null; ) {
        var r = Ts(s);
        if (r !== null && Vd(r), r = ca(t, e, n, i), r === null && ro(t, e, i, Hr, n), r === s) break;
        s = r;
      }
      s !== null && i.stopPropagation();
    } else ro(t, e, i, null, n);
  }
}
var Hr = null;
function ca(t, e, n, i) {
  if (Hr = null, t = hu(i), t = En(t), t !== null) if (e = jn(t), e === null) t = null;
  else if (n = e.tag, n === 13) {
    if (t = Od(e), t !== null) return t;
    t = null;
  } else if (n === 3) {
    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
    t = null;
  } else e !== t && (t = null);
  return Hr = t, null;
}
function Hd(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (yg()) {
        case cu:
          return 1;
        case $d:
          return 4;
        case jr:
        case wg:
          return 16;
        case Ad:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null, mu = null, kr = null;
function Kd() {
  if (kr) return kr;
  var t, e = mu, n = e.length, i, s = "value" in Jt ? Jt.value : Jt.textContent, r = s.length;
  for (t = 0; t < n && e[t] === s[t]; t++) ;
  var l = n - t;
  for (i = 1; i <= l && e[n - i] === s[r - i]; i++) ;
  return kr = s.slice(t, 1 < i ? 1 - i : void 0);
}
function xr(t) {
  var e = t.keyCode;
  return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
}
function Gs() {
  return !0;
}
function Ah() {
  return !1;
}
function Xe(t) {
  function e(n, i, s, r, l) {
    this._reactName = n, this._targetInst = s, this.type = i, this.nativeEvent = r, this.target = l, this.currentTarget = null;
    for (var o in t) t.hasOwnProperty(o) && (n = t[o], this[o] = n ? n(r) : r[o]);
    return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Gs : Ah, this.isPropagationStopped = Ah, this;
  }
  return te(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Gs);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Gs);
  }, persist: function() {
  }, isPersistent: Gs }), e;
}
var Ci = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
  return t.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, vu = Xe(Ci), Os = te({}, Ci, { view: 0, detail: 0 }), Og = Xe(Os), Jl, Gl, Di, vl = te({}, Os, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gu, button: 0, buttons: 0, relatedTarget: function(t) {
  return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
}, movementX: function(t) {
  return "movementX" in t ? t.movementX : (t !== Di && (Di && t.type === "mousemove" ? (Jl = t.screenX - Di.screenX, Gl = t.screenY - Di.screenY) : Gl = Jl = 0, Di = t), Jl);
}, movementY: function(t) {
  return "movementY" in t ? t.movementY : Gl;
} }), Fh = Xe(vl), Tg = te({}, vl, { dataTransfer: 0 }), Lg = Xe(Tg), Dg = te({}, Os, { relatedTarget: 0 }), Yl = Xe(Dg), $g = te({}, Ci, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ag = Xe($g), Fg = te({}, Ci, { clipboardData: function(t) {
  return "clipboardData" in t ? t.clipboardData : window.clipboardData;
} }), Bg = Xe(Fg), Vg = te({}, Ci, { data: 0 }), Bh = Xe(Vg), Ig = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, jg = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Ug = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Wg(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = Ug[t]) ? !!e[t] : !1;
}
function gu() {
  return Wg;
}
var Hg = te({}, Os, { key: function(t) {
  if (t.key) {
    var e = Ig[t.key] || t.key;
    if (e !== "Unidentified") return e;
  }
  return t.type === "keypress" ? (t = xr(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? jg[t.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gu, charCode: function(t) {
  return t.type === "keypress" ? xr(t) : 0;
}, keyCode: function(t) {
  return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
}, which: function(t) {
  return t.type === "keypress" ? xr(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
} }), Kg = Xe(Hg), Xg = te({}, vl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Vh = Xe(Xg), qg = te({}, Os, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gu }), Qg = Xe(qg), Jg = te({}, Ci, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gg = Xe(Jg), Yg = te({}, vl, {
  deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  },
  deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zg = Xe(Yg), e0 = [9, 13, 27, 32], yu = Dt && "CompositionEvent" in window, Ji = null;
Dt && "documentMode" in document && (Ji = document.documentMode);
var t0 = Dt && "TextEvent" in window && !Ji, Xd = Dt && (!yu || Ji && 8 < Ji && 11 >= Ji), Ih = " ", jh = !1;
function qd(t, e) {
  switch (t) {
    case "keyup":
      return e0.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Qd(t) {
  return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
}
var Qn = !1;
function n0(t, e) {
  switch (t) {
    case "compositionend":
      return Qd(e);
    case "keypress":
      return e.which !== 32 ? null : (jh = !0, Ih);
    case "textInput":
      return t = e.data, t === Ih && jh ? null : t;
    default:
      return null;
  }
}
function i0(t, e) {
  if (Qn) return t === "compositionend" || !yu && qd(t, e) ? (t = Kd(), kr = mu = Jt = null, Qn = !1, t) : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Xd && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var s0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Uh(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!s0[t.type] : e === "textarea";
}
function Jd(t, e, n, i) {
  Md(i), e = Kr(e, "onChange"), 0 < e.length && (n = new vu("onChange", "change", null, n, i), t.push({ event: n, listeners: e }));
}
var Gi = null, ds = null;
function r0(t) {
  op(t, 0);
}
function gl(t) {
  var e = Yn(t);
  if (Sd(e)) return t;
}
function l0(t, e) {
  if (t === "change") return e;
}
var Gd = !1;
if (Dt) {
  var Zl;
  if (Dt) {
    var eo = "oninput" in document;
    if (!eo) {
      var Wh = document.createElement("div");
      Wh.setAttribute("oninput", "return;"), eo = typeof Wh.oninput == "function";
    }
    Zl = eo;
  } else Zl = !1;
  Gd = Zl && (!document.documentMode || 9 < document.documentMode);
}
function Hh() {
  Gi && (Gi.detachEvent("onpropertychange", Yd), ds = Gi = null);
}
function Yd(t) {
  if (t.propertyName === "value" && gl(ds)) {
    var e = [];
    Jd(e, ds, t, hu(t)), Pd(r0, e);
  }
}
function o0(t, e, n) {
  t === "focusin" ? (Hh(), Gi = e, ds = n, Gi.attachEvent("onpropertychange", Yd)) : t === "focusout" && Hh();
}
function a0(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown") return gl(ds);
}
function u0(t, e) {
  if (t === "click") return gl(e);
}
function h0(t, e) {
  if (t === "input" || t === "change") return gl(e);
}
function c0(t, e) {
  return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
}
var dt = typeof Object.is == "function" ? Object.is : c0;
function ps(t, e) {
  if (dt(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
  var n = Object.keys(t), i = Object.keys(e);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var s = n[i];
    if (!Xo.call(e, s) || !dt(t[s], e[s])) return !1;
  }
  return !0;
}
function Kh(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Xh(t, e) {
  var n = Kh(t);
  t = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (i = t + n.textContent.length, t <= e && i >= e) return { node: n, offset: e - t };
      t = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Kh(n);
  }
}
function Zd(t, e) {
  return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Zd(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
}
function ep() {
  for (var t = window, e = Br(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Br(t.document);
  }
  return e;
}
function wu(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
}
function f0(t) {
  var e = ep(), n = t.focusedElem, i = t.selectionRange;
  if (e !== n && n && n.ownerDocument && Zd(n.ownerDocument.documentElement, n)) {
    if (i !== null && wu(n)) {
      if (e = i.start, t = i.end, t === void 0 && (t = e), "selectionStart" in n) n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
      else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
        t = t.getSelection();
        var s = n.textContent.length, r = Math.min(i.start, s);
        i = i.end === void 0 ? r : Math.min(i.end, s), !t.extend && r > i && (s = i, i = r, r = s), s = Xh(n, r);
        var l = Xh(
          n,
          i
        );
        s && l && (t.rangeCount !== 1 || t.anchorNode !== s.node || t.anchorOffset !== s.offset || t.focusNode !== l.node || t.focusOffset !== l.offset) && (e = e.createRange(), e.setStart(s.node, s.offset), t.removeAllRanges(), r > i ? (t.addRange(e), t.extend(l.node, l.offset)) : (e.setEnd(l.node, l.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; t = t.parentNode; ) t.nodeType === 1 && e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++) t = e[n], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
  }
}
var d0 = Dt && "documentMode" in document && 11 >= document.documentMode, Jn = null, fa = null, Yi = null, da = !1;
function qh(t, e, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  da || Jn == null || Jn !== Br(i) || (i = Jn, "selectionStart" in i && wu(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Yi && ps(Yi, i) || (Yi = i, i = Kr(fa, "onSelect"), 0 < i.length && (e = new vu("onSelect", "select", null, e, n), t.push({ event: e, listeners: i }), e.target = Jn)));
}
function Ys(t, e) {
  var n = {};
  return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
}
var Gn = { animationend: Ys("Animation", "AnimationEnd"), animationiteration: Ys("Animation", "AnimationIteration"), animationstart: Ys("Animation", "AnimationStart"), transitionend: Ys("Transition", "TransitionEnd") }, to = {}, tp = {};
Dt && (tp = document.createElement("div").style, "AnimationEvent" in window || (delete Gn.animationend.animation, delete Gn.animationiteration.animation, delete Gn.animationstart.animation), "TransitionEvent" in window || delete Gn.transitionend.transition);
function yl(t) {
  if (to[t]) return to[t];
  if (!Gn[t]) return t;
  var e = Gn[t], n;
  for (n in e) if (e.hasOwnProperty(n) && n in tp) return to[t] = e[n];
  return t;
}
var np = yl("animationend"), ip = yl("animationiteration"), sp = yl("animationstart"), rp = yl("transitionend"), lp = /* @__PURE__ */ new Map(), Qh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function pn(t, e) {
  lp.set(t, e), In(e, [t]);
}
for (var no = 0; no < Qh.length; no++) {
  var io = Qh[no], p0 = io.toLowerCase(), m0 = io[0].toUpperCase() + io.slice(1);
  pn(p0, "on" + m0);
}
pn(np, "onAnimationEnd");
pn(ip, "onAnimationIteration");
pn(sp, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(rp, "onTransitionEnd");
vi("onMouseEnter", ["mouseout", "mouseover"]);
vi("onMouseLeave", ["mouseout", "mouseover"]);
vi("onPointerEnter", ["pointerout", "pointerover"]);
vi("onPointerLeave", ["pointerout", "pointerover"]);
In("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
In("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
In("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), v0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));
function Jh(t, e, n) {
  var i = t.type || "unknown-event";
  t.currentTarget = n, pg(i, e, void 0, t), t.currentTarget = null;
}
function op(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var i = t[n], s = i.event;
    i = i.listeners;
    e: {
      var r = void 0;
      if (e) for (var l = i.length - 1; 0 <= l; l--) {
        var o = i[l], a = o.instance, u = o.currentTarget;
        if (o = o.listener, a !== r && s.isPropagationStopped()) break e;
        Jh(s, o, u), r = a;
      }
      else for (l = 0; l < i.length; l++) {
        if (o = i[l], a = o.instance, u = o.currentTarget, o = o.listener, a !== r && s.isPropagationStopped()) break e;
        Jh(s, o, u), r = a;
      }
    }
  }
  if (Ir) throw t = aa, Ir = !1, aa = null, t;
}
function Q(t, e) {
  var n = e[ya];
  n === void 0 && (n = e[ya] = /* @__PURE__ */ new Set());
  var i = t + "__bubble";
  n.has(i) || (ap(e, t, 2, !1), n.add(i));
}
function so(t, e, n) {
  var i = 0;
  e && (i |= 4), ap(n, t, i, e);
}
var Zs = "_reactListening" + Math.random().toString(36).slice(2);
function ms(t) {
  if (!t[Zs]) {
    t[Zs] = !0, md.forEach(function(n) {
      n !== "selectionchange" && (v0.has(n) || so(n, !1, t), so(n, !0, t));
    });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Zs] || (e[Zs] = !0, so("selectionchange", !1, e));
  }
}
function ap(t, e, n, i) {
  switch (Hd(e)) {
    case 1:
      var s = Rg;
      break;
    case 4:
      s = Pg;
      break;
    default:
      s = pu;
  }
  n = s.bind(null, e, n, t), s = void 0, !oa || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), i ? s !== void 0 ? t.addEventListener(e, n, { capture: !0, passive: s }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, { passive: s }) : t.addEventListener(e, n, !1);
}
function ro(t, e, n, i, s) {
  var r = i;
  if (!(e & 1) && !(e & 2) && i !== null) e: for (; ; ) {
    if (i === null) return;
    var l = i.tag;
    if (l === 3 || l === 4) {
      var o = i.stateNode.containerInfo;
      if (o === s || o.nodeType === 8 && o.parentNode === s) break;
      if (l === 4) for (l = i.return; l !== null; ) {
        var a = l.tag;
        if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === s || a.nodeType === 8 && a.parentNode === s)) return;
        l = l.return;
      }
      for (; o !== null; ) {
        if (l = En(o), l === null) return;
        if (a = l.tag, a === 5 || a === 6) {
          i = r = l;
          continue e;
        }
        o = o.parentNode;
      }
    }
    i = i.return;
  }
  Pd(function() {
    var u = r, h = hu(n), c = [];
    e: {
      var f = lp.get(t);
      if (f !== void 0) {
        var m = vu, w = t;
        switch (t) {
          case "keypress":
            if (xr(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = Kg;
            break;
          case "focusin":
            w = "focus", m = Yl;
            break;
          case "focusout":
            w = "blur", m = Yl;
            break;
          case "beforeblur":
          case "afterblur":
            m = Yl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Fh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Lg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Qg;
            break;
          case np:
          case ip:
          case sp:
            m = Ag;
            break;
          case rp:
            m = Gg;
            break;
          case "scroll":
            m = Og;
            break;
          case "wheel":
            m = Zg;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Bg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Vh;
        }
        var y = (e & 4) !== 0, b = !y && t === "scroll", g = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var E = v.stateNode;
          if (v.tag === 5 && E !== null && (v = E, g !== null && (E = us(p, g), E != null && y.push(vs(p, E, v)))), b) break;
          p = p.return;
        }
        0 < y.length && (f = new m(f, w, null, n, h), c.push({ event: f, listeners: y }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (f = t === "mouseover" || t === "pointerover", m = t === "mouseout" || t === "pointerout", f && n !== ra && (w = n.relatedTarget || n.fromElement) && (En(w) || w[$t])) break e;
        if ((m || f) && (f = h.window === h ? h : (f = h.ownerDocument) ? f.defaultView || f.parentWindow : window, m ? (w = n.relatedTarget || n.toElement, m = u, w = w ? En(w) : null, w !== null && (b = jn(w), w !== b || w.tag !== 5 && w.tag !== 6) && (w = null)) : (m = null, w = u), m !== w)) {
          if (y = Fh, E = "onMouseLeave", g = "onMouseEnter", p = "mouse", (t === "pointerout" || t === "pointerover") && (y = Vh, E = "onPointerLeave", g = "onPointerEnter", p = "pointer"), b = m == null ? f : Yn(m), v = w == null ? f : Yn(w), f = new y(E, p + "leave", m, n, h), f.target = b, f.relatedTarget = v, E = null, En(h) === u && (y = new y(g, p + "enter", w, n, h), y.target = v, y.relatedTarget = b, E = y), b = E, m && w) t: {
            for (y = m, g = w, p = 0, v = y; v; v = Wn(v)) p++;
            for (v = 0, E = g; E; E = Wn(E)) v++;
            for (; 0 < p - v; ) y = Wn(y), p--;
            for (; 0 < v - p; ) g = Wn(g), v--;
            for (; p--; ) {
              if (y === g || g !== null && y === g.alternate) break t;
              y = Wn(y), g = Wn(g);
            }
            y = null;
          }
          else y = null;
          m !== null && Gh(c, f, m, y, !1), w !== null && b !== null && Gh(c, b, w, y, !0);
        }
      }
      e: {
        if (f = u ? Yn(u) : window, m = f.nodeName && f.nodeName.toLowerCase(), m === "select" || m === "input" && f.type === "file") var _ = l0;
        else if (Uh(f)) if (Gd) _ = h0;
        else {
          _ = a0;
          var k = o0;
        }
        else (m = f.nodeName) && m.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (_ = u0);
        if (_ && (_ = _(t, u))) {
          Jd(c, _, n, h);
          break e;
        }
        k && k(t, f, u), t === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && ea(f, "number", f.value);
      }
      switch (k = u ? Yn(u) : window, t) {
        case "focusin":
          (Uh(k) || k.contentEditable === "true") && (Jn = k, fa = u, Yi = null);
          break;
        case "focusout":
          Yi = fa = Jn = null;
          break;
        case "mousedown":
          da = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          da = !1, qh(c, n, h);
          break;
        case "selectionchange":
          if (d0) break;
        case "keydown":
        case "keyup":
          qh(c, n, h);
      }
      var C;
      if (yu) e: {
        switch (t) {
          case "compositionstart":
            var x = "onCompositionStart";
            break e;
          case "compositionend":
            x = "onCompositionEnd";
            break e;
          case "compositionupdate":
            x = "onCompositionUpdate";
            break e;
        }
        x = void 0;
      }
      else Qn ? qd(t, n) && (x = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x && (Xd && n.locale !== "ko" && (Qn || x !== "onCompositionStart" ? x === "onCompositionEnd" && Qn && (C = Kd()) : (Jt = h, mu = "value" in Jt ? Jt.value : Jt.textContent, Qn = !0)), k = Kr(u, x), 0 < k.length && (x = new Bh(x, t, null, n, h), c.push({ event: x, listeners: k }), C ? x.data = C : (C = Qd(n), C !== null && (x.data = C)))), (C = t0 ? n0(t, n) : i0(t, n)) && (u = Kr(u, "onBeforeInput"), 0 < u.length && (h = new Bh("onBeforeInput", "beforeinput", null, n, h), c.push({ event: h, listeners: u }), h.data = C));
    }
    op(c, e);
  });
}
function vs(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Kr(t, e) {
  for (var n = e + "Capture", i = []; t !== null; ) {
    var s = t, r = s.stateNode;
    s.tag === 5 && r !== null && (s = r, r = us(t, n), r != null && i.unshift(vs(t, r, s)), r = us(t, e), r != null && i.push(vs(t, r, s))), t = t.return;
  }
  return i;
}
function Wn(t) {
  if (t === null) return null;
  do
    t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Gh(t, e, n, i, s) {
  for (var r = e._reactName, l = []; n !== null && n !== i; ) {
    var o = n, a = o.alternate, u = o.stateNode;
    if (a !== null && a === i) break;
    o.tag === 5 && u !== null && (o = u, s ? (a = us(n, r), a != null && l.unshift(vs(n, a, o))) : s || (a = us(n, r), a != null && l.push(vs(n, a, o)))), n = n.return;
  }
  l.length !== 0 && t.push({ event: e, listeners: l });
}
var g0 = /\r\n?/g, y0 = /\u0000|\uFFFD/g;
function Yh(t) {
  return (typeof t == "string" ? t : "" + t).replace(g0, `
`).replace(y0, "");
}
function er(t, e, n) {
  if (e = Yh(e), Yh(t) !== e && n) throw Error(z(425));
}
function Xr() {
}
var pa = null, ma = null;
function va(t, e) {
  return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var ga = typeof setTimeout == "function" ? setTimeout : void 0, w0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Zh = typeof Promise == "function" ? Promise : void 0, S0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zh < "u" ? function(t) {
  return Zh.resolve(null).then(t).catch(E0);
} : ga;
function E0(t) {
  setTimeout(function() {
    throw t;
  });
}
function lo(t, e) {
  var n = e, i = 0;
  do {
    var s = n.nextSibling;
    if (t.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
      if (i === 0) {
        t.removeChild(s), fs(e);
        return;
      }
      i--;
    } else n !== "$" && n !== "$?" && n !== "$!" || i++;
    n = s;
  } while (n);
  fs(e);
}
function sn(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (e = t.data, e === "$" || e === "$!" || e === "$?") break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function ec(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Mi = Math.random().toString(36).slice(2), Et = "__reactFiber$" + Mi, gs = "__reactProps$" + Mi, $t = "__reactContainer$" + Mi, ya = "__reactEvents$" + Mi, b0 = "__reactListeners$" + Mi, _0 = "__reactHandles$" + Mi;
function En(t) {
  var e = t[Et];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if (e = n[$t] || n[Et]) {
      if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = ec(t); t !== null; ) {
        if (n = t[Et]) return n;
        t = ec(t);
      }
      return e;
    }
    t = n, n = t.parentNode;
  }
  return null;
}
function Ts(t) {
  return t = t[Et] || t[$t], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
}
function Yn(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(z(33));
}
function wl(t) {
  return t[gs] || null;
}
var wa = [], Zn = -1;
function mn(t) {
  return { current: t };
}
function G(t) {
  0 > Zn || (t.current = wa[Zn], wa[Zn] = null, Zn--);
}
function H(t, e) {
  Zn++, wa[Zn] = t.current, t.current = e;
}
var cn = {}, Ce = mn(cn), De = mn(!1), Nn = cn;
function gi(t, e) {
  var n = t.type.contextTypes;
  if (!n) return cn;
  var i = t.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === e) return i.__reactInternalMemoizedMaskedChildContext;
  var s = {}, r;
  for (r in n) s[r] = e[r];
  return i && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = s), s;
}
function $e(t) {
  return t = t.childContextTypes, t != null;
}
function qr() {
  G(De), G(Ce);
}
function tc(t, e, n) {
  if (Ce.current !== cn) throw Error(z(168));
  H(Ce, e), H(De, n);
}
function up(t, e, n) {
  var i = t.stateNode;
  if (e = e.childContextTypes, typeof i.getChildContext != "function") return n;
  i = i.getChildContext();
  for (var s in i) if (!(s in e)) throw Error(z(108, og(t) || "Unknown", s));
  return te({}, n, i);
}
function Qr(t) {
  return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || cn, Nn = Ce.current, H(Ce, t), H(De, De.current), !0;
}
function nc(t, e, n) {
  var i = t.stateNode;
  if (!i) throw Error(z(169));
  n ? (t = up(t, e, Nn), i.__reactInternalMemoizedMergedChildContext = t, G(De), G(Ce), H(Ce, t)) : G(De), H(De, n);
}
var Nt = null, Sl = !1, oo = !1;
function hp(t) {
  Nt === null ? Nt = [t] : Nt.push(t);
}
function k0(t) {
  Sl = !0, hp(t);
}
function vn() {
  if (!oo && Nt !== null) {
    oo = !0;
    var t = 0, e = I;
    try {
      var n = Nt;
      for (I = 1; t < n.length; t++) {
        var i = n[t];
        do
          i = i(!0);
        while (i !== null);
      }
      Nt = null, Sl = !1;
    } catch (s) {
      throw Nt !== null && (Nt = Nt.slice(t + 1)), Dd(cu, vn), s;
    } finally {
      I = e, oo = !1;
    }
  }
  return null;
}
var ei = [], ti = 0, Jr = null, Gr = 0, Ge = [], Ye = 0, Rn = null, Rt = 1, Pt = "";
function wn(t, e) {
  ei[ti++] = Gr, ei[ti++] = Jr, Jr = t, Gr = e;
}
function cp(t, e, n) {
  Ge[Ye++] = Rt, Ge[Ye++] = Pt, Ge[Ye++] = Rn, Rn = t;
  var i = Rt;
  t = Pt;
  var s = 32 - ct(i) - 1;
  i &= ~(1 << s), n += 1;
  var r = 32 - ct(e) + s;
  if (30 < r) {
    var l = s - s % 5;
    r = (i & (1 << l) - 1).toString(32), i >>= l, s -= l, Rt = 1 << 32 - ct(e) + s | n << s | i, Pt = r + t;
  } else Rt = 1 << r | n << s | i, Pt = t;
}
function Su(t) {
  t.return !== null && (wn(t, 1), cp(t, 1, 0));
}
function Eu(t) {
  for (; t === Jr; ) Jr = ei[--ti], ei[ti] = null, Gr = ei[--ti], ei[ti] = null;
  for (; t === Rn; ) Rn = Ge[--Ye], Ge[Ye] = null, Pt = Ge[--Ye], Ge[Ye] = null, Rt = Ge[--Ye], Ge[Ye] = null;
}
var We = null, Ue = null, Y = !1, ht = null;
function fp(t, e) {
  var n = Ze(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n);
}
function ic(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, We = t, Ue = sn(e.firstChild), !0) : !1;
    case 6:
      return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, We = t, Ue = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (n = Rn !== null ? { id: Rt, overflow: Pt } : null, t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }, n = Ze(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, We = t, Ue = null, !0) : !1;
    default:
      return !1;
  }
}
function Sa(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Ea(t) {
  if (Y) {
    var e = Ue;
    if (e) {
      var n = e;
      if (!ic(t, e)) {
        if (Sa(t)) throw Error(z(418));
        e = sn(n.nextSibling);
        var i = We;
        e && ic(t, e) ? fp(i, n) : (t.flags = t.flags & -4097 | 2, Y = !1, We = t);
      }
    } else {
      if (Sa(t)) throw Error(z(418));
      t.flags = t.flags & -4097 | 2, Y = !1, We = t;
    }
  }
}
function sc(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
  We = t;
}
function tr(t) {
  if (t !== We) return !1;
  if (!Y) return sc(t), Y = !0, !1;
  var e;
  if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !va(t.type, t.memoizedProps)), e && (e = Ue)) {
    if (Sa(t)) throw dp(), Error(z(418));
    for (; e; ) fp(t, e), e = sn(e.nextSibling);
  }
  if (sc(t), t.tag === 13) {
    if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(z(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              Ue = sn(t.nextSibling);
              break e;
            }
            e--;
          } else n !== "$" && n !== "$!" && n !== "$?" || e++;
        }
        t = t.nextSibling;
      }
      Ue = null;
    }
  } else Ue = We ? sn(t.stateNode.nextSibling) : null;
  return !0;
}
function dp() {
  for (var t = Ue; t; ) t = sn(t.nextSibling);
}
function yi() {
  Ue = We = null, Y = !1;
}
function bu(t) {
  ht === null ? ht = [t] : ht.push(t);
}
var x0 = It.ReactCurrentBatchConfig;
function $i(t, e, n) {
  if (t = n.ref, t !== null && typeof t != "function" && typeof t != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(z(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(z(147, t));
      var s = i, r = "" + t;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === r ? e.ref : (e = function(l) {
        var o = s.refs;
        l === null ? delete o[r] : o[r] = l;
      }, e._stringRef = r, e);
    }
    if (typeof t != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, t));
  }
  return t;
}
function nr(t, e) {
  throw t = Object.prototype.toString.call(e), Error(z(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
}
function rc(t) {
  var e = t._init;
  return e(t._payload);
}
function pp(t) {
  function e(g, p) {
    if (t) {
      var v = g.deletions;
      v === null ? (g.deletions = [p], g.flags |= 16) : v.push(p);
    }
  }
  function n(g, p) {
    if (!t) return null;
    for (; p !== null; ) e(g, p), p = p.sibling;
    return null;
  }
  function i(g, p) {
    for (g = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? g.set(p.key, p) : g.set(p.index, p), p = p.sibling;
    return g;
  }
  function s(g, p) {
    return g = an(g, p), g.index = 0, g.sibling = null, g;
  }
  function r(g, p, v) {
    return g.index = v, t ? (v = g.alternate, v !== null ? (v = v.index, v < p ? (g.flags |= 2, p) : v) : (g.flags |= 2, p)) : (g.flags |= 1048576, p);
  }
  function l(g) {
    return t && g.alternate === null && (g.flags |= 2), g;
  }
  function o(g, p, v, E) {
    return p === null || p.tag !== 6 ? (p = mo(v, g.mode, E), p.return = g, p) : (p = s(p, v), p.return = g, p);
  }
  function a(g, p, v, E) {
    var _ = v.type;
    return _ === qn ? h(g, p, v.props.children, E, v.key) : p !== null && (p.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Kt && rc(_) === p.type) ? (E = s(p, v.props), E.ref = $i(g, p, v), E.return = g, E) : (E = Or(v.type, v.key, v.props, null, g.mode, E), E.ref = $i(g, p, v), E.return = g, E);
  }
  function u(g, p, v, E) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = vo(v, g.mode, E), p.return = g, p) : (p = s(p, v.children || []), p.return = g, p);
  }
  function h(g, p, v, E, _) {
    return p === null || p.tag !== 7 ? (p = Cn(v, g.mode, E, _), p.return = g, p) : (p = s(p, v), p.return = g, p);
  }
  function c(g, p, v) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = mo("" + p, g.mode, v), p.return = g, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Hs:
          return v = Or(p.type, p.key, p.props, null, g.mode, v), v.ref = $i(g, null, p), v.return = g, v;
        case Xn:
          return p = vo(p, g.mode, v), p.return = g, p;
        case Kt:
          var E = p._init;
          return c(g, E(p._payload), v);
      }
      if (Hi(p) || Pi(p)) return p = Cn(p, g.mode, v, null), p.return = g, p;
      nr(g, p);
    }
    return null;
  }
  function f(g, p, v, E) {
    var _ = p !== null ? p.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return _ !== null ? null : o(g, p, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Hs:
          return v.key === _ ? a(g, p, v, E) : null;
        case Xn:
          return v.key === _ ? u(g, p, v, E) : null;
        case Kt:
          return _ = v._init, f(
            g,
            p,
            _(v._payload),
            E
          );
      }
      if (Hi(v) || Pi(v)) return _ !== null ? null : h(g, p, v, E, null);
      nr(g, v);
    }
    return null;
  }
  function m(g, p, v, E, _) {
    if (typeof E == "string" && E !== "" || typeof E == "number") return g = g.get(v) || null, o(p, g, "" + E, _);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Hs:
          return g = g.get(E.key === null ? v : E.key) || null, a(p, g, E, _);
        case Xn:
          return g = g.get(E.key === null ? v : E.key) || null, u(p, g, E, _);
        case Kt:
          var k = E._init;
          return m(g, p, v, k(E._payload), _);
      }
      if (Hi(E) || Pi(E)) return g = g.get(v) || null, h(p, g, E, _, null);
      nr(p, E);
    }
    return null;
  }
  function w(g, p, v, E) {
    for (var _ = null, k = null, C = p, x = p = 0, T = null; C !== null && x < v.length; x++) {
      C.index > x ? (T = C, C = null) : T = C.sibling;
      var O = f(g, C, v[x], E);
      if (O === null) {
        C === null && (C = T);
        break;
      }
      t && C && O.alternate === null && e(g, C), p = r(O, p, x), k === null ? _ = O : k.sibling = O, k = O, C = T;
    }
    if (x === v.length) return n(g, C), Y && wn(g, x), _;
    if (C === null) {
      for (; x < v.length; x++) C = c(g, v[x], E), C !== null && (p = r(C, p, x), k === null ? _ = C : k.sibling = C, k = C);
      return Y && wn(g, x), _;
    }
    for (C = i(g, C); x < v.length; x++) T = m(C, g, x, v[x], E), T !== null && (t && T.alternate !== null && C.delete(T.key === null ? x : T.key), p = r(T, p, x), k === null ? _ = T : k.sibling = T, k = T);
    return t && C.forEach(function(F) {
      return e(g, F);
    }), Y && wn(g, x), _;
  }
  function y(g, p, v, E) {
    var _ = Pi(v);
    if (typeof _ != "function") throw Error(z(150));
    if (v = _.call(v), v == null) throw Error(z(151));
    for (var k = _ = null, C = p, x = p = 0, T = null, O = v.next(); C !== null && !O.done; x++, O = v.next()) {
      C.index > x ? (T = C, C = null) : T = C.sibling;
      var F = f(g, C, O.value, E);
      if (F === null) {
        C === null && (C = T);
        break;
      }
      t && C && F.alternate === null && e(g, C), p = r(F, p, x), k === null ? _ = F : k.sibling = F, k = F, C = T;
    }
    if (O.done) return n(
      g,
      C
    ), Y && wn(g, x), _;
    if (C === null) {
      for (; !O.done; x++, O = v.next()) O = c(g, O.value, E), O !== null && (p = r(O, p, x), k === null ? _ = O : k.sibling = O, k = O);
      return Y && wn(g, x), _;
    }
    for (C = i(g, C); !O.done; x++, O = v.next()) O = m(C, g, x, O.value, E), O !== null && (t && O.alternate !== null && C.delete(O.key === null ? x : O.key), p = r(O, p, x), k === null ? _ = O : k.sibling = O, k = O);
    return t && C.forEach(function(K) {
      return e(g, K);
    }), Y && wn(g, x), _;
  }
  function b(g, p, v, E) {
    if (typeof v == "object" && v !== null && v.type === qn && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Hs:
          e: {
            for (var _ = v.key, k = p; k !== null; ) {
              if (k.key === _) {
                if (_ = v.type, _ === qn) {
                  if (k.tag === 7) {
                    n(g, k.sibling), p = s(k, v.props.children), p.return = g, g = p;
                    break e;
                  }
                } else if (k.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Kt && rc(_) === k.type) {
                  n(g, k.sibling), p = s(k, v.props), p.ref = $i(g, k, v), p.return = g, g = p;
                  break e;
                }
                n(g, k);
                break;
              } else e(g, k);
              k = k.sibling;
            }
            v.type === qn ? (p = Cn(v.props.children, g.mode, E, v.key), p.return = g, g = p) : (E = Or(v.type, v.key, v.props, null, g.mode, E), E.ref = $i(g, p, v), E.return = g, g = E);
          }
          return l(g);
        case Xn:
          e: {
            for (k = v.key; p !== null; ) {
              if (p.key === k) if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                n(g, p.sibling), p = s(p, v.children || []), p.return = g, g = p;
                break e;
              } else {
                n(g, p);
                break;
              }
              else e(g, p);
              p = p.sibling;
            }
            p = vo(v, g.mode, E), p.return = g, g = p;
          }
          return l(g);
        case Kt:
          return k = v._init, b(g, p, k(v._payload), E);
      }
      if (Hi(v)) return w(g, p, v, E);
      if (Pi(v)) return y(g, p, v, E);
      nr(g, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, p !== null && p.tag === 6 ? (n(g, p.sibling), p = s(p, v), p.return = g, g = p) : (n(g, p), p = mo(v, g.mode, E), p.return = g, g = p), l(g)) : n(g, p);
  }
  return b;
}
var wi = pp(!0), mp = pp(!1), Yr = mn(null), Zr = null, ni = null, _u = null;
function ku() {
  _u = ni = Zr = null;
}
function xu(t) {
  var e = Yr.current;
  G(Yr), t._currentValue = e;
}
function ba(t, e, n) {
  for (; t !== null; ) {
    var i = t.alternate;
    if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
    t = t.return;
  }
}
function fi(t, e) {
  Zr = t, _u = ni = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (Le = !0), t.firstContext = null);
}
function tt(t) {
  var e = t._currentValue;
  if (_u !== t) if (t = { context: t, memoizedValue: e, next: null }, ni === null) {
    if (Zr === null) throw Error(z(308));
    ni = t, Zr.dependencies = { lanes: 0, firstContext: t };
  } else ni = ni.next = t;
  return e;
}
var bn = null;
function Cu(t) {
  bn === null ? bn = [t] : bn.push(t);
}
function vp(t, e, n, i) {
  var s = e.interleaved;
  return s === null ? (n.next = n, Cu(e)) : (n.next = s.next, s.next = n), e.interleaved = n, At(t, i);
}
function At(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; ) t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Xt = !1;
function Mu(t) {
  t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function gp(t, e) {
  t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
}
function Lt(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function rn(t, e, n) {
  var i = t.updateQueue;
  if (i === null) return null;
  if (i = i.shared, B & 2) {
    var s = i.pending;
    return s === null ? e.next = e : (e.next = s.next, s.next = e), i.pending = e, At(t, n);
  }
  return s = i.interleaved, s === null ? (e.next = e, Cu(i)) : (e.next = s.next, s.next = e), i.interleaved = e, At(t, n);
}
function Cr(t, e, n) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
    var i = e.lanes;
    i &= t.pendingLanes, n |= i, e.lanes = n, fu(t, n);
  }
}
function lc(t, e) {
  var n = t.updateQueue, i = t.alternate;
  if (i !== null && (i = i.updateQueue, n === i)) {
    var s = null, r = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        r === null ? s = r = l : r = r.next = l, n = n.next;
      } while (n !== null);
      r === null ? s = r = e : r = r.next = e;
    } else s = r = e;
    n = { baseState: i.baseState, firstBaseUpdate: s, lastBaseUpdate: r, shared: i.shared, effects: i.effects }, t.updateQueue = n;
    return;
  }
  t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
}
function el(t, e, n, i) {
  var s = t.updateQueue;
  Xt = !1;
  var r = s.firstBaseUpdate, l = s.lastBaseUpdate, o = s.shared.pending;
  if (o !== null) {
    s.shared.pending = null;
    var a = o, u = a.next;
    a.next = null, l === null ? r = u : l.next = u, l = a;
    var h = t.alternate;
    h !== null && (h = h.updateQueue, o = h.lastBaseUpdate, o !== l && (o === null ? h.firstBaseUpdate = u : o.next = u, h.lastBaseUpdate = a));
  }
  if (r !== null) {
    var c = s.baseState;
    l = 0, h = u = a = null, o = r;
    do {
      var f = o.lane, m = o.eventTime;
      if ((i & f) === f) {
        h !== null && (h = h.next = {
          eventTime: m,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var w = t, y = o;
          switch (f = e, m = n, y.tag) {
            case 1:
              if (w = y.payload, typeof w == "function") {
                c = w.call(m, c, f);
                break e;
              }
              c = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = y.payload, f = typeof w == "function" ? w.call(m, c, f) : w, f == null) break e;
              c = te({}, c, f);
              break e;
            case 2:
              Xt = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (t.flags |= 64, f = s.effects, f === null ? s.effects = [o] : f.push(o));
      } else m = { eventTime: m, lane: f, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, h === null ? (u = h = m, a = c) : h = h.next = m, l |= f;
      if (o = o.next, o === null) {
        if (o = s.shared.pending, o === null) break;
        f = o, o = f.next, f.next = null, s.lastBaseUpdate = f, s.shared.pending = null;
      }
    } while (!0);
    if (h === null && (a = c), s.baseState = a, s.firstBaseUpdate = u, s.lastBaseUpdate = h, e = s.shared.interleaved, e !== null) {
      s = e;
      do
        l |= s.lane, s = s.next;
      while (s !== e);
    } else r === null && (s.shared.lanes = 0);
    On |= l, t.lanes = l, t.memoizedState = c;
  }
}
function oc(t, e, n) {
  if (t = e.effects, e.effects = null, t !== null) for (e = 0; e < t.length; e++) {
    var i = t[e], s = i.callback;
    if (s !== null) {
      if (i.callback = null, i = n, typeof s != "function") throw Error(z(191, s));
      s.call(i);
    }
  }
}
var Ls = {}, kt = mn(Ls), ys = mn(Ls), ws = mn(Ls);
function _n(t) {
  if (t === Ls) throw Error(z(174));
  return t;
}
function zu(t, e) {
  switch (H(ws, e), H(ys, t), H(kt, Ls), t = e.nodeType, t) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : na(null, "");
      break;
    default:
      t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = na(e, t);
  }
  G(kt), H(kt, e);
}
function Si() {
  G(kt), G(ys), G(ws);
}
function yp(t) {
  _n(ws.current);
  var e = _n(kt.current), n = na(e, t.type);
  e !== n && (H(ys, t), H(kt, n));
}
function Nu(t) {
  ys.current === t && (G(kt), G(ys));
}
var Z = mn(0);
function tl(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      e.child.return = e, e = e.child;
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    e.sibling.return = e.return, e = e.sibling;
  }
  return null;
}
var ao = [];
function Ru() {
  for (var t = 0; t < ao.length; t++) ao[t]._workInProgressVersionPrimary = null;
  ao.length = 0;
}
var Mr = It.ReactCurrentDispatcher, uo = It.ReactCurrentBatchConfig, Pn = 0, ee = null, ce = null, me = null, nl = !1, Zi = !1, Ss = 0, C0 = 0;
function be() {
  throw Error(z(321));
}
function Pu(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++) if (!dt(t[n], e[n])) return !1;
  return !0;
}
function Ou(t, e, n, i, s, r) {
  if (Pn = r, ee = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Mr.current = t === null || t.memoizedState === null ? R0 : P0, t = n(i, s), Zi) {
    r = 0;
    do {
      if (Zi = !1, Ss = 0, 25 <= r) throw Error(z(301));
      r += 1, me = ce = null, e.updateQueue = null, Mr.current = O0, t = n(i, s);
    } while (Zi);
  }
  if (Mr.current = il, e = ce !== null && ce.next !== null, Pn = 0, me = ce = ee = null, nl = !1, e) throw Error(z(300));
  return t;
}
function Tu() {
  var t = Ss !== 0;
  return Ss = 0, t;
}
function St() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return me === null ? ee.memoizedState = me = t : me = me.next = t, me;
}
function nt() {
  if (ce === null) {
    var t = ee.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = ce.next;
  var e = me === null ? ee.memoizedState : me.next;
  if (e !== null) me = e, ce = t;
  else {
    if (t === null) throw Error(z(310));
    ce = t, t = { memoizedState: ce.memoizedState, baseState: ce.baseState, baseQueue: ce.baseQueue, queue: ce.queue, next: null }, me === null ? ee.memoizedState = me = t : me = me.next = t;
  }
  return me;
}
function Es(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function ho(t) {
  var e = nt(), n = e.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = t;
  var i = ce, s = i.baseQueue, r = n.pending;
  if (r !== null) {
    if (s !== null) {
      var l = s.next;
      s.next = r.next, r.next = l;
    }
    i.baseQueue = s = r, n.pending = null;
  }
  if (s !== null) {
    r = s.next, i = i.baseState;
    var o = l = null, a = null, u = r;
    do {
      var h = u.lane;
      if ((Pn & h) === h) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), i = u.hasEagerState ? u.eagerState : t(i, u.action);
      else {
        var c = {
          lane: h,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (o = a = c, l = i) : a = a.next = c, ee.lanes |= h, On |= h;
      }
      u = u.next;
    } while (u !== null && u !== r);
    a === null ? l = i : a.next = o, dt(i, e.memoizedState) || (Le = !0), e.memoizedState = i, e.baseState = l, e.baseQueue = a, n.lastRenderedState = i;
  }
  if (t = n.interleaved, t !== null) {
    s = t;
    do
      r = s.lane, ee.lanes |= r, On |= r, s = s.next;
    while (s !== t);
  } else s === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function co(t) {
  var e = nt(), n = e.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = t;
  var i = n.dispatch, s = n.pending, r = e.memoizedState;
  if (s !== null) {
    n.pending = null;
    var l = s = s.next;
    do
      r = t(r, l.action), l = l.next;
    while (l !== s);
    dt(r, e.memoizedState) || (Le = !0), e.memoizedState = r, e.baseQueue === null && (e.baseState = r), n.lastRenderedState = r;
  }
  return [r, i];
}
function wp() {
}
function Sp(t, e) {
  var n = ee, i = nt(), s = e(), r = !dt(i.memoizedState, s);
  if (r && (i.memoizedState = s, Le = !0), i = i.queue, Lu(_p.bind(null, n, i, t), [t]), i.getSnapshot !== e || r || me !== null && me.memoizedState.tag & 1) {
    if (n.flags |= 2048, bs(9, bp.bind(null, n, i, s, e), void 0, null), ve === null) throw Error(z(349));
    Pn & 30 || Ep(n, e, s);
  }
  return s;
}
function Ep(t, e, n) {
  t.flags |= 16384, t = { getSnapshot: e, value: n }, e = ee.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, ee.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
}
function bp(t, e, n, i) {
  e.value = n, e.getSnapshot = i, kp(e) && xp(t);
}
function _p(t, e, n) {
  return n(function() {
    kp(e) && xp(t);
  });
}
function kp(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !dt(t, n);
  } catch {
    return !0;
  }
}
function xp(t) {
  var e = At(t, 1);
  e !== null && ft(e, t, 1, -1);
}
function ac(t) {
  var e = St();
  return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Es, lastRenderedState: t }, e.queue = t, t = t.dispatch = N0.bind(null, ee, t), [e.memoizedState, t];
}
function bs(t, e, n, i) {
  return t = { tag: t, create: e, destroy: n, deps: i, next: null }, e = ee.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, ee.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t)), t;
}
function Cp() {
  return nt().memoizedState;
}
function zr(t, e, n, i) {
  var s = St();
  ee.flags |= t, s.memoizedState = bs(1 | e, n, void 0, i === void 0 ? null : i);
}
function El(t, e, n, i) {
  var s = nt();
  i = i === void 0 ? null : i;
  var r = void 0;
  if (ce !== null) {
    var l = ce.memoizedState;
    if (r = l.destroy, i !== null && Pu(i, l.deps)) {
      s.memoizedState = bs(e, n, r, i);
      return;
    }
  }
  ee.flags |= t, s.memoizedState = bs(1 | e, n, r, i);
}
function uc(t, e) {
  return zr(8390656, 8, t, e);
}
function Lu(t, e) {
  return El(2048, 8, t, e);
}
function Mp(t, e) {
  return El(4, 2, t, e);
}
function zp(t, e) {
  return El(4, 4, t, e);
}
function Np(t, e) {
  if (typeof e == "function") return t = t(), e(t), function() {
    e(null);
  };
  if (e != null) return t = t(), e.current = t, function() {
    e.current = null;
  };
}
function Rp(t, e, n) {
  return n = n != null ? n.concat([t]) : null, El(4, 4, Np.bind(null, e, t), n);
}
function Du() {
}
function Pp(t, e) {
  var n = nt();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && Pu(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t);
}
function Op(t, e) {
  var n = nt();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && Pu(e, i[1]) ? i[0] : (t = t(), n.memoizedState = [t, e], t);
}
function Tp(t, e, n) {
  return Pn & 21 ? (dt(n, e) || (n = Fd(), ee.lanes |= n, On |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, Le = !0), t.memoizedState = n);
}
function M0(t, e) {
  var n = I;
  I = n !== 0 && 4 > n ? n : 4, t(!0);
  var i = uo.transition;
  uo.transition = {};
  try {
    t(!1), e();
  } finally {
    I = n, uo.transition = i;
  }
}
function Lp() {
  return nt().memoizedState;
}
function z0(t, e, n) {
  var i = on(t);
  if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, Dp(t)) $p(e, n);
  else if (n = vp(t, e, n, i), n !== null) {
    var s = Ne();
    ft(n, t, i, s), Ap(n, e, i);
  }
}
function N0(t, e, n) {
  var i = on(t), s = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Dp(t)) $p(e, s);
  else {
    var r = t.alternate;
    if (t.lanes === 0 && (r === null || r.lanes === 0) && (r = e.lastRenderedReducer, r !== null)) try {
      var l = e.lastRenderedState, o = r(l, n);
      if (s.hasEagerState = !0, s.eagerState = o, dt(o, l)) {
        var a = e.interleaved;
        a === null ? (s.next = s, Cu(e)) : (s.next = a.next, a.next = s), e.interleaved = s;
        return;
      }
    } catch {
    } finally {
    }
    n = vp(t, e, s, i), n !== null && (s = Ne(), ft(n, t, i, s), Ap(n, e, i));
  }
}
function Dp(t) {
  var e = t.alternate;
  return t === ee || e !== null && e === ee;
}
function $p(t, e) {
  Zi = nl = !0;
  var n = t.pending;
  n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
}
function Ap(t, e, n) {
  if (n & 4194240) {
    var i = e.lanes;
    i &= t.pendingLanes, n |= i, e.lanes = n, fu(t, n);
  }
}
var il = { readContext: tt, useCallback: be, useContext: be, useEffect: be, useImperativeHandle: be, useInsertionEffect: be, useLayoutEffect: be, useMemo: be, useReducer: be, useRef: be, useState: be, useDebugValue: be, useDeferredValue: be, useTransition: be, useMutableSource: be, useSyncExternalStore: be, useId: be, unstable_isNewReconciler: !1 }, R0 = { readContext: tt, useCallback: function(t, e) {
  return St().memoizedState = [t, e === void 0 ? null : e], t;
}, useContext: tt, useEffect: uc, useImperativeHandle: function(t, e, n) {
  return n = n != null ? n.concat([t]) : null, zr(
    4194308,
    4,
    Np.bind(null, e, t),
    n
  );
}, useLayoutEffect: function(t, e) {
  return zr(4194308, 4, t, e);
}, useInsertionEffect: function(t, e) {
  return zr(4, 2, t, e);
}, useMemo: function(t, e) {
  var n = St();
  return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t;
}, useReducer: function(t, e, n) {
  var i = St();
  return e = n !== void 0 ? n(e) : e, i.memoizedState = i.baseState = e, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: e }, i.queue = t, t = t.dispatch = z0.bind(null, ee, t), [i.memoizedState, t];
}, useRef: function(t) {
  var e = St();
  return t = { current: t }, e.memoizedState = t;
}, useState: ac, useDebugValue: Du, useDeferredValue: function(t) {
  return St().memoizedState = t;
}, useTransition: function() {
  var t = ac(!1), e = t[0];
  return t = M0.bind(null, t[1]), St().memoizedState = t, [e, t];
}, useMutableSource: function() {
}, useSyncExternalStore: function(t, e, n) {
  var i = ee, s = St();
  if (Y) {
    if (n === void 0) throw Error(z(407));
    n = n();
  } else {
    if (n = e(), ve === null) throw Error(z(349));
    Pn & 30 || Ep(i, e, n);
  }
  s.memoizedState = n;
  var r = { value: n, getSnapshot: e };
  return s.queue = r, uc(_p.bind(
    null,
    i,
    r,
    t
  ), [t]), i.flags |= 2048, bs(9, bp.bind(null, i, r, n, e), void 0, null), n;
}, useId: function() {
  var t = St(), e = ve.identifierPrefix;
  if (Y) {
    var n = Pt, i = Rt;
    n = (i & ~(1 << 32 - ct(i) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = Ss++, 0 < n && (e += "H" + n.toString(32)), e += ":";
  } else n = C0++, e = ":" + e + "r" + n.toString(32) + ":";
  return t.memoizedState = e;
}, unstable_isNewReconciler: !1 }, P0 = {
  readContext: tt,
  useCallback: Pp,
  useContext: tt,
  useEffect: Lu,
  useImperativeHandle: Rp,
  useInsertionEffect: Mp,
  useLayoutEffect: zp,
  useMemo: Op,
  useReducer: ho,
  useRef: Cp,
  useState: function() {
    return ho(Es);
  },
  useDebugValue: Du,
  useDeferredValue: function(t) {
    var e = nt();
    return Tp(e, ce.memoizedState, t);
  },
  useTransition: function() {
    var t = ho(Es)[0], e = nt().memoizedState;
    return [t, e];
  },
  useMutableSource: wp,
  useSyncExternalStore: Sp,
  useId: Lp,
  unstable_isNewReconciler: !1
}, O0 = { readContext: tt, useCallback: Pp, useContext: tt, useEffect: Lu, useImperativeHandle: Rp, useInsertionEffect: Mp, useLayoutEffect: zp, useMemo: Op, useReducer: co, useRef: Cp, useState: function() {
  return co(Es);
}, useDebugValue: Du, useDeferredValue: function(t) {
  var e = nt();
  return ce === null ? e.memoizedState = t : Tp(e, ce.memoizedState, t);
}, useTransition: function() {
  var t = co(Es)[0], e = nt().memoizedState;
  return [t, e];
}, useMutableSource: wp, useSyncExternalStore: Sp, useId: Lp, unstable_isNewReconciler: !1 };
function at(t, e) {
  if (t && t.defaultProps) {
    e = te({}, e), t = t.defaultProps;
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
function _a(t, e, n, i) {
  e = t.memoizedState, n = n(i, e), n = n == null ? e : te({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
}
var bl = { isMounted: function(t) {
  return (t = t._reactInternals) ? jn(t) === t : !1;
}, enqueueSetState: function(t, e, n) {
  t = t._reactInternals;
  var i = Ne(), s = on(t), r = Lt(i, s);
  r.payload = e, n != null && (r.callback = n), e = rn(t, r, s), e !== null && (ft(e, t, s, i), Cr(e, t, s));
}, enqueueReplaceState: function(t, e, n) {
  t = t._reactInternals;
  var i = Ne(), s = on(t), r = Lt(i, s);
  r.tag = 1, r.payload = e, n != null && (r.callback = n), e = rn(t, r, s), e !== null && (ft(e, t, s, i), Cr(e, t, s));
}, enqueueForceUpdate: function(t, e) {
  t = t._reactInternals;
  var n = Ne(), i = on(t), s = Lt(n, i);
  s.tag = 2, e != null && (s.callback = e), e = rn(t, s, i), e !== null && (ft(e, t, i, n), Cr(e, t, i));
} };
function hc(t, e, n, i, s, r, l) {
  return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, r, l) : e.prototype && e.prototype.isPureReactComponent ? !ps(n, i) || !ps(s, r) : !0;
}
function Fp(t, e, n) {
  var i = !1, s = cn, r = e.contextType;
  return typeof r == "object" && r !== null ? r = tt(r) : (s = $e(e) ? Nn : Ce.current, i = e.contextTypes, r = (i = i != null) ? gi(t, s) : cn), e = new e(n, r), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = bl, t.stateNode = e, e._reactInternals = t, i && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = s, t.__reactInternalMemoizedMaskedChildContext = r), e;
}
function cc(t, e, n, i) {
  t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && bl.enqueueReplaceState(e, e.state, null);
}
function ka(t, e, n, i) {
  var s = t.stateNode;
  s.props = n, s.state = t.memoizedState, s.refs = {}, Mu(t);
  var r = e.contextType;
  typeof r == "object" && r !== null ? s.context = tt(r) : (r = $e(e) ? Nn : Ce.current, s.context = gi(t, r)), s.state = t.memoizedState, r = e.getDerivedStateFromProps, typeof r == "function" && (_a(t, e, r, n), s.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (e = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), e !== s.state && bl.enqueueReplaceState(s, s.state, null), el(t, n, s, i), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308);
}
function Ei(t, e) {
  try {
    var n = "", i = e;
    do
      n += lg(i), i = i.return;
    while (i);
    var s = n;
  } catch (r) {
    s = `
Error generating stack: ` + r.message + `
` + r.stack;
  }
  return { value: t, source: e, stack: s, digest: null };
}
function fo(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function xa(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var T0 = typeof WeakMap == "function" ? WeakMap : Map;
function Bp(t, e, n) {
  n = Lt(-1, n), n.tag = 3, n.payload = { element: null };
  var i = e.value;
  return n.callback = function() {
    rl || (rl = !0, Da = i), xa(t, e);
  }, n;
}
function Vp(t, e, n) {
  n = Lt(-1, n), n.tag = 3;
  var i = t.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var s = e.value;
    n.payload = function() {
      return i(s);
    }, n.callback = function() {
      xa(t, e);
    };
  }
  var r = t.stateNode;
  return r !== null && typeof r.componentDidCatch == "function" && (n.callback = function() {
    xa(t, e), typeof i != "function" && (ln === null ? ln = /* @__PURE__ */ new Set([this]) : ln.add(this));
    var l = e.stack;
    this.componentDidCatch(e.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function fc(t, e, n) {
  var i = t.pingCache;
  if (i === null) {
    i = t.pingCache = new T0();
    var s = /* @__PURE__ */ new Set();
    i.set(e, s);
  } else s = i.get(e), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(e, s));
  s.has(n) || (s.add(n), t = X0.bind(null, t, e, n), e.then(t, t));
}
function dc(t) {
  do {
    var e;
    if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function pc(t, e, n, i, s) {
  return t.mode & 1 ? (t.flags |= 65536, t.lanes = s, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Lt(-1, 1), e.tag = 2, rn(n, e, 1))), n.lanes |= 1), t);
}
var L0 = It.ReactCurrentOwner, Le = !1;
function ze(t, e, n, i) {
  e.child = t === null ? mp(e, null, n, i) : wi(e, t.child, n, i);
}
function mc(t, e, n, i, s) {
  n = n.render;
  var r = e.ref;
  return fi(e, s), i = Ou(t, e, n, i, r, s), n = Tu(), t !== null && !Le ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~s, Ft(t, e, s)) : (Y && n && Su(e), e.flags |= 1, ze(t, e, i, s), e.child);
}
function vc(t, e, n, i, s) {
  if (t === null) {
    var r = n.type;
    return typeof r == "function" && !Uu(r) && r.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = r, Ip(t, e, r, i, s)) : (t = Or(n.type, null, i, e, e.mode, s), t.ref = e.ref, t.return = e, e.child = t);
  }
  if (r = t.child, !(t.lanes & s)) {
    var l = r.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ps, n(l, i) && t.ref === e.ref) return Ft(t, e, s);
  }
  return e.flags |= 1, t = an(r, i), t.ref = e.ref, t.return = e, e.child = t;
}
function Ip(t, e, n, i, s) {
  if (t !== null) {
    var r = t.memoizedProps;
    if (ps(r, i) && t.ref === e.ref) if (Le = !1, e.pendingProps = i = r, (t.lanes & s) !== 0) t.flags & 131072 && (Le = !0);
    else return e.lanes = t.lanes, Ft(t, e, s);
  }
  return Ca(t, e, n, i, s);
}
function jp(t, e, n) {
  var i = e.pendingProps, s = i.children, r = t !== null ? t.memoizedState : null;
  if (i.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, H(si, je), je |= n;
  else {
    if (!(n & 1073741824)) return t = r !== null ? r.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, e.updateQueue = null, H(si, je), je |= t, null;
    e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = r !== null ? r.baseLanes : n, H(si, je), je |= i;
  }
  else r !== null ? (i = r.baseLanes | n, e.memoizedState = null) : i = n, H(si, je), je |= i;
  return ze(t, e, s, n), e.child;
}
function Up(t, e) {
  var n = e.ref;
  (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152);
}
function Ca(t, e, n, i, s) {
  var r = $e(n) ? Nn : Ce.current;
  return r = gi(e, r), fi(e, s), n = Ou(t, e, n, i, r, s), i = Tu(), t !== null && !Le ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~s, Ft(t, e, s)) : (Y && i && Su(e), e.flags |= 1, ze(t, e, n, s), e.child);
}
function gc(t, e, n, i, s) {
  if ($e(n)) {
    var r = !0;
    Qr(e);
  } else r = !1;
  if (fi(e, s), e.stateNode === null) Nr(t, e), Fp(e, n, i), ka(e, n, i, s), i = !0;
  else if (t === null) {
    var l = e.stateNode, o = e.memoizedProps;
    l.props = o;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = tt(u) : (u = $e(n) ? Nn : Ce.current, u = gi(e, u));
    var h = n.getDerivedStateFromProps, c = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    c || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (o !== i || a !== u) && cc(e, l, i, u), Xt = !1;
    var f = e.memoizedState;
    l.state = f, el(e, i, l, s), a = e.memoizedState, o !== i || f !== a || De.current || Xt ? (typeof h == "function" && (_a(e, n, h, i), a = e.memoizedState), (o = Xt || hc(e, n, o, i, f, a, u)) ? (c || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = a), l.props = i, l.state = a, l.context = u, i = o) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), i = !1);
  } else {
    l = e.stateNode, gp(t, e), o = e.memoizedProps, u = e.type === e.elementType ? o : at(e.type, o), l.props = u, c = e.pendingProps, f = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = tt(a) : (a = $e(n) ? Nn : Ce.current, a = gi(e, a));
    var m = n.getDerivedStateFromProps;
    (h = typeof m == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (o !== c || f !== a) && cc(e, l, i, a), Xt = !1, f = e.memoizedState, l.state = f, el(e, i, l, s);
    var w = e.memoizedState;
    o !== c || f !== w || De.current || Xt ? (typeof m == "function" && (_a(e, n, m, i), w = e.memoizedState), (u = Xt || hc(e, n, u, i, f, w, a) || !1) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(i, w, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(i, w, a)), typeof l.componentDidUpdate == "function" && (e.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || o === t.memoizedProps && f === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = w), l.props = i, l.state = w, l.context = a, i = u) : (typeof l.componentDidUpdate != "function" || o === t.memoizedProps && f === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024), i = !1);
  }
  return Ma(t, e, n, i, r, s);
}
function Ma(t, e, n, i, s, r) {
  Up(t, e);
  var l = (e.flags & 128) !== 0;
  if (!i && !l) return s && nc(e, n, !1), Ft(t, e, r);
  i = e.stateNode, L0.current = e;
  var o = l && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return e.flags |= 1, t !== null && l ? (e.child = wi(e, t.child, null, r), e.child = wi(e, null, o, r)) : ze(t, e, o, r), e.memoizedState = i.state, s && nc(e, n, !0), e.child;
}
function Wp(t) {
  var e = t.stateNode;
  e.pendingContext ? tc(t, e.pendingContext, e.pendingContext !== e.context) : e.context && tc(t, e.context, !1), zu(t, e.containerInfo);
}
function yc(t, e, n, i, s) {
  return yi(), bu(s), e.flags |= 256, ze(t, e, n, i), e.child;
}
var za = { dehydrated: null, treeContext: null, retryLane: 0 };
function Na(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Hp(t, e, n) {
  var i = e.pendingProps, s = Z.current, r = !1, l = (e.flags & 128) !== 0, o;
  if ((o = l) || (o = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0), o ? (r = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (s |= 1), H(Z, s & 1), t === null)
    return Ea(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (l = i.children, t = i.fallback, r ? (i = e.mode, r = e.child, l = { mode: "hidden", children: l }, !(i & 1) && r !== null ? (r.childLanes = 0, r.pendingProps = l) : r = xl(l, i, 0, null), t = Cn(t, i, n, null), r.return = e, t.return = e, r.sibling = t, e.child = r, e.child.memoizedState = Na(n), e.memoizedState = za, t) : $u(e, l));
  if (s = t.memoizedState, s !== null && (o = s.dehydrated, o !== null)) return D0(t, e, l, i, o, s, n);
  if (r) {
    r = i.fallback, l = e.mode, s = t.child, o = s.sibling;
    var a = { mode: "hidden", children: i.children };
    return !(l & 1) && e.child !== s ? (i = e.child, i.childLanes = 0, i.pendingProps = a, e.deletions = null) : (i = an(s, a), i.subtreeFlags = s.subtreeFlags & 14680064), o !== null ? r = an(o, r) : (r = Cn(r, l, n, null), r.flags |= 2), r.return = e, i.return = e, i.sibling = r, e.child = i, i = r, r = e.child, l = t.child.memoizedState, l = l === null ? Na(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, r.memoizedState = l, r.childLanes = t.childLanes & ~n, e.memoizedState = za, i;
  }
  return r = t.child, t = r.sibling, i = an(r, { mode: "visible", children: i.children }), !(e.mode & 1) && (i.lanes = n), i.return = e, i.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = i, e.memoizedState = null, i;
}
function $u(t, e) {
  return e = xl({ mode: "visible", children: e }, t.mode, 0, null), e.return = t, t.child = e;
}
function ir(t, e, n, i) {
  return i !== null && bu(i), wi(e, t.child, null, n), t = $u(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
}
function D0(t, e, n, i, s, r, l) {
  if (n)
    return e.flags & 256 ? (e.flags &= -257, i = fo(Error(z(422))), ir(t, e, l, i)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (r = i.fallback, s = e.mode, i = xl({ mode: "visible", children: i.children }, s, 0, null), r = Cn(r, s, l, null), r.flags |= 2, i.return = e, r.return = e, i.sibling = r, e.child = i, e.mode & 1 && wi(e, t.child, null, l), e.child.memoizedState = Na(l), e.memoizedState = za, r);
  if (!(e.mode & 1)) return ir(t, e, l, null);
  if (s.data === "$!") {
    if (i = s.nextSibling && s.nextSibling.dataset, i) var o = i.dgst;
    return i = o, r = Error(z(419)), i = fo(r, i, void 0), ir(t, e, l, i);
  }
  if (o = (l & t.childLanes) !== 0, Le || o) {
    if (i = ve, i !== null) {
      switch (l & -l) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      s = s & (i.suspendedLanes | l) ? 0 : s, s !== 0 && s !== r.retryLane && (r.retryLane = s, At(t, s), ft(i, t, s, -1));
    }
    return ju(), i = fo(Error(z(421))), ir(t, e, l, i);
  }
  return s.data === "$?" ? (e.flags |= 128, e.child = t.child, e = q0.bind(null, t), s._reactRetry = e, null) : (t = r.treeContext, Ue = sn(s.nextSibling), We = e, Y = !0, ht = null, t !== null && (Ge[Ye++] = Rt, Ge[Ye++] = Pt, Ge[Ye++] = Rn, Rt = t.id, Pt = t.overflow, Rn = e), e = $u(e, i.children), e.flags |= 4096, e);
}
function wc(t, e, n) {
  t.lanes |= e;
  var i = t.alternate;
  i !== null && (i.lanes |= e), ba(t.return, e, n);
}
function po(t, e, n, i, s) {
  var r = t.memoizedState;
  r === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: s } : (r.isBackwards = e, r.rendering = null, r.renderingStartTime = 0, r.last = i, r.tail = n, r.tailMode = s);
}
function Kp(t, e, n) {
  var i = e.pendingProps, s = i.revealOrder, r = i.tail;
  if (ze(t, e, i.children, n), i = Z.current, i & 2) i = i & 1 | 2, e.flags |= 128;
  else {
    if (t !== null && t.flags & 128) e: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && wc(t, n, e);
      else if (t.tag === 19) wc(t, n, e);
      else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break e;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) break e;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    i &= 1;
  }
  if (H(Z, i), !(e.mode & 1)) e.memoizedState = null;
  else switch (s) {
    case "forwards":
      for (n = e.child, s = null; n !== null; ) t = n.alternate, t !== null && tl(t) === null && (s = n), n = n.sibling;
      n = s, n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), po(e, !1, s, n, r);
      break;
    case "backwards":
      for (n = null, s = e.child, e.child = null; s !== null; ) {
        if (t = s.alternate, t !== null && tl(t) === null) {
          e.child = s;
          break;
        }
        t = s.sibling, s.sibling = n, n = s, s = t;
      }
      po(e, !0, n, null, r);
      break;
    case "together":
      po(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function Nr(t, e) {
  !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2);
}
function Ft(t, e, n) {
  if (t !== null && (e.dependencies = t.dependencies), On |= e.lanes, !(n & e.childLanes)) return null;
  if (t !== null && e.child !== t.child) throw Error(z(153));
  if (e.child !== null) {
    for (t = e.child, n = an(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = an(t, t.pendingProps), n.return = e;
    n.sibling = null;
  }
  return e.child;
}
function $0(t, e, n) {
  switch (e.tag) {
    case 3:
      Wp(e), yi();
      break;
    case 5:
      yp(e);
      break;
    case 1:
      $e(e.type) && Qr(e);
      break;
    case 4:
      zu(e, e.stateNode.containerInfo);
      break;
    case 10:
      var i = e.type._context, s = e.memoizedProps.value;
      H(Yr, i._currentValue), i._currentValue = s;
      break;
    case 13:
      if (i = e.memoizedState, i !== null)
        return i.dehydrated !== null ? (H(Z, Z.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? Hp(t, e, n) : (H(Z, Z.current & 1), t = Ft(t, e, n), t !== null ? t.sibling : null);
      H(Z, Z.current & 1);
      break;
    case 19:
      if (i = (n & e.childLanes) !== 0, t.flags & 128) {
        if (i) return Kp(t, e, n);
        e.flags |= 128;
      }
      if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), H(Z, Z.current), i) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, jp(t, e, n);
  }
  return Ft(t, e, n);
}
var Xp, Ra, qp, Qp;
Xp = function(t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Ra = function() {
};
qp = function(t, e, n, i) {
  var s = t.memoizedProps;
  if (s !== i) {
    t = e.stateNode, _n(kt.current);
    var r = null;
    switch (n) {
      case "input":
        s = Yo(t, s), i = Yo(t, i), r = [];
        break;
      case "select":
        s = te({}, s, { value: void 0 }), i = te({}, i, { value: void 0 }), r = [];
        break;
      case "textarea":
        s = ta(t, s), i = ta(t, i), r = [];
        break;
      default:
        typeof s.onClick != "function" && typeof i.onClick == "function" && (t.onclick = Xr);
    }
    ia(n, i);
    var l;
    n = null;
    for (u in s) if (!i.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null) if (u === "style") {
      var o = s[u];
      for (l in o) o.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (os.hasOwnProperty(u) ? r || (r = []) : (r = r || []).push(u, null));
    for (u in i) {
      var a = i[u];
      if (o = s != null ? s[u] : void 0, i.hasOwnProperty(u) && a !== o && (a != null || o != null)) if (u === "style") if (o) {
        for (l in o) !o.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in a) a.hasOwnProperty(l) && o[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
      } else n || (r || (r = []), r.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, o = o ? o.__html : void 0, a != null && o !== a && (r = r || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (r = r || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (os.hasOwnProperty(u) ? (a != null && u === "onScroll" && Q("scroll", t), r || o === a || (r = [])) : (r = r || []).push(u, a));
    }
    n && (r = r || []).push("style", n);
    var u = r;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
Qp = function(t, e, n, i) {
  n !== i && (e.flags |= 4);
};
function Ai(t, e) {
  if (!Y) switch (t.tailMode) {
    case "hidden":
      e = t.tail;
      for (var n = null; e !== null; ) e.alternate !== null && (n = e), e = e.sibling;
      n === null ? t.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = t.tail;
      for (var i = null; n !== null; ) n.alternate !== null && (i = n), n = n.sibling;
      i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null;
  }
}
function _e(t) {
  var e = t.alternate !== null && t.alternate.child === t.child, n = 0, i = 0;
  if (e) for (var s = t.child; s !== null; ) n |= s.lanes | s.childLanes, i |= s.subtreeFlags & 14680064, i |= s.flags & 14680064, s.return = t, s = s.sibling;
  else for (s = t.child; s !== null; ) n |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = t, s = s.sibling;
  return t.subtreeFlags |= i, t.childLanes = n, e;
}
function A0(t, e, n) {
  var i = e.pendingProps;
  switch (Eu(e), e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _e(e), null;
    case 1:
      return $e(e.type) && qr(), _e(e), null;
    case 3:
      return i = e.stateNode, Si(), G(De), G(Ce), Ru(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (t === null || t.child === null) && (tr(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, ht !== null && (Fa(ht), ht = null))), Ra(t, e), _e(e), null;
    case 5:
      Nu(e);
      var s = _n(ws.current);
      if (n = e.type, t !== null && e.stateNode != null) qp(t, e, n, i, s), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!i) {
          if (e.stateNode === null) throw Error(z(166));
          return _e(e), null;
        }
        if (t = _n(kt.current), tr(e)) {
          i = e.stateNode, n = e.type;
          var r = e.memoizedProps;
          switch (i[Et] = e, i[gs] = r, t = (e.mode & 1) !== 0, n) {
            case "dialog":
              Q("cancel", i), Q("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", i);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Xi.length; s++) Q(Xi[s], i);
              break;
            case "source":
              Q("error", i);
              break;
            case "img":
            case "image":
            case "link":
              Q(
                "error",
                i
              ), Q("load", i);
              break;
            case "details":
              Q("toggle", i);
              break;
            case "input":
              zh(i, r), Q("invalid", i);
              break;
            case "select":
              i._wrapperState = { wasMultiple: !!r.multiple }, Q("invalid", i);
              break;
            case "textarea":
              Rh(i, r), Q("invalid", i);
          }
          ia(n, r), s = null;
          for (var l in r) if (r.hasOwnProperty(l)) {
            var o = r[l];
            l === "children" ? typeof o == "string" ? i.textContent !== o && (r.suppressHydrationWarning !== !0 && er(i.textContent, o, t), s = ["children", o]) : typeof o == "number" && i.textContent !== "" + o && (r.suppressHydrationWarning !== !0 && er(
              i.textContent,
              o,
              t
            ), s = ["children", "" + o]) : os.hasOwnProperty(l) && o != null && l === "onScroll" && Q("scroll", i);
          }
          switch (n) {
            case "input":
              Ks(i), Nh(i, r, !0);
              break;
            case "textarea":
              Ks(i), Ph(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof r.onClick == "function" && (i.onclick = Xr);
          }
          i = s, e.updateQueue = i, i !== null && (e.flags |= 4);
        } else {
          l = s.nodeType === 9 ? s : s.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = _d(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = l.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof i.is == "string" ? t = l.createElement(n, { is: i.is }) : (t = l.createElement(n), n === "select" && (l = t, i.multiple ? l.multiple = !0 : i.size && (l.size = i.size))) : t = l.createElementNS(t, n), t[Et] = e, t[gs] = i, Xp(t, e, !1, !1), e.stateNode = t;
          e: {
            switch (l = sa(n, i), n) {
              case "dialog":
                Q("cancel", t), Q("close", t), s = i;
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", t), s = i;
                break;
              case "video":
              case "audio":
                for (s = 0; s < Xi.length; s++) Q(Xi[s], t);
                s = i;
                break;
              case "source":
                Q("error", t), s = i;
                break;
              case "img":
              case "image":
              case "link":
                Q(
                  "error",
                  t
                ), Q("load", t), s = i;
                break;
              case "details":
                Q("toggle", t), s = i;
                break;
              case "input":
                zh(t, i), s = Yo(t, i), Q("invalid", t);
                break;
              case "option":
                s = i;
                break;
              case "select":
                t._wrapperState = { wasMultiple: !!i.multiple }, s = te({}, i, { value: void 0 }), Q("invalid", t);
                break;
              case "textarea":
                Rh(t, i), s = ta(t, i), Q("invalid", t);
                break;
              default:
                s = i;
            }
            ia(n, s), o = s;
            for (r in o) if (o.hasOwnProperty(r)) {
              var a = o[r];
              r === "style" ? Cd(t, a) : r === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && kd(t, a)) : r === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && as(t, a) : typeof a == "number" && as(t, "" + a) : r !== "suppressContentEditableWarning" && r !== "suppressHydrationWarning" && r !== "autoFocus" && (os.hasOwnProperty(r) ? a != null && r === "onScroll" && Q("scroll", t) : a != null && lu(t, r, a, l));
            }
            switch (n) {
              case "input":
                Ks(t), Nh(t, i, !1);
                break;
              case "textarea":
                Ks(t), Ph(t);
                break;
              case "option":
                i.value != null && t.setAttribute("value", "" + hn(i.value));
                break;
              case "select":
                t.multiple = !!i.multiple, r = i.value, r != null ? ai(t, !!i.multiple, r, !1) : i.defaultValue != null && ai(
                  t,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                );
                break;
              default:
                typeof s.onClick == "function" && (t.onclick = Xr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
          }
          i && (e.flags |= 4);
        }
        e.ref !== null && (e.flags |= 512, e.flags |= 2097152);
      }
      return _e(e), null;
    case 6:
      if (t && e.stateNode != null) Qp(t, e, t.memoizedProps, i);
      else {
        if (typeof i != "string" && e.stateNode === null) throw Error(z(166));
        if (n = _n(ws.current), _n(kt.current), tr(e)) {
          if (i = e.stateNode, n = e.memoizedProps, i[Et] = e, (r = i.nodeValue !== n) && (t = We, t !== null)) switch (t.tag) {
            case 3:
              er(i.nodeValue, n, (t.mode & 1) !== 0);
              break;
            case 5:
              t.memoizedProps.suppressHydrationWarning !== !0 && er(i.nodeValue, n, (t.mode & 1) !== 0);
          }
          r && (e.flags |= 4);
        } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[Et] = e, e.stateNode = i;
      }
      return _e(e), null;
    case 13:
      if (G(Z), i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
        if (Y && Ue !== null && e.mode & 1 && !(e.flags & 128)) dp(), yi(), e.flags |= 98560, r = !1;
        else if (r = tr(e), i !== null && i.dehydrated !== null) {
          if (t === null) {
            if (!r) throw Error(z(318));
            if (r = e.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(z(317));
            r[Et] = e;
          } else yi(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          _e(e), r = !1;
        } else ht !== null && (Fa(ht), ht = null), r = !0;
        if (!r) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = n, e) : (i = i !== null, i !== (t !== null && t.memoizedState !== null) && i && (e.child.flags |= 8192, e.mode & 1 && (t === null || Z.current & 1 ? fe === 0 && (fe = 3) : ju())), e.updateQueue !== null && (e.flags |= 4), _e(e), null);
    case 4:
      return Si(), Ra(t, e), t === null && ms(e.stateNode.containerInfo), _e(e), null;
    case 10:
      return xu(e.type._context), _e(e), null;
    case 17:
      return $e(e.type) && qr(), _e(e), null;
    case 19:
      if (G(Z), r = e.memoizedState, r === null) return _e(e), null;
      if (i = (e.flags & 128) !== 0, l = r.rendering, l === null) if (i) Ai(r, !1);
      else {
        if (fe !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
          if (l = tl(t), l !== null) {
            for (e.flags |= 128, Ai(r, !1), i = l.updateQueue, i !== null && (e.updateQueue = i, e.flags |= 4), e.subtreeFlags = 0, i = n, n = e.child; n !== null; ) r = n, t = i, r.flags &= 14680066, l = r.alternate, l === null ? (r.childLanes = 0, r.lanes = t, r.child = null, r.subtreeFlags = 0, r.memoizedProps = null, r.memoizedState = null, r.updateQueue = null, r.dependencies = null, r.stateNode = null) : (r.childLanes = l.childLanes, r.lanes = l.lanes, r.child = l.child, r.subtreeFlags = 0, r.deletions = null, r.memoizedProps = l.memoizedProps, r.memoizedState = l.memoizedState, r.updateQueue = l.updateQueue, r.type = l.type, t = l.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), n = n.sibling;
            return H(Z, Z.current & 1 | 2), e.child;
          }
          t = t.sibling;
        }
        r.tail !== null && re() > bi && (e.flags |= 128, i = !0, Ai(r, !1), e.lanes = 4194304);
      }
      else {
        if (!i) if (t = tl(l), t !== null) {
          if (e.flags |= 128, i = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), Ai(r, !0), r.tail === null && r.tailMode === "hidden" && !l.alternate && !Y) return _e(e), null;
        } else 2 * re() - r.renderingStartTime > bi && n !== 1073741824 && (e.flags |= 128, i = !0, Ai(r, !1), e.lanes = 4194304);
        r.isBackwards ? (l.sibling = e.child, e.child = l) : (n = r.last, n !== null ? n.sibling = l : e.child = l, r.last = l);
      }
      return r.tail !== null ? (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = re(), e.sibling = null, n = Z.current, H(Z, i ? n & 1 | 2 : n & 1), e) : (_e(e), null);
    case 22:
    case 23:
      return Iu(), i = e.memoizedState !== null, t !== null && t.memoizedState !== null !== i && (e.flags |= 8192), i && e.mode & 1 ? je & 1073741824 && (_e(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : _e(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, e.tag));
}
function F0(t, e) {
  switch (Eu(e), e.tag) {
    case 1:
      return $e(e.type) && qr(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 3:
      return Si(), G(De), G(Ce), Ru(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
    case 5:
      return Nu(e), null;
    case 13:
      if (G(Z), t = e.memoizedState, t !== null && t.dehydrated !== null) {
        if (e.alternate === null) throw Error(z(340));
        yi();
      }
      return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 19:
      return G(Z), null;
    case 4:
      return Si(), null;
    case 10:
      return xu(e.type._context), null;
    case 22:
    case 23:
      return Iu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var sr = !1, ke = !1, B0 = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function ii(t, e) {
  var n = t.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (i) {
    ie(t, e, i);
  }
  else n.current = null;
}
function Pa(t, e, n) {
  try {
    n();
  } catch (i) {
    ie(t, e, i);
  }
}
var Sc = !1;
function V0(t, e) {
  if (pa = Wr, t = ep(), wu(t)) {
    if ("selectionStart" in t) var n = { start: t.selectionStart, end: t.selectionEnd };
    else e: {
      n = (n = t.ownerDocument) && n.defaultView || window;
      var i = n.getSelection && n.getSelection();
      if (i && i.rangeCount !== 0) {
        n = i.anchorNode;
        var s = i.anchorOffset, r = i.focusNode;
        i = i.focusOffset;
        try {
          n.nodeType, r.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0, o = -1, a = -1, u = 0, h = 0, c = t, f = null;
        t: for (; ; ) {
          for (var m; c !== n || s !== 0 && c.nodeType !== 3 || (o = l + s), c !== r || i !== 0 && c.nodeType !== 3 || (a = l + i), c.nodeType === 3 && (l += c.nodeValue.length), (m = c.firstChild) !== null; )
            f = c, c = m;
          for (; ; ) {
            if (c === t) break t;
            if (f === n && ++u === s && (o = l), f === r && ++h === i && (a = l), (m = c.nextSibling) !== null) break;
            c = f, f = c.parentNode;
          }
          c = m;
        }
        n = o === -1 || a === -1 ? null : { start: o, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ma = { focusedElem: t, selectionRange: n }, Wr = !1, P = e; P !== null; ) if (e = P, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, P = t;
  else for (; P !== null; ) {
    e = P;
    try {
      var w = e.alternate;
      if (e.flags & 1024) switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var y = w.memoizedProps, b = w.memoizedState, g = e.stateNode, p = g.getSnapshotBeforeUpdate(e.elementType === e.type ? y : at(e.type, y), b);
            g.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        case 3:
          var v = e.stateNode.containerInfo;
          v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(z(163));
      }
    } catch (E) {
      ie(e, e.return, E);
    }
    if (t = e.sibling, t !== null) {
      t.return = e.return, P = t;
      break;
    }
    P = e.return;
  }
  return w = Sc, Sc = !1, w;
}
function es(t, e, n) {
  var i = e.updateQueue;
  if (i = i !== null ? i.lastEffect : null, i !== null) {
    var s = i = i.next;
    do {
      if ((s.tag & t) === t) {
        var r = s.destroy;
        s.destroy = void 0, r !== void 0 && Pa(e, n, r);
      }
      s = s.next;
    } while (s !== i);
  }
}
function _l(t, e) {
  if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
    var n = e = e.next;
    do {
      if ((n.tag & t) === t) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Oa(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : e.current = t;
  }
}
function Jp(t) {
  var e = t.alternate;
  e !== null && (t.alternate = null, Jp(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[Et], delete e[gs], delete e[ya], delete e[b0], delete e[_0])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
}
function Gp(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Ec(t) {
  e: for (; ; ) {
    for (; t.sibling === null; ) {
      if (t.return === null || Gp(t.return)) return null;
      t = t.return;
    }
    for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      t.child.return = t, t = t.child;
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Ta(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Xr));
  else if (i !== 4 && (t = t.child, t !== null)) for (Ta(t, e, n), t = t.sibling; t !== null; ) Ta(t, e, n), t = t.sibling;
}
function La(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (i !== 4 && (t = t.child, t !== null)) for (La(t, e, n), t = t.sibling; t !== null; ) La(t, e, n), t = t.sibling;
}
var ge = null, ut = !1;
function Ut(t, e, n) {
  for (n = n.child; n !== null; ) Yp(t, e, n), n = n.sibling;
}
function Yp(t, e, n) {
  if (_t && typeof _t.onCommitFiberUnmount == "function") try {
    _t.onCommitFiberUnmount(ml, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ke || ii(n, e);
    case 6:
      var i = ge, s = ut;
      ge = null, Ut(t, e, n), ge = i, ut = s, ge !== null && (ut ? (t = ge, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null && (ut ? (t = ge, n = n.stateNode, t.nodeType === 8 ? lo(t.parentNode, n) : t.nodeType === 1 && lo(t, n), fs(t)) : lo(ge, n.stateNode));
      break;
    case 4:
      i = ge, s = ut, ge = n.stateNode.containerInfo, ut = !0, Ut(t, e, n), ge = i, ut = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ke && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
        s = i = i.next;
        do {
          var r = s, l = r.destroy;
          r = r.tag, l !== void 0 && (r & 2 || r & 4) && Pa(n, e, l), s = s.next;
        } while (s !== i);
      }
      Ut(t, e, n);
      break;
    case 1:
      if (!ke && (ii(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
        i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
      } catch (o) {
        ie(n, e, o);
      }
      Ut(t, e, n);
      break;
    case 21:
      Ut(t, e, n);
      break;
    case 22:
      n.mode & 1 ? (ke = (i = ke) || n.memoizedState !== null, Ut(t, e, n), ke = i) : Ut(t, e, n);
      break;
    default:
      Ut(t, e, n);
  }
}
function bc(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new B0()), e.forEach(function(i) {
      var s = Q0.bind(null, t, i);
      n.has(i) || (n.add(i), i.then(s, s));
    });
  }
}
function ot(t, e) {
  var n = e.deletions;
  if (n !== null) for (var i = 0; i < n.length; i++) {
    var s = n[i];
    try {
      var r = t, l = e, o = l;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            ge = o.stateNode, ut = !1;
            break e;
          case 3:
            ge = o.stateNode.containerInfo, ut = !0;
            break e;
          case 4:
            ge = o.stateNode.containerInfo, ut = !0;
            break e;
        }
        o = o.return;
      }
      if (ge === null) throw Error(z(160));
      Yp(r, l, s), ge = null, ut = !1;
      var a = s.alternate;
      a !== null && (a.return = null), s.return = null;
    } catch (u) {
      ie(s, e, u);
    }
  }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) Zp(e, t), e = e.sibling;
}
function Zp(t, e) {
  var n = t.alternate, i = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ot(e, t), yt(t), i & 4) {
        try {
          es(3, t, t.return), _l(3, t);
        } catch (y) {
          ie(t, t.return, y);
        }
        try {
          es(5, t, t.return);
        } catch (y) {
          ie(t, t.return, y);
        }
      }
      break;
    case 1:
      ot(e, t), yt(t), i & 512 && n !== null && ii(n, n.return);
      break;
    case 5:
      if (ot(e, t), yt(t), i & 512 && n !== null && ii(n, n.return), t.flags & 32) {
        var s = t.stateNode;
        try {
          as(s, "");
        } catch (y) {
          ie(t, t.return, y);
        }
      }
      if (i & 4 && (s = t.stateNode, s != null)) {
        var r = t.memoizedProps, l = n !== null ? n.memoizedProps : r, o = t.type, a = t.updateQueue;
        if (t.updateQueue = null, a !== null) try {
          o === "input" && r.type === "radio" && r.name != null && Ed(s, r), sa(o, l);
          var u = sa(o, r);
          for (l = 0; l < a.length; l += 2) {
            var h = a[l], c = a[l + 1];
            h === "style" ? Cd(s, c) : h === "dangerouslySetInnerHTML" ? kd(s, c) : h === "children" ? as(s, c) : lu(s, h, c, u);
          }
          switch (o) {
            case "input":
              Zo(s, r);
              break;
            case "textarea":
              bd(s, r);
              break;
            case "select":
              var f = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!r.multiple;
              var m = r.value;
              m != null ? ai(s, !!r.multiple, m, !1) : f !== !!r.multiple && (r.defaultValue != null ? ai(
                s,
                !!r.multiple,
                r.defaultValue,
                !0
              ) : ai(s, !!r.multiple, r.multiple ? [] : "", !1));
          }
          s[gs] = r;
        } catch (y) {
          ie(t, t.return, y);
        }
      }
      break;
    case 6:
      if (ot(e, t), yt(t), i & 4) {
        if (t.stateNode === null) throw Error(z(162));
        s = t.stateNode, r = t.memoizedProps;
        try {
          s.nodeValue = r;
        } catch (y) {
          ie(t, t.return, y);
        }
      }
      break;
    case 3:
      if (ot(e, t), yt(t), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
        fs(e.containerInfo);
      } catch (y) {
        ie(t, t.return, y);
      }
      break;
    case 4:
      ot(e, t), yt(t);
      break;
    case 13:
      ot(e, t), yt(t), s = t.child, s.flags & 8192 && (r = s.memoizedState !== null, s.stateNode.isHidden = r, !r || s.alternate !== null && s.alternate.memoizedState !== null || (Bu = re())), i & 4 && bc(t);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, t.mode & 1 ? (ke = (u = ke) || h, ot(e, t), ke = u) : ot(e, t), yt(t), i & 8192) {
        if (u = t.memoizedState !== null, (t.stateNode.isHidden = u) && !h && t.mode & 1) for (P = t, h = t.child; h !== null; ) {
          for (c = P = h; P !== null; ) {
            switch (f = P, m = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                es(4, f, f.return);
                break;
              case 1:
                ii(f, f.return);
                var w = f.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  i = f, n = f.return;
                  try {
                    e = i, w.props = e.memoizedProps, w.state = e.memoizedState, w.componentWillUnmount();
                  } catch (y) {
                    ie(i, n, y);
                  }
                }
                break;
              case 5:
                ii(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  kc(c);
                  continue;
                }
            }
            m !== null ? (m.return = f, P = m) : kc(c);
          }
          h = h.sibling;
        }
        e: for (h = null, c = t; ; ) {
          if (c.tag === 5) {
            if (h === null) {
              h = c;
              try {
                s = c.stateNode, u ? (r = s.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none") : (o = c.stateNode, a = c.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, o.style.display = xd("display", l));
              } catch (y) {
                ie(t, t.return, y);
              }
            }
          } else if (c.tag === 6) {
            if (h === null) try {
              c.stateNode.nodeValue = u ? "" : c.memoizedProps;
            } catch (y) {
              ie(t, t.return, y);
            }
          } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === t) && c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
          if (c === t) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === t) break e;
            h === c && (h = null), c = c.return;
          }
          h === c && (h = null), c.sibling.return = c.return, c = c.sibling;
        }
      }
      break;
    case 19:
      ot(e, t), yt(t), i & 4 && bc(t);
      break;
    case 21:
      break;
    default:
      ot(
        e,
        t
      ), yt(t);
  }
}
function yt(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (Gp(n)) {
            var i = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (i.tag) {
        case 5:
          var s = i.stateNode;
          i.flags & 32 && (as(s, ""), i.flags &= -33);
          var r = Ec(t);
          La(t, r, s);
          break;
        case 3:
        case 4:
          var l = i.stateNode.containerInfo, o = Ec(t);
          Ta(t, o, l);
          break;
        default:
          throw Error(z(161));
      }
    } catch (a) {
      ie(t, t.return, a);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function I0(t, e, n) {
  P = t, em(t);
}
function em(t, e, n) {
  for (var i = (t.mode & 1) !== 0; P !== null; ) {
    var s = P, r = s.child;
    if (s.tag === 22 && i) {
      var l = s.memoizedState !== null || sr;
      if (!l) {
        var o = s.alternate, a = o !== null && o.memoizedState !== null || ke;
        o = sr;
        var u = ke;
        if (sr = l, (ke = a) && !u) for (P = s; P !== null; ) l = P, a = l.child, l.tag === 22 && l.memoizedState !== null ? xc(s) : a !== null ? (a.return = l, P = a) : xc(s);
        for (; r !== null; ) P = r, em(r), r = r.sibling;
        P = s, sr = o, ke = u;
      }
      _c(t);
    } else s.subtreeFlags & 8772 && r !== null ? (r.return = s, P = r) : _c(t);
  }
}
function _c(t) {
  for (; P !== null; ) {
    var e = P;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772) switch (e.tag) {
          case 0:
          case 11:
          case 15:
            ke || _l(5, e);
            break;
          case 1:
            var i = e.stateNode;
            if (e.flags & 4 && !ke) if (n === null) i.componentDidMount();
            else {
              var s = e.elementType === e.type ? n.memoizedProps : at(e.type, n.memoizedProps);
              i.componentDidUpdate(s, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
            }
            var r = e.updateQueue;
            r !== null && oc(e, r, i);
            break;
          case 3:
            var l = e.updateQueue;
            if (l !== null) {
              if (n = null, e.child !== null) switch (e.child.tag) {
                case 5:
                  n = e.child.stateNode;
                  break;
                case 1:
                  n = e.child.stateNode;
              }
              oc(e, l, n);
            }
            break;
          case 5:
            var o = e.stateNode;
            if (n === null && e.flags & 4) {
              n = o;
              var a = e.memoizedProps;
              switch (e.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (e.memoizedState === null) {
              var u = e.alternate;
              if (u !== null) {
                var h = u.memoizedState;
                if (h !== null) {
                  var c = h.dehydrated;
                  c !== null && fs(c);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(z(163));
        }
        ke || e.flags & 512 && Oa(e);
      } catch (f) {
        ie(e, e.return, f);
      }
    }
    if (e === t) {
      P = null;
      break;
    }
    if (n = e.sibling, n !== null) {
      n.return = e.return, P = n;
      break;
    }
    P = e.return;
  }
}
function kc(t) {
  for (; P !== null; ) {
    var e = P;
    if (e === t) {
      P = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      n.return = e.return, P = n;
      break;
    }
    P = e.return;
  }
}
function xc(t) {
  for (; P !== null; ) {
    var e = P;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            _l(4, e);
          } catch (a) {
            ie(e, n, a);
          }
          break;
        case 1:
          var i = e.stateNode;
          if (typeof i.componentDidMount == "function") {
            var s = e.return;
            try {
              i.componentDidMount();
            } catch (a) {
              ie(e, s, a);
            }
          }
          var r = e.return;
          try {
            Oa(e);
          } catch (a) {
            ie(e, r, a);
          }
          break;
        case 5:
          var l = e.return;
          try {
            Oa(e);
          } catch (a) {
            ie(e, l, a);
          }
      }
    } catch (a) {
      ie(e, e.return, a);
    }
    if (e === t) {
      P = null;
      break;
    }
    var o = e.sibling;
    if (o !== null) {
      o.return = e.return, P = o;
      break;
    }
    P = e.return;
  }
}
var j0 = Math.ceil, sl = It.ReactCurrentDispatcher, Au = It.ReactCurrentOwner, et = It.ReactCurrentBatchConfig, B = 0, ve = null, ae = null, we = 0, je = 0, si = mn(0), fe = 0, _s = null, On = 0, kl = 0, Fu = 0, ts = null, Te = null, Bu = 0, bi = 1 / 0, zt = null, rl = !1, Da = null, ln = null, rr = !1, Gt = null, ll = 0, ns = 0, $a = null, Rr = -1, Pr = 0;
function Ne() {
  return B & 6 ? re() : Rr !== -1 ? Rr : Rr = re();
}
function on(t) {
  return t.mode & 1 ? B & 2 && we !== 0 ? we & -we : x0.transition !== null ? (Pr === 0 && (Pr = Fd()), Pr) : (t = I, t !== 0 || (t = window.event, t = t === void 0 ? 16 : Hd(t.type)), t) : 1;
}
function ft(t, e, n, i) {
  if (50 < ns) throw ns = 0, $a = null, Error(z(185));
  Ps(t, n, i), (!(B & 2) || t !== ve) && (t === ve && (!(B & 2) && (kl |= n), fe === 4 && Qt(t, we)), Ae(t, i), n === 1 && B === 0 && !(e.mode & 1) && (bi = re() + 500, Sl && vn()));
}
function Ae(t, e) {
  var n = t.callbackNode;
  xg(t, e);
  var i = Ur(t, t === ve ? we : 0);
  if (i === 0) n !== null && Lh(n), t.callbackNode = null, t.callbackPriority = 0;
  else if (e = i & -i, t.callbackPriority !== e) {
    if (n != null && Lh(n), e === 1) t.tag === 0 ? k0(Cc.bind(null, t)) : hp(Cc.bind(null, t)), S0(function() {
      !(B & 6) && vn();
    }), n = null;
    else {
      switch (Bd(i)) {
        case 1:
          n = cu;
          break;
        case 4:
          n = $d;
          break;
        case 16:
          n = jr;
          break;
        case 536870912:
          n = Ad;
          break;
        default:
          n = jr;
      }
      n = am(n, tm.bind(null, t));
    }
    t.callbackPriority = e, t.callbackNode = n;
  }
}
function tm(t, e) {
  if (Rr = -1, Pr = 0, B & 6) throw Error(z(327));
  var n = t.callbackNode;
  if (di() && t.callbackNode !== n) return null;
  var i = Ur(t, t === ve ? we : 0);
  if (i === 0) return null;
  if (i & 30 || i & t.expiredLanes || e) e = ol(t, i);
  else {
    e = i;
    var s = B;
    B |= 2;
    var r = im();
    (ve !== t || we !== e) && (zt = null, bi = re() + 500, xn(t, e));
    do
      try {
        H0();
        break;
      } catch (o) {
        nm(t, o);
      }
    while (!0);
    ku(), sl.current = r, B = s, ae !== null ? e = 0 : (ve = null, we = 0, e = fe);
  }
  if (e !== 0) {
    if (e === 2 && (s = ua(t), s !== 0 && (i = s, e = Aa(t, s))), e === 1) throw n = _s, xn(t, 0), Qt(t, i), Ae(t, re()), n;
    if (e === 6) Qt(t, i);
    else {
      if (s = t.current.alternate, !(i & 30) && !U0(s) && (e = ol(t, i), e === 2 && (r = ua(t), r !== 0 && (i = r, e = Aa(t, r))), e === 1)) throw n = _s, xn(t, 0), Qt(t, i), Ae(t, re()), n;
      switch (t.finishedWork = s, t.finishedLanes = i, e) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          Sn(t, Te, zt);
          break;
        case 3:
          if (Qt(t, i), (i & 130023424) === i && (e = Bu + 500 - re(), 10 < e)) {
            if (Ur(t, 0) !== 0) break;
            if (s = t.suspendedLanes, (s & i) !== i) {
              Ne(), t.pingedLanes |= t.suspendedLanes & s;
              break;
            }
            t.timeoutHandle = ga(Sn.bind(null, t, Te, zt), e);
            break;
          }
          Sn(t, Te, zt);
          break;
        case 4:
          if (Qt(t, i), (i & 4194240) === i) break;
          for (e = t.eventTimes, s = -1; 0 < i; ) {
            var l = 31 - ct(i);
            r = 1 << l, l = e[l], l > s && (s = l), i &= ~r;
          }
          if (i = s, i = re() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * j0(i / 1960)) - i, 10 < i) {
            t.timeoutHandle = ga(Sn.bind(null, t, Te, zt), i);
            break;
          }
          Sn(t, Te, zt);
          break;
        case 5:
          Sn(t, Te, zt);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Ae(t, re()), t.callbackNode === n ? tm.bind(null, t) : null;
}
function Aa(t, e) {
  var n = ts;
  return t.current.memoizedState.isDehydrated && (xn(t, e).flags |= 256), t = ol(t, e), t !== 2 && (e = Te, Te = n, e !== null && Fa(e)), t;
}
function Fa(t) {
  Te === null ? Te = t : Te.push.apply(Te, t);
}
function U0(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var i = 0; i < n.length; i++) {
        var s = n[i], r = s.getSnapshot;
        s = s.value;
        try {
          if (!dt(r(), s)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
  }
  return !0;
}
function Qt(t, e) {
  for (e &= ~Fu, e &= ~kl, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e; ) {
    var n = 31 - ct(e), i = 1 << n;
    t[n] = -1, e &= ~i;
  }
}
function Cc(t) {
  if (B & 6) throw Error(z(327));
  di();
  var e = Ur(t, 0);
  if (!(e & 1)) return Ae(t, re()), null;
  var n = ol(t, e);
  if (t.tag !== 0 && n === 2) {
    var i = ua(t);
    i !== 0 && (e = i, n = Aa(t, i));
  }
  if (n === 1) throw n = _s, xn(t, 0), Qt(t, e), Ae(t, re()), n;
  if (n === 6) throw Error(z(345));
  return t.finishedWork = t.current.alternate, t.finishedLanes = e, Sn(t, Te, zt), Ae(t, re()), null;
}
function Vu(t, e) {
  var n = B;
  B |= 1;
  try {
    return t(e);
  } finally {
    B = n, B === 0 && (bi = re() + 500, Sl && vn());
  }
}
function Tn(t) {
  Gt !== null && Gt.tag === 0 && !(B & 6) && di();
  var e = B;
  B |= 1;
  var n = et.transition, i = I;
  try {
    if (et.transition = null, I = 1, t) return t();
  } finally {
    I = i, et.transition = n, B = e, !(B & 6) && vn();
  }
}
function Iu() {
  je = si.current, G(si);
}
function xn(t, e) {
  t.finishedWork = null, t.finishedLanes = 0;
  var n = t.timeoutHandle;
  if (n !== -1 && (t.timeoutHandle = -1, w0(n)), ae !== null) for (n = ae.return; n !== null; ) {
    var i = n;
    switch (Eu(i), i.tag) {
      case 1:
        i = i.type.childContextTypes, i != null && qr();
        break;
      case 3:
        Si(), G(De), G(Ce), Ru();
        break;
      case 5:
        Nu(i);
        break;
      case 4:
        Si();
        break;
      case 13:
        G(Z);
        break;
      case 19:
        G(Z);
        break;
      case 10:
        xu(i.type._context);
        break;
      case 22:
      case 23:
        Iu();
    }
    n = n.return;
  }
  if (ve = t, ae = t = an(t.current, null), we = je = e, fe = 0, _s = null, Fu = kl = On = 0, Te = ts = null, bn !== null) {
    for (e = 0; e < bn.length; e++) if (n = bn[e], i = n.interleaved, i !== null) {
      n.interleaved = null;
      var s = i.next, r = n.pending;
      if (r !== null) {
        var l = r.next;
        r.next = s, i.next = l;
      }
      n.pending = i;
    }
    bn = null;
  }
  return t;
}
function nm(t, e) {
  do {
    var n = ae;
    try {
      if (ku(), Mr.current = il, nl) {
        for (var i = ee.memoizedState; i !== null; ) {
          var s = i.queue;
          s !== null && (s.pending = null), i = i.next;
        }
        nl = !1;
      }
      if (Pn = 0, me = ce = ee = null, Zi = !1, Ss = 0, Au.current = null, n === null || n.return === null) {
        fe = 1, _s = e, ae = null;
        break;
      }
      e: {
        var r = t, l = n.return, o = n, a = e;
        if (e = we, o.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, h = o, c = h.tag;
          if (!(h.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = h.alternate;
            f ? (h.updateQueue = f.updateQueue, h.memoizedState = f.memoizedState, h.lanes = f.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var m = dc(l);
          if (m !== null) {
            m.flags &= -257, pc(m, l, o, r, e), m.mode & 1 && fc(r, u, e), e = m, a = u;
            var w = e.updateQueue;
            if (w === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(a), e.updateQueue = y;
            } else w.add(a);
            break e;
          } else {
            if (!(e & 1)) {
              fc(r, u, e), ju();
              break e;
            }
            a = Error(z(426));
          }
        } else if (Y && o.mode & 1) {
          var b = dc(l);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), pc(b, l, o, r, e), bu(Ei(a, o));
            break e;
          }
        }
        r = a = Ei(a, o), fe !== 4 && (fe = 2), ts === null ? ts = [r] : ts.push(r), r = l;
        do {
          switch (r.tag) {
            case 3:
              r.flags |= 65536, e &= -e, r.lanes |= e;
              var g = Bp(r, a, e);
              lc(r, g);
              break e;
            case 1:
              o = a;
              var p = r.type, v = r.stateNode;
              if (!(r.flags & 128) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (ln === null || !ln.has(v)))) {
                r.flags |= 65536, e &= -e, r.lanes |= e;
                var E = Vp(r, o, e);
                lc(r, E);
                break e;
              }
          }
          r = r.return;
        } while (r !== null);
      }
      rm(n);
    } catch (_) {
      e = _, ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function im() {
  var t = sl.current;
  return sl.current = il, t === null ? il : t;
}
function ju() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4), ve === null || !(On & 268435455) && !(kl & 268435455) || Qt(ve, we);
}
function ol(t, e) {
  var n = B;
  B |= 2;
  var i = im();
  (ve !== t || we !== e) && (zt = null, xn(t, e));
  do
    try {
      W0();
      break;
    } catch (s) {
      nm(t, s);
    }
  while (!0);
  if (ku(), B = n, sl.current = i, ae !== null) throw Error(z(261));
  return ve = null, we = 0, fe;
}
function W0() {
  for (; ae !== null; ) sm(ae);
}
function H0() {
  for (; ae !== null && !vg(); ) sm(ae);
}
function sm(t) {
  var e = om(t.alternate, t, je);
  t.memoizedProps = t.pendingProps, e === null ? rm(t) : ae = e, Au.current = null;
}
function rm(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (t = e.return, e.flags & 32768) {
      if (n = F0(n, e), n !== null) {
        n.flags &= 32767, ae = n;
        return;
      }
      if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
      else {
        fe = 6, ae = null;
        return;
      }
    } else if (n = A0(n, e, je), n !== null) {
      ae = n;
      return;
    }
    if (e = e.sibling, e !== null) {
      ae = e;
      return;
    }
    ae = e = t;
  } while (e !== null);
  fe === 0 && (fe = 5);
}
function Sn(t, e, n) {
  var i = I, s = et.transition;
  try {
    et.transition = null, I = 1, K0(t, e, n, i);
  } finally {
    et.transition = s, I = i;
  }
  return null;
}
function K0(t, e, n, i) {
  do
    di();
  while (Gt !== null);
  if (B & 6) throw Error(z(327));
  n = t.finishedWork;
  var s = t.finishedLanes;
  if (n === null) return null;
  if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(z(177));
  t.callbackNode = null, t.callbackPriority = 0;
  var r = n.lanes | n.childLanes;
  if (Cg(t, r), t === ve && (ae = ve = null, we = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || rr || (rr = !0, am(jr, function() {
    return di(), null;
  })), r = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || r) {
    r = et.transition, et.transition = null;
    var l = I;
    I = 1;
    var o = B;
    B |= 4, Au.current = null, V0(t, n), Zp(n, t), f0(ma), Wr = !!pa, ma = pa = null, t.current = n, I0(n), gg(), B = o, I = l, et.transition = r;
  } else t.current = n;
  if (rr && (rr = !1, Gt = t, ll = s), r = t.pendingLanes, r === 0 && (ln = null), Sg(n.stateNode), Ae(t, re()), e !== null) for (i = t.onRecoverableError, n = 0; n < e.length; n++) s = e[n], i(s.value, { componentStack: s.stack, digest: s.digest });
  if (rl) throw rl = !1, t = Da, Da = null, t;
  return ll & 1 && t.tag !== 0 && di(), r = t.pendingLanes, r & 1 ? t === $a ? ns++ : (ns = 0, $a = t) : ns = 0, vn(), null;
}
function di() {
  if (Gt !== null) {
    var t = Bd(ll), e = et.transition, n = I;
    try {
      if (et.transition = null, I = 16 > t ? 16 : t, Gt === null) var i = !1;
      else {
        if (t = Gt, Gt = null, ll = 0, B & 6) throw Error(z(331));
        var s = B;
        for (B |= 4, P = t.current; P !== null; ) {
          var r = P, l = r.child;
          if (P.flags & 16) {
            var o = r.deletions;
            if (o !== null) {
              for (var a = 0; a < o.length; a++) {
                var u = o[a];
                for (P = u; P !== null; ) {
                  var h = P;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      es(8, h, r);
                  }
                  var c = h.child;
                  if (c !== null) c.return = h, P = c;
                  else for (; P !== null; ) {
                    h = P;
                    var f = h.sibling, m = h.return;
                    if (Jp(h), h === u) {
                      P = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = m, P = f;
                      break;
                    }
                    P = m;
                  }
                }
              }
              var w = r.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var b = y.sibling;
                    y.sibling = null, y = b;
                  } while (y !== null);
                }
              }
              P = r;
            }
          }
          if (r.subtreeFlags & 2064 && l !== null) l.return = r, P = l;
          else e: for (; P !== null; ) {
            if (r = P, r.flags & 2048) switch (r.tag) {
              case 0:
              case 11:
              case 15:
                es(9, r, r.return);
            }
            var g = r.sibling;
            if (g !== null) {
              g.return = r.return, P = g;
              break e;
            }
            P = r.return;
          }
        }
        var p = t.current;
        for (P = p; P !== null; ) {
          l = P;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) v.return = l, P = v;
          else e: for (l = p; P !== null; ) {
            if (o = P, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  _l(9, o);
              }
            } catch (_) {
              ie(o, o.return, _);
            }
            if (o === l) {
              P = null;
              break e;
            }
            var E = o.sibling;
            if (E !== null) {
              E.return = o.return, P = E;
              break e;
            }
            P = o.return;
          }
        }
        if (B = s, vn(), _t && typeof _t.onPostCommitFiberRoot == "function") try {
          _t.onPostCommitFiberRoot(ml, t);
        } catch {
        }
        i = !0;
      }
      return i;
    } finally {
      I = n, et.transition = e;
    }
  }
  return !1;
}
function Mc(t, e, n) {
  e = Ei(n, e), e = Bp(t, e, 1), t = rn(t, e, 1), e = Ne(), t !== null && (Ps(t, 1, e), Ae(t, e));
}
function ie(t, e, n) {
  if (t.tag === 3) Mc(t, t, n);
  else for (; e !== null; ) {
    if (e.tag === 3) {
      Mc(e, t, n);
      break;
    } else if (e.tag === 1) {
      var i = e.stateNode;
      if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ln === null || !ln.has(i))) {
        t = Ei(n, t), t = Vp(e, t, 1), e = rn(e, t, 1), t = Ne(), e !== null && (Ps(e, 1, t), Ae(e, t));
        break;
      }
    }
    e = e.return;
  }
}
function X0(t, e, n) {
  var i = t.pingCache;
  i !== null && i.delete(e), e = Ne(), t.pingedLanes |= t.suspendedLanes & n, ve === t && (we & n) === n && (fe === 4 || fe === 3 && (we & 130023424) === we && 500 > re() - Bu ? xn(t, 0) : Fu |= n), Ae(t, e);
}
function lm(t, e) {
  e === 0 && (t.mode & 1 ? (e = Qs, Qs <<= 1, !(Qs & 130023424) && (Qs = 4194304)) : e = 1);
  var n = Ne();
  t = At(t, e), t !== null && (Ps(t, e, n), Ae(t, n));
}
function q0(t) {
  var e = t.memoizedState, n = 0;
  e !== null && (n = e.retryLane), lm(t, n);
}
function Q0(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var i = t.stateNode, s = t.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      i = t.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  i !== null && i.delete(e), lm(t, n);
}
var om;
om = function(t, e, n) {
  if (t !== null) if (t.memoizedProps !== e.pendingProps || De.current) Le = !0;
  else {
    if (!(t.lanes & n) && !(e.flags & 128)) return Le = !1, $0(t, e, n);
    Le = !!(t.flags & 131072);
  }
  else Le = !1, Y && e.flags & 1048576 && cp(e, Gr, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var i = e.type;
      Nr(t, e), t = e.pendingProps;
      var s = gi(e, Ce.current);
      fi(e, n), s = Ou(null, e, i, t, s, n);
      var r = Tu();
      return e.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, $e(i) ? (r = !0, Qr(e)) : r = !1, e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, Mu(e), s.updater = bl, e.stateNode = s, s._reactInternals = e, ka(e, i, t, n), e = Ma(null, e, i, !0, r, n)) : (e.tag = 0, Y && r && Su(e), ze(null, e, s, n), e = e.child), e;
    case 16:
      i = e.elementType;
      e: {
        switch (Nr(t, e), t = e.pendingProps, s = i._init, i = s(i._payload), e.type = i, s = e.tag = G0(i), t = at(i, t), s) {
          case 0:
            e = Ca(null, e, i, t, n);
            break e;
          case 1:
            e = gc(null, e, i, t, n);
            break e;
          case 11:
            e = mc(null, e, i, t, n);
            break e;
          case 14:
            e = vc(null, e, i, at(i.type, t), n);
            break e;
        }
        throw Error(z(
          306,
          i,
          ""
        ));
      }
      return e;
    case 0:
      return i = e.type, s = e.pendingProps, s = e.elementType === i ? s : at(i, s), Ca(t, e, i, s, n);
    case 1:
      return i = e.type, s = e.pendingProps, s = e.elementType === i ? s : at(i, s), gc(t, e, i, s, n);
    case 3:
      e: {
        if (Wp(e), t === null) throw Error(z(387));
        i = e.pendingProps, r = e.memoizedState, s = r.element, gp(t, e), el(e, i, null, n);
        var l = e.memoizedState;
        if (i = l.element, r.isDehydrated) if (r = { element: i, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, e.updateQueue.baseState = r, e.memoizedState = r, e.flags & 256) {
          s = Ei(Error(z(423)), e), e = yc(t, e, i, n, s);
          break e;
        } else if (i !== s) {
          s = Ei(Error(z(424)), e), e = yc(t, e, i, n, s);
          break e;
        } else for (Ue = sn(e.stateNode.containerInfo.firstChild), We = e, Y = !0, ht = null, n = mp(e, null, i, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (yi(), i === s) {
            e = Ft(t, e, n);
            break e;
          }
          ze(t, e, i, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return yp(e), t === null && Ea(e), i = e.type, s = e.pendingProps, r = t !== null ? t.memoizedProps : null, l = s.children, va(i, s) ? l = null : r !== null && va(i, r) && (e.flags |= 32), Up(t, e), ze(t, e, l, n), e.child;
    case 6:
      return t === null && Ea(e), null;
    case 13:
      return Hp(t, e, n);
    case 4:
      return zu(e, e.stateNode.containerInfo), i = e.pendingProps, t === null ? e.child = wi(e, null, i, n) : ze(t, e, i, n), e.child;
    case 11:
      return i = e.type, s = e.pendingProps, s = e.elementType === i ? s : at(i, s), mc(t, e, i, s, n);
    case 7:
      return ze(t, e, e.pendingProps, n), e.child;
    case 8:
      return ze(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return ze(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (i = e.type._context, s = e.pendingProps, r = e.memoizedProps, l = s.value, H(Yr, i._currentValue), i._currentValue = l, r !== null) if (dt(r.value, l)) {
          if (r.children === s.children && !De.current) {
            e = Ft(t, e, n);
            break e;
          }
        } else for (r = e.child, r !== null && (r.return = e); r !== null; ) {
          var o = r.dependencies;
          if (o !== null) {
            l = r.child;
            for (var a = o.firstContext; a !== null; ) {
              if (a.context === i) {
                if (r.tag === 1) {
                  a = Lt(-1, n & -n), a.tag = 2;
                  var u = r.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var h = u.pending;
                    h === null ? a.next = a : (a.next = h.next, h.next = a), u.pending = a;
                  }
                }
                r.lanes |= n, a = r.alternate, a !== null && (a.lanes |= n), ba(
                  r.return,
                  n,
                  e
                ), o.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (r.tag === 10) l = r.type === e.type ? null : r.child;
          else if (r.tag === 18) {
            if (l = r.return, l === null) throw Error(z(341));
            l.lanes |= n, o = l.alternate, o !== null && (o.lanes |= n), ba(l, n, e), l = r.sibling;
          } else l = r.child;
          if (l !== null) l.return = r;
          else for (l = r; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            if (r = l.sibling, r !== null) {
              r.return = l.return, l = r;
              break;
            }
            l = l.return;
          }
          r = l;
        }
        ze(t, e, s.children, n), e = e.child;
      }
      return e;
    case 9:
      return s = e.type, i = e.pendingProps.children, fi(e, n), s = tt(s), i = i(s), e.flags |= 1, ze(t, e, i, n), e.child;
    case 14:
      return i = e.type, s = at(i, e.pendingProps), s = at(i.type, s), vc(t, e, i, s, n);
    case 15:
      return Ip(t, e, e.type, e.pendingProps, n);
    case 17:
      return i = e.type, s = e.pendingProps, s = e.elementType === i ? s : at(i, s), Nr(t, e), e.tag = 1, $e(i) ? (t = !0, Qr(e)) : t = !1, fi(e, n), Fp(e, i, s), ka(e, i, s, n), Ma(null, e, i, !0, t, n);
    case 19:
      return Kp(t, e, n);
    case 22:
      return jp(t, e, n);
  }
  throw Error(z(156, e.tag));
};
function am(t, e) {
  return Dd(t, e);
}
function J0(t, e, n, i) {
  this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ze(t, e, n, i) {
  return new J0(t, e, n, i);
}
function Uu(t) {
  return t = t.prototype, !(!t || !t.isReactComponent);
}
function G0(t) {
  if (typeof t == "function") return Uu(t) ? 1 : 0;
  if (t != null) {
    if (t = t.$$typeof, t === au) return 11;
    if (t === uu) return 14;
  }
  return 2;
}
function an(t, e) {
  var n = t.alternate;
  return n === null ? (n = Ze(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n;
}
function Or(t, e, n, i, s, r) {
  var l = 2;
  if (i = t, typeof t == "function") Uu(t) && (l = 1);
  else if (typeof t == "string") l = 5;
  else e: switch (t) {
    case qn:
      return Cn(n.children, s, r, e);
    case ou:
      l = 8, s |= 8;
      break;
    case qo:
      return t = Ze(12, n, e, s | 2), t.elementType = qo, t.lanes = r, t;
    case Qo:
      return t = Ze(13, n, e, s), t.elementType = Qo, t.lanes = r, t;
    case Jo:
      return t = Ze(19, n, e, s), t.elementType = Jo, t.lanes = r, t;
    case yd:
      return xl(n, s, r, e);
    default:
      if (typeof t == "object" && t !== null) switch (t.$$typeof) {
        case vd:
          l = 10;
          break e;
        case gd:
          l = 9;
          break e;
        case au:
          l = 11;
          break e;
        case uu:
          l = 14;
          break e;
        case Kt:
          l = 16, i = null;
          break e;
      }
      throw Error(z(130, t == null ? t : typeof t, ""));
  }
  return e = Ze(l, n, e, s), e.elementType = t, e.type = i, e.lanes = r, e;
}
function Cn(t, e, n, i) {
  return t = Ze(7, t, i, e), t.lanes = n, t;
}
function xl(t, e, n, i) {
  return t = Ze(22, t, i, e), t.elementType = yd, t.lanes = n, t.stateNode = { isHidden: !1 }, t;
}
function mo(t, e, n) {
  return t = Ze(6, t, null, e), t.lanes = n, t;
}
function vo(t, e, n) {
  return e = Ze(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
}
function Y0(t, e, n, i, s) {
  this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ql(0), this.expirationTimes = Ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ql(0), this.identifierPrefix = i, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
}
function Wu(t, e, n, i, s, r, l, o, a) {
  return t = new Y0(t, e, n, o, a), e === 1 ? (e = 1, r === !0 && (e |= 8)) : e = 0, r = Ze(3, null, null, e), t.current = r, r.stateNode = t, r.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Mu(r), t;
}
function Z0(t, e, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Xn, key: i == null ? null : "" + i, children: t, containerInfo: e, implementation: n };
}
function um(t) {
  if (!t) return cn;
  t = t._reactInternals;
  e: {
    if (jn(t) !== t || t.tag !== 1) throw Error(z(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if ($e(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(z(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if ($e(n)) return up(t, n, e);
  }
  return e;
}
function hm(t, e, n, i, s, r, l, o, a) {
  return t = Wu(n, i, !0, t, s, r, l, o, a), t.context = um(null), n = t.current, i = Ne(), s = on(n), r = Lt(i, s), r.callback = e ?? null, rn(n, r, s), t.current.lanes = s, Ps(t, s, i), Ae(t, i), t;
}
function Cl(t, e, n, i) {
  var s = e.current, r = Ne(), l = on(s);
  return n = um(n), e.context === null ? e.context = n : e.pendingContext = n, e = Lt(r, l), e.payload = { element: t }, i = i === void 0 ? null : i, i !== null && (e.callback = i), t = rn(s, e, l), t !== null && (ft(t, s, l, r), Cr(t, s, l)), l;
}
function al(t) {
  if (t = t.current, !t.child) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function zc(t, e) {
  if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Hu(t, e) {
  zc(t, e), (t = t.alternate) && zc(t, e);
}
function ey() {
  return null;
}
var cm = typeof reportError == "function" ? reportError : function(t) {
  console.error(t);
};
function Ku(t) {
  this._internalRoot = t;
}
Ml.prototype.render = Ku.prototype.render = function(t) {
  var e = this._internalRoot;
  if (e === null) throw Error(z(409));
  Cl(t, e, null, null);
};
Ml.prototype.unmount = Ku.prototype.unmount = function() {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Tn(function() {
      Cl(null, t, null, null);
    }), e[$t] = null;
  }
};
function Ml(t) {
  this._internalRoot = t;
}
Ml.prototype.unstable_scheduleHydration = function(t) {
  if (t) {
    var e = jd();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < qt.length && e !== 0 && e < qt[n].priority; n++) ;
    qt.splice(n, 0, t), n === 0 && Wd(t);
  }
};
function Xu(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
}
function zl(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
}
function Nc() {
}
function ty(t, e, n, i, s) {
  if (s) {
    if (typeof i == "function") {
      var r = i;
      i = function() {
        var u = al(l);
        r.call(u);
      };
    }
    var l = hm(e, i, t, 0, null, !1, !1, "", Nc);
    return t._reactRootContainer = l, t[$t] = l.current, ms(t.nodeType === 8 ? t.parentNode : t), Tn(), l;
  }
  for (; s = t.lastChild; ) t.removeChild(s);
  if (typeof i == "function") {
    var o = i;
    i = function() {
      var u = al(a);
      o.call(u);
    };
  }
  var a = Wu(t, 0, !1, null, null, !1, !1, "", Nc);
  return t._reactRootContainer = a, t[$t] = a.current, ms(t.nodeType === 8 ? t.parentNode : t), Tn(function() {
    Cl(e, a, n, i);
  }), a;
}
function Nl(t, e, n, i, s) {
  var r = n._reactRootContainer;
  if (r) {
    var l = r;
    if (typeof s == "function") {
      var o = s;
      s = function() {
        var a = al(l);
        o.call(a);
      };
    }
    Cl(e, l, t, s);
  } else l = ty(n, e, t, s, i);
  return al(l);
}
Vd = function(t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Ki(e.pendingLanes);
        n !== 0 && (fu(e, n | 1), Ae(e, re()), !(B & 6) && (bi = re() + 500, vn()));
      }
      break;
    case 13:
      Tn(function() {
        var i = At(t, 1);
        if (i !== null) {
          var s = Ne();
          ft(i, t, 1, s);
        }
      }), Hu(t, 1);
  }
};
du = function(t) {
  if (t.tag === 13) {
    var e = At(t, 134217728);
    if (e !== null) {
      var n = Ne();
      ft(e, t, 134217728, n);
    }
    Hu(t, 134217728);
  }
};
Id = function(t) {
  if (t.tag === 13) {
    var e = on(t), n = At(t, e);
    if (n !== null) {
      var i = Ne();
      ft(n, t, e, i);
    }
    Hu(t, e);
  }
};
jd = function() {
  return I;
};
Ud = function(t, e) {
  var n = I;
  try {
    return I = t, e();
  } finally {
    I = n;
  }
};
la = function(t, e, n) {
  switch (e) {
    case "input":
      if (Zo(t, n), e = n.name, n.type === "radio" && e != null) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
          var i = n[e];
          if (i !== t && i.form === t.form) {
            var s = wl(i);
            if (!s) throw Error(z(90));
            Sd(i), Zo(i, s);
          }
        }
      }
      break;
    case "textarea":
      bd(t, n);
      break;
    case "select":
      e = n.value, e != null && ai(t, !!n.multiple, e, !1);
  }
};
Nd = Vu;
Rd = Tn;
var ny = { usingClientEntryPoint: !1, Events: [Ts, Yn, wl, Md, zd, Vu] }, Fi = { findFiberByHostInstance: En, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, iy = { bundleType: Fi.bundleType, version: Fi.version, rendererPackageName: Fi.rendererPackageName, rendererConfig: Fi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: It.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
  return t = Td(t), t === null ? null : t.stateNode;
}, findFiberByHostInstance: Fi.findFiberByHostInstance || ey, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var lr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!lr.isDisabled && lr.supportsFiber) try {
    ml = lr.inject(iy), _t = lr;
  } catch {
  }
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ny;
Ke.createPortal = function(t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xu(e)) throw Error(z(200));
  return Z0(t, e, null, n);
};
Ke.createRoot = function(t, e) {
  if (!Xu(t)) throw Error(z(299));
  var n = !1, i = "", s = cm;
  return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onRecoverableError !== void 0 && (s = e.onRecoverableError)), e = Wu(t, 1, !1, null, null, n, !1, i, s), t[$t] = e.current, ms(t.nodeType === 8 ? t.parentNode : t), new Ku(e);
};
Ke.findDOMNode = function(t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function" ? Error(z(188)) : (t = Object.keys(t).join(","), Error(z(268, t)));
  return t = Td(e), t = t === null ? null : t.stateNode, t;
};
Ke.flushSync = function(t) {
  return Tn(t);
};
Ke.hydrate = function(t, e, n) {
  if (!zl(e)) throw Error(z(200));
  return Nl(null, t, e, !0, n);
};
Ke.hydrateRoot = function(t, e, n) {
  if (!Xu(t)) throw Error(z(405));
  var i = n != null && n.hydratedSources || null, s = !1, r = "", l = cm;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), e = hm(e, null, t, 1, n ?? null, s, !1, r, l), t[$t] = e.current, ms(t), i) for (t = 0; t < i.length; t++) n = i[t], s = n._getVersion, s = s(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, s] : e.mutableSourceEagerHydrationData.push(
    n,
    s
  );
  return new Ml(e);
};
Ke.render = function(t, e, n) {
  if (!zl(e)) throw Error(z(200));
  return Nl(null, t, e, !1, n);
};
Ke.unmountComponentAtNode = function(t) {
  if (!zl(t)) throw Error(z(40));
  return t._reactRootContainer ? (Tn(function() {
    Nl(null, null, t, !1, function() {
      t._reactRootContainer = null, t[$t] = null;
    });
  }), !0) : !1;
};
Ke.unstable_batchedUpdates = Vu;
Ke.unstable_renderSubtreeIntoContainer = function(t, e, n, i) {
  if (!zl(n)) throw Error(z(200));
  if (t == null || t._reactInternals === void 0) throw Error(z(38));
  return Nl(t, e, n, !1, i);
};
Ke.version = "18.3.1-next-f1338f8080-20240426";
function fm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fm);
    } catch (t) {
      console.error(t);
    }
}
fm(), fd.exports = Ke;
var sy = fd.exports, dm, Rc = sy;
dm = Rc.createRoot, Rc.hydrateRoot;
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ry = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ly = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V = (t, e) => {
  const n = W.forwardRef(
    ({
      color: i = "currentColor",
      size: s = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: l,
      className: o = "",
      children: a,
      ...u
    }, h) => W.createElement(
      "svg",
      {
        ref: h,
        ...ry,
        width: s,
        height: s,
        stroke: i,
        strokeWidth: l ? Number(r) * 24 / Number(s) : r,
        className: ["lucide", `lucide-${ly(t)}`, o].join(" "),
        ...u
      },
      [
        ...e.map(([c, f]) => W.createElement(c, f)),
        ...Array.isArray(a) ? a : [a]
      ]
    )
  );
  return n.displayName = `${t}`, n;
};
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = V("Activity", [
  ["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oy = V("ArrowDownUp", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "m21 8-4-4-4 4", key: "1c9v7m" }],
  ["path", { d: "M17 4v16", key: "7dpous" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ay = V("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = V("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = V("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cy = V("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = V("Bitcoin", [
  [
    "path",
    {
      d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",
      key: "yr8idg"
    }
  ]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mm = V("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vm = V("CandlestickChart", [
  ["path", { d: "M9 5v4", key: "14uxtq" }],
  ["rect", { width: "4", height: "6", x: "7", y: "9", rx: "1", key: "f4fvz0" }],
  ["path", { d: "M9 15v2", key: "r5rk32" }],
  ["path", { d: "M17 3v2", key: "1l2re6" }],
  ["rect", { width: "4", height: "8", x: "15", y: "5", rx: "1", key: "z38je5" }],
  ["path", { d: "M17 13v3", key: "5l0wba" }],
  ["path", { d: "M3 3v18h18", key: "1s2lah" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fy = V("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = V("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qu = V("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const py = V("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const my = V("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vy = V("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = V("Cpu", [
  ["rect", { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" }],
  ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yy = V("Crosshair", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }],
  ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }],
  ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gm = V("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = V("FlaskConical", [
  [
    "path",
    {
      d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",
      key: "pzvekw"
    }
  ],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M7 16h10", key: "wp8him" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ym = V("Gauge", [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sy = V("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wm = V("Layers3", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw"
    }
  ],
  [
    "path",
    {
      d: "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
      key: "1e5n1m"
    }
  ],
  [
    "path",
    {
      d: "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
      key: "1iwflc"
    }
  ]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ey = V("LineChart", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qu = V("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const by = V("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sm = V("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Em = V("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _y = V("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pc = V("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = V("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xy = V("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function J(t) {
  var e = t.width, n = t.height;
  if (e < 0)
    throw new Error("Negative width is not allowed for Size");
  if (n < 0)
    throw new Error("Negative height is not allowed for Size");
  return {
    width: e,
    height: n
  };
}
function Mn(t, e) {
  return t.width === e.width && t.height === e.height;
}
var Cy = (
  /** @class */
  function() {
    function t(e) {
      var n = this;
      this._resolutionListener = function() {
        return n._onResolutionChanged();
      }, this._resolutionMediaQueryList = null, this._observers = [], this._window = e, this._installResolutionListener();
    }
    return t.prototype.dispose = function() {
      this._uninstallResolutionListener(), this._window = null;
    }, Object.defineProperty(t.prototype, "value", {
      get: function() {
        return this._window.devicePixelRatio;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.subscribe = function(e) {
      var n = this, i = { next: e };
      return this._observers.push(i), {
        unsubscribe: function() {
          n._observers = n._observers.filter(function(s) {
            return s !== i;
          });
        }
      };
    }, t.prototype._installResolutionListener = function() {
      if (this._resolutionMediaQueryList !== null)
        throw new Error("Resolution listener is already installed");
      var e = this._window.devicePixelRatio;
      this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(e, "dppx)")), this._resolutionMediaQueryList.addListener(this._resolutionListener);
    }, t.prototype._uninstallResolutionListener = function() {
      this._resolutionMediaQueryList !== null && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null);
    }, t.prototype._reinstallResolutionListener = function() {
      this._uninstallResolutionListener(), this._installResolutionListener();
    }, t.prototype._onResolutionChanged = function() {
      var e = this;
      this._observers.forEach(function(n) {
        return n.next(e._window.devicePixelRatio);
      }), this._reinstallResolutionListener();
    }, t;
  }()
);
function My(t) {
  return new Cy(t);
}
var zy = (
  /** @class */
  function() {
    function t(e, n, i) {
      var s;
      this._canvasElement = null, this._bitmapSizeChangedListeners = [], this._suggestedBitmapSize = null, this._suggestedBitmapSizeChangedListeners = [], this._devicePixelRatioObservable = null, this._canvasElementResizeObserver = null, this._canvasElement = e, this._canvasElementClientSize = J({
        width: this._canvasElement.clientWidth,
        height: this._canvasElement.clientHeight
      }), this._transformBitmapSize = n ?? function(r) {
        return r;
      }, this._allowResizeObserver = (s = i == null ? void 0 : i.allowResizeObserver) !== null && s !== void 0 ? s : !0, this._chooseAndInitObserver();
    }
    return t.prototype.dispose = function() {
      var e, n;
      if (this._canvasElement === null)
        throw new Error("Object is disposed");
      (e = this._canvasElementResizeObserver) === null || e === void 0 || e.disconnect(), this._canvasElementResizeObserver = null, (n = this._devicePixelRatioObservable) === null || n === void 0 || n.dispose(), this._devicePixelRatioObservable = null, this._suggestedBitmapSizeChangedListeners.length = 0, this._bitmapSizeChangedListeners.length = 0, this._canvasElement = null;
    }, Object.defineProperty(t.prototype, "canvasElement", {
      get: function() {
        if (this._canvasElement === null)
          throw new Error("Object is disposed");
        return this._canvasElement;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "canvasElementClientSize", {
      get: function() {
        return this._canvasElementClientSize;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "bitmapSize", {
      get: function() {
        return J({
          width: this.canvasElement.width,
          height: this.canvasElement.height
        });
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.resizeCanvasElement = function(e) {
      this._canvasElementClientSize = J(e), this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px"), this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px"), this._invalidateBitmapSize();
    }, t.prototype.subscribeBitmapSizeChanged = function(e) {
      this._bitmapSizeChangedListeners.push(e);
    }, t.prototype.unsubscribeBitmapSizeChanged = function(e) {
      this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter(function(n) {
        return n !== e;
      });
    }, Object.defineProperty(t.prototype, "suggestedBitmapSize", {
      get: function() {
        return this._suggestedBitmapSize;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.subscribeSuggestedBitmapSizeChanged = function(e) {
      this._suggestedBitmapSizeChangedListeners.push(e);
    }, t.prototype.unsubscribeSuggestedBitmapSizeChanged = function(e) {
      this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter(function(n) {
        return n !== e;
      });
    }, t.prototype.applySuggestedBitmapSize = function() {
      if (this._suggestedBitmapSize !== null) {
        var e = this._suggestedBitmapSize;
        this._suggestedBitmapSize = null, this._resizeBitmap(e), this._emitSuggestedBitmapSizeChanged(e, this._suggestedBitmapSize);
      }
    }, t.prototype._resizeBitmap = function(e) {
      var n = this.bitmapSize;
      Mn(n, e) || (this.canvasElement.width = e.width, this.canvasElement.height = e.height, this._emitBitmapSizeChanged(n, e));
    }, t.prototype._emitBitmapSizeChanged = function(e, n) {
      var i = this;
      this._bitmapSizeChangedListeners.forEach(function(s) {
        return s.call(i, e, n);
      });
    }, t.prototype._suggestNewBitmapSize = function(e) {
      var n = this._suggestedBitmapSize, i = J(this._transformBitmapSize(e, this._canvasElementClientSize)), s = Mn(this.bitmapSize, i) ? null : i;
      n === null && s === null || n !== null && s !== null && Mn(n, s) || (this._suggestedBitmapSize = s, this._emitSuggestedBitmapSizeChanged(n, s));
    }, t.prototype._emitSuggestedBitmapSizeChanged = function(e, n) {
      var i = this;
      this._suggestedBitmapSizeChangedListeners.forEach(function(s) {
        return s.call(i, e, n);
      });
    }, t.prototype._chooseAndInitObserver = function() {
      var e = this;
      if (!this._allowResizeObserver) {
        this._initDevicePixelRatioObservable();
        return;
      }
      Ry().then(function(n) {
        return n ? e._initResizeObserver() : e._initDevicePixelRatioObservable();
      });
    }, t.prototype._initDevicePixelRatioObservable = function() {
      var e = this;
      if (this._canvasElement !== null) {
        var n = Oc(this._canvasElement);
        if (n === null)
          throw new Error("No window is associated with the canvas");
        this._devicePixelRatioObservable = My(n), this._devicePixelRatioObservable.subscribe(function() {
          return e._invalidateBitmapSize();
        }), this._invalidateBitmapSize();
      }
    }, t.prototype._invalidateBitmapSize = function() {
      var e, n;
      if (this._canvasElement !== null) {
        var i = Oc(this._canvasElement);
        if (i !== null) {
          var s = (n = (e = this._devicePixelRatioObservable) === null || e === void 0 ? void 0 : e.value) !== null && n !== void 0 ? n : i.devicePixelRatio, r = this._canvasElement.getClientRects(), l = (
            // eslint-disable-next-line no-negated-condition
            r[0] !== void 0 ? Py(r[0], s) : J({
              width: this._canvasElementClientSize.width * s,
              height: this._canvasElementClientSize.height * s
            })
          );
          this._suggestNewBitmapSize(l);
        }
      }
    }, t.prototype._initResizeObserver = function() {
      var e = this;
      this._canvasElement !== null && (this._canvasElementResizeObserver = new ResizeObserver(function(n) {
        var i = n.find(function(l) {
          return l.target === e._canvasElement;
        });
        if (!(!i || !i.devicePixelContentBoxSize || !i.devicePixelContentBoxSize[0])) {
          var s = i.devicePixelContentBoxSize[0], r = J({
            width: s.inlineSize,
            height: s.blockSize
          });
          e._suggestNewBitmapSize(r);
        }
      }), this._canvasElementResizeObserver.observe(this._canvasElement, { box: "device-pixel-content-box" }));
    }, t;
  }()
);
function Ny(t, e) {
  return new zy(t, e.transform, e.options);
}
function Oc(t) {
  return t.ownerDocument.defaultView;
}
function Ry() {
  return new Promise(function(t) {
    var e = new ResizeObserver(function(n) {
      t(n.every(function(i) {
        return "devicePixelContentBoxSize" in i;
      })), e.disconnect();
    });
    e.observe(document.body, { box: "device-pixel-content-box" });
  }).catch(function() {
    return !1;
  });
}
function Py(t, e) {
  return J({
    width: Math.round(t.left * e + t.width * e) - Math.round(t.left * e),
    height: Math.round(t.top * e + t.height * e) - Math.round(t.top * e)
  });
}
var Oy = (
  /** @class */
  function() {
    function t(e, n, i) {
      if (n.width === 0 || n.height === 0)
        throw new TypeError("Rendering target could only be created on a media with positive width and height");
      if (this._mediaSize = n, i.width === 0 || i.height === 0)
        throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");
      this._bitmapSize = i, this._context = e;
    }
    return t.prototype.useMediaCoordinateSpace = function(e) {
      try {
        return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio), e({
          context: this._context,
          mediaSize: this._mediaSize
        });
      } finally {
        this._context.restore();
      }
    }, t.prototype.useBitmapCoordinateSpace = function(e) {
      try {
        return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), e({
          context: this._context,
          mediaSize: this._mediaSize,
          bitmapSize: this._bitmapSize,
          horizontalPixelRatio: this._horizontalPixelRatio,
          verticalPixelRatio: this._verticalPixelRatio
        });
      } finally {
        this._context.restore();
      }
    }, Object.defineProperty(t.prototype, "_horizontalPixelRatio", {
      get: function() {
        return this._bitmapSize.width / this._mediaSize.width;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "_verticalPixelRatio", {
      get: function() {
        return this._bitmapSize.height / this._mediaSize.height;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }()
);
function Ln(t, e) {
  var n = t.canvasElementClientSize;
  if (n.width === 0 || n.height === 0)
    return null;
  var i = t.bitmapSize;
  if (i.width === 0 || i.height === 0)
    return null;
  var s = t.canvasElement.getContext("2d", e);
  return s === null ? null : new Oy(s, n, i);
}
/*!
 * @license
 * TradingView Lightweight Charts™ v4.2.3
 * Copyright (c) 2025 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
const Ty = { upColor: "#26a69a", downColor: "#ef5350", wickVisible: !0, borderVisible: !0, borderColor: "#378658", borderUpColor: "#26a69a", borderDownColor: "#ef5350", wickColor: "#737375", wickUpColor: "#26a69a", wickDownColor: "#ef5350" }, Ly = { upColor: "#26a69a", downColor: "#ef5350", openVisible: !0, thinBars: !0 }, Dy = { color: "#2196f3", lineStyle: 0, lineWidth: 3, lineType: 0, lineVisible: !0, crosshairMarkerVisible: !0, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBorderWidth: 2, crosshairMarkerBackgroundColor: "", lastPriceAnimation: 0, pointMarkersVisible: !1 }, $y = { topColor: "rgba( 46, 220, 135, 0.4)", bottomColor: "rgba( 40, 221, 100, 0)", invertFilledArea: !1, lineColor: "#33D778", lineStyle: 0, lineWidth: 3, lineType: 0, lineVisible: !0, crosshairMarkerVisible: !0, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBorderWidth: 2, crosshairMarkerBackgroundColor: "", lastPriceAnimation: 0, pointMarkersVisible: !1 }, Ay = { baseValue: { type: "price", price: 0 }, topFillColor1: "rgba(38, 166, 154, 0.28)", topFillColor2: "rgba(38, 166, 154, 0.05)", topLineColor: "rgba(38, 166, 154, 1)", bottomFillColor1: "rgba(239, 83, 80, 0.05)", bottomFillColor2: "rgba(239, 83, 80, 0.28)", bottomLineColor: "rgba(239, 83, 80, 1)", lineWidth: 3, lineStyle: 0, lineType: 0, lineVisible: !0, crosshairMarkerVisible: !0, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBorderWidth: 2, crosshairMarkerBackgroundColor: "", lastPriceAnimation: 0, pointMarkersVisible: !1 }, Fy = { color: "#26a69a", base: 0 }, bm = { color: "#2196f3" }, _m = { title: "", visible: !0, lastValueVisible: !0, priceLineVisible: !0, priceLineSource: 0, priceLineWidth: 1, priceLineColor: "", priceLineStyle: 2, baseLineVisible: !0, baseLineWidth: 1, baseLineColor: "#B2B5BE", baseLineStyle: 0, priceFormat: { type: "price", precision: 2, minMove: 0.01 } };
var Tc, ul;
function Dn(t, e) {
  const n = { 0: [], 1: [t.lineWidth, t.lineWidth], 2: [2 * t.lineWidth, 2 * t.lineWidth], 3: [6 * t.lineWidth, 6 * t.lineWidth], 4: [t.lineWidth, 4 * t.lineWidth] }[e];
  t.setLineDash(n);
}
function km(t, e, n, i) {
  t.beginPath();
  const s = t.lineWidth % 2 ? 0.5 : 0;
  t.moveTo(n, e + s), t.lineTo(i, e + s), t.stroke();
}
function fn(t, e) {
  if (!t) throw new Error("Assertion failed" + (e ? ": " + e : ""));
}
function Re(t) {
  if (t === void 0) throw new Error("Value is undefined");
  return t;
}
function M(t) {
  if (t === null) throw new Error("Value is null");
  return t;
}
function ri(t) {
  return M(Re(t));
}
(function(t) {
  t[t.Simple = 0] = "Simple", t[t.WithSteps = 1] = "WithSteps", t[t.Curved = 2] = "Curved";
})(Tc || (Tc = {})), function(t) {
  t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted";
}(ul || (ul = {}));
const Lc = { khaki: "#f0e68c", azure: "#f0ffff", aliceblue: "#f0f8ff", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", gray: "#808080", green: "#008000", honeydew: "#f0fff0", floralwhite: "#fffaf0", lightblue: "#add8e6", lightcoral: "#f08080", lemonchiffon: "#fffacd", hotpink: "#ff69b4", lightyellow: "#ffffe0", greenyellow: "#adff2f", lightgoldenrodyellow: "#fafad2", limegreen: "#32cd32", linen: "#faf0e6", lightcyan: "#e0ffff", magenta: "#f0f", maroon: "#800000", olive: "#808000", orange: "#ffa500", oldlace: "#fdf5e6", mediumblue: "#0000cd", transparent: "#0000", lime: "#0f0", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", midnightblue: "#191970", orchid: "#da70d6", mediumorchid: "#ba55d3", mediumturquoise: "#48d1cc", orangered: "#ff4500", royalblue: "#4169e1", powderblue: "#b0e0e6", red: "#f00", coral: "#ff7f50", turquoise: "#40e0d0", white: "#fff", whitesmoke: "#f5f5f5", wheat: "#f5deb3", teal: "#008080", steelblue: "#4682b4", bisque: "#ffe4c4", aquamarine: "#7fffd4", aqua: "#0ff", sienna: "#a0522d", silver: "#c0c0c0", springgreen: "#00ff7f", antiquewhite: "#faebd7", burlywood: "#deb887", brown: "#a52a2a", beige: "#f5f5dc", chocolate: "#d2691e", chartreuse: "#7fff00", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cadetblue: "#5f9ea0", tomato: "#ff6347", fuchsia: "#f0f", blue: "#00f", salmon: "#fa8072", blanchedalmond: "#ffebcd", slateblue: "#6a5acd", slategray: "#708090", thistle: "#d8bfd8", tan: "#d2b48c", cyan: "#0ff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", blueviolet: "#8a2be2", black: "#000", darkmagenta: "#8b008b", darkslateblue: "#483d8b", darkkhaki: "#bdb76b", darkorchid: "#9932cc", darkorange: "#ff8c00", darkgreen: "#006400", darkred: "#8b0000", dodgerblue: "#1e90ff", darkslategray: "#2f4f4f", dimgray: "#696969", deepskyblue: "#00bfff", firebrick: "#b22222", forestgreen: "#228b22", indigo: "#4b0082", ivory: "#fffff0", lavenderblush: "#fff0f5", feldspar: "#d19275", indianred: "#cd5c5c", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightskyblue: "#87cefa", lightslategray: "#789", lightslateblue: "#8470ff", snow: "#fffafa", lightseagreen: "#20b2aa", lightsalmon: "#ffa07a", darksalmon: "#e9967a", darkviolet: "#9400d3", mediumpurple: "#9370d8", mediumaquamarine: "#66cdaa", skyblue: "#87ceeb", lavender: "#e6e6fa", lightsteelblue: "#b0c4de", mediumvioletred: "#c71585", mintcream: "#f5fffa", navajowhite: "#ffdead", navy: "#000080", olivedrab: "#6b8e23", palevioletred: "#d87093", violetred: "#d02090", yellow: "#ff0", yellowgreen: "#9acd32", lawngreen: "#7cfc00", pink: "#ffc0cb", paleturquoise: "#afeeee", palegoldenrod: "#eee8aa", darkolivegreen: "#556b2f", darkseagreen: "#8fbc8f", darkturquoise: "#00ced1", peachpuff: "#ffdab9", deeppink: "#ff1493", violet: "#ee82ee", palegreen: "#98fb98", mediumseagreen: "#3cb371", peru: "#cd853f", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", purple: "#800080", seagreen: "#2e8b57", seashell: "#fff5ee", papayawhip: "#ffefd5", mediumslateblue: "#7b68ee", plum: "#dda0dd", mediumspringgreen: "#00fa9a" };
function Je(t) {
  return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
}
function xm(t) {
  return t <= 0 || t > 1 ? Math.min(Math.max(t, 0), 1) : Math.round(1e4 * t) / 1e4;
}
const By = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i, Vy = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i, Iy = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/, jy = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d*\.?\d+)\s*\)$/;
function xs(t) {
  (t = t.toLowerCase()) in Lc && (t = Lc[t]);
  {
    const e = jy.exec(t) || Iy.exec(t);
    if (e) return [Je(parseInt(e[1], 10)), Je(parseInt(e[2], 10)), Je(parseInt(e[3], 10)), xm(e.length < 5 ? 1 : parseFloat(e[4]))];
  }
  {
    const e = Vy.exec(t);
    if (e) return [Je(parseInt(e[1], 16)), Je(parseInt(e[2], 16)), Je(parseInt(e[3], 16)), 1];
  }
  {
    const e = By.exec(t);
    if (e) return [Je(17 * parseInt(e[1], 16)), Je(17 * parseInt(e[2], 16)), Je(17 * parseInt(e[3], 16)), 1];
  }
  throw new Error(`Cannot parse color: ${t}`);
}
function Cm(t) {
  return 0.199 * t[0] + 0.687 * t[1] + 0.114 * t[2];
}
function Rl(t) {
  const e = xs(t);
  return { t: `rgb(${e[0]}, ${e[1]}, ${e[2]})`, i: Cm(e) > 160 ? "black" : "white" };
}
class le {
  constructor() {
    this.h = [];
  }
  l(e, n, i) {
    const s = { o: e, _: n, u: i === !0 };
    this.h.push(s);
  }
  v(e) {
    const n = this.h.findIndex((i) => e === i.o);
    n > -1 && this.h.splice(n, 1);
  }
  p(e) {
    this.h = this.h.filter((n) => n._ !== e);
  }
  m(e, n, i) {
    const s = [...this.h];
    this.h = this.h.filter((r) => !r.u), s.forEach((r) => r.o(e, n, i));
  }
  M() {
    return this.h.length > 0;
  }
  S() {
    this.h = [];
  }
}
function pt(t, ...e) {
  for (const n of e) for (const i in n) n[i] !== void 0 && Object.prototype.hasOwnProperty.call(n, i) && !["__proto__", "constructor", "prototype"].includes(i) && (typeof n[i] != "object" || t[i] === void 0 || Array.isArray(n[i]) ? t[i] = n[i] : pt(t[i], n[i]));
  return t;
}
function bt(t) {
  return typeof t == "number" && isFinite(t);
}
function Cs(t) {
  return typeof t == "number" && t % 1 == 0;
}
function Ds(t) {
  return typeof t == "string";
}
function or(t) {
  return typeof t == "boolean";
}
function Ot(t) {
  const e = t;
  if (!e || typeof e != "object") return e;
  let n, i, s;
  for (i in n = Array.isArray(e) ? [] : {}, e) e.hasOwnProperty(i) && (s = e[i], n[i] = s && typeof s == "object" ? Ot(s) : s);
  return n;
}
function Uy(t) {
  return t !== null;
}
function Ms(t) {
  return t === null ? void 0 : t;
}
const Ju = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
function _i(t, e, n) {
  return e === void 0 && (e = Ju), `${n = n !== void 0 ? `${n} ` : ""}${t}px ${e}`;
}
class Wy {
  constructor(e) {
    this.k = { C: 1, T: 5, P: NaN, R: "", D: "", V: "", O: "", B: 0, A: 0, I: 0, L: 0, N: 0 }, this.F = e;
  }
  W() {
    const e = this.k, n = this.j(), i = this.H();
    return e.P === n && e.D === i || (e.P = n, e.D = i, e.R = _i(n, i), e.L = 2.5 / 12 * n, e.B = e.L, e.A = n / 12 * e.T, e.I = n / 12 * e.T, e.N = 0), e.V = this.$(), e.O = this.U(), this.k;
  }
  $() {
    return this.F.W().layout.textColor;
  }
  U() {
    return this.F.q();
  }
  j() {
    return this.F.W().layout.fontSize;
  }
  H() {
    return this.F.W().layout.fontFamily;
  }
}
class Gu {
  constructor() {
    this.Y = [];
  }
  Z(e) {
    this.Y = e;
  }
  X(e, n, i) {
    this.Y.forEach((s) => {
      s.X(e, n, i);
    });
  }
}
class vt {
  X(e, n, i) {
    e.useBitmapCoordinateSpace((s) => this.K(s, n, i));
  }
}
class Hy extends vt {
  constructor() {
    super(...arguments), this.G = null;
  }
  J(e) {
    this.G = e;
  }
  K({ context: e, horizontalPixelRatio: n, verticalPixelRatio: i }) {
    if (this.G === null || this.G.tt === null) return;
    const s = this.G.tt, r = this.G, l = Math.max(1, Math.floor(n)) % 2 / 2, o = (a) => {
      e.beginPath();
      for (let u = s.to - 1; u >= s.from; --u) {
        const h = r.it[u], c = Math.round(h.nt * n) + l, f = h.st * i, m = a * i + l;
        e.moveTo(c, f), e.arc(c, f, m, 0, 2 * Math.PI);
      }
      e.fill();
    };
    r.et > 0 && (e.fillStyle = r.rt, o(r.ht + r.et)), e.fillStyle = r.lt, o(r.ht);
  }
}
function Ky() {
  return { it: [{ nt: 0, st: 0, ot: 0, _t: 0 }], lt: "", rt: "", ht: 0, et: 0, tt: null };
}
const Xy = { from: 0, to: 1 };
class qy {
  constructor(e, n) {
    this.ut = new Gu(), this.ct = [], this.dt = [], this.ft = !0, this.F = e, this.vt = n, this.ut.Z(this.ct);
  }
  bt(e) {
    const n = this.F.wt();
    n.length !== this.ct.length && (this.dt = n.map(Ky), this.ct = this.dt.map((i) => {
      const s = new Hy();
      return s.J(i), s;
    }), this.ut.Z(this.ct)), this.ft = !0;
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.ut;
  }
  Mt() {
    const e = this.vt.W().mode === 2, n = this.F.wt(), i = this.vt.xt(), s = this.F.St();
    n.forEach((r, l) => {
      var o;
      const a = this.dt[l], u = r.kt(i);
      if (e || u === null || !r.yt()) return void (a.tt = null);
      const h = M(r.Ct());
      a.lt = u.Tt, a.ht = u.ht, a.et = u.Pt, a.it[0]._t = u._t, a.it[0].st = r.Dt().Rt(u._t, h.Vt), a.rt = (o = u.Ot) !== null && o !== void 0 ? o : this.F.Bt(a.it[0].st / r.Dt().At()), a.it[0].ot = i, a.it[0].nt = s.It(i), a.tt = Xy;
    });
  }
}
class Qy extends vt {
  constructor(e) {
    super(), this.zt = e;
  }
  K({ context: e, bitmapSize: n, horizontalPixelRatio: i, verticalPixelRatio: s }) {
    if (this.zt === null) return;
    const r = this.zt.Lt.yt, l = this.zt.Et.yt;
    if (!r && !l) return;
    const o = Math.round(this.zt.nt * i), a = Math.round(this.zt.st * s);
    e.lineCap = "butt", r && o >= 0 && (e.lineWidth = Math.floor(this.zt.Lt.et * i), e.strokeStyle = this.zt.Lt.V, e.fillStyle = this.zt.Lt.V, Dn(e, this.zt.Lt.Nt), function(u, h, c, f) {
      u.beginPath();
      const m = u.lineWidth % 2 ? 0.5 : 0;
      u.moveTo(h + m, c), u.lineTo(h + m, f), u.stroke();
    }(e, o, 0, n.height)), l && a >= 0 && (e.lineWidth = Math.floor(this.zt.Et.et * s), e.strokeStyle = this.zt.Et.V, e.fillStyle = this.zt.Et.V, Dn(e, this.zt.Et.Nt), km(e, a, 0, n.width));
  }
}
class Jy {
  constructor(e) {
    this.ft = !0, this.Ft = { Lt: { et: 1, Nt: 0, V: "", yt: !1 }, Et: { et: 1, Nt: 0, V: "", yt: !1 }, nt: 0, st: 0 }, this.Wt = new Qy(this.Ft), this.jt = e;
  }
  bt() {
    this.ft = !0;
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.Wt;
  }
  Mt() {
    const e = this.jt.yt(), n = M(this.jt.Ht()), i = n.$t().W().crosshair, s = this.Ft;
    if (i.mode === 2) return s.Et.yt = !1, void (s.Lt.yt = !1);
    s.Et.yt = e && this.jt.Ut(n), s.Lt.yt = e && this.jt.qt(), s.Et.et = i.horzLine.width, s.Et.Nt = i.horzLine.style, s.Et.V = i.horzLine.color, s.Lt.et = i.vertLine.width, s.Lt.Nt = i.vertLine.style, s.Lt.V = i.vertLine.color, s.nt = this.jt.Yt(), s.st = this.jt.Zt();
  }
}
function Gy(t, e, n, i, s, r) {
  t.fillRect(e + r, n, i - 2 * r, r), t.fillRect(e + r, n + s - r, i - 2 * r, r), t.fillRect(e, n, r, s), t.fillRect(e + i - r, n, r, s);
}
function Pl(t, e, n, i, s, r) {
  t.save(), t.globalCompositeOperation = "copy", t.fillStyle = r, t.fillRect(e, n, i, s), t.restore();
}
function Dc(t, e, n, i, s, r) {
  t.beginPath(), t.roundRect ? t.roundRect(e, n, i, s, r) : (t.lineTo(e + i - r[1], n), r[1] !== 0 && t.arcTo(e + i, n, e + i, n + r[1], r[1]), t.lineTo(e + i, n + s - r[2]), r[2] !== 0 && t.arcTo(e + i, n + s, e + i - r[2], n + s, r[2]), t.lineTo(e + r[3], n + s), r[3] !== 0 && t.arcTo(e, n + s, e, n + s - r[3], r[3]), t.lineTo(e, n + r[0]), r[0] !== 0 && t.arcTo(e, n, e + r[0], n, r[0]));
}
function $c(t, e, n, i, s, r, l = 0, o = [0, 0, 0, 0], a = "") {
  if (t.save(), !l || !a || a === r) return Dc(t, e, n, i, s, o), t.fillStyle = r, t.fill(), void t.restore();
  const u = l / 2;
  var h;
  Dc(t, e + u, n + u, i - l, s - l, (h = -u, o.map((c) => c === 0 ? c : c + h))), r !== "transparent" && (t.fillStyle = r, t.fill()), a !== "transparent" && (t.lineWidth = l, t.strokeStyle = a, t.closePath(), t.stroke()), t.restore();
}
function Mm(t, e, n, i, s, r, l) {
  t.save(), t.globalCompositeOperation = "copy";
  const o = t.createLinearGradient(0, 0, 0, s);
  o.addColorStop(0, r), o.addColorStop(1, l), t.fillStyle = o, t.fillRect(e, n, i, s), t.restore();
}
class Ac {
  constructor(e, n) {
    this.J(e, n);
  }
  J(e, n) {
    this.zt = e, this.Xt = n;
  }
  At(e, n) {
    return this.zt.yt ? e.P + e.L + e.B : 0;
  }
  X(e, n, i, s) {
    if (!this.zt.yt || this.zt.Kt.length === 0) return;
    const r = this.zt.V, l = this.Xt.t, o = e.useBitmapCoordinateSpace((a) => {
      const u = a.context;
      u.font = n.R;
      const h = this.Gt(a, n, i, s), c = h.Jt;
      return h.Qt ? $c(u, c.ti, c.ii, c.ni, c.si, l, c.ei, [c.ht, 0, 0, c.ht], l) : $c(u, c.ri, c.ii, c.ni, c.si, l, c.ei, [0, c.ht, c.ht, 0], l), this.zt.hi && (u.fillStyle = r, u.fillRect(c.ri, c.li, c.ai - c.ri, c.oi)), this.zt._i && (u.fillStyle = n.O, u.fillRect(h.Qt ? c.ui - c.ei : 0, c.ii, c.ei, c.ci - c.ii)), h;
    });
    e.useMediaCoordinateSpace(({ context: a }) => {
      const u = o.di;
      a.font = n.R, a.textAlign = o.Qt ? "right" : "left", a.textBaseline = "middle", a.fillStyle = r, a.fillText(this.zt.Kt, u.fi, (u.ii + u.ci) / 2 + u.pi);
    });
  }
  Gt(e, n, i, s) {
    var r;
    const { context: l, bitmapSize: o, mediaSize: a, horizontalPixelRatio: u, verticalPixelRatio: h } = e, c = this.zt.hi || !this.zt.mi ? n.T : 0, f = this.zt.bi ? n.C : 0, m = n.L + this.Xt.wi, w = n.B + this.Xt.gi, y = n.A, b = n.I, g = this.zt.Kt, p = n.P, v = i.Mi(l, g), E = Math.ceil(i.xi(l, g)), _ = p + m + w, k = n.C + y + b + E + c, C = Math.max(1, Math.floor(h));
    let x = Math.round(_ * h);
    x % 2 != C % 2 && (x += 1);
    const T = f > 0 ? Math.max(1, Math.floor(f * u)) : 0, O = Math.round(k * u), F = Math.round(c * u), K = (r = this.Xt.Si) !== null && r !== void 0 ? r : this.Xt.ki, ne = Math.round(K * h) - Math.floor(0.5 * h), st = Math.floor(ne + C / 2 - x / 2), jt = st + x, he = s === "right", qe = he ? a.width - f : f, R = he ? o.width - T : T;
    let L, D, j;
    return he ? (L = R - O, D = R - F, j = qe - c - y - f) : (L = R + O, D = R + F, j = qe + c + y), { Qt: he, Jt: { ii: st, li: ne, ci: jt, ni: O, si: x, ht: 2 * u, ei: T, ti: L, ri: R, ai: D, oi: C, ui: o.width }, di: { ii: st / h, ci: jt / h, fi: j, pi: v } };
  }
}
class Ol {
  constructor(e) {
    this.yi = { ki: 0, t: "#000", gi: 0, wi: 0 }, this.Ci = { Kt: "", yt: !1, hi: !0, mi: !1, Ot: "", V: "#FFF", _i: !1, bi: !1 }, this.Ti = { Kt: "", yt: !1, hi: !1, mi: !0, Ot: "", V: "#FFF", _i: !0, bi: !0 }, this.ft = !0, this.Pi = new (e || Ac)(this.Ci, this.yi), this.Ri = new (e || Ac)(this.Ti, this.yi);
  }
  Kt() {
    return this.Di(), this.Ci.Kt;
  }
  ki() {
    return this.Di(), this.yi.ki;
  }
  bt() {
    this.ft = !0;
  }
  At(e, n = !1) {
    return Math.max(this.Pi.At(e, n), this.Ri.At(e, n));
  }
  Vi() {
    return this.yi.Si || 0;
  }
  Oi(e) {
    this.yi.Si = e;
  }
  Bi() {
    return this.Di(), this.Ci.yt || this.Ti.yt;
  }
  Ai() {
    return this.Di(), this.Ci.yt;
  }
  gt(e) {
    return this.Di(), this.Ci.hi = this.Ci.hi && e.W().ticksVisible, this.Ti.hi = this.Ti.hi && e.W().ticksVisible, this.Pi.J(this.Ci, this.yi), this.Ri.J(this.Ti, this.yi), this.Pi;
  }
  Ii() {
    return this.Di(), this.Pi.J(this.Ci, this.yi), this.Ri.J(this.Ti, this.yi), this.Ri;
  }
  Di() {
    this.ft && (this.Ci.hi = !0, this.Ti.hi = !1, this.zi(this.Ci, this.Ti, this.yi));
  }
}
class Yy extends Ol {
  constructor(e, n, i) {
    super(), this.jt = e, this.Li = n, this.Ei = i;
  }
  zi(e, n, i) {
    if (e.yt = !1, this.jt.W().mode === 2) return;
    const s = this.jt.W().horzLine;
    if (!s.labelVisible) return;
    const r = this.Li.Ct();
    if (!this.jt.yt() || this.Li.Ni() || r === null) return;
    const l = Rl(s.labelBackgroundColor);
    i.t = l.t, e.V = l.i;
    const o = 2 / 12 * this.Li.P();
    i.wi = o, i.gi = o;
    const a = this.Ei(this.Li);
    i.ki = a.ki, e.Kt = this.Li.Fi(a._t, r), e.yt = !0;
  }
}
const Zy = /[1-9]/g;
class zm {
  constructor() {
    this.zt = null;
  }
  J(e) {
    this.zt = e;
  }
  X(e, n) {
    if (this.zt === null || this.zt.yt === !1 || this.zt.Kt.length === 0) return;
    const i = e.useMediaCoordinateSpace(({ context: f }) => (f.font = n.R, Math.round(n.Wi.xi(f, M(this.zt).Kt, Zy))));
    if (i <= 0) return;
    const s = n.ji, r = i + 2 * s, l = r / 2, o = this.zt.Hi;
    let a = this.zt.ki, u = Math.floor(a - l) + 0.5;
    u < 0 ? (a += Math.abs(0 - u), u = Math.floor(a - l) + 0.5) : u + r > o && (a -= Math.abs(o - (u + r)), u = Math.floor(a - l) + 0.5);
    const h = u + r, c = Math.ceil(0 + n.C + n.T + n.L + n.P + n.B);
    e.useBitmapCoordinateSpace(({ context: f, horizontalPixelRatio: m, verticalPixelRatio: w }) => {
      const y = M(this.zt);
      f.fillStyle = y.t;
      const b = Math.round(u * m), g = Math.round(0 * w), p = Math.round(h * m), v = Math.round(c * w), E = Math.round(2 * m);
      if (f.beginPath(), f.moveTo(b, g), f.lineTo(b, v - E), f.arcTo(b, v, b + E, v, E), f.lineTo(p - E, v), f.arcTo(p, v, p, v - E, E), f.lineTo(p, g), f.fill(), y.hi) {
        const _ = Math.round(y.ki * m), k = g, C = Math.round((k + n.T) * w);
        f.fillStyle = y.V;
        const x = Math.max(1, Math.floor(m)), T = Math.floor(0.5 * m);
        f.fillRect(_ - T, k, x, C - k);
      }
    }), e.useMediaCoordinateSpace(({ context: f }) => {
      const m = M(this.zt), w = 0 + n.C + n.T + n.L + n.P / 2;
      f.font = n.R, f.textAlign = "left", f.textBaseline = "middle", f.fillStyle = m.V;
      const y = n.Wi.Mi(f, "Apr0");
      f.translate(u + s, w + y), f.fillText(m.Kt, 0, 0);
    });
  }
}
class e1 {
  constructor(e, n, i) {
    this.ft = !0, this.Wt = new zm(), this.Ft = { yt: !1, t: "#4c525e", V: "white", Kt: "", Hi: 0, ki: NaN, hi: !0 }, this.vt = e, this.$i = n, this.Ei = i;
  }
  bt() {
    this.ft = !0;
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.Wt.J(this.Ft), this.Wt;
  }
  Mt() {
    const e = this.Ft;
    if (e.yt = !1, this.vt.W().mode === 2) return;
    const n = this.vt.W().vertLine;
    if (!n.labelVisible) return;
    const i = this.$i.St();
    if (i.Ni()) return;
    e.Hi = i.Hi();
    const s = this.Ei();
    if (s === null) return;
    e.ki = s.ki;
    const r = i.Ui(this.vt.xt());
    e.Kt = i.qi(M(r)), e.yt = !0;
    const l = Rl(n.labelBackgroundColor);
    e.t = l.t, e.V = l.i, e.hi = i.W().ticksVisible;
  }
}
class Yu {
  constructor() {
    this.Yi = null, this.Zi = 0;
  }
  Xi() {
    return this.Zi;
  }
  Ki(e) {
    this.Zi = e;
  }
  Dt() {
    return this.Yi;
  }
  Gi(e) {
    this.Yi = e;
  }
  Ji(e) {
    return [];
  }
  Qi() {
    return [];
  }
  yt() {
    return !0;
  }
}
var Fc;
(function(t) {
  t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet", t[t.Hidden = 2] = "Hidden";
})(Fc || (Fc = {}));
class t1 extends Yu {
  constructor(e, n) {
    super(), this.tn = null, this.nn = NaN, this.sn = 0, this.en = !0, this.rn = /* @__PURE__ */ new Map(), this.hn = !1, this.ln = NaN, this.an = NaN, this._n = NaN, this.un = NaN, this.$i = e, this.cn = n, this.dn = new qy(e, this), this.fn = /* @__PURE__ */ ((s, r) => (l) => {
      const o = r(), a = s();
      if (l === M(this.tn).vn()) return { _t: a, ki: o };
      {
        const u = M(l.Ct());
        return { _t: l.pn(o, u), ki: o };
      }
    })(() => this.nn, () => this.an);
    const i = /* @__PURE__ */ ((s, r) => () => {
      const l = this.$i.St().mn(s()), o = r();
      return l && Number.isFinite(o) ? { ot: l, ki: o } : null;
    })(() => this.sn, () => this.Yt());
    this.bn = new e1(this, e, i), this.wn = new Jy(this);
  }
  W() {
    return this.cn;
  }
  gn(e, n) {
    this._n = e, this.un = n;
  }
  Mn() {
    this._n = NaN, this.un = NaN;
  }
  xn() {
    return this._n;
  }
  Sn() {
    return this.un;
  }
  kn(e, n, i) {
    this.hn || (this.hn = !0), this.en = !0, this.yn(e, n, i);
  }
  xt() {
    return this.sn;
  }
  Yt() {
    return this.ln;
  }
  Zt() {
    return this.an;
  }
  yt() {
    return this.en;
  }
  Cn() {
    this.en = !1, this.Tn(), this.nn = NaN, this.ln = NaN, this.an = NaN, this.tn = null, this.Mn();
  }
  Pn(e) {
    return this.tn !== null ? [this.wn, this.dn] : [];
  }
  Ut(e) {
    return e === this.tn && this.cn.horzLine.visible;
  }
  qt() {
    return this.cn.vertLine.visible;
  }
  Rn(e, n) {
    this.en && this.tn === e || this.rn.clear();
    const i = [];
    return this.tn === e && i.push(this.Dn(this.rn, n, this.fn)), i;
  }
  Qi() {
    return this.en ? [this.bn] : [];
  }
  Ht() {
    return this.tn;
  }
  Vn() {
    this.wn.bt(), this.rn.forEach((e) => e.bt()), this.bn.bt(), this.dn.bt();
  }
  On(e) {
    return e && !e.vn().Ni() ? e.vn() : null;
  }
  yn(e, n, i) {
    this.Bn(e, n, i) && this.Vn();
  }
  Bn(e, n, i) {
    const s = this.ln, r = this.an, l = this.nn, o = this.sn, a = this.tn, u = this.On(i);
    this.sn = e, this.ln = isNaN(e) ? NaN : this.$i.St().It(e), this.tn = i;
    const h = u !== null ? u.Ct() : null;
    return u !== null && h !== null ? (this.nn = n, this.an = u.Rt(n, h)) : (this.nn = NaN, this.an = NaN), s !== this.ln || r !== this.an || o !== this.sn || l !== this.nn || a !== this.tn;
  }
  Tn() {
    const e = this.$i.wt().map((i) => i.In().An()).filter(Uy), n = e.length === 0 ? null : Math.max(...e);
    this.sn = n !== null ? n : NaN;
  }
  Dn(e, n, i) {
    let s = e.get(n);
    return s === void 0 && (s = new Yy(this, n, i), e.set(n, s)), s;
  }
}
function Tl(t) {
  return t === "left" || t === "right";
}
class ye {
  constructor(e) {
    this.zn = /* @__PURE__ */ new Map(), this.Ln = [], this.En = e;
  }
  Nn(e, n) {
    const i = function(s, r) {
      return s === void 0 ? r : { Fn: Math.max(s.Fn, r.Fn), Wn: s.Wn || r.Wn };
    }(this.zn.get(e), n);
    this.zn.set(e, i);
  }
  jn() {
    return this.En;
  }
  Hn(e) {
    const n = this.zn.get(e);
    return n === void 0 ? { Fn: this.En } : { Fn: Math.max(this.En, n.Fn), Wn: n.Wn };
  }
  $n() {
    this.Un(), this.Ln = [{ qn: 0 }];
  }
  Yn(e) {
    this.Un(), this.Ln = [{ qn: 1, Vt: e }];
  }
  Zn(e) {
    this.Xn(), this.Ln.push({ qn: 5, Vt: e });
  }
  Un() {
    this.Xn(), this.Ln.push({ qn: 6 });
  }
  Kn() {
    this.Un(), this.Ln = [{ qn: 4 }];
  }
  Gn(e) {
    this.Un(), this.Ln.push({ qn: 2, Vt: e });
  }
  Jn(e) {
    this.Un(), this.Ln.push({ qn: 3, Vt: e });
  }
  Qn() {
    return this.Ln;
  }
  ts(e) {
    for (const n of e.Ln) this.ns(n);
    this.En = Math.max(this.En, e.En), e.zn.forEach((n, i) => {
      this.Nn(i, n);
    });
  }
  static ss() {
    return new ye(2);
  }
  static es() {
    return new ye(3);
  }
  ns(e) {
    switch (e.qn) {
      case 0:
        this.$n();
        break;
      case 1:
        this.Yn(e.Vt);
        break;
      case 2:
        this.Gn(e.Vt);
        break;
      case 3:
        this.Jn(e.Vt);
        break;
      case 4:
        this.Kn();
        break;
      case 5:
        this.Zn(e.Vt);
        break;
      case 6:
        this.Xn();
    }
  }
  Xn() {
    const e = this.Ln.findIndex((n) => n.qn === 5);
    e !== -1 && this.Ln.splice(e, 1);
  }
}
const Bc = ".";
function Tt(t, e) {
  if (!bt(t)) return "n/a";
  if (!Cs(e)) throw new TypeError("invalid length");
  if (e < 0 || e > 16) throw new TypeError("invalid length");
  return e === 0 ? t.toString() : ("0000000000000000" + t.toString()).slice(-e);
}
class Ll {
  constructor(e, n) {
    if (n || (n = 1), bt(e) && Cs(e) || (e = 100), e < 0) throw new TypeError("invalid base");
    this.Li = e, this.rs = n, this.hs();
  }
  format(e) {
    const n = e < 0 ? "−" : "";
    return e = Math.abs(e), n + this.ls(e);
  }
  hs() {
    if (this._s = 0, this.Li > 0 && this.rs > 0) {
      let e = this.Li;
      for (; e > 1; ) e /= 10, this._s++;
    }
  }
  ls(e) {
    const n = this.Li / this.rs;
    let i = Math.floor(e), s = "";
    const r = this._s !== void 0 ? this._s : NaN;
    if (n > 1) {
      let l = +(Math.round(e * n) - i * n).toFixed(this._s);
      l >= n && (l -= n, i += 1), s = Bc + Tt(+l.toFixed(this._s) * this.rs, r);
    } else i = Math.round(i * n) / n, r > 0 && (s = Bc + Tt(0, r));
    return i.toFixed(0) + s;
  }
}
class Nm extends Ll {
  constructor(e = 100) {
    super(e);
  }
  format(e) {
    return `${super.format(e)}%`;
  }
}
class n1 {
  constructor(e) {
    this.us = e;
  }
  format(e) {
    let n = "";
    return e < 0 && (n = "-", e = -e), e < 995 ? n + this.cs(e) : e < 999995 ? n + this.cs(e / 1e3) + "K" : e < 999999995 ? (e = 1e3 * Math.round(e / 1e3), n + this.cs(e / 1e6) + "M") : (e = 1e6 * Math.round(e / 1e6), n + this.cs(e / 1e9) + "B");
  }
  cs(e) {
    let n;
    const i = Math.pow(10, this.us);
    return n = (e = Math.round(e * i) / i) >= 1e-15 && e < 1 ? e.toFixed(this.us).replace(/\.?0+$/, "") : String(e), n.replace(/(\.[1-9]*)0+$/, (s, r) => r);
  }
}
function Rm(t, e, n, i, s, r, l) {
  if (e.length === 0 || i.from >= e.length || i.to <= 0) return;
  const { context: o, horizontalPixelRatio: a, verticalPixelRatio: u } = t, h = e[i.from];
  let c = r(t, h), f = h;
  if (i.to - i.from < 2) {
    const m = s / 2;
    o.beginPath();
    const w = { nt: h.nt - m, st: h.st }, y = { nt: h.nt + m, st: h.st };
    o.moveTo(w.nt * a, w.st * u), o.lineTo(y.nt * a, y.st * u), l(t, c, w, y);
  } else {
    const m = (y, b) => {
      l(t, c, f, b), o.beginPath(), c = y, f = b;
    };
    let w = f;
    o.beginPath(), o.moveTo(h.nt * a, h.st * u);
    for (let y = i.from + 1; y < i.to; ++y) {
      w = e[y];
      const b = r(t, w);
      switch (n) {
        case 0:
          o.lineTo(w.nt * a, w.st * u);
          break;
        case 1:
          o.lineTo(w.nt * a, e[y - 1].st * u), b !== c && (m(b, w), o.lineTo(w.nt * a, e[y - 1].st * u)), o.lineTo(w.nt * a, w.st * u);
          break;
        case 2: {
          const [g, p] = i1(e, y - 1, y);
          o.bezierCurveTo(g.nt * a, g.st * u, p.nt * a, p.st * u, w.nt * a, w.st * u);
          break;
        }
      }
      n !== 1 && b !== c && (m(b, w), o.moveTo(w.nt * a, w.st * u));
    }
    (f !== w || f === w && n === 1) && l(t, c, f, w);
  }
}
const Vc = 6;
function go(t, e) {
  return { nt: t.nt - e.nt, st: t.st - e.st };
}
function Ic(t, e) {
  return { nt: t.nt / e, st: t.st / e };
}
function i1(t, e, n) {
  const i = Math.max(0, e - 1), s = Math.min(t.length - 1, n + 1);
  var r, l;
  return [(r = t[e], l = Ic(go(t[n], t[i]), Vc), { nt: r.nt + l.nt, st: r.st + l.st }), go(t[n], Ic(go(t[s], t[e]), Vc))];
}
function s1(t, e, n, i, s) {
  const { context: r, horizontalPixelRatio: l, verticalPixelRatio: o } = e;
  r.lineTo(s.nt * l, t * o), r.lineTo(i.nt * l, t * o), r.closePath(), r.fillStyle = n, r.fill();
}
class Pm extends vt {
  constructor() {
    super(...arguments), this.G = null;
  }
  J(e) {
    this.G = e;
  }
  K(e) {
    var n;
    if (this.G === null) return;
    const { it: i, tt: s, ds: r, et: l, Nt: o, fs: a } = this.G, u = (n = this.G.vs) !== null && n !== void 0 ? n : this.G.ps ? 0 : e.mediaSize.height;
    if (s === null) return;
    const h = e.context;
    h.lineCap = "butt", h.lineJoin = "round", h.lineWidth = l, Dn(h, o), h.lineWidth = 1, Rm(e, i, a, s, r, this.bs.bind(this), s1.bind(null, u));
  }
}
function Ba(t, e, n) {
  return Math.min(Math.max(t, e), n);
}
function ar(t, e, n) {
  return e - t <= n;
}
function Om(t) {
  const e = Math.ceil(t);
  return e % 2 == 0 ? e - 1 : e;
}
class Zu {
  ws(e, n) {
    const i = this.gs, { Ms: s, xs: r, Ss: l, ks: o, ys: a, vs: u } = n;
    if (this.Cs === void 0 || i === void 0 || i.Ms !== s || i.xs !== r || i.Ss !== l || i.ks !== o || i.vs !== u || i.ys !== a) {
      const h = e.context.createLinearGradient(0, 0, 0, a);
      if (h.addColorStop(0, s), u != null) {
        const c = Ba(u * e.verticalPixelRatio / a, 0, 1);
        h.addColorStop(c, r), h.addColorStop(c, l);
      }
      h.addColorStop(1, o), this.Cs = h, this.gs = n;
    }
    return this.Cs;
  }
}
class r1 extends Pm {
  constructor() {
    super(...arguments), this.Ts = new Zu();
  }
  bs(e, n) {
    return this.Ts.ws(e, { Ms: n.Ps, xs: "", Ss: "", ks: n.Rs, ys: e.bitmapSize.height });
  }
}
function l1(t, e) {
  const n = t.context;
  n.strokeStyle = e, n.stroke();
}
class Tm extends vt {
  constructor() {
    super(...arguments), this.G = null;
  }
  J(e) {
    this.G = e;
  }
  K(e) {
    if (this.G === null) return;
    const { it: n, tt: i, ds: s, fs: r, et: l, Nt: o, Ds: a } = this.G;
    if (i === null) return;
    const u = e.context;
    u.lineCap = "butt", u.lineWidth = l * e.verticalPixelRatio, Dn(u, o), u.lineJoin = "round";
    const h = this.Vs.bind(this);
    r !== void 0 && Rm(e, n, r, i, s, h, l1), a && function(c, f, m, w, y) {
      const { horizontalPixelRatio: b, verticalPixelRatio: g, context: p } = c;
      let v = null;
      const E = Math.max(1, Math.floor(b)) % 2 / 2, _ = m * g + E;
      for (let k = w.to - 1; k >= w.from; --k) {
        const C = f[k];
        if (C) {
          const x = y(c, C);
          x !== v && (p.beginPath(), v !== null && p.fill(), p.fillStyle = x, v = x);
          const T = Math.round(C.nt * b) + E, O = C.st * g;
          p.moveTo(T, O), p.arc(T, O, _, 0, 2 * Math.PI);
        }
      }
      p.fill();
    }(e, n, a, i, h);
  }
}
class Lm extends Tm {
  Vs(e, n) {
    return n.lt;
  }
}
function Dm(t, e, n, i, s = 0, r = e.length) {
  let l = r - s;
  for (; 0 < l; ) {
    const o = l >> 1, a = s + o;
    i(e[a], n) === t ? (s = a + 1, l -= o + 1) : l = o;
  }
  return s;
}
const $s = Dm.bind(null, !0), $m = Dm.bind(null, !1);
function o1(t, e) {
  return t.ot < e;
}
function a1(t, e) {
  return e < t.ot;
}
function Am(t, e, n) {
  const i = e.Os(), s = e.ui(), r = $s(t, i, o1), l = $m(t, s, a1);
  if (!n) return { from: r, to: l };
  let o = r, a = l;
  return r > 0 && r < t.length && t[r].ot >= i && (o = r - 1), l > 0 && l < t.length && t[l - 1].ot <= s && (a = l + 1), { from: o, to: a };
}
class eh {
  constructor(e, n, i) {
    this.Bs = !0, this.As = !0, this.Is = !0, this.zs = [], this.Ls = null, this.Es = e, this.Ns = n, this.Fs = i;
  }
  bt(e) {
    this.Bs = !0, e === "data" && (this.As = !0), e === "options" && (this.Is = !0);
  }
  gt() {
    return this.Es.yt() ? (this.Ws(), this.Ls === null ? null : this.js) : null;
  }
  Hs() {
    this.zs = this.zs.map((e) => Object.assign(Object.assign({}, e), this.Es.Us().$s(e.ot)));
  }
  qs() {
    this.Ls = null;
  }
  Ws() {
    this.As && (this.Ys(), this.As = !1), this.Is && (this.Hs(), this.Is = !1), this.Bs && (this.Zs(), this.Bs = !1);
  }
  Zs() {
    const e = this.Es.Dt(), n = this.Ns.St();
    if (this.qs(), n.Ni() || e.Ni()) return;
    const i = n.Xs();
    if (i === null || this.Es.In().Ks() === 0) return;
    const s = this.Es.Ct();
    s !== null && (this.Ls = Am(this.zs, i, this.Fs), this.Gs(e, n, s.Vt), this.Js());
  }
}
class Dl extends eh {
  constructor(e, n) {
    super(e, n, !0);
  }
  Gs(e, n, i) {
    n.Qs(this.zs, Ms(this.Ls)), e.te(this.zs, i, Ms(this.Ls));
  }
  ie(e, n) {
    return { ot: e, _t: n, nt: NaN, st: NaN };
  }
  Ys() {
    const e = this.Es.Us();
    this.zs = this.Es.In().ne().map((n) => {
      const i = n.Vt[3];
      return this.se(n.ee, i, e);
    });
  }
}
class u1 extends Dl {
  constructor(e, n) {
    super(e, n), this.js = new Gu(), this.re = new r1(), this.he = new Lm(), this.js.Z([this.re, this.he]);
  }
  se(e, n, i) {
    return Object.assign(Object.assign({}, this.ie(e, n)), i.$s(e));
  }
  Js() {
    const e = this.Es.W();
    this.re.J({ fs: e.lineType, it: this.zs, Nt: e.lineStyle, et: e.lineWidth, vs: null, ps: e.invertFilledArea, tt: this.Ls, ds: this.Ns.St().le() }), this.he.J({ fs: e.lineVisible ? e.lineType : void 0, it: this.zs, Nt: e.lineStyle, et: e.lineWidth, tt: this.Ls, ds: this.Ns.St().le(), Ds: e.pointMarkersVisible ? e.pointMarkersRadius || e.lineWidth / 2 + 2 : void 0 });
  }
}
class h1 extends vt {
  constructor() {
    super(...arguments), this.zt = null, this.ae = 0, this.oe = 0;
  }
  J(e) {
    this.zt = e;
  }
  K({ context: e, horizontalPixelRatio: n, verticalPixelRatio: i }) {
    if (this.zt === null || this.zt.In.length === 0 || this.zt.tt === null) return;
    this.ae = this._e(n), this.ae >= 2 && Math.max(1, Math.floor(n)) % 2 != this.ae % 2 && this.ae--, this.oe = this.zt.ue ? Math.min(this.ae, Math.floor(n)) : this.ae;
    let s = null;
    const r = this.oe <= this.ae && this.zt.le >= Math.floor(1.5 * n);
    for (let l = this.zt.tt.from; l < this.zt.tt.to; ++l) {
      const o = this.zt.In[l];
      s !== o.ce && (e.fillStyle = o.ce, s = o.ce);
      const a = Math.floor(0.5 * this.oe), u = Math.round(o.nt * n), h = u - a, c = this.oe, f = h + c - 1, m = Math.min(o.de, o.fe), w = Math.max(o.de, o.fe), y = Math.round(m * i) - a, b = Math.round(w * i) + a, g = Math.max(b - y, this.oe);
      e.fillRect(h, y, c, g);
      const p = Math.ceil(1.5 * this.ae);
      if (r) {
        if (this.zt.ve) {
          const k = u - p;
          let C = Math.max(y, Math.round(o.pe * i) - a), x = C + c - 1;
          x > y + g - 1 && (x = y + g - 1, C = x - c + 1), e.fillRect(k, C, h - k, x - C + 1);
        }
        const v = u + p;
        let E = Math.max(y, Math.round(o.me * i) - a), _ = E + c - 1;
        _ > y + g - 1 && (_ = y + g - 1, E = _ - c + 1), e.fillRect(f + 1, E, v - f, _ - E + 1);
      }
    }
  }
  _e(e) {
    const n = Math.floor(e);
    return Math.max(n, Math.floor(function(i, s) {
      return Math.floor(0.3 * i * s);
    }(M(this.zt).le, e)));
  }
}
class Fm extends eh {
  constructor(e, n) {
    super(e, n, !1);
  }
  Gs(e, n, i) {
    n.Qs(this.zs, Ms(this.Ls)), e.be(this.zs, i, Ms(this.Ls));
  }
  we(e, n, i) {
    return { ot: e, ge: n.Vt[0], Me: n.Vt[1], xe: n.Vt[2], Se: n.Vt[3], nt: NaN, pe: NaN, de: NaN, fe: NaN, me: NaN };
  }
  Ys() {
    const e = this.Es.Us();
    this.zs = this.Es.In().ne().map((n) => this.se(n.ee, n, e));
  }
}
class c1 extends Fm {
  constructor() {
    super(...arguments), this.js = new h1();
  }
  se(e, n, i) {
    return Object.assign(Object.assign({}, this.we(e, n, i)), i.$s(e));
  }
  Js() {
    const e = this.Es.W();
    this.js.J({ In: this.zs, le: this.Ns.St().le(), ve: e.openVisible, ue: e.thinBars, tt: this.Ls });
  }
}
class f1 extends Pm {
  constructor() {
    super(...arguments), this.Ts = new Zu();
  }
  bs(e, n) {
    const i = this.G;
    return this.Ts.ws(e, { Ms: n.ke, xs: n.ye, Ss: n.Ce, ks: n.Te, ys: e.bitmapSize.height, vs: i.vs });
  }
}
class d1 extends Tm {
  constructor() {
    super(...arguments), this.Pe = new Zu();
  }
  Vs(e, n) {
    const i = this.G;
    return this.Pe.ws(e, { Ms: n.Re, xs: n.Re, Ss: n.De, ks: n.De, ys: e.bitmapSize.height, vs: i.vs });
  }
}
class p1 extends Dl {
  constructor(e, n) {
    super(e, n), this.js = new Gu(), this.Ve = new f1(), this.Oe = new d1(), this.js.Z([this.Ve, this.Oe]);
  }
  se(e, n, i) {
    return Object.assign(Object.assign({}, this.ie(e, n)), i.$s(e));
  }
  Js() {
    const e = this.Es.Ct();
    if (e === null) return;
    const n = this.Es.W(), i = this.Es.Dt().Rt(n.baseValue.price, e.Vt), s = this.Ns.St().le();
    this.Ve.J({ it: this.zs, et: n.lineWidth, Nt: n.lineStyle, fs: n.lineType, vs: i, ps: !1, tt: this.Ls, ds: s }), this.Oe.J({ it: this.zs, et: n.lineWidth, Nt: n.lineStyle, fs: n.lineVisible ? n.lineType : void 0, Ds: n.pointMarkersVisible ? n.pointMarkersRadius || n.lineWidth / 2 + 2 : void 0, vs: i, tt: this.Ls, ds: s });
  }
}
class m1 extends vt {
  constructor() {
    super(...arguments), this.zt = null, this.ae = 0;
  }
  J(e) {
    this.zt = e;
  }
  K(e) {
    if (this.zt === null || this.zt.In.length === 0 || this.zt.tt === null) return;
    const { horizontalPixelRatio: n } = e;
    this.ae = function(r, l) {
      if (r >= 2.5 && r <= 4) return Math.floor(3 * l);
      const o = 1 - 0.2 * Math.atan(Math.max(4, r) - 4) / (0.5 * Math.PI), a = Math.floor(r * o * l), u = Math.floor(r * l), h = Math.min(a, u);
      return Math.max(Math.floor(l), h);
    }(this.zt.le, n), this.ae >= 2 && Math.floor(n) % 2 != this.ae % 2 && this.ae--;
    const i = this.zt.In;
    this.zt.Be && this.Ae(e, i, this.zt.tt), this.zt._i && this.Ie(e, i, this.zt.tt);
    const s = this.ze(n);
    (!this.zt._i || this.ae > 2 * s) && this.Le(e, i, this.zt.tt);
  }
  Ae(e, n, i) {
    if (this.zt === null) return;
    const { context: s, horizontalPixelRatio: r, verticalPixelRatio: l } = e;
    let o = "", a = Math.min(Math.floor(r), Math.floor(this.zt.le * r));
    a = Math.max(Math.floor(r), Math.min(a, this.ae));
    const u = Math.floor(0.5 * a);
    let h = null;
    for (let c = i.from; c < i.to; c++) {
      const f = n[c];
      f.Ee !== o && (s.fillStyle = f.Ee, o = f.Ee);
      const m = Math.round(Math.min(f.pe, f.me) * l), w = Math.round(Math.max(f.pe, f.me) * l), y = Math.round(f.de * l), b = Math.round(f.fe * l);
      let g = Math.round(r * f.nt) - u;
      const p = g + a - 1;
      h !== null && (g = Math.max(h + 1, g), g = Math.min(g, p));
      const v = p - g + 1;
      s.fillRect(g, y, v, m - y), s.fillRect(g, w + 1, v, b - w), h = p;
    }
  }
  ze(e) {
    let n = Math.floor(1 * e);
    this.ae <= 2 * n && (n = Math.floor(0.5 * (this.ae - 1)));
    const i = Math.max(Math.floor(e), n);
    return this.ae <= 2 * i ? Math.max(Math.floor(e), Math.floor(1 * e)) : i;
  }
  Ie(e, n, i) {
    if (this.zt === null) return;
    const { context: s, horizontalPixelRatio: r, verticalPixelRatio: l } = e;
    let o = "";
    const a = this.ze(r);
    let u = null;
    for (let h = i.from; h < i.to; h++) {
      const c = n[h];
      c.Ne !== o && (s.fillStyle = c.Ne, o = c.Ne);
      let f = Math.round(c.nt * r) - Math.floor(0.5 * this.ae);
      const m = f + this.ae - 1, w = Math.round(Math.min(c.pe, c.me) * l), y = Math.round(Math.max(c.pe, c.me) * l);
      if (u !== null && (f = Math.max(u + 1, f), f = Math.min(f, m)), this.zt.le * r > 2 * a) Gy(s, f, w, m - f + 1, y - w + 1, a);
      else {
        const b = m - f + 1;
        s.fillRect(f, w, b, y - w + 1);
      }
      u = m;
    }
  }
  Le(e, n, i) {
    if (this.zt === null) return;
    const { context: s, horizontalPixelRatio: r, verticalPixelRatio: l } = e;
    let o = "";
    const a = this.ze(r);
    for (let u = i.from; u < i.to; u++) {
      const h = n[u];
      let c = Math.round(Math.min(h.pe, h.me) * l), f = Math.round(Math.max(h.pe, h.me) * l), m = Math.round(h.nt * r) - Math.floor(0.5 * this.ae), w = m + this.ae - 1;
      if (h.ce !== o) {
        const y = h.ce;
        s.fillStyle = y, o = y;
      }
      this.zt._i && (m += a, c += a, w -= a, f -= a), c > f || s.fillRect(m, c, w - m + 1, f - c + 1);
    }
  }
}
class v1 extends Fm {
  constructor() {
    super(...arguments), this.js = new m1();
  }
  se(e, n, i) {
    return Object.assign(Object.assign({}, this.we(e, n, i)), i.$s(e));
  }
  Js() {
    const e = this.Es.W();
    this.js.J({ In: this.zs, le: this.Ns.St().le(), Be: e.wickVisible, _i: e.borderVisible, tt: this.Ls });
  }
}
class g1 {
  constructor(e, n) {
    this.Fe = e, this.Li = n;
  }
  X(e, n, i) {
    this.Fe.draw(e, this.Li, n, i);
  }
}
class yo extends eh {
  constructor(e, n, i) {
    super(e, n, !1), this.wn = i, this.js = new g1(this.wn.renderer(), (s) => {
      const r = e.Ct();
      return r === null ? null : e.Dt().Rt(s, r.Vt);
    });
  }
  We(e) {
    return this.wn.priceValueBuilder(e);
  }
  je(e) {
    return this.wn.isWhitespace(e);
  }
  Ys() {
    const e = this.Es.Us();
    this.zs = this.Es.In().ne().map((n) => Object.assign(Object.assign({ ot: n.ee, nt: NaN }, e.$s(n.ee)), { He: n.$e }));
  }
  Gs(e, n) {
    n.Qs(this.zs, Ms(this.Ls));
  }
  Js() {
    this.wn.update({ bars: this.zs.map(y1), barSpacing: this.Ns.St().le(), visibleRange: this.Ls }, this.Es.W());
  }
}
function y1(t) {
  return { x: t.nt, time: t.ot, originalData: t.He, barColor: t.ce };
}
class w1 extends vt {
  constructor() {
    super(...arguments), this.zt = null, this.Ue = [];
  }
  J(e) {
    this.zt = e, this.Ue = [];
  }
  K({ context: e, horizontalPixelRatio: n, verticalPixelRatio: i }) {
    if (this.zt === null || this.zt.it.length === 0 || this.zt.tt === null) return;
    this.Ue.length || this.qe(n);
    const s = Math.max(1, Math.floor(i)), r = Math.round(this.zt.Ye * i) - Math.floor(s / 2), l = r + s;
    for (let o = this.zt.tt.from; o < this.zt.tt.to; o++) {
      const a = this.zt.it[o], u = this.Ue[o - this.zt.tt.from], h = Math.round(a.st * i);
      let c, f;
      e.fillStyle = a.ce, h <= r ? (c = h, f = l) : (c = r, f = h - Math.floor(s / 2) + s), e.fillRect(u.Os, c, u.ui - u.Os + 1, f - c);
    }
  }
  qe(e) {
    if (this.zt === null || this.zt.it.length === 0 || this.zt.tt === null) return void (this.Ue = []);
    const n = Math.ceil(this.zt.le * e) <= 1 ? 0 : Math.max(1, Math.floor(e)), i = Math.round(this.zt.le * e) - n;
    this.Ue = new Array(this.zt.tt.to - this.zt.tt.from);
    for (let r = this.zt.tt.from; r < this.zt.tt.to; r++) {
      const l = this.zt.it[r], o = Math.round(l.nt * e);
      let a, u;
      if (i % 2) {
        const h = (i - 1) / 2;
        a = o - h, u = o + h;
      } else {
        const h = i / 2;
        a = o - h, u = o + h - 1;
      }
      this.Ue[r - this.zt.tt.from] = { Os: a, ui: u, Ze: o, Xe: l.nt * e, ot: l.ot };
    }
    for (let r = this.zt.tt.from + 1; r < this.zt.tt.to; r++) {
      const l = this.Ue[r - this.zt.tt.from], o = this.Ue[r - this.zt.tt.from - 1];
      l.ot === o.ot + 1 && l.Os - o.ui !== n + 1 && (o.Ze > o.Xe ? o.ui = l.Os - n - 1 : l.Os = o.ui + n + 1);
    }
    let s = Math.ceil(this.zt.le * e);
    for (let r = this.zt.tt.from; r < this.zt.tt.to; r++) {
      const l = this.Ue[r - this.zt.tt.from];
      l.ui < l.Os && (l.ui = l.Os);
      const o = l.ui - l.Os + 1;
      s = Math.min(o, s);
    }
    if (n > 0 && s < 4) for (let r = this.zt.tt.from; r < this.zt.tt.to; r++) {
      const l = this.Ue[r - this.zt.tt.from];
      l.ui - l.Os + 1 > s && (l.Ze > l.Xe ? l.ui -= 1 : l.Os += 1);
    }
  }
}
class S1 extends Dl {
  constructor() {
    super(...arguments), this.js = new w1();
  }
  se(e, n, i) {
    return Object.assign(Object.assign({}, this.ie(e, n)), i.$s(e));
  }
  Js() {
    const e = { it: this.zs, le: this.Ns.St().le(), tt: this.Ls, Ye: this.Es.Dt().Rt(this.Es.W().base, M(this.Es.Ct()).Vt) };
    this.js.J(e);
  }
}
class E1 extends Dl {
  constructor() {
    super(...arguments), this.js = new Lm();
  }
  se(e, n, i) {
    return Object.assign(Object.assign({}, this.ie(e, n)), i.$s(e));
  }
  Js() {
    const e = this.Es.W(), n = { it: this.zs, Nt: e.lineStyle, fs: e.lineVisible ? e.lineType : void 0, et: e.lineWidth, Ds: e.pointMarkersVisible ? e.pointMarkersRadius || e.lineWidth / 2 + 2 : void 0, tt: this.Ls, ds: this.Ns.St().le() };
    this.js.J(n);
  }
}
const b1 = /[2-9]/g;
class zs {
  constructor(e = 50) {
    this.Ke = 0, this.Ge = 1, this.Je = 1, this.Qe = {}, this.tr = /* @__PURE__ */ new Map(), this.ir = e;
  }
  nr() {
    this.Ke = 0, this.tr.clear(), this.Ge = 1, this.Je = 1, this.Qe = {};
  }
  xi(e, n, i) {
    return this.sr(e, n, i).width;
  }
  Mi(e, n, i) {
    const s = this.sr(e, n, i);
    return ((s.actualBoundingBoxAscent || 0) - (s.actualBoundingBoxDescent || 0)) / 2;
  }
  sr(e, n, i) {
    const s = i || b1, r = String(n).replace(s, "0");
    if (this.tr.has(r)) return Re(this.tr.get(r)).er;
    if (this.Ke === this.ir) {
      const o = this.Qe[this.Je];
      delete this.Qe[this.Je], this.tr.delete(o), this.Je++, this.Ke--;
    }
    e.save(), e.textBaseline = "middle";
    const l = e.measureText(r);
    return e.restore(), l.width === 0 && n.length || (this.tr.set(r, { er: l, rr: this.Ge }), this.Qe[this.Ge] = r, this.Ke++, this.Ge++), l;
  }
}
class _1 {
  constructor(e) {
    this.hr = null, this.k = null, this.lr = "right", this.ar = e;
  }
  _r(e, n, i) {
    this.hr = e, this.k = n, this.lr = i;
  }
  X(e) {
    this.k !== null && this.hr !== null && this.hr.X(e, this.k, this.ar, this.lr);
  }
}
class Bm {
  constructor(e, n, i) {
    this.ur = e, this.ar = new zs(50), this.cr = n, this.F = i, this.j = -1, this.Wt = new _1(this.ar);
  }
  gt() {
    const e = this.F.dr(this.cr);
    if (e === null) return null;
    const n = e.vr(this.cr) ? e.pr() : this.cr.Dt();
    if (n === null) return null;
    const i = e.mr(n);
    if (i === "overlay") return null;
    const s = this.F.br();
    return s.P !== this.j && (this.j = s.P, this.ar.nr()), this.Wt._r(this.ur.Ii(), s, i), this.Wt;
  }
}
class k1 extends vt {
  constructor() {
    super(...arguments), this.zt = null;
  }
  J(e) {
    this.zt = e;
  }
  wr(e, n) {
    var i;
    if (!(!((i = this.zt) === null || i === void 0) && i.yt)) return null;
    const { st: s, et: r, gr: l } = this.zt;
    return n >= s - r - 7 && n <= s + r + 7 ? { Mr: this.zt, gr: l } : null;
  }
  K({ context: e, bitmapSize: n, horizontalPixelRatio: i, verticalPixelRatio: s }) {
    if (this.zt === null || this.zt.yt === !1) return;
    const r = Math.round(this.zt.st * s);
    r < 0 || r > n.height || (e.lineCap = "butt", e.strokeStyle = this.zt.V, e.lineWidth = Math.floor(this.zt.et * i), Dn(e, this.zt.Nt), km(e, r, 0, n.width));
  }
}
class th {
  constructor(e) {
    this.Sr = { st: 0, V: "rgba(0, 0, 0, 0)", et: 1, Nt: 0, yt: !1 }, this.kr = new k1(), this.ft = !0, this.Es = e, this.Ns = e.$t(), this.kr.J(this.Sr);
  }
  bt() {
    this.ft = !0;
  }
  gt() {
    return this.Es.yt() ? (this.ft && (this.yr(), this.ft = !1), this.kr) : null;
  }
}
class x1 extends th {
  constructor(e) {
    super(e);
  }
  yr() {
    this.Sr.yt = !1;
    const e = this.Es.Dt(), n = e.Cr().Cr;
    if (n !== 2 && n !== 3) return;
    const i = this.Es.W();
    if (!i.baseLineVisible || !this.Es.yt()) return;
    const s = this.Es.Ct();
    s !== null && (this.Sr.yt = !0, this.Sr.st = e.Rt(s.Vt, s.Vt), this.Sr.V = i.baseLineColor, this.Sr.et = i.baseLineWidth, this.Sr.Nt = i.baseLineStyle);
  }
}
class C1 extends vt {
  constructor() {
    super(...arguments), this.zt = null;
  }
  J(e) {
    this.zt = e;
  }
  $e() {
    return this.zt;
  }
  K({ context: e, horizontalPixelRatio: n, verticalPixelRatio: i }) {
    const s = this.zt;
    if (s === null) return;
    const r = Math.max(1, Math.floor(n)), l = r % 2 / 2, o = Math.round(s.Xe.x * n) + l, a = s.Xe.y * i;
    e.fillStyle = s.Tr, e.beginPath();
    const u = Math.max(2, 1.5 * s.Pr) * n;
    e.arc(o, a, u, 0, 2 * Math.PI, !1), e.fill(), e.fillStyle = s.Rr, e.beginPath(), e.arc(o, a, s.ht * n, 0, 2 * Math.PI, !1), e.fill(), e.lineWidth = r, e.strokeStyle = s.Dr, e.beginPath(), e.arc(o, a, s.ht * n + r / 2, 0, 2 * Math.PI, !1), e.stroke();
  }
}
const M1 = [{ Vr: 0, Or: 0.25, Br: 4, Ar: 10, Ir: 0.25, zr: 0, Lr: 0.4, Er: 0.8 }, { Vr: 0.25, Or: 0.525, Br: 10, Ar: 14, Ir: 0, zr: 0, Lr: 0.8, Er: 0 }, { Vr: 0.525, Or: 1, Br: 14, Ar: 14, Ir: 0, zr: 0, Lr: 0, Er: 0 }];
function jc(t, e, n, i) {
  return function(s, r) {
    if (s === "transparent") return s;
    const l = xs(s), o = l[3];
    return `rgba(${l[0]}, ${l[1]}, ${l[2]}, ${r * o})`;
  }(t, n + (i - n) * e);
}
function Uc(t, e) {
  const n = t % 2600 / 2600;
  let i;
  for (const a of M1) if (n >= a.Vr && n <= a.Or) {
    i = a;
    break;
  }
  fn(i !== void 0, "Last price animation internal logic error");
  const s = (n - i.Vr) / (i.Or - i.Vr);
  return { Rr: jc(e, s, i.Ir, i.zr), Dr: jc(e, s, i.Lr, i.Er), ht: (r = s, l = i.Br, o = i.Ar, l + (o - l) * r) };
  var r, l, o;
}
class z1 {
  constructor(e) {
    this.Wt = new C1(), this.ft = !0, this.Nr = !0, this.Fr = performance.now(), this.Wr = this.Fr - 1, this.jr = e;
  }
  Hr() {
    this.Wr = this.Fr - 1, this.bt();
  }
  $r() {
    if (this.bt(), this.jr.W().lastPriceAnimation === 2) {
      const e = performance.now(), n = this.Wr - e;
      if (n > 0) return void (n < 650 && (this.Wr += 2600));
      this.Fr = e, this.Wr = e + 2600;
    }
  }
  bt() {
    this.ft = !0;
  }
  Ur() {
    this.Nr = !0;
  }
  yt() {
    return this.jr.W().lastPriceAnimation !== 0;
  }
  qr() {
    switch (this.jr.W().lastPriceAnimation) {
      case 0:
        return !1;
      case 1:
        return !0;
      case 2:
        return performance.now() <= this.Wr;
    }
  }
  gt() {
    return this.ft ? (this.Mt(), this.ft = !1, this.Nr = !1) : this.Nr && (this.Yr(), this.Nr = !1), this.Wt;
  }
  Mt() {
    this.Wt.J(null);
    const e = this.jr.$t().St(), n = e.Xs(), i = this.jr.Ct();
    if (n === null || i === null) return;
    const s = this.jr.Zr(!0);
    if (s.Xr || !n.Kr(s.ee)) return;
    const r = { x: e.It(s.ee), y: this.jr.Dt().Rt(s._t, i.Vt) }, l = s.V, o = this.jr.W().lineWidth, a = Uc(this.Gr(), l);
    this.Wt.J({ Tr: l, Pr: o, Rr: a.Rr, Dr: a.Dr, ht: a.ht, Xe: r });
  }
  Yr() {
    const e = this.Wt.$e();
    if (e !== null) {
      const n = Uc(this.Gr(), e.Tr);
      e.Rr = n.Rr, e.Dr = n.Dr, e.ht = n.ht;
    }
  }
  Gr() {
    return this.qr() ? performance.now() - this.Fr : 2599;
  }
}
function is(t, e) {
  return Om(Math.min(Math.max(t, 12), 30) * e);
}
function Ns(t, e) {
  switch (t) {
    case "arrowDown":
    case "arrowUp":
      return is(e, 1);
    case "circle":
      return is(e, 0.8);
    case "square":
      return is(e, 0.7);
  }
}
function Vm(t) {
  return function(e) {
    const n = Math.ceil(e);
    return n % 2 != 0 ? n - 1 : n;
  }(is(t, 1));
}
function Wc(t) {
  return Math.max(is(t, 0.1), 3);
}
function Hc(t, e, n) {
  return e ? t : n ? Math.ceil(t / 2) : 0;
}
function Im(t, e, n, i, s) {
  const r = Ns("square", n), l = (r - 1) / 2, o = t - l, a = e - l;
  return i >= o && i <= o + r && s >= a && s <= a + r;
}
function Kc(t, e, n, i) {
  const s = (Ns("arrowUp", i) - 1) / 2 * n.Jr, r = (Om(i / 2) - 1) / 2 * n.Jr;
  e.beginPath(), t ? (e.moveTo(n.nt - s, n.st), e.lineTo(n.nt, n.st - s), e.lineTo(n.nt + s, n.st), e.lineTo(n.nt + r, n.st), e.lineTo(n.nt + r, n.st + s), e.lineTo(n.nt - r, n.st + s), e.lineTo(n.nt - r, n.st)) : (e.moveTo(n.nt - s, n.st), e.lineTo(n.nt, n.st + s), e.lineTo(n.nt + s, n.st), e.lineTo(n.nt + r, n.st), e.lineTo(n.nt + r, n.st - s), e.lineTo(n.nt - r, n.st - s), e.lineTo(n.nt - r, n.st)), e.fill();
}
function N1(t, e, n, i, s, r) {
  return Im(e, n, i, s, r);
}
class R1 extends vt {
  constructor() {
    super(...arguments), this.zt = null, this.ar = new zs(), this.j = -1, this.H = "", this.Qr = "";
  }
  J(e) {
    this.zt = e;
  }
  _r(e, n) {
    this.j === e && this.H === n || (this.j = e, this.H = n, this.Qr = _i(e, n), this.ar.nr());
  }
  wr(e, n) {
    if (this.zt === null || this.zt.tt === null) return null;
    for (let i = this.zt.tt.from; i < this.zt.tt.to; i++) {
      const s = this.zt.it[i];
      if (O1(s, e, n)) return { Mr: s.th, gr: s.gr };
    }
    return null;
  }
  K({ context: e, horizontalPixelRatio: n, verticalPixelRatio: i }, s, r) {
    if (this.zt !== null && this.zt.tt !== null) {
      e.textBaseline = "middle", e.font = this.Qr;
      for (let l = this.zt.tt.from; l < this.zt.tt.to; l++) {
        const o = this.zt.it[l];
        o.Kt !== void 0 && (o.Kt.Hi = this.ar.xi(e, o.Kt.ih), o.Kt.At = this.j, o.Kt.nt = o.nt - o.Kt.Hi / 2), P1(o, e, n, i);
      }
    }
  }
}
function P1(t, e, n, i) {
  e.fillStyle = t.V, t.Kt !== void 0 && function(s, r, l, o, a, u) {
    s.save(), s.scale(a, u), s.fillText(r, l, o), s.restore();
  }(e, t.Kt.ih, t.Kt.nt, t.Kt.st, n, i), function(s, r, l) {
    if (s.Ks !== 0) {
      switch (s.nh) {
        case "arrowDown":
          return void Kc(!1, r, l, s.Ks);
        case "arrowUp":
          return void Kc(!0, r, l, s.Ks);
        case "circle":
          return void function(o, a, u) {
            const h = (Ns("circle", u) - 1) / 2;
            o.beginPath(), o.arc(a.nt, a.st, h * a.Jr, 0, 2 * Math.PI, !1), o.fill();
          }(r, l, s.Ks);
        case "square":
          return void function(o, a, u) {
            const h = Ns("square", u), c = (h - 1) * a.Jr / 2, f = a.nt - c, m = a.st - c;
            o.fillRect(f, m, h * a.Jr, h * a.Jr);
          }(r, l, s.Ks);
      }
      s.nh;
    }
  }(t, e, function(s, r, l) {
    const o = Math.max(1, Math.floor(r)) % 2 / 2;
    return { nt: Math.round(s.nt * r) + o, st: s.st * l, Jr: r };
  }(t, n, i));
}
function O1(t, e, n) {
  return !(t.Kt === void 0 || !function(i, s, r, l, o, a) {
    const u = l / 2;
    return o >= i && o <= i + r && a >= s - u && a <= s + u;
  }(t.Kt.nt, t.Kt.st, t.Kt.Hi, t.Kt.At, e, n)) || function(i, s, r) {
    if (i.Ks === 0) return !1;
    switch (i.nh) {
      case "arrowDown":
      case "arrowUp":
        return N1(0, i.nt, i.st, i.Ks, s, r);
      case "circle":
        return function(l, o, a, u, h) {
          const c = 2 + Ns("circle", a) / 2, f = l - u, m = o - h;
          return Math.sqrt(f * f + m * m) <= c;
        }(i.nt, i.st, i.Ks, s, r);
      case "square":
        return Im(i.nt, i.st, i.Ks, s, r);
    }
  }(t, e, n);
}
function T1(t, e, n, i, s, r, l, o, a) {
  const u = bt(n) ? n : n.Se, h = bt(n) ? n : n.Me, c = bt(n) ? n : n.xe, f = bt(e.size) ? Math.max(e.size, 0) : 1, m = Vm(o.le()) * f, w = m / 2;
  switch (t.Ks = m, e.position) {
    case "inBar":
      return t.st = l.Rt(u, a), void (t.Kt !== void 0 && (t.Kt.st = t.st + w + r + 0.6 * s));
    case "aboveBar":
      return t.st = l.Rt(h, a) - w - i.sh, t.Kt !== void 0 && (t.Kt.st = t.st - w - 0.6 * s, i.sh += 1.2 * s), void (i.sh += m + r);
    case "belowBar":
      return t.st = l.Rt(c, a) + w + i.eh, t.Kt !== void 0 && (t.Kt.st = t.st + w + r + 0.6 * s, i.eh += 1.2 * s), void (i.eh += m + r);
  }
  e.position;
}
class L1 {
  constructor(e, n) {
    this.ft = !0, this.rh = !0, this.hh = !0, this.ah = null, this.oh = null, this.Wt = new R1(), this.jr = e, this.$i = n, this.zt = { it: [], tt: null };
  }
  bt(e) {
    this.ft = !0, this.hh = !0, e === "data" && (this.rh = !0, this.oh = null);
  }
  gt(e) {
    if (!this.jr.yt()) return null;
    this.ft && this._h();
    const n = this.$i.W().layout;
    return this.Wt._r(n.fontSize, n.fontFamily), this.Wt.J(this.zt), this.Wt;
  }
  uh() {
    if (this.hh) {
      if (this.jr.dh().length > 0) {
        const e = this.$i.St().le(), n = Wc(e), i = 1.5 * Vm(e) + 2 * n, s = this.fh();
        this.ah = { above: Hc(i, s.aboveBar, s.inBar), below: Hc(i, s.belowBar, s.inBar) };
      } else this.ah = null;
      this.hh = !1;
    }
    return this.ah;
  }
  fh() {
    return this.oh === null && (this.oh = this.jr.dh().reduce((e, n) => (e[n.position] || (e[n.position] = !0), e), { inBar: !1, aboveBar: !1, belowBar: !1 })), this.oh;
  }
  _h() {
    const e = this.jr.Dt(), n = this.$i.St(), i = this.jr.dh();
    this.rh && (this.zt.it = i.map((h) => ({ ot: h.time, nt: 0, st: 0, Ks: 0, nh: h.shape, V: h.color, th: h.th, gr: h.id, Kt: void 0 })), this.rh = !1);
    const s = this.$i.W().layout;
    this.zt.tt = null;
    const r = n.Xs();
    if (r === null) return;
    const l = this.jr.Ct();
    if (l === null || this.zt.it.length === 0) return;
    let o = NaN;
    const a = Wc(n.le()), u = { sh: a, eh: a };
    this.zt.tt = Am(this.zt.it, r, !0);
    for (let h = this.zt.tt.from; h < this.zt.tt.to; h++) {
      const c = i[h];
      c.time !== o && (u.sh = a, u.eh = a, o = c.time);
      const f = this.zt.it[h];
      f.nt = n.It(c.time), c.text !== void 0 && c.text.length > 0 && (f.Kt = { ih: c.text, nt: 0, st: 0, Hi: 0, At: 0 });
      const m = this.jr.ph(c.time);
      m !== null && T1(f, c, m, u, s.fontSize, a, e, n, l.Vt);
    }
    this.ft = !1;
  }
}
class D1 extends th {
  constructor(e) {
    super(e);
  }
  yr() {
    const e = this.Sr;
    e.yt = !1;
    const n = this.Es.W();
    if (!n.priceLineVisible || !this.Es.yt()) return;
    const i = this.Es.Zr(n.priceLineSource === 0);
    i.Xr || (e.yt = !0, e.st = i.ki, e.V = this.Es.mh(i.V), e.et = n.priceLineWidth, e.Nt = n.priceLineStyle);
  }
}
class $1 extends Ol {
  constructor(e) {
    super(), this.jt = e;
  }
  zi(e, n, i) {
    e.yt = !1, n.yt = !1;
    const s = this.jt;
    if (!s.yt()) return;
    const r = s.W(), l = r.lastValueVisible, o = s.bh() !== "", a = r.seriesLastValueMode === 0, u = s.Zr(!1);
    if (u.Xr) return;
    l && (e.Kt = this.wh(u, l, a), e.yt = e.Kt.length !== 0), (o || a) && (n.Kt = this.gh(u, l, o, a), n.yt = n.Kt.length > 0);
    const h = s.mh(u.V), c = Rl(h);
    i.t = c.t, i.ki = u.ki, n.Ot = s.$t().Bt(u.ki / s.Dt().At()), e.Ot = h, e.V = c.i, n.V = c.i;
  }
  gh(e, n, i, s) {
    let r = "";
    const l = this.jt.bh();
    return i && l.length !== 0 && (r += `${l} `), n && s && (r += this.jt.Dt().Mh() ? e.xh : e.Sh), r.trim();
  }
  wh(e, n, i) {
    return n ? i ? this.jt.Dt().Mh() ? e.Sh : e.xh : e.Kt : "";
  }
}
function Xc(t, e, n, i) {
  const s = Number.isFinite(e), r = Number.isFinite(n);
  return s && r ? t(e, n) : s || r ? s ? e : n : i;
}
class Fe {
  constructor(e, n) {
    this.kh = e, this.yh = n;
  }
  Ch(e) {
    return e !== null && this.kh === e.kh && this.yh === e.yh;
  }
  Th() {
    return new Fe(this.kh, this.yh);
  }
  Ph() {
    return this.kh;
  }
  Rh() {
    return this.yh;
  }
  Dh() {
    return this.yh - this.kh;
  }
  Ni() {
    return this.yh === this.kh || Number.isNaN(this.yh) || Number.isNaN(this.kh);
  }
  ts(e) {
    return e === null ? this : new Fe(Xc(Math.min, this.Ph(), e.Ph(), -1 / 0), Xc(Math.max, this.Rh(), e.Rh(), 1 / 0));
  }
  Vh(e) {
    if (!bt(e) || this.yh - this.kh === 0) return;
    const n = 0.5 * (this.yh + this.kh);
    let i = this.yh - n, s = this.kh - n;
    i *= e, s *= e, this.yh = n + i, this.kh = n + s;
  }
  Oh(e) {
    bt(e) && (this.yh += e, this.kh += e);
  }
  Bh() {
    return { minValue: this.kh, maxValue: this.yh };
  }
  static Ah(e) {
    return e === null ? null : new Fe(e.minValue, e.maxValue);
  }
}
class hl {
  constructor(e, n) {
    this.Ih = e, this.zh = n || null;
  }
  Lh() {
    return this.Ih;
  }
  Eh() {
    return this.zh;
  }
  Bh() {
    return this.Ih === null ? null : { priceRange: this.Ih.Bh(), margins: this.zh || void 0 };
  }
  static Ah(e) {
    return e === null ? null : new hl(Fe.Ah(e.priceRange), e.margins);
  }
}
class A1 extends th {
  constructor(e, n) {
    super(e), this.Nh = n;
  }
  yr() {
    const e = this.Sr;
    e.yt = !1;
    const n = this.Nh.W();
    if (!this.Es.yt() || !n.lineVisible) return;
    const i = this.Nh.Fh();
    i !== null && (e.yt = !0, e.st = i, e.V = n.color, e.et = n.lineWidth, e.Nt = n.lineStyle, e.gr = this.Nh.W().id);
  }
}
class F1 extends Ol {
  constructor(e, n) {
    super(), this.jr = e, this.Nh = n;
  }
  zi(e, n, i) {
    e.yt = !1, n.yt = !1;
    const s = this.Nh.W(), r = s.axisLabelVisible, l = s.title !== "", o = this.jr;
    if (!r || !o.yt()) return;
    const a = this.Nh.Fh();
    if (a === null) return;
    l && (n.Kt = s.title, n.yt = !0), n.Ot = o.$t().Bt(a / o.Dt().At()), e.Kt = this.Wh(s.price), e.yt = !0;
    const u = Rl(s.axisLabelColor || s.color);
    i.t = u.t;
    const h = s.axisLabelTextColor || u.i;
    e.V = h, n.V = h, i.ki = a;
  }
  Wh(e) {
    const n = this.jr.Ct();
    return n === null ? "" : this.jr.Dt().Fi(e, n.Vt);
  }
}
class B1 {
  constructor(e, n) {
    this.jr = e, this.cn = n, this.jh = new A1(e, this), this.ur = new F1(e, this), this.Hh = new Bm(this.ur, e, e.$t());
  }
  $h(e) {
    pt(this.cn, e), this.bt(), this.jr.$t().Uh();
  }
  W() {
    return this.cn;
  }
  qh() {
    return this.jh;
  }
  Yh() {
    return this.Hh;
  }
  Zh() {
    return this.ur;
  }
  bt() {
    this.jh.bt(), this.ur.bt();
  }
  Fh() {
    const e = this.jr, n = e.Dt();
    if (e.$t().St().Ni() || n.Ni()) return null;
    const i = e.Ct();
    return i === null ? null : n.Rt(this.cn.price, i.Vt);
  }
}
class V1 extends Yu {
  constructor(e) {
    super(), this.$i = e;
  }
  $t() {
    return this.$i;
  }
}
const I1 = { Bar: (t, e, n, i) => {
  var s;
  const r = e.upColor, l = e.downColor, o = M(t(n, i)), a = ri(o.Vt[0]) <= ri(o.Vt[3]);
  return { ce: (s = o.V) !== null && s !== void 0 ? s : a ? r : l };
}, Candlestick: (t, e, n, i) => {
  var s, r, l;
  const o = e.upColor, a = e.downColor, u = e.borderUpColor, h = e.borderDownColor, c = e.wickUpColor, f = e.wickDownColor, m = M(t(n, i)), w = ri(m.Vt[0]) <= ri(m.Vt[3]);
  return { ce: (s = m.V) !== null && s !== void 0 ? s : w ? o : a, Ne: (r = m.Ot) !== null && r !== void 0 ? r : w ? u : h, Ee: (l = m.Xh) !== null && l !== void 0 ? l : w ? c : f };
}, Custom: (t, e, n, i) => {
  var s;
  return { ce: (s = M(t(n, i)).V) !== null && s !== void 0 ? s : e.color };
}, Area: (t, e, n, i) => {
  var s, r, l, o;
  const a = M(t(n, i));
  return { ce: (s = a.lt) !== null && s !== void 0 ? s : e.lineColor, lt: (r = a.lt) !== null && r !== void 0 ? r : e.lineColor, Ps: (l = a.Ps) !== null && l !== void 0 ? l : e.topColor, Rs: (o = a.Rs) !== null && o !== void 0 ? o : e.bottomColor };
}, Baseline: (t, e, n, i) => {
  var s, r, l, o, a, u;
  const h = M(t(n, i));
  return { ce: h.Vt[3] >= e.baseValue.price ? e.topLineColor : e.bottomLineColor, Re: (s = h.Re) !== null && s !== void 0 ? s : e.topLineColor, De: (r = h.De) !== null && r !== void 0 ? r : e.bottomLineColor, ke: (l = h.ke) !== null && l !== void 0 ? l : e.topFillColor1, ye: (o = h.ye) !== null && o !== void 0 ? o : e.topFillColor2, Ce: (a = h.Ce) !== null && a !== void 0 ? a : e.bottomFillColor1, Te: (u = h.Te) !== null && u !== void 0 ? u : e.bottomFillColor2 };
}, Line: (t, e, n, i) => {
  var s, r;
  const l = M(t(n, i));
  return { ce: (s = l.V) !== null && s !== void 0 ? s : e.color, lt: (r = l.V) !== null && r !== void 0 ? r : e.color };
}, Histogram: (t, e, n, i) => {
  var s;
  return { ce: (s = M(t(n, i)).V) !== null && s !== void 0 ? s : e.color };
} };
class j1 {
  constructor(e) {
    this.Kh = (n, i) => i !== void 0 ? i.Vt : this.jr.In().Gh(n), this.jr = e, this.Jh = I1[e.Qh()];
  }
  $s(e, n) {
    return this.Jh(this.Kh, this.jr.W(), e, n);
  }
}
var qc;
(function(t) {
  t[t.NearestLeft = -1] = "NearestLeft", t[t.None = 0] = "None", t[t.NearestRight = 1] = "NearestRight";
})(qc || (qc = {}));
const Wt = 30;
class U1 {
  constructor() {
    this.tl = [], this.il = /* @__PURE__ */ new Map(), this.nl = /* @__PURE__ */ new Map();
  }
  sl() {
    return this.Ks() > 0 ? this.tl[this.tl.length - 1] : null;
  }
  el() {
    return this.Ks() > 0 ? this.rl(0) : null;
  }
  An() {
    return this.Ks() > 0 ? this.rl(this.tl.length - 1) : null;
  }
  Ks() {
    return this.tl.length;
  }
  Ni() {
    return this.Ks() === 0;
  }
  Kr(e) {
    return this.hl(e, 0) !== null;
  }
  Gh(e) {
    return this.ll(e);
  }
  ll(e, n = 0) {
    const i = this.hl(e, n);
    return i === null ? null : Object.assign(Object.assign({}, this.al(i)), { ee: this.rl(i) });
  }
  ne() {
    return this.tl;
  }
  ol(e, n, i) {
    if (this.Ni()) return null;
    let s = null;
    for (const r of i)
      s = ur(s, this._l(e, n, r));
    return s;
  }
  J(e) {
    this.nl.clear(), this.il.clear(), this.tl = e;
  }
  rl(e) {
    return this.tl[e].ee;
  }
  al(e) {
    return this.tl[e];
  }
  hl(e, n) {
    const i = this.ul(e);
    if (i === null && n !== 0) switch (n) {
      case -1:
        return this.cl(e);
      case 1:
        return this.dl(e);
      default:
        throw new TypeError("Unknown search mode");
    }
    return i;
  }
  cl(e) {
    let n = this.fl(e);
    return n > 0 && (n -= 1), n !== this.tl.length && this.rl(n) < e ? n : null;
  }
  dl(e) {
    const n = this.vl(e);
    return n !== this.tl.length && e < this.rl(n) ? n : null;
  }
  ul(e) {
    const n = this.fl(e);
    return n === this.tl.length || e < this.tl[n].ee ? null : n;
  }
  fl(e) {
    return $s(this.tl, e, (n, i) => n.ee < i);
  }
  vl(e) {
    return $m(this.tl, e, (n, i) => n.ee > i);
  }
  pl(e, n, i) {
    let s = null;
    for (let r = e; r < n; r++) {
      const l = this.tl[r].Vt[i];
      Number.isNaN(l) || (s === null ? s = { ml: l, bl: l } : (l < s.ml && (s.ml = l), l > s.bl && (s.bl = l)));
    }
    return s;
  }
  _l(e, n, i) {
    if (this.Ni()) return null;
    let s = null;
    const r = M(this.el()), l = M(this.An()), o = Math.max(e, r), a = Math.min(n, l), u = Math.ceil(o / Wt) * Wt, h = Math.max(u, Math.floor(a / Wt) * Wt);
    {
      const f = this.fl(o), m = this.vl(Math.min(a, u, n));
      s = ur(s, this.pl(f, m, i));
    }
    let c = this.il.get(i);
    c === void 0 && (c = /* @__PURE__ */ new Map(), this.il.set(i, c));
    for (let f = Math.max(u + 1, o); f < h; f += Wt) {
      const m = Math.floor(f / Wt);
      let w = c.get(m);
      if (w === void 0) {
        const y = this.fl(m * Wt), b = this.vl((m + 1) * Wt - 1);
        w = this.pl(y, b, i), c.set(m, w);
      }
      s = ur(s, w);
    }
    {
      const f = this.fl(h), m = this.vl(a);
      s = ur(s, this.pl(f, m, i));
    }
    return s;
  }
}
function ur(t, e) {
  return t === null ? e : e === null ? t : { ml: Math.min(t.ml, e.ml), bl: Math.max(t.bl, e.bl) };
}
class W1 {
  constructor(e) {
    this.wl = e;
  }
  X(e, n, i) {
    this.wl.draw(e);
  }
  gl(e, n, i) {
    var s, r;
    (r = (s = this.wl).drawBackground) === null || r === void 0 || r.call(s, e);
  }
}
class wo {
  constructor(e) {
    this.tr = null, this.wn = e;
  }
  gt() {
    var e;
    const n = this.wn.renderer();
    if (n === null) return null;
    if (((e = this.tr) === null || e === void 0 ? void 0 : e.Ml) === n) return this.tr.xl;
    const i = new W1(n);
    return this.tr = { Ml: n, xl: i }, i;
  }
  Sl() {
    var e, n, i;
    return (i = (n = (e = this.wn).zOrder) === null || n === void 0 ? void 0 : n.call(e)) !== null && i !== void 0 ? i : "normal";
  }
}
function jm(t) {
  var e, n, i, s, r;
  return { Kt: t.text(), ki: t.coordinate(), Si: (e = t.fixedCoordinate) === null || e === void 0 ? void 0 : e.call(t), V: t.textColor(), t: t.backColor(), yt: (i = (n = t.visible) === null || n === void 0 ? void 0 : n.call(t)) === null || i === void 0 || i, hi: (r = (s = t.tickVisible) === null || s === void 0 ? void 0 : s.call(t)) === null || r === void 0 || r };
}
class H1 {
  constructor(e, n) {
    this.Wt = new zm(), this.kl = e, this.yl = n;
  }
  gt() {
    return this.Wt.J(Object.assign({ Hi: this.yl.Hi() }, jm(this.kl))), this.Wt;
  }
}
class K1 extends Ol {
  constructor(e, n) {
    super(), this.kl = e, this.Li = n;
  }
  zi(e, n, i) {
    const s = jm(this.kl);
    i.t = s.t, e.V = s.V;
    const r = 2 / 12 * this.Li.P();
    i.wi = r, i.gi = r, i.ki = s.ki, i.Si = s.Si, e.Kt = s.Kt, e.yt = s.yt, e.hi = s.hi;
  }
}
class X1 {
  constructor(e, n) {
    this.Cl = null, this.Tl = null, this.Pl = null, this.Rl = null, this.Dl = null, this.Vl = e, this.jr = n;
  }
  Ol() {
    return this.Vl;
  }
  Vn() {
    var e, n;
    (n = (e = this.Vl).updateAllViews) === null || n === void 0 || n.call(e);
  }
  Pn() {
    var e, n, i, s;
    const r = (i = (n = (e = this.Vl).paneViews) === null || n === void 0 ? void 0 : n.call(e)) !== null && i !== void 0 ? i : [];
    if (((s = this.Cl) === null || s === void 0 ? void 0 : s.Ml) === r) return this.Cl.xl;
    const l = r.map((o) => new wo(o));
    return this.Cl = { Ml: r, xl: l }, l;
  }
  Qi() {
    var e, n, i, s;
    const r = (i = (n = (e = this.Vl).timeAxisViews) === null || n === void 0 ? void 0 : n.call(e)) !== null && i !== void 0 ? i : [];
    if (((s = this.Tl) === null || s === void 0 ? void 0 : s.Ml) === r) return this.Tl.xl;
    const l = this.jr.$t().St(), o = r.map((a) => new H1(a, l));
    return this.Tl = { Ml: r, xl: o }, o;
  }
  Rn() {
    var e, n, i, s;
    const r = (i = (n = (e = this.Vl).priceAxisViews) === null || n === void 0 ? void 0 : n.call(e)) !== null && i !== void 0 ? i : [];
    if (((s = this.Pl) === null || s === void 0 ? void 0 : s.Ml) === r) return this.Pl.xl;
    const l = this.jr.Dt(), o = r.map((a) => new K1(a, l));
    return this.Pl = { Ml: r, xl: o }, o;
  }
  Bl() {
    var e, n, i, s;
    const r = (i = (n = (e = this.Vl).priceAxisPaneViews) === null || n === void 0 ? void 0 : n.call(e)) !== null && i !== void 0 ? i : [];
    if (((s = this.Rl) === null || s === void 0 ? void 0 : s.Ml) === r) return this.Rl.xl;
    const l = r.map((o) => new wo(o));
    return this.Rl = { Ml: r, xl: l }, l;
  }
  Al() {
    var e, n, i, s;
    const r = (i = (n = (e = this.Vl).timeAxisPaneViews) === null || n === void 0 ? void 0 : n.call(e)) !== null && i !== void 0 ? i : [];
    if (((s = this.Dl) === null || s === void 0 ? void 0 : s.Ml) === r) return this.Dl.xl;
    const l = r.map((o) => new wo(o));
    return this.Dl = { Ml: r, xl: l }, l;
  }
  Il(e, n) {
    var i, s, r;
    return (r = (s = (i = this.Vl).autoscaleInfo) === null || s === void 0 ? void 0 : s.call(i, e, n)) !== null && r !== void 0 ? r : null;
  }
  wr(e, n) {
    var i, s, r;
    return (r = (s = (i = this.Vl).hitTest) === null || s === void 0 ? void 0 : s.call(i, e, n)) !== null && r !== void 0 ? r : null;
  }
}
function So(t, e, n, i) {
  t.forEach((s) => {
    e(s).forEach((r) => {
      r.Sl() === n && i.push(r);
    });
  });
}
function Eo(t) {
  return t.Pn();
}
function q1(t) {
  return t.Bl();
}
function Q1(t) {
  return t.Al();
}
class nh extends V1 {
  constructor(e, n, i, s, r) {
    super(e), this.zt = new U1(), this.jh = new D1(this), this.zl = [], this.Ll = new x1(this), this.El = null, this.Nl = null, this.Fl = [], this.Wl = [], this.jl = null, this.Hl = [], this.cn = n, this.$l = i;
    const l = new $1(this);
    this.rn = [l], this.Hh = new Bm(l, this, e), i !== "Area" && i !== "Line" && i !== "Baseline" || (this.El = new z1(this)), this.Ul(), this.ql(r);
  }
  S() {
    this.jl !== null && clearTimeout(this.jl);
  }
  mh(e) {
    return this.cn.priceLineColor || e;
  }
  Zr(e) {
    const n = { Xr: !0 }, i = this.Dt();
    if (this.$t().St().Ni() || i.Ni() || this.zt.Ni()) return n;
    const s = this.$t().St().Xs(), r = this.Ct();
    if (s === null || r === null) return n;
    let l, o;
    if (e) {
      const c = this.zt.sl();
      if (c === null) return n;
      l = c, o = c.ee;
    } else {
      const c = this.zt.ll(s.ui(), -1);
      if (c === null || (l = this.zt.Gh(c.ee), l === null)) return n;
      o = c.ee;
    }
    const a = l.Vt[3], u = this.Us().$s(o, { Vt: l }), h = i.Rt(a, r.Vt);
    return { Xr: !1, _t: a, Kt: i.Fi(a, r.Vt), xh: i.Yl(a), Sh: i.Zl(a, r.Vt), V: u.ce, ki: h, ee: o };
  }
  Us() {
    return this.Nl !== null || (this.Nl = new j1(this)), this.Nl;
  }
  W() {
    return this.cn;
  }
  $h(e) {
    const n = e.priceScaleId;
    n !== void 0 && n !== this.cn.priceScaleId && this.$t().Xl(this, n), pt(this.cn, e), e.priceFormat !== void 0 && (this.Ul(), this.$t().Kl()), this.$t().Gl(this), this.$t().Jl(), this.wn.bt("options");
  }
  J(e, n) {
    this.zt.J(e), this.Ql(), this.wn.bt("data"), this.dn.bt("data"), this.El !== null && (n && n.ta ? this.El.$r() : e.length === 0 && this.El.Hr());
    const i = this.$t().dr(this);
    this.$t().ia(i), this.$t().Gl(this), this.$t().Jl(), this.$t().Uh();
  }
  na(e) {
    this.Fl = e, this.Ql();
    const n = this.$t().dr(this);
    this.dn.bt("data"), this.$t().ia(n), this.$t().Gl(this), this.$t().Jl(), this.$t().Uh();
  }
  sa() {
    return this.Fl;
  }
  dh() {
    return this.Wl;
  }
  ea(e) {
    const n = new B1(this, e);
    return this.zl.push(n), this.$t().Gl(this), n;
  }
  ra(e) {
    const n = this.zl.indexOf(e);
    n !== -1 && this.zl.splice(n, 1), this.$t().Gl(this);
  }
  Qh() {
    return this.$l;
  }
  Ct() {
    const e = this.ha();
    return e === null ? null : { Vt: e.Vt[3], la: e.ot };
  }
  ha() {
    const e = this.$t().St().Xs();
    if (e === null) return null;
    const n = e.Os();
    return this.zt.ll(n, 1);
  }
  In() {
    return this.zt;
  }
  ph(e) {
    const n = this.zt.Gh(e);
    return n === null ? null : this.$l === "Bar" || this.$l === "Candlestick" || this.$l === "Custom" ? { ge: n.Vt[0], Me: n.Vt[1], xe: n.Vt[2], Se: n.Vt[3] } : n.Vt[3];
  }
  aa(e) {
    const n = [];
    So(this.Hl, Eo, "top", n);
    const i = this.El;
    return i !== null && i.yt() && (this.jl === null && i.qr() && (this.jl = setTimeout(() => {
      this.jl = null, this.$t().oa();
    }, 0)), i.Ur(), n.unshift(i)), n;
  }
  Pn() {
    const e = [];
    this._a() || e.push(this.Ll), e.push(this.wn, this.jh, this.dn);
    const n = this.zl.map((i) => i.qh());
    return e.push(...n), So(this.Hl, Eo, "normal", e), e;
  }
  ua() {
    return this.ca(Eo, "bottom");
  }
  da(e) {
    return this.ca(q1, e);
  }
  fa(e) {
    return this.ca(Q1, e);
  }
  va(e, n) {
    return this.Hl.map((i) => i.wr(e, n)).filter((i) => i !== null);
  }
  Ji(e) {
    return [this.Hh, ...this.zl.map((n) => n.Yh())];
  }
  Rn(e, n) {
    if (n !== this.Yi && !this._a()) return [];
    const i = [...this.rn];
    for (const s of this.zl) i.push(s.Zh());
    return this.Hl.forEach((s) => {
      i.push(...s.Rn());
    }), i;
  }
  Qi() {
    const e = [];
    return this.Hl.forEach((n) => {
      e.push(...n.Qi());
    }), e;
  }
  Il(e, n) {
    if (this.cn.autoscaleInfoProvider !== void 0) {
      const i = this.cn.autoscaleInfoProvider(() => {
        const s = this.pa(e, n);
        return s === null ? null : s.Bh();
      });
      return hl.Ah(i);
    }
    return this.pa(e, n);
  }
  ma() {
    return this.cn.priceFormat.minMove;
  }
  ba() {
    return this.wa;
  }
  Vn() {
    var e;
    this.wn.bt(), this.dn.bt();
    for (const n of this.rn) n.bt();
    for (const n of this.zl) n.bt();
    this.jh.bt(), this.Ll.bt(), (e = this.El) === null || e === void 0 || e.bt(), this.Hl.forEach((n) => n.Vn());
  }
  Dt() {
    return M(super.Dt());
  }
  kt(e) {
    if (!((this.$l === "Line" || this.$l === "Area" || this.$l === "Baseline") && this.cn.crosshairMarkerVisible)) return null;
    const n = this.zt.Gh(e);
    return n === null ? null : { _t: n.Vt[3], ht: this.ga(), Ot: this.Ma(), Pt: this.xa(), Tt: this.Sa(e) };
  }
  bh() {
    return this.cn.title;
  }
  yt() {
    return this.cn.visible;
  }
  ka(e) {
    this.Hl.push(new X1(e, this));
  }
  ya(e) {
    this.Hl = this.Hl.filter((n) => n.Ol() !== e);
  }
  Ca() {
    if (this.wn instanceof yo) return (e) => this.wn.We(e);
  }
  Ta() {
    if (this.wn instanceof yo) return (e) => this.wn.je(e);
  }
  _a() {
    return !Tl(this.Dt().Pa());
  }
  pa(e, n) {
    if (!Cs(e) || !Cs(n) || this.zt.Ni()) return null;
    const i = this.$l === "Line" || this.$l === "Area" || this.$l === "Baseline" || this.$l === "Histogram" ? [3] : [2, 1], s = this.zt.ol(e, n, i);
    let r = s !== null ? new Fe(s.ml, s.bl) : null;
    if (this.Qh() === "Histogram") {
      const o = this.cn.base, a = new Fe(o, o);
      r = r !== null ? r.ts(a) : a;
    }
    let l = this.dn.uh();
    return this.Hl.forEach((o) => {
      const a = o.Il(e, n);
      if (a != null && a.priceRange) {
        const m = new Fe(a.priceRange.minValue, a.priceRange.maxValue);
        r = r !== null ? r.ts(m) : m;
      }
      var u, h, c, f;
      a != null && a.margins && (u = l, h = a.margins, l = { above: Math.max((c = u == null ? void 0 : u.above) !== null && c !== void 0 ? c : 0, h.above), below: Math.max((f = u == null ? void 0 : u.below) !== null && f !== void 0 ? f : 0, h.below) });
    }), new hl(r, l);
  }
  ga() {
    switch (this.$l) {
      case "Line":
      case "Area":
      case "Baseline":
        return this.cn.crosshairMarkerRadius;
    }
    return 0;
  }
  Ma() {
    switch (this.$l) {
      case "Line":
      case "Area":
      case "Baseline": {
        const e = this.cn.crosshairMarkerBorderColor;
        if (e.length !== 0) return e;
      }
    }
    return null;
  }
  xa() {
    switch (this.$l) {
      case "Line":
      case "Area":
      case "Baseline":
        return this.cn.crosshairMarkerBorderWidth;
    }
    return 0;
  }
  Sa(e) {
    switch (this.$l) {
      case "Line":
      case "Area":
      case "Baseline": {
        const n = this.cn.crosshairMarkerBackgroundColor;
        if (n.length !== 0) return n;
      }
    }
    return this.Us().$s(e).ce;
  }
  Ul() {
    switch (this.cn.priceFormat.type) {
      case "custom":
        this.wa = { format: this.cn.priceFormat.formatter };
        break;
      case "volume":
        this.wa = new n1(this.cn.priceFormat.precision);
        break;
      case "percent":
        this.wa = new Nm(this.cn.priceFormat.precision);
        break;
      default: {
        const e = Math.pow(10, this.cn.priceFormat.precision);
        this.wa = new Ll(e, this.cn.priceFormat.minMove * e);
      }
    }
    this.Yi !== null && this.Yi.Ra();
  }
  Ql() {
    const e = this.$t().St();
    if (!e.Da() || this.zt.Ni()) return void (this.Wl = []);
    const n = M(this.zt.el());
    this.Wl = this.Fl.map((i, s) => {
      const r = M(e.Va(i.time, !0)), l = r < n ? 1 : -1;
      return { time: M(this.zt.ll(r, l)).ee, position: i.position, shape: i.shape, color: i.color, id: i.id, th: s, text: i.text, size: i.size, originalTime: i.originalTime };
    });
  }
  ql(e) {
    switch (this.dn = new L1(this, this.$t()), this.$l) {
      case "Bar":
        this.wn = new c1(this, this.$t());
        break;
      case "Candlestick":
        this.wn = new v1(this, this.$t());
        break;
      case "Line":
        this.wn = new E1(this, this.$t());
        break;
      case "Custom":
        this.wn = new yo(this, this.$t(), Re(e));
        break;
      case "Area":
        this.wn = new u1(this, this.$t());
        break;
      case "Baseline":
        this.wn = new p1(this, this.$t());
        break;
      case "Histogram":
        this.wn = new S1(this, this.$t());
        break;
      default:
        throw Error("Unknown chart style assigned: " + this.$l);
    }
  }
  ca(e, n) {
    const i = [];
    return So(this.Hl, e, n, i), i;
  }
}
class J1 {
  constructor(e) {
    this.cn = e;
  }
  Oa(e, n, i) {
    let s = e;
    if (this.cn.mode === 0) return s;
    const r = i.vn(), l = r.Ct();
    if (l === null) return s;
    const o = r.Rt(e, l), a = i.Ba().filter((h) => h instanceof nh).reduce((h, c) => {
      if (i.vr(c) || !c.yt()) return h;
      const f = c.Dt(), m = c.In();
      if (f.Ni() || !m.Kr(n)) return h;
      const w = m.Gh(n);
      if (w === null) return h;
      const y = ri(c.Ct());
      return h.concat([f.Rt(w.Vt[3], y.Vt)]);
    }, []);
    if (a.length === 0) return s;
    a.sort((h, c) => Math.abs(h - o) - Math.abs(c - o));
    const u = a[0];
    return s = r.pn(u, l), s;
  }
}
class G1 extends vt {
  constructor() {
    super(...arguments), this.zt = null;
  }
  J(e) {
    this.zt = e;
  }
  K({ context: e, bitmapSize: n, horizontalPixelRatio: i, verticalPixelRatio: s }) {
    if (this.zt === null) return;
    const r = Math.max(1, Math.floor(i));
    e.lineWidth = r, function(l, o) {
      l.save(), l.lineWidth % 2 && l.translate(0.5, 0.5), o(), l.restore();
    }(e, () => {
      const l = M(this.zt);
      if (l.Aa) {
        e.strokeStyle = l.Ia, Dn(e, l.za), e.beginPath();
        for (const o of l.La) {
          const a = Math.round(o.Ea * i);
          e.moveTo(a, -r), e.lineTo(a, n.height + r);
        }
        e.stroke();
      }
      if (l.Na) {
        e.strokeStyle = l.Fa, Dn(e, l.Wa), e.beginPath();
        for (const o of l.ja) {
          const a = Math.round(o.Ea * s);
          e.moveTo(-r, a), e.lineTo(n.width + r, a);
        }
        e.stroke();
      }
    });
  }
}
class Y1 {
  constructor(e) {
    this.Wt = new G1(), this.ft = !0, this.tn = e;
  }
  bt() {
    this.ft = !0;
  }
  gt() {
    if (this.ft) {
      const e = this.tn.$t().W().grid, n = { Na: e.horzLines.visible, Aa: e.vertLines.visible, Fa: e.horzLines.color, Ia: e.vertLines.color, Wa: e.horzLines.style, za: e.vertLines.style, ja: this.tn.vn().Ha(), La: (this.tn.$t().St().Ha() || []).map((i) => ({ Ea: i.coord })) };
      this.Wt.J(n), this.ft = !1;
    }
    return this.Wt;
  }
}
class Z1 {
  constructor(e) {
    this.wn = new Y1(e);
  }
  qh() {
    return this.wn;
  }
}
const bo = { $a: 4, Ua: 1e-4 };
function li(t, e) {
  const n = 100 * (t - e) / e;
  return e < 0 ? -n : n;
}
function ew(t, e) {
  const n = li(t.Ph(), e), i = li(t.Rh(), e);
  return new Fe(n, i);
}
function ss(t, e) {
  const n = 100 * (t - e) / e + 100;
  return e < 0 ? -n : n;
}
function tw(t, e) {
  const n = ss(t.Ph(), e), i = ss(t.Rh(), e);
  return new Fe(n, i);
}
function cl(t, e) {
  const n = Math.abs(t);
  if (n < 1e-15) return 0;
  const i = Math.log10(n + e.Ua) + e.$a;
  return t < 0 ? -i : i;
}
function rs(t, e) {
  const n = Math.abs(t);
  if (n < 1e-15) return 0;
  const i = Math.pow(10, n - e.$a) - e.Ua;
  return t < 0 ? -i : i;
}
function Bi(t, e) {
  if (t === null) return null;
  const n = cl(t.Ph(), e), i = cl(t.Rh(), e);
  return new Fe(n, i);
}
function hr(t, e) {
  if (t === null) return null;
  const n = rs(t.Ph(), e), i = rs(t.Rh(), e);
  return new Fe(n, i);
}
function _o(t) {
  if (t === null) return bo;
  const e = Math.abs(t.Rh() - t.Ph());
  if (e >= 1 || e < 1e-15) return bo;
  const n = Math.ceil(Math.abs(Math.log10(e))), i = bo.$a + n;
  return { $a: i, Ua: 1 / Math.pow(10, i) };
}
class ko {
  constructor(e, n) {
    if (this.qa = e, this.Ya = n, function(i) {
      if (i < 0) return !1;
      for (let s = i; s > 1; s /= 10) if (s % 10 != 0) return !1;
      return !0;
    }(this.qa)) this.Za = [2, 2.5, 2];
    else {
      this.Za = [];
      for (let i = this.qa; i !== 1; ) {
        if (i % 2 == 0) this.Za.push(2), i /= 2;
        else {
          if (i % 5 != 0) throw new Error("unexpected base");
          this.Za.push(2, 2.5), i /= 5;
        }
        if (this.Za.length > 100) throw new Error("something wrong with base");
      }
    }
  }
  Xa(e, n, i) {
    const s = this.qa === 0 ? 0 : 1 / this.qa;
    let r = Math.pow(10, Math.max(0, Math.ceil(Math.log10(e - n)))), l = 0, o = this.Ya[0];
    for (; ; ) {
      const c = ar(r, s, 1e-14) && r > s + 1e-14, f = ar(r, i * o, 1e-14), m = ar(r, 1, 1e-14);
      if (!(c && f && m)) break;
      r /= o, o = this.Ya[++l % this.Ya.length];
    }
    if (r <= s + 1e-14 && (r = s), r = Math.max(1, r), this.Za.length > 0 && (a = r, u = 1, h = 1e-14, Math.abs(a - u) < h)) for (l = 0, o = this.Za[0]; ar(r, i * o, 1e-14) && r > s + 1e-14; ) r /= o, o = this.Za[++l % this.Za.length];
    var a, u, h;
    return r;
  }
}
class Qc {
  constructor(e, n, i, s) {
    this.Ka = [], this.Li = e, this.qa = n, this.Ga = i, this.Ja = s;
  }
  Xa(e, n) {
    if (e < n) throw new Error("high < low");
    const i = this.Li.At(), s = (e - n) * this.Qa() / i, r = new ko(this.qa, [2, 2.5, 2]), l = new ko(this.qa, [2, 2, 2.5]), o = new ko(this.qa, [2.5, 2, 2]), a = [];
    return a.push(r.Xa(e, n, s), l.Xa(e, n, s), o.Xa(e, n, s)), function(u) {
      if (u.length < 1) throw Error("array is empty");
      let h = u[0];
      for (let c = 1; c < u.length; ++c) u[c] < h && (h = u[c]);
      return h;
    }(a);
  }
  io() {
    const e = this.Li, n = e.Ct();
    if (n === null) return void (this.Ka = []);
    const i = e.At(), s = this.Ga(i - 1, n), r = this.Ga(0, n), l = this.Li.W().entireTextOnly ? this.no() / 2 : 0, o = l, a = i - 1 - l, u = Math.max(s, r), h = Math.min(s, r);
    if (u === h) return void (this.Ka = []);
    let c = this.Xa(u, h), f = u % c;
    f += f < 0 ? c : 0;
    const m = u >= h ? 1 : -1;
    let w = null, y = 0;
    for (let b = u - f; b > h; b -= c) {
      const g = this.Ja(b, n, !0);
      w !== null && Math.abs(g - w) < this.Qa() || g < o || g > a || (y < this.Ka.length ? (this.Ka[y].Ea = g, this.Ka[y].so = e.eo(b)) : this.Ka.push({ Ea: g, so: e.eo(b) }), y++, w = g, e.ro() && (c = this.Xa(b * m, h)));
    }
    this.Ka.length = y;
  }
  Ha() {
    return this.Ka;
  }
  no() {
    return this.Li.P();
  }
  Qa() {
    return Math.ceil(2.5 * this.no());
  }
}
function Um(t) {
  return t.slice().sort((e, n) => M(e.Xi()) - M(n.Xi()));
}
var Jc;
(function(t) {
  t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100";
})(Jc || (Jc = {}));
const Gc = new Nm(), Yc = new Ll(100, 1);
class nw {
  constructor(e, n, i, s) {
    this.ho = 0, this.lo = null, this.Ih = null, this.ao = null, this.oo = { _o: !1, uo: null }, this.co = 0, this.do = 0, this.fo = new le(), this.vo = new le(), this.po = [], this.mo = null, this.bo = null, this.wo = null, this.Mo = null, this.wa = Yc, this.xo = _o(null), this.So = e, this.cn = n, this.ko = i, this.yo = s, this.Co = new Qc(this, 100, this.To.bind(this), this.Po.bind(this));
  }
  Pa() {
    return this.So;
  }
  W() {
    return this.cn;
  }
  $h(e) {
    if (pt(this.cn, e), this.Ra(), e.mode !== void 0 && this.Ro({ Cr: e.mode }), e.scaleMargins !== void 0) {
      const n = Re(e.scaleMargins.top), i = Re(e.scaleMargins.bottom);
      if (n < 0 || n > 1) throw new Error(`Invalid top margin - expect value between 0 and 1, given=${n}`);
      if (i < 0 || i > 1) throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${i}`);
      if (n + i > 1) throw new Error(`Invalid margins - sum of margins must be less than 1, given=${n + i}`);
      this.Do(), this.bo = null;
    }
  }
  Vo() {
    return this.cn.autoScale;
  }
  ro() {
    return this.cn.mode === 1;
  }
  Mh() {
    return this.cn.mode === 2;
  }
  Oo() {
    return this.cn.mode === 3;
  }
  Cr() {
    return { Wn: this.cn.autoScale, Bo: this.cn.invertScale, Cr: this.cn.mode };
  }
  Ro(e) {
    const n = this.Cr();
    let i = null;
    e.Wn !== void 0 && (this.cn.autoScale = e.Wn), e.Cr !== void 0 && (this.cn.mode = e.Cr, e.Cr !== 2 && e.Cr !== 3 || (this.cn.autoScale = !0), this.oo._o = !1), n.Cr === 1 && e.Cr !== n.Cr && (function(r, l) {
      if (r === null) return !1;
      const o = rs(r.Ph(), l), a = rs(r.Rh(), l);
      return isFinite(o) && isFinite(a);
    }(this.Ih, this.xo) ? (i = hr(this.Ih, this.xo), i !== null && this.Ao(i)) : this.cn.autoScale = !0), e.Cr === 1 && e.Cr !== n.Cr && (i = Bi(this.Ih, this.xo), i !== null && this.Ao(i));
    const s = n.Cr !== this.cn.mode;
    s && (n.Cr === 2 || this.Mh()) && this.Ra(), s && (n.Cr === 3 || this.Oo()) && this.Ra(), e.Bo !== void 0 && n.Bo !== e.Bo && (this.cn.invertScale = e.Bo, this.Io()), this.vo.m(n, this.Cr());
  }
  zo() {
    return this.vo;
  }
  P() {
    return this.ko.fontSize;
  }
  At() {
    return this.ho;
  }
  Lo(e) {
    this.ho !== e && (this.ho = e, this.Do(), this.bo = null);
  }
  Eo() {
    if (this.lo) return this.lo;
    const e = this.At() - this.No() - this.Fo();
    return this.lo = e, e;
  }
  Lh() {
    return this.Wo(), this.Ih;
  }
  Ao(e, n) {
    const i = this.Ih;
    (n || i === null && e !== null || i !== null && !i.Ch(e)) && (this.bo = null, this.Ih = e);
  }
  Ni() {
    return this.Wo(), this.ho === 0 || !this.Ih || this.Ih.Ni();
  }
  jo(e) {
    return this.Bo() ? e : this.At() - 1 - e;
  }
  Rt(e, n) {
    return this.Mh() ? e = li(e, n) : this.Oo() && (e = ss(e, n)), this.Po(e, n);
  }
  te(e, n, i) {
    this.Wo();
    const s = this.Fo(), r = M(this.Lh()), l = r.Ph(), o = r.Rh(), a = this.Eo() - 1, u = this.Bo(), h = a / (o - l), c = i === void 0 ? 0 : i.from, f = i === void 0 ? e.length : i.to, m = this.Ho();
    for (let w = c; w < f; w++) {
      const y = e[w], b = y._t;
      if (isNaN(b)) continue;
      let g = b;
      m !== null && (g = m(y._t, n));
      const p = s + h * (g - l), v = u ? p : this.ho - 1 - p;
      y.st = v;
    }
  }
  be(e, n, i) {
    this.Wo();
    const s = this.Fo(), r = M(this.Lh()), l = r.Ph(), o = r.Rh(), a = this.Eo() - 1, u = this.Bo(), h = a / (o - l), c = i === void 0 ? 0 : i.from, f = i === void 0 ? e.length : i.to, m = this.Ho();
    for (let w = c; w < f; w++) {
      const y = e[w];
      let b = y.ge, g = y.Me, p = y.xe, v = y.Se;
      m !== null && (b = m(y.ge, n), g = m(y.Me, n), p = m(y.xe, n), v = m(y.Se, n));
      let E = s + h * (b - l), _ = u ? E : this.ho - 1 - E;
      y.pe = _, E = s + h * (g - l), _ = u ? E : this.ho - 1 - E, y.de = _, E = s + h * (p - l), _ = u ? E : this.ho - 1 - E, y.fe = _, E = s + h * (v - l), _ = u ? E : this.ho - 1 - E, y.me = _;
    }
  }
  pn(e, n) {
    const i = this.To(e, n);
    return this.$o(i, n);
  }
  $o(e, n) {
    let i = e;
    return this.Mh() ? i = function(s, r) {
      return r < 0 && (s = -s), s / 100 * r + r;
    }(i, n) : this.Oo() && (i = function(s, r) {
      return s -= 100, r < 0 && (s = -s), s / 100 * r + r;
    }(i, n)), i;
  }
  Ba() {
    return this.po;
  }
  Uo() {
    if (this.mo) return this.mo;
    let e = [];
    for (let n = 0; n < this.po.length; n++) {
      const i = this.po[n];
      i.Xi() === null && i.Ki(n + 1), e.push(i);
    }
    return e = Um(e), this.mo = e, this.mo;
  }
  qo(e) {
    this.po.indexOf(e) === -1 && (this.po.push(e), this.Ra(), this.Yo());
  }
  Zo(e) {
    const n = this.po.indexOf(e);
    if (n === -1) throw new Error("source is not attached to scale");
    this.po.splice(n, 1), this.po.length === 0 && (this.Ro({ Wn: !0 }), this.Ao(null)), this.Ra(), this.Yo();
  }
  Ct() {
    let e = null;
    for (const n of this.po) {
      const i = n.Ct();
      i !== null && (e === null || i.la < e.la) && (e = i);
    }
    return e === null ? null : e.Vt;
  }
  Bo() {
    return this.cn.invertScale;
  }
  Ha() {
    const e = this.Ct() === null;
    if (this.bo !== null && (e || this.bo.Xo === e)) return this.bo.Ha;
    this.Co.io();
    const n = this.Co.Ha();
    return this.bo = { Ha: n, Xo: e }, this.fo.m(), n;
  }
  Ko() {
    return this.fo;
  }
  Go(e) {
    this.Mh() || this.Oo() || this.wo === null && this.ao === null && (this.Ni() || (this.wo = this.ho - e, this.ao = M(this.Lh()).Th()));
  }
  Jo(e) {
    if (this.Mh() || this.Oo() || this.wo === null) return;
    this.Ro({ Wn: !1 }), (e = this.ho - e) < 0 && (e = 0);
    let n = (this.wo + 0.2 * (this.ho - 1)) / (e + 0.2 * (this.ho - 1));
    const i = M(this.ao).Th();
    n = Math.max(n, 0.1), i.Vh(n), this.Ao(i);
  }
  Qo() {
    this.Mh() || this.Oo() || (this.wo = null, this.ao = null);
  }
  t_(e) {
    this.Vo() || this.Mo === null && this.ao === null && (this.Ni() || (this.Mo = e, this.ao = M(this.Lh()).Th()));
  }
  i_(e) {
    if (this.Vo() || this.Mo === null) return;
    const n = M(this.Lh()).Dh() / (this.Eo() - 1);
    let i = e - this.Mo;
    this.Bo() && (i *= -1);
    const s = i * n, r = M(this.ao).Th();
    r.Oh(s), this.Ao(r, !0), this.bo = null;
  }
  n_() {
    this.Vo() || this.Mo !== null && (this.Mo = null, this.ao = null);
  }
  ba() {
    return this.wa || this.Ra(), this.wa;
  }
  Fi(e, n) {
    switch (this.cn.mode) {
      case 2:
        return this.s_(li(e, n));
      case 3:
        return this.ba().format(ss(e, n));
      default:
        return this.Wh(e);
    }
  }
  eo(e) {
    switch (this.cn.mode) {
      case 2:
        return this.s_(e);
      case 3:
        return this.ba().format(e);
      default:
        return this.Wh(e);
    }
  }
  Yl(e) {
    return this.Wh(e, M(this.e_()).ba());
  }
  Zl(e, n) {
    return e = li(e, n), this.s_(e, Gc);
  }
  r_() {
    return this.po;
  }
  h_(e) {
    this.oo = { uo: e, _o: !1 };
  }
  Vn() {
    this.po.forEach((e) => e.Vn());
  }
  Ra() {
    this.bo = null;
    const e = this.e_();
    let n = 100;
    e !== null && (n = Math.round(1 / e.ma())), this.wa = Yc, this.Mh() ? (this.wa = Gc, n = 100) : this.Oo() ? (this.wa = new Ll(100, 1), n = 100) : e !== null && (this.wa = e.ba()), this.Co = new Qc(this, n, this.To.bind(this), this.Po.bind(this)), this.Co.io();
  }
  Yo() {
    this.mo = null;
  }
  e_() {
    return this.po[0] || null;
  }
  No() {
    return this.Bo() ? this.cn.scaleMargins.bottom * this.At() + this.do : this.cn.scaleMargins.top * this.At() + this.co;
  }
  Fo() {
    return this.Bo() ? this.cn.scaleMargins.top * this.At() + this.co : this.cn.scaleMargins.bottom * this.At() + this.do;
  }
  Wo() {
    this.oo._o || (this.oo._o = !0, this.l_());
  }
  Do() {
    this.lo = null;
  }
  Po(e, n) {
    if (this.Wo(), this.Ni()) return 0;
    e = this.ro() && e ? cl(e, this.xo) : e;
    const i = M(this.Lh()), s = this.Fo() + (this.Eo() - 1) * (e - i.Ph()) / i.Dh();
    return this.jo(s);
  }
  To(e, n) {
    if (this.Wo(), this.Ni()) return 0;
    const i = this.jo(e), s = M(this.Lh()), r = s.Ph() + s.Dh() * ((i - this.Fo()) / (this.Eo() - 1));
    return this.ro() ? rs(r, this.xo) : r;
  }
  Io() {
    this.bo = null, this.Co.io();
  }
  l_() {
    const e = this.oo.uo;
    if (e === null) return;
    let n = null;
    const i = this.r_();
    let s = 0, r = 0;
    for (const a of i) {
      if (!a.yt()) continue;
      const u = a.Ct();
      if (u === null) continue;
      const h = a.Il(e.Os(), e.ui());
      let c = h && h.Lh();
      if (c !== null) {
        switch (this.cn.mode) {
          case 1:
            c = Bi(c, this.xo);
            break;
          case 2:
            c = ew(c, u.Vt);
            break;
          case 3:
            c = tw(c, u.Vt);
        }
        if (n = n === null ? c : n.ts(M(c)), h !== null) {
          const f = h.Eh();
          f !== null && (s = Math.max(s, f.above), r = Math.max(r, f.below));
        }
      }
    }
    if (s === this.co && r === this.do || (this.co = s, this.do = r, this.bo = null, this.Do()), n !== null) {
      if (n.Ph() === n.Rh()) {
        const a = this.e_(), u = 5 * (a === null || this.Mh() || this.Oo() ? 1 : a.ma());
        this.ro() && (n = hr(n, this.xo)), n = new Fe(n.Ph() - u, n.Rh() + u), this.ro() && (n = Bi(n, this.xo));
      }
      if (this.ro()) {
        const a = hr(n, this.xo), u = _o(a);
        if (l = u, o = this.xo, l.$a !== o.$a || l.Ua !== o.Ua) {
          const h = this.ao !== null ? hr(this.ao, this.xo) : null;
          this.xo = u, n = Bi(a, u), h !== null && (this.ao = Bi(h, u));
        }
      }
      this.Ao(n);
    } else this.Ih === null && (this.Ao(new Fe(-0.5, 0.5)), this.xo = _o(null));
    var l, o;
    this.oo._o = !0;
  }
  Ho() {
    return this.Mh() ? li : this.Oo() ? ss : this.ro() ? (e) => cl(e, this.xo) : null;
  }
  a_(e, n, i) {
    return n === void 0 ? (i === void 0 && (i = this.ba()), i.format(e)) : n(e);
  }
  Wh(e, n) {
    return this.a_(e, this.yo.priceFormatter, n);
  }
  s_(e, n) {
    return this.a_(e, this.yo.percentageFormatter, n);
  }
}
class iw {
  constructor(e, n) {
    this.po = [], this.o_ = /* @__PURE__ */ new Map(), this.ho = 0, this.__ = 0, this.u_ = 1e3, this.mo = null, this.c_ = new le(), this.yl = e, this.$i = n, this.d_ = new Z1(this);
    const i = n.W();
    this.f_ = this.v_("left", i.leftPriceScale), this.p_ = this.v_("right", i.rightPriceScale), this.f_.zo().l(this.m_.bind(this, this.f_), this), this.p_.zo().l(this.m_.bind(this, this.p_), this), this.b_(i);
  }
  b_(e) {
    if (e.leftPriceScale && this.f_.$h(e.leftPriceScale), e.rightPriceScale && this.p_.$h(e.rightPriceScale), e.localization && (this.f_.Ra(), this.p_.Ra()), e.overlayPriceScales) {
      const n = Array.from(this.o_.values());
      for (const i of n) {
        const s = M(i[0].Dt());
        s.$h(e.overlayPriceScales), e.localization && s.Ra();
      }
    }
  }
  w_(e) {
    switch (e) {
      case "left":
        return this.f_;
      case "right":
        return this.p_;
    }
    return this.o_.has(e) ? Re(this.o_.get(e))[0].Dt() : null;
  }
  S() {
    this.$t().g_().p(this), this.f_.zo().p(this), this.p_.zo().p(this), this.po.forEach((e) => {
      e.S && e.S();
    }), this.c_.m();
  }
  M_() {
    return this.u_;
  }
  x_(e) {
    this.u_ = e;
  }
  $t() {
    return this.$i;
  }
  Hi() {
    return this.__;
  }
  At() {
    return this.ho;
  }
  S_(e) {
    this.__ = e, this.k_();
  }
  Lo(e) {
    this.ho = e, this.f_.Lo(e), this.p_.Lo(e), this.po.forEach((n) => {
      if (this.vr(n)) {
        const i = n.Dt();
        i !== null && i.Lo(e);
      }
    }), this.k_();
  }
  Ba() {
    return this.po;
  }
  vr(e) {
    const n = e.Dt();
    return n === null || this.f_ !== n && this.p_ !== n;
  }
  qo(e, n, i) {
    const s = i !== void 0 ? i : this.C_().y_ + 1;
    this.T_(e, n, s);
  }
  Zo(e) {
    const n = this.po.indexOf(e);
    fn(n !== -1, "removeDataSource: invalid data source"), this.po.splice(n, 1);
    const i = M(e.Dt()).Pa();
    if (this.o_.has(i)) {
      const r = Re(this.o_.get(i)), l = r.indexOf(e);
      l !== -1 && (r.splice(l, 1), r.length === 0 && this.o_.delete(i));
    }
    const s = e.Dt();
    s && s.Ba().indexOf(e) >= 0 && s.Zo(e), s !== null && (s.Yo(), this.P_(s)), this.mo = null;
  }
  mr(e) {
    return e === this.f_ ? "left" : e === this.p_ ? "right" : "overlay";
  }
  R_() {
    return this.f_;
  }
  D_() {
    return this.p_;
  }
  V_(e, n) {
    e.Go(n);
  }
  O_(e, n) {
    e.Jo(n), this.k_();
  }
  B_(e) {
    e.Qo();
  }
  A_(e, n) {
    e.t_(n);
  }
  I_(e, n) {
    e.i_(n), this.k_();
  }
  z_(e) {
    e.n_();
  }
  k_() {
    this.po.forEach((e) => {
      e.Vn();
    });
  }
  vn() {
    let e = null;
    return this.$i.W().rightPriceScale.visible && this.p_.Ba().length !== 0 ? e = this.p_ : this.$i.W().leftPriceScale.visible && this.f_.Ba().length !== 0 ? e = this.f_ : this.po.length !== 0 && (e = this.po[0].Dt()), e === null && (e = this.p_), e;
  }
  pr() {
    let e = null;
    return this.$i.W().rightPriceScale.visible ? e = this.p_ : this.$i.W().leftPriceScale.visible && (e = this.f_), e;
  }
  P_(e) {
    e !== null && e.Vo() && this.L_(e);
  }
  E_(e) {
    const n = this.yl.Xs();
    e.Ro({ Wn: !0 }), n !== null && e.h_(n), this.k_();
  }
  N_() {
    this.L_(this.f_), this.L_(this.p_);
  }
  F_() {
    this.P_(this.f_), this.P_(this.p_), this.po.forEach((e) => {
      this.vr(e) && this.P_(e.Dt());
    }), this.k_(), this.$i.Uh();
  }
  Uo() {
    return this.mo === null && (this.mo = Um(this.po)), this.mo;
  }
  W_() {
    return this.c_;
  }
  j_() {
    return this.d_;
  }
  L_(e) {
    const n = e.r_();
    if (n && n.length > 0 && !this.yl.Ni()) {
      const i = this.yl.Xs();
      i !== null && e.h_(i);
    }
    e.Vn();
  }
  C_() {
    const e = this.Uo();
    if (e.length === 0) return { H_: 0, y_: 0 };
    let n = 0, i = 0;
    for (let s = 0; s < e.length; s++) {
      const r = e[s].Xi();
      r !== null && (r < n && (n = r), r > i && (i = r));
    }
    return { H_: n, y_: i };
  }
  T_(e, n, i) {
    let s = this.w_(n);
    if (s === null && (s = this.v_(n, this.$i.W().overlayPriceScales)), this.po.push(e), !Tl(n)) {
      const r = this.o_.get(n) || [];
      r.push(e), this.o_.set(n, r);
    }
    s.qo(e), e.Gi(s), e.Ki(i), this.P_(s), this.mo = null;
  }
  m_(e, n, i) {
    n.Cr !== i.Cr && this.L_(e);
  }
  v_(e, n) {
    const i = Object.assign({ visible: !0, autoScale: !0 }, Ot(n)), s = new nw(e, i, this.$i.W().layout, this.$i.W().localization);
    return s.Lo(this.At()), s;
  }
}
class sw {
  constructor(e, n, i = 50) {
    this.Ke = 0, this.Ge = 1, this.Je = 1, this.tr = /* @__PURE__ */ new Map(), this.Qe = /* @__PURE__ */ new Map(), this.U_ = e, this.q_ = n, this.ir = i;
  }
  Y_(e) {
    const n = e.time, i = this.q_.cacheKey(n), s = this.tr.get(i);
    if (s !== void 0) return s.Z_;
    if (this.Ke === this.ir) {
      const l = this.Qe.get(this.Je);
      this.Qe.delete(this.Je), this.tr.delete(Re(l)), this.Je++, this.Ke--;
    }
    const r = this.U_(e);
    return this.tr.set(i, { Z_: r, rr: this.Ge }), this.Qe.set(this.Ge, i), this.Ke++, this.Ge++, r;
  }
}
class ls {
  constructor(e, n) {
    fn(e <= n, "right should be >= left"), this.X_ = e, this.K_ = n;
  }
  Os() {
    return this.X_;
  }
  ui() {
    return this.K_;
  }
  G_() {
    return this.K_ - this.X_ + 1;
  }
  Kr(e) {
    return this.X_ <= e && e <= this.K_;
  }
  Ch(e) {
    return this.X_ === e.Os() && this.K_ === e.ui();
  }
}
function Zc(t, e) {
  return t === null || e === null ? t === e : t.Ch(e);
}
class rw {
  constructor() {
    this.J_ = /* @__PURE__ */ new Map(), this.tr = null, this.Q_ = !1;
  }
  tu(e) {
    this.Q_ = e, this.tr = null;
  }
  iu(e, n) {
    this.nu(n), this.tr = null;
    for (let i = n; i < e.length; ++i) {
      const s = e[i];
      let r = this.J_.get(s.timeWeight);
      r === void 0 && (r = [], this.J_.set(s.timeWeight, r)), r.push({ index: i, time: s.time, weight: s.timeWeight, originalTime: s.originalTime });
    }
  }
  su(e, n) {
    const i = Math.ceil(n / e);
    return this.tr !== null && this.tr.eu === i || (this.tr = { Ha: this.ru(i), eu: i }), this.tr.Ha;
  }
  nu(e) {
    if (e === 0) return void this.J_.clear();
    const n = [];
    this.J_.forEach((i, s) => {
      e <= i[0].index ? n.push(s) : i.splice($s(i, e, (r) => r.index < e), 1 / 0);
    });
    for (const i of n) this.J_.delete(i);
  }
  ru(e) {
    let n = [];
    for (const i of Array.from(this.J_.keys()).sort((s, r) => r - s)) {
      if (!this.J_.get(i)) continue;
      const s = n;
      n = [];
      const r = s.length;
      let l = 0;
      const o = Re(this.J_.get(i)), a = o.length;
      let u = 1 / 0, h = -1 / 0;
      for (let c = 0; c < a; c++) {
        const f = o[c], m = f.index;
        for (; l < r; ) {
          const w = s[l], y = w.index;
          if (!(y < m)) {
            u = y;
            break;
          }
          l++, n.push(w), h = y, u = 1 / 0;
        }
        if (u - m >= e && m - h >= e) n.push(f), h = m;
        else if (this.Q_) return s;
      }
      for (; l < r; l++) n.push(s[l]);
    }
    return n;
  }
}
class pi {
  constructor(e) {
    this.hu = e;
  }
  lu() {
    return this.hu === null ? null : new ls(Math.floor(this.hu.Os()), Math.ceil(this.hu.ui()));
  }
  au() {
    return this.hu;
  }
  static ou() {
    return new pi(null);
  }
}
function lw(t, e) {
  return t.weight > e.weight ? t : e;
}
class ow {
  constructor(e, n, i, s) {
    this.__ = 0, this._u = null, this.uu = [], this.Mo = null, this.wo = null, this.cu = new rw(), this.du = /* @__PURE__ */ new Map(), this.fu = pi.ou(), this.vu = !0, this.pu = new le(), this.mu = new le(), this.bu = new le(), this.wu = null, this.gu = null, this.Mu = [], this.cn = n, this.yo = i, this.xu = n.rightOffset, this.Su = n.barSpacing, this.$i = e, this.q_ = s, this.ku(), this.cu.tu(n.uniformDistribution);
  }
  W() {
    return this.cn;
  }
  yu(e) {
    pt(this.yo, e), this.Cu(), this.ku();
  }
  $h(e, n) {
    var i;
    pt(this.cn, e), this.cn.fixLeftEdge && this.Tu(), this.cn.fixRightEdge && this.Pu(), e.barSpacing !== void 0 && this.$i.Gn(e.barSpacing), e.rightOffset !== void 0 && this.$i.Jn(e.rightOffset), e.minBarSpacing !== void 0 && this.$i.Gn((i = e.barSpacing) !== null && i !== void 0 ? i : this.Su), this.Cu(), this.ku(), this.bu.m();
  }
  mn(e) {
    var n, i;
    return (i = (n = this.uu[e]) === null || n === void 0 ? void 0 : n.time) !== null && i !== void 0 ? i : null;
  }
  Ui(e) {
    var n;
    return (n = this.uu[e]) !== null && n !== void 0 ? n : null;
  }
  Va(e, n) {
    if (this.uu.length < 1) return null;
    if (this.q_.key(e) > this.q_.key(this.uu[this.uu.length - 1].time)) return n ? this.uu.length - 1 : null;
    const i = $s(this.uu, this.q_.key(e), (s, r) => this.q_.key(s.time) < r);
    return this.q_.key(e) < this.q_.key(this.uu[i].time) ? n ? i : null : i;
  }
  Ni() {
    return this.__ === 0 || this.uu.length === 0 || this._u === null;
  }
  Da() {
    return this.uu.length > 0;
  }
  Xs() {
    return this.Ru(), this.fu.lu();
  }
  Du() {
    return this.Ru(), this.fu.au();
  }
  Vu() {
    const e = this.Xs();
    if (e === null) return null;
    const n = { from: e.Os(), to: e.ui() };
    return this.Ou(n);
  }
  Ou(e) {
    const n = Math.round(e.from), i = Math.round(e.to), s = M(this.Bu()), r = M(this.Au());
    return { from: M(this.Ui(Math.max(s, n))), to: M(this.Ui(Math.min(r, i))) };
  }
  Iu(e) {
    return { from: M(this.Va(e.from, !0)), to: M(this.Va(e.to, !0)) };
  }
  Hi() {
    return this.__;
  }
  S_(e) {
    if (!isFinite(e) || e <= 0 || this.__ === e) return;
    const n = this.Du(), i = this.__;
    if (this.__ = e, this.vu = !0, this.cn.lockVisibleTimeRangeOnResize && i !== 0) {
      const s = this.Su * e / i;
      this.Su = s;
    }
    if (this.cn.fixLeftEdge && n !== null && n.Os() <= 0) {
      const s = i - e;
      this.xu -= Math.round(s / this.Su) + 1, this.vu = !0;
    }
    this.zu(), this.Lu();
  }
  It(e) {
    if (this.Ni() || !Cs(e)) return 0;
    const n = this.Eu() + this.xu - e;
    return this.__ - (n + 0.5) * this.Su - 1;
  }
  Qs(e, n) {
    const i = this.Eu(), s = n === void 0 ? 0 : n.from, r = n === void 0 ? e.length : n.to;
    for (let l = s; l < r; l++) {
      const o = e[l].ot, a = i + this.xu - o, u = this.__ - (a + 0.5) * this.Su - 1;
      e[l].nt = u;
    }
  }
  Nu(e) {
    return Math.ceil(this.Fu(e));
  }
  Jn(e) {
    this.vu = !0, this.xu = e, this.Lu(), this.$i.Wu(), this.$i.Uh();
  }
  le() {
    return this.Su;
  }
  Gn(e) {
    this.ju(e), this.Lu(), this.$i.Wu(), this.$i.Uh();
  }
  Hu() {
    return this.xu;
  }
  Ha() {
    if (this.Ni()) return null;
    if (this.gu !== null) return this.gu;
    const e = this.Su, n = 5 * (this.$i.W().layout.fontSize + 4) / 8 * (this.cn.tickMarkMaxCharacterLength || 8), i = Math.round(n / e), s = M(this.Xs()), r = Math.max(s.Os(), s.Os() - i), l = Math.max(s.ui(), s.ui() - i), o = this.cu.su(e, n), a = this.Bu() + i, u = this.Au() - i, h = this.$u(), c = this.cn.fixLeftEdge || h, f = this.cn.fixRightEdge || h;
    let m = 0;
    for (const w of o) {
      if (!(r <= w.index && w.index <= l)) continue;
      let y;
      m < this.Mu.length ? (y = this.Mu[m], y.coord = this.It(w.index), y.label = this.Uu(w), y.weight = w.weight) : (y = { needAlignCoordinate: !1, coord: this.It(w.index), label: this.Uu(w), weight: w.weight }, this.Mu.push(y)), this.Su > n / 2 && !h ? y.needAlignCoordinate = !1 : y.needAlignCoordinate = c && w.index <= a || f && w.index >= u, m++;
    }
    return this.Mu.length = m, this.gu = this.Mu, this.Mu;
  }
  qu() {
    this.vu = !0, this.Gn(this.cn.barSpacing), this.Jn(this.cn.rightOffset);
  }
  Yu(e) {
    this.vu = !0, this._u = e, this.Lu(), this.Tu();
  }
  Zu(e, n) {
    const i = this.Fu(e), s = this.le(), r = s + n * (s / 10);
    this.Gn(r), this.cn.rightBarStaysOnScroll || this.Jn(this.Hu() + (i - this.Fu(e)));
  }
  Go(e) {
    this.Mo && this.n_(), this.wo === null && this.wu === null && (this.Ni() || (this.wo = e, this.Xu()));
  }
  Jo(e) {
    if (this.wu === null) return;
    const n = Ba(this.__ - e, 0, this.__), i = Ba(this.__ - M(this.wo), 0, this.__);
    n !== 0 && i !== 0 && this.Gn(this.wu.le * n / i);
  }
  Qo() {
    this.wo !== null && (this.wo = null, this.Ku());
  }
  t_(e) {
    this.Mo === null && this.wu === null && (this.Ni() || (this.Mo = e, this.Xu()));
  }
  i_(e) {
    if (this.Mo === null) return;
    const n = (this.Mo - e) / this.le();
    this.xu = M(this.wu).Hu + n, this.vu = !0, this.Lu();
  }
  n_() {
    this.Mo !== null && (this.Mo = null, this.Ku());
  }
  Gu() {
    this.Ju(this.cn.rightOffset);
  }
  Ju(e, n = 400) {
    if (!isFinite(e)) throw new RangeError("offset is required and must be finite number");
    if (!isFinite(n) || n <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
    const i = this.xu, s = performance.now();
    this.$i.Zn({ Qu: (r) => (r - s) / n >= 1, tc: (r) => {
      const l = (r - s) / n;
      return l >= 1 ? e : i + (e - i) * l;
    } });
  }
  bt(e, n) {
    this.vu = !0, this.uu = e, this.cu.iu(e, n), this.Lu();
  }
  nc() {
    return this.pu;
  }
  sc() {
    return this.mu;
  }
  ec() {
    return this.bu;
  }
  Eu() {
    return this._u || 0;
  }
  rc(e) {
    const n = e.G_();
    this.ju(this.__ / n), this.xu = e.ui() - this.Eu(), this.Lu(), this.vu = !0, this.$i.Wu(), this.$i.Uh();
  }
  hc() {
    const e = this.Bu(), n = this.Au();
    e !== null && n !== null && this.rc(new ls(e, n + this.cn.rightOffset));
  }
  lc(e) {
    const n = new ls(e.from, e.to);
    this.rc(n);
  }
  qi(e) {
    return this.yo.timeFormatter !== void 0 ? this.yo.timeFormatter(e.originalTime) : this.q_.formatHorzItem(e.time);
  }
  $u() {
    const { handleScroll: e, handleScale: n } = this.$i.W();
    return !(e.horzTouchDrag || e.mouseWheel || e.pressedMouseMove || e.vertTouchDrag || n.axisDoubleClickReset.time || n.axisPressedMouseMove.time || n.mouseWheel || n.pinch);
  }
  Bu() {
    return this.uu.length === 0 ? null : 0;
  }
  Au() {
    return this.uu.length === 0 ? null : this.uu.length - 1;
  }
  ac(e) {
    return (this.__ - 1 - e) / this.Su;
  }
  Fu(e) {
    const n = this.ac(e), i = this.Eu() + this.xu - n;
    return Math.round(1e6 * i) / 1e6;
  }
  ju(e) {
    const n = this.Su;
    this.Su = e, this.zu(), n !== this.Su && (this.vu = !0, this.oc());
  }
  Ru() {
    if (!this.vu) return;
    if (this.vu = !1, this.Ni()) return void this._c(pi.ou());
    const e = this.Eu(), n = this.__ / this.Su, i = this.xu + e, s = new ls(i - n + 1, i);
    this._c(new pi(s));
  }
  zu() {
    const e = this.uc();
    if (this.Su < e && (this.Su = e, this.vu = !0), this.__ !== 0) {
      const n = 0.5 * this.__;
      this.Su > n && (this.Su = n, this.vu = !0);
    }
  }
  uc() {
    return this.cn.fixLeftEdge && this.cn.fixRightEdge && this.uu.length !== 0 ? this.__ / this.uu.length : this.cn.minBarSpacing;
  }
  Lu() {
    const e = this.cc();
    e !== null && this.xu < e && (this.xu = e, this.vu = !0);
    const n = this.dc();
    this.xu > n && (this.xu = n, this.vu = !0);
  }
  cc() {
    const e = this.Bu(), n = this._u;
    return e === null || n === null ? null : e - n - 1 + (this.cn.fixLeftEdge ? this.__ / this.Su : Math.min(2, this.uu.length));
  }
  dc() {
    return this.cn.fixRightEdge ? 0 : this.__ / this.Su - Math.min(2, this.uu.length);
  }
  Xu() {
    this.wu = { le: this.le(), Hu: this.Hu() };
  }
  Ku() {
    this.wu = null;
  }
  Uu(e) {
    let n = this.du.get(e.weight);
    return n === void 0 && (n = new sw((i) => this.fc(i), this.q_), this.du.set(e.weight, n)), n.Y_(e);
  }
  fc(e) {
    return this.q_.formatTickmark(e, this.yo);
  }
  _c(e) {
    const n = this.fu;
    this.fu = e, Zc(n.lu(), this.fu.lu()) || this.pu.m(), Zc(n.au(), this.fu.au()) || this.mu.m(), this.oc();
  }
  oc() {
    this.gu = null;
  }
  Cu() {
    this.oc(), this.du.clear();
  }
  ku() {
    this.q_.updateFormatter(this.yo);
  }
  Tu() {
    if (!this.cn.fixLeftEdge) return;
    const e = this.Bu();
    if (e === null) return;
    const n = this.Xs();
    if (n === null) return;
    const i = n.Os() - e;
    if (i < 0) {
      const s = this.xu - i - 1;
      this.Jn(s);
    }
    this.zu();
  }
  Pu() {
    this.Lu(), this.zu();
  }
}
class aw {
  X(e, n, i) {
    e.useMediaCoordinateSpace((s) => this.K(s, n, i));
  }
  gl(e, n, i) {
    e.useMediaCoordinateSpace((s) => this.vc(s, n, i));
  }
  vc(e, n, i) {
  }
}
class uw extends aw {
  constructor(e) {
    super(), this.mc = /* @__PURE__ */ new Map(), this.zt = e;
  }
  K(e) {
  }
  vc(e) {
    if (!this.zt.yt) return;
    const { context: n, mediaSize: i } = e;
    let s = 0;
    for (const l of this.zt.bc) {
      if (l.Kt.length === 0) continue;
      n.font = l.R;
      const o = this.wc(n, l.Kt);
      o > i.width ? l.Zu = i.width / o : l.Zu = 1, s += l.gc * l.Zu;
    }
    let r = 0;
    switch (this.zt.Mc) {
      case "top":
        r = 0;
        break;
      case "center":
        r = Math.max((i.height - s) / 2, 0);
        break;
      case "bottom":
        r = Math.max(i.height - s, 0);
    }
    n.fillStyle = this.zt.V;
    for (const l of this.zt.bc) {
      n.save();
      let o = 0;
      switch (this.zt.xc) {
        case "left":
          n.textAlign = "left", o = l.gc / 2;
          break;
        case "center":
          n.textAlign = "center", o = i.width / 2;
          break;
        case "right":
          n.textAlign = "right", o = i.width - 1 - l.gc / 2;
      }
      n.translate(o, r), n.textBaseline = "top", n.font = l.R, n.scale(l.Zu, l.Zu), n.fillText(l.Kt, 0, l.Sc), n.restore(), r += l.gc * l.Zu;
    }
  }
  wc(e, n) {
    const i = this.kc(e.font);
    let s = i.get(n);
    return s === void 0 && (s = e.measureText(n).width, i.set(n, s)), s;
  }
  kc(e) {
    let n = this.mc.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Map(), this.mc.set(e, n)), n;
  }
}
class hw {
  constructor(e) {
    this.ft = !0, this.Ft = { yt: !1, V: "", bc: [], Mc: "center", xc: "center" }, this.Wt = new uw(this.Ft), this.jt = e;
  }
  bt() {
    this.ft = !0;
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.Wt;
  }
  Mt() {
    const e = this.jt.W(), n = this.Ft;
    n.yt = e.visible, n.yt && (n.V = e.color, n.xc = e.horzAlign, n.Mc = e.vertAlign, n.bc = [{ Kt: e.text, R: _i(e.fontSize, e.fontFamily, e.fontStyle), gc: 1.2 * e.fontSize, Sc: 0, Zu: 0 }]);
  }
}
class cw extends Yu {
  constructor(e, n) {
    super(), this.cn = n, this.wn = new hw(this);
  }
  Rn() {
    return [];
  }
  Pn() {
    return [this.wn];
  }
  W() {
    return this.cn;
  }
  Vn() {
    this.wn.bt();
  }
}
var ef, tf, nf, Va, sf;
(function(t) {
  t[t.OnTouchEnd = 0] = "OnTouchEnd", t[t.OnNextTap = 1] = "OnNextTap";
})(ef || (ef = {}));
class fw {
  constructor(e, n, i) {
    this.yc = [], this.Cc = [], this.__ = 0, this.Tc = null, this.Pc = new le(), this.Rc = new le(), this.Dc = null, this.Vc = e, this.cn = n, this.q_ = i, this.Oc = new Wy(this), this.yl = new ow(this, n.timeScale, this.cn.localization, i), this.vt = new t1(this, n.crosshair), this.Bc = new J1(n.crosshair), this.Ac = new cw(this, n.watermark), this.Ic(), this.yc[0].x_(2e3), this.zc = this.Lc(0), this.Ec = this.Lc(1);
  }
  Kl() {
    this.Nc(ye.es());
  }
  Uh() {
    this.Nc(ye.ss());
  }
  oa() {
    this.Nc(new ye(1));
  }
  Gl(e) {
    const n = this.Fc(e);
    this.Nc(n);
  }
  Wc() {
    return this.Tc;
  }
  jc(e) {
    const n = this.Tc;
    this.Tc = e, n !== null && this.Gl(n.Hc), e !== null && this.Gl(e.Hc);
  }
  W() {
    return this.cn;
  }
  $h(e) {
    pt(this.cn, e), this.yc.forEach((n) => n.b_(e)), e.timeScale !== void 0 && this.yl.$h(e.timeScale), e.localization !== void 0 && this.yl.yu(e.localization), (e.leftPriceScale || e.rightPriceScale) && this.Pc.m(), this.zc = this.Lc(0), this.Ec = this.Lc(1), this.Kl();
  }
  $c(e, n) {
    if (e === "left") return void this.$h({ leftPriceScale: n });
    if (e === "right") return void this.$h({ rightPriceScale: n });
    const i = this.Uc(e);
    i !== null && (i.Dt.$h(n), this.Pc.m());
  }
  Uc(e) {
    for (const n of this.yc) {
      const i = n.w_(e);
      if (i !== null) return { Ht: n, Dt: i };
    }
    return null;
  }
  St() {
    return this.yl;
  }
  qc() {
    return this.yc;
  }
  Yc() {
    return this.Ac;
  }
  Zc() {
    return this.vt;
  }
  Xc() {
    return this.Rc;
  }
  Kc(e, n) {
    e.Lo(n), this.Wu();
  }
  S_(e) {
    this.__ = e, this.yl.S_(this.__), this.yc.forEach((n) => n.S_(e)), this.Wu();
  }
  Ic(e) {
    const n = new iw(this.yl, this);
    e !== void 0 ? this.yc.splice(e, 0, n) : this.yc.push(n);
    const i = e === void 0 ? this.yc.length - 1 : e, s = ye.es();
    return s.Nn(i, { Fn: 0, Wn: !0 }), this.Nc(s), n;
  }
  V_(e, n, i) {
    e.V_(n, i);
  }
  O_(e, n, i) {
    e.O_(n, i), this.Jl(), this.Nc(this.Gc(e, 2));
  }
  B_(e, n) {
    e.B_(n), this.Nc(this.Gc(e, 2));
  }
  A_(e, n, i) {
    n.Vo() || e.A_(n, i);
  }
  I_(e, n, i) {
    n.Vo() || (e.I_(n, i), this.Jl(), this.Nc(this.Gc(e, 2)));
  }
  z_(e, n) {
    n.Vo() || (e.z_(n), this.Nc(this.Gc(e, 2)));
  }
  E_(e, n) {
    e.E_(n), this.Nc(this.Gc(e, 2));
  }
  Jc(e) {
    this.yl.Go(e);
  }
  Qc(e, n) {
    const i = this.St();
    if (i.Ni() || n === 0) return;
    const s = i.Hi();
    e = Math.max(1, Math.min(e, s)), i.Zu(e, n), this.Wu();
  }
  td(e) {
    this.nd(0), this.sd(e), this.ed();
  }
  rd(e) {
    this.yl.Jo(e), this.Wu();
  }
  hd() {
    this.yl.Qo(), this.Uh();
  }
  nd(e) {
    this.yl.t_(e);
  }
  sd(e) {
    this.yl.i_(e), this.Wu();
  }
  ed() {
    this.yl.n_(), this.Uh();
  }
  wt() {
    return this.Cc;
  }
  ld(e, n, i, s, r) {
    this.vt.gn(e, n);
    let l = NaN, o = this.yl.Nu(e);
    const a = this.yl.Xs();
    a !== null && (o = Math.min(Math.max(a.Os(), o), a.ui()));
    const u = s.vn(), h = u.Ct();
    h !== null && (l = u.pn(n, h)), l = this.Bc.Oa(l, o, s), this.vt.kn(o, l, s), this.oa(), r || this.Rc.m(this.vt.xt(), { x: e, y: n }, i);
  }
  ad(e, n, i) {
    const s = i.vn(), r = s.Ct(), l = s.Rt(e, M(r)), o = this.yl.Va(n, !0), a = this.yl.It(M(o));
    this.ld(a, l, null, i, !0);
  }
  od(e) {
    this.Zc().Cn(), this.oa(), e || this.Rc.m(null, null, null);
  }
  Jl() {
    const e = this.vt.Ht();
    if (e !== null) {
      const n = this.vt.xn(), i = this.vt.Sn();
      this.ld(n, i, null, e);
    }
    this.vt.Vn();
  }
  _d(e, n, i) {
    const s = this.yl.mn(0);
    n !== void 0 && i !== void 0 && this.yl.bt(n, i);
    const r = this.yl.mn(0), l = this.yl.Eu(), o = this.yl.Xs();
    if (o !== null && s !== null && r !== null) {
      const a = o.Kr(l), u = this.q_.key(s) > this.q_.key(r), h = e !== null && e > l && !u, c = this.yl.W().allowShiftVisibleRangeOnWhitespaceReplacement, f = a && (i !== void 0 || c) && this.yl.W().shiftVisibleRangeOnNewBar;
      if (h && !f) {
        const m = e - l;
        this.yl.Jn(this.yl.Hu() - m);
      }
    }
    this.yl.Yu(e);
  }
  ia(e) {
    e !== null && e.F_();
  }
  dr(e) {
    const n = this.yc.find((i) => i.Uo().includes(e));
    return n === void 0 ? null : n;
  }
  Wu() {
    this.Ac.Vn(), this.yc.forEach((e) => e.F_()), this.Jl();
  }
  S() {
    this.yc.forEach((e) => e.S()), this.yc.length = 0, this.cn.localization.priceFormatter = void 0, this.cn.localization.percentageFormatter = void 0, this.cn.localization.timeFormatter = void 0;
  }
  ud() {
    return this.Oc;
  }
  br() {
    return this.Oc.W();
  }
  g_() {
    return this.Pc;
  }
  dd(e, n, i) {
    const s = this.yc[0], r = this.fd(n, e, s, i);
    return this.Cc.push(r), this.Cc.length === 1 ? this.Kl() : this.Uh(), r;
  }
  vd(e) {
    const n = this.dr(e), i = this.Cc.indexOf(e);
    fn(i !== -1, "Series not found"), this.Cc.splice(i, 1), M(n).Zo(e), e.S && e.S();
  }
  Xl(e, n) {
    const i = M(this.dr(e));
    i.Zo(e);
    const s = this.Uc(n);
    if (s === null) {
      const r = e.Xi();
      i.qo(e, n, r);
    } else {
      const r = s.Ht === i ? e.Xi() : void 0;
      s.Ht.qo(e, n, r);
    }
  }
  hc() {
    const e = ye.ss();
    e.$n(), this.Nc(e);
  }
  pd(e) {
    const n = ye.ss();
    n.Yn(e), this.Nc(n);
  }
  Kn() {
    const e = ye.ss();
    e.Kn(), this.Nc(e);
  }
  Gn(e) {
    const n = ye.ss();
    n.Gn(e), this.Nc(n);
  }
  Jn(e) {
    const n = ye.ss();
    n.Jn(e), this.Nc(n);
  }
  Zn(e) {
    const n = ye.ss();
    n.Zn(e), this.Nc(n);
  }
  Un() {
    const e = ye.ss();
    e.Un(), this.Nc(e);
  }
  md() {
    return this.cn.rightPriceScale.visible ? "right" : "left";
  }
  bd() {
    return this.Ec;
  }
  q() {
    return this.zc;
  }
  Bt(e) {
    const n = this.Ec, i = this.zc;
    if (n === i) return n;
    if (e = Math.max(0, Math.min(100, Math.round(100 * e))), this.Dc === null || this.Dc.Ps !== i || this.Dc.Rs !== n) this.Dc = { Ps: i, Rs: n, wd: /* @__PURE__ */ new Map() };
    else {
      const r = this.Dc.wd.get(e);
      if (r !== void 0) return r;
    }
    const s = function(r, l, o) {
      const [a, u, h, c] = xs(r), [f, m, w, y] = xs(l), b = [Je(a + o * (f - a)), Je(u + o * (m - u)), Je(h + o * (w - h)), xm(c + o * (y - c))];
      return `rgba(${b[0]}, ${b[1]}, ${b[2]}, ${b[3]})`;
    }(i, n, e / 100);
    return this.Dc.wd.set(e, s), s;
  }
  Gc(e, n) {
    const i = new ye(n);
    if (e !== null) {
      const s = this.yc.indexOf(e);
      i.Nn(s, { Fn: n });
    }
    return i;
  }
  Fc(e, n) {
    return n === void 0 && (n = 2), this.Gc(this.dr(e), n);
  }
  Nc(e) {
    this.Vc && this.Vc(e), this.yc.forEach((n) => n.j_().qh().bt());
  }
  fd(e, n, i, s) {
    const r = new nh(this, e, n, i, s), l = e.priceScaleId !== void 0 ? e.priceScaleId : this.md();
    return i.qo(r, l), Tl(l) || r.$h(e), r;
  }
  Lc(e) {
    const n = this.cn.layout;
    return n.background.type === "gradient" ? e === 0 ? n.background.topColor : n.background.bottomColor : n.background.color;
  }
}
function Ia(t) {
  return !bt(t) && !Ds(t);
}
function Wm(t) {
  return bt(t);
}
(function(t) {
  t[t.Disabled = 0] = "Disabled", t[t.Continuous = 1] = "Continuous", t[t.OnDataUpdate = 2] = "OnDataUpdate";
})(tf || (tf = {})), function(t) {
  t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible";
}(nf || (nf = {})), function(t) {
  t.Solid = "solid", t.VerticalGradient = "gradient";
}(Va || (Va = {})), function(t) {
  t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds";
}(sf || (sf = {}));
const rf = (t) => t.getUTCFullYear();
function dw(t, e, n) {
  return e.replace(/yyyy/g, ((i) => Tt(rf(i), 4))(t)).replace(/yy/g, ((i) => Tt(rf(i) % 100, 2))(t)).replace(/MMMM/g, ((i, s) => new Date(i.getUTCFullYear(), i.getUTCMonth(), 1).toLocaleString(s, { month: "long" }))(t, n)).replace(/MMM/g, ((i, s) => new Date(i.getUTCFullYear(), i.getUTCMonth(), 1).toLocaleString(s, { month: "short" }))(t, n)).replace(/MM/g, ((i) => Tt(((s) => s.getUTCMonth() + 1)(i), 2))(t)).replace(/dd/g, ((i) => Tt(((s) => s.getUTCDate())(i), 2))(t));
}
class Hm {
  constructor(e = "yyyy-MM-dd", n = "default") {
    this.gd = e, this.Md = n;
  }
  Y_(e) {
    return dw(e, this.gd, this.Md);
  }
}
class pw {
  constructor(e) {
    this.xd = e || "%h:%m:%s";
  }
  Y_(e) {
    return this.xd.replace("%h", Tt(e.getUTCHours(), 2)).replace("%m", Tt(e.getUTCMinutes(), 2)).replace("%s", Tt(e.getUTCSeconds(), 2));
  }
}
const mw = { Sd: "yyyy-MM-dd", kd: "%h:%m:%s", yd: " ", Cd: "default" };
class vw {
  constructor(e = {}) {
    const n = Object.assign(Object.assign({}, mw), e);
    this.Td = new Hm(n.Sd, n.Cd), this.Pd = new pw(n.kd), this.Rd = n.yd;
  }
  Y_(e) {
    return `${this.Td.Y_(e)}${this.Rd}${this.Pd.Y_(e)}`;
  }
}
function cr(t) {
  return 60 * t * 60 * 1e3;
}
function xo(t) {
  return 60 * t * 1e3;
}
const fr = [{ Dd: (lf = 1, 1e3 * lf), Vd: 10 }, { Dd: xo(1), Vd: 20 }, { Dd: xo(5), Vd: 21 }, { Dd: xo(30), Vd: 22 }, { Dd: cr(1), Vd: 30 }, { Dd: cr(3), Vd: 31 }, { Dd: cr(6), Vd: 32 }, { Dd: cr(12), Vd: 33 }];
var lf;
function of(t, e) {
  if (t.getUTCFullYear() !== e.getUTCFullYear()) return 70;
  if (t.getUTCMonth() !== e.getUTCMonth()) return 60;
  if (t.getUTCDate() !== e.getUTCDate()) return 50;
  for (let n = fr.length - 1; n >= 0; --n) if (Math.floor(e.getTime() / fr[n].Dd) !== Math.floor(t.getTime() / fr[n].Dd)) return fr[n].Vd;
  return 0;
}
function Co(t) {
  let e = t;
  if (Ds(t) && (e = ih(t)), !Ia(e)) throw new Error("time must be of type BusinessDay");
  const n = new Date(Date.UTC(e.year, e.month - 1, e.day, 0, 0, 0, 0));
  return { Od: Math.round(n.getTime() / 1e3), Bd: e };
}
function af(t) {
  if (!Wm(t)) throw new Error("time must be of type isUTCTimestamp");
  return { Od: t };
}
function ih(t) {
  const e = new Date(t);
  if (isNaN(e.getTime())) throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);
  return { day: e.getUTCDate(), month: e.getUTCMonth() + 1, year: e.getUTCFullYear() };
}
function uf(t) {
  Ds(t.time) && (t.time = ih(t.time));
}
class hf {
  options() {
    return this.cn;
  }
  setOptions(e) {
    this.cn = e, this.updateFormatter(e.localization);
  }
  preprocessData(e) {
    Array.isArray(e) ? function(n) {
      n.forEach(uf);
    }(e) : uf(e);
  }
  createConverterToInternalObj(e) {
    return M(function(n) {
      return n.length === 0 ? null : Ia(n[0].time) || Ds(n[0].time) ? Co : af;
    }(e));
  }
  key(e) {
    return typeof e == "object" && "Od" in e ? e.Od : this.key(this.convertHorzItemToInternal(e));
  }
  cacheKey(e) {
    const n = e;
    return n.Bd === void 0 ? new Date(1e3 * n.Od).getTime() : new Date(Date.UTC(n.Bd.year, n.Bd.month - 1, n.Bd.day)).getTime();
  }
  convertHorzItemToInternal(e) {
    return Wm(n = e) ? af(n) : Ia(n) ? Co(n) : Co(ih(n));
    var n;
  }
  updateFormatter(e) {
    if (!this.cn) return;
    const n = e.dateFormat;
    this.cn.timeScale.timeVisible ? this.Ad = new vw({ Sd: n, kd: this.cn.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m", yd: "   ", Cd: e.locale }) : this.Ad = new Hm(n, e.locale);
  }
  formatHorzItem(e) {
    const n = e;
    return this.Ad.Y_(new Date(1e3 * n.Od));
  }
  formatTickmark(e, n) {
    const i = function(r, l, o) {
      switch (r) {
        case 0:
        case 10:
          return l ? o ? 4 : 3 : 2;
        case 20:
        case 21:
        case 22:
        case 30:
        case 31:
        case 32:
        case 33:
          return l ? 3 : 2;
        case 50:
          return 2;
        case 60:
          return 1;
        case 70:
          return 0;
      }
    }(e.weight, this.cn.timeScale.timeVisible, this.cn.timeScale.secondsVisible), s = this.cn.timeScale;
    if (s.tickMarkFormatter !== void 0) {
      const r = s.tickMarkFormatter(e.originalTime, i, n.locale);
      if (r !== null) return r;
    }
    return function(r, l, o) {
      const a = {};
      switch (l) {
        case 0:
          a.year = "numeric";
          break;
        case 1:
          a.month = "short";
          break;
        case 2:
          a.day = "numeric";
          break;
        case 3:
          a.hour12 = !1, a.hour = "2-digit", a.minute = "2-digit";
          break;
        case 4:
          a.hour12 = !1, a.hour = "2-digit", a.minute = "2-digit", a.second = "2-digit";
      }
      const u = r.Bd === void 0 ? new Date(1e3 * r.Od) : new Date(Date.UTC(r.Bd.year, r.Bd.month - 1, r.Bd.day));
      return new Date(u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate(), u.getUTCHours(), u.getUTCMinutes(), u.getUTCSeconds(), u.getUTCMilliseconds()).toLocaleString(o, a);
    }(e.time, i, n.locale);
  }
  maxTickMarkWeight(e) {
    let n = e.reduce(lw, e[0]).weight;
    return n > 30 && n < 50 && (n = 30), n;
  }
  fillWeightsForPoints(e, n) {
    (function(i, s = 0) {
      if (i.length === 0) return;
      let r = s === 0 ? null : i[s - 1].time.Od, l = r !== null ? new Date(1e3 * r) : null, o = 0;
      for (let a = s; a < i.length; ++a) {
        const u = i[a], h = new Date(1e3 * u.time.Od);
        l !== null && (u.timeWeight = of(h, l)), o += u.time.Od - (r || u.time.Od), r = u.time.Od, l = h;
      }
      if (s === 0 && i.length > 1) {
        const a = Math.ceil(o / (i.length - 1)), u = new Date(1e3 * (i[0].time.Od - a));
        i[0].timeWeight = of(new Date(1e3 * i[0].time.Od), u);
      }
    })(e, n);
  }
  static Id(e) {
    return pt({ localization: { dateFormat: "dd MMM 'yy" } }, e ?? {});
  }
}
const ki = typeof window < "u";
function cf() {
  return !!ki && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
}
function Mo() {
  return !!ki && /iPhone|iPad|iPod/.test(window.navigator.platform);
}
function ja(t) {
  return t + t % 2;
}
function zo(t, e) {
  return t.zd - e.zd;
}
function No(t, e, n) {
  const i = (t.zd - e.zd) / (t.ot - e.ot);
  return Math.sign(i) * Math.min(Math.abs(i), n);
}
class gw {
  constructor(e, n, i, s) {
    this.Ld = null, this.Ed = null, this.Nd = null, this.Fd = null, this.Wd = null, this.jd = 0, this.Hd = 0, this.$d = e, this.Ud = n, this.qd = i, this.rs = s;
  }
  Yd(e, n) {
    if (this.Ld !== null) {
      if (this.Ld.ot === n) return void (this.Ld.zd = e);
      if (Math.abs(this.Ld.zd - e) < this.rs) return;
    }
    this.Fd = this.Nd, this.Nd = this.Ed, this.Ed = this.Ld, this.Ld = { ot: n, zd: e };
  }
  Vr(e, n) {
    if (this.Ld === null || this.Ed === null || n - this.Ld.ot > 50) return;
    let i = 0;
    const s = No(this.Ld, this.Ed, this.Ud), r = zo(this.Ld, this.Ed), l = [s], o = [r];
    if (i += r, this.Nd !== null) {
      const u = No(this.Ed, this.Nd, this.Ud);
      if (Math.sign(u) === Math.sign(s)) {
        const h = zo(this.Ed, this.Nd);
        if (l.push(u), o.push(h), i += h, this.Fd !== null) {
          const c = No(this.Nd, this.Fd, this.Ud);
          if (Math.sign(c) === Math.sign(s)) {
            const f = zo(this.Nd, this.Fd);
            l.push(c), o.push(f), i += f;
          }
        }
      }
    }
    let a = 0;
    for (let u = 0; u < l.length; ++u) a += o[u] / i * l[u];
    Math.abs(a) < this.$d || (this.Wd = { zd: e, ot: n }, this.Hd = a, this.jd = function(u, h) {
      const c = Math.log(h);
      return Math.log(1 * c / -u) / c;
    }(Math.abs(a), this.qd));
  }
  tc(e) {
    const n = M(this.Wd), i = e - n.ot;
    return n.zd + this.Hd * (Math.pow(this.qd, i) - 1) / Math.log(this.qd);
  }
  Qu(e) {
    return this.Wd === null || this.Zd(e) === this.jd;
  }
  Zd(e) {
    const n = e - M(this.Wd).ot;
    return Math.min(n, this.jd);
  }
}
class yw {
  constructor(e, n) {
    this.Xd = void 0, this.Kd = void 0, this.Gd = void 0, this.en = !1, this.Jd = e, this.Qd = n, this.tf();
  }
  bt() {
    this.tf();
  }
  if() {
    this.Xd && this.Jd.removeChild(this.Xd), this.Kd && this.Jd.removeChild(this.Kd), this.Xd = void 0, this.Kd = void 0;
  }
  nf() {
    return this.en !== this.sf() || this.Gd !== this.ef();
  }
  ef() {
    return Cm(xs(this.Qd.W().layout.textColor)) > 160 ? "dark" : "light";
  }
  sf() {
    return this.Qd.W().layout.attributionLogo;
  }
  rf() {
    const e = new URL(location.href);
    return e.hostname ? "&utm_source=" + e.hostname + e.pathname : "";
  }
  tf() {
    this.nf() && (this.if(), this.en = this.sf(), this.en && (this.Gd = this.ef(), this.Kd = document.createElement("style"), this.Kd.innerText = "a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}", this.Xd = document.createElement("a"), this.Xd.href = `https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.rf()}`, this.Xd.title = "Charting by TradingView", this.Xd.id = "tv-attr-logo", this.Xd.target = "_blank", this.Xd.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 19" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>', this.Xd.toggleAttribute("data-dark", this.Gd === "dark"), this.Jd.appendChild(this.Kd), this.Jd.appendChild(this.Xd)));
  }
}
function $n(t, e) {
  const n = M(t.ownerDocument).createElement("canvas");
  t.appendChild(n);
  const i = Ny(n, { options: { allowResizeObserver: !1 }, transform: (s, r) => ({ width: Math.max(s.width, r.width), height: Math.max(s.height, r.height) }) });
  return i.resizeCanvasElement(e), i;
}
function An(t) {
  var e;
  t.width = 1, t.height = 1, (e = t.getContext("2d")) === null || e === void 0 || e.clearRect(0, 0, 1, 1);
}
function Ua(t, e, n, i) {
  t.gl && t.gl(e, n, i);
}
function Tr(t, e, n, i) {
  t.X(e, n, i);
}
function Wa(t, e, n, i) {
  const s = t(n, i);
  for (const r of s) {
    const l = r.gt();
    l !== null && e(l);
  }
}
function ww(t) {
  ki && window.chrome !== void 0 && t.addEventListener("mousedown", (e) => {
    if (e.button === 1) return e.preventDefault(), !1;
  });
}
class sh {
  constructor(e, n, i) {
    this.hf = 0, this.lf = null, this.af = { nt: Number.NEGATIVE_INFINITY, st: Number.POSITIVE_INFINITY }, this._f = 0, this.uf = null, this.cf = { nt: Number.NEGATIVE_INFINITY, st: Number.POSITIVE_INFINITY }, this.df = null, this.ff = !1, this.vf = null, this.pf = null, this.mf = !1, this.bf = !1, this.wf = !1, this.gf = null, this.Mf = null, this.xf = null, this.Sf = null, this.kf = null, this.yf = null, this.Cf = null, this.Tf = 0, this.Pf = !1, this.Rf = !1, this.Df = !1, this.Vf = 0, this.Of = null, this.Bf = !Mo(), this.Af = (s) => {
      this.If(s);
    }, this.zf = (s) => {
      if (this.Lf(s)) {
        const r = this.Ef(s);
        if (++this._f, this.uf && this._f > 1) {
          const { Nf: l } = this.Ff(wt(s), this.cf);
          l < 30 && !this.wf && this.Wf(r, this.Hf.jf), this.$f();
        }
      } else {
        const r = this.Ef(s);
        if (++this.hf, this.lf && this.hf > 1) {
          const { Nf: l } = this.Ff(wt(s), this.af);
          l < 5 && !this.bf && this.Uf(r, this.Hf.qf), this.Yf();
        }
      }
    }, this.Zf = e, this.Hf = n, this.cn = i, this.Xf();
  }
  S() {
    this.gf !== null && (this.gf(), this.gf = null), this.Mf !== null && (this.Mf(), this.Mf = null), this.Sf !== null && (this.Sf(), this.Sf = null), this.kf !== null && (this.kf(), this.kf = null), this.yf !== null && (this.yf(), this.yf = null), this.xf !== null && (this.xf(), this.xf = null), this.Kf(), this.Yf();
  }
  Gf(e) {
    this.Sf && this.Sf();
    const n = this.Jf.bind(this);
    if (this.Sf = () => {
      this.Zf.removeEventListener("mousemove", n);
    }, this.Zf.addEventListener("mousemove", n), this.Lf(e)) return;
    const i = this.Ef(e);
    this.Uf(i, this.Hf.Qf), this.Bf = !0;
  }
  Yf() {
    this.lf !== null && clearTimeout(this.lf), this.hf = 0, this.lf = null, this.af = { nt: Number.NEGATIVE_INFINITY, st: Number.POSITIVE_INFINITY };
  }
  $f() {
    this.uf !== null && clearTimeout(this.uf), this._f = 0, this.uf = null, this.cf = { nt: Number.NEGATIVE_INFINITY, st: Number.POSITIVE_INFINITY };
  }
  Jf(e) {
    if (this.Df || this.pf !== null || this.Lf(e)) return;
    const n = this.Ef(e);
    this.Uf(n, this.Hf.tv), this.Bf = !0;
  }
  iv(e) {
    const n = Ro(e.changedTouches, M(this.Of));
    if (n === null || (this.Vf = dr(e), this.Cf !== null) || this.Rf) return;
    this.Pf = !0;
    const i = this.Ff(wt(n), M(this.pf)), { nv: s, sv: r, Nf: l } = i;
    if (this.mf || !(l < 5)) {
      if (!this.mf) {
        const o = 0.5 * s, a = r >= o && !this.cn.ev(), u = o > r && !this.cn.rv();
        a || u || (this.Rf = !0), this.mf = !0, this.wf = !0, this.Kf(), this.$f();
      }
      if (!this.Rf) {
        const o = this.Ef(e, n);
        this.Wf(o, this.Hf.hv), Hn(e);
      }
    }
  }
  lv(e) {
    if (e.button !== 0) return;
    const n = this.Ff(wt(e), M(this.vf)), { Nf: i } = n;
    if (i >= 5 && (this.bf = !0, this.Yf()), this.bf) {
      const s = this.Ef(e);
      this.Uf(s, this.Hf.av);
    }
  }
  Ff(e, n) {
    const i = Math.abs(n.nt - e.nt), s = Math.abs(n.st - e.st);
    return { nv: i, sv: s, Nf: i + s };
  }
  ov(e) {
    let n = Ro(e.changedTouches, M(this.Of));
    if (n === null && e.touches.length === 0 && (n = e.changedTouches[0]), n === null) return;
    this.Of = null, this.Vf = dr(e), this.Kf(), this.pf = null, this.yf && (this.yf(), this.yf = null);
    const i = this.Ef(e, n);
    if (this.Wf(i, this.Hf._v), ++this._f, this.uf && this._f > 1) {
      const { Nf: s } = this.Ff(wt(n), this.cf);
      s < 30 && !this.wf && this.Wf(i, this.Hf.jf), this.$f();
    } else this.wf || (this.Wf(i, this.Hf.uv), this.Hf.uv && Hn(e));
    this._f === 0 && Hn(e), e.touches.length === 0 && this.ff && (this.ff = !1, Hn(e));
  }
  If(e) {
    if (e.button !== 0) return;
    const n = this.Ef(e);
    if (this.vf = null, this.Df = !1, this.kf && (this.kf(), this.kf = null), cf() && this.Zf.ownerDocument.documentElement.removeEventListener("mouseleave", this.Af), !this.Lf(e)) if (this.Uf(n, this.Hf.cv), ++this.hf, this.lf && this.hf > 1) {
      const { Nf: i } = this.Ff(wt(e), this.af);
      i < 5 && !this.bf && this.Uf(n, this.Hf.qf), this.Yf();
    } else this.bf || this.Uf(n, this.Hf.dv);
  }
  Kf() {
    this.df !== null && (clearTimeout(this.df), this.df = null);
  }
  fv(e) {
    if (this.Of !== null) return;
    const n = e.changedTouches[0];
    this.Of = n.identifier, this.Vf = dr(e);
    const i = this.Zf.ownerDocument.documentElement;
    this.wf = !1, this.mf = !1, this.Rf = !1, this.pf = wt(n), this.yf && (this.yf(), this.yf = null);
    {
      const r = this.iv.bind(this), l = this.ov.bind(this);
      this.yf = () => {
        i.removeEventListener("touchmove", r), i.removeEventListener("touchend", l);
      }, i.addEventListener("touchmove", r, { passive: !1 }), i.addEventListener("touchend", l, { passive: !1 }), this.Kf(), this.df = setTimeout(this.vv.bind(this, e), 240);
    }
    const s = this.Ef(e, n);
    this.Wf(s, this.Hf.pv), this.uf || (this._f = 0, this.uf = setTimeout(this.$f.bind(this), 500), this.cf = wt(n));
  }
  mv(e) {
    if (e.button !== 0) return;
    const n = this.Zf.ownerDocument.documentElement;
    cf() && n.addEventListener("mouseleave", this.Af), this.bf = !1, this.vf = wt(e), this.kf && (this.kf(), this.kf = null);
    {
      const s = this.lv.bind(this), r = this.If.bind(this);
      this.kf = () => {
        n.removeEventListener("mousemove", s), n.removeEventListener("mouseup", r);
      }, n.addEventListener("mousemove", s), n.addEventListener("mouseup", r);
    }
    if (this.Df = !0, this.Lf(e)) return;
    const i = this.Ef(e);
    this.Uf(i, this.Hf.bv), this.lf || (this.hf = 0, this.lf = setTimeout(this.Yf.bind(this), 500), this.af = wt(e));
  }
  Xf() {
    this.Zf.addEventListener("mouseenter", this.Gf.bind(this)), this.Zf.addEventListener("touchcancel", this.Kf.bind(this));
    {
      const e = this.Zf.ownerDocument, n = (i) => {
        this.Hf.wv && (i.composed && this.Zf.contains(i.composedPath()[0]) || i.target && this.Zf.contains(i.target) || this.Hf.wv());
      };
      this.Mf = () => {
        e.removeEventListener("touchstart", n);
      }, this.gf = () => {
        e.removeEventListener("mousedown", n);
      }, e.addEventListener("mousedown", n), e.addEventListener("touchstart", n, { passive: !0 });
    }
    Mo() && (this.xf = () => {
      this.Zf.removeEventListener("dblclick", this.zf);
    }, this.Zf.addEventListener("dblclick", this.zf)), this.Zf.addEventListener("mouseleave", this.gv.bind(this)), this.Zf.addEventListener("touchstart", this.fv.bind(this), { passive: !0 }), ww(this.Zf), this.Zf.addEventListener("mousedown", this.mv.bind(this)), this.Mv(), this.Zf.addEventListener("touchmove", () => {
    }, { passive: !1 });
  }
  Mv() {
    this.Hf.xv === void 0 && this.Hf.Sv === void 0 && this.Hf.kv === void 0 || (this.Zf.addEventListener("touchstart", (e) => this.yv(e.touches), { passive: !0 }), this.Zf.addEventListener("touchmove", (e) => {
      if (e.touches.length === 2 && this.Cf !== null && this.Hf.Sv !== void 0) {
        const n = ff(e.touches[0], e.touches[1]) / this.Tf;
        this.Hf.Sv(this.Cf, n), Hn(e);
      }
    }, { passive: !1 }), this.Zf.addEventListener("touchend", (e) => {
      this.yv(e.touches);
    }));
  }
  yv(e) {
    e.length === 1 && (this.Pf = !1), e.length !== 2 || this.Pf || this.ff ? this.Cv() : this.Tv(e);
  }
  Tv(e) {
    const n = this.Zf.getBoundingClientRect() || { left: 0, top: 0 };
    this.Cf = { nt: (e[0].clientX - n.left + (e[1].clientX - n.left)) / 2, st: (e[0].clientY - n.top + (e[1].clientY - n.top)) / 2 }, this.Tf = ff(e[0], e[1]), this.Hf.xv !== void 0 && this.Hf.xv(), this.Kf();
  }
  Cv() {
    this.Cf !== null && (this.Cf = null, this.Hf.kv !== void 0 && this.Hf.kv());
  }
  gv(e) {
    if (this.Sf && this.Sf(), this.Lf(e) || !this.Bf) return;
    const n = this.Ef(e);
    this.Uf(n, this.Hf.Pv), this.Bf = !Mo();
  }
  vv(e) {
    const n = Ro(e.touches, M(this.Of));
    if (n === null) return;
    const i = this.Ef(e, n);
    this.Wf(i, this.Hf.Rv), this.wf = !0, this.ff = !0;
  }
  Lf(e) {
    return e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents !== void 0 ? e.sourceCapabilities.firesTouchEvents : dr(e) < this.Vf + 500;
  }
  Wf(e, n) {
    n && n.call(this.Hf, e);
  }
  Uf(e, n) {
    n && n.call(this.Hf, e);
  }
  Ef(e, n) {
    const i = n || e, s = this.Zf.getBoundingClientRect() || { left: 0, top: 0 };
    return { clientX: i.clientX, clientY: i.clientY, pageX: i.pageX, pageY: i.pageY, screenX: i.screenX, screenY: i.screenY, localX: i.clientX - s.left, localY: i.clientY - s.top, ctrlKey: e.ctrlKey, altKey: e.altKey, shiftKey: e.shiftKey, metaKey: e.metaKey, Dv: !e.type.startsWith("mouse") && e.type !== "contextmenu" && e.type !== "click", Vv: e.type, Ov: i.target, Bv: e.view, Av: () => {
      e.type !== "touchstart" && Hn(e);
    } };
  }
}
function ff(t, e) {
  const n = t.clientX - e.clientX, i = t.clientY - e.clientY;
  return Math.sqrt(n * n + i * i);
}
function Hn(t) {
  t.cancelable && t.preventDefault();
}
function wt(t) {
  return { nt: t.pageX, st: t.pageY };
}
function dr(t) {
  return t.timeStamp || performance.now();
}
function Ro(t, e) {
  for (let n = 0; n < t.length; ++n) if (t[n].identifier === e) return t[n];
  return null;
}
function pr(t) {
  return { Hc: t.Hc, Iv: { gr: t.zv.externalId }, Lv: t.zv.cursorStyle };
}
function Sw(t, e, n) {
  for (const i of t) {
    const s = i.gt();
    if (s !== null && s.wr) {
      const r = s.wr(e, n);
      if (r !== null) return { Bv: i, Iv: r };
    }
  }
  return null;
}
function Po(t, e) {
  return (n) => {
    var i, s, r, l;
    return ((s = (i = n.Dt()) === null || i === void 0 ? void 0 : i.Pa()) !== null && s !== void 0 ? s : "") !== e ? [] : (l = (r = n.da) === null || r === void 0 ? void 0 : r.call(n, t)) !== null && l !== void 0 ? l : [];
  };
}
function df(t, e, n, i) {
  if (!t.length) return;
  let s = 0;
  const r = n / 2, l = t[0].At(i, !0);
  let o = e === 1 ? r - (t[0].Vi() - l / 2) : t[0].Vi() - l / 2 - r;
  o = Math.max(0, o);
  for (let a = 1; a < t.length; a++) {
    const u = t[a], h = t[a - 1], c = h.At(i, !1), f = u.Vi(), m = h.Vi();
    if (e === 1 ? f > m - c : f < m + c) {
      const w = m - c * e;
      u.Oi(w);
      const y = w - e * c / 2;
      if ((e === 1 ? y < 0 : y > n) && o > 0) {
        const b = e === 1 ? -1 - y : y - n, g = Math.min(b, o);
        for (let p = s; p < t.length; p++) t[p].Oi(t[p].Vi() + e * g);
        o -= g;
      }
    } else s = a, o = e === 1 ? m - c - f : f - (m + c);
  }
}
class pf {
  constructor(e, n, i, s) {
    this.Li = null, this.Ev = null, this.Nv = !1, this.Fv = new zs(200), this.Qr = null, this.Wv = 0, this.jv = !1, this.Hv = () => {
      this.jv || this.tn.$v().$t().Uh();
    }, this.Uv = () => {
      this.jv || this.tn.$v().$t().Uh();
    }, this.tn = e, this.cn = n, this.ko = n.layout, this.Oc = i, this.qv = s === "left", this.Yv = Po("normal", s), this.Zv = Po("top", s), this.Xv = Po("bottom", s), this.Kv = document.createElement("div"), this.Kv.style.height = "100%", this.Kv.style.overflow = "hidden", this.Kv.style.width = "25px", this.Kv.style.left = "0", this.Kv.style.position = "relative", this.Gv = $n(this.Kv, J({ width: 16, height: 16 })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);
    const r = this.Gv.canvasElement;
    r.style.position = "absolute", r.style.zIndex = "1", r.style.left = "0", r.style.top = "0", this.Jv = $n(this.Kv, J({ width: 16, height: 16 })), this.Jv.subscribeSuggestedBitmapSizeChanged(this.Uv);
    const l = this.Jv.canvasElement;
    l.style.position = "absolute", l.style.zIndex = "2", l.style.left = "0", l.style.top = "0";
    const o = { bv: this.Qv.bind(this), pv: this.Qv.bind(this), av: this.tp.bind(this), hv: this.tp.bind(this), wv: this.ip.bind(this), cv: this.np.bind(this), _v: this.np.bind(this), qf: this.sp.bind(this), jf: this.sp.bind(this), Qf: this.ep.bind(this), Pv: this.rp.bind(this) };
    this.hp = new sh(this.Jv.canvasElement, o, { ev: () => !this.cn.handleScroll.vertTouchDrag, rv: () => !0 });
  }
  S() {
    this.hp.S(), this.Jv.unsubscribeSuggestedBitmapSizeChanged(this.Uv), An(this.Jv.canvasElement), this.Jv.dispose(), this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv), An(this.Gv.canvasElement), this.Gv.dispose(), this.Li !== null && this.Li.Ko().p(this), this.Li = null;
  }
  lp() {
    return this.Kv;
  }
  P() {
    return this.ko.fontSize;
  }
  ap() {
    const e = this.Oc.W();
    return this.Qr !== e.R && (this.Fv.nr(), this.Qr = e.R), e;
  }
  op() {
    if (this.Li === null) return 0;
    let e = 0;
    const n = this.ap(), i = M(this.Gv.canvasElement.getContext("2d"));
    i.save();
    const s = this.Li.Ha();
    i.font = this._p(), s.length > 0 && (e = Math.max(this.Fv.xi(i, s[0].so), this.Fv.xi(i, s[s.length - 1].so)));
    const r = this.up();
    for (let u = r.length; u--; ) {
      const h = this.Fv.xi(i, r[u].Kt());
      h > e && (e = h);
    }
    const l = this.Li.Ct();
    if (l !== null && this.Ev !== null && (o = this.cn.crosshair).mode !== 2 && o.horzLine.visible && o.horzLine.labelVisible) {
      const u = this.Li.pn(1, l), h = this.Li.pn(this.Ev.height - 2, l);
      e = Math.max(e, this.Fv.xi(i, this.Li.Fi(Math.floor(Math.min(u, h)) + 0.11111111111111, l)), this.Fv.xi(i, this.Li.Fi(Math.ceil(Math.max(u, h)) - 0.11111111111111, l)));
    }
    var o;
    i.restore();
    const a = e || 34;
    return ja(Math.ceil(n.C + n.T + n.A + n.I + 5 + a));
  }
  cp(e) {
    this.Ev !== null && Mn(this.Ev, e) || (this.Ev = e, this.jv = !0, this.Gv.resizeCanvasElement(e), this.Jv.resizeCanvasElement(e), this.jv = !1, this.Kv.style.width = `${e.width}px`, this.Kv.style.height = `${e.height}px`);
  }
  dp() {
    return M(this.Ev).width;
  }
  Gi(e) {
    this.Li !== e && (this.Li !== null && this.Li.Ko().p(this), this.Li = e, e.Ko().l(this.fo.bind(this), this));
  }
  Dt() {
    return this.Li;
  }
  nr() {
    const e = this.tn.fp();
    this.tn.$v().$t().E_(e, M(this.Dt()));
  }
  vp(e) {
    if (this.Ev === null) return;
    if (e !== 1) {
      this.pp(), this.Gv.applySuggestedBitmapSize();
      const i = Ln(this.Gv);
      i !== null && (i.useBitmapCoordinateSpace((s) => {
        this.mp(s), this.Ie(s);
      }), this.tn.bp(i, this.Xv), this.wp(i), this.tn.bp(i, this.Yv), this.gp(i));
    }
    this.Jv.applySuggestedBitmapSize();
    const n = Ln(this.Jv);
    n !== null && (n.useBitmapCoordinateSpace(({ context: i, bitmapSize: s }) => {
      i.clearRect(0, 0, s.width, s.height);
    }), this.Mp(n), this.tn.bp(n, this.Zv));
  }
  xp() {
    return this.Gv.bitmapSize;
  }
  Sp(e, n, i) {
    const s = this.xp();
    s.width > 0 && s.height > 0 && e.drawImage(this.Gv.canvasElement, n, i);
  }
  bt() {
    var e;
    (e = this.Li) === null || e === void 0 || e.Ha();
  }
  Qv(e) {
    if (this.Li === null || this.Li.Ni() || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const n = this.tn.$v().$t(), i = this.tn.fp();
    this.Nv = !0, n.V_(i, this.Li, e.localY);
  }
  tp(e) {
    if (this.Li === null || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const n = this.tn.$v().$t(), i = this.tn.fp(), s = this.Li;
    n.O_(i, s, e.localY);
  }
  ip() {
    if (this.Li === null || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const e = this.tn.$v().$t(), n = this.tn.fp(), i = this.Li;
    this.Nv && (this.Nv = !1, e.B_(n, i));
  }
  np(e) {
    if (this.Li === null || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const n = this.tn.$v().$t(), i = this.tn.fp();
    this.Nv = !1, n.B_(i, this.Li);
  }
  sp(e) {
    this.cn.handleScale.axisDoubleClickReset.price && this.nr();
  }
  ep(e) {
    this.Li !== null && (!this.tn.$v().$t().W().handleScale.axisPressedMouseMove.price || this.Li.Mh() || this.Li.Oo() || this.kp(1));
  }
  rp(e) {
    this.kp(0);
  }
  up() {
    const e = [], n = this.Li === null ? void 0 : this.Li;
    return ((i) => {
      for (let s = 0; s < i.length; ++s) {
        const r = i[s].Rn(this.tn.fp(), n);
        for (let l = 0; l < r.length; l++) e.push(r[l]);
      }
    })(this.tn.fp().Uo()), e;
  }
  mp({ context: e, bitmapSize: n }) {
    const { width: i, height: s } = n, r = this.tn.fp().$t(), l = r.q(), o = r.bd();
    l === o ? Pl(e, 0, 0, i, s, l) : Mm(e, 0, 0, i, s, l, o);
  }
  Ie({ context: e, bitmapSize: n, horizontalPixelRatio: i }) {
    if (this.Ev === null || this.Li === null || !this.Li.W().borderVisible) return;
    e.fillStyle = this.Li.W().borderColor;
    const s = Math.max(1, Math.floor(this.ap().C * i));
    let r;
    r = this.qv ? n.width - s : 0, e.fillRect(r, 0, s, n.height);
  }
  wp(e) {
    if (this.Ev === null || this.Li === null) return;
    const n = this.Li.Ha(), i = this.Li.W(), s = this.ap(), r = this.qv ? this.Ev.width - s.T : 0;
    i.borderVisible && i.ticksVisible && e.useBitmapCoordinateSpace(({ context: l, horizontalPixelRatio: o, verticalPixelRatio: a }) => {
      l.fillStyle = i.borderColor;
      const u = Math.max(1, Math.floor(a)), h = Math.floor(0.5 * a), c = Math.round(s.T * o);
      l.beginPath();
      for (const f of n) l.rect(Math.floor(r * o), Math.round(f.Ea * a) - h, c, u);
      l.fill();
    }), e.useMediaCoordinateSpace(({ context: l }) => {
      var o;
      l.font = this._p(), l.fillStyle = (o = i.textColor) !== null && o !== void 0 ? o : this.ko.textColor, l.textAlign = this.qv ? "right" : "left", l.textBaseline = "middle";
      const a = this.qv ? Math.round(r - s.A) : Math.round(r + s.T + s.A), u = n.map((h) => this.Fv.Mi(l, h.so));
      for (let h = n.length; h--; ) {
        const c = n[h];
        l.fillText(c.so, a, c.Ea + u[h]);
      }
    });
  }
  pp() {
    if (this.Ev === null || this.Li === null) return;
    const e = [], n = this.Li.Uo().slice(), i = this.tn.fp(), s = this.ap();
    this.Li === i.pr() && this.tn.fp().Uo().forEach((l) => {
      i.vr(l) && n.push(l);
    });
    const r = this.Li;
    n.forEach((l) => {
      l.Rn(i, r).forEach((o) => {
        o.Oi(null), o.Bi() && e.push(o);
      });
    }), e.forEach((l) => l.Oi(l.ki())), this.Li.W().alignLabels && this.yp(e, s);
  }
  yp(e, n) {
    if (this.Ev === null) return;
    const i = this.Ev.height / 2, s = e.filter((l) => l.ki() <= i), r = e.filter((l) => l.ki() > i);
    s.sort((l, o) => o.ki() - l.ki()), r.sort((l, o) => l.ki() - o.ki());
    for (const l of e) {
      const o = Math.floor(l.At(n) / 2), a = l.ki();
      a > -o && a < o && l.Oi(o), a > this.Ev.height - o && a < this.Ev.height + o && l.Oi(this.Ev.height - o);
    }
    df(s, 1, this.Ev.height, n), df(r, -1, this.Ev.height, n);
  }
  gp(e) {
    if (this.Ev === null) return;
    const n = this.up(), i = this.ap(), s = this.qv ? "right" : "left";
    n.forEach((r) => {
      r.Ai() && r.gt(M(this.Li)).X(e, i, this.Fv, s);
    });
  }
  Mp(e) {
    if (this.Ev === null || this.Li === null) return;
    const n = this.tn.$v().$t(), i = [], s = this.tn.fp(), r = n.Zc().Rn(s, this.Li);
    r.length && i.push(r);
    const l = this.ap(), o = this.qv ? "right" : "left";
    i.forEach((a) => {
      a.forEach((u) => {
        u.gt(M(this.Li)).X(e, l, this.Fv, o);
      });
    });
  }
  kp(e) {
    this.Kv.style.cursor = e === 1 ? "ns-resize" : "default";
  }
  fo() {
    const e = this.op();
    this.Wv < e && this.tn.$v().$t().Kl(), this.Wv = e;
  }
  _p() {
    return _i(this.ko.fontSize, this.ko.fontFamily);
  }
}
function Ew(t, e) {
  var n, i;
  return (i = (n = t.ua) === null || n === void 0 ? void 0 : n.call(t, e)) !== null && i !== void 0 ? i : [];
}
function mr(t, e) {
  var n, i;
  return (i = (n = t.Pn) === null || n === void 0 ? void 0 : n.call(t, e)) !== null && i !== void 0 ? i : [];
}
function bw(t, e) {
  var n, i;
  return (i = (n = t.Ji) === null || n === void 0 ? void 0 : n.call(t, e)) !== null && i !== void 0 ? i : [];
}
function _w(t, e) {
  var n, i;
  return (i = (n = t.aa) === null || n === void 0 ? void 0 : n.call(t, e)) !== null && i !== void 0 ? i : [];
}
class rh {
  constructor(e, n) {
    this.Ev = J({ width: 0, height: 0 }), this.Cp = null, this.Tp = null, this.Pp = null, this.Rp = null, this.Dp = !1, this.Vp = new le(), this.Op = new le(), this.Bp = 0, this.Ap = !1, this.Ip = null, this.zp = !1, this.Lp = null, this.Ep = null, this.jv = !1, this.Hv = () => {
      this.jv || this.Np === null || this.$i().Uh();
    }, this.Uv = () => {
      this.jv || this.Np === null || this.$i().Uh();
    }, this.Qd = e, this.Np = n, this.Np.W_().l(this.Fp.bind(this), this, !0), this.Wp = document.createElement("td"), this.Wp.style.padding = "0", this.Wp.style.position = "relative";
    const i = document.createElement("div");
    i.style.width = "100%", i.style.height = "100%", i.style.position = "relative", i.style.overflow = "hidden", this.jp = document.createElement("td"), this.jp.style.padding = "0", this.Hp = document.createElement("td"), this.Hp.style.padding = "0", this.Wp.appendChild(i), this.Gv = $n(i, J({ width: 16, height: 16 })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);
    const s = this.Gv.canvasElement;
    s.style.position = "absolute", s.style.zIndex = "1", s.style.left = "0", s.style.top = "0", this.Jv = $n(i, J({ width: 16, height: 16 })), this.Jv.subscribeSuggestedBitmapSizeChanged(this.Uv);
    const r = this.Jv.canvasElement;
    r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0", this.$p = document.createElement("tr"), this.$p.appendChild(this.jp), this.$p.appendChild(this.Wp), this.$p.appendChild(this.Hp), this.Up(), this.hp = new sh(this.Jv.canvasElement, this, { ev: () => this.Ip === null && !this.Qd.W().handleScroll.vertTouchDrag, rv: () => this.Ip === null && !this.Qd.W().handleScroll.horzTouchDrag });
  }
  S() {
    this.Cp !== null && this.Cp.S(), this.Tp !== null && this.Tp.S(), this.Pp = null, this.Jv.unsubscribeSuggestedBitmapSizeChanged(this.Uv), An(this.Jv.canvasElement), this.Jv.dispose(), this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv), An(this.Gv.canvasElement), this.Gv.dispose(), this.Np !== null && this.Np.W_().p(this), this.hp.S();
  }
  fp() {
    return M(this.Np);
  }
  qp(e) {
    var n, i;
    this.Np !== null && this.Np.W_().p(this), this.Np = e, this.Np !== null && this.Np.W_().l(rh.prototype.Fp.bind(this), this, !0), this.Up(), this.Qd.Yp().indexOf(this) === this.Qd.Yp().length - 1 ? (this.Pp = (n = this.Pp) !== null && n !== void 0 ? n : new yw(this.Wp, this.Qd), this.Pp.bt()) : ((i = this.Pp) === null || i === void 0 || i.if(), this.Pp = null);
  }
  $v() {
    return this.Qd;
  }
  lp() {
    return this.$p;
  }
  Up() {
    if (this.Np !== null && (this.Zp(), this.$i().wt().length !== 0)) {
      if (this.Cp !== null) {
        const e = this.Np.R_();
        this.Cp.Gi(M(e));
      }
      if (this.Tp !== null) {
        const e = this.Np.D_();
        this.Tp.Gi(M(e));
      }
    }
  }
  Xp() {
    this.Cp !== null && this.Cp.bt(), this.Tp !== null && this.Tp.bt();
  }
  M_() {
    return this.Np !== null ? this.Np.M_() : 0;
  }
  x_(e) {
    this.Np && this.Np.x_(e);
  }
  Qf(e) {
    if (!this.Np) return;
    this.Kp();
    const n = e.localX, i = e.localY;
    this.Gp(n, i, e);
  }
  bv(e) {
    this.Kp(), this.Jp(), this.Gp(e.localX, e.localY, e);
  }
  tv(e) {
    var n;
    if (!this.Np) return;
    this.Kp();
    const i = e.localX, s = e.localY;
    this.Gp(i, s, e);
    const r = this.wr(i, s);
    this.Qd.Qp((n = r == null ? void 0 : r.Lv) !== null && n !== void 0 ? n : null), this.$i().jc(r && { Hc: r.Hc, Iv: r.Iv });
  }
  dv(e) {
    this.Np !== null && (this.Kp(), this.tm(e));
  }
  qf(e) {
    this.Np !== null && this.im(this.Op, e);
  }
  jf(e) {
    this.qf(e);
  }
  av(e) {
    this.Kp(), this.nm(e), this.Gp(e.localX, e.localY, e);
  }
  cv(e) {
    this.Np !== null && (this.Kp(), this.Ap = !1, this.sm(e));
  }
  uv(e) {
    this.Np !== null && this.tm(e);
  }
  Rv(e) {
    if (this.Ap = !0, this.Ip === null) {
      const n = { x: e.localX, y: e.localY };
      this.rm(n, n, e);
    }
  }
  Pv(e) {
    this.Np !== null && (this.Kp(), this.Np.$t().jc(null), this.hm());
  }
  lm() {
    return this.Vp;
  }
  am() {
    return this.Op;
  }
  xv() {
    this.Bp = 1, this.$i().Un();
  }
  Sv(e, n) {
    if (!this.Qd.W().handleScale.pinch) return;
    const i = 5 * (n - this.Bp);
    this.Bp = n, this.$i().Qc(e.nt, i);
  }
  pv(e) {
    this.Ap = !1, this.zp = this.Ip !== null, this.Jp();
    const n = this.$i().Zc();
    this.Ip !== null && n.yt() && (this.Lp = { x: n.Yt(), y: n.Zt() }, this.Ip = { x: e.localX, y: e.localY });
  }
  hv(e) {
    if (this.Np === null) return;
    const n = e.localX, i = e.localY;
    if (this.Ip === null) this.nm(e);
    else {
      this.zp = !1;
      const s = M(this.Lp), r = s.x + (n - this.Ip.x), l = s.y + (i - this.Ip.y);
      this.Gp(r, l, e);
    }
  }
  _v(e) {
    this.$v().W().trackingMode.exitMode === 0 && (this.zp = !0), this.om(), this.sm(e);
  }
  wr(e, n) {
    const i = this.Np;
    return i === null ? null : function(s, r, l) {
      const o = s.Uo(), a = function(u, h, c) {
        var f, m;
        let w, y;
        for (const p of u) {
          const v = (m = (f = p.va) === null || f === void 0 ? void 0 : f.call(p, h, c)) !== null && m !== void 0 ? m : [];
          for (const E of v) b = E.zOrder, (!(g = w == null ? void 0 : w.zOrder) || b === "top" && g !== "top" || b === "normal" && g === "bottom") && (w = E, y = p);
        }
        var b, g;
        return w && y ? { zv: w, Hc: y } : null;
      }(o, r, l);
      if ((a == null ? void 0 : a.zv.zOrder) === "top") return pr(a);
      for (const u of o) {
        if (a && a.Hc === u && a.zv.zOrder !== "bottom" && !a.zv.isBackground) return pr(a);
        const h = Sw(u.Pn(s), r, l);
        if (h !== null) return { Hc: u, Bv: h.Bv, Iv: h.Iv };
        if (a && a.Hc === u && a.zv.zOrder !== "bottom" && a.zv.isBackground) return pr(a);
      }
      return a != null && a.zv ? pr(a) : null;
    }(i, e, n);
  }
  _m(e, n) {
    M(n === "left" ? this.Cp : this.Tp).cp(J({ width: e, height: this.Ev.height }));
  }
  um() {
    return this.Ev;
  }
  cp(e) {
    Mn(this.Ev, e) || (this.Ev = e, this.jv = !0, this.Gv.resizeCanvasElement(e), this.Jv.resizeCanvasElement(e), this.jv = !1, this.Wp.style.width = e.width + "px", this.Wp.style.height = e.height + "px");
  }
  dm() {
    const e = M(this.Np);
    e.P_(e.R_()), e.P_(e.D_());
    for (const n of e.Ba()) if (e.vr(n)) {
      const i = n.Dt();
      i !== null && e.P_(i), n.Vn();
    }
  }
  xp() {
    return this.Gv.bitmapSize;
  }
  Sp(e, n, i) {
    const s = this.xp();
    s.width > 0 && s.height > 0 && e.drawImage(this.Gv.canvasElement, n, i);
  }
  vp(e) {
    if (e === 0 || this.Np === null) return;
    if (e > 1 && this.dm(), this.Cp !== null && this.Cp.vp(e), this.Tp !== null && this.Tp.vp(e), e !== 1) {
      this.Gv.applySuggestedBitmapSize();
      const i = Ln(this.Gv);
      i !== null && (i.useBitmapCoordinateSpace((s) => {
        this.mp(s);
      }), this.Np && (this.fm(i, Ew), this.vm(i), this.pm(i), this.fm(i, mr), this.fm(i, bw)));
    }
    this.Jv.applySuggestedBitmapSize();
    const n = Ln(this.Jv);
    n !== null && (n.useBitmapCoordinateSpace(({ context: i, bitmapSize: s }) => {
      i.clearRect(0, 0, s.width, s.height);
    }), this.bm(n), this.fm(n, _w));
  }
  wm() {
    return this.Cp;
  }
  gm() {
    return this.Tp;
  }
  bp(e, n) {
    this.fm(e, n);
  }
  Fp() {
    this.Np !== null && this.Np.W_().p(this), this.Np = null;
  }
  tm(e) {
    this.im(this.Vp, e);
  }
  im(e, n) {
    const i = n.localX, s = n.localY;
    e.M() && e.m(this.$i().St().Nu(i), { x: i, y: s }, n);
  }
  mp({ context: e, bitmapSize: n }) {
    const { width: i, height: s } = n, r = this.$i(), l = r.q(), o = r.bd();
    l === o ? Pl(e, 0, 0, i, s, o) : Mm(e, 0, 0, i, s, l, o);
  }
  vm(e) {
    const n = M(this.Np).j_().qh().gt();
    n !== null && n.X(e, !1);
  }
  pm(e) {
    const n = this.$i().Yc();
    this.Mm(e, mr, Ua, n), this.Mm(e, mr, Tr, n);
  }
  bm(e) {
    this.Mm(e, mr, Tr, this.$i().Zc());
  }
  fm(e, n) {
    const i = M(this.Np).Uo();
    for (const s of i) this.Mm(e, n, Ua, s);
    for (const s of i) this.Mm(e, n, Tr, s);
  }
  Mm(e, n, i, s) {
    const r = M(this.Np), l = r.$t().Wc(), o = l !== null && l.Hc === s, a = l !== null && o && l.Iv !== void 0 ? l.Iv.Mr : void 0;
    Wa(n, (u) => i(u, e, o, a), s, r);
  }
  Zp() {
    if (this.Np === null) return;
    const e = this.Qd, n = this.Np.R_().W().visible, i = this.Np.D_().W().visible;
    n || this.Cp === null || (this.jp.removeChild(this.Cp.lp()), this.Cp.S(), this.Cp = null), i || this.Tp === null || (this.Hp.removeChild(this.Tp.lp()), this.Tp.S(), this.Tp = null);
    const s = e.$t().ud();
    n && this.Cp === null && (this.Cp = new pf(this, e.W(), s, "left"), this.jp.appendChild(this.Cp.lp())), i && this.Tp === null && (this.Tp = new pf(this, e.W(), s, "right"), this.Hp.appendChild(this.Tp.lp()));
  }
  xm(e) {
    return e.Dv && this.Ap || this.Ip !== null;
  }
  Sm(e) {
    return Math.max(0, Math.min(e, this.Ev.width - 1));
  }
  km(e) {
    return Math.max(0, Math.min(e, this.Ev.height - 1));
  }
  Gp(e, n, i) {
    this.$i().ld(this.Sm(e), this.km(n), i, M(this.Np));
  }
  hm() {
    this.$i().od();
  }
  om() {
    this.zp && (this.Ip = null, this.hm());
  }
  rm(e, n, i) {
    this.Ip = e, this.zp = !1, this.Gp(n.x, n.y, i);
    const s = this.$i().Zc();
    this.Lp = { x: s.Yt(), y: s.Zt() };
  }
  $i() {
    return this.Qd.$t();
  }
  sm(e) {
    if (!this.Dp) return;
    const n = this.$i(), i = this.fp();
    if (n.z_(i, i.vn()), this.Rp = null, this.Dp = !1, n.ed(), this.Ep !== null) {
      const s = performance.now(), r = n.St();
      this.Ep.Vr(r.Hu(), s), this.Ep.Qu(s) || n.Zn(this.Ep);
    }
  }
  Kp() {
    this.Ip = null;
  }
  Jp() {
    if (this.Np) {
      if (this.$i().Un(), document.activeElement !== document.body && document.activeElement !== document.documentElement) M(document.activeElement).blur();
      else {
        const e = document.getSelection();
        e !== null && e.removeAllRanges();
      }
      !this.Np.vn().Ni() && this.$i().St().Ni();
    }
  }
  nm(e) {
    if (this.Np === null) return;
    const n = this.$i(), i = n.St();
    if (i.Ni()) return;
    const s = this.Qd.W(), r = s.handleScroll, l = s.kineticScroll;
    if ((!r.pressedMouseMove || e.Dv) && (!r.horzTouchDrag && !r.vertTouchDrag || !e.Dv)) return;
    const o = this.Np.vn(), a = performance.now();
    if (this.Rp !== null || this.xm(e) || (this.Rp = { x: e.clientX, y: e.clientY, Od: a, ym: e.localX, Cm: e.localY }), this.Rp !== null && !this.Dp && (this.Rp.x !== e.clientX || this.Rp.y !== e.clientY)) {
      if (e.Dv && l.touch || !e.Dv && l.mouse) {
        const u = i.le();
        this.Ep = new gw(0.2 / u, 7 / u, 0.997, 15 / u), this.Ep.Yd(i.Hu(), this.Rp.Od);
      } else this.Ep = null;
      o.Ni() || n.A_(this.Np, o, e.localY), n.nd(e.localX), this.Dp = !0;
    }
    this.Dp && (o.Ni() || n.I_(this.Np, o, e.localY), n.sd(e.localX), this.Ep !== null && this.Ep.Yd(i.Hu(), a));
  }
}
class mf {
  constructor(e, n, i, s, r) {
    this.ft = !0, this.Ev = J({ width: 0, height: 0 }), this.Hv = () => this.vp(3), this.qv = e === "left", this.Oc = i.ud, this.cn = n, this.Tm = s, this.Pm = r, this.Kv = document.createElement("div"), this.Kv.style.width = "25px", this.Kv.style.height = "100%", this.Kv.style.overflow = "hidden", this.Gv = $n(this.Kv, J({ width: 16, height: 16 })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);
  }
  S() {
    this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv), An(this.Gv.canvasElement), this.Gv.dispose();
  }
  lp() {
    return this.Kv;
  }
  um() {
    return this.Ev;
  }
  cp(e) {
    Mn(this.Ev, e) || (this.Ev = e, this.Gv.resizeCanvasElement(e), this.Kv.style.width = `${e.width}px`, this.Kv.style.height = `${e.height}px`, this.ft = !0);
  }
  vp(e) {
    if (e < 3 && !this.ft || this.Ev.width === 0 || this.Ev.height === 0) return;
    this.ft = !1, this.Gv.applySuggestedBitmapSize();
    const n = Ln(this.Gv);
    n !== null && n.useBitmapCoordinateSpace((i) => {
      this.mp(i), this.Ie(i);
    });
  }
  xp() {
    return this.Gv.bitmapSize;
  }
  Sp(e, n, i) {
    const s = this.xp();
    s.width > 0 && s.height > 0 && e.drawImage(this.Gv.canvasElement, n, i);
  }
  Ie({ context: e, bitmapSize: n, horizontalPixelRatio: i, verticalPixelRatio: s }) {
    if (!this.Tm()) return;
    e.fillStyle = this.cn.timeScale.borderColor;
    const r = Math.floor(this.Oc.W().C * i), l = Math.floor(this.Oc.W().C * s), o = this.qv ? n.width - r : 0;
    e.fillRect(o, 0, r, l);
  }
  mp({ context: e, bitmapSize: n }) {
    Pl(e, 0, 0, n.width, n.height, this.Pm());
  }
}
function lh(t) {
  return (e) => {
    var n, i;
    return (i = (n = e.fa) === null || n === void 0 ? void 0 : n.call(e, t)) !== null && i !== void 0 ? i : [];
  };
}
const kw = lh("normal"), xw = lh("top"), Cw = lh("bottom");
class Mw {
  constructor(e, n) {
    this.Rm = null, this.Dm = null, this.k = null, this.Vm = !1, this.Ev = J({ width: 0, height: 0 }), this.Om = new le(), this.Fv = new zs(5), this.jv = !1, this.Hv = () => {
      this.jv || this.Qd.$t().Uh();
    }, this.Uv = () => {
      this.jv || this.Qd.$t().Uh();
    }, this.Qd = e, this.q_ = n, this.cn = e.W().layout, this.Xd = document.createElement("tr"), this.Bm = document.createElement("td"), this.Bm.style.padding = "0", this.Am = document.createElement("td"), this.Am.style.padding = "0", this.Kv = document.createElement("td"), this.Kv.style.height = "25px", this.Kv.style.padding = "0", this.Im = document.createElement("div"), this.Im.style.width = "100%", this.Im.style.height = "100%", this.Im.style.position = "relative", this.Im.style.overflow = "hidden", this.Kv.appendChild(this.Im), this.Gv = $n(this.Im, J({ width: 16, height: 16 })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.Hv);
    const i = this.Gv.canvasElement;
    i.style.position = "absolute", i.style.zIndex = "1", i.style.left = "0", i.style.top = "0", this.Jv = $n(this.Im, J({ width: 16, height: 16 })), this.Jv.subscribeSuggestedBitmapSizeChanged(this.Uv);
    const s = this.Jv.canvasElement;
    s.style.position = "absolute", s.style.zIndex = "2", s.style.left = "0", s.style.top = "0", this.Xd.appendChild(this.Bm), this.Xd.appendChild(this.Kv), this.Xd.appendChild(this.Am), this.zm(), this.Qd.$t().g_().l(this.zm.bind(this), this), this.hp = new sh(this.Jv.canvasElement, this, { ev: () => !0, rv: () => !this.Qd.W().handleScroll.horzTouchDrag });
  }
  S() {
    this.hp.S(), this.Rm !== null && this.Rm.S(), this.Dm !== null && this.Dm.S(), this.Jv.unsubscribeSuggestedBitmapSizeChanged(this.Uv), An(this.Jv.canvasElement), this.Jv.dispose(), this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.Hv), An(this.Gv.canvasElement), this.Gv.dispose();
  }
  lp() {
    return this.Xd;
  }
  Lm() {
    return this.Rm;
  }
  Em() {
    return this.Dm;
  }
  bv(e) {
    if (this.Vm) return;
    this.Vm = !0;
    const n = this.Qd.$t();
    !n.St().Ni() && this.Qd.W().handleScale.axisPressedMouseMove.time && n.Jc(e.localX);
  }
  pv(e) {
    this.bv(e);
  }
  wv() {
    const e = this.Qd.$t();
    !e.St().Ni() && this.Vm && (this.Vm = !1, this.Qd.W().handleScale.axisPressedMouseMove.time && e.hd());
  }
  av(e) {
    const n = this.Qd.$t();
    !n.St().Ni() && this.Qd.W().handleScale.axisPressedMouseMove.time && n.rd(e.localX);
  }
  hv(e) {
    this.av(e);
  }
  cv() {
    this.Vm = !1;
    const e = this.Qd.$t();
    e.St().Ni() && !this.Qd.W().handleScale.axisPressedMouseMove.time || e.hd();
  }
  _v() {
    this.cv();
  }
  qf() {
    this.Qd.W().handleScale.axisDoubleClickReset.time && this.Qd.$t().Kn();
  }
  jf() {
    this.qf();
  }
  Qf() {
    this.Qd.$t().W().handleScale.axisPressedMouseMove.time && this.kp(1);
  }
  Pv() {
    this.kp(0);
  }
  um() {
    return this.Ev;
  }
  Nm() {
    return this.Om;
  }
  Fm(e, n, i) {
    Mn(this.Ev, e) || (this.Ev = e, this.jv = !0, this.Gv.resizeCanvasElement(e), this.Jv.resizeCanvasElement(e), this.jv = !1, this.Kv.style.width = `${e.width}px`, this.Kv.style.height = `${e.height}px`, this.Om.m(e)), this.Rm !== null && this.Rm.cp(J({ width: n, height: e.height })), this.Dm !== null && this.Dm.cp(J({ width: i, height: e.height }));
  }
  Wm() {
    const e = this.jm();
    return Math.ceil(e.C + e.T + e.P + e.L + e.B + e.Hm);
  }
  bt() {
    this.Qd.$t().St().Ha();
  }
  xp() {
    return this.Gv.bitmapSize;
  }
  Sp(e, n, i) {
    const s = this.xp();
    s.width > 0 && s.height > 0 && e.drawImage(this.Gv.canvasElement, n, i);
  }
  vp(e) {
    if (e === 0) return;
    if (e !== 1) {
      this.Gv.applySuggestedBitmapSize();
      const i = Ln(this.Gv);
      i !== null && (i.useBitmapCoordinateSpace((s) => {
        this.mp(s), this.Ie(s), this.$m(i, Cw);
      }), this.wp(i), this.$m(i, kw)), this.Rm !== null && this.Rm.vp(e), this.Dm !== null && this.Dm.vp(e);
    }
    this.Jv.applySuggestedBitmapSize();
    const n = Ln(this.Jv);
    n !== null && (n.useBitmapCoordinateSpace(({ context: i, bitmapSize: s }) => {
      i.clearRect(0, 0, s.width, s.height);
    }), this.Um([...this.Qd.$t().wt(), this.Qd.$t().Zc()], n), this.$m(n, xw));
  }
  $m(e, n) {
    const i = this.Qd.$t().wt();
    for (const s of i) Wa(n, (r) => Ua(r, e, !1, void 0), s, void 0);
    for (const s of i) Wa(n, (r) => Tr(r, e, !1, void 0), s, void 0);
  }
  mp({ context: e, bitmapSize: n }) {
    Pl(e, 0, 0, n.width, n.height, this.Qd.$t().bd());
  }
  Ie({ context: e, bitmapSize: n, verticalPixelRatio: i }) {
    if (this.Qd.W().timeScale.borderVisible) {
      e.fillStyle = this.qm();
      const s = Math.max(1, Math.floor(this.jm().C * i));
      e.fillRect(0, 0, n.width, s);
    }
  }
  wp(e) {
    const n = this.Qd.$t().St(), i = n.Ha();
    if (!i || i.length === 0) return;
    const s = this.q_.maxTickMarkWeight(i), r = this.jm(), l = n.W();
    l.borderVisible && l.ticksVisible && e.useBitmapCoordinateSpace(({ context: o, horizontalPixelRatio: a, verticalPixelRatio: u }) => {
      o.strokeStyle = this.qm(), o.fillStyle = this.qm();
      const h = Math.max(1, Math.floor(a)), c = Math.floor(0.5 * a);
      o.beginPath();
      const f = Math.round(r.T * u);
      for (let m = i.length; m--; ) {
        const w = Math.round(i[m].coord * a);
        o.rect(w - c, 0, h, f);
      }
      o.fill();
    }), e.useMediaCoordinateSpace(({ context: o }) => {
      const a = r.C + r.T + r.L + r.P / 2;
      o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = this.$(), o.font = this._p();
      for (const u of i) if (u.weight < s) {
        const h = u.needAlignCoordinate ? this.Ym(o, u.coord, u.label) : u.coord;
        o.fillText(u.label, h, a);
      }
      this.Qd.W().timeScale.allowBoldLabels && (o.font = this.Zm());
      for (const u of i) if (u.weight >= s) {
        const h = u.needAlignCoordinate ? this.Ym(o, u.coord, u.label) : u.coord;
        o.fillText(u.label, h, a);
      }
    });
  }
  Ym(e, n, i) {
    const s = this.Fv.xi(e, i), r = s / 2, l = Math.floor(n - r) + 0.5;
    return l < 0 ? n += Math.abs(0 - l) : l + s > this.Ev.width && (n -= Math.abs(this.Ev.width - (l + s))), n;
  }
  Um(e, n) {
    const i = this.jm();
    for (const s of e) for (const r of s.Qi()) r.gt().X(n, i);
  }
  qm() {
    return this.Qd.W().timeScale.borderColor;
  }
  $() {
    return this.cn.textColor;
  }
  j() {
    return this.cn.fontSize;
  }
  _p() {
    return _i(this.j(), this.cn.fontFamily);
  }
  Zm() {
    return _i(this.j(), this.cn.fontFamily, "bold");
  }
  jm() {
    this.k === null && (this.k = { C: 1, N: NaN, L: NaN, B: NaN, ji: NaN, T: 5, P: NaN, R: "", Wi: new zs(), Hm: 0 });
    const e = this.k, n = this._p();
    if (e.R !== n) {
      const i = this.j();
      e.P = i, e.R = n, e.L = 3 * i / 12, e.B = 3 * i / 12, e.ji = 9 * i / 12, e.N = 0, e.Hm = 4 * i / 12, e.Wi.nr();
    }
    return this.k;
  }
  kp(e) {
    this.Kv.style.cursor = e === 1 ? "ew-resize" : "default";
  }
  zm() {
    const e = this.Qd.$t(), n = e.W();
    n.leftPriceScale.visible || this.Rm === null || (this.Bm.removeChild(this.Rm.lp()), this.Rm.S(), this.Rm = null), n.rightPriceScale.visible || this.Dm === null || (this.Am.removeChild(this.Dm.lp()), this.Dm.S(), this.Dm = null);
    const i = { ud: this.Qd.$t().ud() }, s = () => n.leftPriceScale.borderVisible && e.St().W().borderVisible, r = () => e.bd();
    n.leftPriceScale.visible && this.Rm === null && (this.Rm = new mf("left", n, i, s, r), this.Bm.appendChild(this.Rm.lp())), n.rightPriceScale.visible && this.Dm === null && (this.Dm = new mf("right", n, i, s, r), this.Am.appendChild(this.Dm.lp()));
  }
}
const zw = !!ki && !!navigator.userAgentData && navigator.userAgentData.brands.some((t) => t.brand.includes("Chromium")) && !!ki && (!((Oo = navigator == null ? void 0 : navigator.userAgentData) === null || Oo === void 0) && Oo.platform ? navigator.userAgentData.platform === "Windows" : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
var Oo;
class Nw {
  constructor(e, n, i) {
    var s;
    this.Xm = [], this.Km = 0, this.ho = 0, this.__ = 0, this.Gm = 0, this.Jm = 0, this.Qm = null, this.tb = !1, this.Vp = new le(), this.Op = new le(), this.Rc = new le(), this.ib = null, this.nb = null, this.Jd = e, this.cn = n, this.q_ = i, this.Xd = document.createElement("div"), this.Xd.classList.add("tv-lightweight-charts"), this.Xd.style.overflow = "hidden", this.Xd.style.direction = "ltr", this.Xd.style.width = "100%", this.Xd.style.height = "100%", (s = this.Xd).style.userSelect = "none", s.style.webkitUserSelect = "none", s.style.msUserSelect = "none", s.style.MozUserSelect = "none", s.style.webkitTapHighlightColor = "transparent", this.sb = document.createElement("table"), this.sb.setAttribute("cellspacing", "0"), this.Xd.appendChild(this.sb), this.eb = this.rb.bind(this), To(this.cn) && this.hb(!0), this.$i = new fw(this.Vc.bind(this), this.cn, i), this.$t().Xc().l(this.lb.bind(this), this), this.ab = new Mw(this, this.q_), this.sb.appendChild(this.ab.lp());
    const r = n.autoSize && this.ob();
    let l = this.cn.width, o = this.cn.height;
    if (r || l === 0 || o === 0) {
      const a = e.getBoundingClientRect();
      l = l || a.width, o = o || a.height;
    }
    this._b(l, o), this.ub(), e.appendChild(this.Xd), this.cb(), this.$i.St().ec().l(this.$i.Kl.bind(this.$i), this), this.$i.g_().l(this.$i.Kl.bind(this.$i), this);
  }
  $t() {
    return this.$i;
  }
  W() {
    return this.cn;
  }
  Yp() {
    return this.Xm;
  }
  fb() {
    return this.ab;
  }
  S() {
    this.hb(!1), this.Km !== 0 && window.cancelAnimationFrame(this.Km), this.$i.Xc().p(this), this.$i.St().ec().p(this), this.$i.g_().p(this), this.$i.S();
    for (const e of this.Xm) this.sb.removeChild(e.lp()), e.lm().p(this), e.am().p(this), e.S();
    this.Xm = [], M(this.ab).S(), this.Xd.parentElement !== null && this.Xd.parentElement.removeChild(this.Xd), this.Rc.S(), this.Vp.S(), this.Op.S(), this.pb();
  }
  _b(e, n, i = !1) {
    if (this.ho === n && this.__ === e) return;
    const s = function(o) {
      const a = Math.floor(o.width), u = Math.floor(o.height);
      return J({ width: a - a % 2, height: u - u % 2 });
    }(J({ width: e, height: n }));
    this.ho = s.height, this.__ = s.width;
    const r = this.ho + "px", l = this.__ + "px";
    M(this.Xd).style.height = r, M(this.Xd).style.width = l, this.sb.style.height = r, this.sb.style.width = l, i ? this.mb(ye.es(), performance.now()) : this.$i.Kl();
  }
  vp(e) {
    e === void 0 && (e = ye.es());
    for (let n = 0; n < this.Xm.length; n++) this.Xm[n].vp(e.Hn(n).Fn);
    this.cn.timeScale.visible && this.ab.vp(e.jn());
  }
  $h(e) {
    const n = To(this.cn);
    this.$i.$h(e);
    const i = To(this.cn);
    i !== n && this.hb(i), this.cb(), this.bb(e);
  }
  lm() {
    return this.Vp;
  }
  am() {
    return this.Op;
  }
  Xc() {
    return this.Rc;
  }
  wb() {
    this.Qm !== null && (this.mb(this.Qm, performance.now()), this.Qm = null);
    const e = this.gb(null), n = document.createElement("canvas");
    n.width = e.width, n.height = e.height;
    const i = M(n.getContext("2d"));
    return this.gb(i), n;
  }
  Mb(e) {
    return e === "left" && !this.xb() || e === "right" && !this.Sb() || this.Xm.length === 0 ? 0 : M(e === "left" ? this.Xm[0].wm() : this.Xm[0].gm()).dp();
  }
  kb() {
    return this.cn.autoSize && this.ib !== null;
  }
  yb() {
    return this.Xd;
  }
  Qp(e) {
    this.nb = e, this.nb ? this.yb().style.setProperty("cursor", e) : this.yb().style.removeProperty("cursor");
  }
  Cb() {
    return this.nb;
  }
  Tb() {
    return Re(this.Xm[0]).um();
  }
  bb(e) {
    (e.autoSize !== void 0 || !this.ib || e.width === void 0 && e.height === void 0) && (e.autoSize && !this.ib && this.ob(), e.autoSize === !1 && this.ib !== null && this.pb(), e.autoSize || e.width === void 0 && e.height === void 0 || this._b(e.width || this.__, e.height || this.ho));
  }
  gb(e) {
    let n = 0, i = 0;
    const s = this.Xm[0], r = (o, a) => {
      let u = 0;
      for (let h = 0; h < this.Xm.length; h++) {
        const c = this.Xm[h], f = M(o === "left" ? c.wm() : c.gm()), m = f.xp();
        e !== null && f.Sp(e, a, u), u += m.height;
      }
    };
    this.xb() && (r("left", 0), n += M(s.wm()).xp().width);
    for (let o = 0; o < this.Xm.length; o++) {
      const a = this.Xm[o], u = a.xp();
      e !== null && a.Sp(e, n, i), i += u.height;
    }
    n += s.xp().width, this.Sb() && (r("right", n), n += M(s.gm()).xp().width);
    const l = (o, a, u) => {
      M(o === "left" ? this.ab.Lm() : this.ab.Em()).Sp(M(e), a, u);
    };
    if (this.cn.timeScale.visible) {
      const o = this.ab.xp();
      if (e !== null) {
        let a = 0;
        this.xb() && (l("left", a, i), a = M(s.wm()).xp().width), this.ab.Sp(e, a, i), a += o.width, this.Sb() && l("right", a, i);
      }
      i += o.height;
    }
    return J({ width: n, height: i });
  }
  Pb() {
    let e = 0, n = 0, i = 0;
    for (const w of this.Xm) this.xb() && (n = Math.max(n, M(w.wm()).op(), this.cn.leftPriceScale.minimumWidth)), this.Sb() && (i = Math.max(i, M(w.gm()).op(), this.cn.rightPriceScale.minimumWidth)), e += w.M_();
    n = ja(n), i = ja(i);
    const s = this.__, r = this.ho, l = Math.max(s - n - i, 0), o = this.cn.timeScale.visible;
    let a = o ? Math.max(this.ab.Wm(), this.cn.timeScale.minimumHeight) : 0;
    var u;
    a = (u = a) + u % 2;
    const h = 0 + a, c = r < h ? 0 : r - h, f = c / e;
    let m = 0;
    for (let w = 0; w < this.Xm.length; ++w) {
      const y = this.Xm[w];
      y.qp(this.$i.qc()[w]);
      let b = 0, g = 0;
      g = w === this.Xm.length - 1 ? c - m : Math.round(y.M_() * f), b = Math.max(g, 2), m += b, y.cp(J({ width: l, height: b })), this.xb() && y._m(n, "left"), this.Sb() && y._m(i, "right"), y.fp() && this.$i.Kc(y.fp(), b);
    }
    this.ab.Fm(J({ width: o ? l : 0, height: a }), o ? n : 0, o ? i : 0), this.$i.S_(l), this.Gm !== n && (this.Gm = n), this.Jm !== i && (this.Jm = i);
  }
  hb(e) {
    e ? this.Xd.addEventListener("wheel", this.eb, { passive: !1 }) : this.Xd.removeEventListener("wheel", this.eb);
  }
  Rb(e) {
    switch (e.deltaMode) {
      case e.DOM_DELTA_PAGE:
        return 120;
      case e.DOM_DELTA_LINE:
        return 32;
    }
    return zw ? 1 / window.devicePixelRatio : 1;
  }
  rb(e) {
    if (!(e.deltaX !== 0 && this.cn.handleScroll.mouseWheel || e.deltaY !== 0 && this.cn.handleScale.mouseWheel)) return;
    const n = this.Rb(e), i = n * e.deltaX / 100, s = -n * e.deltaY / 100;
    if (e.cancelable && e.preventDefault(), s !== 0 && this.cn.handleScale.mouseWheel) {
      const r = Math.sign(s) * Math.min(1, Math.abs(s)), l = e.clientX - this.Xd.getBoundingClientRect().left;
      this.$t().Qc(l, r);
    }
    i !== 0 && this.cn.handleScroll.mouseWheel && this.$t().td(-80 * i);
  }
  mb(e, n) {
    var i;
    const s = e.jn();
    s === 3 && this.Db(), s !== 3 && s !== 2 || (this.Vb(e), this.Ob(e, n), this.ab.bt(), this.Xm.forEach((r) => {
      r.Xp();
    }), ((i = this.Qm) === null || i === void 0 ? void 0 : i.jn()) === 3 && (this.Qm.ts(e), this.Db(), this.Vb(this.Qm), this.Ob(this.Qm, n), e = this.Qm, this.Qm = null)), this.vp(e);
  }
  Ob(e, n) {
    for (const i of e.Qn()) this.ns(i, n);
  }
  Vb(e) {
    const n = this.$i.qc();
    for (let i = 0; i < n.length; i++) e.Hn(i).Wn && n[i].N_();
  }
  ns(e, n) {
    const i = this.$i.St();
    switch (e.qn) {
      case 0:
        i.hc();
        break;
      case 1:
        i.lc(e.Vt);
        break;
      case 2:
        i.Gn(e.Vt);
        break;
      case 3:
        i.Jn(e.Vt);
        break;
      case 4:
        i.qu();
        break;
      case 5:
        e.Vt.Qu(n) || i.Jn(e.Vt.tc(n));
    }
  }
  Vc(e) {
    this.Qm !== null ? this.Qm.ts(e) : this.Qm = e, this.tb || (this.tb = !0, this.Km = window.requestAnimationFrame((n) => {
      if (this.tb = !1, this.Km = 0, this.Qm !== null) {
        const i = this.Qm;
        this.Qm = null, this.mb(i, n);
        for (const s of i.Qn()) if (s.qn === 5 && !s.Vt.Qu(n)) {
          this.$t().Zn(s.Vt);
          break;
        }
      }
    }));
  }
  Db() {
    this.ub();
  }
  ub() {
    const e = this.$i.qc(), n = e.length, i = this.Xm.length;
    for (let s = n; s < i; s++) {
      const r = Re(this.Xm.pop());
      this.sb.removeChild(r.lp()), r.lm().p(this), r.am().p(this), r.S();
    }
    for (let s = i; s < n; s++) {
      const r = new rh(this, e[s]);
      r.lm().l(this.Bb.bind(this), this), r.am().l(this.Ab.bind(this), this), this.Xm.push(r), this.sb.insertBefore(r.lp(), this.ab.lp());
    }
    for (let s = 0; s < n; s++) {
      const r = e[s], l = this.Xm[s];
      l.fp() !== r ? l.qp(r) : l.Up();
    }
    this.cb(), this.Pb();
  }
  Ib(e, n, i) {
    var s;
    const r = /* @__PURE__ */ new Map();
    e !== null && this.$i.wt().forEach((h) => {
      const c = h.In().ll(e);
      c !== null && r.set(h, c);
    });
    let l;
    if (e !== null) {
      const h = (s = this.$i.St().Ui(e)) === null || s === void 0 ? void 0 : s.originalTime;
      h !== void 0 && (l = h);
    }
    const o = this.$t().Wc(), a = o !== null && o.Hc instanceof nh ? o.Hc : void 0, u = o !== null && o.Iv !== void 0 ? o.Iv.gr : void 0;
    return { zb: l, ee: e ?? void 0, Lb: n ?? void 0, Eb: a, Nb: r, Fb: u, Wb: i ?? void 0 };
  }
  Bb(e, n, i) {
    this.Vp.m(() => this.Ib(e, n, i));
  }
  Ab(e, n, i) {
    this.Op.m(() => this.Ib(e, n, i));
  }
  lb(e, n, i) {
    this.Rc.m(() => this.Ib(e, n, i));
  }
  cb() {
    const e = this.cn.timeScale.visible ? "" : "none";
    this.ab.lp().style.display = e;
  }
  xb() {
    return this.Xm[0].fp().R_().W().visible;
  }
  Sb() {
    return this.Xm[0].fp().D_().W().visible;
  }
  ob() {
    return "ResizeObserver" in window && (this.ib = new ResizeObserver((e) => {
      const n = e.find((i) => i.target === this.Jd);
      n && this._b(n.contentRect.width, n.contentRect.height);
    }), this.ib.observe(this.Jd, { box: "border-box" }), !0);
  }
  pb() {
    this.ib !== null && this.ib.disconnect(), this.ib = null;
  }
}
function To(t) {
  return !!(t.handleScroll.mouseWheel || t.handleScale.mouseWheel);
}
function Rw(t) {
  return function(e) {
    return e.open !== void 0;
  }(t) || function(e) {
    return e.value !== void 0;
  }(t);
}
function Km(t, e) {
  var n = {};
  for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var s = 0;
    for (i = Object.getOwnPropertySymbols(t); s < i.length; s++) e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[s]) && (n[i[s]] = t[i[s]]);
  }
  return n;
}
function vf(t, e, n, i) {
  const s = n.value, r = { ee: e, ot: t, Vt: [s, s, s, s], zb: i };
  return n.color !== void 0 && (r.V = n.color), r;
}
function Pw(t, e, n, i) {
  const s = n.value, r = { ee: e, ot: t, Vt: [s, s, s, s], zb: i };
  return n.lineColor !== void 0 && (r.lt = n.lineColor), n.topColor !== void 0 && (r.Ps = n.topColor), n.bottomColor !== void 0 && (r.Rs = n.bottomColor), r;
}
function Ow(t, e, n, i) {
  const s = n.value, r = { ee: e, ot: t, Vt: [s, s, s, s], zb: i };
  return n.topLineColor !== void 0 && (r.Re = n.topLineColor), n.bottomLineColor !== void 0 && (r.De = n.bottomLineColor), n.topFillColor1 !== void 0 && (r.ke = n.topFillColor1), n.topFillColor2 !== void 0 && (r.ye = n.topFillColor2), n.bottomFillColor1 !== void 0 && (r.Ce = n.bottomFillColor1), n.bottomFillColor2 !== void 0 && (r.Te = n.bottomFillColor2), r;
}
function Tw(t, e, n, i) {
  const s = { ee: e, ot: t, Vt: [n.open, n.high, n.low, n.close], zb: i };
  return n.color !== void 0 && (s.V = n.color), s;
}
function Lw(t, e, n, i) {
  const s = { ee: e, ot: t, Vt: [n.open, n.high, n.low, n.close], zb: i };
  return n.color !== void 0 && (s.V = n.color), n.borderColor !== void 0 && (s.Ot = n.borderColor), n.wickColor !== void 0 && (s.Xh = n.wickColor), s;
}
function Dw(t, e, n, i, s) {
  const r = Re(s)(n), l = Math.max(...r), o = Math.min(...r), a = r[r.length - 1], u = [a, l, o, a], h = n, { time: c, color: f } = h;
  return { ee: e, ot: t, Vt: u, zb: i, $e: Km(h, ["time", "color"]), V: f };
}
function vr(t) {
  return t.Vt !== void 0;
}
function gf(t, e) {
  return e.customValues !== void 0 && (t.jb = e.customValues), t;
}
function yn(t) {
  return (e, n, i, s, r, l) => function(o, a) {
    return a ? a(o) : (u = o).open === void 0 && u.value === void 0;
    var u;
  }(i, l) ? gf({ ot: e, ee: n, zb: s }, i) : gf(t(e, n, i, s, r), i);
}
function yf(t) {
  return { Candlestick: yn(Lw), Bar: yn(Tw), Area: yn(Pw), Baseline: yn(Ow), Histogram: yn(vf), Line: yn(vf), Custom: yn(Dw) }[t];
}
function wf(t) {
  return { ee: 0, Hb: /* @__PURE__ */ new Map(), la: t };
}
function Sf(t, e) {
  if (t !== void 0 && t.length !== 0) return { $b: e.key(t[0].ot), Ub: e.key(t[t.length - 1].ot) };
}
function Ef(t) {
  let e;
  return t.forEach((n) => {
    e === void 0 && (e = n.zb);
  }), Re(e);
}
class $w {
  constructor(e) {
    this.qb = /* @__PURE__ */ new Map(), this.Yb = /* @__PURE__ */ new Map(), this.Zb = /* @__PURE__ */ new Map(), this.Xb = [], this.q_ = e;
  }
  S() {
    this.qb.clear(), this.Yb.clear(), this.Zb.clear(), this.Xb = [];
  }
  Kb(e, n) {
    let i = this.qb.size !== 0, s = !1;
    const r = this.Yb.get(e);
    if (r !== void 0) if (this.Yb.size === 1) i = !1, s = !0, this.qb.clear();
    else for (const a of this.Xb) a.pointData.Hb.delete(e) && (s = !0);
    let l = [];
    if (n.length !== 0) {
      const a = n.map((m) => m.time), u = this.q_.createConverterToInternalObj(n), h = yf(e.Qh()), c = e.Ca(), f = e.Ta();
      l = n.map((m, w) => {
        const y = u(m.time), b = this.q_.key(y);
        let g = this.qb.get(b);
        g === void 0 && (g = wf(y), this.qb.set(b, g), s = !0);
        const p = h(y, g.ee, m, a[w], c, f);
        return g.Hb.set(e, p), p;
      });
    }
    i && this.Gb(), this.Jb(e, l);
    let o = -1;
    if (s) {
      const a = [];
      this.qb.forEach((u) => {
        a.push({ timeWeight: 0, time: u.la, pointData: u, originalTime: Ef(u.Hb) });
      }), a.sort((u, h) => this.q_.key(u.time) - this.q_.key(h.time)), o = this.Qb(a);
    }
    return this.tw(e, o, function(a, u, h) {
      const c = Sf(a, h), f = Sf(u, h);
      if (c !== void 0 && f !== void 0) return { ta: c.Ub >= f.Ub && c.$b >= f.$b };
    }(this.Yb.get(e), r, this.q_));
  }
  vd(e) {
    return this.Kb(e, []);
  }
  iw(e, n) {
    const i = n;
    (function(y) {
      y.zb === void 0 && (y.zb = y.time);
    })(i), this.q_.preprocessData(n);
    const s = this.q_.createConverterToInternalObj([n])(n.time), r = this.Zb.get(e);
    if (r !== void 0 && this.q_.key(s) < this.q_.key(r)) throw new Error(`Cannot update oldest data, last time=${r}, new time=${s}`);
    let l = this.qb.get(this.q_.key(s));
    const o = l === void 0;
    l === void 0 && (l = wf(s), this.qb.set(this.q_.key(s), l));
    const a = yf(e.Qh()), u = e.Ca(), h = e.Ta(), c = a(s, l.ee, n, i.zb, u, h);
    l.Hb.set(e, c), this.nw(e, c);
    const f = { ta: vr(c) };
    if (!o) return this.tw(e, -1, f);
    const m = { timeWeight: 0, time: l.la, pointData: l, originalTime: Ef(l.Hb) }, w = $s(this.Xb, this.q_.key(m.time), (y, b) => this.q_.key(y.time) < b);
    this.Xb.splice(w, 0, m);
    for (let y = w; y < this.Xb.length; ++y) Lo(this.Xb[y].pointData, y);
    return this.q_.fillWeightsForPoints(this.Xb, w), this.tw(e, w, f);
  }
  nw(e, n) {
    let i = this.Yb.get(e);
    i === void 0 && (i = [], this.Yb.set(e, i));
    const s = i.length !== 0 ? i[i.length - 1] : null;
    s === null || this.q_.key(n.ot) > this.q_.key(s.ot) ? vr(n) && i.push(n) : vr(n) ? i[i.length - 1] = n : i.splice(-1, 1), this.Zb.set(e, n.ot);
  }
  Jb(e, n) {
    n.length !== 0 ? (this.Yb.set(e, n.filter(vr)), this.Zb.set(e, n[n.length - 1].ot)) : (this.Yb.delete(e), this.Zb.delete(e));
  }
  Gb() {
    for (const e of this.Xb) e.pointData.Hb.size === 0 && this.qb.delete(this.q_.key(e.time));
  }
  Qb(e) {
    let n = -1;
    for (let i = 0; i < this.Xb.length && i < e.length; ++i) {
      const s = this.Xb[i], r = e[i];
      if (this.q_.key(s.time) !== this.q_.key(r.time)) {
        n = i;
        break;
      }
      r.timeWeight = s.timeWeight, Lo(r.pointData, i);
    }
    if (n === -1 && this.Xb.length !== e.length && (n = Math.min(this.Xb.length, e.length)), n === -1) return -1;
    for (let i = n; i < e.length; ++i) Lo(e[i].pointData, i);
    return this.q_.fillWeightsForPoints(e, n), this.Xb = e, n;
  }
  sw() {
    if (this.Yb.size === 0) return null;
    let e = 0;
    return this.Yb.forEach((n) => {
      n.length !== 0 && (e = Math.max(e, n[n.length - 1].ee));
    }), e;
  }
  tw(e, n, i) {
    const s = { ew: /* @__PURE__ */ new Map(), St: { Eu: this.sw() } };
    if (n !== -1) this.Yb.forEach((r, l) => {
      s.ew.set(l, { $e: r, rw: l === e ? i : void 0 });
    }), this.Yb.has(e) || s.ew.set(e, { $e: [], rw: i }), s.St.hw = this.Xb, s.St.lw = n;
    else {
      const r = this.Yb.get(e);
      s.ew.set(e, { $e: r || [], rw: i });
    }
    return s;
  }
}
function Lo(t, e) {
  t.ee = e, t.Hb.forEach((n) => {
    n.ee = e;
  });
}
function oh(t) {
  const e = { value: t.Vt[3], time: t.zb };
  return t.jb !== void 0 && (e.customValues = t.jb), e;
}
function bf(t) {
  const e = oh(t);
  return t.V !== void 0 && (e.color = t.V), e;
}
function Aw(t) {
  const e = oh(t);
  return t.lt !== void 0 && (e.lineColor = t.lt), t.Ps !== void 0 && (e.topColor = t.Ps), t.Rs !== void 0 && (e.bottomColor = t.Rs), e;
}
function Fw(t) {
  const e = oh(t);
  return t.Re !== void 0 && (e.topLineColor = t.Re), t.De !== void 0 && (e.bottomLineColor = t.De), t.ke !== void 0 && (e.topFillColor1 = t.ke), t.ye !== void 0 && (e.topFillColor2 = t.ye), t.Ce !== void 0 && (e.bottomFillColor1 = t.Ce), t.Te !== void 0 && (e.bottomFillColor2 = t.Te), e;
}
function Xm(t) {
  const e = { open: t.Vt[0], high: t.Vt[1], low: t.Vt[2], close: t.Vt[3], time: t.zb };
  return t.jb !== void 0 && (e.customValues = t.jb), e;
}
function Bw(t) {
  const e = Xm(t);
  return t.V !== void 0 && (e.color = t.V), e;
}
function Vw(t) {
  const e = Xm(t), { V: n, Ot: i, Xh: s } = t;
  return n !== void 0 && (e.color = n), i !== void 0 && (e.borderColor = i), s !== void 0 && (e.wickColor = s), e;
}
function Ha(t) {
  return { Area: Aw, Line: bf, Baseline: Fw, Histogram: bf, Bar: Bw, Candlestick: Vw, Custom: Iw }[t];
}
function Iw(t) {
  const e = t.zb;
  return Object.assign(Object.assign({}, t.$e), { time: e });
}
const jw = { vertLine: { color: "#9598A1", width: 1, style: 3, visible: !0, labelVisible: !0, labelBackgroundColor: "#131722" }, horzLine: { color: "#9598A1", width: 1, style: 3, visible: !0, labelVisible: !0, labelBackgroundColor: "#131722" }, mode: 1 }, Uw = { vertLines: { color: "#D6DCDE", style: 0, visible: !0 }, horzLines: { color: "#D6DCDE", style: 0, visible: !0 } }, Ww = { background: { type: "solid", color: "#FFFFFF" }, textColor: "#191919", fontSize: 12, fontFamily: Ju, attributionLogo: !0 }, Do = { autoScale: !0, mode: 0, invertScale: !1, alignLabels: !0, borderVisible: !0, borderColor: "#2B2B43", entireTextOnly: !1, visible: !1, ticksVisible: !1, scaleMargins: { bottom: 0.1, top: 0.2 }, minimumWidth: 0 }, Hw = { rightOffset: 0, barSpacing: 6, minBarSpacing: 0.5, fixLeftEdge: !1, fixRightEdge: !1, lockVisibleTimeRangeOnResize: !1, rightBarStaysOnScroll: !1, borderVisible: !0, borderColor: "#2B2B43", visible: !0, timeVisible: !1, secondsVisible: !0, shiftVisibleRangeOnNewBar: !0, allowShiftVisibleRangeOnWhitespaceReplacement: !1, ticksVisible: !1, uniformDistribution: !1, minimumHeight: 0, allowBoldLabels: !0 }, Kw = { color: "rgba(0, 0, 0, 0)", visible: !1, fontSize: 48, fontFamily: Ju, fontStyle: "", text: "", horzAlign: "center", vertAlign: "center" };
function _f() {
  return { width: 0, height: 0, autoSize: !1, layout: Ww, crosshair: jw, grid: Uw, overlayPriceScales: Object.assign({}, Do), leftPriceScale: Object.assign(Object.assign({}, Do), { visible: !1 }), rightPriceScale: Object.assign(Object.assign({}, Do), { visible: !0 }), timeScale: Hw, watermark: Kw, localization: { locale: ki ? navigator.language : "", dateFormat: "dd MMM 'yy" }, handleScroll: { mouseWheel: !0, pressedMouseMove: !0, horzTouchDrag: !0, vertTouchDrag: !0 }, handleScale: { axisPressedMouseMove: { time: !0, price: !0 }, axisDoubleClickReset: { time: !0, price: !0 }, mouseWheel: !0, pinch: !0 }, kineticScroll: { mouse: !1, touch: !0 }, trackingMode: { exitMode: 1 } };
}
class Xw {
  constructor(e, n) {
    this.aw = e, this.ow = n;
  }
  applyOptions(e) {
    this.aw.$t().$c(this.ow, e);
  }
  options() {
    return this.Li().W();
  }
  width() {
    return Tl(this.ow) ? this.aw.Mb(this.ow) : 0;
  }
  Li() {
    return M(this.aw.$t().Uc(this.ow)).Dt;
  }
}
function kf(t, e, n) {
  const i = Km(t, ["time", "originalTime"]), s = Object.assign({ time: e }, i);
  return n !== void 0 && (s.originalTime = n), s;
}
const qw = { color: "#FF0000", price: 0, lineStyle: 2, lineWidth: 1, lineVisible: !0, axisLabelVisible: !0, title: "", axisLabelColor: "", axisLabelTextColor: "" };
class Qw {
  constructor(e) {
    this.Nh = e;
  }
  applyOptions(e) {
    this.Nh.$h(e);
  }
  options() {
    return this.Nh.W();
  }
  _w() {
    return this.Nh;
  }
}
class Jw {
  constructor(e, n, i, s, r) {
    this.uw = new le(), this.Es = e, this.cw = n, this.dw = i, this.q_ = r, this.fw = s;
  }
  S() {
    this.uw.S();
  }
  priceFormatter() {
    return this.Es.ba();
  }
  priceToCoordinate(e) {
    const n = this.Es.Ct();
    return n === null ? null : this.Es.Dt().Rt(e, n.Vt);
  }
  coordinateToPrice(e) {
    const n = this.Es.Ct();
    return n === null ? null : this.Es.Dt().pn(e, n.Vt);
  }
  barsInLogicalRange(e) {
    if (e === null) return null;
    const n = new pi(new ls(e.from, e.to)).lu(), i = this.Es.In();
    if (i.Ni()) return null;
    const s = i.ll(n.Os(), 1), r = i.ll(n.ui(), -1), l = M(i.el()), o = M(i.An());
    if (s !== null && r !== null && s.ee > r.ee) return { barsBefore: e.from - l, barsAfter: o - e.to };
    const a = { barsBefore: s === null || s.ee === l ? e.from - l : s.ee - l, barsAfter: r === null || r.ee === o ? o - e.to : o - r.ee };
    return s !== null && r !== null && (a.from = s.zb, a.to = r.zb), a;
  }
  setData(e) {
    this.q_, this.Es.Qh(), this.cw.pw(this.Es, e), this.mw("full");
  }
  update(e) {
    this.Es.Qh(), this.cw.bw(this.Es, e), this.mw("update");
  }
  dataByIndex(e, n) {
    const i = this.Es.In().ll(e, n);
    return i === null ? null : Ha(this.seriesType())(i);
  }
  data() {
    const e = Ha(this.seriesType());
    return this.Es.In().ne().map((n) => e(n));
  }
  subscribeDataChanged(e) {
    this.uw.l(e);
  }
  unsubscribeDataChanged(e) {
    this.uw.v(e);
  }
  setMarkers(e) {
    this.q_;
    const n = e.map((i) => kf(i, this.q_.convertHorzItemToInternal(i.time), i.time));
    this.Es.na(n);
  }
  markers() {
    return this.Es.sa().map((e) => kf(e, e.originalTime, void 0));
  }
  applyOptions(e) {
    this.Es.$h(e);
  }
  options() {
    return Ot(this.Es.W());
  }
  priceScale() {
    return this.dw.priceScale(this.Es.Dt().Pa());
  }
  createPriceLine(e) {
    const n = pt(Ot(qw), e), i = this.Es.ea(n);
    return new Qw(i);
  }
  removePriceLine(e) {
    this.Es.ra(e._w());
  }
  seriesType() {
    return this.Es.Qh();
  }
  attachPrimitive(e) {
    this.Es.ka(e), e.attached && e.attached({ chart: this.fw, series: this, requestUpdate: () => this.Es.$t().Kl() });
  }
  detachPrimitive(e) {
    this.Es.ya(e), e.detached && e.detached();
  }
  mw(e) {
    this.uw.M() && this.uw.m(e);
  }
}
class Gw {
  constructor(e, n, i) {
    this.ww = new le(), this.mu = new le(), this.Om = new le(), this.$i = e, this.yl = e.St(), this.ab = n, this.yl.nc().l(this.gw.bind(this)), this.yl.sc().l(this.Mw.bind(this)), this.ab.Nm().l(this.xw.bind(this)), this.q_ = i;
  }
  S() {
    this.yl.nc().p(this), this.yl.sc().p(this), this.ab.Nm().p(this), this.ww.S(), this.mu.S(), this.Om.S();
  }
  scrollPosition() {
    return this.yl.Hu();
  }
  scrollToPosition(e, n) {
    n ? this.yl.Ju(e, 1e3) : this.$i.Jn(e);
  }
  scrollToRealTime() {
    this.yl.Gu();
  }
  getVisibleRange() {
    const e = this.yl.Vu();
    return e === null ? null : { from: e.from.originalTime, to: e.to.originalTime };
  }
  setVisibleRange(e) {
    const n = { from: this.q_.convertHorzItemToInternal(e.from), to: this.q_.convertHorzItemToInternal(e.to) }, i = this.yl.Iu(n);
    this.$i.pd(i);
  }
  getVisibleLogicalRange() {
    const e = this.yl.Du();
    return e === null ? null : { from: e.Os(), to: e.ui() };
  }
  setVisibleLogicalRange(e) {
    fn(e.from <= e.to, "The from index cannot be after the to index."), this.$i.pd(e);
  }
  resetTimeScale() {
    this.$i.Kn();
  }
  fitContent() {
    this.$i.hc();
  }
  logicalToCoordinate(e) {
    const n = this.$i.St();
    return n.Ni() ? null : n.It(e);
  }
  coordinateToLogical(e) {
    return this.yl.Ni() ? null : this.yl.Nu(e);
  }
  timeToCoordinate(e) {
    const n = this.q_.convertHorzItemToInternal(e), i = this.yl.Va(n, !1);
    return i === null ? null : this.yl.It(i);
  }
  coordinateToTime(e) {
    const n = this.$i.St(), i = n.Nu(e), s = n.Ui(i);
    return s === null ? null : s.originalTime;
  }
  width() {
    return this.ab.um().width;
  }
  height() {
    return this.ab.um().height;
  }
  subscribeVisibleTimeRangeChange(e) {
    this.ww.l(e);
  }
  unsubscribeVisibleTimeRangeChange(e) {
    this.ww.v(e);
  }
  subscribeVisibleLogicalRangeChange(e) {
    this.mu.l(e);
  }
  unsubscribeVisibleLogicalRangeChange(e) {
    this.mu.v(e);
  }
  subscribeSizeChange(e) {
    this.Om.l(e);
  }
  unsubscribeSizeChange(e) {
    this.Om.v(e);
  }
  applyOptions(e) {
    this.yl.$h(e);
  }
  options() {
    return Object.assign(Object.assign({}, Ot(this.yl.W())), { barSpacing: this.yl.le() });
  }
  gw() {
    this.ww.M() && this.ww.m(this.getVisibleRange());
  }
  Mw() {
    this.mu.M() && this.mu.m(this.getVisibleLogicalRange());
  }
  xw(e) {
    this.Om.m(e.width, e.height);
  }
}
function Yw(t) {
  if (t === void 0 || t.type === "custom") return;
  const e = t;
  e.minMove !== void 0 && e.precision === void 0 && (e.precision = function(n) {
    if (n >= 1) return 0;
    let i = 0;
    for (; i < 8; i++) {
      const s = Math.round(n);
      if (Math.abs(s - n) < 1e-8) return i;
      n *= 10;
    }
    return i;
  }(e.minMove));
}
function xf(t) {
  return function(e) {
    if (or(e.handleScale)) {
      const i = e.handleScale;
      e.handleScale = { axisDoubleClickReset: { time: i, price: i }, axisPressedMouseMove: { time: i, price: i }, mouseWheel: i, pinch: i };
    } else if (e.handleScale !== void 0) {
      const { axisPressedMouseMove: i, axisDoubleClickReset: s } = e.handleScale;
      or(i) && (e.handleScale.axisPressedMouseMove = { time: i, price: i }), or(s) && (e.handleScale.axisDoubleClickReset = { time: s, price: s });
    }
    const n = e.handleScroll;
    or(n) && (e.handleScroll = { horzTouchDrag: n, vertTouchDrag: n, mouseWheel: n, pressedMouseMove: n });
  }(t), t;
}
class Zw {
  constructor(e, n, i) {
    this.Sw = /* @__PURE__ */ new Map(), this.kw = /* @__PURE__ */ new Map(), this.yw = new le(), this.Cw = new le(), this.Tw = new le(), this.Pw = new $w(n);
    const s = i === void 0 ? Ot(_f()) : pt(Ot(_f()), xf(i));
    this.q_ = n, this.aw = new Nw(e, s, n), this.aw.lm().l((l) => {
      this.yw.M() && this.yw.m(this.Rw(l()));
    }, this), this.aw.am().l((l) => {
      this.Cw.M() && this.Cw.m(this.Rw(l()));
    }, this), this.aw.Xc().l((l) => {
      this.Tw.M() && this.Tw.m(this.Rw(l()));
    }, this);
    const r = this.aw.$t();
    this.Dw = new Gw(r, this.aw.fb(), this.q_);
  }
  remove() {
    this.aw.lm().p(this), this.aw.am().p(this), this.aw.Xc().p(this), this.Dw.S(), this.aw.S(), this.Sw.clear(), this.kw.clear(), this.yw.S(), this.Cw.S(), this.Tw.S(), this.Pw.S();
  }
  resize(e, n, i) {
    this.autoSizeActive() || this.aw._b(e, n, i);
  }
  addCustomSeries(e, n) {
    const i = ri(e), s = Object.assign(Object.assign({}, bm), i.defaultOptions());
    return this.Vw("Custom", s, n, i);
  }
  addAreaSeries(e) {
    return this.Vw("Area", $y, e);
  }
  addBaselineSeries(e) {
    return this.Vw("Baseline", Ay, e);
  }
  addBarSeries(e) {
    return this.Vw("Bar", Ly, e);
  }
  addCandlestickSeries(e = {}) {
    return function(n) {
      n.borderColor !== void 0 && (n.borderUpColor = n.borderColor, n.borderDownColor = n.borderColor), n.wickColor !== void 0 && (n.wickUpColor = n.wickColor, n.wickDownColor = n.wickColor);
    }(e), this.Vw("Candlestick", Ty, e);
  }
  addHistogramSeries(e) {
    return this.Vw("Histogram", Fy, e);
  }
  addLineSeries(e) {
    return this.Vw("Line", Dy, e);
  }
  removeSeries(e) {
    const n = Re(this.Sw.get(e)), i = this.Pw.vd(n);
    this.aw.$t().vd(n), this.Ow(i), this.Sw.delete(e), this.kw.delete(n);
  }
  pw(e, n) {
    this.Ow(this.Pw.Kb(e, n));
  }
  bw(e, n) {
    this.Ow(this.Pw.iw(e, n));
  }
  subscribeClick(e) {
    this.yw.l(e);
  }
  unsubscribeClick(e) {
    this.yw.v(e);
  }
  subscribeCrosshairMove(e) {
    this.Tw.l(e);
  }
  unsubscribeCrosshairMove(e) {
    this.Tw.v(e);
  }
  subscribeDblClick(e) {
    this.Cw.l(e);
  }
  unsubscribeDblClick(e) {
    this.Cw.v(e);
  }
  priceScale(e) {
    return new Xw(this.aw, e);
  }
  timeScale() {
    return this.Dw;
  }
  applyOptions(e) {
    this.aw.$h(xf(e));
  }
  options() {
    return this.aw.W();
  }
  takeScreenshot() {
    return this.aw.wb();
  }
  autoSizeActive() {
    return this.aw.kb();
  }
  chartElement() {
    return this.aw.yb();
  }
  paneSize() {
    const e = this.aw.Tb();
    return { height: e.height, width: e.width };
  }
  setCrosshairPosition(e, n, i) {
    const s = this.Sw.get(i);
    if (s === void 0) return;
    const r = this.aw.$t().dr(s);
    r !== null && this.aw.$t().ad(e, n, r);
  }
  clearCrosshairPosition() {
    this.aw.$t().od(!0);
  }
  Vw(e, n, i = {}, s) {
    Yw(i.priceFormat);
    const r = pt(Ot(_m), Ot(n), i), l = this.aw.$t().dd(e, r, s), o = new Jw(l, this, this, this, this.q_);
    return this.Sw.set(o, l), this.kw.set(l, o), o;
  }
  Ow(e) {
    const n = this.aw.$t();
    n._d(e.St.Eu, e.St.hw, e.St.lw), e.ew.forEach((i, s) => s.J(i.$e, i.rw)), n.Wu();
  }
  Bw(e) {
    return Re(this.kw.get(e));
  }
  Rw(e) {
    const n = /* @__PURE__ */ new Map();
    e.Nb.forEach((s, r) => {
      const l = r.Qh(), o = Ha(l)(s);
      if (l !== "Custom") fn(Rw(o));
      else {
        const a = r.Ta();
        fn(!a || a(o) === !1);
      }
      n.set(this.Bw(r), o);
    });
    const i = e.Eb !== void 0 && this.kw.has(e.Eb) ? this.Bw(e.Eb) : void 0;
    return { time: e.zb, logical: e.ee, point: e.Lb, hoveredSeries: i, hoveredObjectId: e.Fb, seriesData: n, sourceEvent: e.Wb };
  }
}
function eS(t, e, n) {
  let i;
  if (Ds(t)) {
    const r = document.getElementById(t);
    fn(r !== null, `Cannot find element in DOM with id=${t}`), i = r;
  } else i = t;
  const s = new Zw(i, e, n);
  return e.setOptions(s.options()), s;
}
function tS(t, e) {
  return eS(t, new hf(), hf.Id(e));
}
Object.assign(Object.assign({}, _m), bm);
const nS = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), iS = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }), sS = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }), ah = (t) => Number.isFinite(t) ? iS.format(t) : "—", xe = (t) => Number.isFinite(t) ? nS.format(t) : "—", mt = (t) => t ? sS.format(/* @__PURE__ */ new Date(t + "T00:00:00Z")) : "—", Ka = (t) => Number.isFinite(t) ? ah(t) + "%" : "—", qm = (t) => Number.isFinite(t) ? (t > 0 ? "+" : "") + Ka(t) : "—", Qm = (t, e) => e ? (t / e - 1) * 100 : null, Jm = [
  { key: "timestamp", label: "Date (UTC)", format: mt },
  { key: "open", label: "Open", format: xe },
  { key: "high", label: "High", format: xe },
  { key: "low", label: "Low", format: xe },
  { key: "close", label: "Close", format: xe },
  { key: "volume", label: "Volume (BTC)", format: ah }
], gr = "#2ed6a6", Cf = "#f1747e", Mf = "#80a7ff";
function Gm({ history: t, forecast: e, comparison: n, mode: i = "candles" }) {
  const s = W.useRef(null), [r, l] = W.useState(null);
  return W.useEffect(() => {
    l(null);
    const o = s.current, a = tS(o, {
      width: o.clientWidth,
      height: o.clientHeight,
      layout: { background: { type: Va.Solid, color: "#101923" }, textColor: "#8b9bad", fontFamily: "system-ui, sans-serif", fontSize: 11 },
      grid: { vertLines: { color: "#1c2a38" }, horzLines: { color: "#1c2a38" } },
      rightPriceScale: { borderColor: "#253343", minimumWidth: 68, scaleMargins: { top: 0.13, bottom: n ? 0.12 : 0.21 } },
      timeScale: { borderColor: "#253343", rightOffset: 3 },
      crosshair: { vertLine: { color: "#6a8499", labelBackgroundColor: "#25384b" }, horzLine: { color: "#6a8499", labelBackgroundColor: "#25384b" } },
      localization: { priceFormatter: xe }
    }), u = (m, w, y = {}) => {
      const b = a.addLineSeries({ color: m, lineWidth: 2, priceLineVisible: !1, lastValueVisible: !1, ...y });
      return b.setData(w), b;
    };
    let h, c;
    if (n)
      h = u(gr, n.map((m) => ({ time: m.date, value: m.actual }))), c = u(Mf, n.map((m) => ({ time: m.date, value: m.predicted })), { lineStyle: ul.Dashed });
    else {
      const m = t.map((y) => ({ ...y, time: y.timestamp })), w = a.addHistogramSeries({ priceScaleId: "", priceLineVisible: !1, lastValueVisible: !1, priceFormat: { type: "volume" } });
      w.priceScale().applyOptions({ scaleMargins: { top: 0.82, bottom: 0 } }), w.setData(m.map((y) => ({
        time: y.time,
        value: y.volume,
        color: y.close >= y.open ? "#1a6659" : "#5e3a48"
      }))), i === "candles" ? (h = a.addCandlestickSeries({
        upColor: gr,
        downColor: Cf,
        wickUpColor: gr,
        wickDownColor: Cf,
        borderVisible: !1,
        priceLineVisible: !1,
        lastValueVisible: !1
      }), h.setData(m)) : h = u(gr, m.map((y) => ({ time: y.time, value: y.close }))), e != null && e.forecast.length && (c = u(Mf, [
        { time: e.last_date, value: e.last_close },
        ...e.forecast.map((y) => ({ time: y.timestamp, value: y.close }))
      ], { lineStyle: ul.Dashed, lastValueVisible: !0 }));
    }
    a.subscribeCrosshairMove(({ time: m, seriesData: w }) => {
      if (!m) {
        l(null);
        return;
      }
      const y = w.get(h), b = c ? w.get(c) : null;
      l({
        time: typeof m == "string" ? m : [m.year, String(m.month).padStart(2, "0"), String(m.day).padStart(2, "0")].join("-"),
        actual: (y == null ? void 0 : y.close) ?? (y == null ? void 0 : y.value),
        predicted: b == null ? void 0 : b.value
      });
    }), a.timeScale().fitContent();
    const f = new ResizeObserver(() => a.resize(o.clientWidth, o.clientHeight));
    return f.observe(o), () => {
      f.disconnect(), a.remove();
    };
  }, [t, e, n, i]), /* @__PURE__ */ d.createElement("div", { className: "chart-wrap" }, /* @__PURE__ */ d.createElement(
    "div",
    {
      className: "chart-canvas",
      ref: s,
      role: "img",
      "aria-label": n ? "Actual and predicted closing prices over the holdout period. Exact values are in the comparison table." : "BTC/USDT daily price and volume chart. Exact values are in the candle tables."
    }
  ), r && /* @__PURE__ */ d.createElement("div", { className: "chart-tooltip", "aria-hidden": "true" }, /* @__PURE__ */ d.createElement("strong", null, r.time), r.actual != null && /* @__PURE__ */ d.createElement("span", null, "Observed ", xe(r.actual)), r.predicted != null && /* @__PURE__ */ d.createElement("span", null, "Model ", xe(r.predicted))));
}
function un({ className: t = "", children: e, ...n }) {
  return /* @__PURE__ */ d.createElement("section", { className: "panel " + t, ...n }, e);
}
function Yt({ error: t = !1, children: e }) {
  return /* @__PURE__ */ d.createElement("div", { className: "notice" + (t ? " error" : ""), role: t ? "alert" : "status" }, t ? /* @__PURE__ */ d.createElement(my, { size: 16 }) : /* @__PURE__ */ d.createElement(vy, { size: 16 }), /* @__PURE__ */ d.createElement("span", null, e));
}
function $l({ title: t, children: e, pending: n = !1 }) {
  const i = n ? Qu : gm;
  return /* @__PURE__ */ d.createElement("div", { className: "empty-state", role: "status" }, /* @__PURE__ */ d.createElement("span", { className: "empty-icon" }, /* @__PURE__ */ d.createElement(i, { className: n ? "spin" : "", size: 22 })), /* @__PURE__ */ d.createElement("strong", null, t), /* @__PURE__ */ d.createElement("p", null, e));
}
function Ym({ label: t, options: e, value: n, onChange: i }) {
  return /* @__PURE__ */ d.createElement("div", { className: "segmented", role: "group", "aria-label": t }, e.map(
    ({ value: s, label: r }) => /* @__PURE__ */ d.createElement("button", { key: s, type: "button", "aria-pressed": s === n, onClick: () => i(s) }, r)
  ));
}
function uh({ eyebrow: t, title: e, description: n, children: i }) {
  return /* @__PURE__ */ d.createElement("div", { className: "page-heading" }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ d.createElement("span", { className: "tiny-line" }), t), /* @__PURE__ */ d.createElement("h1", null, e), /* @__PURE__ */ d.createElement("p", null, n)), i);
}
function Zt({ icon: t = ks, label: e, value: n, detail: i, tone: s = "" }) {
  return /* @__PURE__ */ d.createElement("div", { className: "stat panel" }, /* @__PURE__ */ d.createElement("div", { className: "stat-top" }, /* @__PURE__ */ d.createElement("span", null, e), /* @__PURE__ */ d.createElement("span", { className: "stat-icon" }, /* @__PURE__ */ d.createElement(t, { size: 16 }))), /* @__PURE__ */ d.createElement("div", { className: "stat-value " + s }, n), /* @__PURE__ */ d.createElement("div", { className: "stat-detail " + s }, i));
}
function Zm({ value: t, onChange: e, disabled: n }) {
  return /* @__PURE__ */ d.createElement("div", { className: "select-field" }, /* @__PURE__ */ d.createElement("select", { id: "samples", value: t, onChange: (i) => e(Number(i.target.value)), disabled: n }, Array.from({ length: 20 }, (i, s) => s + 1).map(
    (i) => /* @__PURE__ */ d.createElement("option", { value: i, key: i }, i, " ", i === 1 ? "trajectory" : "trajectories")
  )), /* @__PURE__ */ d.createElement(fy, { size: 15, "aria-hidden": "true" }));
}
function hh({ rows: t, columns: e, initialSort: n, pageSize: i = 10, search: s = !1, label: r }) {
  const [l, o] = W.useState(n), [a, u] = W.useState(0), [h, c] = W.useState(""), f = W.useMemo(() => {
    const g = h.trim().toLowerCase();
    return (g ? t.filter((v) => e.some(
      ({ key: E, format: _ }) => String(v[E]).toLowerCase().includes(g) || _(v[E]).toLowerCase().includes(g)
    )) : [...t]).sort((v, E) => {
      const _ = v[l.key], k = E[l.key], C = typeof _ == "number" ? _ - k : _.localeCompare(k);
      return l.desc ? -C : C;
    });
  }, [t, e, h, l]), m = Math.max(0, Math.ceil(f.length / i) - 1), w = Math.min(a, m), y = w * i, b = f.slice(y, y + i);
  return /* @__PURE__ */ d.createElement(d.Fragment, null, s && /* @__PURE__ */ d.createElement("label", { className: "table-search" }, /* @__PURE__ */ d.createElement(_y, { size: 15, "aria-hidden": "true" }), /* @__PURE__ */ d.createElement(
    "input",
    {
      type: "search",
      "aria-label": "Search table",
      placeholder: "Search by date or value",
      value: h,
      onChange: (g) => {
        c(g.target.value), u(0);
      }
    }
  )), b.length ? /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("div", { className: "table-scroll", tabIndex: 0, role: "region", "aria-label": r }, /* @__PURE__ */ d.createElement("table", { "aria-label": r }, /* @__PURE__ */ d.createElement("thead", null, /* @__PURE__ */ d.createElement("tr", null, e.map(({ key: g, label: p }) => {
    const v = l.key === g, E = v ? l.desc ? ay : cy : py;
    return /* @__PURE__ */ d.createElement("th", { key: g, scope: "col", "aria-sort": v ? l.desc ? "descending" : "ascending" : void 0 }, /* @__PURE__ */ d.createElement("button", { type: "button", onClick: () => {
      o({ key: g, desc: v ? !l.desc : !1 }), u(0);
    } }, p, /* @__PURE__ */ d.createElement(E, { size: 12, "aria-hidden": "true" })));
  }))), /* @__PURE__ */ d.createElement("tbody", null, b.map((g) => /* @__PURE__ */ d.createElement("tr", { key: g.timestamp ?? g.date }, e.map(({ key: p, format: v, className: E }) => /* @__PURE__ */ d.createElement("td", { key: p, className: E == null ? void 0 : E(g) }, v(g[p])))))))), /* @__PURE__ */ d.createElement("div", { className: "table-footer" }, /* @__PURE__ */ d.createElement("span", null, y + 1, "–", y + b.length, " of ", f.length, " rows"), m > 0 && /* @__PURE__ */ d.createElement("div", { className: "pagination" }, /* @__PURE__ */ d.createElement(
    "button",
    {
      type: "button",
      className: "icon-button",
      "aria-label": "Previous page",
      disabled: w === 0,
      onClick: () => u(w - 1)
    },
    /* @__PURE__ */ d.createElement(dy, { size: 16 })
  ), /* @__PURE__ */ d.createElement("span", null, w + 1, " / ", m + 1), /* @__PURE__ */ d.createElement(
    "button",
    {
      type: "button",
      className: "icon-button",
      "aria-label": "Next page",
      disabled: w === m,
      onClick: () => u(w + 1)
    },
    /* @__PURE__ */ d.createElement(qu, { size: 16 })
  )))) : /* @__PURE__ */ d.createElement($l, { title: "No matching rows" }, "Try a different search."));
}
function ev(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: rS } = Object.prototype, { getPrototypeOf: Bt } = Object, { iterator: As, toStringTag: tv } = Symbol, Vt = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), nv = (t) => typeof t == "string" && (t === "__proto__" || t === "constructor" || t === "prototype"), Al = (t, e, n) => t === Object.prototype || !n && e === null, lS = (t) => {
  if (!Object.isExtensible(t))
    return !1;
  const e = Object.getOwnPropertyNames(t);
  return Object.getOwnPropertySymbols && e.push(...Object.getOwnPropertySymbols(t)), e.every((n) => {
    if (nv(n))
      return !1;
    const i = Object.getOwnPropertyDescriptor(t, n);
    return !!i && i.configurable && i.writable === !0;
  });
}, ch = (t, e) => {
  let n = t;
  const i = [];
  for (; n != null; ) {
    if (i.indexOf(n) !== -1)
      return !1;
    i.push(n);
    const s = Bt(n);
    if (Al(n, s, n === t))
      return !1;
    if (Vt(n, e))
      return !0;
    n = s;
  }
  return !1;
}, oS = (t, e) => t != null && ch(t, e) ? t[e] : void 0, aS = (t) => {
  if (t == null || typeof t != "object" && typeof t != "function")
    return t;
  const e = Bt(t);
  if (e === null && lS(t))
    return t;
  const n = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = [];
  let r = t;
  for (; r != null && s.indexOf(r) === -1; ) {
    s.push(r);
    const l = r === t ? e : Bt(r);
    if (Al(r, l, r === t))
      break;
    const o = Object.getOwnPropertyNames(r);
    Object.getOwnPropertySymbols && o.push(...Object.getOwnPropertySymbols(r));
    for (const a of o)
      nv(a) || Vt(i, a) || (n[a] = t[a], i[a] = !0);
    r = l;
  }
  return n;
}, fh = /* @__PURE__ */ ((t) => (e) => {
  const n = rS.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), it = (t) => (t = t.toLowerCase(), (e) => fh(e) === t), Fl = (t) => (e) => typeof e === t, { isArray: Fn } = Array, Bn = Fl("undefined");
function zi(t) {
  return t !== null && !Bn(t) && t.constructor !== null && !Bn(t.constructor) && Be(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const iv = it("ArrayBuffer");
function uS(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && iv(t.buffer), e;
}
const hS = Fl("string"), Be = Fl("function"), cS = Fl("number"), Ni = (t) => t !== null && typeof t == "object", fS = (t) => t === !0 || t === !1, Lr = (t) => {
  if (!Ni(t))
    return !1;
  const e = Bt(t);
  return (e === null || e === Object.prototype || Bt(e) === null) && // Treat own Symbol.toStringTag or Symbol.iterator members as evidence the
  // value is tagged/iterable, ignoring members reachable only through shared
  // or terminal prototype boundaries. This is exactly what
  // hasOwnInPrototypeChain(val, prop) computes here: every prototype admitted
  // above (null, Object.prototype, or a terminal null-prototype template) is
  // a boundary, so the walk never inspects anything but `val`'s own members,
  // and stops before even those when `val` is itself the boundary
  // Object.prototype. Checking that inline avoids allocating the walker's
  // `seen` list twice per call on the mergeConfig / merge hot path.
  (Al(t, e, !0) || !Vt(t, tv) && !Vt(t, As));
}, dS = (t) => {
  if (!Ni(t) || zi(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, pS = it("Date"), mS = it("File"), vS = (t) => !!(t && typeof t.uri < "u"), gS = (t) => t && typeof t.getParts < "u", yS = it("Blob"), wS = it("FileList"), SS = it("Set"), ES = (t) => Ni(t) && Be(t.pipe);
function bS() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const zf = bS(), Nf = typeof zf.FormData < "u" ? zf.FormData : void 0, _S = (t) => {
  if (!t) return !1;
  if (Nf && t instanceof Nf) return !0;
  const e = Bt(t);
  if (!e || e === Object.prototype || !Be(t.append)) return !1;
  const n = fh(t);
  return n === "formdata" || // detect form-data instance
  n === "object" && Be(t.toString) && t.toString() === "[object FormData]";
}, kS = it("URLSearchParams"), [xS, CS, MS, zS] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(it), NS = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Fs(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let i, s;
  if (typeof t != "object" && (t = [t]), Fn(t))
    for (i = 0, s = t.length; i < s; i++)
      e.call(null, t[i], i, t);
  else {
    if (zi(t))
      return;
    const r = n ? Object.getOwnPropertyNames(t) : Object.keys(t), l = r.length;
    let o;
    for (i = 0; i < l; i++)
      o = r[i], e.call(null, t[o], o, t);
  }
}
function RS(t, e) {
  if (zi(t))
    return null;
  e = e.toLowerCase();
  const n = Object.keys(t);
  let i = n.length, s;
  for (; i-- > 0; )
    if (s = n[i], e === s.toLowerCase())
      return s;
  return null;
}
const kn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, sv = (t) => !Bn(t) && t !== kn;
function Xa(...t) {
  const { caseless: e, skipUndefined: n } = sv(this) && this || {}, i = {}, s = e ? /* @__PURE__ */ Object.create(null) : null, r = (l, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    let a = o;
    if (s && typeof o == "string") {
      const h = o.toLowerCase(), c = s[h];
      c !== void 0 && Vt(i, c) ? a = c : s[h] = o;
    }
    const u = Vt(i, a) ? i[a] : void 0;
    Lr(u) && Lr(l) ? i[a] = Xa(u, l) : Lr(l) ? i[a] = Xa({}, l) : Fn(l) ? i[a] = l.slice() : (!n || !Bn(l)) && (i[a] = l);
  };
  for (let l = 0, o = t.length; l < o; l++) {
    const a = t[l];
    if (!a || zi(a) || (Fs(a, r), typeof a != "object" || Fn(a) || !Object.getOwnPropertySymbols))
      continue;
    const u = Object.getOwnPropertySymbols(a);
    for (let h = 0; h < u.length; h++) {
      const c = u[h];
      jS.call(a, c) && r(a[c], c);
    }
  }
  return i;
}
const PS = (t, e, n, { allOwnKeys: i } = {}) => (Fs(
  e,
  (s, r) => {
    n && Be(s) ? Object.defineProperty(t, r, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: ev(s, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(t, r, {
      __proto__: null,
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: i }
), t), OS = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), TS = (t, e, n, i) => {
  t.prototype = Object.create(e.prototype, i), Object.defineProperty(t.prototype, "constructor", {
    __proto__: null,
    value: t,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "super", {
    __proto__: null,
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, LS = (t, e, n, i) => {
  let s, r, l;
  const o = {};
  if (e = e || {}, t == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(t), r = s.length; r-- > 0; )
      l = s[r], (!i || i(l, t, e)) && !o[l] && (e[l] = t[l], o[l] = !0);
    t = n !== !1 && Bt(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, DS = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const i = t.indexOf(e, n);
  return i !== -1 && i === n;
}, $S = (t) => {
  if (!t) return null;
  if (Fn(t)) return t;
  let e = t.length;
  if (!Number.isSafeInteger(e) || e < 0 || e > 4294967295) return null;
  const n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  let s = t;
  for (; s != null && n.size < e; ) {
    if (i.has(s)) return null;
    i.add(s);
    const l = Bt(s);
    if (Al(s, l, s === t)) break;
    Object.getOwnPropertyNames(s).forEach((o) => {
      const a = +o;
      Number.isInteger(a) && a >= 0 && a < e && String(a) === o && Vt(s, o) && n.add(a);
    }), s = l;
  }
  if (n.size !== e) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, AS = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Bt(Uint8Array)), FS = (t, e) => {
  const i = (t && t[As]).call(t);
  let s;
  for (; (s = i.next()) && !s.done; ) {
    const r = s.value;
    e.call(t, r[0], r[1]);
  }
}, BS = (t, e) => {
  let n;
  const i = [];
  for (; (n = t.exec(e)) !== null; )
    i.push(n);
  return i;
}, VS = it("HTMLFormElement"), IS = (t) => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, i, s) {
  return i.toUpperCase() + s;
}), { propertyIsEnumerable: jS } = Object.prototype, US = it("RegExp"), rv = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), i = {};
  Fs(n, (s, r) => {
    let l;
    (l = e(s, r, t)) !== !1 && (i[r] = l || s);
  }), Object.defineProperties(t, i);
}, WS = (t) => {
  rv(t, (e, n) => {
    if (Be(t) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const i = t[n];
    if (Be(i)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, HS = (t, e) => {
  const n = {}, i = (s) => {
    s.forEach((r) => {
      n[r] = !0;
    });
  };
  return Fn(t) ? i(t) : i(String(t).split(e)), n;
}, KS = () => {
}, XS = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function qS(t) {
  return !!(t && Be(t.append) && t[tv] === "FormData" && t[As]);
}
const QS = (t) => {
  const e = /* @__PURE__ */ new WeakSet(), n = (i) => {
    if (Ni(i)) {
      if (e.has(i))
        return;
      if (zi(i))
        return i;
      if (!("toJSON" in i)) {
        e.add(i);
        let s;
        if (SS(i)) {
          s = [];
          for (const r of i) {
            const l = n(r);
            !Bn(l) && s.push(l);
          }
        } else
          s = Fn(i) ? [] : {}, Fs(i, (r, l) => {
            const o = n(r);
            !Bn(o) && (s[l] = o);
          });
        return e.delete(i), s;
      }
    }
    return i;
  };
  return n(t);
}, JS = it("AsyncFunction"), GS = (t) => t && (Ni(t) || Be(t)) && Be(t.then) && Be(t.catch), lv = ((t, e) => t ? setImmediate : e ? ((n, i) => (kn.addEventListener(
  "message",
  ({ source: s, data: r }) => {
    s === kn && r === n && i.length && i.shift()();
  },
  !1
), (s) => {
  i.push(s), kn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", Be(kn.postMessage)), YS = typeof queueMicrotask < "u" ? queueMicrotask.bind(kn) : typeof process < "u" && process.nextTick || lv, ov = (t) => t != null && Be(t[As]), ZS = (t) => t != null && ch(t, As) && ov(t), S = {
  isArray: Fn,
  isArrayBuffer: iv,
  isBuffer: zi,
  isFormData: _S,
  isArrayBufferView: uS,
  isString: hS,
  isNumber: cS,
  isBoolean: fS,
  isObject: Ni,
  isPlainObject: Lr,
  isEmptyObject: dS,
  isReadableStream: xS,
  isRequest: CS,
  isResponse: MS,
  isHeaders: zS,
  isUndefined: Bn,
  isDate: pS,
  isFile: mS,
  isReactNativeBlob: vS,
  isReactNative: gS,
  isBlob: yS,
  isRegExp: US,
  isFunction: Be,
  isStream: ES,
  isURLSearchParams: kS,
  isTypedArray: AS,
  isFileList: wS,
  forEach: Fs,
  merge: Xa,
  extend: PS,
  trim: NS,
  stripBOM: OS,
  inherits: TS,
  toFlatObject: LS,
  kindOf: fh,
  kindOfTest: it,
  endsWith: DS,
  toArray: $S,
  forEachEntry: FS,
  matchAll: BS,
  isHTMLForm: VS,
  hasOwnProperty: Vt,
  hasOwnProp: Vt,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: ch,
  getSafeProp: oS,
  toSafeFlatObject: aS,
  reduceDescriptors: rv,
  freezeMethods: WS,
  toObjectSet: HS,
  toCamelCase: IS,
  noop: KS,
  toFiniteNumber: XS,
  findKey: RS,
  global: kn,
  isContextDefined: sv,
  isSpecCompliantForm: qS,
  toJSONObject: QS,
  isAsyncFn: JS,
  isThenable: GS,
  setImmediate: lv,
  asap: YS,
  isIterable: ov,
  isSafeIterable: ZS
}, eE = S.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), tE = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  let n, i, s;
  return t && t.split(`
`).forEach(function(l) {
    s = l.indexOf(":"), n = l.substring(0, s).trim().toLowerCase(), i = l.substring(s + 1).trim();
    const o = S.hasOwnProp(e, n);
    !n || o && S.hasOwnProp(eE, n) || (n === "set-cookie" ? o ? e[n].push(i) : e[n] = [i] : e[n] = o ? e[n] + ", " + i : i);
  }), e;
};
function nE(t) {
  let e = 0, n = t.length;
  for (; e < n; ) {
    const i = t.charCodeAt(e);
    if (i !== 9 && i !== 32)
      break;
    e += 1;
  }
  for (; n > e; ) {
    const i = t.charCodeAt(n - 1);
    if (i !== 9 && i !== 32)
      break;
    n -= 1;
  }
  return e === 0 && n === t.length ? t : t.slice(e, n);
}
const iE = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), sE = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function dh(t, e) {
  return S.isArray(t) ? t.map((n) => dh(n, e)) : nE(String(t).replace(e, ""));
}
const rE = (t) => dh(t, iE), lE = (t) => dh(t, sE);
function av(t) {
  const e = /* @__PURE__ */ Object.create(null);
  return S.forEach(t.toJSON(), (n, i) => {
    e[i] = lE(n);
  }), e;
}
const Rf = Symbol("internals");
function Vi(t) {
  return t && String(t).trim().toLowerCase();
}
function Dr(t) {
  return t === !1 || t == null ? t : S.isArray(t) ? t.map(Dr) : rE(String(t));
}
function oE(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; i = n.exec(t); )
    e[i[1]] = i[2];
  return e;
}
const aE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function $o(t) {
  let e = 0, n = t.length;
  for (; e < n; ) {
    const i = t.charCodeAt(e);
    if (i !== 9 && i !== 32)
      break;
    e += 1;
  }
  for (; n > e; ) {
    const i = t.charCodeAt(n - 1);
    if (i !== 9 && i !== 32)
      break;
    n -= 1;
  }
  return e === 0 && n === t.length ? t : t.slice(e, n);
}
function uE(t) {
  const e = t.length - 1;
  if (e < 1 || t.charCodeAt(0) !== 34 || t.charCodeAt(e) !== 34)
    return t;
  let n = "";
  for (let i = 1; i < e; i++) {
    const s = t.charCodeAt(i);
    if (s === 34 || s === 92 && (i += 1, i >= e))
      return t;
    n += t[i];
  }
  return n;
}
function hE(t) {
  const e = /* @__PURE__ */ Object.create(null), n = String(t);
  let i = 0, s = !1, r = !1;
  function l(o) {
    const a = $o(n.slice(i, o)), u = a.indexOf("=");
    if (u < 1)
      return;
    const h = $o(a.slice(0, u));
    if (!aE.test(h))
      return;
    const c = h.toLowerCase();
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return;
    const f = $o(a.slice(u + 1));
    e[c] = uE(f);
  }
  for (let o = 0; o < n.length; o++) {
    const a = n.charCodeAt(o);
    s ? r ? r = !1 : a === 92 ? r = !0 : a === 34 && (s = !1) : a === 34 ? s = !0 : (a === 44 || a === 59) && (l(o), i = o + 1);
  }
  return l(n.length), e;
}
const cE = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim()), fE = "__Proto__", Pf = (t) => t === "__proto__" ? fE : t;
function Ao(t, e, n, i, s) {
  if (S.isFunction(i))
    return i.call(t, e, n);
  if (s && (e = n), !!S.isString(e)) {
    if (S.isString(i))
      return e.indexOf(i) !== -1;
    if (S.isRegExp(i))
      return i.test(e);
  }
}
function dE(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, i) => n.toUpperCase() + i);
}
function pE(t, e) {
  const n = S.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(t, i + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(s, r, l) {
        return this[i].call(this, e, s, r, l);
      },
      configurable: !0
    });
  });
}
let de = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, i) {
    const s = this;
    function r(o, a, u) {
      const h = Vi(a);
      if (!h)
        return;
      const c = S.findKey(s, h);
      (!c || s[c] === void 0 || u === !0 || u === void 0 && s[c] !== !1) && (s[Pf(c || a)] = Dr(o));
    }
    const l = (o, a) => S.forEach(o, (u, h) => r(u, h, a));
    if (S.isPlainObject(e) || e instanceof this.constructor)
      l(e, n);
    else if (S.isString(e) && (e = e.trim()) && !cE(e))
      l(tE(e), n);
    else if (S.isObject(e) && S.isSafeIterable(e)) {
      let o = /* @__PURE__ */ Object.create(null), a, u;
      for (const h of e) {
        if (!S.isArray(h))
          throw new TypeError("Object iterator must return a key-value pair");
        u = h[0], S.hasOwnProp(o, u) ? (a = o[u], o[u] = S.isArray(a) ? [...a, h[1]] : [a, h[1]]) : o[u] = h[1];
      }
      l(o, n);
    } else
      e != null && r(n, e, i);
    return this;
  }
  get(e, n) {
    if (e = Vi(e), e) {
      const i = S.findKey(this, e);
      if (i) {
        const s = this[i];
        if (!n)
          return s;
        if (n === !0)
          return oE(s);
        if (S.isFunction(n))
          return n.call(this, s, i);
        if (S.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = Vi(e), e) {
      const i = S.findKey(this, e);
      return !!(i && this[i] !== void 0 && (!n || Ao(this, this[i], i, n)));
    }
    return !1;
  }
  delete(e, n) {
    const i = this;
    let s = !1;
    function r(l) {
      if (l = Vi(l), l) {
        const o = S.findKey(i, l);
        o && (!n || Ao(i, i[o], o, n)) && (delete i[o], s = !0);
      }
    }
    return S.isArray(e) ? e.forEach(r) : r(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let i = n.length, s = !1;
    for (; i--; ) {
      const r = n[i];
      (!e || Ao(this, this[r], r, e, !0)) && (delete this[r], s = !0);
    }
    return s;
  }
  normalize(e) {
    const n = this, i = /* @__PURE__ */ Object.create(null);
    return S.forEach(this, (s, r) => {
      const l = S.findKey(i, r);
      if (l) {
        n[l] = Dr(s), delete n[r];
        return;
      }
      const o = Pf(e ? dE(r) : String(r).trim());
      o !== r && delete n[r], n[o] = Dr(s), i[o] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return S.forEach(this, (i, s) => {
      i != null && i !== !1 && (n[s] = e && S.isArray(i) ? i.join(", ") : i);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  getSetCookie() {
    const e = this.get("set-cookie");
    return S.isArray(e) ? e : e == null || e === !1 ? [] : [e];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static parseParameters(e) {
    return hE(e);
  }
  static concat(e, ...n) {
    const i = new this(e);
    return n.forEach((s) => i.set(s)), i;
  }
  static accessor(e) {
    const i = (this[Rf] = this[Rf] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function r(l) {
      const o = Vi(l);
      i[o] || (pE(s, l), i[o] = !0);
    }
    return S.isArray(e) ? e.forEach(r) : r(e), this;
  }
};
de.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
S.reduceDescriptors(de.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(i) {
      this[n] = i;
    }
  };
});
S.freezeMethods(de);
const fl = "[REDACTED ****]";
function mE(t) {
  if (S.hasOwnProp(t, "toJSON"))
    return !0;
  let e = Object.getPrototypeOf(t);
  for (; e && e !== Object.prototype; ) {
    if (S.hasOwnProp(e, "toJSON"))
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return !1;
}
function vE(t, e) {
  const n = new Set(e.map((r) => String(r).toLowerCase())), i = [], s = (r) => {
    if (r === null || typeof r != "object" || S.isBuffer(r)) return r;
    if (i.indexOf(r) !== -1) return;
    r instanceof de && (r = r.toJSON()), i.push(r);
    let l;
    if (S.isArray(r))
      l = [], r.forEach((o, a) => {
        const u = s(o);
        S.isUndefined(u) || (l[a] = u);
      });
    else {
      if (!S.isPlainObject(r) && mE(r))
        return i.pop(), r;
      l = /* @__PURE__ */ Object.create(null);
      for (const [o, a] of Object.entries(r)) {
        const u = n.has(o.toLowerCase()) ? fl : s(a);
        S.isUndefined(u) || (l[o] = u);
      }
    }
    return i.pop(), l;
  };
  return s(t);
}
function Of(t) {
  try {
    return String(t);
  } catch {
    return "";
  }
}
function gE(t) {
  return t.errors.map((n) => {
    try {
      return n && n.message ? Of(n.message) : Of(n);
    } catch {
      return "";
    }
  }).filter(Boolean).join("; ") || t.name || "AggregateError";
}
const yE = `
Caused by: `, qa = Symbol("causeStack");
function wE(t, e) {
  const n = S.hasOwnProp(t, qa) && t[qa];
  return n && e.endsWith(n) ? e.length - n.length : -1;
}
function SE(t, e) {
  try {
    const n = e && e.stack;
    if (typeof n != "string" || !n)
      return;
    const i = t.stack;
    if (typeof i != "string" || !i)
      return;
    const s = yE + n;
    t.stack = i + s, Object.defineProperty(t, qa, { __proto__: null, value: s });
  } catch {
  }
}
let N = class uv extends Error {
  static from(e, n, i, s, r, l) {
    let o = e.message;
    !o && S.isArray(e.errors) && e.errors.length && (o = gE(e));
    const a = new uv(o, n || e.code, i, s, r);
    return Object.defineProperty(a, "cause", {
      __proto__: null,
      value: e,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), a.name = e.name, SE(a, e), e.status != null && a.status == null && (a.status = e.status), l && Object.assign(a, l), a;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(e, n, i, s, r) {
    super(e), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: e,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), i && (this.config = i), s && (this.request = s), r && (this.response = r, this.status = r.status);
  }
  toJSON() {
    const e = this.config, n = e && S.hasOwnProp(e, "redact") ? e.redact : void 0, i = S.isArray(n) && n.length > 0 ? vE(e, n) : S.toJSONObject(e);
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: i,
      code: this.code,
      status: this.status
    };
  }
};
N.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
N.ERR_BAD_OPTION = "ERR_BAD_OPTION";
N.ECONNABORTED = "ECONNABORTED";
N.ETIMEDOUT = "ETIMEDOUT";
N.ECONNREFUSED = "ECONNREFUSED";
N.ERR_NETWORK = "ERR_NETWORK";
N.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
N.ERR_DEPRECATED = "ERR_DEPRECATED";
N.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
N.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
N.ERR_CANCELED = "ERR_CANCELED";
N.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
N.ERR_INVALID_URL = "ERR_INVALID_URL";
N.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const EE = null, hv = 100;
function Qa(t) {
  return S.isPlainObject(t) || S.isArray(t);
}
function cv(t) {
  return S.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Fo(t, e, n) {
  return t ? t.concat(e).map(function(s, r) {
    return s = cv(s), !n && r ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function bE(t) {
  return S.isArray(t) && !t.some(Qa);
}
const _E = S.toFlatObject(S, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Bl(t, e, n) {
  if (!S.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData();
  const i = (p, v) => {
    const E = S.getSafeProp(n, p);
    return S.isUndefined(E) ? v : E;
  }, s = i("metaTokens", !0), r = i("visitor") || y, l = i("dots", !1), o = i("indexes", !1), a = i("Blob") || typeof Blob < "u" && Blob, u = i("maxDepth", hv), h = a && S.isSpecCompliantForm(e), c = [];
  if (!S.isFunction(r))
    throw new TypeError("visitor must be a function");
  function f(p) {
    if (p === null) return "";
    if (S.isDate(p))
      return p.toISOString();
    if (S.isBoolean(p))
      return p.toString();
    if (!h && S.isBlob(p))
      throw new N("Blob is not supported. Use a Buffer instead.");
    if (S.isArrayBuffer(p) || S.isTypedArray(p)) {
      if (h && typeof a == "function")
        return new a([p]);
      throw new N(
        "Blob is not supported. Use a Buffer instead.",
        N.ERR_NOT_SUPPORT
      );
    }
    return p;
  }
  function m(p) {
    if (p > u)
      throw new N(
        "Object is too deeply nested (" + p + " levels). Max depth: " + u,
        N.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function w(p, v) {
    if (u === 1 / 0)
      return JSON.stringify(p);
    const E = [];
    return JSON.stringify(p, function(k, C) {
      if (!S.isObject(C))
        return C;
      for (; E.length && E[E.length - 1] !== this; )
        E.pop();
      return E.push(C), m(v + E.length - 1), C;
    });
  }
  function y(p, v, E) {
    let _ = p;
    if (S.isReactNative(e) && S.isReactNativeBlob(p))
      return e.append(Fo(E, v, l), f(p)), !1;
    if (p && !E && typeof p == "object") {
      if (S.endsWith(v, "{}"))
        v = s ? v : v.slice(0, -2), p = w(p, 1);
      else if (S.isArray(p) && bE(p) || (S.isFileList(p) || S.endsWith(v, "[]")) && (_ = S.toArray(p)))
        return v = cv(v), _.forEach(function(C, x) {
          !(S.isUndefined(C) || C === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Fo([v], x, l) : o === null ? v : v + "[]",
            f(C)
          );
        }), !1;
    }
    return Qa(p) ? !0 : (e.append(Fo(E, v, l), f(p)), !1);
  }
  const b = Object.assign(_E, {
    defaultVisitor: y,
    convertValue: f,
    isVisitable: Qa
  });
  function g(p, v, E = 0) {
    if (!S.isUndefined(p)) {
      if (m(E), c.indexOf(p) !== -1)
        throw new Error("Circular reference detected in " + v.join("."));
      c.push(p), S.forEach(p, function(k, C) {
        (!(S.isUndefined(k) || k === null) && r.call(e, k, S.isString(C) ? C.trim() : C, v, b)) === !0 && g(k, v ? v.concat(C) : [C], E + 1);
      }), c.pop();
    }
  }
  if (!S.isObject(t))
    throw new TypeError("data must be an object");
  return g(t), e;
}
function Tf(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20/g, function(i) {
    return e[i];
  });
}
function ph(t, e) {
  this._pairs = [], t && Bl(t, this, e);
}
const fv = ph.prototype;
fv.append = function(e, n) {
  this._pairs.push([e, n]);
};
fv.toString = function(e) {
  const n = e ? (i) => e.call(this, i, Tf) : Tf;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function kE(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function dv(t, e, n) {
  if (!e)
    return t;
  t = t || "";
  const i = S.isFunction(n) ? {
    serialize: n
  } : n, s = S.getSafeProp(i, "encode") || kE, r = S.getSafeProp(i, "serialize");
  let l;
  if (r ? l = r(e, i) : l = S.isURLSearchParams(e) ? e.toString() : new ph(e, i).toString(s), l) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + l;
  }
  return t;
}
const Ii = Symbol("internals");
function pv(t) {
  return t ? t.length : 0;
}
function Lf(t) {
  if (t)
    for (; t.length && t[t.length - 1] === null; )
      t.pop();
}
function xE(t) {
  return typeof t == "string" && t !== "" && String(Number(t)) === t ? Number(t) : t;
}
function ji(t, e) {
  const n = t.handlers, i = pv(n);
  n !== e.handlersRef ? (e.handlersRef = n, e.handlerEntries.clear()) : i !== e.handlersLength && (i ? e.handlerEntries.forEach(function(r, l) {
    n[r.index] !== r.handler && e.handlerEntries.delete(l);
  }) : e.handlerEntries.clear()), e.handlersLength = i;
}
class Df {
  constructor() {
    this.handlers = [], this[Ii] = {
      handlersRef: this.handlers,
      handlersLength: this.handlers.length,
      handlerEntries: /* @__PURE__ */ new Map(),
      iterationDepth: 0,
      nextId: 0
    };
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, i) {
    const s = {
      fulfilled: e,
      rejected: n,
      synchronous: i ? i.synchronous : !1,
      runWhen: i ? i.runWhen : null
    }, r = this[Ii];
    this.handlers == null && (this.handlers = []), ji(this, r);
    const l = r.nextId++;
    return this.handlers.push(s), r.handlerEntries.set(l, {
      handler: s,
      index: this.handlers.length - 1
    }), r.handlersLength = this.handlers.length, l;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(e) {
    const n = this[Ii];
    ji(this, n);
    const i = xE(e), s = n.handlerEntries.get(i);
    if (s) {
      if (n.handlerEntries.delete(i), this.handlers[s.index] !== s.handler)
        return;
      this.handlers[s.index] = null, n.iterationDepth || (Lf(this.handlers), n.handlersLength = this.handlers.length);
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = [], ji(this, this[Ii]));
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    const n = this[Ii];
    ji(this, n), n.iterationDepth++;
    try {
      S.forEach(this.handlers, function(s) {
        s !== null && e(s);
      });
    } finally {
      --n.iterationDepth || (ji(this, n), Lf(this.handlers), n.handlersLength = pv(this.handlers));
    }
  }
}
const mh = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0,
  encodeBasicAuthUsername: !1
}, CE = typeof URLSearchParams < "u" ? URLSearchParams : ph, ME = typeof FormData < "u" ? FormData : null, zE = typeof Blob < "u" ? Blob : null, NE = {
  isBrowser: !0,
  classes: {
    URLSearchParams: CE,
    FormData: ME,
    Blob: zE
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, vh = typeof window < "u" && typeof document < "u", Ja = typeof navigator == "object" && navigator || void 0, RE = vh && (!Ja || ["ReactNative", "NativeScript", "NS"].indexOf(Ja.product) < 0), PE = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", OE = vh && window.location.href || "http://localhost", TE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: vh,
  hasStandardBrowserEnv: RE,
  hasStandardBrowserWebWorkerEnv: PE,
  navigator: Ja,
  origin: OE
}, Symbol.toStringTag, { value: "Module" })), ue = {
  ...TE,
  ...NE
};
function LE(t, e) {
  return Bl(t, new ue.classes.URLSearchParams(), {
    visitor: function(n, i, s, r) {
      return ue.isNode && S.isBuffer(n) ? (this.append(i, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
const $f = hv;
function mv(t) {
  if (t > $f)
    throw new N(
      "FormData field is too deeply nested (" + t + " levels). Max depth: " + $f,
      N.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function DE(t) {
  const e = [], n = /[^.[\]]+|\[([^.[\]]*)]/g;
  let i;
  for (; (i = n.exec(t)) !== null; )
    mv(e.length), e.push(i[0] === "[]" ? "" : i[1] || i[0]);
  return e;
}
function vv(t) {
  const e = {}, n = Object.keys(t);
  let i;
  const s = n.length;
  let r;
  for (i = 0; i < s; i++)
    r = n[i], e[r] = t[r];
  return e;
}
function gv(t) {
  if (!S.isArray(t)) return t;
  const e = Object.keys(t);
  return e.length !== t.length || e.some((n, i) => n !== String(i)) ? vv(t) : t;
}
function $E(t) {
  const e = [t];
  for (; e.length; ) {
    const n = e.pop();
    Object.keys(n).forEach((i) => {
      const s = n[i] = gv(n[i]);
      (S.isArray(s) || S.isPlainObject(s)) && e.push(s);
    });
  }
  return t;
}
function yv(t) {
  function e(n, i, s, r) {
    mv(r);
    let l = n[r++];
    if (l === "__proto__") return !0;
    const o = Number.isFinite(+l), a = r >= n.length;
    return l = !l && S.isArray(s) ? s.length : l, a ? (S.hasOwnProp(s, l) ? (s[l] = gv(s[l]), s[l] = S.isArray(s[l]) ? s[l].concat(i) : [s[l], i]) : s[l] = i, !o) : ((!S.hasOwnProp(s, l) || !S.isObject(s[l])) && (s[l] = []), e(n, i, s[l], r) && S.isArray(s[l]) && (s[l] = vv(s[l])), !o);
  }
  if (S.isFormData(t) && S.isFunction(t.entries)) {
    const n = {};
    return S.forEachEntry(t, (i, s) => {
      e(DE(i), s, n, 0);
    }), $E(n);
  }
  return null;
}
const wv = Object.freeze([
  "get",
  "delete",
  "head",
  "options",
  "post",
  "put",
  "patch",
  "purge",
  "link",
  "unlink",
  "query"
]), Kn = (t, e) => t != null && S.hasOwnProp(t, e) ? t[e] : void 0;
function AE(t, e, n) {
  if (S.isString(t))
    try {
      return (e || JSON.parse)(t), S.trim(t);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (n || JSON.stringify)(t);
}
const Bs = {
  transitional: mh,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(e, n) {
      const i = n.getContentType() || "", s = i.indexOf("application/json") > -1, r = S.isObject(e);
      if (r && S.isHTMLForm(e) && (e = new FormData(e)), S.isFormData(e))
        return s ? JSON.stringify(yv(e)) : e;
      if (S.isArrayBuffer(e) || S.isBuffer(e) || S.isStream(e) || S.isFile(e) || S.isBlob(e) || S.isReadableStream(e))
        return e;
      if (S.isArrayBufferView(e))
        return e.buffer;
      if (S.isURLSearchParams(e))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
      let o;
      if (r) {
        const a = Kn(this, "formSerializer");
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return LE(e, a).toString();
        if ((o = S.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
          const u = Kn(this, "env"), h = u && u.FormData;
          return Bl(
            o ? { "files[]": e } : e,
            h && new h(),
            a
          );
        }
      }
      return r || s ? (n.setContentType("application/json", !1), AE(e)) : e;
    }
  ],
  transformResponse: [
    function(e) {
      const n = Kn(this, "transitional") || Bs.transitional, i = n && n.forcedJSONParsing, s = Kn(this, "responseType"), r = s === "json";
      if (S.isResponse(e) || S.isReadableStream(e))
        return e;
      if (e && S.isString(e) && (i && !s || r)) {
        const o = !(n && n.silentJSONParsing) && r;
        try {
          return JSON.parse(e, Kn(this, "parseReviver"));
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError" ? N.from(a, N.ERR_BAD_RESPONSE, this, null, Kn(this, "response")) : a;
        }
      }
      return e;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ue.classes.FormData,
    Blob: ue.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
S.forEach(wv, (t) => {
  Bs.headers[t] = {};
});
function Bo(t, e) {
  const n = this || Bs, i = e || n, s = de.from(i.headers);
  let r = i.data;
  return S.forEach(t, function(o) {
    r = o.call(n, r, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), r;
}
function Sv(t) {
  return !!(t && t.__CANCEL__);
}
let Vs = class extends N {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(e, n, i) {
    super(e ?? "canceled", N.ERR_CANCELED, n, i), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Ev(t, e, n) {
  const i = n.config.validateStatus;
  !n.status || !i || i(n.status) ? t(n) : e(new N(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? N.ERR_BAD_REQUEST : N.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
const FE = /[\t\n\r]/g;
function bv(t) {
  if (typeof t != "string")
    return t;
  let e = 0;
  for (; e < t.length && t.charCodeAt(e) <= 32; )
    e++;
  return t.slice(e).replace(FE, "");
}
function Vo(t) {
  const e = /^([-+\w]{1,25}):(?:\/\/)?/.exec(t);
  return e && e[1].toLowerCase() || "";
}
const Af = (t) => {
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}, _v = ue.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, i, s, r, l) {
      if (typeof document > "u") return;
      const o = [`${t}=${encodeURIComponent(e)}`];
      S.isNumber(n) && o.push(`expires=${new Date(n).toUTCString()}`), S.isString(i) && o.push(`path=${i}`), S.isString(s) && o.push(`domain=${s}`), r === !0 && o.push("secure"), S.isString(l) && o.push(`SameSite=${l}`), document.cookie = o.join("; ");
    },
    read(t) {
      if (typeof document > "u") return null;
      const e = document.cookie;
      if (!e) return null;
      const n = e.split(";");
      for (let i = 0; i < n.length; i++) {
        const s = n[i].replace(/^\s+/, ""), r = s.indexOf("=");
        if (r !== -1 && s.slice(0, r) === t)
          return Af(s.slice(r + 1));
      }
      return null;
    },
    async readAsync(t) {
      try {
        const e = typeof window < "u" && window.cookieStore;
        if (e && S.isFunction(e.get)) {
          const n = await e.get(t);
          return n ? Af(n.value) : null;
        }
      } catch {
      }
      return this.read(t);
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    async readAsync() {
      return null;
    },
    remove() {
    }
  }
);
function BE(t, e) {
  t = t || 10;
  const n = new Array(t), i = new Array(t);
  let s = 0, r = 0, l;
  return e = e !== void 0 ? e : 1e3, function(a) {
    const u = Date.now(), h = i[r];
    l || (l = u), n[s] = a, i[s] = u;
    let c = r, f = 0;
    for (; c !== s; )
      f += n[c++], c = c % t;
    if (s = (s + 1) % t, s === r && (r = (r + 1) % t), u - l < e)
      return;
    const m = h && u - h;
    return m ? Math.round(f * 1e3 / m) : void 0;
  };
}
function VE(t, e) {
  let n = 0, i = 1e3 / e, s, r;
  const l = (h, c = Date.now()) => {
    n = c, s = null, r && (clearTimeout(r), r = null), t(...h);
  };
  return [(...h) => {
    const c = Date.now(), f = c - n;
    f >= i ? l(h, c) : (s = h, r || (r = setTimeout(() => {
      r = null, l(s);
    }, i - f)));
  }, () => s && l(s), (...h) => l(h)];
}
const dl = (t, e, n = 3) => {
  let i = 0;
  const s = BE(50, 250);
  return VE((r) => {
    if (!r || !S.isNumber(r.loaded))
      return;
    const l = r.loaded, o = r.lengthComputable ? r.total : void 0, a = Math.max(0, o != null ? Math.min(l, o) : l), u = Math.max(0, a - i), h = s(u);
    i = Math.max(i, a);
    const c = {
      loaded: a,
      total: o,
      progress: o ? a / o : void 0,
      bytes: u,
      rate: h || void 0,
      estimated: h && o ? (o - a) / h : void 0,
      event: r,
      lengthComputable: o != null,
      [e ? "download" : "upload"]: !0
    };
    t(c);
  }, n);
}, Ff = (t, e) => {
  const n = t != null;
  return [
    (i) => e[0]({
      lengthComputable: n,
      total: t,
      loaded: i
    }),
    e[1]
  ];
}, Bf = (t, e = S.asap) => (...n) => e(() => t(...n)), IE = ue.hasStandardBrowserEnv ? /* @__PURE__ */ ((t) => (e) => (e = new URL(e, document.baseURI || ue.origin), t.protocol === e.protocol && t.host === e.host && t.port === e.port))(new URL(ue.origin)) : () => !0;
function jE(t) {
  return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function UE(t, e) {
  if (!e)
    return t;
  let n = t.length;
  for (; n > 0 && t.charCodeAt(n - 1) === 47; )
    n--;
  return t.slice(0, n) + "/" + e.replace(/^\/+/, "");
}
const WE = /^https?:(?!\/\/)/i;
function HE(t) {
  return t && t.replace(/(^|&)([^=&]*=)?[^&]+/g, (e, n, i = "") => `${n}${i}${fl}`);
}
function KE(t) {
  const e = t.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${fl}@`), n = e.indexOf("#"), s = (n === -1 ? e : e.slice(0, n)).replace(
    /([?&][^=&#]*=)[^&#]*/g,
    `$1${fl}`
  );
  return n === -1 ? s : `${s}#${HE(e.slice(n + 1))}`;
}
function Vf(t, e) {
  if (typeof t == "string") {
    const n = bv(t);
    if (WE.test(n))
      throw new N(
        `Invalid URL ${JSON.stringify(KE(n))}: missing "//" after protocol`,
        N.ERR_INVALID_URL,
        e
      );
  }
}
function kv(t, e, n, i) {
  Vf(e, i);
  let s = !jE(e);
  return t && (s || n === !1) ? (Vf(t, i), UE(t, e)) : e;
}
function XE(t) {
  const e = [{ value: t }], n = /* @__PURE__ */ new WeakSet(), i = /* @__PURE__ */ new WeakSet();
  for (; e.length; ) {
    const { value: s, done: r } = e.pop();
    if (!S.isPlainObject(s) && !S.isArray(s)) continue;
    if (r) {
      n.delete(s);
      continue;
    }
    if (n.has(s))
      throw new N(
        "Circular reference detected in params",
        N.ERR_BAD_OPTION_VALUE
      );
    if (i.has(s)) continue;
    i.add(s), n.add(s), e.push({ value: s, done: !0 });
    const l = Object.keys(s);
    Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor && Object.getOwnPropertySymbols(s).forEach((o) => {
      const a = Object.getOwnPropertyDescriptor(s, o);
      a && a.enumerable && l.push(o);
    }), l.forEach((o) => {
      if (o === "__proto__" || o === "constructor" || o === "prototype") {
        const a = Object.getOwnPropertyDescriptor(s, o);
        a && S.hasOwnProp(a, "value") && e.push({ value: a.value });
      } else
        e.push({ value: s[o] });
    });
  }
}
const If = (t) => t instanceof de ? { ...t } : t, Ga = (t) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(t).concat(
  Object.getOwnPropertySymbols(t).filter((e) => {
    const n = Object.getOwnPropertyDescriptor(t, e);
    return n && n.enumerable;
  })
) : Object.keys(t);
function qE(t, e) {
  const n = [], i = /* @__PURE__ */ new WeakMap(), s = {};
  function r(o, a) {
    if (!S.isPlainObject(a))
      return S.isArray(a) ? a.slice() : a;
    const u = S.isPlainObject(o) ? o : s;
    let h = i.get(a);
    if (h || (h = /* @__PURE__ */ new WeakMap(), i.set(a, h)), h.has(u)) return h.get(u);
    const c = {};
    return h.set(u, c), n.push({ base: u, source: a, result: c }), c;
  }
  const l = S.isUndefined(e) ? r(void 0, t) : r(t, e);
  for (; n.length; ) {
    const { base: o, source: a, result: u } = n.pop(), h = new Set(Ga(o)), c = new Set(Ga(a));
    (/* @__PURE__ */ new Set([...h, ...c])).forEach((m) => {
      if (m === "__proto__" || m === "constructor" || m === "prototype") return;
      const w = c.has(m), y = w ? a[m] : void 0, b = (!w || S.isPlainObject(y)) && h.has(m) ? o[m] : void 0;
      u[m] = w ? r(b, y) : r(void 0, b);
    });
  }
  return XE(l), l;
}
function dn(t, e, n, i) {
  return S.isPlainObject(t) && S.isPlainObject(e) ? S.merge.call({ caseless: i }, t, e) : S.isPlainObject(e) ? S.merge({}, e) : S.isArray(e) ? e.slice() : e;
}
function xv(t, e, n, i) {
  if (S.isUndefined(e)) {
    if (!S.isUndefined(t))
      return dn(void 0, t, n, i);
  } else return dn(t, e, n, i);
}
function Io(t, e) {
  if (!S.isUndefined(e))
    return dn(void 0, e);
}
function q(t, e) {
  if (S.isUndefined(e)) {
    if (!S.isUndefined(t))
      return dn(void 0, t);
  } else return dn(void 0, e);
}
function QE(t, e, n) {
  const i = S.hasOwnProp(e, "transitional") ? e.transitional : void 0;
  if (!S.isUndefined(i))
    if (S.isPlainObject(i)) {
      if (S.hasOwnProp(i, n))
        return i[n];
    } else
      return;
  const s = S.hasOwnProp(t, "transitional") ? t.transitional : void 0;
  if (S.isPlainObject(s) && S.hasOwnProp(s, n))
    return s[n];
}
function Ya(t, e, n, i, s) {
  if (S.hasOwnProp(s, n))
    return dn(t, e);
  if (S.hasOwnProp(i, n))
    return dn(void 0, t);
}
function JE(t, e, n) {
  return xv(If(t), If(e), n, !0);
}
const GE = Object.freeze({
  __proto__: null,
  value: Object.prototype.hasOwnProperty,
  enumerable: !1,
  writable: !0,
  configurable: !0
}), jf = {
  url: Io,
  method: Io,
  data: Io,
  baseURL: q,
  transformRequest: q,
  transformResponse: q,
  params: qE,
  paramsSerializer: q,
  timeout: q,
  timeoutErrorMessage: q,
  withCredentials: q,
  withXSRFToken: q,
  adapter: q,
  responseType: q,
  xsrfCookieName: q,
  xsrfHeaderName: q,
  onUploadProgress: q,
  onDownloadProgress: q,
  decompress: q,
  maxContentLength: q,
  maxBodyLength: q,
  beforeRedirect: q,
  transport: q,
  httpAgent: q,
  httpsAgent: q,
  cancelToken: q,
  socketPath: q,
  allowedSocketPaths: q,
  responseEncoding: q,
  validateStatus: Ya,
  headers: JE
};
function Vn(t, e) {
  t = t || {}, e = e || {};
  const n = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", GE);
  const i = Ga({ ...t, ...e });
  for (let s = 0, r = i.length; s < r; s++) {
    const l = i[s];
    if (l === "__proto__" || l === "constructor" || l === "prototype") continue;
    const o = S.hasOwnProp(jf, l) ? jf[l] : xv, a = S.hasOwnProp(t, l) ? t[l] : void 0, u = S.hasOwnProp(e, l) ? e[l] : void 0, h = o === Ya ? o(a, u, l, t, e) : o(a, u, l);
    S.isUndefined(h) && o !== Ya || (n[l] = h);
  }
  return S.hasOwnProp(e, "validateStatus") && S.isUndefined(e.validateStatus) && QE(t, e, "validateStatusUndefinedResolves") === !1 && (S.hasOwnProp(t, "validateStatus") ? n.validateStatus = dn(void 0, t.validateStatus) : delete n.validateStatus), n;
}
const YE = ["content-type", "content-length"];
function ZE(t, e, n) {
  if (n !== "content-only") {
    t.set(e);
    return;
  }
  Object.entries(e || {}).forEach(([i, s]) => {
    YE.includes(i.toLowerCase()) && t.set(i, s);
  });
}
const Uf = (t) => encodeURIComponent(t).replace(
  /%([0-9A-F]{2})/gi,
  (e, n) => String.fromCharCode(parseInt(n, 16))
), eb = (t) => _v.read(t);
function Cv(t, e = eb) {
  const n = Vn({}, t), i = (m) => S.hasOwnProp(n, m) ? n[m] : void 0, s = i("data");
  let r = i("withXSRFToken");
  const l = i("xsrfHeaderName"), o = i("xsrfCookieName");
  let a = i("headers");
  const u = i("auth"), h = i("baseURL"), c = i("allowAbsoluteUrls"), f = i("url");
  if (n.headers = a = de.from(a), n.url = dv(
    kv(h, f, c, n),
    i("params"),
    i("paramsSerializer")
  ), u) {
    const m = S.getSafeProp(u, "username") || "", w = S.getSafeProp(u, "password") || "", y = i("transitional"), b = y && S.hasOwnProp(y, "encodeBasicAuthUsername") && y.encodeBasicAuthUsername === !0;
    try {
      a.set(
        "Authorization",
        // Preserve legacy username bytes unless the caller opts in to UTF-8.
        "Basic " + btoa(
          (b ? Uf(m) : m) + ":" + (w ? Uf(w) : "")
        )
      );
    } catch (g) {
      throw N.from(g, N.ERR_BAD_OPTION_VALUE, t);
    }
  }
  if (S.isFormData(s)) {
    const m = S.getSafeProp(s, "getHeaders");
    ue.hasStandardBrowserEnv || ue.hasStandardBrowserWebWorkerEnv || S.isReactNative(s) ? a.setContentType(void 0) : S.isFunction(m) && ZE(a, m.call(s), i("formDataHeaderPolicy"));
  }
  if (ue.hasStandardBrowserEnv && (S.isFunction(r) && (r = r(n)), r === !0 || r == null && IE(n.url))) {
    const w = l && o && e(o);
    w && a.set(l, w);
  }
  return n;
}
const tb = typeof XMLHttpRequest < "u", nb = tb && function(t) {
  return new Promise(function(n, i) {
    let s;
    try {
      const x = ue.hasStandardBrowserEnv && typeof window < "u" && window.cookieStore;
      s = x && S.isFunction(x.get);
    } catch {
    }
    let r;
    const l = Cv(
      t,
      s ? (x) => (r = x, null) : void 0
    );
    let o = l.data;
    const a = de.from(l.headers).normalize();
    let { responseType: u, onUploadProgress: h, onDownloadProgress: c } = l, f, m, w, y, b, g, p;
    function v() {
      clearTimeout(m);
      try {
        b && b();
      } catch (x) {
        setTimeout(() => {
          throw x;
        });
      }
      try {
        g && g();
      } catch (x) {
        setTimeout(() => {
          throw x;
        });
      }
      E && (y && E.removeEventListener("progress", y), E.upload && (w && E.upload.removeEventListener("progress", w), b && E.upload.removeEventListener("loadend", b))), l.cancelToken && l.cancelToken.unsubscribe(f), l.signal && l.signal.removeEventListener("abort", f);
    }
    let E = new XMLHttpRequest();
    E.open(l.method.toUpperCase(), l.url, !0), E.timeout = l.timeout;
    function _(x) {
      if (!E)
        return;
      if (E.status === 0 && (Vo(bv(l.url)) || Vo(ue.origin)) !== "file" && !(E.responseURL && E.responseURL.startsWith("file:"))) {
        i(new N("Request aborted", N.ECONNABORTED, t, E)), v(), E = null;
        return;
      }
      try {
        x ? p && p(x) : g && g();
      } catch (K) {
        setTimeout(() => {
          throw K;
        });
      }
      if (!E)
        return;
      const T = de.from(
        "getAllResponseHeaders" in E && E.getAllResponseHeaders()
      ), F = {
        data: !u || u === "text" || u === "json" ? E.responseText : E.response,
        status: E.status,
        statusText: E.statusText,
        headers: T,
        config: t,
        request: E
      };
      Ev(
        function(ne) {
          n(ne), v();
        },
        function(ne) {
          i(ne), v();
        },
        F
      ), E = null;
    }
    if ("onloadend" in E ? E.onloadend = _ : E.onreadystatechange = function() {
      !E || E.readyState !== 4 || E.status === 0 && !(E.responseURL && E.responseURL.startsWith("file:")) || setTimeout(_);
    }, E.onabort = function() {
      E && (i(new N("Request aborted", N.ECONNABORTED, t, E)), v(), E = null);
    }, E.onerror = function(T) {
      const O = T && T.message ? T.message : "Network Error", F = new N(O, N.ERR_NETWORK, t, E);
      F.event = T || null, i(F), v(), E = null;
    }, E.ontimeout = function() {
      if (!E) return;
      let T = l.timeout ? "timeout of " + l.timeout + "ms exceeded" : "timeout exceeded";
      const O = l.transitional || mh;
      l.timeoutErrorMessage && (T = l.timeoutErrorMessage), i(
        new N(
          T,
          O.clarifyTimeoutError ? N.ETIMEDOUT : N.ECONNABORTED,
          t,
          E
        )
      ), v(), E = null;
    }, o === void 0 && a.setContentType(null), S.isUndefined(l.withCredentials) || (E.withCredentials = !!l.withCredentials), u && u !== "json" && (E.responseType = l.responseType), c && ([y, g, p] = dl(
      c,
      !0
    ), E.addEventListener("progress", y)), h && E.upload && ([w, b] = dl(h), E.upload.addEventListener("progress", w), E.upload.addEventListener("loadend", b)), l.cancelToken || l.signal) {
      if (f = (x) => {
        if (!E)
          return;
        i(!x || x.type ? new Vs(null, t, E) : x);
        const T = E;
        v(), E = null, T.abort();
      }, l.cancelToken && l.cancelToken.subscribe(f), !E) return;
      l.signal && (l.signal.aborted ? f() : l.signal.addEventListener("abort", f));
    }
    if (!E) return;
    const k = Vo(l.url);
    if (k && !ue.protocols.includes(k)) {
      i(
        new N(
          "Unsupported protocol " + k + ":",
          N.ERR_BAD_REQUEST,
          t
        )
      ), v();
      return;
    }
    const C = () => {
      E && ("setRequestHeader" in E && S.forEach(
        av(a),
        function(T, O) {
          E.setRequestHeader(O, T);
        }
      ), E.send(o || null));
    };
    if (r) {
      const x = typeof performance < "u" && S.isFunction(performance.now) ? () => performance.now() : Date.now, T = E.timeout > 0 ? x() + Number(E.timeout) : void 0, O = () => {
        if (!E) return;
        const F = E;
        F.ontimeout(), F.abort();
      };
      if (T !== void 0) {
        const F = () => {
          const K = T - x();
          K > 0 ? m = setTimeout(F, Math.min(K, 2147483647)) : O();
        };
        F();
      }
      _v.readAsync(r).then((F) => {
        if (E) {
          if (T !== void 0 && x() >= T) {
            O();
            return;
          }
          if (F) {
            const K = S.hasOwnProp(l, "xsrfHeaderName") && l.xsrfHeaderName;
            a.set(K, F);
          }
          C();
        }
      }).catch((F) => {
        E && (i(N.from(F, null, t, E)), v(), E = null);
      });
    } else
      C();
  });
}, ib = (t, e) => {
  if (t = t ? t.filter(Boolean) : [], !e && !t.length)
    return;
  const n = new AbortController();
  let i = !1;
  const s = function(a) {
    if (!i) {
      i = !0, l();
      const u = a instanceof Error ? a : this.reason;
      n.abort(
        u instanceof N ? u : new Vs(u instanceof Error ? u.message : u)
      );
    }
  };
  let r = e && setTimeout(() => {
    r = null, s(new N(`timeout of ${e}ms exceeded`, N.ETIMEDOUT));
  }, e);
  const l = () => {
    t && (r && clearTimeout(r), r = null, t.forEach((a) => {
      const u = S.getSafeProp(a, "unsubscribe");
      S.isFunction(u) ? u.call(a, s) : a.removeEventListener("abort", s);
    }), t = null);
  };
  t.forEach((a) => {
    if (!i) {
      if (a.aborted) {
        s.call(a);
        return;
      }
      a.addEventListener("abort", s, { once: !0 });
    }
  });
  const { signal: o } = n;
  return o.unsubscribe = () => S.asap(l), o;
}, sb = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let i = 0, s;
  for (; i < n; )
    s = i + e, yield t.slice(i, s), i = s;
}, rb = async function* (t, e) {
  for await (const n of lb(t))
    yield* sb(n, e);
}, lb = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: i } = await e.read();
      if (n)
        break;
      yield i;
    }
  } finally {
    await e.cancel();
  }
}, Wf = (t, e, n, i) => {
  const s = rb(t, e);
  let r = 0, l, o = (a) => {
    l || (l = !0, i && i(a));
  };
  return new ReadableStream(
    {
      async pull(a) {
        try {
          const { done: u, value: h } = await s.next();
          if (u) {
            o(), a.close();
            return;
          }
          let c = h.byteLength;
          if (n) {
            let f = r += c;
            n(f);
          }
          a.enqueue(new Uint8Array(h));
        } catch (u) {
          throw o(u), u;
        }
      },
      cancel(a) {
        return o(a), s.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, Ht = `\r
`, Hf = (t) => String(t).replace(/\r\n|\r|\n/g, Ht), Kf = (t) => String(t).replace(
  /[\r\n"]/g,
  (e) => e === "\r" ? "%0D" : e === `
` ? "%0A" : "%22"
), Ui = (t, e) => {
  let n = 0;
  for (let i = 0; i < t.length; i++) {
    const s = t.charCodeAt(i);
    e && (s === 13 || s === 10) ? (s === 13 && t.charCodeAt(i + 1) === 10 && i++, n += 2) : s < 128 ? n++ : s < 2048 ? n += 2 : s >= 55296 && s <= 56319 && t.charCodeAt(i + 1) >= 56320 && t.charCodeAt(i + 1) <= 57343 ? (n += 4, i++) : n += 3;
  }
  return n;
};
class $r extends TypeError {
  constructor(e, n) {
    super(e), this.name = "FormDataError", this.reason = n;
  }
}
function ob(t, e, n, i, s) {
  if (!S.isFunction(e))
    throw new $r("Blob is not supported", "blob");
  if (!S.isString(s) || !/^[A-Za-z0-9'()+_,./:=? -]{1,70}$/.test(s) || / $/.test(s))
    throw new $r("Invalid multipart boundary", "boundary");
  const r = "--" + s + "--" + Ht;
  let l = r.length;
  const o = [], a = (h) => {
    if (l + h > n) throw i();
  };
  a(0);
  for (const [h, c] of t) {
    const f = S.isString(c), m = f ? Ui(c, !0) : c.size;
    if (!Number.isFinite(m) || m < 0)
      throw new $r("Unsupported FormData part size", "part");
    a(
      m + Ui(h, !0) + (!f && c.name ? Ui(c.name, !1) : 0) + (!f && c.type ? Ui(c.type, !1) : 0)
    );
    let w = "--" + s + Ht + 'Content-Disposition: form-data; name="' + Kf(Hf(h)) + '"';
    f || (w += '; filename="' + Kf(S.isString(c.name) ? c.name : "blob") + '"' + Ht + "Content-Type: " + String(c.type || "application/octet-stream").replace(/[\r\n]/g, "")), w += Ht + Ht;
    const y = Ui(w, !1) + m + Ht.length;
    a(y), l += y, o.push({ header: w, value: c, isString: f });
  }
  const u = [];
  for (const h of o)
    u.push(h.header, h.isString ? Hf(h.value) : h.value, Ht);
  return u.push(r), new e(u, { type: "multipart/form-data; boundary=" + s });
}
function ab(t, e, n, i, s) {
  if (!S.isFunction(e))
    throw new N("Blob is not supported", N.ERR_NOT_SUPPORT);
  if (s === void 0)
    if (S.isFunction(ue.generateString))
      s = "axios-" + ue.generateString(36, "0123456789abcdef");
    else {
      const r = S.global.crypto;
      if (!r || !S.isFunction(r.getRandomValues))
        throw new N("Random byte generation is not supported", N.ERR_NOT_SUPPORT);
      const l = new Uint8Array(18);
      r.getRandomValues(l), s = "axios-" + Array.from(l, (o) => ("0" + o.toString(16)).slice(-2)).join("");
    }
  try {
    return ob(t, e, n, i, s);
  } catch (r) {
    if (r instanceof $r) {
      const l = r.reason === "boundary" ? N.ERR_BAD_OPTION_VALUE : N.ERR_BAD_REQUEST;
      throw new N(r.message, l);
    }
    throw r;
  }
}
const Xf = (t) => t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102, Mv = (t, e, n) => e + 2 < n && Xf(t.charCodeAt(e + 1)) && Xf(t.charCodeAt(e + 2)), qf = (t) => t <= 57 ? t - 48 : (t & 223) - 55, ub = (t) => t >= 65 && t <= 90 || // A-Z
t >= 97 && t <= 122 || // a-z
t >= 48 && t <= 57 || // 0-9
t === 43 || // +
t === 47 || // /
t === 45 || // - (base64url)
t === 95, hb = (t) => t === 9 || t === 10 || t === 12 || t === 13 || t === 32, cb = (t) => {
  const e = Math.floor(t / 4), n = t % 4;
  return e * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, fb = (t) => {
  const e = t.length;
  let n = 0;
  return e > 0 && t.charCodeAt(e - 1) === 61 && (n++, e > 1 && t.charCodeAt(e - 2) === 61 && n++), Math.floor((e - n) * 3 / 4);
}, db = (t) => {
  const e = t.length;
  let n = 0, i = 0, s = !1;
  for (let r = 0; r < e; r++) {
    let l = t.charCodeAt(r);
    if (l === 37 && Mv(t, r, e) && (l = qf(t.charCodeAt(r + 1)) * 16 + qf(t.charCodeAt(r + 2)), r += 2), !hb(l)) {
      if (l === 61) {
        i++;
        continue;
      }
      if (!ub(l) || i > 0) {
        s = !0;
        continue;
      }
      n++;
    }
  }
  return s || i > 2 || i > 0 && (n + i) % 4 !== 0 || n % 4 === 1 ? fb(t) : cb(n);
}, pb = (t, e, n) => {
  if (!t || typeof t != "string" || !/^data:/i.test(t)) return 0;
  const i = t.indexOf(",");
  if (i < 0) return 0;
  const s = t.slice(5, i), r = t.slice(i + 1);
  if (n.test(s))
    return e(r);
  let o = 0;
  for (let a = 0, u = r.length; a < u; a++) {
    const h = r.charCodeAt(a);
    if (h === 37 && Mv(r, a, u))
      o += 1, a += 2;
    else if (h < 128)
      o += 1;
    else if (h < 2048)
      o += 2;
    else if (h >= 55296 && h <= 56319 && a + 1 < u) {
      const c = r.charCodeAt(a + 1);
      c >= 56320 && c <= 57343 ? (o += 4, a++) : o += 3;
    } else
      o += 3;
  }
  return o;
};
function mb(t) {
  const e = typeof t == "string" ? t.indexOf("#") : -1;
  return pb(
    e === -1 ? t : t.slice(0, e),
    db,
    /; *base64[\t\n\f\r ]*$/i
  );
}
const gh = "1.21.0", Qf = 64 * 1024, Jf = {
  cache: "default",
  redirect: "follow",
  referrer: "about:client",
  referrerPolicy: "",
  mode: "cors",
  integrity: "",
  keepalive: !1,
  priority: "auto",
  window: null
}, { isFunction: yr } = S, vb = (t) => encodeURIComponent(t).replace(
  /%([0-9A-F]{2})/gi,
  (e, n) => String.fromCharCode(parseInt(n, 16))
), Gf = (t) => {
  if (!S.isString(t))
    return t;
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}, wr = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, gb = (t) => {
  const e = t.indexOf("://");
  let n = t;
  return e !== -1 && (n = n.slice(e + 3)), n.includes("@") || n.includes(":");
}, yb = (t) => {
  const e = S.global !== void 0 && S.global !== null ? S.global : globalThis, { ReadableStream: n, TextEncoder: i } = e;
  t = S.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: e.Request,
      Response: e.Response,
      Blob: e.Blob
    },
    t
  );
  const s = S.hasOwnProp(t, "fetch") ? t.fetch : void 0, { Request: r, Response: l, Blob: o } = t, a = s ? yr(s) : typeof fetch == "function", u = yr(r), h = yr(l);
  if (!a)
    return !1;
  const c = a && yr(n), f = a && (typeof i == "function" ? /* @__PURE__ */ ((v) => (E) => v.encode(E))(new i()) : async (v) => new Uint8Array(await new r(v).arrayBuffer())), m = u && c && wr(() => {
    let v = !1;
    const E = new r(ue.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return v = !0, "half";
      }
    }), _ = E.headers.has("Content-Type");
    return E.body != null && E.body.cancel(), v && !_;
  }), w = h && c && wr(() => S.isReadableStream(new l("").body)), y = Object.assign(/* @__PURE__ */ Object.create(null), Jf);
  u && !wr(() => new r(ue.origin, y)) && (delete y.cache, wr(() => new r(ue.origin, y)) || (y.cache = Jf.cache));
  const b = {
    stream: w && ((v) => v.body)
  };
  a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((v) => {
    !b[v] && (b[v] = (E, _) => {
      let k = E && E[v];
      if (k)
        return k.call(E);
      throw new N(
        `Response type '${v}' is not supported`,
        N.ERR_NOT_SUPPORT,
        _
      );
    });
  });
  const g = async (v) => {
    if (v == null)
      return 0;
    if (S.isBlob(v))
      return v.size;
    if (S.isArrayBufferView(v) || S.isArrayBuffer(v))
      return v.byteLength;
    if (S.isURLSearchParams(v) && (v = v + ""), S.isString(v))
      return (await f(v)).byteLength;
  }, p = async (v, E) => {
    const _ = S.toFiniteNumber(v.getContentLength());
    return _ ?? g(E);
  };
  return async (v) => {
    let {
      url: E,
      method: _,
      data: k,
      signal: C,
      cancelToken: x,
      timeout: T,
      onDownloadProgress: O,
      onUploadProgress: F,
      responseType: K,
      headers: ne,
      withCredentials: st = "same-origin",
      fetchOptions: jt,
      maxContentLength: he,
      maxBodyLength: qe,
      maxRedirects: R
    } = Cv(v);
    const L = S.isNumber(he) && he > -1, D = S.isNumber(qe) && qe > -1, j = (U) => S.hasOwnProp(v, U) ? v[U] : void 0;
    let se = s || fetch;
    K = K ? (K + "").toLowerCase() : "text";
    let Ve = ib(
      [C, x && x.toAbortSignal()],
      T
    ), X = null;
    const rt = Ve && Ve.unsubscribe && (() => {
      Ve.unsubscribe();
    });
    let Me, gt = null, Il = null;
    const jl = () => new N(
      "Request body larger than maxBodyLength limit",
      N.ERR_BAD_REQUEST,
      v,
      X
    );
    try {
      let U;
      const Qe = j("auth");
      if (Qe) {
        const $ = S.getSafeProp(Qe, "username") || "", Ee = S.getSafeProp(Qe, "password") || "";
        U = {
          username: $,
          password: Ee
        };
      }
      let Ie;
      if (gb(E)) {
        if (Ie = new URL(E, ue.origin), !U && (Ie.username || Ie.password)) {
          const $ = Gf(Ie.username), Ee = Gf(Ie.password);
          U = {
            username: $,
            password: Ee
          };
        }
        (Ie.username || Ie.password) && (Ie.username = "", Ie.password = "", E = Ie.href);
      }
      if (U && (ne.delete("authorization"), ne.set(
        "Authorization",
        "Basic " + btoa(vb((U.username || "") + ":" + (U.password || "")))
      )), L && Ie && Ie.protocol === "data:" && mb(Ie.href) > he)
        throw new N(
          "maxContentLength size of " + he + " exceeded",
          N.ERR_BAD_RESPONSE,
          v,
          X
        );
      const Is = S.isSpecCompliantForm(k) && de.from(j("headers")).getContentType();
      let js;
      if (S.isString(Is) && /^multipart\/form-data(?:\s*;|$)/i.test(Is.trim())) {
        const $ = de.parseParameters(Is);
        S.hasOwnProp($, "boundary") && (js = $.boundary);
      }
      if (S.isSpecCompliantForm(k) && _ !== "get" && _ !== "head" && (D || F && m || js !== void 0) && (k = ab(
        k,
        o,
        D ? qe : 1 / 0,
        jl,
        js
      ), ne.setContentType(js === void 0 ? k.type : Is), Me = k.size), D && _ !== "get" && _ !== "head") {
        const $ = await g(k);
        if (typeof $ == "number" && isFinite($) && (Me = $, $ > qe))
          throw jl();
      }
      const Us = D && (S.isReadableStream(k) || S.isStream(k)), wh = ($, Ee, Un) => Wf(
        $,
        Qf,
        (gn) => {
          if (D && gn > qe)
            throw gt = jl();
          Ee && Ee(gn);
        },
        Un
      );
      if (m && _ !== "get" && _ !== "head" && (F || Us)) {
        if (Me = Me ?? await p(ne, k), Me !== 0 || Us) {
          let $ = new r(E, {
            method: "POST",
            body: k,
            duplex: "half"
          }), Ee;
          if (S.isFormData(k) && (Ee = $.headers.get("content-type")) && ne.setContentType(Ee), $.body) {
            const [Un, gn] = F && Ff(
              Me,
              dl(Bf(F))
            ) || [];
            k = wh($.body, Un, gn);
          }
        }
      } else if (Us && !u && c && _ !== "get" && _ !== "head")
        k = wh(k);
      else if (Us && u && !m && _ !== "get" && _ !== "head")
        throw new N(
          "Stream request bodies are not supported by the current fetch implementation",
          N.ERR_NOT_SUPPORT,
          v,
          X
        );
      S.isString(st) || (st = st ? "include" : "omit");
      const $v = u && "credentials" in r.prototype;
      if (S.isFormData(k)) {
        const $ = ne.getContentType();
        $ && /^multipart\/form-data/i.test($) && !/boundary=/i.test($) && ne.delete("content-type");
      }
      ne.set("User-Agent", "axios/" + gh, !1);
      const lt = jt == null ? jt : Object.assign(/* @__PURE__ */ Object.create(null), jt);
      lt && (delete lt.body, delete lt.headers, delete lt.method, delete lt.signal, delete lt.duplex, delete lt.credentials);
      const xt = Object.assign(/* @__PURE__ */ Object.create(null), lt, {
        signal: Ve,
        method: _.toUpperCase(),
        headers: av(ne.normalize()),
        body: k,
        duplex: "half",
        credentials: $v ? st : void 0
      });
      u && (S.forEach(y, ($, Ee) => {
        xt[Ee] === void 0 && (xt[Ee] = $);
      }), xt.signal === void 0 && (xt.signal = null), xt.body === void 0 && (xt.body = null)), R === 0 && (xt.redirect = "manual", lt && (lt.redirect = "manual")), X = u && new r(E, xt);
      let Ct = await (u ? se(X, lt) : se(E, xt));
      const Sh = de.from(Ct.headers);
      if (L) {
        const $ = S.toFiniteNumber(Sh.getContentLength());
        if ($ != null && $ > he)
          throw new N(
            "maxContentLength size of " + he + " exceeded",
            N.ERR_BAD_RESPONSE,
            v,
            X
          );
      }
      const Ul = w && (K === "stream" || K === "response");
      if (w && Ct.body && (O || L || Ul && rt)) {
        const $ = {};
        ["status", "statusText", "headers"].forEach((Ri) => {
          $[Ri] = Ct[Ri];
        });
        const Ee = S.toFiniteNumber(Sh.getContentLength()), [Un, gn] = O && Ff(
          Ee,
          dl(Bf(O), !0)
        ) || [];
        let Eh = 0;
        const Av = (Ri) => {
          if (L && (Eh = Ri, Eh > he))
            throw Il = new N(
              "maxContentLength size of " + he + " exceeded",
              N.ERR_BAD_RESPONSE,
              v,
              X
            );
          Un && Un(Ri);
        };
        Ct = new l(
          Wf(Ct.body, Qf, Av, () => {
            gn && gn(), rt && rt();
          }),
          $
        );
      }
      K = K || "text";
      let Mt = await b[S.findKey(b, K) || "text"](
        Ct,
        v
      );
      if (L && !w && !Ul) {
        let $;
        if (Mt != null && (typeof Mt.byteLength == "number" ? $ = Mt.byteLength : typeof Mt.size == "number" ? $ = Mt.size : typeof Mt == "string" && ($ = typeof i == "function" ? new i().encode(Mt).byteLength : Mt.length)), typeof $ == "number" && $ > he)
          throw new N(
            "maxContentLength size of " + he + " exceeded",
            N.ERR_BAD_RESPONSE,
            v,
            X
          );
      }
      return !Ul && rt && rt(), await new Promise(($, Ee) => {
        Ev($, Ee, {
          data: Mt,
          headers: de.from(Ct.headers),
          status: Ct.status,
          statusText: Ct.statusText,
          config: v,
          request: X
        });
      });
    } catch (U) {
      if (rt && rt(), Ve && Ve.aborted && Ve.reason instanceof N) {
        const Qe = Ve.reason;
        throw Qe.config = v, X && (Qe.request = X), U !== Qe && Object.defineProperty(Qe, "cause", {
          __proto__: null,
          value: U,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), Qe;
      }
      if (gt)
        throw X && !gt.request && (gt.request = X), gt;
      if (Il)
        throw Il;
      if (U instanceof N)
        throw X && !U.request && (U.request = X), U;
      if (U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message)) {
        const Qe = new N(
          "Network Error",
          N.ERR_NETWORK,
          v,
          X,
          U && U.response
        );
        throw Object.defineProperty(Qe, "cause", {
          __proto__: null,
          value: U.cause || U,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), Qe;
      }
      throw N.from(U, U && U.code, v, X, U && U.response);
    }
  };
}, wb = /* @__PURE__ */ new Map(), zv = (t) => {
  const e = /* @__PURE__ */ Object.create(null), n = t && S.hasOwnProp(t, "env") && t.env;
  ["fetch", "Request", "Response", "Blob"].forEach((m) => {
    n && S.hasOwnProp(n, m) && (e[m] = n[m]);
  });
  const { fetch: i, Request: s, Response: r, Blob: l } = e, o = [s, r, i, l];
  let a = o.length, u = a, h, c, f = wb;
  for (; u--; )
    h = o[u], c = f.get(h), c === void 0 && f.set(h, c = u ? /* @__PURE__ */ new Map() : yb(e)), f = c;
  return c;
};
zv();
const yh = {
  http: EE,
  xhr: nb,
  fetch: {
    get: zv
  }
};
S.forEach(yh, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { __proto__: null, value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { __proto__: null, value: e });
  }
});
const Yf = (t) => `- ${t}`, Sb = (t) => S.isFunction(t) || t === null || t === !1;
function Eb(t, e) {
  t = S.isArray(t) ? t : [t];
  const { length: n } = t;
  let i, s;
  const r = {};
  for (let l = 0; l < n; l++) {
    i = t[l];
    let o;
    if (s = i, !Sb(i) && (s = yh[(o = String(i)).toLowerCase()], s === void 0))
      throw new N(`Unknown adapter '${o}'`);
    if (s && (S.isFunction(s) || (s = s.get(e))))
      break;
    r[o || "#" + l] = s;
  }
  if (!s) {
    const l = Object.entries(r).map(
      ([a, u]) => `adapter ${a} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let o = n ? l.length > 1 ? `since :
` + l.map(Yf).join(`
`) : " " + Yf(l[0]) : "as no adapter specified";
    throw new N(
      "There is no suitable adapter to dispatch the request " + o,
      N.ERR_NOT_SUPPORT
    );
  }
  return s;
}
const Nv = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Eb,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: yh
};
function jo(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Vs(null, t);
}
function Zf(t) {
  return Math.max(0, Date.now() - t);
}
function Uo(t) {
  const e = S.toSafeFlatObject(t);
  jo(e), e.headers = de.from(S.getSafeProp(e, "headers")), e.data = Bo.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1);
  const n = Nv.getAdapter(e.adapter || Bs.adapter, e), i = Date.now();
  return n(e).then(
    function(r) {
      jo(e), r.duration = Zf(i), e.response = r;
      try {
        r.data = Bo.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = de.from(r.headers), r;
    },
    function(r) {
      if (!Sv(r) && (jo(e), r && r.response)) {
        r.response.duration = Zf(i), e.response = r.response;
        try {
          r.response.data = Bo.call(
            e,
            e.transformResponse,
            r.response
          );
        } finally {
          delete e.response;
        }
        r.response.headers = de.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const Vl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Vl[t] = function(i) {
    return typeof i === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const ed = {};
Vl.transitional = function(e, n, i) {
  function s(r, l) {
    return "[Axios v" + gh + "] Transitional option '" + r + "'" + l + (i ? ". " + i : "");
  }
  return (r, l, o) => {
    if (e === !1)
      throw new N(
        s(l, " has been removed" + (n ? " in " + n : "")),
        N.ERR_DEPRECATED
      );
    return n && !ed[l] && (ed[l] = !0, console.warn(
      s(
        l,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(r, l, o) : !0;
  };
};
Vl.spelling = function(e) {
  return (n, i) => (console.warn(`${i} is likely a misspelling of ${e}`), !0);
};
function bb(t, e, n) {
  if (typeof t != "object" || t === null)
    throw new N("options must be an object", N.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(t);
  let s = i.length;
  for (; s-- > 0; ) {
    const r = i[s], l = Object.prototype.hasOwnProperty.call(e, r) ? e[r] : void 0;
    if (l) {
      const o = t[r], a = o === void 0 || l(o, r, t);
      if (a !== !0)
        throw new N(
          "option " + r + " must be " + a,
          N.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new N("Unknown option " + r, N.ERR_BAD_OPTION);
  }
}
const Ar = {
  assertOptions: bb,
  validators: Vl
}, pe = Ar.validators, Wo = (t) => {
  if (t == null || S.isPlainObject(t) || t instanceof de)
    return !0;
  try {
    return S.isObject(t) && S.getSafeProp(t, Symbol.toStringTag) === "AxiosHeaders" && [
      "toJSON",
      "set",
      "get",
      "has",
      "delete",
      "clear",
      "normalize",
      "concat",
      "toString",
      Symbol.iterator
    ].every((e) => S.isFunction(S.getSafeProp(t, e)));
  } catch {
    return !1;
  }
};
let zn = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new Df(),
      response: new Df()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (i) {
      if (i instanceof Error)
        try {
          let s = {};
          Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
          const r = s.stack;
          let l = "";
          if (typeof r == "string") {
            const o = r.indexOf(`
`);
            l = o === -1 ? "" : r.slice(o + 1);
          }
          if (!i.stack)
            i.stack = l;
          else if (l) {
            const o = l.indexOf(`
`), a = o === -1 ? -1 : l.indexOf(`
`, o + 1), u = a === -1 ? l : l.slice(a + 1), h = String(i.stack), c = wE(i, h), f = c === -1 ? h : h.slice(0, c), m = c === -1 ? "" : h.slice(c);
            f.endsWith(u) || (i.stack = f + `
` + l + m);
          }
        } catch {
        }
      throw i;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Vn(this.defaults, n);
    const { transitional: i, paramsSerializer: s, headers: r } = n;
    i !== void 0 && Ar.assertOptions(
      i,
      {
        silentJSONParsing: pe.transitional(pe.boolean),
        forcedJSONParsing: pe.transitional(pe.boolean),
        clarifyTimeoutError: pe.transitional(pe.boolean),
        legacyInterceptorReqResOrdering: pe.transitional(pe.boolean),
        advertiseZstdAcceptEncoding: pe.transitional(pe.boolean),
        validateStatusUndefinedResolves: pe.transitional(pe.boolean),
        encodeBasicAuthUsername: pe.transitional(pe.boolean)
      },
      !1
    ), s != null && (S.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ar.assertOptions(
      s,
      {
        encode: pe.function,
        serialize: pe.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (S.hasOwnProp(this.defaults, "allowAbsoluteUrls") && this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ar.assertOptions(
      n,
      {
        baseUrl: pe.spelling("baseURL"),
        withXsrfToken: pe.spelling("withXSRFToken")
      },
      !0
    ), n.method = (S.getSafeProp(n, "method") || S.getSafeProp(this.defaults, "method") || "get").toLowerCase();
    const l = S.getSafeProp(r, "common"), o = S.getSafeProp(r, n.method), a = r && S.merge(
      Wo(l) ? l : void 0,
      Wo(o) ? o : void 0
    );
    r && S.forEach(wv.concat("common"), (b) => {
      Wo(S.getSafeProp(r, b)) && delete r[b];
    }), n.headers = de.concat(a, r);
    const u = [];
    let h = !0;
    this.interceptors.request.forEach(function(g) {
      if (typeof g.runWhen == "function" && g.runWhen(n) === !1)
        return;
      h = h && g.synchronous;
      const p = n.transitional || mh;
      p && p.legacyInterceptorReqResOrdering ? u.unshift(g.fulfilled, g.rejected) : u.push(g.fulfilled, g.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let f, m = 0, w;
    if (!h) {
      const b = [Uo.bind(this), void 0];
      for (b.unshift(...u), b.push(...c), w = b.length, f = Promise.resolve(n); m < w; )
        f = f.then(b[m++], b[m++]);
      return f;
    }
    w = u.length;
    let y = n;
    for (; m < w; ) {
      const b = u[m++], g = u[m++];
      try {
        y = b ? b(y) : y;
      } catch (p) {
        if (!g) {
          f = Promise.reject(p);
          break;
        }
        try {
          const v = g.call(this, p);
          S.isThenable(v) && (f = Promise.resolve(v).then(
            () => Uo.call(this, y)
          ));
        } catch (v) {
          f = Promise.reject(v);
        }
        break;
      }
    }
    if (!f)
      try {
        f = Uo.call(this, y);
      } catch (b) {
        f = Promise.reject(b);
      }
    for (m = 0, w = c.length; m < w; )
      f = f.then(c[m++], c[m++]);
    return f;
  }
  getUri(e) {
    e = Vn(this.defaults, e);
    const n = kv(e.baseURL, e.url, e.allowAbsoluteUrls, e);
    return dv(n, e.params, e.paramsSerializer);
  }
};
S.forEach(["delete", "get", "head", "options"], function(e) {
  zn.prototype[e] = async function(n, i) {
    return this.request(
      Vn(i || {}, {
        method: e,
        url: n,
        data: i && S.hasOwnProp(i, "data") ? i.data : void 0
      })
    );
  };
});
S.forEach(["post", "put", "patch", "query"], function(e) {
  function n(i) {
    return async function(r, l, o) {
      return this.request(
        Vn(o || {}, {
          method: e,
          headers: i ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: r,
          data: l
        })
      );
    };
  }
  zn.prototype[e] = n(), e !== "query" && (zn.prototype[e + "Form"] = n(!0));
});
let _b = class Rv {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(r) {
      n = r;
    });
    const i = this;
    this.promise.then((s) => {
      if (!i._listeners) return;
      let r = i._listeners.length;
      for (; r-- > 0; )
        i._listeners[r](s);
      i._listeners = null;
    }), this.promise.then = (s) => {
      let r;
      const l = new Promise((o) => {
        i.subscribe(o), r = o;
      }).then(s);
      return l.cancel = function() {
        i.unsubscribe(r);
      }, l;
    }, e(function(r, l, o) {
      i.reason || (i.reason = new Vs(r, l, o), n(i.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (i) => {
      e.abort(i);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Rv(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
};
function kb(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function xb(t) {
  return S.isObject(t) && t.isAxiosError === !0;
}
const Fr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  /**
   * @deprecated Use `ContentTooLarge` instead.
   */
  PayloadTooLarge: 413,
  ContentTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  /**
   * @deprecated Use `UnprocessableContent` instead.
   */
  UnprocessableEntity: 422,
  UnprocessableContent: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerReturnsAnUnknownError: 520,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Fr).forEach(([t, e]) => {
  Fr[e] === void 0 && (Fr[e] = t);
});
function Pv(t) {
  const e = new zn(t), n = ev(zn.prototype.request, e);
  return S.extend(n, zn.prototype, e, { allOwnKeys: !0 }), S.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Pv(Vn(t, s));
  }, n;
}
const oe = Pv(Bs);
oe.Axios = zn;
oe.CanceledError = Vs;
oe.CancelToken = _b;
oe.isCancel = Sv;
oe.VERSION = gh;
oe.toFormData = Bl;
oe.AxiosError = N;
oe.Cancel = oe.CanceledError;
oe.all = function(e) {
  return Promise.all(e);
};
oe.spread = kb;
oe.isAxiosError = xb;
oe.mergeConfig = Vn;
oe.AxiosHeaders = de;
oe.formToJSON = (t) => yv(S.isHTMLForm(t) ? new FormData(t) : t);
oe.getAdapter = Nv.getAdapter;
oe.HttpStatusCode = Fr;
oe.default = oe;
const {
  Axios: Qb,
  AxiosError: Jb,
  CanceledError: Gb,
  isCancel: Yb,
  CancelToken: Zb,
  VERSION: e_,
  all: t_,
  Cancel: n_,
  isAxiosError: i_,
  spread: s_,
  toFormData: r_,
  AxiosHeaders: l_,
  HttpStatusCode: o_,
  formToJSON: a_,
  getAdapter: u_,
  mergeConfig: h_,
  create: c_
} = oe;
let Za, oi, td = Promise.resolve(), Cb = 0;
function Mb(t, e) {
  if (Za = t, !oi || (e == null ? void 0 : e.id) !== oi.id) return;
  const n = oi;
  if (oi = null, e.error) {
    const i = new Error(e.error.detail);
    i.response = { status: e.error.status, data: { detail: e.error.detail } }, n.reject(i);
  } else
    n.resolve(e.data);
}
function Sr(t, e, n) {
  const i = td.then(() => new Promise((s, r) => {
    if (n == null || n.throwIfAborted(), !Za) throw new Error("Streamlit is not connected.");
    const l = Date.now() + "-" + ++Cb;
    oi = { id: l, resolve: s, reject: r };
    try {
      Za("request", { id: l, action: t, params: e });
    } catch (o) {
      oi = null, r(o);
    }
  }));
  return td = i.catch(() => {
  }), i;
}
const zb = "http://127.0.0.1:8000".replace(/\/+$/, "");
oe.create({ baseURL: zb });
const Nb = "https://github.com/Zeeshan4511/KronBit#streamlit", Rb = {
  history: (t) => Sr("history", {}, t),
  forecast: (t, e, n) => Sr("forecast", { pred_len: t, n_samples: e }, n),
  evaluation: (t) => Sr("evaluation", {}, t),
  runEvaluation: (t, e) => Sr("runEvaluation", { n_samples: t }, e)
}, mi = Rb;
function Pb(t) {
  var n, i;
  const e = (i = (n = t.response) == null ? void 0 : n.data) == null ? void 0 : i.detail;
  return typeof e == "string" ? e : Array.isArray(e) ? e.map(({ msg: s }) => s).join(" ") : t.response ? "The API returned an error (" + t.response.status + "). Please try again." : "Could not reach the KronBit service. Reconnect to Streamlit and try again.";
}
const Ob = [
  { key: "date", label: "Date (UTC)", format: mt },
  { key: "actual", label: "Actual close", format: xe },
  { key: "predicted", label: "Predicted close", format: xe, className: () => "model-value" },
  { key: "error", label: "Absolute error", format: xe }
], Tb = { key: "date", desc: !1 };
function Lb({ evaluation: t, busy: e, market: n, refresh: i, samples: s, setSamples: r }) {
  var w, y;
  const l = t.data, o = t.pending && t.kind === "run", a = t.pending && !o, u = t.kind === "run" ? t.error : "", h = l == null ? void 0 : l.metrics, c = l == null ? void 0 : l.comparison, f = (w = c == null ? void 0 : c[0]) == null ? void 0 : w.date, m = (y = c == null ? void 0 : c.at(-1)) == null ? void 0 : y.date;
  return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(uh, { eyebrow: "MODEL EVALUATION", title: "Backtest Lab", description: "Compare Kronos predictions with observed closes on a 14-day holdout." }, /* @__PURE__ */ d.createElement("button", { type: "button", className: "secondary-button reload-button", onClick: i, disabled: a || e }, /* @__PURE__ */ d.createElement(Em, { size: 15, className: a ? "spin" : "" }), " Reload saved result")), t.kind === "load" && t.error && /* @__PURE__ */ d.createElement("div", { className: "standalone-notice" }, /* @__PURE__ */ d.createElement(Yt, { error: !0 }, t.error)), /* @__PURE__ */ d.createElement("div", { className: "stat-grid" }, /* @__PURE__ */ d.createElement(Zt, { icon: Pc, label: "Mean absolute error", value: xe(h == null ? void 0 : h.mae), detail: "MAE · USDT" }), /* @__PURE__ */ d.createElement(Zt, { icon: ks, label: "Root mean square error", value: xe(h == null ? void 0 : h.rmse), detail: "RMSE · USDT" }), /* @__PURE__ */ d.createElement(Zt, { icon: ym, label: "Mean absolute % error", value: Ka(h == null ? void 0 : h.mape), detail: "MAPE" }), /* @__PURE__ */ d.createElement(Zt, { icon: yy, label: "Directional accuracy", value: Ka(h == null ? void 0 : h.directional_accuracy), detail: "Matched close-to-close moves" })), /* @__PURE__ */ d.createElement("div", { className: "workspace-grid" }, /* @__PURE__ */ d.createElement(un, { className: "chart-panel" }, /* @__PURE__ */ d.createElement("div", { className: "panel-heading chart-heading" }, /* @__PURE__ */ d.createElement("div", { className: "asset-heading" }, /* @__PURE__ */ d.createElement("span", { className: "model-icon" }, /* @__PURE__ */ d.createElement(ks, { size: 20 })), /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h2", null, "Predicted vs. actual"), /* @__PURE__ */ d.createElement("p", null, f ? mt(f) + " – " + mt(m) : "BTC/USDT daily close"))), l && /* @__PURE__ */ d.createElement("span", { className: "tag" }, l.test_days, " days · ", l.n_samples, " ", l.n_samples === 1 ? "path" : "paths")), c != null && c.length ? /* @__PURE__ */ d.createElement(Gm, { comparison: c }) : /* @__PURE__ */ d.createElement($l, { title: o ? "Running backtest" : a ? "Loading backtest" : "No backtest results", pending: t.pending }, o ? "Kronos is forecasting the holdout window." : "Run a backtest to compare the model with observed prices."), /* @__PURE__ */ d.createElement("div", { className: "chart-footer" }, /* @__PURE__ */ d.createElement("div", { className: "legend" }, /* @__PURE__ */ d.createElement("span", null, /* @__PURE__ */ d.createElement("i", { className: "legend-dot observed" }), " Actual close"), /* @__PURE__ */ d.createElement("span", null, /* @__PURE__ */ d.createElement("i", { className: "legend-dash" }), " Predicted close")), /* @__PURE__ */ d.createElement("span", null, "USDT · UTC"))), /* @__PURE__ */ d.createElement(un, { className: "model-panel" }, /* @__PURE__ */ d.createElement("div", { className: "panel-heading model-heading" }, /* @__PURE__ */ d.createElement("span", { className: "model-icon" }, /* @__PURE__ */ d.createElement(wm, { size: 20 })), /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h2", null, "Backtest controls"), /* @__PURE__ */ d.createElement("p", null, "Evaluate the model on past candles."))), /* @__PURE__ */ d.createElement("form", { className: "model-form", onSubmit: (b) => {
    b.preventDefault(), !e && !a && n.data.length && t.run((g) => mi.runEvaluation(s, g), "run");
  } }, /* @__PURE__ */ d.createElement("div", { className: "field-group" }, /* @__PURE__ */ d.createElement("label", { htmlFor: "samples" }, "Sampling paths"), /* @__PURE__ */ d.createElement(Zm, { value: s, onChange: r, disabled: o }), /* @__PURE__ */ d.createElement("span", { className: "field-help" }, "Choose how many trajectories to average.")), /* @__PURE__ */ d.createElement("button", { type: "submit", className: "primary-button", disabled: e || a || !n.data.length }, o ? /* @__PURE__ */ d.createElement(Qu, { size: 17, className: "spin" }) : /* @__PURE__ */ d.createElement(Sm, { size: 16, fill: "currentColor" }), o ? "Running backtest…" : u ? "Retry backtest" : "Run backtest"), o && /* @__PURE__ */ d.createElement(Yt, null, l ? "The last saved result remains visible during this run." : "Kronos is generating the holdout predictions."), u && /* @__PURE__ */ d.createElement(Yt, { error: !0 }, u), n.error && !n.data.length && /* @__PURE__ */ d.createElement(Yt, { error: !0 }, "Market data is unavailable. Reload the snapshot in Market History.")), /* @__PURE__ */ d.createElement("div", { className: "model-footer" }, /* @__PURE__ */ d.createElement(Pc, { size: 15 }), /* @__PURE__ */ d.createElement("span", null, "Kronos uses candles before the holdout as context. The backend saves the latest result."))), (c == null ? void 0 : c.length) > 0 && /* @__PURE__ */ d.createElement(un, { className: "wide-panel" }, /* @__PURE__ */ d.createElement("div", { className: "panel-heading table-heading" }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h2", null, "Daily comparison"), /* @__PURE__ */ d.createElement("p", null, "Actual and predicted closes · Prices in USDT"))), /* @__PURE__ */ d.createElement(
    hh,
    {
      rows: c.map((b) => ({ ...b, error: Math.abs(b.actual - b.predicted) })),
      columns: Ob,
      initialSort: Tb,
      label: "Backtest comparison"
    }
  ))));
}
const Db = [
  { value: 30, label: "1M" },
  { value: 90, label: "3M" },
  { value: 180, label: "6M" },
  { value: 600, label: "All" }
], $b = [7, 14, 30].map((t) => ({ value: t, label: t + "D" })), Ab = { key: "timestamp", desc: !0 }, Fb = { key: "timestamp", desc: !1 };
function Ov({ market: t }) {
  const e = t.at(-1), n = t.at(-2), i = Qm(e == null ? void 0 : e.close, n == null ? void 0 : n.close);
  return /* @__PURE__ */ d.createElement("div", { className: "stat-grid" }, /* @__PURE__ */ d.createElement(
    Zt,
    {
      icon: pm,
      label: "Last daily close",
      value: xe(e == null ? void 0 : e.close),
      detail: e ? "USDT · " + mt(e.timestamp) : "USDT per BTC"
    }
  ), /* @__PURE__ */ d.createElement(
    Zt,
    {
      icon: ky,
      label: "Daily change",
      value: qm(i),
      detail: "Versus prior close",
      tone: i == null ? "" : i >= 0 ? "positive" : "negative"
    }
  ), /* @__PURE__ */ d.createElement(
    Zt,
    {
      icon: oy,
      label: "Daily range",
      value: e ? xe(e.high - e.low) : "—",
      detail: e ? xe(e.low) + " – " + xe(e.high) + " USDT" : "High minus low · USDT"
    }
  ), /* @__PURE__ */ d.createElement(Zt, { icon: wm, label: "Daily volume", value: ah(e == null ? void 0 : e.volume), detail: "BTC traded in the last candle" }));
}
function Tv({ market: t, forecast: e, compact: n = !1 }) {
  const [i, s] = W.useState(90), [r, l] = W.useState("candles"), o = W.useMemo(() => t.data.slice(-i), [t.data, i]), a = o.at(-1), u = e && e.last_date === (a == null ? void 0 : a.timestamp) && e.last_close === (a == null ? void 0 : a.close) ? e : null;
  return /* @__PURE__ */ d.createElement(un, { className: "chart-panel" }, /* @__PURE__ */ d.createElement("div", { className: "panel-heading chart-heading" }, /* @__PURE__ */ d.createElement("div", { className: "asset-heading" }, /* @__PURE__ */ d.createElement("span", { className: "asset-icon" }, /* @__PURE__ */ d.createElement(pm, { size: 22 })), /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h2", null, "BTC / USDT"), /* @__PURE__ */ d.createElement("p", null, "Bitcoin ", /* @__PURE__ */ d.createElement("span", { className: "separator" }, "·"), " Daily candles"))), /* @__PURE__ */ d.createElement("div", { className: "chart-tools" }, /* @__PURE__ */ d.createElement("div", { className: "segmented mode-switch", role: "group", "aria-label": "Chart type" }, /* @__PURE__ */ d.createElement("button", { type: "button", "aria-label": "Candlesticks", title: "Candlesticks", "aria-pressed": r === "candles", onClick: () => l("candles") }, /* @__PURE__ */ d.createElement(vm, { size: 16 })), /* @__PURE__ */ d.createElement("button", { type: "button", "aria-label": "Closing price line", title: "Closing price line", "aria-pressed": r === "line", onClick: () => l("line") }, /* @__PURE__ */ d.createElement(Ey, { size: 16 }))), /* @__PURE__ */ d.createElement(Ym, { label: "History range", options: Db, value: i, onChange: s }))), t.error && /* @__PURE__ */ d.createElement("div", { className: "panel-inset" }, /* @__PURE__ */ d.createElement(Yt, { error: !0 }, t.error)), o.length ? /* @__PURE__ */ d.createElement(Gm, { history: o, forecast: u, mode: r }) : /* @__PURE__ */ d.createElement($l, { title: t.pending ? "Loading daily candles" : "Market history unavailable", pending: t.pending }, t.pending ? "Reading the latest cached BTC/USDT snapshot." : "Use Reload snapshot to request market history again."), /* @__PURE__ */ d.createElement("div", { className: "chart-footer" }, /* @__PURE__ */ d.createElement("div", { className: "legend" }, /* @__PURE__ */ d.createElement("span", null, /* @__PURE__ */ d.createElement("i", { className: "legend-dot observed" }), " Observed price"), /* @__PURE__ */ d.createElement("span", null, /* @__PURE__ */ d.createElement("i", { className: "legend-dot volume" }), " Volume"), u && /* @__PURE__ */ d.createElement("span", null, /* @__PURE__ */ d.createElement("i", { className: "legend-dash" }), " Kronos forecast")), !n && /* @__PURE__ */ d.createElement("span", null, o.length ? o.length + " observed candles" : "UTC daily intervals"), n && /* @__PURE__ */ d.createElement("span", null, "USDT · UTC")), e && o.length > 0 && !u && /* @__PURE__ */ d.createElement("div", { className: "panel-inset" }, /* @__PURE__ */ d.createElement(Yt, null, "This forecast starts from ", mt(e.last_date), ". Run a new forecast to overlay it on the current snapshot.")));
}
function Bb({ forecast: t, busy: e, ready: n, lastDate: i, inputs: s, updateInputs: r }) {
  const { horizon: l, samples: o } = s, a = (f) => r((m) => ({ ...m, horizon: f })), u = (f) => r((m) => ({ ...m, samples: f })), h = Number.isInteger(Number(l)) && Number(l) >= 1 && Number(l) <= 168, c = (f) => {
    f.preventDefault(), h && n && !e && t.run((m) => mi.forecast(Number(l), o, m));
  };
  return /* @__PURE__ */ d.createElement(un, { className: "model-panel" }, /* @__PURE__ */ d.createElement("div", { className: "panel-heading model-heading" }, /* @__PURE__ */ d.createElement("span", { className: "model-icon" }, /* @__PURE__ */ d.createElement(gy, { size: 20 })), /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h2", null, "Forecast controls"), /* @__PURE__ */ d.createElement("p", null, "Configure a Kronos inference run."))), /* @__PURE__ */ d.createElement("form", { className: "model-form", onSubmit: c }, /* @__PURE__ */ d.createElement("div", { className: "field-group" }, /* @__PURE__ */ d.createElement("label", { htmlFor: "horizon" }, "Forecast horizon ", /* @__PURE__ */ d.createElement("span", { className: "field-meta" }, "DAYS")), /* @__PURE__ */ d.createElement(Ym, { label: "Horizon presets", options: $b, value: Number(l), onChange: a }), /* @__PURE__ */ d.createElement(
    "input",
    {
      id: "horizon",
      type: "number",
      min: "1",
      max: "168",
      step: "1",
      required: !0,
      value: l,
      "aria-describedby": "horizon-help",
      onChange: (f) => a(f.target.value)
    }
  ), /* @__PURE__ */ d.createElement("span", { id: "horizon-help", className: "field-help" }, "1–168 daily candles")), /* @__PURE__ */ d.createElement("div", { className: "field-group" }, /* @__PURE__ */ d.createElement("label", { htmlFor: "samples" }, "Sampling paths"), /* @__PURE__ */ d.createElement(Zm, { value: o, onChange: u }), /* @__PURE__ */ d.createElement("span", { className: "field-help" }, "More paths take longer to average.")), /* @__PURE__ */ d.createElement("button", { type: "submit", className: "primary-button", disabled: !h || !n || e }, t.pending ? /* @__PURE__ */ d.createElement(Qu, { size: 17, className: "spin" }) : /* @__PURE__ */ d.createElement(Sm, { size: 16, fill: "currentColor" }), t.pending ? "Generating forecast…" : t.error ? "Retry forecast" : "Run forecast"), t.pending && /* @__PURE__ */ d.createElement(Yt, null, "Kronos is sampling future candles. Longer horizons may take a while."), t.error && /* @__PURE__ */ d.createElement(Yt, { error: !0 }, t.error)), /* @__PURE__ */ d.createElement("div", { className: "model-footer" }, /* @__PURE__ */ d.createElement(Sy, { size: 15 }), /* @__PURE__ */ d.createElement("span", null, i ? "Forecasts start after " + mt(i) + ", the last available candle." : "Load the market snapshot to start a forecast.")));
}
function Vb({ result: t }) {
  const e = t.forecast.at(-1), n = Qm(e == null ? void 0 : e.close, t.last_close);
  return /* @__PURE__ */ d.createElement(un, { className: "wide-panel" }, /* @__PURE__ */ d.createElement("div", { className: "panel-heading results-heading" }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("div", { className: "eyebrow" }, "MODEL OUTPUT"), /* @__PURE__ */ d.createElement("h2", null, "Forecast results"), /* @__PURE__ */ d.createElement("p", null, t.forecast.length, " daily predictions from the ", mt(t.last_date), " close.")), /* @__PURE__ */ d.createElement("span", { className: "tag forecast-tag" }, qm(n), " at final close")), /* @__PURE__ */ d.createElement(hh, { rows: t.forecast, columns: Jm, initialSort: Fb, label: "Forecast candles" }));
}
function Lv({ market: t, preview: e = !1 }) {
  const n = e ? t.data.slice(-5) : t.data;
  return /* @__PURE__ */ d.createElement(un, null, /* @__PURE__ */ d.createElement("div", { className: "panel-heading table-heading" }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h2", null, e ? "Recent candles" : "Historical candles"), /* @__PURE__ */ d.createElement("p", null, "Observed daily OHLCV ", /* @__PURE__ */ d.createElement("span", { className: "separator" }, "·"), " Prices in USDT")), e && /* @__PURE__ */ d.createElement("a", { className: "text-link", href: "#market" }, "View history ", /* @__PURE__ */ d.createElement(uy, { size: 15 }))), n.length ? /* @__PURE__ */ d.createElement(hh, { rows: n, columns: Jm, initialSort: Ab, search: !e, label: "Historical candles" }) : /* @__PURE__ */ d.createElement($l, { title: t.pending ? "Loading candles" : "No candles to display", pending: t.pending }, "Data comes from the backend market snapshot."));
}
function Ib({ market: t }) {
  const e = t.at(-1);
  return /* @__PURE__ */ d.createElement(un, { className: "dataset-panel" }, /* @__PURE__ */ d.createElement("div", { className: "panel-heading model-heading" }, /* @__PURE__ */ d.createElement("span", { className: "model-icon neutral" }, /* @__PURE__ */ d.createElement(ks, { size: 19 })), /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h2", null, "Data & model"), /* @__PURE__ */ d.createElement("p", null, "Inputs behind this workspace."))), /* @__PURE__ */ d.createElement("dl", null, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("dt", null, "Data source"), /* @__PURE__ */ d.createElement("dd", null, "Binance snapshot")), /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("dt", null, "Interval"), /* @__PURE__ */ d.createElement("dd", null, "1 day · UTC")), /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("dt", null, "Model"), /* @__PURE__ */ d.createElement("dd", null, "Kronos-small")), /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("dt", null, "Context"), /* @__PURE__ */ d.createElement("dd", null, "Up to 512 candles"))), /* @__PURE__ */ d.createElement("div", { className: "model-footer" }, /* @__PURE__ */ d.createElement(mm, { size: 15 }), /* @__PURE__ */ d.createElement("span", null, "Snapshot as of ", mt(e == null ? void 0 : e.timestamp))));
}
function Dv({ market: t }) {
  return /* @__PURE__ */ d.createElement(
    "button",
    {
      className: "secondary-button reload-button",
      type: "button",
      disabled: t.pending,
      onClick: () => t.run(mi.history)
    },
    /* @__PURE__ */ d.createElement(Em, { size: 15, className: t.pending ? "spin" : "" }),
    " ",
    t.pending ? "Loading snapshot" : "Reload snapshot"
  );
}
function jb({ market: t, forecast: e, busy: n, inputs: i, updateInputs: s }) {
  const r = t.data.at(-1);
  return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(uh, { eyebrow: "RESEARCH WORKSPACE", title: "Bitcoin Forecast", description: "Explore daily BTC/USDT price action and project future candles with Kronos." }, /* @__PURE__ */ d.createElement(Dv, { market: t })), /* @__PURE__ */ d.createElement(Ov, { market: t.data }), /* @__PURE__ */ d.createElement("div", { className: "workspace-grid" }, /* @__PURE__ */ d.createElement(Tv, { market: t, forecast: e.data, compact: !0 }), /* @__PURE__ */ d.createElement(
    Bb,
    {
      forecast: e,
      busy: n,
      ready: !!r,
      lastDate: r == null ? void 0 : r.timestamp,
      inputs: i,
      updateInputs: s
    }
  ), e.data && /* @__PURE__ */ d.createElement(Vb, { result: e.data }), /* @__PURE__ */ d.createElement(Lv, { market: t, preview: !0 }), /* @__PURE__ */ d.createElement(Ib, { market: t.data })));
}
function Ub({ market: t }) {
  var i, s;
  const e = (i = t.data[0]) == null ? void 0 : i.timestamp, n = (s = t.data.at(-1)) == null ? void 0 : s.timestamp;
  return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(uh, { eyebrow: "MARKET DATA", title: "Market History", description: "Inspect the daily BTC/USDT candles used by Kronos." }, /* @__PURE__ */ d.createElement(Dv, { market: t })), /* @__PURE__ */ d.createElement(Ov, { market: t.data }), /* @__PURE__ */ d.createElement("div", { className: "page-stack" }, /* @__PURE__ */ d.createElement(Tv, { market: t }), e && /* @__PURE__ */ d.createElement("div", { className: "dataset-range" }, /* @__PURE__ */ d.createElement(mm, { size: 16 }), " Snapshot coverage · ", mt(e), " through ", mt(n), " · ", t.data.length, " candles"), /* @__PURE__ */ d.createElement(Lv, { market: t })));
}
function Ho(t = null) {
  const [e, n] = W.useState({ data: t, pending: !1, kind: "", error: "" }), i = W.useRef(null), s = W.useCallback(async (r, l = "load") => {
    if (i.current) return;
    const o = new AbortController();
    i.current = o, n((a) => ({ ...a, pending: !0, kind: l, error: "" }));
    try {
      const a = await r(o.signal);
      o.signal.aborted || n({ data: a, pending: !1, kind: l, error: "" });
    } catch (a) {
      o.signal.aborted || n((u) => ({ ...u, pending: !1, kind: l, error: Pb(a) }));
    } finally {
      i.current === o && (i.current = null);
    }
  }, []);
  return W.useEffect(() => () => {
    var r;
    (r = i.current) == null || r.abort(), i.current = null;
  }, []), { ...e, run: s };
}
const pl = {
  forecast: { label: "Forecast", icon: ym },
  market: { label: "Market History", icon: vm },
  backtest: { label: "Backtest Lab", icon: wy }
};
function nd() {
  const t = window.location.hash.slice(1);
  return Object.hasOwn(pl, t) ? t : "forecast";
}
function Wb({ route: t, open: e, close: n }) {
  return /* @__PURE__ */ d.createElement(d.Fragment, null, e && /* @__PURE__ */ d.createElement("button", { className: "sidebar-backdrop", type: "button", "aria-label": "Close navigation", onClick: n }), /* @__PURE__ */ d.createElement("aside", { id: "sidebar", className: "sidebar" + (e ? " open" : ""), "aria-label": "Workspace sidebar", onKeyDown: (i) => {
    i.key === "Escape" && n();
  } }, /* @__PURE__ */ d.createElement("div", { className: "brand-row" }, /* @__PURE__ */ d.createElement("a", { className: "brand", href: "#forecast", onClick: n, "aria-label": "KronBit forecast home" }, /* @__PURE__ */ d.createElement("span", { className: "brand-icon" }, /* @__PURE__ */ d.createElement(ks, { size: 23, strokeWidth: 2.6 })), /* @__PURE__ */ d.createElement("span", null, /* @__PURE__ */ d.createElement("strong", null, "Kron", /* @__PURE__ */ d.createElement("span", null, "Bit")), /* @__PURE__ */ d.createElement("small", null, "RESEARCH TERMINAL"))), /* @__PURE__ */ d.createElement("button", { type: "button", className: "icon-button sidebar-close", "aria-label": "Close navigation", onClick: n }, /* @__PURE__ */ d.createElement(xy, { size: 19 }))), /* @__PURE__ */ d.createElement("div", { className: "nav-section" }, /* @__PURE__ */ d.createElement("div", { className: "nav-label" }, "WORKSPACE"), /* @__PURE__ */ d.createElement("nav", { "aria-label": "Workspace" }, Object.entries(pl).map(
    ([i, { label: s, icon: r }]) => /* @__PURE__ */ d.createElement("a", { key: i, href: "#" + i, onClick: n, "aria-current": t === i ? "page" : void 0 }, /* @__PURE__ */ d.createElement(r, { size: 17 }), /* @__PURE__ */ d.createElement("span", null, s), t === i && /* @__PURE__ */ d.createElement(qu, { size: 14, className: "nav-arrow" }))
  ))), /* @__PURE__ */ d.createElement("div", { className: "sidebar-bottom" }, /* @__PURE__ */ d.createElement("div", { className: "terminal-meta" }, /* @__PURE__ */ d.createElement(gm, { size: 16 }), /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("strong", null, "BTC/USDT"), /* @__PURE__ */ d.createElement("span", null, "Daily market snapshot"))), /* @__PURE__ */ d.createElement("a", { className: "docs-link", href: Nb, target: "_blank", rel: "noreferrer" }, "Project documentation", " ", /* @__PURE__ */ d.createElement(hy, { size: 14 })))));
}
function Hb() {
  const [t, e] = W.useState(nd), [n, i] = W.useState(!1), [s, r] = W.useState({ horizon: 14, samples: 1 }), [l, o] = W.useState(5), a = Ho([]), u = Ho(), h = Ho(), { run: c } = a, { run: f } = h, m = u.pending || h.pending && h.kind === "run";
  W.useEffect(() => {
    const b = () => {
      e(nd()), i(!1), (document.querySelector('[data-testid="stMain"]') ?? window).scrollTo(0, 0);
    };
    return window.addEventListener("hashchange", b), () => window.removeEventListener("hashchange", b);
  }, []), W.useEffect(() => {
    c(mi.history);
  }, [c]), W.useEffect(() => {
    t === "backtest" && f(mi.evaluation);
  }, [f, t]), W.useEffect(() => {
    document.title = pl[t].label + " — KronBit";
  }, [t]);
  const w = a.pending ? "Connecting" : a.error ? "API unavailable" : a.data.length ? "API connected" : "Awaiting data", y = a.pending ? "waiting" : a.error ? "offline" : a.data.length ? "online" : "waiting";
  return /* @__PURE__ */ d.createElement("div", { className: "app-shell" }, /* @__PURE__ */ d.createElement(Wb, { route: t, open: n, close: () => i(!1) }), /* @__PURE__ */ d.createElement("div", { className: "main-shell" }, /* @__PURE__ */ d.createElement("header", { className: "topbar" }, /* @__PURE__ */ d.createElement("div", { className: "breadcrumb" }, /* @__PURE__ */ d.createElement(
    "button",
    {
      type: "button",
      className: "icon-button menu-toggle",
      "aria-label": "Open navigation",
      "aria-controls": "sidebar",
      "aria-expanded": n,
      onClick: () => i(!0)
    },
    /* @__PURE__ */ d.createElement(by, { size: 21 })
  ), /* @__PURE__ */ d.createElement("span", { className: "breadcrumb-root" }, "Workspace"), /* @__PURE__ */ d.createElement(qu, { size: 13, className: "breadcrumb-separator" }), /* @__PURE__ */ d.createElement("strong", null, pl[t].label)), /* @__PURE__ */ d.createElement("div", { className: "topbar-meta" }, m && /* @__PURE__ */ d.createElement("span", { className: "busy-label", role: "status" }, "Kronos running"), /* @__PURE__ */ d.createElement("span", { className: "api-badge " + y, role: "status" }, /* @__PURE__ */ d.createElement("i", null), w))), /* @__PURE__ */ d.createElement("main", { className: "content", id: "main-content" }, t === "forecast" && /* @__PURE__ */ d.createElement(
    jb,
    {
      market: a,
      forecast: u,
      busy: m,
      inputs: s,
      updateInputs: r
    }
  ), t === "market" && /* @__PURE__ */ d.createElement(Ub, { market: a }), t === "backtest" && /* @__PURE__ */ d.createElement(
    Lb,
    {
      market: a,
      evaluation: h,
      busy: m,
      samples: l,
      setSamples: o,
      refresh: () => f(mi.evaluation)
    }
  ), /* @__PURE__ */ d.createElement("footer", { className: "workspace-footer" }, /* @__PURE__ */ d.createElement("span", null, "KronBit ", /* @__PURE__ */ d.createElement("b", null, "·"), " Bitcoin research workspace"), /* @__PURE__ */ d.createElement("span", null, "All candle times in UTC")))));
}
const Ko = /* @__PURE__ */ new WeakMap();
function f_({ parentElement: t, data: e, setTriggerValue: n }) {
  Mb(n, e == null ? void 0 : e.reply);
  let i = Ko.get(t);
  return i || (i = dm(t.querySelector("#kronbit-root")), Ko.set(t, i), i.render(/* @__PURE__ */ d.createElement(Hb, null))), () => {
    i.unmount(), Ko.delete(t);
  };
}
export {
  f_ as default
};
