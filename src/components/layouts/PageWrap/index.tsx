import React from "react";
import IProps from "./interface";
import { StyledView } from "./styles";

const PageWrapper: React.FC<IProps> = ({ children, bgOpacity = "24" }) => {
  const bgImageOpacity: string = `0.${bgOpacity}`;
  return <StyledView bgImageOpacity={bgImageOpacity}>{children}</StyledView>;
};

export default PageWrapper;
