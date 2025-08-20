import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

// ======================= Animations =======================
const moleAppear = keyframes`
  0%   { transform: translate(-50%, 100%) scale(0.8); opacity: 0; }
  20%  { transform: translate(-50%, -10%) scale(1.1); opacity: 1; }
  80%  { transform: translate(-50%, 0%)   scale(1.0); opacity: 1; }
  100% { transform: translate(-50%, 100%) scale(0.8); opacity: 0; }
`;

const moleHit = keyframes`
  0%   { transform: translate(-50%, 0%)   scale(1)   rotate(0deg);   opacity: 1;   filter: brightness(1) saturate(1); }
  50%  { transform: translate(-50%, -30%) scale(1.3) rotate(10deg);  opacity: 0.9; filter: brightness(1.35) saturate(1.35); }
  100% { transform: translate(-50%, 100%) scale(0.6) rotate(-10deg); opacity: 0;   filter: brightness(0.9)  saturate(0.9); }
`;

const holeGlow = keyframes`
  0%   { box-shadow: 0 0 0 rgba(34, 197, 94, 0.5); }
  50%  { box-shadow: 0 0 30px rgba(34, 197, 94, 0.8), 0 0 60px rgba(34, 197, 94, 0.4); }
  100% { box-shadow: 0 0 0 rgba(34, 197, 94, 0.5); }
`;

const comboFlash = keyframes`
  0%   { background: linear-gradient(135deg, #059669, #047857); transform: scale(1); }
  50%  { background: linear-gradient(135deg, #f59e0b, #d97706); transform: scale(1.1); }
  100% { background: linear-gradient(135deg, #059669, #047857); transform: scale(1); }
`;

const resultAppear = keyframes`
  0%   { transform: scale(0.5) translateY(50px); opacity: 0; }
  50%  { transform: scale(1.05) translateY(-10px); opacity: 0.8; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
`;

const tierGlow = keyframes`
  0%,100% { box-shadow: 0 0 20px rgba(255,255,255,0.3); }
  50%     { box-shadow: 0 0 40px rgba(255,255,255,0.6); }
`;

const statsReveal = keyframes`
  0%   { transform: translateX(-30px); opacity: 0; }
  100% { transform: translateX(0);     opacity: 1; }
`;

const buttonHover = keyframes`
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-3px); }
`;

const scoreFloat = keyframes`
  0%   { transform: translateY(0)   scale(1);   opacity: 1;   }
  50%  { transform: translateY(-30px) scale(1.2); opacity: 0.9; }
  100% { transform: translateY(-60px) scale(0.8); opacity: 0;   }
`;

const screenShake = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(-2px, 2px); }
  50% { transform: translate(2px, -1px); }
  75% { transform: translate(-1px, -2px); }
  100% { transform: translate(0, 0); }
`;

const hitRing = keyframes`
  0%   { transform: translate(-50%, -50%) scale(0.5); opacity: 0.9; }
  100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0;   }
`;

// ======================= Layout =======================
const GameContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #059669 30%, #047857 70%, #065f46 100%);
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  position: relative;
  overflow: hidden;
  user-select: none;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 30% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
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
  background: linear-gradient(45deg, #22c55e, #10b981);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-shadow: 0 0 20px rgba(34, 197, 94, 0.3);

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
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: 0.5rem;

  ${({ highlight }) =>
    highlight &&
    css`
      animation: ${comboFlash} 0.35s ease;
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

const GameArea = styled.div<{ shake: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 120px;
  position: relative;

  ${({ shake }) =>
    shake &&
    css`
      animation: ${screenShake} 120ms ease-out;
    `}

  overscroll-behavior: contain;
  touch-action: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 140px;
  }
  @media (max-width: 480px) {
    padding: 0.75rem;
    margin-top: 120px;
  }
`;

const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  background: rgba(139, 69, 19, 0.2);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 24px;
  border: 3px solid rgba(101, 69, 34, 0.4);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.3),
    0 0 100px rgba(34, 197, 94, 0.1);

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 1.5rem;
    border-radius: 20px;
  }
  @media (max-width: 480px) {
    gap: 1rem;
    padding: 1rem;
    border-radius: 16px;
  }
`;

/** ================== CLIPPED HOLE (updated) ================== */
const Hole = styled.div<{ hasHit: boolean }>`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  cursor: pointer;

  /* 핵심: 바깥으로 나가는 두더지 클리핑 */
  overflow: hidden;
  isolation: isolate; /* 새 스택 컨텍스트로 레이어 제어 */

  /* 내부 깊이감 */
  background: radial-gradient(
    ellipse at 50% 55%,
    #0e1a2b 0%,
    #0b1320 55%,
    #070c13 75%,
    #05080d 100%
  );
  border: none;
  box-shadow:
    inset 0 14px 28px rgba(0, 0, 0, 0.85),
    inset 0 -8px 12px rgba(0, 0, 0, 0.55);

  ${({ hasHit }) =>
    hasHit &&
    css`
      animation: ${holeGlow} 0.5s ease;
    `}

  /* 윗 림(림은 두더지 위) */
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 2;
    background: radial-gradient(
      ellipse at 50% 35%,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(0, 0, 0, 0.35) 60%,
      rgba(0, 0, 0, 0.65) 80%,
      rgba(0, 0, 0, 0.85) 100%
    );
  }

  /* 바깥 그림자(보드 착시) */
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -2px;
    transform: translateX(-50%);
    width: 88%;
    height: 26%;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0) 70%);
    filter: blur(1.5px);
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const HitRing = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 140%;
  height: 140%;
  border: 3px solid rgba(34, 197, 94, 0.85);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: ${hitRing} 360ms ease-out forwards;
  filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.8));
  z-index: 3; /* 림(2)보다 위 */
`;

const hitAnim = css`
  animation: ${moleHit} 0.5s ease-out forwards;
`;
const appearAnimDynamic = (ms: number) => css`
  animation: ${moleAppear} ${ms}ms ease-in-out forwards;
`;

const Mole = styled.div<{
  isVisible: boolean;
  isHit: boolean;
  moleType: 'normal' | 'fast' | 'bonus';
  appearMs: number;
}>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 100px;
  z-index: 1; /* 림 아래 */
  background: ${props => {
    switch (props.moleType) {
      case 'fast':
        return 'linear-gradient(145deg, #ef4444, #dc2626)';
      case 'bonus':
        return 'linear-gradient(145deg, #fbbf24, #f59e0b)';
      default:
        return 'linear-gradient(145deg, #8b5a3c, #6d4c2e)';
    }
  }};
  border-radius: 50% 50% 30% 30%;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  will-change: transform, opacity, filter;

  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  ${({ isVisible, isHit, appearMs }) =>
    isVisible
      ? isHit
        ? hitAnim
        : appearAnimDynamic(appearMs)
      : css`
          animation: none;
        `}

  &:before {
    content: '';
    position: absolute;
    top: 25%;
    left: 22%;
    width: 12px;
    height: 12px;
    background: #1f2937;
    border-radius: 50%;
    box-shadow: 28px 0 0 #1f2937;
  }
  &:after {
    content: '';
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 6px;
    background: #1f2937;
    border-radius: 50%;
  }

  ${props =>
    props.moleType === 'bonus' &&
    css`
      &::before {
        content: '👑';
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 24px;
        width: auto;
        height: auto;
        background: none;
        box-shadow: none;
        filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.8));
      }
    `}
  ${props =>
    props.moleType === 'fast' &&
    css`
      &::before {
        content: '⚡';
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 20px;
        width: auto;
        height: auto;
        background: none;
        box-shadow: none;
        filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.8));
      }
    `}

  &:hover {
    transform: translateX(-50%) scale(1.08);
  }

  @media (max-width: 768px) {
    width: 65px;
    height: 80px;
    &:before {
      width: 8px;
      height: 8px;
      box-shadow: 22px 0 0 #1f2937;
    }
    &:after {
      width: 6px;
      height: 4px;
    }
  }
  @media (max-width: 480px) {
    width: 55px;
    height: 70px;
    &:before {
      width: 6px;
      height: 6px;
      box-shadow: 18px 0 0 #1f2937;
    }
    &:after {
      width: 5px;
      height: 3px;
    }
  }
`;

const ScoreFloat = styled.div<{ x: number; y: number; type: string }>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  color: ${p => (p.type === 'bonus' ? '#fbbf24' : p.type === 'fast' ? '#ef4444' : '#22c55e')};
  font-size: 1.8rem;
  font-weight: 700;
  pointer-events: none;
  z-index: 30;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
  animation: ${scoreFloat} 1.2s ease-out forwards;
  will-change: transform, opacity;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
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
    padding: 1.8rem 1.3rem;
    margin: 1rem;
    border-radius: 20px;
    max-height: calc(100vh - 2rem);
    .overlay-title {
      font-size: 1.8rem;
      margin-bottom: 1.2rem;
    }
    .overlay-text {
      font-size: 0.95rem;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    margin: 0.5rem;
    border-radius: 16px;
    max-height: calc(100vh - 1rem);
    .overlay-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .overlay-text {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
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
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
    border-radius: 12px;
  }
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    gap: 0.3rem;
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
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 10px;
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
    color: #22c55e;
    margin-top: 0.3rem; /* 마진 더 줄임 */
    padding-top: 0.6rem; /* 패딩 더 줄임 */
  }
  .score-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.8rem; /* PC 폰트 더 작게 */
  }
  .score-value {
    color: #fff;
    font-weight: 600;
    font-size: 0.85rem; /* PC 폰트 더 작게 */
  }
  @media (max-width: 480px) {
    padding: 0.4rem 0;
    &:last-child {
      font-size: 1.1rem;
      margin-top: 0.4rem;
      padding-top: 0.8rem;
    }
    .score-label {
      font-size: 0.85rem;
    }
    .score-value {
      font-size: 0.9rem;
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
    gap: 0.6rem;
    margin: 1rem 0;
  }
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
      font-size: 0.7rem;
      margin-bottom: 0.3rem;
    }
    .stat-number {
      font-size: 1.1rem;
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
    margin: 1.2rem 0;
    border-radius: 10px;
    font-size: 0.95rem;
  }
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    margin: 1rem 0;
    border-radius: 8px;
    font-size: 0.9rem;
  }
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background: ${p =>
    p.variant === 'secondary'
      ? 'rgba(255,255,255,0.1)'
      : 'linear-gradient(135deg, #22c55e, #16a34a)'};
  border: ${p => (p.variant === 'secondary' ? '2px solid rgba(255,255,255,.3)' : 'none')};
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
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    margin: 0.3rem;
    border-radius: 10px;
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const DifficultySelector = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }
  @media (max-width: 480px) {
    gap: 0.6rem;
    margin-bottom: 1.5rem;
  }
`;

const DifficultyButton = styled.button<{ selected?: boolean }>`
  background: ${p =>
    p.selected ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'rgba(255,255,255,0.1)'};
  border: 2px solid ${p => (p.selected ? '#22c55e' : 'rgba(255,255,255,0.3)')};
  border-radius: 12px;
  padding: 0.8rem 1.5rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${p =>
      p.selected ? 'linear-gradient(135deg, #16a34a, #15803d)' : 'rgba(255,255,255,0.2)'};
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(34, 197, 94, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    border-radius: 10px;
  }
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    border-radius: 8px;
  }
`;

// ======================= Types & Constants =======================
interface MoleData {
  id: number;
  holeIndex: number;
  isVisible: boolean;
  isHit: boolean;
  type: 'normal' | 'fast' | 'bonus';
  timeoutId: ReturnType<typeof setTimeout>;
  points: number;
  appearMs: number;
}

interface GameStats {
  score: number;
  hits: number;
  misses: number;
  combo: number;
  maxCombo: number;
  accuracy: number;
  specialHits: number;
}

interface TierInfo {
  name: string;
  emoji: string;
  color: string;
  minScore: number;
}

const GAME_DURATION = 60;
const TOTAL_HOLES = 9;

const TIERS: TierInfo[] = [
  { name: '챌린저', emoji: '👑', color: '#FF6B6B', minScore: 1500 },
  { name: '그랜드마스터', emoji: '💎', color: '#4ECDC4', minScore: 1200 },
  { name: '마스터', emoji: '🏆', color: '#45B7D1', minScore: 900 },
  { name: '다이아몬드', emoji: '💠', color: '#96CEB4', minScore: 700 },
  { name: '플래티넘', emoji: '⭐', color: '#FFEAA7', minScore: 500 },
  { name: '골드', emoji: '🥇', color: '#FDCB6E', minScore: 350 },
  { name: '실버', emoji: '🥈', color: '#A29BFE', minScore: 200 },
  { name: '브론즈', emoji: '🥉', color: '#E17055', minScore: 0 },
];

const DIFFICULTIES = {
  easy: { name: '쉬움', moleSpeed: 2500, spawnRate: 1500, specialChance: 0.1 },
  medium: { name: '보통', moleSpeed: 2000, spawnRate: 1200, specialChance: 0.15 },
  hard: { name: '어려움', moleSpeed: 1700, spawnRate: 650, specialChance: 0.22 },
} as const;

// ======================= Component =======================
const WhackAMole: React.FC = () => {
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'finished'>('setup');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [moles, setMoles] = useState<MoleData[]>([]);
  const [scoreFloats, setScoreFloats] = useState<
    { id: number; x: number; y: number; score: number; type: string }[]
  >([]);
  const [holeHits, setHoleHits] = useState<boolean[]>(new Array(TOTAL_HOLES).fill(false));
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    hits: 0,
    misses: 0,
    combo: 0,
    maxCombo: 0,
    accuracy: 0,
    specialHits: 0,
  });
  const [shake, setShake] = useState(false);

  const moleIdRef = useRef(0);
  const scoreIdRef = useRef(0);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // WebAudio
  const audioCtxRef = useRef<AudioContext | null>(null);
  const playHit = useCallback(() => {
    const Ctx = (window as any).AudioContext || (window as any).webkitAudioContext;
    const ctx: AudioContext = audioCtxRef.current ?? new Ctx();
    audioCtxRef.current = ctx;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(320, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.5, ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.14);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  }, []);

  const calculateTier = (finalStats: GameStats): TierInfo => {
    const accuracyBonus = finalStats.accuracy * 2;
    const comboBonus = finalStats.maxCombo * 5;
    const specialBonus = finalStats.specialHits * 10;
    const totalScore = finalStats.score + accuracyBonus + comboBonus + specialBonus;
    for (const tier of TIERS) if (totalScore >= tier.minScore) return tier;
    return TIERS[TIERS.length - 1];
  };

  const getRandomHole = useCallback(() => {
    const available = Array.from({ length: TOTAL_HOLES }, (_, i) => i).filter(
      index => !moles.some(m => m.holeIndex === index && m.isVisible)
    );
    if (available.length === 0) return Math.floor(Math.random() * TOTAL_HOLES);
    return available[Math.floor(Math.random() * available.length)];
  }, [moles]);

  const spawnSingleMole = useCallback(() => {
    if (gameState !== 'playing') return;

    const config = DIFFICULTIES[difficulty];
    const holeIndex = getRandomHole();

    let moleType: MoleData['type'] = 'normal';
    let points = 10;

    const rand = Math.random();
    if (rand < config.specialChance * 0.33) {
      moleType = 'bonus';
      points = 50;
    } else if (rand < config.specialChance) {
      moleType = 'fast';
      points = 25;
    }

    let speed = config.moleSpeed * (difficulty === 'hard' ? 0.75 : 1);
    if (moleType === 'bonus') speed *= 1.05;
    if (moleType === 'fast') speed *= 0.65;

    const appearMs = Math.max(380, Math.floor(speed * 0.8));

    const id = ++moleIdRef.current;
    const timeoutId = setTimeout(() => {
      setMoles(prev => prev.map(m => (m.id === id ? { ...m, isVisible: false } : m)));
      setStats(prev => ({
        ...prev,
        misses: prev.misses + 1,
        combo: 0,
        accuracy:
          prev.hits + prev.misses + 1 > 0 ? (prev.hits / (prev.hits + prev.misses + 1)) * 100 : 0,
      }));
      setTimeout(() => {
        setMoles(prev => prev.filter(m => m.id !== id));
      }, 400);
    }, speed);

    const newMole: MoleData = {
      id,
      holeIndex,
      isVisible: true,
      isHit: false,
      type: moleType,
      points,
      timeoutId,
      appearMs,
    };
    setMoles(prev => [...prev, newMole]);
  }, [difficulty, gameState, getRandomHole]);

  const spawnMole = useCallback(() => {
    if (gameState !== 'playing') return;
    if (difficulty === 'hard') {
      const burstCount = 2 + Math.floor(Math.random() * 2); // 2 or 3
      for (let i = 0; i < burstCount; i++) {
        const offset = 120 + Math.floor(Math.random() * 80);
        setTimeout(spawnSingleMole, i * offset);
      }
    } else {
      spawnSingleMole();
    }
  }, [difficulty, gameState, spawnSingleMole]);

  const handleMoleClick = useCallback(
    (mole: MoleData) => {
      if (mole.isHit || gameState !== 'playing') return;

      playHit();
      setShake(true);
      setTimeout(() => setShake(false), 140);

      clearTimeout(mole.timeoutId);

      setMoles(prev =>
        prev.map(m => (m.id === mole.id ? { ...m, isHit: true, isVisible: false } : m))
      );

      setHoleHits(prev => {
        const next = [...prev];
        next[mole.holeIndex] = true;
        setTimeout(() => {
          setHoleHits(p => {
            const u = [...p];
            u[mole.holeIndex] = false;
            return u;
          });
        }, 480);
        return next;
      });

      if (gameAreaRef.current) {
        const holes = gameAreaRef.current.querySelectorAll('div[data-hole]');
        const holeElem = holes[mole.holeIndex] as HTMLElement;
        if (holeElem) {
          const rect = holeElem.getBoundingClientRect();
          const containerRect = gameAreaRef.current.getBoundingClientRect();
          const id = ++scoreIdRef.current;
          setScoreFloats(prev => [
            ...prev,
            {
              id,
              x: rect.left - containerRect.left + rect.width / 2,
              y: rect.top - containerRect.top + rect.height / 2,
              score: mole.points,
              type: mole.type,
            },
          ]);
          setTimeout(() => {
            setScoreFloats(prev => prev.filter(s => s.id !== id));
          }, 1100);
        }
      }

      setStats(prev => {
        const newCombo = prev.combo + 1;
        const newMaxCombo = Math.max(prev.maxCombo, newCombo);
        const newHits = prev.hits + 1;
        const newSpecialHits = mole.type !== 'normal' ? prev.specialHits + 1 : prev.specialHits;
        const comboBonus = Math.floor(newCombo / 5) * 5;
        const totalScore = mole.points + comboBonus;
        const newAccuracy =
          newHits + prev.misses > 0 ? (newHits / (newHits + prev.misses)) * 100 : 100;

        return {
          score: prev.score + totalScore,
          hits: newHits,
          misses: prev.misses,
          combo: newCombo,
          maxCombo: newMaxCombo,
          accuracy: newAccuracy,
          specialHits: newSpecialHits,
        };
      });

      setTimeout(() => {
        setMoles(prev => prev.filter(m => m.id !== mole.id));
      }, 400);
    },
    [gameState, playHit]
  );

  const startGame = () => {
    setGameState('playing');
    setTimeLeft(GAME_DURATION);
    setStats({ score: 0, hits: 0, misses: 0, combo: 0, maxCombo: 0, accuracy: 0, specialHits: 0 });
    setMoles([]);
    setScoreFloats([]);
    setHoleHits(new Array(TOTAL_HOLES).fill(false));
  };

  const restartGame = () => {
    moles.forEach(m => clearTimeout(m.timeoutId));
    setGameState('setup');
  };

  const handleBackClick = () => {
    moles.forEach(m => clearTimeout(m.timeoutId));
    navigate(-1);
  };

  // 타이머
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

  // 스폰 루프
  useEffect(() => {
    if (gameState !== 'playing') return;
    const { spawnRate } = DIFFICULTIES[difficulty];
    const interval = setInterval(spawnMole, spawnRate);
    return () => clearInterval(interval);
  }, [gameState, difficulty, spawnMole]);

  // 끝났을 때 잔여 타임아웃 정리
  useEffect(() => {
    if (gameState !== 'finished') return;
    moles.forEach(m => clearTimeout(m.timeoutId));
  }, [gameState, moles]);

  const currentTier = calculateTier(stats);

  return (
    <GameContainer>
      <Header>
        <BackButton onClick={handleBackClick}>
          <ArrowLeft size={16} /> 게임 목록
        </BackButton>
        <Title>🔨 두더지 잡기</Title>
        <StatsPanel>
          <Stat>
            <div className="stat-label">점수</div>
            <div className="stat-value">{stats.score}</div>
          </Stat>
          <Stat highlight={stats.combo >= 5}>
            <div className="stat-label">콤보</div>
            <div className="stat-value">{stats.combo}</div>
          </Stat>
          <Stat>
            <div className="stat-label">정확도</div>
            <div className="stat-value">{Math.round(stats.accuracy)}%</div>
          </Stat>
          <Stat>
            <div className="stat-label">시간</div>
            <div className="stat-value">{timeLeft}s</div>
          </Stat>
        </StatsPanel>
      </Header>

      {gameState === 'playing' && (
        <GameArea ref={gameAreaRef} shake={shake}>
          <GameBoard>
            {Array.from({ length: TOTAL_HOLES }, (_, index) => {
              const mole = moles.find(m => m.holeIndex === index && m.isVisible);
              return (
                <Hole key={index} hasHit={holeHits[index]} data-hole={index}>
                  {holeHits[index] && <HitRing />}
                  {mole && (
                    <Mole
                      isVisible={mole.isVisible}
                      isHit={mole.isHit}
                      moleType={mole.type}
                      appearMs={mole.appearMs}
                      onPointerDown={e => {
                        e.stopPropagation();
                        handleMoleClick(mole);
                      }}
                      onMouseDown={() => handleMoleClick(mole)}
                      onContextMenu={e => e.preventDefault()}
                    />
                  )}
                </Hole>
              );
            })}
          </GameBoard>

          {scoreFloats.map(sf => (
            <ScoreFloat key={sf.id} x={sf.x} y={sf.y} type={sf.type}>
              +{sf.score}
            </ScoreFloat>
          ))}
        </GameArea>
      )}

      <GameOverlay show={gameState === 'setup'}>
        <OverlayContent>
          <div className="overlay-title">🔨 두더지 잡기</div>
          <div className="overlay-text">
            구멍에서 나오는 두더지들을 빠르게 클릭하세요!
            <br />
            연속으로 잡을수록 콤보 보너스를 받습니다.
            <br />
            <br />
            <strong>특수 두더지:</strong>
            <br />
            ⚡ 빠른 두더지: 25점 (매우 빠르게 사라짐)
            <br />
            👑 보너스 두더지: 50점
            <br />
            <br />
            60초 동안 최대한 많은 두더지를 잡아보세요!
          </div>

          <DifficultySelector>
            {Object.entries(DIFFICULTIES).map(([key, diff]) => (
              <DifficultyButton
                key={key}
                selected={difficulty === key}
                onClick={() => setDifficulty(key as 'easy' | 'medium' | 'hard')}
              >
                {diff.name}
              </DifficultyButton>
            ))}
          </DifficultySelector>

          <ActionButton onClick={startGame}>게임 시작</ActionButton>
          <ActionButton variant="secondary" onClick={handleBackClick}>
            뒤로 가기
          </ActionButton>
        </OverlayContent>
      </GameOverlay>

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
              <span className="score-label">🎯 정확도 보너스</span>
              <span className="score-value">+{Math.round(stats.accuracy * 2)}점</span>
            </ScoreItem>
            <ScoreItem delay={3}>
              <span className="score-label">🔥 콤보 보너스</span>
              <span className="score-value">+{stats.maxCombo * 5}점</span>
            </ScoreItem>
            <ScoreItem delay={4}>
              <span className="score-label">⭐ 특수 보너스</span>
              <span className="score-value">+{stats.specialHits * 10}점</span>
            </ScoreItem>
            <ScoreItem delay={5}>
              <span className="score-label">💎 총 점수</span>
              <span className="score-value" style={{ color: currentTier.color }}>
                {Math.round(
                  stats.score + stats.accuracy * 2 + stats.maxCombo * 5 + stats.specialHits * 10
                )}
                점
              </span>
            </ScoreItem>
          </ScoreBreakdown>

          <StatGrid>
            <StatCard delay={6}>
              <div className="stat-title">정확도</div>
              <div className="stat-number">{Math.round(stats.accuracy)}%</div>
            </StatCard>
            <StatCard delay={7}>
              <div className="stat-title">최고 콤보</div>
              <div className="stat-number">{stats.maxCombo}연속</div>
            </StatCard>
            <StatCard delay={8}>
              <div className="stat-title">잡은 두더지</div>
              <div className="stat-number">{stats.hits}마리</div>
            </StatCard>
            <StatCard delay={9}>
              <div className="stat-title">특수 두더지</div>
              <div className="stat-number">{stats.specialHits}마리</div>
            </StatCard>
          </StatGrid>

          <PerformanceMessage delay={10}>
            {stats.score >= 800
              ? '🏆 두더지 잡기 마스터! 완벽한 실력입니다!'
              : stats.score >= 500
                ? '⚡ 훌륭한 반사신경! 상위권 실력자!'
                : stats.score >= 300
                  ? '👍 좋은 실력이네요! 꾸준히 발전하고 있어요!'
                  : stats.score >= 150
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
  );
};

export default WhackAMole;
