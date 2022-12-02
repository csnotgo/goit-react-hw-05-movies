import { Outlet } from 'react-router-dom';
import { HeaderBox, Link } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <HeaderBox>
        <Link to={'/'}>Home</Link>
        <Link to={'movies'}>Movies</Link>
      </HeaderBox>
      <Outlet />
    </div>
  );
};

export default Layout;
