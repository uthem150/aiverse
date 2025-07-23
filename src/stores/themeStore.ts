import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Theme } from '@/styles/themes/types';
import { lightTheme } from '@/styles/themes/lightTheme';
import { darkTheme } from '@/styles/themes/darkTheme';

interface ThemeState {
  currentTheme: Theme; // 현재 적용 중인 테마
  isDarkMode: boolean; // 현재 다크 모드 사용 여부
  useLowVision: boolean; // 저시력 모드 사용 여부
  toggleTheme: () => void; // 테마 라이트/다크로 전환하는 함수
  setDarkMode: (isDark: boolean) => void; // 다크 모드 여부 명시적으로 설정하는 함수
}

// Zustand 스토어 생성: create 함수를 사용하여 상태를 생성하고 persist 미들웨어 적용
export const useThemeStore = create<ThemeState>()(
  persist(
    // 상태 정의 및 조작 함수 등록
    (set, get) => ({
      currentTheme: lightTheme, // 기본 테마는 라이트 테마
      isDarkMode: false, // 기본값은 다크 모드 비활성화
      useLowVision: false, // 기본값은 저시력 모드 비활성화

      // 현재 모드의 반대값으로 테마를 전환
      toggleTheme: () => {
        const { isDarkMode } = get(); // 현재 다크모드 여부 가져오기
        const newIsDarkMode = !isDarkMode; // 현재값의 반전 (on/off)
        const newTheme = newIsDarkMode ? darkTheme : lightTheme; // 새로운 테마 결정

        // 새로운 상태 설정: 다크 모드 여부 및 해당 테마 적용
        set({
          isDarkMode: newIsDarkMode,
          currentTheme: {
            ...newTheme,
            useLowVision: get().useLowVision, // 기존 저시력 설정 유지
          },
        });
      },

      // 다크 모드 특정 값으로 설정 (true/false)
      setDarkMode: (isDark: boolean) => {
        const newTheme = isDark ? darkTheme : lightTheme;

        set({
          isDarkMode: isDark,
          currentTheme: {
            ...newTheme,
            useLowVision: get().useLowVision, // 기존 저시력 설정 유지
          },
        });
      },
    }),

    // persist 미들웨어 옵션 설정
    {
      name: 'aiverse-theme-storage', // localStorage 키 이름
      partialize: state => ({
        // 저장할 상태 중 일부만 선택 (테마 객체 전체가 아닌 플래그만 저장)
        isDarkMode: state.isDarkMode,
        useLowVision: state.useLowVision,
      }),
    }
  )
);
