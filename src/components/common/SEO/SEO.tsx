// src/components/common/SEO/SEO.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  siteName?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

const SEO = ({
  title = 'AIverse - AI의 모든 것을 체험하다',
  description = 'AI 얼굴 분석, MBTI 테스트, 성격 분석 등 다양한 AI 테스트를 무료로 체험해보세요. 300만 명 이상 참여한 인기 테스트들!',
  keywords = 'AI 테스트, 얼굴 분석, MBTI 테스트, 성격 테스트, 인공지능, 얼굴 나이, 외모 등급',
  image = 'https://aiverse-phi.vercel.app/images/aiverse-og-image.png',
  url,
  type = 'website',
  siteName = 'AIverse',
  twitterCard = 'summary_large_image',
}: SEOProps) => {
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph 메타 태그 */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card 메타 태그 */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
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
