import { colors } from "@/styles/colors";
import styled from "styled-components";

export const QuemSomosButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
`;
export const QuemSomosButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 111px;
  height: 48px;
  border-radius: 8px;
  border: 2px solid;
  border-color: ${colors.border.border_accent400};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  transition: ease-in-out 0.2s;
  background-color: ${colors.background.border_accent400};
`;
export const QuemSomosButton = styled.button`
  color: ${colors.text.default400};
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  border: none;
  background-color: ${colors.background.border_accent400};
  cursor: pointer;
`;