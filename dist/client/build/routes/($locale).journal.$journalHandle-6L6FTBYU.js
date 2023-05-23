import {
  require_seo
} from "/build/_shared/chunk-3J4QUTWW.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  PageHeader,
  Section
} from "/build/_shared/chunk-TWIRL4GB.js";
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

// app/routes/($locale).journal.$journalHandle.tsx
var import_seo = __toESM(require_seo());

// app/styles/custom-font.css
var custom_font_default = "/build/_assets/custom-font-ULF2G5JU.css";

// app/routes/($locale).journal.$journalHandle.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: custom_font_default }];
};
function Article() {
  const { article, formattedDate } = useLoaderData();
  const { title, image, contentHtml, author } = article;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading: title, variant: "blogPost", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
      formattedDate,
      " \xB7 ",
      author.name
    ] }, void 0, true, {
      fileName: "app/routes/($locale).journal.$journalHandle.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).journal.$journalHandle.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { as: "article", padding: "x", children: [
      image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Image,
        {
          data: image,
          className: "w-full mx-auto mt-8 md:mt-16 max-w-7xl",
          sizes: "90vw",
          loading: "eager"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).journal.$journalHandle.tsx",
          lineNumber: 72,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          dangerouslySetInnerHTML: { __html: contentHtml },
          className: "article"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).journal.$journalHandle.tsx",
          lineNumber: 79,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/($locale).journal.$journalHandle.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).journal.$journalHandle.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}
export {
  Article as default,
  links
};
//# sourceMappingURL=/build/routes/($locale).journal.$journalHandle-6L6FTBYU.js.map
