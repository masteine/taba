import React from "react";
import { View } from "react-native";
import { StyledView, StyledText } from "./styles";

const Header: React.FC = () => {
  return (
    <StyledView>
      <StyledText>Time: </StyledText>
      <StyledText>4:00</StyledText>
    </StyledView>
  );
};

export default Header;
