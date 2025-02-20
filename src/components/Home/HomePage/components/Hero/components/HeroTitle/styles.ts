import { colors } from "@/styles/colors";
import { media } from "@/styles/media";
import styled from "styled-components";

export const HeroTitleContainer = styled.div`
  width: 70%;

  @media ${media.mobile.md} {
    padding: 1.125rem 0.5rem;
  }

  @media ${media.desktop.sm} {
    padding: 1.525rem 0.5rem;
  }
  @media ${media.desktop.md} {
    padding: 2rem 0.9rem;
  }
`;
export const HorizontalLine = styled.div`
  content: "";
  width: 65%;
  margin-left: 0.5rem;
  height: 2px;
  background-color: ${colors.background.border_accent400};

  @media ${media.mobile.md} {
    width: 65%;
    margin-bottom: 1rem;
  }
  @media ${media.mobile.lg} {
    width: 60%;
  }

  @media ${media.desktop.sm} {
    width: 15%;
  }
  @media ${media.desktop.md} {
    width: 15%;
  }
`;
export const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 120%;
  margin-bottom: 0.5rem;
`;

export const HeroParagraphContainer = styled.div`
  width: 70%;
`;
export const HeroParagraph = styled.p`
  font-size: 1.5rem;
  line-height: 120%;
  margin-top: 0.5rem;

  @media ${media.mobile.lg} {
    font-size: 1.8rem;
    margin-top: 0.8rem;
  }
  @media ${media.tablet.sm} {
    font-size: 1.9rem;
    margin-top: 0.9rem;
  }
  @media ${media.tablet.md} {
    font-size: 2rem;
    margin-top: 1rem;
  }
`;