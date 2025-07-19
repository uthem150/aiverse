import type { PersonalityTestData } from '@/types/personalityTest';

export const idealTypeTestData: PersonalityTestData = {
  id: 'ideal-type-test',
  title: '🎨 내 취향으로 보는 이상형 테스트',
  description: '당신의 라이프스타일과 취향으로 완벽한 이상형을 찾아보세요!',
  category: 'romance',
  resultTypes: [
    'artist',
    'scholar',
    'adventurer',
    'leader',
    'healer',
    'creator',
    'protector',
    'free_spirit',
  ],
  questions: [
    {
      id: 'q1',
      question: '주말에 가장 하고 싶은 활동은?',
      options: [
        {
          id: 'q1_a',
          text: '미술관에서 작품 감상하며 영감 얻기',
          emoji: '🎨',
          scores: { artist: 3, scholar: 2, creator: 1 },
        },
        {
          id: 'q1_b',
          text: '새로운 장소 탐험하고 모험하기',
          emoji: '🗺️',
          scores: { adventurer: 3, free_spirit: 2, protector: 1 },
        },
        {
          id: 'q1_c',
          text: '독서하며 깊은 사색에 빠지기',
          emoji: '📚',
          scores: { scholar: 3, healer: 2, artist: 1 },
        },
        {
          id: 'q1_d',
          text: '친구들과 활동적인 스포츠 즐기기',
          emoji: '⚽',
          scores: { leader: 3, protector: 2, adventurer: 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '이상적인 첫 만남 장소는?',
      options: [
        {
          id: 'q2_a',
          text: '아늑한 서점 카페에서 우연히',
          emoji: '📖',
          scores: { scholar: 3, artist: 2, healer: 1 },
        },
        {
          id: 'q2_b',
          text: '친구들의 소개팅에서 자연스럽게',
          emoji: '👥',
          scores: { leader: 3, protector: 2, healer: 1 },
        },
        {
          id: 'q2_c',
          text: '여행지에서 운명적으로',
          emoji: '✈️',
          scores: { adventurer: 3, free_spirit: 2, creator: 1 },
        },
        {
          id: 'q2_d',
          text: '취미 활동 모임에서 공통 관심사로',
          emoji: '🎭',
          scores: { creator: 3, artist: 2, scholar: 1 },
        },
      ],
    },
    // ... q3 ~ q16: 음식 취향, 영화 장르, 인테리어 스타일, 여가 활동, 가치관 등
  ],
  results: [
    {
      id: 'artist',
      title: '예술가형 이상형',
      description: '감성적이고 창의적인 영혼을 가진 사람에게 끌려요!',
      detailedDescription:
        '아름다움에 대한 감각이 뛰어나고, 자신만의 세계관을 가진 사람을 선호합니다. 깊이 있는 대화와 감성적 교감을 중요하게 생각해요.',
      emoji: '🎨',
      color: '#FF6B9D',
      traits: ['감성적', '창의적', '독창적', '섬세함', '미적 감각'],
      compatibility: {
        best: ['학자형', '힐러형'],
        good: ['크리에이터형', '자유영혼형'],
        avoid: ['리더형'],
      },
      recommendations: {
        activities: ['전시회 관람', '창작 활동', '감성 카페', '클래식 콘서트'],
        tips: ['감정 표현을 아끼지 마세요', '상대방의 창작물에 관심을 보여주세요'],
        celebrities: ['박서준', '수지', '정해인', '아이유'],
      },
    },
    {
      id: 'adventurer',
      title: '모험가형 이상형',
      description: '새로운 도전을 즐기고 활동적인 에너지를 가진 사람!',
      detailedDescription:
        '일상에서 벗어나 새로운 경험을 추구하며, 긍정적이고 도전적인 마인드를 가진 사람에게 매력을 느껴요.',
      emoji: '🗺️',
      color: '#4ECDC4',
      traits: ['활동적', '도전적', '긍정적', '호기심', '리더십'],
      compatibility: {
        best: ['자유영혼형', '프로텍터형'],
        good: ['리더형', '크리에이터형'],
        avoid: ['학자형'],
      },
      recommendations: {
        activities: ['등산', '여행', '익스트림 스포츠', '페스티벌 참가'],
        tips: ['새로운 활동을 함께 계획해보세요', '상대방의 도전을 응원해주세요'],
        celebrities: ['강하늘', '박민영', '이민호', '박신혜'],
      },
    },
    // ... 나머지 6개 결과 타입
  ],
};
