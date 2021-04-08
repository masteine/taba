import React from "react";
import { StyledButton, StyledText } from "./styles";
import IButton from "./interface";
import { useHistory } from "react-router-native";

const Button: React.FC<IButton> = ({
  children,
  type = "primary",
  size = "md",
  link,
  handleOnPress
}) => {
  const history = useHistory();

  const handlePress = (): void => {
    if (link) return history.push(link);
    handleOnPress();
  };

  return (
    <StyledButton onPress={handlePress} type={type} size={size}>
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
};

export default Button;
