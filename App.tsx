/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

import { NativeRouter, Route } from "react-router-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { HomeScreen, SetupScreen, WorkingScreen } from "./src/screens";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NativeRouter>
        {/* <Route exact path="/" component={HomeScreen} />
        <Route exact path="/setup" component={SetupScreen} /> */}
        <Route exact path="/" component={WorkingScreen} />
      </NativeRouter>
    </ThemeProvider>
  );
};

export default App;

/**
 * Home
 * Setup
 * Workout
 * Complexes
 */
