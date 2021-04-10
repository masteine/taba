import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { PageWrap, Footer, Header } from "../../components/layouts";
import { Button } from "../../components/ui";

const WorkingScreen: React.FC = () => {
  const onPress = () => console.log("R");
  return (
    <ImageBackground
      source={require("../../assets/images/karsten-winegeart-ZiXqi1iSZyI-unsplash.jpg")}
      style={styles.image}>
      <PageWrap>
        <Header time="4:00" />

        <View style={styles.contentBlock}>
          <Text>Rest</Text>
        </View>

        <Footer>
          <Button type="danger" styles={styles.btn} handleOnPress={onPress}>
            Pause
          </Button>
          <Button type="warning" handleOnPress={onPress}>
            Stop
          </Button>
        </Footer>
      </PageWrap>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "center"
  },
  contentBlock: {
    flex: 6
  },
  btn: {
    marginBottom: 15
  }
});

export default WorkingScreen;
