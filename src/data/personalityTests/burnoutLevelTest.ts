import type { PersonalityTestData } from '@/types/personalityTest';

export const burnoutLevelTestData: PersonalityTestData = {
  id: 'burnout-level-test',
  title: '😴 나의 번아웃 레벨 테스트',
  description:
    '매일 바쁘게 살아가는 당신, 혹시 지쳐 있지는 않나요? 나의 번아웃 레벨을 진단하고, 당신에게 필요한 쉼의 처방을 받아보세요!',
  category: 'mz-lifestyle',
  resultTypes: [
    'low-energy-charger', // 에너지 충전 중형 (번아웃 초기)
    'mild-exhaustion-alert', // 가벼운 지침 주의보형 (번아웃 진행 중)
    'moderate-fatigue-warning', // 중증 피로 경고형 (번아웃 심화)
    'severe-burnout-critical', // 심각한 번아웃 위기형 (번아웃 최고조)
    'recharged-and-ready', // 재충전 완료! 준비된 에너자이저형 (번아웃 해소)
  ],
  questions: [
    {
      id: 'q1',
      question: '아침에 눈을 떴을 때 당신의 기분은?',
      options: [
        {
          id: 'q1_a',
          text: '개운하고 활기차다! 오늘도 힘내자!',
          emoji: '☀️',
          scores: { 'recharged-and-ready': 3 },
        },
        {
          id: 'q1_b',
          text: '몸이 좀 무겁지만, 일어나야지... 하는 마음.',
          emoji: '🥱',
          scores: { 'low-energy-charger': 2, 'mild-exhaustion-alert': 1 },
        },
        {
          id: 'q1_c',
          text: '일어나기 싫어서 이불 속에 더 머물고 싶다.',
          emoji: '🛌',
          scores: { 'mild-exhaustion-alert': 3, 'moderate-fatigue-warning': 2 },
        },
        {
          id: 'q1_d',
          text: '천근만근... 일어날 힘조차 없다.',
          emoji: '💀',
          scores: { 'moderate-fatigue-warning': 3, 'severe-burnout-critical': 3 },
        },
      ],
    },
    {
      id: 'q2',
      question: '평소 즐기던 취미나 활동에 대한 흥미는?',
      options: [
        {
          id: 'q2_a',
          text: '여전히 즐겁고 적극적으로 참여한다.',
          emoji: '😊',
          scores: { 'recharged-and-ready': 3 },
        },
        {
          id: 'q2_b',
          text: '가끔은 귀찮지만, 그래도 하면 재미있다.',
          emoji: '🤔',
          scores: { 'low-energy-charger': 2 },
        },
        {
          id: 'q2_c',
          text: '예전만큼 흥미가 생기지 않고, 뭘 해도 재미없다.',
          emoji: '😒',
          scores: { 'mild-exhaustion-alert': 3, 'moderate-fatigue-warning': 2 },
        },
        {
          id: 'q2_d',
          text: '모든 것에 무기력하고 아무것도 하고 싶지 않다.',
          emoji: '😩',
          scores: { 'moderate-fatigue-warning': 3, 'severe-burnout-critical': 3 },
        },
      ],
    },
    {
      id: 'q3',
      question: '업무나 학업에 대한 당신의 집중력은?',
      options: [
        {
          id: 'q3_a',
          text: '높은 집중력으로 효율적으로 업무를 처리한다.',
          emoji: '💡',
          scores: { 'recharged-and-ready': 3 },
        },
        {
          id: 'q3_b',
          text: '이따금 집중이 흐트러지지만, 금방 회복한다.',
          emoji: '🧘',
          scores: { 'low-energy-charger': 2 },
        },
        {
          id: 'q3_c',
          text: '집중하기 힘들고, 사소한 실수도 잦아졌다.',
          emoji: '😵',
          scores: { 'mild-exhaustion-alert': 3, 'moderate-fatigue-warning': 2 },
        },
        {
          id: 'q3_d',
          text: '멍하니 앉아 있거나, 모든 것을 미루게 된다.',
          emoji: '☁️',
          scores: { 'moderate-fatigue-warning': 3, 'severe-burnout-critical': 3 },
        },
      ],
    },
    {
      id: 'q4',
      question: '사람들과의 관계에서 당신은 어떤가요?',
      options: [
        {
          id: 'q4_a',
          text: '에너지를 얻고 즐겁게 소통한다.',
          emoji: '🥳',
          scores: { 'recharged-and-ready': 3 },
        },
        {
          id: 'q4_b',
          text: '가끔은 귀찮지만, 만나면 즐겁다.',
          emoji: '🤝',
          scores: { 'low-energy-charger': 2 },
        },
        {
          id: 'q4_c',
          text: '사람 만나는 것이 피곤하고, 혼자 있고 싶다.',
          emoji: '🤫',
          scores: { 'mild-exhaustion-alert': 3, 'moderate-fatigue-warning': 2 },
        },
        {
          id: 'q4_d',
          text: '사소한 일에도 짜증이 나고, 관계가 부담스럽다.',
          emoji: '😠',
          scores: { 'moderate-fatigue-warning': 3, 'severe-burnout-critical': 3 },
        },
      ],
    },
    {
      id: 'q5',
      question: '갑자기 눈물이 나거나, 사소한 일에 감정 기복이 심해진 적이 있나요?',
      options: [
        {
          id: 'q5_a',
          text: '거의 없다. 감정 조절이 잘 되는 편이다.',
          emoji: '😊',
          scores: { 'recharged-and-ready': 3 },
        },
        {
          id: 'q5_b',
          text: '아주 가끔 피곤할 때 그렇다.',
          emoji: '💧',
          scores: { 'low-energy-charger': 2 },
        },
        {
          id: 'q5_c',
          text: '자주 그렇다. 스스로도 왜 이러는지 모르겠다.',
          emoji: '😭',
          scores: { 'mild-exhaustion-alert': 3, 'moderate-fatigue-warning': 2 },
        },
        {
          id: 'q5_d',
          text: '매일 그렇다. 감정을 주체할 수 없다.',
          emoji: '😱',
          scores: { 'moderate-fatigue-warning': 3, 'severe-burnout-critical': 3 },
        },
      ],
    },
    {
      id: 'q6',
      question: '휴일이나 쉬는 시간이 생기면 무엇을 하나요?',
      options: [
        {
          id: 'q6_a',
          text: '새로운 취미 활동을 하거나, 활발하게 움직인다.',
          emoji: '🚴',
          scores: { 'recharged-and-ready': 3 },
        },
        {
          id: 'q6_b',
          text: '집에서 쉬면서 좋아하는 콘텐츠를 본다.',
          emoji: '📺',
          scores: { 'low-energy-charger': 2 },
        },
        {
          id: 'q6_c',
          text: '잠만 자거나, 아무것도 하지 않고 누워만 있는다.',
          emoji: '💤',
          scores: { 'mild-exhaustion-alert': 3, 'moderate-fatigue-warning': 2 },
        },
        {
          id: 'q6_d',
          text: '쉴 새 없이 해야 할 일들을 생각하며 불안해한다.',
          emoji: '🤯',
          scores: { 'severe-burnout-critical': 3, 'moderate-fatigue-warning': 2 },
        },
      ],
    },
    {
      id: 'q7',
      question: '미래에 대한 생각은?',
      options: [
        {
          id: 'q7_a',
          text: '긍정적이고 기대된다. 목표를 향해 나아가고 싶다.',
          emoji: '🚀',
          scores: { 'recharged-and-ready': 3 },
        },
        {
          id: 'q7_b',
          text: '크게 걱정하지는 않지만, 가끔 막연하게 불안할 때도 있다.',
          emoji: '💭',
          scores: { 'low-energy-charger': 2 },
        },
        {
          id: 'q7_c',
          text: '막막하고 답답하다. 아무것도 하고 싶지 않다.',
          emoji: '🌫️',
          scores: { 'mild-exhaustion-alert': 3, 'moderate-fatigue-warning': 2 },
        },
        {
          id: 'q7_d',
          text: '모든 것이 절망적이고, 희망이 보이지 않는다.',
          emoji: '🥀',
          scores: { 'severe-burnout-critical': 3, 'moderate-fatigue-warning': 3 },
        },
      ],
    },
    {
      id: 'q8',
      question: '식사 습관이나 수면 패턴에 변화가 생겼나요?',
      options: [
        {
          id: 'q8_a',
          text: '규칙적이고 건강한 편이다.',
          emoji: '🥗',
          scores: { 'recharged-and-ready': 3 },
        },
        {
          id: 'q8_b',
          text: '가끔 불규칙하지만, 크게 문제 되지는 않는다.',
          emoji: '⏰',
          scores: { 'low-energy-charger': 2 },
        },
        {
          id: 'q8_c',
          text: '식욕이 없거나 너무 많아지거나, 잠들기 힘들고 자주 깬다.',
          emoji: '😩',
          scores: { 'mild-exhaustion-alert': 3, 'moderate-fatigue-warning': 2 },
        },
        {
          id: 'q8_d',
          text: '심각하게 불규칙하고, 일상생활에 지장이 있다.',
          emoji: '🧟',
          scores: { 'severe-burnout-critical': 3, 'moderate-fatigue-warning': 3 },
        },
      ],
    },
    {
      id: 'q9',
      question: '스스로에게 가장 많이 하는 말은?',
      options: [
        {
          id: 'q9_a',
          text: '나는 할 수 있어! 오늘도 잘 해냈다!',
          emoji: '💪',
          scores: { 'recharged-and-ready': 3 },
        },
        {
          id: 'q9_b',
          text: '좀 쉬고 싶은데...',
          emoji: '😴',
          scores: { 'low-energy-charger': 2, 'mild-exhaustion-alert': 1 },
        },
        {
          id: 'q9_c',
          text: '다 귀찮아... 아무것도 하기 싫다...',
          emoji: '😒',
          scores: { 'mild-exhaustion-alert': 3, 'moderate-fatigue-warning': 2 },
        },
        {
          id: 'q9_d',
          text: '내가 왜 이렇게 살고 있지? 아무 의미 없다...',
          emoji: '💀',
          scores: { 'severe-burnout-critical': 3, 'moderate-fatigue-warning': 3 },
        },
      ],
    },
    {
      id: 'q10',
      question: '번아웃에 대해 주변 사람들에게 이야기한 적이 있나요?',
      options: [
        {
          id: 'q10_a',
          text: '아니요, 저는 번아웃을 겪고 있지 않아요.',
          emoji: '😊',
          scores: { 'recharged-and-ready': 3 },
        },
        {
          id: 'q10_b',
          text: '가끔 피곤하다고 푸념하는 정도예요.',
          emoji: '🗣️',
          scores: { 'low-energy-charger': 2 },
        },
        {
          id: 'q10_c',
          text: '네, 제가 요즘 좀 지쳤다고 이야기한 적이 있어요.',
          emoji: '💬',
          scores: { 'mild-exhaustion-alert': 3, 'moderate-fatigue-warning': 2 },
        },
        {
          id: 'q10_d',
          text: '너무 힘들어서 주변에 도움을 요청하거나 상담을 고려 중이에요.',
          emoji: '🆘',
          scores: { 'severe-burnout-critical': 3, 'moderate-fatigue-warning': 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'recharged-and-ready',
      title: '🔋 재충전 완료! 준비된 에너자이저형',
      description:
        '당신은 번아웃과 거리가 먼, 에너지가 넘치고 활기찬 상태입니다! 스스로의 삶을 즐기며 목표를 향해 나아가고 있네요.',
      detailedDescription:
        '긍정적인 에너지가 넘치고, 하는 일마다 즐거움을 느낍니다. 스트레스 관리 능력이 뛰어나며, 번아웃이 오기 전에 스스로를 돌보고 재충전하는 방법을 잘 알고 있습니다. 지금처럼 건강한 생활 습관을 유지하고, 에너지를 잘 분배하여 즐거운 삶을 이어나가세요!',
      emoji: '🔋',
      color: '#32CD32', // LimeGreen
      traits: ['활기참', '긍정적', '생산적', '스트레스 관리', '자기 돌봄', '목표 지향'],
      compatibility: {
        best: [], // 특정 유형과 호환성보다 전반적인 긍정적 상태
        good: [],
        avoid: [],
      },
      recommendations: {
        tips: [
          '지금처럼 에너지를 잘 관리하고 유지하는 노하우를 주변에 알려주세요!',
          '새로운 도전에 과감히 뛰어들어 당신의 에너지를 긍정적인 방향으로 분출해 보세요.',
          '가끔은 여유를 가지고 주변을 돌아보며 작은 행복을 찾아보세요.',
        ],
        hashtags: ['#에너자이저', '#갓생러', '#번아웃극복', '#활기찬하루'],
      },
    },
    {
      id: 'low-energy-charger',
      title: '⚡ 에너지 충전 중형',
      description:
        '당신은 가볍게 지쳐가는 초기 단계입니다. 아직 번아웃은 아니지만, 에너지가 조금씩 고갈되고 있으니 충전이 필요해요.',
      detailedDescription:
        '아침에 일어나는 것이 조금 힘들고, 가끔 무기력함을 느끼지만, 여전히 할 일은 잘 해내는 편입니다. 평소보다 쉽게 피곤해질 수 있으며, 휴식을 취하면 금방 회복됩니다. 본격적인 번아웃으로 가기 전에 미리 대비하고 쉬어가는 것이 중요합니다.',
      emoji: '⚡',
      color: '#FFD700', // Gold
      traits: ['초기 지침', '피로 누적', '휴식 필요', '무기력함', '회복 가능성'],
      compatibility: {
        best: [],
        good: [],
        avoid: [],
      },
      recommendations: {
        tips: [
          '잠시 하던 일을 멈추고 짧은 휴가를 계획해 보세요.',
          '좋아하는 취미 활동이나 가벼운 운동으로 기분 전환을 시도해 보세요.',
          '충분한 수면과 건강한 식단으로 에너지를 보충하는 것이 중요해요.',
        ],
        hashtags: ['#충전필요', '#피곤', '#쉼이필요해', '#갓생준비'],
      },
    },
    {
      id: 'mild-exhaustion-alert',
      title: '🚨 가벼운 지침 주의보형',
      description:
        '당신은 번아웃의 문턱에 서 있습니다. 무기력함과 피로감이 일상에 영향을 주기 시작했으니, 적극적인 휴식이 필요해요.',
      detailedDescription:
        '업무나 학업에 대한 집중력이 떨어지고, 작은 일에도 짜증이 나거나 감정 기복이 심해질 수 있습니다. 사람 만나는 것이 부담스럽게 느껴지고, 혼자 있고 싶다는 생각이 자주 듭니다. 스스로도 뭔가 잘못되고 있음을 느끼지만, 어떻게 해야 할지 막막할 수 있습니다.',
      emoji: '🚨',
      color: '#FFA500', // Orange
      traits: ['무기력', '집중력 저하', '감정 기복', '관계 회피', '지침', '불안감'],
      compatibility: {
        best: [],
        good: [],
        avoid: [],
      },
      recommendations: {
        tips: [
          '주변 사람들에게 솔직하게 당신의 상태를 이야기하고 도움을 요청하세요.',
          '업무량을 줄이거나, 잠시 재충전의 시간을 갖는 것에 대해 진지하게 고민해 보세요.',
          '가벼운 산책이나 명상으로 마음을 진정시키는 시간을 가져보는 것도 좋아요.',
        ],
        hashtags: ['#번아웃주의보', '#힘들어', '#쉬고싶다', '#내려놓기연습'],
      },
    },
    {
      id: 'moderate-fatigue-warning',
      title: '⚠️ 중증 피로 경고형',
      description:
        '당신은 심각한 번아웃 상태에 접어들었습니다. 모든 것에 의욕이 없고, 육체적/정신적으로 큰 고통을 겪고 있습니다.',
      detailedDescription:
        '극심한 피로감과 함께 불면증, 식욕 부진 또는 과식 등 신체적인 변화가 나타날 수 있습니다. 어떤 것을 해도 즐거움을 느끼지 못하고, 미래에 대한 희망이 사라진 듯한 절망감을 경험합니다. 스스로 해결하기 어려운 단계이므로, 전문가의 도움이 필요합니다.',
      emoji: '⚠️',
      color: '#FF0000', // Red
      traits: ['극심한 피로', '절망감', '무의미', '신체적 증상', '수면 문제', '우울감'],
      compatibility: {
        best: [],
        good: [],
        avoid: [],
      },
      recommendations: {
        tips: [
          '지금 가장 중요한 것은 당신의 건강입니다. 즉시 휴식을 취하고 전문가(정신건강의학과, 심리 상담센터 등)의 도움을 받는 것을 고려해 보세요.',
          '주변 사람들에게 솔직하게 당신의 상태를 알리고 지지를 받으세요.',
          '스스로를 비난하지 말고, 잠시 모든 것을 내려놓는 용기가 필요해요.',
        ],
        hashtags: ['#번아웃위험', '#힘들다', '#도와줘', '#내려놓음'],
      },
    },
    {
      id: 'severe-burnout-critical',
      title: '🚨 심각한 번아웃 위기형',
      description:
        '당신은 번아웃의 최악의 단계에 있습니다. 모든 것이 무의미하고, 극심한 절망감에 사로잡혀 있습니다. 즉각적인 전문적인 도움이 필요해요.',
      detailedDescription:
        '일상생활 자체가 불가능할 정도로 심각한 무기력감과 우울감에 빠져 있습니다. 수면, 식사 등 기본적인 생체 리듬이 완전히 무너지고, 극단적인 생각까지 할 수 있습니다. 이 상태는 혼자서 극복하기 매우 어려우므로, 반드시 전문가의 도움과 적극적인 치료가 필요합니다.',
      emoji: '🚨',
      color: '#8B0000', // DarkRed
      traits: ['극한의 무기력', '심각한 우울', '자포자기', '희망 상실', '절망적', '생명 위협'],
      compatibility: {
        best: [],
        good: [],
        avoid: [],
      },
      recommendations: {
        tips: [
          '즉시 전문가(정신건강의학과, 심리 상담 센터 등)와 상담하여 도움을 받으세요. 스스로 해결하려 하지 마세요.',
          '가족이나 신뢰하는 친구에게 현재 상태를 알리고, 그들의 도움을 받으세요.',
          '스스로를 비난하거나 자책하지 마세요. 당신의 잘못이 아닙니다. 이 또한 지나갈 수 있습니다.',
        ],
        hashtags: ['#번아웃최악', '#도움이필요해', '#상담필수', '#괜찮아'],
      },
    },
  ],
};
