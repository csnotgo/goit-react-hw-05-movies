import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderBox, Link } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <HeaderBox>
        <Link to={'/'}>Home</Link>
        <Link to={'movies'}>Movies</Link>
      </HeaderBox>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
