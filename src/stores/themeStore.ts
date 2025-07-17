import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Theme } from "@/styles/themes/types";
import { lightTheme } from "@/styles/themes/lightTheme";
import { darkTheme } from "@/styles/themes/darkTheme";

interface ThemeState {
  currentTheme: Theme;
  isDarkMode: boolean;
  useLowVision: boolean;
  toggleTheme: () => void;
  setDarkMode: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      currentTheme: lightTheme,
      isDarkMode: false,
      useLowVision: false,

      toggleTheme: () => {
        const { isDarkMode } = get();
        const newIsDarkMode = !isDarkMode;
        const newTheme = newIsDarkMode ? darkTheme : lightTheme;

        set({
          isDarkMode: newIsDarkMode,
          currentTheme: {
            ...newTheme,
            useLowVision: get().useLowVision,
          },
        });
      },

      setDarkMode: (isDark: boolean) => {
        const newTheme = isDark ? darkTheme : lightTheme;

        set({
          isDarkMode: isDark,
          currentTheme: {
            ...newTheme,
            useLowVision: get().useLowVision,
          },
        });
      },
    }),
    {
      name: "aiverse-theme-storage",
      partialize: (state) => ({
        isDarkMode: state.isDarkMode,
        useLowVision: state.useLowVision,
      }),
    },
  ),
);
