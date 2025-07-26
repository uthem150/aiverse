import type { PersonalityTestData } from '@/types/personalityTest';

export const overseasTravelStyleTestData: PersonalityTestData = {
  id: 'overseas-travel-style-test',
  title: '✈️ 내 영혼의 해외 여행지 찾기 테스트',
  description:
    '당신의 다음 해외 여행, 어디로 떠나야 할까요? 질문에 답하고 운명적인 해외 여행지를 발견해 보세요!',
  category: 'lifestyle',
  resultTypes: [
    'romantic-artist', // 낭만 예술가형
    'luxury-trendsetter', // 럭셔리 트렌드세터형
    'historical-intellectual', // 역사 지식 탐험가형
    'exotic-adventurer', // 이국적인 모험가형
    'urban-explorer', // 도시 탐험가형
    'serene-nature-seeker', // 평온한 자연 신봉자형
    'gourmet-connoisseur', // 미식 감정가형
    'activity-master', // 액티비티 마스터형
    'social-butterfly', // 사교적인 여행가형
    'budget-traveler', // 가성비 탐험가형
    'spiritual-seeker', // 영적 탐구자형
    'family-oriented', // 가족 중심형
  ],
  questions: [
    {
      id: 'q1',
      question: '해외 여행에서 가장 기대되는 순간은?',
      options: [
        {
          id: 'q1_a',
          text: '미술관에서 시간을 보내거나, 로맨틱한 거리에서 인생샷 남기기.',
          emoji: '🎨',
          scores: { 'romantic-artist': 3, 'urban-explorer': 1 },
        },
        {
          id: 'q1_b',
          text: '아무도 모르는 숨겨진 정글 속 폭포를 찾아 떠나는 모험.',
          emoji: '🏞️',
          scores: { 'exotic-adventurer': 3, 'activity-master': 2 },
        },
        {
          id: 'q1_c',
          text: '고대 유적지를 거닐며 역사의 숨결을 느끼는 것.',
          emoji: '🏛️',
          scores: { 'historical-intellectual': 3, 'romantic-artist': 1 },
        },
        {
          id: 'q1_d',
          text: '고급스러운 리조트에서 즐기는 완벽한 휴식과 최상의 서비스.',
          emoji: '🥂',
          scores: { 'luxury-trendsetter': 3, 'serene-nature-seeker': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '여행지에서의 식사는 어떻게 하고 싶나요?',
      options: [
        {
          id: 'q2_a',
          text: '미슐랭 스타 레스토랑이나 현지 최고급 다이닝 경험하기.',
          emoji: '🌟',
          scores: { 'gourmet-connoisseur': 3, 'luxury-trendsetter': 2 },
        },
        {
          id: 'q2_b',
          text: '현지인만 아는 로컬 맛집이나 전통 시장 음식 맛보기.',
          emoji: '🍜',
          scores: { 'gourmet-connoisseur': 2, 'urban-explorer': 2, 'exotic-adventurer': 1 },
        },
        {
          id: 'q2_c',
          text: '분위기 좋은 노천 카페에서 브런치 즐기기.',
          emoji: '🥐',
          scores: { 'romantic-artist': 3, 'urban-explorer': 1 },
        },
        {
          id: 'q2_d',
          text: '멋진 자연 경관을 보며 즐기는 간단한 피크닉.',
          emoji: '🧺',
          scores: { 'serene-nature-seeker': 3, 'romantic-artist': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '선호하는 여행 스타일은?',
      options: [
        {
          id: 'q3_a',
          text: '쇼핑, 나이트라이프, 핫플레이스 방문 등 도시의 활기를 즐긴다.',
          emoji: '🌃',
          scores: { 'urban-explorer': 3, 'luxury-trendsetter': 2 },
        },
        {
          id: 'q3_b',
          text: '고요한 해변, 국립공원 등 대자연 속에서 평화롭게 쉬고 싶다.',
          emoji: '🌲',
          scores: { 'serene-nature-seeker': 3, 'exotic-adventurer': 1 },
        },
        {
          id: 'q3_c',
          text: '스쿠버 다이빙, 트레킹, 번지점프 등 짜릿한 액티비티는 필수!',
          emoji: '🏄‍♀️',
          scores: { 'activity-master': 3, 'exotic-adventurer': 2 },
        },
        {
          id: 'q3_d',
          text: '역사적인 건축물이나 박물관을 둘러보며 지식을 쌓는 여행.',
          emoji: '🧐',
          scores: { 'historical-intellectual': 3, 'romantic-artist': 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: '여행 중 가장 중요하게 생각하는 것은?',
      options: [
        {
          id: 'q4_a',
          text: '아름다운 풍경과 예술적 영감을 얻는 것.',
          emoji: '💖',
          scores: { 'romantic-artist': 3, 'serene-nature-seeker': 2 },
        },
        {
          id: 'q4_b',
          text: '새롭고 이국적인 문화를 온몸으로 체험하는 것.',
          emoji: '🌍',
          scores: { 'exotic-adventurer': 3, 'historical-intellectual': 1 },
        },
        {
          id: 'q4_c',
          text: '최고의 시설과 서비스를 누리는 편안하고 럭셔리한 경험.',
          emoji: '💎',
          scores: { 'luxury-trendsetter': 3, 'gourmet-connoisseur': 1 },
        },
        {
          id: 'q4_d',
          text: '한계를 뛰어넘는 도전과 성취감.',
          emoji: '💪',
          scores: { 'activity-master': 3, 'exotic-adventurer': 2 },
        },
      ],
    },
    {
      id: 'q5',
      question: '해외 여행에서 어떤 기념품을 사고 싶나요?',
      options: [
        {
          id: 'q5_a',
          text: '현지 장인이 만든 독특한 수공예품이나 예술 작품.',
          emoji: '🏺',
          scores: { 'romantic-artist': 2, 'exotic-adventurer': 2, 'historical-intellectual': 1 },
        },
        {
          id: 'q5_b',
          text: '명품 브랜드의 신상이나 한정판 아이템.',
          emoji: '🛍️',
          scores: { 'luxury-trendsetter': 3, 'urban-explorer': 2 },
        },
        {
          id: 'q5_c',
          text: '현지에서만 구할 수 있는 특별한 식재료나 와인.',
          emoji: '🍷',
          scores: { 'gourmet-connoisseur': 3, 'luxury-trendsetter': 1 },
        },
        {
          id: 'q5_d',
          text: '액티비티 활동 모습을 담은 영상이나 전문 장비.',
          emoji: '📹',
          scores: { 'activity-master': 3, 'exotic-adventurer': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '여행 숙소는 어떤 스타일이 좋은가요?',
      options: [
        {
          id: 'q6_a',
          text: '지역 문화와 현지인의 삶을 엿볼 수 있는 게스트하우스나 에어비앤비.',
          emoji: '🏡',
          scores: { 'exotic-adventurer': 2, 'budget-traveler': 3, 'social-butterfly': 2 },
        },
        {
          id: 'q6_b',
          text: '오션뷰, 인피니티 풀 등 최고급 시설을 갖춘 럭셔리 호텔/리조트.',
          emoji: '🏨',
          scores: { 'luxury-trendsetter': 3, 'serene-nature-seeker': 1 },
        },
        {
          id: 'q6_c',
          text: '도심에 위치하여 접근성이 좋고 트렌디한 부티크 호텔.',
          emoji: '🏢',
          scores: { 'urban-explorer': 3, 'romantic-artist': 1 },
        },
        {
          id: 'q6_d',
          text: '자연 속에 위치한 친환경 리조트나 글램핑 시설.',
          emoji: '🏕️',
          scores: { 'serene-nature-seeker': 3, 'activity-master': 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: '여행 계획을 세울 때 당신의 주된 방식은?',
      options: [
        {
          id: 'q7_a',
          text: '철저하게 모든 일정을 미리 짜고 동선을 최적화한다.',
          emoji: '🗓️',
          scores: { 'historical-intellectual': 2, 'luxury-trendsetter': 1, 'family-oriented': 2 },
        },
        {
          id: 'q7_b',
          text: '큰 틀만 잡아두고 현지에서 즉흥적으로 결정하는 편이다.',
          emoji: '😁',
          scores: { 'exotic-adventurer': 3, 'activity-master': 2, 'budget-traveler': 1 },
        },
        {
          id: 'q7_c',
          text: '맛집과 카페, 쇼핑 리스트 위주로 계획을 세운다.',
          emoji: '📝',
          scores: { 'gourmet-connoisseur': 3, 'urban-explorer': 2 },
        },
        {
          id: 'q7_d',
          text: '동행자와 충분히 상의하여 모두가 만족할 만한 계획을 세운다.',
          emoji: '🤝',
          scores: { 'social-butterfly': 3, 'family-oriented': 3 },
        },
      ],
    },
    {
      id: 'q8',
      question: '여행 동반자와의 관계는?',
      options: [
        {
          id: 'q8_a',
          text: '사랑하는 연인 또는 배우자와의 로맨틱한 여행.',
          emoji: '❤️',
          scores: { 'romantic-artist': 3, 'luxury-trendsetter': 1 },
        },
        {
          id: 'q8_b',
          text: '가족들과 함께하는 편안하고 즐거운 여행.',
          emoji: '👨‍👩‍👧‍👦',
          scores: { 'family-oriented': 3, 'serene-nature-seeker': 2 },
        },
        {
          id: 'q8_c',
          text: '새로운 사람들과의 만남을 기대하며 떠나는 여행.',
          emoji: '🧑‍🤝‍🧑',
          scores: { 'social-butterfly': 3, 'exotic-adventurer': 1, 'budget-traveler': 1 },
        },
        {
          id: 'q8_d',
          text: '혼자 떠나 온전히 자신에게 집중하는 여행.',
          emoji: '🚶‍♀️',
          scores: {
            'spiritual-seeker': 3,
            'historical-intellectual': 1,
            'serene-nature-seeker': 1,
          },
        },
      ],
    },
    {
      id: 'q9',
      question: '여행 중 예상치 못한 상황이 발생했을 때 당신의 대처는?',
      options: [
        {
          id: 'q9_a',
          text: '침착하게 상황을 분석하고 해결책을 찾아 나선다.',
          emoji: '💡',
          scores: { 'historical-intellectual': 2, 'luxury-trendsetter': 1 },
        },
        {
          id: 'q9_b',
          text: '오히려 재미있는 경험이라 생각하고 유연하게 대처한다.',
          emoji: '😄',
          scores: { 'exotic-adventurer': 3, 'activity-master': 2, 'budget-traveler': 2 },
        },
        {
          id: 'q9_c',
          text: '여행사에 연락하거나 동행자에게 도움을 요청한다.',
          emoji: '📞',
          scores: { 'family-oriented': 2, 'social-butterfly': 1 },
        },
        {
          id: 'q9_d',
          text: '잠시 쉬어가며 마음을 다스리고 평정심을 찾는다.',
          emoji: '🧘‍♀️',
          scores: { 'serene-nature-seeker': 3, 'spiritual-seeker': 2 },
        },
      ],
    },
    {
      id: 'q10',
      question: '여행 예산은 어느 정도가 적당하다고 생각하나요?',
      options: [
        {
          id: 'q10_a',
          text: '최고의 경험을 위해 아낌없이 투자하는 편이다.',
          emoji: '💰',
          scores: { 'luxury-trendsetter': 3, 'gourmet-connoisseur': 2 },
        },
        {
          id: 'q10_b',
          text: '가성비를 중요하게 생각하며 합리적인 선에서 지출한다.',
          emoji: '💵',
          scores: { 'budget-traveler': 3, 'urban-explorer': 1 },
        },
        {
          id: 'q10_c',
          text: '경험이 더 중요하므로 예산보다는 만족도에 초점을 맞춘다.',
          emoji: '✨',
          scores: { 'romantic-artist': 2, 'exotic-adventurer': 1, 'activity-master': 1 },
        },
        {
          id: 'q10_d',
          text: '필요한 만큼만 쓰고 아껴서 다음 여행을 기약한다.',
          emoji: '🏦',
          scores: { 'budget-traveler': 2, 'historical-intellectual': 1 },
        },
      ],
    },
    {
      id: 'q11',
      question: '여행 중 가장 하고 싶은 활동은 무엇인가요?',
      options: [
        {
          id: 'q11_a',
          text: '현지 시장에서 흥정하고 물건을 구매하는 재미.',
          emoji: '🛍️',
          scores: { 'budget-traveler': 2, 'urban-explorer': 2, 'exotic-adventurer': 1 },
        },
        {
          id: 'q11_b',
          text: '유명 랜드마크 앞에서 기념사진을 찍는 것.',
          emoji: '📸',
          scores: { 'luxury-trendsetter': 1, 'urban-explorer': 1, 'social-butterfly': 1 },
        },
        {
          id: 'q11_c',
          text: '현지인들과 소통하며 문화를 배우는 것.',
          emoji: '🗣️',
          scores: { 'social-butterfly': 3, 'exotic-adventurer': 2, 'spiritual-seeker': 1 },
        },
        {
          id: 'q11_d',
          text: '명상이나 요가 등 내면의 평화를 찾는 활동.',
          emoji: '🧘',
          scores: { 'spiritual-seeker': 3, 'serene-nature-seeker': 2 },
        },
      ],
    },
    {
      id: 'q12',
      question: '해외 여행 후 가장 남는 것은 무엇이라고 생각하나요?',
      options: [
        {
          id: 'q12_a',
          text: '인생에 큰 영감을 준 깨달음과 성장.',
          emoji: '✨',
          scores: { 'spiritual-seeker': 3, 'historical-intellectual': 2, 'romantic-artist': 1 },
        },
        {
          id: 'q12_b',
          text: '오랫동안 기억될 추억이 담긴 사진과 영상.',
          emoji: '🖼️',
          scores: { 'social-butterfly': 2, 'family-oriented': 2, 'luxury-trendsetter': 1 },
        },
        {
          id: 'q12_c',
          text: '다음에 또 가고 싶게 만드는 특별한 경험.',
          emoji: '🤩',
          scores: { 'activity-master': 2, 'exotic-adventurer': 2, 'gourmet-connoisseur': 1 },
        },
        {
          id: 'q12_d',
          text: '새로운 사람들과 쌓은 소중한 인연.',
          emoji: '🤝',
          scores: { 'social-butterfly': 3, 'budget-traveler': 1 },
        },
      ],
    },
    {
      id: 'q13',
      question: '여행 중 불편함은 어느 정도 감수할 수 있나요?',
      options: [
        {
          id: 'q13_a',
          text: '어떤 불편함이든 기꺼이 감수하며 새로운 경험을 한다.',
          emoji: '🧘',
          scores: { 'exotic-adventurer': 3, 'budget-traveler': 3, 'activity-master': 2 },
        },
        {
          id: 'q13_b',
          text: '최소한의 편의는 중요하며, 너무 불편하면 힘들다.',
          emoji: '😌',
          scores: { 'urban-explorer': 2, 'romantic-artist': 1 },
        },
        {
          id: 'q13_c',
          text: '절대 불편해서는 안 된다. 모든 것이 완벽해야 한다.',
          emoji: '🙅‍♀️',
          scores: { 'luxury-trendsetter': 3, 'gourmet-connoisseur': 2 },
        },
        {
          id: 'q13_d',
          text: '가족이나 동반자가 불편하지 않다면 괜찮다.',
          emoji: '🫠',
          scores: { 'family-oriented': 3, 'social-butterfly': 2 },
        },
      ],
    },
    {
      id: 'q14',
      question: '여행지를 선택할 때 가장 중요하게 고려하는 요소는?',
      options: [
        {
          id: 'q14_a',
          text: '현지 문화와 역사를 깊이 있게 탐구할 수 있는 곳.',
          emoji: '📜',
          scores: { 'historical-intellectual': 3, 'spiritual-seeker': 1 },
        },
        {
          id: 'q14_b',
          text: '아름다운 자연경관 속에서 힐링할 수 있는 곳.',
          emoji: '🏞️',
          scores: { 'serene-nature-seeker': 3, 'romantic-artist': 2 },
        },
        {
          id: 'q14_c',
          text: '다양한 액티비티와 즐길 거리가 풍부한 곳.',
          emoji: '🎉',
          scores: { 'activity-master': 3, 'exotic-adventurer': 2 },
        },
        {
          id: 'q14_d',
          text: '유명하거나 SNS에서 핫한 트렌디한 도시.',
          emoji: '😎',
          scores: { 'urban-explorer': 3, 'luxury-trendsetter': 2 },
        },
      ],
    },
    {
      id: 'q15',
      question: '여행 전 준비물 체크리스트는 어떻게 관리하나요?',
      options: [
        {
          id: 'q15_a',
          text: '꼼꼼하게 리스트를 만들어 빠짐없이 준비한다.',
          emoji: '✔️',
          scores: { 'historical-intellectual': 1, 'family-oriented': 2, 'luxury-trendsetter': 1 },
        },
        {
          id: 'q15_b',
          text: '필요한 것만 대충 챙기고 현지에서 구매한다.',
          emoji: '🤷‍♀️',
          scores: { 'budget-traveler': 2, 'exotic-adventurer': 1 },
        },
        {
          id: 'q15_c',
          text: '패션 아이템과 사진을 위한 소품 위주로 챙긴다.',
          emoji: '👗',
          scores: { 'romantic-artist': 2, 'urban-explorer': 1, 'luxury-trendsetter': 1 },
        },
        {
          id: 'q15_d',
          text: '간단한 개인 물품 외에는 현지에서 조달하는 것을 선호한다.',
          emoji: '🛍️',
          scores: { 'activity-master': 1, 'spiritual-seeker': 1 },
        },
      ],
    },
    {
      id: 'q16',
      question: '여행 중 가장 중요하게 생각하는 소통 방식은?',
      options: [
        {
          id: 'q16_a',
          text: '현지 언어를 배워 직접 대화하는 것을 즐긴다.',
          emoji: '🗣️',
          scores: { 'social-butterfly': 3, 'exotic-adventurer': 2 },
        },
        {
          id: 'q16_b',
          text: '번역기나 바디랭귀지를 활용하여 소통한다.',
          emoji: '😝',
          scores: { 'budget-traveler': 1, 'activity-master': 1 },
        },
        {
          id: 'q16_c',
          text: '필요할 때만 최소한의 소통을 한다.',
          emoji: '😂',
          scores: { 'serene-nature-seeker': 2, 'spiritual-seeker': 2 },
        },
        {
          id: 'q16_d',
          text: '주로 동반자와 대화하며 정보를 공유한다.',
          emoji: '😌',
          scores: { 'family-oriented': 3, 'social-butterfly': 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'romantic-artist',
      title: '🎨 낭만 예술가형',
      description: '예술과 낭만이 가득한 곳에서 감성적인 영감을 얻는 당신!',
      detailedDescription:
        '아름다운 건축물과 예술 작품에 둘러싸여 있을 때 살아있음을 느낍니다. 분위기 좋은 카페에서 여유를 즐기고, 해질녘 로맨틱한 거리를 거닐며 감상에 젖는 것을 좋아합니다. 당신의 여행은 한 편의 영화와 같습니다.',
      emoji: '🎨',
      color: '#E6A4B4', // Pastel Pink
      traits: ['감성적', '예술적', '낭만주의자', '분위기 중시', '여유로움'],
      compatibility: {
        best: ['🏛️ 역사 지식 탐험가형', '🍷 미식 감정가형'],
        avoid: ['🧗 액티비티 마스터형'],
      },
      recommendations: {
        destinations: [
          '프랑스 파리 (몽마르뜨 언덕, 오르세 미술관)',
          '이탈리아 피렌체 (두오모, 우피치 미술관)',
          '오스트리아 비엔나 (벨베데레 궁전, 클래식 공연)',
          '체코 프라하 (카를교, 구시가지 광장)',
        ],
        travelTips: [
          '미술관 통합권을 미리 예매하여 시간을 절약하세요.',
          '해질녘 풍경이 아름다운 곳을 찾아 인생샷을 남겨보세요.',
          '작은 골목길에 숨겨진 예쁜 상점이나 카페를 탐험해 보세요.',
        ],
      },
    },
    {
      id: 'luxury-trendsetter',
      title: '🥂 럭셔리 트렌드세터형',
      description: '최고급 서비스와 트렌디한 경험을 즐기는 당신은 진정한 럭셔리 여행가입니다.',
      detailedDescription:
        '여행은 곧 휴식과 보상이라고 생각합니다. 최고급 호텔, 프라이빗 비치, 미슐랭 레스토랑 등 남들이 부러워할 만한 럭셔리한 경험을 추구합니다. 당신의 SNS는 언제나 화려하고 트렌디한 사진으로 가득합니다.',
      emoji: '🥂',
      color: '#FFD700', // Gold
      traits: ['고급스러움', '트렌디', '편안함 추구', 'FLEX', '사교적'],
      compatibility: {
        best: ['🍷 미식 감정가형', '🌃 도시 탐험가형'],
        avoid: ['🏞️ 이국적인 모험가형'],
      },
      recommendations: {
        destinations: [
          '아랍에미리트 두바이 (버즈 알 아랍, 사막 사파리)',
          '몰디브 (프라이빗 풀빌라, 수상 액티비티)',
          '프랑스 생트로페 (요트, 명품 쇼핑)',
          '싱가포르 (마리나 베이 샌즈, 루프탑 바)',
        ],
        travelTips: [
          '호텔 컨시어지 서비스를 적극 활용하여 특별한 경험을 예약하세요.',
          '드레스 코드가 있는 레스토랑이나 바를 위해 멋진 의상을 준비하세요.',
          '프라이빗 투어를 이용하여 편안하고 깊이 있는 여행을 즐겨보세요.',
        ],
      },
    },
    {
      id: 'historical-intellectual',
      title: '🏛️ 역사 지식 탐험가형',
      description: '고대 문명의 흔적을 따라 지적인 탐구를 즐기는 당신!',
      detailedDescription:
        '여행은 살아있는 역사책을 읽는 것과 같습니다. 유적지에 얽힌 이야기를 듣고, 박물관의 유물을 보며 과거와 현재를 잇는 지적 희열을 느낍니다. 단순한 관광을 넘어 깊이 있는 배움을 얻는 여행을 선호합니다.',
      emoji: '🏛️',
      color: '#B0A4E6', // Light Purple
      traits: ['지적 호기심', '탐구적', '학구열', '역사 애호가', '의미 부여'],
      compatibility: {
        best: ['🎨 낭만 예술가형', '🍷 미식 감정가형'],
        avoid: ['🧗 액티비티 마스터형'],
      },
      recommendations: {
        destinations: [
          '이탈리아 로마 (콜로세움, 포로 로마노)',
          '그리스 아테네 (아크로폴리스, 고대 아고라)',
          '이집트 룩소르 (카르나크 신전, 왕가의 계곡)',
          '페루 쿠스코 (마추픽추, 잉카 유적)',
        ],
        travelTips: [
          '방문할 유적지에 대한 다큐멘터리나 책을 미리 보고 가면 재미가 두 배!',
          '지식이 풍부한 현지 가이드 투어에 참여하여 깊이 있는 설명을 들어보세요.',
          '박물관 오디오 가이드를 활용하면 유물을 더 잘 이해할 수 있습니다.',
        ],
      },
    },
    {
      id: 'exotic-adventurer',
      title: '🏞️ 이국적인 모험가형',
      description: '문명의 손길이 닿지 않은 미지의 세계를 탐험하는 것을 즐기는 당신!',
      detailedDescription:
        '틀에 박힌 여행을 거부합니다. 아마존 정글, 사하라 사막, 히말라야 산맥처럼 쉽게 갈 수 없는 곳에서 짜릿한 모험을 즐깁니다. 예측 불가능한 상황과 새로운 도전을 통해 살아있음을 느끼는 진정한 탐험가입니다.',
      emoji: '🏞️',
      color: '#FF7F50', // Coral
      traits: ['도전 정신', '개척가', '자유로운 영혼', '강한 체력', '적응력'],
      compatibility: {
        best: ['🧗 액티비티 마스터형', '🌲 평온한 자연 신봉자형'],
        avoid: ['🥂 럭셔리 트렌드세터형'],
      },
      recommendations: {
        destinations: [
          '볼리비아 우유니 소금사막',
          '아이슬란드 (빙하 트레킹, 오로라)',
          '모로코 (사하라 사막 투어, 아틀라스 산맥)',
          '네팔 (히말라야 트레킹)',
        ],
        travelTips: [
          '현지 상황에 능통한 전문 가이드와 동행하여 안전을 확보하세요.',
          '변덕스러운 날씨와 환경에 대비해 기능성 의류와 장비를 철저히 준비하세요.',
          '고산병 등 현지에서 발생할 수 있는 질병에 대한 정보를 미리 숙지하고 대비하세요.',
        ],
      },
    },
    {
      id: 'urban-explorer',
      title: '🌃 도시 탐험가형',
      description: '활기 넘치는 대도시의 구석구석을 누비며 트렌드를 만끽하는 당신!',
      detailedDescription:
        '잠들지 않는 도시의 에너지를 사랑합니다. 최신 유행을 선도하는 쇼핑가, 개성 넘치는 편집샵, 숨겨진 로컬 맛집, 그리고 화려한 야경을 즐길 수 있는 루프탑 바까지. 도시의 모든 것을 경험하고 싶어 하는 열정적인 탐험가입니다.',
      emoji: '🌃',
      color: '#708090', // Slate Gray
      traits: ['트렌디', '활동적', '도시적', '에너제틱', '맛집탐방'],
      compatibility: {
        best: ['🥂 럭셔리 트렌드세터형', '🍷 미식 감정가형'],
        avoid: ['🌲 평온한 자연 신봉자형'],
      },
      recommendations: {
        destinations: [
          '미국 뉴욕 (타임스퀘어, 브루클린)',
          '일본 도쿄 (시부야, 신주쿠)',
          '영국 런던 (소호, 쇼디치)',
          '홍콩 (야경, 쇼핑)',
        ],
        travelTips: [
          '교통 패스를 구매하여 대중교통을 효율적으로 이용하세요.',
          '현지인들이 많이 사용하는 앱을 통해 핫플레이스 정보를 얻어보세요.',
          '시티 투어 버스를 이용하면 주요 명소를 편안하게 둘러볼 수 있습니다.',
        ],
      },
    },
    {
      id: 'serene-nature-seeker',
      title: '🌲 평온한 자연 신봉자형',
      description: '복잡한 도시를 벗어나 위대한 대자연 속에서 진정한 힐링을 찾는 당신!',
      detailedDescription:
        '인공적인 것보다 자연 그대로의 모습에서 평온함을 느낍니다. 끝없이 펼쳐진 초원, 에메랄드빛 호수, 웅장한 산맥 앞에서 겸손해지며, 자연과 하나 되는 순간을 통해 진정한 휴식과 재충전의 시간을 갖습니다.',
      emoji: '🌲',
      color: '#2E8B57', // Sea Green
      traits: ['평화로움', '자연주의', '사색적', '고요함', '힐링'],
      compatibility: {
        best: ['🏞️ 이국적인 모험가형', '🧗 액티비티 마스터형'],
        avoid: ['🌃 도시 탐험가형'],
      },
      recommendations: {
        destinations: [
          '스위스 인터라켄 (알프스, 하이킹)',
          '캐나다 밴프 국립공원 (로키 산맥, 레이크 루이스)',
          '뉴질랜드 남섬 (피오르드, 밀포드 사운드)',
          '노르웨이 (피오르드 크루즈, 트롤퉁가)',
        ],
        travelTips: [
          '자연을 보호하는 마음으로 쓰레기는 반드시 되가져오세요.',
          '하이킹이나 트레킹 시에는 안전 장비를 꼭 착용하고 날씨 정보를 수시로 확인하세요.',
          '오두막이나 캠핑 등 자연 친화적인 숙소를 경험해 보세요.',
        ],
      },
    },
    {
      id: 'gourmet-connoisseur',
      title: '🍷 미식 감정가형',
      description: '여행의 목적은 오직 미식! 현지의 맛을 탐험하는 당신은 진정한 미식가입니다.',
      detailedDescription:
        '여행지를 정하는 가장 중요한 기준은 ‘무엇을 먹을 수 있는가’입니다. 파인 다이닝부터 길거리 음식까지, 음식에 얽힌 문화와 역사를 이해하며 맛보는 것을 즐깁니다. 당신의 여행은 미각을 만족시키는 행복한 여정입니다.',
      emoji: '🍷',
      color: '#D2691E', // Chocolate
      traits: ['미식가', '탐미주의', '경험 중시', '호기심', '섬세한 미각'],
      compatibility: {
        best: ['🥂 럭셔리 트렌드세터형', '🌃 도시 탐험가형', '🎨 낭만 예술가형'],
        avoid: [],
      },
      recommendations: {
        destinations: [
          '이탈리아 볼로냐 (파스타, 발사믹 식초)',
          '스페인 산 세바스티안 (핀초스, 미슐랭 레스토랑)',
          '태국 방콕 (스트리트 푸드, 왕실 요리)',
          '베트남 하노이 (쌀국수, 분짜)',
        ],
        travelTips: [
          '현지 쿠킹 클래스에 참여하여 직접 요리를 배워보는 특별한 경험을 해보세요.',
          '음식 전문 가이드와 함께하는 푸드 투어에 참여해 보세요.',
          '유명 레스토랑은 예약이 필수이니 미리 확인하고 예약하세요.',
        ],
      },
    },
    {
      id: 'activity-master',
      title: '🧗 액티비티 마스터형',
      description: '온몸으로 부딪치고 즐기는 짜릿한 경험을 사랑하는 당신!',
      detailedDescription:
        '가만히 앉아있는 것은 당신의 스타일이 아닙니다. 서핑, 스카이다이빙, 패러글라이딩, 스키 등 온몸으로 즐기는 액티비티를 통해 스트레스를 해소하고 에너지를 얻습니다. 여행은 당신에게 또 다른 도전의 장입니다.',
      emoji: '🧗',
      color: '#DC143C', // Crimson
      traits: ['활동적', '에너제틱', '도전적', '스릴 추구', '건강미'],
      compatibility: {
        best: ['🏞️ 이국적인 모험가형', '🌲 평온한 자연 신봉자형'],
        avoid: ['🏛️ 역사 지식 탐험가형', '🎨 낭만 예술가형'],
      },
      recommendations: {
        destinations: [
          '호주 골드코스트 (서핑, 테마파크)',
          '뉴질랜드 퀸스타운 (번지점프, 스카이다이빙)',
          '하와이 (스노클링, 화산 트레킹)',
          '코스타리카 (짚라인, 래프팅)',
        ],
        travelTips: [
          '액티비티 예약은 날씨의 영향을 많이 받으니 여러 대안을 준비해두세요.',
          '안전이 최우선! 반드시 검증된 업체를 이용하고 안전 수칙을 준수하세요.',
          '여행자 보험 가입 시, 즐길 액티비티가 보장 항목에 포함되는지 확인하세요.',
        ],
      },
    },
    {
      id: 'social-butterfly',
      title: '🧑‍🤝‍🧑 사교적인 여행가형',
      description: '새로운 사람들과 어울리며 즐거운 추억을 만드는 당신!',
      detailedDescription:
        '여행은 새로운 인연을 만들고 다양한 문화를 경험하는 기회라고 생각합니다. 현지인과의 교류, 게스트하우스에서의 만남, 동호회 활동 등을 통해 사람들과 어울리며 즐거움을 찾습니다. 당신의 여행은 언제나 웃음꽃이 피어납니다.',
      emoji: '🧑‍🤝‍🧑',
      color: '#4682B4', // Steel Blue
      traits: ['사교적', '친화력', '개방적', '적극적', '즐거움 추구'],
      compatibility: {
        best: ['🏞️ 이국적인 모험가형', '💰 가성비 탐험가형'],
        avoid: ['🧘 영적 탐구자형'],
      },
      recommendations: {
        destinations: [
          '스페인 바르셀로나 (타파스 투어, 밤문화)',
          '태국 치앙마이 (쿠킹 클래스, 나이트 바자)',
          '아일랜드 더블린 (펍 투어, 현지 페스티벌)',
          '남미 배낭여행 코스 (다양한 국적의 여행자들과 교류)',
        ],
        travelTips: [
          '언어 교환 앱이나 현지 소셜 모임에 참여해 보세요.',
          '게스트하우스나 호스텔에 머물며 다른 여행자들과 교류 기회를 만드세요.',
          '현지 시장이나 축제에 참여하여 활기찬 분위기를 느껴보세요.',
        ],
      },
    },
    {
      id: 'budget-traveler',
      title: '💰 가성비 탐험가형',
      description: '합리적인 예산으로 최고의 경험을 추구하는 스마트한 당신!',
      detailedDescription:
        '적은 비용으로도 알찬 여행을 즐기는 데 탁월한 능력을 가졌습니다. 저가 항공권, 가성비 좋은 숙소, 현지 대중교통 이용 등 스마트한 소비를 통해 여행의 만족도를 높입니다. 당신의 여행은 실속과 재미를 동시에 잡는 현명한 선택입니다.',
      emoji: '💰',
      color: '#808000', // Olive
      traits: ['합리적', '실속형', '정보력', '자립적', '계획적'],
      compatibility: {
        best: ['🧑‍🤝‍🧑 사교적인 여행가형', '🏞️ 이국적인 모험가형'],
        avoid: ['🥂 럭셔리 트렌드세터형'],
      },
      recommendations: {
        destinations: [
          '베트남 다낭/호이안 (저렴한 물가, 풍부한 볼거리)',
          '태국 방콕 (다양한 길거리 음식, 저렴한 쇼핑)',
          '동유럽 주요 도시 (물가가 저렴하고 문화유산 풍부)',
          '대만 타이베이 (야시장, 대중교통 발달)',
        ],
        travelTips: [
          '항공권은 미리 예약하고, 특가 프로모션을 활용하세요.',
          '현지 대중교통 앱을 활용하여 교통비를 절약하세요.',
          '무료 입장 가능한 박물관이나 공원 위주로 일정을 계획해 보세요.',
          '현지 시장에서 식재료를 구매하여 직접 요리해 보는 것도 좋습니다.',
        ],
      },
    },
    {
      id: 'spiritual-seeker',
      title: '🧘 영적 탐구자형',
      description: '고요함 속에서 자신을 돌아보고 내면의 성장을 추구하는 당신!',
      detailedDescription:
        '여행을 통해 내면의 평화와 영적인 깨달음을 얻고자 합니다. 명상, 요가, 사찰 방문, 자연 속에서의 사색 등 심신을 정화하고 자신을 성찰하는 시간을 중요하게 생각합니다. 당신의 여행은 진정한 힐링이자 성장의 시간입니다.',
      emoji: '🧘',
      color: '#8A2BE2', // Blue Violet
      traits: ['내성적', '사색적', '평온함 추구', '정신적 성장', '명상적'],
      compatibility: {
        best: ['🌲 평온한 자연 신봉자형', '🏛️ 역사 지식 탐험가형'],
        avoid: ['🧑‍🤝‍🧑 사교적인 여행가형', '🧗 액티비티 마스터형'],
      },
      recommendations: {
        destinations: [
          '인도 리시케시 (요가, 명상 아쉬람)',
          '일본 교토 (사찰 순례, 젠 가든)',
          '네팔 룸비니 (붓다 탄생지, 불교 유적)',
          '티베트 라싸 (포탈라궁, 불교 문화)',
        ],
        travelTips: [
          '휴대폰 사용을 자제하고 자연과 교감하는 시간을 충분히 가지세요.',
          '명상이나 요가 클래스에 참여하여 심신을 단련해 보세요.',
          '조용한 사찰이나 자연 속에서 충분한 사색의 시간을 가지세요.',
        ],
      },
    },
    {
      id: 'family-oriented',
      title: '👨‍👩‍👧‍👦 가족 중심형',
      description: '사랑하는 가족과 함께 소중한 추억을 만들어가는 당신!',
      detailedDescription:
        '여행은 가족과 함께하는 즐거운 시간이어야 한다고 생각합니다. 아이들을 위한 시설, 안전한 환경, 모두가 만족할 만한 활동 등을 중요하게 고려하며, 가족 모두가 행복할 수 있는 여행을 계획하고 실행합니다. 당신의 여행은 언제나 가족의 미소로 가득합니다.',
      emoji: '👨‍👩‍👧‍👦',
      color: '#FF6347', // Tomato
      traits: ['가족애', '배려심', '계획적', '안전 중시', '즐거움 추구'],
      compatibility: {
        best: ['🌲 평온한 자연 신봉자형', '🥂 럭셔리 트렌드세터형'],
        avoid: ['🏞️ 이국적인 모험가형', '💰 가성비 탐험가형'],
      },
      recommendations: {
        destinations: [
          '미국 올랜도 (디즈니월드, 유니버셜 스튜디오)',
          '태국 푸켓 (리조트, 해변 액티비티, 키즈 클럽)',
          '괌 (온화한 기후, 안전한 해변, 쇼핑)',
          '싱가포르 (유니버셜 스튜디오, 가든스 바이 더 베이)',
        ],
        travelTips: [
          '아이들의 연령과 취향에 맞는 활동을 미리 계획하세요.',
          '안전을 위해 여행자 보험 가입과 비상 연락망을 확인하세요.',
          '유모차 대여, 키즈 메뉴 등 가족 편의 시설 정보를 미리 파악하세요.',
        ],
      },
    },
  ],
};
