import type { PersonalityTestData } from '@/types/personalityTest';

export const mbtiCompatibilityTestData: PersonalityTestData = {
  id: 'mbti-compatibility-test',
  title: '💖 MBTI 연애 궁합 테스트',
  description: '16가지 MBTI 유형별 최고의 연애 궁합을 찾아보세요!',
  category: 'romance',
  resultTypes: [
    'enfp',
    'infp',
    'enfj',
    'infj',
    'entp',
    'intp',
    'entj',
    'intj',
    'esfp',
    'isfp',
    'esfj',
    'isfj',
    'estp',
    'istp',
    'estj',
    'istj',
  ],
  questions: [
    {
      id: 'q1',
      question: '새로운 사람들과의 만남에서 당신은?',
      options: [
        {
          id: 'q1_a',
          text: '먼저 다가가서 대화를 시작한다',
          emoji: '🗣️',
          scores: { enfp: 3, enfj: 3, entp: 3, entj: 2, esfp: 3, esfj: 2, estp: 3, estj: 2 },
        },
        {
          id: 'q1_b',
          text: '누군가 먼저 말을 걸기를 기다린다',
          emoji: '🤐',
          scores: { infp: 3, infj: 3, intp: 3, intj: 3, isfp: 3, isfj: 2, istp: 3, istj: 2 },
        },
        {
          id: 'q1_c',
          text: '상황에 따라 다르게 행동한다',
          emoji: '🤔',
          scores: { enfj: 2, infj: 2, entj: 2, intj: 2, esfj: 2, isfj: 2, estj: 2, istj: 2 },
        },
      ],
    },
    {
      id: 'q2',
      question: '연인과의 갈등 상황에서 당신의 해결 방식은?',
      options: [
        {
          id: 'q2_a',
          text: '논리적으로 문제점을 분석해서 해결',
          emoji: '🧠',
          scores: { entp: 3, intp: 3, entj: 3, intj: 3, estp: 2, istp: 2, estj: 3, istj: 2 },
        },
        {
          id: 'q2_b',
          text: '감정적으로 공감하며 마음을 달래줌',
          emoji: '❤️',
          scores: { enfp: 3, infp: 3, enfj: 3, infj: 3, esfp: 3, isfp: 3, esfj: 3, isfj: 3 },
        },
        {
          id: 'q2_c',
          text: '시간을 두고 천천히 대화로 풀어감',
          emoji: '⏰',
          scores: { infp: 2, infj: 2, intp: 2, intj: 2, isfp: 2, isfj: 2, istp: 2, istj: 2 },
        },
      ],
    },
    // ... q3 ~ q16: 의사결정 방식, 계획성, 감정 표현, 가치관 등 MBTI 특성 반영 질문들
  ],
  results: [
    {
      id: 'enfp',
      title: 'ENFP - 스파크형',
      description: '열정적이고 자유로운 영혼! 창의적인 아이디어가 넘쳐나는 당신!',
      detailedDescription:
        '사람들과의 교감을 즐기고, 새로운 가능성을 탐구하는 것을 좋아합니다. 진정성 있는 관계를 추구하며, 상대방의 잠재력을 끌어내는 재능이 있어요.',
      emoji: '✨',
      color: '#FF9F40',
      traits: ['열정적', '창의적', '사교적', '직관적', '유연함'],
      compatibility: {
        best: ['INTJ', 'INFJ'],
        good: ['ENTP', 'ENFJ', 'INFP'],
        avoid: ['ESTJ', 'ISTJ'],
      },
      recommendations: {
        activities: ['새로운 취미 도전', '예술 활동', '여행 계획', '사람들과의 만남'],
        tips: ['계획적인 면도 기르세요', '약속은 꼭 지키려고 노력하세요'],
        celebrities: ['강다니엘', '박보영', 'RM(BTS)', '태연(소녀시대)'],
      },
    },
    {
      id: 'intj',
      title: 'INTJ - 건축가형',
      description: '독립적이고 전략적인 사고를 가진 완벽주의자!',
      detailedDescription:
        '장기적인 비전을 가지고 체계적으로 목표를 달성하는 타입입니다. 깊이 있는 관계를 선호하며, 진정한 파트너십을 추구해요.',
      emoji: '🏗️',
      color: '#6C5CE7',
      traits: ['전략적', '독립적', '논리적', '완벽주의', '미래지향적'],
      compatibility: {
        best: ['ENFP', 'ENTP'],
        good: ['INFJ', 'ENTJ', 'INTP'],
        avoid: ['ESFP', 'ISFP'],
      },
      recommendations: {
        activities: ['독서', '전략 게임', '학습', '장기 여행 계획'],
        tips: ['감정 표현을 조금 더 해보세요', '상대방의 감정에 공감해주세요'],
        celebrities: ['공유', '김태희', '이동욱', '한예슬'],
      },
    },
    // ... 나머지 14개 MBTI 타입
  ],
};
