import React, {Suspense} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Cart from './Cart/Cart';
import {Await, useMatches} from '@remix-run/react';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface CartDrawer {
  isOpen: boolean;
  setIsCartOpen: any;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawer> = ({isOpen, setIsCartOpen, onClose}) => {
  const [root] = useMatches();

  return (
    <div>
      <Button onClick={() => setIsCartOpen(true)}>
        <ShoppingBagOutlinedIcon />
      </Button>
      <Drawer anchor={'right'} open={isOpen} onClose={onClose}>
        {/* add fallback for suspense */}
        <Suspense>
          <Await resolve={root.data?.cart}>
            {(cart) => <Cart layout="drawer" onClose={onClose} cart={cart} />}
          </Await>
        </Suspense>
      </Drawer>
    </div>
  );
};
export default CartDrawer;
