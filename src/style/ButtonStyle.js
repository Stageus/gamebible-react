import { styled } from "styled-components";
import { setColor, setSize, setWeight, setFlex } from "./SetStyle";

export const Button = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  width: ${(props) => props.$width || "fit-content"};
  height: ${(props) => props.$height || "fit-content"};
  padding: ${(props) => props.$padding || "0"};
  margin: ${(props) => props.$margin || "0"};
  background-color: ${(props) => setColor(props.$backgroundColor || "none")};
  color: ${(props) => setColor(props.$color || "black")};
  font-size: ${(props) => setSize(props.$fontSize || "medium")};
  font-weight: ${(props) => setWeight(props.$fontWeight || "bold")};
  border: 1px solid ${(props) => setColor(props.$border || "none")};
  ${(props) => setFlex(props.$flex || "h_start_start")};
`;
