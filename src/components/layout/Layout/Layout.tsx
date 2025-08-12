import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { StyledLayout, StyledContent, StyledInteractiveContent } from './Layout.style';
import Header from '../Header/Header';
import SEO from '@/components/common/SEO/SEO';
import StructuredData from '@/components/common/StructuredData/StructuredData';
import { initGA, trackPageView } from '@/utils/analytics';
import SplashCursor from '@/components/reactBits/SplashCursor/SplashCursor';

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

  // 인터랙티브 페이지인지 판별하는 함수
  const isInteractivePage = () => {
    const path = location.pathname;

    // 테스트 페이지들
    if (path.startsWith('/test/')) return true;

    // 인터랙티브 체험관 관련 페이지들
    if (path === '/interactive-hub') return true;
    if (path.startsWith('/interactive/')) return true;
    if (path.startsWith('/game/')) return true;

    return false;
  };

  const useSpecialLayout = isInteractivePage();

  return (
    <>
      {/* SEO 자동 적용 */}
      <SEO />

      {/* 구조화 데이터 */}
      <StructuredData testId={testId} />

      {/* 조건부 커서 효과 - 체험관과 게임 페이지가 아닐 때만 활성화 */}
      {!useSpecialLayout && <SplashCursor />}

      <StyledLayout>
        <Header />

        {useSpecialLayout ? (
          <StyledInteractiveContent>
            <Outlet />
          </StyledInteractiveContent>
        ) : (
          <StyledContent>
            <Outlet />
          </StyledContent>
        )}
      </StyledLayout>
    </>
  );
};

export default Layout;
