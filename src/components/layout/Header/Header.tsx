import React from 'react';
import { Sun, Moon, Home, Sparkles, MousePointer2, Rocket } from 'lucide-react';

import { useNavigate, useLocation } from 'react-router-dom';
import {
  Logo,
  Nav,
  NavButton,
  StyledContainer,
  StyledHeader,
  StyledThemeButton,
} from './Header.style';
import { useThemeStore } from '@/stores/themeStore';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isDarkMode, toggleTheme, enableSplashCursor, toggleSplashCursor } = useThemeStore();

  // 체험관 관련 경로들 정의
  const isInInteractiveHub = () => {
    const path = location.pathname;
    return (
      path === '/interactive-hub' || path.startsWith('/experience/') || path.startsWith('/game/')
    );
  };

  const handleToggleClick = () => {
    if (isInInteractiveHub()) {
      // 체험관에 있으면 홈으로
      navigate('/');
    } else {
      // 홈에 있으면 체험관으로
      navigate('/interactive-hub');
    }
  };

  const getButtonText = () => (isInInteractiveHub() ? '홈으로' : '체험관');
  const getButtonIcon = () => (isInInteractiveHub() ? <Home size={18} /> : <Rocket size={18} />);

  return (
    <StyledHeader>
      <StyledContainer>
        <Logo onClick={() => navigate('/')}>AIverse-phi</Logo>

        <Nav>
          <NavButton onClick={handleToggleClick}>
            {getButtonIcon()}
            {getButtonText()}
          </NavButton>

          {/* 스플래시 커서 토글 버튼 */}
          <StyledThemeButton
            onClick={toggleSplashCursor}
            aria-label={`스플래시 커서 ${enableSplashCursor ? '끄기' : '켜기'}`}
            aria-pressed={enableSplashCursor}
            title={`Splash Cursor ${enableSplashCursor ? 'On' : 'Off'}`}
          >
            {enableSplashCursor ? <Sparkles size={20} /> : <MousePointer2 size={20} />}
          </StyledThemeButton>

          {/* 다크모드 토글 버튼 */}
          <StyledThemeButton onClick={toggleTheme} aria-label="다크 모드 토글">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </StyledThemeButton>
        </Nav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
