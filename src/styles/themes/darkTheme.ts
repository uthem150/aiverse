import type { Theme } from "./types";
import {
  PRIMARY,
  GRAY,
  WHITE,
  SUCCESS,
  WARNING,
  ERROR,
  ACCENT,
  BRAND_DARK,
} from "../colors";

export const darkTheme: Theme = {
  mode: "dark",
  colors: {
    background: {
      primary: BRAND_DARK,
      secondary: GRAY[800],
      tertiary: GRAY[700],
      elevated: GRAY[800],
    },
    text: {
      primary: WHITE,
      secondary: GRAY[200],
      tertiary: GRAY[400],
      disabled: GRAY[500],
      inverse: GRAY[900],
    },
    brand: {
      primary: PRIMARY[400],
      secondary: PRIMARY[500],
      accent: ACCENT[400],
    },
    interactive: {
      primary: PRIMARY[500],
      primaryHover: PRIMARY[400],
      primaryPressed: PRIMARY[600],
      secondary: GRAY[700],
      secondaryHover: GRAY[600],
      secondaryPressed: GRAY[500],
    },
    border: {
      primary: GRAY[700],
      secondary: GRAY[600],
      tertiary: GRAY[500],
      focus: PRIMARY[400],
    },
    status: {
      success: SUCCESS[400],
      warning: WARNING[400],
      error: ERROR[400],
      info: ACCENT[400],
    },
    shadow: {
      small: "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
      medium:
        "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
      large:
        "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "6rem",
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
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
