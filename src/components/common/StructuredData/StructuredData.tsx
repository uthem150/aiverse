import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { testCategories } from '@/data/tests';
import { getTestMeta } from '@/data/testMeta';

interface StructuredDataProps {
  testId?: string;
}

const StructuredData = ({ testId }: StructuredDataProps) => {
  const location = useLocation();
  const currentUrl = `https://aiverse-phi.vercel.app${location.pathname}`;

  // 🏠 홈페이지용 WebSite 스키마
  const getWebSiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AIverse',
    alternateName: '에이아이버스',
    description: 'AI 기술을 활용한 다양한 무료 테스트 플랫폼',
    url: 'https://aiverse-phi.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://aiverse-phi.vercel.app/tests?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AIverse',
      url: 'https://aiverse-phi.vercel.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aiverse-phi.vercel.app/images/aiverse-logo.png',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'AI 테스트 카테고리',
      itemListElement: testCategories.map((category, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: category.name,
        description: category.description,
        url: `https://aiverse-phi.vercel.app/tests/${category.id}`,
      })),
    },
  });

  // 🧪 개별 테스트용 WebApplication + HowTo + FAQ 스키마
  const getTestSchemas = (testId: string) => {
    const test = testCategories.flatMap(category => category.tests).find(t => t.id === testId);

    if (!test) return [];

    const testMeta = getTestMeta(testId);
    const category = testCategories.find(cat => cat.tests.some(t => t.id === testId));

    // 🎮 WebApplication 스키마 (메인)
    const webAppSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: test.title,
      alternateName: testMeta.title,
      description: test.description,
      url: currentUrl,
      applicationCategory: 'EntertainmentApplication',
      applicationSubCategory: category?.name || 'AI 테스트',
      operatingSystem: 'Web Browser',
      permissions: 'none',
      memoryRequirements: '최소',
      storageRequirements: '없음',

      // 💰 무료 강조!
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'KRW',
        availability: 'https://schema.org/InStock',
        validFrom: '2024-01-01',
        priceValidUntil: '2025-12-31',
        itemCondition: 'https://schema.org/NewCondition',
      },

      // ⏱️ 소요 시간 정보
      timeRequired: `PT${test.estimatedTime}M`,

      // 🎯 주요 특징들
      featureList: [
        '🤖 AI 인공지능 분석',
        '📱 모바일 완벽 지원',
        '🎨 결과 이미지 자동 생성',
        '📤 소셜 미디어 공유 기능',
        '⚡ 실시간 즉시 결과',
        '🔒 개인정보 보호 (저장 안함)',
      ],

      // 📊 사용성 정보
      browserRequirements: 'Chrome, Safari, Firefox, Edge 모든 브라우저',
      inLanguage: 'ko-KR',
      isAccessibleForFree: true,
      isFamilyFriendly: true,

      // 🏷️ 카테고리 및 태그
      genre: [category?.name, 'AI 테스트', '성격 분석', '재미'],
      keywords: testMeta.keywords,

      // 🎪 추가 매력 포인트
      audience: {
        '@type': 'Audience',
        audienceType: '일반인, 학생, 직장인',
        geographicArea: '대한민국',
      },

      publisher: {
        '@type': 'Organization',
        name: 'AIverse',
        url: 'https://aiverse-phi.vercel.app',
      },
    };

    // 📋 HowTo 스키마 (사용법 단계별 설명)
    const howToSchema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: `${test.title} 사용법`,
      description: `${test.title}을 하는 방법을 단계별로 안내합니다`,
      image: `https://aiverse-phi.vercel.app/images/tests/${testId}-guide.png`,
      totalTime: `PT${test.estimatedTime}M`,
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'KRW',
        value: '0',
      },
      supply: [
        {
          '@type': 'HowToSupply',
          name: '스마트폰 또는 컴퓨터',
        },
        {
          '@type': 'HowToSupply',
          name: '인터넷 연결',
        },
      ],
      step: getHowToSteps(testId), // ✅ test 매개변수 제거
      publisher: {
        '@type': 'Organization',
        name: 'AIverse',
      },
    };

    // ❓ FAQ 스키마 (자주 묻는 질문)
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: getFAQItems(testId), // ✅ test 매개변수 제거
    };

    return [webAppSchema, howToSchema, faqSchema];
  };

  // 📝 테스트별 사용법 단계 생성 - ✅ 매개변수 수정
  const getHowToSteps = (testId: string) => {
    // ✅ 필요한 경우 testId로 테스트 정보 찾기
    const test = testCategories.flatMap(category => category.tests).find(t => t.id === testId);

    const commonSteps = [
      {
        '@type': 'HowToStep',
        position: 1,
        name: '사이트 접속',
        text: 'AIverse 사이트에 접속하여 원하는 테스트를 선택합니다',
        image: 'https://aiverse-phi.vercel.app/images/guide/step1.png',
      },
    ];

    // 테스트별 맞춤 단계들
    const testSpecificSteps: Record<string, any[]> = {
      'face-age-test': [
        {
          '@type': 'HowToStep',
          position: 2,
          name: '사진 업로드',
          text: '정면을 바라보는 선명한 얼굴 사진을 업로드합니다',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'AI 분석',
          text: 'AI가 얼굴을 분석하여 나이를 예측합니다 (약 3초 소요)',
        },
      ],
      'face-grade-test': [
        {
          '@type': 'HowToStep',
          position: 2,
          name: '성별 선택',
          text: '더 정확한 분석을 위해 성별을 선택합니다',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: '사진 업로드',
          text: '얼굴이 선명하게 나온 사진을 업로드합니다',
        },
      ],
      // MBTI 테스트들의 공통 단계
      'mbti-pororo': [
        {
          '@type': 'HowToStep',
          position: 2,
          name: '질문 답변',
          text: '성격과 관련된 질문들에 솔직하게 답변합니다',
        },
      ],
    };

    const finalStep = {
      '@type': 'HowToStep',
      position: 99,
      name: '결과 확인 및 공유',
      text: `테스트 결과를 확인하고 친구들과 공유해보세요${test ? ` (약 ${test.estimatedTime}분 소요)` : ''}`, // ✅ test 객체 활용
    };

    return [
      ...commonSteps,
      ...(testSpecificSteps[testId] || testSpecificSteps['mbti-pororo']),
      finalStep,
    ];
  };

  // ❓ 테스트별 FAQ 생성 - ✅ 매개변수 수정
  const getFAQItems = (testId: string) => {
    // ✅ 필요한 경우 testId로 테스트 정보 찾기
    const test = testCategories.flatMap(category => category.tests).find(t => t.id === testId);

    const commonFAQs = [
      {
        '@type': 'Question',
        name: '이 테스트는 무료인가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '네, 모든 테스트는 완전 무료입니다. 회원가입도 필요 없어요!',
        },
      },
      {
        '@type': 'Question',
        name: '개인정보가 저장되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '아니요, 업로드한 사진이나 개인정보는 저장되지 않습니다. 분석 후 즉시 삭제됩니다.',
        },
      },
      {
        '@type': 'Question',
        name: `테스트 시간은 얼마나 걸리나요?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `약 ${test?.estimatedTime || 3}분 정도 소요됩니다. 매우 빠르고 간단해요!`, // ✅ test 객체 활용
        },
      },
    ];

    const testSpecificFAQs: Record<string, any[]> = {
      'face-age-test': [
        {
          '@type': 'Question',
          name: 'AI 분석이 정확한가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google의 TensorFlow 기술을 사용하여 높은 정확도를 자랑합니다. 하지만 재미 목적의 테스트입니다!',
          },
        },
      ],
      'face-grade-test': [
        {
          '@type': 'Question',
          name: '외모 등급은 어떻게 나뉘나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '최상위천상계 > 천상계 > 최상위인간계 > 상위권인간계 > 인간계 > 못생긴인간계 > 마계로 7단계 분류됩니다.',
          },
        },
      ],
    };

    return [...commonFAQs, ...(testSpecificFAQs[testId] || [])];
  };

  // 🗂️ 테스트 목록 페이지용 CollectionPage 스키마
  const getTestListSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI 테스트 모음',
    description: '다양한 AI 테스트들을 한 곳에서 만나보세요',
    url: currentUrl,
    mainEntity: {
      '@type': 'ItemList',
      name: 'AI 테스트 목록',
      itemListElement: testCategories.flatMap(category =>
        category.tests.map((test, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'WebApplication',
            name: test.title,
            description: test.description,
            url: `https://aiverse-phi.vercel.app/test/${test.id}`,
            applicationCategory: 'EntertainmentApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'KRW',
            },
            timeRequired: `PT${test.estimatedTime}M`,
          },
        }))
      ),
    },
  });

  // 📍 페이지별 스키마 선택
  const getSchemas = () => {
    if (testId) {
      return getTestSchemas(testId);
    } else if (location.pathname === '/') {
      return [getWebSiteSchema()];
    } else if (location.pathname.startsWith('/tests')) {
      return [getTestListSchema()];
    }
    return [getWebSiteSchema()];
  };

  const schemas = getSchemas();

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema, null, 2)}
        </script>
      ))}
    </Helmet>
  );
};

export default StructuredData;
