import type { PersonalityTestData } from '@/types/personalityTest';

export const decisionMakingStyleTestData: PersonalityTestData = {
  id: 'decision-making-style-test',
  title: '🤔 나의 의사결정 스타일 테스트',
  description:
    '어떤 선택의 기로에 섰을 때, 당신은 어떻게 결정을 내리나요? 당신의 의사결정 스타일을 알아보고, 더 현명한 선택을 위한 힌트를 얻으세요!',
  category: 'self-discovery',
  resultTypes: [
    'analytical-strategist', // 분석적 전략가형
    'intuitive-quick-decider', // 직관적 즉흥형
    'consensus-seeker', // 합의 추구형
    'procrastinating-avoider', // 지연 회피형
    'leader-decider', // 주도적 결정가형
    'experience-based-pragmatist', // 경험 기반 실용주의형
    'emotional-responsive', // 감성 반응형
    'risk-taker-innovator', // 위험 감수 혁신가형
  ],
  questions: [
    {
      id: 'q1',
      question: '중요한 결정을 앞두고 있을 때, 가장 먼저 하는 행동은?',
      options: [
        {
          id: 'q1_a',
          text: '모든 정보를 수집하고 장단점을 꼼꼼히 분석한다.',
          emoji: '🔍',
          scores: { 'analytical-strategist': 3, 'planner-organizer': 1 },
        },
        {
          id: 'q1_b',
          text: '내 안의 느낌이나 직감에 귀 기울여 본다.',
          emoji: '💡',
          scores: { 'intuitive-quick-decider': 3, 'emotional-responsive': 1 },
        },
        {
          id: 'q1_c',
          text: '주변 사람들에게 의견을 묻고 함께 논의한다.',
          emoji: '🗣️',
          scores: { 'consensus-seeker': 3, 'emotional-responsive': 2 },
        },
        {
          id: 'q1_d',
          text: '일단 미뤄두고, 나중에 다시 생각해보자고 한다.',
          emoji: '🚧',
          scores: { 'procrastinating-avoider': 3 },
        },
      ],
    },
    {
      id: 'q2',
      question: '선택의 기로에서 가장 스트레스를 받는 순간은?',
      options: [
        {
          id: 'q2_a',
          text: '충분한 정보가 없거나, 분석할 시간이 부족할 때.',
          emoji: '🤯',
          scores: { 'analytical-strategist': 3, 'planner-organizer': 2 },
        },
        {
          id: 'q2_b',
          text: '어떤 결정을 내려야 할지 감이 전혀 오지 않을 때.',
          emoji: '❓',
          scores: { 'intuitive-quick-decider': 2, 'emotional-responsive': 2 },
        },
        {
          id: 'q2_c',
          text: '모두가 동의하지 않거나, 반대 의견이 너무 많을 때.',
          emoji: '👥',
          scores: { 'consensus-seeker': 3, 'procrastinating-avoider': 1 },
        },
        {
          id: 'q2_d',
          text: '결정의 결과가 너무 불확실하고 예측할 수 없을 때.',
          emoji: '🎲',
          scores: { 'risk-taker-innovator': 1, 'analytical-strategist': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '결정을 내린 후, 당신의 태도는?',
      options: [
        {
          id: 'q3_a',
          text: '한 번 내린 결정은 후회하지 않고 밀고 나간다.',
          emoji: '🚀',
          scores: { 'leader-decider': 3, 'risk-taker-innovator': 2 },
        },
        {
          id: 'q3_b',
          text: '혹시 잘못된 결정일까 봐 계속 불안해하고 재고한다.',
          emoji: '😥',
          scores: { 'procrastinating-avoider': 3, 'emotional-responsive': 2 },
        },
        {
          id: 'q3_c',
          text: '최대한 합리적인 선택을 했으니, 결과를 기다린다.',
          emoji: '⚖️',
          scores: { 'analytical-strategist': 3, 'experience-based-pragmatist': 2 },
        },
        {
          id: 'q3_d',
          text: '결과가 좋든 나쁘든, 얻는 것이 있을 거라 생각한다.',
          emoji: '📈',
          scores: { 'risk-taker-innovator': 3, 'intuitive-quick-decider': 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '어떤 결정을 내릴 때 가장 편안함을 느끼나요?',
      options: [
        {
          id: 'q4_a',
          text: '데이터와 분석 결과가 명확하게 뒷받침될 때.',
          emoji: '📊',
          scores: { 'analytical-strategist': 3, 'experience-based-pragmatist': 2 },
        },
        {
          id: 'q4_b',
          text: '내 감정이나 직관이 강하게 이끄는 방향일 때.',
          emoji: '💖',
          scores: { 'intuitive-quick-decider': 3, 'emotional-responsive': 3 },
        },
        {
          id: 'q4_c',
          text: '모두가 동의하고 지지하는 분위기일 때.',
          emoji: '🤝',
          scores: { 'consensus-seeker': 3, 'procrastinating-avoider': 1 },
        },
        {
          id: 'q4_d',
          text: '내가 스스로 주도하고 책임질 수 있는 결정일 때.',
          emoji: '👑',
          scores: { 'leader-decider': 3, 'risk-taker-innovator': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '과거에 내렸던 결정 중 가장 후회되는 것은?',
      options: [
        {
          id: 'q5_a',
          text: '충분히 생각하지 않고 섣불리 결정했던 것.',
          emoji: '🤦‍♀️',
          scores: { 'analytical-strategist': 2, 'procrastinating-avoider': 1 },
        },
        {
          id: 'q5_b',
          text: '다른 사람들의 의견에 너무 휘둘려 내린 결정.',
          emoji: '🤷‍♀️',
          scores: { 'leader-decider': 2, 'consensus-seeker': 1 },
        },
        {
          id: 'q5_c',
          text: '두려움 때문에 아무 결정도 내리지 못하고 기회를 놓친 것.',
          emoji: '😨',
          scores: { 'risk-taker-innovator': 2, 'procrastinating-avoider': 3 },
        },
        {
          id: 'q5_d',
          text: '논리보다는 감정에 치우쳐서 잘못된 선택을 했던 것.',
          emoji: '😭',
          scores: { 'analytical-strategist': 3, 'experience-based-pragmatist': 2 },
        },
      ],
    },
    {
      id: 'q6',
      question: '어려운 결정을 내릴 때, 주로 누구에게 조언을 구하나요?',
      options: [
        {
          id: 'q6_a',
          text: '객관적인 분석을 해줄 수 있는 전문가나 멘토.',
          emoji: '👨‍🏫',
          scores: { 'analytical-strategist': 3, 'experience-based-pragmatist': 2 },
        },
        {
          id: 'q6_b',
          text: '내 마음을 잘 이해해주고 공감해 줄 수 있는 친구나 가족.',
          emoji: '🫂',
          scores: { 'emotional-responsive': 3, 'consensus-seeker': 2 },
        },
        {
          id: 'q6_c',
          text: '아무에게도 조언을 구하지 않고 혼자 결정한다.',
          emoji: '👤',
          scores: { 'leader-decider': 3, 'intuitive-quick-decider': 1 },
        },
        {
          id: 'q6_d',
          text: '다양한 사람들의 의견을 종합적으로 들어본다.',
          emoji: '👂',
          scores: { 'consensus-seeker': 3, 'procrastinating-avoider': 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: "당신에게 있어 '잘못된 결정'이란?",
      options: [
        {
          id: 'q7_a',
          text: '정보 부족이나 잘못된 분석으로 인한 결정.',
          emoji: '📉',
          scores: { 'analytical-strategist': 3, 'experience-based-pragmatist': 2 },
        },
        {
          id: 'q7_b',
          text: '내 직감이나 감정을 무시하고 내린 결정.',
          emoji: '🙈',
          scores: { 'intuitive-quick-decider': 3, 'emotional-responsive': 3 },
        },
        {
          id: 'q7_c',
          text: '모두가 만족하지 못하고 갈등이 생기는 결정.',
          emoji: '💢',
          scores: { 'consensus-seeker': 3, 'procrastinating-avoider': 1 },
        },
        {
          id: 'q7_d',
          text: '새로운 시도나 도전을 하지 않고 안주하려 했던 결정.',
          emoji: '🛋️',
          scores: { 'risk-taker-innovator': 3, 'leader-decider': 2 },
        },
      ],
    },
    {
      id: 'q8',
      question: '당신이 가장 선호하는 정보 습득 방식은?',
      options: [
        {
          id: 'q8_a',
          text: '책, 논문, 통계 자료 등 공식적인 문헌 자료.',
          emoji: '📚',
          scores: { 'analytical-strategist': 3, 'experience-based-pragmatist': 2 },
        },
        {
          id: 'q8_b',
          text: '사람들과의 대화나 경험담, 직관적인 느낌.',
          emoji: '💬',
          scores: { 'intuitive-quick-decider': 2, 'emotional-responsive': 2 },
        },
        {
          id: 'q8_c',
          text: '다큐멘터리, 강연, 전문가 의견 등 다양한 매체.',
          emoji: '📺',
          scores: { 'consensus-seeker': 1, 'leader-decider': 1 },
        },
        {
          id: 'q8_d',
          text: '직접 몸으로 부딪히며 얻는 생생한 경험.',
          emoji: '🏃‍♀️',
          scores: { 'experience-based-pragmatist': 3, 'risk-taker-innovator': 2 },
        },
      ],
    },
    {
      id: 'q9',
      question: '갑작스러운 제안을 받았을 때, 당신의 첫 반응은?',
      options: [
        {
          id: 'q9_a',
          text: '일단 긍정적으로 검토해보고, 실현 가능성을 따져본다.',
          emoji: '✅',
          scores: { 'analytical-strategist': 2, 'leader-decider': 2 },
        },
        {
          id: 'q9_b',
          text: '재미있을 것 같으면 바로 "콜!"을 외친다.',
          emoji: '🤩',
          scores: { 'intuitive-quick-decider': 3, 'risk-taker-innovator': 3 },
        },
        {
          id: 'q9_c',
          text: '섣불리 결정하지 않고, 주변의 의견을 물어본다.',
          emoji: '🤔',
          scores: { 'consensus-seeker': 3, 'procrastinating-avoider': 2 },
        },
        {
          id: 'q9_d',
          text: '내 경험상 이런 제안은 보통 이렇더라, 하고 판단한다.',
          emoji: '🦉',
          scores: { 'experience-based-pragmatist': 3 },
        },
      ],
    },
    {
      id: 'q10',
      question: "당신이 생각하는 '좋은 결정'이란?",
      options: [
        {
          id: 'q10_a',
          text: '최대한 객관적이고 논리적인 근거에 기반한 결정.',
          emoji: '💯',
          scores: { 'analytical-strategist': 3, 'experience-based-pragmatist': 2 },
        },
        {
          id: 'q10_b',
          text: '내 마음이 편안하고 후회가 없는 결정.',
          emoji: '😌',
          scores: { 'emotional-responsive': 3, 'intuitive-quick-decider': 2 },
        },
        {
          id: 'q10_c',
          text: '모두가 행복하고 긍정적인 결과를 가져오는 결정.',
          emoji: '✨',
          scores: { 'consensus-seeker': 3, 'procrastinating-avoider': 1 },
        },
        {
          id: 'q10_d',
          text: '새로운 기회를 창출하고 미래를 발전시키는 결정.',
          emoji: '🚀',
          scores: { 'risk-taker-innovator': 3, 'leader-decider': 3 },
        },
      ],
    },
    {
      id: 'q11',
      question: '결정의 책임을 질 때, 당신의 태도는?',
      options: [
        {
          id: 'q11_a',
          text: '결과가 어떻든 내 결정에 대해 책임지는 것은 당연하다.',
          emoji: '💪',
          scores: { 'leader-decider': 3, 'analytical-strategist': 2 },
        },
        {
          id: 'q11_b',
          text: '책임지는 것이 두려워 결정을 미루고 싶을 때가 있다.',
          emoji: '😰',
          scores: { 'procrastinating-avoider': 3, 'emotional-responsive': 2 },
        },
        {
          id: 'q11_c',
          text: '책임을 지되, 과정에서 배운 점을 중요하게 생각한다.',
          emoji: '📈',
          scores: { 'experience-based-pragmatist': 3, 'risk-taker-innovator': 2 },
        },
        {
          id: 'q11_d',
          text: '모두의 의견을 모아 내린 결정이므로, 공동 책임이라 생각한다.',
          emoji: '🤝',
          scores: { 'consensus-seeker': 3 },
        },
      ],
    },
    {
      id: 'q12',
      question: '당신이 가장 중요하게 생각하는 의사결정의 원칙은?',
      options: [
        {
          id: 'q12_a',
          text: '데이터와 증거에 기반한 객관성.',
          emoji: '📊',
          scores: { 'analytical-strategist': 3, 'experience-based-pragmatist': 2 },
        },
        {
          id: 'q12_b',
          text: '내 본능과 느낌에 대한 신뢰.',
          emoji: '💖',
          scores: { 'intuitive-quick-decider': 3, 'emotional-responsive': 3 },
        },
        {
          id: 'q12_c',
          text: '다양한 의견을 듣고 조화를 이루는 합의.',
          emoji: '👥',
          scores: { 'consensus-seeker': 3, 'procrastinating-avoider': 1 },
        },
        {
          id: 'q12_d',
          text: '변화를 두려워하지 않고 새로운 길을 개척하는 용기.',
          emoji: '🦁',
          scores: { 'risk-taker-innovator': 3, 'leader-decider': 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'analytical-strategist',
      title: '🔍 분석적 전략가형',
      description:
        '당신은 모든 정보를 꼼꼼히 분석하고 논리적인 근거를 바탕으로 최적의 결정을 내리는 전략가입니다.',
      detailedDescription:
        '문제가 발생하면 감정에 휘둘리지 않고 객관적인 데이터와 사실을 수집하는 데 집중합니다. 장단점을 명확히 파악하고, 예측 가능한 위험을 최소화하며, 효율적인 해결책을 찾는 것을 중요하게 생각합니다. 이러한 성향은 실수를 줄이고 안정적인 결과를 가져오지만, 때로는 과도한 분석으로 인해 결정이 늦어지거나, 직관적인 기회를 놓칠 수 있습니다.',
      emoji: '🔍',
      color: '#000080', // Navy
      traits: ['논리적', '객관적', '분석적', '정보 수집', '신중함', '효율성 추구'],
      compatibility: {
        best: ['leader-decider', 'experience-based-pragmatist'],
        good: [],
        avoid: ['intuitive-quick-decider', 'emotional-responsive'],
      },
      recommendations: {
        tips: [
          '때로는 직감을 믿고 빠르게 결정하는 연습도 필요해요.',
          '모든 정보를 완벽하게 알 수는 없다는 것을 인정하고, 적정선에서 결정을 내리는 용기를 가지세요.',
          '결정 후에는 결과에 대한 피드백을 통해 다음 의사결정에 반영하세요.',
        ],
      },
    },
    {
      id: 'intuitive-quick-decider',
      title: '💡 직관적 즉흥형',
      description:
        '당신은 내면의 직감과 순간적인 느낌을 믿고 빠르게 결정을 내리는 즉흥적인 결정가입니다.',
      detailedDescription:
        '정보가 부족하더라도 오랜 고민 없이 자신의 본능적인 느낌이나 육감에 따라 결정을 내리는 편입니다. 빠른 판단력을 통해 기회를 포착하고, 유연하게 상황에 대처하는 능력이 뛰어납니다. 이러한 성향은 신속한 행동을 가능하게 하지만, 때로는 성급한 결정으로 인해 예상치 못한 실수를 하거나, 중요한 세부 사항을 놓칠 수 있습니다.',
      emoji: '💡',
      color: '#FFD700', // Gold
      traits: ['직관적', '빠른 판단', '유연함', '즉흥적', '본능적', '기회 포착'],
      compatibility: {
        best: ['risk-taker-innovator', 'emotional-responsive'],
        good: [],
        avoid: ['analytical-strategist', 'planner-organizer'],
      },
      recommendations: {
        tips: [
          '중요한 결정일수록 직감에만 의존하기보다, 최소한의 정보는 확인하는 습관을 들이세요.',
          '결정하기 전에 잠시 멈춰서 심호흡을 하며 감정을 가라앉히는 것도 도움이 됩니다.',
          '과거의 성공적인 직관적 결정을 되새기며 자신감을 가지세요.',
        ],
      },
    },
    {
      id: 'consensus-seeker',
      title: '🤝 합의 추구형',
      description:
        '당신은 모두의 의견을 경청하고, 갈등 없이 합의점을 찾아 모두가 만족하는 결정을 추구하는 조화로운 리더입니다.',
      detailedDescription:
        '집단의 평화와 조화를 최우선으로 생각하며, 다양한 사람들의 의견을 수렴하고 설득하여 최선의 합의를 도출하려 합니다. 갈등을 싫어하고, 자신의 의견보다는 모두가 동의하는 방향으로 결정을 내리는 데 집중합니다. 이러한 성향은 팀워크를 강화하고 원만한 관계를 유지하는 데 유리하지만, 때로는 소수의 반대 의견이나 개인의 강한 주장에 휘둘려 우유부단해질 수 있습니다.',
      emoji: '🤝',
      color: '#98FB98', // Pale Green
      traits: ['협력적', '경청', '조화 추구', '공감 능력', '관계 중시', '갈등 회피'],
      compatibility: {
        best: ['emotional-responsive', 'procrastinating-avoider'],
        good: [],
        avoid: ['leader-decider', 'risk-taker-innovator'],
      },
      recommendations: {
        tips: [
          '모두의 동의를 얻기 어렵다면, 과감히 자신의 주장을 펼치는 용기도 필요해요.',
          '때로는 소수의 의견이라도 진지하게 고려하는 것이 중요해요.',
          '결정 후에도 꾸준히 소통하며 집단의 만족도를 확인하는 것이 좋습니다.',
        ],
      },
    },
    {
      id: 'procrastinating-avoider',
      title: '😥 지연 회피형',
      description:
        '당신은 중요한 결정을 내리는 것을 부담스러워하며, 최대한 미루거나 회피하려는 경향이 있습니다.',
      detailedDescription:
        "결정의 결과에 대한 두려움, 책임감에 대한 부담, 혹은 완벽주의 성향 때문에 결정을 계속 미루는 편입니다. '나중에 해도 되겠지', '누군가 대신 해주겠지' 라는 생각을 하기도 합니다. 이러한 성향은 스트레스를 줄일 수 있지만, 중요한 기회를 놓치거나, 문제가 더욱 커지는 결과를 초래할 수 있습니다.",
      emoji: '😥',
      color: '#808080', // Gray
      traits: ['회피적', '두려움', '부담감', '완벽주의', '수동적', '우유부단'],
      compatibility: {
        best: ['consensus-seeker', 'emotional-responsive'],
        good: [],
        avoid: ['leader-decider', 'risk-taker-innovator'],
      },
      recommendations: {
        tips: [
          '작은 결정부터 스스로 내리는 연습을 시작해 보세요.',
          '결과가 어떻든, 행동하는 것이 중요하다고 생각하세요.',
          '결정을 미루는 근본적인 이유를 파악하고, 이를 극복하려는 노력이 필요해요.',
        ],
      },
    },
    {
      id: 'leader-decider',
      title: '👑 주도적 결정가형',
      description:
        '당신은 강력한 리더십으로 주도적으로 결정을 내리고, 그 결과에 대해 책임을 지는 당당한 결정가입니다.',
      detailedDescription:
        '모호한 상황을 싫어하며, 빠르게 상황을 파악하고 결단력 있게 방향을 제시합니다. 자신의 판단과 능력에 대한 강한 확신을 가지고 있으며, 주변을 이끌어 나가는 데 능숙합니다. 이러한 성향은 추진력과 효율성을 높여주지만, 때로는 독단적으로 보이거나, 주변의 의견을 충분히 듣지 않는다는 오해를 받을 수 있습니다.',
      emoji: '👑',
      color: '#4169E1', // Royal Blue
      traits: ['리더십', '결단력', '주도적', '자신감', '책임감', '추진력'],
      compatibility: {
        best: ['analytical-strategist', 'risk-taker-innovator'],
        good: [],
        avoid: ['consensus-seeker', 'procrastinating-avoider'],
      },
      recommendations: {
        tips: [
          '결정 전 주변의 다양한 의견을 경청하는 시간을 가지세요.',
          '자신의 결정이 모두에게 미칠 영향을 미리 고려해 보세요.',
          '가끔은 다른 사람에게 결정권을 위임하는 것도 좋은 경험이 될 수 있어요.',
        ],
      },
    },
    {
      id: 'experience-based-pragmatist',
      title: '🧠 경험 기반 실용주의형',
      description:
        '당신은 과거의 경험과 실용적인 관점을 바탕으로 가장 현실적인 결정을 내리는 현실주의자입니다.',
      detailedDescription:
        '새로운 정보보다는 과거의 성공이나 실패 경험에서 얻은 교훈을 중요하게 생각합니다. 비현실적인 이상보다는 현재 상황에서 가장 효율적이고 실현 가능한 방법을 선택하려 합니다. 이러한 성향은 안정적이고 검증된 결과를 가져오지만, 때로는 새로운 시도를 꺼리거나, 변화에 둔감하다는 평가를 받을 수 있습니다.',
      emoji: '🧠',
      color: '#2F4F4F', // Dark Slate Gray
      traits: ['실용적', '경험 중시', '현실적', '안정 추구', '효율성', '보수적'],
      compatibility: {
        best: ['analytical-strategist', 'leader-decider'],
        good: [],
        avoid: ['intuitive-quick-decider', 'risk-taker-innovator'],
      },
      recommendations: {
        tips: [
          '과거의 경험이 항상 정답은 아니라는 것을 기억하고, 새로운 가능성에 열린 마음을 가지세요.',
          '변화의 흐름을 읽고 새로운 지식이나 기술을 습득하는 데 관심을 가져보세요.',
          '때로는 데이터나 경험만으로는 알 수 없는 직관의 영역도 있다는 것을 인정해 보세요.',
        ],
      },
    },
    {
      id: 'emotional-responsive',
      title: '❤️ 감성 반응형',
      description:
        '당신은 자신의 감정과 타인의 감정에 민감하게 반응하며, 감정적 공감을 바탕으로 결정을 내리는 감성적인 사람입니다.',
      detailedDescription:
        '논리보다는 마음이 이끄는 대로, 혹은 주변 사람들의 감정 상태에 영향을 받아 결정을 내리는 편입니다. 다른 사람의 기분이나 분위기를 중요하게 생각하며, 때로는 자신의 감정을 솔직하게 표현하기도 합니다. 이러한 성향은 따뜻하고 인간적인 결정을 가능하게 하지만, 때로는 감정에 휩쓸려 비합리적인 선택을 하거나, 후회할 수 있습니다.',
      emoji: '❤️',
      color: '#FF6347', // Tomato
      traits: ['감성적', '공감적', '마음 중시', '민감함', '인간적', '관계 지향'],
      compatibility: {
        best: ['intuitive-quick-decider', 'consensus-seeker'],
        good: [],
        avoid: ['analytical-strategist', 'experience-based-pragmatist'],
      },
      recommendations: {
        tips: [
          '감정적인 판단도 중요하지만, 중요한 결정일수록 한 번 더 이성적으로 생각하는 시간을 가지세요.',
          '자신의 감정을 건강하게 조절하고 표현하는 연습이 필요해요.',
          '다른 사람의 감정에 너무 휩쓸리지 않고, 자신의 중심을 잡는 것이 중요합니다.',
        ],
      },
    },
    {
      id: 'risk-taker-innovator',
      title: '🚀 위험 감수 혁신가형',
      description:
        '당신은 불확실성을 두려워하지 않고, 새로운 시도와 도전을 통해 혁신적인 결정을 내리는 개척자입니다.',
      detailedDescription:
        '안정적인 길보다는 가능성이 있다면 위험을 감수하고서라도 새로운 방식을 시도하려 합니다. 변화와 혁신을 추구하며, 기존의 틀을 깨는 데 주저함이 없습니다. 실패를 두려워하지 않고, 실패를 통해 배우고 성장하는 것을 중요하게 생각합니다. 이러한 성향은 큰 성공을 가져올 수 있지만, 때로는 무모하다는 평가를 받거나 예상치 못한 큰 손실을 입을 수도 있습니다.',
      emoji: '🚀',
      color: '#8B008B', // Dark Magenta
      traits: ['도전적', '혁신적', '위험 감수', '개척자', '성장 지향', '변화 추구'],
      compatibility: {
        best: ['leader-decider', 'intuitive-quick-decider'],
        good: [],
        avoid: ['procrastinating-avoider', 'experience-based-pragmatist'],
      },
      recommendations: {
        tips: [
          '과감한 결정도 좋지만, 리스크 관리와 비상 계획을 세우는 것도 잊지 마세요.',
          '주변의 조언에 귀 기울이고, 다양한 관점에서 상황을 파악하려 노력하세요.',
          '실패하더라도 좌절하지 않고 다음 도전을 위한 발판으로 삼는 긍정적인 태도를 유지하세요.',
        ],
      },
    },
  ],
};
