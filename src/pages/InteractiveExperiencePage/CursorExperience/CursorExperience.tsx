import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {
  CursorContainer,
  BackButton,
  MainContent,
  ExperienceArea,
  GuideText,
  ControlBar,
  ControlTitle,
  CursorGrid,
  CursorCard,
} from './CursorExperience.style';

// React-bits 컴포넌트들 임포트
import SplashCursor from '@/components/reactBits/SplashCursor/SplashCursor';
import BlobCursor from '@/components/reactBits/BlobCursor/BlobCursor';
import Ribbons from '@/components/reactBits/Ribbons/Ribbons';

type CursorType = 'fluid' | 'splash' | 'ribbon' | 'none';

const CursorExperience: React.FC = () => {
  const navigate = useNavigate();
  const [activeCursor, setActiveCursor] = useState<CursorType>('fluid');

  const cursorOptions = [
    {
      type: 'fluid' as CursorType,
      icon: '🌀',
      name: '플루이드 트레일',
      description: '마우스를 따라다니는 부드러운 액체 효과',
    },
    {
      type: 'splash' as CursorType,
      icon: '💥',
      name: '스플래시 이펙트',
      description: '클릭할 때마다 화려한 파티클이 폭발합니다',
    },
    {
      type: 'ribbon' as CursorType,
      icon: '🎀',
      name: '리본',
      description: '리본 체조의 부드러운 리본 흐름을 마음껏 표현해보세요',
    },
    {
      type: 'none' as CursorType,
      icon: '✋',
      name: '기본 커서',
      description: '모든 효과를 끄고 기본 상태로 돌아갑니다',
    },
  ];

  const getCurrentCursorInfo = () => {
    const current = cursorOptions.find(option => option.type === activeCursor);
    return current || cursorOptions[0];
  };

  const handleBackClick = () => {
    navigate('/interactive-hub');
  };

  return (
    <>
      <CursorContainer>
        {/* 커서 효과들 */}
        {activeCursor === 'splash' && <SplashCursor />}
        {activeCursor === 'ribbon' && (
          <div
            style={{
              overflow: 'hidden',
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100vw',
              height: '100vh',
              zIndex: 1,
            }}
          >
            <Ribbons
              baseThickness={40}
              colors={['#5227FF']}
              speedMultiplier={0.6}
              maxAge={800}
              baseFriction={0.75}
              enableFade={true}
              enableShaderEffect={true}
              baseSpring={0.03}
              // offsetFactor={0.01}
              effectAmplitude={0.7}
            />
          </div>
        )}
        {activeCursor === 'fluid' && (
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              width: '10vw',
              height: '10vh',
              zIndex: 9999,
            }}
          >
            <BlobCursor
              blobType="circle"
              fillColor="#5227FF"
              trailCount={5}
              sizes={[60, 125, 75]}
              innerSizes={[20, 35, 25]}
              innerColor="rgba(255,255,255,0.8)"
              opacities={[0.6, 0.6, 0.6]}
              shadowColor="rgba(0,0,0,0.75)"
              shadowBlur={5}
              shadowOffsetX={10}
              shadowOffsetY={10}
              filterStdDeviation={30}
              useFilter={true}
              fastDuration={0.1}
              slowDuration={0.5}
              zIndex={100}
            />
          </div>
        )}

        {/* 헤더 */}
        <BackButton onClick={handleBackClick}>
          <ArrowLeft size={16} />
          체험관으로
        </BackButton>

        {/* 메인 컨텐츠 */}
        <MainContent>
          <ExperienceArea>
            <GuideText>
              <div className="highlight">{getCurrentCursorInfo().name}</div>
              커서를 움직이고 클릭하여 효과를 확인해보세요
            </GuideText>
          </ExperienceArea>
        </MainContent>
        {/* 하단 컨트롤 바 */}
        <ControlBar>
          <ControlTitle>커서 효과 선택</ControlTitle>
          <CursorGrid>
            {cursorOptions.map(option => (
              <CursorCard
                key={option.type}
                active={activeCursor === option.type}
                onClick={() => setActiveCursor(option.type)}
              >
                <span className="cursor-icon">{option.icon}</span>
                <div className="cursor-content">
                  <span className="cursor-name">{option.name}</span>
                  <span className="cursor-description">{option.description}</span>
                </div>
              </CursorCard>
            ))}
          </CursorGrid>
        </ControlBar>
      </CursorContainer>
    </>
  );
};

export default CursorExperience;
