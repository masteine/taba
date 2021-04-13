import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "center"
  },
  prepareBlock: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  workingBlock: {
    flex: 6,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  prepare_title: {
    marginBottom: 25
  },
  btn: {
    marginBottom: 15
  }
});
