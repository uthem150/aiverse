import type { PersonalityTestData } from '@/types/personalityTest';

export const conflictResolutionStyleTestData: PersonalityTestData = {
  id: 'conflict-resolution-style-test',
  title: '😡 연인과 싸울 때 나의 유형 테스트',
  description:
    '연인과 다툼이 생겼을 때, 당신은 어떻게 문제를 해결하나요? 나의 갈등 해결 유형을 알아보고 더욱 건강하게 관계를 발전시켜 보세요!',
  category: 'romance',
  resultTypes: [
    'direct-confronter', // 직진 해결사형
    'peace-maker', // 평화주의형
    'logical-negotiator', // 논리적 협상가형
    'emotional-expresser', // 감정 표현형
    'silent-withdrawer', // 침묵 회피형
    'compromise-seeker', // 타협 추구형
    'humor-diffuser', // 유머 완화형
    'problem-solver', // 문제 해결 주도형
  ],
  questions: [
    {
      id: 'q1',
      question: '연인과 다툼이 시작되려고 할 때, 당신의 첫 반응은?',
      options: [
        {
          id: 'q1_a',
          text: '무슨 문제인지 바로 이야기하자고 한다.',
          emoji: '🗣️',
          scores: { 'direct-confronter': 3, 'problem-solver': 2 },
        },
        {
          id: 'q1_b',
          text: '싸우고 싶지 않다며 분위기를 바꾸려 한다.',
          emoji: '😌',
          scores: { 'peace-maker': 3, 'silent-withdrawer': 1 },
        },
        {
          id: 'q1_c',
          text: '일단 상황을 분석하고 이성적으로 접근한다.',
          emoji: '🧠',
          scores: { 'logical-negotiator': 3, 'problem-solver': 1 },
        },
        {
          id: 'q1_d',
          text: '기분이 좋지 않음을 바로 티낸다.',
          emoji: '😠',
          scores: { 'emotional-expresser': 3, 'humor-diffuser': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '갈등 상황에서 가장 중요하게 생각하는 것은?',
      options: [
        {
          id: 'q2_a',
          text: '문제를 회피하지 않고 즉시 해결하는 것.',
          emoji: '🚀',
          scores: { 'direct-confronter': 3, 'problem-solver': 3 },
        },
        {
          id: 'q2_b',
          text: '연인과의 관계가 손상되지 않고 평화를 유지하는 것.',
          emoji: '🕊️',
          scores: { 'peace-maker': 3, 'silent-withdrawer': 2 },
        },
        {
          id: 'q2_c',
          text: '논리적으로 잘잘못을 따지고 합리적인 결론을 내는 것.',
          emoji: '⚖️',
          scores: { 'logical-negotiator': 3, 'compromise-seeker': 1 },
        },
        {
          id: 'q2_d',
          text: '내 감정을 솔직하게 표현하고 연인이 이를 알아주는 것.',
          emoji: '😢',
          scores: { 'emotional-expresser': 3, 'humor-diffuser': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '화해할 때 연인에게 어떤 말을 주로 하나요?',
      options: [
        {
          id: 'q3_a',
          text: '"우리가 이걸 어떻게 해결할 수 있을까?"',
          emoji: '🤔',
          scores: { 'problem-solver': 3, 'logical-negotiator': 2 },
        },
        {
          id: 'q3_b',
          text: '"미안해. 우리 싸우지 말자."',
          emoji: '😔',
          scores: { 'peace-maker': 3, 'compromise-seeker': 2 },
        },
        {
          id: 'q3_c',
          text: '"내가 좀 서운했어. 네 생각은 어때?"',
          emoji: '💬',
          scores: { 'emotional-expresser': 3, 'direct-confronter': 2 },
        },
        {
          id: 'q3_d',
          text: '"아, 진짜 왜 싸운 거야? ㅋㅋ 우리 바보 같아."',
          emoji: '😂',
          scores: { 'humor-diffuser': 3, 'peace-maker': 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: '연인과 다툰 후, 혼자만의 시간을 가지는 편인가요?',
      options: [
        {
          id: 'q4_a',
          text: '아니오, 최대한 빨리 대화해서 풀려고 한다.',
          emoji: '🏃‍♀️',
          scores: { 'direct-confronter': 3, 'problem-solver': 2 },
        },
        {
          id: 'q4_b',
          text: '네, 감정을 가라앉히고 다시 생각할 시간이 필요하다.',
          emoji: '🧘‍♀️',
          scores: { 'silent-withdrawer': 3, 'logical-negotiator': 2 },
        },
        {
          id: 'q4_c',
          text: '때에 따라 다르다. 가끔은 혼자 생각하기도 한다.',
          emoji: '⚖️',
          scores: { 'compromise-seeker': 2, 'peace-maker': 1 },
        },
        {
          id: 'q4_d',
          text: '그날 바로 풀어야 한다. 혼자 두면 더 힘들어진다.',
          emoji: '🔥',
          scores: { 'emotional-expresser': 2, 'humor-diffuser': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '갈등 해결 방식 중 가장 비효율적이라고 생각하는 것은?',
      options: [
        {
          id: 'q5_a',
          text: '문제의 핵심을 이야기하지 않고 감정적으로만 대응하는 것.',
          emoji: '😠',
          scores: { 'logical-negotiator': 3, 'problem-solver': 2 },
        },
        {
          id: 'q5_b',
          text: '싸움을 피하려고만 하고 문제를 덮어두는 것.',
          emoji: '🙈',
          scores: { 'direct-confronter': 3, 'emotional-expresser': 1 },
        },
        {
          id: 'q5_c',
          text: '한쪽만 일방적으로 희생하거나 양보하는 것.',
          emoji: '💔',
          scores: { 'compromise-seeker': 3, 'peace-maker': 1 },
        },
        {
          id: 'q5_d',
          text: '침묵하거나 연락을 끊고 잠수 타는 것.',
          emoji: '📵',
          scores: { 'direct-confronter': 2, 'emotional-expresser': 2 }, // 본인이 이렇게 행동할 수 있지만 비효율적이라고 생각할 수 있음.
        },
      ],
    },
    {
      id: 'q6',
      question: '연인에게 서운한 점이 생겼을 때, 어떻게 표현하나요?',
      options: [
        {
          id: 'q6_a',
          text: '바로 솔직하게 이야기해서 오해를 푼다.',
          emoji: '💬',
          scores: { 'direct-confronter': 3, 'emotional-expresser': 2 },
        },
        {
          id: 'q6_b',
          text: '마음에 담아두고 괜찮은 척한다.',
          emoji: '🤐',
          scores: { 'silent-withdrawer': 3, 'peace-maker': 2 },
        },
        {
          id: 'q6_c',
          text: '나중에 적절한 시기에 차분하게 설명한다.',
          emoji: '⏳',
          scores: { 'logical-negotiator': 3, 'problem-solver': 2 },
        },
        {
          id: 'q6_d',
          text: '간접적으로 티를 내거나, 농담처럼 이야기한다.',
          emoji: '😏',
          scores: { 'humor-diffuser': 3, 'compromise-seeker': 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: '다툰 후 화해할 때까지 걸리는 시간은?',
      options: [
        {
          id: 'q7_a',
          text: '당일 안에 해결한다. 늦어도 다음 날 아침.',
          emoji: '⚡',
          scores: { 'direct-confronter': 3, 'problem-solver': 3 },
        },
        {
          id: 'q7_b',
          text: '며칠 걸릴 때도 있다. 상대방이 먼저 다가와 주길 기다린다.',
          emoji: '⏳',
          scores: { 'silent-withdrawer': 3, 'peace-maker': 2 },
        },
        {
          id: 'q7_c',
          text: '싸움의 경중에 따라 다르지만, 서로 노력해서 풀려고 한다.',
          emoji: '🤝',
          scores: { 'compromise-seeker': 3, 'logical-negotiator': 2 },
        },
        {
          id: 'q7_d',
          text: '내가 너무 감정적이어서 시간이 오래 걸리기도 한다.',
          emoji: '😥',
          scores: { 'emotional-expresser': 3, 'humor-diffuser': 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '갈등 상황에서 연인의 어떤 태도가 가장 싫은가요?',
      options: [
        {
          id: 'q8_a',
          text: '문제를 회피하거나 침묵하는 것.',
          emoji: '🤫',
          scores: { 'direct-confronter': 3, 'emotional-expresser': 2 },
        },
        {
          id: 'q8_b',
          text: '감정적으로만 나오고 논리적인 대화가 안 될 때.',
          emoji: '😤',
          scores: { 'logical-negotiator': 3, 'problem-solver': 2 },
        },
        {
          id: 'q8_c',
          text: '자신의 잘못을 인정하지 않고 남 탓만 할 때.',
          emoji: ' 🙅‍♀️',
          scores: { 'compromise-seeker': 2, 'peace-maker': 1 },
        },
        {
          id: 'q8_d',
          text: '나의 감정을 무시하거나 비웃을 때.',
          emoji: '😒',
          scores: { 'emotional-expresser': 2, 'humor-diffuser': 1 },
        },
      ],
    },
    {
      id: 'q9',
      question: '갈등 후, 연인에게 어떤 방식으로 화해를 시도하나요?',
      options: [
        {
          id: 'q9_a',
          text: '먼저 다가가 대화를 요청한다.',
          emoji: '🤝',
          scores: { 'direct-confronter': 3, 'problem-solver': 2 },
        },
        {
          id: 'q9_b',
          text: '연락하지 않고 기다린다.',
          emoji: '⏳',
          scores: { 'silent-withdrawer': 3 },
        },
        {
          id: 'q9_c',
          text: '손편지나 메시지로 내 마음을 전달한다.',
          emoji: '✉️',
          scores: { 'emotional-expresser': 2, 'peace-maker': 2 },
        },
        {
          id: 'q9_d',
          text: '장난을 치거나 가벼운 분위기로 먼저 다가간다.',
          emoji: ' 🤪',
          scores: { 'humor-diffuser': 3, 'compromise-seeker': 1 },
        },
      ],
    },
    {
      id: 'q10',
      question: '싸움의 원인을 파악할 때, 당신은 주로 어디에 집중하나요?',
      options: [
        {
          id: 'q10_a',
          text: '누구의 잘못인지, 어떤 사실관계가 틀렸는지.',
          emoji: '🔍',
          scores: { 'logical-negotiator': 3, 'problem-solver': 2 },
        },
        {
          id: 'q10_b',
          text: '서로의 감정과 서운했던 부분.',
          emoji: '❤️‍🩹',
          scores: { 'emotional-expresser': 3, 'peace-maker': 2 },
        },
        {
          id: 'q10_c',
          text: '이 문제를 어떻게 해결해야 다시 싸우지 않을지.',
          emoji: '📈',
          scores: { 'problem-solver': 3, 'direct-confronter': 2 },
        },
        {
          id: 'q10_d',
          text: '결과적으로 싸우게 된 상황 자체.',
          emoji: '🤔',
          scores: { 'silent-withdrawer': 1, 'compromise-seeker': 1 },
        },
      ],
    },
    {
      id: 'q11',
      question: '싸운 후, 다음번에는 어떻게 대처해야겠다고 생각하나요?',
      options: [
        {
          id: 'q11_a',
          text: '같은 문제로 싸우지 않기 위한 구체적인 방법을 모색한다.',
          emoji: '💡',
          scores: { 'problem-solver': 3, 'logical-negotiator': 2 },
        },
        {
          id: 'q11_b',
          text: '다음에는 싸움 자체를 만들지 않으려 노력한다.',
          emoji: '🕊️',
          scores: { 'peace-maker': 3, 'silent-withdrawer': 1 },
        },
        {
          id: 'q11_c',
          text: '내 감정을 좀 더 솔직하고 현명하게 표현하는 연습을 해야겠다고 생각한다.',
          emoji: '💬',
          scores: { 'emotional-expresser': 3, 'direct-confronter': 2 },
        },
        {
          id: 'q11_d',
          text: '뭐, 싸울 수도 있지. 다음에 잘 풀면 된다고 생각한다.',
          emoji: '😌',
          scores: { 'humor-diffuser': 2, 'compromise-seeker': 2 },
        },
      ],
    },
    {
      id: 'q12',
      question: '연인과의 다툼을 주변 사람들에게 이야기하는 편인가요?',
      options: [
        {
          id: 'q12_a',
          text: '절대 이야기하지 않는다. 둘만의 문제다.',
          emoji: '🔒',
          scores: { 'silent-withdrawer': 3, 'logical-negotiator': 2 },
        },
        {
          id: 'q12_b',
          text: '친한 친구에게 솔직하게 털어놓고 조언을 구한다.',
          emoji: '🗣️',
          scores: { 'emotional-expresser': 2, 'humor-diffuser': 1 },
        },
        {
          id: 'q12_c',
          text: '가끔 가볍게 이야기할 때도 있다.',
          emoji: ' 😀',
          scores: { 'compromise-seeker': 2, 'peace-maker': 1 },
        },
        {
          id: 'q12_d',
          text: '문제 해결에 도움이 된다면 이야기할 수도 있다.',
          emoji: '💡',
          scores: { 'problem-solver': 2, 'direct-confronter': 1 },
        },
      ],
    },
    {
      id: 'q13',
      question: '화해 후, 똑같은 문제로 다시 다투게 되었을 때 당신의 반응은?',
      options: [
        {
          id: 'q13_a',
          text: '왜 같은 문제로 또 싸우는지 원인을 깊게 파고든다.',
          emoji: '🤔', // Changed from 🧠 to 🤔 for deep thinking/questioning
          scores: { 'logical-negotiator': 3, 'problem-solver': 3 },
        },
        {
          id: 'q13_b',
          text: '실망하고 지친다. 관계에 회의감을 느낀다.',
          emoji: '😔',
          scores: { 'silent-withdrawer': 2, 'peace-maker': 2 },
        },
        {
          id: 'q13_c',
          text: '솔직히 짜증 나지만, 다시 잘 해결해 보려 노력한다.',
          emoji: '😤',
          scores: { 'direct-confronter': 2, 'emotional-expresser': 2 },
        },
        {
          id: 'q13_d',
          text: '이것도 우리의 과정이라고 생각하며, 긍정적으로 해결하려 한다.',
          emoji: '👍',
          scores: { 'compromise-seeker': 3, 'humor-diffuser': 2 },
        },
      ],
    },
    {
      id: 'q14',
      question: '연인과의 다툼이 끝나고 화해했을 때, 당신이 느끼는 가장 큰 감정은?',
      options: [
        {
          id: 'q14_a',
          text: '문제가 해결되어 속 시원하다.',
          emoji: '🥳',
          scores: { 'problem-solver': 3, 'direct-confronter': 3 },
        },
        {
          id: 'q14_b',
          text: '다시는 싸우지 않기를 바라는 안도감.',
          emoji: '😌',
          scores: { 'peace-maker': 3, 'silent-withdrawer': 2 },
        },
        {
          id: 'q14_c',
          text: '서로에 대해 더 이해하게 된 뿌듯함.',
          emoji: '💖',
          scores: { 'logical-negotiator': 2, 'compromise-seeker': 3 },
        },
        {
          id: 'q14_d',
          text: '화해해서 기쁘고 연인에게 더 애정이 샘솟는다.',
          emoji: '🥰',
          scores: { 'emotional-expresser': 3, 'humor-diffuser': 2 },
        },
      ],
    },
    {
      id: 'q15',
      question: '연인과의 갈등을 통해 당신이 배우는 점은 무엇인가요?',
      options: [
        {
          id: 'q15_a',
          text: '문제 해결 능력과 합리적인 사고 방식.',
          emoji: '💡',
          scores: { 'logical-negotiator': 3, 'problem-solver': 3 },
        },
        {
          id: 'q15_b',
          text: '서로의 다름을 인정하고 이해하는 방법.',
          emoji: '🤝',
          scores: { 'compromise-seeker': 3, 'peace-maker': 2 },
        },
        {
          id: 'q15_c',
          text: '감정 표현의 중요성과 솔직함.',
          emoji: '🗣️',
          scores: { 'emotional-expresser': 3, 'direct-confronter': 2 },
        },
        {
          id: 'q15_d',
          text: '싸움이 관계에 미치는 부정적인 영향을 줄이는 법.',
          emoji: '🧘‍♀️',
          scores: { 'silent-withdrawer': 2, 'humor-diffuser': 1 },
        },
      ],
    },
    {
      id: 'q16',
      question: '당신에게 있어 최고의 화해 방법은?',
      options: [
        {
          id: 'q16_a',
          text: '논리적으로 문제를 분석하고 명확한 해결책을 찾는 것.',
          emoji: '📝',
          scores: { 'logical-negotiator': 3, 'problem-solver': 3 },
        },
        {
          id: 'q16_b',
          text: '서로 먼저 사과하고 더 이상 다투지 않는 것.',
          emoji: '🙏',
          scores: { 'peace-maker': 3, 'silent-withdrawer': 2 },
        },
        {
          id: 'q16_c',
          text: '솔직하게 감정을 다 털어놓고 속 시원하게 푸는 것.',
          emoji: '🗣️',
          scores: { 'direct-confronter': 3, 'emotional-expresser': 3 },
        },
        {
          id: 'q16_d',
          text: '유머나 애교로 분위기를 풀고 자연스럽게 화해하는 것.',
          emoji: '🤣',
          scores: { 'humor-diffuser': 3, 'compromise-seeker': 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'direct-confronter',
      title: '직진 해결사형',
      description:
        '당신은 연인과 다툼이 생겼을 때, 문제를 회피하지 않고 즉시 직면하여 해결하려 합니다.',
      detailedDescription:
        '문제를 발견하면 바로 대화를 시도하며, **솔직하고 직접적으로 자신의 의견과 감정을 표현**합니다. 갈등을 오래 끌기 싫어하며, 빠른 해결을 통해 관계의 답답함을 해소하려 합니다. 이러한 직진성은 오해를 줄이고 관계를 투명하게 만들지만, 때로는 너무 강압적이거나 공격적으로 느껴질 수 있으며, 연인이 감정적으로 준비되지 않았을 때 부담을 줄 수 있습니다.',
      emoji: '🗣️',
      color: '#FF4500', // OrangeRed
      traits: ['솔직함', '직접적', '즉각적 해결', '단호함', '투명성 중시', '문제 직면'],
      compatibility: {
        best: ['문제 해결 주도형', '감정 표현형'],
        good: ['논리적 협상가형'],
        avoid: ['침묵 회피형', '평화주의형'],
      },
      recommendations: {
        activities: ['감정 조절 연습', '상대방의 입장 이해하기', '말하기 전 한 번 더 생각하기'],
        tips: [
          '직접적인 소통은 좋지만, 연인의 감정을 먼저 살피고 대화할 타이밍을 조절하세요.',
          '때로는 한 발 물러서서 연인에게도 생각할 시간을 주는 것이 필요해요.',
          '문제 해결 후에는 따뜻한 말과 행동으로 관계를 다독여 주세요.',
        ],
      },
    },
    {
      id: 'peace-maker',
      title: '평화주의형',
      description: '당신은 연인과의 다툼을 싫어하며, 관계의 평화를 최우선으로 생각합니다.',
      detailedDescription:
        '갈등 상황에서 **싸움 자체를 피하고 싶어 하며, 웬만하면 연인의 의견에 따르거나 양보**하여 분위기를 좋게 만들려 노력합니다. 갈등으로 인해 관계가 손상될까 봐 걱정하며, 불편한 감정을 드러내기보다 숨기는 편입니다. 이러한 태도는 당장의 평화를 가져오지만, 해결되지 않은 불만이 쌓이거나, 자신의 의견이 무시당한다고 느낄 수 있습니다.',
      emoji: '🕊️',
      color: '#ADD8E6', // Light Blue
      traits: ['평화 지향', '온화함', '양보적', '순응적', '관계 중시', '갈등 회피'],
      compatibility: {
        best: ['유머 완화형', '타협 추구형'],
        good: ['논리적 협상가형'],
        avoid: ['직진 해결사형', '감정 표현형'],
      },
      recommendations: {
        activities: ['자신의 의견 표현 연습', '갈등 대처법 학습', '불만 쌓아두지 않고 대화 시도'],
        tips: [
          '평화도 중요하지만, 자신의 감정과 의견을 솔직하게 표현하는 것이 장기적으로 관계에 좋아요.',
          '작은 불만이라도 쌓이면 큰 싸움으로 이어질 수 있으니 대화를 시도하세요.',
          '갈등 해결 후에는 연인과 함께 편안한 시간을 보내며 관계를 회복하세요.',
        ],
      },
    },
    {
      id: 'logical-negotiator',
      title: '논리적 협상가형',
      description: '당신은 연인과의 다툼에서 감정보다는 논리와 합리적인 해결을 추구합니다.',
      detailedDescription:
        '문제가 발생하면 **감정을 배제하고 원인을 분석하며, 객관적인 사실과 논리를 바탕으로 해결책을 찾으려** 합니다. 연인과 차분하고 이성적인 대화를 통해 합리적인 결론에 도달하는 것을 중요하게 생각합니다. 이러한 접근 방식은 효율적인 해결을 돕지만, 때로는 연인의 감정을 간과하거나, 너무 차갑게 느껴져 관계를 건조하게 만들 수 있습니다.',
      emoji: '🧠',
      color: '#B0C4DE', // Light Steel Blue
      traits: ['논리적', '합리적', '분석적', '객관적', '이성적', '문제 해결 중심'],
      compatibility: {
        best: ['문제 해결 주도형', '직진 해결사형'],
        good: ['타협 추구형'],
        avoid: ['감정 표현형', '유머 완화형'],
      },
      recommendations: {
        activities: ['공감 능력 키우기', '감정 표현 연습', '상대방의 비언어적 표현 이해하기'],
        tips: [
          '논리적 해결도 중요하지만, 연인의 감정을 먼저 헤아려 주는 것이 좋아요.',
          '대화 중에는 연인의 말을 끊지 않고 경청하는 태도를 보이세요.',
          '해결 후에는 서로의 감정을 보듬어주는 시간을 가지세요.',
        ],
      },
    },
    {
      id: 'emotional-expresser',
      title: '감정 표현형',
      description:
        '당신은 연인과 다툼이 생겼을 때, 자신의 감정을 솔직하고 때로는 격하게 표현합니다.',
      detailedDescription:
        '서운함, 분노, 슬픔 등 **자신의 감정을 숨기지 않고 바로 표출하는 편**입니다. 연인이 자신의 감정을 알아주고 공감해 주기를 바라며, 감정을 충분히 해소해야 문제가 해결된다고 생각합니다. 이러한 솔직함은 관계를 투명하게 만들지만, 때로는 감정적인 싸움으로 번지거나, 연인이 당신의 감정 표출에 압도당할 수 있습니다.',
      emoji: '😢',
      color: '#FFB6C1', // Light Pink
      traits: ['감정적', '솔직함', '표현력', '공감 욕구', '투명성', '개방적'],
      compatibility: {
        best: ['직진 해결사형', '유머 완화형'],
        good: ['문제 해결 주도형'],
        avoid: ['침묵 회피형', '논리적 협상가형'],
      },
      recommendations: {
        activities: ['감정 조절 기술 습득', '차분하게 감정 전달하는 연습', '연인의 감정 읽기'],
        tips: [
          '감정 표현은 중요하지만, 상대방을 비난하거나 상처 주는 말은 삼가세요.',
          '때로는 잠시 감정을 가라앉히고 대화하는 것이 더 효과적일 수 있어요.',
          '감정을 표현한 후에는 연인의 이야기를 경청하는 태도를 보이세요.',
        ],
      },
    },
    {
      id: 'silent-withdrawer',
      title: '침묵 회피형',
      description: '당신은 연인과 다툼이 생기면 대화를 회피하고 침묵으로 일관하는 경향이 있습니다.',
      detailedDescription:
        '갈등 상황에서 불편함을 느끼면 **대화 자체를 피하거나, 연락을 끊는 등 잠수**를 타기도 합니다. 감정을 소모하는 싸움을 싫어하고, 혼자 생각할 시간이 필요하다고 느낍니다. 이러한 태도는 스스로 감정을 정리하는 데 도움이 될 수 있지만, 연인에게는 무관심이나 회피로 느껴져 관계를 더욱 악화시킬 수 있습니다.',
      emoji: '🤫',
      color: '#708090', // Slate Gray
      traits: ['회피적', '내향적', '침묵 선호', '갈등 기피', '사색적', '감정 소모 싫어함'],
      compatibility: {
        best: ['평화주의형', '논리적 협상가형'],
        good: ['타협 추구형'],
        avoid: ['직진 해결사형', '감정 표현형'],
      },
      recommendations: {
        activities: [
          '감정 표현 연습',
          '연인에게 침묵의 의미 설명하기',
          '갈등 회피의 근본 원인 파악',
        ],
        tips: [
          '혼자만의 시간도 중요하지만, 연인에게 언제쯤 대화할 준비가 되는지 알려주는 것이 좋아요.',
          '침묵은 오해를 키울 수 있으니, 감정을 정리한 후에는 먼저 다가가 대화를 시도하세요.',
          '연인과의 대화를 두려워하지 말고, 관계 발전을 위한 과정이라고 생각하세요.',
        ],
      },
    },
    {
      id: 'compromise-seeker',
      title: '타협 추구형',
      description:
        '당신은 연인과의 다툼에서 서로의 의견을 조율하고 타협점을 찾는 것을 중요하게 생각합니다.',
      detailedDescription:
        '어느 한쪽의 일방적인 승리보다는 **서로가 조금씩 양보하여 모두가 만족할 수 있는 중간 지점**을 찾으려 노력합니다. 유연하고 개방적인 태도로 연인의 의견을 경청하며, 관계의 조화와 균형을 중요하게 여깁니다. 이러한 태도는 갈등을 원만하게 해결하는 데 도움을 주지만, 때로는 자신의 진짜 의견을 충분히 표현하지 못하거나, 중요한 문제에서 흐지부지 넘어갈 수 있습니다.',
      emoji: '⚖️',
      color: '#98FB98', // Pale Green
      traits: ['타협적', '유연함', '조화 추구', '개방적', '경청', '협력적'],
      compatibility: {
        best: ['논리적 협상가형', '평화주의형'],
        good: ['유머 완화형'],
        avoid: ['직진 해결사형', '문제 해결 주도형'],
      },
      recommendations: {
        activities: [
          '자신의 의견 명확히 표현 연습',
          '중요한 문제와 사소한 문제 구분하기',
          '타협이 아닌 최선의 해결책 찾기',
        ],
        tips: [
          '타협도 좋지만, 때로는 자신의 핵심 가치나 중요한 부분은 양보하지 않고 지켜내는 것도 필요해요.',
          '타협하기 전에 서로의 의견을 충분히 이해하는 시간을 가지세요.',
          '타협점을 찾은 후에는 서로의 노력을 인정하고 칭찬해 주세요.',
        ],
      },
    },
    {
      id: 'humor-diffuser',
      title: '유머 완화형',
      description: '당신은 연인과의 다툼이 생기면 유머나 애교를 사용하여 분위기를 전환하려 합니다.',
      detailedDescription:
        '심각한 분위기를 싫어하고, **재치 있는 농담이나 애교 섞인 행동으로 연인의 화를 풀어주려** 노력합니다. 갈등 상황 자체를 가볍게 여기고, 유쾌한 방식으로 문제를 해결하려 합니다. 이러한 방식은 긴장감을 완화하고 관계를 부드럽게 만들지만, 때로는 연인이 자신의 감정을 무시당한다고 느끼거나, 문제가 제대로 해결되지 않고 넘어갈 수 있습니다.',
      emoji: '😂',
      color: '#FFD700', // Gold
      traits: ['유머러스', '낙천적', '재치', '분위기 전환', '긍정적', '애교'],
      compatibility: {
        best: ['감정 표현형', '타협 추구형'],
        good: ['평화주의형'],
        avoid: ['논리적 협상가형', '침묵 회피형'],
      },
      recommendations: {
        activities: [
          '유머가 통하지 않을 때의 대처법 연습',
          '감정 표현 능력 향상',
          '상대방의 진지함 이해하기',
        ],
        tips: [
          '유머도 좋지만, 연인이 진지하게 이야기하고 싶어 할 때는 경청하는 태도를 보이세요.',
          '문제를 회피하는 수단으로 유머를 사용하지 않도록 주의하세요.',
          '유머로 풀기 어려운 문제는 진지하게 대화하는 용기도 필요해요.',
        ],
      },
    },
    {
      id: 'problem-solver',
      title: '문제 해결 주도형',
      description:
        '당신은 연인과의 다툼에서 문제의 원인을 파악하고, 실질적인 해결책을 찾는 데 주력합니다.',
      detailedDescription:
        '갈등이 발생하면 **감정 싸움보다는 핵심 원인을 분석하고, 재발 방지를 위한 구체적인 해결책**을 제시하려 합니다. 명확하고 효율적인 문제 해결을 통해 관계가 더욱 단단해질 수 있다고 믿습니다. 이러한 주도성은 관계 발전에 도움이 되지만, 때로는 연인의 감정적인 부분을 놓치거나, 해결책을 강요하는 것처럼 느껴질 수 있습니다.',
      emoji: '📈',
      color: '#4CAF50', // Green
      traits: ['문제 해결 중심', '분석적', '효율적', '미래 지향적', '실용적', '주도적'],
      compatibility: {
        best: ['직진 해결사형', '논리적 협상가형'],
        good: ['감정 표현형'],
        avoid: ['침묵 회피형', '유머 완화형'],
      },
      recommendations: {
        activities: ['공감 능력 향상', '연인의 의견 경청 연습', '해결책 제시 전 충분한 대화'],
        tips: [
          '문제 해결도 중요하지만, 연인의 감정을 먼저 보듬어주는 것이 좋아요.',
          '해결책을 강요하기보다 함께 논의하고 합의점을 찾아나가세요.',
          '해결 후에는 서로의 노력을 인정하고 긍정적인 관계를 유지하세요.',
        ],
      },
    },
  ],
};
