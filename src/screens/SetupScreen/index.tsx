import React, { useState, useCallback } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { PageWrap, Footer, Header } from "../../components/layouts";
import { Button } from "../../components/ui";
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
      <PageWrap>
        <Header time="4:00" />

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
        <Footer>
          <Button handleOnPress={handlePress} type="accept" styles={styles.btn}>
            Save Complex
          </Button>
          <Button handleOnPress={handlePress} type="info" styles={styles.btn}>
            Choose Complex
          </Button>
          <Button handleOnPress={handlePress} link="/working">
            Start Complex
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
  listBlock: {
    flex: 5
  },
  btn: {
    marginBottom: 15
  }
});

export default SetupScreen;
