import { styled } from "styled-components";
import { setColor, setSize, setWeight, setFlex } from "./SetStyle";

export const Input = styled.input`
  box-sizing: border-box;
  cursor: pointer;
  ${(props) => setType(props.$type)};
  width: ${(props) => props.$width || "fit-content"};
  height: ${(props) => props.$height || "fit-content"};
  background-color: ${(props) => setColor(props.$backgroundColor || "none")};
  color: ${(props) => setColor(props.$color || "black")};
  font-size: ${(props) => setSize(props.$fontSize || "small")};
  font-weight: ${(props) => setWeight(props.$fontWeight || "normal")};
  padding: ${(props) => props.$padding || "0"};
  margin: ${(props) => props.$margin || "0"};
  ${(props) => setFlex(props.$flex || "h_start_start")};
`;
