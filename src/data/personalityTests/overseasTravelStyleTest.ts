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
          emoji: ' GoPro',
          scores: { 'activity-master': 3, 'exotic-adventurer': 1 },
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
  ],
};
