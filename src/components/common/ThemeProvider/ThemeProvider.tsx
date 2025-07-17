import type { ReactNode } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { useThemeStore } from "@/stores/themeStore";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { currentTheme } = useThemeStore();

  return (
    <EmotionThemeProvider theme={currentTheme}>{children}</EmotionThemeProvider>
  );
};

export default ThemeProvider;
