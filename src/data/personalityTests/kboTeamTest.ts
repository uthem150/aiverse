import type { PersonalityTestData } from '@/types/personalityTest';

export const kboTeamTestData: PersonalityTestData = {
  id: 'kbo-team-preference-test',
  title: '⚾ 나와 어울리는 KBO 프로야구 팀 찾기',
  description:
    '당신의 성향과 응원 스타일은 어떤 KBO 구단과 가장 잘 맞을까요? 열 가지 구단의 매력을 통해 나와 꼭 맞는 운명의 팀을 찾아보세요!',
  category: 'sports',
  resultTypes: [
    'hanwha-eagles',
    'lg-twins',
    'lotte-giants',
    'ssg-landers',
    'kia-tigers',
    'kt-wiz',
    'nc-dinos',
    'samsung-lions',
    'doosan-bears',
    'kiwoom-heroes',
  ],
  questions: [
    {
      id: 'q1',
      question: '야구장에 가는 가장 큰 이유는?',
      options: [
        {
          id: 'q1_a',
          text: '모두가 함께 목 터져라 응원가를 부르는 열기! 스트레스가 확 풀린다.',
          emoji: '🗣️',
          scores: { 'lotte-giants': 3, 'hanwha-eagles': 2 },
        },
        {
          id: 'q1_b',
          text: '이길 때의 짜릿함! 압도적인 경기력으로 승리하는 모습을 보고 싶다.',
          emoji: '🏆',
          scores: { 'ssg-landers': 2, 'kia-tigers': 2, 'samsung-lions': 1 },
        },
        {
          id: 'q1_c',
          text: '졌다고 포기하는 건 없다! 9회말 2아웃까지 계속되는 역전 드라마를 기대한다.',
          emoji: '🔥',
          scores: { 'doosan-bears': 3, 'hanwha-eagles': 1 },
        },
        {
          id: 'q1_d',
          text: '치킨과 맥주, 그리고 탁 트인 경기장! 그냥 그 분위기가 좋다.',
          emoji: '🍗',
          scores: { 'nc-dinos': 2, 'lg-twins': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '내가 응원하는 팀이 10점 차로 지고 있는 8회말 상황. 나의 반응은?',
      options: [
        {
          id: 'q2_a',
          text: '괜찮아, 이길 때도 있고 질 때도 있지. 선수들 힘내라! 끝까지 응원한다.',
          emoji: '🙏',
          scores: { 'hanwha-eagles': 3, 'lotte-giants': 1 },
        },
        {
          id: 'q2_b',
          text: '"원래 우리 팀은 지금부터 시작이야!" 기적 같은 역전을 기대하며 더 크게 소리친다.',
          emoji: '🤯',
          scores: { 'doosan-bears': 3, 'lotte-giants': 2 },
        },
        {
          id: 'q2_c',
          text: '조용히 다음 경기를 위한 전략을 분석하거나, 유망주 선수의 기록을 찾아본다.',
          emoji: '📊',
          scores: { 'kiwoom-heroes': 3, 'kt-wiz': 2 },
        },
        {
          id: 'q2_d',
          text: '분노의 직관 인증샷을 SNS에 올린다. "이 경기 실화냐?"',
          emoji: '😡',
          scores: { 'lotte-giants': 2, 'kia-tigers': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '새로운 선수를 영입한다면 어떤 스타일의 선수를 선호하는가?',
      options: [
        {
          id: 'q3_a',
          text: '한 방에 경기를 뒤집는 홈런 타자! 화끈한 공격력이 최고다.',
          emoji: '💥',
          scores: { 'ssg-landers': 3, 'doosan-bears': 1 },
        },
        {
          id: 'q3_b',
          text: '안정적인 제구력과 경기 운영 능력을 갖춘 에이스 투수.',
          emoji: '⚾',
          scores: { 'samsung-lions': 3, 'lg-twins': 2 },
        },
        {
          id: 'q3_c',
          text: '당장은 부족해도 잠재력이 폭발할 수 있는 숨겨진 유망주.',
          emoji: '💎',
          scores: { 'kiwoom-heroes': 3, 'doosan-bears': 2 },
        },
        {
          id: 'q3_d',
          text: '뛰어난 데이터 분석 능력을 바탕으로 팀의 약점을 보완해 줄 지능적인 선수.',
          emoji: '🧠',
          scores: { 'kt-wiz': 3, 'nc-dinos': 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '팀을 운영하는 방식에 대한 나의 생각은?',
      options: [
        {
          id: 'q4_a',
          text: '전통과 역사는 무시할 수 없다. 명문 구단으로서의 자부심을 지켜야 한다.',
          emoji: '👑',
          scores: { 'kia-tigers': 3, 'samsung-lions': 2, 'lg-twins': 1 },
        },
        {
          id: 'q4_b',
          text: '때로는 과감한 투자로 스타 선수를 영입해 팬들에게 최고의 경기를 보여줘야 한다.',
          emoji: '💰',
          scores: { 'ssg-landers': 3, 'nc-dinos': 1 },
        },
        {
          id: 'q4_c',
          text: '합리적인 예산 안에서 유망주를 키워내고, 효율적인 팀을 만드는 것이 중요하다.',
          emoji: '🌱',
          scores: { 'kiwoom-heroes': 3, 'doosan-bears': 2 },
        },
        {
          id: 'q4_d',
          text: '최신 기술과 데이터를 적극적으로 활용하여 스마트하게 승리 확률을 높여야 한다.',
          emoji: '📈',
          scores: { 'kt-wiz': 3, 'ssg-landers': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '내가 생각하는 야구의 가장 큰 매력은?',
      options: [
        {
          id: 'q5_a',
          text: '끈끈한 팀워크와 보이지 않는 희생 플레이.',
          emoji: '🤝',
          scores: { 'doosan-bears': 2, 'samsung-lions': 2 },
        },
        {
          id: 'q5_b',
          text: '가슴 아픈 패배를 겪더라도, 다음 시즌을 기약하며 함께 성장하는 스토리.',
          emoji: '📜',
          scores: { 'hanwha-eagles': 3, 'lotte-giants': 2 },
        },
        {
          id: 'q5_c',
          text: '세련된 유니폼과 굿즈, 그리고 도심 속에서 즐기는 스타일리시한 여가 활동.',
          emoji: '🏙️',
          scores: { 'lg-twins': 3, 'ssg-landers': 1 },
        },
        {
          id: 'q5_d',
          text: '승리 후 다 함께 즐기는 세리머니와 팬들과의 유쾌한 소통.',
          emoji: '🎉',
          scores: { 'nc-dinos': 3, 'lotte-giants': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '팀이 우승했다! 나의 축하 방식은?',
      options: [
        {
          id: 'q6_a',
          text: '오랫동안 기다려온 우승! 감격의 눈물을 흘리며 밤새도록 우승의 여운을 즐긴다.',
          emoji: '😭',
          scores: { 'lg-twins': 3, 'hanwha-eagles': 2 },
        },
        {
          id: 'q6_b',
          text: '우승 기념 유니폼과 굿즈를 바로 구매하고, "이 팀의 팬이라 자랑스럽다"고 SNS에 자랑한다.',
          emoji: '🛍️',
          scores: { 'ssg-landers': 2, 'lg-twins': 2 },
        },
        {
          id: 'q6_c',
          text: '독특한 우승 공약이나 세리머니를 기대하며 팬 커뮤니티에서 다 함께 축제를 벌인다.',
          emoji: '⚔️',
          scores: { 'nc-dinos': 3, 'lotte-giants': 1 },
        },
        {
          id: 'q6_d',
          text: '"우승은 당연한 것." 명문 구단의 품격을 지키며 차분하게 다음 시즌을 준비한다.',
          emoji: '😎',
          scores: { 'kia-tigers': 3, 'samsung-lions': 2 },
        },
      ],
    },
    {
      id: 'q7',
      question: '팀의 슬로건을 정한다면 어떤 문구가 마음에 드는가?',
      options: [
        {
          id: 'q7_a',
          text: '"마지막까지 포기하지 않는 기적의 드라마"',
          emoji: '✨',
          scores: { 'doosan-bears': 3, 'hanwha-eagles': 1 },
        },
        {
          id: 'q7_b',
          text: '"전통과 자부심, 왕조의 귀환"',
          emoji: '🐯',
          scores: { 'kia-tigers': 3, 'samsung-lions': 2 },
        },
        {
          id: 'q7_c',
          text: '"미래를 향한 합리적인 선택과 혁신"',
          emoji: '🚀',
          scores: { 'kiwoom-heroes': 3, 'kt-wiz': 2 },
        },
        {
          id: 'q7_d',
          text: '"뜨거운 열정, 모두를 하나로 만드는 함성"',
          emoji: '🔥',
          scores: { 'lotte-giants': 3, 'hanwha-eagles': 2 },
        },
      ],
    },
    {
      id: 'q8',
      question: '친구에게 야구를 추천한다면 어떤 점을 강조하겠는가?',
      options: [
        {
          id: 'q8_a',
          text: '스타일리시하고 멋진 선수들과 세련된 응원 문화.',
          emoji: '💅',
          scores: { 'lg-twins': 3, 'ssg-landers': 1 },
        },
        {
          id: 'q8_b',
          text: '온 가족이 함께 즐길 수 있는 축제 같은 분위기와 다양한 이벤트.',
          emoji: '👨‍👩‍👧‍👦',
          scores: { 'nc-dinos': 3, 'ssg-landers': 2 },
        },
        {
          id: 'q8_c',
          text: '응원하는 팀과 한마음이 되어 울고 웃는 감동적인 경험.',
          emoji: '💖',
          scores: { 'hanwha-eagles': 2, 'lotte-giants': 2 },
        },
        {
          id: 'q8_d',
          text: '감독의 전략과 선수들의 플레이를 분석하며 보는 지적인 재미.',
          emoji: '🧐',
          scores: { 'kt-wiz': 2, 'samsung-lions': 2, 'kiwoom-heroes': 1 },
        },
      ],
    },
    {
      id: 'q9',
      question: '내가 감독이라면 어떤 리더십 스타일을 보여줄 것인가?',
      options: [
        {
          id: 'q9_a',
          text: '믿음의 야구! 선수들을 끝까지 믿어주며 잠재력을 이끌어내는 아버지 같은 리더.',
          emoji: '👨‍👧‍👦',
          scores: { 'doosan-bears': 2, 'hanwha-eagles': 2 },
        },
        {
          id: 'q9_b',
          text: '냉철한 분석가! 데이터와 통계를 기반으로 최적의 전략을 구사하는 승부사.',
          emoji: '🤖',
          scores: { 'kt-wiz': 3, 'kiwoom-heroes': 2 },
        },
        {
          id: 'q9_c',
          text: '카리스마 작렬! 강력한 통솔력으로 팀을 하나로 묶어 승리를 쟁취하는 지휘관.',
          emoji: '👑',
          scores: { 'kia-tigers': 3, 'samsung-lions': 1 },
        },
        {
          id: 'q9_d',
          text: '소통의 달인! 팬들과 적극적으로 소통하며 즐거운 팀 분위기를 만드는 유쾌한 리더.',
          emoji: '😄',
          scores: { 'nc-dinos': 3, 'lotte-giants': 1 },
        },
      ],
    },
    {
      id: 'q10',
      question: '팀의 유니폼을 고를 때 가장 중요하게 생각하는 것은?',
      options: [
        {
          id: 'q10_a',
          text: '구단의 역사와 정체성이 담긴 전통적인 디자인.',
          emoji: '📜',
          scores: { 'kia-tigers': 2, 'samsung-lions': 2, 'lg-twins': 1 },
        },
        {
          id: 'q10_b',
          text: '강렬한 색상과 로고로 상대를 압도하는 느낌을 주는 디자인.',
          emoji: '🔴',
          scores: { 'ssg-landers': 2, 'lotte-giants': 2 },
        },
        {
          id: 'q10_c',
          text: '일상복으로도 손색없는 세련되고 모던한 디자인.',
          emoji: '👕',
          scores: { 'lg-twins': 3, 'kt-wiz': 1 },
        },
        {
          id: 'q10_d',
          text: '귀엽고 독특한 마스코트가 돋보이는 개성 있는 디자인.',
          emoji: '🦖',
          scores: { 'nc-dinos': 3 },
        },
      ],
    },
    {
      id: 'q11',
      question: '야구 외에 즐기는 다른 활동이 있다면?',
      options: [
        {
          id: 'q11_a',
          text: '성공 가능성을 분석하며 주식이나 재테크에 투자하기.',
          emoji: '💰',
          scores: { 'kiwoom-heroes': 3, 'ssg-landers': 1 },
        },
        {
          id: 'q11_b',
          text: '최신 트렌드를 따라 쇼핑하거나 핫플레이스를 방문하기.',
          emoji: '🛍️',
          scores: { 'lg-twins': 3, 'ssg-landers': 2 },
        },
        {
          id: 'q11_c',
          text: '오랜 역사를 가진 박물관을 가거나 다큐멘터리를 보는 등 깊이 있는 활동.',
          emoji: '🏛️',
          scores: { 'kia-tigers': 2, 'samsung-lions': 2 },
        },
        {
          id: 'q11_d',
          text: '포기하지 않고 어려운 퍼즐이나 게임 스테이지를 클리어하기.',
          emoji: '🧩',
          scores: { 'doosan-bears': 2, 'hanwha-eagles': 2 },
        },
      ],
    },
    {
      id: 'q12',
      question: '응원팀의 연고지를 방문한다면 가장 하고 싶은 것은?',
      options: [
        {
          id: 'q12_a',
          text: '지역 맛집을 찾아다니며 팬들과 함께 어울리기.',
          emoji: '🍻',
          scores: { 'lotte-giants': 3, 'kia-tigers': 1 },
        },
        {
          id: 'q12_b',
          text: '세련된 도심의 랜드마크를 구경하고 쇼핑 즐기기.',
          emoji: '🌃',
          scores: { 'lg-twins': 3, 'doosan-bears': 1 },
        },
        {
          id: 'q12_c',
          text: '최신 기술이 집약된 테마파크나 IT 관련 시설 방문하기.',
          emoji: '🤖',
          scores: { 'kt-wiz': 3, 'nc-dinos': 1 },
        },
        {
          id: 'q12_d',
          text: '팀의 역사가 담긴 명예의 전당이나 박물관 방문하기.',
          emoji: '🏆',
          scores: { 'samsung-lions': 2, 'kia-tigers': 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'hanwha-eagles',
      title: '🦅 불꽃같은 의리의 보살팬, 한화 이글스',
      description:
        '"괜찮아, 질 수 있어. 하지만 포기는 없어!" 당신은 팀이 어떤 상황에 있든 끝까지 믿고 지지하는 숭고한 의리파입니다.',
      detailedDescription:
        '결과보다 과정을 중시하며, 선수들의 열정과 노력에 더 큰 박수를 보냅니다. 희망과 좌절이 교차하는 롤러코스터 같은 경기 속에서 진정한 행복을 느끼죠. 당신의 꺾이지 않는 마음은 팀에게 가장 큰 힘이 됩니다. "나는 행복합니다~"를 외칠 준비가 되셨나요?',
      emoji: '🦅',
      color: '#FF6600',
      traits: ['의리', '인내심', '긍정적', '드라마', '희망', '보살'],
      compatibility: {
        best: ['lotte-giants'],
        avoid: ['kia-tigers'],
      },
      recommendations: {
        hashtags: ['#한화이글스', '#최강한화', '#나는행복합니다', '#보살팬', '#마리한화'],
      },
    },
    {
      id: 'lg-twins',
      title: '🏙️ 세련된 도시의 승리 요정, LG 트윈스',
      description:
        '야구는 이겨야 제맛! 그리고 스타일도 중요하죠. 당신은 세련된 감각으로 승리를 즐길 줄 아는 트렌드세터입니다.',
      detailedDescription:
        '오랜 기다림 끝에 찾아온 승리의 기쁨을 누구보다 크게 누릴 줄 아는 당신. 야구를 통해 스트레스를 풀고, 도심 속에서 즐기는 하나의 문화로 생각합니다. "무적 LG"를 외치며 잠실의 주인이 될 준비가 되셨나요?',
      emoji: '🏙️',
      color: '#C30452',
      traits: ['세련됨', '트렌디', '인내', '자부심', '승리 지향', '스타일리시'],
      compatibility: {
        best: ['ssg-landers'],
        avoid: ['lotte-giants'],
      },
      recommendations: {
        hashtags: ['#LG트윈스', '#무적LG', '#서울의자존심', '#유광잠바', '#29년의기다림'],
      },
    },
    {
      id: 'lotte-giants',
      title: '🗣️ 뜨거운 함성의 해결사, 롯데 자이언츠',
      description:
        '조용한 응원은 있을 수 없다! 당신은 뜨거운 열정을 목청껏 표현하며 팀과 함께 호흡하는 화끈한 응원단장입니다.',
      detailedDescription:
        '부산의 열기만큼이나 뜨거운 심장을 가진 당신. 팀이 이길 때나 질 때나, 변함없이 열정적인 응원을 보냅니다. 야구는 당신에게 단순한 스포츠가 아닌, 삶의 희로애락을 함께하는 동반자입니다. "부산 갈매기"를 부르며 사직을 흔들 준비가 되셨나요?',
      emoji: '🗣️',
      color: '#002856',
      traits: ['열정', '화끈함', '끈끈함', '공동체', '희로애락', '다이나믹'],
      compatibility: {
        best: ['hanwha-eagles'],
        avoid: ['samsung-lions'],
      },
      recommendations: {
        hashtags: ['#롯데자이언츠', '#부산갈매기', '#사직노래방', '#마!', '#봄데'],
      },
    },
    {
      id: 'ssg-landers',
      title: '🚀 압도적 승리의 개척자, SSG 랜더스',
      description:
        '이기는 야구가 가장 재밌는 야구! 당신은 화끈한 공격력과 스타 선수들의 활약으로 상대를 압도하는 것을 즐기는 승리주의자입니다.',
      detailedDescription:
        '새로운 역사를 만들어가는 팀처럼, 당신 역시 트렌드를 이끌고 압도적인 결과를 만들어내는 것에 매력을 느낍니다. 야구장에서의 다양한 즐길 거리와 마케팅도 놓치지 않는 당신은 진정한 "펀슈머"입니다. 랜더스필드에서 홈런볼을 잡을 준비가 되셨나요?',
      emoji: '🚀',
      color: '#CE0E2D',
      traits: ['승리주의', '트렌디', '과감함', '스타 파워', '결과 중시', '화끈함'],
      compatibility: {
        best: ['lg-twins'],
        avoid: ['kiwoom-heroes'],
      },
      recommendations: {
        hashtags: ['#SSG랜더스', '#와이어투와이어', '#홈런공장', '#신세계야구단', '#잇츠랜더스'],
      },
    },
    {
      id: 'kia-tigers',
      title: '👑 흔들리지 않는 자부심의 명가, KIA 타이거즈',
      description:
        '클래스는 영원하다! 당신은 KBO 최고의 역사를 자랑하는 팀의 일원으로서, 강한 자부심과 명예를 중시하는 로열리스트입니다.',
      detailedDescription:
        '당신에게 야구는 승리 그 이상의 의미를 가집니다. 바로 "왕조"의 전통과 역사를 이어가는 것이죠. 최고의 자리에 걸맞은 경기력을 기대하며, 팀의 자부심을 자신의 것처럼 여깁니다. "최강 KIA"를 외치며 V12를 향해 함께 뛸 준비가 되셨나요?',
      emoji: '👑',
      color: '#EA0029',
      traits: ['자부심', '전통', '명예', '카리스마', '기대치 높음', '로열티'],
      compatibility: {
        best: ['samsung-lions'],
        avoid: ['hanwha-eagles'],
      },
      recommendations: {
        hashtags: ['#KIA타이거즈', '#최강기아', '#타이거즈왕조', '#V12', '#기아없이는못살아'],
      },
    },
    {
      id: 'kt-wiz',
      title: '🧠 스마트한 승리의 마법사, KT 위즈',
      description:
        '힘이 아닌 머리로 승부한다! 당신은 뛰어난 데이터 분석과 전략으로 승리를 만들어내는 과정을 즐기는 스마트한 전략가입니다.',
      detailedDescription:
        '당신은 전통이나 감정에 얽매이기보다, 현재의 데이터를 바탕으로 최적의 수를 찾는 것을 선호합니다. 빠르게 성장하며 "마법" 같은 성공을 이뤄낸 팀처럼, 당신 역시 혁신과 성장을 중요하게 생각합니다. 위즈파크에서 마법 같은 승리를 외칠 준비가 되셨나요?',
      emoji: '🧠',
      color: '#000000',
      traits: ['스마트', '전략적', '데이터 중시', '혁신', '성장', '효율'],
      compatibility: {
        best: ['kiwoom-heroes'],
        avoid: ['lotte-giants'],
      },
      recommendations: {
        hashtags: ['#KT위즈', '#마법사군단', '#V1', '#데이터야구', '#수원KT위즈파크'],
      },
    },
    {
      id: 'nc-dinos',
      title: '🎉 즐거움이 가득한 축제의 지배자, NC 다이노스',
      description:
        '야구는 즐거운 축제! 당신은 승리의 기쁨을 독창적이고 유쾌한 방식으로 즐길 줄 아는 진정한 엔터테이너입니다.',
      detailedDescription:
        '당신에게 야구는 승패를 넘어선 즐거운 놀이와 같습니다. 팬들과 소통하고, 독특한 세리머니를 즐기며, 야구장 자체를 하나의 테마파크처럼 즐깁니다. 유쾌하고 창의적인 당신의 성향과 꼭 맞는 팀입니다. "집행검"을 뽑아 들 준비가 되셨나요?',
      emoji: '🎉',
      color: '#074684',
      traits: ['유쾌함', '창의적', '소통', '팬 프렌들리', '즐거움', '축제'],
      compatibility: {
        best: ['doosan-bears'],
        avoid: ['samsung-lions'],
      },
      recommendations: {
        hashtags: ['#NC다이노스', '#거침없이가자', '#단디', '#집행검', '#창원NC파크'],
      },
    },
    {
      id: 'samsung-lions',
      title: '🦁 조용한 강자의 품격, 삼성 라이온즈',
      description:
        '화려함보다는 묵묵함! 당신은 탄탄한 시스템과 꾸준함으로 승리를 쌓아가는, 조용하지만 강한 명문가의 팬입니다.',
      detailedDescription:
        '당신은 반짝이는 스타보다, 팀의 근간을 이루는 탄탄한 시스템과 꾸준함을 더 높이 평가합니다. 오랜 역사와 전통을 자랑하는 명문 구단처럼, 당신 역시 안정적이고 품격 있는 승리를 선호합니다. "푸른 피"의 자부심을 느낄 준비가 되셨나요?',
      emoji: '🦁',
      color: '#074A8D',
      traits: ['꾸준함', '안정적', '시스템', '명문', '품격', '신뢰'],
      compatibility: {
        best: ['kia-tigers'],
        avoid: ['lotte-giants'],
      },
      recommendations: {
        hashtags: ['#삼성라이온즈', '#푸른피', '#사자군단', '#라팍', '#명가재건'],
      },
    },
    {
      id: 'doosan-bears',
      title: '🐻‍❄️ 포기를 모르는 미라클 메이커, 두산 베어스',
      description:
        '9회말 2아웃부터 진짜 시작! 당신은 어떤 위기 상황에서도 포기하지 않고 기적을 만들어내는 강한 정신력의 소유자입니다.',
      detailedDescription:
        '당신은 선수 개개인의 이름값보다 "화수분 야구"로 대표되는 끈끈한 팀워크와 육성 시스템을 더 중요하게 생각합니다. 패배 직전의 상황에서 터져 나오는 역전 드라마에 열광하며, 결코 포기하지 않는 뚝심을 가졌습니다. "미라클 두산"을 외칠 준비가 되셨나요?',
      emoji: '🐻‍❄️',
      color: '#131230',
      traits: ['뚝심', '끈기', '역전', '기적', '팀워크', '화수분'],
      compatibility: {
        best: ['nc-dinos'],
        avoid: ['lg-twins'],
      },
      recommendations: {
        hashtags: ['#두산베어스', '#미라클두산', '#화수분야구', '#어우두', '#최강두산'],
      },
    },
    {
      id: 'kiwoom-heroes',
      title: '📈 미래를 내다보는 스마트 투자자, 키움 히어로즈',
      description:
        '오늘의 스타보다 내일의 스타를! 당신은 감정에 휘둘리지 않고, 데이터와 가능성을 보고 합리적인 판단을 내리는 스마트한 리더입니다.',
      detailedDescription:
        '당신은 당장의 성적에 일희일비하기보다, 장기적인 안목으로 팀의 미래를 그리는 것을 즐깁니다. 유망주를 발굴하고 성장시켜 더 큰 가치를 만들어내는 과정에서 보람을 느끼죠. KBO의 "머니볼"을 실현하는 당신, 진정한 영웅이 될 준비가 되셨나요?',
      emoji: '📈',
      color: '#570012',
      traits: ['합리적', '미래지향적', '효율', '실리주의', '분석적', '언더독'],
      compatibility: {
        best: ['kt-wiz'],
        avoid: ['ssg-landers'],
      },
      recommendations: {
        hashtags: ['#키움히어로즈', '#영웅군단', '#머니볼', '#고척돔', '#가성비'],
      },
    },
  ],
};
