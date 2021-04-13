import React, { memo } from "react";
import IProps from "./interface";
import { StyledView, StyledCard } from "./styles";
import { Text } from "../../ui";

const Card: React.FC<IProps> = ({ title, value }) => {
  return (
    <StyledView>
      <Text>{title}</Text>
      <StyledCard>
        <Text>{value}</Text>
      </StyledCard>
    </StyledView>
  );
};

export default memo(Card);
