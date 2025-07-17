import { Outlet } from 'react-router-dom';
import { StyledLayout, StyledContent } from './Layout.style';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <StyledContent>
        <Outlet />
      </StyledContent>
    </StyledLayout>
  );
};

export default Layout;
