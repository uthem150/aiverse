import type { PersonalityTestData } from '@/types/personalityTest';

export const kpopStyleTestData: PersonalityTestData = {
  id: 'kpop-style-test',
  title: '🎵 내 K-pop 그룹 스타일 테스트',
  description: '당신의 성향과 가장 잘 맞는 K-pop 그룹을 찾아보세요!',
  category: 'entertainment',
  resultTypes: ['bts', 'blackpink', 'twice', 'stray_kids', 'itzy', 'aespa', 'newjeans', 'ive'],
  questions: [
    {
      id: 'q1',
      question: '친구들과 노래방에 갔을 때 당신의 모습은?',
      options: [
        {
          id: 'q1_a',
          text: '감성적인 발라드로 분위기 메이커',
          emoji: '🎤',
          scores: { bts: 3, newjeans: 2, twice: 1 },
        },
        {
          id: 'q1_b',
          text: '파워풀한 댄스곡으로 무대 장악',
          emoji: '💃',
          scores: { blackpink: 3, itzy: 2, ive: 1 },
        },
        {
          id: 'q1_c',
          text: '귀여운 곡으로 모두를 미소짓게',
          emoji: '😊',
          scores: { twice: 3, newjeans: 2, ive: 1 },
        },
        {
          id: 'q1_d',
          text: '힙합으로 카리스마 발산',
          emoji: '🔥',
          scores: { stray_kids: 3, blackpink: 2, bts: 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '선호하는 패션 스타일은?',
      options: [
        {
          id: 'q2_a',
          text: '미니멀하고 세련된 스트리트',
          emoji: '👕',
          scores: { newjeans: 3, bts: 2 },
        },
        {
          id: 'q2_b',
          text: '화려하고 독특한 하이패션',
          emoji: '✨',
          scores: { aespa: 3, blackpink: 2 },
        },
        {
          id: 'q2_c',
          text: '깔끔하고 우아한 클래식',
          emoji: '👗',
          scores: { ive: 3, twice: 2 },
        },
        {
          id: 'q2_d',
          text: '편안하고 캐주얼한 스포티',
          emoji: '👟',
          scores: { stray_kids: 3, itzy: 2 },
        },
      ],
    },
    // ... q3 ~ q16: 나머지 14개 질문 (선호하는 컨셉, 무대 스타일, 음악 장르, SNS 사용 패턴 등)
  ],
  results: [
    {
      id: 'bts',
      title: 'BTS 스타일',
      description: '깊이 있는 메시지와 진정성으로 세계를 감동시키는 당신!',
      detailedDescription:
        '음악을 통해 사회적 메시지를 전달하고, 진정성 있는 소통을 중요하게 생각합니다. 다양한 장르를 아우르며 끊임없이 성장하려고 노력해요.',
      emoji: '💜',
      color: '#7B68EE',
      traits: ['진정성', '메시지 중시', '다재다능', '글로벌 마인드', '팬 사랑'],
      compatibility: {
        best: ['NewJeans', 'TWICE'],
        good: ['IVE', 'Stray Kids'],
        avoid: ['aespa'],
      },
      recommendations: {
        activities: ['콘서트 관람', '사회봉사 활동', '언어 공부'],
        tips: ['진심을 담은 소통을 계속하세요', '다양한 분야에 관심을 가져보세요'],
        kpopGroups: ['BTS', 'TXT', 'ENHYPEN', 'NewJeans'],
        celebrities: ['RM', '지민', '정국'],
      },
    },
    {
      id: 'blackpink',
      title: 'BLACKPINK 스타일',
      description: '강렬한 카리스마와 우아함을 동시에 가진 당신!',
      detailedDescription:
        '독보적인 존재감과 확실한 개성을 가지고 있습니다. 트렌드를 이끌어가며, 자신만의 스타일을 확실하게 표현하는 것을 좋아해요.',
      emoji: '🖤',
      color: '#FF1493',
      traits: ['카리스마', '개성 강함', '트렌드세터', '자신감', '독립적'],
      compatibility: {
        best: ['ITZY', 'IVE'],
        good: ['aespa', 'Stray Kids'],
        avoid: ['NewJeans'],
      },
      recommendations: {
        activities: ['패션쇼 관람', '댄스 클래스', '포토 촬영'],
        tips: ['자신감을 계속 유지하세요', '다른 사람의 의견도 들어보세요'],
        kpopGroups: ['BLACKPINK', 'ITZY', '(G)I-DLE', 'aespa'],
        celebrities: ['제니', '리사', '로제', '지수'],
      },
    },
    // ... 나머지 6개 결과 타입
  ],
};
