import {
  require_seo
} from "/build/_shared/chunk-3J4QUTWW.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  PageHeader
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

// app/routes/($locale).pages.$pageHandle.tsx
var import_seo = __toESM(require_seo());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Page() {
  const { page } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading: page.title, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      dangerouslySetInnerHTML: { __html: page.body },
      className: "prose dark:prose-invert"
    },
    void 0,
    false,
    {
      fileName: "app/routes/($locale).pages.$pageHandle.tsx",
      lineNumber: 43,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/($locale).pages.$pageHandle.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).pages.$pageHandle.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
export {
  Page as default
};
//# sourceMappingURL=/build/routes/($locale).pages.$pageHandle-555NJHIL.js.map
