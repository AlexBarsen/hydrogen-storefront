import clsx from 'clsx';
import {
  flattenConnection,
  Image,
  Money,
  ShopifyAnalyticsProduct,
  useMoney,
} from '@shopify/hydrogen';
import {Text, Link, AddToCartButton} from '~/components';
import {isDiscounted, isNewArrival} from '~/lib/utils';
import {getProductPlaceholder} from '~/lib/placeholders';
import type {MoneyV2, Product} from '@shopify/hydrogen/storefront-api-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Container, Paper} from '@mui/material';

export function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick?: () => void;
}) {
  const cardProduct: Product = product?.variants
    ? (product as Product)
    : getProductPlaceholder();
  if (!cardProduct?.variants?.nodes?.length) return null;

  const firstVariant = flattenConnection(cardProduct.variants)[0];
  const {image, price} = firstVariant;

  return (
    <Link
      onClick={onClick}
      to={`/products/${product.handle}`}
      prefetch="intent"
    >
      <Paper elevation={6} sx={{width: '250px'}}>
        <Card>
          {image && (
            <Container sx={{height: '200px'}}>
              <CardMedia
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
                component="img"
                image={image.url}
                title="green iguana"
              />
            </Container>
          )}
          <CardActions>
            <Button size="small">Go to product</Button>
          </CardActions>
          <CardContent sx={{height: '80px'}}>
            <Box sx={{display: 'flex'}}>
              <Typography fontSize={12}>{product.title}</Typography>
              <Typography fontSize={12}>
                {price.amount} {price.currencyCode}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </Link>
  );
}

/* <Text className="flex gap-4">
                <Money withoutTrailingZeros data={price!} />
                {isDiscounted(price as MoneyV2, compareAtPrice as MoneyV2) && (
                  <CompareAtPrice
                    className={'opacity-50'}
                    data={compareAtPrice as MoneyV2}
                  />
                )}
</Text>


<AddToCartButton
lines={[
  {
    quantity: 1,
    merchandiseId: firstVariant.id,
  },
]}
variant="secondary"
className="mt-2"
analytics={{
  products: [productAnalytics],
  totalValue: parseFloat(productAnalytics.price),
}}
>
<Text as="span" className="flex items-center justify-center gap-2">
  Add to Cart
</Text>
</AddToCartButton> */

// function CompareAtPrice({
//   data,
//   className,
// }: {
//   data: MoneyV2;
//   className?: string;
// }) {
//   const {currencyNarrowSymbol, withoutTrailingZerosAndCurrency} =
//     useMoney(data);

//   const styles = clsx('strike', className);

//   return (
//     <span className={styles}>
//       {currencyNarrowSymbol}
//       {withoutTrailingZerosAndCurrency}
//     </span>
//   );
// }

// if (!firstVariant) return null;

// if (label) {
//   cardLabel = label;
// } else if (isDiscounted(price as MoneyV2, compareAtPrice as MoneyV2)) {
//   cardLabel = 'Sale';
// } else if (isNewArrival(product.publishedAt)) {
//   cardLabel = 'New';
// }

// const productAnalytics: ShopifyAnalyticsProduct = {
//   productGid: product.id,
//   variantGid: firstVariant.id,
//   name: product.title,
//   variantName: firstVariant.title,
//   brand: product.vendor,
//   price: firstVariant.price.amount,
//   quantity: 1,
// };
