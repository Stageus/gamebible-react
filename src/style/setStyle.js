export const setColor = (value) => {
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

export const setSize = (value) => {
    const template = {
        "small": "12px",
        "medium": "16px",
        "large": "24px"
    }
    return template[value]
}

export const setWeight = (value) => {
    const template = {
        "light": "200",
        "normal": "400",
        "bold": "600"
    }
    return template[value]
}