import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {
  ExperienceContainer,
  ContentWrapper,
  MainTitle,
  MainSubtitle,
  CategoryGrid,
  CategoryCard,
  BackButton,
} from './InteractiveHub.style';

const InteractiveHub: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'cursor',
      icon: '🎯',
      title: '커서 인터랙션',
      description: '마우스 움직임과 클릭에 반응하는 다양한 커서 효과들을 체험해보세요',
      features: ['플루이드 트레일', '스플래시 효과', '리본 애니메이션'],
      bgColor: '#ec4899',
      available: true,
    },
    {
      id: 'background',
      icon: '🌌',
      title: '배경 체험',
      description: '몰입감 넘치는 다양한 배경 효과들로 완전히 새로운 공간을 경험하세요',
      features: ['우주 갤럭시', '하이퍼스피드', '파티클 시스템', '3D 환경'],
      bgColor: '#3b82f6',
      available: true,
    },
    {
      id: 'games',
      icon: '🎮',
      title: '인터랙티브 게임',
      description: '직접 조작하고 상호작용할 수 있는 재미있는 인터랙티브 게임들',
      features: ['타겟 슈팅', '오브 컬렉터', '반응속도 측정', '마우스 컨트롤'],
      bgColor: '#8b5cf6',
      available: true,
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === 'cursor') {
      navigate('/interactive/cursor');
    } else if (categoryId === 'background') {
      navigate('/interactive/background');
    } else if (categoryId === 'games') {
      navigate('/interactive/games');
    }
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
      <ExperienceContainer>
        <BackButton onClick={handleBackClick}>
          <ArrowLeft size={16} />
          홈으로
        </BackButton>

        <ContentWrapper>
          <MainTitle>🎮 인터랙티브 체험관</MainTitle>
          <MainSubtitle>
            최신 웹 기술로 구현된 몰입형 인터랙티브 경험들을 만나보세요.
            <br />각 카테고리별로 특별히 설계된 체험공간에서 새로운 디지털 세계를 탐험하세요.
          </MainSubtitle>

          <CategoryGrid>
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                bgColor={category.bgColor}
                delay={index * 0.2}
                onClick={() => category.available && handleCategoryClick(category.id)}
                style={{
                  cursor: category.available ? 'pointer' : 'not-allowed',
                  opacity: category.available ? 1 : 0.7,
                }}
              >
                <div className="category-icon">{category.icon}</div>
                <div className="category-title">{category.title}</div>
                <div className="category-description">{category.description}</div>

                <div className="category-features">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="feature-tag">
                      {feature}
                    </div>
                  ))}
                </div>
              </CategoryCard>
            ))}
          </CategoryGrid>
        </ContentWrapper>
      </ExperienceContainer>
    </>
  );
};

export default InteractiveHub;
