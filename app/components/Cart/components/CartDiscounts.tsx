import React from 'react';
import type {Cart as CartType} from '@shopify/hydrogen/storefront-api-types';
import UpdateDiscountForm from './UpdateDiscountForm';
import {Button, Typography} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const CartDiscounts = ({
  discountCodes,
}: {
  discountCodes: CartType['discountCodes'];
}) => {
  const codes = discountCodes?.map(({code}) => code).join(', ') || null;

  return (
    <>
      {/* Have existing discount, display it with a remove option */}
      <dl className={codes ? 'grid' : 'hidden'}>
        <div className="flex items-center justify-between font-medium">
          <Typography>Discount(s)</Typography>
          <div className="flex items-center justify-between">
            <UpdateDiscountForm>
              <Button>
                <ClearIcon
                  aria-hidden="true"
                  style={{height: 18, marginRight: 4}}
                />
              </Button>
            </UpdateDiscountForm>
            <Typography>{codes}</Typography>
          </div>
        </div>
      </dl>

      {/* No discounts, show an input to apply a discount */}
      <UpdateDiscountForm>
        <div>
          <input type="text" name="discountCode" placeholder="Discount code" />

          <Button>Apply Discount</Button>
        </div>
      </UpdateDiscountForm>
    </>
  );
};

export default CartDiscounts;
