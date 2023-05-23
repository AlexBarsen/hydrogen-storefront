import {
  require_seo
} from "/build/_shared/chunk-3J4QUTWW.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  Heading,
  Link,
  PageHeader,
  Section
} from "/build/_shared/chunk-KKKQNVBW.js";
import "/build/_shared/chunk-HQHJDE7P.js";
import "/build/_shared/chunk-DS5LKGVC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-ZWW6HFVX.js";
import "/build/_shared/chunk-4EH6BNGM.js";
import {
  useLoaderData
} from "/build/_shared/chunk-P2RVWR5F.js";
import "/build/_shared/chunk-F6XALK7G.js";
import "/build/_shared/chunk-UCEVZXH3.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($locale).policies._index.tsx
var import_seo = __toESM(require_seo());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Policies() {
  const { policies } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading: "Policies" }, void 0, false, {
      fileName: "app/routes/($locale).policies._index.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { padding: "x", className: "mb-24", children: policies.map((policy) => {
      return policy && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { className: "font-normal text-heading", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/policies/${policy.handle}`, children: policy.title }, void 0, false, {
        fileName: "app/routes/($locale).policies._index.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this) }, policy.id, false, {
        fileName: "app/routes/($locale).policies._index.tsx",
        lineNumber: 48,
        columnNumber: 15
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/($locale).policies._index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).policies._index.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
export {
  Policies as default
};
//# sourceMappingURL=/build/routes/($locale).policies._index-HTWDJJGT.js.map
