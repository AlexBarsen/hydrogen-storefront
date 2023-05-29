import {useEffect} from 'react';
import {useFetcher} from '@remix-run/react';
import {usePrefixPathWithLocale} from '~/lib/utils';
import Section from './Section';
import ProductCard from './ProductCard';
import {Grid} from '@mui/material';
import {Product} from '@shopify/hydrogen-react/storefront-api-types';

export interface FeaturedData {
  featuredCollections: any[];
  featuredProducts: any[];
}

const FeaturedSection = () => {
  const {load, data} = useFetcher();
  const path = usePrefixPathWithLocale('/featured-products');

  useEffect(() => {
    load(path);
  }, [load, path]);

  if (!data) return null;

  const {featuredProducts} = data;

  console.log('featuredProducts', featuredProducts);
  return (
    <>
      <Section title={'Featured Products'}>
        <Grid container columns={5} spacing={3} gridAutoRows="1fr">
          {featuredProducts.map((product: Product) => (
            <Grid item xs={1} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  );
};

export default FeaturedSection;
