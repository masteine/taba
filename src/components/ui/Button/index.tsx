import React from "react";
import { StyledButton, StyledText } from "./styles";
import IButton from "./interface";
import { useHistory } from "react-router-native";

const Button: React.FC<IButton> = ({
  children,
  type = "primary",
  size = "md",
  link,
  styles,
  handleOnPress
}) => {
  const history = useHistory();

  const handlePress = (): void => {
    if (link) return history.push(link);
    handleOnPress();
  };

  return (
    <StyledButton onPress={handlePress} type={type} size={size} style={styles}>
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
};

export default Button;
