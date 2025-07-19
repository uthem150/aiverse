import type { PersonalityTestData } from '@/types/personalityTest';

export const gameTypeTestData: PersonalityTestData = {
  id: 'game-type-test',
  title: '🎮 나의 게임 유형 테스트',
  description:
    '새로운 게임을 시작하거나 친구들과 게임을 할 때, 당신은 어떤 플레이 스타일을 보여주나요? 당신의 숨겨진 게임 성향을 알아보고, 최고의 게임 메이트를 찾아보세요!',
  category: 'mz-lifestyle',
  resultTypes: [
    'competitive-dominator', // 경쟁심 폭발 승부사형
    'story-immersive-explorer', // 스토리에 몰입하는 탐험가형
    'social-community-player', // 함께 즐기는 소통형
    'casual-light-enjoyer', // 가볍게 즐기는 캐주얼형
    'strategic-brain-player', // 전략적 두뇌파형
    'collection-completionist', // 수집 강박 완벽주의형
    'skill-master-aspirant', // 컨트롤 장인 지망생형
    'new-game-explorer', // 신작 탐험가형
  ],
  questions: [
    {
      id: 'q1',
      question: '새로운 게임을 시작할 때, 가장 먼저 확인하는 것은?',
      options: [
        {
          id: 'q1_a',
          text: '그래픽, 스토리, 세계관 등 게임의 전체적인 분위기와 몰입감.',
          emoji: '🌌',
          scores: { 'story-immersive-explorer': 3, 'new-game-explorer': 2 },
        },
        {
          id: 'q1_b',
          text: 'PVP, 랭킹 시스템 등 다른 플레이어와 경쟁할 수 있는 요소.',
          emoji: '⚔️',
          scores: { 'competitive-dominator': 3, 'skill-master-aspirant': 1 },
        },
        {
          id: 'q1_c',
          text: '친구들과 함께 즐길 수 있는 멀티플레이 기능이나 커뮤니티 시스템.',
          emoji: '🤝',
          scores: { 'social-community-player': 3, 'casual-light-enjoyer': 1 },
        },
        {
          id: 'q1_d',
          text: '게임 리뷰, 공략집, 숨겨진 팁 등 게임을 완벽하게 즐길 정보.',
          emoji: '🔍',
          scores: { 'strategic-brain-player': 2, 'collection-completionist': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '게임 중 가장 짜릿함을 느끼는 순간은?',
      options: [
        {
          id: 'q2_a',
          text: '치열한 경쟁에서 승리하며 랭킹을 올렸을 때!',
          emoji: '🏆',
          scores: { 'competitive-dominator': 3, 'skill-master-aspirant': 2 },
        },
        {
          id: 'q2_b',
          text: '스토리가 최고조에 달하며 감동이나 충격을 받았을 때!',
          emoji: '😭',
          scores: { 'story-immersive-explorer': 3, 'casual-light-enjoyer': 1 },
        },
        {
          id: 'q2_c',
          text: '친구들과 웃고 떠들며 함께 미션을 클리어했을 때!',
          emoji: '🥳',
          scores: { 'social-community-player': 3 },
        },
        {
          id: 'q2_d',
          text: '숨겨진 아이템이나 업적을 발견하여 컬렉션을 완성했을 때!',
          emoji: '✨',
          scores: { 'collection-completionist': 3, 'strategic-brain-player': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '게임 아이템을 구매하거나 캐릭터를 육성할 때, 당신의 방식은?',
      options: [
        {
          id: 'q3_a',
          text: '효율성을 최우선! 가장 가성비 좋고 성능 좋은 아이템만 구매한다.',
          emoji: '💰',
          scores: { 'strategic-brain-player': 3, 'competitive-dominator': 2 },
        },
        {
          id: 'q3_b',
          text: '예쁘고 희귀한 스킨, 꾸미기 아이템에 먼저 눈이 간다.',
          emoji: '👗',
          scores: { 'collection-completionist': 3, 'casual-light-enjoyer': 1 },
        },
        {
          id: 'q3_c',
          text: '열심히 노가다하여 나만의 방식으로 캐릭터를 성장시킨다.',
          emoji: '⚒️',
          scores: { 'skill-master-aspirant': 3 },
        },
        {
          id: 'q3_d',
          text: '필요한 만큼만 최소한으로 투자하고, 나머지는 즐기는 데 집중한다.',
          emoji: '😌',
          scores: { 'casual-light-enjoyer': 3, 'social-community-player': 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: '가장 선호하는 게임 장르는?',
      options: [
        {
          id: 'q4_a',
          text: '롤, 오버워치 등 팀워크와 전략이 중요한 MOBA/FPS.',
          emoji: '🎮',
          scores: {
            'competitive-dominator': 3,
            'strategic-brain-player': 2,
            'social-community-player': 1,
          },
        },
        {
          id: 'q4_b',
          text: '갓 오브 워, GTA 등 탄탄한 스토리와 오픈월드가 있는 액션 어드벤처.',
          emoji: '🗺️',
          scores: { 'story-immersive-explorer': 3, 'new-game-explorer': 2 },
        },
        {
          id: 'q4_c',
          text: '스타듀 밸리, 모동숲 등 편안하고 꾸미기 좋은 시뮬레이션/힐링 게임.',
          emoji: '🏡',
          scores: { 'casual-light-enjoyer': 3, 'collection-completionist': 1 },
        },
        {
          id: 'q4_d',
          text: '리그 오브 레전드, 발로란트처럼 컨트롤 숙련도를 요구하는 게임.',
          emoji: '⌨️',
          scores: { 'skill-master-aspirant': 3, 'competitive-dominator': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '게임에서 패배했을 때, 당신의 반응은?',
      options: [
        {
          id: 'q5_a',
          text: '분석! 왜 졌는지 복기하며 다음 전략을 구상한다.',
          emoji: '🤔',
          scores: { 'strategic-brain-player': 3, 'competitive-dominator': 2 },
        },
        {
          id: 'q5_b',
          text: '괜찮아! 어차피 게임은 즐기려고 하는 거니까.',
          emoji: '😌',
          scores: { 'casual-light-enjoyer': 3, 'social-community-player': 2 },
        },
        {
          id: 'q5_c',
          text: '패배의 원인이 내 실력 부족이라면, 반복 연습으로 극복한다.',
          emoji: '💪',
          scores: { 'skill-master-aspirant': 3, 'competitive-dominator': 1 },
        },
        {
          id: 'q5_d',
          text: '아쉬워하며 잠시 게임을 끈다. (현타가 좀 온다)',
          emoji: '😩',
          scores: { 'story-immersive-explorer': 1, 'collection-completionist': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '오픈월드 게임에서 당신의 플레이 방식은?',
      options: [
        {
          id: 'q6_a',
          text: '메인 퀘스트보다는 숨겨진 장소, 서브 퀘스트를 찾아다닌다.',
          emoji: '🏞️',
          scores: { 'story-immersive-explorer': 3, 'collection-completionist': 2 },
        },
        {
          id: 'q6_b',
          text: '일단 메인 스토리를 빠르게 깨고 나서 다른 것들을 탐색한다.',
          emoji: '⏩',
          scores: { 'competitive-dominator': 1, 'strategic-brain-player': 2 },
        },
        {
          id: 'q6_c',
          text: '친구들과 함께 월드를 탐험하며 수다 떠는 것이 최고!',
          emoji: '💬',
          scores: { 'social-community-player': 3, 'casual-light-enjoyer': 1 },
        },
        {
          id: 'q6_d',
          text: '맵에 있는 모든 오브젝트를 수집하고, 업적을 달성한다.',
          emoji: '🗺️',
          scores: { 'collection-completionist': 3, 'strategic-brain-player': 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: '친구에게 게임을 추천할 때, 가장 강조하는 부분은?',
      options: [
        {
          id: 'q7_a',
          text: '탄탄한 스토리와 캐릭터의 매력.',
          emoji: '📖',
          scores: { 'story-immersive-explorer': 3, 'new-game-explorer': 1 },
        },
        {
          id: 'q7_b',
          text: "친구와 함께 즐길 수 있는 '협동' 플레이의 재미.",
          emoji: '🫂',
          scores: { 'social-community-player': 3, 'casual-light-enjoyer': 2 },
        },
        {
          id: 'q7_c',
          text: '컨트롤의 재미와 손맛, 그리고 실력 향상의 쾌감.',
          emoji: '🕹️',
          scores: { 'skill-master-aspirant': 3, 'competitive-dominator': 2 },
        },
        {
          id: 'q7_d',
          text: '최신 게임 트렌드와 잘 만든 게임성.',
          emoji: '✨',
          scores: { 'new-game-explorer': 3, 'strategic-brain-player': 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '새로운 시즌 업데이트가 있다면, 당신의 반응은?',
      options: [
        {
          id: 'q8_a',
          text: '패치 노트 분석! 변경된 메타와 전략을 빠르게 파악한다.',
          emoji: '📝',
          scores: { 'strategic-brain-player': 3, 'competitive-dominator': 2 },
        },
        {
          id: 'q8_b',
          text: '새로운 콘텐츠를 즐기며, 친구들에게 업데이트 소식을 공유한다.',
          emoji: '🗣️',
          scores: { 'social-community-player': 3, 'casual-light-enjoyer': 1 },
        },
        {
          id: 'q8_c',
          text: '새로운 수집품이나 업적, 도전 과제가 생겼는지 확인한다.',
          emoji: '🏅',
          scores: { 'collection-completionist': 3, 'new-game-explorer': 2 },
        },
        {
          id: 'q8_d',
          text: '일단 플레이해보고, 바뀐 점들을 직접 체감한다.',
          emoji: '🧪',
          scores: { 'skill-master-aspirant': 2, 'story-immersive-explorer': 1 },
        },
      ],
    },
    {
      id: 'q9',
      question: '게임을 쉬는 날, 게임 외에 주로 하는 활동은?',
      options: [
        {
          id: 'q9_a',
          text: '게임을 잘하기 위한 다른 활동(운동, 학습 등).',
          emoji: '💪',
          scores: { 'skill-master-aspirant': 3, 'competitive-dominator': 1 },
        },
        {
          id: 'q9_b',
          text: '푹 쉬면서 다른 취미를 즐기거나 새로운 콘텐츠를 찾아본다.',
          emoji: '🧘',
          scores: { 'casual-light-enjoyer': 3, 'new-game-explorer': 2 },
        },
        {
          id: 'q9_c',
          text: '게임 관련 커뮤니티나 스트리머 방송을 시청한다.',
          emoji: '📺',
          scores: { 'social-community-player': 3, 'story-immersive-explorer': 1 },
        },
        {
          id: 'q9_d',
          text: '다음 게임이나 즐길 거리를 탐색하거나, 게임 외의 자기계발을 한다.',
          emoji: '💡',
          scores: { 'new-game-explorer': 3, 'strategic-brain-player': 2 },
        },
      ],
    },
    {
      id: 'q10',
      question: '당신에게 게임이란?',
      options: [
        {
          id: 'q10_a',
          text: '승리했을 때의 성취감과 치열한 경쟁을 통한 성장.',
          emoji: '🥇',
          scores: { 'competitive-dominator': 3, 'skill-master-aspirant': 2 },
        },
        {
          id: 'q10_b',
          text: '또 다른 세계로 떠나는 몰입감 넘치는 여정.',
          emoji: '🌍',
          scores: { 'story-immersive-explorer': 3, 'new-game-explorer': 1 },
        },
        {
          id: 'q10_c',
          text: '친구들과 함께 소통하고 즐거움을 나누는 수단.',
          emoji: '🥳',
          scores: { 'social-community-player': 3, 'casual-light-enjoyer': 2 },
        },
        {
          id: 'q10_d',
          text: '컬렉션 완성, 업적 달성 등 끊임없이 도전하고 목표를 이루는 것.',
          emoji: '🎯',
          scores: { 'collection-completionist': 3, 'strategic-brain-player': 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'competitive-dominator',
      title: '⚔️ 경쟁심 폭발 승부사형',
      description:
        '당신은 게임의 승패에 진심인 타고난 승부사입니다. 경쟁을 통해 성장하고, 승리에서 최고의 쾌감을 얻는 유형입니다.',
      detailedDescription:
        '단순히 게임을 즐기는 것을 넘어, 승리하는 것에 큰 의미를 둡니다. 랭크 게임, PVP 콘텐츠를 선호하며, 끊임없이 실력을 갈고닦아 최고가 되기를 목표로 합니다. 패배는 다음 승리를 위한 발판이라 생각하며, 전략 분석과 피드백에 능합니다. 팀원의 실력도 중요하게 생각하여 가끔은 진지해질 수 있습니다.',
      emoji: '⚔️',
      color: '#FF4500', // OrangeRed
      traits: ['승부욕', '경쟁심', '성취 지향', '전략적', '노력파', '리더십'],
      compatibility: {
        best: ['컨트롤 장인 지망생형', '전략적 두뇌파형'],
        good: [],
        avoid: ['가볍게 즐기는 캐주얼형', '작심삼일형'], // 'aspiring-procrastinator'는 이전 유형과 연관된 예시로 추가했습니다.
      },
      recommendations: {
        tips: [
          '승패에 너무 집착하기보다, 때로는 게임 자체의 재미를 느껴보세요.',
          '패배하더라도 팀원 탓을 하기보다, 자신의 플레이를 돌아보는 것이 중요해요.',
          '건강한 경쟁은 좋지만, 과도한 경쟁으로 스트레스받지 않도록 주의하세요.',
        ],
        hashtags: ['#겜창인생', '#랭겜', '#승리지상주의', '#불꽃승부'],
      },
    },
    {
      id: 'story-immersive-explorer',
      title: '🌌 스토리에 몰입하는 탐험가형',
      description:
        '당신은 게임을 하나의 예술 작품처럼 여기며, 탄탄한 스토리와 세계관에 깊이 몰입하는 탐험가입니다.',
      detailedDescription:
        '화려한 그래픽이나 복잡한 컨트롤보다는 게임이 선사하는 서사, 캐릭터 간의 관계, 그리고 감동적인 연출에 집중합니다. 오픈월드 게임에서 숨겨진 이야기를 찾아다니거나, NPC의 대화 하나하나에 의미를 부여하는 것을 좋아합니다. 게임 속 세상에 완전히 빠져들어 현실을 잠시 잊는 것을 즐깁니다.',
      emoji: '🌌',
      color: '#8A2BE2', // Blue Violet
      traits: ['몰입감', '감성적', '상상력 풍부', '세계관 중시', '탐험적', '서사 애호가'],
      compatibility: {
        best: ['신작 탐험가형', '가볍게 즐기는 캐주얼형'],
        good: [],
        avoid: ['경쟁심 폭발 승부사형', '전략적 두뇌파형'],
      },
      recommendations: {
        tips: [
          '때로는 게임 내 커뮤니티에서 다른 유저들과 스토리 해석을 공유하며 더욱 깊이 몰입해 보세요.',
          '스토리 기반의 인디 게임도 당신의 취향을 저격할 수 있어요.',
          '게임의 엔딩 후에도 관련 팬픽이나 아트워크를 찾아보는 것도 즐거움을 더할 거예요.',
        ],
        hashtags: ['#스토리덕후', '#겜생드라마', '#세계관장인', '#몰입감최고'],
      },
    },
    {
      id: 'social-community-player',
      title: '🥳 함께 즐기는 소통형',
      description:
        '당신은 게임을 친구, 길드원 등 사람들과 소통하고 관계를 형성하는 수단으로 여기는 진정한 소통형 플레이어입니다.',
      detailedDescription:
        '혼자 하는 게임보다는 멀티플레이나 협동 콘텐츠를 선호하며, 보이스챗이나 게임 내 채팅으로 끊임없이 다른 유저들과 대화하는 것을 즐깁니다. 게임에서 만난 인연을 소중히 여기고, 함께 웃고 떠들며 즐거운 시간을 보내는 것이 게임의 가장 큰 목적입니다. 친목 위주의 길드나 커뮤니티에서 핵심 멤버일 가능성이 높습니다.',
      emoji: '🥳',
      color: '#FF69B4', // Hot Pink
      traits: ['사교적', '협동심', '관계 지향', '소통 중시', '긍정적', '친목 도모'],
      compatibility: {
        best: ['가볍게 즐기는 캐주얼형', '밸런스 잡힌 갓생형'], // 'balanced-lifestyle-godsaeng'는 이전 유형과 연관된 예시로 추가했습니다.
        good: [],
        avoid: ['경쟁심 폭발 승부사형', '컨트롤 장인 지망생형'],
      },
      recommendations: {
        tips: [
          '다양한 사람들과의 소통은 좋지만, 때로는 혼자만의 게임 시간을 통해 집중력을 높여보는 것도 좋아요.',
          '온라인 관계만큼 오프라인 관계도 소중히 생각하세요.',
          '새로운 사람들에게 먼저 다가가 환영하는 분위기를 만들어 보세요.',
        ],
        hashtags: ['#같이겜하자', '#겜친구환영', '#수다겜', '#소통의장이'],
      },
    },
    {
      id: 'casual-light-enjoyer',
      title: '😌 가볍게 즐기는 캐주얼형',
      description:
        '당신은 게임을 스트레스 해소와 가벼운 즐거움을 위한 수단으로 여기는 캐주얼한 플레이어입니다.',
      detailedDescription:
        '복잡한 컨트롤이나 깊은 전략보다는 쉽고 직관적인 게임, 혹은 짧은 시간 동안 가볍게 즐길 수 있는 게임을 선호합니다. 순위 경쟁이나 과금보다는 부담 없이 플레이하며 얻는 소소한 즐거움에 만족합니다. 게임이 일상이 되는 것을 경계하며, 지루해지면 미련 없이 다른 게임을 찾습니다.',
      emoji: '😌',
      color: '#ADD8E6', // Light Blue
      traits: ['편안함', '즐거움', '스트레스 해소', '가벼움', '유연함', '부담 없음'],
      compatibility: {
        best: ['함께 즐기는 소통형', '스토리에 몰입하는 탐험가형'],
        good: [],
        avoid: ['경쟁심 폭발 승부사형', '수집 강박 완벽주의형'],
      },
      recommendations: {
        tips: [
          '새로운 장르의 게임에도 가볍게 도전해 보면 예상치 못한 재미를 발견할 수 있어요.',
          '친구들과 함께 하는 캐주얼 게임은 즐거움을 더욱 극대화할 수 있어요.',
          '게임 외 다른 취미도 찾아 균형 잡힌 여가 생활을 즐겨보세요.',
        ],
        hashtags: ['#겜쉬고싶다', '#가볍게한판', '#스트레스해소용', '#즐겜유저'],
      },
    },
    {
      id: 'strategic-brain-player',
      title: '🧠 전략적 두뇌파형',
      description:
        "당신은 게임의 숨겨진 메커니즘을 파악하고, 최적의 전략을 세워 승리를 이끄는 '뇌지컬' 플레이어입니다.",
      detailedDescription:
        '단순한 컨트롤보다는 게임의 시스템을 이해하고, 효율적인 자원 관리, 최적의 빌드, 예측 불가능한 변수까지 고려하여 완벽한 전략을 짜는 것을 즐깁니다. 공략집을 스스로 만들거나, 심화 분석 영상을 찾아보는 것에 능숙합니다. 게임의 룰을 파고들어 허점을 찾아내는 데 희열을 느낍니다.',
      emoji: '🧠',
      color: '#2F4F4F', // Dark Slate Gray
      traits: ['분석적', '논리적', '전략적', '효율성 추구', '문제 해결', '깊이 있는 사고'],
      compatibility: {
        best: ['경쟁심 폭발 승부사형', '수집 강박 완벽주의형'],
        good: [],
        avoid: ['가볍게 즐기는 캐주얼형', '스토리에 몰입하는 탐험가형'],
      },
      recommendations: {
        tips: [
          '때로는 틀을 벗어나 즉흥적인 플레이로 의외의 결과를 얻을 수도 있어요.',
          '당신의 전략적 사고를 게임 외 현실 문제 해결에도 적용해 보세요.',
          '혼자만의 전략도 좋지만, 다른 전략가들과 의견을 공유하며 시야를 넓혀보세요.',
        ],
        hashtags: ['#뇌지컬', '#전략가', '#메타분석', '#게임공략'],
      },
    },
    {
      id: 'collection-completionist',
      title: '✨ 수집 강박 완벽주의형',
      description:
        '당신은 게임 내 모든 아이템을 모으고, 모든 업적을 달성하며, 게임을 100% 완벽하게 클리어해야 직성이 풀리는 완벽주의자입니다.',
      detailedDescription:
        '숨겨진 요소, 모든 엔딩, DLC까지 완벽하게 파고드는 것을 즐깁니다. 남들이 놓치는 작은 디테일도 놓치지 않고 찾아내며, 달성률 100%를 보지 못하면 불안감을 느낍니다. 꾸준함과 끈기가 강하며, 반복적인 노가다도 목표 달성을 위해서라면 기꺼이 감수합니다.',
      emoji: '✨',
      color: '#B0C4DE', // Light Steel Blue
      traits: ['완벽주의', '끈기', '수집욕', '집념', '세부적', '달성 지향'],
      compatibility: {
        best: ['전략적 두뇌파형', '스토리에 몰입하는 탐험가형'],
        good: [],
        avoid: ['가볍게 즐기는 캐주얼형', '자유로운 방랑자형'], // 'spontaneous-wanderer'는 이전 유형과 연관된 예시로 추가했습니다.
      },
      recommendations: {
        tips: [
          '때로는 모든 것을 완벽하게 해내지 않아도 괜찮다는 것을 스스로에게 허락해 주세요.',
          '컬렉션 외에 다른 게임의 재미 요소에도 눈을 돌려보세요.',
          '당신의 끈기와 꼼꼼함은 게임 외 다른 분야에서도 큰 강점이 될 수 있습니다.',
        ],
        hashtags: ['#컬렉션완성', '#도감채우기', '#100퍼달성', '#미친수집가'],
      },
    },
    {
      id: 'skill-master-aspirant',
      title: '🕹️ 컨트롤 장인 지망생형',
      description:
        '당신은 타고난 재능과 끊임없는 연습으로 게임 컨트롤 실력을 극한으로 끌어올리려는 컨트롤 장인 지망생입니다.',
      detailedDescription:
        "피지컬과 에임, 컨트롤의 정확성을 중요하게 생각하며, 어려운 콤보나 고난이도 기술을 완벽하게 마스터하는 것에 큰 즐거움을 느낍니다. '손'이 중요한 게임을 선호하며, 남들보다 뛰어난 컨트롤로 상대를 압도하는 것을 꿈꿉니다. 좌절하더라도 끊임없이 연습하며 자신의 한계를 뛰어넘으려 합니다.",
      emoji: '🕹️',
      color: '#8B0000', // Dark Red
      traits: ['연습 벌레', '피지컬 중시', '끈기', '도전 정신', '성장 지향', '손맛'],
      compatibility: {
        best: ['경쟁심 폭발 승부사형', '신작 탐험가형'],
        good: [],
        avoid: ['가볍게 즐기는 캐주얼형', '함께 즐기는 소통형'],
      },
      recommendations: {
        tips: [
          '컨트롤 연습도 좋지만, 게임의 다른 즐거움(스토리, 커뮤니티 등)도 함께 즐겨보세요.',
          '무리한 연습은 부상으로 이어질 수 있으니, 적절한 휴식을 취하세요.',
          '당신의 노력과 열정은 분명 빛을 발할 거예요!',
        ],
        hashtags: ['#컨트롤장인', '#피지컬', '#연습은배신하지않는다', '#손은눈보다빠르다'],
      },
    },
    {
      id: 'new-game-explorer',
      title: '✨ 신작 탐험가형',
      description:
        '당신은 새로운 게임이 출시되면 누구보다 먼저 플레이하고 경험하는 것을 즐기는 트렌디한 신작 탐험가입니다.',
      detailedDescription:
        '다양한 게임 장르에 대한 호기심이 많고, 늘 다음 게임을 찾아 헤매는 얼리어답터입니다. 유명한 대작부터 숨겨진 인디 게임까지, 새로운 게임 플레이 경험 자체를 중요하게 생각합니다. 게임 관련 소식을 빠르게 접하고, 트렌드를 선도하는 것을 좋아합니다.',
      emoji: '✨',
      color: '#8B008B', // Dark Magenta
      traits: ['얼리어답터', '호기심', '다양성 추구', '트렌디', '탐험적', '개방적'],
      compatibility: {
        best: ['스토리에 몰입하는 탐험가형', '가볍게 즐기는 캐주얼형'],
        good: ['수집 강박 완벽주의형'],
        avoid: ['경쟁심 폭발 승부사형', '컨트롤 장인 지망생형'], // 한 게임만 파는 타입과는 다름
      },
      recommendations: {
        tips: [
          '너무 많은 게임을 동시에 플레이하기보다, 한 게임에 몰입하는 시간도 가져보세요.',
          '발견한 좋은 게임을 주변 사람들에게 적극적으로 추천해 주세요.',
          '신작 탐험 외에 고전 명작을 플레이하며 게임의 역사를 느껴보는 것도 좋아요.',
        ],
        hashtags: ['#신작탐험', '#얼리어답터', '#겜잘알', '#트렌드세터'],
      },
    },
  ],
};
