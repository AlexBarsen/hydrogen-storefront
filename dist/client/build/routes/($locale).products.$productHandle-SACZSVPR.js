import {
  MEDIA_FRAGMENT,
  PRODUCT_CARD_FRAGMENT
} from "/build/_shared/chunk-YADXHAZD.js";
import {
  require_seo
} from "/build/_shared/chunk-3J4QUTWW.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  AddToCartButton,
  Button,
  C,
  D,
  Heading,
  I,
  I2,
  IconCaret,
  IconCheck,
  IconClose,
  L,
  Link,
  ProductGallery,
  ProductSwimlane,
  R,
  S,
  Section,
  Skeleton,
  T,
  Text,
  X,
  a,
  c,
  c2,
  clsx_m_default,
  d,
  e,
  h,
  l,
  o,
  o2,
  o3,
  p,
  p2,
  r,
  s,
  s2,
  u,
  u2,
  ve,
  x,
  y
} from "/build/_shared/chunk-OP3M5KPR.js";
import {
  Money,
  ShopPayButton
} from "/build/_shared/chunk-RVY3ADEN.js";
import "/build/_shared/chunk-IIPXH2HL.js";
import {
  getExcerpt
} from "/build/_shared/chunk-SVVM2VD6.js";
import "/build/_shared/chunk-4EH6BNGM.js";
import "/build/_shared/chunk-F6XALK7G.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-X46KOHV3.js";
import {
  Await,
  require_react,
  useLoaderData,
  useLocation,
  useNavigation,
  useSearchParams
} from "/build/_shared/chunk-PZSRRYRD.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($locale).products.$productHandle.tsx
var import_react4 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react = __toESM(require_react(), 1);
function i(e3, o5) {
  let [u3, t] = (0, import_react.useState)(e3), r2 = s(e3);
  return l(() => t(r2.current), [r2, t, ...o5]), u3;
}

// node_modules/@headlessui/react/dist/utils/form.js
function e2(n = {}, r2 = null, t = []) {
  for (let [i2, o5] of Object.entries(n))
    f(t, s4(r2, i2), o5);
  return t;
}
function s4(n, r2) {
  return n ? n + "[" + r2 + "]" : r2;
}
function f(n, r2, t) {
  if (Array.isArray(t))
    for (let [i2, o5] of t.entries())
      f(n, s4(r2, i2.toString()), o5);
  else
    t instanceof Date ? n.push([r2, t.toISOString()]) : typeof t == "boolean" ? n.push([r2, t ? "1" : "0"]) : typeof t == "string" ? n.push([r2, t]) : typeof t == "number" ? n.push([r2, `${t}`]) : t == null ? n.push([r2, ""]) : e2(t, r2, n);
}

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react2 = __toESM(require_react(), 1);
function T2(l2, r2, c3) {
  let [i2, s5] = (0, import_react2.useState)(c3), e3 = l2 !== void 0, t = (0, import_react2.useRef)(e3), u3 = (0, import_react2.useRef)(false), d2 = (0, import_react2.useRef)(false);
  return e3 && !t.current && !u3.current ? (u3.current = true, t.current = e3, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e3 && t.current && !d2.current && (d2.current = true, t.current = e3, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e3 ? l2 : i2, o2((n) => (e3 || s5(n), r2 == null ? void 0 : r2(n)))];
}

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react3 = __toESM(require_react(), 1);
var Ue = ((o5) => (o5[o5.Open = 0] = "Open", o5[o5.Closed = 1] = "Closed", o5))(Ue || {});
var Be = ((o5) => (o5[o5.Single = 0] = "Single", o5[o5.Multi = 1] = "Multi", o5))(Be || {});
var He = ((o5) => (o5[o5.Pointer = 0] = "Pointer", o5[o5.Other = 1] = "Other", o5))(He || {});
var Ge = ((i2) => (i2[i2.OpenListbox = 0] = "OpenListbox", i2[i2.CloseListbox = 1] = "CloseListbox", i2[i2.GoToOption = 2] = "GoToOption", i2[i2.Search = 3] = "Search", i2[i2.ClearSearch = 4] = "ClearSearch", i2[i2.RegisterOption = 5] = "RegisterOption", i2[i2.UnregisterOption = 6] = "UnregisterOption", i2[i2.RegisterLabel = 7] = "RegisterLabel", i2))(Ge || {});
function X2(e3, a2 = (o5) => o5) {
  let o5 = e3.activeOptionIndex !== null ? e3.options[e3.activeOptionIndex] : null, r2 = I2(a2(e3.options.slice()), (t) => t.dataRef.current.domRef.current), l2 = o5 ? r2.indexOf(o5) : null;
  return l2 === -1 && (l2 = null), { options: r2, activeOptionIndex: l2 };
}
var Ne = { [1](e3) {
  return e3.dataRef.current.disabled || e3.listboxState === 1 ? e3 : { ...e3, activeOptionIndex: null, listboxState: 1 };
}, [0](e3) {
  if (e3.dataRef.current.disabled || e3.listboxState === 0)
    return e3;
  let a2 = e3.activeOptionIndex, { isSelected: o5 } = e3.dataRef.current, r2 = e3.options.findIndex((l2) => o5(l2.dataRef.current.value));
  return r2 !== -1 && (a2 = r2), { ...e3, listboxState: 0, activeOptionIndex: a2 };
}, [2](e3, a2) {
  var l2;
  if (e3.dataRef.current.disabled || e3.listboxState === 1)
    return e3;
  let o5 = X2(e3), r2 = x(a2, { resolveItems: () => o5.options, resolveActiveIndex: () => o5.activeOptionIndex, resolveId: (t) => t.id, resolveDisabled: (t) => t.dataRef.current.disabled });
  return { ...e3, ...o5, searchQuery: "", activeOptionIndex: r2, activationTrigger: (l2 = a2.trigger) != null ? l2 : 1 };
}, [3]: (e3, a2) => {
  if (e3.dataRef.current.disabled || e3.listboxState === 1)
    return e3;
  let r2 = e3.searchQuery !== "" ? 0 : 1, l2 = e3.searchQuery + a2.value.toLowerCase(), p3 = (e3.activeOptionIndex !== null ? e3.options.slice(e3.activeOptionIndex + r2).concat(e3.options.slice(0, e3.activeOptionIndex + r2)) : e3.options).find((i2) => {
    var b;
    return !i2.dataRef.current.disabled && ((b = i2.dataRef.current.textValue) == null ? void 0 : b.startsWith(l2));
  }), u3 = p3 ? e3.options.indexOf(p3) : -1;
  return u3 === -1 || u3 === e3.activeOptionIndex ? { ...e3, searchQuery: l2 } : { ...e3, searchQuery: l2, activeOptionIndex: u3, activationTrigger: 1 };
}, [4](e3) {
  return e3.dataRef.current.disabled || e3.listboxState === 1 || e3.searchQuery === "" ? e3 : { ...e3, searchQuery: "" };
}, [5]: (e3, a2) => {
  let o5 = { id: a2.id, dataRef: a2.dataRef }, r2 = X2(e3, (l2) => [...l2, o5]);
  return e3.activeOptionIndex === null && e3.dataRef.current.isSelected(a2.dataRef.current.value) && (r2.activeOptionIndex = r2.options.indexOf(o5)), { ...e3, ...r2 };
}, [6]: (e3, a2) => {
  let o5 = X2(e3, (r2) => {
    let l2 = r2.findIndex((t) => t.id === a2.id);
    return l2 !== -1 && r2.splice(l2, 1), r2;
  });
  return { ...e3, ...o5, activationTrigger: 1 };
}, [7]: (e3, a2) => ({ ...e3, labelId: a2.id }) };
var $ = (0, import_react3.createContext)(null);
$.displayName = "ListboxActionsContext";
function U(e3) {
  let a2 = (0, import_react3.useContext)($);
  if (a2 === null) {
    let o5 = new Error(`<${e3} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o5, U), o5;
  }
  return a2;
}
var z = (0, import_react3.createContext)(null);
z.displayName = "ListboxDataContext";
function B(e3) {
  let a2 = (0, import_react3.useContext)(z);
  if (a2 === null) {
    let o5 = new Error(`<${e3} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o5, B), o5;
  }
  return a2;
}
function je(e3, a2) {
  return u(a2.type, Ne, e3, a2);
}
var Ve = import_react3.Fragment;
function Ke(e3, a2) {
  let { value: o5, defaultValue: r2, form: l2, name: t, onChange: p3, by: u3 = (s5, d2) => s5 === d2, disabled: i2 = false, horizontal: b = false, multiple: R2 = false, ...m } = e3;
  const P = b ? "horizontal" : "vertical";
  let E = y(a2), [L2 = R2 ? [] : void 0, v] = T2(o5, p3, r2), [c3, n] = (0, import_react3.useReducer)(je, { dataRef: (0, import_react3.createRef)(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), x2 = (0, import_react3.useRef)({ static: false, hold: false }), h2 = (0, import_react3.useRef)(null), Q = (0, import_react3.useRef)(null), J = (0, import_react3.useRef)(null), y2 = o2(typeof u3 == "string" ? (s5, d2) => {
    let O = u3;
    return (s5 == null ? void 0 : s5[O]) === (d2 == null ? void 0 : d2[O]);
  } : u3), S2 = (0, import_react3.useCallback)((s5) => u(T3.mode, { [1]: () => L2.some((d2) => y2(d2, s5)), [0]: () => y2(L2, s5) }), [L2]), T3 = (0, import_react3.useMemo)(() => ({ ...c3, value: L2, disabled: i2, mode: R2 ? 1 : 0, orientation: P, compare: y2, isSelected: S2, optionsPropsRef: x2, labelRef: h2, buttonRef: Q, optionsRef: J }), [L2, i2, R2, c3]);
  l(() => {
    c3.dataRef.current = T3;
  }, [T3]), L([T3.buttonRef, T3.optionsRef], (s5, d2) => {
    var O;
    n({ type: 1 }), h(d2, T.Loose) || (s5.preventDefault(), (O = T3.buttonRef.current) == null || O.focus());
  }, T3.listboxState === 0);
  let ne = (0, import_react3.useMemo)(() => ({ open: T3.listboxState === 0, disabled: i2, value: L2 }), [T3, i2, L2]), ie = o2((s5) => {
    let d2 = T3.options.find((O) => O.id === s5);
    d2 && F(d2.dataRef.current.value);
  }), re = o2(() => {
    if (T3.activeOptionIndex !== null) {
      let { dataRef: s5, id: d2 } = T3.options[T3.activeOptionIndex];
      F(s5.current.value), n({ type: 2, focus: a.Specific, id: d2 });
    }
  }), ae = o2(() => n({ type: 0 })), le = o2(() => n({ type: 1 })), se = o2((s5, d2, O) => s5 === a.Specific ? n({ type: 2, focus: a.Specific, id: d2, trigger: O }) : n({ type: 2, focus: s5, trigger: O })), pe = o2((s5, d2) => (n({ type: 5, id: s5, dataRef: d2 }), () => n({ type: 6, id: s5 }))), ue = o2((s5) => (n({ type: 7, id: s5 }), () => n({ type: 7, id: null }))), F = o2((s5) => u(T3.mode, { [0]() {
    return v == null ? void 0 : v(s5);
  }, [1]() {
    let d2 = T3.value.slice(), O = d2.findIndex((M) => y2(M, s5));
    return O === -1 ? d2.push(s5) : d2.splice(O, 1), v == null ? void 0 : v(d2);
  } })), de = o2((s5) => n({ type: 3, value: s5 })), ce = o2(() => n({ type: 4 })), fe = (0, import_react3.useMemo)(() => ({ onChange: F, registerOption: pe, registerLabel: ue, goToOption: se, closeListbox: le, openListbox: ae, selectActiveOption: re, selectOption: ie, search: de, clearSearch: ce }), []), Te = { ref: E }, H = (0, import_react3.useRef)(null), be = p();
  return (0, import_react3.useEffect)(() => {
    H.current && r2 !== void 0 && be.addEventListener(H.current, "reset", () => {
      F(r2);
    });
  }, [H, F]), import_react3.default.createElement($.Provider, { value: fe }, import_react3.default.createElement(z.Provider, { value: T3 }, import_react3.default.createElement(c2, { value: u(T3.listboxState, { [0]: d.Open, [1]: d.Closed }) }, t != null && L2 != null && e2({ [t]: L2 }).map(([s5, d2], O) => import_react3.default.createElement(c, { features: p2.Hidden, ref: O === 0 ? (M) => {
    var q;
    H.current = (q = M == null ? void 0 : M.closest("form")) != null ? q : null;
  } : void 0, ...R({ key: s5, as: "input", type: "hidden", hidden: true, readOnly: true, form: l2, name: s5, value: d2 }) })), X({ ourProps: Te, theirProps: m, slot: ne, defaultTag: Ve, name: "Listbox" }))));
}
var Qe = "button";
function We(e3, a2) {
  var v;
  let o5 = I(), { id: r2 = `headlessui-listbox-button-${o5}`, ...l2 } = e3, t = B("Listbox.Button"), p3 = U("Listbox.Button"), u3 = y(t.buttonRef, a2), i2 = p(), b = o2((c3) => {
    switch (c3.key) {
      case o3.Space:
      case o3.Enter:
      case o3.ArrowDown:
        c3.preventDefault(), p3.openListbox(), i2.nextFrame(() => {
          t.value || p3.goToOption(a.First);
        });
        break;
      case o3.ArrowUp:
        c3.preventDefault(), p3.openListbox(), i2.nextFrame(() => {
          t.value || p3.goToOption(a.Last);
        });
        break;
    }
  }), R2 = o2((c3) => {
    switch (c3.key) {
      case o3.Space:
        c3.preventDefault();
        break;
    }
  }), m = o2((c3) => {
    if (r(c3.currentTarget))
      return c3.preventDefault();
    t.listboxState === 0 ? (p3.closeListbox(), i2.nextFrame(() => {
      var n;
      return (n = t.buttonRef.current) == null ? void 0 : n.focus({ preventScroll: true });
    })) : (c3.preventDefault(), p3.openListbox());
  }), P = i(() => {
    if (t.labelId)
      return [t.labelId, r2].join(" ");
  }, [t.labelId, r2]), E = (0, import_react3.useMemo)(() => ({ open: t.listboxState === 0, disabled: t.disabled, value: t.value }), [t]), L2 = { ref: u3, id: r2, type: s2(e3, t.buttonRef), "aria-haspopup": "listbox", "aria-controls": (v = t.optionsRef.current) == null ? void 0 : v.id, "aria-expanded": t.disabled ? void 0 : t.listboxState === 0, "aria-labelledby": P, disabled: t.disabled, onKeyDown: b, onKeyUp: R2, onClick: m };
  return X({ ourProps: L2, theirProps: l2, slot: E, defaultTag: Qe, name: "Listbox.Button" });
}
var Xe = "label";
function $e(e3, a2) {
  let o5 = I(), { id: r2 = `headlessui-listbox-label-${o5}`, ...l2 } = e3, t = B("Listbox.Label"), p3 = U("Listbox.Label"), u3 = y(t.labelRef, a2);
  l(() => p3.registerLabel(r2), [r2]);
  let i2 = o2(() => {
    var m;
    return (m = t.buttonRef.current) == null ? void 0 : m.focus({ preventScroll: true });
  }), b = (0, import_react3.useMemo)(() => ({ open: t.listboxState === 0, disabled: t.disabled }), [t]);
  return X({ ourProps: { ref: u3, id: r2, onClick: i2 }, theirProps: l2, slot: b, defaultTag: Xe, name: "Listbox.Label" });
}
var ze = "ul";
var Je = S.RenderStrategy | S.Static;
function qe(e3, a2) {
  var c3;
  let o5 = I(), { id: r2 = `headlessui-listbox-options-${o5}`, ...l2 } = e3, t = B("Listbox.Options"), p3 = U("Listbox.Options"), u3 = y(t.optionsRef, a2), i2 = p(), b = p(), R2 = C(), m = (() => R2 !== null ? (R2 & d.Open) === d.Open : t.listboxState === 0)();
  (0, import_react3.useEffect)(() => {
    var x2;
    let n = t.optionsRef.current;
    n && t.listboxState === 0 && n !== ((x2 = e(n)) == null ? void 0 : x2.activeElement) && n.focus({ preventScroll: true });
  }, [t.listboxState, t.optionsRef]);
  let P = o2((n) => {
    switch (b.dispose(), n.key) {
      case o3.Space:
        if (t.searchQuery !== "")
          return n.preventDefault(), n.stopPropagation(), p3.search(n.key);
      case o3.Enter:
        if (n.preventDefault(), n.stopPropagation(), t.activeOptionIndex !== null) {
          let { dataRef: x2 } = t.options[t.activeOptionIndex];
          p3.onChange(x2.current.value);
        }
        t.mode === 0 && (p3.closeListbox(), o().nextFrame(() => {
          var x2;
          return (x2 = t.buttonRef.current) == null ? void 0 : x2.focus({ preventScroll: true });
        }));
        break;
      case u(t.orientation, { vertical: o3.ArrowDown, horizontal: o3.ArrowRight }):
        return n.preventDefault(), n.stopPropagation(), p3.goToOption(a.Next);
      case u(t.orientation, { vertical: o3.ArrowUp, horizontal: o3.ArrowLeft }):
        return n.preventDefault(), n.stopPropagation(), p3.goToOption(a.Previous);
      case o3.Home:
      case o3.PageUp:
        return n.preventDefault(), n.stopPropagation(), p3.goToOption(a.First);
      case o3.End:
      case o3.PageDown:
        return n.preventDefault(), n.stopPropagation(), p3.goToOption(a.Last);
      case o3.Escape:
        return n.preventDefault(), n.stopPropagation(), p3.closeListbox(), i2.nextFrame(() => {
          var x2;
          return (x2 = t.buttonRef.current) == null ? void 0 : x2.focus({ preventScroll: true });
        });
      case o3.Tab:
        n.preventDefault(), n.stopPropagation();
        break;
      default:
        n.key.length === 1 && (p3.search(n.key), b.setTimeout(() => p3.clearSearch(), 350));
        break;
    }
  }), E = i(() => {
    var n, x2, h2;
    return (h2 = (n = t.labelRef.current) == null ? void 0 : n.id) != null ? h2 : (x2 = t.buttonRef.current) == null ? void 0 : x2.id;
  }, [t.labelRef.current, t.buttonRef.current]), L2 = (0, import_react3.useMemo)(() => ({ open: t.listboxState === 0 }), [t]), v = { "aria-activedescendant": t.activeOptionIndex === null || (c3 = t.options[t.activeOptionIndex]) == null ? void 0 : c3.id, "aria-multiselectable": t.mode === 1 ? true : void 0, "aria-labelledby": E, "aria-orientation": t.orientation, id: r2, onKeyDown: P, role: "listbox", tabIndex: 0, ref: u3 };
  return X({ ourProps: v, theirProps: l2, slot: L2, defaultTag: ze, features: Je, visible: m, name: "Listbox.Options" });
}
var Ye = "li";
function Ze(e3, a2) {
  let o5 = I(), { id: r2 = `headlessui-listbox-option-${o5}`, disabled: l2 = false, value: t, ...p3 } = e3, u3 = B("Listbox.Option"), i2 = U("Listbox.Option"), b = u3.activeOptionIndex !== null ? u3.options[u3.activeOptionIndex].id === r2 : false, R2 = u3.isSelected(t), m = (0, import_react3.useRef)(null), P = s({ disabled: l2, value: t, domRef: m, get textValue() {
    var y2, S2;
    return (S2 = (y2 = m.current) == null ? void 0 : y2.textContent) == null ? void 0 : S2.toLowerCase();
  } }), E = y(a2, m);
  l(() => {
    if (u3.listboxState !== 0 || !b || u3.activationTrigger === 0)
      return;
    let y2 = o();
    return y2.requestAnimationFrame(() => {
      var S2, T3;
      (T3 = (S2 = m.current) == null ? void 0 : S2.scrollIntoView) == null || T3.call(S2, { block: "nearest" });
    }), y2.dispose;
  }, [m, b, u3.listboxState, u3.activationTrigger, u3.activeOptionIndex]), l(() => i2.registerOption(r2, P), [P, r2]);
  let L2 = o2((y2) => {
    if (l2)
      return y2.preventDefault();
    i2.onChange(t), u3.mode === 0 && (i2.closeListbox(), o().nextFrame(() => {
      var S2;
      return (S2 = u3.buttonRef.current) == null ? void 0 : S2.focus({ preventScroll: true });
    }));
  }), v = o2(() => {
    if (l2)
      return i2.goToOption(a.Nothing);
    i2.goToOption(a.Specific, r2);
  }), c3 = u2(), n = o2((y2) => c3.update(y2)), x2 = o2((y2) => {
    c3.wasMoved(y2) && (l2 || b || i2.goToOption(a.Specific, r2, 0));
  }), h2 = o2((y2) => {
    c3.wasMoved(y2) && (l2 || b && i2.goToOption(a.Nothing));
  }), Q = (0, import_react3.useMemo)(() => ({ active: b, selected: R2, disabled: l2 }), [b, R2, l2]);
  return X({ ourProps: { id: r2, ref: E, role: "option", tabIndex: l2 === true ? void 0 : -1, "aria-disabled": l2 === true ? true : void 0, "aria-selected": R2, disabled: void 0, onClick: L2, onFocus: v, onPointerEnter: n, onMouseEnter: n, onPointerMove: x2, onMouseMove: x2, onPointerLeave: h2, onMouseLeave: h2 }, theirProps: p3, slot: Q, defaultTag: Ye, name: "Listbox.Option" });
}
var et = D(Ke);
var tt = D(We);
var ot = D($e);
var nt = D(qe);
var it = D(Ze);
var Ht = Object.assign(et, { Button: tt, Label: ot, Options: nt, Option: it });

// app/routes/($locale).products.$productHandle.tsx
var import_seo = __toESM(require_seo());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Product() {
  const { product, shop, recommended } = useLoaderData();
  const { media, title, vendor, descriptionHtml } = product;
  const { shippingPolicy, refundPolicy } = shop;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { className: "px-0 md:px-8 lg:px-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid items-start md:gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ProductGallery,
        {
          media: media.nodes,
          className: "w-full lg:col-span-2"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 127,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sticky md:-mb-nav md:top-nav md:-translate-y-nav md:h-screen md:pt-nav hiddenScroll md:overflow-y-scroll", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex flex-col w-full max-w-xl gap-8 p-6 md:mx-auto md:max-w-sm md:px-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { as: "h1", className: "whitespace-normal", children: title }, void 0, false, {
            fileName: "app/routes/($locale).products.$productHandle.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, this),
          vendor && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "opacity-50 font-medium", children: vendor }, void 0, false, {
            fileName: "app/routes/($locale).products.$productHandle.tsx",
            lineNumber: 138,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductForm, {}, void 0, false, {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 141,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 py-4", children: [
          descriptionHtml && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ProductDetail,
            {
              title: "Product Details",
              content: descriptionHtml
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$productHandle.tsx",
              lineNumber: 144,
              columnNumber: 19
            },
            this
          ),
          shippingPolicy?.body && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ProductDetail,
            {
              title: "Shipping",
              content: getExcerpt(shippingPolicy.body),
              learnMore: `/policies/${shippingPolicy.handle}`
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$productHandle.tsx",
              lineNumber: 150,
              columnNumber: 19
            },
            this
          ),
          refundPolicy?.body && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ProductDetail,
            {
              title: "Returns",
              content: getExcerpt(refundPolicy.body),
              learnMore: `/policies/${refundPolicy.handle}`
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$productHandle.tsx",
              lineNumber: 157,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 142,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$productHandle.tsx",
        lineNumber: 132,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).products.$productHandle.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$productHandle.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).products.$productHandle.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-32" }, void 0, false, {
      fileName: "app/routes/($locale).products.$productHandle.tsx",
      lineNumber: 168,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Await,
      {
        errorElement: "There was a problem loading related products",
        resolve: recommended,
        children: (products) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductSwimlane, { title: "Related Products", products }, void 0, false, {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$productHandle.tsx",
        lineNumber: 169,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).products.$productHandle.tsx",
      lineNumber: 168,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$productHandle.tsx",
    lineNumber: 124,
    columnNumber: 5
  }, this);
}
function ProductForm() {
  const { product, analytics, storeDomain } = useLoaderData();
  const [currentSearchParams] = useSearchParams();
  const { location } = useNavigation();
  const searchParams = (0, import_react4.useMemo)(() => {
    return location ? new URLSearchParams(location.search) : currentSearchParams;
  }, [currentSearchParams, location]);
  const firstVariant = product.variants.nodes[0];
  const searchParamsWithDefaults = (0, import_react4.useMemo)(() => {
    const clonedParams = new URLSearchParams(searchParams);
    for (const { name, value } of firstVariant.selectedOptions) {
      if (!searchParams.has(name)) {
        clonedParams.set(name, value);
      }
    }
    return clonedParams;
  }, [searchParams, firstVariant.selectedOptions]);
  const selectedVariant = product.selectedVariant ?? firstVariant;
  const isOutOfStock = !selectedVariant?.availableForSale;
  const isOnSale = selectedVariant?.price?.amount && selectedVariant?.compareAtPrice?.amount && selectedVariant?.price?.amount < selectedVariant?.compareAtPrice?.amount;
  const productAnalytics = {
    ...analytics.products[0],
    quantity: 1
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ProductOptions,
      {
        options: product.options,
        searchParamsWithDefaults
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$productHandle.tsx",
        lineNumber: 240,
        columnNumber: 9
      },
      this
    ),
    selectedVariant && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid items-stretch gap-4", children: [
      isOutOfStock ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", disabled: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Sold out" }, void 0, false, {
        fileName: "app/routes/($locale).products.$productHandle.tsx",
        lineNumber: 248,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).products.$productHandle.tsx",
        lineNumber: 247,
        columnNumber: 15
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        AddToCartButton,
        {
          lines: [
            {
              merchandiseId: selectedVariant.id,
              quantity: 1
            }
          ],
          variant: "primary",
          "data-test": "add-to-cart",
          analytics: {
            products: [productAnalytics],
            totalValue: parseFloat(productAnalytics.price)
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Text,
            {
              as: "span",
              className: "flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Add to Cart" }, void 0, false, {
                  fileName: "app/routes/($locale).products.$productHandle.tsx",
                  lineNumber: 269,
                  columnNumber: 19
                }, this),
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\xB7" }, void 0, false, {
                  fileName: "app/routes/($locale).products.$productHandle.tsx",
                  lineNumber: 269,
                  columnNumber: 44
                }, this),
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Money,
                  {
                    withoutTrailingZeros: true,
                    data: selectedVariant?.price,
                    as: "span"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/($locale).products.$productHandle.tsx",
                    lineNumber: 270,
                    columnNumber: 19
                  },
                  this
                ),
                isOnSale && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Money,
                  {
                    withoutTrailingZeros: true,
                    data: selectedVariant?.compareAtPrice,
                    as: "span",
                    className: "opacity-50 strike"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/($locale).products.$productHandle.tsx",
                    lineNumber: 276,
                    columnNumber: 21
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/($locale).products.$productHandle.tsx",
              lineNumber: 265,
              columnNumber: 17
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 251,
          columnNumber: 15
        },
        this
      ),
      !isOutOfStock && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ShopPayButton,
        {
          width: "100%",
          variantIds: [selectedVariant?.id],
          storeDomain
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 287,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$productHandle.tsx",
      lineNumber: 245,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$productHandle.tsx",
    lineNumber: 239,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).products.$productHandle.tsx",
    lineNumber: 238,
    columnNumber: 5
  }, this);
}
function ProductOptions({
  options,
  searchParamsWithDefaults
}) {
  const closeRef = (0, import_react4.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: options.filter((option) => option.values.length > 1).map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "flex flex-col flex-wrap mb-4 gap-y-2 last:mb-0",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { as: "legend", size: "lead", className: "min-w-[4rem]", children: option.name }, void 0, false, {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 317,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-baseline gap-4", children: option.values.length > 7 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ht, { children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Ht.Button,
            {
              ref: closeRef,
              className: clsx_m_default(
                "flex items-center justify-between w-full py-3 px-4 border border-primary",
                open ? "rounded-b md:rounded-t md:rounded-b-none" : "rounded"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: searchParamsWithDefaults.get(option.name) }, void 0, false, {
                  fileName: "app/routes/($locale).products.$productHandle.tsx",
                  lineNumber: 343,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconCaret, { direction: open ? "up" : "down" }, void 0, false, {
                  fileName: "app/routes/($locale).products.$productHandle.tsx",
                  lineNumber: 346,
                  columnNumber: 27
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/($locale).products.$productHandle.tsx",
              lineNumber: 334,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Ht.Options,
            {
              className: clsx_m_default(
                "border-primary bg-contrast absolute bottom-12 z-30 grid h-48 w-full overflow-y-scroll rounded-t border px-2 py-2 transition-[max-height] duration-150 sm:bottom-auto md:rounded-b md:rounded-t-none md:border-t-0 md:border-b",
                open ? "max-h-48" : "max-h-0"
              ),
              children: option.values.map((value) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Ht.Option,
                {
                  value,
                  children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    ProductOptionLink,
                    {
                      optionName: option.name,
                      optionValue: value,
                      className: clsx_m_default(
                        "text-primary w-full p-2 transition rounded flex justify-start items-center text-left cursor-pointer",
                        active && "bg-primary/10"
                      ),
                      searchParams: searchParamsWithDefaults,
                      onClick: () => {
                        if (!closeRef?.current)
                          return;
                        closeRef.current.click();
                      },
                      children: [
                        value,
                        searchParamsWithDefaults.get(option.name) === value && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconCheck, {}, void 0, false, {
                          fileName: "app/routes/($locale).products.$productHandle.tsx",
                          lineNumber: 377,
                          columnNumber: 39
                        }, this) }, void 0, false, {
                          fileName: "app/routes/($locale).products.$productHandle.tsx",
                          lineNumber: 376,
                          columnNumber: 37
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/routes/($locale).products.$productHandle.tsx",
                      lineNumber: 360,
                      columnNumber: 33
                    },
                    this
                  )
                },
                `option-${option.name}-${value}`,
                false,
                {
                  fileName: "app/routes/($locale).products.$productHandle.tsx",
                  lineNumber: 355,
                  columnNumber: 29
                },
                this
              ))
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$productHandle.tsx",
              lineNumber: 348,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 333,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 331,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 330,
          columnNumber: 17
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: option.values.map((value) => {
          const checked = searchParamsWithDefaults.get(option.name) === value;
          const id = `option-${option.name}-${value}`;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ProductOptionLink,
            {
              optionName: option.name,
              optionValue: value,
              searchParams: searchParamsWithDefaults,
              className: clsx_m_default(
                "leading-none py-1 border-b-[1.5px] cursor-pointer transition-all duration-200",
                checked ? "border-primary/50" : "border-primary/0"
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$productHandle.tsx",
              lineNumber: 398,
              columnNumber: 25
            },
            this
          ) }, id, false, {
            fileName: "app/routes/($locale).products.$productHandle.tsx",
            lineNumber: 397,
            columnNumber: 23
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 390,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 320,
          columnNumber: 13
        }, this)
      ]
    },
    option.name,
    true,
    {
      fileName: "app/routes/($locale).products.$productHandle.tsx",
      lineNumber: 313,
      columnNumber: 11
    },
    this
  )) }, void 0, false, {
    fileName: "app/routes/($locale).products.$productHandle.tsx",
    lineNumber: 309,
    columnNumber: 5
  }, this);
}
function ProductOptionLink({
  optionName,
  optionValue,
  searchParams,
  children,
  ...props
}) {
  const { pathname } = useLocation();
  const isLocalePathname = /\/[a-zA-Z]{2}-[a-zA-Z]{2}\//g.test(pathname);
  const path = isLocalePathname ? `/${pathname.split("/").slice(2).join("/")}` : pathname;
  const clonedSearchParams = new URLSearchParams(searchParams);
  clonedSearchParams.set(optionName, optionValue);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Link,
    {
      ...props,
      preventScrollReset: true,
      prefetch: "intent",
      replace: true,
      to: `${path}?${clonedSearchParams.toString()}`,
      children: children ?? optionValue
    },
    void 0,
    false,
    {
      fileName: "app/routes/($locale).products.$productHandle.tsx",
      lineNumber: 443,
      columnNumber: 5
    },
    this
  );
}
function ProductDetail({
  title,
  content,
  learnMore
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve, { as: "div", className: "grid w-full gap-2", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Button, { className: "text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { size: "lead", as: "h4", children: title }, void 0, false, {
        fileName: "app/routes/($locale).products.$productHandle.tsx",
        lineNumber: 470,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        IconClose,
        {
          className: clsx_m_default(
            "transition-transform transform-gpu duration-200",
            !open && "rotate-[45deg]"
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 473,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$productHandle.tsx",
      lineNumber: 469,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).products.$productHandle.tsx",
      lineNumber: 468,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Panel, { className: "pb-4 pt-2 grid gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "prose dark:prose-invert",
          dangerouslySetInnerHTML: { __html: content }
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 483,
          columnNumber: 13
        },
        this
      ),
      learnMore && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          className: "pb-px border-b border-primary/30 text-primary/50",
          to: learnMore,
          children: "Learn more"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).products.$productHandle.tsx",
          lineNumber: 489,
          columnNumber: 17
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($locale).products.$productHandle.tsx",
        lineNumber: 488,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$productHandle.tsx",
      lineNumber: 482,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$productHandle.tsx",
    lineNumber: 467,
    columnNumber: 9
  }, this) }, title, false, {
    fileName: "app/routes/($locale).products.$productHandle.tsx",
    lineNumber: 465,
    columnNumber: 5
  }, this);
}
var PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariantFragment on ProductVariant {
    id
    availableForSale
    selectedOptions {
      name
      value
    }
    image {
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    compareAtPrice {
      amount
      currencyCode
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
  }
`;
var PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      vendor
      handle
      descriptionHtml
      description
      options {
        name
        values
      }
      selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
        ...ProductVariantFragment
      }
      media(first: 7) {
        nodes {
          ...Media
        }
      }
      variants(first: 1) {
        nodes {
          ...ProductVariantFragment
        }
      }
      seo {
        description
        title
      }
    }
    shop {
      name
      primaryDomain {
        url
      }
      shippingPolicy {
        body
        handle
      }
      refundPolicy {
        body
        handle
      }
    }
  }
  ${MEDIA_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
`;
var RECOMMENDED_PRODUCTS_QUERY = `#graphql
  query productRecommendations(
    $productId: ID!
    $count: Int
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    recommended: productRecommendations(productId: $productId) {
      ...ProductCard
    }
    additional: products(first: $count, sortKey: BEST_SELLING) {
      nodes {
        ...ProductCard
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
`;
export {
  Product as default
};
//# sourceMappingURL=/build/routes/($locale).products.$productHandle-SACZSVPR.js.map
