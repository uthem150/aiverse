import type { PersonalityTestData } from '@/types/personalityTest';

export const mentalAgeTestData: PersonalityTestData = {
  id: 'mental-age-test',
  title: '👶👵 내 숨은 나이 테스트 (정신연령 검사)',
  description:
    '혹시 내 진짜 나이와 정신연령이 다를지도? 평소 생활 습관, 소비 취향, 말투 등으로 알아보는 나의 진짜 정신연령은 몇 살일까요? 재미있는 질문에 답하고 숨은 나이를 확인해 보세요!',
  category: 'mz-lifestyle',
  resultTypes: [
    'teen-spirit', // 청춘 캠퍼스 감성
    'young-adult-vibes', // 트렌디한 MZ세대
    'mature-and-stable', // 관록의 어른
    'zen-master', // 해탈한 노년
  ],
  questions: [
    {
      id: 'q1',
      question: '주말에 가장 선호하는 휴식 방법은?',
      options: [
        {
          id: 'q1_a',
          text: '핫플레이스 탐방! 맛집, 카페, 놀거리 찾아다니기.',
          emoji: '🤸',
          scores: { 'teen-spirit': 3, 'young-adult-vibes': 2 },
        },
        {
          id: 'q1_b',
          text: '집에서 넷플릭스 보거나 게임하기, 친구들과 편하게 놀기.',
          emoji: '🛋️',
          scores: { 'young-adult-vibes': 3, 'teen-spirit': 2 },
        },
        {
          id: 'q1_c',
          text: '자기계발! 운동, 독서, 취미 생활로 알차게 보내기.',
          emoji: '📚',
          scores: { 'mature-and-stable': 3, 'young-adult-vibes': 1 },
        },
        {
          id: 'q1_d',
          text: '아무것도 안 하고 가만히 누워서 명상하기.',
          emoji: '🧘',
          scores: { 'zen-master': 3, 'mature-and-stable': 2 },
        },
      ],
    },
    {
      id: 'q2',
      question: '최신 유행하는 신조어를 들었을 때 나의 반응은?',
      options: [
        {
          id: 'q2_a',
          text: '이미 쓰고 있다! 누구보다 빠르게 유행을 선도한다.',
          emoji: '🗣️',
          scores: { 'young-adult-vibes': 3, 'teen-spirit': 2 },
        },
        {
          id: 'q2_b',
          text: '무슨 뜻인지 대충 알 것 같다. 궁금하면 찾아본다.',
          emoji: '🤔',
          scores: { 'young-adult-vibes': 2, 'mature-and-stable': 1 },
        },
        {
          id: 'q2_c',
          text: '무슨 말인지 모르겠다. 그냥 그런가 보다 하고 넘어간다.',
          emoji: '😶',
          scores: { 'mature-and-stable': 3, 'zen-master': 2 },
        },
        {
          id: 'q2_d',
          text: '전혀 관심 없다. 나에게는 나만의 언어가 있다.',
          emoji: '👴',
          scores: { 'zen-master': 3 },
        },
      ],
    },
    {
      id: 'q3',
      question: '친구가 갑자기 "여행 가자!"고 했을 때 나의 대답은?',
      options: [
        {
          id: 'q3_a',
          text: '"콜! 언제 어디로 갈 건데?" 바로 계획을 짠다.',
          emoji: '🛫',
          scores: { 'teen-spirit': 3, 'young-adult-vibes': 2 },
        },
        {
          id: 'q3_b',
          text: '일단 "어디로 갈지"부터 정하자고 제안한다.',
          emoji: '🗺️',
          scores: { 'young-adult-vibes': 3, 'mature-and-stable': 1 },
        },
        {
          id: 'q3_c',
          text: '"음.. 갑자기? 나중에 생각해 보자."',
          emoji: '🙄',
          scores: { 'mature-and-stable': 3, 'zen-master': 2 },
        },
        {
          id: 'q3_d',
          text: '"나는 집이 제일 편해..." 거절한다.',
          emoji: '🏠',
          scores: { 'zen-master': 3, 'mature-and-stable': 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '힘든 일이 생겼을 때, 나는 주로 어떻게 해결하나요?',
      options: [
        {
          id: 'q4_a',
          text: '친구들에게 바로 연락해 수다를 떨며 고민을 털어놓는다.',
          emoji: '👭',
          scores: { 'teen-spirit': 3, 'young-adult-vibes': 2 },
        },
        {
          id: 'q4_b',
          text: '혼자서 생각하고 고민하며 스스로 답을 찾으려 한다.',
          emoji: '🤔',
          scores: { 'young-adult-vibes': 3, 'mature-and-stable': 2 },
        },
        {
          id: 'q4_c',
          text: '이 또한 지나가리라... 시간이 해결해줄 거라고 믿고 기다린다.',
          emoji: '⏳',
          scores: { 'mature-and-stable': 3, 'zen-master': 2 },
        },
        {
          id: 'q4_d',
          text: '어차피 인생은 고난의 연속! 해탈의 경지에 이른다.',
          emoji: '🌌',
          scores: { 'zen-master': 3 },
        },
      ],
    },
    {
      id: 'q5',
      question: '나의 소비 습관은?',
      options: [
        {
          id: 'q5_a',
          text: '사고 싶은 게 있으면 일단 지르고 본다. (후회도 가끔)',
          emoji: '💳',
          scores: { 'teen-spirit': 3, 'young-adult-vibes': 2 },
        },
        {
          id: 'q5_b',
          text: '필요한 물건은 미리 알아보고, 가끔 충동구매도 한다.',
          emoji: '💸',
          scores: { 'young-adult-vibes': 3, 'mature-and-stable': 1 },
        },
        {
          id: 'q5_c',
          text: '계획적으로 소비하고, 꼭 필요한 물건만 산다.',
          emoji: '💰',
          scores: { 'mature-and-stable': 3, 'young-adult-vibes': 2 },
        },
        {
          id: 'q5_d',
          text: '쓸데없는 것에 돈 쓰는 걸 싫어한다. 최소한의 것만 있으면 된다.',
          emoji: '🤏',
          scores: { 'zen-master': 3, 'mature-and-stable': 2 },
        },
      ],
    },
    {
      id: 'q6',
      question: '친구들이 나를 부르는 별명이나 이미지는?',
      options: [
        {
          id: 'q6_a',
          text: '발랄하고 엉뚱한 분위기 메이커.',
          emoji: '🥳',
          scores: { 'teen-spirit': 3, 'young-adult-vibes': 2 },
        },
        {
          id: 'q6_b',
          text: '트렌드에 민감하고 힙한 스타일의 소유자.',
          emoji: '😎',
          scores: { 'young-adult-vibes': 3, 'teen-spirit': 1 },
        },
        {
          id: 'q6_c',
          text: '속 깊고 고민을 잘 들어주는 든든한 어른.',
          emoji: '🙂',
          scores: { 'mature-and-stable': 3, 'young-adult-vibes': 2 },
        },
        {
          id: 'q6_d',
          text: '말이 없고 조용한, 뭔가 초월해 보이는 사람.',
          emoji: '🧙‍♂️',
          scores: { 'zen-master': 3, 'mature-and-stable': 2 },
        },
      ],
    },
    {
      id: 'q7',
      question: '가장 좋아하는 음악 장르는?',
      options: [
        {
          id: 'q7_a',
          text: '신나는 K-POP 아이돌 음악이나 댄스곡.',
          emoji: '🎶',
          scores: { 'teen-spirit': 3, 'young-adult-vibes': 2 },
        },
        {
          id: 'q7_b',
          text: '힙합이나 인디 음악 등 최신 트렌드를 따르는 음악.',
          emoji: '🎧',
          scores: { 'young-adult-vibes': 3, 'teen-spirit': 1 },
        },
        {
          id: 'q7_c',
          text: '발라드나 팝송 등 감성적인 음악.',
          emoji: '🎤',
          scores: { 'mature-and-stable': 3, 'zen-master': 2 },
        },
        {
          id: 'q7_d',
          text: '클래식이나 재즈, 조용한 뉴에이지 음악.',
          emoji: '🎻',
          scores: { 'zen-master': 3, 'mature-and-stable': 2 },
        },
      ],
    },
    {
      id: 'q8',
      question: '갑자기 계획이 바뀌었을 때 나의 반응은?',
      options: [
        {
          id: 'q8_a',
          text: '오히려 좋아! 새로운 계획을 세우는 것에 신난다.',
          emoji: '🤩',
          scores: { 'teen-spirit': 3, 'young-adult-vibes': 2 },
        },
        {
          id: 'q8_b',
          text: '조금 당황스럽지만, 빠르게 상황에 맞춰 적응한다.',
          emoji: '🫡',
          scores: { 'young-adult-vibes': 3, 'mature-and-stable': 2 },
        },
        {
          id: 'q8_c',
          text: '원래 계획대로 하는 게 제일 좋은데... 조금 아쉽다.',
          emoji: '😟',
          scores: { 'mature-and-stable': 3, 'zen-master': 1 },
        },
        {
          id: 'q8_d',
          text: '계획은 원래 바뀌는 법. 다 부질없다.',
          emoji: '🫠',
          scores: { 'zen-master': 3, 'mature-and-stable': 2 },
        },
      ],
    },
    {
      id: 'q9',
      question: '여행 갈 때 가장 중요하게 생각하는 것은?',
      options: [
        {
          id: 'q9_a',
          text: '재미있는 사진 찍기! 예쁜 풍경이나 핫한 장소.',
          emoji: '📸',
          scores: { 'teen-spirit': 3, 'young-adult-vibes': 2 },
        },
        {
          id: 'q9_b',
          text: '현지 맛집이나 유명한 관광지를 최대한 많이 가보는 것.',
          emoji: '😋',
          scores: { 'young-adult-vibes': 3, 'teen-spirit': 1 },
        },
        {
          id: 'q9_c',
          text: '경험! 낯선 문화를 배우고 그곳 사람들과 소통하는 것.',
          emoji: '🗺️',
          scores: { 'mature-and-stable': 3, 'young-adult-vibes': 2 },
        },
        {
          id: 'q9_d',
          text: '푹 쉬는 것. 아무것도 하지 않고 휴양만 하고 싶다.',
          emoji: '🏖️',
          scores: { 'zen-master': 3, 'mature-and-stable': 2 },
        },
      ],
    },
    {
      id: 'q10',
      question: '나의 SNS 활용법은?',
      options: [
        {
          id: 'q10_a',
          text: '스토리나 릴스, 챌린지 등 유행하는 콘텐츠를 자주 올린다.',
          emoji: '🤳',
          scores: { 'teen-spirit': 3, 'young-adult-vibes': 2 },
        },
        {
          id: 'q10_b',
          text: '친구들과의 일상 사진이나 정보를 공유하는 용도로 사용한다.',
          emoji: '👥',
          scores: { 'young-adult-vibes': 3, 'teen-spirit': 1 },
        },
        {
          id: 'q10_c',
          text: '필요한 정보만 얻는 용도. 남들의 일상에 관심 없다.',
          emoji: '🫥',
          scores: { 'mature-and-stable': 3, 'zen-master': 2 },
        },
        {
          id: 'q10_d',
          text: 'SNS 자체에 흥미가 없다. 가끔 들어가는 정도.',
          emoji: '😴',
          scores: { 'zen-master': 3, 'mature-and-stable': 2 },
        },
      ],
    },
    {
      id: 'q11',
      question: '가장 최근에 크게 웃었던 이유는?',
      options: [
        {
          id: 'q11_a',
          text: '친구의 엉뚱한 말이나 행동 때문.',
          emoji: '🤣',
          scores: { 'teen-spirit': 3, 'young-adult-vibes': 2 },
        },
        {
          id: 'q11_b',
          text: '유튜브나 틱톡에서 웃긴 밈을 봤을 때.',
          emoji: '😂',
          scores: { 'young-adult-vibes': 3, 'teen-spirit': 1 },
        },
        {
          id: 'q11_c',
          text: '자연스러운 대화 중 나왔던 상황극 때문.',
          emoji: '💬',
          scores: { 'mature-and-stable': 3, 'zen-master': 2 },
        },
        {
          id: 'q11_d',
          text: '오랜만에 만난 친구들과의 추억 회상 때문.',
          emoji: '😭',
          scores: { 'zen-master': 3, 'mature-and-stable': 2 },
        },
      ],
    },
    {
      id: 'q12',
      question: '나의 미래에 대한 생각은?',
      options: [
        {
          id: 'q12_a',
          text: '미래는 아직 멀었다. 일단 지금을 즐기자!',
          emoji: '🥳',
          scores: { 'teen-spirit': 3, 'young-adult-vibes': 2 },
        },
        {
          id: 'q12_b',
          text: '미래를 위해 끊임없이 노력하고 준비해야 한다.',
          emoji: '💪',
          scores: { 'young-adult-vibes': 3, 'mature-and-stable': 2 },
        },
        {
          id: 'q12_c',
          text: '미래는 내가 어떻게 하느냐에 달렸다. 계획적으로 설계해야 한다.',
          emoji: '🗒️',
          scores: { 'mature-and-stable': 3, 'zen-master': 2 },
        },
        {
          id: 'q12_d',
          text: '미래는 알 수 없는 법. 흐르는 대로 살고 싶다.',
          emoji: '😏',
          scores: { 'zen-master': 3, 'mature-and-stable': 1 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'teen-spirit',
      title: '🤸‍♀️ 몸은 성인, 마음은 10대! 청춘 캠퍼스 감성',
      description:
        '당신은 언제나 새로운 것을 찾아다니고, 즉흥적인 것을 즐기는 활기찬 10대 정신연령을 가졌습니다.',
      detailedDescription:
        '자유분방하고 열정적이며, 아직 세상의 모든 것이 신기하고 재밌습니다. 친구들과의 우정을 가장 중요하게 생각하고, 미래보다는 현재의 즐거움에 집중하는 스타일이에요. 밝고 긍정적인 에너지로 주변 사람들을 즐겁게 만드는 분위기 메이커입니다.',
      emoji: '🤸‍♀️',
      color: '#6495ED', // CornflowerBlue
      traits: ['열정적', '즉흥적', '호기심', '친구 중시', '밝고 긍정적', '에너지 넘침'],
      compatibility: {
        best: ['트렌디한 MZ세대'],
        good: [],
        avoid: ['해탈한 노년'],
      },
      recommendations: {
        activities: ['새로운 취미를 배우거나 동호회 가입하기', '친구들과 핫플레이스 투어하기'],
        tips: [
          '충동적인 결정보다는 가끔은 진지하게 미래를 고민해보는 것도 좋아요.',
          '가끔은 혼자만의 시간을 가지며 자신을 돌아보는 시간을 가져보세요.',
        ],
        hashtags: ['#청춘', '#캠퍼스', '#10대감성', '#인싸력'],
      },
    },
    {
      id: 'young-adult-vibes',
      title: '📱 트렌디한 MZ세대 (20대 정신연령)',
      description:
        '당신은 현실과 이상 사이에서 균형을 잡는, 트렌드에 민감한 20대 정신연령을 가졌습니다.',
      detailedDescription:
        '자신의 삶을 주도적으로 살아가며, 워라밸을 중요하게 생각합니다. 새로운 것에 대한 호기심이 많고, 유행에 뒤처지는 것을 싫어해요. SNS를 통해 사람들과 소통하고, 정보 탐색에도 능숙합니다. 가끔은 미래에 대한 불안감을 느끼지만, 현재의 삶을 충실히 살아가는 현실적인 타입입니다.',
      emoji: '📱',
      color: '#FFD700', // Gold
      traits: ['현실적', '트렌디', '워라밸', '소통 지향', '정보 탐색', '계획적'],
      compatibility: {
        best: ['청춘 캠퍼스 감성', '관록의 어른'],
        good: [],
        avoid: ['해탈한 노년'],
      },
      recommendations: {
        activities: ['SNS 챌린지에 참여하기', '취향에 맞는 온라인 커뮤니티 활동하기'],
        tips: [
          '가끔은 계획 없이 자유로운 시간을 보내보는 것도 좋아요.',
          '미래에 대한 불안감 대신, 현재의 성장에 집중해 보세요.',
        ],
        hashtags: ['#MZ세대', '#트렌드세터', '#워라밸', '#갓생살기'],
      },
    },
    {
      id: 'mature-and-stable',
      title: '🎩 몸은 20대, 마음은 40대! 관록의 어른',
      description: '당신은 차분하고 안정적이며, 삶의 지혜를 가진 40대 정신연령을 가졌습니다.',
      detailedDescription:
        '경험을 통해 쌓은 지혜와 노련함으로 어떤 문제든 현명하게 해결합니다. 충동적인 행동보다는 계획적이고 신중한 것을 선호해요. 주변 사람들에게는 든든한 조언자 역할을 하며, 책임감이 강해 많은 이들의 신뢰를 얻습니다. 새로운 유행보다는 익숙하고 편안한 것을 더 좋아하는 타입입니다.',
      emoji: '🎩',
      color: '#556B2F', // DarkOliveGreen
      traits: ['현명함', '안정적', '신중함', '책임감', '조언자', '경험'],
      compatibility: {
        best: ['트렌디한 MZ세대', '해탈한 노년'],
        good: [],
        avoid: ['청춘 캠퍼스 감성'],
      },
      recommendations: {
        activities: ['후배나 친구들에게 진심 어린 조언해주기', '평소 해보고 싶었던 공부 시작하기'],
        tips: [
          '가끔은 계획을 내려놓고 마음 가는 대로 행동해 보는 것도 좋아요.',
          '새로운 것에 대한 호기심을 잃지 마세요!',
        ],
        hashtags: ['#관록의_어른', '#삶의지혜', '#어른미', '#연륜'],
      },
    },
    {
      id: 'zen-master',
      title: '🔮 세상만사 무관심! 해탈한 노년',
      description:
        '당신은 세상 모든 것을 초월한 듯, 해탈의 경지에 이른 노년의 정신연령을 가졌습니다.',
      detailedDescription:
        '현실의 작은 일에 연연하지 않고, 모든 것을 너그러이 이해합니다. 유행이나 트렌드에 관심이 없고, 자신만의 속도로 인생을 살아갑니다. 혼자만의 시간을 소중히 여기고, 조용하고 평화로운 것을 좋아해요. 물질적인 것보다는 정신적인 가치를 더 중요하게 생각하는 타입입니다.',
      emoji: '🔮',
      color: '#800080', // Purple
      traits: ['초월', '무관심', '평화', '혼자만의 시간', '정신적 가치', '느긋함'],
      compatibility: {
        best: ['관록의 어른'],
        good: ['트렌디한 MZ세대'],
        avoid: ['청춘 캠퍼스 감성'],
      },
      recommendations: {
        activities: ['조용한 곳으로 여행 가기', '취향에 맞는 책 읽기'],
        tips: [
          '가끔은 왁자지껄한 모임에 참여해 보는 것도 새로운 경험이 될 수 있어요.',
          '세상에 대한 관심을 조금만 가져보세요!',
        ],
        hashtags: ['#해탈', '#마이웨이', '#느긋함', '#초월한_영혼'],
      },
    },
  ],
};
