export interface TestQuestion {
  id: string;
  question: string;
  options: TestOption[];
  category?: string;
}

export interface TestOption {
  id: string;
  text: string;
  scores: Record<string, number>; // 각 결과 타입별 점수
  emoji?: string;
}

export interface TestResult {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  emoji: string;
  color: string;
  traits: string[];
  compatibility: {
    best: string[];
    good: string[];
    avoid: string[];
  };
  recommendations: {
    activities: string[];
    tips: string[];
    celebrities?: string[];
    kpopGroups?: string[]; // K-pop 테스트용
    ottContent?: string[]; // OTT 테스트용
  };
  percentage?: number; // 계산된 매칭 퍼센트
}

export interface PersonalityTestData {
  id: string;
  title: string;
  description: string;
  category: string;
  questions: TestQuestion[];
  results: TestResult[];
  resultTypes: string[]; // 가능한 결과 타입들
}

export interface TestProgress {
  currentQuestionIndex: number;
  answers: Record<string, string>; // questionId -> optionId
  scores: Record<string, number>; // resultType -> score
}
