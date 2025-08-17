import Typography from '@/components/common/Typography/Typography';
import SEO from '@/components/common/SEO/SEO';
import { StyledPage, StyledHero, StyledSection, StyledGrid, StyledCard } from './AboutPage.style';

const AboutPage = () => {
  return (
    <StyledPage>
      <SEO
        title="소개 | AIverse-phi"
        description="AIverse-phi는 AI 테스트와 인터랙티브 경험을 통해 누구나 쉽고 재미있게 AI를 체험하도록 돕습니다."
        keywords="소개, AIverse-phi 소개"
        type="website"
      />

      <StyledHero>
        <Typography variant="h1" align="center" responsive>
          AIverse-phi 소개
        </Typography>
        <Typography variant="body1" align="center" color="#6B7280">
          AI 테스트와 두뇌활동 게임으로, 누구나 AI를 즐겁게 경험하는 세상을 만듭니다.
        </Typography>
      </StyledHero>

      <StyledSection>
        <Typography variant="h3" align="center">
          우리의 미션
        </Typography>
        <Typography variant="body1" align="center" color="#6B7280">
          “AI를 더 쉽고 유익하게—재미는 기본, 인사이트는 덤”
        </Typography>
      </StyledSection>

      <StyledSection>
        <Typography variant="h3" align="center">
          핵심 가치
        </Typography>
        <StyledGrid>
          <StyledCard>
            <Typography variant="h4">접근성</Typography>
            <Typography variant="body2" color="#6B7280">
              누구나 브라우저만 있으면 바로 체험
            </Typography>
          </StyledCard>
          <StyledCard>
            <Typography variant="h4">재미</Typography>
            <Typography variant="body2" color="#6B7280">
              게임처럼 즐기며 배우는 경험
            </Typography>
          </StyledCard>
          <StyledCard>
            <Typography variant="h4">신뢰</Typography>
            <Typography variant="body2" color="#6B7280">
              명확한 가이드와 프라이버시 우선
            </Typography>
          </StyledCard>
        </StyledGrid>
      </StyledSection>
    </StyledPage>
  );
};

export default AboutPage;
