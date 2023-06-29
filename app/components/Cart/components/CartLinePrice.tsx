import React from 'react';
import {Money} from '@shopify/hydrogen';
import type {CartLine} from '@shopify/hydrogen/storefront-api-types';

interface CartLinePrice {
  line: CartLine;
  priceType?: 'regular' | 'compareAt';
  [key: string]: any;
}

const CartLinePrice: React.FC<CartLinePrice> = ({
  line,
  priceType = 'regular',
  ...passthroughProps
}) => {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount) return null;

  const moneyV2 =
    priceType === 'regular'
      ? line.cost.totalAmount
      : line.cost.compareAtAmountPerQuantity;

  if (moneyV2 == null) {
    return null;
  }

  return <Money withoutTrailingZeros {...passthroughProps} data={moneyV2} />;
};

export default CartLinePrice;
