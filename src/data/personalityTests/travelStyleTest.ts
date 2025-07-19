import type { PersonalityTestData } from '@/types/personalityTest';

export const travelStyleTestData: PersonalityTestData = {
  id: 'travel-style-test',
  title: '✈️ 나의 여행 스타일 테스트',
  description:
    '어떤 여행을 꿈꾸시나요? 당신의 숨겨진 여행 스타일을 알아보고, 완벽한 다음 여행을 계획해 보세요!',
  category: 'lifestyle',
  resultTypes: [
    'adventurous-explorer', // 모험 탐험가형
    'relaxing-healer', // 휴식 힐링형
    'cultural-deep-diver', // 문화 심층 탐구형
    'city-tour-enjoyer', // 도시 투어 만끽형
    'foodie-traveler', // 미식 탐험가형
    'nature-lover', // 자연 친화형
    'spontaneous-wanderer', // 즉흥 자유로운 영혼형
    'planner-organizer', // 계획 완벽주의형
  ],
  questions: [
    {
      id: 'q1',
      question: '다음 여행지를 고른다면, 어떤 곳에 가장 끌리나요?',
      options: [
        {
          id: 'q1_a',
          text: '새로운 문화와 역사가 살아 숨 쉬는 유적지나 도시.',
          emoji: '🏛️',
          scores: { 'cultural-deep-diver': 3, 'city-tour-enjoyer': 2 },
        },
        {
          id: 'q1_b',
          text: '아름다운 자연경관 속에서 여유를 만끽할 수 있는 곳.',
          emoji: '🏞️',
          scores: { 'nature-lover': 3, 'relaxing-healer': 2 },
        },
        {
          id: 'q1_c',
          text: '익스트림 스포츠나 색다른 경험을 할 수 있는 도전적인 장소.',
          emoji: '🧗',
          scores: { 'adventurous-explorer': 3, 'spontaneous-wanderer': 1 },
        },
        {
          id: 'q1_d',
          text: '다양한 미식을 경험할 수 있는 활기찬 도시.',
          emoji: '🍜',
          scores: { 'foodie-traveler': 3, 'city-tour-enjoyer': 2 },
        },
      ],
    },
    {
      id: 'q2',
      question: '여행 계획을 세울 때, 당신의 방식은?',
      options: [
        {
          id: 'q2_a',
          text: '최대한 자세하게 일정과 동선을 짜는 완벽주의자!',
          emoji: '📝',
          scores: { 'planner-organizer': 3, 'cultural-deep-diver': 1 },
        },
        {
          id: 'q2_b',
          text: '대략적인 틀만 잡고, 현지에서 즉흥적으로 결정한다.',
          emoji: '🗺️',
          scores: { 'spontaneous-wanderer': 3, 'adventurous-explorer': 2 },
        },
        {
          id: 'q2_c',
          text: '필수적인 것만 알아보고, 나머지는 현지 분위기에 맡긴다.',
          emoji: '😌',
          scores: { 'relaxing-healer': 3, 'nature-lover': 1 },
        },
        {
          id: 'q2_d',
          text: '맛집 리스트부터 짜고, 주변 관광지를 끼워 맞춘다.',
          emoji: '😋',
          scores: { 'foodie-traveler': 3, 'city-tour-enjoyer': 2 },
        },
      ],
    },
    {
      id: 'q3',
      question: '여행지에서 가장 중요하게 생각하는 것은?',
      options: [
        {
          id: 'q3_a',
          text: '몸과 마음의 완벽한 휴식과 재충전.',
          emoji: '💆',
          scores: { 'relaxing-healer': 3, 'nature-lover': 1 },
        },
        {
          id: 'q3_b',
          text: '평소 경험하기 힘든 새로운 도전과 모험.',
          emoji: '🚀',
          scores: { 'adventurous-explorer': 3, 'spontaneous-wanderer': 2 },
        },
        {
          id: 'q3_c',
          text: '그 지역의 역사, 예술, 전통 문화를 깊이 이해하는 것.',
          emoji: '🧐',
          scores: { 'cultural-deep-diver': 3, 'planner-organizer': 2 },
        },
        {
          id: 'q3_d',
          text: '유명 관광지 방문과 쇼핑, 그리고 맛있는 음식!',
          emoji: '🛍️',
          scores: { 'city-tour-enjoyer': 3, 'foodie-traveler': 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '여행 중 예상치 못한 상황이 발생했을 때, 당신의 반응은?',
      options: [
        {
          id: 'q4_a',
          text: '당황스럽지만, 침착하게 해결 방안을 모색한다.',
          emoji: '😌',
          scores: { 'planner-organizer': 2, 'adventurous-explorer': 1 },
        },
        {
          id: 'q4_b',
          text: '이것도 추억! 긍정적으로 받아들이고 즐긴다.',
          emoji: '😂',
          scores: { 'spontaneous-wanderer': 3, 'relaxing-healer': 1 },
        },
        {
          id: 'q4_c',
          text: '계획이 틀어져서 스트레스를 받지만, 대안을 찾으려 한다.',
          emoji: '😩',
          scores: { 'planner-organizer': 3, 'cultural-deep-diver': 1 },
        },
        {
          id: 'q4_d',
          text: '새로운 모험의 시작이라 생각하며 오히려 즐긴다.',
          emoji: '🤩',
          scores: { 'adventurous-explorer': 3, 'foodie-traveler': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '여행 기념품을 고른다면?',
      options: [
        {
          id: 'q5_a',
          text: '그 지역의 전통 공예품이나 역사적 의미가 있는 물건.',
          emoji: '🏺',
          scores: { 'cultural-deep-diver': 3, 'planner-organizer': 1 },
        },
        {
          id: 'q5_b',
          text: '맛있는 현지 음식이나 술.',
          emoji: '🍷',
          scores: { 'foodie-traveler': 3, 'city-tour-enjoyer': 2 },
        },
        {
          id: 'q5_c',
          text: '당시의 모험을 떠올릴 수 있는 실용적인 아웃도어 용품.',
          emoji: '🥾',
          scores: { 'adventurous-explorer': 3, 'nature-lover': 1 },
        },
        {
          id: 'q5_d',
          text: '사진! 가장 좋은 기념품은 사진이라고 생각한다.',
          emoji: '📸',
          scores: { 'relaxing-healer': 2, 'spontaneous-wanderer': 2 },
        },
      ],
    },
    {
      id: 'q6',
      question: '가장 이상적인 여행 동반자는?',
      options: [
        {
          id: 'q6_a',
          text: '계획적이고 꼼꼼하게 모든 것을 준비해 주는 친구.',
          emoji: '👩‍💻',
          scores: { 'planner-organizer': 3, 'cultural-deep-diver': 1 },
        },
        {
          id: 'q6_b',
          text: '어떤 상황에서도 함께 즐기고 웃을 수 있는 유쾌한 친구.',
          emoji: '👯',
          scores: { 'spontaneous-wanderer': 3, 'foodie-traveler': 2 },
        },
        {
          id: 'q6_c',
          text: '조용히 자연을 감상하거나 함께 힐링할 수 있는 친구.',
          emoji: '🧘',
          scores: { 'relaxing-healer': 3, 'nature-lover': 3 },
        },
        {
          id: 'q6_d',
          text: '새로운 도전을 두려워하지 않는 모험심 강한 친구.',
          emoji: '🧑‍🤝‍🧑',
          scores: { 'adventurous-explorer': 3, 'city-tour-enjoyer': 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: '여행 전 가장 먼저 확인하는 정보는?',
      options: [
        {
          id: 'q7_a',
          text: '현지 맛집과 유명 음식 리스트.',
          emoji: '😋',
          scores: { 'foodie-traveler': 3, 'city-tour-enjoyer': 2 },
        },
        {
          id: 'q7_b',
          text: '날씨, 숙소, 교통편 등 기본적인 여행 정보.',
          emoji: '☁️',
          scores: { 'planner-organizer': 3, 'relaxing-healer': 1 },
        },
        {
          id: 'q7_c',
          text: '필수 방문 유적지나 박물관, 미술관 정보.',
          emoji: '🏛️',
          scores: { 'cultural-deep-diver': 3, 'planner-organizer': 2 },
        },
        {
          id: 'q7_d',
          text: '현지에서 할 수 있는 특별한 액티비티나 체험 프로그램.',
          emoji: '🏄',
          scores: { 'adventurous-explorer': 3, 'spontaneous-wanderer': 2 },
        },
      ],
    },
    {
      id: 'q8',
      question: '여행 중 가장 기억에 남는 순간은?',
      options: [
        {
          id: 'q8_a',
          text: '아무 계획 없이 걷다가 우연히 발견한 멋진 풍경.',
          emoji: '🏞️',
          scores: { 'spontaneous-wanderer': 3, 'nature-lover': 2 },
        },
        {
          id: 'q8_b',
          text: '새로운 음식에 도전하여 맛의 신세계를 경험한 순간.',
          emoji: '🤤',
          scores: { 'foodie-traveler': 3, 'city-tour-enjoyer': 1 },
        },
        {
          id: 'q8_c',
          text: '역사적인 장소에서 그 시대의 분위기를 느꼈을 때.',
          emoji: '⏳',
          scores: { 'cultural-deep-diver': 3, 'planner-organizer': 2 },
        },
        {
          id: 'q8_d',
          text: '힘든 도전 끝에 정상에 오르거나 목표를 달성한 순간.',
          emoji: '🧗‍♂️',
          scores: { 'adventurous-explorer': 3, 'nature-lover': 2 },
        },
      ],
    },
    {
      id: 'q9',
      question: '여행 후, 당신은 어떤 상태인가요?',
      options: [
        {
          id: 'q9_a',
          text: '재충전 완료! 에너지가 넘치고 다음 여행을 꿈꾼다.',
          emoji: '🔋',
          scores: { 'relaxing-healer': 3, 'nature-lover': 2 },
        },
        {
          id: 'q9_b',
          text: '새로운 지식과 경험으로 한 뼘 더 성장한 느낌!',
          emoji: '🌱',
          scores: { 'cultural-deep-diver': 3, 'documentary-intellectual': 1 }, // 이전 유형 연관
        },
        {
          id: 'q9_c',
          text: '여행의 여운이 길게 남아 사진을 보며 추억에 잠긴다.',
          emoji: '📸',
          scores: { 'city-tour-enjoyer': 2, 'foodie-traveler': 1 },
        },
        {
          id: 'q9_d',
          text: '조금 피곤하지만, 새로운 도전을 한 것에 대한 뿌듯함.',
          emoji: '💪',
          scores: { 'adventurous-explorer': 3, 'spontaneous-wanderer': 2 },
        },
      ],
    },
    {
      id: 'q10',
      question: '가장 선호하는 숙소 타입은?',
      options: [
        {
          id: 'q10_a',
          text: '편안한 침구와 조용한 분위기의 호텔/리조트.',
          emoji: '🏨',
          scores: { 'relaxing-healer': 3, 'planner-organizer': 1 },
        },
        {
          id: 'q10_b',
          text: '현지 문화를 체험할 수 있는 게스트하우스나 에어비앤비.',
          emoji: '🏡',
          scores: { 'cultural-deep-diver': 2, 'spontaneous-wanderer': 2 },
        },
        {
          id: 'q10_c',
          text: '교통이 편리하고 주변에 즐길 거리가 많은 시내 호텔.',
          emoji: '🏙️',
          scores: { 'city-tour-enjoyer': 3, 'foodie-traveler': 2 },
        },
        {
          id: 'q10_d',
          text: '텐트나 방갈로 등 자연 친화적인 숙소.',
          emoji: '🏕️',
          scores: { 'nature-lover': 3, 'adventurous-explorer': 2 },
        },
      ],
    },
    {
      id: 'q11',
      question: '여행 중 꼭 시도해보고 싶은 활동은?',
      options: [
        {
          id: 'q11_a',
          text: '현지 쿠킹 클래스 참여 또는 길거리 음식 탐방.',
          emoji: '👩‍🍳',
          scores: { 'foodie-traveler': 3, 'cultural-deep-diver': 1 },
        },
        {
          id: 'q11_b',
          text: '패러글라이딩, 스쿠버다이빙 등 스릴 넘치는 액티비티.',
          emoji: '🤸',
          scores: { 'adventurous-explorer': 3, 'spontaneous-wanderer': 2 },
        },
        {
          id: 'q11_c',
          text: '숲속 하이킹, 별이 쏟아지는 밤하늘 감상.',
          emoji: '🌌',
          scores: { 'nature-lover': 3, 'relaxing-healer': 2 },
        },
        {
          id: 'q11_d',
          text: '미술관, 박물관, 역사 유적지 투어.',
          emoji: '🖼️',
          scores: { 'cultural-deep-diver': 3, 'planner-organizer': 2 },
        },
      ],
    },
    {
      id: 'q12',
      question: '다음 여행을 계획할 때 가장 먼저 고려하는 것은?',
      options: [
        {
          id: 'q12_a',
          text: '가고 싶은 지역의 날씨와 성수기 여부.',
          emoji: '☀️',
          scores: { 'planner-organizer': 3, 'relaxing-healer': 1 },
        },
        {
          id: 'q12_b',
          text: '새로운 모험이나 체험을 할 수 있는 기회.',
          emoji: '✨',
          scores: { 'adventurous-explorer': 3, 'spontaneous-wanderer': 2 },
        },
        {
          id: 'q12_c',
          text: '예산과 기간, 그리고 효율적인 동선.',
          emoji: '💰',
          scores: { 'planner-organizer': 3, 'city-tour-enjoyer': 1 },
        },
        {
          id: 'q12_d',
          text: '현지에서 꼭 먹어봐야 할 음식이나 방문할 맛집.',
          emoji: '🍜',
          scores: { 'foodie-traveler': 3, 'cultural-deep-diver': 1 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'adventurous-explorer',
      title: '🧗 모험 탐험가형',
      description: '당신은 미지의 세계를 탐험하고, 새로운 도전을 즐기는 진정한 모험가입니다.',
      detailedDescription:
        "익스트림 스포츠, 오지 탐험, 예측 불가능한 상황에서 짜릿함을 느낍니다. 안전보다는 경험을 중시하며, 여행을 통해 자신을 시험하고 성장하는 것을 중요하게 생각합니다. 남들이 가지 않는 길을 개척하고, 잊을 수 없는 추억을 만드는 것을 즐깁니다. 버킷리스트에 '킬리만자로 등반', '스카이다이빙' 등이 있을 확률이 높습니다.",
      emoji: '🧗',
      color: '#FF4500', // OrangeRed
      traits: ['도전적', '모험심', '스릴 추구', '개척 정신', '성장 지향', '활동적'],
      compatibility: {
        best: ['🗺️ 즉흥 자유로운 영혼형', '🌳 자연 친화형'],
        good: [],
        avoid: ['💆 휴식 힐링형', '📝 계획 완벽주의형'],
      },
      recommendations: {
        destinations: [
          '뉴질랜드 (액티비티의 천국)',
          '페루 마추픽추 (트레킹)',
          '아프리카 사파리',
          '아이슬란드 (대자연 탐험)',
        ],
        tips: [
          '안전 장비를 꼼꼼히 챙기고, 현지 가이드의 지시를 따르세요.',
          '예기치 못한 상황에 대비해 유연한 마음을 가지는 것이 중요해요.',
          '도전적인 경험 외에 현지 문화 체험도 함께 즐겨보세요.',
        ],
      },
    },
    {
      id: 'relaxing-healer',
      title: '💆 휴식 힐링형',
      description:
        '당신은 여행의 목적이 오직 몸과 마음의 완벽한 휴식과 재충전이라고 생각하는 힐링 추구자입니다.',
      detailedDescription:
        '북적이는 관광지보다는 조용한 자연 속에서 여유를 만끽하는 것을 선호합니다. 호캉스, 스파, 해변 휴양지 등에서 아무것도 하지 않고 쉬는 것을 가장 중요하게 생각하며, 스트레스를 풀고 에너지를 충전하는 데 집중합니다. <발리>, <몰디브>, <제주도 풀빌라> 등이 당신의 로망 여행지일 수 있습니다.',
      emoji: '💆',
      color: '#ADD8E6', // Light Blue
      traits: ['휴식 지향', '여유로움', '재충전', '평화로움', '스트레스 해소', '편안함'],
      compatibility: {
        best: ['🌳 자연 친화형', '📝 계획 완벽주의형'],
        good: [],
        avoid: ['🧗 모험 탐험가형', '🗺️ 즉흥 자유로운 영혼형'],
      },
      recommendations: {
        destinations: [
          '태국 코사무이',
          '베트남 다낭',
          '강원도 양양 (서핑 & 힐링)',
          '스위스 (산악 휴양)',
        ],
        tips: [
          '여행 전 충분한 수면과 컨디션 조절을 잊지 마세요.',
          '무리한 일정은 피하고, 즉흥적인 여유를 즐기세요.',
          '휴식 중에도 간단한 스트레칭이나 명상을 통해 몸과 마음을 더욱 편안하게 하세요.',
        ],
      },
    },
    {
      id: 'cultural-deep-diver',
      title: '🏛️ 문화 심층 탐구형',
      description:
        '당신은 여행을 통해 그 지역의 역사, 예술, 전통 문화를 깊이 이해하고 싶어 하는 지적인 탐구자입니다.',
      detailedDescription:
        '박물관, 미술관, 유적지, 전통 시장 등을 방문하며 현지인의 삶과 문화를 직접 체험하는 것을 즐깁니다. 단순한 구경을 넘어, 그 안에 담긴 의미와 역사를 배우는 것에 큰 가치를 둡니다. <이탈리아 로마>, <그리스 아테네>, <일본 교토>처럼 깊은 역사와 전통을 가진 도시가 당신의 이상적인 여행지입니다.',
      emoji: '🏛️',
      color: '#B0C4DE', // Light Steel Blue
      traits: ['학구적', '역사 애호가', '문화 체험', '지적 호기심', '탐구적', '꼼꼼함'],
      compatibility: {
        best: ['📝 계획 완벽주의형', '다큐멘터리 지성형'], // 이전 유형 연관
        good: [],
        avoid: ['🗺️ 즉흥 자유로운 영혼형', '🧗 모험 탐험가형'],
      },
      recommendations: {
        destinations: ['프랑스 파리', '영국 런던', '터키 이스탄불', '한국 경주'],
        tips: [
          '방문할 곳의 역사적 배경이나 의미를 미리 학습하면 더욱 풍부한 경험을 할 수 있어요.',
          '현지 가이드 투어나 워킹 투어에 참여하는 것도 좋은 방법입니다.',
          '문화 유적지 방문 외에 현지인의 삶을 엿볼 수 있는 소박한 마을도 방문해 보세요.',
        ],
      },
    },
    {
      id: 'city-tour-enjoyer',
      title: '🏙️ 도시 투어 만끽형',
      description:
        '당신은 활기찬 도시의 에너지와 다채로운 즐거움을 만끽하는 세련된 도시 여행자입니다.',
      detailedDescription:
        '화려한 야경, 최신 유행의 쇼핑 거리, 맛집 탐방, 그리고 도시만의 특별한 분위기를 즐깁니다. 대중교통을 이용하여 도시 곳곳을 누비며, 도시의 숨겨진 명소나 힙한 공간을 찾아다니는 것을 좋아합니다. <뉴욕>, <도쿄>, <서울>, <파리> 등 대도시의 매력을 제대로 느끼고 싶어 합니다.',
      emoji: '🏙️',
      color: '#808080', // Gray
      traits: ['세련됨', '활동적', '다채로움', '쇼핑 선호', '맛집 탐방', '트렌디'],
      compatibility: {
        best: ['🍜 미식 탐험가형', '📝 계획 완벽주의형'],
        good: [],
        avoid: ['🌳 자연 친화형', '💆 휴식 힐링형'],
      },
      recommendations: {
        destinations: [
          '일본 오사카 (맛집, 쇼핑)',
          '태국 방콕 (야시장, 문화)',
          '스페인 바르셀로나 (예술, 미식)',
          '미국 샌프란시스코 (혁신, 문화)',
        ],
        tips: [
          '도심 외곽의 숨겨진 장소나 로컬 마켓을 방문해 보세요.',
          '대중교통을 이용해 현지인의 삶을 엿보는 것도 좋아요.',
          '밤에는 도시의 야경을 즐기며 잊지 못할 추억을 만드세요.',
        ],
      },
    },
    {
      id: 'foodie-traveler',
      title: '🍜 미식 탐험가형',
      description:
        "당신은 여행의 핵심이 바로 '음식'이라고 믿는, 맛있는 경험을 찾아 떠나는 미식가입니다.",
      detailedDescription:
        '현지 음식 탐방을 최우선으로 생각하며, 유명 맛집부터 길거리 음식, 전통 시장까지 모든 것을 섭렵하려 합니다. 새로운 식재료나 요리법에 대한 호기심이 많고, 음식으로 그 지역의 문화를 이해하는 것을 즐깁니다. <이탈리아>, <태국>, <베트남>, <일본>처럼 미식의 본고장이 당신의 다음 여행지일 수 있습니다.',
      emoji: '🍜',
      color: '#FFD700', // Gold
      traits: ['미식가', '탐험적', '호기심', '오감 만족', '문화 이해', '경험 중시'],
      compatibility: {
        best: ['🏙️ 도시 투어 만끽형', '🗺️ 즉흥 자유로운 영혼형'],
        good: [],
        avoid: ['🌳 자연 친화형', '🧗 모험 탐험가형'], // 활동 중심보다 먹는 것에 집중
      },
      recommendations: {
        destinations: [
          '베트남 호이안',
          '이탈리아 피렌체',
          '멕시코 칸쿤 (타코 투어)',
          '한국 전주 (한옥마을 & 비빔밥)',
        ],
        tips: [
          '유명 맛집 외에 현지인들이 자주 가는 숨겨진 식당을 찾아보세요.',
          '쿠킹 클래스에 참여하여 현지 요리를 직접 만들어보는 것도 좋은 경험이에요.',
          '음식 사진을 예쁘게 찍어 SNS에 공유하는 것도 재미있을 거예요.',
        ],
      },
    },
    {
      id: 'nature-lover',
      title: '🌳 자연 친화형',
      description: '당신은 대자연 속에서 진정한 자유와 평화를 느끼는 자연 애호가입니다.',
      detailedDescription:
        '웅장한 산, 푸른 바다, 고요한 숲 등 자연경관이 아름다운 곳을 선호합니다. 하이킹, 캠핑, 스노클링 등 자연과 교감하는 활동을 즐기며, 도시의 소음에서 벗어나 조용히 사색하는 시간을 갖는 것을 중요하게 생각합니다. <스위스 알프스>, <캐나다 로키산맥>, <제주도 오름>처럼 자연의 위대함을 느낄 수 있는 곳이 당신의 로망입니다.',
      emoji: '🌳',
      color: '#228B22', // Forest Green
      traits: ['자연 지향', '평화로움', '사색적', '친환경적', '활동적 (자연 내)', '자유로움'],
      compatibility: {
        best: ['💆 휴식 힐링형', '🧗 모험 탐험가형'],
        good: [],
        avoid: ['🏙️ 도시 투어 만끽형', '🍜 미식 탐험가형'],
      },
      recommendations: {
        destinations: [
          '뉴질랜드 (청정 자연)',
          '미국 국립공원 (옐로스톤, 그랜드 캐년)',
          '몽골 (드넓은 초원)',
          '강원도 설악산 (등산)',
        ],
        tips: [
          '자연 훼손을 최소화하고 환경 보호에 신경 써 주세요.',
          '자연 속에서 할 수 있는 다양한 액티비티를 미리 알아보세요.',
          '일출이나 일몰처럼 자연이 선사하는 경이로운 순간을 놓치지 마세요.',
        ],
      },
    },
    {
      id: 'spontaneous-wanderer',
      title: '🗺️ 즉흥 자유로운 영혼형',
      description:
        '당신은 미리 짜인 계획 없이, 발길 닿는 대로 떠나는 즉흥적인 여행을 즐기는 자유로운 영혼입니다.',
      detailedDescription:
        '계획에 얽매이기보다 현지에서 끌리는 대로 움직이며 예상치 못한 경험을 즐깁니다. 새로운 사람들과의 만남, 우연한 발견, 그리고 즉흥적인 결정에서 여행의 진정한 묘미를 느낍니다. 홀로 떠나는 배낭여행이나, 친구들과 함께 자유롭게 떠나는 로드 트립을 선호하며, 정해진 루트 없이 흘러가는 대로 여행하는 것에 만족감을 느낍니다.',
      emoji: '🗺️',
      color: '#8B008B', // Dark Magenta
      traits: ['즉흥적', '자유로움', '개방적', '유연함', '우연 추구', '새로운 경험'],
      compatibility: {
        best: ['🧗 모험 탐험가형', '🍜 미식 탐험가형'],
        good: [],
        avoid: ['📝 계획 완벽주의형', '🏛️ 문화 심층 탐구형'],
      },
      recommendations: {
        destinations: [
          '태국 방콕 (카오산 로드)',
          '포르투갈 리스본',
          '인도 (배낭여행의 성지)',
          '동남아시아 전역',
        ],
        tips: [
          '기본적인 안전 수칙과 비상 연락망은 미리 확인하세요.',
          '유연한 마음으로 현지 문화를 받아들이고 즐기세요.',
          '예상치 못한 상황도 즐거운 추억으로 만들 수 있는 긍정적인 태도가 중요해요.',
        ],
      },
    },
    {
      id: 'planner-organizer',
      title: '📝 계획 완벽주의형',
      description:
        '당신은 여행의 모든 것을 미리 계획하고 준비하는 것을 즐기는 완벽한 계획가입니다.',
      detailedDescription:
        '항공권, 숙소, 교통편, 모든 관광지 동선, 맛집 예약까지 꼼꼼하게 미리 준비해야 마음이 편안합니다. 효율적인 일정으로 최대한 많은 것을 보고 경험하는 것을 중요하게 생각하며, 빈틈없는 계획을 통해 만족스러운 여행을 만들어냅니다. 여행 전 자료 조사와 정보 수집에 많은 시간을 투자합니다.',
      emoji: '📝',
      color: '#4169E1', // Royal Blue
      traits: ['계획적', '꼼꼼함', '조직적', '정보 수집', '효율성 중시', '준비성'],
      compatibility: {
        best: ['🏛️ 문화 심층 탐구형', '🏙️ 도시 투어 만끽형'],
        good: ['💆 휴식 힐링형'],
        avoid: ['🗺️ 즉흥 자유로운 영혼형', '🧗 모험 탐험가형'],
      },
      recommendations: {
        destinations: [
          '유럽 주요 도시 (여러 나라를 효율적으로)',
          '일본 도쿄/오사카 (깔끔한 대중교통)',
          '스위스 (패스 이용 용이)',
          '미국 뉴욕 (다양한 볼거리)',
        ],
        tips: [
          '너무 완벽한 계획도 좋지만, 가끔은 즉흥적인 여유를 두는 것도 좋아요.',
          '함께 여행하는 동반자의 의견도 존중하고 조율하는 시간을 가지세요.',
          '여행 중 발생할 수 있는 비상 상황에 대한 대처 계획도 세워두면 좋아요.',
        ],
      },
    },
  ],
};
