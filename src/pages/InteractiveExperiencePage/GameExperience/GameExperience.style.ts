import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const cardHover = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-5px) scale(1.02);
  }
  100% {
    transform: translateY(0) scale(1);
  }
`;

const playButtonGlow = keyframes`
  0%, 100% {
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4);
  }
`;

export const GameContainer = styled.div`
  flex: 1;
  background: linear-gradient(
    135deg,
    #0f172a 0%,
    #1e293b 25%,
    #334155 50%,
    #1e293b 75%,
    #0f172a 100%
  );
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      radial-gradient(circle at 20% 30%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem 2rem;
  position: relative;
  z-index: 10;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 1rem 1.5rem;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    padding: 4.5rem 1rem 0.5rem 1rem;
  }
`;

export const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(45deg, #ef4444, #8b5cf6, #3b82f6);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 4s ease-in-out infinite;
  text-align: center;
  margin-bottom: 1rem;

  @keyframes gradientShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

export const MainSubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const GameCard = styled.div<{ bgColor: string; delay: number }>`
  background: linear-gradient(135deg, ${props => props.bgColor}20, ${props => props.bgColor}10);
  backdrop-filter: blur(20px);
  border: 2px solid ${props => props.bgColor}40;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-out ${props => props.delay}s both;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px ${props => props.bgColor}40;
    border-color: ${props => props.bgColor}60;
    animation: ${cardHover} 0.6s ease-in-out;

    &:before {
      left: 100%;
    }

    .game-icon {
      transform: scale(1.2) rotate(10deg);
    }

    .play-button {
      transform: translateY(-2px);
      animation: ${playButtonGlow} 1s ease-in-out infinite;
    }
  }

  .game-icon {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    transition: all 0.4s ease;
    display: block;
    text-align: center;
  }

  .game-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.8rem;
    text-align: center;
  }

  .game-description {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1.2rem;
    text-align: center;
  }

  .game-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    justify-content: center;
    margin-bottom: 1.5rem;

    .feature-tag {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.3rem 0.6rem;
      border-radius: 10px;
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: scale(1.05);
      }
    }
  }

  .play-button {
    background: linear-gradient(135deg, ${props => props.bgColor}, ${props => props.bgColor}dd);
    border: none;
    border-radius: 12px;
    padding: 0.8rem 1.5rem;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;

    .game-icon {
      font-size: 3rem;
      margin-bottom: 0.8rem;
    }

    .game-title {
      font-size: 1.6rem;
      margin-bottom: 0.6rem;
    }

    .game-description {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .game-features {
      margin-bottom: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.2rem 0.8rem;

    .game-icon {
      font-size: 2.5rem;
    }

    .game-title {
      font-size: 1.4rem;
    }

    .game-description {
      font-size: 0.85rem;
    }

    .feature-tag {
      font-size: 0.7rem;
      padding: 0.2rem 0.5rem;
    }

    .play-button {
      padding: 0.7rem 1.2rem;
      font-size: 0.95rem;
    }
  }
`;
