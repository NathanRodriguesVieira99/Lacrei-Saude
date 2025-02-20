import { colors } from "@/styles/colors";
import { media } from "@/styles/media";
import styled from "styled-components";

export const MobileCardContainer = styled.div`
  display: flex;
  margin-top: 2.5rem;
  border-radius: 8px;
  padding: 1.5rem;
  height: 6.5rem;
  background-color: ${colors.background.divider400};

  @media ${media.mobile.lg} {
    display: none;
  }
`;

export const ImageMobileCardContainer = styled.div`
  img {
    position: relative;
    bottom: 2.9rem;
    left: 1rem;
  }
`;
export const MobileCard = styled.div`
  font-size: 0.95rem;
  line-height: 120%;
`;
export const MobileCardText = styled.p`
  color: #666;
`;