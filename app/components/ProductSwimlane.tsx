import {Grid, Container} from '@mui/material';
import type {Product} from '@shopify/hydrogen/storefront-api-types';
import {ProductCard} from '~/components';
import Section from './Section';

const mockProducts = new Array(12).fill('');

export function ProductSwimlane({
  title = 'Featured Products',
  products = mockProducts,
  count = 12,
}: {
  title?: string;
  products?: Product[];
  count?: number;
}) {
  return (
    <Section title={title}>
      <Grid container columns={5} spacing={3} gridAutoRows="1fr">
        {products.map((product) => (
          <Grid item xs={1} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
