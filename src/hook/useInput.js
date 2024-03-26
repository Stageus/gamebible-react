import { useState } from "react";

export const useInput = (initialState) => {
  const [change, setChange] = useState(initialState);
  const changeEvent = (e) => {
    setChange(e.target.value);
  };
  return { change, setChange, changeEvent };
};
