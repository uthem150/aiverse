import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GameContainer,
  ContentWrapper,
  MainTitle,
  MainSubtitle,
  GameGrid,
  GameCard,
} from './GameExperience.style';

// 데이터 소스 import
import { testCategories } from '@/data/tests';

const GameExperience: React.FC = () => {
  const navigate = useNavigate();

  // 'interactive-experience' 카테고리 데이터 찾기
  const interactiveCategory = testCategories.find(
    category => category.id === 'interactive-experience'
  );

  // GameCard에서 사용할 데이터 형태로 가공
  // 'tests' 배열이 존재할 경우에만 map 함수 실행
  const interactiveGames =
    interactiveCategory?.tests.map(game => {
      // title에서 이모지와 실제 제목 분리
      const titleParts = game.title.split(' | ');
      const gameNameWithIcon = titleParts[0];
      const icon = gameNameWithIcon.match(/(\p{Emoji})/u)?.[0] || '🎮';
      const title = gameNameWithIcon.replace(/(\p{Emoji_Presentation}|\p{Emoji})/gu, '').trim();

      // features 배열 동적 생성
      const features = [];
      if (game.isNew) features.push('✨ NEW');
      if (game.isHot) features.push('🔥 HOT');
      if (game.estimatedTime) features.push(`약 ${game.estimatedTime}분`);

      return {
        id: game.id,
        icon: icon,
        title: title,
        description: game.description,
        features: features,
        bgColor: interactiveCategory.color, // 카테고리의 대표 색상 사용
        path: `/interactive/${game.id}`,
      };
    }) || []; // interactiveCategory.tests가 없으면 빈 배열 반환

  const handleGameClick = (path: string) => {
    navigate(path);
  };

  // 렌더링할 게임이 없는 경우를 대비
  if (!interactiveGames.length) {
    return (
      <GameContainer>
        <ContentWrapper>
          <MainTitle>🎮 인터랙티브 게임</MainTitle>
          <MainSubtitle>현재 이용 가능한 게임이 없습니다.</MainSubtitle>
        </ContentWrapper>
      </GameContainer>
    );
  }

  return (
    <>
      <GameContainer>
        <ContentWrapper>
          <MainTitle>🎮 인터랙티브 게임</MainTitle>
          <MainSubtitle>
            실시간 상호작용이 가능한 재미있는 게임들을 체험해보세요.
            <br />
            반응속도와 마우스 컨트롤 실력을 테스트하고 발전시켜보세요.
          </MainSubtitle>

          <GameGrid>
            {interactiveGames.map((game, index) => (
              <GameCard
                key={game.id}
                bgColor={game.bgColor}
                delay={index * 0.1} // 애니메이션 딜레이 소폭 감소
                onClick={() => handleGameClick(game.path)}
              >
                <div className="game-icon">{game.icon}</div>
                <div className="game-title">{game.title}</div>
                <div className="game-description">{game.description}</div>

                <div className="game-features">
                  {game.features.map((feature, idx) => (
                    <div key={idx} className="feature-tag">
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="play-button">게임 시작</div>
              </GameCard>
            ))}
          </GameGrid>
        </ContentWrapper>
      </GameContainer>
    </>
  );
};

export default GameExperience;
