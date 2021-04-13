import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import { PageWrap, Footer, Header } from "../../components/layouts";
import { Button, Text, Card } from "../../components/ui";
import { style } from "./style";
const WorkingScreen: React.FC = () => {
  const [work, setWork] = useState(true);
  const onPress = () => console.log("R");

  return (
    <ImageBackground
      source={require("../../assets/images/karsten-winegeart-ZiXqi1iSZyI-unsplash.jpg")}
      style={style.image}>
      <PageWrap>
        <Header time="4:00" />

        {work ? (
          <View style={style.workingBlock}>
            <Card title="Work" value="00:20" />
            <Card title="Cycles" value="00:20" />
            <Card title="Rest" value="00:20" />
            <Card title="Rounds" value="00:20" />
          </View>
        ) : (
          <View style={style.prepareBlock}>
            <Text style={style.prepare_title}>Prepare!!!</Text>
            <Text>10</Text>
          </View>
        )}

        <Footer>
          <Button type="danger" styles={style.btn} handleOnPress={onPress}>
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

export default WorkingScreen;
