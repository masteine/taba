import React, { memo } from "react";
import IProps from "./interface";
import { StyledView } from "./styles";
import { Text } from "../../ui";

const Card: React.FC<IProps> = ({ children }) => {
  return (
    <StyledView>
      <Text>Work</Text>
    </StyledView>
  );
};

export default memo(Card);
