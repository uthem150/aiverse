import { css, Global } from "@emotion/react";
import { useTheme } from "@emotion/react";
import type { Theme } from "@/styles/themes/types";
import { FONT_FAMILY } from "@/styles/typography";

const GlobalStyles = () => {
  const theme = useTheme() as Theme;

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        html {
          font-size: 16px;
          line-height: 1.5;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: ${FONT_FAMILY.primary};
          font-weight: 400;
          color: ${theme.colors.text.primary};
          background-color: ${theme.colors.background.primary};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transition: background-color
            ${`${theme.animation.duration.normal} ${theme.animation.easing.easeInOut}`};
        }

        #root {
          min-height: 100vh;
          width: 100%;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button {
          border: none;
          background: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
        }

        input,
        textarea,
        select {
          font-family: inherit;
          font-size: inherit;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: ${theme.colors.border.secondary} transparent;
        }

        *::-webkit-scrollbar {
          width: 8px;
        }

        *::-webkit-scrollbar-track {
          background: transparent;
        }

        *::-webkit-scrollbar-thumb {
          background-color: ${theme.colors.border.secondary};
          border-radius: ${theme.borderRadius.full};
        }

        *::-webkit-scrollbar-thumb:hover {
          background-color: ${theme.colors.border.tertiary};
        }
      `}
    />
  );
};

export default GlobalStyles;
