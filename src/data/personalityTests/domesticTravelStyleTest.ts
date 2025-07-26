import type { PersonalityTestData } from '@/types/personalityTest';

export const domesticTravelStyleTestData: PersonalityTestData = {
  id: 'domestic-travel-style-test',
  title: '🧭 나의 국내 여행 스타일 찾기',
  description: '숨겨진 나의 여행 취향을 발견하고, 다음 국내 여행을 완벽하게 계획해 보세요!',
  category: 'lifestyle',
  resultTypes: [
    'history-explorer', // 역사 탐험가
    'activity-seeker', // 액티비티 매니아
    'foodie-tourist', // 식도락 여행객
    'healing-chaser', // 힐링 추구자
    'insta-famous', // 감성 인스타그래머
    'city-vacationer', // 도시 바캉서
    'nature-lover', // 자연 친화 여행자
    'culture-appreciator', // 문화 예술 애호가
    'adventure-explorer', // 모험 탐험가
    'budget-traveler', // 가성비 여행러
    'spontaneous-wanderer', // 즉흥 방랑자
    'local-experiencer', // 현지 밀착형 여행자
  ],
  questions: [
    {
      id: 'q1',
      question: '국내 여행을 떠난다면 가장 먼저 떠오르는 곳은?',
      options: [
        {
          id: 'q1_a',
          text: '고즈넉한 한옥과 역사의 숨결이 느껴지는 경주, 전주',
          emoji: '🏯',
          scores: { 'history-explorer': 3, 'healing-chaser': 1, 'culture-appreciator': 2 },
        },
        {
          id: 'q1_b',
          text: '푸른 바다와 맛있는 먹거리가 가득한 부산, 여수',
          emoji: '🍜',
          scores: { 'foodie-tourist': 3, 'city-vacationer': 2, 'local-experiencer': 1 },
        },
        {
          id: 'q1_c',
          text: '서핑, 패러글라이딩 등 즐길 거리가 많은 양양, 단양',
          emoji: '🏄',
          scores: { 'activity-seeker': 3, 'adventure-explorer': 2, 'insta-famous': 1 },
        },
        {
          id: 'q1_d',
          text: '초록빛 자연 속에서 쉴 수 있는 제주도, 강원도 평창',
          emoji: '🌳',
          scores: { 'healing-chaser': 3, 'nature-lover': 3, 'insta-famous': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '여행지에서 꼭 해야만 하는 것은?',
      options: [
        {
          id: 'q2_a',
          text: 'SNS에 올릴 인생샷! 예쁜 카페나 풍경은 필수!',
          emoji: '📸',
          scores: { 'insta-famous': 3, 'city-vacationer': 1, 'culture-appreciator': 1 },
        },
        {
          id: 'q2_b',
          text: '그 지역에서만 맛볼 수 있는 로컬 맛집, 전통 시장 방문하기',
          emoji: '🍽️',
          scores: { 'foodie-tourist': 3, 'local-experiencer': 2, 'history-explorer': 1 },
        },
        {
          id: 'q2_c',
          text: '몸과 마음의 평화를 위한 스파, 명상, 조용한 산책',
          emoji: '🧘',
          scores: { 'healing-chaser': 3, 'nature-lover': 2, 'activity-seeker': -1 },
        },
        {
          id: 'q2_d',
          text: '박물관, 유적지를 방문하며 그 지역의 역사 배우기',
          emoji: '🏛️',
          scores: { 'history-explorer': 3, 'culture-appreciator': 2, 'foodie-tourist': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '선호하는 숙소 스타일은?',
      options: [
        {
          id: 'q3_a',
          text: '부대시설이 완벽한 도심의 5성급 호텔',
          emoji: '🏨',
          scores: { 'city-vacationer': 3, 'insta-famous': 1, 'budget-traveler': -2 },
        },
        {
          id: 'q3_b',
          text: '자연 속에 위치한 프라이빗한 풀빌라나 독채 펜션',
          emoji: '🏡',
          scores: { 'healing-chaser': 3, 'insta-famous': 2, 'nature-lover': 2 },
        },
        {
          id: 'q3_c',
          text: '가성비 좋고 새로운 사람들을 만날 수 있는 게스트하우스',
          emoji: '🧑‍🤝‍🧑',
          scores: {
            'activity-seeker': 2,
            'foodie-tourist': 1,
            'budget-traveler': 3,
            'spontaneous-wanderer': 2,
          },
        },
        {
          id: 'q3_d',
          text: '그 지역의 특색을 느낄 수 있는 한옥 스테이나 고택',
          emoji: '🎑',
          scores: { 'history-explorer': 3, 'healing-chaser': 2, 'culture-appreciator': 3 },
        },
      ],
    },
    {
      id: 'q4',
      question: '여행의 동반자로 가장 선호하는 타입은?',
      options: [
        {
          id: 'q4_a',
          text: '맛집 리스트 꿰고 있는 미식가 친구',
          emoji: '😋',
          scores: { 'foodie-tourist': 3, 'city-vacationer': 1, 'local-experiencer': 2 },
        },
        {
          id: 'q4_b',
          text: '사진 백만 장 찍어줄 포토그래퍼 친구',
          emoji: '📷',
          scores: { 'insta-famous': 3, 'activity-seeker': 1 },
        },
        {
          id: 'q4_c',
          text: 'MBTI는 E! 활발하고 에너지가 넘치는 친구',
          emoji: '🤸',
          scores: { 'activity-seeker': 3, 'city-vacationer': 1, 'adventure-explorer': 2 },
        },
        {
          id: 'q4_d',
          text: '혼자만의 시간이 필요해... 조용히 각자 즐기는 동반자',
          emoji: '😌',
          scores: { 'healing-chaser': 3, 'history-explorer': 2, 'spontaneous-wanderer': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '이번 주말, 당장 떠날 수 있다면?',
      options: [
        {
          id: 'q5_a',
          text: '핫한 성수동에서 팝업스토어 구경하고 쇼핑하기',
          emoji: '🛍️',
          scores: { 'city-vacationer': 3, 'insta-famous': 2, 'culture-appreciator': 1 },
        },
        {
          id: 'q5_b',
          text: '강릉 바다 보며 카페에서 멍 때리기',
          emoji: '☕',
          scores: { 'healing-chaser': 2, 'insta-famous': 2, 'nature-lover': 1 },
        },
        {
          id: 'q5_c',
          text: '백제의 역사가 살아 숨 쉬는 부여, 공주로 시간 여행',
          emoji: '⏳',
          scores: { 'history-explorer': 3, 'healing-chaser': 1, 'culture-appreciator': 2 },
        },
        {
          id: 'q5_d',
          text: '통영에서 루지 타고, 꿀빵 먹방 찍기',
          emoji: '🏎️',
          scores: { 'activity-seeker': 2, 'foodie-tourist': 2, 'adventure-explorer': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '여행 계획을 세울 때 가장 중요하게 생각하는 것은?',
      options: [
        {
          id: 'q6_a',
          text: '숨겨진 맛집과 현지에서만 즐길 수 있는 특별한 경험',
          emoji: '🌟',
          scores: { 'foodie-tourist': 2, 'local-experiencer': 3, 'spontaneous-wanderer': 1 },
        },
        {
          id: 'q6_b',
          text: '최적의 동선과 시간 관리! 효율적인 여행',
          emoji: '⏰',
          scores: { 'city-vacationer': 2, 'history-explorer': 1, 'budget-traveler': 1 },
        },
        {
          id: 'q6_c',
          text: 'SNS에서 유명한 포토 스팟과 예쁜 카페',
          emoji: '💖',
          scores: { 'insta-famous': 3, 'city-vacationer': 1 },
        },
        {
          id: 'q6_d',
          text: '편안한 휴식과 재충전을 위한 한적한 자연 환경',
          emoji: '🍃',
          scores: { 'healing-chaser': 3, 'nature-lover': 3 },
        },
      ],
    },
    {
      id: 'q7',
      question: '여행 중 가장 짜릿한 순간은?',
      options: [
        {
          id: 'q7_a',
          text: '새로운 액티비티에 성공했을 때의 성취감',
          emoji: '🏆',
          scores: { 'activity-seeker': 3, 'adventure-explorer': 3 },
        },
        {
          id: 'q7_b',
          text: '예상치 못한 멋진 풍경을 마주했을 때',
          emoji: '🌄',
          scores: { 'insta-famous': 2, 'nature-lover': 2, 'spontaneous-wanderer': 1 },
        },
        {
          id: 'q7_c',
          text: '현지인과 소통하며 새로운 문화를 배울 때',
          emoji: '🤝',
          scores: { 'local-experiencer': 3, 'culture-appreciator': 2, 'history-explorer': 1 },
        },
        {
          id: 'q7_d',
          text: '줄 서서 기다린 맛집 음식을 한 입 먹었을 때',
          emoji: '🤤',
          scores: { 'foodie-tourist': 3, 'city-vacationer': 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '여행 스타일을 한 단어로 표현한다면?',
      options: [
        {
          id: 'q8_a',
          text: '모험!',
          emoji: '🗺️',
          scores: { 'adventure-explorer': 3, 'activity-seeker': 2 },
        },
        {
          id: 'q8_b',
          text: '휴식!',
          emoji: '😴',
          scores: { 'healing-chaser': 3, 'nature-lover': 2 },
        },
        {
          id: 'q8_c',
          text: '발견!',
          emoji: '💡',
          scores: { 'history-explorer': 2, 'culture-appreciator': 2, 'local-experiencer': 2 },
        },
        {
          id: 'q8_d',
          text: '재미!',
          emoji: '🎉',
          scores: { 'insta-famous': 2, 'foodie-tourist': 1, 'city-vacationer': 1 },
        },
      ],
    },
    {
      id: 'q9',
      question: '여행 경비를 계획할 때 가장 먼저 고려하는 것은?',
      options: [
        {
          id: 'q9_a',
          text: '숙소와 교통비 등 기본 지출을 최대한 절약',
          emoji: '💰',
          scores: { 'budget-traveler': 3, 'spontaneous-wanderer': 1 },
        },
        {
          id: 'q9_b',
          text: '미식 체험을 위한 충분한 예산 확보',
          emoji: '💸',
          scores: { 'foodie-tourist': 2, 'city-vacationer': 1 },
        },
        {
          id: 'q9_c',
          text: '활동적인 체험이나 액티비티에 투자',
          emoji: '💪',
          scores: { 'activity-seeker': 2, 'adventure-explorer': 2 },
        },
        {
          id: 'q9_d',
          text: '예쁜 사진을 위한 의상이나 소품 구매',
          emoji: '👗',
          scores: { 'insta-famous': 2, 'city-vacationer': 1 },
        },
      ],
    },
    {
      id: 'q10',
      question: '여행지에서 가장 먼저 방문하는 곳은?',
      options: [
        {
          id: 'q10_a',
          text: 'SNS 핫플레이스나 예쁜 카페',
          emoji: '☕',
          scores: { 'insta-famous': 3, 'city-vacationer': 1 },
        },
        {
          id: 'q10_b',
          text: '그 지역의 대표 박물관이나 유적지',
          emoji: '🏛️',
          scores: { 'history-explorer': 3, 'culture-appreciator': 2 },
        },
        {
          id: 'q10_c',
          text: '현지인들이 많이 가는 시장이나 로컬 식당',
          emoji: '🍲',
          scores: { 'foodie-tourist': 2, 'local-experiencer': 3 },
        },
        {
          id: 'q10_d',
          text: '경치가 좋고 한적한 자연 공원이나 숲길',
          emoji: '🌲',
          scores: { 'healing-chaser': 2, 'nature-lover': 3 },
        },
      ],
    },
    {
      id: 'q11',
      question: '여행 중 예상치 못한 상황이 발생했을 때 당신의 반응은?',
      options: [
        {
          id: 'q11_a',
          text: '당황하지 않고 침착하게 해결책을 찾는다',
          emoji: '🧘',
          scores: { 'city-vacationer': 1, 'budget-traveler': 1 },
        },
        {
          id: 'q11_b',
          text: '계획대로 되지 않아도 새로운 경험이라 생각하며 즐긴다',
          emoji: '✨',
          scores: { 'spontaneous-wanderer': 3, 'adventure-explorer': 2 },
        },
        {
          id: 'q11_c',
          text: '약간의 스트레스를 받지만, 곧 잊고 다음 일정을 생각한다',
          emoji: '😔',
          scores: { 'healing-chaser': -1, 'history-explorer': 0 },
        },
        {
          id: 'q11_d',
          text: '이 또한 여행의 묘미! 오히려 더 재미있는 상황을 만들어 본다',
          emoji: '🥳',
          scores: { 'activity-seeker': 2, 'local-experiencer': 1 },
        },
      ],
    },
    {
      id: 'q12',
      question: '여행 기념품으로 가장 선호하는 것은?',
      options: [
        {
          id: 'q12_a',
          text: '그 지역의 전통 공예품이나 특산물',
          emoji: '🏺',
          scores: { 'history-explorer': 2, 'culture-appreciator': 3, 'local-experiencer': 2 },
        },
        {
          id: 'q12_b',
          text: '예쁜 사진을 담은 엽서나 마그넷',
          emoji: '💌',
          scores: { 'insta-famous': 2, 'healing-chaser': 1 },
        },
        {
          id: 'q12_c',
          text: '맛있는 현지 음식이나 디저트',
          emoji: '🍪',
          scores: { 'foodie-tourist': 3, 'budget-traveler': 1 },
        },
        {
          id: 'q12_d',
          text: '특별한 경험을 위한 액티비티 할인권',
          emoji: '🎫',
          scores: { 'activity-seeker': 2, 'adventure-explorer': 1 },
        },
      ],
    },
    {
      id: 'q13',
      question: '여행 정보를 얻는 주된 방법은?',
      options: [
        {
          id: 'q13_a',
          text: '블로그, 인스타그램 등 SNS에서 핫플 검색',
          emoji: '📱',
          scores: { 'insta-famous': 3, 'city-vacationer': 2 },
        },
        {
          id: 'q13_b',
          text: '현지인의 추천이나 지역 커뮤니티 활용',
          emoji: '🗣️',
          scores: { 'local-experiencer': 3, 'spontaneous-wanderer': 1 },
        },
        {
          id: 'q13_c',
          text: '여행 가이드북이나 역사 관련 서적 읽기',
          emoji: '📚',
          scores: { 'history-explorer': 2, 'culture-appreciator': 3 },
        },
        {
          id: 'q13_d',
          text: '다양한 여행 상품을 비교하여 가성비 좋은 곳 찾기',
          emoji: '📊',
          scores: { 'budget-traveler': 3, 'city-vacationer': 1 },
        },
      ],
    },
    {
      id: 'q14',
      question: '가장 하고 싶은 여행 테마는?',
      options: [
        {
          id: 'q14_a',
          text: '전국의 국립공원 도장 깨기',
          emoji: '⛰️',
          scores: { 'nature-lover': 3, 'adventure-explorer': 2 },
        },
        {
          id: 'q14_b',
          text: '유명 맛집 투어 및 먹방 여행',
          emoji: '🍤',
          scores: { 'foodie-tourist': 3, 'local-experiencer': 1 },
        },
        {
          id: 'q14_c',
          text: '도심 속 미술관, 공연 관람',
          emoji: '🎭',
          scores: { 'culture-appreciator': 3, 'city-vacationer': 2 },
        },
        {
          id: 'q14_d',
          text: '이색적인 체험 위주의 테마 여행 (예: 템플스테이, 농촌 체험)',
          emoji: '🌾',
          scores: { 'activity-seeker': 2, 'healing-chaser': 1, 'local-experiencer': 2 },
        },
      ],
    },
    {
      id: 'q15',
      question: '여행 계획 시 가장 중요하게 생각하는 요소는?',
      options: [
        {
          id: 'q15_a',
          text: '자유로운 일정과 즉흥적인 선택',
          emoji: '🕊️',
          scores: { 'spontaneous-wanderer': 3, 'activity-seeker': 1 },
        },
        {
          id: 'q15_b',
          text: '정해진 예산 안에서 최고의 만족도',
          emoji: '💯',
          scores: { 'budget-traveler': 3, 'city-vacationer': 1 },
        },
        {
          id: 'q15_c',
          text: '새로운 지식과 영감을 얻을 수 있는 기회',
          emoji: '✨',
          scores: { 'history-explorer': 2, 'culture-appreciator': 2 },
        },
        {
          id: 'q15_d',
          text: '자연 속에서 온전한 휴식을 취할 수 있는 시간',
          emoji: '😌',
          scores: { 'healing-chaser': 2, 'nature-lover': 3 },
        },
      ],
    },
    {
      id: 'q16',
      question: '당신에게 여행이란?',
      options: [
        {
          id: 'q16_a',
          text: '새로운 나를 발견하는 모험',
          emoji: '🚀',
          scores: { 'adventure-explorer': 3, 'spontaneous-wanderer': 2 },
        },
        {
          id: 'q16_b',
          text: '일상의 스트레스를 해소하는 탈출구',
          emoji: '🔓',
          scores: { 'healing-chaser': 2, 'nature-lover': 1 },
        },
        {
          id: 'q16_c',
          text: '오랫동안 기억될 추억을 만드는 과정',
          emoji: '📸',
          scores: { 'insta-famous': 2, 'foodie-tourist': 1 },
        },
        {
          id: 'q16_d',
          text: '지식과 경험을 쌓는 배움의 기회',
          emoji: '🎓',
          scores: { 'history-explorer': 2, 'culture-appreciator': 2, 'local-experiencer': 1 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'history-explorer',
      title: '🏛️ 시간을 걷는 역사 탐험가',
      description: '여행은 살아있는 역사책! 유적과 유물에서 감동을 느끼는 당신.',
      detailedDescription:
        '화려한 도시보다 고즈넉한 옛 도읍지를 거닐 때 마음의 평화를 얻습니다. 박물관에서 시간 가는 줄 모르고, 유적지에 얽힌 이야기를 들으며 상상의 나래를 펼치는 것을 즐깁니다. 당신에게 최고의 여행지는 살아 숨 쉬는 역사 그 자체입니다.',
      emoji: '🏛️',
      color: '#A52A2A', // Brown
      traits: ['지적', '탐구적', '역사덕후', '차분함', '배움'],
      compatibility: {
        best: ['🧘 힐링 추구자', '🎭 문화 예술 애호가'],
        avoid: ['🤸 에너자이저 액티비티 매니아', '🚀 모험 탐험가'],
      },
      recommendations: {
        destinations: ['경주 (신라)', '안동 (유교 문화)', '부여/공주 (백제)', '강화도 (고려/조선)'],
        travelTips: [
          '문화관광해설사 프로그램을 활용하면 더 깊이 있는 여행이 가능해요.',
          '방문할 지역의 역사 관련 책이나 다큐를 미리 보고 떠나보세요.',
          '고즈넉한 한옥 스테이에서 하룻밤 묵어보는 것을 추천해요.',
        ],
      },
    },
    {
      id: 'activity-seeker',
      title: '🤸 에너자이저 액티비티 매니아',
      description: '가만히 있는 건 좀이 쑤셔! 온몸으로 부딪치며 즐기는 당신.',
      detailedDescription:
        '여행은 곧 도전! 새로운 액티비티를 통해 한계를 시험하고 짜릿한 성취감을 느끼는 것을 좋아합니다. 바다에서는 서핑, 산에서는 패러글라이딩, 도시에서는 클라이밍까지. 당신의 여행은 언제나 활기로 가득합니다.',
      emoji: '🤸',
      color: '#FF4500', // OrangeRed
      traits: ['활동적', '도전적', '에너제틱', '스릴', '건강미'],
      compatibility: {
        best: ['📸 인생샷 전문 감성 인스타그래머', '🚀 모험 탐험가'],
        avoid: ['🧘 자연 속 힐링 추구자'],
      },
      recommendations: {
        destinations: [
          '양양/고성 (서핑)',
          '단양 (패러글라이딩)',
          '제주도 (각종 레포츠)',
          '통영 (루지)',
        ],
        travelTips: [
          '안전이 최우선! 검증된 업체를 이용하고 안전 장비를 꼭 착용하세요.',
          '날씨의 영향을 많이 받으니, 플랜 B를 준비해두는 것이 좋아요.',
          '함께 액티비티를 즐길 수 있는 동행과 함께 떠나보세요.',
        ],
      },
    },
    {
      id: 'foodie-tourist',
      title: '🍽️ 맛을 찾아 떠나는 식도락 여행객',
      description: '여행의 시작과 끝은 음식! 오직 맛을 위해 어디든 떠나는 당신.',
      detailedDescription:
        '여행지를 정하는 기준은 오직 ‘맛’입니다. TV에 나온 맛집부터 현지인만 아는 노포까지, 음식에 대한 열정으로 가득합니다. 그 지역의 특산물로 만든 새로운 음식을 맛보는 것에서 가장 큰 행복을 느낍니다.',
      emoji: '🍽️',
      color: '#FFD700', // Gold
      traits: ['미식가', '먹잘알', '탐험가', '열정적', '후각발달'],
      compatibility: {
        best: ['🏙️ 편리함이 최고! 도시 바캉서', '🤝 현지 밀착형 여행자'],
        avoid: ['🧘 자연 속 힐링 추구자'],
      },
      recommendations: {
        destinations: [
          '전주 (비빔밥, 한정식)',
          '부산 (돼지국밥, 해산물)',
          '여수 (해산물, 갓김치)',
          '속초 (닭강정, 해산물)',
        ],
        travelTips: [
          '웨이팅이 긴 맛집은 테이블링 앱 등으로 원격 줄서기를 활용하세요.',
          '현지 택시 기사님에게 추천받는 맛집은 실패할 확률이 적어요.',
          '전통 시장을 방문하면 저렴하고 신선한 현지 음식을 맛볼 수 있어요.',
        ],
      },
    },
    {
      id: 'healing-chaser',
      title: '🧘 자연 속 힐링 추구자',
      description: '복잡한 일상은 잠시 안녕! 조용한 곳에서 오롯이 나에게 집중하는 당신.',
      detailedDescription:
        '북적이는 관광지보다는 한적한 자연 속에서 재충전의 시간을 갖는 것을 선호합니다. 푸른 숲, 잔잔한 바다를 보며 멍때리거나, 조용한 스파에서 몸을 녹이는 것이 최고의 여행입니다. 여행은 당신에게 완벽한 쉼입니다.',
      emoji: '🧘',
      color: '#228B22', // ForestGreen
      traits: ['평화주의', '사색적', '고요함', '재충전', '자연인'],
      compatibility: {
        best: ['🏛️ 시간을 걷는 역사 탐험가', '🍃 자연 친화 여행자'],
        avoid: ['🤸 에너자이저 액티비티 매니아', '🚀 모험 탐험가'],
      },
      recommendations: {
        destinations: [
          '제주도 (오름, 숲길)',
          '강원도 평창/정선 (산, 목장)',
          '담양 (죽녹원)',
          '울릉도 (자연경관)',
        ],
        travelTips: [
          '스마트폰은 잠시 꺼두고 자연의 소리에 귀 기울여 보세요.',
          '명상, 요가 등 힐링 프로그램을 제공하는 숙소를 찾아보는 것도 좋아요.',
          '사람이 없는 평일 오전에 여행하면 더욱 한적하게 즐길 수 있어요.',
        ],
      },
    },
    {
      id: 'insta-famous',
      title: '📸 인생샷 전문 감성 인스타그래머',
      description: '여행은 사진으로 남는 것! 모든 순간을 작품으로 만드는 당신.',
      detailedDescription:
        '여행의 모든 순간은 당신의 인스타그램 피드를 위한 콘텐츠입니다. 감성적인 카페, 독특한 소품샵, 아름다운 자연 풍경 등 사진 찍기 좋은 곳이라면 어디든 달려갑니다. 남들이 모르는 힙한 장소를 찾아내는 데 능숙합니다.',
      emoji: '📸',
      color: '#FF69B4', // HotPink
      traits: ['트렌디', '감성적', '힙스터', '사진작가', '분위기'],
      compatibility: {
        best: ['🤸 에너자이저 액티비티 매니아', '🏙️ 편리함이 최고! 도시 바캉서'],
        avoid: ['🏛️ 시간을 걷는 역사 탐험가', '💰 가성비 여행러'],
      },
      recommendations: {
        destinations: [
          '서울 성수/연남 (카페, 팝업)',
          '부산 영도/해운대 (오션뷰 카페)',
          '강릉 (바다, 카페거리)',
          '제주도 (어디든 포토존)',
        ],
        travelTips: [
          '여행 가기 전 인스타그램 해시태그로 핫플레이스를 미리 검색해보세요.',
          '사람이 없는 사진을 찍고 싶다면 오픈런은 필수!',
          '여행지의 빛 좋은 시간을 미리 파악하고 동선을 짜면 좋아요.',
        ],
      },
    },
    {
      id: 'city-vacationer',
      title: '🏙️ 편리함이 최고! 도시 바캉서',
      description: '멀리 가는 건 피곤해! 익숙한 도시에서 즐기는 호캉스가 최고인 당신.',
      detailedDescription:
        '여행은 편리하고 쾌적해야 합니다. 잘 갖춰진 인프라 속에서 맛있는 음식을 먹고, 쇼핑을 즐기며, 쾌적한 호텔에서 쉬는 것을 선호합니다. 굳이 멀리 떠나지 않아도 도심 속에서 완벽한 휴가를 즐길 수 있다고 믿습니다.',
      emoji: '🏙️',
      color: '#4682B4', // SteelBlue
      traits: ['도시적', '편리함 추구', '세련됨', '호캉스', '쇼핑'],
      compatibility: {
        best: ['🍽️ 맛을 찾아 떠나는 식도락 여행객', '📸 인생샷 전문 감성 인스타그래머'],
        avoid: ['🍃 자연 친화 여행자', '🚀 모험 탐험가'],
      },
      recommendations: {
        destinations: [
          '서울 (호캉스, 쇼핑, 미식)',
          '부산 (해운대 특급호텔)',
          '인천 파라다이스시티',
          '제주 드림타워',
        ],
        travelTips: [
          '호텔 예약 사이트의 패키지 상품을 이용하면 더 합리적인 호캉스가 가능해요.',
          '호텔 수영장이나 라운지 등 부대시설을 적극적으로 활용해 보세요.',
          '백화점, 쇼핑몰과 연결된 호텔은 쇼핑을 즐기기에 최적의 장소입니다.',
        ],
      },
    },
    {
      id: 'nature-lover',
      title: '🍃 자연 친화 여행자',
      description: '자연과 함께 숨 쉬며 진정한 평온을 찾는 당신.',
      detailedDescription:
        '높은 빌딩 숲 대신 푸른 산과 맑은 강이 있는 곳으로 떠납니다. 숲길을 걷고, 계곡에서 물놀이를 즐기며 자연의 소리에 귀 기울이는 것을 좋아합니다. 자연 속에서 진정한 휴식과 활력을 얻는 당신은 진정한 자연 친화 여행자입니다.',
      emoji: '🍃',
      color: '#008000', // Green
      traits: ['자연사랑', '평화로움', '환경보호', '명상', '여유'],
      compatibility: {
        best: ['🧘 자연 속 힐링 추구자', '🏛️ 시간을 걷는 역사 탐험가'],
        avoid: ['🏙️ 편리함이 최고! 도시 바캉서', '📸 인생샷 전문 감성 인스타그래머'],
      },
      recommendations: {
        destinations: [
          '설악산',
          '지리산',
          '오대산 국립공원',
          '변산반도 국립공원',
          '순천만 국가정원',
        ],
        travelTips: [
          '친환경 여행을 실천하며 쓰레기는 되가져오고 자연을 보호해주세요.',
          '계절별로 변화하는 자연의 모습을 감상하며 다양한 테마 여행을 계획해보세요.',
          '캠핑이나 글램핑을 통해 자연 속에서 하룻밤을 보내는 것도 추천해요.',
        ],
      },
    },
    {
      id: 'culture-appreciator',
      title: '🎭 문화 예술 애호가',
      description: '여행지에서 예술과 문화를 통해 영감을 얻는 당신.',
      detailedDescription:
        '여행지에서 그 지역의 고유한 문화와 예술을 체험하는 것을 중요하게 생각합니다. 박물관, 미술관, 공연장을 방문하고, 길거리 예술이나 벽화 골목을 거닐며 영감을 얻습니다. 당신에게 여행은 지적 호기심을 충족시키고 예술적 감각을 키우는 기회입니다.',
      emoji: '🎭',
      color: '#8A2BE2', // BlueViolet
      traits: ['예술적', '지적', '감성적', '탐미주의', '창의적'],
      compatibility: {
        best: ['🏛️ 시간을 걷는 역사 탐험가', '🤝 현지 밀착형 여행자'],
        avoid: ['🤸 에너자이저 액티비티 매니아', '🚀 모험 탐험가'],
      },
      recommendations: {
        destinations: [
          '서울 (미술관, 공연장)',
          '전주 (한옥마을, 국악)',
          '부산 (문화마을, 영화의전당)',
          '광주 (아시아문화전당)',
        ],
        travelTips: [
          '미리 전시나 공연 일정을 확인하고 예매하면 좋아요.',
          '지역 특색이 담긴 작은 갤러리나 공방을 찾아보는 것도 특별한 경험이 될 거예요.',
          '문화 바우처나 지역 할인 혜택을 활용하여 알찬 여행을 즐겨보세요.',
        ],
      },
    },
    {
      id: 'adventure-explorer',
      title: '🚀 모험 탐험가',
      description: '미지의 세계를 탐험하며 극한의 재미를 추구하는 당신.',
      detailedDescription:
        '뻔한 여행은 싫다! 남들이 잘 가지 않는 곳, 색다른 경험을 할 수 있는 곳을 찾아 떠납니다. 스릴 넘치는 액티비티는 물론, 오지 탐험이나 캠핑 등 예측 불가능한 상황에서 더 큰 즐거움을 느낍니다. 당신에게 여행은 끊임없는 도전과 새로운 발견입니다.',
      emoji: '🚀',
      color: '#FF8C00', // DarkOrange
      traits: ['도전적', '용감함', '자유분방', '개척정신', '익스트림'],
      compatibility: {
        best: ['🤸 에너자이저 액티비티 매니아', '✨ 즉흥 방랑자'],
        avoid: ['🧘 자연 속 힐링 추구자', '🏙️ 편리함이 최고! 도시 바캉서'],
      },
      recommendations: {
        destinations: [
          '울릉도/독도 (트레킹, 해양 탐사)',
          '백패킹 성지 (간월재, 영남알프스)',
          '동굴 탐험 (고수동굴, 환선굴)',
          '오프로드 체험 (강원도)',
        ],
        travelTips: [
          '안전을 위해 충분한 준비와 전문가의 도움을 받는 것이 중요해요.',
          '예측 불가능한 상황을 즐길 줄 아는 유연한 마음가짐이 필요해요.',
          '방수 카메라나 드론 등 특별한 순간을 기록할 장비를 준비해 보세요.',
        ],
      },
    },
    {
      id: 'budget-traveler',
      title: '💰 가성비 여행러',
      description: '알뜰하게 즐기면서도 놓치지 않는 스마트한 여행을 하는 당신.',
      detailedDescription:
        '합리적인 가격으로 최고의 만족을 얻는 것이 목표입니다. 숙소는 가성비 좋은 곳을 찾고, 교통수단은 대중교통을 선호합니다. 불필요한 지출을 줄이고 그 돈으로 더 많은 경험을 하는 것을 중요하게 생각합니다.',
      emoji: '💰',
      color: '#1E90FF', // DodgerBlue
      traits: ['실용적', '계획적', '알뜰함', '정보력', '현명함'],
      compatibility: {
        best: ['🏙️ 편리함이 최고! 도시 바캉서', '🤝 현지 밀착형 여행자'],
        avoid: ['📸 인생샷 전문 감성 인스타그래머', '🚀 모험 탐험가'],
      },
      recommendations: {
        destinations: [
          '서울 (청년 게스트하우스, 무료 전시)',
          '부산 (대중교통 이용, 저렴한 맛집)',
          '전국 기차 여행 (내일로 등)',
          '지역별 특가 숙소 이용',
        ],
        travelTips: [
          '얼리버드 할인, 비수기 여행 등 다양한 할인 혜택을 적극 활용하세요.',
          '도시락이나 간식을 준비하여 식비를 절약하는 것도 좋은 방법이에요.',
          '무료 관광지나 가성비 좋은 액티비티를 미리 찾아보고 계획하세요.',
        ],
      },
    },
    {
      id: 'spontaneous-wanderer',
      title: '✨ 즉흥 방랑자',
      description: '계획은 NO! 발길 닿는 대로 자유롭게 떠나는 당신.',
      detailedDescription:
        '정해진 일정에 얽매이는 것을 싫어하고, 그때그때의 기분과 상황에 따라 여행의 방향을 바꿉니다. 지도 대신 마음이 이끄는 대로 발걸음을 옮기며, 우연히 만나는 풍경이나 사람들과의 교류에서 큰 기쁨을 얻습니다. 당신에게 여행은 예측 불가능한 자유 그 자체입니다.',
      emoji: '✨',
      color: '#DA70D6', // Orchid
      traits: ['자유로운', '즉흥적', '개방적', '유연함', '도전적'],
      compatibility: {
        best: ['🚀 모험 탐험가', '🤸 에너자이저 액티비티 매니아'],
        avoid: ['🏛️ 시간을 걷는 역사 탐험가', '💰 가성비 여행러'],
      },
      recommendations: {
        destinations: [
          '내일로 여행 (기차)',
          '차박 여행 (국내 어디든)',
          '제주 올레길 (걷다가 쉬기)',
          '지역 축제 기간에 맞춰 방문 (정보 없이)',
        ],
        travelTips: [
          '최소한의 짐만 챙겨 가볍게 떠나는 것이 좋아요.',
          '현지 정보는 현지인에게 직접 묻거나 그때그때 찾아보는 것을 추천해요.',
          '숙소는 현지에서 바로 예약하거나 캠핑을 고려해 보세요.',
        ],
      },
    },
    {
      id: 'local-experiencer',
      title: '🤝 현지 밀착형 여행자',
      description: '관광객 모드 OFF! 현지인처럼 살아보는 여행을 즐기는 당신.',
      detailedDescription:
        '유명 관광지보다는 현지인들의 일상에 스며드는 것을 선호합니다. 로컬 시장에서 장을 보고, 작은 동네 식당에서 식사를 하며, 지역 주민들과 소통하는 것을 즐깁니다. 당신에게 여행은 그곳 사람들의 삶을 이해하고 공감하는 과정입니다.',
      emoji: '🤝',
      color: '#6A5ACD', // SlateBlue
      traits: ['공감능력', '소통', '관찰력', '호기심', '진정성'],
      compatibility: {
        best: ['🍽️ 맛을 찾아 떠나는 식도락 여행객', '🎭 문화 예술 애호가'],
        avoid: ['📸 인생샷 전문 감성 인스타그래머', '🏙️ 편리함이 최고! 도시 바캉서'],
      },
      recommendations: {
        destinations: [
          '골목길 여행 (서울 익선동, 부산 감천문화마을)',
          '농촌 체험 마을 (강원도, 전라도)',
          '한 달 살기 (제주, 강릉 등)',
          '지역 특화 시장 투어',
        ],
        travelTips: [
          '현지어로 간단한 인사를 배우거나 번역 앱을 활용하면 좋아요.',
          '대형 마트 대신 작은 동네 상점을 이용하고 지역 경제에 기여해 보세요.',
          '지역 축제나 마을 행사에 참여하여 현지 문화를 직접 경험해 보세요.',
        ],
      },
    },
  ],
};
