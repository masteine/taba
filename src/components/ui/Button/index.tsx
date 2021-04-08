import React from "react";
import { StyledButton } from "./styles";
import IButton from "./button.interface";

const Button: React.FC<IButton> = ({ children }) => {
  return <StyledButton title={children} />;
};

export default Button;
