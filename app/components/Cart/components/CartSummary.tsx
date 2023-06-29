import {Container, Typography} from '@mui/material';
import {CartCost} from '@shopify/hydrogen-react/storefront-api-types';
import {Money} from '@shopify/hydrogen';
import React from 'react';

interface CartSummary {
  cost: CartCost;
  children?: React.ReactNode;
}

const CartSummary: React.FC<CartSummary> = ({cost, children = null}) => {
  return (
    <Container>
      <Typography>Order summary</Typography>
      <div>
        <Typography>Subtotal</Typography>
        <Typography>
          {cost?.subtotalAmount?.amount ? (
            <Money data={cost?.subtotalAmount} />
          ) : (
            '-'
          )}
        </Typography>
      </div>
      {children}
    </Container>
  );
};

export default CartSummary;
