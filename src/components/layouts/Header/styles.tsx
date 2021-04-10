import styled from "styled-components";
import { View } from "react-native";

export const StyledView = styled(View)`
  width: 100%;
  border-bottom-width: 4px;
  border-bottom-color: ${({ theme }: any) => theme.colors.DARKGREY};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 52px;
  margin-bottom: 27px;
`;
