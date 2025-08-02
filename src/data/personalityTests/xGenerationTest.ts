import type { PersonalityTestData } from '@/types/personalityTest';

export const xGenerationTestData: PersonalityTestData = {
  id: 'x-generation-test',
  title: '💽 얼마나 X세대인가? (레트로 능력고사)',
  description:
    '90년대와 2000년대 초반의 추억 속으로! 당신은 얼마나 많은 레트로 문화를 기억하고 있을까요? 재미있는 퀴즈를 통해 당신의 숨겨진 X세대 감성을 테스트해보세요!',
  category: 'mz-lifestyle',
  resultTypes: [
    'true-x-gen', // 진정한 X세대
    'millennial-nostalgia', // 밀레니얼 향수 유저
    'early-2000s-kid', // 2000년대 초반 키드
    'new-tro-enthusiast', // 뉴트로 열정가
  ],
  questions: [
    {
      id: 'q1',
      question: '90년대~2000년대 초반, 친구들과 만나기 전 국룰처럼 하던 것은?',
      options: [
        {
          id: 'q1_a',
          text: '삐삐(Pager)로 01410 + 전화번호를 누르거나, 8282 (빨리빨리) 같은 암호를 남기기',
          emoji: '📟',
          scores: { 'true-x-gen': 3, 'early-2000s-kid': 1 },
        },
        {
          id: 'q1_b',
          text: '공중전화 박스에서 친구에게 호출하거나, 음성 사서함 확인하기',
          emoji: '📞',
          scores: { 'true-x-gen': 2, 'early-2000s-kid': 2 },
        },
        {
          id: 'q1_c',
          text: '유선 전화로 "엄마, 나 PC방 갔다 올게!" 소리치고 나가기',
          emoji: '💻',
          scores: { 'millennial-nostalgia': 3, 'early-2000s-kid': 3 },
        },
        {
          id: 'q1_d',
          text: '카카오톡 "친구에게 공유하기"로 약속 시간, 장소 정하기',
          emoji: '📱',
          scores: { 'new-tro-enthusiast': 2 },
        },
      ],
    },
    {
      id: 'q2',
      question: '다음 중, 싸이월드 BGM으로 가장 많이 쓰였던 노래는?',
      options: [
        {
          id: 'q2_a',
          text: '브라운 아이즈 - 벌써 일년',
          emoji: '🎧',
          scores: { 'millennial-nostalgia': 3, 'early-2000s-kid': 2 },
        },
        {
          id: 'q2_b',
          text: 'H.O.T. - 캔디',
          emoji: '🍬',
          scores: { 'true-x-gen': 3, 'early-2000s-kid': 1 },
        },
        {
          id: 'q2_c',
          text: '아이유 - 좋은 날',
          emoji: '🎶',
          scores: { 'new-tro-enthusiast': 3 },
        },
        {
          id: 'q2_d',
          text: '윤미래 - As Time Goes By',
          emoji: '🕰️',
          scores: { 'millennial-nostalgia': 2, 'true-x-gen': 2 },
        },
      ],
    },
    {
      id: 'q3',
      question: '학교 앞에서 팔던 추억의 불량식품은?',
      options: [
        {
          id: 'q3_a',
          text: '페인트 사탕',
          emoji: '🍭',
          scores: { 'early-2000s-kid': 3, 'millennial-nostalgia': 2 },
        },
        {
          id: 'q3_b',
          text: '아폴로',
          emoji: '🚀',
          scores: { 'true-x-gen': 3, 'millennial-nostalgia': 1 },
        },
        {
          id: 'q3_c',
          text: '밭두렁',
          emoji: '🌽',
          scores: { 'true-x-gen': 2, 'early-2000s-kid': 2 },
        },
        {
          id: 'q3_d',
          text: '달고나',
          emoji: '🍯',
          scores: { 'new-tro-enthusiast': 3 },
        },
      ],
    },
    {
      id: 'q4',
      question: '다음 중, 90년대를 주름잡았던 PC통신 서비스는?',
      options: [
        {
          id: 'q4_a',
          text: '천리안',
          emoji: '🔭',
          scores: { 'true-x-gen': 3, 'millennial-nostalgia': 1 },
        },
        {
          id: 'q4_b',
          text: '네이트온',
          emoji: '💬',
          scores: { 'millennial-nostalgia': 3, 'early-2000s-kid': 2 },
        },
        {
          id: 'q4_c',
          text: '버디버디',
          emoji: '🦜',
          scores: { 'millennial-nostalgia': 2, 'early-2000s-kid': 3 },
        },
        {
          id: 'q4_d',
          text: '카카오톡',
          emoji: '📱',
          scores: { 'new-tro-enthusiast': 2 },
        },
      ],
    },
    {
      id: 'q5',
      question: '90년대 초등학생들의 꿈의 장난감은?',
      options: [
        {
          id: 'q5_a',
          text: '미니카 (미니4WD)',
          emoji: '🏎️',
          scores: { 'true-x-gen': 3, 'millennial-nostalgia': 2 },
        },
        {
          id: 'q5_b',
          text: '다마고치',
          emoji: '🥚',
          scores: { 'true-x-gen': 2, 'early-2000s-kid': 3 },
        },
        {
          id: 'q5_c',
          text: '탑블레이드 (팽이)',
          emoji: '🌀',
          scores: { 'early-2000s-kid': 3, 'millennial-nostalgia': 2 },
        },
        {
          id: 'q5_d',
          text: '포켓몬 카드',
          emoji: '🃏',
          scores: { 'new-tro-enthusiast': 3, 'early-2000s-kid': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '다음 중, 드라마 "응답하라" 시리즈에 나올 법한 추억의 아이템은?',
      options: [
        {
          id: 'q6_a',
          text: 'VHS 비디오 테이프',
          emoji: '📼',
          scores: { 'true-x-gen': 3, 'millennial-nostalgia': 2 },
        },
        {
          id: 'q6_b',
          text: 'MP3 플레이어',
          emoji: '💾',
          scores: { 'millennial-nostalgia': 3, 'early-2000s-kid': 3 },
        },
        {
          id: 'q6_c',
          text: 'CD플레이어',
          emoji: '💿',
          scores: { 'early-2000s-kid': 2, 'true-x-gen': 2 },
        },
        {
          id: 'q6_d',
          text: '아이팟',
          emoji: '🎶',
          scores: { 'new-tro-enthusiast': 2 },
        },
      ],
    },
    {
      id: 'q7',
      question: '"오렌지족"이나 "야타족"이라는 단어를 듣고 떠오르는 것은?',
      options: [
        {
          id: 'q7_a',
          text: '90년대 압구정 문화를 상징하는 신조어.',
          emoji: '🍊',
          scores: { 'true-x-gen': 3, 'millennial-nostalgia': 1 },
        },
        {
          id: 'q7_b',
          text: '친구와 함께 해본 유행어 따라잡기.',
          emoji: '🗣️',
          scores: { 'millennial-nostalgia': 2, 'early-2000s-kid': 1 },
        },
        {
          id: 'q7_c',
          text: '드라마나 영화에서 들어본 것 같은 오래된 단어.',
          emoji: '📺',
          scores: { 'early-2000s-kid': 2, 'new-tro-enthusiast': 1 },
        },
        {
          id: 'q7_d',
          text: '무슨 뜻인지 잘 모르겠지만, 재미있는 밈(meme) 같다.',
          emoji: '😂',
          scores: { 'new-tro-enthusiast': 3 },
        },
      ],
    },
    {
      id: 'q8',
      question: '90년대~2000년대 초, 국민 오락실 게임은?',
      options: [
        {
          id: 'q8_a',
          text: '보글보글 (Bubble Bobble)',
          emoji: '🐸',
          scores: { 'true-x-gen': 3, 'millennial-nostalgia': 1 },
        },
        {
          id: 'q8_b',
          text: '펌프 잇 업 (Pump It Up)',
          emoji: '🕺',
          scores: { 'millennial-nostalgia': 3, 'early-2000s-kid': 2 },
        },
        {
          id: 'q8_c',
          text: '철권 (Tekken)',
          emoji: '🥊',
          scores: { 'early-2000s-kid': 3, 'millennial-nostalgia': 2 },
        },
        {
          id: 'q8_d',
          text: '스트리트 파이터 (Street Fighter)',
          emoji: '🥋',
          scores: { 'true-x-gen': 2, 'millennial-nostalgia': 2 },
        },
      ],
    },
    {
      id: 'q9',
      question: '다음 중, 2000년대 초반 "간지"의 상징이었던 패션 아이템은?',
      options: [
        {
          id: 'q9_a',
          text: '나팔바지 (부츠컷)',
          emoji: '👖',
          scores: { 'millennial-nostalgia': 3, 'early-2000s-kid': 2 },
        },
        {
          id: 'q9_b',
          text: '응원용 머리띠',
          emoji: '🪮',
          scores: { 'true-x-gen': 3, 'millennial-nostalgia': 1 },
        },
        {
          id: 'q9_c',
          text: '배꼽티',
          emoji: '👚',
          scores: { 'true-x-gen': 2, 'early-2000s-kid': 2 },
        },
        {
          id: 'q9_d',
          text: '힙색 (Hip Sack)',
          emoji: '👜',
          scores: { 'new-tro-enthusiast': 3 },
        },
      ],
    },
    {
      id: 'q10',
      question: '추억의 PC 게임을 떠올린다면?',
      options: [
        {
          id: 'q10_a',
          text: '바람의나라',
          emoji: '🐉',
          scores: { 'true-x-gen': 3, 'millennial-nostalgia': 2 },
        },
        {
          id: 'q10_b',
          text: '스타크래프트',
          emoji: '👾',
          scores: { 'millennial-nostalgia': 3, 'early-2000s-kid': 3 },
        },
        {
          id: 'q10_c',
          text: '카트라이더',
          emoji: '🚗',
          scores: { 'early-2000s-kid': 3, 'millennial-nostalgia': 2 },
        },
        {
          id: 'q10_d',
          text: '서든어택',
          emoji: '🔫',
          scores: { 'new-tro-enthusiast': 2, 'early-2000s-kid': 2 },
        },
      ],
    },
    {
      id: 'q11',
      question: '다음 중, "레트로"가 아닌 것은?',
      options: [
        {
          id: 'q11_a',
          text: 'LP판',
          emoji: '🎶',
          scores: { 'new-tro-enthusiast': 2 },
        },
        {
          id: 'q11_b',
          text: '필름 카메라',
          emoji: '📸',
          scores: { 'new-tro-enthusiast': 2 },
        },
        {
          id: 'q11_c',
          text: '폴더폰',
          emoji: '📱',
          scores: { 'new-tro-enthusiast': 2 },
        },
        {
          id: 'q11_d',
          text: 'AI 스마트폰',
          emoji: '🤖',
          scores: { 'true-x-gen': 3, 'millennial-nostalgia': 3, 'early-2000s-kid': 3 },
        },
      ],
    },
    {
      id: 'q12',
      question: '지금 "X세대"라는 단어를 들으면 드는 생각은?',
      options: [
        {
          id: 'q12_a',
          text: '나의 전성기, 문화 트렌드를 이끌었던 세대.',
          emoji: '🌟',
          scores: { 'true-x-gen': 3, 'millennial-nostalgia': 2 },
        },
        {
          id: 'q12_b',
          text: '아빠, 엄마 세대 이야기인가?',
          emoji: '👨‍👩‍👧',
          scores: { 'early-2000s-kid': 3, 'new-tro-enthusiast': 2 },
        },
        {
          id: 'q12_c',
          text: '옛날 이야기 같아서 신기하고 재밌다.',
          emoji: '👀',
          scores: { 'new-tro-enthusiast': 3, 'early-2000s-kid': 2 },
        },
        {
          id: 'q12_d',
          text: '나도 이제 X세대인가... 조금 서글퍼진다.',
          emoji: '😥',
          scores: { 'true-x-gen': 2, 'millennial-nostalgia': 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'true-x-gen',
      title: '💯 진정한 X세대 (추억 부자)',
      description: '당신은 90년대 문화를 온몸으로 경험하고 기억하는 진정한 X세대입니다!',
      detailedDescription:
        '삐삐, PC통신, H.O.T.와 젝스키스, 오렌지족까지, 당시의 유행과 감성을 생생하게 기억하고 있습니다. 당신에게 레트로는 단순한 유행이 아니라, 젊은 시절의 소중한 추억 그 자체입니다. 요즘 유행하는 뉴트로(New+Retro)는 당신에게 추억 여행을 떠나게 해주는 즐거운 놀이입니다.',
      emoji: '💯',
      color: '#008080', // Teal
      traits: ['원조 레트로', '추억 부자', '시대의 증인', '낭만적', '경험 중시'],
      compatibility: {
        best: ['밀레니얼 향수 유저', '2000년대 초반 키드'],
        good: [],
        avoid: ['뉴트로 열정가'],
      },
      recommendations: {
        activities: ['레트로 콘셉트의 카페 방문하기', '옛날 친구들과 함께 추억의 장소 가보기'],
        movies: ['<응답하라> 시리즈 정주행', '90년대 개봉 영화 다시 보기'],
        hashtags: ['#X세대', '#추억소환', '#90년대감성', '#진정한레트로'],
      },
    },
    {
      id: 'millennial-nostalgia',
      title: '📻 밀레니얼 향수 유저',
      description:
        '당신은 90년대 말부터 2000년대 초반의 감성을 가장 깊이 간직한 밀레니얼 세대입니다.',
      detailedDescription:
        'CD 플레이어, 싸이월드 BGM, 버디버디, 스타크래프트 등 2000년대의 기술과 문화를 생생하게 기억하고 있습니다. 당신에게 레트로는 디지털 과도기 속에서 아날로그 감성을 즐기던 특별한 시절의 향수입니다. 당시의 유행을 다시 만나면 반가움을 금치 못하는 타입입니다.',
      emoji: '📻',
      color: '#8A2BE2', // BlueViolet
      traits: ['향수', '디지털 원년세대', '유행 민감', '공감 능력'],
      compatibility: {
        best: ['진정한 X세대', '2000년대 초반 키드'],
        good: ['뉴트로 열정가'],
        avoid: ['오리지널 X세대'],
      },
      recommendations: {
        activities: ['싸이월드 계정 복원하기', '추억의 BGM으로 플레이리스트 만들기'],
        movies: ['<응답하라 1997> 다시보기', '2000년대 초반 한국 영화 다시 보기'],
        hashtags: ['#밀레니얼세대', '#싸이월드', '#추억의BGM', '#2000년대감성'],
      },
    },
    {
      id: 'early-2000s-kid',
      title: '📺 2000년대 초반 키드',
      description: '당신은 2000년대 초반의 유년기를 보낸, 레트로 감성의 막내 세대입니다.',
      detailedDescription:
        'CD 플레이어, 펌프 잇 업, 카트라이더 등 2000년대 초반의 대중문화를 주로 접했습니다. 당신에게 레트로는 어렴풋이 기억나는 어린 시절의 추억입니다. 당시의 유행을 보면 "아! 맞아, 저런 것도 있었지!" 하며 반가워하는 유형입니다. 뉴트로를 통해 과거를 새롭게 탐험하는 것을 즐깁니다.',
      emoji: '📺',
      color: '#FF4500', // OrangeRed
      traits: ['어린 시절 추억', '호기심', '신세대적 레트로', '경험 학습'],
      compatibility: {
        best: ['밀레니얼 향수 유저', '뉴트로 열정가'],
        good: ['진정한 X세대'],
        avoid: ['90년대 X세대'],
      },
      recommendations: {
        activities: [
          '오락실에서 펌프 잇 업 다시 해보기',
          '옛날 친구들과 함께 PC방에서 카트라이더 한판!',
        ],
        movies: ['<엽기적인 그녀>나 <클래식> 같은 2000년대 초반 영화 감상'],
        hashtags: ['#2000년대', '#어린이시절', '#추억소환', '#뉴트로'],
      },
    },
    {
      id: 'new-tro-enthusiast',
      title: '✨ 뉴트로 열정가',
      description: '당신은 과거의 것을 새롭게 해석하고 즐기는 트렌디한 뉴트로 열정가입니다!',
      detailedDescription:
        '과거의 물건이나 문화를 직접 경험하진 못했지만, 그 독특한 감성과 디자인에 매력을 느낍니다. 레트로 패션, 필름 카메라, LP판 등을 수집하며, 과거의 것을 현시대에 맞춰 재해석하는 데 능숙합니다. 당신에게 레트로는 촌스럽고 오래된 것이 아니라, 힙하고 멋있는 새로운 문화 트렌드입니다.',
      emoji: '✨',
      color: '#FF69B4', // HotPink
      traits: ['트렌디', '탐구적', '패셔니스타', '신선함 추구', '재해석'],
      compatibility: {
        best: ['2000년대 초반 키드'],
        good: ['밀레니얼 향수 유저'],
        avoid: ['진정한 X세대'],
      },
      recommendations: {
        activities: ['LP바에서 좋아하는 음악 감상하기', '필름 카메라로 친구들과 사진 찍기'],
        movies: ['최신 유행하는 뉴트로 감성의 영화나 드라마 시청'],
        hashtags: ['#뉴트로', '#힙지로', '#필름카메라', '#LP바'],
      },
    },
  ],
};
