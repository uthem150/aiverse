import { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import {
  StyledPersonalityTest,
  StyledProgressBar,
  StyledProgressText,
  StyledProgressFill,
  StyledQuestionCard,
  StyledOptionsGrid,
  StyledOption,
  StyledNavigationButtons,
  StyledResultDisplay,
  StyledResultHeader,
  StyledEmoji,
  StyledResultContent,
  StyledSection,
  StyledTraits,
  StyledTraitTag,
  StyledCompatibility,
  StyledCompatItem,
  StyledGamesGrid,
  StyledGameCard,
  StyledGameInfo,
  StyledGameName,
  StyledGamePlatform,
  StyledRecommendations,
  StyledRecommendationItem,
  StyledTagsGrid,
  StyledTag,
  StyledKpopGroups,
  StyledKpopTag,
  StyledCelebrities,
  StyledCelebTag,
  StyledResultActions,
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
    }, 100);
  };

  const calculateResult = (scores: Record<string, number>) => {
    // 가장 높은 점수의 결과 타입 찾기
    const sortedScores = Object.entries(scores).sort(([, a], [, b]) => b - a);

    const topResultType = sortedScores[0]?.[0];
    const topScore = sortedScores[0]?.[1] || 0;
    const totalPossibleScore = testData.questions.length * 3; // 최대 점수 (옵션당 최대 3점 가정)

    const finalResult = testData.results.find(r => r.id === topResultType);
    if (finalResult) {
      const resultWithPercentage: TestResult = {
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
          <StyledResultHeader>
            <StyledEmoji>{result.emoji}</StyledEmoji>
            <Typography variant="h2" align="center" color={result.color} responsive>
              {result.title}
            </Typography>
            <Typography variant="body1" align="center">
              {result.description}
            </Typography>
            {/* {result.percentage && (
              <Typography variant="h4" align="center" color={result.color}>
                매칭도: {result.percentage}%
              </Typography>
            )} */}
          </StyledResultHeader>

          <StyledResultContent>
            <StyledSection>
              <Typography variant="h5" responsive>
                📝 상세 분석
              </Typography>
              <Typography variant="body1" responsive>
                {result.detailedDescription}
              </Typography>
            </StyledSection>

            <StyledSection>
              <Typography variant="h5">✨ 주요 특징</Typography>
              <StyledTraits>
                {result.traits.map((trait, index) => (
                  <StyledTraitTag key={index}>{trait}</StyledTraitTag>
                ))}
              </StyledTraits>
            </StyledSection>

            {result.compatibility && (
              <StyledSection>
                <Typography variant="h5">💕 궁합</Typography>
                <StyledCompatibility>
                  {Array.isArray(result.compatibility.best) &&
                    result.compatibility.best.length > 0 && (
                      <StyledCompatItem>
                        <Typography variant="body2" color="#10B981">
                          최고 궁합:
                        </Typography>
                        <span>{result.compatibility.best.join(', ')}</span>
                      </StyledCompatItem>
                    )}
                  {Array.isArray(result.compatibility.good) &&
                    result.compatibility.good.length > 0 && (
                      <StyledCompatItem>
                        <Typography variant="body2" color="#F59E0B">
                          좋은 궁합:
                        </Typography>
                        <span>{result.compatibility.good.join(', ')}</span>
                      </StyledCompatItem>
                    )}
                  {Array.isArray(result.compatibility.avoid) &&
                    result.compatibility.avoid.length > 0 && (
                      <StyledCompatItem>
                        <Typography variant="body2" color="#EF4444">
                          피해야 할:
                        </Typography>
                        <span>{result.compatibility.avoid.join(', ')}</span>
                      </StyledCompatItem>
                    )}
                </StyledCompatibility>
              </StyledSection>
            )}

            {/* 게임 추천 섹션 */}
            {result.recommendations.games && result.recommendations.games.length > 0 && (
              <StyledSection>
                <Typography variant="h5">🎮 추천 게임</Typography>
                <StyledGamesGrid>
                  {result.recommendations.games.map((game, index) => (
                    <StyledGameCard
                      key={index}
                      href={game.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <StyledGameInfo>
                        <StyledGameName>{game.name}</StyledGameName>
                        <StyledGamePlatform>
                          {game.url.includes('steam')
                            ? 'Steam'
                            : game.url.includes('epic')
                              ? 'Epic Games'
                              : game.url.includes('nintendo')
                                ? 'Nintendo'
                                : '공식 사이트'}
                        </StyledGamePlatform>
                      </StyledGameInfo>
                    </StyledGameCard>
                  ))}
                </StyledGamesGrid>
              </StyledSection>
            )}

            {/* 추천사항 섹션 */}
            {((result.recommendations.activities && result.recommendations.activities.length > 0) ||
              (result.recommendations.tips && result.recommendations.tips.length > 0)) && (
              <StyledSection>
                <Typography variant="h5">🎯 추천사항</Typography>
                <StyledRecommendations>
                  {result.recommendations.activities &&
                    result.recommendations.activities.map((activity, index) => (
                      <StyledRecommendationItem key={`activity-${index}`}>
                        {activity}
                      </StyledRecommendationItem>
                    ))}
                  {result.recommendations.tips &&
                    result.recommendations.tips.map((tip, index) => (
                      <StyledRecommendationItem key={`tip-${index}`}>
                        {tip}
                      </StyledRecommendationItem>
                    ))}
                </StyledRecommendations>
              </StyledSection>
            )}

            {/* 해시태그 섹션 */}
            {result.recommendations.hashtags && result.recommendations.hashtags.length > 0 && (
              <StyledSection>
                <Typography variant="h5">#️⃣ 추천 해시태그</Typography>
                <StyledTagsGrid>
                  {result.recommendations.hashtags.map((tag, index) => (
                    <StyledTag key={index}>{tag}</StyledTag>
                  ))}
                </StyledTagsGrid>
              </StyledSection>
            )}

            {/* K-pop 그룹 섹션 */}
            {result.recommendations.kpopGroups && result.recommendations.kpopGroups.length > 0 && (
              <StyledSection>
                <Typography variant="h5">🎵 추천 K-pop 그룹</Typography>
                <StyledKpopGroups>
                  {result.recommendations.kpopGroups.map((group, index) => (
                    <StyledKpopTag key={index}>{group}</StyledKpopTag>
                  ))}
                </StyledKpopGroups>
              </StyledSection>
            )}

            {/* 연예인 섹션 */}
            {result.recommendations.celebrities &&
              result.recommendations.celebrities.length > 0 && (
                <StyledSection>
                  <Typography variant="h5">👑 닮은 연예인</Typography>
                  <StyledCelebrities>
                    {result.recommendations.celebrities.map((celeb, index) => (
                      <StyledCelebTag key={index}>{celeb}</StyledCelebTag>
                    ))}
                  </StyledCelebrities>
                </StyledSection>
              )}

            {/* OTT 콘텐츠 섹션 */}
            {result.recommendations.ottContent && result.recommendations.ottContent.length > 0 && (
              <StyledSection>
                <Typography variant="h5">📺 추천 콘텐츠</Typography>
                <StyledRecommendations>
                  {result.recommendations.ottContent.map((content, index) => (
                    <StyledRecommendationItem key={index}>{content}</StyledRecommendationItem>
                  ))}
                </StyledRecommendations>
              </StyledSection>
            )}

            {/* 영화 추천 섹션 */}
            {result.recommendations.movies && result.recommendations.movies.length > 0 && (
              <StyledSection>
                <Typography variant="h5">🎬 추천 영화</Typography>
                <StyledRecommendations>
                  {result.recommendations.movies.map((movie, index) => (
                    <StyledRecommendationItem key={index}>{movie}</StyledRecommendationItem>
                  ))}
                </StyledRecommendations>
              </StyledSection>
            )}

            {/* 여행지 추천 섹션 */}
            {result.recommendations.destinations &&
              result.recommendations.destinations.length > 0 && (
                <StyledSection>
                  <Typography variant="h5">✈️ 추천 여행지</Typography>
                  <StyledRecommendations>
                    {result.recommendations.destinations.map((destination, index) => (
                      <StyledRecommendationItem key={index}>{destination}</StyledRecommendationItem>
                    ))}
                  </StyledRecommendations>
                </StyledSection>
              )}

            {/* 게임 장르 섹션 */}
            {result.recommendations.gameGenres && result.recommendations.gameGenres.length > 0 && (
              <StyledSection>
                <Typography variant="h5">🎮 추천 게임 장르</Typography>
                <StyledTagsGrid>
                  {result.recommendations.gameGenres.map((genre, index) => (
                    <StyledTag key={index}>{genre}</StyledTag>
                  ))}
                </StyledTagsGrid>
              </StyledSection>
            )}

            {/* 소통 팁 섹션 */}
            {result.recommendations.communicationTips &&
              result.recommendations.communicationTips.length > 0 && (
                <StyledSection>
                  <Typography variant="h5">🗣️ 대화 스킬 UP 팁</Typography>
                  <StyledRecommendations>
                    {result.recommendations.communicationTips.map((tip, index) => (
                      <StyledRecommendationItem key={index}>{tip}</StyledRecommendationItem>
                    ))}
                  </StyledRecommendations>
                </StyledSection>
              )}

            {/* 갈등 해결 전략 섹션 */}
            {result.recommendations.conflictStrategies &&
              result.recommendations.conflictStrategies.length > 0 && (
                <StyledSection>
                  <Typography variant="h5">🤝 갈등 해결 전략</Typography>
                  <StyledRecommendations>
                    {result.recommendations.conflictStrategies.map((strategy, index) => (
                      <StyledRecommendationItem key={index}>{strategy}</StyledRecommendationItem>
                    ))}
                  </StyledRecommendations>
                </StyledSection>
              )}

            {/* 데이팅 팁 섹션 */}
            {result.recommendations.datingTips && result.recommendations.datingTips.length > 0 && (
              <StyledSection>
                <Typography variant="h5">❤️‍🔥 데이팅 팁</Typography>
                <StyledRecommendations>
                  {result.recommendations.datingTips.map((tip, index) => (
                    <StyledRecommendationItem key={index}>{tip}</StyledRecommendationItem>
                  ))}
                </StyledRecommendations>
              </StyledSection>
            )}

            {/* 의사결정 팁 섹션 */}
            {result.recommendations.decisionMakingTips &&
              result.recommendations.decisionMakingTips.length > 0 && (
                <StyledSection>
                  <Typography variant="h5">💡 현명한 결정 팁</Typography>
                  <StyledRecommendations>
                    {result.recommendations.decisionMakingTips.map((tip, index) => (
                      <StyledRecommendationItem key={index}>{tip}</StyledRecommendationItem>
                    ))}
                  </StyledRecommendations>
                </StyledSection>
              )}

            {/* 관계 발전 팁 섹션 */}
            {result.recommendations.relationshipTips &&
              result.recommendations.relationshipTips.length > 0 && (
                <StyledSection>
                  <Typography variant="h5">💞 관계 발전 팁</Typography>
                  <StyledRecommendations>
                    {result.recommendations.relationshipTips.map((tip, index) => (
                      <StyledRecommendationItem key={index}>{tip}</StyledRecommendationItem>
                    ))}
                  </StyledRecommendations>
                </StyledSection>
              )}

            {/* 선물 아이디어 섹션 */}
            {result.recommendations.giftIdeas && result.recommendations.giftIdeas.length > 0 && (
              <StyledSection>
                <Typography variant="h5">🎁 추천 선물 아이디어</Typography>
                <StyledRecommendations>
                  {result.recommendations.giftIdeas.map((idea, index) => (
                    <StyledRecommendationItem key={index}>{idea}</StyledRecommendationItem>
                  ))}
                </StyledRecommendations>
              </StyledSection>
            )}

            {/* 번아웃 극복 팁 섹션 */}
            {result.recommendations.burnoutTips &&
              result.recommendations.burnoutTips.length > 0 && (
                <StyledSection>
                  <Typography variant="h5">🔥 번아웃 극복 팁</Typography>
                  <StyledRecommendations>
                    {result.recommendations.burnoutTips.map((tip, index) => (
                      <StyledRecommendationItem key={index}>{tip}</StyledRecommendationItem>
                    ))}
                  </StyledRecommendations>
                </StyledSection>
              )}

            {/* 소비 팁 섹션 */}
            {result.recommendations.spendingTips &&
              result.recommendations.spendingTips.length > 0 && (
                <StyledSection>
                  <Typography variant="h5">💰 현명한 소비 팁</Typography>
                  <StyledRecommendations>
                    {result.recommendations.spendingTips.map((tip, index) => (
                      <StyledRecommendationItem key={index}>{tip}</StyledRecommendationItem>
                    ))}
                  </StyledRecommendations>
                </StyledSection>
              )}

            {/* 갓생 팁 섹션 */}
            {result.recommendations.godsaengTips &&
              result.recommendations.godsaengTips.length > 0 && (
                <StyledSection>
                  <Typography variant="h5">👑 갓생 위한 팁</Typography>
                  <StyledRecommendations>
                    {result.recommendations.godsaengTips.map((tip, index) => (
                      <StyledRecommendationItem key={index}>{tip}</StyledRecommendationItem>
                    ))}
                  </StyledRecommendations>
                </StyledSection>
              )}

            {/* MBTI 활용 팁 섹션 */}
            {result.recommendations.mbtiTips && result.recommendations.mbtiTips.length > 0 && (
              <StyledSection>
                <Typography variant="h5">🧐 MBTI 활용 팁</Typography>
                <StyledRecommendations>
                  {result.recommendations.mbtiTips.map((tip, index) => (
                    <StyledRecommendationItem key={index}>{tip}</StyledRecommendationItem>
                  ))}
                </StyledRecommendations>
              </StyledSection>
            )}

            {/* 여행 팁 섹션 */}
            {result.recommendations.travelTips && result.recommendations.travelTips.length > 0 && (
              <StyledSection>
                <Typography variant="h5">🗺️ 여행 꿀팁</Typography>
                <StyledRecommendations>
                  {result.recommendations.travelTips.map((tip, index) => (
                    <StyledRecommendationItem key={index}>{tip}</StyledRecommendationItem>
                  ))}
                </StyledRecommendations>
              </StyledSection>
            )}
          </StyledResultContent>

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
        <StyledProgressText>
          <Typography variant="caption">
            {progress.currentQuestionIndex + 1} / {testData.questions.length}
          </Typography>
        </StyledProgressText>
      </StyledProgressBar>

      {/* Debug Info (개발 환경에서만 표시) */}
      {/* {showDebugInfo && (
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
      )} */}

      {/* Question Card */}
      <StyledQuestionCard>
        <Typography responsive variant="h4" align="center">
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
              <Typography responsive variant="body1">
                {option.text}
              </Typography>
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
