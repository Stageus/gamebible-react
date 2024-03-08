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

const template = (props) => {
    return `
        $width: ${ props.width || "fit-content" }
        $height: ${ props.height || "fit-content" }
        ${ FlexStyle(props.flex || "h_center") }
        $padding: ${ props.padding || "0" }
        $margin: ${ props.margin || "0" }
        $color: ${ setColor(props.color || "black") }
        $background-color: ${ setColor(props.bgColor || "none") }
        $font-size: ${ props => setSize(props.fontSize || "medium") }
        $font-weight: ${ setWeight(props.fontWeight || "normal") }
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
    $font-weight: ${ props => setWeight(props.fontWeight || "bold") }
`
export const H2 = styled.h2`
    ${props => template(props)}
    font-size: 28px
    $font-weight: ${ props => setWeight(props.fontWeight || "bold") }
`
export const H3 = styled.h3`
    ${props => template(props)}
    font-size: 24px
    $font-weight: ${ props => setWeight(props.fontWeight || "bold") }
`     
export const H4 = styled.h4`
    ${props => template(props)}
    font-size: 22px
    $font-weight: ${ props => setWeight(props.fontWeight || "bold") }
`