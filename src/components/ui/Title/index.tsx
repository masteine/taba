import React from "react";
import { StyledText } from "./styles";
import IProps from "./interface";

const Title: React.FC<IProps> = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

export default Title;
