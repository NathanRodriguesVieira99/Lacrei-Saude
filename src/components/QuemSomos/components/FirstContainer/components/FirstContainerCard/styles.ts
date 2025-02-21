import { media } from "@/styles/media";
import styled from "styled-components";

export const AllContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  text-align: center;
`;

export const HeroParagraphContainer = styled.div`
  width: 40%;
  padding: 0.5rem 0.6rem;


  @media ${media.mobile.sm},(min-width: 376px) and (max-width: 425px),${media.mobile.md} ,${media.mobile.lg},${media.tablet.md}{
    display: flex;
    flex-flow: column wrap;
    width: 100%;
  }

  @media ${media.tablet.lg} {
    display: flex;
    flex-flow: column wrap;
  }
`;
export const HeroParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 120%;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

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
  @media ${media.tablet.lg} {
    font-size: 2rem;
    margin-top: 1rem;
  }
`;
export const HeroParagraphII = styled.p`
  font-size: 1.2rem;
  line-height: 120%;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

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
export const HeroParagraphIII = styled.p`
  font-size: 1.2rem;
  line-height: 120%;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

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

export const ImageCardContainer = styled.div`
  
  
  @media ${media.mobile.sm} {
    display: none;
  }

  @media (min-width: 376px) and (max-width: 425px) {
    display: none;
  }

  @media ${media.mobile.md} {
    display: none;
  }
  @media ${media.mobile.lg} {
    display: none;
  }
  @media ${media.tablet.sm} {
    display: none;
  }
  @media ${media.tablet.lg} {
    display: flex;
    flex-flow: column nowrap;
   margin-left: 8.5rem;
  }
`;

export const ImageCard = styled.div``;
