import {
  StyledHomePage,
  StyledSection,
  StyledGrid,
  StyledCard,
} from "./HomePage.style";
import Typography from "@/components/common/Typography/Typography";
import Button from "@/components/common/Button/Button";

const HomePage = () => {
  return (
    <StyledHomePage>
      <StyledSection>
        <Typography variant="h1" align="center">
          AIverse에 오신 것을 환영합니다
        </Typography>
        <Typography variant="body1" align="center" color="#6B7280">
          AI의 모든 것을 체험하고 발견하는 공간
        </Typography>
      </StyledSection>

      <StyledSection>
        <Typography variant="h2" align="center">
          디자인 시스템 테스트
        </Typography>

        <StyledGrid>
          <StyledCard>
            <Typography variant="h3">타이포그래피</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
            <Typography variant="body1">Body 1 텍스트입니다.</Typography>
            <Typography variant="body2">Body 2 텍스트입니다.</Typography>
            <Typography variant="caption">Caption 텍스트입니다.</Typography>
          </StyledCard>

          <StyledCard>
            <Typography variant="h3">버튼</Typography>
            <Button variant="primary" size="large">
              Primary Button
            </Button>
            <Button variant="secondary" size="medium">
              Secondary Button
            </Button>
            <Button variant="outlined" size="small">
              Outlined Button
            </Button>
            <Button variant="primary" fullWidth>
              Full Width Button
            </Button>
          </StyledCard>
        </StyledGrid>
      </StyledSection>
    </StyledHomePage>
  );
};

export default HomePage;
