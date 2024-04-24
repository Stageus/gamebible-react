import styled, { css } from "styled-components";
import { setColor, setSize, setWeight, setFlex } from "./SetStyle";

const baseStyles = css`
  box-sizing: border-box;
  ${(props) => setFlex(props.$flex || "h_start_start")};
  width: ${(props) => props.$width || "fit-content"};
  height: ${(props) => props.$height || "fit-content"};
  padding: ${(props) => props.$padding || "0"};
  margin: ${(props) => props.$margin || "0"};
  color: ${(props) => setColor(props.$color || "black")};
  font-size: ${(props) => setSize(props.$fontSize || "medium")};
  font-weight: ${(props) => setWeight(props.$fontWeight || "normal")};
  background-color: ${(props) => setColor(props.$backgroundColor || "none")};
`;

export const P = styled.p`
  ${baseStyles}
`;
export const A = styled.a`
  ${baseStyles}
  cursor: pointer;
`;
export const Span = styled.span`
  ${baseStyles}
`;
export const H1 = styled.h1`
  ${baseStyles}
`;
export const H2 = styled.h2`
  ${baseStyles}
`;
export const H3 = styled.h3`
  ${baseStyles}
`;
export const H4 = styled.h4`
  ${baseStyles}
`;
