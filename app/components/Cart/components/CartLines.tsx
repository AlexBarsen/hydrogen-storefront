import React, {useRef} from 'react';
import type {
  CartLine,
  Cart as CartType,
} from '@shopify/hydrogen/storefront-api-types';
import {flattenConnection} from '@shopify/hydrogen-react';
import {useScroll} from 'react-use';
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import CartLineItem from './CartLineItem';

interface CartLines {
  cartLines: CartType['lines'] | undefined;
}

const CartLines: React.FC<CartLines> = ({cartLines}) => {
  const currentLines = cartLines ? flattenConnection(cartLines) : [];
  const scrollRef = useRef(null);

  return (
    <Container>
      <Typography sx={{mt: 4, mb: 2}} variant="h6" component="div">
        Text only
      </Typography>
      <Stack direction="column" spacing={2}>
        {currentLines.map((line) => (
          <CartLineItem key={line.id} line={line as CartLine} />
        ))}
      </Stack>
    </Container>
  );
};

export default CartLines;
