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
  DifficultySelector,
  DifficultyButton,
} from './TargetShooter.style';

// TargetCursor 추가
import TargetCursor from '@/components/reactBits/TargetCursor/TargetCursor';

interface TargetData {
  id: number;
  x: number;
  y: number;
  size: number;
  appearTime: number;
  lifetime: number; // 난이도별 타겟 생존시간
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
  totalShots: number;
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

// ▶ 게임시간 45초
const GAME_DURATION = 45;

// 난이도 프리셋
const DIFFICULTIES = {
  easy: {
    key: 'easy' as const,
    name: '쉬움',
    spawnMin: 1000,
    spawnMax: 1800,
    lifetime: 2200,
    sizeScale: 1.15,
  },
  medium: {
    key: 'medium' as const,
    name: '보통',
    spawnMin: 800,
    spawnMax: 1500,
    lifetime: 2000,
    sizeScale: 1.0,
  },
  hard: {
    key: 'hard' as const,
    name: '어려움',
    spawnMin: 600,
    spawnMax: 1200,
    lifetime: 1600,
    sizeScale: 0.9,
  },
};

// 화면 크기에 따른 타겟 사이즈 (난이도 스케일 반영)
const getTargetSizes = (scale = 1) => {
  const isMobile = window.innerWidth <= 768;
  const baseMin = isMobile ? 25 : 40;
  const baseMax = isMobile ? 50 : 80;
  return {
    MIN_TARGET_SIZE: Math.max(16, Math.round(baseMin * scale)),
    MAX_TARGET_SIZE: Math.max(24, Math.round(baseMax * scale)),
  };
};

const TargetShooter: React.FC = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<'waiting' | 'countdown' | 'playing' | 'finished'>(
    'waiting'
  );
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
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
  const targetTimersRef = useRef<Set<NodeJS.Timeout>>(new Set());

  // 최신 gameState를 ref로 추적
  const gameStateRef = useRef(gameState);
  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  const clearAllTargetTimers = useCallback(() => {
    targetTimersRef.current.forEach(timer => clearTimeout(timer));
    targetTimersRef.current.clear();
  }, []);

  // 티어 계산
  const calculateTier = (finalStats: GameStats): TierInfo => {
    const accuracyBonus = finalStats.accuracy * 10;
    const speedBonus = Math.max(0, (1000 - finalStats.averageReactionTime) / 10);
    const totalScore = finalStats.score + accuracyBonus + speedBonus;

    for (const tier of TIERS) {
      if (totalScore >= tier.minScore) return tier;
    }
    return TIERS[TIERS.length - 1];
  };

  // 타겟 생성
  const createTarget = useCallback(() => {
    if (!gameAreaRef.current || gameStateRef.current !== 'playing') return;

    const cfg = DIFFICULTIES[difficulty];
    const area = gameAreaRef.current.getBoundingClientRect();
    const { MIN_TARGET_SIZE, MAX_TARGET_SIZE } = getTargetSizes(cfg.sizeScale);
    const size = MIN_TARGET_SIZE + Math.random() * (MAX_TARGET_SIZE - MIN_TARGET_SIZE);
    const margin = size / 2;

    const newTarget: TargetData = {
      id: ++targetIdRef.current,
      x: margin + Math.random() * (area.width - size - margin * 2),
      y: margin + Math.random() * (area.height - size - margin * 2),
      size,
      appearTime: Date.now(),
      lifetime: cfg.lifetime,
    };

    setTargets(prev => [...prev, newTarget]);
    setStats(prev => ({ ...prev, totalTargets: prev.totalTargets + 1 }));

    const timer = setTimeout(() => {
      if (gameStateRef.current === 'playing') {
        setTargets(prev => {
          const exists = prev.find(t => t.id === newTarget.id);
          if (exists) {
            setStats(prevStats => ({ ...prevStats, misses: prevStats.misses + 1 }));
          }
          return prev.filter(t => t.id !== newTarget.id);
        });
      }
      targetTimersRef.current.delete(timer);
    }, cfg.lifetime);

    targetTimersRef.current.add(timer);
  }, [difficulty]);

  // 타겟 클릭
  const handleTargetClick = useCallback(
    (target: TargetData, event: React.MouseEvent) => {
      event.stopPropagation();

      const reactionTime = Date.now() - target.appearTime;
      reactionTimes.current.push(reactionTime);

      setTargets(prev => prev.filter(t => t.id !== target.id));

      const { MAX_TARGET_SIZE } = getTargetSizes(DIFFICULTIES[difficulty].sizeScale);
      const sizeBonus = Math.round((MAX_TARGET_SIZE - target.size) / 2);
      const speedBonus = Math.max(0, Math.round((target.lifetime - reactionTime) / 10));
      const baseScore = 100;
      const totalScore = baseScore + sizeBonus + speedBonus;

      const effectId = ++effectIdRef.current;
      setHitEffects(prev => [...prev, { id: effectId, x: target.x, y: target.y }]);
      setTimeout(() => {
        setHitEffects(prev => prev.filter(e => e.id !== effectId));
      }, 500);

      const scoreId = ++effectIdRef.current;
      setScoreFloats(prev => [
        ...prev,
        { id: scoreId, x: target.x, y: target.y, score: totalScore },
      ]);
      setTimeout(() => {
        setScoreFloats(prev => prev.filter(s => s.id !== scoreId));
      }, 1000);

      setStats(prev => {
        const newHits = prev.hits + 1;
        const newTotalShots = prev.totalShots + 1;
        const newScore = prev.score + totalScore;
        const avgReactionTime =
          reactionTimes.current.reduce((a, b) => a + b, 0) / reactionTimes.current.length;
        const accuracy = newTotalShots > 0 ? (newHits / newTotalShots) * 100 : 0;

        return {
          ...prev,
          score: newScore,
          hits: newHits,
          totalShots: newTotalShots,
          averageReactionTime: Math.round(avgReactionTime),
          accuracy: Math.round(accuracy * 10) / 10,
        };
      });
    },
    [difficulty]
  );

  // 빈 공간 클릭(미스)
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
    setTimeLeft(GAME_DURATION);

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

  // 타이머
  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameState('finished');
          clearAllTargetTimers();
          setTargets([]);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, clearAllTargetTimers]);

  // 타겟 생성 타이머 (난이도별 간격)
  useEffect(() => {
    if (gameState !== 'playing') return;

    const cfg = DIFFICULTIES[difficulty];
    const intervalMs = cfg.spawnMin + Math.random() * (cfg.spawnMax - cfg.spawnMin);
    const interval = setInterval(() => createTarget(), intervalMs);

    return () => clearInterval(interval);
  }, [gameState, difficulty, createTarget]);

  // 언마운트 시 정리
  useEffect(() => () => clearAllTargetTimers(), [clearAllTargetTimers]);

  const handleBackClick = () => {
    clearAllTargetTimers();
    navigate(-1);
  };

  const progress = ((GAME_DURATION - timeLeft) / GAME_DURATION) * 100;
  const currentTier = calculateTier(stats);

  return (
    <>
      <GameContainer>
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
          {targets.map(target => (
            <Target
              key={target.id}
              x={target.x}
              y={target.y}
              size={target.size}
              onClick={e => handleTargetClick(target, e)}
            />
          ))}

          {hitEffects.map(effect => (
            <HitEffect key={effect.id} x={effect.x} y={effect.y} />
          ))}

          {scoreFloats.map(scoreFloat => (
            <ScoreFloat
              key={scoreFloat.id}
              x={scoreFloat.x}
              y={scoreFloat.y}
              score={scoreFloat.score}
            />
          ))}
        </GameArea>

        <Countdown show={gameState === 'countdown'}>
          {countdown > 0 ? countdown : 'START!'}
        </Countdown>

        {gameState === 'playing' && (
          <ProgressBar>
            <ProgressFill progress={progress} />
          </ProgressBar>
        )}

        {/* 시작 오버레이 */}
        <GameOverlay show={gameState === 'waiting'}>
          <OverlayContent>
            <div className="overlay-title">🎯 타겟 슈팅</div>
            <div className="overlay-text">
              화면에 나타나는 타겟을 빠르고 정확하게 클릭하세요.
              <br />
              난이도에 따라 타겟 크기·생존시간·생성속도가 달라집니다.
              <br />
              타겟이 아닌 곳을 클릭하면 명중률이 떨어집니다.
              <br />
              <strong>게임 시간: 45초</strong>
            </div>

            <DifficultySelector>
              {([DIFFICULTIES.easy, DIFFICULTIES.medium, DIFFICULTIES.hard] as const).map(cfg => (
                <DifficultyButton
                  key={cfg.key}
                  selected={difficulty === cfg.key}
                  onClick={() => setDifficulty(cfg.key)}
                  aria-pressed={difficulty === cfg.key}
                >
                  {cfg.name}
                </DifficultyButton>
              ))}
            </DifficultySelector>

            <ActionButton onClick={startGame}>게임 시작</ActionButton>
            <ActionButton variant="secondary" onClick={handleBackClick}>
              뒤로 가기
            </ActionButton>
          </OverlayContent>
        </GameOverlay>

        {/* 종료 오버레이 */}
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
                ? '🏆 완벽한 실력! 진정한 타겟 마스터'
                : stats.accuracy >= 75 && stats.averageReactionTime <= 900
                  ? '🎉 훌륭한 성과! 상위권 실력자'
                  : stats.accuracy >= 60 && stats.averageReactionTime <= 1000
                    ? '👍 좋은 실력, 꾸준히 성장 중'
                    : stats.accuracy >= 40
                      ? '💪 조금만 더 연습하면 크게 향상'
                      : '🎯 차근차근 연습해보자'}
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
