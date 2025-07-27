export interface Theme {
  mode: 'light' | 'dark';
  useLowVision?: boolean;
  colors: {
    // Background
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
      elevated: string;
    };

    // Text
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      disabled: string;
      inverse: string;
    };

    // Brand
    brand: {
      primary: string;
      secondary: string;
      accent: string;
    };

    // Interactive
    interactive: {
      primary: string;
      primaryHover: string;
      primaryPressed: string;
      secondary: string;
      secondaryHover: string;
      secondaryPressed: string;
    };

    // Border
    border: {
      primary: string;
      secondary: string;
      tertiary: string;
      focus: string;
    };

    // Status
    status: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };

    // Shadows
    shadow: {
      small: string;
      medium: string;
      large: string;
    };
  };

  // Spacing
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };

  // Border Radius
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };

  // Animation
  animation: {
    duration: {
      fast: string;
      normal: string;
      slow: string;
    };
    easing: {
      ease: string;
      easeIn: string;
      easeOut: string;
      easeInOut: string;
    };
  };
}
