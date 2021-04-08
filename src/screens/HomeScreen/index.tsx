import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import PageWrapper from "../../components/layouts/PageWrap";
import { Title, Button } from "../../components/ui";

const HomeScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/bg_1.png")}
      style={bgStyles.image}>
      <PageWrapper>
        <Title>Tabata timer</Title>
        <Button>Start</Button>
      </PageWrapper>
    </ImageBackground>
  );
};

const bgStyles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover"
  }
});

export default HomeScreen;
