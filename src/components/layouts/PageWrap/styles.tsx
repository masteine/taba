import styled from "styled-components/native";
import { View } from "react-native";

export const StyledView = styled(View)`
  height: 100%;
  background: rgba(
    16,
    16,
    16,
    ${({ bgImageOpacity }: string) => bgImageOpacity}
  );
  box-shadow: 0px 4px 4px
    rgba(0, 0, 0, ${({ bgImageOpacity }: string) => bgImageOpacity});
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
  padding-bottom: 15px;
`;
