import { Text } from "react-native";
import styled from "styled-components";

export const StyledText = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: ${({ theme }: any) => theme.colors.GREY};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
