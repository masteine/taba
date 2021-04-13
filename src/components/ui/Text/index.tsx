import React from "react";
import IProps from "./interface";
import { StyledText } from "./styles";

const Text: React.FC<IProps> = ({ children, style }) => {
  return <StyledText style={style}>{children}</StyledText>;
};

export default Text;
