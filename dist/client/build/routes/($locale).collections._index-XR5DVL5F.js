import {
  require_seo
} from "/build/_shared/chunk-3J4QUTWW.js";
import {
  Button,
  Grid,
  Heading,
  Link,
  PageHeader,
  Pagination,
  Section,
  getImageLoadingPriority
} from "/build/_shared/chunk-Z4RHRP5A.js";
import {
  Image
} from "/build/_shared/chunk-HQHJDE7P.js";
import "/build/_shared/chunk-IRQMJ5FU.js";
import "/build/_shared/chunk-DS5LKGVC.js";
import "/build/_shared/chunk-4EH6BNGM.js";
import {
  useLoaderData
} from "/build/_shared/chunk-P2RVWR5F.js";
import "/build/_shared/chunk-F6XALK7G.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-ZWW6HFVX.js";
import "/build/_shared/chunk-UCEVZXH3.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($locale).collections._index.tsx
var import_seo = __toESM(require_seo());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Collections() {
  const { collections } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading: "Collections" }, void 0, false, {
      fileName: "app/routes/($locale).collections._index.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { connection: collections, children: ({
      endCursor,
      hasNextPage,
      hasPreviousPage,
      nextPageUrl,
      nodes,
      prevPageUrl,
      startCursor,
      nextLinkRef,
      isLoading
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      hasPreviousPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Button,
        {
          to: prevPageUrl,
          variant: "secondary",
          width: "full",
          prefetch: "intent",
          disabled: !isLoading,
          state: {
            pageInfo: {
              endCursor,
              hasNextPage,
              startCursor
            },
            nodes
          },
          children: isLoading ? "Loading..." : "Previous products"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).collections._index.tsx",
          lineNumber: 75,
          columnNumber: 19
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($locale).collections._index.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Grid,
        {
          items: nodes.length === 3 ? 3 : 2,
          "data-test": "collection-grid",
          children: nodes.map((collection, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            CollectionCard,
            {
              collection,
              loading: getImageLoadingPriority(i, 2)
            },
            collection.id,
            false,
            {
              fileName: "app/routes/($locale).collections._index.tsx",
              lineNumber: 99,
              columnNumber: 19
            },
            this
          ))
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).collections._index.tsx",
          lineNumber: 94,
          columnNumber: 15
        },
        this
      ),
      hasNextPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Button,
        {
          ref: nextLinkRef,
          to: nextPageUrl,
          variant: "secondary",
          width: "full",
          prefetch: "intent",
          disabled: !isLoading,
          state: {
            pageInfo: {
              endCursor,
              hasPreviousPage,
              startCursor
            },
            nodes
          },
          children: isLoading ? "Loading..." : "Next products"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).collections._index.tsx",
          lineNumber: 108,
          columnNumber: 19
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($locale).collections._index.tsx",
        lineNumber: 107,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).collections._index.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).collections._index.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).collections._index.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).collections._index.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
function CollectionCard({
  collection,
  loading
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/collections/${collection.handle}`, className: "grid gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-image bg-primary/5 aspect-[3/2]", children: collection?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Image,
      {
        data: collection.image,
        aspectRatio: "6/4",
        sizes: "(max-width: 32em) 100vw, 45vw",
        loading
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).collections._index.tsx",
        lineNumber: 147,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).collections._index.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { as: "h3", size: "copy", children: collection.title }, void 0, false, {
      fileName: "app/routes/($locale).collections._index.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).collections._index.tsx",
    lineNumber: 144,
    columnNumber: 5
  }, this);
}
export {
  Collections as default
};
//# sourceMappingURL=/build/routes/($locale).collections._index-XR5DVL5F.js.map
