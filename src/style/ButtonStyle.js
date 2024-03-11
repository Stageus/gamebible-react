import { styled } from "styled-components";
import { setColor, setSize, setWeight } from "./setStyle";
import FlexStyle from "./FlexStyle";

export const Button = styled.button`
    cursor: pointer
    box-sizing: border-box
    width: ${props => props.$width || "fit-content"}
    height: ${props => props.$height || "fit-content"}
    padding: ${props => props.$padding || "3px"}
    margin: ${props => props.$margin || "0"}
    background-color: ${props => setColor(props.$bgColor || "none")}
    color: ${props => setColor(props.$color || "black")}
    font-size: ${props => setSize(props.$fontSize || "medium")}
    font-weight: ${props => setWeight(props.$fontWeight || "bold")}
    border: 1px solid ${props => setColor(props.$border || "none")}
    ${props => FlexStyle(props.$flex || "h_center_center")}
`