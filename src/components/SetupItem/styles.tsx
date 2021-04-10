import styled from "styled-components";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export const StyledView = styled(View)`
  background: ${({ theme }: any) => theme.colors.LIGHTGREY};
  width: 100%;
  border-radius: 12px;
  height: 52px;
  color: ${({ theme }: any) => theme.colors.BLACK};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 7px 7px 7px 30px;
  margin-bottom: 13px;
`;

export const StyledLabel = styled(Text)`
  color: ${({ theme }: any) => theme.colors.BLACK};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
  width: 49%;
  text-transform: capitalize;
`;

export const StyledValue = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 49%;
  height: 60px;
`;

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  height: 34px;
  width: 34px;
  display: flex;
  background-color: ${({ theme }: any) => theme.colors.DARKGREY};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledIconButton = styled(Text)`
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  text-align: center;
  color: ${({ theme }: any) => theme.colors.BLACK};
`;

export const StyledInputText = styled(TextInput)`
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  text-align: center;
  padding-top: 15px;
`;
