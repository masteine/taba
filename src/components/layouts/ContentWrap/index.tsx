import React from "react";
import { View, ScrollView } from "react-native";
import IProps from "./interface";

const ContentWrap: React.FC<IProps> = ({ children, type }) => {
  return <View>{children}</View>;
};
export default ContentWrap;
