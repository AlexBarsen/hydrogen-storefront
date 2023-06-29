import React from 'react';
import {Button} from '@mui/material';

const CartCheckoutActions = ({checkoutUrl}: {checkoutUrl: string}) => {
  if (!checkoutUrl) return null;

  return (
    <div className="flex flex-col mt-2">
      <a href={checkoutUrl} target="_self">
        <Button>Continue to Checkout</Button>
      </a>
      {/* @todo: <CartShopPayButton cart={cart} /> */}
    </div>
  );
};

export default CartCheckoutActions;
