import React, {useState} from 'react';
import {useIsHomePath} from '~/lib/utils';
import CartDrawer from './CartDrawer';
import DesktopHeader from './DesktopHeader';

interface Header {
  title: string;
  menu: any;
}

const Header: React.FC<Header> = ({title, menu}) => {
  const isHome = useIsHomePath();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const closeCart = () => setIsCartOpen(false);
  return (
    <>
      <CartDrawer
        isOpen={isCartOpen}
        onClose={closeCart}
        setIsCartOpen={setIsCartOpen}
      />
      <DesktopHeader
        isHome={isHome}
        title={title}
        menu={menu}
        openCart={() => {}}
      />
    </>
  );
};

export default Header;
