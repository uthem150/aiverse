import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

// 애니메이션 정의
const pulse = keyframes`
  0%, 100% { 
    transform: scale(1); 
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.3);
  }
  50% { 
    transform: scale(1.05); 
    box-shadow: 0 0 50px rgba(99, 102, 241, 0.6);
  }
`;

const flash = keyframes`
  0%, 100% { 
    background: linear-gradient(135deg, #ef4444, #dc2626);
    box-shadow: 0 0 40px rgba(239, 68, 68, 0.8);
  }
  50% { 
    background: linear-gradient(135deg, #dc2626, #b91c1c);
    box-shadow: 0 0 60px rgba(239, 68, 68, 1);
  }
`;

const success = keyframes`
  0% { 
    transform: scale(1); 
    background: linear-gradient(135deg, #10b981, #059669);
  }
  25% { 
    transform: scale(1.1) rotate(5deg); 
    background: linear-gradient(135deg, #059669, #047857);
  }
  50% { 
    transform: scale(1.15) rotate(-5deg); 
    background: linear-gradient(135deg, #10b981, #059669);
  }
  75% { 
    transform: scale(1.1) rotate(5deg); 
    background: linear-gradient(135deg, #059669, #047857);
  }
  100% { 
    transform: scale(1) rotate(0deg); 
    background: linear-gradient(135deg, #10b981, #059669);
  }
`;

const warning = keyframes`
  0%, 100% { 
    transform: translateX(0) rotate(0deg); 
    background: linear-gradient(135deg, #f59e0b, #d97706);
  }
  10% { transform: translateX(-10px) rotate(-3deg); }
  20% { transform: translateX(10px) rotate(3deg); }
  30% { transform: translateX(-10px) rotate(-3deg); }
  40% { transform: translateX(10px) rotate(3deg); }
  50% { 
    transform: translateX(-5px) rotate(-1deg);
    background: linear-gradient(135deg, #d97706, #b45309);
  }
  60% { transform: translateX(5px) rotate(1deg); }
  70% { transform: translateX(-5px) rotate(-1deg); }
  80% { transform: translateX(5px) rotate(1deg); }
  90% { transform: translateX(-2px) rotate(0deg); }
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

const statsReveal = keyframes`
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const buttonHover = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
`;

const difficultyPulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
`;

const speedIndicator = keyframes`
  0% { transform: scale(0) rotate(0deg); opacity: 0; }
  50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
  100% { transform: scale(1) rotate(360deg); opacity: 1; }
`;

// 난이도 설정
interface Difficulty {
  name: string;
  emoji: string;
  attempts: number;
  minWait: number;
  maxWait: number;
  readyMin: number;
  readyMax: number;
  description: string;
}

const DIFFICULTIES: Difficulty[] = [
  {
    name: '쉬움',
    emoji: '🐌',
    attempts: 3,
    minWait: 2500,
    maxWait: 4000,
    readyMin: 1500,
    readyMax: 3000,
    description: '3번 시도, 여유로운 타이밍',
  },
  {
    name: '보통',
    emoji: '⚡',
    attempts: 5,
    minWait: 2000,
    maxWait: 3500,
    readyMin: 1200,
    readyMax: 2500,
    description: '5번 시도, 적당한 타이밍',
  },
  {
    name: '어려움',
    emoji: '🔥',
    attempts: 7,
    minWait: 1500,
    maxWait: 3000,
    readyMin: 800,
    readyMax: 2000,
    description: '7번 시도, 빠른 타이밍',
  },
  {
    name: '지옥',
    emoji: '💀',
    attempts: 10,
    minWait: 1000,
    maxWait: 2500,
    readyMin: 500,
    readyMax: 1500,
    description: '10번 시도, 극한의 타이밍',
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
  { name: '초신', emoji: '⚡', color: '#FFD700', minScore: 9500 },
  { name: '신속', emoji: '🚀', color: '#00CED1', minScore: 8000 },
  { name: '번개', emoji: '⚡', color: '#4169E1', minScore: 6500 },
  { name: '빠름', emoji: '💨', color: '#32CD32', minScore: 5000 },
  { name: '민첩', emoji: '🏃', color: '#FFA500', minScore: 3500 },
  { name: '보통', emoji: '🚶', color: '#C0C0C0', minScore: 2000 },
  { name: '느림', emoji: '🐌', color: '#CD7F32', minScore: 1000 },
  { name: '거북', emoji: '🐢', color: '#808080', minScore: 0 },
];

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
  border-bottom: 2px solid rgba(99, 102, 241, 0.3);
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
  background: rgba(99, 102, 241, 0.1);
  border: 2px solid rgba(99, 102, 241, 0.3);
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
    background: rgba(99, 102, 241, 0.2);
    transform: translateY(-2px);
    ${css`
      animation: ${buttonHover} 0.6s ease-in-out;
    `}
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
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
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-shadow: 0 0 20px rgba(99, 102, 241, 0.5);

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

  ${props =>
    props.highlight &&
    css`
      animation: ${success} 0.8s ease;
    `}

  .stat-label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.2rem;
  }

  .stat-value {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${props => (props.highlight ? '#fbbf24' : '#6366f1')};
    text-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
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
  margin-top: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const ReactButton = styled.div<{
  gameState: string;
  isReady: boolean;
}>`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  border: 6px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 50%;
    background: linear-gradient(45deg, #6366f1, #8b5cf6, #22c55e, #16a34a);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${props => {
    switch (props.gameState) {
      case 'intro':
      case 'waiting':
        return css`
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          animation: ${pulse} 2s ease-in-out infinite;
        `;
      case 'ready':
        return css`
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          animation: ${flash} 0.8s ease-in-out infinite;
        `;
      case 'go':
        return css`
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          animation: ${success} 0.8s ease;

          &:before {
            opacity: 1;
          }
        `;
      case 'early':
        return css`
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
          animation: ${warning} 1s ease;
        `;
      default:
        return css`
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
        `;
    }
  }}

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  }

  .icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    ${css`
      animation: ${speedIndicator} 0.6s ease;
    `}
  }

  .main-text {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  .sub-text {
    font-size: 1.2rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
    font-size: 1.4rem;
    border: 4px solid rgba(255, 255, 255, 0.2);

    .icon {
      font-size: 3rem;
    }
    .main-text {
      font-size: 1.4rem;
    }
    .sub-text {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
    font-size: 1.2rem;

    .icon {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    .main-text {
      font-size: 1.2rem;
    }
    .sub-text {
      font-size: 0.9rem;
    }
  }
`;

const Instructions = styled.div`
  color: white;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 600px;
  opacity: 0.9;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 2.5rem;
    padding: 1.2rem 1.5rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 10px;
  }
`;

const ResultsPanel = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 1rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 600px;
  animation: ${resultAppear} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    margin-top: 1rem;
    border-radius: 12px;
  }
`;

const ResultsTitle = styled.h3`
  color: white;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const StatCard = styled.div<{ delay?: number }>`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
  animation: ${statsReveal} 0.6s ease-out ${props => (props.delay || 0) * 0.1}s both;

  .stat-title {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: #6366f1;
    text-shadow: 0 0 15px rgba(99, 102, 241, 0.6);
  }

  .stat-desc {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 0.3rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 10px;

    .stat-title {
      font-size: 0.8rem;
    }
    .stat-number {
      font-size: 1.6rem;
    }
    .stat-desc {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    border-radius: 8px;

    .stat-title {
      font-size: 0.75rem;
    }
    .stat-number {
      font-size: 1.4rem;
    }
    .stat-desc {
      font-size: 0.75rem;
    }
  }
`;

const ResultsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.8rem;
  margin: 1rem 0;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 0.6rem;
  }
`;

const ResultItem = styled.div<{ isBest?: boolean; delay?: number }>`
  background: ${props =>
    props.isBest ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'rgba(255, 255, 255, 0.05)'};
  border: 2px solid ${props => (props.isBest ? '#22c55e' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 10px;
  padding: 0.8rem 0.6rem;
  text-align: center;
  color: white;
  animation: ${statsReveal} 0.6s ease-out ${props => (props.delay || 0) * 0.05}s both;

  ${props =>
    props.isBest &&
    css`
      animation:
        ${statsReveal} 0.6s ease-out ${props.delay || 0 * 0.05}s both,
        ${tierGlow} 2s ease-in-out infinite 1s;
    `}

  .attempt {
    font-size: 0.7rem;
    opacity: 0.8;
    margin-bottom: 0.3rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .time {
    font-size: 1.1rem;
    font-weight: bold;
    text-shadow: ${props => (props.isBest ? '0 0 10px rgba(34, 197, 94, 0.8)' : 'none')};
  }

  @media (max-width: 768px) {
    padding: 0.6rem 0.4rem;
    border-radius: 8px;

    .attempt {
      font-size: 0.65rem;
    }
    .time {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.3rem;

    .attempt {
      font-size: 0.6rem;
    }
    .time {
      font-size: 0.9rem;
    }
  }
`;

const GameOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  backdrop-filter: blur(30px);
  border: 2px solid rgba(99, 102, 241, 0.4);
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
    0 0 100px rgba(99, 102, 241, 0.2);

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
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

const DifficultySelector = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem; /* PC 간격 줄임 */
  margin: 0.8rem 0; /* PC 마진 줄임 */

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    margin: 1.5rem 0;
  }
`;

const DifficultyCard = styled.button<{ selected: boolean }>`
  background: ${props =>
    props.selected ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255, 255, 255, 0.05)'};
  border: 2px solid ${props => (props.selected ? '#6366f1' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 10px; /* 더 작게 */
  padding: 0.6rem; /* PC 패딩 줄임 */
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  ${props =>
    props.selected &&
    css`
      animation: ${difficultyPulse} 2s ease-in-out infinite;
    `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(99, 102, 241, 0.3);
    border-color: #6366f1;
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
  background: linear-gradient(135deg, ${props => props.color}20, ${props => props.color}40);
  border: 2px solid ${props => props.color};
  border-radius: 12px; /* 더 작게 */
  padding: 0.4rem 0.8rem; /* PC 패딩 더 많이 줄임 */
  margin-bottom: 0.6rem; /* 마진 더 줄임 */
  font-size: 1.2rem; /* PC 폰트 더 작게 */
  font-weight: 700;
  color: ${props => props.color};
  text-shadow: 0 0 20px ${props => props.color}80;
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
  animation: ${statsReveal} 0.6s ease-out ${props => (props.delay || 0) * 0.1}s both;

  &:last-child {
    border-bottom: none;
    font-size: 1rem; /* PC 폰트 더 작게 */
    font-weight: 700;
    margin-top: 0.3rem; /* 마진 더 줄임 */
    padding-top: 0.6rem; /* 패딩 더 줄임 */
    border-top: 2px solid rgba(99, 102, 241, 0.3);
  }

  .score-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.8rem; /* PC 폰트 더 작게 */
  }

  .score-value {
    color: #6366f1;
    font-weight: 600;
    font-size: 0.85rem; /* PC 폰트 더 작게 */
    text-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
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

const PerformanceMessage = styled.div<{ delay?: number }>`
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 10px; /* 더 작게 */
  padding: 0.6rem 1rem; /* PC 패딩 더 줄임 */
  margin: 0.6rem 0; /* 마진 더 줄임 */
  color: #8b5cf6;
  font-weight: 600;
  font-size: 0.85rem; /* PC 폰트 더 작게 */
  animation: ${statsReveal} 0.6s ease-out ${props => (props.delay || 0) * 0.1}s both;
  text-shadow: 0 0 10px rgba(139, 92, 246, 0.3);

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
  background: ${props =>
    props.variant === 'secondary'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'linear-gradient(135deg, #6366f1, #8b5cf6)'};
  border: ${props =>
    props.variant === 'secondary' ? '2px solid rgba(255, 255, 255, 0.3)' : 'none'};
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
    box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
    ${css`
      animation: ${buttonHover} 0.6s ease-in-out;
    `}

    &:before {
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

interface GameStats {
  attempts: number[];
  bestTime: number;
  averageTime: number;
  currentAttempt: number;
  consistency: number;
  improvement: number;
}

const ReactionTest: React.FC = () => {
  const [gameState, setGameState] = useState<
    'setup' | 'intro' | 'waiting' | 'ready' | 'go' | 'early' | 'result' | 'complete'
  >('setup');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(DIFFICULTIES[1]);
  const [startTime, setStartTime] = useState<number>(0);
  const [reactionTime, setReactionTime] = useState<number>(0);
  const [stats, setStats] = useState<GameStats>({
    attempts: [],
    bestTime: Infinity,
    averageTime: 0,
    currentAttempt: 0,
    consistency: 0,
    improvement: 0,
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  // 티어 계산 함수
  const calculateTier = (finalStats: GameStats): TierInfo => {
    if (finalStats.attempts.length === 0) return TIERS[TIERS.length - 1];

    const speedScore = Math.max(0, 2000 - finalStats.bestTime);
    const consistencyScore = Math.max(0, 500 - finalStats.consistency) * 2;
    const improvementScore = Math.max(0, finalStats.improvement * 10);
    const difficultyMultiplier =
      selectedDifficulty.name === '지옥'
        ? 2.5
        : selectedDifficulty.name === '어려움'
          ? 2
          : selectedDifficulty.name === '보통'
            ? 1.5
            : 1;

    const totalScore = (speedScore + consistencyScore + improvementScore) * difficultyMultiplier;

    for (const tier of TIERS) {
      if (totalScore >= tier.minScore) {
        return tier;
      }
    }
    return TIERS[TIERS.length - 1];
  };

  const calculateConsistency = (attempts: number[]): number => {
    if (attempts.length < 2) return 0;
    const mean = attempts.reduce((a, b) => a + b, 0) / attempts.length;
    const variance = attempts.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / attempts.length;
    return Math.sqrt(variance);
  };

  const calculateImprovement = (attempts: number[]): number => {
    if (attempts.length < 2) return 0;
    const firstHalf = attempts.slice(0, Math.ceil(attempts.length / 2));
    const secondHalf = attempts.slice(Math.ceil(attempts.length / 2));
    const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
    const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
    return Math.max(0, firstAvg - secondAvg);
  };

  const getStateMessage = () => {
    switch (gameState) {
      case 'intro':
      case 'waiting':
        return {
          main: '준비하세요...',
          sub: '빨간색이 되면 기다리세요!',
          icon: '⚡',
        };
      case 'ready':
        return {
          main: '기다리세요...',
          sub: '아직 클릭하지 마세요!',
          icon: '🛑',
        };
      case 'go':
        return {
          main: '클릭!',
          sub: `${reactionTime}ms`,
          icon: '🚀',
        };
      case 'early':
        return {
          main: '너무 빨라요!',
          sub: '초록색을 기다리세요',
          icon: '⚠️',
        };
      default:
        return {
          main: '클릭해서 시작',
          sub: '반응속도를 테스트하세요',
          icon: '🎯',
        };
    }
  };

  const startTest = useCallback(() => {
    setGameState('waiting');

    const randomDelay =
      selectedDifficulty.minWait +
      Math.random() * (selectedDifficulty.maxWait - selectedDifficulty.minWait);

    timeoutRef.current = setTimeout(() => {
      setGameState('ready');

      const readyDelay =
        selectedDifficulty.readyMin +
        Math.random() * (selectedDifficulty.readyMax - selectedDifficulty.readyMin);

      timeoutRef.current = setTimeout(() => {
        setGameState('go');
        setStartTime(Date.now());
      }, readyDelay);
    }, randomDelay);
  }, [selectedDifficulty]);

  const handleClick = useCallback(() => {
    switch (gameState) {
      case 'intro':
      case 'result':
        startTest();
        break;

      case 'waiting':
      case 'ready':
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setGameState('early');
        setTimeout(() => {
          setGameState('result');
        }, 1500);
        break;

      case 'go': {
        const endTime = Date.now();
        const reaction = endTime - startTime;
        setReactionTime(reaction);

        setStats(prev => {
          const newAttempts = [...prev.attempts, reaction];
          const newBestTime = Math.min(prev.bestTime, reaction);
          const newAverageTime = newAttempts.reduce((a, b) => a + b, 0) / newAttempts.length;
          const newCurrentAttempt = prev.currentAttempt + 1;
          const newConsistency = calculateConsistency(newAttempts);
          const newImprovement = calculateImprovement(newAttempts);

          return {
            attempts: newAttempts,
            bestTime: newBestTime,
            averageTime: newAverageTime,
            currentAttempt: newCurrentAttempt,
            consistency: newConsistency,
            improvement: newImprovement,
          };
        });

        setTimeout(() => {
          if (stats.currentAttempt + 1 >= selectedDifficulty.attempts) {
            setGameState('complete');
          } else {
            setGameState('result');
          }
        }, 1000);
        break;
      }

      case 'early':
        setGameState('result');
        break;

      case 'complete':
        restartTest();
        break;
    }
  }, [gameState, startTime, stats.currentAttempt, selectedDifficulty.attempts, startTest]);

  const restartTest = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setGameState('setup');
    setStats({
      attempts: [],
      bestTime: Infinity,
      averageTime: 0,
      currentAttempt: 0,
      consistency: 0,
      improvement: 0,
    });
    setReactionTime(0);
  };

  const handleBackClick = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    navigate(-1);
  };

  const startGameWithDifficulty = () => {
    setGameState('intro');
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const message = getStateMessage();
  const isGameActive = ['intro', 'waiting', 'ready', 'go', 'early', 'result'].includes(gameState);
  const showResults = stats.attempts.length > 0;
  const currentTier = calculateTier(stats);

  return (
    <GameContainer>
      <Header>
        <BackButton onClick={handleBackClick}>
          <ArrowLeft size={16} />
          게임 목록
        </BackButton>
        <Title>⚡ 반응속도 테스트</Title>
        <StatsPanel>
          <Stat>
            <div className="stat-label">시도</div>
            <div className="stat-value">
              {stats.currentAttempt}/{selectedDifficulty.attempts}
            </div>
          </Stat>
          <Stat highlight={stats.bestTime !== Infinity && stats.bestTime < 250}>
            <div className="stat-label">최고기록</div>
            <div className="stat-value">
              {stats.bestTime === Infinity ? '-' : `${stats.bestTime}ms`}
            </div>
          </Stat>
          <Stat>
            <div className="stat-label">평균</div>
            <div className="stat-value">
              {stats.attempts.length === 0 ? '-' : `${Math.round(stats.averageTime)}ms`}
            </div>
          </Stat>
          <Stat>
            <div className="stat-label">일관성</div>
            <div className="stat-value">
              {stats.attempts.length < 2 ? '-' : `±${Math.round(stats.consistency)}ms`}
            </div>
          </Stat>
        </StatsPanel>
      </Header>

      {isGameActive && (
        <GameArea>
          <ReactButton gameState={gameState} isReady={gameState === 'ready'} onClick={handleClick}>
            <div className="icon">{message.icon}</div>
            <div className="main-text">{message.main}</div>
            <div className="sub-text">{message.sub}</div>
          </ReactButton>

          <Instructions>
            {gameState === 'intro' && (
              <>
                파란색 ⚡ → 빨간색 🛑 → 초록색 🟢이 되면 즉시 클릭하세요!
                <br />
                선택한 난이도: {selectedDifficulty.emoji} {selectedDifficulty.name} (
                {selectedDifficulty.attempts}번 시도)
              </>
            )}
            {gameState === 'waiting' && '파란색에서 빨간색으로 바뀔 때까지 기다리세요...'}
            {gameState === 'ready' &&
              '빨간색에서 초록색으로 바뀔 때까지 기다리세요! 아직 클릭하지 마세요!'}
            {gameState === 'go' && '훌륭합니다! 다음 라운드를 위해 다시 클릭하세요.'}
            {gameState === 'early' && '너무 빨리 클릭했습니다. 초록색이 될 때까지 기다리세요!'}
            {gameState === 'result' &&
              stats.currentAttempt < selectedDifficulty.attempts &&
              '다음 시도를 위해 클릭하세요.'}
          </Instructions>

          {showResults && (
            <ResultsPanel>
              <ResultsTitle>📊 현재 기록</ResultsTitle>

              <StatCard delay={1}>
                <div className="stat-title">평균 반응속도</div>
                <div className="stat-number">{Math.round(stats.averageTime)}ms</div>
                <div className="stat-desc">
                  {stats.averageTime < 200
                    ? '초인적!'
                    : stats.averageTime < 250
                      ? '매우 빠름'
                      : stats.averageTime < 300
                        ? '빠름'
                        : stats.averageTime < 350
                          ? '보통'
                          : '느림'}
                </div>
              </StatCard>

              <ResultsList>
                {stats.attempts.map((time, index) => (
                  <ResultItem key={index} isBest={time === stats.bestTime} delay={index}>
                    <div className="attempt">시도 {index + 1}</div>
                    <div className="time">{time}ms</div>
                  </ResultItem>
                ))}
              </ResultsList>
            </ResultsPanel>
          )}
        </GameArea>
      )}

      <GameOverlay show={gameState === 'setup'}>
        <OverlayContent>
          <div className="overlay-title">⚡ 반응속도 테스트</div>
          <div className="overlay-text">
            화면의 색상 변화에 맞춰 최대한 빠르게 반응하세요!
            <br />
            파란색 → 빨간색 → 초록색이 되면 즉시 클릭!
            <br />
            일관된 빠른 반응을 유지할수록 높은 점수를 얻습니다.
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

          <ActionButton onClick={startGameWithDifficulty}>게임 시작</ActionButton>
          <ActionButton variant="secondary" onClick={handleBackClick}>
            뒤로 가기
          </ActionButton>
        </OverlayContent>
      </GameOverlay>

      <GameOverlay show={gameState === 'complete'}>
        <OverlayContent>
          <div className="overlay-title">🏁 테스트 완료!</div>

          <TierBadge color={currentTier.color}>
            {currentTier.emoji} {currentTier.name}
          </TierBadge>

          <ScoreBreakdown>
            <ScoreItem delay={1}>
              <span className="score-label">⚡ 속도 점수</span>
              <span className="score-value">{Math.max(0, 2000 - stats.bestTime)}점</span>
            </ScoreItem>
            <ScoreItem delay={2}>
              <span className="score-label">🎯 일관성 점수</span>
              <span className="score-value">
                +{Math.max(0, Math.round((500 - stats.consistency) * 2))}점
              </span>
            </ScoreItem>
            <ScoreItem delay={3}>
              <span className="score-label">📈 향상도 점수</span>
              <span className="score-value">+{Math.round(stats.improvement * 10)}점</span>
            </ScoreItem>
            <ScoreItem delay={4}>
              <span className="score-label">🔥 난이도 배수</span>
              <span className="score-value">
                x
                {selectedDifficulty.name === '지옥'
                  ? 2.5
                  : selectedDifficulty.name === '어려움'
                    ? 2
                    : selectedDifficulty.name === '보통'
                      ? 1.5
                      : 1}
              </span>
            </ScoreItem>
            <ScoreItem delay={5}>
              <span className="score-label">💎 총 점수</span>
              <span className="score-value" style={{ color: currentTier.color }}>
                {Math.round(
                  (Math.max(0, 2000 - stats.bestTime) +
                    Math.max(0, (500 - stats.consistency) * 2) +
                    Math.round(stats.improvement * 10)) *
                    (selectedDifficulty.name === '지옥'
                      ? 2.5
                      : selectedDifficulty.name === '어려움'
                        ? 2
                        : selectedDifficulty.name === '보통'
                          ? 1.5
                          : 1)
                )}
                점
              </span>
            </ScoreItem>
          </ScoreBreakdown>

          <StatCard delay={6}>
            <div className="stat-title">상세 분석</div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginTop: '1rem',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#22c55e', fontSize: '1.4rem', fontWeight: 'bold' }}>
                  {stats.bestTime}ms
                </div>
                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>최고 기록</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#6366f1', fontSize: '1.4rem', fontWeight: 'bold' }}>
                  ±{Math.round(stats.consistency)}ms
                </div>
                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>편차</div>
              </div>
            </div>
          </StatCard>

          <PerformanceMessage delay={7}>
            {selectedDifficulty.name === '지옥' && stats.bestTime < 250
              ? '💀 지옥 난이도에서 250ms 이하! 당신은 반응속도의 신!'
              : stats.bestTime < 250
                ? '⚡ 초인적인 반응속도! 번개보다 빠르네요!'
                : stats.bestTime < 300
                  ? '🚀 매우 빠른 반응속도! 뛰어난 반사신경!'
                  : stats.bestTime < 450
                    ? '👍 빠른 반응속도! 평균보다 뛰어나요!'
                    : stats.bestTime < 500
                      ? '😊 적당한 반응속도입니다!'
                      : '💪 더 연습하면 빨라질 거예요!'}
            <br />
            <small>일반적인 평균 반응속도는 450-650ms입니다.</small>
          </PerformanceMessage>

          <div style={{ marginTop: '2rem' }}>
            <ActionButton onClick={restartTest}>🔄 다시 도전</ActionButton>
            <ActionButton variant="secondary" onClick={handleBackClick}>
              📋 게임 목록
            </ActionButton>
          </div>
        </OverlayContent>
      </GameOverlay>
    </GameContainer>
  );
};

export default ReactionTest;
