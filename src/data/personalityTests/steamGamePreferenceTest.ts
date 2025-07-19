import type { PersonalityTestData } from '@/types/personalityTest';

export const steamGamePreferenceTestData: PersonalityTestData = {
  id: 'steam-game-preference-test',
  title: '🎮 나의 스팀 게임 취향 테스트 (맞춤형 추천)',
  description:
    '수많은 스팀 게임 속에서 당신의 취향을 저격할 인생 게임은 무엇일까요? 이 테스트로 당신의 숨겨진 게임 성향을 파악하고, 취향 맞춤 스팀 게임을 추천받으세요!',
  category: 'mz-lifestyle',
  resultTypes: [
    'epic-adventure-seeker', // 장대한 모험의 서사시형
    'strategic-mind-master', // 치밀한 전략의 대가형
    'relaxing-healing-farmer', // 힐링 가득 편안한 농부형
    'fast-paced-action-master', // 피지컬 폭발 액션 마스터형
    'social-multiplayer-pro', // 함께하는 멀티플레이 전문가형
    'indie-gem-explorer', // 숨겨진 인디 명작 탐험가형
    'deep-lore-investigator', // 심층 세계관 탐구자형
    'creative-builder-dreamer', // 자유로운 창조자형
  ],
  questions: [
    {
      id: 'q1',
      question: '스팀 게임을 처음 켰을 때, 가장 먼저 당신의 눈을 사로잡는 것은?',
      options: [
        {
          id: 'q1_a',
          text: '웅장한 오프닝 영상과 함께 펼쳐지는 거대한 세계관.',
          emoji: '🌌',
          scores: { 'epic-adventure-seeker': 3, 'deep-lore-investigator': 2 },
        },
        {
          id: 'q1_b',
          text: '복잡해 보이는 UI 속에서 나만의 효율적인 플레이를 상상하게 만드는 시스템.',
          emoji: '⚙️',
          scores: { 'strategic-mind-master': 3, 'creative-builder-dreamer': 1 },
        },
        {
          id: 'q1_c',
          text: '아기자기하고 편안한 분위기의 그래픽, 귀여운 캐릭터들.',
          emoji: '🏡',
          scores: { 'relaxing-healing-farmer': 3, 'indie-gem-explorer': 1 },
        },
        {
          id: 'q1_d',
          text: '화려한 액션 이펙트와 함께 터져 나오는 타격감 넘치는 사운드.',
          emoji: '💥',
          scores: { 'fast-paced-action-master': 3, 'social-multiplayer-pro': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '게임을 플레이하며 가장 큰 즐거움을 느끼는 순간은?',
      options: [
        {
          id: 'q2_a',
          text: '까다로운 보스를 전략적으로 공략하여 마침내 쓰러뜨렸을 때.',
          emoji: '🎯',
          scores: { 'strategic-mind-master': 3, 'fast-paced-action-master': 2 },
        },
        {
          id: 'q2_b',
          text: '넓은 맵을 탐험하며 숨겨진 지역이나 이스터 에그를 발견했을 때.',
          emoji: '🗺️',
          scores: { 'epic-adventure-seeker': 3, 'deep-lore-investigator': 2 },
        },
        {
          id: 'q2_c',
          text: '친구들과 협력하여 어려운 미션을 성공하거나 적을 물리쳤을 때.',
          emoji: '🤝',
          scores: { 'social-multiplayer-pro': 3, 'fast-paced-action-master': 1 },
        },
        {
          id: 'q2_d',
          text: '내 손으로 직접 건물을 짓거나 아이템을 제작하며 나만의 공간을 꾸몄을 때.',
          emoji: '🔨',
          scores: { 'creative-builder-dreamer': 3, 'relaxing-healing-farmer': 2 },
        },
      ],
    },
    {
      id: 'q3',
      question: '새로운 게임을 시작할 때, 가장 중요하게 생각하는 요소는?',
      options: [
        {
          id: 'q3_a',
          text: '몰입감 넘치는 스토리와 매력적인 캐릭터들.',
          emoji: '📖',
          scores: { 'epic-adventure-seeker': 2, 'deep-lore-investigator': 3 },
        },
        {
          id: 'q3_b',
          text: '친구들과 함께 할 수 있는 멀티플레이 요소와 커뮤니티 활성화 여부.',
          emoji: '🗣️',
          scores: { 'social-multiplayer-pro': 3, 'fast-paced-action-master': 1 },
        },
        {
          id: 'q3_c',
          text: '독특한 아이디어와 개성을 가진 인디 게임인가?',
          emoji: '✨',
          scores: { 'indie-gem-explorer': 3, 'creative-builder-dreamer': 1 },
        },
        {
          id: 'q3_d',
          text: '복잡한 시스템을 파고들어 나만의 최적 빌드를 짤 수 있는가?',
          emoji: '🧠',
          scores: { 'strategic-mind-master': 3, 'creative-builder-dreamer': 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '게임을 플레이하다 막히는 부분이 생겼다면?',
      options: [
        {
          id: 'q4_a',
          text: '혼자서 며칠 밤낮을 고민하며 나만의 해결책을 찾아낸다.',
          emoji: '😤',
          scores: { 'strategic-mind-master': 2, 'deep-lore-investigator': 1 },
        },
        {
          id: 'q4_b',
          text: '공략집, 유튜브 영상을 찾아보며 가장 효율적인 방법을 따른다.',
          emoji: '🔍',
          scores: { 'fast-paced-action-master': 2, 'strategic-mind-master': 1 },
        },
        {
          id: 'q4_c',
          text: '친구들에게 SOS를 보내거나, 게임 커뮤니티에 도움을 요청한다.',
          emoji: '🆘',
          scores: { 'social-multiplayer-pro': 3, 'relaxing-healing-farmer': 1 },
        },
        {
          id: 'q4_d',
          text: '잠시 게임을 끄고 쉬거나, 다른 편안한 게임을 플레이한다.',
          emoji: '🛀',
          scores: { 'relaxing-healing-farmer': 3, 'indie-gem-explorer': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '가장 좋아하는 게임 속 활동은?',
      options: [
        {
          id: 'q5_a',
          text: '적들과 싸우고, 보스를 물리치며 짜릿한 전투를 경험하는 것.',
          emoji: '💥',
          scores: { 'fast-paced-action-master': 3, 'epic-adventure-seeker': 2 },
        },
        {
          id: 'q5_b',
          text: '나만의 농장을 가꾸고, 마을 주민들과 교류하며 소소한 행복을 느끼는 것.',
          emoji: '🥕',
          scores: { 'relaxing-healing-farmer': 3, 'creative-builder-dreamer': 2 },
        },
        {
          id: 'q5_c',
          text: '게임 속에 숨겨진 모든 기록, 문서, 배경 지식을 찾아 읽는 것.',
          emoji: '📜',
          scores: { 'deep-lore-investigator': 3, 'epic-adventure-seeker': 1 },
        },
        {
          id: 'q5_d',
          text: '아무것도 없는 백지상태에서 나만의 건물을 짓고 세상을 만드는 것.',
          emoji: '🏗️',
          scores: { 'creative-builder-dreamer': 3, 'indie-gem-explorer': 2 },
        },
      ],
    },
    {
      id: 'q6',
      question: '스팀 세일 기간, 당신의 장바구니에 담기는 게임의 특징은?',
      options: [
        {
          id: 'q6_a',
          text: '오랫동안 눈여겨봤던 AAA급 대작 게임.',
          emoji: '💎',
          scores: { 'epic-adventure-seeker': 2, 'fast-paced-action-master': 1 },
        },
        {
          id: 'q6_b',
          text: '새롭고 실험적인, 다른 곳에서는 볼 수 없는 독특한 인디 게임.',
          emoji: '🕹️',
          scores: { 'indie-gem-explorer': 3, 'creative-builder-dreamer': 2 },
        },
        {
          id: 'q6_c',
          text: '친구들이 많이 하는 게임, 또는 같이 할 만한 멀티플레이 게임.',
          emoji: '👥',
          scores: { 'social-multiplayer-pro': 3, 'relaxing-healing-farmer': 1 },
        },
        {
          id: 'q6_d',
          text: '공략할 요소가 많거나, 복잡한 시스템으로 파고들 가치가 있는 게임.',
          emoji: '🔢',
          scores: { 'strategic-mind-master': 3, 'deep-lore-investigator': 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: '게임 속 세계가 멸망 직전이라면, 당신은 무엇을 할 것인가요?',
      options: [
        {
          id: 'q7_a',
          text: '마지막까지 싸우며 전장을 지배한다.',
          emoji: '🛡️',
          scores: { 'fast-paced-action-master': 3, 'strategic-mind-master': 1 },
        },
        {
          id: 'q7_b',
          text: '아직 밝혀지지 않은 비밀이나 숨겨진 스토리를 끝까지 파헤친다.',
          emoji: '🔍',
          scores: { 'deep-lore-investigator': 3, 'epic-adventure-seeker': 2 },
        },
        {
          id: 'q7_c',
          text: '친구들과 함께 마지막 순간까지 즐거운 추억을 만든다.',
          emoji: '🥂',
          scores: { 'social-multiplayer-pro': 3, 'relaxing-healing-farmer': 1 },
        },
        {
          id: 'q7_d',
          text: '새로운 세상을 창조하거나, 멸망을 막을 방법을 강구한다.',
          emoji: '🔄',
          scores: { 'creative-builder-dreamer': 3, 'strategic-mind-master': 2 },
        },
      ],
    },
    {
      id: 'q8',
      question: '게임 스트리밍을 본다면, 어떤 종류의 방송을 선호하나요?',
      options: [
        {
          id: 'q8_a',
          text: '화려한 컨트롤과 피지컬로 압도적인 플레이를 보여주는 방송.',
          emoji: '🔥',
          scores: { 'fast-paced-action-master': 3, 'strategic-mind-master': 1 },
        },
        {
          id: 'q8_b',
          text: '새로운 인디 게임을 소개하거나, 독특한 게임을 플레이하는 방송.',
          emoji: '🕹️',
          scores: { 'indie-gem-explorer': 3, 'relaxing-healing-farmer': 1 },
        },
        {
          id: 'q8_c',
          text: '스토리 중심의 대작 게임을 감상하며 함께 울고 웃는 방송.',
          emoji: '😭',
          scores: { 'epic-adventure-seeker': 2, 'deep-lore-investigator': 3 },
        },
        {
          id: 'q8_d',
          text: '시청자들과 소통하며 함께 즐기는 유쾌한 멀티플레이 방송.',
          emoji: '😂',
          scores: { 'social-multiplayer-pro': 3, 'creative-builder-dreamer': 2 },
        },
      ],
    },
    {
      id: 'q9',
      question: '게임 속에서 무엇이든 할 수 있다면, 당신은 무엇을 가장 먼저 할 것인가요?',
      options: [
        {
          id: 'q9_a',
          text: '나만의 왕국이나 거대한 도시를 건설하고 통치한다.',
          emoji: '🏰',
          scores: { 'creative-builder-dreamer': 3, 'strategic-mind-master': 2 },
        },
        {
          id: 'q9_b',
          text: '숨겨진 유적을 탐사하고, 전설적인 보물을 찾아 떠난다.',
          emoji: '🏺',
          scores: { 'epic-adventure-seeker': 3, 'deep-lore-investigator': 2 },
        },
        {
          id: 'q9_c',
          text: '최강의 파티를 모아 던전을 정복하거나, 강력한 적을 쓰러뜨린다.',
          emoji: '🧙',
          scores: { 'fast-paced-action-master': 3, 'social-multiplayer-pro': 1 },
        },
        {
          id: 'q9_d',
          text: '아무것도 하지 않고, 평화로운 마을에서 느긋하게 농사를 짓거나 낚시를 즐긴다.',
          emoji: '🎣',
          scores: { 'relaxing-healing-farmer': 3, 'indie-gem-explorer': 2 },
        },
      ],
    },
    {
      id: 'q10',
      question: "가장 중요하게 생각하는 게임 플레이의 '질'은?",
      options: [
        {
          id: 'q10_a',
          text: '승리했을 때의 성취감과 전략이 통했을 때의 쾌감.',
          emoji: '🏆',
          scores: { 'strategic-mind-master': 3, 'fast-paced-action-master': 2 },
        },
        {
          id: 'q10_b',
          text: '새로운 세계를 경험하고 이야기를 따라가는 몰입감.',
          emoji: '✨',
          scores: { 'epic-adventure-seeker': 3, 'deep-lore-investigator': 3 },
        },
        {
          id: 'q10_c',
          text: '친구들과 함께 웃고 떠들며 보내는 즐거운 시간.',
          emoji: '🎉',
          scores: { 'social-multiplayer-pro': 3, 'relaxing-healing-farmer': 1 },
        },
        {
          id: 'q10_d',
          text: '나만의 것을 만들고 꾸미며 창의력을 발휘하는 만족감.',
          emoji: '🎨',
          scores: { 'creative-builder-dreamer': 3, 'indie-gem-explorer': 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'epic-adventure-seeker',
      title: '🗡️ 장대한 모험의 서사시형',
      description:
        '당신은 거대한 세계를 탐험하고, 장대한 서사 속에서 영웅이 되는 것을 꿈꾸는 모험가입니다.',
      detailedDescription:
        '탄탄한 스토리와 몰입감 있는 세계관을 가진 RPG나 액션 어드벤처 게임을 선호합니다. 미지의 던전을 탐험하고, 강력한 적을 쓰러뜨리며, 게임 속 인물들과 유대감을 형성하는 것에 큰 즐거움을 느낍니다. 오랜 시간 플레이해도 지루할 틈 없는 스케일 큰 게임을 좋아합니다.',
      emoji: '🗡️',
      color: '#A52A2A', // Brown
      traits: ['모험심', '서사 추구', '몰입형', '탐험가', '영웅심', '인내심'],
      compatibility: {
        best: ['deep-lore-investigator', 'fast-paced-action-master'],
        good: [],
        avoid: ['relaxing-healing-farmer', 'casual-light-enjoyer'],
      },
      recommendations: {
        games: [
          {
            name: '더 위쳐 3: 와일드 헌트 (The Witcher 3: Wild Hunt)',
            url: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/',
          },
          {
            name: '엘든 링 (ELDEN RING)',
            url: 'https://store.steampowered.com/app/1245620/ELDEN_RING/',
          },
          {
            name: '사이버펑크 2077 (Cyberpunk 2077)',
            url: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/',
          },
          {
            name: '호그와트 레거시 (Hogwarts Legacy)',
            url: 'https://store.steampowered.com/app/990080/Hogwarts_Legacy/',
          },
        ],
      },
    },
    {
      id: 'strategic-mind-master',
      title: '🧠 치밀한 전략의 대가형',
      description:
        '당신은 복잡한 시스템을 분석하고, 완벽한 전략을 세워 승리를 쟁취하는 지능적인 플레이어입니다.',
      detailedDescription:
        'RTS, 턴제 전략, 시뮬레이션 게임 등 깊은 사고와 계획이 필요한 장르를 선호합니다. 게임의 룰을 파고들어 나만의 최적화된 빌드를 찾아내거나, 적의 수를 예측하여 완벽한 승리를 거두는 것에 희열을 느낍니다. 두뇌 싸움을 즐기며, 논리적인 문제 해결 능력이 뛰어납니다.',
      emoji: '🧠',
      color: '#4682B4', // Steel Blue
      traits: ['전략적', '논리적', '분석적', '효율성', '계획적', '지적 호기심'],
      compatibility: {
        best: ['fast-paced-action-master', 'creative-builder-dreamer'],
        good: [],
        avoid: ['relaxing-healing-farmer', 'social-multiplayer-pro'],
      },
      recommendations: {
        games: [
          {
            name: '문명 VI (Civilization VI)',
            url: 'https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/',
          },
          {
            name: '스타크래프트 리마스터 (StarCraft: Remastered)',
            url: 'https://starcraft.com/ko-kr/store',
          }, // 스팀에 없으므로 외부링크
          { name: '림월드 (RimWorld)', url: 'https://store.steampowered.com/app/294100/RimWorld/' },
          { name: 'XCOM 2', url: 'https://store.steampowered.com/app/268500/XCOM_2/' },
        ],
      },
    },
    {
      id: 'relaxing-healing-farmer',
      title: '🥕 힐링 가득 편안한 농부형',
      description:
        '당신은 경쟁과 스트레스 없는 편안한 게임 속에서 휴식과 소소한 행복을 찾는 힐링 플레이어입니다.',
      detailedDescription:
        '농장 경영, 육성 시뮬레이션, 힐링 어드벤처 등 잔잔하고 여유로운 장르를 선호합니다. 자신만의 공간을 가꾸고, 캐릭터나 동물을 키우며, 평화로운 일상을 보내는 것에 만족감을 느낍니다. 게임을 통해 현실의 피로를 풀고 마음의 안정을 얻는 것을 중요하게 생각합니다.',
      emoji: '🥕',
      color: '#90EE90', // Light Green
      traits: ['힐링', '편안함', '여유로움', '평화로움', '스트레스 해소', '창의적 (꾸미기)'],
      compatibility: {
        best: ['creative-builder-dreamer', 'indie-gem-explorer'],
        good: [],
        avoid: ['fast-paced-action-master', 'strategic-mind-master'],
      },
      recommendations: {
        games: [
          {
            name: '스타듀 밸리 (Stardew Valley)',
            url: 'https://store.steampowered.com/app/413150/Stardew_Valley/',
          },
          { name: '발헤임 (Valheim)', url: 'https://store.steampowered.com/app/892970/Valheim/' },
          {
            name: '팩토리오 (Factorio)',
            url: 'https://store.steampowered.com/app/427520/Factorio/',
          }, // 건설/생산이지만 힐링요소도 있음
          {
            name: '도시 건설 시뮬레이션 (Cities: Skylines)',
            url: 'https://store.steampowered.com/app/255710/Cities_Skylines/',
          },
        ],
      },
    },
    {
      id: 'fast-paced-action-master',
      title: '💥 피지컬 폭발 액션 마스터형',
      description:
        '당신은 짜릿한 전투와 빠른 반응 속도로 적을 제압하며, 극한의 컨트롤에서 희열을 느끼는 액션 마스터입니다.',
      detailedDescription:
        'FPS, 핵앤슬래시, 대전 격투 등 빠른 판단과 정교한 컨트롤이 요구되는 장르를 선호합니다. 화려한 스킬 연계, 압도적인 타격감, 그리고 손맛이 좋은 게임에서 최고의 재미를 느낍니다. 승패보다는 개인의 피지컬과 숙련도를 증명하는 것에 더 큰 가치를 둡니다.',
      emoji: '💥',
      color: '#FF6347', // Tomato
      traits: ['피지컬', '반응 속도', '정교함', '도전적', '성취욕', '손맛'],
      compatibility: {
        best: ['strategic-mind-master', 'social-multiplayer-pro'],
        good: [],
        avoid: ['relaxing-healing-farmer', 'deep-lore-investigator'],
      },
      recommendations: {
        games: [
          {
            name: '둠 이터널 (DOOM Eternal)',
            url: 'https://store.steampowered.com/app/782330/DOOM_Eternal/',
          },
          {
            name: '몬스터 헌터: 월드 (Monster Hunter: World)',
            url: 'https://store.steampowered.com/app/582010/Monster_Hunter_World/',
          },
          { name: '발로란트 (Valorant)', url: 'https://playvalorant.com/ko-kr/' }, // 스팀에 없으므로 외부링크
          { name: '하데스 (Hades)', url: 'https://store.steampowered.com/app/1145360/Hades/' },
        ],
      },
    },
    {
      id: 'social-multiplayer-pro',
      title: '🤝 함께하는 멀티플레이 전문가형',
      description:
        '당신은 혼자보다 여럿이 함께할 때 게임의 진정한 재미를 느끼는 사교적인 멀티플레이어입니다.',
      detailedDescription:
        '친구들과 보이스챗으로 소통하며 협동 미션을 수행하거나, 팀을 이루어 경쟁하는 게임을 선호합니다. 게임 자체의 승패보다 함께 웃고 떠들며 즐거운 추억을 만드는 것에 더 큰 가치를 둡니다. 새로운 사람들과의 만남이나 길드 활동도 즐겨합니다.',
      emoji: '🤝',
      color: '#FFD700', // Gold
      traits: ['사교적', '협동심', '소통 중시', '관계 지향', '유쾌함', '팀워크'],
      compatibility: {
        best: ['fast-paced-action-master', 'creative-builder-dreamer'],
        good: [],
        avoid: ['deep-lore-investigator', 'single-player-enthusiast'], // 단독 플레이 선호 유형과 반대
      },
      recommendations: {
        games: [
          {
            name: '레프트 4 데드 2 (Left 4 Dead 2)',
            url: 'https://store.steampowered.com/app/550/Left_4_Dead_2/',
          },
          {
            name: '잇 테이크 투 (It Takes Two)',
            url: 'https://store.steampowered.com/app/1426210/It_Takes_Two/',
          },
          {
            name: '데드 바이 데이라이트 (Dead by Daylight)',
            url: 'https://store.steampowered.com/app/381210/Dead_by_Daylight/',
          },
          {
            name: '어몽 어스 (Among Us)',
            url: 'https://store.steampowered.com/app/945360/Among_Us/',
          },
        ],
      },
    },
    {
      id: 'indie-gem-explorer',
      title: '🕹️ 숨겨진 인디 명작 탐험가형',
      description:
        '당신은 상업성보다는 게임의 독특한 아이디어와 실험 정신을 높이 평가하는 인디 게임 애호가입니다.',
      detailedDescription:
        '화려한 그래픽보다 개발자의 철학이나 신선한 플레이 방식을 가진 게임에 더 큰 매력을 느낍니다. 숨겨진 명작을 발굴하는 것에 큰 보람을 느끼며, 남들이 잘 모르는 게임을 추천하는 것을 즐깁니다. 새로운 경험과 독창적인 스토리를 추구합니다.',
      emoji: '🕹️',
      color: '#8B008B', // Dark Magenta
      traits: ['독창성', '호기심', '실험 정신', '탐험적', '개방적', '다양성 추구'],
      compatibility: {
        best: ['creative-builder-dreamer', 'relaxing-healing-farmer'],
        good: [],
        avoid: ['fast-paced-action-master', 'competitive-dominator'],
      },
      recommendations: {
        games: [
          { name: '컵헤드 (Cuphead)', url: 'https://store.steampowered.com/app/268910/Cuphead/' },
          {
            name: '할로우 나이트 (Hollow Knight)',
            url: 'https://store.steampowered.com/app/367520/Hollow_Knight/',
          },
          {
            name: '이스케이프 프롬 타르코프 (Escape From Tarkov)',
            url: 'https://www.escapefromtarkov.com/',
          }, // 스팀에 없으므로 외부링크
          {
            name: '발리언트 하츠: 더 그레이트 워 (Valiant Hearts: The Great War)',
            url: 'https://store.steampowered.com/app/260230/Valiant_Hearts_The_Great_War/',
          },
        ],
      },
    },
    {
      id: 'deep-lore-investigator',
      title: '📜 심층 세계관 탐구자형',
      description:
        '당신은 게임의 숨겨진 설정, 백스토리, 캐릭터의 과거까지 파고드는 것을 즐기는 세계관 연구자입니다.',
      detailedDescription:
        "단순한 플레이를 넘어 게임 속에 숨겨진 모든 텍스트, 아이템 설명, NPC 대화 등을 통해 방대한 세계관을 이해하려 노력합니다. 팬 위키를 탐독하거나, 유튜브에서 관련 분석 영상을 찾아보며 게임의 깊이에 매료됩니다. '떡밥'을 회수하고 미스터리를 푸는 것에 큰 재미를 느낍니다.",
      emoji: '📜',
      color: '#556B2F', // Dark Olive Green
      traits: ['지적 호기심', '탐구적', '분석적', '세부적', '끈기', '세계관 중시'],
      compatibility: {
        best: ['epic-adventure-seeker', 'strategic-mind-master'],
        good: [],
        avoid: ['fast-paced-action-master', 'casual-light-enjoyer'],
      },
      recommendations: {
        games: [
          {
            name: '다크 소울 3 (Dark Souls III)',
            url: 'https://store.steampowered.com/app/374320/DARK_SOULS_III/',
          },
          {
            name: '디스코 엘리시움 (Disco Elysium - The Final Cut)',
            url: 'https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/',
          },
          {
            name: '더 엘더 스크롤 5: 스카이림 (The Elder Scrolls V: Skyrim Special Edition)',
            url: 'https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/',
          },
          {
            name: '젤다의 전설: 야생의 숨결 (The Legend of Zelda: Breath of the Wild)',
            url: 'https://www.nintendo.co.kr/software/switch/zelda_botw/',
          }, // 스팀에 없으므로 외부링크
        ],
      },
    },
    {
      id: 'creative-builder-dreamer',
      title: '🏗️ 자유로운 창조자형',
      description:
        '당신은 정해진 틀 없이 게임 속에서 자신만의 세상을 만들고, 창의력을 발휘하는 것을 즐기는 빌더입니다.',
      detailedDescription:
        '샌드박스, 건설, 시뮬레이션 등 자유로운 창작과 꾸미기가 가능한 장르를 선호합니다. 자신만의 독특한 아이디어를 게임 속에서 구현하며, 무언가를 만들어내는 과정에서 큰 만족감을 느낍니다. 때로는 게임의 목적보다는 창조 행위 자체에 몰입합니다.',
      emoji: '🏗️',
      color: '#DAA520', // Goldenrod
      traits: ['창의적', '자유로움', '설계', '구현력', '꿈', '꾸미기'],
      compatibility: {
        best: ['relaxing-healing-farmer', 'indie-gem-explorer'],
        good: ['strategic-mind-master'],
        avoid: ['fast-paced-action-master', 'competitive-dominator'],
      },
      recommendations: {
        games: [
          {
            name: '마인크래프트 (Minecraft)',
            url: 'https://www.minecraft.net/ko-kr/store/minecraft-java-bedrock-edition',
          }, // 스팀에 없으므로 외부링크
          {
            name: '테라리아 (Terraria)',
            url: 'https://store.steampowered.com/app/105600/Terraria/',
          },
          {
            name: '플래닛 코스터 (Planet Coaster)',
            url: 'https://store.steampowered.com/app/493340/Planet_Coaster/',
          },
          { name: '포트나이트 (Fortnite)', url: 'https://www.epicgames.com/fortnite/ko/download' }, // 스팀에 없으므로 외부링크
        ],
      },
    },
  ],
};
