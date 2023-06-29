import {useFetcher} from '@remix-run/react';
import React from 'react';
import type {CartLineUpdateInput} from '@shopify/hydrogen/storefront-api-types';
import {CartAction} from '~/lib/type';

interface UpdateCartButton {
  children: React.ReactNode;
  lines: CartLineUpdateInput[];
}

const UpdateCartButton: React.FC<UpdateCartButton> = ({lines, children}) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form action="/cart" method="post">
      <input type="hidden" name="cartAction" value={CartAction.UPDATE_CART} />
      <input type="hidden" name="lines" value={JSON.stringify(lines)} />
      {children}
    </fetcher.Form>
  );
};

export default UpdateCartButton;
