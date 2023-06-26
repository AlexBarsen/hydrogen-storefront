import type {CartLineInput} from '@shopify/hydrogen/storefront-api-types';
import {useFetcher, useMatches} from '@remix-run/react';
import {Button} from '@mui/material';
import {CartAction} from '~/lib/type';

const AddToCartButton = ({
  children,
  lines,
  className = '',
  variant = 'primary',
  width = 'full',
  disabled,
  analytics,
  ...props
}: {
  children: React.ReactNode;
  lines: CartLineInput[];
  className?: string;
  variant?: 'primary' | 'secondary' | 'inline';
  width?: 'auto' | 'full';
  disabled?: boolean;
  analytics?: unknown;
  [key: string]: any;
}) => {
  const [root] = useMatches();
  const selectedLocale = root?.data?.selectedLocale;
  const fetcher = useFetcher();
  const fetcherIsNotIdle = fetcher.state !== 'idle';

  return (
    <fetcher.Form action="/cart" method="post">
      <input type="hidden" name="cartAction" value={CartAction.ADD_TO_CART} />
      <input type="hidden" name="countryCode" value={selectedLocale.country} />
      <input type="hidden" name="lines" value={JSON.stringify(lines)} />
      <input type="hidden" name="analytics" value={JSON.stringify(analytics)} />
      <Button type="submit" disabled={disabled ?? fetcherIsNotIdle}>
        {children}
      </Button>
    </fetcher.Form>
  );
};

export default AddToCartButton;
