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
  useColorScheme,
  StyleSheet,
} from "react-native";

import {
  Colors,
  Header,
} from "react-native/Libraries/NewAppScreen";

import { hide } from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/store';
import { networkService } from '@/networking';
import { RootNavigator } from './naviagtion';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const handleStoreRehydration = () => {
    const { accessToken } = store.getState().user;

    if (accessToken) {
      networkService.setAccessToken(accessToken);
    }

    hide();
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
      <PersistGate onBeforeLift={handleStoreRehydration} persistor={persistor}>
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      > */}
        <GestureHandlerRootView style={styles.container}>
        {/* <Header /> */}
        <RootNavigator />
        </GestureHandlerRootView>
      {/* </ScrollView> */}
      </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};



export default App;
