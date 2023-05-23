import {
  require_react_dom
} from "/build/_shared/chunk-IRQMJ5FU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-ZWW6HFVX.js";
import {
  require_react
} from "/build/_shared/chunk-UCEVZXH3.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// app/entry.client.tsx
var import_react = __toESM(require_react());
var import_client = __toESM(require_client());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
(0, import_react.startTransition)(() => {
  (0, import_client.hydrateRoot)(document, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.StrictMode, {}, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 6,
    columnNumber: 25
  }, this));
});
//# sourceMappingURL=/build/entry.client-5ERW52OP.js.map
