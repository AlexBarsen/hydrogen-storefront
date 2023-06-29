import {Button, Typography} from '@material-ui/core';
import {Container} from '@mui/material';
import React, {useRef} from 'react';
import {useScroll} from 'react-use';

interface CartEmtpy {
  hidden: boolean;
  onClose?: () => void;
}

const CartEmpty: React.FC<CartEmtpy> = ({hidden = false, onClose}) => {
  return (
    <>
      {hidden ? null : (
        <Container>
          <Typography>
            Looks like you haven&rsquo;t added anything yet, let&rsquo;s get you
            started!
          </Typography>
          <div>
            <Button onClick={onClose}>Continue shopping</Button>
          </div>
        </Container>
      )}
    </>
  );
};

export default CartEmpty;
