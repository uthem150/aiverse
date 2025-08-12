import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const targetAppear = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(180deg);
    opacity: 0.8;
  }
  100% {
    transform: scale(1) rotate(360deg);
    opacity: 1;
  }
`;

const targetPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(239, 68, 68, 0.8);
  }
`;

const hitEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const scoreFloat = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
    opacity: 0;
  }
`;

export const GameContainer = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

export const Header = styled.div`
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
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const BackButton = styled.button`
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
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #ef4444, #f97316);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const StatsPanel = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Stat = styled.div`
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
    color: #ef4444;
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

export const GameArea = styled.div`
  flex: 1;
  position: relative;
  margin-top: 120px;
  padding: 2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 140px;
  }
`;

export const Target = styled.div<{ x: number; y: number; size: number }>`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(circle, #ef4444 0%, #dc2626 50%, #b91c1c 100%);
  border-radius: 50%;
  cursor: crosshair;
  animation:
    ${targetAppear} 0.3s ease-out,
    ${targetPulse} 2s ease-in-out infinite;
  border: 3px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
  z-index: 10;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    background: white;
    border-radius: 50%;
  }

  &:hover {
    animation-play-state: paused;
    transform: scale(1.1);
  }
`;

export const HitEffect = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, #22c55e 0%, #16a34a 50%, transparent 100%);
  border-radius: 50%;
  animation: ${hitEffect} 0.5s ease-out forwards;
  pointer-events: none;
  z-index: 20;
`;

export const ScoreFloat = styled.div<{ x: number; y: number; score: number }>`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  color: #22c55e;
  font-size: 1.5rem;
  font-weight: 700;
  animation: ${scoreFloat} 1s ease-out forwards;
  pointer-events: none;
  z-index: 30;
  text-shadow: 0 0 10px rgba(34, 197, 94, 0.8);

  &:before {
    content: '+${props => props.score}';
  }
`;

export const GameOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const OverlayContent = styled.div`
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(249, 115, 22, 0.1));
  backdrop-filter: blur(20px);
  border: 2px solid rgba(239, 68, 68, 0.3);
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

export const ActionButton = styled.button`
  background: linear-gradient(135deg, #ef4444, #dc2626);
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
    box-shadow: 0 10px 25px rgba(239, 68, 68, 0.4);
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

export const Countdown = styled.div<{ show: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: 700;
  color: #ef4444;
  text-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
  z-index: 500;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const ProgressBar = styled.div`
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

export const ProgressFill = styled.div<{ progress: number }>`
  width: ${props => props.progress}%;
  height: 100%;
  background: linear-gradient(90deg, #ef4444, #f97316);
  transition: width 0.1s linear;
  border-radius: 4px;
`;
