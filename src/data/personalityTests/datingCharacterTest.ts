import type { PersonalityTestData } from '@/types/personalityTest';

export const datingCharacterTestData: PersonalityTestData = {
  id: 'dating-character-test',
  title: '❤️‍🩹 나의 연애 캐릭터 테스트',
  description:
    '연애할 때 나는 어떤 캐릭터일까? 연인에게 나는 어떤 모습으로 비칠까? 나의 연애 스타일과 숨겨진 연애 캐릭터를 확인해 보세요!',
  category: 'love-and-dating',
  resultTypes: [
    'pure-puppy', // 순정파 댕댕이
    'tsundere-cat', // 츤데레 냥냥이
    'gentle-bear', // 다정한 곰돌이
    'smart-fox', // 여우 같은 전략가
    'free-bird', // 자유로운 영혼
  ],
  questions: [
    {
      id: 'q1',
      question: '썸을 탈 때, 나는 주로 어떤 모습인가요?',
      options: [
        {
          id: 'q1_a',
          text: '매일 연락하며 쉴 틈 없이 표현한다.',
          emoji: '📱',
          scores: { 'pure-puppy': 3 },
        },
        {
          id: 'q1_b',
          text: '속마음은 그렇지 않지만, 겉으로는 무심한 척한다.',
          emoji: '🙄',
          scores: { 'tsundere-cat': 3 },
        },
        {
          id: 'q1_c',
          text: '진지하고 신중하게, 상대방을 알아가려고 노력한다.',
          emoji: '🤔',
          scores: { 'gentle-bear': 3 },
        },
        {
          id: 'q1_d',
          text: '밀당을 적절히 사용하며 관계를 주도한다.',
          emoji: '🎣',
          scores: { 'smart-fox': 3 },
        },
        {
          id: 'q1_e',
          text: '썸? 그런 거 신경 안 쓰고 편하게 지낸다.',
          emoji: '🤷',
          scores: { 'free-bird': 3 },
        },
      ],
    },
    {
      id: 'q2',
      question: '연인과 데이트를 할 때 나의 스타일은?',
      options: [
        {
          id: 'q2_a',
          text: '상대방이 원하는 대로 다 맞춰주는 편이다.',
          emoji: '😌',
          scores: { 'pure-puppy': 3 },
        },
        {
          id: 'q2_b',
          text: '내가 가고 싶은 곳, 하고 싶은 것을 솔직하게 말한다.',
          emoji: '🗣️',
          scores: { 'tsundere-cat': 3 },
        },
        {
          id: 'q2_c',
          text: '미리 계획을 세우고, 안정적인 데이트를 선호한다.',
          emoji: '🗓️',
          scores: { 'gentle-bear': 3 },
        },
        {
          id: 'q2_d',
          text: '색다른 경험을 위해, 트렌디한 장소를 찾아다닌다.',
          emoji: '✨',
          scores: { 'smart-fox': 3 },
        },
        {
          id: 'q2_e',
          text: '계획 없이 즉흥적으로 만나는 것을 좋아한다.',
          emoji: '🛵',
          scores: { 'free-bird': 3 },
        },
      ],
    },
    {
      id: 'q3',
      question: '연인에게 서운한 감정을 느꼈을 때, 나는?',
      options: [
        {
          id: 'q3_a',
          text: '직접 말하지 못하고 혼자 끙끙 앓는다.',
          emoji: '😔',
          scores: { 'pure-puppy': 3 },
        },
        {
          id: 'q3_b',
          text: '괜히 짜증 내거나 툴툴거린다.',
          emoji: '💢',
          scores: { 'tsundere-cat': 3 },
        },
        {
          id: 'q3_c',
          text: '차분하게 대화를 시도하며 해결하려고 한다.',
          emoji: '💬',
          scores: { 'gentle-bear': 3 },
        },
        {
          id: 'q3_d',
          text: '왜 서운한지 논리적으로 설명하고, 해결책을 제시한다.',
          emoji: '💡',
          scores: { 'smart-fox': 3 },
        },
        {
          id: 'q3_e',
          text: '신경 쓰지 않는다. 시간이 해결해 줄 것이라고 믿는다.',
          emoji: '⏳',
          scores: { 'free-bird': 3 },
        },
      ],
    },
    {
      id: 'q4',
      question: '사랑에 빠졌을 때, 나의 모습은?',
      options: [
        {
          id: 'q4_a',
          text: '모든 것을 바치고, 연인만 바라보는 해바라기가 된다.',
          emoji: '🌻',
          scores: { 'pure-puppy': 3 },
        },
        {
          id: 'q4_b',
          text: '어색하지만 조금씩 애교를 부리려고 노력한다.',
          emoji: '💖',
          scores: { 'tsundere-cat': 3 },
        },
        {
          id: 'q4_c',
          text: '따뜻한 말과 행동으로 편안함을 선물한다.',
          emoji: '🧸',
          scores: { 'gentle-bear': 3 },
        },
        {
          id: 'q4_d',
          text: '상대방의 마음을 완전히 사로잡기 위해 노력한다.',
          emoji: '🎯',
          scores: { 'smart-fox': 3 },
        },
        {
          id: 'q4_e',
          text: '사랑에 빠졌지만, 나의 개인적인 삶도 중요하다.',
          emoji: '🕊️',
          scores: { 'free-bird': 3 },
        },
      ],
    },
    {
      id: 'q5',
      question: '이별했을 때, 나는?',
      options: [
        {
          id: 'q5_a',
          text: '이별의 아픔에 몸부림치며 힘들어한다.',
          emoji: '💔',
          scores: { 'pure-puppy': 3 },
        },
        {
          id: 'q5_b',
          text: '아프지만 겉으로는 태연한 척, 아무렇지 않은 척한다.',
          emoji: '🧊',
          scores: { 'tsundere-cat': 3 },
        },
        {
          id: 'q5_c',
          text: '담담하게 이별을 받아들이고, 추억으로 남긴다.',
          emoji: '🚶',
          scores: { 'gentle-bear': 3 },
        },
        {
          id: 'q5_d',
          text: '이별의 원인을 분석하고, 다음 연애에 활용한다.',
          emoji: '📋',
          scores: { 'smart-fox': 3 },
        },
        {
          id: 'q5_e',
          text: '다시 자유를 찾았다며 새로운 삶을 즐긴다.',
          emoji: '🤸',
          scores: { 'free-bird': 3 },
        },
      ],
    },
    {
      id: 'q6',
      question: '연인과의 기념일을 챙기는 나의 방식은?',
      options: [
        {
          id: 'q6_a',
          text: '거창한 이벤트를 준비하며 감동을 준다.',
          emoji: '🎁',
          scores: { 'pure-puppy': 3 },
        },
        {
          id: 'q6_b',
          text: '별거 아닌 척, 작은 선물과 손편지를 준비한다.',
          emoji: '💌',
          scores: { 'tsundere-cat': 3 },
        },
        {
          id: 'q6_c',
          text: '미리 예약하고, 진심이 담긴 식사 자리를 마련한다.',
          emoji: '🍽️',
          scores: { 'gentle-bear': 3 },
        },
        {
          id: 'q6_d',
          text: '남들이 부러워할 만한 특별한 데이트를 계획한다.',
          emoji: '✨',
          scores: { 'smart-fox': 3 },
        },
        {
          id: 'q6_e',
          text: '기념일은 굳이 챙기지 않아도 된다고 생각한다.',
          emoji: '🤔',
          scores: { 'free-bird': 3 },
        },
      ],
    },
    {
      id: 'q7',
      question: '연인이 보고 싶을 때, 나는?',
      options: [
        {
          id: 'q7_a',
          text: '바로 연락해서 보고 싶다고 말한다.',
          emoji: '📞',
          scores: { 'pure-puppy': 3 },
        },
        {
          id: 'q7_b',
          text: '연락하고 싶지만, 꾹 참고 기다린다.',
          emoji: '🤫',
          scores: { 'tsundere-cat': 3 },
        },
        {
          id: 'q7_c',
          text: '상대방의 상황을 고려하며 조심스럽게 연락한다.',
          emoji: '📱',
          scores: { 'gentle-bear': 3 },
        },
        {
          id: 'q7_d',
          text: '상대방이 먼저 연락하게끔 유도한다.',
          emoji: '😃',
          scores: { 'smart-fox': 3 },
        },
        {
          id: 'q7_e',
          text: '보고 싶으면 보고, 아니면 아닌 거다.',
          emoji: '🤔',
          scores: { 'free-bird': 3 },
        },
      ],
    },
    {
      id: 'q8',
      question: '나의 연애관은?',
      options: [
        {
          id: 'q8_a',
          text: '사랑이 전부다! 연인에게 헌신하는 것이 최고다.',
          emoji: '❣️',
          scores: { 'pure-puppy': 3 },
        },
        {
          id: 'q8_b',
          text: '자유로운 연애를 원하지만, 사실은 상대방에게 구속되고 싶다.',
          emoji: '⛓️',
          scores: { 'tsundere-cat': 3 },
        },
        {
          id: 'q8_c',
          text: '편안하고 안정적인 연애가 가장 좋다.',
          emoji: '😌',
          scores: { 'gentle-bear': 3 },
        },
        {
          id: 'q8_d',
          text: '서로에게 도움이 되는, 발전적인 연애를 추구한다.',
          emoji: '📈',
          scores: { 'smart-fox': 3 },
        },
        {
          id: 'q8_e',
          text: '연애는 나에게 구속이 될 수 없다. 자유가 제일 중요하다.',
          emoji: '💨',
          scores: { 'free-bird': 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'pure-puppy',
      title: '🐶 순정파 댕댕이',
      description: '당신은 연인에게 헌신하고 아낌없이 사랑을 주는 순정파 댕댕이 타입입니다.',
      detailedDescription:
        '사랑에 빠지면 모든 것을 다 내어줄 만큼 순수하고 헌신적인 당신! 연인을 향한 마음이 한결같아 상대방에게 큰 안정감을 줍니다. 때로는 표현이 서툴러 오해를 사기도 하지만, 진심은 그 누구보다 깊고 뜨겁습니다. 당신의 사랑스러운 매력에 상대방은 푹 빠질 수밖에 없을 거예요.',
      emoji: '🐶',
      color: '#B0C4DE', // LightSteelBlue
      traits: ['헌신적', '순수함', '솔직함', '높은 표현력', '애교', '사랑스러움'],
      compatibility: {
        best: ['다정한 곰돌이'],
        good: ['츤데레 냥냥이'],
        avoid: ['자유로운 영혼'],
      },
      recommendations: {
        tips: [
          '가끔은 자신을 먼저 생각하고 사랑하는 법을 배워보세요.',
          '혼자 고민하기보다는 상대방과 솔직하게 대화하는 습관을 들이세요.',
        ],
        hashtags: ['#순정파', '#헌신적', '#사랑둥이', '#댕댕이'],
      },
    },
    {
      id: 'tsundere-cat',
      title: '🐱 츤데레 냥냥이',
      description: '당신은 무심한 척하지만, 뒤에서 몰래 챙겨주는 츤데레 냥냥이 타입입니다.',
      detailedDescription:
        '자존심이 강하고, 감정 표현에 서툰 당신! 겉으로는 차갑고 시크한 척하지만, 속으로는 연인을 향한 따뜻한 마음으로 가득 차 있습니다. 표현하지 못하는 마음이 행동으로 나타나는데, 그 모습이 오히려 연인에게는 귀엽고 사랑스러운 반전 매력으로 다가옵니다. 당신의 츤데레 매력에 한번 빠지면 헤어 나오기 어려울 거예요.',
      emoji: '🐱',
      color: '#A9A9A9', // DarkGray
      traits: ['츤데레', '반전매력', '자존심', '표현 서툼', '섬세함', '시크함'],
      compatibility: {
        best: ['다정한 곰돌이'],
        good: ['순정파 댕댕이'],
        avoid: ['자유로운 영혼'],
      },
      recommendations: {
        tips: [
          '가끔은 용기를 내서 상대방에게 마음을 솔직하게 표현해 보세요.',
          '질투심을 너무 숨기지 않아도 괜찮아요.',
        ],
        hashtags: ['#츤데레', '#냥냥이', '#시크', '#반전매력'],
      },
    },
    {
      id: 'gentle-bear',
      title: '🐻 다정한 곰돌이',
      description: '당신은 언제나 편안하고 안정감을 주는 다정한 곰돌이 타입입니다.',
      detailedDescription:
        '느긋하고 배려심이 깊은 당신은 연인에게 듬직한 버팀목이 되어줍니다. 감정 기복이 적고, 안정적인 연애를 추구하며 상대방을 항상 편안하게 해줘요. 화려한 이벤트나 말보다는 진심이 담긴 행동으로 사랑을 보여주는 타입입니다. 당신의 품은 언제나 따뜻하고 포근해서, 연인은 당신에게서 벗어날 수 없을 거예요.',
      emoji: '🐻',
      color: '#8B4513', // SaddleBrown
      traits: ['안정적', '배려심', '듬직함', '느긋함', '진중함', '진솔함'],
      compatibility: {
        best: ['순정파 댕댕이', '츤데레 냥냥이'],
        good: [],
        avoid: ['자유로운 영혼'],
      },
      recommendations: {
        tips: [
          '가끔은 솔직하게 자신의 속마음을 먼저 드러내 보세요.',
          '상대방에게 서운한 점이 있다면, 미루지 말고 바로 대화해 보세요.',
        ],
        hashtags: ['#곰돌이', '#듬직', '#다정함', '#안정적'],
      },
    },
    {
      id: 'smart-fox',
      title: '🦊 여우 같은 전략가',
      description:
        '당신은 연애의 주도권을 잡고, 영리하게 관계를 이끌어가는 여우 같은 전략가 타입입니다.',
      detailedDescription:
        '매력적인 당신은 연애의 기술을 잘 알고 있습니다. 밀고 당기기를 능숙하게 사용하고, 상대방의 마음을 잘 파악해요. 연애를 통해 서로 발전하는 것을 중요하게 생각하며, 때로는 이성적인 판단으로 관계를 이끌어갑니다. 하지만 연인을 향한 마음만은 진심이라는 사실! 당신의 영리한 연애 전략은 상대방을 더욱 더 매료시킬 거예요.',
      emoji: '🦊',
      color: '#FF8C00', // DarkOrange
      traits: ['영리함', '전략가', '이성적', '밀당의 고수', '주도적', '발전 지향'],
      compatibility: {
        best: ['자유로운 영혼'],
        good: ['다정한 곰돌이'],
        avoid: ['순정파 댕댕이'],
      },
      recommendations: {
        tips: [
          '가끔은 머리가 아닌 마음이 시키는 대로 행동해 보는 것도 좋아요.',
          '너무 계산적인 모습은 상대방에게 상처가 될 수 있어요.',
        ],
        hashtags: ['#여우', '#전략가', '#밀당', '#매력적'],
      },
    },
    {
      id: 'free-bird',
      title: '🕊️ 자유로운 영혼',
      description:
        '당신은 구속받는 것을 싫어하고, 자유로운 연애를 추구하는 자유로운 영혼 타입입니다.',
      detailedDescription:
        '연애도 좋지만, 자신의 삶과 개인적인 시간이 가장 중요한 당신! 얽매이거나 구속받는 것을 싫어해서, 연애에 대한 환상이나 집착이 적습니다. 함께 있을 때는 누구보다 즐겁고 행복하지만, 서로의 삶을 존중하는 쿨한 연애를 선호해요. 당신의 쿨하고 자유로운 모습은 오히려 상대방의 마음을 더 애타게 만들지도 모릅니다.',
      emoji: '🕊️',
      color: '#B0E0E6', // PowderBlue
      traits: ['자유', '쿨함', '개인주의', '비구속', '솔직함', '인생 즐기기'],
      compatibility: {
        best: ['여우 같은 전략가'],
        good: ['다정한 곰돌이'],
        avoid: ['순정파 댕댕이', '츤데레 냥냥이'],
      },
      recommendations: {
        tips: [
          '가끔은 상대방에게 더 많은 관심과 사랑을 표현해 주세요.',
          '연인과의 관계에만 집중하는 시간도 가져보세요.',
        ],
        hashtags: ['#자유로운영혼', '#쿨한연애', '#마이웨이', '#개인주의'],
      },
    },
  ],
};
