// src/components/common/SEO/SEO.tsx
import { Helmet } from 'react-helmet-async';
import { useLocation, useMatches } from 'react-router-dom';
import { getTestMeta, getTestThumbnailUrl } from '@/data/testMeta';

interface SEOProps {
  // 수동 설정(우선순위 최상)
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  siteName?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  // 자동 추론 비활성화
  disableAutoDetection?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type,
  siteName = 'AIverse-phi',
  twitterCard = 'summary_large_image',
  disableAutoDetection = false,
}: SEOProps) => {
  const location = useLocation();
  // 훅은 조건 없이 항상 호출
  const matches = useMatches();

  // 404 여부: handle 플래그로 안전하게 판단
  const is404 = matches.some((m: any) => m?.handle?.is404 === true);

  // 경로에서 /test/:id, /interactive/:id의 id 추출
  const getIdFromPath = () => {
    const segments = location.pathname.split('/').filter(Boolean);
    if ((segments[0] === 'test' || segments[0] === 'interactive') && segments[1]) {
      return segments[1];
    }
    return null;
  };

  // 자동 메타데이터 추론
  const getAutoMetadata = () => {
    // 404 전용 기본 메타
    if (is404) {
      return {
        autoTitle: '404 - 페이지를 찾을 수 없습니다 | AIverse-phi',
        autoDescription:
          '요청하신 페이지를 찾을 수 없습니다. 홈으로 이동하거나 검색을 이용해 원하는 콘텐츠를 찾아보세요.',
        autoKeywords: '404, 페이지를 찾을 수 없습니다, not found',
        autoImage: 'https://aiverse-phi.vercel.app/images/aiverse-og-image.png',
        autoType: 'website' as const,
      };
    }

    if (disableAutoDetection) {
      return {
        autoTitle: 'AIverse-phi - AI의 모든 것을 체험하다',
        autoDescription:
          'AI 얼굴 분석, MBTI/연애 성향 테스트부터 순발력·공간 지각력·IQ·두뇌게임 등 두뇌활동 무료 게임까지 한 곳에서 즐겨보세요.',
        autoKeywords:
          'AI 테스트, 얼굴 분석, MBTI 테스트, 성격 테스트, 순발력 게임, 공간 지각력 게임, IQ게임, 두뇌게임, 두뇌활동 무료게임',
        autoImage: 'https://aiverse-phi.vercel.app/images/aiverse-og-image.png',
        autoType: 'website' as const,
      };
    }

    // 상세 페이지
    const pathId = getIdFromPath();
    if (pathId) {
      const meta = getTestMeta(pathId);
      const thumb = getTestThumbnailUrl(pathId);
      return {
        autoTitle: meta.title,
        autoDescription: meta.description,
        autoKeywords: meta.keywords,
        autoImage: thumb,
        autoType: 'article' as const, // 상세 콘텐츠는 article로
      };
    }

    // 인터랙티브 허브
    if (location.pathname === '/interactive-hub') {
      const meta = getTestMeta('interactive-hub');
      return {
        autoTitle: meta.title,
        autoDescription: meta.description,
        autoKeywords: meta.keywords,
        autoImage: getTestThumbnailUrl('interactive-hub'),
        autoType: 'website' as const,
      };
    }

    // 목록/검색
    if (
      location.pathname === '/tests' ||
      location.pathname.startsWith('/tests/') ||
      location.pathname === '/search'
    ) {
      return {
        autoTitle: '테스트 목록 - AIverse-phi',
        autoDescription:
          'AI 분석·성격·연애·라이프스타일 등 다양한 테스트를 카테고리별로 탐색하세요.',
        autoKeywords: 'AI 테스트 목록, MBTI 테스트, 성격 분석, 연애 테스트, 테스트 카테고리',
        autoImage: 'https://aiverse-phi.vercel.app/images/aiverse-og-image.png',
        autoType: 'website' as const,
      };
    }

    // 홈
    if (location.pathname === '/') {
      return {
        autoTitle: 'AIverse-phi - AI의 모든 것을 체험하다',
        autoDescription:
          'AI 얼굴 분석, MBTI/연애 성향 테스트부터 순발력·공간 지각력·IQ·두뇌게임 등 두뇌활동 무료 게임까지 한 곳에서 즐겨보세요.',
        autoKeywords:
          'AI 테스트, 얼굴 분석, MBTI 테스트, 성격 테스트, 순발력 게임, 공간 지각력 게임, IQ게임, 두뇌게임, 두뇌활동 무료게임',
        autoImage: 'https://aiverse-phi.vercel.app/images/aiverse-og-image.png',
        autoType: 'website' as const,
      };
    }

    // 기본값
    return {
      autoTitle: 'AIverse-phi - AI의 모든 것을 체험하다',
      autoDescription:
        'AI 얼굴 분석, MBTI/연애 성향 테스트부터 순발력·공간 지각력·IQ·두뇌게임 등 두뇌활동 무료 게임까지 한 곳에서 즐겨보세요.',
      autoKeywords:
        'AI 테스트, 얼굴 분석, MBTI 테스트, 성격 테스트, 순발력 게임, 공간 지각력 게임, IQ게임, 두뇌게임, 두뇌활동 무료게임',
      autoImage: 'https://aiverse-phi.vercel.app/images/aiverse-og-image.png',
      autoType: 'website' as const,
    };
  };

  const { autoTitle, autoDescription, autoKeywords, autoImage, autoType } = getAutoMetadata();

  // 최종 메타(수동 > 자동)
  const finalTitle = title || autoTitle;
  const finalDescription = description || autoDescription;
  const finalKeywords = keywords || autoKeywords;
  const finalImage = image || autoImage;
  const finalType = type || autoType;
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  // 404일 때만 noindex, 평소엔 index
  const robotsValue = is404 ? 'noindex, follow' : 'index, follow';

  return (
    <Helmet>
      {/* 기본 메타 */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />

      {/* Open Graph */}
      <meta property="og:type" content={finalType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="AIverse-phi 대표 이미지" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:image:alt" content="AIverse-phi 대표 이미지" />
      <meta name="twitter:site" content="@aiverse" />

      {/* robots */}
      <meta name="robots" content={robotsValue} />
      <meta name="googlebot" content={robotsValue} />
      <meta name="author" content="AIverse-phi" />

      {/* Canonical */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default SEO;
