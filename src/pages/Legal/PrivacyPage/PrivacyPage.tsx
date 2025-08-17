import Typography from '@/components/common/Typography/Typography';
import SEO from '@/components/common/SEO/SEO';
import {
  StyledPage,
  StyledHero,
  StyledSection,
  StyledCard,
  StyledMeta,
} from './PrivacyPage.style';

const PrivacyPage = () => {
  return (
    <StyledPage>
      {/* 페이지 전용 SEO(레이아웃의 기본값을 덮어씀) */}
      <SEO
        title="개인정보처리방침 | AIverse-phi"
        description="AIverse-phi의 개인정보 수집 항목, 이용 목적, 보관 기간, 제3자 제공 및 이용자 권리에 대해 안내합니다."
        keywords="개인정보처리방침, 프라이버시, 개인정보"
        type="website"
      />

      <StyledHero>
        <Typography variant="h1" align="center" responsive>
          개인정보처리방침
        </Typography>
        <Typography variant="body1" align="center" color="#6B7280">
          이용자의 개인정보를 안전하게 보호하기 위한 AIverse-phi의 약속과 정책을 안내합니다.
        </Typography>
        <StyledMeta>시행일: 2025-01-01 · 최종 업데이트: 2025-01-01</StyledMeta>
      </StyledHero>

      <StyledSection>
        <Typography variant="h3">1. 수집하는 개인정보 항목</Typography>
        <StyledCard>
          <Typography variant="body1">
            서비스 제공 및 이용자 문의 대응을 위해 다음 정보를 수집할 수 있습니다.
          </Typography>
          <ul>
            <li>필수: 쿠키/디바이스 정보(로그/접속기록, 서비스 이용기록)</li>
            <li>선택: 이메일, 닉네임(이벤트/문의 시)</li>
          </ul>
        </StyledCard>
      </StyledSection>

      <StyledSection>
        <Typography variant="h3">2. 개인정보의 이용 목적</Typography>
        <StyledCard>
          <ul>
            <li>서비스 제공 및 품질 향상, 오류 모니터링</li>
            <li>이벤트/고객문의 응대, 공지 전달</li>
            <li>이용 행태 분석(집계/통계) 및 서비스 개선</li>
          </ul>
        </StyledCard>
      </StyledSection>

      <StyledSection>
        <Typography variant="h3">3. 보관 및 파기</Typography>
        <StyledCard>
          <Typography variant="body1">
            법령에 따라 보관이 필요한 경우를 제외하고, 이용 목적 달성 시 지체 없이 파기합니다.
          </Typography>
        </StyledCard>
      </StyledSection>

      <StyledSection>
        <Typography variant="h3">4. 제3자 제공 및 처리위탁</Typography>
        <StyledCard>
          <Typography variant="body1">
            법령에 근거하거나 이용자 동의가 있는 경우를 제외하고 제3자에게 제공하지 않습니다.
            원활한 서비스 제공을 위해 필요한 경우 처리업무를 위탁할 수 있으며, 이 경우 수탁사와
            보호조치를 계약으로 명시합니다.
          </Typography>
        </StyledCard>
      </StyledSection>

      <StyledSection>
        <Typography variant="h3">5. 이용자와 법정대리인의 권리</Typography>
        <StyledCard>
          <Typography variant="body1">
            열람·정정·삭제·처리정지 요구권을 행사할 수 있으며, 문의는 아래 연락처로 요청해 주세요.
          </Typography>
        </StyledCard>
      </StyledSection>

      <StyledSection>
        <Typography variant="h3">6. 문의처</Typography>
        <StyledCard>
          <Typography variant="body1">
            이메일: support@aiverse-phi.example
          </Typography>
        </StyledCard>
      </StyledSection>
    </StyledPage>
  );
};

export default PrivacyPage;
