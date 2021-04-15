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

const SetupItem: React.FC<IProps> = ({ label, time, onChange }) => {
  const value = time.toString();
  const toStringConvert = (arg: number) => arg.toString();

  const handleMinus = () =>
    time === 0 ? 0 : onChange(toStringConvert(--time), label);
  const handlePlus = () => onChange(toStringConvert(++time), label);

  return (
    <StyledView>
      <StyledLabel>{label.replace(/_/g, " ")}</StyledLabel>
      <StyledValue>
        <StyledTouchableOpacity onPress={handleMinus}>
          <StyledIconButton>-</StyledIconButton>
        </StyledTouchableOpacity>
        <StyledInputText
          onChangeText={(e: string) => onChange(e, label)}
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
