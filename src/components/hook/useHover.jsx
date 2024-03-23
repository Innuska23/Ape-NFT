import { useState } from "react";

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return [
    isHovered,
    { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
  ];
};

export default useHover;
