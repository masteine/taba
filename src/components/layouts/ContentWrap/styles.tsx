import styled from "styled-components/native";
import { View } from "react-native";

export const StyledView = ({ type = "view" }: string) => styled(View)`
  height: 100%;
  background: rgba(16, 16, 16, 0.24);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
  padding-bottom: 15px;
`;
