import clsx from 'clsx';
import {flattenConnection} from '@shopify/hydrogen';
import {Link} from '~/components';
import {getProductPlaceholder} from '~/lib/placeholders';
import type {Product} from '@shopify/hydrogen/storefront-api-types';
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
