import styled from "styled-components";
import { media } from "@/styles/media";
import { colors } from "@/styles/colors";

export const HeaderContainer = styled.div`
  background-color: ${colors.background.default400};
  display: flex;
  padding: 1rem 0.4rem;
  margin: 0.5rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  cursor: pointer;



  @media ${media.mobile.md} {
    padding: 1.125rem 0.5rem;
    margin: 0.6rem;
    width: 95%;
    margin-left: 1rem;
  }
  @media ${media.mobile.lg} {
    padding: 1.225rem 0.1rem;
    width: 75%;
    margin-left: 4.5rem;
  }
  @media ${media.desktop.sm} {
    padding: 1.525rem 0.5rem;
    margin-left: 10.5rem;
    width: 60%;
  }
  @media ${media.desktop.md} {
    padding: 2rem 0.9rem;
    margin-left: 15rem;
    width: 65%;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  gap: 0.188rem;
  align-items: center;
`;

export const LogoLsContainer = styled.div`
  width: 100%;
  height: 1.875rem;
  position: relative;

  @media (min-width: 376px) and (max-width: 425px) {
    display: none;
  }

  @media ${media.mobile.sm}, ${media.mobile.md}, ${media.mobile.lg} {
    display: none;
  }
  @media ${media.desktop.sm} {
    display: block;
    width: 4.375rem;
  }
  @media ${media.desktop.md} {
    width: 5rem;
  }
  @media ${media.desktop.lg} {
    width: 5.625rem;
  }
`;

export const LogoContainer = styled.div`
  width: 161px;
  height: 20px;
  position: relative;

  @media ${media.mobile.sm} {
    width: 150px;
    height: 20px;
  }
  @media ${media.mobile.md} {
    width: 155px;
    height: 30px;
  }
  @media ${media.mobile.lg} {
    width: 165px;
    height: 40px;
  }

  @media ${media.desktop.sm} {
    width: 175px;
    height: 50px;
  }
  @media ${media.desktop.md} {
    width: 185px;
    height: 60px;
  }
  @media ${media.desktop.lg} {
    width: 195px;
    height: 70px;
  }
`;
