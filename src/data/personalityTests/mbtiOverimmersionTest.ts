import type { PersonalityTestData } from '@/types/personalityTest';

export const mbtiOverimmersionTestData: PersonalityTestData = {
  id: 'mbti-overimmersion-test',
  title: '💖 나의 MBTI 과몰입 유형 테스트',
  description:
    '만인의 인싸템 MBTI! 당신은 MBTI에 얼마나 진심인가요? MBTI를 대하는 당신의 태도를 통해 숨겨진 과몰입 유형을 파헤치고, 내 친구들을 태그해 결과를 공유해보세요!',
  category: 'mz-lifestyle',
  resultTypes: [
    'mbti-blind-believer', // MBTI 맹신론자형
    'mbti-enforcer', // MBTI 강요형
    'mbti-psychic', // MBTI 궁예형
    'mbti-skeptic', // MBTI 합리적 의심형
    'mbti-salesperson', // MBTI 영업사원형
    'mbti-chameleon', // MBTI 카멜레온형
    'mbti-avoider', // MBTI 회피형
    'mbti-analyst', // MBTI 분석가형
  ],
  questions: [
    {
      id: 'q1',
      question: '새로운 사람을 만났을 때, 당신의 MBTI는? 질문에 대한 반응은?',
      options: [
        {
          id: 'q1_a',
          text: '묻지도 않았는데 일단 내 MBTI부터 말한다. (ex. 저 ENTP인데~)',
          emoji: '🗣️',
          scores: { 'mbti-salesperson': 3, 'mbti-enforcer': 2 },
        },
        {
          id: 'q1_b',
          text: '상대방의 말투, 행동을 보고 MBTI를 추측해본다. (촉이 왔다!)',
          emoji: '🔍',
          scores: { 'mbti-psychic': 3, 'mbti-analyst': 1 },
        },
        {
          id: 'q1_c',
          text: '묻는다면 대답은 하지만, 굳이 내가 먼저 말하진 않는다.',
          emoji: '😌',
          scores: { 'mbti-skeptic': 2, 'mbti-avoider': 1 },
        },
        {
          id: 'q1_d',
          text: 'MBTI는 과학이다! 나 같은 OOOO는 원래 이런데~하며 유형에 대한 신뢰를 보인다.',
          emoji: '💯',
          scores: { 'mbti-blind-believer': 3, 'mbti-enforcer': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '친구와 싸웠을 때, 당신은 MBTI를 어떻게 활용하는가?',
      options: [
        {
          id: 'q2_a',
          text: '아... 역시 OOOO라서 이렇게 반응하는군. (유형에 따른 상대방 이해)',
          emoji: '💡',
          scores: { 'mbti-psychic': 3, 'mbti-analyst': 2 },
        },
        {
          id: 'q2_b',
          text: '내 OOOO 성격에 이런 건 못 참지! (MBTI를 근거로 내 행동 정당화)',
          emoji: '😤',
          scores: { 'mbti-blind-believer': 3, 'mbti-enforcer': 1 },
        },
        {
          id: 'q2_c',
          text: '싸움과 MBTI는 별개다. 인간 관계는 복잡하니까.',
          emoji: '🙅',
          scores: { 'mbti-skeptic': 3, 'mbti-avoider': 2 },
        },
        {
          id: 'q2_d',
          text: '상대방의 MBTI에 맞춰 대처 방법을 바꾼다. (화해를 위한 전략)',
          emoji: '🦎',
          scores: { 'mbti-chameleon': 3, 'mbti-salesperson': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: 'MBTI 검사를 다시 했는데 결과가 바뀌었다면?',
      options: [
        {
          id: 'q3_a',
          text: '그럴 리 없어! 내가 잘못 알았나? 다시 또 해본다.',
          emoji: '❓',
          scores: { 'mbti-blind-believer': 3, 'mbti-analyst': 1 },
        },
        {
          id: 'q3_b',
          text: '그럴 수도 있지! 나는 계속 성장하고 변하는 사람이니까~',
          emoji: '🌱',
          scores: { 'mbti-chameleon': 3, 'mbti-skeptic': 2 },
        },
        {
          id: 'q3_c',
          text: '내가 원래 어떤 유형이었는지 헷갈린다. 혼란스럽다.',
          emoji: '🤯',
          scores: { 'mbti-avoider': 3, 'mbti-salesperson': 1 },
        },
        {
          id: 'q3_d',
          text: '무슨 검사가 이렇게 정확도가 낮아? 신뢰성 의심.',
          emoji: '😒',
          scores: { 'mbti-skeptic': 3, 'mbti-analyst': 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '직장에서 팀 프로젝트를 할 때, MBTI를 활용하는 당신의 모습은?',
      options: [
        {
          id: 'q4_a',
          text: '팀원들의 MBTI를 파악하여 역할 분담과 소통 전략을 짠다.',
          emoji: '🧠',
          scores: { 'mbti-analyst': 3, 'mbti-enforcer': 2 },
        },
        {
          id: 'q4_b',
          text: '내 MBTI 유형의 특성을 어필하며 내 의견을 강력하게 주장한다.',
          emoji: '💪',
          scores: { 'mbti-blind-believer': 2, 'mbti-salesperson': 1 },
        },
        {
          id: 'q4_c',
          text: 'MBTI에 얽매이기보다, 개개인의 강점과 약점을 파악하려 노력한다.',
          emoji: '⚖️',
          scores: { 'mbti-skeptic': 3, 'mbti-avoider': 1 },
        },
        {
          id: 'q4_d',
          text: '팀원들의 MBTI를 추측하며 몰래 관찰한다.',
          emoji: '👀',
          scores: { 'mbti-psychic': 3 },
        },
      ],
    },
    {
      id: 'q5',
      question: 'MBTI 관련 밈(meme)이나 짤을 봤을 때 당신의 반응은?',
      options: [
        {
          id: 'q5_a',
          text: '내 유형 짤은 무조건 저장! 친구들에게 바로 공유한다.',
          emoji: '💾',
          scores: { 'mbti-salesperson': 3, 'mbti-blind-believer': 2 },
        },
        {
          id: 'q5_b',
          text: '내 유형은 안 그런데? 하면서도 다른 유형 짤을 흥미롭게 본다.',
          emoji: '🤔',
          scores: { 'mbti-skeptic': 2, 'mbti-analyst': 1 },
        },
        {
          id: 'q5_c',
          text: '이 밈을 누가 만들었을까? 유형별 특징 분석이 정확하군!',
          emoji: '🧐',
          scores: { 'mbti-analyst': 3, 'mbti-psychic': 2 },
        },
        {
          id: 'q5_d',
          text: '지인들 유형 짤을 찾아보며 그들의 반응을 상상하며 즐거워한다.',
          emoji: '😂',
          scores: { 'mbti-enforcer': 3, 'mbti-psychic': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '소개팅에서 상대방의 MBTI를 알게 되었다면?',
      options: [
        {
          id: 'q6_a',
          text: '속으로 궁합을 재보고, 그 유형에 맞춰 대화 방식을 조절한다.',
          emoji: '💞',
          scores: { 'mbti-chameleon': 3, 'mbti-psychic': 2 },
        },
        {
          id: 'q6_b',
          text: 'MBTI는 MBTI일 뿐! 그 사람 자체를 보려 노력한다.',
          emoji: '😌',
          scores: { 'mbti-skeptic': 3, 'mbti-avoider': 1 },
        },
        {
          id: 'q6_c',
          text: 'MBTI 궁합표를 줄줄 외우며, 이상형과의 일치 여부를 따진다.',
          emoji: '💖',
          scores: { 'mbti-blind-believer': 3, 'mbti-enforcer': 1 },
        },
        {
          id: 'q6_d',
          text: '상대방의 MBTI를 분석하여 흥미로운 대화 주제를 이끌어낸다.',
          emoji: '🗣️',
          scores: { 'mbti-salesperson': 2, 'mbti-analyst': 3 },
        },
      ],
    },
    {
      id: 'q7',
      question: 'MBTI를 모르는 친구에게 MBTI를 설명한다면?',
      options: [
        {
          id: 'q7_a',
          text: 'MBTI는 과학이고 진리임을 역설하며, 검사를 강요한다.',
          emoji: '📢',
          scores: { 'mbti-enforcer': 3, 'mbti-blind-believer': 2 },
        },
        {
          id: 'q7_b',
          text: 'MBTI는 이렇고 저렇고~ 모든 유형의 특징을 다 알려준다.',
          emoji: '📚',
          scores: { 'mbti-salesperson': 3, 'mbti-analyst': 2 },
        },
        {
          id: 'q7_c',
          text: '그냥 성격 유형 테스트 같은 건데 재미로만 보면 돼~',
          emoji: '🤷',
          scores: { 'mbti-skeptic': 3, 'mbti-avoider': 1 },
        },
        {
          id: 'q7_d',
          text: '너는 아마 OOOO일걸? 하면서 대략적으로 추측해준다.',
          emoji: '🔮',
          scores: { 'mbti-psychic': 3, 'mbti-chameleon': 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '사람들의 행동을 보고 MBTI를 추측하는 당신의 정확도는?',
      options: [
        {
          id: 'q8_a',
          text: '거의 80% 이상은 맞춘다! 내 궁예 실력은 남다르다.',
          emoji: '💯',
          scores: { 'mbti-psychic': 3, 'mbti-analyst': 2 },
        },
        {
          id: 'q8_b',
          text: '대부분 틀려서, 그냥 묻는 게 빠르다.',
          emoji: '😅',
          scores: { 'mbti-skeptic': 2, 'mbti-avoider': 1 },
        },
        {
          id: 'q8_c',
          text: '정확도보다는 흥미 위주! MBTI는 재미로 보는 거니까~',
          emoji: '😂',
          scores: { 'mbti-chameleon': 3, 'mbti-salesperson': 1 },
        },
        {
          id: 'q8_d',
          text: 'MBTI로 사람을 단정 짓는 건 위험하다. 추측하지 않는다.',
          emoji: '🙅',
          scores: { 'mbti-avoider': 3, 'mbti-skeptic': 2 },
        },
      ],
    },
    {
      id: 'q9',
      question: 'MBTI 유형별 궁합표를 본다면?',
      options: [
        {
          id: 'q9_a',
          text: '나의 베스트 궁합 유형과 워스트 궁합 유형을 외워버린다.',
          emoji: '❤️‍🔥',
          scores: { 'mbti-blind-believer': 3, 'mbti-enforcer': 2 },
        },
        {
          id: 'q9_b',
          text: '재미로 보지만, 실제 인간관계에 적용하진 않는다.',
          emoji: '👀',
          scores: { 'mbti-skeptic': 3, 'mbti-analyst': 1 },
        },
        {
          id: 'q9_c',
          text: '나와 맞는 유형 친구들에게 궁합표를 공유하며 함께 놀란다.',
          emoji: '🙌',
          scores: { 'mbti-salesperson': 3, 'mbti-psychic': 1 },
        },
        {
          id: 'q9_d',
          text: '궁합표에 나온 대로 실제 내 주변 사람들을 대조해본다.',
          emoji: '🔬',
          scores: { 'mbti-analyst': 3, 'mbti-chameleon': 2 },
        },
      ],
    },
    {
      id: 'q10',
      question: '당신에게 MBTI란?',
      options: [
        {
          id: 'q10_a',
          text: '나를 가장 잘 설명해주는 과학적인 지표이자 인생의 나침반!',
          emoji: '🧭',
          scores: { 'mbti-blind-believer': 3, 'mbti-enforcer': 2 },
        },
        {
          id: 'q10_b',
          text: '사람들을 이해하는 데 유용한 도구이자 소통의 윤활유.',
          emoji: '🗣️',
          scores: { 'mbti-analyst': 3, 'mbti-psychic': 2 },
        },
        {
          id: 'q10_c',
          text: '친구들과 웃고 떠들 수 있는 재미있는 대화 주제일 뿐!',
          emoji: '😂',
          scores: { 'mbti-skeptic': 3, 'mbti-chameleon': 2 },
        },
        {
          id: 'q10_d',
          text: '내 자신을 너무 규정짓고 싶지 않은, 그냥 그런 테스트.',
          emoji: '🚫',
          scores: { 'mbti-avoider': 3, 'mbti-skeptic': 1 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'mbti-blind-believer',
      title: '💯 MBTI 맹신론자형',
      description:
        '당신에게 MBTI는 과학이자 진리! MBTI 유형 특징은 당신을 설명하는 완벽한 가이드북이자, 타인을 이해하는 절대적인 기준입니다. MBTI가 틀렸을 리 없어!',
      detailedDescription:
        '자신의 MBTI 유형 특징을 맹목적으로 신뢰하며, 모든 행동과 생각을 MBTI로 설명하려 합니다. 타인의 MBTI를 알면 그 사람을 다 안다고 생각하기도 합니다. MBTI 궁합, 유형별 특징 밈 등을 진지하게 받아들이며, MBTI 관련 콘텐츠를 끊임없이 찾아봅니다.',
      emoji: '💯',
      color: '#FF4500', // OrangeRed
      traits: ['맹목적 신뢰', '확신', '단순화', '열정적', '명확성 추구', '공감'],
      compatibility: {
        best: ['mbti-enforcer', 'mbti-salesperson'],
        good: [],
        avoid: ['mbti-skeptic', 'mbti-avoider'],
      },
      recommendations: {
        tips: [
          'MBTI는 재미와 참고용이라는 것을 기억하고, 사람 자체의 다양성을 인정하는 연습을 해보세요.',
          '때로는 MBTI에 얽매이지 않고 자유롭게 사고하고 행동해 보세요.',
          '유형에 대한 맹신보다, 각 유형의 강점을 이해하고 존중하는 자세가 중요해요.',
        ],
        hashtags: ['#MBTI는과학', '#내MBTI는진리', '#맹신론자', '#MBTI덕후'],
      },
    },
    {
      id: 'mbti-enforcer',
      title: '📢 MBTI 강요형',
      description:
        '당신은 만나는 모든 사람에게 MBTI를 묻고, 검사를 시키며, 유형을 파악해야 직성이 풀리는 MBTI 영업부장입니다.',
      detailedDescription:
        '새로운 사람을 만나면 MBTI부터 묻고, 모른다면 검사를 시키거나 추측합니다. 모든 사람을 MBTI 유형에 맞춰 분석하고 분류하는 것을 좋아하며, 자신의 분석이 맞을 때 쾌감을 느낍니다. 때로는 상대방이 부담을 느낄 정도로 MBTI를 강요할 수 있습니다.',
      emoji: '📢',
      color: '#4169E1', // Royal Blue
      traits: ['적극적', '분류욕', '확인 본능', '지배적', '호기심', '강요'],
      compatibility: {
        best: ['mbti-blind-believer', 'mbti-psychic'],
        good: [],
        avoid: ['mbti-avoider', 'mbti-skeptic'],
      },
      recommendations: {
        tips: [
          '모든 사람이 MBTI에 관심이 있는 것은 아니니, 상대방의 반응을 살피며 조절하는 것이 중요해요.',
          'MBTI로 사람을 단정 짓기보다, 개인의 고유한 특성을 존중해 주세요.',
          '때로는 MBTI 없이도 사람을 이해할 수 있다는 것을 느껴보세요.',
        ],
        hashtags: ['#MBTI물어봄', '#MBTI검사필수', '#MBTI과몰입', '#나만없어MBTI'],
      },
    },
    {
      id: 'mbti-psychic',
      title: '🔮 MBTI 궁예형',
      description:
        '당신은 상대방의 말투, 행동만 봐도 MBTI를 귀신같이 알아맞히는 촉 좋은 MBTI 예언가입니다.',
      detailedDescription:
        '별다른 정보 없이도 상대방의 MBTI를 정확하게 예측하는 능력이 있습니다. 자신만의 데이터베이스와 직관을 활용하여 사람을 분석하며, 자신의 예측이 맞을 때마다 뿌듯함을 느낍니다. 때로는 너무 정확해서 상대방을 소름 돋게 할 수도 있습니다.',
      emoji: '🔮',
      color: '#9932CC', // Dark Orchid
      traits: ['직관적', '분석적', '촉', '통찰력', '관찰력', '예리함'],
      compatibility: {
        best: ['mbti-analyst', 'mbti-chameleon'],
        good: [],
        avoid: ['mbti-avoider', 'mbti-skeptic'],
      },
      recommendations: {
        tips: [
          '당신의 뛰어난 관찰력과 통찰력은 MBTI 외 다른 분야에서도 큰 도움이 될 수 있어요.',
          '예측이 틀릴 수도 있다는 것을 받아들이고, 유연한 사고를 가지세요.',
          '사람을 유형으로만 판단하기보다, 그 사람 자체의 복합적인 면을 이해하려 노력해 보세요.',
        ],
        hashtags: ['#MBTI궁예', '#촉MBTI', '#MBTI예언가', '#소름돋는정확도'],
      },
    },
    {
      id: 'mbti-skeptic',
      title: '🤔 MBTI 합리적 의심형',
      description:
        '당신은 MBTI를 재미로만 볼 뿐, 맹신하거나 과몰입하지 않는 합리적인 MBTI 회의론자입니다.',
      detailedDescription:
        'MBTI는 단순한 성격 유형 검사일 뿐이라고 생각하며, 사람을 16가지 유형으로만 나누는 것에 반감을 가집니다. MBTI가 틀렸다고 주장하거나, 과학적 근거를 들이밀며 반박하기도 합니다. 하지만 친구들이 MBTI로 떠들 때는 조용히 듣고 참여하는 유연함을 가지고 있습니다.',
      emoji: '🤔',
      color: '#808080', // Gray
      traits: ['합리적', '비판적 사고', '논리적', '회의적', '유연함', '관찰자'],
      compatibility: {
        best: ['mbti-avoider', 'mbti-analyst'],
        good: [],
        avoid: ['mbti-blind-believer', 'mbti-enforcer'],
      },
      recommendations: {
        tips: [
          '당신의 비판적 사고는 좋지만, 가끔은 너무 진지하게 받아들이기보다 가볍게 즐기는 것도 MBTI의 묘미예요.',
          '다른 사람들의 MBTI 과몰입을 비난하기보다, 그들이 재미를 느끼는 방식을 이해해 보세요.',
          'MBTI를 통해 사람들의 행동 패턴을 이해하는 데 도움이 될 수도 있어요.',
        ],
        hashtags: ['#MBTI회의론자', '#MBTI는재미로', '#합리적사고', '#쿨한MBTI'],
      },
    },
    {
      id: 'mbti-salesperson',
      title: '🗣️ MBTI 영업사원형',
      description:
        '당신은 내가 아는 MBTI 정보를 모든 사람에게 알려주고 싶어 하는 타고난 MBTI 영업사원입니다.',
      detailedDescription:
        'MBTI 유형별 특징, 궁합, 밈 등을 끊임없이 공유하며 주변 사람들을 MBTI의 세계로 끌어들이려 합니다. 자신이 아는 MBTI 지식을 뽐내고, 이를 통해 사람들과 소통하는 것을 즐깁니다. MBTI 관련 정보라면 누구보다 빠르게 습득하고 전달합니다.',
      emoji: '🗣️',
      color: '#FFD700', // Gold
      traits: ['정보 공유', '적극적', '사교적', '수다스러움', '지식 나눔', '관심 유도'],
      compatibility: {
        best: ['mbti-blind-believer', 'mbti-enforcer'],
        good: [],
        avoid: ['mbti-avoider', 'mbti-skeptic'],
      },
      recommendations: {
        tips: [
          '정보 공유는 좋지만, 상대방이 원하지 않을 때는 잠시 멈추는 센스가 필요해요.',
          'MBTI 외에도 흥미로운 다른 대화 주제를 찾아보는 것도 좋아요.',
          '가끔은 자신의 MBTI 지식을 테스트해보는 것도 재미있을 거예요.',
        ],
        hashtags: ['#MBTI영업', '#MBTI지식인', '#MBTI전도사', '#MBTI과몰입'],
      },
    },
    {
      id: 'mbti-chameleon',
      title: '🌱 MBTI 카멜레온형',
      description:
        '당신은 상황과 상대방에 따라 MBTI 유형이 바뀌는, 진짜 MBTI는 비밀인 카멜레온 같은 존재입니다.',
      detailedDescription:
        '실제 MBTI 유형이 명확하지 않거나, 상황에 따라 자신의 유형을 다르게 말하는 경향이 있습니다. 때로는 상대방이 원하는 유형에 맞춰주거나, 자신의 이미지를 위해 특정 유형을 어필하기도 합니다. 유연하고 적응력이 뛰어나지만, 진짜 MBTI는 그 누구도 알 수 없습니다.',
      emoji: '🌱',
      color: '#90EE90', // Light Green
      traits: ['유연함', '적응력', '비밀스러움', '배려', '친화적', '모호함'],
      compatibility: {
        best: ['mbti-psychic', 'mbti-skeptic'],
        good: [],
        avoid: ['mbti-blind-believer', 'mbti-enforcer'],
      },
      recommendations: {
        tips: [
          '때로는 자신의 진짜 MBTI를 솔직하게 드러내는 용기도 필요해요.',
          '다양한 유형을 연기하는 것도 좋지만, 진짜 자신의 모습을 잃지 않도록 주의하세요.',
          '하나의 유형으로 규정되기 싫다면, MBTI는 재미로만 즐기는 게 좋아요.',
        ],
        hashtags: ['#MBTI카멜레온', '#진짜MBTI는비밀', '#MBTI유연', '#변화무쌍MBTI'],
      },
    },
    {
      id: 'mbti-avoider',
      title: '🚫 MBTI 회피형',
      description:
        '당신은 MBTI에 크게 관심이 없고, 자신의 MBTI를 밝히는 것을 꺼리거나 아예 모르는 MBTI 회피형입니다.',
      detailedDescription:
        'MBTI 테스트를 해본 적이 없거나, 자신의 유형을 잊어버리거나, 굳이 말하고 싶어 하지 않습니다. 사람을 유형으로 나누는 것에 거부감이 있거나, 자신의 복잡한 성격이 MBTI 16가지로 규정되는 것을 싫어합니다. MBTI 이야기가 나오면 조용히 듣기만 하는 편입니다.',
      emoji: '🚫',
      color: '#808080', // Gray (result type for skepticism/avoidance)
      traits: ['무관심', '개성 중시', '비규정적', '자유로움', '비밀스러움', '독립적'],
      compatibility: {
        best: ['mbti-skeptic', 'mbti-analyst'],
        good: [],
        avoid: ['mbti-blind-believer', 'mbti-enforcer', 'mbti-salesperson'],
      },
      recommendations: {
        tips: [
          'MBTI는 하나의 도구일 뿐이니, 너무 거부감을 가질 필요는 없어요. 가볍게 즐겨보세요.',
          '때로는 친구들과 MBTI 이야기를 통해 유대감을 형성할 수도 있어요.',
          '자신을 규정하기 싫은 마음을 존중하면서도, 타인의 MBTI 관심도 이해해 주세요.',
        ],
        hashtags: ['#MBTI몰라요', '#내MBTI는비밀', '#MBTI관심없음', '#자유로운영혼'],
      },
    },
    {
      id: 'mbti-analyst',
      title: '🔬 MBTI 분석가형',
      description:
        '당신은 MBTI의 유형별 특징, 기능론, 심화 이론까지 파고드는 것을 즐기는 전문적인 MBTI 분석가입니다.',
      detailedDescription:
        '단순히 자신의 유형 특징을 아는 것을 넘어, MBTI의 이론적 배경과 각 지표의 의미, 기능론(Fi, Te 등)까지 깊이 있게 탐구합니다. MBTI를 통해 사람의 행동 패턴을 이해하고, 심리적인 분석을 하는 것을 즐깁니다. 잘못된 MBTI 정보에 대해서는 정확하게 짚어줍니다.',
      emoji: '🔬',
      color: '#2F4F4F', // Dark Slate Gray
      traits: ['분석적', '논리적', '탐구적', '심층적', '정확성 추구', '학구열'],
      compatibility: {
        best: ['mbti-psychic', 'mbti-skeptic'],
        good: [],
        avoid: ['mbti-blind-believer', 'mbti-avoider'],
      },
      recommendations: {
        tips: [
          'MBTI 이론을 실제 사람들에게 적용하며 통찰력을 키워보세요.',
          '너무 이론에만 갇히지 말고, 실제 사람들과의 교류를 통해 다양한 경험을 쌓아보세요.',
          '당신의 분석적인 시선은 MBTI 외 다른 분야에서도 큰 도움이 될 거예요.',
        ],
        hashtags: ['#MBTI분석', '#MBTI이론', '#MBTI전문가', '#심화MBTI'],
      },
    },
  ],
};
