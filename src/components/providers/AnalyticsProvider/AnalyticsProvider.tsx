import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, trackPageView } from '@/utils/analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const location = useLocation();

  useEffect(() => {
    // GA 초기화
    initGA();
  }, []);

  useEffect(() => {
    // 페이지 변경시 추적
    trackPageView(location.pathname + location.search);
  }, [location]);

  return <>{children}</>;
};

export default AnalyticsProvider;
