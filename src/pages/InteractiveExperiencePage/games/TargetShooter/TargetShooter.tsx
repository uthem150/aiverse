import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {
  GameContainer,
  Header,
  Title,
  StatsPanel,
  Stat,
  GameArea,
  Target,
  HitEffect,
  ScoreFloat,
  GameOverlay,
  OverlayContent,
  ActionButton,
  Countdown,
  ProgressBar,
  ProgressFill,
  BackButton,
  TierBadge,
  ScoreBreakdown,
  ScoreItem,
  StatGrid,
  StatCard,
  PerformanceMessage,
} from './TargetShooter.style';

// TargetCursor 추가
import TargetCursor from '@/components/reactBits/TargetCursor/TargetCursor';

interface TargetData {
  id: number;
  x: number;
  y: number;
  size: number;
  appearTime: number;
}

interface HitEffectData {
  id: number;
  x: number;
  y: number;
}

interface ScoreFloatData {
  id: number;
  x: number;
  y: number;
  score: number;
}

interface GameStats {
  score: number;
  hits: number;
  misses: number;
  totalShots: number; // 전체 클릭 수 (명중 + 실패)
  totalTargets: number;
  averageReactionTime: number;
  accuracy: number;
}

// 티어 정의
interface TierInfo {
  name: string;
  emoji: string;
  color: string;
  minScore: number;
}

const TIERS: TierInfo[] = [
  { name: '챌린저', emoji: '👑', color: '#FF6B6B', minScore: 8000 },
  { name: '그랜드마스터', emoji: '💎', color: '#4ECDC4', minScore: 6500 },
  { name: '마스터', emoji: '🏆', color: '#45B7D1', minScore: 5000 },
  { name: '다이아몬드', emoji: '💠', color: '#96CEB4', minScore: 3500 },
  { name: '플래티넘', emoji: '⭐', color: '#FFEAA7', minScore: 2500 },
  { name: '골드', emoji: '🥇', color: '#FDCB6E', minScore: 1500 },
  { name: '실버', emoji: '🥈', color: '#A29BFE', minScore: 800 },
  { name: '브론즈', emoji: '🥉', color: '#E17055', minScore: 0 },
];

const GAME_DURATION = 60; // 60초
const TARGET_LIFETIME = 2000; // 2초

// 화면 크기에 따른 타겟 사이즈 조정
const getTargetSizes = () => {
  const isMobile = window.innerWidth <= 768;
  return {
    MIN_TARGET_SIZE: isMobile ? 25 : 40,
    MAX_TARGET_SIZE: isMobile ? 50 : 80,
  };
};

const TargetShooter: React.FC = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<'waiting' | 'countdown' | 'playing' | 'finished'>(
    'waiting'
  );
  const [countdown, setCountdown] = useState(3);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [targets, setTargets] = useState<TargetData[]>([]);
  const [hitEffects, setHitEffects] = useState<HitEffectData[]>([]);
  const [scoreFloats, setScoreFloats] = useState<ScoreFloatData[]>([]);
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    hits: 0,
    misses: 0,
    totalShots: 0,
    totalTargets: 0,
    averageReactionTime: 0,
    accuracy: 0,
  });

  const gameAreaRef = useRef<HTMLDivElement>(null);
  const targetIdRef = useRef(0);
  const effectIdRef = useRef(0);
  const reactionTimes = useRef<number[]>([]);
  // 타이머 ID들을 관리하기 위한 ref 추가
  const targetTimersRef = useRef<Set<NodeJS.Timeout>>(new Set());
  const gameStateRef = useRef(gameState);

  // gameState를 ref로도 추적
  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  // 모든 타겟 타이머 정리 함수
  const clearAllTargetTimers = useCallback(() => {
    targetTimersRef.current.forEach(timer => clearTimeout(timer));
    targetTimersRef.current.clear();
  }, []);

  // 티어 계산 함수
  const calculateTier = (finalStats: GameStats): TierInfo => {
    // 종합 점수 계산 (점수 + 명중률 보너스 + 반응속도 보너스)
    const accuracyBonus = finalStats.accuracy * 10; // 명중률 1%당 10점
    const speedBonus = Math.max(0, (1000 - finalStats.averageReactionTime) / 10); // 반응속도 보너스
    const totalScore = finalStats.score + accuracyBonus + speedBonus;

    for (const tier of TIERS) {
      if (totalScore >= tier.minScore) {
        return tier;
      }
    }
    return TIERS[TIERS.length - 1]; // 브론즈
  };

  // 타겟 생성
  const createTarget = useCallback(() => {
    if (!gameAreaRef.current || gameStateRef.current !== 'playing') return;

    const area = gameAreaRef.current.getBoundingClientRect();
    const { MIN_TARGET_SIZE, MAX_TARGET_SIZE } = getTargetSizes();
    const size = MIN_TARGET_SIZE + Math.random() * (MAX_TARGET_SIZE - MIN_TARGET_SIZE);
    const margin = size / 2;

    const newTarget: TargetData = {
      id: ++targetIdRef.current,
      x: margin + Math.random() * (area.width - size - margin * 2),
      y: margin + Math.random() * (area.height - size - margin * 2),
      size,
      appearTime: Date.now(),
    };

    setTargets(prev => [...prev, newTarget]);
    setStats(prev => ({ ...prev, totalTargets: prev.totalTargets + 1 }));

    // 타이머 생성 및 관리
    const timer = setTimeout(() => {
      // 게임이 여전히 진행 중인지 확인
      if (gameStateRef.current === 'playing') {
        setTargets(prev => {
          const exists = prev.find(t => t.id === newTarget.id);
          if (exists) {
            // 타겟이 아직 존재한다면 놓친 것으로 처리
            setStats(prevStats => ({ ...prevStats, misses: prevStats.misses + 1 }));
          }
          return prev.filter(t => t.id !== newTarget.id);
        });
      }
      // 타이머 제거
      targetTimersRef.current.delete(timer);
    }, TARGET_LIFETIME);

    // 🔥 타이머 추가
    targetTimersRef.current.add(timer);
  }, []);

  // 타겟 클릭 처리
  const handleTargetClick = useCallback((target: TargetData, event: React.MouseEvent) => {
    event.stopPropagation();

    const reactionTime = Date.now() - target.appearTime;
    reactionTimes.current.push(reactionTime);

    // 타겟 제거
    setTargets(prev => prev.filter(t => t.id !== target.id));

    // 점수 계산 (크기가 작을수록, 반응시간이 빠를수록 높은 점수)
    const { MAX_TARGET_SIZE } = getTargetSizes();
    const sizeBonus = Math.round((MAX_TARGET_SIZE - target.size) / 2);
    const speedBonus = Math.max(0, Math.round((TARGET_LIFETIME - reactionTime) / 10));
    const baseScore = 100;
    const totalScore = baseScore + sizeBonus + speedBonus;

    // 히트 이펙트 생성
    const effectId = ++effectIdRef.current;
    setHitEffects(prev => [...prev, { id: effectId, x: target.x, y: target.y }]);
    setTimeout(() => {
      setHitEffects(prev => prev.filter(e => e.id !== effectId));
    }, 500);

    // 스코어 플로트 생성
    const scoreId = ++effectIdRef.current;
    setScoreFloats(prev => [...prev, { id: scoreId, x: target.x, y: target.y, score: totalScore }]);
    setTimeout(() => {
      setScoreFloats(prev => prev.filter(s => s.id !== scoreId));
    }, 1000);

    // 통계 업데이트
    setStats(prev => {
      const newHits = prev.hits + 1;
      const newTotalShots = prev.totalShots + 1;
      const newScore = prev.score + totalScore;
      const avgReactionTime =
        reactionTimes.current.reduce((a, b) => a + b, 0) / reactionTimes.current.length;
      // 정확한 명중률 계산: 전체 클릭 중 성공한 비율
      const accuracy = newTotalShots > 0 ? (newHits / newTotalShots) * 100 : 0;

      return {
        ...prev,
        score: newScore,
        hits: newHits,
        totalShots: newTotalShots,
        averageReactionTime: Math.round(avgReactionTime),
        accuracy: Math.round(accuracy * 10) / 10, // 소수점 1자리
      };
    });
  }, []);

  // 빈 공간 클릭 처리 (미스)
  const handleMissClick = useCallback(() => {
    if (gameState !== 'playing') return;

    setStats(prev => {
      const newTotalShots = prev.totalShots + 1;
      const accuracy = newTotalShots > 0 ? (prev.hits / newTotalShots) * 100 : 0;

      return {
        ...prev,
        totalShots: newTotalShots,
        accuracy: Math.round(accuracy * 10) / 10,
      };
    });
  }, [gameState]);

  // 게임 시작
  const startGame = () => {
    setGameState('countdown');
    setCountdown(3);

    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          setGameState('playing');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 게임 재시작
  const restartGame = () => {
    // 🔥 모든 타이머 정리
    clearAllTargetTimers();

    setGameState('waiting');
    setTimeLeft(GAME_DURATION);
    setTargets([]);
    setHitEffects([]);
    setScoreFloats([]);
    setStats({
      score: 0,
      hits: 0,
      misses: 0,
      totalShots: 0,
      totalTargets: 0,
      averageReactionTime: 0,
      accuracy: 0,
    });
    targetIdRef.current = 0;
    effectIdRef.current = 0;
    reactionTimes.current = [];
  };

  // 게임 타이머
  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameState('finished');
          // 게임 종료 시 모든 타겟 타이머 정리
          clearAllTargetTimers();
          // 남은 타겟들은 놓친 것으로 처리하지 않음 (이미 게임 종료)
          setTargets([]);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, clearAllTargetTimers]);

  // 타겟 생성 타이머
  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(
      () => {
        createTarget();
      },
      800 + Math.random() * 1200
    ); // 0.8~2초 간격

    return () => clearInterval(interval);
  }, [gameState, createTarget]);

  // 컴포넌트 언마운트 시 모든 타이머 정리
  useEffect(() => {
    return () => {
      clearAllTargetTimers();
    };
  }, [clearAllTargetTimers]);

  const handleBackClick = () => {
    //  페이지 이동 시에도 타이머 정리
    clearAllTargetTimers();
    navigate(-1);
  };

  const progress = ((GAME_DURATION - timeLeft) / GAME_DURATION) * 100;
  const currentTier = calculateTier(stats);

  return (
    <>
      <GameContainer>
        {/* 타겟 커서 효과 - 게임 플레이 중일 때만 */}
        {gameState === 'playing' && <TargetCursor />}

        <Header>
          <BackButton onClick={handleBackClick}>
            <ArrowLeft size={16} />
            게임 목록
          </BackButton>
          <Title>🎯 타겟 슈팅</Title>
          <StatsPanel>
            <Stat>
              <div className="stat-label">점수</div>
              <div className="stat-value">{stats.score}</div>
            </Stat>
            <Stat>
              <div className="stat-label">명중률</div>
              <div className="stat-value">{stats.accuracy}%</div>
            </Stat>
            <Stat>
              <div className="stat-label">시간</div>
              <div className="stat-value">{timeLeft}s</div>
            </Stat>
            <Stat>
              <div className="stat-label">반응속도</div>
              <div className="stat-value">{stats.averageReactionTime}ms</div>
            </Stat>
          </StatsPanel>
        </Header>

        <GameArea ref={gameAreaRef} onClick={handleMissClick}>
          {/* 타겟들 */}
          {targets.map(target => (
            <Target
              key={target.id}
              x={target.x}
              y={target.y}
              size={target.size}
              onClick={e => handleTargetClick(target, e)}
            />
          ))}

          {/* 히트 이펙트들 */}
          {hitEffects.map(effect => (
            <HitEffect key={effect.id} x={effect.x} y={effect.y} />
          ))}

          {/* 스코어 플로트들 */}
          {scoreFloats.map(scoreFloat => (
            <ScoreFloat
              key={scoreFloat.id}
              x={scoreFloat.x}
              y={scoreFloat.y}
              score={scoreFloat.score}
            />
          ))}
        </GameArea>

        {/* 카운트다운 */}
        <Countdown show={gameState === 'countdown'}>
          {countdown > 0 ? countdown : 'START!'}
        </Countdown>

        {/* 진행률 바 */}
        {gameState === 'playing' && (
          <ProgressBar>
            <ProgressFill progress={progress} />
          </ProgressBar>
        )}

        {/* 게임 시작 오버레이 */}
        <GameOverlay show={gameState === 'waiting'}>
          <OverlayContent>
            <div className="overlay-title">🎯 타겟 슈팅</div>
            <div className="overlay-text">
              화면에 나타나는 타겟들을 최대한 빠르고 정확하게 클릭하세요!
              <br />
              작은 타겟일수록, 빠른 반응일수록 높은 점수를 얻습니다.
              <br />
              타겟이 아닌 부분을 클릭하면 명중률이 감소합니다.
              <br />
              60초 동안 최고 점수에 도전해보세요!
            </div>
            <ActionButton onClick={startGame}>게임 시작</ActionButton>
            <ActionButton onClick={handleBackClick}>뒤로 가기</ActionButton>
          </OverlayContent>
        </GameOverlay>

        {/* 게임 종료 오버레이 */}
        <GameOverlay show={gameState === 'finished'}>
          <OverlayContent>
            <div className="overlay-title">🏆 게임 완료!</div>

            <TierBadge color={currentTier.color}>
              {currentTier.emoji} {currentTier.name}
            </TierBadge>

            <ScoreBreakdown>
              <ScoreItem delay={1}>
                <span className="score-label">🎯 기본 점수</span>
                <span className="score-value">{stats.score}점</span>
              </ScoreItem>
              <ScoreItem delay={2}>
                <span className="score-label">🎖️ 명중률 보너스</span>
                <span className="score-value">+{Math.round(stats.accuracy * 10)}점</span>
              </ScoreItem>
              <ScoreItem delay={3}>
                <span className="score-label">⚡ 반응속도 보너스</span>
                <span className="score-value">
                  +{Math.max(0, Math.round((1000 - stats.averageReactionTime) / 10))}점
                </span>
              </ScoreItem>
              <ScoreItem delay={4}>
                <span className="score-label">💎 총 점수</span>
                <span className="score-value" style={{ color: currentTier.color }}>
                  {Math.round(
                    stats.score +
                      stats.accuracy * 10 +
                      Math.max(0, (1000 - stats.averageReactionTime) / 10)
                  )}
                  점
                </span>
              </ScoreItem>
            </ScoreBreakdown>

            <StatGrid>
              <StatCard delay={5}>
                <div className="stat-title">명중률</div>
                <div className="stat-number">{stats.accuracy}%</div>
              </StatCard>
              <StatCard delay={6}>
                <div className="stat-title">평균 반응속도</div>
                <div className="stat-number">{stats.averageReactionTime}ms</div>
              </StatCard>
              <StatCard delay={7}>
                <div className="stat-title">명중 횟수</div>
                <div className="stat-number">
                  {stats.hits}/{stats.totalShots}
                </div>
              </StatCard>
              <StatCard delay={8}>
                <div className="stat-title">놓친 타겟</div>
                <div className="stat-number">{stats.misses}개</div>
              </StatCard>
            </StatGrid>

            <PerformanceMessage delay={9}>
              {stats.accuracy >= 90 && stats.averageReactionTime <= 850
                ? '🏆 완벽한 실력입니다! 진정한 타겟 마스터!'
                : stats.accuracy >= 75 && stats.averageReactionTime <= 900
                  ? '🎉 훌륭한 성과입니다! 상위권 실력자!'
                  : stats.accuracy >= 60 && stats.averageReactionTime <= 1000
                    ? '👍 좋은 실력이네요! 꾸준히 발전하고 있어요!'
                    : stats.accuracy >= 40
                      ? '💪 조금 더 연습하면 크게 향상될 거예요!'
                      : '🎯 차근차근 연습해서 실력을 키워보세요!'}
            </PerformanceMessage>

            <div style={{ marginTop: '2rem' }}>
              <ActionButton onClick={restartGame}>🔄 다시 도전</ActionButton>
              <ActionButton variant="secondary" onClick={handleBackClick}>
                📋 게임 목록
              </ActionButton>
            </div>
          </OverlayContent>
        </GameOverlay>
      </GameContainer>
    </>
  );
};

export default TargetShooter;
