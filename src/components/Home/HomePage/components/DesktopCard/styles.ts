import { media } from "@/styles/media";
import styled from "styled-components";

export const DesktopCardContainer = styled.div`
  font-size: 0.95rem;
  line-height: 120%;
`;
export const DesktopCard = styled.div`
  display: flex;
`;

export const ImageDesktopCardContainer = styled.div`
  margin-top: 2rem;

  @media ${media.mobile.sm},
    (min-width: 376px) and (max-width: 425px),
    ${media.mobile.md} {
    display: none;
  }
  @media ${media.mobile.lg},
    ${media.tablet.sm},
    ${media.tablet.md},
    ${media.tablet.lg}${media.desktop.sm},
    ${media.desktop.md},
    ${media.desktop.lg} {
    display: block;
  }
`;