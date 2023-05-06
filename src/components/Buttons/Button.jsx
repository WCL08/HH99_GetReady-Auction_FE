import React from "react";
import { StButton } from "../../styles/Buttons.styles";

function Button({ children, size, fontSize, padding, height, onClick }) {
  return (
    <StButton
      size={size}
      fontSize={fontSize}
      padding={padding}
      height={height}
      onClick={onClick}
    >
      {children}
    </StButton>
  );
}

export default Button;
