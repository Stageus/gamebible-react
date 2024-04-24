import { useState } from "react";

const useHover = (initialValue) => {
  const [isHovered, setIsHovered] = useState(initialValue);

  const handleHoverOnEvent = () => {
    setIsHovered(true);
  };
  const handleHoverOffEvent = () => {
    setIsHovered(false);
  };

  return [isHovered, handleHoverOnEvent, handleHoverOffEvent];
};

export default useHover;
