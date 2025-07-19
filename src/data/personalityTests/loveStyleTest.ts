import type { PersonalityTestData } from '@/types/personalityTest';

export const loveStyleTestData: PersonalityTestData = {
  id: 'love-style-test',
  title: '💕 내 연애 스타일 테스트',
  description: 'MZ세대 연애 문화를 반영한 나만의 연애 스타일을 찾아보세요!',
  category: 'romance',
  resultTypes: ['puppy', 'cat', 'fox', 'rabbit', 'wolf', 'deer', 'bear', 'bird'],
  questions: [
    {
      id: 'q1',
      question: '첫 데이트 장소로 어디를 선택할까요?',
      options: [
        {
          id: 'q1_a',
          text: '핫한 맛집에서 인생샷 찍기',
          emoji: '📸',
          scores: { puppy: 3, fox: 2, bird: 1 },
        },
        {
          id: 'q1_b',
          text: '조용한 카페에서 깊은 대화',
          emoji: '☕',
          scores: { cat: 3, deer: 2, bear: 1 },
        },
        {
          id: 'q1_c',
          text: '홈데이트로 넷플릭스 시청',
          emoji: '🏠',
          scores: { rabbit: 3, cat: 2 },
        },
        {
          id: 'q1_d',
          text: '액티비티가 있는 체험 장소',
          emoji: '🎢',
          scores: { wolf: 3, fox: 2, puppy: 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '연인과 연락하는 주기는?',
      options: [
        {
          id: 'q2_a',
          text: '매시간 안부 확인은 기본',
          emoji: '💬',
          scores: { puppy: 3, rabbit: 2 },
        },
        {
          id: 'q2_b',
          text: '하루 한두 번 의미 있는 대화',
          emoji: '📱',
          scores: { deer: 3, bear: 2, cat: 1 },
        },
        {
          id: 'q2_c',
          text: '필요할 때만 연락',
          emoji: '🎯',
          scores: { cat: 3, wolf: 2 },
        },
        {
          id: 'q2_d',
          text: '틈날 때마다 재미있는 콘텐츠 공유',
          emoji: '🎭',
          scores: { fox: 3, bird: 2, puppy: 1 },
        },
      ],
    },
    // ... q3 ~ q16: 나머지 14개 질문 (소셜미디어 공유 스타일, 갈등 해결 방식, 기념일 준비, 선물 선택 등)
  ],
  results: [
    {
      id: 'puppy',
      title: '강아지상 연인',
      description: '순수하고 애교 많은 당신! 사랑을 온몸으로 표현하는 스타일이에요.',
      detailedDescription:
        '연애할 때 진심을 다하고, 상대방에게 관심과 애정을 아낌없이 표현합니다. 때로는 과도한 관심이 부담이 될 수 있지만, 진실한 마음이 매력적이에요.',
      emoji: '🐶',
      color: '#FF9F40',
      traits: ['순수함', '적극적', '표현력 좋음', '애교쟁이', '충성심'],
      compatibility: {
        best: ['고양이상', '사슴상'],
        good: ['토끼상', '새상'],
        avoid: ['늑대상'],
      },
      recommendations: {
        activities: ['커플 요리 클래스', '테마파크 데이트', '반려동물 카페'],
        tips: ['가끔은 여유를 갖고 기다려주세요', '상대방의 개인 시간도 존중해주세요'],
        celebrities: ['박보영', '아이유', '정해인'],
      },
    },
    {
      id: 'cat',
      title: '고양이상 연인',
      description: '독립적이고 신비로운 매력! 은은한 애정 표현이 더욱 특별해요.',
      detailedDescription:
        '자신만의 시간과 공간을 중요하게 생각하며, 깊이 있는 관계를 선호합니다. 갑작스러운 변화보다는 안정감 있는 연애를 즐겨요.',
      emoji: '🐱',
      color: '#9F7AEA',
      traits: ['독립적', '신중함', '신비로움', '깊이 있음', '선택적 애정'],
      compatibility: {
        best: ['강아지상', '곰상'],
        good: ['여우상', '사슴상'],
        avoid: ['토끼상'],
      },
      recommendations: {
        activities: ['갤러리 관람', '북카페 데이트', '조용한 산책'],
        tips: ['감정 표현을 조금 더 해보세요', '상대방의 노력을 인정해주세요'],
        celebrities: ['전지현', '수지', '공유'],
      },
    },
    // ... 나머지 6개 결과 타입 (fox, rabbit, wolf, deer, bear, bird)
  ],
};
