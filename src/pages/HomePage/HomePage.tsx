import { ArrowRight, TrendingUp, Sparkles, Gamepad2, Palette, Zap } from 'lucide-react';
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
  StyledExperienceSection,
  StyledExperienceCard,
} from './HomePage.style';
import Typography from '@/components/common/Typography/Typography';
import Button from '@/components/common/Button/Button';
import TestCard from '@/components/features/TestCard/TestCard';
import { testCategories } from '@/data/tests';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '@/components/layout/Footer/Footer';
import SplitText from '@/components/reactBits/SplitText/SplitText';
import { useMemo, useEffect } from 'react';

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // redirect 쿼리 파라미터 처리 (정적 HTML에서 전달된 경로)
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const redirectPath = urlParams.get('redirect');
    
    if (redirectPath) {
      console.log('Redirect 파라미터 감지:', redirectPath);
      
      // redirect 파라미터를 제거하고 해당 경로로 이동
      navigate(redirectPath, { replace: true });
    }
  }, [location.search, navigate]);

  // 인기 테스트들 (참여자 수 기준 상위 6개)
  const popularTests = testCategories
    .flatMap(category => category.tests)
    .sort((a, b) => (b.participantCount || 0) - (a.participantCount || 0))
    .slice(0, 6);

  // 새로운 테스트들
  const newTests = testCategories.flatMap(category => category.tests).filter(test => test.isNew);

  // const totalParticipants = testCategories
  //   .flatMap(category => category.tests)
  //   .reduce((sum, test) => sum + (test.participantCount || 0), 0);

  const totalTests = testCategories.flatMap(category => category.tests).length;

  // **동적으로 계산된 카테고리 개수**
  const totalCategories = testCategories.length;

  const allTests = useMemo(() => {
    return testCategories.flatMap(cat => cat.tests);
  }, []);

  const handleTestClick = (testId: string) => {
    const test = allTests.find(t => t.id === testId);
    if (test?.category === 'interactive-experience') {
      navigate(`/interactive/${testId}`);
    } else {
      navigate(`/test/${testId}`);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/tests/${categoryId}`);
  };

  const handleExperienceClick = () => {
    navigate('/interactive-hub');
  };

  return (
    <StyledHomePage>
      {/* Hero Section */}
      <StyledHeroSection>
        <SplitText
          text="🤖 Welcome! 🤖"
          // 크기: rem 기반 + 유동
          fontSize={'clamp(1rem, calc(1rem + 2vw), 3rem)'}
          lineHeight={1.05}
          fontWeight={800}
          textAlign="center"
          // 그라데이션(왼→오)
          gradient={'linear-gradient(90deg, #6aa8ff 0%, #8e6cff 50%, #ff7ab9 100%)'}
          // 애니메이션
          splitType="chars"
          delay={70}
          duration={0.5}
          ease="power3.out"
          from={{ opacity: 0, y: 18 }}
          to={{ opacity: 1, y: 0 }}
          loop
          yoyo
          repeatDelay={1}
          pauseWhenOffscreen={true}
        />
        <SplitText
          text="Aiverse-phi"
          // 크기: rem 기반 + 유동
          fontSize={'clamp(1rem, calc(1rem + 2vw), 3rem)'}
          lineHeight={1.05}
          fontWeight={800}
          textAlign="center"
          // 그라데이션(왼→오)
          gradient={'linear-gradient(90deg, #6aa8ff 0%, #8e6cff 50%, #ff7ab9 100%)'}
          // 애니메이션
          splitType="chars"
          delay={70}
          duration={0.5}
          ease="power3.out"
          from={{ opacity: 0, y: 18 }}
          to={{ opacity: 1, y: 0 }}
          loop
          yoyo
          repeatDelay={1}
          pauseWhenOffscreen={true}
        />
        <Typography variant="body1" align="center" color="#6B7280">
          AI의 모든 것을 체험하고 발견하는 공간 • 전 세계 300만 명 이상 참여한 인기 테스트들
        </Typography>
        {/* <Typography variant="body1" align="center" color="#6B7280">
          AI의 모든 것을 체험하고 발견하는 공간 • 전 세계 {Math.floor(totalParticipants / 10000)}만
          명이 참여한 테스트들
        </Typography> */}
        <Button variant="primary" size="large" onClick={() => navigate(`/tests`)}>
          지금 시작하기 <ArrowRight size={20} />
        </Button>
      </StyledHeroSection>

      {/* Interactive Experience Section */}
      <StyledExperienceSection>
        <StyledExperienceCard onClick={handleExperienceClick}>
          <div className="experience-header">
            <Gamepad2 size={32} />
            <div>
              <Typography variant="h3" color="#ffffff">
                🎮 인터랙티브 체험관
              </Typography>
              <Typography variant="body1" color="rgba(255, 255, 255, 0.8)">
                최신 웹 기술로 구현된 몰입형 인터랙티브 경험들
              </Typography>
            </div>
          </div>
          <div className="experience-features">
            <div className="feature">
              <Palette size={20} />
              <span>커서 인터랙션</span>
            </div>
            <div className="feature">
              <Sparkles size={20} />
              <span>배경 체험</span>
            </div>
            <div className="feature">
              <Zap size={20} />
              <span>조합 모드</span>
            </div>
          </div>
          <div className="experience-cta">
            <Typography variant="body2" color="rgba(255, 255, 255, 0.9)">
              다양한 인터랙티브 효과들을 카테고리별로 체험해보세요! ✨
            </Typography>
          </div>
        </StyledExperienceCard>
      </StyledExperienceSection>

      {/* Stats Section */}
      <StyledSection>
        <StyledStatsGrid>
          {/* <StyledStatsCard>
            <Typography variant="h3" color="#6366F1">
              {Math.floor(totalParticipants / 10000)}만+
            </Typography>
            <Typography variant="body2" color="#6B7280">
              총 참여자 수
            </Typography>
          </StyledStatsCard> */}
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
              {totalCategories}개
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

      {/* Popular Tests */}
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

      {/* New Tests */}
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
      <Footer />
    </StyledHomePage>
  );
};

export default HomePage;
