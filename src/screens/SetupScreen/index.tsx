import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import PageWrapper from "../../components/layouts/PageWrap";
import { Button } from "../../components/ui";
import Header from "../../components/Header";

const SetupScreen: React.FC = () => {
  const handlePress = () => console.log("click");
  return (
    <ImageBackground
      source={require("../../assets/images/bg_4.png")}
      style={styles.image}>
      <PageWrapper>
        <View style={styles.timeBlock}>
          <Header />
        </View>
        <View style={styles.listBlock}>
          <Text></Text>
        </View>
        <View style={styles.btnBlock}>
          <Button handleOnPress={handlePress} type="accept">
            Save Complex
          </Button>
          <Button handleOnPress={handlePress} type="info">
            Choose Complex
          </Button>
          <Button handleOnPress={handlePress}>Start Complex</Button>
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

export default SetupScreen;
