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
    title: 'AI 얼굴 나이 테스트 - AIverse-phi',
    description:
      'AI가 당신의 얼굴을 분석해서 나이를 맞춰보는 테스트! 정확도 95% 이상의 고급 AI 기술로 분석합니다.',
    keywords: 'AI 얼굴 나이, 얼굴 나이 테스트, AI 분석, 얼굴 인식, 나이 예측',
    ogTitle: '🤖 AI 얼굴 나이 테스트',
    ogDescription: 'AI가 당신의 실제 나이를 맞춰볼까요? 120만 명이 참여한 인기 테스트!',
  },
  'face-grade-test': {
    title: 'AI 외모 등급 테스트 - AIverse-phi',
    description: 'AI가 분석하는 7단계 외모 등급! 객관적인 AI 분석으로 당신의 외모를 평가해보세요.',
    keywords: 'AI 외모 분석, 외모 등급, 얼굴 분석, AI 미모 테스트, 외모 평가',
    ogTitle: '✨ AI 외모 등급 테스트',
    ogDescription: 'AI가 객관적으로 분석하는 당신의 외모 등급은? 98만 명 참여!',
  },
  'eye-test': {
    title: 'AI 눈 관상 테스트 - AIverse-phi',
    description:
      'AI가 당신의 눈을 분석하여 관상과 성격을 알려주는 테스트입니다. 인공지능으로 당신의 운명을 살짝 엿보세요.',
    keywords: 'AI 관상, 눈 관상, 관상 테스트, AI 얼굴 분석, 성격 테스트',
    ogTitle: '👁️ AI 눈 관상 테스트',
    ogDescription: 'AI가 분석하는 당신의 눈 관상과 성격! 75만 명이 참여한 신기한 테스트!',
  },
  'personal-color-test': {
    title: 'AI 퍼스널 컬러 테스트 - AIverse-phi',
    description:
      'AI가 당신의 얼굴을 분석하여 가장 잘 어울리는 퍼스널 컬러를 찾아드립니다. 웜톤, 쿨톤, 뉴트럴톤까지 정확하게 진단해보세요.',
    keywords: '퍼스널 컬러, 퍼스널 컬러 테스트, AI 퍼스널 컬러, 웜톤, 쿨톤, AI 분석',
    ogTitle: '🎨 AI 퍼스널 컬러 테스트',
    ogDescription: '아직도 내 톤을 모른다면? AI가 5초 만에 찾아주는 인생 컬러! 89만 명 참여 완료!',
  },
  'hogwarts-test': {
    title: '호그와트 기숙사 테스트 - AIverse-phi',
    description:
      'AI가 당신의 성향을 분석하여 가장 어울리는 호그와트 기숙사를 배정해드립니다. 그리핀도르, 슬리데린, 후플푸프, 래번클로 중 당신의 기숙사는?',
    keywords: '호그와트 기숙사 테스트, 해리포터 테스트, 기숙사 배정, MBTI 테스트, 성격 테스트',
    ogTitle: '🧙‍ 호그와트 기숙사 테스트',
    ogDescription: '당신을 위한 기숙사 배정! 92만 명이 참여한 바로 그 테스트!',
  },
  'flower-test': {
    title: '나와 닮은 꽃 찾기 테스트 - AIverse-phi',
    description:
      'AI가 당신의 성격과 분위기를 분석하여 가장 닮은 꽃을 찾아드립니다. 당신의 꽃말도 함께 확인해보세요.',
    keywords: '꽃 테스트, 나와 닮은 꽃, 탄생화 테스트, 심리 테스트, 꽃말',
    ogTitle: '🌸 나와 닮은 꽃 찾기 테스트',
    ogDescription: '나는 어떤 꽃을 닮았을까? 63만 명이 찾아본 나의 꽃과 꽃말!',
  },
  'animal-face-test': {
    title: '나와 닮은 동물상 테스트 - AIverse-phi',
    description:
      'AI가 당신의 얼굴을 분석해서 나와 닮은 동물상을 찾아드립니다. 강아지상, 고양이상, 토끼상 등 당신은 어떤 동물상일까요?',
    keywords: '동물상 테스트, AI 동물상, 강아지상, 고양이상, 얼굴 관상, AI 분석',
    ogTitle: '🐶 나와 닮은 동물상 테스트',
    ogDescription: 'AI가 분석하는 당신의 동물상! 55만 명이 참여한 인기 테스트!',
  },

  // 텐서플로우
  'face-emotion-test': {
    title: 'AI 얼굴 감정 인식 테스트 - AIverse-phi',
    description:
      'AI가 실시간으로 당신의 얼굴 표정을 분석하여 감정을 인식합니다! 기쁨, 화남, 슬픔, 놀람 등 다양한 감정을 AI가 정확하게 분석해드립니다.',
    keywords: 'AI 감정 인식, 얼굴 감정 분석, 실시간 감정 테스트, AI 얼굴 분석, 표정 인식',
    ogTitle: '🎭 AI 얼굴 감정 인식 테스트',
    ogDescription:
      'AI가 실시간으로 당신의 얼굴에서 감정을 읽습니다. 다양한 감정 상태를 지금 바로 체험해보세요!',
  },

  // 연애 & 성격
  'love-style-test': {
    title: '💕 내 연애 스타일 테스트 - AIverse-phi',
    description:
      'MZ세대 연애 문화를 반영한 나만의 연애 스타일을 찾아보세요! 8가지 동물상으로 알아보는 연애 유형.',
    keywords: '연애 스타일, 연애 유형, 동물상, MZ세대 연애, 연애 테스트',
    ogTitle: '💕 내 연애 스타일 테스트',
    ogDescription: '강아지상? 고양이상? 나의 연애 스타일을 동물로 알아보세요!',
  },
  'ideal-type-test': {
    title: '🎨 취향으로 보는 이상형 테스트 - AIverse-phi',
    description:
      '당신의 라이프스타일과 취향으로 완벽한 이상형을 찾아보세요! 8가지 유형의 이상형 분석.',
    keywords: '이상형 테스트, 취향 분석, 라이프스타일, 연애 궁합, 이상형 유형',
    ogTitle: '🎨 취향으로 보는 이상형 테스트',
    ogDescription: '당신의 취향이 말해주는 완벽한 이상형은? 지금 바로 확인해보세요!',
  },
  'mbti-compatibility-test': {
    title: '💖 MBTI 연애 궁합 테스트 - AIverse-phi',
    description: '16가지 MBTI 유형별 최고의 연애 궁합을 찾아보세요! 과학적 근거 기반 궁합 분석.',
    keywords: 'MBTI 궁합, MBTI 연애, 성격 유형, 연애 궁합, MBTI 테스트',
    ogTitle: '💖 MBTI 연애 궁합 테스트',
    ogDescription: '당신의 MBTI와 완벽한 궁합인 사람은? 15만 명이 참여한 인기 테스트!',
  },
  'breakup-coping-test': {
    title: '나의 이별 대처법 테스트 - AIverse-phi',
    description:
      '이별 후 당신은 어떤 모습인가요? 심리 분석을 통해 나의 이별 극복 유형과 건강한 이별 방법을 알아보세요.',
    keywords: '이별 대처법, 이별 극복, 연애 테스트, 심리 테스트, 회복탄력성',
    ogTitle: '💔 나의 이별 대처법 테스트',
    ogDescription: '이별의 아픔, 나는 어떻게 이겨낼까? 나의 이별 극복 유형을 알아보세요.',
  },
  'communication-style-test': {
    title: '나의 대화 스타일 테스트 - AIverse-phi',
    description:
      '친구, 연인, 동료와의 관계를 결정하는 당신의 소통 방식은? 나의 대화 스타일을 분석하고 관계를 개선해보세요.',
    keywords: '대화 스타일, 소통 방식, 커뮤니케이션, 인간관계, 심리 테스트',
    ogTitle: '🗣️ 나의 대화 스타일 테스트',
    ogDescription: '혹시 나도 대화 빌런? 원활한 소통을 위한 나의 대화 스타일 분석!',
  },
  'conflict-coping-test': {
    title: '나의 갈등 대처 유형 테스트 - AIverse-phi',
    description:
      '갈등 상황에서 당신은 어떻게 반응하나요? 회피형, 타협형, 경쟁형 등 나의 갈등 해결 유형을 알아보세요.',
    keywords: '갈등 대처, 갈등 해결, 성격 테스트, 인간관계, 심리 테스트',
    ogTitle: '🤝 나의 갈등 대처 유형 테스트',
    ogDescription: '갈등 앞에서 나는 어떤 모습일까? 나의 갈등 해결 유형을 알아보세요.',
  },
  'conflict-resolution-style-test': {
    title: '나의 연애 갈등 해결 스타일 테스트 - AIverse-phi',
    description:
      '연인과의 싸움, 당신은 어떻게 풀어나가나요? 당신의 연애 갈등 해결 스타일을 분석하고 더 건강한 관계를 만들어보세요.',
    keywords: '연애 갈등, 연인 싸움, 갈등 해결, 연애 상담, 연애 테스트',
    ogTitle: '💑 나의 연애 갈등 해결 스타일 테스트',
    ogDescription: '연인과 싸운 뒤, 당신의 행동은? 더 현명하게 사랑하기 위한 필독 테스트!',
  },
  'dating-method-test': {
    title: '나의 데이팅 앱 사용 유형 테스트 - AIverse-phi',
    description:
      '데이팅 앱에서 당신은 어떤 스타일로 상대를 탐색하나요? 당신의 데이팅 앱 사용 유형을 분석해드립니다.',
    keywords: '데이팅 앱, 소개팅 앱, 연애 스타일, 연애 테스트, 데이팅',
    ogTitle: '📱 나의 데이팅 앱 사용 유형 테스트',
    ogDescription: '데이팅 앱 속 나는 어떤 모습일까? 나의 온라인 연애 스타일 분석!',
  },
  'dating-style-test': {
    title: '나의 데이팅 스타일 테스트 - AIverse-phi',
    description:
      '썸부터 연애까지, 당신의 데이팅 방식은? 심층 분석을 통해 당신의 연애 성공률을 높여보세요.',
    keywords: '데이팅 스타일, 연애 스타일, 썸, 연애, 심리 테스트',
    ogTitle: '💘 나의 데이팅 스타일 테스트',
    ogDescription: '나는 금사빠? 신중형? 썸부터 연애까지 당신의 데이팅 스타일은?',
  },
  'decision-making-style-test': {
    title: '나의 의사결정 스타일 테스트 - AIverse-phi',
    description:
      '중요한 선택의 순간, 당신은 어떻게 결정하나요? 당신의 의사결정 스타일을 분석하고 더 나은 선택을 위한 팁을 얻으세요.',
    keywords: '의사결정, 선택장애, 결정장애, 심리 테스트, 성격 분석',
    ogTitle: '🤔 나의 의사결정 스타일 테스트',
    ogDescription: '짜장면 vs 짬뽕! 인생은 선택의 연속, 당신의 의사결정 스타일은?',
  },
  'early-relationship-behavior-test': {
    title: '초반 연애 행동 유형 테스트 - AIverse-phi',
    description:
      '연애 초반, 당신은 어떤 모습인가요? 내 연애 시동 유형을 알아보고 관계의 시작을 성공적으로 이끌어보세요.',
    keywords: '연애 초반, 썸, 연애 행동, 연애 스타일, 연애 테스트',
    ogTitle: '🥰 초반 연애 행동 유형 테스트',
    ogDescription: '연애 초반, 당신은 직진? 아니면 신중? 당신의 연애 시작 스타일!',
  },
  'gift-giving-style-test': {
    title: '나의 선물 증정 스타일 테스트 - AIverse-phi',
    description:
      '선물을 고르고 주는 방식에서 드러나는 당신의 성향은? 당신의 선물 스타일을 통해 성격을 분석해 보세요.',
    keywords: '선물 스타일, 선물, 성격 테스트, 심리 테스트, 기념일',
    ogTitle: '🎁 나의 선물 증정 스타일 테스트',
    ogDescription: '선물에 담긴 당신의 마음, 당신의 선물 스타일은 어떤 유형일까요?',
  },
  'dating-character-test': {
    title: '❤️‍🩹 나의 연애 캐릭터 테스트 - AIverse-phi',
    description:
      '연애할 때 나는 어떤 캐릭터일까? 연인에게 나는 어떤 모습으로 비칠까? 나의 연애 스타일과 숨겨진 연애 캐릭터를 확인해 보세요!',
    keywords: '연애 캐릭터, 연애 스타일, 심리 테스트, 성격 분석, 연애 유형',
    ogTitle: '❤️‍🩹 나의 연애 캐릭터 테스트',
    ogDescription: '나는 어떤 연애 캐릭터일까? 순정파 댕댕이? 츤데레 냥냥이? 당신의 연애 캐릭터는?',
  },
  'ideal-type-match-test': {
    title: '💘 이상형 매칭 테스트 - AIverse-phi',
    description:
      '내가 생각하는 나의 이상형은? 나도 몰랐던 나의 이상형을 찾아보세요! 재미있는 질문들을 통해 당신의 마음을 두근거리게 할 단 한 사람을 공개합니다.',
    keywords: '이상형 매칭, 이상형 테스트, 연애 테스트, 궁합, 데이트',
    ogTitle: '💘 이상형 매칭 테스트',
    ogDescription:
      '당신이 꿈꾸는 완벽한 이상형은? 당신의 마음을 두근거리게 할 단 한 사람을 찾아보세요!',
  },

  // 테토에겐 테스트
  'teto-egne-basic-test': {
    title: '테토에겐 호르몬 테스트 - AIverse-phi',
    description:
      '6개 영역별 테스토스테론과 에스트로겐 성향을 종합 분석하여 당신의 타고난 기질을 알려드립니다.',
    keywords: '테토에겐, 호르몬 테스트, 성향 테스트, 테스토스테론, 에스트로겐',
    ogTitle: '🧬 테토에겐 호르몬 테스트',
    ogDescription: '내 안에 잠든 호르몬 성향은? 8만 9천명이 참여한 화제의 테스트!',
  },
  'teto-egne-mz-test': {
    title: 'MZ력 테스트: 당신의 테토에겐 지수는? - AIverse-phi',
    description:
      '디지털 라이프와 가치관을 통해 알아보는 당신의 테스토스테론 & 에스트로겐 성향 분석. 당신의 MZ력과 호르몬 성향을 함께 알아보세요.',
    keywords: 'MZ력 테스트, 테토에겐, MZ세대, 밈 테스트, 신조어 테스트',
    ogTitle: '🔍 MZ력 테스트: 당신의 테토에겐 지수는?',
    ogDescription: '혹시 나 꼰대...? 당신의 MZ력과 호르몬 성향을 동시에 분석!',
  },

  // MZ 라이프스타일
  'burnout-level-test': {
    title: '번아웃 지수 테스트 - AIverse-phi',
    description:
      '혹시 나도 번아웃? 간단한 테스트를 통해 내 번아웃 지수는 과연 몇 점인지 확인하고 극복 팁을 얻어가세요.',
    keywords: '번아웃 테스트, 번아웃 증후군, 스트레스 테스트, 직장인 테스트, 심리 테스트',
    ogTitle: '🔥 번아웃 지수 테스트',
    ogDescription: '요즘 너무 지치고 힘든가요? 23만 명이 참여한 내 번아웃 지수 확인하기!',
  },
  'spending-type-test': {
    title: '나의 소비 유형 테스트 - AIverse-phi',
    description:
      '욜로족부터 플렉스족까지! 다양한 소비 유형 중 당신은 어디에 속할까요? 당신의 숨겨진 소비 유형을 찾아보세요.',
    keywords: '소비 유형, 소비 습관, 재테크, 심리 테스트, 돈 관리',
    ogTitle: '💰 나의 소비 유형 테스트',
    ogDescription: '나는 욜로족? 짠테크족? 18만 명이 알아본 나의 진짜 소비 유형은?',
  },
  'godsaeng-type-test': {
    title: '나의 갓생 유형 테스트 - AIverse-phi',
    description:
      "아침형 인간부터 N잡러까지, 바쁘다 바빠 현대사회 속 당신의 '갓생'은 어떤 모습일까요? 당신의 갓생 유형을 알아보세요.",
    keywords: '갓생, 갓생 살기, 자기계발, 동기부여, 라이프스타일 테스트',
    ogTitle: '👑 나의 갓생 유형 테스트',
    ogDescription: "요즘 대세는 '갓생'! 나는 어떤 갓생 유형일까? 15만 명 참여!",
  },
  'mbti-overimmersion-test': {
    title: 'MBTI 과몰입 테스트 - AIverse-phi',
    description: 'MBTI에 얼마나 진심이세요? 재미로 보는 당신의 MBTI 과몰입 정도를 테스트해보세요.',
    keywords: 'MBTI 과몰입, MBTI 테스트, 밈 테스트, 재미있는 테스트, 성격 테스트',
    ogTitle: '🤔 MBTI 과몰입 테스트',
    ogDescription: '혹시 당신도 MBTI 과몰입러? 9만 명이 참여한 자가진단 테스트!',
  },
  'spending-style-test': {
    title: '나의 소비 심리 테스트 - AIverse-phi',
    description:
      '왜 항상 돈이 없을까? 지갑을 열게 만드는 당신의 소비 심리를 분석하고 건강한 소비 습관을 만들어보세요.',
    keywords: '소비 심리, 소비 습관, 충동구매, 돈 관리, 재테크 테스트',
    ogTitle: '💸 나의 소비 심리 테스트',
    ogDescription: '내 통장이 텅장인 이유! 당신의 지갑을 열게 만드는 소비 심리 분석.',
  },
  'mental-age-test': {
    title: '내 숨은 나이 테스트 (정신연령 검사) - AIverse-phi',
    description:
      '평소 생활 습관, 소비 취향, 말투 등으로 알아보는 나의 진짜 정신연령은? 간단한 질문으로 당신의 숨은 나이를 확인해 보세요.',
    keywords: '정신연령, 숨은 나이, 심리 테스트, 성격 테스트, 정신연령 검사',
    ogTitle: '👶 내 숨은 나이 테스트 (정신연령 검사)',
    ogDescription: '혹시 나는 아재...? 25만 명이 참여한 나의 진짜 나이 테스트!',
  },
  'x-generation-test': {
    title: '당신은 몇 세대 사람인가요? (X세대 테스트) - AIverse-phi',
    description:
      '세대별 공감 테스트를 통해 당신의 성향이 어느 세대에 가까운지 알아봅니다. 재미로 보는 세대 공감 테스트!',
    keywords: 'X세대, MZ세대, 세대 테스트, 꼰대 테스트, 라이프스타일',
    ogTitle: '👴 당신은 몇 세대 사람인가요? (X세대 테스트)',
    ogDescription: 'X세대? MZ세대? 당신은 어떤 세대의 사람일까요?',
  },

  // 여행 테스트
  'travel-style-test': {
    title: '나의 여행 스타일 테스트 - AIverse-phi',
    description:
      '계획형 J? 즉흥형 P? 당신의 진짜 여행 스타일은 무엇일까요? 나와 꼭 맞는 여행 스타일을 찾아보세요.',
    keywords: '여행 스타일, 여행 테스트, 여행 MBTI, 여행 계획, 심리 테스트',
    ogTitle: '✈️ 나의 여행 스타일 테스트',
    ogDescription: '계획이 빼곡한 J일까? 발길 닿는 대로 P일까? 나의 여행 스타일은?',
  },
  'overseas-travel-style-test': {
    title: '해외 여행지 추천 테스트 - AIverse-phi',
    description:
      'AI가 당신의 취향을 분석하여 꼭 맞는 운명의 해외 여행지를 찾아드립니다. 다음 휴가는 어디로 떠나볼까요?',
    keywords: '해외 여행, 여행지 추천, AI 여행 추천, 휴가 계획, 여행 테스트',
    ogTitle: '🌍 해외 여행지 추천 테스트',
    ogDescription: '나에게 꼭 맞는 해외 여행지는 어디? AI가 찾아주는 운명의 여행지!',
  },
  'domestic-travel-style-test': {
    title: '국내 여행지 추천 테스트 - AIverse-phi',
    description:
      'AI가 당신의 취향을 분석하여 숨겨진 보석 같은 국내 여행지를 추천해드립니다. 주말에 떠나기 좋은 곳을 찾아보세요.',
    keywords: '국내 여행, 여행지 추천, AI 여행 추천, 주말 여행, 여행 테스트',
    ogTitle: '🏞️ 국내 여행지 추천 테스트',
    ogDescription: '이번 주말 어디 가지? AI가 추천하는 나만의 맞춤 국내 여행지!',
  },

  // 엔터테인먼트
  'kpop-style-test': {
    title: '🎵 K-pop 그룹 스타일 테스트 - AIverse-phi',
    description:
      '당신의 성향과 가장 잘 맞는 K-pop 그룹을 찾아보세요! BTS, 블랙핑크, 뉴진스 등 인기 그룹 추천.',
    keywords: 'K-pop 테스트, 케이팝 그룹, 아이돌 성향, BTS, 블랙핑크, 뉴진스',
    ogTitle: '🎵 K-pop 그룹 스타일 테스트',
    ogDescription: '당신과 가장 잘 맞는 K-pop 그룹은? 나만의 아이돌 스타일 찾기!',
  },
  'ott-preference-test': {
    title: '📺 OTT 취향 분석 테스트 - AIverse-phi',
    description:
      '당신의 성향에 맞는 완벽한 OTT 콘텐츠를 찾아보세요! 넷플릭스, 디즈니+ 등 맞춤 추천.',
    keywords: 'OTT 추천, 넷플릭스 테스트, 드라마 추천, 영화 취향, 콘텐츠 분석',
    ogTitle: '📺 OTT 취향 분석 테스트',
    ogDescription: '당신만을 위한 완벽한 OTT 콘텐츠 추천! 지금 바로 확인해보세요.',
  },
  'deokjil-type-test': {
    title: '나의 덕질 유형 테스트 - AIverse-phi',
    description:
      '덕질이 세상을 구한다! 안방 1열형, 총대형, 금손형 등 당신은 어떤 유형의 덕후인가요? 당신의 덕질 스타일을 알아보세요.',
    keywords: '덕질 유형, 덕질 테스트, 팬덤, 아이돌, 덕후 테스트',
    ogTitle: '👑 나의 덕질 유형 테스트',
    ogDescription: '덕질에도 유형이 있다! 100만 명이 알아본 나의 덕질 유형은?',
  },
  'game-type-test': {
    title: '나의 게임 유형 테스트 - AIverse-phi',
    description:
      '콘솔? 모바일? RPG? FPS? 당신의 게임 스타일은 무엇인가요? 당신에게 꼭 맞는 인생 게임을 찾아보세요.',
    keywords: '게임 유형, 게임 추천, 게임 테스트, 게이머, PC 게임',
    ogTitle: '🎮 나의 게임 유형 테스트',
    ogDescription: '당신은 어떤 게이머? 나의 게임 유형과 인생 게임 추천받기!',
  },
  'movie-preference-test': {
    title: '나의 영화 취향 테스트 - AIverse-phi',
    description:
      '액션? 로맨스? 코미디? 당신의 숨겨진 영화 취향을 분석하고 인생 영화를 추천받아보세요.',
    keywords: '영화 취향, 영화 추천, 영화 테스트, 인생 영화, OTT',
    ogTitle: '🎬 나의 영화 취향 테스트',
    ogDescription: '당신의 영화 취향은? 간단한 테스트로 인생 영화 추천받기!',
  },
  'steam-game-preference-test': {
    title: '스팀 게임 취향 테스트 - AIverse-phi',
    description:
      '당신의 스팀 게임 라이브러리가 당신의 성향을 말해줍니다. 스팀 게임 취향으로 알아보는 나의 진짜 성격은?',
    keywords: '스팀 게임, 게임 취향, 게임 추천, PC 게임, 스팀 테스트',
    ogTitle: '🕹️ 스팀 게임 취향 테스트',
    ogDescription: '스팀 게이머 필독! 당신의 게임 취향으로 성격을 분석해드려요.',
  },
  'k-drama-character-test': {
    title: '나의 K-드라마 캐릭터 테스트 - AIverse-phi',
    description:
      '사랑, 우정, 성장! 당신은 K-드라마 속 어떤 캐릭터일까요? 주인공, 조력자, 빌런 등 당신의 성향을 분석해드립니다.',
    keywords: 'K-드라마 테스트, 드라마 캐릭터, 성격 테스트, 심리 테스트, 드라마 추천',
    ogTitle: '🎬 나의 K-드라마 캐릭터 테스트',
    ogDescription: '나는 혹시 로코 여주? 아니면 빌런...? 나의 K-드라마 속 캐릭터는?',
  },

  // 스포츠 팬
  'kbo-team-test': {
    title: '내 운명의 KBO팀 테스트 - AIverse-phi',
    description:
      '한국 프로야구 10개 팀 중 당신의 야구 취향과 가장 잘 맞는 팀을 찾아드립니다. 내 마음속의 야구팀은 어디?',
    keywords: 'KBO 테스트, 야구팀, 야구 테스트, 프로야구, 스포츠 팬',
    ogTitle: '⚾ 내 운명의 KBO팀 테스트',
    ogDescription: '야구 덕후들 모여라! 당신의 야구 취향과 딱 맞는 KBO팀을 찾아보세요!',
  },
  'overseas-football-team-test': {
    title: '내 운명의 해외 축구팀 테스트 - AIverse-phi',
    description:
      '축구 스타일에 따라 당신과 가장 잘 맞는 해외 축구팀을 찾아드립니다. 프리미어리그, 라리가, 분데스리가 등 당신의 운명적인 팀은?',
    keywords: '해외 축구, 축구팀, 축구 테스트, 프리미어리그, 라리가, 스포츠 팬',
    ogTitle: '⚽ 내 운명의 해외 축구팀 테스트',
    ogDescription: '해축 팬 필독! 당신의 축구 취향에 맞는 최고의 해외 축구팀은?',
  },

  // AI 미래예측
  'ai-fortune': {
    title: '2025년 AI 신년 운세 - AIverse-phi',
    description:
      'AI가 당신의 데이터를 기반으로 2025년 신년 운세를 알려드립니다. 재물운, 연애운, 건강운, 직업운을 모두 확인해보세요.',
    keywords: '신년 운세, 2025년 운세, AI 운세, 사주, 토정비결',
    ogTitle: '✨ 2025년 AI 신년 운세',
    ogDescription: 'AI가 분석한 2025년 나의 운세는? 새해 운세 미리보기!',
  },
  'ai-career': {
    title: 'AI 직업 적성 테스트 - AIverse-phi',
    description:
      'AI가 당신의 성향과 잠재력을 분석하여 미래 유망 직업을 포함한 맞춤 직업을 추천해 드립니다.',
    keywords: '직업 적성, 진로 테스트, 직업 추천, AI 진로, 미래 직업',
    ogTitle: '💼 AI 직업 적성 테스트',
    ogDescription: '내게 맞는 직업은 뭘까? AI가 나의 잠재력을 분석해 추천합니다!',
  },

  // 기타 MBTI 테스트
  'mbti-pororo': {
    title: 'MBTI 뽀로로 캐릭터 테스트 - AIverse-phi',
    description: '당신과 닮은 뽀로로 캐릭터를 찾아보세요! 16가지 MBTI 유형별 캐릭터 분석.',
    keywords: 'MBTI 뽀로로, 뽀로로 테스트, MBTI 캐릭터, 성격 테스트',
    ogTitle: '🐧 MBTI 뽀로로 캐릭터 테스트',
    ogDescription: '당신은 뽀로로? 크롱? 루피? 85만 명이 참여한 인기 테스트!',
  },
  'mbti-jewelry': {
    title: 'MBTI 보석 테스트 - AIverse-phi',
    description: '당신의 성격을 나타내는 보석은? 16가지 MBTI 유형별 보석 분석.',
    keywords: 'MBTI 보석, 성격 보석, MBTI 테스트, 보석 성격',
    ogTitle: '💎 MBTI 보석 테스트',
    ogDescription: '당신을 닮은 보석을 찾아보세요! 다이아몬드? 루비? 사파이어?',
  },
  'mbti-stone': {
    title: 'MBTI 돌멩이 테스트 - AIverse-phi',
    description: '당신의 MBTI를 돌멩이로 표현하면? 재미있는 MBTI 분석.',
    keywords: 'MBTI 돌멩이, 재미있는 MBTI, MBTI 테스트',
    ogTitle: '🪨 MBTI 돌멩이 테스트',
    ogDescription: '당신은 어떤 돌멩이일까요? 68만 명이 웃으며 참여한 테스트!',
  },
  'mbti-story-character': {
    title: 'MBTI 동화 캐릭터 테스트 - AIverse-phi',
    description: '당신과 닮은 동화 속 캐릭터는? 16가지 MBTI 유형별 동화 캐릭터.',
    keywords: 'MBTI 동화, 동화 캐릭터, MBTI 테스트, 성격 분석',
    ogTitle: '📚 MBTI 동화 캐릭터 테스트',
    ogDescription: '신데렐라? 백설공주? 당신을 닮은 동화 캐릭터를 찾아보세요!',
  },

  // 인터랙티브 체험관
  'interactive-hub': {
    title: '인터랙티브 체험관 | AIverse-phi - 차세대 웹 기술 체험',
    description:
      '최신 웹 기술로 구현된 인터랙티브 체험들을 만나보세요. 커서 효과, 배경 체험, 인터랙티브 게임까지 다양한 카테고리로 구성된 체험관입니다.',
    keywords: '인터랙티브 체험, 웹 애니메이션, 커서 효과, 배경 효과, 웹 게임',
    ogTitle: '🚀 차세대 웹 기술 체험관',
    ogDescription: '커서, 배경, 게임 등 최신 웹 기술의 향연! 지금 바로 경험해보세요.',
  },
  background: {
    title: '배경 체험 | AIverse-phi - 몰입형 배경 효과 체험',
    description:
      '다양한 몰입형 배경 효과들을 체험해보세요. 우주 갤럭시, 하이퍼스피드, 파티클 시스템 등의 배경을 제공합니다.',
    keywords: '배경 효과, 인터랙티브 배경, 웹GL, 파티클 시스템, 몰입형 체험',
    ogTitle: '✨ 몰입형 배경 효과 체험',
    ogDescription: '우주, 파티클 등 환상적인 웹 배경 효과의 세계로 빠져보세요!',
  },
  cursor: {
    title: '커서 인터랙션 체험 | AIverse-phi - 다양한 커서 효과 체험',
    description:
      '다양한 커서 인터랙션 효과들을 체험해보세요. 플루이드 트레일, 스플래시 이펙트 등의 커서 효과를 제공합니다.',
    keywords: '커서 효과, 인터랙티브 커서, 마우스 트레일, 웹 애니메이션, 사용자 경험',
    ogTitle: '👆 다양한 커서 효과 체험',
    ogDescription: '밋밋한 마우스 커서는 이제 그만! 화려한 커서 효과를 직접 체험해보세요.',
  },
  games: {
    title: '인터랙티브 게임 | AIverse-phi - 재미있는 웹 게임 체험',
    description:
      '다양한 인터랙티브 게임들을 체험해보세요. 타겟 슈팅과 오브 컬렉터 게임으로 반응속도와 마우스 컨트롤 실력을 테스트하세요.',
    keywords: '인터랙티브 게임, 웹 게임, 반응속도 테스트, 마우스 컨트롤, 온라인 게임',
    ogTitle: '🎮 재미있는 웹 게임 체험',
    ogDescription: '반응속도와 컨트롤 실력을 시험해볼 시간! 다양한 웹 게임을 즐겨보세요.',
  },
  'orb-collector': {
    title: '오브 컬렉터 게임 | AIverse-phi - 마우스 컨트롤 게임',
    description:
      '마우스로 떠다니는 마법의 오브들을 수집하여 점수를 획득하는 인터랙티브 게임입니다.',
    keywords: '오브 컬렉터, 마우스 컨트롤, 웹 게임, 인터랙티브 게임, 반응속도',
    ogTitle: '🔮 오브 컬렉터 게임',
    ogDescription: '마우스로 마법 오브를 수집하고 최고 점수에 도전해보세요!',
  },
  'target-shooter': {
    title: '타겟 슈팅 게임 | AIverse-phi - 반응속도 측정',
    description:
      '타겟을 정확하고 빠르게 클릭하여 반응속도와 정확성을 측정하는 인터랙티브 게임입니다.',
    keywords: '타겟 슈팅, 반응속도 테스트, 정확성 측정, 웹 게임, 클릭 게임',
    ogTitle: '🎯 타겟 슈팅 게임',
    ogDescription: '순발력과 정확성에 자신 있나요? 지금 바로 반응속도를 테스트해보세요!',
  },
  'block-faller': {
    title: '블록 폴러 게임 | AIverse-phi - 클래식 블록 퍼즐',
    description:
      '떨어지는 블록을 쌓아 라인을 완성하고 점수를 획득하는 중독성 강한 클래식 퍼즐 게임입니다.',
    keywords: '블록 폴러, 블록 퍼즐, 테트리스, 웹 게임, 고전 게임',
    ogTitle: '🧱 블록 폴러 게임',
    ogDescription: '떨어지는 블록을 완벽하게 쌓아 최고 점수에 도전하세요!',
  },
  'color-match': {
    title: '컬러 매치 게임 | AIverse-phi - 색상 감각 테스트',
    description:
      '제시된 색상과 일치하는 색상을 빠르게 찾아 클릭하여 색상 감각과 순발력을 테스트하는 게임입니다.',
    keywords: '컬러 매치, 색깔 맞추기, 색상 감각, 순발력 테스트, 웹 게임',
    ogTitle: '🎨 컬러 매치 게임',
    ogDescription: '당신의 색상 감각은 얼마나 뛰어날까요? 지금 바로 확인해보세요!',
  },
  'flappy-game': {
    title: '플래피 게임 | AIverse-phi - 장애물 피하기 게임',
    description:
      '화면을 클릭하여 캐릭터를 날아오르게 하고, 장애물을 피해 최대한 멀리 나아가는 아케이드 게임입니다.',
    keywords: '플래피 게임, 장애물 피하기, 아케이드 게임, 웹 게임, 컨트롤 게임',
    ogTitle: '🐦 플래피 게임',
    ogDescription: '장애물을 피해 더 멀리 날아보세요! 당신의 컨트롤 실력은?',
  },
  'math-quiz': {
    title: '수학 퀴즈 게임 | AIverse-phi - 두뇌 훈련 퀴즈',
    description:
      '제한 시간 안에 다양한 수학 문제를 풀어 암산 능력과 문제 해결 능력을 향상시키는 두뇌 훈련 게임입니다.',
    keywords: '수학 퀴즈, 암산 게임, 두뇌 훈련, 산수 문제, 웹 게임',
    ogTitle: '🧮 수학 퀴즈 게임',
    ogDescription: '두뇌를 깨워보세요! 제한 시간 안에 수학 천재가 되어보세요.',
  },
  'maze-runner': {
    title: '메이즈 러너 게임 | AIverse-phi - 미로 탈출 게임',
    description:
      '복잡한 미로 속에서 출구를 찾아 탈출하는 길 찾기 게임으로, 공간 지각 능력과 문제 해결 능력을 시험합니다.',
    keywords: '메이즈 러너, 미로 찾기, 미로 탈출, 길 찾기 게임, 웹 게임',
    ogTitle: '🗺️ 메이즈 러너 게임',
    ogDescription: '복잡한 미로를 탈출하고 당신의 길 찾기 능력을 증명하세요!',
  },
  'memory-cards': {
    title: '기억력 카드 게임 | AIverse-phi - 기억력 향상 게임',
    description:
      '뒤집힌 카드들 중에서 같은 그림의 카드를 찾아 맞추며 기억력과 집중력을 향상시키는 게임입니다.',
    keywords: '기억력 카드, 카드 맞추기, 메모리 게임, 두뇌 훈련, 웹 게임',
    ogTitle: '🧠 기억력 카드 게임',
    ogDescription: '당신의 기억력을 시험해보세요! 모든 카드 쌍을 찾아보세요.',
  },
  'reaction-test': {
    title: '반응속도 테스트 게임 | AIverse-phi - 순발력 측정',
    description:
      '화면의 신호에 따라 최대한 빠르게 반응하여 클릭하고, 당신의 순발력과 반응속도를 밀리초(ms) 단위로 측정해보세요.',
    keywords: '반응속도 테스트, 순발력 측정, 클릭 속도, 웹 게임, 집중력 게임',
    ogTitle: '⚡️ 반응속도 테스트',
    ogDescription: '당신의 반응속도는 상위 몇 %일까요? 지금 바로 측정해보세요!',
  },
  'simon-says': {
    title: '사이먼 세이즈 게임 | AIverse-phi - 기억력 챌린지',
    description:
      '컴퓨터가 제시하는 색상과 소리의 순서를 기억했다가 그대로 따라하며 기억력의 한계에 도전하는 게임입니다.',
    keywords: '사이먼 세이즈, 기억력 게임, 순서 기억, 두뇌 훈련, 웹 게임',
    ogTitle: '🎶 사이먼 세이즈 게임',
    ogDescription: '빛과 소리의 순서를 기억하고 한계에 도전해보세요!',
  },
  'sliding-puzzle': {
    title: '슬라이딩 퍼즐 게임 | AIverse-phi - 이미지 퍼즐',
    description:
      '흩어진 그림 조각들을 움직여 원래의 완전한 그림으로 맞추는 클래식 슬라이딩 퍼즐 게임입니다.',
    keywords: '슬라이딩 퍼즐, 이미지 퍼즐, 숫자 퍼즐, 두뇌 게임, 웹 게임',
    ogTitle: '🧩 슬라이딩 퍼즐 게임',
    ogDescription: '흩어진 조각을 맞춰 아름다운 그림을 완성해보세요!',
  },
  'snake-game': {
    title: '스네이크 게임 | AIverse-phi - 클래식 아케이드',
    description:
      '먹이를 먹고 점점 길어지는 뱀을 조종하여 벽이나 자신의 몸에 부딪히지 않고 최고 점수를 기록하는 고전 게임입니다.',
    keywords: '스네이크 게임, 뱀 게임, 고전 게임, 아케이드, 웹 게임',
    ogTitle: '🐍 스네이크 게임',
    ogDescription: '추억의 스네이크 게임! 먹이를 먹고 가장 긴 뱀이 되어보세요.',
  },
  'speed-clicker': {
    title: '스피드 클리커 게임 | AIverse-phi - 클릭 속도 측정',
    description:
      '제한된 시간 안에 마우스를 최대한 빠르게 클릭하여 당신의 클릭 속도(CPS)를 측정하는 간단한 게임입니다.',
    keywords: '스피드 클리커, 클릭 속도 테스트, CPS, 순발력 게임, 웹 게임',
    ogTitle: '🖱️ 스피드 클리커 게임',
    ogDescription: '10초 안에 몇 번이나 클릭할 수 있나요? 당신의 한계에 도전하세요!',
  },
  'tic-tac-toe': {
    title: '틱택토 게임 | AIverse-phi - 클래식 보드 게임',
    description:
      '두 명의 플레이어가 번갈아 가며 O와 X를 놓아 같은 모양을 세 개 연속으로 먼저 만드는 사람이 승리하는 고전 전략 게임입니다.',
    keywords: '틱택토, O-X 게임, 보드 게임, 전략 게임, 2인용 게임',
    ogTitle: '⭕️❌ 틱택토 게임',
    ogDescription: '친구 또는 AI와 함께 즐기는 클래식 틱택토 한 판!',
  },
  'whack-a-mole': {
    title: '두더지 잡기 게임 | AIverse-phi - 순발력 게임',
    description:
      '여러 구멍에서 랜덤하게 나타나는 두더지를 망치로 빠르게 잡아서 점수를 획득하는 순발력과 반응속도 게임입니다.',
    keywords: '두더지 잡기, 순발력 게임, 반응속도, 아케이드, 웹 게임',
    ogTitle: '🔨 두더지 잡기 게임',
    ogDescription: '튀어나오는 두더지를 놓치지 마세요! 최고의 사냥꾼이 되어보세요.',
  },
};

export const getTestMeta = (testId: string): TestMetaData => {
  return (
    testMetaData[testId] || {
      title: 'AIverse-phi - AI의 모든 것을 체험하다',
      description:
        'AI 얼굴 분석, MBTI 테스트, 성격 분석 등 다양한 AI 테스트를 무료로 체험해보세요!',
      keywords: 'AI 테스트, 얼굴 분석, MBTI 테스트, 성격 테스트',
    }
  );
};

// 테스트별 썸네일 URL 생성 함수
export const getTestThumbnailUrl = (testId: string): string => {
  // 모든 testMetaData 키를 동적으로 가져와서 확인
  const allTestIds = Object.keys(testMetaData);

  if (allTestIds.includes(testId)) {
    return `https://aiverse-phi.vercel.app/images/thumbnails/${testId}.png`;
  }

  // 일치하는 ID가 없으면 기본 이미지 URL 반환
  return getDefaultSiteImage();
};

// 기본 사이트 이미지 URL
export const getDefaultSiteImage = (): string => {
  return 'https://aiverse-phi.vercel.app/images/aiverse-og-image.png';
};
