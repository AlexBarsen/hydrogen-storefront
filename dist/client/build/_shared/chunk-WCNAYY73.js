import {
  AccountAddressBook,
  AccountDetails,
  Button,
  FeaturedCollections,
  Modal,
  OrderCard,
  PageHeader,
  ProductSwimlane,
  Text
} from "/build/_shared/chunk-4O5I6VCL.js";
import {
  usePrefixPathWithLocale
} from "/build/_shared/chunk-SVVM2VD6.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-X46KOHV3.js";
import {
  Await,
  Form,
  Outlet,
  require_react,
  useLoaderData,
  useMatches,
  useOutlet
} from "/build/_shared/chunk-PZSRRYRD.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($locale).account.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Authenticated() {
  const data = useLoaderData();
  const outlet = useOutlet();
  const matches = useMatches();
  const renderOutletInModal = matches.some((match) => {
    return match?.handle?.renderInModal;
  });
  if (!data.isAuthenticated) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/($locale).account.tsx",
      lineNumber: 101,
      columnNumber: 12
    }, this);
  }
  if (outlet) {
    if (renderOutletInModal) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { cancelLink: "/account", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: { customer: data.customer } }, void 0, false, {
          fileName: "app/routes/($locale).account.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).account.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Account, { ...data }, void 0, false, {
          fileName: "app/routes/($locale).account.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this);
    } else {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: { customer: data.customer } }, void 0, false, {
        fileName: "app/routes/($locale).account.tsx",
        lineNumber: 116,
        columnNumber: 14
      }, this);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Account, { ...data }, void 0, false, {
    fileName: "app/routes/($locale).account.tsx",
    lineNumber: 120,
    columnNumber: 10
  }, this);
}
function Account({
  customer,
  orders,
  heading,
  addresses,
  featuredData
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: usePrefixPathWithLocale("/account/logout"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "text-primary/50", children: "Sign out" }, void 0, false, {
      fileName: "app/routes/($locale).account.tsx",
      lineNumber: 142,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.tsx",
      lineNumber: 141,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    orders && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccountOrderHistory, { orders }, void 0, false, {
      fileName: "app/routes/($locale).account.tsx",
      lineNumber: 147,
      columnNumber: 18
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccountDetails, { customer }, void 0, false, {
      fileName: "app/routes/($locale).account.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      AccountAddressBook,
      {
        addresses,
        customer
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account.tsx",
        lineNumber: 149,
        columnNumber: 7
      },
      this
    ),
    !orders.length && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Await,
      {
        resolve: featuredData,
        errorElement: "There was a problem loading featured products.",
        children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            FeaturedCollections,
            {
              title: "Popular Collections",
              collections: data.featuredCollections
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).account.tsx",
              lineNumber: 161,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductSwimlane, { products: data.featuredProducts }, void 0, false, {
            fileName: "app/routes/($locale).account.tsx",
            lineNumber: 165,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account.tsx",
          lineNumber: 160,
          columnNumber: 15
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account.tsx",
        lineNumber: 155,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).account.tsx",
      lineNumber: 154,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.tsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}
function AccountOrderHistory({ orders }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid w-full gap-4 p-4 py-6 md:gap-8 md:p-8 lg:p-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-bold text-lead", children: "Order History" }, void 0, false, {
      fileName: "app/routes/($locale).account.tsx",
      lineNumber: 179,
      columnNumber: 9
    }, this),
    orders?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Orders, { orders }, void 0, false, {
      fileName: "app/routes/($locale).account.tsx",
      lineNumber: 180,
      columnNumber: 27
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyOrders, {}, void 0, false, {
      fileName: "app/routes/($locale).account.tsx",
      lineNumber: 180,
      columnNumber: 56
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.tsx",
    lineNumber: 178,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.tsx",
    lineNumber: 177,
    columnNumber: 5
  }, this);
}
function EmptyOrders() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "mb-1", size: "fine", width: "narrow", as: "p", children: "You haven't placed any orders yet." }, void 0, false, {
      fileName: "app/routes/($locale).account.tsx",
      lineNumber: 189,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-48", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Button,
      {
        className: "w-full mt-2 text-sm",
        variant: "secondary",
        to: usePrefixPathWithLocale("/"),
        children: "Start Shopping"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account.tsx",
        lineNumber: 193,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).account.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.tsx",
    lineNumber: 188,
    columnNumber: 5
  }, this);
}
function Orders({ orders }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-flow-row grid-cols-1 gap-2 gap-y-6 md:gap-4 lg:gap-6 false sm:grid-cols-3", children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderCard, { order }, order.id, false, {
    fileName: "app/routes/($locale).account.tsx",
    lineNumber: 209,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "app/routes/($locale).account.tsx",
    lineNumber: 207,
    columnNumber: 5
  }, this);
}

export {
  Authenticated
};
//# sourceMappingURL=/build/_shared/chunk-WCNAYY73.js.map
