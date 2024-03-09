import styled, { css } from "styled-components";
import { flexStyle } from "./FlexStyle";

const baseStyles = css`
  ${(props) => flexStyle(props.$flex)};
  box-sizing: ${(props) => props.$boxSizing || "border-box"};
  width: ${(props) => props.$width || "fit-content"};
  height: ${(props) => props.$height || "fit-content"};
  padding: ${(props) => props.$padding || "0"};
  margin: ${(props) => props.$margin || "0"};
  background-color: ${(props) => props.$backgourndColor || "initial"};
`;

export const Header = styled.header`
  ${baseStyles}
`;

export const Main = styled.main`
  ${baseStyles}
`;

export const Div = styled.div`
  ${baseStyles}
`;

export const Section = styled.section`
  ${baseStyles}
`;

export const Article = styled.article`
  ${baseStyles}
`;

export const Nav = styled.nav`
  ${baseStyles}
`;

export const Footer = styled.footer`
  ${baseStyles}
`;

export const Aside = styled.aside`
  ${baseStyles}
`;
