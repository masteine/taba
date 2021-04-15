import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Dispatch } from "../../appState";
import { ImageBackground, View } from "react-native";
import { PageWrap, Footer, Header } from "../../components/layouts";
import { Button, Text, Card } from "../../components/ui";
import { style } from "./style";
import { timeToString } from "../../utils/timeConverter";

const WorkingScreen: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const { setup, time } = useSelector(({ counter }: RootState) => ({
    setup: counter.setup,
    time: counter.time
  }));
  const [workingStatus, setWorkingStatus] = useState(false);

  const { work, cycles, rest, rounds, prepare, rounds_rest } = setup;

  const onPause = () => console.log("R");
  const stopWorking = () => console.log("stop working");

  return (
    <ImageBackground
      source={require("../../assets/images/karsten-winegeart-ZiXqi1iSZyI-unsplash.jpg")}
      style={style.image}>
      <PageWrap bgOpacity="77">
        <Header time={time} />

        {workingStatus ? (
          <View style={style.workingBlock}>
            <Card title="Prepare" value={timeToString(prepare)} />
            <Card title="Work" value={timeToString(work)} />
            <Card title="Rest" value={timeToString(rest)} />
            <Card title="Cycles" value={cycles} />
            <Card title="Rounds" value={rounds} />
            <Card title="R. rest" value={timeToString(rounds_rest)} />
          </View>
        ) : (
          <View style={style.prepareBlock}>
            <Text style={style.prepare_title}>Prepare!!!</Text>
            <Text>{prepare.toString()}</Text>
          </View>
        )}

        <Footer>
          <Button type="warning" styles={style.btn} handleOnPress={onPause}>
            Pause
          </Button>
          <Button type="danger" link="/setup" handleOnPress={stopWorking}>
            Stop
          </Button>
        </Footer>
      </PageWrap>
    </ImageBackground>
  );
};

export default WorkingScreen;
