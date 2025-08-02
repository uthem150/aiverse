interface TestMetaData {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
}

export const testMetaData: Record<string, TestMetaData> = {
  // AI 분석
  'face-age-test': {
    title: 'AI 얼굴 나이 테스트 - AIverse',
    description:
      'AI가 당신의 얼굴을 분석해서 나이를 맞춰보는 테스트! 정확도 95% 이상의 고급 AI 기술로 분석합니다.',
    keywords: 'AI 얼굴 나이, 얼굴 나이 테스트, AI 분석, 얼굴 인식, 나이 예측',
    ogTitle: '🤖 AI 얼굴 나이 테스트',
    ogDescription: 'AI가 당신의 실제 나이를 맞춰볼까요? 120만 명이 참여한 인기 테스트!',
  },
  'face-grade-test': {
    title: 'AI 외모 등급 테스트 - AIverse',
    description: 'AI가 분석하는 7단계 외모 등급! 객관적인 AI 분석으로 당신의 외모를 평가해보세요.',
    keywords: 'AI 외모 분석, 외모 등급, 얼굴 분석, AI 미모 테스트, 외모 평가',
    ogTitle: '✨ AI 외모 등급 테스트',
    ogDescription: 'AI가 객관적으로 분석하는 당신의 외모 등급은? 98만 명 참여!',
  },
  'eye-test': {
    title: 'AI 눈 관상 테스트 - AIverse',
    description:
      'AI가 당신의 눈을 분석하여 관상과 성격을 알려주는 테스트입니다. 인공지능으로 당신의 운명을 살짝 엿보세요.',
    keywords: 'AI 관상, 눈 관상, 관상 테스트, AI 얼굴 분석, 성격 테스트',
    ogTitle: '👁️ AI 눈 관상 테스트',
    ogDescription: 'AI가 분석하는 당신의 눈 관상과 성격! 75만 명이 참여한 신기한 테스트!',
  },
  'personal-color-test': {
    title: 'AI 퍼스널 컬러 테스트 - AIverse',
    description:
      'AI가 당신의 얼굴을 분석하여 가장 잘 어울리는 퍼스널 컬러를 찾아드립니다. 웜톤, 쿨톤, 뉴트럴톤까지 정확하게 진단해보세요.',
    keywords: '퍼스널 컬러, 퍼스널 컬러 테스트, AI 퍼스널 컬러, 웜톤, 쿨톤, AI 분석',
    ogTitle: '🎨 AI 퍼스널 컬러 테스트',
    ogDescription: '아직도 내 톤을 모른다면? AI가 5초 만에 찾아주는 인생 컬러! 89만 명 참여 완료!',
  },
  'hogwarts-test': {
    title: '호그와트 기숙사 테스트 - AIverse',
    description:
      'AI가 당신의 성향을 분석하여 가장 어울리는 호그와트 기숙사를 배정해드립니다. 그리핀도르, 슬리데린, 후플푸프, 래번클로 중 당신의 기숙사는?',
    keywords: '호그와트 기숙사 테스트, 해리포터 테스트, 기숙사 배정, MBTI 테스트, 성격 테스트',
    ogTitle: '🧙‍ 호그와트 기숙사 테스트',
    ogDescription: '당신을 위한 기숙사 배정! 92만 명이 참여한 바로 그 테스트!',
  },
  'flower-test': {
    title: '나와 닮은 꽃 찾기 테스트 - AIverse',
    description:
      'AI가 당신의 성격과 분위기를 분석하여 가장 닮은 꽃을 찾아드립니다. 당신의 꽃말도 함께 확인해보세요.',
    keywords: '꽃 테스트, 나와 닮은 꽃, 탄생화 테스트, 심리 테스트, 꽃말',
    ogTitle: '🌸 나와 닮은 꽃 찾기 테스트',
    ogDescription: '나는 어떤 꽃을 닮았을까? 63만 명이 찾아본 나의 꽃과 꽃말!',
  },

  // 텐서플로우
  'face-emotion-test': {
    title: 'AI 얼굴 감정 인식 테스트 - AIverse',
    description:
      'AI가 실시간으로 당신의 얼굴 표정을 분석하여 감정을 인식합니다! 기쁨, 화남, 슬픔, 놀람 등 다양한 감정을 AI가 정확하게 분석해드립니다.',
    keywords: 'AI 감정 인식, 얼굴 감정 분석, 실시간 감정 테스트, AI 얼굴 분석, 표정 인식',
    ogTitle: '🎭 AI 얼굴 감정 인식 테스트',
    ogDescription:
      'AI가 실시간으로 당신의 얼굴에서 감정을 읽습니다. 다양한 감정 상태를 지금 바로 체험해보세요!',
  },

  // 연애 & 성격
  'love-style-test': {
    title: '💕 내 연애 스타일 테스트 - AIverse',
    description:
      'MZ세대 연애 문화를 반영한 나만의 연애 스타일을 찾아보세요! 8가지 동물상으로 알아보는 연애 유형.',
    keywords: '연애 스타일, 연애 유형, 동물상, MZ세대 연애, 연애 테스트',
    ogTitle: '💕 내 연애 스타일 테스트',
    ogDescription: '강아지상? 고양이상? 나의 연애 스타일을 동물로 알아보세요!',
  },
  'ideal-type-test': {
    title: '🎨 취향으로 보는 이상형 테스트 - AIverse',
    description:
      '당신의 라이프스타일과 취향으로 완벽한 이상형을 찾아보세요! 8가지 유형의 이상형 분석.',
    keywords: '이상형 테스트, 취향 분석, 라이프스타일, 연애 궁합, 이상형 유형',
    ogTitle: '🎨 취향으로 보는 이상형 테스트',
    ogDescription: '당신의 취향이 말해주는 완벽한 이상형은? 지금 바로 확인해보세요!',
  },
  'mbti-compatibility-test': {
    title: '💖 MBTI 연애 궁합 테스트 - AIverse',
    description: '16가지 MBTI 유형별 최고의 연애 궁합을 찾아보세요! 과학적 근거 기반 궁합 분석.',
    keywords: 'MBTI 궁합, MBTI 연애, 성격 유형, 연애 궁합, MBTI 테스트',
    ogTitle: '💖 MBTI 연애 궁합 테스트',
    ogDescription: '당신의 MBTI와 완벽한 궁합인 사람은? 15만 명이 참여한 인기 테스트!',
  },
  'breakup-coping-test': {
    title: '나의 이별 대처법 테스트 - AIverse',
    description:
      '이별 후 당신은 어떤 모습인가요? 심리 분석을 통해 나의 이별 극복 유형과 건강한 이별 방법을 알아보세요.',
    keywords: '이별 대처법, 이별 극복, 연애 테스트, 심리 테스트, 회복탄력성',
    ogTitle: '💔 나의 이별 대처법 테스트',
    ogDescription: '이별의 아픔, 나는 어떻게 이겨낼까? 나의 이별 극복 유형을 알아보세요.',
  },
  'communication-style-test': {
    title: '나의 대화 스타일 테스트 - AIverse',
    description:
      '친구, 연인, 동료와의 관계를 결정하는 당신의 소통 방식은? 나의 대화 스타일을 분석하고 관계를 개선해보세요.',
    keywords: '대화 스타일, 소통 방식, 커뮤니케이션, 인간관계, 심리 테스트',
    ogTitle: '🗣️ 나의 대화 스타일 테스트',
    ogDescription: '혹시 나도 대화 빌런? 원활한 소통을 위한 나의 대화 스타일 분석!',
  },
  'conflict-coping-test': {
    title: '나의 갈등 대처 유형 테스트 - AIverse',
    description:
      '갈등 상황에서 당신은 어떻게 반응하나요? 회피형, 타협형, 경쟁형 등 나의 갈등 해결 유형을 알아보세요.',
    keywords: '갈등 대처, 갈등 해결, 성격 테스트, 인간관계, 심리 테스트',
    ogTitle: '🤝 나의 갈등 대처 유형 테스트',
    ogDescription: '갈등 앞에서 나는 어떤 모습일까? 나의 갈등 해결 유형을 알아보세요.',
  },
  'conflict-resolution-style-test': {
    title: '나의 연애 갈등 해결 스타일 테스트 - AIverse',
    description:
      '연인과의 싸움, 당신은 어떻게 풀어나가나요? 당신의 연애 갈등 해결 스타일을 분석하고 더 건강한 관계를 만들어보세요.',
    keywords: '연애 갈등, 연인 싸움, 갈등 해결, 연애 상담, 연애 테스트',
    ogTitle: '💑 나의 연애 갈등 해결 스타일 테스트',
    ogDescription: '연인과 싸운 뒤, 당신의 행동은? 더 현명하게 사랑하기 위한 필독 테스트!',
  },
  'dating-method-test': {
    title: '나의 데이팅 앱 사용 유형 테스트 - AIverse',
    description:
      '데이팅 앱에서 당신은 어떤 스타일로 상대를 탐색하나요? 당신의 데이팅 앱 사용 유형을 분석해드립니다.',
    keywords: '데이팅 앱, 소개팅 앱, 연애 스타일, 연애 테스트, 데이팅',
    ogTitle: '📱 나의 데이팅 앱 사용 유형 테스트',
    ogDescription: '데이팅 앱 속 나는 어떤 모습일까? 나의 온라인 연애 스타일 분석!',
  },
  'dating-style-test': {
    title: '나의 데이팅 스타일 테스트 - AIverse',
    description:
      '썸부터 연애까지, 당신의 데이팅 방식은? 심층 분석을 통해 당신의 연애 성공률을 높여보세요.',
    keywords: '데이팅 스타일, 연애 스타일, 썸, 연애, 심리 테스트',
    ogTitle: '💘 나의 데이팅 스타일 테스트',
    ogDescription: '나는 금사빠? 신중형? 썸부터 연애까지 당신의 데이팅 스타일은?',
  },
  'decision-making-style-test': {
    title: '나의 의사결정 스타일 테스트 - AIverse',
    description:
      '중요한 선택의 순간, 당신은 어떻게 결정하나요? 당신의 의사결정 스타일을 분석하고 더 나은 선택을 위한 팁을 얻으세요.',
    keywords: '의사결정, 선택장애, 결정장애, 심리 테스트, 성격 분석',
    ogTitle: '🤔 나의 의사결정 스타일 테스트',
    ogDescription: '짜장면 vs 짬뽕! 인생은 선택의 연속, 당신의 의사결정 스타일은?',
  },
  'early-relationship-behavior-test': {
    title: '초반 연애 행동 유형 테스트 - AIverse',
    description:
      '연애 초반, 당신은 어떤 모습인가요? 내 연애 시동 유형을 알아보고 관계의 시작을 성공적으로 이끌어보세요.',
    keywords: '연애 초반, 썸, 연애 행동, 연애 스타일, 연애 테스트',
    ogTitle: '🥰 초반 연애 행동 유형 테스트',
    ogDescription: '연애 초반, 당신은 직진? 아니면 신중? 당신의 연애 시작 스타일!',
  },
  'gift-giving-style-test': {
    title: '나의 선물 증정 스타일 테스트 - AIverse',
    description:
      '선물을 고르고 주는 방식에서 드러나는 당신의 성향은? 당신의 선물 스타일을 통해 성격을 분석해 보세요.',
    keywords: '선물 스타일, 선물, 성격 테스트, 심리 테스트, 기념일',
    ogTitle: '🎁 나의 선물 증정 스타일 테스트',
    ogDescription: '선물에 담긴 당신의 마음, 당신의 선물 스타일은 어떤 유형일까요?',
  },

  // 테토에겐 테스트
  'teto-egne-basic-test': {
    title: '테토에겐 호르몬 테스트 - AIverse',
    description:
      '6개 영역별 테스토스테론과 에스트로겐 성향을 종합 분석하여 당신의 타고난 기질을 알려드립니다.',
    keywords: '테토에겐, 호르몬 테스트, 성향 테스트, 테스토스테론, 에스트로겐',
    ogTitle: '🧬 테토에겐 호르몬 테스트',
    ogDescription: '내 안에 잠든 호르몬 성향은? 8만 9천명이 참여한 화제의 테스트!',
  },
  'teto-egne-mz-test': {
    title: 'MZ력 테스트: 당신의 테토에겐 지수는? - AIverse',
    description:
      '디지털 라이프와 가치관을 통해 알아보는 당신의 테스토스테론 & 에스트로겐 성향 분석. 당신의 MZ력과 호르몬 성향을 함께 알아보세요.',
    keywords: 'MZ력 테스트, 테토에겐, MZ세대, 밈 테스트, 신조어 테스트',
    ogTitle: '🔍 MZ력 테스트: 당신의 테토에겐 지수는?',
    ogDescription: '혹시 나 꼰대...? 당신의 MZ력과 호르몬 성향을 동시에 분석!',
  },

  // MZ 라이프스타일
  'burnout-level-test': {
    title: '번아웃 지수 테스트 - AIverse',
    description:
      '혹시 나도 번아웃? 간단한 테스트를 통해 내 번아웃 지수는 과연 몇 점인지 확인하고 극복 팁을 얻어가세요.',
    keywords: '번아웃 테스트, 번아웃 증후군, 스트레스 테스트, 직장인 테스트, 심리 테스트',
    ogTitle: '🔥 번아웃 지수 테스트',
    ogDescription: '요즘 너무 지치고 힘든가요? 23만 명이 참여한 내 번아웃 지수 확인하기!',
  },
  'spending-type-test': {
    title: '나의 소비 유형 테스트 - AIverse',
    description:
      '욜로족부터 플렉스족까지! 다양한 소비 유형 중 당신은 어디에 속할까요? 당신의 숨겨진 소비 유형을 찾아보세요.',
    keywords: '소비 유형, 소비 습관, 재테크, 심리 테스트, 돈 관리',
    ogTitle: '💰 나의 소비 유형 테스트',
    ogDescription: '나는 욜로족? 짠테크족? 18만 명이 알아본 나의 진짜 소비 유형은?',
  },
  'godsaeng-type-test': {
    title: '나의 갓생 유형 테스트 - AIverse',
    description:
      "아침형 인간부터 N잡러까지, 바쁘다 바빠 현대사회 속 당신의 '갓생'은 어떤 모습일까요? 당신의 갓생 유형을 알아보세요.",
    keywords: '갓생, 갓생 살기, 자기계발, 동기부여, 라이프스타일 테스트',
    ogTitle: '👑 나의 갓생 유형 테스트',
    ogDescription: "요즘 대세는 '갓생'! 나는 어떤 갓생 유형일까? 15만 명 참여!",
  },
  'mbti-overimmersion-test': {
    title: 'MBTI 과몰입 테스트 - AIverse',
    description: 'MBTI에 얼마나 진심이세요? 재미로 보는 당신의 MBTI 과몰입 정도를 테스트해보세요.',
    keywords: 'MBTI 과몰입, MBTI 테스트, 밈 테스트, 재미있는 테스트, 성격 테스트',
    ogTitle: '🤔 MBTI 과몰입 테스트',
    ogDescription: '혹시 당신도 MBTI 과몰입러? 9만 명이 참여한 자가진단 테스트!',
  },
  'spending-style-test': {
    title: '나의 소비 심리 테스트 - AIverse',
    description:
      '왜 항상 돈이 없을까? 지갑을 열게 만드는 당신의 소비 심리를 분석하고 건강한 소비 습관을 만들어보세요.',
    keywords: '소비 심리, 소비 습관, 충동구매, 돈 관리, 재테크 테스트',
    ogTitle: '💸 나의 소비 심리 테스트',
    ogDescription: '내 통장이 텅장인 이유! 당신의 지갑을 열게 만드는 소비 심리 분석.',
  },

  // 여행 테스트
  'travel-style-test': {
    title: '나의 여행 스타일 테스트 - AIverse',
    description:
      '계획형 J? 즉흥형 P? 당신의 진짜 여행 스타일은 무엇일까요? 나와 꼭 맞는 여행 스타일을 찾아보세요.',
    keywords: '여행 스타일, 여행 테스트, 여행 MBTI, 여행 계획, 심리 테스트',
    ogTitle: '✈️ 나의 여행 스타일 테스트',
    ogDescription: '계획이 빼곡한 J일까? 발길 닿는 대로 P일까? 나의 여행 스타일은?',
  },
  'overseas-travel-style-test': {
    title: '해외 여행지 추천 테스트 - AIverse',
    description:
      'AI가 당신의 취향을 분석하여 꼭 맞는 운명의 해외 여행지를 찾아드립니다. 다음 휴가는 어디로 떠나볼까요?',
    keywords: '해외 여행, 여행지 추천, AI 여행 추천, 휴가 계획, 여행 테스트',
    ogTitle: '🌍 해외 여행지 추천 테스트',
    ogDescription: '나에게 꼭 맞는 해외 여행지는 어디? AI가 찾아주는 운명의 여행지!',
  },
  'domestic-travel-style-test': {
    title: '국내 여행지 추천 테스트 - AIverse',
    description:
      'AI가 당신의 취향을 분석하여 숨겨진 보석 같은 국내 여행지를 추천해드립니다. 주말에 떠나기 좋은 곳을 찾아보세요.',
    keywords: '국내 여행, 여행지 추천, AI 여행 추천, 주말 여행, 여행 테스트',
    ogTitle: '🏞️ 국내 여행지 추천 테스트',
    ogDescription: '이번 주말 어디 가지? AI가 추천하는 나만의 맞춤 국내 여행지!',
  },

  // 엔터테인먼트
  'kpop-style-test': {
    title: '🎵 K-pop 그룹 스타일 테스트 - AIverse',
    description:
      '당신의 성향과 가장 잘 맞는 K-pop 그룹을 찾아보세요! BTS, 블랙핑크, 뉴진스 등 인기 그룹 추천.',
    keywords: 'K-pop 테스트, 케이팝 그룹, 아이돌 성향, BTS, 블랙핑크, 뉴진스',
    ogTitle: '🎵 K-pop 그룹 스타일 테스트',
    ogDescription: '당신과 가장 잘 맞는 K-pop 그룹은? 나만의 아이돌 스타일 찾기!',
  },
  'ott-preference-test': {
    title: '📺 OTT 취향 분석 테스트 - AIverse',
    description:
      '당신의 성향에 맞는 완벽한 OTT 콘텐츠를 찾아보세요! 넷플릭스, 디즈니+ 등 맞춤 추천.',
    keywords: 'OTT 추천, 넷플릭스 테스트, 드라마 추천, 영화 취향, 콘텐츠 분석',
    ogTitle: '📺 OTT 취향 분석 테스트',
    ogDescription: '당신만을 위한 완벽한 OTT 콘텐츠 추천! 지금 바로 확인해보세요.',
  },
  'deokjil-type-test': {
    title: '나의 덕질 유형 테스트 - AIverse',
    description:
      '덕질이 세상을 구한다! 안방 1열형, 총대형, 금손형 등 당신은 어떤 유형의 덕후인가요? 당신의 덕질 스타일을 알아보세요.',
    keywords: '덕질 유형, 덕질 테스트, 팬덤, 아이돌, 덕후 테스트',
    ogTitle: '👑 나의 덕질 유형 테스트',
    ogDescription: '덕질에도 유형이 있다! 100만 명이 알아본 나의 덕질 유형은?',
  },
  'game-type-test': {
    title: '나의 게임 유형 테스트 - AIverse',
    description:
      '콘솔? 모바일? RPG? FPS? 당신의 게임 스타일은 무엇인가요? 당신에게 꼭 맞는 인생 게임을 찾아보세요.',
    keywords: '게임 유형, 게임 추천, 게임 테스트, 게이머, PC 게임',
    ogTitle: '🎮 나의 게임 유형 테스트',
    ogDescription: '당신은 어떤 게이머? 나의 게임 유형과 인생 게임 추천받기!',
  },
  'movie-preference-test': {
    title: '나의 영화 취향 테스트 - AIverse',
    description:
      '액션? 로맨스? 코미디? 당신의 숨겨진 영화 취향을 분석하고 인생 영화를 추천받아보세요.',
    keywords: '영화 취향, 영화 추천, 영화 테스트, 인생 영화, OTT',
    ogTitle: '🎬 나의 영화 취향 테스트',
    ogDescription: '당신의 영화 취향은? 간단한 테스트로 인생 영화 추천받기!',
  },
  'steam-game-preference-test': {
    title: '스팀 게임 취향 테스트 - AIverse',
    description:
      '당신의 스팀 게임 라이브러리가 당신의 성향을 말해줍니다. 스팀 게임 취향으로 알아보는 나의 진짜 성격은?',
    keywords: '스팀 게임, 게임 취향, 게임 추천, PC 게임, 스팀 테스트',
    ogTitle: '🕹️ 스팀 게임 취향 테스트',
    ogDescription: '스팀 게이머 필독! 당신의 게임 취향으로 성격을 분석해드려요.',
  },

  // AI 미래예측
  'ai-fortune': {
    title: '2025년 AI 신년 운세 - AIverse',
    description:
      'AI가 당신의 데이터를 기반으로 2025년 신년 운세를 알려드립니다. 재물운, 연애운, 건강운, 직업운을 모두 확인해보세요.',
    keywords: '신년 운세, 2025년 운세, AI 운세, 사주, 토정비결',
    ogTitle: '✨ 2025년 AI 신년 운세',
    ogDescription: 'AI가 분석한 2025년 나의 운세는? 새해 운세 미리보기!',
  },
  'ai-career': {
    title: 'AI 직업 적성 테스트 - AIverse',
    description:
      'AI가 당신의 성향과 잠재력을 분석하여 미래 유망 직업을 포함한 맞춤 직업을 추천해 드립니다.',
    keywords: '직업 적성, 진로 테스트, 직업 추천, AI 진로, 미래 직업',
    ogTitle: '💼 AI 직업 적성 테스트',
    ogDescription: '내게 맞는 직업은 뭘까? AI가 나의 잠재력을 분석해 추천합니다!',
  },

  // 기타 MBTI 테스트
  'mbti-pororo': {
    title: 'MBTI 뽀로로 캐릭터 테스트 - AIverse',
    description: '당신과 닮은 뽀로로 캐릭터를 찾아보세요! 16가지 MBTI 유형별 캐릭터 분석.',
    keywords: 'MBTI 뽀로로, 뽀로로 테스트, MBTI 캐릭터, 성격 테스트',
    ogTitle: '🐧 MBTI 뽀로로 캐릭터 테스트',
    ogDescription: '당신은 뽀로로? 크롱? 루피? 85만 명이 참여한 인기 테스트!',
  },
  'mbti-jewelry': {
    title: 'MBTI 보석 테스트 - AIverse',
    description: '당신의 성격을 나타내는 보석은? 16가지 MBTI 유형별 보석 분석.',
    keywords: 'MBTI 보석, 성격 보석, MBTI 테스트, 보석 성격',
    ogTitle: '💎 MBTI 보석 테스트',
    ogDescription: '당신을 닮은 보석을 찾아보세요! 다이아몬드? 루비? 사파이어?',
  },
  'mbti-stone': {
    title: 'MBTI 돌멩이 테스트 - AIverse',
    description: '당신의 MBTI를 돌멩이로 표현하면? 재미있는 MBTI 분석.',
    keywords: 'MBTI 돌멩이, 재미있는 MBTI, MBTI 테스트',
    ogTitle: '🪨 MBTI 돌멩이 테스트',
    ogDescription: '당신은 어떤 돌멩이일까요? 68만 명이 웃으며 참여한 테스트!',
  },
  'mbti-story-character': {
    title: 'MBTI 동화 캐릭터 테스트 - AIverse',
    description: '당신과 닮은 동화 속 캐릭터는? 16가지 MBTI 유형별 동화 캐릭터.',
    keywords: 'MBTI 동화, 동화 캐릭터, MBTI 테스트, 성격 분석',
    ogTitle: '📚 MBTI 동화 캐릭터 테스트',
    ogDescription: '신데렐라? 백설공주? 당신을 닮은 동화 캐릭터를 찾아보세요!',
  },
};

export const getTestMeta = (testId: string): TestMetaData => {
  return (
    testMetaData[testId] || {
      title: 'AIverse - AI의 모든 것을 체험하다',
      description:
        'AI 얼굴 분석, MBTI 테스트, 성격 분석 등 다양한 AI 테스트를 무료로 체험해보세요!',
      keywords: 'AI 테스트, 얼굴 분석, MBTI 테스트, 성격 테스트',
    }
  );
};

// 테스트별 썸네일 URL 생성 함수
export const getTestThumbnailUrl = (testId: string): string => {
  const thumbnailExists = [
    // AI 분석
    'face-age-test',
    'face-grade-test',
    'eye-test',
    'personal-color-test',
    // 연애 & 성격
    'love-style-test',
    'ideal-type-test',
    'mbti-compatibility-test',
    'breakup-coping-test',
    'communication-style-test',
    'conflict-coping-test',
    'conflict-resolution-style-test',
    'dating-method-test',
    'dating-style-test',
    'decision-making-style-test',
    'early-relationship-behavior-test',
    'gift-giving-style-test',
    // 테토에겐
    'teto-egne-basic-test',
    'teto-egne-mz-test',
    // MZ 라이프스타일
    'burnout-level-test',
    'spending-type-test',
    'godsaeng-type-test',
    'mbti-overimmersion-test',
    'spending-style-test',
    // 여행
    'travel-style-test',
    'overseas-travel-style-test',
    'domestic-travel-style-test',
    // 판타지
    'hogwarts-test',
    'flower-test',
    // 엔터테인먼트
    'kpop-style-test',
    'ott-preference-test',
    'deokjil-type-test',
    'game-type-test',
    'movie-preference-test',
    'steam-game-preference-test',
    // AI 미래예측
    'ai-fortune',
    'ai-career',
  ];

  if (thumbnailExists.includes(testId)) {
    return `https://aiverse-phi.vercel.app/images/thumbnails/${testId}.png`;
  }

  // 기본 이미지 사용
  return `https://aiverse-phi.vercel.app/images/thumbnails/${testId}.png`;
};

// 기본 사이트 이미지 URL
export const getDefaultSiteImage = (): string => {
  return 'https://aiverse-phi.vercel.app/images/aiverse-og-image.png';
};
