import React from "react";
import { ImageBackground, View } from "react-native";
import PageWrapper from "../../components/layouts/PageWrap";
import { Title, Button, Subtitle } from "../../components/ui";
import { style } from "./style";

const HomeScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/bg_1.png")}
      style={style.image}>
      <PageWrapper>
        <View style={style.upperBlock}>
          <Title>Tabata timer</Title>
          <Button size="sm" link="/setup">
            Start
          </Button>
        </View>
        <View style={style.subBlock}>
          <Subtitle>Create your own interval complex</Subtitle>
        </View>
      </PageWrapper>
    </ImageBackground>
  );
};

export default HomeScreen;
