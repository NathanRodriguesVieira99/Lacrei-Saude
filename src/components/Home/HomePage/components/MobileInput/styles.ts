import { colors } from "@/styles/colors";
import { media } from "@/styles/media";
import styled from "styled-components";


export const MobileInputContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.background.divider400};
  border-radius: 8px;
  margin-top: 2rem;
  width: 90%;
  height: 75px;

  @media ${media.mobile.md} {
    width: 95%;
  }
  @media ${media.mobile.lg} {
    width: 75%;
  }
  @media ${media.desktop.sm} {
    width: 60%;
  }
  @media ${media.desktop.md} {
    width: 65%;
  }
`;
export const MobileInput = styled.div`
  width: 100%;
  @media ${media.tablet.sm} {
    width: 90%;
  }
`;
export const MobileInputComponente = styled.input`
  margin-top: 3rem;
  padding: 0.5rem 0.4rem;
  margin: 0.5rem;
  width: 100%;
  height: 50px;
  background-color: ${colors.background.default400};
  border-radius: 8px 0px 0px 8px;

  &::placeholder {
    color: ${colors.text.accent400};
  }
`;
export const MobileInputButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  width: 10%;
  height: 50px;
  background-color: ${colors.background.border_accent400};
  border-radius: 0px 8px 8px 0px;
  cursor: pointer;
`;
export const MobileInputButton = styled.div``;
export const MobileButton = styled.button``;