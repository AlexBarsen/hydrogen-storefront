import ProductCard from './ProductCard';
import type {Collection, Product} from '@shopify/hydrogen/storefront-api-types';
import {useFetcher, Link} from '@remix-run/react';
import {useEffect, useState} from 'react';
import {Grid, Button} from '@mui/material';

export function ProductGrid({
  url,
  collection,
}: {
  url: string;
  collection: Collection;
}) {
  const [initialProducts, setInitialProducts] = useState(
    collection?.products?.nodes || [],
  );

  const [nextPage, setNextPage] = useState(
    collection?.products?.pageInfo?.hasNextPage,
  );
  const [endCursor, setEndCursor] = useState(
    collection?.products?.pageInfo?.endCursor,
  );
  const [products, setProducts] = useState(initialProducts);

  console.log(collection);

  // props have changes, reset component state
  const productProps = collection?.products?.nodes || [];
  if (initialProducts !== productProps) {
    setInitialProducts(productProps);
    setProducts(productProps);
  }

  const fetcher = useFetcher();

  function fetchMoreProducts() {
    fetcher.load(`${url}?index&cursor=${endCursor}`);
  }

  useEffect(() => {
    if (!fetcher.data) return;

    const {collection} = fetcher.data;

    setProducts((prev: Product[]) => [...prev, ...collection.products.nodes]);
    setNextPage(collection.products.pageInfo.hasNextPage);
    setEndCursor(collection.products.pageInfo.endCursor);
  }, [fetcher.data]);

  const haveProducts = initialProducts.length > 0;

  if (!haveProducts) {
    return (
      <>
        <p>No products found on this collection</p>
        <Link to="/products">
          <p className="underline">Browse catalog</p>
        </Link>
      </>
    );
  }

  return (
    <>
      <Grid container columns={4} spacing={3} gridAutoRows="1fr">
        {products.map((product, i) => (
          <Grid item xs={1} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {nextPage && (
        <div className="flex items-center justify-center mt-6">
          <Button
            disabled={fetcher.state !== 'idle'}
            variant="contained"
            onClick={fetchMoreProducts}
          >
            {fetcher.state !== 'idle' ? 'Loading...' : 'Load more products'}
          </Button>
        </div>
      )}
    </>
  );
}
