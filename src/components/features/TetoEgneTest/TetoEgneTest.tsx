import { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Zap } from 'lucide-react';
import {
  StyledTetoEgneTest,
  StyledGenderStep,
  StyledGenderSelector,
  StyledGenderOption,
  StyledEmoji,
  StyledProgressBar,
  StyledProgressText,
  StyledProgressFill,
  StyledQuestionCard,
  StyledCategoryBadge,
  StyledOptionsGrid,
  StyledOption,
  StyledOptionEmoji,
  StyledNavigationButtons,
  StyledResultDisplay,
  StyledResultActions,
  StyledCategoryResultGrid,
  StyledCategoryCard,
  StyledDominantType,
  StyledHormoneBar,
  StyledBarLabels,
  StyledTestoLabel,
  StyledEstrogenLabel,
  StyledHormoneBarFill,
  StyledOverallResult,
  StyledResultEmoji,
  StyledOverallStats,
  StyledStatItem,
  StyledAnalysisSection,
  StyledAnalysisItem,
  StyledTags,
  StyledTag,
  StyledCharacteristics,
  StyledCharacteristicItem,
  StyledRecommendations,
  StyledRecommendationItem,
  StyledCompatibleTypes,
  StyledTips,
  StyledTipItem,
  StyledFunFactsList,
  StyledFunFactItem,
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
        <StyledGenderStep>
          <Typography variant="h2" align="center" responsive>
            🧬 테토에겐 테스트
          </Typography>
          <Typography variant="body1" align="center" color="#6B7280" responsive>
            더 정확한 분석을 위해 성별을 선택해주세요
          </Typography>

          <StyledGenderSelector>
            <StyledGenderOption onClick={() => handleGenderSelect('female')}>
              <StyledEmoji>👩</StyledEmoji>
              <Typography variant="h5" responsive>
                여성
              </Typography>
            </StyledGenderOption>

            <StyledGenderOption onClick={() => handleGenderSelect('male')}>
              <StyledEmoji>👨</StyledEmoji>
              <Typography variant="h5" responsive>
                남성
              </Typography>
            </StyledGenderOption>
          </StyledGenderSelector>
        </StyledGenderStep>
      </StyledTetoEgneTest>
    );
  }

  // 결과 표시 단계
  if (step === 'result' && result) {
    return (
      <StyledTetoEgneTest>
        <StyledResultDisplay>
          <StyledOverallResult>
            <StyledResultEmoji>{result.overall.emoji}</StyledResultEmoji>
            <Typography variant="h2" align="center" color="#6366F1" responsive>
              {result.overall.title}
            </Typography>
            <Typography variant="body1" align="center" responsive>
              {result.overall.description}
            </Typography>

            <StyledOverallStats>
              <StyledStatItem type="testo">
                <Typography variant="h3" color="#FF6B35" responsive>
                  {result.overall.testoPercentage}%
                </Typography>
                <Typography variant="body2" responsive>
                  테토 지수
                </Typography>
              </StyledStatItem>
              <StyledStatItem type="estrogen">
                <Typography variant="h3" color="#FF69B4" responsive>
                  {result.overall.estrogenPercentage}%
                </Typography>
                <Typography variant="body2" responsive>
                  에겐 지수
                </Typography>
              </StyledStatItem>
            </StyledOverallStats>
          </StyledOverallResult>

          <StyledCategoryResultGrid>
            {Object.entries(result.categories).map(([category, categoryResult]) => (
              <StyledCategoryCard key={category}>
                <Typography variant="h6" align="center" responsive>
                  {categoryNames[category as keyof typeof categoryNames]}
                </Typography>

                <StyledHormoneBar>
                  <StyledHormoneBarFill percentage={categoryResult.testoPercentage} type="testo" />
                  <StyledBarLabels>
                    <StyledTestoLabel>{categoryResult.testoPercentage}%</StyledTestoLabel>
                    <StyledEstrogenLabel>{categoryResult.estrogenPercentage}%</StyledEstrogenLabel>
                  </StyledBarLabels>
                </StyledHormoneBar>

                <StyledDominantType>
                  <Typography variant="caption" color="#6B7280" responsive>
                    {categoryResult.dominantType === 'balanced'
                      ? '균형'
                      : categoryResult.dominantType === 'testo'
                        ? '테토 우세'
                        : '에겐 우세'}
                  </Typography>
                </StyledDominantType>
              </StyledCategoryCard>
            ))}
          </StyledCategoryResultGrid>

          <StyledAnalysisSection>
            <StyledAnalysisItem>
              <Typography variant="h5" responsive>
                💪 주요 강점
              </Typography>
              <StyledTags>
                {result.analysis.strengths.map((strength, index) => (
                  <StyledTag key={index} variant="strength">
                    <Typography variant="label" color="white" responsive>
                      {strength}
                    </Typography>
                  </StyledTag>
                ))}
              </StyledTags>
            </StyledAnalysisItem>

            <StyledAnalysisItem>
              <Typography variant="h5" responsive>
                ✨ 성향 특징
              </Typography>
              <StyledCharacteristics>
                {result.analysis.characteristics.map((char, index) => (
                  <StyledCharacteristicItem key={index}>
                    <Typography variant="body1" responsive>
                      {char}
                    </Typography>
                  </StyledCharacteristicItem>
                ))}
              </StyledCharacteristics>
            </StyledAnalysisItem>

            <StyledAnalysisItem>
              <Typography variant="h5" responsive>
                🎯 추천 활동
              </Typography>
              <StyledRecommendations>
                {result.analysis.recommendations.map((rec, index) => (
                  <StyledRecommendationItem key={index}>
                    <Typography variant="body1" responsive>
                      {rec}
                    </Typography>
                  </StyledRecommendationItem>
                ))}
              </StyledRecommendations>
            </StyledAnalysisItem>

            <StyledAnalysisItem>
              <Typography variant="h5" responsive>
                💕 잘 맞는 타입
              </Typography>
              <StyledCompatibleTypes>
                {result.analysis.compatibleTypes.map((type, index) => (
                  <StyledTag key={index} variant="compatible">
                    <Typography variant="label" color="white" responsive>
                      {type}
                    </Typography>
                  </StyledTag>
                ))}
              </StyledCompatibleTypes>
            </StyledAnalysisItem>

            <StyledAnalysisItem>
              <Typography variant="h5" responsive>
                💡 개인화 팁
              </Typography>
              <StyledTips>
                {result.analysis.tips.map((tip, index) => (
                  <StyledTipItem key={index}>
                    <Typography variant="body1" responsive>
                      {tip}
                    </Typography>
                  </StyledTipItem>
                ))}
              </StyledTips>
            </StyledAnalysisItem>

            <StyledAnalysisItem>
              <Typography variant="h5" responsive>
                🎉 재미있는 분석
              </Typography>
              <StyledFunFactsList>
                {result.analysis.funFacts.map((fact, index) => (
                  <StyledFunFactItem key={index}>
                    <Typography variant="body1" responsive>
                      {fact}
                    </Typography>
                  </StyledFunFactItem>
                ))}
              </StyledFunFactsList>
            </StyledAnalysisItem>
          </StyledAnalysisSection>

          <StyledResultActions>
            <Button variant="secondary" onClick={resetTest}>
              <RotateCcw size={16} />
              다시 테스트
            </Button>
            <Button variant="primary" onClick={() => setShowShareResult(true)}>
              결과 공유하기
            </Button>
          </StyledResultActions>

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

  // 테스트 진행 단계
  return (
    <StyledTetoEgneTest>
      <StyledProgressBar>
        <StyledProgressFill percentage={progressPercentage} />
        <StyledProgressText>
          <Typography variant="caption">
            {progress.currentQuestionIndex + 1} / {testData.questions.length}
          </Typography>
        </StyledProgressText>
      </StyledProgressBar>

      <StyledQuestionCard>
        <StyledCategoryBadge>
          <Zap size={16} />
          <Typography variant="caption" responsive>
            {categoryNames[currentQuestion?.category]}
          </Typography>
        </StyledCategoryBadge>

        <Typography variant="h4" align="center" responsive>
          Q{progress.currentQuestionIndex + 1}. {currentQuestion?.question}
        </Typography>

        <StyledOptionsGrid>
          {currentQuestion?.options.map(option => (
            <StyledOption
              key={option.id}
              selected={selectedOptionId === option.id}
              onClick={() => handleOptionSelect(option.id)}
            >
              {option.emoji && <StyledOptionEmoji>{option.emoji}</StyledOptionEmoji>}
              <Typography variant="body1" responsive>
                {option.text}
              </Typography>
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

        {/* 다음 버튼 (선택사항 - 자동 진행되므로 필요에 따라) */}
        {selectedOptionId && !isLastQuestion && (
          <Button variant="primary" onClick={goToNextQuestion}>
            다음
            <ChevronRight size={16} />
          </Button>
        )}
      </StyledNavigationButtons>
    </StyledTetoEgneTest>
  );
};

export default TetoEgneTest;
