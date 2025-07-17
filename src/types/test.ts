export interface TestCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  tests: TestItem[];
}

export interface TestItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: number; // minutes
  isNew?: boolean;
  isHot?: boolean;
  participantCount?: number;
}

export interface TestResult {
  id: string;
  testId: string;
  userId?: string;
  result: {
    type: string;
    title: string;
    description: string;
    image?: string;
    details?: Record<string, any>;
  };
  score?: number;
  createdAt: Date;
}
