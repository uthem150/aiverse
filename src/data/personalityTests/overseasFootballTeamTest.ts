import type { PersonalityTestData } from '@/types/personalityTest';

export const overseasFootballTeamTestData: PersonalityTestData = {
  id: 'overseas-football-team-test',
  title: '⚽ 내 성격과 찰떡인 해외 축구팀 찾기',
  description:
    '당신의 열정과 스타일은 어떤 축구 클럽과 닮았을까요? 전 세계 최고의 클럽들 속에서 당신의 영혼의 팀을 찾아보세요!',
  category: 'sports',
  resultTypes: [
    'manchester-city',
    'liverpool',
    'arsenal',
    'manchester-united',
    'chelsea',
    'tottenham-hotspur',
    'newcastle-united',
    'real-madrid',
    'fc-barcelona',
    'atletico-madrid',
    'bayern-munich',
    'borussia-dortmund',
    'psg',
    'juventus',
    'ac-milan',
    'inter-milan',
    'ajax',
  ],
  questions: [
    {
      id: 'q1',
      question: '경기에서 가장 중요하다고 생각하는 것은?',
      options: [
        {
          id: 'q1_a',
          text: '결과가 전부다. 어떤 방식으로든 이기기만 하면 된다.',
          emoji: '🏆',
          scores: { 'real-madrid': 2, juventus: 2, chelsea: 2 },
        },
        {
          id: 'q1_b',
          text: '아름다운 플레이. 이기지 못하더라도 과정이 멋있어야 한다.',
          emoji: '🎨',
          scores: { 'fc-barcelona': 3, arsenal: 2 },
        },
        {
          id: 'q1_c',
          text: '절대 포기하지 않는 투지와 열정. 경기장을 뜨겁게 달궈야 한다.',
          emoji: '🔥',
          scores: { liverpool: 3, 'atletico-madrid': 2, 'borussia-dortmund': 2 },
        },
        {
          id: 'q1_d',
          text: '완벽한 전술로 상대를 압도하는 지적인 플레이.',
          emoji: '🧠',
          scores: { 'manchester-city': 3, 'bayern-munich': 2 },
        },
      ],
    },
    {
      id: 'q2',
      question: '팀을 선택할 때 당신에게 더 중요한 요소는?',
      options: [
        {
          id: 'q2_a',
          text: '오랜 역사와 전통을 가진 명문 구단.',
          emoji: '📜',
          scores: { 'manchester-united': 3, 'real-madrid': 2, 'ac-milan': 2 },
        },
        {
          id: 'q2_b',
          text: '막강한 자금력으로 슈퍼스타를 영입해 단숨에 강팀이 된 구단.',
          emoji: '💰',
          scores: { psg: 3, 'manchester-city': 2, chelsea: 1, 'newcastle-united': 2 },
        },
        {
          id: 'q2_c',
          text: '화려하진 않지만, 끈끈한 조직력으로 언더독의 반란을 일으키는 구단.',
          emoji: '🐺',
          scores: { 'atletico-madrid': 3, 'borussia-dortmund': 2 },
        },
        {
          id: 'q2_d',
          text: '유소년 시스템을 통해 직접 키워낸 선수들로 팀을 꾸리는 구단.',
          emoji: '🌱',
          scores: { ajax: 3, 'fc-barcelona': 2, arsenal: 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '당신이 선호하는 팀의 공격 스타일은?',
      options: [
        {
          id: 'q3_a',
          text: '쉴 새 없이 몰아치는 게겐프레싱과 빠른 역습.',
          emoji: '⚡',
          scores: { liverpool: 3, 'borussia-dortmund': 2 },
        },
        {
          id: 'q3_b',
          text: '짧은 패스로 점유율을 지배하며 서서히 상대를 질식시키는 티키타카.',
          emoji: '🔄',
          scores: { 'fc-barcelona': 3, 'manchester-city': 2 },
        },
        {
          id: 'q3_c',
          text: '최고의 선수 한 명이 만들어내는 경이로운 개인 능력.',
          emoji: '✨',
          scores: { psg: 3, 'real-madrid': 2, 'tottenham-hotspur': 1 },
        },
        {
          id: 'q3_d',
          text: '아름답고 예술적인 패스워크로 만들어가는 아트 사커.',
          emoji: '🎭',
          scores: { arsenal: 3, 'fc-barcelona': 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: '경기 막판, 0-1로 지고 있는 상황. 당신의 심정은?',
      options: [
        {
          id: 'q4_a',
          text: '"원래 드라마는 마지막에 쓰는 법." 기적 같은 역전골을 믿어 의심치 않는다.',
          emoji: '🤯',
          scores: { 'manchester-united': 3, 'real-madrid': 2, liverpool: 1 },
        },
        {
          id: 'q4_b',
          text: '"이번에도 안 되나..." 좋은 경기를 하고도 결과를 못 가져올까 봐 불안하다.',
          emoji: '😥',
          scores: { 'tottenham-hotspur': 3, 'borussia-dortmund': 2 },
        },
        {
          id: 'q4_c',
          text: '끝까지 상대를 물고 늘어져 기어이 한 골을 만들어낼 것이라 믿는다.',
          emoji: '😠',
          scores: { 'atletico-madrid': 3, juventus: 2, chelsea: 1 },
        },
        {
          id: 'q4_d',
          text: '괜찮다. 우리는 이미 리그를 지배하고 있으니까. 이 한 경기는 중요치 않다.',
          emoji: '😎',
          scores: { 'bayern-munich': 3, 'manchester-city': 2 },
        },
      ],
    },
    {
      id: 'q5',
      question: '당신이 구단주라면 어떤 철학으로 팀을 운영하겠는가?',
      options: [
        {
          id: 'q5_a',
          text: '"이기는 것이 곧 철학." 성적을 위해서라면 감독 교체도 서슴지 않는다.',
          emoji: '🔪',
          scores: { chelsea: 3, 'real-madrid': 2 },
        },
        {
          id: 'q5_b',
          text: '"클럽은 팬들의 것." 팬들의 목소리에 귀 기울이고, 지역 사회와 함께 성장한다.',
          emoji: '❤️',
          scores: { liverpool: 2, 'borussia-dortmund': 2, 'newcastle-united': 2 },
        },
        {
          id: 'q5_c',
          text: '"우리는 단순한 클럽 그 이상이다." 팀 고유의 정체성과 철학을 지켜나간다.',
          emoji: '🏛️',
          scores: { 'fc-barcelona': 3, ajax: 2, 'bayern-munich': 1 },
        },
        {
          id: 'q5_d',
          text: '"미래를 위한 투자." 유망주를 키워서 비싸게 파는 것도 좋은 전략이다.',
          emoji: '💸',
          scores: { ajax: 2, 'borussia-dortmund': 3 },
        },
      ],
    },
    {
      id: 'q6',
      question: '선수단의 어떤 모습을 볼 때 가장 자랑스러운가?',
      options: [
        {
          id: 'q6_a',
          text: '세계 최고의 선수들이 모여 압도적인 스쿼드를 자랑할 때.',
          emoji: '🌟',
          scores: { 'real-madrid': 3, psg: 3, 'manchester-city': 1 },
        },
        {
          id: 'q6_b',
          text: '끈끈한 수비력으로 상대의 공격을 무력화시킬 때.',
          emoji: '🧱',
          scores: { 'atletico-madrid': 2, juventus: 2, 'inter-milan': 2 },
        },
        {
          id: 'q6_c',
          text: '오랜 암흑기를 끝내고 다시 영광의 시대를 열어갈 때.',
          emoji: '🌅',
          scores: { 'ac-milan': 3, 'newcastle-united': 2, 'manchester-united': 1 },
        },
        {
          id: 'q6_d',
          text: '젊고 재능있는 선수들이 그라운드에서 마음껏 뛰노는 모습을 볼 때.',
          emoji: '🏃‍♂️',
          scores: { arsenal: 2, ajax: 2, 'borussia-dortmund': 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: '당신이 선호하는 팀의 유니폼 스타일은?',
      options: [
        {
          id: 'q7_a',
          text: '전통과 역사가 느껴지는 클래식하고 기품있는 디자인.',
          emoji: '👑',
          scores: { 'real-madrid': 2, 'manchester-united': 2, juventus: 1, 'ac-milan': 2 },
        },
        {
          id: 'q7_b',
          text: '도시적이고 패셔너블한, 최신 트렌드를 선도하는 디자인.',
          emoji: '✨',
          scores: { psg: 3, 'inter-milan': 2 },
        },
        {
          id: 'q7_c',
          text: '강렬한 색상과 심플함으로 팀의 정체성을 드러내는 디자인.',
          emoji: '🔴',
          scores: { liverpool: 2, 'bayern-munich': 2, arsenal: 1 },
        },
        {
          id: 'q7_d',
          text: '독특하고 개성 넘치는, 때로는 실험적인 디자인.',
          emoji: '🎨',
          scores: { 'borussia-dortmund': 2, 'fc-barcelona': 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '팀이 어려운 시기를 겪고 있을 때, 당신의 태도는?',
      options: [
        {
          id: 'q8_a',
          text: '언제나 그랬듯, 곧 다시 정상에 오를 것이라 믿고 묵묵히 지지한다.',
          emoji: '💪',
          scores: { 'manchester-united': 2, 'bayern-munich': 2, 'ac-milan': 1 },
        },
        {
          id: 'q8_b',
          text: '과감한 변화가 필요하다. 새로운 감독과 스타 선수를 원한다.',
          emoji: '🔄',
          scores: { chelsea: 3, psg: 1 },
        },
        {
          id: 'q8_c',
          text: '슬프지만… 이것 또한 우리의 운명. 우승 없이도 팀을 사랑할 수 있다.',
          emoji: '💔',
          scores: { 'tottenham-hotspur': 3, 'newcastle-united': 1 },
        },
        {
          id: 'q8_d',
          text: '이럴 때일수록 팬들이 더 뭉쳐서 선수들에게 힘을 줘야 한다.',
          emoji: '🗣️',
          scores: { liverpool: 2, 'borussia-dortmund': 2, 'atletico-madrid': 1 },
        },
      ],
    },
    {
      id: 'q9',
      question: '당신의 성격은 어느 쪽에 더 가까운가?',
      options: [
        {
          id: 'q9_a',
          text: '이성적이고 냉철하다. 감정보단 데이터와 분석을 믿는다.',
          emoji: '📊',
          scores: { 'manchester-city': 2, 'bayern-munich': 2, juventus: 1 },
        },
        {
          id: 'q9_b',
          text: '열정적이고 감성적이다. 가슴이 시키는 대로 행동한다.',
          emoji: '❤️‍🔥',
          scores: { liverpool: 3, 'atletico-madrid': 2, 'borussia-dortmund': 1 },
        },
        {
          id: 'q9_c',
          text: '이상주의적인 낭만가. 현실보단 꿈과 철학을 좇는다.',
          emoji: '몽',
          scores: { 'fc-barcelona': 2, arsenal: 2, ajax: 1 },
        },
        {
          id: 'q9_d',
          text: '실용적이고 현실적이다. 명분보단 실리를 추구한다.',
          emoji: '💼',
          scores: { chelsea: 2, 'inter-milan': 2, 'kiwoom-heroes': 0 },
        }, // kiwoom is baseball
      ],
    },
    {
      id: 'q10',
      question: '경기장 응원 문화 중 가장 마음에 드는 것은?',
      options: [
        {
          id: 'q10_a',
          text: '수만 명이 하나 되어 부르는 장엄한 앤섬(Anthem).',
          emoji: '🎶',
          scores: { liverpool: 3, 'borussia-dortmund': 1 },
        },
        {
          id: 'q10_b',
          text: '상대를 압도하는 거대한 카드 섹션과 현수막.',
          emoji: '🖼️',
          scores: { 'borussia-dortmund': 3, 'atletico-madrid': 1 },
        },
        {
          id: 'q10_c',
          text: '최고의 선수들을 향한 아낌없는 환호와 박수.',
          emoji: '👏',
          scores: { 'real-madrid': 2, psg: 2 },
        },
        {
          id: 'q10_d',
          text: '가족적인 분위기에서 다 함께 즐기는 응원.',
          emoji: '👨‍👩‍👧‍👦',
          scores: { 'bayern-munich': 2, 'newcastle-united': 1 },
        },
      ],
    },
    {
      id: 'q11',
      question: '당신이 생각하는 "위대한 클럽"의 조건은?',
      options: [
        {
          id: 'q11_a',
          text: '수많은 트로피. 역사가 증명하는 압도적인 우승 횟수.',
          emoji: '🥇',
          scores: { 'real-madrid': 3, 'bayern-munich': 2, 'manchester-united': 2, 'ac-milan': 1 },
        },
        {
          id: 'q11_b',
          text: '축구계에 큰 획을 그은 혁신적인 전술과 철학.',
          emoji: '💡',
          scores: { 'fc-barcelona': 3, ajax: 3, arsenal: 1 },
        },
        {
          id: 'q11_c',
          text: '전 세계를 아우르는 거대한 팬덤과 브랜드 가치.',
          emoji: '🌍',
          scores: { 'manchester-united': 2, 'real-madrid': 2, 'fc-barcelona': 1 },
        },
        {
          id: 'q11_d',
          text: '어려움을 딛고 일어나 희망의 상징이 된 스토리.',
          emoji: '✨',
          scores: { 'newcastle-united': 2, liverpool: 1, 'ac-milan': 1 },
        },
      ],
    },
    {
      id: 'q12',
      question: '여행을 간다면 어떤 스타일의 도시를 선호하는가?',
      options: [
        {
          id: 'q12_a',
          text: '역사와 전통이 살아 숨 쉬는 고풍스러운 도시.',
          emoji: '🏰',
          scores: { 'real-madrid': 1, 'manchester-united': 1, juventus: 1, 'bayern-munich': 1 },
        },
        {
          id: 'q12_b',
          text: '화려하고 세련된, 세계적인 트렌드의 중심지.',
          emoji: '💎',
          scores: { psg: 3, 'ac-milan': 2, 'inter-milan': 1 },
        },
        {
          id: 'q12_c',
          text: '서민적이고 활기 넘치는, 사람 냄새나는 공업 도시.',
          emoji: '🏭',
          scores: { liverpool: 2, 'borussia-dortmund': 2, 'newcastle-united': 1 },
        },
        {
          id: 'q12_d',
          text: '자유롭고 예술적인 분위기가 가득한 개성 있는 도시.',
          emoji: '🎨',
          scores: { 'fc-barcelona': 2, arsenal: 2, ajax: 1 },
        },
      ],
    },
    {
      id: 'q13',
      question: '문제 해결 방식은?',
      options: [
        {
          id: 'q13_a',
          text: '전략을 세우고 시스템으로 해결한다.',
          emoji: '⚙️',
          scores: { 'manchester-city': 3, 'bayern-munich': 2 },
        },
        {
          id: 'q13_b',
          text: '강력한 리더십과 카리스마로 밀어붙인다.',
          emoji: '🦁',
          scores: { 'manchester-united': 2, juventus: 1 },
        },
        {
          id: 'q13_c',
          text: '모두가 하나 되는 투지와 정신력으로 극복한다.',
          emoji: '❤️',
          scores: { 'atletico-madrid': 3, liverpool: 2 },
        },
        {
          id: 'q13_d',
          text: '필요하다면 거액을 투자해 최고의 전문가를 데려온다.',
          emoji: '🤝',
          scores: { chelsea: 2, psg: 2 },
        },
      ],
    },
    {
      id: 'q14',
      question: '당신이 매력을 느끼는 리더의 유형은?',
      options: [
        {
          id: 'q14_a',
          text: '모두를 아우르는 아버지 같은 따뜻한 카리스마의 소유자.',
          emoji: '👨‍👧‍👦',
          scores: { 'manchester-united': 1, 'ac-milan': 1 },
        }, // Ferguson, Ancelotti
        {
          id: 'q14_b',
          text: '모두를 열광시키는 뜨거운 열정의 선동가.',
          emoji: '🔥',
          scores: { liverpool: 2, 'atletico-madrid': 2 },
        }, // Klopp, Simeone
        {
          id: 'q14_c',
          text: '모든 것을 꿰뚫어 보는 냉철한 전술가.',
          emoji: '♟️',
          scores: { 'manchester-city': 3, chelsea: 1 },
        }, // Guardiola
        {
          id: 'q14_d',
          text: '자신만의 확고한 철학을 가진 이상주의자.',
          emoji: '🧘',
          scores: { 'fc-barcelona': 2, arsenal: 2, ajax: 1 },
        }, // Cruyff, Wenger
      ],
    },
    {
      id: 'q15',
      question: '성공에 대한 당신의 생각은?',
      options: [
        {
          id: 'q15_a',
          text: '성공은 당연한 것. 항상 최고가 되어야 한다.',
          emoji: '👑',
          scores: { 'real-madrid': 3, 'bayern-munich': 3, 'manchester-united': 1 },
        },
        {
          id: 'q15_b',
          text: '성공하지 못해도 괜찮다. 희망을 잃지 않는 것이 중요하다.',
          emoji: '🌱',
          scores: { 'tottenham-hotspur': 3, 'newcastle-united': 1 },
        },
        {
          id: 'q15_c',
          text: '한 번의 성공보다 꾸준히 상위권을 유지하는 것이 더 위대하다.',
          emoji: '📈',
          scores: { juventus: 2, 'inter-milan': 1, 'manchester-city': 1 },
        },
        {
          id: 'q15_d',
          text: '과거의 영광을 되찾기 위해 끊임없이 노력해야 한다.',
          emoji: '🏛️',
          scores: { 'ac-milan': 3, 'manchester-united': 2, liverpool: 1 },
        },
      ],
    },
    {
      id: 'q16',
      question: '당신은 팀의 어떤 점에 가장 큰 자부심을 느끼는가?',
      options: [
        {
          id: 'q16_a',
          text: '아무도 따라올 수 없는 우리 팀만의 "철학".',
          emoji: '📖',
          scores: { 'fc-barcelona': 3, ajax: 2, 'bayern-munich': 1 },
        },
        {
          id: 'q16_b',
          text: '세계 최고의 선수들이 뛰고 있다는 "스타성".',
          emoji: '🤩',
          scores: { 'real-madrid': 3, psg: 2 },
        },
        {
          id: 'q16_c',
          text: '포기하지 않고 만들어내는 "역전의 DNA".',
          emoji: '🧬',
          scores: { liverpool: 2, 'manchester-united': 2 },
        },
        {
          id: 'q16_d',
          text: '강팀들을 상대로 승리하는 "언더독의 정신".',
          emoji: '🔥',
          scores: { 'atletico-madrid': 3, 'borussia-dortmund': 2, 'tottenham-hotspur': 1 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'manchester-city',
      title: '🧠 완벽을 추구하는 전술가, 맨체스터 시티',
      description:
        '당신은 과정과 결과를 모두 지배하는 완벽주의자입니다. 뛰어난 전술과 시스템으로 상대를 압도하는 것에서 희열을 느낍니다.',
      detailedDescription:
        '감정에 휘둘리기보다 냉철한 분석과 데이터를 신뢰합니다. 최고의 감독, 최고의 시스템 아래에서 한 치의 오차도 없이 움직이는 축구를 선호하며, 현대 축구의 정점에 서는 것을 당연하게 생각합니다. 당신에게 축구는 체스이며, 당신은 언제나 승리하는 플레이어입니다.',
      emoji: '🧠',
      color: '#6CABDD',
      traits: ['전술적', '완벽주의', '현대적', '시스템', '지배', '냉철함'],
      compatibility: {
        best: ['바이에른 뮌헨'],
        avoid: ['맨체스터 유나이티드'],
      },
      recommendations: {
        celebrities: ['펩 과르디올라', '케빈 데 브라위너', '엘링 홀란드'],
        hashtags: ['#ManCity', '#CTID', '#EPL', '#펩시티'],
      },
    },
    {
      id: 'liverpool',
      title: '🔥 심장이 뜨거운 열정의 화신, 리버풀',
      description:
        '당신에게 축구는 삶 그 자체입니다. 뜨거운 열정과 끈끈한 유대감으로 팀과 함께 울고 웃는, 심장이 뜨거운 사람입니다.',
      detailedDescription:
        '혼자 걷지 않는다는 "You\'ll Never Walk Alone" 정신처럼, 당신은 공동체의 힘을 믿습니다. 불리한 상황에서도 포기하지 않고 기적을 만들어내는 드라마틱한 경기에 열광하며, 그라운드를 누비는 선수들의 투지에 감동합니다. 당신의 열정은 안필드를 가득 채우는 함성과 같습니다.',
      emoji: '🔥',
      color: '#C8102E',
      traits: ['열정', '공동체', '드라마', '투지', '감성적', '기적'],
      compatibility: {
        best: ['보루시아 도르트문트'],
        avoid: ['맨체스터 유나이티드', '첼시'],
      },
      recommendations: {
        celebrities: ['위르겐 클롭', '스티븐 제라드', '모하메드 살라'],
        hashtags: ['#LFC', '#YNWA', '#TheReds', '#안필드'],
      },
    },
    {
      id: 'arsenal',
      title: '🎨 그라운드의 아티스트, 아스날',
      description:
        '당신은 결과보다 과정을, 승리보다 아름다움을 중요하게 생각하는 낭만주의자입니다. 축구는 당신에게 하나의 예술입니다.',
      detailedDescription:
        '당신은 이기는 것도 중요하지만, 어떻게 이기는지가 더 중요하다고 믿습니다. 유려한 패스워크, 창의적인 플레이를 보며 희열을 느끼죠. 젊고 재능있는 선수들이 성장하며 만들어가는 이야기에 매료되며, 팀 고유의 스타일과 철학을 지키는 것에 큰 자부심을 느낍니다.',
      emoji: '🎨',
      color: '#EF0107',
      traits: ['예술적', '낭만', '스타일', '유망주', '과정 중시', '철학'],
      compatibility: {
        best: ['FC 바르셀로나', '아약스'],
        avoid: ['첼시', '토트넘 홋스퍼'],
      },
      recommendations: {
        celebrities: ['아르센 벵거', '티에리 앙리', '부카요 사카'],
        hashtags: ['#Arsenal', '#COYG', '#Gunners', '#아름다운축구'],
      },
    },
    {
      id: 'manchester-united',
      title: '👑 영광의 역사를 꿈꾸는 지배자, 맨체스터 유나이티드',
      description:
        '당신은 과거의 영광을 기억하며, 항상 최고가 되어야 한다는 자부심으로 가득 찬 사람입니다. 1등이 아니면 의미가 없습니다.',
      detailedDescription:
        '당신에게 맨유는 단순한 축구팀이 아닌, 세계 최고의 브랜드이자 자부심입니다. 퍼기 타임의 짜릿한 역전극과 수많은 트로피의 역사를 기억하며, 현재의 어려움 속에서도 언젠가 다시 정상에 오를 것이라 굳게 믿습니다. "Glory Glory Man United"를 외칠 준비가 되어있습니다.',
      emoji: '👑',
      color: '#DA291C',
      traits: ['역사', '자부심', '브랜드', '승리주의', '기대치 높음', '전통'],
      compatibility: {
        best: ['레알 마드리드', 'AC 밀란'],
        avoid: ['리버풀', '맨체스터 시티'],
      },
      recommendations: {
        celebrities: ['알렉스 퍼거슨', '웨인 루니', '브루노 페르난데스'],
        hashtags: ['#MUFC', '#GGMU', '#레드데블스', '#꿈의구장'],
      },
    },
    {
      id: 'chelsea',
      title: '💼 승리를 위해서라면 수단을 가리지 않는 실용주의자, 첼시',
      description:
        '아름다움? 철학? 당신에게 중요한 것은 오직 트로피뿐입니다. 목표를 위해서라면 어떤 변화도 두려워하지 않는 냉철한 승부사입니다.',
      detailedDescription:
        '당신은 매우 현실적이고 실용적인 사람입니다. 팀에 문제가 생기면 감상에 젖기보다, 빠르게 원인을 분석하고 과감한 해결책을 찾습니다. 감독이든 선수든, 팀의 승리에 도움이 되지 않는다면 언제든 바꿀 수 있다는 실리적인 마인드를 가지고 있습니다. "파란색 깃발을 높이 들어라!"',
      emoji: '💼',
      color: '#034694',
      traits: ['실용주의', '승부사', '냉철함', '결과 중시', '과감함', '변화'],
      compatibility: {
        best: ['유벤투스', '인테르'],
        avoid: ['아스날', '리버풀'],
      },
      recommendations: {
        celebrities: ['조세 무리뉴', '디디에 드록바', '은골로 캉테'],
        hashtags: ['#ChelseaFC', '#CFC', '#TheBlues', '#로만제국'],
      },
    },
    {
      id: 'tottenham-hotspur',
      title: '💔 "이번엔 다르다"고 믿는 순정파, 토트넘 홋스퍼',
      description:
        '매번 아쉽게 무너지지만, 그럼에도 불구하고 "이번엔 우승할 수 있다"는 희망을 놓지 않는 당신은 진정한 순정파입니다.',
      detailedDescription:
        '당신은 화려한 공격 축구와 뛰어난 개인기를 가진 선수들을 사랑합니다. 비록 중요한 순간마다 미끄러지는 아픔을 겪지만, "언젠가는..."이라는 희망으로 팀을 응원합니다. 결과보다 팀에 대한 애정 그 자체가 더 중요한, 헌신적인 팬입니다. 손흥민 선수의 골을 함께 외칠 준비가 되셨나요?',
      emoji: '💔',
      color: '#FFFFFF',
      traits: ['순정', '기대', '희망', '공격축구', '인내', '헌신'],
      compatibility: {
        best: ['보루시아 도르트문트'],
        avoid: ['아스날', '첼시'],
      },
      recommendations: {
        celebrities: ['손흥민', '해리 케인', '가레스 베일'],
        hashtags: ['#Spurs', '#COYS', '#손흥민', '#우승기원'],
      },
    },
    {
      id: 'newcastle-united',
      title: '🌅 새로운 시대를 꿈꾸는 열정적인 부흥가, 뉴캐슬 유나이티드',
      description:
        '오랜 암흑기를 견뎌낸 당신. 이제 막강한 자본과 함께 새로운 희망을 보며 팀의 부활을 꿈꾸고 있습니다.',
      detailedDescription:
        '당신은 그 누구보다 뜨거운 팬심과 충성심을 가졌습니다. 오랜 시간 팀을 지지해왔으며, 최근의 변화를 통해 과거의 영광을 되찾을 수 있다는 희망에 부풀어 있습니다. 당신에게 축구는 단순한 경기가 아닌, 지역 사회의 자부심이자 정체성입니다.',
      emoji: '🌅',
      color: '#241F20',
      traits: ['충성심', '희망', '부활', '자부심', '지역밀착', '열정'],
      compatibility: {
        best: ['AC 밀란'],
        avoid: ['맨체스터 유나이티드'],
      },
      recommendations: {
        celebrities: ['앨런 시어러', '키어런 트리피어', '브루누 기마랑이스'],
        hashtags: ['#NUFC', '#ToonArmy', '#Magpies', '#뉴캐슬'],
      },
    },
    {
      id: 'real-madrid',
      title: '⭐ 세계 최고를 갈망하는 은하계의 황제, 레알 마드리드',
      description:
        '당신은 "최고가 아니면 의미 없다"고 생각합니다. 세계 최고의 선수들이 모여 가장 화려하게, 가장 극적으로 승리하는 것을 즐깁니다.',
      detailedDescription:
        '당신은 승자의 DNA를 가지고 태어났습니다. 챔피언스리그의 사나이라는 별명처럼, 큰 무대에서 극적인 승리를 거두는 것에 열광합니다. 세계 최고의 선수들(갈락티코)이 흰 유니폼을 입고 뛰는 모습 그 자체에서 자부심을 느낍니다. "Hala Madrid!"를 외칠 준비가 되셨나요?',
      emoji: '⭐',
      color: '#FEBE10',
      traits: ['최고 지향', '스타 파워', '승자의 DNA', '역사', '화려함', '드라마'],
      compatibility: {
        best: ['맨체스터 유나이티드', 'AC 밀란'],
        avoid: ['FC 바르셀로나', '아틀레티코 마드리드'],
      },
      recommendations: {
        celebrities: ['지네딘 지단', '크리스티아누 호날두', '주드 벨링엄'],
        hashtags: ['#HalaMadrid', '#RealMadrid', '#갈락티코', '#챔스의신'],
      },
    },
    {
      id: 'fc-barcelona',
      title: '🏛️ 철학을 간직한 클럽 그 이상의 존재, FC 바르셀로나',
      description:
        '당신에게 축구는 하나의 철학입니다. "클럽 그 이상의(Més que un Club)"라는 모토처럼, 팀의 정체성과 가치를 무엇보다 중요하게 생각합니다.',
      detailedDescription:
        '당신은 티키타카로 대표되는 아름다운 축구 철학에 깊은 자부심을 느낍니다. 라 마시아에서 키워낸 유소년 선수들이 1군 무대에서 활약하는 모습에 감동하며, 팀이 단순한 스포츠 클럽을 넘어 하나의 사회적 상징이 되기를 바랍니다. 당신은 축구를 통해 세상을 봅니다.',
      emoji: '🏛️',
      color: '#A50044',
      traits: ['철학', '정체성', '예술', '유소년', '가치', '자부심'],
      compatibility: {
        best: ['아스날', '아약스'],
        avoid: ['레알 마드리드', '첼시'],
      },
      recommendations: {
        celebrities: ['요한 크루이프', '리오넬 메시', '차비 에르난데스'],
        hashtags: ['#ForçaBarça', '#MésQueUnClub', '#바르사', '#티키타카'],
      },
    },
    {
      id: 'atletico-madrid',
      title: '😠 투지로 세상을 정복하는 언더독, 아틀레티코 마드리드',
      description:
        '"우리에게 불가능은 없다!" 당신은 강팀에 맞서 끈끈한 조직력과 불굴의 투지로 싸우는 언더독의 정신을 사랑합니다.',
      detailedDescription:
        '당신은 화려한 축구보다, 몸을 아끼지 않는 수비와 강력한 정신력에 더 큰 매력을 느낍니다. 거함 레알 마드리드와 바르셀로나 사이에서 자신들만의 방식으로 생존하고 승리하는 모습에 열광합니다. 시메오네 감독의 뜨거운 열정이 바로 당신의 열정입니다.',
      emoji: '😠',
      color: '#272E61',
      traits: ['투지', '정신력', '언더독', '조직력', '수비', '열정'],
      compatibility: {
        best: ['보루시아 도르트문트', '리버풀'],
        avoid: ['레알 마드리드', 'FC 바르셀로나'],
      },
      recommendations: {
        celebrities: ['디에고 시메오네', '앙투안 그리즈만', '코케'],
        hashtags: ['#AúpaAtleti', '#Cholismo', '#AT마드리드', '#투혼'],
      },
    },
    {
      id: 'bayern-munich',
      title: '🤖 한 치의 오차도 없는 독일의 제왕, 바이에른 뮌헨',
      description:
        '당신은 압도적인 힘과 효율성으로 리그를 지배하는 것을 당연하게 생각합니다. 축구는 감정이 아닌, 과학이자 시스템입니다.',
      detailedDescription:
        '당신은 "Mia san mia(우리는 우리다)"라는 모토처럼, 자신들에 대한 강한 믿음과 자부심을 가지고 있습니다. 꾸준하고 안정적으로 승리를 쌓아가는 모습에서 안정감을 느끼며, 한두 경기의 패배에 흔들리지 않는 강한 멘탈의 소유자입니다. 당신에게 우승은 목표가 아닌 일상입니다.',
      emoji: '🤖',
      color: '#DC052D',
      traits: ['효율', '지배', '안정감', '자부심', '시스템', '꾸준함'],
      compatibility: {
        best: ['맨체스터 시티', '유벤투스'],
        avoid: ['보루시아 도르트문트'],
      },
      recommendations: {
        celebrities: ['프란츠 베켄바워', '토마스 뮐러', '해리 케인'],
        hashtags: ['#MiaSanMia', '#FCBayern', '#분데스리가', '#독일의자존심'],
      },
    },
    {
      id: 'borussia-dortmund',
      title: '🐝 노란 벌떼 군단의 열정적인 심장, 보루시아 도르트문트',
      description:
        '당신은 젊음, 패기, 그리고 팬들의 열광적인 응원이 만들어내는 축구의 순수한 에너지를 사랑합니다. 당신의 심장은 노란색입니다.',
      detailedDescription:
        '당신은 세계적인 명성을 자랑하는 "노란 장벽(Yellow Wall)"의 일원이 될 자격이 충분합니다. 유망주를 발굴해 월드클래스로 키워내는 과정에 보람을 느끼며, 강팀 바이에른 뮌헨에 맞서는 언더독의 입장을 즐깁니다. 당신에게 축구는 열정 그 자체입니다.',
      emoji: '🐝',
      color: '#FDE100',
      traits: ['열정', '젊음', '에너지', '팬심', '유망주', '언더독'],
      compatibility: {
        best: ['리버풀', '아틀레티코 마드리드'],
        avoid: ['바이에른 뮌헨'],
      },
      recommendations: {
        celebrities: ['마르코 로이스', '주드 벨링엄', '엘링 홀란드'],
        hashtags: ['#EchteLiebe', '#BVB', '#돌문', '#노란장벽'],
      },
    },
    {
      id: 'psg',
      title: '💎 파리의 밤을 수놓는 슈퍼스타 군단, 파리 생제르맹',
      description:
        '이왕이면 가장 화려하게! 당신은 세계 최고의 슈퍼스타들이 한 팀에서 뛰는 모습을 보며 즐거움을 느끼는, 화려함의 추종자입니다.',
      detailedDescription:
        '당신에게 축구는 최고의 엔터테인먼트입니다. 축구와 패션, 문화의 결합을 즐기며, 경기장 안팎에서 가장 빛나는 스타들을 응원합니다. 팀의 역사나 철학보다는, 현재 팀이 가진 압도적인 스타성과 브랜드 가치에 더 큰 매력을 느낍니다.',
      emoji: '💎',
      color: '#004170',
      traits: ['스타성', '화려함', '트렌디', '자본', '브랜드', '엔터테인먼트'],
      compatibility: {
        best: ['맨체스터 시티', '레알 마드리드'],
        avoid: ['아약스', '아틀레티코 마드리드'],
      },
      recommendations: {
        celebrities: ['킬리안 음바페', '네이마르', '즐라탄 이브라히모비치'],
        hashtags: ['#PSG', '#IciCestParis', '#파리', '#슈퍼스타'],
      },
    },
    {
      id: 'juventus',
      title: '🦓 승리를 숙명으로 여기는 올드 레이디, 유벤투스',
      description:
        '"끝까지(Fino alla Fine)". 당신은 어떤 상황에서도 승리를 포기하지 않는 강인한 정신력과 실리적인 태도를 가진 승부사입니다.',
      detailedDescription:
        '당신은 이탈리아 최강의 클럽이라는 자부심을 가지고 있습니다. 화려한 공격보다, 단단한 수비를 바탕으로 한 실리적인 축구를 선호하며, 승리를 위해서라면 어떤 타협도 하지 않습니다. 당신에게 승리는 선택이 아닌 숙명입니다.',
      emoji: '🦓',
      color: '#FFFFFF',
      traits: ['승리주의', '실리', '전통', '수비', '정신력', '자부심'],
      compatibility: {
        best: ['첼시', '바이에른 뮌헨'],
        avoid: ['AC 밀란', '인테르'],
      },
      recommendations: {
        celebrities: ['알레산드로 델 피에로', '잔루이지 부폰', '파벨 네드베트'],
        hashtags: ['#ForzaJuve', '#FinoAllaFine', '#유베', '#올드레이디'],
      },
    },
    {
      id: 'ac-milan',
      title: '🔴⚫ 영광 재현을 꿈꾸는 붉은악마 군단, AC 밀란',
      description:
        '과거의 영광은 전설이 되었습니다. 당신은 암흑기를 이겨내고 다시 유럽 정상에 서려는 팀의 재건 과정을 함께하는 로맨티스트입니다.',
      detailedDescription:
        '당신은 AC밀란의 화려했던 역사를 기억하며, 그 시절의 영광을 되찾기를 간절히 바랍니다. 패션의 도시 밀라노처럼 세련되고 기품있는 스타일을 사랑하며, 젊은 선수와 베테랑이 조화를 이뤄 팀을 재건하는 스토리에 감동합니다. 당신의 심장은 로쏘네리(붉은색과 검은색)입니다.',
      emoji: '🔴',
      color: '#FB090B',
      traits: ['전통', '재건', '스타일', '로맨스', '역사', '영광'],
      compatibility: {
        best: ['맨체스터 유나이티드', '레알 마드리드'],
        avoid: ['인테르', '유벤투스'],
      },
      recommendations: {
        celebrities: ['파올로 말디니', '카카', '즐라탄 이브라히모비치'],
        hashtags: ['#ForzaMilan', '#SempreMilan', '#Rossoneri', '#AC밀란'],
      },
    },
    {
      id: 'inter-milan',
      title: '🔵⚫ 실리를 추구하는 푸른 뱀, 인테르',
      description:
        '당신은 화려함보다는 견고함, 이상보다는 현실적인 승리를 중요하게 생각하는 전략가입니다.',
      detailedDescription:
        '당신은 AC밀란이라는 라이벌과 공존하며 자신들만의 정체성을 확립해 온 팀의 역사에 자부심을 느낍니다. 끈끈한 수비 조직력과 효율적인 역습을 바탕으로 한 실리적인 축구를 선호하며, 결과로 모든 것을 증명하는 것을 미덕으로 여깁니다. 당신은 네라주리(푸른색과 검은색)의 일원입니다.',
      emoji: '🔵',
      color: '#010E80',
      traits: ['실리', '전략적', '견고함', '라이벌', '효율', '현실주의'],
      compatibility: {
        best: ['첼시', '아틀레티코 마드리드'],
        avoid: ['AC 밀란', '유벤투스'],
      },
      recommendations: {
        celebrities: ['하비에르 사네티', '사무엘 에투', '라우타로 마르티네스'],
        hashtags: ['#ForzaInter', '#Nerazzurri', '#인테르', '#뱀군단'],
      },
    },
    {
      id: 'ajax',
      title: '🌱 미래를 키워내는 축구의 요람, 아약스',
      description:
        '당신은 완성된 스타를 사는 것보다, 미래의 원석을 발굴하고 키워내는 과정에서 더 큰 보람을 느끼는 개척자입니다.',
      detailedDescription:
        '당신은 "토탈 풋볼"로 대표되는 아약스의 혁신적인 축구 철학을 사랑합니다. 당장의 성적보다는, 클럽의 철학을 지키고 유소년 선수들을 성장시키는 것을 더 중요하게 생각합니다. 최고의 선수들이 아약스를 거쳐 세계로 뻗어나가는 모습에 자부심을 느낍니다. 당신은 미래를 보는 사람입니다.',
      emoji: '🌱',
      color: '#D2122E',
      traits: ['육성', '철학', '혁신', '미래지향적', '개척자', '과정 중시'],
      compatibility: {
        best: ['FC 바르셀로나', '아스날'],
        avoid: ['파리 생제르맹', '첼시'],
      },
      recommendations: {
        celebrities: ['요한 크루이프', '데니스 베르캄프', '프렝키 더용'],
        hashtags: ['#AFCAjax', '#ForTheFuture', '#토탈풋볼', '#축구사관학교'],
      },
    },
  ],
};
