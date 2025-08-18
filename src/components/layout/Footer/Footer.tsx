import { Link } from 'react-router-dom';
import { Github, Mail, Twitter, ArrowRightCircle, Gamepad2, ListChecks } from 'lucide-react';
import Typography from '@/components/common/Typography/Typography';
import {
  StyledFooter,
  StyledFooterInner,
  StyledColumns,
  StyledBrand,
  StyledCol,
  StyledColTitle,
  StyledLink,
  StyledSocialRow,
  StyledBottomBar,
} from './Footer.style';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledFooterInner>
        <StyledColumns>
          {/* Brand/Intro */}
          <StyledBrand aria-label="사이트 정보">
            <div className="logo">
              <Gamepad2 size={20} />
              AIverse-phi
            </div>
            <Typography variant="body2" color="#6B7280">
              AI 얼굴 분석과 성격·연애·라이프스타일 테스트, 무료 두뇌활동 게임을 한 곳에서. 재미있게
              놀면서 나를 발견하세요!
            </Typography>

            <StyledSocialRow aria-label="소셜 링크">
              {/* <a
                href="mailto:hello@aiverse.dev"
                aria-label="이메일 보내기"
                rel="nofollow noopener"
                title="이메일"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://twitter.com/aiverse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com/your-org/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github size={18} />
              </a> */}
            </StyledSocialRow>
          </StyledBrand>

          {/* Explore */}
          <StyledCol aria-label="탐색">
            <StyledColTitle>탐색</StyledColTitle>
            <StyledLink>
              <Link to="/tests" aria-label="전체 테스트 보기">
                <ListChecks size={16} />
                전체 테스트
              </Link>
            </StyledLink>
            <StyledLink>
              <Link to="/interactive-hub" aria-label="인터랙티브 체험관">
                <ArrowRightCircle size={16} />
                인터랙티브 체험관
              </Link>
            </StyledLink>
            <StyledLink>
              <Link to="/interactive/games" aria-label="인터랙티브 게임 모음">
                <ArrowRightCircle size={16} />
                인터랙티브 게임
              </Link>
            </StyledLink>
          </StyledCol>

          {/* Company */}
          <StyledCol aria-label="회사">
            <StyledColTitle>회사</StyledColTitle>
            <StyledLink>
              <Link to="/about">소개</Link>
            </StyledLink>
            {/* <StyledLink>
              <Link to="/contact">연락처</Link>
            </StyledLink> */}
          </StyledCol>

          {/* Legal */}
          <StyledCol aria-label="정책">
            <StyledColTitle>정책</StyledColTitle>
            <StyledLink>
              <Link to="/privacy">개인정보처리방침</Link>
            </StyledLink>
            <StyledLink>
              <Link to="/terms">이용약관</Link>
            </StyledLink>
          </StyledCol>
        </StyledColumns>

        <StyledBottomBar>
          <div>© {year} AIverse-phi. All rights reserved.</div>
          <div className="right">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            {/* <a href="mailto:hello@aiverse.dev">hello@aiverse.dev</a> */}
          </div>
        </StyledBottomBar>
      </StyledFooterInner>
    </StyledFooter>
  );
};

export default Footer;
