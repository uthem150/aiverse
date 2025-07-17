import type { Theme } from "./types";
import {
  PRIMARY,
  GRAY,
  WHITE,
  SUCCESS,
  WARNING,
  ERROR,
  ACCENT,
  BRAND_BLUE,
  BRAND_BACKGROUND,
} from "../colors";

export const lightTheme: Theme = {
  mode: "light",
  colors: {
    background: {
      primary: WHITE,
      secondary: GRAY[50],
      tertiary: BRAND_BACKGROUND,
      elevated: WHITE,
    },
    text: {
      primary: GRAY[900],
      secondary: GRAY[700],
      tertiary: GRAY[500],
      disabled: GRAY[400],
      inverse: WHITE,
    },
    brand: {
      primary: BRAND_BLUE,
      secondary: PRIMARY[600],
      accent: ACCENT[500],
    },
    interactive: {
      primary: BRAND_BLUE,
      primaryHover: PRIMARY[600],
      primaryPressed: PRIMARY[700],
      secondary: GRAY[100],
      secondaryHover: GRAY[200],
      secondaryPressed: GRAY[300],
    },
    border: {
      primary: GRAY[200],
      secondary: GRAY[300],
      tertiary: GRAY[400],
      focus: BRAND_BLUE,
    },
    status: {
      success: SUCCESS[500],
      warning: WARNING[500],
      error: ERROR[500],
      info: ACCENT[500],
    },
    shadow: {
      small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      medium:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      large:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
  },
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "6rem", // 96px
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    full: "9999px",
  },
  animation: {
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
    },
    easing: {
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
    },
  },
};
