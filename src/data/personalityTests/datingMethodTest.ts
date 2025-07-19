import type { PersonalityTestData } from '@/types/personalityTest';

export const datingMethodTestData: PersonalityTestData = {
  id: 'dating-method-test',
  title: '👋 내게 맞는 만남의 방식 테스트',
  description:
    '소개팅, 동호회, 앱, 우연한 만남... 나에게 찰떡같이 맞는 연애 시작 방법은 무엇일까? 당신의 연애 성향에 딱 맞는 만남의 방식을 찾아보세요!',
  category: 'romance',
  resultTypes: [
    'calculated-introducer', // 계획된 소개팅형
    'serendipitous-romantic', // 우연한 만남형
    'hobby-networker', // 취미/네트워크형
    'app-navigator', // 앱 탐색형
    'friend-facilitator', // 친구 주선형
    'social-explorer', // 사교 활동형
    'direct-approach-seeker', // 적극적 대시형
    'patient-observer', // 인내심 관찰형
  ],
  questions: [
    {
      id: 'q1',
      question: '새로운 사람을 만날 때, 당신은 어떤 상황을 선호하나요?',
      options: [
        {
          id: 'q1_a',
          text: '어느 정도 정보가 있고 준비된 상태에서 만나는 것',
          emoji: '📋',
          scores: { 'calculated-introducer': 3, 'friend-facilitator': 2, 'patient-observer': 1 },
        },
        {
          id: 'q1_b',
          text: '우연히 마주치거나 예상치 못한 상황에서 자연스럽게 만나는 것',
          emoji: '🍀',
          scores: { 'serendipitous-romantic': 3, 'social-explorer': 2 },
        },
        {
          id: 'q1_c',
          text: '나의 관심사를 공유하는 모임이나 동호회에서 만나는 것',
          emoji: '👯',
          scores: { 'hobby-networker': 3, 'social-explorer': 2 },
        },
        {
          id: 'q1_d',
          text: '집에서 편안하게 온라인으로 새로운 사람들을 탐색하는 것',
          emoji: '📱',
          scores: { 'app-navigator': 3, 'patient-observer': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '이성을 만날 때 가장 먼저 고려하는 요소는?',
      options: [
        {
          id: 'q2_a',
          text: '상대방의 배경이나 정보 (직업, 나이 등)',
          emoji: '📊',
          scores: { 'calculated-introducer': 3, 'friend-facilitator': 2 },
        },
        {
          id: 'q2_b',
          text: '첫눈에 느껴지는 매력이나 느낌',
          emoji: '✨',
          scores: { 'serendipitous-romantic': 3, 'direct-approach-seeker': 2 },
        },
        {
          id: 'q2_c',
          text: '공통의 관심사나 대화 코드',
          emoji: '💬',
          scores: { 'hobby-networker': 3, 'social-explorer': 2 },
        },
        {
          id: 'q2_d',
          text: '나와 얼마나 잘 맞을지 데이터나 프로필 정보',
          emoji: '📝',
          scores: { 'app-navigator': 3, 'patient-observer': 2 },
        },
      ],
    },
    {
      id: 'q3',
      question: '만남을 위한 노력에 대해 어떻게 생각하나요?',
      options: [
        {
          id: 'q3_a',
          text: '시간과 노력을 들여도 좋은 사람을 만나는 게 중요하다.',
          emoji: '💪',
          scores: { 'calculated-introducer': 2, 'friend-facilitator': 2, 'hobby-networker': 1 },
        },
        {
          id: 'q3_b',
          text: '억지로 노력하기보다 자연스러운 흐름에 맡기고 싶다.',
          emoji: '🍃',
          scores: { 'serendipitous-romantic': 3, 'patient-observer': 2 },
        },
        {
          id: 'q3_c',
          text: '재미있게 즐기면서 사람들을 만나고 싶다.',
          emoji: '🥳',
          scores: { 'social-explorer': 3, 'direct-approach-seeker': 1 },
        },
        {
          id: 'q3_d',
          text: '효율적인 방법으로 많은 사람을 만나고 싶다.',
          emoji: '⏱️',
          scores: { 'app-navigator': 3, 'calculated-introducer': 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: '첫 만남에서 어색함을 느낀다면 어떻게 대처하나요?',
      options: [
        {
          id: 'q4_a',
          text: '미리 준비한 질문이나 대화 주제로 분위기를 띄우려 한다.',
          emoji: '🗣️',
          scores: { 'calculated-introducer': 3, 'friend-facilitator': 2 },
        },
        {
          id: 'q4_b',
          text: '상대방의 반응을 살피며 서서히 편안해질 때까지 기다린다.',
          emoji: '🤫',
          scores: { 'patient-observer': 3, 'serendipitous-romantic': 1 },
        },
        {
          id: 'q4_c',
          text: '공통의 관심사를 찾아 적극적으로 이야기를 이어간다.',
          emoji: '🤝',
          scores: { 'hobby-networker': 3, 'social-explorer': 2 },
        },
        {
          id: 'q4_d',
          text: '어색함이 느껴지면 다음 만남을 고려하지 않게 된다.',
          emoji: '❌',
          scores: { 'direct-approach-seeker': 2, 'app-navigator': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '당신에게 이상적인 첫 데이트 장소는?',
      options: [
        {
          id: 'q5_a',
          text: '차분하고 대화에 집중할 수 있는 분위기 좋은 카페/레스토랑',
          emoji: '☕',
          scores: { 'calculated-introducer': 3, 'friend-facilitator': 2 },
        },
        {
          id: 'q5_b',
          text: '우연한 이벤트가 생길 수 있는 야외 활동 (피크닉, 산책 등)',
          emoji: '🌳',
          scores: { 'serendipitous-romantic': 3, 'social-explorer': 2 },
        },
        {
          id: 'q5_c',
          text: '공통의 관심사를 즐길 수 있는 특별한 공간 (전시회, 공연, 게임방 등)',
          emoji: '🎭',
          scores: { 'hobby-networker': 3, 'app-navigator': 1 },
        },
        {
          id: 'q5_d',
          text: '새롭고 핫한, SNS에서 인기 있는 장소',
          emoji: '📸',
          scores: { 'direct-approach-seeker': 2, 'social-explorer': 3 },
        },
      ],
    },
    {
      id: 'q6',
      question: '이성에게 매력을 느낄 때, 당신의 행동은?',
      options: [
        {
          id: 'q6_a',
          text: '호감 가는 상대에게 직접적으로 다가가 말을 건다.',
          emoji: '🗣️',
          scores: { 'direct-approach-seeker': 3, 'social-explorer': 2 },
        },
        {
          id: 'q6_b',
          text: '상대방의 주변을 맴돌며 나에게 관심이 있는지 탐색한다.',
          emoji: '👀',
          scores: { 'patient-observer': 3, 'serendipitous-romantic': 1 },
        },
        {
          id: 'q6_c',
          text: '친구를 통해 자연스럽게 연결될 기회를 엿본다.',
          emoji: '🤝',
          scores: { 'friend-facilitator': 3, 'hobby-networker': 2 },
        },
        {
          id: 'q6_d',
          text: '온라인 프로필을 검색하거나 DM을 보낼지 고민한다.',
          emoji: '📱',
          scores: { 'app-navigator': 3, 'calculated-introducer': 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: '이상형의 조건이 구체적인 편인가요?',
      options: [
        {
          id: 'q7_a',
          text: '네, 직업, 가치관 등 구체적인 조건이 중요해요.',
          emoji: '✅',
          scores: { 'calculated-introducer': 3, 'app-navigator': 2 },
        },
        {
          id: 'q7_b',
          text: '아니요, 느낌이나 분위기가 더 중요해요.',
          emoji: '✨',
          scores: { 'serendipitous-romantic': 3, 'direct-approach-seeker': 2 },
        },
        {
          id: 'q7_c',
          text: '어느 정도는 있지만, 만나면서 맞춰갈 수 있어요.',
          emoji: '🙌',
          scores: { 'hobby-networker': 2, 'social-explorer': 3, 'friend-facilitator': 1 },
        },
        {
          id: 'q7_d',
          text: '네, 하지만 스스로 드러내기보다는 상대방을 파악하며 확인해요.',
          emoji: '🔍',
          scores: { 'patient-observer': 3 },
        },
      ],
    },
    {
      id: 'q8',
      question: '만남이 잘 이루어지지 않을 때, 당신은?',
      options: [
        {
          id: 'q8_a',
          text: '원인을 분석하고 다음 만남을 위한 전략을 세운다.',
          emoji: '📈',
          scores: { 'calculated-introducer': 3, 'app-navigator': 2 },
        },
        {
          id: 'q8_b',
          text: '쿨하게 넘기고 다음 기회를 노린다.',
          emoji: '😎',
          scores: {
            'direct-approach-seeker': 3,
            'serendipitous-romantic': 2,
            'social-explorer': 1,
          },
        },
        {
          id: 'q8_c',
          text: '친구에게 하소연하거나 조언을 구한다.',
          emoji: '💬',
          scores: { 'friend-facilitator': 3, 'hobby-networker': 2 },
        },
        {
          id: 'q8_d',
          text: '내 문제인가 자책하며 혼자 속상해한다.',
          emoji: '😔',
          scores: { 'patient-observer': 3 },
        },
      ],
    },
    {
      id: 'q9',
      question: '새로운 모임이나 장소에 갔을 때, 당신은?',
      options: [
        {
          id: 'q9_a',
          text: '주변을 탐색하며 대화할 만한 사람을 찾는다.',
          emoji: '👀',
          scores: { 'social-explorer': 3, 'direct-approach-seeker': 2 },
        },
        {
          id: 'q9_b',
          text: '누군가 먼저 다가오기를 기다리는 편이다.',
          emoji: '🤫',
          scores: { 'patient-observer': 3, 'serendipitous-romantic': 1 },
        },
        {
          id: 'q9_c',
          text: '아는 사람이 있다면 그 사람 옆에 붙어 있는다.',
          emoji: '🤝',
          scores: { 'friend-facilitator': 3, 'hobby-networker': 2 },
        },
        {
          id: 'q9_d',
          text: '낯선 환경에 긴장하며 조심스럽게 행동한다.',
          emoji: '😟',
          scores: { 'calculated-introducer': 1, 'app-navigator': 1, 'patient-observer': 2 },
        },
      ],
    },
    {
      id: 'q10',
      question: '연애 시작 전, 상대방에 대한 정보가 얼마나 필요한가요?',
      options: [
        {
          id: 'q10_a',
          text: '많을수록 좋다. 사전 조사를 충분히 하고 싶다.',
          emoji: '📚',
          scores: { 'calculated-introducer': 3, 'app-navigator': 3 },
        },
        {
          id: 'q10_b',
          text: '거의 필요 없다. 직접 만나서 알아가는 재미가 있다.',
          emoji: '🚀',
          scores: { 'serendipitous-romantic': 3, 'direct-approach-seeker': 2 },
        },
        {
          id: 'q10_c',
          text: '친구가 말해주는 최소한의 정보면 충분하다.',
          emoji: '🗣️',
          scores: { 'friend-facilitator': 3, 'hobby-networker': 2 },
        },
        {
          id: 'q10_d',
          text: '어느 정도는 필요하지만, 너무 자세하면 재미없다.',
          emoji: '⚖️',
          scores: { 'social-explorer': 2, 'patient-observer': 2 },
        },
      ],
    },
    {
      id: 'q11',
      question: '연애 앱이나 서비스 이용에 대한 당신의 생각은?',
      options: [
        {
          id: 'q11_a',
          text: '효율적이고 편리한 만남 수단이라고 생각한다.',
          emoji: '👍',
          scores: { 'app-navigator': 3, 'calculated-introducer': 2 },
        },
        {
          id: 'q11_b',
          text: '부자연스럽고 인위적인 만남이라고 생각한다.',
          emoji: '👎',
          scores: { 'serendipitous-romantic': 3, 'patient-observer': 2 },
        },
        {
          id: 'q11_c',
          text: '필요하다면 고려하겠지만, 주된 방법은 아니다.',
          emoji: '🤷',
          scores: { 'hobby-networker': 1, 'friend-facilitator': 1, 'social-explorer': 1 },
        },
        {
          id: 'q11_d',
          text: '새로운 사람을 만나는 데 적극적으로 활용한다.',
          emoji: '🚀',
          scores: { 'direct-approach-seeker': 2, 'app-navigator': 3 },
        },
      ],
    },
    {
      id: 'q12',
      question: '썸을 타는 과정에서 당신은?',
      options: [
        {
          id: 'q12_a',
          text: '상대방의 시그널을 분석하고 다음 단계를 계획한다.',
          emoji: '🔍',
          scores: { 'calculated-introducer': 3, 'patient-observer': 2 },
        },
        {
          id: 'q12_b',
          text: '느낌 가는 대로 편하게 상대방과 즐거운 시간을 보낸다.',
          emoji: '🥳',
          scores: { 'serendipitous-romantic': 2, 'social-explorer': 3 },
        },
        {
          id: 'q12_c',
          text: '친구에게 상황을 공유하고 조언을 구한다.',
          emoji: '💬',
          scores: { 'friend-facilitator': 3, 'hobby-networker': 2 },
        },
        {
          id: 'q12_d',
          text: '내가 먼저 확실한 신호를 보내 관계를 발전시키려 한다.',
          emoji: '💪',
          scores: { 'direct-approach-seeker': 3, 'app-navigator': 2 },
        },
      ],
    },
    {
      id: 'q13',
      question: '당신에게 이상적인 연애의 시작은?',
      options: [
        {
          id: 'q13_a',
          text: '믿을 수 있는 지인의 소개로 시작하는 만남',
          emoji: '🤝',
          scores: { 'friend-facilitator': 3, 'calculated-introducer': 2 },
        },
        {
          id: 'q13_b',
          text: '운명처럼 다가오는 우연한 만남',
          emoji: '🍀',
          scores: { 'serendipitous-romantic': 3, 'social-explorer': 2 },
        },
        {
          id: 'q13_c',
          text: '나의 관심사를 공유하며 깊이 있는 유대감을 형성하는 만남',
          emoji: '👯',
          scores: { 'hobby-networker': 3, 'patient-observer': 1 },
        },
        {
          id: 'q13_d',
          text: '온라인 탐색을 통해 나와 잘 맞는 상대를 찾아 시작하는 만남',
          emoji: '📱',
          scores: { 'app-navigator': 3, 'calculated-introducer': 1 },
        },
      ],
    },
    {
      id: 'q14',
      question: '낯선 사람과 대화하는 것이 편안한가요?',
      options: [
        {
          id: 'q14_a',
          text: '아니요, 매우 불편하고 조심스럽다.',
          emoji: '😟',
          scores: { 'patient-observer': 3, 'calculated-introducer': 1 },
        },
        {
          id: 'q14_b',
          text: '네, 새로운 사람과의 대화를 즐긴다.',
          emoji: '🗣️',
          scores: {
            'direct-approach-seeker': 3,
            'social-explorer': 3,
            'serendipitous-romantic': 2,
          },
        },
        {
          id: 'q14_c',
          text: '어느 정도는 괜찮지만, 목적이 있는 대화는 어렵다.',
          emoji: '💬',
          scores: { 'hobby-networker': 2, 'friend-facilitator': 1 },
        },
        {
          id: 'q14_d',
          text: '온라인에서는 편하지만, 오프라인에서는 어렵다.',
          emoji: '💻',
          scores: { 'app-navigator': 3, 'patient-observer': 1 },
        },
      ],
    },
    {
      id: 'q15',
      question: '주변에 연애 고민을 털어놓는 편인가요?',
      options: [
        {
          id: 'q15_a',
          text: '아니요, 혼자 생각하거나 가까운 소수에게만 털어놓는다.',
          emoji: '🤫',
          scores: { 'patient-observer': 3, 'calculated-introducer': 2 },
        },
        {
          id: 'q15_b',
          text: '네, 친구들에게 솔직하게 말하고 조언을 구한다.',
          emoji: '💬',
          scores: { 'friend-facilitator': 3, 'hobby-networker': 2, 'social-explorer': 1 },
        },
        {
          id: 'q15_c',
          text: '고민하기보다 직접 행동으로 부딪혀 해결하려 한다.',
          emoji: '💪',
          scores: { 'direct-approach-seeker': 3, 'app-navigator': 2 },
        },
        {
          id: 'q15_d',
          text: '고민을 분석하여 가장 합리적인 해결책을 찾으려 한다.',
          emoji: '🧠',
          scores: { 'calculated-introducer': 3, 'patient-observer': 1 },
        },
      ],
    },
    {
      id: 'q16',
      question: '당신에게 가장 매력적인 만남의 방식은?',
      options: [
        {
          id: 'q16_a',
          text: '정보를 알고 전략적으로 접근하는 소개팅',
          emoji: '🎯',
          scores: { 'calculated-introducer': 3, 'friend-facilitator': 2 },
        },
        {
          id: 'q16_b',
          text: '운명처럼 다가오는 우연한 만남',
          emoji: '🍀',
          scores: { 'serendipitous-romantic': 3, 'social-explorer': 2 },
        },
        {
          id: 'q16_c',
          text: '공통 관심사를 통해 자연스럽게 알아가는 동호회/모임',
          emoji: '👯',
          scores: { 'hobby-networker': 3, 'patient-observer': 1 },
        },
        {
          id: 'q16_d',
          text: '다양한 사람을 효율적으로 만날 수 있는 데이팅 앱',
          emoji: '📱',
          scores: { 'app-navigator': 3, 'direct-approach-seeker': 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'calculated-introducer',
      title: '계획된 소개팅형',
      description: '당신은 어느 정도 정보가 있고 검증된 상태에서 만나는 소개팅을 선호해요.',
      detailedDescription:
        '만남 전에 상대방에 대한 정보를 파악하고 예측 가능한 상황에서 만나는 것을 편안해합니다. 불확실성을 싫어하고, 효율적인 만남을 추구하는 경향이 있습니다. 처음부터 연애를 전제로 만나는 것에 거부감이 없으며, 신뢰할 수 있는 지인의 주선을 선호합니다. 너무 계산적으로 보이거나 자연스러운 만남의 기회를 놓칠 수 있습니다.',
      emoji: '📋',
      color: '#B0C4DE', // Light Steel Blue
      traits: ['계획적', '신중함', '정보 중시', '효율적', '안정 추구', '현실적'],
      compatibility: {
        best: ['friend-facilitator', 'app-navigator'],
        good: ['patient-observer'],
        avoid: ['serendipitous-romantic', 'social-explorer'],
      },
      recommendations: {
        activities: [
          '소개팅 어플/사이트 활용',
          '지인들에게 소개팅 부탁하기',
          '미팅/결혼정보회사 이용',
        ],
        tips: [
          '소개팅 전 상대방에 대한 과도한 기대는 금물이에요.',
          '너무 조건을 따지기보다 상대방의 매력을 찾아보려 노력하세요.',
          '때로는 계획 없이 즉흥적인 데이트도 시도해보세요.',
        ],
      },
    },
    {
      id: 'serendipitous-romantic',
      title: '우연한 만남형',
      description: '당신은 운명처럼 다가오는 자연스럽고 로맨틱한 만남을 꿈꿔요.',
      detailedDescription:
        '꾸며지지 않은 솔직한 모습 그대로 상대방과 교감하며 관계를 발전시키는 것을 좋아합니다. 우연히 마주치거나 예상치 못한 상황에서 로맨틱한 만남이 이루어지는 것을 선호해요. 인위적인 만남이나 소개팅보다는 자연스러운 흐름에 몸을 맡기는 편입니다. 이 때문에 만남의 기회가 적거나 기회를 놓칠 수 있습니다.',
      emoji: '🍀',
      color: '#ADD8E6', // Light Blue
      traits: ['운명론적', '낭만적', '자연스러움 추구', '즉흥적', '개방적', '감성적'],
      compatibility: {
        best: ['social-explorer', 'direct-approach-seeker'],
        good: ['hobby-networker'],
        avoid: ['calculated-introducer', 'app-navigator'],
      },
      recommendations: {
        activities: [
          '여행 (혼자 또는 친구와)',
          '카페/도서관에서 시간 보내기',
          '길거리 공연 관람',
          '산책',
        ],
        tips: [
          '때로는 적극적인 자기 표현도 필요해요.',
          '만남의 기회를 넓히기 위해 다양한 장소에 가보세요.',
          '너무 운명에만 기대기보다 작은 노력도 기울여보세요.',
        ],
      },
    },
    {
      id: 'hobby-networker',
      title: '취미/네트워크형',
      description: '당신은 공통의 관심사를 통해 자연스럽게 관계를 맺는 것을 좋아해요.',
      detailedDescription:
        '서로의 취미나 관심사를 공유하며 깊이 있는 유대감을 형성하는 것을 중요하게 생각합니다. 동호회, 스터디, 모임 등을 통해 자연스럽게 이성을 만나고, 편안한 관계에서 연인으로 발전하는 것을 선호해요. 취미 생활을 통해 삶의 질도 높이고 인연도 찾을 수 있지만, 연애로의 발전이 더딜 수 있습니다.',
      emoji: '👯',
      color: '#90EE90', // Light Green
      traits: ['공통 관심사 중시', '사교적', '적응력 좋음', '유대감 형성', '협력적', '활동적'],
      compatibility: {
        best: ['social-explorer', 'friend-facilitator'],
        good: ['serendipitous-romantic', 'patient-observer'],
        avoid: ['calculated-introducer', 'direct-approach-seeker'],
      },
      recommendations: {
        activities: [
          '관심 있는 동호회/클럽 가입',
          '원데이 클래스 참여',
          '스터디 그룹',
          '재능 공유 플랫폼 이용',
        ],
        tips: [
          '취미 생활을 즐기되, 연애로 발전할 기회를 포착하세요.',
          '너무 친구처럼만 지내지 않도록 적절한 선을 유지하세요.',
          '다양한 사람들과의 교류를 통해 시야를 넓히세요.',
        ],
      },
    },
    {
      id: 'app-navigator',
      title: '앱 탐색형',
      description: '당신은 데이팅 앱을 통해 효율적으로 다양한 상대를 탐색하는 것을 즐겨요.',
      detailedDescription:
        '간편하고 효율적으로 많은 사람을 만날 수 있는 데이팅 앱의 장점을 잘 활용합니다. 프로필 정보를 통해 나와 잘 맞는 상대를 미리 파악하고 만날 수 있다는 점에 만족감을 느껴요. 온라인으로 시작하는 만남에 거부감이 없으며, 적극적으로 자신을 어필하는 편입니다. 하지만 온라인 정보만으로 상대를 판단하거나, 빠른 만남에 지칠 수 있습니다.',
      emoji: '📱',
      color: '#7B68EE', // Medium Slate Blue
      traits: ['효율적', '탐색적', '적극적', '정보 활용', '기술 친화적', '개방적'],
      compatibility: {
        best: ['calculated-introducer', 'direct-approach-seeker'],
        good: ['hobby-networker'],
        avoid: ['serendipitous-romantic', 'patient-observer'],
      },
      recommendations: {
        activities: [
          '다양한 데이팅 앱/소개팅 어플 이용',
          '프로필 업데이트 및 관리',
          '온라인 모임 참여',
        ],
        tips: [
          '온라인 정보만으로 상대를 판단하지 말고 직접 만나서 교감하세요.',
          '너무 많은 사람을 동시에 만나기보다 소수에게 집중하는 것도 좋아요.',
          '온라인에서의 만남과 현실의 만남은 다를 수 있음을 인지하세요.',
        ],
      },
    },
    {
      id: 'friend-facilitator',
      title: '친구 주선형',
      description: '당신은 믿을 수 있는 친구의 주선을 통해 만나는 것을 가장 선호해요.',
      detailedDescription:
        '낯선 사람과의 만남보다, 친구의 검증을 거친 상대방에게 더 큰 신뢰와 안정감을 느낍니다. 친구가 나에게 잘 맞는 사람을 찾아줄 것이라는 믿음이 강하고, 편안한 분위기에서 관계를 시작하는 것을 좋아합니다. 관계의 시작이 비교적 쉽고 안전하지만, 친구에게 너무 의존하거나 친구의 관계에 영향을 받을 수 있습니다.',
      emoji: '🤝',
      color: '#FFA07A', // Light Salmon
      traits: ['신뢰 지향', '안정 추구', '인맥 활용', '편안함 선호', '배려심', '사회적'],
      compatibility: {
        best: ['calculated-introducer', 'hobby-networker'],
        good: ['social-explorer'],
        avoid: ['serendipitous-romantic', 'direct-approach-seeker'],
      },
      recommendations: {
        activities: ['친구들에게 소개팅 부탁하기', '더블 데이트', '친구들과 함께하는 모임'],
        tips: [
          '친구의 주선도 좋지만, 스스로 만남의 기회를 넓히는 것도 중요해요.',
          '친구가 아닌 당신의 시각으로 상대방을 판단하세요.',
          '친구 관계와 연인 관계를 명확히 구분하는 것이 좋아요.',
        ],
      },
    },
    {
      id: 'social-explorer',
      title: '사교 활동형',
      description: '당신은 다양한 사교 활동 속에서 자연스럽게 인연을 찾아 나서는 것을 즐겨요.',
      detailedDescription:
        '새로운 사람들과 교류하는 것을 좋아하며, 파티, 모임, 행사 등 다양한 사교 활동에 참여하여 인연을 만나는 것을 선호합니다. 에너지가 넘치고 활발하며, 폭넓은 인맥을 통해 자연스럽게 연애 기회를 만듭니다. 하지만 너무 많은 사람들과 얕은 관계를 맺거나, 진지한 관계로 발전하기 어려울 수 있습니다.',
      emoji: '🥳',
      color: '#FFEB3B', // Yellow
      traits: ['사교적', '활동적', '개방적', '에너지 넘침', '네트워킹', '친화력'],
      compatibility: {
        best: ['serendipitous-romantic', 'direct-approach-seeker'],
        good: ['hobby-networker', 'friend-facilitator'],
        avoid: ['calculated-introducer', 'patient-observer'],
      },
      recommendations: {
        activities: [
          '파티/네트워킹 행사 참여',
          '새로운 클럽/바 방문',
          '자원봉사 활동',
          '소셜 댄스 배우기',
        ],
        tips: [
          '많은 사람을 만나는 것도 좋지만, 진지한 관계를 위한 노력도 기울이세요.',
          '모든 사람에게 친절하기보다, 당신의 진짜 인연을 찾는 데 집중하세요.',
          '사교 활동 외에 둘만의 시간을 보내는 것도 중요해요.',
        ],
      },
    },
    {
      id: 'direct-approach-seeker',
      title: '적극적 대시형',
      description: '당신은 마음에 드는 상대에게 직접적으로 다가가 대시하는 것을 두려워하지 않아요.',
      detailedDescription:
        '호감이 가는 상대에게 적극적으로 자신의 마음을 표현하고, 관계를 주도적으로 이끌어갑니다. 망설이기보다 먼저 행동하며 기회를 잡으려 합니다. 자신감이 넘치고 매력적인 스타일이지만, 때로는 상대방이 부담을 느끼거나 당신의 진심을 오해할 수 있습니다.',
      emoji: '💪',
      color: '#FF69B4', // Hot Pink
      traits: ['적극적', '자신감', '솔직함', '주도적', '결단력', '추진력'],
      compatibility: {
        best: ['patient-observer', 'app-navigator'],
        good: ['serendipitous-romantic', 'social-explorer'],
        avoid: ['calculated-introducer', 'friend-facilitator'],
      },
      recommendations: {
        activities: [
          '관심 있는 이성에게 직접 번호/SNS 묻기',
          '썸 타는 상대에게 먼저 고백하기',
          '당당하게 매력 어필하기',
        ],
        tips: [
          '자신감도 좋지만, 상대방의 반응을 살피고 존중하는 태도가 중요해요.',
          '너무 성급하게 다가가기보다 상대방이 편안함을 느낄 시간을 주세요.',
          '진심을 담아 다가가면 더 좋은 결과를 얻을 수 있을 거예요.',
        ],
      },
    },
    {
      id: 'patient-observer',
      title: '인내심 관찰형',
      description: '당신은 상대방을 충분히 관찰하고 신중하게 관계를 발전시키는 것을 선호해요.',
      detailedDescription:
        '겉으로 드러나지 않지만, 상대방을 주의 깊게 관찰하고 정보를 모으는 데 능숙합니다. 섣부른 판단을 피하고 시간을 들여 상대방의 진면목을 파악하려 해요. 신중하고 인내심이 강하지만, 소극적인 태도로 인해 만남의 기회를 놓치거나 관계 발전이 더딜 수 있습니다.',
      emoji: '🔍',
      color: '#708090', // Slate Gray
      traits: ['신중함', '관찰력', '인내심', '내향적', '분석적', '조심성'],
      compatibility: {
        best: ['direct-approach-seeker', 'calculated-introducer'],
        good: ['hobby-networker', 'app-navigator'],
        avoid: ['serendipitous-romantic', 'social-explorer'],
      },
      recommendations: {
        activities: [
          '관심 가는 사람의 SNS 탐색',
          '지인들에게 정보 얻기',
          '혼자만의 시간 가지며 관계 고민하기',
        ],
        tips: [
          '관찰도 좋지만, 적절한 타이밍에 자신의 마음을 표현하는 용기가 필요해요.',
          '너무 많은 생각을 하기보다 직관을 따르는 것도 좋아요.',
          '상대방이 당신의 마음을 알 수 있도록 작은 신호라도 보내세요.',
        ],
      },
    },
  ],
};
