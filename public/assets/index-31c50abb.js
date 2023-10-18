(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var n, l$3, u$2, t$2, i$2, o$3, r$2, f$2, c$2 = {}, s$2 = [], a$2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, v$2 = Array.isArray;
function h$1(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function p$2(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function y$1(l2, u2, t2) {
  var i2, o2, r2, f2 = {};
  for (r2 in u2)
    "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps)
    for (r2 in l2.defaultProps)
      void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
  return d$3(l2, f2, i2, o2, null);
}
function d$3(n2, t2, i2, o2, r2) {
  var f2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u$2 : r2 };
  return null == r2 && null != l$3.vnode && l$3.vnode(f2), f2;
}
function k$1(n2) {
  return n2.children;
}
function b$2(n2, l2) {
  this.props = n2, this.context = l2;
}
function g$2(n2, l2) {
  if (null == l2)
    return n2.__ ? g$2(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__d || u2.__e;
  return "function" == typeof n2.type ? g$2(n2) : null;
}
function m$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return m$1(n2);
  }
}
function w$2(n2) {
  (!n2.__d && (n2.__d = true) && i$2.push(n2) && !x$1.__r++ || o$3 !== l$3.debounceRendering) && ((o$3 = l$3.debounceRendering) || r$2)(x$1);
}
function x$1() {
  var n2, l2, u2, t2, o2, r2, e2, c2, s2;
  for (i$2.sort(f$2); n2 = i$2.shift(); )
    n2.__d && (l2 = i$2.length, t2 = void 0, o2 = void 0, r2 = void 0, c2 = (e2 = (u2 = n2).__v).__e, (s2 = u2.__P) && (t2 = [], o2 = [], (r2 = h$1({}, e2)).__v = e2.__v + 1, z$1(s2, e2, r2, u2.__n, void 0 !== s2.ownerSVGElement, null != e2.__h ? [c2] : null, t2, null == c2 ? g$2(e2) : c2, e2.__h, o2), L(t2, e2, o2), e2.__e != c2 && m$1(e2)), i$2.length > l2 && i$2.sort(f$2));
  x$1.__r = 0;
}
function P(n2, l2, u2, t2, i2, o2, r2, f2, e2, a2, h2) {
  var p2, y2, _2, b2, m2, w2, x2, P2, C, D2 = 0, H2 = t2 && t2.__k || s$2, I2 = H2.length, T2 = I2, j2 = l2.length;
  for (u2.__k = [], p2 = 0; p2 < j2; p2++)
    null != (b2 = u2.__k[p2] = null == (b2 = l2[p2]) || "boolean" == typeof b2 || "function" == typeof b2 ? null : "string" == typeof b2 || "number" == typeof b2 || "bigint" == typeof b2 ? d$3(null, b2, null, null, b2) : v$2(b2) ? d$3(k$1, { children: b2 }, null, null, null) : b2.__b > 0 ? d$3(b2.type, b2.props, b2.key, b2.ref ? b2.ref : null, b2.__v) : b2) ? (b2.__ = u2, b2.__b = u2.__b + 1, -1 === (P2 = A(b2, H2, x2 = p2 + D2, T2)) ? _2 = c$2 : (_2 = H2[P2] || c$2, H2[P2] = void 0, T2--), z$1(n2, b2, _2, i2, o2, r2, f2, e2, a2, h2), m2 = b2.__e, (y2 = b2.ref) && _2.ref != y2 && (_2.ref && N(_2.ref, null, b2), h2.push(y2, b2.__c || m2, b2)), null != m2 && (null == w2 && (w2 = m2), (C = _2 === c$2 || null === _2.__v) ? -1 == P2 && D2-- : P2 !== x2 && (P2 === x2 + 1 ? D2++ : P2 > x2 ? T2 > j2 - x2 ? D2 += P2 - x2 : D2-- : D2 = P2 < x2 && P2 == x2 - 1 ? P2 - x2 : 0), x2 = p2 + D2, "function" != typeof b2.type || P2 === x2 && _2.__k !== b2.__k ? "function" == typeof b2.type || P2 === x2 && !C ? void 0 !== b2.__d ? (e2 = b2.__d, b2.__d = void 0) : e2 = m2.nextSibling : e2 = S(n2, m2, e2) : e2 = $(b2, e2, n2), "function" == typeof u2.type && (u2.__d = e2))) : (_2 = H2[p2]) && null == _2.key && _2.__e && (_2.__e == e2 && (_2.__ = t2, e2 = g$2(_2)), O$1(_2, _2, false), H2[p2] = null);
  for (u2.__e = w2, p2 = I2; p2--; )
    null != H2[p2] && ("function" == typeof u2.type && null != H2[p2].__e && H2[p2].__e == u2.__d && (u2.__d = H2[p2].__e.nextSibling), O$1(H2[p2], H2[p2]));
}
function $(n2, l2, u2) {
  for (var t2, i2 = n2.__k, o2 = 0; i2 && o2 < i2.length; o2++)
    (t2 = i2[o2]) && (t2.__ = n2, l2 = "function" == typeof t2.type ? $(t2, l2, u2) : S(u2, t2.__e, l2));
  return l2;
}
function S(n2, l2, u2) {
  return null == u2 || u2.parentNode !== n2 ? n2.insertBefore(l2, null) : l2 == u2 && null != l2.parentNode || n2.insertBefore(l2, u2), l2.nextSibling;
}
function A(n2, l2, u2, t2) {
  var i2 = n2.key, o2 = n2.type, r2 = u2 - 1, f2 = u2 + 1, e2 = l2[u2];
  if (null === e2 || e2 && i2 == e2.key && o2 === e2.type)
    return u2;
  if (t2 > (null != e2 ? 1 : 0))
    for (; r2 >= 0 || f2 < l2.length; ) {
      if (r2 >= 0) {
        if ((e2 = l2[r2]) && i2 == e2.key && o2 === e2.type)
          return r2;
        r2--;
      }
      if (f2 < l2.length) {
        if ((e2 = l2[f2]) && i2 == e2.key && o2 === e2.type)
          return f2;
        f2++;
      }
    }
  return -1;
}
function D(n2, l2, u2, t2, i2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || I(n2, o2, null, u2[o2], t2);
  for (o2 in l2)
    i2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || I(n2, o2, l2[o2], u2[o2], t2);
}
function H(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a$2.test(l2) ? u2 : u2 + "px";
}
function I(n2, l2, u2, t2, i2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2)
          for (l2 in t2)
            u2 && l2 in u2 || H(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            t2 && u2[l2] === t2[l2] || H(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/, "$1")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = Date.now(), n2.addEventListener(l2, o2 ? j$1 : T$1, o2)) : n2.removeEventListener(l2, o2 ? j$1 : T$1, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (i2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && "rowSpan" !== l2 && "colSpan" !== l2 && "role" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
function T$1(n2) {
  var u2 = this.l[n2.type + false];
  if (n2.t) {
    if (n2.t <= u2.u)
      return;
  } else
    n2.t = Date.now();
  return u2(l$3.event ? l$3.event(n2) : n2);
}
function j$1(n2) {
  return this.l[n2.type + true](l$3.event ? l$3.event(n2) : n2);
}
function z$1(n2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, p2, y2, d2, _2, g2, m2, w2, x2, $2, C, S2, A2, D2, H2, I2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != t2.__h && (c2 = t2.__h, e2 = u2.__e = t2.__e, u2.__h = null, r2 = [e2]), (a2 = l$3.__b) && a2(u2);
  n:
    if ("function" == typeof I2)
      try {
        if (w2 = u2.props, x2 = (a2 = I2.contextType) && i2[a2.__c], $2 = a2 ? x2 ? x2.props.value : a2.__ : i2, t2.__c ? m2 = (p2 = u2.__c = t2.__c).__ = p2.__E : ("prototype" in I2 && I2.prototype.render ? u2.__c = p2 = new I2(w2, $2) : (u2.__c = p2 = new b$2(w2, $2), p2.constructor = I2, p2.render = q), x2 && x2.sub(p2), p2.props = w2, p2.state || (p2.state = {}), p2.context = $2, p2.__n = i2, y2 = p2.__d = true, p2.__h = [], p2._sb = []), null == p2.__s && (p2.__s = p2.state), null != I2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = h$1({}, p2.__s)), h$1(p2.__s, I2.getDerivedStateFromProps(w2, p2.__s))), d2 = p2.props, _2 = p2.state, p2.__v = u2, y2)
          null == I2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
        else {
          if (null == I2.getDerivedStateFromProps && w2 !== d2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(w2, $2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(w2, p2.__s, $2) || u2.__v === t2.__v)) {
            for (u2.__v !== t2.__v && (p2.props = w2, p2.state = p2.__s, p2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), C = 0; C < p2._sb.length; C++)
              p2.__h.push(p2._sb[C]);
            p2._sb = [], p2.__h.length && f2.push(p2);
            break n;
          }
          null != p2.componentWillUpdate && p2.componentWillUpdate(w2, p2.__s, $2), null != p2.componentDidUpdate && p2.__h.push(function() {
            p2.componentDidUpdate(d2, _2, g2);
          });
        }
        if (p2.context = $2, p2.props = w2, p2.__P = n2, p2.__e = false, S2 = l$3.__r, A2 = 0, "prototype" in I2 && I2.prototype.render) {
          for (p2.state = p2.__s, p2.__d = false, S2 && S2(u2), a2 = p2.render(p2.props, p2.state, p2.context), D2 = 0; D2 < p2._sb.length; D2++)
            p2.__h.push(p2._sb[D2]);
          p2._sb = [];
        } else
          do {
            p2.__d = false, S2 && S2(u2), a2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
          } while (p2.__d && ++A2 < 25);
        p2.state = p2.__s, null != p2.getChildContext && (i2 = h$1(h$1({}, i2), p2.getChildContext())), y2 || null == p2.getSnapshotBeforeUpdate || (g2 = p2.getSnapshotBeforeUpdate(d2, _2)), P(n2, v$2(H2 = null != a2 && a2.type === k$1 && null == a2.key ? a2.props.children : a2) ? H2 : [H2], u2, t2, i2, o2, r2, f2, e2, c2, s2), p2.base = u2.__e, u2.__h = null, p2.__h.length && f2.push(p2), m2 && (p2.__E = p2.__ = null);
      } catch (n3) {
        u2.__v = null, (c2 || null != r2) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l$3.__e(n3, u2, t2);
      }
    else
      null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = M(t2.__e, u2, t2, i2, o2, r2, f2, c2, s2);
  (a2 = l$3.diffed) && a2(u2);
}
function L(n2, u2, t2) {
  for (var i2 = 0; i2 < t2.length; i2++)
    N(t2[i2], t2[++i2], t2[++i2]);
  l$3.__c && l$3.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$3.__e(n3, u3.__v);
    }
  });
}
function M(l2, u2, t2, i2, o2, r2, f2, e2, s2) {
  var a2, h2, y2, d2 = t2.props, _2 = u2.props, k2 = u2.type, b2 = 0;
  if ("svg" === k2 && (o2 = true), null != r2) {
    for (; b2 < r2.length; b2++)
      if ((a2 = r2[b2]) && "setAttribute" in a2 == !!k2 && (k2 ? a2.localName === k2 : 3 === a2.nodeType)) {
        l2 = a2, r2[b2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === k2)
      return document.createTextNode(_2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", k2) : document.createElement(k2, _2.is && _2), r2 = null, e2 = false;
  }
  if (null === k2)
    d2 === _2 || e2 && l2.data === _2 || (l2.data = _2);
  else {
    if (r2 = r2 && n.call(l2.childNodes), h2 = (d2 = t2.props || c$2).dangerouslySetInnerHTML, y2 = _2.dangerouslySetInnerHTML, !e2) {
      if (null != r2)
        for (d2 = {}, b2 = 0; b2 < l2.attributes.length; b2++)
          d2[l2.attributes[b2].name] = l2.attributes[b2].value;
      (y2 || h2) && (y2 && (h2 && y2.__html == h2.__html || y2.__html === l2.innerHTML) || (l2.innerHTML = y2 && y2.__html || ""));
    }
    if (D(l2, _2, d2, o2, e2), y2)
      u2.__k = [];
    else if (P(l2, v$2(b2 = u2.props.children) ? b2 : [b2], u2, t2, i2, o2 && "foreignObject" !== k2, r2, f2, r2 ? r2[0] : t2.__k && g$2(t2, 0), e2, s2), null != r2)
      for (b2 = r2.length; b2--; )
        null != r2[b2] && p$2(r2[b2]);
    e2 || ("value" in _2 && void 0 !== (b2 = _2.value) && (b2 !== l2.value || "progress" === k2 && !b2 || "option" === k2 && b2 !== d2.value) && I(l2, "value", b2, d2.value, false), "checked" in _2 && void 0 !== (b2 = _2.checked) && b2 !== l2.checked && I(l2, "checked", b2, d2.checked, false));
  }
  return l2;
}
function N(n2, u2, t2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$3.__e(n3, t2);
  }
}
function O$1(n2, u2, t2) {
  var i2, o2;
  if (l$3.unmount && l$3.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || N(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount)
      try {
        i2.componentWillUnmount();
      } catch (n3) {
        l$3.__e(n3, u2);
      }
    i2.base = i2.__P = null, n2.__c = void 0;
  }
  if (i2 = n2.__k)
    for (o2 = 0; o2 < i2.length; o2++)
      i2[o2] && O$1(i2[o2], u2, t2 || "function" != typeof n2.type);
  t2 || null == n2.__e || p$2(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function B$1(u2, t2, i2) {
  var o2, r2, f2, e2;
  l$3.__ && l$3.__(u2, t2), r2 = (o2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, f2 = [], e2 = [], z$1(t2, u2 = (!o2 && i2 || t2).__k = y$1(k$1, null, [u2]), r2 || c$2, c$2, void 0 !== t2.ownerSVGElement, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2, e2), L(f2, u2, e2);
}
n = s$2.slice, l$3 = { __e: function(n2, l2, u2, t2) {
  for (var i2, o2, r2; l2 = l2.__; )
    if ((i2 = l2.__c) && !i2.__)
      try {
        if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2)
          return i2.__E = i2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$2 = 0, t$2 = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, b$2.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h$1({}, this.state), "function" == typeof n2 && (n2 = n2(h$1({}, u2), this.props)), n2 && h$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), w$2(this));
}, b$2.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), w$2(this));
}, b$2.prototype.render = k$1, i$2 = [], r$2 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$2 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, x$1.__r = 0;
const button = "";
var _$2 = 0;
function o$2(o2, e2, n2, t2, f2, l2) {
  var s2, u2, a2 = {};
  for (u2 in e2)
    "ref" == u2 ? s2 = e2[u2] : a2[u2] = e2[u2];
  var i2 = { type: o2, props: a2, key: n2, ref: s2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_$2, __source: f2, __self: l2 };
  if ("function" == typeof o2 && (s2 = o2.defaultProps))
    for (u2 in s2)
      void 0 === a2[u2] && (a2[u2] = s2[u2]);
  return l$3.vnode && l$3.vnode(i2), i2;
}
const Button = function(props) {
  const {
    className,
    ..._props
  } = props;
  return o$2("button", {
    ..._props,
    className: createClass("btn", className),
    children: props.children
  });
};
const Primary = function(props) {
  const {
    className,
    ..._props
  } = props;
  return o$2("button", {
    ..._props,
    className: createClass("btn primary", className),
    children: props.children
  });
};
function createClass(defaultClass, propsClass) {
  return propsClass ? defaultClass + " " + propsClass : defaultClass;
}
var t$1, r$1, u$1, i$1, o$1 = 0, f$1 = [], c$1 = [], e$1 = l$3.__b, a$1 = l$3.__r, v$1 = l$3.diffed, l$2 = l$3.__c, m = l$3.unmount;
function d$2(t2, u2) {
  l$3.__h && l$3.__h(r$1, t2, o$1 || u2), o$1 = 0;
  var i2 = r$1.__H || (r$1.__H = { __: [], __h: [] });
  return t2 >= i2.__.length && i2.__.push({ __V: c$1 }), i2.__[t2];
}
function h(n2) {
  return o$1 = 1, s$1(B, n2);
}
function s$1(n2, u2, i2) {
  var o2 = d$2(t$1++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : B(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r$1, !r$1.u)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H)
        return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      }))
        return !c2 || c2.call(this, n3, t2, r2);
      var i3 = false;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), !(!i3 && o2.__c.props === n3) && (!c2 || c2.call(this, n3, t2, r2));
    };
    r$1.u = true;
    var c2 = r$1.shouldComponentUpdate, e2 = r$1.componentWillUpdate;
    r$1.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r$1.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function F(n2, r2) {
  var u2 = d$2(t$1++, 7);
  return z(u2.__H, r2) ? (u2.__V = n2(), u2.i = r2, u2.__h = n2, u2.__V) : u2.__;
}
function T(n2, t2) {
  return o$1 = 8, F(function() {
    return n2;
  }, t2);
}
function b$1() {
  for (var t2; t2 = f$1.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(k), t2.__H.__h.forEach(w$1), t2.__H.__h = [];
      } catch (r2) {
        t2.__H.__h = [], l$3.__e(r2, t2.__v);
      }
}
l$3.__b = function(n2) {
  r$1 = null, e$1 && e$1(n2);
}, l$3.__r = function(n2) {
  a$1 && a$1(n2), t$1 = 0;
  var i2 = (r$1 = n2.__c).__H;
  i2 && (u$1 === r$1 ? (i2.__h = [], r$1.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c$1, n3.__N = n3.i = void 0;
  })) : (i2.__h.forEach(k), i2.__h.forEach(w$1), i2.__h = [], t$1 = 0)), u$1 = r$1;
}, l$3.diffed = function(t2) {
  v$1 && v$1(t2);
  var o2 = t2.__c;
  o2 && o2.__H && (o2.__H.__h.length && (1 !== f$1.push(o2) && i$1 === l$3.requestAnimationFrame || ((i$1 = l$3.requestAnimationFrame) || j)(b$1)), o2.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c$1 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c$1;
  })), u$1 = r$1 = null;
}, l$3.__c = function(t2, r2) {
  r2.some(function(t3) {
    try {
      t3.__h.forEach(k), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || w$1(n2);
      });
    } catch (u2) {
      r2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r2 = [], l$3.__e(u2, t3.__v);
    }
  }), l$2 && l$2(t2, r2);
}, l$3.unmount = function(t2) {
  m && m(t2);
  var r2, u2 = t2.__c;
  u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
    try {
      k(n2);
    } catch (n3) {
      r2 = n3;
    }
  }), u2.__H = void 0, r2 && l$3.__e(r2, u2.__v));
};
var g$1 = "function" == typeof requestAnimationFrame;
function j(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), g$1 && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  g$1 && (t2 = requestAnimationFrame(r2));
}
function k(n2) {
  var t2 = r$1, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r$1 = t2;
}
function w$1(n2) {
  var t2 = r$1;
  n2.__c = n2.__(), r$1 = t2;
}
function z(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function B(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
const textInput = "";
const TextInput = function(props) {
  const {
    name
  } = props;
  const {
    displayName,
    ..._props
  } = props;
  return o$2("div", {
    className: "input-group " + {
      name
    },
    children: [o$2("input", {
      ..._props,
      name,
      type: props.type || "text",
      placeholder: " ",
      required: props.required,
      minLength: props.minlength || props.minLength,
      maxLength: props.maxlength || props.maxLength,
      id: name
    }), o$2("label", {
      htmlFor: name,
      children: displayName
    })]
  });
};
function i() {
  throw new Error("Cycle detected");
}
var t = Symbol.for("preact-signals");
function r() {
  if (!(v > 1)) {
    var i2, t2 = false;
    while (void 0 !== f) {
      var r2 = f;
      f = void 0;
      e++;
      while (void 0 !== r2) {
        var n2 = r2.o;
        r2.o = void 0;
        r2.f &= -3;
        if (!(8 & r2.f) && l$1(r2))
          try {
            r2.c();
          } catch (r3) {
            if (!t2) {
              i2 = r3;
              t2 = true;
            }
          }
        r2 = n2;
      }
    }
    e = 0;
    v--;
    if (t2)
      throw i2;
  } else
    v--;
}
var o = void 0;
var f = void 0, v = 0, e = 0, u = 0;
function c(i2) {
  if (void 0 !== o) {
    var t2 = i2.n;
    if (void 0 === t2 || t2.t !== o) {
      t2 = { i: 0, S: i2, p: o.s, n: void 0, t: o, e: void 0, x: void 0, r: t2 };
      if (void 0 !== o.s)
        o.s.n = t2;
      o.s = t2;
      i2.n = t2;
      if (32 & o.f)
        i2.S(t2);
      return t2;
    } else if (-1 === t2.i) {
      t2.i = 0;
      if (void 0 !== t2.n) {
        t2.n.p = t2.p;
        if (void 0 !== t2.p)
          t2.p.n = t2.n;
        t2.p = o.s;
        t2.n = void 0;
        o.s.n = t2;
        o.s = t2;
      }
      return t2;
    }
  }
}
function d$1(i2) {
  this.v = i2;
  this.i = 0;
  this.n = void 0;
  this.t = void 0;
}
d$1.prototype.brand = t;
d$1.prototype.h = function() {
  return true;
};
d$1.prototype.S = function(i2) {
  if (this.t !== i2 && void 0 === i2.e) {
    i2.x = this.t;
    if (void 0 !== this.t)
      this.t.e = i2;
    this.t = i2;
  }
};
d$1.prototype.U = function(i2) {
  if (void 0 !== this.t) {
    var t2 = i2.e, r2 = i2.x;
    if (void 0 !== t2) {
      t2.x = r2;
      i2.e = void 0;
    }
    if (void 0 !== r2) {
      r2.e = t2;
      i2.x = void 0;
    }
    if (i2 === this.t)
      this.t = r2;
  }
};
d$1.prototype.subscribe = function(i2) {
  var t2 = this;
  return O(function() {
    var r2 = t2.value, n2 = 32 & this.f;
    this.f &= -33;
    try {
      i2(r2);
    } finally {
      this.f |= n2;
    }
  });
};
d$1.prototype.valueOf = function() {
  return this.value;
};
d$1.prototype.toString = function() {
  return this.value + "";
};
d$1.prototype.toJSON = function() {
  return this.value;
};
d$1.prototype.peek = function() {
  return this.v;
};
Object.defineProperty(d$1.prototype, "value", { get: function() {
  var i2 = c(this);
  if (void 0 !== i2)
    i2.i = this.i;
  return this.v;
}, set: function(t2) {
  if (o instanceof _$1)
    !function() {
      throw new Error("Computed cannot have side-effects");
    }();
  if (t2 !== this.v) {
    if (e > 100)
      i();
    this.v = t2;
    this.i++;
    u++;
    v++;
    try {
      for (var n2 = this.t; void 0 !== n2; n2 = n2.x)
        n2.t.N();
    } finally {
      r();
    }
  }
} });
function a(i2) {
  return new d$1(i2);
}
function l$1(i2) {
  for (var t2 = i2.s; void 0 !== t2; t2 = t2.n)
    if (t2.S.i !== t2.i || !t2.S.h() || t2.S.i !== t2.i)
      return true;
  return false;
}
function y(i2) {
  for (var t2 = i2.s; void 0 !== t2; t2 = t2.n) {
    var r2 = t2.S.n;
    if (void 0 !== r2)
      t2.r = r2;
    t2.S.n = t2;
    t2.i = -1;
    if (void 0 === t2.n) {
      i2.s = t2;
      break;
    }
  }
}
function w(i2) {
  var t2 = i2.s, r2 = void 0;
  while (void 0 !== t2) {
    var n2 = t2.p;
    if (-1 === t2.i) {
      t2.S.U(t2);
      if (void 0 !== n2)
        n2.n = t2.n;
      if (void 0 !== t2.n)
        t2.n.p = n2;
    } else
      r2 = t2;
    t2.S.n = t2.r;
    if (void 0 !== t2.r)
      t2.r = void 0;
    t2 = n2;
  }
  i2.s = r2;
}
function _$1(i2) {
  d$1.call(this, void 0);
  this.x = i2;
  this.s = void 0;
  this.g = u - 1;
  this.f = 4;
}
(_$1.prototype = new d$1()).h = function() {
  this.f &= -3;
  if (1 & this.f)
    return false;
  if (32 == (36 & this.f))
    return true;
  this.f &= -5;
  if (this.g === u)
    return true;
  this.g = u;
  this.f |= 1;
  if (this.i > 0 && !l$1(this)) {
    this.f &= -2;
    return true;
  }
  var i2 = o;
  try {
    y(this);
    o = this;
    var t2 = this.x();
    if (16 & this.f || this.v !== t2 || 0 === this.i) {
      this.v = t2;
      this.f &= -17;
      this.i++;
    }
  } catch (i3) {
    this.v = i3;
    this.f |= 16;
    this.i++;
  }
  o = i2;
  w(this);
  this.f &= -2;
  return true;
};
_$1.prototype.S = function(i2) {
  if (void 0 === this.t) {
    this.f |= 36;
    for (var t2 = this.s; void 0 !== t2; t2 = t2.n)
      t2.S.S(t2);
  }
  d$1.prototype.S.call(this, i2);
};
_$1.prototype.U = function(i2) {
  if (void 0 !== this.t) {
    d$1.prototype.U.call(this, i2);
    if (void 0 === this.t) {
      this.f &= -33;
      for (var t2 = this.s; void 0 !== t2; t2 = t2.n)
        t2.S.U(t2);
    }
  }
};
_$1.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i2 = this.t; void 0 !== i2; i2 = i2.x)
      i2.t.N();
  }
};
_$1.prototype.peek = function() {
  if (!this.h())
    i();
  if (16 & this.f)
    throw this.v;
  return this.v;
};
Object.defineProperty(_$1.prototype, "value", { get: function() {
  if (1 & this.f)
    i();
  var t2 = c(this);
  this.h();
  if (void 0 !== t2)
    t2.i = this.i;
  if (16 & this.f)
    throw this.v;
  return this.v;
} });
function p$1(i2) {
  return new _$1(i2);
}
function g(i2) {
  var t2 = i2.u;
  i2.u = void 0;
  if ("function" == typeof t2) {
    v++;
    var n2 = o;
    o = void 0;
    try {
      t2();
    } catch (t3) {
      i2.f &= -2;
      i2.f |= 8;
      b(i2);
      throw t3;
    } finally {
      o = n2;
      r();
    }
  }
}
function b(i2) {
  for (var t2 = i2.s; void 0 !== t2; t2 = t2.n)
    t2.S.U(t2);
  i2.x = void 0;
  i2.s = void 0;
  g(i2);
}
function x(i2) {
  if (o !== this)
    throw new Error("Out-of-order effect");
  w(this);
  o = i2;
  this.f &= -2;
  if (8 & this.f)
    b(this);
  r();
}
function E(i2) {
  this.x = i2;
  this.u = void 0;
  this.s = void 0;
  this.o = void 0;
  this.f = 32;
}
E.prototype.c = function() {
  var i2 = this.S();
  try {
    if (8 & this.f)
      return;
    if (void 0 === this.x)
      return;
    var t2 = this.x();
    if ("function" == typeof t2)
      this.u = t2;
  } finally {
    i2();
  }
};
E.prototype.S = function() {
  if (1 & this.f)
    i();
  this.f |= 1;
  this.f &= -9;
  g(this);
  y(this);
  v++;
  var t2 = o;
  o = this;
  return x.bind(this, t2);
};
E.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 2;
    this.o = f;
    f = this;
  }
};
E.prototype.d = function() {
  this.f |= 8;
  if (!(1 & this.f))
    b(this);
};
function O(i2) {
  var t2 = new E(i2);
  try {
    t2.c();
  } catch (i3) {
    t2.d();
    throw i3;
  }
  return t2.d.bind(t2);
}
var s;
function l(n2, i2) {
  l$3[n2] = i2.bind(null, l$3[n2] || function() {
  });
}
function d(n2) {
  if (s)
    s();
  s = n2 && n2.S();
}
function p(n2) {
  var r2 = this, f2 = n2.data, o2 = useSignal(f2);
  o2.value = f2;
  var e2 = F(function() {
    var n3 = r2.__v;
    while (n3 = n3.__)
      if (n3.__c) {
        n3.__c.__$f |= 4;
        break;
      }
    r2.__$u.c = function() {
      var n4;
      if (!t$2(e2.peek()) && 3 === (null == (n4 = r2.base) ? void 0 : n4.nodeType))
        r2.base.data = e2.peek();
      else {
        r2.__$f |= 1;
        r2.setState({});
      }
    };
    return p$1(function() {
      var n4 = o2.value.value;
      return 0 === n4 ? 0 : true === n4 ? "" : n4 || "";
    });
  }, []);
  return e2.value;
}
p.displayName = "_st";
Object.defineProperties(d$1.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: p }, props: { configurable: true, get: function() {
  return { data: this };
} }, __b: { configurable: true, value: 1 } });
l("__b", function(n2, r2) {
  if ("string" == typeof r2.type) {
    var i2, t2 = r2.props;
    for (var f2 in t2)
      if ("children" !== f2) {
        var o2 = t2[f2];
        if (o2 instanceof d$1) {
          if (!i2)
            r2.__np = i2 = {};
          i2[f2] = o2;
          t2[f2] = o2.peek();
        }
      }
  }
  n2(r2);
});
l("__r", function(n2, r2) {
  d();
  var i2, t2 = r2.__c;
  if (t2) {
    t2.__$f &= -2;
    if (void 0 === (i2 = t2.__$u))
      t2.__$u = i2 = function(n3) {
        var r3;
        O(function() {
          r3 = this;
        });
        r3.c = function() {
          t2.__$f |= 1;
          t2.setState({});
        };
        return r3;
      }();
  }
  d(i2);
  n2(r2);
});
l("__e", function(n2, r2, i2, t2) {
  d();
  n2(r2, i2, t2);
});
l("diffed", function(n2, r2) {
  d();
  var i2;
  if ("string" == typeof r2.type && (i2 = r2.__e)) {
    var t2 = r2.__np, f2 = r2.props;
    if (t2) {
      var o2 = i2.U;
      if (o2)
        for (var e2 in o2) {
          var u2 = o2[e2];
          if (void 0 !== u2 && !(e2 in t2)) {
            u2.d();
            o2[e2] = void 0;
          }
        }
      else
        i2.U = o2 = {};
      for (var a2 in t2) {
        var c2 = o2[a2], s2 = t2[a2];
        if (void 0 === c2) {
          c2 = _(i2, a2, s2, f2);
          o2[a2] = c2;
        } else
          c2.o(s2, f2);
      }
    }
  }
  n2(r2);
});
function _(n2, r2, i2, t2) {
  var f2 = r2 in n2 && void 0 === n2.ownerSVGElement, o2 = a(i2);
  return { o: function(n3, r3) {
    o2.value = n3;
    t2 = r3;
  }, d: O(function() {
    var i3 = o2.value.value;
    if (t2[r2] !== i3) {
      t2[r2] = i3;
      if (f2)
        n2[r2] = i3;
      else if (i3)
        n2.setAttribute(r2, i3);
      else
        n2.removeAttribute(r2);
    }
  }) };
}
l("unmount", function(n2, r2) {
  if ("string" == typeof r2.type) {
    var i2 = r2.__e;
    if (i2) {
      var t2 = i2.U;
      if (t2) {
        i2.U = void 0;
        for (var f2 in t2) {
          var o2 = t2[f2];
          if (o2)
            o2.d();
        }
      }
    }
  } else {
    var e2 = r2.__c;
    if (e2) {
      var u2 = e2.__$u;
      if (u2) {
        e2.__$u = void 0;
        u2.d();
      }
    }
  }
  n2(r2);
});
l("__h", function(n2, r2, i2, t2) {
  if (t2 < 3 || 9 === t2)
    r2.__$f |= 2;
  n2(r2, i2, t2);
});
b$2.prototype.shouldComponentUpdate = function(n2, r2) {
  var i2 = this.__$u;
  if (!(i2 && void 0 !== i2.s || 4 & this.__$f))
    return true;
  if (3 & this.__$f)
    return true;
  for (var t2 in r2)
    return true;
  for (var f2 in n2)
    if ("__source" !== f2 && n2[f2] !== this.props[f2])
      return true;
  for (var o2 in this.props)
    if (!(o2 in n2))
      return true;
  return false;
};
function useSignal(n2) {
  return F(function() {
    return a(n2);
  }, []);
}
function singlePage(cb, opts) {
  var page = new Page(cb, opts);
  window.addEventListener("popstate", onpopstate);
  function onpopstate() {
    var href = getPath();
    page.show(href);
  }
  setTimeout(onpopstate, 0);
  var fn = function(href) {
    return page.show(href);
  };
  fn.push = function(href) {
    return page.push(href);
  };
  fn.show = function(href) {
    return page.show(href);
  };
  return fn;
}
function Page(cb, opts) {
  if (!opts)
    opts = {};
  this.current = null;
  this.hasPushState = opts.pushState !== void 0 ? opts.pushState : window.history && window.history.pushState;
  this.scroll = opts.saveScroll !== false ? {} : null;
  this.cb = cb;
}
Page.prototype.show = function(href) {
  href = href.replace(/^\/+/, "/");
  if (this.current === href)
    return;
  this.saveScroll(href);
  this.current = href;
  var scroll = this.scroll[href];
  this.pushHref(href);
  this.cb(href, {
    scrollX: scroll && scroll[0] || 0,
    scrollY: scroll && scroll[1] || 0
  });
};
Page.prototype.saveScroll = function(href) {
  if (this.scroll && this.current) {
    this.scroll[this.current] = [window.scrollX, window.scrollY];
  }
};
Page.prototype.push = function(href) {
  href = href.replace(/^\/+/, "/");
  this.saveScroll(href);
  this.pushHref(href);
};
Page.prototype.pushHref = function(href) {
  this.current = href;
  var mismatched = getPath() !== href;
  if (mismatched)
    window.history.pushState(null, "", href);
};
function getPath() {
  return window.location.pathname + (window.location.search || "") + (window.location.hash || "");
}
var __defProp$1 = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name$1 = (target, value) => __defProp$1(target, "name", { value, configurable: true });
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var require_src = __commonJS({
  "src/index.cjs"(exports, module) {
    module.exports = CatchLinks2;
    function CatchLinks2(root, cb) {
      root.addEventListener("click", function(ev) {
        if (ev.altKey || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.defaultPrevented) {
          return true;
        }
        var anchor = null;
        for (var n2 = ev.target; n2.parentNode; n2 = n2.parentNode) {
          if (n2.nodeName === "A") {
            anchor = n2;
            break;
          }
        }
        if (!anchor)
          return true;
        const url = new URL(anchor.getAttribute("href"), location.origin);
        if (url.host && url.host !== location.host)
          return true;
        ev.preventDefault();
        const urlPath = url.pathname + url.search;
        cb(resolve(location.pathname, urlPath || "") + (url.hash || ""));
        return false;
      });
    }
    __name$1(CatchLinks2, "CatchLinks");
    CatchLinks2.resolve = resolve;
    function resolve(from, to) {
      const fromArr = from.split("/").map((path) => path.replaceAll("/", "")).filter(Boolean);
      const toArr = to.split("/").map((path) => path.replaceAll("/", ""));
      const isRelative = to.charAt(0) !== "/";
      if (!isRelative)
        return to;
      const str = fromArr.concat(toArr).join("/");
      return str.charAt(0) === "/" ? str : "/" + str;
    }
    __name$1(resolve, "resolve");
  }
});
const CatchLinks = require_src();
function Route(opts) {
  opts = opts || {};
  var listeners = [];
  var el = opts.el || document.body;
  var setRoute = singlePage(function(href, scroll) {
    listeners.forEach(function(cb) {
      cb(href, scroll);
    });
  }, opts);
  CatchLinks(el, setRoute);
  function listen(cb) {
    var i2 = listeners.length;
    listeners.push(cb);
    return function unlisten() {
      listeners.splice(i2, 1);
    };
  }
  listen.setRoute = setRoute;
  return listen;
}
const crypto$1 = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const u8a$2 = (a2) => a2 instanceof Uint8Array;
const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
const isLE$1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!isLE$1)
  throw new Error("Non little-endian hardware is not supported");
function utf8ToBytes$1(str) {
  if (typeof str !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes$1(data) {
  if (typeof data === "string")
    data = utf8ToBytes$1(data);
  if (!u8a$2(data))
    throw new Error(`expected Uint8Array, got ${typeof data}`);
  return data;
}
function concatBytes$1(...arrays) {
  const r2 = new Uint8Array(arrays.reduce((sum, a2) => sum + a2.length, 0));
  let pad = 0;
  arrays.forEach((a2) => {
    if (!u8a$2(a2))
      throw new Error("Uint8Array expected");
    r2.set(a2, pad);
    pad += a2.length;
  });
  return r2;
}
class Hash {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function wrapConstructor(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes$1(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function randomBytes$1(bytesLength = 32) {
  if (crypto$1 && typeof crypto$1.getRandomValues === "function") {
    return crypto$1.getRandomValues(new Uint8Array(bytesLength));
  }
  throw new Error("crypto.getRandomValues must be defined");
}
function bytes$1(b2, ...lengths) {
  if (!(b2 instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (lengths.length > 0 && !lengths.includes(b2.length))
    throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b2.length}`);
}
function exists$1(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output$1(out, instance) {
  bytes$1(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}
function setBigUint64(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  const _32n2 = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n2 & _u32_max);
  const wl = Number(value & _u32_max);
  const h2 = isLE2 ? 4 : 0;
  const l2 = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h2, wh, isLE2);
  view.setUint32(byteOffset + l2, wl, isLE2);
}
class SHA2 extends Hash {
  constructor(blockLen, outputLen, padOffset, isLE2) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE2;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    exists$1(this);
    const { view, buffer, blockLen } = this;
    data = toBytes$1(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    exists$1(this);
    output$1(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE: isLE2 } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i2 = pos; i2 < blockLen; i2++)
      buffer[i2] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
    this.process(view, 0);
    const oview = createView(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state2 = this.get();
    if (outLen > state2.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i2 = 0; i2 < outLen; i2++)
      oview.setUint32(4 * i2, state2[i2], isLE2);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to || (to = new this.constructor());
    to.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to.length = length;
    to.pos = pos;
    to.finished = finished;
    to.destroyed = destroyed;
    if (length % blockLen)
      to.buffer.set(buffer);
    return to;
  }
}
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n2, le = false) {
  if (le)
    return { h: Number(n2 & U32_MASK64), l: Number(n2 >> _32n & U32_MASK64) };
  return { h: Number(n2 >> _32n & U32_MASK64) | 0, l: Number(n2 & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i2 = 0; i2 < lst.length; i2++) {
    const { h: h2, l: l2 } = fromBig(lst[i2], le);
    [Ah[i2], Al[i2]] = [h2, l2];
  }
  return [Ah, Al];
}
const toBig = (h2, l2) => BigInt(h2 >>> 0) << _32n | BigInt(l2 >>> 0);
const shrSH = (h2, _l, s2) => h2 >>> s2;
const shrSL = (h2, l2, s2) => h2 << 32 - s2 | l2 >>> s2;
const rotrSH = (h2, l2, s2) => h2 >>> s2 | l2 << 32 - s2;
const rotrSL = (h2, l2, s2) => h2 << 32 - s2 | l2 >>> s2;
const rotrBH = (h2, l2, s2) => h2 << 64 - s2 | l2 >>> s2 - 32;
const rotrBL = (h2, l2, s2) => h2 >>> s2 - 32 | l2 << 64 - s2;
const rotr32H = (_h, l2) => l2;
const rotr32L = (h2, _l) => h2;
const rotlSH = (h2, l2, s2) => h2 << s2 | l2 >>> 32 - s2;
const rotlSL = (h2, l2, s2) => l2 << s2 | h2 >>> 32 - s2;
const rotlBH = (h2, l2, s2) => l2 << s2 - 32 | h2 >>> 64 - s2;
const rotlBL = (h2, l2, s2) => h2 << s2 - 32 | l2 >>> 64 - s2;
function add(Ah, Al, Bh, Bl) {
  const l2 = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah + Bh + (l2 / 2 ** 32 | 0) | 0, l: l2 | 0 };
}
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
const u64 = {
  fromBig,
  split,
  toBig,
  shrSH,
  shrSL,
  rotrSH,
  rotrSL,
  rotrBH,
  rotrBL,
  rotr32H,
  rotr32L,
  rotlSH,
  rotlSL,
  rotlBH,
  rotlBL,
  add,
  add3L,
  add3H,
  add4L,
  add4H,
  add5H,
  add5L
};
const u64$1 = u64;
const [SHA512_Kh, SHA512_Kl] = /* @__PURE__ */ (() => u64$1.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((n2) => BigInt(n2))))();
const SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
const SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
class SHA512 extends SHA2 {
  constructor() {
    super(128, 64, 16, false);
    this.Ah = 1779033703 | 0;
    this.Al = 4089235720 | 0;
    this.Bh = 3144134277 | 0;
    this.Bl = 2227873595 | 0;
    this.Ch = 1013904242 | 0;
    this.Cl = 4271175723 | 0;
    this.Dh = 2773480762 | 0;
    this.Dl = 1595750129 | 0;
    this.Eh = 1359893119 | 0;
    this.El = 2917565137 | 0;
    this.Fh = 2600822924 | 0;
    this.Fl = 725511199 | 0;
    this.Gh = 528734635 | 0;
    this.Gl = 4215389547 | 0;
    this.Hh = 1541459225 | 0;
    this.Hl = 327033209 | 0;
  }
  // prettier-ignore
  get() {
    const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
  }
  // prettier-ignore
  set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
    this.Ah = Ah | 0;
    this.Al = Al | 0;
    this.Bh = Bh | 0;
    this.Bl = Bl | 0;
    this.Ch = Ch | 0;
    this.Cl = Cl | 0;
    this.Dh = Dh | 0;
    this.Dl = Dl | 0;
    this.Eh = Eh | 0;
    this.El = El | 0;
    this.Fh = Fh | 0;
    this.Fl = Fl | 0;
    this.Gh = Gh | 0;
    this.Gl = Gl | 0;
    this.Hh = Hh | 0;
    this.Hl = Hl | 0;
  }
  process(view, offset) {
    for (let i2 = 0; i2 < 16; i2++, offset += 4) {
      SHA512_W_H[i2] = view.getUint32(offset);
      SHA512_W_L[i2] = view.getUint32(offset += 4);
    }
    for (let i2 = 16; i2 < 80; i2++) {
      const W15h = SHA512_W_H[i2 - 15] | 0;
      const W15l = SHA512_W_L[i2 - 15] | 0;
      const s0h = u64$1.rotrSH(W15h, W15l, 1) ^ u64$1.rotrSH(W15h, W15l, 8) ^ u64$1.shrSH(W15h, W15l, 7);
      const s0l = u64$1.rotrSL(W15h, W15l, 1) ^ u64$1.rotrSL(W15h, W15l, 8) ^ u64$1.shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H[i2 - 2] | 0;
      const W2l = SHA512_W_L[i2 - 2] | 0;
      const s1h = u64$1.rotrSH(W2h, W2l, 19) ^ u64$1.rotrBH(W2h, W2l, 61) ^ u64$1.shrSH(W2h, W2l, 6);
      const s1l = u64$1.rotrSL(W2h, W2l, 19) ^ u64$1.rotrBL(W2h, W2l, 61) ^ u64$1.shrSL(W2h, W2l, 6);
      const SUMl = u64$1.add4L(s0l, s1l, SHA512_W_L[i2 - 7], SHA512_W_L[i2 - 16]);
      const SUMh = u64$1.add4H(SUMl, s0h, s1h, SHA512_W_H[i2 - 7], SHA512_W_H[i2 - 16]);
      SHA512_W_H[i2] = SUMh | 0;
      SHA512_W_L[i2] = SUMl | 0;
    }
    let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    for (let i2 = 0; i2 < 80; i2++) {
      const sigma1h = u64$1.rotrSH(Eh, El, 14) ^ u64$1.rotrSH(Eh, El, 18) ^ u64$1.rotrBH(Eh, El, 41);
      const sigma1l = u64$1.rotrSL(Eh, El, 14) ^ u64$1.rotrSL(Eh, El, 18) ^ u64$1.rotrBL(Eh, El, 41);
      const CHIh = Eh & Fh ^ ~Eh & Gh;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = u64$1.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i2], SHA512_W_L[i2]);
      const T1h = u64$1.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i2], SHA512_W_H[i2]);
      const T1l = T1ll | 0;
      const sigma0h = u64$1.rotrSH(Ah, Al, 28) ^ u64$1.rotrBH(Ah, Al, 34) ^ u64$1.rotrBH(Ah, Al, 39);
      const sigma0l = u64$1.rotrSL(Ah, Al, 28) ^ u64$1.rotrBL(Ah, Al, 34) ^ u64$1.rotrBL(Ah, Al, 39);
      const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
      const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
      Hh = Gh | 0;
      Hl = Gl | 0;
      Gh = Fh | 0;
      Gl = Fl | 0;
      Fh = Eh | 0;
      Fl = El | 0;
      ({ h: Eh, l: El } = u64$1.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
      Dh = Ch | 0;
      Dl = Cl | 0;
      Ch = Bh | 0;
      Cl = Bl | 0;
      Bh = Ah | 0;
      Bl = Al | 0;
      const All = u64$1.add3L(T1l, sigma0l, MAJl);
      Ah = u64$1.add3H(All, T1h, sigma0h, MAJh);
      Al = All | 0;
    }
    ({ h: Ah, l: Al } = u64$1.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
    ({ h: Bh, l: Bl } = u64$1.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
    ({ h: Ch, l: Cl } = u64$1.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
    ({ h: Dh, l: Dl } = u64$1.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
    ({ h: Eh, l: El } = u64$1.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
    ({ h: Fh, l: Fl } = u64$1.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
    ({ h: Gh, l: Gl } = u64$1.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
    ({ h: Hh, l: Hl } = u64$1.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
    this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
  }
  roundClean() {
    SHA512_W_H.fill(0);
    SHA512_W_L.fill(0);
  }
  destroy() {
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const sha512 = /* @__PURE__ */ wrapConstructor(() => new SHA512());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
const _1n$5 = BigInt(1);
const _2n$3 = BigInt(2);
const u8a$1 = (a2) => a2 instanceof Uint8Array;
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_2, i2) => i2.toString(16).padStart(2, "0"));
function bytesToHex(bytes2) {
  if (!u8a$1(bytes2))
    throw new Error("Uint8Array expected");
  let hex = "";
  for (let i2 = 0; i2 < bytes2.length; i2++) {
    hex += hexes[bytes2[i2]];
  }
  return hex;
}
function hexToNumber(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  return BigInt(hex === "" ? "0" : `0x${hex}`);
}
function hexToBytes(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  const len = hex.length;
  if (len % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + len);
  const array = new Uint8Array(len / 2);
  for (let i2 = 0; i2 < array.length; i2++) {
    const j2 = i2 * 2;
    const hexByte = hex.slice(j2, j2 + 2);
    const byte = Number.parseInt(hexByte, 16);
    if (Number.isNaN(byte) || byte < 0)
      throw new Error("Invalid byte sequence");
    array[i2] = byte;
  }
  return array;
}
function bytesToNumberBE(bytes2) {
  return hexToNumber(bytesToHex(bytes2));
}
function bytesToNumberLE(bytes2) {
  if (!u8a$1(bytes2))
    throw new Error("Uint8Array expected");
  return hexToNumber(bytesToHex(Uint8Array.from(bytes2).reverse()));
}
function numberToBytesBE(n2, len) {
  return hexToBytes(n2.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE(n2, len) {
  return numberToBytesBE(n2, len).reverse();
}
function ensureBytes$1(title, hex, expectedLength) {
  let res;
  if (typeof hex === "string") {
    try {
      res = hexToBytes(hex);
    } catch (e2) {
      throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e2}`);
    }
  } else if (u8a$1(hex)) {
    res = Uint8Array.from(hex);
  } else {
    throw new Error(`${title} must be hex string or Uint8Array`);
  }
  const len = res.length;
  if (typeof expectedLength === "number" && len !== expectedLength)
    throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
  return res;
}
function concatBytes(...arrays) {
  const r2 = new Uint8Array(arrays.reduce((sum, a2) => sum + a2.length, 0));
  let pad = 0;
  arrays.forEach((a2) => {
    if (!u8a$1(a2))
      throw new Error("Uint8Array expected");
    r2.set(a2, pad);
    pad += a2.length;
  });
  return r2;
}
const bitMask = (n2) => (_2n$3 << BigInt(n2 - 1)) - _1n$5;
const validatorFns = {
  bigint: (val) => typeof val === "bigint",
  function: (val) => typeof val === "function",
  boolean: (val) => typeof val === "boolean",
  string: (val) => typeof val === "string",
  stringOrUint8Array: (val) => typeof val === "string" || val instanceof Uint8Array,
  isSafeInteger: (val) => Number.isSafeInteger(val),
  array: (val) => Array.isArray(val),
  field: (val, object) => object.Fp.isValid(val),
  hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
};
function validateObject(object, validators, optValidators = {}) {
  const checkField = (fieldName, type, isOptional) => {
    const checkVal = validatorFns[type];
    if (typeof checkVal !== "function")
      throw new Error(`Invalid validator "${type}", expected function`);
    const val = object[fieldName];
    if (isOptional && val === void 0)
      return;
    if (!checkVal(val, object)) {
      throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
    }
  };
  for (const [fieldName, type] of Object.entries(validators))
    checkField(fieldName, type, false);
  for (const [fieldName, type] of Object.entries(optValidators))
    checkField(fieldName, type, true);
  return object;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _0n$3 = BigInt(0), _1n$4 = BigInt(1), _2n$2 = BigInt(2), _3n = BigInt(3);
const _4n = BigInt(4), _5n$1 = BigInt(5), _8n$1 = BigInt(8);
BigInt(9);
BigInt(16);
function mod(a2, b2) {
  const result = a2 % b2;
  return result >= _0n$3 ? result : b2 + result;
}
function pow(num, power, modulo) {
  if (modulo <= _0n$3 || power < _0n$3)
    throw new Error("Expected power/modulo > 0");
  if (modulo === _1n$4)
    return _0n$3;
  let res = _1n$4;
  while (power > _0n$3) {
    if (power & _1n$4)
      res = res * num % modulo;
    num = num * num % modulo;
    power >>= _1n$4;
  }
  return res;
}
function pow2(x2, power, modulo) {
  let res = x2;
  while (power-- > _0n$3) {
    res *= res;
    res %= modulo;
  }
  return res;
}
function invert(number2, modulo) {
  if (number2 === _0n$3 || modulo <= _0n$3) {
    throw new Error(`invert: expected positive integers, got n=${number2} mod=${modulo}`);
  }
  let a2 = mod(number2, modulo);
  let b2 = modulo;
  let x2 = _0n$3, u2 = _1n$4;
  while (a2 !== _0n$3) {
    const q2 = b2 / a2;
    const r2 = b2 % a2;
    const m2 = x2 - u2 * q2;
    b2 = a2, a2 = r2, x2 = u2, u2 = m2;
  }
  const gcd = b2;
  if (gcd !== _1n$4)
    throw new Error("invert: does not exist");
  return mod(x2, modulo);
}
function tonelliShanks(P2) {
  const legendreC = (P2 - _1n$4) / _2n$2;
  let Q, S2, Z;
  for (Q = P2 - _1n$4, S2 = 0; Q % _2n$2 === _0n$3; Q /= _2n$2, S2++)
    ;
  for (Z = _2n$2; Z < P2 && pow(Z, legendreC, P2) !== P2 - _1n$4; Z++)
    ;
  if (S2 === 1) {
    const p1div4 = (P2 + _1n$4) / _4n;
    return function tonelliFast(Fp2, n2) {
      const root = Fp2.pow(n2, p1div4);
      if (!Fp2.eql(Fp2.sqr(root), n2))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  const Q1div2 = (Q + _1n$4) / _2n$2;
  return function tonelliSlow(Fp2, n2) {
    if (Fp2.pow(n2, legendreC) === Fp2.neg(Fp2.ONE))
      throw new Error("Cannot find square root");
    let r2 = S2;
    let g2 = Fp2.pow(Fp2.mul(Fp2.ONE, Z), Q);
    let x2 = Fp2.pow(n2, Q1div2);
    let b2 = Fp2.pow(n2, Q);
    while (!Fp2.eql(b2, Fp2.ONE)) {
      if (Fp2.eql(b2, Fp2.ZERO))
        return Fp2.ZERO;
      let m2 = 1;
      for (let t2 = Fp2.sqr(b2); m2 < r2; m2++) {
        if (Fp2.eql(t2, Fp2.ONE))
          break;
        t2 = Fp2.sqr(t2);
      }
      const ge = Fp2.pow(g2, _1n$4 << BigInt(r2 - m2 - 1));
      g2 = Fp2.sqr(ge);
      x2 = Fp2.mul(x2, ge);
      b2 = Fp2.mul(b2, g2);
      r2 = m2;
    }
    return x2;
  };
}
function FpSqrt(P2) {
  if (P2 % _4n === _3n) {
    const p1div4 = (P2 + _1n$4) / _4n;
    return function sqrt3mod4(Fp2, n2) {
      const root = Fp2.pow(n2, p1div4);
      if (!Fp2.eql(Fp2.sqr(root), n2))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  if (P2 % _8n$1 === _5n$1) {
    const c1 = (P2 - _5n$1) / _8n$1;
    return function sqrt5mod8(Fp2, n2) {
      const n22 = Fp2.mul(n2, _2n$2);
      const v2 = Fp2.pow(n22, c1);
      const nv = Fp2.mul(n2, v2);
      const i2 = Fp2.mul(Fp2.mul(nv, _2n$2), v2);
      const root = Fp2.mul(nv, Fp2.sub(i2, Fp2.ONE));
      if (!Fp2.eql(Fp2.sqr(root), n2))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  return tonelliShanks(P2);
}
const isNegativeLE = (num, modulo) => (mod(num, modulo) & _1n$4) === _1n$4;
const FIELD_FIELDS = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function validateField(field) {
  const initial = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  };
  const opts = FIELD_FIELDS.reduce((map, val) => {
    map[val] = "function";
    return map;
  }, initial);
  return validateObject(field, opts);
}
function FpPow(f2, num, power) {
  if (power < _0n$3)
    throw new Error("Expected power > 0");
  if (power === _0n$3)
    return f2.ONE;
  if (power === _1n$4)
    return num;
  let p2 = f2.ONE;
  let d2 = num;
  while (power > _0n$3) {
    if (power & _1n$4)
      p2 = f2.mul(p2, d2);
    d2 = f2.sqr(d2);
    power >>= _1n$4;
  }
  return p2;
}
function FpInvertBatch(f2, nums) {
  const tmp = new Array(nums.length);
  const lastMultiplied = nums.reduce((acc, num, i2) => {
    if (f2.is0(num))
      return acc;
    tmp[i2] = acc;
    return f2.mul(acc, num);
  }, f2.ONE);
  const inverted = f2.inv(lastMultiplied);
  nums.reduceRight((acc, num, i2) => {
    if (f2.is0(num))
      return acc;
    tmp[i2] = f2.mul(acc, tmp[i2]);
    return f2.mul(acc, num);
  }, inverted);
  return tmp;
}
function nLength(n2, nBitLength) {
  const _nBitLength = nBitLength !== void 0 ? nBitLength : n2.toString(2).length;
  const nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
function Field(ORDER, bitLen, isLE2 = false, redef = {}) {
  if (ORDER <= _0n$3)
    throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
  const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen);
  if (BYTES > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const sqrtP = FpSqrt(ORDER);
  const f2 = Object.freeze({
    ORDER,
    BITS,
    BYTES,
    MASK: bitMask(BITS),
    ZERO: _0n$3,
    ONE: _1n$4,
    create: (num) => mod(num, ORDER),
    isValid: (num) => {
      if (typeof num !== "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
      return _0n$3 <= num && num < ORDER;
    },
    is0: (num) => num === _0n$3,
    isOdd: (num) => (num & _1n$4) === _1n$4,
    neg: (num) => mod(-num, ORDER),
    eql: (lhs, rhs) => lhs === rhs,
    sqr: (num) => mod(num * num, ORDER),
    add: (lhs, rhs) => mod(lhs + rhs, ORDER),
    sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
    mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
    pow: (num, power) => FpPow(f2, num, power),
    div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
    // Same as above, but doesn't normalize
    sqrN: (num) => num * num,
    addN: (lhs, rhs) => lhs + rhs,
    subN: (lhs, rhs) => lhs - rhs,
    mulN: (lhs, rhs) => lhs * rhs,
    inv: (num) => invert(num, ORDER),
    sqrt: redef.sqrt || ((n2) => sqrtP(f2, n2)),
    invertBatch: (lst) => FpInvertBatch(f2, lst),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (a2, b2, c2) => c2 ? b2 : a2,
    toBytes: (num) => isLE2 ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES),
    fromBytes: (bytes2) => {
      if (bytes2.length !== BYTES)
        throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes2.length}`);
      return isLE2 ? bytesToNumberLE(bytes2) : bytesToNumberBE(bytes2);
    }
  });
  return Object.freeze(f2);
}
function FpSqrtEven(Fp2, elm) {
  if (!Fp2.isOdd)
    throw new Error(`Field doesn't have isOdd`);
  const root = Fp2.sqrt(elm);
  return Fp2.isOdd(root) ? Fp2.neg(root) : root;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _0n$2 = BigInt(0);
const _1n$3 = BigInt(1);
function wNAF(c2, bits) {
  const constTimeNegate = (condition, item) => {
    const neg = item.negate();
    return condition ? neg : item;
  };
  const opts = (W) => {
    const windows = Math.ceil(bits / W) + 1;
    const windowSize = 2 ** (W - 1);
    return { windows, windowSize };
  };
  return {
    constTimeNegate,
    // non-const time multiplication ladder
    unsafeLadder(elm, n2) {
      let p2 = c2.ZERO;
      let d2 = elm;
      while (n2 > _0n$2) {
        if (n2 & _1n$3)
          p2 = p2.add(d2);
        d2 = d2.double();
        n2 >>= _1n$3;
      }
      return p2;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(elm, W) {
      const { windows, windowSize } = opts(W);
      const points = [];
      let p2 = elm;
      let base = p2;
      for (let window2 = 0; window2 < windows; window2++) {
        base = p2;
        points.push(base);
        for (let i2 = 1; i2 < windowSize; i2++) {
          base = base.add(p2);
          points.push(base);
        }
        p2 = base.double();
      }
      return points;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(W, precomputes, n2) {
      const { windows, windowSize } = opts(W);
      let p2 = c2.ZERO;
      let f2 = c2.BASE;
      const mask = BigInt(2 ** W - 1);
      const maxNumber = 2 ** W;
      const shiftBy = BigInt(W);
      for (let window2 = 0; window2 < windows; window2++) {
        const offset = window2 * windowSize;
        let wbits = Number(n2 & mask);
        n2 >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n2 += _1n$3;
        }
        const offset1 = offset;
        const offset2 = offset + Math.abs(wbits) - 1;
        const cond1 = window2 % 2 !== 0;
        const cond2 = wbits < 0;
        if (wbits === 0) {
          f2 = f2.add(constTimeNegate(cond1, precomputes[offset1]));
        } else {
          p2 = p2.add(constTimeNegate(cond2, precomputes[offset2]));
        }
      }
      return { p: p2, f: f2 };
    },
    wNAFCached(P2, precomputesMap, n2, transform) {
      const W = P2._WINDOW_SIZE || 1;
      let comp = precomputesMap.get(P2);
      if (!comp) {
        comp = this.precomputeWindow(P2, W);
        if (W !== 1) {
          precomputesMap.set(P2, transform(comp));
        }
      }
      return this.wNAF(W, comp, n2);
    }
  };
}
function validateBasic(curve) {
  validateField(curve.Fp);
  validateObject(curve, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  });
  return Object.freeze({
    ...nLength(curve.n, curve.nBitLength),
    ...curve,
    ...{ p: curve.Fp.ORDER }
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _0n$1 = BigInt(0), _1n$2 = BigInt(1), _2n$1 = BigInt(2), _8n = BigInt(8);
const VERIFY_DEFAULT = { zip215: true };
function validateOpts$1(curve) {
  const opts = validateBasic(curve);
  validateObject(curve, {
    hash: "function",
    a: "bigint",
    d: "bigint",
    randomBytes: "function"
  }, {
    adjustScalarBytes: "function",
    domain: "function",
    uvRatio: "function",
    mapToCurve: "function"
  });
  return Object.freeze({ ...opts });
}
function twistedEdwards(curveDef) {
  const CURVE = validateOpts$1(curveDef);
  const { Fp: Fp2, n: CURVE_ORDER, prehash, hash: cHash, randomBytes: randomBytes2, nByteLength, h: cofactor } = CURVE;
  const MASK = _2n$1 << BigInt(nByteLength * 8) - _1n$2;
  const modP = Fp2.create;
  const uvRatio2 = CURVE.uvRatio || ((u2, v2) => {
    try {
      return { isValid: true, value: Fp2.sqrt(u2 * Fp2.inv(v2)) };
    } catch (e2) {
      return { isValid: false, value: _0n$1 };
    }
  });
  const adjustScalarBytes2 = CURVE.adjustScalarBytes || ((bytes2) => bytes2);
  const domain = CURVE.domain || ((data, ctx, phflag) => {
    if (ctx.length || phflag)
      throw new Error("Contexts/pre-hash are not supported");
    return data;
  });
  const inBig = (n2) => typeof n2 === "bigint" && _0n$1 < n2;
  const inRange = (n2, max) => inBig(n2) && inBig(max) && n2 < max;
  const in0MaskRange = (n2) => n2 === _0n$1 || inRange(n2, MASK);
  function assertInRange(n2, max) {
    if (inRange(n2, max))
      return n2;
    throw new Error(`Expected valid scalar < ${max}, got ${typeof n2} ${n2}`);
  }
  function assertGE0(n2) {
    return n2 === _0n$1 ? n2 : assertInRange(n2, CURVE_ORDER);
  }
  const pointPrecomputes = /* @__PURE__ */ new Map();
  function isPoint(other) {
    if (!(other instanceof Point))
      throw new Error("ExtendedPoint expected");
  }
  class Point {
    constructor(ex, ey, ez, et) {
      this.ex = ex;
      this.ey = ey;
      this.ez = ez;
      this.et = et;
      if (!in0MaskRange(ex))
        throw new Error("x required");
      if (!in0MaskRange(ey))
        throw new Error("y required");
      if (!in0MaskRange(ez))
        throw new Error("z required");
      if (!in0MaskRange(et))
        throw new Error("t required");
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(p2) {
      if (p2 instanceof Point)
        throw new Error("extended point not allowed");
      const { x: x2, y: y2 } = p2 || {};
      if (!in0MaskRange(x2) || !in0MaskRange(y2))
        throw new Error("invalid affine point");
      return new Point(x2, y2, _1n$2, modP(x2 * y2));
    }
    static normalizeZ(points) {
      const toInv = Fp2.invertBatch(points.map((p2) => p2.ez));
      return points.map((p2, i2) => p2.toAffine(toInv[i2])).map(Point.fromAffine);
    }
    // "Private method", don't use it directly
    _setWindowSize(windowSize) {
      this._WINDOW_SIZE = windowSize;
      pointPrecomputes.delete(this);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      const { a: a2, d: d2 } = CURVE;
      if (this.is0())
        throw new Error("bad point: ZERO");
      const { ex: X, ey: Y, ez: Z, et: T2 } = this;
      const X2 = modP(X * X);
      const Y2 = modP(Y * Y);
      const Z2 = modP(Z * Z);
      const Z4 = modP(Z2 * Z2);
      const aX2 = modP(X2 * a2);
      const left = modP(Z2 * modP(aX2 + Y2));
      const right = modP(Z4 + modP(d2 * modP(X2 * Y2)));
      if (left !== right)
        throw new Error("bad point: equation left != right (1)");
      const XY = modP(X * Y);
      const ZT = modP(Z * T2);
      if (XY !== ZT)
        throw new Error("bad point: equation left != right (2)");
    }
    // Compare one point to another.
    equals(other) {
      isPoint(other);
      const { ex: X1, ey: Y1, ez: Z1 } = this;
      const { ex: X2, ey: Y2, ez: Z2 } = other;
      const X1Z2 = modP(X1 * Z2);
      const X2Z1 = modP(X2 * Z1);
      const Y1Z2 = modP(Y1 * Z2);
      const Y2Z1 = modP(Y2 * Z1);
      return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
    }
    is0() {
      return this.equals(Point.ZERO);
    }
    negate() {
      return new Point(modP(-this.ex), this.ey, this.ez, modP(-this.et));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a: a2 } = CURVE;
      const { ex: X1, ey: Y1, ez: Z1 } = this;
      const A2 = modP(X1 * X1);
      const B2 = modP(Y1 * Y1);
      const C = modP(_2n$1 * modP(Z1 * Z1));
      const D2 = modP(a2 * A2);
      const x1y1 = X1 + Y1;
      const E2 = modP(modP(x1y1 * x1y1) - A2 - B2);
      const G2 = D2 + B2;
      const F2 = G2 - C;
      const H2 = D2 - B2;
      const X3 = modP(E2 * F2);
      const Y3 = modP(G2 * H2);
      const T3 = modP(E2 * H2);
      const Z3 = modP(F2 * G2);
      return new Point(X3, Y3, Z3, T3);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(other) {
      isPoint(other);
      const { a: a2, d: d2 } = CURVE;
      const { ex: X1, ey: Y1, ez: Z1, et: T1 } = this;
      const { ex: X2, ey: Y2, ez: Z2, et: T2 } = other;
      if (a2 === BigInt(-1)) {
        const A3 = modP((Y1 - X1) * (Y2 + X2));
        const B3 = modP((Y1 + X1) * (Y2 - X2));
        const F3 = modP(B3 - A3);
        if (F3 === _0n$1)
          return this.double();
        const C2 = modP(Z1 * _2n$1 * T2);
        const D3 = modP(T1 * _2n$1 * Z2);
        const E3 = D3 + C2;
        const G3 = B3 + A3;
        const H3 = D3 - C2;
        const X32 = modP(E3 * F3);
        const Y32 = modP(G3 * H3);
        const T32 = modP(E3 * H3);
        const Z32 = modP(F3 * G3);
        return new Point(X32, Y32, Z32, T32);
      }
      const A2 = modP(X1 * X2);
      const B2 = modP(Y1 * Y2);
      const C = modP(T1 * d2 * T2);
      const D2 = modP(Z1 * Z2);
      const E2 = modP((X1 + Y1) * (X2 + Y2) - A2 - B2);
      const F2 = D2 - C;
      const G2 = D2 + C;
      const H2 = modP(B2 - a2 * A2);
      const X3 = modP(E2 * F2);
      const Y3 = modP(G2 * H2);
      const T3 = modP(E2 * H2);
      const Z3 = modP(F2 * G2);
      return new Point(X3, Y3, Z3, T3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    wNAF(n2) {
      return wnaf.wNAFCached(this, pointPrecomputes, n2, Point.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(scalar) {
      const { p: p2, f: f2 } = this.wNAF(assertInRange(scalar, CURVE_ORDER));
      return Point.normalizeZ([p2, f2])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    multiplyUnsafe(scalar) {
      let n2 = assertGE0(scalar);
      if (n2 === _0n$1)
        return I2;
      if (this.equals(I2) || n2 === _1n$2)
        return this;
      if (this.equals(G))
        return this.wNAF(n2).p;
      return wnaf.unsafeLadder(this, n2);
    }
    // Checks if point is of small order.
    // If you add something to small order point, you will have "dirty"
    // point with torsion component.
    // Multiplies point by cofactor and checks if the result is 0.
    isSmallOrder() {
      return this.multiplyUnsafe(cofactor).is0();
    }
    // Multiplies point by curve order and checks if the result is 0.
    // Returns `false` is the point is dirty.
    isTorsionFree() {
      return wnaf.unsafeLadder(this, CURVE_ORDER).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(iz) {
      const { ex: x2, ey: y2, ez: z2 } = this;
      const is0 = this.is0();
      if (iz == null)
        iz = is0 ? _8n : Fp2.inv(z2);
      const ax = modP(x2 * iz);
      const ay = modP(y2 * iz);
      const zz = modP(z2 * iz);
      if (is0)
        return { x: _0n$1, y: _1n$2 };
      if (zz !== _1n$2)
        throw new Error("invZ was invalid");
      return { x: ax, y: ay };
    }
    clearCofactor() {
      const { h: cofactor2 } = CURVE;
      if (cofactor2 === _1n$2)
        return this;
      return this.multiplyUnsafe(cofactor2);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(hex, zip215 = false) {
      const { d: d2, a: a2 } = CURVE;
      const len = Fp2.BYTES;
      hex = ensureBytes$1("pointHex", hex, len);
      const normed = hex.slice();
      const lastByte = hex[len - 1];
      normed[len - 1] = lastByte & ~128;
      const y2 = bytesToNumberLE(normed);
      if (y2 === _0n$1)
        ;
      else {
        if (zip215)
          assertInRange(y2, MASK);
        else
          assertInRange(y2, Fp2.ORDER);
      }
      const y22 = modP(y2 * y2);
      const u2 = modP(y22 - _1n$2);
      const v2 = modP(d2 * y22 - a2);
      let { isValid, value: x2 } = uvRatio2(u2, v2);
      if (!isValid)
        throw new Error("Point.fromHex: invalid y coordinate");
      const isXOdd = (x2 & _1n$2) === _1n$2;
      const isLastByteOdd = (lastByte & 128) !== 0;
      if (!zip215 && x2 === _0n$1 && isLastByteOdd)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      if (isLastByteOdd !== isXOdd)
        x2 = modP(-x2);
      return Point.fromAffine({ x: x2, y: y2 });
    }
    static fromPrivateKey(privKey) {
      return getExtendedPublicKey(privKey).point;
    }
    toRawBytes() {
      const { x: x2, y: y2 } = this.toAffine();
      const bytes2 = numberToBytesLE(y2, Fp2.BYTES);
      bytes2[bytes2.length - 1] |= x2 & _1n$2 ? 128 : 0;
      return bytes2;
    }
    toHex() {
      return bytesToHex(this.toRawBytes());
    }
  }
  Point.BASE = new Point(CURVE.Gx, CURVE.Gy, _1n$2, modP(CURVE.Gx * CURVE.Gy));
  Point.ZERO = new Point(_0n$1, _1n$2, _1n$2, _0n$1);
  const { BASE: G, ZERO: I2 } = Point;
  const wnaf = wNAF(Point, nByteLength * 8);
  function modN(a2) {
    return mod(a2, CURVE_ORDER);
  }
  function modN_LE(hash2) {
    return modN(bytesToNumberLE(hash2));
  }
  function getExtendedPublicKey(key) {
    const len = nByteLength;
    key = ensureBytes$1("private key", key, len);
    const hashed = ensureBytes$1("hashed private key", cHash(key), 2 * len);
    const head = adjustScalarBytes2(hashed.slice(0, len));
    const prefix = hashed.slice(len, 2 * len);
    const scalar = modN_LE(head);
    const point = G.multiply(scalar);
    const pointBytes = point.toRawBytes();
    return { head, prefix, scalar, point, pointBytes };
  }
  function getPublicKey(privKey) {
    return getExtendedPublicKey(privKey).pointBytes;
  }
  function hashDomainToScalar(context = new Uint8Array(), ...msgs) {
    const msg = concatBytes(...msgs);
    return modN_LE(cHash(domain(msg, ensureBytes$1("context", context), !!prehash)));
  }
  function sign2(msg, privKey, options = {}) {
    msg = ensureBytes$1("message", msg);
    if (prehash)
      msg = prehash(msg);
    const { prefix, scalar, pointBytes } = getExtendedPublicKey(privKey);
    const r2 = hashDomainToScalar(options.context, prefix, msg);
    const R = G.multiply(r2).toRawBytes();
    const k2 = hashDomainToScalar(options.context, R, pointBytes, msg);
    const s2 = modN(r2 + k2 * scalar);
    assertGE0(s2);
    const res = concatBytes(R, numberToBytesLE(s2, Fp2.BYTES));
    return ensureBytes$1("result", res, nByteLength * 2);
  }
  const verifyOpts = VERIFY_DEFAULT;
  function verify2(sig, msg, publicKey, options = verifyOpts) {
    const { context, zip215 } = options;
    const len = Fp2.BYTES;
    sig = ensureBytes$1("signature", sig, 2 * len);
    msg = ensureBytes$1("message", msg);
    if (prehash)
      msg = prehash(msg);
    const s2 = bytesToNumberLE(sig.slice(len, 2 * len));
    let A2, R, SB;
    try {
      A2 = Point.fromHex(publicKey, zip215);
      R = Point.fromHex(sig.slice(0, len), zip215);
      SB = G.multiplyUnsafe(s2);
    } catch (error) {
      return false;
    }
    if (!zip215 && A2.isSmallOrder())
      return false;
    const k2 = hashDomainToScalar(context, R.toRawBytes(), A2.toRawBytes(), msg);
    const RkA = R.add(A2.multiplyUnsafe(k2));
    return RkA.subtract(SB).clearCofactor().equals(Point.ZERO);
  }
  G._setWindowSize(8);
  const utils = {
    getExtendedPublicKey,
    // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
    randomPrivateKey: () => randomBytes2(Fp2.BYTES),
    /**
     * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
     * values. This slows down first getPublicKey() by milliseconds (see Speed section),
     * but allows to speed-up subsequent getPublicKey() calls up to 20x.
     * @param windowSize 2, 4, 8, 16
     */
    precompute(windowSize = 8, point = Point.BASE) {
      point._setWindowSize(windowSize);
      point.multiply(BigInt(3));
      return point;
    }
  };
  return {
    CURVE,
    getPublicKey,
    sign: sign2,
    verify: verify2,
    ExtendedPoint: Point,
    utils
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _0n = BigInt(0);
const _1n$1 = BigInt(1);
function validateOpts(curve) {
  validateObject(curve, {
    a: "bigint"
  }, {
    montgomeryBits: "isSafeInteger",
    nByteLength: "isSafeInteger",
    adjustScalarBytes: "function",
    domain: "function",
    powPminus2: "function",
    Gu: "bigint"
  });
  return Object.freeze({ ...curve });
}
function montgomery(curveDef) {
  const CURVE = validateOpts(curveDef);
  const { P: P2 } = CURVE;
  const modP = (n2) => mod(n2, P2);
  const montgomeryBits = CURVE.montgomeryBits;
  const montgomeryBytes = Math.ceil(montgomeryBits / 8);
  const fieldLen = CURVE.nByteLength;
  const adjustScalarBytes2 = CURVE.adjustScalarBytes || ((bytes2) => bytes2);
  const powPminus2 = CURVE.powPminus2 || ((x2) => pow(x2, P2 - BigInt(2), P2));
  function cswap(swap, x_2, x_3) {
    const dummy = modP(swap * (x_2 - x_3));
    x_2 = modP(x_2 - dummy);
    x_3 = modP(x_3 + dummy);
    return [x_2, x_3];
  }
  function assertFieldElement(n2) {
    if (typeof n2 === "bigint" && _0n <= n2 && n2 < P2)
      return n2;
    throw new Error("Expected valid scalar 0 < scalar < CURVE.P");
  }
  const a24 = (CURVE.a - BigInt(2)) / BigInt(4);
  function montgomeryLadder(pointU, scalar) {
    const u2 = assertFieldElement(pointU);
    const k2 = assertFieldElement(scalar);
    const x_1 = u2;
    let x_2 = _1n$1;
    let z_2 = _0n;
    let x_3 = u2;
    let z_3 = _1n$1;
    let swap = _0n;
    let sw;
    for (let t2 = BigInt(montgomeryBits - 1); t2 >= _0n; t2--) {
      const k_t = k2 >> t2 & _1n$1;
      swap ^= k_t;
      sw = cswap(swap, x_2, x_3);
      x_2 = sw[0];
      x_3 = sw[1];
      sw = cswap(swap, z_2, z_3);
      z_2 = sw[0];
      z_3 = sw[1];
      swap = k_t;
      const A2 = x_2 + z_2;
      const AA = modP(A2 * A2);
      const B2 = x_2 - z_2;
      const BB = modP(B2 * B2);
      const E2 = AA - BB;
      const C = x_3 + z_3;
      const D2 = x_3 - z_3;
      const DA = modP(D2 * A2);
      const CB = modP(C * B2);
      const dacb = DA + CB;
      const da_cb = DA - CB;
      x_3 = modP(dacb * dacb);
      z_3 = modP(x_1 * modP(da_cb * da_cb));
      x_2 = modP(AA * BB);
      z_2 = modP(E2 * (AA + modP(a24 * E2)));
    }
    sw = cswap(swap, x_2, x_3);
    x_2 = sw[0];
    x_3 = sw[1];
    sw = cswap(swap, z_2, z_3);
    z_2 = sw[0];
    z_3 = sw[1];
    const z2 = powPminus2(z_2);
    return modP(x_2 * z2);
  }
  function encodeUCoordinate(u2) {
    return numberToBytesLE(modP(u2), montgomeryBytes);
  }
  function decodeUCoordinate(uEnc) {
    const u2 = ensureBytes$1("u coordinate", uEnc, montgomeryBytes);
    if (fieldLen === montgomeryBytes)
      u2[fieldLen - 1] &= 127;
    return bytesToNumberLE(u2);
  }
  function decodeScalar(n2) {
    const bytes2 = ensureBytes$1("scalar", n2);
    if (bytes2.length !== montgomeryBytes && bytes2.length !== fieldLen)
      throw new Error(`Expected ${montgomeryBytes} or ${fieldLen} bytes, got ${bytes2.length}`);
    return bytesToNumberLE(adjustScalarBytes2(bytes2));
  }
  function scalarMult(scalar, u2) {
    const pointU = decodeUCoordinate(u2);
    const _scalar = decodeScalar(scalar);
    const pu = montgomeryLadder(pointU, _scalar);
    if (pu === _0n)
      throw new Error("Invalid private or public key received");
    return encodeUCoordinate(pu);
  }
  const GuBytes = encodeUCoordinate(CURVE.Gu);
  function scalarMultBase(scalar) {
    return scalarMult(scalar, GuBytes);
  }
  return {
    scalarMult,
    scalarMultBase,
    getSharedSecret: (privateKey, publicKey) => scalarMult(privateKey, publicKey),
    getPublicKey: (privateKey) => scalarMultBase(privateKey),
    utils: { randomPrivateKey: () => CURVE.randomBytes(CURVE.nByteLength) },
    GuBytes
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ED25519_P = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
const ED25519_SQRT_M1 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const _1n = BigInt(1), _2n = BigInt(2), _5n = BigInt(5);
const _10n = BigInt(10), _20n = BigInt(20), _40n = BigInt(40), _80n = BigInt(80);
function ed25519_pow_2_252_3(x2) {
  const P2 = ED25519_P;
  const x22 = x2 * x2 % P2;
  const b2 = x22 * x2 % P2;
  const b4 = pow2(b2, _2n, P2) * b2 % P2;
  const b5 = pow2(b4, _1n, P2) * x2 % P2;
  const b10 = pow2(b5, _5n, P2) * b5 % P2;
  const b20 = pow2(b10, _10n, P2) * b10 % P2;
  const b40 = pow2(b20, _20n, P2) * b20 % P2;
  const b80 = pow2(b40, _40n, P2) * b40 % P2;
  const b160 = pow2(b80, _80n, P2) * b80 % P2;
  const b240 = pow2(b160, _80n, P2) * b80 % P2;
  const b250 = pow2(b240, _10n, P2) * b10 % P2;
  const pow_p_5_8 = pow2(b250, _2n, P2) * x2 % P2;
  return { pow_p_5_8, b2 };
}
function adjustScalarBytes(bytes2) {
  bytes2[0] &= 248;
  bytes2[31] &= 127;
  bytes2[31] |= 64;
  return bytes2;
}
function uvRatio(u2, v2) {
  const P2 = ED25519_P;
  const v3 = mod(v2 * v2 * v2, P2);
  const v7 = mod(v3 * v3 * v2, P2);
  const pow3 = ed25519_pow_2_252_3(u2 * v7).pow_p_5_8;
  let x2 = mod(u2 * v3 * pow3, P2);
  const vx2 = mod(v2 * x2 * x2, P2);
  const root1 = x2;
  const root2 = mod(x2 * ED25519_SQRT_M1, P2);
  const useRoot1 = vx2 === u2;
  const useRoot2 = vx2 === mod(-u2, P2);
  const noRoot = vx2 === mod(-u2 * ED25519_SQRT_M1, P2);
  if (useRoot1)
    x2 = root1;
  if (useRoot2 || noRoot)
    x2 = root2;
  if (isNegativeLE(x2, P2))
    x2 = mod(-x2, P2);
  return { isValid: useRoot1 || useRoot2, value: x2 };
}
const Fp = Field(ED25519_P, void 0, true);
const ed25519Defaults = {
  // Param: a
  a: BigInt(-1),
  // d is equal to -121665/121666 over finite field.
  // Negative number is P - number, and division is invert(number, P)
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
  Fp,
  // Subgroup order: how many points curve has
  // 2n**252n + 27742317777372353535851937790883648493n;
  n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
  // Cofactor
  h: BigInt(8),
  // Base point (x, y) aka generator point
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
  hash: sha512,
  randomBytes: randomBytes$1,
  adjustScalarBytes,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio
};
const ed25519 = /* @__PURE__ */ twistedEdwards(ed25519Defaults);
function ed25519_domain(data, ctx, phflag) {
  if (ctx.length > 255)
    throw new Error("Context is too big");
  return concatBytes$1(utf8ToBytes$1("SigEd25519 no Ed25519 collisions"), new Uint8Array([phflag ? 1 : 0, ctx.length]), ctx, data);
}
/* @__PURE__ */ twistedEdwards({
  ...ed25519Defaults,
  domain: ed25519_domain
});
/* @__PURE__ */ twistedEdwards({
  ...ed25519Defaults,
  domain: ed25519_domain,
  prehash: sha512
});
const x25519 = /* @__PURE__ */ (() => montgomery({
  P: ED25519_P,
  a: BigInt(486662),
  montgomeryBits: 255,
  nByteLength: 32,
  Gu: BigInt(9),
  powPminus2: (x2) => {
    const P2 = ED25519_P;
    const { pow_p_5_8, b2 } = ed25519_pow_2_252_3(x2);
    return mod(pow2(pow_p_5_8, BigInt(3), P2) * b2, P2);
  },
  adjustScalarBytes,
  randomBytes: randomBytes$1
}))();
const ELL2_C1 = (Fp.ORDER + BigInt(3)) / BigInt(8);
Fp.pow(_2n, ELL2_C1);
Fp.sqrt(Fp.neg(Fp.ONE));
(Fp.ORDER - BigInt(5)) / BigInt(8);
BigInt(486662);
FpSqrtEven(Fp, Fp.neg(BigInt(486664)));
BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */
const u8a = (a2) => a2 instanceof Uint8Array;
const u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
const isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!isLE)
  throw new Error("Non little-endian hardware is not supported");
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  if (!u8a(data))
    throw new Error(`expected Uint8Array, got ${typeof data}`);
  return data;
}
const isPlainObject = (obj) => Object.prototype.toString.call(obj) === "[object Object]" && obj.constructor === Object;
function checkOpts(defaults, opts) {
  if (opts !== void 0 && (typeof opts !== "object" || !isPlainObject(opts)))
    throw new Error("Options should be object or undefined");
  const merged = Object.assign(defaults, opts);
  return merged;
}
function ensureBytes(b2, len) {
  if (!(b2 instanceof Uint8Array))
    throw new Error("Uint8Array expected");
  if (typeof len === "number") {
    if (b2.length !== len)
      throw new Error(`Uint8Array length ${len} expected`);
  }
}
function equalBytes(a2, b2) {
  if (a2.length !== b2.length)
    throw new Error("equalBytes: Different size of Uint8Arrays");
  let isSame = true;
  for (let i2 = 0; i2 < a2.length; i2++)
    isSame && (isSame = a2[i2] === b2[i2]);
  return isSame;
}
function number(n2) {
  if (!Number.isSafeInteger(n2) || n2 < 0)
    throw new Error(`Wrong positive integer: ${n2}`);
}
function bool(b2) {
  if (typeof b2 !== "boolean")
    throw new Error(`Expected boolean, not ${b2}`);
}
function bytes(b2, ...lengths) {
  if (!(b2 instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (lengths.length > 0 && !lengths.includes(b2.length))
    throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b2.length}`);
}
function hash(hash2) {
  if (typeof hash2 !== "function" || typeof hash2.create !== "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  number(hash2.outputLen);
  number(hash2.blockLen);
}
function exists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output(out, instance) {
  bytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}
const assert = { number, bool, bytes, hash, exists, output };
const sigma16 = utf8ToBytes("expand 16-byte k");
const sigma32 = utf8ToBytes("expand 32-byte k");
const sigma16_32 = u32(sigma16);
const sigma32_32 = u32(sigma32);
const isAligned32 = (b2) => !(b2.byteOffset % 4);
const salsaBasic = (opts) => {
  const { core, rounds, counterRight, counterLen, allow128bitKeys, extendNonceFn, blockLen } = checkOpts({ rounds: 20, counterRight: false, counterLen: 8, allow128bitKeys: true, blockLen: 64 }, opts);
  assert.number(counterLen);
  assert.number(rounds);
  assert.number(blockLen);
  assert.bool(counterRight);
  assert.bool(allow128bitKeys);
  const blockLen32 = blockLen / 4;
  if (blockLen % 4 !== 0)
    throw new Error("Salsa/ChaCha: blockLen should be aligned to 4 bytes");
  return (key, nonce, data, output2, counter = 0) => {
    assert.bytes(key);
    assert.bytes(nonce);
    assert.bytes(data);
    if (!output2)
      output2 = new Uint8Array(data.length);
    assert.bytes(output2);
    assert.number(counter);
    if (counter < 0 || counter >= 2 ** 32 - 1)
      throw new Error("Salsa/ChaCha: counter overflow");
    if (output2.length < data.length) {
      throw new Error(`Salsa/ChaCha: output (${output2.length}) is shorter than data (${data.length})`);
    }
    const toClean = [];
    let k2, sigma;
    if (key.length === 32) {
      k2 = key;
      sigma = sigma32_32;
    } else if (key.length === 16 && allow128bitKeys) {
      k2 = new Uint8Array(32);
      k2.set(key);
      k2.set(key, 16);
      sigma = sigma16_32;
      toClean.push(k2);
    } else
      throw new Error(`Salsa/ChaCha: wrong key length=${key.length}, expected`);
    if (extendNonceFn) {
      if (nonce.length <= 16)
        throw new Error(`Salsa/ChaCha: extended nonce should be bigger than 16 bytes`);
      k2 = extendNonceFn(sigma, k2, nonce.subarray(0, 16), new Uint8Array(32));
      toClean.push(k2);
      nonce = nonce.subarray(16);
    }
    const nonceLen = 16 - counterLen;
    if (nonce.length !== nonceLen)
      throw new Error(`Salsa/ChaCha: nonce should be ${nonceLen} or 16 bytes`);
    if (nonceLen !== 12) {
      const nc = new Uint8Array(12);
      nc.set(nonce, counterRight ? 0 : 12 - nonce.length);
      toClean.push(nonce = nc);
    }
    const block = new Uint8Array(blockLen);
    const b32 = u32(block);
    const k32 = u32(k2);
    const n32 = u32(nonce);
    const d32 = isAligned32(data) && u32(data);
    const o32 = isAligned32(output2) && u32(output2);
    toClean.push(b32);
    const len = data.length;
    for (let pos = 0, ctr = counter; pos < len; ctr++) {
      core(sigma, k32, n32, b32, ctr, rounds);
      if (ctr >= 2 ** 32 - 1)
        throw new Error("Salsa/ChaCha: counter overflow");
      const take = Math.min(blockLen, len - pos);
      if (take === blockLen && o32 && d32) {
        const pos32 = pos / 4;
        if (pos % 4 !== 0)
          throw new Error("Salsa/ChaCha: wrong block position");
        for (let j2 = 0; j2 < blockLen32; j2++)
          o32[pos32 + j2] = d32[pos32 + j2] ^ b32[j2];
        pos += blockLen;
        continue;
      }
      for (let j2 = 0; j2 < take; j2++)
        output2[pos + j2] = data[pos + j2] ^ block[j2];
      pos += take;
    }
    for (let i2 = 0; i2 < toClean.length; i2++)
      toClean[i2].fill(0);
    return output2;
  };
};
const u8to16 = (a2, i2) => a2[i2++] & 255 | (a2[i2++] & 255) << 8;
class Poly1305 {
  constructor(key) {
    this.blockLen = 16;
    this.outputLen = 16;
    this.buffer = new Uint8Array(16);
    this.r = new Uint16Array(10);
    this.h = new Uint16Array(10);
    this.pad = new Uint16Array(8);
    this.pos = 0;
    this.finished = false;
    key = toBytes(key);
    ensureBytes(key, 32);
    const t0 = u8to16(key, 0);
    const t1 = u8to16(key, 2);
    const t2 = u8to16(key, 4);
    const t3 = u8to16(key, 6);
    const t4 = u8to16(key, 8);
    const t5 = u8to16(key, 10);
    const t6 = u8to16(key, 12);
    const t7 = u8to16(key, 14);
    this.r[0] = t0 & 8191;
    this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
    this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
    this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
    this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
    this.r[5] = t4 >>> 1 & 8190;
    this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
    this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
    this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
    this.r[9] = t7 >>> 5 & 127;
    for (let i2 = 0; i2 < 8; i2++)
      this.pad[i2] = u8to16(key, 16 + 2 * i2);
  }
  process(data, offset, isLast = false) {
    const hibit = isLast ? 0 : 1 << 11;
    const { h: h2, r: r2 } = this;
    const r0 = r2[0];
    const r1 = r2[1];
    const r22 = r2[2];
    const r3 = r2[3];
    const r4 = r2[4];
    const r5 = r2[5];
    const r6 = r2[6];
    const r7 = r2[7];
    const r8 = r2[8];
    const r9 = r2[9];
    const t0 = u8to16(data, offset + 0);
    const t1 = u8to16(data, offset + 2);
    const t2 = u8to16(data, offset + 4);
    const t3 = u8to16(data, offset + 6);
    const t4 = u8to16(data, offset + 8);
    const t5 = u8to16(data, offset + 10);
    const t6 = u8to16(data, offset + 12);
    const t7 = u8to16(data, offset + 14);
    let h0 = h2[0] + (t0 & 8191);
    let h1 = h2[1] + ((t0 >>> 13 | t1 << 3) & 8191);
    let h22 = h2[2] + ((t1 >>> 10 | t2 << 6) & 8191);
    let h3 = h2[3] + ((t2 >>> 7 | t3 << 9) & 8191);
    let h4 = h2[4] + ((t3 >>> 4 | t4 << 12) & 8191);
    let h5 = h2[5] + (t4 >>> 1 & 8191);
    let h6 = h2[6] + ((t4 >>> 14 | t5 << 2) & 8191);
    let h7 = h2[7] + ((t5 >>> 11 | t6 << 5) & 8191);
    let h8 = h2[8] + ((t6 >>> 8 | t7 << 8) & 8191);
    let h9 = h2[9] + (t7 >>> 5 | hibit);
    let c2 = 0;
    let d0 = c2 + h0 * r0 + h1 * (5 * r9) + h22 * (5 * r8) + h3 * (5 * r7) + h4 * (5 * r6);
    c2 = d0 >>> 13;
    d0 &= 8191;
    d0 += h5 * (5 * r5) + h6 * (5 * r4) + h7 * (5 * r3) + h8 * (5 * r22) + h9 * (5 * r1);
    c2 += d0 >>> 13;
    d0 &= 8191;
    let d1 = c2 + h0 * r1 + h1 * r0 + h22 * (5 * r9) + h3 * (5 * r8) + h4 * (5 * r7);
    c2 = d1 >>> 13;
    d1 &= 8191;
    d1 += h5 * (5 * r6) + h6 * (5 * r5) + h7 * (5 * r4) + h8 * (5 * r3) + h9 * (5 * r22);
    c2 += d1 >>> 13;
    d1 &= 8191;
    let d2 = c2 + h0 * r22 + h1 * r1 + h22 * r0 + h3 * (5 * r9) + h4 * (5 * r8);
    c2 = d2 >>> 13;
    d2 &= 8191;
    d2 += h5 * (5 * r7) + h6 * (5 * r6) + h7 * (5 * r5) + h8 * (5 * r4) + h9 * (5 * r3);
    c2 += d2 >>> 13;
    d2 &= 8191;
    let d3 = c2 + h0 * r3 + h1 * r22 + h22 * r1 + h3 * r0 + h4 * (5 * r9);
    c2 = d3 >>> 13;
    d3 &= 8191;
    d3 += h5 * (5 * r8) + h6 * (5 * r7) + h7 * (5 * r6) + h8 * (5 * r5) + h9 * (5 * r4);
    c2 += d3 >>> 13;
    d3 &= 8191;
    let d4 = c2 + h0 * r4 + h1 * r3 + h22 * r22 + h3 * r1 + h4 * r0;
    c2 = d4 >>> 13;
    d4 &= 8191;
    d4 += h5 * (5 * r9) + h6 * (5 * r8) + h7 * (5 * r7) + h8 * (5 * r6) + h9 * (5 * r5);
    c2 += d4 >>> 13;
    d4 &= 8191;
    let d5 = c2 + h0 * r5 + h1 * r4 + h22 * r3 + h3 * r22 + h4 * r1;
    c2 = d5 >>> 13;
    d5 &= 8191;
    d5 += h5 * r0 + h6 * (5 * r9) + h7 * (5 * r8) + h8 * (5 * r7) + h9 * (5 * r6);
    c2 += d5 >>> 13;
    d5 &= 8191;
    let d6 = c2 + h0 * r6 + h1 * r5 + h22 * r4 + h3 * r3 + h4 * r22;
    c2 = d6 >>> 13;
    d6 &= 8191;
    d6 += h5 * r1 + h6 * r0 + h7 * (5 * r9) + h8 * (5 * r8) + h9 * (5 * r7);
    c2 += d6 >>> 13;
    d6 &= 8191;
    let d7 = c2 + h0 * r7 + h1 * r6 + h22 * r5 + h3 * r4 + h4 * r3;
    c2 = d7 >>> 13;
    d7 &= 8191;
    d7 += h5 * r22 + h6 * r1 + h7 * r0 + h8 * (5 * r9) + h9 * (5 * r8);
    c2 += d7 >>> 13;
    d7 &= 8191;
    let d8 = c2 + h0 * r8 + h1 * r7 + h22 * r6 + h3 * r5 + h4 * r4;
    c2 = d8 >>> 13;
    d8 &= 8191;
    d8 += h5 * r3 + h6 * r22 + h7 * r1 + h8 * r0 + h9 * (5 * r9);
    c2 += d8 >>> 13;
    d8 &= 8191;
    let d9 = c2 + h0 * r9 + h1 * r8 + h22 * r7 + h3 * r6 + h4 * r5;
    c2 = d9 >>> 13;
    d9 &= 8191;
    d9 += h5 * r4 + h6 * r3 + h7 * r22 + h8 * r1 + h9 * r0;
    c2 += d9 >>> 13;
    d9 &= 8191;
    c2 = (c2 << 2) + c2 | 0;
    c2 = c2 + d0 | 0;
    d0 = c2 & 8191;
    c2 = c2 >>> 13;
    d1 += c2;
    h2[0] = d0;
    h2[1] = d1;
    h2[2] = d2;
    h2[3] = d3;
    h2[4] = d4;
    h2[5] = d5;
    h2[6] = d6;
    h2[7] = d7;
    h2[8] = d8;
    h2[9] = d9;
  }
  finalize() {
    const { h: h2, pad } = this;
    const g2 = new Uint16Array(10);
    let c2 = h2[1] >>> 13;
    h2[1] &= 8191;
    for (let i2 = 2; i2 < 10; i2++) {
      h2[i2] += c2;
      c2 = h2[i2] >>> 13;
      h2[i2] &= 8191;
    }
    h2[0] += c2 * 5;
    c2 = h2[0] >>> 13;
    h2[0] &= 8191;
    h2[1] += c2;
    c2 = h2[1] >>> 13;
    h2[1] &= 8191;
    h2[2] += c2;
    g2[0] = h2[0] + 5;
    c2 = g2[0] >>> 13;
    g2[0] &= 8191;
    for (let i2 = 1; i2 < 10; i2++) {
      g2[i2] = h2[i2] + c2;
      c2 = g2[i2] >>> 13;
      g2[i2] &= 8191;
    }
    g2[9] -= 1 << 13;
    let mask = (c2 ^ 1) - 1;
    for (let i2 = 0; i2 < 10; i2++)
      g2[i2] &= mask;
    mask = ~mask;
    for (let i2 = 0; i2 < 10; i2++)
      h2[i2] = h2[i2] & mask | g2[i2];
    h2[0] = (h2[0] | h2[1] << 13) & 65535;
    h2[1] = (h2[1] >>> 3 | h2[2] << 10) & 65535;
    h2[2] = (h2[2] >>> 6 | h2[3] << 7) & 65535;
    h2[3] = (h2[3] >>> 9 | h2[4] << 4) & 65535;
    h2[4] = (h2[4] >>> 12 | h2[5] << 1 | h2[6] << 14) & 65535;
    h2[5] = (h2[6] >>> 2 | h2[7] << 11) & 65535;
    h2[6] = (h2[7] >>> 5 | h2[8] << 8) & 65535;
    h2[7] = (h2[8] >>> 8 | h2[9] << 5) & 65535;
    let f2 = h2[0] + pad[0];
    h2[0] = f2 & 65535;
    for (let i2 = 1; i2 < 8; i2++) {
      f2 = (h2[i2] + pad[i2] | 0) + (f2 >>> 16) | 0;
      h2[i2] = f2 & 65535;
    }
  }
  update(data) {
    assert.exists(this);
    const { buffer, blockLen } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(data, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(buffer, 0, false);
        this.pos = 0;
      }
    }
    return this;
  }
  destroy() {
    this.h.fill(0);
    this.r.fill(0);
    this.buffer.fill(0);
    this.pad.fill(0);
  }
  digestInto(out) {
    assert.exists(this);
    assert.output(out, this);
    this.finished = true;
    const { buffer, h: h2 } = this;
    let { pos } = this;
    if (pos) {
      buffer[pos++] = 1;
      for (; pos < 16; pos++)
        buffer[pos] = 0;
      this.process(buffer, 0, true);
    }
    this.finalize();
    let opos = 0;
    for (let i2 = 0; i2 < 8; i2++) {
      out[opos++] = h2[i2] >>> 0;
      out[opos++] = h2[i2] >>> 8;
    }
    return out;
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
}
function wrapConstructorWithKey(hashCons) {
  const hashC = (msg, key) => hashCons(key).update(toBytes(msg)).digest();
  const tmp = hashCons(new Uint8Array(32));
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = (key) => hashCons(key);
  return hashC;
}
const poly1305 = wrapConstructorWithKey((key) => new Poly1305(key));
const rotl = (a2, b2) => a2 << b2 | a2 >>> 32 - b2;
function salsaCore(c2, k2, i2, out, cnt, rounds = 20) {
  let y00 = c2[0], y01 = k2[0], y02 = k2[1], y03 = k2[2];
  let y04 = k2[3], y05 = c2[1], y06 = i2[0], y07 = i2[1];
  let y08 = cnt, y09 = 0, y10 = c2[2], y11 = k2[4];
  let y12 = k2[5], y13 = k2[6], y14 = k2[7], y15 = c2[3];
  let x00 = y00, x01 = y01, x02 = y02, x03 = y03, x04 = y04, x05 = y05, x06 = y06, x07 = y07, x08 = y08, x09 = y09, x10 = y10, x11 = y11, x12 = y12, x13 = y13, x14 = y14, x15 = y15;
  for (let i3 = 0; i3 < rounds; i3 += 2) {
    x04 ^= rotl(x00 + x12 | 0, 7);
    x08 ^= rotl(x04 + x00 | 0, 9);
    x12 ^= rotl(x08 + x04 | 0, 13);
    x00 ^= rotl(x12 + x08 | 0, 18);
    x09 ^= rotl(x05 + x01 | 0, 7);
    x13 ^= rotl(x09 + x05 | 0, 9);
    x01 ^= rotl(x13 + x09 | 0, 13);
    x05 ^= rotl(x01 + x13 | 0, 18);
    x14 ^= rotl(x10 + x06 | 0, 7);
    x02 ^= rotl(x14 + x10 | 0, 9);
    x06 ^= rotl(x02 + x14 | 0, 13);
    x10 ^= rotl(x06 + x02 | 0, 18);
    x03 ^= rotl(x15 + x11 | 0, 7);
    x07 ^= rotl(x03 + x15 | 0, 9);
    x11 ^= rotl(x07 + x03 | 0, 13);
    x15 ^= rotl(x11 + x07 | 0, 18);
    x01 ^= rotl(x00 + x03 | 0, 7);
    x02 ^= rotl(x01 + x00 | 0, 9);
    x03 ^= rotl(x02 + x01 | 0, 13);
    x00 ^= rotl(x03 + x02 | 0, 18);
    x06 ^= rotl(x05 + x04 | 0, 7);
    x07 ^= rotl(x06 + x05 | 0, 9);
    x04 ^= rotl(x07 + x06 | 0, 13);
    x05 ^= rotl(x04 + x07 | 0, 18);
    x11 ^= rotl(x10 + x09 | 0, 7);
    x08 ^= rotl(x11 + x10 | 0, 9);
    x09 ^= rotl(x08 + x11 | 0, 13);
    x10 ^= rotl(x09 + x08 | 0, 18);
    x12 ^= rotl(x15 + x14 | 0, 7);
    x13 ^= rotl(x12 + x15 | 0, 9);
    x14 ^= rotl(x13 + x12 | 0, 13);
    x15 ^= rotl(x14 + x13 | 0, 18);
  }
  let oi = 0;
  out[oi++] = y00 + x00 | 0;
  out[oi++] = y01 + x01 | 0;
  out[oi++] = y02 + x02 | 0;
  out[oi++] = y03 + x03 | 0;
  out[oi++] = y04 + x04 | 0;
  out[oi++] = y05 + x05 | 0;
  out[oi++] = y06 + x06 | 0;
  out[oi++] = y07 + x07 | 0;
  out[oi++] = y08 + x08 | 0;
  out[oi++] = y09 + x09 | 0;
  out[oi++] = y10 + x10 | 0;
  out[oi++] = y11 + x11 | 0;
  out[oi++] = y12 + x12 | 0;
  out[oi++] = y13 + x13 | 0;
  out[oi++] = y14 + x14 | 0;
  out[oi++] = y15 + x15 | 0;
}
function hsalsa(c2, key, nonce, out) {
  const k32 = u32(key);
  const i32 = u32(nonce);
  const o32 = u32(out);
  let x00 = c2[0], x01 = k32[0], x02 = k32[1], x03 = k32[2], x04 = k32[3];
  let x05 = c2[1], x06 = i32[0], x07 = i32[1], x08 = i32[2], x09 = i32[3];
  let x10 = c2[2], x11 = k32[4], x12 = k32[5], x13 = k32[6], x14 = k32[7];
  let x15 = c2[3];
  for (let i2 = 0; i2 < 20; i2 += 2) {
    x04 ^= rotl(x00 + x12 | 0, 7);
    x08 ^= rotl(x04 + x00 | 0, 9);
    x12 ^= rotl(x08 + x04 | 0, 13);
    x00 ^= rotl(x12 + x08 | 0, 18);
    x09 ^= rotl(x05 + x01 | 0, 7);
    x13 ^= rotl(x09 + x05 | 0, 9);
    x01 ^= rotl(x13 + x09 | 0, 13);
    x05 ^= rotl(x01 + x13 | 0, 18);
    x14 ^= rotl(x10 + x06 | 0, 7);
    x02 ^= rotl(x14 + x10 | 0, 9);
    x06 ^= rotl(x02 + x14 | 0, 13);
    x10 ^= rotl(x06 + x02 | 0, 18);
    x03 ^= rotl(x15 + x11 | 0, 7);
    x07 ^= rotl(x03 + x15 | 0, 9);
    x11 ^= rotl(x07 + x03 | 0, 13);
    x15 ^= rotl(x11 + x07 | 0, 18);
    x01 ^= rotl(x00 + x03 | 0, 7);
    x02 ^= rotl(x01 + x00 | 0, 9);
    x03 ^= rotl(x02 + x01 | 0, 13);
    x00 ^= rotl(x03 + x02 | 0, 18);
    x06 ^= rotl(x05 + x04 | 0, 7);
    x07 ^= rotl(x06 + x05 | 0, 9);
    x04 ^= rotl(x07 + x06 | 0, 13);
    x05 ^= rotl(x04 + x07 | 0, 18);
    x11 ^= rotl(x10 + x09 | 0, 7);
    x08 ^= rotl(x11 + x10 | 0, 9);
    x09 ^= rotl(x08 + x11 | 0, 13);
    x10 ^= rotl(x09 + x08 | 0, 18);
    x12 ^= rotl(x15 + x14 | 0, 7);
    x13 ^= rotl(x12 + x15 | 0, 9);
    x14 ^= rotl(x13 + x12 | 0, 13);
    x15 ^= rotl(x14 + x13 | 0, 18);
  }
  o32[0] = x00;
  o32[1] = x05;
  o32[2] = x10;
  o32[3] = x15;
  o32[4] = x06;
  o32[5] = x07;
  o32[6] = x08;
  o32[7] = x09;
  return out;
}
salsaBasic({ core: salsaCore, counterRight: true });
const xsalsa20 = salsaBasic({
  core: salsaCore,
  counterRight: true,
  extendNonceFn: hsalsa,
  allow128bitKeys: false
});
const xsalsa20_poly1305 = (key, nonce) => {
  const tagLength = 16;
  ensureBytes(key, 32);
  ensureBytes(nonce, 24);
  return {
    tagLength,
    encrypt: (plaintext) => {
      ensureBytes(plaintext);
      const res = new Uint8Array(32 + plaintext.length);
      res.set(plaintext, 32);
      xsalsa20(key, nonce, res, res);
      const authKey = res.subarray(0, 32);
      const tag = poly1305(res.subarray(32), authKey);
      res.set(tag, 16);
      res.subarray(0, 16).fill(0);
      return res.subarray(16);
    },
    decrypt: (ciphertext) => {
      ensureBytes(ciphertext);
      if (ciphertext.length < 16)
        throw new Error("Encrypted data should be at least 16 bytes");
      const c2 = new Uint8Array(16 + ciphertext.length);
      c2.set(ciphertext, 16);
      const authKey = xsalsa20(key, nonce, new Uint8Array(32));
      const tag = poly1305(c2.subarray(32), authKey);
      if (!equalBytes(c2.subarray(16, 32), tag))
        throw new Error("Wrong tag");
      const decoded = xsalsa20(key, nonce, c2);
      decoded.subarray(0, 32).fill(0);
      authKey.fill(0);
      return decoded.subarray(32);
    }
  };
};
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// @__NO_SIDE_EFFECTS__
function chain(...args) {
  const wrap = (a2, b2) => (c2) => a2(b2(c2));
  const encode = Array.from(args).reverse().reduce((acc, i2) => acc ? wrap(acc, i2.encode) : i2.encode, void 0);
  const decode = args.reduce((acc, i2) => acc ? wrap(acc, i2.decode) : i2.decode, void 0);
  return { encode, decode };
}
// @__NO_SIDE_EFFECTS__
function alphabet$2(alphabet2) {
  return {
    encode: (digits) => {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
        throw new Error("alphabet.encode input should be an array of numbers");
      return digits.map((i2) => {
        if (i2 < 0 || i2 >= alphabet2.length)
          throw new Error(`Digit index outside alphabet: ${i2} (alphabet: ${alphabet2.length})`);
        return alphabet2[i2];
      });
    },
    decode: (input) => {
      if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
        throw new Error("alphabet.decode input should be array of strings");
      return input.map((letter) => {
        if (typeof letter !== "string")
          throw new Error(`alphabet.decode: not string element=${letter}`);
        const index2 = alphabet2.indexOf(letter);
        if (index2 === -1)
          throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet2}`);
        return index2;
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function join(separator = "") {
  if (typeof separator !== "string")
    throw new Error("join separator should be string");
  return {
    encode: (from) => {
      if (!Array.isArray(from) || from.length && typeof from[0] !== "string")
        throw new Error("join.encode input should be array of strings");
      for (let i2 of from)
        if (typeof i2 !== "string")
          throw new Error(`join.encode: non-string input=${i2}`);
      return from.join(separator);
    },
    decode: (to) => {
      if (typeof to !== "string")
        throw new Error("join.decode input should be string");
      return to.split(separator);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function convertRadix(data, from, to) {
  if (from < 2)
    throw new Error(`convertRadix: wrong from=${from}, base cannot be less than 2`);
  if (to < 2)
    throw new Error(`convertRadix: wrong to=${to}, base cannot be less than 2`);
  if (!Array.isArray(data))
    throw new Error("convertRadix: data should be array");
  if (!data.length)
    return [];
  let pos = 0;
  const res = [];
  const digits = Array.from(data);
  digits.forEach((d2) => {
    if (d2 < 0 || d2 >= from)
      throw new Error(`Wrong integer: ${d2}`);
  });
  while (true) {
    let carry = 0;
    let done = true;
    for (let i2 = pos; i2 < digits.length; i2++) {
      const digit2 = digits[i2];
      const digitBase = from * carry + digit2;
      if (!Number.isSafeInteger(digitBase) || from * carry / from !== carry || digitBase - digit2 !== from * carry) {
        throw new Error("convertRadix: carry overflow");
      }
      carry = digitBase % to;
      const rounded = Math.floor(digitBase / to);
      digits[i2] = rounded;
      if (!Number.isSafeInteger(rounded) || rounded * to + carry !== digitBase)
        throw new Error("convertRadix: carry overflow");
      if (!done)
        continue;
      else if (!rounded)
        pos = i2;
      else
        done = false;
    }
    res.push(carry);
    if (done)
      break;
  }
  for (let i2 = 0; i2 < data.length - 1 && data[i2] === 0; i2++)
    res.push(0);
  return res.reverse();
}
// @__NO_SIDE_EFFECTS__
function radix(num) {
  return {
    encode: (bytes2) => {
      if (!(bytes2 instanceof Uint8Array))
        throw new Error("radix.encode input should be Uint8Array");
      return /* @__PURE__ */ convertRadix(Array.from(bytes2), 2 ** 8, num);
    },
    decode: (digits) => {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
        throw new Error("radix.decode input should be array of strings");
      return Uint8Array.from(/* @__PURE__ */ convertRadix(digits, num, 2 ** 8));
    }
  };
}
const genBase58 = (abc) => /* @__PURE__ */ chain(/* @__PURE__ */ radix(58), /* @__PURE__ */ alphabet$2(abc), /* @__PURE__ */ join(""));
const base58 = /* @__PURE__ */ genBase58("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
const crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function randomBytes(bytesLength = 32) {
  if (crypto && typeof crypto.getRandomValues === "function") {
    return crypto.getRandomValues(new Uint8Array(bytesLength));
  }
  throw new Error("crypto.getRandomValues must be defined");
}
const encoder = new TextEncoder();
const decoder = new TextDecoder();
function base64URLtoBytes(base64) {
  base64 = base64.replace(/=/g, "");
  const n2 = base64.length;
  const rem = n2 % 4;
  const k2 = rem && rem - 1;
  const m2 = (n2 >> 2) * 3 + k2;
  const encoded = new Uint8Array(n2 + 3);
  encoder.encodeInto(base64 + "===", encoded);
  for (let i2 = 0, j2 = 0; i2 < n2; i2 += 4, j2 += 3) {
    const x2 = (lookup$1[encoded[i2]] << 18) + (lookup$1[encoded[i2 + 1]] << 12) + (lookup$1[encoded[i2 + 2]] << 6) + lookup$1[encoded[i2 + 3]];
    encoded[j2] = x2 >> 16;
    encoded[j2 + 1] = x2 >> 8 & 255;
    encoded[j2 + 2] = x2 & 255;
  }
  return new Uint8Array(encoded.buffer, 0, m2);
}
function bytesToBase64url(bytes2) {
  const m2 = bytes2.length;
  const k2 = m2 % 3;
  const n2 = Math.floor(m2 / 3) * 4 + (k2 && k2 + 1);
  const N2 = Math.ceil(m2 / 3) * 4;
  const encoded = new Uint8Array(N2);
  for (let i2 = 0, j2 = 0; j2 < m2; i2 += 4, j2 += 3) {
    const y2 = (bytes2[j2] << 16) + (bytes2[j2 + 1] << 8) + (bytes2[j2 + 2] | 0);
    encoded[i2] = encodeLookup$1[y2 >> 18];
    encoded[i2 + 1] = encodeLookup$1[y2 >> 12 & 63];
    encoded[i2 + 2] = encodeLookup$1[y2 >> 6 & 63];
    encoded[i2 + 3] = encodeLookup$1[y2 & 63];
  }
  let base64 = decoder.decode(new Uint8Array(encoded.buffer, 0, n2));
  if (k2 === 1)
    base64 += "==";
  if (k2 === 2)
    base64 += "=";
  return base64;
}
const alphabet$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
const lookup$1 = new Uint8Array(128);
for (const [i2, a2] of Array.from(alphabet$1).entries()) {
  lookup$1[a2.charCodeAt(0)] = i2;
}
lookup$1["=".charCodeAt(0)] = 0;
const encodeLookup$1 = new Uint8Array(64);
for (const [i2, a2] of Array.from(alphabet$1).entries()) {
  encodeLookup$1[i2] = a2.charCodeAt(0);
}
/*!
 * hash-wasm (https://www.npmjs.com/package/hash-wasm)
 * (c) Dani Biro
 * @license MIT
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
class Mutex {
  constructor() {
    this.mutex = Promise.resolve();
  }
  lock() {
    let begin = () => {
    };
    this.mutex = this.mutex.then(() => new Promise(begin));
    return new Promise((res) => {
      begin = res;
    });
  }
  dispatch(fn) {
    return __awaiter(this, void 0, void 0, function* () {
      const unlock = yield this.lock();
      try {
        return yield Promise.resolve(fn());
      } finally {
        unlock();
      }
    });
  }
}
var _a;
function getGlobal() {
  if (typeof globalThis !== "undefined")
    return globalThis;
  if (typeof self !== "undefined")
    return self;
  if (typeof window !== "undefined")
    return window;
  return globalThis;
}
const globalObject = getGlobal();
const nodeBuffer = (_a = globalObject.Buffer) !== null && _a !== void 0 ? _a : null;
const textEncoder$2 = globalObject.TextEncoder ? new globalObject.TextEncoder() : null;
function hexCharCodesToInt(a2, b2) {
  return (a2 & 15) + (a2 >> 6 | a2 >> 3 & 8) << 4 | (b2 & 15) + (b2 >> 6 | b2 >> 3 & 8);
}
function writeHexToUInt8(buf, str) {
  const size = str.length >> 1;
  for (let i2 = 0; i2 < size; i2++) {
    const index2 = i2 << 1;
    buf[i2] = hexCharCodesToInt(str.charCodeAt(index2), str.charCodeAt(index2 + 1));
  }
}
function hexStringEqualsUInt8(str, buf) {
  if (str.length !== buf.length * 2) {
    return false;
  }
  for (let i2 = 0; i2 < buf.length; i2++) {
    const strIndex = i2 << 1;
    if (buf[i2] !== hexCharCodesToInt(str.charCodeAt(strIndex), str.charCodeAt(strIndex + 1))) {
      return false;
    }
  }
  return true;
}
const alpha = "a".charCodeAt(0) - 10;
const digit = "0".charCodeAt(0);
function getDigestHex(tmpBuffer, input, hashLength) {
  let p2 = 0;
  for (let i2 = 0; i2 < hashLength; i2++) {
    let nibble = input[i2] >>> 4;
    tmpBuffer[p2++] = nibble > 9 ? nibble + alpha : nibble + digit;
    nibble = input[i2] & 15;
    tmpBuffer[p2++] = nibble > 9 ? nibble + alpha : nibble + digit;
  }
  return String.fromCharCode.apply(null, tmpBuffer);
}
const getUInt8Buffer = nodeBuffer !== null ? (data) => {
  if (typeof data === "string") {
    const buf = nodeBuffer.from(data, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
  }
  if (nodeBuffer.isBuffer(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.length);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
  throw new Error("Invalid data type!");
} : (data) => {
  if (typeof data === "string") {
    return textEncoder$2.encode(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
  throw new Error("Invalid data type!");
};
const base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const base64Lookup = new Uint8Array(256);
for (let i2 = 0; i2 < base64Chars.length; i2++) {
  base64Lookup[base64Chars.charCodeAt(i2)] = i2;
}
function getDecodeBase64Length(data) {
  let bufferLength = Math.floor(data.length * 0.75);
  const len = data.length;
  if (data[len - 1] === "=") {
    bufferLength -= 1;
    if (data[len - 2] === "=") {
      bufferLength -= 1;
    }
  }
  return bufferLength;
}
function decodeBase64(data) {
  const bufferLength = getDecodeBase64Length(data);
  const len = data.length;
  const bytes2 = new Uint8Array(bufferLength);
  let p2 = 0;
  for (let i2 = 0; i2 < len; i2 += 4) {
    const encoded1 = base64Lookup[data.charCodeAt(i2)];
    const encoded2 = base64Lookup[data.charCodeAt(i2 + 1)];
    const encoded3 = base64Lookup[data.charCodeAt(i2 + 2)];
    const encoded4 = base64Lookup[data.charCodeAt(i2 + 3)];
    bytes2[p2] = encoded1 << 2 | encoded2 >> 4;
    p2 += 1;
    bytes2[p2] = (encoded2 & 15) << 4 | encoded3 >> 2;
    p2 += 1;
    bytes2[p2] = (encoded3 & 3) << 6 | encoded4 & 63;
    p2 += 1;
  }
  return bytes2;
}
const MAX_HEAP = 16 * 1024;
const WASM_FUNC_HASH_LENGTH = 4;
const wasmMutex = new Mutex();
const wasmModuleCache = /* @__PURE__ */ new Map();
function WASMInterface(binary, hashLength) {
  return __awaiter(this, void 0, void 0, function* () {
    let wasmInstance = null;
    let memoryView = null;
    let initialized = false;
    if (typeof WebAssembly === "undefined") {
      throw new Error("WebAssembly is not supported in this environment!");
    }
    const writeMemory = (data, offset = 0) => {
      memoryView.set(data, offset);
    };
    const getMemory = () => memoryView;
    const getExports = () => wasmInstance.exports;
    const setMemorySize = (totalSize) => {
      wasmInstance.exports.Hash_SetMemorySize(totalSize);
      const arrayOffset = wasmInstance.exports.Hash_GetBuffer();
      const memoryBuffer = wasmInstance.exports.memory.buffer;
      memoryView = new Uint8Array(memoryBuffer, arrayOffset, totalSize);
    };
    const getStateSize = () => {
      const view = new DataView(wasmInstance.exports.memory.buffer);
      const stateSize = view.getUint32(wasmInstance.exports.STATE_SIZE, true);
      return stateSize;
    };
    const loadWASMPromise = wasmMutex.dispatch(() => __awaiter(this, void 0, void 0, function* () {
      if (!wasmModuleCache.has(binary.name)) {
        const asm = decodeBase64(binary.data);
        const promise = WebAssembly.compile(asm);
        wasmModuleCache.set(binary.name, promise);
      }
      const module = yield wasmModuleCache.get(binary.name);
      wasmInstance = yield WebAssembly.instantiate(module, {
        // env: {
        //   emscripten_memcpy_big: (dest, src, num) => {
        //     const memoryBuffer = wasmInstance.exports.memory.buffer;
        //     const memView = new Uint8Array(memoryBuffer, 0);
        //     memView.set(memView.subarray(src, src + num), dest);
        //   },
        //   print_memory: (offset, len) => {
        //     const memoryBuffer = wasmInstance.exports.memory.buffer;
        //     const memView = new Uint8Array(memoryBuffer, 0);
        //     console.log('print_int32', memView.subarray(offset, offset + len));
        //   },
        // },
      });
    }));
    const setupInterface = () => __awaiter(this, void 0, void 0, function* () {
      if (!wasmInstance) {
        yield loadWASMPromise;
      }
      const arrayOffset = wasmInstance.exports.Hash_GetBuffer();
      const memoryBuffer = wasmInstance.exports.memory.buffer;
      memoryView = new Uint8Array(memoryBuffer, arrayOffset, MAX_HEAP);
    });
    const init = (bits = null) => {
      initialized = true;
      wasmInstance.exports.Hash_Init(bits);
    };
    const updateUInt8Array = (data) => {
      let read = 0;
      while (read < data.length) {
        const chunk = data.subarray(read, read + MAX_HEAP);
        read += chunk.length;
        memoryView.set(chunk);
        wasmInstance.exports.Hash_Update(chunk.length);
      }
    };
    const update = (data) => {
      if (!initialized) {
        throw new Error("update() called before init()");
      }
      const Uint8Buffer = getUInt8Buffer(data);
      updateUInt8Array(Uint8Buffer);
    };
    const digestChars = new Uint8Array(hashLength * 2);
    const digest = (outputType, padding = null) => {
      if (!initialized) {
        throw new Error("digest() called before init()");
      }
      initialized = false;
      wasmInstance.exports.Hash_Final(padding);
      if (outputType === "binary") {
        return memoryView.slice(0, hashLength);
      }
      return getDigestHex(digestChars, memoryView, hashLength);
    };
    const save = () => {
      if (!initialized) {
        throw new Error("save() can only be called after init() and before digest()");
      }
      const stateOffset = wasmInstance.exports.Hash_GetState();
      const stateLength = getStateSize();
      const memoryBuffer = wasmInstance.exports.memory.buffer;
      const internalState = new Uint8Array(memoryBuffer, stateOffset, stateLength);
      const prefixedState = new Uint8Array(WASM_FUNC_HASH_LENGTH + stateLength);
      writeHexToUInt8(prefixedState, binary.hash);
      prefixedState.set(internalState, WASM_FUNC_HASH_LENGTH);
      return prefixedState;
    };
    const load = (state2) => {
      if (!(state2 instanceof Uint8Array)) {
        throw new Error("load() expects an Uint8Array generated by save()");
      }
      const stateOffset = wasmInstance.exports.Hash_GetState();
      const stateLength = getStateSize();
      const overallLength = WASM_FUNC_HASH_LENGTH + stateLength;
      const memoryBuffer = wasmInstance.exports.memory.buffer;
      if (state2.length !== overallLength) {
        throw new Error(`Bad state length (expected ${overallLength} bytes, got ${state2.length})`);
      }
      if (!hexStringEqualsUInt8(binary.hash, state2.subarray(0, WASM_FUNC_HASH_LENGTH))) {
        throw new Error("This state was written by an incompatible hash implementation");
      }
      const internalState = state2.subarray(WASM_FUNC_HASH_LENGTH);
      new Uint8Array(memoryBuffer, stateOffset, stateLength).set(internalState);
      initialized = true;
    };
    const isDataShort = (data) => {
      if (typeof data === "string") {
        return data.length < MAX_HEAP / 4;
      }
      return data.byteLength < MAX_HEAP;
    };
    let canSimplify = isDataShort;
    switch (binary.name) {
      case "argon2":
      case "scrypt":
        canSimplify = () => true;
        break;
      case "blake2b":
      case "blake2s":
        canSimplify = (data, initParam) => initParam <= 512 && isDataShort(data);
        break;
      case "blake3":
        canSimplify = (data, initParam) => initParam === 0 && isDataShort(data);
        break;
      case "xxhash64":
      case "xxhash3":
      case "xxhash128":
        canSimplify = () => false;
        break;
    }
    const calculate = (data, initParam = null, digestParam = null) => {
      if (!canSimplify(data, initParam)) {
        init(initParam);
        update(data);
        return digest("hex", digestParam);
      }
      const buffer = getUInt8Buffer(data);
      memoryView.set(buffer);
      wasmInstance.exports.Hash_Calculate(buffer.length, initParam, digestParam);
      return getDigestHex(digestChars, memoryView, hashLength);
    };
    yield setupInterface();
    return {
      getMemory,
      writeMemory,
      getExports,
      setMemorySize,
      init,
      update,
      digest,
      save,
      load,
      calculate,
      hashLength
    };
  });
}
new Mutex();
new Mutex();
new Mutex();
var name$g = "blake3";
var data$g = "AGFzbQEAAAABJQZgAAF/YAF/AGADf39/AGAGf39/f35/AGABfgBgBX9/fn9/AX8DDQwAAQIDBAUBAQEBAAIEBQFwAQEBBQQBAQICBg4CfwFBgJgFC38AQYAICwdwCAZtZW1vcnkCAA5IYXNoX0dldEJ1ZmZlcgAACUhhc2hfSW5pdAAHC0hhc2hfVXBkYXRlAAgKSGFzaF9GaW5hbAAJDUhhc2hfR2V0U3RhdGUACg5IYXNoX0NhbGN1bGF0ZQALClNUQVRFX1NJWkUDAQrAWAwFAEGACQubEQkDfwR+An8BfgF/A34CfwJ+BH8jAEHQAmsiASQAAkAgAEUNAAJAAkBBAC0AiYoBQQZ0QQAtAIiKAWoiAg0AQYAJIQMMAQtBoIkBQYAJIABBgAggAmsiAiACIABLGyICEAIgACACayIARQ0BIAFBoAFqQQApA9CJATcDACABQagBakEAKQPYiQE3AwAgAUEAKQOgiQEiBDcDcCABQQApA6iJASIFNwN4IAFBACkDsIkBIgY3A4ABIAFBACkDuIkBIgc3A4gBIAFBACkDyIkBNwOYAUEALQCKigEhCEEALQCJigEhCUEAKQPAiQEhCkEALQCIigEhCyABQbABakEAKQPgiQE3AwAgAUG4AWpBACkD6IkBNwMAIAFBwAFqQQApA/CJATcDACABQcgBakEAKQP4iQE3AwAgAUHQAWpBACkDgIoBNwMAIAEgCzoA2AEgASAKNwOQASABIAggCUVyQQJyIgg6ANkBIAEgBzcD+AEgASAGNwPwASABIAU3A+gBIAEgBDcD4AEgAUGAAmogAUHgAWogAUGYAWogCyAKIAhB/wFxEAMgASkDuAIhCiABKQOYAiEEIAEpA7ACIQUgASkDkAIhBiABKQOgAiEHIAEpA4ACIQwgASkDqAIhDSABKQOIAiEOQQApA8CJARAEQQAtAJCKASIIQQV0IgtBmYoBaiANIA6FNwMAIAtBkYoBaiAHIAyFNwMAIAtBoYoBaiAFIAaFNwMAIAtBqYoBaiAKIASFNwMAQQAgCEEBajoAkIoBQQBCADcD2IkBQQBCADcD+IkBQQBBACkDgIkBNwOgiQFBAEIANwOAigFBAEIANwPwiQFBAEIANwPoiQFBAEIANwPgiQFBAEIANwPQiQFBAEIANwPIiQFBAEEAKQOYiQE3A7iJAUEAQQApA4iJATcDqIkBQQBBACkDkIkBNwOwiQFBAEEAKQPAiQFCAXw3A8CJAUEAQQA7AYiKASACQYAJaiEDCwJAIABBgQhJDQBBACkDwIkBIQQgAUEoaiEPA0AgBEIKhiEKQgEgAEEBcq15Qj+FhqchAgNAIAIiEEEBdiECIAogEEF/aq2DQgBSDQALIBBBCnatIQ0CQAJAIBBBgAhLDQAgAUEAOwHYASABQgA3A9ABIAFCADcDyAEgAUIANwPAASABQgA3A7gBIAFCADcDsAEgAUIANwOoASABQgA3A6ABIAFCADcDmAEgAUEAKQOAiQE3A3AgAUEAKQOIiQE3A3ggAUEAKQOQiQE3A4ABIAFBAC0AiooBOgDaASABQQApA5iJATcDiAEgASAENwOQASABQfAAaiADIBAQAiABIAEpA3AiBDcDACABIAEpA3giBTcDCCABIAEpA4ABIgY3AxAgASABKQOIASIHNwMYIAEgASkDmAE3AyggASABKQOgATcDMCABIAEpA6gBNwM4IAEtANoBIQIgAS0A2QEhCyABKQOQASEKIAEgAS0A2AEiCDoAaCABIAo3AyAgASABKQOwATcDQCABIAEpA7gBNwNIIAEgASkDwAE3A1AgASABKQPIATcDWCABIAEpA9ABNwNgIAEgAiALRXJBAnIiAjoAaSABIAc3A/gBIAEgBjcD8AEgASAFNwPoASABIAQ3A+ABIAFBgAJqIAFB4AFqIA8gCCAKIAJB/wFxEAMgASkDoAIhBCABKQOAAiEFIAEpA6gCIQYgASkDiAIhByABKQOwAiEMIAEpA5ACIQ4gASkDuAIhESABKQOYAiESIAoQBEEAQQAtAJCKASICQQFqOgCQigEgAkEFdCICQamKAWogESAShTcDACACQaGKAWogDCAOhTcDACACQZmKAWogBiAHhTcDACACQZGKAWogBCAFhTcDAAwBCwJAAkAgAyAQIARBAC0AiooBIgIgAUHwAGoQBSITQQJLDQAgASkDiAEhCiABKQOAASEEIAEpA3ghBSABKQNwIQYMAQsgAkEEciEUA0AgE0F+akEBdiIVQQFqIQggAUHIAmohAiABQfAAaiELA0AgAiALNgIAIAtBwABqIQsgAkEEaiECIAhBf2oiCA0ACyABIQIgAUHIAmohCyAVQQFqIhYhCANAIAsoAgAhCSABQQApA4CJATcD4AEgAUEAKQOIiQE3A+gBIAFBACkDkIkBNwPwASABQQApA5iJATcD+AEgAUGAAmogAUHgAWogCUHAAEIAIBQQAyABKQOgAiEKIAEpA4ACIQQgASkDqAIhBSABKQOIAiEGIAEpA7ACIQcgASkDkAIhDCACQRhqIAEpA7gCIAEpA5gChTcDACACQRBqIAcgDIU3AwAgAkEIaiAFIAaFNwMAIAIgCiAEhTcDACACQSBqIQIgC0EEaiELIAhBf2oiCA0ACwJAAkAgE0F+cSATSQ0AIBYhEwwBCyABIBZBBXRqIgIgAUHwAGogFkEGdGoiCykDADcDACACIAspAwg3AwggAiALKQMQNwMQIAIgCykDGDcDGCAVQQJqIRMLIAEgASkDACIGNwNwIAEgASkDCCIFNwN4IAEgASkDECIENwOAASABIAEpAxgiCjcDiAEgE0ECSw0ACwsgASkDkAEhByABKQOYASEMIAEpA6ABIQ4gASkDqAEhEUEAKQPAiQEQBEEALQCQigEiC0EFdCICQaGKAWogBDcDACACQZmKAWogBTcDAEEAIAtBAWo6AJCKASACQZGKAWogBjcDACACQamKAWogCjcDAEEAKQPAiQEgDUIBiHwQBEEAQQAtAJCKASICQQFqOgCQigEgAkEFdCICQamKAWogETcDACACQaGKAWogDjcDACACQZmKAWogDDcDACACQZGKAWogBzcDAAtBAEEAKQPAiQEgDXwiBDcDwIkBIAMgEGohAyAAIBBrIgBBgAhLDQALIABFDQELQaCJASADIAAQAkEAKQPAiQEQBAsgAUHQAmokAAvwBAEFfyMAQcAAayIDJAACQAJAIAAtAGgiBEUNAAJAIAJBwAAgBGsiBSAFIAJLGyIGRQ0AIAAgBGpBKGohBCABIQUgBiEHA0AgBCAFLQAAOgAAIAVBAWohBSAEQQFqIQQgB0F/aiIHDQALIAAtAGghBAsgACAEIAZqIgQ6AGggASAGaiEBAkAgAiAGayICDQBBACECDAILIAMgACAAQShqQcAAIAApAyAgAC0AaiAAQekAaiIELQAARXIQAyAAIAMpAyAgAykDAIU3AwAgACADKQMoIAMpAwiFNwMIIAAgAykDMCADKQMQhTcDECAAIAMpAzggAykDGIU3AxggAEEAOgBoIABB4ABqQgA3AwAgAEHYAGpCADcDACAAQdAAakIANwMAIABByABqQgA3AwAgAEHAAGpCADcDACAAQThqQgA3AwAgAEEwakIANwMAIABCADcDKCAEIAQtAABBAWo6AAALQQAhBCACQcEASQ0AIABB6QBqIgQtAAAhBQNAIAMgACABQcAAIAApAyAgAC0AaiAFQf8BcUVyEAMgACADKQMgIAMpAwCFNwMAIAAgAykDKCADKQMIhTcDCCAAIAMpAzAgAykDEIU3AxAgACADKQM4IAMpAxiFNwMYIAQgBC0AAEEBaiIFOgAAIAFBwABqIQEgAkFAaiICQcAASw0ACyAALQBoIQQLAkAgAkHAACAEQf8BcSIHayIFIAUgAksbIgJFDQAgACAHakEoaiEEIAIhBQNAIAQgAS0AADoAACABQQFqIQEgBEEBaiEEIAVBf2oiBQ0ACyAALQBoIQQLIAAgBCACajoAaCADQcAAaiQAC80cAgx+H38gAikDICEGIAIpAzghByACKQMwIQggAikDACEJIAIpAyghCiACKQMQIQsgAikDCCEMIAIpAxghDSAAIAEpAwAiDjcDACAAIAEpAwgiDzcDCCAAIAEpAxAiEDcDECABKQMYIREgAELnzKfQ1tDrs7t/NwMgIAAgETcDGCAAQvLmu+Ojp/2npX83AyggACAEpyISNgIwIAAgBEIgiKciEzYCNCAAIAM2AjggACAFNgI8IAAgDaciAiAPQiCIp2ogEUIgiKciFGoiFSANQiCIpyIBaiAVIAVzQRB0IBVBEHZyIhZBuuq/qnpqIhcgFHNBFHciGGoiGSAJpyIFIA6naiAQpyIUaiIaIAlCIIinIhVqIBogEnNBEHciEkHnzKfQBmoiGiAUc0EUdyIUaiIbIBJzQRh3IhwgGmoiHSAUc0EZdyIeaiAHpyISaiIfIAdCIIinIhRqIB8gC6ciGiAPp2ogEaciIGoiISALQiCIpyIiaiAhIANzQRB0ICFBEHZyIgNB8ua74wNqIiMgIHNBFHciIGoiJCADc0EYdyIlc0EQdyIfIAynIgMgDkIgiKdqIBBCIIinIiZqIicgDEIgiKciIWogJyATc0EQdyITQYXdntt7aiInICZzQRR3IiZqIiggE3NBGHciKSAnaiInaiIqIB5zQRR3Ih5qIisgGmogGSAWc0EYdyIZIBdqIiwgGHNBGXciFyAkaiAIpyITaiIYIAhCIIinIhZqIBggKXNBEHciGCAdaiIdIBdzQRR3IhdqIiQgGHNBGHciKSAdaiIdIBdzQRl3Ii1qIi4gFmogJyAmc0EZdyImIBtqIAanIhdqIhsgBkIgiKciGGogGSAbc0EQdyIZICUgI2oiG2oiIyAmc0EUdyIlaiImIBlzQRh3IicgLnNBEHciLiAbICBzQRl3IiAgKGogCqciGWoiKCAKQiCIpyIbaiAoIBxzQRB3IhwgLGoiKCAgc0EUdyIgaiIsIBxzQRh3IhwgKGoiKGoiLyAtc0EUdyItaiIwICYgA2ogKyAfc0EYdyIfICpqIiYgHnNBGXciHmoiKiACaiAcICpzQRB3IhwgHWoiHSAec0EUdyIeaiIqIBxzQRh3IhwgHWoiHSAec0EZdyIeaiAUaiIrIBdqICsgJCABaiAoICBzQRl3IiBqIiQgBWogHyAkc0EQdyIfICcgI2oiI2oiJCAgc0EUdyIgaiInIB9zQRh3Ih9zQRB3IiggLCAhaiAjICVzQRl3IiNqIiUgGWogKSAlc0EQdyIlICZqIiYgI3NBFHciI2oiKSAlc0EYdyIlICZqIiZqIisgHnNBFHciHmoiLCABaiAwIC5zQRh3Ii4gL2oiLyAtc0EZdyItICdqIBhqIicgEmogJyAlc0EQdyIlIB1qIh0gLXNBFHciJ2oiLSAlc0EYdyIlIB1qIh0gJ3NBGXciJ2oiMCASaiAmICNzQRl3IiMgKmogFWoiJiAbaiAuICZzQRB3IiYgHyAkaiIfaiIkICNzQRR3IiNqIiogJnNBGHciJiAwc0EQdyIuIB8gIHNBGXciHyApaiATaiIgICJqICAgHHNBEHciHCAvaiIgIB9zQRR3Ih9qIikgHHNBGHciHCAgaiIgaiIvICdzQRR3IidqIjAgKiAhaiAsIChzQRh3IiggK2oiKiAec0EZdyIeaiIrIBpqIBwgK3NBEHciHCAdaiIdIB5zQRR3Ih5qIisgHHNBGHciHCAdaiIdIB5zQRl3Ih5qIBdqIiwgFWogLCAtIBZqICAgH3NBGXciH2oiICADaiAoICBzQRB3IiAgJiAkaiIkaiImIB9zQRR3Ih9qIiggIHNBGHciIHNBEHciLCApIBlqICQgI3NBGXciI2oiJCATaiAlICRzQRB3IiQgKmoiJSAjc0EUdyIjaiIpICRzQRh3IiQgJWoiJWoiKiAec0EUdyIeaiItIBZqIDAgLnNBGHciLiAvaiIvICdzQRl3IicgKGogG2oiKCAUaiAoICRzQRB3IiQgHWoiHSAnc0EUdyInaiIoICRzQRh3IiQgHWoiHSAnc0EZdyInaiIwIBRqICUgI3NBGXciIyAraiACaiIlICJqIC4gJXNBEHciJSAgICZqIiBqIiYgI3NBFHciI2oiKyAlc0EYdyIlIDBzQRB3Ii4gICAfc0EZdyIfIClqIBhqIiAgBWogICAcc0EQdyIcIC9qIiAgH3NBFHciH2oiKSAcc0EYdyIcICBqIiBqIi8gJ3NBFHciJ2oiMCArIBlqIC0gLHNBGHciKyAqaiIqIB5zQRl3Ih5qIiwgAWogHCAsc0EQdyIcIB1qIh0gHnNBFHciHmoiLCAcc0EYdyIcIB1qIh0gHnNBGXciHmogFWoiLSACaiAtICggEmogICAfc0EZdyIfaiIgICFqICsgIHNBEHciICAlICZqIiVqIiYgH3NBFHciH2oiKCAgc0EYdyIgc0EQdyIrICkgE2ogJSAjc0EZdyIjaiIlIBhqICQgJXNBEHciJCAqaiIlICNzQRR3IiNqIikgJHNBGHciJCAlaiIlaiIqIB5zQRR3Ih5qIi0gEmogMCAuc0EYdyIuIC9qIi8gJ3NBGXciJyAoaiAiaiIoIBdqICggJHNBEHciJCAdaiIdICdzQRR3IidqIiggJHNBGHciJCAdaiIdICdzQRl3IidqIjAgF2ogJSAjc0EZdyIjICxqIBpqIiUgBWogLiAlc0EQdyIlICAgJmoiIGoiJiAjc0EUdyIjaiIsICVzQRh3IiUgMHNBEHciLiAgIB9zQRl3Ih8gKWogG2oiICADaiAgIBxzQRB3IhwgL2oiICAfc0EUdyIfaiIpIBxzQRh3IhwgIGoiIGoiLyAnc0EUdyInaiIwIC5zQRh3Ii4gL2oiLyAnc0EZdyInICggFGogICAfc0EZdyIfaiIgIBlqIC0gK3NBGHciKCAgc0EQdyIgICUgJmoiJWoiJiAfc0EUdyIfaiIraiAFaiItIBVqIC0gKSAYaiAlICNzQRl3IiNqIiUgG2ogJCAlc0EQdyIkICggKmoiJWoiKCAjc0EUdyIjaiIpICRzQRh3IiRzQRB3IiogLCATaiAlIB5zQRl3Ih5qIiUgFmogHCAlc0EQdyIcIB1qIh0gHnNBFHciHmoiJSAcc0EYdyIcIB1qIh1qIiwgJ3NBFHciJ2oiLSAXaiArICBzQRh3IiAgJmoiJiAfc0EZdyIfIClqICJqIikgIWogKSAcc0EQdyIcIC9qIikgH3NBFHciH2oiKyAcc0EYdyIcIClqIikgH3NBGXciH2oiLyATaiAwIB0gHnNBGXciHWogAmoiHiAaaiAeICBzQRB3Ih4gJCAoaiIgaiIkIB1zQRR3Ih1qIiggHnNBGHciHiAvc0EQdyIvICAgI3NBGXciICAlaiABaiIjIANqIC4gI3NBEHciIyAmaiIlICBzQRR3IiBqIiYgI3NBGHciIyAlaiIlaiIuIB9zQRR3Ih9qIjAgL3NBGHciLyAuaiIuIB9zQRl3Ih8gKyAbaiAlICBzQRl3IiBqIiUgImogLSAqc0EYdyIqICVzQRB3IiUgHiAkaiIeaiIkICBzQRR3IiBqIitqIAVqIi0gGWogLSAmIBhqIB4gHXNBGXciHWoiHiASaiAcIB5zQRB3IhwgKiAsaiIeaiImIB1zQRR3Ih1qIiogHHNBGHciHHNBEHciLCAoIBRqIB4gJ3NBGXciHmoiJyAVaiAjICdzQRB3IiMgKWoiJyAec0EUdyIeaiIoICNzQRh3IiMgJ2oiJ2oiKSAfc0EUdyIfaiItICJqICsgJXNBGHciIiAkaiIkICBzQRl3IiAgKmogFmoiJSAhaiAjICVzQRB3IiMgLmoiJSAgc0EUdyIgaiIqICNzQRh3IiMgJWoiJSAgc0EZdyIgaiIrIAVqICcgHnNBGXciBSAwaiADaiIeIAJqIB4gInNBEHciIiAcICZqIhxqIh4gBXNBFHciBWoiJiAic0EYdyIiICtzQRB3IicgKCAcIB1zQRl3IhxqIBpqIh0gAWogHSAvc0EQdyIdICRqIiQgHHNBFHciHGoiKCAdc0EYdyIdICRqIiRqIisgIHNBFHciIGoiLiAnc0EYdyInICtqIisgIHNBGXciICAqIBtqICQgHHNBGXciG2oiHCAUaiAtICxzQRh3IhQgHHNBEHciHCAiIB5qIiJqIh4gG3NBFHciG2oiJGogEmoiEiAZaiAoIBdqICIgBXNBGXciBWoiIiACaiAjICJzQRB3IgIgFCApaiIUaiIiIAVzQRR3IgVqIhcgAnNBGHciAiASc0EQdyISICYgFWogFCAfc0EZdyIVaiIUIBhqIB0gFHNBEHciFCAlaiIYIBVzQRR3IhVqIhkgFHNBGHciFCAYaiIYaiIdICBzQRR3Ih9qIiA2AgAgACAXICQgHHNBGHciHCAeaiIeIBtzQRl3IhtqIAFqIgEgFmogASAUc0EQdyIBICtqIhQgG3NBFHciFmoiFyABc0EYdyIBNgI4IAAgGCAVc0EZdyIVIC5qIANqIgMgE2ogAyAcc0EQdyIDIAIgImoiAmoiIiAVc0EUdyIVaiITNgIEIAAgASAUaiIBNgIkIAAgAiAFc0EZdyICIBlqICFqIgUgGmogBSAnc0EQdyIFIB5qIhQgAnNBFHciAmoiGjYCCCAAICAgEnNBGHciEiAdaiIhNgIoIAAgEyADc0EYdyIDNgIwIAAgASAWc0EZdzYCECAAIBogBXNBGHciATYCNCAAICEgH3NBGXc2AhQgACABIBRqIgE2AiAgACADICJqIgUgFXNBGXc2AhggACASNgI8IAAgASACc0EZdzYCHCAAIBc2AgwgACAFNgIsC7cDAwR/A34FfyMAQdABayIBJAACQCAAe6ciAkEALQCQigEiA08NACABQShqIQQDQCABQQApA4CJASIANwMAIAFBACkDiIkBIgU3AwggAUEAKQOQiQEiBjcDECABQQApA5iJASIHNwMYIAEgA0EFdCIDQdGJAWoiCCkDADcDKCABIANB2YkBaiIJKQMANwMwIAEgA0HhiQFqIgopAwA3AzggASADQemJAWoiCykDADcDQEEALQCKigEhDCABQcAAOgBoIAEgDEEEciIMOgBpIAFCADcDICABIANB8YkBaikDADcDSCABIANB+YkBaikDADcDUCABIANBgYoBaikDADcDWCABIANBiYoBaikDADcDYCABIAc3A4gBIAEgBjcDgAEgASAFNwN4IAEgADcDcCABQZABaiABQfAAaiAEQcAAQgAgDBADIAsgASkDyAEgASkDqAGFNwMAIAogASkDwAEgASkDoAGFNwMAIAkgASkDuAEgASkDmAGFNwMAIAggASkDsAEgASkDkAGFNwMAQQBBAC0AkIoBQX9qIgM6AJCKASACIANB/wFxIgNJDQALCyABQdABaiQAC/oLBAR/BH4GfwF+IwBB0AJrIgUkAAJAAkAgAUGACEsNAEEAIQYgASEHQQAhCAJAIAFBgAhHDQAgBUEAKQOAiQEiCTcD8AEgBUEAKQOIiQEiCjcD+AEgBUEAKQOQiQEiCzcDgAIgBUEAKQOYiQEiDDcDiAIgA0EBciEIQRAhByAAIQ0CQANAAkACQCAHDgIDAAELIAhBAnIhCAsgBUGQAmogBUHwAWogDUHAACACIAhB/wFxEAMgBSAFKQOwAiAFKQOQAoUiCTcD8AEgBSAFKQO4AiAFKQOYAoUiCjcD+AEgBSAFKQPAAiAFKQOgAoUiCzcDgAIgBSAFKQPIAiAFKQOoAoUiDDcDiAIgB0F/aiEHIA1BwABqIQ0gAyEIDAALCyAEIAw3AxggBCALNwMQIAQgCjcDCCAEIAk3AwBBgAghCEEBIQZBACEHCyAIIAFPDQEgBUHgAGoiDUIANwMAIAVB2ABqIgFCADcDACAFQdAAaiIOQgA3AwAgBUHIAGoiD0IANwMAIAVBwABqIhBCADcDACAFQThqIhFCADcDACAFQTBqIhJCADcDACAFIAM6AGogBUIANwMoIAVBADsBaCAFQQApA4CJATcDACAFQQApA4iJATcDCCAFQQApA5CJATcDECAFQQApA5iJATcDGCAFIAatIAJ8NwMgIAUgACAIaiAHEAIgBUGAAWpBMGogEikDADcDACAFQYABakE4aiARKQMANwMAIAUgBSkDACIJNwOAASAFIAUpAwgiCjcDiAEgBSAFKQMQIgs3A5ABIAUgBSkDGCIMNwOYASAFIAUpAyg3A6gBIAUtAGohByAFLQBpIQMgBSkDICECIAUtAGghCCAFQYABakHAAGogECkDADcDACAFQYABakHIAGogDykDADcDACAFQYABakHQAGogDikDADcDACAFQYABakHYAGogASkDADcDACAFQYABakHgAGogDSkDADcDACAFIAg6AOgBIAUgAjcDoAEgBSAHIANFckECciIHOgDpASAFIAw3A4gCIAUgCzcDgAIgBSAKNwP4ASAFIAk3A/ABIAVBkAJqIAVB8AFqIAVBqAFqIAggAiAHQf8BcRADIAUpA7ACIQIgBSkDkAIhCSAFKQO4AiEKIAUpA5gCIQsgBSkDwAIhDCAFKQOgAiETIAQgBkEFdGoiCCAFKQPIAiAFKQOoAoU3AxggCCAMIBOFNwMQIAggCiALhTcDCCAIIAIgCYU3AwAgBkEBaiEGDAELIABCASABQX9qQQp2QQFyrXlCP4WGIgmnQQp0IgggAiADIAUQBSEHIAAgCGogASAIayAJQv///wGDIAJ8IAMgBUHAAEEgIAhBgAhLG2oQBSEIAkAgB0EBRw0AIAQgBSkDADcDACAEIAUpAwg3AwggBCAFKQMQNwMQIAQgBSkDGDcDGCAEIAUpAyA3AyAgBCAFKQMoNwMoIAQgBSkDMDcDMCAEIAUpAzg3AzhBAiEGDAELQQAhDUEAIQYCQCAIIAdqIgBBAkkNACAAQX5qQQF2IgZBAWohDSAFQfABaiEIIAUhBwNAIAggBzYCACAHQcAAaiEHIAhBBGohCCANQX9qIg0NAAsgA0EEciEBIAVB8AFqIQcgBCEIIAZBAWoiBiENA0AgBygCACEDIAVBACkDgIkBNwOQAiAFQQApA4iJATcDmAIgBUEAKQOQiQE3A6ACIAVBACkDmIkBNwOoAiAFQYABaiAFQZACaiADQcAAQgAgARADIAUpA6ABIQIgBSkDgAEhCSAFKQOoASEKIAUpA4gBIQsgBSkDsAEhDCAFKQOQASETIAhBGGogBSkDuAEgBSkDmAGFNwMAIAhBEGogDCAThTcDACAIQQhqIAogC4U3AwAgCCACIAmFNwMAIAhBIGohCCAHQQRqIQcgDUF/aiINDQALIABBfnEhDQsgDSAATw0AIAQgBkEFdGoiCCAFIAZBBnRqIgcpAwA3AwAgCCAHKQMINwMIIAggBykDEDcDECAIIAcpAxg3AxggBkEBaiEGCyAFQdACaiQAIAYLvREIAn8EfgF/AX4EfwN+An8BfiMAQfABayIBJAACQCAARQ0AAkBBAC0AkIoBIgINACABQTBqQQApA9CJATcDACABQThqQQApA9iJATcDACABQQApA6CJASIDNwMAIAFBACkDqIkBIgQ3AwggAUEAKQOwiQEiBTcDECABQQApA7iJASIGNwMYIAFBACkDyIkBNwMoQQAtAIqKASECQQAtAImKASEHQQApA8CJASEIQQAtAIiKASEJIAFBwABqQQApA+CJATcDACABQcgAakEAKQPoiQE3AwAgAUHQAGpBACkD8IkBNwMAIAFB2ABqQQApA/iJATcDACABQeAAakEAKQOAigE3AwAgASAJOgBoIAEgCDcDICABIAIgB0VyQQJyIgI6AGkgAUHwAGpBAXIhCiABQShqIQtCACEIQYAJIQwDQCABQbABaiABIAsgCUH/AXEgCCACQQhyQf8BcRADIAEgASkD2AEiDSABKQO4AYU3A3ggASABKQPgASIOIAEpA8ABhTcDgAEgASAGIAEpA+gBIg+FNwOoASABIAUgDoU3A6ABIAEgBCANhTcDmAEgASADIAEpA9ABIg2FNwOQASABIA8gASkDyAGFNwOIASAAQcAAIABBwABJGyIQQX9qIQkgASANIAEpA7ABhSINNwNwIA2nIREgCiEHIAwhAgJAA0AgAiAROgAAIAlFDQEgCUF/aiEJIAJBAWohAiAHLQAAIREgB0EBaiEHDAALCyAAIBBrIgBFDQIgDCAQaiEMIAhCAXwhCCABKQMIIQQgASkDACEDIAEpAxghBiABKQMQIQUgAS0AaSECIAEtAGghCQwACwsCQAJAAkBBAC0AiYoBIglBBnRBAEEALQCIigEiDGtGDQAgAUHgAGpBACkDgIoBNwMAIAFB2ABqQQApA/iJATcDACABQdAAakEAKQPwiQE3AwAgAUHIAGpBACkD6IkBNwMAIAFBwABqQQApA+CJATcDACABQThqQQApA9iJATcDACABQTBqQQApA9CJATcDACABQQApA8iJATcDKCABQQApA8CJASIINwMgIAFBACkDuIkBIg03AxggAUEAKQOwiQEiDjcDECABQQApA6iJASIPNwMIIAFBACkDoIkBIgM3AwBBAC0AiooBIQcgAUHuAGogAUG0AWovAQA7AQAgASABKAGwATYBaiABIAw6AGggASAHIAlFckECciIJOgBpDAELIAFB4ABqIAJBfmoiAkEFdCIJQcmKAWopAwA3AwAgAUHYAGogCUHBigFqKQMANwMAIAFB0ABqIAlBuYoBaikDADcDACABQcgAaiAJQbGKAWopAwA3AwBBwAAhDCABQcAAaiAJQamKAWopAwA3AwAgAUE4aiAJQaGKAWopAwA3AwAgAUEwaiAJQZmKAWopAwA3AwBCACEIIAFCADcDICABQQApA5iJASINNwMYIAFBACkDkIkBIg43AxAgAUEAKQOIiQEiDzcDCCABQQApA4CJASIDNwMAIAEgCUGRigFqKQMANwMoQQAtAIqKASEJIAFB7gBqIAFBsAFqQQRqLwEAOwEAIAEgASgBsAE2AWogASAJQQRyIgk6AGkgAUHAADoAaCACRQ0BCyACQX9qIgdBBXQiEUGRigFqKQMAIQQgEUGZigFqKQMAIQUgEUGhigFqKQMAIQYgEUGpigFqKQMAIRIgASANNwOIASABIA43A4ABIAEgDzcDeCABIAM3A3AgAUGwAWogAUHwAGogAUEoaiIQIAwgCCAJQf8BcRADIAFBwAA6AGggASASNwNAIAEgBjcDOCABIAU3AzAgASAENwMoIAFCADcDICABQQApA5iJASIINwMYIAFBACkDkIkBIg03AxAgAUEAKQOIiQEiDjcDCCABQQApA4CJASIPNwMAIAFBAC0AiooBQQRyIgk6AGkgASABKQPoASABKQPIAYU3A2AgASABKQPgASABKQPAAYU3A1ggASABKQPYASABKQO4AYU3A1AgASABKQPQASABKQOwAYU3A0ggAUHuAGogAUGwAWpBBGoiDC8BADsBACABIAEoAbABNgFqIAdFDQAgAUHqAGohESACQQV0QemJAWohAgNAIAJBaGopAwAhAyACQXBqKQMAIQQgAkF4aikDACEFIAIpAwAhBiABIAg3A4gBIAEgDTcDgAEgASAONwN4IAEgDzcDcCABQbABaiABQfAAaiAQQcAAQgAgCUH/AXEQAyABQcAAOgBoIAEgBjcDQCABIAU3AzggASAENwMwIAEgAzcDKCABQgA3AyAgAUEAKQOYiQEiCDcDGCABQQApA5CJASINNwMQIAFBACkDiIkBIg43AwggAUEAKQOAiQEiDzcDACABQQAtAIqKAUEEciIJOgBpIAEgASkD6AEgASkDyAGFNwNgIAEgASkD4AEgASkDwAGFNwNYIAEgASkD2AEgASkDuAGFNwNQIAEgASkD0AEgASkDsAGFNwNIIBFBBGogDC8BADsBACARIAEoAbABNgEAIAJBYGohAiAHQX9qIgcNAAsLIAFB8ABqQQFyIQogAUEoaiELQgAhCEGACSEMQcAAIQIDQCABQbABaiABIAsgAkH/AXEgCCAJQQhyQf8BcRADIAEgASkD2AEiDSABKQO4AYU3A3ggASABKQPgASIOIAEpA8ABhTcDgAEgASABKQPoASIPIAEpA8gBhTcDiAEgASABKQMAIAEpA9ABIgOFNwOQASABIA0gASkDCIU3A5gBIAEgDiABKQMQhTcDoAEgASADIAEpA7ABhSINNwNwIAEgDyABKQMYhTcDqAEgAEHAACAAQcAASRsiEEF/aiECIA2nIREgCiEHIAwhCQJAA0AgCSAROgAAIAJFDQEgAkF/aiECIAlBAWohCSAHLQAAIREgB0EBaiEHDAALCyAAIBBrIgBFDQEgDCAQaiEMIAhCAXwhCCABLQBpIQkgAS0AaCECDAALCyABQfABaiQAC6MCAQR+AkACQCAAQSBGDQBCq7OP/JGjs/DbACEBQv+kuYjFkdqCm38hAkLy5rvjo6f9p6V/IQNC58yn0NbQ67O7fyEEQQAhAAwBC0EAKQOYCSEBQQApA5AJIQJBACkDiAkhA0EAKQOACSEEQRAhAAtBACAAOgCKigFBAEIANwOAigFBAEIANwP4iQFBAEIANwPwiQFBAEIANwPoiQFBAEIANwPgiQFBAEIANwPYiQFBAEIANwPQiQFBAEIANwPIiQFBAEIANwPAiQFBACABNwO4iQFBACACNwOwiQFBACADNwOoiQFBACAENwOgiQFBACABNwOYiQFBACACNwOQiQFBACADNwOIiQFBACAENwOAiQFBAEEAOgCQigFBAEEAOwGIigELBgAgABABCwYAIAAQBgsGAEGAiQELqwIBBH4CQAJAIAFBIEYNAEKrs4/8kaOz8NsAIQNC/6S5iMWR2oKbfyEEQvLmu+Ojp/2npX8hBULnzKfQ1tDrs7t/IQZBACEBDAELQQApA5gJIQNBACkDkAkhBEEAKQOICSEFQQApA4AJIQZBECEBC0EAIAE6AIqKAUEAQgA3A4CKAUEAQgA3A/iJAUEAQgA3A/CJAUEAQgA3A+iJAUEAQgA3A+CJAUEAQgA3A9iJAUEAQgA3A9CJAUEAQgA3A8iJAUEAQgA3A8CJAUEAIAM3A7iJAUEAIAQ3A7CJAUEAIAU3A6iJAUEAIAY3A6CJAUEAIAM3A5iJAUEAIAQ3A5CJAUEAIAU3A4iJAUEAIAY3A4CJAUEAQQA6AJCKAUEAQQA7AYiKASAAEAEgAhAGCwsLAQBBgAgLBHgHAAA=";
var hash$g = "e8655383";
var wasmJson$g = {
  name: name$g,
  data: data$g,
  hash: hash$g
};
new Mutex();
function validateBits$2(bits) {
  if (!Number.isInteger(bits) || bits < 8 || bits % 8 !== 0) {
    return new Error("Invalid variant! Valid values: 8, 16, ...");
  }
  return null;
}
function createBLAKE3(bits = 256, key = null) {
  if (validateBits$2(bits)) {
    return Promise.reject(validateBits$2(bits));
  }
  let keyBuffer = null;
  let initParam = 0;
  if (key !== null) {
    keyBuffer = getUInt8Buffer(key);
    if (keyBuffer.length !== 32) {
      return Promise.reject(new Error("Key length must be exactly 32 bytes"));
    }
    initParam = 32;
  }
  const outputSize = bits / 8;
  const digestParam = outputSize;
  return WASMInterface(wasmJson$g, outputSize).then((wasm) => {
    if (initParam === 32) {
      wasm.writeMemory(keyBuffer);
    }
    wasm.init(initParam);
    const obj = {
      init: initParam === 32 ? () => {
        wasm.writeMemory(keyBuffer);
        wasm.init(initParam);
        return obj;
      } : () => {
        wasm.init(initParam);
        return obj;
      },
      update: (data) => {
        wasm.update(data);
        return obj;
      },
      digest: (outputType) => wasm.digest(outputType, digestParam),
      save: () => wasm.save(),
      load: (data) => {
        wasm.load(data);
        return obj;
      },
      blockSize: 64,
      digestSize: outputSize
    };
    return obj;
  });
}
new Mutex();
new Mutex();
new Mutex();
new Mutex();
new Mutex();
new Mutex();
new Mutex();
new Mutex();
new Mutex();
new Mutex();
new Mutex();
new Mutex();
new Mutex();
new Mutex();
new Mutex();
new Mutex();
new Mutex();
new Mutex();
function stableStringify(data) {
  const seen = [];
  let node = data;
  if (node && node.toJSON && typeof node.toJSON === "function") {
    node = node.toJSON();
  }
  if (node === void 0)
    return;
  if (typeof node == "number")
    return isFinite(node) ? "" + node : "null";
  if (typeof node !== "object") {
    if (typeof node === "string" && (node.startsWith("encrypted_U") || node.startsWith("binary_U"))) {
      return `"${node}"`;
    }
    return JSON.stringify(node);
  }
  let i2, out;
  if (Array.isArray(node)) {
    out = "[";
    for (i2 = 0; i2 < node.length; i2++) {
      if (i2)
        out += ",";
      out += stableStringify(node[i2]) || "null";
    }
    return out + "]";
  }
  if (node === null)
    return "null";
  if (seen.indexOf(node) !== -1) {
    throw new TypeError("Converting circular structure to JSON");
  }
  const seenIndex = seen.push(node) - 1;
  const keys = Object.keys(node).sort();
  out = "";
  for (i2 = 0; i2 < keys.length; i2++) {
    const key = keys[i2];
    const value = stableStringify(node[key]);
    if (!value)
      continue;
    if (out)
      out += ",";
    out += JSON.stringify(key) + ":" + value;
  }
  seen.splice(seenIndex, 1);
  return "{" + out + "}";
}
function parseJSON(json) {
  return JSON.parse(json);
}
let blake3Instance;
let blake3HashOnce;
let blake3HashOnceWithContext$1;
let blake3incrementalUpdateSLOW_WITH_DEVTOOLS;
let blake3digestForState;
const cryptoReady = new Promise((resolve) => {
  createBLAKE3().then((bl3) => {
    blake3Instance = bl3;
    blake3HashOnce = (data) => {
      return bl3.init().update(data).digest("binary");
    };
    blake3HashOnceWithContext$1 = (data, { context }) => {
      return bl3.init().update(context).update(data).digest("binary");
    };
    blake3incrementalUpdateSLOW_WITH_DEVTOOLS = (state2, data) => {
      bl3.load(state2).update(data);
      return bl3.save();
    };
    blake3digestForState = (state2) => {
      return bl3.load(state2).digest("binary");
    };
    resolve();
  }).catch((e2) => console.error("Failed to load cryptography dependencies", e2));
});
const textEncoder$1 = new TextEncoder();
const textDecoder = new TextDecoder();
function newRandomSigner() {
  return `signerSecret_z${base58.encode(ed25519.utils.randomPrivateKey())}`;
}
function signerSecretToBytes(secret) {
  return base58.decode(secret.substring("signerSecret_z".length));
}
function signerSecretFromBytes(bytes2) {
  return `signerSecret_z${base58.encode(bytes2)}`;
}
function getSignerID(secret) {
  return `signer_z${base58.encode(ed25519.getPublicKey(base58.decode(secret.substring("signerSecret_z".length))))}`;
}
function sign(secret, message) {
  const signature = ed25519.sign(textEncoder$1.encode(stableStringify(message)), base58.decode(secret.substring("signerSecret_z".length)));
  return `signature_z${base58.encode(signature)}`;
}
function verify(signature, message, id) {
  return ed25519.verify(base58.decode(signature.substring("signature_z".length)), textEncoder$1.encode(stableStringify(message)), base58.decode(id.substring("signer_z".length)));
}
function newRandomSealer() {
  return `sealerSecret_z${base58.encode(x25519.utils.randomPrivateKey())}`;
}
function sealerSecretToBytes(secret) {
  return base58.decode(secret.substring("sealerSecret_z".length));
}
function sealerSecretFromBytes(bytes2) {
  return `sealerSecret_z${base58.encode(bytes2)}`;
}
function getSealerID(secret) {
  return `sealer_z${base58.encode(x25519.getPublicKey(base58.decode(secret.substring("sealerSecret_z".length))))}`;
}
function newRandomAgentSecret() {
  return `${newRandomSealer()}/${newRandomSigner()}`;
}
function agentSecretToBytes(secret) {
  const [sealerSecret, signerSecret] = secret.split("/");
  return new Uint8Array([
    ...sealerSecretToBytes(sealerSecret),
    ...signerSecretToBytes(signerSecret)
  ]);
}
function agentSecretFromBytes(bytes2) {
  const sealerSecret = sealerSecretFromBytes(bytes2.slice(0, 32));
  const signerSecret = signerSecretFromBytes(bytes2.slice(32));
  return `${sealerSecret}/${signerSecret}`;
}
function getAgentID(secret) {
  const [sealerSecret, signerSecret] = secret.split("/");
  return `${getSealerID(sealerSecret)}/${getSignerID(signerSecret)}`;
}
function getAgentSignerID(agentId) {
  return agentId.split("/")[1];
}
function getAgentSignerSecret(agentSecret) {
  return agentSecret.split("/")[1];
}
function getAgentSealerID(agentId) {
  return agentId.split("/")[0];
}
function getAgentSealerSecret(agentSecret) {
  return agentSecret.split("/")[0];
}
function seal({ message, from, to, nOnceMaterial }) {
  const nOnce = blake3HashOnce(textEncoder$1.encode(stableStringify(nOnceMaterial))).slice(0, 24);
  const sealerPub = base58.decode(to.substring("sealer_z".length));
  const senderPriv = base58.decode(from.substring("sealerSecret_z".length));
  const plaintext = textEncoder$1.encode(stableStringify(message));
  const sharedSecret = x25519.getSharedSecret(senderPriv, sealerPub);
  const sealedBytes = xsalsa20_poly1305(sharedSecret, nOnce).encrypt(plaintext);
  return `sealed_U${bytesToBase64url(sealedBytes)}`;
}
function unseal(sealed, sealer, from, nOnceMaterial) {
  const nOnce = blake3HashOnce(textEncoder$1.encode(stableStringify(nOnceMaterial))).slice(0, 24);
  const sealerPriv = base58.decode(sealer.substring("sealerSecret_z".length));
  const senderPub = base58.decode(from.substring("sealer_z".length));
  const sealedBytes = base64URLtoBytes(sealed.substring("sealed_U".length));
  const sharedSecret = x25519.getSharedSecret(sealerPriv, senderPub);
  const plaintext = xsalsa20_poly1305(sharedSecret, nOnce).decrypt(sealedBytes);
  try {
    return JSON.parse(textDecoder.decode(plaintext));
  } catch (e2) {
    console.error("Failed to decrypt/parse sealed message", e2);
    return void 0;
  }
}
class StreamingHash {
  constructor(fromClone) {
    this.state = fromClone || blake3Instance.init().save();
  }
  update(value) {
    const encoded = textEncoder$1.encode(stableStringify(value));
    this.state = blake3incrementalUpdateSLOW_WITH_DEVTOOLS(this.state, encoded);
  }
  digest() {
    const hash2 = blake3digestForState(this.state);
    return `hash_z${base58.encode(hash2)}`;
  }
  clone() {
    return new StreamingHash(new Uint8Array(this.state));
  }
}
const shortHashLength = 19;
function shortHash(value) {
  return `shortHash_z${base58.encode(blake3HashOnce(textEncoder$1.encode(stableStringify(value))).slice(0, shortHashLength))}`;
}
function newRandomKeySecret() {
  return {
    secret: `keySecret_z${base58.encode(randomBytes(32))}`,
    id: `key_z${base58.encode(randomBytes(12))}`
  };
}
function encrypt(value, keySecret, nOnceMaterial) {
  const keySecretBytes = base58.decode(keySecret.substring("keySecret_z".length));
  const nOnce = blake3HashOnce(textEncoder$1.encode(stableStringify(nOnceMaterial))).slice(0, 24);
  const plaintext = textEncoder$1.encode(stableStringify(value));
  const ciphertext = xsalsa20(keySecretBytes, nOnce, plaintext);
  return `encrypted_U${bytesToBase64url(ciphertext)}`;
}
function encryptForTransaction(value, keySecret, nOnceMaterial) {
  return encrypt(value, keySecret, nOnceMaterial);
}
function encryptKeySecret(keys) {
  const nOnceMaterial = {
    encryptedID: keys.toEncrypt.id,
    encryptingID: keys.encrypting.id
  };
  return {
    encryptedID: keys.toEncrypt.id,
    encryptingID: keys.encrypting.id,
    encrypted: encrypt(keys.toEncrypt.secret, keys.encrypting.secret, nOnceMaterial)
  };
}
function decryptRaw(encrypted, keySecret, nOnceMaterial) {
  const keySecretBytes = base58.decode(keySecret.substring("keySecret_z".length));
  const nOnce = blake3HashOnce(textEncoder$1.encode(stableStringify(nOnceMaterial))).slice(0, 24);
  const ciphertext = base64URLtoBytes(encrypted.substring("encrypted_U".length));
  const plaintext = xsalsa20(keySecretBytes, nOnce, ciphertext);
  return textDecoder.decode(plaintext);
}
function decrypt(encrypted, keySecret, nOnceMaterial) {
  try {
    return parseJSON(decryptRaw(encrypted, keySecret, nOnceMaterial));
  } catch (e2) {
    console.error("Decryption error", e2);
    return void 0;
  }
}
function decryptRawForTransaction(encrypted, keySecret, nOnceMaterial) {
  return decryptRaw(encrypted, keySecret, nOnceMaterial);
}
function decryptKeySecret(encryptedInfo, sealingSecret) {
  const nOnceMaterial = {
    encryptedID: encryptedInfo.encryptedID,
    encryptingID: encryptedInfo.encryptingID
  };
  return decrypt(encryptedInfo.encrypted, sealingSecret, nOnceMaterial);
}
function uniquenessForHeader() {
  return `z${base58.encode(randomBytes(12))}`;
}
function createdNowUnique() {
  const createdAt = (/* @__PURE__ */ new Date()).toISOString();
  return {
    createdAt,
    uniqueness: uniquenessForHeader()
  };
}
const secretSeedLength$1 = 32;
function newRandomSecretSeed() {
  return randomBytes(secretSeedLength$1);
}
function agentSecretFromSecretSeed$1(secretSeed) {
  if (secretSeed.length !== secretSeedLength$1) {
    throw new Error(`Secret seed needs to be ${secretSeedLength$1} bytes long`);
  }
  return `sealerSecret_z${base58.encode(blake3HashOnceWithContext$1(secretSeed, {
    context: textEncoder$1.encode("seal")
  }))}/signerSecret_z${base58.encode(blake3HashOnceWithContext$1(secretSeed, {
    context: textEncoder$1.encode("sign")
  }))}`;
}
function accountOrAgentIDfromSessionID(sessionID) {
  return sessionID.split("_session")[0];
}
class CoListView {
  /** @internal */
  constructor(core) {
    var _a2, _b, _c, _d;
    this.type = "colist";
    this.id = core.id;
    this.core = core;
    this.afterStart = [];
    this.beforeEnd = [];
    this.insertions = {};
    this.deletionsByInsertion = {};
    this.insertions = {};
    this.deletionsByInsertion = {};
    this.afterStart = [];
    this.beforeEnd = [];
    for (const { txID, changes, madeAt } of this.core.getValidSortedTransactions()) {
      for (const [changeIdx, changeUntyped] of changes.entries()) {
        const change = changeUntyped;
        if (change.op === "pre" || change.op === "app") {
          let sessionEntry = this.insertions[txID.sessionID];
          if (!sessionEntry) {
            sessionEntry = {};
            this.insertions[txID.sessionID] = sessionEntry;
          }
          let txEntry = sessionEntry[txID.txIndex];
          if (!txEntry) {
            txEntry = {};
            sessionEntry[txID.txIndex] = txEntry;
          }
          txEntry[changeIdx] = {
            madeAt,
            predecessors: [],
            successors: [],
            ...change
          };
          if (change.op === "pre") {
            if (change.before === "end") {
              this.beforeEnd.push({
                ...txID,
                changeIdx
              });
            } else {
              const beforeEntry = (_b = (_a2 = this.insertions[change.before.sessionID]) == null ? void 0 : _a2[change.before.txIndex]) == null ? void 0 : _b[change.before.changeIdx];
              if (!beforeEntry) {
                throw new Error("Not yet implemented: insertion before missing op " + change.before);
              }
              beforeEntry.predecessors.splice(0, 0, {
                ...txID,
                changeIdx
              });
            }
          } else {
            if (change.after === "start") {
              this.afterStart.push({
                ...txID,
                changeIdx
              });
            } else {
              const afterEntry = (_d = (_c = this.insertions[change.after.sessionID]) == null ? void 0 : _c[change.after.txIndex]) == null ? void 0 : _d[change.after.changeIdx];
              if (!afterEntry) {
                throw new Error("Not yet implemented: insertion after missing op " + change.after);
              }
              afterEntry.successors.push({
                ...txID,
                changeIdx
              });
            }
          }
        } else if (change.op === "del") {
          let sessionEntry = this.deletionsByInsertion[change.insertion.sessionID];
          if (!sessionEntry) {
            sessionEntry = {};
            this.deletionsByInsertion[change.insertion.sessionID] = sessionEntry;
          }
          let txEntry = sessionEntry[change.insertion.txIndex];
          if (!txEntry) {
            txEntry = {};
            sessionEntry[change.insertion.txIndex] = txEntry;
          }
          let changeEntry = txEntry[change.insertion.changeIdx];
          if (!changeEntry) {
            changeEntry = [];
            txEntry[change.insertion.changeIdx] = changeEntry;
          }
          changeEntry.push({
            madeAt,
            deletionID: {
              ...txID,
              changeIdx
            },
            ...change
          });
        } else {
          throw new Error("Unknown list operation " + change.op);
        }
      }
    }
  }
  /** @category 6. Meta */
  get headerMeta() {
    return this.core.header.meta;
  }
  /** @category 6. Meta */
  get group() {
    return this.core.getGroup();
  }
  /**
   * Not yet implemented
   *
   * @category 4. Time travel
   */
  atTime(_time) {
    throw new Error("Not yet implemented");
  }
  /**
   * Get the item currently at `idx`.
   *
   * @category 1. Reading
   */
  get(idx) {
    const entry = this.entries()[idx];
    if (!entry) {
      return void 0;
    }
    return entry.value;
  }
  /**
   * Returns the current items in the CoList as an array.
   *
   * @category 1. Reading
   **/
  asArray() {
    return this.entries().map((entry) => entry.value);
  }
  /** @internal */
  entries() {
    const arr = [];
    for (const opID of this.afterStart) {
      this.fillArrayFromOpID(opID, arr);
    }
    for (const opID of this.beforeEnd) {
      this.fillArrayFromOpID(opID, arr);
    }
    return arr;
  }
  /** @internal */
  fillArrayFromOpID(opID, arr) {
    var _a2, _b, _c, _d, _e;
    const entry = (_b = (_a2 = this.insertions[opID.sessionID]) == null ? void 0 : _a2[opID.txIndex]) == null ? void 0 : _b[opID.changeIdx];
    if (!entry) {
      throw new Error("Missing op " + opID);
    }
    for (const predecessor of entry.predecessors) {
      this.fillArrayFromOpID(predecessor, arr);
    }
    const deleted = (((_e = (_d = (_c = this.deletionsByInsertion[opID.sessionID]) == null ? void 0 : _c[opID.txIndex]) == null ? void 0 : _d[opID.changeIdx]) == null ? void 0 : _e.length) || 0) > 0;
    if (!deleted) {
      arr.push({
        value: entry.value,
        madeAt: entry.madeAt,
        opID
      });
    }
    for (const successor of entry.successors) {
      this.fillArrayFromOpID(successor, arr);
    }
  }
  /**
   * Returns the current items in the CoList as an array. (alias of `asArray`)
   *
   * @category 1. Reading
   */
  toJSON() {
    return this.asArray();
  }
  /** @category 5. Edit history */
  editAt(idx) {
    const entry = this.entries()[idx];
    if (!entry) {
      return void 0;
    }
    const madeAt = new Date(entry.madeAt);
    const by = accountOrAgentIDfromSessionID(entry.opID.sessionID);
    const value = entry.value;
    return {
      by,
      tx: {
        sessionID: entry.opID.sessionID,
        txIndex: entry.opID.txIndex
      },
      at: madeAt,
      value
    };
  }
  /** @category 5. Edit history */
  deletionEdits() {
    const edits = [];
    for (const sessionID in this.deletionsByInsertion) {
      const sessionEntry = this.deletionsByInsertion[sessionID];
      for (const txIdx in sessionEntry) {
        const txEntry = sessionEntry[Number(txIdx)];
        for (const changeIdx in txEntry) {
          const changeEntry = txEntry[Number(changeIdx)];
          for (const deletion of changeEntry || []) {
            const madeAt = new Date(deletion.madeAt);
            const by = accountOrAgentIDfromSessionID(deletion.deletionID.sessionID);
            edits.push({
              by,
              tx: deletion.deletionID,
              at: madeAt
            });
          }
        }
      }
    }
    return edits;
  }
  /** @category 3. Subscription */
  subscribe(listener) {
    return this.core.subscribe((content) => {
      listener(content);
    });
  }
}
class CoList extends CoListView {
  /** Returns a new version of this CoList with `item` appended after the item currently at index `after`.
   *
   * If `privacy` is `"private"` **(default)**, `item` is encrypted in the transaction, only readable by other members of the group this `CoList` belongs to. Not even sync servers can see the content in plaintext.
   *
   * If `privacy` is `"trusting"`, `item` is stored in plaintext in the transaction, visible to everyone who gets a hold of it, including sync servers.
   *
   * @category 2. Editing
   **/
  append(item, after, privacy = "private") {
    const entries = this.entries();
    after = after === void 0 ? entries.length > 0 ? entries.length - 1 : 0 : 0;
    let opIDBefore;
    if (entries.length > 0) {
      const entryBefore = entries[after];
      if (!entryBefore) {
        throw new Error("Invalid index " + after);
      }
      opIDBefore = entryBefore.opID;
    } else {
      if (after !== 0) {
        throw new Error("Invalid index " + after);
      }
      opIDBefore = "start";
    }
    this.core.makeTransaction([
      {
        op: "app",
        value: isCoValue(item) ? item.id : item,
        after: opIDBefore
      }
    ], privacy);
    return new CoList(this.core);
  }
  /**
   * Returns a new version of this CoList with `item` prepended before the item currently at index `before`.
   *
   * If `privacy` is `"private"` **(default)**, `item` is encrypted in the transaction, only readable by other members of the group this `CoList` belongs to. Not even sync servers can see the content in plaintext.
   *
   * If `privacy` is `"trusting"`, `item` is stored in plaintext in the transaction, visible to everyone who gets a hold of it, including sync servers.
   *
   * @category 2. Editing
   */
  prepend(item, before, privacy = "private") {
    const entries = this.entries();
    before = before === void 0 ? 0 : before;
    let opIDAfter;
    if (entries.length > 0) {
      const entryAfter = entries[before];
      if (entryAfter) {
        opIDAfter = entryAfter.opID;
      } else {
        if (before !== entries.length) {
          throw new Error("Invalid index " + before);
        }
        opIDAfter = "end";
      }
    } else {
      if (before !== 0) {
        throw new Error("Invalid index " + before);
      }
      opIDAfter = "end";
    }
    this.core.makeTransaction([
      {
        op: "pre",
        value: isCoValue(item) ? item.id : item,
        before: opIDAfter
      }
    ], privacy);
    return new CoList(this.core);
  }
  /** Returns a new version of this CoList with the item at index `at` deleted from the list.
   *
   * If `privacy` is `"private"` **(default)**, the fact of this deletion is encrypted in the transaction, only readable by other members of the group this `CoList` belongs to. Not even sync servers can see the content in plaintext.
   *
   * If `privacy` is `"trusting"`, the fact of this deletion is stored in plaintext in the transaction, visible to everyone who gets a hold of it, including sync servers.
   *
   * @category 2. Editing
   **/
  delete(at, privacy = "private") {
    const entries = this.entries();
    const entry = entries[at];
    if (!entry) {
      throw new Error("Invalid index " + at);
    }
    this.core.makeTransaction([
      {
        op: "del",
        insertion: entry.opID
      }
    ], privacy);
    return new CoList(this.core);
  }
  /** @category 2. Editing */
  mutate(mutator) {
    const mutable = new MutableCoList(this.core);
    mutator(mutable);
    return new CoList(this.core);
  }
  /** @deprecated Use `mutate` instead. */
  edit(mutator) {
    return this.mutate(mutator);
  }
}
class MutableCoList extends CoListView {
  /** Appends `item` after the item currently at index `after`.
   *
   * If `privacy` is `"private"` **(default)**, `item` is encrypted in the transaction, only readable by other members of the group this `CoList` belongs to. Not even sync servers can see the content in plaintext.
   *
   * If `privacy` is `"trusting"`, `item` is stored in plaintext in the transaction, visible to everyone who gets a hold of it, including sync servers.
   *
   * @category 2. Mutating
   **/
  append(item, after, privacy = "private") {
    const listAfter = CoList.prototype.append.call(this, item, after, privacy);
    this.afterStart = listAfter.afterStart;
    this.beforeEnd = listAfter.beforeEnd;
    this.insertions = listAfter.insertions;
    this.deletionsByInsertion = listAfter.deletionsByInsertion;
  }
  /** Prepends `item` before the item currently at index `before`.
   *
   * If `privacy` is `"private"` **(default)**, `item` is encrypted in the transaction, only readable by other members of the group this `CoList` belongs to. Not even sync servers can see the content in plaintext.
   *
   * If `privacy` is `"trusting"`, `item` is stored in plaintext in the transaction, visible to everyone who gets a hold of it, including sync servers.
   *
   * * @category 2. Mutating
   **/
  prepend(item, before, privacy = "private") {
    const listAfter = CoList.prototype.prepend.call(this, item, before, privacy);
    this.afterStart = listAfter.afterStart;
    this.beforeEnd = listAfter.beforeEnd;
    this.insertions = listAfter.insertions;
    this.deletionsByInsertion = listAfter.deletionsByInsertion;
  }
  /** Deletes the item at index `at` from the list.
   *
   * If `privacy` is `"private"` **(default)**, the fact of this deletion is encrypted in the transaction, only readable by other members of the group this `CoList` belongs to. Not even sync servers can see the content in plaintext.
   *
   * If `privacy` is `"trusting"`, the fact of this deletion is stored in plaintext in the transaction, visible to everyone who gets a hold of it, including sync servers.
   *
   * * @category 2. Mutating
   **/
  delete(at, privacy = "private") {
    const listAfter = CoList.prototype.delete.call(this, at, privacy);
    this.afterStart = listAfter.afterStart;
    this.beforeEnd = listAfter.beforeEnd;
    this.insertions = listAfter.insertions;
    this.deletionsByInsertion = listAfter.deletionsByInsertion;
  }
}
function isAccountID(id) {
  return id.startsWith("co_");
}
class CoStreamView {
  constructor(core) {
    this.type = "costream";
    this.id = core.id;
    this.core = core;
    this.items = {};
    this.fillFromCoValue();
  }
  get headerMeta() {
    return this.core.header.meta;
  }
  get group() {
    return this.core.getGroup();
  }
  /** Not yet implemented */
  atTime(_time) {
    throw new Error("Not yet implemented");
  }
  /** @internal */
  fillFromCoValue() {
    this.items = {};
    for (const { txID, madeAt, changes } of this.core.getValidSortedTransactions()) {
      for (const changeUntyped of changes) {
        const change = changeUntyped;
        let entries = this.items[txID.sessionID];
        if (!entries) {
          entries = [];
          this.items[txID.sessionID] = entries;
        }
        entries.push({ value: change, madeAt, tx: txID });
      }
    }
  }
  getSingleStream() {
    var _a2;
    if (Object.keys(this.items).length === 0) {
      return void 0;
    } else if (Object.keys(this.items).length !== 1) {
      throw new Error("CoStream.getSingleStream() can only be called when there is exactly one stream");
    }
    return (_a2 = Object.values(this.items)[0]) == null ? void 0 : _a2.map((item) => item.value);
  }
  sessions() {
    return Object.keys(this.items);
  }
  accounts() {
    return new Set(this.sessions().map(accountOrAgentIDfromSessionID).filter(isAccountID));
  }
  nthItemIn(sessionID, n2) {
    const items = this.items[sessionID];
    if (!items)
      return;
    const item = items[n2];
    if (!item)
      return;
    return {
      by: accountOrAgentIDfromSessionID(sessionID),
      tx: item.tx,
      at: new Date(item.madeAt),
      value: item.value
    };
  }
  lastItemIn(sessionID) {
    const items = this.items[sessionID];
    if (!items)
      return;
    return this.nthItemIn(sessionID, items.length - 1);
  }
  *itemsIn(sessionID) {
    const items = this.items[sessionID];
    if (!items)
      return;
    for (const item of items) {
      yield {
        by: accountOrAgentIDfromSessionID(sessionID),
        tx: item.tx,
        at: new Date(item.madeAt),
        value: item.value
      };
    }
  }
  lastItemBy(account) {
    let latestItem;
    for (const sessionID of Object.keys(this.items)) {
      if (sessionID.startsWith(account)) {
        const item = this.lastItemIn(sessionID);
        if (!item)
          continue;
        if (!latestItem || item.at > latestItem.at) {
          latestItem = {
            by: item.by,
            tx: item.tx,
            at: item.at,
            value: item.value
          };
        }
      }
    }
    return latestItem;
  }
  *itemsBy(account) {
    const items = [
      ...Object.keys(this.items).flatMap((sessionID) => sessionID.startsWith(account) ? [...this.itemsIn(sessionID)].map((item) => ({
        in: sessionID,
        ...item
      })) : [])
    ];
    items.sort((a2, b2) => a2.at.getTime() - b2.at.getTime());
    for (const item of items) {
      yield item;
    }
  }
  toJSON() {
    return Object.fromEntries(Object.entries(this.items).map(([sessionID, items]) => [
      sessionID,
      items.map((item) => item.value)
    ]));
  }
  subscribe(listener) {
    return this.core.subscribe((content) => {
      listener(content);
    });
  }
}
class CoStream extends CoStreamView {
  push(item, privacy = "private") {
    this.core.makeTransaction([isCoValue(item) ? item.id : item], privacy);
    return new CoStream(this.core);
  }
  mutate(mutator) {
    const mutable = new MutableCoStream(this.core);
    mutator(mutable);
    return new CoStream(this.core);
  }
  /** @deprecated Use `mutate` instead. */
  edit(mutator) {
    return this.mutate(mutator);
  }
}
class MutableCoStream extends CoStreamView {
  push(item, privacy = "private") {
    this.core.makeTransaction([isCoValue(item) ? item.id : item], privacy);
    this.fillFromCoValue();
  }
}
const binary_U_prefixLength = 8;
class BinaryCoStreamView extends CoStreamView {
  getBinaryChunks(allowUnfinished) {
    const items = this.getSingleStream();
    if (!items)
      return;
    const start = items[0];
    if ((start == null ? void 0 : start.type) !== "start") {
      console.error("Invalid binary stream start", start);
      return;
    }
    const end = items[items.length - 1];
    if ((end == null ? void 0 : end.type) !== "end" && !allowUnfinished)
      return;
    const chunks = [];
    let finished = false;
    for (const item of items.slice(1)) {
      if (item.type === "end") {
        finished = true;
        break;
      }
      if (item.type !== "chunk") {
        console.error("Invalid binary stream chunk", item);
        return void 0;
      }
      const chunk = base64URLtoBytes(item.chunk.slice(binary_U_prefixLength));
      chunks.push(chunk);
    }
    return {
      mimeType: start.mimeType,
      fileName: start.fileName,
      totalSizeBytes: start.totalSizeBytes,
      chunks,
      finished
    };
  }
}
class BinaryCoStream extends BinaryCoStreamView {
  push(item, privacy = "private", returnNewStream = true) {
    this.core.makeTransaction([item], privacy);
    if (returnNewStream) {
      return new BinaryCoStream(this.core);
    }
  }
  startBinaryStream(settings, privacy = "private") {
    return this.push({
      type: "start",
      ...settings
    }, privacy, false);
  }
  pushBinaryStreamChunk(chunk, privacy = "private") {
    return this.push({
      type: "chunk",
      chunk: `binary_U${bytesToBase64url(chunk)}`
    }, privacy, false);
  }
  endBinaryStream(privacy = "private") {
    return this.push({
      type: "end"
    }, privacy, true);
  }
  mutate(mutator) {
    const mutable = new MutableBinaryCoStream(this.core);
    mutator(mutable);
    return new BinaryCoStream(this.core);
  }
  /** @deprecated Use `mutate` instead. */
  edit(mutator) {
    return this.mutate(mutator);
  }
}
class MutableBinaryCoStream extends BinaryCoStreamView {
  /** @internal */
  push(item, privacy = "private") {
    MutableCoStream.prototype.push.call(this, item, privacy);
  }
  startBinaryStream(settings, privacy = "private") {
    this.push({
      type: "start",
      ...settings
    }, privacy);
  }
  pushBinaryStreamChunk(chunk, privacy = "private") {
    this.push({
      type: "chunk",
      chunk: `binary_U${bytesToBase64url(chunk)}`
    }, privacy);
  }
  endBinaryStream(privacy = "private") {
    this.push({
      type: "end"
    }, privacy);
  }
}
function isCoValue(value) {
  return value instanceof CoMap || value instanceof CoList || value instanceof CoStream || value instanceof BinaryCoStream;
}
class CoMapView {
  /** @internal */
  constructor(core, options) {
    this.type = "comap";
    this.atTimeFilter = void 0;
    this.id = core.id;
    this.core = core;
    this.ops = {};
    for (const { txID, changes, madeAt } of core.getValidSortedTransactions(options)) {
      for (const [changeIdx, changeUntyped] of changes.entries()) {
        const change = changeUntyped;
        let entries = this.ops[change.key];
        if (!entries) {
          entries = [];
          this.ops[change.key] = entries;
        }
        entries.push({
          txID,
          madeAt,
          changeIdx,
          ...change
        });
      }
    }
  }
  /** @category 6. Meta */
  get headerMeta() {
    return this.core.header.meta;
  }
  /** @category 6. Meta */
  get group() {
    return this.core.getGroup();
  }
  /** @category 4. Time travel */
  atTime(time) {
    const clone = Object.create(this);
    clone.id = this.id;
    clone.type = this.type;
    clone.core = this.core;
    clone.ops = this.ops;
    clone.atTimeFilter = time;
    return clone;
  }
  /** @internal */
  timeFilteredOps(key) {
    var _a2;
    if (this.atTimeFilter) {
      return (_a2 = this.ops[key]) == null ? void 0 : _a2.filter((op) => op.madeAt <= this.atTimeFilter);
    } else {
      return this.ops[key];
    }
  }
  /**
   * Get all keys currently in the map.
   *
   * @category 1. Reading */
  keys() {
    const keys = Object.keys(this.ops);
    if (this.atTimeFilter) {
      return keys.filter((key) => {
        var _a2;
        return (_a2 = this.timeFilteredOps(key)) == null ? void 0 : _a2.length;
      });
    } else {
      return keys;
    }
  }
  /**
   * Returns the current value for the given key.
   *
   * @category 1. Reading
   **/
  get(key) {
    const ops = this.timeFilteredOps(key);
    if (!ops) {
      return void 0;
    }
    const includeUntil = this.atTimeFilter;
    const lastEntry = includeUntil ? ops.findLast((entry) => entry.madeAt <= includeUntil) : ops[ops.length - 1];
    if ((lastEntry == null ? void 0 : lastEntry.op) === "del") {
      return void 0;
    } else {
      return lastEntry == null ? void 0 : lastEntry.value;
    }
  }
  /** @category 1. Reading */
  asObject() {
    const object = {};
    for (const key of this.keys()) {
      const value = this.get(key);
      if (value !== void 0) {
        object[key] = value;
      }
    }
    return object;
  }
  /** @category 1. Reading */
  toJSON() {
    return this.asObject();
  }
  /** @category 5. Edit history */
  nthEditAt(key, n2) {
    const ops = this.timeFilteredOps(key);
    if (!ops || ops.length <= n2) {
      return void 0;
    }
    const entry = ops[n2];
    if (this.atTimeFilter && entry.madeAt > this.atTimeFilter) {
      return void 0;
    }
    return {
      by: accountOrAgentIDfromSessionID(entry.txID.sessionID),
      tx: entry.txID,
      at: new Date(entry.madeAt),
      value: entry.op === "del" ? void 0 : entry.value
    };
  }
  /** @category 5. Edit history */
  lastEditAt(key) {
    const ops = this.timeFilteredOps(key);
    if (!ops || ops.length === 0) {
      return void 0;
    }
    return this.nthEditAt(key, ops.length - 1);
  }
  /** @category 5. Edit history */
  *editsAt(key) {
    const ops = this.timeFilteredOps(key);
    if (!ops) {
      return;
    }
    for (let i2 = 0; i2 < ops.length; i2++) {
      yield this.nthEditAt(key, i2);
    }
  }
  /** @category 3. Subscription */
  subscribe(listener) {
    return this.core.subscribe((content) => {
      listener(content);
    });
  }
}
class CoMap extends CoMapView {
  set(...args) {
    if (typeof args[0] === "string") {
      const [key, value, privacy = "private"] = args;
      this.core.makeTransaction([
        {
          op: "set",
          key,
          value: isCoValue(value) ? value.id : value
        }
      ], privacy);
    } else {
      const [kv, privacy = "private"] = args;
      for (const [key, value] of Object.entries(kv)) {
        this.core.makeTransaction([
          {
            op: "set",
            key,
            value: isCoValue(value) ? value.id : value
          }
        ], privacy);
      }
    }
    return new CoMap(this.core);
  }
  /** Returns a new version of this CoMap with the given key deleted (setting it to undefined).
   *
   * If `privacy` is `"private"` **(default)**, `key` is encrypted in the transaction, only readable by other members of the group this `CoMap` belongs to. Not even sync servers can see the content in plaintext.
   *
   * If `privacy` is `"trusting"`, `key` is stored in plaintext in the transaction, visible to everyone who gets a hold of it, including sync servers.
   *
   * @category 2. Editing
   **/
  delete(key, privacy = "private") {
    this.core.makeTransaction([
      {
        op: "del",
        key
      }
    ], privacy);
    return new CoMap(this.core);
  }
  /** @category 2. Editing */
  mutate(mutator) {
    const mutable = new MutableCoMap(this.core);
    mutator(mutable);
    return new this.constructor(this.core);
  }
  /** @deprecated Use `mutate` instead. */
  edit(mutator) {
    return this.mutate(mutator);
  }
}
class MutableCoMap extends CoMapView {
  /** Sets a new value for the given key.
   *
   * If `privacy` is `"private"` **(default)**, both `key` and `value` are encrypted in the transaction, only readable by other members of the group this `CoMap` belongs to. Not even sync servers can see the content in plaintext.
   *
   * If `privacy` is `"trusting"`, both `key` and `value` are stored in plaintext in the transaction, visible to everyone who gets a hold of it, including sync servers.
   *
   * @category 2. Mutation
   */
  set(key, value, privacy = "private") {
    const after = CoMap.prototype.set.call(this, key, value, privacy);
    this.ops = after.ops;
  }
  /** Deletes the value for the given key (setting it to undefined).
   *
   * If `privacy` is `"private"` **(default)**, `key` is encrypted in the transaction, only readable by other members of the group this `CoMap` belongs to. Not even sync servers can see the content in plaintext.
   *
   * If `privacy` is `"trusting"`, `key` is stored in plaintext in the transaction, visible to everyone who gets a hold of it, including sync servers.
   * @category 2. Mutation
   */
  delete(key, privacy = "private") {
    const after = CoMap.prototype.delete.call(this, key, privacy);
    this.ops = after.ops;
  }
}
function rawCoIDtoBytes(id) {
  return base58.decode(id.substring("co_z".length));
}
function rawCoIDfromBytes(bytes2) {
  return `co_z${base58.encode(bytes2.slice(0, shortHashLength))}`;
}
function isAgentID(id) {
  return typeof id === "string" && id.startsWith("sealer_") && id.includes("/signer_");
}
const EVERYONE = "everyone";
class Group extends CoMap {
  /**
   * Returns the current role of a given account.
   *
   * @category 1. Role reading
   */
  roleOf(accountID) {
    return this.roleOfInternal(accountID);
  }
  /** @internal */
  roleOfInternal(accountID) {
    return this.get(accountID);
  }
  /**
   * Returns the role of the current account in the group.
   *
   * @category 1. Role reading
   */
  myRole() {
    return this.roleOfInternal(this.core.node.account.id);
  }
  /**
   * Directly grants a new member a role in the group. The current account must be an
   * admin to be able to do so. Throws otherwise.
   *
   * @category 2. Role changing
   */
  addMember(accountID, role) {
    return this.addMemberInternal(accountID, role);
  }
  /** @internal */
  addMemberInternal(accountID, role) {
    return this.mutate((mutable) => {
      const currentReadKey = this.core.getCurrentReadKey();
      if (!currentReadKey.secret) {
        throw new Error("Can't add member without read key secret");
      }
      if (accountID === EVERYONE) {
        if (!(role === "reader" || role === "writer")) {
          throw new Error("Can't make everyone something other than reader or writer");
        }
        mutable.set(accountID, role, "trusting");
        if (mutable.get(accountID) !== role) {
          throw new Error("Failed to set role");
        }
        mutable.set(`${currentReadKey.id}_for_${EVERYONE}`, currentReadKey.secret, "trusting");
      } else {
        const agent = this.core.node.resolveAccountAgent(accountID, "Expected to know agent to add them to group");
        mutable.set(accountID, role, "trusting");
        if (mutable.get(accountID) !== role) {
          throw new Error("Failed to set role");
        }
        mutable.set(`${currentReadKey.id}_for_${accountID}`, seal({
          message: currentReadKey.secret,
          from: this.core.node.account.currentSealerSecret(),
          to: getAgentSealerID(agent),
          nOnceMaterial: {
            in: this.id,
            tx: this.core.nextTransactionID()
          }
        }), "trusting");
      }
    });
  }
  /** @internal */
  rotateReadKey() {
    const currentlyPermittedReaders = this.keys().filter((key) => {
      if (key.startsWith("co_") || isAgentID(key)) {
        const role = this.get(key);
        return role === "admin" || role === "writer" || role === "reader";
      } else {
        return false;
      }
    });
    const maybeCurrentReadKey = this.core.getCurrentReadKey();
    if (!maybeCurrentReadKey.secret) {
      throw new Error("Can't rotate read key secret we don't have access to");
    }
    const currentReadKey = {
      id: maybeCurrentReadKey.id,
      secret: maybeCurrentReadKey.secret
    };
    const newReadKey = newRandomKeySecret();
    return this.mutate((mutable) => {
      for (const readerID of currentlyPermittedReaders) {
        const reader = this.core.node.resolveAccountAgent(readerID, "Expected to know currently permitted reader");
        mutable.set(`${newReadKey.id}_for_${readerID}`, seal({
          message: newReadKey.secret,
          from: this.core.node.account.currentSealerSecret(),
          to: getAgentSealerID(reader),
          nOnceMaterial: {
            in: this.id,
            tx: this.core.nextTransactionID()
          }
        }), "trusting");
      }
      mutable.set(`${currentReadKey.id}_for_${newReadKey.id}`, encryptKeySecret({
        encrypting: newReadKey,
        toEncrypt: currentReadKey
      }).encrypted, "trusting");
      mutable.set("readKey", newReadKey.id, "trusting");
    });
  }
  /**
   * Strips the specified member of all roles (preventing future writes in
   *  the group and owned values) and rotates the read encryption key for that group
   * (preventing reads of new content in the group and owned values)
   *
   * @category 2. Role changing
   */
  removeMember(accountID) {
    return this.removeMemberInternal(accountID);
  }
  /** @internal */
  removeMemberInternal(accountID) {
    const afterRevoke = this.mutate((map) => {
      map.set(accountID, "revoked", "trusting");
    });
    return afterRevoke.rotateReadKey();
  }
  /**
   * Creates an invite for new members to indirectly join the group,
   * allowing them to grant themselves the specified role with the InviteSecret
   * (a string starting with "inviteSecret_") - use `LocalNode.acceptInvite()` for this purpose.
   *
   * @category 2. Role changing
   */
  createInvite(role) {
    const secretSeed = newRandomSecretSeed();
    const inviteSecret = agentSecretFromSecretSeed$1(secretSeed);
    const inviteID = getAgentID(inviteSecret);
    this.addMemberInternal(inviteID, `${role}Invite`);
    return inviteSecretFromSecretSeed(secretSeed);
  }
  /**
   * Creates a new `CoMap` within this group, with the specified specialized
   * `CoMap` type `M` and optional static metadata.
   *
   * @category 3. Value creation
   */
  createMap(init, meta, initPrivacy = "private") {
    let map = this.core.node.createCoValue({
      type: "comap",
      ruleset: {
        type: "ownedByGroup",
        group: this.id
      },
      meta: meta || null,
      ...createdNowUnique()
    }).getCurrentContent();
    if (init) {
      for (const [key, value] of Object.entries(init)) {
        map = map.set(key, value, initPrivacy);
      }
    }
    return map;
  }
  /**
   * Creates a new `CoList` within this group, with the specified specialized
   * `CoList` type `L` and optional static metadata.
   *
   * @category 3. Value creation
   */
  createList(init, meta, initPrivacy = "private") {
    let list2 = this.core.node.createCoValue({
      type: "colist",
      ruleset: {
        type: "ownedByGroup",
        group: this.id
      },
      meta: meta || null,
      ...createdNowUnique()
    }).getCurrentContent();
    if (init) {
      for (const item of init) {
        list2 = list2.append(item, void 0, initPrivacy);
      }
    }
    return list2;
  }
  /** @category 3. Value creation */
  createStream(meta) {
    return this.core.node.createCoValue({
      type: "costream",
      ruleset: {
        type: "ownedByGroup",
        group: this.id
      },
      meta: meta || null,
      ...createdNowUnique()
    }).getCurrentContent();
  }
  /** @category 3. Value creation */
  createBinaryStream(meta = { type: "binary" }) {
    return this.core.node.createCoValue({
      type: "costream",
      ruleset: {
        type: "ownedByGroup",
        group: this.id
      },
      meta,
      ...createdNowUnique()
    }).getCurrentContent();
  }
}
function inviteSecretFromSecretSeed(secretSeed) {
  return `inviteSecret_z${base58.encode(secretSeed)}`;
}
function secretSeedFromInviteSecret(inviteSecret) {
  if (!inviteSecret.startsWith("inviteSecret_z")) {
    throw new Error("Invalid invite secret");
  }
  return base58.decode(inviteSecret.slice("inviteSecret_z".length));
}
function accountHeaderForInitialAgentSecret(agentSecret) {
  const agent = getAgentID(agentSecret);
  return {
    type: "comap",
    ruleset: { type: "group", initialAdmin: agent },
    meta: {
      type: "account"
    },
    createdAt: null,
    uniqueness: null
  };
}
class Account extends Group {
  getCurrentAgentID() {
    const agents = this.keys().filter((k2) => k2.startsWith("sealer_"));
    if (agents.length !== 1) {
      throw new Error("Expected exactly one agent in account, got " + agents.length);
    }
    return agents[0];
  }
}
class ControlledAccount extends Account {
  constructor(core, agentSecret) {
    super(core);
    this.agentSecret = agentSecret;
  }
  /**
   * Creates a new group (with the current account as the group's first admin).
   * @category 1. High-level
   */
  createGroup() {
    return this.core.node.createGroup();
  }
  async acceptInvite(groupOrOwnedValueID, inviteSecret) {
    return this.core.node.acceptInvite(groupOrOwnedValueID, inviteSecret);
  }
  currentAgentID() {
    return getAgentID(this.agentSecret);
  }
  currentSignerID() {
    return getAgentSignerID(this.currentAgentID());
  }
  currentSignerSecret() {
    return getAgentSignerSecret(this.agentSecret);
  }
  currentSealerID() {
    return getAgentSealerID(this.currentAgentID());
  }
  currentSealerSecret() {
    return getAgentSealerSecret(this.agentSecret);
  }
}
class AnonymousControlledAccount {
  constructor(agentSecret) {
    this.agentSecret = agentSecret;
  }
  get id() {
    return getAgentID(this.agentSecret);
  }
  currentAgentID() {
    return getAgentID(this.agentSecret);
  }
  currentSignerID() {
    return getAgentSignerID(this.currentAgentID());
  }
  currentSignerSecret() {
    return getAgentSignerSecret(this.agentSecret);
  }
  currentSealerID() {
    return getAgentSealerID(this.currentAgentID());
  }
  currentSealerSecret() {
    return getAgentSealerSecret(this.agentSecret);
  }
}
function expectMap(content) {
  if (content.type !== "comap") {
    throw new Error("Expected map");
  }
  return content;
}
function expectGroup(content) {
  const map = expectMap(content);
  if (map.core.header.ruleset.type !== "group") {
    throw new Error("Expected group ruleset in group");
  }
  if (!(map instanceof Group)) {
    throw new Error("Expected group");
  }
  return map;
}
function determineValidTransactions(coValue) {
  if (coValue.header.ruleset.type === "group") {
    const allTransactionsSorted = Object.entries(coValue.sessions).flatMap(([sessionID, sessionLog]) => {
      return sessionLog.transactions.map((tx, txIndex) => ({
        sessionID,
        txIndex,
        tx
      }));
    });
    allTransactionsSorted.sort((a2, b2) => {
      return a2.tx.madeAt - b2.tx.madeAt;
    });
    const initialAdmin = coValue.header.ruleset.initialAdmin;
    if (!initialAdmin) {
      throw new Error("Group must have initialAdmin");
    }
    const memberState = {};
    const validTransactions = [];
    for (const { sessionID, txIndex, tx } of allTransactionsSorted) {
      const transactor = accountOrAgentIDfromSessionID(sessionID);
      if (tx.privacy === "private") {
        if (memberState[transactor] === "admin") {
          validTransactions.push({
            txID: { sessionID, txIndex },
            tx
          });
          continue;
        } else {
          console.warn("Only admins can make private transactions in groups");
          continue;
        }
      }
      let changes;
      try {
        changes = parseJSON(tx.changes);
      } catch (e2) {
        console.warn(coValue.id, "Invalid JSON in transaction", e2, tx, JSON.stringify(tx.changes, (k2, v2) => k2 === "changes" || k2 === "encryptedChanges" ? v2.slice(0, 20) + "..." : v2));
        continue;
      }
      const change = changes[0];
      if (changes.length !== 1) {
        console.warn("Group transaction must have exactly one change");
        continue;
      }
      if (change.op !== "set") {
        console.warn("Group transaction must set a role or readKey");
        continue;
      }
      if (change.key === "readKey") {
        if (memberState[transactor] !== "admin") {
          console.warn("Only admins can set readKeys");
          continue;
        }
        validTransactions.push({ txID: { sessionID, txIndex }, tx });
        continue;
      } else if (change.key === "profile") {
        if (memberState[transactor] !== "admin") {
          console.warn("Only admins can set profile");
          continue;
        }
        validTransactions.push({ txID: { sessionID, txIndex }, tx });
        continue;
      } else if (isKeyForKeyField(change.key) || isKeyForAccountField(change.key)) {
        if (memberState[transactor] !== "admin" && memberState[transactor] !== "adminInvite" && memberState[transactor] !== "writerInvite" && memberState[transactor] !== "readerInvite") {
          console.warn("Only admins can reveal keys");
          continue;
        }
        validTransactions.push({ txID: { sessionID, txIndex }, tx });
        continue;
      }
      const affectedMember = change.key;
      const assignedRole = change.value;
      if (change.value !== "admin" && change.value !== "writer" && change.value !== "reader" && change.value !== "revoked" && change.value !== "adminInvite" && change.value !== "writerInvite" && change.value !== "readerInvite") {
        console.warn("Group transaction must set a valid role");
        continue;
      }
      if (affectedMember === EVERYONE && !(change.value === "reader" || change.value === "writer" || change.value === "revoked")) {
        console.warn("Everyone can only be set to reader, writer or revoked");
        continue;
      }
      const isFirstSelfAppointment = !memberState[transactor] && transactor === initialAdmin && change.op === "set" && change.key === transactor && change.value === "admin";
      if (!isFirstSelfAppointment) {
        if (memberState[transactor] === "admin") {
          if (memberState[affectedMember] === "admin" && affectedMember !== transactor && assignedRole !== "admin") {
            console.warn("Admins can only demote themselves.");
            continue;
          }
        } else if (memberState[transactor] === "adminInvite") {
          if (change.value !== "admin") {
            console.warn("AdminInvites can only create admins.");
            continue;
          }
        } else if (memberState[transactor] === "writerInvite") {
          if (change.value !== "writer") {
            console.warn("WriterInvites can only create writers.");
            continue;
          }
        } else if (memberState[transactor] === "readerInvite") {
          if (change.value !== "reader") {
            console.warn("ReaderInvites can only create reader.");
            continue;
          }
        } else {
          console.warn("Group transaction must be made by current admin or invite");
          continue;
        }
      }
      memberState[affectedMember] = change.value;
      validTransactions.push({ txID: { sessionID, txIndex }, tx });
    }
    return validTransactions;
  } else if (coValue.header.ruleset.type === "ownedByGroup") {
    const groupContent = expectGroup(coValue.node.expectCoValueLoaded(coValue.header.ruleset.group, "Determining valid transaction in owned object but its group wasn't loaded").getCurrentContent());
    if (groupContent.type !== "comap") {
      throw new Error("Group must be a map");
    }
    return Object.entries(coValue.sessions).flatMap(([sessionID, sessionLog]) => {
      const transactor = accountOrAgentIDfromSessionID(sessionID);
      return sessionLog.transactions.filter((tx) => {
        const groupAtTime = groupContent.atTime(tx.madeAt);
        const effectiveTransactor = transactor === groupContent.id && groupAtTime instanceof Account ? groupAtTime.getCurrentAgentID() : transactor;
        const transactorRoleAtTxTime = groupAtTime.get(effectiveTransactor) || groupAtTime.get(EVERYONE);
        return transactorRoleAtTxTime === "admin" || transactorRoleAtTxTime === "writer";
      }).map((tx, txIndex) => ({
        txID: { sessionID, txIndex },
        tx
      }));
    });
  } else if (coValue.header.ruleset.type === "unsafeAllowAll") {
    return Object.entries(coValue.sessions).flatMap(([sessionID, sessionLog]) => {
      return sessionLog.transactions.map((tx, txIndex) => ({
        txID: { sessionID, txIndex },
        tx
      }));
    });
  } else {
    throw new Error("Unknown ruleset type " + coValue.header.ruleset.type);
  }
}
function isKeyForKeyField(field) {
  return field.startsWith("key_") && field.includes("_for_key");
}
function isKeyForAccountField(field) {
  return field.startsWith("key_") && (field.includes("_for_sealer") || field.includes("_for_co")) || field.includes("_for_everyone");
}
function coreToCoValue(core, options) {
  var _a2;
  if (core.header.type === "comap") {
    if (core.header.ruleset.type === "group") {
      if (((_a2 = core.header.meta) == null ? void 0 : _a2.type) === "account" && !(options == null ? void 0 : options.ignorePrivateTransactions)) {
        return new Account(core);
      } else {
        return new Group(core, options);
      }
    } else {
      return new CoMap(core);
    }
  } else if (core.header.type === "colist") {
    return new CoList(core);
  } else if (core.header.type === "costream") {
    if (core.header.meta && core.header.meta.type === "binary") {
      return new BinaryCoStream(core);
    } else {
      return new CoStream(core);
    }
  } else {
    throw new Error(`Unknown coValue type ${core.header.type}`);
  }
}
const MAX_RECOMMENDED_TX_SIZE = 100 * 1024;
function idforHeader(header) {
  const hash2 = shortHash(header);
  return `co_z${hash2.slice("shortHash_z".length)}`;
}
function newRandomSessionID(accountID) {
  return `${accountID}_session_z${base58.encode(randomBytes$1(8))}`;
}
const readKeyCache = /* @__PURE__ */ new WeakMap();
class CoValueCore {
  constructor(header, node, internalInitSessions = {}) {
    this.listeners = /* @__PURE__ */ new Set();
    this._decryptionCache = {};
    this.id = idforHeader(header);
    this.header = header;
    this._sessions = internalInitSessions;
    this.node = node;
    if (header.ruleset.type == "ownedByGroup") {
      this.node.expectCoValueLoaded(header.ruleset.group).subscribe((_groupUpdate) => {
        this._cachedContent = void 0;
        const newContent = this.getCurrentContent();
        for (const listener of this.listeners) {
          listener(newContent);
        }
      });
    }
  }
  get sessions() {
    return this._sessions;
  }
  testWithDifferentAccount(account, currentSessionID) {
    const newNode = this.node.testWithDifferentAccount(account, currentSessionID);
    return newNode.expectCoValueLoaded(this.id);
  }
  knownState() {
    return {
      id: this.id,
      header: true,
      sessions: Object.fromEntries(Object.entries(this.sessions).map(([k2, v2]) => [
        k2,
        v2.transactions.length
      ]))
    };
  }
  get meta() {
    var _a2;
    return ((_a2 = this.header) == null ? void 0 : _a2.meta) ?? null;
  }
  nextTransactionID() {
    var _a2, _b;
    const sessionID = ((_a2 = this.header.meta) == null ? void 0 : _a2.type) === "account" ? this.node.currentSessionID.replace(this.node.account.id, this.node.account.currentAgentID()) : this.node.currentSessionID;
    return {
      sessionID,
      txIndex: ((_b = this.sessions[sessionID]) == null ? void 0 : _b.transactions.length) || 0
    };
  }
  tryAddTransactions(sessionID, newTransactions, givenExpectedNewHash, newSignature) {
    const signerID = getAgentSignerID(this.node.resolveAccountAgent(accountOrAgentIDfromSessionID(sessionID), "Expected to know signer of transaction"));
    if (!signerID) {
      console.warn("Unknown agent", accountOrAgentIDfromSessionID(sessionID));
      return false;
    }
    const { expectedNewHash, newStreamingHash } = this.expectedNewHashAfter(sessionID, newTransactions);
    if (givenExpectedNewHash && givenExpectedNewHash !== expectedNewHash) {
      console.warn("Invalid hash", {
        expectedNewHash,
        givenExpectedNewHash
      });
      return false;
    }
    if (!verify(newSignature, expectedNewHash, signerID)) {
      console.warn("Invalid signature in", this.id, newSignature, expectedNewHash, signerID);
      return false;
    }
    this.doAddTransactions(sessionID, newTransactions, newSignature, expectedNewHash, newStreamingHash);
    return true;
  }
  async tryAddTransactionsAsync(sessionID, newTransactions, givenExpectedNewHash, newSignature) {
    var _a2, _b;
    const signerID = getAgentSignerID(this.node.resolveAccountAgent(accountOrAgentIDfromSessionID(sessionID), "Expected to know signer of transaction"));
    if (!signerID) {
      console.warn("Unknown agent", accountOrAgentIDfromSessionID(sessionID));
      return false;
    }
    const nTxBefore = ((_a2 = this.sessions[sessionID]) == null ? void 0 : _a2.transactions.length) ?? 0;
    const { expectedNewHash, newStreamingHash } = await this.expectedNewHashAfterAsync(sessionID, newTransactions);
    const nTxAfter = ((_b = this.sessions[sessionID]) == null ? void 0 : _b.transactions.length) ?? 0;
    if (nTxAfter !== nTxBefore) {
      const newTransactionLengthBefore = newTransactions.length;
      newTransactions = newTransactions.slice(nTxAfter - nTxBefore);
      console.warn("Transactions changed while async hashing", {
        nTxBefore,
        nTxAfter,
        newTransactionLengthBefore,
        remainingNewTransactions: newTransactions.length
      });
    }
    if (givenExpectedNewHash && givenExpectedNewHash !== expectedNewHash) {
      console.warn("Invalid hash", {
        expectedNewHash,
        givenExpectedNewHash
      });
      return false;
    }
    if (!verify(newSignature, expectedNewHash, signerID)) {
      console.warn("Invalid signature in", this.id, newSignature, expectedNewHash, signerID);
      return false;
    }
    this.doAddTransactions(sessionID, newTransactions, newSignature, expectedNewHash, newStreamingHash);
    return true;
  }
  doAddTransactions(sessionID, newTransactions, newSignature, expectedNewHash, newStreamingHash) {
    var _a2, _b;
    const transactions = ((_a2 = this.sessions[sessionID]) == null ? void 0 : _a2.transactions) ?? [];
    transactions.push(...newTransactions);
    const signatureAfter = ((_b = this.sessions[sessionID]) == null ? void 0 : _b.signatureAfter) ?? {};
    const lastInbetweenSignatureIdx = Object.keys(signatureAfter).reduce((max, idx) => parseInt(idx) > max ? parseInt(idx) : max, -1);
    const sizeOfTxsSinceLastInbetweenSignature = transactions.slice(lastInbetweenSignatureIdx + 1).reduce((sum, tx) => sum + (tx.privacy === "private" ? tx.encryptedChanges.length : tx.changes.length), 0);
    if (sizeOfTxsSinceLastInbetweenSignature > 100 * 1024) {
      signatureAfter[transactions.length - 1] = newSignature;
    }
    this._sessions[sessionID] = {
      transactions,
      lastHash: expectedNewHash,
      streamingHash: newStreamingHash,
      lastSignature: newSignature,
      signatureAfter
    };
    this._cachedContent = void 0;
    if (this.listeners.size > 0) {
      const content = this.getCurrentContent();
      for (const listener of this.listeners) {
        listener(content);
      }
    }
  }
  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.getCurrentContent());
    return () => {
      this.listeners.delete(listener);
    };
  }
  expectedNewHashAfter(sessionID, newTransactions) {
    var _a2;
    const streamingHash = ((_a2 = this.sessions[sessionID]) == null ? void 0 : _a2.streamingHash.clone()) ?? new StreamingHash();
    for (const transaction of newTransactions) {
      streamingHash.update(transaction);
    }
    const newStreamingHash = streamingHash.clone();
    return {
      expectedNewHash: streamingHash.digest(),
      newStreamingHash
    };
  }
  async expectedNewHashAfterAsync(sessionID, newTransactions) {
    var _a2;
    const streamingHash = ((_a2 = this.sessions[sessionID]) == null ? void 0 : _a2.streamingHash.clone()) ?? new StreamingHash();
    let before = performance.now();
    for (const transaction of newTransactions) {
      streamingHash.update(transaction);
      const after = performance.now();
      if (after - before > 1) {
        await new Promise((resolve) => setTimeout(resolve, 0));
        before = performance.now();
      }
    }
    const newStreamingHash = streamingHash.clone();
    return {
      expectedNewHash: streamingHash.digest(),
      newStreamingHash
    };
  }
  makeTransaction(changes, privacy) {
    var _a2;
    const madeAt = Date.now();
    let transaction;
    if (privacy === "private") {
      const { secret: keySecret, id: keyID } = this.getCurrentReadKey();
      if (!keySecret) {
        throw new Error("Can't make transaction without read key secret");
      }
      const encrypted = encryptForTransaction(changes, keySecret, {
        in: this.id,
        tx: this.nextTransactionID()
      });
      this._decryptionCache[encrypted] = changes;
      transaction = {
        privacy: "private",
        madeAt,
        keyUsed: keyID,
        encryptedChanges: encrypted
      };
    } else {
      transaction = {
        privacy: "trusting",
        madeAt,
        changes: stableStringify(changes)
      };
    }
    const sessionID = ((_a2 = this.header.meta) == null ? void 0 : _a2.type) === "account" ? this.node.currentSessionID.replace(this.node.account.id, this.node.account.currentAgentID()) : this.node.currentSessionID;
    const { expectedNewHash } = this.expectedNewHashAfter(sessionID, [
      transaction
    ]);
    const signature = sign(this.node.account.currentSignerSecret(), expectedNewHash);
    const success = this.tryAddTransactions(sessionID, [transaction], expectedNewHash, signature);
    if (success) {
      void this.node.syncManager.syncCoValue(this);
    }
    return success;
  }
  getCurrentContent(options) {
    if (!(options == null ? void 0 : options.ignorePrivateTransactions) && this._cachedContent) {
      return this._cachedContent;
    }
    const newContent = coreToCoValue(this, options);
    if (!(options == null ? void 0 : options.ignorePrivateTransactions)) {
      this._cachedContent = newContent;
    }
    return newContent;
  }
  getValidSortedTransactions(options) {
    const validTransactions = determineValidTransactions(this);
    const allTransactions = validTransactions.flatMap(({ txID, tx }) => {
      if (tx.privacy === "trusting") {
        return {
          txID,
          madeAt: tx.madeAt,
          changes: parseJSON(tx.changes)
        };
      } else {
        if (options == null ? void 0 : options.ignorePrivateTransactions) {
          return void 0;
        }
        const readKey = this.getReadKey(tx.keyUsed);
        if (!readKey) {
          return void 0;
        } else {
          let decrytedChanges = this._decryptionCache[tx.encryptedChanges];
          if (!decrytedChanges) {
            const decryptedString = decryptRawForTransaction(tx.encryptedChanges, readKey, {
              in: this.id,
              tx: txID
            });
            decrytedChanges = decryptedString && parseJSON(decryptedString);
            this._decryptionCache[tx.encryptedChanges] = decrytedChanges;
          }
          if (!decrytedChanges) {
            console.error("Failed to decrypt transaction despite having key");
            return void 0;
          }
          return {
            txID,
            madeAt: tx.madeAt,
            changes: decrytedChanges
          };
        }
      }
    }).filter((x2) => !!x2);
    allTransactions.sort((a2, b2) => a2.madeAt - b2.madeAt || (a2.txID.sessionID < b2.txID.sessionID ? -1 : 1) || a2.txID.txIndex - b2.txID.txIndex);
    return allTransactions;
  }
  getCurrentReadKey() {
    if (this.header.ruleset.type === "group") {
      const content = expectGroup(this.getCurrentContent());
      const currentKeyId = content.get("readKey");
      if (!currentKeyId) {
        throw new Error("No readKey set");
      }
      const secret = this.getReadKey(currentKeyId);
      return {
        secret,
        id: currentKeyId
      };
    } else if (this.header.ruleset.type === "ownedByGroup") {
      return this.node.expectCoValueLoaded(this.header.ruleset.group).getCurrentReadKey();
    } else {
      throw new Error("Only groups or values owned by groups have read secrets");
    }
  }
  getReadKey(keyID) {
    var _a2;
    let key = (_a2 = readKeyCache.get(this)) == null ? void 0 : _a2[keyID];
    if (!key) {
      key = this.getUncachedReadKey(keyID);
      if (key) {
        let cache = readKeyCache.get(this);
        if (!cache) {
          cache = {};
          readKeyCache.set(this, cache);
        }
        cache[keyID] = key;
      }
    }
    return key;
  }
  getUncachedReadKey(keyID) {
    var _a2;
    if (this.header.ruleset.type === "group") {
      const content = expectGroup(this.getCurrentContent({ ignorePrivateTransactions: true }));
      const keyForEveryone = content.get(`${keyID}_for_everyone`);
      if (keyForEveryone)
        return keyForEveryone;
      const lookupAccountOrAgentID = ((_a2 = this.header.meta) == null ? void 0 : _a2.type) === "account" ? this.node.account.currentAgentID() : this.node.account.id;
      const lastReadyKeyEdit = content.lastEditAt(`${keyID}_for_${lookupAccountOrAgentID}`);
      if (lastReadyKeyEdit == null ? void 0 : lastReadyKeyEdit.value) {
        const revealer = lastReadyKeyEdit.by;
        const revealerAgent = this.node.resolveAccountAgent(revealer, "Expected to know revealer");
        const secret = unseal(lastReadyKeyEdit.value, this.node.account.currentSealerSecret(), getAgentSealerID(revealerAgent), {
          in: this.id,
          tx: lastReadyKeyEdit.tx
        });
        if (secret) {
          return secret;
        }
      }
      for (const field of content.keys()) {
        if (isKeyForKeyField(field) && field.startsWith(keyID)) {
          const encryptingKeyID = field.split("_for_")[1];
          const encryptingKeySecret = this.getReadKey(encryptingKeyID);
          if (!encryptingKeySecret) {
            continue;
          }
          const encryptedPreviousKey = content.get(field);
          const secret = decryptKeySecret({
            encryptedID: keyID,
            encryptingID: encryptingKeyID,
            encrypted: encryptedPreviousKey
          }, encryptingKeySecret);
          if (secret) {
            return secret;
          } else {
            console.error(`Encrypting ${encryptingKeyID} key didn't decrypt ${keyID}`);
          }
        }
      }
      return void 0;
    } else if (this.header.ruleset.type === "ownedByGroup") {
      return this.node.expectCoValueLoaded(this.header.ruleset.group).getReadKey(keyID);
    } else {
      throw new Error("Only groups or values owned by groups have read secrets");
    }
  }
  getGroup() {
    if (this.header.ruleset.type !== "ownedByGroup") {
      throw new Error("Only values owned by groups have groups");
    }
    return expectGroup(this.node.expectCoValueLoaded(this.header.ruleset.group).getCurrentContent());
  }
  getTx(txID) {
    var _a2;
    return (_a2 = this.sessions[txID.sessionID]) == null ? void 0 : _a2.transactions[txID.txIndex];
  }
  newContentSince(knownState) {
    let currentPiece = {
      action: "content",
      id: this.id,
      header: (knownState == null ? void 0 : knownState.header) ? void 0 : this.header,
      new: {}
    };
    const pieces = [currentPiece];
    const sentState = {
      ...knownState == null ? void 0 : knownState.sessions
    };
    let newTxsWereAdded = true;
    let pieceSize = 0;
    while (newTxsWereAdded) {
      newTxsWereAdded = false;
      for (const [sessionID, log] of Object.entries(this.sessions)) {
        const nextKnownSignatureIdx = Object.keys(log.signatureAfter).map(Number).sort((a2, b2) => a2 - b2).find((idx) => idx >= (sentState[sessionID] ?? -1));
        const txsToAdd = log.transactions.slice(sentState[sessionID] ?? 0, nextKnownSignatureIdx === void 0 ? void 0 : nextKnownSignatureIdx + 1);
        if (txsToAdd.length === 0)
          continue;
        newTxsWereAdded = true;
        const oldPieceSize = pieceSize;
        pieceSize += txsToAdd.reduce((sum, tx) => sum + (tx.privacy === "private" ? tx.encryptedChanges.length : tx.changes.length), 0);
        if (pieceSize >= MAX_RECOMMENDED_TX_SIZE) {
          currentPiece = {
            action: "content",
            id: this.id,
            header: void 0,
            new: {}
          };
          pieces.push(currentPiece);
          pieceSize = pieceSize - oldPieceSize;
        }
        let sessionEntry = currentPiece.new[sessionID];
        if (!sessionEntry) {
          sessionEntry = {
            after: sentState[sessionID] ?? 0,
            newTransactions: [],
            lastSignature: "WILL_BE_REPLACED"
          };
          currentPiece.new[sessionID] = sessionEntry;
        }
        sessionEntry.newTransactions.push(...txsToAdd);
        sessionEntry.lastSignature = nextKnownSignatureIdx === void 0 ? log.lastSignature : log.signatureAfter[nextKnownSignatureIdx];
        sentState[sessionID] = (sentState[sessionID] || 0) + txsToAdd.length;
      }
    }
    const piecesWithContent = pieces.filter((piece) => Object.keys(piece.new).length > 0 || piece.header);
    if (piecesWithContent.length === 0) {
      return void 0;
    }
    return piecesWithContent;
  }
  getDependedOnCoValues() {
    return this.header.ruleset.type === "group" ? expectGroup(this.getCurrentContent()).keys().filter((k2) => k2.startsWith("co_")) : this.header.ruleset.type === "ownedByGroup" ? [
      this.header.ruleset.group,
      ...new Set(Object.keys(this._sessions).map((sessionID) => accountOrAgentIDfromSessionID(sessionID)).filter((session) => isAccountID(session) && session !== this.id))
    ] : [];
  }
}
function emptyKnownState(id) {
  return {
    id,
    header: false,
    sessions: {}
  };
}
function combinedKnownStates(stateA, stateB) {
  const sessionStates = {};
  const allSessions = /* @__PURE__ */ new Set([
    ...Object.keys(stateA.sessions),
    ...Object.keys(stateB.sessions)
  ]);
  for (const sessionID of allSessions) {
    const stateAValue = stateA.sessions[sessionID];
    const stateBValue = stateB.sessions[sessionID];
    sessionStates[sessionID] = Math.max(stateAValue || 0, stateBValue || 0);
  }
  return {
    id: stateA.id,
    header: stateA.header || stateB.header,
    sessions: sessionStates
  };
}
class SyncManager {
  constructor(local) {
    this.peers = {};
    this.local = local;
  }
  loadFromPeers(id) {
    for (const peer of Object.values(this.peers)) {
      peer.outgoing.write({
        action: "load",
        id,
        header: false,
        sessions: {}
      }).catch((e2) => {
        console.error("Error writing to peer", e2);
      });
    }
  }
  async handleSyncMessage(msg, peer) {
    switch (msg.action) {
      case "load":
        return await this.handleLoad(msg, peer);
      case "known":
        if (msg.isCorrection) {
          return await this.handleCorrection(msg, peer);
        } else {
          return await this.handleKnownState(msg, peer);
        }
      case "content":
        return await this.handleNewContent(msg, peer);
      case "done":
        return await this.handleUnsubscribe(msg);
      default:
        throw new Error(`Unknown message type ${msg.action}`);
    }
  }
  async subscribeToIncludingDependencies(id, peer) {
    const entry = this.local.coValues[id];
    if (!entry) {
      throw new Error("Expected coValue entry on subscribe");
    }
    if (entry.state === "loading") {
      await this.trySendToPeer(peer, {
        action: "load",
        id,
        header: false,
        sessions: {}
      });
      return;
    }
    const coValue = entry.coValue;
    for (const id2 of coValue.getDependedOnCoValues()) {
      await this.subscribeToIncludingDependencies(id2, peer);
    }
    if (!peer.toldKnownState.has(id)) {
      peer.toldKnownState.add(id);
      await this.trySendToPeer(peer, {
        action: "load",
        ...coValue.knownState()
      });
    }
  }
  async tellUntoldKnownStateIncludingDependencies(id, peer, asDependencyOf) {
    const coValue = this.local.expectCoValueLoaded(id);
    for (const dependentCoID of coValue.getDependedOnCoValues()) {
      await this.tellUntoldKnownStateIncludingDependencies(dependentCoID, peer, asDependencyOf || id);
    }
    if (!peer.toldKnownState.has(id)) {
      await this.trySendToPeer(peer, {
        action: "known",
        asDependencyOf,
        ...coValue.knownState()
      });
      peer.toldKnownState.add(id);
    }
  }
  async sendNewContentIncludingDependencies(id, peer) {
    const coValue = this.local.expectCoValueLoaded(id);
    for (const id2 of coValue.getDependedOnCoValues()) {
      await this.sendNewContentIncludingDependencies(id2, peer);
    }
    const newContentPieces = coValue.newContentSince(peer.optimisticKnownStates[id]);
    if (newContentPieces) {
      const optimisticKnownStateBefore = peer.optimisticKnownStates[id] || emptyKnownState(id);
      const sendPieces = async () => {
        let lastYield = performance.now();
        for (const [_i, piece] of newContentPieces.entries()) {
          await this.trySendToPeer(peer, piece);
          if (performance.now() - lastYield > 10) {
            await new Promise((resolve) => {
              setTimeout(resolve, 0);
            });
            lastYield = performance.now();
          }
        }
      };
      sendPieces().catch((e2) => {
        console.error("Error sending new content piece, retrying", e2);
        peer.optimisticKnownStates[id] = optimisticKnownStateBefore;
        return this.sendNewContentIncludingDependencies(id, peer);
      });
      peer.optimisticKnownStates[id] = combinedKnownStates(optimisticKnownStateBefore, coValue.knownState());
    }
  }
  addPeer(peer) {
    const peerState = {
      id: peer.id,
      optimisticKnownStates: {},
      incoming: peer.incoming,
      outgoing: peer.outgoing.getWriter(),
      toldKnownState: /* @__PURE__ */ new Set(),
      role: peer.role,
      delayOnError: peer.delayOnError
    };
    this.peers[peer.id] = peerState;
    if (peer.role === "server") {
      const initialSync = async () => {
        for (const id of Object.keys(this.local.coValues)) {
          await this.subscribeToIncludingDependencies(id, peerState);
          peerState.optimisticKnownStates[id] = {
            id,
            header: false,
            sessions: {}
          };
        }
      };
      void initialSync();
    }
    const readIncoming = async () => {
      try {
        for await (const msg of peerState.incoming) {
          try {
            await this.handleSyncMessage(msg, peerState);
            await new Promise((resolve) => {
              setTimeout(resolve, 0);
            });
          } catch (e2) {
            console.error(/* @__PURE__ */ new Date(), `Error reading from peer ${peer.id}, handling msg`, JSON.stringify(msg, (k2, v2) => k2 === "changes" || k2 === "encryptedChanges" ? v2.slice(0, 20) + "..." : v2), e2);
            if (peerState.delayOnError) {
              await new Promise((resolve) => {
                setTimeout(resolve, peerState.delayOnError);
              });
            }
          }
        }
      } catch (e2) {
        console.error(`Error reading from peer ${peer.id}`, e2);
      }
      console.log("Peer disconnected:", peer.id);
      delete this.peers[peer.id];
    };
    void readIncoming();
  }
  trySendToPeer(peer, msg) {
    return new Promise((resolve) => {
      const start = Date.now();
      peer.outgoing.write(msg).then(() => {
        const end = Date.now();
        if (end - start > 1e3) {
          console.error(new Error(`Writing to peer "${peer.id}" took ${Math.round((Date.now() - start) / 100) / 10}s - this should never happen as write should resolve quickly or error`));
        } else {
          resolve();
        }
      }).catch((e2) => {
        console.error(new Error(`Error writing to peer ${peer.id}, disconnecting`, {
          cause: e2
        }));
        delete this.peers[peer.id];
      });
    });
  }
  async handleLoad(msg, peer) {
    const entry = this.local.coValues[msg.id];
    if (!entry || entry.state === "loading") {
      if (!entry) {
        await new Promise((resolve) => {
          this.local.loadCoValue(msg.id).then(() => resolve()).catch((e2) => {
            console.error("Error loading coValue in handleLoad", e2);
            resolve();
          });
          setTimeout(resolve, 1e3);
        });
      }
      peer.optimisticKnownStates[msg.id] = knownStateIn(msg);
      peer.toldKnownState.add(msg.id);
      await this.trySendToPeer(peer, {
        action: "known",
        id: msg.id,
        header: false,
        sessions: {}
      });
      return;
    }
    peer.optimisticKnownStates[msg.id] = knownStateIn(msg);
    await this.tellUntoldKnownStateIncludingDependencies(msg.id, peer);
    await this.sendNewContentIncludingDependencies(msg.id, peer);
  }
  async handleKnownState(msg, peer) {
    let entry = this.local.coValues[msg.id];
    peer.optimisticKnownStates[msg.id] = combinedKnownStates(peer.optimisticKnownStates[msg.id] || emptyKnownState(msg.id), knownStateIn(msg));
    if (!entry) {
      if (msg.asDependencyOf) {
        if (this.local.coValues[msg.asDependencyOf]) {
          entry = newLoadingState();
          this.local.coValues[msg.id] = entry;
        } else {
          throw new Error("Expected coValue dependency entry to be created, missing subscribe?");
        }
      } else {
        throw new Error("Expected coValue entry to be created, missing subscribe?");
      }
    }
    if (entry.state === "loading") {
      return [];
    }
    await this.tellUntoldKnownStateIncludingDependencies(msg.id, peer);
    await this.sendNewContentIncludingDependencies(msg.id, peer);
  }
  async handleNewContent(msg, peer) {
    var _a2, _b, _c;
    let entry = this.local.coValues[msg.id];
    if (!entry) {
      throw new Error("Expected coValue entry to be created, missing subscribe?");
    }
    let resolveAfterDone;
    const peerOptimisticKnownState = peer.optimisticKnownStates[msg.id];
    if (!peerOptimisticKnownState) {
      throw new Error("Expected optimisticKnownState to be set for coValue we receive new content for");
    }
    if (entry.state === "loading") {
      if (!msg.header) {
        throw new Error("Expected header to be sent in first message");
      }
      peerOptimisticKnownState.header = true;
      const coValue2 = new CoValueCore(msg.header, this.local);
      resolveAfterDone = entry.resolve;
      entry = {
        state: "loaded",
        coValue: coValue2,
        onProgress: entry.onProgress
      };
      this.local.coValues[msg.id] = entry;
    }
    const coValue = entry.coValue;
    let invalidStateAssumed = false;
    for (const [sessionID, newContentForSession] of Object.entries(msg.new)) {
      const ourKnownTxIdx = (_a2 = coValue.sessions[sessionID]) == null ? void 0 : _a2.transactions.length;
      const theirFirstNewTxIdx = newContentForSession.after;
      if ((ourKnownTxIdx || 0) < theirFirstNewTxIdx) {
        invalidStateAssumed = true;
        continue;
      }
      const alreadyKnownOffset = ourKnownTxIdx ? ourKnownTxIdx - theirFirstNewTxIdx : 0;
      const newTransactions = newContentForSession.newTransactions.slice(alreadyKnownOffset);
      if (newTransactions.length === 0) {
        continue;
      }
      const before = performance.now();
      const success = await coValue.tryAddTransactionsAsync(sessionID, newTransactions, void 0, newContentForSession.lastSignature);
      const after = performance.now();
      if (after - before > 10) {
        const totalTxLength = newTransactions.map((t2) => t2.privacy === "private" ? t2.encryptedChanges.length : t2.changes.length).reduce((a2, b2) => a2 + b2, 0);
        console.log(`Adding incoming transactions took ${(after - before).toFixed(2)}ms for ${totalTxLength} bytes = bandwidth: ${(1e3 * totalTxLength / (after - before) / (1024 * 1024)).toFixed(2)} MB/s`);
      }
      const theirTotalnTxs = Object.values(((_b = peer.optimisticKnownStates[msg.id]) == null ? void 0 : _b.sessions) || {}).reduce((sum, nTxs) => sum + nTxs, 0);
      const ourTotalnTxs = Object.values(coValue.sessions).reduce((sum, session) => sum + session.transactions.length, 0);
      (_c = entry.onProgress) == null ? void 0 : _c.call(entry, ourTotalnTxs / theirTotalnTxs);
      if (!success) {
        console.error("Failed to add transactions", msg.id, JSON.stringify(newTransactions, (k2, v2) => k2 === "changes" || k2 === "encryptedChanges" ? v2.slice(0, 20) + "..." : v2));
        continue;
      }
      peerOptimisticKnownState.sessions[sessionID] = Math.max(peerOptimisticKnownState.sessions[sessionID] || 0, newContentForSession.after + newContentForSession.newTransactions.length);
    }
    if (resolveAfterDone) {
      resolveAfterDone(coValue);
    }
    await this.syncCoValue(coValue);
    if (invalidStateAssumed) {
      await this.trySendToPeer(peer, {
        action: "known",
        isCorrection: true,
        ...coValue.knownState()
      });
    }
  }
  async handleCorrection(msg, peer) {
    peer.optimisticKnownStates[msg.id] = msg;
    return this.sendNewContentIncludingDependencies(msg.id, peer);
  }
  handleUnsubscribe(_msg) {
    throw new Error("Method not implemented.");
  }
  async syncCoValue(coValue) {
    for (const peer of Object.values(this.peers)) {
      const optimisticKnownState = peer.optimisticKnownStates[coValue.id];
      if (optimisticKnownState) {
        await this.tellUntoldKnownStateIncludingDependencies(coValue.id, peer);
        await this.sendNewContentIncludingDependencies(coValue.id, peer);
      } else if (peer.role === "server") {
        await this.subscribeToIncludingDependencies(coValue.id, peer);
        await this.sendNewContentIncludingDependencies(coValue.id, peer);
      }
    }
  }
}
function knownStateIn(msg) {
  return {
    id: msg.id,
    header: msg.header,
    sessions: msg.sessions
  };
}
class LocalNode {
  /** @category 3. Low-level */
  constructor(account, currentSessionID) {
    this.coValues = {};
    this.syncManager = new SyncManager(this);
    this.account = account;
    this.currentSessionID = currentSessionID;
  }
  /** @category 2. Node Creation */
  static withNewlyCreatedAccount({ name, migration, initialAgentSecret = newRandomAgentSecret() }) {
    const throwawayAgent = newRandomAgentSecret();
    const setupNode = new LocalNode(new AnonymousControlledAccount(throwawayAgent), newRandomSessionID(getAgentID(throwawayAgent)));
    const account = setupNode.createAccount(name, initialAgentSecret);
    const nodeWithAccount = account.core.node.testWithDifferentAccount(account, newRandomSessionID(account.id));
    const accountOnNodeWithAccount = nodeWithAccount.account;
    const profile2 = nodeWithAccount.expectProfileLoaded(accountOnNodeWithAccount.id, "After creating account");
    if (migration) {
      migration(accountOnNodeWithAccount, profile2);
      nodeWithAccount.account = new ControlledAccount(accountOnNodeWithAccount.core, accountOnNodeWithAccount.agentSecret);
    }
    return {
      node: nodeWithAccount,
      accountID: accountOnNodeWithAccount.id,
      accountSecret: accountOnNodeWithAccount.agentSecret,
      sessionID: nodeWithAccount.currentSessionID
    };
  }
  /** @category 2. Node Creation */
  static async withLoadedAccount({ accountID, accountSecret, sessionID, peersToLoadFrom, migration }) {
    const loadingNode = new LocalNode(new AnonymousControlledAccount(accountSecret), newRandomSessionID(accountID));
    const accountPromise = loadingNode.load(accountID);
    for (const peer of peersToLoadFrom) {
      loadingNode.syncManager.addPeer(peer);
    }
    const account = await accountPromise;
    const controlledAccount = new ControlledAccount(account.core, accountSecret);
    const node = loadingNode.testWithDifferentAccount(controlledAccount, sessionID);
    node.syncManager = loadingNode.syncManager;
    node.syncManager.local = node;
    controlledAccount.core.node = node;
    const profileID = account.get("profile");
    if (!profileID) {
      throw new Error("Account has no profile");
    }
    const profile2 = await node.load(profileID);
    if (migration) {
      migration(controlledAccount, profile2);
      node.account = new ControlledAccount(controlledAccount.core, controlledAccount.agentSecret);
    }
    return node;
  }
  /** @internal */
  createCoValue(header) {
    const coValue = new CoValueCore(header, this);
    this.coValues[coValue.id] = { state: "loaded", coValue };
    void this.syncManager.syncCoValue(coValue);
    return coValue;
  }
  /** @internal */
  loadCoValue(id, onProgress) {
    let entry = this.coValues[id];
    if (!entry) {
      entry = newLoadingState(onProgress);
      this.coValues[id] = entry;
      this.syncManager.loadFromPeers(id);
    }
    if (entry.state === "loaded") {
      return Promise.resolve(entry.coValue);
    }
    return entry.done;
  }
  /**
   * Loads a CoValue's content, syncing from peers as necessary and resolving the returned
   * promise once a first version has been loaded. See `coValue.subscribe()` and `node.useTelepathicData()`
   * for listening to subsequent updates to the CoValue.
   *
   * @category 3. Low-level
   */
  async load(id, onProgress) {
    return (await this.loadCoValue(id, onProgress)).getCurrentContent();
  }
  /** @category 3. Low-level */
  subscribe(id, callback) {
    let stopped = false;
    let unsubscribe;
    console.log("Subscribing to " + id);
    this.load(id).then((coValue) => {
      if (stopped) {
        return;
      }
      unsubscribe = coValue.subscribe(callback);
    }).catch((e2) => {
      console.error("Error subscribing to ", id, e2);
    });
    return () => {
      console.log("Unsubscribing from " + id);
      stopped = true;
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }
  /** @deprecated Use Account.acceptInvite instead */
  async acceptInvite(groupOrOwnedValueID, inviteSecret) {
    const groupOrOwnedValue = await this.load(groupOrOwnedValueID);
    if (groupOrOwnedValue.core.header.ruleset.type === "ownedByGroup") {
      return this.acceptInvite(groupOrOwnedValue.core.header.ruleset.group, inviteSecret);
    } else if (groupOrOwnedValue.core.header.ruleset.type !== "group") {
      throw new Error("Can only accept invites to groups");
    }
    const group = expectGroup(groupOrOwnedValue);
    const inviteAgentSecret = agentSecretFromSecretSeed$1(secretSeedFromInviteSecret(inviteSecret));
    const inviteAgentID = getAgentID(inviteAgentSecret);
    const inviteRole = await new Promise((resolve, reject) => {
      group.subscribe((groupUpdate) => {
        const role = groupUpdate.get(inviteAgentID);
        if (role) {
          resolve(role);
        }
      });
      setTimeout(() => reject(new Error("Couldn't find invite before timeout")), 2e3);
    });
    if (!inviteRole) {
      throw new Error("No invite found");
    }
    const existingRole = group.get(this.account.id);
    if (existingRole === "admin" || existingRole === "writer" && inviteRole === "writerInvite" || existingRole === "writer" && inviteRole === "reader" || existingRole === "reader" && inviteRole === "readerInvite") {
      console.debug("Not accepting invite that would replace or downgrade role");
      return;
    }
    const groupAsInvite = expectGroup(group.core.testWithDifferentAccount(new AnonymousControlledAccount(inviteAgentSecret), newRandomSessionID(inviteAgentID)).getCurrentContent());
    groupAsInvite.addMemberInternal(this.account.id, inviteRole === "adminInvite" ? "admin" : inviteRole === "writerInvite" ? "writer" : "reader");
    group.core._sessions = groupAsInvite.core.sessions;
    group.core._cachedContent = void 0;
    for (const groupListener of group.core.listeners) {
      groupListener(group.core.getCurrentContent());
    }
  }
  /** @internal */
  expectCoValueLoaded(id, expectation) {
    const entry = this.coValues[id];
    if (!entry) {
      throw new Error(`${expectation ? expectation + ": " : ""}Unknown CoValue ${id}`);
    }
    if (entry.state === "loading") {
      throw new Error(`${expectation ? expectation + ": " : ""}CoValue ${id} not yet loaded`);
    }
    return entry.coValue;
  }
  /** @internal */
  expectProfileLoaded(id, expectation) {
    const account = this.expectCoValueLoaded(id, expectation);
    const profileID = expectGroup(account.getCurrentContent()).get("profile");
    if (!profileID) {
      throw new Error(`${expectation ? expectation + ": " : ""}Account ${id} has no profile`);
    }
    return this.expectCoValueLoaded(profileID, expectation).getCurrentContent();
  }
  /** @internal */
  createAccount(name, agentSecret = newRandomAgentSecret()) {
    const accountAgentID = getAgentID(agentSecret);
    let account = expectGroup(this.createCoValue(accountHeaderForInitialAgentSecret(agentSecret)).testWithDifferentAccount(new AnonymousControlledAccount(agentSecret), newRandomSessionID(accountAgentID)).getCurrentContent());
    account = account.mutate((editable) => {
      editable.set(accountAgentID, "admin", "trusting");
      const readKey = newRandomKeySecret();
      const sealed = seal({
        message: readKey.secret,
        from: getAgentSealerSecret(agentSecret),
        to: getAgentSealerID(accountAgentID),
        nOnceMaterial: {
          in: account.id,
          tx: account.core.nextTransactionID()
        }
      });
      console.log("Creating read key", getAgentSealerSecret(agentSecret), getAgentSealerID(accountAgentID), account.id, account.core.nextTransactionID(), "in session", account.core.node.currentSessionID, "=", sealed);
      editable.set(`${readKey.id}_for_${accountAgentID}`, sealed, "trusting");
      editable.set("readKey", readKey.id, "trusting");
    });
    const profile2 = account.createMap({ name }, {
      type: "profile"
    }, "trusting");
    account = account.set("profile", profile2.id, "trusting");
    const accountOnThisNode = this.expectCoValueLoaded(account.id);
    accountOnThisNode._sessions = {
      ...account.core.sessions
    };
    accountOnThisNode._cachedContent = void 0;
    const profileOnThisNode = this.createCoValue(profile2.core.header);
    profileOnThisNode._sessions = {
      ...profile2.core.sessions
    };
    profileOnThisNode._cachedContent = void 0;
    return new ControlledAccount(accountOnThisNode, agentSecret);
  }
  /** @internal */
  resolveAccountAgent(id, expectation) {
    if (isAgentID(id)) {
      return id;
    }
    const coValue = this.expectCoValueLoaded(id, expectation);
    if (coValue.header.type !== "comap" || coValue.header.ruleset.type !== "group" || !coValue.header.meta || !("type" in coValue.header.meta) || coValue.header.meta.type !== "account") {
      throw new Error(`${expectation ? expectation + ": " : ""}CoValue ${id} is not an account`);
    }
    return new Account(coValue).getCurrentAgentID();
  }
  /**
   * @deprecated use Account.createGroup() instead
   */
  createGroup() {
    const groupCoValue = this.createCoValue({
      type: "comap",
      ruleset: { type: "group", initialAdmin: this.account.id },
      meta: null,
      ...createdNowUnique()
    });
    let group = expectGroup(groupCoValue.getCurrentContent());
    group = group.mutate((editable) => {
      editable.set(this.account.id, "admin", "trusting");
      const readKey = newRandomKeySecret();
      editable.set(`${readKey.id}_for_${this.account.id}`, seal({
        message: readKey.secret,
        from: this.account.currentSealerSecret(),
        to: this.account.currentSealerID(),
        nOnceMaterial: {
          in: groupCoValue.id,
          tx: groupCoValue.nextTransactionID()
        }
      }), "trusting");
      editable.set("readKey", readKey.id, "trusting");
    });
    return group;
  }
  /** @internal */
  testWithDifferentAccount(account, currentSessionID) {
    const newNode = new LocalNode(account, currentSessionID);
    const coValuesToCopy = Object.entries(this.coValues);
    while (coValuesToCopy.length > 0) {
      const [coValueID, entry] = coValuesToCopy[coValuesToCopy.length - 1];
      if (entry.state === "loading") {
        coValuesToCopy.pop();
        continue;
      } else {
        const allDepsCopied = entry.coValue.getDependedOnCoValues().every((dep) => {
          var _a2;
          return ((_a2 = newNode.coValues[dep]) == null ? void 0 : _a2.state) === "loaded";
        });
        if (!allDepsCopied) {
          coValuesToCopy.unshift(coValuesToCopy.pop());
          continue;
        }
        const newCoValue = new CoValueCore(entry.coValue.header, newNode, { ...entry.coValue.sessions });
        newNode.coValues[coValueID] = {
          state: "loaded",
          coValue: newCoValue
        };
        coValuesToCopy.pop();
      }
    }
    if (account instanceof ControlledAccount) {
      const accountInNode = new ControlledAccount(newNode.expectCoValueLoaded(account.id), account.agentSecret);
      if (accountInNode.core.node !== newNode) {
        throw new Error("Account's node is not the new node");
      }
      newNode.account = accountInNode;
    }
    return newNode;
  }
}
function newLoadingState(onProgress) {
  let resolve;
  const promise = new Promise((r2) => {
    resolve = r2;
  });
  return {
    state: "loading",
    done: promise,
    resolve,
    onProgress
  };
}
const {
  ReadableStream,
  ReadableStreamDefaultReader,
  ReadableStreamBYOBReader,
  ReadableStreamBYOBRequest,
  ReadableByteStreamController,
  ReadableStreamDefaultController,
  TransformStream,
  TransformStreamDefaultController,
  WritableStream,
  WritableStreamDefaultWriter,
  WritableStreamDefaultController,
  ByteLengthQueuingStrategy,
  CountQueuingStrategy,
  TextEncoderStream,
  TextDecoderStream
} = window;
if (!ReadableStream.prototype[Symbol.asyncIterator]) {
  async function* streamAsyncIterator() {
    const reader = this.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done)
          return;
        yield value;
      }
    } finally {
      reader.releaseLock();
    }
  }
  ReadableStream.prototype[Symbol.asyncIterator] = streamAsyncIterator;
}
function connectedPeers(peer1id, peer2id, { trace = false, peer1role = "peer", peer2role = "peer" } = {}) {
  const [inRx1, inTx1] = newStreamPair();
  const [outRx1, outTx1] = newStreamPair();
  const [inRx2, inTx2] = newStreamPair();
  const [outRx2, outTx2] = newStreamPair();
  void outRx2.pipeThrough(new TransformStream({
    transform(chunk, controller) {
      trace && console.debug(`${peer2id} -> ${peer1id}`, JSON.stringify(chunk, (k2, v2) => k2 === "changes" || k2 === "encryptedChanges" ? v2.slice(0, 20) + "..." : v2, 2));
      controller.enqueue(chunk);
    }
  })).pipeTo(inTx1);
  void outRx1.pipeThrough(new TransformStream({
    transform(chunk, controller) {
      trace && console.debug(`${peer1id} -> ${peer2id}`, JSON.stringify(chunk, (k2, v2) => k2 === "changes" || k2 === "encryptedChanges" ? v2.slice(0, 20) + "..." : v2, 2));
      controller.enqueue(chunk);
    }
  })).pipeTo(inTx2);
  const peer2AsPeer = {
    id: peer2id,
    incoming: inRx1,
    outgoing: outTx1,
    role: peer2role
  };
  const peer1AsPeer = {
    id: peer1id,
    incoming: inRx2,
    outgoing: outTx2,
    role: peer1role
  };
  return [peer1AsPeer, peer2AsPeer];
}
function newStreamPair() {
  let readerClosed = false;
  let resolveEnqueue;
  const enqueuePromise = new Promise((resolve) => {
    resolveEnqueue = resolve;
  });
  let resolveClose;
  const closePromise = new Promise((resolve) => {
    resolveClose = resolve;
  });
  const readable = new ReadableStream({
    async start(controller) {
      resolveEnqueue(controller.enqueue.bind(controller));
      resolveClose(controller.close.bind(controller));
    },
    cancel(_reason) {
      console.log("Manually closing reader");
      readerClosed = true;
    }
  });
  let lastWritePromise = Promise.resolve();
  const writable = new WritableStream({
    async write(chunk) {
      const enqueue = await enqueuePromise;
      if (readerClosed) {
        throw new Error("Reader closed");
      } else {
        await lastWritePromise;
        lastWritePromise = new Promise((resolve) => {
          setTimeout(() => {
            enqueue(chunk);
            resolve();
          });
        });
      }
    },
    async abort(reason) {
      console.debug("Manually closing writer", reason);
      const close = await closePromise;
      close();
    }
  });
  return [readable, writable];
}
const cojsonInternals = {
  agentSecretFromBytes,
  agentSecretToBytes,
  newRandomSessionID,
  newRandomAgentSecret,
  connectedPeers,
  getAgentID,
  rawCoIDtoBytes,
  rawCoIDfromBytes,
  newRandomSecretSeed,
  agentSecretFromSecretSeed: agentSecretFromSecretSeed$1,
  secretSeedLength: secretSeedLength$1,
  shortHashLength,
  expectGroup,
  base64URLtoBytes,
  bytesToBase64url,
  parseJSON,
  accountOrAgentIDfromSessionID,
  isAccountID
};
class IDBStorage {
  constructor(db, fromLocalNode, toLocalNode) {
    this.db = db;
    this.fromLocalNode = fromLocalNode.getReader();
    this.toLocalNode = toLocalNode.getWriter();
    (async () => {
      let done = false;
      while (!done) {
        const result = await this.fromLocalNode.read();
        done = result.done;
        if (result.value) {
          await this.handleSyncMessage(result.value);
        }
      }
    })();
  }
  static async asPeer({ trace, localNodeName = "local" } = {
    localNodeName: "local"
  }) {
    const [localNodeAsPeer, storageAsPeer] = cojsonInternals.connectedPeers(localNodeName, "storage", { peer1role: "client", peer2role: "server", trace });
    await IDBStorage.open(localNodeAsPeer.incoming, localNodeAsPeer.outgoing);
    return storageAsPeer;
  }
  static async open(fromLocalNode, toLocalNode) {
    const dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open("jazz-storage", 4);
      request.onerror = () => {
        reject(request.error);
      };
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onupgradeneeded = async (ev) => {
        const db = request.result;
        if (ev.oldVersion === 0) {
          const coValues = db.createObjectStore("coValues", {
            autoIncrement: true,
            keyPath: "rowID"
          });
          coValues.createIndex("coValuesById", "id", {
            unique: true
          });
          const sessions = db.createObjectStore("sessions", {
            autoIncrement: true,
            keyPath: "rowID"
          });
          sessions.createIndex("sessionsByCoValue", "coValue");
          sessions.createIndex("uniqueSessions", ["coValue", "sessionID"], {
            unique: true
          });
          db.createObjectStore("transactions", {
            keyPath: ["ses", "idx"]
          });
        }
        if (ev.oldVersion <= 1) {
          db.createObjectStore("signatureAfter", {
            keyPath: ["ses", "idx"]
          });
        }
        if (ev.oldVersion !== 0 && ev.oldVersion <= 3) {
          console.log("Migration: fixing off-by-one error");
          const transaction = ev.target.transaction;
          const txsStore = transaction.objectStore("transactions");
          const txs = await promised(txsStore.getAll());
          for (const tx of txs) {
            await promised(txsStore.delete([tx.ses, tx.idx]));
            tx.idx -= 1;
            await promised(txsStore.add(tx));
          }
          console.log("Migration: fixing off-by-one error - done");
        }
      };
    });
    return new IDBStorage(await dbPromise, fromLocalNode, toLocalNode);
  }
  async handleSyncMessage(msg) {
    switch (msg.action) {
      case "load":
        await this.handleLoad(msg);
        break;
      case "content":
        await this.handleContent(msg);
        break;
      case "known":
        await this.handleKnown(msg);
        break;
      case "done":
        await this.handleDone(msg);
        break;
    }
  }
  async sendNewContentAfter(theirKnown, { coValues, sessions, transactions, signatureAfter }, asDependencyOf) {
    const coValueRow = await promised(coValues.index("coValuesById").get(theirKnown.id));
    const allOurSessions = coValueRow ? await promised(sessions.index("sessionsByCoValue").getAll(coValueRow.rowID)) : [];
    const ourKnown = {
      id: theirKnown.id,
      header: !!coValueRow,
      sessions: {}
    };
    const newContentPieces = [
      {
        action: "content",
        id: theirKnown.id,
        header: theirKnown.header ? void 0 : coValueRow == null ? void 0 : coValueRow.header,
        new: {}
      }
    ];
    for (const sessionRow of allOurSessions) {
      ourKnown.sessions[sessionRow.sessionID] = sessionRow.lastIdx;
      if (sessionRow.lastIdx > (theirKnown.sessions[sessionRow.sessionID] || 0)) {
        const firstNewTxIdx = theirKnown.sessions[sessionRow.sessionID] || 0;
        const signaturesAndIdxs = await promised(signatureAfter.getAll(IDBKeyRange.bound([sessionRow.rowID, firstNewTxIdx], [sessionRow.rowID, Infinity])));
        const newTxInSession = await promised(transactions.getAll(IDBKeyRange.bound([sessionRow.rowID, firstNewTxIdx], [sessionRow.rowID, Infinity])));
        let idx = firstNewTxIdx;
        for (const tx of newTxInSession) {
          let sessionEntry = newContentPieces[newContentPieces.length - 1].new[sessionRow.sessionID];
          if (!sessionEntry) {
            sessionEntry = {
              after: idx,
              lastSignature: "WILL_BE_REPLACED",
              newTransactions: []
            };
            newContentPieces[newContentPieces.length - 1].new[sessionRow.sessionID] = sessionEntry;
          }
          sessionEntry.newTransactions.push(tx.tx);
          if (signaturesAndIdxs[0] && idx === signaturesAndIdxs[0].idx) {
            sessionEntry.lastSignature = signaturesAndIdxs[0].signature;
            signaturesAndIdxs.shift();
            newContentPieces.push({
              action: "content",
              id: theirKnown.id,
              new: {}
            });
          } else if (idx === firstNewTxIdx + newTxInSession.length - 1) {
            sessionEntry.lastSignature = sessionRow.lastSignature;
          }
          idx += 1;
        }
      }
    }
    const dependedOnCoValues = (coValueRow == null ? void 0 : coValueRow.header.ruleset.type) === "group" ? newContentPieces.flatMap((piece) => Object.values(piece.new)).flatMap((sessionEntry) => sessionEntry.newTransactions.flatMap((tx) => {
      if (tx.privacy !== "trusting")
        return [];
      return cojsonInternals.parseJSON(tx.changes).map((change) => change && typeof change === "object" && "op" in change && change.op === "set" && "key" in change && change.key).filter((key) => typeof key === "string" && key.startsWith("co_"));
    })) : (coValueRow == null ? void 0 : coValueRow.header.ruleset.type) === "ownedByGroup" ? [
      coValueRow == null ? void 0 : coValueRow.header.ruleset.group,
      ...new Set(newContentPieces.flatMap((piece) => Object.keys(piece).map((sessionID) => cojsonInternals.accountOrAgentIDfromSessionID(sessionID)).filter((accountID) => cojsonInternals.isAccountID(accountID) && accountID !== theirKnown.id)))
    ] : [];
    for (const dependedOnCoValue of dependedOnCoValues) {
      await this.sendNewContentAfter({ id: dependedOnCoValue, header: false, sessions: {} }, { coValues, sessions, transactions, signatureAfter }, asDependencyOf || theirKnown.id);
    }
    await this.toLocalNode.write({
      action: "known",
      ...ourKnown,
      asDependencyOf
    });
    const nonEmptyNewContentPieces = newContentPieces.filter((piece) => piece.header || Object.keys(piece.new).length > 0);
    for (const piece of nonEmptyNewContentPieces) {
      await this.toLocalNode.write(piece);
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }
  handleLoad(msg) {
    return this.sendNewContentAfter(msg, this.inTransaction("readonly"));
  }
  async handleContent(msg) {
    var _a2, _b, _c, _d;
    const { coValues, sessions, transactions, signatureAfter } = this.inTransaction("readwrite");
    let storedCoValueRowID = (_a2 = await promised(coValues.index("coValuesById").get(msg.id))) == null ? void 0 : _a2.rowID;
    if (storedCoValueRowID === void 0) {
      const header = msg.header;
      if (!header) {
        console.error("Expected to be sent header first");
        await this.toLocalNode.write({
          action: "known",
          id: msg.id,
          header: false,
          sessions: {},
          isCorrection: true
        });
        return;
      }
      storedCoValueRowID = await promised(coValues.put({
        id: msg.id,
        header
      }));
    }
    const allOurSessions = await new Promise((resolve) => {
      const allOurSessionsRequest = sessions.index("sessionsByCoValue").getAll(storedCoValueRowID);
      allOurSessionsRequest.onsuccess = () => {
        resolve(Object.fromEntries(allOurSessionsRequest.result.map((row) => [row.sessionID, row])));
      };
    });
    const ourKnown = {
      id: msg.id,
      header: true,
      sessions: {}
    };
    let invalidAssumptions = false;
    for (const sessionID of Object.keys(msg.new)) {
      const sessionRow = allOurSessions[sessionID];
      if (sessionRow) {
        ourKnown.sessions[sessionRow.sessionID] = sessionRow.lastIdx;
      }
      if (((sessionRow == null ? void 0 : sessionRow.lastIdx) || 0) < (((_b = msg.new[sessionID]) == null ? void 0 : _b.after) || 0)) {
        invalidAssumptions = true;
      } else {
        const newTransactions = ((_c = msg.new[sessionID]) == null ? void 0 : _c.newTransactions) || [];
        const actuallyNewOffset = ((sessionRow == null ? void 0 : sessionRow.lastIdx) || 0) - (((_d = msg.new[sessionID]) == null ? void 0 : _d.after) || 0);
        const actuallyNewTransactions = newTransactions.slice(actuallyNewOffset);
        let newBytesSinceLastSignature = ((sessionRow == null ? void 0 : sessionRow.bytesSinceLastSignature) || 0) + actuallyNewTransactions.reduce((sum, tx) => sum + (tx.privacy === "private" ? tx.encryptedChanges.length : tx.changes.length), 0);
        const newLastIdx = ((sessionRow == null ? void 0 : sessionRow.lastIdx) || 0) + actuallyNewTransactions.length;
        let shouldWriteSignature = false;
        if (newBytesSinceLastSignature > MAX_RECOMMENDED_TX_SIZE) {
          shouldWriteSignature = true;
          newBytesSinceLastSignature = 0;
        }
        let nextIdx = (sessionRow == null ? void 0 : sessionRow.lastIdx) || 0;
        const sessionUpdate = {
          coValue: storedCoValueRowID,
          sessionID,
          lastIdx: newLastIdx,
          lastSignature: msg.new[sessionID].lastSignature,
          bytesSinceLastSignature: newBytesSinceLastSignature
        };
        const sessionRowID = await promised(sessions.put((sessionRow == null ? void 0 : sessionRow.rowID) ? {
          rowID: sessionRow.rowID,
          ...sessionUpdate
        } : sessionUpdate));
        if (shouldWriteSignature) {
          await promised(signatureAfter.put({
            ses: sessionRowID,
            // TODO: newLastIdx is a misnomer, it's actually more like nextIdx or length
            idx: newLastIdx - 1,
            signature: msg.new[sessionID].lastSignature
          }));
        }
        for (const newTransaction of actuallyNewTransactions) {
          await promised(transactions.add({
            ses: sessionRowID,
            idx: nextIdx,
            tx: newTransaction
          }));
          nextIdx++;
        }
      }
    }
    if (invalidAssumptions) {
      await this.toLocalNode.write({
        action: "known",
        ...ourKnown,
        isCorrection: invalidAssumptions
      });
    }
  }
  handleKnown(msg) {
    return this.sendNewContentAfter(msg, this.inTransaction("readonly"));
  }
  handleDone(_msg) {
  }
  inTransaction(mode) {
    const tx = this.db.transaction(["coValues", "sessions", "transactions", "signatureAfter"], mode);
    tx.onerror = (event) => {
      var _a2;
      const target = event.target;
      throw new Error(`Error in transaction (${(_a2 = target == null ? void 0 : target.source) == null ? void 0 : _a2.name}): ${target == null ? void 0 : target.error}`, { cause: target == null ? void 0 : target.error });
    };
    const coValues = tx.objectStore("coValues");
    const sessions = tx.objectStore("sessions");
    const transactions = tx.objectStore("transactions");
    const signatureAfter = tx.objectStore("signatureAfter");
    return { coValues, sessions, transactions, signatureAfter };
  }
}
function promised(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = () => {
      reject(request.error);
    };
  });
}
class ResolvedCoStream {
  /** @internal */
  constructor(coStream, autoSubContext) {
    this.coValueType = "costream";
    this.id = coStream.id;
    this.meta = {
      coValue: coStream,
      headerMeta: coStream.headerMeta,
      group: coStream.group
    };
    this.perSession = coStream.sessions().map((sessionID) => {
      const items = [...coStream.itemsIn(sessionID)].map((item) => autoSubContext.defineResolvedRefPropertiesIn({
        tx: item.tx,
        at: new Date(item.at)
      }, {
        by: {
          value: cojsonInternals.isAccountID(item.by) ? item.by : void 0,
          enumerable: true
        },
        value: {
          value: item.value,
          enumerable: true
        }
      }, [coStream.id]));
      const lastItem = items[items.length - 1];
      return [
        sessionID,
        {
          get last() {
            return lastItem == null ? void 0 : lastItem.value;
          },
          get by() {
            return lastItem == null ? void 0 : lastItem.by;
          },
          tx: lastItem == null ? void 0 : lastItem.tx,
          at: lastItem == null ? void 0 : lastItem.at,
          all: items
        }
      ];
    });
    this.perAccount = [...coStream.accounts()].map((accountID) => {
      const items = [...coStream.itemsBy(accountID)].map((item) => autoSubContext.defineResolvedRefPropertiesIn({
        tx: item.tx,
        at: new Date(item.at)
      }, {
        by: {
          value: cojsonInternals.isAccountID(item.by) ? item.by : void 0,
          enumerable: true
        },
        value: {
          value: item.value,
          enumerable: true
        }
      }, [coStream.id]));
      const lastItem = items[items.length - 1];
      const entry = {
        get last() {
          return lastItem == null ? void 0 : lastItem.value;
        },
        get by() {
          return lastItem == null ? void 0 : lastItem.by;
        },
        tx: lastItem == null ? void 0 : lastItem.tx,
        at: lastItem == null ? void 0 : lastItem.at,
        all: items
      };
      if (accountID === autoSubContext.node.account.id) {
        this.me = entry;
      }
      return [accountID, entry];
    });
  }
  push(item, privacy) {
    return this.meta.coValue.push(item, privacy);
  }
  mutate(mutator) {
    return this.meta.coValue.mutate(mutator);
  }
}
class ResolvedCoList extends Array {
  /** @internal */
  constructor(coList, autoSubContext) {
    if (!(coList instanceof CoList)) {
      return new Array(coList);
    }
    super(...coList.asArray().map((item) => autoSubContext.subscribeIfCoID(item, [
      coList.id
    ])));
    Object.defineProperties(this, {
      id: { value: coList.id, enumerable: false },
      coValueType: { value: "colist", enumerable: false },
      meta: {
        value: {
          coValue: coList,
          edits: [...this.keys()].map((i2) => {
            const edit = coList.editAt(i2);
            return autoSubContext.defineResolvedRefPropertiesIn({
              tx: edit.tx,
              at: new Date(edit.at)
            }, {
              by: { value: edit.by, enumerable: true },
              value: { value: edit.value, enumerable: true }
            }, [coList.id]);
          }),
          deletions: coList.deletionEdits().map((deletion) => autoSubContext.defineResolvedRefPropertiesIn({
            tx: deletion.tx,
            at: new Date(deletion.at)
          }, {
            by: {
              value: deletion.by,
              enumerable: true
            }
          }, [coList.id])),
          headerMeta: coList.headerMeta,
          group: coList.group
        },
        enumerable: false
      }
    });
  }
  append(item, after, privacy) {
    return this.meta.coValue.append(item, after, privacy);
  }
  prepend(item, before, privacy) {
    return this.meta.coValue.prepend(item, before, privacy);
  }
  delete(at, privacy) {
    return this.meta.coValue.delete(at, privacy);
  }
  mutate(mutator) {
    return this.meta.coValue.mutate(mutator);
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isArray(arg) {
    return Array.isArray(arg);
  }
  /** @internal */
  static from(_iterable, _mapfn, _thisArg) {
    throw new Error("Array method 'from' not supported on ResolvedCoList");
  }
  /** @internal */
  static of(..._items) {
    throw new Error("Array method 'of' not supported on ResolvedCoList");
  }
  /** @internal */
  pop() {
    throw new Error("Array method 'pop' not supported on ResolvedCoList");
  }
  /** @internal */
  push(..._items) {
    throw new Error("Array method 'push' not supported on ResolvedCoList");
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  concat(..._items) {
    throw new Error("Array method 'concat' not supported on ResolvedCoList");
  }
  /** @internal */
  reverse() {
    throw new Error("Array method 'reverse' not supported on ResolvedCoList");
  }
  /** @internal */
  shift() {
    throw new Error("Array method 'shift' not supported on ResolvedCoList");
  }
  /** @internal */
  sort(_compareFn) {
    throw new Error("Array method 'sort' not supported on ResolvedCoList");
  }
  /** @internal */
  splice(_start, _deleteCount) {
    throw new Error("Array method 'splice' not supported on ResolvedCoList");
  }
  /** @internal */
  unshift(..._items) {
    throw new Error("Array method 'unshift' not supported on ResolvedCoList");
  }
  /** @internal */
  fill(_value, _start, _end) {
    throw new Error("Array method 'fill' not supported on ResolvedCoList");
  }
  /** @internal */
  copyWithin(_target, _start, _end) {
    throw new Error("Array method 'copyWithin' not supported on ResolvedCoList");
  }
}
class ResolvedCoMapBase {
  /** @internal */
  static newWithKVPairs(coMap, autoSubContext) {
    const extendedCoMap = new ResolvedCoMapBase(coMap, autoSubContext);
    for (const key of coMap.keys()) {
      const value = coMap.get(key);
      if (value === void 0)
        continue;
      autoSubContext.defineResolvedRefPropertiesIn(extendedCoMap, {
        [key]: { value, enumerable: true }
      }, [coMap.id]);
    }
    return extendedCoMap;
  }
  /** @internal */
  constructor(coMap, autoSubContext) {
    Object.defineProperties(this, {
      id: { value: coMap.id, enumerable: false },
      coValueType: { value: "comap", enumerable: false },
      meta: {
        value: {
          coValue: coMap,
          edits: Object.fromEntries(coMap.keys().flatMap((key) => {
            const edits = [...coMap.editsAt(key)].map((edit) => autoSubContext.defineResolvedRefPropertiesIn({
              tx: edit.tx,
              at: new Date(edit.at)
            }, {
              by: {
                value: edit.by,
                enumerable: true
              },
              value: {
                value: edit.value,
                enumerable: true
              }
            }, [coMap.id]));
            const lastEdit = edits[edits.length - 1];
            if (!lastEdit)
              return [];
            const editsAtKey = {
              get by() {
                return lastEdit.by;
              },
              tx: lastEdit.tx,
              at: lastEdit.at,
              get value() {
                return lastEdit.value;
              },
              all: edits
            };
            return [[key, editsAtKey]];
          })),
          headerMeta: coMap.headerMeta,
          group: coMap.group
        },
        enumerable: false
      },
      as: {
        value: (extension) => {
          return autoSubContext.getOrCreateExtension(coMap.id, extension);
        },
        enumerable: false
      }
    });
  }
  get(key) {
    return this[key];
  }
  set(...args) {
    return this.meta.coValue.set(...args);
  }
  delete(key, privacy) {
    return this.meta.coValue.delete(key, privacy);
  }
  mutate(mutator) {
    return this.meta.coValue.mutate(mutator);
  }
}
class ResolvedGroup {
  constructor(group, autoSubContext) {
    this.coValueType = "group";
    const profileID = group.get("profile");
    const rootID = group.get("root");
    autoSubContext.defineResolvedRefPropertiesIn(Object.defineProperties(this, {
      id: { value: group.id, enumerable: false },
      coValueType: { value: "group", enumerable: false },
      meta: {
        value: {
          coValue: group,
          group,
          headerMeta: group.headerMeta
        },
        enumerable: false
      }
    }), {
      profile: {
        value: profileID,
        enumerable: false
      },
      root: {
        value: rootID,
        enumerable: false
      }
    }, [group.id]);
  }
  addMember(accountID, role) {
    return this.meta.group.addMember(accountID, role);
  }
  removeMember(accountID) {
    return this.meta.group.removeMember(accountID);
  }
  createInvite(role) {
    return this.meta.group.createInvite(role);
  }
  createMap(init, meta, initPrivacy = "private") {
    return this.meta.group.createMap(init, meta, initPrivacy);
  }
  createList(init, meta, initPrivacy = "private") {
    return this.meta.group.createList(init, meta, initPrivacy);
  }
  createStream(meta) {
    return this.meta.group.createStream(meta);
  }
  createBinaryStream(meta = { type: "binary" }) {
    return this.meta.group.createBinaryStream(meta);
  }
}
class ResolvedAccount extends ResolvedGroup {
  constructor(account, autoSubContext) {
    super(account, autoSubContext);
    Object.defineProperties(this, {
      isMe: {
        value: account.core.node.account.id === account.id,
        enumerable: false
      }
    });
  }
  createGroup() {
    if (!this.isMe)
      throw new Error("Only the current user can create a group");
    return this.meta.group.core.node.account.createGroup();
  }
  acceptInvite(groupOrOwnedValueID, inviteSecret) {
    if (!this.isMe)
      throw new Error("Only the current user can accept an invite");
    return this.meta.group.core.node.account.acceptInvite(groupOrOwnedValueID, inviteSecret);
  }
}
class AutoSubContext {
  constructor(node, onUpdate) {
    this.values = {};
    this.extensions = {};
    this.node = node;
    this.onUpdate = onUpdate;
  }
  autoSub(valueID, alsoRender) {
    let value = this.values[valueID];
    if (!value) {
      const render = () => {
        var _a2, _b;
        let newLoaded;
        const lastUpdate = value.lastUpdate;
        if (lastUpdate instanceof CoMap) {
          if (lastUpdate instanceof Account) {
            newLoaded = new ResolvedAccount(lastUpdate, this);
          } else if (lastUpdate instanceof Group) {
            newLoaded = new ResolvedGroup(lastUpdate, this);
          } else {
            newLoaded = ResolvedCoMapBase.newWithKVPairs(lastUpdate, this);
          }
        } else if (lastUpdate instanceof CoList) {
          newLoaded = new ResolvedCoList(lastUpdate, this);
        } else if (lastUpdate instanceof CoStream) {
          if (((_a2 = lastUpdate.headerMeta) == null ? void 0 : _a2.type) === "binary")
            ;
          else {
            newLoaded = new ResolvedCoStream(lastUpdate, this);
          }
        }
        value.lastLoaded = newLoaded;
        for (const alsoRenderID of alsoRender) {
          (_b = this.values[alsoRenderID]) == null ? void 0 : _b.render();
        }
      };
      value = {
        lastLoaded: void 0,
        lastUpdate: void 0,
        render,
        unsubscribe: this.node.subscribe(valueID, (valueUpdate) => {
          value.lastUpdate = valueUpdate;
          value.render();
          this.onUpdate();
        })
      };
      this.values[valueID] = value;
    }
    return value.lastLoaded;
  }
  subscribeIfCoID(value, alsoRender) {
    if (typeof value === "string" && value.startsWith("co_")) {
      return this.autoSub(value, alsoRender);
    } else {
      return value;
    }
  }
  valueOrResolvedRefPropertyDescriptor(value, alsoRender) {
    if (typeof value === "string" && value.startsWith("co_")) {
      return {
        get: () => this.autoSub(value, alsoRender)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      };
    } else {
      return { value };
    }
  }
  defineResolvedRefPropertiesIn(obj, subqueryProps, alsoRender) {
    for (const [key, descriptor] of Object.entries(subqueryProps)) {
      Object.defineProperty(obj, key, {
        ...this.valueOrResolvedRefPropertyDescriptor(descriptor.value, alsoRender),
        enumerable: descriptor.enumerable
      });
    }
    return obj;
  }
  getOrCreateExtension(valueID, extension) {
    const id = `${valueID}_${extension.id}`;
    let ext = this.extensions[id];
    if (!ext) {
      ext = {
        lastOutput: void 0,
        unsubscribe: extension.subscribe(this.node.expectCoValueLoaded(valueID).getCurrentContent(), this, (output2) => {
          var _a2;
          ext.lastOutput = output2;
          (_a2 = this.values[valueID]) == null ? void 0 : _a2.render();
          this.onUpdate();
        })
      };
      this.extensions[id] = ext;
    }
    return ext.lastOutput;
  }
  cleanup() {
    var _a2;
    for (const child of Object.values(this.values)) {
      (_a2 = child.unsubscribe) == null ? void 0 : _a2.call(child);
    }
    for (const extension of Object.values(this.extensions)) {
      extension.unsubscribe();
    }
  }
}
function autoSub(id, node, callback) {
  const effectiveId = id === "me" ? cojsonInternals.isAccountID(node.account.id) ? node.account.id : void 0 : id;
  if (!effectiveId)
    return () => {
    };
  const context = new AutoSubContext(node, () => {
    var _a2;
    const rootResolved = (_a2 = context.values[effectiveId]) == null ? void 0 : _a2.lastLoaded;
    callback(rootResolved);
  });
  context.autoSub(effectiveId, []);
  function cleanup() {
    context.cleanup();
  }
  return cleanup;
}
async function createBrowserNode({ auth, syncAddress = "wss://sync.jazz.tools", reconnectionTimeout: initialReconnectionTimeout = 500, migration }) {
  await cryptoReady;
  let sessionDone;
  const firstWsPeer = createWebSocketPeer(syncAddress);
  let shouldTryToReconnect = true;
  let currentReconnectionTimeout = initialReconnectionTimeout;
  function onOnline() {
    console.log("Online, resetting reconnection timeout");
    currentReconnectionTimeout = initialReconnectionTimeout;
  }
  window.addEventListener("online", onOnline);
  const node = await auth.createNode((accountID) => {
    const sessionHandle = getSessionHandleFor(accountID);
    sessionDone = sessionHandle.done;
    return sessionHandle.session;
  }, [await IDBStorage.asPeer(), firstWsPeer], migration);
  async function websocketReconnectLoop() {
    while (shouldTryToReconnect) {
      if (Object.keys(node.syncManager.peers).some((peerId) => peerId.includes(syncAddress))) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      } else {
        console.log("Websocket disconnected, trying to reconnect in " + currentReconnectionTimeout + "ms");
        currentReconnectionTimeout = Math.min(currentReconnectionTimeout * 2, 3e4);
        await new Promise((resolve) => {
          setTimeout(resolve, currentReconnectionTimeout);
          window.addEventListener("online", () => {
            console.log("Online, trying to reconnect immediately");
            resolve();
          }, { once: true });
        });
        node.syncManager.addPeer(createWebSocketPeer(syncAddress));
      }
    }
  }
  void websocketReconnectLoop();
  return {
    node,
    done: () => {
      shouldTryToReconnect = false;
      window.removeEventListener("online", onOnline);
      console.log("Cleaning up node");
      for (const peer of Object.values(node.syncManager.peers)) {
        peer.outgoing.close().catch((e2) => console.error("Error while closing peer", e2));
      }
      sessionDone == null ? void 0 : sessionDone();
    }
  };
}
function getSessionHandleFor(accountID) {
  let done;
  const donePromise = new Promise((resolve) => {
    done = resolve;
  });
  let resolveSession;
  const sessionPromise = new Promise((resolve) => {
    resolveSession = resolve;
  });
  void async function() {
    for (let idx = 0; idx < 100; idx++) {
      for (let retry = 0; retry < 2; retry++) {
        console.debug("Trying to get lock", accountID + "_" + idx);
        const sessionFinishedOrNoLock = await navigator.locks.request(accountID + "_" + idx, { ifAvailable: true }, async (lock) => {
          if (!lock)
            return "noLock";
          const sessionID = localStorage[accountID + "_" + idx] || cojsonInternals.newRandomSessionID(accountID);
          localStorage[accountID + "_" + idx] = sessionID;
          console.debug("Got lock", accountID + "_" + idx, sessionID);
          resolveSession(sessionID);
          await donePromise;
          console.log("Done with lock", accountID + "_" + idx, sessionID);
          return "sessionFinished";
        });
        if (sessionFinishedOrNoLock === "sessionFinished") {
          return;
        }
      }
    }
    throw new Error("Couldn't get lock on session after 100x2 tries");
  }();
  return {
    session: sessionPromise,
    done
  };
}
function websocketReadableStream(ws) {
  ws.binaryType = "arraybuffer";
  return new ReadableStream({
    start(controller) {
      let pingTimeout;
      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.type === "ping") {
          console.debug("Got ping from", msg.dc, "latency", Date.now() - msg.time, "ms");
          if (pingTimeout) {
            clearTimeout(pingTimeout);
          }
          pingTimeout = setTimeout(() => {
            console.debug("Ping timeout");
            try {
              controller.close();
              ws.close();
            } catch (e2) {
              console.error("Error while trying to close ws on ping timeout", e2);
            }
          }, 2500);
          return;
        }
        controller.enqueue(msg);
      };
      const closeListener = () => {
        controller.close();
        clearTimeout(pingTimeout);
      };
      ws.addEventListener("close", closeListener);
      ws.addEventListener("error", () => {
        controller.error(new Error("The WebSocket errored!"));
        ws.removeEventListener("close", closeListener);
      });
    },
    cancel() {
      ws.close();
    }
  });
}
function createWebSocketPeer(syncAddress) {
  const ws = new WebSocket(syncAddress);
  const incoming = websocketReadableStream(ws);
  const outgoing = websocketWritableStream(ws);
  return {
    id: syncAddress + "@" + (/* @__PURE__ */ new Date()).toISOString(),
    incoming,
    outgoing,
    role: "server"
  };
}
function websocketWritableStream(ws) {
  const initialQueue = [];
  let isOpen = false;
  return new WritableStream({
    start(controller) {
      ws.addEventListener("error", (event) => {
        controller.error(new Error("The WebSocket errored!" + JSON.stringify(event)));
      });
      ws.addEventListener("close", () => {
        controller.error(new Error("The server closed the connection unexpectedly!"));
      });
      ws.addEventListener("open", () => {
        for (const item of initialQueue) {
          ws.send(JSON.stringify(item));
        }
        isOpen = true;
      });
    },
    async write(chunk) {
      if (isOpen) {
        ws.send(JSON.stringify(chunk));
      } else {
        initialQueue.push(chunk);
      }
    },
    close() {
      return closeWS(1e3);
    },
    abort(reason) {
      return closeWS(4e3, reason && reason.message);
    }
  });
  function closeWS(code, reasonString) {
    return new Promise((resolve, reject) => {
      ws.addEventListener("close", (e2) => {
        if (e2.wasClean) {
          resolve();
        } else {
          reject(new Error("The connection was not closed cleanly"));
        }
      }, { once: true });
      ws.close(code, reasonString);
    });
  }
}
new TextEncoder();
new TextDecoder();
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
const lookup = new Uint8Array(128);
for (const [i2, a2] of Array.from(alphabet).entries()) {
  lookup[a2.charCodeAt(0)] = i2;
}
lookup["=".charCodeAt(0)] = 0;
const encodeLookup = new Uint8Array(64);
for (const [i2, a2] of Array.from(alphabet).entries()) {
  encodeLookup[i2] = a2.charCodeAt(0);
}
let blake3HashOnceWithContext;
new Promise((resolve) => {
  createBLAKE3().then((bl3) => {
    blake3HashOnceWithContext = (data, { context }) => {
      return bl3.init().update(context).update(data).digest("binary");
    };
    resolve();
  }).catch(
    (e2) => console.error("Failed to load cryptography dependencies", e2)
  );
});
const textEncoder = new TextEncoder();
new TextDecoder();
const secretSeedLength = 32;
function agentSecretFromSecretSeed(secretSeed) {
  if (secretSeed.length !== secretSeedLength) {
    throw new Error(
      `Secret seed needs to be ${secretSeedLength} bytes long`
    );
  }
  return `sealerSecret_z${base58.encode(
    blake3HashOnceWithContext(secretSeed, {
      context: textEncoder.encode("seal")
    })
  )}/signerSecret_z${base58.encode(
    blake3HashOnceWithContext(secretSeed, {
      context: textEncoder.encode("sign")
    })
  )}`;
}
const sessionStorageKey = "jazz-logged-in-secret";
class BrowserLocalAuth {
  constructor(driver, appName, appHostname = window.location.hostname) {
    this.driver = driver;
    this.appName = appName;
    this.appHostname = appHostname;
  }
  async createNode(getSessionFor, initialPeers, migration) {
    if (sessionStorage[sessionStorageKey]) {
      const sessionStorageData = JSON.parse(sessionStorage[sessionStorageKey]);
      const sessionID = await getSessionFor(sessionStorageData.accountID);
      const node = await LocalNode.withLoadedAccount({
        accountID: sessionStorageData.accountID,
        accountSecret: sessionStorageData.accountSecret,
        sessionID,
        peersToLoadFrom: initialPeers,
        migration
      });
      this.driver.onSignedIn({ logOut });
      return Promise.resolve(node);
    } else {
      const node = await new Promise((doneSigningUpOrLoggingIn) => {
        this.driver.onReady({
          signUp: async (username) => {
            const node2 = await signUp(username, getSessionFor, this.appName, this.appHostname, migration);
            for (const peer of initialPeers) {
              node2.syncManager.addPeer(peer);
            }
            doneSigningUpOrLoggingIn(node2);
            this.driver.onSignedIn({ logOut });
          },
          logIn: async () => {
            const node2 = await logIn(getSessionFor, this.appHostname, initialPeers, migration);
            doneSigningUpOrLoggingIn(node2);
            this.driver.onSignedIn({ logOut });
          }
        });
      });
      return node;
    }
  }
}
async function signUp(username, getSessionFor, appName, appHostname, migration) {
  const secretSeed = cojsonInternals.newRandomSecretSeed();
  const { node, accountID, accountSecret } = LocalNode.withNewlyCreatedAccount({
    name: username,
    initialAgentSecret: agentSecretFromSecretSeed(secretSeed),
    migration
  });
  const webAuthNCredentialPayload = new Uint8Array(cojsonInternals.secretSeedLength + cojsonInternals.shortHashLength);
  webAuthNCredentialPayload.set(secretSeed);
  webAuthNCredentialPayload.set(cojsonInternals.rawCoIDtoBytes(accountID), cojsonInternals.secretSeedLength);
  const webAuthNCredential = await navigator.credentials.create({
    publicKey: {
      challenge: Uint8Array.from([0, 1, 2]),
      rp: {
        name: appName,
        id: appHostname
      },
      user: {
        id: webAuthNCredentialPayload,
        name: username + ` (${(/* @__PURE__ */ new Date()).toLocaleString()})`,
        displayName: username
      },
      pubKeyCredParams: [{ alg: -7, type: "public-key" }],
      authenticatorSelection: {
        authenticatorAttachment: "platform"
      },
      timeout: 6e4,
      attestation: "direct"
    }
  });
  console.log(webAuthNCredential, accountID);
  sessionStorage[sessionStorageKey] = JSON.stringify({
    accountID,
    accountSecret
  });
  node.currentSessionID = await getSessionFor(accountID);
  return node;
}
async function logIn(getSessionFor, appHostname, initialPeers, migration) {
  const webAuthNCredential = await navigator.credentials.get({
    publicKey: {
      challenge: Uint8Array.from([0, 1, 2]),
      rpId: appHostname,
      allowCredentials: [],
      timeout: 6e4
    }
  });
  if (!webAuthNCredential) {
    throw new Error("Couldn't log in");
  }
  const webAuthNCredentialPayload = new Uint8Array(webAuthNCredential.response.userHandle);
  const accountSecretSeed = webAuthNCredentialPayload.slice(0, cojsonInternals.secretSeedLength);
  const accountID = cojsonInternals.rawCoIDfromBytes(webAuthNCredentialPayload.slice(cojsonInternals.secretSeedLength, cojsonInternals.secretSeedLength + cojsonInternals.shortHashLength));
  const accountSecret = agentSecretFromSecretSeed(accountSecretSeed);
  if (!accountSecret) {
    throw new Error("Invalid credential");
  }
  sessionStorage[sessionStorageKey] = JSON.stringify({
    accountID,
    accountSecret
  });
  const node = await LocalNode.withLoadedAccount({
    accountID,
    accountSecret,
    sessionID: await getSessionFor(accountID),
    peersToLoadFrom: initialPeers,
    migration
  });
  return node;
}
function logOut() {
  delete sessionStorage[sessionStorageKey];
}
function createLocalAuth({
  appName,
  appHostname
}) {
  const authStatus2 = a({
    status: null
  });
  const logoutCount = a(0);
  const localAuthObj = new BrowserLocalAuth({
    onReady(next) {
      authStatus2.value = {
        status: "ready",
        logIn: next.logIn,
        signUp: next.signUp
      };
    },
    onSignedIn(next) {
      authStatus2.value = {
        status: "signedIn",
        logOut: () => {
          next.logOut();
          authStatus2.value = {
            status: "loading"
          };
          logoutCount.value = logoutCount.value + 1;
        }
      };
    }
  }, appName, appHostname);
  return {
    authProvider: localAuthObj,
    authStatus: authStatus2,
    logoutCount
  };
}
function createLocalNode({
  auth,
  syncAddress,
  authStatus: authStatus2,
  logoutCount
}) {
  const nodeSignal = a(null);
  let _done;
  let count = logoutCount.peek();
  O(async () => {
    if (logoutCount.value > count) {
      count = logoutCount.value;
      done();
      const nodeHandle2 = await createBrowserNode({
        auth,
        syncAddress
      });
      nodeSignal.value = nodeHandle2.node;
      _done = nodeHandle2.done;
      return;
    }
    if (authStatus2.value.status !== null)
      return;
    const nodeHandle = await createBrowserNode({
      auth,
      syncAddress
    });
    nodeSignal.value = nodeHandle.node;
    _done = nodeHandle.done;
  });
  function done() {
    if (!_done)
      throw new Error("Called `done` before it exists");
    _done();
  }
  return {
    done,
    node: nodeSignal
  };
}
function telepathicSignal({
  id,
  node
}) {
  const state2 = a(null);
  const unsubscribe = autoSub(id, node, (data) => {
    state2.value = data;
  });
  return [state2, unsubscribe];
}
function profile$1(node) {
  const profile2 = a(null);
  let _unsubscribe = () => {
  };
  const dispose = O(() => {
    if (!node.value)
      return;
    _unsubscribe = autoSub("me", node.value, (resolved) => {
      profile2.value = resolved;
    });
  });
  function unsubscribe() {
    _unsubscribe();
    dispose();
  }
  return {
    profile: profile2,
    unsubscribe
  };
}
function State() {
  const {
    authProvider,
    authStatus: authStatus2,
    logoutCount
  } = createLocalAuth({
    appName: "Todo App"
  });
  const {
    node
  } = createLocalNode({
    auth: authProvider,
    authStatus: authStatus2,
    logoutCount
  });
  const {
    profile: profile2
  } = profile$1(node);
  const onRoute = Route();
  const state2 = {
    _setRoute: onRoute.setRoute.bind(onRoute),
    localNode: node,
    profile: profile2,
    logoutCount,
    authStatus: authStatus2,
    route: a(location.pathname + location.search)
  };
  onRoute((path) => {
    state2.route.value = path;
  });
  return state2;
}
function createNewProfile(state2, username) {
  state2.authStatus.value.signUp(username);
}
function createList(state2, {
  name
}) {
  if (!name)
    throw new Error("missing list name");
  const {
    profile: profile2
  } = state2;
  const dispose = O(() => {
    var _a2, _b;
    if (!profile2.value)
      return;
    const projectGroup = profile2.value.createGroup();
    const project = projectGroup.createMap({
      title: name,
      tasks: projectGroup.createList().id
    });
    console.log("project...", project, profile2.value.root);
    (_b = (_a2 = profile2.value.root) == null ? void 0 : _a2.projects) == null ? void 0 : _b.append(project.id);
    state2._setRoute(`/id/${project.id}`);
  });
  return dispose;
}
function createTask(project, opts) {
  if (!project.tasks)
    return;
  const {
    name
  } = opts;
  const task = project.meta.group.createMap({
    done: false,
    text: name
  });
  project.tasks.append(task.id);
}
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
function pathToRegExp(path, keys) {
  path = path.concat("/?").replace(/\/\(/g, "(?:/").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?|\*/g, tweak).replace(/([/.])/g, "\\$1").replace(/\*/g, "(.*)");
  return new RegExp("^" + path + "$", "i");
  function tweak(match2, slash, format, key, capture, optional) {
    if (match2 === "*") {
      keys.push(void 0);
      return match2;
    }
    keys.push(key);
    slash = slash || "";
    return "" + (optional ? "" : slash) + "(?:" + (optional ? slash : "") + (format || "") + (capture ? capture.replace(/\*/g, "{0,}").replace(/\./g, "[\\s\\S]") : "([^/]+?)") + ")" + (optional || "");
  }
}
__name(pathToRegExp, "pathToRegExp");
var path_to_regex_default = pathToRegExp;
function match(routes, uri, startAt) {
  let i2 = startAt || 0;
  for (let len = routes.length; i2 < len; ++i2) {
    const route = routes[i2];
    const re = route.re;
    const keys = route.keys;
    const splats = [];
    const params = {};
    const captures = uri.match(re);
    if (captures) {
      for (let j2 = 1, len2 = captures.length; j2 < len2; ++j2) {
        const value = typeof captures[j2] === "string" ? decodeURIComponent(captures[j2]) : captures[j2];
        const key = keys[j2 - 1];
        if (key) {
          params[key] = value;
        } else {
          splats.push(value);
        }
      }
      return {
        params,
        splats,
        route: route.src,
        next: i2 + 1,
        index: route.index
      };
    }
  }
  return null;
}
__name(match, "match");
function routeInfo(path, index2) {
  let src;
  let re;
  const keys = [];
  if (path instanceof RegExp) {
    re = path;
    src = path.toString();
  } else {
    re = path_to_regex_default(path, keys);
    src = path;
  }
  return { re, src, keys, index: index2 };
}
__name(routeInfo, "routeInfo");
function Router() {
  if (!(this instanceof Router))
    return new Router();
  this.routes = [];
  this.routeMap = [];
}
__name(Router, "Router");
Router.prototype.addRoute = function(path, action) {
  var _a2, _b, _c;
  if (!path) {
    throw new Error(" route requires a path");
  }
  if (!action) {
    throw new Error(" route " + path.toString() + " requires an action");
  }
  const route = routeInfo(path, (_a2 = this.routeMap) == null ? void 0 : _a2.length);
  route.action = action;
  (_b = this.routes) == null ? void 0 : _b.push(route);
  (_c = this.routeMap) == null ? void 0 : _c.push([path, action]);
};
Router.prototype.match = function(uri, startAt) {
  const route = match(this.routes, uri, startAt);
  if (route) {
    route.action = ((this.routeMap || [])[route.index] || [])[1];
    route.next = this.match.bind(this, uri, route.next);
  }
  return route;
};
var src_default = Router;
const Home = function({
  state: state2
}) {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
  const {
    profile: profile2
  } = state2;
  const [isListNameValid, setValid] = h(false);
  function handleSubmit(ev) {
    ev.preventDefault();
    const {
      elements
    } = ev.target;
    const listName = elements.namedItem("list-name").value;
    createList(state2, {
      name: listName
    });
  }
  function handleInput(ev) {
    const form = ev.target;
    const isOk = form.checkValidity();
    if (isOk !== isListNameValid)
      setValid(isOk);
  }
  async function onFormKeydown(ev) {
    const key = ev.key;
    const {
      form
    } = ev.target;
    if (!form)
      return;
    if (key !== "Backspace" && key !== "Delete")
      return;
    const _isValid = form.checkValidity();
    if (_isValid !== isListNameValid)
      setValid(_isValid);
  }
  console.log("root...", (_a2 = profile2.value) == null ? void 0 : _a2.root);
  console.log("profile", profile2.value);
  return o$2("div", {
    className: "route home",
    children: [o$2("div", {
      children: ["You are ", o$2("strong", {
        children: (_c = (_b = profile2.value) == null ? void 0 : _b.profile) == null ? void 0 : _c.name
      })]
    }), ((_f = (_e = (_d = profile2.value) == null ? void 0 : _d.root) == null ? void 0 : _e.projects) == null ? void 0 : _f.length) ? o$2("h1", {
      children: "My Projects"
    }) : null, (_i = (_h = (_g = profile2.value) == null ? void 0 : _g.root) == null ? void 0 : _h.projects) == null ? void 0 : _i.map((project) => {
      return o$2("div", {
        children: project
      }, project == null ? void 0 : project.id);
    }), o$2("h2", {
      children: "Create a List"
    }), o$2("form", {
      className: "create-list",
      onSubmit: handleSubmit,
      onKeyDown: onFormKeydown,
      onInput: handleInput,
      children: [o$2(TextInput, {
        displayName: "List name",
        name: "list-name"
      }), o$2(Primary, {
        disabled: !isListNameValid,
        children: "Create"
      })]
    })]
  });
};
const SubmittableInput = function SubmittableInput2(props) {
  const {
    primary,
    disabled,
    onSubmit,
    displayName,
    action,
    minLength
  } = props;
  const [isValid, setValid] = h(false);
  const handleSubmit = T(function handleSubmit2(ev) {
    ev.preventDefault();
    const textEl = ev.target.elements.namedItem("text");
    onSubmit(textEl.value);
    textEl.value = "";
    setValid(false);
  }, [onSubmit]);
  function handleInput(ev) {
    const form = ev.target;
    const isOk = form.checkValidity();
    if (isOk !== isValid)
      setValid(isOk);
  }
  async function onFormKeydown(ev) {
    const key = ev.key;
    const {
      form
    } = ev.target;
    if (!form)
      return;
    if (key !== "Backspace" && key !== "Delete")
      return;
    const _isValid = form.checkValidity();
    if (_isValid !== isValid)
      setValid(_isValid);
  }
  return o$2("form", {
    className: "submittable-input",
    onKeyDown: onFormKeydown,
    onSubmit: handleSubmit,
    onInput: handleInput,
    children: [o$2(TextInput, {
      className: "submittable-input",
      displayName,
      name: "text",
      minLength,
      required: true
    }), primary ? o$2(Primary, {
      type: "submit",
      disabled: disabled || !isValid,
      isSpinning: false,
      children: action
    }) : o$2(Button, {
      disabled: disabled || !isValid,
      type: "submit",
      isSpinning: false,
      children: action
    })]
  });
};
const ButtonBack = function() {
  return o$2("svg", {
    class: "svg-icon",
    style: "width: 2em; height: 2em;vertical-align: middle;fill: currentColor;overflow: hidden;",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: o$2("path", {
      d: "M333.436236 512.002048l363.098222-362.900598c18.226434-18.226434 18.226434-47.770666 0-65.998124s-47.770666-18.226434-65.998124 0L234.422666 479.000938c-18.226434 18.226434-18.226434 47.770666 0 65.998124l396.112643 395.942666c18.227458 18.18138 47.77169 18.18138 65.998124 0 18.226434-18.227458 18.226434-47.77169 0-65.998124L333.436236 512.002048z"
    })
  });
};
const list = "";
const ListView = function({
  state: state2,
  params
}) {
  var _a2, _b, _c;
  const {
    localNode
  } = state2;
  const [project] = F(() => {
    if (!localNode.value)
      return [];
    return telepathicSignal({
      id: params.id,
      // <-- here we consume the project ID
      node: localNode.value
    });
  }, [params.id, localNode.value]);
  const handleChange = T(function handleChange2(task, ev) {
    const checked = ev.target.form.elements["done-status"].checked;
    task.mutate((_task) => _task.set("done", !!checked));
  }, []);
  function _createTask(text) {
    if (!project || !project.value)
      throw new Error("not project");
    createTask(project.value, {
      name: text
    });
  }
  return o$2("div", {
    className: "route list-view",
    children: [o$2("div", {
      children: o$2("a", {
        href: "/",
        className: "nav back",
        children: [o$2(ButtonBack, {}), " Back to lists"]
      })
    }), o$2("h1", {
      children: project && ((_a2 = project.value) == null ? void 0 : _a2.title)
    }), o$2("ul", {
      className: "todo-list",
      children: (_c = (_b = project == null ? void 0 : project.value) == null ? void 0 : _b.tasks) == null ? void 0 : _c.map((task) => {
        return o$2("li", {
          children: o$2("form", {
            onChange: handleChange.bind(null, task),
            children: o$2("label", {
              children: [o$2("input", {
                defaultChecked: (task == null ? void 0 : task.get("done")) || false,
                type: "checkbox",
                name: "done-status"
              }), (task == null ? void 0 : task.get("done")) ? o$2("span", {
                children: [" ", o$2("s", {
                  children: task.get("text")
                })]
              }) : o$2("span", {
                children: " " + (task == null ? void 0 : task.get("text"))
              })]
            })
          })
        }, task && task.id);
      })
    }), o$2("div", {
      children: o$2(NewTaskInputRow, {
        onCreateTask: _createTask
      })
    })]
  });
};
const NewTaskInputRow = function NewTaskInputRow2({
  onCreateTask,
  disabled
}) {
  return o$2(SubmittableInput, {
    primary: true,
    action: "Create a new task",
    onSubmit: onCreateTask,
    displayName: "New task name",
    minLength: 3,
    disabled
  });
};
function _Router() {
  const router2 = src_default();
  router2.addRoute("/", () => {
    return Home;
  });
  router2.addRoute("/login", () => {
    return (props) => {
      return o$2("div", {
        children: "login"
      });
    };
  });
  router2.addRoute("/id/:id", () => {
    return ListView;
  });
  return router2;
}
const index = "";
const router = _Router();
const state = State();
const {
  profile,
  authStatus
} = state;
B$1(o$2(Example, {}), document.getElementById("root"));
function Example() {
  window.profile = profile;
  console.log("render", profile.value);
  const match2 = router.match(state.route.value);
  if (!match2) {
    return o$2("div", {
      className: "404",
      children: "Four Oh Four"
    });
  }
  const ChildNode = match2.action(match2, state.route);
  return o$2("div", {
    className: "jazz-signals-example",
    children: authStatus.value.status === "signedIn" ? o$2("div", {
      children: o$2(ChildNode, {
        state,
        params: match2.params
      })
    }) : o$2(LoginPage, {
      state
    })
  });
}
function LoginPage({
  state: state2
}) {
  const [loginState, setState] = h(null);
  function login(ev) {
    ev.preventDefault();
    console.log("login");
    authStatus.value.logIn();
  }
  function register(ev) {
    ev.preventDefault();
    setState("register");
  }
  function createAccount(ev) {
    ev.preventDefault();
    const {
      elements
    } = ev.target;
    const username = elements.namedItem("username").value;
    console.log("create account", username);
    createNewProfile(state2, username);
  }
  return o$2("div", {
    className: "login",
    children: loginState === null ? o$2("div", {
      className: "login-controls",
      children: [o$2(Primary, {
        onClick: login,
        className: "primary",
        children: "Login"
      }), o$2(Primary, {
        className: "signup",
        onClick: register,
        children: "Register"
      })]
    }) : o$2("form", {
      className: "register",
      onSubmit: createAccount,
      children: [o$2(TextInput, {
        displayName: "username",
        name: "username"
      }), o$2(Primary, {
        type: "submit",
        children: "Create account"
      })]
    })
  });
}