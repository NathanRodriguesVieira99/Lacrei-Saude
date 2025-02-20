import { colors } from "@/styles/colors";
import { media } from "@/styles/media";
import styled from "styled-components";

export const ScrollUpButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 4rem;
`;

export const ScrollUpButton = styled.button`
  display: flex;
  position: fixed;
  right: 1rem;
  bottom: 1.5rem;
  border: 2px solid;
  border-color: ${colors.text.accent400};
  border-radius: 10%;
  width: 45px;
  height: 45px;
  padding: 0.5rem;
  margin: auto;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

