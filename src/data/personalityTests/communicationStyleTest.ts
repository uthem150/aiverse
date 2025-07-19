import type { PersonalityTestData } from '@/types/personalityTest';

export const communicationStyleTestData: PersonalityTestData = {
  id: 'communication-style-test',
  title: '💬 내 연애 소통 스타일 테스트',
  description:
    '연인과의 대화에서 나는 어떤 모습일까? 나의 소통 스타일을 알아보고 더 건강한 관계를 만들어보세요!',
  category: 'romance',
  resultTypes: [
    'direct-expresser', // 직설적 표현형
    'empathetic-listener', // 공감적 경청형
    'logical-solver', // 논리적 해결형
    'harmonious-avoider', // 조화 지향 회피형
    'humorous-mediator', // 유머러스 중재형
    'thoughtful-contemplator', // 신중한 숙고형
    'active-engager', // 적극적 참여형
    'passive-responder', // 수동적 반응형
  ],
  questions: [
    {
      id: 'q1',
      question: '연인에게 서운한 점이 생겼을 때, 당신의 첫 반응은?',
      options: [
        {
          id: 'q1_a',
          text: '바로 솔직하게 이야기해서 오해를 풀려고 한다.',
          emoji: '🗣️',
          scores: { 'direct-expresser': 3, 'active-engager': 2, 'humorous-mediator': 1 },
        },
        {
          id: 'q1_b',
          text: '상대방의 입장을 먼저 생각하며 조용히 지켜본다.',
          emoji: '🤔',
          scores: {
            'empathetic-listener': 3,
            'harmonious-avoider': 2,
            'thoughtful-contemplator': 1,
          },
        },
        {
          id: 'q1_c',
          text: '왜 서운한지 스스로 분석하고 어떻게 해결할지 고민한다.',
          emoji: '🧠',
          scores: { 'logical-solver': 3, 'thoughtful-contemplator': 2, 'passive-responder': 1 },
        },
        {
          id: 'q1_d',
          text: '괜찮은 척하지만 은근히 티를 내거나 피한다.',
          emoji: '🤐',
          scores: { 'harmonious-avoider': 3, 'passive-responder': 2 },
        },
      ],
    },
    {
      id: 'q2',
      question: '연인과 중요한 결정을 내려야 할 때, 당신의 소통 방식은?',
      options: [
        {
          id: 'q2_a',
          text: '내 의견을 명확히 제시하고 설득한다.',
          emoji: '📈',
          scores: { 'direct-expresser': 3, 'logical-solver': 2, 'active-engager': 2 },
        },
        {
          id: 'q2_b',
          text: '상대방의 의견을 충분히 듣고 존중한다.',
          emoji: '👂',
          scores: { 'empathetic-listener': 3, 'harmonious-avoider': 2, 'passive-responder': 1 },
        },
        {
          id: 'q2_c',
          text: '데이터나 정보를 바탕으로 가장 합리적인 방안을 제안한다.',
          emoji: '📊',
          scores: { 'logical-solver': 3, 'thoughtful-contemplator': 2 },
        },
        {
          id: 'q2_d',
          text: '큰 틀만 잡고 세부적인 것은 상대방에게 맡기는 편이다.',
          emoji: '🧘', // Corrected emoji
          scores: { 'humorous-mediator': 2, 'passive-responder': 2, 'harmonious-avoider': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '연인에게 고민이 있을 때, 당신은 주로 어떻게 반응하나요?',
      options: [
        {
          id: 'q3_a',
          text: '“그래서 어떻게 해결할 건데?” 해결책을 제시한다.',
          emoji: '💡',
          scores: { 'logical-solver': 3, 'direct-expresser': 2 },
        },
        {
          id: 'q3_b',
          text: '“정말 힘들었겠다...” 공감하며 감정적으로 지지해준다.',
          emoji: '❤️',
          scores: { 'empathetic-listener': 3, 'harmonious-avoider': 1 },
        },
        {
          id: 'q3_c',
          text: '농담을 던지거나 분위기를 바꿔주며 기분 전환을 시켜준다.',
          emoji: '😂',
          scores: { 'humorous-mediator': 3, 'active-engager': 2 },
        },
        {
          id: 'q3_d',
          text: '일단 들어주고, 상대방이 먼저 도움을 요청할 때까지 기다린다.',
          emoji: '🤫',
          scores: { 'thoughtful-contemplator': 3, 'passive-responder': 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '연인과의 대화 중 어색한 침묵이 흐른다면?',
      options: [
        {
          id: 'q4_a',
          text: '먼저 말을 걸어 분위기를 전환하려고 노력한다.',
          emoji: '🗣️',
          scores: { 'direct-expresser': 2, 'active-engager': 3, 'humorous-mediator': 2 },
        },
        {
          id: 'q4_b',
          text: '상대방이 먼저 말을 시작할 때까지 기다린다.',
          emoji: '🤫', // Corrected emoji
          scores: { 'passive-responder': 3, 'thoughtful-contemplator': 2 },
        },
        {
          id: 'q4_c',
          text: '침묵이 편안하게 느껴지며 크게 신경 쓰지 않는다.',
          emoji: '😌',
          scores: { 'harmonious-avoider': 3, 'empathetic-listener': 1 },
        },
        {
          id: 'q4_d',
          text: '주변 상황을 관찰하며 대화 주제를 찾는다.',
          emoji: '👀',
          scores: { 'logical-solver': 2, 'thoughtful-contemplator': 1, 'active-engager': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '연인이 화가 났을 때, 당신의 소통 전략은?',
      options: [
        {
          id: 'q5_a',
          text: '“무슨 일인데? 솔직하게 말해봐.” 직접적으로 묻는다.',
          emoji: '😤',
          scores: { 'direct-expresser': 3, 'active-engager': 2 },
        },
        {
          id: 'q5_b',
          text: '말없이 옆에 있어주며 진정될 때까지 기다린다.',
          emoji: '🫂',
          scores: { 'empathetic-listener': 3, 'harmonious-avoider': 2, 'passive-responder': 1 },
        },
        {
          id: 'q5_c',
          text: '화난 이유를 차분히 분석해서 논리적으로 설명한다.',
          emoji: '📈',
          scores: { 'logical-solver': 3, 'thoughtful-contemplator': 2 },
        },
        {
          id: 'q5_d',
          text: '가벼운 농담이나 장난으로 분위기를 풀어주려 한다.',
          emoji: '😅',
          scores: { 'humorous-mediator': 3, 'active-engager': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '연인과의 관계에서 가장 중요하다고 생각하는 소통 방식은?',
      options: [
        {
          id: 'q6_a',
          text: '솔직하고 투명한 의사 표현',
          emoji: '💡',
          scores: { 'direct-expresser': 3, 'active-engager': 2 },
        },
        {
          id: 'q6_b',
          text: '상대방의 감정에 대한 깊은 이해와 공감',
          emoji: '❤️',
          scores: { 'empathetic-listener': 3, 'harmonious-avoider': 2 },
        },
        {
          id: 'q6_c',
          text: '문제 발생 시 합리적이고 효율적인 해결',
          emoji: '✅',
          scores: { 'logical-solver': 3, 'thoughtful-contemplator': 2 },
        },
        {
          id: 'q6_d',
          text: '유머를 통한 갈등 완화와 즐거운 분위기 조성',
          emoji: '🥳',
          scores: { 'humorous-mediator': 3, 'active-engager': 2 },
        },
      ],
    },
    {
      id: 'q7',
      question: '연인이 당신의 이야기를 제대로 듣지 않는다고 느꼈을 때?',
      options: [
        {
          id: 'q7_a',
          text: '“내 말 듣고 있어?”라고 직접적으로 묻는다.',
          emoji: '😠',
          scores: { 'direct-expresser': 3, 'active-engager': 2 },
        },
        {
          id: 'q7_b',
          text: '일단 대화를 멈추고 혼자 생각할 시간을 가진다.',
          emoji: '⏳',
          scores: { 'thoughtful-contemplator': 3, 'passive-responder': 2, 'harmonious-avoider': 1 },
        },
        {
          id: 'q7_c',
          text: '상대방의 행동을 객관적으로 분석하며 이유를 찾아본다.',
          emoji: '🔬',
          scores: { 'logical-solver': 3, 'thoughtful-contemplator': 2 },
        },
        {
          id: 'q7_d',
          text: '나중에 다시 이야기할 기회를 엿보거나 그냥 넘어간다.',
          emoji: '🤷',
          scores: { 'harmonious-avoider': 3, 'passive-responder': 2 },
        },
      ],
    },
    {
      id: 'q8',
      question: '연인과의 싸움 후 화해할 때, 당신이 먼저 하는 행동은?',
      options: [
        {
          id: 'q8_a',
          text: '솔직하게 사과하거나 먼저 화해의 손길을 내민다.',
          emoji: '🤝',
          scores: { 'direct-expresser': 2, 'active-engager': 3 },
        },
        {
          id: 'q8_b',
          text: '상대방이 먼저 다가오기를 기다리거나, 조용히 눈치를 살핀다.',
          emoji: '👀',
          scores: { 'passive-responder': 3, 'thoughtful-contemplator': 2, 'harmonious-avoider': 1 },
        },
        {
          id: 'q8_c',
          text: '어떤 점이 잘못되었는지 논리적으로 설명하며 해결책을 제시한다.',
          emoji: '💡',
          scores: { 'logical-solver': 3, 'thoughtful-contemplator': 1 },
        },
        {
          id: 'q8_d',
          text: '장난을 걸거나 유머로 분위기를 풀려고 노력한다.',
          emoji: '😂',
          scores: { 'humorous-mediator': 3, 'active-engager': 2 },
        },
      ],
    },
    {
      id: 'q9',
      question: '연인에게 칭찬할 일이 있을 때, 당신의 표현 방식은?',
      options: [
        {
          id: 'q9_a',
          text: '구체적으로 어떤 점이 좋았는지 상세하게 설명하며 칭찬한다.',
          emoji: '🌟',
          scores: { 'direct-expresser': 2, 'logical-solver': 1, 'active-engager': 3 },
        },
        {
          id: 'q9_b',
          text: '마음을 담아 따뜻하게, 그리고 진심으로 칭찬한다.',
          emoji: '💖',
          scores: { 'empathetic-listener': 3, 'harmonious-avoider': 2 },
        },
        {
          id: 'q9_c',
          text: '칭찬할 만한 점을 잘 포착하고, 적절한 타이밍에 칭찬한다.',
          emoji: '✨',
          scores: { 'thoughtful-contemplator': 2, 'humorous-mediator': 1 },
        },
        {
          id: 'q9_d',
          text: '간단히 "잘했네" 정도로 말하거나 굳이 표현하지 않는다.',
          emoji: '👍',
          scores: { 'passive-responder': 3, 'harmonious-avoider': 1 },
        },
      ],
    },
    {
      id: 'q10',
      question: '연인과의 대화에서 가장 중요하게 생각하는 것은?',
      options: [
        {
          id: 'q10_a',
          text: '진정성과 솔직함',
          emoji: '✨', // Corrected emoji
          scores: { 'direct-expresser': 3, 'active-engager': 2 },
        },
        {
          id: 'q10_b',
          text: '서로에 대한 이해와 공감',
          emoji: '🤝',
          scores: { 'empathetic-listener': 3, 'harmonious-avoider': 2 },
        },
        {
          id: 'q10_c',
          text: '효율적인 정보 교환과 문제 해결',
          emoji: '📊',
          scores: { 'logical-solver': 3, 'thoughtful-contemplator': 2 },
        },
        {
          id: 'q10_d',
          text: '즐겁고 유쾌한 분위기',
          emoji: '😂',
          scores: { 'humorous-mediator': 3, 'active-engager': 2 },
        },
      ],
    },
    {
      id: 'q11',
      question: '연인에게 비밀을 털어놓을 때 당신의 마음은?',
      options: [
        {
          id: 'q11_a',
          text: '모든 것을 솔직하게 다 털어놓고 싶다.',
          emoji: '🔓',
          scores: { 'direct-expresser': 3, 'active-engager': 2 },
        },
        {
          id: 'q11_b',
          text: '상대방이 나를 어떻게 생각할지 걱정하며 조심스럽게 말한다.',
          emoji: '😟',
          scores: { 'harmonious-avoider': 3, 'passive-responder': 2, 'empathetic-listener': 1 },
        },
        {
          id: 'q11_c',
          text: '비밀의 내용과 파급 효과를 분석하며 말할지 말지 고민한다.',
          emoji: '🧐',
          scores: { 'logical-solver': 3, 'thoughtful-contemplator': 2 },
        },
        {
          id: 'q11_d',
          text: '비밀을 말하기보다는 유머로 얼버무릴 때도 있다.',
          emoji: '🤫',
          scores: { 'humorous-mediator': 2, 'passive-responder': 1 },
        },
      ],
    },
    {
      id: 'q12',
      question: '연인과 함께 새로운 것을 배울 때, 당신의 소통 방식은?',
      options: [
        {
          id: 'q12_a',
          text: '궁금한 점을 적극적으로 질문하고 배우는 내용을 공유한다.',
          emoji: '🙋',
          scores: { 'active-engager': 3, 'direct-expresser': 2 },
        },
        {
          id: 'q12_b',
          text: '상대방이 배우는 것을 조용히 지켜보고 필요할 때만 돕는다.',
          emoji: '👀', // Corrected emoji
          scores: { 'passive-responder': 3, 'thoughtful-contemplator': 2 },
        },
        {
          id: 'q12_c',
          text: '가장 효율적인 학습 방법을 찾아내 공유하고 함께 적용한다.',
          emoji: '💡',
          scores: { 'logical-solver': 3, 'thoughtful-contemplator': 1 },
        },
        {
          id: 'q12_d',
          text: '함께 즐기며 유쾌하게 배우는 분위기를 만든다.',
          emoji: '🥳',
          scores: { 'humorous-mediator': 3, 'active-engager': 2 },
        },
      ],
    },
    {
      id: 'q13',
      question: '연인이 힘든 일을 겪고 있을 때, 어떤 말을 해줄까요?',
      options: [
        {
          id: 'q13_a',
          text: '“내가 도와줄 수 있는 일이 있을까?” 구체적인 도움을 제안한다.',
          emoji: '🤝',
          scores: { 'direct-expresser': 2, 'active-engager': 3, 'logical-solver': 1 },
        },
        {
          id: 'q13_b',
          text: '“네 마음 다 알아.” 진심으로 공감하며 위로한다.',
          emoji: '🥺',
          scores: { 'empathetic-listener': 3, 'harmonious-avoider': 2 },
        },
        {
          id: 'q13_c',
          text: '“이런 방법도 있어.” 문제 해결을 위한 조언을 해준다.',
          emoji: '💡',
          scores: { 'logical-solver': 3, 'thoughtful-contemplator': 2 },
        },
        {
          id: 'q13_d',
          text: '“힘내! 잘 될 거야.” 긍정적인 말로 용기를 북돋아준다.',
          emoji: '💪',
          scores: { 'humorous-mediator': 2, 'active-engager': 1 },
        },
      ],
    },
    {
      id: 'q14',
      question: '연인과의 대화 중 의견 차이가 발생했을 때, 당신은?',
      options: [
        {
          id: 'q14_a',
          text: '내 의견을 분명히 밝히고 상대방의 의견을 들어본다.',
          emoji: '🗣️',
          scores: { 'direct-expresser': 3, 'active-engager': 2 },
        },
        {
          id: 'q14_b',
          text: '갈등을 피하기 위해 내 의견을 유보하거나 상대에게 맞춘다.',
          emoji: '🤝', // Corrected emoji
          scores: { 'harmonious-avoider': 3, 'passive-responder': 2 },
        },
        {
          id: 'q14_c',
          text: '논리적으로 논쟁하며 서로의 관점을 이해하려 한다.',
          emoji: '🤔', // Corrected emoji
          scores: { 'logical-solver': 3, 'thoughtful-contemplator': 2 },
        },
        {
          id: 'q14_d',
          text: '유머나 가벼운 이야기로 분위기를 전환한다.',
          emoji: '😅',
          scores: { 'humorous-mediator': 3, 'active-engager': 1 },
        },
      ],
    },
    {
      id: 'q15',
      question: '연인과의 대화에서 가장 피하고 싶은 상황은?',
      options: [
        {
          id: 'q15_a',
          text: '솔직하지 못하고 빙빙 돌려 말하는 것',
          emoji: '🌀', // Corrected emoji
          scores: { 'direct-expresser': 3, 'active-engager': 2 },
        },
        {
          id: 'q15_b',
          text: '감정이 상해서 서로에게 상처를 주는 것',
          emoji: '💔',
          scores: { 'empathetic-listener': 3, 'harmonious-avoider': 2 },
        },
        {
          id: 'q15_c',
          text: '비논리적이고 비효율적인 논쟁이 지속되는 것',
          emoji: '🤯', // Corrected emoji
          scores: { 'logical-solver': 3, 'thoughtful-contemplator': 2 },
        },
        {
          id: 'q15_d',
          text: '재미없고 지루한 대화가 이어지는 것',
          emoji: '😴',
          scores: { 'humorous-mediator': 3, 'active-engager': 1 },
        },
      ],
    },
    {
      id: 'q16',
      question: '당신의 연애 소통 스타일을 한 단어로 표현한다면?',
      options: [
        {
          id: 'q16_a',
          text: '명확한 (Clear)',
          emoji: '🗣️',
          scores: { 'direct-expresser': 3, 'active-engager': 3 },
        },
        {
          id: 'q16_b',
          text: '이해하는 (Understanding)',
          emoji: '❤️',
          scores: { 'empathetic-listener': 3, 'harmonious-avoider': 2 },
        },
        {
          id: 'q16_c',
          text: '분석적인 (Analytical)',
          emoji: '🧠',
          scores: { 'logical-solver': 3, 'thoughtful-contemplator': 3 },
        },
        {
          id: 'q16_d',
          text: '유쾌한 (Jovial)',
          emoji: '😂',
          scores: { 'humorous-mediator': 3, 'active-engager': 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'direct-expresser',
      title: '직설적 표현형',
      description: '당신은 솔직하고 명확하게 자신의 생각과 감정을 표현하는 것을 선호합니다.',
      detailedDescription:
        '돌려 말하는 것을 싫어하고, 오해를 줄이기 위해 직설적으로 소통하는 것을 중요하게 생각합니다. 갈등 상황에서도 문제를 회피하기보다 직접적으로 대화하여 해결하려 노력합니다. 때로는 상대방이 부담을 느끼거나 상처를 받을 수 있으니 어조와 타이밍에 유의하는 것이 좋습니다.',
      emoji: '🗣️',
      color: '#FF6347', // Tomato
      traits: ['솔직함', '명확함', '단호함', '직설적', '오픈 마인드', '문제 해결 지향'],
      compatibility: {
        best: ['공감적 경청형', '적극적 참여형'],
        good: ['논리적 해결형'],
        avoid: ['조화 지향 회피형', '수동적 반응형'],
      },
      recommendations: {
        activities: ['솔직한 대화 시간 갖기', '감정 카드 사용하기', '정기적인 커플 회의'],
        tips: [
          '상대방의 감정 상태를 살피고 부드럽게 표현하는 연습을 하세요.',
          '때로는 상대방이 먼저 말할 기회를 주세요.',
          '너무 일방적으로 몰아붙이지 않도록 주의하세요.',
        ],
        // celebrities: ['이효리', '김구라', '박명수', '서장훈'],
      },
    },
    {
      id: 'empathetic-listener',
      title: '공감적 경청형',
      description: '당신은 상대방의 감정에 깊이 공감하고 경청하는 것을 중요하게 생각합니다.',
      detailedDescription:
        '연인의 이야기를 주의 깊게 듣고 감정을 이해하려 노력하며, 따뜻한 위로와 지지를 보내줍니다. 갈등 상황에서도 상대방의 마음을 먼저 헤아리려 하며, 조화롭고 부드러운 소통을 선호합니다. 때로는 자신의 의견을 충분히 표현하지 못할 수 있습니다.',
      emoji: '❤️',
      color: '#ADD8E6', // Light Blue
      traits: ['공감능력', '경청', '배려심', '온화함', '이해심', '지지적'],
      compatibility: {
        best: ['직설적 표현형', '논리적 해결형'],
        good: ['신중한 숙고형', '조화 지향 회피형'],
        avoid: ['유머러스 중재형', '적극적 참여형'], // Overly direct or dominant types might be challenging
      },
      recommendations: {
        activities: [
          '깊은 대화 시간 갖기',
          '감정 나누기 연습',
          '상대방의 이야기를 끝까지 들어주기',
        ],
        tips: [
          '자신의 감정과 의견도 용기 있게 표현하세요.',
          '때로는 단호하게 거절하는 연습도 필요해요.',
          '남의 감정에 너무 휘둘리지 않도록 주의하세요.',
        ],
        // celebrities: ['아이유', '유재석', '박보영', '강다니엘'],
      },
    },
    {
      id: 'logical-solver',
      title: '논리적 해결형',
      description: '당신은 논리적이고 합리적인 방식으로 문제를 해결하려 합니다.',
      detailedDescription:
        '감정적인 접근보다는 문제의 본질을 분석하고 효율적인 해결책을 찾는 데 집중합니다. 대화 시에도 명확한 사실과 근거를 중요하게 생각하며, 불필요한 감정 소모를 싫어합니다. 때로는 상대방이 당신을 차갑거나 공감 능력이 부족하다고 느낄 수 있습니다.',
      emoji: '🧠',
      color: '#808080', // Gray
      traits: ['논리적', '합리적', '분석적', '효율적', '문제 해결 지향', '객관적'],
      compatibility: {
        best: ['공감적 경청형', '신중한 숙고형'],
        good: ['직설적 표현형', '적극적 참여형'],
        avoid: ['유머러스 중재형', '조화 지향 회피형'], // Those who avoid direct discussion or rely on humor for conflict
      },
      recommendations: {
        activities: ['토론 동아리', '퍼즐 게임', '체계적인 계획 세우기', '함께 공부하기'],
        tips: [
          '상대방의 감정을 먼저 헤아리고 공감하는 연습을 하세요.',
          '모든 문제를 논리적으로만 접근하려 하지 마세요.',
          '때로는 유머나 편안한 분위기를 조성하는 것도 중요해요.',
        ],
        // celebrities: ['RM (BTS)', '김태희', '류준열', '이찬혁'],
      },
    },
    {
      id: 'harmonious-avoider',
      title: '조화 지향 회피형',
      description: '당신은 관계의 조화를 최우선으로 여기며, 갈등을 회피하려는 경향이 있습니다.',
      detailedDescription:
        '불편한 대화나 갈등 상황을 극도로 싫어하며, 상대방의 기분을 상하게 하지 않으려 노력합니다. 자신의 의견을 솔직하게 표현하기보다 맞춰주거나 침묵하는 경우가 많습니다. 이로 인해 불만이 쌓이거나 상대방이 당신의 진짜 속마음을 알기 어려워할 수 있습니다.',
      emoji: '🤐',
      color: '#D8BFD8', // Thistle
      traits: ['조화 지향', '갈등 회피', '배려심', '눈치 빠름', '수동적', '내향적'],
      compatibility: {
        best: ['직설적 표현형', '적극적 참여형'],
        good: ['공감적 경청형', '수동적 반응형'],
        avoid: ['논리적 해결형', '유머러스 중재형'], // Those who demand directness or might not take hidden feelings seriously
      },
      recommendations: {
        activities: ['편안한 분위기에서 솔직한 대화 연습', '갈등 관리 워크숍', '감정 표현 연습'],
        tips: [
          '자신의 감정과 의견을 솔직하게 표현하는 용기를 가지세요.',
          '갈등을 회피하기보다 건강하게 해결하는 방법을 배우세요.',
          '상대방이 당신의 침묵을 오해할 수 있음을 인지하세요.',
        ],
        // celebrities: ['아이유', '정형돈', '김고은', '백현 (EXO)'],
      },
    },
    {
      id: 'humorous-mediator',
      title: '유머러스 중재형',
      description: '당신은 유머와 재치로 분위기를 부드럽게 만들고 갈등을 완화시키는 데 능숙합니다.',
      detailedDescription:
        '대화에 재미를 더하고 싶어하며, 갈등 상황에서도 유머를 사용하여 긴장을 풀어주려 합니다. 긍정적인 에너지로 연인과의 관계를 활기차게 만듭니다. 하지만 때로는 진지한 상황에서 가볍게 보이거나, 문제의 본질을 회피한다는 오해를 살 수 있습니다.',
      emoji: '😂',
      color: '#FFEB3B', // Yellow
      traits: ['유머러스', '재치', '긍정적', '친화력', '분위기 메이커', '낙천적'],
      compatibility: {
        best: ['신중한 숙고형', '논리적 해결형'],
        good: ['적극적 참여형', '직설적 표현형'],
        avoid: ['조화 지향 회피형', '공감적 경청형'], // May find humor insensitive in serious moments
      },
      recommendations: {
        activities: ['코미디 쇼 관람', '함께 게임하기', '서로에게 웃음 주기 챌린지'],
        tips: [
          '진지한 상황에서는 유머를 자제하고 진솔한 태도를 보이세요.',
          '때로는 상대방의 감정에 깊이 공감하는 연습도 필요해요.',
          '문제의 본질을 회피하지 않고 직시하는 용기를 가지세요.',
        ],
        // celebrities: ['딘딘', '이수근', '양세형', '제시'],
      },
    },
    {
      id: 'thoughtful-contemplator',
      title: '신중한 숙고형',
      description: '당신은 대화 전 충분히 생각하고 신중하게 표현하는 것을 선호합니다.',
      detailedDescription:
        '말하기 전에 깊이 생각하고, 자신의 의견을 정리하는 데 시간이 필요합니다. 섣부른 판단이나 감정적인 반응을 피하며, 논리적이고 조리 있게 말하려 노력합니다. 이 때문에 대화의 흐름이 느리거나, 상대방이 당신의 속마음을 파악하기 어렵다고 느낄 수 있습니다.',
      emoji: '🤔',
      color: '#B0C4DE', // Light Steel Blue
      traits: ['신중함', '사려 깊음', '논리적', '내향적', '분석적', '조용함'],
      compatibility: {
        best: ['유머러스 중재형', '적극적 참여형'],
        good: ['논리적 해결형', '공감적 경청형'],
        avoid: ['직설적 표현형', '수동적 반응형'], // May be frustrated by bluntness or lack of initiative
      },
      recommendations: {
        activities: ['일기 쓰기', '독서', '명상', '혼자만의 시간 갖기'],
        tips: [
          '때로는 직관적으로 말하는 연습을 해보세요.',
          '너무 많은 생각을 하기보다 즉각적으로 반응하는 연습을 하세요.',
          '상대방이 기다릴 수 있다는 점을 인지하고 조율하세요.',
        ],
        // celebrities: ['진 (BTS)', '성시경', '조승우', '나영석PD'],
      },
    },
    {
      id: 'active-engager',
      title: '적극적 참여형',
      description: '당신은 대화에 적극적으로 참여하고 에너지를 불어넣는 스타일입니다.',
      detailedDescription:
        '대화를 주도하거나 활발하게 반응하며 분위기를 이끌어갑니다. 새로운 주제를 제시하거나 질문을 많이 던져 대화를 풍성하게 만들고 싶어합니다. 때로는 상대방이 대화에 압도당하거나, 당신이 너무 말이 많다고 느낄 수 있습니다.',
      emoji: '🚀',
      color: '#FFD700', // Gold
      traits: ['적극적', '활발함', '주도적', '에너지 넘침', '솔직함', '개방적'],
      compatibility: {
        best: ['수동적 반응형', '신중한 숙고형'],
        good: ['직설적 표현형', '유머러스 중재형'],
        avoid: ['조화 지향 회피형', '논리적 해결형'], // May struggle with those who avoid conflict or too much analytical thought
      },
      recommendations: {
        activities: ['그룹 스터디', '토론 모임', '커플 액티비티', '새로운 장소 탐험'],
        tips: [
          '상대방에게도 대화의 주도권을 넘겨주는 연습을 하세요.',
          '때로는 듣는 것이 말하는 것보다 중요합니다.',
          '상대방이 지쳐하지 않도록 대화의 강도를 조절하세요.',
        ],
        // celebrities: ['제이홉 (BTS)', '노홍철', '강다니엘', '붐'],
      },
    },
    {
      id: 'passive-responder',
      title: '수동적 반응형',
      description: '당신은 연애 소통에서 주로 상대방의 주도에 따라 반응하는 편입니다.',
      detailedDescription:
        '자신이 먼저 대화를 시작하거나 의견을 적극적으로 내세우기보다, 상대방이 말하면 반응하고 질문에 답하는 것을 선호합니다. 갈등 상황에서도 먼저 나서기보다 상대방의 반응을 기다립니다. 이 때문에 상대방이 당신의 관심이나 열정을 의심할 수 있습니다.',
      emoji: '🤫',
      color: '#BDB76B', // Dark Khaki
      traits: ['수동적', '내향적', '조용함', '경청', '관찰력', '배려심'],
      compatibility: {
        best: ['적극적 참여형', '직설적 표현형'],
        good: ['신중한 숙고형', '조화 지향 회피형'],
        avoid: ['유머러스 중재형', '논리적 해결형'], // May feel pushed by humor or too much analysis
      },
      recommendations: {
        activities: [
          '혼자만의 시간 갖기',
          '조용한 취미 생활',
          '상대방의 질문에 구체적으로 답하기 연습',
        ],
        tips: [
          '자신의 생각과 감정을 먼저 표현하는 연습을 해보세요.',
          '때로는 먼저 대화를 시작하는 용기를 가지세요.',
          '상대방이 지루해하지 않도록 적절한 반응을 보여주세요.',
        ],
        // celebrities: ['RM (BTS)', '김연아', '지드래곤', '정은채'], // RM has diverse aspects
      },
    },
  ],
};
