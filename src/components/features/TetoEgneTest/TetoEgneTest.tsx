import { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Zap } from 'lucide-react';
import {
  StyledTetoEgneTest,
  StyledGenderSelector,
  StyledGenderOption,
  StyledProgressBar,
  StyledProgressFill,
  StyledQuestionCard,
  StyledOptionsGrid,
  StyledOption,
  StyledNavigationButtons,
  StyledResultDisplay,
  StyledCategoryResultGrid,
  StyledCategoryCard,
  StyledHormoneBar,
  StyledHormoneBarFill,
  StyledOverallResult,
  StyledAnalysisSection,
} from './TetoEgneTest.style';
import Typography from '@/components/common/Typography/Typography';
import Button from '@/components/common/Button/Button';
import ShareResult from '@/components/common/ShareResult/ShareResult';
import type {
  TetoEgneTestData,
  TetoEgneProgress,
  TetoEgneResult,
  TetoEgneCategoryResult,
} from '@/types/tetoEgneTest';

interface TetoEgneTestProps {
  testData: TetoEgneTestData;
  onComplete?: (result: TetoEgneResult) => void;
}

const TetoEgneTest = ({ testData, onComplete }: TetoEgneTestProps) => {
  const [progress, setProgress] = useState<TetoEgneProgress>({
    currentQuestionIndex: 0,
    selectedGender: null,
    answers: {},
    scores: {
      appearance: { testo: 0, estrogen: 0 },
      personality: { testo: 0, estrogen: 0 },
      behavior: { testo: 0, estrogen: 0 },
      preference: { testo: 0, estrogen: 0 },
      social: { testo: 0, estrogen: 0 },
      decision: { testo: 0, estrogen: 0 },
    },
  });
  const [result, setResult] = useState<TetoEgneResult | null>(null);
  const [showShareResult, setShowShareResult] = useState(false);
  const [step, setStep] = useState<'gender' | 'test' | 'result'>('gender');

  const currentQuestion = testData.questions[progress.currentQuestionIndex];
  const isLastQuestion = progress.currentQuestionIndex === testData.questions.length - 1;
  const progressPercentage =
    ((progress.currentQuestionIndex + 1) / testData.questions.length) * 100;

  const categoryNames = {
    appearance: '외모/스타일',
    personality: '성격/기질',
    behavior: '행동양식',
    preference: '취향/선호',
    social: '사회성/관계',
    decision: '의사결정',
  };

  // 점수 재계산 함수
  const recalculateScores = (answers: Record<string, string>) => {
    const newScores = {
      appearance: { testo: 0, estrogen: 0 },
      personality: { testo: 0, estrogen: 0 },
      behavior: { testo: 0, estrogen: 0 },
      preference: { testo: 0, estrogen: 0 },
      social: { testo: 0, estrogen: 0 },
      decision: { testo: 0, estrogen: 0 },
    };

    Object.entries(answers).forEach(([questionId, optionId]) => {
      const question = testData.questions.find(q => q.id === questionId);
      const selectedOption = question?.options.find(opt => opt.id === optionId);

      if (selectedOption && question) {
        const category = question.category;
        newScores[category].testo += selectedOption.scores.testo;
        newScores[category].estrogen += selectedOption.scores.estrogen;
      }
    });

    return newScores;
  };

  const handleGenderSelect = (gender: 'male' | 'female') => {
    setProgress(prev => ({ ...prev, selectedGender: gender }));
    setStep('test');
  };

  const handleOptionSelect = (optionId: string) => {
    const selectedOption = currentQuestion.options.find(opt => opt.id === optionId);
    if (!selectedOption) return;

    const newAnswers = {
      ...progress.answers,
      [currentQuestion.id]: optionId,
    };

    const newScores = recalculateScores(newAnswers);

    setProgress({
      ...progress,
      answers: newAnswers,
      scores: newScores,
    });

    setTimeout(() => {
      if (isLastQuestion) {
        calculateResult(newScores);
      } else {
        goToNextQuestion();
      }
    }, 300);
  };

  const calculateCategoryResult = (testo: number, estrogen: number): TetoEgneCategoryResult => {
    const total = testo + estrogen;
    const testoPercentage = total > 0 ? Math.round((testo / total) * 100) : 50;
    const estrogenPercentage = 100 - testoPercentage;

    let dominantType: 'testo' | 'estrogen' | 'balanced';
    if (Math.abs(testoPercentage - 50) < 10) {
      dominantType = 'balanced';
    } else if (testoPercentage > 50) {
      dominantType = 'testo';
    } else {
      dominantType = 'estrogen';
    }

    return {
      testo,
      estrogen,
      testoPercentage,
      estrogenPercentage,
      dominantType,
    };
  };

  const calculateResult = (scores: TetoEgneProgress['scores']) => {
    // 각 카테고리별 결과 계산
    const categoryResults = {
      appearance: calculateCategoryResult(scores.appearance.testo, scores.appearance.estrogen),
      personality: calculateCategoryResult(scores.personality.testo, scores.personality.estrogen),
      behavior: calculateCategoryResult(scores.behavior.testo, scores.behavior.estrogen),
      preference: calculateCategoryResult(scores.preference.testo, scores.preference.estrogen),
      social: calculateCategoryResult(scores.social.testo, scores.social.estrogen),
      decision: calculateCategoryResult(scores.decision.testo, scores.decision.estrogen),
    };

    // 전체 결과 계산
    const overallTesto = Object.values(scores).reduce((sum, cat) => sum + cat.testo, 0);
    const overallEstrogen = Object.values(scores).reduce((sum, cat) => sum + cat.estrogen, 0);
    const overallTotal = overallTesto + overallEstrogen;

    const overallTestoPercentage =
      overallTotal > 0 ? Math.round((overallTesto / overallTotal) * 100) : 50;
    const overallEstrogenPercentage = 100 - overallTestoPercentage;

    // 데이터에서 결과 정보 가져오기
    let dominantType: 'testo' | 'estrogen' | 'balanced';
    let intensity: 'strong' | 'moderate' | undefined;
    let analysisInfo;

    if (Math.abs(overallTestoPercentage - 50) < 10) {
      dominantType = 'balanced';
      analysisInfo = testData.analysisData.balanced;
    } else if (overallTestoPercentage > 50) {
      dominantType = 'testo';
      intensity = overallTestoPercentage > 70 ? 'strong' : 'moderate';
      analysisInfo = testData.analysisData.testo[intensity];
    } else {
      dominantType = 'estrogen';
      intensity = overallEstrogenPercentage > 70 ? 'strong' : 'moderate';
      analysisInfo = testData.analysisData.estrogen[intensity];
    }

    // 성별에 따른 개인화된 정보 가져오기
    const genderSpecific = analysisInfo.genderSpecific[progress.selectedGender || 'male'];

    const finalResult: TetoEgneResult = {
      overall: {
        testoPercentage: overallTestoPercentage,
        estrogenPercentage: overallEstrogenPercentage,
        dominantType,
        intensity: intensity || 'moderate',
        title: analysisInfo.title,
        description: analysisInfo.description,
        emoji: analysisInfo.emoji,
      },
      categories: categoryResults,
      analysis: {
        strengths: analysisInfo.strengths,
        characteristics: analysisInfo.characteristics,
        recommendations: analysisInfo.recommendations,
        compatibleTypes: analysisInfo.compatibleTypes,
        funFacts: genderSpecific.funFacts,
        tips: genderSpecific.tips,
      },
    };

    setResult(finalResult);
    setStep('result');
    onComplete?.(finalResult);
  };

  // 나머지 함수들 (goToNextQuestion, goToPreviousQuestion, resetTest)은 동일

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
    }
  };

  const resetTest = () => {
    setProgress({
      currentQuestionIndex: 0,
      selectedGender: null,
      answers: {},
      scores: {
        appearance: { testo: 0, estrogen: 0 },
        personality: { testo: 0, estrogen: 0 },
        behavior: { testo: 0, estrogen: 0 },
        preference: { testo: 0, estrogen: 0 },
        social: { testo: 0, estrogen: 0 },
        decision: { testo: 0, estrogen: 0 },
      },
    });
    setResult(null);
    setShowShareResult(false);
    setStep('gender');
  };

  const selectedOptionId = progress.answers[currentQuestion?.id];

  // 성별 선택 단계
  if (step === 'gender') {
    return (
      <StyledTetoEgneTest>
        <div className="gender-step">
          <Typography variant="h2" align="center">
            🧬 테토에겐 테스트
          </Typography>
          <Typography variant="body1" align="center" color="#6B7280">
            더 정확한 분석을 위해 성별을 선택해주세요
          </Typography>

          <StyledGenderSelector>
            <StyledGenderOption onClick={() => handleGenderSelect('female')}>
              <div className="emoji">👩</div>
              <Typography variant="h5">여성</Typography>
            </StyledGenderOption>

            <StyledGenderOption onClick={() => handleGenderSelect('male')}>
              <div className="emoji">👨</div>
              <Typography variant="h5">남성</Typography>
            </StyledGenderOption>
          </StyledGenderSelector>
        </div>
      </StyledTetoEgneTest>
    );
  }

  // 결과 표시 단계 (기존과 거의 동일하지만 데이터 기반으로 렌더링)
  if (step === 'result' && result) {
    return (
      <StyledTetoEgneTest>
        <StyledResultDisplay>
          <StyledOverallResult>
            <div className="result-emoji">{result.overall.emoji}</div>
            <Typography variant="h2" align="center" color="#6366F1">
              {result.overall.title}
            </Typography>
            <Typography variant="body1" align="center">
              {result.overall.description}
            </Typography>

            <div className="overall-stats">
              <div className="stat-item testo">
                <Typography variant="h3" color="#FF6B35">
                  {result.overall.testoPercentage}%
                </Typography>
                <Typography variant="body2">테토 지수</Typography>
              </div>
              <div className="stat-item estrogen">
                <Typography variant="h3" color="#FF69B4">
                  {result.overall.estrogenPercentage}%
                </Typography>
                <Typography variant="body2">에겐 지수</Typography>
              </div>
            </div>
          </StyledOverallResult>

          <StyledCategoryResultGrid>
            {Object.entries(result.categories).map(([category, categoryResult]) => (
              <StyledCategoryCard key={category}>
                <Typography variant="h6" align="center">
                  {categoryNames[category as keyof typeof categoryNames]}
                </Typography>

                <StyledHormoneBar>
                  <StyledHormoneBarFill percentage={categoryResult.testoPercentage} type="testo" />
                  <div className="bar-labels">
                    <span className="testo-label">{categoryResult.testoPercentage}%</span>
                    <span className="estrogen-label">{categoryResult.estrogenPercentage}%</span>
                  </div>
                </StyledHormoneBar>

                <div className="dominant-type">
                  <Typography variant="caption" color="#6B7280">
                    {categoryResult.dominantType === 'balanced'
                      ? '균형'
                      : categoryResult.dominantType === 'testo'
                        ? '테토 우세'
                        : '에겐 우세'}
                  </Typography>
                </div>
              </StyledCategoryCard>
            ))}
          </StyledCategoryResultGrid>

          <StyledAnalysisSection>
            <div className="analysis-item">
              <Typography variant="h5">💪 주요 강점</Typography>
              <div className="tags">
                {result.analysis.strengths.map((strength, index) => (
                  <span key={index} className="tag strength-tag">
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            <div className="analysis-item">
              <Typography variant="h5">✨ 성향 특징</Typography>
              <div className="characteristics">
                {result.analysis.characteristics.map((char, index) => (
                  <div key={index} className="characteristic-item">
                    • {char}
                  </div>
                ))}
              </div>
            </div>

            <div className="analysis-item">
              <Typography variant="h5">🎯 추천 활동</Typography>
              <div className="recommendations">
                {result.analysis.recommendations.map((rec, index) => (
                  <div key={index} className="recommendation-item">
                    • {rec}
                  </div>
                ))}
              </div>
            </div>

            <div className="analysis-item">
              <Typography variant="h5">💕 잘 맞는 타입</Typography>
              <div className="compatible-types">
                {result.analysis.compatibleTypes.map((type, index) => (
                  <span key={index} className="tag compatible-tag">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="analysis-item">
              <Typography variant="h5">💡 개인화 팁</Typography>
              <div className="tips">
                {result.analysis.tips.map((tip, index) => (
                  <div key={index} className="tip-item">
                    • {tip}
                  </div>
                ))}
              </div>
            </div>

            <div className="analysis-item fun-facts">
              <Typography variant="h5">🎉 재미있는 분석</Typography>
              <div className="fun-facts-list">
                {result.analysis.funFacts.map((fact, index) => (
                  <div key={index} className="fun-fact-item">
                    {fact}
                  </div>
                ))}
              </div>
            </div>
          </StyledAnalysisSection>

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
              result={result.overall.title}
              description={`테토 ${result.overall.testoPercentage}% • 에겐 ${result.overall.estrogenPercentage}%`}
              userImage={undefined}
              backgroundColor="#6366F1"
              emoji={result.overall.emoji}
              onClose={() => setShowShareResult(false)}
            />
          )}
        </StyledResultDisplay>
      </StyledTetoEgneTest>
    );
  }

  // 테스트 진행 단계 (기존과 동일)
  return (
    <StyledTetoEgneTest>
      <StyledProgressBar>
        <StyledProgressFill percentage={progressPercentage} />
        <div className="progress-text">
          <Typography variant="caption">
            {progress.currentQuestionIndex + 1} / {testData.questions.length}
          </Typography>
        </div>
      </StyledProgressBar>

      <StyledQuestionCard>
        <div className="category-badge">
          <Zap size={16} />
          <Typography variant="caption">{categoryNames[currentQuestion?.category]}</Typography>
        </div>

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
      </StyledNavigationButtons>
    </StyledTetoEgneTest>
  );
};

export default TetoEgneTest;
