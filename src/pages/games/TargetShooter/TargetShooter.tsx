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
  totalTargets: number;
  averageReactionTime: number;
  accuracy: number;
}

const GAME_DURATION = 60; // 60초
const TARGET_LIFETIME = 2000; // 2초
const MIN_TARGET_SIZE = 40;
const MAX_TARGET_SIZE = 80;

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
    totalTargets: 0,
    averageReactionTime: 0,
    accuracy: 0,
  });

  const gameAreaRef = useRef<HTMLDivElement>(null);
  const targetIdRef = useRef(0);
  const effectIdRef = useRef(0);
  const reactionTimes = useRef<number[]>([]);

  // 타겟 생성
  const createTarget = useCallback(() => {
    if (!gameAreaRef.current || gameState !== 'playing') return;

    const area = gameAreaRef.current.getBoundingClientRect();
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

    // 일정 시간 후 타겟 제거 (놓친 것으로 처리)
    setTimeout(() => {
      setTargets(prev => prev.filter(t => t.id !== newTarget.id));
      setStats(prev => ({ ...prev, misses: prev.misses + 1 }));
    }, TARGET_LIFETIME);
  }, [gameState]);

  // 타겟 클릭 처리
  const handleTargetClick = useCallback((target: TargetData, event: React.MouseEvent) => {
    event.stopPropagation();

    const reactionTime = Date.now() - target.appearTime;
    reactionTimes.current.push(reactionTime);

    // 타겟 제거
    setTargets(prev => prev.filter(t => t.id !== target.id));

    // 점수 계산 (크기가 작을수록, 반응시간이 빠를수록 높은 점수)
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
      const newScore = prev.score + totalScore;
      const avgReactionTime =
        reactionTimes.current.reduce((a, b) => a + b, 0) / reactionTimes.current.length;
      const accuracy = (newHits / (newHits + prev.misses)) * 100 || 0;

      return {
        ...prev,
        score: newScore,
        hits: newHits,
        averageReactionTime: Math.round(avgReactionTime),
        accuracy: Math.round(accuracy),
      };
    });
  }, []);

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
    setGameState('waiting');
    setTimeLeft(GAME_DURATION);
    setTargets([]);
    setHitEffects([]);
    setScoreFloats([]);
    setStats({
      score: 0,
      hits: 0,
      misses: 0,
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
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState]);

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

  const handleBackClick = () => {
    navigate('/interactive/games');
  };

  const progress = ((GAME_DURATION - timeLeft) / GAME_DURATION) * 100;

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

        <GameArea ref={gameAreaRef}>
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
            <div className="overlay-text">
              <strong>최종 점수: {stats.score}점</strong>
              <br />
              명중률: {stats.accuracy}% ({stats.hits}/{stats.totalTargets})<br />
              평균 반응속도: {stats.averageReactionTime}ms
              <br />
              <br />
              {stats.accuracy >= 80
                ? '🎉 훌륭합니다!'
                : stats.accuracy >= 60
                  ? '👍 좋은 실력이네요!'
                  : '💪 더 연습해보세요!'}
            </div>
            <ActionButton onClick={restartGame}>다시 하기</ActionButton>
            <ActionButton onClick={handleBackClick}>게임 목록</ActionButton>
          </OverlayContent>
        </GameOverlay>
      </GameContainer>
    </>
  );
};

export default TargetShooter;
