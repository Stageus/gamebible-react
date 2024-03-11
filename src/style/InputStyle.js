import { styled } from "styled-components";
import { setColor, setSize, setWeight } from "./setStyle";
import FlexStyle from "./FlexStyle";

const setType = (type) => {
    if (type === "text" || type === "password") {
        return `
            border: 1px solid black
        `
    }
    else if (type === "button") {
        return `
            borer: none
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
    ${props => FlexStyle(props.$flex || "h_center_center")}

`