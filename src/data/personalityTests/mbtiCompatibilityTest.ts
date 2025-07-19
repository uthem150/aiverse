import type { PersonalityTestData } from '@/types/personalityTest';

export const mbtiCompatibilityTestData: PersonalityTestData = {
  id: 'mbti-compatibility-test',
  title: '💖 MBTI 연애 궁합 테스트',
  description: '16가지 MBTI 유형별 최고의 연애 궁합을 찾아보세요!',
  category: 'romance',
  resultTypes: [
    'enfp',
    'infp',
    'enfj',
    'infj',
    'entp',
    'intp',
    'entj',
    'intj',
    'esfp',
    'isfp',
    'esfj',
    'isfj',
    'estp',
    'istp',
    'estj',
    'istj',
  ],
  questions: [
    {
      id: 'q1',
      question: '새로운 사람들과의 만남에서 당신은?',
      options: [
        {
          id: 'q1_a',
          text: '먼저 다가가서 대화를 시작한다',
          emoji: '🗣️',
          scores: { enfp: 3, enfj: 3, entp: 3, entj: 2, esfp: 3, esfj: 2, estp: 3, estj: 2 },
        },
        {
          id: 'q1_b',
          text: '누군가 먼저 말을 걸기를 기다린다',
          emoji: '🤐',
          scores: { infp: 3, infj: 3, intp: 3, intj: 3, isfp: 3, isfj: 2, istp: 3, istj: 2 },
        },
        {
          id: 'q1_c',
          text: '상황에 따라 다르게 행동한다',
          emoji: '🤔',
          scores: { enfj: 2, infj: 2, entj: 2, intj: 2, esfj: 2, isfj: 2, estj: 2, istj: 2 }, // Added for balanced scoring
        },
      ],
    },
    {
      id: 'q2',
      question: '연인과의 갈등 상황에서 당신의 해결 방식은?',
      options: [
        {
          id: 'q2_a',
          text: '논리적으로 문제점을 분석해서 해결',
          emoji: '🧠',
          scores: { entp: 3, intp: 3, entj: 3, intj: 3, estp: 2, istp: 2, estj: 3, istj: 2 },
        },
        {
          id: 'q2_b',
          text: '감정적으로 공감하며 마음을 달래줌',
          emoji: '❤️',
          scores: { enfp: 3, infp: 3, enfj: 3, infj: 3, esfp: 3, isfp: 3, esfj: 3, isfj: 3 },
        },
        {
          id: 'q2_c',
          text: '시간을 두고 천천히 대화로 풀어감',
          emoji: '⏰',
          scores: { infp: 2, infj: 2, intp: 2, intj: 2, isfp: 2, isfj: 2, istp: 2, istj: 2 }, // Added for balanced scoring
        },
      ],
    },
    {
      id: 'q3',
      question: '연애에서 가장 중요하다고 생각하는 것은?',
      options: [
        {
          id: 'q3_a',
          text: '서로의 감정 교류와 이해',
          emoji: '💖',
          scores: { enfp: 3, infp: 3, enfj: 3, infj: 3, esfp: 2, isfp: 2, esfj: 3, isfj: 2 },
        },
        {
          id: 'q3_b',
          text: '논리적인 합리성과 명확한 비전',
          emoji: '💡',
          scores: { entp: 3, intp: 3, entj: 3, intj: 3, estp: 2, istp: 2, estj: 3, istj: 2 },
        },
        {
          id: 'q3_c',
          text: '새로운 경험과 자유로운 관계',
          emoji: '🎢',
          scores: { enfp: 2, entp: 2, esfp: 3, estp: 3, isfp: 2, istp: 2 },
        },
        {
          id: 'q3_d',
          text: '안정감과 신뢰를 바탕으로 한 꾸준함',
          emoji: '🤝',
          scores: { infj: 2, intj: 2, isfj: 3, istj: 3, esfj: 2, estj: 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '주말 데이트 계획은 주로 누가 세우나요?',
      options: [
        {
          id: 'q4_a',
          text: '내가 주도적으로 계획한다',
          emoji: '📝',
          scores: { enfj: 3, entj: 3, estj: 3, estp: 2, enfp: 2 },
        },
        {
          id: 'q4_b',
          text: '상대방의 의견에 따라간다',
          emoji: '🚶',
          scores: { infp: 3, isfp: 3, istp: 3, infj: 2, isfj: 2 },
        },
        {
          id: 'q4_c',
          text: '즉흥적으로 그때그때 결정한다',
          emoji: ' spontaneity',
          scores: { entp: 3, esfp: 3, estp: 3, enfp: 3 },
        },
        {
          id: 'q4_d',
          text: '함께 상의하여 절충안을 찾는다',
          emoji: '🤝',
          scores: { intp: 2, intj: 2, esfj: 3, istj: 2, infj: 2 },
        },
      ],
    },
    {
      id: 'q5',
      question: '연인에게 어떤 모습으로 비치고 싶나요?',
      options: [
        {
          id: 'q5_a',
          text: '늘 즐거움을 주는 유쾌한 사람',
          emoji: '🥳',
          scores: { enfp: 3, esfp: 3, entp: 2, estp: 2 },
        },
        {
          id: 'q5_b',
          text: '든든하고 믿음직한 사람',
          emoji: '💪',
          scores: { entj: 3, estj: 3, intj: 2, istj: 2 },
        },
        {
          id: 'q5_c',
          text: '따뜻하고 이해심 많은 사람',
          emoji: '❤️',
          scores: { infp: 3, infj: 3, esfj: 3, isfj: 3 },
        },
        {
          id: 'q5_d',
          text: '독립적이고 개성 있는 사람',
          emoji: '👤',
          scores: { intp: 3, istp: 3, intj: 2, isfp: 2 },
        },
      ],
    },
    {
      id: 'q6',
      question: '연인에게 서운한 점이 생겼을 때, 당신의 반응은?',
      options: [
        {
          id: 'q6_a',
          text: '바로 이야기해서 해결하려고 한다',
          emoji: '🗣️',
          scores: { enfp: 2, enfj: 3, entj: 3, esfj: 3, estj: 2, estp: 2 },
        },
        {
          id: 'q6_b',
          text: '혼자 속으로 삭히거나 시간이 필요하다',
          emoji: '🤐',
          scores: { infp: 3, infj: 3, isfp: 3, isfj: 3 },
        },
        {
          id: 'q6_c',
          text: '논리적으로 따져보고 잘못된 점을 지적한다',
          emoji: '🧐',
          scores: { entp: 3, intp: 3, intj: 3, istp: 2 },
        },
        {
          id: 'q6_d',
          text: '괜찮은 척하지만 미묘하게 티를 낸다',
          emoji: '🤨',
          scores: { esfp: 2, isfp: 2, istp: 2, enfp: 2 },
        },
      ],
    },
    {
      id: 'q7',
      question: '새로운 취미를 시작할 때 당신은?',
      options: [
        {
          id: 'q7_a',
          text: '일단 시작하고 보면서 배운다',
          emoji: '🚀',
          scores: { enfp: 3, entp: 3, esfp: 3, estp: 3 },
        },
        {
          id: 'q7_b',
          text: '관련 정보를 충분히 탐색하고 계획한다',
          emoji: '📚',
          scores: { intj: 3, istj: 3, intp: 2, istp: 2 },
        },
        {
          id: 'q7_c',
          text: '함께 할 사람을 찾아 동기를 부여한다',
          emoji: '🤝',
          scores: { enfj: 3, esfj: 3 },
        },
        {
          id: 'q7_d',
          text: '내 감이 이끄는 대로 자유롭게 해본다',
          emoji: ' intuitively',
          scores: { infp: 3, isfp: 3, infj: 2 },
        },
      ],
    },
    {
      id: 'q8',
      question: '연인과의 대화에서 주로 어떤 것에 집중하나요?',
      options: [
        {
          id: 'q8_a',
          text: '미래에 대한 아이디어와 가능성',
          emoji: '✨',
          scores: { enfp: 3, entp: 3, infp: 2, intp: 2 },
        },
        {
          id: 'q8_b',
          text: '일상의 구체적인 경험과 사실',
          emoji: ' factual',
          scores: { esfp: 3, estp: 3, isfp: 2, istp: 2 },
        },
        {
          id: 'q8_c',
          text: '서로의 감정과 관계의 조화',
          emoji: '💞',
          scores: { enfj: 3, infj: 3, esfj: 3, isfj: 3 },
        },
        {
          id: 'q8_d',
          text: '논리적인 분석과 효율적인 해결책',
          emoji: '💡',
          scores: { entj: 3, intj: 3, estj: 3, istj: 3 },
        },
      ],
    },
    {
      id: 'q9',
      question: '여행 계획을 세울 때 당신의 스타일은?',
      options: [
        {
          id: 'q9_a',
          text: '세부적인 계획을 철저히 세운다',
          emoji: '🗺️',
          scores: { intj: 2, istj: 3, entj: 2, estj: 3, isfj: 2, esfj: 2 },
        },
        {
          id: 'q9_b',
          text: '큰 틀만 잡고 즉흥적으로 다닌다',
          emoji: ' spontaneous',
          scores: { enfp: 3, entp: 3, esfp: 3, estp: 3 },
        },
        {
          id: 'q9_c',
          text: '가고 싶은 곳만 정하고 나머지는 현지에서 결정',
          emoji: ' explorative',
          scores: { infp: 2, isfp: 2, istp: 2 },
        },
        {
          id: 'q9_d',
          text: '동행하는 사람들의 의견을 최대한 반영한다',
          emoji: '🤝',
          scores: { enfj: 3, infj: 2, esfj: 3, isfj: 3 },
        },
      ],
    },
    {
      id: 'q10',
      question: '연인에게 어떤 선물을 하고 싶나요?',
      options: [
        {
          id: 'q10_a',
          text: '정성이 담긴 직접 만든 선물',
          emoji: '🎁',
          scores: { infp: 3, isfp: 3, enfp: 2, infj: 2 },
        },
        {
          id: 'q10_b',
          text: '실용적이고 오래 쓸 수 있는 물건',
          emoji: '🛠️',
          scores: { istj: 3, estj: 3, istp: 2, estp: 2 },
        },
        {
          id: 'q10_c',
          text: '감동을 줄 수 있는 특별한 경험',
          emoji: '🌟',
          scores: { enfj: 3, esfj: 3, esfp: 2, enfp: 2 },
        },
        {
          id: 'q10_d',
          text: '논리적이고 흥미를 끄는 지적인 선물',
          emoji: '💡',
          scores: { intp: 3, intj: 3, entp: 2, entj: 2 },
        },
      ],
    },
    {
      id: 'q11',
      question: '연인과의 미래를 상상할 때 주로 어떤 그림을 그리나요?',
      options: [
        {
          id: 'q11_a',
          text: '함께 다양한 모험과 도전을 하는 모습',
          emoji: '🚀',
          scores: { enfp: 3, entp: 3, esfp: 2, estp: 2 },
        },
        {
          id: 'q11_b',
          text: '안정적이고 평화로운 일상을 함께하는 모습',
          emoji: '🏡',
          scores: { isfj: 3, istj: 3, infj: 2, esfj: 2 },
        },
        {
          id: 'q11_c',
          text: '서로의 꿈을 지지하며 발전해나가는 모습',
          emoji: '📈',
          scores: { enfj: 3, entj: 3, infj: 2, intj: 2 },
        },
        {
          id: 'q11_d',
          text: '각자의 개성을 존중하며 자유롭게 공존하는 모습',
          emoji: '🕊️',
          scores: { infp: 3, intp: 3, isfp: 2, istp: 2 },
        },
      ],
    },
    {
      id: 'q12',
      question: '스트레스를 받았을 때 연인에게 어떤 위로를 받고 싶나요?',
      options: [
        {
          id: 'q12_a',
          text: '따뜻한 공감과 감정적인 지지',
          emoji: '🫂',
          scores: { enfp: 3, infp: 3, enfj: 3, infj: 3, esfp: 2, isfp: 2, esfj: 3, isfj: 3 },
        },
        {
          id: 'q12_b',
          text: '문제 해결을 위한 현실적인 조언',
          emoji: '💡',
          scores: { entj: 3, estj: 3, intj: 2, istj: 2 },
        },
        {
          id: 'q12_c',
          text: '함께 즐거운 활동을 하며 기분 전환',
          emoji: '🥳',
          scores: { esfp: 3, estp: 3, enfp: 2, entp: 2 },
        },
        {
          id: 'q12_d',
          text: '혼자만의 시간을 주며 기다려주기',
          emoji: '🧘',
          scores: { intp: 3, istp: 3, infp: 2, intj: 2 },
        },
      ],
    },
    {
      id: 'q13',
      question: '당신은 연인에게 주로 어떤 별명을 붙여주나요?',
      options: [
        {
          id: 'q13_a',
          text: '애정이 담긴 귀여운 별명',
          emoji: '💕',
          scores: { enfp: 3, esfp: 3, enfj: 2, esfj: 2 },
        },
        {
          id: 'q13_b',
          text: '상대방의 특징을 살린 센스 있는 별명',
          emoji: ' witty',
          scores: { entp: 3, estp: 3, intp: 2, istp: 2 },
        },
        {
          id: 'q13_c',
          text: '진지하고 심플한 이름 그대로',
          emoji: '👤',
          scores: { intj: 3, istj: 3, entj: 2, estj: 2 },
        },
        {
          id: 'q13_d',
          text: '상대방의 아름다운 내면을 표현하는 별명',
          emoji: '✨',
          scores: { infp: 3, infj: 3, isfp: 2, isfj: 2 },
        },
      ],
    },
    {
      id: 'q14',
      question: '결혼에 대한 당신의 생각은?',
      options: [
        {
          id: 'q14_a',
          text: '사랑하는 사람과 함께하는 최고의 모험',
          emoji: '💖',
          scores: { enfp: 3, esfp: 3, entp: 2, estp: 2 },
        },
        {
          id: 'q14_b',
          text: '신중하게 고려해야 할 인생의 중요한 결정',
          emoji: '💍',
          scores: { intj: 3, istj: 3, intp: 2, istp: 2 },
        },
        {
          id: 'q14_c',
          text: '가정을 꾸리고 책임감을 다하는 삶',
          emoji: '👨‍👩‍👧‍👦',
          scores: { enfj: 3, esfj: 3, estj: 2, isfj: 2 },
        },
        {
          id: 'q14_d',
          text: '아직은 잘 모르겠지만, 언젠가는 하고 싶다',
          emoji: '🤔',
          scores: { infp: 3, isfp: 3, infj: 2, entj: 2 },
        },
      ],
    },
    {
      id: 'q15',
      question: '연인과의 대화에서 어떤 주제를 즐기나요?',
      options: [
        {
          id: 'q15_a',
          text: '흥미로운 상상과 미래에 대한 이야기',
          emoji: '🌠',
          scores: { enfp: 3, entp: 3, infp: 2, intp: 2 },
        },
        {
          id: 'q15_b',
          text: '일상적인 사건과 있었던 일 공유',
          emoji: '💬',
          scores: { esfp: 3, esfj: 3, isfp: 2, isfj: 2 },
        },
        {
          id: 'q15_c',
          text: '심오한 철학적 질문이나 사회 문제',
          emoji: '💡',
          scores: { intj: 3, infj: 2, entj: 2, intp: 3 },
        },
        {
          id: 'q15_d',
          text: '실용적인 정보나 효율적인 방법',
          emoji: '✅',
          scores: { estp: 3, istp: 3, estj: 2, istj: 2 },
        },
      ],
    },
    {
      id: 'q16',
      question: '이별 후 당신의 모습은?',
      options: [
        {
          id: 'q16_a',
          text: '슬퍼하지만 빠르게 다음을 준비한다',
          emoji: '🏃',
          scores: { estp: 3, entp: 2, esfp: 2, estj: 2 },
        },
        {
          id: 'q16_b',
          text: '오랫동안 아파하고 힘들어한다',
          emoji: '😢',
          scores: { infp: 3, infj: 3, isfp: 2, isfj: 2 },
        },
        {
          id: 'q16_c',
          text: '이성적으로 상황을 분석하고 정리한다',
          emoji: '🧠',
          scores: { intj: 3, intp: 3, entj: 2, istj: 2 },
        },
        {
          id: 'q16_d',
          text: '주변 사람들에게 위로를 받고 극복한다',
          emoji: '🤝',
          scores: { enfp: 3, enfj: 3, esfj: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'enfp',
      title: 'ENFP - 스파크형',
      description: '열정적이고 자유로운 영혼! 창의적인 아이디어가 넘쳐나는 당신!',
      detailedDescription:
        '사람들과의 교감을 즐기고, 새로운 가능성을 탐구하는 것을 좋아합니다. 진정성 있는 관계를 추구하며, 상대방의 잠재력을 끌어내는 재능이 있어요. 자유로운 영혼이지만, 깊이 있는 대화를 통해 유대감을 형성하길 원합니다.',
      emoji: '✨',
      color: '#FF9F40', // Orange
      traits: ['열정적', '창의적', '사교적', '직관적', '유연함', '낙천적'],
      compatibility: {
        best: ['INTJ', 'INFJ'],
        good: ['ENTP', 'ENFJ', 'INFP', 'INTP'],
        avoid: ['ESTJ', 'ISTJ'],
      },
      recommendations: {
        activities: ['새로운 취미 도전', '예술 활동', '즉흥 여행 계획', '사람들과의 만남'],
        tips: [
          '계획적인 면도 조금씩 기르세요',
          '약속은 꼭 지키려고 노력하세요',
          '상대방의 안정감을 존중해주세요',
        ],
        celebrities: ['강다니엘', '박보영', 'RM(BTS)', '태연(소녀시대)', '뷔(BTS)'],
      },
    },
    {
      id: 'intj',
      title: 'INTJ - 건축가형',
      description: '독립적이고 전략적인 사고를 가진 완벽주의자!',
      detailedDescription:
        '장기적인 비전을 가지고 체계적으로 목표를 달성하는 타입입니다. 깊이 있는 관계를 선호하며, 진정한 파트너십을 추구해요. 감정 표현에는 서툴 수 있지만, 신뢰를 바탕으로 한 견고한 관계를 중요하게 생각합니다.',
      emoji: '🏗️',
      color: '#6C5CE7', // Dark Purple
      traits: ['전략적', '독립적', '논리적', '완벽주의', '미래지향적', '분석적'],
      compatibility: {
        best: ['ENFP', 'ENTP'],
        good: ['INFJ', 'ENTJ', 'INTP'],
        avoid: ['ESFP', 'ISFP'],
      },
      recommendations: {
        activities: ['독서', '전략 게임', '학습 동아리', '장기 여행 계획'],
        tips: [
          '감정 표현을 조금 더 해보세요',
          '상대방의 감정에 공감하고 표현해주세요',
          '때로는 즉흥적인 변화도 즐겨보세요',
        ],
        celebrities: ['공유', '김태희', '이동욱', '한예슬', '류준열'],
      },
    },
    {
      id: 'infp',
      title: 'INFP - 잔다르크형',
      description: '이상주의적이고 섬세한 감성의 소유자! 진정한 의미를 추구해요.',
      detailedDescription:
        '따뜻하고 이해심 많으며, 자신만의 가치관과 이상을 중요하게 생각합니다. 연인에게 깊은 공감과 지지를 보내며, 진실하고 순수한 사랑을 꿈꿉니다. 때로는 현실과 이상의 괴리감에 힘들어하기도 합니다.',
      emoji: '🌸',
      color: '#A8DADC', // Light Blue-Green
      traits: ['이상주의적', '섬세함', '감성적', '온화함', '창의적', '공감능력'],
      compatibility: {
        best: ['ENFJ', 'ENTJ'],
        good: ['ENFP', 'INTP', 'INFJ'],
        avoid: ['ESTJ', 'ISTJ'],
      },
      recommendations: {
        activities: ['예술 작품 감상', '글쓰기', '자연 속 산책', '감성적인 대화'],
        tips: [
          '현실적인 문제를 너무 회피하지 마세요',
          '가끔은 용기를 내어 자신의 의견을 표현하세요',
          '자기 비판을 줄이고 자신을 사랑해주세요',
        ],
        celebrities: ['아이유', 'RM(BTS)', '윤하', '나영석PD'],
      },
    },
    {
      id: 'enfj',
      title: 'ENFJ - 언변능숙형',
      description: '따뜻하고 리더십 있는 당신! 사람들의 성장을 돕는 촉매자!',
      detailedDescription:
        '타인의 성장을 돕는 것을 좋아하고, 긍정적인 영향력을 주는 데 관심이 많습니다. 공감능력이 뛰어나고 사람들과의 관계를 중요하게 생각하며, 연인에게 헌신적이고 적극적으로 사랑을 표현합니다. 때로는 타인의 감정에 너무 몰두할 수 있습니다.',
      emoji: '🌟',
      color: '#FFCCBC', // Light Orange
      traits: ['리더십', '공감능력', '사교적', '헌신적', '열정적', '긍정적'],
      compatibility: {
        best: ['INFP', 'INTP'],
        good: ['ENFP', 'INFJ', 'ENTJ'],
        avoid: ['ISTP', 'ESTP'],
      },
      recommendations: {
        activities: ['봉사 활동', '커뮤니티 참여', '리더십 강의', '그룹 활동'],
        tips: [
          '때로는 자신에게도 집중하세요',
          '다른 사람의 문제에 너무 개입하지 마세요',
          '감정 소모를 줄이는 연습을 하세요',
        ],
        celebrities: ['송중기', '수지', '유재석', '강다니엘'],
      },
    },
    {
      id: 'infj',
      title: 'INFJ - 예언자형',
      description: '통찰력 있고 신비로운 당신! 깊이 있는 관계를 추구하는 상담가!',
      detailedDescription:
        '통찰력과 직관력이 뛰어나 타인의 감정을 잘 이해하고 공감합니다. 소수의 깊은 관계를 선호하며, 진지하고 의미 있는 대화를 중요하게 생각합니다. 이상주의적이지만 계획적이고 책임감이 강하여 연인에게 든든한 존재가 됩니다.',
      emoji: '🔮',
      color: '#B0E0E6', // Powder Blue
      traits: ['통찰력', '직관적', '신비로움', '공감능력', '이상주의적', '계획적'],
      compatibility: {
        best: ['ENFP', 'ENTP'],
        good: ['INFP', 'INFJ', 'INTJ'],
        avoid: ['ESFP', 'ESTP'],
      },
      recommendations: {
        activities: ['명상', '글쓰기', '심리 상담 공부', '깊은 대화가 가능한 모임'],
        tips: [
          '자신의 감정도 솔직하게 표현하세요',
          '모든 것을 혼자 짊어지려 하지 마세요',
          '가끔은 현실적인 문제도 직시하세요',
        ],
        celebrities: ['강동원', '아이린(레드벨벳)', '박효신', '백예린'],
      },
    },
    {
      id: 'entp',
      title: 'ENTP - 변론가형',
      description: '다재다능하고 논리적인 당신! 늘 새로운 아이디어를 제시해요.',
      detailedDescription:
        '지적인 호기심이 많고, 새로운 아이디어와 도전을 즐깁니다. 논리적이고 분석적인 사고를 하며, 유머러스하고 재치 있는 말솜씨로 연인과의 대화를 즐겁게 만듭니다. 때로는 논쟁을 즐기거나 감정 표현에 서툴 수 있습니다.',
      emoji: '🗣️',
      color: '#FFD700', // Gold
      traits: ['다재다능', '논리적', '창의적', '유머러스', '토론 즐김', '자유로움'],
      compatibility: {
        best: ['INFJ', 'INTJ'],
        good: ['ENFP', 'INTP', 'ENTJ'],
        avoid: ['ISFJ', 'ESFJ'],
      },
      recommendations: {
        activities: ['브레인스토밍', '새로운 기술 배우기', '토론 동아리', '즉흥 여행'],
        tips: [
          '아이디어만 내세우기보다 실행력도 보여주세요',
          '상대방의 감정도 이해하려고 노력하세요',
          '너무 완벽하려 하지 마세요',
        ],
        celebrities: ['이수근', '딘딘', '김희철', '블랙핑크 제니'],
      },
    },
    {
      id: 'intp',
      title: 'INTP - 논리술사형',
      description: '논리적이고 분석적인 당신! 지적인 탐구를 즐기는 사색가!',
      detailedDescription:
        '사고력이 뛰어나고, 논리적인 분석을 통해 세상을 이해하려 합니다. 감정 표현에는 서툴지만, 한번 마음을 연 연인에게는 진솔하고 깊은 신뢰를 보여줍니다. 독립적인 시간을 중요하게 생각하며, 지적인 자극을 주는 관계를 선호합니다.',
      emoji: '🧠',
      color: '#4ECDC4', // Turquoise
      traits: ['논리적', '분석적', '독립적', '객관적', '탐구적', '내향적'],
      compatibility: {
        best: ['ENFJ', 'ENTJ'],
        good: ['INFP', 'INFJ', 'INTJ', 'ENTP'],
        avoid: ['ESFJ', 'ESTJ'],
      },
      recommendations: {
        activities: ['연구', '새로운 지식 탐구', '퍼즐 게임', '혼자만의 시간 갖기'],
        tips: [
          '감정 표현을 시도하고 상대방의 감정에 공감해주세요',
          '때로는 즉흥적인 경험도 즐겨보세요',
          '너무 완벽을 추구하지 마세요',
        ],
        celebrities: ['진(BTS)', '이찬혁(악동뮤지션)', '조승우', '나영석PD (복수 유형 가능)'],
      },
    },
    {
      id: 'entj',
      title: 'ENTJ - 통솔자형',
      description: '강력한 리더십과 추진력! 목표를 향해 나아가는 전략가!',
      detailedDescription:
        '리더십이 강하고 목표 지향적인 성격으로, 연애에서도 주도적인 역할을 합니다. 효율성을 중요하게 생각하며, 연인과 함께 미래를 계획하고 성취하는 것을 즐깁니다. 때로는 고집이 세거나 감정 표현에 약할 수 있습니다.',
      emoji: '👑',
      color: '#C0D9D9', // Light Teal
      traits: ['리더십', '추진력', '전략적', '목표 지향적', '결단력', '능률적'],
      compatibility: {
        best: ['INFP', 'INTP'],
        good: ['ENFJ', 'INTJ', 'ENTP', 'ISTJ'],
        avoid: ['ISFP', 'ESFP'],
      },
      recommendations: {
        activities: ['비즈니스 네트워킹', '목표 설정 및 달성', '리더십 강의', '여행 계획 (세부적)'],
        tips: [
          '상대방의 감정을 배려하고 공감하세요',
          '때로는 통제력을 내려놓고 쉬세요',
          '완벽하지 않아도 괜찮아요',
        ],
        celebrities: ['김유정', '티파니(소녀시대)', '유아인', '손석구'],
      },
    },
    {
      id: 'esfp',
      title: 'ESFP - 연예인형',
      description: '넘치는 에너지와 매력! 삶을 즐기는 자유로운 영혼!',
      detailedDescription:
        '사람들과 어울리는 것을 좋아하고, 타고난 끼와 매력으로 주변을 즐겁게 만듭니다. 순간을 즐기고 즉흥적인 연애를 선호하며, 연인에게 활력과 웃음을 선사합니다. 때로는 충동적이거나 깊은 고민을 회피할 수 있습니다.',
      emoji: '🥳',
      color: '#FFEB3B', // Yellow
      traits: ['사교적', '활동적', '낙천적', '즉흥적', '매력적', '현실적'],
      compatibility: {
        best: ['ISTJ', 'ISFJ'],
        good: ['ESTP', 'ESFJ', 'ENFP'],
        avoid: ['INTJ', 'INTP'],
      },
      recommendations: {
        activities: ['파티', '콘서트', '새로운 경험', '즉흥 여행', '스포츠'],
        tips: [
          '충동적인 결정을 피하고 신중하게 생각하세요',
          '때로는 깊이 있는 대화도 시도해보세요',
          '장기적인 계획을 세우는 연습을 해보세요',
        ],
        celebrities: ['수지', '박나래', '제이홉(BTS)', '강민경(다비치)'],
      },
    },
    {
      id: 'isfp',
      title: 'ISFP - 모험가형',
      description: '온화하고 예술적인 감성! 현재를 즐기는 자유로운 영혼!',
      detailedDescription:
        '따뜻하고 친절하며, 아름다움과 예술적인 감각을 중요하게 생각합니다. 갈등을 회피하고 평화를 추구하며, 연인과의 관계에서도 편안함과 안정감을 중요하게 여깁니다. 자신의 감정을 표현하는 데 서툴 수 있습니다.',
      emoji: '🎨',
      color: '#D8BFD8', // Thistle (light purple)
      traits: ['온화함', '예술적', '자유로움', '현재 지향적', '겸손함', '감성적'],
      compatibility: {
        best: ['ESTJ', 'ESFJ'],
        good: ['ISTJ', 'ISFJ', 'ENFP'],
        avoid: ['ENTJ', 'INTJ'],
      },
      recommendations: {
        activities: ['미술관/전시회', '음악 감상', '자연 속 산책', '취미 생활'],
        tips: [
          '자신의 의견을 용기 있게 표현하세요',
          '새로운 경험에 너무 주저하지 마세요',
          '가끔은 계획적으로 움직여보는 것도 좋아요',
        ],
        celebrities: ['백현(EXO)', '슬기(레드벨벳)', '송강', '강동원 (복수 유형 가능)'],
      },
    },
    {
      id: 'esfj',
      title: 'ESFJ - 사교적인 외교관형',
      description: '다정하고 친화적인 당신! 주변 사람들을 잘 챙기는 따뜻한 마음!',
      detailedDescription:
        '사람들과의 관계를 중요하게 생각하고, 공감능력이 뛰어나 연인의 감정을 잘 헤아려줍니다. 친화력이 좋고 배려심이 깊어 연인에게 헌신적입니다. 때로는 타인의 시선을 의식하거나 거절을 어려워할 수 있습니다.',
      emoji: '🫂',
      color: '#FFA07A', // Light Salmon
      traits: ['사교적', '친화적', '배려심', '헌신적', '공감능력', '책임감'],
      compatibility: {
        best: ['ISTP', 'INTP'],
        good: ['ISFP', 'ESFP', 'ENFJ'],
        avoid: ['ENTP', 'INTJ'],
      },
      recommendations: {
        activities: ['모임 주최', '봉사 활동', '가족/친구와의 시간', '커플 행사 계획'],
        tips: [
          '자신을 먼저 챙기는 시간을 가지세요',
          '모든 사람의 기분을 맞추려 하지 마세요',
          '때로는 솔직하게 거절하는 연습을 하세요',
        ],
        celebrities: ['이수민', '제시', '이준호(2PM)', '박보검'],
      },
    },
    {
      id: 'isfj',
      title: 'ISFJ - 수호자형',
      description: '성실하고 책임감 있는 당신! 묵묵히 연인을 지켜주는 수호천사!',
      detailedDescription:
        '조용하고 겸손하지만, 책임감이 강하고 성실합니다. 연인에게 헌신적이고 배려심이 깊으며, 안정적인 관계를 중요하게 생각합니다. 변화를 싫어하고 익숙한 것을 선호하며, 자신의 감정을 잘 드러내지 않을 수 있습니다.',
      emoji: '🛡️',
      color: '#BDB76B', // Dark Khaki
      traits: ['성실함', '책임감', '헌신적', '배려심', '겸손함', '안정 추구'],
      compatibility: {
        best: ['ESFP', 'ESTP'],
        good: ['ISFP', 'ISTP', 'ESFJ'],
        avoid: ['ENTP', 'ENFP'],
      },
      recommendations: {
        activities: [
          '집에서 편안하게 시간 보내기',
          '일상 루틴 유지',
          '조용한 취미 생활',
          '소중한 사람들과의 시간',
        ],
        tips: [
          '새로운 변화에 도전해보세요',
          '자신의 감정을 솔직하게 표현하세요',
          '과도한 책임감에 지치지 않도록 주의하세요',
        ],
        celebrities: ['아이유', '장동윤', '문별(마마무)', '김고은'],
      },
    },
    {
      id: 'estp',
      title: 'ESTP - 사업가형',
      description: '활동적이고 대담한 당신! 짜릿한 경험을 즐기는 행동파!',
      detailedDescription:
        '현실적이고 행동력이 뛰어나며, 새로운 경험과 도전을 즐깁니다. 유머러스하고 재치 있어 연인과의 시간을 즐겁게 만들며, 문제를 즉흥적으로 해결하는 데 능숙합니다. 때로는 충동적이거나 깊이 없는 관계로 보일 수 있습니다.',
      emoji: '🎢',
      color: '#ADD8E6', // Light Blue
      traits: ['활동적', '대담함', '현실적', '즉흥적', '문제 해결', '유머러스'],
      compatibility: {
        best: ['ISFJ', 'ISTJ'],
        good: ['ESFP', 'ENTP', 'ISTP'],
        avoid: ['INFJ', 'ENFJ'],
      },
      recommendations: {
        activities: ['스포츠 활동', '익스트림 데이트', '새로운 장소 탐험', '파티'],
        tips: [
          '때로는 깊이 생각하는 시간을 가지세요',
          '장기적인 계획도 세워보세요',
          '감정적인 교류도 중요합니다',
        ],
        celebrities: ['백종원', '이효리', '쌈디', '박찬호'],
      },
    },
    {
      id: 'istp',
      title: 'ISTP - 장인형',
      description: '논리적이고 독립적인 당신! 만능 재주꾼의 쿨한 매력!',
      detailedDescription:
        '논리적이고 합리적인 사고를 하며, 실용적인 해결책을 찾는 데 능숙합니다. 독립적인 성향이 강하고, 자신의 관심 분야에 깊이 몰두하는 것을 즐깁니다. 감정 표현이 서툴고 무뚝뚝해 보일 수 있지만, 진심으로 연인을 아낍니다.',
      emoji: '🛠️',
      color: '#B0C4DE', // Light Steel Blue
      traits: ['논리적', '독립적', '실용적', '분석적', '무뚝뚝함', '쿨함'],
      compatibility: {
        best: ['ESFJ', 'ENFJ'],
        good: ['ISFJ', 'ESTP', 'INTP'],
        avoid: ['ENFJ', 'ESFJ'], // Note: Compatibility might be complex depending on individual traits
      },
      recommendations: {
        activities: ['DIY', '취미 활동 (만들기)', '혼자만의 시간', '기술 관련 학습'],
        tips: [
          '자신의 감정을 표현하는 연습을 해보세요',
          '상대방의 감정에 공감하려고 노력하세요',
          '너무 완벽을 추구하지 마세요',
        ],
        celebrities: ['이재명', '한혜진', '지드래곤', '김연아'],
      },
    },
    {
      id: 'estj',
      title: 'ESTJ - 사업가형',
      description: '현실적이고 실용적인 리더! 조직을 이끄는 효율적인 관리자!',
      detailedDescription:
        '현실적이고 실용적이며, 체계적인 계획과 효율성을 중요하게 생각합니다. 책임감이 강하고 꼼꼼하여 연애에서도 신뢰를 줍니다. 때로는 고집이 세거나 감정 표현에 서툴 수 있으며, 원칙주의적인 면모를 보입니다.',
      emoji: '📊',
      color: '#A9A9A9', // Dark Gray
      traits: ['현실적', '실용적', '책임감', '계획적', '리더십', '솔직함'],
      compatibility: {
        best: ['ISFP', 'INFP'],
        good: ['ISTP', 'ISTJ', 'ENTJ'],
        avoid: ['ENFP', 'INFP'],
      },
      recommendations: {
        activities: ['업무 관련 학습', '재테크 공부', '계획 세우기', '스포츠'],
        tips: [
          '감정적인 면도 고려해주세요',
          '때로는 즉흥적인 변화도 받아들여 보세요',
          '타인의 의견을 경청하고 존중해주세요',
        ],
        celebrities: ['BTS 진', '김구라', '박명수', '안정환'],
      },
    },
    {
      id: 'istj',
      title: 'ISTJ - 청렴결백한 논리주의자',
      description: '신중하고 책임감 있는 당신! 조용히 할 일을 다하는 현실주의자!',
      detailedDescription:
        '조용하고 신중하며, 책임감이 강하고 성실합니다. 연인에게 헌신적이고 믿음을 주며, 규칙과 원칙을 중요하게 생각합니다. 변화를 싫어하고 익숙한 것을 선호하며, 감정 표현이 적고 무뚝뚝해 보일 수 있습니다.',
      emoji: '🕰️',
      color: '#708090', // Slate Gray
      traits: ['신중함', '책임감', '성실함', '현실적', '보수적', '내향적'],
      compatibility: {
        best: ['ESFP', 'ESTP'],
        good: ['ISFP', 'ISTP', 'ESFJ', 'ESTJ'],
        avoid: ['ENFP', 'INFP'],
      },
      recommendations: {
        activities: ['혼자만의 시간', '규칙적인 생활', '꼼꼼한 계획 세우기', '오래된 취미 유지'],
        tips: [
          '가끔은 새로운 경험에 도전해보세요',
          '자신의 감정을 조금 더 표현하세요',
          '변화에 대한 두려움을 극복해보세요',
        ],
        celebrities: ['이휘재', '성시경', '이민기', '윤도현'],
      },
    },
  ],
};
