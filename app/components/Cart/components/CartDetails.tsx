import React from 'react';
import type {Cart as CartType} from '@shopify/hydrogen/storefront-api-types';
import {Container} from '@mui/material';
import CartLines from './CartLines';
import CartSummary from './CartSummary';
import CartDiscounts from './CartDiscounts';
import CartCheckoutActions from './CartCheckoutActions';

interface CartDetais {
  cart: CartType | null;
}

const CartDetails: React.FC<CartDetais> = ({cart}) => {
  const cartHasItems = !!cart && cart.totalQuantity > 0;
  return (
    <Container>
      <CartLines cartLines={cart?.lines} />
      {cartHasItems && (
        <CartSummary cost={cart.cost}>
          <CartDiscounts discountCodes={cart.discountCodes} />
          <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
        </CartSummary>
      )}
    </Container>
  );
};

export default CartDetails;
