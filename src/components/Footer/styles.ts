import { colors } from "@/styles/colors";
import { media } from "@/styles/media";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 90vw;
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
`;

export const FooterLinksList = styled.div`
  margin-top: 0.8rem;
`;
export const LinksList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  cursor: pointer;

  @media ${media.mobile.lg} {
    flex-flow: column wrap;
    width: 100%;
    li {
      width: 285px;
      margin-left: 200px;
      margin-bottom: 15px;
    }
  }
  @media ${media.tablet.sm} {
    flex-flow: row wrap;

    li {
      width: 135px;
      margin-left: 135px;
    }
  }
  @media ${media.tablet.lg} {
    flex-flow: row wrap;

    li {
      width: 125px;
      margin-left: 100px;
    }
  }
`;

export const List = styled.li`
  padding: 0.5rem;
`;

export const ListItens = styled.a`
  text-decoration: none;
  color: ${colors.text.systemGray70};
`;

export const SocialMediaLinks = styled.div`
  margin-top: 0.8rem;
  display: flex;

  @media ${media.mobile.lg} {
    width: 100%;
    margin-left: 350px;
  }
`;

export const SocialMediaLinksList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  cursor: pointer;
  gap: 0.9rem;
`;

export const ListSocial = styled.li``;

export const SocialItens = styled.a``;

export const ScrollUpButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 4rem;
`;

export const ScrollUpButton = styled.button`
  display: flex;
  border: 2px solid;
  border-color: ${colors.text.accent400};
  border-radius: 10%;
  width: 45px;
  height: 45px;
  padding: 0.5rem;
  margin: auto;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  @media ${media.mobile.lg} {
    display: none;
  }
  @media ${media.tablet.lg} {
    display: none;
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
