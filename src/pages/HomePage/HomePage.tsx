import { ArrowRight, TrendingUp } from 'lucide-react';
import {
  StyledHomePage,
  StyledHeroSection,
  StyledSection,
  StyledCategoryGrid,
  StyledCategoryCard,
  StyledCategoryIcon,
  StyledTestGrid,
  StyledSectionHeader,
  StyledStatsCard,
  StyledStatsGrid,
} from './HomePage.style';
import Typography from '@/components/common/Typography/Typography';
import Button from '@/components/common/Button/Button';
import TestCard from '@/components/features/TestCard/TestCard';
import { testCategories } from '@/data/tests';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  // 인기 테스트들 (참여자 수 기준 상위 6개)
  const popularTests = testCategories
    .flatMap(category => category.tests)
    .sort((a, b) => (b.participantCount || 0) - (a.participantCount || 0))
    .slice(0, 6);

  // 새로운 테스트들
  const newTests = testCategories.flatMap(category => category.tests).filter(test => test.isNew);

  const totalParticipants = testCategories
    .flatMap(category => category.tests)
    .reduce((sum, test) => sum + (test.participantCount || 0), 0);

  const totalTests = testCategories.flatMap(category => category.tests).length;

  const handleTestClick = (testId: string) => {
    navigate(`/test/${testId}`);
  };

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/tests/${categoryId}`);
  };

  return (
    <StyledHomePage>
      {/* Hero Section */}
      <StyledHeroSection>
        <Typography variant="h1" align="center">
          🤖 AIverse에 오신 것을 환영합니다
        </Typography>
        <Typography variant="body1" align="center" color="#6B7280">
          AI의 모든 것을 체험하고 발견하는 공간 • 전 세계 {Math.floor(totalParticipants / 10000)}만
          명이 참여한 테스트들
        </Typography>
        <Button variant="primary" size="large">
          지금 시작하기 <ArrowRight size={20} />
        </Button>
      </StyledHeroSection>

      {/* Stats Section */}
      <StyledSection>
        <StyledStatsGrid>
          <StyledStatsCard>
            <Typography variant="h3" color="#6366F1">
              {Math.floor(totalParticipants / 10000)}만+
            </Typography>
            <Typography variant="body2" color="#6B7280">
              총 참여자 수
            </Typography>
          </StyledStatsCard>
          <StyledStatsCard>
            <Typography variant="h3" color="#8B5CF6">
              {totalTests}개
            </Typography>
            <Typography variant="body2" color="#6B7280">
              다양한 테스트
            </Typography>
          </StyledStatsCard>
          <StyledStatsCard>
            <Typography variant="h3" color="#06B6D4">
              4개
            </Typography>
            <Typography variant="body2" color="#6B7280">
              테스트 카테고리
            </Typography>
          </StyledStatsCard>
        </StyledStatsGrid>
      </StyledSection>

      {/* Categories Section */}
      <StyledSection>
        <StyledSectionHeader>
          <Typography variant="h2">테스트 카테고리</Typography>
          <Typography variant="body1" color="#6B7280">
            원하는 카테고리를 선택해서 테스트를 시작해보세요
          </Typography>
        </StyledSectionHeader>

        <StyledCategoryGrid>
          {testCategories.map(category => (
            <StyledCategoryCard
              key={category.id}
              color={category.color}
              onClick={() => handleCategoryClick(category.id)}
            >
              <StyledCategoryIcon>{category.icon}</StyledCategoryIcon>
              <Typography variant="h4">{category.name}</Typography>
              <Typography variant="body2" color="#6B7280">
                {category.description}
              </Typography>
              <Typography variant="caption" color="#6B7280">
                {category.tests.length}개 테스트
              </Typography>
            </StyledCategoryCard>
          ))}
        </StyledCategoryGrid>
      </StyledSection>

      {/* Popular Tests - onClick 수정 */}
      <StyledSection>
        <StyledSectionHeader>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TrendingUp size={24} color="#EF4444" />
            <Typography variant="h2">인기 테스트</Typography>
          </div>
          <Typography variant="body1" color="#6B7280">
            가장 많은 사람들이 참여한 인기 테스트들입니다
          </Typography>
        </StyledSectionHeader>

        <StyledTestGrid>
          {popularTests.map(test => (
            <TestCard key={test.id} test={test} onClick={() => handleTestClick(test.id)} />
          ))}
        </StyledTestGrid>
      </StyledSection>

      {/* New Tests - onClick 수정 */}
      {newTests.length > 0 && (
        <StyledSection>
          <StyledSectionHeader>
            <Typography variant="h2">🆕 새로운 테스트</Typography>
            <Typography variant="body1" color="#6B7280">
              최근에 추가된 따끈따끈한 새 테스트들
            </Typography>
          </StyledSectionHeader>

          <StyledTestGrid>
            {newTests.map(test => (
              <TestCard key={test.id} test={test} onClick={() => handleTestClick(test.id)} />
            ))}
          </StyledTestGrid>
        </StyledSection>
      )}
    </StyledHomePage>
  );
};

export default HomePage;
