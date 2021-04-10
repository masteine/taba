import styled from "styled-components";
import { Text } from "react-native";

export const StyledText = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: ${({ theme }: any) => theme.colors.WHITE};
`;
