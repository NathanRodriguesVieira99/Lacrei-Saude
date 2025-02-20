import styled from "styled-components";
import { media } from "@/styles/media";

export const HeroContainer = styled.div`
  margin-top: 3rem;
  padding: 1rem 0.4rem;
  margin: 0.5rem;

  @media ${media.mobile.md} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    padding: 1.125rem 0.5rem;
    margin: 0.6rem;
    width: 95%;
    margin-left: 1rem;
  }
  @media ${media.mobile.lg} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 75%;
    padding: 1.225rem 0.1rem;
    margin-left: 4.5rem;
  }
  @media ${media.desktop.sm} {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.525rem 0.5rem;
    margin-left: 10.5rem;
    width: 60%;
  }
  @media ${media.desktop.md} {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0.9rem;
    margin-left: 15rem;
    width: 65%;
  }
`;
