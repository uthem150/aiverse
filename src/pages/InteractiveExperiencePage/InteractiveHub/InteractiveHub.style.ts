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

export const ExperienceContainer = styled.div`
  flex: 1;
  background: linear-gradient(
    135deg,
    #0f0f23 0%,
    #1a0a3a 25%,
    #2d1b4e 50%,
    #1a0a3a 75%,
    #0f0f23 100%
  );
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem 2rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 1rem 1.5rem;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    padding: 4.5rem 1rem 0.5rem 1rem;
  }
`;

export const BackButton = styled.button`
  position: fixed;
  top: 6rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 0.8rem 1.2rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1200px;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(45deg, #a855f7, #ec4899, #3b82f6, #f59e0b);
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
  margin-left: auto;
  margin-right: auto;
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

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
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

export const CategoryCard = styled.div<{ bgColor: string; delay: number }>`
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

    .category-icon {
      transform: scale(1.1) rotate(5deg);
    }
  }

  .category-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
    display: block;
  }

  .category-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.8rem;
  }

  .category-description {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }

  .category-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    justify-content: center;

    .feature-tag {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.25rem 0.6rem;
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

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;

    .category-icon {
      font-size: 2.5rem;
      margin-bottom: 0.8rem;
    }

    .category-title {
      font-size: 1.4rem;
      margin-bottom: 0.6rem;
    }

    .category-description {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.2rem 0.8rem;

    .category-icon {
      font-size: 2rem;
    }

    .category-title {
      font-size: 1.2rem;
    }

    .category-description {
      font-size: 0.85rem;
    }

    .feature-tag {
      font-size: 0.7rem;
      padding: 0.2rem 0.5rem;
    }
  }
`;
