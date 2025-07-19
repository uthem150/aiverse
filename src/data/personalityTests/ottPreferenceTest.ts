import type { PersonalityTestData } from '@/types/personalityTest';

export const ottPreferenceTestData: PersonalityTestData = {
  id: 'ott-preference-test',
  title: '📺 OTT 취향 분석 테스트',
  description: '당신의 성향에 맞는 완벽한 OTT 콘텐츠를 찾아보세요!',
  category: 'entertainment',
  resultTypes: [
    'thriller_lover',
    'romance_fan',
    'comedy_king',
    'documentary_seeker',
    'fantasy_dreamer',
    'action_hero',
    'drama_queen',
    'variety_enjoyer',
  ],
  questions: [
    {
      id: 'q1',
      question: '금요일 밤, 집에서 보고 싶은 콘텐츠는?',
      options: [
        {
          id: 'q1_a',
          text: '긴장감 넘치는 범죄 수사 드라마',
          emoji: '🔍',
          scores: { thriller_lover: 3, action_hero: 2, drama_queen: 1 },
        },
        {
          id: 'q1_b',
          text: '달달한 로맨스 코미디',
          emoji: '💕',
          scores: { romance_fan: 3, comedy_king: 2, drama_queen: 1 },
        },
        {
          id: 'q1_c',
          text: '웃음이 터지는 예능 프로그램',
          emoji: '😂',
          scores: { variety_enjoyer: 3, comedy_king: 2 },
        },
        {
          id: 'q1_d',
          text: '신비로운 판타지 세계관',
          emoji: '🧙‍♂️',
          scores: { fantasy_dreamer: 3, action_hero: 2, thriller_lover: 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '친구와 함께 볼 콘텐츠를 고를 때 중요한 것은?',
      options: [
        {
          id: 'q2_a',
          text: '함께 웃을 수 있는 재미',
          emoji: '🤣',
          scores: { comedy_king: 3, variety_enjoyer: 2, romance_fan: 1 },
        },
        {
          id: 'q2_b',
          text: '깊이 있는 내용으로 토론 가능',
          emoji: '💭',
          scores: { documentary_seeker: 3, thriller_lover: 2, drama_queen: 1 },
        },
        {
          id: 'q2_c',
          text: '몰입도 높은 스토리텔링',
          emoji: '📖',
          scores: { drama_queen: 3, thriller_lover: 2, fantasy_dreamer: 2 },
        },
        {
          id: 'q2_d',
          text: '화려한 액션과 볼거리',
          emoji: '💥',
          scores: { action_hero: 3, fantasy_dreamer: 2, thriller_lover: 1 },
        },
      ],
    },
    // ... q3 ~ q16: 시청 시간대, 선호 플랫폼, 리뷰 작성 습관, 재시청 패턴 등
  ],
  results: [
    {
      id: 'thriller_lover',
      title: '스릴러 마니아',
      description: '긴장감과 반전이 있는 콘텐츠를 사랑하는 당신!',
      detailedDescription:
        '복잡한 플롯과 심리적 긴장감을 즐기며, 추리하고 분석하는 것을 좋아합니다. 예측 불가능한 스토리에 완전히 몰입하는 타입이에요.',
      emoji: '🔍',
      color: '#2D3748',
      traits: ['분석적', '집중력', '논리적', '추리력', '몰입형'],
      compatibility: {
        best: ['다큐멘터리 탐구자', '드라마 퀸'],
        good: ['액션 히어로', '판타지 몽상가'],
        avoid: ['코미디 킹'],
      },
      recommendations: {
        activities: ['추리 게임', '방탈출 카페', '미스터리 소설 읽기'],
        tips: ['가끔은 가벼운 콘텐츠도 즐겨보세요', '친구들과 추리 토론을 해보세요'],
        ottContent: [
          '넷플릭스: 스트레인저 씽즈, 마인드헌터',
          '디즈니+: 경이로운 소문들',
          'U+모바일TV: 시그널',
          '웨이브: 비밀의 숲',
        ],
      },
    },
    {
      id: 'romance_fan',
      title: '로맨스 덕후',
      description: '달달한 사랑 이야기에 설레는 마음을 가진 당신!',
      detailedDescription:
        '감정적 몰입도가 높고, 캐릭터들의 감정 변화에 깊이 공감합니다. 행복한 결말을 선호하며, 사랑의 다양한 모습에 관심이 많아요.',
      emoji: '💕',
      color: '#F56565',
      traits: ['감성적', '공감능력', '낭만적', '희망적', '감정표현'],
      compatibility: {
        best: ['드라마 퀸', '코미디 킹'],
        good: ['판타지 몽상가', '예능 러버'],
        avoid: ['스릴러 마니아'],
      },
      recommendations: {
        activities: ['카페 데이트', '감성 영화 관람', '커플 여행'],
        tips: ['현실적인 관점도 길러보세요', '다양한 장르도 시도해보세요'],
        ottContent: [
          '넷플릭스: 사랑의 불시착, 김비서가 왜 그럴까',
          'TVN: 갯마을 차차차',
          'JTBC: 기상청 사람들',
        ],
      },
    },
    // ... 나머지 6개 결과 타입
  ],
};
