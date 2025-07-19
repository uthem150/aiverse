import { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import {
  StyledPersonalityTest,
  StyledProgressBar,
  StyledProgressFill,
  StyledQuestionCard,
  StyledOptionsGrid,
  StyledOption,
  StyledNavigationButtons,
  StyledResultDisplay,
} from './PersonalityTest.style';
import Typography from '@/components/common/Typography/Typography';
import Button from '@/components/common/Button/Button';
import ShareResult from '@/components/common/ShareResult/ShareResult';
import type { PersonalityTestData, TestProgress, TestResult } from '@/types/personalityTest';

interface PersonalityTestProps {
  testData: PersonalityTestData;
  onComplete?: (result: TestResult) => void;
}

const PersonalityTest = ({ testData, onComplete }: PersonalityTestProps) => {
  const [progress, setProgress] = useState<TestProgress>({
    currentQuestionIndex: 0,
    answers: {},
    scores: {},
  });
  const [result, setResult] = useState<TestResult | null>(null);
  const [showShareResult, setShowShareResult] = useState(false);

  const currentQuestion = testData.questions[progress.currentQuestionIndex];
  const isLastQuestion = progress.currentQuestionIndex === testData.questions.length - 1;
  const progressPercentage =
    ((progress.currentQuestionIndex + 1) / testData.questions.length) * 100;

  // 점수 재계산 함수 (전체 답변을 기반으로)
  const recalculateScores = (answers: Record<string, string>) => {
    const newScores: Record<string, number> = {};

    // 모든 답변을 순회하면서 점수 계산
    Object.entries(answers).forEach(([questionId, optionId]) => {
      const question = testData.questions.find(q => q.id === questionId);
      const selectedOption = question?.options.find(opt => opt.id === optionId);

      if (selectedOption) {
        Object.entries(selectedOption.scores).forEach(([resultType, score]) => {
          newScores[resultType] = (newScores[resultType] || 0) + score;
        });
      }
    });

    return newScores;
  };

  const handleOptionSelect = (optionId: string) => {
    const selectedOption = currentQuestion.options.find(opt => opt.id === optionId);
    if (!selectedOption) return;

    // 새로운 답변 저장
    const newAnswers = {
      ...progress.answers,
      [currentQuestion.id]: optionId,
    };

    // 전체 점수 재계산
    const newScores = recalculateScores(newAnswers);

    setProgress({
      ...progress,
      answers: newAnswers,
      scores: newScores,
    });

    // 자동으로 다음 질문으로 이동 (마지막 질문이면 결과 계산)
    setTimeout(() => {
      if (isLastQuestion) {
        calculateResult(newScores);
      } else {
        goToNextQuestion();
      }
    }, 300);
  };

  const calculateResult = (scores: Record<string, number>) => {
    // 가장 높은 점수의 결과 타입 찾기
    const sortedScores = Object.entries(scores).sort(([, a], [, b]) => b - a);

    const topResultType = sortedScores[0]?.[0];
    const topScore = sortedScores[0]?.[1] || 0;
    const totalPossibleScore = testData.questions.length * 3; // 최대 점수 (옵션당 최대 3점 가정)

    const finalResult = testData.results.find(r => r.id === topResultType);
    if (finalResult) {
      const resultWithPercentage = {
        ...finalResult,
        percentage: Math.round((topScore / totalPossibleScore) * 100),
      };

      setResult(resultWithPercentage);
      onComplete?.(resultWithPercentage);
    }
  };

  const goToNextQuestion = () => {
    if (!isLastQuestion) {
      setProgress(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    }
  };

  const goToPreviousQuestion = () => {
    if (progress.currentQuestionIndex > 0) {
      setProgress(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
      }));
      // 점수는 변경하지 않음 (이미 답변된 것들은 유지)
    }
  };

  const resetTest = () => {
    setProgress({
      currentQuestionIndex: 0,
      answers: {},
      scores: {},
    });
    setResult(null);
    setShowShareResult(false);
  };

  // 현재 질문의 답변 확인
  const selectedOptionId = progress.answers[currentQuestion?.id];

  // 디버깅용 점수 표시 (개발 중에만 사용)
  const showDebugInfo = process.env.NODE_ENV === 'development';

  if (result) {
    return (
      <StyledPersonalityTest>
        <StyledResultDisplay>
          <div className="result-header">
            <div className="emoji">{result.emoji}</div>
            <Typography variant="h2" align="center" color={result.color}>
              {result.title}
            </Typography>
            <Typography variant="body1" align="center">
              {result.description}
            </Typography>
            {result.percentage && (
              <Typography variant="h4" align="center" color={result.color}>
                매칭도: {result.percentage}%
              </Typography>
            )}
          </div>

          <div className="result-content">
            <div className="section">
              <Typography variant="h5">📝 상세 분석</Typography>
              <Typography variant="body1">{result.detailedDescription}</Typography>
            </div>

            <div className="section">
              <Typography variant="h5">✨ 주요 특징</Typography>
              <div className="traits">
                {result.traits.map((trait, index) => (
                  <span key={index} className="trait-tag">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="section">
              <Typography variant="h5">💕 궁합</Typography>
              <div className="compatibility">
                <div className="compat-item">
                  <Typography variant="body2" color="#10B981">
                    최고 궁합:
                  </Typography>
                  <span>{result.compatibility.best.join(', ')}</span>
                </div>
                <div className="compat-item">
                  <Typography variant="body2" color="#F59E0B">
                    좋은 궁합:
                  </Typography>
                  <span>{result.compatibility.good.join(', ')}</span>
                </div>
                <div className="compat-item">
                  <Typography variant="body2" color="#EF4444">
                    피해야 할:
                  </Typography>
                  <span>{result.compatibility.avoid.join(', ')}</span>
                </div>
              </div>
            </div>

            <div className="section">
              <Typography variant="h5">🎯 추천사항</Typography>
              <div className="recommendations">
                {result.recommendations.activities.map((activity, index) => (
                  <div key={index} className="recommendation-item">
                    • {activity}
                  </div>
                ))}
              </div>
            </div>

            {result.recommendations.kpopGroups && (
              <div className="section">
                <Typography variant="h5">🎵 추천 K-pop 그룹</Typography>
                <div className="kpop-groups">
                  {result.recommendations.kpopGroups.map((group, index) => (
                    <span key={index} className="kpop-tag">
                      {group}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {result.recommendations.celebrities && (
              <div className="section">
                <Typography variant="h5">👑 닮은 연예인</Typography>
                <div className="celebrities">
                  {result.recommendations.celebrities.map((celeb, index) => (
                    <span key={index} className="celeb-tag">
                      {celeb}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {result.recommendations.ottContent && (
              <div className="section">
                <Typography variant="h5">📺 추천 콘텐츠</Typography>
                <div className="recommendations">
                  {result.recommendations.ottContent.map((content, index) => (
                    <div key={index} className="recommendation-item">
                      • {content}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="result-actions">
            <Button variant="secondary" onClick={resetTest}>
              <RotateCcw size={16} />
              다시 테스트
            </Button>
            <Button variant="primary" onClick={() => setShowShareResult(true)}>
              결과 공유하기
            </Button>
          </div>

          {showShareResult && (
            <ShareResult
              testTitle={testData.title}
              result={result.title}
              description={result.description}
              userImage={undefined}
              backgroundColor={result.color}
              emoji={result.emoji}
              onClose={() => setShowShareResult(false)}
            />
          )}
        </StyledResultDisplay>
      </StyledPersonalityTest>
    );
  }

  return (
    <StyledPersonalityTest>
      {/* Progress Bar */}
      <StyledProgressBar>
        <StyledProgressFill percentage={progressPercentage} />
        <div className="progress-text">
          <Typography variant="caption">
            {progress.currentQuestionIndex + 1} / {testData.questions.length}
          </Typography>
        </div>
      </StyledProgressBar>

      {/* Debug Info (개발 환경에서만 표시) */}
      {showDebugInfo && (
        <div
          style={{
            padding: '8px',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
            marginBottom: '16px',
            fontSize: '12px',
          }}
        >
          <strong>Debug Info:</strong>
          <div>Scores: {JSON.stringify(progress.scores)}</div>
          <div>Answers: {JSON.stringify(progress.answers)}</div>
        </div>
      )}

      {/* Question Card */}
      <StyledQuestionCard>
        <Typography variant="h4" align="center">
          Q{progress.currentQuestionIndex + 1}. {currentQuestion?.question}
        </Typography>

        <StyledOptionsGrid>
          {currentQuestion?.options.map(option => (
            <StyledOption
              key={option.id}
              selected={selectedOptionId === option.id}
              onClick={() => handleOptionSelect(option.id)}
            >
              {option.emoji && <span className="emoji">{option.emoji}</span>}
              <Typography variant="body1">{option.text}</Typography>
            </StyledOption>
          ))}
        </StyledOptionsGrid>
      </StyledQuestionCard>

      {/* Navigation */}
      <StyledNavigationButtons>
        <Button
          variant="secondary"
          onClick={goToPreviousQuestion}
          disabled={progress.currentQuestionIndex === 0}
        >
          <ChevronLeft size={16} />
          이전
        </Button>

        <Button variant="secondary" onClick={resetTest}>
          <RotateCcw size={16} />
          처음부터
        </Button>

        {/* 다음 버튼 (선택사항 - 자동 진행되므로 필요에 따라) */}
        {selectedOptionId && !isLastQuestion && (
          <Button variant="primary" onClick={goToNextQuestion}>
            다음
            <ChevronRight size={16} />
          </Button>
        )}
      </StyledNavigationButtons>
    </StyledPersonalityTest>
  );
};

export default PersonalityTest;
