import { Outlet } from 'react-router-dom';
import { StyledLayout, StyledContent } from './Layout.style';
import Header from '../Header/Header';
import SEO from '@/components/common/SEO/SEO';

const Layout = () => {
  return (
    <>
      {/* 🎯 한 번만 설정으로 모든 페이지 SEO 자동 적용 */}
      <SEO />
      
      <StyledLayout>
        <Header />
        <StyledContent>
          <Outlet />
        </StyledContent>
      </StyledLayout>
    </>
  );
};

export default Layout;
