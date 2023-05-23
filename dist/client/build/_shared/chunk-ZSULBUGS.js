import {
  Cart,
  CartLoading
} from "/build/_shared/chunk-74S6UGTK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-X46KOHV3.js";
import {
  Await,
  require_react,
  useMatches
} from "/build/_shared/chunk-PZSRRYRD.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($locale).cart.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CartRoute() {
  const [root] = useMatches();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid w-full gap-8 p-6 py-8 md:p-8 lg:p-12 justify-items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLoading, {}, void 0, false, {
    fileName: "app/routes/($locale).cart.tsx",
    lineNumber: 180,
    columnNumber: 27
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: root.data?.cart, children: (cart) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cart, { layout: "page", cart }, void 0, false, {
    fileName: "app/routes/($locale).cart.tsx",
    lineNumber: 182,
    columnNumber: 22
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).cart.tsx",
    lineNumber: 181,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).cart.tsx",
    lineNumber: 180,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).cart.tsx",
    lineNumber: 179,
    columnNumber: 5
  }, this);
}
var USER_ERROR_FRAGMENT = `#graphql
  fragment ErrorFragment on CartUserError {
    message
    field
    code
  }
`;
var LINES_CART_FRAGMENT = `#graphql
  fragment CartLinesFragment on Cart {
    id
    totalQuantity
  }
`;
var CREATE_CART_MUTATION = `#graphql
  mutation ($input: CartInput!, $country: CountryCode = ZZ, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ...CartLinesFragment
        checkoutUrl
      }
      errors: userErrors {
        ...ErrorFragment
      }
    }
  }
  ${LINES_CART_FRAGMENT}
  ${USER_ERROR_FRAGMENT}
`;
var ADD_LINES_MUTATION = `#graphql
  mutation ($cartId: ID!, $lines: [CartLineInput!]!, $country: CountryCode = ZZ, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartLinesFragment
      }
      errors: userErrors {
        ...ErrorFragment
      }
    }
  }
  ${LINES_CART_FRAGMENT}
  ${USER_ERROR_FRAGMENT}
`;
var LINES_UPDATE_MUTATION = `#graphql
  mutation ($cartId: ID!, $lines: [CartLineUpdateInput!]!, $language: LanguageCode, $country: CountryCode)
  @inContext(country: $country, language: $language) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartLinesFragment
      }
      errors: userErrors {
        ...ErrorFragment
      }
    }
  }
  ${LINES_CART_FRAGMENT}
  ${USER_ERROR_FRAGMENT}
`;

export {
  CartRoute
};
//# sourceMappingURL=/build/_shared/chunk-ZSULBUGS.js.map
