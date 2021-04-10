import React, { memo } from "react";
import IProps from "./interface";
import {
  StyledView,
  StyledLabel,
  StyledValue,
  StyledTouchableOpacity,
  StyledInputText,
  StyledIconButton
} from "./styles";

const SetupItem: React.FC<IProps> = ({ label, time, onChange, index }) => {
  const value = time.toString();
  const toStringConvert = (arg: number) => arg.toString();

  const handleMinus = () =>
    time === 0 ? 0 : onChange(toStringConvert(--time), label, index);
  const handlePlus = () => onChange(toStringConvert(++time), label, index);

  return (
    <StyledView>
      <StyledLabel>{label}</StyledLabel>
      <StyledValue>
        <StyledTouchableOpacity onPress={handleMinus}>
          <StyledIconButton>-</StyledIconButton>
        </StyledTouchableOpacity>
        <StyledInputText
          onChangeText={(e: string) => onChange(e, label, index)}
          value={value}
          keyboardType="numeric"
          maxLength={4}
        />
        <StyledTouchableOpacity onPress={handlePlus}>
          <StyledIconButton>+</StyledIconButton>
        </StyledTouchableOpacity>
      </StyledValue>
    </StyledView>
  );
};

export default memo(SetupItem);
