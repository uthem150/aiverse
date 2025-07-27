// src/data/testMeta.ts
interface TestMetaData {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
}

export const testMetaData: Record<string, TestMetaData> = {
  'face-age-test': {
    title: 'AI 얼굴 나이 테스트 - AIverse',
    description:
      'AI가 당신의 얼굴을 분석해서 나이를 맞춰보는 테스트! 정확도 95% 이상의 고급 AI 기술로 분석합니다.',
    keywords: 'AI 얼굴 나이, 얼굴 나이 테스트, AI 분석, 얼굴 인식, 나이 예측',
    ogTitle: '🤖 AI 얼굴 나이 테스트',
    ogDescription: 'AI가 당신의 실제 나이를 맞춰볼까요? 120만 명이 참여한 인기 테스트!',
  },
  'face-grade-test': {
    title: 'AI 외모 등급 테스트 - AIverse',
    description: 'AI가 분석하는 7단계 외모 등급! 객관적인 AI 분석으로 당신의 외모를 평가해보세요.',
    keywords: 'AI 외모 분석, 외모 등급, 얼굴 분석, AI 미모 테스트, 외모 평가',
    ogTitle: '✨ AI 외모 등급 테스트',
    ogDescription: 'AI가 객관적으로 분석하는 당신의 외모 등급은? 98만 명 참여!',
  },
  'love-style-test': {
    title: '💕 내 연애 스타일 테스트 - AIverse',
    description:
      'MZ세대 연애 문화를 반영한 나만의 연애 스타일을 찾아보세요! 8가지 동물상으로 알아보는 연애 유형.',
    keywords: '연애 스타일, 연애 유형, 동물상, MZ세대 연애, 연애 테스트',
    ogTitle: '💕 내 연애 스타일 테스트',
    ogDescription: '강아지상? 고양이상? 나의 연애 스타일을 동물로 알아보세요!',
  },
  'ideal-type-test': {
    title: '🎨 취향으로 보는 이상형 테스트 - AIverse',
    description:
      '당신의 라이프스타일과 취향으로 완벽한 이상형을 찾아보세요! 8가지 유형의 이상형 분석.',
    keywords: '이상형 테스트, 취향 분석, 라이프스타일, 연애 궁합, 이상형 유형',
    ogTitle: '🎨 취향으로 보는 이상형 테스트',
    ogDescription: '당신의 취향이 말해주는 완벽한 이상형은? 지금 바로 확인해보세요!',
  },
  'mbti-compatibility-test': {
    title: '💖 MBTI 연애 궁합 테스트 - AIverse',
    description: '16가지 MBTI 유형별 최고의 연애 궁합을 찾아보세요! 과학적 근거 기반 궁합 분석.',
    keywords: 'MBTI 궁합, MBTI 연애, 성격 유형, 연애 궁합, MBTI 테스트',
    ogTitle: '💖 MBTI 연애 궁합 테스트',
    ogDescription: '당신의 MBTI와 완벽한 궁합인 사람은? 15만 명이 참여한 인기 테스트!',
  },
  'kpop-style-test': {
    title: '🎵 K-pop 그룹 스타일 테스트 - AIverse',
    description:
      '당신의 성향과 가장 잘 맞는 K-pop 그룹을 찾아보세요! BTS, 블랙핑크, 뉴진스 등 인기 그룹 추천.',
    keywords: 'K-pop 테스트, 케이팝 그룹, 아이돌 성향, BTS, 블랙핑크, 뉴진스',
    ogTitle: '🎵 K-pop 그룹 스타일 테스트',
    ogDescription: '당신과 가장 잘 맞는 K-pop 그룹은? 나만의 아이돌 스타일 찾기!',
  },
  'ott-preference-test': {
    title: '📺 OTT 취향 분석 테스트 - AIverse',
    description:
      '당신의 성향에 맞는 완벽한 OTT 콘텐츠를 찾아보세요! 넷플릭스, 디즈니+ 등 맞춤 추천.',
    keywords: 'OTT 추천, 넷플릭스 테스트, 드라마 추천, 영화 취향, 콘텐츠 분석',
    ogTitle: '📺 OTT 취향 분석 테스트',
    ogDescription: '당신만을 위한 완벽한 OTT 콘텐츠 추천! 지금 바로 확인해보세요.',
  },
  // 기존 MBTI 테스트들
  'mbti-pororo': {
    title: 'MBTI 뽀로로 캐릭터 테스트 - AIverse',
    description: '당신과 닮은 뽀로로 캐릭터를 찾아보세요! 16가지 MBTI 유형별 캐릭터 분석.',
    keywords: 'MBTI 뽀로로, 뽀로로 테스트, MBTI 캐릭터, 성격 테스트',
    ogTitle: '🐧 MBTI 뽀로로 캐릭터 테스트',
    ogDescription: '당신은 뽀로로? 크롱? 루피? 85만 명이 참여한 인기 테스트!',
  },
  'mbti-jewelry': {
    title: 'MBTI 보석 테스트 - AIverse',
    description: '당신의 성격을 나타내는 보석은? 16가지 MBTI 유형별 보석 분석.',
    keywords: 'MBTI 보석, 성격 보석, MBTI 테스트, 보석 성격',
    ogTitle: '💎 MBTI 보석 테스트',
    ogDescription: '당신을 닮은 보석을 찾아보세요! 다이아몬드? 루비? 사파이어?',
  },
  'mbti-stone': {
    title: 'MBTI 돌멩이 테스트 - AIverse',
    description: '당신의 MBTI를 돌멩이로 표현하면? 재미있는 MBTI 분석.',
    keywords: 'MBTI 돌멩이, 재미있는 MBTI, MBTI 테스트',
    ogTitle: '🪨 MBTI 돌멩이 테스트',
    ogDescription: '당신은 어떤 돌멩이일까요? 68만 명이 웃으며 참여한 테스트!',
  },
  'mbti-story-character': {
    title: 'MBTI 동화 캐릭터 테스트 - AIverse',
    description: '당신과 닮은 동화 속 캐릭터는? 16가지 MBTI 유형별 동화 캐릭터.',
    keywords: 'MBTI 동화, 동화 캐릭터, MBTI 테스트, 성격 분석',
    ogTitle: '📚 MBTI 동화 캐릭터 테스트',
    ogDescription: '신데렐라? 백설공주? 당신을 닮은 동화 캐릭터를 찾아보세요!',
  },
};

export const getTestMeta = (testId: string): TestMetaData => {
  return (
    testMetaData[testId] || {
      title: 'AIverse - AI의 모든 것을 체험하다',
      description:
        'AI 얼굴 분석, MBTI 테스트, 성격 분석 등 다양한 AI 테스트를 무료로 체험해보세요!',
      keywords: 'AI 테스트, 얼굴 분석, MBTI 테스트, 성격 테스트',
    }
  );
};

// 테스트별 썸네일 URL 생성 함수
export const getTestThumbnailUrl = (testId: string): string => {
  // 개별 썸네일이 있는 경우 해당 이미지 사용
  const thumbnailExists = [
    'love-style-test',
    'face-age-test',
    'ideal-type-test',
    'mbti-compatibility-test',
    'kpop-style-test',
    'ott-preference-test',
  ];

  if (thumbnailExists.includes(testId)) {
    return `https://aiverse-phi.vercel.app/images/thumbnails/${testId}.png`;
  }

  // 기본 이미지 사용
  return `https://aiverse-phi.vercel.app/images/thumbnails/${testId}.png`;
};

// 기본 사이트 이미지 URL
export const getDefaultSiteImage = (): string => {
  return 'https://aiverse-phi.vercel.app/images/aiverse-og-image.png';
};
