import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

/* ===== Animations ===== */
const clickPulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
  50% { transform: scale(0.95); box-shadow: 0 0 0 20px rgba(239, 68, 68, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
`;
const recordBreak = keyframes`
  0% { transform: scale(1); } 25% { transform: scale(1.1) rotate(1deg); }
  50% { transform: scale(1.05) rotate(-1deg); } 75% { transform: scale(1.15) rotate(1deg); }
  100% { transform: scale(1) rotate(0deg); }
`;
const speedBoost = keyframes`
  0%, 100% { background: linear-gradient(135deg, #ef4444, #dc2626); transform: scale(1); }
  50% { background: linear-gradient(135deg, #f59e0b, #d97706); transform: scale(1.05); }
`;
const resultAppear = keyframes`
  0% { transform: scale(0.5) translateY(50px); opacity: 0; }
  50% { transform: scale(1.05) translateY(-10px); opacity: 0.8; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
`;
const tierGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
  50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.6); }
`;
const statsReveal = keyframes`
  0% { transform: translateX(-30px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;
const buttonHover = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`;

/* ===== Styled ===== */
const GameContainer = styled.div`
  height: 100%;
  flex: 1;
  background: linear-gradient(135deg, #0f172a 0%, #dc2626 30%, #b91c1c 70%, #991b1b 100%);
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
      radial-gradient(circle at 30% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%);
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
  border-bottom: 2px solid rgba(239, 68, 68, 0.3);
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
  background: rgba(239, 68, 68, 0.1);
  border: 2px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  padding: 0.8rem 1.2rem;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background: rgba(239, 68, 68, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
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
  background: linear-gradient(45deg, #ef4444, #f97316);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
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
  color: #fff;
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: 0.5rem;
  ${p =>
    p.highlight &&
    css`
      animation: ${recordBreak} 0.6s ease;
    `}
  .stat-label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.2rem;
  }
  .stat-value {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${p => (p.highlight ? '#fbbf24' : '#ef4444')};
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
  margin-top: 1rem;
  position: relative;
  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
  }
  @media (max-width: 480px) {
    padding: 0.75rem;
    gap: 1rem;
  }
`;
const ClickZone = styled.div<{ isActive: boolean; clicks: number }>`
  width: 320px;
  height: 320px;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: ${p => (p.isActive ? 'pointer' : 'not-allowed')};
  transition: all 0.1s ease;
  user-select: none;
  position: relative;
  box-shadow:
    0 20px 40px rgba(239, 68, 68, 0.3),
    inset 0 0 50px rgba(255, 255, 255, 0.1);
  touch-action: none;
  -ms-touch-action: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  overscroll-behavior: contain;
  ${p =>
    p.isActive &&
    css`
      &:hover {
        transform: scale(1.02);
        border-color: rgba(255, 255, 255, 0.6);
        box-shadow:
          0 25px 50px rgba(239, 68, 68, 0.4),
          inset 0 0 60px rgba(255, 255, 255, 0.2);
      }
      &:active {
        animation: ${clickPulse} 0.15s ease;
      }
    `}
  ${p =>
    !p.isActive &&
    css`
      opacity: 0.6;
      background: linear-gradient(135deg, #6b7280, #4b5563);
    `}
  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(239, 68, 68, 0.3), rgba(249, 115, 22, 0.3));
    z-index: -1;
  }
  .click-text {
    font-size: 2.2rem;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    margin-bottom: 0.5rem;
  }
  .click-count {
    font-size: 3.5rem;
    font-weight: 800;
    color: #fff;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
  .click-instruction {
    font-size: 1.1rem;
    color: #fff;
    opacity: 0.9;
    margin-top: 0.5rem;
    text-align: center;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
    .click-text {
      font-size: 1.8rem;
    }
    .click-count {
      font-size: 3rem;
    }
    .click-instruction {
      font-size: 1rem;
    }
  }
  @media (max-width: 480px) {
    width: 240px;
    height: 240px;
    .click-text {
      font-size: 1.5rem;
    }
    .click-count {
      font-size: 2.5rem;
    }
    .click-instruction {
      font-size: 0.9rem;
    }
  }
`;
const GameModeSelector = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    gap: 0.8rem;
  }
  @media (max-width: 480px) {
    gap: 0.6rem;
    margin-bottom: 1.5rem;
  }
`;
const ModeButton = styled.button<{ selected?: boolean }>`
  background: ${p =>
    p.selected ? 'linear-gradient(135deg,#ef4444,#dc2626)' : 'rgba(255,255,255,.1)'};
  border: 2px solid ${p => (p.selected ? '#ef4444' : 'rgba(255,255,255,.3)')};
  border-radius: 12px;
  padding: 0.8rem 1.5rem;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${p =>
      p.selected ? 'linear-gradient(135deg,#dc2626,#b91c1c)' : 'rgba(255,255,255,.2)'};
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(239, 68, 68, 0.3);
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
const SpeedDisplay = styled.div<{ isHighSpeed: boolean }>`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 1.5rem 2rem;
  text-align: center;
  color: #fff;
  min-width: 220px;
  border: 2px solid rgba(239, 68, 68, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  ${p =>
    p.isHighSpeed &&
    css`
      animation: ${speedBoost} 1s ease-in-out infinite;
    `}
  .speed-label {
    font-size: 1rem;
    opacity: 0.8;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .speed-value {
    font-size: 2.5rem;
    font-weight: 800;
    color: ${p => (p.isHighSpeed ? '#fbbf24' : '#fff')};
    text-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
  }
  .speed-unit {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-top: 0.2rem;
  }
  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
    min-width: 180px;
    .speed-value {
      font-size: 2rem;
    }
  }
  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
    min-width: 150px;
    .speed-value {
      font-size: 1.8rem;
    }
  }
`;
const ProgressBar = styled.div`
  width: 100%;
  max-width: 500px;
  height: 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    max-width: 350px;
    height: 14px;
  }
  @media (max-width: 480px) {
    max-width: 280px;
    height: 12px;
  }
`;
const ProgressFill = styled.div<{ progress: number }>`
  width: ${p => p.progress}%;
  height: 100%;
  background: linear-gradient(90deg, #ef4444, #f59e0b, #22c55e);
  transition: width 0.1s linear;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
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
  -webkit-overflow-scrolling: touch;
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;
const OverlayContent = styled.div`
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(249, 115, 22, 0.1));
  backdrop-filter: blur(30px);
  border: 2px solid rgba(239, 68, 68, 0.4);
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
    0 0 100px rgba(16, 185, 129, 0.2);

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
    color: #ef4444;
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
    color: #ef4444;
    text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
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
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(249, 115, 22, 0.1));
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 10px; /* 더 작게 */
  padding: 0.6rem 1rem; /* PC 패딩 더 줄임 */
  margin: 0.6rem 0; /* 마진 더 줄임 */
  color: #10b981;
  font-weight: 600;
  font-size: 0.85rem; /* PC 폰트 더 작게 */
  animation: ${statsReveal} 0.6s ease-out ${p => (p.delay || 0) * 0.1}s both;
  text-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
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
    p.variant === 'secondary' ? 'rgba(255,255,255,.1)' : 'linear-gradient(135deg,#ef4444,#dc2626)'};
  border: ${p => (p.variant === 'secondary' ? '2px solid rgba(255,255,255,.3)' : 'none')};
  border-radius: 12px; /* 더 작게 */
  padding: 0.6rem 1.2rem; /* PC 패딩 더 줄임 */
  color: #fff;
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
    box-shadow: 0 15px 35px rgba(16, 185, 129, 0.4);
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

/* ===== Types / Constants ===== */
type GameMode = 't10' | 't30' | 't60';

interface GameStats {
  clicks: number;
  timeLeft: number;
  cps: number;
  maxCps: number;
  totalClicks: number;
}

interface ModeSettings {
  duration: number;
  name: string;
  description: string;
}

interface TierInfo {
  name: string;
  emoji: string;
  color: string;
  minScore: number;
}

const GAME_MODES: Record<GameMode, ModeSettings> = {
  t10: { duration: 10, name: '10초 챌린지', description: '순간 스피드 테스트' },
  t30: { duration: 30, name: '30초 챌린지', description: '지속 스피드 연습' },
  t60: { duration: 60, name: '60초 챌린지', description: '스피드 + 지구력 종합' },
};

const TIERS: TierInfo[] = [
  { name: '챌린저', emoji: '👑', color: '#FF6B6B', minScore: 12 },
  { name: '그랜드마스터', emoji: '💎', color: '#4ECDC4', minScore: 10 },
  { name: '마스터', emoji: '🏆', color: '#45B7D1', minScore: 8 },
  { name: '다이아몬드', emoji: '💠', color: '#96CEB4', minScore: 6.5 },
  { name: '플래티넘', emoji: '⭐', color: '#FFEAA7', minScore: 5 },
  { name: '골드', emoji: '🥇', color: '#FDCB6E', minScore: 3.5 },
  { name: '실버', emoji: '🥈', color: '#A29BFE', minScore: 2 },
  { name: '브론즈', emoji: '🥉', color: '#E17055', minScore: 0 },
];

/* ===== Component ===== */
const SpeedClicker: React.FC = () => {
  const [gameState, setGameState] = useState<'setup' | 'countdown' | 'playing' | 'finished'>(
    'setup'
  );
  const [gameMode, setGameMode] = useState<GameMode>('t10');
  const [countdown, setCountdown] = useState(3);
  const [stats, setStats] = useState<GameStats>({
    clicks: 0,
    timeLeft: GAME_MODES.t10.duration,
    cps: 0,
    maxCps: 0,
    totalClicks: 0,
  });

  const clickTimesRef = useRef<number[]>([]);
  const playStartRef = useRef<number>(0);

  const navigate = useNavigate();

  const [personalBest, setPersonalBest] = useState<Record<GameMode, number>>({
    t10: 0,
    t30: 0,
    t60: 0,
  });

  // timers
  const gameTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cpsUpdateRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // run guard
  const runIdRef = useRef(0);
  const gameStateRef = useRef(gameState);
  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  const clearTimers = () => {
    if (gameTimerRef.current) {
      clearInterval(gameTimerRef.current);
      gameTimerRef.current = null;
    }
    if (cpsUpdateRef.current) {
      clearInterval(cpsUpdateRef.current);
      cpsUpdateRef.current = null;
    }
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
  };

  // Tier: 10s는 순간 스피드 비중↑, 60s는 평균(지구력) 비중↑
  const calculateTier = (final: GameStats): TierInfo => {
    const avgCps = final.clicks / GAME_MODES[gameMode].duration;
    const weights =
      gameMode === 't10'
        ? { max: 0.7, avg: 0.3 }
        : gameMode === 't30'
          ? { max: 0.5, avg: 0.5 }
          : { max: 0.4, avg: 0.6 }; // t60
    const score = final.maxCps * weights.max + avgCps * weights.avg;
    for (const t of TIERS) if (score >= t.minScore) return t;
    return TIERS[TIERS.length - 1];
  };

  const handleClick = useCallback(() => {
    if (gameStateRef.current !== 'playing') return;
    const now = Date.now();

    // 최근 5초만 유지
    const newTimes = [...clickTimesRef.current, now].filter(t => now - t <= 5000);
    clickTimesRef.current = newTimes;

    setStats(prev => ({
      ...prev,
      clicks: prev.clicks + 1,
      totalClicks: prev.totalClicks + 1,
    }));
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (gameStateRef.current !== 'playing') return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  const startGame = () => {
    clearTimers();
    runIdRef.current += 1;
    const runId = runIdRef.current;
    const totalDuration = GAME_MODES[gameMode].duration;

    setGameState('countdown');
    setCountdown(3);
    setStats({
      clicks: 0,
      timeLeft: totalDuration,
      cps: 0,
      maxCps: 0,
      totalClicks: 0,
    });
    clickTimesRef.current = [];

    countdownRef.current = setInterval(() => {
      if (runId !== runIdRef.current) return;
      setCountdown(prev => {
        if (prev <= 1) {
          if (countdownRef.current) {
            clearInterval(countdownRef.current);
            countdownRef.current = null;
          }
          setGameState('playing');

          playStartRef.current = Date.now();

          // 벽시계 기반 남은 시간 계산 (깜빡임/중복 setInterval 방지)
          gameTimerRef.current = setInterval(() => {
            if (runId !== runIdRef.current) return;
            const elapsed = Math.floor((Date.now() - playStartRef.current) / 1000);
            const remaining = Math.max(0, totalDuration - elapsed);

            setStats(prev =>
              prev.timeLeft === remaining ? prev : { ...prev, timeLeft: remaining }
            );

            if (remaining <= 0) {
              if (gameTimerRef.current) {
                clearInterval(gameTimerRef.current);
                gameTimerRef.current = null;
              }
              if (gameStateRef.current === 'playing' && runId === runIdRef.current)
                setGameState('finished');
            }
          }, 200);

          // CPS 계산 (1초 창 기준)
          cpsUpdateRef.current = setInterval(() => {
            if (runId !== runIdRef.current) return;
            const now = Date.now();
            const recent = clickTimesRef.current.filter(t => now - t <= 1000);
            const cps = recent.length;
            clickTimesRef.current = clickTimesRef.current.filter(t => now - t <= 5000);
            setStats(prev => ({ ...prev, cps, maxCps: Math.max(prev.maxCps, cps) }));
          }, 100);

          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const endGame = useCallback(() => {
    setPersonalBest(prev =>
      stats.clicks > prev[gameMode] ? { ...prev, [gameMode]: stats.clicks } : prev
    );
  }, [stats.clicks, gameMode]);

  const resetGame = () => {
    runIdRef.current += 1;
    clearTimers();
    setGameState('setup');
  };
  const handleBackClick = () => {
    runIdRef.current += 1;
    clearTimers();
    navigate(-1);
  };

  useEffect(() => {
    if (gameState === 'finished') endGame();
  }, [gameState, endGame]);
  useEffect(
    () => () => {
      runIdRef.current += 1;
      clearTimers();
    },
    []
  );

  const progress =
    stats.timeLeft > 0
      ? ((GAME_MODES[gameMode].duration - stats.timeLeft) / GAME_MODES[gameMode].duration) * 100
      : 100;

  const isHighSpeed = stats.cps >= 8;
  const isGameActive = gameState === 'playing';
  const currentTier = calculateTier(stats);

  return (
    <GameContainer>
      <Header>
        <BackButton onClick={handleBackClick}>
          <ArrowLeft size={16} /> 게임 목록
        </BackButton>
        <Title>⚡ 스피드 클리커</Title>
        <StatsPanel>
          <Stat>
            <div className="stat-label">클릭</div>
            <div className="stat-value">{stats.clicks}</div>
          </Stat>
          <Stat highlight={stats.cps === stats.maxCps && stats.maxCps > 5}>
            <div className="stat-label">최고 CPS</div>
            <div className="stat-value">{stats.maxCps}</div>
          </Stat>
          <Stat>
            <div className="stat-label">시간</div>
            <div className="stat-value">{stats.timeLeft}s</div>
          </Stat>
        </StatsPanel>
      </Header>

      {(gameState === 'playing' || gameState === 'countdown') && (
        <GameArea>
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: gameState === 'countdown' ? '5rem' : '0',
              fontWeight: 800,
              color: '#ef4444',
              textShadow: '0 0 30px rgba(239,68,68,.8)',
              opacity: gameState === 'countdown' ? 1 : 0,
              transition: 'opacity .3s ease',
              pointerEvents: 'none',
              zIndex: 500,
            }}
          >
            {countdown > 0 ? countdown : 'START!'}
          </div>

          <div
            style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <SpeedDisplay isHighSpeed={isHighSpeed}>
              <div className="speed-label">현재 속도</div>
              <div className="speed-value">{stats.cps}</div>
              <div className="speed-unit">CPS</div>
            </SpeedDisplay>

            <ClickZone
              isActive={isGameActive}
              clicks={stats.clicks}
              role="button"
              tabIndex={0}
              onPointerDown={handleClick}
              onKeyDown={handleKeyDown}
              onContextMenu={e => e.preventDefault()}
            >
              <div className="click-text">
                {isGameActive ? 'CLICK!' : gameState === 'countdown' ? '준비...' : '완료'}
              </div>
              <div className="click-count">{stats.clicks}</div>
              <div className="click-instruction">{isGameActive ? '빠르게 클릭하세요!' : ''}</div>
            </ClickZone>
          </div>

          <ProgressBar>
            <ProgressFill progress={progress} />
          </ProgressBar>
        </GameArea>
      )}

      <GameOverlay show={gameState === 'setup'}>
        <OverlayContent>
          <div className="overlay-title">⚡ 스피드 클리커</div>
          <div className="overlay-text">
            제한된 시간 내에 최대한 많이 클릭하세요!
            <br />
            모드는 10초 / 30초 / 60초 챌린지이며,
            <br />
            60초 모드는 스피드와 지구력을 동시에 테스트합니다.
            <br />
            <br />
            <strong>팁:</strong>
            <br />• 일정한 리듬으로 클릭하세요
            <br />• 모바일에서는 터치가 더 빠를 수 있습니다
            <br />• 손목 대신 손가락을 사용하세요
            <br />
            <br />
            게임 모드를 선택하세요:
          </div>

          <GameModeSelector>
            {(Object.keys(GAME_MODES) as GameMode[]).map(mode => (
              <ModeButton key={mode} selected={gameMode === mode} onClick={() => setGameMode(mode)}>
                <div>{GAME_MODES[mode].name}</div>
                <div style={{ fontSize: '.7rem', opacity: 0.7 }}>최고: {personalBest[mode]}</div>
              </ModeButton>
            ))}
          </GameModeSelector>

          <ActionButton onClick={startGame}>게임 시작</ActionButton>
          <ActionButton variant="secondary" onClick={handleBackClick}>
            뒤로 가기
          </ActionButton>
        </OverlayContent>
      </GameOverlay>

      <GameOverlay show={gameState === 'finished'}>
        <OverlayContent>
          <div className="overlay-title">🏁 게임 완료!</div>

          <TierBadge color={currentTier.color}>
            {currentTier.emoji} {currentTier.name}
          </TierBadge>

          <ScoreBreakdown>
            <ScoreItem delay={1}>
              <span className="score-label">🖱️ 총 클릭</span>
              <span className="score-value">{stats.clicks}번</span>
            </ScoreItem>
            <ScoreItem delay={2}>
              <span className="score-label">⚡ 최고 CPS</span>
              <span className="score-value">{stats.maxCps} clicks/sec</span>
            </ScoreItem>
            <ScoreItem delay={3}>
              <span className="score-label">📊 평균 CPS</span>
              <span className="score-value">
                {Math.round((stats.clicks / GAME_MODES[gameMode].duration) * 10) / 10}
              </span>
            </ScoreItem>
            <ScoreItem delay={4}>
              <span className="score-label">🏆 개인 기록</span>
              <span className="score-value" style={{ color: currentTier.color }}>
                {personalBest[gameMode]}번
              </span>
            </ScoreItem>
          </ScoreBreakdown>

          <StatGrid>
            <StatCard delay={6}>
              <div className="stat-title">게임 모드</div>
              <div className="stat-number">{GAME_MODES[gameMode].name}</div>
            </StatCard>
            <StatCard delay={7}>
              <div className="stat-title">지속 시간</div>
              <div className="stat-number">{GAME_MODES[gameMode].duration}s</div>
            </StatCard>
            <StatCard delay={8}>
              <div className="stat-title">신기록 여부</div>
              <div className="stat-number">
                {stats.clicks > personalBest[gameMode]
                  ? '🎉 NEW!'
                  : stats.clicks === personalBest[gameMode]
                    ? '🏆 동점'
                    : '❌'}
              </div>
            </StatCard>
          </StatGrid>

          <PerformanceMessage delay={10}>
            {stats.maxCps >= 12
              ? '🚀 초인적인 클릭 속도! 진정한 클릭 마스터!'
              : stats.maxCps >= 10
                ? '⚡ 매우 빠른 클릭! 상위권 실력자!'
                : stats.maxCps >= 8
                  ? '👍 좋은 속도네요! 꾸준히 발전하고 있어요!'
                  : stats.maxCps >= 6
                    ? '😊 괜찮은 속도! 조금 더 연습하면 크게 향상될 거예요!'
                    : '💪 더 연습해서 클릭 속도를 높여보세요!'}
          </PerformanceMessage>

          <div style={{ marginTop: '2rem' }}>
            <ActionButton onClick={startGame}>🔄 다시 도전</ActionButton>
            <ActionButton variant="secondary" onClick={resetGame}>
              🎮 모드 변경
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

export default SpeedClicker;
