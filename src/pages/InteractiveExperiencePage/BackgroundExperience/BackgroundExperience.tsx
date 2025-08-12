import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Info, X, ChevronUp, ChevronDown } from 'lucide-react';
import {
  BackgroundContainer,
  BackgroundRenderer,
  OverlayHeader,
  InfoPanel,
  InfoToggle,
  CloseButton,
  ControlBar,
  ControlHeader,
  ControlContent,
  ControlTitle,
  ScrollContainer,
  BackgroundGrid,
  BackgroundCard,
  BackButton,
  ExpandButton,
} from './BackgroundExperience.style';

// React-bits 배경 컴포넌트들 임포트
import Galaxy from '@/components/reactBits/Galaxy/Galaxy';
import Hyperspeed from '@/components/reactBits/Hyperspeed/Hyperspeed';
import DarkVeil from '@/components/reactBits/DarkVeil/DarkVeil';
import Particles from '@/components/reactBits/Particles/Particles';
import Cubes from '@/components/reactBits/Cubes/Cubes';
import Orb from '@/components/reactBits/Orb/Orb';

interface BackgroundEffect {
  id: string;
  icon: string;
  name: string;
  description: string;
  color: string;
  component: React.ReactNode;
}

const BackgroundExperience: React.FC = () => {
  const navigate = useNavigate();
  const [activeBackground, setActiveBackground] = useState('galaxy');
  const [showInfo, setShowInfo] = useState(false);
  const [isControlExpanded, setIsControlExpanded] = useState(false);

  const backgrounds: BackgroundEffect[] = [
    {
      id: 'galaxy',
      icon: '🌌',
      name: '은하수',
      description: '별들이 반짝이는 무한한 우주',
      color: '#4c1d95',
      component: (
        <Galaxy
          focal={[0.5, 0.5]}
          rotation={[1.0, 0.0]}
          starSpeed={0.8}
          density={1.2}
          hueShift={140}
          speed={1.0}
          mouseInteraction={true}
          glowIntensity={0.4}
          saturation={0.2}
          mouseRepulsion={true}
          twinkleIntensity={0.5}
          rotationSpeed={0.1}
          repulsionStrength={2}
          transparent={false}
        />
      ),
    },
    {
      id: 'hyperspeed',
      icon: '⚡',
      name: '하이퍼스피드',
      description: '빛의 속도로 이동하는 느낌',
      color: '#dc2626',
      component: (
        <Hyperspeed
          effectOptions={{
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2.5,
            carLightsFade: 0.4,
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
            distortion: 'turbulentDistortion',
          }}
        />
      ),
    },
    {
      id: 'dark-veil',
      icon: '🌑',
      name: '다크 베일',
      description: '신비로운 어둠의 장막',
      color: '#374151',
      component: (
        <DarkVeil
          hueShift={0}
          noiseIntensity={0.03}
          scanlineIntensity={0.1}
          speed={0.8}
          scanlineFrequency={0.5}
          warpAmount={0.2}
          resolutionScale={1}
        />
      ),
    },
    {
      id: 'mystic-orbs',
      icon: '🔮',
      name: '신비한 오브',
      description: '떠다니는 마법의 구체들',
      color: '#7c3aed',
      component: (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, #1a0a2e 0%, #0a0a1a 100%)',
          }}
        >
          {/* 여러 개의 오브들을 배치 */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '20%',
              width: '200px',
              height: '200px',
            }}
          >
            <Orb hue={270} hoverIntensity={0.3} rotateOnHover={true} forceHoverState={false} />
          </div>
          <div
            style={{
              position: 'absolute',
              top: '60%',
              right: '25%',
              width: '150px',
              height: '150px',
            }}
          >
            <Orb hue={300} hoverIntensity={0.4} rotateOnHover={true} forceHoverState={false} />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '20%',
              left: '50%',
              width: '180px',
              height: '180px',
              transform: 'translateX(-50%)',
            }}
          >
            <Orb hue={240} hoverIntensity={0.2} rotateOnHover={true} forceHoverState={false} />
          </div>
          <Particles count={100} color="#8b5cf6" />
        </div>
      ),
    },
    {
      id: 'particle-system',
      icon: '✨',
      name: '파티클 시스템',
      description: '무수한 입자들의 춤',
      color: '#ca8a04',
      component: (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, #0a0f1c 0%, #1a1a2e 50%, #16213e 100%)',
          }}
        >
          <Particles count={300} color="#fbbf24" />
        </div>
      ),
    },
    {
      id: 'cube-3d',
      icon: '📦',
      name: '3D 큐브',
      description: '회전하는 3차원 도형들',
      color: '#059669',
      component: (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #064e3b 0%, #0f172a 50%, #1e293b 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Cubes
            gridSize={12}
            maxAngle={60}
            radius={4}
            duration={{ enter: 0.3, leave: 0.6 }}
            cellGap={8}
            borderStyle="1px solid #10b981"
            faceColor="#065f46"
            shadow="0 0 10px rgba(16, 185, 129, 0.3)"
            autoAnimate={true}
            rippleOnClick={true}
            rippleColor="#34d399"
            rippleSpeed={1.5}
          />
        </div>
      ),
    },
    {
      id: 'cosmic-deep',
      icon: '🌠',
      name: '코스믹 딥',
      description: '심우주의 신비로운 깊이',
      color: '#1e1b4b',
      component: (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse at center, #1e1b4b 0%, #0f0f23 70%, #000000 100%)',
          }}
        >
          <Galaxy
            focal={[0.5, 0.5]}
            rotation={[0.7, 0.7]}
            starSpeed={0.3}
            density={2}
            hueShift={220}
            speed={0.5}
            mouseInteraction={true}
            glowIntensity={0.6}
            saturation={0.8}
            mouseRepulsion={false}
            twinkleIntensity={0.8}
            rotationSpeed={0.05}
            autoCenterRepulsion={1}
            transparent={true}
          />
        </div>
      ),
    },
    {
      id: 'default',
      icon: '🌃',
      name: '기본 배경',
      description: '깔끔한 그라데이션',
      color: '#6366f1',
      component: (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #3730a3 100%)',
          }}
        />
      ),
    },
  ];

  const getCurrentBackground = () => {
    return backgrounds.find(bg => bg.id === activeBackground) || backgrounds[0];
  };

  const handleBackClick = () => {
    navigate('/interactive-hub');
  };

  const handleBackgroundSelect = (id: string) => {
    setActiveBackground(id);
    setIsControlExpanded(false); // 선택 후 자동으로 접기
  };

  const currentBg = getCurrentBackground();

  return (
    <>
      <BackgroundContainer>
        {/* 배경 렌더러 */}
        <BackgroundRenderer>{currentBg.component}</BackgroundRenderer>

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

        {/* 하단 컨트롤 바 - 개선된 드롭다운 형태 */}
        <ControlBar expanded={isControlExpanded}>
          <ControlHeader onClick={() => setIsControlExpanded(!isControlExpanded)}>
            <div className="current-effect">
              <span className="current-icon">{currentBg.icon}</span>
              <span className="current-name">{currentBg.name}</span>
            </div>
            <ExpandButton>
              {isControlExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
            </ExpandButton>
          </ControlHeader>

          <ControlContent expanded={isControlExpanded}>
            <ControlTitle>배경 효과 선택</ControlTitle>
            <ScrollContainer>
              <BackgroundGrid>
                {backgrounds.map(bg => (
                  <BackgroundCard
                    key={bg.id}
                    active={activeBackground === bg.id}
                    color={bg.color}
                    onClick={() => handleBackgroundSelect(bg.id)}
                  >
                    <span className="bg-icon">{bg.icon}</span>
                    <div className="bg-content">
                      <span className="bg-name">{bg.name}</span>
                      <span className="bg-description">{bg.description}</span>
                    </div>
                  </BackgroundCard>
                ))}
              </BackgroundGrid>
            </ScrollContainer>
          </ControlContent>
        </ControlBar>
      </BackgroundContainer>
    </>
  );
};

export default BackgroundExperience;
