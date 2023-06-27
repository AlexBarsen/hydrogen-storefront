import {useMemo} from 'react';
import {defer, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData, useSearchParams, useNavigation} from '@remix-run/react';
import {
  AnalyticsPageType,
  Money,
  ShopifyAnalyticsProduct,
} from '@shopify/hydrogen';
import {seoPayload} from '~/lib/seo.server';
import invariant from 'tiny-invariant';
import type {
  ProductVariant,
  SelectedOptionInput,
  Product as ProductType,
  Shop,
} from '@shopify/hydrogen/storefront-api-types';
import {MEDIA_FRAGMENT} from '~/data/fragments';

import {CACHE_SHORT} from '~/data/cache';
import {Button, Container} from '@mui/material';
import ProductOptions from './ProductOptions';
import {Typography} from '@material-ui/core';
import AddToCartButton from './AddToCartButton';

export async function loader({params, request, context}: LoaderArgs) {
  const {productHandle} = params;
  invariant(productHandle, 'Missing productHandle param, check route filename');

  const searchParams = new URL(request.url).searchParams;

  const selectedOptions: SelectedOptionInput[] = [];
  searchParams.forEach((value, name) => {
    selectedOptions.push({name, value});
  });

  const {shop, product} = await context.storefront.query<{
    product: ProductType & {selectedVariant?: ProductVariant};
    shop: Shop;
  }>(PRODUCT_QUERY, {
    variables: {
      handle: productHandle,
      selectedOptions,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  if (!product?.id) {
    throw new Response('product', {status: 404});
  }

  const firstVariant = product.variants.nodes[0];
  const selectedVariant = product.selectedVariant ?? firstVariant;

  const productAnalytics: ShopifyAnalyticsProduct = {
    productGid: product.id,
    variantGid: selectedVariant.id,
    name: product.title,
    variantName: selectedVariant.title,
    brand: product.vendor,
    price: selectedVariant.price.amount,
  };

  const seo = seoPayload.product({
    product,
    selectedVariant,
    url: request.url,
  });

  return defer(
    {
      product,
      shop,
      storeDomain: shop.primaryDomain.url,
      analytics: {
        pageType: AnalyticsPageType.product,
        resourceId: product.id,
        products: [productAnalytics],
        totalValue: parseFloat(selectedVariant.price.amount),
      },
      seo,
    },
    {
      headers: {
        'Cache-Control': CACHE_SHORT,
      },
    },
  );
}

const ProductForm = () => {
  const {product, analytics} = useLoaderData<typeof loader>();

  const [currentSearchParams] = useSearchParams();
  const {location} = useNavigation();
  const firstVariant = product.variants.nodes[0];

  const searchParams = useMemo(() => {
    return location
      ? new URLSearchParams(location.search)
      : currentSearchParams;
  }, [currentSearchParams, location]);

  const searchParamsWithDefaults = useMemo<URLSearchParams>(() => {
    const clonedParams = new URLSearchParams(searchParams);

    for (const {name, value} of firstVariant.selectedOptions) {
      if (!searchParams.has(name)) {
        clonedParams.set(name, value);
      }
    }

    return clonedParams;
  }, [searchParams, firstVariant.selectedOptions]);

  const selectedVariant = product.selectedVariant ?? firstVariant;
  const isOutOfStock = !selectedVariant?.availableForSale;

  const isOnSale =
    selectedVariant?.price?.amount &&
    selectedVariant?.compareAtPrice?.amount &&
    selectedVariant?.price?.amount < selectedVariant?.compareAtPrice?.amount;

  const productAnalytics: ShopifyAnalyticsProduct = {
    ...analytics.products[0],
    quantity: 1,
  };

  return (
    <Container>
      <ProductOptions
        options={product.options}
        searchParamsWithDefaults={searchParamsWithDefaults}
      />
      {selectedVariant && (
        <div className="grid items-stretch gap-4">
          {isOutOfStock ? (
            <Button disabled>
              <Typography>Sold out</Typography>
            </Button>
          ) : (
            <AddToCartButton
              lines={[
                {
                  merchandiseId: selectedVariant.id,
                  quantity: 1,
                },
              ]}
              variant="primary"
              data-test="add-to-cart"
              analytics={{
                products: [productAnalytics],
                totalValue: parseFloat(productAnalytics.price),
              }}
            >
              <Typography>Add to Cart</Typography>
              <Money
                withoutTrailingZeros
                data={selectedVariant.price}
                as="span"
              />
              {isOnSale && (
                <Money
                  withoutTrailingZeros
                  data={selectedVariant?.compareAtPrice!}
                  as="span"
                  className="opacity-50 strike"
                />
              )}
            </AddToCartButton>
          )}
        </div>
      )}
      <span>Add product details etc.</span>
    </Container>
  );
};

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariantFragment on ProductVariant {
    id
    availableForSale
    selectedOptions {
      name
      value
    }
    image {
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    compareAtPrice {
      amount
      currencyCode
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
  }
`;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      vendor
      handle
      descriptionHtml
      description
      options {
        name
        values
      }
      selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
        ...ProductVariantFragment
      }
      media(first: 7) {
        nodes {
          ...Media
        }
      }
      variants(first: 1) {
        nodes {
          ...ProductVariantFragment
        }
      }
      seo {
        description
        title
      }
    }
    shop {
      name
      primaryDomain {
        url
      }
      shippingPolicy {
        body
        handle
      }
      refundPolicy {
        body
        handle
      }
    }
  }
  ${MEDIA_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
`;

export default ProductForm;
