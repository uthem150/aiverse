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

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(236, 72, 153, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(236, 72, 153, 0.6);
  }
`;

export const CursorContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #0f0f23 0%,
    #1a0a3a 25%,
    #2d1b4e 50%,
    #1a0a3a 75%,
    #0f0f23 100%
  );
  position: relative;
  /* overflow: hidden; */
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
      radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const BackButton = styled.button`
  position: fixed;
  top: 6rem;
  left: 3rem;
  background: rgba(236, 72, 153, 0.1);
  border: 2px solid rgba(236, 72, 153, 0.3);
  border-radius: 12px;
  padding: 0.8rem 1.2rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 3;

  &:hover {
    background: rgba(236, 72, 153, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(236, 72, 153, 0.4);
  }

  @media (max-width: 768px) {
    top: 4.5rem;
    left: 2rem;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #ec4899, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px; /* 헤더 높이만큼 마진 */
  margin-bottom: 180px; /* 컨트롤 바 높이만큼 마진 */
  padding: 2rem;

  @media (max-width: 768px) {
    margin-top: 80px;
    margin-bottom: 200px;
    padding: 1rem;
  }
`;

export const ExperienceArea = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  position: relative;

  &:hover {
    border-color: rgba(236, 72, 153, 0.5);
    background: rgba(236, 72, 153, 0.05);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const GuideText = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  line-height: 1.6;

  .highlight {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(45deg, #ec4899, #a855f7);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    .highlight {
      font-size: 1.6rem;
    }
  }
`;

export const ControlBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(20px);
  border-top: 2px solid rgba(236, 72, 153, 0.3);
  padding: 1.5rem 2rem;
  z-index: 50;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ControlTitle = styled.h3`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  text-align: center;
  opacity: 0.8;
`;

export const CursorGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export const CursorCard = styled.div<{ active: boolean }>`
  background: ${props =>
    props.active
      ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2))'
      : 'rgba(255, 255, 255, 0.05)'};
  border: 2px solid
    ${props => (props.active ? 'rgba(236, 72, 153, 0.5)' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 12px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 250px;
  animation: ${props => (props.active ? pulseGlow : 'none')} 2s infinite;

  &:hover {
    background: linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(168, 85, 247, 0.15));
    border-color: rgba(236, 72, 153, 0.4);
    transform: translateY(-2px);
  }

  .cursor-icon {
    font-size: 1.8rem;
    flex-shrink: 0;
  }

  .cursor-content {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    flex: 1;
  }

  .cursor-name {
    color: white;
    font-weight: 600;
    font-size: 0.95rem;
  }

  .cursor-description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    min-width: unset;
    padding: 0.8rem 1rem;

    .cursor-icon {
      font-size: 1.5rem;
    }

    .cursor-name {
      font-size: 0.9rem;
    }

    .cursor-description {
      font-size: 0.75rem;
    }
  }
`;
