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
    {
      id: 'q3',
      question: '새로운 드라마를 시작할 때, 가장 먼저 확인하는 것은?',
      options: [
        {
          id: 'q3_a',
          text: '주연 배우의 이전 작품',
          emoji: '🤩',
          scores: { romance_fan: 2, drama_queen: 2, action_hero: 1 },
        },
        {
          id: 'q3_b',
          text: '장르와 줄거리 요약',
          emoji: '📝',
          scores: { thriller_lover: 2, documentary_seeker: 2, fantasy_dreamer: 1 },
        },
        {
          id: 'q3_c',
          text: '평점과 리뷰',
          emoji: '⭐',
          scores: { variety_enjoyer: 2, comedy_king: 2, drama_queen: 1 },
        },
        {
          id: 'q3_d',
          text: '티저 영상과 예고편',
          emoji: '🎬',
          scores: { action_hero: 2, fantasy_dreamer: 2, thriller_lover: 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: 'OTT 서비스 구독의 가장 큰 이유는?',
      options: [
        {
          id: 'q4_a',
          text: '다양한 최신 영화와 드라마',
          emoji: '🍿',
          scores: { drama_queen: 2, romance_fan: 2, thriller_lover: 2 },
        },
        {
          id: 'q4_b',
          text: '오리지널 콘텐츠의 매력',
          emoji: '💎',
          scores: { action_hero: 2, fantasy_dreamer: 2, documentary_seeker: 2 },
        },
        {
          id: 'q4_c',
          text: '언제 어디서든 볼 수 있는 편리함',
          emoji: '📱',
          scores: { variety_enjoyer: 2, comedy_king: 2, romance_fan: 1 },
        },
        {
          id: 'q4_d',
          text: '보고 싶었던 다큐멘터리나 교양 프로그램',
          emoji: '📚',
          scores: { documentary_seeker: 3, thriller_lover: 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '스트레스 해소에 가장 좋은 콘텐츠는?',
      options: [
        {
          id: 'q5_a',
          text: '머리 아프지 않은 가벼운 코미디',
          emoji: '😂',
          scores: { comedy_king: 3, variety_enjoyer: 2, romance_fan: 1 },
        },
        {
          id: 'q5_b',
          text: '복수극이나 액션으로 스트레스 날리기',
          emoji: '💥',
          scores: { action_hero: 3, thriller_lover: 2, drama_queen: 1 },
        },
        {
          id: 'q5_c',
          text: '아름다운 배경의 로맨스',
          emoji: '💖',
          scores: { romance_fan: 3, fantasy_dreamer: 1, drama_queen: 1 },
        },
        {
          id: 'q5_d',
          text: '세상의 지식을 넓혀주는 다큐멘터리',
          emoji: '🧠',
          scores: { documentary_seeker: 3, thriller_lover: 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '콘텐츠 시청 중 가장 몰입하는 순간은?',
      options: [
        {
          id: 'q6_a',
          text: '예상치 못한 반전이 나올 때',
          emoji: '🤯',
          scores: { thriller_lover: 3, drama_queen: 2, fantasy_dreamer: 1 },
        },
        {
          id: 'q6_b',
          text: '주인공들의 사랑이 이루어지는 순간',
          emoji: '💑',
          scores: { romance_fan: 3, drama_queen: 2, comedy_king: 1 },
        },
        {
          id: 'q6_c',
          text: '시원한 액션 장면이 펼쳐질 때',
          emoji: '👊',
          scores: { action_hero: 3, thriller_lover: 2, fantasy_dreamer: 1 },
        },
        {
          id: 'q6_d',
          text: '흥미로운 정보나 새로운 사실을 알게 될 때',
          emoji: '💡',
          scores: { documentary_seeker: 3, variety_enjoyer: 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: 'OTT 콘텐츠를 고르는 당신의 방식은?',
      options: [
        {
          id: 'q7_a',
          text: '추천 알고리즘이 제시하는 대로',
          emoji: '🤔',
          scores: { variety_enjoyer: 2, comedy_king: 2, romance_fan: 1 },
        },
        {
          id: 'q7_b',
          text: '친구가 추천해준 명작부터',
          emoji: '🗣️',
          scores: { drama_queen: 2, thriller_lover: 2, action_hero: 1 },
        },
        {
          id: 'q7_c',
          text: '인기 차트 상위권부터 쭉!',
          emoji: '📈',
          scores: { fantasy_dreamer: 2, romance_fan: 2, comedy_king: 1 },
        },
        {
          id: 'q7_d',
          text: '숨겨진 보석 같은 다큐멘터리를 찾아',
          emoji: '🗺️',
          scores: { documentary_seeker: 3, thriller_lover: 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '당신에게 가장 끌리는 세계관은?',
      options: [
        {
          id: 'q8_a',
          text: '미스터리한 과거와 복잡한 현재가 얽힌 현실 세계',
          emoji: '🌃',
          scores: { thriller_lover: 3, drama_queen: 2, action_hero: 1 },
        },
        {
          id: 'q8_b',
          text: '사랑과 우정이 넘치는 따뜻한 일상',
          emoji: '🏡',
          scores: { romance_fan: 3, comedy_king: 2, variety_enjoyer: 1 },
        },
        {
          id: 'q8_c',
          text: '마법과 용, 신화 속 존재들이 가득한 세상',
          emoji: '✨',
          scores: { fantasy_dreamer: 3, action_hero: 2, thriller_lover: 1 },
        },
        {
          id: 'q8_d',
          text: '인간 본성과 사회 구조를 탐구하는 심오한 세계',
          emoji: '🔬',
          scores: { documentary_seeker: 3, drama_queen: 1 },
        },
      ],
    },
    {
      id: 'q9',
      question: '만약 당신이 OTT 콘텐츠 속 주인공이라면?',
      options: [
        {
          id: 'q9_a',
          text: '사건의 진실을 파헤치는 탐정',
          emoji: '🕵️',
          scores: { thriller_lover: 3, documentary_seeker: 1, action_hero: 1 },
        },
        {
          id: 'q9_b',
          text: '운명적인 사랑에 빠지는 인물',
          emoji: '❤️',
          scores: { romance_fan: 3, drama_queen: 2 },
        },
        {
          id: 'q9_c',
          text: '세상을 구하는 영웅',
          emoji: '🦸',
          scores: { action_hero: 3, fantasy_dreamer: 2, thriller_lover: 1 },
        },
        {
          id: 'q9_d',
          text: '평범한 일상 속 웃음을 주는 코믹 캐릭터',
          emoji: '🤪',
          scores: { comedy_king: 3, variety_enjoyer: 2 },
        },
      ],
    },
    {
      id: 'q10',
      question: '가장 좋아하는 콘텐츠의 결말은?',
      options: [
        {
          id: 'q10_a',
          text: '예측불허의 반전으로 충격을 주는 결말',
          emoji: '😲',
          scores: { thriller_lover: 3, drama_queen: 2 },
        },
        {
          id: 'q10_b',
          text: '모두가 행복해지는 해피엔딩',
          emoji: '😊',
          scores: { romance_fan: 3, comedy_king: 2, variety_enjoyer: 1 },
        },
        {
          id: 'q10_c',
          text: '속편을 기대하게 만드는 열린 결말',
          emoji: '❓',
          scores: { fantasy_dreamer: 2, action_hero: 2, documentary_seeker: 1 },
        },
        {
          id: 'q10_d',
          text: '현실적인 여운을 남기는 결말',
          emoji: '😔',
          scores: { drama_queen: 3, documentary_seeker: 2, thriller_lover: 1 },
        },
      ],
    },
    {
      id: 'q11',
      question: '콘텐츠를 볼 때 당신의 자세는?',
      options: [
        {
          id: 'q11_a',
          text: '팝콘과 함께 편안하게 시청',
          emoji: '🍿',
          scores: { variety_enjoyer: 2, comedy_king: 2, romance_fan: 1 },
        },
        {
          id: 'q11_b',
          text: '노트북 켜고 정보 찾아보며 시청',
          emoji: '💻',
          scores: { documentary_seeker: 3, thriller_lover: 2 },
        },
        {
          id: 'q11_c',
          text: '숨죽이며 다음 장면을 기다림',
          emoji: '🤫',
          scores: { thriller_lover: 2, action_hero: 2, drama_queen: 2 },
        },
        {
          id: 'q11_d',
          text: '친구와 채팅하며 실시간 반응 공유',
          emoji: '💬',
          scores: { romance_fan: 2, comedy_king: 2, variety_enjoyer: 2 },
        },
      ],
    },
    {
      id: 'q12',
      question: '가장 선호하는 배경 음악 스타일은?',
      options: [
        {
          id: 'q12_a',
          text: '긴장감을 고조시키는 웅장한 사운드',
          emoji: '🎶',
          scores: { thriller_lover: 3, action_hero: 2, fantasy_dreamer: 1 },
        },
        {
          id: 'q12_b',
          text: '달콤하고 감성적인 OST',
          emoji: '🎵',
          scores: { romance_fan: 3, drama_queen: 2 },
        },
        {
          id: 'q12_c',
          text: '경쾌하고 유머러스한 배경 음악',
          emoji: '🎷',
          scores: { comedy_king: 3, variety_enjoyer: 2 },
        },
        {
          id: 'q12_d',
          text: '생각에 잠기게 하는 잔잔한 음악',
          emoji: '🎼',
          scores: { documentary_seeker: 3, drama_queen: 1 },
        },
      ],
    },
    {
      id: 'q13',
      question: 'OTT 서비스에서 가장 먼저 시청할 목록은?',
      options: [
        {
          id: 'q13_a',
          text: '새로 공개된 스릴러/미스터리 시리즈',
          emoji: '🆕',
          scores: { thriller_lover: 3, action_hero: 1 },
        },
        {
          id: 'q13_b',
          text: '오랫동안 기다려온 로맨스 드라마',
          emoji: '💖',
          scores: { romance_fan: 3, drama_queen: 2 },
        },
        {
          id: 'q13_c',
          text: '스트리밍 순위 1위 예능 프로그램',
          emoji: '🥇',
          scores: { variety_enjoyer: 3, comedy_king: 2 },
        },
        {
          id: 'q13_d',
          text: '수상 경력에 빛나는 다큐멘터리',
          emoji: '🏆',
          scores: { documentary_seeker: 3, drama_queen: 1 },
        },
      ],
    },
    {
      id: 'q14',
      question: '콘텐츠 시청 후, 당신의 반응은?',
      options: [
        {
          id: 'q14_a',
          text: '다른 사람들과 내용에 대해 열띤 토론',
          emoji: '🗣️',
          scores: { thriller_lover: 2, documentary_seeker: 2, drama_queen: 1 },
        },
        {
          id: 'q14_b',
          text: '여운에 잠겨 관련 팬아트나 팬픽 찾아보기',
          emoji: '🎨',
          scores: { romance_fan: 2, fantasy_dreamer: 2, drama_queen: 1 },
        },
        {
          id: 'q14_c',
          text: '재미있는 장면 다시 돌려보며 웃음',
          emoji: '😂',
          scores: { comedy_king: 3, variety_enjoyer: 2 },
        },
        {
          id: 'q14_d',
          text: '비슷한 장르의 다음 콘텐츠를 바로 검색',
          emoji: '🔎',
          scores: { action_hero: 2, thriller_lover: 2, fantasy_dreamer: 1 },
        },
      ],
    },
    {
      id: 'q15',
      question: 'OTT 콘텐츠를 함께 보고 싶은 사람은?',
      options: [
        {
          id: 'q15_a',
          text: '함께 범인 추리를 할 수 있는 친구',
          emoji: '🤝',
          scores: { thriller_lover: 3, documentary_seeker: 1 },
        },
        {
          id: 'q15_b',
          text: '같이 설레고 울어줄 감성적인 사람',
          emoji: '🥹',
          scores: { romance_fan: 3, drama_queen: 2 },
        },
        {
          id: 'q15_c',
          text: '웃음 코드가 잘 맞는 베프',
          emoji: '👯',
          scores: { comedy_king: 3, variety_enjoyer: 2 },
        },
        {
          id: 'q15_d',
          text: '새로운 세계관에 대한 이해를 공유할 사람',
          emoji: '🌌',
          scores: { fantasy_dreamer: 3, action_hero: 2 },
        },
      ],
    },
    {
      id: 'q16',
      question: '가장 매력적인 콘텐츠의 요소는?',
      options: [
        {
          id: 'q16_a',
          text: '숨 막히는 긴장감과 예측 불가한 전개',
          emoji: '😵‍💫',
          scores: { thriller_lover: 3, action_hero: 2, drama_queen: 1 },
        },
        {
          id: 'q16_b',
          text: '가슴 설레는 로맨스와 아름다운 영상미',
          emoji: '🌸',
          scores: { romance_fan: 3, drama_queen: 2, fantasy_dreamer: 1 },
        },
        {
          id: 'q16_c',
          text: '배꼽 빠지는 유머와 기발한 아이디어',
          emoji: '🤣',
          scores: { comedy_king: 3, variety_enjoyer: 2 },
        },
        {
          id: 'q16_d',
          text: '세상을 다른 시각으로 보게 하는 깊이 있는 메시지',
          emoji: '🌍',
          scores: { documentary_seeker: 3, drama_queen: 1 },
        },
      ],
    },
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
    {
      id: 'comedy_king',
      title: '코미디 킹',
      description: '웃음 없이는 못 사는, 유머 감각 넘치는 당신!',
      detailedDescription:
        '일상의 스트레스를 웃음으로 날려버리는 것을 좋아하며, 기발한 유머와 재치 있는 대사에 열광합니다. 주변 사람들에게도 웃음을 선사하는 타입이에요.',
      emoji: '😂',
      color: '#ECC94B',
      traits: ['유머러스', '낙천적', '재치', '긍정적', '명랑함'],
      compatibility: {
        best: ['예능 러버', '로맨스 덕후'],
        good: ['드라마 퀸'],
        avoid: ['다큐멘터리 탐구자'],
      },
      recommendations: {
        activities: ['스탠드업 코미디 시청', '개그콘서트 관람', '친구들과 유머러스한 대화'],
        tips: ['때로는 진지한 내용도 접해보세요', '다양한 문화 코미디를 시도해보세요'],
        ottContent: ['넷플릭스: 오피스, 모던 패밀리', '쿠팡플레이: SNL 코리아', '유튜브: 숏박스'],
      },
    },
    {
      id: 'documentary_seeker',
      title: '다큐멘터리 탐구자',
      description: '세상의 지식과 진실을 탐구하는 지적인 당신!',
      detailedDescription:
        '새로운 정보와 깊이 있는 통찰을 얻는 것을 즐기며, 실제 사건이나 역사, 과학 등 사실 기반의 콘텐츠에 큰 흥미를 느낍니다. 분석적이고 탐구적인 성향을 가지고 있어요.',
      emoji: '📚',
      color: '#38A169',
      traits: ['지적', '호기심', '분석적', '탐구적', '객관적'],
      compatibility: {
        best: ['스릴러 마니아', '드라마 퀸'],
        good: ['액션 히어로'],
        avoid: ['코미디 킹'],
      },
      recommendations: {
        activities: ['박물관 방문', '강연 청취', '신문/잡지 읽기', '독서 토론'],
        tips: [
          '가끔은 가벼운 마음으로 휴식을 취해보세요',
          '흥미로운 다큐멘터리를 친구에게 추천해보세요',
        ],
        ottContent: [
          '넷플릭스: 나르코스, 세상의 모든 위대한 건축물',
          '디즈니+: 내셔널지오그래픽 다큐멘터리',
          '웨이브: SBS 스페셜, 그것이 알고 싶다',
        ],
      },
    },
    {
      id: 'fantasy_dreamer',
      title: '판타지 몽상가',
      description: '현실을 넘어선 환상의 세계를 꿈꾸는 당신!',
      detailedDescription:
        '상상력이 풍부하고, 마법, 신화, 가상의 세계관에 매료됩니다. 현실에서는 경험할 수 없는 경이로운 모험과 스토리를 통해 대리만족을 느끼는 타입이에요.',
      emoji: '🧙‍♂️',
      color: '#805AD5',
      traits: ['상상력', '창의적', '몽환적', '모험심', '호기심'],
      compatibility: {
        best: ['액션 히어로', '드라마 퀸'],
        good: ['로맨스 덕후'],
        avoid: ['다큐멘터리 탐구자'],
      },
      recommendations: {
        activities: ['코스프레', '판타지 소설/웹툰 읽기', 'RPG 게임', '테마파크 방문'],
        tips: ['현실 세계의 아름다움도 찾아보세요', '창의적인 취미 활동을 시도해보세요'],
        ottContent: [
          '넷플릭스: 위쳐, 샌드맨',
          '디즈니+: 만달로리안, 로키',
          '쿠팡플레이: 반지의 제왕 시리즈',
        ],
      },
    },
    {
      id: 'action_hero',
      title: '액션 히어로',
      description: '시원한 액션과 짜릿한 쾌감을 즐기는 당신!',
      detailedDescription:
        '빠른 전개와 화려한 볼거리, 통쾌한 액션 장면에서 카타르시스를 느낍니다. 정의 구현과 통쾌한 복수극에 몰입하며, 도전적이고 강렬한 성향을 가지고 있어요.',
      emoji: '💥',
      color: '#DD6B20',
      traits: ['과감함', '박진감', '도전적', '역동적', '승부욕'],
      compatibility: {
        best: ['스릴러 마니아', '판타지 몽상가'],
        good: ['드라마 퀸'],
        avoid: ['로맨스 덕후'],
      },
      recommendations: {
        activities: ['익스트림 스포츠 관람', '액션 게임', '격투기 시청', '서바이벌 게임'],
        tips: ['때로는 느린 템포의 콘텐츠도 즐겨보세요', '안전이 최우선이에요!'],
        ottContent: [
          '넷플릭스: 올드 가드, 익스트랙션',
          '디즈니+: 마블 시리즈',
          '왓챠: 존 윅 시리즈',
        ],
      },
    },
    {
      id: 'drama_queen',
      title: '드라마 퀸',
      description: '깊이 있는 스토리와 인물 관계에 빠져드는 당신!',
      detailedDescription:
        '복잡한 인간관계와 감정선, 그리고 탄탄한 서사에 매료됩니다. 인물들의 갈등과 성장을 따라가며 깊은 공감과 여운을 느끼는 타입이에요.',
      emoji: '🎭',
      color: '#8B5CF6',
      traits: ['감수성', '섬세함', '공감능력', '사색적', '내면적'],
      compatibility: {
        best: ['로맨스 덕후', '다큐멘터리 탐구자'],
        good: ['스릴러 마니아', '판타지 몽상가'],
        avoid: ['코미디 킹'],
      },
      recommendations: {
        activities: ['연극/뮤지컬 관람', '감성 에세이 읽기', '심리 상담/코칭'],
        tips: [
          '가끔은 가벼운 콘텐츠로 기분 전환을 해보세요',
          '감정 소모가 큰 콘텐츠는 조절하며 시청하세요',
        ],
        ottContent: [
          '넷플릭스: 부부의 세계, 나의 해방일지',
          '티빙: 슬기로운 의사생활',
          '웨이브: 동백꽃 필 무렵',
        ],
      },
    },
    {
      id: 'variety_enjoyer',
      title: '예능 러버',
      description: '지친 일상에 활력을 불어넣는 예능 매력에 푹 빠진 당신!',
      detailedDescription:
        '가볍게 즐길 수 있는 유쾌한 콘텐츠를 선호하며, 예측 불가능한 상황과 출연진들의 케미에서 즐거움을 찾습니다. 함께 웃고 즐기는 것을 중요하게 생각하는 타입이에요.',
      emoji: '🎉',
      color: '#ED8936',
      traits: ['사교적', '긍정적', '개방적', '유쾌함', '활동적'],
      compatibility: {
        best: ['코미디 킹', '로맨스 덕후'],
        good: ['드라마 퀸'],
        avoid: ['스릴러 마니아'],
      },
      recommendations: {
        activities: ['보드 게임', '친구들과 모임', '야외 활동', '유머 컨텐츠 제작/시청'],
        tips: [
          '때로는 다큐멘터리나 드라마로 지적 자극을 줘보세요',
          '건강한 웃음을 주는 콘텐츠를 선택하세요',
        ],
        ottContent: [
          '넷플릭스: 피지컬 100, 솔로지옥',
          '티빙: 환승연애, 여고추리반',
          '웨이브: 런닝맨, 나 혼자 산다',
        ],
      },
    },
  ],
};
