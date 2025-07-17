import type { Theme as CustomTheme } from "@/styles/themes/types";

declare module "@emotion/react" {
  export type Theme = CustomTheme;
}
