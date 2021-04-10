import React, { useState, useCallback } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import PageWrapper from "../../components/layouts/PageWrap";
import { Button } from "../../components/ui";
import Header from "../../components/Header";
import SetupItem from "../../components/SetupItem";

const data = [
  { label: "prepare", value: 10 },
  { label: "work", value: 20 },
  { label: "rest", value: 10 },
  { label: "cycles", value: 8 },
  { label: "rounds", value: 1 },
  { label: "rounds rest", value: 20 }
];

const SetupScreen: React.FC = () => {
  const [timeSetup, setTimeSetup] = useState(data);

  const handlePress = () => console.log("click");

  const onChangeSetupTime = useCallback(
    (value: string, label: string, index: number) => {
      let newValue = value;

      if (!/^\d+$/.test(value) && value.length > 0) return false;
      if (value.length === 0) newValue = "0";

      let newData = timeSetup;
      newData[index] = { label: label, value: Number(newValue) };
      setTimeSetup([...newData]);
    },
    []
  );

  return (
    <ImageBackground
      source={require("../../assets/images/bg_4.png")}
      style={styles.image}>
      <PageWrapper>
        <View style={styles.timeBlock}>
          <Header time="4:00" />
        </View>
        <View style={styles.listBlock}>
          {timeSetup.map(({ value, label }, index) => {
            return (
              <SetupItem
                key={label}
                time={value}
                label={label}
                index={index}
                onChange={onChangeSetupTime}
              />
            );
          })}
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
