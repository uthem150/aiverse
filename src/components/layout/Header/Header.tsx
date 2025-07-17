import { Sun, Moon } from 'lucide-react';
import {
  StyledHeader,
  StyledContainer,
  StyledLogo,
  StyledNav,
  StyledThemeButton,
} from './Header.style';
import { useThemeStore } from '@/stores/themeStore';
import Typography from '@/components/common/Typography/Typography';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useThemeStore();

  const handleLogoClick = () => {
    navigate(`/`);
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo onClick={handleLogoClick} aria-label="홈 화면 이동">
          <Typography variant="h4" color="#6366F1">
            AIverse
          </Typography>
        </StyledLogo>

        <StyledNav>
          <StyledThemeButton onClick={toggleTheme} aria-label="다크 모드 토글">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </StyledThemeButton>
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
