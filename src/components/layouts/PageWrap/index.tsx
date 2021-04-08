import React from "react";
import IPageWrapper from "./PageWrap.interface";
import { StyledView } from "./styles";

const PageWrapper: React.FC<IPageWrapper> = ({ children }) => {
  return <StyledView>{children}</StyledView>;
};

export default PageWrapper;
