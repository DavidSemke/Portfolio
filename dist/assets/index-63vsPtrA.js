function ac(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l)
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  )
}
;(function () {
  const t = document.createElement("link").relList
  if (t && t.supports && t.supports("modulepreload")) return
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l)
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(l) {
    const o = {}
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    )
  }
  function r(l) {
    if (l.ep) return
    l.ep = !0
    const o = n(l)
    fetch(l.href, o)
  }
})()
function uc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e
}
var sc = { exports: {} },
  ko = {},
  cc = { exports: {} },
  K = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var il = Symbol.for("react.element"),
  tp = Symbol.for("react.portal"),
  np = Symbol.for("react.fragment"),
  rp = Symbol.for("react.strict_mode"),
  lp = Symbol.for("react.profiler"),
  op = Symbol.for("react.provider"),
  ip = Symbol.for("react.context"),
  ap = Symbol.for("react.forward_ref"),
  up = Symbol.for("react.suspense"),
  sp = Symbol.for("react.memo"),
  cp = Symbol.for("react.lazy"),
  Tu = Symbol.iterator
function fp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Tu && e[Tu]) || e["@@iterator"]),
      typeof e == "function" ? e : null)
}
var fc = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  dc = Object.assign,
  pc = {}
function ir(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = pc),
    (this.updater = n || fc)
}
ir.prototype.isReactComponent = {}
ir.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    )
  this.updater.enqueueSetState(this, e, t, "setState")
}
ir.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
function hc() {}
hc.prototype = ir.prototype
function ga(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = pc),
    (this.updater = n || fc)
}
var ya = (ga.prototype = new hc())
ya.constructor = ga
dc(ya, ir.prototype)
ya.isPureReactComponent = !0
var Du = Array.isArray,
  mc = Object.prototype.hasOwnProperty,
  wa = { current: null },
  vc = { key: !0, ref: !0, __self: !0, __source: !0 }
function gc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      mc.call(t, r) && !vc.hasOwnProperty(r) && (l[r] = t[r])
  var a = arguments.length - 2
  if (a === 1) l.children = n
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2]
    l.children = u
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r])
  return { $$typeof: il, type: e, key: o, ref: i, props: l, _owner: wa.current }
}
function dp(e, t) {
  return {
    $$typeof: il,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function xa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === il
}
function pp(e) {
  var t = { "=": "=0", ":": "=2" }
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Mu = /\/+/g
function Ho(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? pp("" + e.key)
    : t.toString(36)
}
function Fl(e, t, n, r, l) {
  var o = typeof e
  ;(o === "undefined" || o === "boolean") && (e = null)
  var i = !1
  if (e === null) i = !0
  else
    switch (o) {
      case "string":
      case "number":
        i = !0
        break
      case "object":
        switch (e.$$typeof) {
          case il:
          case tp:
            i = !0
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Ho(i, 0) : r),
      Du(l)
        ? ((n = ""),
          e != null && (n = e.replace(Mu, "$&/") + "/"),
          Fl(l, t, n, "", function (s) {
            return s
          }))
        : l != null &&
          (xa(l) &&
            (l = dp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Mu, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    )
  if (((i = 0), (r = r === "" ? "." : r + ":"), Du(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a]
      var u = r + Ho(o, a)
      i += Fl(o, t, n, u, l)
    }
  else if (((u = fp(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Ho(o, a++)), (i += Fl(o, t, n, u, l))
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    )
  return i
}
function yl(e, t, n) {
  if (e == null) return e
  var r = [],
    l = 0
  return (
    Fl(e, r, "", "", function (o) {
      return t.call(n, o, l++)
    }),
    r
  )
}
function hp(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Ie = { current: null },
  Ul = { transition: null },
  mp = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: Ul,
    ReactCurrentOwner: wa,
  }
function yc() {
  throw Error("act(...) is not supported in production builds of React.")
}
K.Children = {
  map: yl,
  forEach: function (e, t, n) {
    yl(
      e,
      function () {
        t.apply(this, arguments)
      },
      n,
    )
  },
  count: function (e) {
    var t = 0
    return (
      yl(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      yl(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!xa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      )
    return e
  },
}
K.Component = ir
K.Fragment = np
K.Profiler = lp
K.PureComponent = ga
K.StrictMode = rp
K.Suspense = up
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mp
K.act = yc
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    )
  var r = dc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = wa.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps
    for (u in t)
      mc.call(t, u) &&
        !vc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
  }
  var u = arguments.length - 2
  if (u === 1) r.children = n
  else if (1 < u) {
    a = Array(u)
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2]
    r.children = a
  }
  return { $$typeof: il, type: e.type, key: l, ref: o, props: r, _owner: i }
}
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: ip,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: op, _context: e }),
    (e.Consumer = e)
  )
}
K.createElement = gc
K.createFactory = function (e) {
  var t = gc.bind(null, e)
  return (t.type = e), t
}
K.createRef = function () {
  return { current: null }
}
K.forwardRef = function (e) {
  return { $$typeof: ap, render: e }
}
K.isValidElement = xa
K.lazy = function (e) {
  return { $$typeof: cp, _payload: { _status: -1, _result: e }, _init: hp }
}
K.memo = function (e, t) {
  return { $$typeof: sp, type: e, compare: t === void 0 ? null : t }
}
K.startTransition = function (e) {
  var t = Ul.transition
  Ul.transition = {}
  try {
    e()
  } finally {
    Ul.transition = t
  }
}
K.unstable_act = yc
K.useCallback = function (e, t) {
  return Ie.current.useCallback(e, t)
}
K.useContext = function (e) {
  return Ie.current.useContext(e)
}
K.useDebugValue = function () {}
K.useDeferredValue = function (e) {
  return Ie.current.useDeferredValue(e)
}
K.useEffect = function (e, t) {
  return Ie.current.useEffect(e, t)
}
K.useId = function () {
  return Ie.current.useId()
}
K.useImperativeHandle = function (e, t, n) {
  return Ie.current.useImperativeHandle(e, t, n)
}
K.useInsertionEffect = function (e, t) {
  return Ie.current.useInsertionEffect(e, t)
}
K.useLayoutEffect = function (e, t) {
  return Ie.current.useLayoutEffect(e, t)
}
K.useMemo = function (e, t) {
  return Ie.current.useMemo(e, t)
}
K.useReducer = function (e, t, n) {
  return Ie.current.useReducer(e, t, n)
}
K.useRef = function (e) {
  return Ie.current.useRef(e)
}
K.useState = function (e) {
  return Ie.current.useState(e)
}
K.useSyncExternalStore = function (e, t, n) {
  return Ie.current.useSyncExternalStore(e, t, n)
}
K.useTransition = function () {
  return Ie.current.useTransition()
}
K.version = "18.3.1"
cc.exports = K
var C = cc.exports
const wc = uc(C),
  vp = ac({ __proto__: null, default: wc }, [C])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gp = C,
  yp = Symbol.for("react.element"),
  wp = Symbol.for("react.fragment"),
  xp = Object.prototype.hasOwnProperty,
  Sp = gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ep = { key: !0, ref: !0, __self: !0, __source: !0 }
function xc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref)
  for (r in t) xp.call(t, r) && !Ep.hasOwnProperty(r) && (l[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r])
  return { $$typeof: yp, type: e, key: o, ref: i, props: l, _owner: Sp.current }
}
ko.Fragment = wp
ko.jsx = xc
ko.jsxs = xc
sc.exports = ko
var P = sc.exports,
  xi = {},
  Sc = { exports: {} },
  Ge = {},
  Ec = { exports: {} },
  kc = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(j, A) {
    var $ = j.length
    j.push(A)
    e: for (; 0 < $; ) {
      var Z = ($ - 1) >>> 1,
        q = j[Z]
      if (0 < l(q, A)) (j[Z] = A), (j[$] = q), ($ = Z)
      else break e
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0]
  }
  function r(j) {
    if (j.length === 0) return null
    var A = j[0],
      $ = j.pop()
    if ($ !== A) {
      j[0] = $
      e: for (var Z = 0, q = j.length, ut = q >>> 1; Z < ut; ) {
        var Ve = 2 * (Z + 1) - 1,
          He = j[Ve],
          Te = Ve + 1,
          Ze = j[Te]
        if (0 > l(He, $))
          Te < q && 0 > l(Ze, He)
            ? ((j[Z] = Ze), (j[Te] = $), (Z = Te))
            : ((j[Z] = He), (j[Ve] = $), (Z = Ve))
        else if (Te < q && 0 > l(Ze, $)) (j[Z] = Ze), (j[Te] = $), (Z = Te)
        else break e
      }
    }
    return A
  }
  function l(j, A) {
    var $ = j.sortIndex - A.sortIndex
    return $ !== 0 ? $ : j.id - A.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var i = Date,
      a = i.now()
    e.unstable_now = function () {
      return i.now() - a
    }
  }
  var u = [],
    s = [],
    c = 1,
    d = null,
    p = 3,
    S = !1,
    x = !1,
    w = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function m(j) {
    for (var A = n(s); A !== null; ) {
      if (A.callback === null) r(s)
      else if (A.startTime <= j) r(s), (A.sortIndex = A.expirationTime), t(u, A)
      else break
      A = n(s)
    }
  }
  function k(j) {
    if (((w = !1), m(j), !x))
      if (n(u) !== null) (x = !0), zt(N)
      else {
        var A = n(s)
        A !== null && It(k, A.startTime - j)
      }
  }
  function N(j, A) {
    ;(x = !1), w && ((w = !1), h(R), (R = -1)), (S = !0)
    var $ = p
    try {
      for (
        m(A), d = n(u);
        d !== null && (!(d.expirationTime > A) || (j && !Y()));

      ) {
        var Z = d.callback
        if (typeof Z == "function") {
          ;(d.callback = null), (p = d.priorityLevel)
          var q = Z(d.expirationTime <= A)
          ;(A = e.unstable_now()),
            typeof q == "function" ? (d.callback = q) : d === n(u) && r(u),
            m(A)
        } else r(u)
        d = n(u)
      }
      if (d !== null) var ut = !0
      else {
        var Ve = n(s)
        Ve !== null && It(k, Ve.startTime - A), (ut = !1)
      }
      return ut
    } finally {
      ;(d = null), (p = $), (S = !1)
    }
  }
  var D = !1,
    v = null,
    R = -1,
    F = 5,
    M = -1
  function Y() {
    return !(e.unstable_now() - M < F)
  }
  function fe() {
    if (v !== null) {
      var j = e.unstable_now()
      M = j
      var A = !0
      try {
        A = v(!0, j)
      } finally {
        A ? oe() : ((D = !1), (v = null))
      }
    } else D = !1
  }
  var oe
  if (typeof f == "function")
    oe = function () {
      f(fe)
    }
  else if (typeof MessageChannel < "u") {
    var xe = new MessageChannel(),
      at = xe.port2
    ;(xe.port1.onmessage = fe),
      (oe = function () {
        at.postMessage(null)
      })
  } else
    oe = function () {
      T(fe, 0)
    }
  function zt(j) {
    ;(v = j), D || ((D = !0), oe())
  }
  function It(j, A) {
    R = T(function () {
      j(e.unstable_now())
    }, A)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null
    }),
    (e.unstable_continueExecution = function () {
      x || S || ((x = !0), zt(N))
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (F = 0 < j ? Math.floor(1e3 / j) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u)
    }),
    (e.unstable_next = function (j) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var A = 3
          break
        default:
          A = p
      }
      var $ = p
      p = A
      try {
        return j()
      } finally {
        p = $
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, A) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          j = 3
      }
      var $ = p
      p = j
      try {
        return A()
      } finally {
        p = $
      }
    }),
    (e.unstable_scheduleCallback = function (j, A, $) {
      var Z = e.unstable_now()
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? Z + $ : Z))
          : ($ = Z),
        j)
      ) {
        case 1:
          var q = -1
          break
        case 2:
          q = 250
          break
        case 5:
          q = 1073741823
          break
        case 4:
          q = 1e4
          break
        default:
          q = 5e3
      }
      return (
        (q = $ + q),
        (j = {
          id: c++,
          callback: A,
          priorityLevel: j,
          startTime: $,
          expirationTime: q,
          sortIndex: -1,
        }),
        $ > Z
          ? ((j.sortIndex = $),
            t(s, j),
            n(u) === null &&
              j === n(s) &&
              (w ? (h(R), (R = -1)) : (w = !0), It(k, $ - Z)))
          : ((j.sortIndex = q), t(u, j), x || S || ((x = !0), zt(N))),
        j
      )
    }),
    (e.unstable_shouldYield = Y),
    (e.unstable_wrapCallback = function (j) {
      var A = p
      return function () {
        var $ = p
        p = A
        try {
          return j.apply(this, arguments)
        } finally {
          p = $
        }
      }
    })
})(kc)
Ec.exports = kc
var kp = Ec.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cp = C,
  Xe = kp
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n])
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  )
}
var Cc = new Set(),
  $r = {}
function Pn(e, t) {
  qn(e, t), qn(e + "Capture", t)
}
function qn(e, t) {
  for ($r[e] = t, e = 0; e < t.length; e++) Cc.add(t[e])
}
var Lt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Si = Object.prototype.hasOwnProperty,
  Pp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  zu = {},
  Iu = {}
function _p(e) {
  return Si.call(Iu, e)
    ? !0
    : Si.call(zu, e)
      ? !1
      : Pp.test(e)
        ? (Iu[e] = !0)
        : ((zu[e] = !0), !1)
}
function Rp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-")
    default:
      return !1
  }
}
function Np(e, t, n, r) {
  if (t === null || typeof t > "u" || Rp(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function Oe(e, t, n, r, l, o, i) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i)
}
var _e = {}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Oe(e, 0, !1, e, null, !1, !1)
  })
;[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0]
  _e[t] = new Oe(t, 1, !1, e[1], null, !1, !1)
})
;["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  _e[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  _e[e] = new Oe(e, 2, !1, e, null, !1, !1)
})
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;["checked", "multiple", "muted", "selected"].forEach(function (e) {
  _e[e] = new Oe(e, 3, !0, e, null, !1, !1)
})
;["capture", "download"].forEach(function (e) {
  _e[e] = new Oe(e, 4, !1, e, null, !1, !1)
})
;["cols", "rows", "size", "span"].forEach(function (e) {
  _e[e] = new Oe(e, 6, !1, e, null, !1, !1)
})
;["rowSpan", "start"].forEach(function (e) {
  _e[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Sa = /[\-:]([a-z])/g
function Ea(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sa, Ea)
    _e[t] = new Oe(t, 1, !1, e, null, !1, !1)
  })
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sa, Ea)
    _e[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
  })
;["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Sa, Ea)
  _e[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
})
;["tabIndex", "crossOrigin"].forEach(function (e) {
  _e[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
_e.xlinkHref = new Oe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
)
;["src", "href", "action", "formAction"].forEach(function (e) {
  _e[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function ka(e, t, n, r) {
  var l = _e.hasOwnProperty(t) ? _e[t] : null
  ;(l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Np(t, n, l, r) && (n = null),
    r || l === null
      ? _p(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Mt = Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wl = Symbol.for("react.element"),
  Mn = Symbol.for("react.portal"),
  zn = Symbol.for("react.fragment"),
  Ca = Symbol.for("react.strict_mode"),
  Ei = Symbol.for("react.profiler"),
  Pc = Symbol.for("react.provider"),
  _c = Symbol.for("react.context"),
  Pa = Symbol.for("react.forward_ref"),
  ki = Symbol.for("react.suspense"),
  Ci = Symbol.for("react.suspense_list"),
  _a = Symbol.for("react.memo"),
  $t = Symbol.for("react.lazy"),
  Rc = Symbol.for("react.offscreen"),
  Ou = Symbol.iterator
function vr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ou && e[Ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null)
}
var se = Object.assign,
  Wo
function Rr(e) {
  if (Wo === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Wo = (t && t[1]) || ""
    }
  return (
    `
` +
    Wo +
    e
  )
}
var Qo = !1
function Ko(e, t) {
  if (!e || Qo) return ""
  Qo = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (s) {
          var r = s
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (s) {
          r = s
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (s) {
        r = s
      }
      e()
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ")
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                )
              }
            while (1 <= i && 0 <= a)
          break
        }
    }
  } finally {
    ;(Qo = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : "") ? Rr(e) : ""
}
function Lp(e) {
  switch (e.tag) {
    case 5:
      return Rr(e.type)
    case 16:
      return Rr("Lazy")
    case 13:
      return Rr("Suspense")
    case 19:
      return Rr("SuspenseList")
    case 0:
    case 2:
    case 15:
      return (e = Ko(e.type, !1)), e
    case 11:
      return (e = Ko(e.type.render, !1)), e
    case 1:
      return (e = Ko(e.type, !0)), e
    default:
      return ""
  }
}
function Pi(e) {
  if (e == null) return null
  if (typeof e == "function") return e.displayName || e.name || null
  if (typeof e == "string") return e
  switch (e) {
    case zn:
      return "Fragment"
    case Mn:
      return "Portal"
    case Ei:
      return "Profiler"
    case Ca:
      return "StrictMode"
    case ki:
      return "Suspense"
    case Ci:
      return "SuspenseList"
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case _c:
        return (e.displayName || "Context") + ".Consumer"
      case Pc:
        return (e._context.displayName || "Context") + ".Provider"
      case Pa:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        )
      case _a:
        return (
          (t = e.displayName || null), t !== null ? t : Pi(e.type) || "Memo"
        )
      case $t:
        ;(t = e._payload), (e = e._init)
        try {
          return Pi(e(t))
        } catch {}
    }
  return null
}
function jp(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return "Cache"
    case 9:
      return (t.displayName || "Context") + ".Consumer"
    case 10:
      return (t._context.displayName || "Context") + ".Provider"
    case 18:
      return "DehydratedFragment"
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      )
    case 7:
      return "Fragment"
    case 5:
      return t
    case 4:
      return "Portal"
    case 3:
      return "Root"
    case 6:
      return "Text"
    case 16:
      return Pi(t)
    case 8:
      return t === Ca ? "StrictMode" : "Mode"
    case 22:
      return "Offscreen"
    case 12:
      return "Profiler"
    case 21:
      return "Scope"
    case 13:
      return "Suspense"
    case 19:
      return "SuspenseList"
    case 25:
      return "TracingMarker"
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null
      if (typeof t == "string") return t
  }
  return null
}
function tn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e
    case "object":
      return e
    default:
      return ""
  }
}
function Nc(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  )
}
function Tp(e) {
  var t = Nc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this)
        },
        set: function (i) {
          ;(r = "" + i), o.call(this, i)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (i) {
          r = "" + i
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function xl(e) {
  e._valueTracker || (e._valueTracker = Tp(e))
}
function Lc(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ""
  return (
    e && (r = Nc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Gl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function _i(e, t) {
  var n = t.checked
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Fu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = tn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    })
}
function jc(e, t) {
  ;(t = t.checked), t != null && ka(e, "checked", t, !1)
}
function Ri(e, t) {
  jc(e, t)
  var n = tn(t.value),
    r = t.type
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n)
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value")
    return
  }
  t.hasOwnProperty("value")
    ? Ni(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ni(e, t.type, tn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Uu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n)
}
function Ni(e, t, n) {
  ;(t !== "number" || Gl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Nr = Array.isArray
function Kn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0)
  } else {
    for (n = "" + tn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ;(e[l].selected = !0), r && (e[l].defaultSelected = !0)
        return
      }
      t !== null || e[l].disabled || (t = e[l])
    }
    t !== null && (t.selected = !0)
  }
}
function Li(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91))
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  })
}
function Au(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92))
      if (Nr(n)) {
        if (1 < n.length) throw Error(_(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ""), (n = t)
  }
  e._wrapperState = { initialValue: tn(n) }
}
function Tc(e, t) {
  var n = tn(t.value),
    r = tn(t.defaultValue)
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Bu(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Dc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg"
    case "math":
      return "http://www.w3.org/1998/Math/MathML"
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}
function ji(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Dc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e
}
var Sl,
  Mc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t
    else {
      for (
        Sl = Sl || document.createElement("div"),
          Sl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Sl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Vr(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Tr = {
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
    strokeWidth: !0,
  },
  Dp = ["Webkit", "ms", "Moz", "O"]
Object.keys(Tr).forEach(function (e) {
  Dp.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tr[t] = Tr[e])
  })
})
function zc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Tr.hasOwnProperty(e) && Tr[e])
      ? ("" + t).trim()
      : t + "px"
}
function Ic(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = zc(n, t[n], r)
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l)
    }
}
var Mp = se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
)
function Ti(e, t) {
  if (t) {
    if (Mp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60))
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61))
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62))
  }
}
function Di(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string"
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1
    default:
      return !0
  }
}
var Mi = null
function Ra(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var zi = null,
  Yn = null,
  Xn = null
function $u(e) {
  if ((e = sl(e))) {
    if (typeof zi != "function") throw Error(_(280))
    var t = e.stateNode
    t && ((t = No(t)), zi(e.stateNode, e.type, t))
  }
}
function Oc(e) {
  Yn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Yn = e)
}
function Fc() {
  if (Yn) {
    var e = Yn,
      t = Xn
    if (((Xn = Yn = null), $u(e), t)) for (e = 0; e < t.length; e++) $u(t[e])
  }
}
function Uc(e, t) {
  return e(t)
}
function Ac() {}
var Yo = !1
function Bc(e, t, n) {
  if (Yo) return e(t, n)
  Yo = !0
  try {
    return Uc(e, t, n)
  } finally {
    ;(Yo = !1), (Yn !== null || Xn !== null) && (Ac(), Fc())
  }
}
function Hr(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = No(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
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
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != "function") throw Error(_(231, t, typeof n))
  return n
}
var Ii = !1
if (Lt)
  try {
    var gr = {}
    Object.defineProperty(gr, "passive", {
      get: function () {
        Ii = !0
      },
    }),
      window.addEventListener("test", gr, gr),
      window.removeEventListener("test", gr, gr)
  } catch {
    Ii = !1
  }
function zp(e, t, n, r, l, o, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, s)
  } catch (c) {
    this.onError(c)
  }
}
var Dr = !1,
  Jl = null,
  Zl = !1,
  Oi = null,
  Ip = {
    onError: function (e) {
      ;(Dr = !0), (Jl = e)
    },
  }
function Op(e, t, n, r, l, o, i, a, u) {
  ;(Dr = !1), (Jl = null), zp.apply(Ip, arguments)
}
function Fp(e, t, n, r, l, o, i, a, u) {
  if ((Op.apply(this, arguments), Dr)) {
    if (Dr) {
      var s = Jl
      ;(Dr = !1), (Jl = null)
    } else throw Error(_(198))
    Zl || ((Zl = !0), (Oi = s))
  }
}
function _n(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function $c(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function Vu(e) {
  if (_n(e) !== e) throw Error(_(188))
}
function Up(e) {
  var t = e.alternate
  if (!t) {
    if (((t = _n(e)), t === null)) throw Error(_(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var l = n.return
    if (l === null) break
    var o = l.alternate
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Vu(l), e
        if (o === r) return Vu(l), t
        o = o.sibling
      }
      throw Error(_(188))
    }
    if (n.return !== r.return) (n = l), (r = o)
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          ;(i = !0), (n = l), (r = o)
          break
        }
        if (a === r) {
          ;(i = !0), (r = l), (n = o)
          break
        }
        a = a.sibling
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            ;(i = !0), (n = o), (r = l)
            break
          }
          if (a === r) {
            ;(i = !0), (r = o), (n = l)
            break
          }
          a = a.sibling
        }
        if (!i) throw Error(_(189))
      }
    }
    if (n.alternate !== r) throw Error(_(190))
  }
  if (n.tag !== 3) throw Error(_(188))
  return n.stateNode.current === n ? e : t
}
function Vc(e) {
  return (e = Up(e)), e !== null ? Hc(e) : null
}
function Hc(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Hc(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Wc = Xe.unstable_scheduleCallback,
  Hu = Xe.unstable_cancelCallback,
  Ap = Xe.unstable_shouldYield,
  Bp = Xe.unstable_requestPaint,
  de = Xe.unstable_now,
  $p = Xe.unstable_getCurrentPriorityLevel,
  Na = Xe.unstable_ImmediatePriority,
  Qc = Xe.unstable_UserBlockingPriority,
  ql = Xe.unstable_NormalPriority,
  Vp = Xe.unstable_LowPriority,
  Kc = Xe.unstable_IdlePriority,
  Co = null,
  St = null
function Hp(e) {
  if (St && typeof St.onCommitFiberRoot == "function")
    try {
      St.onCommitFiberRoot(Co, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var ht = Math.clz32 ? Math.clz32 : Kp,
  Wp = Math.log,
  Qp = Math.LN2
function Kp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Wp(e) / Qp) | 0)) | 0
}
var El = 64,
  kl = 4194304
function Lr(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
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
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function bl(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455
  if (i !== 0) {
    var a = i & ~l
    a !== 0 ? (r = Lr(a)) : ((o &= i), o !== 0 && (r = Lr(o)))
  } else (i = n & ~l), i !== 0 ? (r = Lr(i)) : o !== 0 && (r = Lr(o))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ht(t)), (l = 1 << n), (r |= e[n]), (t &= ~l)
  return r
}
function Yp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
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
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function Xp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - ht(o),
      a = 1 << i,
      u = l[i]
    u === -1
      ? (!(a & n) || a & r) && (l[i] = Yp(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a)
  }
}
function Fi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function Yc() {
  var e = El
  return (El <<= 1), !(El & 4194240) && (El = 64), e
}
function Xo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function al(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ht(t)),
    (e[t] = n)
}
function Gp(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ht(n),
      o = 1 << l
    ;(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o)
  }
}
function La(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - ht(n),
      l = 1 << r
    ;(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l)
  }
}
var J = 0
function Xc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Gc,
  ja,
  Jc,
  Zc,
  qc,
  Ui = !1,
  Cl = [],
  Yt = null,
  Xt = null,
  Gt = null,
  Wr = new Map(),
  Qr = new Map(),
  Ht = [],
  Jp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    )
function Wu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yt = null
      break
    case "dragenter":
    case "dragleave":
      Xt = null
      break
    case "mouseover":
    case "mouseout":
      Gt = null
      break
    case "pointerover":
    case "pointerout":
      Wr.delete(t.pointerId)
      break
    case "gotpointercapture":
    case "lostpointercapture":
      Qr.delete(t.pointerId)
  }
}
function yr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = sl(t)), t !== null && ja(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e)
}
function Zp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Yt = yr(Yt, e, t, n, r, l)), !0
    case "dragenter":
      return (Xt = yr(Xt, e, t, n, r, l)), !0
    case "mouseover":
      return (Gt = yr(Gt, e, t, n, r, l)), !0
    case "pointerover":
      var o = l.pointerId
      return Wr.set(o, yr(Wr.get(o) || null, e, t, n, r, l)), !0
    case "gotpointercapture":
      return (
        (o = l.pointerId), Qr.set(o, yr(Qr.get(o) || null, e, t, n, r, l)), !0
      )
  }
  return !1
}
function bc(e) {
  var t = dn(e.target)
  if (t !== null) {
    var n = _n(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = $c(n)), t !== null)) {
          ;(e.blockedOn = t),
            qc(e.priority, function () {
              Jc(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Al(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ai(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Mi = r), n.target.dispatchEvent(r), (Mi = null)
    } else return (t = sl(n)), t !== null && ja(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Qu(e, t, n) {
  Al(e) && n.delete(t)
}
function qp() {
  ;(Ui = !1),
    Yt !== null && Al(Yt) && (Yt = null),
    Xt !== null && Al(Xt) && (Xt = null),
    Gt !== null && Al(Gt) && (Gt = null),
    Wr.forEach(Qu),
    Qr.forEach(Qu)
}
function wr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ui ||
      ((Ui = !0), Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, qp)))
}
function Kr(e) {
  function t(l) {
    return wr(l, e)
  }
  if (0 < Cl.length) {
    wr(Cl[0], e)
    for (var n = 1; n < Cl.length; n++) {
      var r = Cl[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Yt !== null && wr(Yt, e),
      Xt !== null && wr(Xt, e),
      Gt !== null && wr(Gt, e),
      Wr.forEach(t),
      Qr.forEach(t),
      n = 0;
    n < Ht.length;
    n++
  )
    (r = Ht[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Ht.length && ((n = Ht[0]), n.blockedOn === null); )
    bc(n), n.blockedOn === null && Ht.shift()
}
var Gn = Mt.ReactCurrentBatchConfig,
  eo = !0
function bp(e, t, n, r) {
  var l = J,
    o = Gn.transition
  Gn.transition = null
  try {
    ;(J = 1), Ta(e, t, n, r)
  } finally {
    ;(J = l), (Gn.transition = o)
  }
}
function eh(e, t, n, r) {
  var l = J,
    o = Gn.transition
  Gn.transition = null
  try {
    ;(J = 4), Ta(e, t, n, r)
  } finally {
    ;(J = l), (Gn.transition = o)
  }
}
function Ta(e, t, n, r) {
  if (eo) {
    var l = Ai(e, t, n, r)
    if (l === null) li(e, t, r, to, n), Wu(e, r)
    else if (Zp(l, e, t, n, r)) r.stopPropagation()
    else if ((Wu(e, r), t & 4 && -1 < Jp.indexOf(e))) {
      for (; l !== null; ) {
        var o = sl(l)
        if (
          (o !== null && Gc(o),
          (o = Ai(e, t, n, r)),
          o === null && li(e, t, r, to, n),
          o === l)
        )
          break
        l = o
      }
      l !== null && r.stopPropagation()
    } else li(e, t, r, null, n)
  }
}
var to = null
function Ai(e, t, n, r) {
  if (((to = null), (e = Ra(r)), (e = dn(e)), e !== null))
    if (((t = _n(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = $c(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (to = e), null
}
function ef(e) {
  switch (e) {
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
      return 1
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
      return 4
    case "message":
      switch ($p()) {
        case Na:
          return 1
        case Qc:
          return 4
        case ql:
        case Vp:
          return 16
        case Kc:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Qt = null,
  Da = null,
  Bl = null
function tf() {
  if (Bl) return Bl
  var e,
    t = Da,
    n = t.length,
    r,
    l = "value" in Qt ? Qt.value : Qt.textContent,
    o = l.length
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Bl = l.slice(e, 1 < r ? 1 - r : void 0))
}
function $l(e) {
  var t = e.keyCode
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Pl() {
  return !0
}
function Ku() {
  return !1
}
function Je(e) {
  function t(n, r, l, o, i) {
    ;(this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null)
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]))
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Pl
        : Ku),
      (this.isPropagationStopped = Ku),
      this
    )
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Pl))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Pl))
      },
      persist: function () {},
      isPersistent: Pl,
    }),
    t
  )
}
var ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ma = Je(ar),
  ul = se({}, ar, { view: 0, detail: 0 }),
  th = Je(ul),
  Go,
  Jo,
  xr,
  Po = se({}, ul, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: za,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== xr &&
            (xr && e.type === "mousemove"
              ? ((Go = e.screenX - xr.screenX), (Jo = e.screenY - xr.screenY))
              : (Jo = Go = 0),
            (xr = e)),
          Go)
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Jo
    },
  }),
  Yu = Je(Po),
  nh = se({}, Po, { dataTransfer: 0 }),
  rh = Je(nh),
  lh = se({}, ul, { relatedTarget: 0 }),
  Zo = Je(lh),
  oh = se({}, ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ih = Je(oh),
  ah = se({}, ar, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData
    },
  }),
  uh = Je(ah),
  sh = se({}, ar, { data: 0 }),
  Xu = Je(sh),
  ch = {
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
    MozPrintableKey: "Unidentified",
  },
  fh = {
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
    224: "Meta",
  },
  dh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }
function ph(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = dh[e]) ? !!t[e] : !1
}
function za() {
  return ph
}
var hh = se({}, ul, {
    key: function (e) {
      if (e.key) {
        var t = ch[e.key] || e.key
        if (t !== "Unidentified") return t
      }
      return e.type === "keypress"
        ? ((e = $l(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? fh[e.keyCode] || "Unidentified"
          : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: za,
    charCode: function (e) {
      return e.type === "keypress" ? $l(e) : 0
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === "keypress"
        ? $l(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0
    },
  }),
  mh = Je(hh),
  vh = se({}, Po, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Gu = Je(vh),
  gh = se({}, ul, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: za,
  }),
  yh = Je(gh),
  wh = se({}, ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xh = Je(wh),
  Sh = se({}, Po, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Eh = Je(Sh),
  kh = [9, 13, 27, 32],
  Ia = Lt && "CompositionEvent" in window,
  Mr = null
Lt && "documentMode" in document && (Mr = document.documentMode)
var Ch = Lt && "TextEvent" in window && !Mr,
  nf = Lt && (!Ia || (Mr && 8 < Mr && 11 >= Mr)),
  Ju = " ",
  Zu = !1
function rf(e, t) {
  switch (e) {
    case "keyup":
      return kh.indexOf(t.keyCode) !== -1
    case "keydown":
      return t.keyCode !== 229
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0
    default:
      return !1
  }
}
function lf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
}
var In = !1
function Ph(e, t) {
  switch (e) {
    case "compositionend":
      return lf(t)
    case "keypress":
      return t.which !== 32 ? null : ((Zu = !0), Ju)
    case "textInput":
      return (e = t.data), e === Ju && Zu ? null : e
    default:
      return null
  }
}
function _h(e, t) {
  if (In)
    return e === "compositionend" || (!Ia && rf(e, t))
      ? ((e = tf()), (Bl = Da = Qt = null), (In = !1), e)
      : null
  switch (e) {
    case "paste":
      return null
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case "compositionend":
      return nf && t.locale !== "ko" ? null : t.data
    default:
      return null
  }
}
var Rh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === "input" ? !!Rh[e.type] : t === "textarea"
}
function of(e, t, n, r) {
  Oc(r),
    (t = no(t, "onChange")),
    0 < t.length &&
      ((n = new Ma("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }))
}
var zr = null,
  Yr = null
function Nh(e) {
  gf(e, 0)
}
function _o(e) {
  var t = Un(e)
  if (Lc(t)) return e
}
function Lh(e, t) {
  if (e === "change") return t
}
var af = !1
if (Lt) {
  var qo
  if (Lt) {
    var bo = "oninput" in document
    if (!bo) {
      var bu = document.createElement("div")
      bu.setAttribute("oninput", "return;"),
        (bo = typeof bu.oninput == "function")
    }
    qo = bo
  } else qo = !1
  af = qo && (!document.documentMode || 9 < document.documentMode)
}
function es() {
  zr && (zr.detachEvent("onpropertychange", uf), (Yr = zr = null))
}
function uf(e) {
  if (e.propertyName === "value" && _o(Yr)) {
    var t = []
    of(t, Yr, e, Ra(e)), Bc(Nh, t)
  }
}
function jh(e, t, n) {
  e === "focusin"
    ? (es(), (zr = t), (Yr = n), zr.attachEvent("onpropertychange", uf))
    : e === "focusout" && es()
}
function Th(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return _o(Yr)
}
function Dh(e, t) {
  if (e === "click") return _o(t)
}
function Mh(e, t) {
  if (e === "input" || e === "change") return _o(t)
}
function zh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var vt = typeof Object.is == "function" ? Object.is : zh
function Xr(e, t) {
  if (vt(e, t)) return !0
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var l = n[r]
    if (!Si.call(t, l) || !vt(e[l], t[l])) return !1
  }
  return !0
}
function ts(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function ns(e, t) {
  var n = ts(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = ts(n)
  }
}
function sf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? sf(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function cf() {
  for (var e = window, t = Gl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Gl(e.document)
  }
  return t
}
function Oa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  )
}
function Ih(e) {
  var t = cf(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    sf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Oa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var l = n.textContent.length,
          o = Math.min(r.start, l)
        ;(r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = ns(n, o))
        var i = ns(n, r)
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var Oh = Lt && "documentMode" in document && 11 >= document.documentMode,
  On = null,
  Bi = null,
  Ir = null,
  $i = !1
function rs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  $i ||
    On == null ||
    On !== Gl(r) ||
    ((r = On),
    "selectionStart" in r && Oa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ir && Xr(Ir, r)) ||
      ((Ir = r),
      (r = no(Bi, "onSelect")),
      0 < r.length &&
        ((t = new Ma("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = On))))
}
function _l(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  )
}
var Fn = {
    animationend: _l("Animation", "AnimationEnd"),
    animationiteration: _l("Animation", "AnimationIteration"),
    animationstart: _l("Animation", "AnimationStart"),
    transitionend: _l("Transition", "TransitionEnd"),
  },
  ei = {},
  ff = {}
Lt &&
  ((ff = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Fn.animationend.animation,
    delete Fn.animationiteration.animation,
    delete Fn.animationstart.animation),
  "TransitionEvent" in window || delete Fn.transitionend.transition)
function Ro(e) {
  if (ei[e]) return ei[e]
  if (!Fn[e]) return e
  var t = Fn[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in ff) return (ei[e] = t[n])
  return e
}
var df = Ro("animationend"),
  pf = Ro("animationiteration"),
  hf = Ro("animationstart"),
  mf = Ro("transitionend"),
  vf = new Map(),
  ls =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    )
function rn(e, t) {
  vf.set(e, t), Pn(t, [e])
}
for (var ti = 0; ti < ls.length; ti++) {
  var ni = ls[ti],
    Fh = ni.toLowerCase(),
    Uh = ni[0].toUpperCase() + ni.slice(1)
  rn(Fh, "on" + Uh)
}
rn(df, "onAnimationEnd")
rn(pf, "onAnimationIteration")
rn(hf, "onAnimationStart")
rn("dblclick", "onDoubleClick")
rn("focusin", "onFocus")
rn("focusout", "onBlur")
rn(mf, "onTransitionEnd")
qn("onMouseEnter", ["mouseout", "mouseover"])
qn("onMouseLeave", ["mouseout", "mouseover"])
qn("onPointerEnter", ["pointerout", "pointerover"])
qn("onPointerLeave", ["pointerout", "pointerover"])
Pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
)
Pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
)
Pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"])
Pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
)
Pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
)
Pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
)
var jr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Ah = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr))
function os(e, t, n) {
  var r = e.type || "unknown-event"
  ;(e.currentTarget = n), Fp(r, t, void 0, e), (e.currentTarget = null)
}
function gf(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event
    r = r.listeners
    e: {
      var o = void 0
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            s = a.currentTarget
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e
          os(l, a, s), (o = u)
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e
          os(l, a, s), (o = u)
        }
    }
  }
  if (Zl) throw ((e = Oi), (Zl = !1), (Oi = null), e)
}
function ee(e, t) {
  var n = t[Ki]
  n === void 0 && (n = t[Ki] = new Set())
  var r = e + "__bubble"
  n.has(r) || (yf(t, e, 2, !1), n.add(r))
}
function ri(e, t, n) {
  var r = 0
  t && (r |= 4), yf(n, e, r, t)
}
var Rl = "_reactListening" + Math.random().toString(36).slice(2)
function Gr(e) {
  if (!e[Rl]) {
    ;(e[Rl] = !0),
      Cc.forEach(function (n) {
        n !== "selectionchange" && (Ah.has(n) || ri(n, !1, e), ri(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Rl] || ((t[Rl] = !0), ri("selectionchange", !1, t))
  }
}
function yf(e, t, n, r) {
  switch (ef(t)) {
    case 1:
      var l = bp
      break
    case 4:
      l = eh
      break
    default:
      l = Ta
  }
  ;(n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ii ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1)
}
function li(e, t, n, r, l) {
  var o = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var i = r.tag
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return
            i = i.return
          }
        for (; a !== null; ) {
          if (((i = dn(a)), i === null)) return
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i
            continue e
          }
          a = a.parentNode
        }
      }
      r = r.return
    }
  Bc(function () {
    var s = o,
      c = Ra(n),
      d = []
    e: {
      var p = vf.get(e)
      if (p !== void 0) {
        var S = Ma,
          x = e
        switch (e) {
          case "keypress":
            if ($l(n) === 0) break e
          case "keydown":
          case "keyup":
            S = mh
            break
          case "focusin":
            ;(x = "focus"), (S = Zo)
            break
          case "focusout":
            ;(x = "blur"), (S = Zo)
            break
          case "beforeblur":
          case "afterblur":
            S = Zo
            break
          case "click":
            if (n.button === 2) break e
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = Yu
            break
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = rh
            break
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = yh
            break
          case df:
          case pf:
          case hf:
            S = ih
            break
          case mf:
            S = xh
            break
          case "scroll":
            S = th
            break
          case "wheel":
            S = Eh
            break
          case "copy":
          case "cut":
          case "paste":
            S = uh
            break
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Gu
        }
        var w = (t & 4) !== 0,
          T = !w && e === "scroll",
          h = w ? (p !== null ? p + "Capture" : null) : p
        w = []
        for (var f = s, m; f !== null; ) {
          m = f
          var k = m.stateNode
          if (
            (m.tag === 5 &&
              k !== null &&
              ((m = k),
              h !== null && ((k = Hr(f, h)), k != null && w.push(Jr(f, k, m)))),
            T)
          )
            break
          f = f.return
        }
        0 < w.length &&
          ((p = new S(p, x, null, n, c)), d.push({ event: p, listeners: w }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Mi &&
            (x = n.relatedTarget || n.fromElement) &&
            (dn(x) || x[jt]))
        )
          break e
        if (
          (S || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          S
            ? ((x = n.relatedTarget || n.toElement),
              (S = s),
              (x = x ? dn(x) : null),
              x !== null &&
                ((T = _n(x)), x !== T || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((S = null), (x = s)),
          S !== x)
        ) {
          if (
            ((w = Yu),
            (k = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Gu),
              (k = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (T = S == null ? p : Un(S)),
            (m = x == null ? p : Un(x)),
            (p = new w(k, f + "leave", S, n, c)),
            (p.target = T),
            (p.relatedTarget = m),
            (k = null),
            dn(c) === s &&
              ((w = new w(h, f + "enter", x, n, c)),
              (w.target = m),
              (w.relatedTarget = T),
              (k = w)),
            (T = k),
            S && x)
          )
            t: {
              for (w = S, h = x, f = 0, m = w; m; m = Tn(m)) f++
              for (m = 0, k = h; k; k = Tn(k)) m++
              for (; 0 < f - m; ) (w = Tn(w)), f--
              for (; 0 < m - f; ) (h = Tn(h)), m--
              for (; f--; ) {
                if (w === h || (h !== null && w === h.alternate)) break t
                ;(w = Tn(w)), (h = Tn(h))
              }
              w = null
            }
          else w = null
          S !== null && is(d, p, S, w, !1),
            x !== null && T !== null && is(d, T, x, w, !0)
        }
      }
      e: {
        if (
          ((p = s ? Un(s) : window),
          (S = p.nodeName && p.nodeName.toLowerCase()),
          S === "select" || (S === "input" && p.type === "file"))
        )
          var N = Lh
        else if (qu(p))
          if (af) N = Mh
          else {
            N = Th
            var D = jh
          }
        else
          (S = p.nodeName) &&
            S.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (N = Dh)
        if (N && (N = N(e, s))) {
          of(d, N, n, c)
          break e
        }
        D && D(e, p, s),
          e === "focusout" &&
            (D = p._wrapperState) &&
            D.controlled &&
            p.type === "number" &&
            Ni(p, "number", p.value)
      }
      switch (((D = s ? Un(s) : window), e)) {
        case "focusin":
          ;(qu(D) || D.contentEditable === "true") &&
            ((On = D), (Bi = s), (Ir = null))
          break
        case "focusout":
          Ir = Bi = On = null
          break
        case "mousedown":
          $i = !0
          break
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ;($i = !1), rs(d, n, c)
          break
        case "selectionchange":
          if (Oh) break
        case "keydown":
        case "keyup":
          rs(d, n, c)
      }
      var v
      if (Ia)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart"
              break e
            case "compositionend":
              R = "onCompositionEnd"
              break e
            case "compositionupdate":
              R = "onCompositionUpdate"
              break e
          }
          R = void 0
        }
      else
        In
          ? rf(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart")
      R &&
        (nf &&
          n.locale !== "ko" &&
          (In || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && In && (v = tf())
            : ((Qt = c),
              (Da = "value" in Qt ? Qt.value : Qt.textContent),
              (In = !0))),
        (D = no(s, R)),
        0 < D.length &&
          ((R = new Xu(R, e, null, n, c)),
          d.push({ event: R, listeners: D }),
          v ? (R.data = v) : ((v = lf(n)), v !== null && (R.data = v)))),
        (v = Ch ? Ph(e, n) : _h(e, n)) &&
          ((s = no(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new Xu("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: s }),
            (c.data = v)))
    }
    gf(d, t)
  })
}
function Jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function no(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Hr(e, n)),
      o != null && r.unshift(Jr(e, o, l)),
      (o = Hr(e, t)),
      o != null && r.push(Jr(e, o, l))),
      (e = e.return)
  }
  return r
}
function Tn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function is(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode
    if (u !== null && u === r) break
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = Hr(n, o)), u != null && i.unshift(Jr(n, u, a)))
        : l || ((u = Hr(n, o)), u != null && i.push(Jr(n, u, a)))),
      (n = n.return)
  }
  i.length !== 0 && e.push({ event: t, listeners: i })
}
var Bh = /\r\n?/g,
  $h = /\u0000|\uFFFD/g
function as(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bh,
      `
`,
    )
    .replace($h, "")
}
function Nl(e, t, n) {
  if (((t = as(t)), as(e) !== t && n)) throw Error(_(425))
}
function ro() {}
var Vi = null,
  Hi = null
function Wi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Qi = typeof setTimeout == "function" ? setTimeout : void 0,
  Vh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  us = typeof Promise == "function" ? Promise : void 0,
  Hh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof us < "u"
        ? function (e) {
            return us.resolve(null).then(e).catch(Wh)
          }
        : Qi
function Wh(e) {
  setTimeout(function () {
    throw e
  })
}
function oi(e, t) {
  var n = t,
    r = 0
  do {
    var l = n.nextSibling
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Kr(t)
          return
        }
        r--
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++
    n = l
  } while (n)
  Kr(t)
}
function Jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break
      if (t === "/$") return null
    }
  }
  return e
}
function ss(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e
        t--
      } else n === "/$" && t++
    }
    e = e.previousSibling
  }
  return null
}
var ur = Math.random().toString(36).slice(2),
  xt = "__reactFiber$" + ur,
  Zr = "__reactProps$" + ur,
  jt = "__reactContainer$" + ur,
  Ki = "__reactEvents$" + ur,
  Qh = "__reactListeners$" + ur,
  Kh = "__reactHandles$" + ur
function dn(e) {
  var t = e[xt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[jt] || n[xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ss(e); e !== null; ) {
          if ((n = e[xt])) return n
          e = ss(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function sl(e) {
  return (
    (e = e[xt] || e[jt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(_(33))
}
function No(e) {
  return e[Zr] || null
}
var Yi = [],
  An = -1
function ln(e) {
  return { current: e }
}
function te(e) {
  0 > An || ((e.current = Yi[An]), (Yi[An] = null), An--)
}
function b(e, t) {
  An++, (Yi[An] = e.current), (e.current = t)
}
var nn = {},
  je = ln(nn),
  Ae = ln(!1),
  wn = nn
function bn(e, t) {
  var n = e.type.contextTypes
  if (!n) return nn
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var l = {},
    o
  for (o in n) l[o] = t[o]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  )
}
function Be(e) {
  return (e = e.childContextTypes), e != null
}
function lo() {
  te(Ae), te(je)
}
function cs(e, t, n) {
  if (je.current !== nn) throw Error(_(168))
  b(je, t), b(Ae, n)
}
function wf(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n
  r = r.getChildContext()
  for (var l in r) if (!(l in t)) throw Error(_(108, jp(e) || "Unknown", l))
  return se({}, n, r)
}
function oo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nn),
    (wn = je.current),
    b(je, e),
    b(Ae, Ae.current),
    !0
  )
}
function fs(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(_(169))
  n
    ? ((e = wf(e, t, wn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Ae),
      te(je),
      b(je, e))
    : te(Ae),
    b(Ae, n)
}
var Ct = null,
  Lo = !1,
  ii = !1
function xf(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e)
}
function Yh(e) {
  ;(Lo = !0), xf(e)
}
function on() {
  if (!ii && Ct !== null) {
    ii = !0
    var e = 0,
      t = J
    try {
      var n = Ct
      for (J = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Ct = null), (Lo = !1)
    } catch (l) {
      throw (Ct !== null && (Ct = Ct.slice(e + 1)), Wc(Na, on), l)
    } finally {
      ;(J = t), (ii = !1)
    }
  }
  return null
}
var Bn = [],
  $n = 0,
  io = null,
  ao = 0,
  et = [],
  tt = 0,
  xn = null,
  Pt = 1,
  _t = ""
function cn(e, t) {
  ;(Bn[$n++] = ao), (Bn[$n++] = io), (io = e), (ao = t)
}
function Sf(e, t, n) {
  ;(et[tt++] = Pt), (et[tt++] = _t), (et[tt++] = xn), (xn = e)
  var r = Pt
  e = _t
  var l = 32 - ht(r) - 1
  ;(r &= ~(1 << l)), (n += 1)
  var o = 32 - ht(t) + l
  if (30 < o) {
    var i = l - (l % 5)
    ;(o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Pt = (1 << (32 - ht(t) + l)) | (n << l) | r),
      (_t = o + e)
  } else (Pt = (1 << o) | (n << l) | r), (_t = e)
}
function Fa(e) {
  e.return !== null && (cn(e, 1), Sf(e, 1, 0))
}
function Ua(e) {
  for (; e === io; )
    (io = Bn[--$n]), (Bn[$n] = null), (ao = Bn[--$n]), (Bn[$n] = null)
  for (; e === xn; )
    (xn = et[--tt]),
      (et[tt] = null),
      (_t = et[--tt]),
      (et[tt] = null),
      (Pt = et[--tt]),
      (et[tt] = null)
}
var Ye = null,
  Ke = null,
  le = !1,
  pt = null
function Ef(e, t) {
  var n = rt(5, null, null, 0)
  ;(n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function ds(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Ke = Jt(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (Ke = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = xn !== null ? { id: Pt, overflow: _t } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Ke = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Xi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Gi(e) {
  if (le) {
    var t = Ke
    if (t) {
      var n = t
      if (!ds(e, t)) {
        if (Xi(e)) throw Error(_(418))
        t = Jt(n.nextSibling)
        var r = Ye
        t && ds(e, t)
          ? Ef(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e))
      }
    } else {
      if (Xi(e)) throw Error(_(418))
      ;(e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e)
    }
  }
}
function ps(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Ye = e
}
function Ll(e) {
  if (e !== Ye) return !1
  if (!le) return ps(e), (le = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Wi(e.type, e.memoizedProps))),
    t && (t = Ke))
  ) {
    if (Xi(e)) throw (kf(), Error(_(418)))
    for (; t; ) Ef(e, t), (t = Jt(t.nextSibling))
  }
  if ((ps(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === "/$") {
            if (t === 0) {
              Ke = Jt(e.nextSibling)
              break e
            }
            t--
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++
        }
        e = e.nextSibling
      }
      Ke = null
    }
  } else Ke = Ye ? Jt(e.stateNode.nextSibling) : null
  return !0
}
function kf() {
  for (var e = Ke; e; ) e = Jt(e.nextSibling)
}
function er() {
  ;(Ke = Ye = null), (le = !1)
}
function Aa(e) {
  pt === null ? (pt = [e]) : pt.push(e)
}
var Xh = Mt.ReactCurrentBatchConfig
function Sr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309))
        var r = n.stateNode
      }
      if (!r) throw Error(_(147, e))
      var l = r,
        o = "" + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs
            i === null ? delete a[o] : (a[o] = i)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != "string") throw Error(_(284))
    if (!n._owner) throw Error(_(290, e))
  }
  return e
}
function jl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  )
}
function hs(e) {
  var t = e._init
  return t(e._payload)
}
function Cf(e) {
  function t(h, f) {
    if (e) {
      var m = h.deletions
      m === null ? ((h.deletions = [f]), (h.flags |= 16)) : m.push(f)
    }
  }
  function n(h, f) {
    if (!e) return null
    for (; f !== null; ) t(h, f), (f = f.sibling)
    return null
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling)
    return h
  }
  function l(h, f) {
    return (h = en(h, f)), (h.index = 0), (h.sibling = null), h
  }
  function o(h, f, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((h.flags |= 2), f) : m)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    )
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h
  }
  function a(h, f, m, k) {
    return f === null || f.tag !== 6
      ? ((f = pi(m, h.mode, k)), (f.return = h), f)
      : ((f = l(f, m)), (f.return = h), f)
  }
  function u(h, f, m, k) {
    var N = m.type
    return N === zn
      ? c(h, f, m.props.children, k, m.key)
      : f !== null &&
          (f.elementType === N ||
            (typeof N == "object" &&
              N !== null &&
              N.$$typeof === $t &&
              hs(N) === f.type))
        ? ((k = l(f, m.props)), (k.ref = Sr(h, f, m)), (k.return = h), k)
        : ((k = Xl(m.type, m.key, m.props, null, h.mode, k)),
          (k.ref = Sr(h, f, m)),
          (k.return = h),
          k)
  }
  function s(h, f, m, k) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = hi(m, h.mode, k)), (f.return = h), f)
      : ((f = l(f, m.children || [])), (f.return = h), f)
  }
  function c(h, f, m, k, N) {
    return f === null || f.tag !== 7
      ? ((f = yn(m, h.mode, k, N)), (f.return = h), f)
      : ((f = l(f, m)), (f.return = h), f)
  }
  function d(h, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = pi("" + f, h.mode, m)), (f.return = h), f
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case wl:
          return (
            (m = Xl(f.type, f.key, f.props, null, h.mode, m)),
            (m.ref = Sr(h, null, f)),
            (m.return = h),
            m
          )
        case Mn:
          return (f = hi(f, h.mode, m)), (f.return = h), f
        case $t:
          var k = f._init
          return d(h, k(f._payload), m)
      }
      if (Nr(f) || vr(f)) return (f = yn(f, h.mode, m, null)), (f.return = h), f
      jl(h, f)
    }
    return null
  }
  function p(h, f, m, k) {
    var N = f !== null ? f.key : null
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return N !== null ? null : a(h, f, "" + m, k)
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case wl:
          return m.key === N ? u(h, f, m, k) : null
        case Mn:
          return m.key === N ? s(h, f, m, k) : null
        case $t:
          return (N = m._init), p(h, f, N(m._payload), k)
      }
      if (Nr(m) || vr(m)) return N !== null ? null : c(h, f, m, k, null)
      jl(h, m)
    }
    return null
  }
  function S(h, f, m, k, N) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (h = h.get(m) || null), a(f, h, "" + k, N)
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case wl:
          return (h = h.get(k.key === null ? m : k.key) || null), u(f, h, k, N)
        case Mn:
          return (h = h.get(k.key === null ? m : k.key) || null), s(f, h, k, N)
        case $t:
          var D = k._init
          return S(h, f, m, D(k._payload), N)
      }
      if (Nr(k) || vr(k)) return (h = h.get(m) || null), c(f, h, k, N, null)
      jl(f, k)
    }
    return null
  }
  function x(h, f, m, k) {
    for (
      var N = null, D = null, v = f, R = (f = 0), F = null;
      v !== null && R < m.length;
      R++
    ) {
      v.index > R ? ((F = v), (v = null)) : (F = v.sibling)
      var M = p(h, v, m[R], k)
      if (M === null) {
        v === null && (v = F)
        break
      }
      e && v && M.alternate === null && t(h, v),
        (f = o(M, f, R)),
        D === null ? (N = M) : (D.sibling = M),
        (D = M),
        (v = F)
    }
    if (R === m.length) return n(h, v), le && cn(h, R), N
    if (v === null) {
      for (; R < m.length; R++)
        (v = d(h, m[R], k)),
          v !== null &&
            ((f = o(v, f, R)), D === null ? (N = v) : (D.sibling = v), (D = v))
      return le && cn(h, R), N
    }
    for (v = r(h, v); R < m.length; R++)
      (F = S(v, h, R, m[R], k)),
        F !== null &&
          (e && F.alternate !== null && v.delete(F.key === null ? R : F.key),
          (f = o(F, f, R)),
          D === null ? (N = F) : (D.sibling = F),
          (D = F))
    return (
      e &&
        v.forEach(function (Y) {
          return t(h, Y)
        }),
      le && cn(h, R),
      N
    )
  }
  function w(h, f, m, k) {
    var N = vr(m)
    if (typeof N != "function") throw Error(_(150))
    if (((m = N.call(m)), m == null)) throw Error(_(151))
    for (
      var D = (N = null), v = f, R = (f = 0), F = null, M = m.next();
      v !== null && !M.done;
      R++, M = m.next()
    ) {
      v.index > R ? ((F = v), (v = null)) : (F = v.sibling)
      var Y = p(h, v, M.value, k)
      if (Y === null) {
        v === null && (v = F)
        break
      }
      e && v && Y.alternate === null && t(h, v),
        (f = o(Y, f, R)),
        D === null ? (N = Y) : (D.sibling = Y),
        (D = Y),
        (v = F)
    }
    if (M.done) return n(h, v), le && cn(h, R), N
    if (v === null) {
      for (; !M.done; R++, M = m.next())
        (M = d(h, M.value, k)),
          M !== null &&
            ((f = o(M, f, R)), D === null ? (N = M) : (D.sibling = M), (D = M))
      return le && cn(h, R), N
    }
    for (v = r(h, v); !M.done; R++, M = m.next())
      (M = S(v, h, R, M.value, k)),
        M !== null &&
          (e && M.alternate !== null && v.delete(M.key === null ? R : M.key),
          (f = o(M, f, R)),
          D === null ? (N = M) : (D.sibling = M),
          (D = M))
    return (
      e &&
        v.forEach(function (fe) {
          return t(h, fe)
        }),
      le && cn(h, R),
      N
    )
  }
  function T(h, f, m, k) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === zn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case wl:
          e: {
            for (var N = m.key, D = f; D !== null; ) {
              if (D.key === N) {
                if (((N = m.type), N === zn)) {
                  if (D.tag === 7) {
                    n(h, D.sibling),
                      (f = l(D, m.props.children)),
                      (f.return = h),
                      (h = f)
                    break e
                  }
                } else if (
                  D.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === $t &&
                    hs(N) === D.type)
                ) {
                  n(h, D.sibling),
                    (f = l(D, m.props)),
                    (f.ref = Sr(h, D, m)),
                    (f.return = h),
                    (h = f)
                  break e
                }
                n(h, D)
                break
              } else t(h, D)
              D = D.sibling
            }
            m.type === zn
              ? ((f = yn(m.props.children, h.mode, k, m.key)),
                (f.return = h),
                (h = f))
              : ((k = Xl(m.type, m.key, m.props, null, h.mode, k)),
                (k.ref = Sr(h, f, m)),
                (k.return = h),
                (h = k))
          }
          return i(h)
        case Mn:
          e: {
            for (D = m.key; f !== null; ) {
              if (f.key === D)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(h, f.sibling),
                    (f = l(f, m.children || [])),
                    (f.return = h),
                    (h = f)
                  break e
                } else {
                  n(h, f)
                  break
                }
              else t(h, f)
              f = f.sibling
            }
            ;(f = hi(m, h.mode, k)), (f.return = h), (h = f)
          }
          return i(h)
        case $t:
          return (D = m._init), T(h, f, D(m._payload), k)
      }
      if (Nr(m)) return x(h, f, m, k)
      if (vr(m)) return w(h, f, m, k)
      jl(h, m)
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = l(f, m)), (f.return = h), (h = f))
          : (n(h, f), (f = pi(m, h.mode, k)), (f.return = h), (h = f)),
        i(h))
      : n(h, f)
  }
  return T
}
var tr = Cf(!0),
  Pf = Cf(!1),
  uo = ln(null),
  so = null,
  Vn = null,
  Ba = null
function $a() {
  Ba = Vn = so = null
}
function Va(e) {
  var t = uo.current
  te(uo), (e._currentValue = t)
}
function Ji(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Jn(e, t) {
  ;(so = e),
    (Ba = Vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null))
}
function ot(e) {
  var t = e._currentValue
  if (Ba !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
      if (so === null) throw Error(_(308))
      ;(Vn = e), (so.dependencies = { lanes: 0, firstContext: e })
    } else Vn = Vn.next = e
  return t
}
var pn = null
function Ha(e) {
  pn === null ? (pn = [e]) : pn.push(e)
}
function _f(e, t, n, r) {
  var l = t.interleaved
  return (
    l === null ? ((n.next = n), Ha(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Tt(e, r)
  )
}
function Tt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var Vt = !1
function Wa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Rf(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function Rt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function Zt(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), G & 2)) {
    var l = r.pending
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Tt(e, n)
    )
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ha(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Tt(e, n)
  )
}
function Vl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), La(e, n)
  }
}
function ms(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next)
      } while (n !== null)
      o === null ? (l = o = t) : (o = o.next = t)
    } else l = o = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function co(e, t, n, r) {
  var l = e.updateQueue
  Vt = !1
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending
  if (a !== null) {
    l.shared.pending = null
    var u = a,
      s = u.next
    ;(u.next = null), i === null ? (o = s) : (i.next = s), (i = u)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== i &&
        (a === null ? (c.firstBaseUpdate = s) : (a.next = s),
        (c.lastBaseUpdate = u)))
  }
  if (o !== null) {
    var d = l.baseState
    ;(i = 0), (c = s = u = null), (a = o)
    do {
      var p = a.lane,
        S = a.eventTime
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: S,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            })
        e: {
          var x = e,
            w = a
          switch (((p = t), (S = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                d = x.call(S, d, p)
                break e
              }
              d = x
              break e
            case 3:
              x.flags = (x.flags & -65537) | 128
            case 0:
              if (
                ((x = w.payload),
                (p = typeof x == "function" ? x.call(S, d, p) : x),
                p == null)
              )
                break e
              d = se({}, d, p)
              break e
            case 2:
              Vt = !0
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [a]) : p.push(a))
      } else
        (S = {
          eventTime: S,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((s = c = S), (u = d)) : (c = c.next = S),
          (i |= p)
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break
        ;(p = a),
          (a = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null)
      }
    } while (!0)
    if (
      (c === null && (u = d),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = c),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t
      do (i |= l.lane), (l = l.next)
      while (l !== t)
    } else o === null && (l.shared.lanes = 0)
    ;(En |= i), (e.lanes = i), (e.memoizedState = d)
  }
}
function vs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(_(191, l))
        l.call(r)
      }
    }
}
var cl = {},
  Et = ln(cl),
  qr = ln(cl),
  br = ln(cl)
function hn(e) {
  if (e === cl) throw Error(_(174))
  return e
}
function Qa(e, t) {
  switch ((b(br, t), b(qr, e), b(Et, cl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ji(null, "")
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ji(t, e))
  }
  te(Et), b(Et, t)
}
function nr() {
  te(Et), te(qr), te(br)
}
function Nf(e) {
  hn(br.current)
  var t = hn(Et.current),
    n = ji(t, e.type)
  t !== n && (b(qr, e), b(Et, n))
}
function Ka(e) {
  qr.current === e && (te(Et), te(qr))
}
var ae = ln(0)
function fo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var ai = []
function Ya() {
  for (var e = 0; e < ai.length; e++) ai[e]._workInProgressVersionPrimary = null
  ai.length = 0
}
var Hl = Mt.ReactCurrentDispatcher,
  ui = Mt.ReactCurrentBatchConfig,
  Sn = 0,
  ue = null,
  me = null,
  ye = null,
  po = !1,
  Or = !1,
  el = 0,
  Gh = 0
function Re() {
  throw Error(_(321))
}
function Xa(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!vt(e[n], t[n])) return !1
  return !0
}
function Ga(e, t, n, r, l, o) {
  if (
    ((Sn = o),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hl.current = e === null || e.memoizedState === null ? bh : em),
    (e = n(r, l)),
    Or)
  ) {
    o = 0
    do {
      if (((Or = !1), (el = 0), 25 <= o)) throw Error(_(301))
      ;(o += 1),
        (ye = me = null),
        (t.updateQueue = null),
        (Hl.current = tm),
        (e = n(r, l))
    } while (Or)
  }
  if (
    ((Hl.current = ho),
    (t = me !== null && me.next !== null),
    (Sn = 0),
    (ye = me = ue = null),
    (po = !1),
    t)
  )
    throw Error(_(300))
  return e
}
function Ja() {
  var e = el !== 0
  return (el = 0), e
}
function wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return ye === null ? (ue.memoizedState = ye = e) : (ye = ye.next = e), ye
}
function it() {
  if (me === null) {
    var e = ue.alternate
    e = e !== null ? e.memoizedState : null
  } else e = me.next
  var t = ye === null ? ue.memoizedState : ye.next
  if (t !== null) (ye = t), (me = e)
  else {
    if (e === null) throw Error(_(310))
    ;(me = e),
      (e = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      ye === null ? (ue.memoizedState = ye = e) : (ye = ye.next = e)
  }
  return ye
}
function tl(e, t) {
  return typeof t == "function" ? t(e) : t
}
function si(e) {
  var t = it(),
    n = t.queue
  if (n === null) throw Error(_(311))
  n.lastRenderedReducer = e
  var r = me,
    l = r.baseQueue,
    o = n.pending
  if (o !== null) {
    if (l !== null) {
      var i = l.next
      ;(l.next = o.next), (o.next = i)
    }
    ;(r.baseQueue = l = o), (n.pending = null)
  }
  if (l !== null) {
    ;(o = l.next), (r = r.baseState)
    var a = (i = null),
      u = null,
      s = o
    do {
      var c = s.lane
      if ((Sn & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action))
      else {
        var d = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        }
        u === null ? ((a = u = d), (i = r)) : (u = u.next = d),
          (ue.lanes |= c),
          (En |= c)
      }
      s = s.next
    } while (s !== null && s !== o)
    u === null ? (i = r) : (u.next = a),
      vt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    l = e
    do (o = l.lane), (ue.lanes |= o), (En |= o), (l = l.next)
    while (l !== e)
  } else l === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function ci(e) {
  var t = it(),
    n = t.queue
  if (n === null) throw Error(_(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState
  if (l !== null) {
    n.pending = null
    var i = (l = l.next)
    do (o = e(o, i.action)), (i = i.next)
    while (i !== l)
    vt(o, t.memoizedState) || (Ue = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, r]
}
function Lf() {}
function jf(e, t) {
  var n = ue,
    r = it(),
    l = t(),
    o = !vt(r.memoizedState, l)
  if (
    (o && ((r.memoizedState = l), (Ue = !0)),
    (r = r.queue),
    Za(Mf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ye !== null && ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      nl(9, Df.bind(null, n, r, l, t), void 0, null),
      we === null)
    )
      throw Error(_(349))
    Sn & 30 || Tf(n, t, l)
  }
  return l
}
function Tf(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Df(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), zf(t) && If(e)
}
function Mf(e, t, n) {
  return n(function () {
    zf(t) && If(e)
  })
}
function zf(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !vt(e, n)
  } catch {
    return !0
  }
}
function If(e) {
  var t = Tt(e, 1)
  t !== null && mt(t, e, 1, -1)
}
function gs(e) {
  var t = wt()
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: tl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = qh.bind(null, ue, e)),
    [t.memoizedState, e]
  )
}
function nl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Of() {
  return it().memoizedState
}
function Wl(e, t, n, r) {
  var l = wt()
  ;(ue.flags |= e),
    (l.memoizedState = nl(1 | t, n, void 0, r === void 0 ? null : r))
}
function jo(e, t, n, r) {
  var l = it()
  r = r === void 0 ? null : r
  var o = void 0
  if (me !== null) {
    var i = me.memoizedState
    if (((o = i.destroy), r !== null && Xa(r, i.deps))) {
      l.memoizedState = nl(t, n, o, r)
      return
    }
  }
  ;(ue.flags |= e), (l.memoizedState = nl(1 | t, n, o, r))
}
function ys(e, t) {
  return Wl(8390656, 8, e, t)
}
function Za(e, t) {
  return jo(2048, 8, e, t)
}
function Ff(e, t) {
  return jo(4, 2, e, t)
}
function Uf(e, t) {
  return jo(4, 4, e, t)
}
function Af(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Bf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), jo(4, 4, Af.bind(null, t, e), n)
  )
}
function qa() {}
function $f(e, t) {
  var n = it()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Xa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function Vf(e, t) {
  var n = it()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Xa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Hf(e, t, n) {
  return Sn & 21
    ? (vt(n, t) || ((n = Yc()), (ue.lanes |= n), (En |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n))
}
function Jh(e, t) {
  var n = J
  ;(J = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = ui.transition
  ui.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(J = n), (ui.transition = r)
  }
}
function Wf() {
  return it().memoizedState
}
function Zh(e, t, n) {
  var r = bt(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qf(e))
  )
    Kf(t, n)
  else if (((n = _f(e, t, n, r)), n !== null)) {
    var l = ze()
    mt(n, e, r, l), Yf(n, t, r)
  }
}
function qh(e, t, n) {
  var r = bt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (Qf(e)) Kf(t, l)
  else {
    var o = e.alternate
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n)
        if (((l.hasEagerState = !0), (l.eagerState = a), vt(a, i))) {
          var u = t.interleaved
          u === null
            ? ((l.next = l), Ha(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l)
          return
        }
      } catch {
      } finally {
      }
    ;(n = _f(e, t, l, r)),
      n !== null && ((l = ze()), mt(n, e, r, l), Yf(n, t, r))
  }
}
function Qf(e) {
  var t = e.alternate
  return e === ue || (t !== null && t === ue)
}
function Kf(e, t) {
  Or = po = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function Yf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), La(e, n)
  }
}
var ho = {
    readContext: ot,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1,
  },
  bh = {
    readContext: ot,
    useCallback: function (e, t) {
      return (wt().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: ot,
    useEffect: ys,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wl(4194308, 4, Af.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Wl(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Wl(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = wt()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = wt()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Zh.bind(null, ue, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = wt()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: gs,
    useDebugValue: qa,
    useDeferredValue: function (e) {
      return (wt().memoizedState = e)
    },
    useTransition: function () {
      var e = gs(!1),
        t = e[0]
      return (e = Jh.bind(null, e[1])), (wt().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        l = wt()
      if (le) {
        if (n === void 0) throw Error(_(407))
        n = n()
      } else {
        if (((n = t()), we === null)) throw Error(_(349))
        Sn & 30 || Tf(r, t, n)
      }
      l.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (l.queue = o),
        ys(Mf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        nl(9, Df.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = wt(),
        t = we.identifierPrefix
      if (le) {
        var n = _t,
          r = Pt
        ;(n = (r & ~(1 << (32 - ht(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = el++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":")
      } else (n = Gh++), (t = ":" + t + "r" + n.toString(32) + ":")
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  em = {
    readContext: ot,
    useCallback: $f,
    useContext: ot,
    useEffect: Za,
    useImperativeHandle: Bf,
    useInsertionEffect: Ff,
    useLayoutEffect: Uf,
    useMemo: Vf,
    useReducer: si,
    useRef: Of,
    useState: function () {
      return si(tl)
    },
    useDebugValue: qa,
    useDeferredValue: function (e) {
      var t = it()
      return Hf(t, me.memoizedState, e)
    },
    useTransition: function () {
      var e = si(tl)[0],
        t = it().memoizedState
      return [e, t]
    },
    useMutableSource: Lf,
    useSyncExternalStore: jf,
    useId: Wf,
    unstable_isNewReconciler: !1,
  },
  tm = {
    readContext: ot,
    useCallback: $f,
    useContext: ot,
    useEffect: Za,
    useImperativeHandle: Bf,
    useInsertionEffect: Ff,
    useLayoutEffect: Uf,
    useMemo: Vf,
    useReducer: ci,
    useRef: Of,
    useState: function () {
      return ci(tl)
    },
    useDebugValue: qa,
    useDeferredValue: function (e) {
      var t = it()
      return me === null ? (t.memoizedState = e) : Hf(t, me.memoizedState, e)
    },
    useTransition: function () {
      var e = ci(tl)[0],
        t = it().memoizedState
      return [e, t]
    },
    useMutableSource: Lf,
    useSyncExternalStore: jf,
    useId: Wf,
    unstable_isNewReconciler: !1,
  }
function ct(e, t) {
  if (e && e.defaultProps) {
    ;(t = se({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function Zi(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var To = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? _n(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = ze(),
      l = bt(e),
      o = Rt(r, l)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = Zt(e, o, l)),
      t !== null && (mt(t, e, l, r), Vl(t, e, l))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = ze(),
      l = bt(e),
      o = Rt(r, l)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Zt(e, o, l)),
      t !== null && (mt(t, e, l, r), Vl(t, e, l))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = ze(),
      r = bt(e),
      l = Rt(n, r)
    ;(l.tag = 2),
      t != null && (l.callback = t),
      (t = Zt(e, l, r)),
      t !== null && (mt(t, e, r, n), Vl(t, e, r))
  },
}
function ws(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Xr(n, r) || !Xr(l, o)
        : !0
  )
}
function Xf(e, t, n) {
  var r = !1,
    l = nn,
    o = t.contextType
  return (
    typeof o == "object" && o !== null
      ? (o = ot(o))
      : ((l = Be(t) ? wn : je.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? bn(e, l) : nn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = To),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function xs(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && To.enqueueReplaceState(t, t.state, null)
}
function qi(e, t, n, r) {
  var l = e.stateNode
  ;(l.props = n), (l.state = e.memoizedState), (l.refs = {}), Wa(e)
  var o = t.contextType
  typeof o == "object" && o !== null
    ? (l.context = ot(o))
    : ((o = Be(t) ? wn : je.current), (l.context = bn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Zi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && To.enqueueReplaceState(l, l.state, null),
      co(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function rr(e, t) {
  try {
    var n = "",
      r = t
    do (n += Lp(r)), (r = r.return)
    while (r)
    var l = n
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: e, source: t, stack: l, digest: null }
}
function fi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function bi(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var nm = typeof WeakMap == "function" ? WeakMap : Map
function Gf(e, t, n) {
  ;(n = Rt(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      vo || ((vo = !0), (sa = r)), bi(e, t)
    }),
    n
  )
}
function Jf(e, t, n) {
  ;(n = Rt(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == "function") {
    var l = t.value
    ;(n.payload = function () {
      return r(l)
    }),
      (n.callback = function () {
        bi(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        bi(e, t),
          typeof r != "function" &&
            (qt === null ? (qt = new Set([this])) : qt.add(this))
        var i = t.stack
        this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" })
      }),
    n
  )
}
function Ss(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new nm()
    var l = new Set()
    r.set(t, l)
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l))
  l.has(n) || (l.add(n), (e = vm.bind(null, e, t, n)), t.then(e, e))
}
function Es(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function ks(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Rt(-1, 1)), (t.tag = 2), Zt(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var rm = Mt.ReactCurrentOwner,
  Ue = !1
function Me(e, t, n, r) {
  t.child = e === null ? Pf(t, null, n, r) : tr(t, e.child, n, r)
}
function Cs(e, t, n, r, l) {
  n = n.render
  var o = t.ref
  return (
    Jn(t, l),
    (r = Ga(e, t, n, r, o, l)),
    (n = Ja()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Dt(e, t, l))
      : (le && n && Fa(t), (t.flags |= 1), Me(e, t, r, l), t.child)
  )
}
function Ps(e, t, n, r, l) {
  if (e === null) {
    var o = n.type
    return typeof o == "function" &&
      !iu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Zf(e, t, o, r, l))
      : ((e = Xl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Xr), n(i, r) && e.ref === t.ref)
    )
      return Dt(e, t, l)
  }
  return (
    (t.flags |= 1),
    (e = en(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function Zf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps
    if (Xr(o, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ue = !0)
      else return (t.lanes = e.lanes), Dt(e, t, l)
  }
  return ea(e, t, n, r, l)
}
function qf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(Wn, Qe),
        (Qe |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b(Wn, Qe),
          (Qe |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        b(Wn, Qe),
        (Qe |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(Wn, Qe),
      (Qe |= r)
  return Me(e, t, l, n), t.child
}
function bf(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function ea(e, t, n, r, l) {
  var o = Be(n) ? wn : je.current
  return (
    (o = bn(t, o)),
    Jn(t, l),
    (n = Ga(e, t, n, r, o, l)),
    (r = Ja()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Dt(e, t, l))
      : (le && r && Fa(t), (t.flags |= 1), Me(e, t, n, l), t.child)
  )
}
function _s(e, t, n, r, l) {
  if (Be(n)) {
    var o = !0
    oo(t)
  } else o = !1
  if ((Jn(t, l), t.stateNode === null))
    Ql(e, t), Xf(t, n, r), qi(t, n, r, l), (r = !0)
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps
    i.props = a
    var u = i.context,
      s = n.contextType
    typeof s == "object" && s !== null
      ? (s = ot(s))
      : ((s = Be(n) ? wn : je.current), (s = bn(t, s)))
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function"
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && xs(t, i, r, s)),
      (Vt = !1)
    var p = t.memoizedState
    ;(i.state = p),
      co(t, r, i, l),
      (u = t.memoizedState),
      a !== r || p !== u || Ae.current || Vt
        ? (typeof c == "function" && (Zi(t, n, c, r), (u = t.memoizedState)),
          (a = Vt || ws(t, n, a, r, p, u, s))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(i = t.stateNode),
      Rf(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : ct(t.type, a)),
      (i.props = s),
      (d = t.pendingProps),
      (p = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = ot(u))
        : ((u = Be(n) ? wn : je.current), (u = bn(t, u)))
    var S = n.getDerivedStateFromProps
    ;(c =
      typeof S == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== d || p !== u) && xs(t, i, r, u)),
      (Vt = !1),
      (p = t.memoizedState),
      (i.state = p),
      co(t, r, i, l)
    var x = t.memoizedState
    a !== d || p !== x || Ae.current || Vt
      ? (typeof S == "function" && (Zi(t, n, S, r), (x = t.memoizedState)),
        (s = Vt || ws(t, n, s, r, p, x, u) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return ta(e, t, n, r, o, l)
}
function ta(e, t, n, r, l, o) {
  bf(e, t)
  var i = (t.flags & 128) !== 0
  if (!r && !i) return l && fs(t, n, !1), Dt(e, t, o)
  ;(r = t.stateNode), (rm.current = t)
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = tr(t, e.child, null, o)), (t.child = tr(t, null, a, o)))
      : Me(e, t, a, o),
    (t.memoizedState = r.state),
    l && fs(t, n, !0),
    t.child
  )
}
function ed(e) {
  var t = e.stateNode
  t.pendingContext
    ? cs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && cs(e, t.context, !1),
    Qa(e, t.containerInfo)
}
function Rs(e, t, n, r, l) {
  return er(), Aa(l), (t.flags |= 256), Me(e, t, n, r), t.child
}
var na = { dehydrated: null, treeContext: null, retryLane: 0 }
function ra(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function td(e, t, n) {
  var r = t.pendingProps,
    l = ae.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    b(ae, l & 1),
    e === null)
  )
    return (
      Gi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = zo(i, r, 0, null)),
              (e = yn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ra(n)),
              (t.memoizedState = na),
              e)
            : ba(t, i))
    )
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return lm(e, t, i, r, a, l, n)
  if (o) {
    ;(o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling)
    var u = { mode: "hidden", children: r.children }
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = en(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = en(a, o)) : ((o = yn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ra(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = na),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = en(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function ba(e, t) {
  return (
    (t = zo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Tl(e, t, n, r) {
  return (
    r !== null && Aa(r),
    tr(t, e.child, null, n),
    (e = ba(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function lm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = fi(Error(_(422)))), Tl(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = zo({ mode: "visible", children: r.children }, l, 0, null)),
          (o = yn(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && tr(t, e.child, null, i),
          (t.child.memoizedState = ra(i)),
          (t.memoizedState = na),
          o)
  if (!(t.mode & 1)) return Tl(e, t, i, null)
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst
    return (r = a), (o = Error(_(419))), (r = fi(o, r, void 0)), Tl(e, t, i, r)
  }
  if (((a = (i & e.childLanes) !== 0), Ue || a)) {
    if (((r = we), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2
          break
        case 16:
          l = 8
          break
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
          l = 32
          break
        case 536870912:
          l = 268435456
          break
        default:
          l = 0
      }
      ;(l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Tt(e, l), mt(r, e, l, -1))
    }
    return ou(), (r = fi(Error(_(421)))), Tl(e, t, i, r)
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = gm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ke = Jt(l.nextSibling)),
      (Ye = t),
      (le = !0),
      (pt = null),
      e !== null &&
        ((et[tt++] = Pt),
        (et[tt++] = _t),
        (et[tt++] = xn),
        (Pt = e.id),
        (_t = e.overflow),
        (xn = t)),
      (t = ba(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Ns(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Ji(e.return, t, n)
}
function di(e, t, n, r, l) {
  var o = e.memoizedState
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l))
}
function nd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail
  if ((Me(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ns(e, n, t)
        else if (e.tag === 19) Ns(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((b(ae, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && fo(e) === null && (l = n),
            (n = n.sibling)
        ;(n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          di(t, !1, l, n, o)
        break
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && fo(e) === null)) {
            t.child = l
            break
          }
          ;(e = l.sibling), (l.sibling = n), (n = l), (l = e)
        }
        di(t, !0, n, null, o)
        break
      case "together":
        di(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Ql(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Dt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (En |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(_(153))
  if (t.child !== null) {
    for (
      e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = en(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function om(e, t, n) {
  switch (t.tag) {
    case 3:
      ed(t), er()
      break
    case 5:
      Nf(t)
      break
    case 1:
      Be(t.type) && oo(t)
      break
    case 4:
      Qa(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value
      b(uo, r._currentValue), (r._currentValue = l)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? td(e, t, n)
            : (b(ae, ae.current & 1),
              (e = Dt(e, t, n)),
              e !== null ? e.sibling : null)
      b(ae, ae.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return nd(e, t, n)
        t.flags |= 128
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        b(ae, ae.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), qf(e, t, n)
  }
  return Dt(e, t, n)
}
var rd, la, ld, od
rd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
la = function () {}
ld = function (e, t, n, r) {
  var l = e.memoizedProps
  if (l !== r) {
    ;(e = t.stateNode), hn(Et.current)
    var o = null
    switch (n) {
      case "input":
        ;(l = _i(e, l)), (r = _i(e, r)), (o = [])
        break
      case "select":
        ;(l = se({}, l, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (o = [])
        break
      case "textarea":
        ;(l = Li(e, l)), (r = Li(e, r)), (o = [])
        break
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ro)
    }
    Ti(n, r)
    var i
    n = null
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s]
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""))
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            ($r.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null))
    for (s in r) {
      var u = r[s]
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""))
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]))
          } else n || (o || (o = []), o.push(s, n)), (n = u)
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (o = o || []).push(s, "" + u)
              : s !== "suppressContentEditableWarning" &&
                s !== "suppressHydrationWarning" &&
                ($r.hasOwnProperty(s)
                  ? (u != null && s === "onScroll" && ee("scroll", e),
                    o || a === u || (o = []))
                  : (o = o || []).push(s, u))
    }
    n && (o = o || []).push("style", n)
    var s = o
    ;(t.updateQueue = s) && (t.flags |= 4)
  }
}
od = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Er(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case "collapsed":
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling)
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function im(e, t, n) {
  var r = t.pendingProps
  switch ((Ua(t), t.tag)) {
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
      return Ne(t), null
    case 1:
      return Be(t.type) && lo(), Ne(t), null
    case 3:
      return (
        (r = t.stateNode),
        nr(),
        te(Ae),
        te(je),
        Ya(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ll(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), pt !== null && (da(pt), (pt = null)))),
        la(e, t),
        Ne(t),
        null
      )
    case 5:
      Ka(t)
      var l = hn(br.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        ld(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166))
          return Ne(t), null
        }
        if (((e = hn(Et.current)), Ll(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[xt] = t), (r[Zr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r)
              break
            case "iframe":
            case "object":
            case "embed":
              ee("load", r)
              break
            case "video":
            case "audio":
              for (l = 0; l < jr.length; l++) ee(jr[l], r)
              break
            case "source":
              ee("error", r)
              break
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r)
              break
            case "details":
              ee("toggle", r)
              break
            case "input":
              Fu(r, o), ee("invalid", r)
              break
            case "select":
              ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                ee("invalid", r)
              break
            case "textarea":
              Au(r, o), ee("invalid", r)
          }
          Ti(n, o), (l = null)
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i]
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Nl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Nl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : $r.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  ee("scroll", r)
            }
          switch (n) {
            case "input":
              xl(r), Uu(r, o, !0)
              break
            case "textarea":
              xl(r), Bu(r)
              break
            case "select":
            case "option":
              break
            default:
              typeof o.onClick == "function" && (r.onclick = ro)
          }
          ;(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Dc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[xt] = t),
            (e[Zr] = r),
            rd(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((i = Di(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (l = r)
                break
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (l = r)
                break
              case "video":
              case "audio":
                for (l = 0; l < jr.length; l++) ee(jr[l], e)
                l = r
                break
              case "source":
                ee("error", e), (l = r)
                break
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (l = r)
                break
              case "details":
                ee("toggle", e), (l = r)
                break
              case "input":
                Fu(e, r), (l = _i(e, r)), ee("invalid", e)
                break
              case "option":
                l = r
                break
              case "select":
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = se({}, r, { value: void 0 })),
                  ee("invalid", e)
                break
              case "textarea":
                Au(e, r), (l = Li(e, r)), ee("invalid", e)
                break
              default:
                l = r
            }
            Ti(n, l), (a = l)
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o]
                o === "style"
                  ? Ic(e, u)
                  : o === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Mc(e, u))
                    : o === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && Vr(e, u)
                        : typeof u == "number" && Vr(e, "" + u)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        ($r.hasOwnProperty(o)
                          ? u != null && o === "onScroll" && ee("scroll", e)
                          : u != null && ka(e, o, u, i))
              }
            switch (n) {
              case "input":
                xl(e), Uu(e, r, !1)
                break
              case "textarea":
                xl(e), Bu(e)
                break
              case "option":
                r.value != null && e.setAttribute("value", "" + tn(r.value))
                break
              case "select":
                ;(e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Kn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Kn(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof l.onClick == "function" && (e.onclick = ro)
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus
                break e
              case "img":
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return Ne(t), null
    case 6:
      if (e && t.stateNode != null) od(e, t, e.memoizedProps, r)
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166))
        if (((n = hn(br.current)), hn(Et.current), Ll(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[xt] = t),
            (o = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Nl(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Nl(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xt] = t),
            (t.stateNode = r)
      }
      return Ne(t), null
    case 13:
      if (
        (te(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Ke !== null && t.mode & 1 && !(t.flags & 128))
          kf(), er(), (t.flags |= 98560), (o = !1)
        else if (((o = Ll(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(_(318))
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(_(317))
            o[xt] = t
          } else
            er(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Ne(t), (o = !1)
        } else pt !== null && (da(pt), (pt = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? ve === 0 && (ve = 3) : ou())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null)
    case 4:
      return (
        nr(), la(e, t), e === null && Gr(t.stateNode.containerInfo), Ne(t), null
      )
    case 10:
      return Va(t.type._context), Ne(t), null
    case 17:
      return Be(t.type) && lo(), Ne(t), null
    case 19:
      if ((te(ae), (o = t.memoizedState), o === null)) return Ne(t), null
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Er(o, !1)
        else {
          if (ve !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = fo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Er(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return b(ae, (ae.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            de() > lr &&
            ((t.flags |= 128), (r = !0), Er(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = fo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Er(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !le)
            )
              return Ne(t), null
          } else
            2 * de() - o.renderingStartTime > lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Er(o, !1), (t.lanes = 4194304))
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i))
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = de()),
          (t.sibling = null),
          (n = ae.current),
          b(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null)
    case 22:
    case 23:
      return (
        lu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(_(156, t.tag))
}
function am(e, t) {
  switch ((Ua(t), t.tag)) {
    case 1:
      return (
        Be(t.type) && lo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        nr(),
        te(Ae),
        te(je),
        Ya(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Ka(t), null
    case 13:
      if (
        (te(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340))
        er()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return te(ae), null
    case 4:
      return nr(), null
    case 10:
      return Va(t.type._context), null
    case 22:
    case 23:
      return lu(), null
    case 24:
      return null
    default:
      return null
  }
}
var Dl = !1,
  Le = !1,
  um = typeof WeakSet == "function" ? WeakSet : Set,
  z = null
function Hn(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null)
      } catch (r) {
        ce(e, t, r)
      }
    else n.current = null
}
function oa(e, t, n) {
  try {
    n()
  } catch (r) {
    ce(e, t, r)
  }
}
var Ls = !1
function sm(e, t) {
  if (((Vi = eo), (e = cf()), Oa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var l = r.anchorOffset,
            o = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var i = 0,
            a = -1,
            u = -1,
            s = 0,
            c = 0,
            d = e,
            p = null
          t: for (;;) {
            for (
              var S;
              d !== n || (l !== 0 && d.nodeType !== 3) || (a = i + l),
                d !== o || (r !== 0 && d.nodeType !== 3) || (u = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (S = d.firstChild) !== null;

            )
              (p = d), (d = S)
            for (;;) {
              if (d === e) break t
              if (
                (p === n && ++s === l && (a = i),
                p === o && ++c === r && (u = i),
                (S = d.nextSibling) !== null)
              )
                break
              ;(d = p), (p = d.parentNode)
            }
            d = S
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Hi = { focusedElem: e, selectionRange: n }, eo = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e)
    else
      for (; z !== null; ) {
        t = z
        try {
          var x = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    T = x.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : ct(t.type, w),
                      T,
                    )
                  h.__reactInternalSnapshotBeforeUpdate = f
                }
                break
              case 3:
                var m = t.stateNode.containerInfo
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(_(163))
            }
        } catch (k) {
          ce(t, t.return, k)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (z = e)
          break
        }
        z = t.return
      }
  return (x = Ls), (Ls = !1), x
}
function Fr(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next)
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy
        ;(l.destroy = void 0), o !== void 0 && oa(t, n, o)
      }
      l = l.next
    } while (l !== r)
  }
}
function Do(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function ia(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == "function" ? t(e) : (t.current = e)
  }
}
function id(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), id(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[xt], delete t[Zr], delete t[Ki], delete t[Qh], delete t[Kh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function ad(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function js(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ad(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function aa(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ro))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (aa(e, t, n), e = e.sibling; e !== null; ) aa(e, t, n), (e = e.sibling)
}
function ua(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ua(e, t, n), e = e.sibling; e !== null; ) ua(e, t, n), (e = e.sibling)
}
var Ce = null,
  ft = !1
function At(e, t, n) {
  for (n = n.child; n !== null; ) ud(e, t, n), (n = n.sibling)
}
function ud(e, t, n) {
  if (St && typeof St.onCommitFiberUnmount == "function")
    try {
      St.onCommitFiberUnmount(Co, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Le || Hn(n, t)
    case 6:
      var r = Ce,
        l = ft
      ;(Ce = null),
        At(e, t, n),
        (Ce = r),
        (ft = l),
        Ce !== null &&
          (ft
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ce.removeChild(n.stateNode))
      break
    case 18:
      Ce !== null &&
        (ft
          ? ((e = Ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? oi(e.parentNode, n)
              : e.nodeType === 1 && oi(e, n),
            Kr(e))
          : oi(Ce, n.stateNode))
      break
    case 4:
      ;(r = Ce),
        (l = ft),
        (Ce = n.stateNode.containerInfo),
        (ft = !0),
        At(e, t, n),
        (Ce = r),
        (ft = l)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next
        do {
          var o = l,
            i = o.destroy
          ;(o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && oa(n, t, i),
            (l = l.next)
        } while (l !== r)
      }
      At(e, t, n)
      break
    case 1:
      if (
        !Le &&
        (Hn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (a) {
          ce(n, t, a)
        }
      At(e, t, n)
      break
    case 21:
      At(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((Le = (r = Le) || n.memoizedState !== null), At(e, t, n), (Le = r))
        : At(e, t, n)
      break
    default:
      At(e, t, n)
  }
}
function Ts(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new um()),
      t.forEach(function (r) {
        var l = ym.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(l, l))
      })
  }
}
function st(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r]
      try {
        var o = e,
          i = t,
          a = i
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ;(Ce = a.stateNode), (ft = !1)
              break e
            case 3:
              ;(Ce = a.stateNode.containerInfo), (ft = !0)
              break e
            case 4:
              ;(Ce = a.stateNode.containerInfo), (ft = !0)
              break e
          }
          a = a.return
        }
        if (Ce === null) throw Error(_(160))
        ud(o, i, l), (Ce = null), (ft = !1)
        var u = l.alternate
        u !== null && (u.return = null), (l.return = null)
      } catch (s) {
        ce(l, t, s)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) sd(t, e), (t = t.sibling)
}
function sd(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((st(t, e), yt(e), r & 4)) {
        try {
          Fr(3, e, e.return), Do(3, e)
        } catch (w) {
          ce(e, e.return, w)
        }
        try {
          Fr(5, e, e.return)
        } catch (w) {
          ce(e, e.return, w)
        }
      }
      break
    case 1:
      st(t, e), yt(e), r & 512 && n !== null && Hn(n, n.return)
      break
    case 5:
      if (
        (st(t, e),
        yt(e),
        r & 512 && n !== null && Hn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode
        try {
          Vr(l, "")
        } catch (w) {
          ce(e, e.return, w)
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && jc(l, o),
              Di(a, i)
            var s = Di(a, o)
            for (i = 0; i < u.length; i += 2) {
              var c = u[i],
                d = u[i + 1]
              c === "style"
                ? Ic(l, d)
                : c === "dangerouslySetInnerHTML"
                  ? Mc(l, d)
                  : c === "children"
                    ? Vr(l, d)
                    : ka(l, c, d, s)
            }
            switch (a) {
              case "input":
                Ri(l, o)
                break
              case "textarea":
                Tc(l, o)
                break
              case "select":
                var p = l._wrapperState.wasMultiple
                l._wrapperState.wasMultiple = !!o.multiple
                var S = o.value
                S != null
                  ? Kn(l, !!o.multiple, S, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Kn(l, !!o.multiple, o.defaultValue, !0)
                      : Kn(l, !!o.multiple, o.multiple ? [] : "", !1))
            }
            l[Zr] = o
          } catch (w) {
            ce(e, e.return, w)
          }
      }
      break
    case 6:
      if ((st(t, e), yt(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162))
        ;(l = e.stateNode), (o = e.memoizedProps)
        try {
          l.nodeValue = o
        } catch (w) {
          ce(e, e.return, w)
        }
      }
      break
    case 3:
      if (
        (st(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Kr(t.containerInfo)
        } catch (w) {
          ce(e, e.return, w)
        }
      break
    case 4:
      st(t, e), yt(e)
      break
    case 13:
      st(t, e),
        yt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (nu = de())),
        r & 4 && Ts(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Le = (s = Le) || c), st(t, e), (Le = s)) : st(t, e),
        yt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (z = e, c = e.child; c !== null; ) {
            for (d = z = c; z !== null; ) {
              switch (((p = z), (S = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fr(4, p, p.return)
                  break
                case 1:
                  Hn(p, p.return)
                  var x = p.stateNode
                  if (typeof x.componentWillUnmount == "function") {
                    ;(r = p), (n = p.return)
                    try {
                      ;(t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount()
                    } catch (w) {
                      ce(r, n, w)
                    }
                  }
                  break
                case 5:
                  Hn(p, p.return)
                  break
                case 22:
                  if (p.memoizedState !== null) {
                    Ms(d)
                    continue
                  }
              }
              S !== null ? ((S.return = p), (z = S)) : Ms(d)
            }
            c = c.sibling
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d
              try {
                ;(l = d.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = d.stateNode),
                      (u = d.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = zc("display", i)))
              } catch (w) {
                ce(e, e.return, w)
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = s ? "" : d.memoizedProps
              } catch (w) {
                ce(e, e.return, w)
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ;(d.child.return = d), (d = d.child)
            continue
          }
          if (d === e) break e
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e
            c === d && (c = null), (d = d.return)
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling)
        }
      }
      break
    case 19:
      st(t, e), yt(e), r & 4 && Ts(e)
      break
    case 21:
      break
    default:
      st(t, e), yt(e)
  }
}
function yt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ad(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(_(160))
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode
          r.flags & 32 && (Vr(l, ""), (r.flags &= -33))
          var o = js(e)
          ua(e, o, l)
          break
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = js(e)
          aa(e, a, i)
          break
        default:
          throw Error(_(161))
      }
    } catch (u) {
      ce(e, e.return, u)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function cm(e, t, n) {
  ;(z = e), cd(e)
}
function cd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      o = l.child
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Dl
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Le
        a = Dl
        var s = Le
        if (((Dl = i), (Le = u) && !s))
          for (z = l; z !== null; )
            (i = z),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? zs(l)
                : u !== null
                  ? ((u.return = i), (z = u))
                  : zs(l)
        for (; o !== null; ) (z = o), cd(o), (o = o.sibling)
        ;(z = l), (Dl = a), (Le = s)
      }
      Ds(e)
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (z = o)) : Ds(e)
  }
}
function Ds(e) {
  for (; z !== null; ) {
    var t = z
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Le || Do(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !Le)
                if (n === null) r.componentDidMount()
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  )
                }
              var o = t.updateQueue
              o !== null && vs(t, o, r)
              break
            case 3:
              var i = t.updateQueue
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                vs(t, i, n)
              }
              break
            case 5:
              var a = t.stateNode
              if (n === null && t.flags & 4) {
                n = a
                var u = t.memoizedProps
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus()
                    break
                  case "img":
                    u.src && (n.src = u.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate
                if (s !== null) {
                  var c = s.memoizedState
                  if (c !== null) {
                    var d = c.dehydrated
                    d !== null && Kr(d)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(_(163))
          }
        Le || (t.flags & 512 && ia(t))
      } catch (p) {
        ce(t, t.return, p)
      }
    }
    if (t === e) {
      z = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (z = n)
      break
    }
    z = t.return
  }
}
function Ms(e) {
  for (; z !== null; ) {
    var t = z
    if (t === e) {
      z = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (z = n)
      break
    }
    z = t.return
  }
}
function zs(e) {
  for (; z !== null; ) {
    var t = z
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Do(4, t)
          } catch (u) {
            ce(t, n, u)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == "function") {
            var l = t.return
            try {
              r.componentDidMount()
            } catch (u) {
              ce(t, l, u)
            }
          }
          var o = t.return
          try {
            ia(t)
          } catch (u) {
            ce(t, o, u)
          }
          break
        case 5:
          var i = t.return
          try {
            ia(t)
          } catch (u) {
            ce(t, i, u)
          }
      }
    } catch (u) {
      ce(t, t.return, u)
    }
    if (t === e) {
      z = null
      break
    }
    var a = t.sibling
    if (a !== null) {
      ;(a.return = t.return), (z = a)
      break
    }
    z = t.return
  }
}
var fm = Math.ceil,
  mo = Mt.ReactCurrentDispatcher,
  eu = Mt.ReactCurrentOwner,
  lt = Mt.ReactCurrentBatchConfig,
  G = 0,
  we = null,
  he = null,
  Pe = 0,
  Qe = 0,
  Wn = ln(0),
  ve = 0,
  rl = null,
  En = 0,
  Mo = 0,
  tu = 0,
  Ur = null,
  Fe = null,
  nu = 0,
  lr = 1 / 0,
  kt = null,
  vo = !1,
  sa = null,
  qt = null,
  Ml = !1,
  Kt = null,
  go = 0,
  Ar = 0,
  ca = null,
  Kl = -1,
  Yl = 0
function ze() {
  return G & 6 ? de() : Kl !== -1 ? Kl : (Kl = de())
}
function bt(e) {
  return e.mode & 1
    ? G & 2 && Pe !== 0
      ? Pe & -Pe
      : Xh.transition !== null
        ? (Yl === 0 && (Yl = Yc()), Yl)
        : ((e = J),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ef(e.type))),
          e)
    : 1
}
function mt(e, t, n, r) {
  if (50 < Ar) throw ((Ar = 0), (ca = null), Error(_(185)))
  al(e, n, r),
    (!(G & 2) || e !== we) &&
      (e === we && (!(G & 2) && (Mo |= n), ve === 4 && Wt(e, Pe)),
      $e(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((lr = de() + 500), Lo && on()))
}
function $e(e, t) {
  var n = e.callbackNode
  Xp(e, t)
  var r = bl(e, e === we ? Pe : 0)
  if (r === 0)
    n !== null && Hu(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Hu(n), t === 1))
      e.tag === 0 ? Yh(Is.bind(null, e)) : xf(Is.bind(null, e)),
        Hh(function () {
          !(G & 6) && on()
        }),
        (n = null)
    else {
      switch (Xc(r)) {
        case 1:
          n = Na
          break
        case 4:
          n = Qc
          break
        case 16:
          n = ql
          break
        case 536870912:
          n = Kc
          break
        default:
          n = ql
      }
      n = yd(n, fd.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function fd(e, t) {
  if (((Kl = -1), (Yl = 0), G & 6)) throw Error(_(327))
  var n = e.callbackNode
  if (Zn() && e.callbackNode !== n) return null
  var r = bl(e, e === we ? Pe : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = yo(e, r)
  else {
    t = r
    var l = G
    G |= 2
    var o = pd()
    ;(we !== e || Pe !== t) && ((kt = null), (lr = de() + 500), gn(e, t))
    do
      try {
        hm()
        break
      } catch (a) {
        dd(e, a)
      }
    while (!0)
    $a(),
      (mo.current = o),
      (G = l),
      he !== null ? (t = 0) : ((we = null), (Pe = 0), (t = ve))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Fi(e)), l !== 0 && ((r = l), (t = fa(e, l)))), t === 1)
    )
      throw ((n = rl), gn(e, 0), Wt(e, r), $e(e, de()), n)
    if (t === 6) Wt(e, r)
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !dm(l) &&
          ((t = yo(e, r)),
          t === 2 && ((o = Fi(e)), o !== 0 && ((r = o), (t = fa(e, o)))),
          t === 1))
      )
        throw ((n = rl), gn(e, 0), Wt(e, r), $e(e, de()), n)
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345))
        case 2:
          fn(e, Fe, kt)
          break
        case 3:
          if (
            (Wt(e, r), (r & 130023424) === r && ((t = nu + 500 - de()), 10 < t))
          ) {
            if (bl(e, 0) !== 0) break
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ze(), (e.pingedLanes |= e.suspendedLanes & l)
              break
            }
            e.timeoutHandle = Qi(fn.bind(null, e, Fe, kt), t)
            break
          }
          fn(e, Fe, kt)
          break
        case 4:
          if ((Wt(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ht(r)
            ;(o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o)
          }
          if (
            ((r = l),
            (r = de() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * fm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Qi(fn.bind(null, e, Fe, kt), r)
            break
          }
          fn(e, Fe, kt)
          break
        case 5:
          fn(e, Fe, kt)
          break
        default:
          throw Error(_(329))
      }
    }
  }
  return $e(e, de()), e.callbackNode === n ? fd.bind(null, e) : null
}
function fa(e, t) {
  var n = Ur
  return (
    e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
    (e = yo(e, t)),
    e !== 2 && ((t = Fe), (Fe = n), t !== null && da(t)),
    e
  )
}
function da(e) {
  Fe === null ? (Fe = e) : Fe.push.apply(Fe, e)
}
function dm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot
          l = l.value
          try {
            if (!vt(o(), l)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Wt(e, t) {
  for (
    t &= ~tu,
      t &= ~Mo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ht(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Is(e) {
  if (G & 6) throw Error(_(327))
  Zn()
  var t = bl(e, 0)
  if (!(t & 1)) return $e(e, de()), null
  var n = yo(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Fi(e)
    r !== 0 && ((t = r), (n = fa(e, r)))
  }
  if (n === 1) throw ((n = rl), gn(e, 0), Wt(e, t), $e(e, de()), n)
  if (n === 6) throw Error(_(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    fn(e, Fe, kt),
    $e(e, de()),
    null
  )
}
function ru(e, t) {
  var n = G
  G |= 1
  try {
    return e(t)
  } finally {
    ;(G = n), G === 0 && ((lr = de() + 500), Lo && on())
  }
}
function kn(e) {
  Kt !== null && Kt.tag === 0 && !(G & 6) && Zn()
  var t = G
  G |= 1
  var n = lt.transition,
    r = J
  try {
    if (((lt.transition = null), (J = 1), e)) return e()
  } finally {
    ;(J = r), (lt.transition = n), (G = t), !(G & 6) && on()
  }
}
function lu() {
  ;(Qe = Wn.current), te(Wn)
}
function gn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Vh(n)), he !== null))
    for (n = he.return; n !== null; ) {
      var r = n
      switch ((Ua(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && lo()
          break
        case 3:
          nr(), te(Ae), te(je), Ya()
          break
        case 5:
          Ka(r)
          break
        case 4:
          nr()
          break
        case 13:
          te(ae)
          break
        case 19:
          te(ae)
          break
        case 10:
          Va(r.type._context)
          break
        case 22:
        case 23:
          lu()
      }
      n = n.return
    }
  if (
    ((we = e),
    (he = e = en(e.current, null)),
    (Pe = Qe = t),
    (ve = 0),
    (rl = null),
    (tu = Mo = En = 0),
    (Fe = Ur = null),
    pn !== null)
  ) {
    for (t = 0; t < pn.length; t++)
      if (((n = pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var l = r.next,
          o = n.pending
        if (o !== null) {
          var i = o.next
          ;(o.next = l), (r.next = i)
        }
        n.pending = r
      }
    pn = null
  }
  return e
}
function dd(e, t) {
  do {
    var n = he
    try {
      if (($a(), (Hl.current = ho), po)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var l = r.queue
          l !== null && (l.pending = null), (r = r.next)
        }
        po = !1
      }
      if (
        ((Sn = 0),
        (ye = me = ue = null),
        (Or = !1),
        (el = 0),
        (eu.current = null),
        n === null || n.return === null)
      ) {
        ;(ve = 1), (rl = t), (he = null)
        break
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t
        if (
          ((t = Pe),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            c = a,
            d = c.tag
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var S = Es(i)
          if (S !== null) {
            ;(S.flags &= -257),
              ks(S, i, a, o, t),
              S.mode & 1 && Ss(o, s, t),
              (t = S),
              (u = s)
            var x = t.updateQueue
            if (x === null) {
              var w = new Set()
              w.add(u), (t.updateQueue = w)
            } else x.add(u)
            break e
          } else {
            if (!(t & 1)) {
              Ss(o, s, t), ou()
              break e
            }
            u = Error(_(426))
          }
        } else if (le && a.mode & 1) {
          var T = Es(i)
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              ks(T, i, a, o, t),
              Aa(rr(u, a))
            break e
          }
        }
        ;(o = u = rr(u, a)),
          ve !== 4 && (ve = 2),
          Ur === null ? (Ur = [o]) : Ur.push(o),
          (o = i)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var h = Gf(o, u, t)
              ms(o, h)
              break e
            case 1:
              a = u
              var f = o.type,
                m = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (qt === null || !qt.has(m))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var k = Jf(o, a, t)
                ms(o, k)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      md(n)
    } catch (N) {
      ;(t = N), he === n && n !== null && (he = n = n.return)
      continue
    }
    break
  } while (!0)
}
function pd() {
  var e = mo.current
  return (mo.current = ho), e === null ? ho : e
}
function ou() {
  ;(ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    we === null || (!(En & 268435455) && !(Mo & 268435455)) || Wt(we, Pe)
}
function yo(e, t) {
  var n = G
  G |= 2
  var r = pd()
  ;(we !== e || Pe !== t) && ((kt = null), gn(e, t))
  do
    try {
      pm()
      break
    } catch (l) {
      dd(e, l)
    }
  while (!0)
  if (($a(), (G = n), (mo.current = r), he !== null)) throw Error(_(261))
  return (we = null), (Pe = 0), ve
}
function pm() {
  for (; he !== null; ) hd(he)
}
function hm() {
  for (; he !== null && !Ap(); ) hd(he)
}
function hd(e) {
  var t = gd(e.alternate, e, Qe)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? md(e) : (he = t),
    (eu.current = null)
}
function md(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = am(n, t)), n !== null)) {
        ;(n.flags &= 32767), (he = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(ve = 6), (he = null)
        return
      }
    } else if (((n = im(n, t, Qe)), n !== null)) {
      he = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      he = t
      return
    }
    he = t = e
  } while (t !== null)
  ve === 0 && (ve = 5)
}
function fn(e, t, n) {
  var r = J,
    l = lt.transition
  try {
    ;(lt.transition = null), (J = 1), mm(e, t, n, r)
  } finally {
    ;(lt.transition = l), (J = r)
  }
  return null
}
function mm(e, t, n, r) {
  do Zn()
  while (Kt !== null)
  if (G & 6) throw Error(_(327))
  n = e.finishedWork
  var l = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (Gp(e, o),
    e === we && ((he = we = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ml ||
      ((Ml = !0),
      yd(ql, function () {
        return Zn(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = lt.transition), (lt.transition = null)
    var i = J
    J = 1
    var a = G
    ;(G |= 4),
      (eu.current = null),
      sm(e, n),
      sd(n, e),
      Ih(Hi),
      (eo = !!Vi),
      (Hi = Vi = null),
      (e.current = n),
      cm(n),
      Bp(),
      (G = a),
      (J = i),
      (lt.transition = o)
  } else e.current = n
  if (
    (Ml && ((Ml = !1), (Kt = e), (go = l)),
    (o = e.pendingLanes),
    o === 0 && (qt = null),
    Hp(n.stateNode),
    $e(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest })
  if (vo) throw ((vo = !1), (e = sa), (sa = null), e)
  return (
    go & 1 && e.tag !== 0 && Zn(),
    (o = e.pendingLanes),
    o & 1 ? (e === ca ? Ar++ : ((Ar = 0), (ca = e))) : (Ar = 0),
    on(),
    null
  )
}
function Zn() {
  if (Kt !== null) {
    var e = Xc(go),
      t = lt.transition,
      n = J
    try {
      if (((lt.transition = null), (J = 16 > e ? 16 : e), Kt === null))
        var r = !1
      else {
        if (((e = Kt), (Kt = null), (go = 0), G & 6)) throw Error(_(331))
        var l = G
        for (G |= 4, z = e.current; z !== null; ) {
          var o = z,
            i = o.child
          if (z.flags & 16) {
            var a = o.deletions
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u]
                for (z = s; z !== null; ) {
                  var c = z
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fr(8, c, o)
                  }
                  var d = c.child
                  if (d !== null) (d.return = c), (z = d)
                  else
                    for (; z !== null; ) {
                      c = z
                      var p = c.sibling,
                        S = c.return
                      if ((id(c), c === s)) {
                        z = null
                        break
                      }
                      if (p !== null) {
                        ;(p.return = S), (z = p)
                        break
                      }
                      z = S
                    }
                }
              }
              var x = o.alternate
              if (x !== null) {
                var w = x.child
                if (w !== null) {
                  x.child = null
                  do {
                    var T = w.sibling
                    ;(w.sibling = null), (w = T)
                  } while (w !== null)
                }
              }
              z = o
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (z = i)
          else
            e: for (; z !== null; ) {
              if (((o = z), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fr(9, o, o.return)
                }
              var h = o.sibling
              if (h !== null) {
                ;(h.return = o.return), (z = h)
                break e
              }
              z = o.return
            }
        }
        var f = e.current
        for (z = f; z !== null; ) {
          i = z
          var m = i.child
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (z = m)
          else
            e: for (i = f; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Do(9, a)
                  }
                } catch (N) {
                  ce(a, a.return, N)
                }
              if (a === i) {
                z = null
                break e
              }
              var k = a.sibling
              if (k !== null) {
                ;(k.return = a.return), (z = k)
                break e
              }
              z = a.return
            }
        }
        if (
          ((G = l), on(), St && typeof St.onPostCommitFiberRoot == "function")
        )
          try {
            St.onPostCommitFiberRoot(Co, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(J = n), (lt.transition = t)
    }
  }
  return !1
}
function Os(e, t, n) {
  ;(t = rr(n, t)),
    (t = Gf(e, t, 1)),
    (e = Zt(e, t, 1)),
    (t = ze()),
    e !== null && (al(e, 1, t), $e(e, t))
}
function ce(e, t, n) {
  if (e.tag === 3) Os(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Os(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (qt === null || !qt.has(r)))
        ) {
          ;(e = rr(n, e)),
            (e = Jf(t, e, 1)),
            (t = Zt(t, e, 1)),
            (e = ze()),
            t !== null && (al(t, 1, e), $e(t, e))
          break
        }
      }
      t = t.return
    }
}
function vm(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Pe & n) === n &&
      (ve === 4 || (ve === 3 && (Pe & 130023424) === Pe && 500 > de() - nu)
        ? gn(e, 0)
        : (tu |= n)),
    $e(e, t)
}
function vd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = kl), (kl <<= 1), !(kl & 130023424) && (kl = 4194304))
      : (t = 1))
  var n = ze()
  ;(e = Tt(e, t)), e !== null && (al(e, t, n), $e(e, n))
}
function gm(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), vd(e, n)
}
function ym(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState
      l !== null && (n = l.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(_(314))
  }
  r !== null && r.delete(t), vd(e, n)
}
var gd
gd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) Ue = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), om(e, t, n)
      Ue = !!(e.flags & 131072)
    }
  else (Ue = !1), le && t.flags & 1048576 && Sf(t, ao, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Ql(e, t), (e = t.pendingProps)
      var l = bn(t, je.current)
      Jn(t, n), (l = Ga(null, t, r, e, l, n))
      var o = Ja()
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Be(r) ? ((o = !0), oo(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Wa(t),
            (l.updater = To),
            (t.stateNode = l),
            (l._reactInternals = t),
            qi(t, r, e, n),
            (t = ta(null, t, r, !0, o, n)))
          : ((t.tag = 0), le && o && Fa(t), Me(null, t, l, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Ql(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = xm(r)),
          (e = ct(r, e)),
          l)
        ) {
          case 0:
            t = ea(null, t, r, e, n)
            break e
          case 1:
            t = _s(null, t, r, e, n)
            break e
          case 11:
            t = Cs(null, t, r, e, n)
            break e
          case 14:
            t = Ps(null, t, r, ct(r.type, e), n)
            break e
        }
        throw Error(_(306, r, ""))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        ea(e, t, r, l, n)
      )
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        _s(e, t, r, l, n)
      )
    case 3:
      e: {
        if ((ed(t), e === null)) throw Error(_(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Rf(e, t),
          co(t, r, null, n)
        var i = t.memoizedState
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ;(l = rr(Error(_(423)), t)), (t = Rs(e, t, r, n, l))
            break e
          } else if (r !== l) {
            ;(l = rr(Error(_(424)), t)), (t = Rs(e, t, r, n, l))
            break e
          } else
            for (
              Ke = Jt(t.stateNode.containerInfo.firstChild),
                Ye = t,
                le = !0,
                pt = null,
                n = Pf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((er(), r === l)) {
            t = Dt(e, t, n)
            break e
          }
          Me(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Nf(t),
        e === null && Gi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Wi(r, l) ? (i = null) : o !== null && Wi(r, o) && (t.flags |= 32),
        bf(e, t),
        Me(e, t, i, n),
        t.child
      )
    case 6:
      return e === null && Gi(t), null
    case 13:
      return td(e, t, n)
    case 4:
      return (
        Qa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tr(t, null, r, n)) : Me(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Cs(e, t, r, l, n)
      )
    case 7:
      return Me(e, t, t.pendingProps, n), t.child
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          b(uo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (vt(o.value, i)) {
            if (o.children === l.children && !Ae.current) {
              t = Dt(e, t, n)
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies
              if (a !== null) {
                i = o.child
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      ;(u = Rt(-1, n & -n)), (u.tag = 2)
                      var s = o.updateQueue
                      if (s !== null) {
                        s = s.shared
                        var c = s.pending
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (s.pending = u)
                      }
                    }
                    ;(o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Ji(o.return, n, t),
                      (a.lanes |= n)
                    break
                  }
                  u = u.next
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(_(341))
                ;(i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Ji(i, n, t),
                  (i = o.sibling)
              } else i = o.child
              if (i !== null) i.return = o
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null
                    break
                  }
                  if (((o = i.sibling), o !== null)) {
                    ;(o.return = i.return), (i = o)
                    break
                  }
                  i = i.return
                }
              o = i
            }
        Me(e, t, l.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jn(t, n),
        (l = ot(l)),
        (r = r(l)),
        (t.flags |= 1),
        Me(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (l = ct(r, t.pendingProps)),
        (l = ct(r.type, l)),
        Ps(e, t, r, l, n)
      )
    case 15:
      return Zf(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Ql(e, t),
        (t.tag = 1),
        Be(r) ? ((e = !0), oo(t)) : (e = !1),
        Jn(t, n),
        Xf(t, r, l),
        qi(t, r, l, n),
        ta(null, t, r, !0, e, n)
      )
    case 19:
      return nd(e, t, n)
    case 22:
      return qf(e, t, n)
  }
  throw Error(_(156, t.tag))
}
function yd(e, t) {
  return Wc(e, t)
}
function wm(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function rt(e, t, n, r) {
  return new wm(e, t, n, r)
}
function iu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function xm(e) {
  if (typeof e == "function") return iu(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Pa)) return 11
    if (e === _a) return 14
  }
  return 2
}
function en(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Xl(e, t, n, r, l, o) {
  var i = 2
  if (((r = e), typeof e == "function")) iu(e) && (i = 1)
  else if (typeof e == "string") i = 5
  else
    e: switch (e) {
      case zn:
        return yn(n.children, l, o, t)
      case Ca:
        ;(i = 8), (l |= 8)
        break
      case Ei:
        return (e = rt(12, n, t, l | 2)), (e.elementType = Ei), (e.lanes = o), e
      case ki:
        return (e = rt(13, n, t, l)), (e.elementType = ki), (e.lanes = o), e
      case Ci:
        return (e = rt(19, n, t, l)), (e.elementType = Ci), (e.lanes = o), e
      case Rc:
        return zo(n, l, o, t)
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Pc:
              i = 10
              break e
            case _c:
              i = 9
              break e
            case Pa:
              i = 11
              break e
            case _a:
              i = 14
              break e
            case $t:
              ;(i = 16), (r = null)
              break e
          }
        throw Error(_(130, e == null ? e : typeof e, ""))
    }
  return (
    (t = rt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  )
}
function yn(e, t, n, r) {
  return (e = rt(7, e, r, t)), (e.lanes = n), e
}
function zo(e, t, n, r) {
  return (
    (e = rt(22, e, r, t)),
    (e.elementType = Rc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function pi(e, t, n) {
  return (e = rt(6, e, null, t)), (e.lanes = n), e
}
function hi(e, t, n) {
  return (
    (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function Sm(e, t, n, r, l) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Xo(0)),
    (this.expirationTimes = Xo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null)
}
function au(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new Sm(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = rt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Wa(o),
    e
  )
}
function Em(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Mn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function wd(e) {
  if (!e) return nn
  e = e._reactInternals
  e: {
    if (_n(e) !== e || e.tag !== 1) throw Error(_(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(_(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Be(n)) return wf(e, n, t)
  }
  return t
}
function xd(e, t, n, r, l, o, i, a, u) {
  return (
    (e = au(n, r, !0, e, l, o, i, a, u)),
    (e.context = wd(null)),
    (n = e.current),
    (r = ze()),
    (l = bt(n)),
    (o = Rt(r, l)),
    (o.callback = t ?? null),
    Zt(n, o, l),
    (e.current.lanes = l),
    al(e, l, r),
    $e(e, r),
    e
  )
}
function Io(e, t, n, r) {
  var l = t.current,
    o = ze(),
    i = bt(l)
  return (
    (n = wd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Rt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zt(l, t, i)),
    e !== null && (mt(e, l, i, o), Vl(e, l, i)),
    i
  )
}
function wo(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Fs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function uu(e, t) {
  Fs(e, t), (e = e.alternate) && Fs(e, t)
}
function km() {
  return null
}
var Sd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e)
      }
function su(e) {
  this._internalRoot = e
}
Oo.prototype.render = su.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(_(409))
  Io(e, t, null, null)
}
Oo.prototype.unmount = su.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    kn(function () {
      Io(null, e, null, null)
    }),
      (t[jt] = null)
  }
}
function Oo(e) {
  this._internalRoot = e
}
Oo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Zc()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
    Ht.splice(n, 0, e), n === 0 && bc(e)
  }
}
function cu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Fo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  )
}
function Us() {}
function Cm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r
      r = function () {
        var s = wo(i)
        o.call(s)
      }
    }
    var i = xd(t, r, e, 0, null, !1, !1, "", Us)
    return (
      (e._reactRootContainer = i),
      (e[jt] = i.current),
      Gr(e.nodeType === 8 ? e.parentNode : e),
      kn(),
      i
    )
  }
  for (; (l = e.lastChild); ) e.removeChild(l)
  if (typeof r == "function") {
    var a = r
    r = function () {
      var s = wo(u)
      a.call(s)
    }
  }
  var u = au(e, 0, !1, null, null, !1, !1, "", Us)
  return (
    (e._reactRootContainer = u),
    (e[jt] = u.current),
    Gr(e.nodeType === 8 ? e.parentNode : e),
    kn(function () {
      Io(t, u, n, r)
    }),
    u
  )
}
function Uo(e, t, n, r, l) {
  var o = n._reactRootContainer
  if (o) {
    var i = o
    if (typeof l == "function") {
      var a = l
      l = function () {
        var u = wo(i)
        a.call(u)
      }
    }
    Io(t, i, e, l)
  } else i = Cm(n, t, e, l, r)
  return wo(i)
}
Gc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Lr(t.pendingLanes)
        n !== 0 &&
          (La(t, n | 1), $e(t, de()), !(G & 6) && ((lr = de() + 500), on()))
      }
      break
    case 13:
      kn(function () {
        var r = Tt(e, 1)
        if (r !== null) {
          var l = ze()
          mt(r, e, 1, l)
        }
      }),
        uu(e, 1)
  }
}
ja = function (e) {
  if (e.tag === 13) {
    var t = Tt(e, 134217728)
    if (t !== null) {
      var n = ze()
      mt(t, e, 134217728, n)
    }
    uu(e, 134217728)
  }
}
Jc = function (e) {
  if (e.tag === 13) {
    var t = bt(e),
      n = Tt(e, t)
    if (n !== null) {
      var r = ze()
      mt(n, e, t, r)
    }
    uu(e, t)
  }
}
Zc = function () {
  return J
}
qc = function (e, t) {
  var n = J
  try {
    return (J = e), t()
  } finally {
    J = n
  }
}
zi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ri(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var l = No(r)
            if (!l) throw Error(_(90))
            Lc(r), Ri(r, l)
          }
        }
      }
      break
    case "textarea":
      Tc(e, n)
      break
    case "select":
      ;(t = n.value), t != null && Kn(e, !!n.multiple, t, !1)
  }
}
Uc = ru
Ac = kn
var Pm = { usingClientEntryPoint: !1, Events: [sl, Un, No, Oc, Fc, ru] },
  kr = {
    findFiberByHostInstance: dn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  _m = {
    bundleType: kr.bundleType,
    version: kr.version,
    rendererPackageName: kr.rendererPackageName,
    rendererConfig: kr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Vc(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: kr.findFiberByHostInstance || km,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!zl.isDisabled && zl.supportsFiber)
    try {
      ;(Co = zl.inject(_m)), (St = zl)
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pm
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!cu(t)) throw Error(_(200))
  return Em(e, t, null, n)
}
Ge.createRoot = function (e, t) {
  if (!cu(e)) throw Error(_(299))
  var n = !1,
    r = "",
    l = Sd
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = au(e, 1, !1, null, null, n, !1, r, l)),
    (e[jt] = t.current),
    Gr(e.nodeType === 8 ? e.parentNode : e),
    new su(t)
  )
}
Ge.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)))
  return (e = Vc(t)), (e = e === null ? null : e.stateNode), e
}
Ge.flushSync = function (e) {
  return kn(e)
}
Ge.hydrate = function (e, t, n) {
  if (!Fo(t)) throw Error(_(200))
  return Uo(null, e, t, !0, n)
}
Ge.hydrateRoot = function (e, t, n) {
  if (!cu(e)) throw Error(_(405))
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Sd
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = xd(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[jt] = t.current),
    Gr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l)
  return new Oo(t)
}
Ge.render = function (e, t, n) {
  if (!Fo(t)) throw Error(_(200))
  return Uo(null, e, t, !1, n)
}
Ge.unmountComponentAtNode = function (e) {
  if (!Fo(e)) throw Error(_(40))
  return e._reactRootContainer
    ? (kn(function () {
        Uo(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[jt] = null)
        })
      }),
      !0)
    : !1
}
Ge.unstable_batchedUpdates = ru
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Fo(n)) throw Error(_(200))
  if (e == null || e._reactInternals === void 0) throw Error(_(38))
  return Uo(e, t, n, !1, r)
}
Ge.version = "18.3.1-next-f1338f8080-20240426"
function Ed() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ed)
    } catch (e) {
      console.error(e)
    }
}
Ed(), (Sc.exports = Ge)
var fu = Sc.exports
const Rm = uc(fu),
  Nm = ac({ __proto__: null, default: Rm }, [fu])
var As = fu
;(xi.createRoot = As.createRoot), (xi.hydrateRoot = As.hydrateRoot)
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ie() {
  return (
    (ie = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    ie.apply(this, arguments)
  )
}
var pe
;(function (e) {
  ;(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE")
})(pe || (pe = {}))
const Bs = "popstate"
function Lm(e) {
  e === void 0 && (e = {})
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location
    return ll(
      "",
      { pathname: o, search: i, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    )
  }
  function n(r, l) {
    return typeof l == "string" ? l : Cn(l)
  }
  return Tm(t, n, null, e)
}
function Q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}
function or(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function jm() {
  return Math.random().toString(36).substr(2, 8)
}
function $s(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function ll(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ie(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? an(t) : t,
      { state: n, key: (t && t.key) || r || jm() },
    )
  )
}
function Cn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  )
}
function an(e) {
  let t = {}
  if (e) {
    let n = e.indexOf("#")
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf("?")
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e)
  }
  return t
}
function Tm(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = pe.Pop,
    u = null,
    s = c()
  s == null && ((s = 0), i.replaceState(ie({}, i.state, { idx: s }), ""))
  function c() {
    return (i.state || { idx: null }).idx
  }
  function d() {
    a = pe.Pop
    let T = c(),
      h = T == null ? null : T - s
    ;(s = T), u && u({ action: a, location: w.location, delta: h })
  }
  function p(T, h) {
    a = pe.Push
    let f = ll(w.location, T, h)
    s = c() + 1
    let m = $s(f, s),
      k = w.createHref(f)
    try {
      i.pushState(m, "", k)
    } catch (N) {
      if (N instanceof DOMException && N.name === "DataCloneError") throw N
      l.location.assign(k)
    }
    o && u && u({ action: a, location: w.location, delta: 1 })
  }
  function S(T, h) {
    a = pe.Replace
    let f = ll(w.location, T, h)
    s = c()
    let m = $s(f, s),
      k = w.createHref(f)
    i.replaceState(m, "", k),
      o && u && u({ action: a, location: w.location, delta: 0 })
  }
  function x(T) {
    let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof T == "string" ? T : Cn(T)
    return (
      (f = f.replace(/ $/, "%20")),
      Q(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          f,
      ),
      new URL(f, h)
    )
  }
  let w = {
    get action() {
      return a
    },
    get location() {
      return e(l, i)
    },
    listen(T) {
      if (u) throw new Error("A history only accepts one active listener")
      return (
        l.addEventListener(Bs, d),
        (u = T),
        () => {
          l.removeEventListener(Bs, d), (u = null)
        }
      )
    },
    createHref(T) {
      return t(l, T)
    },
    createURL: x,
    encodeLocation(T) {
      let h = x(T)
      return { pathname: h.pathname, search: h.search, hash: h.hash }
    },
    push: p,
    replace: S,
    go(T) {
      return i.go(T)
    },
  }
  return w
}
var re
;(function (e) {
  ;(e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error")
})(re || (re = {}))
const Dm = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"])
function Mm(e) {
  return e.index === !0
}
function pa(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        a = typeof l.id == "string" ? l.id : i.join("-")
      if (
        (Q(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route",
        ),
        Q(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Mm(l))
      ) {
        let u = ie({}, l, t(l), { id: a })
        return (r[a] = u), u
      } else {
        let u = ie({}, l, t(l), { id: a, children: void 0 })
        return (
          (r[a] = u), l.children && (u.children = pa(l.children, t, i, r)), u
        )
      }
    })
  )
}
function Qn(e, t, n) {
  n === void 0 && (n = "/")
  let r = typeof t == "string" ? an(t) : t,
    l = sr(r.pathname || "/", n)
  if (l == null) return null
  let o = kd(e)
  Im(o)
  let i = null
  for (let a = 0; i == null && a < o.length; ++a) {
    let u = Ym(l)
    i = Wm(o[a], u)
  }
  return i
}
function zm(e, t) {
  let { route: n, pathname: r, params: l } = e
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle }
}
function kd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "")
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    }
    u.relativePath.startsWith("/") &&
      (Q(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (u.relativePath = u.relativePath.slice(r.length)))
    let s = Nt([r, u.relativePath]),
      c = n.concat(u)
    o.children &&
      o.children.length > 0 &&
      (Q(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".'),
      ),
      kd(o.children, t, c, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: Vm(s, o.index), routesMeta: c })
  }
  return (
    e.forEach((o, i) => {
      var a
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i)
      else for (let u of Cd(o.path)) l(o, i, u)
    }),
    t
  )
}
function Cd(e) {
  let t = e.split("/")
  if (t.length === 0) return []
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "")
  if (r.length === 0) return l ? [o, ""] : [o]
  let i = Cd(r.join("/")),
    a = []
  return (
    a.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    l && a.push(...i),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  )
}
function Im(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Hm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  )
}
const Om = /^:[\w-]+$/,
  Fm = 3,
  Um = 2,
  Am = 1,
  Bm = 10,
  $m = -2,
  Vs = (e) => e === "*"
function Vm(e, t) {
  let n = e.split("/"),
    r = n.length
  return (
    n.some(Vs) && (r += $m),
    t && (r += Um),
    n
      .filter((l) => !Vs(l))
      .reduce((l, o) => l + (Om.test(o) ? Fm : o === "" ? Am : Bm), r)
  )
}
function Hm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function Wm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = []
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      c = Qm(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s,
      )
    if (!c) return null
    Object.assign(r, c.params)
    let d = a.route
    o.push({
      params: r,
      pathname: Nt([l, c.pathname]),
      pathnameBase: Jm(Nt([l, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (l = Nt([l, c.pathnameBase]))
  }
  return o
}
function Qm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = Km(e.path, e.caseSensitive, e.end),
    l = t.match(n)
  if (!l) return null
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1)
  return {
    params: r.reduce((s, c, d) => {
      let { paramName: p, isOptional: S } = c
      if (p === "*") {
        let w = a[d] || ""
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1")
      }
      const x = a[d]
      return (
        S && !x ? (s[p] = void 0) : (s[p] = (x || "").replace(/%2F/g, "/")), s
      )
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  }
}
function Km(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    or(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    )
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  )
}
function Ym(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/")
  } catch (t) {
    return (
      or(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    )
  }
}
function sr(e, t) {
  if (t === "/") return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== "/" ? null : e.slice(n) || "/"
}
function Xm(e, t) {
  t === void 0 && (t = "/")
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? an(e) : e
  return {
    pathname: n ? (n.startsWith("/") ? n : Gm(n, t)) : t,
    search: Zm(r),
    hash: qm(l),
  }
}
function Gm(e, t) {
  let n = t.replace(/\/+$/, "").split("/")
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }),
    n.length > 1 ? n.join("/") : "/"
  )
}
function mi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function Pd(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  )
}
function du(e, t) {
  let n = Pd(e)
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase)
}
function pu(e, t, n, r) {
  r === void 0 && (r = !1)
  let l
  typeof e == "string"
    ? (l = an(e))
    : ((l = ie({}, e)),
      Q(
        !l.pathname || !l.pathname.includes("?"),
        mi("?", "pathname", "search", l),
      ),
      Q(
        !l.pathname || !l.pathname.includes("#"),
        mi("#", "pathname", "hash", l),
      ),
      Q(!l.search || !l.search.includes("#"), mi("#", "search", "hash", l)))
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    a
  if (i == null) a = n
  else {
    let d = t.length - 1
    if (!r && i.startsWith("..")) {
      let p = i.split("/")
      for (; p[0] === ".."; ) p.shift(), (d -= 1)
      l.pathname = p.join("/")
    }
    a = d >= 0 ? t[d] : "/"
  }
  let u = Xm(l, a),
    s = i && i !== "/" && i.endsWith("/"),
    c = (o || i === ".") && n.endsWith("/")
  return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u
}
const Nt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Jm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Zm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  qm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e)
class hu {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r)
  }
}
function mu(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  )
}
const _d = ["post", "put", "patch", "delete"],
  bm = new Set(_d),
  ev = ["get", ..._d],
  tv = new Set(ev),
  nv = new Set([301, 302, 303, 307, 308]),
  rv = new Set([307, 308]),
  vi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  lv = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Cr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  vu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ov = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Rd = "remix-router-transitions"
function iv(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n
  Q(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  )
  let l
  if (e.mapRouteProperties) l = e.mapRouteProperties
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary
    l = (y) => ({ hasErrorBoundary: g(y) })
  } else l = ov
  let o = {},
    i = pa(e.routes, l, void 0, o),
    a,
    u = e.basename || "/",
    s = e.unstable_dataStrategy || cv,
    c = ie(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    d = null,
    p = new Set(),
    S = null,
    x = null,
    w = null,
    T = e.hydrationData != null,
    h = Qn(i, e.history.location, u),
    f = null
  if (h == null) {
    let g = be(404, { pathname: e.history.location.pathname }),
      { matches: y, route: E } = qs(i)
    ;(h = y), (f = { [E.id]: g })
  }
  let m,
    k = h.some((g) => g.route.lazy),
    N = h.some((g) => g.route.loader)
  if (k) m = !1
  else if (!N) m = !0
  else if (c.v7_partialHydration) {
    let g = e.hydrationData ? e.hydrationData.loaderData : null,
      y = e.hydrationData ? e.hydrationData.errors : null,
      E = (L) =>
        L.route.loader
          ? typeof L.route.loader == "function" && L.route.loader.hydrate === !0
            ? !1
            : (g && g[L.route.id] !== void 0) || (y && y[L.route.id] !== void 0)
          : !0
    if (y) {
      let L = h.findIndex((I) => y[I.route.id] !== void 0)
      m = h.slice(0, L + 1).every(E)
    } else m = h.every(E)
  } else m = e.hydrationData != null
  let D,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: h,
      initialized: m,
      navigation: vi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || f,
      fetchers: new Map(),
      blockers: new Map(),
    },
    R = pe.Pop,
    F = !1,
    M,
    Y = !1,
    fe = new Map(),
    oe = null,
    xe = !1,
    at = !1,
    zt = [],
    It = [],
    j = new Map(),
    A = 0,
    $ = -1,
    Z = new Map(),
    q = new Set(),
    ut = new Map(),
    Ve = new Map(),
    He = new Set(),
    Te = new Map(),
    Ze = new Map(),
    Bo = !1
  function Bd() {
    if (
      ((d = e.history.listen((g) => {
        let { action: y, location: E, delta: L } = g
        if (Bo) {
          Bo = !1
          return
        }
        or(
          Ze.size === 0 || L != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        )
        let I = Ru({
          currentLocation: v.location,
          nextLocation: E,
          historyAction: y,
        })
        if (I && L != null) {
          ;(Bo = !0),
            e.history.go(L * -1),
            hl(I, {
              state: "blocked",
              location: E,
              proceed() {
                hl(I, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: E,
                }),
                  e.history.go(L)
              },
              reset() {
                let H = new Map(v.blockers)
                H.set(I, Cr), We({ blockers: H })
              },
            })
          return
        }
        return sn(y, E)
      })),
      n)
    ) {
      Ev(t, fe)
      let g = () => kv(t, fe)
      t.addEventListener("pagehide", g),
        (oe = () => t.removeEventListener("pagehide", g))
    }
    return v.initialized || sn(pe.Pop, v.location, { initialHydration: !0 }), D
  }
  function $d() {
    d && d(),
      oe && oe(),
      p.clear(),
      M && M.abort(),
      v.fetchers.forEach((g, y) => pl(y)),
      v.blockers.forEach((g, y) => _u(y))
  }
  function Vd(g) {
    return p.add(g), () => p.delete(g)
  }
  function We(g, y) {
    y === void 0 && (y = {}), (v = ie({}, v, g))
    let E = [],
      L = []
    c.v7_fetcherPersist &&
      v.fetchers.forEach((I, H) => {
        I.state === "idle" && (He.has(H) ? L.push(H) : E.push(H))
      }),
      [...p].forEach((I) =>
        I(v, {
          deletedFetchers: L,
          unstable_viewTransitionOpts: y.viewTransitionOpts,
          unstable_flushSync: y.flushSync === !0,
        }),
      ),
      c.v7_fetcherPersist &&
        (E.forEach((I) => v.fetchers.delete(I)), L.forEach((I) => pl(I)))
  }
  function cr(g, y, E) {
    var L, I
    let { flushSync: H } = E === void 0 ? {} : E,
      U =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        dt(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((L = g.state) == null ? void 0 : L._isRedirect) !== !0,
      O
    y.actionData
      ? Object.keys(y.actionData).length > 0
        ? (O = y.actionData)
        : (O = null)
      : U
        ? (O = v.actionData)
        : (O = null)
    let W = y.loaderData
        ? Js(v.loaderData, y.loaderData, y.matches || [], y.errors)
        : v.loaderData,
      V = v.blockers
    V.size > 0 && ((V = new Map(V)), V.forEach((B, ne) => V.set(ne, Cr)))
    let Se =
      F === !0 ||
      (v.navigation.formMethod != null &&
        dt(v.navigation.formMethod) &&
        ((I = g.state) == null ? void 0 : I._isRedirect) !== !0)
    a && ((i = a), (a = void 0)),
      xe ||
        R === pe.Pop ||
        (R === pe.Push
          ? e.history.push(g, g.state)
          : R === pe.Replace && e.history.replace(g, g.state))
    let Ee
    if (R === pe.Pop) {
      let B = fe.get(v.location.pathname)
      B && B.has(g.pathname)
        ? (Ee = { currentLocation: v.location, nextLocation: g })
        : fe.has(g.pathname) &&
          (Ee = { currentLocation: g, nextLocation: v.location })
    } else if (Y) {
      let B = fe.get(v.location.pathname)
      B
        ? B.add(g.pathname)
        : ((B = new Set([g.pathname])), fe.set(v.location.pathname, B)),
        (Ee = { currentLocation: v.location, nextLocation: g })
    }
    We(
      ie({}, y, {
        actionData: O,
        loaderData: W,
        historyAction: R,
        location: g,
        initialized: !0,
        navigation: vi,
        revalidation: "idle",
        restoreScrollPosition: Lu(g, y.matches || v.matches),
        preventScrollReset: Se,
        blockers: V,
      }),
      { viewTransitionOpts: Ee, flushSync: H === !0 },
    ),
      (R = pe.Pop),
      (F = !1),
      (Y = !1),
      (xe = !1),
      (at = !1),
      (zt = []),
      (It = [])
  }
  async function xu(g, y) {
    if (typeof g == "number") {
      e.history.go(g)
      return
    }
    let E = ha(
        v.location,
        v.matches,
        u,
        c.v7_prependBasename,
        g,
        c.v7_relativeSplatPath,
        y == null ? void 0 : y.fromRouteId,
        y == null ? void 0 : y.relative,
      ),
      {
        path: L,
        submission: I,
        error: H,
      } = Hs(c.v7_normalizeFormMethod, !1, E, y),
      U = v.location,
      O = ll(v.location, L, y && y.state)
    O = ie({}, O, e.history.encodeLocation(O))
    let W = y && y.replace != null ? y.replace : void 0,
      V = pe.Push
    W === !0
      ? (V = pe.Replace)
      : W === !1 ||
        (I != null &&
          dt(I.formMethod) &&
          I.formAction === v.location.pathname + v.location.search &&
          (V = pe.Replace))
    let Se =
        y && "preventScrollReset" in y ? y.preventScrollReset === !0 : void 0,
      Ee = (y && y.unstable_flushSync) === !0,
      B = Ru({ currentLocation: U, nextLocation: O, historyAction: V })
    if (B) {
      hl(B, {
        state: "blocked",
        location: O,
        proceed() {
          hl(B, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: O,
          }),
            xu(g, y)
        },
        reset() {
          let ne = new Map(v.blockers)
          ne.set(B, Cr), We({ blockers: ne })
        },
      })
      return
    }
    return await sn(V, O, {
      submission: I,
      pendingError: H,
      preventScrollReset: Se,
      replace: y && y.replace,
      enableViewTransition: y && y.unstable_viewTransition,
      flushSync: Ee,
    })
  }
  function Hd() {
    if (
      ($o(),
      We({ revalidation: "loading" }),
      v.navigation.state !== "submitting")
    ) {
      if (v.navigation.state === "idle") {
        sn(v.historyAction, v.location, { startUninterruptedRevalidation: !0 })
        return
      }
      sn(R || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      })
    }
  }
  async function sn(g, y, E) {
    M && M.abort(),
      (M = null),
      (R = g),
      (xe = (E && E.startUninterruptedRevalidation) === !0),
      qd(v.location, v.matches),
      (F = (E && E.preventScrollReset) === !0),
      (Y = (E && E.enableViewTransition) === !0)
    let L = a || i,
      I = E && E.overrideNavigation,
      H = Qn(L, y, u),
      U = (E && E.flushSync) === !0
    if (!H) {
      let B = be(404, { pathname: y.pathname }),
        { matches: ne, route: ge } = qs(L)
      Vo(),
        cr(
          y,
          { matches: ne, loaderData: {}, errors: { [ge.id]: B } },
          { flushSync: U },
        )
      return
    }
    if (
      v.initialized &&
      !at &&
      vv(v.location, y) &&
      !(E && E.submission && dt(E.submission.formMethod))
    ) {
      cr(y, { matches: H }, { flushSync: U })
      return
    }
    M = new AbortController()
    let O = Dn(e.history, y, M.signal, E && E.submission),
      W
    if (E && E.pendingError)
      W = [Br(H).route.id, { type: re.error, error: E.pendingError }]
    else if (E && E.submission && dt(E.submission.formMethod)) {
      let B = await Wd(O, y, E.submission, H, {
        replace: E.replace,
        flushSync: U,
      })
      if (B.shortCircuited) return
      ;(W = B.pendingActionResult),
        (I = gi(y, E.submission)),
        (U = !1),
        (O = Dn(e.history, O.url, O.signal))
    }
    let {
      shortCircuited: V,
      loaderData: Se,
      errors: Ee,
    } = await Qd(
      O,
      y,
      H,
      I,
      E && E.submission,
      E && E.fetcherSubmission,
      E && E.replace,
      E && E.initialHydration === !0,
      U,
      W,
    )
    V ||
      ((M = null),
      cr(y, ie({ matches: H }, Zs(W), { loaderData: Se, errors: Ee })))
  }
  async function Wd(g, y, E, L, I) {
    I === void 0 && (I = {}), $o()
    let H = xv(y, E)
    We({ navigation: H }, { flushSync: I.flushSync === !0 })
    let U,
      O = va(L, y)
    if (!O.route.action && !O.route.lazy)
      U = {
        type: re.error,
        error: be(405, {
          method: g.method,
          pathname: y.pathname,
          routeId: O.route.id,
        }),
      }
    else if (((U = (await dr("action", g, [O], L))[0]), g.signal.aborted))
      return { shortCircuited: !0 }
    if (vn(U)) {
      let W
      return (
        I && I.replace != null
          ? (W = I.replace)
          : (W =
              Ys(U.response.headers.get("Location"), new URL(g.url), u) ===
              v.location.pathname + v.location.search),
        await fr(g, U, { submission: E, replace: W }),
        { shortCircuited: !0 }
      )
    }
    if (mn(U)) throw be(400, { type: "defer-action" })
    if (nt(U)) {
      let W = Br(L, O.route.id)
      return (
        (I && I.replace) !== !0 && (R = pe.Push),
        { pendingActionResult: [W.route.id, U] }
      )
    }
    return { pendingActionResult: [O.route.id, U] }
  }
  async function Qd(g, y, E, L, I, H, U, O, W, V) {
    let Se = L || gi(y, I),
      Ee = I || H || tc(Se),
      B = a || i,
      [ne, ge] = Ws(
        e.history,
        v,
        E,
        Ee,
        y,
        c.v7_partialHydration && O === !0,
        c.unstable_skipActionErrorRevalidation,
        at,
        zt,
        It,
        He,
        ut,
        q,
        B,
        u,
        V,
      )
    if (
      (Vo(
        (X) =>
          !(E && E.some((De) => De.route.id === X)) ||
          (ne && ne.some((De) => De.route.id === X)),
      ),
      ($ = ++A),
      ne.length === 0 && ge.length === 0)
    ) {
      let X = Cu()
      return (
        cr(
          y,
          ie(
            {
              matches: E,
              loaderData: {},
              errors: V && nt(V[1]) ? { [V[0]]: V[1].error } : null,
            },
            Zs(V),
            X ? { fetchers: new Map(v.fetchers) } : {},
          ),
          { flushSync: W },
        ),
        { shortCircuited: !0 }
      )
    }
    if (!xe && (!c.v7_partialHydration || !O)) {
      ge.forEach((De) => {
        let qe = v.fetchers.get(De.key),
          ke = Pr(void 0, qe ? qe.data : void 0)
        v.fetchers.set(De.key, ke)
      })
      let X
      V && !nt(V[1])
        ? (X = { [V[0]]: V[1].data })
        : v.actionData &&
          (Object.keys(v.actionData).length === 0
            ? (X = null)
            : (X = v.actionData)),
        We(
          ie(
            { navigation: Se },
            X !== void 0 ? { actionData: X } : {},
            ge.length > 0 ? { fetchers: new Map(v.fetchers) } : {},
          ),
          { flushSync: W },
        )
    }
    ge.forEach((X) => {
      j.has(X.key) && Ft(X.key), X.controller && j.set(X.key, X.controller)
    })
    let hr = () => ge.forEach((X) => Ft(X.key))
    M && M.signal.addEventListener("abort", hr)
    let { loaderResults: Ut, fetcherResults: Nn } = await Su(
      v.matches,
      E,
      ne,
      ge,
      g,
    )
    if (g.signal.aborted) return { shortCircuited: !0 }
    M && M.signal.removeEventListener("abort", hr),
      ge.forEach((X) => j.delete(X.key))
    let Ln = bs([...Ut, ...Nn])
    if (Ln) {
      if (Ln.idx >= ne.length) {
        let X = ge[Ln.idx - ne.length].key
        q.add(X)
      }
      return await fr(g, Ln.result, { replace: U }), { shortCircuited: !0 }
    }
    let { loaderData: jn, errors: gt } = Gs(v, E, ne, Ut, V, ge, Nn, Te)
    Te.forEach((X, De) => {
      X.subscribe((qe) => {
        ;(qe || X.done) && Te.delete(De)
      })
    }),
      c.v7_partialHydration &&
        O &&
        v.errors &&
        Object.entries(v.errors)
          .filter((X) => {
            let [De] = X
            return !ne.some((qe) => qe.route.id === De)
          })
          .forEach((X) => {
            let [De, qe] = X
            gt = Object.assign(gt || {}, { [De]: qe })
          })
    let ml = Cu(),
      vl = Pu($),
      gl = ml || vl || ge.length > 0
    return ie(
      { loaderData: jn, errors: gt },
      gl ? { fetchers: new Map(v.fetchers) } : {},
    )
  }
  function Kd(g, y, E, L) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      )
    j.has(g) && Ft(g)
    let I = (L && L.unstable_flushSync) === !0,
      H = a || i,
      U = ha(
        v.location,
        v.matches,
        u,
        c.v7_prependBasename,
        E,
        c.v7_relativeSplatPath,
        y,
        L == null ? void 0 : L.relative,
      ),
      O = Qn(H, U, u)
    if (!O) {
      pr(g, y, be(404, { pathname: U }), { flushSync: I })
      return
    }
    let {
      path: W,
      submission: V,
      error: Se,
    } = Hs(c.v7_normalizeFormMethod, !0, U, L)
    if (Se) {
      pr(g, y, Se, { flushSync: I })
      return
    }
    let Ee = va(O, W)
    if (((F = (L && L.preventScrollReset) === !0), V && dt(V.formMethod))) {
      Yd(g, y, W, Ee, O, I, V)
      return
    }
    ut.set(g, { routeId: y, path: W }), Xd(g, y, W, Ee, O, I, V)
  }
  async function Yd(g, y, E, L, I, H, U) {
    if (($o(), ut.delete(g), !L.route.action && !L.route.lazy)) {
      let ke = be(405, { method: U.formMethod, pathname: E, routeId: y })
      pr(g, y, ke, { flushSync: H })
      return
    }
    let O = v.fetchers.get(g)
    Ot(g, Sv(U, O), { flushSync: H })
    let W = new AbortController(),
      V = Dn(e.history, E, W.signal, U)
    j.set(g, W)
    let Se = A,
      B = (await dr("action", V, [L], I))[0]
    if (V.signal.aborted) {
      j.get(g) === W && j.delete(g)
      return
    }
    if (c.v7_fetcherPersist && He.has(g)) {
      if (vn(B) || nt(B)) {
        Ot(g, Bt(void 0))
        return
      }
    } else {
      if (vn(B))
        if ((j.delete(g), $ > Se)) {
          Ot(g, Bt(void 0))
          return
        } else return q.add(g), Ot(g, Pr(U)), fr(V, B, { fetcherSubmission: U })
      if (nt(B)) {
        pr(g, y, B.error)
        return
      }
    }
    if (mn(B)) throw be(400, { type: "defer-action" })
    let ne = v.navigation.location || v.location,
      ge = Dn(e.history, ne, W.signal),
      hr = a || i,
      Ut =
        v.navigation.state !== "idle"
          ? Qn(hr, v.navigation.location, u)
          : v.matches
    Q(Ut, "Didn't find any matches after fetcher action")
    let Nn = ++A
    Z.set(g, Nn)
    let Ln = Pr(U, B.data)
    v.fetchers.set(g, Ln)
    let [jn, gt] = Ws(
      e.history,
      v,
      Ut,
      U,
      ne,
      !1,
      c.unstable_skipActionErrorRevalidation,
      at,
      zt,
      It,
      He,
      ut,
      q,
      hr,
      u,
      [L.route.id, B],
    )
    gt
      .filter((ke) => ke.key !== g)
      .forEach((ke) => {
        let mr = ke.key,
          ju = v.fetchers.get(mr),
          ep = Pr(void 0, ju ? ju.data : void 0)
        v.fetchers.set(mr, ep),
          j.has(mr) && Ft(mr),
          ke.controller && j.set(mr, ke.controller)
      }),
      We({ fetchers: new Map(v.fetchers) })
    let ml = () => gt.forEach((ke) => Ft(ke.key))
    W.signal.addEventListener("abort", ml)
    let { loaderResults: vl, fetcherResults: gl } = await Su(
      v.matches,
      Ut,
      jn,
      gt,
      ge,
    )
    if (W.signal.aborted) return
    W.signal.removeEventListener("abort", ml),
      Z.delete(g),
      j.delete(g),
      gt.forEach((ke) => j.delete(ke.key))
    let X = bs([...vl, ...gl])
    if (X) {
      if (X.idx >= jn.length) {
        let ke = gt[X.idx - jn.length].key
        q.add(ke)
      }
      return fr(ge, X.result)
    }
    let { loaderData: De, errors: qe } = Gs(
      v,
      v.matches,
      jn,
      vl,
      void 0,
      gt,
      gl,
      Te,
    )
    if (v.fetchers.has(g)) {
      let ke = Bt(B.data)
      v.fetchers.set(g, ke)
    }
    Pu(Nn),
      v.navigation.state === "loading" && Nn > $
        ? (Q(R, "Expected pending action"),
          M && M.abort(),
          cr(v.navigation.location, {
            matches: Ut,
            loaderData: De,
            errors: qe,
            fetchers: new Map(v.fetchers),
          }))
        : (We({
            errors: qe,
            loaderData: Js(v.loaderData, De, Ut, qe),
            fetchers: new Map(v.fetchers),
          }),
          (at = !1))
  }
  async function Xd(g, y, E, L, I, H, U) {
    let O = v.fetchers.get(g)
    Ot(g, Pr(U, O ? O.data : void 0), { flushSync: H })
    let W = new AbortController(),
      V = Dn(e.history, E, W.signal)
    j.set(g, W)
    let Se = A,
      B = (await dr("loader", V, [L], I))[0]
    if (
      (mn(B) && (B = (await Td(B, V.signal, !0)) || B),
      j.get(g) === W && j.delete(g),
      !V.signal.aborted)
    ) {
      if (He.has(g)) {
        Ot(g, Bt(void 0))
        return
      }
      if (vn(B))
        if ($ > Se) {
          Ot(g, Bt(void 0))
          return
        } else {
          q.add(g), await fr(V, B)
          return
        }
      if (nt(B)) {
        pr(g, y, B.error)
        return
      }
      Q(!mn(B), "Unhandled fetcher deferred data"), Ot(g, Bt(B.data))
    }
  }
  async function fr(g, y, E) {
    let {
      submission: L,
      fetcherSubmission: I,
      replace: H,
    } = E === void 0 ? {} : E
    y.response.headers.has("X-Remix-Revalidate") && (at = !0)
    let U = y.response.headers.get("Location")
    Q(U, "Expected a Location header on the redirect Response"),
      (U = Ys(U, new URL(g.url), u))
    let O = ll(v.location, U, { _isRedirect: !0 })
    if (n) {
      let ne = !1
      if (y.response.headers.has("X-Remix-Reload-Document")) ne = !0
      else if (vu.test(U)) {
        const ge = e.history.createURL(U)
        ne = ge.origin !== t.location.origin || sr(ge.pathname, u) == null
      }
      if (ne) {
        H ? t.location.replace(U) : t.location.assign(U)
        return
      }
    }
    M = null
    let W = H === !0 ? pe.Replace : pe.Push,
      { formMethod: V, formAction: Se, formEncType: Ee } = v.navigation
    !L && !I && V && Se && Ee && (L = tc(v.navigation))
    let B = L || I
    if (rv.has(y.response.status) && B && dt(B.formMethod))
      await sn(W, O, {
        submission: ie({}, B, { formAction: U }),
        preventScrollReset: F,
      })
    else {
      let ne = gi(O, L)
      await sn(W, O, {
        overrideNavigation: ne,
        fetcherSubmission: I,
        preventScrollReset: F,
      })
    }
  }
  async function dr(g, y, E, L) {
    try {
      let I = await fv(s, g, y, E, L, o, l)
      return await Promise.all(
        I.map((H, U) => {
          if (gv(H)) {
            let O = H.result
            return {
              type: re.redirect,
              response: hv(O, y, E[U].route.id, L, u, c.v7_relativeSplatPath),
            }
          }
          return pv(H)
        }),
      )
    } catch (I) {
      return E.map(() => ({ type: re.error, error: I }))
    }
  }
  async function Su(g, y, E, L, I) {
    let [H, ...U] = await Promise.all([
      E.length ? dr("loader", I, E, y) : [],
      ...L.map((O) => {
        if (O.matches && O.match && O.controller) {
          let W = Dn(e.history, O.path, O.controller.signal)
          return dr("loader", W, [O.match], O.matches).then((V) => V[0])
        } else
          return Promise.resolve({
            type: re.error,
            error: be(404, { pathname: O.path }),
          })
      }),
    ])
    return (
      await Promise.all([
        ec(
          g,
          E,
          H,
          H.map(() => I.signal),
          !1,
          v.loaderData,
        ),
        ec(
          g,
          L.map((O) => O.match),
          U,
          L.map((O) => (O.controller ? O.controller.signal : null)),
          !0,
        ),
      ]),
      { loaderResults: H, fetcherResults: U }
    )
  }
  function $o() {
    ;(at = !0),
      zt.push(...Vo()),
      ut.forEach((g, y) => {
        j.has(y) && (It.push(y), Ft(y))
      })
  }
  function Ot(g, y, E) {
    E === void 0 && (E = {}),
      v.fetchers.set(g, y),
      We(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (E && E.flushSync) === !0 },
      )
  }
  function pr(g, y, E, L) {
    L === void 0 && (L = {})
    let I = Br(v.matches, y)
    pl(g),
      We(
        { errors: { [I.route.id]: E }, fetchers: new Map(v.fetchers) },
        { flushSync: (L && L.flushSync) === !0 },
      )
  }
  function Eu(g) {
    return (
      c.v7_fetcherPersist &&
        (Ve.set(g, (Ve.get(g) || 0) + 1), He.has(g) && He.delete(g)),
      v.fetchers.get(g) || lv
    )
  }
  function pl(g) {
    let y = v.fetchers.get(g)
    j.has(g) && !(y && y.state === "loading" && Z.has(g)) && Ft(g),
      ut.delete(g),
      Z.delete(g),
      q.delete(g),
      He.delete(g),
      v.fetchers.delete(g)
  }
  function Gd(g) {
    if (c.v7_fetcherPersist) {
      let y = (Ve.get(g) || 0) - 1
      y <= 0 ? (Ve.delete(g), He.add(g)) : Ve.set(g, y)
    } else pl(g)
    We({ fetchers: new Map(v.fetchers) })
  }
  function Ft(g) {
    let y = j.get(g)
    Q(y, "Expected fetch controller: " + g), y.abort(), j.delete(g)
  }
  function ku(g) {
    for (let y of g) {
      let E = Eu(y),
        L = Bt(E.data)
      v.fetchers.set(y, L)
    }
  }
  function Cu() {
    let g = [],
      y = !1
    for (let E of q) {
      let L = v.fetchers.get(E)
      Q(L, "Expected fetcher: " + E),
        L.state === "loading" && (q.delete(E), g.push(E), (y = !0))
    }
    return ku(g), y
  }
  function Pu(g) {
    let y = []
    for (let [E, L] of Z)
      if (L < g) {
        let I = v.fetchers.get(E)
        Q(I, "Expected fetcher: " + E),
          I.state === "loading" && (Ft(E), Z.delete(E), y.push(E))
      }
    return ku(y), y.length > 0
  }
  function Jd(g, y) {
    let E = v.blockers.get(g) || Cr
    return Ze.get(g) !== y && Ze.set(g, y), E
  }
  function _u(g) {
    v.blockers.delete(g), Ze.delete(g)
  }
  function hl(g, y) {
    let E = v.blockers.get(g) || Cr
    Q(
      (E.state === "unblocked" && y.state === "blocked") ||
        (E.state === "blocked" && y.state === "blocked") ||
        (E.state === "blocked" && y.state === "proceeding") ||
        (E.state === "blocked" && y.state === "unblocked") ||
        (E.state === "proceeding" && y.state === "unblocked"),
      "Invalid blocker state transition: " + E.state + " -> " + y.state,
    )
    let L = new Map(v.blockers)
    L.set(g, y), We({ blockers: L })
  }
  function Ru(g) {
    let { currentLocation: y, nextLocation: E, historyAction: L } = g
    if (Ze.size === 0) return
    Ze.size > 1 && or(!1, "A router only supports one blocker at a time")
    let I = Array.from(Ze.entries()),
      [H, U] = I[I.length - 1],
      O = v.blockers.get(H)
    if (
      !(O && O.state === "proceeding") &&
      U({ currentLocation: y, nextLocation: E, historyAction: L })
    )
      return H
  }
  function Vo(g) {
    let y = []
    return (
      Te.forEach((E, L) => {
        ;(!g || g(L)) && (E.cancel(), y.push(L), Te.delete(L))
      }),
      y
    )
  }
  function Zd(g, y, E) {
    if (((S = g), (w = y), (x = E || null), !T && v.navigation === vi)) {
      T = !0
      let L = Lu(v.location, v.matches)
      L != null && We({ restoreScrollPosition: L })
    }
    return () => {
      ;(S = null), (w = null), (x = null)
    }
  }
  function Nu(g, y) {
    return (
      (x &&
        x(
          g,
          y.map((L) => zm(L, v.loaderData)),
        )) ||
      g.key
    )
  }
  function qd(g, y) {
    if (S && w) {
      let E = Nu(g, y)
      S[E] = w()
    }
  }
  function Lu(g, y) {
    if (S) {
      let E = Nu(g, y),
        L = S[E]
      if (typeof L == "number") return L
    }
    return null
  }
  function bd(g) {
    ;(o = {}), (a = pa(g, l, void 0, o))
  }
  return (
    (D = {
      get basename() {
        return u
      },
      get future() {
        return c
      },
      get state() {
        return v
      },
      get routes() {
        return i
      },
      get window() {
        return t
      },
      initialize: Bd,
      subscribe: Vd,
      enableScrollRestoration: Zd,
      navigate: xu,
      fetch: Kd,
      revalidate: Hd,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: Eu,
      deleteFetcher: Gd,
      dispose: $d,
      getBlocker: Jd,
      deleteBlocker: _u,
      _internalFetchControllers: j,
      _internalActiveDeferreds: Te,
      _internalSetRoutes: bd,
    }),
    D
  )
}
function av(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  )
}
function ha(e, t, n, r, l, o, i, a) {
  let u, s
  if (i) {
    u = []
    for (let d of t)
      if ((u.push(d), d.route.id === i)) {
        s = d
        break
      }
  } else (u = t), (s = t[t.length - 1])
  let c = pu(l || ".", du(u, o), sr(e.pathname, n) || e.pathname, a === "path")
  return (
    l == null && ((c.search = e.search), (c.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      s &&
      s.route.index &&
      !gu(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : Nt([n, c.pathname])),
    Cn(c)
  )
}
function Hs(e, t, n, r) {
  if (!r || !av(r)) return { path: n }
  if (r.formMethod && !wv(r.formMethod))
    return { path: n, error: be(405, { method: r.formMethod }) }
  let l = () => ({ path: n, error: be(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    a = Ld(n)
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!dt(i)) return l()
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((S, x) => {
                let [w, T] = x
                return (
                  "" +
                  S +
                  w +
                  "=" +
                  T +
                  `
`
                )
              }, "")
            : String(r.body)
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      }
    } else if (r.formEncType === "application/json") {
      if (!dt(i)) return l()
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        }
      } catch {
        return l()
      }
    }
  }
  Q(
    typeof FormData == "function",
    "FormData is not available in this environment",
  )
  let u, s
  if (r.formData) (u = ma(r.formData)), (s = r.formData)
  else if (r.body instanceof FormData) (u = ma(r.body)), (s = r.body)
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = Xs(u))
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData())
  else
    try {
      ;(u = new URLSearchParams(r.body)), (s = Xs(u))
    } catch {
      return l()
    }
  let c = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  }
  if (dt(c.formMethod)) return { path: n, submission: c }
  let d = an(n)
  return (
    t && d.search && gu(d.search) && u.append("index", ""),
    (d.search = "?" + u),
    { path: Cn(d), submission: c }
  )
}
function uv(e, t) {
  let n = e
  if (t) {
    let r = e.findIndex((l) => l.route.id === t)
    r >= 0 && (n = e.slice(0, r))
  }
  return n
}
function Ws(e, t, n, r, l, o, i, a, u, s, c, d, p, S, x, w) {
  let T = w ? (nt(w[1]) ? w[1].error : w[1].data) : void 0,
    h = e.createURL(t.location),
    f = e.createURL(l),
    m = w && nt(w[1]) ? w[0] : void 0,
    k = m ? uv(n, m) : n,
    N = w ? w[1].statusCode : void 0,
    D = i && N && N >= 400,
    v = k.filter((F, M) => {
      let { route: Y } = F
      if (Y.lazy) return !0
      if (Y.loader == null) return !1
      if (o)
        return typeof Y.loader != "function" || Y.loader.hydrate
          ? !0
          : t.loaderData[Y.id] === void 0 &&
              (!t.errors || t.errors[Y.id] === void 0)
      if (
        sv(t.loaderData, t.matches[M], F) ||
        u.some((xe) => xe === F.route.id)
      )
        return !0
      let fe = t.matches[M],
        oe = F
      return Qs(
        F,
        ie(
          {
            currentUrl: h,
            currentParams: fe.params,
            nextUrl: f,
            nextParams: oe.params,
          },
          r,
          {
            actionResult: T,
            unstable_actionStatus: N,
            defaultShouldRevalidate: D
              ? !1
              : a ||
                h.pathname + h.search === f.pathname + f.search ||
                h.search !== f.search ||
                Nd(fe, oe),
          },
        ),
      )
    }),
    R = []
  return (
    d.forEach((F, M) => {
      if (o || !n.some((at) => at.route.id === F.routeId) || c.has(M)) return
      let Y = Qn(S, F.path, x)
      if (!Y) {
        R.push({
          key: M,
          routeId: F.routeId,
          path: F.path,
          matches: null,
          match: null,
          controller: null,
        })
        return
      }
      let fe = t.fetchers.get(M),
        oe = va(Y, F.path),
        xe = !1
      p.has(M)
        ? (xe = !1)
        : s.includes(M)
          ? (xe = !0)
          : fe && fe.state !== "idle" && fe.data === void 0
            ? (xe = a)
            : (xe = Qs(
                oe,
                ie(
                  {
                    currentUrl: h,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: f,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: T,
                    unstable_actionStatus: N,
                    defaultShouldRevalidate: D ? !1 : a,
                  },
                ),
              )),
        xe &&
          R.push({
            key: M,
            routeId: F.routeId,
            path: F.path,
            matches: Y,
            match: oe,
            controller: new AbortController(),
          })
    }),
    [v, R]
  )
}
function sv(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0
  return r || l
}
function Nd(e, t) {
  let n = e.route.path
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  )
}
function Qs(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t)
    if (typeof n == "boolean") return n
  }
  return t.defaultShouldRevalidate
}
async function Ks(e, t, n) {
  if (!e.lazy) return
  let r = await e.lazy()
  if (!e.lazy) return
  let l = n[e.id]
  Q(l, "No route found in manifest")
  let o = {}
  for (let i in r) {
    let u = l[i] !== void 0 && i !== "hasErrorBoundary"
    or(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.'),
    ),
      !u && !Dm.has(i) && (o[i] = r[i])
  }
  Object.assign(l, o), Object.assign(l, ie({}, t(l), { lazy: void 0 }))
}
function cv(e) {
  return Promise.all(e.matches.map((t) => t.resolve()))
}
async function fv(e, t, n, r, l, o, i, a) {
  let u = r.reduce((d, p) => d.add(p.route.id), new Set()),
    s = new Set(),
    c = await e({
      matches: l.map((d) => {
        let p = u.has(d.route.id)
        return ie({}, d, {
          shouldLoad: p,
          resolve: (x) => (
            s.add(d.route.id),
            p
              ? dv(t, n, d, o, i, x, a)
              : Promise.resolve({ type: re.data, result: void 0 })
          ),
        })
      }),
      request: n,
      params: l[0].params,
      context: a,
    })
  return (
    l.forEach((d) =>
      Q(
        s.has(d.route.id),
        '`match.resolve()` was not called for route id "' +
          d.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
      ),
    ),
    c.filter((d, p) => u.has(l[p].route.id))
  )
}
async function dv(e, t, n, r, l, o, i) {
  let a,
    u,
    s = (c) => {
      let d,
        p = new Promise((w, T) => (d = T))
      ;(u = () => d()), t.signal.addEventListener("abort", u)
      let S = (w) =>
          typeof c != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]"),
                ),
              )
            : c(
                { request: t, params: n.params, context: i },
                ...(w !== void 0 ? [w] : []),
              ),
        x
      return (
        o
          ? (x = o((w) => S(w)))
          : (x = (async () => {
              try {
                return { type: "data", result: await S() }
              } catch (w) {
                return { type: "error", result: w }
              }
            })()),
        Promise.race([x, p])
      )
    }
  try {
    let c = n.route[e]
    if (n.route.lazy)
      if (c) {
        let d,
          [p] = await Promise.all([
            s(c).catch((S) => {
              d = S
            }),
            Ks(n.route, l, r),
          ])
        if (d !== void 0) throw d
        a = p
      } else if ((await Ks(n.route, l, r), (c = n.route[e]), c)) a = await s(c)
      else if (e === "action") {
        let d = new URL(t.url),
          p = d.pathname + d.search
        throw be(405, { method: t.method, pathname: p, routeId: n.route.id })
      } else return { type: re.data, result: void 0 }
    else if (c) a = await s(c)
    else {
      let d = new URL(t.url),
        p = d.pathname + d.search
      throw be(404, { pathname: p })
    }
    Q(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    )
  } catch (c) {
    return { type: re.error, result: c }
  } finally {
    u && t.signal.removeEventListener("abort", u)
  }
  return a
}
async function pv(e) {
  let { result: t, type: n, status: r } = e
  if (jd(t)) {
    let i
    try {
      let a = t.headers.get("Content-Type")
      a && /\bapplication\/json\b/.test(a)
        ? t.body == null
          ? (i = null)
          : (i = await t.json())
        : (i = await t.text())
    } catch (a) {
      return { type: re.error, error: a }
    }
    return n === re.error
      ? {
          type: re.error,
          error: new hu(t.status, t.statusText, i),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: re.data, data: i, statusCode: t.status, headers: t.headers }
  }
  if (n === re.error)
    return { type: re.error, error: t, statusCode: mu(t) ? t.status : r }
  if (yv(t)) {
    var l, o
    return {
      type: re.deferred,
      deferredData: t,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    }
  }
  return { type: re.data, data: t, statusCode: r }
}
function hv(e, t, n, r, l, o) {
  let i = e.headers.get("Location")
  if (
    (Q(
      i,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !vu.test(i))
  ) {
    let a = r.slice(0, r.findIndex((u) => u.route.id === n) + 1)
    ;(i = ha(new URL(t.url), a, l, !0, i, o)), e.headers.set("Location", i)
  }
  return e
}
function Ys(e, t, n) {
  if (vu.test(e)) {
    let r = e,
      l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      o = sr(l.pathname, n) != null
    if (l.origin === t.origin && o) return l.pathname + l.search + l.hash
  }
  return e
}
function Dn(e, t, n, r) {
  let l = e.createURL(Ld(t)).toString(),
    o = { signal: n }
  if (r && dt(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r
    ;(o.method = i.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
          ? (o.body = r.text)
          : a === "application/x-www-form-urlencoded" && r.formData
            ? (o.body = ma(r.formData))
            : (o.body = r.formData)
  }
  return new Request(l, o)
}
function ma(e) {
  let t = new URLSearchParams()
  for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name)
  return t
}
function Xs(e) {
  let t = new FormData()
  for (let [n, r] of e.entries()) t.append(n, r)
  return t
}
function mv(e, t, n, r, l, o) {
  let i = {},
    a = null,
    u,
    s = !1,
    c = {},
    d = r && nt(r[1]) ? r[1].error : void 0
  return (
    n.forEach((p, S) => {
      let x = t[S].route.id
      if (
        (Q(!vn(p), "Cannot handle redirect results in processLoaderData"),
        nt(p))
      ) {
        let w = p.error
        d !== void 0 && ((w = d), (d = void 0)), (a = a || {})
        {
          let T = Br(e, x)
          a[T.route.id] == null && (a[T.route.id] = w)
        }
        ;(i[x] = void 0),
          s || ((s = !0), (u = mu(p.error) ? p.error.status : 500)),
          p.headers && (c[x] = p.headers)
      } else
        mn(p)
          ? (l.set(x, p.deferredData),
            (i[x] = p.deferredData.data),
            p.statusCode != null &&
              p.statusCode !== 200 &&
              !s &&
              (u = p.statusCode),
            p.headers && (c[x] = p.headers))
          : ((i[x] = p.data),
            p.statusCode && p.statusCode !== 200 && !s && (u = p.statusCode),
            p.headers && (c[x] = p.headers))
    }),
    d !== void 0 && r && ((a = { [r[0]]: d }), (i[r[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: u || 200, loaderHeaders: c }
  )
}
function Gs(e, t, n, r, l, o, i, a) {
  let { loaderData: u, errors: s } = mv(t, n, r, l, a)
  for (let c = 0; c < o.length; c++) {
    let { key: d, match: p, controller: S } = o[c]
    Q(
      i !== void 0 && i[c] !== void 0,
      "Did not find corresponding fetcher result",
    )
    let x = i[c]
    if (!(S && S.signal.aborted))
      if (nt(x)) {
        let w = Br(e.matches, p == null ? void 0 : p.route.id)
        ;(s && s[w.route.id]) || (s = ie({}, s, { [w.route.id]: x.error })),
          e.fetchers.delete(d)
      } else if (vn(x)) Q(!1, "Unhandled fetcher revalidation redirect")
      else if (mn(x)) Q(!1, "Unhandled fetcher deferred data")
      else {
        let w = Bt(x.data)
        e.fetchers.set(d, w)
      }
  }
  return { loaderData: u, errors: s }
}
function Js(e, t, n, r) {
  let l = ie({}, t)
  for (let o of n) {
    let i = o.route.id
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break
  }
  return l
}
function Zs(e) {
  return e
    ? nt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {}
}
function Br(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  )
}
function qs(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        }
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  }
}
function be(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    a = "Unknown @remix-run/router error"
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
            ? (a = "defer() is not supported in actions")
            : o === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
        ? ((i = "Forbidden"),
          (a = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((i = "Not Found"), (a = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((i = "Method Not Allowed"),
            l && n && r
              ? (a =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new hu(e || 500, i, new Error(a), !0)
  )
}
function bs(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t]
    if (vn(n)) return { result: n, idx: t }
  }
}
function Ld(e) {
  let t = typeof e == "string" ? an(e) : e
  return Cn(ie({}, t, { hash: "" }))
}
function vv(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== ""
}
function gv(e) {
  return jd(e.result) && nv.has(e.result.status)
}
function mn(e) {
  return e.type === re.deferred
}
function nt(e) {
  return e.type === re.error
}
function vn(e) {
  return (e && e.type) === re.redirect
}
function yv(e) {
  let t = e
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  )
}
function jd(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  )
}
function wv(e) {
  return tv.has(e.toLowerCase())
}
function dt(e) {
  return bm.has(e.toLowerCase())
}
async function ec(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      u = t[i]
    if (!u) continue
    let s = e.find((d) => d.route.id === u.route.id),
      c = s != null && !Nd(s, u) && (o && o[u.route.id]) !== void 0
    if (mn(a) && (l || c)) {
      let d = r[i]
      Q(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Td(a, d, l).then((p) => {
          p && (n[i] = p || n[i])
        })
    }
  }
}
async function Td(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: re.data, data: e.deferredData.unwrappedData }
      } catch (l) {
        return { type: re.error, error: l }
      }
    return { type: re.data, data: e.deferredData.data }
  }
}
function gu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "")
}
function va(e, t) {
  let n = typeof t == "string" ? an(t).search : t.search
  if (e[e.length - 1].route.index && gu(n || "")) return e[e.length - 1]
  let r = Pd(e)
  return r[r.length - 1]
}
function tc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      }
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      }
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      }
  }
}
function gi(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      }
}
function xv(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  }
}
function Pr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      }
}
function Sv(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  }
}
function Bt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  }
}
function Ev(e, t) {
  try {
    let n = e.sessionStorage.getItem(Rd)
    if (n) {
      let r = JSON.parse(n)
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []))
    }
  } catch {}
}
function kv(e, t) {
  if (t.size > 0) {
    let n = {}
    for (let [r, l] of t) n[r] = [...l]
    try {
      e.sessionStorage.setItem(Rd, JSON.stringify(n))
    } catch (r) {
      or(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      )
    }
  }
}
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xo() {
  return (
    (xo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    xo.apply(this, arguments)
  )
}
const Ao = C.createContext(null),
  Dd = C.createContext(null),
  Rn = C.createContext(null),
  yu = C.createContext(null),
  un = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Md = C.createContext(null)
function Cv(e, t) {
  let { relative: n } = t === void 0 ? {} : t
  fl() || Q(!1)
  let { basename: r, navigator: l } = C.useContext(Rn),
    { hash: o, pathname: i, search: a } = Id(e, { relative: n }),
    u = i
  return (
    r !== "/" && (u = i === "/" ? r : Nt([r, i])),
    l.createHref({ pathname: u, search: a, hash: o })
  )
}
function fl() {
  return C.useContext(yu) != null
}
function dl() {
  return fl() || Q(!1), C.useContext(yu).location
}
function zd(e) {
  C.useContext(Rn).static || C.useLayoutEffect(e)
}
function Pv() {
  let { isDataRoute: e } = C.useContext(un)
  return e ? Uv() : _v()
}
function _v() {
  fl() || Q(!1)
  let e = C.useContext(Ao),
    { basename: t, future: n, navigator: r } = C.useContext(Rn),
    { matches: l } = C.useContext(un),
    { pathname: o } = dl(),
    i = JSON.stringify(du(l, n.v7_relativeSplatPath)),
    a = C.useRef(!1)
  return (
    zd(() => {
      a.current = !0
    }),
    C.useCallback(
      function (s, c) {
        if ((c === void 0 && (c = {}), !a.current)) return
        if (typeof s == "number") {
          r.go(s)
          return
        }
        let d = pu(s, JSON.parse(i), o, c.relative === "path")
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Nt([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c)
      },
      [t, r, i, o, e],
    )
  )
}
const Rv = C.createContext(null)
function Nv(e) {
  let t = C.useContext(un).outlet
  return t && C.createElement(Rv.Provider, { value: e }, t)
}
function Id(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = C.useContext(Rn),
    { matches: l } = C.useContext(un),
    { pathname: o } = dl(),
    i = JSON.stringify(du(l, r.v7_relativeSplatPath))
  return C.useMemo(() => pu(e, JSON.parse(i), o, n === "path"), [e, i, o, n])
}
function Lv(e, t, n, r) {
  fl() || Q(!1)
  let { navigator: l } = C.useContext(Rn),
    { matches: o } = C.useContext(un),
    i = o[o.length - 1],
    a = i ? i.params : {}
  i && i.pathname
  let u = i ? i.pathnameBase : "/"
  i && i.route
  let s = dl(),
    c
  c = s
  let d = c.pathname || "/",
    p = d
  if (u !== "/") {
    let w = u.replace(/^\//, "").split("/")
    p = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/")
  }
  let S = Qn(e, { pathname: p })
  return zv(
    S &&
      S.map((w) =>
        Object.assign({}, w, {
          params: Object.assign({}, a, w.params),
          pathname: Nt([
            u,
            l.encodeLocation
              ? l.encodeLocation(w.pathname).pathname
              : w.pathname,
          ]),
          pathnameBase:
            w.pathnameBase === "/"
              ? u
              : Nt([
                  u,
                  l.encodeLocation
                    ? l.encodeLocation(w.pathnameBase).pathname
                    : w.pathnameBase,
                ]),
        }),
      ),
    o,
    n,
    r,
  )
}
function jv() {
  let e = Ud(),
    t = mu(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: l }, n) : null,
    null,
  )
}
const Tv = C.createElement(jv, null)
class Dv extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        }
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n)
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          un.Provider,
          { value: this.props.routeContext },
          C.createElement(Md.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children
  }
}
function Mv(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = C.useContext(Ao)
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(un.Provider, { value: t }, r)
  )
}
function zv(e, t, n, r) {
  var l
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o
    if ((o = n) != null && o.errors) e = n.matches
    else return null
  }
  let i = e,
    a = (l = n) == null ? void 0 : l.errors
  if (a != null) {
    let c = i.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0,
    )
    c >= 0 || Q(!1), (i = i.slice(0, Math.min(i.length, c + 1)))
  }
  let u = !1,
    s = -1
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < i.length; c++) {
      let d = i[c]
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (s = c),
        d.route.id)
      ) {
        let { loaderData: p, errors: S } = n,
          x =
            d.route.loader &&
            p[d.route.id] === void 0 &&
            (!S || S[d.route.id] === void 0)
        if (d.route.lazy || x) {
          ;(u = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]])
          break
        }
      }
    }
  return i.reduceRight((c, d, p) => {
    let S,
      x = !1,
      w = null,
      T = null
    n &&
      ((S = a && d.route.id ? a[d.route.id] : void 0),
      (w = d.route.errorElement || Tv),
      u &&
        (s < 0 && p === 0
          ? (Av("route-fallback"), (x = !0), (T = null))
          : s === p &&
            ((x = !0), (T = d.route.hydrateFallbackElement || null))))
    let h = t.concat(i.slice(0, p + 1)),
      f = () => {
        let m
        return (
          S
            ? (m = w)
            : x
              ? (m = T)
              : d.route.Component
                ? (m = C.createElement(d.route.Component, null))
                : d.route.element
                  ? (m = d.route.element)
                  : (m = c),
          C.createElement(Mv, {
            match: d,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: m,
          })
        )
      }
    return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
      ? C.createElement(Dv, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: S,
          children: f(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : f()
  }, null)
}
var Od = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    )
  })(Od || {}),
  So = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    )
  })(So || {})
function Iv(e) {
  let t = C.useContext(Ao)
  return t || Q(!1), t
}
function Ov(e) {
  let t = C.useContext(Dd)
  return t || Q(!1), t
}
function Fv(e) {
  let t = C.useContext(un)
  return t || Q(!1), t
}
function Fd(e) {
  let t = Fv(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || Q(!1), n.route.id
}
function Ud() {
  var e
  let t = C.useContext(Md),
    n = Ov(So.UseRouteError),
    r = Fd(So.UseRouteError)
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Uv() {
  let { router: e } = Iv(Od.UseNavigateStable),
    t = Fd(So.UseNavigateStable),
    n = C.useRef(!1)
  return (
    zd(() => {
      n.current = !0
    }),
    C.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, xo({ fromRouteId: t }, o)))
      },
      [e, t],
    )
  )
}
const nc = {}
function Av(e, t, n) {
  nc[e] || (nc[e] = !0)
}
function Bv(e) {
  return Nv(e.context)
}
function $v(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = pe.Pop,
    navigator: o,
    static: i = !1,
    future: a,
  } = e
  fl() && Q(!1)
  let u = t.replace(/^\/*/, "/"),
    s = C.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: i,
        future: xo({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, o, i],
    )
  typeof r == "string" && (r = an(r))
  let {
      pathname: c = "/",
      search: d = "",
      hash: p = "",
      state: S = null,
      key: x = "default",
    } = r,
    w = C.useMemo(() => {
      let T = sr(c, u)
      return T == null
        ? null
        : {
            location: { pathname: T, search: d, hash: p, state: S, key: x },
            navigationType: l,
          }
    }, [u, c, d, p, S, x, l])
  return w == null
    ? null
    : C.createElement(
        Rn.Provider,
        { value: s },
        C.createElement(yu.Provider, { children: n, value: w }),
      )
}
new Promise(() => {})
function Vv(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  }
  return (
    e.Component &&
      Object.assign(t, {
        element: C.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: C.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: C.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  )
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ol() {
  return (
    (ol = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    ol.apply(this, arguments)
  )
}
function Hv(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    l,
    o
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l])
  return n
}
function Wv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Qv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Wv(e)
}
const Kv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Yv = "6"
try {
  window.__reactRouterVersion = Yv
} catch {}
function Xv(e, t) {
  return iv({
    basename: t == null ? void 0 : t.basename,
    future: ol({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Lm({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Gv(),
    routes: e,
    mapRouteProperties: Vv,
    unstable_dataStrategy: t == null ? void 0 : t.unstable_dataStrategy,
    window: t == null ? void 0 : t.window,
  }).initialize()
}
function Gv() {
  var e
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData
  return t && t.errors && (t = ol({}, t, { errors: Jv(t.errors) })), t
}
function Jv(e) {
  if (!e) return null
  let t = Object.entries(e),
    n = {}
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new hu(l.status, l.statusText, l.data, l.internal === !0)
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType]
        if (typeof o == "function")
          try {
            let i = new o(l.message)
            ;(i.stack = ""), (n[r] = i)
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message)
        ;(o.stack = ""), (n[r] = o)
      }
    } else n[r] = l
  return n
}
const Zv = C.createContext({ isTransitioning: !1 }),
  qv = C.createContext(new Map()),
  bv = "startTransition",
  rc = vp[bv],
  eg = "flushSync",
  lc = Nm[eg]
function tg(e) {
  rc ? rc(e) : e()
}
function _r(e) {
  lc ? lc(e) : e()
}
class ng {
  constructor() {
    ;(this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        ;(this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r))
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r))
          })
      }))
  }
}
function rg(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = C.useState(n.state),
    [i, a] = C.useState(),
    [u, s] = C.useState({ isTransitioning: !1 }),
    [c, d] = C.useState(),
    [p, S] = C.useState(),
    [x, w] = C.useState(),
    T = C.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    f = C.useCallback(
      (v) => {
        h ? tg(v) : v()
      },
      [h],
    ),
    m = C.useCallback(
      (v, R) => {
        let {
          deletedFetchers: F,
          unstable_flushSync: M,
          unstable_viewTransitionOpts: Y,
        } = R
        F.forEach((oe) => T.current.delete(oe)),
          v.fetchers.forEach((oe, xe) => {
            oe.data !== void 0 && T.current.set(xe, oe.data)
          })
        let fe =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function"
        if (!Y || fe) {
          M ? _r(() => o(v)) : f(() => o(v))
          return
        }
        if (M) {
          _r(() => {
            p && (c && c.resolve(), p.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Y.currentLocation,
                nextLocation: Y.nextLocation,
              })
          })
          let oe = n.window.document.startViewTransition(() => {
            _r(() => o(v))
          })
          oe.finished.finally(() => {
            _r(() => {
              d(void 0), S(void 0), a(void 0), s({ isTransitioning: !1 })
            })
          }),
            _r(() => S(oe))
          return
        }
        p
          ? (c && c.resolve(),
            p.skipTransition(),
            w({
              state: v,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }))
          : (a(v),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }))
      },
      [n.window, p, c, T, f],
    )
  C.useLayoutEffect(() => n.subscribe(m), [n, m]),
    C.useEffect(() => {
      u.isTransitioning && !u.flushSync && d(new ng())
    }, [u]),
    C.useEffect(() => {
      if (c && i && n.window) {
        let v = i,
          R = c.promise,
          F = n.window.document.startViewTransition(async () => {
            f(() => o(v)), await R
          })
        F.finished.finally(() => {
          d(void 0), S(void 0), a(void 0), s({ isTransitioning: !1 })
        }),
          S(F)
      }
    }, [f, i, c, n.window]),
    C.useEffect(() => {
      c && i && l.location.key === i.location.key && c.resolve()
    }, [c, p, l.location, i]),
    C.useEffect(() => {
      !u.isTransitioning &&
        x &&
        (a(x.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: x.currentLocation,
          nextLocation: x.nextLocation,
        }),
        w(void 0))
    }, [u.isTransitioning, x]),
    C.useEffect(() => {}, [])
  let k = C.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (v) => n.navigate(v),
        push: (v, R, F) =>
          n.navigate(v, {
            state: R,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
        replace: (v, R, F) =>
          n.navigate(v, {
            replace: !0,
            state: R,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
      }),
      [n],
    ),
    N = n.basename || "/",
    D = C.useMemo(
      () => ({ router: n, navigator: k, static: !1, basename: N }),
      [n, k, N],
    )
  return C.createElement(
    C.Fragment,
    null,
    C.createElement(
      Ao.Provider,
      { value: D },
      C.createElement(
        Dd.Provider,
        { value: l },
        C.createElement(
          qv.Provider,
          { value: T.current },
          C.createElement(
            Zv.Provider,
            { value: u },
            C.createElement(
              $v,
              {
                basename: N,
                location: l.location,
                navigationType: l.historyAction,
                navigator: k,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? C.createElement(lg, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  )
}
function lg(e) {
  let { routes: t, future: n, state: r } = e
  return Lv(t, void 0, r, n)
}
const og =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ig = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  wu = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: a,
        target: u,
        to: s,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      p = Hv(t, Kv),
      { basename: S } = C.useContext(Rn),
      x,
      w = !1
    if (typeof s == "string" && ig.test(s) && ((x = s), og))
      try {
        let m = new URL(window.location.href),
          k = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s),
          N = sr(k.pathname, S)
        k.origin === m.origin && N != null
          ? (s = N + k.search + k.hash)
          : (w = !0)
      } catch {}
    let T = Cv(s, { relative: l }),
      h = ag(s, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: c,
        relative: l,
        unstable_viewTransition: d,
      })
    function f(m) {
      r && r(m), m.defaultPrevented || h(m)
    }
    return C.createElement(
      "a",
      ol({}, p, { href: x || T, onClick: w || o ? r : f, ref: n, target: u }),
    )
  })
var oc
;(function (e) {
  ;(e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState")
})(oc || (oc = {}))
var ic
;(function (e) {
  ;(e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration")
})(ic || (ic = {}))
function ag(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = Pv(),
    s = dl(),
    c = Id(e, { relative: i })
  return C.useCallback(
    (d) => {
      if (Qv(d, n)) {
        d.preventDefault()
        let p = r !== void 0 ? r : Cn(s) === Cn(c)
        u(e, {
          replace: p,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: a,
        })
      }
    },
    [s, u, c, r, l, n, e, o, i, a],
  )
}
const ug = "/Portfolio/selfPortrait.jpeg",
  sg = "/Portfolio/githubIcon.png",
  cg = "/Portfolio/linkedinIcon.png"
function Ad(e) {
  var t,
    n,
    r = ""
  if (typeof e == "string" || typeof e == "number") r += e
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length
      for (t = 0; t < l; t++)
        e[t] && (n = Ad(e[t])) && (r && (r += " "), (r += n))
    } else for (n in e) e[n] && (r && (r += " "), (r += n))
  return r
}
function Eo() {
  for (var e, t, n = 0, r = "", l = arguments.length; n < l; n++)
    (e = arguments[n]) && (t = Ad(e)) && (r && (r += " "), (r += t))
  return r
}
function fg() {
  const { pathname: e } = dl(),
    t = [
      { title: "Home", url: "/" },
      { title: "Projects", url: "/projects" },
      { title: "Contact Me", url: "/contact" },
    ]
  return P.jsx("section", {
    className:
      "w-full shrink-0 bg-base-300 text-xl sm:sticky sm:top-0 lg:w-[--navbar-width-lg]",
    children: P.jsxs("div", {
      className:
        "flex flex-col gap-4 p-4 sm:flex-row sm:gap-0 sm:p-2 lg:sticky lg:top-0 lg:flex-col lg:gap-4 lg:p-4",
      children: [
        P.jsxs("section", {
          className:
            "flex flex-col items-center gap-2 border-b-2 border-accent pb-4 sm:grow sm:flex-row-reverse sm:justify-center sm:border-b-0 sm:border-r-2 sm:pb-0 lg:flex-col lg:border-b-2 lg:border-r-0 lg:pb-4",
          children: [
            P.jsxs("div", {
              className:
                "flex flex-col items-center text-2xl sm:flex-row sm:gap-2 sm:text-xl lg:flex-col",
              children: [
                P.jsx("img", {
                  src: ug,
                  className: "w-40 rounded-full sm:w-20 lg:w-40",
                }),
                P.jsxs("div", {
                  className: "text-center sm:text-left lg:text-center",
                  children: [
                    P.jsx("div", { children: "David Semke" }),
                    P.jsx("div", { children: "david@semke.ca" }),
                  ],
                }),
              ],
            }),
            P.jsxs("div", {
              className:
                "flex justify-center gap-4 sm:flex-col sm:gap-2 lg:flex-row lg:gap-4",
              children: [
                P.jsx("a", {
                  href: "https://github.com/DavidSemke",
                  children: P.jsx("img", { src: sg, className: "h-8 w-8" }),
                }),
                P.jsx("a", {
                  href: "https://www.linkedin.com/in/david-semke-5babbb203/",
                  children: P.jsx("img", { src: cg, className: "h-8 w-8" }),
                }),
              ],
            }),
          ],
        }),
        P.jsx("nav", {
          className:
            "flex items-start justify-center gap-4 border-b-2 border-accent pb-4 sm:grow sm:items-center sm:border-b-0 sm:pb-0 lg:flex-col lg:items-start lg:gap-0",
          children: t.map((n) =>
            P.jsx(
              wu,
              {
                to: n.url,
                className: Eo("link", { underline: n.url === e }),
                children: n.title,
              },
              n.title,
            ),
          ),
        }),
      ],
    }),
  })
}
function dg() {
  return P.jsxs("div", {
    className: "flex min-h-screen flex-col lg:flex-row",
    children: [
      P.jsx(fg, {}),
      P.jsx("div", {
        className:
          "flex grow p-8 md:mx-auto md:w-4/5 lg:w-[calc(75%-0.75*var(--navbar-width-lg))] lg:grow-0 xl:w-[calc(60%-0.60*var(--navbar-width-lg))]",
        children: P.jsx(Bv, {}),
      }),
    ],
  })
}
function pg() {
  const e = Ud()
  let t = "Error unknown"
  return (
    typeof e == "object" &&
      e &&
      ("statusText" in e && typeof e.statusText == "string"
        ? (t = e.statusText)
        : "message" in e && typeof e.message == "string" && (t = e.message)),
    P.jsxs("main", {
      className:
        "flex flex-col gap-4 items-center justify-center min-h-screen pb-20",
      children: [
        P.jsx("h1", { children: "Oops!" }),
        P.jsx("p", {
          className: "text-4xl",
          children: "Sorry, an error has occurred.",
        }),
        P.jsx("p", {
          className: "text-2xl",
          children: P.jsx("i", { children: t }),
        }),
        P.jsx(wu, {
          to: "/",
          className: "link",
          children: P.jsx("span", {
            className: "text-2xl",
            children: "Return Home",
          }),
        }),
      ],
    })
  )
}
function hg({ title: e, titleId: t, ...n }, r) {
  return C.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n,
    ),
    e ? C.createElement("title", { id: t }, e) : null,
    C.createElement("path", {
      fillRule: "evenodd",
      d: "M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z",
      clipRule: "evenodd",
    }),
  )
}
const mg = C.forwardRef(hg)
function vg({ title: e, titleId: t, ...n }, r) {
  return C.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n,
    ),
    e ? C.createElement("title", { id: t }, e) : null,
    C.createElement("path", {
      fillRule: "evenodd",
      d: "M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",
      clipRule: "evenodd",
    }),
  )
}
const gg = C.forwardRef(vg)
function yi({
  title: e,
  image: t,
  width: n,
  offset: r,
  zIndex: l,
  showTitle: o,
}) {
  const { x: i, y: a } = r,
    u = { width: `${n}px`, zIndex: l }
  return (
    i < 0
      ? ((u.right = `${i * -1}px`), (u.left = "0"))
      : ((u.left = `${i}px`), (u.right = "0")),
    a <= 0 ? (u.bottom = `${a * -1}px`) : (u.top = `${a}px`),
    P.jsxs("div", {
      style: u,
      className: "flex flex-col items-center gap-2 text-lg absolute m-auto",
      children: [
        P.jsx("img", {
          src: t.src,
          className: "w-full aspect-square",
          alt: t.alt,
        }),
        o && P.jsx("div", { children: e }),
      ],
    })
  )
}
function yg({ cardData: e, faceCardWidthRem: t = 6, minCardWidthRem: n = 1 }) {
  const [r, l] = C.useState(0),
    o = e.length
  let i = Math.floor(o / 2)
  o % 2 === 0 && (i -= 1), (i = Math.min(i, t - n))
  const a = Math.ceil(i / 2),
    u = []
  let s = 1
  for (let R = 0; R < a; R++) u.push(s), (s = (a - R - 1) / a)
  let c = wi(r, o),
    d = Il(r, o)
  const p = [],
    S = []
  let x = t - 1,
    w = 0,
    T = 1,
    h = 4,
    f = 0
  const m = []
  let k = 0,
    N = o - 1
  for (; c !== d && Il(c, o) !== d && x >= n; ) {
    f < u.length
      ? ((w += (x + 1) * u[f]), m.push(w), (k += 1), (f += 1))
      : ((k -= 1), m.length % 2 === 1 && (m.pop(), (k -= 1)), (w = m[k]))
    const R = t - x < 2,
      F = e[c]
    p.push(
      P.jsx(
        yi,
        {
          title: F.title,
          image: F.image,
          width: x * 16,
          offset: { x: -(w * 16 * 2), y: -(T * 16) },
          zIndex: N,
          showTitle: R,
        },
        F.title,
      ),
    )
    const M = e[d]
    S.push(
      P.jsx(
        yi,
        {
          title: M.title,
          image: M.image,
          width: x * 16,
          offset: { x: w * 16 * 2, y: -(T * 16) },
          zIndex: N,
          showTitle: R,
        },
        M.title,
      ),
    ),
      (c = wi(c, o)),
      (d = Il(d, o)),
      (x -= 1),
      (T += h),
      h > 1 ? (h -= 1) : (h /= 2),
      (N -= 1)
  }
  const D = e[r],
    v = [
      ...p.reverse(),
      P.jsx(
        yi,
        {
          title: D.title,
          image: D.image,
          width: t * 16,
          offset: { x: 0, y: 0 },
          zIndex: o,
          showTitle: !0,
        },
        D.title,
      ),
      ...S,
    ]
  return P.jsxs("div", {
    className: "flex flex-col gap-4 w-full",
    children: [
      P.jsxs("div", {
        className: "grow h-60 relative",
        children: [
          v,
          P.jsx("div", {
            style: { bottom: `${T * 16}px` },
            className:
              "w-4 h-4 absolute left-0 right-0 m-auto rounded-full bg-secondary",
          }),
        ],
      }),
      P.jsxs("div", {
        className: "flex gap-12 justify-center",
        children: [
          P.jsx("button", {
            type: "button",
            className: "btn btn-secondary",
            "aria-label": "Shift left",
            onClick: () => l((R) => wi(R, o)),
            children: P.jsx(mg, { className: "w-8 h-8" }),
          }),
          P.jsx("button", {
            type: "button",
            className: "btn btn-secondary",
            "aria-label": "Shift right",
            onClick: () => l((R) => Il(R, o)),
            children: P.jsx(gg, { className: "w-8 h-8" }),
          }),
        ],
      }),
    ],
  })
}
function wi(e, t) {
  return (e - 1 + t) % t
}
function Il(e, t) {
  return (e + 1) % t
}
const wg = "/Portfolio/index/cssIcon.png",
  xg = "/Portfolio/index/expressjsIcon.png",
  Sg = "/Portfolio/index/gitIcon.png",
  Eg = "/Portfolio/index/htmlIcon.png",
  kg = "/Portfolio/index/jsIcon.png",
  Cg = "/Portfolio/index/nextjsIcon.png",
  Pg = "/Portfolio/index/nodejsIcon.png",
  _g = "/Portfolio/index/nosqlIcon.png",
  Rg = "/Portfolio/index/reactjsIcon.png",
  Ng = "/Portfolio/index/sassIcon.png",
  Lg = "/Portfolio/index/sqlIcon.png",
  jg = "/Portfolio/index/tailwindIcon.png",
  Tg = [
    { title: "CSS", image: { src: wg, alt: "CSS Logo" } },
    { title: "Express.js", image: { src: xg, alt: "Express.js Logo" } },
    { title: "Git", image: { src: Sg, alt: "Git Logo" } },
    { title: "HTML", image: { src: Eg, alt: "HTML Logo" } },
    { title: "JavaScript", image: { src: kg, alt: "JavaScript Logo" } },
    { title: "Next.js", image: { src: Cg, alt: "Next.js Logo" } },
    { title: "Node.js", image: { src: Pg, alt: "Node.js Logo" } },
    { title: "NoSQL", image: { src: _g, alt: "NoSQL Logo" } },
    { title: "React.js", image: { src: Rg, alt: "React.js Logo" } },
    { title: "SASS", image: { src: Ng, alt: "SASS Logo" } },
    { title: "SQL", image: { src: Lg, alt: "SQL Logo" } },
    { title: "Tailwind", image: { src: jg, alt: "Tailwind Logo" } },
  ]
function Dg() {
  return P.jsxs("main", {
    className: "flex flex-col items-center justify-center gap-8 pb-20",
    children: [
      P.jsxs("h1", {
        className:
          "flex flex-col items-center py-4 text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text",
        children: [
          P.jsx("div", {
            children: P.jsx("div", {
              className:
                "overflow-hidden whitespace-nowrap border-r-4 md:border-r-8 border-accent animate-typingLine0",
              children: "Hi! I'm David, a Full",
            }),
          }),
          P.jsx("div", {
            children: P.jsx("div", {
              className:
                "overflow-hidden whitespace-nowrap border-r-4 md:border-r-8 border-accent animate-typingLine1",
              children: "Stack Developer",
            }),
          }),
        ],
      }),
      P.jsxs("h2", {
        className: "text-center",
        children: [
          "Check out my ",
          P.jsx(wu, {
            to: "/projects",
            className: "link",
            children: "projects",
          }),
          " or ",
          P.jsx("a", {
            href: "https://techstack.fly.dev/",
            className: "link",
            children: "blog posts",
          }),
          "!",
        ],
      }),
      P.jsx(yg, { cardData: Tg }),
    ],
  })
}
const Mg = "/Portfolio/projects/techstackMobile.png",
  zg = "/Portfolio/projects/deepspeakMobile.png",
  Ig = "/Portfolio/projects/memescapeMobile.png",
  Og = [
    {
      title: "Memescape",
      tech: [
        "Vercel",
        "Next.js",
        "React.js",
        "Tailwind",
        "TypeScript",
        "PostgreSQL",
        "Auth.js",
      ],
      deployment: "https://memescape-lj1zk54es-davsems-projects.vercel.app/",
      thumbnails: {
        desktop:
          "https://github.com/DavidSemke/Memescape/raw/main/documentation/index-page.png?raw=true",
        mobile: Ig,
      },
      description:
        "Memescape is a Next.js app for finding, creating, and sharing memes. The React + Tailwind frontend is fully responsive and was developed using mobile-first design. The backend consists of a PostgreSQL database and an API abstracted with the use of Next.js server actions. Users can search for, bookmark, create, and share memes, where some actions require authentication and authorization via Auth.js.",
    },
    {
      title: "DeepSpeak",
      tech: [
        "React.js",
        "React Bootstrap",
        "SASS",
        "TypeScript",
        "Express.js",
        "MongoDB",
        "Jest",
        "REST API",
        "Socket.io",
      ],
      deployment: "https://davidsemke.github.io/DeepSpeak/",
      thumbnails: {
        desktop:
          "https://github.com/DavidSemke/DeepSpeak/raw/main/documentation/index-page.png?raw=true",
        mobile: zg,
      },
      description:
        "DeepSpeak is a messaging app where users can enter rooms and chat with other users anonymously. The frontend was designed with React and React Bootstrap using mobile-first development for a responsive experience, and the backend is a REST API made with Express and MongoDB. Jest is used to test routes and JSON web tokens allow stateless sessions. Rooms in a complete production environment are deleted after 24 hours, but since this hinders a demonstration, rooms are currently not being deleted.",
    },
    {
      title: "Tech Stack",
      tech: [
        "JavaScript",
        "SASS",
        "Pug",
        "TinyMCE",
        "Webpack",
        "Express.js",
        "MongoDB",
        "Jest",
      ],
      deployment: "https://techstack.fly.dev/",
      thumbnails: {
        desktop:
          "https://github.com/DavidSemke/TechStack/raw/main/documentation/index-page.png?raw=true",
        mobile: Mg,
      },
      description:
        "Tech Stack is a place for reading and writing blog posts for coders and tech enthusiasts. It is a fully responsive web app with authentication, authorization, user profiles, blog post management, commenting, and a search system. The frontend relies on server-side rendering via Pug, and the backend uses Express with MongoDB. Jest is used for thorough unit tests on backend routes. It is currently being used to host some blog posts of my own, which talk about my approach to programming with different technologies (feel free to check them out).",
    },
  ]
function Fg({
  title: e,
  tech: t,
  deployment: n,
  thumbnails: r,
  description: l,
}) {
  return P.jsxs("article", {
    className: "flex flex-col gap-4 border-b-4 border-accent pb-4",
    children: [
      P.jsxs("header", {
        className: "flex flex-col gap-6",
        children: [
          P.jsx("h2", { children: e }),
          P.jsx("div", {
            className: "flex flex-wrap gap-4",
            children: t.map((o) =>
              P.jsx(
                "div",
                {
                  className: "rounded-lg bg-info px-4 py-2 text-info-content",
                  children: o,
                },
                o,
              ),
            ),
          }),
        ],
      }),
      P.jsxs("div", {
        className:
          "flex flex-col-reverse gap-4 sm:flex-row md:flex-col-reverse",
        children: [
          P.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              P.jsxs("section", {
                className: "flex flex-col gap-2",
                children: [
                  P.jsx("h3", { children: "Description" }),
                  P.jsx("p", { children: l }),
                ],
              }),
              P.jsxs("section", {
                className: "flex flex-col items-start gap-2",
                children: [
                  P.jsx("h3", { children: "Deployed at" }),
                  P.jsx("a", { href: n, className: "link", children: n }),
                ],
              }),
            ],
          }),
          P.jsxs("div", {
            className: "mx-auto shrink-0 sm:mx-0",
            children: [
              P.jsx("img", {
                src: r.mobile,
                className: "w-48 border-2 border-accent md:hidden",
              }),
              P.jsx("img", {
                src: r.desktop,
                className: "hidden w-[40rem] border-2 border-accent md:block",
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
function Ug() {
  return P.jsxs("main", {
    className: "flex flex-col gap-8",
    children: [
      P.jsx("h1", { className: "text-center", children: "Projects" }),
      Og.map((e) => P.jsx(Fg, { ...e }, e.title)),
    ],
  })
}
function Ag(e, t) {
  var l
  const n = Object.keys(t),
    r = {}
  for (const o of n) r[o] = Eo(t[o], (l = e[o]) == null ? void 0 : l.className)
  return r
}
function Ol({
  name: e,
  label: t,
  asTextArea: n = !1,
  errors: r = [],
  attrs: l = {},
}) {
  var c, d
  const o = ((c = l.input) == null ? void 0 : c.type) === "hidden",
    i = ["checkbox", "radio"].includes((d = l.input) == null ? void 0 : d.type),
    a = n ? "textarea" : "input",
    u = {
      root: Eo("flex", {
        "items-center gap-4": i,
        "flex-col gap-2": !i,
        hidden: o,
      }),
      label: "font-semibold",
      input: Eo("w-full", {
        "input input-bordered input-accent": !n,
        "textarea textarea-bordered textarea-accent": n,
      }),
    },
    s = Ag(l, u)
  return (
    (t =
      t ??
      e
        .split("-")
        .map((p) => p[0].toUpperCase() + p.slice(1))
        .join(" ")),
    P.jsxs(P.Fragment, {
      children: [
        P.jsxs("div", {
          ...l.root,
          className: s.root,
          children: [
            t &&
              P.jsx("label", {
                ...l.label,
                htmlFor: e,
                className: s.label,
                children: t,
              }),
            P.jsx(a, {
              required: !0,
              ...l.input,
              id: e,
              name: e,
              className: s.input,
            }),
          ],
        }),
        r.length > 0 &&
          P.jsx("ul", {
            className: "list-inside list-disc text-error",
            children: r.map((p) => P.jsx("li", { children: p }, p)),
          }),
      ],
    })
  )
}
function Bg() {
  const [e, t] = C.useState(null),
    n = async (l) => {
      l.preventDefault(), t("PENDING")
      const o = l.target,
        i = new FormData(o)
      i.append("access_key", "73606cd6-0a86-4b3a-8a23-0cf8e220fc00"),
        (
          await (
            await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: i,
            })
          ).json()
        ).success
          ? (t("SUCCESS"), o.reset())
          : t("ERROR")
    }
  let r = null
  return (
    e === "SUCCESS"
      ? (r = P.jsx("p", {
          className: "text-center text-success",
          children:
            "Thank you for reaching out! I will get back to you shortly.",
        }))
      : e === "ERROR"
        ? (r = P.jsx("p", {
            className: "text-center text-error",
            children:
              "Something went wrong! Please consider contacting me using my email: david@semke.ca.",
          }))
        : e === "PENDING" &&
          (r = P.jsx("span", {
            className: "loading loading-infinity loading-lg self-center",
          })),
    P.jsxs("main", {
      className: "flex flex-col items-center gap-8",
      children: [
        P.jsx("h1", { children: "Contact Me" }),
        P.jsxs("p", {
          children: [
            "To get in touch, please fill out the form below or contact me at",
            P.jsx("span", {
              className: "text-lg font-semibold",
              children: " david@semke.ca",
            }),
            ".",
          ],
        }),
        P.jsxs("form", {
          onSubmit: n,
          className: "flex w-full flex-col gap-6",
          children: [
            P.jsxs("div", {
              className: "flex gap-8",
              children: [
                P.jsx(Ol, {
                  name: "name",
                  attrs: { root: { className: "grow" } },
                }),
                P.jsx(Ol, {
                  name: "email",
                  attrs: {
                    root: { className: "grow" },
                    input: { type: "email" },
                  },
                }),
              ],
            }),
            P.jsx(Ol, {
              name: "message",
              asTextArea: !0,
              attrs: { input: { rows: 8 } },
            }),
            P.jsx(Ol, {
              name: "botcheck",
              attrs: {
                root: { className: "hidden" },
                input: { type: "checkbox", required: !1 },
              },
            }),
            P.jsx("button", {
              type: "submit",
              className: "btn btn-primary self-center px-12",
              children: "Submit",
            }),
            r,
          ],
        }),
      ],
    })
  )
}
const $g = Xv(
  [
    {
      path: "/",
      element: P.jsx(dg, {}),
      errorElement: P.jsx(pg, {}),
      children: [
        { index: !0, element: P.jsx(Dg, {}) },
        { path: "projects", element: P.jsx(Ug, {}) },
        { path: "contact", element: P.jsx(Bg, {}) },
      ],
    },
  ],
  { basename: "/Portfolio" },
)
xi.createRoot(document.getElementById("root")).render(
  P.jsx(wc.StrictMode, { children: P.jsx(rg, { router: $g }) }),
)
