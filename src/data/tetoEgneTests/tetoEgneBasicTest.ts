import type { TetoEgneTestData } from '@/types/tetoEgneTest';

export const tetoEgneTestData: TetoEgneTestData = {
  id: 'teto-egne-basic-test',
  title: '🧬 테토에겐 호르몬 테스트',
  description: '당신의 테스토스테론과 에스트로겐 성향을 6개 영역별로 분석해보세요!',
  questions: [
    {
      id: 'q1',
      question: '친구들과 쇼핑몰에 갔을 때 당신의 모습은?',
      category: 'appearance',
      options: [
        {
          id: 'q1_a',
          text: '트렌드보다는 내 스타일을 고집한다',
          emoji: '😎',
          scores: { testo: 2, estrogen: 1 },
        },
        {
          id: 'q1_b',
          text: '친구들과 함께 이것저것 구경하며 쇼핑을 즐긴다',
          emoji: '🛍️',
          scores: { testo: 1, estrogen: 2 },
        },
        {
          id: 'q1_c',
          text: '필요한 것만 빠르게 사고 나온다',
          emoji: '⚡',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q1_d',
          text: '친구들 의견을 들어가며 신중하게 고민한다',
          emoji: '🤔',
          scores: { testo: 0, estrogen: 3 },
        },
      ],
    },
    {
      id: 'q2',
      question: '새로운 프로젝트나 일을 시작할 때 당신은?',
      category: 'personality',
      options: [
        {
          id: 'q2_a',
          text: '혼자서 계획을 세우고 실행한다',
          emoji: '🎯',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q2_b',
          text: '팀원들과 충분히 논의한 후 결정한다',
          emoji: '👥',
          scores: { testo: 0, estrogen: 3 },
        },
        {
          id: 'q2_c',
          text: '일단 시작하고 수정해가며 진행한다',
          emoji: '🚀',
          scores: { testo: 2, estrogen: 1 },
        },
        {
          id: 'q2_d',
          text: '다른 사람들의 조언을 구해본다',
          emoji: '💭',
          scores: { testo: 1, estrogen: 2 },
        },
      ],
    },
    {
      id: 'q3',
      question: '스트레스를 받을 때 당신은 주로 어떻게 해소하나요?',
      category: 'behavior',
      options: [
        {
          id: 'q3_a',
          text: '운동이나 활동적인 취미로 땀을 흘린다',
          emoji: '💪',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q3_b',
          text: '친구들과 수다를 떨거나 감정을 공유한다',
          emoji: '🗣️',
          scores: { testo: 0, estrogen: 3 },
        },
        {
          id: 'q3_c',
          text: '문제를 분석하고 해결책을 찾으려 노력한다',
          emoji: '🧠',
          scores: { testo: 2, estrogen: 1 },
        },
        {
          id: 'q3_d',
          text: '맛있는 것을 먹거나 편안하게 휴식한다',
          emoji: '🍔',
          scores: { testo: 1, estrogen: 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '누군가에게 조언을 할 때 당신의 방식은?',
      category: 'behavior',
      options: [
        {
          id: 'q4_a',
          text: '핵심을 짚어주고 실용적인 해결책을 제시한다',
          emoji: '💡',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q4_b',
          text: '상대방의 감정을 헤아리고 공감하며 들어준다',
          emoji: '💖',
          scores: { testo: 0, estrogen: 3 },
        },
        {
          id: 'q4_c',
          text: '장단점을 모두 고려하여 신중하게 이야기한다',
          emoji: '⚖️',
          scores: { testo: 1, estrogen: 2 },
        },
        {
          id: 'q4_d',
          text: '경험을 바탕으로 솔직하고 명확하게 말한다',
          emoji: '🗣️',
          scores: { testo: 2, estrogen: 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '여행을 계획할 때 당신의 모습은?',
      category: 'behavior',
      options: [
        {
          id: 'q5_a',
          text: '철저하게 계획을 세우고 스케줄대로 움직인다',
          emoji: '🗺️',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q5_b',
          text: '즉흥적으로 떠나고 현지에서 결정하는 것을 좋아한다',
          emoji: '🎶',
          scores: { testo: 1, estrogen: 2 },
        },
        {
          id: 'q5_c',
          text: '경험이 풍부한 사람의 조언을 듣고 참고한다',
          emoji: '👂',
          scores: { testo: 0, estrogen: 3 },
        },
        {
          id: 'q5_d',
          text: '큰 틀만 정하고 세부적인 것은 자유롭게 정한다',
          emoji: '🧭',
          scores: { testo: 2, estrogen: 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '새로운 사람을 만났을 때 어떤 인상을 주나요?',
      category: 'personality',
      options: [
        {
          id: 'q6_a',
          text: '자신감 있고 당당하다는 인상을 준다',
          emoji: '😎',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q6_b',
          text: '친절하고 다정하다는 인상을 준다',
          emoji: '😊',
          scores: { testo: 0, estrogen: 3 },
        },
        {
          id: 'q6_c',
          text: '편안하고 자연스러운 인상을 준다',
          emoji: '🌿',
          scores: { testo: 1, estrogen: 2 },
        },
        {
          id: 'q6_d',
          text: '진지하고 생각이 깊다는 인상을 준다',
          emoji: '🧐',
          scores: { testo: 2, estrogen: 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: '갈등 상황이 발생했을 때 당신의 반응은?',
      category: 'personality',
      options: [
        {
          id: 'q7_a',
          text: '논리적으로 따지고 해결책을 제시한다',
          emoji: '⚔️',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q7_b',
          text: '상대방의 감정을 이해하려 노력하고 화해를 시도한다',
          emoji: '🤝',
          scores: { testo: 0, estrogen: 3 },
        },
        {
          id: 'q7_c',
          text: '중립적인 입장에서 상황을 조율하려 한다',
          emoji: '⚖️',
          scores: { testo: 1, estrogen: 2 },
        },
        {
          id: 'q7_d',
          text: '일단 피하고 나중에 생각한다',
          emoji: '💨',
          scores: { testo: 2, estrogen: 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '팀으로 일할 때 당신은 주로 어떤 역할을 맡나요?',
      category: 'personality',
      options: [
        {
          id: 'q8_a',
          text: '팀을 이끄는 리더 역할을 맡는다',
          emoji: '👑',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q8_b',
          text: '팀원들의 의견을 조율하고 분위기를 좋게 만든다',
          emoji: '⚖️',
          scores: { testo: 0, estrogen: 3 },
        },
        {
          id: 'q8_c',
          text: '주어진 역할을 책임감 있게 완수한다',
          emoji: '😁',
          scores: { testo: 2, estrogen: 1 },
        },
        {
          id: 'q8_d',
          text: '창의적인 아이디어를 제시하며 팀에 활력을 불어넣는다',
          emoji: '💡',
          scores: { testo: 1, estrogen: 2 },
        },
      ],
    },
    {
      id: 'q9',
      question: '여가 시간에 당신이 선호하는 활동은?',
      category: 'preference',
      options: [
        {
          id: 'q9_a',
          text: '새로운 기술을 배우거나 자기계발을 한다',
          emoji: '📚',
          scores: { testo: 2, estrogen: 1 },
        },
        {
          id: 'q9_b',
          text: '영화나 드라마를 보거나 음악을 듣는다',
          emoji: '🎬',
          scores: { testo: 1, estrogen: 2 },
        },
        {
          id: 'q9_c',
          text: '친구들과 스포츠를 하거나 야외 활동을 즐긴다',
          emoji: '⚽',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q9_d',
          text: '혼자 조용히 생각하거나 휴식을 취한다',
          emoji: '🌿',
          scores: { testo: 0, estrogen: 3 },
        },
      ],
    },
    {
      id: 'q10',
      question: '선물을 고를 때 당신의 기준은?',
      category: 'preference',
      options: [
        {
          id: 'q10_a',
          text: '실용적이고 오래 사용할 수 있는 것을 고른다',
          emoji: '🎁',
          scores: { testo: 2, estrogen: 1 },
        },
        {
          id: 'q10_b',
          text: '상대방의 취향을 고려하여 감동을 줄 수 있는 것을 고른다',
          emoji: '💖',
          scores: { testo: 1, estrogen: 2 },
        },
        {
          id: 'q10_c',
          text: '가치와 가격을 비교하여 효율적인 것을 고른다',
          emoji: '💰',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q10_d',
          text: '정성껏 직접 만들거나 특별한 의미가 있는 것을 고른다',
          emoji: '💝',
          scores: { testo: 0, estrogen: 3 },
        },
      ],
    },
    {
      id: 'q11',
      question: '선호하는 대화 주제는?',
      category: 'preference',
      options: [
        {
          id: 'q11_a',
          text: '목표 달성이나 성공 경험에 대한 이야기',
          emoji: '🏆',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q11_b',
          text: '일상 속 소소한 이야기나 감정 공유',
          emoji: '💬',
          scores: { testo: 0, estrogen: 3 },
        },
        {
          id: 'q11_c',
          text: '새로운 정보나 흥미로운 사실에 대한 토론',
          emoji: '🤓',
          scores: { testo: 2, estrogen: 1 },
        },
        {
          id: 'q11_d',
          text: '사람들과의 관계나 사회 현상에 대한 이야기',
          emoji: '🌐',
          scores: { testo: 1, estrogen: 2 },
        },
      ],
    },
    {
      id: 'q12',
      question: '새로운 환경에 적응할 때 당신의 방식은?',
      category: 'social',
      options: [
        {
          id: 'q12_a',
          text: '적극적으로 나서서 사람들과 교류한다',
          emoji: '🗣️',
          scores: { testo: 2, estrogen: 1 },
        },
        {
          id: 'q12_b',
          text: '천천히 주변을 탐색하며 신중하게 다가간다',
          emoji: '🧐',
          scores: { testo: 1, estrogen: 2 },
        },
        {
          id: 'q12_c',
          text: '혼자서도 잘 지내며 필요한 경우에만 소통한다',
          emoji: '🪶',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q12_d',
          text: '사람들의 분위기를 살피고 맞춰간다',
          emoji: '🥸',
          scores: { testo: 0, estrogen: 3 },
        },
      ],
    },
    {
      id: 'q13',
      question: '친구와의 약속이 취소되었을 때 당신의 반응은?',
      category: 'social',
      options: [
        {
          id: 'q13_a',
          text: '다른 계획을 빠르게 세우거나 혼자 시간을 보낸다',
          emoji: '⏱️',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q13_b',
          text: '아쉽지만 이해하고 다음에 보자고 한다',
          emoji: '😌',
          scores: { testo: 1, estrogen: 2 },
        },
        {
          id: 'q13_c',
          text: '상대방의 사정을 먼저 걱정하고 괜찮은지 묻는다',
          emoji: '😯',
          scores: { testo: 0, estrogen: 3 },
        },
        {
          id: 'q13_d',
          text: '조금 실망하지만 금방 괜찮아진다',
          emoji: '😓',
          scores: { testo: 2, estrogen: 1 },
        },
      ],
    },
    {
      id: 'q14',
      question: '새로운 모임에 갔을 때 당신의 행동은?',
      category: 'social',
      options: [
        {
          id: 'q14_a',
          text: '적극적으로 대화에 참여하고 의견을 제시한다',
          emoji: '😀',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q14_b',
          text: '조용히 듣고 있다가 필요할 때만 이야기한다',
          emoji: '👂',
          scores: { testo: 1, estrogen: 2 },
        },
        {
          id: 'q14_c',
          text: '사람들의 이야기를 경청하고 공감한다',
          emoji: '🙂‍↕️',
          scores: { testo: 0, estrogen: 3 },
        },
        {
          id: 'q14_d',
          text: '편안하게 다른 사람들과 어울리려 노력한다',
          emoji: '😊',
          scores: { testo: 2, estrogen: 1 },
        },
      ],
    },
    {
      id: 'q15',
      question: '중요한 결정을 내려야 할 때 당신은?',
      category: 'decision',
      options: [
        {
          id: 'q15_a',
          text: '빠르게 분석하고 단호하게 결정한다',
          emoji: '🧐',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q15_b',
          text: '다양한 사람들의 의견을 듣고 신중하게 결정한다',
          emoji: '🥸',
          scores: { testo: 0, estrogen: 3 },
        },
        {
          id: 'q15_c',
          text: '논리와 직관을 모두 활용하여 결정한다',
          emoji: '🤩',
          scores: { testo: 2, estrogen: 1 },
        },
        {
          id: 'q15_d',
          text: '시간을 두고 충분히 고민한 후 결정한다',
          emoji: '🫠',
          scores: { testo: 1, estrogen: 2 },
        },
      ],
    },
    {
      id: 'q16',
      question: '실수를 했을 때 당신의 반응은?',
      category: 'decision',
      options: [
        {
          id: 'q16_a',
          text: '책임을 인정하고 빠르게 해결책을 찾는다',
          emoji: '🧐',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q16_b',
          text: '자책하기보다 위로받고 싶어 한다',
          emoji: '🥺',
          scores: { testo: 0, estrogen: 3 },
        },
        {
          id: 'q16_c',
          text: '실수를 분석하고 다음에는 더 잘하려고 노력한다',
          emoji: '😓',
          scores: { testo: 2, estrogen: 1 },
        },
        {
          id: 'q16_d',
          text: '다른 사람들에게 조언을 구하고 도움을 요청한다',
          emoji: '😖',
          scores: { testo: 1, estrogen: 2 },
        },
      ],
    },
    {
      id: 'q17',
      question: '어려운 문제에 부딪혔을 때 당신은?',
      category: 'decision',
      options: [
        {
          id: 'q17_a',
          text: '스스로 해결하려 노력하고 포기하지 않는다',
          emoji: '🫡',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q17_b',
          text: '주변 사람들에게 도움을 청하거나 함께 해결하려 한다',
          emoji: '😚',
          scores: { testo: 0, estrogen: 3 },
        },
        {
          id: 'q17_c',
          text: '다양한 방법을 시도하며 유연하게 대처한다',
          emoji: '😉',
          scores: { testo: 2, estrogen: 1 },
        },
        {
          id: 'q17_d',
          text: '감정적으로 힘들어할 때도 있지만 결국 해결책을 찾는다',
          emoji: '🥹',
          scores: { testo: 1, estrogen: 2 },
        },
      ],
    },
    {
      id: 'q18',
      question: '미래를 계획할 때 당신의 주된 생각은?',
      category: 'decision',
      options: [
        {
          id: 'q18_a',
          text: '명확한 목표를 세우고 달성 계획을 세운다',
          emoji: '🎯',
          scores: { testo: 3, estrogen: 0 },
        },
        {
          id: 'q18_b',
          text: '주변 사람들과의 관계와 행복을 중요하게 생각한다',
          emoji: '😊',
          scores: { testo: 0, estrogen: 3 },
        },
        {
          id: 'q18_c',
          text: '다양한 가능성을 열어두고 유연하게 대처한다',
          emoji: '🤓',
          scores: { testo: 2, estrogen: 1 },
        },
        {
          id: 'q18_d',
          text: '안정적이고 편안한 삶을 추구한다',
          emoji: '🛋️',
          scores: { testo: 1, estrogen: 2 },
        },
      ],
    },
  ],
  analysisData: {
    testo: {
      strong: {
        title: '강력한 테토 지배형',
        description:
          '테스토스테론이 강하게 지배적인 성향을 보여요! 결단력과 리더십이 뛰어나며 목표를 향해 직진하는 스타일입니다.',
        emoji: '💪',
        strengths: [
          '강력한 결단력',
          '천타인의 리더십',
          '높은 경쟁력',
          '뛰어난 독립성',
          '명확한 목표지향성',
        ],
        characteristics: [
          '직설적이고 명확한 의사표현을 선호함',
          '논리적 사고를 바탕으로 한 빠른 의사결정',
          '어려운 도전도 주저하지 않고 맞서는 용기',
          '개인적 성취를 통한 만족감 추구',
          '효율성과 결과를 중시하는 성향',
        ],
        recommendations: [
          '리더십을 발휘할 수 있는 팀 프로젝트나 동아리 활동',
          '경쟁적인 스포츠나 e-스포츠 참여',
          '명확한 목표가 있는 도전적인 활동 (창업, 자격증 취득 등)',
          '개인 운동이나 피트니스로 에너지 발산',
          '결과 중심의 업무나 프리랜서 활동',
        ],
        compatibleTypes: ['에겐 우세형', '밸런스형', '에겐 지배형'],
        genderSpecific: {
          male: {
            funFacts: [
              '당신의 테토 지수는 남성 평균보다 높은 편이에요!',
              '천타인의 리더 기질을 가지고 있어 주변에서 의지하는 존재일 가능성이 높아요',
              '스트레스 상황에서도 냉정함을 유지하며 해결책을 찾는 능력이 뛰어나요',
            ],
            tips: [
              '가끔은 다른 사람의 감정도 고려해보세요',
              '협력의 가치를 인정하고 팀워크를 발휘해보세요',
              '완벽주의 성향을 조금 내려놓고 여유를 가져보세요',
            ],
          },
          female: {
            funFacts: [
              '당신의 테토 지수는 여성 평균보다 상당히 높은 편이에요!',
              '독립적이고 주체적인 성격으로 주변에서 존경받는 존재일 가능성이 높아요',
              '전형적인 성 역할에 얽매이지 않는 자유로운 사고방식을 가지고 있어요',
            ],
            tips: [
              '당신의 강한 성향을 긍정적으로 받아들이세요',
              '때로는 부드러운 접근도 효과적일 수 있어요',
              '자신만의 독특한 매력을 더욱 발휘해보세요',
            ],
          },
        },
      },
      moderate: {
        title: '테토 우세형',
        description:
          '테스토스테론이 약간 우세한 성향이에요! 결단력과 감수성의 균형이 잘 잡혀있는 매력적인 타입입니다.',
        emoji: '🔥',
        strengths: [
          '적절한 결단력',
          '균형잡힌 리더십',
          '건전한 경쟁력',
          '개방적 사고',
          '목표 달성 의지',
        ],
        characteristics: [
          '상황에 맞는 유연한 의사표현',
          '논리와 감정의 적절한 조화',
          '도전적이면서도 신중한 접근',
          '개인과 집단의 균형 추구',
          '효율성과 인간관계 모두 중시',
        ],
        recommendations: [
          '팀 리더 또는 서브 리더 역할 수행',
          '개인 스포츠와 팀 스포츠 모두 즐기기',
          '창의적이면서 체계적인 프로젝트 참여',
          '멘토링이나 코칭 활동',
          '균형 잡힌 워라밸 추구',
        ],
        compatibleTypes: ['에겐 우세형', '밸런스형'],
        genderSpecific: {
          male: {
            funFacts: [
              '당신의 테토 지수는 남성 평균 정도예요!',
              '남성적 매력과 섬세함을 모두 가진 밸런스형이에요',
              '다양한 상황에 유연하게 대처하는 능력이 뛰어나요',
            ],
            tips: [
              '당신의 균형감각을 활용해 중재자 역할을 해보세요',
              '다양한 분야에 도전해보며 재능을 발견해보세요',
              '감정 표현도 적극적으로 해보세요',
            ],
          },
          female: {
            funFacts: [
              '당신의 테토 지수는 여성 평균보다 높은 편이에요!',
              '독립적이면서도 따뜻한 매력을 가지고 있어요',
              '현대적인 여성상을 잘 보여주는 타입이에요',
            ],
            tips: [
              '당신만의 독특한 매력을 더욱 발휘해보세요',
              '리더십과 협력 능력을 모두 활용해보세요',
              '다양한 롤모델을 찾아 영감을 받아보세요',
            ],
          },
        },
      },
    },
    estrogen: {
      strong: {
        title: '강력한 에겐 지배형',
        description:
          '에스트로겐이 강하게 지배적인 성향을 보여요! 뛰어난 공감능력과 소통력으로 사람들과 깊은 유대감을 형성하는 스타일입니다.',
        emoji: '✨',
        strengths: [
          '뛰어난 공감능력',
          '탁월한 소통력',
          '강한 협력정신',
          '예리한 직관력',
          '깊은 배려심',
        ],
        characteristics: [
          '상대방의 감정을 세심하게 읽고 배려하는 성향',
          '관계 중심적 사고방식과 의사결정',
          '섬세한 관찰력으로 디테일을 놓치지 않음',
          '공동체의 화합과 조화를 중시함',
          '감정적 교감을 통한 깊은 인간관계 추구',
        ],
        recommendations: [
          '팀의 화합을 이끄는 조정자 역할',
          '창작 활동이나 예술 분야 참여',
          '상담이나 케어 관련 봉사활동',
          '깊은 대화를 나눌 수 있는 소모임 활동',
          '감성을 자극하는 문화 생활 즐기기',
        ],
        compatibleTypes: ['테토 우세형', '밸런스형', '테토 지배형'],
        genderSpecific: {
          male: {
            funFacts: [
              '당신의 에겐 지수는 남성 평균보다 상당히 높은 편이에요!',
              '감성적이고 섬세한 면이 돋보이는 매력적인 남성이에요',
              '주변 사람들에게 편안함과 안정감을 주는 존재일 가능성이 높아요',
            ],
            tips: [
              '당신의 감성적 매력을 자신 있게 표현하세요',
              '때로는 결단력 있는 모습도 보여주세요',
              '다양한 감정 표현 방법을 찾아보세요',
            ],
          },
          female: {
            funFacts: [
              '당신의 에겐 지수는 여성 평균보다 높은 편이에요!',
              '천사시 공감능력과 배려심을 가진 따뜻한 사람이에요',
              '사람들이 자연스럽게 마음을 열고 의지하게 되는 매력이 있어요',
            ],
            tips: [
              '당신의 따뜻한 성격을 더욱 발휘해보세요',
              '자신의 의견도 당당하게 표현해보세요',
              '때로는 자신을 위한 시간도 가져보세요',
            ],
          },
        },
      },
      moderate: {
        title: '에겐 우세형',
        description:
          '에스트로겐이 약간 우세한 성향이에요! 감성과 이성의 조화로 따뜻하면서도 현명한 매력을 가진 타입입니다.',
        emoji: '🌸',
        strengths: [
          '따뜻한 공감능력',
          '원만한 소통력',
          '좋은 협력정신',
          '균형잡힌 직관력',
          '자연스러운 배려심',
        ],
        characteristics: [
          '상황에 맞는 적절한 감정 표현',
          '관계와 목표의 균형있는 추구',
          '세심하면서도 효율적인 접근',
          '개인과 집단의 조화로운 발전',
          '감정과 논리의 적절한 활용',
        ],
        recommendations: [
          '팀의 분위기 메이커 역할',
          '창의적 프로젝트나 기획 업무',
          '멘토링이나 상담 관련 활동',
          '문화예술 동아리나 취미 모임',
          '균형 잡힌 라이프스타일 추구',
        ],
        compatibleTypes: ['테토 우세형', '밸런스형'],
        genderSpecific: {
          male: {
            funFacts: [
              '당신의 에겐 지수는 남성 평균보다 높은 편이에요!',
              '감성과 이성을 모두 갖춘 현대적인 남성상을 보여줘요',
              '여성들이 편안함을 느끼는 대화 스타일을 가지고 있어요',
            ],
            tips: [
              '당신의 섬세함을 장점으로 활용해보세요',
              '리더십도 충분히 발휘할 수 있어요',
              '감정 표현을 두려워하지 마세요',
            ],
          },
          female: {
            funFacts: [
              '당신의 에겐 지수는 여성 평균 정도예요!',
              '전형적인 여성적 매력과 현대적 감각을 모두 가지고 있어요',
              '주변 사람들과 자연스럽게 좋은 관계를 형성하는 능력이 있어요',
            ],
            tips: [
              '당신의 자연스러운 매력을 더욱 발산해보세요',
              '때로는 주도적인 모습도 보여주세요',
              '다양한 분야에 관심을 가져보세요',
            ],
          },
        },
      },
    },
    balanced: {
      title: '완벽한 밸런스형',
      description:
        '테스토스테론과 에스트로겐이 조화롭게 균형을 이루고 있어요! 상황에 따라 유연하게 대처하는 만능 플레이어입니다.',
      emoji: '⚖️',
      strengths: [
        '뛰어난 균형감각',
        '높은 적응력',
        '다재다능함',
        '자연스러운 조화력',
        '유연한 사고력',
      ],
      characteristics: [
        '상황에 따른 유연하고 적절한 대응',
        '다양한 관점을 수용하고 이해하는 능력',
        '갈등 상황에서의 뛰어난 중재 능력',
        '개인과 집단 모두를 배려하는 성향',
        '논리와 감정의 조화로운 활용',
      ],
      recommendations: [
        '다양한 분야의 경험을 쌓는 것',
        '중재자나 조정자 역할 수행',
        '여러 장르의 취미나 활동 즐기기',
        '균형 잡힌 라이프스타일 유지',
        '다양한 사람들과의 네트워킹',
      ],
      compatibleTypes: ['모든 타입과 잘 어울림'],
      genderSpecific: {
        male: {
          funFacts: [
            '당신의 호르몬 밸런스는 매우 이상적이에요!',
            '남성성과 감성을 모두 갖춘 매력적인 사람이에요',
            '다양한 상황에서 리더로도 팔로워로도 완벽하게 적응해요',
          ],
          tips: [
            '당신의 균형감각을 최대한 활용하세요',
            '다양한 분야에 도전해보며 숨겨진 재능을 찾아보세요',
            '중재자 역할을 적극적으로 해보세요',
          ],
        },
        female: {
          funFacts: [
            '당신의 호르몬 밸런스는 매우 이상적이에요!',
            '여성성과 독립성을 모두 갖춘 현대적인 여성이에요',
            '어떤 환경에서도 자연스럽게 어울리는 사교적 매력이 있어요',
          ],
          tips: [
            '당신의 다재다능함을 더욱 발휘해보세요',
            '다양한 역할을 경험하며 성장해보세요',
            '자신만의 독특한 색깔을 찾아보세요',
          ],
        },
      },
    },
  },
};
