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
  ${(props) => baseStyles(props)};
`;
export const A = styled.a`
  ${(props) => baseStyles(props)};
  cursor: pointer;
`;
export const Span = styled.span`
  ${(props) => baseStyles(props)};
`;
export const H1 = styled.h1`
  ${(props) => baseStyles(props)};
`;
export const H2 = styled.h2`
  ${(props) => baseStyles(props)};
`;
export const H3 = styled.h3`
  ${(props) => baseStyles(props)};
`;
export const H4 = styled.h4`
  ${(props) => baseStyles(props)};
`;
