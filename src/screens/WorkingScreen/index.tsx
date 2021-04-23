import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Dispatch } from "../../appState";
import { ImageBackground, View } from "react-native";
import { PageWrap, Footer, Header } from "../../components/layouts";
import { Button, Text, Card } from "../../components/ui";
import { style } from "./style";
import { timeToString } from "../../utils/timeConverter";
import { useTimeCounter } from "../../hooks";
import { useHistory } from "react-router-native";

const WorkingScreen: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const history = useHistory();
  const { setup, time, start, startingSetup } = useSelector(
    ({ counter }: RootState) => ({
      setup: counter.setup,
      time: counter.time,
      start: counter.start,
      startingSetup: counter.startingSetup
    })
  );

  const { currentSetup, toCyclesEnd, allTime } = useTimeCounter(
    time,
    setup,
    start,
    startingSetup
  );
  const { work, cycles, rest, rounds, prepare, rounds_rest } = currentSetup;

  const onPause = () => dispatch.counter.stopTimer();

  const stopWorking = () => {
    dispatch.counter.stopTimer();
    history.push("/setup");
  };

  const isPrepare = prepare === 0;
  const isDone = start && prepare === 0 && cycles === 0 && rounds === 0;

  // console.group("working screen", { currentSetup, toCyclesEnd, allTime });

  return (
    <ImageBackground
      source={require("../../assets/images/karsten-winegeart-ZiXqi1iSZyI-unsplash.jpg")}
      style={style.image}>
      <PageWrap bgOpacity="77">
        <Header time={allTime} />

        {isPrepare ? (
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
            <Text>{toCyclesEnd.toString()}</Text>
          </View>
        )}

        <Footer>
          <Button type="warning" styles={style.btn} handleOnPress={onPause}>
            Pause
          </Button>
          <Button type="danger" handleOnPress={stopWorking}>
            End workout
          </Button>
        </Footer>
      </PageWrap>
    </ImageBackground>
  );
};

export default WorkingScreen;
