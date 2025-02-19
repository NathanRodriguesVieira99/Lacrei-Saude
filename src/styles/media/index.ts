import { breakpoints } from "../breakpoints";

export const media = {
  mobile: {
    sm: `(max-width: ${breakpoints.mobile.sm})`,
    md: `(min-width: ${breakpoints.mobile.md})`,
    lg: `(min-width: ${breakpoints.mobile.lg})`,
  },
  tablet: {
    sm: `(min-width: ${breakpoints.tablet.sm})`,
    md: `(min-width: ${breakpoints.tablet.md})`,
    lg: `(min-width: ${breakpoints.tablet.lg})`,
  },
  desktop: {
    sm: `(min-width: ${breakpoints.desktop.sm})`,
    md: `(min-width: ${breakpoints.desktop.md})`,
    lg: `(min-width: ${breakpoints.desktop.lg})`,
    xl: `(min-width: ${breakpoints.desktop.lg})`,
  },
};
