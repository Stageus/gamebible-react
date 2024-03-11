import { styled } from "styled-components";
import FlexStyle from "./FlexStyle";

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

const setType = (type) => {
    if (type === "text" || "password") {
        return `
            border: 1px solid black
        `
    }
    else if (type === "button") {
        return `
            borer: none
            ${FlexStyle("h_center_center")}
        `
    }
}

export const Input = styled.input`
    box-sizing: border-box
    cursor: pointer
    ${props => setType(props.$type)}
    width: ${props => props.$width || "fit-content"}
    height: ${props => props.$height || "fit-content"}
    background-color: ${props => setColor(props.$bgcolor || "none")}
    color: ${props => setColor(props.$color || "black")}
    font-size: ${props => setSize(props.$fontSize || "small")}
    font-weight: ${props => setWeight(props.$fontWeight || "normal")}
    padding: ${props => props.$padding || "5px"}
    margin: ${props => props.$margin || "0"}
`