import { media } from "@/styles/media";
import styled from "styled-components";

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