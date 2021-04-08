import React from "react";
import IProps from "./interface";
import { StyledText } from "./styles";

const Subtitle: React.FC<IProps> = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

export default Subtitle;
