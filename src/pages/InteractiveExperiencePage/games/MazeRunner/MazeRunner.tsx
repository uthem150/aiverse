import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, Navigation, RotateCcw } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

// 애니메이션 정의
const playerMove = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.2) rotate(180deg); }
  100% { transform: scale(1) rotate(360deg); }
`;

const playerGlow = keyframes`
  0%, 100% { box-shadow: 0 0 15px rgba(239, 68, 68, 0.5); }
  50% { box-shadow: 0 0 25px rgba(239, 68, 68, 0.8); }
`;

const goalPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px rgba(34, 197, 94, 0.5);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 30px rgba(34, 197, 94, 1);
    transform: scale(1.1);
  }
`;

const pathReveal = keyframes`
  0% { background: #fbbf24; transform: scale(0.8); }
  50% { background: #f59e0b; transform: scale(1.1); }
  100% { background: #92400e; transform: scale(1); }
`;

const victoryGlow = keyframes`
  0%, 100% { filter: brightness(1) hue-rotate(0deg); }
  25% { filter: brightness(1.3) hue-rotate(90deg); }
  50% { filter: brightness(1.5) hue-rotate(180deg); }
  75% { filter: brightness(1.3) hue-rotate(270deg); }
`;

const resultAppear = keyframes`
  0% { transform: scale(0.5) translateY(50px); opacity: 0; }
  50% { transform: scale(1.05) translateY(-10px); opacity: 0.8; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
`;

const tierGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
  50% { box-shadow: 0 0 30px rgba(255, 255, 255, 0.6); }
`;

const statsReveal = keyframes`
  0% { transform: translateX(-30px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const buttonHover = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`;

const difficultyPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`;

const mazeGenerate = keyframes`
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
`;

// 난이도 설정
interface Difficulty {
  name: string;
  emoji: string;
  size: number;
  timeBonus: number;
  moveBonus: number;
  description: string;
}

const DIFFICULTIES: Difficulty[] = [
  {
    name: '쉬움',
    emoji: '🐣',
    size: 11,
    timeBonus: 1,
    moveBonus: 1,
    description: '작은 미로 (11×11)',
  },
  {
    name: '보통',
    emoji: '🏃',
    size: 15,
    timeBonus: 1.5,
    moveBonus: 1.5,
    description: '중간 미로 (15×15)',
  },
  {
    name: '어려움',
    emoji: '🧗',
    size: 19,
    timeBonus: 2,
    moveBonus: 2,
    description: '큰 미로 (19×19)',
  },
  {
    name: '지옥',
    emoji: '🔥',
    size: 25,
    timeBonus: 3,
    moveBonus: 3,
    description: '거대 미로 (25×25)',
  },
];

// 티어 시스템
interface TierInfo {
  name: string;
  emoji: string;
  color: string;
  minScore: number;
}

const TIERS: TierInfo[] = [
  { name: '레전드', emoji: '👑', color: '#FFD700', minScore: 10000 },
  { name: '마스터', emoji: '💎', color: '#00CED1', minScore: 7500 },
  { name: '다이아몬드', emoji: '💠', color: '#4169E1', minScore: 5500 },
  { name: '플래티넘', emoji: '⭐', color: '#C0C0C0', minScore: 4000 },
  { name: '골드', emoji: '🥇', color: '#FFD700', minScore: 2800 },
  { name: '실버', emoji: '🥈', color: '#C0C0C0', minScore: 1800 },
  { name: '브론즈', emoji: '🥉', color: '#CD7F32', minScore: 1000 },
  { name: '탐험가', emoji: '🧭', color: '#808080', minScore: 0 },
];

/** ===== 점수/효율 계산 보일러플레이트 통일 ===== */
const optimalMovesFor = (size: number) => Math.floor(size * 1.5); // 근사 최단 이동 수
const difficultyMultiplierFor = (name: string) =>
  name === '지옥' ? 3 : name === '어려움' ? 2.5 : name === '보통' ? 2 : 1.5;

const timeBonusFor = (timeSec: number, diff: Difficulty) =>
  Math.max(0, (300 - timeSec) * 10) * diff.timeBonus;

// 이동 보너스 기준: optimalMoves * 2 ~= size * 3 (일관성 유지)
const moveBonusFor = (moves: number, size: number, diff: Difficulty) =>
  Math.max(0, (optimalMovesFor(size) * 2 - moves) * 5) * diff.moveBonus;

// 효율성: 0~100%로 클램프
const efficiencyFor = (moves: number, size: number) => {
  const optimal = optimalMovesFor(size);
  const eff = Math.round((optimal / Math.max(1, moves)) * 100);
  return Math.max(0, Math.min(100, eff));
};

const totalScoreFor = (timeSec: number, moves: number, diff: Difficulty, size: number) => {
  const tb = timeBonusFor(timeSec, diff);
  const mb = moveBonusFor(moves, size, diff);
  const ef = efficiencyFor(moves, size);
  const dm = difficultyMultiplierFor(diff.name);
  return Math.round((tb + mb + ef * 50 + 1000) * dm);
};
/** ============================================ */

const GameContainer = styled.div`
  height: 100%;
  flex: 1;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  user-select: none;
  overflow: hidden;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 2px solid rgba(34, 197, 94, 0.3);
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
  background: rgba(34, 197, 94, 0.1);
  border: 2px solid rgba(34, 197, 94, 0.3);
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
    background: rgba(34, 197, 94, 0.2);
    transform: translateY(-2px);
    ${css`
      animation: ${buttonHover} 0.6s ease-in-out;
    `}
    box-shadow: 0 8px 20px rgba(34, 197, 94, 0.4);
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
  font-weight: 700;
  background: linear-gradient(45deg, #22c55e, #16a34a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-shadow: 0 0 20px rgba(34, 197, 94, 0.5);

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
      animation: ${playerMove} 0.5s ease;
    `}

  .stat-label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.2rem;
  }
  .stat-value {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${p => (p.highlight ? '#fbbf24' : '#22c55e')};
    text-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
  }

  @media (max-width: 768px) {
    .stat-label {
      font-size: 0.7rem;
    }
    .stat-value {
      font-size: 1rem;
    }
  }
  @media (max-width: 480px) {
    .stat-label {
      font-size: 0.65rem;
    }
    .stat-value {
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
  margin-top: 120px;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
    margin-top: 140px;
  }
  @media (max-width: 480px) {
    padding: 0.75rem;
    gap: 1rem;
    margin-top: 120px;
  }
`;

const MazeContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 1.5rem;
  border: 3px solid rgba(34, 197, 94, 0.3);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  animation: ${mazeGenerate} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 12px;
  }
  @media (max-width: 480px) {
    padding: 0.5rem;
    border-radius: 10px;
  }
`;

const MazeGrid = styled.div<{ size: number }>`
  display: grid;
  grid-template-columns: repeat(${p => p.size}, 1fr);
  gap: 1px;
  background: #0f172a;
  border: 3px solid #1e293b;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: inset 0 0 20px rgba(34, 197, 94, 0.2);

  @media (max-width: 768px) {
    gap: 0px;
    border-radius: 10px;
  }
  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;

const MazeCell = styled.div<{
  type: 'wall' | 'path' | 'start' | 'end' | 'player' | 'visited';
  size: number;
}>`
  width: ${p => Math.max(15, Math.min(30, 400 / p.size))}px;
  height: ${p => Math.max(15, Math.min(30, 400 / p.size))}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${p => Math.max(10, Math.min(20, 300 / p.size))}px;
  font-weight: bold;
  position: relative;
  transition: all 0.3s ease;
  border-radius: 2px;

  background: ${p =>
    p.type === 'wall'
      ? '#1e293b'
      : p.type === 'path'
        ? '#f3f4f6'
        : p.type === 'start'
          ? '#3b82f6'
          : p.type === 'end'
            ? '#10b981'
            : p.type === 'player'
              ? '#ef4444'
              : '#fbbf24'};

  ${p =>
    p.type === 'player' &&
    css`
      animation:
        ${playerMove} 0.4s ease,
        ${playerGlow} 2s ease-in-out infinite;
      z-index: 10;
    `}
  ${p =>
    p.type === 'end' &&
    css`
      animation: ${goalPulse} 2s ease-in-out infinite;
    `}
  ${p =>
    p.type === 'visited' &&
    css`
      animation: ${pathReveal} 0.6s ease;
    `}
  ${p =>
    p.type === 'start' &&
    css`
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
    `}

  @media (max-width: 768px) {
    width: ${p => Math.max(12, Math.min(25, 320 / p.size))}px;
    height: ${p => Math.max(12, Math.min(25, 320 / p.size))}px;
    font-size: ${p => Math.max(8, Math.min(16, 250 / p.size))}px;
  }
  @media (max-width: 480px) {
    width: ${p => Math.max(10, Math.min(20, 280 / p.size))}px;
    height: ${p => Math.max(10, Math.min(20, 280 / p.size))}px;
    font-size: ${p => Math.max(6, Math.min(14, 200 / p.size))}px;
  }
`;

const ControlPanel = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    gap: 0.8rem;
  }
  @media (max-width: 480px) {
    gap: 0.6rem;
  }
`;

const ControlButton = styled.button`
  background: rgba(34, 197, 94, 0.2);
  border: 2px solid rgba(34, 197, 94, 0.4);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(34, 197, 94, 0.4);
    ${css`
      animation: ${buttonHover} 0.6s ease-in-out;
    `}
    background: rgba(34,197,94,0.3);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
    border-radius: 10px;
  }
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
    border-radius: 8px;
  }
`;

const DirectionControls = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;

  .direction-btn {
    width: 60px;
    height: 60px;
    background: rgba(34, 197, 94, 0.2);
    border: 2px solid rgba(34, 197, 94, 0.4);
    border-radius: 12px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;

    &:hover {
      background: rgba(34, 197, 94, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(34, 197, 94, 0.3);
    }
    &:active {
      transform: translateY(0);
      ${css`
        animation: ${playerMove} 0.2s ease;
      `}
    }
  }

  .up {
    grid-column: 2;
  }
  .left {
    grid-column: 1;
    grid-row: 2;
  }
  .right {
    grid-column: 3;
    grid-row: 2;
  }
  .down {
    grid-column: 2;
    grid-row: 3;
  }

  @media (max-width: 768px) {
    gap: 0.6rem;
    .direction-btn {
      width: 50px;
      height: 50px;
      font-size: 1.3rem;
      border-radius: 10px;
    }
  }
  @media (max-width: 480px) {
    gap: 0.5rem;
    .direction-btn {
      width: 45px;
      height: 45px;
      font-size: 1.2rem;
      border-radius: 8px;
    }
  }
`;

/** ====== 오버레이(결과/설명) - 모바일 무스크롤 대응 ====== */
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
    padding: max(env(safe-area-inset-top), 8px) 8px max(env(safe-area-inset-bottom), 8px);
    height: 100dvh; /* 모바일 브라우저 UI 변동 대응 */
  }
`;

const OverlayContent = styled.div<{ isVictory?: boolean }>`
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1));
  backdrop-filter: blur(30px);
  border: 2px solid rgba(34, 197, 94, 0.4);
  border-radius: 20px; /* 더 작게 */
  padding: 1.2rem 1.5rem; /* PC 패딩 더 많이 줄임 */
  text-align: center;
  max-width: 550px; /* 최대 너비 줄임 */
  max-height: 90vh; /* 높이 여유 더 주기 */
  width: 100%;
  position: relative;
  overflow: hidden;
  animation: ${resultAppear} 0.8s ease-out;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(34, 197, 94, 0.2);

  ${p =>
    p.isVictory &&
    css`
      animation:
        ${victoryGlow} 3s ease-in-out infinite,
        ${resultAppear} 0.8s ease-out;
    `}

  &:before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 20px;
    z-index: -1;
    animation: ${tierGlow} 3s ease-in-out infinite;
  }

  .overlay-title {
    font-size: 1.6rem; /* PC 타이틀 더 작게 */
    font-weight: 800;
    background: linear-gradient(45deg, #fff, #f1f5f9);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.6rem; /* 마진 더 줄임 */
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }

  .overlay-text {
    font-size: 0.9rem; /* PC 텍스트 더 작게 */
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.8rem; /* 마진 더 줄임 */
    line-height: 1.4; /* 라인 높이 더 줄임 */
  }

  @media (max-width: 768px) {
    padding: 1.6rem 1.2rem;
    margin: 1rem;
    border-radius: 20px;
    max-height: 85vh;

    .overlay-title {
      font-size: clamp(1.5rem, 5vw, 2.5rem);
      margin-bottom: 1.2rem;
    }

    .overlay-text {
      font-size: 1.05rem;
      margin-bottom: 2rem;
      line-height: 1.6;
    }
  }

  /* 모바일 컴팩트: 스크롤 없이 보기 좋게 */
  @media (max-width: 480px) {
    padding: 1rem 0.8rem;
    margin: 0;
    border-radius: 16px;
    width: calc(100% - 0px);
    max-width: 480px;
    transform: scale(0.98);
    transform-origin: center top;
    max-height: 85vh;

    .overlay-text {
      font-size: 0.92rem;
      margin-bottom: 1.2rem;
    }
  }

  /* 매우 작은 세로 높이 대응 */
  @media (max-width: 480px) and (max-height: 700px) {
    transform: scale(0.94);
    .overlay-text {
      margin-bottom: 0.8rem;
    }
  }
`;

const DifficultySelector = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem; /* PC 간격 줄임 */
  margin: 0.8rem 0; /* PC 마진 줄임 */
  @media (max-width: 480px) {
    gap: 0.8rem;
    margin: 1.2rem 0;
  }
`;

const DifficultyCard = styled.button<{ selected: boolean }>`
  background: ${p =>
    p.selected ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'rgba(255,255,255,0.05)'};
  border: 2px solid ${p => (p.selected ? '#22c55e' : 'rgba(255,255,255,0.1)')};
  border-radius: 10px; /* 더 작게 */
  padding: 0.6rem; /* PC 패딩 줄임 */
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  ${p =>
    p.selected &&
    css`
      animation: ${difficultyPulse} 2s ease-in-out infinite;
    `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(34, 197, 94, 0.3);
    border-color: #22c55e;
  }

  .difficulty-header {
    display: flex;
    align-items: center;
    gap: 0.4rem; /* 간격 줄임 */
    font-size: 0.95rem; /* PC 폰트 줄임 */
    font-weight: 600;
    margin-bottom: 0.3rem; /* 마진 줄임 */
  }
  .difficulty-desc {
    font-size: 0.8rem; /* PC 폰트 줄임 */
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    border-radius: 10px;
    .difficulty-header {
      font-size: 1rem;
    }
    .difficulty-desc {
      font-size: 0.85rem;
    }
  }
`;

const TierBadge = styled.div<{ color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem; /* 간격 줄임 */
  background: linear-gradient(135deg, ${p => p.color}20, ${p => p.color}40);
  border: 2px solid ${p => p.color};
  border-radius: 12px; /* 더 작게 */
  padding: 0.4rem 0.8rem; /* PC 패딩 더 많이 줄임 */
  margin-bottom: 0.6rem; /* 마진 더 줄임 */
  font-size: 1.2rem; /* PC 폰트 더 작게 */
  font-weight: 700;
  color: ${p => p.color};
  text-shadow: 0 0 20px ${p => p.color}80;
  animation: ${tierGlow} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 480px) {
    padding: 0.5rem 0.9rem;
    font-size: 1.05rem;
    margin-bottom: 0.8rem;
    border-radius: 10px;
    gap: 0.35rem;
  }
`;

const ScoreBreakdown = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px; /* 더 작게 */
  padding: 0.8rem; /* PC 패딩 더 많이 줄임 */
  margin: 0.6rem 0; /* 마진 더 줄임 */
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.2rem;
    margin: 1.2rem 0;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    margin: 0.9rem 0;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.6rem;
    row-gap: 0.2rem;

    & > div {
      padding: 0.35rem 0;
      border-bottom: none !important;
    } /* ScoreItem border 제거 */
    & > div:last-child {
      grid-column: 1 / -1;
      margin-top: 0.4rem;
      padding-top: 0.6rem;
      border-top: 1px solid rgba(34, 197, 94, 0.3) !important;
      font-size: 1rem !important;
    }
  }
`;

const ScoreItem = styled.div<{ delay?: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0; /* PC 패딩 더 많이 줄임 */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${statsReveal} 0.6s ease-out ${p => (p.delay || 0) * 0.1}s both;

  &:last-child {
    border-bottom: none;
    font-size: 1rem; /* PC 폰트 더 작게 */
    font-weight: 700;
    margin-top: 0.3rem; /* 마진 더 줄임 */
    padding-top: 0.6rem; /* 패딩 더 줄임 */
    border-top: 2px solid rgba(34, 197, 94, 0.3);
  }

  .score-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.8rem; /* PC 폰트 더 작게 */
  }
  .score-value {
    color: #22c55e;
    font-weight: 600;
    font-size: 0.85rem; /* PC 폰트 더 작게 */
    text-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
  }

  @media (max-width: 480px) {
    .score-label {
      font-size: 0.82rem;
    }
    .score-value {
      font-size: 0.9rem;
    }
    &:last-child {
      font-size: 1rem;
      margin-top: 0.4rem;
      padding-top: 0.6rem;
    }
  }
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem; /* PC 간격 더 줄임 */
  margin: 0.6rem 0; /* 마진 더 줄임 */
  @media (max-width: 768px) {
    gap: 0.8rem;
    margin: 1.2rem 0;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
    margin: 0.9rem 0;
  } /* 2열 유지로 높이 절약 */
`;

const StatCard = styled.div<{ delay?: number }>`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px; /* 더 작게 */
  padding: 0.6rem; /* PC 패딩 더 줄임 */
  text-align: center;
  animation: ${statsReveal} 0.6s ease-out ${p => (p.delay || 0) * 0.1}s both;

  .stat-title {
    font-size: 0.7rem; /* PC 폰트 더 작게 */
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 0.3rem; /* 마진 더 줄임 */
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .stat-number {
    font-size: 1rem; /* PC 폰트 더 작게 */
    font-weight: 700;
    color: #22c55e;
    text-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    border-radius: 10px;
    .stat-title {
      font-size: 0.75rem;
      margin-bottom: 0.4rem;
    }
    .stat-number {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 480px) {
    padding: 0.6rem;
    border-radius: 8px;
    .stat-title {
      font-size: 0.68rem;
      margin-bottom: 0.25rem;
    }
    .stat-number {
      font-size: 1.05rem;
    }
  }
`;

const PerformanceMessage = styled.div<{ delay?: number }>`
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1));
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 10px; /* 더 작게 */
  padding: 0.6rem 1rem; /* PC 패딩 더 줄임 */
  margin: 0.6rem 0; /* 마진 더 줄임 */
  color: #22c55e;
  font-weight: 600;
  font-size: 0.85rem; /* PC 폰트 더 작게 */
  animation: ${statsReveal} 0.6s ease-out ${p => (p.delay || 0) * 0.1}s both;
  text-shadow: 0 0 10px rgba(34, 197, 94, 0.3);

  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    margin: 1rem 0;
    font-size: 0.95rem;
  }
  @media (max-width: 480px) {
    padding: 0.6rem 0.8rem;
    margin: 0.8rem 0;
    font-size: 0.88rem;
  }
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background: ${p =>
    p.variant === 'secondary'
      ? 'rgba(255,255,255,0.1)'
      : 'linear-gradient(135deg, #22c55e, #16a34a)'};
  border: ${p => (p.variant === 'secondary' ? '2px solid rgba(255,255,255,0.3)' : 'none')};
  border-radius: 12px; /* 더 작게 */
  padding: 0.6rem 1.2rem; /* PC 패딩 더 줄임 */
  color: white;
  font-size: 0.9rem; /* PC 폰트 더 작게 */
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.3rem; /* 마진 더 줄임 */
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem; /* 간격 줄임 */

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
    box-shadow: 0 15px 35px rgba(34, 197, 94, 0.4);
    ${css`
      animation: ${buttonHover} 0.6s ease-in-out;
    `} &:before {
      width: 300px;
      height: 300px;
    }
  }
  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.3rem;
    font-size: 0.95rem;
    margin: 0.4rem;
    border-radius: 12px;
  }
  @media (max-width: 480px) {
    padding: 0.55rem 0.9rem;
    font-size: 0.88rem;
    margin: 0.25rem;
    border-radius: 10px;
  }
`;

const Instructions = styled.div`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(34, 197, 94, 0.3);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.8rem;
  }
  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.6rem;
  }
`;

type CellType = 'wall' | 'path' | 'start' | 'end';
interface Position {
  x: number;
  y: number;
}

interface GameStats {
  time: number;
  moves: number;
  bestTime: number;
  bestMoves: number;
  gamesCompleted: number;
  efficiency: number;
}

const MazeRunner: React.FC = () => {
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'completed'>('setup');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(DIFFICULTIES[1]); // 보통
  const [maze, setMaze] = useState<CellType[][]>([]);
  const [playerPos, setPlayerPos] = useState<Position>({ x: 1, y: 1 });
  const [visitedCells, setVisitedCells] = useState<Set<string>>(new Set());
  const [stats, setStats] = useState<GameStats>({
    time: 0,
    moves: 0,
    bestTime: parseInt(localStorage.getItem(`maze-best-time-${selectedDifficulty.name}`) || '999'),
    bestMoves: parseInt(
      localStorage.getItem(`maze-best-moves-${selectedDifficulty.name}`) || '999'
    ),
    gamesCompleted: parseInt(localStorage.getItem('maze-games-completed') || '0'),
    efficiency: 0,
  });
  const [startTime, setStartTime] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  // 티어 계산
  const calculateTier = (finalStats: GameStats): TierInfo => {
    const totalScore = totalScoreFor(
      finalStats.time,
      finalStats.moves,
      selectedDifficulty,
      selectedDifficulty.size
    );
    for (const tier of TIERS) {
      if (totalScore >= tier.minScore) return tier;
    }
    return TIERS[TIERS.length - 1];
  };

  // 미로 생성 (Recursive Backtracking)
  const generateMaze = useCallback((size: number): CellType[][] => {
    const maze: CellType[][] = Array(size)
      .fill(null)
      .map(() => Array(size).fill('wall'));
    const visited = Array(size)
      .fill(null)
      .map(() => Array(size).fill(false));

    const stack: Position[] = [];
    const start: Position = { x: 1, y: 1 };
    maze[start.y][start.x] = 'path';
    visited[start.y][start.x] = true;
    stack.push(start);

    const directions = [
      { x: 0, y: -2 },
      { x: 2, y: 0 },
      { x: 0, y: 2 },
      { x: -2, y: 0 },
    ];

    while (stack.length > 0) {
      const current = stack[stack.length - 1];
      const neighbors: Position[] = [];
      for (const dir of directions) {
        const nx = current.x + dir.x,
          ny = current.y + dir.y;
        if (nx > 0 && nx < size - 1 && ny > 0 && ny < size - 1 && !visited[ny][nx])
          neighbors.push({ x: nx, y: ny });
      }
      if (neighbors.length > 0) {
        const next = neighbors[Math.floor(Math.random() * neighbors.length)];
        const wallX = current.x + (next.x - current.x) / 2;
        const wallY = current.y + (next.y - current.y) / 2;
        maze[wallY][wallX] = 'path';
        maze[next.y][next.x] = 'path';
        visited[next.y][next.x] = true;
        stack.push(next);
      } else {
        stack.pop();
      }
    }

    maze[1][1] = 'start';
    maze[size - 2][size - 2] = 'end';
    return maze;
  }, []);

  const movePlayer = useCallback(
    (direction: 'up' | 'down' | 'left' | 'right') => {
      if (gameState !== 'playing') return;
      const dirMap = {
        up: { x: 0, y: -1 },
        down: { x: 0, y: 1 },
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 },
      };
      const newPos = { x: playerPos.x + dirMap[direction].x, y: playerPos.y + dirMap[direction].y };

      // 경계/벽 체크
      if (
        newPos.x < 0 ||
        newPos.x >= maze[0].length ||
        newPos.y < 0 ||
        newPos.y >= maze.length ||
        maze[newPos.y][newPos.x] === 'wall'
      )
        return;

      setPlayerPos(newPos);
      setStats(prev => ({ ...prev, moves: prev.moves + 1 }));

      const cellKey = `${newPos.x},${newPos.y}`;
      setVisitedCells(prev => new Set([...prev, cellKey]));

      if (maze[newPos.y][newPos.x] === 'end') {
        const finalTime = Math.floor((Date.now() - startTime) / 1000);

        setStats(prev => {
          const newMoves = prev.moves + 1; // 최종 이동 반영
          const newEfficiency = efficiencyFor(newMoves, selectedDifficulty.size); // 0~100%
          const newStats = { ...prev, time: finalTime, moves: newMoves, efficiency: newEfficiency };

          // 최고 기록 저장
          if (finalTime < prev.bestTime || prev.bestTime === 999) {
            newStats.bestTime = finalTime;
            localStorage.setItem(`maze-best-time-${selectedDifficulty.name}`, finalTime.toString());
          }
          if (newMoves < prev.bestMoves || prev.bestMoves === 999) {
            newStats.bestMoves = newMoves;
            localStorage.setItem(`maze-best-moves-${selectedDifficulty.name}`, newMoves.toString());
          }
          newStats.gamesCompleted = prev.gamesCompleted + 1;
          localStorage.setItem('maze-games-completed', newStats.gamesCompleted.toString());
          return newStats;
        });

        setGameState('completed');
        if (timerRef.current) clearInterval(timerRef.current);
      }
    },
    [gameState, playerPos, maze, startTime, selectedDifficulty]
  );

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          event.preventDefault();
          movePlayer('up');
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          event.preventDefault();
          movePlayer('down');
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          event.preventDefault();
          movePlayer('left');
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          event.preventDefault();
          movePlayer('right');
          break;
      }
    },
    [movePlayer]
  );

  const startGame = () => {
    const size = selectedDifficulty.size;
    const newMaze = generateMaze(size);
    setMaze(newMaze);
    setPlayerPos({ x: 1, y: 1 });
    setVisitedCells(new Set(['1,1']));
    setGameState('playing');
    setStartTime(Date.now());
    setStats(prev => ({
      ...prev,
      time: 0,
      moves: 0,
      efficiency: 0,
      bestTime: parseInt(
        localStorage.getItem(`maze-best-time-${selectedDifficulty.name}`) || '999'
      ),
      bestMoves: parseInt(
        localStorage.getItem(`maze-best-moves-${selectedDifficulty.name}`) || '999'
      ),
    }));
    // 타이머
    timerRef.current = setInterval(() => {
      setStats(prev => ({ ...prev, time: prev.time + 1 }));
    }, 1000);
  };

  const resetGame = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGameState('setup');
    setVisitedCells(new Set());
  };

  useEffect(() => {
    if (gameState === 'playing') {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [gameState, handleKeyPress]);

  useEffect(
    () => () => {
      if (timerRef.current) clearInterval(timerRef.current);
    },
    []
  );

  const handleBackClick = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    navigate(-1);
  };

  const getCellType = (
    x: number,
    y: number
  ): 'wall' | 'path' | 'start' | 'end' | 'player' | 'visited' => {
    if (playerPos.x === x && playerPos.y === y) return 'player';
    if (visitedCells.has(`${x},${y}`) && maze[y][x] === 'path') return 'visited';
    return maze[y][x];
  };

  const getCellContent = (x: number, y: number): string => {
    if (playerPos.x === x && playerPos.y === y) return '🏃';
    if (maze[y][x] === 'start') return '🏁';
    if (maze[y][x] === 'end') return '🎯';
    return '';
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentTier = calculateTier(stats);
  const dm = difficultyMultiplierFor(selectedDifficulty.name);
  const timeBonus = timeBonusFor(stats.time, selectedDifficulty);
  const moveBonus = moveBonusFor(stats.moves, selectedDifficulty.size, selectedDifficulty);
  const totalScore = totalScoreFor(
    stats.time,
    stats.moves,
    selectedDifficulty,
    selectedDifficulty.size
  );

  return (
    <GameContainer>
      <Header>
        <BackButton onClick={handleBackClick}>
          <ArrowLeft size={16} />
          게임 목록
        </BackButton>
        <Title>🏃 미로 탈출</Title>
        <StatsPanel>
          <Stat>
            <div className="stat-label">시간</div>
            <div className="stat-value">{formatTime(stats.time)}</div>
          </Stat>
          <Stat highlight={gameState === 'playing'}>
            <div className="stat-label">이동</div>
            <div className="stat-value">{stats.moves}</div>
          </Stat>
          <Stat>
            <div className="stat-label">최고시간</div>
            <div className="stat-value">
              {stats.bestTime === 999 ? '-' : formatTime(stats.bestTime)}
            </div>
          </Stat>
          <Stat>
            <div className="stat-label">완료횟수</div>
            <div className="stat-value">{stats.gamesCompleted}</div>
          </Stat>
        </StatsPanel>
      </Header>

      {gameState === 'playing' && (
        <GameArea>
          <MazeContainer>
            <MazeGrid size={selectedDifficulty.size}>
              {maze.map((row, y) =>
                row.map((_, x) => (
                  <MazeCell
                    key={`${x}-${y}`}
                    type={getCellType(x, y)}
                    size={selectedDifficulty.size}
                  >
                    {getCellContent(x, y)}
                  </MazeCell>
                ))
              )}
            </MazeGrid>
          </MazeContainer>

          <ControlPanel>
            <ControlButton onClick={() => startGame()}>
              <RotateCcw size={16} />새 미로
            </ControlButton>
            <ControlButton onClick={resetGame}>
              <Navigation size={16} />
              메뉴로
            </ControlButton>
          </ControlPanel>

          <DirectionControls>
            <button className="direction-btn up" onClick={() => movePlayer('up')}>
              ↑
            </button>
            <button className="direction-btn left" onClick={() => movePlayer('left')}>
              ←
            </button>
            <button className="direction-btn right" onClick={() => movePlayer('right')}>
              →
            </button>
            <button className="direction-btn down" onClick={() => movePlayer('down')}>
              ↓
            </button>
          </DirectionControls>

          <Instructions>키보드: 화살표 키 또는 WASD • 모바일: 화면의 방향 버튼</Instructions>
        </GameArea>
      )}

      <GameOverlay show={gameState === 'setup'}>
        <OverlayContent>
          <div className="overlay-title">🏃 미로 탈출</div>
          <div className="overlay-text">
            랜덤하게 생성된 미로에서 탈출하세요!
            <br />
            🏁 시작점에서 🎯 도착점까지 최단 경로를 찾아보세요.
            <br />
            <br />
            <strong>조작법:</strong>
            <br />
            • 키보드: 화살표 키 또는 WASD • 모바일: 화면의 방향 버튼
            <br />
            <br />
            최소한의 이동과 시간으로 탈출해보세요!
          </div>

          <DifficultySelector>
            {DIFFICULTIES.map(difficulty => (
              <DifficultyCard
                key={difficulty.name}
                selected={selectedDifficulty.name === difficulty.name}
                onClick={() => setSelectedDifficulty(difficulty)}
              >
                <div className="difficulty-header">
                  {difficulty.emoji} {difficulty.name}
                </div>
                <div className="difficulty-desc">{difficulty.description}</div>
              </DifficultyCard>
            ))}
          </DifficultySelector>

          <ActionButton onClick={startGame}>게임 시작</ActionButton>
          <ActionButton variant="secondary" onClick={handleBackClick}>
            뒤로 가기
          </ActionButton>
        </OverlayContent>
      </GameOverlay>

      <GameOverlay show={gameState === 'completed'}>
        <OverlayContent isVictory>
          <div className="overlay-title">🏆 미로 탈출 성공!</div>

          <TierBadge color={currentTier.color}>
            {currentTier.emoji} {currentTier.name}
          </TierBadge>

          <ScoreBreakdown>
            <ScoreItem delay={1}>
              <span className="score-label">⏱️ 시간 보너스</span>
              <span className="score-value">{timeBonus}점</span>
            </ScoreItem>
            <ScoreItem delay={2}>
              <span className="score-label">🚶 이동 보너스</span>
              <span className="score-value">{moveBonus}점</span>
            </ScoreItem>
            <ScoreItem delay={3}>
              <span className="score-label">🎯 효율 보너스</span>
              <span className="score-value">{stats.efficiency * 50}점</span>
            </ScoreItem>
            <ScoreItem delay={4}>
              <span className="score-label">🏆 완주 보너스</span>
              <span className="score-value">1000점</span>
            </ScoreItem>
            <ScoreItem delay={5}>
              <span className="score-label">🔥 난이도 배수</span>
              <span className="score-value">x{dm}</span>
            </ScoreItem>
            <ScoreItem delay={6}>
              <span className="score-label">💎 총 점수</span>
              <span className="score-value" style={{ color: currentTier.color }}>
                {totalScore}점
              </span>
            </ScoreItem>
          </ScoreBreakdown>

          <StatGrid>
            <StatCard delay={7}>
              <div className="stat-title">완료 시간</div>
              <div className="stat-number">{formatTime(stats.time)}</div>
            </StatCard>
            <StatCard delay={8}>
              <div className="stat-title">이동 횟수</div>
              <div className="stat-number">{stats.moves}번</div>
            </StatCard>
            <StatCard delay={9}>
              <div className="stat-title">효율성</div>
              <div className="stat-number">{stats.efficiency}%</div>
            </StatCard>
            <StatCard delay={10}>
              <div className="stat-title">미로 크기</div>
              <div className="stat-number">
                {selectedDifficulty.size}×{selectedDifficulty.size}
              </div>
            </StatCard>
          </StatGrid>

          <PerformanceMessage delay={11}>
            {selectedDifficulty.name === '지옥' && stats.time <= 180
              ? '🔥 지옥 미로 정복! 당신은 진정한 미로 마스터!'
              : stats.time <= 60 && stats.efficiency >= 80
                ? '🏆 완벽한 길찾기! 최단경로의 달인이군요!'
                : stats.time <= 120 && stats.efficiency >= 60
                  ? '🎉 훌륭한 탐험! 길찾기 전문가네요!'
                  : stats.time <= 180 && stats.efficiency >= 40
                    ? '🧭 좋은 탐험! 꾸준히 발전하고 있어요!'
                    : stats.efficiency >= 30
                      ? '🗺️ 괜찮은 도전! 더 효율적인 경로를 찾아보세요!'
                      : '🚶 첫 탈출 축하해요! 계속 도전해보세요!'}
          </PerformanceMessage>

          <div
            style={{
              marginTop: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ActionButton onClick={startGame}>
              <RotateCcw size={20} />
              다시 도전
            </ActionButton>
            <ActionButton variant="secondary" onClick={resetGame}>
              <Navigation size={20} />
              난이도 변경
            </ActionButton>
            <ActionButton variant="secondary" onClick={handleBackClick}>
              📋 게임 목록
            </ActionButton>
          </div>
        </OverlayContent>
      </GameOverlay>
    </GameContainer>
  );
};

export default MazeRunner;
