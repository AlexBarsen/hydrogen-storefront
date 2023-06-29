import {useFetcher} from '@remix-run/react';
import React from 'react';
import {CartAction} from '~/lib/type';
import type {CartLine} from '@shopify/hydrogen/storefront-api-types';
import ClearIcon from '@mui/icons-material/Clear';
import {Button} from '@mui/material';

const ItemRemoveButton = ({lineIds}: {lineIds: CartLine['id'][]}) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form action="/cart" method="post">
      <input
        type="hidden"
        name="cartAction"
        value={CartAction.REMOVE_FROM_CART}
      />
      <input type="hidden" name="linesIds" value={JSON.stringify(lineIds)} />
      <Button type="submit">
        <span className="sr-only">Remove</span>
        <ClearIcon />
      </Button>
    </fetcher.Form>
  );
};

export default ItemRemoveButton;
