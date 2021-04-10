import React from "react";
import { StyledView, StyledText } from "./styles";
import IProps from "./interface";

const Header: React.FC<IProps> = ({ time }) => {
  return (
    <StyledView>
      <StyledText>Time: </StyledText>
      <StyledText>{time}</StyledText>
    </StyledView>
  );
};

export default Header;
