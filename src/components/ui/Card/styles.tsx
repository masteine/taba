import styled from "styled-components/native";
import { View } from "react-native";

export const StyledView = styled(View)`
  text-align: center;
  align-items: center;
  flex: 1 0 49%;
  max-width: 160px;
  margin-bottom: 25px;
`;

export const StyledCard = styled(View)`
  background: rgba(196, 196, 196, 0.5);
  border-radius: 12px;
  width: 100%;
  height: 100%
  max-height: 65px;
  align-items: center;
  justify-content: center;
  margin-top: 9px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
