import { breakpoints } from "../breakpoints";

export const media = {
  mobile: {
    sm: `(max-width: ${breakpoints.mobile.sm})`, // Até 360px
    md: `(min-width: ${breakpoints.mobile.md})`, // A partir de 375px
    lg: `(min-width: ${breakpoints.mobile.lg})`, // A partir de 720px
  },
  desktop: {
    sm: `(min-width: ${breakpoints.desktop.sm})`, // A partir de 1366px
    md: `(min-width: ${breakpoints.desktop.md})`, // A partir de 1440px
    lg: `(min-width: ${breakpoints.desktop.lg})`, // A partir de 1920px
  },
};
