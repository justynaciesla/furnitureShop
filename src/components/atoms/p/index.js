import React from "react";
import { StyledP } from "./StyledP";

const P = ({ children, fontSize, margin, color, fontWeight }) => {
  return (
    <StyledP
      fontWeight={fontWeight}
      fontSize={fontSize}
      margin={margin}
      color={color}
    >
      {children}
    </StyledP>
  );
};

export default P;
