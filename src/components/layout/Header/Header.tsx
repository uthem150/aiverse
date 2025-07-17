import { Sun, Moon } from "lucide-react";
import {
  StyledHeader,
  StyledContainer,
  StyledLogo,
  StyledNav,
  StyledThemeButton,
} from "./Header.style";
import { useThemeStore } from "@/stores/themeStore";
import Typography from "@/components/common/Typography/Typography";

const Header = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo>
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
