import type { PersonalityTestData } from '@/types/personalityTest';

export const giftGivingStyleTestData: PersonalityTestData = {
  id: 'gift-giving-style-test',
  title: '🎁 연인에게 선물할 때 나의 유형 테스트',
  description:
    '연인을 위한 선물을 고르고 줄 때, 나는 어떤 스타일일까? 당신의 선물 스타일을 알아보고 더 큰 기쁨을 주는 선물을 찾아보세요!',
  category: 'romance',
  resultTypes: [
    'thoughtful-researcher', // 사려 깊은 탐색형
    'surprise-master', // 서프라이즈 장인형
    'practical-giver', // 실용성 중시형
    'experience-creator', // 경험 중시형
    'memory-maker', // 추억 소환형
    'luxury-seeker', // 럭셔리 추구형
    'handmade-artist', // 정성 가득 수제형
    'spontaneous-giver', // 즉흥적 선물형
  ],
  questions: [
    {
      id: 'q1',
      question: '연인에게 줄 선물을 고를 때, 당신의 첫 단계는?',
      options: [
        {
          id: 'q1_a',
          text: '평소 연인의 말이나 행동에서 힌트를 찾으려 한다.',
          emoji: '🤔',
          scores: { 'thoughtful-researcher': 3, 'memory-maker': 2 },
        },
        {
          id: 'q1_b',
          text: '깜짝 놀랄 만한 특별한 것을 고민한다.',
          emoji: '✨',
          scores: { 'surprise-master': 3, 'experience-creator': 2 },
        },
        {
          id: 'q1_c',
          text: '연인에게 필요한 것이 무엇인지 먼저 생각한다.',
          emoji: '💡',
          scores: { 'practical-giver': 3, 'luxury-seeker': 1 },
        },
        {
          id: 'q1_d',
          text: '일단 주변 사람들에게 조언을 구하거나 검색한다.',
          emoji: '🔍',
          scores: { 'luxury-seeker': 2, 'spontaneous-giver': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '선물을 고를 때 가장 중요하게 생각하는 것은?',
      options: [
        {
          id: 'q2_a',
          text: '선물에 담긴 진심과 의미.',
          emoji: '❤️',
          scores: { 'thoughtful-researcher': 3, 'handmade-artist': 3, 'memory-maker': 2 },
        },
        {
          id: 'q2_b',
          text: '연인의 놀라는 표정과 반응.',
          emoji: '🤩',
          scores: { 'surprise-master': 3, 'experience-creator': 2 },
        },
        {
          id: 'q2_c',
          text: '실생활에 유용하게 쓰일 수 있는가.',
          emoji: ' practical',
          scores: { 'practical-giver': 3, 'luxury-seeker': 1 },
        },
        {
          id: 'q2_d',
          text: '희소성이나 브랜드 가치.',
          emoji: '💎',
          scores: { 'luxury-seeker': 3 },
        },
      ],
    },
    {
      id: 'q3',
      question: '선물은 언제 주는 것이 가장 좋다고 생각하나요?',
      options: [
        {
          id: 'q3_a',
          text: '특별한 기념일에 맞춰 준비한다.',
          emoji: '🗓️',
          scores: { 'thoughtful-researcher': 2, 'luxury-seeker': 2, 'handmade-artist': 1 },
        },
        {
          id: 'q3_b',
          text: '연인이 예상치 못한 순간, 깜짝 선물로.',
          emoji: ' surprise',
          scores: { 'surprise-master': 3, 'spontaneous-giver': 2 },
        },
        {
          id: 'q3_c',
          text: '꼭 기념일이 아니더라도, 문득 주고 싶을 때.',
          emoji: ' spontaneous',
          scores: { 'spontaneous-giver': 3, 'experience-creator': 1 },
        },
        {
          id: 'q3_d',
          text: '선물의 효율성과 의미를 고려하여 적절한 시기를 선택한다.',
          emoji: '⚖️',
          scores: { 'practical-giver': 2, 'memory-maker': 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: '연인에게 어떤 선물을 가장 해주고 싶은가요?',
      options: [
        {
          id: 'q4_a',
          text: '평소 연인이 툭 던졌던 말을 기억해뒀다가 주는 맞춤형 선물.',
          emoji: '🎯',
          scores: { 'thoughtful-researcher': 3, 'memory-maker': 3 },
        },
        {
          id: 'q4_b',
          text: '잊지 못할 특별한 추억이나 경험을 선물한다.',
          emoji: '🎢',
          scores: { 'experience-creator': 3, 'surprise-master': 2 },
        },
        {
          id: 'q4_c',
          text: '두고두고 쓸 수 있는 실용적이고 내구성 있는 선물.',
          emoji: ' robust',
          scores: { 'practical-giver': 3, 'luxury-seeker': 2 },
        },
        {
          id: 'q4_d',
          text: '나의 정성이 담긴 세상에 하나뿐인 선물.',
          emoji: '✍️',
          scores: { 'handmade-artist': 3, 'memory-maker': 2 },
        },
      ],
    },
    {
      id: 'q5',
      question: '선물 포장과 전달 방식은 어느 정도로 신경 쓰나요?',
      options: [
        {
          id: 'q5_a',
          text: '선물만큼이나 포장과 전달 방식도 중요하게 생각한다.',
          emoji: '🎀',
          scores: { 'surprise-master': 3, 'luxury-seeker': 2 },
        },
        {
          id: 'q5_b',
          text: '깔끔하게 하는 정도면 충분하다.',
          emoji: ' neat',
          scores: { 'practical-giver': 2, 'spontaneous-giver': 1 },
        },
        {
          id: 'q5_c',
          text: '정성이 담긴 손수 만든 포장을 선호한다.',
          emoji: '🎨',
          scores: { 'handmade-artist': 3, 'memory-maker': 2 },
        },
        {
          id: 'q5_d',
          text: '선물 자체가 중요하므로 포장은 크게 신경 쓰지 않는다.',
          emoji: '🎁',
          scores: { 'thoughtful-researcher': 1, 'practical-giver': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '선물 예산을 세울 때 당신의 기준은?',
      options: [
        {
          id: 'q6_a',
          text: '연인의 가치를 보여줄 수 있는 최고급 선물을 고려한다.',
          emoji: '💰',
          scores: { 'luxury-seeker': 3 },
        },
        {
          id: 'q6_b',
          text: '금액보다 선물의 의미와 정성을 중요하게 생각한다.',
          emoji: '❤️',
          scores: { 'handmade-artist': 3, 'thoughtful-researcher': 2 },
        },
        {
          id: 'q6_c',
          text: '합리적인 가격 내에서 실용적인 선물을 찾는다.',
          emoji: '⚖️',
          scores: { 'practical-giver': 3, 'spontaneous-giver': 2 },
        },
        {
          id: 'q6_d',
          text: '예산보다는 특별한 경험이나 감동을 주는 데 집중한다.',
          emoji: '✨',
          scores: { 'experience-creator': 3, 'surprise-master': 2 },
        },
      ],
    },
    {
      id: 'q7',
      question: '연인이 선물에 대한 반응이 시큰둥할 때, 당신의 기분은?',
      options: [
        {
          id: 'q7_a',
          text: '내가 선물을 잘못 골랐나? 몹시 아쉽고 속상하다.',
          emoji: '😔',
          scores: { 'thoughtful-researcher': 3, 'handmade-artist': 2 },
        },
        {
          id: 'q7_b',
          text: '놀라게 하려던 계획이 틀어져서 실망스럽다.',
          emoji: '😩',
          scores: { 'surprise-master': 3, 'experience-creator': 2 },
        },
        {
          id: 'q7_c',
          text: '그럴 수도 있지. 다음에 더 좋은 걸 주면 된다.',
          emoji: '🤷',
          scores: { 'spontaneous-giver': 3, 'practical-giver': 1 },
        },
        {
          id: 'q7_d',
          text: '비싼 선물인데… 반응이 좋지 않아 짜증이 난다.',
          emoji: '😠',
          scores: { 'luxury-seeker': 3 },
        },
      ],
    },
    {
      id: 'q8',
      question: '선물과 함께 어떤 것을 해주는 것을 선호하나요?',
      options: [
        {
          id: 'q8_a',
          text: '선물과 관련된 의미 있는 편지나 메시지를 전달한다.',
          emoji: '✉️',
          scores: { 'thoughtful-researcher': 3, 'memory-maker': 3, 'handmade-artist': 2 },
        },
        {
          id: 'q8_b',
          text: '선물 개봉 순간을 사진이나 영상으로 남기고 싶다.',
          emoji: '📸',
          scores: { 'surprise-master': 2, 'experience-creator': 1 },
        },
        {
          id: 'q8_c',
          text: '선물을 준 후 함께 식사하거나 즐거운 시간을 보낸다.',
          emoji: '🍽️',
          scores: { 'practical-giver': 1, 'spontaneous-giver': 2 },
        },
        {
          id: 'q8_d',
          text: '선물을 통해 연인과 특별한 추억을 만들고 싶다.',
          emoji: '💫',
          scores: { 'experience-creator': 3, 'surprise-master': 3 },
        },
      ],
    },
    {
      id: 'q9',
      question: '선물을 줄 때 연인에게 어떤 말을 주로 하나요?',
      options: [
        {
          id: 'q9_a',
          text: '"너 생각하면서 골랐어. 네가 필요할 것 같았어."',
          emoji: '💡',
          scores: { 'thoughtful-researcher': 3, 'practical-giver': 2 },
        },
        {
          id: 'q9_b',
          text: '"놀랐지? 이거 받으려고 내가 얼마나 노력했게!"',
          emoji: '🥳',
          scores: { 'surprise-master': 3 },
        },
        {
          id: 'q9_c',
          text: '"이거 네 거야. 잘 써."',
          emoji: ' blunt',
          scores: { 'spontaneous-giver': 3, 'practical-giver': 1 },
        },
        {
          id: 'q9_d',
          text: '"널 위해 직접 만들었어. 세상에 하나뿐인 거야."',
          emoji: '✍️',
          scores: { 'handmade-artist': 3 },
        },
      ],
    },
    {
      id: 'q10',
      question: '연인에게 받고 싶은 선물 유형은?',
      options: [
        {
          id: 'q10_a',
          text: '나의 취향과 필요를 정확히 반영한 맞춤형 선물.',
          emoji: '🎯',
          scores: { 'thoughtful-researcher': 3, 'practical-giver': 2 },
        },
        {
          id: 'q10_b',
          text: '예상치 못한 순간에 주는 서프라이즈 선물.',
          emoji: ' surprise',
          scores: { 'surprise-master': 3, 'spontaneous-giver': 2 },
        },
        {
          id: 'q10_c',
          text: '함께 특별한 추억을 만들 수 있는 경험 선물.',
          emoji: '🎢',
          scores: { 'experience-creator': 3, 'memory-maker': 2 },
        },
        {
          id: 'q10_d',
          text: '정성이 가득 담긴 손수 만든 선물이나 편지.',
          emoji: '✉️',
          scores: { 'handmade-artist': 3, 'memory-maker': 3 },
        },
      ],
    },
    {
      id: 'q11',
      question: '선물 선택에 실패했을 때, 당신의 대처 방식은?',
      options: [
        {
          id: 'q11_a',
          text: '왜 실패했는지 원인을 분석하고 다음을 기약한다.',
          emoji: '🤔',
          scores: { 'thoughtful-researcher': 3, 'practical-giver': 2 },
        },
        {
          id: 'q11_b',
          text: '괜찮은 척하지만 속으로는 굉장히 속상하다.',
          emoji: '😔',
          scores: { 'surprise-master': 2, 'luxury-seeker': 1 },
        },
        {
          id: 'q11_c',
          text: '즉흥적으로 다른 선물을 준비하거나 만회할 기회를 엿본다.',
          emoji: ' spontaneous',
          scores: { 'spontaneous-giver': 3, 'experience-creator': 2 },
        },
        {
          id: 'q11_d',
          text: '내가 너무 부족했나 자책하며 다음에는 더 완벽한 것을 주려 한다.',
          emoji: '😩',
          scores: { 'handmade-artist': 2, 'memory-maker': 1 },
        },
      ],
    },
    {
      id: 'q12',
      question: '선물 하나를 고르는 데 얼마나 많은 시간을 투자하나요?',
      options: [
        {
          id: 'q12_a',
          text: '몇 주 전부터 신중하게 알아보고 준비한다.',
          emoji: '⏳',
          scores: { 'thoughtful-researcher': 3, 'luxury-seeker': 2, 'handmade-artist': 2 },
        },
        {
          id: 'q12_b',
          text: '아이디어가 떠오르면 바로 실행에 옮긴다.',
          emoji: '⚡',
          scores: { 'spontaneous-giver': 3, 'surprise-master': 2 },
        },
        {
          id: 'q12_c',
          text: '필요한 만큼의 시간을 투자하지만, 너무 오래 끌지는 않는다.',
          emoji: '⚖️',
          scores: { 'practical-giver': 3, 'experience-creator': 1 },
        },
        {
          id: 'q12_d',
          text: '직접 만들거나 특별한 계획을 세우는 데 오랜 시간을 들인다.',
          emoji: '🎨',
          scores: { 'handmade-artist': 3, 'memory-maker': 3, 'experience-creator': 2 },
        },
      ],
    },
    {
      id: 'q13',
      question: '연인에게 준 선물이 잘 활용되는 것을 보면 어떤 기분인가요?',
      options: [
        {
          id: 'q13_a',
          text: '뿌듯하고 만족스럽다. 내가 제대로 골랐구나 싶다.',
          emoji: '😊',
          scores: { 'thoughtful-researcher': 3, 'practical-giver': 3 },
        },
        {
          id: 'q13_b',
          text: '나의 노력이 헛되지 않았음에 보람을 느낀다.',
          emoji: '💪',
          scores: { 'surprise-master': 2, 'handmade-artist': 2 },
        },
        {
          id: 'q13_c',
          text: '특별한 감정은 없다. 당연한 결과라고 생각한다.',
          emoji: ' indifferent',
          scores: { 'spontaneous-giver': 1, 'luxury-seeker': 1 },
        },
        {
          id: 'q13_d',
          text: '선물과 함께했던 추억이 떠올라 행복하다.',
          emoji: ' nostalgia',
          scores: { 'memory-maker': 3, 'experience-creator': 3 },
        },
      ],
    },
    {
      id: 'q14',
      question: '선물 외에 연인에게 자신의 마음을 표현하는 방법은?',
      options: [
        {
          id: 'q14_a',
          text: '진심이 담긴 편지나 메시지를 자주 보낸다.',
          emoji: '✉️',
          scores: { 'thoughtful-researcher': 2, 'memory-maker': 3, 'handmade-artist': 1 },
        },
        {
          id: 'q14_b',
          text: '말로써 아낌없이 사랑을 표현한다.',
          emoji: '🗣️',
          scores: { 'spontaneous-giver': 2, 'surprise-master': 1 },
        },
        {
          id: 'q14_c',
          text: '일상에서 필요한 것을 챙겨주거나 도움을 준다.',
          emoji: '🤝',
          scores: { 'practical-giver': 3 },
        },
        {
          id: 'q14_d',
          text: '함께 특별한 경험을 만들고 즐거운 시간을 보낸다.',
          emoji: '🎢',
          scores: { 'experience-creator': 3, 'spontaneous-giver': 2 },
        },
      ],
    },
    {
      id: 'q15',
      question: '선물을 고를 때 스트레스를 받는 편인가요?',
      options: [
        {
          id: 'q15_a',
          text: '매우 많이 받는다. 완벽한 선물을 주고 싶어서.',
          emoji: '😩',
          scores: { 'thoughtful-researcher': 3, 'luxury-seeker': 3, 'handmade-artist': 2 },
        },
        {
          id: 'q15_b',
          text: '어느 정도 받지만, 즐거운 스트레스라고 생각한다.',
          emoji: '😅',
          scores: { 'surprise-master': 2, 'experience-creator': 2 },
        },
        {
          id: 'q15_c',
          text: '크게 받지 않는다. 주는 것에 의미를 둔다.',
          emoji: '🧘',
          scores: { 'practical-giver': 1, 'spontaneous-giver': 3 },
        },
        {
          id: 'q15_d',
          text: '받는 편이지만, 그만큼 받는 기쁨도 크다.',
          emoji: '😊',
          scores: { 'memory-maker': 2, 'handmade-artist': 3 },
        },
      ],
    },
    {
      id: 'q16',
      question: '연인에게 가장 해주고 싶은 최고의 선물은 무엇인가요?',
      options: [
        {
          id: 'q16_a',
          text: '오랫동안 기억에 남을 감동적인 이벤트와 함께 주는 맞춤 선물.',
          emoji: '💖',
          scores: { 'thoughtful-researcher': 3, 'surprise-master': 3, 'memory-maker': 2 },
        },
        {
          id: 'q16_b',
          text: '연인의 삶의 질을 높여줄 수 있는 고품격 실용품.',
          emoji: '💎',
          scores: { 'practical-giver': 3, 'luxury-seeker': 3 },
        },
        {
          id: 'q16_c',
          text: '오직 두 사람만을 위한 특별하고 잊지 못할 경험.',
          emoji: '🎢',
          scores: { 'experience-creator': 3, 'memory-maker': 3 },
        },
        {
          id: 'q16_d',
          text: '나의 모든 시간과 정성이 담긴 세상에 단 하나뿐인 예술품.',
          emoji: '✍️',
          scores: { 'handmade-artist': 3, 'thoughtful-researcher': 2, 'memory-maker': 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'thoughtful-researcher',
      title: '사려 깊은 탐색형',
      description:
        '당신은 연인을 위한 선물을 고를 때, 연인의 취향과 필요를 깊이 있게 탐색하고 고민합니다.',
      detailedDescription:
        '평소 연인의 말을 놓치지 않고 기억해두거나, SNS 등을 통해 정보를 수집하며 연인이 진정으로 원하는 것이 무엇인지 파악하려 노력합니다. 가격보다는 연인에게 감동과 만족을 줄 수 있는 **의미 있는 선물**을 선호하며, 선물 하나에도 당신의 깊은 애정과 섬세함이 묻어납니다. 때로는 너무 완벽한 선물을 고르려다 스트레스를 받거나, 시간이 오래 걸릴 수 있습니다.',
      emoji: '🤔',
      color: '#B0C4DE', // Light Steel Blue
      traits: ['섬세함', '사려 깊음', '탐색적', '노력파', '배려심', '진심'],
      compatibility: {
        best: ['practical-giver', 'memory-maker'],
        good: ['handmade-artist', 'luxury-seeker'],
        avoid: ['spontaneous-giver'],
      },
      recommendations: {
        activities: [
          '연인과의 대화 중 힌트 메모하기',
          '연인의 위시리스트 눈여겨보기',
          '온라인 쇼핑몰 리뷰 꼼꼼히 살피기',
        ],
        tips: [
          '완벽한 선물도 좋지만, 때로는 예상치 못한 작은 선물로 기쁨을 주는 것도 좋아요.',
          '선물에 대한 과도한 스트레스는 피하고, 주는 행위 자체에 의미를 두세요.',
          '선물 준비 과정을 연인과 공유하는 것도 즐거움이 될 수 있어요.',
        ],
      },
    },
    {
      id: 'surprise-master',
      title: '서프라이즈 장인형',
      description: '당신은 연인에게 예상치 못한 순간, 깜짝 선물로 감동을 선사하는 것을 즐깁니다.',
      detailedDescription:
        '선물 자체보다 **선물을 주는 방식과 연인의 놀라는 반응**에 큰 기쁨을 느낍니다. 치밀하게 계획하고 연인을 감쪽같이 속여 놀라게 하는 것에 희열을 느끼며, 독특하고 기억에 남을 만한 이벤트를 함께 준비하는 것을 좋아합니다. 하지만 때로는 서프라이즈를 너무 자주 시도하거나, 연인의 취향과 맞지 않는 선물을 주어 실망을 안겨줄 수도 있습니다.',
      emoji: '✨',
      color: '#ADD8E6', // Light Blue
      traits: ['창의적', '이벤트 선호', '즐거움 추구', '과감함', '외향적', '계획적'],
      compatibility: {
        best: ['experience-creator', 'spontaneous-giver'],
        good: ['luxury-seeker'],
        avoid: ['practical-giver', 'thoughtful-researcher'],
      },
      recommendations: {
        activities: [
          '서프라이즈 이벤트 기획하기',
          '데이트 중 깜짝 선물 주기',
          '연인과 함께 즐길 수 있는 이색 장소 탐색',
        ],
        tips: [
          '서프라이즈도 좋지만, 가끔은 연인과 함께 선물을 고르는 즐거움도 느껴보세요.',
          '연인의 취향을 충분히 고려하여 깜짝 선물이 실망으로 이어지지 않도록 주의하세요.',
          '너무 자주 놀라게 하면 감흥이 떨어질 수 있으니 적절한 빈도를 유지하세요.',
        ],
      },
    },
    {
      id: 'practical-giver',
      title: '실용성 중시형',
      description: '당신은 연인에게 실생활에서 유용하게 쓰일 수 있는 실용적인 선물을 선호합니다.',
      detailedDescription:
        '화려함이나 감동보다는 **선물의 효용 가치**를 중요하게 생각합니다. 연인에게 실제로 필요한 물건, 일상에 도움이 되는 제품을 선물함으로써 당신의 세심한 마음과 배려를 보여주고 싶어 합니다. 낭비라고 생각되는 선물보다는 합리적인 소비를 지향합니다. 하지만 너무 실용성만 강조하다 보면 로맨틱한 분위기를 해치거나, 연인이 감동을 덜 받을 수 있습니다.',
      emoji: '💡',
      color: '#90EE90', // Light Green
      traits: ['실용적', '합리적', '효율적', '세심함', '현실적', '경제적'],
      compatibility: {
        best: ['thoughtful-researcher', 'luxury-seeker'],
        good: ['spontaneous-giver'],
        avoid: ['surprise-master', 'handmade-artist'],
      },
      recommendations: {
        activities: [
          '연인의 생활 패턴 관찰하여 필요한 물건 파악',
          '공구/전자제품 등 실용성 높은 선물 아이디어 찾아보기',
          '생필품도 고급스러운 것으로 선물하기',
        ],
        tips: [
          '실용적인 선물에 작은 로맨틱한 요소를 더해보세요 (예: 예쁜 포장, 손편지).',
          '때로는 연인이 직접 고를 수 있는 상품권이나 함께 쇼핑하는 시간을 선물하는 것도 좋아요.',
          '선물의 의미를 짧게라도 설명해주면 좋아요.',
        ],
      },
    },
    {
      id: 'experience-creator',
      title: '경험 중시형',
      description:
        '당신은 연인에게 물건보다 특별한 경험과 추억을 선물하는 것을 가장 중요하게 생각합니다.',
      detailedDescription:
        '물질적인 선물보다는 **함께 할 수 있는 활동, 여행, 공연, 특별한 이벤트** 등을 통해 잊지 못할 추억을 만들어주는 것을 좋아합니다. 선물과 함께 공유할 수 있는 시간이 곧 최고의 선물이라고 믿습니다. 이러한 방식은 두 사람의 유대감을 깊게 하지만, 때로는 계획이 복잡해지거나, 연인이 물질적인 선물을 기대할 수도 있습니다.',
      emoji: '🎢',
      color: '#FFEB3B', // Yellow
      traits: ['경험 지향', '추억 생성', '활동적', '창의적', '감성적', '즐거움 추구'],
      compatibility: {
        best: ['surprise-master', 'memory-maker'],
        good: ['spontaneous-giver'],
        avoid: ['practical-giver', 'luxury-seeker'],
      },
      recommendations: {
        activities: [
          '둘만의 버킷리스트 만들기',
          '이색 데이트 코스 탐색',
          '여행 계획 함께 세우기',
          '원데이 클래스 신청',
        ],
        tips: [
          '경험 선물도 좋지만, 작은 기념품이나 사진 등으로 추억을 남길 수 있게 해주세요.',
          '연인의 취향에 맞는 경험인지 충분히 고려하세요.',
          '계획이 복잡해질 수 있으니 여유를 가지고 준비하는 것이 좋습니다.',
        ],
      },
    },
    {
      id: 'memory-maker',
      title: '추억 소환형',
      description:
        '당신은 연인과의 소중한 추억을 상기시키거나 새로운 추억을 담는 선물을 선호합니다.',
      detailedDescription:
        '과거의 의미 있는 순간들을 떠올리게 하는 선물 (사진첩, 기념품)을 주거나, 앞으로 만들 추억을 담을 수 있는 선물 (커플 일기장, DIY 키트)을 좋아합니다. **감성적이고 의미 부여를 중요하게 생각하며, 선물에 스토리를 담아** 연인에게 깊은 감동을 주고 싶어 합니다. 때로는 너무 개인적인 추억에만 집중하여 상대방이 공감하기 어려울 수 있습니다.',
      emoji: '🎞️',
      color: '#DDA0DD', // Plum
      traits: ['감성적', '추억 중시', '의미 부여', '섬세함', '정성', '로맨틱'],
      compatibility: {
        best: ['thoughtful-researcher', 'handmade-artist'],
        good: ['experience-creator'],
        avoid: ['practical-giver', 'spontaneous-giver'],
      },
      recommendations: {
        activities: [
          '둘만의 추억이 담긴 사진첩 만들기',
          '커플 일기장 선물하기',
          '기념일 영상 제작',
          '첫 만남 장소 다시 방문',
        ],
        tips: [
          '추억 소환 선물은 좋지만, 새로운 추억을 만들어가는 노력도 게을리하지 마세요.',
          '때로는 너무 과거에 얽매이기보다 현재의 연인에게 집중하세요.',
          '선물에 담긴 스토리를 연인에게 자세히 설명해주면 감동이 두 배가 됩니다.',
        ],
      },
    },
    {
      id: 'luxury-seeker',
      title: '럭셔리 추구형',
      description:
        '당신은 연인에게 고품격의 럭셔리한 선물을 통해 당신의 마음을 표현하고 싶어 합니다.',
      detailedDescription:
        '선물의 **브랜드 가치, 품질, 희소성**을 중요하게 생각하며, 연인이 충분히 대접받고 있다는 느낌을 줄 수 있는 고가의 선물을 선호합니다. 연인에게 최고의 것을 주고 싶어 하는 마음이 크며, 이를 통해 자신의 애정을 증명하려 합니다. 하지만 때로는 과도한 지출을 하거나, 선물의 본질적인 의미보다 가격에 더 집중할 수 있습니다.',
      emoji: '💎',
      color: '#FFD700', // Gold
      traits: ['고급 지향', '과시적 (긍정적)', '품질 중시', '경제력 과시', '트렌디함', '가치 중시'],
      compatibility: {
        best: ['practical-giver', 'thoughtful-researcher'],
        good: ['surprise-master'],
        avoid: ['handmade-artist', 'spontaneous-giver'],
      },
      recommendations: {
        activities: [
          '명품 브랜드 매장 방문',
          '해외 직구 이용',
          '연인이 평소 눈여겨보던 브랜드 파악',
        ],
        tips: [
          '선물의 가격보다 연인에게 진정으로 필요한 것인지 고민해보세요.',
          '선물 외에 마음을 담은 편지나 작은 이벤트도 함께 준비하면 더욱 좋아요.',
          '과도한 지출은 피하고, 합리적인 선에서 최고의 만족을 주는 선물을 선택하세요.',
        ],
      },
    },
    {
      id: 'handmade-artist',
      title: '정성 가득 수제형',
      description:
        '당신은 연인을 위해 직접 만들고 꾸민, 세상에 하나뿐인 선물을 주는 것을 선호합니다.',
      detailedDescription:
        '기성품보다는 **자신의 시간과 노력이 담긴 손수 만든 선물** (손편지, 직접 뜬 목도리, DIY 키트 등)을 통해 진심을 전달하고 싶어 합니다. 선물을 준비하는 과정 자체를 즐기며, 연인에게 당신의 정성과 특별함을 보여주고 싶어 합니다. 하지만 결과물이 예상과 다를 수 있고, 연인이 실용성을 더 중요하게 생각할 경우 실망할 수 있습니다.',
      emoji: '✍️',
      color: '#FFA07A', // Light Salmon
      traits: ['정성', '예술적', '창의적', '수공예 선호', '노력파', '진심'],
      compatibility: {
        best: ['memory-maker', 'thoughtful-researcher'],
        good: ['experience-creator'],
        avoid: ['luxury-seeker', 'practical-giver'],
      },
      recommendations: {
        activities: [
          '원데이 클래스 참여 (선물 제작)',
          'DIY 키트 구매',
          '손편지 / 캘리그라피 연습',
          '사진 앨범 직접 꾸미기',
        ],
        tips: [
          '정성은 중요하지만, 연인의 취향과 실용성도 함께 고려하세요.',
          '선물과 함께 완성된 과정을 담은 사진이나 영상도 함께 보여주면 감동이 배가됩니다.',
          '너무 완벽하려 하지 말고, 부족해도 당신의 마음이 중요함을 어필하세요.',
        ],
      },
    },
    {
      id: 'spontaneous-giver',
      title: '즉흥적 선물형',
      description:
        '당신은 특별한 이유 없이, 문득 떠오르면 연인에게 바로 선물을 주는 즉흥적인 스타일입니다.',
      detailedDescription:
        '계획적인 준비보다는 **순간적인 감정과 충동**에 따라 선물을 주는 것을 즐깁니다. 기념일이 아니더라도 연인이 생각나거나, 지나가다 마음에 드는 것이 있으면 바로 구매하여 선물합니다. 이러한 즉흥적인 면모는 연인에게 뜻밖의 기쁨을 주지만, 때로는 선물이 너무 흔하거나, 연인이 필요로 하지 않는 것일 수 있습니다.',
      emoji: '🎁',
      color: '#FFC0CB', // Pink
      traits: ['즉흥적', '충동적', '자유분방', '단순함', '기분파', '넉넉함'],
      compatibility: {
        best: ['surprise-master', 'experience-creator'],
        good: ['practical-giver'],
        avoid: ['thoughtful-researcher', 'memory-maker', 'luxury-seeker'],
      },
      recommendations: {
        activities: [
          '평소 데이트 중 작은 선물 주기',
          '연인에게 필요한 것 바로 사주기',
          '온라인 쇼핑 중 즉흥적인 선물 구매',
        ],
        tips: [
          '즉흥적인 선물도 좋지만, 가끔은 특별한 기념일에 큰 의미를 담아 준비해보세요.',
          '선물을 주기 전에 연인이 필요로 하는 것인지 한 번 더 생각해 보세요.',
          '선물보다는 함께 보내는 시간에 더 집중하는 것도 좋습니다.',
        ],
      },
    },
  ],
};
