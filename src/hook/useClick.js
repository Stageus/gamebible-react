import { useState } from "react";

export const useClick = (initialState) => {
  const [click, setClick] = useState(initialState);
  const clickEvent = () => {
    setClick(!click);
  };
  return { click, setClick, clickEvent };
};
