export const flexStyle = (value) => {
  if (value === "h_start_start") {
    return `
      display:flex;
      justify-content:start;
      align-items:start
    `;
  } else if (value === "h_start_center") {
    return `
      display:flex;
      justify-content:start;
      align-items:center
    `;
  } else if (value === "h_start_end") {
    return `
      display:flex;
      justify-content:start;
      align-items:flex-end;
    `;
  } else if (value === "h_center_center") {
    return `
      display:flex;
      justify-content:center;
      align-items:center;
    `;
  } else if (value === "h_end_center") {
    return `
      display:flex;
      justify-content:flex-end;
      align-items:center
    `;
  } else if (value === "h_between_start") {
    return `
      display:flex;
      justify-content:space-between;
      align-items:start
    `;
  } else if (value === "h_between_center") {
    return `
      display:flex;
      justify-content:space-between;
      align-items:center;
    `;
  } else if (value === "v_start_start") {
    return `
      display:flex;
      flex-direction:column;
      justify-content:start;
      align-items:start;
    `;
  } else if (value === "v_center_start") {
    return `
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:start;
    `;
  } else if (value === "v_center_center") {
    return `
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    `;
  }
};
