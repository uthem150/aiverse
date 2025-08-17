import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, RefreshCcw, Volume2, ChevronDown, ChevronUp } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

/* ===================== */
/*        Animations     */
/* ===================== */
const buttonPress = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
`;

const buttonGlow = keyframes`
  0% { filter: brightness(1); box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
  50% { filter: brightness(1.6); box-shadow: 0 0 40px rgba(255, 255, 255, 0.8); }
  100% { filter: brightness(1); box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
`;

const levelUp = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const resultAppear = keyframes`
  0% { transform: scale(0.5) translateY(50px); opacity: 0; }
  50% { transform: scale(1.05) translateY(-10px); opacity: 0.8; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
`;

const tierGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.25); }
  50% { box-shadow: 0 0 30px rgba(255, 255, 255, 0.5); }
`;

const statsReveal = keyframes`
  0% { transform: translateX(-30px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const buttonHover = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`;

/* ===================== */
/*          UI           */
/* ===================== */
const GameContainer = styled.div`
  height: 100%;
  flex: 1;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  user-select: none;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 2px solid rgba(147, 51, 234, 0.3);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
    gap: 0.5rem;
  }
`;

const BackButton = styled.button`
  background: rgba(147, 51, 234, 0.1);
  border: 2px solid rgba(147, 51, 234, 0.3);
  border-radius: 12px;
  padding: 0.8rem 1.2rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition:
      width 0.6s,
      height 0.6s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(147, 51, 234, 0.4);
    animation: ${buttonHover} 0.6s ease-in-out;
    &:before {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
    border-radius: 8px;
    gap: 0.3rem;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(45deg, #9333ea, #7c3aed);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-shadow: 0 0 20px rgba(147, 51, 234, 0.5);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media (max-width: 480px) {
    font-size: 1.1rem;
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
  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

const Stat = styled.div<{ highlight?: boolean }>`
  text-align: center;
  color: white;

  ${p =>
    p.highlight &&
    css`
      animation: ${levelUp} 0.5s ease;
    `}

  .label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.2rem;
  }
  .value {
    font-size: 1.2rem;
    font-weight: 700;
    color: #9333ea;
    text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
  }

  @media (max-width: 768px) {
    .label {
      font-size: 0.7rem;
    }
    .value {
      font-size: 1rem;
    }
  }
  @media (max-width: 480px) {
    .label {
      font-size: 0.65rem;
    }
    .value {
      font-size: 0.9rem;
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
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
  }
  @media (max-width: 480px) {
    padding: 0.75rem;
    gap: 1.2rem;
  }
`;

const BoardWrapper = styled.div`
  position: relative;
`;

const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  border-radius: 28px;
  border: 2px solid rgba(147, 51, 234, 0.25);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);

  @media (max-width: 768px) {
    gap: 16px;
    padding: 16px;
  }
  @media (max-width: 480px) {
    gap: 12px;
    padding: 12px;
  }
`;

const ColorButton = styled.button<{ color: string; isActive: boolean; isDisabled: boolean }>`
  width: 120px;
  height: 120px;
  border: none;
  border-radius: 20px;
  background: ${p => p.color};
  cursor: ${p => (p.isDisabled ? 'not-allowed' : 'pointer')};
  transition: all 0.25s ease;
  opacity: ${p => (p.isDisabled ? 0.6 : 1)};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);

  ${p =>
    p.isActive &&
    css`
      animation: ${buttonGlow} 0.5s ease;
      filter: brightness(1.6);
      box-shadow: 0 0 40px rgba(255, 255, 255, 0.85);
    `}

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
  }
  &:active:not(:disabled) {
    animation: ${buttonPress} 0.1s ease;
  }

  @media (max-width: 768px) {
    width: 92px;
    height: 92px;
    border-radius: 16px;
  }
  @media (max-width: 480px) {
    width: 74px;
    height: 74px;
    border-radius: 12px;
  }
`;

const CenterDisplay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.85));
  color: white;
  padding: 1rem;
  border-radius: 16px;
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  font-size: 0.9rem;
  border: 2px solid rgba(147, 51, 234, 0.3);

  @media (max-width: 768px) {
    width: 72px;
    height: 72px;
    font-size: 0.75rem;
  }
  @media (max-width: 480px) {
    width: 64px;
    height: 64px;
    font-size: 0.7rem;
    padding: 0.5rem;
  }
`;

/* ======= Buttons ======= */
const ControlPanel = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const ControlButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background: ${p =>
    p.variant === 'primary'
      ? 'linear-gradient(135deg, #10b981, #059669)'
      : 'rgba(255, 255, 255, 0.12)'};
  border: ${p => (p.variant === 'primary' ? 'none' : '2px solid rgba(255, 255, 255, 0.3)')};
  border-radius: 12px;
  padding: 0.9rem 1.4rem;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.35);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.1rem;
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    padding: 0.6rem 0.9rem;
    font-size: 0.85rem;
  }
`;

const GameOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(15px);
  display: ${p => (p.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const OverlayContent = styled.div`
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(124, 58, 237, 0.1));
  backdrop-filter: blur(30px);
  border: 2px solid rgba(147, 51, 234, 0.4);
  border-radius: 24px;
  padding: 2rem 1.6rem;
  text-align: center;
  max-width: 720px;
  width: 100%;

  /* 핵심: 결과창이 화면을 넘지 않도록 뷰포트 기준으로 제한 */
  max-height: 90svh;
  overflow: hidden;

  position: relative;
  animation: ${resultAppear} 0.8s ease-out;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(147, 51, 234, 0.2);

  &:before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 24px;
    z-index: -1;
    animation: ${tierGlow} 3s ease-in-out infinite;
  }

  .overlay-title {
    font-size: clamp(1.2rem, 2.5vw, 2.2rem);
    font-weight: 800;
    background: linear-gradient(45deg, #fff, #f1f5f9);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.8rem;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }

  .overlay-text {
    font-size: clamp(0.9rem, 2.2vw, 1.05rem);
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1.2rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 1.2rem 1rem;
    border-radius: 20px;
  }
  @media (max-width: 480px) {
    padding: 1rem 0.8rem;
    border-radius: 16px;
  }
`;

const TierBadge = styled.div<{ color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${p => p.color}20, ${p => p.color}40);
  border: 2px solid ${p => p.color};
  border-radius: 14px;
  padding: 0.6rem 1rem;
  margin-bottom: 0.8rem;
  font-size: clamp(1.05rem, 2.5vw, 1.6rem);
  font-weight: 800;
  color: ${p => p.color};
  text-shadow: 0 0 20px ${p => p.color}80;
`;

const ResultScrollArea = styled.div`
  /* 모바일에서만 내부 스크롤 허용(기본은 접힘 상태라 스크롤 안 보임) */
  max-height: 56svh;
  overflow-y: auto;
  padding-right: 4px; /* 스크롤바 여백 */
  margin: 0 auto;

  /* 데스크톱은 여유 공간 */
  @media (min-width: 481px) {
    max-height: 62svh;
  }
`;

const ScoreBreakdown = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.9rem;
  margin: 0.8rem 0;
  backdrop-filter: blur(10px);
`;

const ScoreItem = styled.div<{ delay?: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  animation: ${statsReveal} 0.6s ease-out ${p => (p.delay || 0) * 0.08}s both;

  &:last-child {
    border-bottom: none;
    font-size: 1.05rem;
    font-weight: 800;
    margin-top: 0.4rem;
    padding-top: 0.7rem;
    border-top: 2px solid rgba(147, 51, 234, 0.25);
  }
  .score-label {
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.92rem;
  }
  .score-value {
    color: #9333ea;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
  }
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.7rem;
  margin: 0.8rem 0;
`;

const StatCard = styled.div<{ delay?: number }>`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 0.7rem;
  text-align: center;
  animation: ${statsReveal} 0.6s ease-out ${p => (p.delay || 0) * 0.08}s both;

  .stat-title {
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.65);
    margin-bottom: 0.3rem;
  }
  .stat-number {
    font-size: 1.08rem;
    font-weight: 800;
    color: #9333ea;
    text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
  }
`;

const PerformanceMessage = styled.div<{ delay?: number }>`
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.08), rgba(124, 58, 237, 0.08));
  border: 1px solid rgba(147, 51, 234, 0.3);
  border-radius: 10px;
  padding: 0.7rem 0.9rem;
  margin: 0.7rem 0;
  color: #a855f7;
  font-weight: 700;
  animation: ${statsReveal} 0.6s ease-out ${p => (p.delay || 0) * 0.08}s both;
  text-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
  font-size: 0.95rem;
`;

const ActionRow = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0.6rem;
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background: ${p =>
    p.variant === 'secondary'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'linear-gradient(135deg, #9333ea, #7c3aed)'};
  border: ${p => (p.variant === 'secondary' ? '2px solid rgba(255, 255, 255, 0.3)' : 'none')};
  border-radius: 12px;
  padding: 0.7rem 1.1rem;
  color: white;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition:
      width 0.6s,
      height 0.6s;
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(147, 51, 234, 0.4);
    animation: ${buttonHover} 0.6s ease-in-out;
    &:before {
      width: 260px;
      height: 260px;
    }
  }
  &:active {
    transform: translateY(-1px);
  }
`;

/* ===================== */
/*        Game Core      */
/* ===================== */
type GameState = 'waiting' | 'showing' | 'inputting' | 'correct' | 'wrong' | 'finished';
type Color = 'red' | 'green' | 'blue' | 'yellow';

const COLORS: Record<Color, string> = {
  red: '#ef4444',
  green: '#10b981',
  blue: '#3b82f6',
  yellow: '#f59e0b',
};

const FREQUENCIES: Record<Color, number> = {
  red: 220,
  green: 277,
  blue: 330,
  yellow: 415,
};

interface GameStats {
  level: number; // 현재 레벨(1부터)
  score: number; // 최종 점수
  bestLevel: number; // 최고 레벨(로컬 저장)
  totalInputs: number; // 맞춘 버튼 수
  maxStreak: number; // 최대 연속 정답
  accuracy: number; // 정확도(%)
  elapsed: number; // 경과 시간(초)
}

interface TierInfo {
  name: string;
  emoji: string;
  color: string;
  minScore: number;
}

const TIERS: TierInfo[] = [
  { name: '레전드', emoji: '👑', color: '#FFD700', minScore: 12000 },
  { name: '마스터', emoji: '💎', color: '#00CED1', minScore: 10000 },
  { name: '다이아', emoji: '💠', color: '#4169E1', minScore: 8500 },
  { name: '플래티넘', emoji: '⭐', color: '#C0C0C0', minScore: 7200 },
  { name: '골드', emoji: '🥇', color: '#FFD700', minScore: 6000 },
  { name: '실버', emoji: '🥈', color: '#C0C0C0', minScore: 4800 },
  { name: '브론즈', emoji: '🥉', color: '#CD7F32', minScore: 3200 },
  { name: '비기너', emoji: '🎯', color: '#808080', minScore: 0 },
];

/* ===================== */
/*       Component       */
/* ===================== */
const SimonSays: React.FC = () => {
  const navigate = useNavigate();

  const [gameState, setGameState] = useState<GameState>('waiting');
  const [sequence, setSequence] = useState<Color[]>([]);
  const [playerSequence, setPlayerSequence] = useState<Color[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [activeButton, setActiveButton] = useState<Color | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showDetails, setShowDetails] = useState(true); // 데스크톱 기본 펼침, 모바일 기본 접힘

  const [stats, setStats] = useState<GameStats>({
    level: 1,
    score: 0,
    bestLevel: parseInt(localStorage.getItem('simon-best-level') || '1', 10),
    totalInputs: 0,
    maxStreak: 0,
    accuracy: 100,
    elapsed: 0,
  });

  const audioContextRef = useRef<AudioContext | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const currentStreakRef = useRef<number>(0);
  const totalAttemptsRef = useRef<number>(0);

  // 모바일 기본 접힘
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShowDetails(window.innerWidth > 480);
    }
  }, []);

  /* ---------- Sound ---------- */
  const playSound = useCallback(
    (frequency: number, duration: number = 450) => {
      if (!soundEnabled) return;
      try {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext ||
            (window as any).webkitAudioContext)();
        }
        if (audioContextRef.current.state === 'suspended') audioContextRef.current.resume();

        const ctx = audioContextRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(frequency, ctx.currentTime);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.28, ctx.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration / 1000);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + duration / 1000);
      } catch (e) {
        console.warn('오디오 재생 실패:', e);
      }
    },
    [soundEnabled]
  );

  /* ---------- Helpers ---------- */
  const generateNewColor = useCallback((): Color => {
    const colors: Color[] = ['red', 'green', 'blue', 'yellow'];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  /** 핵심: 재생할 시퀀스를 인자로 받아 클로저 이슈 제거 */
  const showSequence = useCallback(
    async (seq: Color[]) => {
      setGameState('showing');
      setPlayerSequence([]);

      for (let i = 0; i < seq.length; i++) {
        await new Promise<void>(resolve => {
          timeoutRef.current = setTimeout(() => {
            const color = seq[i];
            setActiveButton(color);
            playSound(FREQUENCIES[color], 400);
            if (navigator.vibrate) navigator.vibrate(60);

            timeoutRef.current = setTimeout(() => {
              setActiveButton(null);
              resolve();
            }, 520);
          }, 180);
        });
      }
      setGameState('inputting');
    },
    [playSound]
  );

  const startNewLevel = useCallback(() => {
    const newSequence = [...sequence, generateNewColor()];
    setSequence(newSequence);
    setCurrentStep(0);

    setTimeout(() => {
      showSequence(newSequence);
    }, 900);
  }, [sequence, generateNewColor, showSequence]);

  const finalizeGame = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const elapsedSec = Math.round((Date.now() - startTimeRef.current) / 1000);
    const attempts = totalAttemptsRef.current === 0 ? 1 : totalAttemptsRef.current;
    const accuracy = Math.max(0, Math.min(100, Math.round((stats.totalInputs / attempts) * 100)));

    // 패널티 제거한 점수 모델
    const baseScore = stats.totalInputs * 50; // 버튼 정답 기반
    const levelBonus = Math.max(0, stats.level - 1) * 250; // 레벨 클리어 보너스
    const streakBonus = stats.maxStreak * 40; // 최대 연속 보너스
    const speedBonus = Math.max(
      0,
      Math.round((Math.max(0, stats.totalInputs * 1.1) - elapsedSec) * 18)
    );

    const finalScore = Math.max(0, baseScore + levelBonus + streakBonus + speedBonus);

    setStats(prev => ({ ...prev, score: finalScore, elapsed: elapsedSec, accuracy }));
    setGameState('finished');

    if (stats.level > stats.bestLevel) {
      const newBest = stats.level;
      localStorage.setItem('simon-best-level', newBest.toString());
      setStats(prev => ({ ...prev, bestLevel: newBest }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats.level, stats.bestLevel, stats.totalInputs, stats.maxStreak]);

  /** 입력 처리 */
  const handleColorClick = useCallback(
    (color: Color) => {
      if (gameState !== 'inputting') return;

      playSound(FREQUENCIES[color], 280);
      setActiveButton(color);
      setTimeout(() => setActiveButton(null), 180);

      const newPlayerSeq = [...playerSequence, color];
      setPlayerSequence(newPlayerSeq);

      totalAttemptsRef.current += 1;

      if (color === sequence[currentStep]) {
        // 정답
        currentStreakRef.current += 1;
        setStats(prev => {
          const totalInputs = prev.totalInputs + 1;
          const maxStreak = Math.max(prev.maxStreak, currentStreakRef.current);
          const accuracy = Math.round((totalInputs / Math.max(1, totalAttemptsRef.current)) * 100);
          const instant = 10 + Math.floor(sequence.length * 2.5);
          return { ...prev, totalInputs, maxStreak, score: prev.score + instant, accuracy };
        });

        if (currentStep === sequence.length - 1) {
          setGameState('correct');
          setStats(prev => ({ ...prev, level: prev.level + 1 }));
          currentStreakRef.current += 1;
          setTimeout(() => {
            startNewLevel();
          }, 1000);
        } else {
          setCurrentStep(prev => prev + 1);
        }
      } else {
        // 오답 → 즉시 종료 흐름
        setGameState('wrong');
        currentStreakRef.current = 0;
        setTimeout(() => {
          finalizeGame();
        }, 800);
      }
    },
    [gameState, playerSequence, sequence, currentStep, playSound, startNewLevel, finalizeGame]
  );

  /* ---------- Game lifecycle ---------- */
  const startGame = () => {
    const first = [generateNewColor()];
    setSequence(first);
    setPlayerSequence([]);
    setCurrentStep(0);
    currentStreakRef.current = 0;
    totalAttemptsRef.current = 0;

    setStats(prev => ({
      level: 1,
      score: 0,
      bestLevel: prev.bestLevel,
      totalInputs: 0,
      maxStreak: 0,
      accuracy: 100,
      elapsed: 0,
    }));

    startTimeRef.current = Date.now();
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setStats(prev => ({
        ...prev,
        elapsed: Math.round((Date.now() - startTimeRef.current) / 1000),
      }));
    }, 1000);

    setTimeout(() => {
      showSequence(first);
    }, 800);
  };

  const restartGame = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
    setGameState('waiting');
    setSequence([]);
    setPlayerSequence([]);
    setCurrentStep(0);
    setActiveButton(null);
    currentStreakRef.current = 0;
    totalAttemptsRef.current = 0;
  };

  const handleBackClick = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
    navigate(-1);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const message = (() => {
    switch (gameState) {
      case 'waiting':
        return { main: '게임 시작', sub: '시작을 누르면 패턴 재생' };
      case 'showing':
        return { main: '패턴 기억', sub: '빛/소리에 집중하세요' };
      case 'inputting':
        return { main: '입력하세요', sub: `${currentStep + 1} / ${sequence.length}` };
      case 'correct':
        return { main: '정답!', sub: '다음 레벨로…' };
      case 'wrong':
        return { main: '종료', sub: '결과 분석 중…' };
      case 'finished':
        return { main: '게임 완료', sub: `레벨 ${stats.level} 달성` };
      default:
        return { main: '', sub: '' };
    }
  })();

  const isButtonDisabled = gameState !== 'inputting';

  /* ---------- Tier ---------- */
  const currentTier: TierInfo = (() => {
    const s = stats.score;
    for (const t of TIERS) {
      if (s >= t.minScore) return t;
    }
    return TIERS[TIERS.length - 1];
  })();

  /* ---------- Breakdown ---------- */
  const baseScoreCalc = stats.totalInputs * 50;
  const levelBonusCalc = Math.max(0, stats.level - 1) * 250;
  const streakBonusCalc = stats.maxStreak * 40;
  const speedBonusCalc = Math.max(
    0,
    Math.round((Math.max(0, stats.totalInputs * 1.1) - stats.elapsed) * 18)
  );

  return (
    <GameContainer>
      <Header>
        <BackButton onClick={handleBackClick}>
          <ArrowLeft size={16} />
          게임 목록
        </BackButton>
        <Title>🎵 사이먼 게임</Title>
        <StatsPanel>
          <Stat highlight={gameState === 'correct'}>
            <div className="label">레벨</div>
            <div className="value">{stats.level}</div>
          </Stat>
          <Stat>
            <div className="label">정확도</div>
            <div className="value">{stats.accuracy}%</div>
          </Stat>
          <Stat>
            <div className="label">연속 최고</div>
            <div className="value">{stats.maxStreak}</div>
          </Stat>
          <Stat>
            <div className="label">경과</div>
            <div className="value">{stats.elapsed}s</div>
          </Stat>
          <Stat>
            <div className="label">최고레벨</div>
            <div className="value">{stats.bestLevel}</div>
          </Stat>
        </StatsPanel>
      </Header>

      {gameState !== 'waiting' && gameState !== 'finished' && (
        <GameArea>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <div
              className="main"
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                background: 'linear-gradient(45deg, #fff, #f1f5f9)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 6,
              }}
            >
              {message.main}
            </div>
            <div className="sub" style={{ opacity: 0.85 }}>
              {message.sub}
            </div>
          </div>

          <BoardWrapper>
            <GameBoard>
              {(['red', 'green', 'blue', 'yellow'] as Color[]).map(c => (
                <ColorButton
                  key={c}
                  color={COLORS[c]}
                  isActive={activeButton === c}
                  isDisabled={isButtonDisabled}
                  onClick={() => handleColorClick(c)}
                />
              ))}
            </GameBoard>

            <CenterDisplay>
              <div>레벨</div>
              <div style={{ fontSize: '1.1rem' }}>{stats.level}</div>
            </CenterDisplay>
          </BoardWrapper>

          <ControlPanel>
            <ControlButton onClick={restartGame}>
              <RefreshCcw size={16} />
              다시 시작
            </ControlButton>
            <ControlButton
              onClick={() => setSoundEnabled(v => !v)}
              variant={soundEnabled ? 'primary' : 'secondary'}
            >
              <Volume2 size={16} />
              소리 {soundEnabled ? 'ON' : 'OFF'}
            </ControlButton>
          </ControlPanel>
        </GameArea>
      )}

      {/* 시작 오버레이 */}
      <GameOverlay show={gameState === 'waiting'}>
        <OverlayContent>
          <div className="overlay-title">🎵 사이먼 게임</div>
          <div className="overlay-text">
            컴퓨터가 보여주는 색과 소리의 패턴을 기억해 같은 순서로 눌러보세요. 레벨이 오를수록 패턴
            길이가 늘어납니다.
          </div>
          <ActionRow>
            <ActionButton onClick={startGame}>
              <Play size={16} style={{ marginRight: 6 }} />
              게임 시작
            </ActionButton>
            <ActionButton variant="secondary" onClick={handleBackClick}>
              뒤로 가기
            </ActionButton>
          </ActionRow>
        </OverlayContent>
      </GameOverlay>

      {/* 결과 오버레이 (모바일 친화적) */}
      <GameOverlay show={gameState === 'finished'}>
        <OverlayContent>
          <div className="overlay-title">🏁 게임 완료</div>
          <TierBadge color={currentTier.color}>
            {currentTier.emoji} {currentTier.name}
          </TierBadge>

          {/* 요약은 항상 보이게 */}
          <ScoreBreakdown>
            <ScoreItem delay={1}>
              <span className="score-label">💎 최종 점수</span>
              <span className="score-value" style={{ color: currentTier.color }}>
                {stats.score}점
              </span>
            </ScoreItem>
          </ScoreBreakdown>

          {/* 상세는 데스크톱 기본 펼침, 모바일 기본 접힘 */}
          <ActionRow>
            <ActionButton
              variant="secondary"
              onClick={() => setShowDetails(s => !s)}
              aria-expanded={showDetails}
              aria-controls="result-details"
              title="상세 분석 열기/닫기"
            >
              {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              {showDetails ? '상세 분석 닫기' : '상세 분석 보기'}
            </ActionButton>
          </ActionRow>

          {showDetails && (
            <ResultScrollArea id="result-details">
              <ScoreBreakdown>
                <ScoreItem delay={2}>
                  <span className="score-label">🎯 기본 점수 (정답 {stats.totalInputs}회)</span>
                  <span className="score-value">+{baseScoreCalc}점</span>
                </ScoreItem>
                <ScoreItem delay={3}>
                  <span className="score-label">🏆 레벨 보너스 (레벨 {stats.level})</span>
                  <span className="score-value">+{levelBonusCalc}점</span>
                </ScoreItem>
                <ScoreItem delay={4}>
                  <span className="score-label">🔥 연속 정답 보너스 (최대 {stats.maxStreak})</span>
                  <span className="score-value">+{streakBonusCalc}점</span>
                </ScoreItem>
                <ScoreItem delay={5}>
                  <span className="score-label">⏱️ 속도 보너스 (경과 {stats.elapsed}s)</span>
                  <span className="score-value">+{speedBonusCalc}점</span>
                </ScoreItem>
                <ScoreItem delay={6}>
                  <span className="score-label">💎 최종 점수</span>
                  <span className="score-value" style={{ color: currentTier.color }}>
                    {stats.score}점
                  </span>
                </ScoreItem>
              </ScoreBreakdown>

              <StatGrid>
                <StatCard delay={7}>
                  <div className="stat-title">도달 레벨</div>
                  <div className="stat-number">{stats.level}</div>
                </StatCard>
                <StatCard delay={8}>
                  <div className="stat-title">정확도</div>
                  <div className="stat-number">{stats.accuracy}%</div>
                </StatCard>
                <StatCard delay={9}>
                  <div className="stat-title">최대 연속</div>
                  <div className="stat-number">{stats.maxStreak}</div>
                </StatCard>
                <StatCard delay={10}>
                  <div className="stat-title">총 정답 입력</div>
                  <div className="stat-number">{stats.totalInputs}</div>
                </StatCard>
                <StatCard delay={11}>
                  <div className="stat-title">경과 시간</div>
                  <div className="stat-number">{stats.elapsed}s</div>
                </StatCard>
              </StatGrid>

              <PerformanceMessage delay={12}>
                {stats.level >= 10 && stats.accuracy >= 90
                  ? '🧠 완벽에 가까운 집중력! 고난도 패턴까지 안정적으로 처리했어요.'
                  : stats.level >= 7 && stats.maxStreak >= 12
                    ? '🔥 패턴 연속 처리 능력이 뛰어납니다. 상위 티어를 노려보세요!'
                    : stats.level >= 5
                      ? '👍 좋은 출발! 패턴 길이가 늘어도 페이스가 유지되고 있어요.'
                      : '🎯 워밍업 완료! 짧은 패턴에서 정확도를 먼저 90% 이상으로 끌어올려보세요.'}
              </PerformanceMessage>
            </ResultScrollArea>
          )}

          <ActionRow>
            <ActionButton onClick={restartGame}>🔄 다시 하기</ActionButton>
            <ActionButton variant="secondary" onClick={handleBackClick}>
              📋 게임 목록
            </ActionButton>
          </ActionRow>
        </OverlayContent>
      </GameOverlay>
    </GameContainer>
  );
};

export default SimonSays;
