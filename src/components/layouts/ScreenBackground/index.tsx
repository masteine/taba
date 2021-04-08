import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

interface IProps {
  children: JSX.Element | JSX.Element[];
  page: string;
}

const ScreenBackground: React.FC<IProps> = ({ children, page = "main" }) => {
  return <View>{children}</View>;
};

const bgStyles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover"
  }
});

export default ScreenBackground;
