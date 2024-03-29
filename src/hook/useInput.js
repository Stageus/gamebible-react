import { useState } from "react";

export const useInput = (initialState) => {
  const [value, setValue] = useState(initialState);
  const onChangeEvent = (e) => {
    setValue(e.target.value);
  };
  return { value, onChangeEvent };
};
