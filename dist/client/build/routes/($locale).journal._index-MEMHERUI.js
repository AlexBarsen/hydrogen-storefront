import {
  require_seo
} from "/build/_shared/chunk-3J4QUTWW.js";
import {
  Grid,
  Link,
  PageHeader,
  Section,
  getImageLoadingPriority
} from "/build/_shared/chunk-OP3M5KPR.js";
import {
  Image
} from "/build/_shared/chunk-RVY3ADEN.js";
import "/build/_shared/chunk-IIPXH2HL.js";
import "/build/_shared/chunk-SVVM2VD6.js";
import "/build/_shared/chunk-4EH6BNGM.js";
import "/build/_shared/chunk-F6XALK7G.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-X46KOHV3.js";
import {
  useLoaderData
} from "/build/_shared/chunk-PZSRRYRD.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($locale).journal._index.tsx
var import_seo = __toESM(require_seo());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BLOG_HANDLE = "Journal";
function Journals() {
  const { articles } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading: BLOG_HANDLE }, void 0, false, {
      fileName: "app/routes/($locale).journal._index.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { as: "ol", layout: "blog", children: articles.map((article, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ArticleCard,
      {
        blogHandle: BLOG_HANDLE.toLowerCase(),
        article,
        loading: getImageLoadingPriority(i, 2)
      },
      article.id,
      false,
      {
        fileName: "app/routes/($locale).journal._index.tsx",
        lineNumber: 63,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/($locale).journal._index.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).journal._index.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).journal._index.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}
function ArticleCard({
  blogHandle,
  article,
  loading
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/${blogHandle}/${article.handle}`, children: [
    article.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-image aspect-[3/2]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Image,
      {
        alt: article.image.altText || article.title,
        className: "object-cover w-full",
        data: article.image,
        aspectRatio: "3/2",
        loading,
        sizes: "(min-width: 768px) 50vw, 100vw"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).journal._index.tsx",
        lineNumber: 90,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).journal._index.tsx",
      lineNumber: 89,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-4 font-medium", children: article.title }, void 0, false, {
      fileName: "app/routes/($locale).journal._index.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block mt-1", children: article.publishedAt }, void 0, false, {
      fileName: "app/routes/($locale).journal._index.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).journal._index.tsx",
    lineNumber: 87,
    columnNumber: 7
  }, this) }, article.id, false, {
    fileName: "app/routes/($locale).journal._index.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}
export {
  Journals as default
};
//# sourceMappingURL=/build/routes/($locale).journal._index-MEMHERUI.js.map
