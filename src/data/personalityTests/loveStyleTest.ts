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
    {
      id: 'q3',
      question: '연인과의 소셜미디어 공유 스타일은?',
      options: [
        {
          id: 'q3_a',
          text: '모든 순간을 자랑스럽게 업로드',
          emoji: '💖',
          scores: { puppy: 3, fox: 2, bird: 1 },
        },
        {
          id: 'q3_b',
          text: '개인적인 공간은 따로 유지',
          emoji: '🤫',
          scores: { cat: 3, wolf: 2, bear: 1 },
        },
        {
          id: 'q3_c',
          text: '가끔 특별한 날에만 조심스럽게',
          emoji: '🔒',
          scores: { deer: 3, rabbit: 2 },
        },
        {
          id: 'q3_d',
          text: '같이 찍은 재밌는 릴스나 숏폼만 업로드',
          emoji: '🎬',
          scores: { bird: 3, fox: 2, puppy: 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: '연인과 갈등이 생겼을 때 나의 반응은?',
      options: [
        {
          id: 'q4_a',
          text: '바로 대화로 풀고 싶다',
          emoji: '🗣️',
          scores: { puppy: 3, rabbit: 2, bear: 1 },
        },
        {
          id: 'q4_b',
          text: '혼자 생각할 시간이 필요하다',
          emoji: '💭',
          scores: { cat: 3, deer: 2, wolf: 1 },
        },
        {
          id: 'q4_c',
          text: '상대방의 반응을 살피며 눈치껏 행동한다',
          emoji: '👀',
          scores: { fox: 3, bird: 2 },
        },
        {
          id: 'q4_d',
          text: '명확한 해결책을 제시하려 한다',
          emoji: '💡',
          scores: { wolf: 3, bear: 2 },
        },
      ],
    },
    {
      id: 'q5',
      question: '기념일을 준비하는 나의 자세는?',
      options: [
        {
          id: 'q5_a',
          text: '몇 주 전부터 서프라이즈 계획',
          emoji: '🎉',
          scores: { puppy: 3, fox: 2, rabbit: 1 },
        },
        {
          id: 'q5_b',
          text: '간단한 식사나 편지 정도',
          emoji: '💌',
          scores: { cat: 2, deer: 3, bear: 2 },
        },
        {
          id: 'q5_c',
          text: '상대방의 취향을 분석하여 맞춤 선물',
          emoji: '🎁',
          scores: { fox: 3, wolf: 2, bird: 1 },
        },
        {
          id: 'q5_d',
          text: '소중한 마음이면 충분하다고 생각',
          emoji: '💖',
          scores: { rabbit: 3, deer: 2 },
        },
      ],
    },
    {
      id: 'q6',
      question: '연인의 친구들과의 모임에 초대받았다면?',
      options: [
        {
          id: 'q6_a',
          text: '적극적으로 참여하며 분위기 주도',
          emoji: '🥳',
          scores: { puppy: 3, fox: 2, bird: 1 },
        },
        {
          id: 'q6_b',
          text: '조용히 듣고 관찰하며 상황 파악',
          emoji: '👂',
          scores: { cat: 3, deer: 2, bear: 1 },
        },
        {
          id: 'q6_c',
          text: '어색하면 어쩌지? 걱정부터 앞선다',
          emoji: '😥',
          scores: { rabbit: 3, deer: 2 },
        },
        {
          id: 'q6_d',
          text: '솔직하고 담백하게 나 자신을 보여준다',
          emoji: '🤝',
          scores: { wolf: 3, bear: 2 },
        },
      ],
    },
    {
      id: 'q7',
      question: '가장 좋아하는 데이트 유형은?',
      options: [
        {
          id: 'q7_a',
          text: '맛집 탐방, 전시회 등 트렌디한 데이트',
          emoji: '📸',
          scores: { fox: 3, bird: 2, puppy: 1 },
        },
        {
          id: 'q7_b',
          text: '집에서 편안하게 영화 보기',
          emoji: '🏠',
          scores: { rabbit: 3, cat: 2, deer: 1 },
        },
        {
          id: 'q7_c',
          text: '둘만의 시간을 가지는 여행',
          emoji: '✈️',
          scores: { wolf: 3, bear: 2 },
        },
        {
          id: 'q7_d',
          text: '새로운 것을 배우거나 활동적인 체험',
          emoji: '🎢',
          scores: { puppy: 2, fox: 2, bird: 2 },
        },
      ],
    },
    {
      id: 'q8',
      question: '연인에게 서운한 점이 생겼을 때, 어떻게 표현하나요?',
      options: [
        {
          id: 'q8_a',
          text: '바로 이야기하고 풀려고 노력한다',
          emoji: '🗣️',
          scores: { puppy: 3, bear: 2, wolf: 1 },
        },
        {
          id: 'q8_b',
          text: '혼자 삭히거나 티 내지 않으려 한다',
          emoji: '🤐',
          scores: { cat: 3, deer: 2, rabbit: 1 },
        },
        {
          id: 'q8_c',
          text: '농담처럼 슬쩍 흘려본다',
          emoji: '😏',
          scores: { fox: 3, bird: 2 },
        },
        {
          id: 'q8_d',
          text: '나중에 차분하게 논리적으로 설명한다',
          emoji: '📝',
          scores: { wolf: 2, bear: 3, deer: 1 },
        },
      ],
    },
    {
      id: 'q9',
      question: '연인의 갑작스러운 스킨십에 대한 반응은?',
      options: [
        {
          id: 'q9_a',
          text: '나도 좋아서 적극적으로 반응',
          emoji: '🥰',
          scores: { puppy: 3, fox: 2, bird: 1 },
        },
        {
          id: 'q9_b',
          text: '살짝 당황하지만 내색하지 않는다',
          emoji: '😳',
          scores: { cat: 3, deer: 2 },
        },
        {
          id: 'q9_c',
          text: '어색해서 얼른 다른 화제로 돌린다',
          emoji: '😅',
          scores: { rabbit: 3, bird: 1 },
        },
        {
          id: 'q9_d',
          text: '자연스럽게 받아들이고 즐긴다',
          emoji: '😌',
          scores: { wolf: 3, bear: 2 },
        },
      ],
    },
    {
      id: 'q10',
      question: '연애에서 가장 중요하다고 생각하는 것은?',
      options: [
        {
          id: 'q10_a',
          text: '서로에 대한 끊임없는 사랑과 표현',
          emoji: '💕',
          scores: { puppy: 3, rabbit: 2 },
        },
        {
          id: 'q10_b',
          text: '개인의 영역 존중과 독립성',
          emoji: '👤',
          scores: { cat: 3, wolf: 2, bird: 1 },
        },
        {
          id: 'q10_c',
          text: '신뢰와 안정적인 관계',
          emoji: '🤝',
          scores: { deer: 3, bear: 3 },
        },
        {
          id: 'q10_d',
          text: '함께 성장하고 발전하는 관계',
          emoji: '📈',
          scores: { fox: 3, wolf: 2, bird: 2 },
        },
      ],
    },
    {
      id: 'q11',
      question: '데이트 코스 계획 시 당신의 역할은?',
      options: [
        {
          id: 'q11_a',
          text: '상대방이 좋아하는 것을 적극적으로 반영',
          emoji: '🤩',
          scores: { puppy: 3, rabbit: 2 },
        },
        {
          id: 'q11_b',
          text: '내가 하고 싶은 것을 제안하고 리드',
          emoji: '🗺️',
          scores: { wolf: 3, fox: 2 },
        },
        {
          id: 'q11_c',
          text: '조용히 의견을 듣고 최종 결정에 동의',
          emoji: '👂',
          scores: { cat: 2, deer: 3, bear: 2 },
        },
        {
          id: 'q11_d',
          text: '새롭고 이색적인 곳을 찾아 제안',
          emoji: '✨',
          scores: { bird: 3, fox: 2 },
        },
      ],
    },
    {
      id: 'q12',
      question: '연애 초반, 당신의 모습은?',
      options: [
        {
          id: 'q12_a',
          text: '설렘 가득, 표현도 적극적',
          emoji: '💖',
          scores: { puppy: 3, fox: 2, bird: 1 },
        },
        {
          id: 'q12_b',
          text: '탐색전, 서서히 마음을 연다',
          emoji: '🧐',
          scores: { cat: 3, wolf: 2, deer: 1 },
        },
        {
          id: 'q12_c',
          text: '쑥스러움이 많아 수줍어한다',
          emoji: '😳',
          scores: { rabbit: 3, deer: 2 },
        },
        {
          id: 'q12_d',
          text: '신뢰를 쌓으며 안정감을 추구한다',
          emoji: '🤝',
          scores: { bear: 3, wolf: 2 },
        },
      ],
    },
    {
      id: 'q13',
      question: '연인이 다른 이성 친구와 시간을 보낼 때 당신의 반응은?',
      options: [
        {
          id: 'q13_a',
          text: '쿨하게 인정하고 존중한다',
          emoji: '😎',
          scores: { wolf: 3, bird: 2, fox: 1 },
        },
        {
          id: 'q13_b',
          text: '조금 신경 쓰이지만 내색하지 않는다',
          emoji: '😶',
          scores: { cat: 2, deer: 3, bear: 1 },
        },
        {
          id: 'q13_c',
          text: '솔직히 질투 나고 불안하다',
          emoji: '😟',
          scores: { puppy: 3, rabbit: 2 },
        },
        {
          id: 'q13_d',
          text: '상대방의 행동을 믿고 신뢰한다',
          emoji: '😊',
          scores: { bear: 3, deer: 2, wolf: 1 },
        },
      ],
    },
    {
      id: 'q14',
      question: '사랑에 대한 당신의 가치관은?',
      options: [
        {
          id: 'q14_a',
          text: '사랑은 뜨겁고 열정적인 것',
          emoji: '🔥',
          scores: { puppy: 3, fox: 2, bird: 1 },
        },
        {
          id: 'q14_b',
          text: '사랑은 서로의 삶을 존중하는 것',
          emoji: '🙌',
          scores: { cat: 3, wolf: 2, deer: 1 },
        },
        {
          id: 'q14_c',
          text: '사랑은 함께 성장하는 것',
          emoji: '🌱',
          scores: { bear: 3, wolf: 2, fox: 1 },
        },
        {
          id: 'q14_d',
          text: '사랑은 즐겁고 자유로운 것',
          emoji: '🎈',
          scores: { bird: 3, rabbit: 2 },
        },
      ],
    },
    {
      id: 'q15',
      question: '새로운 사람을 만나는 자리에 대한 당신의 생각은?',
      options: [
        {
          id: 'q15_a',
          text: '새로운 만남은 언제나 환영!',
          emoji: '🌟',
          scores: { puppy: 3, fox: 2, bird: 1 },
        },
        {
          id: 'q15_b',
          text: '굳이 새로운 사람을 만날 필요는 없다',
          emoji: '🏡',
          scores: { cat: 3, rabbit: 2, bear: 1 },
        },
        {
          id: 'q15_c',
          text: '흥미로운 사람이 있다면 만나볼 의향 있음',
          emoji: '🤔',
          scores: { wolf: 3, bird: 2 },
        },
        {
          id: 'q15_d',
          text: '편안한 관계를 더 선호한다',
          emoji: '🛋️',
          scores: { deer: 3, bear: 2 },
        },
      ],
    },
    {
      id: 'q16',
      question: '나만의 연애 필살기는?',
      options: [
        {
          id: 'q16_a',
          text: '솔직하고 꾸밈없는 나의 모습',
          emoji: '💯',
          scores: { puppy: 3, rabbit: 2, deer: 1 },
        },
        {
          id: 'q16_b',
          text: '나만의 기준을 지키는 쿨함',
          emoji: '🧊',
          scores: { cat: 3, wolf: 2 },
        },
        {
          id: 'q16_c',
          text: '상대방을 웃게 만드는 재치와 유머',
          emoji: '😂',
          scores: { fox: 3, bird: 2 },
        },
        {
          id: 'q16_d',
          text: '든든하고 안정감을 주는 신뢰',
          emoji: '💪',
          scores: { bear: 3, wolf: 2, deer: 1 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'puppy',
      title: '강아지상 연인',
      description: '순수하고 애교 많은 당신! 사랑을 온몸으로 표현하는 스타일이에요.',
      detailedDescription:
        '연애할 때 진심을 다하고, 상대방에게 관심과 애정을 아낌없이 표현합니다. 애교가 많고 스킨십을 즐기며, 연인과의 시간을 최우선으로 생각해요. 때로는 과도한 관심이 부담이 될 수 있지만, 그 진실한 마음이 가장 큰 매력입니다.',
      emoji: '🐶',
      color: '#FF9F40', // Orange-ish
      traits: ['순수함', '적극적', '표현력 좋음', '애교쟁이', '충성심', '외향적'],
      compatibility: {
        best: ['고양이상', '사슴상'],
        good: ['토끼상', '새상'],
        avoid: ['늑대상'],
      },
      recommendations: {
        activities: ['커플 요리 클래스', '테마파크 데이트', '반려동물 카페', '산책 데이트'],
        tips: [
          '가끔은 상대방에게 여유를 갖고 기다려주세요',
          '상대방의 개인 시간도 존중해주세요',
          '진심을 담은 표현은 언제나 좋아요',
        ],
        celebrities: ['박보영', '아이유', '정해인', '박형식'],
      },
    },
    {
      id: 'cat',
      title: '고양이상 연인',
      description: '독립적이고 신비로운 매력! 은은한 애정 표현이 더욱 특별해요.',
      detailedDescription:
        '자신만의 시간과 공간을 중요하게 생각하며, 연인에게도 독립성을 존중해줍니다. 쉽게 마음을 열지 않지만, 한번 마음을 열면 깊고 안정적인 관계를 선호해요. 애정 표현이 직설적이지 않고 은은해서 더욱 매력적으로 느껴질 수 있습니다.',
      emoji: '🐱',
      color: '#9F7AEA', // Purple-ish
      traits: ['독립적', '신중함', '신비로움', '깊이 있음', '선택적 애정', '내향적'],
      compatibility: {
        best: ['강아지상', '곰상'],
        good: ['여우상', '사슴상'],
        avoid: ['토끼상'],
      },
      recommendations: {
        activities: ['갤러리 관람', '북카페 데이트', '조용한 산책', '집에서 함께 여유 즐기기'],
        tips: [
          '감정 표현을 조금 더 솔직하게 해보세요',
          '상대방의 작은 노력에도 감사함을 표현하세요',
          '자신의 공간에 상대방을 초대해보세요',
        ],
        celebrities: ['전지현', '수지', '공유', '김재욱'],
      },
    },
    {
      id: 'fox',
      title: '여우상 연인',
      description: '센스 있고 매력적인 당신! 연애도 게임처럼 즐기는 스타일이에요.',
      detailedDescription:
        '센스와 재치가 넘쳐 연애를 즐겁고 흥미롭게 이끌어갑니다. 타고난 매력으로 상대를 유혹하며, 적당한 밀당을 통해 관계의 긴장감을 유지하는 데 능숙해요. 새로운 것을 시도하고 트렌디함을 추구하는 연애를 즐깁니다.',
      emoji: '🦊',
      color: '#FF4D4D', // Red-ish
      traits: ['재치 있음', '매력적', '트렌디함', '밀당', '자유로움', '사교적'],
      compatibility: {
        best: ['새상', '늑대상'],
        good: ['강아지상', '고양이상'],
        avoid: ['곰상'],
      },
      recommendations: {
        activities: [
          '핫플레이스 탐방',
          '파티/모임 함께 가기',
          '이색 체험 데이트',
          '유머 코드 공유하기',
        ],
        tips: [
          '때로는 진지한 모습을 보여주는 것도 좋아요',
          '상대방의 감정을 너무 시험하지 마세요',
          '진심을 담아 다가갈 때 더 깊은 관계가 가능해요',
        ],
        celebrities: ['김혜수', '주지훈', '한예슬', '송강'],
      },
    },
    {
      id: 'rabbit',
      title: '토끼상 연인',
      description: '섬세하고 감성적! 연인의 작은 행동에도 쉽게 설레고 상처받아요.',
      detailedDescription:
        '매우 감성적이고 섬세하여 연인의 작은 변화에도 민감하게 반응합니다. 애정을 갈구하고, 불안감을 쉽게 느껴 자주 확인받고 싶어 합니다. 내향적이지만 친밀한 관계에서는 애교가 많고 순수한 모습을 보여줘요.',
      emoji: '🐰',
      color: '#A0CCFF', // Light blue
      traits: ['감성적', '섬세함', '소심함', '안정 추구', '의존적', '내향적'],
      compatibility: {
        best: ['곰상', '사슴상'],
        good: ['강아지상', '새상'],
        avoid: ['늑대상'],
      },
      recommendations: {
        activities: [
          '집에서 아늑한 데이트',
          '영화 보기 (감성 영화)',
          '서로에게 편지 쓰기',
          '조용한 카페에서 대화',
        ],
        tips: [
          '불안감을 솔직하게 이야기하되 너무 의존하지 마세요',
          '혼자만의 시간을 가지며 감정을 다스리는 연습을 해보세요',
          '상대방의 믿음을 인정해주세요',
        ],
        celebrities: ['임윤아', '박보검', '김유정', '강동원'],
      },
    },
    {
      id: 'wolf',
      title: '늑대상 연인',
      description: '강렬하고 카리스마 넘치는 당신! 연인을 이끌어주는 리더 타입이에요.',
      detailedDescription:
        '연애에서 리드하는 것을 선호하며, 솔직하고 직설적인 표현을 즐깁니다. 자신감이 넘치고 카리스마 있지만, 한 번 사랑하는 사람에게는 매우 헌신적이고 책임감이 강해요. 때로는 차갑게 보일 수 있지만 내면은 따뜻합니다.',
      emoji: '🐺',
      color: '#4A4A4A', // Dark Gray
      traits: ['카리스마', '리더십', '솔직함', '헌신적', '책임감', '자신감'],
      compatibility: {
        best: ['여우상', '새상'],
        good: ['곰상', '사슴상'],
        avoid: ['강아지상', '토끼상'],
      },
      recommendations: {
        activities: [
          '액티비티 데이트',
          '스포츠 경기 관람',
          '함께 목표를 세우고 달성하기',
          '여행 계획',
        ],
        tips: [
          '가끔은 연인에게 기댈 줄도 아세요',
          '상대방의 감정을 조금 더 헤아려주세요',
          '말보다 행동으로 보여주는 사랑도 중요해요',
        ],
        celebrities: ['류준열', '김우빈', '손예진', '김서형'],
      },
    },
    {
      id: 'deer',
      title: '사슴상 연인',
      description: '차분하고 신중한 당신! 서두르지 않는 우아한 연애를 즐겨요.',
      detailedDescription:
        '온순하고 차분한 성격으로, 연애에 있어서도 신중하고 조심스러운 태도를 보입니다. 겉으로는 조용해 보이지만 내면은 깊고 따뜻해요. 감정 표현이 서툴 수 있지만, 한번 믿음을 주면 변치 않는 깊은 사랑을 보여줍니다.',
      emoji: '🦌',
      color: '#8B4513', // SaddleBrown
      traits: ['차분함', '신중함', '배려심', '진지함', '우아함', '인내심'],
      compatibility: {
        best: ['강아지상', '토끼상'],
        good: ['고양이상', '곰상'],
        avoid: ['새상'],
      },
      recommendations: {
        activities: ['조용한 카페 데이트', '숲길 산책', '클래식 공연 관람', '함께 독서하기'],
        tips: [
          '솔직한 감정을 표현하는 연습을 해보세요',
          '가끔은 먼저 다가가 애정을 표현하는 것도 좋아요',
          '상대방의 기다림을 이해해주세요',
        ],
        celebrities: ['이영애', '박해일', '김희애', '이상윤'],
      },
    },
    {
      id: 'bear',
      title: '곰상 연인',
      description: '듬직하고 편안한 매력! 늘 한결같이 연인을 지켜주는 스타일이에요.',
      detailedDescription:
        '겉으로는 무뚝뚝해 보여도 속으로는 연인을 깊이 생각하고 아낍니다. 말보다는 행동으로 사랑을 표현하며, 든든하고 안정적인 관계를 추구해요. 묵묵히 옆을 지켜주며 연인에게 편안함을 주는 것에 만족합니다.',
      emoji: '🐻',
      color: '#6F4F28', // Dark Brown
      traits: ['듬직함', '성실함', '안정적', '묵묵함', '편안함', '배려심'],
      compatibility: {
        best: ['고양이상', '사슴상'],
        good: ['늑대상', '토끼상'],
        avoid: ['여우상'],
      },
      recommendations: {
        activities: [
          '집에서 함께 요리하기',
          '캠핑/낚시 등 여유로운 아웃도어',
          '소박한 일상 데이트',
          '오래된 맛집 탐방',
        ],
        tips: [
          '가끔은 자신의 감정을 말로 표현해보세요',
          '상대방에게 먼저 다가가 따뜻함을 표현하는 것도 좋아요',
          '일상 속 작은 변화에도 관심을 보여주세요',
        ],
        celebrities: ['마동석', '조진웅', '박나래', '이선균'],
      },
    },
    {
      id: 'bird',
      title: '새상 연인',
      description: '자유롭고 호기심 넘치는 당신! 연애도 새로운 경험으로 가득 채워요.',
      detailedDescription:
        '틀에 박힌 연애보다는 자유롭고 새로운 경험을 즐겨요. 호기심이 많고 즉흥적인 성향으로, 연인과 함께 다양한 활동을 하며 즐거움을 추구합니다. 가볍고 유쾌한 분위기를 선호하며, 구속받는 것을 싫어합니다.',
      emoji: '🐦',
      color: '#00BFFF', // Deep Sky Blue
      traits: ['자유로움', '호기심', '즉흥적', '유쾌함', '새로운 경험', '개방적'],
      compatibility: {
        best: ['여우상', '늑대상'],
        good: ['강아지상', '토끼상'],
        avoid: ['사슴상'],
      },
      recommendations: {
        activities: ['익스트림 스포츠', '페스티벌 참여', '새로운 취미 만들기', '즉흥 여행'],
        tips: [
          '때로는 연인의 안정감을 위한 노력이 필요해요',
          '진지한 대화도 관계에 도움이 될 수 있어요',
          '상대방의 루틴을 존중해주세요',
        ],
        celebrities: ['이효리', '딘딘', '쌈디', '최예나'],
      },
    },
  ],
};
