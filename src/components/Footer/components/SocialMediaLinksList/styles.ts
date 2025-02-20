import styled from "styled-components";
import { colors } from "@/styles/colors";
import { media } from "@/styles/media";

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