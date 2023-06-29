import {useFetcher} from '@remix-run/react';
import React from 'react';
import {CartAction} from '~/lib/type';

const UpdateDiscountForm = ({children}: {children: React.ReactNode}) => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form action="/cart" method="post">
      <input
        type="hidden"
        name="cartAction"
        value={CartAction.UPDATE_DISCOUNT}
      />
      {children}
    </fetcher.Form>
  );
};

export default UpdateDiscountForm;
