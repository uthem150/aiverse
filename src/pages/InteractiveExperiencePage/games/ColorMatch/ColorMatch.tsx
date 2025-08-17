import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

const slideIn = keyframes`
  0% { transform: translateY(-20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const correctPulse = keyframes` 
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const wrongShake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
  20%, 40%, 60%, 80% { transform: translateX(8px); }
`;

const correctFlash = keyframes`
  0% { background: rgba(16, 185, 129, 0); }
  50% { background: rgba(16, 185, 129, 0.3); }
  100% { background: rgba(16, 185, 129, 0); }
`;

const wrongFlash = keyframes`
  0% { background: rgba(239, 68, 68, 0); }
  50% { background: rgba(239, 68, 68, 0.4); }
  100% { background: rgba(239, 68, 68, 0); }
`;

const scoreFloat = keyframes`
  0% { 
    transform: translateY(0) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(-80px) scale(1.2); 
    opacity: 0; 
  }
`;

const streakGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.6); }
`;

const resultAppear = keyframes`
  0% {
    transform: scale(0.5) translateY(50px);
    opacity: 0;
  }
  50% {
    transform: scale(1.05) translateY(-10px);
    opacity: 0.8;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`;

const tierGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
  }
`;

const GameContainer = styled.div<{ flashType?: 'correct' | 'wrong' | null }>`
  flex: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  position: relative;

  ${props =>
    props.flashType === 'correct' &&
    css`
      animation: ${correctFlash} 0.6s ease;
    `}
  ${props =>
    props.flashType === 'wrong' &&
    css`
      animation: ${wrongFlash} 0.6s ease;
    `}
`;

const Header = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const StatsPanel = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
    justify-content: center;
  }
`;

const Stat = styled.div<{ isGlowing?: boolean }>`
  text-align: center;
  color: white;
  transition: all 0.3s ease;

  ${props =>
    props.isGlowing &&
    css`
      animation: ${streakGlow} 1.5s ease-in-out infinite;
    `}

  .label {
    font-size: 0.8rem;
    opacity: 0.8;
    margin-bottom: 0.2rem;
  }

  .value {
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .label {
      font-size: 0.7rem;
    }
    .value {
      font-size: 1rem;
    }
  }
`;

const GameArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 3rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 2rem;
  }
`;

const WordDisplay = styled.div<{ textColor: string; isCorrect?: boolean; isWrong?: boolean }>`
  font-size: 4rem;
  font-weight: bold;
  color: ${props => props.textColor};
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  animation: ${slideIn} 0.3s ease-out;
  user-select: none;
  text-align: center;
  min-height: 80px;
  display: flex;
  align-items: center;
  position: relative;

  ${props =>
    props.isCorrect &&
    css`
      animation: ${correctPulse} 0.6s ease;
    `}
  ${props =>
    props.isWrong &&
    css`
      animation: ${wrongShake} 0.6s ease;
    `}

  @media (max-width: 768px) {
    font-size: 2.5rem;
    min-height: 60px;
  }
`;

const ScoreFloat = styled.div<{ show: boolean; score: number }>`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  font-weight: bold;
  color: #10b981;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  opacity: ${props => (props.show ? 1 : 0)};
  ${props =>
    props.show &&
    css`
      animation: ${scoreFloat} 1s ease-out;
    `}

  @media (max-width: 768px) {
    font-size: 1.5rem;
    top: -15px;
  }

  &::before {
    content: '+${props => props.score}';
  }
`;

const FeedbackText = styled.div<{ type: 'correct' | 'wrong'; show: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: bold;
  color: ${props => (props.type === 'correct' ? '#10b981' : '#ef4444')};
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.show ? 1 : 0)};
  ${props =>
    props.show &&
    css`
      animation: ${correctPulse} 0.6s ease;
    `}
  pointer-events: none;
  z-index: 10;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ColorButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 400px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 0.8rem;
    max-width: 300px;
  }
`;

const ColorButton = styled.button<{ color: string; isDisabled?: boolean }>`
  background: ${props => props.color};
  border: 3px solid white;
  border-radius: 12px;
  padding: 1.5rem;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: ${props => (props.isDisabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  opacity: ${props => (props.isDisabled ? 0.6 : 1)};

  &:hover {
    transform: ${props => (props.isDisabled ? 'none' : 'translateY(-2px)')};
    box-shadow: ${props =>
      props.isDisabled ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 6px 20px rgba(0, 0, 0, 0.4)'};
  }

  &:active {
    transform: ${props => (props.isDisabled ? 'none' : 'translateY(0)')};
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    font-size: 1rem;
  }
`;

const GameOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(15px);
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const OverlayContent = styled.div`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  backdrop-filter: blur(30px);
  border: 2px solid rgba(102, 126, 234, 0.4);
  border-radius: 20px; /* 더 작게 */
  padding: 1.2rem 1.5rem; /* PC 패딩 더 많이 줄임 */
  text-align: center;
  color: white;
  max-width: 550px; /* 최대 너비 줄임 */
  max-height: 90vh; /* 높이 여유 더 주기 */
  width: 90%;
  position: relative;
  overflow: hidden;
  animation: ${resultAppear} 0.8s ease-out;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(102, 126, 234, 0.2);

  &:before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 20px;
    z-index: -1;
    animation: ${tierGlow} 3s ease-in-out infinite;
  }

  .title {
    font-size: 1.6rem; /* PC 타이틀 더 작게 */
    font-weight: bold;
    margin-bottom: 0.6rem; /* 마진 더 줄임 */
    background: linear-gradient(45deg, #fff, #f1f5f9);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }

  .description {
    font-size: 0.85rem; /* PC 텍스트 더 작게 */
    line-height: 1.3; /* 라인 높이 더 줄임 */
    margin-bottom: 0.8rem; /* 마진 더 줄임 */
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    border-radius: 15px;
    max-height: 85vh;

    .title {
      font-size: 1.4rem;
      margin-bottom: 0.8rem;
    }
    .description {
      font-size: 0.9rem;
      line-height: 1.4;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem 0.8rem;
    width: 95%;
    max-height: 85vh;

    .title {
      font-size: 1.2rem;
      margin-bottom: 0.6rem;
    }
    .description {
      font-size: 0.85rem;
      line-height: 1.3;
      margin-bottom: 1rem;
    }
  }
`;

const ActionButton = styled.button`
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 6px; /* 더 작게 */
  padding: 0.6rem 1.2rem; /* PC 패딩 더 줄임 */
  color: white;
  font-size: 0.9rem; /* PC 폰트 더 작게 */
  font-weight: 600;
  cursor: pointer;
  margin: 0.3rem; /* 마진 더 줄임 */
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.3rem;
    font-size: 0.95rem;
    margin: 0.3rem;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    margin: 0.25rem;
    width: calc(50% - 0.5rem);
    display: inline-block;
  }
`;

const ProgressBar = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 250px;
    bottom: 1rem;
  }
`;

const ProgressFill = styled.div<{ progress: number }>`
  width: ${props => props.progress}%;
  height: 100%;
  background: linear-gradient(90deg, #10b981, #059669);
  transition: width 0.1s linear;
  border-radius: 3px;
`;

interface GameStats {
  score: number;
  correct: number;
  wrong: number;
  total: number;
  streak: number;
  bestStreak: number;
}

const COLORS = [
  { name: '빨강', value: '#ef4444', textKor: '빨강' },
  { name: '파랑', value: '#3b82f6', textKor: '파랑' },
  { name: '초록', value: '#10b981', textKor: '초록' },
  { name: '노랑', value: '#f59e0b', textKor: '노랑' },
];

const GAME_DURATION = 60; // 60초

const ColorMatch: React.FC = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<'waiting' | 'playing' | 'finished'>('waiting');
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [currentWord, setCurrentWord] = useState('');
  const [currentColor, setCurrentColor] = useState('');
  const [correctColor, setCorrectColor] = useState('');
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    correct: 0,
    wrong: 0,
    total: 0,
    streak: 0,
    bestStreak: 0,
  });
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [flashType, setFlashType] = useState<'correct' | 'wrong' | null>(null);
  const [showScore, setShowScore] = useState(false);
  const [lastScore, setLastScore] = useState(0);
  const [isAnswering, setIsAnswering] = useState(false);

  // 모바일 감지
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const generateQuestion = useCallback(() => {
    const wordColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    const textColor = COLORS[Math.floor(Math.random() * COLORS.length)];

    setCurrentWord(wordColor.textKor);
    setCurrentColor(textColor.value);
    setCorrectColor(textColor.value);
    setIsAnswering(false);
  }, []);

  const handleColorClick = useCallback(
    (selectedColor: string) => {
      if (gameState !== 'playing' || isAnswering) return;

      setIsAnswering(true);
      const isCorrect = selectedColor === correctColor;

      setStats(prev => {
        const newCorrect = isCorrect ? prev.correct + 1 : prev.correct;
        const newWrong = isCorrect ? prev.wrong : prev.wrong + 1;
        const newStreak = isCorrect ? prev.streak + 1 : 0;
        const newBestStreak = Math.max(prev.bestStreak, newStreak);

        // 점수 계산: 기본 10점 + 연속 보너스
        const streakBonus = isCorrect ? newStreak * 2 : 0;
        const earnedScore = isCorrect ? 10 + streakBonus : 0;
        const newScore = prev.score + earnedScore;

        setLastScore(earnedScore);
        return {
          score: newScore,
          correct: newCorrect,
          wrong: newWrong,
          total: prev.total + 1,
          streak: newStreak,
          bestStreak: newBestStreak,
        };
      });

      // 피드백 효과 표시
      setFeedback(isCorrect ? 'correct' : 'wrong');
      setFlashType(isCorrect ? 'correct' : 'wrong');

      if (isCorrect) {
        setShowScore(true);
        setTimeout(() => setShowScore(false), 1000);
      }

      setTimeout(() => {
        setFeedback(null);
        setFlashType(null);
        generateQuestion();
      }, 600);
    },
    [gameState, correctColor, generateQuestion, isAnswering]
  );

  const startGame = () => {
    setGameState('playing');
    setTimeLeft(GAME_DURATION);
    setStats({
      score: 0,
      correct: 0,
      wrong: 0,
      total: 0,
      streak: 0,
      bestStreak: 0,
    });
    setFeedback(null);
    setFlashType(null);
    setShowScore(false);
    setIsAnswering(false);
    generateQuestion();
  };

  const restartGame = () => {
    setGameState('waiting');
    setTimeLeft(GAME_DURATION);
    setFeedback(null);
    setFlashType(null);
    setShowScore(false);
    setIsAnswering(false);
  };

  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameState('finished');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState]);

  const handleBackClick = () => navigate(-1);
  const progress = ((GAME_DURATION - timeLeft) / GAME_DURATION) * 100;
  const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

  // 등급 계산
  const getGrade = (score: number, accuracy: number) => {
    if (score >= 800 && accuracy >= 90)
      return { grade: 'S', name: '마스터', emoji: '🏆', color: '#FFD700' };
    if (score >= 600 && accuracy >= 85)
      return { grade: 'A+', name: '고수', emoji: '🥇', color: '#C0C0C0' };
    if (score >= 450 && accuracy >= 80)
      return { grade: 'A', name: '숙련자', emoji: '🥈', color: '#CD7F32' };
    if (score >= 300 && accuracy >= 70)
      return { grade: 'B+', name: '중급자', emoji: '🥉', color: '#4CAF50' };
    if (score >= 200 && accuracy >= 60)
      return { grade: 'B', name: '초급자', emoji: '📈', color: '#2196F3' };
    if (score >= 100 && accuracy >= 50)
      return { grade: 'C+', name: '입문자', emoji: '📚', color: '#FF9800' };
    if (score >= 50) return { grade: 'C', name: '연습생', emoji: '💪', color: '#9C27B0' };
    return { grade: 'D', name: '새내기', emoji: '🌱', color: '#607D8B' };
  };

  const gradeInfo = getGrade(stats.score, accuracy);

  return (
    <GameContainer flashType={flashType}>
      <Header>
        <BackButton onClick={handleBackClick}>
          <ArrowLeft size={16} />
          게임 목록
        </BackButton>
        <Title>🎨 색깔 맞추기</Title>
        <StatsPanel>
          <Stat>
            <div className="label">점수</div>
            <div className="value">{stats.score}</div>
          </Stat>
          <Stat isGlowing={stats.streak >= 5}>
            <div className="label">연속</div>
            <div className="value">
              {stats.streak}
              {stats.streak >= 5 ? '🔥' : ''}
            </div>
          </Stat>
          <Stat>
            <div className="label">정확도</div>
            <div className="value">{accuracy}%</div>
          </Stat>
          <Stat>
            <div className="label">시간</div>
            <div className="value">{timeLeft}s</div>
          </Stat>
        </StatsPanel>
      </Header>

      {gameState === 'playing' && (
        <GameArea>
          <WordDisplay
            textColor={currentColor}
            isCorrect={feedback === 'correct'}
            isWrong={feedback === 'wrong'}
          >
            {currentWord}
            <ScoreFloat show={showScore} score={lastScore} />
          </WordDisplay>

          <ColorButtons>
            {COLORS.map(color => (
              <ColorButton
                key={color.name}
                color={color.value}
                isDisabled={isAnswering}
                onClick={() => handleColorClick(color.value)}
              >
                {color.textKor}
              </ColorButton>
            ))}
          </ColorButtons>

          <FeedbackText type={feedback || 'correct'} show={feedback !== null}>
            {feedback === 'correct' ? '정답! 🎉' : '틀렸어요! ❌'}
          </FeedbackText>
        </GameArea>
      )}

      {gameState === 'playing' && (
        <ProgressBar>
          <ProgressFill progress={progress} />
        </ProgressBar>
      )}

      <GameOverlay show={gameState === 'waiting'}>
        <OverlayContent>
          <div className="title">🎨 색깔 맞추기</div>
          <div className="description">
            화면에 표시되는 글자의 <strong>색깔</strong>을 맞춰주세요!
            <br />
            글자의 내용이 아닌 <strong>실제 색깔</strong>을 선택하세요.
            <br />
            연속으로 맞출수록 더 높은 점수를 얻습니다!
            <br />
            <br />
            <small>⚡ 스트룹 효과를 이용한 집중력 테스트</small>
          </div>
          <ActionButton onClick={startGame}>게임 시작</ActionButton>
          <ActionButton onClick={handleBackClick}>뒤로 가기</ActionButton>
        </OverlayContent>
      </GameOverlay>

      <GameOverlay show={gameState === 'finished'}>
        <OverlayContent>
          <div className="title">🏆 게임 완료!</div>
          <div className="description">
            {/* 등급 표시 */}
            <div
              style={{
                fontSize: isMobile ? '1.4rem' : '1.8rem' /* PC 크기 줄임 */,
                marginBottom: isMobile ? '0.5rem' : '0.6rem' /* 마진 줄임 */,
                color: gradeInfo.color,
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              {gradeInfo.emoji} {gradeInfo.grade}급
            </div>
            <div
              style={{
                fontSize: isMobile ? '0.9rem' : '1rem' /* PC 크기 줄임 */,
                marginBottom: isMobile ? '0.8rem' : '0.8rem' /* 마진 줄임 */,
                fontWeight: 'bold',
                color: gradeInfo.color,
              }}
            >
              {gradeInfo.name}
            </div>

            {/* 최종 점수 */}
            <div
              style={{
                fontSize: isMobile ? '0.9rem' : '1rem' /* PC 크기 줄임 */,
                color: '#4CAF50',
                marginBottom: isMobile ? '0.6rem' : '0.6rem' /* 마진 줄임 */,
              }}
            >
              <strong>최종 점수: {stats.score}점</strong>
            </div>

            {/* 세부 통계 */}
            <div
              style={{
                textAlign: 'left',
                marginBottom: isMobile ? '0.8rem' : '0.8rem' /* 마진 줄임 */,
                fontSize: isMobile ? '0.8rem' : '0.85rem' /* PC 크기 줄임 */,
              }}
            >
              <div style={{ marginBottom: '0.2rem' }}>
                {' '}
                {/* 마진 줄임 */}
                📊 <strong>상세 결과</strong>
              </div>
              <div>
                • 정답률: {accuracy}% ({stats.correct}/{stats.total})
              </div>
              <div>
                • 최고 연속: {stats.bestStreak}개 {stats.bestStreak >= 10 ? '🔥' : ''}
              </div>
              <div>• 총 문제: {stats.total}개</div>
              <div>• 성공: {stats.correct}개</div>
              <div>• 실패: {stats.wrong}개</div>
            </div>

            {/* 성능 분석 */}
            <div
              style={{
                textAlign: 'left',
                marginBottom: isMobile ? '0.8rem' : '0.8rem' /* 마진 줄임 */,
                fontSize: isMobile ? '0.8rem' : '0.85rem' /* PC 크기 줄임 */,
              }}
            >
              <div style={{ marginBottom: '0.2rem' }}>
                {' '}
                {/* 마진 줄임 */}⚡ <strong>성능 분석</strong>
              </div>
              <div>
                • 집중력:{' '}
                {accuracy >= 95
                  ? '완벽함 🎯'
                  : accuracy >= 85
                    ? '매우 좋음 🚀'
                    : accuracy >= 75
                      ? '좋음 👍'
                      : accuracy >= 65
                        ? '보통 😐'
                        : accuracy >= 50
                          ? '부족함 😅'
                          : '많은 연습 필요 💪'}
              </div>
              <div>
                • 지속력:{' '}
                {stats.bestStreak >= 15
                  ? '완벽한 집중력! 🏆'
                  : stats.bestStreak >= 10
                    ? '뛰어난 지속력! 🔥'
                    : stats.bestStreak >= 7
                      ? '좋은 집중력! ⭐'
                      : stats.bestStreak >= 5
                        ? '괜찮은 집중력 👌'
                        : stats.bestStreak >= 3
                          ? '기본적인 집중력 😊'
                          : '집중력 향상 필요 💪'}
              </div>
            </div>

            {/* 종합 평가 */}
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: isMobile ? '8px' : '10px' /* PC 패딩 줄임 */,
                borderRadius: isMobile ? '6px' : '8px' /* PC 라운드 줄임 */,
                marginBottom: isMobile ? '0.8rem' : '0.8rem' /* 마진 줄임 */,
                border: `2px solid ${gradeInfo.color}`,
                fontSize: isMobile ? '0.8rem' : '0.85rem' /* PC 크기 줄임 */,
              }}
            >
              <strong>🎯 종합 평가</strong>
              <br />
              {stats.score >= 800 && accuracy >= 90
                ? '🏆 완벽한 집중력의 소유자! 스트룹 효과를 완벽히 극복했습니다!'
                : stats.score >= 600 && accuracy >= 85
                  ? '🥇 뛰어난 집중력! 대부분의 상황에서 흔들리지 않는 정신력을 보여줍니다!'
                  : stats.score >= 450 && accuracy >= 80
                    ? '🥈 좋은 집중력! 꾸준한 연습으로 더 높은 수준에 도달할 수 있어요!'
                    : stats.score >= 300 && accuracy >= 70
                      ? '🥉 괜찮은 집중력! 인내심을 기르면 더 좋은 결과를 얻을 수 있습니다!'
                      : stats.score >= 200 && accuracy >= 60
                        ? '📈 기본적인 집중력! 차근차근 연습하면 실력이 늘 것입니다!'
                        : stats.score >= 100
                          ? '📚 입문 단계! 스트룹 효과에 익숙해지는 시간이 필요해요!'
                          : '🌱 이제 시작! 색깔과 글자를 구분하는 연습을 해보세요!'}
            </div>

            {/* 개선 팁 */}
            {(accuracy < 80 || stats.bestStreak < 8) && (
              <div
                style={{
                  backgroundColor: 'rgba(255, 243, 205, 0.2)',
                  padding: isMobile ? '8px' : '10px' /* PC 패딩 줄임 */,
                  borderRadius: isMobile ? '6px' : '8px' /* PC 라운드 줄임 */,
                  marginBottom: isMobile ? '0.8rem' : '0.8rem' /* 마진 줄임 */,
                  fontSize: isMobile ? '0.75rem' : '0.8rem' /* PC 크기 줄임 */,
                }}
              >
                <strong>💡 집중력 향상 팁</strong>
                <br />
                {accuracy < 60 && '• 글자가 아닌 색깔에만 집중하세요!'}
                <br />
                {stats.bestStreak < 5 && '• 차분하게 한 번에 하나씩 처리하세요!'}
                <br />
                {accuracy >= 60 && accuracy < 80 && '• 반사적으로 반응하지 말고 잠깐 생각해보세요!'}
                <br />
                • 눈을 반쯤 감고 색깔에만 집중해보세요!
                <br />• 규칙적인 명상이나 집중력 훈련이 도움됩니다!
              </div>
            )}
          </div>
          <ActionButton onClick={restartGame}>다시 하기</ActionButton>
          <ActionButton onClick={handleBackClick}>게임 목록</ActionButton>
        </OverlayContent>
      </GameOverlay>
    </GameContainer>
  );
};

export default ColorMatch;
