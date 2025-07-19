import type { PersonalityTestData } from '@/types/personalityTest';

export const deokjilTypeTestData: PersonalityTestData = {
  id: 'deokjil-type-test',
  title: '👑 나의 덕질 유형 테스트',
  description:
    '덕질이 세상을 구한다! 당신은 어떤 유형의 덕후인가요? 당신의 숨겨진 덕질 유형을 알아보고, 덕력 레벨을 친구들에게 자랑해보세요!',
  category: 'mz-culture',
  resultTypes: [
    'light-enjoyer', // 라이트 덕후 (일상 즐기는 형)
    'merch-collector', // 굿즈 수집형 덕후
    'content-creator', // 콘텐츠 생산형 덕후
    'community-leader', // 커뮤니티 운영/총대형 덕후
    'deep-researcher', // 심층 탐구형 덕후 (TMI 분석가)
    'financial-supporter', // 재력 서포터형 덕후 (큰손 덕후)
    'stealth-fan', // 숨어서 덕질하는 샤이 덕후
    'experience-chaser', // 직접 참여형 덕후 (현장러)
    'trend-hopper', // 유행 따라가는 철새 덕후
    'loyal-one-pick', // 한 우물 파는 장수형 덕후
  ],
  questions: [
    {
      id: 'q1',
      question: '새로운 관심사가 생겼을 때, 당신의 첫 행동은?',
      options: [
        {
          id: 'q1_a',
          text: '일단 관련 영상이나 정보를 가볍게 찾아본다.',
          emoji: '👀',
          scores: { 'light-enjoyer': 3, 'trend-hopper': 2 },
        },
        {
          id: 'q1_b',
          text: '관련 굿즈나 앨범이 있는지부터 검색한다.',
          emoji: '🛍️',
          scores: { 'merch-collector': 3, 'financial-supporter': 1 },
        },
        {
          id: 'q1_c',
          text: '팬덤 커뮤니티에 가입하고 정보를 얻는다.',
          emoji: '💬',
          scores: { 'community-leader': 2, 'deep-researcher': 1 },
        },
        {
          id: 'q1_d',
          text: '내 SNS에 티 안 나게 관심사를 기록하거나, 나만의 플레이리스트를 만든다.',
          emoji: '🤫',
          scores: { 'stealth-fan': 3, 'content-creator': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '최애의 굿즈가 새로 나온다면?',
      options: [
        {
          id: 'q2_a',
          text: '예쁘면 사고, 아니면 패스! 실용성을 따진다.',
          emoji: '🤔',
          scores: { 'light-enjoyer': 2, 'loyal-one-pick': 1 },
        },
        {
          id: 'q2_b',
          text: '무조건 전 종류 구매! 품절될까 봐 불안하다.',
          emoji: '💳',
          scores: { 'merch-collector': 3, 'financial-supporter': 2 },
        },
        {
          id: 'q2_c',
          text: '공구(공동구매)에 참여하거나, 판매처 정보를 공유한다.',
          emoji: '🤝',
          scores: { 'community-leader': 2, 'experience-chaser': 1 },
        },
        {
          id: 'q2_d',
          text: '사고 싶지만, 누가 알까 봐 조용히 구매한다.',
          emoji: '🤫',
          scores: { 'stealth-fan': 3 },
        },
      ],
    },
    {
      id: 'q3',
      question: '덕질 관련 정보는 주로 어디서 얻나요?',
      options: [
        {
          id: 'q3_a',
          text: '공식 SNS, 유튜브 등 공식 채널만 구독한다.',
          emoji: '🔔',
          scores: { 'light-enjoyer': 3, 'stealth-fan': 2 },
        },
        {
          id: 'q3_b',
          text: '모든 관련 커뮤니티, 카페, 오픈채팅방을 섭렵한다.',
          emoji: '🌐',
          scores: { 'deep-researcher': 3, 'community-leader': 2 },
        },
        {
          id: 'q3_c',
          text: '덕질하는 친구들이 알아서 알려주기를 기다린다.',
          emoji: '👂',
          scores: { 'trend-hopper': 3, 'light-enjoyer': 1 },
        },
        {
          id: 'q3_d',
          text: '내 손으로 직접 자료를 찾아보고 분석한다.',
          emoji: '🔍',
          scores: { 'content-creator': 2, 'deep-researcher': 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '최애의 콘서트/팬미팅 등 오프라인 행사가 열린다면?',
      options: [
        {
          id: 'q4_a',
          text: '티켓팅에 목숨 건다! 무조건 현장에서 봐야 한다.',
          emoji: '🔥',
          scores: { 'experience-chaser': 3, 'financial-supporter': 2 },
        },
        {
          id: 'q4_b',
          text: '굳이 현장까지 갈 필요는... 온라인 중계나 영상으로 만족한다.',
          emoji: '📺',
          scores: { 'light-enjoyer': 2, 'stealth-fan': 1 },
        },
        {
          id: 'q4_c',
          text: '나만의 응원봉을 만들거나, 플래카드 문구를 기획한다.',
          emoji: '✨',
          scores: { 'content-creator': 3, 'community-leader': 1 },
        },
        {
          id: 'q4_d',
          text: '친구와 함께 가거나, 현장에서 새로운 팬들을 만나는 것을 즐긴다.',
          emoji: '🥳',
          scores: { 'community-leader': 3, 'experience-chaser': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '덕질에 사용하는 비용에 대해 당신의 생각은?',
      options: [
        {
          id: 'q5_a',
          text: '나의 행복을 위한 투자! 아낌없이 쓴다.',
          emoji: '💸',
          scores: { 'financial-supporter': 3, 'merch-collector': 2 },
        },
        {
          id: 'q5_b',
          text: '필요한 만큼만 합리적으로 지출한다.',
          emoji: '💰',
          scores: { 'light-enjoyer': 2, 'stealth-fan': 1 },
        },
        {
          id: 'q5_c',
          text: '돈도 중요하지만, 내 시간과 노력으로 덕질하는 것이 더 뿌듯하다.',
          emoji: '⏰',
          scores: { 'content-creator': 3, 'deep-researcher': 2 },
        },
        {
          id: 'q5_d',
          text: '총대가 되어 모금 활동을 하거나, 자금 사용을 투명하게 관리한다.',
          emoji: '📊',
          scores: { 'community-leader': 3, 'financial-supporter': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '덕질하는 대상을 얼마나 깊이 파고드나요?',
      options: [
        {
          id: 'q6_a',
          text: '최신 활동 위주로 가볍게 즐긴다.',
          emoji: ' superficial',
          scores: { 'light-enjoyer': 3, 'trend-hopper': 2 },
        },
        {
          id: 'q6_b',
          text: '데뷔 초 영상부터 비하인드 스토리까지, 모든 TMI를 파악하고 있다.',
          emoji: '🧐',
          scores: { 'deep-researcher': 3, 'loyal-one-pick': 2 },
        },
        {
          id: 'q6_c',
          text: '내용을 분석하고, 나만의 해석을 덧붙여 2차 창작물을 만든다.',
          emoji: '✍️',
          scores: { 'content-creator': 3, 'deep-researcher': 1 },
        },
        {
          id: 'q6_d',
          text: '가끔 지나치게 깊이 파고들다가 현타가 오기도 한다.',
          emoji: '😵‍💫',
          scores: { 'stealth-fan': 2, 'trend-hopper': 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: '친구들에게 자신의 덕질을 얼마나 티 내나요?',
      options: [
        {
          id: 'q7_a',
          text: '대놓고 자랑하고 영업한다! 같이 덕질하자!',
          emoji: '📣',
          scores: { 'community-leader': 2, 'experience-chaser': 2 },
        },
        {
          id: 'q7_b',
          text: '굳이 말 안 하지만, 물어보면 자세히 설명해 준다.',
          emoji: '🤫',
          scores: { 'stealth-fan': 3, 'loyal-one-pick': 1 },
        },
        {
          id: 'q7_c',
          text: '덕질하는 티가 안 날 수 없다. 내 일상의 일부!',
          emoji: '✨',
          scores: { 'content-creator': 2, 'merch-collector': 1 },
        },
        {
          id: 'q7_d',
          text: '그때그때 핫한 것에 따라 덕질 대상이 바뀐다.',
          emoji: '🦋',
          scores: { 'trend-hopper': 3, 'light-enjoyer': 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '덕질하는 대상이 구설수에 오르거나 비판받는다면?',
      options: [
        {
          id: 'q8_a',
          text: '무조건 쉴드! 우리 최애는 그럴 리 없어!',
          emoji: '🛡️',
          scores: { 'financial-supporter': 2, 'loyal-one-pick': 3 },
        },
        {
          id: 'q8_b',
          text: '정보를 수집하고 객관적으로 상황을 파악하려 노력한다.',
          emoji: '🧐',
          scores: { 'deep-researcher': 3, 'community-leader': 2 },
        },
        {
          id: 'q8_c',
          text: '실망하고 잠시 덕질을 멈추거나, 다른 대상을 찾아본다.',
          emoji: '💔',
          scores: { 'trend-hopper': 3, 'light-enjoyer': 2 },
        },
        {
          id: 'q8_d',
          text: '내가 뭘 할 수 있을까 고민하고, 팬덤의 대응 방향을 따른다.',
          emoji: '🤝',
          scores: { 'community-leader': 3, 'stealth-fan': 1 },
        },
      ],
    },
    {
      id: 'q9',
      question: '당신에게 덕질이란?',
      options: [
        {
          id: 'q9_a',
          text: '삶의 무료함을 채워주는 가벼운 즐거움.',
          emoji: '🎈',
          scores: { 'light-enjoyer': 3, 'trend-hopper': 2 },
        },
        {
          id: 'q9_b',
          text: '나의 정체성이자, 열정을 쏟아붓는 유일한 대상.',
          emoji: '💖',
          scores: { 'loyal-one-pick': 3, 'deep-researcher': 2 },
        },
        {
          id: 'q9_c',
          text: '나의 능력을 발휘하고, 다른 사람들과 소통하는 창구.',
          emoji: '💡',
          scores: { 'content-creator': 3, 'community-leader': 3 },
        },
        {
          id: 'q9_d',
          text: '스트레스 해소이자, 나를 행복하게 하는 비타민.',
          emoji: '💊',
          scores: { 'experience-chaser': 2, 'financial-supporter': 2 },
        },
      ],
    },
    {
      id: 'q10',
      question: '덕질을 그만두고 싶은 순간이 온다면?',
      options: [
        {
          id: 'q10_a',
          text: '쿨하게 정리하고 새로운 덕질을 찾아 떠난다.',
          emoji: '👋',
          scores: { 'trend-hopper': 3, 'light-enjoyer': 2 },
        },
        {
          id: 'q10_b',
          text: '쉽게 포기할 수 없다! 이미 투자한 시간과 돈이 아깝다.',
          emoji: '😭',
          scores: { 'loyal-one-pick': 3, 'financial-supporter': 2 },
        },
        {
          id: 'q10_c',
          text: '잠시 쉬었다가 다시 돌아올 것이다. 내 최애는 소중하니까.',
          emoji: '🧘',
          scores: { 'stealth-fan': 2, 'light-enjoyer': 1 },
        },
        {
          id: 'q10_d',
          text: '다른 팬들과 고민을 나누거나, 해결책을 모색해 본다.',
          emoji: '🤔',
          scores: { 'community-leader': 3, 'deep-researcher': 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'light-enjoyer',
      title: '🍃 라이트 덕후 (일상 즐기는 형)',
      description:
        "당신은 덕질을 일상의 가벼운 즐거움으로 여기는 '라이트 덕후'입니다. 부담 없이 콘텐츠를 소비하며 행복을 느껴요!",
      detailedDescription:
        '특정 대상에 깊이 몰입하기보다는, 다양한 관심사를 넓고 얕게 즐기는 편입니다. 굿즈나 공식 행사에 큰 의미를 두지 않고, 주로 영상이나 음악 등 온라인 콘텐츠를 소비하며 소소한 행복을 느낍니다. 덕질이 스트레스가 되는 것을 싫어하며, 언제든 가볍게 시작하고 멈출 수 있는 유연함을 가지고 있습니다.',
      emoji: '🍃',
      color: '#90EE90', // LightGreen
      traits: ['가벼움', '유연함', '부담 없음', '스트레스 회피', '다양한 관심사', '일상 지향'],
      compatibility: {
        best: ['trend-hopper', 'stealth-fan'],
        good: [],
        avoid: ['financial-supporter', 'community-leader'],
      },
      recommendations: {
        tips: [
          '가끔은 좋아하는 대상을 더 깊이 파고들어, 새로운 재미를 발견해 보는 것은 어떨까요?',
          '주변에 라이트 덕후 친구들에게 덕질의 가벼운 즐거움을 전파해 보세요.',
          '덕질로 인한 스트레스가 적다는 것은 큰 장점이에요!',
        ],
        hashtags: ['#라이트덕후', '#가벼운덕질', '#일상속행복', '#유연한덕후'],
      },
    },
    {
      id: 'merch-collector',
      title: '🎁 굿즈 수집형 덕후',
      description:
        "당신은 최애와 관련된 모든 굿즈를 수집하는 것에 희열을 느끼는 '굿즈 수집형 덕후'입니다. 덕질은 곧 소유의 기쁨!",
      detailedDescription:
        '포토카드, 앨범, 시즌 그리팅, 캐릭터 상품 등 최애와 관련된 모든 굿즈를 모으는 데 열정적입니다. 예쁜 굿즈를 보면 일단 지르고 보는 성향이 강하며, 이를 통해 최애에 대한 사랑을 표현합니다. 굿즈를 진열하고 감상하는 것에서 큰 만족감을 느끼는 유형입니다.',
      emoji: '🎁',
      color: '#FFB6C1', // LightPink
      traits: ['수집욕', '소유 지향', '물품 애착', '충동구매', '사랑 표현', '꼼꼼함 (컬렉션 관리)'],
      compatibility: {
        best: ['financial-supporter', 'content-creator'],
        good: [],
        avoid: ['light-enjoyer', 'stealth-fan'],
      },
      recommendations: {
        tips: [
          '굿즈 구매 전, 꼭 필요한지 한 번 더 고민해 보세요! (텅장 방지)',
          '소장한 굿즈를 활용해 나만의 특별한 공간을 꾸며보는 것은 어떨까요?',
          '굿즈를 통해 얻는 행복도 좋지만, 가끔은 다른 방식으로 최애를 응원해 보세요.',
        ],
        hashtags: ['#굿즈맛집', '#텅장요정', '#수집가', '#덕후존'],
      },
    },
    {
      id: 'content-creator',
      title: '✍️ 콘텐츠 생산형 덕후',
      description:
        "당신은 최애에 대한 애정을 바탕으로 팬아트, 팬픽, 영상 편집 등 다양한 2차 창작물을 만들어내는 '콘텐츠 생산형 덕후'입니다.",
      detailedDescription:
        '단순히 소비하는 것을 넘어, 자신의 재능과 노력을 통해 새로운 콘텐츠를 생산하며 덕질을 즐깁니다. 최애의 매력을 다른 사람들에게 알리고, 팬덤 내에서 영향력을 발휘하는 것에 큰 보람을 느낍니다. 창의적이고 섬세하며, 완성도 높은 결과물을 추구합니다.',
      emoji: '✍️',
      color: '#ADD8E6', // LightBlue
      traits: ['창의적', '생산적', '섬세함', '영향력 추구', '재능 발휘', '끈기'],
      compatibility: {
        best: ['deep-researcher', 'community-leader'],
        good: [],
        avoid: ['light-enjoyer', 'trend-hopper'],
      },
      recommendations: {
        tips: [
          '창작 활동도 좋지만, 너무 완벽주의에 갇히지 않도록 주의하세요!',
          '당신의 콘텐츠는 팬덤에 큰 활력이 됩니다. 계속해서 멋진 결과물을 만들어주세요.',
          '가끔은 다른 팬들의 창작물도 감상하며 영감을 얻어보는 것은 어떨까요?',
        ],
        hashtags: ['#금손덕후', '#창작덕후', '#팬아터', '#영상장인'],
      },
    },
    {
      id: 'community-leader',
      title: '📢 커뮤니티 운영/총대형 덕후',
      description:
        "당신은 팬덤 커뮤니티를 이끌거나 총대를 맡아 팬들을 단합시키는 '커뮤니티 운영/총대형 덕후'입니다. 덕질은 곧 리더십!",
      detailedDescription:
        '팬덤 내에서 중요한 정보를 공유하고, 공동 목표를 위해 팬들을 조직하고 이끄는 데 능숙합니다. 탁월한 리더십과 추진력을 바탕으로 팬덤 활동의 구심점 역할을 합니다. 최애를 위한 일이라면 발 벗고 나서는 적극적인 행동파입니다.',
      emoji: '📢',
      color: '#FFDEAD', // NavajoWhite (slightly yellow)
      traits: ['리더십', '추진력', '소통 능력', '조직적', '적극적', '책임감'],
      compatibility: {
        best: ['financial-supporter', 'deep-researcher'],
        good: [],
        avoid: ['stealth-fan', 'light-enjoyer'],
      },
      recommendations: {
        tips: [
          '팬덤 활동도 중요하지만, 자신의 개인 시간과 건강도 챙기는 것을 잊지 마세요!',
          '당신의 리더십은 팬덤의 발전에 큰 기여를 합니다. 항상 감사하고 있어요.',
          '때로는 다른 팬들에게 권한을 위임하며 함께 성장하는 기회를 만들어 보세요.',
        ],
        hashtags: ['#총대메고', '#팬덤리더', '#소통왕', '#책임감갑'],
      },
    },
    {
      id: 'deep-researcher',
      title: '📚 심층 탐구형 덕후 (TMI 분석가)',
      description:
        "당신은 최애의 모든 것을 파고드는 데 집중하는 '심층 탐구형 덕후'입니다. 덕질은 곧 학문!",
      detailedDescription:
        "최애의 과거 활동, 비하인드 스토리, 발언 하나하나까지 놓치지 않고 분석하고 기록합니다. 사소한 정보도 그냥 지나치지 않으며, 이를 통해 새로운 사실을 발견하는 것에 큰 희열을 느낍니다. 팬덤 내에서 '정보통'으로 통하며, 논리적이고 분석적인 사고력을 지니고 있습니다.",
      emoji: '📚',
      color: '#B0C4DE', // LightSteelBlue
      traits: ['분석적', '논리적', '탐구적', '기록의 달인', '정보 지향', '끈기'],
      compatibility: {
        best: ['content-creator', 'community-leader'],
        good: [],
        avoid: ['trend-hopper', 'light-enjoyer'],
      },
      recommendations: {
        tips: [
          '너무 깊이 파고들다가 현타가 오지 않도록, 가끔은 덕질의 가벼운 면도 즐겨보세요.',
          '당신의 심층적인 분석은 다른 팬들에게 큰 도움이 됩니다. 소중한 정보들을 공유해 주세요.',
          '때로는 새로운 덕질 대상에게도 당신의 탐구 정신을 발휘해 보는 것은 어떨까요?',
        ],
        hashtags: ['#TMI박사', '#정보통', '#분석가', '#지식덕후'],
      },
    },
    {
      id: 'financial-supporter',
      title: '💰 재력 서포터형 덕후 (큰손 덕후)',
      description:
        "당신은 최애를 위해 아낌없이 지갑을 여는 '재력 서포터형 덕후'입니다. 덕질은 곧 스케일!",
      detailedDescription:
        '앨범 공동구매, 굿즈 대량 구매, 광고 서포트 등 최애의 활동에 직접적인 재정적 지원을 아끼지 않습니다. 큰손으로서 팬덤 내에서 묵묵히 기여하며, 자신의 소비가 최애에게 도움이 된다는 사실에 뿌듯함을 느낍니다. 과감하고 통 큰 소비를 즐기지만, 합리적인 판단도 중요시합니다.',
      emoji: '💰',
      color: '#DAA520', // Goldenrod
      traits: ['통 큼', '과감함', '헌신적', '지원적', '뿌듯함', '현실적 (재정능력 고려)'],
      compatibility: {
        best: ['merch-collector', 'community-leader'],
        good: [],
        avoid: ['light-enjoyer', 'stealth-fan'],
      },
      recommendations: {
        tips: [
          '아낌없는 지원도 좋지만, 자신의 재정 상황을 항상 고려하며 합리적인 선에서 즐겨야 해요.',
          '당신의 큰손 덕질은 팬덤에 엄청난 힘이 됩니다. 항상 감사하고 있어요!',
          '재정적 지원 외에도 다양한 방식으로 최애를 응원하는 방법을 찾아보는 것은 어떨까요?',
        ],
        hashtags: ['#큰손덕후', '#지갑열었다', '#재력덕후', '#찐사랑'],
      },
    },
    {
      id: 'stealth-fan',
      title: '🤫 숨어서 덕질하는 샤이 덕후',
      description:
        "당신은 덕질하는 것을 주변에 잘 드러내지 않는 '숨어서 덕질하는 샤이 덕후'입니다. 나만의 공간에서 조용히 즐겨요!",
      detailedDescription:
        '주변 사람들에게는 덕질하는 티를 잘 내지 않지만, 속으로는 누구보다 깊이 최애를 사랑합니다. 남의 시선보다는 자신의 만족을 중요하게 생각하며, 혼자만의 공간에서 조용히 콘텐츠를 소비하거나 굿즈를 감상하는 것을 선호합니다. 소극적이지만 꾸준한 덕질을 이어갑니다.',
      emoji: '🤫',
      color: '#D3D3D3', // LightGray
      traits: ['내향적', '조용함', '자기 만족', '비공개적', '꾸준함', '소극적'],
      compatibility: {
        best: ['light-enjoyer', 'loyal-one-pick'],
        good: [],
        avoid: ['community-leader', 'experience-chaser'],
      },
      recommendations: {
        tips: [
          '가끔은 용기를 내어 덕질하는 친구들과 소통해 보는 것도 새로운 즐거움을 줄 수 있어요.',
          '혼자만의 덕질 공간을 더 아늑하고 편안하게 꾸며보는 것은 어떨까요?',
          '당신의 조용한 덕질도 충분히 가치 있고 멋진 덕질입니다!',
        ],
        hashtags: ['#샤이덕후', '#나만아는덕질', '#숨덕', '#조용한사랑'],
      },
    },
    {
      id: 'experience-chaser',
      title: '🏃‍♀️ 직접 참여형 덕후 (현장러)',
      description:
        "당신은 최애를 직접 보고 경험하는 것에 가장 큰 가치를 두는 '직접 참여형 덕후'입니다. 덕질은 곧 현장감!",
      detailedDescription:
        '콘서트, 팬미팅, 사인회, 전시회 등 최애와 관련된 모든 오프라인 행사에 적극적으로 참여하려 합니다. 현장에서만 느낄 수 있는 생생함과 감동을 중요하게 생각하며, 이를 위해 시간과 노력을 아끼지 않습니다. 활동적이고 외향적인 성향을 지니고 있습니다.',
      emoji: '🏃‍♀️',
      color: '#FF6347', // Tomato
      traits: ['활동적', '외향적', '경험 중시', '현장감', '적극적', '도전적'],
      compatibility: {
        best: ['community-leader', 'financial-supporter'],
        good: [],
        avoid: ['stealth-fan', 'light-enjoyer'],
      },
      recommendations: {
        tips: [
          '현장 경험도 좋지만, 안전과 건강을 최우선으로 생각하며 덕질을 즐기세요.',
          '현장에서 만난 새로운 팬들과 소통하며 덕질의 폭을 넓혀보는 것은 어떨까요?',
          '당신의 열정은 최애에게 큰 힘이 됩니다!',
        ],
        hashtags: ['#현장러', '#직관러', '#덕질여행', '#활동형덕후'],
      },
    },
    {
      id: 'trend-hopper',
      title: '🦋 유행 따라가는 철새 덕후',
      description:
        "당신은 그때그때 핫한 대상에 매력을 느끼는 '유행 따라가는 철새 덕후'입니다. 덕질은 곧 트렌드!",
      detailedDescription:
        '새로운 콘텐츠나 스타가 뜨면 빠르게 관심사를 옮겨갑니다. 한 대상에 깊이 몰입하기보다는, 대중의 흐름을 따라가며 다양한 덕질을 경험하는 것을 즐깁니다. 트렌드에 민감하고 새로운 것에 대한 호기심이 많지만, 싫증을 잘 느끼는 편입니다.',
      emoji: '🦋',
      color: '#FFFF00', // Yellow
      traits: ['트렌디', '호기심 많음', '변화 추구', '싫증 잘 느낌', '유연함', '폭넓은 관심사'],
      compatibility: {
        best: ['light-enjoyer'],
        good: [],
        avoid: ['loyal-one-pick', 'deep-researcher'],
      },
      recommendations: {
        tips: [
          '다양한 덕질도 좋지만, 가끔은 한 우물을 파서 깊이 있는 즐거움을 느껴보는 것도 좋아요.',
          '새로운 관심사를 찾기 전에, 기존 덕질에서 놓친 것이 없는지 돌아보는 시간을 가져보세요.',
          '당신의 넓은 관심사는 다양한 분야의 지식을 쌓는 데 도움이 될 거예요!',
        ],
        hashtags: ['#철새덕후', '#트렌드세터', '#다양한덕질', '#새로운것최고'],
      },
    },
    {
      id: 'loyal-one-pick',
      title: '💖 한 우물 파는 장수형 덕후',
      description:
        "당신은 한 번 빠지면 변함없이 꾸준히 덕질하는 '한 우물 파는 장수형 덕후'입니다. 덕질은 곧 의리이자 사랑!",
      detailedDescription:
        "오랜 시간 동안 한 대상만을 꾸준히 사랑하고 응원합니다. 쉽게 마음이 변하지 않으며, 최애에게 깊은 애정과 의리를 가지고 있습니다. 팬덤 내에서도 '고인물'이나 '선배 덕후'로 통하며, 변함없는 사랑을 통해 큰 만족감과 자부심을 느낍니다.",
      emoji: '💖',
      color: '#DC143C', // Crimson
      traits: ['꾸준함', '의리', '헌신적', '변함없음', '깊은 사랑', '자부심'],
      compatibility: {
        best: ['financial-supporter', 'deep-researcher'],
        good: [],
        avoid: ['trend-hopper', 'light-enjoyer'],
      },
      recommendations: {
        tips: [
          '오랜 기간 덕질을 해온 당신의 노하우를 다른 팬들에게 공유해 주세요.',
          '때로는 새로운 방식으로 최애를 응원하며 덕질에 활력을 불어넣는 것도 좋아요.',
          '당신의 변함없는 사랑은 최애에게 가장 큰 힘이 될 것입니다!',
        ],
        hashtags: ['#한우물덕후', '#장수덕후', '#찐팬', '#변치않는사랑'],
      },
    },
  ],
};
