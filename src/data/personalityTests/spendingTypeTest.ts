import type { PersonalityTestData } from '@/types/personalityTest';

export const spendingTypeTestData: PersonalityTestData = {
  id: 'spending-type-test',
  title: '💸 나의 소비 유형 테스트',
  description:
    '텅장과 텅장의 경계, 당신은 어떤 소비 습관을 가지고 있나요? 당신의 소비 유형을 알아보고, 현명한 지름길을 찾아보세요!',
  category: 'mz-lifestyle',
  resultTypes: [
    'flex-pleaser', // 플렉스 만족형
    'minimal-saver', // 극단적 절약형
    'value-seeker', // 가성비/가심비 추구형
    'impulse-buyer', // 즉흥적 충동구매형
    'experience-collector', // 경험 우선 투자형
    'planner-budgeter', // 계획적 예산형
    'meaning-out-consumer', // 가치소비 미닝아웃형
    'late-night-shopper', // 밤샘 쇼핑형
  ],
  questions: [
    {
      id: 'q1',
      question: '월급/용돈이 들어오면 가장 먼저 하는 일은?',
      options: [
        {
          id: 'q1_a',
          text: '바로 사고 싶었던 물건을 결제한다.',
          emoji: '💳',
          scores: { 'flex-pleaser': 3, 'impulse-buyer': 2 },
        },
        {
          id: 'q1_b',
          text: '고정 지출을 확인하고, 남은 돈으로 뭘 아낄지 고민한다.',
          emoji: '💰',
          scores: { 'minimal-saver': 3, 'planner-budgeter': 2 },
        },
        {
          id: 'q1_c',
          text: '이번 달 예산을 짜고, 카테고리별로 지출 계획을 세운다.',
          emoji: '📝',
          scores: { 'planner-budgeter': 3, 'value-seeker': 1 },
        },
        {
          id: 'q1_d',
          text: '다음 여행이나 문화생활 계획을 세우며 기분 전환!',
          emoji: '✈️',
          scores: { 'experience-collector': 3, 'meaning-out-consumer': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '마음에 드는 물건을 발견했을 때 당신의 행동은?',
      options: [
        {
          id: 'q2_a',
          text: '고민은 배송만 늦출 뿐! 일단 지르고 본다.',
          emoji: '🚀',
          scores: { 'impulse-buyer': 3, 'flex-pleaser': 2 },
        },
        {
          id: 'q2_b',
          text: '최저가를 찾기 위해 모든 쇼핑몰과 커뮤니티를 뒤진다.',
          emoji: '🔍',
          scores: { 'value-seeker': 3, 'minimal-saver': 1 },
        },
        {
          id: 'q2_c',
          text: '이 물건이 나에게 꼭 필요한지, 얼마나 자주 쓸지 신중하게 생각한다.',
          emoji: '🤔',
          scores: { 'planner-budgeter': 2, 'minimal-saver': 2 },
        },
        {
          id: 'q2_d',
          text: '이 브랜드가 어떤 가치를 추구하는지, 환경에는 어떤 영향을 주는지 확인한다.',
          emoji: '🌿',
          scores: { 'meaning-out-consumer': 3, 'experience-collector': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '갑자기 돈 쓸 일이 생겼을 때 당신의 반응은?',
      options: [
        {
          id: 'q3_a',
          text: '괜찮아! 어차피 인생은 한 번인데 뭐~',
          emoji: '💸',
          scores: { 'flex-pleaser': 3, 'impulse-buyer': 1 },
        },
        {
          id: 'q3_b',
          text: '통장 잔고를 보며 한숨... 당장 아낄 곳을 찾는다.',
          emoji: '😩',
          scores: { 'minimal-saver': 3, 'planner-budgeter': 2 },
        },
        {
          id: 'q3_c',
          text: '나의 예산 계획에 없던 지출이라... 잠시 멘붕에 빠진다.',
          emoji: '🤯',
          scores: { 'planner-budgeter': 3, 'value-seeker': 1 },
        },
        {
          id: 'q3_d',
          text: '이런! 계획했던 다른 소비를 취소하거나 미룬다.',
          emoji: '❌',
          scores: { 'experience-collector': 1, 'meaning-out-consumer': 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: '배달 음식을 시킬 때 당신의 선택은?',
      options: [
        {
          id: 'q4_a',
          text: '할인 쿠폰, 배달팁 무료 등 혜택이 가장 많은 곳.',
          emoji: '💰',
          scores: { 'value-seeker': 3, 'minimal-saver': 1 },
        },
        {
          id: 'q4_b',
          text: '먹고 싶은 거 딱 하나 정해서 고민 없이 주문.',
          emoji: '😋',
          scores: { 'impulse-buyer': 2, 'flex-pleaser': 1 },
        },
        {
          id: 'q4_c',
          text: '친구가 맛있다고 추천한 곳, 인스타에서 핫한 곳.',
          emoji: '🔥',
          scores: { 'experience-collector': 2, 'meaning-out-consumer': 1 },
        },
        {
          id: 'q4_d',
          text: '오늘은 배달시키면 안 되는데... 고민하다 결국 시킨다.',
          emoji: '😥',
          scores: { 'late-night-shopper': 2, 'planner-budgeter': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '세일 기간, 당신의 쇼핑 전략은?',
      options: [
        {
          id: 'q5_a',
          text: '이때 아니면 언제 사! 평소 눈여겨본 것들을 쓸어 담는다.',
          emoji: '🛒',
          scores: { 'flex-pleaser': 3, 'impulse-buyer': 2 },
        },
        {
          id: 'q5_b',
          text: '세일이어도 필요 없으면 안 산다. 득템 기회는 다음에.',
          emoji: '🙅‍♀️',
          scores: { 'minimal-saver': 3, 'planner-budgeter': 2 },
        },
        {
          id: 'q5_c',
          text: '미리 구매 목록을 작성하고, 세일 폭이 큰 것 위주로 구매한다.',
          emoji: '📊',
          scores: { 'planner-budgeter': 3, 'value-seeker': 2 },
        },
        {
          id: 'q5_d',
          text: '세일보다는 가치 있는 브랜드나 친환경 제품을 우선 고려한다.',
          emoji: '💚',
          scores: { 'meaning-out-consumer': 3 },
        },
      ],
    },
    {
      id: 'q6',
      question: '친구와 카페에 갔을 때, 음료를 주문하는 당신의 모습은?',
      options: [
        {
          id: 'q6_a',
          text: '가장 비싸고 예쁜 시그니처 메뉴를 시킨다.',
          emoji: '✨',
          scores: { 'flex-pleaser': 2, 'experience-collector': 1 },
        },
        {
          id: 'q6_b',
          text: '가장 저렴하고 양 많은 아메리카노!',
          emoji: '☕',
          scores: { 'minimal-saver': 3, 'value-seeker': 2 },
        },
        {
          id: 'q6_c',
          text: '새로운 시즌 메뉴나 특별한 곳에서만 맛볼 수 있는 메뉴를 시도한다.',
          emoji: '🆕',
          scores: { 'experience-collector': 3 },
        },
        {
          id: 'q6_d',
          text: '환경을 생각해 텀블러를 사용하거나, 리유저블 컵을 선택한다.',
          emoji: '🌎',
          scores: { 'meaning-out-consumer': 3 },
        },
      ],
    },
    {
      id: 'q7',
      question: '주말 저녁, 갑자기 잠이 안 올 때 당신의 행동은?',
      options: [
        {
          id: 'q7_a',
          text: '새벽 감성으로 온라인 쇼핑몰을 방황한다. (결제는 다음 날 후회...)',
          emoji: '🛍️',
          scores: { 'late-night-shopper': 3, 'impulse-buyer': 2 },
        },
        {
          id: 'q7_b',
          text: '내일 할 일을 미리 계획하거나, 가계부를 정리한다.',
          emoji: '📚',
          scores: { 'planner-budgeter': 3, 'minimal-saver': 1 },
        },
        {
          id: 'q7_c',
          text: '보고 싶었던 영화나 유튜브 콘텐츠를 찾아본다.',
          emoji: '📺',
          scores: { 'experience-collector': 1, 'value-seeker': 1 },
        },
        {
          id: 'q7_d',
          text: 'SNS를 보며 핫한 아이템이나 트렌드를 탐색한다.',
          emoji: '📱',
          scores: { 'flex-pleaser': 1, 'impulse-buyer': 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '이 달의 지출 내역을 확인했을 때 당신의 감정은?',
      options: [
        {
          id: 'q8_a',
          text: '괜찮아! 다 나를 위한 투자였으니까! (자기합리화)',
          emoji: '😌',
          scores: { 'flex-pleaser': 3, 'impulse-buyer': 2 },
        },
        {
          id: 'q8_b',
          text: '아껴 쓴 것 같은데 왜 이렇게 많이 썼지? 자책한다.',
          emoji: '😭',
          scores: { 'minimal-saver': 3, 'planner-budgeter': 2 },
        },
        {
          id: 'q8_c',
          text: '계획대로 잘 지켜졌군! 뿌듯해한다.',
          emoji: '👍',
          scores: { 'planner-budgeter': 3, 'value-seeker': 1 },
        },
        {
          id: 'q8_d',
          text: '이번 달은 어떤 경험을 했고, 어떤 가치를 소비했는지 돌아본다.',
          emoji: '🤔',
          scores: { 'experience-collector': 2, 'meaning-out-consumer': 3 },
        },
      ],
    },
    {
      id: 'q9',
      question: '친구가 비싸고 예쁜 명품 가방을 샀다면?',
      options: [
        {
          id: 'q9_a',
          text: '와~ 진짜 예쁘다! 역시 플렉스는 멋있어!',
          emoji: '🤩',
          scores: { 'flex-pleaser': 3, 'impulse-buyer': 1 },
        },
        {
          id: 'q9_b',
          text: '그 돈이면 뭘 할 수 있을까? 아깝다는 생각이 먼저 든다.',
          emoji: '💰',
          scores: { 'minimal-saver': 3, 'value-seeker': 2 },
        },
        {
          id: 'q9_c',
          text: '어떤 브랜드인지, 가치가 있는 소비인지 검색해 본다.',
          emoji: '🔍',
          scores: { 'meaning-out-consumer': 2, 'planner-budgeter': 1 },
        },
        {
          id: 'q9_d',
          text: '나도 저런 거 하나 사고 싶은데... (지름신 영접)',
          emoji: '😈',
          scores: { 'impulse-buyer': 2, 'late-night-shopper': 1 },
        },
      ],
    },
    {
      id: 'q10',
      question: '당신에게 소비란?',
      options: [
        {
          id: 'q10_a',
          text: '나의 만족과 행복을 위한 투자. 삶의 활력소!',
          emoji: '💖',
          scores: { 'flex-pleaser': 3, 'experience-collector': 2 },
        },
        {
          id: 'q10_b',
          text: '최소한으로 줄여야 할 것. 미래를 위한 저축이 우선!',
          emoji: '🔒',
          scores: { 'minimal-saver': 3, 'planner-budgeter': 2 },
        },
        {
          id: 'q10_c',
          text: '효율과 가치를 따져야 할 중요한 선택!',
          emoji: '⚖️',
          scores: { 'value-seeker': 3, 'meaning-out-consumer': 2 },
        },
        {
          id: 'q10_d',
          text: '계획은 하지만, 가끔은 나도 모르게 이끌리는 마법 같은 일...',
          emoji: '🪄',
          scores: { 'impulse-buyer': 3, 'late-night-shopper': 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'flex-pleaser',
      title: '✨ 플렉스 만족형',
      description:
        "당신은 '나를 위한 소비'에 거리낌이 없는 진정한 플렉스 만족형입니다. 순간의 만족과 행복이 가장 중요해요!",
      detailedDescription:
        "자신의 행복과 만족을 위해서라면 아낌없이 지갑을 여는 유형입니다. 좋은 경험, 예쁜 물건, 맛있는 음식 등 나를 기분 좋게 하는 데 소비하는 것을 즐깁니다. 'YOLO'를 외치며, 후회 없는 소비를 추구하지만 가끔은 텅장이 될 수도 있습니다.",
      emoji: '✨',
      color: '#FFD700', // Gold
      traits: ['자기 만족', '쾌락 추구', '과감함', '현재 지향', '긍정적', '자신감'],
      compatibility: {
        best: ['experience-collector', 'impulse-buyer'],
        good: [],
        avoid: ['minimal-saver', 'planner-budgeter'],
      },
      recommendations: {
        tips: [
          "충동구매를 줄이기 위해 '24시간 생각' 시간을 가져보는 것은 어떨까요?",
          '자신을 위한 소비도 좋지만, 미래를 위한 작은 저축 습관을 길러보세요.',
          '때로는 큰 지출 없이도 소소한 행복을 찾을 수 있다는 것을 경험해 보세요.',
        ],
        hashtags: ['#플렉스', '#욜로비용', '#나를위한선물', '#텅장요정'],
      },
    },
    {
      id: 'minimal-saver',
      title: '🔒 극단적 절약형',
      description:
        '당신은 한 푼이라도 아끼는 것에 희열을 느끼는 진정한 절약가입니다. 미래를 위한 준비가 가장 중요해요!',
      detailedDescription:
        "불필요한 지출을 극도로 줄이고, 모든 소비에 신중을 기합니다. 가성비를 넘어선 '갓성비'를 추구하며, 아끼는 것에 큰 만족감을 느낍니다. 미래를 위한 저축, 투자에 관심이 많고, 절약 노하우를 공유하는 데 능숙합니다.",
      emoji: '🔒',
      color: '#008000', // Green
      traits: ['절약', '계획적', '미래 지향', '끈기', '합리적', '궁상맞음 (장점)'],
      compatibility: {
        best: ['planner-budgeter', 'value-seeker'],
        good: [],
        avoid: ['flex-pleaser', 'impulse-buyer'],
      },
      recommendations: {
        tips: [
          '때로는 자신을 위한 작은 선물이나 경험에 투자하는 것도 필요해요.',
          '너무 억지로 참기보다, 적절한 소비를 통해 삶의 활력을 찾아보세요.',
          '당신의 절약 정신은 훌륭하지만, 가끔은 삶의 여유를 즐기는 것도 중요해요.',
        ],
        hashtags: ['#짠테크', '#절약왕', '#거지방', '#미래를위해'],
      },
    },
    {
      id: 'value-seeker',
      title: '⚖️ 가성비/가심비 추구형',
      description:
        '당신은 가격 대비 성능, 혹은 가격 대비 만족도를 꼼꼼히 따지는 현명한 소비 유형입니다. 똑똑한 소비가 곧 행복!',
      detailedDescription:
        "무조건 싸거나 비싼 것보다, 가격에 합당한 가치를 제공하는지 꼼꼼히 따집니다. 후기 검색, 성능 비교 등 정보 탐색에 능숙하며, '가성비'와 '가심비'를 동시에 잡으려 노력합니다. 합리적인 소비를 통해 만족감을 얻는 유형입니다.",
      emoji: '⚖️',
      color: '#4682B4', // Steel Blue
      traits: ['합리적', '정보 탐색', '실용적', '가치 지향', '꼼꼼함', '영리함'],
      compatibility: {
        best: ['planner-budgeter', 'meaning-out-consumer'],
        good: [],
        avoid: ['impulse-buyer', 'late-night-shopper'],
      },
      recommendations: {
        tips: [
          "가끔은 가성비/가심비를 따지지 않고, 오직 '경험'만을 위한 소비를 해보는 것도 좋아요.",
          '좋은 정보를 얻었다면 주변 사람들에게도 공유하며 선한 영향력을 펼쳐보세요.',
          '너무 따지다 지치지 않도록, 때로는 직관에 맡기는 소비도 시도해 보세요.',
        ],
        hashtags: ['#가성비', '#가심비', '#현명한소비', '#똑똑한소비'],
      },
    },
    {
      id: 'impulse-buyer',
      title: '🌪️ 즉흥적 충동구매형',
      description:
        '당신은 한 번 꽂히면 참을 수 없는 즉흥적인 충동구매자입니다. 일단 지르고 후회는 나중에!',
      detailedDescription:
        "계획 없는 소비가 잦고, 그 순간의 감정에 따라 물건을 구매합니다. '고민은 배송만 늦출 뿐'이라는 말을 신조로 삼으며, 사고 나면 후회할 때도 있지만 그 순간의 만족감을 중요하게 생각합니다. 온라인 쇼핑 중독에 빠지기 쉽습니다.",
      emoji: '🌪️',
      color: '#FF6347', // Tomato
      traits: ['충동적', '즉흥적', '감정적', '빠른 실행', '후회', '단순함'],
      compatibility: {
        best: ['flex-pleaser', 'late-night-shopper'],
        good: [],
        avoid: ['minimal-saver', 'planner-budgeter'],
      },
      recommendations: {
        tips: [
          "충동구매를 막기 위해 '장바구니 챌린지'나 '24시간 고민' 규칙을 적용해 보세요.",
          "구매 버튼을 누르기 전에 '진짜 필요한가?'를 세 번만 외쳐보세요.",
          '감정적인 소비를 줄이기 위해 스트레스 해소법을 다양화하는 것이 좋아요.',
        ],
        hashtags: ['#충동구매', '#지름신', '#텅장', '#후회는나중에'],
      },
    },
    {
      id: 'experience-collector',
      title: '✈️ 경험 우선 투자형',
      description:
        '당신은 물건보다 경험에 투자하는 것을 선호하는 진정한 경험 수집가입니다. 추억은 돈으로 살 수 없어!',
      detailedDescription:
        '여행, 콘서트, 맛집 탐방, 취미 클래스 등 새로운 경험에 돈을 아끼지 않습니다. 물건은 사라지지만 경험은 남는다고 생각하며, 이를 통해 얻는 만족감과 추억을 소중히 여깁니다. SNS에 경험을 공유하며 타인과 소통하는 것을 즐깁니다.',
      emoji: '✈️',
      color: '#1E90FF', // DodgerBlue
      traits: ['경험 중시', '모험심', '추억 지향', '외향적', '자기 계발', 'SNS 활동'],
      compatibility: {
        best: ['flex-pleaser', 'meaning-out-consumer'],
        good: [],
        avoid: ['minimal-saver', 'impulse-buyer'],
      },
      recommendations: {
        tips: [
          '경험 소비도 좋지만, 예기치 못한 상황에 대비해 비상금을 마련해 두는 것이 좋아요.',
          '가끔은 소박하지만 새로운 경험을 통해 색다른 즐거움을 찾아보세요.',
          '경험을 통해 얻은 것을 기록하고 공유하며 더 큰 만족감을 느껴보세요.',
        ],
        hashtags: ['#경험수집가', '#여행에미치다', '#추억부자', '#경험이최고'],
      },
    },
    {
      id: 'planner-budgeter',
      title: '📝 계획적 예산형',
      description:
        '당신은 가계부와 예산 계획 없이는 잠 못 이루는 철저한 계획형 소비의 달인입니다. 돈은 계획대로 써야 제맛!',
      detailedDescription:
        '꼼꼼하게 예산을 세우고, 자신의 소비를 철저히 기록하고 관리합니다. 계획에서 벗어나는 것을 극도로 싫어하며, 매달 재정 상태를 분석하고 피드백합니다. 지출 통제를 통해 안정감을 느끼며, 미래를 위한 재정 관리에 능숙합니다.',
      emoji: '📝',
      color: '#8A2BE2', // BlueViolet
      traits: ['계획적', '꼼꼼함', '자기 통제', '재정 관리', '안정 추구', '분석적'],
      compatibility: {
        best: ['minimal-saver', 'value-seeker'],
        good: [],
        avoid: ['impulse-buyer', 'flex-pleaser'],
      },
      recommendations: {
        tips: [
          "계획도 중요하지만, 가끔은 자신을 위한 작은 '플렉스'를 허용해 보는 것도 좋아요.",
          '너무 빡빡한 계획보다는 약간의 유연성을 두는 것이 스트레스 관리에 도움이 될 거예요.',
          '당신의 꼼꼼함은 다른 분야에서도 빛을 발할 수 있습니다.',
        ],
        hashtags: ['#계획형소비', '#가계부요정', '#재테크꿈나무', '#돈관리는내가지'],
      },
    },
    {
      id: 'meaning-out-consumer',
      title: '💚 가치소비 미닝아웃형',
      description:
        '당신은 소비를 통해 자신의 신념과 가치관을 표현하는 진정한 미닝아웃 소비자입니다. 착한 소비가 곧 나의 철학!',
      detailedDescription:
        '단순히 물건의 가격이나 품질을 넘어, 브랜드의 철학, 환경 문제, 사회적 책임 등을 고려하여 소비합니다. 윤리적 소비, 친환경 소비, 로컬 브랜드 선호 등 자신의 가치관과 맞는 제품을 선택하고, 이를 통해 자부심을 느낍니다. 소비를 통해 세상을 바꾸는 데 기여하고 싶어 합니다.',
      emoji: '💚',
      color: '#228B22', // ForestGreen
      traits: ['가치 지향', '신념', '사회적 책임', '친환경적', '윤리적', '자부심'],
      compatibility: {
        best: ['experience-collector', 'value-seeker'],
        good: [],
        avoid: ['impulse-buyer', 'late-night-shopper'],
      },
      recommendations: {
        tips: [
          '가치소비도 중요하지만, 지나친 완벽주의가 오히려 스트레스가 될 수 있으니 유연하게 접근하세요.',
          '당신의 착한 소비 활동을 주변에 알리며 선한 영향력을 전파해 보세요.',
          "가끔은 오직 '나'만을 위한 소비를 해보는 것도 좋아요.",
        ],
        hashtags: ['#미닝아웃', '#가치소비', '#친환경소비', '#개념소비'],
      },
    },
    {
      id: 'late-night-shopper',
      title: '🌙 밤샘 쇼핑형',
      description:
        '당신은 밤만 되면 쇼핑 앱을 기웃거리고, 새벽 감성으로 결제 버튼을 누르는 밤샘 쇼핑형입니다. 낮져밤이 소비자!',
      detailedDescription:
        '낮에는 비교적 절제하는 편이지만, 밤만 되면 감성적이고 충동적인 소비 성향이 강해집니다. 잠이 오지 않거나 스트레스를 받을 때 온라인 쇼핑몰을 탐색하며 위안을 얻습니다. 다음 날 아침, 택배 알림에 놀라거나, 내가 이걸 왜 샀지? 하고 후회하는 경우가 많습니다.',
      emoji: '🌙',
      color: '#4B0082', // Indigo
      traits: [
        '충동적 (야간)',
        '감성적',
        '스트레스 해소용',
        '후회',
        '자기 통제 어려움',
        '새벽 감성',
      ],
      compatibility: {
        best: ['impulse-buyer', 'flex-pleaser'],
        good: [],
        avoid: ['minimal-saver', 'planner-budgeter'],
      },
      recommendations: {
        tips: [
          '잠들기 전 스마트폰 사용을 줄이고, 다른 편안한 취미 활동으로 시선을 돌려보세요.',
          '밤에 구매하고 싶은 물건이 있다면, 장바구니에만 넣어두고 다음 날 아침에 다시 생각해 보세요.',
          '밤샘 쇼핑으로 인한 후회가 크다면, 전문가의 도움을 받는 것도 방법이에요.',
        ],
        hashtags: ['#새벽쇼핑', '#밤샘쇼핑', '#야간결제', '#후회는나의몫'],
      },
    },
  ],
};
