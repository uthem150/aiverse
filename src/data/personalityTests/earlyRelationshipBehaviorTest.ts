import type { PersonalityTestData } from '@/types/personalityTest';

export const earlyRelationshipBehaviorTestData: PersonalityTestData = {
  id: 'early-relationship-behavior-test',
  title: '🐣 연애 초기 행동 패턴 테스트',
  description:
    '썸 탈 때, 막 연애를 시작했을 때 나는 어떤 모습일까? 연애 초기의 당신의 행동 패턴을 알아보고 더 설레는 연애를 만들어가세요!',
  category: 'romance',
  resultTypes: [
    'enthusiastic-initiator', // 열정적인 시작형
    'careful-observer', // 신중한 관찰형
    'affectionate-giver', // 애정 표현형
    'independent-maintainer', // 독립 유지형
    'future-planner', // 미래 계획형
    'present-enjoyer', // 현재 즐김형
    'social-sharer', // 사회적 공유형
    'private-keeper', // 사생활 보호형
  ],
  questions: [
    {
      id: 'q1',
      question: '썸을 타는 상대에게 호감이 생겼을 때, 당신의 첫 행동은?',
      options: [
        {
          id: 'q1_a',
          text: '적극적으로 연락하거나 만남을 제안한다.',
          emoji: '💬',
          scores: { 'enthusiastic-initiator': 3, 'social-sharer': 2 },
        },
        {
          id: 'q1_b',
          text: '상대방의 반응을 살피며 조심스럽게 다가간다.',
          emoji: '👀',
          scores: { 'careful-observer': 3, 'private-keeper': 1 },
        },
        {
          id: 'q1_c',
          text: '주변 사람들에게 물어보거나 정보를 수집한다.',
          emoji: '🔍',
          scores: { 'future-planner': 2, 'social-sharer': 1 },
        },
        {
          id: 'q1_d',
          text: '일단 현재의 즐거움에 집중하며 자연스러운 흐름을 기다린다.',
          emoji: '🥳',
          scores: { 'present-enjoyer': 3, 'independent-maintainer': 2 },
        },
      ],
    },
    {
      id: 'q2',
      question: '연애 초기에 연락 빈도는 어느 정도가 적당하다고 생각하나요?',
      options: [
        {
          id: 'q2_a',
          text: '시도 때도 없이 연락하며 서로의 일상을 공유하고 싶다.',
          emoji: '📱',
          scores: { 'enthusiastic-initiator': 3, 'affectionate-giver': 2, 'social-sharer': 1 },
        },
        {
          id: 'q2_b',
          text: '적당한 선을 유지하며 답장이 오면 답장하는 정도.',
          emoji: '⚖️',
          scores: { 'independent-maintainer': 3, 'private-keeper': 2, 'careful-observer': 1 },
        },
        {
          id: 'q2_c',
          text: '필요할 때만 연락하고, 만났을 때 집중하는 것이 중요하다.',
          emoji: '🤫',
          scores: { 'private-keeper': 3, 'independent-maintainer': 2 },
        },
        {
          id: 'q2_d',
          text: '미래 계획이나 중요한 이야기를 할 때 주로 연락한다.',
          emoji: '🗓️',
          scores: { 'future-planner': 3, 'careful-observer': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '첫 데이트에서 가장 중요하게 생각하는 것은?',
      options: [
        {
          id: 'q3_a',
          text: '상대방에게 좋은 인상을 주고 관계를 발전시키는 것.',
          emoji: '✨',
          scores: { 'enthusiastic-initiator': 3, 'affectionate-giver': 2 },
        },
        {
          id: 'q3_b',
          text: '상대방의 성격과 가치관을 면밀히 파악하는 것.',
          emoji: '🔍',
          scores: { 'careful-observer': 3, 'future-planner': 2 },
        },
        {
          id: 'q3_c',
          text: '어색함 없이 즐겁고 행복한 시간을 보내는 것.',
          emoji: '🥳',
          scores: { 'present-enjoyer': 3, 'social-sharer': 2 },
        },
        {
          id: 'q3_d',
          text: '너무 깊은 이야기보다 편안하고 가벼운 대화를 나누는 것.',
          emoji: '😌',
          scores: { 'independent-maintainer': 2, 'private-keeper': 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: '연인이 보고 싶을 때, 당신의 행동은?',
      options: [
        {
          id: 'q4_a',
          text: '바로 연락해서 보고 싶다고 표현하거나 만나러 간다.',
          emoji: '🏃‍♀️',
          scores: { 'enthusiastic-initiator': 3, 'affectionate-giver': 3 },
        },
        {
          id: 'q4_b',
          text: '참고 있다가 나중에 만났을 때 은근히 티를 낸다.',
          emoji: '🤫',
          scores: { 'private-keeper': 3, 'careful-observer': 2 },
        },
        {
          id: 'q4_c',
          text: '괜히 연락했다가 상대방이 부담스러워할까 봐 망설인다.',
          emoji: '😟',
          scores: { 'independent-maintainer': 2, 'careful-observer': 1 },
        },
        {
          id: 'q4_d',
          text: '보고 싶다는 감정보다는 다음 만남 계획을 생각한다.',
          emoji: '🗓️',
          scores: { 'future-planner': 3 },
        },
      ],
    },
    {
      id: 'q5',
      question: '연애 초기에 주변 사람들에게 연애 사실을 알리는 시기는?',
      options: [
        {
          id: 'q5_a',
          text: '연애 시작하자마자 바로 자랑하고 싶다.',
          emoji: '📢',
          scores: { 'social-sharer': 3, 'enthusiastic-initiator': 2 },
        },
        {
          id: 'q5_b',
          text: '관계가 어느 정도 안정되면 그때 알린다.',
          emoji: '⏳',
          scores: { 'careful-observer': 3, 'future-planner': 2 },
        },
        {
          id: 'q5_c',
          text: '굳이 알릴 필요성을 못 느낀다. 사생활은 존중되어야 한다.',
          emoji: '🔒',
          scores: { 'private-keeper': 3, 'independent-maintainer': 2 },
        },
        {
          id: 'q5_d',
          text: '자연스럽게 알게 되면 괜찮지만, 내가 먼저 말하지는 않는다.',
          emoji: '🚶‍♀️',
          scores: { 'present-enjoyer': 2, 'private-keeper': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '연인에게 서운한 점이 생겼을 때, 연애 초기에는 어떻게 표현하나요?',
      options: [
        {
          id: 'q6_a',
          text: '바로 솔직하게 이야기해서 오해를 푼다.',
          emoji: '🗣️',
          scores: { 'enthusiastic-initiator': 2, 'affectionate-giver': 1 },
        },
        {
          id: 'q6_b',
          text: '혼자 속으로 생각하며 상대방을 더 지켜본다.',
          emoji: '🤔',
          scores: { 'careful-observer': 3, 'private-keeper': 2 },
        },
        {
          id: 'q6_c',
          text: '괜찮은 척하지만, 은근히 서운한 티를 낸다.',
          emoji: '😑',
          scores: { 'independent-maintainer': 2, 'private-keeper': 1 },
        },
        {
          id: 'q6_d',
          text: '서운한 감정보다는 관계의 미래에 미칠 영향을 먼저 생각한다.',
          emoji: '📊',
          scores: { 'future-planner': 3 },
        },
      ],
    },
    {
      id: 'q7',
      question: '연인과의 미래에 대해 어느 정도 생각하는 편인가요?',
      options: [
        {
          id: 'q7_a',
          text: '초반부터 미래를 진지하게 그려보는 편이다.',
          emoji: '📈',
          scores: { 'future-planner': 3, 'careful-observer': 2 },
        },
        {
          id: 'q7_b',
          text: '미래보다 현재의 즐거움에 충실하고 싶다.',
          emoji: '🎉',
          scores: { 'present-enjoyer': 3, 'independent-maintainer': 2 },
        },
        {
          id: 'q7_c',
          text: '아직은 잘 모르겠다. 더 알아가면서 생각해보고 싶다.',
          emoji: '🤷‍♀️',
          scores: { 'careful-observer': 2, 'private-keeper': 1 },
        },
        {
          id: 'q7_d',
          text: '주변 사람들에게 연애 조언을 구하며 미래를 상상한다.',
          emoji: '🗣️',
          scores: { 'social-sharer': 3 },
        },
      ],
    },
    {
      id: 'q8',
      question: '연인에게 애정 표현을 얼마나 하는 편인가요?',
      options: [
        {
          id: 'q8_a',
          text: '아낌없이 표현한다. 스킨십도 좋아하는 편이다.',
          emoji: '💖',
          scores: { 'affectionate-giver': 3, 'enthusiastic-initiator': 2, 'social-sharer': 1 },
        },
        {
          id: 'q8_b',
          text: '아직은 조심스럽다. 표현은 최대한 자제하는 편이다.',
          emoji: '🤫',
          scores: { 'private-keeper': 3, 'careful-observer': 2 },
        },
        {
          id: 'q8_c',
          text: '상대방이 표현하는 만큼 나도 표현하는 편이다.',
          emoji: '⚖️',
          scores: { 'independent-maintainer': 3, 'present-enjoyer': 1 },
        },
        {
          id: 'q8_d',
          text: '적절한 시기와 방법에 대해 고민하고 표현한다.',
          emoji: '🤔',
          scores: { 'future-planner': 2, 'careful-observer': 1 },
        },
      ],
    },
    {
      id: 'q9',
      question: '연애 초기에 당신의 일상은 어떻게 변하나요?',
      options: [
        {
          id: 'q9_a',
          text: '연인을 중심으로 일상이 많이 바뀐다.',
          emoji: '🔄',
          scores: { 'affectionate-giver': 3, 'enthusiastic-initiator': 2 },
        },
        {
          id: 'q9_b',
          text: '연애를 해도 내 일상은 크게 변하지 않는다.',
          emoji: '🧘‍♀️',
          scores: { 'independent-maintainer': 3, 'private-keeper': 2 },
        },
        {
          id: 'q9_c',
          text: '연애도 중요하지만, 자기계발 등 개인적인 시간도 중요하게 생각한다.',
          emoji: '📚',
          scores: { 'future-planner': 2, 'careful-observer': 1 },
        },
        {
          id: 'q9_d',
          text: '새로운 사람들을 만나고 연인과 함께 즐기는 시간이 늘어난다.',
          emoji: '🥳',
          scores: { 'present-enjoyer': 2, 'social-sharer': 3 },
        },
      ],
    },
    {
      id: 'q10',
      question: '연인에게 푹 빠졌을 때, 당신의 행동은?',
      options: [
        {
          id: 'q10_a',
          text: '온통 연인 생각뿐이다. 적극적으로 애정을 갈구한다.',
          emoji: '😍',
          scores: { 'affectionate-giver': 3, 'enthusiastic-initiator': 3 },
        },
        {
          id: 'q10_b',
          text: '티를 내지 않으려 노력하지만, 은근히 행복해한다.',
          emoji: '😊',
          scores: { 'private-keeper': 3, 'careful-observer': 2 },
        },
        {
          id: 'q10_c',
          text: '균형을 유지하려 노력하며, 너무 빠지지 않으려 한다.',
          emoji: '⚖️',
          scores: { 'independent-maintainer': 3, 'future-planner': 1 },
        },
        {
          id: 'q10_d',
          text: '연인과 함께 할 수 있는 즐거운 계획을 세우는 데 집중한다.',
          emoji: '🎉',
          scores: { 'present-enjoyer': 3, 'social-sharer': 2 },
        },
      ],
    },
    {
      id: 'q11',
      question: '연애 초기에 기념일이나 이벤트에 대한 당신의 생각은?',
      options: [
        {
          id: 'q11_a',
          text: '매우 중요하게 생각하고 열정적으로 준비한다.',
          emoji: '🎁',
          scores: { 'affectionate-giver': 3, 'enthusiastic-initiator': 2 },
        },
        {
          id: 'q11_b',
          text: '상대방이 원하면 맞춰주지만, 굳이 내가 먼저 나서지는 않는다.',
          emoji: '🤷‍♀️',
          scores: { 'independent-maintainer': 2, 'private-keeper': 1 },
        },
        {
          id: 'q11_c',
          text: '미래를 위한 투자라고 생각하고 장기적인 관점에서 접근한다.',
          emoji: '📈',
          scores: { 'future-planner': 3 },
        },
        {
          id: 'q11_d',
          text: '지금 당장 즐거운 시간을 보내는 것이 더 중요하다.',
          emoji: '🥳',
          scores: { 'present-enjoyer': 3, 'social-sharer': 2 },
        },
      ],
    },
    {
      id: 'q12',
      question: '연인과의 관계에 대해 주변 사람들에게 얼마나 이야기하나요?',
      options: [
        {
          id: 'q12_a',
          text: '시시콜콜하게 다 이야기하고 조언을 구한다.',
          emoji: '🗣️',
          scores: { 'social-sharer': 3, 'affectionate-giver': 1 },
        },
        {
          id: 'q12_b',
          text: '거의 이야기하지 않는다. 매우 사적인 부분이라고 생각한다.',
          emoji: '🔒',
          scores: { 'private-keeper': 3, 'independent-maintainer': 2 },
        },
        {
          id: 'q12_c',
          text: '필요한 부분만 간략하게 이야기하고, 혼자 생각한다.',
          emoji: '🤔',
          scores: { 'careful-observer': 3, 'future-planner': 1 },
        },
        {
          id: 'q12_d',
          text: '재미있는 에피소드만 공유하며 가볍게 이야기한다.',
          emoji: '😂',
          scores: { 'present-enjoyer': 2, 'social-sharer': 2 },
        },
      ],
    },
    {
      id: 'q13',
      question: '연인과 다툰 후, 연애 초기에는 어떻게 대처하나요?',
      options: [
        {
          id: 'q13_a',
          text: '먼저 사과하거나 화해를 시도한다.',
          emoji: '🤝',
          scores: { 'enthusiastic-initiator': 3, 'affectionate-giver': 2 },
        },
        {
          id: 'q13_b',
          text: '일단 상황을 지켜보며 상대방의 반응을 기다린다.',
          emoji: '👀',
          scores: { 'careful-observer': 3, 'private-keeper': 2 },
        },
        {
          id: 'q13_c',
          text: '냉정하게 상황을 분석하고 문제점을 파악한다.',
          emoji: '🧠',
          scores: { 'future-planner': 3, 'independent-maintainer': 1 },
        },
        {
          id: 'q13_d',
          text: '다툼은 빨리 잊고 즐거운 일에 집중하려 한다.',
          emoji: '🥳',
          scores: { 'present-enjoyer': 3, 'social-sharer': 2 },
        },
      ],
    },
    {
      id: 'q14',
      question: '연인과 함께 하는 새로운 경험에 대한 당신의 태도는?',
      options: [
        {
          id: 'q14_a',
          text: '적극적으로 새로운 것을 시도하고 즐긴다.',
          emoji: '🚀',
          scores: { 'enthusiastic-initiator': 3, 'present-enjoyer': 2, 'social-sharer': 1 },
        },
        {
          id: 'q14_b',
          text: '새로운 경험보다는 익숙하고 편안한 것을 선호한다.',
          emoji: '😌',
          scores: { 'independent-maintainer': 2, 'private-keeper': 2, 'careful-observer': 1 },
        },
        {
          id: 'q14_c',
          text: '미래 관계에 도움이 되는 경험인지 신중하게 판단한다.',
          emoji: '🤔',
          scores: { 'future-planner': 3, 'careful-observer': 2 },
        },
        {
          id: 'q14_d',
          text: '즐거운 추억을 만들 수 있다면 뭐든지 좋다.',
          emoji: '💖',
          scores: { 'affectionate-giver': 3, 'present-enjoyer': 3 },
        },
      ],
    },
    {
      id: 'q15',
      question: '연애 초기, 연인에게 바라는 가장 중요한 것은?',
      options: [
        {
          id: 'q15_a',
          text: '나에게 아낌없이 표현해주는 사랑과 관심',
          emoji: '❤️',
          scores: { 'affectionate-giver': 3, 'enthusiastic-initiator': 2 },
        },
        {
          id: 'q15_b',
          text: '나의 개인적인 공간과 시간을 존중해주는 것',
          emoji: '🔒',
          scores: { 'independent-maintainer': 3, 'private-keeper': 3 },
        },
        {
          id: 'q15_c',
          text: '미래를 함께 그려나갈 수 있는 진지한 모습',
          emoji: '📈',
          scores: { 'future-planner': 3, 'careful-observer': 2 },
        },
        {
          id: 'q15_d',
          text: '함께 있을 때 항상 즐겁고 행복한 분위기',
          emoji: '🥳',
          scores: { 'present-enjoyer': 3, 'social-sharer': 3 },
        },
      ],
    },
    {
      id: 'q16',
      question: '당신의 연애 초기 행동 패턴을 한 단어로 표현한다면?',
      options: [
        {
          id: 'q16_a',
          text: '적극적인 (Proactive)',
          emoji: '🚀',
          scores: { 'enthusiastic-initiator': 3, 'social-sharer': 3 },
        },
        {
          id: 'q16_b',
          text: '신중한 (Cautious)',
          emoji: '🤔',
          scores: { 'careful-observer': 3, 'private-keeper': 3 },
        },
        {
          id: 'q16_c',
          text: '충실한 (Devoted)',
          emoji: '💖',
          scores: { 'affectionate-giver': 3, 'future-planner': 2 },
        },
        {
          id: 'q16_d',
          text: '자유로운 (Free-spirited)',
          emoji: '🍃',
          scores: { 'independent-maintainer': 3, 'present-enjoyer': 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'enthusiastic-initiator',
      title: '열정적인 시작형',
      description: '연애 초기에 당신은 불타는 열정으로 관계를 주도하고 싶어 합니다.',
      detailedDescription:
        '마음에 드는 상대에게 주저 없이 다가가고, 연인이 되면 아낌없이 애정을 표현하며 관계 발전에 적극적입니다. 데이트 제안, 연락, 이벤트 등 모든 면에서 먼저 움직이는 것을 좋아하며, 연애를 통해 큰 행복과 설렘을 느낍니다. 때로는 지나친 열정이 상대에게 부담을 주거나, 관계의 속도를 너무 빠르게 만들 수 있습니다.',
      emoji: '🚀',
      color: '#FF6347', // Tomato
      traits: ['적극적', '열정적', '주도적', '솔직함', '외향적', '긍정적'],
      compatibility: {
        best: ['신중한 관찰형', '사생활 보호형'],
        good: ['애정 표현형', '현재 즐김형'],
        avoid: ['독립 유지형', '미래 계획형'],
      },
      recommendations: {
        activities: [
          '새로운 데이트 코스 직접 찾아보기',
          '연인에게 서프라이즈 이벤트 해주기',
          '함께 활동적인 취미 즐기기',
        ],
        tips: [
          '상대방의 속도와 반응을 살피며 조절하는 연습을 하세요.',
          '너무 성급하게 관계를 발전시키려 하지 마세요.',
          '때로는 상대방이 주도할 기회를 주는 것도 좋습니다.',
        ],
      },
    },
    {
      id: 'careful-observer',
      title: '신중한 관찰형',
      description: '연애 초기에 당신은 상대방을 면밀히 관찰하며 신중하게 관계를 탐색합니다.',
      detailedDescription:
        '감정적으로 섣불리 움직이기보다, 상대방의 말과 행동, 성격, 가치관 등을 주의 깊게 관찰하고 파악하는 데 시간을 들입니다. 신뢰가 쌓이기 전까지는 자신의 속마음을 잘 드러내지 않으며, 안정적이고 확신이 들 때 비로소 마음을 여는 스타일입니다. 이 때문에 관계 발전이 더디거나, 상대방이 당신의 마음을 알기 어렵다고 느낄 수 있습니다.',
      emoji: '🔍',
      color: '#B0C4DE', // Light Steel Blue
      traits: ['신중함', '관찰력', '분석적', '내향적', '조심성', '침착함'],
      compatibility: {
        best: ['열정적인 시작형', '애정 표현형'],
        good: ['미래 계획형', '사생활 보호형'],
        avoid: ['현재 즐김형', '사회적 공유형'],
      },
      recommendations: {
        activities: [
          '연인과 진솔한 대화 시간 갖기',
          '속마음 일기 쓰기',
          '함께 조용한 활동 (독서 카페 등)',
        ],
        tips: [
          '너무 분석적으로만 접근하기보다 때로는 감정적인 교류를 시도하세요.',
          '상대방에게 당신의 생각과 감정을 조금 더 표현하는 연습을 하세요.',
          '관계 발전에 대한 확신이 들면 과감하게 나아갈 필요도 있습니다.',
        ],
      },
    },
    {
      id: 'affectionate-giver',
      title: '애정 표현형',
      description:
        '연애 초기에 당신은 아낌없이 애정을 표현하고 사랑을 주는 것을 행복으로 여깁니다.',
      detailedDescription:
        '사랑하는 사람에게 자신의 마음을 적극적으로 표현하고, 스킨십이나 선물, 다정한 말 등으로 사랑을 확인받고 싶어 합니다. 연인을 향한 헌신적인 마음이 강하며, 연인과의 관계를 최우선으로 생각하는 경향이 있습니다. 때로는 상대방이 당신의 애정을 부담스러워하거나, 당신이 너무 의존적이라고 느낄 수 있습니다.',
      emoji: '💖',
      color: '#FFB6C1', // Light Pink
      traits: ['애정 표현 풍부', '헌신적', '감성적', '다정함', '의존적 (긍정적)', '외향적'],
      compatibility: {
        best: ['독립 유지형', '신중한 관찰형'],
        good: ['열정적인 시작형', '현재 즐김형'],
        avoid: ['사생활 보호형', '미래 계획형'],
      },
      recommendations: {
        activities: ['손편지 써주기', '기념일 이벤트 정성껏 준비하기', '서로에게 칭찬 많이 해주기'],
        tips: [
          '상대방이 당신의 애정을 자연스럽게 받아들일 시간을 주세요.',
          '자신의 애정 표현 방식 외에 상대방의 표현 방식도 이해하려 노력하세요.',
          '때로는 연인보다 자신을 더 사랑하는 것도 중요해요.',
        ],
      },
    },
    {
      id: 'independent-maintainer',
      title: '독립 유지형',
      description: '연애 초기에 당신은 자신의 독립적인 공간과 시간을 중요하게 여깁니다.',
      detailedDescription:
        '연애를 시작해도 자신의 루틴과 개인적인 영역을 침범받고 싶어 하지 않습니다. 연인에게 지나치게 의존하기보다, 각자의 삶을 존중하며 함께하는 시간을 소중히 생각합니다. 안정적이고 여유로운 관계를 선호하며, 서로에게 충분한 자유를 주는 것을 중요하게 생각합니다. 이 때문에 연인이 당신을 차갑거나 무관심하다고 느낄 수 있습니다.',
      emoji: '🔒',
      color: '#98FB98', // Pale Green
      traits: ['독립적', '자율성 중시', '개인주의적', '담백함', '안정 추구', '현실적'],
      compatibility: {
        best: ['애정 표현형', '열정적인 시작형'],
        good: ['사생활 보호형', '현재 즐김형'],
        avoid: ['사회적 공유형', '미래 계획형'],
      },
      recommendations: {
        activities: [
          '각자 시간을 보낸 후 경험 공유하기',
          '함께 공동 취미 만들기 (단, 개인 영역 존중)',
          '주말에만 만나는 등 규칙적인 데이트',
        ],
        tips: [
          '연인에게 당신의 독립적인 성향을 명확히 전달하고 이해를 구하세요.',
          '가끔은 상대방에게 더 다가가서 의존적인 모습을 보여주는 것도 좋습니다.',
          '너무 개인적인 시간을 고집하기보다 함께하는 시간의 가치를 높이세요.',
        ],
      },
    },
    {
      id: 'future-planner',
      title: '미래 계획형',
      description: '연애 초기에 당신은 관계의 미래와 장기적인 계획을 중요하게 생각합니다.',
      detailedDescription:
        '연애를 시작하면 상대방과의 미래를 진지하게 고민하고, 관계가 어떻게 발전해나갈지 계획하는 것을 좋아합니다. 단순히 현재의 감정적인 만족보다, 장기적인 안정성과 비전을 중요하게 생각합니다. 신중하고 현실적인 면모가 강하지만, 때로는 지나친 미래 계획이 현재의 즐거움을 놓치게 하거나, 상대방에게 부담을 줄 수 있습니다.',
      emoji: '📈',
      color: '#808080', // Gray
      traits: ['미래 지향적', '계획적', '신중함', '현실적', '책임감', '논리적'],
      compatibility: {
        best: ['현재 즐김형', '독립 유지형'],
        good: ['신중한 관찰형', '사생활 보호형'],
        avoid: ['열정적인 시작형', '사회적 공유형'],
      },
      recommendations: {
        activities: [
          '함께 버킷리스트 작성하기',
          '미래에 대한 진지한 대화 나누기',
          '재정 계획 등 현실적인 부분 함께 고민하기',
        ],
        tips: [
          '미래도 중요하지만, 현재의 행복과 즐거움을 충분히 만끽하세요.',
          '모든 것을 계획하려 하기보다 때로는 즉흥적인 연애도 즐겨보세요.',
          '상대방에게 당신의 미래 계획을 너무 강요하지 마세요.',
        ],
      },
    },
    {
      id: 'present-enjoyer',
      title: '현재 즐김형',
      description: '연애 초기에 당신은 현재의 순간과 즐거움을 가장 중요하게 생각합니다.',
      detailedDescription:
        '복잡한 미래 고민이나 과거의 일에 얽매이기보다, 지금 이 순간 연인과 함께하는 시간을 최대한 즐기려 합니다. 긍정적이고 낙천적이며, 연애를 통해 얻는 행복과 유쾌함을 중요하게 생각합니다. 때로는 관계의 깊이가 부족하거나, 미래에 대한 책임감 있는 모습이 부족하다고 비춰질 수 있습니다.',
      emoji: '🥳',
      color: '#FFD700', // Gold
      traits: ['현재 지향적', '낙천적', '긍정적', '즐거움 추구', '즉흥적', '활발함'],
      compatibility: {
        best: ['미래 계획형', '신중한 관찰형'],
        good: ['열정적인 시작형', '애정 표현형'],
        avoid: ['사생활 보호형', '독립 유지형'],
      },
      recommendations: {
        activities: ['맛집 탐방', '여행 (즉흥적인 여행)', '다양한 이벤트 즐기기', '함께 게임하기'],
        tips: [
          '현재의 즐거움도 중요하지만, 미래에 대한 계획도 조금씩 고려해보세요.',
          '가끔은 진지한 대화를 통해 관계의 깊이를 더하는 시간을 가지세요.',
          '책임감 있는 모습을 보여주어 상대방에게 신뢰를 주세요.',
        ],
      },
    },
    {
      id: 'social-sharer',
      title: '사회적 공유형',
      description: '연애 초기에 당신은 연인과의 관계를 주변 사람들과 공유하고 싶어 합니다.',
      detailedDescription:
        '연애 사실을 주변에 알리고, 친구나 가족들과 연인을 함께 만나는 것을 좋아합니다. 자신의 연애를 자랑스러워하고, 주변의 축하와 지지를 통해 행복을 더 크게 느낍니다. 사교적이고 개방적인 성향이 강하지만, 때로는 연인의 사생활을 침해하거나, 주변의 시선에 너무 신경 쓸 수 있습니다.',
      emoji: '📢',
      color: '#FFA07A', // Light Salmon
      traits: ['사교적', '개방적', '소통 지향', '외향적', '공유 욕구', '친화력'],
      compatibility: {
        best: ['사생활 보호형', '독립 유지형'],
        good: ['열정적인 시작형', '현재 즐김형'],
        avoid: ['신중한 관찰형', '미래 계획형'],
      },
      recommendations: {
        activities: [
          '더블 데이트',
          '친구들과의 모임에 연인 데려가기',
          'SNS에 연인과 함께하는 사진 올리기 (상대방 동의하에)',
        ],
        tips: [
          '연인의 사생활을 존중하고, 상대방이 원치 않는 정보는 공유하지 마세요.',
          '주변의 시선보다 두 사람의 관계에 더 집중하세요.',
          '때로는 둘만의 오붓한 시간도 중요해요.',
        ],
      },
    },
    {
      id: 'private-keeper',
      title: '사생활 보호형',
      description: '연애 초기에 당신은 연인과의 사적인 영역을 보호하고 싶어 합니다.',
      detailedDescription:
        '연애를 시작해도 자신의 사생활과 연인과의 관계를 분리하여 생각하는 경향이 있습니다. 주변에 연애 사실을 잘 알리지 않거나, 데이트 사진 등을 SNS에 올리는 것에 소극적입니다. 신중하고 내향적인 성향이 강하지만, 때로는 상대방이 당신의 마음을 의심하거나, 비밀연애처럼 느껴질 수 있습니다.',
      emoji: '🔒',
      color: '#708090', // Slate Gray
      traits: ['사생활 중시', '내향적', '신중함', '비밀 유지', '경계심', '독립적'],
      compatibility: {
        best: ['사회적 공유형', '애정 표현형'],
        good: ['독립 유지형', '신중한 관찰형'],
        avoid: ['열정적인 시작형', '현재 즐김형'],
      },
      recommendations: {
        activities: [
          '둘만의 비밀 아지트 만들기',
          '조용한 데이트 코스 찾기',
          '함께 프라이빗한 취미 즐기기',
        ],
        tips: [
          '연인에게 당신의 사생활 중시 성향을 명확히 전달하세요.',
          '너무 꽁꽁 숨기기보다 연인에게는 충분히 마음을 열어주세요.',
          '상대방의 서운함을 이해하고 적절히 조절하는 연습을 하세요.',
        ],
      },
    },
  ],
};
