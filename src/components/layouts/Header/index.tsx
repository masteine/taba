import React from "react";
import IProps from "./interface";
import { StyledView } from "./styles";
import { Text } from "../../ui";
import { timeToString } from "../../../utils/timeConverter";

const Header: React.FC<IProps> = ({ time }) => {
  return (
    <StyledView>
      <Text>Time: </Text>
      <Text>{timeToString(time)}</Text>
    </StyledView>
  );
};

export default Header;
