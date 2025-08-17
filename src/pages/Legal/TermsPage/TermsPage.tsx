import Typography from '@/components/common/Typography/Typography';
import SEO from '@/components/common/SEO/SEO';
import { StyledPage, StyledHero, StyledSection, StyledCard, StyledMeta } from './TermsPage.style';

const TermsPage = () => {
  return (
    <StyledPage>
      <SEO
        title="이용약관 | AIverse-phi"
        description="AIverse-phi 서비스 이용에 관한 약관을 안내합니다."
        keywords="이용약관, 서비스 약관"
        type="website"
      />

      <StyledHero>
        <Typography variant="h1" align="center" responsive>
          이용약관
        </Typography>
        <Typography variant="body1" align="center" color="#6B7280">
          AIverse-phi를 이용하기 전에 아래 약관을 확인해 주세요.
        </Typography>
        <StyledMeta>시행일: 2025-01-01 · 최종 업데이트: 2025-01-01</StyledMeta>
      </StyledHero>

      <StyledSection>
        <Typography variant="h3">1. 목적</Typography>
        <StyledCard>
          <Typography variant="body1">
            본 약관은 AIverse-phi(이하 “서비스”)의 이용과 관련하여 회사와 이용자 간의 권리·의무 및
            책임사항을 규정합니다.
          </Typography>
        </StyledCard>
      </StyledSection>

      <StyledSection>
        <Typography variant="h3">2. 이용자 의무</Typography>
        <StyledCard>
          <ol>
            <li>관련 법령 및 약관 준수</li>
            <li>타인의 권리 침해 금지</li>
            <li>서비스의 정상적인 운영을 방해하는 행위 금지</li>
          </ol>
        </StyledCard>
      </StyledSection>

      <StyledSection>
        <Typography variant="h3">3. 서비스의 변경 및 중단</Typography>
        <StyledCard>
          <Typography variant="body1">
            회사는 서비스 개선을 위해 내용 일부를 변경하거나 중단할 수 있습니다. 중요한 변경 시
            사전에 공지합니다.
          </Typography>
        </StyledCard>
      </StyledSection>

      <StyledSection>
        <Typography variant="h3">4. 책임의 제한</Typography>
        <StyledCard>
          <Typography variant="body1">
            회사는 불가항력 또는 이용자 귀책 사유로 인한 손해에 대해 책임을 지지 않습니다.
          </Typography>
        </StyledCard>
      </StyledSection>
    </StyledPage>
  );
};

export default TermsPage;
