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
import Particles from '@/components/reactBits/Particles/Particles';
import Cubes from '@/components/reactBits/Cubes/Cubes';
import Orb from '@/components/reactBits/Orb/Orb';
import Waves from '@/components/reactBits/Waves/Waves';

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
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#000000', // 어두운 우주 배경
            overflow: 'hidden',
          }}
        >
          <Hyperspeed
            effectOptions={{
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 3,
              carLightsFade: 0.4,
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000, // 완전히 어두운 배경
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xff1744, 0xe91e63, 0x9c27b0],
                rightCars: [0x03a9f4, 0x00bcd4, 0x009688],
                sticks: 0x00e676,
              },
              distortion: 'turbulentDistortion',
            }}
          />
        </div>
      ),
    },
    {
      id: 'dark-veil',
      icon: '🌊',
      name: '선형 물결',
      description: '신비로운 선형 물결',
      color: '#374151',
      component: (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, #220d8a 0%, #1d0728 100%)',
            overflow: 'hidden',
          }}
        >
          <Waves
            lineColor="#fff"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>
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
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, #1a0a2e 0%, #0a0a1a 100%)',
            overflow: 'hidden',
          }}
        >
          {/* 인터랙티브 배경 파티클 */}
          <Particles
            count={80}
            color="#8b5cf6"
            mouseInteraction={true}
            mouseRadius={120}
            mouseForce={0.6}
          />

          {/* 여러 개의 오브들을 절대 위치로 배치 */}
          <div
            style={{
              position: 'absolute',
              top: '15%',
              left: '15%',
              width: '200px',
              height: '200px',
              pointerEvents: 'auto',
            }}
          >
            <Orb hue={270} hoverIntensity={0.5} rotateOnHover={true} forceHoverState={false} />
          </div>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '20%',
              width: '150px',
              height: '150px',
              pointerEvents: 'auto',
            }}
          >
            <Orb hue={300} hoverIntensity={0.4} rotateOnHover={true} forceHoverState={false} />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '15%',
              left: '45%',
              width: '180px',
              height: '180px',
              transform: 'translateX(-50%)',
              pointerEvents: 'auto',
            }}
          >
            <Orb hue={240} hoverIntensity={0.6} rotateOnHover={true} forceHoverState={false} />
          </div>
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
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, #0a0f1c 0%, #1a1a2e 50%, #16213e 100%)',
            overflow: 'hidden',
          }}
        >
          <Particles
            count={300}
            color="#fbbf24"
            mouseInteraction={true}
            mouseRadius={200}
            mouseForce={1.2}
          />
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
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #064e3b 0%, #0f172a 50%, #1e293b 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Cubes
            gridSize={10}
            maxAngle={60}
            radius={4}
            duration={{ enter: 0.3, leave: 0.6 }}
            cellGap={12}
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
        {/* 배경 렌더러 - 이벤트 차단 방지 */}
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
            <div className="info-tip">
              {currentBg.id === 'hyperspeed' && '마우스를 클릭하고 드래그하면 속도가 빨라집니다! '}
              {currentBg.id === 'galaxy' && '마우스를 움직이면 별들이 반응합니다! '}
              {currentBg.id === 'mystic-orbs' && '오브들 위에 마우스를 올려보세요! '}
              {currentBg.id === 'particle-system' && '마우스로 파티클들과 상호작용해보세요! '}
              {currentBg.id === 'cube-3d' && '마우스를 움직이거나 터치하여 큐브들을 기울여보세요! '}
              하단 컨트롤에서 다른 배경으로 전환할 수 있습니다
            </div>
          </div>
        </InfoPanel>

        {/* 하단 컨트롤 바 */}
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
