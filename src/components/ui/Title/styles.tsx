import { Text } from "react-native";
import styled from "styled-components";

export const StyledText = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  color: ${({ theme }: any) => theme.colors.WHITE};
`;
