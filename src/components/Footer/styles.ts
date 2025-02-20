import { colors } from "@/styles/colors";
import { media } from "@/styles/media";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 90vw;
  height: 15px;
  padding: 1rem 0.4rem;
  margin: 0.9rem;

  @media ${media.mobile.lg} {
    display: flex;
    flex-flow: row wrap;
    max-width: 100%;
    width: 85vw;
    margin: auto;
  }
  @media ${media.tablet.sm} {
    max-width: 100%;
    width: 90vw;
    margin: auto;
  }
  @media ${media.tablet.md} {
    max-width: 95%;
    width: 90vw;
    margin: auto;
  }
  @media ${media.tablet.lg} {
    max-width: 90%;
    width: 100vw;
    margin: auto;
  }
  @media ${media.desktop.sm} {
    max-width: 75%;
    width: 75vw;
    margin: auto;
    
  }

  @media ${media.desktop.md} {
    max-width: 95%;
    width: 70vw;
    margin: auto;
   
  }
`;

export const FooterHr = styled.div`
  width: 100%;
  content: "";
  border-top: 1px solid ${colors.border.border_accent400};

  @media  (min-width: 376px) and (max-width: 425px){
    width: 125vw;
  }
  @media ${media.mobile.md}{
    width: 120vw;
  }
`;

export const FooterLogoImage = styled.div`
  display: flex;

  @media ${media.mobile.lg} {
    margin-top: 2rem;
  }

  @media ${media.mobile.sm},
    (min-width: 376px) and (max-width: 425px),
    ${media.mobile.md} {
    display: none;
  }
  @media ${media.mobile.lg},
    ${media.tablet.sm},
    ${media.tablet.md},
    ${media.tablet.lg},
    ${media.desktop.sm},
    ${media.desktop.md},
    ${media.desktop.lg} {
    display: block;
  }
`;






