import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ImageBackground, View } from "react-native";
import { RootState, Dispatch } from "../../appState";

import { PageWrap, Footer, Header } from "../../components/layouts";
import { Button } from "../../components/ui";
import SetupItem from "../../components/SetupItem";

import { style } from "./style";

const SetupScreen: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const { setup } = useSelector(({ counter }: RootState) => ({
    setup: counter.setup
  }));

  const onChangeSetupTime = useCallback(
    (value: string, label: string, index: number) => {
      let newValue = value;

      if (!/^\d+$/.test(value) && value.length > 0) return false;
      if (value.length === 0) newValue = "0";

      let newData = setup;
      newData[index] = { label: label, value: Number(newValue) };
      dispatch.counter.onChangeSetup(newData);
    },
    []
  );

  const onStartWorkout = () => console.log("start game");

  return (
    <ImageBackground
      source={require("../../assets/images/bg_4.png")}
      style={style.image}>
      <PageWrap bgOpacity="44">
        <Header time="4:00" />

        <View style={style.listBlock}>
          {setup.map(
            (
              { value, label }: { value: number; label: string },
              index: number
            ) => {
              return (
                <SetupItem
                  key={label}
                  time={value}
                  label={label}
                  index={index}
                  onChange={onChangeSetupTime}
                />
              );
            }
          )}
        </View>
        <Footer>
          {/*
          <Button handleOnPress={handlePress} type="accept" styles={style.btn}>
            Save Complex
          </Button>
          <Button handleOnPress={handlePress} type="info" styles={style.btn}>
            Choose Complex
          </Button> */}
          <Button handleOnPress={onStartWorkout} link="/working">
            Start Complex
          </Button>
        </Footer>
      </PageWrap>
    </ImageBackground>
  );
};

export default SetupScreen;
