import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import PageWrapper from "../../components/layouts/PageWrap";
import { Button } from "../../components/ui";
import Header from "../../components/Header";

const WorkingScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/karsten-winegeart-ZiXqi1iSZyI-unsplash.jpg")}
      style={styles.image}>
      <PageWrapper>
        <Header time="4:00" />
        <View>
          <Text>Rest</Text>
        </View>
      </PageWrapper>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "center"
  },
  timeBlock: {
    flex: 1
  },
  listBlock: {
    flex: 5
  },
  btnBlock: {
    flex: 2.2,
    justifyContent: "space-between"
  }
});

export default WorkingScreen;
