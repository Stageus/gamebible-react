export const setColor = (value) => {
  const template = {
    major: "#617092",
    minorLight: "#91A8C9",
    minorDark: "#3B4B6D",
    black: "#2B2B2B",
    white: "#FFFFFF",
    lightGray: "#E2E2E2",
    orange: "#FFA500",
  };
  return template[value];
};

export const setSize = (value) => {
  const template = {
    small: "12px",
    medium: "16px",
    large: "24px",
  };
  return template[value];
};

export const setWeight = (value) => {
  const template = {
    light: "200",
    normal: "400",
    bold: "600",
  };
  return template[value];
};

export const setFlex = (value) => {
  if (value === "h_start_start") {
    return `
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    `;
  }
  if (value === "h_start_center") {
    return `
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `;
  }
  if (value === "h_start_end") {
    return `
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
    `;
  }
  if (value === "h_center_start") {
    return `
      display: flex;
      justify-content: center;
      align-items: flex-start;
    `;
  }
  if (value === "h_center_center") {
    return `
      display: flex;
      justify-content: center;
      align-items: center;
    `;
  }
  if (value === "h_center_end") {
    return `
      display: flex;
      justify-content: center;
      align-items: flex-end;
    `;
  }
  if (value === "h_end_start") {
    return `
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
    `;
  }
  if (value === "h_end_center") {
    return `
      display: flex;
      justify-content: flex-end;
      align-items: center;
    `;
  }
  if (value === "h_end_end") {
    return `
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    `;
  }
  if (value === "h_between_start") {
    return `
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    `;
  }
  if (value === "h_between_center") {
    return `
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;
  }
  if (value === "h_between_end") {
    return `
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    `;
  }
  if (value === "v_start_start") {
    return `
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    `;
  }
  if (value === "v_start_center") {
    return `
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    `;
  }
  if (value === "v_start_end") {
    return `
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
    `;
  }
  if (value === "v_center_start") {
    return `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    `;
  }
  if (value === "v_center_center") {
    return `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `;
  }
  if (value === "v_center_end") {
    return `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    `;
  }
  if (value === "v_end_start") {
    return `
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
    `;
  }
  if (value === "v_end_center") {
    return `
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    `;
  }
  if (value === "v_end_end") {
    return `
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
    `;
  }
  if (value === "v_between_start") {
    return `
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    `;
  }
  if (value === "v_between_center") {
    return `
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `;
  }
  if (value === "v_between_end") {
    return `
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    `;
  }
};
