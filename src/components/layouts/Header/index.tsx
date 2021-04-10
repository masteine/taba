import React from "react";
import IProps from "./interface";
import { StyledView } from "./styles";
import { Text } from "../../ui";

const Header: React.FC<IProps> = ({ time }) => {
  return (
    <StyledView>
      <Text>Time: </Text>
      <Text>{time}</Text>
    </StyledView>
  );
};

export default Header;
