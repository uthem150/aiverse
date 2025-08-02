import type { PersonalityTestData } from '@/types/personalityTest';

export const idealTypeMatchTestData: PersonalityTestData = {
  id: 'ideal-type-test',
  title: '💘 이상형 매칭 테스트',
  description:
    '내가 생각하는 나의 이상형은? 나도 몰랐던 나의 이상형을 찾아보세요! 재미있는 질문들을 통해 당신의 마음을 두근거리게 할 단 한 사람을 공개합니다.',
  category: 'love-and-dating',
  resultTypes: [
    'romantic-ideal', // 로맨틱한 연인
    'caring-ideal', // 따뜻하고 안정적인 연인
    'intellectual-ideal', // 지적이고 성숙한 연인
    'adventurous-ideal', // 자유롭고 활발한 연인
    'humorous-ideal', // 유머러스하고 즐거운 연인
  ],
  questions: [
    {
      id: 'q1',
      question: '데이트 첫 만남, 나의 이상적인 상대의 복장은?',
      options: [
        {
          id: 'q1_a',
          text: '잘 차려입은 슈트나 세련된 원피스. 격식을 갖춘 스타일.',
          emoji: '👔',
          scores: { 'romantic-ideal': 3, 'intellectual-ideal': 2 },
        },
        {
          id: 'q1_b',
          text: '편안하고 깔끔한 캐주얼룩. 단정한 스타일.',
          emoji: '👕',
          scores: { 'caring-ideal': 3, 'humorous-ideal': 1 },
        },
        {
          id: 'q1_c',
          text: '개성 있는 스트릿 패션이나 자유로운 보헤미안 스타일.',
          emoji: '👖',
          scores: { 'adventurous-ideal': 3, 'humorous-ideal': 2 },
        },
        {
          id: 'q1_d',
          text: '깔끔한 셔츠에 지적인 안경. 도서관에서 나올 법한 스타일.',
          emoji: '🤓',
          scores: { 'intellectual-ideal': 3, 'caring-ideal': 2 },
        },
        {
          id: 'q1_e',
          text: '나와 비슷한 옷을 입고 온다. 소울메이트 같은 스타일.',
          emoji: '👯',
          scores: { 'humorous-ideal': 3, 'romantic-ideal': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '나에게 가장 설렘을 느끼게 하는 상대의 행동은?',
      options: [
        {
          id: 'q2_a',
          text: '갑자기 꽃다발을 선물하거나 로맨틱한 이벤트를 해준다.',
          emoji: '💐',
          scores: { 'romantic-ideal': 3, 'adventurous-ideal': 1 },
        },
        {
          id: 'q2_b',
          text: '힘들 때 말없이 곁에서 따뜻하게 안아준다.',
          emoji: '🤗',
          scores: { 'caring-ideal': 3, 'romantic-ideal': 2 },
        },
        {
          id: 'q2_c',
          text: '내가 모르는 것을 알려주거나 깊이 있는 대화를 나눌 때.',
          emoji: '💬',
          scores: { 'intellectual-ideal': 3, 'caring-ideal': 2 },
        },
        {
          id: 'q2_d',
          text: '예상치 못한 장소로 여행을 떠나자고 할 때.',
          emoji: '🚀',
          scores: { 'adventurous-ideal': 3, 'humorous-ideal': 2 },
        },
        {
          id: 'q2_e',
          text: '재미있는 유머로 나를 항상 웃게 해줄 때.',
          emoji: '🤣',
          scores: { 'humorous-ideal': 3, 'adventurous-ideal': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '연인과 함께하고 싶은 데이트 장소는?',
      options: [
        {
          id: 'q3_a',
          text: '야경이 멋진 레스토랑이나 분위기 좋은 카페.',
          emoji: '🌃',
          scores: { 'romantic-ideal': 3, 'intellectual-ideal': 1 },
        },
        {
          id: 'q3_b',
          text: '집에서 함께 요리하거나 편안하게 영화 보기.',
          emoji: '🏠',
          scores: { 'caring-ideal': 3, 'humorous-ideal': 2 },
        },
        {
          id: 'q3_c',
          text: '박물관, 미술관, 서점 등 지적인 활동을 할 수 있는 곳.',
          emoji: '🏛️',
          scores: { 'intellectual-ideal': 3, 'caring-ideal': 1 },
        },
        {
          id: 'q3_d',
          text: '익스트림 스포츠, 등산, 캠핑 등 야외 활동.',
          emoji: '🏕️',
          scores: { 'adventurous-ideal': 3, 'romantic-ideal': 2 },
        },
        {
          id: 'q3_e',
          text: '어디든 상관없다. 상대와 함께라면 행복하다.',
          emoji: '💖',
          scores: { 'humorous-ideal': 3, 'caring-ideal': 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '연인에게 가장 듣고 싶은 칭찬은?',
      options: [
        {
          id: 'q4_a',
          text: '너와 함께 있으면 영화 속 주인공이 된 것 같아.',
          emoji: '🎬',
          scores: { 'romantic-ideal': 3, 'intellectual-ideal': 1 },
        },
        {
          id: 'q4_b',
          text: '너와 함께 있으면 마음이 편안해지고 안정돼.',
          emoji: '😌',
          scores: { 'caring-ideal': 3, 'romantic-ideal': 2 },
        },
        {
          id: 'q4_c',
          text: '너는 항상 배울 점이 많은 사람이야.',
          emoji: '🎓',
          scores: { 'intellectual-ideal': 3, 'caring-ideal': 2 },
        },
        {
          id: 'q4_d',
          text: '너와 함께하는 모든 순간이 새롭고 짜릿해.',
          emoji: '⚡',
          scores: { 'adventurous-ideal': 3, 'humorous-ideal': 1 },
        },
        {
          id: 'q4_e',
          text: '너와 함께 있으면 시간이 어떻게 가는지 모르겠어. 정말 재밌어!',
          emoji: '⏱️',
          scores: { 'humorous-ideal': 3, 'adventurous-ideal': 2 },
        },
      ],
    },
    {
      id: 'q5',
      question: '연인에게 가장 중요하게 생각하는 것은?',
      options: [
        {
          id: 'q5_a',
          text: '나를 향한 로맨틱하고 열정적인 사랑 표현.',
          emoji: '🔥',
          scores: { 'romantic-ideal': 3, 'adventurous-ideal': 1 },
        },
        {
          id: 'q5_b',
          text: '나를 존중하고 아껴주는 따뜻한 마음.',
          emoji: '💖',
          scores: { 'caring-ideal': 3, 'romantic-ideal': 2 },
        },
        {
          id: 'q5_c',
          text: '나와 통하는 깊이 있는 대화와 지적인 교감.',
          emoji: '🗣️',
          scores: { 'intellectual-ideal': 3, 'caring-ideal': 2 },
        },
        {
          id: 'q5_d',
          text: '함께 다양한 경험을 쌓을 수 있는 모험심.',
          emoji: '🗺️',
          scores: { 'adventurous-ideal': 3, 'humorous-ideal': 2 },
        },
        {
          id: 'q5_e',
          text: '나의 어떤 모습이든 웃어주는 유쾌함.',
          emoji: '😜',
          scores: { 'humorous-ideal': 3, 'adventurous-ideal': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '연인과의 갈등이 생겼을 때, 나는?',
      options: [
        {
          id: 'q6_a',
          text: '로맨틱한 화해를 꿈꾼다. 이벤트로 감동을 주고 싶다.',
          emoji: '🎈',
          scores: { 'romantic-ideal': 3, 'adventurous-ideal': 1 },
        },
        {
          id: 'q6_b',
          text: '솔직하고 차분하게 대화하며 해결하려고 한다.',
          emoji: '🤝',
          scores: { 'caring-ideal': 3, 'intellectual-ideal': 2 },
        },
        {
          id: 'q6_c',
          text: '서로의 논리를 존중하며 합리적인 결론을 도출한다.',
          emoji: '⚖️',
          scores: { 'intellectual-ideal': 3, 'caring-ideal': 2 },
        },
        {
          id: 'q6_d',
          text: '일단 잠시 떨어져서 각자만의 시간을 갖는다.',
          emoji: '🚶',
          scores: { 'adventurous-ideal': 3, 'romantic-ideal': 2 },
        },
        {
          id: 'q6_e',
          text: '웃긴 농담으로 분위기를 풀고 화해를 유도한다.',
          emoji: '🤣',
          scores: { 'humorous-ideal': 3, 'adventurous-ideal': 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: '연인에게 나만의 애칭을 만들어준다면?',
      options: [
        {
          id: 'q7_a',
          text: '오빠, 자기, 여보 등 로맨틱하고 애정 가득한 애칭.',
          emoji: '💌',
          scores: { 'romantic-ideal': 3, 'caring-ideal': 2 },
        },
        {
          id: 'q7_b',
          text: '상대방의 이름을 부르거나 편안한 별명을 지어준다.',
          emoji: '🗣️',
          scores: { 'caring-ideal': 3, 'intellectual-ideal': 2 },
        },
        {
          id: 'q7_c',
          text: '특별한 의미가 담긴, 우리만 아는 독특한 애칭.',
          emoji: '🔒',
          scores: { 'intellectual-ideal': 3, 'adventurous-ideal': 1 },
        },
        {
          id: 'q7_d',
          text: '매일 다른 별명을 부르며 장난을 건다.',
          emoji: '🤪',
          scores: { 'adventurous-ideal': 3, 'humorous-ideal': 2 },
        },
        {
          id: 'q7_e',
          text: '재미있는 별명을 지어주거나, 애칭보다는 웃음을 유발하는 호칭.',
          emoji: '😂',
          scores: { 'humorous-ideal': 3, 'adventurous-ideal': 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '연인에게 받는 선물 중 가장 기분 좋은 것은?',
      options: [
        {
          id: 'q8_a',
          text: '내가 갖고 싶었던 명품이나 예쁜 주얼리.',
          emoji: '💎',
          scores: { 'romantic-ideal': 3, 'intellectual-ideal': 1 },
        },
        {
          id: 'q8_b',
          text: '내가 필요했던 실용적인 물건.',
          emoji: '🎁',
          scores: { 'caring-ideal': 3, 'intellectual-ideal': 2 },
        },
        {
          id: 'q8_c',
          text: '손수 만든 정성이 담긴 편지나 선물.',
          emoji: '💌',
          scores: { 'intellectual-ideal': 3, 'caring-ideal': 2 },
        },
        {
          id: 'q8_d',
          text: '함께 떠나는 여행 티켓이나 특별한 경험.',
          emoji: '✈️',
          scores: { 'adventurous-ideal': 3, 'romantic-ideal': 2 },
        },
        {
          id: 'q8_e',
          text: '예상치 못한 웃음을 주는 엉뚱한 선물.',
          emoji: '😂',
          scores: { 'humorous-ideal': 3, 'adventurous-ideal': 1 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'romantic-ideal',
      title: '💖 로맨틱한 연인',
      description: '당신의 이상형은 영화처럼 로맨틱하고 열정적인 사랑을 꿈꾸는 사람입니다.',
      detailedDescription:
        '당신은 사랑을 표현하는 데 주저함이 없는 상대방에게 매력을 느낍니다. 기념일이나 특별한 날을 소중히 여기고, 서프라이즈 이벤트를 준비하며 당신의 마음을 두근거리게 해줄 사람을 원합니다. 일상 속에서도 달콤한 말과 행동으로 당신을 사랑받는 사람으로 만들어줄 이상형을 찾고 있어요.',
      emoji: '💖',
      color: '#FF69B4', // HotPink
      traits: ['로맨틱', '열정적', '이벤트', '표현력', '애정 가득', '달콤함'],
      compatibility: {
        best: ['유머러스하고 즐거운 연인'],
        good: ['따뜻하고 안정적인 연인'],
        avoid: ['지적이고 성숙한 연인'],
      },
      recommendations: {
        tips: [
          '상대방에게 솔직한 마음을 표현하는 연습을 해보세요.',
          '로맨틱한 분위기뿐만 아니라, 진솔한 대화도 중요하게 생각하세요.',
        ],
        hashtags: ['#로맨틱', '#연애세포', '#사랑꾼', '#이벤트남녀'],
      },
    },
    {
      id: 'caring-ideal',
      title: '😌 따뜻하고 안정적인 연인',
      description: '당신의 이상형은 언제나 당신의 편이 되어주는 따뜻하고 안정적인 사람입니다.',
      detailedDescription:
        '화려한 데이트보다는 편안하고 안정적인 일상을 함께하는 것을 더 중요하게 생각합니다. 당신의 이상형은 당신의 이야기를 진심으로 들어주고, 힘든 일이 있을 때 든든한 버팀목이 되어줄 사람이에요. 마치 가족처럼 편안하고 따뜻한 사랑을 나누며 서로의 삶에 스며드는 것을 꿈꿉니다.',
      emoji: '😌',
      color: '#A0522D', // Sienna
      traits: ['따뜻함', '안정적', '배려심', '진중함', '듬직함', '편안함'],
      compatibility: {
        best: ['지적이고 성숙한 연인', '로맨틱한 연인'],
        good: ['유머러스하고 즐거운 연인'],
        avoid: ['자유롭고 활발한 연인'],
      },
      recommendations: {
        tips: [
          '가끔은 먼저 상대방에게 마음을 표현해 보세요.',
          '일상 속 소소한 즐거움을 함께 찾아보세요.',
        ],
        hashtags: ['#따뜻한사람', '#안정감', '#편안함', '#든든한내편'],
      },
    },
    {
      id: 'intellectual-ideal',
      title: '🎓 지적이고 성숙한 연인',
      description: '당신의 이상형은 깊이 있는 대화와 지적인 교감을 나눌 수 있는 사람입니다.',
      detailedDescription:
        '당신은 겉모습보다 내면의 가치를 중요하게 생각합니다. 서로의 생각과 가치관을 존중하며, 함께 성장해 나갈 수 있는 파트너를 원합니다. 당신의 이상형은 새로운 지식을 알려주거나, 당신의 삶에 긍정적인 영향을 미쳐줄 수 있는 사람이에요. 연애를 통해 인생의 깊이를 더해줄 사람을 찾고 있습니다.',
      emoji: '🎓',
      color: '#4682B4', // SteelBlue
      traits: ['지적', '성숙함', '깊이', '배움', '현명함', '존중'],
      compatibility: {
        best: ['따뜻하고 안정적인 연인'],
        good: [],
        avoid: ['로맨틱한 연인', '유머러스하고 즐거운 연인'],
      },
      recommendations: {
        tips: [
          '가끔은 이성적인 판단보다는 감정에 솔직해져 보세요.',
          '너무 완벽한 사람을 찾기보다는 함께 만들어가는 관계에 집중하세요.',
        ],
        hashtags: ['#지적인사람', '#성숙한연애', '#영혼의대화', '#배우자'],
      },
    },
    {
      id: 'adventurous-ideal',
      title: '🚀 자유롭고 활발한 연인',
      description: '당신의 이상형은 일상에 활력을 불어넣어 줄 자유롭고 모험심 가득한 사람입니다.',
      detailedDescription:
        '당신은 반복되는 일상보다는 새로운 경험을 함께 만들어갈 사람에게 매력을 느낍니다. 스릴 넘치는 액티비티나 여행을 즐기고, 당신의 삶을 더욱 다채롭게 만들어줄 사람을 원합니다. 당신의 이상형은 당신과 함께라면 어디든 갈 수 있는 열린 마음과 용기를 가진 사람이에요. 함께라면 매일이 축제 같을 거예요.',
      emoji: '🚀',
      color: '#FF4500', // OrangeRed
      traits: ['자유', '모험심', '활발함', '열린 마음', '다이내믹', '여행'],
      compatibility: {
        best: ['유머러스하고 즐거운 연인'],
        good: ['로맨틱한 연인'],
        avoid: ['따뜻하고 안정적인 연인'],
      },
      recommendations: {
        tips: [
          '가끔은 조용하고 편안한 데이트도 시도해 보세요.',
          '상대방의 자유를 존중하는 것이 관계의 핵심이라는 것을 잊지 마세요.',
        ],
        hashtags: ['#모험가', '#자유로운영혼', '#여행가자', '#활력'],
      },
    },
    {
      id: 'humorous-ideal',
      title: '😂 유머러스하고 즐거운 연인',
      description: '당신의 이상형은 언제나 당신을 웃게 해주는 유머러스하고 긍정적인 사람입니다.',
      detailedDescription:
        '당신은 함께 있으면 웃음이 끊이지 않는 사람을 원합니다. 당신의 이상형은 센스 있는 유머 감각으로 분위기를 즐겁게 만들고, 당신의 어떤 모습이든 사랑스럽게 웃어줄 수 있는 사람이에요. 인생의 희로애락을 함께 나누며, 힘든 순간조차도 웃음으로 승화시킬 수 있는 긍정적인 에너지를 가진 사람을 찾고 있습니다.',
      emoji: '😂',
      color: '#FFD700', // Gold
      traits: ['유머러스', '긍정적', '밝음', '유쾌함', '센스', '장난기'],
      compatibility: {
        best: ['로맨틱한 연인', '자유롭고 활발한 연인'],
        good: ['따뜻하고 안정적인 연인'],
        avoid: ['지적이고 성숙한 연인'],
      },
      recommendations: {
        tips: [
          '가끔은 진지한 대화를 통해 상대방의 깊은 내면을 들여다보세요.',
          '유머 외의 다른 매력도 함께 발견하는 것이 중요해요.',
        ],
        hashtags: ['#유머코드', '#웃음만발', '#개그캐', '#즐거운연애'],
      },
    },
  ],
};
