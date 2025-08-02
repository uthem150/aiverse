import type { PersonalityTestData } from '@/types/personalityTest';

export const kDramaCharacterTestData: PersonalityTestData = {
  id: 'k-drama-character-test',
  title: '🎬 최신 K-드라마 캐릭터로 보는 나는 누구?',
  description:
    '눈물의 여왕부터 선재 업고 튀어까지! 화제의 K-드라마 속 주인공 중 당신과 가장 닮은 사람은 누구일까요? 당신의 성격을 분석해 꼭 맞는 인생 캐릭터를 찾아드립니다.',
  category: 'entertainment',
  resultTypes: [
    'queenoftears-honghaein',
    'queenoftears-baekhyunwoo',
    'lovelyrunner-imsol',
    'lovelyrunner-ryusunjae',
    'moving-jangjuwon',
    'moving-leemihyun',
    'gyeongseong-jangtaesang',
    'theglory-moondongeun',
    'rebornrich-jindojun',
    'attorneywoo-wooyoungwoo',
  ],
  questions: [
    {
      id: 'q1',
      question: '누군가 당신에게 부당한 일을 저질렀을 때, 당신의 반응은?',
      options: [
        {
          id: 'q1_a',
          text: '오랜 시간이 걸리더라도, 완벽하고 치밀하게 되갚아 줄 계획을 세운다.',
          emoji: '🧐 ',
          scores: { 'theglory-moondongeun': 3, 'rebornrich-jindojun': 2 },
        },
        {
          id: 'q1_b',
          text: '나의 소중한 사람을 건드린다면, 괴물이라 불릴지라도 끝까지 쫓아가 박살 낸다.',
          emoji: '👊',
          scores: { 'moving-jangjuwon': 3, 'lovelyrunner-ryusunjae': 1 },
        },
        {
          id: 'q1_c',
          text: '감정적으로 맞서기보다, 법과 논리를 이용해 가장 이성적이고 효과적인 방법으로 해결한다.',
          emoji: '⚖️',
          scores: { 'queenoftears-baekhyunwoo': 3, 'attorneywoo-wooyoungwoo': 2 },
        },
        {
          id: 'q1_d',
          text: '일단 살아남는 게 우선. 모든 인맥과 정보를 동원해 상황을 나에게 유리하게 만든다.',
          emoji: '💼',
          scores: { 'gyeongseong-jangtaesang': 3 },
        },
      ],
    },
    {
      id: 'q2',
      question: '당신의 삶에서 가장 중요한 가치는 무엇인가요?',
      options: [
        {
          id: 'q2_a',
          text: '사랑하는 단 한 사람. 그 사람을 위해서라면 내 모든 것을 걸 수 있다.',
          emoji: '❤️',
          scores: {
            'lovelyrunner-imsol': 2,
            'lovelyrunner-ryusunjae': 2,
            'queenoftears-baekhyunwoo': 2,
          },
        },
        {
          id: 'q2_b',
          text: '나의 가족(특히 자녀). 내 아이를 지키기 위해서라면 세상과도 맞서 싸울 수 있다.',
          emoji: '👨‍👩‍👧',
          scores: { 'moving-jangjuwon': 3, 'moving-leemihyun': 3 },
        },
        {
          id: 'q2_c',
          text: '나 자신의 성공과 목표 달성. 원하는 것을 얻기 위해 인생을 건다.',
          emoji: '🏆',
          scores: {
            'rebornrich-jindojun': 2,
            'theglory-moondongeun': 2,
            'queenoftears-honghaein': 1,
          },
        },
        {
          id: 'q2_d',
          text: '나의 원칙과 신념. 어렵더라도 올바른 길을 가야 한다.',
          emoji: '🐋 ',
          scores: { 'attorneywoo-wooyoungwoo': 3, 'queenoftears-baekhyunwoo': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '어려운 문제에 부딪혔을 때, 당신의 해결 방식은?',
      options: [
        {
          id: 'q3_a',
          text: '침착하게 상황을 분석하고, 내가 가진 능력을 총동원해 조용히, 하지만 확실하게 해결한다.',
          emoji: '🤫',
          scores: { 'moving-leemihyun': 3, 'queenoftears-baekhyunwoo': 2 },
        },
        {
          id: 'q3_b',
          text: '긍정적인 마음으로 일단 부딪힌다! 어떻게든 방법은 생길 거라고 믿는다.',
          emoji: '🏃‍♀️',
          scores: { 'lovelyrunner-imsol': 3 },
        },
        {
          id: 'q3_c',
          text: '관련된 모든 정보를 수집하고, 논리적인 순서에 따라 하나씩 차근차근 풀어간다.',
          emoji: '📚',
          scores: { 'attorneywoo-wooyoungwoo': 3, 'theglory-moondongeun': 2 },
        },
        {
          id: 'q3_d',
          text: '내가 가진 모든 인맥과 재력, 정보를 활용해 가장 현실적인 해결책을 찾는다.',
          emoji: '💰',
          scores: { 'gyeongseong-jangtaesang': 3, 'rebornrich-jindojun': 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: '사랑하는 사람에게 마음을 표현하는 스타일은?',
      options: [
        {
          id: 'q4_a',
          text: '말보다 행동. 츤데레처럼 툴툴대면서도 뒤에서 모든 것을 챙겨주고 지켜준다.',
          emoji: '☺️',
          scores: { 'queenoftears-honghaein': 3, 'lovelyrunner-ryusunjae': 2 },
        },
        {
          id: 'q4_b',
          text: '처음부터 끝까지 오직 한 사람만 바라보며, 나의 세상은 온통 그 사람뿐임을 보여준다.',
          emoji: '🌻',
          scores: { 'lovelyrunner-ryusunjae': 3, 'lovelyrunner-imsol': 2 },
        },
        {
          id: 'q4_c',
          text: '다정하고 헌신적으로 곁을 지키며, 상대방이 가장 필요로 하는 순간에 힘이 되어준다.',
          emoji: '🫂',
          scores: { 'queenoftears-baekhyunwoo': 3, 'moving-jangjuwon': 1 },
        },
        {
          id: 'q4_d',
          text: '좋아하는 것에 대해 이야기할 때 가장 행복하다. 나의 관심사를 공유하며 마음을 표현한다.',
          emoji: '🐋',
          scores: { 'attorneywoo-wooyoungwoo': 3 },
        },
      ],
    },
    {
      id: 'q5',
      question: '당신의 진짜 모습은 어떤 사람에 가까운가요?',
      options: [
        {
          id: 'q5_a',
          text: '겉으로는 차갑고 도도해 보이지만, 사실은 마음이 여리고 사랑을 갈구한다.',
          emoji: '🧊',
          scores: { 'queenoftears-honghaein': 3, 'theglory-moondongeun': 1 },
        },
        {
          id: 'q5_b',
          text: '평소엔 순하고 다정하지만, 내 사람을 건드리면 누구보다 무서워진다.',
          emoji: '😇',
          scores: { 'queenoftears-baekhyunwoo': 2, 'moving-jangjuwon': 2, 'moving-leemihyun': 1 },
        },
        {
          id: 'q5_c',
          text: '밝고 긍정적으로 보이지만, 남모를 아픔과 슬픔을 간직하고 있다.',
          emoji: '☀️',
          scores: { 'lovelyrunner-imsol': 3, 'gyeongseong-jangtaesang': 1 },
        },
        {
          id: 'q5_d',
          text: '무심하고 이기적으로 보이지만, 사실은 누구보다 의리 있고 자기 사람을 챙긴다.',
          emoji: '😎',
          scores: { 'gyeongseong-jangtaesang': 3, 'queenoftears-honghaein': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '인생 2회차의 기회가 주어진다면 무엇을 하겠는가?',
      options: [
        {
          id: 'q6_a',
          text: '미래 지식을 이용해 막대한 부와 권력을 손에 넣어 회사를 통째로 차지한다.',
          emoji: '🏢',
          scores: { 'rebornrich-jindojun': 3 },
        },
        {
          id: 'q6_b',
          text: '사랑하는 사람의 비극적인 미래를 바꾸기 위해 나의 모든 것을 바친다.',
          emoji: '⏳',
          scores: { 'lovelyrunner-imsol': 3, 'queenoftears-baekhyunwoo': 2 },
        },
        {
          id: 'q6_c',
          text: '나에게 끔찍한 상처를 준 사람들에게 이번에야말로 완벽한 복수를 실행한다.',
          emoji: '🔪',
          scores: { 'theglory-moondongeun': 3 },
        },
        {
          id: 'q6_d',
          text: '다 필요 없고, 소중한 가족들과 평범하고 행복하게 사는 삶을 택한다.',
          emoji: '🏡',
          scores: { 'moving-jangjuwon': 2, 'moving-leemihyun': 2 },
        },
      ],
    },
    {
      id: 'q7',
      question: '당신이 가진 남다른 재능이나 비밀이 있다면?',
      options: [
        {
          id: 'q7_a',
          text: '절대 죽지 않는 몸. 하지만 그 때문에 사랑하는 사람 곁을 지키기 힘들다.',
          emoji: '🔄',
          scores: { 'moving-jangjuwon': 3 },
        },
        {
          id: 'q7_b',
          text: '남들보다 뛰어난 오감. 위험을 감지하고 소중한 것을 지키는 데 사용한다.',
          emoji: '👂',
          scores: { 'moving-leemihyun': 3 },
        },
        {
          id: 'q7_c',
          text: '한 번 본 것은 무엇이든 기억하는 천재적인 두뇌. 세상을 다른 관점으로 본다.',
          emoji: '🧠',
          scores: { 'attorneywoo-wooyoungwoo': 3, 'rebornrich-jindojun': 1 },
        },
        {
          id: 'q7_d',
          text: '사람의 마음을 사로잡는 매력과 뛰어난 정보력. 생존을 위한 최고의 무기다.',
          emoji: '💬',
          scores: { 'gyeongseong-jangtaesang': 3 },
        },
      ],
    },
    {
      id: 'q8',
      question: '직업을 선택한다면 어떤 일을 하고 싶은가?',
      options: [
        {
          id: 'q8_a',
          text: '자신의 신념에 따라 억울한 사람을 돕는 변호사.',
          emoji: '⚖️',
          scores: { 'queenoftears-baekhyunwoo': 2, 'attorneywoo-wooyoungwoo': 2 },
        },
        {
          id: 'q8_b',
          text: '자신이 가진 모든 것을 총괄하고 지휘하는 그룹의 오너.',
          emoji: '👑',
          scores: { 'queenoftears-honghaein': 2, 'rebornrich-jindojun': 2 },
        },
        {
          id: 'q8_c',
          text: '자신의 재능으로 많은 사람들에게 기쁨과 위로를 주는 아티스트.',
          emoji: '🎤',
          scores: { 'lovelyrunner-ryusunjae': 3 },
        },
        {
          id: 'q8_d',
          text: '오랜 시간 공들여 무언가를 가르치고 계획을 실행하는 교사 또는 기획자.',
          emoji: '👩‍🏫',
          scores: { 'theglory-moondongeun': 3 },
        },
      ],
    },
    {
      id: 'q9',
      question: '당신의 옷장을 열면 어떤 스타일의 옷이 가장 많을까?',
      options: [
        {
          id: 'q9_a',
          text: '머리부터 발끝까지 완벽. 재벌처럼 고급스럽고 화려한 스타일.',
          emoji: '💎',
          scores: { 'queenoftears-honghaein': 3, 'gyeongseong-jangtaesang': 1 },
        },
        {
          id: 'q9_b',
          text: '지적이고 단정한 매력. 신뢰감을 주는 깔끔한 오피스룩.',
          emoji: '👔',
          scores: { 'queenoftears-baekhyunwoo': 3 },
        },
        {
          id: 'q9_c',
          text: '어둡고 무채색 계열. 자신의 모습을 드러내지 않는 미니멀한 스타일.',
          emoji: '⚫',
          scores: { 'theglory-moondongeun': 3, 'moving-leemihyun': 1 },
        },
        {
          id: 'q9_d',
          text: '활동하기 편안하면서도 따뜻한 느낌을 주는 캐주얼.',
          emoji: '😀',
          scores: { 'lovelyrunner-imsol': 2, 'moving-jangjuwon': 1 },
        },
      ],
    },
    {
      id: 'q10',
      question: '절체절명의 위기 상황, 당신이 믿는 것은?',
      options: [
        {
          id: 'q10_a',
          text: '나 자신. 내가 쌓아온 모든 것들이 나를 구해줄 것이다.',
          emoji: '💪',
          scores: {
            'queenoftears-honghaein': 2,
            'gyeongseong-jangtaesang': 2,
            'theglory-moondongeun': 1,
          },
        },
        {
          id: 'q10_b',
          text: '나의 사람. 나를 믿고 지지해주는 단 한 사람이 있다면 이겨낼 수 있다.',
          emoji: '🤝',
          scores: { 'lovelyrunner-ryusunjae': 2, 'queenoftears-baekhyunwoo': 2 },
        },
        {
          id: 'q10_c',
          text: '희망. 아무리 절망적이라도 포기하지 않으면 길은 열린다.',
          emoji: '✨',
          scores: { 'lovelyrunner-imsol': 3 },
        },
        {
          id: 'q10_d',
          text: '치밀한 계획. 모든 변수를 계산하고 대비한 나의 계획을 믿는다.',
          emoji: '🗺️',
          scores: { 'rebornrich-jindojun': 2, 'moving-leemihyun': 2 },
        },
      ],
    },
    {
      id: 'q11',
      question: '당신에게 "가족"이란 어떤 의미인가?',
      options: [
        {
          id: 'q11_a',
          text: '내가 반드시 지켜내야 할 삶의 이유이자 전부.',
          emoji: '🛡️',
          scores: { 'moving-jangjuwon': 3, 'moving-leemihyun': 3, 'queenoftears-baekhyunwoo': 1 },
        },
        {
          id: 'q11_b',
          text: '애증의 관계. 사랑하지만 때로는 나를 가장 힘들게 하는 존재.',
          emoji: '💔',
          scores: { 'queenoftears-honghaein': 2, 'rebornrich-jindojun': 2 },
        },
        {
          id: 'q11_c',
          text: '내가 돌아갈 수 있는 유일한 안식처이자 따뜻한 보금자리.',
          emoji: '🏡',
          scores: { 'lovelyrunner-imsol': 2 },
        },
        {
          id: 'q11_d',
          text: '혈연이 아니더라도, 서로를 위하고 지지해준다면 모두가 가족이다.',
          emoji: '🫂',
          scores: { 'theglory-moondongeun': 2, 'gyeongseong-jangtaesang': 1 },
        },
      ],
    },
    {
      id: 'q12',
      question: '세상을 바꿀 기회가 생긴다면, 어떤 세상을 만들고 싶은가?',
      options: [
        {
          id: 'q12_a',
          text: '정의가 승리하고, 약자들이 부당하게 고통받지 않는 세상.',
          emoji: '✨',
          scores: { 'queenoftears-baekhyunwoo': 2, 'attorneywoo-wooyoungwoo': 2 },
        },
        {
          id: 'q12_b',
          text: '사랑하는 사람들이 더 이상 아프거나 슬프지 않은 세상.',
          emoji: '💖',
          scores: { 'lovelyrunner-imsol': 2, 'lovelyrunner-ryusunjae': 2 },
        },
        {
          id: 'q12_c',
          text: '가해자들이 합당한 벌을 받고, 피해자들이 온전히 웃을 수 있는 세상.',
          emoji: '⚖️',
          scores: { 'theglory-moondongeun': 3 },
        },
        {
          id: 'q12_d',
          text: '능력과 실력만으로 정정당당하게 평가받고 성공할 수 있는 세상.',
          emoji: '📈',
          scores: { 'rebornrich-jindojun': 2, 'queenoftears-honghaein': 1 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'queenoftears-honghaein',
      title: '👑 츤데레 여왕 | 눈물의 여왕 "홍해인"',
      description:
        '당신은 겉으로는 차갑고 도도하지만, 속은 누구보다 여리고 따뜻한 "츤데레"입니다. 자존심이 강해 약한 모습을 보이기 싫어하지만, 내 사람에게는 모든 것을 내어주는 반전 매력의 소유자입니다.',
      detailedDescription:
        '까칠한 말투와 달리, 당신의 행동은 언제나 사랑하는 사람을 향해 있습니다. 최고의 자리에 어울리는 뛰어난 능력과 스타일을 가졌지만, 정작 원하는 것은 진정한 사랑과 따뜻한 말 한마디입니다. "내가 나 살자고 여기까지 온 줄 알아?"라며 툴툴대면서도, 결국 사랑을 위해 모든 것을 겁니다.',
      emoji: '👑',
      color: '#C71585',
      traits: ['츤데레', '자존심', '능력자', '반전매력', '직설적', '외강내유'],
      compatibility: {
        best: ['queenoftears-baekhyunwoo'],
        good: ['gyeongseong-jangtaesang'],
      },
      recommendations: {
        ottContent: ['눈물의 여왕 (Queen of Tears)'],
        hashtags: ['#홍해인', '#츤데레의정석', '#퀸즈그룹', '#백화점의여왕', '#해인현우'],
      },
    },
    {
      id: 'queenoftears-baekhyunwoo',
      title: '⚖️ 다정한 순정남 | 눈물의 여왕 "백현우"',
      description:
        '당신은 뛰어난 능력을 가졌으면서도 겸손하고 다정한 사람입니다. 사랑하는 사람을 위해서라면 자신의 모든 것을 희생할 준비가 되어 있는, 현대판 왕자님 같은 순정파입니다.',
      detailedDescription:
        '어떤 위기 상황에서도 이성과 침착함을 잃지 않으며, 가장 합리적인 해결책을 찾아냅니다. 당신의 따뜻함과 헌신은 차가운 얼음도 녹일 만큼 강력합니다. "니가 있는 곳이 내 집이야"라는 말처럼, 당신의 세상은 오직 사랑하는 사람을 중심으로 돌아갑니다.',
      emoji: '⚖️',
      color: '#4682B4',
      traits: ['순정파', '능력자', '다정함', '헌신적', '이성적', '정의로움'],
      compatibility: {
        best: ['queenoftears-honghaein'],
        good: ['lovelyrunner-imsol'],
      },
      recommendations: {
        ottContent: ['눈물의 여왕 (Queen of Tears)'],
        hashtags: ['#백현우', '#용두리이장아들', '#다정남', '#퀸즈그룹법무팀장', '#사랑꾼'],
      },
    },
    {
      id: 'lovelyrunner-imsol',
      title: '☀️ 긍정의 아이콘 | 선재 업고 튀어 "임솔"',
      description:
        '당신은 어떤 어려움 속에서도 희망을 잃지 않는, 햇살 같은 긍정 에너지의 소유자입니다. 사랑하는 것을 지키기 위해서라면, 시간을 거스르는 일도 마다하지 않는 열혈 순정파입니다.',
      detailedDescription:
        '당신의 밝은 에너지는 주변 사람들에게도 좋은 영향을 줍니다. "최애"를 향한 당신의 순수한 사랑과 헌신은, 불가능해 보이는 일도 가능하게 만드는 기적을 일으킵니다. "선재야!"를 외치며 달리는 당신의 모습은 세상에서 가장 빛나는 순간입니다.',
      emoji: '☀️',
      color: '#FFD700',
      traits: ['긍정적', '에너제틱', '순정파', '열정적', '용감함', '헌신적'],
      compatibility: {
        best: ['lovelyrunner-ryusunjae'],
        good: ['queenoftears-baekhyunwoo'],
      },
      recommendations: {
        ottContent: ['선재 업고 튀어 (Lovely Runner)'],
        hashtags: ['#임솔', '#솔선커플', '#긍정에너지', '#최애지킴이', '#타임슬립'],
      },
    },
    {
      id: 'lovelyrunner-ryusunjae',
      title: '🌻 일편단심 해바라기 | 선재 업고 튀어 "류선재"',
      description:
        '당신은 겉으로는 무심해 보이지만, 사실은 첫사랑을 15년간 마음에 품은 지고지순한 순정파입니다. 당신의 세상은 오직 한 사람을 위해 존재하며, 그 사람을 지키는 것이 삶의 목표입니다.',
      detailedDescription:
        '화려한 톱스타의 모습 뒤에는, 사랑하는 사람의 작은 행동 하나하나에 신경 쓰는 섬세함이 숨어있습니다. "네가 나를 잊어도, 내가 너를 기억할게"라는 마음으로, 보이지 않는 곳에서 묵묵히 상대를 지키고 기다릴 줄 아는 당신은 진정한 해바라기입니다.',
      emoji: '🌻',
      color: '#87CEEB',
      traits: ['순정파', '일편단심', '외유내강', '헌신적', '섬세함', '보호자'],
      compatibility: {
        best: ['lovelyrunner-imsol'],
        good: ['moving-leemihyun'],
      },
      recommendations: {
        ottContent: ['선재 업고 튀어 (Lovely Runner)'],
        hashtags: ['#류선재', '#수범이', '#첫사랑', '#일편단심', '#선재앓이'],
      },
    },
    {
      id: 'moving-jangjuwon',
      title: '👊 무한재생 아빠 | 무빙 "장주원"',
      description:
        '당신은 투박하고 거칠어 보이지만, 사실은 가족을 위해서라면 몇 번이고 부서지고 재생하는 것을 반복하는, 세상에서 가장 강한 사람입니다. "아빠는 괴물이야"라는 말은 당신에게 최고의 칭찬입니다.',
      detailedDescription:
        '엄청난 능력을 가졌지만, 당신의 진짜 능력은 바로 "책임감"과 "희생정신"입니다. 내색하지 않지만 가족에 대한 사랑이 삶의 전부이며, 그들을 지킬 수만 있다면 어떤 고통도 감수합니다. 당신의 무뚝뚝함 속에는 세상에서 가장 깊은 부성애가 담겨 있습니다.',
      emoji: '👊',
      color: '#696969',
      traits: ['부성애', '희생', '책임감', '외강내유', '강인함', '보호자'],
      compatibility: {
        best: ['moving-leemihyun'],
        good: ['queenoftears-baekhyunwoo'],
      },
      recommendations: {
        ottContent: ['무빙 (Moving)'],
        hashtags: ['#장주원', '#구룡포', '#괴물', '#무한재생', '#딸바보'],
      },
    },
    {
      id: 'moving-leemihyun',
      title: '👂 초인오감 엄마 | 무빙 "이미현"',
      description:
        '당신은 남들보다 뛰어난 감각과 이성으로, 어떤 상황에서도 침착함을 잃지 않고 소중한 것을 지켜내는 전략가입니다. 당신의 모성애는 조용하지만, 세상 그 무엇보다 강합니다.',
      detailedDescription:
        '평범한 돈까스 가게 사장처럼 보이지만, 당신의 눈과 귀는 항상 아들을 향해 있습니다. 위험을 미리 감지하고, 모든 변수를 계산하여 최선의 수를 둡니다. "엄마가 다 알아서 할게"라는 말에는, 모든 것을 책임지려는 당신의 강인함과 사랑이 담겨 있습니다.',
      emoji: '👂',
      color: '#556B2F',
      traits: ['모성애', '이성적', '전략가', '침착함', '강인함', '희생'],
      compatibility: {
        best: ['moving-jangjuwon'],
        good: ['theglory-moondongeun'],
      },
      recommendations: {
        ottContent: ['무빙 (Moving)'],
        hashtags: ['#이미현', '#남산돈까스', '#초인오감', '#지략가', '#아들지킴이'],
      },
    },
    {
      id: 'gyeongseong-jangtaesang',
      title: '💼 생존의 달인 | 경성크리처 "장태상"',
      description:
        '당신은 격동의 시대 속에서 살아남는 법을 아는, 최고의 정보통이자 현실주의자입니다. "애국도 돈이 있어야 한다"고 말하지만, 결국 자기 사람들을 위해서는 목숨까지 거는 의리파입니다.',
      detailedDescription:
        '화려한 스타일과 여유로운 태도 뒤에는, 어떤 위기 상황도 헤쳐나가는 뛰어난 수완과 정보력이 숨어있습니다. 이기적으로 보일 수 있지만, 당신의 생존 방식은 곧 "내 사람"들을 지키는 방식이기도 합니다. 당신은 혼란 속에서 자신만의 왕국을 건설하는 리더입니다.',
      emoji: '💼',
      color: '#8B4513',
      traits: ['현실주의', '정보력', '의리', '리더십', '생존력', '수완가'],
      compatibility: {
        best: ['queenoftears-honghaein'],
        good: ['rebornrich-jindojun'],
      },
      recommendations: {
        ottContent: ['경성크리처 (Gyeongseong Creature)'],
        hashtags: ['#장태상', '#금옥당', '#경성제일의정보통', '#본정의주인', '#생존왕'],
      },
    },
    {
      id: 'theglory-moondongeun',
      title: '♟️ 침묵의 복수자 | 더 글로리 "문동은"',
      description:
        '당신은 깊은 상처를 가슴에 묻고, 오랜 시간 침묵 속에서 칼을 갈아온 치밀한 전략가입니다. 당신의 목표는 용서가 아닌, 완벽하고 처절한 복수입니다.',
      detailedDescription:
        '당신의 세상은 온통 흑과 백뿐입니다. 목표를 이루기 위해 감정을 철저히 배제하고, 한 수 한 수 신중하게 바둑을 두듯 인생의 판을 짭니다. "오늘부터 내 꿈은 너야"라고 말하는 당신의 조용한 분노는, 그 어떤 소리보다 크고 무섭게 세상을 뒤흔듭니다.',
      emoji: '♟️',
      color: '#2F4F4F',
      traits: ['전략가', '인내심', '치밀함', '복수', '지성', '외유내강'],
      compatibility: {
        best: ['rebornrich-jindojun'],
        good: ['moving-leemihyun'],
      },
      recommendations: {
        ottContent: ['더 글로리 (The Glory)'],
        hashtags: ['#문동은', '#연진아', '#나의체육관에온걸환영해', '#복수극', '#바둑'],
      },
    },
    {
      id: 'rebornrich-jindojun',
      title: '♟️ 인생 2회차 전략가 | 재벌집 막내아들 "진도준"',
      description:
        '당신은 미래를 알고 있다는 압도적인 무기를 바탕으로, 거대한 재벌가를 상대로 전쟁을 벌이는 대담한 전략가입니다. 당신의 목표는 단순한 복수를 넘어, 제국의 왕좌를 차지하는 것입니다.',
      detailedDescription:
        '억울한 죽음 이후, 재벌집 막내아들로 다시 태어난 당신은 과거의 지식으로 미래를 예측하고 판을 지배합니다. 냉철한 분석과 과감한 베팅으로 상대를 하나씩 무너뜨리는 모습은 마치 체스 마스터와 같습니다. 당신에게 인생은 "돈"으로 모든 것을 증명하는 전쟁터입니다.',
      emoji: '♟️',
      color: '#000080',
      traits: ['전략가', '야망', '지성', '복수', '대담함', '분석적'],
      compatibility: {
        best: ['theglory-moondongeun'],
        good: ['gyeongseong-jangtaesang'],
      },
      recommendations: {
        ottContent: ['재벌집 막내아들 (Reborn Rich)'],
        hashtags: ['#진도준', '#인생2회차', '#순양의주인', '#미래를아는남자', '#복수극'],
      },
    },
    {
      id: 'attorneywoo-wooyoungwoo',
      title: '🐋 순수한 천재 | 이상한 변호사 우영우 "우영우"',
      description:
        '당신은 세상의 편견에 맞서 자신만의 방식으로 소통하는, 순수하고 천재적인 영혼의 소유자입니다. 당신의 세상은 고래와 법으로 가득 차 있으며, 누구도 보지 못하는 관점으로 진실을 꿰뚫어 봅니다.',
      detailedDescription:
        '똑바로 읽어도 거꾸로 읽어도 우영우인 당신은, 복잡한 세상을 자신만의 논리와 순수함으로 살아갑니다. 다른 사람들과는 조금 다른 시각을 가졌지만, 바로 그 점이 당신을 특별하게 만듭니다. 당신이 고래 이야기를 할 때, 세상은 잠시 더 아름다워집니다.',
      emoji: '🐋',
      color: '#ADD8E6',
      traits: ['천재성', '순수함', '논리적', '독특한 관점', '정의로움', '성장'],
      compatibility: {
        best: ['queenoftears-baekhyunwoo'],
        good: ['lovelyrunner-imsol'],
      },
      recommendations: {
        ottContent: ['이상한 변호사 우영우 (Extraordinary Attorney Woo)'],
        hashtags: ['#우영우', '#기러기토마토스위스', '#고래', '#천재변호사', '#봄날의햇살'],
      },
    },
  ],
};
