import React from 'react';
import { Sun, Moon } from 'lucide-react';

import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Sparkles } from 'lucide-react';
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
  const { isDarkMode, toggleTheme } = useThemeStore();

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

  const getButtonText = () => {
    return isInInteractiveHub() ? '홈으로' : '체험관';
  };

  const getButtonIcon = () => {
    return isInInteractiveHub() ? <Home size={18} /> : <Sparkles size={18} />;
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <Logo onClick={() => navigate('/')}>AIverse</Logo>

        <Nav>
          <NavButton onClick={handleToggleClick}>
            {getButtonIcon()}
            {getButtonText()}
          </NavButton>
          <StyledThemeButton onClick={toggleTheme} aria-label="다크 모드 토글">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </StyledThemeButton>
        </Nav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
