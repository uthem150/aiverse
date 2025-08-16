import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

// 애니메이션 정의 (css로 래핑)
const clickPulse = keyframes`
  0% { 
    transform: scale(1); 
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }
  50% { 
    transform: scale(0.95); 
    box-shadow: 0 0 0 20px rgba(239, 68, 68, 0);
  }
  100% { 
    transform: scale(1); 
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
`;

const comboGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 30px rgba(249, 115, 22, 0.5);
    border-color: rgba(249, 115, 22, 0.6);
  }
  50% { 
    box-shadow: 0 0 50px rgba(249, 115, 22, 0.8);
    border-color: rgba(249, 115, 22, 1);
  }
`;

const recordBreak = keyframes`
  0% { 
    transform: scale(1); 
  }
  25% { 
    transform: scale(1.1) rotate(1deg); 
  }
  50% { 
    transform: scale(1.05) rotate(-1deg); 
  }
  75% { 
    transform: scale(1.15) rotate(1deg); 
  }
  100% { 
    transform: scale(1) rotate(0deg); 
  }
`;

const speedBoost = keyframes`
  0%, 100% { 
    background: linear-gradient(135deg, #ef4444, #dc2626);
    transform: scale(1);
  }
  50% { 
    background: linear-gradient(135deg, #f59e0b, #d97706);
    transform: scale(1.05);
  }
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
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.6);
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

const GameContainer = styled.div`
  min-height: 100vh;
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
  color: white;
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
  color: white;
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: 0.5rem;

  ${props =>
    props.highlight &&
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
    color: ${props => (props.highlight ? '#fbbf24' : '#ef4444')};
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
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
    margin-top: 140px;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    margin-top: 120px;
    gap: 1rem;
  }
`;

const ClickZone = styled.div<{
  isActive: boolean;
  isCombo: boolean;
  clicks: number;
}>`
  width: 320px;
  height: 320px;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: ${props => (props.isActive ? 'pointer' : 'not-allowed')};
  transition: all 0.1s ease;
  user-select: none;
  position: relative;
  box-shadow:
    0 20px 40px rgba(239, 68, 68, 0.3),
    inset 0 0 50px rgba(255, 255, 255, 0.1);

  ${props =>
    props.isActive &&
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

  ${props =>
    props.isCombo &&
    css`
      animation: ${comboGlow} 0.5s ease-in-out infinite;
    `}

  ${props =>
    !props.isActive &&
    css`
      opacity: 0.6;
      background: linear-gradient(135deg, #6b7280, #4b5563);
    `}

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(239, 68, 68, 0.3), rgba(249, 115, 22, 0.3));
    z-index: -1;
  }

  .click-text {
    font-size: 2.2rem;
    font-weight: 700;
    color: white;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    margin-bottom: 0.5rem;
  }

  .click-count {
    font-size: 3.5rem;
    font-weight: 800;
    color: white;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }

  .click-instruction {
    font-size: 1.1rem;
    color: white;
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
  background: ${props =>
    props.selected ? 'linear-gradient(135deg, #ef4444, #dc2626)' : 'rgba(255, 255, 255, 0.1)'};
  border: 2px solid ${props => (props.selected ? '#ef4444' : 'rgba(255, 255, 255, 0.3)')};
  border-radius: 12px;
  padding: 0.8rem 1.5rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props =>
      props.selected ? 'linear-gradient(135deg, #dc2626, #b91c1c)' : 'rgba(255, 255, 255, 0.2)'};
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
  color: white;
  min-width: 220px;
  border: 2px solid rgba(239, 68, 68, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  ${props =>
    props.isHighSpeed &&
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
    color: ${props => (props.isHighSpeed ? '#fbbf24' : 'white')};
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
  width: ${props => props.progress}%;
  height: 100%;
  background: linear-gradient(90deg, #ef4444, #f59e0b, #22c55e);
  transition: width 0.1s linear;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
`;

const ComboIndicator = styled.div<{ show: boolean; combo: number }>`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 1.2rem;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;
  box-shadow: 0 10px 30px rgba(249, 158, 11, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.3);

  &::before {
    content: '${props => props.combo}x COMBO!';
  }

  @media (max-width: 768px) {
    top: -50px;
    font-size: 1.1rem;
    padding: 0.6rem 1.2rem;
  }

  @media (max-width: 480px) {
    top: -45px;
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

const Countdown = styled.div<{ show: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  font-weight: 800;
  color: #ef4444;
  text-shadow: 0 0 30px rgba(239, 68, 68, 0.8);
  z-index: 500;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
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
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(249, 115, 22, 0.1));
  backdrop-filter: blur(30px);
  border: 2px solid rgba(239, 68, 68, 0.4);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  text-align: center;
  max-width: 600px;
  width: 100%;
  position: relative;
  overflow: hidden;
  animation: ${resultAppear} 0.8s ease-out;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(239, 68, 68, 0.2);

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 24px;
    z-index: -1;
    animation: ${tierGlow} 3s ease-in-out infinite;
  }

  .overlay-title {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(45deg, #fff, #f1f5f9);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.5rem;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }

  .overlay-text {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2.5rem;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    padding: 1.8rem 1.3rem;
    margin: 1rem;
    border-radius: 20px;

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
    max-height: 85vh;
    overflow-y: auto;

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

// 티어 시스템
const TierBadge = styled.div<{ color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${props => props.color}20, ${props => props.color}40);
  border: 2px solid ${props => props.color};
  border-radius: 16px;
  padding: 0.8rem 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
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
  border-radius: 16px;
  padding: 1.5rem;
  margin: 1.5rem 0;
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
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${statsReveal} 0.6s ease-out ${props => (props.delay || 0) * 0.1}s both;

  &:last-child {
    border-bottom: none;
    font-size: 1.2rem;
    font-weight: 700;
    color: #ef4444;
    margin-top: 0.5rem;
    padding-top: 1rem;
  }

  .score-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
  }

  .score-value {
    color: #fff;
    font-weight: 600;
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
  gap: 1rem;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin: 1.2rem 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
    margin: 1rem 0;
  }
`;

const StatCard = styled.div<{ delay?: number }>`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  animation: ${statsReveal} 0.6s ease-out ${props => (props.delay || 0) * 0.1}s both;

  .stat-title {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .stat-number {
    font-size: 1.4rem;
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
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  color: #ef4444;
  font-weight: 600;
  animation: ${statsReveal} 0.6s ease-out ${props => (props.delay || 0) * 0.1}s both;
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
  background: ${props =>
    props.variant === 'secondary'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'linear-gradient(135deg, #ef4444, #dc2626)'};
  border: ${props =>
    props.variant === 'secondary' ? '2px solid rgba(255, 255, 255, 0.3)' : 'none'};
  border-radius: 14px;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.5rem;
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
    box-shadow: 0 15px 35px rgba(239, 68, 68, 0.4);
    animation: ${buttonHover} 0.6s ease-in-out;

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

// 타입 정의
type GameMode = 'sprint' | 'endurance' | 'precision';

interface GameStats {
  clicks: number;
  timeLeft: number;
  cps: number;
  maxCps: number;
  totalClicks: number;
  combo: number;
  maxCombo: number;
  accuracy: number;
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

// 상수 정의
const GAME_MODES: Record<GameMode, ModeSettings> = {
  sprint: {
    duration: 10,
    name: '스프린트',
    description: '10초 동안 최대한 많이 클릭',
  },
  endurance: {
    duration: 30,
    name: '지구력',
    description: '30초 동안 꾸준한 클릭 유지',
  },
  precision: {
    duration: 60,
    name: '정밀도',
    description: '60초 동안 정확하고 빠른 클릭',
  },
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

const SpeedClicker: React.FC = () => {
  const [gameState, setGameState] = useState<'setup' | 'countdown' | 'playing' | 'finished'>(
    'setup'
  );
  const [gameMode, setGameMode] = useState<GameMode>('sprint');
  const [countdown, setCountdown] = useState(3);
  const [stats, setStats] = useState<GameStats>({
    clicks: 0,
    timeLeft: GAME_MODES.sprint.duration,
    cps: 0,
    maxCps: 0,
    totalClicks: 0,
    combo: 0,
    maxCombo: 0,
    accuracy: 100,
  });
  const [clickTimes, setClickTimes] = useState<number[]>([]);
  const [showCombo, setShowCombo] = useState(false);
  const [personalBest, setPersonalBest] = useState<Record<GameMode, number>>({
    sprint: 0,
    endurance: 0,
    precision: 0,
  });

  const gameTimerRef = useRef<NodeJS.Timeout | null>(null);
  const cpsUpdateRef = useRef<NodeJS.Timeout | null>(null);
  const lastClickTimeRef = useRef<number>(0);

  // 티어 계산 함수
  const calculateTier = (finalStats: GameStats): TierInfo => {
    const modeMultiplier = {
      sprint: 1,
      endurance: 0.8,
      precision: 0.6,
    };

    const adjustedCPS = finalStats.maxCps * modeMultiplier[gameMode];
    const comboBonus = finalStats.maxCombo * 0.1;
    const accuracyBonus = (finalStats.accuracy / 100) * 2;
    const totalScore = adjustedCPS + comboBonus + accuracyBonus;

    for (const tier of TIERS) {
      if (totalScore >= tier.minScore) {
        return tier;
      }
    }
    return TIERS[TIERS.length - 1];
  };

  const calculateCPS = useCallback(() => {
    const now = Date.now();
    const recentClicks = clickTimes.filter(time => now - time <= 1000);
    return recentClicks.length;
  }, [clickTimes]);

  const handleClick = useCallback(() => {
    if (gameState !== 'playing') return;

    const now = Date.now();
    const timeSinceLastClick = now - lastClickTimeRef.current;

    setClickTimes(prev => {
      const newTimes = [...prev, now].filter(time => now - time <= 5000);
      return newTimes;
    });

    setStats(prev => {
      const newClicks = prev.clicks + 1;
      const newTotalClicks = prev.totalClicks + 1;

      let newCombo = prev.combo;
      if (timeSinceLastClick < 500) {
        newCombo = prev.combo + 1;
        if (newCombo >= 10 && newCombo % 5 === 0) {
          setShowCombo(true);
          setTimeout(() => setShowCombo(false), 1000);
        }
      } else {
        newCombo = 1;
      }

      const newMaxCombo = Math.max(prev.maxCombo, newCombo);

      const targetInterval = gameMode === 'sprint' ? 100 : gameMode === 'endurance' ? 150 : 200;
      const accuracyScore = Math.max(0, 100 - Math.abs(timeSinceLastClick - targetInterval) / 10);
      const newAccuracy = Math.round((prev.accuracy * (newClicks - 1) + accuracyScore) / newClicks);

      return {
        ...prev,
        clicks: newClicks,
        totalClicks: newTotalClicks,
        combo: newCombo,
        maxCombo: newMaxCombo,
        accuracy: newAccuracy,
      };
    });

    lastClickTimeRef.current = now;
  }, [gameState, gameMode]);

  const startGame = () => {
    setGameState('countdown');
    setCountdown(3);
    setStats({
      clicks: 0,
      timeLeft: GAME_MODES[gameMode].duration,
      cps: 0,
      maxCps: 0,
      totalClicks: 0,
      combo: 0,
      maxCombo: 0,
      accuracy: 100,
    });
    setClickTimes([]);
    lastClickTimeRef.current = 0;

    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          setGameState('playing');

          gameTimerRef.current = setInterval(() => {
            setStats(prevStats => {
              const newTimeLeft = prevStats.timeLeft - 1;
              if (newTimeLeft <= 0) {
                setGameState('finished');
                return { ...prevStats, timeLeft: 0 };
              }
              return { ...prevStats, timeLeft: newTimeLeft };
            });
          }, 1000);

          // CPS 업데이트
          cpsUpdateRef.current = setInterval(() => {
            const now = Date.now();
            const recentClicks = clickTimes.filter(time => now - time <= 1000);
            const currentCps = recentClicks.length;

            setStats(prevStats => {
              const newMaxCps = Math.max(prevStats.maxCps, currentCps);
              return { ...prevStats, cps: currentCps, maxCps: newMaxCps };
            });
          }, 100);

          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const endGame = useCallback(() => {
    if (gameTimerRef.current) clearInterval(gameTimerRef.current);
    if (cpsUpdateRef.current) clearInterval(cpsUpdateRef.current);

    if (stats.clicks > personalBest[gameMode]) {
      const newBest = { ...personalBest, [gameMode]: stats.clicks };
      setPersonalBest(newBest);
    }
  }, [stats.clicks, personalBest, gameMode]);

  const resetGame = () => {
    if (gameTimerRef.current) clearInterval(gameTimerRef.current);
    if (cpsUpdateRef.current) clearInterval(cpsUpdateRef.current);
    setGameState('setup');
    setShowCombo(false);
  };

  const handleBackClick = () => {
    if (gameTimerRef.current) clearInterval(gameTimerRef.current);
    if (cpsUpdateRef.current) clearInterval(cpsUpdateRef.current);
    // navigate(-1); // 실제 프로젝트에서는 navigate 사용
    console.log('Back to game list');
  };

  useEffect(() => {
    if (gameState === 'finished') {
      endGame();
    }
  }, [gameState, endGame]);

  useEffect(() => {
    return () => {
      if (gameTimerRef.current) clearInterval(gameTimerRef.current);
      if (cpsUpdateRef.current) clearInterval(cpsUpdateRef.current);
    };
  }, []);

  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();
    document.addEventListener('touchstart', preventDefault, { passive: false });
    document.addEventListener('touchmove', preventDefault, { passive: false });

    return () => {
      document.removeEventListener('touchstart', preventDefault);
      document.removeEventListener('touchmove', preventDefault);
    };
  }, []);

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
          <ArrowLeft size={16} />
          게임 목록
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
            <div className="stat-label">콤보</div>
            <div className="stat-value">{stats.combo}</div>
          </Stat>
          <Stat>
            <div className="stat-label">시간</div>
            <div className="stat-value">{stats.timeLeft}s</div>
          </Stat>
        </StatsPanel>
      </Header>

      {(gameState === 'playing' || gameState === 'countdown') && (
        <GameArea>
          <Countdown show={gameState === 'countdown'}>
            {countdown > 0 ? countdown : 'START!'}
          </Countdown>

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

            <div style={{ position: 'relative' }}>
              <ClickZone
                isActive={isGameActive}
                isCombo={stats.combo >= 10}
                clicks={stats.clicks}
                onClick={handleClick}
                onTouchStart={handleClick}
              >
                <div className="click-text">
                  {isGameActive ? 'CLICK!' : gameState === 'countdown' ? '준비...' : '완료'}
                </div>
                <div className="click-count">{stats.clicks}</div>
                <div className="click-instruction">{isGameActive ? '빠르게 클릭하세요!' : ''}</div>
              </ClickZone>

              <ComboIndicator show={showCombo} combo={stats.combo} />
            </div>
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
            연속 클릭으로 콤보를 쌓고 높은 CPS를 달성해보세요.
            <br />
            <br />
            <strong>팁:</strong>
            <br />
            • 일정한 리듬으로 클릭하세요
            <br />
            • 모바일에서는 터치가 더 빠를 수 있습니다
            <br />
            • 손목을 사용하지 말고 손가락을 사용하세요
            <br />
            <br />
            게임 모드를 선택하세요:
          </div>

          <GameModeSelector>
            {(Object.keys(GAME_MODES) as GameMode[]).map(mode => (
              <ModeButton key={mode} selected={gameMode === mode} onClick={() => setGameMode(mode)}>
                <div>{GAME_MODES[mode].name}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                  {GAME_MODES[mode].duration}초
                </div>
                <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>최고: {personalBest[mode]}</div>
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
              <span className="score-label">🔥 최대 콤보</span>
              <span className="score-value">{stats.maxCombo}연속</span>
            </ScoreItem>
            <ScoreItem delay={4}>
              <span className="score-label">🎯 정확도</span>
              <span className="score-value">{stats.accuracy}%</span>
            </ScoreItem>
            <ScoreItem delay={5}>
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
              <div className="stat-title">평균 CPS</div>
              <div className="stat-number">
                {Math.round((stats.clicks / GAME_MODES[gameMode].duration) * 10) / 10}
              </div>
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
            <StatCard delay={9}>
              <div className="stat-title">클릭 효율</div>
              <div className="stat-number">{Math.round(stats.accuracy)}%</div>
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
