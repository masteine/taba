import React from "react";
import { StyledText } from "./styles";

interface IProps {
  children: string;
}

const Title: React.FC<IProps> = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

export default Title;
