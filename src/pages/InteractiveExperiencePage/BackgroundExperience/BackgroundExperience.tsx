import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Info, X } from 'lucide-react';
import {
  BackgroundContainer,
  BackgroundCanvas,
  OverlayHeader,
  InfoPanel,
  InfoToggle,
  CloseButton,
  ControlBar,
  ControlTitle,
  BackgroundGrid,
  BackgroundCard,
  BackButton,
} from './BackgroundExperience.style';

interface BackgroundEffect {
  id: string;
  icon: string;
  name: string;
  description: string;
  color: string;
}

const BackgroundExperience: React.FC = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [activeBackground, setActiveBackground] = useState('galaxy');
  const [showInfo, setShowInfo] = useState(false);

  const backgrounds: BackgroundEffect[] = [
    {
      id: 'galaxy',
      icon: '🌌',
      name: '은하수',
      description: '별들이 반짝이는 무한한 우주',
      color: '#4c1d95',
    },
    {
      id: 'hyperspeed',
      icon: '⚡',
      name: '하이퍼스피드',
      description: '빛의 속도로 이동하는 느낌',
      color: '#dc2626',
    },
    {
      id: 'mystic-orbs',
      icon: '🔮',
      name: '신비한 오브',
      description: '떠다니는 마법의 구체들',
      color: '#7c3aed',
    },
    {
      id: 'flow-ribbons',
      icon: '🌊',
      name: '플로우 리본',
      description: '부드럽게 흐르는 파도',
      color: '#0891b2',
    },
    {
      id: 'particle-system',
      icon: '✨',
      name: '파티클 시스템',
      description: '무수한 입자들의 춤',
      color: '#ca8a04',
    },
    {
      id: 'dark-veil',
      icon: '🌑',
      name: '다크 베일',
      description: '신비로운 어둠의 장막',
      color: '#374151',
    },
    {
      id: 'cube-3d',
      icon: '📦',
      name: '3D 큐브',
      description: '회전하는 3차원 도형들',
      color: '#059669',
    },
    {
      id: 'default',
      icon: '🌃',
      name: '기본 배경',
      description: '깔끔한 그라데이션',
      color: '#6366f1',
    },
  ];

  const getCurrentBackground = () => {
    return backgrounds.find(bg => bg.id === activeBackground) || backgrounds[0];
  };

  // 배경 애니메이션 구현
  const drawGalaxy = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number
  ) => {
    ctx.fillStyle = '#0a0a1a';
    ctx.fillRect(0, 0, width, height);

    // 별들 그리기
    for (let i = 0; i < 200; i++) {
      const x = (i * 7 + time * 0.5) % width;
      const y = (i * 13) % height;
      const size = Math.sin(time * 0.003 + i) * 2 + 1;

      ctx.fillStyle = `hsl(${240 + Math.sin(i) * 60}, 80%, ${50 + Math.sin(time * 0.002 + i) * 30}%)`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const drawHyperspeed = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number
  ) => {
    ctx.fillStyle = '#000510';
    ctx.fillRect(0, 0, width, height);

    // 광선 효과
    for (let i = 0; i < 100; i++) {
      const x = width / 2;
      const y = height / 2;
      const angle = (i / 100) * Math.PI * 2;
      const speed = (time * 0.01 + i * 0.1) % 1;
      const length = speed * Math.min(width, height) * 0.8;

      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;

      const gradient = ctx.createLinearGradient(x, y, endX, endY);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.8, 'rgba(0, 150, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
  };

  const drawMysticOrbs = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number
  ) => {
    ctx.fillStyle = '#1a0a2e';
    ctx.fillRect(0, 0, width, height);

    // 떠다니는 오브들
    for (let i = 0; i < 15; i++) {
      const x = width / 2 + Math.sin(time * 0.001 + i) * (width * 0.3);
      const y = height / 2 + Math.cos(time * 0.0015 + i * 0.5) * (height * 0.3);
      const size = 20 + Math.sin(time * 0.002 + i) * 15;

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, `hsl(${270 + i * 30}, 80%, 60%)`);
      gradient.addColorStop(0.5, `hsl(${270 + i * 30}, 60%, 40%)`);
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const drawFlowRibbons = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number
  ) => {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // 흐르는 리본들
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.strokeStyle = `hsla(${200 + i * 20}, 80%, 60%, 0.6)`;
      ctx.lineWidth = 3;

      const offsetY = (height / 8) * i;
      for (let x = 0; x <= width; x += 10) {
        const y = offsetY + Math.sin((x + time * 2) * 0.01) * 50;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }
  };

  const drawParticleSystem = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number
  ) => {
    ctx.fillStyle = '#0a0f1c';
    ctx.fillRect(0, 0, width, height);

    // 파티클들
    for (let i = 0; i < 300; i++) {
      const x = (Math.sin(time * 0.001 + i * 0.1) * width + width) % width;
      const y = (Math.cos(time * 0.0015 + i * 0.15) * height + height) % height;
      const size = Math.sin(time * 0.003 + i) * 3 + 1;

      ctx.fillStyle = `hsl(${45 + Math.sin(i) * 60}, 80%, ${60 + Math.sin(time * 0.002 + i) * 20}%)`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const drawDarkVeil = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number
  ) => {
    // 어두운 베이스
    const gradient = ctx.createRadialGradient(
      width / 2,
      height / 2,
      0,
      width / 2,
      height / 2,
      Math.max(width, height) / 2
    );
    gradient.addColorStop(0, '#1f2937');
    gradient.addColorStop(1, '#111827');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // 신비로운 연기 효과
    for (let i = 0; i < 6; i++) {
      const x = width * (0.2 + i * 0.15);
      const y = height + Math.sin(time * 0.001 + i) * 100 - 50;

      const smokeGradient = ctx.createRadialGradient(x, y, 0, x, y, 150);
      smokeGradient.addColorStop(0, 'rgba(75, 85, 99, 0.3)');
      smokeGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = smokeGradient;
      ctx.beginPath();
      ctx.arc(x, y, 150, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const drawCube3D = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number
  ) => {
    ctx.fillStyle = '#064e3b';
    ctx.fillRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;

    // 3D 큐브들
    for (let i = 0; i < 5; i++) {
      const angle = time * 0.001 + (i * Math.PI) / 3;
      const size = 50 + i * 30;
      const x = centerX + Math.sin(angle) * (i * 40);
      const y = centerY + Math.cos(angle) * (i * 40);

      // 큐브의 앞면
      ctx.fillStyle = `hsl(${150 + i * 30}, 60%, ${50 + Math.sin(time * 0.002 + i) * 20}%)`;
      ctx.fillRect(x - size / 2, y - size / 2, size, size);

      // 큐브의 옆면 (3D 효과)
      ctx.fillStyle = `hsl(${150 + i * 30}, 60%, ${30 + Math.sin(time * 0.002 + i) * 10}%)`;
      ctx.beginPath();
      ctx.moveTo(x + size / 2, y - size / 2);
      ctx.lineTo(x + size / 2 + 20, y - size / 2 - 20);
      ctx.lineTo(x + size / 2 + 20, y + size / 2 - 20);
      ctx.lineTo(x + size / 2, y + size / 2);
      ctx.fill();
    }
  };

  const drawDefault = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number
  ) => {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#4f46e5');
    gradient.addColorStop(0.5, '#7c3aed');
    gradient.addColorStop(1, '#3730a3');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  };

  const animate = (timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    switch (activeBackground) {
      case 'galaxy':
        drawGalaxy(ctx, width, height, timestamp);
        break;
      case 'hyperspeed':
        drawHyperspeed(ctx, width, height, timestamp);
        break;
      case 'mystic-orbs':
        drawMysticOrbs(ctx, width, height, timestamp);
        break;
      case 'flow-ribbons':
        drawFlowRibbons(ctx, width, height, timestamp);
        break;
      case 'particle-system':
        drawParticleSystem(ctx, width, height, timestamp);
        break;
      case 'dark-veil':
        drawDarkVeil(ctx, width, height, timestamp);
        break;
      case 'cube-3d':
        drawCube3D(ctx, width, height, timestamp);
        break;
      default:
        drawDefault(ctx, width, height, timestamp);
        break;
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeBackground]);

  const handleBackClick = () => {
    navigate('/magic-experience');
  };

  const currentBg = getCurrentBackground();

  return (
    <>
      <BackgroundContainer>
        <BackgroundCanvas ref={canvasRef} />

        {/* 오버레이 헤더 */}
        <OverlayHeader>
          <BackButton onClick={handleBackClick}>
            <ArrowLeft size={16} />
            체험관으로
          </BackButton>

          <InfoToggle onClick={() => setShowInfo(!showInfo)}>
            <Info size={20} />
          </InfoToggle>
        </OverlayHeader>

        {/* 정보 패널 */}
        <InfoPanel show={showInfo}>
          <CloseButton onClick={() => setShowInfo(false)}>
            <X size={20} />
          </CloseButton>
          <div className="info-content">
            <div className="info-icon">{currentBg.icon}</div>
            <div className="info-title">{currentBg.name}</div>
            <div className="info-description">{currentBg.description}</div>
            <div className="info-tip">하단 컨트롤에서 다른 배경으로 전환할 수 있습니다</div>
          </div>
        </InfoPanel>

        {/* 하단 컨트롤 바 */}
        <ControlBar>
          <ControlTitle>배경 효과 선택</ControlTitle>
          <BackgroundGrid>
            {backgrounds.map(bg => (
              <BackgroundCard
                key={bg.id}
                active={activeBackground === bg.id}
                color={bg.color}
                onClick={() => setActiveBackground(bg.id)}
              >
                <span className="bg-icon">{bg.icon}</span>
                <div className="bg-content">
                  <span className="bg-name">{bg.name}</span>
                  <span className="bg-description">{bg.description}</span>
                </div>
              </BackgroundCard>
            ))}
          </BackgroundGrid>
        </ControlBar>
      </BackgroundContainer>
    </>
  );
};

export default BackgroundExperience;
