import styled from "styled-components";
import { media } from "@/styles/media";
import { colors } from "@/styles/colors";

export const HeaderItensContainer = styled.div`
  display: flex;
  width: 35%;
  gap: 0.5rem;

  @media ${media.mobile.md} {
    width: 30%;
  }
  @media ${media.mobile.lg} {
    width: 25%;
    margin-right: -5.5rem;
  }
  @media ${media.desktop.sm} {
    width: 20%;
    margin-right: -6.5rem;
  }
  @media ${media.desktop.md} {
    width: 15%;
    margin-right: 0.5rem;
  }
`;

export const HeaderItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icons = styled.div`
  display: flex;
  gap: 1rem;

  @media ${media.mobile.lg} {
    gap: 0.9rem;
    margin-left: -4rem;
  }

  @media ${media.desktop.sm} {
    gap: 3rem;
  }
`;

export const MobileButtonContainer = styled.div`
  display: flex;
`;

export const MobileButton = styled.button`
  border: none;
  @media ${media.desktop.md}, ${media.desktop.lg}, ${media.desktop.xl} {
    display: none;
  }

  @media ${media.tablet.sm}, ${media.tablet.md}, ${media.tablet.lg} {
    display: none;
  }
`;

export const MobileButtonIcon = styled.div`
  display: flex;
`;

export const DesktopButtonContainer = styled.div`
  display: flex;
`;

export const DesktopButton = styled.button`
  width: 111px;
  height: 48px;
  border-radius: 8px;
  border: 2px solid;
  border-color: ${colors.border.border_accent400};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: ${colors.hover.accent100};
  }

  @media ${media.mobile.sm},
    (min-width: 376px) and (max-width: 425px),
    ${media.mobile.md},
    ${media.mobile.lg} {
    display: none;
  }

  @media ${media.tablet.sm},
    ${media.tablet.md},
    ${media.tablet.lg} ${media.desktop.sm},
    ${media.desktop.md},
    ${media.desktop.lg},
    ${media.desktop.xl} {
    display: block;
  }
`;

export const DesktopButtonIconText = styled.p`
  color: ${colors.text.accent400};
  font-weight: 700;
  font-size: 16px;
  text-align: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
`;

export const ProfileButton = styled.button`
  border: none;
  cursor: pointer;
  height: 48px;
`;
export const ProfilePic = styled.div`
  @media ${media.mobile.lg} {
    img {
      width: 48px;
      height: 48px;
    }
  }
`;
