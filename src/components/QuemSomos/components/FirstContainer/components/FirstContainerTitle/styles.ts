import { colors } from "@/styles/colors";
import { media } from "@/styles/media";
import styled from "styled-components";

export const HeroTitleContainer = styled.div`
  width: 70%;
  text-align: center;

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

export const HeroTitle = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  margin-bottom: 0.5rem;
`;

export const HorizontalLine = styled.div`
  content: "";
  width: 65%;
  margin-left: 1.5rem;
  height: 2px;
  background-color: ${colors.background.border_accent400};

  @media ${media.mobile.md} {
    width: 65%;
    margin-left: 6rem;
  }
  @media ${media.mobile.lg} {
    width: 65%;
    margin-left: 6rem;
  }

  @media ${media.tablet.sm} {
    width: 65%;
    margin-left: 10rem;
  }
  @media ${media.tablet.sm} {
    width: 65%;
    margin-left: 10rem;
  }
  @media ${media.tablet.lg} {
    width: 65%;
    margin-left: 10rem;
  }

  @media ${media.desktop.sm} {
    width: 65%;
    margin-left: 10rem;
  }
  @media ${media.desktop.md} {
    width: 65%;
    margin-left: 11.5rem;
  }
`;
