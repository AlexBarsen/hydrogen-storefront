import type {Cart as CartType} from '@shopify/hydrogen/storefront-api-types';
import CartEmpty from './components/CartEmpty';
import CartDetails from './components/CartDetails';

interface Cart {
  onClose?: () => void;
  cart: CartType | null;
}

const Cart: React.FC<Cart> = ({onClose, cart}) => {
  const linesCount = Boolean(cart?.lines?.edges?.length || 0);

  return (
    <>
      <CartEmpty hidden={linesCount} onClose={onClose} />
      <CartDetails cart={cart} />
    </>
  );
};

export default Cart;
