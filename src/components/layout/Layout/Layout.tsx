import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { StyledLayout, StyledContent } from './Layout.style';
import Header from '../Header/Header';
import SEO from '@/components/common/SEO/SEO';
import StructuredData from '@/components/common/StructuredData/StructuredData';
import { initGA, trackPageView } from '@/utils/analytics';

const Layout = () => {
  const location = useLocation();

  // 🚀 GA 초기화 (한 번만 실행)
  useEffect(() => {
    initGA();
  }, []);

  // 📊 페이지 변경시 추적
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  // URL에서 테스트 ID 추출
  const getTestIdFromPath = () => {
    const pathSegments = location.pathname.split('/');
    if (pathSegments.includes('test') && pathSegments.length > 2) {
      return pathSegments[pathSegments.length - 1];
    }
    return undefined;
  };

  const testId = getTestIdFromPath();

  return (
    <>
      {/* SEO 자동 적용 */}
      <SEO />

      {/* 구조화 데이터 */}
      <StructuredData testId={testId} />

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
