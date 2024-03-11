import { styled } from "styled-components";
import setFlex from "./FlexStyle";

const setColor = (value) => {
    const template = {
        "major": "#617092",
        "minorLight": "#91A8C9",
        "minorDark": "#3B4B6D",
        "black": "#2B2B2B",
        "white": "#FFFFFF",
        "lightGray": "#E2E2E2",
        "orange": "#FFA500",
    }
    return template[value]
}

const setSize = (value) => {
    const template = {
        "small": "12px",
        "medium": "16px",
        "large": "24px"
    }
    return template[value]
}

const setWeight = (value) => {
    const template = {
        "light": "200",
        "normal": "400",
        "bold": "600"
    }
    return template[value]
}

export const Button = styled.button`
    cursor: pointer
    box-sizing: "border-box"
    width: ${props => props.$width || "fit-content"}
    height: ${props => props.$height || "fit-content"}
    padding: ${props => props.$padding || "3px"}
    margin: ${props => props.$margin || "0"}
    background-color: ${props => setColor(props.$bgColor || "none")}
    color: ${props => setColor(props.$color || "black")}
    font-size: ${props => setSize(props.$fontSize || "medium")}
    font-weight: ${props => setWeight(props.$fontWeight || "bold")}
    border: 1px solid ${props => setColor(props.$border || "none")}
    ${props => setFlex(props.$flex || "h_center_center")}
`