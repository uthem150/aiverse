import type { PersonalityTestData } from '@/types/personalityTest';

export const breakupCopingTestData: PersonalityTestData = {
  id: 'breakup-coping-test',
  title: '💔 이별 대처 유형 테스트',
  description:
    '이별 후 나는 어떻게 행동하고 감정을 처리할까? 당신의 이별 대처 유형을 알아보고 건강하게 이별을 극복하는 방법을 찾아보세요.',
  category: 'romance',
  resultTypes: [
    'analytical-processor', // 분석적 처리형
    'emotional-expresser', // 감정적 표현형
    'distraction-seeker', // 몰두/회피형
    'self-growth-focus', // 자기 성장형
    'social-supporter', // 사회적 지지형
    'practical-resetter', // 현실적 재정비형
    'internal-contemplator', // 내면 숙고형
    'optimistic-mover-on', // 낙천적 극복형
  ],
  questions: [
    {
      id: 'q1',
      question: '이별을 통보받은 직후, 당신의 첫 반응은?',
      options: [
        {
          id: 'q1_a',
          text: '왜? 무엇 때문에? 원인을 분석하고 납득하려 한다.',
          emoji: '🤔',
          scores: { 'analytical-processor': 3, 'internal-contemplator': 2 },
        },
        {
          id: 'q1_b',
          text: '눈물, 분노 등 감정을 주체할 수 없이 쏟아낸다.',
          emoji: '😭',
          scores: { 'emotional-expresser': 3, 'distraction-seeker': 1 },
        },
        {
          id: 'q1_c',
          text: '일단 현실을 부정하고 믿을 수 없다고 생각한다.',
          emoji: '🤯',
          scores: { 'distraction-seeker': 2, 'emotional-expresser': 2 },
        },
        {
          id: 'q1_d',
          text: '애써 침착하려 노력하며 상황을 받아들이려 한다.',
          emoji: '😌',
          scores: { 'practical-resetter': 2, 'self-growth-focus': 1, 'internal-contemplator': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '이별 후 가장 먼저 당신을 위로해주는 것은?',
      options: [
        {
          id: 'q2_a',
          text: '이별의 이유를 곱씹으며 혼자 정리하는 시간',
          emoji: '📝',
          scores: { 'analytical-processor': 3, 'internal-contemplator': 3 },
        },
        {
          id: 'q2_b',
          text: '친한 친구들과 만나 실컷 이야기하고 울고불고 하기',
          emoji: '🗣️',
          scores: { 'emotional-expresser': 3, 'social-supporter': 3 },
        },
        {
          id: 'q2_c',
          text: '새로운 취미를 시작하거나 바쁘게 일/공부에 몰두하기',
          emoji: '🏃',
          scores: { 'distraction-seeker': 3, 'practical-resetter': 2 },
        },
        {
          id: 'q2_d',
          text: '아직은 아무것도 하고 싶지 않고 그저 혼자 있고 싶다.',
          emoji: '🛋️',
          scores: { 'internal-contemplator': 3, 'emotional-expresser': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '전 연인의 SNS를 이별 후 어떻게 관리하나요?',
      options: [
        {
          id: 'q3_a',
          text: '팔로우 끊기, 차단 등 철저하게 정리하여 볼 일이 없게 한다.',
          emoji: '✂️',
          scores: { 'practical-resetter': 3, 'self-growth-focus': 2, 'optimistic-mover-on': 1 },
        },
        {
          id: 'q3_b',
          text: '아직 미련이 남아 가끔 들어가 보거나 염탐한다.',
          emoji: '👀',
          scores: { 'emotional-expresser': 2, 'internal-contemplator': 1 },
        },
        {
          id: 'q3_c',
          text: '관심 두지 않으려 노력하지만, 어쩌다 보이거나 누가 말하면 본다.',
          emoji: '🤷',
          scores: { 'distraction-seeker': 2, 'social-supporter': 1 },
        },
        {
          id: 'q3_d',
          text: '그냥 둔다. 나중에 필요하면 볼 수도 있다고 생각한다.',
          emoji: ' archives',
          scores: { 'analytical-processor': 2, 'internal-contemplator': 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: '이별 후 재회에 대한 당신의 생각은?',
      options: [
        {
          id: 'q4_a',
          text: '다시는 없을 일. 이별한 데는 다 이유가 있다.',
          emoji: '❌',
          scores: { 'practical-resetter': 3, 'self-growth-focus': 3, 'optimistic-mover-on': 2 },
        },
        {
          id: 'q4_b',
          text: '가능성만 있다면 다시 시도해보고 싶다.',
          emoji: '🥺',
          scores: { 'emotional-expresser': 3, 'internal-contemplator': 2 },
        },
        {
          id: 'q4_c',
          text: '논리적으로 따져봐서 나에게 더 이득이 된다면 고려한다.',
          emoji: '📊',
          scores: { 'analytical-processor': 3, 'practical-resetter': 1 },
        },
        {
          id: 'q4_d',
          text: '모르겠다. 일단 지금은 생각하고 싶지 않다.',
          emoji: '💭',
          scores: { 'distraction-seeker': 2, 'social-supporter': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '이별로 인해 가장 크게 느낀 감정은?',
      options: [
        {
          id: 'q5_a',
          text: '배신감, 분노 등 부정적인 감정',
          emoji: '😡',
          scores: { 'emotional-expresser': 2, 'distraction-seeker': 1 },
        },
        {
          id: 'q5_b',
          text: '아쉬움, 후회, 미련 등 슬픔과 미련이 뒤섞인 감정',
          emoji: '😔',
          scores: { 'emotional-expresser': 3, 'internal-contemplator': 2 },
        },
        {
          id: 'q5_c',
          text: '혼란스러움, 불확실함 등 이성적인 감정',
          emoji: '❓',
          scores: { 'analytical-processor': 3, 'internal-contemplator': 1 },
        },
        {
          id: 'q5_d',
          text: '별다른 감정 없음. 담담하게 받아들였다.',
          emoji: '😐',
          scores: { 'practical-resetter': 2, 'self-growth-focus': 1, 'optimistic-mover-on': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '이별 후 가장 중요하게 생각하는 것은?',
      options: [
        {
          id: 'q6_a',
          text: '왜 헤어졌는지 명확한 이유를 파악하는 것',
          emoji: '🔍',
          scores: { 'analytical-processor': 3, 'internal-contemplator': 2 },
        },
        {
          id: 'q6_b',
          text: '내 감정을 충분히 표현하고 해소하는 것',
          emoji: '🗣️',
          scores: { 'emotional-expresser': 3, 'social-supporter': 2 },
        },
        {
          id: 'q6_c',
          text: '이별의 아픔에서 벗어나 새롭게 시작하는 것',
          emoji: '🚀',
          scores: { 'distraction-seeker': 3, 'optimistic-mover-on': 3, 'self-growth-focus': 2 },
        },
        {
          id: 'q6_d',
          text: '나 자신을 돌아보고 더 나은 사람이 되는 것',
          emoji: '🌱',
          scores: { 'self-growth-focus': 3, 'practical-resetter': 2, 'internal-contemplator': 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: '이별 후 힘든 시기를 극복하는 나만의 방법은?',
      options: [
        {
          id: 'q7_a',
          text: '문제의 원인을 파악하고 재발 방지 대책을 세운다.',
          emoji: '📝',
          scores: { 'analytical-processor': 3, 'practical-resetter': 2 },
        },
        {
          id: 'q7_b',
          text: '울고불고, 술 마시고, 친구들에게 하소연하며 감정을 배출한다.',
          emoji: '😭',
          scores: { 'emotional-expresser': 3, 'social-supporter': 3 },
        },
        {
          id: 'q7_c',
          text: '운동, 취미, 게임 등 다른 것에 몰두하여 잊으려 한다.',
          emoji: '🎮',
          scores: { 'distraction-seeker': 3, 'optimistic-mover-on': 2 },
        },
        {
          id: 'q7_d',
          text: '혼자만의 시간을 가지며 내면을 성찰하고 정리한다.',
          emoji: '🧘',
          scores: { 'internal-contemplator': 3, 'self-growth-focus': 2 },
        },
      ],
    },
    {
      id: 'q8',
      question: '이별 후 주변 사람들의 위로에 대한 당신의 반응은?',
      options: [
        {
          id: 'q8_a',
          text: '괜찮은 척하며 감정을 숨기려 한다.',
          emoji: '😐',
          scores: { 'internal-contemplator': 2, 'practical-resetter': 1 },
        },
        {
          id: 'q8_b',
          text: '진심으로 고마워하며 위로를 받아들인다.',
          emoji: '🫂',
          scores: { 'emotional-expresser': 2, 'social-supporter': 3 },
        },
        {
          id: 'q8_c',
          text: '굳이 위로가 필요하다고 생각하지 않는다.',
          emoji: '🤷',
          scores: { 'analytical-processor': 2, 'self-growth-focus': 1 },
        },
        {
          id: 'q8_d',
          text: '괜찮다고 말하면서도 사실은 다른 것에 정신을 팔려 한다.',
          emoji: ' busy',
          scores: { 'distraction-seeker': 3, 'optimistic-mover-on': 2 },
        },
      ],
    },
    {
      id: 'q9',
      question: '이별 후 가장 먼저 바꾸고 싶은 것은?',
      options: [
        {
          id: 'q9_a',
          text: '나의 연애 패턴이나 문제점',
          emoji: '🔄',
          scores: { 'analytical-processor': 3, 'self-growth-focus': 3 },
        },
        {
          id: 'q9_b',
          text: '내 외모나 스타일',
          emoji: '💇',
          scores: { 'distraction-seeker': 2, 'optimistic-mover-on': 1 },
        },
        {
          id: 'q9_c',
          text: '생활 습관이나 주변 환경',
          emoji: '🏡',
          scores: { 'practical-resetter': 3, 'social-supporter': 1 },
        },
        {
          id: 'q9_d',
          text: '내 감정 상태나 마인드',
          emoji: '🧘',
          scores: { 'emotional-expresser': 2, 'internal-contemplator': 3 },
        },
      ],
    },
    {
      id: 'q10',
      question: '이별 후 연애 관련 콘텐츠(영화, 드라마 등)를 접하면?',
      options: [
        {
          id: 'q10_a',
          text: '그 관계를 분석하며 나 자신을 되돌아본다.',
          emoji: '🧐',
          scores: { 'analytical-processor': 3, 'internal-contemplator': 2 },
        },
        {
          id: 'q10_b',
          text: '감정 이입하여 슬픔에 빠지거나 분노한다.',
          emoji: '😭',
          scores: { 'emotional-expresser': 3 },
        },
        {
          id: 'q10_c',
          text: '굳이 찾아보지 않고 다른 흥미로운 것을 본다.',
          emoji: '🙅',
          scores: { 'distraction-seeker': 3, 'optimistic-mover-on': 2 },
        },
        {
          id: 'q10_d',
          text: '덤덤하게 시청하며 현실과의 차이를 인지한다.',
          emoji: '😐',
          scores: { 'practical-resetter': 2, 'self-growth-focus': 1 },
        },
      ],
    },
    {
      id: 'q11',
      question: '전 연인에게 미련이 남는 순간은?',
      options: [
        {
          id: 'q11_a',
          text: '밤에 혼자 있을 때 문득 추억이 떠오르면',
          emoji: '🌙',
          scores: { 'internal-contemplator': 3, 'emotional-expresser': 2 },
        },
        {
          id: 'q11_b',
          text: '함께 갔던 장소에 가게 될 때',
          emoji: '📍',
          scores: { 'emotional-expresser': 2, 'distraction-seeker': 1 },
        },
        {
          id: 'q11_c',
          text: '어떤 상황에서든 미련은 남지 않는다.',
          emoji: '🚫',
          scores: { 'practical-resetter': 3, 'self-growth-focus': 3, 'optimistic-mover-on': 2 },
        },
        {
          id: 'q11_d',
          text: '내가 분석한 결과, 아직 관계 정리가 덜 되었을 때',
          emoji: '📊',
          scores: { 'analytical-processor': 3, 'internal-contemplator': 1 },
        },
      ],
    },
    {
      id: 'q12',
      question: '이별 후 새로운 인연을 만나는 것에 대한 당신의 생각은?',
      options: [
        {
          id: 'q12_a',
          text: '아직은 시기상조. 충분히 혼자만의 시간을 가져야 한다.',
          emoji: '⏳',
          scores: { 'internal-contemplator': 3, 'self-growth-focus': 2 },
        },
        {
          id: 'q12_b',
          text: '빨리 새로운 사람을 만나 이 아픔을 잊고 싶다.',
          emoji: '🏃',
          scores: { 'distraction-seeker': 3, 'optimistic-mover-on': 3 },
        },
        {
          id: 'q12_c',
          text: '괜찮은 사람이 있다면 열린 마음으로 고려한다.',
          emoji: '🤝',
          scores: { 'practical-resetter': 3, 'social-supporter': 2 },
        },
        {
          id: 'q12_d',
          text: '다음 연애에서는 같은 실수를 반복하지 않도록 신중해야 한다.',
          emoji: '🧐',
          scores: { 'analytical-processor': 3, 'self-growth-focus': 2 },
        },
      ],
    },
    {
      id: 'q13',
      question: '이별 후 나의 감정 기복은?',
      options: [
        {
          id: 'q13_a',
          text: '롤러코스터처럼 기복이 심하다.',
          emoji: '🎢',
          scores: { 'emotional-expresser': 3, 'distraction-seeker': 1 },
        },
        {
          id: 'q13_b',
          text: '차분하게 감정을 통제하려 노력한다.',
          emoji: '🧘',
          scores: { 'internal-contemplator': 3, 'practical-resetter': 2 },
        },
        {
          id: 'q13_c',
          text: '이성적으로 판단하여 감정에 휘둘리지 않으려 한다.',
          emoji: '🧠',
          scores: { 'analytical-processor': 3, 'self-growth-focus': 2 },
        },
        {
          id: 'q13_d',
          text: '크게 동요하지 않고 빨리 평정을 되찾는다.',
          emoji: '😌',
          scores: { 'optimistic-mover-on': 3, 'practical-resetter': 2 },
        },
      ],
    },
    {
      id: 'q14',
      question: '이별 후 연애에 대한 가치관의 변화는?',
      options: [
        {
          id: 'q14_a',
          text: '더욱 신중하고 조심스러워졌다.',
          emoji: '⚠️',
          scores: { 'internal-contemplator': 2, 'analytical-processor': 2 },
        },
        {
          id: 'q14_b',
          text: '사랑은 역시 아프다는 것을 다시 깨달았다.',
          emoji: '💔',
          scores: { 'emotional-expresser': 2 },
        },
        {
          id: 'q14_c',
          text: '이별은 새로운 시작이라는 긍정적인 생각으로 바뀌었다.',
          emoji: '🚀',
          scores: { 'optimistic-mover-on': 3, 'self-growth-focus': 3 },
        },
        {
          id: 'q14_d',
          text: '크게 변한 것은 없고, 그저 한 번의 경험일 뿐이다.',
          emoji: ' nonchalant',
          scores: { 'practical-resetter': 3, 'distraction-seeker': 1 },
        },
      ],
    },
    {
      id: 'q15',
      question: '이별 후 전 연인에게 연락이 온다면?',
      options: [
        {
          id: 'q15_a',
          text: '차단했으니 받을 수 없다.',
          emoji: '🚫',
          scores: { 'practical-resetter': 3, 'self-growth-focus': 2 },
        },
        {
          id: 'q15_b',
          text: '혹시 재회? 기대하며 바로 받는다.',
          emoji: '📞',
          scores: { 'emotional-expresser': 3 },
        },
        {
          id: 'q15_c',
          text: '무슨 의도인지 분석하고 연락 여부를 결정한다.',
          emoji: '🧐',
          scores: { 'analytical-processor': 3, 'internal-contemplator': 2 },
        },
        {
          id: 'q15_d',
          text: '쿨하게 받지만, 미련은 보이지 않으려 한다.',
          emoji: ' 😎',
          scores: { 'distraction-seeker': 2, 'optimistic-mover-on': 2, 'social-supporter': 1 },
        },
      ],
    },
    {
      id: 'q16',
      question: '이별 후 가장 필요한 것은 무엇이라고 생각하나요?',
      options: [
        {
          id: 'q16_a',
          text: '냉철한 자기 분석과 다음 관계를 위한 학습',
          emoji: '📚',
          scores: { 'analytical-processor': 3, 'self-growth-focus': 3 },
        },
        {
          id: 'q16_b',
          text: '감정을 솔직하게 드러내고 해소할 수 있는 공간',
          emoji: ' venting',
          scores: { 'emotional-expresser': 3, 'social-supporter': 3 },
        },
        {
          id: 'q16_c',
          text: '아픈 기억을 잊게 해줄 새로운 즐거움과 경험',
          emoji: '🥳',
          scores: { 'distraction-seeker': 3, 'optimistic-mover-on': 3 },
        },
        {
          id: 'q16_d',
          text: '혼자만의 충분한 시간과 내면의 평화',
          emoji: '🧘',
          scores: { 'internal-contemplator': 3, 'practical-resetter': 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'analytical-processor',
      title: '분석적 처리형',
      description:
        '이별을 감정적으로 받아들이기보다, 왜 헤어졌는지 원인을 분석하고 교훈을 얻으려는 이성적인 타입이에요.',
      detailedDescription:
        '이별의 아픔 속에서도 문제점을 찾아내고, 다음 관계에서는 같은 실수를 반복하지 않기 위해 논리적으로 상황을 정리하려 노력합니다. 냉철한 시각으로 자신과 상대방의 행동을 되짚어보며, 이별을 성장의 기회로 삼으려 해요. 하지만 너무 이성적으로만 접근하여 감정적인 해소가 부족할 수 있습니다.',
      emoji: '🧠',
      color: '#808080', // Gray
      traits: ['이성적', '논리적', '분석적', '문제 해결 지향', '객관적', '자기 성찰'],
      compatibility: {
        best: ['self-growth-focus', 'practical-resetter'],
        good: ['internal-contemplator'],
        avoid: ['emotional-expresser', 'distraction-seeker'], // 감정적 표현이나 회피형과는 서로 이해하기 어려울 수 있음
      },
      recommendations: {
        activities: [
          '이별 일기 쓰기 (감정보다는 분석 위주)',
          '관련 서적 읽기',
          '명상 (감정 정리 위주)',
        ],
        tips: [
          '감정을 외면하기보다 충분히 느끼고 표현하는 시간을 가져보세요.',
          '모든 것을 분석하려 하기보다 때로는 흘려보내는 연습도 필요해요.',
          '주변 사람들에게 솔직하게 감정을 공유해보세요.',
        ],
      },
    },
    {
      id: 'emotional-expresser',
      title: '감정적 표현형',
      description: '이별의 슬픔과 분노를 숨기지 않고 솔직하게 드러내며 해소하는 타입이에요.',
      detailedDescription:
        '이별 후 느끼는 모든 감정을 솔직하게 표현하고 싶어 합니다. 눈물을 쏟거나 주변 사람들에게 하소연하며 감정을 배출하는 것을 통해 아픔을 극복하려 노력해요. 감정의 폭이 크지만, 이를 제대로 해소하면 빠르게 회복할 수 있는 유형입니다. 하지만 지나친 감정 표현이 주변 사람들을 지치게 할 수도 있습니다.',
      emoji: '😭',
      color: '#FF6347', // Tomato
      traits: ['솔직함', '감성적', '외향적', '감정 표현 풍부', '충동적', '개방적'],
      compatibility: {
        best: ['social-supporter', 'optimistic-mover-on'],
        good: ['distraction-seeker'],
        avoid: ['analytical-processor', 'internal-contemplator'], // 이성적이거나 내향적인 유형과는 감정 교류가 어려울 수 있음
      },
      recommendations: {
        activities: [
          '친구들과 수다 떨기',
          '실컷 울 수 있는 영화/드라마 보기',
          '활동적인 취미 (춤, 노래방 등)',
        ],
        tips: [
          '감정을 솔직하게 표현하되, 상대방이나 주변 사람들에게 너무 의존하지 마세요.',
          '감정 조절 방법을 배우고, 혼자 감당할 수 없을 때는 전문가의 도움을 받는 것도 좋아요.',
          '이별 후에도 자신을 사랑하는 마음을 잊지 마세요.',
        ],
      },
    },
    {
      id: 'distraction-seeker',
      title: '몰두/회피형',
      description:
        '이별의 아픔을 잊기 위해 다른 일에 몰두하거나 새로운 즐거움을 찾아 회피하려는 타입이에요.',
      detailedDescription:
        '이별 후의 고통스러운 감정을 직면하기보다, 새로운 취미, 일, 만남 등 다른 활동에 집중하여 아픔을 잊으려 합니다. 겉으로는 괜찮아 보이지만, 근본적인 감정 해소가 되지 않아 나중에 불쑥 아픔이 찾아올 수도 있어요. 빠르게 일상으로 복귀하지만, 내면의 문제를 들여다볼 필요가 있습니다.',
      emoji: '🏃',
      color: '#FFD700', // Gold
      traits: ['활동적', '낙천적', '현실 회피', '즉흥적', '새로운 경험 추구', '활발함'],
      compatibility: {
        best: ['optimistic-mover-on', 'social-supporter'],
        good: ['emotional-expresser'],
        avoid: ['analytical-processor', 'internal-contemplator'], // 깊은 성찰이나 분석을 요하는 유형과는 잘 맞지 않을 수 있음
      },
      recommendations: {
        activities: ['새로운 운동 시작', '여행 가기', '새로운 동호회 가입', '친구들과 약속 잡기'],
        tips: [
          '감정을 회피하기보다 잠시 멈춰서 자신의 감정을 마주하는 시간을 가져보세요.',
          '진정한 의미의 극복을 위해 내면의 상처를 치유하는 것도 중요해요.',
          '새로운 활동을 통해 자신을 발전시키는 기회로 삼으세요.',
        ],
      },
    },
    {
      id: 'self-growth-focus',
      title: '자기 성장형',
      description:
        '이별을 통해 자신을 돌아보고 더 나은 사람으로 성장하려는 데 집중하는 타입이에요.',
      detailedDescription:
        '이별을 단순한 끝이 아닌, 자신을 발전시킬 수 있는 기회로 생각합니다. 이전 관계에서의 부족했던 점을 개선하고, 새로운 자신을 발견하기 위해 노력해요. 긍정적이고 주도적으로 이별을 극복하려 하며, 내면의 성장을 통해 단단해지는 유형입니다. 때로는 너무 자신에게만 집중하여 주변과의 소통이 부족할 수도 있습니다.',
      emoji: '🌱',
      color: '#2E8B57', // SeaGreen
      traits: ['성장 지향', '긍정적', '주도적', '책임감', '자기 개발', '회복 탄력성'],
      compatibility: {
        best: ['analytical-processor', 'practical-resetter'],
        good: ['internal-contemplator', 'optimistic-mover-on'],
        avoid: ['emotional-expresser', 'distraction-seeker'], // 감정적 해소나 즉각적인 즐거움 추구 유형과는 방향이 다를 수 있음
      },
      recommendations: {
        activities: ['자기계발 서적 읽기', '새로운 기술 배우기', '멘토링 받기', '명상과 요가'],
        tips: [
          '성장도 중요하지만, 자신의 감정을 충분히 돌보는 시간을 가지세요.',
          '주변 사람들에게 도움을 요청하거나 마음을 터놓는 것도 좋아요.',
          '너무 자신을 몰아붙이지 않고 충분한 휴식을 취하세요.',
        ],
      },
    },
    {
      id: 'social-supporter',
      title: '사회적 지지형',
      description:
        '이별의 아픔을 친구나 가족 등 주변 사람들과의 소통을 통해 극복하려는 타입이에요.',
      detailedDescription:
        '힘든 감정을 혼자 삭이기보다, 사랑하는 사람들과 함께 나누며 위로와 지지를 얻으려 합니다. 친구들과의 만남, 가족과의 대화를 통해 에너지를 얻고, 주변의 격려 속에서 이별의 아픔을 치유해요. 사람들과의 관계를 통해 빠르게 회복하지만, 때로는 타인에게 너무 의존하거나 에너지를 소모할 수 있습니다.',
      emoji: '🫂',
      color: '#FFA07A', // Light Salmon
      traits: ['사교적', '의존적 (긍정적)', '친화력', '감정 공유', '지지 추구', '개방적'],
      compatibility: {
        best: ['emotional-expresser', 'distraction-seeker'],
        good: ['optimistic-mover-on'],
        avoid: ['internal-contemplator', 'analytical-processor'], // 혼자만의 시간이 중요한 유형과는 다소 충돌할 수 있음
      },
      recommendations: {
        activities: [
          '친구들과 여행 가기',
          '단체 활동 참여',
          '가족과 식사 시간 늘리기',
          '커뮤니티 활동',
        ],
        tips: [
          '주변 사람들에게 너무 의존하기보다 스스로 감정을 다스리는 연습도 필요해요.',
          '때로는 혼자만의 시간을 가지며 내면을 들여다보는 것도 중요해요.',
          '새로운 관계에 너무 빠르게 뛰어들지 않도록 주의하세요.',
        ],
      },
    },
    {
      id: 'practical-resetter',
      title: '현실적 재정비형',
      description: '이별 후 감정보다는 현실적인 부분들을 먼저 재정비하며 극복하려는 타입이에요.',
      detailedDescription:
        '이별의 아픔을 뒤로하고 현실적인 생활을 빠르게 재정비하는 데 집중합니다. 주거, 금전, 업무 등 일상생활의 균형을 맞추려 노력하며, 안정적인 환경을 통해 마음의 평화를 찾으려 해요. 감정적인 여유가 없거나 감정을 애써 외면하는 것처럼 보일 수 있습니다. 실질적인 변화를 통해 극복하지만, 내면의 치유도 중요합니다.',
      emoji: '🛠️',
      color: '#708090', // Slate Gray
      traits: ['현실적', '실용적', '계획적', '자립심', '책임감', '침착함'],
      compatibility: {
        best: ['analytical-processor', 'self-growth-focus'],
        good: ['internal-contemplator', 'optimistic-mover-on'],
        avoid: ['emotional-expresser', 'distraction-seeker'], // 감정적 혼란이나 즉흥적인 행동을 보이는 유형과는 잘 맞지 않을 수 있음
      },
      recommendations: {
        activities: [
          '가계부 정리',
          '운동 루틴 만들기',
          '재테크 공부',
          '집안 정리 및 인테리어 변경',
        ],
        tips: [
          '현실적인 재정비도 중요하지만, 자신의 감정에도 충분한 시간을 할애하세요.',
          '때로는 감정을 솔직하게 드러내는 것이 도움이 될 때도 있어요.',
          '너무 바쁘게만 지내기보다 휴식과 여유를 가지세요.',
        ],
      },
    },
    {
      id: 'internal-contemplator',
      title: '내면 숙고형',
      description: '이별의 아픔을 혼자 조용히 곱씹으며 내면의 성찰을 통해 극복하려는 타입이에요.',
      detailedDescription:
        '감정을 겉으로 드러내기보다 혼자만의 시간을 가지며 이별의 의미를 되새기고 자신을 돌아봅니다. 깊이 있는 성찰을 통해 스스로 해답을 찾으려 하며, 조용히 마음을 정리하는 데 집중해요. 이 과정에서 답답함을 느끼거나, 주변 사람들이 당신의 침묵을 걱정할 수 있습니다. 충분한 시간이 필요한 유형입니다.',
      emoji: '🧘',
      color: '#DDA0DD', // Plum
      traits: ['내향적', '사려 깊음', '성찰적', '조용함', '신중함', '감성적'],
      compatibility: {
        best: ['analytical-processor', 'self-growth-focus'],
        good: ['practical-resetter', 'empathetic-listener'],
        avoid: ['emotional-expresser', 'social-supporter', 'distraction-seeker'], // 너무 외향적이거나 즉흥적인 유형과는 이해가 어려울 수 있음
      },
      recommendations: {
        activities: ['일기 쓰기', '명상', '조용한 산책', '음악 감상'],
        tips: [
          '혼자만의 시간도 중요하지만, 때로는 가까운 사람에게 마음을 터놓는 것도 좋아요.',
          '감정을 너무 억누르지 말고 적절히 해소하는 방법을 찾아보세요.',
          '지나친 자책은 피하고 자신을 포용해주세요.',
        ],
      },
    },
    {
      id: 'optimistic-mover-on',
      title: '낙천적 극복형',
      description: '이별을 슬퍼하기보다 새로운 시작으로 여기며 긍정적으로 극복하려는 타입이에요.',
      detailedDescription:
        '이별 후에도 좌절하기보다, "괜찮아, 더 좋은 사람이 올 거야!"라는 긍정적인 마인드로 빠르게 마음을 다잡습니다. 이별의 아픔을 빨리 잊고 새로운 기회를 찾으려 하며, 밝고 희망찬 미래를 기대합니다. 너무 낙천적이라 감정적인 문제를 깊이 들여다보지 않거나, 주변에서 당신이 너무 쉽게 이별한다고 오해할 수도 있습니다.',
      emoji: '🚀',
      color: '#90EE90', // Light Green
      traits: ['낙천적', '긍정적', '빠른 회복', '미래 지향적', '활동적', '개방적'],
      compatibility: {
        best: ['distraction-seeker', 'social-supporter'],
        good: ['self-growth-focus', 'practical-resetter'],
        avoid: ['emotional-expresser', 'internal-contemplator'], // 감정의 깊은 해소를 원하는 유형과는 다소 거리감이 있을 수 있음
      },
      recommendations: {
        activities: ['새로운 사람들과의 만남', '여행 계획', '버킷리스트 작성 및 실행', '운동'],
        tips: [
          '긍정적인 태도는 좋지만, 때로는 슬픔을 인정하고 충분히 느끼는 시간도 필요해요.',
          '너무 빠르게 새로운 관계에 뛰어들지 않도록 주의하세요.',
          '자기 자신을 위한 진정한 회복에 집중하세요.',
        ],
      },
    },
  ],
};
