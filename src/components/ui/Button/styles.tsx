import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";

type IProps = {
  theme: any;
  type?: string;
};

const buttonWidth: { md: string; sm: string } = {
  md: "100%",
  sm: "50%"
};

export const StyledButton = styled(TouchableOpacity)`
  background-color: ${({ theme, type }: IProps) => theme.button[type]};
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 170px;
  width: ${({ size }: string) => buttonWidth[size]};
`;

export const StyledText = styled(Text)`
  color: ${({ theme }: IProps) => theme.colors.WHITE};
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
`;
