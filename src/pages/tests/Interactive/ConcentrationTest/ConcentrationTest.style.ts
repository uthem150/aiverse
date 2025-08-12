import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const targetAppear = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(180deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(360deg);
    opacity: 1;
  }
`;

const targetHit = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const scoreFlash = keyframes`
  0%, 100% {
    transform: scale(1);
    color: #10b981;
  }
  50% {
    transform: scale(1.2);
    color: #fbbf24;
  }
`;

export const ConcentrationContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const GameArea = styled.div`
  width: 100%;
  max-width: 800px;
  height: 500px;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid #334155;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  margin: 2rem 0;
  backdrop-filter: blur(10px);
`;

export const Target = styled.div<{ x: number; y: number; size: number; hit?: boolean }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  background: radial-gradient(circle, #ef4444 20%, #dc2626 50%, #991b1b 100%);
  border: 3px solid #ffffff;
  border-radius: 50%;
  cursor: crosshair;
  animation: ${props => props.hit ? targetHit : targetAppear} 0.3s ease-out;
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.6);
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 40%;
    background: #ffffff;
    border-radius: 50%;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: 20%;
    background: #ef4444;
    border-radius: 50%;
  }
`;

export const ScoreBoard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export const ScoreItem = styled.div`
  text-align: center;
  color: white;
  
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    animation: ${scoreFlash} 0.5s ease-in-out;
  }
  
  p {
    font-size: 0.9rem;
    margin: 0;
    opacity: 0.8;
  }
`;

export const StartButton = styled.button`
  background: linear-gradient(135deg, #ef4444, #dc2626);
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(239, 68, 68, 0.6);
    background: linear-gradient(135deg, #dc2626, #b91c1c);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const GameInstructions = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #ef4444, #f97316, #eab308);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 3s ease-in-out infinite;
  }
  
  p {
    font-size: 1.1rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
  }
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`;

export const Timer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const CrosshairOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    background: transparent;
  }
`;

export const ResultsContainer = styled.div`
  text-align: center;
  color: white;
  max-width: 600px;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #10b981;
  }
  
  .result-grade {
    font-size: 3rem;
    font-weight: 700;
    margin: 1rem 0;
    background: linear-gradient(45deg, #10b981, #059669);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .result-description {
    font-size: 1.1rem;
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 2rem;
  }
`;
