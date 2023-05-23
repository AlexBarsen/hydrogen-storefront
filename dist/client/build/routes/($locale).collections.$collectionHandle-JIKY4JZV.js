import {
  PRODUCT_CARD_FRAGMENT
} from "/build/_shared/chunk-YADXHAZD.js";
import {
  require_seo
} from "/build/_shared/chunk-3J4QUTWW.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  PageHeader,
  ProductGrid,
  Section,
  SortFilter,
  Text
} from "/build/_shared/chunk-QAOBPUCY.js";
import "/build/_shared/chunk-RVY3ADEN.js";
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

// app/routes/($locale).collections.$collectionHandle.tsx
var import_seo = __toESM(require_seo());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Collection() {
  const { collection, collections, appliedFilters } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHeader, { heading: collection.title, children: collection?.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-baseline justify-between w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { format: true, width: "narrow", as: "p", className: "inline-block", children: collection.description }, void 0, false, {
      fileName: "app/routes/($locale).collections.$collectionHandle.tsx",
      lineNumber: 144,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).collections.$collectionHandle.tsx",
      lineNumber: 143,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).collections.$collectionHandle.tsx",
      lineNumber: 142,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).collections.$collectionHandle.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      SortFilter,
      {
        filters: collection.products.filters,
        appliedFilters,
        collections,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ProductGrid,
          {
            collection,
            url: `/collections/${collection.handle}`,
            "data-test": "product-grid"
          },
          collection.id,
          false,
          {
            fileName: "app/routes/($locale).collections.$collectionHandle.tsx",
            lineNumber: 157,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).collections.$collectionHandle.tsx",
        lineNumber: 152,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).collections.$collectionHandle.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).collections.$collectionHandle.tsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}
var COLLECTION_QUERY = `#graphql
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $pageBy: Int!
    $cursor: String
    $filters: [ProductFilter!]
    $sortKey: ProductCollectionSortKeys!
    $reverse: Boolean
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(
        first: $pageBy,
        after: $cursor,
        filters: $filters,
        sortKey: $sortKey,
        reverse: $reverse
      ) {
        filters {
          id
          label
          type
          values {
            id
            label
            count
            input
          }
        }
        nodes {
          ...ProductCard
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
    collections(first: 100) {
      edges {
        node {
          title
          handle
        }
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
`;
export {
  Collection as default
};
//# sourceMappingURL=/build/routes/($locale).collections.$collectionHandle-JIKY4JZV.js.map
