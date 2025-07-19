import type { PersonalityTestData } from '@/types/personalityTest';

export const godsaengTypeTestData: PersonalityTestData = {
  id: 'godsaeng-type-test',
  title: '✨ 나의 갓생 유형 테스트',
  description:
    '매일 아침 눈 뜨자마자 갓생을 다짐하는 당신! 과연 어떤 갓생 유형에 속할까요? 나의 숨겨진 갓생 스타일을 알아보고, 완벽한 하루를 위한 힌트를 얻으세요!',
  category: 'mz-lifestyle',
  resultTypes: [
    'miracle-morning-pioneer', // 미라클 모닝 개척자
    'productivity-hacker', // 생산성 해커형
    'self-care-master', // 자기관리 마스터
    'financial-savvy-godsaeng', // 재테크 갓생러
    'learning-growth-addict', // 학습 성장 중독자
    'balanced-lifestyle-godsaeng', // 균형 잡힌 갓생러
    'aspiring-procrastinator', // 갓생 지향 게으름뱅이
    'challenge-mania-godsaeng', // 챌린지 마니아 갓생러
  ],
  questions: [
    {
      id: 'q1',
      question: '주말 아침, 눈을 뜨면 가장 먼저 하는 생각은?',
      options: [
        {
          id: 'q1_a',
          text: '일찍 일어났으니, 오늘 할 일들을 계획해 볼까?',
          emoji: '📝',
          scores: { 'miracle-morning-pioneer': 3, 'productivity-hacker': 2 },
        },
        {
          id: 'q1_b',
          text: '어제보다 더 나은 나를 위해, 오늘은 뭘 해볼까?',
          emoji: '🌱',
          scores: { 'learning-growth-addict': 3, 'self-care-master': 1 },
        },
        {
          id: 'q1_c',
          text: '일단... 침대에서 좀 더 뒹굴거릴까? (갓생은 내일부터...?)',
          emoji: '🛌',
          scores: { 'aspiring-procrastinator': 3, 'balanced-lifestyle-godsaeng': 1 },
        },
        {
          id: 'q1_d',
          text: '어디 재밌는 챌린지 없나? 새로운 목표를 찾아볼까?',
          emoji: '🏆',
          scores: { 'challenge-mania-godsaeng': 3, 'productivity-hacker': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '나만의 시간을 효율적으로 사용하기 위한 비법은?',
      options: [
        {
          id: 'q2_a',
          text: '일정 관리 앱과 꼼꼼한 투두리스트는 기본이지!',
          emoji: '✅',
          scores: { 'productivity-hacker': 3, 'miracle-morning-pioneer': 2 },
        },
        {
          id: 'q2_b',
          text: '유튜브 프리미엄, 넷플릭스 등 나를 위한 투자도 아끼지 않아.',
          emoji: '💸',
          scores: { 'self-care-master': 3, 'financial-savvy-godsaeng': 1 },
        },
        {
          id: 'q2_c',
          text: '그냥 그때그때 하고 싶은 것을 하는 게 가장 효율적이야!',
          emoji: '✨',
          scores: { 'aspiring-procrastinator': 2, 'balanced-lifestyle-godsaeng': 1 },
        },
        {
          id: 'q2_d',
          text: '강의, 독서 모임 등 다른 사람들과 함께 성장하는 환경을 조성해!',
          emoji: '📚',
          scores: { 'learning-growth-addict': 3, 'challenge-mania-godsaeng': 2 },
        },
      ],
    },
    {
      id: 'q3',
      question: '스트레스를 해소하는 나만의 갓생 루틴은?',
      options: [
        {
          id: 'q3_a',
          text: '운동, 명상, 요가 등 몸과 마음을 다스리는 시간!',
          emoji: '🧘',
          scores: { 'self-care-master': 3, 'balanced-lifestyle-godsaeng': 2 },
        },
        {
          id: 'q3_b',
          text: '내가 좋아하는 콘텐츠를 보며 몰입하거나, 좋아하는 취미 활동에 빠져든다.',
          emoji: '🎮',
          scores: { 'aspiring-procrastinator': 2, 'balanced-lifestyle-godsaeng': 1 },
        },
        {
          id: 'q3_c',
          text: '스트레스 원인을 분석하고, 효율적인 해결 방안을 모색한다.',
          emoji: '💡',
          scores: { 'productivity-hacker': 3, 'learning-growth-addict': 1 },
        },
        {
          id: 'q3_d',
          text: '재테크 정보를 찾아보며 미래를 위한 계획을 세운다.',
          emoji: '💰',
          scores: { 'financial-savvy-godsaeng': 3 },
        },
      ],
    },
    {
      id: 'q4',
      question: '갓생을 실천하며 가장 뿌듯함을 느끼는 순간은?',
      options: [
        {
          id: 'q4_a',
          text: '계획했던 모든 일을 완벽하게 해냈을 때!',
          emoji: '💯',
          scores: { 'productivity-hacker': 3, 'miracle-morning-pioneer': 2 },
        },
        {
          id: 'q4_b',
          text: '새로운 지식을 습득하고 한 단계 성장한 나 자신을 발견했을 때!',
          emoji: '📈',
          scores: { 'learning-growth-addict': 3, 'challenge-mania-godsaeng': 2 },
        },
        {
          id: 'q4_c',
          text: '건강하고 활기찬 모습으로 하루를 시작했을 때!',
          emoji: '☀️',
          scores: { 'miracle-morning-pioneer': 3, 'self-care-master': 2 },
        },
        {
          id: 'q4_d',
          text: '텅장이 아닌 통장 잔고가 늘어나는 것을 확인했을 때!',
          emoji: '🏦',
          scores: { 'financial-savvy-godsaeng': 3 },
        },
      ],
    },
    {
      id: 'q5',
      question: '소셜 미디어에서 갓생 콘텐츠를 본다면?',
      options: [
        {
          id: 'q5_a',
          text: '나도 저렇게 살고 싶다! 자극받고 바로 따라 해본다.',
          emoji: '🔥',
          scores: { 'challenge-mania-godsaeng': 3, 'learning-growth-addict': 1 },
        },
        {
          id: 'q5_b',
          text: '와, 멋지다... (잠시 감탄 후 다시 내 할 일을 한다)',
          emoji: '🤩',
          scores: { 'balanced-lifestyle-godsaeng': 2, 'aspiring-procrastinator': 1 },
        },
        {
          id: 'q5_c',
          text: '정보가 있다면 저장해두고 내 루틴에 적용할 방법을 고민한다.',
          emoji: '💡',
          scores: { 'productivity-hacker': 3, 'financial-savvy-godsaeng': 2 },
        },
        {
          id: 'q5_d',
          text: '진짜 갓생인지, 꾸밈없는 현실인지 의심부터 한다.',
          emoji: '🤨',
          scores: { 'aspiring-procrastinator': 1, 'self-care-master': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '새로운 목표를 세울 때, 당신의 접근 방식은?',
      options: [
        {
          id: 'q6_a',
          text: 'S.M.A.R.T 원칙에 따라 구체적이고 측정 가능하게 설정한다.',
          emoji: '🎯',
          scores: { 'productivity-hacker': 3, 'learning-growth-addict': 2 },
        },
        {
          id: 'q6_b',
          text: '무리하지 않고, 현재 나에게 필요한 것 위주로 정한다.',
          emoji: '😌',
          scores: { 'self-care-master': 3, 'balanced-lifestyle-godsaeng': 2 },
        },
        {
          id: 'q6_c',
          text: '일단 거창하게 세우고 보지만, 시작이 어렵다.',
          emoji: '😅',
          scores: { 'aspiring-procrastinator': 3 },
        },
        {
          id: 'q6_d',
          text: '다양한 챌린지에 참여하며 동기 부여를 얻는다.',
          emoji: '🚀',
          scores: { 'challenge-mania-godsaeng': 3 },
        },
      ],
    },
    {
      id: 'q7',
      question: '재테크에 대한 당신의 생각은?',
      options: [
        {
          id: 'q7_a',
          text: '갓생의 필수 요소! 꾸준히 공부하고 실행한다.',
          emoji: '💰',
          scores: { 'financial-savvy-godsaeng': 3, 'learning-growth-addict': 2 },
        },
        {
          id: 'q7_b',
          text: '관심은 있지만, 시작하기가 어렵고 복잡하다.',
          emoji: '🤔',
          scores: { 'aspiring-procrastinator': 2, 'balanced-lifestyle-godsaeng': 1 },
        },
        {
          id: 'q7_c',
          text: '투자의 기본은 노동 소득! 먼저 본업에 집중한다.',
          emoji: '👨‍💼',
          scores: { 'productivity-hacker': 2, 'miracle-morning-pioneer': 1 },
        },
        {
          id: 'q7_d',
          text: '재테크보다 현재의 행복과 웰빙이 더 중요해!',
          emoji: '💖',
          scores: { 'self-care-master': 3, 'balanced-lifestyle-godsaeng': 3 },
        },
      ],
    },
    {
      id: 'q8',
      question: '자기계발을 위한 새로운 강의나 책을 발견했다면?',
      options: [
        {
          id: 'q8_a',
          text: '바로 구매해서 학습 계획을 세운다.',
          emoji: '📚',
          scores: { 'learning-growth-addict': 3, 'productivity-hacker': 2 },
        },
        {
          id: 'q8_b',
          text: '일단 장바구니에 넣어두고, 나중에 시간이 나면 결제한다.',
          emoji: '🛒',
          scores: { 'aspiring-procrastinator': 3 },
        },
        {
          id: 'q8_c',
          text: '정말 나에게 필요한 것인지, 충분히 고민해본다.',
          emoji: '🧐',
          scores: { 'balanced-lifestyle-godsaeng': 2, 'self-care-master': 1 },
        },
        {
          id: 'q8_d',
          text: '관련 챌린지나 스터디 그룹이 있는지 먼저 찾아본다.',
          emoji: '👥',
          scores: { 'challenge-mania-godsaeng': 3, 'learning-growth-addict': 2 },
        },
      ],
    },
    {
      id: 'q9',
      question: '갓생 루틴이 흐트러졌을 때, 당신의 반응은?',
      options: [
        {
          id: 'q9_a',
          text: '조급해하지 않고, 다시 천천히 시작할 준비를 한다.',
          emoji: '😌',
          scores: { 'self-care-master': 3, 'balanced-lifestyle-godsaeng': 3 },
        },
        {
          id: 'q9_b',
          text: '실패에 좌절하기보다, 왜 흐트러졌는지 원인을 분석한다.',
          emoji: '📊',
          scores: { 'productivity-hacker': 3, 'learning-growth-addict': 2 },
        },
        {
          id: 'q9_c',
          text: '괜찮아! 내일부터 다시 갓생 시작하면 돼!',
          emoji: '😅',
          scores: { 'aspiring-procrastinator': 3 },
        },
        {
          id: 'q9_d',
          text: '더 강력한 챌린지로 다시 동기 부여를 받는다.',
          emoji: '🔥',
          scores: { 'challenge-mania-godsaeng': 3 },
        },
      ],
    },
    {
      id: 'q10',
      question: "당신에게 있어 '갓생'의 가장 중요한 의미는?",
      options: [
        {
          id: 'q10_a',
          text: '매일 계획한 것을 완수하며 얻는 성취감과 생산성.',
          emoji: '📈',
          scores: { 'productivity-hacker': 3, 'miracle-morning-pioneer': 2 },
        },
        {
          id: 'q10_b',
          text: '마음의 평화와 몸의 건강을 유지하며 행복하게 사는 것.',
          emoji: '💖',
          scores: { 'self-care-master': 3, 'balanced-lifestyle-godsaeng': 3 },
        },
        {
          id: 'q10_c',
          text: '끊임없이 배우고 성장하며 더 나은 나를 만드는 것.',
          emoji: '🌱',
          scores: { 'learning-growth-addict': 3, 'challenge-mania-godsaeng': 2 },
        },
        {
          id: 'q10_d',
          text: '경제적 자유를 얻고 미래를 안정적으로 준비하는 것.',
          emoji: '🏦',
          scores: { 'financial-savvy-godsaeng': 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'miracle-morning-pioneer',
      title: '☀️ 미라클 모닝 개척자',
      description:
        '당신은 새벽을 여는 자! 미라클 모닝으로 하루를 일찍 시작하며 누구보다 생산적인 하루를 만들어 나가는 갓생 개척자입니다.',
      detailedDescription:
        '남들이 잠든 시간에 일어나 운동, 독서, 자기계발 등 자신만의 루틴을 지키며 하루를 주도적으로 시작하는 것에 큰 보람을 느낍니다. 새벽 시간의 고요함과 집중력을 즐기며, 이를 통해 하루 종일 에너지를 유지합니다. "새벽형 인간"의 표본으로, 모닝 루틴 관련 챌린지에 적극적으로 참여하는 편입니다.',
      emoji: '☀️',
      color: '#FFD700', // Gold
      traits: ['성실함', '계획적', '주도적', '생산성', '자기관리', '새벽형'],
      compatibility: {
        best: ['생산성 해커형', '챌린지 마니아 갓생러'],
        good: [],
        avoid: ['갓생 지향 게으름뱅이', '자기관리 마스터'],
      },
      recommendations: {
        tips: [
          '아무리 갓생이라도 무리한 새벽 기상은 독이 될 수 있으니, 충분한 수면 시간을 확보하는 것이 중요해요.',
          '가끔은 여유롭게 아침을 즐기는 시간을 가져보는 것도 좋아요.',
          '모닝 루틴을 기록하며 변화를 확인해 보세요.',
        ],
        hashtags: ['#미라클모닝', '#갓생시작', '#새벽루틴', '#아침형인간'],
      },
    },
    {
      id: 'productivity-hacker',
      title: '📊 생산성 해커형',
      description:
        "당신은 효율적인 시간 관리와 최적의 생산성 도구로 '할 일 목록'을 완벽하게 클리어하는 갓생 해커입니다.",
      detailedDescription:
        'To-Do 리스트, 플래너, 생산성 앱 등을 활용하여 모든 일을 체계적으로 관리하고, 데드라인을 지키며 목표를 달성하는 것에 큰 만족을 느낍니다. 시간을 낭비하는 것을 싫어하며, 끊임없이 더 효율적인 방법을 찾아 적용합니다. "P" 성향보다는 "J" 성향이 강하며, 결과와 성취를 중요하게 생각합니다.',
      emoji: '📊',
      color: '#4169E1', // Royal Blue
      traits: ['효율적', '체계적', '계획적', '성과 지향', '합리적', '생산성'],
      compatibility: {
        best: ['미라클 모닝 개척자', '학습 성장 중독자'],
        good: [],
        avoid: ['갓생 지향 게으름뱅이', '자기관리 마스터'],
      },
      recommendations: {
        tips: [
          '때로는 계획에서 벗어나 즉흥적인 시간을 갖는 것도 창의성을 높이는 데 도움이 될 수 있어요.',
          '완벽주의에 사로잡혀 작은 실패에도 좌절하지 않도록, 유연한 마음을 가지세요.',
          '생산성뿐만 아니라 정신적인 휴식 시간도 충분히 확보해야 합니다.',
        ],
        hashtags: ['#생산성루틴', '#할일관리', '#투두리스트', '#갓생러'],
      },
    },
    {
      id: 'self-care-master',
      title: '💆 자기관리 마스터',
      description:
        '당신은 몸과 마음의 건강을 최우선으로 생각하며, 철저한 자기관리로 웰빙 갓생을 실천하는 마스터입니다.',
      detailedDescription:
        '운동, 건강한 식단, 충분한 수면, 명상, 취미 활동 등 자신을 돌보는 데 시간과 노력을 아끼지 않습니다. 스트레스 관리 능력이 뛰어나며, 내면의 평화와 외면의 활력을 동시에 추구합니다. 타인에게 보여주기 위한 갓생이 아닌, 온전히 자신을 위한 삶의 질 향상에 집중합니다.',
      emoji: '💆',
      color: '#98FB98', // Pale Green
      traits: ['웰빙 지향', '건강 중시', '휴식', '균형', '스트레스 관리', '긍정적'],
      compatibility: {
        best: ['균형 잡힌 갓생러', '학습 성장 중독자'],
        good: [],
        avoid: ['생산성 해커형', '챌린지 마니아 갓생러'],
      },
      recommendations: {
        tips: [
          '자기관리는 꾸준함이 중요하니, 작은 습관부터 시작해 보세요.',
          '가끔은 남들과 함께 하는 활동을 통해 새로운 즐거움을 찾아보세요.',
          '자신을 돌보는 시간을 가장 소중하게 생각하고 우선순위에 두세요.',
        ],
        hashtags: ['#자기관리', '#웰빙라이프', '#이너피스', '#갓생'],
      },
    },
    {
      id: 'financial-savvy-godsaeng',
      title: '💰 재테크 갓생러',
      description:
        '당신은 경제적 자유를 꿈꾸며, 스마트한 재테크와 소비 습관으로 미래를 설계하는 현명한 갓생러입니다.',
      detailedDescription:
        "주식, 부동산, 예적금, 가계부 작성 등 돈과 관련된 모든 것에 관심이 많고, 끊임없이 재테크 정보를 습득하며 자산을 불리는 데 집중합니다. '플렉스'보다는 '짠테크'와 '투자'를 통해 경제적 독립을 이루고자 합니다. 단기적인 만족보다는 장기적인 안목으로 미래를 준비하는 데 능숙합니다.",
      emoji: '💰',
      color: '#FFEA00', // Yellow
      traits: ['현명한 소비', '재테크 관심', '미래 지향', '정보 분석', '경제적 독립', '끈기'],
      compatibility: {
        best: ['학습 성장 중독자', '생산성 해커형'],
        good: [],
        avoid: ['갓생 지향 게으름뱅이', '자기관리 마스터'],
      },
      recommendations: {
        tips: [
          '재테크는 꾸준한 학습이 중요하니, 관련 서적이나 강의를 꾸준히 접해보세요.',
          '무리한 투자는 금물! 자신에게 맞는 투자 방식과 위험 허용 범위를 파악하세요.',
          '단순히 돈을 모으는 것보다, 그 돈으로 어떤 삶을 살고 싶은지 구체적인 목표를 세워보세요.',
        ],
        hashtags: ['#재테크', '#짠테크', '#경제적자유', '#갓생'],
      },
    },
    {
      id: 'learning-growth-addict',
      title: '📚 학습 성장 중독자',
      description:
        '당신은 끊임없이 배우고 성장하며, 어제보다 나은 오늘을 만들기 위해 노력하는 학습 중독자입니다.',
      detailedDescription:
        '독서, 온라인 강의 수강, 외국어 학습, 새로운 기술 습득 등 지적인 성장에 대한 갈망이 매우 큽니다. 자신의 역량을 강화하고, 새로운 지식을 얻는 과정에서 큰 행복을 느낍니다. 자기계발 관련 스터디나 커뮤니티 활동에도 적극적으로 참여하며, 배움의 즐거움을 최우선으로 생각합니다.',
      emoji: '📚',
      color: '#8B4513', // Saddle Brown
      traits: ['학구열', '성장 지향', '지적 호기심', '자기계발', '끈기', '개방적'],
      compatibility: {
        best: ['생산성 해커형', '챌린지 마니아 갓생러'],
        good: ['재테크 갓생러'],
        avoid: ['갓생 지향 게으름뱅이', '균형 잡힌 갓생러'],
      },
      recommendations: {
        tips: [
          '배움의 폭을 넓히기 위해 다양한 분야에 대한 호기심을 가져보세요.',
          '배운 것을 실제 생활에 적용하거나 타인과 공유하며 지식을 내 것으로 만드는 연습을 하세요.',
          '때로는 잠시 쉬어가며 인풋만큼 아웃풋을 위한 시간도 필요해요.',
        ],
        hashtags: ['#자기계발', '#성장루틴', '#독서스타그램', '#갓생'],
      },
    },
    {
      id: 'balanced-lifestyle-godsaeng',
      title: '⚖️ 균형 잡힌 갓생러',
      description:
        '당신은 일과 삶, 자기계발과 휴식 사이의 균형을 중요시하며, 무리하지 않는 선에서 자신만의 갓생을 추구하는 현명한 균형가입니다.',
      detailedDescription:
        '너무 생산성에만 몰두하거나, 너무 쉬기만 하는 것을 경계합니다. 자신의 페이스를 조절하며, 번아웃 없이 꾸준히 나아가는 것을 중요하게 생각합니다. 주변의 갓생러들을 보며 자극을 받기도 하지만, 휩쓸리기보다는 자신에게 맞는 방식을 찾아 실천합니다.',
      emoji: '⚖️',
      color: '#ADD8E6', // Light Blue
      traits: ['균형 감각', '현명함', '지속가능성', '번아웃 방지', '자기 이해', '유연함'],
      compatibility: {
        best: ['자기관리 마스터', '미라클 모닝 개척자'],
        good: [],
        avoid: ['생산성 해커형', '챌린지 마니아 갓생러'],
      },
      recommendations: {
        tips: [
          '자신의 강점과 약점을 파악하고, 무리한 목표는 과감히 포기하는 용기가 필요해요.',
          '때로는 예상치 못한 휴식이나 이벤트도 균형 잡힌 삶에 도움이 됩니다.',
          '주변 사람들에게 자신의 균형 잡힌 라이프스타일을 공유하고 긍정적인 영향을 주세요.',
        ],
        hashtags: ['#균형잡힌삶', '#워라밸', '#갓생밸런스', '#나만의갓생'],
      },
    },
    {
      id: 'aspiring-procrastinator',
      title: '🤦 갓생 지향 게으름뱅이',
      description:
        '당신은 갓생을 간절히 원하고 항상 다짐하지만, 행동으로 옮기기까지 오랜 시간이 걸리는 갓생 지향 게으름뱅이입니다.',
      detailedDescription:
        "화려한 갓생러들의 삶을 보며 부러워하고, '나도 저렇게 살아야지!' 하고 다짐하지만, 막상 시작하려면 온몸의 세포가 저항하는 느낌을 받습니다. 계획은 거창하게 세우지만 실행은 내일로 미루기 일쑤입니다. 하지만 마음속에는 갓생에 대한 뜨거운 열망을 항상 품고 있습니다.",
      emoji: '🤦',
      color: '#808080', // Gray
      traits: ['지향성', '열망', '게으름', '시작의 어려움', '공감 능력', '유머러스함'],
      compatibility: {
        best: ['균형 잡힌 갓생러', '자기관리 마스터'],
        good: ['균형 잡힌 갓생러'], // 'good'에 중복되는 항목이 있어 하나로 줄이거나 다른 유형 추가 고려
        avoid: ['미라클 모닝 개척자', '생산성 해커형'],
      },
      recommendations: {
        tips: [
          '작은 목표부터 시작하여 성공 경험을 쌓는 것이 중요해요. (예: 하루 10분 독서)',
          '완벽하게 시작하려기보다, 일단 시작하는 것에 의미를 두세요.',
          '갓생에 대한 압박감을 내려놓고, 자신을 너그럽게 대하는 연습도 필요해요.',
        ],
        hashtags: ['#갓생은내일부터', '#게으름뱅이의고백', '#작심삼일러', '#언젠간갓생'],
      },
    },
    {
      id: 'challenge-mania-godsaeng',
      title: '🏆 챌린지 마니아 갓생러',
      description:
        '당신은 새로운 챌린지에 도전하고, 그 과정을 SNS에 공유하며 동기 부여를 얻는 갓생 챌린지 마니아입니다.',
      detailedDescription:
        '갓생을 혼자 하기보다 다른 사람들과 함께 목표를 공유하고 달성하는 것을 즐깁니다. 미션 클리어의 성취감과 남들에게 인증하는 것에서 큰 동기 부여를 얻으며, 이를 통해 꾸준함을 유지합니다. 챌린지가 없는 삶은 상상할 수 없으며, 늘 다음 챌린지를 탐색하고 있습니다.',
      emoji: '🏆',
      color: '#FF4500', // OrangeRed
      traits: ['도전적', '성취욕', '인증 중독', '동기 부여', '외향적', '계획적'],
      compatibility: {
        best: ['미라클 모닝 개척자', '학습 성장 중독자'],
        good: ['생산성 해커형'],
        avoid: ['갓생 지향 게으름뱅이', '자기관리 마스터'],
      },
      recommendations: {
        tips: [
          '챌린지에 너무 얽매여 스트레스받기보다, 즐기는 것에 의미를 두세요.',
          '챌린지 성공 후에는 자신에게 작은 보상을 주는 것도 좋아요.',
          '가끔은 남에게 보여주기 위함이 아닌, 오롯이 나 자신을 위한 챌린지도 시도해 보세요.',
        ],
        hashtags: ['#갓생챌린지', '#도전성공', '#오운완', '#공부인증'],
      },
    },
  ],
};
