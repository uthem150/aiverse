import type { PersonalityTestData } from '@/types/personalityTest';

export const datingStyleTestData: PersonalityTestData = {
  id: 'dating-style-test',
  title: '🥳 연인과 데이트할 때 나의 유형 테스트',
  description:
    '연인과 데이트할 때 당신은 어떤 모습인가요? 나의 데이트 유형을 알아보고 연인과 더욱 즐거운 시간을 보내는 방법을 찾아보세요!',
  category: 'romance',
  resultTypes: [
    'experience-explorer', // 경험 탐험가형
    'comfort-seeker', // 편안함 추구형
    'romantic-planner', // 로맨틱 계획형
    'spontaneous-adventurer', // 즉흥적 모험가형
    'social-butterfly', // 사교적 나비형
    'private-lover', // 오붓함 선호형
    'foodie-explorer', // 미식 탐험가형
    'cultural-enthusiast', // 문화 예술 애호가형
  ],
  questions: [
    {
      id: 'q1',
      question: '데이트 계획을 세울 때, 당신의 역할은?',
      options: [
        {
          id: 'q1_a',
          text: '새로운 곳이나 특별한 활동을 찾아 제안한다.',
          emoji: '🔍',
          scores: { 'experience-explorer': 3, 'spontaneous-adventurer': 2 },
        },
        {
          id: 'q1_b',
          text: '연인의 의견을 묻고 편안하고 익숙한 곳을 선호한다.',
          emoji: '😌',
          scores: { 'comfort-seeker': 3, 'private-lover': 1 },
        },
        {
          id: 'q1_c',
          text: '기념일이나 특별한 날에 맞춰 로맨틱한 계획을 세운다.',
          emoji: '💖',
          scores: { 'romantic-planner': 3, 'cultural-enthusiast': 2 },
        },
        {
          id: 'q1_d',
          text: '즉흥적으로 그때그때 하고 싶은 것을 결정한다.',
          emoji: ' unplanned',
          scores: { 'spontaneous-adventurer': 3, 'foodie-explorer': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '가장 이상적인 데이트 장소는?',
      options: [
        {
          id: 'q2_a',
          text: '전에 가본 적 없는 이색적인 곳이나 액티비티가 있는 곳.',
          emoji: '🌍',
          scores: { 'experience-explorer': 3, 'spontaneous-adventurer': 2 },
        },
        {
          id: 'q2_b',
          text: '조용하고 편안하게 대화할 수 있는 아늑한 카페나 집.',
          emoji: '☕',
          scores: { 'comfort-seeker': 3, 'private-lover': 3 },
        },
        {
          id: 'q2_c',
          text: '멋진 풍경이나 분위기 좋은 레스토랑이 있는 곳.',
          emoji: '🌃',
          scores: { 'romantic-planner': 3, 'foodie-explorer': 2 },
        },
        {
          id: 'q2_d',
          text: '사람들과 어울리거나 축제, 페스티벌이 열리는 곳.',
          emoji: '🥳',
          scores: { 'social-butterfly': 3, 'cultural-enthusiast': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '데이트 중 연인이 다른 이성에게 시선을 줄 때 당신의 반응은?',
      options: [
        {
          id: 'q3_a',
          text: '별로 신경 쓰지 않는다. 서로의 신뢰가 더 중요하다.',
          emoji: '🧘',
          scores: { 'comfort-seeker': 2, 'spontaneous-adventurer': 1 },
        },
        {
          id: 'q3_b',
          text: '약간 신경 쓰이지만, 내색하지 않고 데이트에 집중한다.',
          emoji: ' poker_face',
          scores: { 'private-lover': 2, 'cultural-enthusiast': 1 },
        },
        {
          id: 'q3_c',
          text: '살짝 질투심이 생겨서 애정을 더 표현하거나 관심을 돌리려 한다.',
          emoji: ' jealousy',
          scores: { 'romantic-planner': 2, 'social-butterfly': 1 },
        },
        {
          id: 'q3_d',
          text: '직접적으로 이야기하며 솔직하게 불쾌함을 표현한다.',
          emoji: '🗣️',
          scores: { 'experience-explorer': 1, 'foodie-explorer': 1 }, // 직접적인 반응에 대한 점수는 낮음
        },
      ],
    },
    {
      id: 'q4',
      question: '데이트 중 가장 중요하게 생각하는 것은?',
      options: [
        {
          id: 'q4_a',
          text: '새롭고 즐거운 경험을 함께 만들어가는 것.',
          emoji: '🚀',
          scores: { 'experience-explorer': 3, 'spontaneous-adventurer': 2 },
        },
        {
          id: 'q4_b',
          text: '편안하고 안정적인 분위기 속에서 대화하는 것.',
          emoji: '😌',
          scores: { 'comfort-seeker': 3, 'private-lover': 3 },
        },
        {
          id: 'q4_c',
          text: '로맨틱하고 특별한 시간을 보내는 것.',
          emoji: '💖',
          scores: { 'romantic-planner': 3, 'cultural-enthusiast': 2 },
        },
        {
          id: 'q4_d',
          text: '맛있는 음식을 함께 먹고 즐기는 것.',
          emoji: '😋',
          scores: { 'foodie-explorer': 3, 'social-butterfly': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '데이트 복장은 어떻게 선택하나요?',
      options: [
        {
          id: 'q5_a',
          text: '활동적이고 편안하면서도 스타일리시한 옷.',
          emoji: ' casual',
          scores: { 'experience-explorer': 2, 'spontaneous-adventurer': 2 },
        },
        {
          id: 'q5_b',
          text: '꾸민 듯 안 꾸민 듯, 자연스럽고 편안한 옷.',
          emoji: ' comfy',
          scores: { 'comfort-seeker': 3, 'private-lover': 2 },
        },
        {
          id: 'q5_c',
          text: '데이트 장소와 분위기에 맞춰 신경 써서 고른 옷.',
          emoji: ' classy',
          scores: { 'romantic-planner': 3, 'cultural-enthusiast': 2, 'foodie-explorer': 1 },
        },
        {
          id: 'q5_d',
          text: '평소 입는 대로 편하게 입는다. 옷보다는 즐거움이 중요.',
          emoji: ' indifferent',
          scores: { 'spontaneous-adventurer': 1, 'social-butterfly': 1 }, // 복장 점수 낮음
        },
      ],
    },
    {
      id: 'q6',
      question: '데이트 중 사진을 얼마나 찍는 편인가요?',
      options: [
        {
          id: 'q6_a',
          text: '새로운 경험과 추억을 남기기 위해 많이 찍는다.',
          emoji: '📸',
          scores: { 'experience-explorer': 3, 'social-butterfly': 2 },
        },
        {
          id: 'q6_b',
          text: '거의 찍지 않는다. 눈으로 담고 싶다.',
          emoji: '👀',
          scores: { 'private-lover': 3, 'comfort-seeker': 2 },
        },
        {
          id: 'q6_c',
          text: '로맨틱한 순간이나 예쁜 배경에서만 몇 장 찍는다.',
          emoji: ' aesthetic',
          scores: { 'romantic-planner': 3, 'cultural-enthusiast': 2 },
        },
        {
          id: 'q6_d',
          text: '음식 사진을 주로 찍거나, 인상적인 순간에만 가볍게 찍는다.',
          emoji: '🍔',
          scores: { 'foodie-explorer': 3, 'spontaneous-adventurer': 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: '데이트 중 예상치 못한 상황이 발생했을 때, 당신의 대처 방식은?',
      options: [
        {
          id: 'q7_a',
          text: '이것도 추억이지! 유연하게 대처하며 새로운 방안을 찾는다.',
          emoji: '🤸',
          scores: { 'spontaneous-adventurer': 3, 'experience-explorer': 2 },
        },
        {
          id: 'q7_b',
          text: '조금 당황하지만, 크게 개의치 않고 편안한 대안을 찾는다.',
          emoji: '😌',
          scores: { 'comfort-seeker': 3, 'private-lover': 2 },
        },
        {
          id: 'q7_c',
          text: '계획이 틀어져서 아쉽지만, 침착하게 상황을 해결하려 한다.',
          emoji: ' calm',
          scores: { 'romantic-planner': 2, 'cultural-enthusiast': 1 },
        },
        {
          id: 'q7_d',
          text: '순간적으로 짜증이 나지만, 연인에게 내색하지 않으려 노력한다.',
          emoji: '😑',
          scores: { 'foodie-explorer': 1, 'social-butterfly': 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '데이트 후, 연인과 헤어질 때 당신의 감정은?',
      options: [
        {
          id: 'q8_a',
          text: '오늘 데이트 정말 좋았다! 다음 데이트가 벌써 기대된다.',
          emoji: '🤩',
          scores: { 'experience-explorer': 3, 'spontaneous-adventurer': 3 },
        },
        {
          id: 'q8_b',
          text: '편안하고 안정적인 시간을 보내서 마음이 평화롭다.',
          emoji: '🧘',
          scores: { 'comfort-seeker': 3, 'private-lover': 3 },
        },
        {
          id: 'q8_c',
          text: '로맨틱한 여운이 남아 아쉽고, 또 보고 싶다.',
          emoji: '💖',
          scores: { 'romantic-planner': 3, 'cultural-enthusiast': 2 },
        },
        {
          id: 'q8_d',
          text: '오늘 맛있는 것을 많이 먹어서 배부르고 행복하다.',
          emoji: '😋',
          scores: { 'foodie-explorer': 3, 'social-butterfly': 1 },
        },
      ],
    },
    {
      id: 'q9',
      question: '데이트 중 스마트폰 사용은 어느 정도인가요?',
      options: [
        {
          id: 'q9_a',
          text: '맛집 검색이나 길 찾기 등 필요한 경우에만 사용한다.',
          emoji: '📱',
          scores: { 'practical-giver': 1, 'foodie-explorer': 2 }, // 기존 유형과 연관지음
        },
        {
          id: 'q9_b',
          text: '최대한 자제하고 연인에게 집중한다.',
          emoji: '📵',
          scores: { 'comfort-seeker': 3, 'private-lover': 3, 'romantic-planner': 2 },
        },
        {
          id: 'q9_c',
          text: '사진을 찍거나 SNS에 공유할 때 주로 사용한다.',
          emoji: '📸',
          scores: { 'social-butterfly': 3, 'experience-explorer': 2 },
        },
        {
          id: 'q9_d',
          text: '딱히 신경 쓰지 않는다. 필요한 건 그때그때 찾아본다.',
          emoji: ' indifferent',
          scores: { 'spontaneous-adventurer': 2, 'cultural-enthusiast': 1 },
        },
      ],
    },
    {
      id: 'q10',
      question: '연인과 함께 새로운 사람들과 만나는 것에 대한 당신의 생각은?',
      options: [
        {
          id: 'q10_a',
          text: '매우 즐겁고 적극적으로 참여한다.',
          emoji: '🥳',
          scores: { 'social-butterfly': 3, 'experience-explorer': 2 },
        },
        {
          id: 'q10_b',
          text: '둘만의 시간을 선호한다. 굳이 필요 없다.',
          emoji: '🔒',
          scores: { 'private-lover': 3, 'comfort-seeker': 2 },
        },
        {
          id: 'q10_c',
          text: '가끔은 좋지만, 너무 자주 만나는 것은 부담스럽다.',
          emoji: '⚖️',
          scores: { 'romantic-planner': 1, 'foodie-explorer': 1 }, // 조화 추구와 연관
        },
        {
          id: 'q10_d',
          text: '상대방이 원하면 참여하지만, 내가 먼저 제안하지는 않는다.',
          emoji: '🤷',
          scores: { 'spontaneous-adventurer': 1, 'cultural-enthusiast': 1 },
        },
      ],
    },
    {
      id: 'q11',
      question: '데이트 코스 중 가장 중요하게 생각하는 요소는?',
      options: [
        {
          id: 'q11_a',
          text: '새로운 경험을 할 수 있는 액티비티나 이색적인 장소.',
          emoji: '🚀',
          scores: { 'experience-explorer': 3, 'spontaneous-adventurer': 2 },
        },
        {
          id: 'q11_b',
          text: '조용하고 아늑하며 대화하기 좋은 곳.',
          emoji: '☕',
          scores: { 'comfort-seeker': 3, 'private-lover': 3 },
        },
        {
          id: 'q11_c',
          text: '아름다운 풍경이나 분위기 있는 식사 장소.',
          emoji: '🌃',
          scores: { 'romantic-planner': 3, 'foodie-explorer': 2 },
        },
        {
          id: 'q11_d',
          text: '미술관, 공연장 등 문화적 소양을 넓힐 수 있는 곳.',
          emoji: '🎭',
          scores: { 'cultural-enthusiast': 3, 'romantic-planner': 1 },
        },
      ],
    },
    {
      id: 'q12',
      question: '데이트 비용은 누가 부담하는 것이 좋다고 생각하나요?',
      options: [
        {
          id: 'q12_a',
          text: '각자 번갈아 내거나, 그때그때 상황에 맞춰 유동적으로.',
          emoji: '⚖️',
          scores: { 'spontaneous-adventurer': 2, 'comfort-seeker': 1 },
        },
        {
          id: 'q12_b',
          text: '내가 계획한 데이트라면 내가 주로 부담한다.',
          emoji: '💵',
          scores: { 'romantic-planner': 2, 'luxury-seeker': 1 }, // 기존 유형 재활용
        },
        {
          id: 'q12_c',
          text: '서로 부담 없이 편안하게 즐기는 것이 중요하다.',
          emoji: '😌',
          scores: { 'comfort-seeker': 3, 'private-lover': 1 },
        },
        {
          id: 'q12_d',
          text: '함께 즐기는 만큼 공평하게 분담하는 것이 좋다.',
          emoji: '🤝',
          scores: { 'experience-explorer': 2, 'foodie-explorer': 2, 'cultural-enthusiast': 2 },
        },
      ],
    },
    {
      id: 'q13',
      question: '데이트 중 연인이 다른 곳에 신경 쓰는 것 같을 때, 당신의 태도는?',
      options: [
        {
          id: 'q13_a',
          text: '바로 알아채고 관심을 다시 나에게 돌리려 노력한다.',
          emoji: '👀',
          scores: { 'romantic-planner': 2, 'social-butterfly': 1 },
        },
        {
          id: 'q13_b',
          text: '괜찮은 척하지만 속으로는 조금 서운하다.',
          emoji: '😔',
          scores: { 'private-lover': 2, 'comfort-seeker': 1 },
        },
        {
          id: 'q13_c',
          text: '신경 쓰지 않고 나의 즐거움에 집중한다.',
          emoji: '🥳',
          scores: { 'spontaneous-adventurer': 3, 'foodie-explorer': 2 },
        },
        {
          id: 'q13_d',
          text: '솔직하게 이야기해서 연인의 주의를 다시 데이트에 집중시킨다.',
          emoji: '🗣️',
          scores: { 'experience-explorer': 1, 'cultural-enthusiast': 1 },
        },
      ],
    },
    {
      id: 'q14',
      question: '데이트 후, SNS에 데이트 사진을 얼마나 올리나요?',
      options: [
        {
          id: 'q14_a',
          text: '거의 매번 올린다. 추억 기록 겸 자랑.',
          emoji: '📸',
          scores: { 'social-butterfly': 3, 'experience-explorer': 2 },
        },
        {
          id: 'q14_b',
          text: '올리지 않는다. 둘만의 추억은 소중하니까.',
          emoji: '🔒',
          scores: { 'private-lover': 3, 'comfort-seeker': 2 },
        },
        {
          id: 'q14_c',
          text: '아주 특별하거나 예쁜 사진만 가끔 올린다.',
          emoji: ' aesthetic',
          scores: { 'romantic-planner': 2, 'cultural-enthusiast': 2 },
        },
        {
          id: 'q14_d',
          text: '즉흥적으로 마음에 드는 사진이 있으면 올린다.',
          emoji: ' spontaneous',
          scores: { 'spontaneous-adventurer': 2, 'foodie-explorer': 1 },
        },
      ],
    },
    {
      id: 'q15',
      question: '연인과의 데이트에서 가장 중요하게 여기는 것은?',
      options: [
        {
          id: 'q15_a',
          text: '새로운 경험과 함께 성장하는 것.',
          emoji: '📈',
          scores: { 'experience-explorer': 3, 'cultural-enthusiast': 2 },
        },
        {
          id: 'q15_b',
          text: '함께하는 시간 자체가 주는 편안함과 안정감.',
          emoji: '😌',
          scores: { 'comfort-seeker': 3, 'private-lover': 3 },
        },
        {
          id: 'q15_c',
          text: '둘만의 로맨틱하고 특별한 순간들.',
          emoji: '💖',
          scores: { 'romantic-planner': 3, 'foodie-explorer': 2 },
        },
        {
          id: 'q15_d',
          text: '구애받지 않고 자유롭게 즐기는 시간.',
          emoji: '🍃',
          scores: { 'spontaneous-adventurer': 3, 'social-butterfly': 3 },
        },
      ],
    },
    {
      id: 'q16',
      question: '당신에게 최고의 데이트란?',
      options: [
        {
          id: 'q16_a',
          text: '예상치 못한 곳에서 새로운 즐거움을 발견하는 데이트.',
          emoji: '🚀',
          scores: { 'experience-explorer': 3, 'spontaneous-adventurer': 3 },
        },
        {
          id: 'q16_b',
          text: '집에서 편안하게 영화를 보거나 요리하며 쉬는 데이트.',
          emoji: '🏡',
          scores: { 'comfort-seeker': 3, 'private-lover': 3 },
        },
        {
          id: 'q16_c',
          text: '특별히 준비된 로맨틱한 이벤트가 있는 데이트.',
          emoji: '💖',
          scores: { 'romantic-planner': 3, 'cultural-enthusiast': 2 },
        },
        {
          id: 'q16_d',
          text: '맛있는 음식과 함께 친구들과 어울리는 즐거운 데이트.',
          emoji: '🥳',
          scores: { 'foodie-explorer': 3, 'social-butterfly': 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'experience-explorer',
      title: '경험 탐험가형',
      description:
        '당신은 연인과 함께 새로운 경험을 하고, 잊지 못할 추억을 만드는 것을 가장 중요하게 생각합니다.',
      detailedDescription:
        '평범한 데이트보다는 이색적인 장소 탐방, 액티비티, 여행 등 **새로운 도전을 즐기며 활기찬 데이트**를 선호합니다. 연인과 함께 성장하고 발전하는 것을 중요하게 여기며, 매번 새로운 것을 시도하며 관계에 활력을 불어넣으려 합니다. 때로는 너무 새로운 경험만 추구하여 연인이 피곤해하거나, 편안한 휴식을 원할 수도 있습니다.',
      emoji: '🌍',
      color: '#FF6347', // Tomato
      traits: ['모험심', '도전적', '활동적', '호기심 많음', '개방적', '추억 지향'],
      compatibility: {
        best: ['spontaneous-adventurer', 'foodie-explorer'],
        good: ['social-butterfly'],
        avoid: ['comfort-seeker', 'private-lover'],
      },
      recommendations: {
        activities: ['이색 스포츠 체험', '테마파크 방문', '즉흥 여행 떠나기', '새로운 맛집 탐방'],
        tips: [
          '연인의 취향과 체력을 고려하여 데이트 코스를 조절하세요.',
          '때로는 조용하고 편안한 데이트로 휴식을 주는 것도 필요해요.',
          '함께 경험한 것을 바탕으로 깊은 대화를 나눠보세요.',
        ],
      },
    },
    {
      id: 'comfort-seeker',
      title: '편안함 추구형',
      description: '당신은 연인과의 데이트에서 편안함과 안정감을 가장 중요하게 생각합니다.',
      detailedDescription:
        '화려하거나 복잡한 데이트보다는 **집이나 아늑한 카페 등에서 여유롭게 대화하거나 휴식을 취하는 것**을 선호합니다. 서로에게 부담 없이 자연스러운 분위기에서 관계를 심화시키는 것을 중요하게 생각합니다. 이러한 편안함은 관계의 안정감을 주지만, 때로는 데이트가 단조로워지거나 연인이 새로운 자극을 원할 수도 있습니다.',
      emoji: '😌',
      color: '#B0C4DE', // Light Steel Blue
      traits: ['편안함 중시', '안정적', '여유로움', '내향적', '조용함', '집중력'],
      compatibility: {
        best: ['private-lover', 'romantic-planner'],
        good: ['cultural-enthusiast'],
        avoid: ['experience-explorer', 'spontaneous-adventurer'],
      },
      recommendations: {
        activities: [
          '집에서 함께 요리하기',
          '넷플릭스 데이트',
          '조용한 카페에서 독서 데이트',
          '산책하며 대화 나누기',
        ],
        tips: [
          '가끔은 연인의 취향에 맞춰 새로운 장소나 활동을 시도해보세요.',
          '편안함 속에서도 서로에게 특별한 추억을 만들어 줄 수 있는 요소를 찾아보세요.',
          '너무 틀에 박힌 데이트는 피하는 것이 좋아요.',
        ],
      },
    },
    {
      id: 'romantic-planner',
      title: '로맨틱 계획형',
      description:
        '당신은 연인과의 데이트를 꼼꼼하게 계획하고 로맨틱한 분위기를 연출하는 것을 즐깁니다.',
      detailedDescription:
        '기념일이나 특별한 날을 놓치지 않고, **연인에게 감동을 줄 수 있는 이벤트를 계획하고 실행**하는 데 열정적입니다. 분위기 좋은 장소, 맛있는 음식, 로맨틱한 소품 등 디테일 하나하나에 신경 써서 완벽한 데이트를 만들고 싶어 합니다. 하지만 때로는 계획이 틀어질까 봐 불안해하거나, 연인이 당신의 노력에 부담을 느낄 수도 있습니다.',
      emoji: '💖',
      color: '#FFB6C1', // Light Pink
      traits: ['로맨틱', '계획적', '섬세함', '정성', '감동 추구', '이벤트 선호'],
      compatibility: {
        best: ['cultural-enthusiast', 'comfort-seeker'],
        good: ['foodie-explorer'],
        avoid: ['spontaneous-adventurer', 'social-butterfly'],
      },
      recommendations: {
        activities: [
          '기념일 이벤트 기획',
          '분위기 좋은 레스토랑 예약',
          '손수 만든 선물 준비',
          '로맨틱한 여행 계획',
        ],
        tips: [
          '계획도 좋지만, 가끔은 즉흥적인 데이트도 시도해보세요.',
          '연인이 당신의 노력에 대해 충분히 알 수 있도록 소통하세요.',
          '완벽함보다는 함께하는 순간 자체의 즐거움에 집중하세요.',
        ],
      },
    },
    {
      id: 'spontaneous-adventurer',
      title: '즉흥적 모험가형',
      description: '당신은 계획에 얽매이지 않고 즉흥적으로 데이트를 즐기는 자유로운 영혼입니다.',
      detailedDescription:
        '미리 계획하기보다 **그때그때 기분에 따라 하고 싶은 것을 결정**하고, 예상치 못한 장소나 활동을 발견하는 것을 좋아합니다. 유연하고 개방적인 태도로 데이트를 즐기며, 새로운 시도에 거부감이 없습니다. 이러한 즉흥성은 신선하고 재미있지만, 때로는 연인이 불안해하거나, 일관성 없는 데이트에 피로감을 느낄 수 있습니다.',
      emoji: '🥳',
      color: '#FFD700', // Gold
      traits: ['즉흥적', '자유분방', '개방적', '유연함', '낙천적', '모험심'],
      compatibility: {
        best: ['experience-explorer', 'foodie-explorer'],
        good: ['social-butterfly'],
        avoid: ['romantic-planner', 'private-lover'],
      },
      recommendations: {
        activities: [
          '발길 닿는 대로 여행',
          '갑자기 떠나는 맛집 탐방',
          '로드트립',
          '즉흥적인 공연 관람',
        ],
        tips: [
          '가끔은 연인의 의견을 물어보고 계획에 반영하는 것이 좋아요.',
          '너무 즉흥적인 데이트는 연인에게 불안감을 줄 수 있으니 적절한 균형을 유지하세요.',
          '예상치 못한 상황에 대비한 유연한 마음가짐이 중요해요.',
        ],
      },
    },
    {
      id: 'social-butterfly',
      title: '사교적 나비형',
      description: '당신은 연인과의 데이트에서 주변 사람들과 함께 어울리는 것을 즐깁니다.',
      detailedDescription:
        '둘만의 데이트보다는 **친구들과의 모임, 파티, 페스티벌 등 사람들과 함께 즐기는 시간**을 선호합니다. 연인을 자신의 지인들에게 소개하고, 모두가 함께 즐거운 시간을 보내는 것에 큰 행복을 느낍니다. 사교적이고 활발한 성격이지만, 때로는 연인이 둘만의 오붓한 시간을 원하거나, 당신의 지나친 사교성에 피로감을 느낄 수 있습니다.',
      emoji: '📢',
      color: '#FFA07A', // Light Salmon
      traits: ['사교적', '활발함', '개방적', '친화력', '인싸 기질', '군중 즐김'],
      compatibility: {
        best: ['foodie-explorer', 'experience-explorer'],
        good: ['spontaneous-adventurer'],
        avoid: ['private-lover', 'comfort-seeker'],
      },
      recommendations: {
        activities: [
          '더블 데이트',
          '친구들과 함께 파티 개최',
          '축제/페스티벌 참여',
          '단체 스포츠 활동',
        ],
        tips: [
          '연인과의 둘만의 시간도 충분히 가지려 노력하세요.',
          '연인이 새로운 사람들과 만나는 것에 불편함을 느끼지 않는지 확인하세요.',
          '사교 활동 중에도 연인에게 충분히 집중하는 모습을 보여주세요.',
        ],
      },
    },
    {
      id: 'private-lover',
      title: '오붓함 선호형',
      description:
        '당신은 연인과의 데이트에서 둘만의 조용하고 오붓한 시간을 가장 중요하게 생각합니다.',
      detailedDescription:
        '사람이 많거나 시끄러운 곳보다는 **둘만의 공간에서 깊은 대화를 나누거나 서로에게 집중할 수 있는 시간**을 선호합니다. 연인과의 유대감과 친밀도를 높이는 것을 중요하게 생각하며, 다른 사람들의 시선이나 방해 없이 둘만의 세계를 즐기고 싶어 합니다. 이러한 태도는 깊은 관계 형성에 도움이 되지만, 때로는 데이트가 단조로워지거나 사회성이 부족하다고 느껴질 수 있습니다.',
      emoji: '🔒',
      color: '#708090', // Slate Gray
      traits: ['내향적', '친밀도 중시', '오붓함 선호', '사생활 보호', '조용함', '깊은 대화 선호'],
      compatibility: {
        best: ['comfort-seeker', 'romantic-planner'],
        good: ['cultural-enthusiast'],
        avoid: ['social-butterfly', 'spontaneous-adventurer'],
      },
      recommendations: {
        activities: [
          '집에서 홈 데이트',
          '조용한 분위기의 레스토랑/카페',
          '심야 영화 데이트',
          '드라이브하며 대화 나누기',
        ],
        tips: [
          '때로는 연인의 취향에 맞춰 다양한 데이트를 시도해보세요.',
          '둘만의 시간도 좋지만, 가끔은 외부 활동을 통해 새로운 자극을 주는 것도 필요해요.',
          '너무 잦은 둘만의 데이트는 관계를 지루하게 만들 수 있어요.',
        ],
      },
    },
    {
      id: 'foodie-explorer',
      title: '미식 탐험가형',
      description:
        '당신은 연인과의 데이트에서 맛있는 음식을 함께 탐험하고 즐기는 것을 중요하게 생각합니다.',
      detailedDescription:
        '데이트의 핵심은 **미식 경험**이라고 생각하며, 새로운 맛집을 찾아다니거나, 특별한 음식을 함께 요리하는 것을 즐깁니다. 음식에 대한 관심이 많고, 맛있는 것을 먹으며 행복을 느끼는 타입입니다. 이러한 성향은 데이트를 풍요롭게 만들지만, 때로는 음식에만 너무 집중하여 다른 활동이 소홀해지거나, 연인이 식상함을 느낄 수 있습니다.',
      emoji: '🍔',
      color: '#FFC0CB', // Pink
      traits: ['미식가', '탐험적', '맛 추구', '즐거움 지향', '생활력', '공유 욕구'],
      compatibility: {
        best: ['experience-explorer', 'spontaneous-adventurer'],
        good: ['social-butterfly'],
        avoid: ['cultural-enthusiast', 'private-lover'],
      },
      recommendations: {
        activities: [
          '새로운 맛집 투어',
          '쿠킹 클래스 참여',
          '미식 박람회 방문',
          '집에서 함께 홈베이킹',
        ],
        tips: [
          '음식 외에 연인과의 대화나 다른 활동에도 집중하세요.',
          '연인의 식성을 고려하여 메뉴를 선택하세요.',
          '음식을 통해 새로운 문화를 경험하는 것도 좋은 방법이에요.',
        ],
      },
    },
    {
      id: 'cultural-enthusiast',
      title: '문화 예술 애호가형',
      description: '당신은 연인과 함께 문화 예술 활동을 즐기며 교양을 쌓는 데이트를 선호합니다.',
      detailedDescription:
        '미술관, 박물관, 공연, 영화, 독서 등 **지적인 자극과 감성적인 충족을 주는 데이트**를 즐깁니다. 연인과 함께 교양을 넓히고, 깊이 있는 대화를 나누는 것을 중요하게 생각합니다. 이러한 데이트는 지적인 만족감을 주지만, 때로는 연인이 부담스러워하거나, 너무 정적인 활동만 반복되어 지루해할 수도 있습니다.',
      emoji: '🎭',
      color: '#800080', // Purple
      traits: ['교양적', '지적 호기심', '감성적', '심미안', '성장 지향', '차분함'],
      compatibility: {
        best: ['romantic-planner', 'comfort-seeker'],
        good: ['private-lover'],
        avoid: ['foodie-explorer', 'spontaneous-adventurer'],
      },
      recommendations: {
        activities: [
          '미술관/박물관 관람',
          '클래식 공연/뮤지컬 관람',
          '독서 토론 데이트',
          '예술 영화 보기',
        ],
        tips: [
          '연인의 문화 예술 취향을 미리 파악하는 것이 중요해요.',
          '너무 일방적인 지식 전달보다는 함께 배우고 느끼는 시간을 가지세요.',
          '정적인 활동 외에 가벼운 산책이나 식사를 곁들이는 것도 좋아요.',
        ],
      },
    },
  ],
};
