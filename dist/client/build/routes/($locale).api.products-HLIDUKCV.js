import {
  PRODUCT_CARD_FRAGMENT
} from "/build/_shared/chunk-YADXHAZD.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import "/build/_shared/chunk-RVY3ADEN.js";
import "/build/_shared/chunk-4EH6BNGM.js";
import "/build/_shared/chunk-PZSRRYRD.js";
import "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/($locale).api.products.tsx
var PRODUCTS_QUERY = `#graphql
  query (
    $query: String
    $count: Int
    $reverse: Boolean
    $country: CountryCode
    $language: LanguageCode
    $sortKey: ProductSortKeys
  ) @inContext(country: $country, language: $language) {
    products(first: $count, sortKey: $sortKey, reverse: $reverse, query: $query) {
      nodes {
        ...ProductCard
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
`;
function ProductsApiRoute() {
  return null;
}
export {
  ProductsApiRoute as default
};
//# sourceMappingURL=/build/routes/($locale).api.products-HLIDUKCV.js.map
