import {useMatches, useParams} from '@remix-run/react';
import React from 'react';
import {useWindowScroll} from 'react-use';
import {Link} from '@remix-run/react';
import {Container} from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';

interface DesktopHeader {
  isHome: boolean;
  openCart: () => void;
  menu?: any;
  title: string;
}

const DesktopHeader: React.FC<DesktopHeader> = ({
  isHome,
  menu,
  openCart,
  title,
}) => {
  const params = useParams();
  const {y} = useWindowScroll();
  const [root] = useMatches();
  const isLoggedIn = root.data?.isLoggedIn;

  return (
    <Container
      style={{
        display: 'flex',
        width: '800px',
        justifyContent: 'space-evenly',
        marginLeft: '25px',
      }}
    >
      <Link className="font-bold" to="/" prefetch="intent">
        {title}
      </Link>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '500px',
        }}
      >
        {(menu?.items || []).map((item: any) => (
          <Link
            key={item.id}
            to={item.to}
            target={item.target}
            prefetch="intent"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      {isLoggedIn ? (
        <Link to="/account">
          <AccountCircleIcon />
        </Link>
      ) : (
        <Link to="/account/login">
          <span>Login </span>
          <LoginIcon />
        </Link>
      )}
    </Container>
  );
};

export default DesktopHeader;
