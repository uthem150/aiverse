import type { PersonalityTestData } from '@/types/personalityTest';

export const conflictCopingTestData: PersonalityTestData = {
  id: 'conflict-coping-test',
  title: '🤔 연인과 다툴 때 나의 유형 테스트',
  description:
    '연인과 의견 충돌이 생겼을 때, 나는 어떻게 대처할까? 나의 다툼 유형을 알아보고 연인과 현명하게 갈등을 해결하는 방법을 찾아보세요!',
  category: 'romance',
  resultTypes: [
    'analytical-resolver', // 분석적 해결형
    'emotional-expresser', // 감정적 분출형
    'avoidance-seeker', // 회피형
    'harmonious-conciliator', // 조화 추구형
    'dominant-assertor', // 지배적 주장형
    'self-blaming-withdrawer', // 자책/철회형
    'third-party-seeker', // 제3자 조언형
    'future-oriented-solver', // 미래 지향적 해결형
  ],
  questions: [
    {
      id: 'q1',
      question: '연인과 의견 충돌이 생겼을 때, 당신의 첫 반응은?',
      options: [
        {
          id: 'q1_a',
          text: '문제의 원인을 논리적으로 분석하려 한다.',
          emoji: '🧠',
          scores: { 'analytical-resolver': 3, 'future-oriented-solver': 2 },
        },
        {
          id: 'q1_b',
          text: '감정이 북받쳐 오르며 울거나 화를 낸다.',
          emoji: '😭',
          scores: { 'emotional-expresser': 3, 'self-blaming-withdrawer': 1 },
        },
        {
          id: 'q1_c',
          text: '일단 대화를 피하고 상황을 모면하려 한다.',
          emoji: '🤫',
          scores: { 'avoidance-seeker': 3, 'self-blaming-withdrawer': 2 },
        },
        {
          id: 'q1_d',
          text: '상대방의 기분을 살피며 상황을 좋게 만들려 노력한다.',
          emoji: '😌',
          scores: { 'harmonious-conciliator': 3, 'third-party-seeker': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '다툼 중 당신이 가장 중요하게 생각하는 것은?',
      options: [
        {
          id: 'q2_a',
          text: '누가 옳고 그른지 명확히 따지는 것.',
          emoji: '⚖️',
          scores: { 'dominant-assertor': 3, 'analytical-resolver': 2 },
        },
        {
          id: 'q2_b',
          text: '내 감정을 솔직하게 표현하고 상대방이 알아주는 것.',
          emoji: '🗣️',
          scores: { 'emotional-expresser': 3, 'third-party-seeker': 2 },
        },
        {
          id: 'q2_c',
          text: '싸움이 더 커지지 않고 빨리 끝내는 것.',
          emoji: ' quick',
          scores: { 'avoidance-seeker': 3, 'harmonious-conciliator': 2 },
        },
        {
          id: 'q2_d',
          text: '다툼을 통해 더 나은 미래를 위한 해결책을 찾는 것.',
          emoji: '📈',
          scores: { 'future-oriented-solver': 3, 'analytical-resolver': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '화가 났을 때, 당신의 말투나 행동은?',
      options: [
        {
          id: 'q3_a',
          text: '논리적으로 따지고 들며 평소보다 날카로워진다.',
          emoji: ' sharp',
          scores: { 'analytical-resolver': 3, 'dominant-assertor': 2 },
        },
        {
          id: 'q3_b',
          text: '말이 거칠어지거나 비꼬는 등 감정적으로 변한다.',
          emoji: '🤬',
          scores: { 'emotional-expresser': 3, 'dominant-assertor': 1 },
        },
        {
          id: 'q3_c',
          text: '입을 다물거나 자리를 피하려 한다.',
          emoji: '🤫',
          scores: { 'avoidance-seeker': 3, 'self-blaming-withdrawer': 2 },
        },
        {
          id: 'q3_d',
          text: '애써 침착하려 노력하며 상대방의 말을 경청하려 한다.',
          emoji: '😌',
          scores: { 'harmonious-conciliator': 3, 'future-oriented-solver': 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: '연인과 다툰 후, 가장 먼저 하는 생각은?',
      options: [
        {
          id: 'q4_a',
          text: '이 다툼의 본질적인 원인은 무엇일까?',
          emoji: '🤔',
          scores: { 'analytical-resolver': 3, 'future-oriented-solver': 2 },
        },
        {
          id: 'q4_b',
          text: '내가 너무 감정적으로 행동했나? 후회스럽다.',
          emoji: '😔',
          scores: { 'self-blaming-withdrawer': 3, 'emotional-expresser': 1 },
        },
        {
          id: 'q4_c',
          text: '이 다툼은 빨리 잊고 싶다. 아무 일 없었던 것처럼.',
          emoji: ' eraser',
          scores: { 'avoidance-seeker': 3, 'harmonious-conciliator': 1 },
        },
        {
          id: 'q4_d',
          text: '누군가에게 이 상황을 이야기하고 조언을 듣고 싶다.',
          emoji: '🗣️',
          scores: { 'third-party-seeker': 3, 'emotional-expresser': 2 },
        },
      ],
    },
    {
      id: 'q5',
      question: '당신에게 화해란 무엇인가요?',
      options: [
        {
          id: 'q5_a',
          text: '문제를 완전히 해결하고 재발 방지책을 마련하는 것.',
          emoji: '✅',
          scores: { 'analytical-resolver': 3, 'future-oriented-solver': 3 },
        },
        {
          id: 'q5_b',
          text: '서로의 감정을 충분히 이해하고 위로하는 것.',
          emoji: '🫂',
          scores: { 'emotional-expresser': 3, 'harmonious-conciliator': 2 },
        },
        {
          id: 'q5_c',
          text: '더 이상 싸우지 않기로 약속하고 평화를 되찾는 것.',
          emoji: '🕊️',
          scores: { 'avoidance-seeker': 3, 'harmonious-conciliator': 3 },
        },
        {
          id: 'q5_d',
          text: '내가 잘못한 부분을 인정하고 사과하는 것.',
          emoji: '🙇',
          scores: { 'self-blaming-withdrawer': 3, 'harmonious-conciliator': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '연인과의 다툼이 길어질 때, 당신의 행동은?',
      options: [
        {
          id: 'q6_a',
          text: '끈기 있게 설득하고 논쟁을 이어간다.',
          emoji: ' argument',
          scores: { 'dominant-assertor': 3, 'analytical-resolver': 2 },
        },
        {
          id: 'q6_b',
          text: '너무 힘들어서 지치고 포기하고 싶어진다.',
          emoji: ' exhausted',
          scores: { 'emotional-expresser': 2, 'self-blaming-withdrawer': 3 },
        },
        {
          id: 'q6_c',
          text: '일단 대화를 중단하고 시간을 가지려 한다.',
          emoji: ' pausa',
          scores: { 'avoidance-seeker': 3, 'harmonious-conciliator': 1 },
        },
        {
          id: 'q6_d',
          text: '주변 사람들에게 이 상황을 설명하고 객관적인 조언을 구한다.',
          emoji: '🗣️',
          scores: { 'third-party-seeker': 3 },
        },
      ],
    },
    {
      id: 'q7',
      question: '연인에게 서운한 점이 생겼을 때, 어떻게 표현하나요?',
      options: [
        {
          id: 'q7_a',
          text: '논리적으로 왜 서운한지 설명한다.',
          emoji: '🧠',
          scores: { 'analytical-resolver': 3, 'future-oriented-solver': 2 },
        },
        {
          id: 'q7_b',
          text: '감정적으로 서운함을 폭발시키거나 눈물을 보인다.',
          emoji: '😭',
          scores: { 'emotional-expresser': 3 },
        },
        {
          id: 'q7_c',
          text: '애써 괜찮은 척하며 넘기려 노력한다.',
          emoji: '😑',
          scores: { 'avoidance-seeker': 3, 'harmonious-conciliator': 2 },
        },
        {
          id: 'q7_d',
          text: '내가 너무 예민한가 자책하며 속으로 삭힌다.',
          emoji: '😔',
          scores: { 'self-blaming-withdrawer': 3 },
        },
      ],
    },
    {
      id: 'q8',
      question: '연인과의 갈등이 반복될 때, 당신의 생각은?',
      options: [
        {
          id: 'q8_a',
          text: '이 관계의 근본적인 문제점을 찾아 해결해야 한다.',
          emoji: '🔍',
          scores: { 'analytical-resolver': 3, 'future-oriented-solver': 3 },
        },
        {
          id: 'q8_b',
          text: '우리는 정말 안 맞는 걸까? 절망감을 느낀다.',
          emoji: '💔',
          scores: { 'emotional-expresser': 2, 'self-blaming-withdrawer': 3 },
        },
        {
          id: 'q8_c',
          text: '더 이상 싸우기 싫다. 헤어지는 게 나을 수도 있겠다는 생각이 든다.',
          emoji: '🚪',
          scores: { 'avoidance-seeker': 3, 'dominant-assertor': 1 },
        },
        {
          id: 'q8_d',
          text: '주변의 경험담을 듣거나 전문가의 도움을 받고 싶다.',
          emoji: '🗣️',
          scores: { 'third-party-seeker': 3 },
        },
      ],
    },
    {
      id: 'q9',
      question: '화해 후, 당신의 마음은?',
      options: [
        {
          id: 'q9_a',
          text: '이제 더 이상 같은 문제로 싸우지 않을 거라 생각한다.',
          emoji: '✅',
          scores: { 'analytical-resolver': 3, 'future-oriented-solver': 3 },
        },
        {
          id: 'q9_b',
          text: '감정 소모가 너무 커서 힘들고 지친다.',
          emoji: ' exhausted',
          scores: { 'emotional-expresser': 2, 'self-blaming-withdrawer': 3 },
        },
        {
          id: 'q9_c',
          text: '일단 평화를 되찾아서 다행이라고 생각한다.',
          emoji: '😌',
          scores: { 'harmonious-conciliator': 3, 'avoidance-seeker': 2 },
        },
        {
          id: 'q9_d',
          text: '내가 잘못해서 싸움이 끝난 것 같아 찝찝하다.',
          emoji: '😔',
          scores: { 'self-blaming-withdrawer': 3 },
        },
      ],
    },
    {
      id: 'q10',
      question: '연인이 자신의 잘못을 인정하지 않을 때, 당신은?',
      options: [
        {
          id: 'q10_a',
          text: '끈기 있게 설득하고 논리적으로 증명하려 한다.',
          emoji: ' argument',
          scores: { 'analytical-resolver': 3, 'dominant-assertor': 3 },
        },
        {
          id: 'q10_b',
          text: '답답하고 화가 나서 감정적으로 격해진다.',
          emoji: '😡',
          scores: { 'emotional-expresser': 3 },
        },
        {
          id: 'q10_c',
          text: '싸우기 싫어서 일단 넘어가지만 속으로 삭힌다.',
          emoji: '🤫',
          scores: { 'avoidance-seeker': 3, 'harmonious-conciliator': 2 },
        },
        {
          id: 'q10_d',
          text: '이 상황을 객관적으로 봐줄 사람에게 이야기한다.',
          emoji: '🗣️',
          scores: { 'third-party-seeker': 3 },
        },
      ],
    },
    {
      id: 'q11',
      question: '연인과의 갈등 상황에서 가장 피하고 싶은 것은?',
      options: [
        {
          id: 'q11_a',
          text: '문제의 본질을 해결하지 못하고 넘어가는 것.',
          emoji: '❌',
          scores: { 'analytical-resolver': 3, 'future-oriented-solver': 3 },
        },
        {
          id: 'q11_b',
          text: '서로에게 깊은 상처를 주는 말이나 행동.',
          emoji: '🔪',
          scores: { 'emotional-expresser': 2, 'harmonious-conciliator': 3 },
        },
        {
          id: 'q11_c',
          text: '감정 싸움으로 번져 관계가 악화되는 것.',
          emoji: '🔥',
          scores: { 'avoidance-seeker': 3, 'self-blaming-withdrawer': 2 },
        },
        {
          id: 'q11_d',
          text: '내가 모든 것을 양보하고 희생해야 하는 상황.',
          emoji: ' sacrificial',
          scores: { 'dominant-assertor': 2, 'independent-maintainer': 1 }, // 이전에 독립 유지형이 있었으므로 재활용
        },
      ],
    },
    {
      id: 'q12',
      question: '연인과의 다툼이 끝난 후, 당신의 감정은?',
      options: [
        {
          id: 'q12_a',
          text: '문제를 해결했다는 성취감과 홀가분함.',
          emoji: '💪',
          scores: { 'analytical-resolver': 3, 'future-oriented-solver': 2 },
        },
        {
          id: 'q12_b',
          text: '복잡하고 우울한 감정, 여전히 마음이 무겁다.',
          emoji: '😔',
          scores: { 'emotional-expresser': 3, 'self-blaming-withdrawer': 3 },
        },
        {
          id: 'q12_c',
          text: '빨리 잊고 일상으로 돌아가고 싶다.',
          emoji: '🏃',
          scores: { 'avoidance-seeker': 3, 'harmonious-conciliator': 2 },
        },
        {
          id: 'q12_d',
          text: '내가 너무 심했나? 상대방이 괜찮을지 걱정된다.',
          emoji: '😟',
          scores: { 'self-blaming-withdrawer': 3, 'harmonious-conciliator': 1 },
        },
      ],
    },
    {
      id: 'q13',
      question: '연인에게 내가 잘못한 점을 인정하는 것은?',
      options: [
        {
          id: 'q13_a',
          text: '필요하다면 인정하지만, 내가 전적으로 잘못한 것은 아니다.',
          emoji: '⚖️',
          scores: { 'dominant-assertor': 2, 'analytical-resolver': 1 },
        },
        {
          id: 'q13_b',
          text: '쉽지 않지만, 관계를 위해 노력하려 한다.',
          emoji: '💪',
          scores: { 'harmonious-conciliator': 3, 'future-oriented-solver': 2 },
        },
        {
          id: 'q13_c',
          text: '내가 잘못했다고 느끼면 바로 인정하고 사과한다.',
          emoji: '🙇',
          scores: { 'self-blaming-withdrawer': 3, 'emotional-expresser': 2 },
        },
        {
          id: 'q13_d',
          text: '솔직히 인정하기 싫지만, 싸우기 싫어서 인정하는 척 할 때도 있다.',
          emoji: '🤥',
          scores: { 'avoidance-seeker': 3, 'dominant-assertor': 1 },
        },
      ],
    },
    {
      id: 'q14',
      question: '연인과의 갈등을 주변에 이야기하는 편인가요?',
      options: [
        {
          id: 'q14_a',
          text: '거의 이야기하지 않는다. 우리 둘만의 문제라고 생각한다.',
          emoji: '🔒',
          scores: { 'private-keeper': 2, 'avoidance-seeker': 1 }, // 기존 유형 재활용
        },
        {
          id: 'q14_b',
          text: '친한 친구나 가족에게 상세히 이야기하고 조언을 구한다.',
          emoji: '🗣️',
          scores: { 'third-party-seeker': 3, 'emotional-expresser': 2 },
        },
        {
          id: 'q14_c',
          text: '문제 해결에 도움이 될 만한 전문가의 의견을 듣고 싶다.',
          emoji: '🧑‍💻',
          scores: { 'analytical-resolver': 2, 'future-oriented-solver': 3 },
        },
        {
          id: 'q14_d',
          text: '이야기하기보다 혼자 조용히 생각하는 것을 선호한다.',
          emoji: '🤔',
          scores: { 'self-blaming-withdrawer': 2, 'private-keeper': 3 },
        },
      ],
    },
    {
      id: 'q15',
      question: '연인과의 다툼에서 당신의 가장 큰 약점은?',
      options: [
        {
          id: 'q15_a',
          text: '감정에 휘둘려 이성적인 판단을 못 하는 것.',
          emoji: '😭',
          scores: { 'emotional-expresser': 3, 'self-blaming-withdrawer': 2 },
        },
        {
          id: 'q15_b',
          text: '회피하려다가 문제가 더 커지는 것.',
          emoji: '🏃',
          scores: { 'avoidance-seeker': 3, 'harmonious-conciliator': 1 },
        },
        {
          id: 'q15_c',
          text: '내 의견만 주장하려다 상대방의 마음을 헤아리지 못하는 것.',
          emoji: '🗣️',
          scores: { 'dominant-assertor': 3, 'analytical-resolver': 2 },
        },
        {
          id: 'q15_d',
          text: '혼자 모든 것을 짊어지고 자책하는 것.',
          emoji: '😔',
          scores: { 'self-blaming-withdrawer': 3, 'avoidance-seeker': 2 },
        },
      ],
    },
    {
      id: 'q16',
      question: '연인과의 갈등 후 관계가 더욱 돈독해지려면 무엇이 필요하다고 생각하나요?',
      options: [
        {
          id: 'q16_a',
          text: '재발 방지를 위한 명확한 규칙과 약속.',
          emoji: '📝',
          scores: { 'analytical-resolver': 3, 'future-oriented-solver': 3 },
        },
        {
          id: 'q16_b',
          text: '서로의 감정을 충분히 보듬어주고 진심으로 위로하는 것.',
          emoji: '🫂',
          scores: { 'emotional-expresser': 3, 'harmonious-conciliator': 3 },
        },
        {
          id: 'q16_c',
          text: '다툼에 대한 언급 없이 즐거운 시간을 보내며 다시 가까워지는 것.',
          emoji: '🥳',
          scores: { 'avoidance-seeker': 2, 'harmonious-conciliator': 1 },
        },
        {
          id: 'q16_d',
          text: '객관적인 시선으로 서로의 문제를 돌아보고 개선하려는 노력.',
          emoji: '🤔',
          scores: { 'third-party-seeker': 3, 'dominant-assertor': 1 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'analytical-resolver',
      title: '분석적 해결형',
      description:
        '연인과 다툴 때 당신은 감정보다 이성으로 문제를 분석하고 해결책을 찾으려 합니다.',
      detailedDescription:
        '갈등 상황에서 감정적으로 대응하기보다, 문제의 원인을 파악하고 논리적으로 해결 방안을 모색합니다. 감정적인 논쟁보다는 객관적인 사실과 합리적인 해결책을 중요하게 생각합니다. 이러한 접근 방식은 효율적인 문제 해결에 도움이 되지만, 때로는 상대방이 당신을 차갑거나 공감 능력이 부족하다고 느낄 수 있습니다.',
      emoji: '🧠',
      color: '#808080', // Gray
      traits: ['이성적', '논리적', '분석적', '문제 해결 지향', '객관적', '침착함'],
      compatibility: {
        best: ['future-oriented-solver', 'dominant-assertor'],
        good: ['third-party-seeker'],
        avoid: ['emotional-expresser', 'self-blaming-withdrawer'],
      },
      recommendations: {
        activities: [
          '다툼 후 문제점과 해결책 정리 노트',
          '논리적 대화 연습',
          '차분하게 대화하는 시간 갖기',
        ],
        tips: [
          '상대방의 감정을 먼저 헤아려주는 공감의 표현이 중요해요.',
          '모든 문제를 분석하려 하기보다 때로는 감정적인 위로가 필요할 때도 있어요.',
          '싸움의 승패보다 관계의 회복을 우선하세요.',
        ],
      },
    },
    {
      id: 'emotional-expresser',
      title: '감정적 분출형',
      description: '연인과 다툴 때 당신은 자신의 감정을 숨기지 않고 격렬하게 표출하는 편입니다.',
      detailedDescription:
        '화가 나거나 서운하면 그 감정을 참지 않고 그대로 드러냅니다. 눈물, 고함, 비난 등 감정적인 언행이 동반될 수 있으며, 상대방이 자신의 감정을 이해해주기를 강력하게 원합니다. 감정을 솔직하게 표현하여 해소하는 데는 효과적이지만, 때로는 과도한 감정 표출이 상대방에게 상처를 주거나, 싸움을 더욱 악화시킬 수 있습니다.',
      emoji: '😭',
      color: '#FF6347', // Tomato
      traits: ['감성적', '솔직함', '충동적', '표현적', '극단적', '외향적'],
      compatibility: {
        best: ['harmonious-conciliator', 'self-blaming-withdrawer'],
        good: ['third-party-seeker'],
        avoid: ['analytical-resolver', 'avoidance-seeker'],
      },
      recommendations: {
        activities: ['감정 조절 훈련', '일기 쓰기 (감정 해소)', '안정적인 환경에서 대화하기'],
        tips: [
          '감정을 표현하기 전에 한 박자 쉬어가는 연습을 해보세요.',
          '상대방의 입장을 이해하려 노력하고 비난하는 말은 피하세요.',
          '싸움 후에는 진심으로 사과하고 화해하는 시간을 가지세요.',
        ],
      },
    },
    {
      id: 'avoidance-seeker',
      title: '회피형',
      description: '연인과 다툴 때 당신은 갈등 상황 자체를 피하고 싶어 합니다.',
      detailedDescription:
        '싸움의 기미가 보이거나 갈등이 심해지면 대화를 중단하거나 자리를 피하는 등 회피적인 태도를 보입니다. 불편한 감정을 마주하기 어려워하며, 일단 상황을 모면하여 평화를 유지하려 합니다. 싸움 자체를 줄일 수 있지만, 근본적인 문제가 해결되지 않아 반복되거나 상대방이 답답함을 느낄 수 있습니다.',
      emoji: '🤫',
      color: '#FFD700', // Gold
      traits: ['회피적', '수동적', '갈등 기피', '소극적', '내향적', '평화주의'],
      compatibility: {
        best: ['dominant-assertor', 'future-oriented-solver'],
        good: ['harmonious-conciliator'],
        avoid: ['emotional-expresser', 'analytical-resolver'],
      },
      recommendations: {
        activities: [
          '갈등 상황 대처법 배우기',
          '솔직하게 감정 표현 연습',
          '둘만의 대화 규칙 정하기',
        ],
        tips: [
          '문제를 회피하기보다 용기를 내어 직면하는 연습을 해보세요.',
          '상대방에게 당신의 생각을 솔직하게 전달하세요.',
          '싸움이 관계를 성장시키는 기회가 될 수도 있다는 점을 명심하세요.',
        ],
      },
    },
    {
      id: 'harmonious-conciliator',
      title: '조화 추구형',
      description:
        '연인과 다툴 때 당신은 관계의 조화를 중요하게 생각하며 빨리 화해하려 노력합니다.',
      detailedDescription:
        '싸움으로 인해 관계가 틀어지는 것을 가장 두려워하며, 상대방의 기분을 살피고 양보하여 빨리 화해하려 노력합니다. 갈등의 원인 분석보다는 관계의 회복에 초점을 맞추며, 평화로운 분위기를 중요하게 생각합니다. 이러한 태도는 관계 유지에 도움이 되지만, 자신의 의견을 제대로 주장하지 못하거나 불만이 쌓일 수 있습니다.',
      emoji: '🕊️',
      color: '#90EE90', // Light Green
      traits: ['조화 지향', '양보적', '온화함', '배려심', '갈등 기피', '화합적'],
      compatibility: {
        best: ['emotional-expresser', 'dominant-assertor'],
        good: ['avoidance-seeker', 'self-blaming-withdrawer'],
        avoid: ['analytical-resolver', 'future-oriented-solver'],
      },
      recommendations: {
        activities: [
          '자기 주장 훈련',
          '갈등 시 자신의 감정 들여다보기',
          '솔직하게 서운함 표현 연습',
        ],
        tips: [
          '관계를 위해 양보하는 것도 좋지만, 당신의 의견도 중요해요.',
          '불만을 쌓아두기보다 적절한 시기에 솔직하게 이야기하세요.',
          '화해 이후에도 문제의 재발 방지를 위한 노력이 필요해요.',
        ],
      },
    },
    {
      id: 'dominant-assertor',
      title: '지배적 주장형',
      description: '연인과 다툴 때 당신은 자신의 의견을 강하게 주장하고 설득하려 합니다.',
      detailedDescription:
        '갈등 상황에서 자신의 의견이 옳다고 확신하며, 상대방을 설득하고 자신의 주장을 관철시키려 합니다. 다툼에서 우위를 점하려 하거나, 논쟁에서 이기는 것을 중요하게 생각합니다. 강한 리더십을 보여줄 수 있지만, 상대방이 위압감을 느끼거나 당신의 독단적인 태도에 상처받을 수 있습니다.',
      emoji: '🗣️',
      color: '#FF69B4', // Hot Pink
      traits: ['단호함', '주도적', '강력한 주장', '설득력', '리더십', '자기중심적'],
      compatibility: {
        best: ['avoidance-seeker', 'harmonious-conciliator'],
        good: ['analytical-resolver'],
        avoid: ['emotional-expresser', 'self-blaming-withdrawer'],
      },
      recommendations: {
        activities: ['경청하는 연습', '상대방의 입장 생각하기', '공격적이지 않은 대화법 배우기'],
        tips: [
          '자신의 의견을 주장하되, 상대방의 의견에도 귀 기울여 주세요.',
          '싸움에서 이기는 것보다 관계의 유지가 더 중요해요.',
          '상대방의 감정을 존중하고 위로하는 것도 잊지 마세요.',
        ],
      },
    },
    {
      id: 'self-blaming-withdrawer',
      title: '자책/철회형',
      description:
        '연인과 다툴 때 당신은 모든 것을 자신의 탓으로 돌리거나 스스로 관계에서 물러나려 합니다.',
      detailedDescription:
        '갈등 상황에서 자신이 부족했기 때문이라고 자책하거나, 상대방이 화내는 것이 자신의 잘못이라고 생각하며 위축됩니다. 싸움이 싫어서 먼저 사과하거나, 관계에서 스스로 물러나려는 모습을 보입니다. 순종적이고 배려심이 깊지만, 자존감이 낮아질 수 있고, 상대방이 당신의 마음을 이용할 수도 있습니다.',
      emoji: '😔',
      color: '#DDA0DD', // Plum
      traits: ['자책적', '위축됨', '희생적', '소극적', '순종적', '감성적'],
      compatibility: {
        best: ['dominant-assertor', 'emotional-expresser'],
        good: ['harmonious-conciliator'],
        avoid: ['analytical-resolver', 'future-oriented-solver'],
      },
      recommendations: {
        activities: ['자존감 높이는 연습', '자신을 긍정적으로 생각하기', '자기 주장 연습'],
        tips: [
          '모든 것이 당신의 잘못은 아니에요. 스스로를 비난하지 마세요.',
          '상대방에게 당신의 감정을 솔직하게 표현하세요.',
          '관계에서 동등한 위치를 지키려 노력하세요.',
        ],
      },
    },
    {
      id: 'third-party-seeker',
      title: '제3자 조언형',
      description: '연인과 다툴 때 당신은 주변 사람들에게 조언을 구하고 도움을 받으려 합니다.',
      detailedDescription:
        '갈등이 생기면 혼자 해결하기보다, 친구나 가족 등 주변 사람들에게 상황을 이야기하고 객관적인 조언을 구합니다. 다른 사람들의 시선을 통해 문제를 파악하고 해결책을 찾으려 합니다. 지지적인 관계를 통해 위로를 얻고 싶어 하지만, 때로는 불필요한 간섭을 받거나, 연인과의 문제를 너무 공개적으로 만들 수 있습니다.',
      emoji: '🗣️',
      color: '#FFA07A', // Light Salmon
      traits: ['개방적', '의존적 (긍정적)', '소통 지향', '지지 추구', '사회적', '조언 선호'],
      compatibility: {
        best: ['analytical-resolver', 'emotional-expresser'],
        good: ['harmonious-conciliator'],
        avoid: ['avoidance-seeker', 'private-keeper'], // 사생활 보호형과는 상극
      },
      recommendations: {
        activities: [
          '신뢰할 수 있는 친구/멘토와 이야기하기',
          '커플 상담 고려',
          '객관적인 시각 유지 연습',
        ],
        tips: [
          '주변의 조언도 중요하지만, 최종 결정은 두 사람이 함께 내려야 해요.',
          '연인과의 문제는 되도록 두 사람 사이에서 해결하려 노력하세요.',
          '지나치게 많은 사람에게 이야기하는 것은 피하는 것이 좋습니다.',
        ],
      },
    },
    {
      id: 'future-oriented-solver',
      title: '미래 지향적 해결형',
      description: '연인과 다툴 때 당신은 현재의 갈등을 통해 더 나은 미래를 만들려 노력합니다.',
      detailedDescription:
        '다툼을 단순한 싸움이 아닌, 관계 발전을 위한 중요한 과정으로 생각합니다. 현재의 문제를 해결하고, 앞으로 같은 갈등이 재발하지 않도록 건설적인 해결책을 찾는 데 집중합니다. 현실적이고 합리적인 시각으로 접근하지만, 때로는 감정적인 부분에 대한 공감이 부족하거나, 너무 완벽한 해결만을 추구할 수 있습니다.',
      emoji: '📈',
      color: '#2E8B57', // SeaGreen
      traits: ['미래 지향적', '건설적', '합리적', '성장 지향', '문제 해결 지향', '현실적'],
      compatibility: {
        best: ['analytical-resolver', 'avoidance-seeker'],
        good: ['dominant-assertor', 'third-party-seeker'],
        avoid: ['emotional-expresser', 'self-blaming-withdrawer'],
      },
      recommendations: {
        activities: [
          '갈등 후 함께 대화하며 개선 방안 논의',
          '관계의 규칙 정하기',
          '서로의 바람 이야기하기',
        ],
        tips: [
          '문제 해결만큼 중요한 것은 상대방의 감정을 헤아려주는 일이에요.',
          '너무 미래만 보지 말고, 현재의 감정적인 교류에도 집중하세요.',
          '완벽한 해결책보다 서로가 만족할 수 있는 합의점을 찾는 것이 중요해요.',
        ],
      },
    },
  ],
};
