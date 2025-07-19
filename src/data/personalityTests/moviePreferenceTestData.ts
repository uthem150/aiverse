import type { PersonalityTestData } from '@/types/personalityTest';

export const moviePreferenceTestData: PersonalityTestData = {
  id: 'movie-preference-test',
  title: '🎬 나의 영화 취향 테스트',
  description:
    '어떤 영화를 좋아하시나요? 당신의 영화 취향을 분석하고, 숨겨진 인생 영화를 찾아보세요!',
  category: 'lifestyle',
  resultTypes: [
    'action-thriller-addict', // 액션/스릴러 매니아
    'romantic-comedy-lover', // 로맨틱 코미디 애호가
    'fantasy-sci-fi-explorer', // 판타지/SF 탐험가
    'drama-melodrama-aficionado', // 드라마/멜로 통달자
    'documentary-intellectual', // 다큐멘터리 지식인
    'animation-fantasy-dreamer', // 애니메이션/환상 동화형
    'horror-mystery-seeker', // 공포/미스터리 추적자
    'indie-art-film-connoisseur', // 독립/예술 영화 감별사
  ],
  questions: [
    {
      id: 'q1',
      question: '주말 저녁, 어떤 영화를 볼지 고민한다면?',
      options: [
        {
          id: 'q1_a',
          text: '화끈한 액션과 예측 불가능한 스릴을 주는 영화!',
          emoji: '💥',
          scores: { 'action-thriller-addict': 3, 'horror-mystery-seeker': 1 },
        },
        {
          id: 'q1_b',
          text: '마음을 따뜻하게 해주는 로맨틱 코미디나 감동적인 드라마.',
          emoji: '💖',
          scores: { 'romantic-comedy-lover': 3, 'drama-melodrama-aficionado': 2 },
        },
        {
          id: 'q1_c',
          text: '새로운 세계관을 탐험하는 판타지나 미래를 상상하는 SF.',
          emoji: '✨',
          scores: { 'fantasy-sci-fi-explorer': 3, 'animation-fantasy-dreamer': 2 },
        },
        {
          id: 'q1_d',
          text: '깊은 생각에 잠기게 하는 다큐멘터리나 사회 비판 영화.',
          emoji: '🤔',
          scores: { 'documentary-intellectual': 3, 'indie-art-film-connoisseur': 2 },
        },
      ],
    },
    {
      id: 'q2',
      question: '영화 선택 시 가장 중요하게 생각하는 요소는?',
      options: [
        {
          id: 'q2_a',
          text: '빠른 전개와 짜릿한 몰입감.',
          emoji: '⚡',
          scores: { 'action-thriller-addict': 3, 'horror-mystery-seeker': 2 },
        },
        {
          id: 'q2_b',
          text: '배우들의 연기력과 캐릭터 간의 케미.',
          emoji: '🎭',
          scores: { 'drama-melodrama-aficionado': 3, 'romantic-comedy-lover': 2 },
        },
        {
          id: 'q2_c',
          text: '독창적인 상상력과 시각적 효과.',
          emoji: '🌌',
          scores: { 'fantasy-sci-fi-explorer': 3, 'animation-fantasy-dreamer': 3 },
        },
        {
          id: 'q2_d',
          text: '메시지와 의미, 그리고 영화가 주는 새로운 관점.',
          emoji: '💡',
          scores: { 'documentary-intellectual': 3, 'indie-art-film-connoisseur': 3 },
        },
      ],
    },
    {
      id: 'q3',
      question: '영화가 끝난 후, 당신의 반응은?',
      options: [
        {
          id: 'q3_a',
          text: '여운이 길게 남아 계속 생각하거나 관련 정보를 찾아본다.',
          emoji: '💭',
          scores: { 'drama-melodrama-aficionado': 3, 'horror-mystery-seeker': 2 },
        },
        {
          id: 'q3_b',
          text: '친구들과 신나게 수다를 떨며 영화 속 장면을 재연한다.',
          emoji: '🥳',
          scores: { 'romantic-comedy-lover': 3, 'action-thriller-addict': 1 },
        },
        {
          id: 'q3_c',
          text: '영화의 깊은 메시지나 배경 지식에 대해 토론하고 싶다.',
          emoji: '🗣️',
          scores: { 'documentary-intellectual': 3, 'indie-art-film-connoisseur': 3 },
        },
        {
          id: 'q3_d',
          text: '그 세계관에 빠져들어 다음 편이나 관련 작품을 찾아본다.',
          emoji: '📖',
          scores: { 'fantasy-sci-fi-explorer': 3, 'animation-fantasy-dreamer': 3 },
        },
      ],
    },
    {
      id: 'q4',
      question: '영화 속 주인공이 된다면, 어떤 역할을 맡고 싶은가요?',
      options: [
        {
          id: 'q4_a',
          text: '세상을 구하는 영웅 또는 악당을 쫓는 형사.',
          emoji: '🦸',
          scores: { 'action-thriller-addict': 3, 'horror-mystery-seeker': 2 },
        },
        {
          id: 'q4_b',
          text: '사랑을 찾아가는 평범하지만 특별한 인물.',
          emoji: '💑',
          scores: { 'romantic-comedy-lover': 3, 'drama-melodrama-aficionado': 2 },
        },
        {
          id: 'q4_c',
          text: '마법 능력을 가진 존재 또는 미지의 행성을 탐험하는 우주인.',
          emoji: '🧚',
          scores: { 'fantasy-sci-fi-explorer': 3, 'animation-fantasy-dreamer': 3 },
        },
        {
          id: 'q4_d',
          text: '사회 문제를 파헤치는 기자 또는 역사적 인물.',
          emoji: '🧐',
          scores: { 'documentary-intellectual': 3, 'indie-art-film-connoisseur': 3 },
        },
      ],
    },
    {
      id: 'q5',
      question: '영화 OST를 고른다면, 어떤 분위기를 선호하나요?',
      options: [
        {
          id: 'q5_a',
          text: '웅장하고 비장한 오케스트라 사운드나 긴장감 넘치는 비트.',
          emoji: '🎶',
          scores: { 'action-thriller-addict': 3, 'horror-mystery-seeker': 2 },
        },
        {
          id: 'q5_b',
          text: '감미롭고 따뜻한 팝 발라드나 경쾌한 재즈.',
          emoji: '🎷',
          scores: { 'romantic-comedy-lover': 3, 'drama-melodrama-aficionado': 2 },
        },
        {
          id: 'q5_c',
          text: '신비롭고 몽환적인 뉴에이지나 실험적인 전자음악.',
          emoji: '🔮',
          scores: { 'fantasy-sci-fi-explorer': 3, 'animation-fantasy-dreamer': 3 },
        },
        {
          id: 'q5_d',
          text: '생각할 거리를 던져주는 가사나 깊은 울림이 있는 클래식.',
          emoji: '🎼',
          scores: { 'documentary-intellectual': 3, 'indie-art-film-connoisseur': 3 },
        },
      ],
    },
    {
      id: 'q6',
      question: '영화 평점을 매길 때, 당신의 기준은?',
      options: [
        {
          id: 'q6_a',
          text: '개연성, 연출력 등 객관적인 완성도.',
          emoji: '📏',
          scores: { 'action-thriller-addict': 1 },
        },
        {
          id: 'q6_b',
          text: '얼마나 많은 사람에게 즐거움과 감동을 주었는지.',
          emoji: '👍',
          scores: { 'romantic-comedy-lover': 2, 'drama-melodrama-aficionado': 2 },
        },
        {
          id: 'q6_c',
          text: '새로운 시도나 독창적인 아이디어가 돋보였는지.',
          emoji: '✨',
          scores: { 'fantasy-sci-fi-explorer': 3, 'indie-art-film-connoisseur': 3 },
        },
        {
          id: 'q6_d',
          text: '영화가 던지는 메시지의 깊이와 사회적 영향력.',
          emoji: '🌐',
          scores: { 'documentary-intellectual': 3, 'indie-art-film-connoisseur': 3 },
        },
      ],
    },
    {
      id: 'q7',
      question: '영화 관람 후 가장 많이 하는 행동은?',
      options: [
        {
          id: 'q7_a',
          text: '바로 다른 볼거리를 찾아본다.',
          emoji: '⏭️',
          scores: { 'action-thriller-addict': 2, 'horror-mystery-seeker': 1 },
        },
        {
          id: 'q7_b',
          text: '주변 사람들에게 영화를 추천하거나 후기를 이야기한다.',
          emoji: '📣',
          scores: { 'romantic-comedy-lover': 3, 'drama-melodrama-aficionado': 2 },
        },
        {
          id: 'q7_c',
          text: '영화에 대한 비평이나 해석 영상을 찾아본다.',
          emoji: '🔍',
          scores: { 'documentary-intellectual': 3, 'indie-art-film-connoisseur': 3 },
        },
        {
          id: 'q7_d',
          text: '영화 속 상상의 세계를 떠올리며 잠시 현실을 잊는다.',
          emoji: '💭',
          scores: { 'fantasy-sci-fi-explorer': 3, 'animation-fantasy-dreamer': 3 },
        },
      ],
    },
    {
      id: 'q8',
      question: '영화 시청 중 예상치 못한 반전이 나타났을 때, 당신의 반응은?',
      options: [
        {
          id: 'q8_a',
          text: '소름 돋으며 "미쳤다!"를 외친다.',
          emoji: '🤯',
          scores: { 'action-thriller-addict': 3, 'horror-mystery-seeker': 3 },
        },
        {
          id: 'q8_b',
          text: '충격을 받지만, 이내 감정선에 몰입한다.',
          emoji: '😲',
          scores: { 'drama-melodrama-aficionado': 2, 'romantic-comedy-lover': 1 },
        },
        {
          id: 'q8_c',
          text: '감독의 의도나 복선을 찾아보려 한다.',
          emoji: '🧐',
          scores: { 'documentary-intellectual': 2 }, // 'logical-negotiator' 제거
        },
        {
          id: 'q8_d',
          text: '놀랍지만, 이야기가 더 흥미진진해질 것이라 기대한다.',
          emoji: '🤩',
          scores: { 'fantasy-sci-fi-explorer': 3, 'animation-fantasy-dreamer': 2 },
        },
      ],
    },
    {
      id: 'q9',
      question: '가장 선호하는 영화 관람 장소는?',
      options: [
        {
          id: 'q9_a',
          text: '집에서 편안하게 다시 보기나 스트리밍 서비스.',
          emoji: '🏠',
          scores: { 'romantic-comedy-lover': 2, 'drama-melodrama-aficionado': 1 },
        },
        {
          id: 'q9_b',
          text: '큰 스크린과 웅장한 사운드를 즐길 수 있는 영화관.',
          emoji: '🍿',
          scores: { 'action-thriller-addict': 3, 'fantasy-sci-fi-explorer': 3 },
        },
        {
          id: 'q9_c',
          text: '정보와 이야기가 있는 독립영화관이나 특별 상영회.',
          emoji: '📽️',
          scores: { 'documentary-intellectual': 3, 'indie-art-film-connoisseur': 3 },
        },
        {
          id: 'q9_d',
          text: '사람들과 함께 반응하며 볼 수 있는 공개 상영회.',
          emoji: '🎉',
          scores: { 'romantic-comedy-lover': 1, 'action-thriller-addict': 1 },
        },
      ],
    },
    {
      id: 'q10',
      question: '새로운 영화를 선택하는 당신만의 방식은?',
      options: [
        {
          id: 'q10_a',
          text: '인기 차트나 유명 배우/감독 위주로 선택.',
          emoji: '📈',
          scores: { 'action-thriller-addict': 1, 'romantic-comedy-lover': 1 },
        },
        {
          id: 'q10_b',
          text: '리뷰나 평점을 꼼꼼히 확인하고 신중하게 고른다.',
          emoji: '🔍',
          scores: { 'drama-melodrama-aficionado': 2 },
        },
        {
          id: 'q10_c',
          text: '흥미로운 소재나 독특한 포스터, 예고편에 끌려 선택.',
          emoji: '✨',
          scores: { 'fantasy-sci-fi-explorer': 3, 'animation-fantasy-dreamer': 3 },
        },
        {
          id: 'q10_d',
          text: '추천 알고리즘, 친구 추천 또는 우연히 발견한 작품.',
          emoji: '✨',
          scores: { 'horror-mystery-seeker': 2, 'indie-art-film-connoisseur': 2 },
        },
      ],
    },
    {
      id: 'q11',
      question: '영화 속 장면 중 가장 기억에 남는 것은?',
      options: [
        {
          id: 'q11_a',
          text: '숨 막히는 추격전이나 예측 불가능한 반전의 순간.',
          emoji: '💥',
          scores: { 'action-thriller-addict': 3, 'horror-mystery-seeker': 3 },
        },
        {
          id: 'q11_b',
          text: '주인공들의 애틋한 사랑이나 가슴 찡한 이별 장면.',
          emoji: '💔',
          scores: { 'romantic-comedy-lover': 3, 'drama-melodrama-aficionado': 3 },
        },
        {
          id: 'q11_c',
          text: '상상력을 자극하는 압도적인 비주얼의 판타지 공간.',
          emoji: '🌌',
          scores: { 'fantasy-sci-fi-explorer': 3, 'animation-fantasy-dreamer': 3 },
        },
        {
          id: 'q11_d',
          text: '사회적 메시지를 담은 상징적인 장면이나 인물의 깊은 심리 묘사.',
          emoji: '🤔',
          scores: { 'documentary-intellectual': 3, 'indie-art-film-connoisseur': 3 },
        },
      ],
    },
    {
      id: 'q12',
      question: '영화 취향이 비슷한 친구가 있다면, 어떤 이야기를 나누고 싶은가요?',
      options: [
        {
          id: 'q12_a',
          text: '다음에는 어떤 장르의 영화를 같이 볼지 계획한다.',
          emoji: '🗓️',
          scores: { 'action-thriller-addict': 2, 'fantasy-sci-fi-explorer': 2 },
        },
        {
          id: 'q12_b',
          text: '영화 속 명대사나 명장면을 공유하며 감동을 되새긴다.',
          emoji: '💖',
          scores: { 'romantic-comedy-lover': 3, 'drama-melodrama-aficionado': 3 },
        },
        {
          id: 'q12_c',
          text: '영화의 숨겨진 의미나 감독의 의도를 심층적으로 분석한다.',
          emoji: '🔍',
          scores: { 'documentary-intellectual': 3, 'indie-art-film-connoisseur': 3 },
        },
        {
          id: 'q12_d',
          text: '영화에 대한 자신의 감상평을 솔직하게 주고받는다.',
          emoji: '💬',
          scores: { 'horror-mystery-seeker': 2, 'animation-fantasy-dreamer': 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'action-thriller-addict',
      title: '💥 액션/스릴러 매니아',
      description:
        '당신은 심장을 쫄깃하게 하는 긴장감과 스케일 큰 액션에 열광하는 영화 취향을 가지고 있습니다.',
      detailedDescription:
        '예측 불가능한 전개와 빠른 호흡, 그리고 통쾌한 액션에서 짜릿함을 느낍니다. 스트레스를 날려버리고 싶을 때나 지루함을 느낄 때, 강렬한 자극을 선호하며, 주로 블록버스터 액션, 범죄 스릴러, SF 액션 장르의 영화를 즐겨 봅니다. 반전과 추격, 그리고 숨 막히는 두뇌 싸움에 매료됩니다.',
      emoji: '💥',
      color: '#DC143C', // Crimson
      traits: ['긴장감 선호', '스릴 추구', '액션 중시', '역동적', '몰입감', '흥분'],
      compatibility: {
        best: ['👻 공포/미스터리 추적자', '🌌 판타지/SF 탐험가'],
        good: [],
        avoid: ['💖 로맨틱 코미디 애호가', '🎭 드라마/멜로 통달자'],
      },
      recommendations: {
        movies: [
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10014">매드 맥스: 분노의 도로</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10015">존 윅 시리즈</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10016">다크 나이트</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10017">인셉션</a>',
        ],
        tips: [
          '영화의 디테일한 설정이나 메시지에도 관심을 가져보세요.',
          '때로는 블록버스터가 아닌 인디 스릴러 영화도 색다른 즐거움을 줄 수 있어요.',
          '긴장감을 낮추고 편안하게 볼 수 있는 다른 장르도 시도해 보세요.',
        ],
      },
    },
    {
      id: 'romantic-comedy-lover',
      title: '💖 로맨틱 코미디 애호가',
      description:
        '당신은 사랑스러운 이야기와 유쾌한 웃음, 그리고 따뜻한 감동이 어우러진 영화를 좋아하는 순수한 감성파입니다.',
      detailedDescription:
        '가슴 설레는 로맨스와 유쾌한 코믹 요소가 적절히 섞인 영화를 보며 대리 만족을 느끼고 행복해합니다. 주로 밝고 긍정적인 메시지를 선호하며, 해피 엔딩을 통해 기분 전환을 하는 것을 즐깁니다. <브리짓 존스의 일기>, <노팅 힐> 같은 작품에서 삶의 활력을 얻습니다.',
      emoji: '💖',
      color: '#FFC0CB', // Pink
      traits: ['감성적', '긍정적', '로맨스 선호', '유머 감각', '따뜻함', '행복 추구'],
      compatibility: {
        best: ['🎭 드라마/멜로 통달자', '🧚 애니메이션/환상 동화형'],
        good: [],
        avoid: ['💥 액션/스릴러 매니아', '👻 공포/미스터리 추적자'],
      },
      recommendations: {
        movies: [
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10018">어바웃 타임</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10019">라라랜드</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10020">비긴 어게인</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10021">김종욱 찾기</a>',
        ],
        tips: [
          '로맨틱 코미디 외에 다양한 장르의 로맨스 영화도 시도해 보세요.',
          '영화 속 유머 코드에서 얻은 영감으로 일상을 더 즐겁게 만들어 보세요.',
          '가끔은 현실적인 드라마 영화도 깊은 공감을 줄 수 있습니다.',
        ],
      },
    },
    {
      id: 'fantasy-sci-fi-explorer',
      title: '🌌 판타지/SF 탐험가',
      description:
        '당신은 현실 너머의 새로운 세계와 압도적인 상상력에 매료되는 탐험가적 영화 취향을 가지고 있습니다.',
      detailedDescription:
        '마법, 외계 문명, 미래 기술 등 현실에서는 불가능한 이야기와 시각적 효과가 뛰어난 영화에서 큰 즐거움을 찾습니다. 상상력을 자극하고 새로운 관점을 제시하는 작품에 열광하며, <아바타>, <인터스텔라>, <반지의 제왕> 같은 대작을 선호합니다. 복잡한 세계관과 깊이 있는 설정에 몰입하는 것을 좋아합니다.',
      emoji: '🌌',
      color: '#8A2BE2', // Blue Violet
      traits: [
        '상상력 풍부',
        '신비로움 추구',
        '세계관 몰입',
        '미래 지향적',
        '시각적 즐거움',
        '탐험적',
      ],
      compatibility: {
        best: ['🧚 애니메이션/환상 동화형', '💥 액션/스릴러 매니아'],
        good: [],
        avoid: ['🧐 다큐멘터리 지식인', '🖼️ 독립/예술 영화 감별사'],
      },
      recommendations: {
        movies: [
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10022">듄 시리즈</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10023">블레이드 러너 2049</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10024">마블 시네마틱 유니버스</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10025">해리포터 시리즈</a>',
        ],
        tips: [
          '영화의 배경이 된 과학적/사회적 이론을 찾아보는 것도 흥미로울 거예요.',
          '판타지/SF 웹툰이나 소설도 즐겨보세요. 당신의 세계관을 더 넓혀줄 거예요.',
          '때로는 단순한 시각적 효과보다 메시지가 돋보이는 작품도 찾아보세요.',
        ],
      },
    },
    {
      id: 'drama-melodrama-aficionado',
      title: '🎭 드라마/멜로 통달자',
      description:
        '당신은 인간 본연의 감정과 섬세한 심리 묘사에 깊이 공감하는 영화 취향을 가지고 있습니다.',
      detailedDescription:
        '인생의 희로애락을 담은 드라마나 애절한 멜로 영화를 통해 감정을 이입하고 삶의 의미를 되새깁니다. 탄탄한 스토리와 배우들의 열연에 감탄하며, 영화가 끝난 후에도 긴 여운을 즐깁니다. <쇼생크 탈출>, <타이타닉>처럼 깊은 감동과 메시지를 주는 영화에서 삶의 지혜를 얻습니다.',
      emoji: '🎭',
      color: '#4682B4', // Steel Blue
      traits: ['감성적', '공감 능력', '스토리 중시', '여운', '인생 철학', '인간 관계'],
      compatibility: {
        best: ['💖 로맨틱 코미디 애호가', '🧐 다큐멘터리 지식인'],
        good: ['🖼️ 독립/예술 영화 감별사'],
        avoid: ['💥 액션/스릴러 매니아', '👻 공포/미스터리 추적자'],
      },
      recommendations: {
        movies: [
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10026">클래식</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10027">말모이</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10028">나의 특별한 형제</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10029">기생충</a> (드라마적 요소)',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10030">윤희에게</a>',
        ],
        tips: [
          '영화가 던지는 질문에 대해 스스로 답을 찾아보는 시간을 가져보세요.',
          '감동적인 이야기가 담긴 책이나 연극을 접해보는 것도 좋을 거예요.',
          '가끔은 가볍게 웃을 수 있는 코미디 영화로 분위기를 전환해 보세요.',
        ],
      },
    },
    {
      id: 'documentary-intellectual',
      title: '🧐 다큐멘터리 지식인',
      description:
        '당신은 실제 사건이나 지식 탐구에 기반한 다큐멘터리, 그리고 깊이 있는 메시지를 담은 영화에서 지적 만족을 느끼는 학구적인 취향을 가지고 있습니다.',
      detailedDescription:
        '영화가 단순한 오락을 넘어 정보를 제공하고, 새로운 시각을 제시하며, 세상을 이해하는 도구가 되기를 바랍니다. 사회 문제, 역사, 과학, 인물 등 다양한 분야의 다큐멘터리와 실화를 바탕으로 한 영화를 선호합니다. 영화를 통해 배우고 성장하는 것을 중요하게 생각합니다.',
      emoji: '🧐',
      color: '#2F4F4F', // Dark Slate Gray
      traits: ['학구적', '지적 호기심', '정보 습득', '현실 기반', '비판적 사고', '성장 추구'],
      compatibility: {
        best: ['🖼️ 독립/예술 영화 감별사'],
        good: ['🎭 드라마/멜로 통달자'],
        avoid: ['💖 로맨틱 코미디 애호가'],
      },
      recommendations: {
        movies: [
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10031">나의 문어 선생님</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10032">소셜 딜레마</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10033">인사이드 잡</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10034">환상의 빛</a>',
        ],
        tips: [
          '영화에서 얻은 정보를 바탕으로 관련 서적이나 전문가 강연을 찾아보세요.',
          '다큐멘터리 외에 실제 사건을 다룬 스릴러나 드라마 영화도 흥미로울 거예요.',
          '때로는 가볍게 즐길 수 있는 오락 영화로 스트레스를 해소해 보세요.',
        ],
      },
    },
    {
      id: 'animation-fantasy-dreamer',
      title: '🧚 애니메이션/환상 동화형',
      description:
        '당신은 아름다운 그림체와 따뜻한 이야기, 그리고 동화 같은 상상력에 매료되는 영화 취향을 가지고 있습니다.',
      detailedDescription:
        '애니메이션이나 환상적인 동화 같은 영화에서 순수한 즐거움과 위로를 얻습니다. 현실의 고단함을 잊고 아름다운 상상의 세계로 빠져드는 것을 선호하며, <미야자키 하야오 감독 작품>, <겨울왕국> 같은 영화를 보며 마음의 평화를 찾습니다. 때로는 어른들을 위한 깊은 메시지를 가진 애니메이션에도 공감합니다.',
      emoji: '🧚',
      color: '#FFDAB9', // Peach Puff
      traits: ['상상력', '동심', '아름다운 시각', '따뜻함', '순수함', '위로'],
      compatibility: {
        best: ['🌌 판타지/SF 탐험가', '💖 로맨틱 코미디 애호가'],
        good: ['🎭 드라마/멜로 통달자'],
        avoid: ['👻 공포/미스터리 추적자', '🧐 다큐멘터리 지식인'],
      },
      recommendations: {
        movies: [
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10035">너의 이름은.</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10036">코코</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10037">토이 스토리 4</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10038">센과 치히로의 행방불명</a>',
        ],
        tips: [
          '영화 속 캐릭터를 직접 그려보거나 관련 굿즈를 모아보는 것도 즐거울 거예요.',
          '애니메이션 원작의 만화책이나 소설을 찾아보는 것도 좋은 방법입니다.',
          '때로는 동화 같은 내용이 아닌 현실적인 주제의 영화도 경험해 보세요.',
        ],
      },
    },
    {
      id: 'horror-mystery-seeker',
      title: '👻 공포/미스터리 추적자',
      description:
        '당신은 예측할 수 없는 공포와 숨겨진 진실을 파헤치는 미스터리 영화에서 가장 큰 즐거움을 느끼는 짜릿함 추구자입니다.',
      detailedDescription:
        '알 수 없는 공포 속에서 오는 긴장감과, 복잡하게 얽힌 사건의 실마리를 풀어가는 과정에 매료됩니다. 심리 스릴러, 오컬트 공포, 추리 미스터리 등 다양한 장르의 영화를 즐겨 보며, 영화가 끝난 후에도 그 여운과 함께 퍼즐을 맞추는 것을 좋아합니다. <겟 아웃>, <곡성>처럼 충격적인 반전과 소름 돋는 이야기에 열광합니다.',
      emoji: '👻',
      color: '#4B0082', // Indigo
      traits: ['스릴 추구', '긴장감', '미스터리 선호', '추리력', '반전', '대담함'],
      compatibility: {
        best: ['💥 액션/스릴러 매니아'],
        good: [],
        avoid: ['💖 로맨틱 코미디 애호가', '🧚 애니메이션/환상 동화형'],
      },
      recommendations: {
        movies: [
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10039">컨저링 유니버스</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10040">살인의 추억</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10041">콜 미 바이 유어 네임</a> (멜로, 서스펜스)',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10042">아가씨</a> (스릴러, 미스터리)',
        ],
        tips: [
          '영화 속 단서들을 직접 추리하며 보는 것도 즐거울 거예요.',
          '영화에 사용된 심리학적 기법이나 연출 방식을 분석해 보세요.',
          '너무 자극적인 영화만 보기보다는, 가끔은 마음을 편안하게 해주는 영화도 시도해 보세요.',
        ],
      },
    },
    {
      id: 'indie-art-film-connoisseur',
      title: '🖼️ 독립/예술 영화 감별사',
      description:
        '당신은 상업 영화의 틀을 벗어난 독특한 연출과 깊이 있는 메시지, 그리고 예술적 실험에 가치를 두는 섬세한 영화 취향을 가지고 있습니다.',
      detailedDescription:
        '일반적인 흥행 요소보다는 영화 자체의 예술성과 감독의 철학을 중요하게 생각합니다. 독립 영화, 고전 영화, 해외 예술 영화 등 다양한 스펙트럼의 작품을 탐험하며, 영화가 던지는 질문에 대해 깊이 사유하는 것을 즐깁니다. <벌새>, <패러사이트>, <자산어보>처럼 미학적 완성도와 사회적 메시지를 겸비한 영화에서 영감을 얻습니다.',
      emoji: '🖼️',
      color: '#8B4513', // Saddle Brown
      traits: ['예술적 감각', '독창성 추구', '철학적', '미학적', '심층적 사고', '다양성 존중'],
      compatibility: {
        best: ['🧐 다큐멘터리 지식인', '🎭 드라마/멜로 통달자'],
        good: [],
        avoid: ['💥 액션/스릴러 매니아', '💖 로맨틱 코미디 애호가'],
      },
      recommendations: {
        movies: [
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10043">타오르는 여인의 초상</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10044">어느 가족</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10045">클로저</a>',
          '<a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=10046">로마</a>',
        ],
        tips: [
          '영화에 대한 전문 비평이나 감독의 인터뷰를 찾아보며 깊이를 더해보세요.',
          '독립 영화 페스티벌이나 예술 영화 상영회에 참여해 보는 것도 좋아요.',
          '가끔은 흥행 위주의 영화도 당신에게 새로운 영감을 줄 수 있습니다.',
        ],
      },
    },
  ],
};
