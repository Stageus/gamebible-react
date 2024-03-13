import styled, { css } from "styled-components";
import { setColor, setSize, setWeight, setFlex } from "./SetStyle";

const template = (props) => css`
  ${setFlex(props.$flex || "h_start_start")};
  width: ${props.$width || "fit-content"};
  height: ${props.$height || "fit-content"};
  padding: ${props.$padding || "0"};
  margin: ${props.$margin || "0"};
  color: ${setColor(props.$color || "black")};
  font-size: ${(props) => setSize(props.$fontSize || "medium")};
  font-weight: ${(props) => setWeight(props.$fontWeight || "normal")};
`;

export const P = styled.p`
  ${(props) => template(props)};
`;
export const A = styled.a`
  ${(props) => template(props)};
  cursor: pointer;
`;
export const Span = styled.span`
  ${(props) => template(props)};
`;
export const H1 = styled.h1`
  ${(props) => template(props)};
`;
export const H2 = styled.h2`
  ${(props) => template(props)};
`;
export const H3 = styled.h3`
  ${(props) => template(props)};
`;
export const H4 = styled.h4`
  ${(props) => template(props)};
`;
