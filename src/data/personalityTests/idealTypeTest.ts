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
    {
      id: 'q3',
      question: '가장 좋아하는 영화 장르는?',
      options: [
        {
          id: 'q3_a',
          text: '철학적 메시지가 담긴 예술 영화',
          emoji: '🎬',
          scores: { artist: 3, scholar: 2, free_spirit: 1 },
        },
        {
          id: 'q3_b',
          text: '스릴 넘치는 액션 어드벤처',
          emoji: '💥',
          scores: { adventurer: 3, leader: 2, protector: 1 },
        },
        {
          id: 'q3_c',
          text: '인생의 깊이를 다루는 다큐멘터리',
          emoji: '📽️',
          scores: { scholar: 3, healer: 2, creator: 1 },
        },
        {
          id: 'q3_d',
          text: '따뜻한 감동을 주는 드라마',
          emoji: '😢',
          scores: { healer: 3, protector: 2, artist: 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: '스트레스 해소 방법은?',
      options: [
        {
          id: 'q4_a',
          text: '새로운 창작 활동에 몰두하기',
          emoji: '✍️',
          scores: { creator: 3, artist: 2, free_spirit: 1 },
        },
        {
          id: 'q4_b',
          text: '홀로 조용히 사색하며 명상하기',
          emoji: '🧘',
          scores: { healer: 3, scholar: 2, free_spirit: 1 },
        },
        {
          id: 'q4_c',
          text: '몸을 움직여 에너지를 발산하기',
          emoji: '🏃',
          scores: { adventurer: 3, leader: 2, protector: 1 },
        },
        {
          id: 'q4_d',
          text: '친구들과 수다 떨며 고민 나누기',
          emoji: '🗣️',
          scores: { leader: 2, protector: 2, healer: 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '이상형의 가장 중요한 특징은?',
      options: [
        {
          id: 'q5_a',
          text: '나를 이해하고 감싸주는 포용력',
          emoji: '🫂',
          scores: { healer: 3, protector: 2, artist: 1 },
        },
        {
          id: 'q5_b',
          text: '새로운 세상을 보여줄 탐험 정신',
          emoji: '🧭',
          scores: { adventurer: 3, free_spirit: 2, creator: 1 },
        },
        {
          id: 'q5_c',
          text: '지적 호기심과 깊이 있는 지식',
          emoji: '🧠',
          scores: { scholar: 3, creator: 2, artist: 1 },
        },
        {
          id: 'q5_d',
          text: '목표를 향해 나아가는 추진력',
          emoji: '🚀',
          scores: { leader: 3, protector: 2, adventurer: 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '평소 패션 스타일은?',
      options: [
        {
          id: 'q6_a',
          text: '편안하고 자유로운 보헤미안 스타일',
          emoji: '👕',
          scores: { free_spirit: 3, artist: 2, adventurer: 1 },
        },
        {
          id: 'q6_b',
          text: '단정하고 깔끔한 클래식 스타일',
          emoji: '👔',
          scores: { scholar: 3, leader: 2, protector: 1 },
        },
        {
          id: 'q6_c',
          text: '개성 있고 독특한 아트적인 스타일',
          emoji: '👗',
          scores: { artist: 3, creator: 2, free_spirit: 1 },
        },
        {
          id: 'q6_d',
          text: '활동적이고 실용적인 캐주얼 스타일',
          emoji: '👖',
          scores: { adventurer: 2, leader: 2, protector: 2 },
        },
      ],
    },
    {
      id: 'q7',
      question: '데이트 중 갈등이 생겼을 때, 당신의 대처 방식은?',
      options: [
        {
          id: 'q7_a',
          text: '상대방의 감정을 먼저 살피고 진정시킨다',
          emoji: '🥺',
          scores: { healer: 3, protector: 2, artist: 1 },
        },
        {
          id: 'q7_b',
          text: '논리적으로 문제의 원인을 분석하고 해결책을 제시한다',
          emoji: '🧐',
          scores: { scholar: 3, leader: 2, creator: 1 },
        },
        {
          id: 'q7_c',
          text: '잠시 분위기를 전환하고 나중에 다시 이야기한다',
          emoji: '😌',
          scores: { free_spirit: 3, adventurer: 2, healer: 1 },
        },
        {
          id: 'q7_d',
          text: '내가 먼저 나서서 리드하며 상황을 정리한다',
          emoji: '💪',
          scores: { leader: 3, protector: 2, adventurer: 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '어떤 음악 장르를 가장 선호하나요?',
      options: [
        {
          id: 'q8_a',
          text: '잔잔하고 감성적인 인디 음악',
          emoji: '🎧',
          scores: { artist: 3, healer: 2, free_spirit: 1 },
        },
        {
          id: 'q8_b',
          text: '에너지가 넘치는 록 또는 팝 음악',
          emoji: '🎸',
          scores: { adventurer: 3, leader: 2, protector: 1 },
        },
        {
          id: 'q8_c',
          text: '복잡한 구성의 재즈나 클래식',
          emoji: '🎼',
          scores: { scholar: 3, creator: 2, artist: 1 },
        },
        {
          id: 'q8_d',
          text: '실험적이고 새로운 사운드의 전자 음악',
          emoji: '🎶',
          scores: { creator: 3, free_spirit: 2, adventurer: 1 },
        },
      ],
    },
    {
      id: 'q9',
      question: '인생에서 가장 중요하다고 생각하는 가치는?',
      options: [
        {
          id: 'q9_a',
          text: '진실과 지식의 추구',
          emoji: '💡',
          scores: { scholar: 3, creator: 2, healer: 1 },
        },
        {
          id: 'q9_b',
          text: '자유와 개인의 개성',
          emoji: '🕊️',
          scores: { free_spirit: 3, artist: 2, adventurer: 1 },
        },
        {
          id: 'q9_c',
          text: '책임감과 안정적인 관계',
          emoji: '🛡️',
          scores: { protector: 3, leader: 2, healer: 1 },
        },
        {
          id: 'q9_d',
          text: '새로운 것을 만들고 발전시키는 것',
          emoji: '🛠️',
          scores: { creator: 3, leader: 2, adventurer: 1 },
        },
      ],
    },
    {
      id: 'q10',
      question: '함께 여행을 간다면 어떤 스타일의 여행을 선호하나요?',
      options: [
        {
          id: 'q10_a',
          text: '철저한 계획 아래 효율적으로 둘러보는 여행',
          emoji: '🗺️',
          scores: { leader: 3, scholar: 2, protector: 1 },
        },
        {
          id: 'q10_b',
          text: '발길 닿는 대로 자유롭게 다니는 즉흥 여행',
          emoji: '🧭',
          scores: { free_spirit: 3, adventurer: 2, artist: 1 },
        },
        {
          id: 'q10_c',
          text: '지역 문화와 역사에 깊이 빠져드는 테마 여행',
          emoji: '🏛️',
          scores: { scholar: 3, creator: 2, healer: 1 },
        },
        {
          id: 'q10_d',
          text: '자연 속에서 힐링하며 여유를 즐기는 여행',
          emoji: '🌳',
          scores: { healer: 3, artist: 2, protector: 1 },
        },
      ],
    },
    {
      id: 'q11',
      question: '선호하는 선물은?',
      options: [
        {
          id: 'q11_a',
          text: '정성이 담긴 직접 만든 선물',
          emoji: '🎁',
          scores: { creator: 3, artist: 2, healer: 1 },
        },
        {
          id: 'q11_b',
          text: '오랫동안 탐내던 책이나 지적 호기심을 자극하는 선물',
          emoji: '📖',
          scores: { scholar: 3, leader: 1 },
        },
        {
          id: 'q11_c',
          text: '함께 특별한 경험을 할 수 있는 액티비티 티켓',
          emoji: '🎟️',
          scores: { adventurer: 3, free_spirit: 2, leader: 1 },
        },
        {
          id: 'q11_d',
          text: '실용적이고 오래 쓸 수 있는 견고한 물건',
          emoji: '🛠️',
          scores: { protector: 3, leader: 2 },
        },
      ],
    },
    {
      id: 'q12',
      question: '이상형의 목소리가 어떠면 좋겠나요?',
      options: [
        {
          id: 'q12_a',
          text: '차분하고 이성적인 목소리',
          emoji: '🗣️',
          scores: { scholar: 3, healer: 1, protector: 1 },
        },
        {
          id: 'q12_b',
          text: '유쾌하고 활기찬 목소리',
          emoji: '📣',
          scores: { free_spirit: 3, adventurer: 2, creator: 1 },
        },
        {
          id: 'q12_c',
          text: '따뜻하고 부드러운 목소리',
          emoji: '💬',
          scores: { healer: 3, artist: 2, protector: 1 },
        },
        {
          id: 'q12_d',
          text: '단호하고 카리스마 있는 목소리',
          emoji: '📢',
          scores: { leader: 3, adventurer: 2, protector: 1 },
        },
      ],
    },
    {
      id: 'q13',
      question: '새로운 도전을 할 때 당신의 태도는?',
      options: [
        {
          id: 'q13_a',
          text: '정보를 충분히 수집하고 분석한 뒤 시작한다',
          emoji: '🔎',
          scores: { scholar: 3, leader: 2, creator: 1 },
        },
        {
          id: 'q13_b',
          text: '즉흥적으로 뛰어들어 경험하며 배운다',
          emoji: '🎢',
          scores: { adventurer: 3, free_spirit: 2, artist: 1 },
        },
        {
          id: 'q13_c',
          text: '주변 사람들에게 조언을 구하고 도움을 받는다',
          emoji: '🤝',
          scores: { healer: 2, protector: 2, leader: 1 },
        },
        {
          id: 'q13_d',
          text: '나만의 방식으로 독창적인 길을 개척한다',
          emoji: '🌟',
          scores: { creator: 3, artist: 2, free_spirit: 1 },
        },
      ],
    },
    {
      id: 'q14',
      question: '가장 끌리는 데이트 코스는?',
      options: [
        {
          id: 'q14_a',
          text: '고요한 숲길을 산책하며 깊은 대화 나누기',
          emoji: '🌲',
          scores: { healer: 3, artist: 2, scholar: 1 },
        },
        {
          id: 'q14_b',
          text: '스릴 넘치는 액티비티를 함께 즐기기',
          emoji: '🤸',
          scores: { adventurer: 3, leader: 2, protector: 1 },
        },
        {
          id: 'q14_c',
          text: '새로운 맛집이나 이색적인 공간 탐방하기',
          emoji: '🍽️',
          scores: { free_spirit: 3, creator: 2, adventurer: 1 },
        },
        {
          id: 'q14_d',
          text: '유명한 전시나 공연을 함께 감상하기',
          emoji: '🎭',
          scores: { artist: 3, scholar: 2, creator: 1 },
        },
      ],
    },
    {
      id: 'q15',
      question: '당신에게 있어 이상적인 관계란?',
      options: [
        {
          id: 'q15_a',
          text: '서로의 성장을 돕고 지지해주는 관계',
          emoji: '🌱',
          scores: { healer: 2, leader: 2, protector: 2 },
        },
        {
          id: 'q15_b',
          text: '새로운 것을 끊임없이 함께 시도하는 관계',
          emoji: '🎢',
          scores: { adventurer: 3, free_spirit: 2, creator: 1 },
        },
        {
          id: 'q15_c',
          text: '깊은 이해와 존중을 바탕으로 한 관계',
          emoji: '🤝',
          scores: { scholar: 3, artist: 2, healer: 1 },
        },
        {
          id: 'q15_d',
          text: '서로에게 의지하며 든든한 버팀목이 되어주는 관계',
          emoji: '💪',
          scores: { protector: 3, leader: 2, healer: 1 },
        },
      ],
    },
    {
      id: 'q16',
      question: '가장 좋아하는 휴식 방법은?',
      options: [
        {
          id: 'q16_a',
          text: '혼자만의 시간에 몰입하며 영감을 얻기',
          emoji: '💡',
          scores: { artist: 3, scholar: 2, creator: 1 },
        },
        {
          id: 'q16_b',
          text: '새로운 것을 배우거나 연구하며 지식 쌓기',
          emoji: '🎓',
          scores: { scholar: 3, creator: 2, leader: 1 },
        },
        {
          id: 'q16_c',
          text: '사랑하는 사람들과 함께 시간을 보내며 충전하기',
          emoji: '💖',
          scores: { healer: 3, protector: 2, leader: 1 },
        },
        {
          id: 'q16_d',
          text: '정해진 것 없이 자유롭게 하고 싶은 대로 하기',
          emoji: '🎈',
          scores: { free_spirit: 3, adventurer: 2, artist: 1 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'artist',
      title: '예술가형 이상형',
      description: '감성적이고 창의적인 영혼을 가진 사람에게 끌려요!',
      detailedDescription:
        '아름다움에 대한 감각이 뛰어나고, 자신만의 세계관을 가진 사람을 선호합니다. 깊이 있는 대화와 감성적 교감을 중요하게 생각해요. 때로는 섬세하고 예민할 수 있지만, 그만큼 풍부한 내면을 가졌답니다.',
      emoji: '🎨',
      color: '#FF6B9D',
      traits: ['감성적', '창의적', '독창적', '섬세함', '미적 감각'],
      compatibility: {
        best: ['학자형', '힐러형'],
        good: ['크리에이터형', '자유영혼형'],
        avoid: ['리더형'],
      },
      recommendations: {
        activities: [
          '전시회 관람',
          '창작 활동 (그림, 글쓰기 등)',
          '감성 카페 탐방',
          '클래식/인디 콘서트',
        ],
        tips: [
          '감정 표현을 아끼지 마세요',
          '상대방의 창작물에 진심으로 관심을 보여주세요',
          '때로는 조용한 공간에서 함께 시간을 보내세요',
        ],
        celebrities: ['박서준', '수지', '정해인', '아이유', 'RM (방탄소년단)'],
      },
    },
    {
      id: 'adventurer',
      title: '모험가형 이상형',
      description: '새로운 도전을 즐기고 활동적인 에너지를 가진 사람!',
      detailedDescription:
        '일상에서 벗어나 새로운 경험을 추구하며, 긍정적이고 도전적인 마인드를 가진 사람에게 매력을 느껴요. 활기차고 역동적인 데이트를 선호하며, 예측 불가능한 상황에서도 유연하게 대처하는 능력을 높이 평가합니다.',
      emoji: '🗺️',
      color: '#4ECDC4',
      traits: ['활동적', '도전적', '긍정적', '호기심', '리더십'],
      compatibility: {
        best: ['자유영혼형', '프로텍터형'],
        good: ['리더형', '크리에이터형'],
        avoid: ['학자형'],
      },
      recommendations: {
        activities: [
          '등산, 트레킹, 캠핑',
          '즉흥 여행',
          '익스트림 스포츠 (서핑, 스카이다이빙)',
          '페스티벌 참가',
        ],
        tips: [
          '새로운 활동을 함께 계획해보세요',
          '상대방의 도전을 진심으로 응원해주세요',
          '가끔은 즉흥적인 데이트를 즐겨보세요',
        ],
        celebrities: ['강하늘', '박민영', '이민호', '박신혜', '류준열'],
      },
    },
    {
      id: 'scholar',
      title: '학자형 이상형',
      description: '지적인 매력이 넘치고, 사려 깊은 대화를 나눌 수 있는 사람!',
      detailedDescription:
        '배움을 즐기고 깊이 있는 지식을 가진 사람에게 강하게 끌립니다. 논리적이고 합리적인 사고를 중요하게 생각하며, 함께 지적인 성장을 할 수 있는 관계를 추구해요. 차분하고 신중한 성향을 가지고 있습니다.',
      emoji: '📚',
      color: '#607D8B',
      traits: ['지적', '논리적', '사색적', '신중함', '탐구적'],
      compatibility: {
        best: ['아티스트형', '크리에이터형'],
        good: ['힐러형', '프로텍터형'],
        avoid: ['자유영혼형'],
      },
      recommendations: {
        activities: ['서점 데이트', '지식 강연/세미나 참석', '다큐멘터리 시청', '철학적 토론'],
        tips: [
          '상대방의 지적 호기심을 자극하는 대화를 시도해보세요',
          '새로운 배움을 함께 추구해보세요',
          '조용하고 아늑한 공간에서 데이트를 즐기세요',
        ],
        celebrities: ['김태희', '하석진', '차은우', '김지원'],
      },
    },
    {
      id: 'leader',
      title: '리더형 이상형',
      description: '강력한 리더십과 추진력을 겸비한 매력적인 사람!',
      detailedDescription:
        '목표 지향적이고 추진력이 강하며, 주변 사람들을 이끌어주는 리더십 있는 사람에게 매력을 느낍니다. 자신감 있고 당당한 모습을 선호하며, 함께 미래를 개척해나갈 수 있는 든든한 파트너를 원해요.',
      emoji: '👑',
      color: '#FFC107',
      traits: ['리더십', '추진력', '자신감', '결단력', '책임감'],
      compatibility: {
        best: ['프로텍터형', '모험가형'],
        good: ['크리에이터형', '학자형'],
        avoid: ['아티스트형'],
      },
      recommendations: {
        activities: [
          '스포츠 경기 관람/함께하기',
          '새로운 프로젝트 함께 시작하기',
          '리더십 강연 참석',
          '미래 계획 함께 세우기',
        ],
        tips: [
          '상대방의 리더십을 존중하고 지지해주세요',
          '함께 목표를 설정하고 달성하는 즐거움을 느껴보세요',
          '때로는 상대방에게 의지하는 모습을 보여주세요',
        ],
        celebrities: ['이병헌', '김혜수', '장동건', '전지현'],
      },
    },
    {
      id: 'healer',
      title: '힐러형 이상형',
      description: '따뜻한 마음으로 타인을 보듬어주는 다정한 사람!',
      detailedDescription:
        '공감 능력이 뛰어나고, 타인의 아픔을 이해하며 위로해주는 따뜻한 마음을 가진 사람에게 끌립니다. 편안하고 안정적인 관계를 추구하며, 서로에게 힘이 되어주는 관계를 중요하게 생각해요. 배려심이 깊고 다정합니다.',
      emoji: '💖',
      color: '#8BC34A',
      traits: ['공감능력', '배려심', '다정함', '안정적', '포용력'],
      compatibility: {
        best: ['아티스트형', '프로텍터형'],
        good: ['학자형', '자유영혼형'],
        avoid: ['모험가형'],
      },
      recommendations: {
        activities: [
          '봉사 활동',
          '자연 속 힐링 데이트',
          '감성 영화 함께 보기',
          '따뜻한 대화 나누기',
        ],
        tips: [
          '상대방에게 진심으로 감사함을 표현하세요',
          '서로의 감정을 솔직하게 나누세요',
          '일상 속 소소한 행복을 함께 찾아보세요',
        ],
        celebrities: ['김선호', '박보영', '이종석', '한지민'],
      },
    },
    {
      id: 'creator',
      title: '크리에이터형 이상형',
      description: '새로운 아이디어로 세상을 만들어가는 재능 있는 사람!',
      detailedDescription:
        '번뜩이는 아이디어와 뛰어난 창의력을 가진 사람에게 매력을 느낍니다. 호기심이 많고, 끊임없이 새로운 것을 시도하며 자신만의 결과물을 만들어내는 것에 즐거움을 느낍니다. 함께 아이디어를 공유하고 발전시키는 관계를 선호해요.',
      emoji: '💡',
      color: '#FF9800',
      traits: ['창의적', '아이디어', '실행력', '혁신적', '호기심'],
      compatibility: {
        best: ['학자형', '자유영혼형'],
        good: ['아티스트형', '모험가형'],
        avoid: ['프로텍터형'],
      },
      recommendations: {
        activities: [
          '공방 체험',
          '아이디어 회의 데이트',
          '새로운 기술/트렌드 탐구',
          '스타트업 행사 참여',
        ],
        tips: [
          '상대방의 아이디어를 적극적으로 지지하고 격려해주세요',
          '함께 새로운 것을 만들어보는 경험을 해보세요',
          '틀에 얽매이지 않는 데이트를 즐기세요',
        ],
        celebrities: ['지드래곤', '정은채', '봉준호 (감독)', '윤하'],
      },
    },
    {
      id: 'protector',
      title: '프로텍터형 이상형',
      description: '든든하고 책임감 있게 나를 지켜줄 수 있는 사람!',
      detailedDescription:
        '안정감을 주고, 책임감이 강하며, 주변 사람들을 잘 챙기는 사람에게 끌립니다. 묵묵히 자신의 역할을 다하며, 힘들 때 기댈 수 있는 든든한 버팀목이 되어주는 존재를 이상형으로 생각해요. 신뢰와 안정적인 관계를 중요시합니다.',
      emoji: '🛡️',
      color: '#42A5F5',
      traits: ['책임감', '든든함', '성실함', '헌신적', '신뢰'],
      compatibility: {
        best: ['힐러형', '리더형'],
        good: ['모험가형', '학자형'],
        avoid: ['자유영혼형'],
      },
      recommendations: {
        activities: [
          '집에서 편안하게 함께 시간 보내기',
          '일상적인 데이트 (산책, 영화)',
          '상대방의 취미 활동 응원하기',
          '함께 미래 계획 세우기',
        ],
        tips: [
          '상대방에게 신뢰를 보여주고 감사함을 표현하세요',
          '솔직하고 진솔한 대화를 나누세요',
          '때로는 상대방에게 먼저 다가가 따뜻함을 표현해주세요',
        ],
        celebrities: ['마동석', '이성경', '공유', '김고은'],
      },
    },
    {
      id: 'free_spirit',
      title: '자유영혼형 이상형',
      description: '틀에 얽매이지 않고 자유로운 삶을 추구하는 사람!',
      detailedDescription:
        '구속받는 것을 싫어하고, 자신만의 방식으로 삶을 즐기는 자유로운 영혼에게 매력을 느낍니다. 새로운 경험과 변화를 두려워하지 않으며, 틀에 박힌 일상보다는 예측 불가능한 재미를 추구해요. 긍정적이고 개방적인 성향을 가지고 있습니다.',
      emoji: '🕊️',
      color: '#9C27B0',
      traits: ['자유로움', '개방적', '독립적', '긍정적', '즉흥적'],
      compatibility: {
        best: ['모험가형', '크리에이터형'],
        good: ['아티스트형', '힐러형'],
        avoid: ['프로텍터형'],
      },
      recommendations: {
        activities: ['즉흥 여행', '버스킹 공연 관람', '이색적인 체험 활동', '새로운 취미 만들기'],
        tips: [
          '상대방의 자유로운 생각을 존중하고 지지해주세요',
          '함께 새로운 도전을 해보세요',
          '예측 불가능한 데이트를 즐겨보세요',
        ],
        celebrities: ['이효리', '쌈디', '나나', '딘'],
      },
    },
  ],
};
