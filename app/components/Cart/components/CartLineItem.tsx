import React from 'react';
import type {CartLine} from '@shopify/hydrogen/storefront-api-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from '@remix-run/react';
import {Box} from '@mui/material';
import ItemRemoveButton from './ItemRemoveButton';
import CartLineQuantityAdjust from './CartLineQuantityAdjust';
import CartLinePrice from './CartLinePrice';

const CartLineItem = ({line}: {line: CartLine}) => {
  if (!line?.id) return null;

  const {id, quantity, merchandise} = line;

  if (typeof quantity === 'undefined' || !merchandise?.product) return null;

  return (
    <Card sx={{maxWidth: 400, display: 'flex', backgroundColor: 'lightcoral'}}>
      <CardMedia
        sx={{height: '130px', width: '130px'}}
        component="img"
        alt={merchandise.title}
        image={merchandise.image?.url}
      />

      <CardContent>
        <Typography gutterBottom>
          {merchandise?.product?.handle ? (
            <Link to={`/products/${merchandise.product.handle}`}>
              {merchandise?.product?.title || ''}
            </Link>
          ) : (
            <Typography>{merchandise?.product?.title || ''}</Typography>
          )}
        </Typography>
        <div>
          {(merchandise?.selectedOptions || []).map((option) => (
            <Typography key={option.name}>
              {option.name}: {option.value}
            </Typography>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex justify-start text-copy">
            <CartLineQuantityAdjust line={line} />
          </div>
          <ItemRemoveButton lineIds={[id]} />
        </div>

        <Typography>
          <CartLinePrice line={line} as="span" />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CartLineItem;
