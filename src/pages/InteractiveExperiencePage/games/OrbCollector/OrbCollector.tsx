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
  Orb,
  CollectEffect,
  ComboDisplay,
  GameOverlay,
  OverlayContent,
  ActionButton,
  Countdown,
  ProgressBar,
  ProgressFill,
  CollectionRadius,
  BackButton,
} from './OrbCollector.style';

interface OrbData {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  value: number;
  collecting?: boolean;
}

interface CollectEffectData {
  id: number;
  x: number;
  y: number;
}

interface GameStats {
  score: number;
  collected: number;
  missed: number;
  combo: number;
  maxCombo: number;
  totalOrbs: number;
}

const GAME_DURATION = 90; // 90초
const ORB_COLORS = [
  '#8b5cf6', // purple
  '#ec4899', // pink
  '#06b6d4', // cyan
  '#10b981', // emerald
  '#f59e0b', // amber
  '#ef4444', // red
];
const COLLECTION_RADIUS = 75;

const OrbCollector: React.FC = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<'waiting' | 'countdown' | 'playing' | 'finished'>(
    'waiting'
  );
  const [countdown, setCountdown] = useState(3);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [orbs, setOrbs] = useState<OrbData[]>([]);
  const [collectEffects, setCollectEffects] = useState<CollectEffectData[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showCombo, setShowCombo] = useState(false);
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    collected: 0,
    missed: 0,
    combo: 0,
    maxCombo: 0,
    totalOrbs: 0,
  });

  const gameAreaRef = useRef<HTMLDivElement>(null);
  const orbIdRef = useRef(0);
  const effectIdRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastComboTime = useRef(Date.now());

  // 오브 생성
  const createOrb = useCallback(() => {
    if (!gameAreaRef.current || gameState !== 'playing') return;

    const area = gameAreaRef.current.getBoundingClientRect();
    const size = 30 + Math.random() * 40; // 30-70px
    const margin = size / 2;

    // 화면 경계에서 생성
    const edge = Math.floor(Math.random() * 4);
    let x, y, vx, vy;

    switch (edge) {
      case 0: // 상단
        x = Math.random() * area.width;
        y = -margin;
        vx = (Math.random() - 0.5) * 2;
        vy = 0.5 + Math.random() * 1.5;
        break;
      case 1: // 우측
        x = area.width + margin;
        y = Math.random() * area.height;
        vx = -(0.5 + Math.random() * 1.5);
        vy = (Math.random() - 0.5) * 2;
        break;
      case 2: // 하단
        x = Math.random() * area.width;
        y = area.height + margin;
        vx = (Math.random() - 0.5) * 2;
        vy = -(0.5 + Math.random() * 1.5);
        break;
      default: // 좌측
        x = -margin;
        y = Math.random() * area.height;
        vx = 0.5 + Math.random() * 1.5;
        vy = (Math.random() - 0.5) * 2;
        break;
    }

    const color = ORB_COLORS[Math.floor(Math.random() * ORB_COLORS.length)];
    const value = Math.round((80 - size) / 2) + 10; // 작을수록 높은 점수

    const newOrb: OrbData = {
      id: ++orbIdRef.current,
      x,
      y,
      size,
      color,
      vx,
      vy,
      value,
    };

    setOrbs(prev => [...prev, newOrb]);
    setStats(prev => ({ ...prev, totalOrbs: prev.totalOrbs + 1 }));
  }, [gameState]);

  // 오브 수집 확인
  const checkCollection = useCallback(
    (mouseX: number, mouseY: number) => {
      if (!gameAreaRef.current) return;

      const area = gameAreaRef.current.getBoundingClientRect();
      const relativeX = mouseX - area.left;
      const relativeY = mouseY - area.top;

      setOrbs(prev => {
        const collected: OrbData[] = [];
        const remaining = prev.filter(orb => {
          const distance = Math.sqrt(
            Math.pow(orb.x + orb.size / 2 - relativeX, 2) +
              Math.pow(orb.y + orb.size / 2 - relativeY, 2)
          );

          if (distance <= COLLECTION_RADIUS && !orb.collecting) {
            collected.push({ ...orb, collecting: true });
            return false;
          }
          return true;
        });

        // 수집된 오브들 처리
        if (collected.length > 0) {
          const totalScore = collected.reduce((sum, orb) => sum + orb.value, 0);
          const comboBonus = Math.floor(totalScore * (stats.combo * 0.1));
          const finalScore = totalScore + comboBonus;

          // 수집 효과 생성
          collected.forEach(orb => {
            const effectId = ++effectIdRef.current;
            setCollectEffects(prev => [
              ...prev,
              {
                id: effectId,
                x: orb.x + orb.size / 2,
                y: orb.y + orb.size / 2,
              },
            ]);
            setTimeout(() => {
              setCollectEffects(prev => prev.filter(e => e.id !== effectId));
            }, 500);
          });

          // 통계 업데이트
          setStats(prev => {
            const newCombo = prev.combo + collected.length;
            const newMaxCombo = Math.max(prev.maxCombo, newCombo);

            return {
              ...prev,
              score: prev.score + finalScore,
              collected: prev.collected + collected.length,
              combo: newCombo,
              maxCombo: newMaxCombo,
            };
          });

          // 콤보 표시
          if (collected.length > 1 || stats.combo > 0) {
            setShowCombo(true);
            lastComboTime.current = Date.now();
            setTimeout(() => setShowCombo(false), 1000);
          }
        }

        return remaining;
      });
    },
    [stats.combo]
  );

  // 마우스 움직임 처리
  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      const newMousePos = { x: event.clientX, y: event.clientY };
      setMousePos(newMousePos);

      if (gameState === 'playing') {
        checkCollection(event.clientX, event.clientY);
      }
    },
    [gameState, checkCollection]
  );

  // 오브 애니메이션 및 경계 체크
  const updateOrbs = useCallback(() => {
    if (!gameAreaRef.current || gameState !== 'playing') return;

    const area = gameAreaRef.current.getBoundingClientRect();

    setOrbs(prev => {
      const updated = prev
        .map(orb => {
          const newX = orb.x + orb.vx;
          const newY = orb.y + orb.vy;

          return { ...orb, x: newX, y: newY };
        })
        .filter(orb => {
          // 화면을 완전히 벗어난 오브 제거
          const margin = orb.size;
          const outOfBounds =
            orb.x < -margin ||
            orb.x > area.width + margin ||
            orb.y < -margin ||
            orb.y > area.height + margin;

          if (outOfBounds && !orb.collecting) {
            setStats(prev => ({ ...prev, missed: prev.missed + 1, combo: 0 }));
            return false;
          }

          return true;
        });

      return updated;
    });

    // 콤보 타이머 체크
    if (Date.now() - lastComboTime.current > 2000 && stats.combo > 0) {
      setStats(prev => ({ ...prev, combo: 0 }));
    }
  }, [gameState, stats.combo]);

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
    setOrbs([]);
    setCollectEffects([]);
    setShowCombo(false);
    setStats({
      score: 0,
      collected: 0,
      missed: 0,
      combo: 0,
      maxCombo: 0,
      totalOrbs: 0,
    });
    orbIdRef.current = 0;
    effectIdRef.current = 0;
    lastComboTime.current = Date.now();
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

  // 오브 생성 타이머
  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(
      () => {
        createOrb();
      },
      1000 - Math.min(timeLeft * 5, 500)
    ); // 시간이 지날수록 빨라짐

    return () => clearInterval(interval);
  }, [gameState, timeLeft, createOrb]);

  // 애니메이션 루프
  useEffect(() => {
    if (gameState !== 'playing') return;

    const animate = () => {
      updateOrbs();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameState, updateOrbs]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const progress = ((GAME_DURATION - timeLeft) / GAME_DURATION) * 100;
  const efficiency =
    stats.totalOrbs > 0 ? Math.round((stats.collected / stats.totalOrbs) * 100) : 0;

  return (
    <>
      <GameContainer onMouseMove={handleMouseMove}>
        <Header>
          <BackButton onClick={handleBackClick}>
            <ArrowLeft size={16} />
            게임 목록
          </BackButton>
          <Title>🔮 오브 컬렉터</Title>
          <StatsPanel>
            <Stat>
              <div className="stat-label">점수</div>
              <div className="stat-value">{stats.score}</div>
            </Stat>
            <Stat>
              <div className="stat-label">콤보</div>
              <div className="stat-value">{stats.combo}x</div>
            </Stat>
            <Stat>
              <div className="stat-label">효율성</div>
              <div className="stat-value">{efficiency}%</div>
            </Stat>
            <Stat>
              <div className="stat-label">시간</div>
              <div className="stat-value">{timeLeft}s</div>
            </Stat>
          </StatsPanel>
        </Header>

        <GameArea ref={gameAreaRef}>
          {/* 수집 반경 표시 */}
          {gameState === 'playing' && gameAreaRef.current && (
            <CollectionRadius
              x={mousePos.x - gameAreaRef.current.getBoundingClientRect().left}
              y={mousePos.y - gameAreaRef.current.getBoundingClientRect().top}
              show={true}
            />
          )}

          {/* 오브들 */}
          {orbs.map(orb => (
            <Orb
              key={orb.id}
              x={orb.x}
              y={orb.y}
              size={orb.size}
              color={orb.color}
              collecting={orb.collecting}
            />
          ))}

          {/* 수집 효과들 */}
          {collectEffects.map(effect => (
            <CollectEffect key={effect.id} x={effect.x} y={effect.y} />
          ))}
        </GameArea>

        {/* 콤보 표시 */}
        <ComboDisplay show={showCombo} combo={stats.combo} />

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
            <div className="overlay-title">🔮 오브 컬렉터</div>
            <div className="overlay-text">
              마우스를 움직여 떠다니는 마법의 오브들을 수집하세요!
              <br />
              작은 오브일수록 높은 점수를 주며, 연속으로 수집하면 콤보 보너스가 적용됩니다.
              <br />
              90초 동안 최대한 많은 오브를 수집해보세요!
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
              수집 효율: {efficiency}% ({stats.collected}/{stats.totalOrbs})<br />
              최고 콤보: {stats.maxCombo}x<br />
              <br />
              {efficiency >= 80
                ? '🎉 환상적입니다!'
                : efficiency >= 60
                  ? '👍 훌륭한 컨트롤이네요!'
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

export default OrbCollector;
