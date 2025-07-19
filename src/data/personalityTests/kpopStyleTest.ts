import type { PersonalityTestData } from '@/types/personalityTest';

export const kpopStyleTestData: PersonalityTestData = {
  id: 'kpop-style-test',
  title: '🎵 내 K-pop 그룹 스타일 테스트',
  description: '당신의 성향과 가장 잘 맞는 K-pop 그룹을 찾아보세요!',
  category: 'entertainment',
  resultTypes: ['bts', 'blackpink', 'twice', 'stray_kids', 'itzy', 'aespa', 'newjeans', 'ive'],
  questions: [
    {
      id: 'q1',
      question: '친구들과 노래방에 갔을 때 당신의 모습은?',
      options: [
        {
          id: 'q1_a',
          text: '감성적인 발라드로 분위기 메이커',
          emoji: '🎤',
          scores: { bts: 3, newjeans: 2, twice: 1 },
        },
        {
          id: 'q1_b',
          text: '파워풀한 댄스곡으로 무대 장악',
          emoji: '💃',
          scores: { blackpink: 3, itzy: 2, ive: 1 },
        },
        {
          id: 'q1_c',
          text: '귀여운 곡으로 모두를 미소짓게',
          emoji: '😊',
          scores: { twice: 3, newjeans: 2, ive: 1 },
        },
        {
          id: 'q1_d',
          text: '힙합으로 카리스마 발산',
          emoji: '🔥',
          scores: { stray_kids: 3, blackpink: 2, bts: 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '선호하는 패션 스타일은?',
      options: [
        {
          id: 'q2_a',
          text: '미니멀하고 세련된 스트리트',
          emoji: '👕',
          scores: { newjeans: 3, bts: 2 },
        },
        {
          id: 'q2_b',
          text: '화려하고 독특한 하이패션',
          emoji: '✨',
          scores: { aespa: 3, blackpink: 2 },
        },
        {
          id: 'q2_c',
          text: '깔끔하고 우아한 클래식',
          emoji: '👗',
          scores: { ive: 3, twice: 2 },
        },
        {
          id: 'q2_d',
          text: '편안하고 캐주얼한 스포티',
          emoji: '👟',
          scores: { stray_kids: 3, itzy: 2 },
        },
      ],
    },
    {
      id: 'q3',
      question: '무대 위에서 가장 중요하다고 생각하는 것은?',
      options: [
        {
          id: 'q3_a',
          text: '완벽한 라이브와 보컬 실력',
          emoji: '🎤',
          scores: { bts: 2, newjeans: 2, ive: 2 },
        },
        {
          id: 'q3_b',
          text: '강렬한 퍼포먼스와 무대 장악력',
          emoji: '🔥',
          scores: { blackpink: 3, stray_kids: 3, itzy: 2 },
        },
        {
          id: 'q3_c',
          text: '멤버들 간의 팀워크와 시너지',
          emoji: '🤝',
          scores: { twice: 3, newjeans: 2, bts: 1 },
        },
        {
          id: 'q3_d',
          text: '독특하고 미래적인 컨셉 소화력',
          emoji: '✨',
          scores: { aespa: 3, ive: 2, blackpink: 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: '좋아하는 음악 장르는?',
      options: [
        {
          id: 'q4_a',
          text: '힙합 기반의 강렬한 비트',
          emoji: '🎧',
          scores: { stray_kids: 3, blackpink: 2, bts: 1 },
        },
        {
          id: 'q4_b',
          text: '청량하고 밝은 팝 멜로디',
          emoji: '🎶',
          scores: { twice: 3, newjeans: 2, ive: 1 },
        },
        {
          id: 'q4_c',
          text: '몽환적이고 실험적인 사운드',
          emoji: '🌌',
          scores: { aespa: 3, itzy: 2, bts: 1 },
        },
        {
          id: 'q4_d',
          text: '감성적이고 서정적인 R&B',
          emoji: '🎶',
          scores: { bts: 3, newjeans: 2, ive: 2 },
        },
      ],
    },
    {
      id: 'q5',
      question: '앨범 컨셉으로 가장 끌리는 것은?',
      options: [
        {
          id: 'q5_a',
          text: '사회 비판적 메시지가 담긴 컨셉',
          emoji: '💬',
          scores: { bts: 3, stray_kids: 2 },
        },
        {
          id: 'q5_b',
          text: '당당하고 자신감 넘치는 걸크러쉬 컨셉',
          emoji: '😎',
          scores: { blackpink: 3, itzy: 2, aespa: 1 },
        },
        {
          id: 'q5_c',
          text: '사랑스럽고 에너제틱한 청량 컨셉',
          emoji: '💖',
          scores: { twice: 3, ive: 2, newjeans: 1 },
        },
        {
          id: 'q5_d',
          text: '미래지향적이고 사이버펑크적인 컨셉',
          emoji: '🤖',
          scores: { aespa: 3, stray_kids: 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: 'K-pop 콘텐츠 중 가장 즐겨 보는 것은?',
      options: [
        {
          id: 'q6_a',
          text: '무대 퍼포먼스 영상',
          emoji: '🌟',
          scores: { blackpink: 3, stray_kids: 3, itzy: 2, aespa: 2 },
        },
        {
          id: 'q6_b',
          text: '멤버들의 비하인드 스토리나 브이로그',
          emoji: '📸',
          scores: { bts: 2, twice: 3, newjeans: 2, ive: 2 },
        },
        {
          id: 'q6_c',
          text: '음악방송 무대 직캠',
          emoji: '🎥',
          scores: { itzy: 2, ive: 2, aespa: 2 },
        },
        {
          id: 'q6_d',
          text: '예능 프로그램 출연 영상',
          emoji: '😂',
          scores: { twice: 2, bts: 1, newjeans: 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: 'K-pop 아이돌이 된다면 맡고 싶은 포지션은?',
      options: [
        {
          id: 'q7_a',
          text: '그룹의 중심을 잡는 리더',
          emoji: '👑',
          scores: { bts: 2, stray_kids: 2, ive: 2 },
        },
        {
          id: 'q7_b',
          text: '강렬한 랩으로 존재감 뿜뿜',
          emoji: '🎤',
          scores: { blackpink: 3, stray_kids: 3, itzy: 2 },
        },
        {
          id: 'q7_c',
          text: '사랑스러운 비주얼 담당',
          emoji: '💖',
          scores: { twice: 3, ive: 3, newjeans: 2 },
        },
        {
          id: 'q7_d',
          text: '몽환적인 분위기의 보컬',
          emoji: '🎶',
          scores: { aespa: 3, newjeans: 2, bts: 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '팬들에게 어떤 그룹으로 기억되고 싶나요?',
      options: [
        {
          id: 'q8_a',
          text: '음악으로 위로와 희망을 주는 그룹',
          emoji: '🌟',
          scores: { bts: 3, newjeans: 2, twice: 1 },
        },
        {
          id: 'q8_b',
          text: '무대 위에서 늘 새로운 충격을 주는 그룹',
          emoji: '💥',
          scores: { blackpink: 3, stray_kids: 2, aespa: 2 },
        },
        {
          id: 'q8_c',
          text: '밝고 긍정적인 에너지로 행복을 주는 그룹',
          emoji: '☀️',
          scores: { twice: 3, ive: 2, newjeans: 1 },
        },
        {
          id: 'q8_d',
          text: '독보적인 컨셉과 세계관을 가진 그룹',
          emoji: '🌌',
          scores: { aespa: 3, stray_kids: 2, blackpink: 1 },
        },
      ],
    },
    {
      id: 'q9',
      question: 'K-pop 앨범 구매 시 가장 중요하게 생각하는 것은?',
      options: [
        {
          id: 'q9_a',
          text: '수록곡 전체의 완성도',
          emoji: '💿',
          scores: { bts: 3, stray_kids: 2, newjeans: 2 },
        },
        {
          id: 'q9_b',
          text: '앨범 패키지와 포토카드 디자인',
          emoji: '📦',
          scores: { blackpink: 2, aespa: 2, ive: 2 },
        },
        {
          id: 'q9_c',
          text: '타이틀곡의 중독성',
          emoji: '🎧',
          scores: { twice: 3, itzy: 2, ive: 2 },
        },
        {
          id: 'q9_d',
          text: '숨겨진 메시지나 세계관 해석',
          emoji: '🧩',
          scores: { aespa: 3, bts: 2, stray_kids: 1 },
        },
      ],
    },
    {
      id: 'q10',
      question: '어떤 유형의 안무를 선호하나요?',
      options: [
        {
          id: 'q10_a',
          text: '절도 있고 파워풀한 칼군무',
          emoji: '💪',
          scores: { stray_kids: 3, itzy: 3, aespa: 2 },
        },
        {
          id: 'q10_b',
          text: '부드럽고 유려한 선의 안무',
          emoji: '🩰',
          scores: { newjeans: 3, bts: 2, ive: 2 },
        },
        {
          id: 'q10_c',
          text: '개성 넘치고 자유로운 프리스타일',
          emoji: '🤸',
          scores: { blackpink: 2, stray_kids: 2, itzy: 2 },
        },
        {
          id: 'q10_d',
          text: '대중적이고 따라하기 쉬운 포인트 안무',
          emoji: '💃',
          scores: { twice: 3, ive: 2 },
        },
      ],
    },
    {
      id: 'q11',
      question: 'K-pop 팬덤 활동 중 가장 끌리는 것은?',
      options: [
        {
          id: 'q11_a',
          text: '스트리밍 및 투표 참여',
          emoji: '🗳️',
          scores: { bts: 2, stray_kids: 2, blackpink: 2 },
        },
        {
          id: 'q11_b',
          text: '굿즈 수집 및 덕질 용품 DIY',
          emoji: '🛍️',
          scores: { twice: 2, newjeans: 2, ive: 2 },
        },
        {
          id: 'q11_c',
          text: '팬들과 함께 그룹 분석 및 이론 공유',
          emoji: '🔍',
          scores: { aespa: 3, bts: 2, stray_kids: 1 },
        },
        {
          id: 'q11_d',
          text: '오프라인 행사(팬사인회, 생일 카페 등) 참여',
          emoji: '🥳',
          scores: { twice: 3, newjeans: 2, ive: 2 },
        },
      ],
    },
    {
      id: 'q12',
      question: '콘텐츠를 만들 때 어떤 점에 집중하나요?',
      options: [
        {
          id: 'q12_a',
          text: '감동적인 스토리텔링과 메시지',
          emoji: '📜',
          scores: { bts: 3, newjeans: 2 },
        },
        {
          id: 'q12_b',
          text: '시선을 사로잡는 비주얼과 트렌디함',
          emoji: '✨',
          scores: { blackpink: 3, aespa: 2, ive: 2 },
        },
        {
          id: 'q12_c',
          text: '재미있고 유쾌한 분위기',
          emoji: '😂',
          scores: { twice: 3, itzy: 2 },
        },
        {
          id: 'q12_d',
          text: '강렬한 몰입감을 주는 사운드와 퍼포먼스',
          emoji: '🎧',
          scores: { stray_kids: 3, itzy: 2, aespa: 2 },
        },
      ],
    },
    {
      id: 'q13',
      question: '아이돌의 리얼리티 프로그램에서 선호하는 장면은?',
      options: [
        {
          id: 'q13_a',
          text: '진솔한 속마음을 털어놓는 순간',
          emoji: '🥺',
          scores: { bts: 3, newjeans: 2, ive: 1 },
        },
        {
          id: 'q13_b',
          text: '예측 불가능한 돌발 상황과 그에 대한 반응',
          emoji: '🤪',
          scores: { stray_kids: 3, itzy: 2, blackpink: 1 },
        },
        {
          id: 'q13_c',
          text: '멤버들끼리 장난치며 웃는 유쾌한 모습',
          emoji: '🤣',
          scores: { twice: 3, newjeans: 2, ive: 1 },
        },
        {
          id: 'q13_d',
          text: '새로운 도전에 임하며 성장하는 모습',
          emoji: '📈',
          scores: { aespa: 2, bts: 2, stray_kids: 2 },
        },
      ],
    },
    {
      id: 'q14',
      question: 'K-pop 콘서트에서 가장 기대하는 순간은?',
      options: [
        {
          id: 'q14_a',
          text: '팬들과 아티스트가 하나 되는 떼창',
          emoji: '🎶',
          scores: { bts: 3, twice: 2, newjeans: 2 },
        },
        {
          id: 'q14_b',
          text: '화려한 무대 연출과 스페셜 이펙트',
          emoji: '🎆',
          scores: { blackpink: 3, aespa: 3, stray_kids: 2 },
        },
        {
          id: 'q14_c',
          text: '멤버들의 재치 있는 토크와 팬 서비스',
          emoji: '🗣️',
          scores: { twice: 3, ive: 2, newjeans: 1 },
        },
        {
          id: 'q14_d',
          text: '강렬한 밴드 라이브와 떼창으로 폭발하는 에너지',
          emoji: '🤘',
          scores: { stray_kids: 3, itzy: 2, blackpink: 1 },
        },
      ],
    },
    {
      id: 'q15',
      question: '어떤 이미지를 가진 그룹이 되고 싶나요?',
      options: [
        {
          id: 'q15_a',
          text: '선한 영향력을 전파하는 글로벌 아이콘',
          emoji: '🌍',
          scores: { bts: 3, newjeans: 2 },
        },
        {
          id: 'q15_b',
          text: '패션과 음악을 선도하는 트렌드세터',
          emoji: '✨',
          scores: { blackpink: 3, aespa: 2, ive: 2 },
        },
        {
          id: 'q15_c',
          text: '모두에게 사랑받는 국민 여동생/남동생 그룹',
          emoji: '❤️',
          scores: { twice: 3, newjeans: 2, ive: 2 },
        },
        {
          id: 'q15_d',
          text: '자신만의 독특한 색깔을 가진 아티스트 그룹',
          emoji: '🎨',
          scores: { stray_kids: 3, aespa: 2, itzy: 2 },
        },
      ],
    },
    {
      id: 'q16',
      question: '당신이 생각하는 K-pop의 매력은?',
      options: [
        {
          id: 'q16_a',
          text: '음악으로 전달되는 진솔한 메시지와 공감',
          emoji: '📝',
          scores: { bts: 3, newjeans: 2, ive: 1 },
        },
        {
          id: 'q16_b',
          text: '압도적인 퍼포먼스와 비주얼의 시너지',
          emoji: '🤩',
          scores: { blackpink: 3, itzy: 2, aespa: 2, ive: 2 },
        },
        {
          id: 'q16_c',
          text: '멤버들의 케미와 밝고 긍정적인 에너지',
          emoji: '😊',
          scores: { twice: 3, newjeans: 2, ive: 2 },
        },
        {
          id: 'q16_d',
          text: '장르를 넘나드는 음악적 시도와 독창성',
          emoji: '🎵',
          scores: { stray_kids: 3, aespa: 2, bts: 1 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'bts',
      title: 'BTS 스타일',
      description: '깊이 있는 메시지와 진정성으로 세계를 감동시키는 당신!',
      detailedDescription:
        '음악을 통해 사회적 메시지를 전달하고, 진정성 있는 소통을 중요하게 생각합니다. 다양한 장르를 아우르며 끊임없이 성장하려고 노력해요. 팬들과의 유대감을 소중히 여기며, 음악을 통해 긍정적인 영향력을 주고 싶어 합니다.',
      emoji: '💜',
      color: '#7B68EE',
      traits: ['진정성', '메시지 중시', '다재다능', '글로벌 마인드', '팬 사랑'],
      compatibility: {
        best: ['NewJeans', 'TWICE'],
        good: ['IVE', 'Stray Kids'],
        avoid: ['aespa'],
      },
      recommendations: {
        activities: ['콘서트 관람', '사회봉사 활동', '언어 공부', '음악 작업'],
        tips: [
          '진심을 담은 소통을 계속하세요',
          '다양한 분야에 관심을 가져보세요',
          '팬들과 적극적으로 교류하세요',
        ],
        kpopGroups: ['BTS', 'TXT', 'ENHYPEN', 'NewJeans'],
        celebrities: ['RM', '지민', '정국', '제이홉'],
      },
    },
    {
      id: 'blackpink',
      title: 'BLACKPINK 스타일',
      description: '강렬한 카리스마와 우아함을 동시에 가진 당신!',
      detailedDescription:
        '독보적인 존재감과 확실한 개성을 가지고 있습니다. 트렌드를 이끌어가며, 자신만의 스타일을 확실하게 표현하는 것을 좋아해요. 무대 위에서는 압도적인 카리스마를 뿜어내고, 패셔니스타로서의 면모도 돋보입니다.',
      emoji: '🖤',
      color: '#FF1493',
      traits: ['카리스마', '개성 강함', '트렌드세터', '자신감', '독립적', '패셔니스타'],
      compatibility: {
        best: ['ITZY', 'IVE'],
        good: ['aespa', 'Stray Kids'],
        avoid: ['NewJeans'],
      },
      recommendations: {
        activities: ['패션쇼/전시 관람', '댄스 클래스', '포토 촬영', '새로운 스타일링 시도'],
        tips: [
          '자신감을 계속 유지하세요',
          '다른 사람의 의견도 열린 마음으로 들어보세요',
          '다양한 콜라보를 시도해보세요',
        ],
        kpopGroups: ['BLACKPINK', 'ITZY', '(G)I-DLE', 'aespa'],
        celebrities: ['제니', '리사', '로제', '지수'],
      },
    },
    {
      id: 'twice',
      title: 'TWICE 스타일',
      description: '밝고 사랑스러운 에너지로 모두를 행복하게 하는 당신!',
      detailedDescription:
        '긍정적이고 활기찬 에너지로 주변을 밝게 만듭니다. 팬들과의 소통을 즐기며, 사랑스럽고 친근한 매력으로 대중에게 다가가는 것을 선호해요. 다채로운 컨셉을 소화하며 꾸준히 성장하는 모습을 보여줍니다.',
      emoji: '💖',
      color: '#FFD700', // Gold color, similar to Twice's vibrant image
      traits: ['사랑스러움', '긍정적', '친근함', '다채로움', '팀워크 중시'],
      compatibility: {
        best: ['NewJeans', 'IVE'],
        good: ['BTS'],
        avoid: ['Stray Kids'],
      },
      recommendations: {
        activities: ['팬미팅/콘서트 참여', 'VLOG 촬영', '단체 게임', '친구들과 추억 만들기'],
        tips: [
          '꾸준히 밝은 에너지를 유지하세요',
          '팬들과 소통하는 시간을 자주 가지세요',
          '다양한 컨셉에 도전해보세요',
        ],
        kpopGroups: ['TWICE', 'Red Velvet', 'GFRIEND', 'OH MY GIRL'],
        celebrities: ['나연', '사나', '모모', '지효'],
      },
    },
    {
      id: 'stray_kids',
      title: 'Stray Kids 스타일',
      description: '자신만의 강렬한 음악 세계를 구축하는 개성 넘치는 당신!',
      detailedDescription:
        '자유롭고 실험적인 음악을 추구하며, 직접 곡 작업에 참여하는 등 아티스트적인 면모가 강합니다. 강렬한 퍼포먼스와 솔직한 메시지로 자신들만의 길을 개척해나가고 싶어 합니다. 힙합 기반의 사운드를 선호해요.',
      emoji: '🐺', // Wolf, related to their fandom name "STAY" and strong image
      color: '#4B0082', // Indigo, representing depth and uniqueness
      traits: ['개성 강함', '자작곡 능력', '힙합', '강렬함', '자유로움'],
      compatibility: {
        best: ['aespa', 'ITZY'],
        good: ['BLACKPINK', 'BTS'],
        avoid: ['TWICE'],
      },
      recommendations: {
        activities: ['작곡/작사 배우기', '힙합 댄스', '음악 페스티벌', '새로운 음악 장르 탐색'],
        tips: [
          '자신만의 음악 색깔을 잃지 마세요',
          '다양한 장르와 협업을 시도해보세요',
          '팬들과의 소통을 통해 영감을 얻으세요',
        ],
        kpopGroups: ['Stray Kids', 'ATEEZ', 'NCT', 'TXT'],
        celebrities: ['방찬', '현진', '필릭스', '한'],
      },
    },
    {
      id: 'itzy',
      title: 'ITZY 스타일',
      description: '넘치는 에너지와 당당함으로 자신을 사랑하는 당신!',
      detailedDescription:
        "'자신감'과 '자아 존중'이라는 메시지를 음악으로 표현하며, 파워풀한 퍼포먼스를 선보입니다. 밝고 긍정적인 에너지를 가지고 있으며, 무대 위에서 시원시원한 매력을 발산하는 것을 즐겨요. '나다움'을 중요하게 생각합니다.",
      emoji: '👑', // Crown, for "ITZY is back" and strong concepts
      color: '#FF6347', // Tomato, for their vibrant energy
      traits: ['자신감', '걸크러쉬', '에너제틱', '파워풀', '긍정적'],
      compatibility: {
        best: ['BLACKPINK', 'Stray Kids'],
        good: ['aespa', 'IVE'],
        avoid: ['NewJeans'],
      },
      recommendations: {
        activities: [
          '스트릿 댄스 배우기',
          '자신감 키우기 프로젝트',
          '스포츠 활동',
          '친구들과 에너지 발산하기',
        ],
        tips: [
          '자신감을 잃지 마세요',
          '긍정적인 메시지를 계속 전파하세요',
          '팬들과 함께 자신을 사랑하는 법을 공유하세요',
        ],
        kpopGroups: ['ITZY', 'EVERGLOW', 'MAMAMOO', '(G)I-DLE'],
        celebrities: ['예지', '류진', '채령', '유나'],
      },
    },
    {
      id: 'aespa',
      title: 'aespa 스타일',
      description: '독특한 세계관과 미래지향적인 컨셉을 추구하는 당신!',
      detailedDescription:
        "현실과 가상 세계를 넘나드는 독창적인 세계관을 기반으로, 미래지향적인 음악과 비주얼을 선보입니다. 실험적이고 신비로운 분위기를 선호하며, 새로운 기술과 예술의 융합에 흥미를 느낍니다. '메타버스'적인 매력을 가지고 있어요.",
      emoji: '🌌', // Galaxy, for their Kwangya concept
      color: '#8A2BE2', // BlueViolet, representing mystery and futurism
      traits: ['세계관', '미래지향적', '독창적', '신비로움', '실험적'],
      compatibility: {
        best: ['Stray Kids', 'ITZY'],
        good: ['BLACKPINK', 'IVE'],
        avoid: ['BTS'],
      },
      recommendations: {
        activities: [
          'VR 체험',
          '미술 전시회 (특히 미디어 아트)',
          'SF 영화/소설 탐방',
          '새로운 기술 배우기',
        ],
        tips: [
          '자신만의 독특한 세계를 계속 확장하세요',
          '새로운 기술과 예술에 대한 호기심을 유지하세요',
          '팬들과 세계관을 공유하고 소통하세요',
        ],
        kpopGroups: ['aespa', 'NCT', 'Dreamcatcher', 'VIXX'],
        celebrities: ['카리나', '윈터', '닝닝', '지젤'],
      },
    },
    {
      id: 'newjeans',
      title: 'NewJeans 스타일',
      description: '꾸밈없이 자연스러운 매력으로 트렌드를 이끄는 당신!',
      detailedDescription:
        "힙하고 트렌디하면서도 꾸밈없는 자연스러운 매력을 지녔습니다. 편안하고 청량한 음악 스타일을 선호하며, 일상 속에서 영감을 얻어 새로운 문화를 만들어가는 것을 좋아해요. '이지 리스닝'을 지향합니다.",
      emoji: '🐰', // Rabbit, their symbolic animal
      color: '#ADD8E6', // LightBlue, for their fresh and clean image
      traits: ['자연스러움', '트렌디함', '청량함', '힙함', '이지 리스닝'],
      compatibility: {
        best: ['BTS', 'TWICE'],
        good: ['IVE'],
        avoid: ['BLACKPINK'],
      },
      recommendations: {
        activities: [
          '산책하며 음악 듣기',
          '빈티지 쇼핑',
          '필름 카메라 사진 찍기',
          '댄스 챌린지 참여',
        ],
        tips: [
          '자신만의 자연스러운 매력을 잃지 마세요',
          '일상 속에서 영감을 찾아보세요',
          '팬들과 편안하게 소통하세요',
        ],
        kpopGroups: ['NewJeans', 'LE SSERAFIM (초창기)', 'STAYC', 'IVE'],
        celebrities: ['민지', '하니', '다니엘', '해린', '혜인'],
      },
    },
    {
      id: 'ive',
      title: 'IVE 스타일',
      description: '우아하고 세련된 매력으로 시선을 사로잡는 당신!',
      detailedDescription:
        "고급스럽고 우아한 분위기를 지니고 있으며, '자신감'과 '주체성'을 강조하는 음악을 선보입니다. 아름다운 비주얼과 세련된 퍼포먼스로 대중의 마음을 사로잡으며, 완성도 높은 결과물을 추구해요. '자기애'가 강합니다.",
      emoji: '⭐', // Star, symbolizing elegance and being "I'VE" (I Have)
      color: '#DA70D6', // Orchid, for their elegant and chic vibe
      traits: ['우아함', '세련됨', '자신감', '주체적', '완성도'],
      compatibility: {
        best: ['BLACKPINK', 'TWICE'],
        good: ['BTS', 'NewJeans', 'ITZY', 'aespa'],
        avoid: ['Stray Kids'],
      },
      recommendations: {
        activities: [
          '패션 매거진 보기',
          '뮤지컬/클래식 공연 관람',
          '뷰티/스타일링 연구',
          '고급 레스토랑 탐방',
        ],
        tips: [
          '자신의 매력을 더욱 갈고 닦으세요',
          '항상 자신감을 잃지 마세요',
          '다양한 분야에서 영감을 얻어보세요',
        ],
        kpopGroups: ['IVE', 'aespa', 'Red Velvet', "Girls' Generation"],
        celebrities: ['안유진', '장원영', '리즈', '가을'],
      },
    },
  ],
};
