// src/components/common/SEO/SEO.tsx
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getTestMeta, getTestThumbnailUrl } from '@/data/testMeta';

interface SEOProps {
  // 수동 설정 가능 (우선순위 높음)
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  siteName?: string;
  twitterCard?: 'summary' | 'summary_large_image';

  // 자동 설정 비활성화 옵션
  disableAutoDetection?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type,
  siteName = 'AIverse',
  twitterCard = 'summary_large_image',
  disableAutoDetection = false,
}: SEOProps) => {
  const location = useLocation();

  // URL에서 ID 추출 (test, interactive 경로 처리)
  const getIdFromPath = () => {
    const pathSegments = location.pathname.split('/'); // 예: '/interactive/orb-collector' -> ['', 'interactive', 'orb-collector']
    const lastSegment = pathSegments[pathSegments.length - 1];

    // '/test/...' 또는 '/interactive/...' 형태의 경로를 감지
    if ((pathSegments.includes('test') || pathSegments.includes('interactive')) && lastSegment) {
      return lastSegment; // 'orb-collector' 반환
    }

    return null;
  };

  // 자동 메타데이터 감지
  const getAutoMetadata = () => {
    if (disableAutoDetection) {
      return {
        autoTitle: 'AIverse - AI의 모든 것을 체험하다',
        autoDescription:
          'AI 얼굴 분석, MBTI 테스트, 성격 분석 등 다양한 AI 테스트를 무료로 체험해보세요. 300만 명 이상 참여한 인기 테스트들!',
        autoKeywords:
          'AI 테스트, 얼굴 분석, MBTI 테스트, 성격 테스트, 인공지능, 얼굴 나이, 외모 등급',
        autoImage: 'https://aiverse-phi.vercel.app/images/aiverse-og-image.png',
        autoType: 'website' as const,
      };
    }

    const pathId = getIdFromPath(); 

    if (pathId) {
      // 테스트 또는 인터랙티브 페이지인 경우
      const meta = getTestMeta(pathId);
      const thumbnailUrl = getTestThumbnailUrl(pathId);

      return {
        autoTitle: meta.title,
        autoDescription: meta.description,
        autoKeywords: meta.keywords,
        autoImage: thumbnailUrl,
        autoType: 'article' as const,
      };
    }

    // 기타 페이지별 설정
    if (location.pathname === '/') {
      return {
        autoTitle: 'AIverse - AI의 모든 것을 체험하다',
        autoDescription:
          'AI 얼굴 분석, MBTI 테스트, 성격 분석 등 다양한 AI 테스트를 무료로 체험해보세요. 300만 명 이상 참여한 인기 테스트들!',
        autoKeywords: 'AI 테스트, 얼굴 분석, MBTI 테스트, 성격 테스트, 인공지능',
        autoImage: 'https://aiverse-phi.vercel.app/images/aiverse-og-image.png',
        autoType: 'website' as const,
      };
    }

    if (location.pathname.startsWith('/tests')) {
      return {
        autoTitle: '테스트 목록 - AIverse',
        autoDescription: 'AI 분석, 성격 테스트, MBTI, 연애 스타일 등 다양한 테스트를 둘러보세요!',
        autoKeywords: 'AI 테스트 목록, MBTI 테스트, 성격 분석, 연애 테스트',
        autoImage: 'https://aiverse-phi.vercel.app/images/aiverse-og-image.png',
        autoType: 'website' as const,
      };
    }

    if (location.pathname === '/interactive-hub') {
      const meta = getTestMeta('interactive-experience');
      return {
        autoTitle: meta.title,
        autoDescription: meta.description,
        autoKeywords: meta.keywords,
        autoImage: getTestThumbnailUrl('interactive-experience'),
        autoType: 'website' as const,
      };
    }

    // 기본값
    return {
      autoTitle: 'AIverse - AI의 모든 것을 체험하다',
      autoDescription:
        'AI 얼굴 분석, MBTI 테스트, 성격 분석 등 다양한 AI 테스트를 무료로 체험해보세요!',
      autoKeywords: 'AI 테스트, 얼굴 분석, MBTI 테스트, 성격 테스트',
      autoImage: 'https://aiverse-phi.vercel.app/images/aiverse-og-image.png',
      autoType: 'website' as const,
    };
  };

  const { autoTitle, autoDescription, autoKeywords, autoImage, autoType } = getAutoMetadata();

  // 최종 메타데이터 (수동 설정이 우선)
  const finalTitle = title || autoTitle;
  const finalDescription = description || autoDescription;
  const finalKeywords = keywords || autoKeywords;
  const finalImage = image || autoImage;
  const finalType = type || autoType;
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />

      {/* Open Graph 메타 태그 */}
      <meta property="og:type" content={finalType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card 메타 태그 */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:site" content="@aiverse" />

      {/* 추가 메타 태그 */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="AIverse" />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default SEO;
