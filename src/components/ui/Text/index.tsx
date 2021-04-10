import React from "react";
import IProps from "./interface";
import { StyledText } from "./styles";

const Text: React.FC<IProps> = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

export default Text;
