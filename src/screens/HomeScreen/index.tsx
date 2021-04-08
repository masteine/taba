import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import PageWrapper from "../../components/layouts/PageWrap";
import { Title, Button, Subtitle } from "../../components/ui";

const HomeScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/bg_1.png")}
      style={styles.image}>
      <PageWrapper>
        <View style={styles.upperBlock}>
          <Title>Tabata timer</Title>
          <Button size="sm" link="/setup">
            Start
          </Button>
        </View>
        <View style={styles.subBlock}>
          <Subtitle>Create your own interval complex</Subtitle>
        </View>
      </PageWrapper>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover"
  },
  upperBlock: {
    paddingTop: 45,
    flex: 2,
    justifyContent: "space-around",
    alignItems: "center"
  },
  subBlock: {
    flex: 1,
    justifyContent: "center"
  }
});

export default HomeScreen;
