import styled from "styled-components";
import { View, Text } from "react-native";

export const StyledView = styled(View)`
  width: 100%;
  border-bottom-width: 4px;
  border-bottom-color: ${({ theme }: any) => theme.colors.DARKGREY};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 52px;
  width: 100%;
`;

export const StyledText = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: ${({ theme }: any) => theme.colors.WHITE};
`;
