import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ImageBackground, View } from "react-native";
import { RootState, Dispatch } from "../../appState";
import { useHistory } from "react-router-native";

import { PageWrap, Footer, Header } from "../../components/layouts";
import { Button } from "../../components/ui";
import SetupItem from "../../components/SetupItem";
import { style } from "./style";

const SetupScreen: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const history = useHistory();
  const { setup, time } = useSelector(({ counter }: RootState) => ({
    setup: counter.setup,
    time: counter.time
  }));

  const onChangeSetupTime = useCallback((value: string, label: string) => {
    dispatch.counter.updateSetup({ value, label });
  }, []);

  const onStartWorkout = (): void => {
    dispatch.counter.toggleWorkoutStatus(true);
    history.push("/working");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/bg_4.png")}
      style={style.image}>
      <PageWrap bgOpacity="44">
        <Header time={time} />

        <View style={style.listBlock}>
          {Object.entries(setup).map(([key, value]) => {
            return (
              <SetupItem
                key={key}
                time={value}
                label={key}
                onChange={onChangeSetupTime}
              />
            );
          })}
        </View>
        <Footer>
          {/*
          <Button handleOnPress={handlePress} type="accept" styles={style.btn}>
            Save Complex
          </Button>
          <Button handleOnPress={handlePress} type="info" styles={style.btn}>
            Choose Complex
          </Button> */}
          <Button handleOnPress={onStartWorkout}>Start Complex</Button>
        </Footer>
      </PageWrap>
    </ImageBackground>
  );
};

export default SetupScreen;
