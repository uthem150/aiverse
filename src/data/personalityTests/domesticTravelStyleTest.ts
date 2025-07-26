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
          scores: { 'history-explorer': 3, 'healing-chaser': 1 },
        },
        {
          id: 'q1_b',
          text: '푸른 바다와 맛있는 먹거리가 가득한 부산, 여수',
          emoji: '🍜',
          scores: { 'foodie-tourist': 3, 'city-vacationer': 2 },
        },
        {
          id: 'q1_c',
          text: '서핑, 패러글라이딩 등 즐길 거리가 많은 양양, 단양',
          emoji: '🏄',
          scores: { 'activity-seeker': 3, 'insta-famous': 1 },
        },
        {
          id: 'q1_d',
          text: '초록빛 자연 속에서 쉴 수 있는 제주도, 강원도 평창',
          emoji: '🌳',
          scores: { 'healing-chaser': 3, 'history-explorer': 1 },
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
          scores: { 'insta-famous': 3, 'city-vacationer': 1 },
        },
        {
          id: 'q2_b',
          text: '그 지역에서만 맛볼 수 있는 로컬 맛집, 전통 시장 방문하기',
          emoji: '🍽️',
          scores: { 'foodie-tourist': 3, 'history-explorer': 1 },
        },
        {
          id: 'q2_c',
          text: '몸과 마음의 평화를 위한 스파, 명상, 조용한 산책',
          emoji: '🧘',
          scores: { 'healing-chaser': 3, 'activity-seeker': -1 },
        },
        {
          id: 'q2_d',
          text: '박물관, 유적지를 방문하며 그 지역의 역사 배우기',
          emoji: '🏛️',
          scores: { 'history-explorer': 3, 'foodie-tourist': 1 },
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
          scores: { 'city-vacationer': 3, 'insta-famous': 1 },
        },
        {
          id: 'q3_b',
          text: '자연 속에 위치한 프라이빗한 풀빌라나 독채 펜션',
          emoji: '🏡',
          scores: { 'healing-chaser': 3, 'insta-famous': 2 },
        },
        {
          id: 'q3_c',
          text: '가성비 좋고 새로운 사람들을 만날 수 있는 게스트하우스',
          emoji: '🧑‍🤝‍🧑',
          scores: { 'activity-seeker': 2, 'foodie-tourist': 1 },
        },
        {
          id: 'q3_d',
          text: '그 지역의 특색을 느낄 수 있는 한옥 스테이나 고택',
          emoji: '🎑',
          scores: { 'history-explorer': 3, 'healing-chaser': 2 },
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
          scores: { 'foodie-tourist': 3, 'city-vacationer': 1 },
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
          scores: { 'activity-seeker': 3, 'city-vacationer': 1 },
        },
        {
          id: 'q4_d',
          text: '혼자만의 시간이 필요해... 조용히 각자 즐기는 동반자',
          emoji: '😌',
          scores: { 'healing-chaser': 3, 'history-explorer': 2 },
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
          scores: { 'city-vacationer': 3, 'insta-famous': 2 },
        },
        {
          id: 'q5_b',
          text: '강릉 바다 보며 카페에서 멍 때리기',
          emoji: '☕',
          scores: { 'healing-chaser': 2, 'insta-famous': 2 },
        },
        {
          id: 'q5_c',
          text: '백제의 역사가 살아 숨 쉬는 부여, 공주로 시간 여행',
          emoji: '⏳',
          scores: { 'history-explorer': 3, 'healing-chaser': 1 },
        },
        {
          id: 'q5_d',
          text: '통영에서 루지 타고, 꿀빵 먹방 찍기',
          emoji: '🏎️',
          scores: { 'activity-seeker': 2, 'foodie-tourist': 2 },
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
        best: ['🧘 힐링 추구자'],
        avoid: ['🤸 액티비티 매니아'],
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
        best: ['📸 감성 인스타그래머'],
        avoid: ['🧘 힐링 추구자'],
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
        best: ['🏙️ 도시 바캉서'],
        avoid: ['🧘 힐링 추구자'],
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
        best: ['🏛️ 역사 탐험가'],
        avoid: ['🤸 액티비티 매니아'],
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
        best: ['🤸 액티비티 매니아'],
        avoid: ['🏛️ 역사 탐험가'],
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
        best: ['🍽️ 식도락 여행객'],
        avoid: ['🏛️ 역사 탐험가'],
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
  ],
};
