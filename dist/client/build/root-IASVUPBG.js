import {
  require_seo
} from "/build/_shared/chunk-3J4QUTWW.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  Layout
} from "/build/_shared/chunk-74S6UGTK.js";
import {
  AnalyticsEventName,
  getClientBrowserParameters,
  sendShopifyAnalytics,
  useShopifyCookies,
  ze
} from "/build/_shared/chunk-RVY3ADEN.js";
import "/build/_shared/chunk-IIPXH2HL.js";
import {
  DEFAULT_LOCALE
} from "/build/_shared/chunk-SVVM2VD6.js";
import "/build/_shared/chunk-4EH6BNGM.js";
import "/build/_shared/chunk-F6XALK7G.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-X46KOHV3.js";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  require_react,
  useFetchers,
  useLoaderData,
  useLocation,
  useMatches,
  useRouteError
} from "/build/_shared/chunk-PZSRRYRD.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/styles/app.css
var app_default = "/build/_assets/app-24G5KCXE.css";

// public/favicon.svg
var favicon_default = "/build/_assets/favicon-5FIZBM2K.svg";

// app/root.tsx
var import_seo = __toESM(require_seo());

// app/hooks/useAnalytics.tsx
var import_react2 = __toESM(require_react());
function useAnalytics(hasUserConsent, locale) {
  useShopifyCookies({ hasUserConsent });
  const location = useLocation();
  const analyticsFromMatches = useDataFromMatches(
    "analytics"
  );
  const pageAnalytics = {
    ...analyticsFromMatches,
    currency: locale.currency,
    acceptedLanguage: locale.language,
    hasUserConsent
  };
  (0, import_react2.useEffect)(() => {
    const payload = {
      ...getClientBrowserParameters(),
      ...pageAnalytics
    };
    sendShopifyAnalytics({
      eventName: AnalyticsEventName.PAGE_VIEW,
      payload
    });
  }, [location]);
  const cartData = useDataFromFetchers({
    formDataKey: "cartAction",
    formDataValue: "ADD_TO_CART" /* ADD_TO_CART */,
    dataKey: "analytics"
  });
  if (cartData) {
    const addToCartPayload = {
      ...getClientBrowserParameters(),
      ...pageAnalytics,
      ...cartData
    };
    sendShopifyAnalytics({
      eventName: AnalyticsEventName.ADD_TO_CART,
      payload: addToCartPayload
    });
  }
}
function useDataFromMatches(dataKey) {
  const matches = useMatches();
  const data = {};
  matches.forEach((event) => {
    const eventData = event?.data;
    if (eventData && eventData[dataKey]) {
      Object.assign(data, eventData[dataKey]);
    }
  });
  return data;
}
function useDataFromFetchers({
  formDataKey,
  formDataValue,
  dataKey
}) {
  const fetchers = useFetchers();
  const data = {};
  for (const fetcher of fetchers) {
    const formData = fetcher.submission?.formData;
    const fetcherData = fetcher.data;
    if (formData && formData.get(formDataKey) === formDataValue && fetcherData && fetcherData[dataKey]) {
      Object.assign(data, fetcherData[dataKey]);
      try {
        if (formData.get(dataKey)) {
          const dataInForm = JSON.parse(String(formData.get(dataKey)));
          Object.assign(data, dataInForm);
        }
      } catch {
      }
    }
  }
  return Object.keys(data).length ? data : void 0;
}

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [
    { rel: "stylesheet", href: app_default },
    {
      rel: "preconnect",
      href: "https://cdn.shopify.com"
    },
    {
      rel: "preconnect",
      href: "https://shop.app"
    },
    { rel: "icon", type: "image/svg+xml", href: favicon_default }
  ];
};
function App() {
  const data = useLoaderData();
  const locale = data.selectedLocale ?? DEFAULT_LOCALE;
  const hasUserConsent = true;
  useAnalytics(hasUserConsent, locale);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: locale.language, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ze, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Layout,
        {
          layout: data.layout,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 93,
            columnNumber: 11
          }, this)
        },
        `${locale.language}-${locale.country}`,
        false,
        {
          fileName: "app/root.tsx",
          lineNumber: 89,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  const [root] = useMatches();
  const locale = root?.data?.selectedLocale ?? DEFAULT_LOCALE;
  const routeError = useRouteError();
  const isRouteError = isRouteErrorResponse(routeError);
  let title = "Error";
  let pageType = "page";
  if (isRouteError) {
    title = "Not found";
    if (routeError.status === 404)
      pageType = routeError.data || pageType;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: locale.language, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: title }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 144,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 117,
    columnNumber: 5
  }, this);
}
export {
  ErrorBoundary,
  App as default,
  links
};
//# sourceMappingURL=/build/root-IASVUPBG.js.map
