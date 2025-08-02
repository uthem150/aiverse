import type { PersonalityTestData } from '@/types/personalityTest';

export const animalFaceTestData: PersonalityTestData = {
  id: 'animal-face-test',
  title: '🐶🐱 나와 닮은 동물상 테스트',
  description:
    '혹시 내가 강아지상일까, 고양이상일까? 내 외모나 성격이 어떤 동물과 더 닮았는지 알아보는 재미있는 테스트! 나의 숨겨진 동물상을 찾아보세요!',
  category: 'mz-lifestyle',
  resultTypes: [
    'puppy', // 강아지상
    'cat', // 고양이상
    'bunny', // 토끼상
    'bear', // 곰상
    'fox', // 여우상
  ],
  questions: [
    {
      id: 'q1',
      question: '친구와 처음 만났을 때, 나는 주로 어떤 모습으로 다가가나요?',
      options: [
        {
          id: 'q1_a',
          text: '먼저 밝게 웃으며 반갑게 인사한다.',
          emoji: '😄',
          scores: { puppy: 3, bunny: 2 },
        },
        {
          id: 'q1_b',
          text: '말없이 상대방을 관찰하며 먼저 다가오길 기다린다.',
          emoji: '👀',
          scores: { cat: 3, fox: 2 },
        },
        {
          id: 'q1_c',
          text: '어색함을 풀기 위해 유머러스한 이야기를 꺼낸다.',
          emoji: '🤣',
          scores: { bear: 3 },
        },
        {
          id: 'q1_d',
          text: '수줍어하며 조심스럽게 인사를 건넨다.',
          emoji: ' shy',
          scores: { bunny: 3, puppy: 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '주말에 가장 하고 싶은 활동은?',
      options: [
        {
          id: 'q2_a',
          text: '새로운 곳으로 떠나 신나게 놀고 돌아다닌다.',
          emoji: '🤸',
          scores: { puppy: 3, bear: 1 },
        },
        {
          id: 'q2_b',
          text: '집에서 혼자 뒹굴거리며 넷플릭스를 본다.',
          emoji: '🛋️',
          scores: { cat: 3, fox: 2 },
        },
        {
          id: 'q2_c',
          text: '친한 친구 몇 명과 소소한 모임을 가진다.',
          emoji: '👭',
          scores: { bunny: 3, cat: 1 },
        },
        {
          id: 'q2_d',
          text: '평소에 하지 못했던 일을 하며 생산적인 시간을 보낸다.',
          emoji: '💡',
          scores: { fox: 3, bear: 2 },
        },
      ],
    },
    {
      id: 'q3',
      question: '친구가 힘들어 할 때, 나는 어떤 위로를 해줄까요?',
      options: [
        {
          id: 'q3_a',
          text: '곁에서 말없이 꼭 안아주거나 손을 잡아준다.',
          emoji: '🤗',
          scores: { puppy: 3, bear: 3 },
        },
        {
          id: 'q3_b',
          text: '문제를 해결할 수 있는 현실적인 조언을 해준다.',
          emoji: '💬',
          scores: { fox: 3, cat: 1 },
        },
        {
          id: 'q3_c',
          text: '함께 맛있는 것을 먹으러 가거나 기분 전환을 시켜준다.',
          emoji: '🍽️',
          scores: { puppy: 2, bunny: 2 },
        },
        {
          id: 'q3_d',
          text: '힘든 상황에 대해 깊이 공감하고, 그 감정에 귀 기울여준다.',
          emoji: '😭',
          scores: { bunny: 3, bear: 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '나의 표정을 한 단어로 표현한다면?',
      options: [
        {
          id: 'q4_a',
          text: '웃는 얼굴이 매력적인, 선한 인상.',
          emoji: '😊',
          scores: { puppy: 3, bear: 1 },
        },
        {
          id: 'q4_b',
          text: '무표정일 때 차가워 보이지만, 웃으면 반전 매력.',
          emoji: '😶',
          scores: { cat: 3, fox: 3 },
        },
        {
          id: 'q4_c',
          text: '크고 동그란 눈으로 순진무구한 인상.',
          emoji: '😮',
          scores: { bunny: 3, puppy: 1 },
        },
        {
          id: 'q4_d',
          text: '어딘지 모르게 시크하고 도회적인 인상.',
          emoji: '🌆',
          scores: { fox: 2, cat: 2 },
        },
      ],
    },
    {
      id: 'q5',
      question: '이성에게 인기를 끄는 나의 매력은?',
      options: [
        {
          id: 'q5_a',
          text: '애교 많고 활발한 성격.',
          emoji: '💖',
          scores: { puppy: 3, bunny: 2 },
        },
        {
          id: 'q5_b',
          text: '도도하고 시크한 분위기.',
          emoji: '😎',
          scores: { cat: 3, fox: 3 },
        },
        {
          id: 'q5_c',
          text: '따뜻하고 포근한 느낌을 주는 성격.',
          emoji: '🧸',
          scores: { bear: 3, puppy: 1 },
        },
        {
          id: 'q5_d',
          text: '지적이고 세련된 이미지.',
          emoji: '🧐',
          scores: { fox: 2, cat: 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '내가 좋아하는 취미는?',
      options: [
        {
          id: 'q6_a',
          text: '액티비티나 운동처럼 몸을 움직이는 활동.',
          emoji: '🏋️',
          scores: { puppy: 3, bear: 1 },
        },
        {
          id: 'q6_b',
          text: '집에서 혼자 영화나 게임을 즐기는 것.',
          emoji: '🎮',
          scores: { cat: 3, fox: 2 },
        },
        {
          id: 'q6_c',
          text: '친구와 함께하는 맛집 탐방이나 수다.',
          emoji: '💬',
          scores: { bunny: 3, puppy: 2 },
        },
        {
          id: 'q6_d',
          text: '조용히 책을 읽거나 새로운 지식을 배우는 것.',
          emoji: '📖',
          scores: { fox: 3, bear: 2 },
        },
      ],
    },
    {
      id: 'q7',
      question: '스트레스를 풀 때 주로 하는 행동은?',
      options: [
        {
          id: 'q7_a',
          text: '친한 사람들을 만나 고민을 털어놓는다.',
          emoji: '🤝',
          scores: { puppy: 3, bunny: 3 },
        },
        {
          id: 'q7_b',
          text: '혼자만의 시간을 가지며 조용히 생각한다.',
          emoji: '🧘',
          scores: { cat: 3, fox: 2 },
        },
        {
          id: 'q7_c',
          text: '맛있는 음식을 먹거나 잠을 자면서 잊는다.',
          emoji: '😴',
          scores: { bear: 3, bunny: 1 },
        },
        {
          id: 'q7_d',
          text: '복잡한 문제를 해결하는 데 몰두한다.',
          emoji: '🧐',
          scores: { fox: 2, cat: 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '가장 좋아하는 패션 스타일은?',
      options: [
        {
          id: 'q8_a',
          text: '편안하고 귀여운 캐주얼룩.',
          emoji: '👕',
          scores: { puppy: 3, bunny: 2 },
        },
        {
          id: 'q8_b',
          text: '시크하고 깔끔한 미니멀룩.',
          emoji: '🕶️',
          scores: { cat: 3, fox: 3 },
        },
        {
          id: 'q8_c',
          text: '자유분방하고 편안한 오버핏 스타일.',
          emoji: '😀',
          scores: { bear: 3, puppy: 1 },
        },
        {
          id: 'q8_d',
          text: '유행을 따라가면서도 개성을 잃지 않는 스타일.',
          emoji: '🤠',
          scores: { fox: 2, cat: 2 },
        },
      ],
    },
    {
      id: 'q9',
      question: '약속 시간에 늦었을 때 나의 반응은?',
      options: [
        {
          id: 'q9_a',
          text: '미안한 마음에 진심으로 사과하고 빠르게 달려간다.',
          emoji: '🏃',
          scores: { puppy: 3, bunny: 2 },
        },
        {
          id: 'q9_b',
          text: '그럴 수도 있지, 쿨하게 상황을 넘기려 한다.',
          emoji: '😉',
          scores: { cat: 3, fox: 2 },
        },
        {
          id: 'q9_c',
          text: '늦었지만 서두르지 않고 침착하게 행동한다.',
          emoji: '🌿',
          scores: { bear: 3, cat: 1 },
        },
        {
          id: 'q9_d',
          text: '변명을 하기보다는 솔직하게 상황을 설명한다.',
          emoji: '😀',
          scores: { bunny: 3, puppy: 1 },
        },
      ],
    },
    {
      id: 'q10',
      question: '가장 자주 듣는 칭찬은?',
      options: [
        {
          id: 'q10_a',
          text: '늘 웃는 얼굴이라 기분이 좋아진다.',
          emoji: '😁',
          scores: { puppy: 3, bunny: 2 },
        },
        {
          id: 'q10_b',
          text: '무심한 듯 잘 챙겨주는 모습이 매력적이다.',
          emoji: '😄',
          scores: { cat: 3, fox: 3 },
        },
        {
          id: 'q10_c',
          text: '함께 있으면 마음이 편안해진다.',
          emoji: '😌',
          scores: { bear: 3, bunny: 2 },
        },
        {
          id: 'q10_d',
          text: '센스가 좋고 똑똑한 것 같다.',
          emoji: '🧐',
          scores: { fox: 2, cat: 1 },
        },
      ],
    },
    {
      id: 'q11',
      question: '평소에 듣는 목소리 톤은?',
      options: [
        {
          id: 'q11_a',
          text: '높고 활기찬 목소리.',
          emoji: '🥳',
          scores: { puppy: 3, bunny: 3 },
        },
        {
          id: 'q11_b',
          text: '낮고 차분한 목소리.',
          emoji: '😌',
          scores: { cat: 3, bear: 2 },
        },
        {
          id: 'q11_c',
          text: '또렷하고 명확한 목소리.',
          emoji: '🤓',
          scores: { fox: 3, cat: 1 },
        },
        {
          id: 'q11_d',
          text: '부드럽고 조용한 목소리.',
          emoji: '😶‍🌫️',
          scores: { bunny: 2, bear: 3 },
        },
      ],
    },
    {
      id: 'q12',
      question: '싫어하는 사람에게는 어떻게 행동하나요?',
      options: [
        {
          id: 'q12_a',
          text: '티를 내지 않으려 노력하지만, 은연중에 드러난다.',
          emoji: '😅',
          scores: { puppy: 2, bunny: 3 },
        },
        {
          id: 'q12_b',
          text: '관심 없는 척, 아예 신경 쓰지 않는다.',
          emoji: '😶‍🌫️',
          scores: { cat: 3, fox: 3 },
        },
        {
          id: 'q12_c',
          text: '애써 좋은 관계를 유지하려 노력한다.',
          emoji: '🤝',
          scores: { bear: 3, puppy: 1 },
        },
        {
          id: 'q12_d',
          text: '상황에 따라 적당한 거리를 유지한다.',
          emoji: '🫠',
          scores: { fox: 2, cat: 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'puppy',
      title: '🐶 순수하고 발랄한 강아지상',
      description: '당신은 사람들에게 사랑받는 애교 많고 활기찬 강아지상이에요!',
      detailedDescription:
        '사랑스럽고 친화력이 뛰어난 당신은 주변 사람들에게 항상 긍정적인 에너지를 줍니다. 감정 표현이 솔직하고, 좋아하는 사람에게는 아낌없이 애정을 표현해요. 때로는 장난기 넘치는 모습으로 주변을 즐겁게 만들고, 순수한 매력으로 인기를 독차지하는 타입입니다.',
      emoji: '🐶',
      color: '#A0522D', // Sienna
      traits: ['친화력', '애교', '솔직함', '활발함', '낙천적', '인기 많음'],
      compatibility: {
        best: ['곰상', '토끼상'],
        good: ['여우상'],
        avoid: ['고양이상'],
      },
      recommendations: {
        hashtags: ['#강아지상', '#멍뭉미', '#댕댕이', '#인싸'],
        tips: [
          '솔직한 마음을 표현하는 것을 두려워하지 마세요!',
          '가끔은 혼자만의 시간을 가지는 것도 좋아요.',
        ],
      },
    },
    {
      id: 'cat',
      title: '🐱 시크하고 도도한 고양이상',
      description: '당신은 신비롭고 도회적인 매력을 가진 고양이상이에요!',
      detailedDescription:
        '자기만의 세계가 뚜렷하고, 독립적인 성향이 강합니다. 차가워 보일 수 있지만, 한번 마음을 연 사람에게는 한없이 따뜻하고 다정하게 대해줘요. 감정을 쉽게 드러내지 않으며, 속마음을 알 수 없는 반전 매력으로 상대방을 끌어당기는 타입입니다. ',
      emoji: '🐱',
      color: '#696969', // DimGray
      traits: ['시크함', '도도함', '독립적', '반전 매력', '신비로움', '감정 절제'],
      compatibility: {
        best: ['여우상', '곰상'],
        good: ['강아지상'],
        avoid: ['토끼상'],
      },
      recommendations: {
        hashtags: ['#고양이상', '#냥냥이', '#차도녀', '#시크'],
        tips: [
          '가끔은 먼저 다가가 마음을 표현해 보세요.',
          '혼자 있는 시간도 중요하지만, 가끔은 친구들과 함께 즐기는 것도 좋아요.',
        ],
      },
    },
    {
      id: 'bunny',
      title: '🐰 귀엽고 사랑스러운 토끼상',
      description: '당신은 순수하고 사랑스러운 매력으로 주변을 사로잡는 토끼상이에요!',
      detailedDescription:
        '동그란 눈과 부드러운 인상을 가졌으며, 순수하고 해맑은 성격으로 사람들의 마음을 편안하게 해줍니다. 감수성이 풍부하고, 다른 사람의 감정에 깊이 공감하는 능력이 뛰어나요. 수줍음이 많지만, 친해지면 솔직하고 귀여운 매력을 발산하는 타입입니다.',
      emoji: '🐰',
      color: '#FFB6C1', // LightPink
      traits: ['순수함', '귀여움', '감성적', '공감 능력', '소심함', '사랑스러움'],
      compatibility: {
        best: ['강아지상', '곰상'],
        good: ['고양이상'],
        avoid: ['여우상'],
      },
      recommendations: {
        hashtags: ['#토끼상', '#해맑음', '#사랑둥이', '#귀염뽀짝'],
        tips: [
          '자신의 의견을 좀 더 당당하게 표현해 보는 연습을 해보세요.',
          '가끔은 자신의 감정을 솔직하게 드러내는 것도 좋아요.',
        ],
      },
    },
    {
      id: 'bear',
      title: '🐻 푸근하고 듬직한 곰상',
      description: '당신은 따뜻하고 듬직한 매력으로 사람들에게 안정감을 주는 곰상이에요!',
      detailedDescription:
        '느긋하고 여유로운 성격으로, 주변 사람들에게 편안함을 느끼게 해줍니다. 책임감이 강하고, 한 번 시작한 일은 끈기 있게 해내는 듬직한 모습이 매력적이에요. 겉으로는 무뚝뚝해 보여도 속은 따뜻해서, 친한 사람들에게는 한없이 다정한 모습을 보여주는 타입입니다.',
      emoji: '🐻',
      color: '#8B4513', // SaddleBrown
      traits: ['듬직함', '푸근함', '끈기', '책임감', '느긋함', '다정함'],
      compatibility: {
        best: ['강아지상', '고양이상'],
        good: ['토끼상'],
        avoid: ['여우상'],
      },
      recommendations: {
        hashtags: ['#곰상', '#곰돌이', '#푸근', '#듬직'],
        tips: [
          '가끔은 먼저 다가가 마음을 표현해 보세요.',
          '혼자 끙끙 앓기보다는 주변 사람들과 고민을 나누는 것도 좋아요.',
        ],
      },
    },
    {
      id: 'fox',
      title: '🦊 세련되고 지적인 여우상',
      description: '당신은 매혹적이고 똑똑한 매력을 가진 여우상이에요!',
      detailedDescription:
        '세련된 이미지와 지적인 분위기로 사람들의 시선을 사로잡습니다. 상황 판단이 빠르고, 재치 있는 말솜씨로 대화를 이끌어가는 능력이 뛰어나요. 겉으로는 이성적이고 차가워 보이지만, 알고 보면 정이 많고 자신의 사람들에게는 헌신하는 타입입니다. ',
      emoji: '🦊',
      color: '#FF8C00', // DarkOrange
      traits: ['세련됨', '지적', '재치', '이성적', '매혹적', '헌신적'],
      compatibility: {
        best: ['고양이상'],
        good: ['강아지상'],
        avoid: ['토끼상', '곰상'],
      },
      recommendations: {
        hashtags: ['#여우상', '#세련된', '#지적인', '#매혹적'],
        tips: [
          '가끔은 이성적인 판단보다는 감정에 솔직하게 행동해 보는 것도 좋아요.',
          '가까운 사람들에게 마음을 더 열어보세요.',
        ],
      },
    },
  ],
};
