import React from "react";
import IProps from "./interface";
import { StyledView } from "./styles";

const Footer: React.FC<IProps> = ({ children }) => {
  return <StyledView>{children}</StyledView>;
};

export default Footer;
