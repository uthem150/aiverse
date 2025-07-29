// Google Analytics 4 설정
declare global {
  interface Window {
    gtag: (...args: any[]) => void; // rest parameters 사용
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-PNMENQ28TE'; // 실제 ID

// Google Analytics 초기화
export const initGA = () => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: any[]) {
    // rest parameters 사용
    window.dataLayer.push(args); // arguments 대신 args 사용
  };
  window.gtag('js', new Date().toISOString()); // Date를 string으로 변환
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// 페이지 뷰 추적
export const trackPageView = (path: string, title?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title || document.title,
  });
};

// 이벤트 추적 (타입 안전성 개선)
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  const eventParams: Record<string, any> = {
    event_category: category,
  };

  if (label) eventParams.event_label = label;
  if (value !== undefined) eventParams.value = value;

  window.gtag('event', action, eventParams);
};

// 테스트 관련 이벤트들
export const trackTestStart = (testId: string) => {
  trackEvent('test_start', 'engagement', testId);
};

export const trackTestComplete = (testId: string, result: string) => {
  trackEvent('test_complete', 'engagement', `${testId}_${result}`);
};

export const trackTestShare = (testId: string, platform: string) => {
  trackEvent('test_share', 'social', `${testId}_${platform}`);
};

export const trackImageGeneration = (testId: string) => {
  trackEvent('image_generation', 'engagement', testId);
};

// 추가적인 유용한 이벤트들
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', 'interaction', `${buttonName}_${location}`);
};

export const trackTestAbandon = (testId: string, step: string) => {
  trackEvent('test_abandon', 'engagement', `${testId}_${step}`);
};

export const trackErrorOccurred = (errorType: string, errorMessage: string) => {
  trackEvent('error_occurred', 'error', `${errorType}_${errorMessage}`);
};
