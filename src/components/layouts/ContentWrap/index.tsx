import React from "react";
import { ScrollView } from "react-native";
import IProps from "./interface";

const ContentWrap: React.FC<IProps> = ({ children, type }) => {
  return <ScrollView>{children}</ScrollView>;
};
export default ContentWrap;
