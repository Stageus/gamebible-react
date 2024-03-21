import { useState } from "react";

export const useClick = (initialState) => {
  const [click, setClick] = useState(initialState);
  const ClickEvent = () => {
    setClick(!click);
  };
  return { click, setClick, ClickEvent };
};
