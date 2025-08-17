// OrbCollector.tsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

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

const GAME_DURATION = 45;
const ORB_COLORS = ['#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
const COLLECTION_RADIUS = 75;

/* ===================== Animations ===================== */
const orbFloat = keyframes`
  0%, 100% { transform: translateY(0px) scale(1); opacity: 0.8; }
  50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
`;

const orbCollect = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.8; }
  100% { transform: scale(0); opacity: 0; }
`;

const comboGlow = keyframes`
  0%, 100% { text-shadow: 0 0 10px rgba(139, 92, 246, 0.5); }
  50% { text-shadow: 0 0 20px rgba(139, 92, 246, 1); }
`;

/* ===================== Styled Components ===================== */
const GameContainer = styled.div`
  flex: 1; /* ← 퍼센트 아님 */
  background: linear-gradient(
    135deg,
    #1e1b4b 0%,
    #312e81 25%,
    #1e1b4b 50%,
    #312e81 75%,
    #1e1b4b 100%
  );
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  user-select: none;
  cursor: crosshair;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(30, 27, 75, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 2px solid rgba(139, 92, 246, 0.3);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

const BackButton = styled.button`
  background: rgba(139, 92, 246, 0.1);
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 12px;
  padding: 0.8rem 1.2rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(139, 92, 246, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, #8b5cf6, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

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
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Stat = styled.div`
  text-align: center;
  color: white;

  .stat-label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.2rem;
  }
  .stat-value {
    font-size: 1.2rem;
    font-weight: 700;
    color: #8b5cf6;
  }

  @media (max-width: 768px) {
    .stat-label {
      font-size: 0.7rem;
    }
    .stat-value {
      font-size: 1rem;
    }
  }
`;

const GameArea = styled.div`
  flex: 1;
  position: relative;
  margin-top: 120px;
  padding: 2rem;
  overflow: hidden;

  /* 모바일 제스처 비활성화 */
  touch-action: none;
  overscroll-behavior: contain;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 140px;
  }
`;

const Orb = styled.div<{ x: number; y: number; size: number; color: string; collecting?: boolean }>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  background: radial-gradient(
    circle at 30% 30%,
    ${p => p.color}ff,
    ${p => p.color}cc,
    ${p => p.color}88
  );
  border-radius: 50%;
  animation: ${p => (p.collecting ? orbCollect : orbFloat)} ${p => (p.collecting ? '0.3s' : '3s')}
    ease-in-out ${p => (p.collecting ? 'forwards' : 'infinite')};
  box-shadow: 0 0 20px ${p => p.color}88;
  border: 2px solid ${p => p.color}cc;
  z-index: 10;
  pointer-events: none;

  &:before {
    content: '';
    position: absolute;
    top: 15%;
    left: 25%;
    width: 25%;
    height: 25%;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    filter: blur(2px);
  }
`;

const CollectEffect = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%);
  border-radius: 50%;
  animation: ${orbCollect} 0.5s ease-out forwards;
  pointer-events: none;
  z-index: 20;
`;

const ComboDisplay = styled.div<{ show: boolean; combo: number }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${p => Math.min(4 + p.combo * 0.2, 8)}rem;
  font-weight: 700;
  color: #8b5cf6;
  animation: ${comboGlow} 0.5s ease-in-out;
  z-index: 500;
  opacity: ${p => (p.show ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;

  &:before {
    content: ${p => `"COMBO x${p.combo}"`};
  }

  @media (max-width: 768px) {
    font-size: ${p => Math.min(2 + p.combo * 0.1, 4)}rem;
  }
`;

const GameOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: ${p => (p.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const OverlayContent = styled.div`
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1));
  backdrop-filter: blur(20px);
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  max-width: 500px;
  width: 90%;

  .overlay-title {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
  }
  .overlay-text {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    .overlay-title {
      font-size: 1.6rem;
    }
    .overlay-text {
      font-size: 1rem;
    }
  }
`;

const ActionButton = styled.button`
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
  }
  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    margin: 0.3rem;
  }
`;

const Countdown = styled.div<{ show: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: 700;
  color: #8b5cf6;
  text-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
  z-index: 500;
  opacity: ${p => (p.show ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const ProgressBar = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  z-index: 100;

  @media (max-width: 768px) {
    width: 250px;
    bottom: 1rem;
  }
`;

const ProgressFill = styled.div<{ progress: number }>`
  width: ${p => p.progress}%;
  height: 100%;
  background: linear-gradient(90deg, #8b5cf6, #a855f7);
  transition: width 0.1s linear;
  border-radius: 4px;
`;

const CollectionRadius = styled.div<{ x: number; y: number; show: boolean }>`
  position: absolute;
  left: ${p => p.x - 75}px;
  top: ${p => p.y - 75}px;
  width: 150px;
  height: 150px;
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 50%;
  pointer-events: none;
  z-index: 5;
  opacity: ${p => (p.show ? 0.5 : 0)};
  transition: opacity 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background: #8b5cf6;
    border-radius: 50%;
  }
`;

/* ===================== Component ===================== */
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

  /* ---------- Orb 생성 ---------- */
  const createOrb = useCallback(() => {
    if (!gameAreaRef.current || gameState !== 'playing') return;

    const area = gameAreaRef.current.getBoundingClientRect();
    const size = 30 + Math.random() * 40; // 30–70px
    const margin = size / 2;

    // 화면 경계에서 생성
    const edge = Math.floor(Math.random() * 4);
    let x: number, y: number, vx: number, vy: number;

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

    const newOrb: OrbData = { id: ++orbIdRef.current, x, y, size, color, vx, vy, value };

    setOrbs(prev => [...prev, newOrb]);
    setStats(prev => ({ ...prev, totalOrbs: prev.totalOrbs + 1 }));
  }, [gameState]);

  /* ---------- 수집 판정 ---------- */
  const checkCollection = useCallback(
    (mouseX: number, mouseY: number) => {
      if (!gameAreaRef.current) return;

      const area = gameAreaRef.current.getBoundingClientRect();
      const relativeX = mouseX - area.left;
      const relativeY = mouseY - area.top;

      setOrbs(prev => {
        const collected: OrbData[] = [];
        const remaining = prev.filter(orb => {
          const dx = orb.x + orb.size / 2 - relativeX;
          const dy = orb.y + orb.size / 2 - relativeY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance <= COLLECTION_RADIUS && !orb.collecting) {
            collected.push({ ...orb, collecting: true });
            return false;
          }
          return true;
        });

        if (collected.length > 0) {
          const totalScore = collected.reduce((sum, orb) => sum + orb.value, 0);
          const comboBonus = Math.floor(totalScore * (stats.combo * 0.1));
          const finalScore = totalScore + comboBonus;

          // 수집 이펙트
          collected.forEach(orb => {
            const effectId = ++effectIdRef.current;
            setCollectEffects(prev => [
              ...prev,
              { id: effectId, x: orb.x + orb.size / 2, y: orb.y + orb.size / 2 },
            ]);
            setTimeout(() => setCollectEffects(prev => prev.filter(e => e.id !== effectId)), 500);
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

  /* ---------- 포인터 이벤트 핸들러 ---------- */
  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      const { clientX, clientY } = e;
      if (e.pointerType === 'touch') e.preventDefault?.();
      setMousePos({ x: clientX, y: clientY });

      if (gameState === 'playing') checkCollection(clientX, clientY);
    },
    [gameState, checkCollection]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      handlePointerMove(e);
    },
    [handlePointerMove]
  );

  const handlePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  }, []);

  /* ---------- 오브 위치 업데이트 ---------- */
  const updateOrbs = useCallback(() => {
    if (!gameAreaRef.current || gameState !== 'playing') return;

    const area = gameAreaRef.current.getBoundingClientRect();

    setOrbs(prev => {
      const updated = prev
        .map(orb => ({ ...orb, x: orb.x + orb.vx, y: orb.y + orb.vy }))
        .filter(orb => {
          const margin = orb.size;
          const out =
            orb.x < -margin ||
            orb.x > area.width + margin ||
            orb.y < -margin ||
            orb.y > area.height + margin;

          if (out && !orb.collecting) {
            setStats(p => ({ ...p, missed: p.missed + 1, combo: 0 }));
            return false;
          }
          return true;
        });

      return updated;
    });

    // 콤보 타임아웃
    if (Date.now() - lastComboTime.current > 2000 && stats.combo > 0) {
      setStats(prev => ({ ...prev, combo: 0 }));
    }
  }, [gameState, stats.combo]);

  /* ---------- 게임 시작/재시작 ---------- */
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

  const restartGame = () => {
    setGameState('waiting');
    setTimeLeft(GAME_DURATION);
    setOrbs([]);
    setCollectEffects([]);
    setShowCombo(false);
    setStats({ score: 0, collected: 0, missed: 0, combo: 0, maxCombo: 0, totalOrbs: 0 });
    orbIdRef.current = 0;
    effectIdRef.current = 0;
    lastComboTime.current = Date.now();
  };

  const handleBackClick = () => navigate(-1);

  /* ---------- 타이머 ---------- */
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

  /* ---------- 스폰 간격(시간 경과에 따라 가속) ---------- */
  useEffect(() => {
    if (gameState !== 'playing') return;

    const elapsed = GAME_DURATION - timeLeft;
    // 1000ms → 최소 300ms까지 가속
    const spawnInterval = Math.max(300, 1000 - Math.min(elapsed * 15, 700));

    const interval = setInterval(() => {
      createOrb();
    }, spawnInterval);
    return () => clearInterval(interval);
  }, [gameState, timeLeft, createOrb]);

  /* ---------- 애니메이션 루프 ---------- */
  useEffect(() => {
    if (gameState !== 'playing') return;

    const animate = () => {
      updateOrbs();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [gameState, updateOrbs]);

  /* ---------- 파생 값 ---------- */
  const progress = ((GAME_DURATION - timeLeft) / GAME_DURATION) * 100;
  const efficiency =
    stats.totalOrbs > 0 ? Math.round((stats.collected / stats.totalOrbs) * 100) : 0;

  return (
    <GameContainer>
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

      <GameArea
        ref={gameAreaRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
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
      <Countdown show={gameState === 'countdown'}>{countdown > 0 ? countdown : 'START!'}</Countdown>

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
            {GAME_DURATION}초 동안 최대한 많은 오브를 수집해보세요!
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
  );
};

export default OrbCollector;
