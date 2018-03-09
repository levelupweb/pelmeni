/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 248);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : undefined, function (e, t) {
  "use strict";
  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      y = function e(t) {
    return null != t && t === t.window;
  },
      v = { type: !0, src: !0, noModule: !0 };function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");if (o.text = e, n) for (i in v) {
      n[i] && (o[i] = n[i]);
    }t.head.appendChild(o).parentNode.removeChild(o);
  }function x(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? l[c.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }var b = "3.3.1",
      w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
      return o.call(this);
    }, get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return w.each(this, e);
    }, map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }return a;
  }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      m(e);
    }, each: function each(e, t) {
      var n,
          r = 0;if (C(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }return e.length = i, e;
    }, grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
        (r = !t(e[o], o)) !== s && i.push(e[o]);
      }return i;
    }, map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          s = [];if (C(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && s.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && s.push(i);
      }return a.apply([], s);
    }, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });function C(e) {
    var t = !!e && "length" in e && e.length,
        n = x(e);return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }var E = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y,
        v,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        N = {}.hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function O(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function re() {
      p();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = { apply: A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
        } };
    }function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          f,
          h,
          v,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;while (s--) {
              h[s] = "#" + c + " " + ve(h[s]);
            }v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
          }if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }return u(e.replace(B, "$1"), t, r, i);
    }function ae() {
      var e = [];function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }return t;
    }function se(e) {
      return e[b] = !0, e;
    }function ue(e) {
      var t = d.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function le(e, t) {
      var n = e.split("|"),
          i = n.length;while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, p = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }return r;
        }return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;if (i === o) return ce(e, t);n = e;while (n = n.parentNode) {
          a.unshift(n);
        }n = t;while (n = n.parentNode) {
          s.unshift(n);
        }while (a[r] === s[r]) {
          r++;
        }return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, d) : d;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = m.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}return oe(t, d, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }while (i--) {
          e.splice(r[i], 1);
        }
      }return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }return n;
    }, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = E[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                y = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !u && !s,
                x = !1;if (y) {
              if (o) {
                while (g) {
                  p = t;while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  }h = g = "only" === e && !h && "nextSibling";
                }return !0;
              }if (h = [a ? y.firstChild : y.lastChild], a && m) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];break;
                  }
                }
              } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
              }return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;while (a--) {
              e[r = O(e, o[a])] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        } }, pseudos: { not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));return r[b] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }), has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }), contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }), lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === h;
        }, focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: de(!1), disabled: de(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !r.pseudos.empty(e);
        }, header: function header(e) {
          return Y.test(e.nodeName);
        }, input: function input(e) {
          return G.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: he(function () {
          return [0];
        }), last: he(function (e, t) {
          return [t - 1];
        }), eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }return e;
        }), gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }return e;
        }) } }).pseudos.nth = r.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      r.pseudos[t] = fe(t);
    }for (t in { submit: !0, reset: !0 }) {
      r.pseudos[t] = pe(t);
    }function ye() {}ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];if (c) return t ? 0 : c.slice(0);s = e, u = [], l = r.preFilter;while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length));for (a in r.filter) {
          !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length));
        }if (!n) break;
      }return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }return r;
    }function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || a) return e(t, n, i);
        }return !1;
      } : function (t, n, u) {
        var l,
            c,
            f,
            p = [T, s];if (u) {
          while (t = t[r]) {
            if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];if (c[o] = p, p[2] = e(t, n, u)) return !0;
          }
        }return !1;
      };
    }function xe(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;while (i--) {
          if (!e[i](t, n, r)) return !1;
        }return !0;
      } : e[0];
    }function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) {
        oe(e, t[r], n);
      }return n;
    }function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }return a;
    }function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !o && t ? g : we(g, p, e, s, u),
            v = n ? i || (o ? e : h || r) ? [] : a : y;if (n && n(y, v, s, u), r) {
          l = we(v, d), r(l, [], s, u), c = l.length;while (c--) {
            (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
        }if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;while (c--) {
                (f = v[c]) && l.push(y[c] = f);
              }i(null, v = [], l, u);
            }c = v.length;while (c--) {
              (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
            }
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, s, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, s, !0), p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, i;
      }]; u < o; u++) {
        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) {
              if (r.relative[e[i].type]) break;
            }return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
          }p.push(n);
        }
      }return xe(p);
    }function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, s, u, c) {
        var f,
            h,
            y,
            v = 0,
            m = "0",
            x = _o && [],
            b = [],
            w = l,
            C = _o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === d || (p(f), s = !g);while (y = e[h++]) {
              if (y(f, a || d, s)) {
                u.push(f);break;
              }
            }c && (T = E);
          }n && ((f = !y && f) && v--, _o && x.push(f));
        }if (v += m, n && m !== v) {
          h = 0;while (y = t[h++]) {
            y(x, b, a, s);
          }if (_o) {
            if (v > 0) while (m--) {
              x[m] || b[m] || (b[m] = j.call(u));
            }b = we(b);
          }L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
        }return c && (T = E, l = w), x;
      };return n ? se(o) : o;
    }return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];if (!o) {
        t || (t = a(e)), n = t.length;while (n--) {
          (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        }(o = S(e, Ee(i, r))).selector = e;
      }return o;
    }, u = oe.select = function (e, t, n, i) {
      var o,
          u,
          l,
          c,
          f,
          p = "function" == typeof e && e,
          d = !i && a(e = p.selector || e);if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;p && (t = t.parentNode), e = e.slice(u.shift().value.length);
        }o = V.needsContext.test(e) ? 0 : u.length;while (o--) {
          if (l = u[o], r.relative[c = l.type]) break;if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;break;
          }
        }
      }return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(P, function (e, t, n) {
      var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;var k = function k(e, t, n) {
    var r = [],
        i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;r.push(e);
      }
    }return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      D = w.expr.match.needsContext;function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }w.filter = function (e, t, n) {
    var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({ find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (w.contains(i[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < r; t++) {
        w.find(e, i[t], n);
      }return r > 1 ? w.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    }, is: function is(e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    } });var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
    var i, o;if (!e) return this;if (n = n || q, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
          g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }return this;
      }return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, q = w(r);var H = /^(?:parents|prev(?:Until|All))/,
      O = { children: !0, contents: !0, next: !0, prev: !0 };w.fn.extend({ has: function has(e) {
      var t = w(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);if (!D.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);break;
          }
        }
      }return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } });function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {}return e;
  }w.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return k(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return k(e, "parentNode", n);
    }, next: function next(e) {
      return P(e, "nextSibling");
    }, prev: function prev(e) {
      return P(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return k(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return k(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return k(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return k(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return S(e.firstChild);
    }, contents: function contents(e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    } }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    };
  });var M = /[^\x20\t\r\n\f]+/g;function R(e) {
    var t = {};return w.each(e.match(M) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function u() {
      for (i = i || e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();while (++s < o.length) {
          !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = { add: function add() {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
          });
        }(arguments), n && !t && u()), this;
      }, remove: function remove() {
        return w.each(arguments, function (e, t) {
          var n;while ((n = w.inArray(t, o, n)) > -1) {
            o.splice(n, 1), n <= s && s--;
          }
        }), this;
      }, has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      }, empty: function empty() {
        return o && (o = []), this;
      }, disable: function disable() {
        return i = a = [], o = n = "", this;
      }, disabled: function disabled() {
        return !o;
      }, lock: function lock() {
        return i = a = [], n || t || (o = n = ""), this;
      }, locked: function locked() {
        return !!i;
      }, fireWith: function fireWith(e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
      }, fire: function fire() {
        return l.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!r;
      } };return l;
  };function I(e) {
    return e;
  }function W(e) {
    throw e;
  }function $(e, t, n, r) {
    var i;try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }w.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = { state: function state() {
          return r;
        }, always: function always() {
          return o.done(arguments).fail(arguments), this;
        }, "catch": function _catch(e) {
          return i.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];o[r[1]](function () {
                var e = i && i.apply(this, arguments);e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, r, i) {
          var o = 0;function a(t, n, r, i) {
            return function () {
              var s = this,
                  u = arguments,
                  l = function l() {
                var e, l;if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");l = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                }
              };t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? w.extend(e, i) : i;
        } },
          o = {};return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function s(e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();while (n--) {
        $(i[n], s(n), a.reject);
      }return a.promise();
    } });var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var F = w.Deferred();w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    } }), w.ready.then = F.then;function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));var z = function z(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;if ("object" === x(n)) {
      i = !0;for (s in n) {
        z(e, t, s, n[s], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(w(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      X = /^-ms-/,
      U = /-([a-z])/g;function V(e, t) {
    return t.toUpperCase();
  }function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function Q() {
    this.expando = w.expando + Q.uid++;
  }Q.uid = 1, Q.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var r,
          i = this.cache(e);if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
        i[G(r)] = t[r];
      }return i;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          r = e[this.expando];if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;while (n--) {
            delete r[t[n]];
          }
        }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
    } };var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }function ne(e, t, n) {
    var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = te(n);
      } catch (e) {}K.set(e, t, n);
    } else n = void 0;return n;
  }w.extend({ hasData: function hasData(e) {
      return K.hasData(e) || J.hasData(e);
    }, data: function data(e, t, n) {
      return K.access(e, t, n);
    }, removeData: function removeData(e, t) {
      K.remove(e, t);
    }, _data: function _data(e, t, n) {
      return J.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      J.remove(e, t);
    } }), w.fn.extend({ data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;while (n--) {
            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
          }J.set(o, "hasDataAttrs", !0);
        }return i;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    } }), w.extend({ queue: function queue(e, t, n) {
      var r;if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function a() {
        w.dequeue(e, t);
      };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        }) });
    } }), w.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) {
        (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }return s(), i.promise(t);
    } });var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      se = function se(e, t, n, r) {
    var i,
        o,
        a = {};for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }i = n.apply(e, r || []);for (o in t) {
      e.style[o] = a[o];
    }return i;
  };function ue(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;while (a--) {
        w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }c *= 2, w.style(e, t, c + l), n = n || [];
    }return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }var le = {};function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
      (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
    }for (o = 0; o < a; o++) {
      null != i[o] && (e[o].style.display = i[o]);
    }return e;
  }w.fn.extend({ show: function show() {
      return fe(this, !0);
    }, hide: function hide() {
      return fe(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    } });var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;function ye(e, t) {
    var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
  }var me = /<|&#?\w+;/;function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];while (c--) {
          a = a.lastChild;
        }w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }f.textContent = "", d = 0;while (o = p[d++]) {
      if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
        c = 0;while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }return f;
  }!function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;function Ee() {
    return !0;
  }function ke() {
    return !1;
  }function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }function De(e, t, n, r, i, o) {
    var a, s;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      "string" != typeof n && (r = r || n, n = void 0);for (s in t) {
        De(e, s, n, r, t[s], o);
      }return e;
    }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;return 1 === o && (a = i, (i = function i(e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }w.event = { global: {}, add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.get(e);if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(M) || [""]).length;while (l--) {
          d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
        }
      }
    }, remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.hasData(e) && J.get(e);if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;while (l--) {
          if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
          } else for (d in u) {
            w.event.remove(e, d + t[l], n, r, !0);
          }
        }w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          s,
          u = new Array(arguments.length),
          l = (J.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};for (u[0] = t, n = 1; n < arguments.length; n++) {
        u[n] = arguments[n];
      }if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = w.event.handlers.call(this, t, l), n = 0;while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
            t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
          }o.length && s.push({ elem: l, handlers: o });
        }
      }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === Se() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return N(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    w.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), w.fn.extend({ on: function on(e, t, n, r) {
      return De(this, e, t, n, r);
    }, one: function one(e, t, n, r) {
      return De(this, e, t, n, r, 1);
    }, off: function off(e, t, n) {
      var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (i in e) {
          this.off(i, t, e[i]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    } });var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function Pe(e, t) {
    var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};for (i in l) {
          for (n = 0, r = l[i].length; n < r; n++) {
            w.event.add(t, i, l[i][n]);
          }
        }
      }K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
    }
  }function Me(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }function Re(e, t, n, r) {
    t = a.apply([], t);var i,
        o,
        s,
        u,
        l,
        c,
        f = 0,
        p = e.length,
        d = p - 1,
        y = t[0],
        v = g(y);if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = e.eq(i);v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
    });if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
        l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
      }if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
        l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
      }
    }return e;
  }function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    }return e;
  }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Ne, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = w.contains(e.ownerDocument, e);if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
        Me(o[r], a[r]);
      }if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
        Pe(o[r], a[r]);
      } else Pe(e, s);return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
    }, cleanData: function cleanData(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (Y(n)) {
          if (t = n[J.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            }n[J.expando] = void 0;
          }n[K.expando] && (n[K.expando] = void 0);
        }
      }
    } }), w.fn.extend({ detach: function detach(e) {
      return Ie(this, e, !0);
    }, remove: function remove(e) {
      return Ie(this, e);
    }, text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    }, html: function html(e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return Re(this, arguments, function (t) {
        var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
        n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
      }return this.pushStack(r);
    };
  });var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function $e(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = new RegExp(oe.join("|"), "i");!function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);var t = e.getComputedStyle(c);i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var i,
        o,
        a,
        s,
        u,
        l = r.createElement("div"),
        c = r.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      }, pixelPosition: function pixelPosition() {
        return t(), i;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), u;
      }, scrollboxSize: function scrollboxSize() {
        return t(), a;
      } }));
  }();function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }function _e(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      Ve = { letterSpacing: "0", fontWeight: "400" },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;function Qe(e) {
    if (e in Ye) return e;var t = e[0].toUpperCase() + e.slice(1),
        n = Ge.length;while (n--) {
      if ((e = Ge[n] + t) in Ye) return e;
    }
  }function Je(e) {
    var t = w.cssProps[e];return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }function Ke(e, t, n) {
    var r = ie.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) {
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
    }return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
  }function et(e, t, n) {
    var r = $e(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;if (We.test(i)) {
      if (!n) return i;i = "auto";
    }return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = G(t),
            u = Xe.test(t),
            l = e.style;if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" == (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    }, css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = G(t);return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    } }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = { get: function get(e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      }, set: function set(e, n, r) {
        var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
      } };
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    w.cssHooks[e + t] = { expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
        }return i;
      } }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
  }), w.fn.extend({ css: function css(e, t) {
      return z(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) {
            o[t[a]] = w.css(e, t[a], !1, r);
          }return o;
        }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    } });function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }w.Tween = tt, tt.prototype = { constructor: tt, init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = tt.propHooks[this.prop];return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = tt.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, w.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {};var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }function st() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = Date.now();
  }function ut(e, t) {
    var n,
        r = 0,
        i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    }return t && (i.opacity = i.width = e), i;
  }function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }function ct(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = J.get(e, "fxshow");n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));for (r in t) {
      if (i = t[r], it.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !y || void 0 === y[r]) continue;g = !0;
        }d[r] = y && y[r] || w.style(e, r);
      }
    }if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;for (r in d) {
        u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
          g || fe([e]), J.remove(e, "fxshow");for (r in d) {
            w.style(e, r, d[r]);
          }
        })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }
  }function ft(e, t) {
    var n, r, i, o, a;for (n in e) {
      if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
        o = a.expand(o), delete e[r];for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }function pt(e, t, n) {
    var r,
        i,
        o = 0,
        a = pt.prefilters.length,
        s = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
        l.tweens[o].run(r);
      }return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
    },
        l = s.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
      }, stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
          l.tweens[n].run(1);
        }return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      } }),
        c = l.props;for (ft(c, l.opts.specialEasing); o < a; o++) {
      if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    }return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
  }w.Animation = w.extend(pt, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return ue(n.elem, e, ie.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(M);for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
      }
    }, prefilters: [ct], prefilter: function prefilter(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    } }), w.speed = function (e, t, n) {
    var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t };return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
    }, animate: function animate(e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function a() {
        var t = pt(this, w.extend({}, e), o);(i || J.get(this, "finish")) && t.stop(!0);
      };return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    }, stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
          a[i] && a[i].stop && ot.test(i) && r(a[i]);
        }for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }!t && n || w.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }for (t = 0; t < a; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }delete n.finish;
      });
    } }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;for (nt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();var dt,
      ht = w.expr.attrHandle;w.fn.extend({ attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    } }), w.extend({ attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(M);if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    } }), dt = { set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;w.fn.extend({ prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    } }), w.extend({ prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });function vt(e) {
    return (e.match(M) || []).join(" ");
  }function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }w.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;while (o = t[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;while (o = t[a++]) {
            while (r.indexOf(" " + o + " ") > -1) {
              r = r.replace(" " + o + " ", " ");
            }
          }i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e),
          r = "string" === n || Array.isArray(e);return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;if (r) {
          i = 0, o = w(this), a = xt(e);while (t = a[i++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;t = " " + e + " ";while (n = this[r++]) {
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var bt = /\r/g;w.fn.extend({ val: function val(e) {
      var t,
          n,
          r,
          i = this[0];{
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
      }
    } }), w.extend({ valHooks: { option: { get: function get(e) {
          var t = w.find.attr(e, "value");return null != t ? t : vt(w.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), a) return t;s.push(t);
            }
          }return s;
        }, set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;while (a--) {
            ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), o;
        } } } }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      } }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function Tt(e) {
    e.stopPropagation();
  };w.extend(w.event, { trigger: function trigger(t, n, i, o) {
      var a,
          s,
          u,
          l,
          c,
          p,
          d,
          h,
          v = [i || r],
          m = f.call(t, "type") ? t.type : t,
          x = f.call(t, "namespace") ? t.namespace.split(".") : [];if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), u = s;
          }u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }a = 0;while ((s = v[a++]) && !t.isPropagationStopped()) {
          h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
        }return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(r, null, t);
    } }), w.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
    } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };w.event.special[t] = { setup: function setup() {
        var r = this.ownerDocument || this,
            i = J.access(r, t);i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      }, teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      } };
  });var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;w.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;function jt(e, t, n, r) {
    var i;if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
      jt(e + "[" + i + "]", t[i], n, r);
    }
  }w.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = g(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      jt(n, e[n], t, i);
    }return r.join("&");
  }, w.fn.extend({ serialize: function serialize() {
      return w.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return { name: t.name, value: e.replace(Dt, "\r\n") };
        }) : { name: t.name, value: n.replace(Dt, "\r\n") };
      }).get();
    } });var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");Bt.href = Ct.href;function Ft(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];if (g(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }function _t(e, t, n, r) {
    var i = {},
        o = e === Wt;function a(s) {
      var u;return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }return a(t.dataTypes[0]) || !i["*"] && a("*");
  }function zt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }return r && w.extend(!0, e, r), e;
  }function Xt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;while ("*" === u[0]) {
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }if (r) for (i in s) {
      if (s[i] && s[i].test(r)) {
        u.unshift(i);break;
      }
    }if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;break;
        }a || (a = i);
      }o = o || a;
    }if (o) return o !== u[0] && u.unshift(o), n[o];
  }function Ut(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
      l[a.toLowerCase()] = e.converters[a];
    }o = c.shift();while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
          }
        }if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (e) {
          return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
        }
      }
    }return { state: "success", data: t };
  }w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    }, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function ajax(t, n) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (c) {
            if (!s) {
              s = {};while (t = Ot.exec(a)) {
                s[t[1].toLowerCase()] = t[2];
              }
            }t = s[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == c && (h.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (c) E.always(e[E.status]);else for (t in e) {
            x[t] = [x[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || C;return i && i.abort(t), k(0, t), this;
        } };if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
        l = r.createElement("a");try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;(f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);for (p in h.headers) {
        E.setRequestHeader(p, h.headers[p]);
      }if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout));try {
          c = !1, i.send(b, k);
        } catch (e) {
          if (c) throw e;k(-1, e);
        }
      } else k(-1, "No Transport");function k(t, n, r, s) {
        var l,
            p,
            d,
            b,
            T,
            C = n;c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }return E;
    }, getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    } }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, w.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;while (e.firstElementChild) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = g(e);return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    } }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Vt = { 0: 200, 1223: 204 },
      Gt = w.ajaxSettings.xhr();h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
    var _n, r;if (h.cors || Gt && !t.crossDomain) return { send: function send(i, o) {
        var a,
            s = t.xhr();if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
          s[a] = t.xhrFields[a];
        }t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");for (a in i) {
          s.setRequestHeader(a, i[a]);
        }_n = function n(e) {
          return function () {
            _n && (_n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n(), r = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            _n && r();
          });
        }, _n = _n("abort");try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      }, abort: function abort() {
        _n && _n();
      } };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return w.globalEval(e), e;
      } } }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n2;return { send: function send(i, o) {
          t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
            t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        }, abort: function abort() {
          _n2 && _n2();
        } };
    }
  });var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || w.expando + "_" + Et++;return this[e] = !0, e;
    } }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = function () {
    var e = r.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, o, a;return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = { setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    } }, w.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });var t,
          n,
          r = this[0];if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
            e = e.parentNode;
          }e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;while (e && "static" === w.css(e, "position")) {
          e = e.offsetParent;
        }return e || be;
      });
    } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;w.fn[e] = function (r) {
      return z(this, function (e, r, i) {
        var o;if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({ Height: "height", Width: "width" }, function (e, t) {
    w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");return z(this, function (t, n, i) {
          var o;return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), w.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), w.proxy = function (e, t) {
    var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == "function" && __webpack_require__(23) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return w;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Jt = e.jQuery,
      Kt = e.$;return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)(module)))

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 23:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(249);

__webpack_require__(49);

__webpack_require__(250);

$(document).ready(function () {
  var modal = $('#image');
  var photos = $('.photos .photos-item img');

  photos.each(function (i) {
    $(this).on("click", function () {
      var url = $(this).attr("src");
      modal.find('img')[0].src = url;
      modal.modal('show');
    });
  });

  $('.ui.sidebar').sidebar('attach events', '.toc.item');
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
* # Semantic UI - 2.2.14
* https://github.com/Semantic-Org/Semantic-UI
* http://www.semantic-ui.com/
*
* Copyright 2014 Contributors
* Released under the MIT license
* http://opensource.org/licenses/MIT
*
*/
!function (e, t, n, i) {
  e.site = e.fn.site = function (o) {
    var a,
        r,
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1),
        f = e.isPlainObject(o) ? e.extend(!0, {}, e.site.settings, o) : e.extend({}, e.site.settings),
        m = f.namespace,
        g = f.error,
        p = "module-" + m,
        h = e(n),
        v = this,
        b = h.data(p);return a = { initialize: function initialize() {
        a.instantiate();
      }, instantiate: function instantiate() {
        a.verbose("Storing instance of site", a), b = a, h.data(p, a);
      }, normalize: function normalize() {
        a.fix.console(), a.fix.requestAnimationFrame();
      }, fix: { console: function (_console) {
          function console() {
            return _console.apply(this, arguments);
          }

          console.toString = function () {
            return _console.toString();
          };

          return console;
        }(function () {
          a.debug("Normalizing window.console"), console !== i && console.log !== i || (a.verbose("Console not available, normalizing events"), a.disable.console()), void 0 !== console.group && void 0 !== console.groupEnd && void 0 !== console.groupCollapsed || (a.verbose("Console group not available, normalizing events"), t.console.group = function () {}, t.console.groupEnd = function () {}, t.console.groupCollapsed = function () {}), void 0 === console.markTimeline && (a.verbose("Mark timeline not available, normalizing events"), t.console.markTimeline = function () {});
        }), consoleClear: function consoleClear() {
          a.debug("Disabling programmatic console clearing"), t.console.clear = function () {};
        }, requestAnimationFrame: function requestAnimationFrame() {
          a.debug("Normalizing requestAnimationFrame"), t.requestAnimationFrame === i && (a.debug("RequestAnimationFrame not available, normalizing event"), t.requestAnimationFrame = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
            setTimeout(e, 0);
          });
        } }, moduleExists: function moduleExists(t) {
        return e.fn[t] !== i && e.fn[t].settings !== i;
      }, enabled: { modules: function modules(t) {
          var n = [];return t = t || f.modules, e.each(t, function (e, t) {
            a.moduleExists(t) && n.push(t);
          }), n;
        } }, disabled: { modules: function modules(t) {
          var n = [];return t = t || f.modules, e.each(t, function (e, t) {
            a.moduleExists(t) || n.push(t);
          }), n;
        } }, change: { setting: function setting(t, n, o, r) {
          o = "string" == typeof o ? "all" === o ? f.modules : [o] : o || f.modules, r = r === i || r, e.each(o, function (i, o) {
            var s,
                l = !a.moduleExists(o) || e.fn[o].settings.namespace || !1;a.moduleExists(o) && (a.verbose("Changing default setting", t, n, o), e.fn[o].settings[t] = n, r && l && (s = e(":data(module-" + l + ")")).length > 0 && (a.verbose("Modifying existing settings", s), s[o]("setting", t, n)));
          });
        }, settings: function settings(t, n, o) {
          n = "string" == typeof n ? [n] : n || f.modules, o = o === i || o, e.each(n, function (n, i) {
            var r;a.moduleExists(i) && (a.verbose("Changing default setting", t, i), e.extend(!0, e.fn[i].settings, t), o && m && (r = e(":data(module-" + m + ")")).length > 0 && (a.verbose("Modifying existing settings", r), r[i]("setting", t)));
          });
        } }, enable: { console: function console() {
          a.console(!0);
        }, debug: function debug(e, t) {
          e = e || f.modules, a.debug("Enabling debug for modules", e), a.change.setting("debug", !0, e, t);
        }, verbose: function verbose(e, t) {
          e = e || f.modules, a.debug("Enabling verbose debug for modules", e), a.change.setting("verbose", !0, e, t);
        } }, disable: { console: function console() {
          a.console(!1);
        }, debug: function debug(e, t) {
          e = e || f.modules, a.debug("Disabling debug for modules", e), a.change.setting("debug", !1, e, t);
        }, verbose: function verbose(e, t) {
          e = e || f.modules, a.debug("Disabling verbose debug for modules", e), a.change.setting("verbose", !1, e, t);
        } }, console: function console(e) {
        if (e) {
          if (b.cache.console === i) return void a.error(g.console);a.debug("Restoring console function"), t.console = b.cache.console;
        } else a.debug("Disabling console function"), b.cache.console = t.console, t.console = { clear: function clear() {}, error: function error() {}, group: function group() {}, groupCollapsed: function groupCollapsed() {}, groupEnd: function groupEnd() {}, info: function info() {}, log: function log() {}, markTimeline: function markTimeline() {}, warn: function warn() {} };
      }, destroy: function destroy() {
        a.verbose("Destroying previous site for", h), h.removeData(p);
      }, cache: {}, setting: function setting(t, n) {
        if (e.isPlainObject(t)) e.extend(!0, f, t);else {
          if (n === i) return f[t];f[t] = n;
        }
      }, internal: function internal(t, n) {
        if (e.isPlainObject(t)) e.extend(!0, a, t);else {
          if (n === i) return a[t];a[t] = n;
        }
      }, debug: function debug() {
        f.debug && (f.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), a.debug.apply(console, arguments)));
      }, verbose: function verbose() {
        f.verbose && f.debug && (f.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), a.verbose.apply(console, arguments)));
      }, error: function error() {
        a.error = Function.prototype.bind.call(console.error, console, f.name + ":"), a.error.apply(console, arguments);
      }, performance: { log: function log(e) {
          var t, n;f.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Element: v, Name: e[0], Arguments: [].slice.call(e, 1) || "", "Execution Time": n })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500);
        }, display: function display() {
          var t = f.name + ":",
              n = 0;s = !1, clearTimeout(a.performance.timer), e.each(l, function (e, t) {
            n += t["Execution Time"];
          }), t += " " + n + "ms", (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
            console.log(t.Name + ": " + t["Execution Time"] + "ms");
          }), console.groupEnd()), l = [];
        } }, invoke: function invoke(t, n, o) {
        var s,
            l,
            c,
            u = b;return n = n || d, o = v || o, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, o) {
          var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(u[r]) && n != s) u = u[r];else {
            if (u[r] !== i) return l = u[r], !1;if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (l = u[o], !1) : (a.error(g.method, t), !1);u = u[o];
          }
        })), e.isFunction(l) ? c = l.apply(o, n) : l !== i && (c = l), e.isArray(r) ? r.push(c) : r !== i ? r = [r, c] : c !== i && (r = c), l;
      } }, u ? (b === i && a.initialize(), a.invoke(c)) : (b !== i && a.destroy(), a.initialize()), r !== i ? r : this;
  }, e.site.settings = { name: "Site", namespace: "site", error: { console: "Console cannot be restored, most likely it was overwritten outside of module", method: "The method you called is not defined." }, debug: !1, verbose: !1, performance: !0, modules: ["accordion", "api", "checkbox", "dimmer", "dropdown", "embed", "form", "modal", "nag", "popup", "rating", "shape", "sidebar", "state", "sticky", "tab", "transition", "visit", "visibility"], siteNamespace: "site", namespaceStub: { cache: {}, config: {}, sections: {}, section: {}, utilities: {} } }, e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
      return function (n) {
        return !!e.data(n, t);
      };
    }) : function (t, n, i) {
      return !!e.data(t, i[3]);
    } });
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.form = function (t) {
    var o,
        a = e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = arguments[1],
        d = "string" == typeof c,
        f = [].slice.call(arguments, 1);return a.each(function () {
      var m,
          g,
          p,
          h,
          v,
          b,
          y,
          x,
          C,
          w,
          k,
          S,
          T,
          A,
          R,
          P,
          E = e(this),
          O = this,
          F = [],
          D = !1;(P = { initialize: function initialize() {
          P.get.settings(), d ? (R === i && P.instantiate(), P.invoke(c)) : (R !== i && R.invoke("destroy"), P.verbose("Initializing form validation", E, v), P.bindEvents(), P.set.defaults(), P.instantiate());
        }, instantiate: function instantiate() {
          P.verbose("Storing instance of module", P), R = P, E.data(T, P);
        }, destroy: function destroy() {
          P.verbose("Destroying previous module", R), P.removeEvents(), E.removeData(T);
        }, refresh: function refresh() {
          P.verbose("Refreshing selector cache"), m = E.find(x.field), g = E.find(x.group), p = E.find(x.message), E.find(x.prompt), h = E.find(x.submit), E.find(x.clear), E.find(x.reset);
        }, submit: function submit() {
          P.verbose("Submitting form", E), E.submit();
        }, attachEvents: function attachEvents(t, n) {
          n = n || "submit", e(t).on("click" + A, function (e) {
            P[n](), e.preventDefault();
          });
        }, bindEvents: function bindEvents() {
          P.verbose("Attaching form events"), E.on("submit" + A, P.validate.form).on("blur" + A, x.field, P.event.field.blur).on("click" + A, x.submit, P.submit).on("click" + A, x.reset, P.reset).on("click" + A, x.clear, P.clear), v.keyboardShortcuts && E.on("keydown" + A, x.field, P.event.field.keydown), m.each(function () {
            var t = e(this),
                n = t.prop("type"),
                i = P.get.changeEvent(n, t);e(this).on(i + A, P.event.field.change);
          });
        }, clear: function clear() {
          m.each(function () {
            var t = e(this),
                n = t.parent(),
                i = t.closest(g),
                o = i.find(x.prompt),
                a = t.data(y.defaultValue) || "",
                r = n.is(x.uiCheckbox),
                s = n.is(x.uiDropdown);i.hasClass(C.error) && (P.verbose("Resetting error on field", i), i.removeClass(C.error), o.remove()), s ? (P.verbose("Resetting dropdown value", n, a), n.dropdown("clear")) : r ? t.prop("checked", !1) : (P.verbose("Resetting field value", t, a), t.val(""));
          });
        }, reset: function reset() {
          m.each(function () {
            var t = e(this),
                n = t.parent(),
                o = t.closest(g),
                a = o.find(x.prompt),
                r = t.data(y.defaultValue),
                s = n.is(x.uiCheckbox),
                l = n.is(x.uiDropdown),
                c = o.hasClass(C.error);r !== i && (c && (P.verbose("Resetting error on field", o), o.removeClass(C.error), a.remove()), l ? (P.verbose("Resetting dropdown value", n, r), n.dropdown("restore defaults")) : s ? (P.verbose("Resetting checkbox value", n, r), t.prop("checked", r)) : (P.verbose("Resetting field value", t, r), t.val(r)));
          });
        }, determine: { isValid: function isValid() {
            var t = !0;return e.each(b, function (e, n) {
              P.validate.field(n, e, !0) || (t = !1);
            }), t;
          } }, is: { bracketedRule: function bracketedRule(e) {
            return e.type && e.type.match(v.regExp.bracket);
          }, shorthandFields: function shorthandFields(e) {
            var t = e[Object.keys(e)[0]];return P.is.shorthandRules(t);
          }, shorthandRules: function shorthandRules(t) {
            return "string" == typeof t || e.isArray(t);
          }, empty: function empty(e) {
            return !e || 0 === e.length || (e.is('input[type="checkbox"]') ? !e.is(":checked") : P.is.blank(e));
          }, blank: function blank(t) {
            return "" === e.trim(t.val());
          }, valid: function valid(t) {
            var n = !0;return t ? (P.verbose("Checking if field is valid", t), P.validate.field(b[t], t, !1)) : (P.verbose("Checking if form is valid"), e.each(b, function (e, t) {
              P.is.valid(e) || (n = !1);
            }), n);
          } }, removeEvents: function removeEvents() {
          E.off(A), m.off(A), h.off(A), m.off(A);
        }, event: { field: { keydown: function keydown(t) {
              var n = e(this),
                  i = t.which,
                  o = n.is(x.input),
                  a = n.is(x.checkbox),
                  r = n.closest(x.uiDropdown).length > 0,
                  s = 13;i == 27 && (P.verbose("Escape key pressed blurring field"), n.blur()), t.ctrlKey || i != s || !o || r || a || (D || (n.one("keyup" + A, P.event.field.keyup), P.submit(), P.debug("Enter pressed on input submitting form")), D = !0);
            }, keyup: function keyup() {
              D = !1;
            }, blur: function blur(t) {
              var n = e(this),
                  i = n.closest(g),
                  o = P.get.validation(n);i.hasClass(C.error) ? (P.debug("Revalidating field", n, o), o && P.validate.field(o)) : "blur" != v.on && "change" != v.on || o && P.validate.field(o);
            }, change: function change(t) {
              var n = e(this),
                  i = n.closest(g),
                  o = P.get.validation(n);o && ("change" == v.on || i.hasClass(C.error) && v.revalidate) && (clearTimeout(P.timer), P.timer = setTimeout(function () {
                P.debug("Revalidating field", n, P.get.validation(n)), P.validate.field(o);
              }, v.delay));
            } } }, get: { ancillaryValue: function ancillaryValue(e) {
            return !(!e.type || !e.value && !P.is.bracketedRule(e)) && (e.value !== i ? e.value : e.type.match(v.regExp.bracket)[1] + "");
          }, ruleName: function ruleName(e) {
            return P.is.bracketedRule(e) ? e.type.replace(e.type.match(v.regExp.bracket)[0], "") : e.type;
          }, changeEvent: function changeEvent(e, t) {
            return "checkbox" == e || "radio" == e || "hidden" == e || t.is("select") ? "change" : P.get.inputEvent();
          }, inputEvent: function inputEvent() {
            return n.createElement("input").oninput !== i ? "input" : n.createElement("input").onpropertychange !== i ? "propertychange" : "keyup";
          }, fieldsFromShorthand: function fieldsFromShorthand(t) {
            var n = {};return e.each(t, function (t, i) {
              "string" == typeof i && (i = [i]), n[t] = { rules: [] }, e.each(i, function (e, i) {
                n[t].rules.push({ type: i });
              });
            }), n;
          }, prompt: function prompt(e, t) {
            var n,
                i,
                o,
                a = P.get.ruleName(e),
                r = P.get.ancillaryValue(e),
                s = e.prompt || v.prompt[a] || v.text.unspecifiedRule,
                l = -1 !== s.search("{value}"),
                c = -1 !== s.search("{name}");return (c || l) && (i = P.get.field(t.identifier)), l && (s = s.replace("{value}", i.val())), c && (o = 1 == (n = i.closest(x.group).find("label").eq(0)).length ? n.text() : i.prop("placeholder") || v.text.unspecifiedField, s = s.replace("{name}", o)), s = (s = s.replace("{identifier}", t.identifier)).replace("{ruleValue}", r), e.prompt || P.verbose("Using default validation prompt for type", s, a), s;
          }, settings: function settings() {
            if (e.isPlainObject(t)) {
              var n = Object.keys(t);n.length > 0 && t[n[0]].identifier !== i && t[n[0]].rules !== i ? (v = e.extend(!0, {}, e.fn.form.settings, u), b = e.extend({}, e.fn.form.settings.defaults, t), P.error(v.error.oldSyntax, O), P.verbose("Extending settings from legacy parameters", b, v)) : (t.fields && P.is.shorthandFields(t.fields) && (t.fields = P.get.fieldsFromShorthand(t.fields)), v = e.extend(!0, {}, e.fn.form.settings, t), b = e.extend({}, e.fn.form.settings.defaults, v.fields), P.verbose("Extending settings", b, v));
            } else v = e.fn.form.settings, b = e.fn.form.settings.defaults, P.verbose("Using default form validation", b, v);S = v.namespace, y = v.metadata, x = v.selector, C = v.className, w = v.regExp, k = v.error, T = "module-" + S, A = "." + S, R = E.data(T), P.refresh();
          }, field: function field(t) {
            return P.verbose("Finding field with identifier", t), t = P.escape.string(t), m.filter("#" + t).length > 0 ? m.filter("#" + t) : m.filter('[name="' + t + '"]').length > 0 ? m.filter('[name="' + t + '"]') : m.filter('[name="' + t + '[]"]').length > 0 ? m.filter('[name="' + t + '[]"]') : m.filter("[data-" + y.validate + '="' + t + '"]').length > 0 ? m.filter("[data-" + y.validate + '="' + t + '"]') : e("<input/>");
          }, fields: function fields(t) {
            var n = e();return e.each(t, function (e, t) {
              n = n.add(P.get.field(t));
            }), n;
          }, validation: function validation(t) {
            var n, i;return !!b && (e.each(b, function (e, o) {
              i = o.identifier || e, P.get.field(i)[0] == t[0] && (o.identifier = i, n = o);
            }), n || !1);
          }, value: function value(e) {
            var t = [];return t.push(e), P.get.values.call(O, t)[e];
          }, values: function values(t) {
            var n = e.isArray(t) ? P.get.fields(t) : m,
                o = {};return n.each(function (t, n) {
              var a = e(n),
                  r = (a.prop("type"), a.prop("name")),
                  s = a.val(),
                  l = a.is(x.checkbox),
                  c = a.is(x.radio),
                  u = -1 !== r.indexOf("[]"),
                  d = !!l && a.is(":checked");r && (u ? (r = r.replace("[]", ""), o[r] || (o[r] = []), l ? d ? o[r].push(s || !0) : o[r].push(!1) : o[r].push(s)) : c ? o[r] !== i && 0 != o[r] || (o[r] = !!d && (s || !0)) : o[r] = l ? !!d && (s || !0) : s);
            }), o;
          } }, has: { field: function field(e) {
            return P.verbose("Checking for existence of a field with identifier", e), "string" != typeof (e = P.escape.string(e)) && P.error(k.identifier, e), m.filter("#" + e).length > 0 || m.filter('[name="' + e + '"]').length > 0 || m.filter("[data-" + y.validate + '="' + e + '"]').length > 0;
          } }, escape: { string: function string(e) {
            return (e = String(e)).replace(w.escape, "\\$&");
          } }, add: { rule: function rule(e, t) {
            P.add.field(e, t);
          }, field: function field(t, n) {
            var i = {};P.is.shorthandRules(n) ? (n = e.isArray(n) ? n : [n], i[t] = { rules: [] }, e.each(n, function (e, n) {
              i[t].rules.push({ type: n });
            })) : i[t] = n, b = e.extend({}, b, i), P.debug("Adding rules", i, b);
          }, fields: function fields(t) {
            var n;n = t && P.is.shorthandFields(t) ? P.get.fieldsFromShorthand(t) : t, b = e.extend({}, b, n);
          }, prompt: function prompt(t, n) {
            var o = P.get.field(t).closest(g),
                a = o.children(x.prompt),
                r = 0 !== a.length;n = "string" == typeof n ? [n] : n, P.verbose("Adding field error state", t), o.addClass(C.error), v.inline && (r || (a = v.templates.prompt(n)).appendTo(o), a.html(n[0]), r ? P.verbose("Inline errors are disabled, no inline error added", t) : v.transition && e.fn.transition !== i && E.transition("is supported") ? (P.verbose("Displaying error with css transition", v.transition), a.transition(v.transition + " in", v.duration)) : (P.verbose("Displaying error with fallback javascript animation"), a.fadeIn(v.duration)));
          }, errors: function errors(e) {
            P.debug("Adding form error messages", e), P.set.error(), p.html(v.templates.error(e));
          } }, remove: { rule: function rule(t, n) {
            var o = e.isArray(n) ? n : [n];if (n == i) return P.debug("Removed all rules"), void (b[t].rules = []);b[t] != i && e.isArray(b[t].rules) && e.each(b[t].rules, function (e, n) {
              -1 !== o.indexOf(n.type) && (P.debug("Removed rule", n.type), b[t].rules.splice(e, 1));
            });
          }, field: function field(t) {
            var n = e.isArray(t) ? t : [t];e.each(n, function (e, t) {
              P.remove.rule(t);
            });
          }, rules: function rules(t, n) {
            e.isArray(t) ? e.each(fields, function (e, t) {
              P.remove.rule(t, n);
            }) : P.remove.rule(t, n);
          }, fields: function fields(e) {
            P.remove.field(e);
          }, prompt: function prompt(t) {
            var n = P.get.field(t).closest(g),
                o = n.children(x.prompt);n.removeClass(C.error), v.inline && o.is(":visible") && (P.verbose("Removing prompt for field", t), v.transition && e.fn.transition !== i && E.transition("is supported") ? o.transition(v.transition + " out", v.duration, function () {
              o.remove();
            }) : o.fadeOut(v.duration, function () {
              o.remove();
            }));
          } }, set: { success: function success() {
            E.removeClass(C.error).addClass(C.success);
          }, defaults: function defaults() {
            m.each(function () {
              var t = e(this),
                  n = t.filter(x.checkbox).length > 0 ? t.is(":checked") : t.val();t.data(y.defaultValue, n);
            });
          }, error: function error() {
            E.removeClass(C.success).addClass(C.error);
          }, value: function value(e, t) {
            var n = {};return n[e] = t, P.set.values.call(O, n);
          }, values: function values(t) {
            e.isEmptyObject(t) || e.each(t, function (t, n) {
              var i,
                  o = P.get.field(t),
                  a = o.parent(),
                  r = e.isArray(n),
                  s = a.is(x.uiCheckbox),
                  l = a.is(x.uiDropdown),
                  c = o.is(x.radio) && s;o.length > 0 && (r && s ? (P.verbose("Selecting multiple", n, o), a.checkbox("uncheck"), e.each(n, function (e, t) {
                i = o.filter('[value="' + t + '"]'), a = i.parent(), i.length > 0 && a.checkbox("check");
              })) : c ? (P.verbose("Selecting radio value", n, o), o.filter('[value="' + n + '"]').parent(x.uiCheckbox).checkbox("check")) : s ? (P.verbose("Setting checkbox value", n, a), !0 === n ? a.checkbox("check") : a.checkbox("uncheck")) : l ? (P.verbose("Setting dropdown value", n, a), a.dropdown("set selected", n)) : (P.verbose("Setting field value", n, o), o.val(n)));
            });
          } }, validate: { form: function form(e, t) {
            var n = P.get.values();if (D) return !1;if (F = [], P.determine.isValid()) {
              if (P.debug("Form has no validation errors, submitting"), P.set.success(), !0 !== t) return v.onSuccess.call(O, e, n);
            } else if (P.debug("Form has errors"), P.set.error(), v.inline || P.add.errors(F), E.data("moduleApi") !== i && e.stopImmediatePropagation(), !0 !== t) return v.onFailure.call(O, F, n);
          }, field: function field(t, n, o) {
            o = o === i || o, "string" == typeof t && (P.verbose("Validating field", t), n = t, t = b[t]);var a = t.identifier || n,
                r = P.get.field(a),
                s = !!t.depends && P.get.field(t.depends),
                l = !0,
                c = [];return t.identifier || (P.debug("Using field name as identifier", a), t.identifier = a), r.prop("disabled") ? (P.debug("Field is disabled. Skipping", a), l = !0) : t.optional && P.is.blank(r) ? (P.debug("Field is optional and blank. Skipping", a), l = !0) : t.depends && P.is.empty(s) ? (P.debug("Field depends on another value that is not present or empty. Skipping", s), l = !0) : t.rules !== i && e.each(t.rules, function (e, n) {
              P.has.field(a) && !P.validate.rule(t, n) && (P.debug("Field is invalid", a, n.type), c.push(P.get.prompt(n, t)), l = !1);
            }), l ? (o && (P.remove.prompt(a, c), v.onValid.call(r)), !0) : (o && (F = F.concat(c), P.add.prompt(a, c), v.onInvalid.call(r, c)), !1);
          }, rule: function rule(t, n) {
            var o = P.get.field(t.identifier),
                a = (n.type, o.val()),
                r = P.get.ancillaryValue(n),
                s = P.get.ruleName(n),
                l = v.rules[s];if (e.isFunction(l)) return a = a === i || "" === a || null === a ? "" : e.trim(a + ""), l.call(o, a, r);P.error(k.noRule, s);
          } }, setting: function setting(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, v, t);else {
            if (n === i) return v[t];v[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, P, t);else {
            if (n === i) return P[t];P[t] = n;
          }
        }, debug: function debug() {
          !v.silent && v.debug && (v.performance ? P.performance.log(arguments) : (P.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), P.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !v.silent && v.verbose && v.debug && (v.performance ? P.performance.log(arguments) : (P.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), P.verbose.apply(console, arguments)));
        }, error: function error() {
          v.silent || (P.error = Function.prototype.bind.call(console.error, console, v.name + ":"), P.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;v.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: O, "Execution Time": n })), clearTimeout(P.performance.timer), P.performance.timer = setTimeout(P.performance.display, 500);
          }, display: function display() {
            var t = v.name + ":",
                n = 0;s = !1, clearTimeout(P.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function invoke(t, n, a) {
          var r,
              s,
              l,
              c = R;return n = n || f, a = O || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s;
        } }).initialize();
    }), o !== i ? o : this;
  }, e.fn.form.settings = { name: "Form", namespace: "form", debug: !1, verbose: !1, performance: !0, fields: !1, keyboardShortcuts: !0, on: "submit", inline: !1, delay: 200, revalidate: !0, transition: "scale", duration: 200, onValid: function onValid() {}, onInvalid: function onInvalid() {}, onSuccess: function onSuccess() {
      return !0;
    }, onFailure: function onFailure() {
      return !1;
    }, metadata: { defaultValue: "default", validate: "validate" }, regExp: { htmlID: /^[a-zA-Z][\w:.-]*$/g, bracket: /\[(.*)\]/i, decimal: /^\d+\.?\d*$/, email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, flags: /^\/(.*)\/(.*)?/, integer: /^\-?\d+$/, number: /^\-?\d*(\.\d+)?$/, url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i }, text: { unspecifiedRule: "Please enter a valid value", unspecifiedField: "This field" }, prompt: { empty: "{name} must have a value", checked: "{name} must be checked", email: "{name} must be a valid e-mail", url: "{name} must be a valid url", regExp: "{name} is not formatted correctly", integer: "{name} must be an integer", decimal: "{name} must be a decimal number", number: "{name} must be set to a number", is: '{name} must be "{ruleValue}"', isExactly: '{name} must be exactly "{ruleValue}"', not: '{name} cannot be set to "{ruleValue}"', notExactly: '{name} cannot be set to exactly "{ruleValue}"', contain: '{name} must contain "{ruleValue}"', containExactly: '{name} must contain exactly "{ruleValue}"', doesntContain: '{name} cannot contain  "{ruleValue}"', doesntContainExactly: '{name} cannot contain exactly "{ruleValue}"', minLength: "{name} must be at least {ruleValue} characters", length: "{name} must be at least {ruleValue} characters", exactLength: "{name} must be exactly {ruleValue} characters", maxLength: "{name} cannot be longer than {ruleValue} characters", match: "{name} must match {ruleValue} field", different: "{name} must have a different value than {ruleValue} field", creditCard: "{name} must be a valid credit card number", minCount: "{name} must have at least {ruleValue} choices", exactCount: "{name} must have exactly {ruleValue} choices", maxCount: "{name} must have {ruleValue} or less choices" }, selector: { checkbox: 'input[type="checkbox"], input[type="radio"]', clear: ".clear", field: "input, textarea, select", group: ".field", input: "input", message: ".error.message", prompt: ".prompt.label", radio: 'input[type="radio"]', reset: '.reset:not([type="reset"])', submit: '.submit:not([type="submit"])', uiCheckbox: ".ui.checkbox", uiDropdown: ".ui.dropdown" }, className: { error: "error", label: "ui prompt label", pressed: "down", success: "success" }, error: { identifier: "You must specify a string identifier for each field", method: "The method you called is not defined.", noRule: "There is no rule matching the one you specified", oldSyntax: "Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically." }, templates: { error: function error(t) {
        var n = '<ul class="list">';return e.each(t, function (e, t) {
          n += "<li>" + t + "</li>";
        }), e(n += "</ul>");
      }, prompt: function prompt(t) {
        return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0]);
      } }, rules: { empty: function empty(t) {
        return !(t === i || "" === t || e.isArray(t) && 0 === t.length);
      }, checked: function checked() {
        return e(this).filter(":checked").length > 0;
      }, email: function email(t) {
        return e.fn.form.settings.regExp.email.test(t);
      }, url: function url(t) {
        return e.fn.form.settings.regExp.url.test(t);
      }, regExp: function regExp(t, n) {
        if (n instanceof RegExp) return t.match(n);var i,
            o = n.match(e.fn.form.settings.regExp.flags);return o && (n = o.length >= 2 ? o[1] : n, i = o.length >= 3 ? o[2] : ""), t.match(new RegExp(n, i));
      }, integer: function integer(t, n) {
        var o,
            a,
            r,
            s = e.fn.form.settings.regExp.integer;return n && -1 === ["", ".."].indexOf(n) && (-1 == n.indexOf("..") ? s.test(n) && (o = a = n - 0) : (r = n.split("..", 2), s.test(r[0]) && (o = r[0] - 0), s.test(r[1]) && (a = r[1] - 0))), s.test(t) && (o === i || t >= o) && (a === i || t <= a);
      }, decimal: function decimal(t) {
        return e.fn.form.settings.regExp.decimal.test(t);
      }, number: function number(t) {
        return e.fn.form.settings.regExp.number.test(t);
      }, is: function is(e, t) {
        return t = "string" == typeof t ? t.toLowerCase() : t, (e = "string" == typeof e ? e.toLowerCase() : e) == t;
      }, isExactly: function isExactly(e, t) {
        return e == t;
      }, not: function not(e, t) {
        return (e = "string" == typeof e ? e.toLowerCase() : e) != (t = "string" == typeof t ? t.toLowerCase() : t);
      }, notExactly: function notExactly(e, t) {
        return e != t;
      }, contains: function contains(t, n) {
        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n, "i"));
      }, containsExactly: function containsExactly(t, n) {
        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n));
      }, doesntContain: function doesntContain(t, n) {
        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n, "i"));
      }, doesntContainExactly: function doesntContainExactly(t, n) {
        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n));
      }, minLength: function minLength(e, t) {
        return e !== i && e.length >= t;
      }, length: function length(e, t) {
        return e !== i && e.length >= t;
      }, exactLength: function exactLength(e, t) {
        return e !== i && e.length == t;
      }, maxLength: function maxLength(e, t) {
        return e !== i && e.length <= t;
      }, match: function match(t, n) {
        var o;e(this);return e('[data-validate="' + n + '"]').length > 0 ? o = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? o = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? o = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (o = e('[name="' + n + '[]"]')), o !== i && t.toString() == o.toString();
      }, different: function different(t, n) {
        var o;e(this);return e('[data-validate="' + n + '"]').length > 0 ? o = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? o = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? o = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (o = e('[name="' + n + '[]"]')), o !== i && t.toString() !== o.toString();
      }, creditCard: function creditCard(t, n) {
        var i,
            o,
            a = { visa: { pattern: /^4/, length: [16] }, amex: { pattern: /^3[47]/, length: [15] }, mastercard: { pattern: /^5[1-5]/, length: [16] }, discover: { pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/, length: [16] }, unionPay: { pattern: /^(62|88)/, length: [16, 17, 18, 19] }, jcb: { pattern: /^35(2[89]|[3-8][0-9])/, length: [16] }, maestro: { pattern: /^(5018|5020|5038|6304|6759|676[1-3])/, length: [12, 13, 14, 15, 16, 17, 18, 19] }, dinersClub: { pattern: /^(30[0-5]|^36)/, length: [14] }, laser: { pattern: /^(6304|670[69]|6771)/, length: [16, 17, 18, 19] }, visaElectron: { pattern: /^(4026|417500|4508|4844|491(3|7))/, length: [16] } },
            r = {},
            s = !1,
            l = "string" == typeof n && n.split(",");if ("string" == typeof t && 0 !== t.length) {
          if (t = t.replace(/[\-]/g, ""), l && (e.each(l, function (n, i) {
            (o = a[i]) && (r = { length: -1 !== e.inArray(t.length, o.length), pattern: -1 !== t.search(o.pattern) }).length && r.pattern && (s = !0);
          }), !s)) return !1;if ((i = { number: -1 !== e.inArray(t.length, a.unionPay.length), pattern: -1 !== t.search(a.unionPay.pattern) }).number && i.pattern) return !0;for (var c = t.length, u = 0, d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]], f = 0; c--;) {
            f += d[u][parseInt(t.charAt(c), 10)], u ^= 1;
          }return f % 10 == 0 && f > 0;
        }
      }, minCount: function minCount(e, t) {
        return 0 == t || (1 == t ? "" !== e : e.split(",").length >= t);
      }, exactCount: function exactCount(e, t) {
        return 0 == t ? "" === e : 1 == t ? "" !== e && -1 === e.search(",") : e.split(",").length == t;
      }, maxCount: function maxCount(e, t) {
        return 0 != t && (1 == t ? -1 === e.search(",") : e.split(",").length <= t);
      } } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.accordion = function (n) {
    var o,
        a = e(this),
        r = new Date().getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;return a.each(function () {
      var d,
          f,
          m = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.accordion.settings, n) : e.extend({}, e.fn.accordion.settings),
          g = m.className,
          p = m.namespace,
          h = m.selector,
          v = m.error,
          b = "." + p,
          y = "module-" + p,
          x = a.selector || "",
          C = e(this),
          w = C.find(h.title),
          k = C.find(h.content),
          S = this,
          T = C.data(y);f = { initialize: function initialize() {
          f.debug("Initializing", C), f.bind.events(), m.observeChanges && f.observeChanges(), f.instantiate();
        }, instantiate: function instantiate() {
          T = f, C.data(y, f);
        }, destroy: function destroy() {
          f.debug("Destroying previous instance", C), C.off(b).removeData(y);
        }, refresh: function refresh() {
          w = C.find(h.title), k = C.find(h.content);
        }, observeChanges: function observeChanges() {
          "MutationObserver" in t && ((d = new MutationObserver(function (e) {
            f.debug("DOM tree modified, updating selector cache"), f.refresh();
          })).observe(S, { childList: !0, subtree: !0 }), f.debug("Setting up mutation observer", d));
        }, bind: { events: function events() {
            f.debug("Binding delegated events"), C.on(m.on + b, h.trigger, f.event.click);
          } }, event: { click: function click() {
            f.toggle.call(this);
          } }, toggle: function toggle(t) {
          var n = t !== i ? "number" == typeof t ? w.eq(t) : e(t).closest(h.title) : e(this).closest(h.title),
              o = n.next(k),
              a = o.hasClass(g.animating),
              r = o.hasClass(g.active),
              s = r && !a,
              l = !r && a;f.debug("Toggling visibility of content", n), s || l ? m.collapsible ? f.close.call(n) : f.debug("Cannot close accordion content collapsing is disabled") : f.open.call(n);
        }, open: function open(t) {
          var n = t !== i ? "number" == typeof t ? w.eq(t) : e(t).closest(h.title) : e(this).closest(h.title),
              o = n.next(k),
              a = o.hasClass(g.animating);o.hasClass(g.active) || a ? f.debug("Accordion already open, skipping", o) : (f.debug("Opening accordion content", n), m.onOpening.call(o), m.exclusive && f.closeOthers.call(n), n.addClass(g.active), o.stop(!0, !0).addClass(g.animating), m.animateChildren && (e.fn.transition !== i && C.transition("is supported") ? o.children().transition({ animation: "fade in", queue: !1, useFailSafe: !0, debug: m.debug, verbose: m.verbose, duration: m.duration }) : o.children().stop(!0, !0).animate({ opacity: 1 }, m.duration, f.resetOpacity)), o.slideDown(m.duration, m.easing, function () {
            o.removeClass(g.animating).addClass(g.active), f.reset.display.call(this), m.onOpen.call(this), m.onChange.call(this);
          }));
        }, close: function close(t) {
          var n = t !== i ? "number" == typeof t ? w.eq(t) : e(t).closest(h.title) : e(this).closest(h.title),
              o = n.next(k),
              a = o.hasClass(g.animating),
              r = o.hasClass(g.active);!r && !(!r && a) || r && a || (f.debug("Closing accordion content", o), m.onClosing.call(o), n.removeClass(g.active), o.stop(!0, !0).addClass(g.animating), m.animateChildren && (e.fn.transition !== i && C.transition("is supported") ? o.children().transition({ animation: "fade out", queue: !1, useFailSafe: !0, debug: m.debug, verbose: m.verbose, duration: m.duration }) : o.children().stop(!0, !0).animate({ opacity: 0 }, m.duration, f.resetOpacity)), o.slideUp(m.duration, m.easing, function () {
            o.removeClass(g.animating).removeClass(g.active), f.reset.display.call(this), m.onClose.call(this), m.onChange.call(this);
          }));
        }, closeOthers: function closeOthers(t) {
          var n,
              o,
              a,
              r = t !== i ? w.eq(t) : e(this).closest(h.title),
              s = r.parents(h.content).prev(h.title),
              l = r.closest(h.accordion),
              c = h.title + "." + g.active + ":visible",
              u = h.content + "." + g.active + ":visible";m.closeNested ? a = (n = l.find(c).not(s)).next(k) : (n = l.find(c).not(s), o = l.find(u).find(c).not(s), a = (n = n.not(o)).next(k)), n.length > 0 && (f.debug("Exclusive enabled, closing other content", n), n.removeClass(g.active), a.removeClass(g.animating).stop(!0, !0), m.animateChildren && (e.fn.transition !== i && C.transition("is supported") ? a.children().transition({ animation: "fade out", useFailSafe: !0, debug: m.debug, verbose: m.verbose, duration: m.duration }) : a.children().stop(!0, !0).animate({ opacity: 0 }, m.duration, f.resetOpacity)), a.slideUp(m.duration, m.easing, function () {
            e(this).removeClass(g.active), f.reset.display.call(this);
          }));
        }, reset: { display: function display() {
            f.verbose("Removing inline display from element", this), e(this).css("display", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style");
          }, opacity: function opacity() {
            f.verbose("Removing inline opacity from element", this), e(this).css("opacity", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style");
          } }, setting: function setting(t, n) {
          if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (n === i) return m[t];e.isPlainObject(m[t]) ? e.extend(!0, m[t], n) : m[t] = n;
          }
        }, internal: function internal(t, n) {
          if (f.debug("Changing internal", t, n), n === i) return f[t];e.isPlainObject(t) ? e.extend(!0, f, t) : f[t] = n;
        }, debug: function debug() {
          !m.silent && m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !m.silent && m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)));
        }, error: function error() {
          m.silent || (f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;m.performance && (n = (t = new Date().getTime()) - (r || t), r = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: S, "Execution Time": n })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500);
          }, display: function display() {
            var t = m.name + ":",
                n = 0;r = !1, clearTimeout(f.performance.timer), e.each(s, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", x && (t += " '" + x + "'"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), s = [];
          } }, invoke: function invoke(t, n, a) {
          var r,
              s,
              l,
              c = T;return n = n || u, a = S || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (f.error(v.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s;
        } }, c ? (T === i && f.initialize(), f.invoke(l)) : (T !== i && T.invoke("destroy"), f.initialize());
    }), o !== i ? o : this;
  }, e.fn.accordion.settings = { name: "Accordion", namespace: "accordion", silent: !1, debug: !1, verbose: !1, performance: !0, on: "click", observeChanges: !0, exclusive: !0, collapsible: !0, closeNested: !1, animateChildren: !0, duration: 350, easing: "easeOutQuad", onOpening: function onOpening() {}, onOpen: function onOpen() {}, onClosing: function onClosing() {}, onClose: function onClose() {}, onChange: function onChange() {}, error: { method: "The method you called is not defined" }, className: { active: "active", animating: "animating" }, selector: { accordion: ".accordion", title: ".title", trigger: ".title", content: ".content" } }, e.extend(e.easing, { easeOutQuad: function easeOutQuad(e, t, n, i, o) {
      return -i * (t /= o) * (t - 2) + n;
    } });
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.checkbox = function (o) {
    var a,
        r = e(this),
        s = r.selector || "",
        l = new Date().getTime(),
        c = [],
        u = arguments[0],
        d = "string" == typeof u,
        f = [].slice.call(arguments, 1);return r.each(function () {
      var r,
          m,
          g = e.extend(!0, {}, e.fn.checkbox.settings, o),
          p = g.className,
          h = g.namespace,
          v = g.selector,
          b = g.error,
          y = "." + h,
          x = "module-" + h,
          C = e(this),
          w = e(this).children(v.label),
          k = e(this).children(v.input),
          S = k[0],
          T = !1,
          A = !1,
          R = C.data(x),
          P = this;m = { initialize: function initialize() {
          m.verbose("Initializing checkbox", g), m.create.label(), m.bind.events(), m.set.tabbable(), m.hide.input(), m.observeChanges(), m.instantiate(), m.setup();
        }, instantiate: function instantiate() {
          m.verbose("Storing instance of module", m), R = m, C.data(x, m);
        }, destroy: function destroy() {
          m.verbose("Destroying module"), m.unbind.events(), m.show.input(), C.removeData(x);
        }, fix: { reference: function reference() {
            C.is(v.input) && (m.debug("Behavior called on <input> adjusting invoked element"), C = C.closest(v.checkbox), m.refresh());
          } }, setup: function setup() {
          m.set.initialLoad(), m.is.indeterminate() ? (m.debug("Initial value is indeterminate"), m.indeterminate()) : m.is.checked() ? (m.debug("Initial value is checked"), m.check()) : (m.debug("Initial value is unchecked"), m.uncheck()), m.remove.initialLoad();
        }, refresh: function refresh() {
          w = C.children(v.label), k = C.children(v.input), S = k[0];
        }, hide: { input: function input() {
            m.verbose("Modifying <input> z-index to be unselectable"), k.addClass(p.hidden);
          } }, show: { input: function input() {
            m.verbose("Modifying <input> z-index to be selectable"), k.removeClass(p.hidden);
          } }, observeChanges: function observeChanges() {
          "MutationObserver" in t && ((r = new MutationObserver(function (e) {
            m.debug("DOM tree modified, updating selector cache"), m.refresh();
          })).observe(P, { childList: !0, subtree: !0 }), m.debug("Setting up mutation observer", r));
        }, attachEvents: function attachEvents(t, n) {
          var i = e(t);n = e.isFunction(m[n]) ? m[n] : m.toggle, i.length > 0 ? (m.debug("Attaching checkbox events to element", t, n), i.on("click" + y, n)) : m.error(b.notFound);
        }, event: { click: function click(t) {
            var n = e(t.target);n.is(v.input) ? m.verbose("Using default check action on initialized checkbox") : n.is(v.link) ? m.debug("Clicking link inside checkbox, skipping toggle") : (m.toggle(), k.focus(), t.preventDefault());
          }, keydown: function keydown(e) {
            var t = e.which,
                n = 13,
                i = 32;t == 27 ? (m.verbose("Escape key pressed blurring field"), k.blur(), A = !0) : e.ctrlKey || t != i && t != n ? A = !1 : (m.verbose("Enter/space key pressed, toggling checkbox"), m.toggle(), A = !0);
          }, keyup: function keyup(e) {
            A && e.preventDefault();
          } }, check: function check() {
          m.should.allowCheck() && (m.debug("Checking checkbox", k), m.set.checked(), m.should.ignoreCallbacks() || (g.onChecked.call(S), g.onChange.call(S)));
        }, uncheck: function uncheck() {
          m.should.allowUncheck() && (m.debug("Unchecking checkbox"), m.set.unchecked(), m.should.ignoreCallbacks() || (g.onUnchecked.call(S), g.onChange.call(S)));
        }, indeterminate: function indeterminate() {
          m.should.allowIndeterminate() ? m.debug("Checkbox is already indeterminate") : (m.debug("Making checkbox indeterminate"), m.set.indeterminate(), m.should.ignoreCallbacks() || (g.onIndeterminate.call(S), g.onChange.call(S)));
        }, determinate: function determinate() {
          m.should.allowDeterminate() ? m.debug("Checkbox is already determinate") : (m.debug("Making checkbox determinate"), m.set.determinate(), m.should.ignoreCallbacks() || (g.onDeterminate.call(S), g.onChange.call(S)));
        }, enable: function enable() {
          m.is.enabled() ? m.debug("Checkbox is already enabled") : (m.debug("Enabling checkbox"), m.set.enabled(), g.onEnable.call(S), g.onEnabled.call(S));
        }, disable: function disable() {
          m.is.disabled() ? m.debug("Checkbox is already disabled") : (m.debug("Disabling checkbox"), m.set.disabled(), g.onDisable.call(S), g.onDisabled.call(S));
        }, get: { radios: function radios() {
            var t = m.get.name();return e('input[name="' + t + '"]').closest(v.checkbox);
          }, otherRadios: function otherRadios() {
            return m.get.radios().not(C);
          }, name: function name() {
            return k.attr("name");
          } }, is: { initialLoad: function initialLoad() {
            return T;
          }, radio: function radio() {
            return k.hasClass(p.radio) || "radio" == k.attr("type");
          }, indeterminate: function indeterminate() {
            return k.prop("indeterminate") !== i && k.prop("indeterminate");
          }, checked: function checked() {
            return k.prop("checked") !== i && k.prop("checked");
          }, disabled: function disabled() {
            return k.prop("disabled") !== i && k.prop("disabled");
          }, enabled: function enabled() {
            return !m.is.disabled();
          }, determinate: function determinate() {
            return !m.is.indeterminate();
          }, unchecked: function unchecked() {
            return !m.is.checked();
          } }, should: { allowCheck: function allowCheck() {
            return m.is.determinate() && m.is.checked() && !m.should.forceCallbacks() ? (m.debug("Should not allow check, checkbox is already checked"), !1) : !1 !== g.beforeChecked.apply(S) || (m.debug("Should not allow check, beforeChecked cancelled"), !1);
          }, allowUncheck: function allowUncheck() {
            return m.is.determinate() && m.is.unchecked() && !m.should.forceCallbacks() ? (m.debug("Should not allow uncheck, checkbox is already unchecked"), !1) : !1 !== g.beforeUnchecked.apply(S) || (m.debug("Should not allow uncheck, beforeUnchecked cancelled"), !1);
          }, allowIndeterminate: function allowIndeterminate() {
            return m.is.indeterminate() && !m.should.forceCallbacks() ? (m.debug("Should not allow indeterminate, checkbox is already indeterminate"), !1) : !1 !== g.beforeIndeterminate.apply(S) || (m.debug("Should not allow indeterminate, beforeIndeterminate cancelled"), !1);
          }, allowDeterminate: function allowDeterminate() {
            return m.is.determinate() && !m.should.forceCallbacks() ? (m.debug("Should not allow determinate, checkbox is already determinate"), !1) : !1 !== g.beforeDeterminate.apply(S) || (m.debug("Should not allow determinate, beforeDeterminate cancelled"), !1);
          }, forceCallbacks: function forceCallbacks() {
            return m.is.initialLoad() && g.fireOnInit;
          }, ignoreCallbacks: function ignoreCallbacks() {
            return T && !g.fireOnInit;
          } }, can: { change: function change() {
            return !(C.hasClass(p.disabled) || C.hasClass(p.readOnly) || k.prop("disabled") || k.prop("readonly"));
          }, uncheck: function uncheck() {
            return "boolean" == typeof g.uncheckable ? g.uncheckable : !m.is.radio();
          } }, set: { initialLoad: function initialLoad() {
            T = !0;
          }, checked: function checked() {
            m.verbose("Setting class to checked"), C.removeClass(p.indeterminate).addClass(p.checked), m.is.radio() && m.uncheckOthers(), m.is.indeterminate() || !m.is.checked() ? (m.verbose("Setting state to checked", S), k.prop("indeterminate", !1).prop("checked", !0), m.trigger.change()) : m.debug("Input is already checked, skipping input property change");
          }, unchecked: function unchecked() {
            m.verbose("Removing checked class"), C.removeClass(p.indeterminate).removeClass(p.checked), m.is.indeterminate() || !m.is.unchecked() ? (m.debug("Setting state to unchecked"), k.prop("indeterminate", !1).prop("checked", !1), m.trigger.change()) : m.debug("Input is already unchecked");
          }, indeterminate: function indeterminate() {
            m.verbose("Setting class to indeterminate"), C.addClass(p.indeterminate), m.is.indeterminate() ? m.debug("Input is already indeterminate, skipping input property change") : (m.debug("Setting state to indeterminate"), k.prop("indeterminate", !0), m.trigger.change());
          }, determinate: function determinate() {
            m.verbose("Removing indeterminate class"), C.removeClass(p.indeterminate), m.is.determinate() ? m.debug("Input is already determinate, skipping input property change") : (m.debug("Setting state to determinate"), k.prop("indeterminate", !1));
          }, disabled: function disabled() {
            m.verbose("Setting class to disabled"), C.addClass(p.disabled), m.is.disabled() ? m.debug("Input is already disabled, skipping input property change") : (m.debug("Setting state to disabled"), k.prop("disabled", "disabled"), m.trigger.change());
          }, enabled: function enabled() {
            m.verbose("Removing disabled class"), C.removeClass(p.disabled), m.is.enabled() ? m.debug("Input is already enabled, skipping input property change") : (m.debug("Setting state to enabled"), k.prop("disabled", !1), m.trigger.change());
          }, tabbable: function tabbable() {
            m.verbose("Adding tabindex to checkbox"), k.attr("tabindex") === i && k.attr("tabindex", 0);
          } }, remove: { initialLoad: function initialLoad() {
            T = !1;
          } }, trigger: { change: function change() {
            var e = n.createEvent("HTMLEvents"),
                t = k[0];t && (m.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e));
          } }, create: { label: function label() {
            k.prevAll(v.label).length > 0 ? (k.prev(v.label).detach().insertAfter(k), m.debug("Moving existing label", w)) : m.has.label() || (w = e("<label>").insertAfter(k), m.debug("Creating label", w));
          } }, has: { label: function label() {
            return w.length > 0;
          } }, bind: { events: function events() {
            m.verbose("Attaching checkbox events"), C.on("click" + y, m.event.click).on("keydown" + y, v.input, m.event.keydown).on("keyup" + y, v.input, m.event.keyup);
          } }, unbind: { events: function events() {
            m.debug("Removing events"), C.off(y);
          } }, uncheckOthers: function uncheckOthers() {
          var e = m.get.otherRadios();m.debug("Unchecking other radios", e), e.removeClass(p.checked);
        }, toggle: function toggle() {
          m.can.change() ? m.is.indeterminate() || m.is.unchecked() ? (m.debug("Currently unchecked"), m.check()) : m.is.checked() && m.can.uncheck() && (m.debug("Currently checked"), m.uncheck()) : m.is.radio() || m.debug("Checkbox is read-only or disabled, ignoring toggle");
        }, setting: function setting(t, n) {
          if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, g, t);else {
            if (n === i) return g[t];e.isPlainObject(g[t]) ? e.extend(!0, g[t], n) : g[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (n === i) return m[t];m[t] = n;
          }
        }, debug: function debug() {
          !g.silent && g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !g.silent && g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)));
        }, error: function error() {
          g.silent || (m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;g.performance && (n = (t = new Date().getTime()) - (l || t), l = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: P, "Execution Time": n })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500);
          }, display: function display() {
            var t = g.name + ":",
                n = 0;l = !1, clearTimeout(m.performance.timer), e.each(c, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), c = [];
          } }, invoke: function invoke(t, n, o) {
          var r,
              s,
              l,
              c = R;return n = n || f, o = P || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (m.error(b.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, d ? (R === i && m.initialize(), m.invoke(u)) : (R !== i && R.invoke("destroy"), m.initialize());
    }), a !== i ? a : this;
  }, e.fn.checkbox.settings = { name: "Checkbox", namespace: "checkbox", silent: !1, debug: !1, verbose: !0, performance: !0, uncheckable: "auto", fireOnInit: !1, onChange: function onChange() {}, beforeChecked: function beforeChecked() {}, beforeUnchecked: function beforeUnchecked() {}, beforeDeterminate: function beforeDeterminate() {}, beforeIndeterminate: function beforeIndeterminate() {}, onChecked: function onChecked() {}, onUnchecked: function onUnchecked() {}, onDeterminate: function onDeterminate() {}, onIndeterminate: function onIndeterminate() {}, onEnable: function onEnable() {}, onDisable: function onDisable() {}, onEnabled: function onEnabled() {}, onDisabled: function onDisabled() {}, className: { checked: "checked", indeterminate: "indeterminate", disabled: "disabled", hidden: "hidden", radio: "radio", readOnly: "read-only" }, error: { method: "The method you called is not defined" }, selector: { checkbox: ".ui.checkbox", label: "label, .box", input: 'input[type="checkbox"], input[type="radio"]', link: "a[href]" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.dimmer = function (t) {
    var o,
        a = e(this),
        r = new Date().getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);return a.each(function () {
      var d,
          f,
          m,
          g = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.dimmer.settings, t) : e.extend({}, e.fn.dimmer.settings),
          p = g.selector,
          h = g.namespace,
          v = g.className,
          b = g.error,
          y = "." + h,
          x = "module-" + h,
          C = a.selector || "",
          w = "ontouchstart" in n.documentElement ? "touchstart" : "click",
          k = e(this),
          S = this,
          T = k.data(x);(m = { preinitialize: function preinitialize() {
          m.is.dimmer() ? (f = k.parent(), d = k) : (f = k, d = m.has.dimmer() ? g.dimmerName ? f.find(p.dimmer).filter("." + g.dimmerName) : f.find(p.dimmer) : m.create(), m.set.variation());
        }, initialize: function initialize() {
          m.debug("Initializing dimmer", g), m.bind.events(), m.set.dimmable(), m.instantiate();
        }, instantiate: function instantiate() {
          m.verbose("Storing instance of module", m), T = m, k.data(x, T);
        }, destroy: function destroy() {
          m.verbose("Destroying previous module", d), m.unbind.events(), m.remove.variation(), f.off(y);
        }, bind: { events: function events() {
            "hover" == g.on ? f.on("mouseenter" + y, m.show).on("mouseleave" + y, m.hide) : "click" == g.on && f.on(w + y, m.toggle), m.is.page() && (m.debug("Setting as a page dimmer", f), m.set.pageDimmer()), m.is.closable() && (m.verbose("Adding dimmer close event", d), f.on(w + y, p.dimmer, m.event.click));
          } }, unbind: { events: function events() {
            k.removeData(x), f.off(y);
          } }, event: { click: function click(t) {
            m.verbose("Determining if event occured on dimmer", t), (0 === d.find(t.target).length || e(t.target).is(p.content)) && (m.hide(), t.stopImmediatePropagation());
          } }, addContent: function addContent(t) {
          var n = e(t);m.debug("Add content to dimmer", n), n.parent()[0] !== d[0] && n.detach().appendTo(d);
        }, create: function create() {
          var t = e(g.template.dimmer());return g.dimmerName && (m.debug("Creating named dimmer", g.dimmerName), t.addClass(g.dimmerName)), t.appendTo(f), t;
        }, show: function show(t) {
          t = e.isFunction(t) ? t : function () {}, m.debug("Showing dimmer", d, g), m.is.dimmed() && !m.is.animating() || !m.is.enabled() ? m.debug("Dimmer is already shown or disabled") : (m.animate.show(t), g.onShow.call(S), g.onChange.call(S));
        }, hide: function hide(t) {
          t = e.isFunction(t) ? t : function () {}, m.is.dimmed() || m.is.animating() ? (m.debug("Hiding dimmer", d), m.animate.hide(t), g.onHide.call(S), g.onChange.call(S)) : m.debug("Dimmer is not visible");
        }, toggle: function toggle() {
          m.verbose("Toggling dimmer visibility", d), m.is.dimmed() ? m.hide() : m.show();
        }, animate: { show: function show(t) {
            t = e.isFunction(t) ? t : function () {}, g.useCSS && e.fn.transition !== i && d.transition("is supported") ? ("auto" !== g.opacity && m.set.opacity(), d.transition({ animation: g.transition + " in", queue: !1, duration: m.get.duration(), useFailSafe: !0, onStart: function onStart() {
                m.set.dimmed();
              }, onComplete: function onComplete() {
                m.set.active(), t();
              } })) : (m.verbose("Showing dimmer animation with javascript"), m.set.dimmed(), "auto" == g.opacity && (g.opacity = .8), d.stop().css({ opacity: 0, width: "100%", height: "100%" }).fadeTo(m.get.duration(), g.opacity, function () {
              d.removeAttr("style"), m.set.active(), t();
            }));
          }, hide: function hide(t) {
            t = e.isFunction(t) ? t : function () {}, g.useCSS && e.fn.transition !== i && d.transition("is supported") ? (m.verbose("Hiding dimmer with css"), d.transition({ animation: g.transition + " out", queue: !1, duration: m.get.duration(), useFailSafe: !0, onStart: function onStart() {
                m.remove.dimmed();
              }, onComplete: function onComplete() {
                m.remove.active(), t();
              } })) : (m.verbose("Hiding dimmer with javascript"), m.remove.dimmed(), d.stop().fadeOut(m.get.duration(), function () {
              m.remove.active(), d.removeAttr("style"), t();
            }));
          } }, get: { dimmer: function dimmer() {
            return d;
          }, duration: function duration() {
            return "object" == _typeof(g.duration) ? m.is.active() ? g.duration.hide : g.duration.show : g.duration;
          } }, has: { dimmer: function dimmer() {
            return g.dimmerName ? k.find(p.dimmer).filter("." + g.dimmerName).length > 0 : k.find(p.dimmer).length > 0;
          } }, is: { active: function active() {
            return d.hasClass(v.active);
          }, animating: function animating() {
            return d.is(":animated") || d.hasClass(v.animating);
          }, closable: function closable() {
            return "auto" == g.closable ? "hover" != g.on : g.closable;
          }, dimmer: function dimmer() {
            return k.hasClass(v.dimmer);
          }, dimmable: function dimmable() {
            return k.hasClass(v.dimmable);
          }, dimmed: function dimmed() {
            return f.hasClass(v.dimmed);
          }, disabled: function disabled() {
            return f.hasClass(v.disabled);
          }, enabled: function enabled() {
            return !m.is.disabled();
          }, page: function page() {
            return f.is("body");
          }, pageDimmer: function pageDimmer() {
            return d.hasClass(v.pageDimmer);
          } }, can: { show: function show() {
            return !d.hasClass(v.disabled);
          } }, set: { opacity: function opacity(e) {
            var t = d.css("background-color"),
                n = t.split(","),
                i = n && 3 == n.length,
                o = n && 4 == n.length;e = 0 === g.opacity ? 0 : g.opacity || e, i || o ? (n[3] = e + ")", t = n.join(",")) : t = "rgba(0, 0, 0, " + e + ")", m.debug("Setting opacity to", e), d.css("background-color", t);
          }, active: function active() {
            d.addClass(v.active);
          }, dimmable: function dimmable() {
            f.addClass(v.dimmable);
          }, dimmed: function dimmed() {
            f.addClass(v.dimmed);
          }, pageDimmer: function pageDimmer() {
            d.addClass(v.pageDimmer);
          }, disabled: function disabled() {
            d.addClass(v.disabled);
          }, variation: function variation(e) {
            (e = e || g.variation) && d.addClass(e);
          } }, remove: { active: function active() {
            d.removeClass(v.active);
          }, dimmed: function dimmed() {
            f.removeClass(v.dimmed);
          }, disabled: function disabled() {
            d.removeClass(v.disabled);
          }, variation: function variation(e) {
            (e = e || g.variation) && d.removeClass(e);
          } }, setting: function setting(t, n) {
          if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, g, t);else {
            if (n === i) return g[t];e.isPlainObject(g[t]) ? e.extend(!0, g[t], n) : g[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (n === i) return m[t];m[t] = n;
          }
        }, debug: function debug() {
          !g.silent && g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !g.silent && g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)));
        }, error: function error() {
          g.silent || (m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;g.performance && (n = (t = new Date().getTime()) - (r || t), r = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: S, "Execution Time": n })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500);
          }, display: function display() {
            var t = g.name + ":",
                n = 0;r = !1, clearTimeout(m.performance.timer), e.each(s, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", C && (t += " '" + C + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), s = [];
          } }, invoke: function invoke(t, n, a) {
          var r,
              s,
              l,
              c = T;return n = n || u, a = S || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (m.error(b.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s;
        } }).preinitialize(), c ? (T === i && m.initialize(), m.invoke(l)) : (T !== i && T.invoke("destroy"), m.initialize());
    }), o !== i ? o : this;
  }, e.fn.dimmer.settings = { name: "Dimmer", namespace: "dimmer", silent: !1, debug: !1, verbose: !1, performance: !0, dimmerName: !1, variation: !1, closable: "auto", useCSS: !0, transition: "fade", on: !1, opacity: "auto", duration: { show: 500, hide: 500 }, onChange: function onChange() {}, onShow: function onShow() {}, onHide: function onHide() {}, error: { method: "The method you called is not defined." }, className: { active: "active", animating: "animating", dimmable: "dimmable", dimmed: "dimmed", dimmer: "dimmer", disabled: "disabled", hide: "hide", pageDimmer: "page", show: "show" }, selector: { dimmer: "> .ui.dimmer", content: ".ui.dimmer > .content, .ui.dimmer > .content > .center" }, template: { dimmer: function dimmer() {
        return e("<div />").attr("class", "ui dimmer");
      } } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.dropdown = function (o) {
    var a,
        r = e(this),
        s = e(n),
        l = r.selector || "",
        c = "ontouchstart" in n.documentElement,
        u = new Date().getTime(),
        d = [],
        f = arguments[0],
        m = "string" == typeof f,
        g = [].slice.call(arguments, 1);return r.each(function (p) {
      var h,
          v,
          b,
          y,
          x,
          C,
          w,
          k,
          S = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.dropdown.settings, o) : e.extend({}, e.fn.dropdown.settings),
          T = S.className,
          A = S.message,
          R = S.fields,
          P = S.keys,
          E = S.metadata,
          O = S.namespace,
          F = S.regExp,
          D = S.selector,
          q = S.error,
          j = S.templates,
          z = "." + O,
          I = "module-" + O,
          M = e(this),
          L = e(S.context),
          V = M.find(D.text),
          N = M.find(D.search),
          H = M.find(D.sizer),
          U = M.find(D.input),
          W = M.find(D.icon),
          B = M.prev().find(D.text).length > 0 ? M.prev().find(D.text) : M.prev(),
          Q = M.children(D.menu),
          X = Q.find(D.item),
          $ = !1,
          Y = !1,
          Z = !1,
          K = this,
          J = M.data(I);k = { initialize: function initialize() {
          k.debug("Initializing dropdown", S), k.is.alreadySetup() ? k.setup.reference() : (k.setup.layout(), S.values && k.change.values(S.values), k.refreshData(), k.save.defaults(), k.restore.selected(), k.create.id(), k.bind.events(), k.observeChanges(), k.instantiate());
        }, instantiate: function instantiate() {
          k.verbose("Storing instance of dropdown", k), J = k, M.data(I, k);
        }, destroy: function destroy() {
          k.verbose("Destroying previous dropdown", M), k.remove.tabbable(), M.off(z).removeData(I), Q.off(z), s.off(y), k.disconnect.menuObserver(), k.disconnect.selectObserver();
        }, observeChanges: function observeChanges() {
          "MutationObserver" in t && (C = new MutationObserver(k.event.select.mutation), w = new MutationObserver(k.event.menu.mutation), k.debug("Setting up mutation observer", C, w), k.observe.select(), k.observe.menu());
        }, disconnect: { menuObserver: function menuObserver() {
            w && w.disconnect();
          }, selectObserver: function selectObserver() {
            C && C.disconnect();
          } }, observe: { select: function select() {
            k.has.input() && C.observe(M[0], { childList: !0, subtree: !0 });
          }, menu: function menu() {
            k.has.menu() && w.observe(Q[0], { childList: !0, subtree: !0 });
          } }, create: { id: function id() {
            x = (Math.random().toString(16) + "000000000").substr(2, 8), y = "." + x, k.verbose("Creating unique id for element", x);
          }, userChoice: function userChoice(t) {
            var n, o, a;return !!(t = t || k.get.userValues()) && (t = e.isArray(t) ? t : [t], e.each(t, function (t, r) {
              !1 === k.get.item(r) && (a = S.templates.addition(k.add.variables(A.addResult, r)), o = e("<div />").html(a).attr("data-" + E.value, r).attr("data-" + E.text, r).addClass(T.addition).addClass(T.item), S.hideAdditions && o.addClass(T.hidden), n = n === i ? o : n.add(o), k.verbose("Creating user choices for value", r, o));
            }), n);
          }, userLabels: function userLabels(t) {
            var n = k.get.userValues();n && (k.debug("Adding user labels", n), e.each(n, function (e, t) {
              k.verbose("Adding custom user value"), k.add.label(t, t);
            }));
          }, menu: function menu() {
            Q = e("<div />").addClass(T.menu).appendTo(M);
          }, sizer: function sizer() {
            H = e("<span />").addClass(T.sizer).insertAfter(N);
          } }, search: function search(e) {
          e = e !== i ? e : k.get.query(), k.verbose("Searching for query", e), k.has.minCharacters(e) ? k.filter(e) : k.hide();
        }, select: { firstUnfiltered: function firstUnfiltered() {
            k.verbose("Selecting first non-filtered element"), k.remove.selectedItem(), X.not(D.unselectable).not(D.addition + D.hidden).eq(0).addClass(T.selected);
          }, nextAvailable: function nextAvailable(e) {
            var t = (e = e.eq(0)).nextAll(D.item).not(D.unselectable).eq(0),
                n = e.prevAll(D.item).not(D.unselectable).eq(0);t.length > 0 ? (k.verbose("Moving selection to", t), t.addClass(T.selected)) : (k.verbose("Moving selection to", n), n.addClass(T.selected));
          } }, setup: { api: function api() {
            var e = { debug: S.debug, urlData: { value: k.get.value(), query: k.get.query() }, on: !1 };k.verbose("First request, initializing API"), M.api(e);
          }, layout: function layout() {
            M.is("select") && (k.setup.select(), k.setup.returnedObject()), k.has.menu() || k.create.menu(), k.is.search() && !k.has.search() && (k.verbose("Adding search input"), N = e("<input />").addClass(T.search).prop("autocomplete", "off").insertBefore(V)), k.is.multiple() && k.is.searchSelection() && !k.has.sizer() && k.create.sizer(), S.allowTab && k.set.tabbable();
          }, select: function select() {
            var t = k.get.selectValues();k.debug("Dropdown initialized on a select", t), M.is("select") && (U = M), U.parent(D.dropdown).length > 0 ? (k.debug("UI dropdown already exists. Creating dropdown menu only"), M = U.closest(D.dropdown), k.has.menu() || k.create.menu(), Q = M.children(D.menu), k.setup.menu(t)) : (k.debug("Creating entire dropdown from select"), M = e("<div />").attr("class", U.attr("class")).addClass(T.selection).addClass(T.dropdown).html(j.dropdown(t)).insertBefore(U), U.hasClass(T.multiple) && !1 === U.prop("multiple") && (k.error(q.missingMultiple), U.prop("multiple", !0)), U.is("[multiple]") && k.set.multiple(), U.prop("disabled") && (k.debug("Disabling dropdown"), M.addClass(T.disabled)), U.removeAttr("class").detach().prependTo(M)), k.refresh();
          }, menu: function menu(e) {
            Q.html(j.menu(e, R)), X = Q.find(D.item);
          }, reference: function reference() {
            k.debug("Dropdown behavior was called on select, replacing with closest dropdown"), M = M.parent(D.dropdown), J = M.data(I), K = M.get(0), k.refresh(), k.setup.returnedObject();
          }, returnedObject: function returnedObject() {
            var e = r.slice(0, p),
                t = r.slice(p + 1);r = e.add(M).add(t);
          } }, refresh: function refresh() {
          k.refreshSelectors(), k.refreshData();
        }, refreshItems: function refreshItems() {
          X = Q.find(D.item);
        }, refreshSelectors: function refreshSelectors() {
          k.verbose("Refreshing selector cache"), V = M.find(D.text), N = M.find(D.search), U = M.find(D.input), W = M.find(D.icon), B = M.prev().find(D.text).length > 0 ? M.prev().find(D.text) : M.prev(), Q = M.children(D.menu), X = Q.find(D.item);
        }, refreshData: function refreshData() {
          k.verbose("Refreshing cached metadata"), X.removeData(E.text).removeData(E.value);
        }, clearData: function clearData() {
          k.verbose("Clearing metadata"), X.removeData(E.text).removeData(E.value), M.removeData(E.defaultText).removeData(E.defaultValue).removeData(E.placeholderText);
        }, toggle: function toggle() {
          k.verbose("Toggling menu visibility"), k.is.active() ? k.hide() : k.show();
        }, show: function show(t) {
          if (t = e.isFunction(t) ? t : function () {}, !k.can.show() && k.is.remote() && (k.debug("No API results retrieved, searching before show"), k.queryRemote(k.get.query(), k.show)), k.can.show() && !k.is.active()) {
            if (k.debug("Showing dropdown"), !k.has.message() || k.has.maxSelections() || k.has.allResultsFiltered() || k.remove.message(), k.is.allFiltered()) return !0;!1 !== S.onShow.call(K) && k.animate.show(function () {
              k.can.click() && k.bind.intent(), k.has.menuSearch() && k.focusSearch(), k.set.visible(), t.call(K);
            });
          }
        }, hide: function hide(t) {
          t = e.isFunction(t) ? t : function () {}, k.is.active() && !k.is.animatingOutward() && (k.debug("Hiding dropdown"), !1 !== S.onHide.call(K) && k.animate.hide(function () {
            k.remove.visible(), t.call(K);
          }));
        }, hideOthers: function hideOthers() {
          k.verbose("Finding other dropdowns to hide"), r.not(M).has(D.menu + "." + T.visible).dropdown("hide");
        }, hideMenu: function hideMenu() {
          k.verbose("Hiding menu  instantaneously"), k.remove.active(), k.remove.visible(), Q.transition("hide");
        }, hideSubMenus: function hideSubMenus() {
          var e = Q.children(D.item).find(D.menu);k.verbose("Hiding sub menus", e), e.transition("hide");
        }, bind: { events: function events() {
            c && k.bind.touchEvents(), k.bind.keyboardEvents(), k.bind.inputEvents(), k.bind.mouseEvents();
          }, touchEvents: function touchEvents() {
            k.debug("Touch device detected binding additional touch events"), k.is.searchSelection() || k.is.single() && M.on("touchstart" + z, k.event.test.toggle), Q.on("touchstart" + z, D.item, k.event.item.mouseenter);
          }, keyboardEvents: function keyboardEvents() {
            k.verbose("Binding keyboard events"), M.on("keydown" + z, k.event.keydown), k.has.search() && M.on(k.get.inputEvent() + z, D.search, k.event.input), k.is.multiple() && s.on("keydown" + y, k.event.document.keydown);
          }, inputEvents: function inputEvents() {
            k.verbose("Binding input change events"), M.on("change" + z, D.input, k.event.change);
          }, mouseEvents: function mouseEvents() {
            k.verbose("Binding mouse events"), k.is.multiple() && M.on("click" + z, D.label, k.event.label.click).on("click" + z, D.remove, k.event.remove.click), k.is.searchSelection() ? (M.on("mousedown" + z, k.event.mousedown).on("mouseup" + z, k.event.mouseup).on("mousedown" + z, D.menu, k.event.menu.mousedown).on("mouseup" + z, D.menu, k.event.menu.mouseup).on("click" + z, D.icon, k.event.icon.click).on("focus" + z, D.search, k.event.search.focus).on("click" + z, D.search, k.event.search.focus).on("blur" + z, D.search, k.event.search.blur).on("click" + z, D.text, k.event.text.focus), k.is.multiple() && M.on("click" + z, k.event.click)) : ("click" == S.on ? M.on("click" + z, D.icon, k.event.icon.click).on("click" + z, k.event.test.toggle) : "hover" == S.on ? M.on("mouseenter" + z, k.delay.show).on("mouseleave" + z, k.delay.hide) : M.on(S.on + z, k.toggle), M.on("mousedown" + z, k.event.mousedown).on("mouseup" + z, k.event.mouseup).on("focus" + z, k.event.focus), k.has.menuSearch() ? M.on("blur" + z, D.search, k.event.search.blur) : M.on("blur" + z, k.event.blur)), Q.on("mouseenter" + z, D.item, k.event.item.mouseenter).on("mouseleave" + z, D.item, k.event.item.mouseleave).on("click" + z, D.item, k.event.item.click);
          }, intent: function intent() {
            k.verbose("Binding hide intent event to document"), c && s.on("touchstart" + y, k.event.test.touch).on("touchmove" + y, k.event.test.touch), s.on("click" + y, k.event.test.hide);
          } }, unbind: { intent: function intent() {
            k.verbose("Removing hide intent event from document"), c && s.off("touchstart" + y).off("touchmove" + y), s.off("click" + y);
          } }, filter: function filter(e) {
          var t = e !== i ? e : k.get.query(),
              n = function n() {
            k.is.multiple() && k.filterActive(), (e || !e && 0 == k.get.activeItem().length) && k.select.firstUnfiltered(), k.has.allResultsFiltered() ? S.onNoResults.call(K, t) ? S.allowAdditions ? S.hideAdditions && (k.verbose("User addition with no menu, setting empty style"), k.set.empty(), k.hideMenu()) : (k.verbose("All items filtered, showing message", t), k.add.message(A.noResults)) : (k.verbose("All items filtered, hiding dropdown", t), k.hideMenu()) : (k.remove.empty(), k.remove.message()), S.allowAdditions && k.add.userSuggestion(e), k.is.searchSelection() && k.can.show() && k.is.focusedOnSearch() && k.show();
          };S.useLabels && k.has.maxSelections() || (S.apiSettings ? k.can.useAPI() ? k.queryRemote(t, function () {
            S.filterRemoteData && k.filterItems(t), n();
          }) : k.error(q.noAPI) : (k.filterItems(t), n()));
        }, queryRemote: function queryRemote(t, n) {
          var i = { errorDuration: !1, cache: "local", throttle: S.throttle, urlData: { query: t }, onError: function onError() {
              k.add.message(A.serverError), n();
            }, onFailure: function onFailure() {
              k.add.message(A.serverError), n();
            }, onSuccess: function onSuccess(e) {
              k.remove.message(), k.setup.menu({ values: e[R.remoteValues] }), n();
            } };M.api("get request") || k.setup.api(), i = e.extend(!0, {}, i, S.apiSettings), M.api("setting", i).api("query");
        }, filterItems: function filterItems(t) {
          var n = t !== i ? t : k.get.query(),
              o = null,
              a = k.escape.string(n),
              r = new RegExp("^" + a, "igm");k.has.query() && (o = [], k.verbose("Searching for matching values", n), X.each(function () {
            var t,
                i,
                a = e(this);if ("both" == S.match || "text" == S.match) {
              if (-1 !== (t = String(k.get.choiceText(a, !1))).search(r)) return o.push(this), !0;if ("exact" === S.fullTextSearch && k.exactSearch(n, t)) return o.push(this), !0;if (!0 === S.fullTextSearch && k.fuzzySearch(n, t)) return o.push(this), !0;
            }if ("both" == S.match || "value" == S.match) {
              if (-1 !== (i = String(k.get.choiceValue(a, t))).search(r)) return o.push(this), !0;if ("exact" === S.fullTextSearch && k.exactSearch(n, i)) return o.push(this), !0;if (!0 === S.fullTextSearch && k.fuzzySearch(n, i)) return o.push(this), !0;
            }
          })), k.debug("Showing only matched items", n), k.remove.filteredItem(), o && X.not(o).addClass(T.filtered);
        }, fuzzySearch: function fuzzySearch(e, t) {
          var n = t.length,
              i = e.length;if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;if (i === n) return e === t;e: for (var o = 0, a = 0; o < i; o++) {
            for (var r = e.charCodeAt(o); a < n;) {
              if (t.charCodeAt(a++) === r) continue e;
            }return !1;
          }return !0;
        }, exactSearch: function exactSearch(e, t) {
          return e = e.toLowerCase(), (t = t.toLowerCase()).indexOf(e) > -1;
        }, filterActive: function filterActive() {
          S.useLabels && X.filter("." + T.active).addClass(T.filtered);
        }, focusSearch: function focusSearch(e) {
          k.has.search() && !k.is.focusedOnSearch() && (e ? (M.off("focus" + z, D.search), N.focus(), M.on("focus" + z, D.search, k.event.search.focus)) : N.focus());
        }, forceSelection: function forceSelection() {
          var e = X.not(T.filtered).filter("." + T.selected).eq(0),
              t = X.not(T.filtered).filter("." + T.active).eq(0),
              n = e.length > 0 ? e : t;if (n.length > 0 && !k.is.multiple()) return k.debug("Forcing partial selection to selected item", n), void k.event.item.click.call(n, {}, !0);S.allowAdditions ? (k.set.selected(k.get.query()), k.remove.searchTerm()) : k.remove.searchTerm();
        }, change: { values: function values(t) {
            S.allowAdditions || k.clear(), k.debug("Creating dropdown with specified values", t), k.setup.menu({ values: t }), e.each(t, function (e, t) {
              if (1 == t.selected) return k.debug("Setting initial selection to", t.value), k.set.selected(t.value), !0;
            });
          } }, event: { change: function change() {
            Z || (k.debug("Input changed, updating selection"), k.set.selected());
          }, focus: function focus() {
            S.showOnFocus && !$ && k.is.hidden() && !v && k.show();
          }, blur: function blur(e) {
            v = n.activeElement === this, $ || v || (k.remove.activeLabel(), k.hide());
          }, mousedown: function mousedown() {
            k.is.searchSelection() ? b = !0 : $ = !0;
          }, mouseup: function mouseup() {
            k.is.searchSelection() ? b = !1 : $ = !1;
          }, click: function click(t) {
            e(t.target).is(M) && (k.is.focusedOnSearch() ? k.show() : k.focusSearch());
          }, search: { focus: function focus() {
              $ = !0, k.is.multiple() && k.remove.activeLabel(), S.showOnFocus && k.search();
            }, blur: function blur(e) {
              v = n.activeElement === this, k.is.searchSelection() && !b && (Y || v || (S.forceSelection && k.forceSelection(), k.hide())), b = !1;
            } }, icon: { click: function click(e) {
              k.toggle();
            } }, text: { focus: function focus(e) {
              $ = !0, k.focusSearch();
            } }, input: function input(e) {
            (k.is.multiple() || k.is.searchSelection()) && k.set.filtered(), clearTimeout(k.timer), k.timer = setTimeout(k.search, S.delay.search);
          }, label: { click: function click(t) {
              var n = e(this),
                  i = M.find(D.label),
                  o = i.filter("." + T.active),
                  a = n.nextAll("." + T.active),
                  r = n.prevAll("." + T.active),
                  s = a.length > 0 ? n.nextUntil(a).add(o).add(n) : n.prevUntil(r).add(o).add(n);t.shiftKey ? (o.removeClass(T.active), s.addClass(T.active)) : t.ctrlKey ? n.toggleClass(T.active) : (o.removeClass(T.active), n.addClass(T.active)), S.onLabelSelect.apply(this, i.filter("." + T.active));
            } }, remove: { click: function click() {
              var t = e(this).parent();t.hasClass(T.active) ? k.remove.activeLabels() : k.remove.activeLabels(t);
            } }, test: { toggle: function toggle(e) {
              var t = k.is.multiple() ? k.show : k.toggle;k.is.bubbledLabelClick(e) || k.is.bubbledIconClick(e) || k.determine.eventOnElement(e, t) && e.preventDefault();
            }, touch: function touch(e) {
              k.determine.eventOnElement(e, function () {
                "touchstart" == e.type ? k.timer = setTimeout(function () {
                  k.hide();
                }, S.delay.touch) : "touchmove" == e.type && clearTimeout(k.timer);
              }), e.stopPropagation();
            }, hide: function hide(e) {
              k.determine.eventInModule(e, k.hide);
            } }, select: { mutation: function mutation(t) {
              k.debug("<select> modified, recreating menu");var n = !1;e.each(t, function (t, i) {
                if (e(i.target).is("select") || e(i.addedNodes).is("select")) return n = !0, !0;
              }), n && (k.disconnect.selectObserver(), k.refresh(), k.setup.select(), k.set.selected(), k.observe.select());
            } }, menu: { mutation: function mutation(t) {
              var n = t[0],
                  i = n.addedNodes ? e(n.addedNodes[0]) : e(!1),
                  o = n.removedNodes ? e(n.removedNodes[0]) : e(!1),
                  a = i.add(o),
                  r = a.is(D.addition) || a.closest(D.addition).length > 0,
                  s = a.is(D.message) || a.closest(D.message).length > 0;r || s ? (k.debug("Updating item selector cache"), k.refreshItems()) : (k.debug("Menu modified, updating selector cache"), k.refresh());
            }, mousedown: function mousedown() {
              Y = !0;
            }, mouseup: function mouseup() {
              Y = !1;
            } }, item: { mouseenter: function mouseenter(t) {
              var n = e(t.target),
                  i = e(this),
                  o = i.children(D.menu),
                  a = i.siblings(D.item).children(D.menu),
                  r = o.length > 0;!(o.find(n).length > 0) && r && (clearTimeout(k.itemTimer), k.itemTimer = setTimeout(function () {
                k.verbose("Showing sub-menu", o), e.each(a, function () {
                  k.animate.hide(!1, e(this));
                }), k.animate.show(!1, o);
              }, S.delay.show), t.preventDefault());
            }, mouseleave: function mouseleave(t) {
              var n = e(this).children(D.menu);n.length > 0 && (clearTimeout(k.itemTimer), k.itemTimer = setTimeout(function () {
                k.verbose("Hiding sub-menu", n), k.animate.hide(!1, n);
              }, S.delay.hide));
            }, click: function click(t, i) {
              var o = e(this),
                  a = e(t ? t.target : ""),
                  r = o.find(D.menu),
                  s = k.get.choiceText(o),
                  l = k.get.choiceValue(o, s),
                  c = r.length > 0,
                  u = r.find(a).length > 0;k.has.menuSearch() && e(n.activeElement).blur(), u || c && !S.allowCategorySelection || (k.is.searchSelection() && (S.allowAdditions && k.remove.userAddition(), k.remove.searchTerm(), k.is.focusedOnSearch() || 1 == i || k.focusSearch(!0)), S.useLabels || (k.remove.filteredItem(), k.set.scrollPosition(o)), k.determine.selectAction.call(this, s, l));
            } }, document: { keydown: function keydown(e) {
              var t = e.which;if (k.is.inObject(t, P)) {
                var n = M.find(D.label),
                    i = n.filter("." + T.active),
                    o = (i.data(E.value), n.index(i)),
                    a = n.length,
                    r = i.length > 0,
                    s = i.length > 1,
                    l = 0 === o,
                    c = o + 1 == a,
                    u = k.is.searchSelection(),
                    d = k.is.focusedOnSearch(),
                    f = k.is.focused(),
                    m = d && 0 === k.get.caretPosition();if (u && !r && !d) return;t == P.leftArrow ? !f && !m || r ? r && (e.shiftKey ? k.verbose("Adding previous label to selection") : (k.verbose("Selecting previous label"), n.removeClass(T.active)), l && !s ? i.addClass(T.active) : i.prev(D.siblingLabel).addClass(T.active).end(), e.preventDefault()) : (k.verbose("Selecting previous label"), n.last().addClass(T.active)) : t == P.rightArrow ? (f && !r && n.first().addClass(T.active), r && (e.shiftKey ? k.verbose("Adding next label to selection") : (k.verbose("Selecting next label"), n.removeClass(T.active)), c ? u ? d ? n.removeClass(T.active) : k.focusSearch() : s ? i.next(D.siblingLabel).addClass(T.active) : i.addClass(T.active) : i.next(D.siblingLabel).addClass(T.active), e.preventDefault())) : t == P.deleteKey || t == P.backspace ? r ? (k.verbose("Removing active labels"), c && u && !d && k.focusSearch(), i.last().next(D.siblingLabel).addClass(T.active), k.remove.activeLabels(i), e.preventDefault()) : m && !r && t == P.backspace && (k.verbose("Removing last label on input backspace"), i = n.last().addClass(T.active), k.remove.activeLabels(i)) : i.removeClass(T.active);
              }
            } }, keydown: function keydown(e) {
            var t = e.which;if (k.is.inObject(t, P)) {
              var n,
                  i = X.not(D.unselectable).filter("." + T.selected).eq(0),
                  o = Q.children("." + T.active).eq(0),
                  a = i.length > 0 ? i : o,
                  r = a.length > 0 ? a.siblings(":not(." + T.filtered + ")").addBack() : Q.children(":not(." + T.filtered + ")"),
                  s = a.children(D.menu),
                  l = a.closest(D.menu),
                  c = l.hasClass(T.visible) || l.hasClass(T.animating) || l.parent(D.menu).length > 0,
                  u = s.length > 0,
                  d = a.length > 0,
                  f = a.not(D.unselectable).length > 0,
                  m = t == P.delimiter && S.allowAdditions && k.is.multiple();if (S.allowAdditions && S.hideAdditions && (t == P.enter || m) && f && (k.verbose("Selecting item from keyboard shortcut", a), k.event.item.click.call(a, e), k.is.searchSelection() && k.remove.searchTerm()), k.is.visible()) {
                if ((t == P.enter || m) && (t == P.enter && d && u && !S.allowCategorySelection ? (k.verbose("Pressed enter on unselectable category, opening sub menu"), t = P.rightArrow) : f && (k.verbose("Selecting item from keyboard shortcut", a), k.event.item.click.call(a, e), k.is.searchSelection() && k.remove.searchTerm()), e.preventDefault()), d && (t == P.leftArrow && l[0] !== Q[0] && (k.verbose("Left key pressed, closing sub-menu"), k.animate.hide(!1, l), a.removeClass(T.selected), l.closest(D.item).addClass(T.selected), e.preventDefault()), t == P.rightArrow && u && (k.verbose("Right key pressed, opening sub-menu"), k.animate.show(!1, s), a.removeClass(T.selected), s.find(D.item).eq(0).addClass(T.selected), e.preventDefault())), t == P.upArrow) {
                  if (n = d && c ? a.prevAll(D.item + ":not(" + D.unselectable + ")").eq(0) : X.eq(0), r.index(n) < 0) return k.verbose("Up key pressed but reached top of current menu"), void e.preventDefault();k.verbose("Up key pressed, changing active item"), a.removeClass(T.selected), n.addClass(T.selected), k.set.scrollPosition(n), S.selectOnKeydown && k.is.single() && k.set.selectedItem(n), e.preventDefault();
                }if (t == P.downArrow) {
                  if (0 === (n = d && c ? n = a.nextAll(D.item + ":not(" + D.unselectable + ")").eq(0) : X.eq(0)).length) return k.verbose("Down key pressed but reached bottom of current menu"), void e.preventDefault();k.verbose("Down key pressed, changing active item"), X.removeClass(T.selected), n.addClass(T.selected), k.set.scrollPosition(n), S.selectOnKeydown && k.is.single() && k.set.selectedItem(n), e.preventDefault();
                }t == P.pageUp && (k.scrollPage("up"), e.preventDefault()), t == P.pageDown && (k.scrollPage("down"), e.preventDefault()), t == P.escape && (k.verbose("Escape key pressed, closing dropdown"), k.hide());
              } else m && e.preventDefault(), t != P.downArrow || k.is.visible() || (k.verbose("Down key pressed, showing dropdown"), k.show(), e.preventDefault());
            } else k.has.search() || k.set.selectedLetter(String.fromCharCode(t));
          } }, trigger: { change: function change() {
            var e = n.createEvent("HTMLEvents"),
                t = U[0];t && (k.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e));
          } }, determine: { selectAction: function selectAction(t, n) {
            k.verbose("Determining action", S.action), e.isFunction(k.action[S.action]) ? (k.verbose("Triggering preset action", S.action, t, n), k.action[S.action].call(K, t, n, this)) : e.isFunction(S.action) ? (k.verbose("Triggering user action", S.action, t, n), S.action.call(K, t, n, this)) : k.error(q.action, S.action);
          }, eventInModule: function eventInModule(t, i) {
            var o = e(t.target),
                a = o.closest(n.documentElement).length > 0,
                r = o.closest(M).length > 0;return i = e.isFunction(i) ? i : function () {}, a && !r ? (k.verbose("Triggering event", i), i(), !0) : (k.verbose("Event occurred in dropdown, canceling callback"), !1);
          }, eventOnElement: function eventOnElement(t, i) {
            var o = e(t.target),
                a = o.closest(D.siblingLabel),
                r = n.body.contains(t.target),
                s = 0 === M.find(a).length,
                l = 0 === o.closest(Q).length;return i = e.isFunction(i) ? i : function () {}, r && s && l ? (k.verbose("Triggering event", i), i(), !0) : (k.verbose("Event occurred in dropdown menu, canceling callback"), !1);
          } }, action: { nothing: function nothing() {}, activate: function activate(t, n, o) {
            if (n = n !== i ? n : t, k.can.activate(e(o))) {
              if (k.set.selected(n, e(o)), k.is.multiple() && !k.is.allFiltered()) return;k.hideAndClear();
            }
          }, select: function select(t, n, o) {
            if (n = n !== i ? n : t, k.can.activate(e(o))) {
              if (k.set.value(n, e(o)), k.is.multiple() && !k.is.allFiltered()) return;k.hideAndClear();
            }
          }, combo: function combo(t, n, o) {
            n = n !== i ? n : t, k.set.selected(n, e(o)), k.hideAndClear();
          }, hide: function hide(e, t, n) {
            k.set.value(t, e), k.hideAndClear();
          } }, get: { id: function id() {
            return x;
          }, defaultText: function defaultText() {
            return M.data(E.defaultText);
          }, defaultValue: function defaultValue() {
            return M.data(E.defaultValue);
          }, placeholderText: function placeholderText() {
            return "auto" != S.placeholder && "string" == typeof S.placeholder ? S.placeholder : M.data(E.placeholderText) || "";
          }, text: function text() {
            return V.text();
          }, query: function query() {
            return e.trim(N.val());
          }, searchWidth: function searchWidth(e) {
            return e = e !== i ? e : N.val(), H.text(e), Math.ceil(H.width() + 1);
          }, selectionCount: function selectionCount() {
            var t = k.get.values();return k.is.multiple() ? e.isArray(t) ? t.length : 0 : "" !== k.get.value() ? 1 : 0;
          }, transition: function transition(e) {
            return "auto" == S.transition ? k.is.upward(e) ? "slide up" : "slide down" : S.transition;
          }, userValues: function userValues() {
            var t = k.get.values();return !!t && (t = e.isArray(t) ? t : [t], e.grep(t, function (e) {
              return !1 === k.get.item(e);
            }));
          }, uniqueArray: function uniqueArray(t) {
            return e.grep(t, function (n, i) {
              return e.inArray(n, t) === i;
            });
          }, caretPosition: function caretPosition() {
            var e,
                t,
                i = N.get(0);return "selectionStart" in i ? i.selectionStart : n.selection ? (i.focus(), t = (e = n.selection.createRange()).text.length, e.moveStart("character", -i.value.length), e.text.length - t) : void 0;
          }, value: function value() {
            var t = U.length > 0 ? U.val() : M.data(E.value),
                n = e.isArray(t) && 1 === t.length && "" === t[0];return t === i || n ? "" : t;
          }, values: function values() {
            var e = k.get.value();return "" === e ? "" : !k.has.selectInput() && k.is.multiple() ? "string" == typeof e ? e.split(S.delimiter) : "" : e;
          }, remoteValues: function remoteValues() {
            var t = k.get.values(),
                n = !1;return t && ("string" == typeof t && (t = [t]), e.each(t, function (e, t) {
              var i = k.read.remoteData(t);k.verbose("Restoring value from session data", i, t), i && (n || (n = {}), n[t] = i);
            })), n;
          }, choiceText: function choiceText(t, n) {
            if (n = n !== i ? n : S.preserveHTML, t) return t.find(D.menu).length > 0 && (k.verbose("Retrieving text of element with sub-menu"), (t = t.clone()).find(D.menu).remove(), t.find(D.menuIcon).remove()), t.data(E.text) !== i ? t.data(E.text) : n ? e.trim(t.html()) : e.trim(t.text());
          }, choiceValue: function choiceValue(t, n) {
            return n = n || k.get.choiceText(t), !!t && (t.data(E.value) !== i ? String(t.data(E.value)) : "string" == typeof n ? e.trim(n.toLowerCase()) : String(n));
          }, inputEvent: function inputEvent() {
            var e = N[0];return !!e && (e.oninput !== i ? "input" : e.onpropertychange !== i ? "propertychange" : "keyup");
          }, selectValues: function selectValues() {
            var t = { values: [] };return M.find("option").each(function () {
              var n = e(this),
                  o = n.html(),
                  a = n.attr("disabled"),
                  r = n.attr("value") !== i ? n.attr("value") : o;"auto" === S.placeholder && "" === r ? t.placeholder = o : t.values.push({ name: o, value: r, disabled: a });
            }), S.placeholder && "auto" !== S.placeholder && (k.debug("Setting placeholder value to", S.placeholder), t.placeholder = S.placeholder), S.sortSelect ? (t.values.sort(function (e, t) {
              return e.name > t.name ? 1 : -1;
            }), k.debug("Retrieved and sorted values from select", t)) : k.debug("Retrieved values from select", t), t;
          }, activeItem: function activeItem() {
            return X.filter("." + T.active);
          }, selectedItem: function selectedItem() {
            var e = X.not(D.unselectable).filter("." + T.selected);return e.length > 0 ? e : X.eq(0);
          }, itemWithAdditions: function itemWithAdditions(e) {
            var t = k.get.item(e),
                n = k.create.userChoice(e);return n && n.length > 0 && (t = t.length > 0 ? t.add(n) : n), t;
          }, item: function item(t, n) {
            var o,
                a,
                r = !1;return t = t !== i ? t : k.get.values() !== i ? k.get.values() : k.get.text(), o = a ? t.length > 0 : t !== i && null !== t, a = k.is.multiple() && e.isArray(t), n = "" === t || 0 === t || n || !1, o && X.each(function () {
              var o = e(this),
                  s = k.get.choiceText(o),
                  l = k.get.choiceValue(o, s);if (null !== l && l !== i) if (a) -1 === e.inArray(String(l), t) && -1 === e.inArray(s, t) || (r = r ? r.add(o) : o);else if (n) {
                if (k.verbose("Ambiguous dropdown value using strict type check", o, t), l === t || s === t) return r = o, !0;
              } else if (String(l) == String(t) || s == t) return k.verbose("Found select item by value", l, t), r = o, !0;
            }), r;
          } }, check: { maxSelections: function maxSelections(e) {
            return !S.maxSelections || ((e = e !== i ? e : k.get.selectionCount()) >= S.maxSelections ? (k.debug("Maximum selection count reached"), S.useLabels && (X.addClass(T.filtered), k.add.message(A.maxSelections)), !0) : (k.verbose("No longer at maximum selection count"), k.remove.message(), k.remove.filteredItem(), k.is.searchSelection() && k.filterItems(), !1));
          } }, restore: { defaults: function defaults() {
            k.clear(), k.restore.defaultText(), k.restore.defaultValue();
          }, defaultText: function defaultText() {
            var e = k.get.defaultText();e === k.get.placeholderText ? (k.debug("Restoring default placeholder text", e), k.set.placeholderText(e)) : (k.debug("Restoring default text", e), k.set.text(e));
          }, placeholderText: function placeholderText() {
            k.set.placeholderText();
          }, defaultValue: function defaultValue() {
            var e = k.get.defaultValue();e !== i && (k.debug("Restoring default value", e), "" !== e ? (k.set.value(e), k.set.selected()) : (k.remove.activeItem(), k.remove.selectedItem()));
          }, labels: function labels() {
            S.allowAdditions && (S.useLabels || (k.error(q.labels), S.useLabels = !0), k.debug("Restoring selected values"), k.create.userLabels()), k.check.maxSelections();
          }, selected: function selected() {
            k.restore.values(), k.is.multiple() ? (k.debug("Restoring previously selected values and labels"), k.restore.labels()) : k.debug("Restoring previously selected values");
          }, values: function values() {
            k.set.initialLoad(), S.apiSettings && S.saveRemoteData && k.get.remoteValues() ? k.restore.remoteValues() : k.set.selected(), k.remove.initialLoad();
          }, remoteValues: function remoteValues() {
            var t = k.get.remoteValues();k.debug("Recreating selected from session data", t), t && (k.is.single() ? e.each(t, function (e, t) {
              k.set.text(t);
            }) : e.each(t, function (e, t) {
              k.add.label(e, t);
            }));
          } }, read: { remoteData: function remoteData(e) {
            var n;if (t.Storage !== i) return (n = sessionStorage.getItem(e)) !== i && n;k.error(q.noStorage);
          } }, save: { defaults: function defaults() {
            k.save.defaultText(), k.save.placeholderText(), k.save.defaultValue();
          }, defaultValue: function defaultValue() {
            var e = k.get.value();k.verbose("Saving default value as", e), M.data(E.defaultValue, e);
          }, defaultText: function defaultText() {
            var e = k.get.text();k.verbose("Saving default text as", e), M.data(E.defaultText, e);
          }, placeholderText: function placeholderText() {
            var e;!1 !== S.placeholder && V.hasClass(T.placeholder) && (e = k.get.text(), k.verbose("Saving placeholder text as", e), M.data(E.placeholderText, e));
          }, remoteData: function remoteData(e, n) {
            t.Storage !== i ? (k.verbose("Saving remote data to session storage", n, e), sessionStorage.setItem(n, e)) : k.error(q.noStorage);
          } }, clear: function clear() {
          k.is.multiple() && S.useLabels ? k.remove.labels() : (k.remove.activeItem(), k.remove.selectedItem()), k.set.placeholderText(), k.clearValue();
        }, clearValue: function clearValue() {
          k.set.value("");
        }, scrollPage: function scrollPage(e, t) {
          var n,
              i,
              o = t || k.get.selectedItem(),
              a = o.closest(D.menu),
              r = a.outerHeight(),
              s = a.scrollTop(),
              l = X.eq(0).outerHeight(),
              c = Math.floor(r / l),
              u = (a.prop("scrollHeight"), "up" == e ? s - l * c : s + l * c),
              d = X.not(D.unselectable);i = "up" == e ? d.index(o) - c : d.index(o) + c, (n = ("up" == e ? i >= 0 : i < d.length) ? d.eq(i) : "up" == e ? d.first() : d.last()).length > 0 && (k.debug("Scrolling page", e, n), o.removeClass(T.selected), n.addClass(T.selected), S.selectOnKeydown && k.is.single() && k.set.selectedItem(n), a.scrollTop(u));
        }, set: { filtered: function filtered() {
            var e = k.is.multiple(),
                t = k.is.searchSelection(),
                n = e && t,
                i = t ? k.get.query() : "",
                o = "string" == typeof i && i.length > 0,
                a = k.get.searchWidth(),
                r = "" !== i;e && o && (k.verbose("Adjusting input width", a, S.glyphWidth), N.css("width", a)), o || n && r ? (k.verbose("Hiding placeholder text"), V.addClass(T.filtered)) : (!e || n && !r) && (k.verbose("Showing placeholder text"), V.removeClass(T.filtered));
          }, empty: function empty() {
            M.addClass(T.empty);
          }, loading: function loading() {
            M.addClass(T.loading);
          }, placeholderText: function placeholderText(e) {
            e = e || k.get.placeholderText(), k.debug("Setting placeholder text", e), k.set.text(e), V.addClass(T.placeholder);
          }, tabbable: function tabbable() {
            k.is.searchSelection() ? (k.debug("Added tabindex to searchable dropdown"), N.val("").attr("tabindex", 0), Q.attr("tabindex", -1)) : (k.debug("Added tabindex to dropdown"), M.attr("tabindex") === i && (M.attr("tabindex", 0), Q.attr("tabindex", -1)));
          }, initialLoad: function initialLoad() {
            k.verbose("Setting initial load"), h = !0;
          }, activeItem: function activeItem(e) {
            S.allowAdditions && e.filter(D.addition).length > 0 ? e.addClass(T.filtered) : e.addClass(T.active);
          }, partialSearch: function partialSearch(e) {
            var t = k.get.query().length;N.val(e.substr(0, t));
          }, scrollPosition: function scrollPosition(e, t) {
            var n, o, a, r, s, l;n = (e = e || k.get.selectedItem()).closest(D.menu), o = e && e.length > 0, t = t !== i && t, e && n.length > 0 && o && (e.position().top, n.addClass(T.loading), a = (r = n.scrollTop()) - n.offset().top + e.offset().top, t || (l = r + n.height() < a + 5, s = a - 5 < r), k.debug("Scrolling to active item", a), (t || s || l) && n.scrollTop(a), n.removeClass(T.loading));
          }, text: function text(e) {
            "select" !== S.action && ("combo" == S.action ? (k.debug("Changing combo button text", e, B), S.preserveHTML ? B.html(e) : B.text(e)) : (e !== k.get.placeholderText() && V.removeClass(T.placeholder), k.debug("Changing text", e, V), V.removeClass(T.filtered), S.preserveHTML ? V.html(e) : V.text(e)));
          }, selectedItem: function selectedItem(e) {
            var t = k.get.choiceValue(e),
                n = k.get.choiceText(e, !1),
                i = k.get.choiceText(e, !0);k.debug("Setting user selection to item", e), k.remove.activeItem(), k.set.partialSearch(n), k.set.activeItem(e), k.set.selected(t, e), k.set.text(i);
          }, selectedLetter: function selectedLetter(t) {
            var n,
                i = X.filter("." + T.selected),
                o = i.length > 0 && k.has.firstLetter(i, t),
                a = !1;o && (n = i.nextAll(X).eq(0), k.has.firstLetter(n, t) && (a = n)), a || X.each(function () {
              if (k.has.firstLetter(e(this), t)) return a = e(this), !1;
            }), a && (k.verbose("Scrolling to next value with letter", t), k.set.scrollPosition(a), i.removeClass(T.selected), a.addClass(T.selected), S.selectOnKeydown && k.is.single() && k.set.selectedItem(a));
          }, direction: function direction(e) {
            "auto" == S.direction ? (k.remove.upward(), k.can.openDownward(e) ? k.remove.upward(e) : k.set.upward(e), k.is.leftward(e) || k.can.openRightward(e) || k.set.leftward(e)) : "upward" == S.direction && k.set.upward(e);
          }, upward: function upward(e) {
            (e || M).addClass(T.upward);
          }, leftward: function leftward(e) {
            (e || Q).addClass(T.leftward);
          }, value: function value(e, t, n) {
            var o = k.escape.value(e),
                a = U.length > 0,
                r = k.get.values(),
                s = e !== i ? String(e) : e;if (a) {
              if (!S.allowReselection && s == r && (k.verbose("Skipping value update already same value", e, r), !k.is.initialLoad())) return;k.is.single() && k.has.selectInput() && k.can.extendSelect() && (k.debug("Adding user option", e), k.add.optionValue(e)), k.debug("Updating input value", o, r), Z = !0, U.val(o), !1 === S.fireOnInit && k.is.initialLoad() ? k.debug("Input native change event ignored on initial load") : k.trigger.change(), Z = !1;
            } else k.verbose("Storing value in metadata", o, U), o !== r && M.data(E.value, s);!1 === S.fireOnInit && k.is.initialLoad() ? k.verbose("No callback on initial load", S.onChange) : S.onChange.call(K, e, t, n);
          }, active: function active() {
            M.addClass(T.active);
          }, multiple: function multiple() {
            M.addClass(T.multiple);
          }, visible: function visible() {
            M.addClass(T.visible);
          }, exactly: function exactly(e, t) {
            k.debug("Setting selected to exact values"), k.clear(), k.set.selected(e, t);
          }, selected: function selected(t, n) {
            var i = k.is.multiple();(n = S.allowAdditions ? n || k.get.itemWithAdditions(t) : n || k.get.item(t)) && (k.debug("Setting selected menu item to", n), k.is.multiple() && k.remove.searchWidth(), k.is.single() ? (k.remove.activeItem(), k.remove.selectedItem()) : S.useLabels && k.remove.selectedItem(), n.each(function () {
              var t = e(this),
                  o = k.get.choiceText(t),
                  a = k.get.choiceValue(t, o),
                  r = t.hasClass(T.filtered),
                  s = t.hasClass(T.active),
                  l = t.hasClass(T.addition),
                  c = i && 1 == n.length;i ? !s || l ? (S.apiSettings && S.saveRemoteData && k.save.remoteData(o, a), S.useLabels ? (k.add.label(a, o, c), k.add.value(a, o, t), k.set.activeItem(t), k.filterActive(), k.select.nextAvailable(n)) : (k.add.value(a, o, t), k.set.text(k.add.variables(A.count)), k.set.activeItem(t))) : r || (k.debug("Selected active value, removing label"), k.remove.selected(a)) : (S.apiSettings && S.saveRemoteData && k.save.remoteData(o, a), k.set.text(o), k.set.value(a, o, t), t.addClass(T.active).addClass(T.selected));
            }));
          } }, add: { label: function label(t, n, i) {
            var o,
                a = k.is.searchSelection() ? N : V,
                r = k.escape.value(t);o = e("<a />").addClass(T.label).attr("data-" + E.value, r).html(j.label(r, n)), o = S.onLabelCreate.call(o, r, n), k.has.value(t) ? k.debug("User selection already exists, skipping", r) : (S.label.variation && o.addClass(S.label.variation), !0 === i ? (k.debug("Animating in label", o), o.addClass(T.hidden).insertBefore(a).transition(S.label.transition, S.label.duration)) : (k.debug("Adding selection label", o), o.insertBefore(a)));
          }, message: function message(t) {
            var n = Q.children(D.message),
                i = S.templates.message(k.add.variables(t));n.length > 0 ? n.html(i) : n = e("<div/>").html(i).addClass(T.message).appendTo(Q);
          }, optionValue: function optionValue(t) {
            var n = k.escape.value(t);U.find('option[value="' + k.escape.string(n) + '"]').length > 0 || (k.disconnect.selectObserver(), k.is.single() && (k.verbose("Removing previous user addition"), U.find("option." + T.addition).remove()), e("<option/>").prop("value", n).addClass(T.addition).html(t).appendTo(U), k.verbose("Adding user addition as an <option>", t), k.observe.select());
          }, userSuggestion: function userSuggestion(e) {
            var t,
                n = Q.children(D.addition),
                i = k.get.item(e),
                o = i && i.not(D.addition).length,
                a = n.length > 0;S.useLabels && k.has.maxSelections() || ("" === e || o ? n.remove() : (a ? (n.data(E.value, e).data(E.text, e).attr("data-" + E.value, e).attr("data-" + E.text, e).removeClass(T.filtered), S.hideAdditions || (t = S.templates.addition(k.add.variables(A.addResult, e)), n.html(t)), k.verbose("Replacing user suggestion with new value", n)) : ((n = k.create.userChoice(e)).prependTo(Q), k.verbose("Adding item choice to menu corresponding with user choice addition", n)), S.hideAdditions && !k.is.allFiltered() || n.addClass(T.selected).siblings().removeClass(T.selected), k.refreshItems()));
          }, variables: function variables(e, t) {
            var n,
                i,
                o = -1 !== e.search("{count}"),
                a = -1 !== e.search("{maxCount}"),
                r = -1 !== e.search("{term}");return k.verbose("Adding templated variables to message", e), o && (n = k.get.selectionCount(), e = e.replace("{count}", n)), a && (n = k.get.selectionCount(), e = e.replace("{maxCount}", S.maxSelections)), r && (i = t || k.get.query(), e = e.replace("{term}", i)), e;
          }, value: function value(t, n, i) {
            var o,
                a = k.get.values();k.has.value(t) ? k.debug("Value already selected") : "" !== t ? (e.isArray(a) ? (o = a.concat([t]), o = k.get.uniqueArray(o)) : o = [t], k.has.selectInput() ? k.can.extendSelect() && (k.debug("Adding value to select", t, o, U), k.add.optionValue(t)) : (o = o.join(S.delimiter), k.debug("Setting hidden input to delimited value", o, U)), !1 === S.fireOnInit && k.is.initialLoad() ? k.verbose("Skipping onadd callback on initial load", S.onAdd) : S.onAdd.call(K, t, n, i), k.set.value(o, t, n, i), k.check.maxSelections()) : k.debug("Cannot select blank values from multiselect");
          } }, remove: { active: function active() {
            M.removeClass(T.active);
          }, activeLabel: function activeLabel() {
            M.find(D.label).removeClass(T.active);
          }, empty: function empty() {
            M.removeClass(T.empty);
          }, loading: function loading() {
            M.removeClass(T.loading);
          }, initialLoad: function initialLoad() {
            h = !1;
          }, upward: function upward(e) {
            (e || M).removeClass(T.upward);
          }, leftward: function leftward(e) {
            (e || Q).removeClass(T.leftward);
          }, visible: function visible() {
            M.removeClass(T.visible);
          }, activeItem: function activeItem() {
            X.removeClass(T.active);
          }, filteredItem: function filteredItem() {
            S.useLabels && k.has.maxSelections() || (S.useLabels && k.is.multiple() ? X.not("." + T.active).removeClass(T.filtered) : X.removeClass(T.filtered), k.remove.empty());
          }, optionValue: function optionValue(e) {
            var t = k.escape.value(e),
                n = U.find('option[value="' + k.escape.string(t) + '"]');n.length > 0 && n.hasClass(T.addition) && (C && (C.disconnect(), k.verbose("Temporarily disconnecting mutation observer")), n.remove(), k.verbose("Removing user addition as an <option>", t), C && C.observe(U[0], { childList: !0, subtree: !0 }));
          }, message: function message() {
            Q.children(D.message).remove();
          }, searchWidth: function searchWidth() {
            N.css("width", "");
          }, searchTerm: function searchTerm() {
            k.verbose("Cleared search term"), N.val(""), k.set.filtered();
          }, userAddition: function userAddition() {
            X.filter(D.addition).remove();
          }, selected: function selected(t, n) {
            if (!(n = S.allowAdditions ? n || k.get.itemWithAdditions(t) : n || k.get.item(t))) return !1;n.each(function () {
              var t = e(this),
                  n = k.get.choiceText(t),
                  i = k.get.choiceValue(t, n);k.is.multiple() ? S.useLabels ? (k.remove.value(i, n, t), k.remove.label(i)) : (k.remove.value(i, n, t), 0 === k.get.selectionCount() ? k.set.placeholderText() : k.set.text(k.add.variables(A.count))) : k.remove.value(i, n, t), t.removeClass(T.filtered).removeClass(T.active), S.useLabels && t.removeClass(T.selected);
            });
          }, selectedItem: function selectedItem() {
            X.removeClass(T.selected);
          }, value: function value(e, t, n) {
            var i,
                o = k.get.values();k.has.selectInput() ? (k.verbose("Input is <select> removing selected option", e), i = k.remove.arrayValue(e, o), k.remove.optionValue(e)) : (k.verbose("Removing from delimited values", e), i = (i = k.remove.arrayValue(e, o)).join(S.delimiter)), !1 === S.fireOnInit && k.is.initialLoad() ? k.verbose("No callback on initial load", S.onRemove) : S.onRemove.call(K, e, t, n), k.set.value(i, t, n), k.check.maxSelections();
          }, arrayValue: function arrayValue(t, n) {
            return e.isArray(n) || (n = [n]), n = e.grep(n, function (e) {
              return t != e;
            }), k.verbose("Removed value from delimited string", t, n), n;
          }, label: function label(e, t) {
            var n = M.find(D.label).filter("[data-" + E.value + '="' + k.escape.string(e) + '"]');k.verbose("Removing label", n), n.remove();
          }, activeLabels: function activeLabels(e) {
            e = e || M.find(D.label).filter("." + T.active), k.verbose("Removing active label selections", e), k.remove.labels(e);
          }, labels: function labels(t) {
            t = t || M.find(D.label), k.verbose("Removing labels", t), t.each(function () {
              var t = e(this),
                  n = t.data(E.value),
                  o = n !== i ? String(n) : n,
                  a = k.is.userValue(o);!1 !== S.onLabelRemove.call(t, n) ? (k.remove.message(), a ? (k.remove.value(o), k.remove.label(o)) : k.remove.selected(o)) : k.debug("Label remove callback cancelled removal");
            });
          }, tabbable: function tabbable() {
            k.is.searchSelection() ? (k.debug("Searchable dropdown initialized"), N.removeAttr("tabindex"), Q.removeAttr("tabindex")) : (k.debug("Simple selection dropdown initialized"), M.removeAttr("tabindex"), Q.removeAttr("tabindex"));
          } }, has: { menuSearch: function menuSearch() {
            return k.has.search() && N.closest(Q).length > 0;
          }, search: function search() {
            return N.length > 0;
          }, sizer: function sizer() {
            return H.length > 0;
          }, selectInput: function selectInput() {
            return U.is("select");
          }, minCharacters: function minCharacters(e) {
            return !S.minCharacters || (e = e !== i ? String(e) : String(k.get.query())).length >= S.minCharacters;
          }, firstLetter: function firstLetter(e, t) {
            var n;return !(!e || 0 === e.length || "string" != typeof t) && (n = k.get.choiceText(e, !1), (t = t.toLowerCase()) == String(n).charAt(0).toLowerCase());
          }, input: function input() {
            return U.length > 0;
          }, items: function items() {
            return X.length > 0;
          }, menu: function menu() {
            return Q.length > 0;
          }, message: function message() {
            return 0 !== Q.children(D.message).length;
          }, label: function label(e) {
            var t = k.escape.value(e);return M.find(D.label).filter("[data-" + E.value + '="' + k.escape.string(t) + '"]').length > 0;
          }, maxSelections: function maxSelections() {
            return S.maxSelections && k.get.selectionCount() >= S.maxSelections;
          }, allResultsFiltered: function allResultsFiltered() {
            var e = X.not(D.addition);return e.filter(D.unselectable).length === e.length;
          }, userSuggestion: function userSuggestion() {
            return Q.children(D.addition).length > 0;
          }, query: function query() {
            return "" !== k.get.query();
          }, value: function value(e) {
            return S.ignoreCase ? k.has.valueIgnoringCase(e) : k.has.valueMatchingCase(e);
          }, valueMatchingCase: function valueMatchingCase(t) {
            var n = k.get.values();return !!(e.isArray(n) ? n && -1 !== e.inArray(t, n) : n == t);
          }, valueIgnoringCase: function valueIgnoringCase(t) {
            var n = k.get.values(),
                i = !1;return e.isArray(n) || (n = [n]), e.each(n, function (e, n) {
              if (String(t).toLowerCase() == String(n).toLowerCase()) return i = !0, !1;
            }), i;
          } }, is: { active: function active() {
            return M.hasClass(T.active);
          }, animatingInward: function animatingInward() {
            return Q.transition("is inward");
          }, animatingOutward: function animatingOutward() {
            return Q.transition("is outward");
          }, bubbledLabelClick: function bubbledLabelClick(t) {
            return e(t.target).is("select, input") && M.closest("label").length > 0;
          }, bubbledIconClick: function bubbledIconClick(t) {
            return e(t.target).closest(W).length > 0;
          }, alreadySetup: function alreadySetup() {
            return M.is("select") && M.parent(D.dropdown).data(I) !== i && 0 === M.prev().length;
          }, animating: function animating(e) {
            return e ? e.transition && e.transition("is animating") : Q.transition && Q.transition("is animating");
          }, leftward: function leftward(e) {
            return (e || Q).hasClass(T.leftward);
          }, disabled: function disabled() {
            return M.hasClass(T.disabled);
          }, focused: function focused() {
            return n.activeElement === M[0];
          }, focusedOnSearch: function focusedOnSearch() {
            return n.activeElement === N[0];
          }, allFiltered: function allFiltered() {
            return (k.is.multiple() || k.has.search()) && !(0 == S.hideAdditions && k.has.userSuggestion()) && !k.has.message() && k.has.allResultsFiltered();
          }, hidden: function hidden(e) {
            return !k.is.visible(e);
          }, initialLoad: function initialLoad() {
            return h;
          }, inObject: function inObject(t, n) {
            var i = !1;return e.each(n, function (e, n) {
              if (n == t) return i = !0, !0;
            }), i;
          }, multiple: function multiple() {
            return M.hasClass(T.multiple);
          }, remote: function remote() {
            return S.apiSettings && k.can.useAPI();
          }, single: function single() {
            return !k.is.multiple();
          }, selectMutation: function selectMutation(t) {
            var n = !1;return e.each(t, function (t, i) {
              if (i.target && e(i.target).is("select")) return n = !0, !0;
            }), n;
          }, search: function search() {
            return M.hasClass(T.search);
          }, searchSelection: function searchSelection() {
            return k.has.search() && 1 === N.parent(D.dropdown).length;
          }, selection: function selection() {
            return M.hasClass(T.selection);
          }, userValue: function userValue(t) {
            return -1 !== e.inArray(t, k.get.userValues());
          }, upward: function upward(e) {
            return (e || M).hasClass(T.upward);
          }, visible: function visible(e) {
            return e ? e.hasClass(T.visible) : Q.hasClass(T.visible);
          }, verticallyScrollableContext: function verticallyScrollableContext() {
            var e = L.get(0) !== t && L.css("overflow-y");return "auto" == e || "scroll" == e;
          }, horizontallyScrollableContext: function horizontallyScrollableContext() {
            var e = L.get(0) !== t && L.css("overflow-X");return "auto" == e || "scroll" == e;
          } }, can: { activate: function activate(e) {
            return !!S.useLabels || !k.has.maxSelections() || !(!k.has.maxSelections() || !e.hasClass(T.active));
          }, openDownward: function openDownward(e) {
            var n,
                i,
                o = e || Q,
                a = !0;return o.addClass(T.loading), i = { context: { offset: L.get(0) === t ? { top: 0, left: 0 } : L.offset(), scrollTop: L.scrollTop(), height: L.outerHeight() }, menu: { offset: o.offset(), height: o.outerHeight() } }, k.is.verticallyScrollableContext() && (i.menu.offset.top += i.context.scrollTop), (n = { above: i.context.scrollTop <= i.menu.offset.top - i.context.offset.top - i.menu.height, below: i.context.scrollTop + i.context.height >= i.menu.offset.top - i.context.offset.top + i.menu.height }).below ? (k.verbose("Dropdown can fit in context downward", n), a = !0) : n.below || n.above ? (k.verbose("Dropdown cannot fit below, opening upward", n), a = !1) : (k.verbose("Dropdown cannot fit in either direction, favoring downward", n), a = !0), o.removeClass(T.loading), a;
          }, openRightward: function openRightward(e) {
            var n,
                i,
                o = e || Q,
                a = !0;return o.addClass(T.loading), i = { context: { offset: L.get(0) === t ? { top: 0, left: 0 } : L.offset(), scrollLeft: L.scrollLeft(), width: L.outerWidth() }, menu: { offset: o.offset(), width: o.outerWidth() } }, k.is.horizontallyScrollableContext() && (i.menu.offset.left += i.context.scrollLeft), (n = i.menu.offset.left - i.context.offset.left + i.menu.width >= i.context.scrollLeft + i.context.width) && (k.verbose("Dropdown cannot fit in context rightward", n), a = !1), o.removeClass(T.loading), a;
          }, click: function click() {
            return c || "click" == S.on;
          }, extendSelect: function extendSelect() {
            return S.allowAdditions || S.apiSettings;
          }, show: function show() {
            return !k.is.disabled() && (k.has.items() || k.has.message());
          }, useAPI: function useAPI() {
            return e.fn.api !== i;
          } }, animate: { show: function show(t, n) {
            var o,
                a = n || Q,
                r = n ? function () {} : function () {
              k.hideSubMenus(), k.hideOthers(), k.set.active();
            };t = e.isFunction(t) ? t : function () {}, k.verbose("Doing menu show animation", a), k.set.direction(n), o = k.get.transition(n), k.is.selection() && k.set.scrollPosition(k.get.selectedItem(), !0), (k.is.hidden(a) || k.is.animating(a)) && ("none" == o ? (r(), a.transition("show"), t.call(K)) : e.fn.transition !== i && M.transition("is supported") ? a.transition({ animation: o + " in", debug: S.debug, verbose: S.verbose, duration: S.duration, queue: !0, onStart: r, onComplete: function onComplete() {
                t.call(K);
              } }) : k.error(q.noTransition, o));
          }, hide: function hide(t, n) {
            var o = n || Q,
                a = (n ? S.duration : S.duration, n ? function () {} : function () {
              k.can.click() && k.unbind.intent(), k.remove.active();
            }),
                r = k.get.transition(n);t = e.isFunction(t) ? t : function () {}, (k.is.visible(o) || k.is.animating(o)) && (k.verbose("Doing menu hide animation", o), "none" == r ? (a(), o.transition("hide"), t.call(K)) : e.fn.transition !== i && M.transition("is supported") ? o.transition({ animation: r + " out", duration: S.duration, debug: S.debug, verbose: S.verbose, queue: !1, onStart: a, onComplete: function onComplete() {
                t.call(K);
              } }) : k.error(q.transition));
          } }, hideAndClear: function hideAndClear() {
          k.remove.searchTerm(), k.has.maxSelections() || (k.has.search() ? k.hide(function () {
            k.remove.filteredItem();
          }) : k.hide());
        }, delay: { show: function show() {
            k.verbose("Delaying show event to ensure user intent"), clearTimeout(k.timer), k.timer = setTimeout(k.show, S.delay.show);
          }, hide: function hide() {
            k.verbose("Delaying hide event to ensure user intent"), clearTimeout(k.timer), k.timer = setTimeout(k.hide, S.delay.hide);
          } }, escape: { value: function value(t) {
            var n = e.isArray(t),
                i = "string" == typeof t,
                o = !i && !n,
                a = i && -1 !== t.search(F.quote),
                r = [];return o || !a ? t : (k.debug("Encoding quote values for use in select", t), n ? (e.each(t, function (e, t) {
              r.push(t.replace(F.quote, "&quot;"));
            }), r) : t.replace(F.quote, "&quot;"));
          }, string: function string(e) {
            return (e = String(e)).replace(F.escape, "\\$&");
          } }, setting: function setting(t, n) {
          if (k.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, S, t);else {
            if (n === i) return S[t];e.isPlainObject(S[t]) ? e.extend(!0, S[t], n) : S[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, k, t);else {
            if (n === i) return k[t];k[t] = n;
          }
        }, debug: function debug() {
          !S.silent && S.debug && (S.performance ? k.performance.log(arguments) : (k.debug = Function.prototype.bind.call(console.info, console, S.name + ":"), k.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !S.silent && S.verbose && S.debug && (S.performance ? k.performance.log(arguments) : (k.verbose = Function.prototype.bind.call(console.info, console, S.name + ":"), k.verbose.apply(console, arguments)));
        }, error: function error() {
          S.silent || (k.error = Function.prototype.bind.call(console.error, console, S.name + ":"), k.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;S.performance && (n = (t = new Date().getTime()) - (u || t), u = t, d.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: K, "Execution Time": n })), clearTimeout(k.performance.timer), k.performance.timer = setTimeout(k.performance.display, 500);
          }, display: function display() {
            var t = S.name + ":",
                n = 0;u = !1, clearTimeout(k.performance.timer), e.each(d, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", l && (t += " '" + l + "'"), (console.group !== i || console.table !== i) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), d = [];
          } }, invoke: function invoke(t, n, o) {
          var r,
              s,
              l,
              c = J;return n = n || g, o = K || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (k.error(q.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, m ? (J === i && k.initialize(), k.invoke(f)) : (J !== i && J.invoke("destroy"), k.initialize());
    }), a !== i ? a : r;
  }, e.fn.dropdown.settings = { silent: !1, debug: !1, verbose: !1, performance: !0, on: "click", action: "activate", values: !1, apiSettings: !1, selectOnKeydown: !0, minCharacters: 0, filterRemoteData: !1, saveRemoteData: !0, throttle: 200, context: t, direction: "auto", keepOnScreen: !0, match: "both", fullTextSearch: !1, placeholder: "auto", preserveHTML: !0, sortSelect: !1, forceSelection: !0, allowAdditions: !1, ignoreCase: !1, hideAdditions: !0, maxSelections: !1, useLabels: !0, delimiter: ",", showOnFocus: !0, allowReselection: !1, allowTab: !0, allowCategorySelection: !1, fireOnInit: !1, transition: "auto", duration: 200, glyphWidth: 1.037, label: { transition: "scale", duration: 200, variation: !1 }, delay: { hide: 300, show: 200, search: 20, touch: 50 }, onChange: function onChange(e, t, n) {}, onAdd: function onAdd(e, t, n) {}, onRemove: function onRemove(e, t, n) {}, onLabelSelect: function onLabelSelect(e) {}, onLabelCreate: function onLabelCreate(t, n) {
      return e(this);
    }, onLabelRemove: function onLabelRemove(e) {
      return !0;
    }, onNoResults: function onNoResults(e) {
      return !0;
    }, onShow: function onShow() {}, onHide: function onHide() {}, name: "Dropdown", namespace: "dropdown", message: { addResult: "Add <b>{term}</b>", count: "{count} selected", maxSelections: "Max {maxCount} selections", noResults: "No results found.", serverError: "There was an error contacting the server" }, error: { action: "You called a dropdown action that was not defined", alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown", labels: "Allowing user additions currently requires the use of labels.", missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values", method: "The method you called is not defined.", noAPI: "The API module is required to load resources remotely", noStorage: "Saving remote data requires session storage", noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>" }, regExp: { escape: /[-[\]{}()*+?.,\\^$|#\s]/g, quote: /"/g }, metadata: { defaultText: "defaultText", defaultValue: "defaultValue", placeholderText: "placeholder", text: "text", value: "value" }, fields: { remoteValues: "results", values: "values", disabled: "disabled", name: "name", value: "value", text: "text" }, keys: { backspace: 8, delimiter: 188, deleteKey: 46, enter: 13, escape: 27, pageUp: 33, pageDown: 34, leftArrow: 37, upArrow: 38, rightArrow: 39, downArrow: 40 }, selector: { addition: ".addition", dropdown: ".ui.dropdown", hidden: ".hidden", icon: "> .dropdown.icon", input: '> input[type="hidden"], > select', item: ".item", label: "> .label", remove: "> .label > .delete.icon", siblingLabel: ".label", menu: ".menu", message: ".message", menuIcon: ".dropdown.icon", search: "input.search, .menu > .search > input, .menu input.search", sizer: "> input.sizer", text: "> .text:not(.icon)", unselectable: ".disabled, .filtered" }, className: { active: "active", addition: "addition", animating: "animating", disabled: "disabled", empty: "empty", dropdown: "ui dropdown", filtered: "filtered", hidden: "hidden transition", item: "item", label: "ui label", loading: "loading", menu: "menu", message: "message", multiple: "multiple", placeholder: "default", sizer: "sizer", search: "search", selected: "selected", selection: "selection", upward: "upward", leftward: "left", visible: "visible" } }, e.fn.dropdown.settings.templates = { dropdown: function dropdown(t) {
      var n = t.placeholder || !1,
          i = (t.values, "");return i += '<i class="dropdown icon"></i>', t.placeholder ? i += '<div class="default text">' + n + "</div>" : i += '<div class="text"></div>', i += '<div class="menu">', e.each(t.values, function (e, t) {
        i += t.disabled ? '<div class="disabled item" data-value="' + t.value + '">' + t.name + "</div>" : '<div class="item" data-value="' + t.value + '">' + t.name + "</div>";
      }), i += "</div>";
    }, menu: function menu(t, n) {
      var i = t[n.values] || {},
          o = "";return e.each(i, function (e, t) {
        var i = t[n.text] ? 'data-text="' + t[n.text] + '"' : "",
            a = t[n.disabled] ? "disabled " : "";o += '<div class="' + a + 'item" data-value="' + t[n.value] + '"' + i + ">", o += t[n.name], o += "</div>";
      }), o;
    }, label: function label(e, t) {
      return t + '<i class="delete icon"></i>';
    }, message: function message(e) {
      return e;
    }, addition: function addition(e) {
      return e;
    } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.embed = function (n) {
    var o,
        a = e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1);return a.each(function () {
      var f,
          m = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.embed.settings, n) : e.extend({}, e.fn.embed.settings),
          g = m.selector,
          p = m.className,
          h = m.sources,
          v = m.error,
          b = m.metadata,
          y = m.namespace,
          x = m.templates,
          C = "." + y,
          w = "module-" + y,
          k = (e(t), e(this)),
          S = (k.find(g.placeholder), k.find(g.icon), k.find(g.embed)),
          T = this,
          A = k.data(w);f = { initialize: function initialize() {
          f.debug("Initializing embed"), f.determine.autoplay(), f.create(), f.bind.events(), f.instantiate();
        }, instantiate: function instantiate() {
          f.verbose("Storing instance of module", f), A = f, k.data(w, f);
        }, destroy: function destroy() {
          f.verbose("Destroying previous instance of embed"), f.reset(), k.removeData(w).off(C);
        }, refresh: function refresh() {
          f.verbose("Refreshing selector cache"), k.find(g.placeholder), k.find(g.icon), S = k.find(g.embed);
        }, bind: { events: function events() {
            f.has.placeholder() && (f.debug("Adding placeholder events"), k.on("click" + C, g.placeholder, f.createAndShow).on("click" + C, g.icon, f.createAndShow));
          } }, create: function create() {
          f.get.placeholder() ? f.createPlaceholder() : f.createAndShow();
        }, createPlaceholder: function createPlaceholder(e) {
          var t = f.get.icon(),
              n = f.get.url();f.generate.embed(n);e = e || f.get.placeholder(), k.html(x.placeholder(e, t)), f.debug("Creating placeholder for embed", e, t);
        }, createEmbed: function createEmbed(t) {
          f.refresh(), t = t || f.get.url(), S = e("<div/>").addClass(p.embed).html(f.generate.embed(t)).appendTo(k), m.onCreate.call(T, t), f.debug("Creating embed object", S);
        }, changeEmbed: function changeEmbed(e) {
          S.html(f.generate.embed(e));
        }, createAndShow: function createAndShow() {
          f.createEmbed(), f.show();
        }, change: function change(e, t, n) {
          f.debug("Changing video to ", e, t, n), k.data(b.source, e).data(b.id, t), n ? k.data(b.url, n) : k.removeData(b.url), f.has.embed() ? f.changeEmbed() : f.create();
        }, reset: function reset() {
          f.debug("Clearing embed and showing placeholder"), f.remove.active(), f.remove.embed(), f.showPlaceholder(), m.onReset.call(T);
        }, show: function show() {
          f.debug("Showing embed"), f.set.active(), m.onDisplay.call(T);
        }, hide: function hide() {
          f.debug("Hiding embed"), f.showPlaceholder();
        }, showPlaceholder: function showPlaceholder() {
          f.debug("Showing placeholder image"), f.remove.active(), m.onPlaceholderDisplay.call(T);
        }, get: { id: function id() {
            return m.id || k.data(b.id);
          }, placeholder: function placeholder() {
            return m.placeholder || k.data(b.placeholder);
          }, icon: function icon() {
            return m.icon ? m.icon : k.data(b.icon) !== i ? k.data(b.icon) : f.determine.icon();
          }, source: function source(e) {
            return m.source ? m.source : k.data(b.source) !== i ? k.data(b.source) : f.determine.source();
          }, type: function type() {
            var e = f.get.source();return h[e] !== i && h[e].type;
          }, url: function url() {
            return m.url ? m.url : k.data(b.url) !== i ? k.data(b.url) : f.determine.url();
          } }, determine: { autoplay: function autoplay() {
            f.should.autoplay() && (m.autoplay = !0);
          }, source: function source(t) {
            var n = !1;return (t = t || f.get.url()) && e.each(h, function (e, i) {
              if (-1 !== t.search(i.domain)) return n = e, !1;
            }), n;
          }, icon: function icon() {
            var e = f.get.source();return h[e] !== i && h[e].icon;
          }, url: function url() {
            var e,
                t = m.id || k.data(b.id),
                n = m.source || k.data(b.source);return (e = h[n] !== i && h[n].url.replace("{id}", t)) && k.data(b.url, e), e;
          } }, set: { active: function active() {
            k.addClass(p.active);
          } }, remove: { active: function active() {
            k.removeClass(p.active);
          }, embed: function embed() {
            S.empty();
          } }, encode: { parameters: function parameters(e) {
            var t,
                n = [];for (t in e) {
              n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
            }return n.join("&amp;");
          } }, generate: { embed: function embed(e) {
            f.debug("Generating embed html");var t,
                n,
                i = f.get.source();return (e = f.get.url(e)) ? (n = f.generate.parameters(i), t = x.iframe(e, n)) : f.error(v.noURL, k), t;
          }, parameters: function parameters(t, n) {
            var o = h[t] && h[t].parameters !== i ? h[t].parameters(m) : {};return (n = n || m.parameters) && (o = e.extend({}, o, n)), o = m.onEmbed(o), f.encode.parameters(o);
          } }, has: { embed: function embed() {
            return S.length > 0;
          }, placeholder: function placeholder() {
            return m.placeholder || k.data(b.placeholder);
          } }, should: { autoplay: function autoplay() {
            return "auto" === m.autoplay ? m.placeholder || k.data(b.placeholder) !== i : m.autoplay;
          } }, is: { video: function video() {
            return "video" == f.get.type();
          } }, setting: function setting(t, n) {
          if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (n === i) return m[t];e.isPlainObject(m[t]) ? e.extend(!0, m[t], n) : m[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (n === i) return f[t];f[t] = n;
          }
        }, debug: function debug() {
          !m.silent && m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !m.silent && m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)));
        }, error: function error() {
          m.silent || (f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;m.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: T, "Execution Time": n })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500);
          }, display: function display() {
            var t = m.name + ":",
                n = 0;s = !1, clearTimeout(f.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function invoke(t, n, a) {
          var r,
              s,
              l,
              c = A;return n = n || d, a = T || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (f.error(v.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s;
        } }, u ? (A === i && f.initialize(), f.invoke(c)) : (A !== i && A.invoke("destroy"), f.initialize());
    }), o !== i ? o : this;
  }, e.fn.embed.settings = { name: "Embed", namespace: "embed", silent: !1, debug: !1, verbose: !1, performance: !0, icon: !1, source: !1, url: !1, id: !1, autoplay: "auto", color: "#444444", hd: !0, brandedUI: !1, parameters: !1, onDisplay: function onDisplay() {}, onPlaceholderDisplay: function onPlaceholderDisplay() {}, onReset: function onReset() {}, onCreate: function onCreate(e) {}, onEmbed: function onEmbed(e) {
      return e;
    }, metadata: { id: "id", icon: "icon", placeholder: "placeholder", source: "source", url: "url" }, error: { noURL: "No URL specified", method: "The method you called is not defined" }, className: { active: "active", embed: "embed" }, selector: { embed: ".embed", placeholder: ".placeholder", icon: ".icon" }, sources: { youtube: { name: "youtube", type: "video", icon: "video play", domain: "youtube.com", url: "//www.youtube.com/embed/{id}", parameters: function parameters(e) {
          return { autohide: !e.brandedUI, autoplay: e.autoplay, color: e.color || i, hq: e.hd, jsapi: e.api, modestbranding: !e.brandedUI };
        } }, vimeo: { name: "vimeo", type: "video", icon: "video play", domain: "vimeo.com", url: "//player.vimeo.com/video/{id}", parameters: function parameters(e) {
          return { api: e.api, autoplay: e.autoplay, byline: e.brandedUI, color: e.color || i, portrait: e.brandedUI, title: e.brandedUI };
        } } }, templates: { iframe: function iframe(e, t) {
        var n = e;return t && (n += "?" + t), '<iframe src="' + n + '" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
      }, placeholder: function placeholder(e, t) {
        var n = "";return t && (n += '<i class="' + t + ' icon"></i>'), e && (n += '<img class="placeholder" src="' + e + '">'), n;
      } }, api: !1, onPause: function onPause() {}, onPlay: function onPlay() {}, onStop: function onStop() {} };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.modal = function (o) {
    var a,
        r = e(this),
        s = e(t),
        l = e(n),
        c = e("body"),
        u = r.selector || "",
        d = new Date().getTime(),
        f = [],
        m = arguments[0],
        g = "string" == typeof m,
        p = [].slice.call(arguments, 1),
        h = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
      setTimeout(e, 0);
    };return r.each(function () {
      var r,
          v,
          b,
          y,
          x,
          C,
          w,
          k,
          S,
          T = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.modal.settings, o) : e.extend({}, e.fn.modal.settings),
          A = T.selector,
          R = T.className,
          P = T.namespace,
          E = T.error,
          O = "." + P,
          F = "module-" + P,
          D = e(this),
          q = e(T.context),
          j = D.find(A.close),
          z = this,
          I = D.data(F),
          M = !1;S = { initialize: function initialize() {
          S.verbose("Initializing dimmer", q), S.create.id(), S.create.dimmer(), S.refreshModals(), S.bind.events(), T.observeChanges && S.observeChanges(), S.instantiate();
        }, instantiate: function instantiate() {
          S.verbose("Storing instance of modal"), I = S, D.data(F, I);
        }, create: { dimmer: function dimmer() {
            var t = { debug: T.debug, dimmerName: "modals" },
                n = e.extend(!0, t, T.dimmerSettings);e.fn.dimmer !== i ? (S.debug("Creating dimmer"), y = q.dimmer(n), T.detachable ? (S.verbose("Modal is detachable, moving content into dimmer"), y.dimmer("add content", D)) : S.set.undetached(), x = y.dimmer("get dimmer")) : S.error(E.dimmer);
          }, id: function id() {
            w = (Math.random().toString(16) + "000000000").substr(2, 8), C = "." + w, S.verbose("Creating unique id for element", w);
          } }, destroy: function destroy() {
          S.verbose("Destroying previous modal"), D.removeData(F).off(O), s.off(C), x.off(C), j.off(O), q.dimmer("destroy");
        }, observeChanges: function observeChanges() {
          "MutationObserver" in t && ((k = new MutationObserver(function (e) {
            S.debug("DOM tree modified, refreshing"), S.refresh();
          })).observe(z, { childList: !0, subtree: !0 }), S.debug("Setting up mutation observer", k));
        }, refresh: function refresh() {
          S.remove.scrolling(), S.cacheSizes(), S.set.screenHeight(), S.set.type(), S.set.position();
        }, refreshModals: function refreshModals() {
          v = D.siblings(A.modal), r = v.add(D);
        }, attachEvents: function attachEvents(t, n) {
          var i = e(t);n = e.isFunction(S[n]) ? S[n] : S.toggle, i.length > 0 ? (S.debug("Attaching modal events to element", t, n), i.off(O).on("click" + O, n)) : S.error(E.notFound, t);
        }, bind: { events: function events() {
            S.verbose("Attaching events"), D.on("click" + O, A.close, S.event.close).on("click" + O, A.approve, S.event.approve).on("click" + O, A.deny, S.event.deny), s.on("resize" + C, S.event.resize);
          } }, get: { id: function id() {
            return (Math.random().toString(16) + "000000000").substr(2, 8);
          } }, event: { approve: function approve() {
            M || !1 === T.onApprove.call(z, e(this)) ? S.verbose("Approve callback returned false cancelling hide") : (M = !0, S.hide(function () {
              M = !1;
            }));
          }, deny: function deny() {
            M || !1 === T.onDeny.call(z, e(this)) ? S.verbose("Deny callback returned false cancelling hide") : (M = !0, S.hide(function () {
              M = !1;
            }));
          }, close: function close() {
            S.hide();
          }, click: function click(t) {
            var i = e(t.target).closest(A.modal).length > 0,
                o = e.contains(n.documentElement, t.target);!i && o && (S.debug("Dimmer clicked, hiding all modals"), S.is.active() && (S.remove.clickaway(), T.allowMultiple ? S.hide() : S.hideAll()));
          }, debounce: function debounce(e, t) {
            clearTimeout(S.timer), S.timer = setTimeout(e, t);
          }, keyboard: function keyboard(e) {
            27 == e.which && (T.closable ? (S.debug("Escape key pressed hiding modal"), S.hide()) : S.debug("Escape key pressed, but closable is set to false"), e.preventDefault());
          }, resize: function resize() {
            y.dimmer("is active") && (S.is.animating() || S.is.active()) && h(S.refresh);
          } }, toggle: function toggle() {
          S.is.active() || S.is.animating() ? S.hide() : S.show();
        }, show: function show(t) {
          t = e.isFunction(t) ? t : function () {}, S.refreshModals(), S.set.dimmerSettings(), S.showModal(t);
        }, hide: function hide(t) {
          t = e.isFunction(t) ? t : function () {}, S.refreshModals(), S.hideModal(t);
        }, showModal: function showModal(t) {
          t = e.isFunction(t) ? t : function () {}, S.is.animating() || !S.is.active() ? (S.showDimmer(), S.cacheSizes(), S.set.position(), S.set.screenHeight(), S.set.type(), S.set.clickaway(), !T.allowMultiple && S.others.active() ? S.hideOthers(S.showModal) : (T.allowMultiple && T.detachable && D.detach().appendTo(x), T.onShow.call(z), T.transition && e.fn.transition !== i && D.transition("is supported") ? (S.debug("Showing modal with css animations"), D.transition({ debug: T.debug, animation: T.transition + " in", queue: T.queue, duration: T.duration, useFailSafe: !0, onComplete: function onComplete() {
              T.onVisible.apply(z), T.keyboardShortcuts && S.add.keyboardShortcuts(), S.save.focus(), S.set.active(), T.autofocus && S.set.autofocus(), t();
            } })) : S.error(E.noTransition))) : S.debug("Modal is already visible");
        }, hideModal: function hideModal(t, n) {
          t = e.isFunction(t) ? t : function () {}, S.debug("Hiding modal"), !1 !== T.onHide.call(z, e(this)) ? (S.is.animating() || S.is.active()) && (T.transition && e.fn.transition !== i && D.transition("is supported") ? (S.remove.active(), D.transition({ debug: T.debug, animation: T.transition + " out", queue: T.queue, duration: T.duration, useFailSafe: !0, onStart: function onStart() {
              S.others.active() || n || S.hideDimmer(), T.keyboardShortcuts && S.remove.keyboardShortcuts();
            }, onComplete: function onComplete() {
              T.onHidden.call(z), S.restore.focus(), t();
            } })) : S.error(E.noTransition)) : S.verbose("Hide callback returned false cancelling hide");
        }, showDimmer: function showDimmer() {
          y.dimmer("is animating") || !y.dimmer("is active") ? (S.debug("Showing dimmer"), y.dimmer("show")) : S.debug("Dimmer already visible");
        }, hideDimmer: function hideDimmer() {
          y.dimmer("is animating") || y.dimmer("is active") ? y.dimmer("hide", function () {
            S.remove.clickaway(), S.remove.screenHeight();
          }) : S.debug("Dimmer is not visible cannot hide");
        }, hideAll: function hideAll(t) {
          var n = r.filter("." + R.active + ", ." + R.animating);t = e.isFunction(t) ? t : function () {}, n.length > 0 && (S.debug("Hiding all visible modals"), S.hideDimmer(), n.modal("hide modal", t));
        }, hideOthers: function hideOthers(t) {
          var n = v.filter("." + R.active + ", ." + R.animating);t = e.isFunction(t) ? t : function () {}, n.length > 0 && (S.debug("Hiding other modals", v), n.modal("hide modal", t, !0));
        }, others: { active: function active() {
            return v.filter("." + R.active).length > 0;
          }, animating: function animating() {
            return v.filter("." + R.animating).length > 0;
          } }, add: { keyboardShortcuts: function keyboardShortcuts() {
            S.verbose("Adding keyboard shortcuts"), l.on("keyup" + O, S.event.keyboard);
          } }, save: { focus: function focus() {
            b = e(n.activeElement).blur();
          } }, restore: { focus: function focus() {
            b && b.length > 0 && b.focus();
          } }, remove: { active: function active() {
            D.removeClass(R.active);
          }, clickaway: function clickaway() {
            T.closable && x.off("click" + C);
          }, bodyStyle: function bodyStyle() {
            "" === c.attr("style") && (S.verbose("Removing style attribute"), c.removeAttr("style"));
          }, screenHeight: function screenHeight() {
            S.debug("Removing page height"), c.css("height", "");
          }, keyboardShortcuts: function keyboardShortcuts() {
            S.verbose("Removing keyboard shortcuts"), l.off("keyup" + O);
          }, scrolling: function scrolling() {
            y.removeClass(R.scrolling), D.removeClass(R.scrolling);
          } }, cacheSizes: function cacheSizes() {
          D.addClass(R.loading);var o = D.prop("scrollHeight"),
              a = D.outerHeight();S.cache !== i && 0 === a || (S.cache = { pageHeight: e(n).outerHeight(), height: a + T.offset, scrollHeight: o + T.offset, contextHeight: "body" == T.context ? e(t).height() : y.height() }, S.cache.topOffset = -S.cache.height / 2), D.removeClass(R.loading), S.debug("Caching modal and container sizes", S.cache);
        }, can: { fit: function fit() {
            var e = S.cache.contextHeight,
                t = S.cache.contextHeight / 2,
                n = S.cache.topOffset,
                i = S.cache.scrollHeight,
                o = S.cache.height,
                a = T.padding;return i > o ? t + n + i + a < e : o + 2 * a < e;
          } }, is: { active: function active() {
            return D.hasClass(R.active);
          }, animating: function animating() {
            return D.transition("is supported") ? D.transition("is animating") : D.is(":visible");
          }, scrolling: function scrolling() {
            return y.hasClass(R.scrolling);
          }, modernBrowser: function modernBrowser() {
            return !(t.ActiveXObject || "ActiveXObject" in t);
          } }, set: { autofocus: function autofocus() {
            var e = D.find("[tabindex], :input").filter(":visible"),
                t = e.filter("[autofocus]"),
                n = t.length > 0 ? t.first() : e.first();n.length > 0 && n.focus();
          }, clickaway: function clickaway() {
            T.closable && x.on("click" + C, S.event.click);
          }, dimmerSettings: function dimmerSettings() {
            if (e.fn.dimmer !== i) {
              var t = { debug: T.debug, dimmerName: "modals", variation: !1, closable: "auto", duration: { show: T.duration, hide: T.duration } },
                  n = e.extend(!0, t, T.dimmerSettings);T.inverted ? (n.variation = n.variation !== i ? n.variation + " inverted" : "inverted", x.addClass(R.inverted)) : x.removeClass(R.inverted), T.blurring ? y.addClass(R.blurring) : y.removeClass(R.blurring), q.dimmer("setting", n);
            } else S.error(E.dimmer);
          }, screenHeight: function screenHeight() {
            S.can.fit() ? c.css("height", "") : (S.debug("Modal is taller than page content, resizing page height"), c.css("height", S.cache.height + 2 * T.padding));
          }, active: function active() {
            D.addClass(R.active);
          }, scrolling: function scrolling() {
            y.addClass(R.scrolling), D.addClass(R.scrolling);
          }, type: function type() {
            S.can.fit() ? (S.verbose("Modal fits on screen"), S.others.active() || S.others.animating() || S.remove.scrolling()) : (S.verbose("Modal cannot fit on screen setting to scrolling"), S.set.scrolling());
          }, position: function position() {
            S.verbose("Centering modal on page", S.cache), S.can.fit() ? D.css({ top: "", marginTop: S.cache.topOffset }) : D.css({ marginTop: "", top: l.scrollTop() });
          }, undetached: function undetached() {
            y.addClass(R.undetached);
          } }, setting: function setting(t, n) {
          if (S.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, T, t);else {
            if (n === i) return T[t];e.isPlainObject(T[t]) ? e.extend(!0, T[t], n) : T[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, S, t);else {
            if (n === i) return S[t];S[t] = n;
          }
        }, debug: function debug() {
          !T.silent && T.debug && (T.performance ? S.performance.log(arguments) : (S.debug = Function.prototype.bind.call(console.info, console, T.name + ":"), S.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !T.silent && T.verbose && T.debug && (T.performance ? S.performance.log(arguments) : (S.verbose = Function.prototype.bind.call(console.info, console, T.name + ":"), S.verbose.apply(console, arguments)));
        }, error: function error() {
          T.silent || (S.error = Function.prototype.bind.call(console.error, console, T.name + ":"), S.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;T.performance && (n = (t = new Date().getTime()) - (d || t), d = t, f.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: z, "Execution Time": n })), clearTimeout(S.performance.timer), S.performance.timer = setTimeout(S.performance.display, 500);
          }, display: function display() {
            var t = T.name + ":",
                n = 0;d = !1, clearTimeout(S.performance.timer), e.each(f, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", u && (t += " '" + u + "'"), (console.group !== i || console.table !== i) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), f = [];
          } }, invoke: function invoke(t, n, o) {
          var r,
              s,
              l,
              c = I;return n = n || p, o = z || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, g ? (I === i && S.initialize(), S.invoke(m)) : (I !== i && I.invoke("destroy"), S.initialize());
    }), a !== i ? a : this;
  }, e.fn.modal.settings = { name: "Modal", namespace: "modal", silent: !1, debug: !1, verbose: !1, performance: !0, observeChanges: !1, allowMultiple: !1, detachable: !0, closable: !0, autofocus: !0, inverted: !1, blurring: !1, dimmerSettings: { closable: !1, useCSS: !0 }, keyboardShortcuts: !0, context: "body", queue: !1, duration: 500, offset: 0, transition: "scale", padding: 50, onShow: function onShow() {}, onVisible: function onVisible() {}, onHide: function onHide() {
      return !0;
    }, onHidden: function onHidden() {}, onApprove: function onApprove() {
      return !0;
    }, onDeny: function onDeny() {
      return !0;
    }, selector: { close: "> .close", approve: ".actions .positive, .actions .approve, .actions .ok", deny: ".actions .negative, .actions .deny, .actions .cancel", modal: ".ui.modal" }, error: { dimmer: "UI Dimmer, a required component is not included in this page", method: "The method you called is not defined.", notFound: "The element you specified could not be found" }, className: { active: "active", animating: "animating", blurring: "blurring", inverted: "inverted", loading: "loading", scrolling: "scrolling", undetached: "undetached" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.nag = function (n) {
    var o,
        a = e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1);return a.each(function () {
      var a,
          f = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.nag.settings, n) : e.extend({}, e.fn.nag.settings),
          m = (f.className, f.selector),
          g = f.error,
          p = f.namespace,
          h = "." + p,
          v = p + "-module",
          b = e(this),
          y = (b.find(m.close), f.context ? e(f.context) : e("body")),
          x = this,
          C = b.data(v);t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;a = { initialize: function initialize() {
          a.verbose("Initializing element"), b.on("click" + h, m.close, a.dismiss).data(v, a), f.detachable && b.parent()[0] !== y[0] && b.detach().prependTo(y), f.displayTime > 0 && setTimeout(a.hide, f.displayTime), a.show();
        }, destroy: function destroy() {
          a.verbose("Destroying instance"), b.removeData(v).off(h);
        }, show: function show() {
          a.should.show() && !b.is(":visible") && (a.debug("Showing nag", f.animation.show), "fade" == f.animation.show ? b.fadeIn(f.duration, f.easing) : b.slideDown(f.duration, f.easing));
        }, hide: function hide() {
          a.debug("Showing nag", f.animation.hide), "fade" == f.animation.show ? b.fadeIn(f.duration, f.easing) : b.slideUp(f.duration, f.easing);
        }, onHide: function onHide() {
          a.debug("Removing nag", f.animation.hide), b.remove(), f.onHide && f.onHide();
        }, dismiss: function dismiss(e) {
          f.storageMethod && a.storage.set(f.key, f.value), a.hide(), e.stopImmediatePropagation(), e.preventDefault();
        }, should: { show: function show() {
            return f.persist ? (a.debug("Persistent nag is set, can show nag"), !0) : a.storage.get(f.key) != f.value.toString() ? (a.debug("Stored value is not set, can show nag", a.storage.get(f.key)), !0) : (a.debug("Stored value is set, cannot show nag", a.storage.get(f.key)), !1);
          } }, get: { storageOptions: function storageOptions() {
            var e = {};return f.expires && (e.expires = f.expires), f.domain && (e.domain = f.domain), f.path && (e.path = f.path), e;
          } }, clear: function clear() {
          a.storage.remove(f.key);
        }, storage: { set: function set(n, o) {
            var r = a.get.storageOptions();if ("localstorage" == f.storageMethod && t.localStorage !== i) t.localStorage.setItem(n, o), a.debug("Value stored using local storage", n, o);else if ("sessionstorage" == f.storageMethod && t.sessionStorage !== i) t.sessionStorage.setItem(n, o), a.debug("Value stored using session storage", n, o);else {
              if (e.cookie === i) return void a.error(g.noCookieStorage);e.cookie(n, o, r), a.debug("Value stored using cookie", n, o, r);
            }
          }, get: function get(n, o) {
            var r;return "localstorage" == f.storageMethod && t.localStorage !== i ? r = t.localStorage.getItem(n) : "sessionstorage" == f.storageMethod && t.sessionStorage !== i ? r = t.sessionStorage.getItem(n) : e.cookie !== i ? r = e.cookie(n) : a.error(g.noCookieStorage), "undefined" != r && "null" != r && r !== i && null !== r || (r = i), r;
          }, remove: function remove(n) {
            var o = a.get.storageOptions();"localstorage" == f.storageMethod && t.localStorage !== i ? t.localStorage.removeItem(n) : "sessionstorage" == f.storageMethod && t.sessionStorage !== i ? t.sessionStorage.removeItem(n) : e.cookie !== i ? e.removeCookie(n, o) : a.error(g.noStorage);
          } }, setting: function setting(t, n) {
          if (a.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (n === i) return f[t];e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, a, t);else {
            if (n === i) return a[t];a[t] = n;
          }
        }, debug: function debug() {
          !f.silent && f.debug && (f.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), a.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !f.silent && f.verbose && f.debug && (f.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), a.verbose.apply(console, arguments)));
        }, error: function error() {
          f.silent || (a.error = Function.prototype.bind.call(console.error, console, f.name + ":"), a.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;f.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: x, "Execution Time": n })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500);
          }, display: function display() {
            var t = f.name + ":",
                n = 0;s = !1, clearTimeout(a.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function invoke(t, n, r) {
          var s,
              l,
              c,
              u = C;return n = n || d, r = x || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, o) {
            var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(u[r]) && n != s) u = u[r];else {
              if (u[r] !== i) return l = u[r], !1;if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (l = u[o], !1) : (a.error(g.method, t), !1);u = u[o];
            }
          })), e.isFunction(l) ? c = l.apply(r, n) : l !== i && (c = l), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), l;
        } }, u ? (C === i && a.initialize(), a.invoke(c)) : (C !== i && C.invoke("destroy"), a.initialize());
    }), o !== i ? o : this;
  }, e.fn.nag.settings = { name: "Nag", silent: !1, debug: !1, verbose: !1, performance: !0, namespace: "Nag", persist: !1, displayTime: 0, animation: { show: "slide", hide: "slide" }, context: !1, detachable: !1, expires: 30, domain: !1, path: "/", storageMethod: "cookie", key: "nag", value: "dismiss", error: { noCookieStorage: "$.cookie is not included. A storage solution is required.", noStorage: "Neither $.cookie or store is defined. A storage solution is required for storing state", method: "The method you called is not defined." }, className: { bottom: "bottom", fixed: "fixed" }, selector: { close: ".close.icon" }, speed: 500, easing: "easeOutQuad", onHide: function onHide() {} }, e.extend(e.easing, { easeOutQuad: function easeOutQuad(e, t, n, i, o) {
      return -i * (t /= o) * (t - 2) + n;
    } });
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.popup = function (o) {
    var a,
        r = e(this),
        s = e(n),
        l = e(t),
        c = e("body"),
        u = r.selector || "",
        d = new Date().getTime(),
        f = [],
        m = arguments[0],
        g = "string" == typeof m,
        p = [].slice.call(arguments, 1);return r.each(function () {
      var r,
          h,
          v,
          b,
          y,
          x,
          C = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.popup.settings, o) : e.extend({}, e.fn.popup.settings),
          w = C.selector,
          k = C.className,
          S = C.error,
          T = C.metadata,
          A = C.namespace,
          R = "." + C.namespace,
          P = "module-" + A,
          E = e(this),
          O = e(C.context),
          F = e(C.scrollContext),
          D = e(C.boundary),
          q = C.target ? e(C.target) : E,
          j = 0,
          z = !1,
          I = !1,
          M = this,
          L = E.data(P);x = { initialize: function initialize() {
          x.debug("Initializing", E), x.createID(), x.bind.events(), !x.exists() && C.preserve && x.create(), C.observeChanges && x.observeChanges(), x.instantiate();
        }, instantiate: function instantiate() {
          x.verbose("Storing instance", x), L = x, E.data(P, L);
        }, observeChanges: function observeChanges() {
          "MutationObserver" in t && ((v = new MutationObserver(x.event.documentChanged)).observe(n, { childList: !0, subtree: !0 }), x.debug("Setting up mutation observer", v));
        }, refresh: function refresh() {
          C.popup ? r = e(C.popup).eq(0) : C.inline && (r = q.nextAll(w.popup).eq(0), C.popup = r), C.popup ? (r.addClass(k.loading), h = x.get.offsetParent(), r.removeClass(k.loading), C.movePopup && x.has.popup() && x.get.offsetParent(r)[0] !== h[0] && (x.debug("Moving popup to the same offset parent as target"), r.detach().appendTo(h))) : h = C.inline ? x.get.offsetParent(q) : x.has.popup() ? x.get.offsetParent(r) : c, h.is("html") && h[0] !== c[0] && (x.debug("Setting page as offset parent"), h = c), x.get.variation() && x.set.variation();
        }, reposition: function reposition() {
          x.refresh(), x.set.position();
        }, destroy: function destroy() {
          x.debug("Destroying previous module"), v && v.disconnect(), r && !C.preserve && x.removePopup(), clearTimeout(x.hideTimer), clearTimeout(x.showTimer), x.unbind.close(), x.unbind.events(), E.removeData(P);
        }, event: { start: function start(t) {
            var n = e.isPlainObject(C.delay) ? C.delay.show : C.delay;clearTimeout(x.hideTimer), I || (x.showTimer = setTimeout(x.show, n));
          }, end: function end() {
            var t = e.isPlainObject(C.delay) ? C.delay.hide : C.delay;clearTimeout(x.showTimer), x.hideTimer = setTimeout(x.hide, t);
          }, touchstart: function touchstart(e) {
            I = !0, x.show();
          }, resize: function resize() {
            x.is.visible() && x.set.position();
          }, documentChanged: function documentChanged(t) {
            [].forEach.call(t, function (t) {
              t.removedNodes && [].forEach.call(t.removedNodes, function (t) {
                (t == M || e(t).find(M).length > 0) && (x.debug("Element removed from DOM, tearing down events"), x.destroy());
              });
            });
          }, hideGracefully: function hideGracefully(t) {
            var i = e(t.target),
                o = e.contains(n.documentElement, t.target),
                a = i.closest(w.popup).length > 0;t && !a && o ? (x.debug("Click occurred outside popup hiding popup"), x.hide()) : x.debug("Click was inside popup, keeping popup open");
          } }, create: function create() {
          var t = x.get.html(),
              n = x.get.title(),
              i = x.get.content();t || i || n ? (x.debug("Creating pop-up html"), t || (t = C.templates.popup({ title: n, content: i })), r = e("<div/>").addClass(k.popup).data(T.activator, E).html(t), C.inline ? (x.verbose("Inserting popup element inline", r), r.insertAfter(E)) : (x.verbose("Appending popup element to body", r), r.appendTo(O)), x.refresh(), x.set.variation(), C.hoverable && x.bind.popup(), C.onCreate.call(r, M)) : 0 !== q.next(w.popup).length ? (x.verbose("Pre-existing popup found"), C.inline = !0, C.popup = q.next(w.popup).data(T.activator, E), x.refresh(), C.hoverable && x.bind.popup()) : C.popup ? (e(C.popup).data(T.activator, E), x.verbose("Used popup specified in settings"), x.refresh(), C.hoverable && x.bind.popup()) : x.debug("No content specified skipping display", M);
        }, createID: function createID() {
          y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, x.verbose("Creating unique id for element", y);
        }, toggle: function toggle() {
          x.debug("Toggling pop-up"), x.is.hidden() ? (x.debug("Popup is hidden, showing pop-up"), x.unbind.close(), x.show()) : (x.debug("Popup is visible, hiding pop-up"), x.hide());
        }, show: function show(e) {
          if (e = e || function () {}, x.debug("Showing pop-up", C.transition), x.is.hidden() && (!x.is.active() || !x.is.dropdown())) {
            if (x.exists() || x.create(), !1 === C.onShow.call(r, M)) return void x.debug("onShow callback returned false, cancelling popup animation");C.preserve || C.popup || x.refresh(), r && x.set.position() && (x.save.conditions(), C.exclusive && x.hideAll(), x.animate.show(e));
          }
        }, hide: function hide(e) {
          if (e = e || function () {}, x.is.visible() || x.is.animating()) {
            if (!1 === C.onHide.call(r, M)) return void x.debug("onHide callback returned false, cancelling popup animation");x.remove.visible(), x.unbind.close(), x.restore.conditions(), x.animate.hide(e);
          }
        }, hideAll: function hideAll() {
          e(w.popup).filter("." + k.popupVisible).each(function () {
            e(this).data(T.activator).popup("hide");
          });
        }, exists: function exists() {
          return !!r && (C.inline || C.popup ? x.has.popup() : r.closest(O).length >= 1);
        }, removePopup: function removePopup() {
          x.has.popup() && !C.popup && (x.debug("Removing popup", r), r.remove(), r = i, C.onRemove.call(r, M));
        }, save: { conditions: function conditions() {
            x.cache = { title: E.attr("title") }, x.cache.title && E.removeAttr("title"), x.verbose("Saving original attributes", x.cache.title);
          } }, restore: { conditions: function conditions() {
            return x.cache && x.cache.title && (E.attr("title", x.cache.title), x.verbose("Restoring original attributes", x.cache.title)), !0;
          } }, supports: { svg: function svg() {
            return "undefined" == typeof SVGGraphicsElement;
          } }, animate: { show: function show(t) {
            t = e.isFunction(t) ? t : function () {}, C.transition && e.fn.transition !== i && E.transition("is supported") ? (x.set.visible(), r.transition({ animation: C.transition + " in", queue: !1, debug: C.debug, verbose: C.verbose, duration: C.duration, onComplete: function onComplete() {
                x.bind.close(), t.call(r, M), C.onVisible.call(r, M);
              } })) : x.error(S.noTransition);
          }, hide: function hide(t) {
            t = e.isFunction(t) ? t : function () {}, x.debug("Hiding pop-up"), !1 !== C.onHide.call(r, M) ? C.transition && e.fn.transition !== i && E.transition("is supported") ? r.transition({ animation: C.transition + " out", queue: !1, duration: C.duration, debug: C.debug, verbose: C.verbose, onComplete: function onComplete() {
                x.reset(), t.call(r, M), C.onHidden.call(r, M);
              } }) : x.error(S.noTransition) : x.debug("onHide callback returned false, cancelling popup animation");
          } }, change: { content: function content(e) {
            r.html(e);
          } }, get: { html: function html() {
            return E.removeData(T.html), E.data(T.html) || C.html;
          }, title: function title() {
            return E.removeData(T.title), E.data(T.title) || C.title;
          }, content: function content() {
            return E.removeData(T.content), E.data(T.content) || E.attr("title") || C.content;
          }, variation: function variation() {
            return E.removeData(T.variation), E.data(T.variation) || C.variation;
          }, popup: function popup() {
            return r;
          }, popupOffset: function popupOffset() {
            return r.offset();
          }, calculations: function calculations() {
            var e,
                n = q[0],
                i = D[0] == t,
                o = C.inline || C.popup && C.movePopup ? q.position() : q.offset(),
                a = i ? { top: 0, left: 0 } : D.offset(),
                s = {},
                c = i ? { top: l.scrollTop(), left: l.scrollLeft() } : { top: 0, left: 0 };return s = { target: { element: q[0], width: q.outerWidth(), height: q.outerHeight(), top: o.top, left: o.left, margin: {} }, popup: { width: r.outerWidth(), height: r.outerHeight() }, parent: { width: h.outerWidth(), height: h.outerHeight() }, screen: { top: a.top, left: a.left, scroll: { top: c.top, left: c.left }, width: D.width(), height: D.height() } }, C.setFluidWidth && x.is.fluid() && (s.container = { width: r.parent().outerWidth() }, s.popup.width = s.container.width), s.target.margin.top = C.inline ? parseInt(t.getComputedStyle(n).getPropertyValue("margin-top"), 10) : 0, s.target.margin.left = C.inline ? x.is.rtl() ? parseInt(t.getComputedStyle(n).getPropertyValue("margin-right"), 10) : parseInt(t.getComputedStyle(n).getPropertyValue("margin-left"), 10) : 0, e = s.screen, s.boundary = { top: e.top + e.scroll.top, bottom: e.top + e.scroll.top + e.height, left: e.left + e.scroll.left, right: e.left + e.scroll.left + e.width }, s;
          }, id: function id() {
            return y;
          }, startEvent: function startEvent() {
            return "hover" == C.on ? "mouseenter" : "focus" == C.on && "focus";
          }, scrollEvent: function scrollEvent() {
            return "scroll";
          }, endEvent: function endEvent() {
            return "hover" == C.on ? "mouseleave" : "focus" == C.on && "blur";
          }, distanceFromBoundary: function distanceFromBoundary(e, t) {
            var n,
                i,
                o = {};return n = (t = t || x.get.calculations()).popup, i = t.boundary, e && (o = { top: e.top - i.top, left: e.left - i.left, right: i.right - (e.left + n.width), bottom: i.bottom - (e.top + n.height) }, x.verbose("Distance from boundaries determined", e, o)), o;
          }, offsetParent: function offsetParent(t) {
            var n = (t !== i ? t[0] : q[0]).parentNode,
                o = e(n);if (n) for (var a = "none" === o.css("transform"), r = "static" === o.css("position"), s = o.is("html"); n && !s && r && a;) {
              n = n.parentNode, a = "none" === (o = e(n)).css("transform"), r = "static" === o.css("position"), s = o.is("html");
            }return o && o.length > 0 ? o : e();
          }, positions: function positions() {
            return { "top left": !1, "top center": !1, "top right": !1, "bottom left": !1, "bottom center": !1, "bottom right": !1, "left center": !1, "right center": !1 };
          }, nextPosition: function nextPosition(e) {
            var t = e.split(" "),
                n = t[0],
                i = t[1],
                o = "top" == n || "bottom" == n,
                a = !1,
                r = !1,
                s = !1;return z || (x.verbose("All available positions available"), z = x.get.positions()), x.debug("Recording last position tried", e), z[e] = !0, "opposite" === C.prefer && (s = (s = [{ top: "bottom", bottom: "top", left: "right", right: "left" }[n], i]).join(" "), a = !0 === z[s], x.debug("Trying opposite strategy", s)), "adjacent" === C.prefer && o && (s = (s = [n, { left: "center", center: "right", right: "left" }[i]]).join(" "), r = !0 === z[s], x.debug("Trying adjacent strategy", s)), (r || a) && (x.debug("Using backup position", s), s = { "top left": "top center", "top center": "top right", "top right": "right center", "right center": "bottom right", "bottom right": "bottom center", "bottom center": "bottom left", "bottom left": "left center", "left center": "top left" }[e]), s;
          } }, set: { position: function position(e, t) {
            if (0 !== q.length && 0 !== r.length) {
              var n, o, a, s, l, c, u, d;if (t = t || x.get.calculations(), e = e || E.data(T.position) || C.position, n = E.data(T.offset) || C.offset, o = C.distanceAway, a = t.target, s = t.popup, l = t.parent, 0 === a.width && 0 === a.height && !x.is.svg(a.element)) return x.debug("Popup target is hidden, no action taken"), !1;switch (C.inline && (x.debug("Adding margin to calculation", a.margin), "left center" == e || "right center" == e ? (n += a.margin.top, o += -a.margin.left) : "top left" == e || "top center" == e || "top right" == e ? (n += a.margin.left, o -= a.margin.top) : (n += a.margin.left, o += a.margin.top)), x.debug("Determining popup position from calculations", e, t), x.is.rtl() && (e = e.replace(/left|right/g, function (e) {
                return "left" == e ? "right" : "left";
              }), x.debug("RTL: Popup position updated", e)), j == C.maxSearchDepth && "string" == typeof C.lastResort && (e = C.lastResort), e) {case "top left":
                  c = { top: "auto", bottom: l.height - a.top + o, left: a.left + n, right: "auto" };break;case "top center":
                  c = { bottom: l.height - a.top + o, left: a.left + a.width / 2 - s.width / 2 + n, top: "auto", right: "auto" };break;case "top right":
                  c = { bottom: l.height - a.top + o, right: l.width - a.left - a.width - n, top: "auto", left: "auto" };break;case "left center":
                  c = { top: a.top + a.height / 2 - s.height / 2 + n, right: l.width - a.left + o, left: "auto", bottom: "auto" };break;case "right center":
                  c = { top: a.top + a.height / 2 - s.height / 2 + n, left: a.left + a.width + o, bottom: "auto", right: "auto" };break;case "bottom left":
                  c = { top: a.top + a.height + o, left: a.left + n, bottom: "auto", right: "auto" };break;case "bottom center":
                  c = { top: a.top + a.height + o, left: a.left + a.width / 2 - s.width / 2 + n, bottom: "auto", right: "auto" };break;case "bottom right":
                  c = { top: a.top + a.height + o, right: l.width - a.left - a.width - n, left: "auto", bottom: "auto" };}if (c === i && x.error(S.invalidPosition, e), x.debug("Calculated popup positioning values", c), r.css(c).removeClass(k.position).addClass(e).addClass(k.loading), u = x.get.popupOffset(), d = x.get.distanceFromBoundary(u, t), x.is.offstage(d, e)) {
                if (x.debug("Position is outside viewport", e), j < C.maxSearchDepth) return j++, e = x.get.nextPosition(e), x.debug("Trying new position", e), !!r && x.set.position(e, t);if (!C.lastResort) return x.debug("Popup could not find a position to display", r), x.error(S.cannotPlace, M), x.remove.attempts(), x.remove.loading(), x.reset(), C.onUnplaceable.call(r, M), !1;x.debug("No position found, showing with last position");
              }return x.debug("Position is on stage", e), x.remove.attempts(), x.remove.loading(), C.setFluidWidth && x.is.fluid() && x.set.fluidWidth(t), !0;
            }x.error(S.notFound);
          }, fluidWidth: function fluidWidth(e) {
            e = e || x.get.calculations(), x.debug("Automatically setting element width to parent width", e.parent.width), r.css("width", e.container.width);
          }, variation: function variation(e) {
            (e = e || x.get.variation()) && x.has.popup() && (x.verbose("Adding variation to popup", e), r.addClass(e));
          }, visible: function visible() {
            E.addClass(k.visible);
          } }, remove: { loading: function loading() {
            r.removeClass(k.loading);
          }, variation: function variation(e) {
            (e = e || x.get.variation()) && (x.verbose("Removing variation", e), r.removeClass(e));
          }, visible: function visible() {
            E.removeClass(k.visible);
          }, attempts: function attempts() {
            x.verbose("Resetting all searched positions"), j = 0, z = !1;
          } }, bind: { events: function events() {
            x.debug("Binding popup events to module"), "click" == C.on && E.on("click" + R, x.toggle), "hover" == C.on && E.on("touchstart" + R, x.event.touchstart), x.get.startEvent() && E.on(x.get.startEvent() + R, x.event.start).on(x.get.endEvent() + R, x.event.end), C.target && x.debug("Target set to element", q), l.on("resize" + b, x.event.resize);
          }, popup: function popup() {
            x.verbose("Allowing hover events on popup to prevent closing"), r && x.has.popup() && r.on("mouseenter" + R, x.event.start).on("mouseleave" + R, x.event.end);
          }, close: function close() {
            (!0 === C.hideOnScroll || "auto" == C.hideOnScroll && "click" != C.on) && x.bind.closeOnScroll(), "hover" == C.on && I && x.bind.touchClose(), "click" == C.on && C.closable && x.bind.clickaway();
          }, closeOnScroll: function closeOnScroll() {
            x.verbose("Binding scroll close event to document"), F.one(x.get.scrollEvent() + b, x.event.hideGracefully);
          }, touchClose: function touchClose() {
            x.verbose("Binding popup touchclose event to document"), s.on("touchstart" + b, function (e) {
              x.verbose("Touched away from popup"), x.event.hideGracefully.call(M, e);
            });
          }, clickaway: function clickaway() {
            x.verbose("Binding popup close event to document"), s.on("click" + b, function (e) {
              x.verbose("Clicked away from popup"), x.event.hideGracefully.call(M, e);
            });
          } }, unbind: { events: function events() {
            l.off(b), E.off(R);
          }, close: function close() {
            s.off(b), F.off(b);
          } }, has: { popup: function popup() {
            return r && r.length > 0;
          } }, is: { offstage: function offstage(t, n) {
            var i = [];return e.each(t, function (e, t) {
              t < -C.jitter && (x.debug("Position exceeds allowable distance from edge", e, t, n), i.push(e));
            }), i.length > 0;
          }, svg: function svg(e) {
            return x.supports.svg() && e instanceof SVGGraphicsElement;
          }, active: function active() {
            return E.hasClass(k.active);
          }, animating: function animating() {
            return r !== i && r.hasClass(k.animating);
          }, fluid: function fluid() {
            return r !== i && r.hasClass(k.fluid);
          }, visible: function visible() {
            return r !== i && r.hasClass(k.popupVisible);
          }, dropdown: function dropdown() {
            return E.hasClass(k.dropdown);
          }, hidden: function hidden() {
            return !x.is.visible();
          }, rtl: function rtl() {
            return "rtl" == E.css("direction");
          } }, reset: function reset() {
          x.remove.visible(), C.preserve ? e.fn.transition !== i && r.transition("remove transition") : x.removePopup();
        }, setting: function setting(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, C, t);else {
            if (n === i) return C[t];C[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, x, t);else {
            if (n === i) return x[t];x[t] = n;
          }
        }, debug: function debug() {
          !C.silent && C.debug && (C.performance ? x.performance.log(arguments) : (x.debug = Function.prototype.bind.call(console.info, console, C.name + ":"), x.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !C.silent && C.verbose && C.debug && (C.performance ? x.performance.log(arguments) : (x.verbose = Function.prototype.bind.call(console.info, console, C.name + ":"), x.verbose.apply(console, arguments)));
        }, error: function error() {
          C.silent || (x.error = Function.prototype.bind.call(console.error, console, C.name + ":"), x.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;C.performance && (n = (t = new Date().getTime()) - (d || t), d = t, f.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: M, "Execution Time": n })), clearTimeout(x.performance.timer), x.performance.timer = setTimeout(x.performance.display, 500);
          }, display: function display() {
            var t = C.name + ":",
                n = 0;d = !1, clearTimeout(x.performance.timer), e.each(f, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", u && (t += " '" + u + "'"), (console.group !== i || console.table !== i) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), f = [];
          } }, invoke: function invoke(t, n, o) {
          var r,
              s,
              l,
              c = L;return n = n || p, o = M || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, g ? (L === i && x.initialize(), x.invoke(m)) : (L !== i && L.invoke("destroy"), x.initialize());
    }), a !== i ? a : this;
  }, e.fn.popup.settings = { name: "Popup", silent: !1, debug: !1, verbose: !1, performance: !0, namespace: "popup", observeChanges: !0, onCreate: function onCreate() {}, onRemove: function onRemove() {}, onShow: function onShow() {}, onVisible: function onVisible() {}, onHide: function onHide() {}, onUnplaceable: function onUnplaceable() {}, onHidden: function onHidden() {}, on: "hover", boundary: t, addTouchEvents: !0, position: "top left", variation: "", movePopup: !0, target: !1, popup: !1, inline: !1, preserve: !1, hoverable: !1, content: !1, html: !1, title: !1, closable: !0, hideOnScroll: "auto", exclusive: !1, context: "body", scrollContext: t, prefer: "opposite", lastResort: !1, delay: { show: 50, hide: 70 }, setFluidWidth: !0, duration: 200, transition: "scale", distanceAway: 0, jitter: 2, offset: 0, maxSearchDepth: 15, error: { invalidPosition: "The position you specified is not a valid position", cannotPlace: "Popup does not fit within the boundaries of the viewport", method: "The method you called is not defined.", noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>", notFound: "The target or popup you specified does not exist on the page" }, metadata: { activator: "activator", content: "content", html: "html", offset: "offset", position: "position", title: "title", variation: "variation" }, className: { active: "active", animating: "animating", dropdown: "dropdown", fluid: "fluid", loading: "loading", popup: "ui popup", position: "top left center bottom right", visible: "visible", popupVisible: "visible" }, selector: { popup: ".ui.popup" }, templates: { escape: function escape(e) {
        var t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" };return (/[&<>"'`]/.test(e) ? e.replace(/[&<>"'`]/g, function (e) {
            return t[e];
          }) : e
        );
      }, popup: function popup(t) {
        var n = "",
            o = e.fn.popup.settings.templates.escape;return (typeof t === "undefined" ? "undefined" : _typeof(t)) !== i && (_typeof(t.title) !== i && t.title && (t.title = o(t.title), n += '<div class="header">' + t.title + "</div>"), _typeof(t.content) !== i && t.content && (t.content = o(t.content), n += '<div class="content">' + t.content + "</div>")), n;
      } } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  void 0 !== (t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")()) && t.Math == Math || ("undefined" != typeof self && self.Math == Math ? self : Function("return this")());e.fn.progress = function (t) {
    var o,
        a = e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1);return a.each(function () {
      var a,
          f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.progress.settings, t) : e.extend({}, e.fn.progress.settings),
          m = f.className,
          g = f.metadata,
          p = f.namespace,
          h = f.selector,
          v = f.error,
          b = "." + p,
          y = "module-" + p,
          x = e(this),
          C = e(this).find(h.bar),
          w = e(this).find(h.progress),
          k = e(this).find(h.label),
          S = this,
          T = x.data(y),
          A = !1;a = { initialize: function initialize() {
          a.debug("Initializing progress bar", f), a.set.duration(), a.set.transitionEvent(), a.read.metadata(), a.read.settings(), a.instantiate();
        }, instantiate: function instantiate() {
          a.verbose("Storing instance of progress", a), T = a, x.data(y, a);
        }, destroy: function destroy() {
          a.verbose("Destroying previous progress for", x), clearInterval(T.interval), a.remove.state(), x.removeData(y), T = i;
        }, reset: function reset() {
          a.remove.nextValue(), a.update.progress(0);
        }, complete: function complete() {
          (a.percent === i || a.percent < 100) && (a.remove.progressPoll(), a.set.percent(100));
        }, read: { metadata: function metadata() {
            var e = { percent: x.data(g.percent), total: x.data(g.total), value: x.data(g.value) };e.percent && (a.debug("Current percent value set from metadata", e.percent), a.set.percent(e.percent)), e.total && (a.debug("Total value set from metadata", e.total), a.set.total(e.total)), e.value && (a.debug("Current value set from metadata", e.value), a.set.value(e.value), a.set.progress(e.value));
          }, settings: function settings() {
            !1 !== f.total && (a.debug("Current total set in settings", f.total), a.set.total(f.total)), !1 !== f.value && (a.debug("Current value set in settings", f.value), a.set.value(f.value), a.set.progress(a.value)), !1 !== f.percent && (a.debug("Current percent set in settings", f.percent), a.set.percent(f.percent));
          } }, bind: { transitionEnd: function transitionEnd(e) {
            var t = a.get.transitionEnd();C.one(t + b, function (t) {
              clearTimeout(a.failSafeTimer), e.call(this, t);
            }), a.failSafeTimer = setTimeout(function () {
              C.triggerHandler(t);
            }, f.duration + f.failSafeDelay), a.verbose("Adding fail safe timer", a.timer);
          } }, increment: function increment(e) {
          var t, n;a.has.total() ? n = (t = a.get.value()) + (e = e || 1) : (n = (t = a.get.percent()) + (e = e || a.get.randomValue()), 100, a.debug("Incrementing percentage by", t, n)), n = a.get.normalizedValue(n), a.set.progress(n);
        }, decrement: function decrement(e) {
          var t, n;a.get.total() ? (n = (t = a.get.value()) - (e = e || 1), a.debug("Decrementing value by", e, t)) : (n = (t = a.get.percent()) - (e = e || a.get.randomValue()), a.debug("Decrementing percentage by", e, t)), n = a.get.normalizedValue(n), a.set.progress(n);
        }, has: { progressPoll: function progressPoll() {
            return a.progressPoll;
          }, total: function total() {
            return !1 !== a.get.total();
          } }, get: { text: function text(e) {
            var t = a.value || 0,
                n = a.total || 0,
                i = A ? a.get.displayPercent() : a.percent || 0,
                o = a.total > 0 ? n - t : 100 - i;return e = (e = e || "").replace("{value}", t).replace("{total}", n).replace("{left}", o).replace("{percent}", i), a.verbose("Adding variables to progress bar text", e), e;
          }, normalizedValue: function normalizedValue(e) {
            if (e < 0) return a.debug("Value cannot decrement below 0"), 0;if (a.has.total()) {
              if (e > a.total) return a.debug("Value cannot increment above total", a.total), a.total;
            } else if (e > 100) return a.debug("Value cannot increment above 100 percent"), 100;return e;
          }, updateInterval: function updateInterval() {
            return "auto" == f.updateInterval ? f.duration : f.updateInterval;
          }, randomValue: function randomValue() {
            return a.debug("Generating random increment percentage"), Math.floor(Math.random() * f.random.max + f.random.min);
          }, numericValue: function numericValue(e) {
            return "string" == typeof e ? "" !== e.replace(/[^\d.]/g, "") && +e.replace(/[^\d.]/g, "") : e;
          }, transitionEnd: function transitionEnd() {
            var e,
                t = n.createElement("element"),
                o = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (e in o) {
              if (t.style[e] !== i) return o[e];
            }
          }, displayPercent: function displayPercent() {
            var e = C.width(),
                t = x.width(),
                n = e > parseInt(C.css("min-width"), 10) ? e / t * 100 : a.percent;return f.precision > 0 ? Math.round(n * (10 * f.precision)) / (10 * f.precision) : Math.round(n);
          }, percent: function percent() {
            return a.percent || 0;
          }, value: function value() {
            return a.nextValue || a.value || 0;
          }, total: function total() {
            return a.total || !1;
          } }, create: { progressPoll: function progressPoll() {
            a.progressPoll = setTimeout(function () {
              a.update.toNextValue(), a.remove.progressPoll();
            }, a.get.updateInterval());
          } }, is: { complete: function complete() {
            return a.is.success() || a.is.warning() || a.is.error();
          }, success: function success() {
            return x.hasClass(m.success);
          }, warning: function warning() {
            return x.hasClass(m.warning);
          }, error: function error() {
            return x.hasClass(m.error);
          }, active: function active() {
            return x.hasClass(m.active);
          }, visible: function visible() {
            return x.is(":visible");
          } }, remove: { progressPoll: function progressPoll() {
            a.verbose("Removing progress poll timer"), a.progressPoll && (clearTimeout(a.progressPoll), delete a.progressPoll);
          }, nextValue: function nextValue() {
            a.verbose("Removing progress value stored for next update"), delete a.nextValue;
          }, state: function state() {
            a.verbose("Removing stored state"), delete a.total, delete a.percent, delete a.value;
          }, active: function active() {
            a.verbose("Removing active state"), x.removeClass(m.active);
          }, success: function success() {
            a.verbose("Removing success state"), x.removeClass(m.success);
          }, warning: function warning() {
            a.verbose("Removing warning state"), x.removeClass(m.warning);
          }, error: function error() {
            a.verbose("Removing error state"), x.removeClass(m.error);
          } }, set: { barWidth: function barWidth(e) {
            e > 100 ? a.error(v.tooHigh, e) : e < 0 ? a.error(v.tooLow, e) : (C.css("width", e + "%"), x.attr("data-percent", parseInt(e, 10)));
          }, duration: function duration(e) {
            e = "number" == typeof (e = e || f.duration) ? e + "ms" : e, a.verbose("Setting progress bar transition duration", e), C.css({ "transition-duration": e });
          }, percent: function percent(e) {
            e = "string" == typeof e ? +e.replace("%", "") : e, e = f.precision > 0 ? Math.round(e * (10 * f.precision)) / (10 * f.precision) : Math.round(e), a.percent = e, a.has.total() || (a.value = f.precision > 0 ? Math.round(e / 100 * a.total * (10 * f.precision)) / (10 * f.precision) : Math.round(e / 100 * a.total * 10) / 10, f.limitValues && (a.value = a.value > 100 ? 100 : a.value < 0 ? 0 : a.value)), a.set.barWidth(e), a.set.labelInterval(), a.set.labels(), f.onChange.call(S, e, a.value, a.total);
          }, labelInterval: function labelInterval() {
            clearInterval(a.interval), a.bind.transitionEnd(function () {
              a.verbose("Bar finished animating, removing continuous label updates"), clearInterval(a.interval), A = !1, a.set.labels();
            }), A = !0, a.interval = setInterval(function () {
              e.contains(n.documentElement, S) || (clearInterval(a.interval), A = !1), a.set.labels();
            }, f.framerate);
          }, labels: function labels() {
            a.verbose("Setting both bar progress and outer label text"), a.set.barLabel(), a.set.state();
          }, label: function label(e) {
            (e = e || "") && (e = a.get.text(e), a.verbose("Setting label to text", e), k.text(e));
          }, state: function state(e) {
            100 === (e = e !== i ? e : a.percent) ? f.autoSuccess && !(a.is.warning() || a.is.error() || a.is.success()) ? (a.set.success(), a.debug("Automatically triggering success at 100%")) : (a.verbose("Reached 100% removing active state"), a.remove.active(), a.remove.progressPoll()) : e > 0 ? (a.verbose("Adjusting active progress bar label", e), a.set.active()) : (a.remove.active(), a.set.label(f.text.active));
          }, barLabel: function barLabel(e) {
            e !== i ? w.text(a.get.text(e)) : "ratio" == f.label && a.total ? (a.verbose("Adding ratio to bar label"), w.text(a.get.text(f.text.ratio))) : "percent" == f.label && (a.verbose("Adding percentage to bar label"), w.text(a.get.text(f.text.percent)));
          }, active: function active(e) {
            e = e || f.text.active, a.debug("Setting active state"), f.showActivity && !a.is.active() && x.addClass(m.active), a.remove.warning(), a.remove.error(), a.remove.success(), (e = f.onLabelUpdate("active", e, a.value, a.total)) && a.set.label(e), a.bind.transitionEnd(function () {
              f.onActive.call(S, a.value, a.total);
            });
          }, success: function success(e) {
            e = e || f.text.success || f.text.active, a.debug("Setting success state"), x.addClass(m.success), a.remove.active(), a.remove.warning(), a.remove.error(), a.complete(), f.text.success ? (e = f.onLabelUpdate("success", e, a.value, a.total), a.set.label(e)) : (e = f.onLabelUpdate("active", e, a.value, a.total), a.set.label(e)), a.bind.transitionEnd(function () {
              f.onSuccess.call(S, a.total);
            });
          }, warning: function warning(e) {
            e = e || f.text.warning, a.debug("Setting warning state"), x.addClass(m.warning), a.remove.active(), a.remove.success(), a.remove.error(), a.complete(), (e = f.onLabelUpdate("warning", e, a.value, a.total)) && a.set.label(e), a.bind.transitionEnd(function () {
              f.onWarning.call(S, a.value, a.total);
            });
          }, error: function error(e) {
            e = e || f.text.error, a.debug("Setting error state"), x.addClass(m.error), a.remove.active(), a.remove.success(), a.remove.warning(), a.complete(), (e = f.onLabelUpdate("error", e, a.value, a.total)) && a.set.label(e), a.bind.transitionEnd(function () {
              f.onError.call(S, a.value, a.total);
            });
          }, transitionEvent: function transitionEvent() {
            a.get.transitionEnd();
          }, total: function total(e) {
            a.total = e;
          }, value: function value(e) {
            a.value = e;
          }, progress: function progress(e) {
            a.has.progressPoll() ? (a.debug("Updated within interval, setting next update to use new value", e), a.set.nextValue(e)) : (a.debug("First update in progress update interval, immediately updating", e), a.update.progress(e), a.create.progressPoll());
          }, nextValue: function nextValue(e) {
            a.nextValue = e;
          } }, update: { toNextValue: function toNextValue() {
            var e = a.nextValue;e && (a.debug("Update interval complete using last updated value", e), a.update.progress(e), a.remove.nextValue());
          }, progress: function progress(e) {
            var t;!1 === (e = a.get.numericValue(e)) && a.error(v.nonNumeric, e), e = a.get.normalizedValue(e), a.has.total() ? (a.set.value(e), t = e / a.total * 100, a.debug("Calculating percent complete from total", t), a.set.percent(t)) : (t = e, a.debug("Setting value to exact percentage value", t), a.set.percent(t));
          } }, setting: function setting(t, n) {
          if (a.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (n === i) return f[t];e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, a, t);else {
            if (n === i) return a[t];a[t] = n;
          }
        }, debug: function debug() {
          !f.silent && f.debug && (f.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), a.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !f.silent && f.verbose && f.debug && (f.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), a.verbose.apply(console, arguments)));
        }, error: function error() {
          f.silent || (a.error = Function.prototype.bind.call(console.error, console, f.name + ":"), a.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;f.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: S, "Execution Time": n })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500);
          }, display: function display() {
            var t = f.name + ":",
                n = 0;s = !1, clearTimeout(a.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function invoke(t, n, r) {
          var s,
              l,
              c,
              u = T;return n = n || d, r = S || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, o) {
            var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(u[r]) && n != s) u = u[r];else {
              if (u[r] !== i) return l = u[r], !1;if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (l = u[o], !1) : (a.error(v.method, t), !1);u = u[o];
            }
          })), e.isFunction(l) ? c = l.apply(r, n) : l !== i && (c = l), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), l;
        } }, u ? (T === i && a.initialize(), a.invoke(c)) : (T !== i && T.invoke("destroy"), a.initialize());
    }), o !== i ? o : this;
  }, e.fn.progress.settings = { name: "Progress", namespace: "progress", silent: !1, debug: !1, verbose: !1, performance: !0, random: { min: 2, max: 5 }, duration: 300, updateInterval: "auto", autoSuccess: !0, showActivity: !0, limitValues: !0, label: "percent", precision: 0, framerate: 1e3 / 30, percent: !1, total: !1, value: !1, failSafeDelay: 100, onLabelUpdate: function onLabelUpdate(e, t, n, i) {
      return t;
    }, onChange: function onChange(e, t, n) {}, onSuccess: function onSuccess(e) {}, onActive: function onActive(e, t) {}, onError: function onError(e, t) {}, onWarning: function onWarning(e, t) {}, error: { method: "The method you called is not defined.", nonNumeric: "Progress value is non numeric", tooHigh: "Value specified is above 100%", tooLow: "Value specified is below 0%" }, regExp: { variable: /\{\$*[A-z0-9]+\}/g }, metadata: { percent: "percent", total: "total", value: "value" }, selector: { bar: "> .bar", label: "> .label", progress: ".bar > .progress" }, text: { active: !1, error: !1, success: !1, warning: !1, percent: "{percent}%", ratio: "{value} of {total}" }, className: { active: "active", error: "error", success: "success", warning: "warning" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.rating = function (t) {
    var n,
        o = e(this),
        a = o.selector || "",
        r = new Date().getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);return o.each(function () {
      var d,
          f,
          m = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.rating.settings, t) : e.extend({}, e.fn.rating.settings),
          g = m.namespace,
          p = m.className,
          h = m.metadata,
          v = m.selector,
          b = (m.error, "." + g),
          y = "module-" + g,
          x = this,
          C = e(this).data(y),
          w = e(this),
          k = w.find(v.icon);f = { initialize: function initialize() {
          f.verbose("Initializing rating module", m), 0 === k.length && f.setup.layout(), m.interactive ? f.enable() : f.disable(), f.set.initialLoad(), f.set.rating(f.get.initialRating()), f.remove.initialLoad(), f.instantiate();
        }, instantiate: function instantiate() {
          f.verbose("Instantiating module", m), C = f, w.data(y, f);
        }, destroy: function destroy() {
          f.verbose("Destroying previous instance", C), f.remove.events(), w.removeData(y);
        }, refresh: function refresh() {
          k = w.find(v.icon);
        }, setup: { layout: function layout() {
            var t = f.get.maxRating(),
                n = e.fn.rating.settings.templates.icon(t);f.debug("Generating icon html dynamically"), w.html(n), f.refresh();
          } }, event: { mouseenter: function mouseenter() {
            var t = e(this);t.nextAll().removeClass(p.selected), w.addClass(p.selected), t.addClass(p.selected).prevAll().addClass(p.selected);
          }, mouseleave: function mouseleave() {
            w.removeClass(p.selected), k.removeClass(p.selected);
          }, click: function click() {
            var t = e(this),
                n = f.get.rating(),
                i = k.index(t) + 1;("auto" == m.clearable ? 1 === k.length : m.clearable) && n == i ? f.clearRating() : f.set.rating(i);
          } }, clearRating: function clearRating() {
          f.debug("Clearing current rating"), f.set.rating(0);
        }, bind: { events: function events() {
            f.verbose("Binding events"), w.on("mouseenter" + b, v.icon, f.event.mouseenter).on("mouseleave" + b, v.icon, f.event.mouseleave).on("click" + b, v.icon, f.event.click);
          } }, remove: { events: function events() {
            f.verbose("Removing events"), w.off(b);
          }, initialLoad: function initialLoad() {
            d = !1;
          } }, enable: function enable() {
          f.debug("Setting rating to interactive mode"), f.bind.events(), w.removeClass(p.disabled);
        }, disable: function disable() {
          f.debug("Setting rating to read-only mode"), f.remove.events(), w.addClass(p.disabled);
        }, is: { initialLoad: function initialLoad() {
            return d;
          } }, get: { initialRating: function initialRating() {
            return w.data(h.rating) !== i ? (w.removeData(h.rating), w.data(h.rating)) : m.initialRating;
          }, maxRating: function maxRating() {
            return w.data(h.maxRating) !== i ? (w.removeData(h.maxRating), w.data(h.maxRating)) : m.maxRating;
          }, rating: function rating() {
            var e = k.filter("." + p.active).length;return f.verbose("Current rating retrieved", e), e;
          } }, set: { rating: function rating(e) {
            var t = e - 1 >= 0 ? e - 1 : 0,
                n = k.eq(t);w.removeClass(p.selected), k.removeClass(p.selected).removeClass(p.active), e > 0 && (f.verbose("Setting current rating to", e), n.prevAll().addBack().addClass(p.active)), f.is.initialLoad() || m.onRate.call(x, e);
          }, initialLoad: function initialLoad() {
            d = !0;
          } }, setting: function setting(t, n) {
          if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (n === i) return m[t];e.isPlainObject(m[t]) ? e.extend(!0, m[t], n) : m[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (n === i) return f[t];f[t] = n;
          }
        }, debug: function debug() {
          !m.silent && m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !m.silent && m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)));
        }, error: function error() {
          m.silent || (f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;m.performance && (n = (t = new Date().getTime()) - (r || t), r = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: x, "Execution Time": n })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500);
          }, display: function display() {
            var t = m.name + ":",
                n = 0;r = !1, clearTimeout(f.performance.timer), e.each(s, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", a && (t += " '" + a + "'"), o.length > 1 && (t += " (" + o.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), s = [];
          } }, invoke: function invoke(t, o, a) {
          var r,
              s,
              l,
              c = C;return o = o || u, a = x || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(a, o) : s !== i && (l = s), e.isArray(n) ? n.push(l) : n !== i ? n = [n, l] : l !== i && (n = l), s;
        } }, c ? (C === i && f.initialize(), f.invoke(l)) : (C !== i && C.invoke("destroy"), f.initialize());
    }), n !== i ? n : this;
  }, e.fn.rating.settings = { name: "Rating", namespace: "rating", slent: !1, debug: !1, verbose: !1, performance: !0, initialRating: 0, interactive: !0, maxRating: 4, clearable: "auto", fireOnInit: !1, onRate: function onRate(e) {}, error: { method: "The method you called is not defined", noMaximum: "No maximum rating specified. Cannot generate HTML automatically" }, metadata: { rating: "rating", maxRating: "maxRating" }, className: { active: "active", disabled: "disabled", selected: "selected", loading: "loading" }, selector: { icon: ".icon" }, templates: { icon: function icon(e) {
        for (var t = 1, n = ""; t <= e;) {
          n += '<i class="icon"></i>', t++;
        }return n;
      } } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.search = function (o) {
    var a,
        r = e(this),
        s = r.selector || "",
        l = new Date().getTime(),
        c = [],
        u = arguments[0],
        d = "string" == typeof u,
        f = [].slice.call(arguments, 1);return e(this).each(function () {
      var m,
          g = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.search.settings, o) : e.extend({}, e.fn.search.settings),
          p = g.className,
          h = g.metadata,
          v = g.regExp,
          b = g.fields,
          y = g.selector,
          x = g.error,
          C = g.namespace,
          w = "." + C,
          k = C + "-module",
          S = e(this),
          T = S.find(y.prompt),
          A = S.find(y.searchButton),
          R = S.find(y.results),
          P = S.find(y.result),
          E = (S.find(y.category), this),
          O = S.data(k),
          F = !1,
          D = !1;m = { initialize: function initialize() {
          m.verbose("Initializing module"), m.determine.searchFields(), m.bind.events(), m.set.type(), m.create.results(), m.instantiate();
        }, instantiate: function instantiate() {
          m.verbose("Storing instance of module", m), O = m, S.data(k, m);
        }, destroy: function destroy() {
          m.verbose("Destroying instance"), S.off(w).removeData(k);
        }, refresh: function refresh() {
          m.debug("Refreshing selector cache"), T = S.find(y.prompt), A = S.find(y.searchButton), S.find(y.category), R = S.find(y.results), P = S.find(y.result);
        }, refreshResults: function refreshResults() {
          R = S.find(y.results), P = S.find(y.result);
        }, bind: { events: function events() {
            m.verbose("Binding events to search"), g.automatic && (S.on(m.get.inputEvent() + w, y.prompt, m.event.input), T.attr("autocomplete", "off")), S.on("focus" + w, y.prompt, m.event.focus).on("blur" + w, y.prompt, m.event.blur).on("keydown" + w, y.prompt, m.handleKeyboard).on("click" + w, y.searchButton, m.query).on("mousedown" + w, y.results, m.event.result.mousedown).on("mouseup" + w, y.results, m.event.result.mouseup).on("click" + w, y.result, m.event.result.click);
          } }, determine: { searchFields: function searchFields() {
            o && o.searchFields !== i && (g.searchFields = o.searchFields);
          } }, event: { input: function input() {
            g.searchDelay ? (clearTimeout(m.timer), m.timer = setTimeout(function () {
              m.is.focused() && m.query();
            }, g.searchDelay)) : m.query();
          }, focus: function focus() {
            m.set.focus(), g.searchOnFocus && m.has.minimumCharacters() && m.query(function () {
              m.can.show() && m.showResults();
            });
          }, blur: function blur(e) {
            var t = n.activeElement === this,
                i = function i() {
              m.cancel.query(), m.remove.focus(), m.timer = setTimeout(m.hideResults, g.hideDelay);
            };t || (D = !1, m.resultsClicked ? (m.debug("Determining if user action caused search to close"), S.one("click.close" + w, y.results, function (e) {
              m.is.inMessage(e) || F ? T.focus() : (F = !1, m.is.animating() || m.is.hidden() || i());
            })) : (m.debug("Input blurred without user action, closing results"), i()));
          }, result: { mousedown: function mousedown() {
              m.resultsClicked = !0;
            }, mouseup: function mouseup() {
              m.resultsClicked = !1;
            }, click: function click(n) {
              m.debug("Search result selected");var i = e(this),
                  o = i.find(y.title).eq(0),
                  a = i.is("a[href]") ? i : i.find("a[href]").eq(0),
                  r = a.attr("href") || !1,
                  s = a.attr("target") || !1,
                  l = (o.html(), o.length > 0 && o.text()),
                  c = m.get.results(),
                  u = i.data(h.result) || m.get.result(l, c);if (e.isFunction(g.onSelect) && !1 === g.onSelect.call(E, u, c)) return m.debug("Custom onSelect callback cancelled default select action"), void (F = !0);m.hideResults(), l && m.set.value(l), r && (m.verbose("Opening search link found in result", a), "_blank" == s || n.ctrlKey ? t.open(r) : t.location.href = r);
            } } }, handleKeyboard: function handleKeyboard(e) {
          var t,
              n = S.find(y.result),
              i = S.find(y.category),
              o = n.filter("." + p.active),
              a = n.index(o),
              r = n.length,
              s = o.length > 0,
              l = e.which,
              c = 13,
              u = 38,
              d = 40;if (l == 27 && (m.verbose("Escape key pressed, blurring search field"), m.hideResults(), D = !0), m.is.visible()) {
            if (l == c) {
              if (m.verbose("Enter key pressed, selecting active result"), n.filter("." + p.active).length > 0) return m.event.result.click.call(n.filter("." + p.active), e), e.preventDefault(), !1;
            } else l == u && s ? (m.verbose("Up key pressed, changing active result"), t = a - 1 < 0 ? a : a - 1, i.removeClass(p.active), n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active), e.preventDefault()) : l == d && (m.verbose("Down key pressed, changing active result"), t = a + 1 >= r ? a : a + 1, i.removeClass(p.active), n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active), e.preventDefault());
          } else l == c && (m.verbose("Enter key pressed, executing query"), m.query(), m.set.buttonPressed(), T.one("keyup", m.remove.buttonFocus));
        }, setup: { api: function api(t, n) {
            var i = { debug: g.debug, on: !1, cache: !0, action: "search", urlData: { query: t }, onSuccess: function onSuccess(e) {
                m.parse.response.call(E, e, t), n();
              }, onFailure: function onFailure() {
                m.displayMessage(x.serverError), n();
              }, onAbort: function onAbort(e) {}, onError: m.error };e.extend(!0, i, g.apiSettings), m.verbose("Setting up API request", i), S.api(i);
          } }, can: { useAPI: function useAPI() {
            return e.fn.api !== i;
          }, show: function show() {
            return m.is.focused() && !m.is.visible() && !m.is.empty();
          }, transition: function transition() {
            return g.transition && e.fn.transition !== i && S.transition("is supported");
          } }, is: { animating: function animating() {
            return R.hasClass(p.animating);
          }, hidden: function hidden() {
            return R.hasClass(p.hidden);
          }, inMessage: function inMessage(t) {
            if (t.target) {
              var i = e(t.target);return e.contains(n.documentElement, t.target) && i.closest(y.message).length > 0;
            }
          }, empty: function empty() {
            return "" === R.html();
          }, visible: function visible() {
            return R.filter(":visible").length > 0;
          }, focused: function focused() {
            return T.filter(":focus").length > 0;
          } }, get: { inputEvent: function inputEvent() {
            var e = T[0];return e !== i && e.oninput !== i ? "input" : e !== i && e.onpropertychange !== i ? "propertychange" : "keyup";
          }, value: function value() {
            return T.val();
          }, results: function results() {
            return S.data(h.results);
          }, result: function result(t, n) {
            var o = ["title", "id"],
                a = !1;return t = t !== i ? t : m.get.value(), n = n !== i ? n : m.get.results(), "category" === g.type ? (m.debug("Finding result that matches", t), e.each(n, function (n, i) {
              if (e.isArray(i.results) && (a = m.search.object(t, i.results, o)[0])) return !1;
            })) : (m.debug("Finding result in results object", t), a = m.search.object(t, n, o)[0]), a || !1;
          } }, select: { firstResult: function firstResult() {
            m.verbose("Selecting first result"), P.first().addClass(p.active);
          } }, set: { focus: function focus() {
            S.addClass(p.focus);
          }, loading: function loading() {
            S.addClass(p.loading);
          }, value: function value(e) {
            m.verbose("Setting search input value", e), T.val(e);
          }, type: function type(e) {
            e = e || g.type, "category" == g.type && S.addClass(g.type);
          }, buttonPressed: function buttonPressed() {
            A.addClass(p.pressed);
          } }, remove: { loading: function loading() {
            S.removeClass(p.loading);
          }, focus: function focus() {
            S.removeClass(p.focus);
          }, buttonPressed: function buttonPressed() {
            A.removeClass(p.pressed);
          } }, query: function query(t) {
          t = e.isFunction(t) ? t : function () {};var n = m.get.value(),
              i = m.read.cache(n);t = t || function () {}, m.has.minimumCharacters() ? (i ? (m.debug("Reading result from cache", n), m.save.results(i.results), m.addResults(i.html), m.inject.id(i.results), t()) : (m.debug("Querying for", n), e.isPlainObject(g.source) || e.isArray(g.source) ? (m.search.local(n), t()) : m.can.useAPI() ? m.search.remote(n, t) : (m.error(x.source), t())), g.onSearchQuery.call(E, n)) : m.hideResults();
        }, search: { local: function local(e) {
            var t,
                n = m.search.object(e, g.content);m.set.loading(), m.save.results(n), m.debug("Returned local search results", n), t = m.generateResults({ results: n }), m.remove.loading(), m.addResults(t), m.inject.id(n), m.write.cache(e, { html: t, results: n });
          }, remote: function remote(t, n) {
            n = e.isFunction(n) ? n : function () {}, S.api("is loading") && S.api("abort"), m.setup.api(t, n), S.api("query");
          }, object: function object(t, n, o) {
            var a = [],
                r = [],
                s = t.toString().replace(v.escape, "\\$&"),
                l = new RegExp(v.beginsWith + s, "i"),
                c = function c(t, n) {
              var i = -1 == e.inArray(n, a),
                  o = -1 == e.inArray(n, r);i && o && t.push(n);
            };return n = n || g.source, o = o !== i ? o : g.searchFields, e.isArray(o) || (o = [o]), n === i || !1 === n ? (m.error(x.source), []) : (e.each(o, function (i, o) {
              e.each(n, function (e, n) {
                "string" == typeof n[o] && (-1 !== n[o].search(l) ? c(a, n) : g.searchFullText && m.fuzzySearch(t, n[o]) && c(r, n));
              });
            }), e.merge(a, r));
          } }, fuzzySearch: function fuzzySearch(e, t) {
          var n = t.length,
              i = e.length;if ("string" != typeof e) return !1;if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;if (i === n) return e === t;e: for (var o = 0, a = 0; o < i; o++) {
            for (var r = e.charCodeAt(o); a < n;) {
              if (t.charCodeAt(a++) === r) continue e;
            }return !1;
          }return !0;
        }, parse: { response: function response(e, t) {
            var n = m.generateResults(e);m.verbose("Parsing server response", e), e !== i && t !== i && e[b.results] !== i && (m.addResults(n), m.inject.id(e[b.results]), m.write.cache(t, { html: n, results: e[b.results] }), m.save.results(e[b.results]));
          } }, cancel: { query: function query() {
            m.can.useAPI() && S.api("abort");
          } }, has: { minimumCharacters: function minimumCharacters() {
            return m.get.value().length >= g.minCharacters;
          }, results: function results() {
            return 0 !== R.length && "" != R.html();
          } }, clear: { cache: function cache(e) {
            var t = S.data(h.cache);e ? e && t && t[e] && (m.debug("Removing value from cache", e), delete t[e], S.data(h.cache, t)) : (m.debug("Clearing cache", e), S.removeData(h.cache));
          } }, read: { cache: function cache(e) {
            var t = S.data(h.cache);return !!g.cache && (m.verbose("Checking cache for generated html for query", e), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t[e] !== i && t[e]);
          } }, create: { id: function id(e, t) {
            var n,
                o = e + 1;return t !== i ? (n = String.fromCharCode(97 + t) + o, m.verbose("Creating category result id", n)) : (n = o, m.verbose("Creating result id", n)), n;
          }, results: function results() {
            0 === R.length && (R = e("<div />").addClass(p.results).appendTo(S));
          } }, inject: { result: function result(e, t, n) {
            m.verbose("Injecting result into results");var o = n !== i ? R.children().eq(n).children(y.result).eq(t) : R.children(y.result).eq(t);m.verbose("Injecting results metadata", o), o.data(h.result, e);
          }, id: function id(t) {
            m.debug("Injecting unique ids into results");var n = 0,
                o = 0;return "category" === g.type ? e.each(t, function (t, a) {
              o = 0, e.each(a.results, function (e, t) {
                var r = a.results[e];r.id === i && (r.id = m.create.id(o, n)), m.inject.result(r, o, n), o++;
              }), n++;
            }) : e.each(t, function (e, n) {
              var a = t[e];a.id === i && (a.id = m.create.id(o)), m.inject.result(a, o), o++;
            }), t;
          } }, save: { results: function results(e) {
            m.verbose("Saving current search results to metadata", e), S.data(h.results, e);
          } }, write: { cache: function cache(e, t) {
            var n = S.data(h.cache) !== i ? S.data(h.cache) : {};g.cache && (m.verbose("Writing generated html to cache", e, t), n[e] = t, S.data(h.cache, n));
          } }, addResults: function addResults(t) {
          if (e.isFunction(g.onResultsAdd) && !1 === g.onResultsAdd.call(R, t)) return m.debug("onResultsAdd callback cancelled default action"), !1;t ? (R.html(t), m.refreshResults(), g.selectFirstResult && m.select.firstResult(), m.showResults()) : m.hideResults(function () {
            R.empty();
          });
        }, showResults: function showResults(t) {
          t = e.isFunction(t) ? t : function () {}, D || !m.is.visible() && m.has.results() && (m.can.transition() ? (m.debug("Showing results with css animations"), R.transition({ animation: g.transition + " in", debug: g.debug, verbose: g.verbose, duration: g.duration, onComplete: function onComplete() {
              t();
            }, queue: !0 })) : (m.debug("Showing results with javascript"), R.stop().fadeIn(g.duration, g.easing)), g.onResultsOpen.call(R));
        }, hideResults: function hideResults(t) {
          t = e.isFunction(t) ? t : function () {}, m.is.visible() && (m.can.transition() ? (m.debug("Hiding results with css animations"), R.transition({ animation: g.transition + " out", debug: g.debug, verbose: g.verbose, duration: g.duration, onComplete: function onComplete() {
              t();
            }, queue: !0 })) : (m.debug("Hiding results with javascript"), R.stop().fadeOut(g.duration, g.easing)), g.onResultsClose.call(R));
        }, generateResults: function generateResults(t) {
          m.debug("Generating html from response", t);var n = g.templates[g.type],
              i = e.isPlainObject(t[b.results]) && !e.isEmptyObject(t[b.results]),
              o = e.isArray(t[b.results]) && t[b.results].length > 0,
              a = "";return i || o ? (g.maxResults > 0 && (i ? "standard" == g.type && m.error(x.maxResults) : t[b.results] = t[b.results].slice(0, g.maxResults)), e.isFunction(n) ? a = n(t, b) : m.error(x.noTemplate, !1)) : g.showNoResults && (a = m.displayMessage(x.noResults, "empty")), g.onResults.call(E, t), a;
        }, displayMessage: function displayMessage(e, t) {
          return t = t || "standard", m.debug("Displaying message", e, t), m.addResults(g.templates.message(e, t)), g.templates.message(e, t);
        }, setting: function setting(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, g, t);else {
            if (n === i) return g[t];g[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (n === i) return m[t];m[t] = n;
          }
        }, debug: function debug() {
          !g.silent && g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !g.silent && g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)));
        }, error: function error() {
          g.silent || (m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;g.performance && (n = (t = new Date().getTime()) - (l || t), l = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: E, "Execution Time": n })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500);
          }, display: function display() {
            var t = g.name + ":",
                n = 0;l = !1, clearTimeout(m.performance.timer), e.each(c, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", s && (t += " '" + s + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), c = [];
          } }, invoke: function invoke(t, n, o) {
          var r,
              s,
              l,
              c = O;return n = n || f, o = E || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, d ? (O === i && m.initialize(), m.invoke(u)) : (O !== i && O.invoke("destroy"), m.initialize());
    }), a !== i ? a : this;
  }, e.fn.search.settings = { name: "Search", namespace: "search", silent: !1, debug: !1, verbose: !1, performance: !0, type: "standard", minCharacters: 1, selectFirstResult: !1, apiSettings: !1, source: !1, searchOnFocus: !0, searchFields: ["title", "description"], displayField: "", searchFullText: !0, automatic: !0, hideDelay: 0, searchDelay: 200, maxResults: 7, cache: !0, showNoResults: !0, transition: "scale", duration: 200, easing: "easeOutExpo", onSelect: !1, onResultsAdd: !1, onSearchQuery: function onSearchQuery(e) {}, onResults: function onResults(e) {}, onResultsOpen: function onResultsOpen() {}, onResultsClose: function onResultsClose() {}, className: { animating: "animating", active: "active", empty: "empty", focus: "focus", hidden: "hidden", loading: "loading", results: "results", pressed: "down" }, error: { source: "Cannot search. No source used, and Semantic API module was not included", noResults: "Your search returned no results", logging: "Error in debug logging, exiting.", noEndpoint: "No search endpoint was specified", noTemplate: "A valid template name was not specified.", serverError: "There was an issue querying the server.", maxResults: "Results must be an array to use maxResults setting", method: "The method you called is not defined." }, metadata: { cache: "cache", results: "results", result: "result" }, regExp: { escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, beginsWith: "(?:s|^)" }, fields: { categories: "results", categoryName: "name", categoryResults: "results", description: "description", image: "image", price: "price", results: "results", title: "title", url: "url", action: "action", actionText: "text", actionURL: "url" }, selector: { prompt: ".prompt", searchButton: ".search.button", results: ".results", message: ".results > .message", category: ".category", result: ".result", title: ".title, .name" }, templates: { escape: function escape(e) {
        var t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" };return (/[&<>"'`]/.test(e) ? e.replace(/[&<>"'`]/g, function (e) {
            return t[e];
          }) : e
        );
      }, message: function message(e, t) {
        var n = "";return e !== i && t !== i && (n += '<div class="message ' + t + '">', n += "empty" == t ? '<div class="header">No Results</div class="header"><div class="description">' + e + '</div class="description">' : ' <div class="description">' + e + "</div>", n += "</div>"), n;
      }, category: function category(t, n) {
        var o = "";e.fn.search.settings.templates.escape;return t[n.categoryResults] !== i && (e.each(t[n.categoryResults], function (t, a) {
          a[n.results] !== i && a.results.length > 0 && (o += '<div class="category">', a[n.categoryName] !== i && (o += '<div class="name">' + a[n.categoryName] + "</div>"), e.each(a.results, function (e, t) {
            t[n.url] ? o += '<a class="result" href="' + t[n.url] + '">' : o += '<a class="result">', t[n.image] !== i && (o += '<div class="image"> <img src="' + t[n.image] + '"></div>'), o += '<div class="content">', t[n.price] !== i && (o += '<div class="price">' + t[n.price] + "</div>"), t[n.title] !== i && (o += '<div class="title">' + t[n.title] + "</div>"), t[n.description] !== i && (o += '<div class="description">' + t[n.description] + "</div>"), o += "</div>", o += "</a>";
          }), o += "</div>");
        }), t[n.action] && (o += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), o);
      }, standard: function standard(t, n) {
        var o = "";return t[n.results] !== i && (e.each(t[n.results], function (e, t) {
          t[n.url] ? o += '<a class="result" href="' + t[n.url] + '">' : o += '<a class="result">', t[n.image] !== i && (o += '<div class="image"> <img src="' + t[n.image] + '"></div>'), o += '<div class="content">', t[n.price] !== i && (o += '<div class="price">' + t[n.price] + "</div>"), t[n.title] !== i && (o += '<div class="title">' + t[n.title] + "</div>"), t[n.description] !== i && (o += '<div class="description">' + t[n.description] + "</div>"), o += "</div>", o += "</a>";
        }), t[n.action] && (o += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), o);
      } } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.shape = function (o) {
    var a,
        r = e(this),
        s = (e("body"), new Date().getTime()),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1),
        f = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
      setTimeout(e, 0);
    };return r.each(function () {
      var t,
          m,
          g,
          p = r.selector || "",
          h = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.shape.settings, o) : e.extend({}, e.fn.shape.settings),
          v = h.namespace,
          b = h.selector,
          y = h.error,
          x = h.className,
          C = "." + v,
          w = "module-" + v,
          k = e(this),
          S = k.find(b.sides),
          T = k.find(b.side),
          A = !1,
          R = this,
          P = k.data(w);g = { initialize: function initialize() {
          g.verbose("Initializing module for", R), g.set.defaultSide(), g.instantiate();
        }, instantiate: function instantiate() {
          g.verbose("Storing instance of module", g), P = g, k.data(w, P);
        }, destroy: function destroy() {
          g.verbose("Destroying previous module for", R), k.removeData(w).off(C);
        }, refresh: function refresh() {
          g.verbose("Refreshing selector cache for", R), k = e(R), S = e(this).find(b.shape), T = e(this).find(b.side);
        }, repaint: function repaint() {
          g.verbose("Forcing repaint event");(S[0] || n.createElement("div")).offsetWidth;
        }, animate: function animate(e, n) {
          g.verbose("Animating box with properties", e), n = n || function (e) {
            g.verbose("Executing animation callback"), e !== i && e.stopPropagation(), g.reset(), g.set.active();
          }, h.beforeChange.call(m[0]), g.get.transitionEvent() ? (g.verbose("Starting CSS animation"), k.addClass(x.animating), S.css(e).one(g.get.transitionEvent(), n), g.set.duration(h.duration), f(function () {
            k.addClass(x.animating), t.addClass(x.hidden);
          })) : n();
        }, queue: function queue(e) {
          g.debug("Queueing animation of", e), S.one(g.get.transitionEvent(), function () {
            g.debug("Executing queued animation"), setTimeout(function () {
              k.shape(e);
            }, 0);
          });
        }, reset: function reset() {
          g.verbose("Animating states reset"), k.removeClass(x.animating).attr("style", "").removeAttr("style"), S.attr("style", "").removeAttr("style"), T.attr("style", "").removeAttr("style").removeClass(x.hidden), m.removeClass(x.animating).attr("style", "").removeAttr("style");
        }, is: { complete: function complete() {
            return T.filter("." + x.active)[0] == m[0];
          }, animating: function animating() {
            return k.hasClass(x.animating);
          } }, set: { defaultSide: function defaultSide() {
            t = k.find("." + h.className.active), m = t.next(b.side).length > 0 ? t.next(b.side) : k.find(b.side).first(), A = !1, g.verbose("Active side set to", t), g.verbose("Next side set to", m);
          }, duration: function duration(e) {
            e = "number" == typeof (e = e || h.duration) ? e + "ms" : e, g.verbose("Setting animation duration", e), (h.duration || 0 === h.duration) && S.add(T).css({ "-webkit-transition-duration": e, "-moz-transition-duration": e, "-ms-transition-duration": e, "-o-transition-duration": e, "transition-duration": e });
          }, currentStageSize: function currentStageSize() {
            var e = k.find("." + h.className.active),
                t = e.outerWidth(!0),
                n = e.outerHeight(!0);k.css({ width: t, height: n });
          }, stageSize: function stageSize() {
            var e = k.clone().addClass(x.loading),
                t = e.find("." + h.className.active),
                n = A ? e.find(b.side).eq(A) : t.next(b.side).length > 0 ? t.next(b.side) : e.find(b.side).first(),
                i = "next" == h.width ? n.outerWidth(!0) : "initial" == h.width ? k.width() : h.width,
                o = "next" == h.height ? n.outerHeight(!0) : "initial" == h.height ? k.height() : h.height;t.removeClass(x.active), n.addClass(x.active), e.insertAfter(k), e.remove(), "auto" != h.width && (k.css("width", i + h.jitter), g.verbose("Specifying width during animation", i)), "auto" != h.height && (k.css("height", o + h.jitter), g.verbose("Specifying height during animation", o));
          }, nextSide: function nextSide(e) {
            A = e, m = T.filter(e), A = T.index(m), 0 === m.length && (g.set.defaultSide(), g.error(y.side)), g.verbose("Next side manually set to", m);
          }, active: function active() {
            g.verbose("Setting new side to active", m), T.removeClass(x.active), m.addClass(x.active), h.onChange.call(m[0]), g.set.defaultSide();
          } }, flip: { up: function up() {
            if (!g.is.complete() || g.is.animating() || h.allowRepeats) {
              if (g.is.animating()) g.queue("flip up");else {
                g.debug("Flipping up", m);var e = g.get.transform.up();g.set.stageSize(), g.stage.above(), g.animate(e);
              }
            } else g.debug("Side already visible", m);
          }, down: function down() {
            if (!g.is.complete() || g.is.animating() || h.allowRepeats) {
              if (g.is.animating()) g.queue("flip down");else {
                g.debug("Flipping down", m);var e = g.get.transform.down();g.set.stageSize(), g.stage.below(), g.animate(e);
              }
            } else g.debug("Side already visible", m);
          }, left: function left() {
            if (!g.is.complete() || g.is.animating() || h.allowRepeats) {
              if (g.is.animating()) g.queue("flip left");else {
                g.debug("Flipping left", m);var e = g.get.transform.left();g.set.stageSize(), g.stage.left(), g.animate(e);
              }
            } else g.debug("Side already visible", m);
          }, right: function right() {
            if (!g.is.complete() || g.is.animating() || h.allowRepeats) {
              if (g.is.animating()) g.queue("flip right");else {
                g.debug("Flipping right", m);var e = g.get.transform.right();g.set.stageSize(), g.stage.right(), g.animate(e);
              }
            } else g.debug("Side already visible", m);
          }, over: function over() {
            !g.is.complete() || g.is.animating() || h.allowRepeats ? g.is.animating() ? g.queue("flip over") : (g.debug("Flipping over", m), g.set.stageSize(), g.stage.behind(), g.animate(g.get.transform.over())) : g.debug("Side already visible", m);
          }, back: function back() {
            !g.is.complete() || g.is.animating() || h.allowRepeats ? g.is.animating() ? g.queue("flip back") : (g.debug("Flipping back", m), g.set.stageSize(), g.stage.behind(), g.animate(g.get.transform.back())) : g.debug("Side already visible", m);
          } }, get: { transform: { up: function up() {
              return { transform: "translateY(" + -(t.outerHeight(!0) - m.outerHeight(!0)) / 2 + "px) translateZ(" + -t.outerHeight(!0) / 2 + "px) rotateX(-90deg)" };
            }, down: function down() {
              return { transform: "translateY(" + -(t.outerHeight(!0) - m.outerHeight(!0)) / 2 + "px) translateZ(" + -t.outerHeight(!0) / 2 + "px) rotateX(90deg)" };
            }, left: function left() {
              return { transform: "translateX(" + -(t.outerWidth(!0) - m.outerWidth(!0)) / 2 + "px) translateZ(" + -t.outerWidth(!0) / 2 + "px) rotateY(90deg)" };
            }, right: function right() {
              return { transform: "translateX(" + -(t.outerWidth(!0) - m.outerWidth(!0)) / 2 + "px) translateZ(" + -t.outerWidth(!0) / 2 + "px) rotateY(-90deg)" };
            }, over: function over() {
              return { transform: "translateX(" + -(t.outerWidth(!0) - m.outerWidth(!0)) / 2 + "px) rotateY(180deg)" };
            }, back: function back() {
              return { transform: "translateX(" + -(t.outerWidth(!0) - m.outerWidth(!0)) / 2 + "px) rotateY(-180deg)" };
            } }, transitionEvent: function transitionEvent() {
            var e,
                t = n.createElement("element"),
                o = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (e in o) {
              if (t.style[e] !== i) return o[e];
            }
          }, nextSide: function nextSide() {
            return t.next(b.side).length > 0 ? t.next(b.side) : k.find(b.side).first();
          } }, stage: { above: function above() {
            var e = { origin: (t.outerHeight(!0) - m.outerHeight(!0)) / 2, depth: { active: m.outerHeight(!0) / 2, next: t.outerHeight(!0) / 2 } };g.verbose("Setting the initial animation position as above", m, e), S.css({ transform: "translateZ(-" + e.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)" }), m.addClass(x.animating).css({ top: e.origin + "px", transform: "rotateX(90deg) translateZ(" + e.depth.next + "px)" });
          }, below: function below() {
            var e = { origin: (t.outerHeight(!0) - m.outerHeight(!0)) / 2, depth: { active: m.outerHeight(!0) / 2, next: t.outerHeight(!0) / 2 } };g.verbose("Setting the initial animation position as below", m, e), S.css({ transform: "translateZ(-" + e.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)" }), m.addClass(x.animating).css({ top: e.origin + "px", transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px)" });
          }, left: function left() {
            var e = t.outerWidth(!0),
                n = m.outerWidth(!0),
                i = { origin: (e - n) / 2, depth: { active: n / 2, next: e / 2 } };g.verbose("Setting the initial animation position as left", m, i), S.css({ transform: "translateZ(-" + i.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + i.depth.active + "px)" }), m.addClass(x.animating).css({ left: i.origin + "px", transform: "rotateY(-90deg) translateZ(" + i.depth.next + "px)" });
          }, right: function right() {
            var e = t.outerWidth(!0),
                n = m.outerWidth(!0),
                i = { origin: (e - n) / 2, depth: { active: n / 2, next: e / 2 } };g.verbose("Setting the initial animation position as left", m, i), S.css({ transform: "translateZ(-" + i.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + i.depth.active + "px)" }), m.addClass(x.animating).css({ left: i.origin + "px", transform: "rotateY(90deg) translateZ(" + i.depth.next + "px)" });
          }, behind: function behind() {
            var e = t.outerWidth(!0),
                n = m.outerWidth(!0),
                i = { origin: (e - n) / 2, depth: { active: n / 2, next: e / 2 } };g.verbose("Setting the initial animation position as behind", m, i), t.css({ transform: "rotateY(0deg)" }), m.addClass(x.animating).css({ left: i.origin + "px", transform: "rotateY(-180deg)" });
          } }, setting: function setting(t, n) {
          if (g.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, h, t);else {
            if (n === i) return h[t];e.isPlainObject(h[t]) ? e.extend(!0, h[t], n) : h[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, g, t);else {
            if (n === i) return g[t];g[t] = n;
          }
        }, debug: function debug() {
          !h.silent && h.debug && (h.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), g.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !h.silent && h.verbose && h.debug && (h.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), g.verbose.apply(console, arguments)));
        }, error: function error() {
          h.silent || (g.error = Function.prototype.bind.call(console.error, console, h.name + ":"), g.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;h.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: R, "Execution Time": n })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 500);
          }, display: function display() {
            var t = h.name + ":",
                n = 0;s = !1, clearTimeout(g.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", p && (t += " '" + p + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function invoke(t, n, o) {
          var r,
              s,
              l,
              c = P;return n = n || d, o = R || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, u ? (P === i && g.initialize(), g.invoke(c)) : (P !== i && P.invoke("destroy"), g.initialize());
    }), a !== i ? a : this;
  }, e.fn.shape.settings = { name: "Shape", silent: !1, debug: !1, verbose: !1, jitter: 0, performance: !0, namespace: "shape", width: "initial", height: "initial", beforeChange: function beforeChange() {}, onChange: function onChange() {}, allowRepeats: !1, duration: !1, error: { side: "You tried to switch to a side that does not exist.", method: "The method you called is not defined" }, className: { animating: "animating", hidden: "hidden", loading: "loading", active: "active" }, selector: { sides: ".sides", side: ".side" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.sidebar = function (o) {
    var a,
        r = e(this),
        s = e(t),
        l = e(n),
        c = e("html"),
        u = e("head"),
        d = r.selector || "",
        f = new Date().getTime(),
        m = [],
        g = arguments[0],
        p = "string" == typeof g,
        h = [].slice.call(arguments, 1),
        v = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
      setTimeout(e, 0);
    };return r.each(function () {
      var r,
          b,
          y,
          x,
          C,
          w,
          k = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.sidebar.settings, o) : e.extend({}, e.fn.sidebar.settings),
          S = k.selector,
          T = k.className,
          A = k.namespace,
          R = k.regExp,
          P = k.error,
          E = "." + A,
          O = "module-" + A,
          F = e(this),
          D = e(k.context),
          q = F.children(S.sidebar),
          j = (D.children(S.fixed), D.children(S.pusher)),
          z = this,
          I = F.data(O);w = { initialize: function initialize() {
          w.debug("Initializing sidebar", o), w.create.id(), C = w.get.transitionEvent(), k.delaySetup ? v(w.setup.layout) : w.setup.layout(), v(function () {
            w.setup.cache();
          }), w.instantiate();
        }, instantiate: function instantiate() {
          w.verbose("Storing instance of module", w), I = w, F.data(O, w);
        }, create: { id: function id() {
            y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, w.verbose("Creating unique id for element", y);
          } }, destroy: function destroy() {
          w.verbose("Destroying previous module for", F), F.off(E).removeData(O), w.is.ios() && w.remove.ios(), D.off(b), s.off(b), l.off(b);
        }, event: { clickaway: function clickaway(e) {
            var t = j.find(e.target).length > 0 || j.is(e.target),
                n = D.is(e.target);t && (w.verbose("User clicked on dimmed page"), w.hide()), n && (w.verbose("User clicked on dimmable context (scaled out page)"), w.hide());
          }, touch: function touch(e) {}, containScroll: function containScroll(e) {
            z.scrollTop <= 0 && (z.scrollTop = 1), z.scrollTop + z.offsetHeight >= z.scrollHeight && (z.scrollTop = z.scrollHeight - z.offsetHeight - 1);
          }, scroll: function scroll(t) {
            0 === e(t.target).closest(S.sidebar).length && t.preventDefault();
          } }, bind: { clickaway: function clickaway() {
            w.verbose("Adding clickaway events to context", D), k.closable && D.on("click" + b, w.event.clickaway).on("touchend" + b, w.event.clickaway);
          }, scrollLock: function scrollLock() {
            k.scrollLock && (w.debug("Disabling page scroll"), s.on("DOMMouseScroll" + b, w.event.scroll)), w.verbose("Adding events to contain sidebar scroll"), l.on("touchmove" + b, w.event.touch), F.on("scroll" + E, w.event.containScroll);
          } }, unbind: { clickaway: function clickaway() {
            w.verbose("Removing clickaway events from context", D), D.off(b);
          }, scrollLock: function scrollLock() {
            w.verbose("Removing scroll lock from page"), l.off(b), s.off(b), F.off("scroll" + E);
          } }, add: { inlineCSS: function inlineCSS() {
            var t,
                n = w.cache.width || F.outerWidth(),
                i = w.cache.height || F.outerHeight(),
                o = w.is.rtl(),
                a = w.get.direction(),
                s = { left: n, right: -n, top: i, bottom: -i };o && (w.verbose("RTL detected, flipping widths"), s.left = -n, s.right = n), t = "<style>", "left" === a || "right" === a ? (w.debug("Adding CSS rules for animation distance", n), t += " .ui.visible." + a + ".sidebar ~ .fixed, .ui.visible." + a + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + s[a] + "px, 0, 0);           transform: translate3d(" + s[a] + "px, 0, 0); }") : "top" !== a && "bottom" != a || (t += " .ui.visible." + a + ".sidebar ~ .fixed, .ui.visible." + a + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + s[a] + "px, 0);           transform: translate3d(0, " + s[a] + "px, 0); }"), w.is.ie() && ("left" === a || "right" === a ? (w.debug("Adding CSS rules for animation distance", n), t += " body.pushable > .ui.visible." + a + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + s[a] + "px, 0, 0);           transform: translate3d(" + s[a] + "px, 0, 0); }") : "top" !== a && "bottom" != a || (t += " body.pushable > .ui.visible." + a + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + s[a] + "px, 0);           transform: translate3d(0, " + s[a] + "px, 0); }"), t += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"), r = e(t += "</style>").appendTo(u), w.debug("Adding sizing css to head", r);
          } }, refresh: function refresh() {
          w.verbose("Refreshing selector cache"), D = e(k.context), q = D.children(S.sidebar), j = D.children(S.pusher), D.children(S.fixed), w.clear.cache();
        }, refreshSidebars: function refreshSidebars() {
          w.verbose("Refreshing other sidebars"), q = D.children(S.sidebar);
        }, repaint: function repaint() {
          w.verbose("Forcing repaint event"), z.style.display = "none";z.offsetHeight;z.scrollTop = z.scrollTop, z.style.display = "";
        }, setup: { cache: function cache() {
            w.cache = { width: F.outerWidth(), height: F.outerHeight(), rtl: "rtl" == F.css("direction") };
          }, layout: function layout() {
            0 === D.children(S.pusher).length && (w.debug("Adding wrapper element for sidebar"), w.error(P.pusher), j = e('<div class="pusher" />'), D.children().not(S.omitted).not(q).wrapAll(j), w.refresh()), 0 !== F.nextAll(S.pusher).length && F.nextAll(S.pusher)[0] === j[0] || (w.debug("Moved sidebar to correct parent element"), w.error(P.movedSidebar, z), F.detach().prependTo(D), w.refresh()), w.clear.cache(), w.set.pushable(), w.set.direction();
          } }, attachEvents: function attachEvents(t, n) {
          var i = e(t);n = e.isFunction(w[n]) ? w[n] : w.toggle, i.length > 0 ? (w.debug("Attaching sidebar events to element", t, n), i.on("click" + E, n)) : w.error(P.notFound, t);
        }, show: function show(t) {
          if (t = e.isFunction(t) ? t : function () {}, w.is.hidden()) {
            if (w.refreshSidebars(), k.overlay && (w.error(P.overlay), k.transition = "overlay"), w.refresh(), w.othersActive()) if (w.debug("Other sidebars currently visible"), k.exclusive) {
              if ("overlay" != k.transition) return void w.hideOthers(w.show);w.hideOthers();
            } else k.transition = "overlay";w.pushPage(function () {
              t.call(z), k.onShow.call(z);
            }), k.onChange.call(z), k.onVisible.call(z);
          } else w.debug("Sidebar is already visible");
        }, hide: function hide(t) {
          t = e.isFunction(t) ? t : function () {}, (w.is.visible() || w.is.animating()) && (w.debug("Hiding sidebar", t), w.refreshSidebars(), w.pullPage(function () {
            t.call(z), k.onHidden.call(z);
          }), k.onChange.call(z), k.onHide.call(z));
        }, othersAnimating: function othersAnimating() {
          return q.not(F).filter("." + T.animating).length > 0;
        }, othersVisible: function othersVisible() {
          return q.not(F).filter("." + T.visible).length > 0;
        }, othersActive: function othersActive() {
          return w.othersVisible() || w.othersAnimating();
        }, hideOthers: function hideOthers(e) {
          var t = q.not(F).filter("." + T.visible),
              n = t.length,
              i = 0;e = e || function () {}, t.sidebar("hide", function () {
            ++i == n && e();
          });
        }, toggle: function toggle() {
          w.verbose("Determining toggled direction"), w.is.hidden() ? w.show() : w.hide();
        }, pushPage: function pushPage(t) {
          var n,
              i,
              _o,
              a = w.get.transition(),
              r = "overlay" === a || w.othersActive() ? F : j;t = e.isFunction(t) ? t : function () {}, "scale down" == k.transition && w.scrollToTop(), w.set.transition(a), w.repaint(), n = function n() {
            w.bind.clickaway(), w.add.inlineCSS(), w.set.animating(), w.set.visible();
          }, i = function i() {
            w.set.dimmed();
          }, _o = function o(e) {
            e.target == r[0] && (r.off(C + b, _o), w.remove.animating(), w.bind.scrollLock(), t.call(z));
          }, r.off(C + b), r.on(C + b, _o), v(n), k.dimPage && !w.othersVisible() && v(i);
        }, pullPage: function pullPage(t) {
          var n,
              _i,
              o = w.get.transition(),
              a = "overlay" == o || w.othersActive() ? F : j;t = e.isFunction(t) ? t : function () {}, w.verbose("Removing context push state", w.get.direction()), w.unbind.clickaway(), w.unbind.scrollLock(), n = function n() {
            w.set.transition(o), w.set.animating(), w.remove.visible(), k.dimPage && !w.othersVisible() && j.removeClass(T.dimmed);
          }, _i = function i(e) {
            e.target == a[0] && (a.off(C + b, _i), w.remove.animating(), w.remove.transition(), w.remove.inlineCSS(), ("scale down" == o || k.returnScroll && w.is.mobile()) && w.scrollBack(), t.call(z));
          }, a.off(C + b), a.on(C + b, _i), v(n);
        }, scrollToTop: function scrollToTop() {
          w.verbose("Scrolling to top of page to avoid animation issues"), x = e(t).scrollTop(), F.scrollTop(0), t.scrollTo(0, 0);
        }, scrollBack: function scrollBack() {
          w.verbose("Scrolling back to original page position"), t.scrollTo(0, x);
        }, clear: { cache: function cache() {
            w.verbose("Clearing cached dimensions"), w.cache = {};
          } }, set: { ios: function ios() {
            c.addClass(T.ios);
          }, pushed: function pushed() {
            D.addClass(T.pushed);
          }, pushable: function pushable() {
            D.addClass(T.pushable);
          }, dimmed: function dimmed() {
            j.addClass(T.dimmed);
          }, active: function active() {
            F.addClass(T.active);
          }, animating: function animating() {
            F.addClass(T.animating);
          }, transition: function transition(e) {
            e = e || w.get.transition(), F.addClass(e);
          }, direction: function direction(e) {
            e = e || w.get.direction(), F.addClass(T[e]);
          }, visible: function visible() {
            F.addClass(T.visible);
          }, overlay: function overlay() {
            F.addClass(T.overlay);
          } }, remove: { inlineCSS: function inlineCSS() {
            w.debug("Removing inline css styles", r), r && r.length > 0 && r.remove();
          }, ios: function ios() {
            c.removeClass(T.ios);
          }, pushed: function pushed() {
            D.removeClass(T.pushed);
          }, pushable: function pushable() {
            D.removeClass(T.pushable);
          }, active: function active() {
            F.removeClass(T.active);
          }, animating: function animating() {
            F.removeClass(T.animating);
          }, transition: function transition(e) {
            e = e || w.get.transition(), F.removeClass(e);
          }, direction: function direction(e) {
            e = e || w.get.direction(), F.removeClass(T[e]);
          }, visible: function visible() {
            F.removeClass(T.visible);
          }, overlay: function overlay() {
            F.removeClass(T.overlay);
          } }, get: { direction: function direction() {
            return F.hasClass(T.top) ? T.top : F.hasClass(T.right) ? T.right : F.hasClass(T.bottom) ? T.bottom : T.left;
          }, transition: function transition() {
            var e,
                t = w.get.direction();return e = w.is.mobile() ? "auto" == k.mobileTransition ? k.defaultTransition.mobile[t] : k.mobileTransition : "auto" == k.transition ? k.defaultTransition.computer[t] : k.transition, w.verbose("Determined transition", e), e;
          }, transitionEvent: function transitionEvent() {
            var e,
                t = n.createElement("element"),
                o = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (e in o) {
              if (t.style[e] !== i) return o[e];
            }
          } }, is: { ie: function ie() {
            return !t.ActiveXObject && "ActiveXObject" in t || "ActiveXObject" in t;
          }, ios: function ios() {
            var e = navigator.userAgent,
                t = e.match(R.ios),
                n = e.match(R.mobileChrome);return !(!t || n) && (w.verbose("Browser was found to be iOS", e), !0);
          }, mobile: function mobile() {
            var e = navigator.userAgent;return e.match(R.mobile) ? (w.verbose("Browser was found to be mobile", e), !0) : (w.verbose("Browser is not mobile, using regular transition", e), !1);
          }, hidden: function hidden() {
            return !w.is.visible();
          }, visible: function visible() {
            return F.hasClass(T.visible);
          }, open: function open() {
            return w.is.visible();
          }, closed: function closed() {
            return w.is.hidden();
          }, vertical: function vertical() {
            return F.hasClass(T.top);
          }, animating: function animating() {
            return D.hasClass(T.animating);
          }, rtl: function rtl() {
            return w.cache.rtl === i && (w.cache.rtl = "rtl" == F.css("direction")), w.cache.rtl;
          } }, setting: function setting(t, n) {
          if (w.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, k, t);else {
            if (n === i) return k[t];e.isPlainObject(k[t]) ? e.extend(!0, k[t], n) : k[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, w, t);else {
            if (n === i) return w[t];w[t] = n;
          }
        }, debug: function debug() {
          !k.silent && k.debug && (k.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, k.name + ":"), w.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !k.silent && k.verbose && k.debug && (k.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, k.name + ":"), w.verbose.apply(console, arguments)));
        }, error: function error() {
          k.silent || (w.error = Function.prototype.bind.call(console.error, console, k.name + ":"), w.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;k.performance && (n = (t = new Date().getTime()) - (f || t), f = t, m.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: z, "Execution Time": n })), clearTimeout(w.performance.timer), w.performance.timer = setTimeout(w.performance.display, 500);
          }, display: function display() {
            var t = k.name + ":",
                n = 0;f = !1, clearTimeout(w.performance.timer), e.each(m, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", d && (t += " '" + d + "'"), (console.group !== i || console.table !== i) && m.length > 0 && (console.groupCollapsed(t), console.table ? console.table(m) : e.each(m, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), m = [];
          } }, invoke: function invoke(t, n, o) {
          var r,
              s,
              l,
              c = I;return n = n || h, o = z || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (w.error(P.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, p ? (I === i && w.initialize(), w.invoke(g)) : (I !== i && w.invoke("destroy"), w.initialize());
    }), a !== i ? a : this;
  }, e.fn.sidebar.settings = { name: "Sidebar", namespace: "sidebar", silent: !1, debug: !1, verbose: !1, performance: !0, transition: "auto", mobileTransition: "auto", defaultTransition: { computer: { left: "uncover", right: "uncover", top: "overlay", bottom: "overlay" }, mobile: { left: "uncover", right: "uncover", top: "overlay", bottom: "overlay" } }, context: "body", exclusive: !1, closable: !0, dimPage: !0, scrollLock: !1, returnScroll: !1, delaySetup: !1, duration: 500, onChange: function onChange() {}, onShow: function onShow() {}, onHide: function onHide() {}, onHidden: function onHidden() {}, onVisible: function onVisible() {}, className: { active: "active", animating: "animating", dimmed: "dimmed", ios: "ios", pushable: "pushable", pushed: "pushed", right: "right", top: "top", left: "left", bottom: "bottom", visible: "visible" }, selector: { fixed: ".fixed", omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed", pusher: ".pusher", sidebar: ".ui.sidebar" }, regExp: { ios: /(iPad|iPhone|iPod)/g, mobileChrome: /(CriOS)/g, mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g }, error: { method: "The method you called is not defined.", pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element", movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag", overlay: "The overlay setting is no longer supported, use animation: overlay", notFound: "There were no elements that matched the specified selector" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.sticky = function (o) {
    var a,
        r = e(this),
        s = r.selector || "",
        l = new Date().getTime(),
        c = [],
        u = arguments[0],
        d = "string" == typeof u,
        f = [].slice.call(arguments, 1);return r.each(function () {
      var r,
          m,
          g,
          p,
          h,
          v = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.sticky.settings, o) : e.extend({}, e.fn.sticky.settings),
          b = v.className,
          y = v.namespace,
          x = v.error,
          C = "." + y,
          w = "module-" + y,
          k = e(this),
          S = e(t),
          T = e(v.scrollContext),
          A = (k.selector, k.data(w)),
          R = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
        setTimeout(e, 0);
      },
          P = this;h = { initialize: function initialize() {
          h.determineContainer(), h.determineContext(), h.verbose("Initializing sticky", v, r), h.save.positions(), h.checkErrors(), h.bind.events(), v.observeChanges && h.observeChanges(), h.instantiate();
        }, instantiate: function instantiate() {
          h.verbose("Storing instance of module", h), A = h, k.data(w, h);
        }, destroy: function destroy() {
          h.verbose("Destroying previous instance"), h.reset(), g && g.disconnect(), p && p.disconnect(), S.off("load" + C, h.event.load).off("resize" + C, h.event.resize), T.off("scrollchange" + C, h.event.scrollchange), k.removeData(w);
        }, observeChanges: function observeChanges() {
          "MutationObserver" in t && (g = new MutationObserver(h.event.documentChanged), p = new MutationObserver(h.event.changed), g.observe(n, { childList: !0, subtree: !0 }), p.observe(P, { childList: !0, subtree: !0 }), p.observe(m[0], { childList: !0, subtree: !0 }), h.debug("Setting up mutation observer", p));
        }, determineContainer: function determineContainer() {
          r = v.container ? e(v.container) : k.offsetParent();
        }, determineContext: function determineContext() {
          0 !== (m = v.context ? e(v.context) : r).length || h.error(x.invalidContext, v.context, k);
        }, checkErrors: function checkErrors() {
          if (h.is.hidden() && h.error(x.visible, k), h.cache.element.height > h.cache.context.height) return h.reset(), void h.error(x.elementSize, k);
        }, bind: { events: function events() {
            S.on("load" + C, h.event.load).on("resize" + C, h.event.resize), T.off("scroll" + C).on("scroll" + C, h.event.scroll).on("scrollchange" + C, h.event.scrollchange);
          } }, event: { changed: function changed(e) {
            clearTimeout(h.timer), h.timer = setTimeout(function () {
              h.verbose("DOM tree modified, updating sticky menu", e), h.refresh();
            }, 100);
          }, documentChanged: function documentChanged(t) {
            [].forEach.call(t, function (t) {
              t.removedNodes && [].forEach.call(t.removedNodes, function (t) {
                (t == P || e(t).find(P).length > 0) && (h.debug("Element removed from DOM, tearing down events"), h.destroy());
              });
            });
          }, load: function load() {
            h.verbose("Page contents finished loading"), R(h.refresh);
          }, resize: function resize() {
            h.verbose("Window resized"), R(h.refresh);
          }, scroll: function scroll() {
            R(function () {
              T.triggerHandler("scrollchange" + C, T.scrollTop());
            });
          }, scrollchange: function scrollchange(e, t) {
            h.stick(t), v.onScroll.call(P);
          } }, refresh: function refresh(e) {
          h.reset(), v.context || h.determineContext(), e && h.determineContainer(), h.save.positions(), h.stick(), v.onReposition.call(P);
        }, supports: { sticky: function sticky() {
            var t = e("<div/>");t[0];return t.addClass(b.supported), t.css("position").match("sticky");
          } }, save: { lastScroll: function lastScroll(e) {
            h.lastScroll = e;
          }, elementScroll: function elementScroll(e) {
            h.elementScroll = e;
          }, positions: function positions() {
            var e = { height: T.height() },
                t = { margin: { top: parseInt(k.css("margin-top"), 10), bottom: parseInt(k.css("margin-bottom"), 10) }, offset: k.offset(), width: k.outerWidth(), height: k.outerHeight() },
                n = { offset: m.offset(), height: m.outerHeight() };r.outerHeight();h.is.standardScroll() || (h.debug("Non-standard scroll. Removing scroll offset from element offset"), e.top = T.scrollTop(), e.left = T.scrollLeft(), t.offset.top += e.top, n.offset.top += e.top, t.offset.left += e.left, n.offset.left += e.left), h.cache = { fits: t.height + v.offset <= e.height, sameHeight: t.height == n.height, scrollContext: { height: e.height }, element: { margin: t.margin, top: t.offset.top - t.margin.top, left: t.offset.left, width: t.width, height: t.height, bottom: t.offset.top + t.height }, context: { top: n.offset.top, height: n.height, bottom: n.offset.top + n.height } }, h.set.containerSize(), h.stick(), h.debug("Caching element positions", h.cache);
          } }, get: { direction: function direction(e) {
            var t = "down";return e = e || T.scrollTop(), h.lastScroll !== i && (h.lastScroll < e ? t = "down" : h.lastScroll > e && (t = "up")), t;
          }, scrollChange: function scrollChange(e) {
            return e = e || T.scrollTop(), h.lastScroll ? e - h.lastScroll : 0;
          }, currentElementScroll: function currentElementScroll() {
            return h.elementScroll ? h.elementScroll : h.is.top() ? Math.abs(parseInt(k.css("top"), 10)) || 0 : Math.abs(parseInt(k.css("bottom"), 10)) || 0;
          }, elementScroll: function elementScroll(e) {
            e = e || T.scrollTop();var t = h.cache.element,
                n = h.cache.scrollContext,
                i = h.get.scrollChange(e),
                o = t.height - n.height + v.offset,
                a = h.get.currentElementScroll(),
                r = a + i;return a = h.cache.fits || r < 0 ? 0 : r > o ? o : r;
          } }, remove: { lastScroll: function lastScroll() {
            delete h.lastScroll;
          }, elementScroll: function elementScroll(e) {
            delete h.elementScroll;
          }, minimumSize: function minimumSize() {
            r.css("min-height", "");
          }, offset: function offset() {
            k.css("margin-top", "");
          } }, set: { offset: function offset() {
            h.verbose("Setting offset on element", v.offset), k.css("margin-top", v.offset);
          }, containerSize: function containerSize() {
            var e = r.get(0).tagName;"HTML" === e || "body" == e ? h.determineContainer() : Math.abs(r.outerHeight() - h.cache.context.height) > v.jitter && (h.debug("Context has padding, specifying exact height for container", h.cache.context.height), r.css({ height: h.cache.context.height }));
          }, minimumSize: function minimumSize() {
            var e = h.cache.element;r.css("min-height", e.height);
          }, scroll: function scroll(e) {
            h.debug("Setting scroll on element", e), h.elementScroll != e && (h.is.top() && k.css("bottom", "").css("top", -e), h.is.bottom() && k.css("top", "").css("bottom", e));
          }, size: function size() {
            0 !== h.cache.element.height && 0 !== h.cache.element.width && (P.style.setProperty("width", h.cache.element.width + "px", "important"), P.style.setProperty("height", h.cache.element.height + "px", "important"));
          } }, is: { standardScroll: function standardScroll() {
            return T[0] == t;
          }, top: function top() {
            return k.hasClass(b.top);
          }, bottom: function bottom() {
            return k.hasClass(b.bottom);
          }, initialPosition: function initialPosition() {
            return !h.is.fixed() && !h.is.bound();
          }, hidden: function hidden() {
            return !k.is(":visible");
          }, bound: function bound() {
            return k.hasClass(b.bound);
          }, fixed: function fixed() {
            return k.hasClass(b.fixed);
          } }, stick: function stick(e) {
          var t = e || T.scrollTop(),
              n = h.cache,
              i = n.fits,
              o = n.sameHeight,
              a = n.element,
              r = n.scrollContext,
              s = n.context,
              l = h.is.bottom() && v.pushing ? v.bottomOffset : v.offset,
              c = (e = { top: t + l, bottom: t + l + r.height }, h.get.direction(e.top), i ? 0 : h.get.elementScroll(e.top)),
              u = !i;0 !== a.height && !o && (h.is.initialPosition() ? e.top >= s.bottom ? (h.debug("Initial element position is bottom of container"), h.bindBottom()) : e.top > a.top && (a.height + e.top - c >= s.bottom ? (h.debug("Initial element position is bottom of container"), h.bindBottom()) : (h.debug("Initial element position is fixed"), h.fixTop())) : h.is.fixed() ? h.is.top() ? e.top <= a.top ? (h.debug("Fixed element reached top of container"), h.setInitialPosition()) : a.height + e.top - c >= s.bottom ? (h.debug("Fixed element reached bottom of container"), h.bindBottom()) : u && (h.set.scroll(c), h.save.lastScroll(e.top), h.save.elementScroll(c)) : h.is.bottom() && (e.bottom - a.height <= a.top ? (h.debug("Bottom fixed rail has reached top of container"), h.setInitialPosition()) : e.bottom >= s.bottom ? (h.debug("Bottom fixed rail has reached bottom of container"), h.bindBottom()) : u && (h.set.scroll(c), h.save.lastScroll(e.top), h.save.elementScroll(c))) : h.is.bottom() && (e.top <= a.top ? (h.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"), h.setInitialPosition()) : v.pushing ? h.is.bound() && e.bottom <= s.bottom && (h.debug("Fixing bottom attached element to bottom of browser."), h.fixBottom()) : h.is.bound() && e.top <= s.bottom - a.height && (h.debug("Fixing bottom attached element to top of browser."), h.fixTop())));
        }, bindTop: function bindTop() {
          h.debug("Binding element to top of parent container"), h.remove.offset(), k.css({ left: "", top: "", marginBottom: "" }).removeClass(b.fixed).removeClass(b.bottom).addClass(b.bound).addClass(b.top), v.onTop.call(P), v.onUnstick.call(P);
        }, bindBottom: function bindBottom() {
          h.debug("Binding element to bottom of parent container"), h.remove.offset(), k.css({ left: "", top: "" }).removeClass(b.fixed).removeClass(b.top).addClass(b.bound).addClass(b.bottom), v.onBottom.call(P), v.onUnstick.call(P);
        }, setInitialPosition: function setInitialPosition() {
          h.debug("Returning to initial position"), h.unfix(), h.unbind();
        }, fixTop: function fixTop() {
          h.debug("Fixing element to top of page"), v.setSize && h.set.size(), h.set.minimumSize(), h.set.offset(), k.css({ left: h.cache.element.left, bottom: "", marginBottom: "" }).removeClass(b.bound).removeClass(b.bottom).addClass(b.fixed).addClass(b.top), v.onStick.call(P);
        }, fixBottom: function fixBottom() {
          h.debug("Sticking element to bottom of page"), v.setSize && h.set.size(), h.set.minimumSize(), h.set.offset(), k.css({ left: h.cache.element.left, bottom: "", marginBottom: "" }).removeClass(b.bound).removeClass(b.top).addClass(b.fixed).addClass(b.bottom), v.onStick.call(P);
        }, unbind: function unbind() {
          h.is.bound() && (h.debug("Removing container bound position on element"), h.remove.offset(), k.removeClass(b.bound).removeClass(b.top).removeClass(b.bottom));
        }, unfix: function unfix() {
          h.is.fixed() && (h.debug("Removing fixed position on element"), h.remove.minimumSize(), h.remove.offset(), k.removeClass(b.fixed).removeClass(b.top).removeClass(b.bottom), v.onUnstick.call(P));
        }, reset: function reset() {
          h.debug("Resetting elements position"), h.unbind(), h.unfix(), h.resetCSS(), h.remove.offset(), h.remove.lastScroll();
        }, resetCSS: function resetCSS() {
          k.css({ width: "", height: "" }), r.css({ height: "" });
        }, setting: function setting(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, v, t);else {
            if (n === i) return v[t];v[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, h, t);else {
            if (n === i) return h[t];h[t] = n;
          }
        }, debug: function debug() {
          !v.silent && v.debug && (v.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), h.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !v.silent && v.verbose && v.debug && (v.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), h.verbose.apply(console, arguments)));
        }, error: function error() {
          v.silent || (h.error = Function.prototype.bind.call(console.error, console, v.name + ":"), h.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;v.performance && (n = (t = new Date().getTime()) - (l || t), l = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: P, "Execution Time": n })), clearTimeout(h.performance.timer), h.performance.timer = setTimeout(h.performance.display, 0);
          }, display: function display() {
            var t = v.name + ":",
                n = 0;l = !1, clearTimeout(h.performance.timer), e.each(c, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), c = [];
          } }, invoke: function invoke(t, n, o) {
          var r,
              s,
              l,
              c = A;return n = n || f, o = P || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, d ? (A === i && h.initialize(), h.invoke(u)) : (A !== i && A.invoke("destroy"), h.initialize());
    }), a !== i ? a : this;
  }, e.fn.sticky.settings = { name: "Sticky", namespace: "sticky", silent: !1, debug: !1, verbose: !0, performance: !0, pushing: !1, context: !1, container: !1, scrollContext: t, offset: 0, bottomOffset: 0, jitter: 5, setSize: !0, observeChanges: !1, onReposition: function onReposition() {}, onScroll: function onScroll() {}, onStick: function onStick() {}, onUnstick: function onUnstick() {}, onTop: function onTop() {}, onBottom: function onBottom() {}, error: { container: "Sticky element must be inside a relative container", visible: "Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.", method: "The method you called is not defined.", invalidContext: "Context specified does not exist", elementSize: "Sticky element is larger than its container, cannot create sticky." }, className: { bound: "bound", fixed: "fixed", supported: "native", top: "top", bottom: "bottom" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.tab = function (o) {
    var a,
        r = e.isFunction(this) ? e(t) : e(this),
        s = r.selector || "",
        l = new Date().getTime(),
        c = [],
        u = arguments[0],
        d = "string" == typeof u,
        f = [].slice.call(arguments, 1),
        m = !1;return r.each(function () {
      var g,
          p,
          h,
          v,
          b,
          y,
          x = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.tab.settings, o) : e.extend({}, e.fn.tab.settings),
          C = x.className,
          w = x.metadata,
          k = x.selector,
          S = x.error,
          T = "." + x.namespace,
          A = "module-" + x.namespace,
          R = e(this),
          P = {},
          E = !0,
          O = 0,
          F = this,
          D = R.data(A);b = { initialize: function initialize() {
          b.debug("Initializing tab menu item", R), b.fix.callbacks(), b.determineTabs(), b.debug("Determining tabs", x.context, p), x.auto && b.set.auto(), b.bind.events(), x.history && !m && (b.initializeHistory(), m = !0), b.instantiate();
        }, instantiate: function instantiate() {
          b.verbose("Storing instance of module", b), D = b, R.data(A, b);
        }, destroy: function destroy() {
          b.debug("Destroying tabs", R), R.removeData(A).off(T);
        }, bind: { events: function events() {
            e.isWindow(F) || (b.debug("Attaching tab activation events to element", R), R.on("click" + T, b.event.click));
          } }, determineTabs: function determineTabs() {
          var t;"parent" === x.context ? (R.closest(k.ui).length > 0 ? (t = R.closest(k.ui), b.verbose("Using closest UI element as parent", t)) : t = R, g = t.parent(), b.verbose("Determined parent element for creating context", g)) : x.context ? (g = e(x.context), b.verbose("Using selector for tab context", x.context, g)) : g = e("body"), x.childrenOnly ? (p = g.children(k.tabs), b.debug("Searching tab context children for tabs", g, p)) : (p = g.find(k.tabs), b.debug("Searching tab context for tabs", g, p));
        }, fix: { callbacks: function callbacks() {
            e.isPlainObject(o) && (o.onTabLoad || o.onTabInit) && (o.onTabLoad && (o.onLoad = o.onTabLoad, delete o.onTabLoad, b.error(S.legacyLoad, o.onLoad)), o.onTabInit && (o.onFirstLoad = o.onTabInit, delete o.onTabInit, b.error(S.legacyInit, o.onFirstLoad)), x = e.extend(!0, {}, e.fn.tab.settings, o));
          } }, initializeHistory: function initializeHistory() {
          if (b.debug("Initializing page state"), e.address === i) return b.error(S.state), !1;if ("state" == x.historyType) {
            if (b.debug("Using HTML5 to manage state"), !1 === x.path) return b.error(S.path), !1;e.address.history(!0).state(x.path);
          }e.address.bind("change", b.event.history.change);
        }, event: { click: function click(t) {
            var n = e(this).data(w.tab);n !== i ? (x.history ? (b.verbose("Updating page state", t), e.address.value(n)) : (b.verbose("Changing tab", t), b.changeTab(n)), t.preventDefault()) : b.debug("No tab specified");
          }, history: { change: function change(t) {
              var n = t.pathNames.join("/") || b.get.initialPath(),
                  o = x.templates.determineTitle(n) || !1;b.performance.display(), b.debug("History change event", n, t), y = t, n !== i && b.changeTab(n), o && e.address.title(o);
            } } }, refresh: function refresh() {
          h && (b.debug("Refreshing tab", h), b.changeTab(h));
        }, cache: { read: function read(e) {
            return e !== i && P[e];
          }, add: function add(e, t) {
            e = e || h, b.debug("Adding cached content for", e), P[e] = t;
          }, remove: function remove(e) {
            e = e || h, b.debug("Removing cached content for", e), delete P[e];
          } }, set: { auto: function auto() {
            var t = "string" == typeof x.path ? x.path.replace(/\/$/, "") + "/{$tab}" : "/{$tab}";b.verbose("Setting up automatic tab retrieval from server", t), e.isPlainObject(x.apiSettings) ? x.apiSettings.url = t : x.apiSettings = { url: t };
          }, loading: function loading(e) {
            var t = b.get.tabElement(e);t.hasClass(C.loading) || (b.verbose("Setting loading state for", t), t.addClass(C.loading).siblings(p).removeClass(C.active + " " + C.loading), t.length > 0 && x.onRequest.call(t[0], e));
          }, state: function state(t) {
            e.address.value(t);
          } }, changeTab: function changeTab(n) {
          var i = t.history && t.history.pushState && x.ignoreFirstLoad && E,
              o = x.auto || e.isPlainObject(x.apiSettings),
              a = o && !i ? b.utilities.pathToArray(n) : b.get.defaultPathArray(n);n = b.utilities.arrayToPath(a), e.each(a, function (t, r) {
            var s,
                l,
                c,
                u,
                d = a.slice(0, t + 1),
                f = b.utilities.arrayToPath(d),
                m = b.is.tab(f),
                p = t + 1 == a.length,
                k = b.get.tabElement(f);if (b.verbose("Looking for tab", r), m) {
              if (b.verbose("Tab was found", r), h = f, v = b.utilities.filterArray(a, d), p ? u = !0 : (l = a.slice(0, t + 2), c = b.utilities.arrayToPath(l), (u = !b.is.tab(c)) && b.verbose("Tab parameters found", l)), u && o) return i ? (b.debug("Ignoring remote content on first tab load", f), E = !1, b.cache.add(n, k.html()), b.activate.all(f), x.onFirstLoad.call(k[0], f, v, y), x.onLoad.call(k[0], f, v, y)) : (b.activate.navigation(f), b.fetch.content(f, n)), !1;b.debug("Opened local tab", f), b.activate.all(f), b.cache.read(f) || (b.cache.add(f, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(k[0], f, v, y)), x.onLoad.call(k[0], f, v, y);
            } else {
              if (-1 != n.search("/") || "" === n) return b.error(S.missingTab, R, g, f), !1;if (f = (s = e("#" + n + ', a[name="' + n + '"]')).closest("[data-tab]").data(w.tab), k = b.get.tabElement(f), s && s.length > 0 && f) return b.debug("Anchor link used, opening parent tab", k, s), k.hasClass(C.active) || setTimeout(function () {
                b.scrollTo(s);
              }, 0), b.activate.all(f), b.cache.read(f) || (b.cache.add(f, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(k[0], f, v, y)), x.onLoad.call(k[0], f, v, y), !1;
            }
          });
        }, scrollTo: function scrollTo(t) {
          var i = !!(t && t.length > 0) && t.offset().top;!1 !== i && (b.debug("Forcing scroll to an in-page link in a hidden tab", i, t), e(n).scrollTop(i));
        }, update: { content: function content(t, n, o) {
            var a = b.get.tabElement(t),
                r = a[0];o = o !== i ? o : x.evaluateScripts, "string" == typeof x.cacheType && "dom" == x.cacheType.toLowerCase() && "string" != typeof n ? a.empty().append(e(n).clone(!0)) : o ? (b.debug("Updating HTML and evaluating inline scripts", t, n), a.html(n)) : (b.debug("Updating HTML", t, n), r.innerHTML = n);
          } }, fetch: { content: function content(t, n) {
            var o,
                a,
                r = b.get.tabElement(t),
                s = { dataType: "html", encodeParameters: !1, on: "now", cache: x.alwaysRefresh, headers: { "X-Remote": !0 }, onSuccess: function onSuccess(e) {
                "response" == x.cacheType && b.cache.add(n, e), b.update.content(t, e), t == h ? (b.debug("Content loaded", t), b.activate.tab(t)) : b.debug("Content loaded in background", t), x.onFirstLoad.call(r[0], t, v, y), x.onLoad.call(r[0], t, v, y), x.loadOnce ? b.cache.add(n, !0) : "string" == typeof x.cacheType && "dom" == x.cacheType.toLowerCase() && r.children().length > 0 ? setTimeout(function () {
                  var e = r.children().clone(!0);e = e.not("script"), b.cache.add(n, e);
                }, 0) : b.cache.add(n, r.html());
              }, urlData: { tab: n } },
                l = r.api("get request") || !1,
                c = l && "pending" === l.state();n = n || t, a = b.cache.read(n), x.cache && a ? (b.activate.tab(t), b.debug("Adding cached content", n), x.loadOnce || ("once" == x.evaluateScripts ? b.update.content(t, a, !1) : b.update.content(t, a)), x.onLoad.call(r[0], t, v, y)) : c ? (b.set.loading(t), b.debug("Content is already loading", n)) : e.api !== i ? (o = e.extend(!0, {}, x.apiSettings, s), b.debug("Retrieving remote content", n, o), b.set.loading(t), r.api(o)) : b.error(S.api);
          } }, activate: { all: function all(e) {
            b.activate.tab(e), b.activate.navigation(e);
          }, tab: function tab(e) {
            var t = b.get.tabElement(e),
                n = "siblings" == x.deactivate ? t.siblings(p) : p.not(t),
                i = t.hasClass(C.active);b.verbose("Showing tab content for", t), i || (t.addClass(C.active), n.removeClass(C.active + " " + C.loading), t.length > 0 && x.onVisible.call(t[0], e));
          }, navigation: function navigation(e) {
            var t = b.get.navElement(e),
                n = "siblings" == x.deactivate ? t.siblings(r) : r.not(t),
                i = t.hasClass(C.active);b.verbose("Activating tab navigation for", t, e), i || (t.addClass(C.active), n.removeClass(C.active + " " + C.loading));
          } }, deactivate: { all: function all() {
            b.deactivate.navigation(), b.deactivate.tabs();
          }, navigation: function navigation() {
            r.removeClass(C.active);
          }, tabs: function tabs() {
            p.removeClass(C.active + " " + C.loading);
          } }, is: { tab: function tab(e) {
            return e !== i && b.get.tabElement(e).length > 0;
          } }, get: { initialPath: function initialPath() {
            return r.eq(0).data(w.tab) || p.eq(0).data(w.tab);
          }, path: function path() {
            return e.address.value();
          }, defaultPathArray: function defaultPathArray(e) {
            return b.utilities.pathToArray(b.get.defaultPath(e));
          }, defaultPath: function defaultPath(e) {
            var t = r.filter("[data-" + w.tab + '^="' + e + '/"]').eq(0).data(w.tab) || !1;if (t) {
              if (b.debug("Found default tab", t), O < x.maxDepth) return O++, b.get.defaultPath(t);b.error(S.recursion);
            } else b.debug("No default tabs found for", e, p);return O = 0, e;
          }, navElement: function navElement(e) {
            return e = e || h, r.filter("[data-" + w.tab + '="' + e + '"]');
          }, tabElement: function tabElement(e) {
            var t, n, i, o;return e = e || h, i = b.utilities.pathToArray(e), o = b.utilities.last(i), t = p.filter("[data-" + w.tab + '="' + e + '"]'), n = p.filter("[data-" + w.tab + '="' + o + '"]'), t.length > 0 ? t : n;
          }, tab: function tab() {
            return h;
          } }, utilities: { filterArray: function filterArray(t, n) {
            return e.grep(t, function (t) {
              return -1 == e.inArray(t, n);
            });
          }, last: function last(t) {
            return !!e.isArray(t) && t[t.length - 1];
          }, pathToArray: function pathToArray(e) {
            return e === i && (e = h), "string" == typeof e ? e.split("/") : [e];
          }, arrayToPath: function arrayToPath(t) {
            return !!e.isArray(t) && t.join("/");
          } }, setting: function setting(t, n) {
          if (b.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, x, t);else {
            if (n === i) return x[t];e.isPlainObject(x[t]) ? e.extend(!0, x[t], n) : x[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, b, t);else {
            if (n === i) return b[t];b[t] = n;
          }
        }, debug: function debug() {
          !x.silent && x.debug && (x.performance ? b.performance.log(arguments) : (b.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), b.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !x.silent && x.verbose && x.debug && (x.performance ? b.performance.log(arguments) : (b.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), b.verbose.apply(console, arguments)));
        }, error: function error() {
          x.silent || (b.error = Function.prototype.bind.call(console.error, console, x.name + ":"), b.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;x.performance && (n = (t = new Date().getTime()) - (l || t), l = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: F, "Execution Time": n })), clearTimeout(b.performance.timer), b.performance.timer = setTimeout(b.performance.display, 500);
          }, display: function display() {
            var t = x.name + ":",
                n = 0;l = !1, clearTimeout(b.performance.timer), e.each(c, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), c = [];
          } }, invoke: function invoke(t, n, o) {
          var r,
              s,
              l,
              c = D;return n = n || f, o = F || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (b.error(S.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, d ? (D === i && b.initialize(), b.invoke(u)) : (D !== i && D.invoke("destroy"), b.initialize());
    }), a !== i ? a : this;
  }, e.tab = function () {
    e(t).tab.apply(this, arguments);
  }, e.fn.tab.settings = { name: "Tab", namespace: "tab", silent: !1, debug: !1, verbose: !1, performance: !0, auto: !1, history: !1, historyType: "hash", path: !1, context: !1, childrenOnly: !1, maxDepth: 25, deactivate: "siblings", alwaysRefresh: !1, cache: !0, loadOnce: !1, cacheType: "response", ignoreFirstLoad: !1, apiSettings: !1, evaluateScripts: "once", onFirstLoad: function onFirstLoad(e, t, n) {}, onLoad: function onLoad(e, t, n) {}, onVisible: function onVisible(e, t, n) {}, onRequest: function onRequest(e, t, n) {}, templates: { determineTitle: function determineTitle(e) {} }, error: { api: "You attempted to load content without API module", method: "The method you called is not defined", missingTab: "Activated tab cannot be found. Tabs are case-sensitive.", noContent: "The tab you specified is missing a content url.", path: "History enabled, but no path was specified", recursion: "Max recursive depth reached", legacyInit: "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.", legacyLoad: "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code", state: "History requires Asual's Address library <https://github.com/asual/jquery-address>" }, metadata: { tab: "tab", loaded: "loaded", promise: "promise" }, className: { loading: "loading", active: "active" }, selector: { tabs: ".ui.tab", ui: ".ui" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.transition = function () {
    var o,
        a = e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments,
        u = c[0],
        d = [].slice.call(arguments, 1),
        f = "string" == typeof u;t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;return a.each(function (t) {
      var m,
          g,
          p,
          h,
          v,
          b,
          y,
          x,
          C,
          w = e(this),
          k = this;(C = { initialize: function initialize() {
          m = C.get.settings.apply(k, c), h = m.className, p = m.error, v = m.metadata, x = "." + m.namespace, y = "module-" + m.namespace, g = w.data(y) || C, b = C.get.animationEndEvent(), f && (f = C.invoke(u)), !1 === f && (C.verbose("Converted arguments into settings object", m), m.interval ? C.delay(m.animate) : C.animate(), C.instantiate());
        }, instantiate: function instantiate() {
          C.verbose("Storing instance of module", C), g = C, w.data(y, g);
        }, destroy: function destroy() {
          C.verbose("Destroying previous module for", k), w.removeData(y);
        }, refresh: function refresh() {
          C.verbose("Refreshing display type on next animation"), delete C.displayType;
        }, forceRepaint: function forceRepaint() {
          C.verbose("Forcing element repaint");var e = w.parent(),
              t = w.next();0 === t.length ? w.detach().appendTo(e) : w.detach().insertBefore(t);
        }, repaint: function repaint() {
          C.verbose("Repainting element");k.offsetWidth;
        }, delay: function delay(e) {
          var n,
              o = C.get.animationDirection();o || (o = C.can.transition() ? C.get.direction() : "static"), e = e !== i ? e : m.interval, n = "auto" == m.reverse && o == h.outward || 1 == m.reverse ? (a.length - t) * m.interval : t * m.interval, C.debug("Delaying animation by", n), setTimeout(C.animate, n);
        }, animate: function animate(e) {
          if (m = e || m, !C.is.supported()) return C.error(p.support), !1;if (C.debug("Preparing animation", m.animation), C.is.animating()) {
            if (m.queue) return !m.allowRepeats && C.has.direction() && C.is.occurring() && !0 !== C.queuing ? C.debug("Animation is currently occurring, preventing queueing same animation", m.animation) : C.queue(m.animation), !1;if (!m.allowRepeats && C.is.occurring()) return C.debug("Animation is already occurring, will not execute repeated animation", m.animation), !1;C.debug("New animation started, completing previous early", m.animation), g.complete();
          }C.can.animate() ? C.set.animating(m.animation) : C.error(p.noAnimation, m.animation, k);
        }, reset: function reset() {
          C.debug("Resetting animation to beginning conditions"), C.remove.animationCallbacks(), C.restore.conditions(), C.remove.animating();
        }, queue: function queue(e) {
          C.debug("Queueing animation of", e), C.queuing = !0, w.one(b + ".queue" + x, function () {
            C.queuing = !1, C.repaint(), C.animate.apply(this, m);
          });
        }, complete: function complete(e) {
          C.debug("Animation complete", m.animation), C.remove.completeCallback(), C.remove.failSafe(), C.is.looping() || (C.is.outward() ? (C.verbose("Animation is outward, hiding element"), C.restore.conditions(), C.hide()) : C.is.inward() ? (C.verbose("Animation is outward, showing element"), C.restore.conditions(), C.show()) : (C.verbose("Static animation completed"), C.restore.conditions(), m.onComplete.call(k)));
        }, force: { visible: function visible() {
            var e = w.attr("style"),
                t = C.get.userStyle(),
                n = C.get.displayType(),
                o = t + "display: " + n + " !important;",
                a = w.css("display"),
                r = e === i || "" === e;a !== n ? (C.verbose("Overriding default display to show element", n), w.attr("style", o)) : r && w.removeAttr("style");
          }, hidden: function hidden() {
            var e = w.attr("style"),
                t = w.css("display"),
                n = e === i || "" === e;"none" === t || C.is.hidden() ? n && w.removeAttr("style") : (C.verbose("Overriding default display to hide element"), w.css("display", "none"));
          } }, has: { direction: function direction(t) {
            var n = !1;return "string" == typeof (t = t || m.animation) && (t = t.split(" "), e.each(t, function (e, t) {
              t !== h.inward && t !== h.outward || (n = !0);
            })), n;
          }, inlineDisplay: function inlineDisplay() {
            var t = w.attr("style") || "";return e.isArray(t.match(/display.*?;/, ""));
          } }, set: { animating: function animating(e) {
            var t;C.remove.completeCallback(), e = e || m.animation, t = C.get.animationClass(e), C.save.animation(t), C.force.visible(), C.remove.hidden(), C.remove.direction(), C.start.animation(t);
          }, duration: function duration(e, t) {
            ((t = "number" == typeof (t = t || m.duration) ? t + "ms" : t) || 0 === t) && (C.verbose("Setting animation duration", t), w.css({ "animation-duration": t }));
          }, direction: function direction(e) {
            (e = e || C.get.direction()) == h.inward ? C.set.inward() : C.set.outward();
          }, looping: function looping() {
            C.debug("Transition set to loop"), w.addClass(h.looping);
          }, hidden: function hidden() {
            w.addClass(h.transition).addClass(h.hidden);
          }, inward: function inward() {
            C.debug("Setting direction to inward"), w.removeClass(h.outward).addClass(h.inward);
          }, outward: function outward() {
            C.debug("Setting direction to outward"), w.removeClass(h.inward).addClass(h.outward);
          }, visible: function visible() {
            w.addClass(h.transition).addClass(h.visible);
          } }, start: { animation: function animation(e) {
            e = e || C.get.animationClass(), C.debug("Starting tween", e), w.addClass(e).one(b + ".complete" + x, C.complete), m.useFailSafe && C.add.failSafe(), C.set.duration(m.duration), m.onStart.call(k);
          } }, save: { animation: function animation(e) {
            C.cache || (C.cache = {}), C.cache.animation = e;
          }, displayType: function displayType(e) {
            "none" !== e && w.data(v.displayType, e);
          }, transitionExists: function transitionExists(t, n) {
            e.fn.transition.exists[t] = n, C.verbose("Saving existence of transition", t, n);
          } }, restore: { conditions: function conditions() {
            var e = C.get.currentAnimation();e && (w.removeClass(e), C.verbose("Removing animation class", C.cache)), C.remove.duration();
          } }, add: { failSafe: function failSafe() {
            var e = C.get.duration();C.timer = setTimeout(function () {
              w.triggerHandler(b);
            }, e + m.failSafeDelay), C.verbose("Adding fail safe timer", C.timer);
          } }, remove: { animating: function animating() {
            w.removeClass(h.animating);
          }, animationCallbacks: function animationCallbacks() {
            C.remove.queueCallback(), C.remove.completeCallback();
          }, queueCallback: function queueCallback() {
            w.off(".queue" + x);
          }, completeCallback: function completeCallback() {
            w.off(".complete" + x);
          }, display: function display() {
            w.css("display", "");
          }, direction: function direction() {
            w.removeClass(h.inward).removeClass(h.outward);
          }, duration: function duration() {
            w.css("animation-duration", "");
          }, failSafe: function failSafe() {
            C.verbose("Removing fail safe timer", C.timer), C.timer && clearTimeout(C.timer);
          }, hidden: function hidden() {
            w.removeClass(h.hidden);
          }, visible: function visible() {
            w.removeClass(h.visible);
          }, looping: function looping() {
            C.debug("Transitions are no longer looping"), C.is.looping() && (C.reset(), w.removeClass(h.looping));
          }, transition: function transition() {
            w.removeClass(h.visible).removeClass(h.hidden);
          } }, get: { settings: function settings(t, n, i) {
            return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e.extend(!0, {}, e.fn.transition.settings, t) : "function" == typeof i ? e.extend({}, e.fn.transition.settings, { animation: t, onComplete: i, duration: n }) : "string" == typeof n || "number" == typeof n ? e.extend({}, e.fn.transition.settings, { animation: t, duration: n }) : "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? e.extend({}, e.fn.transition.settings, n, { animation: t }) : "function" == typeof n ? e.extend({}, e.fn.transition.settings, { animation: t, onComplete: n }) : e.extend({}, e.fn.transition.settings, { animation: t });
          }, animationClass: function animationClass(e) {
            var t = e || m.animation,
                n = C.can.transition() && !C.has.direction() ? C.get.direction() + " " : "";return h.animating + " " + h.transition + " " + n + t;
          }, currentAnimation: function currentAnimation() {
            return !(!C.cache || C.cache.animation === i) && C.cache.animation;
          }, currentDirection: function currentDirection() {
            return C.is.inward() ? h.inward : h.outward;
          }, direction: function direction() {
            return C.is.hidden() || !C.is.visible() ? h.inward : h.outward;
          }, animationDirection: function animationDirection(t) {
            var n;return "string" == typeof (t = t || m.animation) && (t = t.split(" "), e.each(t, function (e, t) {
              t === h.inward ? n = h.inward : t === h.outward && (n = h.outward);
            })), n || !1;
          }, duration: function duration(e) {
            return !1 === (e = e || m.duration) && (e = w.css("animation-duration") || 0), "string" == typeof e ? e.indexOf("ms") > -1 ? parseFloat(e) : 1e3 * parseFloat(e) : e;
          }, displayType: function displayType(e) {
            return e = e === i || e, m.displayType ? m.displayType : (e && w.data(v.displayType) === i && C.can.transition(!0), w.data(v.displayType));
          }, userStyle: function userStyle(e) {
            return (e = e || w.attr("style") || "").replace(/display.*?;/, "");
          }, transitionExists: function transitionExists(t) {
            return e.fn.transition.exists[t];
          }, animationStartEvent: function animationStartEvent() {
            var e,
                t = n.createElement("div"),
                o = { animation: "animationstart", OAnimation: "oAnimationStart", MozAnimation: "mozAnimationStart", WebkitAnimation: "webkitAnimationStart" };for (e in o) {
              if (t.style[e] !== i) return o[e];
            }return !1;
          }, animationEndEvent: function animationEndEvent() {
            var e,
                t = n.createElement("div"),
                o = { animation: "animationend", OAnimation: "oAnimationEnd", MozAnimation: "mozAnimationEnd", WebkitAnimation: "webkitAnimationEnd" };for (e in o) {
              if (t.style[e] !== i) return o[e];
            }return !1;
          } }, can: { transition: function transition(t) {
            var n,
                o,
                a,
                r,
                s,
                l,
                c = m.animation,
                u = C.get.transitionExists(c),
                d = C.get.displayType(!1);if (u === i || t) {
              if (C.verbose("Determining whether animation exists"), n = w.attr("class"), o = w.prop("tagName"), r = (a = e("<" + o + " />").addClass(n).insertAfter(w)).addClass(c).removeClass(h.inward).removeClass(h.outward).addClass(h.animating).addClass(h.transition).css("animationName"), s = a.addClass(h.inward).css("animationName"), d || (d = a.attr("class", n).removeAttr("style").removeClass(h.hidden).removeClass(h.visible).show().css("display"), C.verbose("Determining final display state", d), C.save.displayType(d)), a.remove(), r != s) C.debug("Direction exists for animation", c), l = !0;else {
                if ("none" == r || !r) return void C.debug("No animation defined in css", c);C.debug("Static animation found", c, d), l = !1;
              }C.save.transitionExists(c, l);
            }return u !== i ? u : l;
          }, animate: function animate() {
            return C.can.transition() !== i;
          } }, is: { animating: function animating() {
            return w.hasClass(h.animating);
          }, inward: function inward() {
            return w.hasClass(h.inward);
          }, outward: function outward() {
            return w.hasClass(h.outward);
          }, looping: function looping() {
            return w.hasClass(h.looping);
          }, occurring: function occurring(e) {
            return e = "." + (e = e || m.animation).replace(" ", "."), w.filter(e).length > 0;
          }, visible: function visible() {
            return w.is(":visible");
          }, hidden: function hidden() {
            return "hidden" === w.css("visibility");
          }, supported: function supported() {
            return !1 !== b;
          } }, hide: function hide() {
          C.verbose("Hiding element"), C.is.animating() && C.reset(), k.blur(), C.remove.display(), C.remove.visible(), C.set.hidden(), C.force.hidden(), m.onHide.call(k), m.onComplete.call(k);
        }, show: function show(e) {
          C.verbose("Showing element", e), C.remove.hidden(), C.set.visible(), C.force.visible(), m.onShow.call(k), m.onComplete.call(k);
        }, toggle: function toggle() {
          C.is.visible() ? C.hide() : C.show();
        }, stop: function stop() {
          C.debug("Stopping current animation"), w.triggerHandler(b);
        }, stopAll: function stopAll() {
          C.debug("Stopping all animation"), C.remove.queueCallback(), w.triggerHandler(b);
        }, clear: { queue: function queue() {
            C.debug("Clearing animation queue"), C.remove.queueCallback();
          } }, enable: function enable() {
          C.verbose("Starting animation"), w.removeClass(h.disabled);
        }, disable: function disable() {
          C.debug("Stopping animation"), w.addClass(h.disabled);
        }, setting: function setting(t, n) {
          if (C.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (n === i) return m[t];e.isPlainObject(m[t]) ? e.extend(!0, m[t], n) : m[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, C, t);else {
            if (n === i) return C[t];C[t] = n;
          }
        }, debug: function debug() {
          !m.silent && m.debug && (m.performance ? C.performance.log(arguments) : (C.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), C.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !m.silent && m.verbose && m.debug && (m.performance ? C.performance.log(arguments) : (C.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), C.verbose.apply(console, arguments)));
        }, error: function error() {
          m.silent || (C.error = Function.prototype.bind.call(console.error, console, m.name + ":"), C.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;m.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: k, "Execution Time": n })), clearTimeout(C.performance.timer), C.performance.timer = setTimeout(C.performance.display, 500);
          }, display: function display() {
            var t = m.name + ":",
                n = 0;s = !1, clearTimeout(C.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function invoke(t, n, a) {
          var r,
              s,
              l,
              c = g;return n = n || d, a = k || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s !== i && s;
        } }).initialize();
    }), o !== i ? o : this;
  }, e.fn.transition.exists = {}, e.fn.transition.settings = { name: "Transition", silent: !1, debug: !1, verbose: !1, performance: !0, namespace: "transition", interval: 0, reverse: "auto", onStart: function onStart() {}, onComplete: function onComplete() {}, onShow: function onShow() {}, onHide: function onHide() {}, useFailSafe: !0, failSafeDelay: 100, allowRepeats: !1, displayType: !1, animation: "fade", duration: !1, queue: !0, metadata: { displayType: "display" }, className: { animating: "animating", disabled: "disabled", hidden: "hidden", inward: "in", loading: "loading", looping: "looping", outward: "out", transition: "transition", visible: "visible" }, error: { noAnimation: "Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.", repeated: "That animation is already occurring, cancelling repeated animation", method: "The method you called is not defined", support: "This browser does not support CSS animations" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();e.api = e.fn.api = function (n) {
    var o,
        a = e.isFunction(this) ? e(t) : e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1);return a.each(function () {
      var a,
          f,
          m,
          g,
          p,
          h,
          v = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.api.settings, n) : e.extend({}, e.fn.api.settings),
          b = v.namespace,
          y = v.metadata,
          x = v.selector,
          C = v.error,
          w = v.className,
          k = "." + b,
          S = "module-" + b,
          T = e(this),
          A = T.closest(x.form),
          R = v.stateContext ? e(v.stateContext) : T,
          P = this,
          E = R[0],
          O = T.data(S);h = { initialize: function initialize() {
          u || h.bind.events(), h.instantiate();
        }, instantiate: function instantiate() {
          h.verbose("Storing instance of module", h), O = h, T.data(S, O);
        }, destroy: function destroy() {
          h.verbose("Destroying previous module for", P), T.removeData(S).off(k);
        }, bind: { events: function events() {
            var e = h.get.event();e ? (h.verbose("Attaching API events to element", e), T.on(e + k, h.event.trigger)) : "now" == v.on && (h.debug("Querying API endpoint immediately"), h.query());
          } }, decode: { json: function json(e) {
            if (e !== i && "string" == typeof e) try {
              e = JSON.parse(e);
            } catch (e) {}return e;
          } }, read: { cachedResponse: function cachedResponse(e) {
            var n;if (t.Storage !== i) return n = sessionStorage.getItem(e), h.debug("Using cached response", e, n), n = h.decode.json(n);h.error(C.noStorage);
          } }, write: { cachedResponse: function cachedResponse(n, o) {
            o && "" === o ? h.debug("Response empty, not caching", o) : t.Storage !== i ? (e.isPlainObject(o) && (o = JSON.stringify(o)), sessionStorage.setItem(n, o), h.verbose("Storing cached response for url", n, o)) : h.error(C.noStorage);
          } }, query: function query() {
          if (h.is.disabled()) h.debug("Element is disabled API request aborted");else {
            if (h.is.loading()) {
              if (!v.interruptRequests) return void h.debug("Cancelling request, previous request is still pending");h.debug("Interrupting previous request"), h.abort();
            }if (v.defaultData && e.extend(!0, v.urlData, h.get.defaultData()), v.serializeForm && (v.data = h.add.formData(v.data)), !1 === (f = h.get.settings())) return h.cancelled = !0, void h.error(C.beforeSend);if (h.cancelled = !1, (m = h.get.templatedURL()) || h.is.mocked()) {
              if ((m = h.add.urlData(m)) || h.is.mocked()) {
                if (f.url = v.base + m, a = e.extend(!0, {}, v, { type: v.method || v.type, data: g, url: v.base + m, beforeSend: v.beforeXHR, success: function success() {}, failure: function failure() {}, complete: function complete() {} }), h.debug("Querying URL", a.url), h.verbose("Using AJAX settings", a), "local" === v.cache && h.read.cachedResponse(m)) return h.debug("Response returned from local cache"), h.request = h.create.request(), void h.request.resolveWith(E, [h.read.cachedResponse(m)]);v.throttle ? v.throttleFirstRequest || h.timer ? (h.debug("Throttling request", v.throttle), clearTimeout(h.timer), h.timer = setTimeout(function () {
                  h.timer && delete h.timer, h.debug("Sending throttled request", g, a.method), h.send.request();
                }, v.throttle)) : (h.debug("Sending request", g, a.method), h.send.request(), h.timer = setTimeout(function () {}, v.throttle)) : (h.debug("Sending request", g, a.method), h.send.request());
              }
            } else h.error(C.missingURL);
          }
        }, should: { removeError: function removeError() {
            return !0 === v.hideError || "auto" === v.hideError && !h.is.form();
          } }, is: { disabled: function disabled() {
            return T.filter(x.disabled).length > 0;
          }, expectingJSON: function expectingJSON() {
            return "json" === v.dataType || "jsonp" === v.dataType;
          }, form: function form() {
            return T.is("form") || R.is("form");
          }, mocked: function mocked() {
            return v.mockResponse || v.mockResponseAsync || v.response || v.responseAsync;
          }, input: function input() {
            return T.is("input");
          }, loading: function loading() {
            return !!h.request && "pending" == h.request.state();
          }, abortedRequest: function abortedRequest(e) {
            return e && e.readyState !== i && 0 === e.readyState ? (h.verbose("XHR request determined to be aborted"), !0) : (h.verbose("XHR request was not aborted"), !1);
          }, validResponse: function validResponse(t) {
            return h.is.expectingJSON() && e.isFunction(v.successTest) ? (h.debug("Checking JSON returned success", v.successTest, t), v.successTest(t) ? (h.debug("Response passed success test", t), !0) : (h.debug("Response failed success test", t), !1)) : (h.verbose("Response is not JSON, skipping validation", v.successTest, t), !0);
          } }, was: { cancelled: function cancelled() {
            return h.cancelled || !1;
          }, succesful: function succesful() {
            return h.request && "resolved" == h.request.state();
          }, failure: function failure() {
            return h.request && "rejected" == h.request.state();
          }, complete: function complete() {
            return h.request && ("resolved" == h.request.state() || "rejected" == h.request.state());
          } }, add: { urlData: function urlData(t, n) {
            var o, a;return t && (o = t.match(v.regExp.required), a = t.match(v.regExp.optional), n = n || v.urlData, o && (h.debug("Looking for required URL variables", o), e.each(o, function (o, a) {
              var r = -1 !== a.indexOf("$") ? a.substr(2, a.length - 3) : a.substr(1, a.length - 2),
                  s = e.isPlainObject(n) && n[r] !== i ? n[r] : T.data(r) !== i ? T.data(r) : R.data(r) !== i ? R.data(r) : n[r];if (s === i) return h.error(C.requiredParameter, r, t), t = !1, !1;h.verbose("Found required variable", r, s), s = v.encodeParameters ? h.get.urlEncodedValue(s) : s, t = t.replace(a, s);
            })), a && (h.debug("Looking for optional URL variables", o), e.each(a, function (o, a) {
              var r = -1 !== a.indexOf("$") ? a.substr(3, a.length - 4) : a.substr(2, a.length - 3),
                  s = e.isPlainObject(n) && n[r] !== i ? n[r] : T.data(r) !== i ? T.data(r) : R.data(r) !== i ? R.data(r) : n[r];s !== i ? (h.verbose("Optional variable Found", r, s), t = t.replace(a, s)) : (h.verbose("Optional variable not found", r), t = -1 !== t.indexOf("/" + a) ? t.replace("/" + a, "") : t.replace(a, ""));
            }))), t;
          }, formData: function formData(t) {
            var n = e.fn.serializeObject !== i,
                o = n ? A.serializeObject() : A.serialize();return t = t || v.data, e.isPlainObject(t) ? n ? (h.debug("Extending existing data with form data", t, o), t = e.extend(!0, {}, t, o)) : (h.error(C.missingSerialize), h.debug("Cant extend data. Replacing data with form data", t, o), t = o) : (h.debug("Adding form data", o), t = o), t;
          } }, send: { request: function request() {
            h.set.loading(), h.request = h.create.request(), h.is.mocked() ? h.mockedXHR = h.create.mockedXHR() : h.xhr = h.create.xhr(), v.onRequest.call(E, h.request, h.xhr);
          } }, event: { trigger: function trigger(e) {
            h.query(), "submit" != e.type && "click" != e.type || e.preventDefault();
          }, xhr: { always: function always() {}, done: function done(t, n, i) {
              var o = this,
                  a = new Date().getTime() - p,
                  r = v.loadingDuration - a,
                  s = !!e.isFunction(v.onResponse) && (h.is.expectingJSON() ? v.onResponse.call(o, e.extend(!0, {}, t)) : v.onResponse.call(o, t));r = r > 0 ? r : 0, s && (h.debug("Modified API response in onResponse callback", v.onResponse, s, t), t = s), r > 0 && h.debug("Response completed early delaying state change by", r), setTimeout(function () {
                h.is.validResponse(t) ? h.request.resolveWith(o, [t, i]) : h.request.rejectWith(o, [i, "invalid"]);
              }, r);
            }, fail: function fail(e, t, n) {
              var i = this,
                  o = new Date().getTime() - p,
                  a = v.loadingDuration - o;(a = a > 0 ? a : 0) > 0 && h.debug("Response completed early delaying state change by", a), setTimeout(function () {
                h.is.abortedRequest(e) ? h.request.rejectWith(i, [e, "aborted", n]) : h.request.rejectWith(i, [e, "error", t, n]);
              }, a);
            } }, request: { done: function done(e, t) {
              h.debug("Successful API Response", e), "local" === v.cache && m && (h.write.cachedResponse(m, e), h.debug("Saving server response locally", h.cache)), v.onSuccess.call(E, e, T, t);
            }, complete: function complete(e, t) {
              var n, i;h.was.succesful() ? (i = e, n = t) : (n = e, i = h.get.responseFromXHR(n)), h.remove.loading(), v.onComplete.call(E, i, T, n);
            }, fail: function fail(e, t, n) {
              var o = h.get.responseFromXHR(e),
                  r = h.get.errorFromRequest(o, t, n);if ("aborted" == t) return h.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)", t, n), v.onAbort.call(E, t, T, e), !0;"invalid" == t ? h.debug("JSON did not pass success test. A server-side error has most likely occurred", o) : "error" == t && e !== i && (h.debug("XHR produced a server error", t, n), 200 != e.status && n !== i && "" !== n && h.error(C.statusMessage + n, a.url), v.onError.call(E, r, T, e)), v.errorDuration && "aborted" !== t && (h.debug("Adding error state"), h.set.error(), h.should.removeError() && setTimeout(h.remove.error, v.errorDuration)), h.debug("API Request failed", r, e), v.onFailure.call(E, o, T, e);
            } } }, create: { request: function request() {
            return e.Deferred().always(h.event.request.complete).done(h.event.request.done).fail(h.event.request.fail);
          }, mockedXHR: function mockedXHR() {
            var t,
                n,
                i,
                o = v.mockResponse || v.response,
                a = v.mockResponseAsync || v.responseAsync;return i = e.Deferred().always(h.event.xhr.complete).done(h.event.xhr.done).fail(h.event.xhr.fail), o ? (e.isFunction(o) ? (h.debug("Using specified synchronous callback", o), n = o.call(E, f)) : (h.debug("Using settings specified response", o), n = o), i.resolveWith(E, [n, !1, { responseText: n }])) : e.isFunction(a) && (t = function t(e) {
              h.debug("Async callback returned response", e), e ? i.resolveWith(E, [e, !1, { responseText: e }]) : i.rejectWith(E, [{ responseText: e }, !1, !1]);
            }, h.debug("Using specified async response callback", a), a.call(E, f, t)), i;
          }, xhr: function xhr() {
            var t;return t = e.ajax(a).always(h.event.xhr.always).done(h.event.xhr.done).fail(h.event.xhr.fail), h.verbose("Created server request", t, a), t;
          } }, set: { error: function error() {
            h.verbose("Adding error state to element", R), R.addClass(w.error);
          }, loading: function loading() {
            h.verbose("Adding loading state to element", R), R.addClass(w.loading), p = new Date().getTime();
          } }, remove: { error: function error() {
            h.verbose("Removing error state from element", R), R.removeClass(w.error);
          }, loading: function loading() {
            h.verbose("Removing loading state from element", R), R.removeClass(w.loading);
          } }, get: { responseFromXHR: function responseFromXHR(t) {
            return !!e.isPlainObject(t) && (h.is.expectingJSON() ? h.decode.json(t.responseText) : t.responseText);
          }, errorFromRequest: function errorFromRequest(t, n, o) {
            return e.isPlainObject(t) && t.error !== i ? t.error : v.error[n] !== i ? v.error[n] : o;
          }, request: function request() {
            return h.request || !1;
          }, xhr: function xhr() {
            return h.xhr || !1;
          }, settings: function settings() {
            var t;return (t = v.beforeSend.call(E, v)) && (t.success !== i && (h.debug("Legacy success callback detected", t), h.error(C.legacyParameters, t.success), t.onSuccess = t.success), t.failure !== i && (h.debug("Legacy failure callback detected", t), h.error(C.legacyParameters, t.failure), t.onFailure = t.failure), t.complete !== i && (h.debug("Legacy complete callback detected", t), h.error(C.legacyParameters, t.complete), t.onComplete = t.complete)), t === i && h.error(C.noReturnedValue), !1 === t ? t : t !== i ? e.extend(!0, {}, t) : e.extend(!0, {}, v);
          }, urlEncodedValue: function urlEncodedValue(e) {
            var n = t.decodeURIComponent(e),
                i = t.encodeURIComponent(e);return n !== e ? (h.debug("URL value is already encoded, avoiding double encoding", e), e) : (h.verbose("Encoding value using encodeURIComponent", e, i), i);
          }, defaultData: function defaultData() {
            var t = {};return e.isWindow(P) || (h.is.input() ? t.value = T.val() : h.is.form() || (t.text = T.text())), t;
          }, event: function event() {
            return e.isWindow(P) || "now" == v.on ? (h.debug("API called without element, no events attached"), !1) : "auto" == v.on ? T.is("input") ? P.oninput !== i ? "input" : P.onpropertychange !== i ? "propertychange" : "keyup" : T.is("form") ? "submit" : "click" : v.on;
          }, templatedURL: function templatedURL(e) {
            if (e = e || T.data(y.action) || v.action || !1, m = T.data(y.url) || v.url || !1) return h.debug("Using specified url", m), m;if (e) {
              if (h.debug("Looking up url for action", e, v.api), v.api[e] === i && !h.is.mocked()) return void h.error(C.missingAction, v.action, v.api);m = v.api[e];
            } else h.is.form() && (m = T.attr("action") || R.attr("action") || !1, h.debug("No url or action specified, defaulting to form action", m));return m;
          } }, abort: function abort() {
          var e = h.get.xhr();e && "resolved" !== e.state() && (h.debug("Cancelling API request"), e.abort());
        }, reset: function reset() {
          h.remove.error(), h.remove.loading();
        }, setting: function setting(t, n) {
          if (h.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, v, t);else {
            if (n === i) return v[t];e.isPlainObject(v[t]) ? e.extend(!0, v[t], n) : v[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, h, t);else {
            if (n === i) return h[t];h[t] = n;
          }
        }, debug: function debug() {
          !v.silent && v.debug && (v.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), h.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !v.silent && v.verbose && v.debug && (v.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), h.verbose.apply(console, arguments)));
        }, error: function error() {
          v.silent || (h.error = Function.prototype.bind.call(console.error, console, v.name + ":"), h.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;v.performance && (n = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", "Execution Time": n })), clearTimeout(h.performance.timer), h.performance.timer = setTimeout(h.performance.display, 500);
          }, display: function display() {
            var t = v.name + ":",
                n = 0;s = !1, clearTimeout(h.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function invoke(t, n, a) {
          var r,
              s,
              l,
              c = O;return n = n || d, a = P || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (h.error(C.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s;
        } }, u ? (O === i && h.initialize(), h.invoke(c)) : (O !== i && O.invoke("destroy"), h.initialize());
    }), o !== i ? o : this;
  }, e.api.settings = { name: "API", namespace: "api", debug: !1, verbose: !1, performance: !0, api: {}, cache: !0, interruptRequests: !0, on: "auto", stateContext: !1, loadingDuration: 0, hideError: "auto", errorDuration: 2e3, encodeParameters: !0, action: !1, url: !1, base: "", urlData: {}, defaultData: !0, serializeForm: !1, throttle: 0, throttleFirstRequest: !0, method: "get", data: {}, dataType: "json", mockResponse: !1, mockResponseAsync: !1, response: !1, responseAsync: !1, beforeSend: function beforeSend(e) {
      return e;
    }, beforeXHR: function beforeXHR(e) {}, onRequest: function onRequest(e, t) {}, onResponse: !1, onSuccess: function onSuccess(e, t) {}, onComplete: function onComplete(e, t) {}, onFailure: function onFailure(e, t) {}, onError: function onError(e, t) {}, onAbort: function onAbort(e, t) {}, successTest: !1, error: { beforeSend: "The before send function has aborted the request", error: "There was an error with your request", exitConditions: "API Request Aborted. Exit conditions met", JSONParse: "JSON could not be parsed during error handling", legacyParameters: "You are using legacy API success callback names", method: "The method you called is not defined", missingAction: "API action used but no url was defined", missingSerialize: "jquery-serialize-object is required to add form data to an existing data object", missingURL: "No URL specified for api event", noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored.", noStorage: "Caching responses locally requires session storage", parseError: "There was an error parsing your request", requiredParameter: "Missing a required URL parameter: ", statusMessage: "Server gave an error: ", timeout: "Your request timed out" }, regExp: { required: /\{\$*[A-z0-9]+\}/g, optional: /\{\/\$*[A-z0-9]+\}/g }, className: { loading: "loading", error: "error" }, selector: { disabled: ".disabled", form: "form" }, metadata: { action: "action", url: "url" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.state = function (t) {
    var o,
        a = e(this),
        r = a.selector || "",
        s = (n.documentElement, new Date().getTime()),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1);return a.each(function () {
      var n,
          f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.state.settings, t) : e.extend({}, e.fn.state.settings),
          m = f.error,
          g = f.metadata,
          p = f.className,
          h = f.namespace,
          v = f.states,
          b = f.text,
          y = "." + h,
          x = h + "-module",
          C = e(this),
          w = this,
          k = C.data(x);n = { initialize: function initialize() {
          n.verbose("Initializing module"), f.automatic && n.add.defaults(), f.context && "" !== r ? e(f.context).on(r, "mouseenter" + y, n.change.text).on(r, "mouseleave" + y, n.reset.text).on(r, "click" + y, n.toggle.state) : C.on("mouseenter" + y, n.change.text).on("mouseleave" + y, n.reset.text).on("click" + y, n.toggle.state), n.instantiate();
        }, instantiate: function instantiate() {
          n.verbose("Storing instance of module", n), k = n, C.data(x, n);
        }, destroy: function destroy() {
          n.verbose("Destroying previous module", k), C.off(y).removeData(x);
        }, refresh: function refresh() {
          n.verbose("Refreshing selector cache"), C = e(w);
        }, add: { defaults: function defaults() {
            var o = t && e.isPlainObject(t.states) ? t.states : {};e.each(f.defaults, function (t, a) {
              n.is[t] !== i && n.is[t]() && (n.verbose("Adding default states", t, w), e.extend(f.states, a, o));
            });
          } }, is: { active: function active() {
            return C.hasClass(p.active);
          }, loading: function loading() {
            return C.hasClass(p.loading);
          }, inactive: function inactive() {
            return !C.hasClass(p.active);
          }, state: function state(e) {
            return p[e] !== i && C.hasClass(p[e]);
          }, enabled: function enabled() {
            return !C.is(f.filter.active);
          }, disabled: function disabled() {
            return C.is(f.filter.active);
          }, textEnabled: function textEnabled() {
            return !C.is(f.filter.text);
          }, button: function button() {
            return C.is(".button:not(a, .submit)");
          }, input: function input() {
            return C.is("input");
          }, progress: function progress() {
            return C.is(".ui.progress");
          } }, allow: function allow(e) {
          n.debug("Now allowing state", e), v[e] = !0;
        }, disallow: function disallow(e) {
          n.debug("No longer allowing", e), v[e] = !1;
        }, allows: function allows(e) {
          return v[e] || !1;
        }, enable: function enable() {
          C.removeClass(p.disabled);
        }, disable: function disable() {
          C.addClass(p.disabled);
        }, setState: function setState(e) {
          n.allows(e) && C.addClass(p[e]);
        }, removeState: function removeState(e) {
          n.allows(e) && C.removeClass(p[e]);
        }, toggle: { state: function state() {
            var t;if (n.allows("active") && n.is.enabled()) {
              if (n.refresh(), e.fn.api !== i) if (t = C.api("get request"), C.api("was cancelled")) n.debug("API Request cancelled by beforesend"), f.activateTest = function () {
                return !1;
              }, f.deactivateTest = function () {
                return !1;
              };else if (t) return void n.listenTo(t);n.change.state();
            }
          } }, listenTo: function listenTo(t) {
          n.debug("API request detected, waiting for state signal", t), t && (b.loading && n.update.text(b.loading), e.when(t).then(function () {
            "resolved" == t.state() ? (n.debug("API request succeeded"), f.activateTest = function () {
              return !0;
            }, f.deactivateTest = function () {
              return !0;
            }) : (n.debug("API request failed"), f.activateTest = function () {
              return !1;
            }, f.deactivateTest = function () {
              return !1;
            }), n.change.state();
          }));
        }, change: { state: function state() {
            n.debug("Determining state change direction"), n.is.inactive() ? n.activate() : n.deactivate(), f.sync && n.sync(), f.onChange.call(w);
          }, text: function text() {
            n.is.textEnabled() && (n.is.disabled() ? (n.verbose("Changing text to disabled text", b.hover), n.update.text(b.disabled)) : n.is.active() ? b.hover ? (n.verbose("Changing text to hover text", b.hover), n.update.text(b.hover)) : b.deactivate && (n.verbose("Changing text to deactivating text", b.deactivate), n.update.text(b.deactivate)) : b.hover ? (n.verbose("Changing text to hover text", b.hover), n.update.text(b.hover)) : b.activate && (n.verbose("Changing text to activating text", b.activate), n.update.text(b.activate)));
          } }, activate: function activate() {
          f.activateTest.call(w) && (n.debug("Setting state to active"), C.addClass(p.active), n.update.text(b.active), f.onActivate.call(w));
        }, deactivate: function deactivate() {
          f.deactivateTest.call(w) && (n.debug("Setting state to inactive"), C.removeClass(p.active), n.update.text(b.inactive), f.onDeactivate.call(w));
        }, sync: function sync() {
          n.verbose("Syncing other buttons to current state"), n.is.active() ? a.not(C).state("activate") : a.not(C).state("deactivate");
        }, get: { text: function text() {
            return f.selector.text ? C.find(f.selector.text).text() : C.html();
          }, textFor: function textFor(e) {
            return b[e] || !1;
          } }, flash: { text: function text(e, t, i) {
            var o = n.get.text();n.debug("Flashing text message", e, t), e = e || f.text.flash, t = t || f.flashDuration, i = i || function () {}, n.update.text(e), setTimeout(function () {
              n.update.text(o), i.call(w);
            }, t);
          } }, reset: { text: function text() {
            var e = b.active || C.data(g.storedText),
                t = b.inactive || C.data(g.storedText);n.is.textEnabled() && (n.is.active() && e ? (n.verbose("Resetting active text", e), n.update.text(e)) : t && (n.verbose("Resetting inactive text", e), n.update.text(t)));
          } }, update: { text: function text(e) {
            var t = n.get.text();e && e !== t ? (n.debug("Updating text", e), f.selector.text ? C.data(g.storedText, e).find(f.selector.text).text(e) : C.data(g.storedText, e).html(e)) : n.debug("Text is already set, ignoring update", e);
          } }, setting: function setting(t, o) {
          if (n.debug("Changing setting", t, o), e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (o === i) return f[t];e.isPlainObject(f[t]) ? e.extend(!0, f[t], o) : f[t] = o;
          }
        }, internal: function internal(t, o) {
          if (e.isPlainObject(t)) e.extend(!0, n, t);else {
            if (o === i) return n[t];n[t] = o;
          }
        }, debug: function debug() {
          !f.silent && f.debug && (f.performance ? n.performance.log(arguments) : (n.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), n.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !f.silent && f.verbose && f.debug && (f.performance ? n.performance.log(arguments) : (n.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), n.verbose.apply(console, arguments)));
        }, error: function error() {
          f.silent || (n.error = Function.prototype.bind.call(console.error, console, f.name + ":"), n.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, i;f.performance && (i = (t = new Date().getTime()) - (s || t), s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: w, "Execution Time": i })), clearTimeout(n.performance.timer), n.performance.timer = setTimeout(n.performance.display, 500);
          }, display: function display() {
            var t = f.name + ":",
                o = 0;s = !1, clearTimeout(n.performance.timer), e.each(l, function (e, t) {
              o += t["Execution Time"];
            }), t += " " + o + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function invoke(t, a, r) {
          var s,
              l,
              c,
              u = k;return a = a || d, r = w || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (o, a) {
            var r = o != s ? a + t[o + 1].charAt(0).toUpperCase() + t[o + 1].slice(1) : t;if (e.isPlainObject(u[r]) && o != s) u = u[r];else {
              if (u[r] !== i) return l = u[r], !1;if (!e.isPlainObject(u[a]) || o == s) return u[a] !== i ? (l = u[a], !1) : (n.error(m.method, t), !1);u = u[a];
            }
          })), e.isFunction(l) ? c = l.apply(r, a) : l !== i && (c = l), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), l;
        } }, u ? (k === i && n.initialize(), n.invoke(c)) : (k !== i && k.invoke("destroy"), n.initialize());
    }), o !== i ? o : this;
  }, e.fn.state.settings = { name: "State", debug: !1, verbose: !1, namespace: "state", performance: !0, onActivate: function onActivate() {}, onDeactivate: function onDeactivate() {}, onChange: function onChange() {}, activateTest: function activateTest() {
      return !0;
    }, deactivateTest: function deactivateTest() {
      return !0;
    }, automatic: !0, sync: !1, flashDuration: 1e3, filter: { text: ".loading, .disabled", active: ".disabled" }, context: !1, error: { beforeSend: "The before send function has cancelled state change", method: "The method you called is not defined." }, metadata: { promise: "promise", storedText: "stored-text" }, className: { active: "active", disabled: "disabled", error: "error", loading: "loading", success: "success", warning: "warning" }, selector: { text: !1 }, defaults: { input: { disabled: !0, loading: !0, active: !0 }, button: { disabled: !0, loading: !0, active: !0 }, progress: { active: !0, success: !0, warning: !0, error: !0 } }, states: { active: !0, disabled: !0, error: !0, loading: !0, success: !0, warning: !0 }, text: { disabled: !1, flash: !1, hover: !1, active: !1, inactive: !1, activate: !1, deactivate: !1 } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.visibility = function (o) {
    var a,
        r = e(this),
        s = r.selector || "",
        l = new Date().getTime(),
        c = [],
        u = arguments[0],
        d = "string" == typeof u,
        f = [].slice.call(arguments, 1),
        m = r.length,
        g = 0;return r.each(function () {
      var r,
          p,
          h,
          v,
          b = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.visibility.settings, o) : e.extend({}, e.fn.visibility.settings),
          y = b.className,
          x = b.namespace,
          C = b.error,
          w = b.metadata,
          k = "." + x,
          S = "module-" + x,
          T = e(t),
          A = e(this),
          R = e(b.context),
          P = (A.selector, A.data(S)),
          E = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
        setTimeout(e, 0);
      },
          O = this,
          F = !1;v = { initialize: function initialize() {
          v.debug("Initializing", b), v.setup.cache(), v.should.trackChanges() && ("image" == b.type && v.setup.image(), "fixed" == b.type && v.setup.fixed(), b.observeChanges && v.observeChanges(), v.bind.events()), v.save.position(), v.is.visible() || v.error(C.visible, A), b.initialCheck && v.checkVisibility(), v.instantiate();
        }, instantiate: function instantiate() {
          v.debug("Storing instance", v), A.data(S, v), P = v;
        }, destroy: function destroy() {
          v.verbose("Destroying previous module"), h && h.disconnect(), p && p.disconnect(), T.off("load" + k, v.event.load).off("resize" + k, v.event.resize), R.off("scroll" + k, v.event.scroll).off("scrollchange" + k, v.event.scrollchange), "fixed" == b.type && (v.resetFixed(), v.remove.placeholder()), A.off(k).removeData(S);
        }, observeChanges: function observeChanges() {
          "MutationObserver" in t && (p = new MutationObserver(v.event.contextChanged), h = new MutationObserver(v.event.changed), p.observe(n, { childList: !0, subtree: !0 }), h.observe(O, { childList: !0, subtree: !0 }), v.debug("Setting up mutation observer", h));
        }, bind: { events: function events() {
            v.verbose("Binding visibility events to scroll and resize"), b.refreshOnLoad && T.on("load" + k, v.event.load), T.on("resize" + k, v.event.resize), R.off("scroll" + k).on("scroll" + k, v.event.scroll).on("scrollchange" + k, v.event.scrollchange);
          } }, event: { changed: function changed(e) {
            v.verbose("DOM tree modified, updating visibility calculations"), v.timer = setTimeout(function () {
              v.verbose("DOM tree modified, updating sticky menu"), v.refresh();
            }, 100);
          }, contextChanged: function contextChanged(t) {
            [].forEach.call(t, function (t) {
              t.removedNodes && [].forEach.call(t.removedNodes, function (t) {
                (t == O || e(t).find(O).length > 0) && (v.debug("Element removed from DOM, tearing down events"), v.destroy());
              });
            });
          }, resize: function resize() {
            v.debug("Window resized"), b.refreshOnResize && E(v.refresh);
          }, load: function load() {
            v.debug("Page finished loading"), E(v.refresh);
          }, scroll: function scroll() {
            b.throttle ? (clearTimeout(v.timer), v.timer = setTimeout(function () {
              R.triggerHandler("scrollchange" + k, [R.scrollTop()]);
            }, b.throttle)) : E(function () {
              R.triggerHandler("scrollchange" + k, [R.scrollTop()]);
            });
          }, scrollchange: function scrollchange(e, t) {
            v.checkVisibility(t);
          } }, precache: function precache(t, i) {
          t instanceof Array || (t = [t]);for (var o = t.length, a = 0, r = [], s = n.createElement("img"), l = function l() {
            ++a >= t.length && e.isFunction(i) && i();
          }; o--;) {
            (s = n.createElement("img")).onload = l, s.onerror = l, s.src = t[o], r.push(s);
          }
        }, enableCallbacks: function enableCallbacks() {
          v.debug("Allowing callbacks to occur"), F = !1;
        }, disableCallbacks: function disableCallbacks() {
          v.debug("Disabling all callbacks temporarily"), F = !0;
        }, should: { trackChanges: function trackChanges() {
            return d ? (v.debug("One time query, no need to bind events"), !1) : (v.debug("Callbacks being attached"), !0);
          } }, setup: { cache: function cache() {
            v.cache = { occurred: {}, screen: {}, element: {} };
          }, image: function image() {
            var e = A.data(w.src);e && (v.verbose("Lazy loading image", e), b.once = !0, b.observeChanges = !1, b.onOnScreen = function () {
              v.debug("Image on screen", O), v.precache(e, function () {
                v.set.image(e, function () {
                  ++g == m && b.onAllLoaded.call(this), b.onLoad.call(this);
                });
              });
            });
          }, fixed: function fixed() {
            v.debug("Setting up fixed"), b.once = !1, b.observeChanges = !1, b.initialCheck = !0, b.refreshOnLoad = !0, o.transition || (b.transition = !1), v.create.placeholder(), v.debug("Added placeholder", r), b.onTopPassed = function () {
              v.debug("Element passed, adding fixed position", A), v.show.placeholder(), v.set.fixed(), b.transition && e.fn.transition !== i && A.transition(b.transition, b.duration);
            }, b.onTopPassedReverse = function () {
              v.debug("Element returned to position, removing fixed", A), v.hide.placeholder(), v.remove.fixed();
            };
          } }, create: { placeholder: function placeholder() {
            v.verbose("Creating fixed position placeholder"), r = A.clone(!1).css("display", "none").addClass(y.placeholder).insertAfter(A);
          } }, show: { placeholder: function placeholder() {
            v.verbose("Showing placeholder"), r.css("display", "block").css("visibility", "hidden");
          } }, hide: { placeholder: function placeholder() {
            v.verbose("Hiding placeholder"), r.css("display", "none").css("visibility", "");
          } }, set: { fixed: function fixed() {
            v.verbose("Setting element to fixed position"), A.addClass(y.fixed).css({ position: "fixed", top: b.offset + "px", left: "auto", zIndex: b.zIndex }), b.onFixed.call(O);
          }, image: function image(t, n) {
            if (A.attr("src", t), b.transition) {
              if (e.fn.transition !== i) {
                if (A.hasClass(y.visible)) return void v.debug("Transition already occurred on this image, skipping animation");A.transition(b.transition, b.duration, n);
              } else A.fadeIn(b.duration, n);
            } else A.show();
          } }, is: { onScreen: function onScreen() {
            return v.get.elementCalculations().onScreen;
          }, offScreen: function offScreen() {
            return v.get.elementCalculations().offScreen;
          }, visible: function visible() {
            return !(!v.cache || !v.cache.element) && !(0 === v.cache.element.width && 0 === v.cache.element.offset.top);
          }, verticallyScrollableContext: function verticallyScrollableContext() {
            var e = R.get(0) !== t && R.css("overflow-y");return "auto" == e || "scroll" == e;
          }, horizontallyScrollableContext: function horizontallyScrollableContext() {
            var e = R.get(0) !== t && R.css("overflow-x");return "auto" == e || "scroll" == e;
          } }, refresh: function refresh() {
          v.debug("Refreshing constants (width/height)"), "fixed" == b.type && v.resetFixed(), v.reset(), v.save.position(), b.checkOnRefresh && v.checkVisibility(), b.onRefresh.call(O);
        }, resetFixed: function resetFixed() {
          v.remove.fixed(), v.remove.occurred();
        }, reset: function reset() {
          v.verbose("Resetting all cached values"), e.isPlainObject(v.cache) && (v.cache.screen = {}, v.cache.element = {});
        }, checkVisibility: function checkVisibility(e) {
          v.verbose("Checking visibility of element", v.cache.element), !F && v.is.visible() && (v.save.scroll(e), v.save.calculations(), v.passed(), v.passingReverse(), v.topVisibleReverse(), v.bottomVisibleReverse(), v.topPassedReverse(), v.bottomPassedReverse(), v.onScreen(), v.offScreen(), v.passing(), v.topVisible(), v.bottomVisible(), v.topPassed(), v.bottomPassed(), b.onUpdate && b.onUpdate.call(O, v.get.elementCalculations()));
        }, passed: function passed(t, n) {
          var o = v.get.elementCalculations();if (t && n) b.onPassed[t] = n;else {
            if (t !== i) return v.get.pixelsPassed(t) > o.pixelsPassed;o.passing && e.each(b.onPassed, function (e, t) {
              o.bottomVisible || o.pixelsPassed > v.get.pixelsPassed(e) ? v.execute(t, e) : b.once || v.remove.occurred(t);
            });
          }
        }, onScreen: function onScreen(e) {
          var t = v.get.elementCalculations(),
              n = e || b.onOnScreen,
              o = "onScreen";if (e && (v.debug("Adding callback for onScreen", e), b.onOnScreen = e), t.onScreen ? v.execute(n, o) : b.once || v.remove.occurred(o), e !== i) return t.onOnScreen;
        }, offScreen: function offScreen(e) {
          var t = v.get.elementCalculations(),
              n = e || b.onOffScreen,
              o = "offScreen";if (e && (v.debug("Adding callback for offScreen", e), b.onOffScreen = e), t.offScreen ? v.execute(n, o) : b.once || v.remove.occurred(o), e !== i) return t.onOffScreen;
        }, passing: function passing(e) {
          var t = v.get.elementCalculations(),
              n = e || b.onPassing,
              o = "passing";if (e && (v.debug("Adding callback for passing", e), b.onPassing = e), t.passing ? v.execute(n, o) : b.once || v.remove.occurred(o), e !== i) return t.passing;
        }, topVisible: function topVisible(e) {
          var t = v.get.elementCalculations(),
              n = e || b.onTopVisible,
              o = "topVisible";if (e && (v.debug("Adding callback for top visible", e), b.onTopVisible = e), t.topVisible ? v.execute(n, o) : b.once || v.remove.occurred(o), e === i) return t.topVisible;
        }, bottomVisible: function bottomVisible(e) {
          var t = v.get.elementCalculations(),
              n = e || b.onBottomVisible,
              o = "bottomVisible";if (e && (v.debug("Adding callback for bottom visible", e), b.onBottomVisible = e), t.bottomVisible ? v.execute(n, o) : b.once || v.remove.occurred(o), e === i) return t.bottomVisible;
        }, topPassed: function topPassed(e) {
          var t = v.get.elementCalculations(),
              n = e || b.onTopPassed,
              o = "topPassed";if (e && (v.debug("Adding callback for top passed", e), b.onTopPassed = e), t.topPassed ? v.execute(n, o) : b.once || v.remove.occurred(o), e === i) return t.topPassed;
        }, bottomPassed: function bottomPassed(e) {
          var t = v.get.elementCalculations(),
              n = e || b.onBottomPassed,
              o = "bottomPassed";if (e && (v.debug("Adding callback for bottom passed", e), b.onBottomPassed = e), t.bottomPassed ? v.execute(n, o) : b.once || v.remove.occurred(o), e === i) return t.bottomPassed;
        }, passingReverse: function passingReverse(e) {
          var t = v.get.elementCalculations(),
              n = e || b.onPassingReverse,
              o = "passingReverse";if (e && (v.debug("Adding callback for passing reverse", e), b.onPassingReverse = e), t.passing ? b.once || v.remove.occurred(o) : v.get.occurred("passing") && v.execute(n, o), e !== i) return !t.passing;
        }, topVisibleReverse: function topVisibleReverse(e) {
          var t = v.get.elementCalculations(),
              n = e || b.onTopVisibleReverse,
              o = "topVisibleReverse";if (e && (v.debug("Adding callback for top visible reverse", e), b.onTopVisibleReverse = e), t.topVisible ? b.once || v.remove.occurred(o) : v.get.occurred("topVisible") && v.execute(n, o), e === i) return !t.topVisible;
        }, bottomVisibleReverse: function bottomVisibleReverse(e) {
          var t = v.get.elementCalculations(),
              n = e || b.onBottomVisibleReverse,
              o = "bottomVisibleReverse";if (e && (v.debug("Adding callback for bottom visible reverse", e), b.onBottomVisibleReverse = e), t.bottomVisible ? b.once || v.remove.occurred(o) : v.get.occurred("bottomVisible") && v.execute(n, o), e === i) return !t.bottomVisible;
        }, topPassedReverse: function topPassedReverse(e) {
          var t = v.get.elementCalculations(),
              n = e || b.onTopPassedReverse,
              o = "topPassedReverse";if (e && (v.debug("Adding callback for top passed reverse", e), b.onTopPassedReverse = e), t.topPassed ? b.once || v.remove.occurred(o) : v.get.occurred("topPassed") && v.execute(n, o), e === i) return !t.onTopPassed;
        }, bottomPassedReverse: function bottomPassedReverse(e) {
          var t = v.get.elementCalculations(),
              n = e || b.onBottomPassedReverse,
              o = "bottomPassedReverse";if (e && (v.debug("Adding callback for bottom passed reverse", e), b.onBottomPassedReverse = e), t.bottomPassed ? b.once || v.remove.occurred(o) : v.get.occurred("bottomPassed") && v.execute(n, o), e === i) return !t.bottomPassed;
        }, execute: function execute(e, t) {
          var n = v.get.elementCalculations(),
              i = v.get.screenCalculations();(e = e || !1) && (b.continuous ? (v.debug("Callback being called continuously", t, n), e.call(O, n, i)) : v.get.occurred(t) || (v.debug("Conditions met", t, n), e.call(O, n, i))), v.save.occurred(t);
        }, remove: { fixed: function fixed() {
            v.debug("Removing fixed position"), A.removeClass(y.fixed).css({ position: "", top: "", left: "", zIndex: "" }), b.onUnfixed.call(O);
          }, placeholder: function placeholder() {
            v.debug("Removing placeholder content"), r && r.remove();
          }, occurred: function occurred(e) {
            if (e) {
              var t = v.cache.occurred;t[e] !== i && !0 === t[e] && (v.debug("Callback can now be called again", e), v.cache.occurred[e] = !1);
            } else v.cache.occurred = {};
          } }, save: { calculations: function calculations() {
            v.verbose("Saving all calculations necessary to determine positioning"), v.save.direction(), v.save.screenCalculations(), v.save.elementCalculations();
          }, occurred: function occurred(e) {
            e && (v.cache.occurred[e] !== i && !0 === v.cache.occurred[e] || (v.verbose("Saving callback occurred", e), v.cache.occurred[e] = !0));
          }, scroll: function scroll(e) {
            e = e + b.offset || R.scrollTop() + b.offset, v.cache.scroll = e;
          }, direction: function direction() {
            var e,
                t = v.get.scroll(),
                n = v.get.lastScroll();return e = t > n && n ? "down" : t < n && n ? "up" : "static", v.cache.direction = e, v.cache.direction;
          }, elementPosition: function elementPosition() {
            var e = v.cache.element,
                t = v.get.screenSize();return v.verbose("Saving element position"), e.fits = e.height < t.height, e.offset = A.offset(), e.width = A.outerWidth(), e.height = A.outerHeight(), v.is.verticallyScrollableContext() && (e.offset.top += R.scrollTop() - R.offset().top), v.is.horizontallyScrollableContext() && (e.offset.left += R.scrollLeft - R.offset().left), v.cache.element = e, e;
          }, elementCalculations: function elementCalculations() {
            var e = v.get.screenCalculations(),
                t = v.get.elementPosition();return b.includeMargin ? (t.margin = {}, t.margin.top = parseInt(A.css("margin-top"), 10), t.margin.bottom = parseInt(A.css("margin-bottom"), 10), t.top = t.offset.top - t.margin.top, t.bottom = t.offset.top + t.height + t.margin.bottom) : (t.top = t.offset.top, t.bottom = t.offset.top + t.height), t.topPassed = e.top >= t.top, t.bottomPassed = e.top >= t.bottom, t.topVisible = e.bottom >= t.top && !t.topPassed, t.bottomVisible = e.bottom >= t.bottom && !t.bottomPassed, t.pixelsPassed = 0, t.percentagePassed = 0, t.onScreen = t.topVisible && !t.bottomPassed, t.passing = t.topPassed && !t.bottomPassed, t.offScreen = !t.onScreen, t.passing && (t.pixelsPassed = e.top - t.top, t.percentagePassed = (e.top - t.top) / t.height), v.cache.element = t, v.verbose("Updated element calculations", t), t;
          }, screenCalculations: function screenCalculations() {
            var e = v.get.scroll();return v.save.direction(), v.cache.screen.top = e, v.cache.screen.bottom = e + v.cache.screen.height, v.cache.screen;
          }, screenSize: function screenSize() {
            v.verbose("Saving window position"), v.cache.screen = { height: R.height() };
          }, position: function position() {
            v.save.screenSize(), v.save.elementPosition();
          } }, get: { pixelsPassed: function pixelsPassed(e) {
            var t = v.get.elementCalculations();return e.search("%") > -1 ? t.height * (parseInt(e, 10) / 100) : parseInt(e, 10);
          }, occurred: function occurred(e) {
            return v.cache.occurred !== i && v.cache.occurred[e] || !1;
          }, direction: function direction() {
            return v.cache.direction === i && v.save.direction(), v.cache.direction;
          }, elementPosition: function elementPosition() {
            return v.cache.element === i && v.save.elementPosition(), v.cache.element;
          }, elementCalculations: function elementCalculations() {
            return v.cache.element === i && v.save.elementCalculations(), v.cache.element;
          }, screenCalculations: function screenCalculations() {
            return v.cache.screen === i && v.save.screenCalculations(), v.cache.screen;
          }, screenSize: function screenSize() {
            return v.cache.screen === i && v.save.screenSize(), v.cache.screen;
          }, scroll: function scroll() {
            return v.cache.scroll === i && v.save.scroll(), v.cache.scroll;
          }, lastScroll: function lastScroll() {
            return v.cache.screen === i ? (v.debug("First scroll event, no last scroll could be found"), !1) : v.cache.screen.top;
          } }, setting: function setting(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, b, t);else {
            if (n === i) return b[t];b[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, v, t);else {
            if (n === i) return v[t];v[t] = n;
          }
        }, debug: function debug() {
          !b.silent && b.debug && (b.performance ? v.performance.log(arguments) : (v.debug = Function.prototype.bind.call(console.info, console, b.name + ":"), v.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !b.silent && b.verbose && b.debug && (b.performance ? v.performance.log(arguments) : (v.verbose = Function.prototype.bind.call(console.info, console, b.name + ":"), v.verbose.apply(console, arguments)));
        }, error: function error() {
          b.silent || (v.error = Function.prototype.bind.call(console.error, console, b.name + ":"), v.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n;b.performance && (n = (t = new Date().getTime()) - (l || t), l = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: O, "Execution Time": n })), clearTimeout(v.performance.timer), v.performance.timer = setTimeout(v.performance.display, 500);
          }, display: function display() {
            var t = b.name + ":",
                n = 0;l = !1, clearTimeout(v.performance.timer), e.each(c, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), c = [];
          } }, invoke: function invoke(t, n, o) {
          var r,
              s,
              l,
              c = P;return n = n || f, o = O || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
            var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (c[a] !== i) return s = c[a], !1;if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (v.error(C.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s;
        } }, d ? (P === i && v.initialize(), P.save.scroll(), P.save.calculations(), v.invoke(u)) : (P !== i && P.invoke("destroy"), v.initialize());
    }), a !== i ? a : this;
  }, e.fn.visibility.settings = { name: "Visibility", namespace: "visibility", debug: !1, verbose: !1, performance: !0, observeChanges: !0, initialCheck: !0, refreshOnLoad: !0, refreshOnResize: !0, checkOnRefresh: !0, once: !0, continuous: !1, offset: 0, includeMargin: !1, context: t, throttle: !1, type: !1, zIndex: "10", transition: "fade in", duration: 1e3, onPassed: {}, onOnScreen: !1, onOffScreen: !1, onPassing: !1, onTopVisible: !1, onBottomVisible: !1, onTopPassed: !1, onBottomPassed: !1, onPassingReverse: !1, onTopVisibleReverse: !1, onBottomVisibleReverse: !1, onTopPassedReverse: !1, onBottomPassedReverse: !1, onLoad: function onLoad() {}, onAllLoaded: function onAllLoaded() {}, onFixed: function onFixed() {}, onUnfixed: function onUnfixed() {}, onUpdate: !1, onRefresh: function onRefresh() {}, metadata: { src: "src" }, className: { fixed: "fixed", placeholder: "placeholder", visible: "visible" }, error: { method: "The method you called is not defined.", visible: "Element is hidden, you must call refresh after element becomes visible" } };
}(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

/*!
 * # Semantic UI 2.2.14 - Modal
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ($, window, document, undefined) {

  "use strict";

  window = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

  $.fn.modal = function (parameters) {
    var $allModules = $(this),
        $window = $(window),
        $document = $(document),
        $body = $('body'),
        moduleSelector = $allModules.selector || '',
        time = new Date().getTime(),
        performance = [],
        query = arguments[0],
        methodInvoked = typeof query == 'string',
        queryArguments = [].slice.call(arguments, 1),
        requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      setTimeout(callback, 0);
    },
        returnedValue;

    $allModules.each(function () {
      var settings = $.isPlainObject(parameters) ? $.extend(true, {}, $.fn.modal.settings, parameters) : $.extend({}, $.fn.modal.settings),
          selector = settings.selector,
          className = settings.className,
          namespace = settings.namespace,
          error = settings.error,
          eventNamespace = '.' + namespace,
          moduleNamespace = 'module-' + namespace,
          $module = $(this),
          $context = $(settings.context),
          $close = $module.find(selector.close),
          $allModals,
          $otherModals,
          $focusedElement,
          $dimmable,
          $dimmer,
          element = this,
          instance = $module.data(moduleNamespace),
          ignoreRepeatedEvents = false,
          elementEventNamespace,
          _id,
          observer,
          module;
      module = {

        initialize: function initialize() {
          module.verbose('Initializing dimmer', $context);

          module.create.id();
          module.create.dimmer();
          module.refreshModals();

          module.bind.events();
          if (settings.observeChanges) {
            module.observeChanges();
          }
          module.instantiate();
        },

        instantiate: function instantiate() {
          module.verbose('Storing instance of modal');
          instance = module;
          $module.data(moduleNamespace, instance);
        },

        create: {
          dimmer: function dimmer() {
            var defaultSettings = {
              debug: settings.debug,
              dimmerName: 'modals'
            },
                dimmerSettings = $.extend(true, defaultSettings, settings.dimmerSettings);
            if ($.fn.dimmer === undefined) {
              module.error(error.dimmer);
              return;
            }
            module.debug('Creating dimmer');
            $dimmable = $context.dimmer(dimmerSettings);
            if (settings.detachable) {
              module.verbose('Modal is detachable, moving content into dimmer');
              $dimmable.dimmer('add content', $module);
            } else {
              module.set.undetached();
            }
            $dimmer = $dimmable.dimmer('get dimmer');
          },
          id: function id() {
            _id = (Math.random().toString(16) + '000000000').substr(2, 8);
            elementEventNamespace = '.' + _id;
            module.verbose('Creating unique id for element', _id);
          }
        },

        destroy: function destroy() {
          module.verbose('Destroying previous modal');
          $module.removeData(moduleNamespace).off(eventNamespace);
          $window.off(elementEventNamespace);
          $dimmer.off(elementEventNamespace);
          $close.off(eventNamespace);
          $context.dimmer('destroy');
        },

        observeChanges: function observeChanges() {
          if ('MutationObserver' in window) {
            observer = new MutationObserver(function (mutations) {
              module.debug('DOM tree modified, refreshing');
              module.refresh();
            });
            observer.observe(element, {
              childList: true,
              subtree: true
            });
            module.debug('Setting up mutation observer', observer);
          }
        },

        refresh: function refresh() {
          module.remove.scrolling();
          module.cacheSizes();
          module.set.screenHeight();
          module.set.type();
          module.set.position();
        },

        refreshModals: function refreshModals() {
          $otherModals = $module.siblings(selector.modal);
          $allModals = $otherModals.add($module);
        },

        attachEvents: function attachEvents(selector, event) {
          var $toggle = $(selector);
          event = $.isFunction(module[event]) ? module[event] : module.toggle;
          if ($toggle.length > 0) {
            module.debug('Attaching modal events to element', selector, event);
            $toggle.off(eventNamespace).on('click' + eventNamespace, event);
          } else {
            module.error(error.notFound, selector);
          }
        },

        bind: {
          events: function events() {
            module.verbose('Attaching events');
            $module.on('click' + eventNamespace, selector.close, module.event.close).on('click' + eventNamespace, selector.approve, module.event.approve).on('click' + eventNamespace, selector.deny, module.event.deny);
            $window.on('resize' + elementEventNamespace, module.event.resize);
          }
        },

        get: {
          id: function id() {
            return (Math.random().toString(16) + '000000000').substr(2, 8);
          }
        },

        event: {
          approve: function approve() {
            if (ignoreRepeatedEvents || settings.onApprove.call(element, $(this)) === false) {
              module.verbose('Approve callback returned false cancelling hide');
              return;
            }
            ignoreRepeatedEvents = true;
            module.hide(function () {
              ignoreRepeatedEvents = false;
            });
          },
          deny: function deny() {
            if (ignoreRepeatedEvents || settings.onDeny.call(element, $(this)) === false) {
              module.verbose('Deny callback returned false cancelling hide');
              return;
            }
            ignoreRepeatedEvents = true;
            module.hide(function () {
              ignoreRepeatedEvents = false;
            });
          },
          close: function close() {
            module.hide();
          },
          click: function click(event) {
            var $target = $(event.target),
                isInModal = $target.closest(selector.modal).length > 0,
                isInDOM = $.contains(document.documentElement, event.target);
            if (!isInModal && isInDOM) {
              module.debug('Dimmer clicked, hiding all modals');
              if (module.is.active()) {
                module.remove.clickaway();
                if (settings.allowMultiple) {
                  module.hide();
                } else {
                  module.hideAll();
                }
              }
            }
          },
          debounce: function debounce(method, delay) {
            clearTimeout(module.timer);
            module.timer = setTimeout(method, delay);
          },
          keyboard: function keyboard(event) {
            var keyCode = event.which,
                escapeKey = 27;
            if (keyCode == escapeKey) {
              if (settings.closable) {
                module.debug('Escape key pressed hiding modal');
                module.hide();
              } else {
                module.debug('Escape key pressed, but closable is set to false');
              }
              event.preventDefault();
            }
          },
          resize: function resize() {
            if ($dimmable.dimmer('is active') && (module.is.animating() || module.is.active())) {
              requestAnimationFrame(module.refresh);
            }
          }
        },

        toggle: function toggle() {
          if (module.is.active() || module.is.animating()) {
            module.hide();
          } else {
            module.show();
          }
        },

        show: function show(callback) {
          callback = $.isFunction(callback) ? callback : function () {};
          module.refreshModals();
          module.set.dimmerSettings();
          module.showModal(callback);
        },

        hide: function hide(callback) {
          callback = $.isFunction(callback) ? callback : function () {};
          module.refreshModals();
          module.hideModal(callback);
        },

        showModal: function showModal(callback) {
          callback = $.isFunction(callback) ? callback : function () {};
          if (module.is.animating() || !module.is.active()) {

            module.showDimmer();
            module.cacheSizes();
            module.set.position();
            module.set.screenHeight();
            module.set.type();
            module.set.clickaway();

            if (!settings.allowMultiple && module.others.active()) {
              module.hideOthers(module.showModal);
            } else {
              if (settings.allowMultiple && settings.detachable) {
                $module.detach().appendTo($dimmer);
              }
              settings.onShow.call(element);
              if (settings.transition && $.fn.transition !== undefined && $module.transition('is supported')) {
                module.debug('Showing modal with css animations');
                $module.transition({
                  debug: settings.debug,
                  animation: settings.transition + ' in',
                  queue: settings.queue,
                  duration: settings.duration,
                  useFailSafe: true,
                  onComplete: function onComplete() {
                    settings.onVisible.apply(element);
                    if (settings.keyboardShortcuts) {
                      module.add.keyboardShortcuts();
                    }
                    module.save.focus();
                    module.set.active();
                    if (settings.autofocus) {
                      module.set.autofocus();
                    }
                    callback();
                  }
                });
              } else {
                module.error(error.noTransition);
              }
            }
          } else {
            module.debug('Modal is already visible');
          }
        },

        hideModal: function hideModal(callback, keepDimmed) {
          callback = $.isFunction(callback) ? callback : function () {};
          module.debug('Hiding modal');
          if (settings.onHide.call(element, $(this)) === false) {
            module.verbose('Hide callback returned false cancelling hide');
            return;
          }

          if (module.is.animating() || module.is.active()) {
            if (settings.transition && $.fn.transition !== undefined && $module.transition('is supported')) {
              module.remove.active();
              $module.transition({
                debug: settings.debug,
                animation: settings.transition + ' out',
                queue: settings.queue,
                duration: settings.duration,
                useFailSafe: true,
                onStart: function onStart() {
                  if (!module.others.active() && !keepDimmed) {
                    module.hideDimmer();
                  }
                  if (settings.keyboardShortcuts) {
                    module.remove.keyboardShortcuts();
                  }
                },
                onComplete: function onComplete() {
                  settings.onHidden.call(element);
                  module.restore.focus();
                  callback();
                }
              });
            } else {
              module.error(error.noTransition);
            }
          }
        },

        showDimmer: function showDimmer() {
          if ($dimmable.dimmer('is animating') || !$dimmable.dimmer('is active')) {
            module.debug('Showing dimmer');
            $dimmable.dimmer('show');
          } else {
            module.debug('Dimmer already visible');
          }
        },

        hideDimmer: function hideDimmer() {
          if ($dimmable.dimmer('is animating') || $dimmable.dimmer('is active')) {
            $dimmable.dimmer('hide', function () {
              module.remove.clickaway();
              module.remove.screenHeight();
            });
          } else {
            module.debug('Dimmer is not visible cannot hide');
            return;
          }
        },

        hideAll: function hideAll(callback) {
          var $visibleModals = $allModals.filter('.' + className.active + ', .' + className.animating);
          callback = $.isFunction(callback) ? callback : function () {};
          if ($visibleModals.length > 0) {
            module.debug('Hiding all visible modals');
            module.hideDimmer();
            $visibleModals.modal('hide modal', callback);
          }
        },

        hideOthers: function hideOthers(callback) {
          var $visibleModals = $otherModals.filter('.' + className.active + ', .' + className.animating);
          callback = $.isFunction(callback) ? callback : function () {};
          if ($visibleModals.length > 0) {
            module.debug('Hiding other modals', $otherModals);
            $visibleModals.modal('hide modal', callback, true);
          }
        },

        others: {
          active: function active() {
            return $otherModals.filter('.' + className.active).length > 0;
          },
          animating: function animating() {
            return $otherModals.filter('.' + className.animating).length > 0;
          }
        },

        add: {
          keyboardShortcuts: function keyboardShortcuts() {
            module.verbose('Adding keyboard shortcuts');
            $document.on('keyup' + eventNamespace, module.event.keyboard);
          }
        },

        save: {
          focus: function focus() {
            $focusedElement = $(document.activeElement).blur();
          }
        },

        restore: {
          focus: function focus() {
            if ($focusedElement && $focusedElement.length > 0) {
              $focusedElement.focus();
            }
          }
        },

        remove: {
          active: function active() {
            $module.removeClass(className.active);
          },
          clickaway: function clickaway() {
            if (settings.closable) {
              $dimmer.off('click' + elementEventNamespace);
            }
          },
          bodyStyle: function bodyStyle() {
            if ($body.attr('style') === '') {
              module.verbose('Removing style attribute');
              $body.removeAttr('style');
            }
          },
          screenHeight: function screenHeight() {
            module.debug('Removing page height');
            $body.css('height', '');
          },
          keyboardShortcuts: function keyboardShortcuts() {
            module.verbose('Removing keyboard shortcuts');
            $document.off('keyup' + eventNamespace);
          },
          scrolling: function scrolling() {
            $dimmable.removeClass(className.scrolling);
            $module.removeClass(className.scrolling);
          }
        },

        cacheSizes: function cacheSizes() {
          $module.addClass(className.loading);
          var scrollHeight = $module.prop('scrollHeight'),
              modalHeight = $module.outerHeight();
          if (module.cache === undefined || modalHeight !== 0) {
            module.cache = {
              pageHeight: $(document).outerHeight(),
              height: modalHeight + settings.offset,
              scrollHeight: scrollHeight + settings.offset,
              contextHeight: settings.context == 'body' ? $(window).height() : $dimmable.height()
            };
            module.cache.topOffset = -(module.cache.height / 2);
          }
          $module.removeClass(className.loading);
          module.debug('Caching modal and container sizes', module.cache);
        },

        can: {
          fit: function fit() {
            var contextHeight = module.cache.contextHeight,
                verticalCenter = module.cache.contextHeight / 2,
                topOffset = module.cache.topOffset,
                scrollHeight = module.cache.scrollHeight,
                height = module.cache.height,
                paddingHeight = settings.padding,
                startPosition = verticalCenter + topOffset;
            return scrollHeight > height ? startPosition + scrollHeight + paddingHeight < contextHeight : height + paddingHeight * 2 < contextHeight;
          }
        },

        is: {
          active: function active() {
            return $module.hasClass(className.active);
          },
          animating: function animating() {
            return $module.transition('is supported') ? $module.transition('is animating') : $module.is(':visible');
          },
          scrolling: function scrolling() {
            return $dimmable.hasClass(className.scrolling);
          },
          modernBrowser: function modernBrowser() {
            // appName for IE11 reports 'Netscape' can no longer use
            return !(window.ActiveXObject || "ActiveXObject" in window);
          }
        },

        set: {
          autofocus: function autofocus() {
            var $inputs = $module.find('[tabindex], :input').filter(':visible'),
                $autofocus = $inputs.filter('[autofocus]'),
                $input = $autofocus.length > 0 ? $autofocus.first() : $inputs.first();
            if ($input.length > 0) {
              $input.focus();
            }
          },
          clickaway: function clickaway() {
            if (settings.closable) {
              $dimmer.on('click' + elementEventNamespace, module.event.click);
            }
          },
          dimmerSettings: function dimmerSettings() {
            if ($.fn.dimmer === undefined) {
              module.error(error.dimmer);
              return;
            }
            var defaultSettings = {
              debug: settings.debug,
              dimmerName: 'modals',
              variation: false,
              closable: 'auto',
              duration: {
                show: settings.duration,
                hide: settings.duration
              }
            },
                dimmerSettings = $.extend(true, defaultSettings, settings.dimmerSettings);
            if (settings.inverted) {
              dimmerSettings.variation = dimmerSettings.variation !== undefined ? dimmerSettings.variation + ' inverted' : 'inverted';
              $dimmer.addClass(className.inverted);
            } else {
              $dimmer.removeClass(className.inverted);
            }
            if (settings.blurring) {
              $dimmable.addClass(className.blurring);
            } else {
              $dimmable.removeClass(className.blurring);
            }
            $context.dimmer('setting', dimmerSettings);
          },
          screenHeight: function screenHeight() {
            if (module.can.fit()) {
              $body.css('height', '');
            } else {
              module.debug('Modal is taller than page content, resizing page height');
              $body.css('height', module.cache.height + settings.padding * 2);
            }
          },
          active: function active() {
            $module.addClass(className.active);
          },
          scrolling: function scrolling() {
            $dimmable.addClass(className.scrolling);
            $module.addClass(className.scrolling);
          },
          type: function type() {
            if (module.can.fit()) {
              module.verbose('Modal fits on screen');
              if (!module.others.active() && !module.others.animating()) {
                module.remove.scrolling();
              }
            } else {
              module.verbose('Modal cannot fit on screen setting to scrolling');
              module.set.scrolling();
            }
          },
          position: function position() {
            module.verbose('Centering modal on page', module.cache);
            if (module.can.fit()) {
              $module.css({
                top: '',
                marginTop: module.cache.topOffset
              });
            } else {
              $module.css({
                marginTop: '',
                top: $document.scrollTop()
              });
            }
          },
          undetached: function undetached() {
            $dimmable.addClass(className.undetached);
          }
        },

        setting: function setting(name, value) {
          module.debug('Changing setting', name, value);
          if ($.isPlainObject(name)) {
            $.extend(true, settings, name);
          } else if (value !== undefined) {
            if ($.isPlainObject(settings[name])) {
              $.extend(true, settings[name], value);
            } else {
              settings[name] = value;
            }
          } else {
            return settings[name];
          }
        },
        internal: function internal(name, value) {
          if ($.isPlainObject(name)) {
            $.extend(true, module, name);
          } else if (value !== undefined) {
            module[name] = value;
          } else {
            return module[name];
          }
        },
        debug: function debug() {
          if (!settings.silent && settings.debug) {
            if (settings.performance) {
              module.performance.log(arguments);
            } else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function verbose() {
          if (!settings.silent && settings.verbose && settings.debug) {
            if (settings.performance) {
              module.performance.log(arguments);
            } else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function error() {
          if (!settings.silent) {
            module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
            module.error.apply(console, arguments);
          }
        },
        performance: {
          log: function log(message) {
            var currentTime, executionTime, previousTime;
            if (settings.performance) {
              currentTime = new Date().getTime();
              previousTime = time || currentTime;
              executionTime = currentTime - previousTime;
              time = currentTime;
              performance.push({
                'Name': message[0],
                'Arguments': [].slice.call(message, 1) || '',
                'Element': element,
                'Execution Time': executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 500);
          },
          display: function display() {
            var title = settings.name + ':',
                totalTime = 0;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function (index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if (moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
            if ((console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if (console.table) {
                console.table(performance);
              } else {
                $.each(performance, function (index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time'] + 'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function invoke(query, passedArguments, context) {
          var object = instance,
              maxDepth,
              found,
              response;
          passedArguments = passedArguments || queryArguments;
          context = element || context;
          if (typeof query == 'string' && object !== undefined) {
            query = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function (depth, value) {
              var camelCaseValue = depth != maxDepth ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1) : query;
              if ($.isPlainObject(object[camelCaseValue]) && depth != maxDepth) {
                object = object[camelCaseValue];
              } else if (object[camelCaseValue] !== undefined) {
                found = object[camelCaseValue];
                return false;
              } else if ($.isPlainObject(object[value]) && depth != maxDepth) {
                object = object[value];
              } else if (object[value] !== undefined) {
                found = object[value];
                return false;
              } else {
                return false;
              }
            });
          }
          if ($.isFunction(found)) {
            response = found.apply(context, passedArguments);
          } else if (found !== undefined) {
            response = found;
          }
          if ($.isArray(returnedValue)) {
            returnedValue.push(response);
          } else if (returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          } else if (response !== undefined) {
            returnedValue = response;
          }
          return found;
        }
      };

      if (methodInvoked) {
        if (instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      } else {
        if (instance !== undefined) {
          instance.invoke('destroy');
        }
        module.initialize();
      }
    });

    return returnedValue !== undefined ? returnedValue : this;
  };

  $.fn.modal.settings = {

    name: 'Modal',
    namespace: 'modal',

    silent: false,
    debug: false,
    verbose: false,
    performance: true,

    observeChanges: false,

    allowMultiple: false,
    detachable: true,
    closable: true,
    autofocus: true,

    inverted: false,
    blurring: false,

    dimmerSettings: {
      closable: false,
      useCSS: true
    },

    // whether to use keyboard shortcuts
    keyboardShortcuts: true,

    context: 'body',

    queue: false,
    duration: 500,
    offset: 0,
    transition: 'scale',

    // padding with edge of page
    padding: 50,

    // called before show animation
    onShow: function onShow() {},

    // called after show animation
    onVisible: function onVisible() {},

    // called before hide animation
    onHide: function onHide() {
      return true;
    },

    // called after hide animation
    onHidden: function onHidden() {},

    // called after approve selector match
    onApprove: function onApprove() {
      return true;
    },

    // called after deny selector match
    onDeny: function onDeny() {
      return true;
    },

    selector: {
      close: '> .close',
      approve: '.actions .positive, .actions .approve, .actions .ok',
      deny: '.actions .negative, .actions .deny, .actions .cancel',
      modal: '.ui.modal'
    },
    error: {
      dimmer: 'UI Dimmer, a required component is not included in this page',
      method: 'The method you called is not defined.',
      notFound: 'The element you specified could not be found'
    },
    className: {
      active: 'active',
      animating: 'animating',
      blurring: 'blurring',
      inverted: 'inverted',
      loading: 'loading',
      scrolling: 'scrolling',
      undetached: 'undetached'
    }
  };
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

/*!
 * # Semantic UI 2.2.14 - Sidebar
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ($, window, document, undefined) {

  "use strict";

  window = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

  $.fn.sidebar = function (parameters) {
    var $allModules = $(this),
        $window = $(window),
        $document = $(document),
        $html = $('html'),
        $head = $('head'),
        moduleSelector = $allModules.selector || '',
        time = new Date().getTime(),
        performance = [],
        query = arguments[0],
        methodInvoked = typeof query == 'string',
        queryArguments = [].slice.call(arguments, 1),
        requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      setTimeout(callback, 0);
    },
        returnedValue;

    $allModules.each(function () {
      var settings = $.isPlainObject(parameters) ? $.extend(true, {}, $.fn.sidebar.settings, parameters) : $.extend({}, $.fn.sidebar.settings),
          selector = settings.selector,
          className = settings.className,
          namespace = settings.namespace,
          regExp = settings.regExp,
          error = settings.error,
          eventNamespace = '.' + namespace,
          moduleNamespace = 'module-' + namespace,
          $module = $(this),
          $context = $(settings.context),
          $sidebars = $module.children(selector.sidebar),
          $fixed = $context.children(selector.fixed),
          $pusher = $context.children(selector.pusher),
          $style,
          element = this,
          instance = $module.data(moduleNamespace),
          elementNamespace,
          _id,
          currentScroll,
          transitionEvent,
          module;

      module = {

        initialize: function initialize() {
          module.debug('Initializing sidebar', parameters);

          module.create.id();

          transitionEvent = module.get.transitionEvent();

          // avoids locking rendering if initialized in onReady
          if (settings.delaySetup) {
            requestAnimationFrame(module.setup.layout);
          } else {
            module.setup.layout();
          }

          requestAnimationFrame(function () {
            module.setup.cache();
          });

          module.instantiate();
        },

        instantiate: function instantiate() {
          module.verbose('Storing instance of module', module);
          instance = module;
          $module.data(moduleNamespace, module);
        },

        create: {
          id: function id() {
            _id = (Math.random().toString(16) + '000000000').substr(2, 8);
            elementNamespace = '.' + _id;
            module.verbose('Creating unique id for element', _id);
          }
        },

        destroy: function destroy() {
          module.verbose('Destroying previous module for', $module);
          $module.off(eventNamespace).removeData(moduleNamespace);
          if (module.is.ios()) {
            module.remove.ios();
          }
          // bound by uuid
          $context.off(elementNamespace);
          $window.off(elementNamespace);
          $document.off(elementNamespace);
        },

        event: {
          clickaway: function clickaway(event) {
            var clickedInPusher = $pusher.find(event.target).length > 0 || $pusher.is(event.target),
                clickedContext = $context.is(event.target);
            if (clickedInPusher) {
              module.verbose('User clicked on dimmed page');
              module.hide();
            }
            if (clickedContext) {
              module.verbose('User clicked on dimmable context (scaled out page)');
              module.hide();
            }
          },
          touch: function touch(event) {
            //event.stopPropagation();
          },
          containScroll: function containScroll(event) {
            if (element.scrollTop <= 0) {
              element.scrollTop = 1;
            }
            if (element.scrollTop + element.offsetHeight >= element.scrollHeight) {
              element.scrollTop = element.scrollHeight - element.offsetHeight - 1;
            }
          },
          scroll: function scroll(event) {
            if ($(event.target).closest(selector.sidebar).length === 0) {
              event.preventDefault();
            }
          }
        },

        bind: {
          clickaway: function clickaway() {
            module.verbose('Adding clickaway events to context', $context);
            if (settings.closable) {
              $context.on('click' + elementNamespace, module.event.clickaway).on('touchend' + elementNamespace, module.event.clickaway);
            }
          },
          scrollLock: function scrollLock() {
            if (settings.scrollLock) {
              module.debug('Disabling page scroll');
              $window.on('DOMMouseScroll' + elementNamespace, module.event.scroll);
            }
            module.verbose('Adding events to contain sidebar scroll');
            $document.on('touchmove' + elementNamespace, module.event.touch);
            $module.on('scroll' + eventNamespace, module.event.containScroll);
          }
        },
        unbind: {
          clickaway: function clickaway() {
            module.verbose('Removing clickaway events from context', $context);
            $context.off(elementNamespace);
          },
          scrollLock: function scrollLock() {
            module.verbose('Removing scroll lock from page');
            $document.off(elementNamespace);
            $window.off(elementNamespace);
            $module.off('scroll' + eventNamespace);
          }
        },

        add: {
          inlineCSS: function inlineCSS() {
            var width = module.cache.width || $module.outerWidth(),
                height = module.cache.height || $module.outerHeight(),
                isRTL = module.is.rtl(),
                direction = module.get.direction(),
                distance = {
              left: width,
              right: -width,
              top: height,
              bottom: -height
            },
                style;

            if (isRTL) {
              module.verbose('RTL detected, flipping widths');
              distance.left = -width;
              distance.right = width;
            }

            style = '<style>';

            if (direction === 'left' || direction === 'right') {
              module.debug('Adding CSS rules for animation distance', width);
              style += '' + ' .ui.visible.' + direction + '.sidebar ~ .fixed,' + ' .ui.visible.' + direction + '.sidebar ~ .pusher {' + '   -webkit-transform: translate3d(' + distance[direction] + 'px, 0, 0);' + '           transform: translate3d(' + distance[direction] + 'px, 0, 0);' + ' }';
            } else if (direction === 'top' || direction == 'bottom') {
              style += '' + ' .ui.visible.' + direction + '.sidebar ~ .fixed,' + ' .ui.visible.' + direction + '.sidebar ~ .pusher {' + '   -webkit-transform: translate3d(0, ' + distance[direction] + 'px, 0);' + '           transform: translate3d(0, ' + distance[direction] + 'px, 0);' + ' }';
            }

            /* IE is only browser not to create context with transforms */
            /* https://www.w3.org/Bugs/Public/show_bug.cgi?id=16328 */
            if (module.is.ie()) {
              if (direction === 'left' || direction === 'right') {
                module.debug('Adding CSS rules for animation distance', width);
                style += '' + ' body.pushable > .ui.visible.' + direction + '.sidebar ~ .pusher:after {' + '   -webkit-transform: translate3d(' + distance[direction] + 'px, 0, 0);' + '           transform: translate3d(' + distance[direction] + 'px, 0, 0);' + ' }';
              } else if (direction === 'top' || direction == 'bottom') {
                style += '' + ' body.pushable > .ui.visible.' + direction + '.sidebar ~ .pusher:after {' + '   -webkit-transform: translate3d(0, ' + distance[direction] + 'px, 0);' + '           transform: translate3d(0, ' + distance[direction] + 'px, 0);' + ' }';
              }
              /* opposite sides visible forces content overlay */
              style += '' + ' body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after,' + ' body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {' + '   -webkit-transform: translate3d(0px, 0, 0);' + '           transform: translate3d(0px, 0, 0);' + ' }';
            }
            style += '</style>';
            $style = $(style).appendTo($head);
            module.debug('Adding sizing css to head', $style);
          }
        },

        refresh: function refresh() {
          module.verbose('Refreshing selector cache');
          $context = $(settings.context);
          $sidebars = $context.children(selector.sidebar);
          $pusher = $context.children(selector.pusher);
          $fixed = $context.children(selector.fixed);
          module.clear.cache();
        },

        refreshSidebars: function refreshSidebars() {
          module.verbose('Refreshing other sidebars');
          $sidebars = $context.children(selector.sidebar);
        },

        repaint: function repaint() {
          module.verbose('Forcing repaint event');
          element.style.display = 'none';
          var ignored = element.offsetHeight;
          element.scrollTop = element.scrollTop;
          element.style.display = '';
        },

        setup: {
          cache: function cache() {
            module.cache = {
              width: $module.outerWidth(),
              height: $module.outerHeight(),
              rtl: $module.css('direction') == 'rtl'
            };
          },
          layout: function layout() {
            if ($context.children(selector.pusher).length === 0) {
              module.debug('Adding wrapper element for sidebar');
              module.error(error.pusher);
              $pusher = $('<div class="pusher" />');
              $context.children().not(selector.omitted).not($sidebars).wrapAll($pusher);
              module.refresh();
            }
            if ($module.nextAll(selector.pusher).length === 0 || $module.nextAll(selector.pusher)[0] !== $pusher[0]) {
              module.debug('Moved sidebar to correct parent element');
              module.error(error.movedSidebar, element);
              $module.detach().prependTo($context);
              module.refresh();
            }
            module.clear.cache();
            module.set.pushable();
            module.set.direction();
          }
        },

        attachEvents: function attachEvents(selector, event) {
          var $toggle = $(selector);
          event = $.isFunction(module[event]) ? module[event] : module.toggle;
          if ($toggle.length > 0) {
            module.debug('Attaching sidebar events to element', selector, event);
            $toggle.on('click' + eventNamespace, event);
          } else {
            module.error(error.notFound, selector);
          }
        },

        show: function show(callback) {
          callback = $.isFunction(callback) ? callback : function () {};
          if (module.is.hidden()) {
            module.refreshSidebars();
            if (settings.overlay) {
              module.error(error.overlay);
              settings.transition = 'overlay';
            }
            module.refresh();
            if (module.othersActive()) {
              module.debug('Other sidebars currently visible');
              if (settings.exclusive) {
                // if not overlay queue animation after hide
                if (settings.transition != 'overlay') {
                  module.hideOthers(module.show);
                  return;
                } else {
                  module.hideOthers();
                }
              } else {
                settings.transition = 'overlay';
              }
            }
            module.pushPage(function () {
              callback.call(element);
              settings.onShow.call(element);
            });
            settings.onChange.call(element);
            settings.onVisible.call(element);
          } else {
            module.debug('Sidebar is already visible');
          }
        },

        hide: function hide(callback) {
          callback = $.isFunction(callback) ? callback : function () {};
          if (module.is.visible() || module.is.animating()) {
            module.debug('Hiding sidebar', callback);
            module.refreshSidebars();
            module.pullPage(function () {
              callback.call(element);
              settings.onHidden.call(element);
            });
            settings.onChange.call(element);
            settings.onHide.call(element);
          }
        },

        othersAnimating: function othersAnimating() {
          return $sidebars.not($module).filter('.' + className.animating).length > 0;
        },
        othersVisible: function othersVisible() {
          return $sidebars.not($module).filter('.' + className.visible).length > 0;
        },
        othersActive: function othersActive() {
          return module.othersVisible() || module.othersAnimating();
        },

        hideOthers: function hideOthers(callback) {
          var $otherSidebars = $sidebars.not($module).filter('.' + className.visible),
              sidebarCount = $otherSidebars.length,
              callbackCount = 0;
          callback = callback || function () {};
          $otherSidebars.sidebar('hide', function () {
            callbackCount++;
            if (callbackCount == sidebarCount) {
              callback();
            }
          });
        },

        toggle: function toggle() {
          module.verbose('Determining toggled direction');
          if (module.is.hidden()) {
            module.show();
          } else {
            module.hide();
          }
        },

        pushPage: function pushPage(callback) {
          var transition = module.get.transition(),
              $transition = transition === 'overlay' || module.othersActive() ? $module : $pusher,
              animate,
              dim,
              _transitionEnd;
          callback = $.isFunction(callback) ? callback : function () {};
          if (settings.transition == 'scale down') {
            module.scrollToTop();
          }
          module.set.transition(transition);
          module.repaint();
          animate = function animate() {
            module.bind.clickaway();
            module.add.inlineCSS();
            module.set.animating();
            module.set.visible();
          };
          dim = function dim() {
            module.set.dimmed();
          };
          _transitionEnd = function transitionEnd(event) {
            if (event.target == $transition[0]) {
              $transition.off(transitionEvent + elementNamespace, _transitionEnd);
              module.remove.animating();
              module.bind.scrollLock();
              callback.call(element);
            }
          };
          $transition.off(transitionEvent + elementNamespace);
          $transition.on(transitionEvent + elementNamespace, _transitionEnd);
          requestAnimationFrame(animate);
          if (settings.dimPage && !module.othersVisible()) {
            requestAnimationFrame(dim);
          }
        },

        pullPage: function pullPage(callback) {
          var transition = module.get.transition(),
              $transition = transition == 'overlay' || module.othersActive() ? $module : $pusher,
              animate,
              _transitionEnd2;
          callback = $.isFunction(callback) ? callback : function () {};
          module.verbose('Removing context push state', module.get.direction());

          module.unbind.clickaway();
          module.unbind.scrollLock();

          animate = function animate() {
            module.set.transition(transition);
            module.set.animating();
            module.remove.visible();
            if (settings.dimPage && !module.othersVisible()) {
              $pusher.removeClass(className.dimmed);
            }
          };
          _transitionEnd2 = function transitionEnd(event) {
            if (event.target == $transition[0]) {
              $transition.off(transitionEvent + elementNamespace, _transitionEnd2);
              module.remove.animating();
              module.remove.transition();
              module.remove.inlineCSS();
              if (transition == 'scale down' || settings.returnScroll && module.is.mobile()) {
                module.scrollBack();
              }
              callback.call(element);
            }
          };
          $transition.off(transitionEvent + elementNamespace);
          $transition.on(transitionEvent + elementNamespace, _transitionEnd2);
          requestAnimationFrame(animate);
        },

        scrollToTop: function scrollToTop() {
          module.verbose('Scrolling to top of page to avoid animation issues');
          currentScroll = $(window).scrollTop();
          $module.scrollTop(0);
          window.scrollTo(0, 0);
        },

        scrollBack: function scrollBack() {
          module.verbose('Scrolling back to original page position');
          window.scrollTo(0, currentScroll);
        },

        clear: {
          cache: function cache() {
            module.verbose('Clearing cached dimensions');
            module.cache = {};
          }
        },

        set: {

          // ios only (scroll on html not document). This prevent auto-resize canvas/scroll in ios
          // (This is no longer necessary in latest iOS)
          ios: function ios() {
            $html.addClass(className.ios);
          },

          // container
          pushed: function pushed() {
            $context.addClass(className.pushed);
          },
          pushable: function pushable() {
            $context.addClass(className.pushable);
          },

          // pusher
          dimmed: function dimmed() {
            $pusher.addClass(className.dimmed);
          },

          // sidebar
          active: function active() {
            $module.addClass(className.active);
          },
          animating: function animating() {
            $module.addClass(className.animating);
          },
          transition: function transition(_transition) {
            _transition = _transition || module.get.transition();
            $module.addClass(_transition);
          },
          direction: function direction(_direction) {
            _direction = _direction || module.get.direction();
            $module.addClass(className[_direction]);
          },
          visible: function visible() {
            $module.addClass(className.visible);
          },
          overlay: function overlay() {
            $module.addClass(className.overlay);
          }
        },
        remove: {

          inlineCSS: function inlineCSS() {
            module.debug('Removing inline css styles', $style);
            if ($style && $style.length > 0) {
              $style.remove();
            }
          },

          // ios scroll on html not document
          ios: function ios() {
            $html.removeClass(className.ios);
          },

          // context
          pushed: function pushed() {
            $context.removeClass(className.pushed);
          },
          pushable: function pushable() {
            $context.removeClass(className.pushable);
          },

          // sidebar
          active: function active() {
            $module.removeClass(className.active);
          },
          animating: function animating() {
            $module.removeClass(className.animating);
          },
          transition: function transition(_transition2) {
            _transition2 = _transition2 || module.get.transition();
            $module.removeClass(_transition2);
          },
          direction: function direction(_direction2) {
            _direction2 = _direction2 || module.get.direction();
            $module.removeClass(className[_direction2]);
          },
          visible: function visible() {
            $module.removeClass(className.visible);
          },
          overlay: function overlay() {
            $module.removeClass(className.overlay);
          }
        },

        get: {
          direction: function direction() {
            if ($module.hasClass(className.top)) {
              return className.top;
            } else if ($module.hasClass(className.right)) {
              return className.right;
            } else if ($module.hasClass(className.bottom)) {
              return className.bottom;
            }
            return className.left;
          },
          transition: function transition() {
            var direction = module.get.direction(),
                transition;
            transition = module.is.mobile() ? settings.mobileTransition == 'auto' ? settings.defaultTransition.mobile[direction] : settings.mobileTransition : settings.transition == 'auto' ? settings.defaultTransition.computer[direction] : settings.transition;
            module.verbose('Determined transition', transition);
            return transition;
          },
          transitionEvent: function transitionEvent() {
            var element = document.createElement('element'),
                transitions = {
              'transition': 'transitionend',
              'OTransition': 'oTransitionEnd',
              'MozTransition': 'transitionend',
              'WebkitTransition': 'webkitTransitionEnd'
            },
                transition;
            for (transition in transitions) {
              if (element.style[transition] !== undefined) {
                return transitions[transition];
              }
            }
          }
        },

        is: {

          ie: function ie() {
            var isIE11 = !window.ActiveXObject && 'ActiveXObject' in window,
                isIE = 'ActiveXObject' in window;
            return isIE11 || isIE;
          },

          ios: function ios() {
            var userAgent = navigator.userAgent,
                isIOS = userAgent.match(regExp.ios),
                isMobileChrome = userAgent.match(regExp.mobileChrome);
            if (isIOS && !isMobileChrome) {
              module.verbose('Browser was found to be iOS', userAgent);
              return true;
            } else {
              return false;
            }
          },
          mobile: function mobile() {
            var userAgent = navigator.userAgent,
                isMobile = userAgent.match(regExp.mobile);
            if (isMobile) {
              module.verbose('Browser was found to be mobile', userAgent);
              return true;
            } else {
              module.verbose('Browser is not mobile, using regular transition', userAgent);
              return false;
            }
          },
          hidden: function hidden() {
            return !module.is.visible();
          },
          visible: function visible() {
            return $module.hasClass(className.visible);
          },
          // alias
          open: function open() {
            return module.is.visible();
          },
          closed: function closed() {
            return module.is.hidden();
          },
          vertical: function vertical() {
            return $module.hasClass(className.top);
          },
          animating: function animating() {
            return $context.hasClass(className.animating);
          },
          rtl: function rtl() {
            if (module.cache.rtl === undefined) {
              module.cache.rtl = $module.css('direction') == 'rtl';
            }
            return module.cache.rtl;
          }
        },

        setting: function setting(name, value) {
          module.debug('Changing setting', name, value);
          if ($.isPlainObject(name)) {
            $.extend(true, settings, name);
          } else if (value !== undefined) {
            if ($.isPlainObject(settings[name])) {
              $.extend(true, settings[name], value);
            } else {
              settings[name] = value;
            }
          } else {
            return settings[name];
          }
        },
        internal: function internal(name, value) {
          if ($.isPlainObject(name)) {
            $.extend(true, module, name);
          } else if (value !== undefined) {
            module[name] = value;
          } else {
            return module[name];
          }
        },
        debug: function debug() {
          if (!settings.silent && settings.debug) {
            if (settings.performance) {
              module.performance.log(arguments);
            } else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function verbose() {
          if (!settings.silent && settings.verbose && settings.debug) {
            if (settings.performance) {
              module.performance.log(arguments);
            } else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function error() {
          if (!settings.silent) {
            module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
            module.error.apply(console, arguments);
          }
        },
        performance: {
          log: function log(message) {
            var currentTime, executionTime, previousTime;
            if (settings.performance) {
              currentTime = new Date().getTime();
              previousTime = time || currentTime;
              executionTime = currentTime - previousTime;
              time = currentTime;
              performance.push({
                'Name': message[0],
                'Arguments': [].slice.call(message, 1) || '',
                'Element': element,
                'Execution Time': executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 500);
          },
          display: function display() {
            var title = settings.name + ':',
                totalTime = 0;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function (index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if (moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
            if ((console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if (console.table) {
                console.table(performance);
              } else {
                $.each(performance, function (index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time'] + 'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function invoke(query, passedArguments, context) {
          var object = instance,
              maxDepth,
              found,
              response;
          passedArguments = passedArguments || queryArguments;
          context = element || context;
          if (typeof query == 'string' && object !== undefined) {
            query = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function (depth, value) {
              var camelCaseValue = depth != maxDepth ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1) : query;
              if ($.isPlainObject(object[camelCaseValue]) && depth != maxDepth) {
                object = object[camelCaseValue];
              } else if (object[camelCaseValue] !== undefined) {
                found = object[camelCaseValue];
                return false;
              } else if ($.isPlainObject(object[value]) && depth != maxDepth) {
                object = object[value];
              } else if (object[value] !== undefined) {
                found = object[value];
                return false;
              } else {
                module.error(error.method, query);
                return false;
              }
            });
          }
          if ($.isFunction(found)) {
            response = found.apply(context, passedArguments);
          } else if (found !== undefined) {
            response = found;
          }
          if ($.isArray(returnedValue)) {
            returnedValue.push(response);
          } else if (returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          } else if (response !== undefined) {
            returnedValue = response;
          }
          return found;
        }
      };

      if (methodInvoked) {
        if (instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      } else {
        if (instance !== undefined) {
          module.invoke('destroy');
        }
        module.initialize();
      }
    });

    return returnedValue !== undefined ? returnedValue : this;
  };

  $.fn.sidebar.settings = {

    name: 'Sidebar',
    namespace: 'sidebar',

    silent: false,
    debug: false,
    verbose: false,
    performance: true,

    transition: 'auto',
    mobileTransition: 'auto',

    defaultTransition: {
      computer: {
        left: 'uncover',
        right: 'uncover',
        top: 'overlay',
        bottom: 'overlay'
      },
      mobile: {
        left: 'uncover',
        right: 'uncover',
        top: 'overlay',
        bottom: 'overlay'
      }
    },

    context: 'body',
    exclusive: false,
    closable: true,
    dimPage: true,
    scrollLock: false,
    returnScroll: false,
    delaySetup: false,

    duration: 500,

    onChange: function onChange() {},
    onShow: function onShow() {},
    onHide: function onHide() {},

    onHidden: function onHidden() {},
    onVisible: function onVisible() {},

    className: {
      active: 'active',
      animating: 'animating',
      dimmed: 'dimmed',
      ios: 'ios',
      pushable: 'pushable',
      pushed: 'pushed',
      right: 'right',
      top: 'top',
      left: 'left',
      bottom: 'bottom',
      visible: 'visible'
    },

    selector: {
      fixed: '.fixed',
      omitted: 'script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed',
      pusher: '.pusher',
      sidebar: '.ui.sidebar'
    },

    regExp: {
      ios: /(iPad|iPhone|iPod)/g,
      mobileChrome: /(CriOS)/g,
      mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
    },

    error: {
      method: 'The method you called is not defined.',
      pusher: 'Had to add pusher element. For optimal performance make sure body content is inside a pusher element',
      movedSidebar: 'Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag',
      overlay: 'The overlay setting is no longer supported, use animation: overlay',
      notFound: 'There were no elements that matched the specified selector'
    }

  };
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ })

/******/ });