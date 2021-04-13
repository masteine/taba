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
import { Provider } from "react-redux";
import { HomeScreen, SetupScreen, WorkingScreen } from "./src/screens";
import { store } from "./src/appState";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NativeRouter>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/setup" component={SetupScreen} />
          <Route exact path="/working" component={WorkingScreen} />
        </NativeRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

/**
 * ver. 1.0
 * Home
 * Setup
 * Workout
 *
 * ver. 2.0
 * @next version
 * Complexes
 */
