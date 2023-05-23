import {
  Image,
  MediaFile,
  Money,
  flattenConnection,
  useMoney
} from "/build/_shared/chunk-RVY3ADEN.js";
import {
  DEFAULT_LOCALE,
  formatText,
  getInputStyleClasses,
  isDiscounted,
  isNewArrival,
  missingClass,
  statusMessage,
  useIsHomePath,
  usePrefixPathWithLocale
} from "/build/_shared/chunk-SVVM2VD6.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-X46KOHV3.js";
import {
  Form,
  Link,
  NavLink,
  require_react,
  useFetcher,
  useLocation,
  useMatches,
  useNavigate,
  useNavigation,
  useSearchParams
} from "/build/_shared/chunk-PZSRRYRD.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react11 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
function u(r6, n3, ...a4) {
  if (r6 in n3) {
    let e3 = n3[r6];
    return typeof e3 == "function" ? e3(...a4) : e3;
  }
  let t9 = new Error(`Tried to handle "${r6}" but there is no handler defined. Only defined handlers are: ${Object.keys(n3).map((e3) => `"${e3}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t9, u), t9;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function e(...n3) {
  return n3.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var S = ((a4) => (a4[a4.None = 0] = "None", a4[a4.RenderStrategy = 1] = "RenderStrategy", a4[a4.Static = 2] = "Static", a4))(S || {});
var j = ((e3) => (e3[e3.Unmount = 0] = "Unmount", e3[e3.Hidden = 1] = "Hidden", e3))(j || {});
function X({ ourProps: r6, theirProps: t9, slot: e3, defaultTag: a4, features: s6, visible: n3 = true, name: f3 }) {
  let o10 = N(t9, r6);
  if (n3)
    return c(o10, e3, a4, f3);
  let u4 = s6 != null ? s6 : 0;
  if (u4 & 2) {
    let { static: l5 = false, ...p3 } = o10;
    if (l5)
      return c(p3, e3, a4, f3);
  }
  if (u4 & 1) {
    let { unmount: l5 = true, ...p3 } = o10;
    return u(l5 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c({ ...p3, hidden: true, style: { display: "none" } }, e3, a4, f3);
    } });
  }
  return c(o10, e3, a4, f3);
}
function c(r6, t9 = {}, e3, a4) {
  let { as: s6 = e3, children: n3, refName: f3 = "ref", ...o10 } = g(r6, ["unmount", "static"]), u4 = r6.ref !== void 0 ? { [f3]: r6.ref } : {}, l5 = typeof n3 == "function" ? n3(t9) : n3;
  "className" in o10 && o10.className && typeof o10.className == "function" && (o10.className = o10.className(t9));
  let p3 = {};
  if (t9) {
    let i5 = false, m3 = [];
    for (let [y3, d5] of Object.entries(t9))
      typeof d5 == "boolean" && (i5 = true), d5 === true && m3.push(y3);
    i5 && (p3["data-headlessui-state"] = m3.join(" "));
  }
  if (s6 === import_react.Fragment && Object.keys(R(o10)).length > 0) {
    if (!(0, import_react.isValidElement)(l5) || Array.isArray(l5) && l5.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a4} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o10).map((d5) => `  - ${d5}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d5) => `  - ${d5}`).join(`
`)].join(`
`));
    let i5 = l5.props, m3 = typeof (i5 == null ? void 0 : i5.className) == "function" ? (...d5) => e(i5 == null ? void 0 : i5.className(...d5), o10.className) : e(i5 == null ? void 0 : i5.className, o10.className), y3 = m3 ? { className: m3 } : {};
    return (0, import_react.cloneElement)(l5, Object.assign({}, N(l5.props, R(g(o10, ["ref"]))), p3, u4, w(l5.ref, u4.ref), y3));
  }
  return (0, import_react.createElement)(s6, Object.assign({}, g(o10, ["ref"]), s6 !== import_react.Fragment && u4, s6 !== import_react.Fragment && p3), l5);
}
function w(...r6) {
  return { ref: r6.every((t9) => t9 == null) ? void 0 : (t9) => {
    for (let e3 of r6)
      e3 != null && (typeof e3 == "function" ? e3(t9) : e3.current = t9);
  } };
}
function N(...r6) {
  var a4;
  if (r6.length === 0)
    return {};
  if (r6.length === 1)
    return r6[0];
  let t9 = {}, e3 = {};
  for (let s6 of r6)
    for (let n3 in s6)
      n3.startsWith("on") && typeof s6[n3] == "function" ? ((a4 = e3[n3]) != null || (e3[n3] = []), e3[n3].push(s6[n3])) : t9[n3] = s6[n3];
  if (t9.disabled || t9["aria-disabled"])
    return Object.assign(t9, Object.fromEntries(Object.keys(e3).map((s6) => [s6, void 0])));
  for (let s6 in e3)
    Object.assign(t9, { [s6](n3, ...f3) {
      let o10 = e3[s6];
      for (let u4 of o10) {
        if ((n3 instanceof Event || (n3 == null ? void 0 : n3.nativeEvent) instanceof Event) && n3.defaultPrevented)
          return;
        u4(n3, ...f3);
      }
    } });
  return t9;
}
function D(r6) {
  var t9;
  return Object.assign((0, import_react.forwardRef)(r6), { displayName: (t9 = r6.displayName) != null ? t9 : r6.name });
}
function R(r6) {
  let t9 = Object.assign({}, r6);
  for (let e3 in t9)
    t9[e3] === void 0 && delete t9[e3];
  return t9;
}
function g(r6, t9 = []) {
  let e3 = Object.assign({}, r6);
  for (let a4 of t9)
    a4 in e3 && delete e3[a4];
  return e3;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t9, e3, n3) => e3 in t9 ? i(t9, e3, { enumerable: true, configurable: true, writable: true, value: n3 }) : t9[e3] = n3;
var r = (t9, e3, n3) => (d(t9, typeof e3 != "symbol" ? e3 + "" : e3, n3), n3);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e3) {
    this.current !== e3 && (this.handoffState = "pending", this.currentId = 0, this.current = e3);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e3, f3) => {
  s.isServer ? (0, import_react2.useEffect)(e3, f3) : (0, import_react2.useLayoutEffect)(e3, f3);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s2(e3) {
  let r6 = (0, import_react3.useRef)(e3);
  return l(() => {
    r6.current = e3;
  }, [e3]), r6;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o2 = function(t9) {
  let e3 = s2(t9);
  return import_react4.default.useCallback((...r6) => e3.current(...r6), [e3]);
};

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var u2 = Symbol();
function T2(t9, n3 = true) {
  return Object.assign(t9, { [u2]: n3 });
}
function y(...t9) {
  let n3 = (0, import_react5.useRef)(t9);
  (0, import_react5.useEffect)(() => {
    n3.current = t9;
  }, [t9]);
  let c5 = o2((e3) => {
    for (let o10 of n3.current)
      o10 != null && (typeof o10 == "function" ? o10(e3) : o10.current = e3);
  });
  return t9.every((e3) => e3 == null || (e3 == null ? void 0 : e3[u2])) ? void 0 : c5;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react6 = __toESM(require_react(), 1);
function l3() {
  let [e3, f3] = (0, import_react6.useState)(s.isHandoffComplete);
  return e3 && s.isHandoffComplete === false && f3(false), (0, import_react6.useEffect)(() => {
    e3 !== true && f3(true);
  }, [e3]), (0, import_react6.useEffect)(() => s.handoff(), []), e3;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o4;
var I = (o4 = import_react7.default.useId) != null ? o4 : function() {
  let n3 = l3(), [e3, u4] = import_react7.default.useState(n3 ? () => s.nextId() : null);
  return l(() => {
    e3 === null && u4(s.nextId());
  }, [e3]), e3 != null ? "" + e3 : void 0;
};

// node_modules/@headlessui/react/dist/components/keyboard.js
var o5 = ((r6) => (r6.Space = " ", r6.Enter = "Enter", r6.Escape = "Escape", r6.Backspace = "Backspace", r6.Delete = "Delete", r6.ArrowLeft = "ArrowLeft", r6.ArrowUp = "ArrowUp", r6.ArrowRight = "ArrowRight", r6.ArrowDown = "ArrowDown", r6.Home = "Home", r6.End = "End", r6.PageUp = "PageUp", r6.PageDown = "PageDown", r6.Tab = "Tab", r6))(o5 || {});

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n3) {
  let e3 = n3.parentElement, l5 = null;
  for (; e3 && !(e3 instanceof HTMLFieldSetElement); )
    e3 instanceof HTMLLegendElement && (l5 = e3), e3 = e3.parentElement;
  let t9 = (e3 == null ? void 0 : e3.getAttribute("disabled")) === "";
  return t9 && i3(l5) ? false : t9;
}
function i3(n3) {
  if (!n3)
    return false;
  let e3 = n3.previousElementSibling;
  for (; e3 !== null; ) {
    if (e3 instanceof HTMLLegendElement)
      return false;
    e3 = e3.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react8 = __toESM(require_react(), 1);
var n = (0, import_react8.createContext)(null);
n.displayName = "OpenClosedContext";
var d2 = ((e3) => (e3[e3.Open = 1] = "Open", e3[e3.Closed = 2] = "Closed", e3[e3.Closing = 4] = "Closing", e3[e3.Opening = 8] = "Opening", e3))(d2 || {});
function C() {
  return (0, import_react8.useContext)(n);
}
function c3({ value: o10, children: r6 }) {
  return import_react8.default.createElement(n.Provider, { value: o10 }, r6);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react9 = __toESM(require_react(), 1);
function i4(t9) {
  var n3;
  if (t9.type)
    return t9.type;
  let e3 = (n3 = t9.as) != null ? n3 : "button";
  if (typeof e3 == "string" && e3.toLowerCase() === "button")
    return "button";
}
function s3(t9, e3) {
  let [n3, u4] = (0, import_react9.useState)(() => i4(t9));
  return l(() => {
    u4(i4(t9));
  }, [t9.type, t9.as]), l(() => {
    n3 || e3.current && e3.current instanceof HTMLButtonElement && !e3.current.hasAttribute("type") && u4("button");
  }, [n3, e3]), n3;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e2(r6) {
  return s.isServer ? null : r6 instanceof Node ? r6.ownerDocument : r6 != null && r6.hasOwnProperty("current") && r6.current instanceof Node ? r6.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react10 = __toESM(require_react(), 1);
var t5;
var a2 = (t5 = import_react10.default.startTransition) != null ? t5 : function(i5) {
  i5();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var q = ((o10) => (o10[o10.Open = 0] = "Open", o10[o10.Closed = 1] = "Closed", o10))(q || {});
var z = ((t9) => (t9[t9.ToggleDisclosure = 0] = "ToggleDisclosure", t9[t9.CloseDisclosure = 1] = "CloseDisclosure", t9[t9.SetButtonId = 2] = "SetButtonId", t9[t9.SetPanelId = 3] = "SetPanelId", t9[t9.LinkPanel = 4] = "LinkPanel", t9[t9.UnlinkPanel = 5] = "UnlinkPanel", t9))(z || {});
var Q = { [0]: (e3) => ({ ...e3, disclosureState: u(e3.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e3) => e3.disclosureState === 1 ? e3 : { ...e3, disclosureState: 1 }, [4](e3) {
  return e3.linkedPanel === true ? e3 : { ...e3, linkedPanel: true };
}, [5](e3) {
  return e3.linkedPanel === false ? e3 : { ...e3, linkedPanel: false };
}, [2](e3, n3) {
  return e3.buttonId === n3.buttonId ? e3 : { ...e3, buttonId: n3.buttonId };
}, [3](e3, n3) {
  return e3.panelId === n3.panelId ? e3 : { ...e3, panelId: n3.panelId };
} };
var k = (0, import_react11.createContext)(null);
k.displayName = "DisclosureContext";
function M(e3) {
  let n3 = (0, import_react11.useContext)(k);
  if (n3 === null) {
    let o10 = new Error(`<${e3} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o10, M), o10;
  }
  return n3;
}
var v = (0, import_react11.createContext)(null);
v.displayName = "DisclosureAPIContext";
function w2(e3) {
  let n3 = (0, import_react11.useContext)(v);
  if (n3 === null) {
    let o10 = new Error(`<${e3} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o10, w2), o10;
  }
  return n3;
}
var H = (0, import_react11.createContext)(null);
H.displayName = "DisclosurePanelContext";
function V() {
  return (0, import_react11.useContext)(H);
}
function Y(e3, n3) {
  return u(n3.type, Q, e3, n3);
}
var Z = import_react11.Fragment;
function ee(e3, n3) {
  let { defaultOpen: o10 = false, ...u4 } = e3, T4 = (0, import_react11.useRef)(null), l5 = y(n3, T2((a4) => {
    T4.current = a4;
  }, e3.as === void 0 || e3.as === import_react11.Fragment)), t9 = (0, import_react11.useRef)(null), f3 = (0, import_react11.useRef)(null), s6 = (0, import_react11.useReducer)(Y, { disclosureState: o10 ? 0 : 1, linkedPanel: false, buttonRef: f3, panelRef: t9, buttonId: null, panelId: null }), [{ disclosureState: i5, buttonId: c5 }, D3] = s6, d5 = o2((a4) => {
    D3({ type: 1 });
    let r6 = e2(T4);
    if (!r6 || !c5)
      return;
    let p3 = (() => a4 ? a4 instanceof HTMLElement ? a4 : a4.current instanceof HTMLElement ? a4.current : r6.getElementById(c5) : r6.getElementById(c5))();
    p3 == null || p3.focus();
  }), P2 = (0, import_react11.useMemo)(() => ({ close: d5 }), [d5]), b2 = (0, import_react11.useMemo)(() => ({ open: i5 === 0, close: d5 }), [i5, d5]), y3 = { ref: l5 };
  return import_react11.default.createElement(k.Provider, { value: s6 }, import_react11.default.createElement(v.Provider, { value: P2 }, import_react11.default.createElement(c3, { value: u(i5, { [0]: d2.Open, [1]: d2.Closed }) }, X({ ourProps: y3, theirProps: u4, slot: b2, defaultTag: Z, name: "Disclosure" }))));
}
var te = "button";
function ne(e3, n3) {
  let o10 = I(), { id: u4 = `headlessui-disclosure-button-${o10}`, ...T4 } = e3, [l5, t9] = M("Disclosure.Button"), f3 = V(), s6 = f3 === null ? false : f3 === l5.panelId, i5 = (0, import_react11.useRef)(null), c5 = y(i5, n3, s6 ? null : l5.buttonRef);
  (0, import_react11.useEffect)(() => {
    if (!s6)
      return t9({ type: 2, buttonId: u4 }), () => {
        t9({ type: 2, buttonId: null });
      };
  }, [u4, t9, s6]);
  let D3 = o2((r6) => {
    var p3;
    if (s6) {
      if (l5.disclosureState === 1)
        return;
      switch (r6.key) {
        case o5.Space:
        case o5.Enter:
          r6.preventDefault(), r6.stopPropagation(), t9({ type: 0 }), (p3 = l5.buttonRef.current) == null || p3.focus();
          break;
      }
    } else
      switch (r6.key) {
        case o5.Space:
        case o5.Enter:
          r6.preventDefault(), r6.stopPropagation(), t9({ type: 0 });
          break;
      }
  }), d5 = o2((r6) => {
    switch (r6.key) {
      case o5.Space:
        r6.preventDefault();
        break;
    }
  }), P2 = o2((r6) => {
    var p3;
    r3(r6.currentTarget) || e3.disabled || (s6 ? (t9({ type: 0 }), (p3 = l5.buttonRef.current) == null || p3.focus()) : t9({ type: 0 }));
  }), b2 = (0, import_react11.useMemo)(() => ({ open: l5.disclosureState === 0 }), [l5]), y3 = s3(e3, i5), a4 = s6 ? { ref: c5, type: y3, onKeyDown: D3, onClick: P2 } : { ref: c5, id: u4, type: y3, "aria-expanded": e3.disabled ? void 0 : l5.disclosureState === 0, "aria-controls": l5.linkedPanel ? l5.panelId : void 0, onKeyDown: D3, onKeyUp: d5, onClick: P2 };
  return X({ ourProps: a4, theirProps: T4, slot: b2, defaultTag: te, name: "Disclosure.Button" });
}
var le = "div";
var oe = S.RenderStrategy | S.Static;
function re(e3, n3) {
  let o10 = I(), { id: u4 = `headlessui-disclosure-panel-${o10}`, ...T4 } = e3, [l5, t9] = M("Disclosure.Panel"), { close: f3 } = w2("Disclosure.Panel"), s6 = y(n3, l5.panelRef, (P2) => {
    a2(() => t9({ type: P2 ? 4 : 5 }));
  });
  (0, import_react11.useEffect)(() => (t9({ type: 3, panelId: u4 }), () => {
    t9({ type: 3, panelId: null });
  }), [u4, t9]);
  let i5 = C(), c5 = (() => i5 !== null ? (i5 & d2.Open) === d2.Open : l5.disclosureState === 0)(), D3 = (0, import_react11.useMemo)(() => ({ open: l5.disclosureState === 0, close: f3 }), [l5, f3]), d5 = { ref: s6, id: u4 };
  return import_react11.default.createElement(H.Provider, { value: l5.panelId }, X({ ourProps: d5, theirProps: T4, slot: D3, defaultTag: le, features: oe, visible: c5, name: "Disclosure.Panel" }));
}
var se = D(ee);
var ue = D(ne);
var ie = D(re);
var ve = Object.assign(se, { Button: ue, Panel: ie });

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t6(e3) {
  typeof queueMicrotask == "function" ? queueMicrotask(e3) : Promise.resolve().then(e3).catch((o10) => setTimeout(() => {
    throw o10;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o7() {
  let n3 = [], r6 = { addEventListener(e3, t9, s6, a4) {
    return e3.addEventListener(t9, s6, a4), r6.add(() => e3.removeEventListener(t9, s6, a4));
  }, requestAnimationFrame(...e3) {
    let t9 = requestAnimationFrame(...e3);
    return r6.add(() => cancelAnimationFrame(t9));
  }, nextFrame(...e3) {
    return r6.requestAnimationFrame(() => r6.requestAnimationFrame(...e3));
  }, setTimeout(...e3) {
    let t9 = setTimeout(...e3);
    return r6.add(() => clearTimeout(t9));
  }, microTask(...e3) {
    let t9 = { current: true };
    return t6(() => {
      t9.current && e3[0]();
    }), r6.add(() => {
      t9.current = false;
    });
  }, style(e3, t9, s6) {
    let a4 = e3.style.getPropertyValue(t9);
    return Object.assign(e3.style, { [t9]: s6 }), this.add(() => {
      Object.assign(e3.style, { [t9]: a4 });
    });
  }, group(e3) {
    let t9 = o7();
    return e3(t9), this.add(() => t9.dispose());
  }, add(e3) {
    return n3.push(e3), () => {
      let t9 = n3.indexOf(e3);
      if (t9 >= 0)
        for (let s6 of n3.splice(t9, 1))
          s6();
    };
  }, dispose() {
    for (let e3 of n3.splice(0))
      e3();
  } };
  return r6;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p2() {
  let [e3] = (0, import_react12.useState)(o7);
  return (0, import_react12.useEffect)(() => () => e3.dispose(), [e3]), e3;
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react14 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c4 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e3) => `${e3}:not([tabindex='-1'])`).join(",");
var M2 = ((n3) => (n3[n3.First = 1] = "First", n3[n3.Previous = 2] = "Previous", n3[n3.Next = 4] = "Next", n3[n3.Last = 8] = "Last", n3[n3.WrapAround = 16] = "WrapAround", n3[n3.NoScroll = 32] = "NoScroll", n3))(M2 || {});
var N3 = ((o10) => (o10[o10.Error = 0] = "Error", o10[o10.Overflow = 1] = "Overflow", o10[o10.Success = 2] = "Success", o10[o10.Underflow = 3] = "Underflow", o10))(N3 || {});
var F2 = ((t9) => (t9[t9.Previous = -1] = "Previous", t9[t9.Next = 1] = "Next", t9))(F2 || {});
function f(e3 = document.body) {
  return e3 == null ? [] : Array.from(e3.querySelectorAll(c4)).sort((r6, t9) => Math.sign((r6.tabIndex || Number.MAX_SAFE_INTEGER) - (t9.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T3 = ((t9) => (t9[t9.Strict = 0] = "Strict", t9[t9.Loose = 1] = "Loose", t9))(T3 || {});
function h3(e3, r6 = 0) {
  var t9;
  return e3 === ((t9 = e2(e3)) == null ? void 0 : t9.body) ? false : u(r6, { [0]() {
    return e3.matches(c4);
  }, [1]() {
    let l5 = e3;
    for (; l5 !== null; ) {
      if (l5.matches(c4))
        return true;
      l5 = l5.parentElement;
    }
    return false;
  } });
}
function D2(e3) {
  let r6 = e2(e3);
  o7().nextFrame(() => {
    r6 && !h3(r6.activeElement, 0) && y2(e3);
  });
}
var w3 = ((t9) => (t9[t9.Keyboard = 0] = "Keyboard", t9[t9.Mouse = 1] = "Mouse", t9))(w3 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e3) => {
  e3.metaKey || e3.altKey || e3.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e3) => {
  e3.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e3.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y2(e3) {
  e3 == null || e3.focus({ preventScroll: true });
}
var S3 = ["textarea", "input"].join(",");
function H2(e3) {
  var r6, t9;
  return (t9 = (r6 = e3 == null ? void 0 : e3.matches) == null ? void 0 : r6.call(e3, S3)) != null ? t9 : false;
}
function I3(e3, r6 = (t9) => t9) {
  return e3.slice().sort((t9, l5) => {
    let o10 = r6(t9), i5 = r6(l5);
    if (o10 === null || i5 === null)
      return 0;
    let n3 = o10.compareDocumentPosition(i5);
    return n3 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n3 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _(e3, r6) {
  return O(f(), r6, { relativeTo: e3 });
}
function O(e3, r6, { sorted: t9 = true, relativeTo: l5 = null, skipElements: o10 = [] } = {}) {
  let i5 = Array.isArray(e3) ? e3.length > 0 ? e3[0].ownerDocument : document : e3.ownerDocument, n3 = Array.isArray(e3) ? t9 ? I3(e3) : e3 : f(e3);
  o10.length > 0 && n3.length > 1 && (n3 = n3.filter((s6) => !o10.includes(s6))), l5 = l5 != null ? l5 : i5.activeElement;
  let E4 = (() => {
    if (r6 & 5)
      return 1;
    if (r6 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x3 = (() => {
    if (r6 & 1)
      return 0;
    if (r6 & 2)
      return Math.max(0, n3.indexOf(l5)) - 1;
    if (r6 & 4)
      return Math.max(0, n3.indexOf(l5)) + 1;
    if (r6 & 8)
      return n3.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p3 = r6 & 32 ? { preventScroll: true } : {}, d5 = 0, a4 = n3.length, u4;
  do {
    if (d5 >= a4 || d5 + a4 <= 0)
      return 0;
    let s6 = x3 + d5;
    if (r6 & 16)
      s6 = (s6 + a4) % a4;
    else {
      if (s6 < 0)
        return 3;
      if (s6 >= a4)
        return 1;
    }
    u4 = n3[s6], u4 == null || u4.focus(p3), d5 += E4;
  } while (u4 !== i5.activeElement);
  return r6 & 6 && H2(u4) && u4.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react13 = __toESM(require_react(), 1);
function d3(e3, r6, n3) {
  let o10 = s2(r6);
  (0, import_react13.useEffect)(() => {
    function t9(u4) {
      o10.current(u4);
    }
    return document.addEventListener(e3, t9, n3), () => document.removeEventListener(e3, t9, n3);
  }, [e3, n3]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function L(m3, E4, c5 = true) {
  let i5 = (0, import_react14.useRef)(false);
  (0, import_react14.useEffect)(() => {
    requestAnimationFrame(() => {
      i5.current = c5;
    });
  }, [c5]);
  function f3(e3, o10) {
    if (!i5.current || e3.defaultPrevented)
      return;
    let l5 = function r6(t9) {
      return typeof t9 == "function" ? r6(t9()) : Array.isArray(t9) || t9 instanceof Set ? t9 : [t9];
    }(m3), n3 = o10(e3);
    if (n3 !== null && n3.getRootNode().contains(n3)) {
      for (let r6 of l5) {
        if (r6 === null)
          continue;
        let t9 = r6 instanceof HTMLElement ? r6 : r6.current;
        if (t9 != null && t9.contains(n3) || e3.composed && e3.composedPath().includes(t9))
          return;
      }
      return !h3(n3, T3.Loose) && n3.tabIndex !== -1 && e3.preventDefault(), E4(e3, n3);
    }
  }
  let u4 = (0, import_react14.useRef)(null);
  d3("mousedown", (e3) => {
    var o10, l5;
    i5.current && (u4.current = ((l5 = (o10 = e3.composedPath) == null ? void 0 : o10.call(e3)) == null ? void 0 : l5[0]) || e3.target);
  }, true), d3("click", (e3) => {
    u4.current && (f3(e3, () => u4.current), u4.current = null);
  }, true), d3("blur", (e3) => f3(e3, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react15 = __toESM(require_react(), 1);
function F3({ container: e3, accept: t9, walk: r6, enabled: c5 = true }) {
  let o10 = (0, import_react15.useRef)(t9), l5 = (0, import_react15.useRef)(r6);
  (0, import_react15.useEffect)(() => {
    o10.current = t9, l5.current = r6;
  }, [t9, r6]), l(() => {
    if (!e3 || !c5)
      return;
    let n3 = e2(e3);
    if (!n3)
      return;
    let f3 = o10.current, p3 = l5.current, d5 = Object.assign((i5) => f3(i5), { acceptNode: f3 }), u4 = n3.createTreeWalker(e3, NodeFilter.SHOW_ELEMENT, d5, false);
    for (; u4.nextNode(); )
      p3(u4.currentNode);
  }, [e3, c5, o10, l5]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f2(r6) {
  throw new Error("Unexpected object: " + r6);
}
var a3 = ((e3) => (e3[e3.First = 0] = "First", e3[e3.Previous = 1] = "Previous", e3[e3.Next = 2] = "Next", e3[e3.Last = 3] = "Last", e3[e3.Specific = 4] = "Specific", e3[e3.Nothing = 5] = "Nothing", e3))(a3 || {});
function x2(r6, n3) {
  let t9 = n3.resolveItems();
  if (t9.length <= 0)
    return null;
  let l5 = n3.resolveActiveIndex(), s6 = l5 != null ? l5 : -1, d5 = (() => {
    switch (r6.focus) {
      case 0:
        return t9.findIndex((e3) => !n3.resolveDisabled(e3));
      case 1: {
        let e3 = t9.slice().reverse().findIndex((i5, c5, u4) => s6 !== -1 && u4.length - c5 - 1 >= s6 ? false : !n3.resolveDisabled(i5));
        return e3 === -1 ? e3 : t9.length - 1 - e3;
      }
      case 2:
        return t9.findIndex((e3, i5) => i5 <= s6 ? false : !n3.resolveDisabled(e3));
      case 3: {
        let e3 = t9.slice().reverse().findIndex((i5) => !n3.resolveDisabled(i5));
        return e3 === -1 ? e3 : t9.length - 1 - e3;
      }
      case 4:
        return t9.findIndex((e3) => n3.resolveId(e3) === r6.id);
      case 5:
        return null;
      default:
        f2(r6);
    }
  })();
  return d5 === -1 ? l5 : d5;
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react16 = __toESM(require_react(), 1);
function t7(e3) {
  return [e3.screenX, e3.screenY];
}
function u3() {
  let e3 = (0, import_react16.useRef)([-1, -1]);
  return { wasMoved(r6) {
    let n3 = t7(r6);
    return e3.current[0] === n3[0] && e3.current[1] === n3[1] ? false : (e3.current = n3, true);
  }, update(r6) {
    e3.current = t7(r6);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react17 = __toESM(require_react(), 1);
function n2(...e3) {
  return (0, import_react17.useMemo)(() => e2(...e3), [...e3]);
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react18 = __toESM(require_react(), 1);
var pe = ((r6) => (r6[r6.Open = 0] = "Open", r6[r6.Closed = 1] = "Closed", r6))(pe || {});
var ce = ((r6) => (r6[r6.Pointer = 0] = "Pointer", r6[r6.Other = 1] = "Other", r6))(ce || {});
var me = ((a4) => (a4[a4.OpenMenu = 0] = "OpenMenu", a4[a4.CloseMenu = 1] = "CloseMenu", a4[a4.GoToItem = 2] = "GoToItem", a4[a4.Search = 3] = "Search", a4[a4.ClearSearch = 4] = "ClearSearch", a4[a4.RegisterItem = 5] = "RegisterItem", a4[a4.UnregisterItem = 6] = "UnregisterItem", a4))(me || {});
function w4(e3, u4 = (r6) => r6) {
  let r6 = e3.activeItemIndex !== null ? e3.items[e3.activeItemIndex] : null, i5 = I3(u4(e3.items.slice()), (t9) => t9.dataRef.current.domRef.current), s6 = r6 ? i5.indexOf(r6) : null;
  return s6 === -1 && (s6 = null), { items: i5, activeItemIndex: s6 };
}
var de = { [1](e3) {
  return e3.menuState === 1 ? e3 : { ...e3, activeItemIndex: null, menuState: 1 };
}, [0](e3) {
  return e3.menuState === 0 ? e3 : { ...e3, menuState: 0 };
}, [2]: (e3, u4) => {
  var s6;
  let r6 = w4(e3), i5 = x2(u4, { resolveItems: () => r6.items, resolveActiveIndex: () => r6.activeItemIndex, resolveId: (t9) => t9.id, resolveDisabled: (t9) => t9.dataRef.current.disabled });
  return { ...e3, ...r6, searchQuery: "", activeItemIndex: i5, activationTrigger: (s6 = u4.trigger) != null ? s6 : 1 };
}, [3]: (e3, u4) => {
  let i5 = e3.searchQuery !== "" ? 0 : 1, s6 = e3.searchQuery + u4.value.toLowerCase(), o10 = (e3.activeItemIndex !== null ? e3.items.slice(e3.activeItemIndex + i5).concat(e3.items.slice(0, e3.activeItemIndex + i5)) : e3.items).find((l5) => {
    var m3;
    return ((m3 = l5.dataRef.current.textValue) == null ? void 0 : m3.startsWith(s6)) && !l5.dataRef.current.disabled;
  }), a4 = o10 ? e3.items.indexOf(o10) : -1;
  return a4 === -1 || a4 === e3.activeItemIndex ? { ...e3, searchQuery: s6 } : { ...e3, searchQuery: s6, activeItemIndex: a4, activationTrigger: 1 };
}, [4](e3) {
  return e3.searchQuery === "" ? e3 : { ...e3, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e3, u4) => {
  let r6 = w4(e3, (i5) => [...i5, { id: u4.id, dataRef: u4.dataRef }]);
  return { ...e3, ...r6 };
}, [6]: (e3, u4) => {
  let r6 = w4(e3, (i5) => {
    let s6 = i5.findIndex((t9) => t9.id === u4.id);
    return s6 !== -1 && i5.splice(s6, 1), i5;
  });
  return { ...e3, ...r6, activationTrigger: 1 };
} };
var U = (0, import_react18.createContext)(null);
U.displayName = "MenuContext";
function F4(e3) {
  let u4 = (0, import_react18.useContext)(U);
  if (u4 === null) {
    let r6 = new Error(`<${e3} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r6, F4), r6;
  }
  return u4;
}
function fe(e3, u4) {
  return u(u4.type, de, e3, u4);
}
var Te = import_react18.Fragment;
function ye(e3, u4) {
  let r6 = (0, import_react18.useReducer)(fe, { menuState: 1, buttonRef: (0, import_react18.createRef)(), itemsRef: (0, import_react18.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: i5, itemsRef: s6, buttonRef: t9 }, o10] = r6, a4 = y(u4);
  L([t9, s6], (g3, A) => {
    var I4;
    o10({ type: 1 }), h3(A, T3.Loose) || (g3.preventDefault(), (I4 = t9.current) == null || I4.focus());
  }, i5 === 0);
  let l5 = o2(() => {
    o10({ type: 1 });
  }), m3 = (0, import_react18.useMemo)(() => ({ open: i5 === 0, close: l5 }), [i5, l5]), M3 = e3, f3 = { ref: a4 };
  return import_react18.default.createElement(U.Provider, { value: r6 }, import_react18.default.createElement(c3, { value: u(i5, { [0]: d2.Open, [1]: d2.Closed }) }, X({ ourProps: f3, theirProps: M3, slot: m3, defaultTag: Te, name: "Menu" })));
}
var Ie = "button";
function Me(e3, u4) {
  var I4;
  let r6 = I(), { id: i5 = `headlessui-menu-button-${r6}`, ...s6 } = e3, [t9, o10] = F4("Menu.Button"), a4 = y(t9.buttonRef, u4), l5 = p2(), m3 = o2((p3) => {
    switch (p3.key) {
      case o5.Space:
      case o5.Enter:
      case o5.ArrowDown:
        p3.preventDefault(), p3.stopPropagation(), o10({ type: 0 }), l5.nextFrame(() => o10({ type: 2, focus: a3.First }));
        break;
      case o5.ArrowUp:
        p3.preventDefault(), p3.stopPropagation(), o10({ type: 0 }), l5.nextFrame(() => o10({ type: 2, focus: a3.Last }));
        break;
    }
  }), M3 = o2((p3) => {
    switch (p3.key) {
      case o5.Space:
        p3.preventDefault();
        break;
    }
  }), f3 = o2((p3) => {
    if (r3(p3.currentTarget))
      return p3.preventDefault();
    e3.disabled || (t9.menuState === 0 ? (o10({ type: 1 }), l5.nextFrame(() => {
      var R2;
      return (R2 = t9.buttonRef.current) == null ? void 0 : R2.focus({ preventScroll: true });
    })) : (p3.preventDefault(), o10({ type: 0 })));
  }), g3 = (0, import_react18.useMemo)(() => ({ open: t9.menuState === 0 }), [t9]), A = { ref: a4, id: i5, type: s3(e3, t9.buttonRef), "aria-haspopup": "menu", "aria-controls": (I4 = t9.itemsRef.current) == null ? void 0 : I4.id, "aria-expanded": e3.disabled ? void 0 : t9.menuState === 0, onKeyDown: m3, onKeyUp: M3, onClick: f3 };
  return X({ ourProps: A, theirProps: s6, slot: g3, defaultTag: Ie, name: "Menu.Button" });
}
var ge = "div";
var Re = S.RenderStrategy | S.Static;
function Ae(e3, u4) {
  var R2, E4;
  let r6 = I(), { id: i5 = `headlessui-menu-items-${r6}`, ...s6 } = e3, [t9, o10] = F4("Menu.Items"), a4 = y(t9.itemsRef, u4), l5 = n2(t9.itemsRef), m3 = p2(), M3 = C(), f3 = (() => M3 !== null ? (M3 & d2.Open) === d2.Open : t9.menuState === 0)();
  (0, import_react18.useEffect)(() => {
    let n3 = t9.itemsRef.current;
    n3 && t9.menuState === 0 && n3 !== (l5 == null ? void 0 : l5.activeElement) && n3.focus({ preventScroll: true });
  }, [t9.menuState, t9.itemsRef, l5]), F3({ container: t9.itemsRef.current, enabled: t9.menuState === 0, accept(n3) {
    return n3.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n3.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n3) {
    n3.setAttribute("role", "none");
  } });
  let g3 = o2((n3) => {
    var S4, O2;
    switch (m3.dispose(), n3.key) {
      case o5.Space:
        if (t9.searchQuery !== "")
          return n3.preventDefault(), n3.stopPropagation(), o10({ type: 3, value: n3.key });
      case o5.Enter:
        if (n3.preventDefault(), n3.stopPropagation(), o10({ type: 1 }), t9.activeItemIndex !== null) {
          let { dataRef: c5 } = t9.items[t9.activeItemIndex];
          (O2 = (S4 = c5.current) == null ? void 0 : S4.domRef.current) == null || O2.click();
        }
        D2(t9.buttonRef.current);
        break;
      case o5.ArrowDown:
        return n3.preventDefault(), n3.stopPropagation(), o10({ type: 2, focus: a3.Next });
      case o5.ArrowUp:
        return n3.preventDefault(), n3.stopPropagation(), o10({ type: 2, focus: a3.Previous });
      case o5.Home:
      case o5.PageUp:
        return n3.preventDefault(), n3.stopPropagation(), o10({ type: 2, focus: a3.First });
      case o5.End:
      case o5.PageDown:
        return n3.preventDefault(), n3.stopPropagation(), o10({ type: 2, focus: a3.Last });
      case o5.Escape:
        n3.preventDefault(), n3.stopPropagation(), o10({ type: 1 }), o7().nextFrame(() => {
          var c5;
          return (c5 = t9.buttonRef.current) == null ? void 0 : c5.focus({ preventScroll: true });
        });
        break;
      case o5.Tab:
        n3.preventDefault(), n3.stopPropagation(), o10({ type: 1 }), o7().nextFrame(() => {
          _(t9.buttonRef.current, n3.shiftKey ? M2.Previous : M2.Next);
        });
        break;
      default:
        n3.key.length === 1 && (o10({ type: 3, value: n3.key }), m3.setTimeout(() => o10({ type: 4 }), 350));
        break;
    }
  }), A = o2((n3) => {
    switch (n3.key) {
      case o5.Space:
        n3.preventDefault();
        break;
    }
  }), I4 = (0, import_react18.useMemo)(() => ({ open: t9.menuState === 0 }), [t9]), p3 = { "aria-activedescendant": t9.activeItemIndex === null || (R2 = t9.items[t9.activeItemIndex]) == null ? void 0 : R2.id, "aria-labelledby": (E4 = t9.buttonRef.current) == null ? void 0 : E4.id, id: i5, onKeyDown: g3, onKeyUp: A, role: "menu", tabIndex: 0, ref: a4 };
  return X({ ourProps: p3, theirProps: s6, slot: I4, defaultTag: ge, features: Re, visible: f3, name: "Menu.Items" });
}
var be = import_react18.Fragment;
function Ee(e3, u4) {
  let r6 = I(), { id: i5 = `headlessui-menu-item-${r6}`, disabled: s6 = false, ...t9 } = e3, [o10, a4] = F4("Menu.Item"), l5 = o10.activeItemIndex !== null ? o10.items[o10.activeItemIndex].id === i5 : false, m3 = (0, import_react18.useRef)(null), M3 = y(u4, m3);
  l(() => {
    if (o10.menuState !== 0 || !l5 || o10.activationTrigger === 0)
      return;
    let c5 = o7();
    return c5.requestAnimationFrame(() => {
      var b2, _2;
      (_2 = (b2 = m3.current) == null ? void 0 : b2.scrollIntoView) == null || _2.call(b2, { block: "nearest" });
    }), c5.dispose;
  }, [m3, l5, o10.menuState, o10.activationTrigger, o10.activeItemIndex]);
  let f3 = (0, import_react18.useRef)({ disabled: s6, domRef: m3 });
  l(() => {
    f3.current.disabled = s6;
  }, [f3, s6]), l(() => {
    var c5, b2;
    f3.current.textValue = (b2 = (c5 = m3.current) == null ? void 0 : c5.textContent) == null ? void 0 : b2.toLowerCase();
  }, [f3, m3]), l(() => (a4({ type: 5, id: i5, dataRef: f3 }), () => a4({ type: 6, id: i5 })), [f3, i5]);
  let g3 = o2(() => {
    a4({ type: 1 });
  }), A = o2((c5) => {
    if (s6)
      return c5.preventDefault();
    a4({ type: 1 }), D2(o10.buttonRef.current);
  }), I4 = o2(() => {
    if (s6)
      return a4({ type: 2, focus: a3.Nothing });
    a4({ type: 2, focus: a3.Specific, id: i5 });
  }), p3 = u3(), R2 = o2((c5) => p3.update(c5)), E4 = o2((c5) => {
    p3.wasMoved(c5) && (s6 || l5 || a4({ type: 2, focus: a3.Specific, id: i5, trigger: 0 }));
  }), n3 = o2((c5) => {
    p3.wasMoved(c5) && (s6 || l5 && a4({ type: 2, focus: a3.Nothing }));
  }), S4 = (0, import_react18.useMemo)(() => ({ active: l5, disabled: s6, close: g3 }), [l5, s6, g3]);
  return X({ ourProps: { id: i5, ref: M3, role: "menuitem", tabIndex: s6 === true ? void 0 : -1, "aria-disabled": s6 === true ? true : void 0, disabled: void 0, onClick: A, onFocus: I4, onPointerEnter: R2, onMouseEnter: R2, onPointerMove: E4, onMouseMove: E4, onPointerLeave: n3, onMouseLeave: n3 }, theirProps: t9, slot: S4, defaultTag: be, name: "Menu.Item" });
}
var Se = D(ye);
var Pe = D(Me);
var ve2 = D(Ae);
var xe = D(Ee);
var ot = Object.assign(Se, { Button: Pe, Items: ve2, Item: xe });

// node_modules/clsx/dist/clsx.m.js
function r5(e3) {
  var t9, f3, n3 = "";
  if ("string" == typeof e3 || "number" == typeof e3)
    n3 += e3;
  else if ("object" == typeof e3)
    if (Array.isArray(e3))
      for (t9 = 0; t9 < e3.length; t9++)
        e3[t9] && (f3 = r5(e3[t9])) && (n3 && (n3 += " "), n3 += f3);
    else
      for (t9 in e3)
        e3[t9] && (n3 && (n3 += " "), n3 += t9);
  return n3;
}
function clsx() {
  for (var e3, t9, f3 = 0, n3 = ""; f3 < arguments.length; )
    (e3 = arguments[f3++]) && (t9 = r5(e3)) && (n3 && (n3 += " "), n3 += t9);
  return n3;
}
var clsx_m_default = clsx;

// app/components/Text.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Text({
  as: Component2 = "span",
  className,
  color = "default",
  format,
  size = "copy",
  width = "default",
  children,
  ...props
}) {
  const colors = {
    default: "inherit",
    primary: "text-primary/90",
    subtle: "text-primary/50",
    notice: "text-notice",
    contrast: "text-contrast/90"
  };
  const sizes = {
    lead: "text-lead font-medium",
    copy: "text-copy",
    fine: "text-fine subpixel-antialiased"
  };
  const widths = {
    default: "max-w-prose",
    narrow: "max-w-prose-narrow",
    wide: "max-w-prose-wide"
  };
  const styles = clsx_m_default(
    missingClass(className, "max-w-") && widths[width],
    missingClass(className, "whitespace-") && "whitespace-pre-wrap",
    missingClass(className, "text-") && colors[color],
    sizes[size],
    className
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component2, { ...props, className: styles, children: format ? formatText(children) : children }, void 0, false, {
    fileName: "app/components/Text.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
function Heading({
  as: Component2 = "h2",
  children,
  className = "",
  format,
  size = "heading",
  width = "default",
  ...props
}) {
  const sizes = {
    display: "font-bold text-display",
    heading: "font-bold text-heading",
    lead: "font-bold text-lead",
    copy: "font-medium text-copy"
  };
  const widths = {
    default: "max-w-prose",
    narrow: "max-w-prose-narrow",
    wide: "max-w-prose-wide"
  };
  const styles = clsx_m_default(
    missingClass(className, "whitespace-") && "whitespace-pre-wrap",
    missingClass(className, "max-w-") && widths[width],
    missingClass(className, "font-") && sizes[size],
    className
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component2, { ...props, className: styles, children: format ? formatText(children) : children }, void 0, false, {
    fileName: "app/components/Text.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
function Section({
  as: Component2 = "section",
  children,
  className,
  divider = "none",
  display = "grid",
  heading,
  padding = "all",
  ...props
}) {
  const paddings = {
    x: "px-6 md:px-8 lg:px-12",
    y: "py-6 md:py-8 lg:py-12",
    swimlane: "pt-4 md:pt-8 lg:pt-12 md:pb-4 lg:pb-8",
    all: "p-6 md:p-8 lg:p-12"
  };
  const dividers = {
    none: "border-none",
    top: "border-t border-primary/05",
    bottom: "border-b border-primary/05",
    both: "border-y border-primary/05"
  };
  const displays = {
    flex: "flex",
    grid: "grid"
  };
  const styles = clsx_m_default(
    "w-full gap-4 md:gap-8",
    displays[display],
    missingClass(className, "\\mp[xy]?-") && paddings[padding],
    dividers[divider],
    className
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component2, { ...props, className: styles, children: [
    heading && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { size: "lead", className: padding === "y" ? paddings["x"] : "", children: heading }, void 0, false, {
      fileName: "app/components/Text.tsx",
      lineNumber: 150,
      columnNumber: 9
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Text.tsx",
    lineNumber: 148,
    columnNumber: 5
  }, this);
}
function PageHeader({
  children,
  className,
  heading,
  variant = "default",
  ...props
}) {
  const variants = {
    default: "grid w-full gap-8 p-6 py-8 md:p-8 lg:p-12 justify-items-start",
    blogPost: "grid md:text-center w-full gap-4 p-6 py-8 md:p-8 lg:p-12 md:justify-items-center",
    allCollections: "flex justify-between items-baseline gap-8 p-6 md:p-8 lg:p-12"
  };
  const styles = clsx_m_default(variants[variant], className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { ...props, className: styles, children: [
    heading && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { as: "h1", width: "narrow", size: "heading", className: "inline-block", children: heading }, void 0, false, {
      fileName: "app/components/Text.tsx",
      lineNumber: 185,
      columnNumber: 9
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Text.tsx",
    lineNumber: 183,
    columnNumber: 5
  }, this);
}

// app/components/Input.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Input({
  className = "",
  type,
  variant,
  ...props
}) {
  const variants = {
    search: "bg-transparent px-0 py-2 text-heading w-full focus:ring-0 border-x-0 border-t-0 transition border-b-2 border-primary/10 focus:border-primary/90",
    minisearch: "bg-transparent hidden md:inline-block text-left lg:text-right border-b transition border-transparent -mb-px border-x-0 border-t-0 appearance-none px-0 py-1 focus:ring-transparent placeholder:opacity-20 placeholder:text-inherit"
  };
  const styles = clsx_m_default(variants[variant], className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type, ...props, className: styles }, void 0, false, {
    fileName: "app/components/Input.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}

// app/components/ProductGallery.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function ProductGallery({
  media,
  className
}) {
  if (!media.length) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "div",
    {
      className: `swimlane md:grid-flow-row hiddenScroll md:p-0 md:overflow-x-auto md:grid-cols-2 ${className}`,
      children: media.map((med, i5) => {
        const isFirst = i5 === 0;
        const isFourth = i5 === 3;
        const isFullWidth = i5 % 3 === 0;
        const data = {
          ...med,
          image: {
            ...med.image,
            altText: med.alt || "Product image"
          }
        };
        const style = [
          isFullWidth ? "md:col-span-2" : "md:col-span-1",
          isFirst || isFourth ? "" : "md:aspect-[4/5]",
          "aspect-square snap-center card-image bg-white dark:bg-contrast/10 w-mobileGallery md:w-full"
        ].join(" ");
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "div",
          {
            className: style,
            children: med.image && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              Image,
              {
                loading: i5 === 0 ? "eager" : "lazy",
                data: data.image,
                aspectRatio: !isFirst && !isFourth ? "4/5" : void 0,
                sizes: isFirst || isFourth ? "(min-width: 48em) 60vw, 90vw" : "(min-width: 48em) 30vw, 90vw",
                className: "object-cover w-full h-full aspect-square fadeIn"
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductGallery.tsx",
                lineNumber: 50,
                columnNumber: 15
              },
              this
            )
          },
          med.id || med.image.id,
          false,
          {
            fileName: "app/components/ProductGallery.tsx",
            lineNumber: 44,
            columnNumber: 11
          },
          this
        );
      })
    },
    void 0,
    false,
    {
      fileName: "app/components/ProductGallery.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}

// app/lib/placeholders.ts
var PLACEHOLDERS = {
  HEROS: [
    {
      heading: { value: "All Mountain All Season" },
      byline: {
        value: "The All New Hydrogen Snowboard Exclusively From Shopify"
      },
      cta: { value: "Shop Now \u2192" },
      handle: "freestyle",
      spread: {
        reference: {
          mediaContentType: "IMAGE",
          alt: "Tracks in the snow leading to a person on a mountain top with a red jacket contrasting to an epic blue horizon with a mountain range in the distance.",
          previewImage: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_1.jpg?v=1654902468"
          },
          id: "gid://shopify/MediaImage/29259478466616",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_1.jpg?v=1654902468",
            width: 2500,
            height: 3155
          }
        }
      },
      spreadSecondary: {
        reference: {
          __typename: "MediaImage",
          mediaContentType: "IMAGE",
          alt: "A snowboarder standing on a mountain top in choppy snow, shows off the back of his snowboard which reads Hydrogen in a cursive script.",
          previewImage: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_2.jpg?v=1654902468"
          },
          id: "gid://shopify/MediaImage/29259478499384",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Hydrogen_Hero_Feature_2.jpg?v=1654902468",
            width: 2500,
            height: 3155
          }
        }
      },
      height: "full",
      top: true,
      decoding: "sync",
      loading: "eager"
    },
    {
      heading: { value: "From the Slopes to the Chalet" },
      byline: null,
      cta: { value: "Shop Now \u2192" },
      handle: "backcountry",
      spread: {
        reference: {
          __typename: "MediaImage",
          mediaContentType: "IMAGE",
          alt: "A skier hikes up a mountain through the snow with skis over their shoulder.",
          previewImage: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Chalet_Collection_Feature_1.jpg?v=1654902306"
          },
          id: "gid://shopify/MediaImage/29259478368312",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Chalet_Collection_Feature_1.jpg?v=1654902306",
            width: 2500,
            height: 2500
          }
        }
      },
      spreadSecondary: {
        reference: {
          __typename: "MediaImage",
          mediaContentType: "IMAGE",
          alt: "A snow covered lodge is illuminated by lights at night with a dark starry sky and mountain backdrop.",
          previewImage: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Chalet_Collection_Feature_2.jpg?v=1654902306"
          },
          id: "gid://shopify/MediaImage/29259478401080",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Chalet_Collection_Feature_2.jpg?v=1654902306",
            width: 2500,
            height: 2500
          }
        }
      }
    },
    {
      heading: { value: "The Winter 2022 Collection" },
      byline: { value: "Just Dropped" },
      cta: { value: "Shop Now \u2192" },
      handle: "winter-2022",
      spread: {
        reference: {
          __typename: "MediaImage",
          mediaContentType: "IMAGE",
          alt: "Three young women in snowboarding attire embracing and laughing while snow falls around them",
          previewImage: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Collection_Feature_Wide.jpg?v=1654902160"
          },
          id: "gid://shopify/MediaImage/29259478302776",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/files/Collection_Feature_Wide.jpg?v=1654902160",
            width: 5e3,
            height: 2500
          }
        }
      },
      spreadSecondary: null
    }
  ],
  PRODUCT_INFO: [
    {
      title: "Description",
      content: "We threw snow tires on our core classics... Good for all year round! Named after my favorite football match of the year. Just like any of our joints, dress them up or down..."
    },
    {
      title: "Size and Fit",
      content: "We threw snow tires on our core classics... Good for all year round! Named after my favorite football match of the year. Just like any of our joints, dress them up or down..."
    },
    {
      title: "Delivery and Returns",
      content: `The towels had been hanging from the rod for years. They were stained and worn, and quite frankly, just plain ugly. Debra didn't want to touch them but she really didn't have a choice. It was important for her to see what was living within them. Patrick didn't want to go. The fact that she was insisting they must go made him want to go even less. He had no desire to make small talk with strangers he would never again see just to be polite. But she insisted that Patrick go, and she would soon find out that this would be the biggest mistake she could make in their relationship.`
    }
  ],
  PRODUCT: {
    label: "Limited Edition",
    id: "gid://shopify/Product/6730850828344",
    title: "The Hydrogen",
    publishedAt: "2021-06-17T18:33:17Z",
    handle: "snowboard",
    description: "Description Our flagship board, ideal for technical terrain and those who dare to go where the chairlift can't take you. The Hydrogen excels in the backcountry making riding out of bounds as easy as resort groomers. New for 2021, the Hydrogen Snowboard has Oxygen Pack inserts giving you more float on the deepest days. Care Guide Clean well after use Wax regularly Specs Weight: 5 lb Length: 4 ft Width: 1 ft Manufactured on: 8/2/2021, 3:30:00 PM Manufactured by: Shopify",
    priceRange: {
      minVariantPrice: {
        amount: "775.0",
        currencyCode: "CAD"
      },
      maxVariantPrice: {
        amount: "775.0",
        currencyCode: "CAD"
      }
    },
    options: [
      {
        name: "Color",
        values: ["Morning", "Evening", "Night"]
      },
      {
        name: "Size",
        values: ["154", "158", "160"]
      }
    ],
    variants: {
      nodes: [
        {
          id: "gid://shopify/ProductVariant/41007289630776",
          image: {
            url: "https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-morning.jpg?v=1636146509",
            altText: "The Hydrogen snowboard, color Morning",
            width: 1200,
            height: 1504
          },
          price: {
            amount: "775.0",
            currencyCode: "CAD"
          },
          compareAtPrice: {
            amount: "840.0",
            currencyCode: "CAD"
          }
        }
      ]
    }
  }
};
function getHeroPlaceholder(heros) {
  if (!heros?.length)
    return [];
  return heros.map((hero, index) => {
    if (hero?.heading?.value) {
      return hero;
    }
    const placeholder = PLACEHOLDERS.HEROS[index];
    const byLine = hero?.byLine || hero?.descriptionHtml ? { value: hero.descriptionHtml } : placeholder.byline;
    const heading = hero?.heading || hero?.title ? { value: hero.title } : placeholder.heading;
    return {
      heading,
      byLine,
      cta: hero?.cta || placeholder.cta,
      handle: hero?.handle || placeholder.handle,
      id: hero?.id || index,
      spread: hero?.spread || placeholder.spread,
      spreadSecondary: hero?.spreadSecondary || placeholder.spreadSecondary,
      height: placeholder?.height || void 0,
      top: placeholder?.top || void 0
    };
  });
}
function getProductPlaceholder() {
  return PLACEHOLDERS.PRODUCT;
}

// app/components/ProductCard.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function ProductCard({
  product,
  label,
  className,
  loading,
  onClick,
  quickAdd
}) {
  let cardLabel;
  const cardProduct = product?.variants ? product : getProductPlaceholder();
  if (!cardProduct?.variants?.nodes?.length)
    return null;
  const firstVariant = flattenConnection(cardProduct.variants)[0];
  if (!firstVariant)
    return null;
  const { image, price, compareAtPrice } = firstVariant;
  if (label) {
    cardLabel = label;
  } else if (isDiscounted(price, compareAtPrice)) {
    cardLabel = "Sale";
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = "New";
  }
  const productAnalytics = {
    productGid: product.id,
    variantGid: firstVariant.id,
    name: product.title,
    variantName: firstVariant.title,
    brand: product.vendor,
    price: firstVariant.price.amount,
    quantity: 1
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      Link2,
      {
        onClick,
        to: `/products/${product.handle}`,
        prefetch: "intent",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: clsx_m_default("grid gap-4", className), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "card-image aspect-[4/5] bg-primary/5", children: [
            image && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              Image,
              {
                className: "object-cover w-full fadeIn",
                sizes: "(min-width: 64em) 25vw, (min-width: 48em) 30vw, 45vw",
                aspectRatio: "4/5",
                data: image,
                alt: image.altText || `Picture of ${product.title}`,
                loading
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductCard.tsx",
                lineNumber: 69,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              Text,
              {
                as: "label",
                size: "fine",
                className: "absolute top-0 right-0 m-4 text-right text-notice",
                children: cardLabel
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductCard.tsx",
                lineNumber: 78,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/ProductCard.tsx",
            lineNumber: 67,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              Text,
              {
                className: "w-full overflow-hidden whitespace-nowrap text-ellipsis ",
                as: "h3",
                children: product.title
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductCard.tsx",
                lineNumber: 87,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { className: "flex gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Money, { withoutTrailingZeros: true, data: price }, void 0, false, {
                fileName: "app/components/ProductCard.tsx",
                lineNumber: 95,
                columnNumber: 17
              }, this),
              isDiscounted(price, compareAtPrice) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                CompareAtPrice,
                {
                  className: "opacity-50",
                  data: compareAtPrice
                },
                void 0,
                false,
                {
                  fileName: "app/components/ProductCard.tsx",
                  lineNumber: 97,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/ProductCard.tsx",
              lineNumber: 94,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/ProductCard.tsx",
              lineNumber: 93,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ProductCard.tsx",
            lineNumber: 86,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ProductCard.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 61,
        columnNumber: 7
      },
      this
    ),
    quickAdd && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      AddToCartButton,
      {
        lines: [
          {
            quantity: 1,
            merchandiseId: firstVariant.id
          }
        ],
        variant: "secondary",
        className: "mt-2",
        analytics: {
          products: [productAnalytics],
          totalValue: parseFloat(productAnalytics.price)
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { as: "span", className: "flex items-center justify-center gap-2", children: "Add to Cart" }, void 0, false, {
          fileName: "app/components/ProductCard.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 108,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/ProductCard.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
function CompareAtPrice({
  data,
  className
}) {
  const { currencyNarrowSymbol, withoutTrailingZerosAndCurrency } = useMoney(data);
  const styles = clsx_m_default("strike", className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: styles, children: [
    currencyNarrowSymbol,
    withoutTrailingZerosAndCurrency
  ] }, void 0, true, {
    fileName: "app/components/ProductCard.tsx",
    lineNumber: 144,
    columnNumber: 5
  }, this);
}

// app/components/ProductSwimlane.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var mockProducts = new Array(12).fill("");
function ProductSwimlane({
  title = "Featured Products",
  products = mockProducts,
  count = 12,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Section, { heading: title, padding: "y", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "swimlane hiddenScroll md:pb-8 md:scroll-px-8 lg:scroll-px-12 md:px-8 lg:px-12", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    ProductCard,
    {
      product,
      className: "snap-start w-80"
    },
    product.id,
    false,
    {
      fileName: "app/components/ProductSwimlane.tsx",
      lineNumber: 20,
      columnNumber: 11
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/ProductSwimlane.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ProductSwimlane.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/lib/const.ts
var DEFAULT_GRID_IMG_LOAD_EAGER_COUNT = 4;
var ATTR_LOADING_EAGER = "eager";
function getImageLoadingPriority(index, maxEagerLoadCount = DEFAULT_GRID_IMG_LOAD_EAGER_COUNT) {
  return index < maxEagerLoadCount ? ATTR_LOADING_EAGER : void 0;
}

// app/components/ProductGrid.tsx
var import_react20 = __toESM(require_react());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function ProductGrid({
  url,
  collection,
  ...props
}) {
  const [initialProducts, setInitialProducts] = (0, import_react20.useState)(
    collection?.products?.nodes || []
  );
  const [nextPage, setNextPage] = (0, import_react20.useState)(
    collection?.products?.pageInfo?.hasNextPage
  );
  const [endCursor, setEndCursor] = (0, import_react20.useState)(
    collection?.products?.pageInfo?.endCursor
  );
  const [products, setProducts] = (0, import_react20.useState)(initialProducts);
  const productProps = collection?.products?.nodes || [];
  if (initialProducts !== productProps) {
    setInitialProducts(productProps);
    setProducts(productProps);
  }
  const fetcher = useFetcher();
  function fetchMoreProducts() {
    fetcher.load(`${url}?index&cursor=${endCursor}`);
  }
  (0, import_react20.useEffect)(() => {
    if (!fetcher.data)
      return;
    const { collection: collection2 } = fetcher.data;
    setProducts((prev) => [...prev, ...collection2.products.nodes]);
    setNextPage(collection2.products.pageInfo.hasNextPage);
    setEndCursor(collection2.products.pageInfo.endCursor);
  }, [fetcher.data]);
  const haveProducts = initialProducts.length > 0;
  if (!haveProducts) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "No products found on this collection" }, void 0, false, {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link2, { to: "/products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "underline", children: "Browse catalog" }, void 0, false, {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductGrid.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Grid, { layout: "products", ...props, children: products.map((product, i5) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      ProductCard,
      {
        product,
        loading: getImageLoadingPriority(i5)
      },
      product.id,
      false,
      {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 67,
        columnNumber: 11
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/ProductGrid.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    nextPage && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center justify-center mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      Button,
      {
        disabled: fetcher.state !== "idle",
        variant: "secondary",
        onClick: fetchMoreProducts,
        width: "full",
        prefetch: "intent",
        children: fetcher.state !== "idle" ? "Loading..." : "Load more products"
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 77,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/ProductGrid.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProductGrid.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

// app/components/Skeleton.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function Skeleton({
  as: Component2 = "div",
  width,
  height,
  className,
  ...props
}) {
  const styles = clsx_m_default("rounded bg-primary/10", className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Component2, { ...props, width, height, className: styles }, void 0, false, {
    fileName: "app/components/Skeleton.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/components/Button.tsx
var import_react21 = __toESM(require_react());
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var Button = (0, import_react21.forwardRef)(
  ({
    as = "button",
    className = "",
    variant = "primary",
    width = "auto",
    ...props
  }, ref) => {
    const Component2 = props?.to ? Link : as;
    const baseButtonClasses = "inline-block rounded font-medium text-center py-3 px-6";
    const variants = {
      primary: `${baseButtonClasses} bg-primary text-contrast`,
      secondary: `${baseButtonClasses} border border-primary/10 bg-contrast text-primary`,
      inline: "border-b border-primary/10 leading-none pb-1"
    };
    const widths = {
      auto: "w-auto",
      full: "w-full"
    };
    const styles = clsx_m_default(
      missingClass(className, "bg-") && variants[variant],
      missingClass(className, "w-") && widths[width],
      className
    );
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      Component2,
      {
        className: styles,
        ...props,
        ref
      },
      void 0,
      false,
      {
        fileName: "app/components/Button.tsx",
        lineNumber: 47,
        columnNumber: 7
      },
      this
    );
  }
);

// app/components/CountrySelector.tsx
var import_react24 = __toESM(require_react());

// node_modules/react-intersection-observer/react-intersection-observer.modern.mjs
var React = __toESM(require_react(), 1);
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue = void 0;
function getRootId(root) {
  if (!root)
    return "0";
  if (RootIds.has(root))
    return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}
function optionsToId(options) {
  return Object.keys(options).sort().filter((key) => options[key] !== void 0).map((key) => {
    return `${key}_${key === "root" ? getRootId(options.root) : options[key]}`;
  }).toString();
}
function createObserver(options) {
  let id = optionsToId(options);
  let instance = observerMap.get(id);
  if (!instance) {
    const elements = /* @__PURE__ */ new Map();
    let thresholds;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        var _elements$get;
        const inView = entry.isIntersecting && thresholds.some((threshold) => entry.intersectionRatio >= threshold);
        if (options.trackVisibility && typeof entry.isVisible === "undefined") {
          entry.isVisible = inView;
        }
        (_elements$get = elements.get(entry.target)) == null ? void 0 : _elements$get.forEach((callback) => {
          callback(inView, entry);
        });
      });
    }, options);
    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);
    instance = {
      id,
      observer,
      elements
    };
    observerMap.set(id, instance);
  }
  return instance;
}
function observe(element, callback, options = {}, fallbackInView = unsupportedValue) {
  if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
    const bounds = element.getBoundingClientRect();
    callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    });
    return () => {
    };
  }
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  let callbacks = elements.get(element) || [];
  if (!elements.has(element)) {
    elements.set(element, callbacks);
  }
  callbacks.push(callback);
  observer.observe(element);
  return function unobserve() {
    callbacks.splice(callbacks.indexOf(callback), 1);
    if (callbacks.length === 0) {
      elements.delete(element);
      observer.unobserve(element);
    }
    if (elements.size === 0) {
      observer.disconnect();
      observerMap.delete(id);
    }
  };
}
function useInView({
  threshold,
  delay,
  trackVisibility,
  rootMargin,
  root,
  triggerOnce,
  skip,
  initialInView,
  fallbackInView,
  onChange
} = {}) {
  var _state$entry;
  const [ref, setRef] = React.useState(null);
  const callback = React.useRef();
  const [state, setState] = React.useState({
    inView: !!initialInView,
    entry: void 0
  });
  callback.current = onChange;
  React.useEffect(
    () => {
      if (skip || !ref)
        return;
      let unobserve;
      unobserve = observe(ref, (inView, entry) => {
        setState({
          inView,
          entry
        });
        if (callback.current)
          callback.current(inView, entry);
        if (entry.isIntersecting && triggerOnce && unobserve) {
          unobserve();
          unobserve = void 0;
        }
      }, {
        root,
        rootMargin,
        threshold,
        trackVisibility,
        delay
      }, fallbackInView);
      return () => {
        if (unobserve) {
          unobserve();
        }
      };
    },
    [
      Array.isArray(threshold) ? threshold.toString() : threshold,
      ref,
      root,
      rootMargin,
      triggerOnce,
      skip,
      trackVisibility,
      fallbackInView,
      delay
    ]
  );
  const entryTarget = (_state$entry = state.entry) == null ? void 0 : _state$entry.target;
  const previousEntryTarget = React.useRef();
  if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {
    previousEntryTarget.current = entryTarget;
    setState({
      inView: !!initialInView,
      entry: void 0
    });
  }
  const result = [setRef, state.inView, state.entry];
  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  return result;
}

// app/components/CountrySelector.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
function CountrySelector() {
  const [root] = useMatches();
  const fetcher = useFetcher();
  const closeRef = (0, import_react24.useRef)(null);
  const selectedLocale = root.data?.selectedLocale ?? DEFAULT_LOCALE;
  const { pathname, search } = useLocation();
  const pathWithoutLocale = `${pathname.replace(
    selectedLocale.pathPrefix,
    ""
  )}${search}`;
  const countries = fetcher.data ?? {};
  const defaultLocale = countries?.["default"];
  const defaultLocalePrefix = defaultLocale ? `${defaultLocale?.language}-${defaultLocale?.country}` : "";
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const observerRef = (0, import_react24.useRef)(null);
  (0, import_react24.useEffect)(() => {
    ref(observerRef.current);
  }, [ref, observerRef]);
  (0, import_react24.useEffect)(() => {
    if (!inView || fetcher.data || fetcher.state === "loading")
      return;
    fetcher.load("/api/countries");
  }, [inView, fetcher]);
  const closeDropdown = (0, import_react24.useCallback)(() => {
    closeRef.current?.removeAttribute("open");
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "section",
    {
      ref: observerRef,
      className: "grid w-full gap-4",
      onMouseLeave: closeDropdown,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Heading, { size: "lead", className: "cursor-default", as: "h3", children: "Country" }, void 0, false, {
          fileName: "app/components/CountrySelector.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "details",
          {
            className: "absolute w-full border rounded border-contrast/30 dark:border-white open:round-b-none overflow-clip",
            ref: closeRef,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("summary", { className: "flex items-center justify-between w-full px-4 py-3 cursor-pointer", children: selectedLocale.label }, void 0, false, {
                fileName: "app/components/CountrySelector.tsx",
                lineNumber: 61,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full overflow-auto border-t border-contrast/30 dark:border-white bg-contrast/30 max-h-36", children: countries && Object.keys(countries).map((countryPath) => {
                const countryLocale = countries[countryPath];
                const isSelected = countryLocale.language === selectedLocale.language && countryLocale.country === selectedLocale.country;
                const countryUrlPath = getCountryUrlPath({
                  countryLocale,
                  defaultLocalePrefix,
                  pathWithoutLocale
                });
                return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  Country,
                  {
                    closeDropdown,
                    countryUrlPath,
                    isSelected,
                    countryLocale
                  },
                  countryPath,
                  false,
                  {
                    fileName: "app/components/CountrySelector.tsx",
                    lineNumber: 79,
                    columnNumber: 19
                  },
                  this
                );
              }) }, void 0, false, {
                fileName: "app/components/CountrySelector.tsx",
                lineNumber: 64,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/CountrySelector.tsx",
            lineNumber: 57,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/CountrySelector.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/CountrySelector.tsx",
      lineNumber: 48,
      columnNumber: 5
    },
    this
  );
}
function Country({
  closeDropdown,
  countryLocale,
  countryUrlPath,
  isSelected
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    ChangeLocaleForm,
    {
      redirectTo: countryUrlPath,
      buyerIdentity: {
        countryCode: countryLocale.country
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        Button,
        {
          className: clsx_m_default([
            "text-contrast dark:text-primary",
            "bg-primary dark:bg-contrast w-full p-2 transition rounded flex justify-start",
            "items-center text-left cursor-pointer py-2 px-4"
          ]),
          type: "submit",
          variant: "primary",
          onClick: closeDropdown,
          children: [
            countryLocale.label,
            isSelected ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(IconCheck, {}, void 0, false, {
              fileName: "app/components/CountrySelector.tsx",
              lineNumber: 127,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/CountrySelector.tsx",
              lineNumber: 126,
              columnNumber: 11
            }, this) : null
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/CountrySelector.tsx",
          lineNumber: 114,
          columnNumber: 7
        },
        this
      )
    },
    countryLocale.country,
    false,
    {
      fileName: "app/components/CountrySelector.tsx",
      lineNumber: 107,
      columnNumber: 5
    },
    this
  );
}
function ChangeLocaleForm({
  children,
  buyerIdentity,
  redirectTo
}) {
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(fetcher.Form, { action: "/cart", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "input",
      {
        type: "hidden",
        name: "cartAction",
        value: "UPDATE_BUYER_IDENTITY" /* UPDATE_BUYER_IDENTITY */
      },
      void 0,
      false,
      {
        fileName: "app/components/CountrySelector.tsx",
        lineNumber: 148,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "input",
      {
        type: "hidden",
        name: "buyerIdentity",
        value: JSON.stringify(buyerIdentity)
      },
      void 0,
      false,
      {
        fileName: "app/components/CountrySelector.tsx",
        lineNumber: 153,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, false, {
      fileName: "app/components/CountrySelector.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/CountrySelector.tsx",
    lineNumber: 147,
    columnNumber: 5
  }, this);
}
function getCountryUrlPath({
  countryLocale,
  defaultLocalePrefix,
  pathWithoutLocale
}) {
  let countryPrefixPath = "";
  const countryLocalePrefix = `${countryLocale.language}-${countryLocale.country}`;
  if (countryLocalePrefix !== defaultLocalePrefix) {
    countryPrefixPath = `/${countryLocalePrefix.toLowerCase()}`;
  }
  return `${countryPrefixPath}${pathWithoutLocale}`;
}

// app/components/Cart.tsx
var import_react31 = __toESM(require_react());

// node_modules/react-use/esm/misc/util.js
function on(obj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (obj && obj.addEventListener) {
    obj.addEventListener.apply(obj, args);
  }
}
function off(obj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (obj && obj.removeEventListener) {
    obj.removeEventListener.apply(obj, args);
  }
}

// node_modules/react-use/esm/useDebounce.js
var import_react26 = __toESM(require_react());

// node_modules/react-use/esm/useTimeoutFn.js
var import_react25 = __toESM(require_react());
function useTimeoutFn(fn, ms) {
  if (ms === void 0) {
    ms = 0;
  }
  var ready = (0, import_react25.useRef)(false);
  var timeout = (0, import_react25.useRef)();
  var callback = (0, import_react25.useRef)(fn);
  var isReady = (0, import_react25.useCallback)(function() {
    return ready.current;
  }, []);
  var set = (0, import_react25.useCallback)(function() {
    ready.current = false;
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(function() {
      ready.current = true;
      callback.current();
    }, ms);
  }, [ms]);
  var clear = (0, import_react25.useCallback)(function() {
    ready.current = null;
    timeout.current && clearTimeout(timeout.current);
  }, []);
  (0, import_react25.useEffect)(function() {
    callback.current = fn;
  }, [fn]);
  (0, import_react25.useEffect)(function() {
    set();
    return clear;
  }, [ms]);
  return [isReady, clear, set];
}

// node_modules/react-use/esm/useDebounce.js
function useDebounce(fn, ms, deps) {
  if (ms === void 0) {
    ms = 0;
  }
  if (deps === void 0) {
    deps = [];
  }
  var _a = useTimeoutFn(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];
  (0, import_react26.useEffect)(reset, deps);
  return [isReady, cancel];
}

// node_modules/react-use/esm/useEffectOnce.js
var import_react27 = __toESM(require_react());
var useEffectOnce = function(effect) {
  (0, import_react27.useEffect)(effect, []);
};
var useEffectOnce_default = useEffectOnce;

// node_modules/react-use/esm/useRafState.js
var import_react29 = __toESM(require_react());

// node_modules/react-use/esm/useUnmount.js
var import_react28 = __toESM(require_react());
var useUnmount = function(fn) {
  var fnRef = (0, import_react28.useRef)(fn);
  fnRef.current = fn;
  useEffectOnce_default(function() {
    return function() {
      return fnRef.current();
    };
  });
};
var useUnmount_default = useUnmount;

// node_modules/react-use/esm/useRafState.js
var useRafState = function(initialState) {
  var frame = (0, import_react29.useRef)(0);
  var _a = (0, import_react29.useState)(initialState), state = _a[0], setState = _a[1];
  var setRafState = (0, import_react29.useCallback)(function(value) {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(function() {
      setState(value);
    });
  }, []);
  useUnmount_default(function() {
    cancelAnimationFrame(frame.current);
  });
  return [state, setRafState];
};
var useRafState_default = useRafState;

// node_modules/react-use/esm/useScroll.js
var import_react30 = __toESM(require_react());
var useScroll = function(ref) {
  if (true) {
    if (typeof ref !== "object" || typeof ref.current === "undefined") {
      console.error("`useScroll` expects a single ref argument.");
    }
  }
  var _a = useRafState_default({
    x: 0,
    y: 0
  }), state = _a[0], setState = _a[1];
  (0, import_react30.useEffect)(function() {
    var handler = function() {
      if (ref.current) {
        setState({
          x: ref.current.scrollLeft,
          y: ref.current.scrollTop
        });
      }
    };
    if (ref.current) {
      on(ref.current, "scroll", handler, {
        capture: false,
        passive: true
      });
    }
    return function() {
      if (ref.current) {
        off(ref.current, "scroll", handler);
      }
    };
  }, [ref]);
  return state;
};
var useScroll_default = useScroll;

// app/components/Cart.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
function Cart({
  layout,
  onClose,
  cart
}) {
  const linesCount = Boolean(cart?.lines?.edges?.length || 0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CartEmpty, { hidden: linesCount, onClose, layout }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CartDetails, { cart, layout }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function CartDetails({
  layout,
  cart
}) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;
  const container = {
    drawer: "grid grid-cols-1 h-screen-no-nav grid-rows-[1fr_auto]",
    page: "w-full pb-12 grid md:grid-cols-2 md:items-start gap-8 md:gap-8 lg:gap-12"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: container[layout], children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CartLines, { lines: cart?.lines, layout }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    cartHasItems && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CartSummary, { cost: cart.cost, layout, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CartDiscounts, { discountCodes: cart.discountCodes }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CartCheckoutActions, { checkoutUrl: cart.checkoutUrl }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
function CartDiscounts({
  discountCodes
}) {
  const codes = discountCodes?.map(({ code }) => code).join(", ") || null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("dl", { className: codes ? "grid" : "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center justify-between font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Text, { as: "dt", children: "Discount(s)" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(UpdateDiscountForm, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          IconRemove,
          {
            "aria-hidden": "true",
            style: { height: 18, marginRight: 4 }
          },
          void 0,
          false,
          {
            fileName: "app/components/Cart.tsx",
            lineNumber: 92,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Text, { as: "dd", children: codes }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(UpdateDiscountForm, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "div",
      {
        className: clsx_m_default(
          codes ? "hidden" : "flex",
          "items-center gap-4 justify-between text-copy"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "input",
            {
              className: getInputStyleClasses(),
              type: "text",
              name: "discountCode",
              placeholder: "Discount code"
            },
            void 0,
            false,
            {
              fileName: "app/components/Cart.tsx",
              lineNumber: 111,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "flex justify-end font-medium whitespace-nowrap", children: "Apply Discount" }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 117,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 105,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}
function UpdateDiscountForm({ children }) {
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(fetcher.Form, { action: "/cart", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "input",
      {
        type: "hidden",
        name: "cartAction",
        value: "UPDATE_DISCOUNT" /* UPDATE_DISCOUNT */
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 130,
        columnNumber: 7
      },
      this
    ),
    children
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 129,
    columnNumber: 5
  }, this);
}
function CartLines({
  layout = "drawer",
  lines: cartLines
}) {
  const currentLines = cartLines ? flattenConnection(cartLines) : [];
  const scrollRef = (0, import_react31.useRef)(null);
  const { y: y3 } = useScroll_default(scrollRef);
  const className = clsx_m_default([
    y3 > 0 ? "border-t" : "",
    layout === "page" ? "flex-grow md:translate-y-4" : "px-6 pb-6 sm-max:pt-2 overflow-auto transition md:px-12"
  ]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "section",
    {
      ref: scrollRef,
      "aria-labelledby": "cart-contents",
      className,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ul", { className: "grid gap-6 md:gap-10", children: currentLines.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CartLineItem, { line }, line.id, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this)) }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 164,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/Cart.tsx",
      lineNumber: 159,
      columnNumber: 5
    },
    this
  );
}
function CartCheckoutActions({ checkoutUrl }) {
  if (!checkoutUrl)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("a", { href: checkoutUrl, target: "_self", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button, { as: "span", width: "full", children: "Continue to Checkout" }, void 0, false, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 179,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 178,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 177,
    columnNumber: 5
  }, this);
}
function CartSummary({
  cost,
  layout,
  children = null
}) {
  const summary = {
    drawer: "grid gap-4 p-6 border-t md:px-12",
    page: "sticky top-nav grid gap-6 p-4 md:px-6 md:translate-y-4 bg-primary/5 rounded w-full"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { "aria-labelledby": "summary-heading", className: summary[layout], children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { id: "summary-heading", className: "sr-only", children: "Order summary" }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 204,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("dl", { className: "grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center justify-between font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Text, { as: "dt", children: "Subtotal" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 209,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Text, { as: "dd", "data-test": "subtotal", children: cost?.subtotalAmount?.amount ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Money, { data: cost?.subtotalAmount }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 212,
        columnNumber: 15
      }, this) : "-" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 210,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 208,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 203,
    columnNumber: 5
  }, this);
}
function CartLineItem({ line }) {
  if (!line?.id)
    return null;
  const { id, quantity, merchandise } = line;
  if (typeof quantity === "undefined" || !merchandise?.product)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "flex gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex-shrink", children: merchandise.image && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      Image,
      {
        width: 110,
        height: 110,
        data: merchandise.image,
        className: "object-cover object-center w-24 h-24 border rounded md:w-28 md:h-28",
        alt: merchandise.title
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 235,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 233,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex justify-between flex-grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Heading, { as: "h3", size: "copy", children: merchandise?.product?.handle ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Link2, { to: `/products/${merchandise.product.handle}`, children: merchandise?.product?.title || "" }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 249,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Text, { children: merchandise?.product?.title || "" }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 253,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 247,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid pb-2", children: (merchandise?.selectedOptions || []).map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Text, { color: "subtle", children: [
          option.name,
          ": ",
          option.value
        ] }, option.name, true, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 259,
          columnNumber: 15
        }, this)) }, void 0, false, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 257,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex justify-start text-copy", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CartLineQuantityAdjust, { line }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 267,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 266,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ItemRemoveButton, { lineIds: [id] }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 269,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Cart.tsx",
          lineNumber: 265,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 246,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CartLinePrice, { line, as: "span" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 273,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 272,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this)
  ] }, id, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 232,
    columnNumber: 5
  }, this);
}
function ItemRemoveButton({ lineIds }) {
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(fetcher.Form, { action: "/cart", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "input",
      {
        type: "hidden",
        name: "cartAction",
        value: "REMOVE_FROM_CART" /* REMOVE_FROM_CART */
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 285,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "linesIds", value: JSON.stringify(lineIds) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 290,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "button",
      {
        className: "flex items-center justify-center w-10 h-10 border rounded",
        type: "submit",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "sr-only", children: "Remove" }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 295,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(IconRemove, { "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 296,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 291,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 284,
    columnNumber: 5
  }, this);
}
function CartLineQuantityAdjust({ line }) {
  if (!line || typeof line?.quantity === "undefined")
    return null;
  const { id: lineId, quantity } = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: `quantity-${lineId}`, className: "sr-only", children: [
      "Quantity, ",
      quantity
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 310,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center border rounded", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(UpdateCartButton, { lines: [{ id: lineId, quantity: prevQuantity }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "button",
        {
          name: "decrease-quantity",
          "aria-label": "Decrease quantity",
          className: "w-10 h-10 transition text-primary/50 hover:text-primary disabled:text-primary/10",
          value: prevQuantity,
          disabled: quantity <= 1,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "\u2212" }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 322,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.tsx",
          lineNumber: 315,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 314,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "px-2 text-center", "data-test": "item-quantity", children: quantity }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 326,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(UpdateCartButton, { lines: [{ id: lineId, quantity: nextQuantity }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "button",
        {
          className: "w-10 h-10 transition text-primary/50 hover:text-primary",
          name: "increase-quantity",
          value: nextQuantity,
          "aria-label": "Increase quantity",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "+" }, void 0, false, {
            fileName: "app/components/Cart.tsx",
            lineNumber: 337,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.tsx",
          lineNumber: 331,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 330,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 313,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 309,
    columnNumber: 5
  }, this);
}
function UpdateCartButton({
  children,
  lines
}) {
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(fetcher.Form, { action: "/cart", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "cartAction", value: "UPDATE_CART" /* UPDATE_CART */ }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 356,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "lines", value: JSON.stringify(lines) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 357,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 355,
    columnNumber: 5
  }, this);
}
function CartLinePrice({
  line,
  priceType = "regular",
  ...passthroughProps
}) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount)
    return null;
  const moneyV2 = priceType === "regular" ? line.cost.totalAmount : line.cost.compareAtAmountPerQuantity;
  if (moneyV2 == null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Money, { withoutTrailingZeros: true, ...passthroughProps, data: moneyV2 }, void 0, false, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 383,
    columnNumber: 10
  }, this);
}
function CartEmpty({
  hidden = false,
  layout = "drawer",
  onClose
}) {
  const scrollRef = (0, import_react31.useRef)(null);
  const { y: y3 } = useScroll_default(scrollRef);
  const container = {
    drawer: clsx_m_default([
      "content-start gap-4 px-6 pb-8 transition overflow-y-scroll md:gap-12 md:px-12 h-screen-no-nav md:pb-12",
      y3 > 0 ? "border-t" : ""
    ]),
    page: clsx_m_default([
      hidden ? "" : "grid",
      `pb-12 w-full md:items-start gap-4 md:gap-8 lg:gap-12`
    ])
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { ref: scrollRef, className: container[layout], hidden, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "grid gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Text, { format: true, children: "Looks like you haven\u2019t added anything yet, let\u2019s get you started!" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 412,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button, { onClick: onClose, children: "Continue shopping" }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 417,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.tsx",
        lineNumber: 416,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 411,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "grid gap-8 pt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      FeaturedProducts,
      {
        count: 4,
        heading: "Shop Best Sellers",
        layout,
        onClose,
        sortKey: "BEST_SELLING"
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.tsx",
        lineNumber: 421,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Cart.tsx",
      lineNumber: 420,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.tsx",
    lineNumber: 410,
    columnNumber: 5
  }, this);
}

// app/components/CartLoading.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
function CartLoading() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex w-full h-screen-no-nav justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 38,
      height: 38,
      viewBox: "0 0 38 38",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("linearGradient", { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("stop", { stopColor: "#fff", stopOpacity: 0, offset: "0%" }, void 0, false, {
            fileName: "app/components/CartLoading.tsx",
            lineNumber: 13,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("stop", { stopColor: "#fff", stopOpacity: ".631", offset: "63.146%" }, void 0, false, {
            fileName: "app/components/CartLoading.tsx",
            lineNumber: 14,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("stop", { stopColor: "#fff", offset: "100%" }, void 0, false, {
            fileName: "app/components/CartLoading.tsx",
            lineNumber: 15,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/CartLoading.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/CartLoading.tsx",
          lineNumber: 11,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("g", { fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("g", { transform: "translate(1 1)", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "path",
            {
              d: "M36 18c0-9.94-8.06-18-18-18",
              id: "Oval-2",
              stroke: "url(#a)",
              strokeWidth: 2,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                "animateTransform",
                {
                  attributeName: "transform",
                  type: "rotate",
                  from: "0 18 18",
                  to: "360 18 18",
                  dur: "0.9s",
                  repeatCount: "indefinite"
                },
                void 0,
                false,
                {
                  fileName: "app/components/CartLoading.tsx",
                  lineNumber: 26,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/components/CartLoading.tsx",
              lineNumber: 20,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("circle", { fill: "#fff", cx: 36, cy: 18, r: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            "animateTransform",
            {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "0.9s",
              repeatCount: "indefinite"
            },
            void 0,
            false,
            {
              fileName: "app/components/CartLoading.tsx",
              lineNumber: 36,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/CartLoading.tsx",
            lineNumber: 35,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/CartLoading.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/CartLoading.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/CartLoading.tsx",
      lineNumber: 5,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/CartLoading.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/OrderCard.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
function OrderCard({ order }) {
  if (!order?.id)
    return null;
  const [legacyOrderId, key] = order.id.split("/").pop().split("?");
  const lineItems = flattenConnection(order?.lineItems);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { className: "grid text-center border rounded", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      Link2,
      {
        className: "grid items-center gap-4 p-4 md:gap-6 md:p-6 md:grid-cols-2",
        to: `/account/orders/${legacyOrderId}?${key}`,
        prefetch: "intent",
        children: [
          lineItems[0].variant?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "card-image aspect-square bg-primary/5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            Image,
            {
              width: 168,
              height: 168,
              className: "w-full fadeIn cover",
              alt: lineItems[0].variant?.image?.altText ?? "Order image",
              src: lineItems[0].variant?.image.url
            },
            void 0,
            false,
            {
              fileName: "app/components/OrderCard.tsx",
              lineNumber: 20,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/OrderCard.tsx",
            lineNumber: 19,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "div",
            {
              className: `flex-col justify-center text-left ${!lineItems[0].variant?.image && "md:col-span-2"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Heading, { as: "h3", format: true, size: "copy", children: lineItems.length > 1 ? `${lineItems[0].title} +${lineItems.length - 1} more` : lineItems[0].title }, void 0, false, {
                  fileName: "app/components/OrderCard.tsx",
                  lineNumber: 34,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("dl", { className: "grid grid-gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("dt", { className: "sr-only", children: "Order ID" }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 40,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("dd", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Text, { size: "fine", color: "subtle", children: [
                    "Order No. ",
                    order.orderNumber
                  ] }, void 0, true, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 42,
                    columnNumber: 15
                  }, this) }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 41,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("dt", { className: "sr-only", children: "Order Date" }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 46,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("dd", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Text, { size: "fine", color: "subtle", children: new Date(order.processedAt).toDateString() }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 48,
                    columnNumber: 15
                  }, this) }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 47,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("dt", { className: "sr-only", children: "Fulfillment Status" }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 52,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("dd", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                    "span",
                    {
                      className: `px-3 py-1 text-xs font-medium rounded-full ${order.fulfillmentStatus === "FULFILLED" ? "bg-green-100 text-green-800" : "bg-primary/5 text-primary/50"}`,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Text, { size: "fine", children: statusMessage(order.fulfillmentStatus) }, void 0, false, {
                        fileName: "app/components/OrderCard.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/OrderCard.tsx",
                      lineNumber: 54,
                      columnNumber: 15
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/OrderCard.tsx",
                    lineNumber: 53,
                    columnNumber: 13
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/OrderCard.tsx",
                  lineNumber: 39,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/OrderCard.tsx",
              lineNumber: 29,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/OrderCard.tsx",
        lineNumber: 13,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "self-end border-t", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      Link2,
      {
        className: "block w-full p-2 text-center",
        to: `/account/orders/${legacyOrderId}?${key}`,
        prefetch: "intent",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Text, { color: "subtle", className: "ml-3", children: "View Details" }, void 0, false, {
          fileName: "app/components/OrderCard.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/OrderCard.tsx",
        lineNumber: 70,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/OrderCard.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/OrderCard.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/AccountDetails.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
function AccountDetails({ customer }) {
  const { firstName, lastName, email, phone } = customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "grid w-full gap-4 p-4 py-6 md:gap-8 md:p-8 lg:p-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { className: "font-bold text-lead", children: "Account Details" }, void 0, false, {
      fileName: "app/components/AccountDetails.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "lg:p-8 p-6 border border-gray-200 rounded", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { className: "font-bold text-base flex-1", children: "Profile & Security" }, void 0, false, {
          fileName: "app/components/AccountDetails.tsx",
          lineNumber: 13,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          Link2,
          {
            prefetch: "intent",
            className: "underline text-sm font-normal",
            to: "/account/edit",
            children: "Edit"
          },
          void 0,
          false,
          {
            fileName: "app/components/AccountDetails.tsx",
            lineNumber: 14,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-4 text-sm text-primary/50", children: "Name" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "mt-1", children: [
        firstName || lastName ? (firstName ? firstName + " " : "") + lastName : "Add name",
        " "
      ] }, void 0, true, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-4 text-sm text-primary/50", children: "Contact" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "mt-1", children: phone ?? "Add mobile" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-4 text-sm text-primary/50", children: "Email address" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "mt-1", children: email }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-4 text-sm text-primary/50", children: "Password" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "mt-1", children: "**************" }, void 0, false, {
        fileName: "app/components/AccountDetails.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AccountDetails.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AccountDetails.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/AccountDetails.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/AccountAddressBook.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
function AccountAddressBook({
  customer,
  addresses
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "grid w-full gap-4 p-4 py-6 md:gap-8 md:p-8 lg:p-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "font-bold text-lead", children: "Address Book" }, void 0, false, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
      !addresses?.length && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Text, { className: "mb-1", width: "narrow", as: "p", size: "copy", children: "You haven't saved any addresses yet." }, void 0, false, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "w-48", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        Button,
        {
          to: "address/add",
          className: "mt-2 text-sm w-full mb-6",
          variant: "secondary",
          children: "Add an Address"
        },
        void 0,
        false,
        {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 26,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      Boolean(addresses?.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: [
        customer.defaultAddress && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Address, { address: customer.defaultAddress, defaultAddress: true }, void 0, false, {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this),
        addresses.filter((address) => address.id !== customer.defaultAddress?.id).map((address) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Address, { address }, address.id, false, {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 42,
          columnNumber: 19
        }, this))
      ] }, void 0, true, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AccountAddressBook.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/AccountAddressBook.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
function Address({
  address,
  defaultAddress
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "lg:p-8 p-6 border border-gray-200 rounded flex flex-col", children: [
    defaultAddress && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mb-3 flex flex-row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary/50", children: "Default" }, void 0, false, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ul", { className: "flex-1 flex-row", children: [
      (address.firstName || address.lastName) && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: "" + (address.firstName && address.firstName + " ") + address?.lastName }, void 0, false, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      address.formatted && address.formatted.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: line }, line, false, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 77,
        columnNumber: 51
      }, this))
    ] }, void 0, true, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-row font-medium mt-6 items-baseline", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        Link2,
        {
          to: `/account/address/${encodeURIComponent(address.id)}`,
          className: "text-left underline text-sm",
          prefetch: "intent",
          children: "Edit"
        },
        void 0,
        false,
        {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 81,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Form, { action: "address/delete", method: "delete", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "hidden", name: "addressId", value: address.id }, void 0, false, {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { className: "text-left text-primary/50 ml-6 text-sm", children: "Remove" }, void 0, false, {
          fileName: "app/components/AccountAddressBook.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/AccountAddressBook.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AccountAddressBook.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AccountAddressBook.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

// app/components/Modal.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
function Modal({
  children,
  cancelLink
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "div",
    {
      className: "relative z-50",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      id: "modal-bg",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "fixed inset-0 transition-opacity bg-opacity-75 bg-primary/40" }, void 0, false, {
          fileName: "app/components/Modal.tsx",
          lineNumber: 18,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "fixed inset-0 z-50 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex items-center justify-center min-h-full p-4 text-center sm:p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          "div",
          {
            className: "relative flex-1 px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform rounded shadow-xl bg-contrast sm:my-12 sm:flex-none sm:w-full sm:max-w-sm sm:p-6",
            role: "button",
            onClick: (e3) => {
              e3.stopPropagation();
            },
            onKeyPress: (e3) => {
              e3.stopPropagation();
            },
            tabIndex: 0,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "absolute top-0 right-0 hidden pt-4 pr-4 sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                Link2,
                {
                  to: cancelLink,
                  className: "p-4 -m-4 transition text-primary hover:text-primary/50",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(IconClose, { "aria-label": "Close panel" }, void 0, false, {
                    fileName: "app/components/Modal.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/Modal.tsx",
                  lineNumber: 33,
                  columnNumber: 15
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/Modal.tsx",
                lineNumber: 32,
                columnNumber: 13
              }, this),
              children
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/Modal.tsx",
            lineNumber: 21,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/Modal.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/components/Modal.tsx",
          lineNumber: 19,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Modal.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}

// app/components/Link.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
function Link2(props) {
  const { to, className, ...resOfProps } = props;
  const [root] = useMatches();
  const selectedLocale = root.data?.selectedLocale;
  let toWithLocale = to;
  if (typeof to === "string") {
    toWithLocale = selectedLocale ? `${selectedLocale.pathPrefix}${to}` : to;
  }
  if (typeof className === "function") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(NavLink, { to: toWithLocale, className, ...resOfProps }, void 0, false, {
      fileName: "app/components/Link.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Link, { to: toWithLocale, className, ...resOfProps }, void 0, false, {
    fileName: "app/components/Link.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}

// app/components/FeaturedCollections.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
function FeaturedCollections({
  collections,
  title = "Collections",
  ...props
}) {
  const haveCollections = collections && collections.length > 0;
  if (!haveCollections)
    return null;
  const items = collections.filter((item) => item.image).length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Section, { ...props, heading: title, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Grid, { items, children: collections.map((collection) => {
    if (!collection?.image) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Link2, { to: `/collections/${collection.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "grid gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "card-image bg-primary/5 aspect-[3/2]", children: collection?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        Image,
        {
          alt: `Image of ${collection.title}`,
          data: collection.image,
          sizes: "(max-width: 32em) 100vw, 33vw",
          aspectRatio: "3/2"
        },
        void 0,
        false,
        {
          fileName: "app/components/FeaturedCollections.tsx",
          lineNumber: 31,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/FeaturedCollections.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Heading, { size: "copy", children: collection.title }, void 0, false, {
        fileName: "app/components/FeaturedCollections.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/FeaturedCollections.tsx",
      lineNumber: 28,
      columnNumber: 15
    }, this) }, collection.id, false, {
      fileName: "app/components/FeaturedCollections.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this);
  }) }, void 0, false, {
    fileName: "app/components/FeaturedCollections.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/FeaturedCollections.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/components/Hero.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
function Hero({
  byline,
  cta,
  handle,
  heading,
  height,
  loading,
  spread,
  spreadSecondary,
  top
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Link2, { to: `/collections/${handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    "section",
    {
      className: clsx_m_default(
        "relative justify-end flex flex-col w-full",
        top && "-mt-nav",
        height === "full" ? "h-screen" : "aspect-[4/5] sm:aspect-square md:aspect-[5/4] lg:aspect-[3/2] xl:aspect-[2/1]"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip", children: [
          spread?.reference && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            SpreadMedia,
            {
              sizes: spreadSecondary?.reference ? "(min-width: 48em) 50vw, 100vw" : "100vw",
              data: spread.reference,
              loading
            },
            void 0,
            false,
            {
              fileName: "app/components/Hero.tsx",
              lineNumber: 52,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/Hero.tsx",
            lineNumber: 51,
            columnNumber: 13
          }, this),
          spreadSecondary?.reference && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            SpreadMedia,
            {
              sizes: "50vw",
              data: spreadSecondary.reference,
              loading
            },
            void 0,
            false,
            {
              fileName: "app/components/Hero.tsx",
              lineNumber: 65,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/Hero.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Hero.tsx",
          lineNumber: 49,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col items-baseline justify-between gap-4 px-6 py-8 sm:px-8 md:px-12 bg-gradient-to-t dark:from-contrast/60 dark:text-primary from-primary/60 text-contrast", children: [
          heading?.value && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Heading, { format: true, as: "h2", size: "display", className: "max-w-md", children: heading.value }, void 0, false, {
            fileName: "app/components/Hero.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          byline?.value && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Text, { format: true, width: "narrow", as: "p", size: "lead", children: byline.value }, void 0, false, {
            fileName: "app/components/Hero.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this),
          cta?.value && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Text, { size: "lead", children: cta.value }, void 0, false, {
            fileName: "app/components/Hero.tsx",
            lineNumber: 84,
            columnNumber: 26
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Hero.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Hero.tsx",
      lineNumber: 40,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/Hero.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
function SpreadMedia({ data, loading, sizes }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    MediaFile,
    {
      data,
      className: "block object-cover w-full h-full",
      mediaOptions: {
        video: {
          controls: false,
          muted: true,
          loop: true,
          playsInline: true,
          autoPlay: true,
          previewImageOptions: { src: data.previewImage?.url ?? "" }
        },
        image: {
          loading,
          crop: "center",
          sizes,
          alt: data.alt || ""
        }
      }
    },
    void 0,
    false,
    {
      fileName: "app/components/Hero.tsx",
      lineNumber: 99,
      columnNumber: 5
    },
    this
  );
}

// app/components/SortFilter.tsx
var import_react35 = __toESM(require_react());
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime());
function SortFilter({
  filters,
  appliedFilters = [],
  children,
  collections = []
}) {
  const [isOpen, setIsOpen] = (0, import_react35.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex items-center justify-between w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          className: "relative flex items-center justify-center w-8 h-8 focus:ring-primary/5",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(IconFilters, {}, void 0, false, {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 59,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(SortMenu, {}, void 0, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col flex-wrap md:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "div",
        {
          className: `transition-all duration-200 ${isOpen ? "opacity-100 min-w-full md:min-w-[240px] md:w-[240px] md:pr-8 max-h-full" : "opacity-0 md:min-w-[0px] md:w-[0px] pr-0 max-h-0 md:max-h-full"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            FiltersDrawer,
            {
              collections,
              filters,
              appliedFilters
            },
            void 0,
            false,
            {
              fileName: "app/components/SortFilter.tsx",
              lineNumber: 71,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 64,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex-1", children }, void 0, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
function FiltersDrawer({
  filters = [],
  appliedFilters = [],
  collections = []
}) {
  const [params] = useSearchParams();
  const location = useLocation();
  const filterMarkup = (filter, option) => {
    switch (filter.type) {
      case "PRICE_RANGE":
        const min = params.has("minPrice") && !isNaN(Number(params.get("minPrice"))) ? Number(params.get("minPrice")) : void 0;
        const max = params.has("maxPrice") && !isNaN(Number(params.get("maxPrice"))) ? Number(params.get("maxPrice")) : void 0;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(PriceRangeFilter, { min, max }, void 0, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 108,
          columnNumber: 16
        }, this);
      default:
        const to = getFilterLink(
          filter,
          option.input,
          params,
          location
        );
        return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          Link,
          {
            className: "focus:underline hover:underline",
            prefetch: "intent",
            to,
            children: option.label
          },
          void 0,
          false,
          {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 118,
            columnNumber: 11
          },
          this
        );
    }
  };
  const collectionsMarkup = collections.map((collection) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("li", { className: "pb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      Link,
      {
        to: `/collections/${collection.handle}`,
        className: "focus:underline hover:underline",
        prefetch: "intent",
        children: collection.title
      },
      collection.handle,
      false,
      {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 132,
        columnNumber: 9
      },
      this
    ) }, collection.handle, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("nav", { className: "py-8", children: [
    appliedFilters.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AppliedFilters, { filters: appliedFilters }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 149,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 148,
      columnNumber: 11
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Heading, { as: "h4", size: "lead", className: "pb-4", children: "Filter By" }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 153,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "divide-y", children: filters.map(
      (filter) => filter.values.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ve, { as: "div", className: "w-full", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ve.Button, { className: "flex justify-between w-full py-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Text, { size: "lead", children: filter.label }, void 0, false, {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 164,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(IconCaret, { direction: open ? "up" : "down" }, void 0, false, {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 165,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 163,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ve.Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("ul", { className: "py-2", children: filter.values?.map((option) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("li", { className: "pb-4", children: filterMarkup(filter, option) }, option.id, false, {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 171,
            columnNumber: 31
          }, this);
        }) }, filter.id, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 168,
          columnNumber: 25
        }, this) }, filter.id, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 167,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 162,
        columnNumber: 21
      }, this) }, filter.id, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 160,
        columnNumber: 17
      }, this)
    ) }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 156,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 146,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 145,
    columnNumber: 5
  }, this);
}
function AppliedFilters({ filters = [] }) {
  const [params] = useSearchParams();
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Heading, { as: "h4", size: "lead", className: "pb-4", children: "Applied filters" }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 194,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: filters.map((filter) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        Link,
        {
          to: getAppliedFilterLink(filter, params, location),
          className: "flex px-2 border rounded-full gap",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: "flex-grow", children: filter.label }, void 0, false, {
              fileName: "app/components/SortFilter.tsx",
              lineNumber: 205,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(IconXMark, {}, void 0, false, {
              fileName: "app/components/SortFilter.tsx",
              lineNumber: 207,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/components/SortFilter.tsx",
              lineNumber: 206,
              columnNumber: 15
            }, this)
          ]
        },
        `${filter.label}-${filter.urlParam}`,
        true,
        {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 200,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 197,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 193,
    columnNumber: 5
  }, this);
}
function getAppliedFilterLink(filter, params, location) {
  const paramsClone = new URLSearchParams(params);
  if (filter.urlParam.key === "variantOption") {
    const variantOptions = paramsClone.getAll("variantOption");
    const filteredVariantOptions = variantOptions.filter(
      (options) => !options.includes(filter.urlParam.value)
    );
    paramsClone.delete(filter.urlParam.key);
    for (const filteredVariantOption of filteredVariantOptions) {
      paramsClone.append(filter.urlParam.key, filteredVariantOption);
    }
  } else {
    paramsClone.delete(filter.urlParam.key);
  }
  return `${location.pathname}?${paramsClone.toString()}`;
}
function getSortLink(sort, params, location) {
  params.set("sort", sort);
  return `${location.pathname}?${params.toString()}`;
}
function getFilterLink(filter, rawInput, params, location) {
  const paramsClone = new URLSearchParams(params);
  const newParams = filterInputToParams(filter.type, rawInput, paramsClone);
  return `${location.pathname}?${newParams.toString()}`;
}
var PRICE_RANGE_FILTER_DEBOUNCE = 500;
function PriceRangeFilter({ max, min }) {
  const location = useLocation();
  const params = (0, import_react35.useMemo)(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const navigate = useNavigate();
  const [minPrice, setMinPrice] = (0, import_react35.useState)(min ? String(min) : "");
  const [maxPrice, setMaxPrice] = (0, import_react35.useState)(max ? String(max) : "");
  useDebounce(
    () => {
      if ((minPrice === "" || minPrice === String(min)) && (maxPrice === "" || maxPrice === String(max)))
        return;
      const price = {};
      if (minPrice !== "")
        price.min = minPrice;
      if (maxPrice !== "")
        price.max = maxPrice;
      const newParams = filterInputToParams("PRICE_RANGE", { price }, params);
      navigate(`${location.pathname}?${newParams.toString()}`);
    },
    PRICE_RANGE_FILTER_DEBOUNCE,
    [minPrice, maxPrice]
  );
  const onChangeMax = (event) => {
    const newMaxPrice = event.target.value;
    setMaxPrice(newMaxPrice);
  };
  const onChangeMin = (event) => {
    const newMinPrice = event.target.value;
    setMinPrice(newMinPrice);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: "from" }, void 0, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 303,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "input",
        {
          name: "maxPrice",
          className: "text-black",
          type: "text",
          defaultValue: min,
          placeholder: "$",
          onChange: onChangeMin
        },
        void 0,
        false,
        {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 304,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 302,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: "to" }, void 0, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 314,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "input",
        {
          name: "minPrice",
          className: "text-black",
          type: "number",
          defaultValue: max,
          placeholder: "$",
          onChange: onChangeMax
        },
        void 0,
        false,
        {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 315,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 313,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 301,
    columnNumber: 5
  }, this);
}
function filterInputToParams(type, rawInput, params) {
  const input = typeof rawInput === "string" ? JSON.parse(rawInput) : rawInput;
  switch (type) {
    case "PRICE_RANGE":
      if (input.price.min)
        params.set("minPrice", input.price.min);
      if (input.price.max)
        params.set("maxPrice", input.price.max);
      break;
    case "LIST":
      Object.entries(input).forEach(([key, value]) => {
        if (typeof value === "string") {
          params.set(key, value);
        } else if (typeof value === "boolean") {
          params.set(key, value.toString());
        } else {
          const { name, value: val } = value;
          const allVariants = params.getAll(`variantOption`);
          const newVariant = `${name}:${val}`;
          if (!allVariants.includes(newVariant)) {
            params.append("variantOption", newVariant);
          }
        }
      });
      break;
  }
  return params;
}
function SortMenu() {
  const items = [
    { label: "Featured", key: "featured" },
    {
      label: "Price: Low - High",
      key: "price-low-high"
    },
    {
      label: "Price: High - Low",
      key: "price-high-low"
    },
    {
      label: "Best Selling",
      key: "best-selling"
    },
    {
      label: "Newest",
      key: "newest"
    }
  ];
  const [params] = useSearchParams();
  const location = useLocation();
  const activeItem = items.find((item) => item.key === params.get("sort"));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ot, { as: "div", className: "relative z-40", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ot.Button, { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: "px-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { className: "px-2 font-medium", children: "Sort by:" }, void 0, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 388,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: (activeItem || items[0]).label }, void 0, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 389,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 387,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(IconCaret, {}, void 0, false, {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 391,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/SortFilter.tsx",
      lineNumber: 386,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      ot.Items,
      {
        as: "nav",
        className: "absolute right-0 flex flex-col p-4 text-right rounded-sm bg-contrast",
        children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ot.Item, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          Link,
          {
            className: `block text-sm pb-2 px-3 ${activeItem?.key === item.key ? "font-bold" : "font-normal"}`,
            to: getSortLink(item.key, params, location),
            children: item.label
          },
          void 0,
          false,
          {
            fileName: "app/components/SortFilter.tsx",
            lineNumber: 401,
            columnNumber: 15
          },
          this
        ) }, item.label, false, {
          fileName: "app/components/SortFilter.tsx",
          lineNumber: 399,
          columnNumber: 11
        }, this))
      },
      void 0,
      false,
      {
        fileName: "app/components/SortFilter.tsx",
        lineNumber: 394,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/SortFilter.tsx",
    lineNumber: 385,
    columnNumber: 5
  }, this);
}

// app/components/Grid.tsx
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime());
function Grid({
  as: Component2 = "div",
  className,
  flow = "row",
  gap = "default",
  items = 4,
  layout = "default",
  ...props
}) {
  const layouts = {
    default: `grid-cols-1 ${items === 2 && "md:grid-cols-2"}  ${items === 3 && "sm:grid-cols-3"} ${items > 3 && "md:grid-cols-3"} ${items >= 4 && "lg:grid-cols-4"}`,
    products: `grid-cols-2 ${items >= 3 && "md:grid-cols-3"} ${items >= 4 && "lg:grid-cols-4"}`,
    auto: "auto-cols-auto",
    blog: "grid-cols-1 md:grid-cols-2"
  };
  const gaps = {
    default: "grid gap-2 gap-y-6 md:gap-4 lg:gap-6",
    blog: "grid gap-6"
  };
  const flows = {
    row: "grid-flow-row",
    col: "grid-flow-col"
  };
  const styles = clsx_m_default(flows[flow], gaps[gap], layouts[layout], className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Component2, { ...props, className: styles }, void 0, false, {
    fileName: "app/components/Grid.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}

// app/components/FeaturedProducts.tsx
var import_react39 = __toESM(require_react());
var import_jsx_dev_runtime21 = __toESM(require_jsx_dev_runtime());
function FeaturedProducts({
  count = 4,
  heading = "Shop Best Sellers",
  layout = "drawer",
  onClose,
  query,
  reverse,
  sortKey = "BEST_SELLING"
}) {
  const { load, data } = useFetcher();
  const queryString = (0, import_react39.useMemo)(
    () => Object.entries({ count, sortKey, query, reverse }).map(([key, val]) => val ? `${key}=${val}` : null).filter(Boolean).join("&"),
    [count, sortKey, query, reverse]
  );
  const productsApiPath = usePrefixPathWithLocale(
    `/api/products?${queryString}`
  );
  (0, import_react39.useEffect)(() => {
    load(productsApiPath);
  }, [load, productsApiPath]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Heading, { format: true, size: "copy", className: "t-4", children: heading }, void 0, false, {
      fileName: "app/components/FeaturedProducts.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      "div",
      {
        className: clsx_m_default([
          `grid grid-cols-2 gap-x-6 gap-y-8`,
          layout === "page" ? "md:grid-cols-4 sm:grid-col-4" : ""
        ]),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          FeatureProductsContent,
          {
            count,
            onClick: onClose,
            products: data?.products
          },
          void 0,
          false,
          {
            fileName: "app/components/FeaturedProducts.tsx",
            lineNumber: 68,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/FeaturedProducts.tsx",
        lineNumber: 62,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/FeaturedProducts.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}
function FeatureProductsContent({
  count = 4,
  onClick,
  products
}) {
  const id = (0, import_react39.useId)();
  if (!products) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [...new Array(count)].map((_2, i5) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "grid gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Skeleton, { className: "aspect-[3/4]" }, void 0, false, {
        fileName: "app/components/FeaturedProducts.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Skeleton, { className: "w-32 h-4" }, void 0, false, {
        fileName: "app/components/FeaturedProducts.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this)
    ] }, `${id + i5}`, true, {
      fileName: "app/components/FeaturedProducts.tsx",
      lineNumber: 96,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/components/FeaturedProducts.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this);
  }
  if (products?.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Text, { format: true, children: "No products found." }, void 0, false, {
      fileName: "app/components/FeaturedProducts.tsx",
      lineNumber: 106,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    ProductCard,
    {
      product,
      onClick,
      quickAdd: true
    },
    product.id,
    false,
    {
      fileName: "app/components/FeaturedProducts.tsx",
      lineNumber: 112,
      columnNumber: 9
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/FeaturedProducts.tsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}

// app/components/Pagination.tsx
var import_react41 = __toESM(require_react());
function Pagination({
  connection,
  children = () => null,
  autoLoadOnScroll = true
}) {
  const { state } = useNavigation();
  const isLoading = state === "loading";
  const autoScrollEnabled = Boolean(autoLoadOnScroll);
  const autoScrollConfig = autoScrollEnabled ? autoLoadOnScroll : {
    threshold: 0,
    rootMargin: "1000px 0px 0px 0px"
  };
  const { ref: nextLinkRef, inView } = useInView(autoScrollConfig);
  const {
    endCursor,
    hasNextPage,
    hasPreviousPage,
    nextPageUrl,
    nodes,
    prevPageUrl,
    startCursor
  } = usePagination(connection);
  useLoadMoreWhenInView({
    disabled: !autoScrollEnabled,
    connection: {
      pageInfo: { startCursor, endCursor, hasPreviousPage, hasNextPage },
      nodes
    },
    inView,
    isLoading
  });
  return children({
    endCursor,
    hasNextPage,
    hasPreviousPage,
    isLoading,
    nextLinkRef,
    nextPageUrl,
    nodes,
    prevPageUrl,
    startCursor
  });
}
function usePagination(connection) {
  const [nodes, setNodes] = (0, import_react41.useState)(connection.nodes);
  const { state, search } = useLocation();
  const params = new URLSearchParams(search);
  const direction = params.get("direction");
  const isPrevious = direction === "previous";
  const { hasNextPage, hasPreviousPage, startCursor, endCursor } = connection.pageInfo;
  const currentPageInfo = (0, import_react41.useMemo)(() => {
    let pageStartCursor = state?.pageInfo?.startCursor === void 0 ? startCursor : state.pageInfo.startCursor;
    let pageEndCursor = state?.pageInfo?.endCursor === void 0 ? endCursor : state.pageInfo.endCursor;
    if (state?.nodes) {
      if (isPrevious) {
        pageStartCursor = startCursor;
      } else {
        pageEndCursor = endCursor;
      }
    }
    const previousPageExists = state?.pageInfo?.hasPreviousPage === void 0 ? hasPreviousPage : state.pageInfo.hasPreviousPage;
    const nextPageExists = state?.pageInfo?.hasNextPage === void 0 ? hasNextPage : state.pageInfo.hasNextPage;
    return {
      startCursor: pageStartCursor,
      endCursor: pageEndCursor,
      hasPreviousPage: previousPageExists,
      hasNextPage: nextPageExists
    };
  }, [isPrevious, state, hasNextPage, hasPreviousPage, startCursor, endCursor]);
  const prevPageUrl = (0, import_react41.useMemo)(() => {
    const params2 = new URLSearchParams(search);
    params2.set("direction", "previous");
    currentPageInfo.startCursor && params2.set("cursor", currentPageInfo.startCursor);
    return `?${params2.toString()}`;
  }, [search, currentPageInfo.startCursor]);
  const nextPageUrl = (0, import_react41.useMemo)(() => {
    const params2 = new URLSearchParams(search);
    params2.set("direction", "next");
    currentPageInfo.endCursor && params2.set("cursor", currentPageInfo.endCursor);
    return `?${params2.toString()}`;
  }, [search, currentPageInfo.endCursor]);
  (0, import_react41.useEffect)(() => {
    if (!state || !state?.nodes) {
      setNodes(connection.nodes);
      return;
    }
    if (isPrevious) {
      setNodes([...connection.nodes, ...state.nodes]);
    } else {
      setNodes([...state.nodes, ...connection.nodes]);
    }
  }, [state, isPrevious, connection.nodes]);
  return { ...currentPageInfo, prevPageUrl, nextPageUrl, nodes };
}
function useLoadMoreWhenInView({
  disabled,
  inView,
  isLoading,
  connection
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    pageInfo: { startCursor, endCursor, hasPreviousPage, hasNextPage },
    nodes
  } = connection;
  (0, import_react41.useEffect)(() => {
    if (!inView)
      return;
    if (!hasNextPage)
      return;
    if (!endCursor)
      return;
    if (disabled)
      return;
    if (isLoading)
      return;
    const nextPageUrl = location.pathname + `?index&cursor=${endCursor}&direction=next`;
    navigate(nextPageUrl, {
      state: {
        pageInfo: {
          endCursor,
          hasPreviousPage,
          startCursor
        },
        nodes
      }
    });
  }, [
    disabled,
    endCursor,
    hasNextPage,
    hasPreviousPage,
    inView,
    isLoading,
    nodes,
    location.pathname,
    navigate,
    startCursor
  ]);
}

// app/components/AddToCartButton.tsx
var import_jsx_dev_runtime22 = __toESM(require_jsx_dev_runtime());
function AddToCartButton({
  children,
  lines,
  className = "",
  variant = "primary",
  width = "full",
  disabled,
  analytics,
  ...props
}) {
  const [root] = useMatches();
  const selectedLocale = root?.data?.selectedLocale;
  const fetcher = useFetcher();
  const fetcherIsNotIdle = fetcher.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(fetcher.Form, { action: "/cart", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "hidden", name: "cartAction", value: "ADD_TO_CART" /* ADD_TO_CART */ }, void 0, false, {
      fileName: "app/components/AddToCartButton.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "hidden", name: "countryCode", value: selectedLocale.country }, void 0, false, {
      fileName: "app/components/AddToCartButton.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "hidden", name: "lines", value: JSON.stringify(lines) }, void 0, false, {
      fileName: "app/components/AddToCartButton.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "hidden", name: "analytics", value: JSON.stringify(analytics) }, void 0, false, {
      fileName: "app/components/AddToCartButton.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      Button,
      {
        as: "button",
        type: "submit",
        width,
        variant,
        className,
        disabled: disabled ?? fetcherIsNotIdle,
        ...props,
        children
      },
      void 0,
      false,
      {
        fileName: "app/components/AddToCartButton.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/AddToCartButton.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/components/Icon.tsx
var import_jsx_dev_runtime23 = __toESM(require_jsx_dev_runtime());
function Icon({
  children,
  className,
  fill = "currentColor",
  stroke,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      ...props,
      fill,
      stroke,
      className: clsx_m_default("w-5 h-5", className),
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/Icon.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}
function IconClose(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Icon, { ...props, stroke: props.stroke || "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("title", { children: "Close" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "line",
      {
        x1: "4.44194",
        y1: "4.30806",
        x2: "15.7556",
        y2: "15.6218",
        strokeWidth: "1.25"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 43,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "line",
      {
        y1: "-0.625",
        x2: "16",
        y2: "-0.625",
        transform: "matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)",
        strokeWidth: "1.25"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 50,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
function IconCaret({
  direction = "down",
  stroke = "currentColor",
  ...props
}) {
  let rotate;
  switch (direction) {
    case "down":
      rotate = "rotate-0";
      break;
    case "up":
      rotate = "rotate-180";
      break;
    case "left":
      rotate = "-rotate-90";
      break;
    case "right":
      rotate = "rotate-90";
      break;
    default:
      rotate = "rotate-0";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    Icon,
    {
      ...props,
      className: `w-5 h-5 transition ${rotate}`,
      fill: "transparent",
      stroke,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("title", { children: "Caret" }, void 0, false, {
          fileName: "app/components/Icon.tsx",
          lineNumber: 120,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M14 8L10 12L6 8", strokeWidth: "1.25" }, void 0, false, {
          fileName: "app/components/Icon.tsx",
          lineNumber: 121,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Icon.tsx",
      lineNumber: 114,
      columnNumber: 5
    },
    this
  );
}
function IconCheck({
  stroke = "currentColor",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Icon, { ...props, fill: "transparent", stroke, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("title", { children: "Check" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 206,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("circle", { cx: "10", cy: "10", r: "7.25", strokeWidth: "1.25" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "m7.04 10.37 2.42 2.41 3.5-5.56"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 208,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 205,
    columnNumber: 5
  }, this);
}
function IconXMark({
  stroke = "currentColor",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Icon, { ...props, fill: "transparent", stroke, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("title", { children: "Delete" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 224,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18L18 6M6 6l12 12"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 225,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 223,
    columnNumber: 5
  }, this);
}
function IconRemove(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Icon, { ...props, fill: "transparent", stroke: props.stroke || "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("title", { children: "Remove" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 237,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "path",
      {
        d: "M4 6H16",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 238,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M8.5 9V14", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 244,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M11.5 9V14", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "path",
      {
        d: "M5.5 6L6 17H14L14.5 6",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 246,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "path",
      {
        d: "M8 6L8 5C8 4 8.75 3 10 3C11.25 3 12 4 12 5V6",
        strokeWidth: "1.25"
      },
      void 0,
      false,
      {
        fileName: "app/components/Icon.tsx",
        lineNumber: 252,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 236,
    columnNumber: 5
  }, this);
}
function IconFilters(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Icon, { ...props, fill: "transparent", stroke: props.stroke || "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("title", { children: "Filters" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 263,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("circle", { cx: "4.5", cy: "6.5", r: "2" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 264,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("line", { x1: "6", y1: "6.5", x2: "14", y2: "6.5" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 265,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("line", { x1: "4.37114e-08", y1: "6.5", x2: "3", y2: "6.5" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 266,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("line", { x1: "4.37114e-08", y1: "13.5", x2: "8", y2: "13.5" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 267,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("line", { x1: "11", y1: "13.5", x2: "14", y2: "13.5" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 268,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("circle", { cx: "9.5", cy: "13.5", r: "2" }, void 0, false, {
      fileName: "app/components/Icon.tsx",
      lineNumber: 269,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Icon.tsx",
    lineNumber: 262,
    columnNumber: 5
  }, this);
}

// app/components/Layout.tsx
var import_react45 = __toESM(require_react());
var import_jsx_dev_runtime24 = __toESM(require_jsx_dev_runtime());
function Layout({
  children,
  layout
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex flex-col min-h-screen", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("a", { href: "#mainContent", className: "sr-only", children: "Skip to content" }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("main", { role: "main", id: "mainContent", className: "flex-grow", children }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Footer, { menu: layout?.footerMenu }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
function Footer({ menu }) {
  const isHome = useIsHomePath();
  const itemsCount = menu ? menu?.items?.length + 1 > 4 ? 4 : menu?.items?.length + 1 : [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
    Section,
    {
      divider: isHome ? "none" : "top",
      as: "footer",
      role: "contentinfo",
      className: `grid min-h-[25rem] items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
        bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(FooterMenu, { menu }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 421,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(CountrySelector, {}, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 422,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          "div",
          {
            className: `self-end pt-8 opacity-50 md:col-span-2 lg:col-span-${itemsCount}`,
            children: [
              "\xA9 ",
              new Date().getFullYear(),
              " / Shopify, Inc. Hydrogen is an MIT Licensed Open Source project."
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/Layout.tsx",
            lineNumber: 423,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 414,
      columnNumber: 5
    },
    this
  );
}
var FooterLink = ({ item }) => {
  if (item.to.startsWith("http")) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("a", { href: item.to, target: item.target, rel: "noopener noreferrer", children: item.title }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 436,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Link2, { to: item.to, target: item.target, prefetch: "intent", children: item.title }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 443,
    columnNumber: 5
  }, this);
};
function FooterMenu({ menu }) {
  const styles = {
    section: "grid gap-4",
    nav: "grid gap-2 pb-6"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: (menu?.items || []).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("section", { className: styles.section, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ve, { children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ve.Button, { className: "text-left md:cursor-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Heading, { className: "flex justify-between", size: "lead", as: "h3", children: [
      item.title,
      item?.items?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(IconCaret, { direction: open ? "up" : "down" }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 467,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 466,
        columnNumber: 23
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 463,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 462,
      columnNumber: 17
    }, this),
    item?.items?.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "div",
      {
        className: `${open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`} overflow-hidden transition-all duration-300`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react45.Suspense, { "data-comment": "This suspense fixes a hydration bug in Disclosure.Panel with static prop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ve.Panel, { static: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("nav", { className: styles.nav, children: item.items.map((subItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(FooterLink, { item: subItem }, subItem.id, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 482,
          columnNumber: 29
        }, this)) }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 480,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 479,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 478,
          columnNumber: 21
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/Layout.tsx",
        lineNumber: 473,
        columnNumber: 19
      },
      this
    ) : null
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 461,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 459,
    columnNumber: 11
  }, this) }, item.id, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 458,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 456,
    columnNumber: 5
  }, this);
}

export {
  l,
  s2 as s,
  o7 as o,
  p2 as p,
  o2,
  I,
  u,
  e2 as e,
  T3 as T,
  h3 as h,
  I3 as I2,
  L,
  s3 as s2,
  y,
  a3 as a,
  x2 as x,
  S,
  X,
  D,
  R,
  r3 as r,
  d2 as d,
  C,
  c3 as c,
  o5 as o3,
  u3 as u2,
  ve,
  Layout,
  clsx_m_default,
  Text,
  Heading,
  Section,
  PageHeader,
  Input,
  ProductGallery,
  getHeroPlaceholder,
  ProductCard,
  ProductSwimlane,
  getImageLoadingPriority,
  ProductGrid,
  Skeleton,
  Button,
  Cart,
  CartLoading,
  OrderCard,
  AccountDetails,
  AccountAddressBook,
  Modal,
  Link2 as Link,
  FeaturedCollections,
  Hero,
  SortFilter,
  Grid,
  Pagination,
  AddToCartButton,
  IconClose,
  IconCaret,
  IconCheck
};
//# sourceMappingURL=/build/_shared/chunk-QAOBPUCY.js.map
