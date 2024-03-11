import { styled } from "styled-components";
import { setColor, setSize, setWeight } from "./setStyle";
import FlexStyle from "./FlexStyle";


const template = (props) => {
    return `
        width: ${props.$width || "fit-content"}
        height: ${props.$height || "fit-content"}
        ${FlexStyle(props.$flex || "h_center_center")}
        padding: ${props.$padding || "0"}
        margin: ${props.$margin || "0"}
        color: ${setColor(props.$color || "black")}
        background-color: ${setColor(props.$bgColor || "none")}
        font-size: ${props => setSize(props.vfontSize || "medium")}
        font-weight: ${setWeight(props.$fontWeight || "normal")}
    `
}

export const P = styled.p`
    ${props => template(props)}
`
export const A = styled.a`
    ${props => template(props)}
    cursor: pointer;
`
export const Span = styled.span`
    ${props => template(props)}
`
export const H1 = styled.h1`
    ${props => template(props)}
    font-size: 32px
`
export const H2 = styled.h2`
    ${props => template(props)}
    font-size: 28px
`
export const H3 = styled.h3`
    ${props => template(props)}
    font-size: 24px
`
export const H4 = styled.h4`
    ${props => template(props)}
    font-size: 22px
`