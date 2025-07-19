import type { PersonalityTestData } from '@/types/personalityTest';

export const spendingStyleTestData: PersonalityTestData = {
  id: 'spending-style-test',
  title: '💸 연인과 돈을 쓸 때 나의 유형 테스트',
  description:
    '연인과 함께 돈을 쓸 때, 당신은 어떤 스타일인가요? 나의 소비 유형을 알아보고 연인과 현명하게 재정을 관리하는 방법을 찾아보세요!',
  category: 'romance',
  resultTypes: [
    'rational-investor', // 합리적 투자형
    'generous-spender', // 아낌없이 주는형
    'penny-pincher', // 절약형
    'experience-investor', // 경험 투자형
    'responsible-manager', // 책임감 있는 관리형
    'flexible-balancer', // 유연한 균형형
    'splurge-lover', // 충동적 지출형
    'value-seeker', // 가치 추구형
  ],
  questions: [
    {
      id: 'q1',
      question: '연인과의 데이트 비용, 누가 부담하는 것이 가장 합리적이라고 생각하나요?',
      options: [
        {
          id: 'q1_a',
          text: '매번 정확히 더치페이하는 것이 깔끔하다.',
          emoji: '📏',
          scores: { 'rational-investor': 3, 'responsible-manager': 2 },
        },
        {
          id: 'q1_b',
          text: '주로 내가 부담한다. 연인을 위해 쓰는 돈은 아깝지 않다.',
          emoji: '💝',
          scores: { 'generous-spender': 3, 'splurge-lover': 1 },
        },
        {
          id: 'q1_c',
          text: '상황에 따라 번갈아 내거나, 여유 있는 사람이 더 내는 것이 좋다.',
          emoji: '⚖️',
          scores: { 'flexible-balancer': 3, 'responsible-manager': 1 },
        },
        {
          id: 'q1_d',
          text: '미리 데이트 통장을 만들어 함께 관리하는 것이 가장 좋다.',
          emoji: '💰',
          scores: { 'responsible-manager': 3, 'rational-investor': 2 },
        },
      ],
    },
    {
      id: 'q2',
      question: '연인에게 선물을 고를 때, 당신의 기준은?',
      options: [
        {
          id: 'q2_a',
          text: '연인에게 실용적이고 오래 쓸 수 있는 가성비 좋은 선물.',
          emoji: '💡',
          scores: { 'rational-investor': 3, 'practical-giver': 2 }, // 이전 테스트 유형 연관
        },
        {
          id: 'q2_b',
          text: '가격 상관없이 연인이 정말 기뻐할 만한 최고급 선물.',
          emoji: '💎',
          scores: { 'generous-spender': 3, 'splurge-lover': 2 },
        },
        {
          id: 'q2_c',
          text: '선물보다는 함께하는 경험이나 추억을 만드는 것에 투자한다.',
          emoji: '🎢',
          scores: { 'experience-investor': 3, 'value-seeker': 2 },
        },
        {
          id: 'q2_d',
          text: '내가 생각하는 가치에 부합하는, 의미 있는 선물을 찾는다.',
          emoji: '💖',
          scores: { 'value-seeker': 3, 'rational-investor': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '연인과의 여행 경비를 계획할 때, 당신의 방식은?',
      options: [
        {
          id: 'q3_a',
          text: '세부 예산을 철저히 세우고 계획에 맞춰 지출한다.',
          emoji: '📝',
          scores: { 'responsible-manager': 3, 'rational-investor': 2 },
        },
        {
          id: 'q3_b',
          text: '여행하는 동안 아낌없이 쓰고, 비용은 나중에 생각한다.',
          emoji: '😎',
          scores: { 'splurge-lover': 3, 'generous-spender': 2 },
        },
        {
          id: 'q3_c',
          text: '절약할 부분은 절약하고, 투자할 부분은 과감히 투자한다.',
          emoji: '⚖️',
          scores: { 'flexible-balancer': 3, 'value-seeker': 1 },
        },
        {
          id: 'q3_d',
          text: '경험에 집중하여 비싸더라도 좋은 곳에서 숙박하거나 특별한 액티비티를 즐긴다.',
          emoji: '🤩',
          scores: { 'experience-investor': 3, 'value-seeker': 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '연인이 값비싼 물건을 사고 싶어 할 때, 당신의 조언은?',
      options: [
        {
          id: 'q4_a',
          text: '충분히 고민하고 필요성을 따져보라고 조언한다.',
          emoji: '🤔',
          scores: { 'rational-investor': 3, 'penny-pincher': 2 },
        },
        {
          id: 'q4_b',
          text: '사고 싶으면 사야지! 혹시 부족하면 내가 보태줄 수도 있다.',
          emoji: '🎁',
          scores: { 'generous-spender': 3, 'splurge-lover': 1 },
        },
        {
          id: 'q4_c',
          text: '지금 꼭 필요한 건지, 더 좋은 대안은 없는지 함께 찾아본다.',
          emoji: '🔍',
          scores: { 'responsible-manager': 2, 'flexible-balancer': 2 },
        },
        {
          id: 'q4_d',
          text: '그 물건이 연인의 삶에 어떤 가치를 줄 수 있는지 함께 고민한다.',
          emoji: '✨',
          scores: { 'value-seeker': 3, 'experience-investor': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '데이트 중 예산보다 지출이 많아졌을 때, 당신의 반응은?',
      options: [
        {
          id: 'q5_a',
          text: '다음 데이트에서 절약할 부분을 미리 계획한다.',
          emoji: '📝',
          scores: { 'responsible-manager': 3, 'rational-investor': 2 },
        },
        {
          id: 'q5_b',
          text: '연인과 즐거운 시간이었으니 괜찮다고 생각한다.',
          emoji: '😌',
          scores: { 'generous-spender': 2, 'splurge-lover': 3 },
        },
        {
          id: 'q5_c',
          text: '조금 아깝지만, 어쩔 수 없지 하고 넘어간다.',
          emoji: '🤷‍♀️',
          scores: { 'flexible-balancer': 3, 'experience-investor': 1 },
        },
        {
          id: 'q5_d',
          text: '쓸데없는 지출이 있었는지 꼼꼼히 되짚어본다.',
          emoji: '🔍',
          scores: { 'penny-pincher': 3, 'rational-investor': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '연인과 공동의 목표 (예: 주택 구매, 해외여행)를 위해 돈을 모을 때, 당신의 태도는?',
      options: [
        {
          id: 'q6_a',
          text: '명확한 목표와 계획을 세워 함께 실천한다.',
          emoji: '🎯',
          scores: { 'responsible-manager': 3, 'rational-investor': 3 },
        },
        {
          id: 'q6_b',
          text: '크게 신경 쓰지 않고, 때가 되면 모아지겠지 하는 편이다.',
          emoji: '🧘‍♀️',
          scores: { 'splurge-lover': 2, 'flexible-balancer': 1 },
        },
        {
          id: 'q6_c',
          text: '꼭 필요한 지출 외에는 최대한 절약하려 노력한다.',
          emoji: '🏦',
          scores: { 'penny-pincher': 3, 'value-seeker': 1 },
        },
        {
          id: 'q6_d',
          text: '목표 달성을 위한 의미 있는 경험에 대한 투자는 아끼지 않는다.',
          emoji: '📈',
          scores: { 'experience-investor': 3, 'value-seeker': 2 },
        },
      ],
    },
    {
      id: 'q7',
      question: '연인이 돈 문제로 힘들어할 때, 당신의 대처 방식은?',
      options: [
        {
          id: 'q7_a',
          text: '함께 문제의 원인을 분석하고 해결책을 찾아본다.',
          emoji: '🧠',
          scores: { 'rational-investor': 3, 'responsible-manager': 2 },
        },
        {
          id: 'q7_b',
          text: '금전적으로 기꺼이 도와주려 한다.',
          emoji: '🤝',
          scores: { 'generous-spender': 3 },
        },
        {
          id: 'q7_c',
          text: '자신도 힘들 것을 대비해 선을 긋는다.',
          emoji: '⛔',
          scores: { 'penny-pincher': 3 },
        },
        {
          id: 'q7_d',
          text: '함께 고민하며 정서적인 위로와 지지를 보낸다.',
          emoji: '🫂',
          scores: { 'flexible-balancer': 2, 'value-seeker': 2 },
        },
      ],
    },
    {
      id: 'q8',
      question: '당신에게 있어 돈이란?',
      options: [
        {
          id: 'q8_a',
          text: '미래를 위한 투자이자 안정적인 삶의 기반.',
          emoji: '📈',
          scores: { 'rational-investor': 3, 'responsible-manager': 3 },
        },
        {
          id: 'q8_b',
          text: '사랑하는 사람에게 행복을 줄 수 있는 수단.',
          emoji: '❤️',
          scores: { 'generous-spender': 3, 'splurge-lover': 2 },
        },
        {
          id: 'q8_c',
          text: '아껴서 모아야 하는 중요한 자원.',
          emoji: '🏦',
          scores: { 'penny-pincher': 3, 'responsible-manager': 1 },
        },
        {
          id: 'q8_d',
          text: '경험과 가치를 얻기 위한 도구.',
          emoji: '✨',
          scores: { 'experience-investor': 3, 'value-seeker': 3 },
        },
      ],
    },
    {
      id: 'q9',
      question: '연인과 통장 합치기 또는 공동 계좌 개설에 대한 당신의 생각은?',
      options: [
        {
          id: 'q9_a',
          text: '관계의 발전에 따라 필요한 경우 합리적으로 고려할 수 있다.',
          emoji: '💡',
          scores: { 'rational-investor': 3, 'responsible-manager': 3 },
        },
        {
          id: 'q9_b',
          text: '굳이 그럴 필요는 없다고 생각한다. 각자 관리하는 것이 편하다.',
          emoji: '🙅‍♀️',
          scores: { 'penny-pincher': 2, 'splurge-lover': 1 }, // 이기적이지 않은 점수
        },
        {
          id: 'q9_c',
          text: '연인이 원한다면 해볼 수 있다. 유연하게 생각한다.',
          emoji: '🤸‍♀️',
          scores: { 'flexible-balancer': 3 },
        },
        {
          id: 'q9_d',
          text: '미래를 함께 계획하는 좋은 방법이라고 생각한다.',
          emoji: '📈',
          scores: { 'value-seeker': 2, 'experience-investor': 1 },
        },
      ],
    },
    {
      id: 'q10',
      question: '연인과 돈 문제로 다툼이 생겼을 때, 당신의 행동은?',
      options: [
        {
          id: 'q10_a',
          text: '문제의 핵심을 파악하고 논리적으로 해결책을 찾으려 한다.',
          emoji: '🧠',
          scores: { 'rational-investor': 3, 'responsible-manager': 2 },
        },
        {
          id: 'q10_b',
          text: '대부분 내가 양보하는 편이다. 싸우기 싫어서.',
          emoji: '😌',
          scores: { 'generous-spender': 2, 'flexible-balancer': 1 },
        },
        {
          id: 'q10_c',
          text: '감정적으로 변하거나, 상대방을 비난할 수도 있다.',
          emoji: '😡',
          scores: { 'splurge-lover': 2, 'penny-pincher': 1 }, // 감정적 점수
        },
        {
          id: 'q10_d',
          text: '서로의 가치관 차이를 인정하고 이해하려 노력한다.',
          emoji: '🫂',
          scores: { 'value-seeker': 3, 'experience-investor': 2 },
        },
      ],
    },
    {
      id: 'q11',
      question: '연인과의 미래를 계획할 때, 재정적인 부분에 대한 당신의 생각은?',
      options: [
        {
          id: 'q11_a',
          text: '구체적인 재정 계획을 세워 안정적인 미래를 준비한다.',
          emoji: '📈',
          scores: { 'responsible-manager': 3, 'rational-investor': 3 },
        },
        {
          id: 'q11_b',
          text: '미래는 아직 먼 이야기. 현재를 즐기는 것이 더 중요하다.',
          emoji: '🎉',
          scores: { 'splurge-lover': 3, 'flexible-balancer': 2 },
        },
        {
          id: 'q11_c',
          text: '최대한 절약하고 불필요한 지출을 줄여 미래를 대비한다.',
          emoji: '💰',
          scores: { 'penny-pincher': 3 },
        },
        {
          id: 'q11_d',
          text: '재정적인 안정도 중요하지만, 함께 만들 추억과 경험에 더 집중한다.',
          emoji: '🎢',
          scores: { 'experience-investor': 3, 'value-seeker': 2 },
        },
      ],
    },
    {
      id: 'q12',
      question: '연인에게 재정적으로 도움을 주는 것에 대한 당신의 생각은?',
      options: [
        {
          id: 'q12_a',
          text: '상황과 필요에 따라 합리적인 선에서 도움을 줄 수 있다.',
          emoji: '⚖️',
          scores: { 'rational-investor': 2, 'responsible-manager': 2 },
        },
        {
          id: 'q12_b',
          text: '아낌없이 베풀고 싶다. 사랑하는 사람이 행복하면 나도 좋다.',
          emoji: '💖',
          scores: { 'generous-spender': 3 },
        },
        {
          id: 'q12_c',
          text: '내 것과 연인의 것을 명확히 구분하는 편이다.',
          emoji: '🚧',
          scores: { 'penny-pincher': 3 },
        },
        {
          id: 'q12_d',
          text: '돕는다면 나중에 돌려받을 것을 어느 정도 생각한다.',
          emoji: '🧮',
          scores: { 'value-seeker': 1, 'rational-investor': 1 }, // 이타적이지 않음
        },
      ],
    },
    {
      id: 'q13',
      question: '연인이 비싼 취미를 가지고 있다면, 당신의 반응은?',
      options: [
        {
          id: 'q13_a',
          text: '합리적인 범위 내에서 즐기는지 확인하고 조언한다.',
          emoji: '🧠',
          scores: { 'rational-investor': 3, 'responsible-manager': 2 },
        },
        {
          id: 'q13_b',
          text: '연인이 행복하다면 지지해 준다.',
          emoji: '👍',
          scores: { 'generous-spender': 2, 'flexible-balancer': 3 },
        },
        {
          id: 'q13_c',
          text: '과소비라고 생각하고 걱정한다.',
          emoji: '😟',
          scores: { 'penny-pincher': 3 },
        },
        {
          id: 'q13_d',
          text: '그 취미가 연인에게 어떤 가치를 주는지 이해하려 노력한다.',
          emoji: '✨',
          scores: { 'value-seeker': 3, 'experience-investor': 2 },
        },
      ],
    },
    {
      id: 'q14',
      question: '연인과 함께 쇼핑할 때, 당신의 스타일은?',
      options: [
        {
          id: 'q14_a',
          text: '미리 필요한 것을 정하고 계획적으로 쇼핑한다.',
          emoji: '📝',
          scores: { 'responsible-manager': 3, 'rational-investor': 2 },
        },
        {
          id: 'q14_b',
          text: '연인이 사고 싶은 것이 있다면 흔쾌히 사준다.',
          emoji: '🛍️',
          scores: { 'generous-spender': 3, 'splurge-lover': 2 },
        },
        {
          id: 'q14_c',
          text: '세일이나 할인 등 저렴하게 살 수 있는 방법을 모색한다.',
          emoji: '🏷️',
          scores: { 'penny-pincher': 3 },
        },
        {
          id: 'q14_d',
          text: '즉흥적으로 마음에 드는 것이 있으면 구매하는 편이다.',
          emoji: '😎',
          scores: { 'splurge-lover': 3, 'flexible-balancer': 1 },
        },
      ],
    },
    {
      id: 'q15',
      question: '돈 문제로 연인과 갈등을 겪지 않기 위해 당신이 가장 중요하게 생각하는 것은?',
      options: [
        {
          id: 'q15_a',
          text: '투명하고 솔직한 재정 상태 공유.',
          emoji: '💡',
          scores: { 'responsible-manager': 3, 'rational-investor': 3 },
        },
        {
          id: 'q15_b',
          text: '서로의 소비 패턴을 존중하고 이해하는 것.',
          emoji: '🫂',
          scores: { 'flexible-balancer': 3, 'value-seeker': 2 },
        },
        {
          id: 'q15_c',
          text: '돈에 대한 이야기를 최대한 하지 않는 것.',
          emoji: '🤫',
          scores: { 'splurge-lover': 1, 'penny-pincher': 1 }, // 회피 성향
        },
        {
          id: 'q15_d',
          text: '싸우더라도 필요하다면 돈에 대한 명확한 대화를 하는 것.',
          emoji: '🗣️',
          scores: { 'value-seeker': 3, 'rational-investor': 2 },
        },
      ],
    },
    {
      id: 'q16',
      question: '당신에게 최고의 데이트는 어떤 것인가요?',
      options: [
        {
          id: 'q16_a',
          text: '합리적인 비용으로 최대의 만족을 얻을 수 있는 데이트.',
          emoji: '🧠',
          scores: { 'rational-investor': 3, 'responsible-manager': 2 },
        },
        {
          id: 'q16_b',
          text: '비용 걱정 없이 연인과 즐거움을 만끽하는 데이트.',
          emoji: '🥳',
          scores: { 'generous-spender': 3, 'splurge-lover': 3 },
        },
        {
          id: 'q16_c',
          text: '비싸지 않아도 특별한 추억과 경험을 만들 수 있는 데이트.',
          emoji: '🎞️',
          scores: { 'experience-investor': 3, 'value-seeker': 3 },
        },
        {
          id: 'q16_d',
          text: '적절한 예산 안에서 연인과 함께 만족스러운 시간을 보내는 데이트.',
          emoji: '⚖️',
          scores: { 'flexible-balancer': 3, 'responsible-manager': 1 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'rational-investor',
      title: '합리적 투자형',
      description:
        '당신은 연인과의 관계에서 돈을 합리적으로 분석하고 미래를 위한 투자로 생각합니다.',
      detailedDescription:
        '감정적인 지출보다는 **효율성과 가성비**를 중요하게 생각하며, 돈을 쓰는 것에 있어 논리적인 기준을 따릅니다. 무조건 아끼기보다는 필요한 곳에는 과감하게 투자하고, 불필요한 지출은 최소화합니다. 연인과도 돈에 대한 솔직하고 투명한 대화를 통해 건강한 재정 계획을 세우는 것을 선호합니다. 때로는 너무 계산적이거나 차갑게 느껴질 수 있습니다.',
      emoji: '🧠',
      color: '#4682B4', // Steel Blue
      traits: ['합리적', '논리적', '분석적', '효율 추구', '미래 지향적', '투명성 중시'],
      compatibility: {
        best: ['responsible-manager', 'value-seeker'],
        good: ['flexible-balancer'],
        avoid: ['splurge-lover', 'generous-spender'],
      },
      recommendations: {
        activities: ['가계부 함께 작성하기', '재테크 스터디', '합리적인 소비 계획 세우기'],
        tips: [
          '때로는 감성적인 지출도 관계에 활력을 불어넣을 수 있어요.',
          '연인과의 대화 시 돈 이야기를 너무 딱딱하게 하지 않도록 주의하세요.',
          '돈보다 중요한 것은 연인과의 행복한 관계임을 잊지 마세요.',
        ],
      },
    },
    {
      id: 'generous-spender',
      title: '아낌없이 주는형',
      description:
        '당신은 연인에게 돈을 쓰는 것을 아까워하지 않고, 베푸는 것을 통해 행복을 느낍니다.',
      detailedDescription:
        '사랑하는 연인에게 아낌없이 돈을 지출하며, 연인이 행복해하는 모습을 보는 것에 큰 만족감을 느낍니다. **연인에게 최고의 것을 주고 싶어 하는 마음**이 크고, 금전적인 어려움이 있다면 기꺼이 도와주려 합니다. 이러한 너그러움은 연인에게 큰 감동을 주지만, 때로는 과도한 지출로 인해 자신의 재정에 부담을 주거나, 연인에게 부담을 줄 수도 있습니다.',
      emoji: '💖',
      color: '#DC143C', // Crimson
      traits: ['너그러움', '배려심', '관대함', '희생적', '감성적', '베푸는 즐거움'],
      compatibility: {
        best: ['penny-pincher', 'responsible-manager'],
        good: ['splurge-lover'],
        avoid: ['rational-investor', 'value-seeker'],
      },
      recommendations: {
        activities: [
          '연인에게 선물 서프라이즈',
          '근사한 레스토랑 데이트',
          '연인에게 필요한 것 먼저 챙겨주기',
        ],
        tips: [
          '자신의 재정 상황을 고려한 현명한 지출이 중요해요.',
          '연인에게 주는 것만큼 당신 자신도 챙기는 것을 잊지 마세요.',
          '때로는 물질적인 것보다 마음을 담은 선물이 더 큰 감동을 줄 수 있어요.',
        ],
      },
    },
    {
      id: 'penny-pincher',
      title: '절약형',
      description:
        '당신은 연인과의 관계에서도 불필요한 지출을 줄이고, 절약하는 습관을 중요하게 생각합니다.',
      detailedDescription:
        '돈을 쓰는 것에 매우 신중하며, **한 푼이라도 아끼려는 노력**을 합니다. 미래를 대비하고 안정적인 재정을 구축하는 것에 큰 가치를 둡니다. 때로는 지나친 절약으로 인해 연인이 불편함을 느끼거나, 데이트가 단조로워질 수 있습니다. 하지만 꾸준한 저축으로 미래를 든든하게 준비할 수 있습니다.',
      emoji: '💰',
      color: '#32CD32', // Lime Green
      traits: ['절약 정신', '검소함', '미래 지향적', '계획적', '신중함', '안정 추구'],
      compatibility: {
        best: ['generous-spender', 'responsible-manager'],
        good: ['rational-investor'],
        avoid: ['splurge-lover', 'experience-investor'],
      },
      recommendations: {
        activities: [
          '데이트 통장 만들기',
          '무료 데이트 코스 탐색',
          '가정에서 요리 데이트',
          '할인 정보 활용',
        ],
        tips: [
          '절약도 좋지만, 가끔은 연인을 위해 과감하게 투자하는 것도 필요해요.',
          '너무 돈에만 얽매이지 않고, 즐거움을 찾으려 노력하세요.',
          '절약하는 당신의 마음을 연인에게 이해시켜 주세요.',
        ],
      },
    },
    {
      id: 'experience-investor',
      title: '경험 투자형',
      description: '당신은 연인과의 관계에서 물질적인 것보다 경험에 돈을 아끼지 않습니다.',
      detailedDescription:
        '값비싼 물건보다는 **여행, 공연, 취미 활동 등 함께 할 수 있는 특별한 경험**에 투자하는 것을 선호합니다. 경험을 통해 연인과 소중한 추억을 만들고, 관계를 더욱 풍요롭게 만들려 합니다. 이러한 방식은 유대감을 깊게 하지만, 때로는 경험 외의 물질적인 필요를 놓치거나, 비용이 예상보다 커질 수 있습니다.',
      emoji: '🎢',
      color: '#FFD700', // Gold
      traits: ['경험 중시', '추억 생성', '즐거움 지향', '활동적', '개방적', '가치 지향'],
      compatibility: {
        best: ['value-seeker', 'flexible-balancer'],
        good: ['splurge-lover'],
        avoid: ['penny-pincher', 'rational-investor'],
      },
      recommendations: {
        activities: [
          '버킷리스트 함께 작성하기',
          '이색 데이트 코스 탐방',
          '해외여행 계획',
          '공연/전시회 관람',
        ],
        tips: [
          '경험만큼 물질적인 필요도 중요하니 균형을 맞추세요.',
          '경험에 대한 투자가 때로는 미래에 대한 투자임을 연인에게 설명하세요.',
          '경험 후에는 사진이나 기념품으로 추억을 오래 간직하세요.',
        ],
      },
    },
    {
      id: 'responsible-manager',
      title: '책임감 있는 관리형',
      description:
        '당신은 연인과의 재정 관리에서 책임감을 느끼고 체계적으로 계획하는 것을 선호합니다.',
      detailedDescription:
        '연인과의 관계에서 **돈 문제를 투명하고 합리적으로 관리**하려 합니다. 데이트 통장, 공동 예산 설정 등 명확한 규칙을 세우고 이를 준수하려 노력합니다. 미래를 위해 함께 돈을 모으는 것에 적극적이며, 재정적인 안정감을 중요하게 생각합니다. 이러한 책임감은 관계에 신뢰를 더하지만, 때로는 너무 엄격하게 느껴질 수 있습니다.',
      emoji: '📊',
      color: '#808080', // Gray
      traits: ['책임감', '계획적', '체계적', '투명성', '안정 추구', '합리적'],
      compatibility: {
        best: ['rational-investor', 'penny-pincher'],
        good: ['flexible-balancer'],
        avoid: ['splurge-lover', 'generous-spender'],
      },
      recommendations: {
        activities: [
          '공동 가계부 작성',
          '월별/연간 재정 목표 설정',
          '정기적인 재정 현황 공유',
          '금융 상품 함께 알아보기',
        ],
        tips: [
          '재정 관리도 중요하지만, 때로는 유연함도 필요해요.',
          '돈 이야기가 너무 딱딱하게 흐르지 않도록 분위기를 조절하세요.',
          '연인의 소비 습관을 존중하며 함께 조율하려 노력하세요.',
        ],
      },
    },
    {
      id: 'flexible-balancer',
      title: '유연한 균형형',
      description: '당신은 연인과의 재정 관리에서 유연하고 융통성 있는 태도를 보입니다.',
      detailedDescription:
        '**극단적인 절약이나 과소비보다는 상황에 맞춰 적절한 균형**을 찾으려 합니다. 연인의 의견을 존중하고, 때로는 양보하며 조화로운 재정 생활을 추구합니다. 딱딱한 규칙보다는 서로의 만족과 행복을 중요하게 생각합니다. 이러한 유연함은 관계를 편안하게 만들지만, 때로는 명확한 기준이 없어 재정 관리가 불분명해질 수 있습니다.',
      emoji: '⚖️',
      color: '#98FB98', // Pale Green
      traits: ['유연함', '융통성', '조화 추구', '배려심', '개방적', '조정자'],
      compatibility: {
        best: ['generous-spender', 'splurge-lover'],
        good: ['responsible-manager', 'experience-investor'],
        avoid: ['penny-pincher', 'rational-investor'],
      },
      recommendations: {
        activities: [
          '월별 데이트 예산 함께 정하기',
          '큰 지출 시 미리 상의하기',
          '서로의 소비 패턴 이야기 나누기',
        ],
        tips: [
          '유연함도 좋지만, 기본적인 재정 목표는 함께 세우는 것이 좋아요.',
          '불필요한 지출이 늘어나지 않도록 주의하세요.',
          '때로는 당신의 생각도 솔직하게 표현하는 것이 필요해요.',
        ],
      },
    },
    {
      id: 'splurge-lover',
      title: '충동적 지출형',
      description:
        '당신은 연인과 함께 있을 때 즉흥적으로 돈을 쓰거나, 분위기에 휩쓸려 과감한 지출을 하는 편입니다.',
      detailedDescription:
        '**현재의 즐거움과 만족감**을 가장 중요하게 생각하며, 돈을 쓰는 것에 있어 크게 고민하지 않습니다. 연인과 함께라면 돈을 아끼지 않고 흥청망청 쓰는 경향이 있습니다. 이러한 충동적인 면모는 데이트를 즐겁고 활기차게 만들지만, 때로는 불필요한 지출이 많아져 재정적인 어려움을 겪거나, 연인이 불안해할 수 있습니다.',
      emoji: '💸',
      color: '#FFC0CB', // Pink
      traits: ['충동적', '즉흥적', '현재 지향', '즐거움 추구', '낙천적', '낭비벽'],
      compatibility: {
        best: ['generous-spender', 'flexible-balancer'],
        good: ['experience-investor'],
        avoid: ['penny-pincher', 'responsible-manager', 'rational-investor'],
      },
      recommendations: {
        activities: [
          '충동구매 자제 연습',
          '선 지출 후 후회하지 않기',
          '큰 지출 전 연인과 상의하기',
          '즐거움 지출 예산 정하기',
        ],
        tips: [
          '즐거움도 좋지만, 미래를 위한 저축도 고려하세요.',
          '연인과의 재정적인 목표를 함께 세우고 노력해보세요.',
          '충동적인 지출이 관계에 해가 되지 않도록 주의하세요.',
        ],
      },
    },
    {
      id: 'value-seeker',
      title: '가치 추구형',
      description:
        '당신은 연인과의 관계에서 돈의 양보다는 **가치와 의미** 있는 지출을 중요하게 생각합니다.',
      detailedDescription:
        '단순히 비싼 것보다는 연인에게 **정서적인 만족감이나 특별한 경험을 줄 수 있는 지출**에 집중합니다. 돈이 가진 의미를 중요하게 생각하며, 물질적인 것보다 관계의 깊이와 행복을 우선시합니다. 이러한 가치 지향적인 태도는 관계를 풍요롭게 만들지만, 때로는 당신의 가치관을 연인에게 강요하거나, 실용적인 면을 간과할 수 있습니다.',
      emoji: '✨',
      color: '#9370DB', // Medium Purple
      traits: ['가치 지향', '의미 부여', '감성적', '정성', '성장 추구', '현명함'],
      compatibility: {
        best: ['rational-investor', 'experience-investor'],
        good: ['flexible-balancer'],
        avoid: ['splurge-lover', 'penny-pincher'],
      },
      recommendations: {
        activities: [
          '연인과 함께 기부하기',
          '의미 있는 기념일 이벤트 계획',
          '수공예 선물 만들기',
          '함께 가치 있는 취미 활동 시작',
        ],
        tips: [
          '당신의 가치관을 연인에게 잘 설명하고 이해를 구하세요.',
          '때로는 실용적인 지출도 관계 유지에 필요하다는 것을 인정하세요.',
          '가치 있는 소비가 곧 과도한 소비가 아님을 인지하세요.',
        ],
      },
    },
  ],
};
