export const FONT_FAMILY = {
  primary:
    '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  mono: '"Fira Code", "SF Mono", Monaco, Inconsolata, "Roboto Mono", "Source Code Pro", monospace',
} as const;

export const FONT_WEIGHT = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

export const FONT_SIZE = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  base: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem", // 48px
  "6xl": "3.75rem", // 60px
} as const;

export const LINE_HEIGHT = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

export const TYPOGRAPHY = {
  // Headings
  h1: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: FONT_SIZE["5xl"],
    fontWeight: FONT_WEIGHT.bold,
    lineHeight: LINE_HEIGHT.tight,
    letterSpacing: "-0.025em",
  },
  h2: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: FONT_SIZE["4xl"],
    fontWeight: FONT_WEIGHT.bold,
    lineHeight: LINE_HEIGHT.tight,
    letterSpacing: "-0.025em",
  },
  h3: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: FONT_SIZE["3xl"],
    fontWeight: FONT_WEIGHT.semibold,
    lineHeight: LINE_HEIGHT.snug,
    letterSpacing: "-0.025em",
  },
  h4: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: FONT_SIZE["2xl"],
    fontWeight: FONT_WEIGHT.semibold,
    lineHeight: LINE_HEIGHT.snug,
    letterSpacing: "normal",
  },
  h5: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: FONT_SIZE.xl,
    fontWeight: FONT_WEIGHT.semibold,
    lineHeight: LINE_HEIGHT.snug,
    letterSpacing: "normal",
  },
  h6: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: FONT_SIZE.lg,
    fontWeight: FONT_WEIGHT.semibold,
    lineHeight: LINE_HEIGHT.snug,
    letterSpacing: "normal",
  },

  // Body Text
  body1: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: FONT_SIZE.base,
    fontWeight: FONT_WEIGHT.regular,
    lineHeight: LINE_HEIGHT.normal,
    letterSpacing: "normal",
  },
  body2: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.regular,
    lineHeight: LINE_HEIGHT.normal,
    letterSpacing: "normal",
  },

  // Small Text
  caption: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: FONT_SIZE.xs,
    fontWeight: FONT_WEIGHT.regular,
    lineHeight: LINE_HEIGHT.normal,
    letterSpacing: "normal",
  },

  // Button Text
  button: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: FONT_SIZE.base,
    fontWeight: FONT_WEIGHT.medium,
    lineHeight: LINE_HEIGHT.none,
    letterSpacing: "0.025em",
  },

  // Labels
  label: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.medium,
    lineHeight: LINE_HEIGHT.normal,
    letterSpacing: "normal",
  },
} as const;

export type TypographyVariant = keyof typeof TYPOGRAPHY;
