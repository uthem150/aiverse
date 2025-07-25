export interface TetoEgneQuestion {
  id: string;
  question: string;
  options: TetoEgneOption[];
  category: TetoEgneCategory;
}

export interface TetoEgneOption {
  id: string;
  text: string;
  emoji?: string;
  scores: {
    testo: number;
    estrogen: number;
  };
}

export type TetoEgneCategory =
  | 'appearance'
  | 'personality'
  | 'behavior'
  | 'preference'
  | 'social'
  | 'decision';

export interface TetoEgneCategoryResult {
  testo: number;
  estrogen: number;
  testoPercentage: number;
  estrogenPercentage: number;
  dominantType: 'testo' | 'estrogen' | 'balanced';
}

// 결과 타입별 분석 데이터
export interface TetoEgneAnalysisData {
  testo: {
    strong: {
      // 70% 이상
      title: string;
      description: string;
      emoji: string;
      strengths: string[];
      characteristics: string[];
      recommendations: string[];
      compatibleTypes: string[];
      genderSpecific: {
        male: {
          funFacts: string[];
          tips: string[];
        };
        female: {
          funFacts: string[];
          tips: string[];
        };
      };
    };
    moderate: {
      // 50-70%
      title: string;
      description: string;
      emoji: string;
      strengths: string[];
      characteristics: string[];
      recommendations: string[];
      compatibleTypes: string[];
      genderSpecific: {
        male: {
          funFacts: string[];
          tips: string[];
        };
        female: {
          funFacts: string[];
          tips: string[];
        };
      };
    };
  };
  estrogen: {
    strong: {
      // 70% 이상
      title: string;
      description: string;
      emoji: string;
      strengths: string[];
      characteristics: string[];
      recommendations: string[];
      compatibleTypes: string[];
      genderSpecific: {
        male: {
          funFacts: string[];
          tips: string[];
        };
        female: {
          funFacts: string[];
          tips: string[];
        };
      };
    };
    moderate: {
      // 50-70%
      title: string;
      description: string;
      emoji: string;
      strengths: string[];
      characteristics: string[];
      recommendations: string[];
      compatibleTypes: string[];
      genderSpecific: {
        male: {
          funFacts: string[];
          tips: string[];
        };
        female: {
          funFacts: string[];
          tips: string[];
        };
      };
    };
  };
  balanced: {
    // 40-60%
    title: string;
    description: string;
    emoji: string;
    strengths: string[];
    characteristics: string[];
    recommendations: string[];
    compatibleTypes: string[];
    genderSpecific: {
      male: {
        funFacts: string[];
        tips: string[];
      };
      female: {
        funFacts: string[];
        tips: string[];
      };
    };
  };
}

export interface TetoEgneResult {
  overall: {
    testoPercentage: number;
    estrogenPercentage: number;
    dominantType: 'testo' | 'estrogen' | 'balanced';
    intensity: 'strong' | 'moderate'; // balanced일 때는 사용하지 않음
    title: string;
    description: string;
    emoji: string;
  };
  categories: {
    appearance: TetoEgneCategoryResult;
    personality: TetoEgneCategoryResult;
    behavior: TetoEgneCategoryResult;
    preference: TetoEgneCategoryResult;
    social: TetoEgneCategoryResult;
    decision: TetoEgneCategoryResult;
  };
  analysis: {
    strengths: string[];
    characteristics: string[];
    recommendations: string[];
    compatibleTypes: string[];
    funFacts: string[];
    tips: string[];
  };
}

export interface TetoEgneTestData {
  id: string;
  title: string;
  description: string;
  questions: TetoEgneQuestion[];
  analysisData: TetoEgneAnalysisData; // 분석 데이터
}

export interface TetoEgneProgress {
  currentQuestionIndex: number;
  selectedGender: 'male' | 'female' | null;
  answers: Record<string, string>;
  scores: {
    appearance: { testo: number; estrogen: number };
    personality: { testo: number; estrogen: number };
    behavior: { testo: number; estrogen: number };
    preference: { testo: number; estrogen: number };
    social: { testo: number; estrogen: number };
    decision: { testo: number; estrogen: number };
  };
}
